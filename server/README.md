# Code Red MCP server

This public, read-only server distributes the canonical skill in `skills/code-red/`.
It returns instructions and task briefs; it does not launch agents, inspect client
workspaces, run interventions, choose models, or call model providers.

## Local development and checks

From a source checkout, use Node 22.18 or newer and pnpm. The cf CLI does not support Bun.

```sh
pnpm install --frozen-lockfile
pnpm run typecheck
pnpm test
pnpm run build
pnpm run build:library
pnpm audit
pnpm dev
```

The dev server prints its actual local origin. To exercise the same protocol tests
against the actual Workers runtime, keep it running and use another shell:

```sh
MCP_TEST_ORIGIN=http://localhost:5173 pnpm test
```

`pnpm test` without that variable exercises the fetch handler directly. The tests
cover initialization/discovery, canonical resource reads, prompts, malformed and
unsupported requests, body limits, origin checks, methods and session behavior.
`pnpm run generate` deterministically bundles Markdown from `skills/code-red/`;
checks, builds and packing invoke it automatically. Edit that canonical directory,
not `server/generated/content.ts`.

## Connect a client

Configure a native HTTP MCP client with the deployed `/mcp` URL and Streamable HTTP
transport. For clients using an `mcpServers` JSON configuration, the connection is:

```json
{
  "mcpServers": {
    "code-red": {
      "type": "http",
      "url": "https://your-worker.example/mcp"
    }
  }
}
```

Client configuration formats vary; use its native HTTP connection rather than a
local stdio command. No authentication is required by this public distribution
server. It supports current 2026-07-28 per-request MCP and stateless legacy
Streamable HTTP. It does not allocate sessions or open subscription streams.
Cross-origin browser requests are rejected; server-side MCP clients and
same-origin browser requests are supported.

- `/mcp`: MCP endpoint.
- `/health`: small JSON health response.
- Resources: `code-red://skill/SKILL.md` and each bundled Markdown file under the
  same URI prefix, with SHA-256 in its resource description.
- Prompt: `code-red`, requiring `objective` and `oracle`, with optional
  `constraints`. It returns the exact skill and a separate user-provided brief.
- There are no agent-execution tools.

## Privacy

The application has no database, application storage, credentials, user sessions,
provider API access or user-content logging. Prompt arguments are processed to
produce a response and are not persisted by application code. Do not submit secrets
or private incident transcripts to a public endpoint.

Cloudflare still handles network traffic and may retain platform request metadata,
invocation logs, traces and other provider access/security records under the
account's settings and policies. Query strings are redacted by this project's
observability configuration. This is not a promise of zero provider logging or
anonymous transport. The application does not add request bodies or prompt content
to those logs.

## Deployment and release

`cloudflare.config.ts` contains no account ID. Before any deployment, independently
verify that the cf CLI's current authentication and selected account are the
intended deployment account. Browser identity, another connector's identity and a
previous CLI session are not substitutes for that check. Do not deploy through a
different account merely because it is already authenticated. Keep any account
selection or credentials outside tracked files.

After the account check and release review:

```sh
pnpm run build
pnpm run deploy
```

Use the cf CLI's documented authentication/profile commands for the installed
version. Deployment is a separate action; successful local checks do not mean the
Worker has been published.

The npm package exposes the compiled ESM server library and canonical skill files.
Prepare and inspect the exact tarball before publishing it:

```sh
pnpm pack --pack-destination /tmp/code-red-release
```

The package allowlist excludes development configuration, tests, Worker builds,
private records and credentials. Publish only the reviewed tarball through an
authenticated npm account with the intended scope; browser login/2FA may require
the account owner. A package install does not start any agents or server.
