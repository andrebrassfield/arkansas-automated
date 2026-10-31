/**
 * Public Fort Smith Directory hub endpoints used by this static site.
 *
 * These are not secrets. They are CORS-allowlisted POST URLs on the hub
 * apex host. www 308-redirects, and a redirected cross-origin fetch
 * resends with Origin: null, which the hub allowlist rejects.
 *
 * Override at build time with PUBLIC_* names from .env.example. Empty or
 * unset values keep the defaults so Vercel does not need extra env vars.
 */

function publicUrl(value: string | undefined, fallback: string): string {
  const trimmed = value?.trim();
  return trimmed ? trimmed.replace(/\/+$/, "") : fallback;
}

export const HUB_ORIGIN = publicUrl(
  import.meta.env.PUBLIC_HUB_ORIGIN,
  "https://fortsmithdirectory.com",
);

export const HUB_PV_URL = publicUrl(
  import.meta.env.PUBLIC_HUB_PV_URL,
  `${HUB_ORIGIN}/api/public/pv`,
);

// Lead intake uses the approved stable production alias, independent of the
// lapsed FSD custom domain. Pageview/onboarding defaults are unchanged.
export const HUB_LEADS_URL = publicUrl(
  import.meta.env.PUBLIC_HUB_LEADS_URL,
  "https://fort-smith-pros.vercel.app/api/public/leads",
);

export const HUB_ONBOARD_URL = publicUrl(
  import.meta.env.PUBLIC_HUB_ONBOARD_URL,
  `${HUB_ORIGIN}/api/public/onboard`,
);

export const SPEED_TO_LEAD_API = publicUrl(
  import.meta.env.PUBLIC_SPEED_TO_LEAD_API,
  "https://speed-to-lead-five.vercel.app",
);
