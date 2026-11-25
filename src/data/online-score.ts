/*
 * NWA Online Front Door Score. Added 2026-11-25 on Dre's GO.
 *
 * Public checks only: no calls, forms or texts were sent to any shop. The raw
 * observations live in nwa-online-scores-2026-11.json; every point below is
 * computed from them at build time so the method on the page and the numbers
 * in the table can never disagree.
 *
 * How the shops were picked: Google Maps searches "<trade> <town> ar" for HVAC,
 * plumber, roofing and electrician in Rogers, Springdale, Fayetteville and
 * Bentonville, read on 2026-11-25. The top two results that were not marked
 * Sponsored, skipping a shop already picked. No shop was added by hand. Two picks
 * (Springdale plumber #2, Springdale roofing #1) were left out on 2026-11-25 because
 * AA had a live pitch open with them; the page says so without naming them.
 *
 * Copy rules: scores only, no owner names, no commentary on any shop.
 */
import raw from "./nwa-online-scores-2026-11.json";

export interface ShopObservation {
  trade: "hvac" | "plumber" | "roofing" | "electrician";
  town: string;
  name: string;
  rating: number;
  reviews: number;
  /** Review count of the most-reviewed shop in the same Maps search. */
  topReviews: number;
  open24: boolean;
  siteUrl: string;
  linkBroken: boolean;
  words: number;
  h1: boolean;
  tel: boolean;
  price: boolean;
  form: boolean;
  viewport: boolean;
  real404: boolean;
}

export interface Check {
  key: string;
  label: string;
  max: number;
  group: "Google listing" | "Website as a crawler sees it";
  how: string;
  points: (s: ShopObservation) => number;
}

export const CHECKED_ON = "November 25, 2026";

export const checks: Check[] = [
  {
    key: "reviews",
    label: "Review count",
    max: 20,
    group: "Google listing",
    how: "Reviews compared with the most-reviewed shop in the same Maps search. Half or more: 20. A quarter or more: 14. A tenth or more: 8. Fewer: 3.",
    points: (s) => {
      const r = s.reviews / s.topReviews;
      return r >= 0.5 ? 20 : r >= 0.25 ? 14 : r >= 0.1 ? 8 : s.reviews > 0 ? 3 : 0;
    },
  },
  {
    key: "rating",
    label: "Star rating",
    max: 10,
    group: "Google listing",
    how: "4.8 or higher: 10. 4.5 to 4.7: 6. Lower: 2.",
    points: (s) => (s.rating >= 4.8 ? 10 : s.rating >= 4.5 ? 6 : 2),
  },
  {
    key: "link",
    label: "Website link works",
    max: 10,
    group: "Google listing",
    how: "The website button on the Google listing opens a working page, not an error.",
    points: (s) => (s.linkBroken ? 0 : 10),
  },
  {
    key: "hours",
    label: "Open 24 hours on Google",
    max: 5,
    group: "Google listing",
    how: "The listing shows the shop as open 24 hours, so a night caller sees someone will pick up.",
    points: (s) => (s.open24 ? 5 : 0),
  },
  {
    key: "readable",
    label: "Readable without JavaScript",
    max: 15,
    group: "Website as a crawler sees it",
    how: "The page as first served has a main heading and at least 250 words. AI assistants and most crawlers read this version.",
    points: (s) => (s.h1 && s.words >= 250 ? 15 : 0),
  },
  {
    key: "tel",
    label: "Tap to call",
    max: 10,
    group: "Website as a crawler sees it",
    how: "A tap-to-call phone link is in the page as served.",
    points: (s) => (s.tel ? 10 : 0),
  },
  {
    key: "price",
    label: "A price on the page",
    max: 10,
    group: "Website as a crawler sees it",
    how: "Any dollar amount on the page: a price, a range, a special. Google's AI asks shops for a price.",
    points: (s) => (s.price ? 10 : 0),
  },
  {
    key: "form",
    label: "A way to ask in writing",
    max: 10,
    group: "Website as a crawler sees it",
    how: "A form, or a book or schedule link, in the page as served.",
    points: (s) => (s.form ? 10 : 0),
  },
  {
    key: "viewport",
    label: "Built for phones",
    max: 5,
    group: "Website as a crawler sees it",
    how: "The page declares a mobile viewport.",
    points: (s) => (s.viewport ? 5 : 0),
  },
  {
    key: "404",
    label: "Real 404",
    max: 5,
    group: "Website as a crawler sees it",
    how: "A made-up address on the site returns a 404 error, not a copy of another page.",
    points: (s) => (s.real404 ? 5 : 0),
  },
];

export const TRADE_LABEL: Record<ShopObservation["trade"], string> = {
  hvac: "HVAC",
  plumber: "Plumbing",
  roofing: "Roofing",
  electrician: "Electrical",
};

const TOWN_LABEL: Record<string, string> = {
  rogers: "Rogers",
  springdale: "Springdale",
  fayetteville: "Fayetteville",
  bentonville: "Bentonville",
};

export interface ScoredShop extends ShopObservation {
  townLabel: string;
  tradeLabel: string;
  score: number;
  marks: Record<string, number>;
}

export const shops: ScoredShop[] = (raw as ShopObservation[])
  .map((s) => {
    const marks = Object.fromEntries(checks.map((c) => [c.key, c.points(s)]));
    const score = Object.values(marks).reduce((a, b) => a + b, 0);
    return { ...s, townLabel: TOWN_LABEL[s.town] ?? s.town, tradeLabel: TRADE_LABEL[s.trade], score, marks };
  })
  .sort((a, b) => b.score - a.score || b.reviews - a.reviews);

export const MAX_SCORE = checks.reduce((n, c) => n + c.max, 0);
