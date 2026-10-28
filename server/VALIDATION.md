# Server validation

Validated on 2026-10-28 with Node 26.12.0 and pnpm 12.14.0.

- `pnpm run typecheck`: PASS (`tsc --noEmit`, strict TypeScript).
- `pnpm test`: PASS, 9 protocol integration tests.
- `pnpm run build`: PASS, cf CLI delegates to Cloudflare Vite plugin; Worker bundle approximately 778 KB / 188 KB gzip.
- `pnpm audit`: no known vulnerabilities.
- `pnpm run build:library`: PASS, ESM and declaration output.
- Start `pnpm dev`, then in a second shell run `MCP_TEST_ORIGIN=http://localhost:5173 pnpm test`: PASS, all 9 tests against the actual Workers runtime. Use the origin printed by the local dev server if its port differs.

Protocol coverage: legacy initialize, current 2026-07-28 discovery and per-request envelope, resource listing and exact canonical reads, prompt listing/retrieval/argument validation, unknown methods/resources, notifications, HTTP methods, session-free operation, origin rejection, body-size limit, malformed JSON, unsupported protocol revision and media type.

The canonical Markdown bundle is generated before checks/build/pack. Resources use `code-red://skill/<relative Markdown path>`. The prompt is named `code-red` and accepts `objective`, `oracle`, and optional `constraints`.

The Worker exposes `/mcp` and `/health`. It has no storage, credentials, account identifiers, agent execution, outbound business API calls, or private run records. It supports public non-browser clients and same-origin browser requests; cross-origin browser requests are rejected. Sessions and subscription streams are disabled.

Deployment and npm publication are separate release actions. These local results do not establish either has occurred.
