import { execFileSync } from 'node:child_process';
import { readFile } from 'node:fs/promises';
import { createHash } from 'node:crypto';
import { basename } from 'node:path';

const file = process.argv[2];
if (!file) throw new Error('Usage: pnpm exec tsx server/scripts/check-package.ts <reviewed.tgz>');
const entries = execFileSync('tar', ['-tzf', file], { encoding: 'utf8' }).trim().split('\n');
const allowed = /^(?:package\/(?:LICENSE|VERSION|package\.json|README\.md|server\/README\.md|assets\/route\.svg)|package\/dist\/(?:index|generated\/content)\.(?:js|d\.ts)|package\/skills\/code-red\/(?:SKILL\.md|agents\/openai\.yaml|assets\/run-card\.md|references\/(?:casebook|inversion-methods|roles-and-messages)\.md))$/;
for (const entry of entries) {
  if (!allowed.test(entry)) throw new Error(`Unexpected tarball entry: ${entry}`);
  const content = execFileSync('tar', ['-xOf', file, entry], { encoding: 'utf8' });
  if (/\/Users\/|\/home\/[a-zA-Z0-9_-]+\/|-----BEGIN [A-Z ]*PRIVATE KEY|(?:npm|ghp)_[A-Za-z0-9]{30,}/.test(content)) {
    throw new Error(`Private path or credential-shaped content in ${entry}`);
  }
}
for (const required of ['package/README.md', 'package/server/README.md', 'package/dist/index.js', 'package/dist/index.d.ts', 'package/skills/code-red/SKILL.md']) {
  if (!entries.includes(required)) throw new Error(`Missing required entry: ${required}`);
}
const manifest = JSON.parse(execFileSync('tar', ['-xOf', file, 'package/package.json'], { encoding: 'utf8' })) as { name?: string; private?: boolean; publishConfig?: { access?: string } };
if (manifest.name !== '@bradheitmann/code-red' || manifest.private || manifest.publishConfig?.access !== 'public') throw new Error('Unexpected publication manifest');
console.log(JSON.stringify({ artifact: basename(file), files: entries.length, sha256: createHash('sha256').update(await readFile(file)).digest('hex'), allowlist: 'PASS', pathAndCredentialPatternScan: 'PASS', note: 'Pattern checks supplement independent public-content review; they do not prove absence of all private information.' }, null, 2));
