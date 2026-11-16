import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import test from 'node:test';

// Static landing pages that survive the 2026-11-16 reset. The med spa,
// lobby screen, missed-call test and old plan calculator pages were retired
// and redirect in vercel.json (see site-positioning.test.mjs).

async function page(path) {
  return readFile(new URL(`../dist/${path.replace(/^\//, '').replace(/\/$/, '')}/index.html`, import.meta.url), 'utf8');
}

test('/answer-check is built, stripped of review-only chrome, and keeps one CTA label', async () => {
  const html = await page('/answer-check/');
  assert.match(html, /<title>Free Answer Check \| Arkansas Automated<\/title>/);
  assert.equal(html.includes('data-review-only'), false, 'review bar');
  assert.equal(/sms:/.test(html), false, 'sms: link');
  assert.equal(/href="\.\.\//.test(html), false, 'relative parent link');
  assert.ok(html.includes('(479) 492-4232'), 'phone display');
  const ctaTexts = [...html.matchAll(/class="cta"[^>]*>([^<]+)</g)].map((m) => m[1].trim()).filter(Boolean);
  assert.ok(ctaTexts.length > 0, 'cta');
  assert.deepEqual([...new Set(ctaTexts)], [ctaTexts[0]], 'one CTA label');
});

test('ported forms use the shared guarded intake receiver', async () => {
  const intake = await readFile(new URL('../public/assets/aa-intake.js', import.meta.url), 'utf8');
  assert.ok(intake.includes('https://fort-smith-pros.vercel.app/api/public/leads'), 'intake endpoint');
  assert.ok(intake.includes('inFlight') && intake.includes('submitted'), 'in-flight and submitted guard');
  assert.ok(intake.includes('Do not submit it again'), 'ambiguous response is not silent and not retried');
  const answerPage = await page('/answer-check/');
  assert.ok(answerPage.includes('wireLeadForm') && answerPage.includes("sourcePath:'/answer-check'"), 'answer-check wiring');
});
