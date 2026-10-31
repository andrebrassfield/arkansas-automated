import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import test from 'node:test';
import ts from 'typescript';

// Astro replaces import.meta.env at build time. Supply only that configuration
// boundary; execute the real URL-resolution module without mocking its logic.
async function loadHub(buildEnv = {}) {
  const source = await readFile(new URL('../src/lib/hub.ts', import.meta.url), 'utf8');
  const configured = `const __buildEnv = ${JSON.stringify(buildEnv)};\n` +
    source.replaceAll('import.meta.env.', '__buildEnv.');
  const { outputText } = ts.transpileModule(configured, {
    compilerOptions: { module: ts.ModuleKind.ESNext, target: ts.ScriptTarget.ES2022 },
  });
  return import(`data:text/javascript;base64,${Buffer.from(outputText).toString('base64')}`);
}

test('lead intake defaults to the approved stable Vercel receiver', async () => {
  const hub = await loadHub();
  assert.equal(hub.HUB_LEADS_URL, 'https://fort-smith-pros.vercel.app/api/public/leads');
});

test('explicit lead overrides retain whitespace and trailing-slash normalization', async () => {
  const hub = await loadHub({ PUBLIC_HUB_LEADS_URL: '  https://receiver.example/intake///  ' });
  assert.equal(hub.HUB_LEADS_URL, 'https://receiver.example/intake');
});

test('blank lead override uses the stable receiver even when the general hub origin changes', async () => {
  const hub = await loadHub({ PUBLIC_HUB_LEADS_URL: '  ', PUBLIC_HUB_ORIGIN: 'https://hub.example/' });
  assert.equal(hub.HUB_LEADS_URL, 'https://fort-smith-pros.vercel.app/api/public/leads');
  assert.equal(hub.HUB_PV_URL, 'https://hub.example/api/public/pv');
  assert.equal(hub.HUB_ONBOARD_URL, 'https://hub.example/api/public/onboard');
});

test('pageview and onboarding defaults remain unchanged', async () => {
  const hub = await loadHub();
  assert.equal(hub.HUB_PV_URL, 'https://fortsmithdirectory.com/api/public/pv');
  assert.equal(hub.HUB_ONBOARD_URL, 'https://fortsmithdirectory.com/api/public/onboard');
});
