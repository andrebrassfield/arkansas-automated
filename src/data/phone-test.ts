/*
 * The Phone Test rubric, as published. 100 points, 21 checks, four sections.
 * Mirrors the internal scorecard doc. If the scoring changes there, change it
 * here so the public page never promises a check we do not run.
 */

export interface RubricSection {
  key: "A" | "B" | "C" | "D";
  name: string;
  points: number;
  why: string;
  checks: string[];
}

export const rubric: RubricSection[] = [
  {
    key: "A",
    name: "Speed to lead",
    points: 35,
    why: "The clock starts when the customer reaches out. We time every way they can.",
    checks: [
      "Daytime call, timed to a live answer or callback",
      "After-hours call, timed to any reply",
      "Web form, timed to the first reply",
      "A text to your main number",
      "A second follow-up within 48 hours",
    ],
  },
  {
    key: "B",
    name: "Google and AI readiness",
    points: 35,
    why: "Google's AI only calls shops that show up in local search, and it asks for a price.",
    checks: [
      "Map Pack position for your trade and town",
      "A price range given on the phone when asked",
      "Price ranges on your Google listing services",
      "Pricing on your website that matches",
      "Review count against the top shop",
      "Reviews in the last 90 days",
      "Owner replies to reviews",
      "Google listing posts in the last 30 days",
    ],
  },
  {
    key: "C",
    name: "Landing page and sales flow",
    points: 20,
    why: "Most of your customers find you on a phone. We test it on one.",
    checks: [
      "Mobile speed score",
      "Tap to call without scrolling",
      "Form length",
      "A clear next step after the form",
      "Local proof near the form",
    ],
  },
  {
    key: "D",
    name: "Social proof and activity",
    points: 10,
    why: "Customers check that you are real and busy before they call.",
    checks: [
      "Recent Facebook or Instagram posts",
      "Real job photos",
      "Reviews that name the town and the service",
    ],
  },
];

export const RUBRIC_CHECK_COUNT = rubric.reduce((n, s) => n + s.checks.length, 0);

/** Source for the Google "Ask for Me" claims used on the site. */
export const ASK_FOR_ME_SOURCE = {
  label: "JobNimbus, \"Google's AI Will Soon Be Calling Contractors\"",
  url: "https://www.jobnimbus.com/blog/google-ai-calling-home-services",
};
