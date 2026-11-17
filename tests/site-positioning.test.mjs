import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync, existsSync, readdirSync } from 'node:fs';

// Positioning contract, reset 2026-11-16. The site sells one thing first (the
// free Phone Test) and a four-step ladder after it. These tests pin the
// promise, the prices, the redirects for everything retired, and the copy
// rules (no em or en dashes in rendered text).

const root = new URL('../', import.meta.url);
const read = (p) => readFileSync(new URL(p, root), 'utf8');
const page = (p) => read(p ? `dist/${p}/index.html` : 'dist/index.html');
const text = (html) => html.replace(/<script\b[^>]*>[\s\S]*?<\/script>/gi, ' ').replace(/<style\b[^>]*>[\s\S]*?<\/style>/gi, ' ').replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ');
function htmlFiles(dir) {
  return readdirSync(new URL(dir, root), { withFileTypes: true }).flatMap((d) => d.isDirectory() ? htmlFiles(`${dir}${d.name}/`) : d.name.endsWith('.html') ? [`${dir}${d.name}`] : []);
}
const DESCRIPTOR = 'Arkansas Automated tests and fixes how Arkansas home service businesses answer, follow up and get reviewed.';

test('home leads with proof before pitch and one conversion', () => {
  const home = page('');
  const t = text(home);
  assert.match(t, /We call your shop before we ever pitch you\./);
  assert.match(t, /Get my free Phone Test/);
  assert.ok(home.includes('href="/phone-test"'), 'links to /phone-test');
  assert.ok(home.includes('data-phone-test-form'), 'homepage carries the Phone Test form');
  assert.match(t, /Sample scorecard with made-up numbers/, 'sample scorecard is labeled as a sample');
  assert.match(t, /Google's AI now calls local contractors/);
  assert.ok(home.includes('https://www.jobnimbus.com/blog/google-ai-calling-home-services'), 'Ask for Me claim is sourced on the page');
});

test('the descriptor is said the same way in schema, footer, llms.txt and pricing.md', () => {
  assert.ok(page('').includes(DESCRIPTOR), 'homepage');
  assert.ok(text(page('about')).includes(DESCRIPTOR), 'about');
  assert.ok(read('public/llms.txt').includes(DESCRIPTOR), 'llms.txt');
  assert.ok(read('public/pricing.md').includes(DESCRIPTOR), 'pricing.md');
});

test('one price sheet: services, homepage, pricing.md and llms.txt agree', () => {
  const home = text(page(''));
  const services = text(page('services'));
  const pricing = read('public/pricing.md');
  const llms = read('public/llms.txt');
  for (const price of ['From $1,500 one-time', 'From $497/mo', '$3,000/mo flat', '$750 + 15% of recovered gross']) {
    assert.ok(home.includes(price), `home ${price}`);
    assert.ok(services.includes(price), `services ${price}`);
  }
  for (const doc of [pricing, llms]) {
    assert.match(doc, /from \$1,500 one time/i);
    assert.match(doc, /from \$497 a month/i);
    assert.match(doc, /\$3,000 a month/);
  }
  assert.match(pricing, /80 or higher/);
});

test('retired offers are not sold anywhere in the built site', () => {
  for (const file of htmlFiles('dist/')) {
    const t = text(read(file));
    assert.doesNotMatch(t, /\$129|\$299|\$499|After-Hours Answering|AI Front Desk|Front Desk Audit|booking software from/i, file);
    assert.doesNotMatch(t, /workshop/i, file);
  }
  for (const file of ['public/llms.txt', 'public/pricing.md']) assert.doesNotMatch(read(file), /\$129|\$299|\$499|workshop/i, file);
});

test('rendered text has no em or en dashes', () => {
  for (const file of htmlFiles('dist/')) {
    const t = text(read(file));
    assert.equal(/[\u2013\u2014]/.test(t), false, `${file}: ${(t.match(/.{0,40}[\u2013\u2014].{0,40}/) || [''])[0]}`);
  }
});

test('core routes exist and the nav points at the Phone Test', () => {
  for (const p of ['phone-test', 'phone-test/thanks', 'services', 'services/front-door-setup', 'services/front-door-monthly', 'services/ads', 'services/estimate-revival', 'locations', 'locations/fort-smith', 'for', 'for/roofers', 'about', 'contact']) {
    assert.ok(existsSync(new URL(`dist/${p}/index.html`, root)), p);
  }
  const nav = page('');
  for (const href of ['/phone-test', '/services', '/for', '/about', '/contact']) assert.ok(nav.includes(`href="${href}"`), href);
  assert.match(page('phone-test/thanks'), /<meta name="robots" content="noindex, follow"/);
});

test('every retired URL redirects to a page that exists, in one hop', () => {
  const { redirects } = JSON.parse(read('vercel.json'));
  const retired = [
    '/answering-service-fort-smith-ar', '/answering-service-cost-arkansas', '/hvac-answering-service-nwa', '/roofing-answering-service-nwa',
    '/ai-receptionist', '/ai-receptionist/fort-smith', '/ai-consultant', '/ai-consultant/fort-smith', '/forward-deployed-ai-engineer',
    '/booking-software', '/vendra', '/audit', '/revenue-leak-scorecard', '/missed-call-test', '/med-spas', '/screens', '/speed-to-lead',
    '/services/missed-call-text-back', '/services/after-hours-answering', '/services/ai-front-desk', '/services/operations-audit',
    '/services/workflow-automation', '/services/automation-retainer', '/services/phone-test', '/locations/little-rock', '/for/dentists',
    '/fix/double-entry', '/learn/what-is-an-ai-receptionist', '/missed-call-calculator',
  ];
  const plain = redirects.filter((r) => !r.has);
  const match = (path) => plain.find((r) => new RegExp(`^${r.source.replace(/\./g, '\\.').replace(/:[a-z]+\+?/g, '[^/]+')}$`).test(path));
  for (const path of retired) {
    const r = match(path);
    assert.ok(r, `no redirect for ${path}`);
    assert.equal(r.permanent, true, path);
    const dest = r.destination;
    assert.ok(existsSync(new URL(`dist${dest === '/' ? '' : dest}/index.html`, root)) || existsSync(new URL(`dist${dest}`, root)), `${path} -> ${dest} missing`);
    assert.equal(match(dest), undefined, `${path} -> ${dest} chains to another redirect`);
  }
});

test('feature branches do not trigger Vercel deployments before a named GO', () => {
  const config = JSON.parse(read('vercel.json'));
  assert.equal(config.git.deploymentEnabled['feat/**'], false);
  assert.notEqual(config.git.deploymentEnabled.main, false);
});

test('retired workshop routes still redirect and stay out of the sitemap', () => {
  const redirects = JSON.parse(read('vercel.json')).redirects;
  for (const [oldPath, newPath] of [['/workshop', '/services'], ['/ai-workshops', '/locations'], ['/ai-workshops/:city', '/locations']]) {
    assert.ok(redirects.some(({ source, destination, permanent }) => source === oldPath && destination === newPath && permanent), oldPath);
  }
  const sitemap = read('dist/sitemap-0.xml');
  assert.doesNotMatch(sitemap, /ai-workshops|\/workshop(?:<|\/)|ai-receptionist|answering-service|ai-consultant|phone-test\/thanks/);
});

test('review asks never steer review content (Google Maps policy, Apr 2026)', () => {
  for (const file of htmlFiles('dist/')) {
    const t = text(read(file));
    assert.doesNotMatch(t, /(ask|asking|prompt|prompting)[^.]{0,40}(to )?(mention|include|name)[^.]{0,30}(town|city|service|staff|keyword)/i, file);
  }
});
