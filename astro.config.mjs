// @ts-check
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

/**
 * Static output on purpose.
 *
 * This site used to be a Vite SPA behind a catch-all rewrite, so every crawler,
 * link-preview bot, and slow connection received a ~4KB shell with no <h1> and
 * 37 words of text. arkansasautomated.com is the B2B surface the directory and
 * spoke network routes warm traffic into, so the page has to be real HTML on
 * first byte: shareable in email and chat with a working preview card, readable
 * by crawlers, and useful before any JS executes.
 */
export default defineConfig({
  site: "https://arkansasautomated.com",
  output: "static",
  trailingSlash: "never",
  // Bind the dev server to IPv4 explicitly: "localhost" resolves to ::1 on
  // macOS, which breaks tooling that probes http://127.0.0.1:4321 for readiness.
  server: { host: "127.0.0.1" },
  integrations: [
    sitemap({
      filter(page) {
        // Confirmation pages are noindex and never belong in the sitemap.
        return !page.includes("/phone-test/thanks");
      },
      serialize(item) {
        const url = new URL(item.url);
        if (url.pathname !== "/" && url.pathname.endsWith("/")) {
          url.pathname = url.pathname.replace(/\/+$/, "");
          item.url = url.href;
        }
        // Reset 2026-11-16: every page was rewritten around the Phone Test.
        // Bump this date when a page's substance changes, not on every build.
        item.lastmod = new Date("2026-11-16");
        return item;
      },
    }),
  ],
  build: { inlineStylesheets: "auto" },
});
