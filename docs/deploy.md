# Deploy runbook

How this static site is built and how Vercel ships it. Commands below are the ones in `package.json` and `vercel.json`. There is no deploy script and no Vercel CLI in this repo.

Do not run a production deploy from a laptop. Vercel Git integration is the path.

## What ships

Astro static HTML (`output: "static"` in `astro.config.mjs`). Vercel serves `dist`.

Canonical origin is `https://arkansasautomated.com` (`site` in `astro.config.mjs`, `SITE_URL` in `src/lib/seo.ts`). Trailing slashes are off (`trailingSlash: "never"`), matching the `/:path+/` → `/:path+` 308 in `vercel.json`.

## Local production-like build

Same command Vercel runs (`vercel.json` `buildCommand`):

```bash
npm ci
npm run build
npm run preview
```

`npm run build` is `astro build && cp dist/sitemap-index.xml dist/sitemap.xml`. The copy is required so `/sitemap.xml` exists in `dist` in addition to the rewrite below.

No app secrets. Optional public URL overrides: `cp .env.example .env` (names only; empty values keep `src/lib/hub.ts` defaults).

## Production (Vercel Git)

1. Open a PR against `andrebrassfield/arkansas-automated` `main`.
2. Vercel builds the PR head with `npm run build` and reports the GitHub check named `Vercel`. PRs also get `Vercel Preview Comments`.
3. Merge to `main`. Vercel builds `main` the same way and deploys **Production**.

Default branch is `main`. GitHub homepage is `https://arkansasautomated.com`.

The linked Vercel project, from the GitHub `Vercel` check `target_url`, is `andrebrassfield-3014s-projects/arkansas-automated`.

One Vercel project should own this GitHub repo and the apex/www domains. Do not re-link a second project to the same repo.

## Preview

Non-`main` pushes and pull requests deploy to GitHub environment **Preview**. Production merges deploy to **Production**.

The pageview beacon does not fire on `*.vercel.app` hosts. Only the canonical apex host is counted (`src/layouts/Base.astro`).

## `vercel.json`

| Field | Value |
|---|---|
| `framework` | `astro` |
| `buildCommand` | `npm run build` |
| `outputDirectory` | `dist` |
| `cleanUrls` | `true` |

Rewrites:

- `/sitemap.xml` → `/sitemap-index.xml`

Redirects (308):

- Host `www.arkansasautomated.com` → `https://arkansasautomated.com/$1`, except `sitemap.xml`, `sitemap-index.xml`, `sitemap-0.xml`, and `robots.txt` (those stay on www so crawlers that do not follow 308 still get a sitemap).
- `/:path+/` → `/:path+` (strip trailing slashes).

`robots.txt` lists:

- `https://arkansasautomated.com/sitemap.xml`
- `https://arkansasautomated.com/sitemap-index.xml`

## Env on Vercel

This site has no app secrets. `.env.example` lists public `PUBLIC_*` names with empty values. Unset or empty values fall back to `src/lib/hub.ts`, so the Vercel project does not need those env vars for a correct build.

Do not put secrets in `.env`, the Vercel project, or this repo. `.gitignore` already ignores `.env*` (except `.env.example`) and `.vercel`.

## What this repo does not have

- No `.github/workflows` (no GitHub Actions build).
- No `lint` / `test` / `start` scripts.
- No Vercel CLI dependency or `vercel --prod` / `vercel deploy` script.
- No Node version pin in this repo.

`check_meta.cjs` and `check_meta_debug.cjs` exist at the repo root and are not npm scripts.

## After merge

Vercel is the only in-repo-adjacent gate: wait for the GitHub `Vercel` check on `main` to report success. Production URL is `https://arkansasautomated.com`.
