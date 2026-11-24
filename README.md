# Arkansas Automated

Static marketing site for [arkansasautomated.com](https://arkansasautomated.com).

Repo: [andrebrassfield/arkansas-automated](https://github.com/andrebrassfield/arkansas-automated). GitHub homepage is the apex URL.

## Stack

- **Framework:** [Astro](https://astro.build) 5 (`output: "static"`, `trailingSlash: "never"`, `site: "https://arkansasautomated.com"` in `astro.config.mjs`)
- **Deploy:** Vercel Git integration. `vercel.json` sets `framework: "astro"`, `buildCommand: "npm run build"`, `outputDirectory: "dist"`, `cleanUrls: true`. Canonical host is the apex; `www` 308s to apex except sitemap and `robots.txt`.
- **CI:** none in-repo (no `.github/workflows`). The GitHub check named `Vercel` is the build gate. PRs also get `Vercel Preview Comments`.

This repo does not pin a Node version (no `engines` field, no `.nvmrc`). The `astro` dependency in `package-lock.json` declares `node: 18.20.8 || ^20.3.0 || >=22.0.0` and `npm: >=9.6.5`. Install from the lockfile.

## Local

```bash
npm ci
npm run dev
```

`npm ci` is the lockfile install. No app secrets are required to build or run. Copy `.env.example` to `.env` only if you need to override public hub URLs; names are listed there, values stay empty.

```bash
cp .env.example .env
```

`.gitignore` ignores `.env*` except `.env.example`, plus `dist`, `node_modules`, and `.vercel`.

## Scripts

Commands from `package.json` only:

| Command | What it does |
|---|---|
| `npm run dev` | `astro dev` — local Astro dev server |
| `npm run build` | `astro build && cp dist/sitemap-index.xml dist/sitemap.xml` |
| `npm run preview` | `astro preview` — serve the `dist` build |
| `npm run astro` | Astro CLI passthrough |

There is no `lint`, `test`, `start`, or Vercel CLI script.

Present on disk but **not** wired in `package.json`: `check_meta.cjs`, `check_meta_debug.cjs`, `eslint.config.js`.

## Env

Names from `.env.example`. Empty or unset values keep the public defaults in `src/lib/hub.ts`, so Vercel does not need extra env vars.

| Name | Default in `src/lib/hub.ts` |
|---|---|
| `PUBLIC_HUB_ORIGIN` | `https://fortsmithdirectory.com` |
| `PUBLIC_HUB_PV_URL` | `https://fortsmithdirectory.com/api/public/pv` |
| `PUBLIC_HUB_LEADS_URL` | `https://fortsmithdirectory.com/api/public/leads` |
| `PUBLIC_HUB_ONBOARD_URL` | `https://fortsmithdirectory.com/api/public/onboard` |
| `PUBLIC_SPEED_TO_LEAD_API` | `https://speed-to-lead-five.vercel.app` |

These are public POST URLs, not secrets. Lead forms post to the hub leads URL; list-your-business posts to onboard; the speed-to-lead page uses the audit origin. The first-party pageview beacon does not fire in `astro dev` (`import.meta.env.PROD` is false), on localhost, on `*.vercel.app` previews, or on any host other than the canonical apex.

## Deploy

Vercel builds from Git. Production is a merge (or push) to `main`. Pull requests get Preview deployments.

Do not deploy from this README. Step-by-step: [docs/deploy.md](docs/deploy.md).

One Vercel project should own this repo and the apex/www domains. Do not re-link a second project to the same GitHub repo.
