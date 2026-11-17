import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import test from 'node:test';
import ts from 'typescript';

// Regression guard: every high-intent page carries an in-page capture path,
// and the Phone Test payload matches what the hub receiver accepts
// (fort-smith-pros src/lib/lead-intake.ts: type automation_assessment, name
// 2+ chars, phone 7+ chars, optional email, no `category`).

const html = (file) => readFile(new URL(file, import.meta.url), 'utf8');

async function loadClient() {
  const source = await readFile(new URL('../src/lib/phone-test-client.ts', import.meta.url), 'utf8');
  const { outputText } = ts.transpileModule(source, { compilerOptions: { module: ts.ModuleKind.ESNext, target: ts.ScriptTarget.ES2022 } });
  return import(`data:text/javascript;base64,${Buffer.from(outputText).toString('base64')}`);
}

const phoneTestPages = [
  { name: 'home', file: '../dist/index.html' },
  { name: 'phone-test', file: '../dist/phone-test/index.html' },
  { name: 'fort smith', file: '../dist/locations/fort-smith/index.html' },
  { name: 'roofers', file: '../dist/for/roofers/index.html' },
  { name: 'missed calls', file: '../dist/fix/missed-calls/index.html' },
  { name: 'front door setup', file: '../dist/services/front-door-setup/index.html' },
];

for (const { name, file } of phoneTestPages) {
  test(`${name} carries the Phone Test form with required fields`, async () => {
    const page = await html(file);
    assert.ok(page.includes('data-phone-test-form'), `${name} missing form`);
    for (const field of ['businessName', 'contactName', 'phone', 'trade', 'town', 'smsConsent']) {
      assert.ok(page.includes(`name="${field}"`), `${name} missing ${field}`);
    }
    const phoneTag = page.match(/<input[^>]*name="phone"[^>]*>/)?.[0] ?? '';
    assert.ok(/required/.test(phoneTag), `${name} phone not required`);
    const consentTag = page.match(/<input[^>]*name="smsConsent"[^>]*>/)?.[0] ?? '';
    assert.ok(!/checked/.test(consentTag), `${name} SMS consent must not be pre-checked`);
  });
}

test('form ids are unique on every page', async () => {
  for (const { file } of phoneTestPages) {
    const page = await html(file);
    const ids = [...page.matchAll(/<form id="([^"]+)"/g)].map((m) => m[1]);
    assert.equal(new Set(ids).size, ids.length, `${file} duplicate form id`);
  }
});

test('contact page keeps a written path, phone and email', async () => {
  const page = await html('../dist/contact/index.html');
  assert.ok(page.includes('id="contact-lead"'), 'contact form');
  assert.ok(page.includes('(479) 492-4232'), 'phone');
  assert.ok(page.includes('mailto:dre@arkansasautomated.com'), 'email');
});

test('homepage keeps a booking path', async () => {
  const page = await html('../dist/index.html');
  assert.ok(page.includes('Book a 15-minute call'), 'booking link');
});

test('validation requires business, name, 10-digit mobile, trade and town; email optional', async () => {
  const { validatePhoneTest } = await loadClient();
  const base = { businessName: 'Ridge Roofing', contactName: 'Sam Lee', phone: '(479) 555-0100', email: '', trade: 'Roofing', town: 'Fort Smith', website: '', smsConsent: false, botField: '' };
  assert.deepEqual(validatePhoneTest(base), {});
  assert.deepEqual(Object.keys(validatePhoneTest({ ...base, phone: '555-0100' })), ['phone']);
  assert.deepEqual(Object.keys(validatePhoneTest({ ...base, email: 'not-an-email' })), ['email']);
  assert.deepEqual(Object.keys(validatePhoneTest({ ...base, businessName: '', trade: '', town: '' })), ['businessName', 'trade', 'town']);
  assert.deepEqual(validatePhoneTest({ ...base, phone: '+1 479 555 0100' }), {});
});

test('payload matches the hub schema and records consent only when given', async () => {
  const { buildPhoneTestPayload, SMS_CONSENT_TEXT_CLIENT } = await loadClient();
  const values = { businessName: 'Ridge Roofing', contactName: 'Sam Lee', phone: '4795550100', email: '', trade: 'Roofing', town: 'Fort Smith', website: 'ridge.com', smsConsent: true, botField: '' };
  const meta = { submissionId: 'abc', sourcePath: '/phone-test', placement: 'phone-test-hero', attribution: { firstTouch: { utm_source: 'google' }, lastTouch: null }, msToSubmit: 30000, msToFirstInput: 2000, failedAttempts: 0, smsConsentText: SMS_CONSENT_TEXT_CLIENT, submittedAt: '2026-11-16T22:00:00.000Z' };
  const p = buildPhoneTestPayload(values, meta);
  assert.equal(p.type, 'automation_assessment');
  assert.equal('category' in p, false, 'category would fail the hub insert');
  assert.equal(p.email, null);
  assert.equal(p.submissionId, 'abc');
  assert.ok(p.details.length <= 2000);
  assert.equal(p.extra.intent, 'Phone Test request');
  assert.equal(p.extra.smsConsent, true);
  assert.equal(p.extra.smsConsentText, SMS_CONSENT_TEXT_CLIENT);
  assert.deepEqual(p.extra.firstTouch, { utm_source: 'google' });
  const noConsent = buildPhoneTestPayload({ ...values, smsConsent: false }, meta);
  assert.equal(noConsent.extra.smsConsentText, null);
  assert.equal(noConsent.extra.smsConsentAt, null);
});

test('every page records first and last touch attribution', async () => {
  const page = await html('../dist/phone-test/index.html');
  assert.ok(page.includes('window.aaAttribution'), 'attribution capture present');
  for (const key of ['utm_source', 'gclid', 'fbclid']) assert.ok(page.includes(key), key);
});

test('privacy and terms carry the SMS language A2P 10DLC campaign review checks', async () => {
  const privacy = await html('../dist/privacy/index.html');
  const terms = await html('../dist/terms/index.html');
  assert.match(privacy, /id="sms"/);
  assert.match(privacy, /not shared with, sold to or rented to third parties/);
  assert.match(terms, /id="sms"/);
  for (const word of ['STOP', 'HELP', 'Message frequency varies', 'Message and data rates may apply', 'not a condition of any purchase']) {
    assert.ok(terms.includes(word), `terms missing: ${word}`);
  }
  const { SMS_CONSENT_TEXT_CLIENT } = await loadClient();
  assert.match(SMS_CONSENT_TEXT_CLIENT, /STOP/);
  assert.match(SMS_CONSENT_TEXT_CLIENT, /HELP/);
  assert.match(SMS_CONSENT_TEXT_CLIENT, /frequency varies/i);
  const form = await html('../dist/phone-test/index.html');
  assert.match(form, /href="\/terms#sms"/);
});
