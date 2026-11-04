# Arkansas Automated: done-for-you AI setups redesign

Branch: `feat/ai-setups-redesign` against `main`. This is a review branch, not a production deployment. Dre approved the copy, phone number, pricing ladder, branch push, and PR on November 4, 2026. Deploy and merge remain separate decisions.

## What changed?

- Repositioned the homepage, navigation, service and location routes, lead-capture copy, and machine-readable offer summaries around done-for-you AI answering, missed-call follow-up, connected workflows, and automations instead of workshop sales.
- Retired workshop pages and the seat API; proposed redirects in `vercel.json` keep old workshop paths pointed at current service and location routes.
- Added Sloane's Front Desk Google reviews line to the homepage; the existing review-request page now leads with "Get more Google reviews without begging for them" and explains its place in the $499/month AI Front Desk and scoped custom builds.
- Added "Answering service in Fort Smith for shops that cannot afford a missed call" and the local copy from `aa-homepage-phrase-fixes-spec-2026-11-04.md` to the existing `/locations/fort-smith` page, not a new route.
- Set `git.deploymentEnabled["feat/ai-setups-redesign"]` to `false` in `vercel.json` so pushing this review branch does not trigger Vercel's automatic Git deployment. The main branch is not disabled; do not merge or deploy without Dre's separate GO.

## How was it verified?

- `npm run test`: 10/10 pass, including phrase assertions and the branch deployment gate.
- `npm run build`: Astro built 128 static pages.
- Generated-site link audit (`aa-redesign-link-check.py`): 5,708 local links, zero broken targets.
- Local Astro preview on `127.0.0.1:4329`: homepage contains the Google reviews line; the review page H1 and Fort Smith heading/local paragraph render on their canonical no-trailing-slash routes.
- `git diff --check`: no whitespace errors.

These are local checks. They do not establish production behavior, live lead submission, Vercel preview execution, or actual phone answering.

## What can unblock or retry it?

Sloane reviews the PR. Dre separately names a deployment GO after that review. On a failed check, reproduce with `npm ci && npm run test && npm run build` and the generated-site link audit before changing the branch. Remove or revise the branch-specific Vercel gate only under that separate GO.

## What risk is left open?

The PR branch intentionally has no Vercel preview deployment. Production redirects, mobile acceptance, lead submissions, call handling, and Google review-link setup are not exercised by the local build. A merge into `main` may trigger a production deployment and is not authorized by this PR GO.
