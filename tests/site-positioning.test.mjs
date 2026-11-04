import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync, existsSync, readdirSync } from 'node:fs';
import { join } from 'node:path';

const root = new URL('../', import.meta.url);
const read = (p) => readFileSync(new URL(p, root), 'utf8');
const page = (p) => read(`dist/${p}/index.html`);
const text = (html) => html.replace(/<script\b[^>]*>[\s\S]*?<\/script>/gi, ' ').replace(/<style\b[^>]*>[\s\S]*?<\/style>/gi, ' ').replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ');

test('home presents setup and automation offers with direct local buyer language', () => {
  const home = text(page(''));
  for (const phrase of ['AI setups', 'automations', 'answering service', 'missed-call text back', 'review request automation', 'Fort Smith']) {
    assert.match(home, new RegExp(phrase, 'i'), phrase);
  }
  assert.match(page(''), /href="\/services\/workflow-automation"/);
  assert.match(page(''), /href="\/services\/ai-front-desk"/);
});

test('the existing homepage, reviews page and Fort Smith page carry approved phrases', () => {
  const home = text(page(''));
  assert.match(home, /Get more Google reviews: a review request goes out after every finished job, with your Google review link where customers actually tap it\./);
  const reviews = text(page('review-request-automation-nwa'));
  assert.match(reviews, /Get more Google reviews without begging for them/i);
  const fortSmith = page('locations/fort-smith');
  assert.match(fortSmith, /<h[1-6][^>]*>Answering service in Fort Smith for shops that cannot afford a missed call<\/h[1-6]>/i);
  assert.match(text(fortSmith), /Arkansas Automated is a Fort Smith business\. Our missed call text back and after-hours answering service covers your phones/);
  assert.equal((home.match(/\$499\/mo/g) || []).length, 1, 'Front Desk price unchanged');
});

test('core routes lead to services, locations, about, contact and working booking path', () => {
  for (const p of ['services', 'locations', 'about', 'contact', 'services/workflow-automation', 'locations/fort-smith']) {
    assert.ok(existsSync(new URL(`dist/${p}/index.html`, root)), p);
    assert.doesNotMatch(text(page(p)), /workshop|wait.?list/i, p);
  }
  const nav = page('');
  for (const href of ['/services', '/locations', '/about', '/contact']) assert.ok(nav.includes(`href="${href}"`), href);
});

test('PR branch does not trigger Vercel automatic deployments before separate GO', () => {
  const config = JSON.parse(read('vercel.json'));
  assert.equal(config.git.deploymentEnabled['feat/ai-setups-redesign'], false);
});

test('retired workshop routes redirect rather than remain indexed', () => {
  const redirects = JSON.parse(read('vercel.json')).redirects;
  for (const [oldPath, newPath] of [['/workshop', '/services'], ['/ai-workshops', '/locations'], ['/ai-workshops/:city', '/locations/:city']]) {
    assert.ok(redirects.some(({source, destination, permanent}) => source === oldPath && destination === newPath && permanent), oldPath);
  }
  const sitemap = read('dist/sitemap-0.xml');
  assert.doesNotMatch(sitemap, /ai-workshops|\/workshop(?:<|\/)/);
});

test('published pages and machine-readable offer summaries do not market workshops', () => {
  function htmlFiles(dir) {
    return readdirSync(new URL(dir, root), { withFileTypes: true }).flatMap(d => d.isDirectory() ? htmlFiles(`${dir}${d.name}/`) : d.name.endsWith('.html') ? [`${dir}${d.name}`] : []);
  }
  for (const file of htmlFiles('dist/')) assert.doesNotMatch(text(read(file)), /workshop|workshop wait.?list/i, file);
  for (const file of ['public/llms.txt', 'public/pricing.md']) assert.doesNotMatch(read(file), /workshop/i, file);
});
