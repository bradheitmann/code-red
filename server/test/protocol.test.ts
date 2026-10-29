import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { handleRequest as localHandleRequest } from '../index.ts';
import { documents } from '../generated/content.ts';

const handleRequest = async (request: Request): Promise<Response> => {
  const origin = process.env.MCP_TEST_ORIGIN;
  return origin ? fetch(new Request(new URL(new URL(request.url).pathname, origin), request)) : localHandleRequest(request);
};

type RpcResponse = { result?: Record<string, unknown>; error?: { code: number; message: string } };
const headers = { 'Content-Type': 'application/json', Accept: 'application/json, text/event-stream' };
async function rpc(method: string, params: unknown = {}, id: number | undefined = 1): Promise<{ response: Response; body: RpcResponse }> {
  const response = await handleRequest(new Request('https://example.test/mcp', {
    method: 'POST', headers,
    body: JSON.stringify({ jsonrpc: '2.0', ...(id === undefined ? {} : { id }), method, params }),
  }));
  const text = await response.text();
  const data = text.startsWith('event:') || text.startsWith('data:') ? text.split('\n').find((line) => line.startsWith('data:'))?.slice(5).trim() : text;
  return { response, body: data ? JSON.parse(data) as RpcResponse : {} };
}

test('legacy initialize negotiates protocol without allocating a session', async () => {
  const { response, body } = await rpc('initialize', { protocolVersion: '2025-11-25', capabilities: {}, clientInfo: { name: 'protocol-test', version: '1' } });
  assert.equal(response.status, 200);
  assert.equal(response.headers.has('mcp-session-id'), false);
  assert.equal((body.result?.serverInfo as { name: string }).name, 'code-red');
  assert.equal(body.result?.protocolVersion, '2025-11-25');
});

test('resource list and every resource read exactly match canonical Markdown', async () => {
  const { body } = await rpc('resources/list');
  const resources = body.result?.resources as { uri: string }[];
  assert.equal(resources.length, documents.length);
  for (const document of documents) {
    const canonical = await readFile(new URL('../../skills/code-red/' + document.path, import.meta.url), 'utf8');
    const result = await rpc('resources/read', { uri: document.uri });
    const contents = result.body.result?.contents as { text: string }[];
    assert.equal(contents[0]?.text, canonical);
    assert.equal(document.text, canonical);
  }
});

test('prompt lists and produces canonical skill plus task brief', async () => {
  const list = await rpc('prompts/list');
  assert.equal((list.body.result?.prompts as { name: string }[])[0]?.name, 'code-red');
  const result = await rpc('prompts/get', { name: 'code-red', arguments: { objective: 'Ship usable outcome', oracle: 'Independent observed result', constraints: 'Four hours, one-hour permission checkpoint' } });
  const messages = result.body.result?.messages as { content: { text: string } }[];
  assert.match(messages[0]!.content.text, /Code Red/i);
  assert.match(messages[1]!.content.text, /Ship usable outcome/);
});

test('unknown resources/methods and invalid prompt args return protocol errors', async () => {
  for (const [method, params] of [
    ['resources/read', { uri: 'file:///etc/passwd' }],
    ['prompts/get', { name: 'code-red', arguments: {} }],
    ['execute-agent', {}],
  ] as const) {
    const result = await rpc(method, params);
    assert.ok(result.body.error, JSON.stringify(result.body));
  }
});

test('notifications accepted without a response body', async () => {
  const response = await handleRequest(new Request('https://example.test/mcp', { method: 'POST', headers, body: JSON.stringify({ jsonrpc: '2.0', method: 'notifications/initialized' }) }));
  assert.equal(response.status, 202);
  assert.equal(await response.text(), '');
});

test('HTTP methods, origin, body limits and malformed JSON are bounded', async () => {
  for (const method of ['GET', 'DELETE', 'PUT']) {
    assert.equal((await handleRequest(new Request('https://example.test/mcp', { method }))).status, 405);
  }
  assert.equal((await handleRequest(new Request('https://example.test/mcp', { method: 'POST', headers: { ...headers, Origin: 'https://evil.test' }, body: '{}' }))).status, 403);
  const malformed = await handleRequest(new Request('https://example.test/mcp', { method: 'POST', headers, body: '{' }));
  assert.equal(malformed.status, 400);
  const oversized = await handleRequest(new Request('https://example.test/mcp', { method: 'POST', headers, body: 'x'.repeat(32769) }));
  assert.equal(oversized.status, 413);
  assert.equal((await handleRequest(new Request('https://example.test/unknown'))).status, 404);
  assert.equal((await handleRequest(new Request('https://example.test/health'))).status, 200);
});

test('stateless requests need no session and ignore arbitrary session identifiers', async () => {
  const response = await handleRequest(new Request('https://example.test/mcp', { method: 'POST', headers: { ...headers, 'mcp-session-id': 'no-server-state' }, body: JSON.stringify({ jsonrpc: '2.0', id: 4, method: 'resources/list' }) }));
  assert.equal(response.status, 200);
  assert.equal(response.headers.has('mcp-session-id'), false);
});

test('current per-request protocol discovers and reads without initialize', async () => {
  const response = await handleRequest(new Request('https://example.test/mcp', {
    method: 'POST', headers: { ...headers, 'MCP-Protocol-Version': '2026-07-28', 'Mcp-Method': 'server/discover' },
    body: JSON.stringify({ jsonrpc: '2.0', id: 10, method: 'server/discover', params: { _meta: { 'io.modelcontextprotocol/protocolVersion': '2026-07-28', 'io.modelcontextprotocol/clientCapabilities': {} } } }),
  }));
  assert.equal(response.status, 200);
  const body = await response.json() as RpcResponse;
  assert.deepEqual(body.result?.supportedVersions, ['2026-07-28']);
  const read = await handleRequest(new Request('https://example.test/mcp', {
    method: 'POST', headers: { ...headers, 'MCP-Protocol-Version': '2026-07-28', 'Mcp-Method': 'resources/list' },
    body: JSON.stringify({ jsonrpc: '2.0', id: 11, method: 'resources/list', params: { _meta: { 'io.modelcontextprotocol/protocolVersion': '2026-07-28', 'io.modelcontextprotocol/clientCapabilities': {} } } }),
  }));
  assert.equal(read.status, 200);
  assert.equal(((await read.json() as RpcResponse).result?.resources as unknown[]).length, documents.length);
});

test('unsupported protocol versions and wrong media types are rejected', async () => {
  const wrongType = await handleRequest(new Request('https://example.test/mcp', { method: 'POST', headers: { ...headers, 'Content-Type': 'text/plain' }, body: '{}' }));
  assert.equal(wrongType.status, 415);
  const response = await handleRequest(new Request('https://example.test/mcp', {
    method: 'POST', headers: { ...headers, 'MCP-Protocol-Version': '2099-01-01', 'Mcp-Method': 'resources/list' },
    body: JSON.stringify({ jsonrpc: '2.0', id: 12, method: 'resources/list', params: { _meta: { 'io.modelcontextprotocol/protocolVersion': '2099-01-01', 'io.modelcontextprotocol/clientCapabilities': {} } } }),
  }));
  assert.equal(response.status, 400);
  assert.ok((await response.json() as RpcResponse).error);
});
