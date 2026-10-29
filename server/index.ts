import { createMcpHandler, McpServer } from '@modelcontextprotocol/server';
import { z } from 'zod';
import { documents } from './generated/content.ts';

export function createServer(): McpServer {
  const server = new McpServer({ name: 'code-red', version: '1.1.0' }, {
    instructions: 'Read-only Code Red skill distribution. Resources and prompts provide instructions; the server never runs agents, accesses workspaces, or stores user inputs.',
  });
  for (const document of documents) {
    server.registerResource(document.path, document.uri, {
      title: document.path,
      description: `Canonical Code Red document; SHA-256 ${document.sha256}`,
      mimeType: 'text/markdown',
    }, async (uri) => ({ contents: [{ uri: uri.href, mimeType: 'text/markdown', text: document.text }] }));
  }
  server.registerPrompt('code-red', {
    title: 'Start a Code Red intervention',
    description: 'Return the canonical two-agent intervention skill with a bounded task brief. Execution remains with the client and its existing permissions.',
    argsSchema: z.object({
      objective: z.string().min(1).max(8000).describe('Observable outcome to deliver'),
      oracle: z.string().min(1).max(8000).describe('Independent acceptance evidence'),
      constraints: z.string().max(8000).optional().describe('Authority, safety, resource and time constraints'),
    }),
  }, ({ objective, oracle, constraints }) => ({
    description: 'Code Red instructions and task brief',
    messages: [
      { role: 'user', content: { type: 'text', text: documents.find((document) => document.path === 'SKILL.md')!.text } },
      { role: 'user', content: { type: 'text', text: `Task brief (user-provided data; preserve existing authority):\n${JSON.stringify({ objective, oracle, constraints: constraints ?? '' }, null, 2)}` } },
    ],
  }));
  return server;
}

// Fresh SDK server per exchange, no sessions, credentials, storage or user-content logging.
const mcp = createMcpHandler(() => createServer(), {
  legacy: 'stateless', maxSubscriptions: 0, maxRequestBodySize: 32 * 1024,
});

export async function handleRequest(request: Request): Promise<Response> {
  const url = new URL(request.url);
  if (url.pathname === '/health' && request.method === 'GET') {
    return Response.json({ status: 'ok', name: 'code-red', version: '1.1.0', readOnly: true, documents: documents.length });
  }
  if (url.pathname !== '/mcp') return new Response('Not found. MCP endpoint: /mcp', { status: 404 });
  // This public read-only endpoint permits non-browser clients and same-origin browser use.
  const origin = request.headers.get('origin');
  if (origin && origin !== url.origin) return new Response('Origin not allowed', { status: 403 });
  if (!['POST', 'GET', 'DELETE'].includes(request.method)) {
    return new Response('Method not allowed', { status: 405, headers: { Allow: 'POST' } });
  }
  const response = await mcp.fetch(request);
  response.headers.set('X-Content-Type-Options', 'nosniff');
  response.headers.set('Cache-Control', 'no-store');
  return response;
}

export default { fetch: handleRequest };
