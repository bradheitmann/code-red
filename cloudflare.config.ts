import { defineConfig } from 'cf/config';

export default defineConfig({
  worker: {
    name: 'code-red-mcp',
    entrypoint: './server/index.ts',
    compatibilityDate: '2026-10-28',
    observability: {
      enabled: true,
      redactQueryString: true,
      logs: { enabled: true, invocationLogs: true },
      traces: { enabled: true },
    },
  },
});
