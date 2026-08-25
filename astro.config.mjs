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
  integrations: [
    sitemap({
      serialize(item) {
        const path = new URL(item.url).pathname;
        const refreshed =
          path === "/" ||
          path === "/for/" ||
          path.startsWith("/for/") ||
          path === "/learn/" ||
          path.startsWith("/learn/") ||
          path === "/services/" ||
          path.startsWith("/services/") ||
          path.startsWith("/ai-workshops/");

        if (refreshed) item.lastmod = new Date("2026-08-25");
        return item;
      },
    }),
  ],
  build: { inlineStylesheets: "auto" },
});
