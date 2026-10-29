import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import test from "node:test";

const root = join(dirname(fileURLToPath(import.meta.url)), "../..");
const read = (rel) => readFileSync(join(root, rel), "utf8");

test("canonical constant is (479) 492-4232 / +14794924232", () => {
  const src = read("src/lib/public-phone.ts");
  assert.match(src, /AA_PUBLIC_PHONE_DISPLAY = "\(479\) 492-4232"/);
  assert.match(src, /AA_PUBLIC_PHONE_E164 = "\+14794924232"/);
  assert.match(src, /AA_PUBLIC_PHONE_HREF = `tel:\$\{AA_PUBLIC_PHONE_E164\}`/);
});

test("nav, footer, contact, dock, and JSON-LD import the shared phone constant", () => {
  const files = [
    "src/components/SiteNav.astro",
    "src/components/SiteFooter.astro",
    "src/pages/contact.astro",
    "src/layouts/Base.astro",
    "src/pages/index.astro",
  ];
  for (const file of files) {
    const src = read(file);
    assert.match(src, /from ["'].*lib\/public-phone["']/, `${file} must import public-phone`);
    assert.match(src, /AA_PUBLIC_PHONE_/, `${file} must use the constant`);
    assert.equal((src.match(/tel:/g) || []).length, 0, `${file} must not hardcode tel:`);
  }
});
