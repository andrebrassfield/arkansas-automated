import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import test from 'node:test';

const routes = {
  '/med-spas/': 'Med Spa Front Desk | Arkansas Automated',
  '/missed-call-test/': 'Free Missed-Call Test | Arkansas Automated',
  '/missed-call-calculator/': 'Missed Call Text Back Calculator | Arkansas Automated',
  '/answer-check/': 'Free Answer Check | Arkansas Automated',
  '/screens/': 'Lobby Screens | Arkansas Automated',
};

async function page(path) {
  return readFile(new URL(`../dist/${path.replace(/^\//, '').replace(/\/$/, '')}/index.html`, import.meta.url), 'utf8');
}

test('ported landing pages are built, stripped of review-only chrome, and keep one CTA label', async () => {
  for (const [route, title] of Object.entries(routes)) {
    const html = await page(route);
    assert.match(html, new RegExp(`<title>${title.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}</title>`), route);
    assert.equal(html.includes('data-review-only'), false, `${route} review bar`);
    assert.equal(html.includes('aaIntake'), false, `${route} sms fallback`);
    assert.equal(/sms:/.test(html), false, `${route} sms: link`);
    assert.equal(/href="\.\.\//.test(html), false, `${route} relative parent link`);
    assert.ok(html.includes('(479) 492-4232'), `${route} phone display`);
    const ctaTexts = [...html.matchAll(/class="cta"[^>]*>([^<]+)</g)].map((m) => m[1].trim()).filter(Boolean);
    assert.ok(ctaTexts.length > 0, `${route} cta`);
    assert.deepEqual([...new Set(ctaTexts)], [ctaTexts[0]], `${route} one CTA label`);
  }
});

test('/med-spas replaces the October page instead of sitting beside it', async () => {
  const html = await page('/med-spas/');
  for (const old of ['$527', '14 days free', '90-day guarantee', '$8,432']) {
    assert.equal(html.includes(old), false, `old med-spa copy remains: ${old}`);
  }
  assert.ok(html.includes('$997'), 'new med spa anchor price present');
});

test('/screens ships the Moore demo loop and keeps the placeholder as the fallback', async () => {
  const html = await page('/screens/');
  assert.ok(/src="loop\.mp4"/.test(html), 'loop.mp4 not linked');
  assert.equal(/poster="loop\.jpg"/.test(html), false, 'no poster shipped yet');
  assert.ok(html.includes('Demo loop slot'), 'placeholder markup stays as the failure fallback');
  const media = await readFile(new URL('../public/screens/loop.mp4', import.meta.url)).catch(() => null);
  assert.ok(media && media.length > 100000, 'loop.mp4 present in public/screens');
});

test('ported forms use the shared guarded intake receiver', async () => {
  const intake = await readFile(new URL('../public/assets/aa-intake.js', import.meta.url), 'utf8');
  assert.ok(intake.includes("https://fort-smith-pros.vercel.app/api/public/leads"), 'intake endpoint');
  assert.ok(intake.includes('inFlight') && intake.includes('submitted'), 'in-flight and submitted guard');
  assert.ok(intake.includes('Do not submit it again'), 'ambiguous response is not silent and not retried');
  const testPage = await page('/missed-call-test/');
  const answerPage = await page('/answer-check/');
  assert.ok(testPage.includes("wireLeadForm") && testPage.includes("sourcePath:'/missed-call-test'"), 'missed-call-test wiring');
  assert.ok(answerPage.includes('wireLeadForm') && answerPage.includes("sourcePath:'/answer-check'"), 'answer-check wiring');
});

test('calculator parity anchor is 22 calls/week, $550 ticket, 35% book = $18,352/month', async () => {
  const calc = await import(new URL('../public/assets/missed-call-calc.js', import.meta.url));
  assert.deepEqual(calc.MISSED_CALL_CALC_DEFAULTS, { calls: 22, newPct: 100, value: 550, winPct: 35 });
  const r = calc.computeMissedCallCalc(calc.MISSED_CALL_CALC_DEFAULTS);
  assert.equal(Math.round(r.winMonth), 18352);
  const html = await page('/missed-call-calculator/');
  for (const value of ['value="22"', 'value="100"', 'value="550"', 'value="35"']) {
    assert.ok(html.includes(value), `calculator default ${value}`);
  }
  assert.ok(html.includes('WEEKS_PER_MONTH'), 'calculator uses shared module');
});
