/*
 * The offer ladder. One public price sheet: homepage, /services, the service
 * pages, llms.txt and pricing.md all read from here or must match it.
 *
 * Reset 2026-11-16: Arkansas Automated sells the Phone Test, the Front Door
 * Setup, Front Door Monthly, Dead Estimate Revival and Ads. Voice agents,
 * answering plans, booking software and custom builds are retired; their old
 * URLs redirect in vercel.json.
 *
 * Copy rules: plain, operator voice, no em or en dashes, no claim without a
 * source. Prices marked "from" are the floor Dre quotes on calls.
 */

export interface Service {
  name: string;
  slug: string;
  /** Short label for cards and the eyebrow. */
  price: string;
  /** The rung on the ladder, 1 to 4, or 0 for add-ons. */
  rung: number;
  tagline: string;
  /** 40-80 word direct answer block (ai-seo extractable structure). */
  answer: string;
  includes: string[];
  process: { h: string; p: string }[];
  faqs: { q: string; a: string }[];
  /** Primary CTA for the service page. */
  cta: { label: string; href: string };
}

export const PHONE_TEST_PATH = "/phone-test";
export const BOOK_CALL_URL = "https://book.arkansasautomated.com/book/discovery-call";

export const services: Service[] = [
  {
    name: "Phone Test",
    slug: "phone-test",
    price: "Free",
    rung: 1,
    tagline:
      "We call your shop during the day and after hours, fill out your form, text your number and check your Google listing. You get the clock times and a score out of 100.",
    answer:
      "The Phone Test is a free check of how an Arkansas home service business answers, follows up and shows up on Google. We call during the day and after hours, submit the web form, text the main number, watch for a follow-up for 48 hours, and compare the Google listing with the shop at the top of the map. You get a one-page score out of 100 within 3 days.",
    includes: [
      "Daytime call and after-hours call, with the exact clock times",
      "Web form submitted and timed until the first reply",
      "A text to your main number",
      "A 48-hour check for a second follow-up",
      "Google listing and Map Pack position against the top shop for your trade and town",
      "Whether your shop gives a price range when asked, the way Google's AI asks",
      "Landing page check on a phone: speed, tap to call, form length",
      "One-page score out of 100, your three biggest leaks, and what they cost at your numbers",
    ],
    process: [
      { h: "You ask", p: "Send your business name, mobile number and town. That is the whole form." },
      { h: "We test", p: "Same calls, same script, every shop, over about three days. Nobody books a fake job." },
      { h: "We show you", p: "A 15-minute walkthrough of the score and the three leaks, with the times." },
      { h: "You decide", p: "Fix it yourself from the list, or have us set it up. The score is yours either way." },
    ],
    faqs: [
      { q: "Is the Phone Test really free?", a: "Yes. No card, no contract. The score and the list of leaks are yours whether you hire us or not." },
      { q: "Will my staff know they are being tested?", a: "Only if you tell them. We use a real name and number, we never book a fake appointment that sends someone out, and we tell you exactly when each test ran." },
      { q: "Do you need logins to my accounts?", a: "No. The test uses your public phone number, website and Google listing." },
      { q: "What if my shop scores well?", a: "Then we tell you that and leave it there. A tight front door does not need fixing." },
    ],
    cta: { label: "Get my free Phone Test", href: PHONE_TEST_PATH },
  },
  {
    name: "Front Door Setup",
    slug: "front-door-setup",
    price: "From $1,500 one-time",
    rung: 2,
    tagline:
      "The fixes the Phone Test finds, set up in person: calls that ring the right phones, missed-call text back, fast form replies, follow-up, review requests and a Google listing that gives a price.",
    answer:
      "The Front Door Setup fixes what the Phone Test found. We set up your phones so the office and the owner ring together, a text back on every missed call, an instant reply to every web form, follow-up texts on day 1, 3 and 7, a review request after every finished job, price ranges on your Google listing, a one-page phone price sheet and one fast landing page. One-time, from $1,500, set up in person.",
    includes: [
      "Office and owner cell ring together before a call is missed",
      "Missed-call text back in your shop's name",
      "Instant text reply to every web form",
      "Follow-up texts on day 1, day 3 and day 7, written in your voice and approved by you",
      "Review request after every finished job, asking customers to mention the town and the service",
      "Google listing services filled in with price ranges",
      "A one-page phone price sheet so whoever answers can give a range",
      "One fast landing page with tap to call, a short form and a stated reply time",
      "Built with the tools you already pay for where they can do the job",
    ],
    process: [
      { h: "Phone Test first", p: "The setup is scoped from your score, so you only pay to fix what is broken." },
      { h: "Setup visit", p: "In person. We map who answers, what counts as urgent, your price ranges and what every text should say." },
      { h: "Build and test", p: "We test every path the way the Phone Test did: call, miss, text, form, follow-up." },
      { h: "Re-test", p: "We run the Phone Test again so you can see the score move." },
    ],
    faqs: [
      { q: "Why from $1,500 and not a flat price?", a: "Because shops start in different places. A shop that only needs text back and review requests costs less to set up than one that needs a landing page and a full Google listing. You get the price in writing before work starts." },
      { q: "Do I have to switch software?", a: "No. We start with the phone, calendar and job software you already pay for and only add a tool when yours cannot do the job." },
      { q: "Who writes the texts?", a: "We draft them in your voice. You approve every word before anything sends." },
      { q: "Is this an AI receptionist?", a: "No. Nobody's AI answers your phone. Your phones ring the right people first, and the system follows up in writing when a call or form is missed." },
    ],
    cta: { label: "Start with the free Phone Test", href: PHONE_TEST_PATH },
  },
  {
    name: "Front Door Monthly",
    slug: "front-door-monthly",
    price: "From $497/mo",
    rung: 3,
    tagline:
      "We run it so it stays fixed: the texts, the follow-up, the review requests, review replies, Google posts, and the Phone Test re-run every month with a one-page report.",
    answer:
      "Front Door Monthly keeps the setup working. We run the missed-call texts, form replies, follow-up and review requests, reply to every Google review, post to your Google listing twice a month, and re-run the Phone Test every month. You get a one-page report with counts: missed calls caught, replies sent, reviews gained and your Map Pack position. From $497 a month, month to month.",
    includes: [
      "The texts, follow-up and review requests from the setup, watched and adjusted",
      "A reply to every Google review, in your voice",
      "Two Google listing posts a month with job photos and prices where you allow",
      "Social posts from your real jobs",
      "The Phone Test re-run every month",
      "A one-page monthly report: missed calls caught, replies sent, reviews gained, Map Pack position",
      "Month to month, no contract",
    ],
    process: [
      { h: "Every week", p: "Review replies, follow-up checked, anything odd flagged to you the same day." },
      { h: "Twice a month", p: "Google listing posts with real job photos." },
      { h: "Every month", p: "The Phone Test again, and the one-page report with the counts." },
    ],
    faqs: [
      { q: "Is there a contract?", a: "No. Month to month. The monthly Phone Test is how you know it is still working." },
      { q: "What if I want to leave?", a: "Your phone number, your Google listing, your reviews and your customer list stay yours. We hand over the texts and settings we built." },
      { q: "Do you run ads in this plan?", a: "No. Ads are a separate plan, and we only run them after your front door scores 80 or higher." },
    ],
    cta: { label: "Start with the free Phone Test", href: PHONE_TEST_PATH },
  },
  {
    name: "Ads",
    slug: "ads",
    price: "$3,000/mo flat",
    rung: 4,
    tagline:
      "Meta and Google ads in your own accounts, flat fee, 0% markup. Only after your Phone Test scores 80 or higher.",
    answer:
      "Arkansas Automated Marketing runs Meta and Google ads in your own ad accounts for a flat $3,000 a month with 0% markup on ad spend. We only take an ads client after the front door scores 80 or higher on the Phone Test, because paying for calls that go to voicemail wastes the budget.",
    includes: [
      "Meta and Google ads in your accounts; the accounts stay yours",
      "Flat $3,000 a month, 0% markup on your ad spend",
      "Ads pointed at your service area and the jobs you want",
      "Calls and forms tracked to the ad that drove them",
      "Gated: your Phone Test score must be 80 or higher first",
    ],
    process: [
      { h: "Phone Test 80+", p: "If the front door is leaking, we fix that first. Ads into voicemail burn money." },
      { h: "Offer and access", p: "We lock the offer, build the creative and work inside your Meta and Google accounts." },
      { h: "Run and report", p: "Ads live in your service area, with calls and forms counted." },
    ],
    faqs: [
      { q: "Why won't you run my ads right away?", a: "Because ads only buy calls and clicks. If the calls go to voicemail and the forms wait a day, the ads take the blame for a front door problem." },
      { q: "Who owns the ad accounts?", a: "You do. We work inside your Meta Business Manager and Google Ads accounts." },
    ],
    cta: { label: "See the ads plan", href: "/marketing" },
  },
  {
    name: "Dead Estimate Revival",
    slug: "estimate-revival",
    price: "$750 + 15% of recovered gross",
    rung: 0,
    tagline:
      "Your open estimates from the last 90 days, worked one by one until they book, die honestly, or tell us when to call back.",
    answer:
      "Dead Estimate Revival takes the estimates your shop already wrote and never closed, up to 90 days old, and works them with a day 2, 5 and 10 follow-up rhythm. You pay $750 to run the campaign and 15% of the gross on jobs it actually books. If it books nothing, the 15% is zero. Texts only go to customers who agreed to hear from you.",
    includes: [
      "Your open estimate list pulled and cleaned with you (up to 90 days back)",
      "Follow-up rhythm on every live estimate: day 2, day 5, day 10",
      "Messages written in your shop's voice, approved by you first",
      "Texts only to customers who opted in; calls and email for the rest",
      "Booked jobs handed to your calendar with the full thread attached",
      "A one-page report at the end: contacted, replied, booked, recovered gross",
    ],
    process: [
      { h: "The list", p: "You hand over the open estimates. We cut the ones that should never be touched and check consent for texts." },
      { h: "The scripts", p: "Short, plain, in your name. You approve every word before anything sends." },
      { h: "The campaign", p: "Two to three weeks of touches. Replies come to you the same day." },
      { h: "The report", p: "Contacted, replied, booked, recovered gross. The 15% is on booked and paid jobs only." },
    ],
    faqs: [
      { q: "Why a percentage at all?", a: "So the incentives point the same direction. The $750 covers building and running the campaign. The 15% only exists if the campaign puts real gross back on your board." },
      { q: "Will this annoy my customers?", a: "Three touches over ten days, written like a person from your shop checking in. Anyone who says no is marked dead and never contacted again." },
    ],
    cta: { label: "Start with the free Phone Test", href: PHONE_TEST_PATH },
  },
];

/** Canonical URL for an offer. The Phone Test lives at /phone-test, not under /services. */
export function serviceHref(s: Pick<Service, "slug">): string {
  return s.slug === "phone-test" ? PHONE_TEST_PATH : `/services/${s.slug}`;
}

export function serviceBySlug(slug: string): Service {
  const s = services.find((x) => x.slug === slug);
  if (!s) throw new Error(`Unknown service slug: ${slug}`);
  return s;
}

/** Old service slugs and where they live now. Used by vercel.json tests. */
export const retiredServiceRedirects: Record<string, string> = {
  "/services/missed-call-text-back": "/services/front-door-setup",
  "/services/after-hours-answering": "/phone-test",
  "/services/ai-front-desk": "/phone-test",
  "/services/operations-audit": "/phone-test",
  "/services/workflow-automation": "/services",
  "/services/automation-retainer": "/services",
  "/services/front-door": "/services/front-door-setup",
  "/services/phone-test": "/phone-test",
};
