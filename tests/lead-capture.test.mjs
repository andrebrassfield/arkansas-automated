import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import test from 'node:test';

// Regression guard: the site must never again ship a high-intent page with no
// in-page capture path. Reference benchmark is Good Garage Co, where every page
// carries a quote form. AA keeps the calendar as the primary CTA and adds the
// form as the second path, so both must be present.

const pages = [
  { name: 'home', file: '../dist/index.html', formId: 'homepage-lead' },
  { name: 'contact', file: '../dist/contact/index.html', formId: 'contact-lead' },
];

async function html(file) {
  return readFile(new URL(file, import.meta.url), 'utf8');
}

for (const { name, file, formId } of pages) {
  test(`${name} page carries an in-page lead form`, async () => {
    const page = await html(file);
    assert.ok(page.includes('data-lead-form'), `${name} missing data-lead-form`);
    assert.ok(page.includes(`id="${formId}"`), `${name} missing form id ${formId}`);
    const idCount = page.split(`id="${formId}"`).length - 1;
    assert.equal(idCount, 1, `${name} duplicate form id ${formId}`);
  });

  test(`${name} lead form keeps the required fields`, async () => {
    const page = await html(file);
    for (const field of ['businessName', 'contactName', 'email', 'phone']) {
      assert.ok(page.includes(`name="${field}"`), `${name} missing field ${field}`);
    }
    // The hub rejects payloads without a phone (min 7 chars). If the input is not
    // marked required the visitor gets a 422 and the lead falls back to mailto.
    const phoneTag = page.match(/<input[^>]*name="phone"[^>]*>/)?.[0] ?? '';
    assert.ok(/required/.test(phoneTag), `${name} phone input is not marked required`);
  });
}

test('homepage keeps the calendar as the primary CTA', async () => {
  const page = await html('../dist/index.html');
  assert.ok(page.includes('Book a 15-minute call'), 'homepage lost the booking CTA');
});

test('contact page still offers a direct phone and email path', async () => {
  const page = await html('../dist/contact/index.html');
  assert.ok(page.includes('(479) 492-4232'), 'contact lost phone');
  assert.ok(page.includes('mailto:dre@arkansasautomated.com'), 'contact lost email');
});
