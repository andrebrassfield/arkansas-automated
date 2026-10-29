/*
 * Service data for /services/[service] pages. Prices and terms mirror the
 * homepage and pricing.md exactly: one public price sheet, everywhere.
 * Rebuilt 2026-10-29: the answering ladder. Retired offers (Front Door,
 * Front Door Wired, Visibility Install, the $1,500 audit) redirect to
 * /services in vercel.json.
 */

export interface Service {
  name: string;
  slug: string;
  price: string;
  tagline: string;
  /** 40-60 word direct answer block (ai-seo extractable structure). */
  answer: string;
  includes: string[];
  process: { h: string; p: string }[];
  faqs: { q: string; a: string }[];
}

export const services: Service[] = [
  {
    name: "Missed-Call Text Back",
    slug: "missed-call-text-back",
    price: "$129/mo",
    tagline:
      "Every missed call gets a text back in under a minute, in your shop's name, so the job stops at your shop instead of the next one on Google.",
    answer:
      "Missed-Call Text Back watches your business line around the clock. When a call is missed, the caller gets a text in your shop's name in under a minute, with a short back-and-forth that captures the job details and sends them to you. $129 a month, flat. No per-text meter, no contract. Set up in person in the River Valley.",
    includes: [
      "Automatic text to every missed caller in under a minute, 24/7",
      "Short intake conversation: name, address, what broke, how urgent",
      "Job details texted to you or your on-call tech as they land",
      "Written in your shop's name and your words, not a template",
      "Spam and robocalls filtered out, never texted",
      "Set up in person at your shop, tested with you standing there",
    ],
    process: [
      {
        h: "Test call",
        p: "Start with the free missed-call test. We call your line after hours and send you the recording of what a customer hears today.",
      },
      {
        h: "Setup, in person",
        p: "We sit down at your shop, write the greeting and intake questions in your words, and connect it to your existing number. You keep your number.",
      },
      {
        h: "Live this week",
        p: "Most shops are live within a few days of the setup visit. We test-call it together before it counts.",
      },
      {
        h: "Monthly, flat",
        p: "$129 a month. No per-text charges, no contract. Cancel with a call.",
      },
    ],
    faqs: [
      {
        q: "Do I keep my existing phone number?",
        a: "Yes. The text back rides on your current line and number. Nothing changes for your customers except that a missed call now answers back.",
      },
      {
        q: "Is $129 really flat?",
        a: "Yes. No per-text or per-call meter. A slammed July costs the same as a slow February.",
      },
      {
        q: "What if I want a voice answering too, not just texts?",
        a: "That is After-Hours Answering at $299/mo, or the full Front Desk at $499/mo. The text back is included in both.",
      },
    ],
  },
  {
    name: "After-Hours Answering",
    slug: "after-hours-answering",
    price: "$299/mo",
    tagline:
      "Your phone answered in your shop's name from 5 PM to 7 AM and all weekend, with the job details texted to your on-call tech in under a minute.",
    answer:
      "After-Hours Answering covers your line when the office is closed: evenings, nights, and weekends. An AI receptionist answers in your shop's name, takes the job details, sorts emergencies from morning work, and texts your on-call tech in under a minute. $299 a month flat, no per-minute meter, no contract. One-time $199 setup, done in person. First 7 days of service are free.",
    includes: [
      "Coverage 5 PM to 7 AM on weekdays, 24 hours on weekends",
      "Answered in your shop's name, with your greeting and your words",
      "Emergency sorting: true emergencies go straight to the on-call tech",
      "Job name, address, and problem texted to the on-call tech in under a minute",
      "Every call recorded and summarized; listen to any of them",
      "English and Spanish answering",
      "Missed-call text back included for any call that still slips through",
      "Set up in person at your shop, tested together before it counts",
    ],
    process: [
      {
        h: "Free missed-call test",
        p: "We call your line after the office closes and send you the recording. That is what your customers hear tonight.",
      },
      {
        h: "Setup visit",
        p: "One visit to your shop. We write the greeting, the intake questions, and the emergency rules with you, and connect your existing number. One-time $199.",
      },
      {
        h: "First 7 days free",
        p: "The service runs live on your real line for a week. You hear the recordings and read the summaries. If it is not earning its keep, it comes off and you owe nothing for the week.",
      },
      {
        h: "Monthly, flat",
        p: "$299 a month after the free week. No per-minute charges in a heat wave, no contract. Cancel with a call.",
      },
    ],
    faqs: [
      {
        q: "Will callers know it is an AI?",
        a: "It answers as your shop's front desk and says what you would want said. Most callers just get their problem taken down and a tech dispatched. If a caller asks directly, it does not lie about what it is.",
      },
      {
        q: "What happens on a real emergency at 2 AM?",
        a: "Whatever you decided at setup. The standard rule: water running, no heat with a baby or an elderly person in the house, gas smell, anything unsafe goes straight to the on-call phone by call and text, immediately. Everything else is taken down for the morning.",
      },
      {
        q: "Why not just use the $29 add-on in my Jobber or Housecall Pro?",
        a: "If the button in your software is set up, tuned, and checked, it is a fair option. Most shops never finish the setup, and the button does not sort emergencies, chase estimates, or get reviewed by a person you can call. This service is set up in your office and watched by a local operator.",
      },
      {
        q: "How fast can it be live?",
        a: "Most shops are live within a few days of the setup visit. The free missed-call test can happen tonight.",
      },
    ],
  },
  {
    name: "Front Desk",
    slug: "ai-front-desk",
    price: "$499/mo",
    tagline:
      "Your phone answered around the clock, jobs booked into your calendar, estimates followed up, and reviews requested. Run for you, by a local operator.",
    answer:
      "The Front Desk is the full front office for a shop that runs on the owner's phone. Calls answered 24/7 in your shop's name, jobs booked into your calendar or field-service software, missed calls texted back, open estimates followed up on a day 2, 5, and 10 rhythm, and a review request after every finished job. $499 a month flat, no per-minute meter, no contract. One-time $199 setup, done in person.",
    includes: [
      "Everything in After-Hours Answering, extended to 24/7",
      "Jobs booked into your calendar, Jobber, Housecall Pro, or ServiceTitan",
      "Missed-call text back on every line",
      "Estimate follow-up: second and third touches on open quotes so they stop dying quietly",
      "Review request sent after every completed job",
      "English and Spanish answering",
      "Weekly summary: calls answered, jobs booked, estimates touched",
      "Set up in person, tuned with you in the first month",
    ],
    process: [
      {
        h: "Free missed-call test",
        p: "We call your line after hours and send the recording. Proof before money, in that order.",
      },
      {
        h: "Setup visit",
        p: "We map how your shop actually takes work: who is on call, what counts as an emergency, where jobs get booked, what an estimate follow-up should say. One-time $199.",
      },
      {
        h: "First 7 days free",
        p: "Live on your real line for a week. You see every recording, booking, and follow-up before the first invoice.",
      },
      {
        h: "Monthly, flat",
        p: "$499 a month. No per-minute or per-call charges, no contract. The weekly summary shows exactly what it did.",
      },
    ],
    faqs: [
      {
        q: "How is this different from After-Hours Answering?",
        a: "After-Hours covers the phone when you are closed. The Front Desk covers it around the clock and does the office work around the call: booking, estimate follow-up, and review requests.",
      },
      {
        q: "Can it book into my software?",
        a: "Yes: Jobber, Housecall Pro, ServiceTitan, or a plain shared calendar. The booking rules are set with you at the setup visit.",
      },
      {
        q: "What does it not do?",
        a: "It does not quote prices beyond the ranges you approve, make safety calls, or handle anything you mark human-only at setup. Those go straight to a person, by your rule.",
      },
      {
        q: "Is there a contract?",
        a: "No. Month to month. The weekly summary is the retention strategy.",
      },
    ],
  },
  {
    name: "Dead Estimate Revival",
    slug: "estimate-revival",
    price: "$750 + 15% of recovered gross",
    tagline:
      "Your open estimates from the last 90 days, worked one by one until they book, die honestly, or tell us when to call back.",
    answer:
      "Dead Estimate Revival takes the estimates your shop already wrote and never closed, up to 90 days old, and works them with a day 2, 5, and 10 follow-up rhythm by text and call. You pay $750 to run the campaign and 15% of the gross on jobs it actually books. If it books nothing, the 15% is zero. The list, the scripts, and every reply are yours to see.",
    includes: [
      "Your open estimate list pulled and cleaned with you (up to 90 days back)",
      "Follow-up rhythm on every live estimate: day 2, day 5, day 10",
      "Texts and calls written in your shop's voice, approved by you first",
      "Booked jobs handed to your calendar with the full thread attached",
      "Dead ones marked dead, with the reason, so the list is clean afterward",
      "A one-page report at the end: contacted, replied, booked, recovered gross",
    ],
    process: [
      {
        h: "The list",
        p: "You export or hand over the open estimates. We sit down and cut the ones that should never be touched: competitors, dead numbers, your call.",
      },
      {
        h: "The scripts",
        p: "Short, plain, in your name. You approve every word before anything sends.",
      },
      {
        h: "The campaign",
        p: "Two to three weeks of touches. Replies come to you the same day with a suggested next step.",
      },
      {
        h: "The report",
        p: "Contacted, replied, booked, recovered gross, in one page. The 15% is calculated on booked and paid jobs only.",
      },
    ],
    faqs: [
      {
        q: "Why a percentage at all?",
        a: "So the incentives point the same direction. The $750 covers the work of building and running the campaign. The 15% only exists if the campaign puts real gross back on your board.",
      },
      {
        q: "Will this annoy my customers?",
        a: "Three touches over ten days, written like a person from your shop checking in, and every script is approved by you first. Anyone who says no is marked dead and never touched again.",
      },
      {
        q: "How old a list can it work?",
        a: "Up to 90 days standard. Older lists can be run, priced after we see the count and the condition of the data.",
      },
    ],
  },
  {
    name: "Front Desk Audit",
    slug: "operations-audit",
    price: "$750",
    tagline:
      "Ninety minutes in your operation and a written map back: every leak in how your shop handles calls, quotes, and follow-up, costed and ranked.",
    answer:
      "The Front Desk Audit is a fixed-price, $750 look at how your Arkansas business handles calls, quotes, scheduling, and follow-up. Ninety minutes with the people who touch the phones or the books. You get a written map, every leak costed, ranked by payback, and a straight list of what not to automate. The full fee comes off the setup of any monthly plan or build you start with us.",
    includes: [
      "Ninety minutes in the operation, with the people who touch the phones",
      "Your last month of calls reviewed: answered, missed, after-hours, what each miss likely cost",
      "Open estimate and follow-up process mapped as it actually runs",
      "A written map: every leak costed, ranked by payback",
      "A straight list of what not to automate, and why",
      "Full $750 credited toward setup of any plan or build",
    ],
    process: [
      {
        h: "Free missed-call test first",
        p: "The audit starts from evidence. We test-call your line after hours before the visit, and the recording opens the conversation.",
      },
      {
        h: "Ninety minutes",
        p: "At your shop or on a call. Owners, dispatchers, whoever touches the phone or the books.",
      },
      {
        h: "The map",
        p: "Delivered in writing within a week: leaks costed, ranked, with the fix and the payback math for each.",
      },
      {
        h: "Your call",
        p: "Build it with us and the $750 comes off the setup. Build it with someone else, or not at all, and the map is still yours.",
      },
    ],
    faqs: [
      {
        q: "Why pay for an audit instead of just starting a plan?",
        a: "Most shops should start a plan; the test and the free week prove more than a document. The audit is for shops with several people touching the phones, where the leak is not obvious and the wrong fix costs more than $750.",
      },
      {
        q: "Does the fee really come off the plan?",
        a: "Yes. Start any monthly plan or a custom build and the full $750 credits against setup. If you do not, you keep the map.",
      },
      {
        q: "What do I physically receive?",
        a: "A written process map, a costed leak list, and a prioritized plan with payback math for each item. A document you can execute with us, another vendor, or your own team.",
      },
    ],
  },
  {
    name: "Custom builds",
    slug: "workflow-automation",
    price: "Scoped, from $2,500",
    tagline:
      "When the fix is not a plan on this page: one scoped build, priced in writing before anyone writes a check.",
    answer:
      "Some shops need a specific build rather than a monthly plan: a dispatch workflow, a follow-up system inside their own software, a handoff between tools that were never connected. Custom builds are scoped from the Front Desk Audit map and priced in writing before work begins, from $2,500. No open-ended billing, no hourly meter.",
    includes: [
      "Scope and price in writing before work begins",
      "Built on the tools the shop already pays for, where that is possible",
      "What stays human is written into the build, not left to the software",
      "Handover session with the people who will run it",
      "30 days of fixes on the delivered scope included",
    ],
    process: [
      {
        h: "Scope from the audit",
        p: "Most builds start from the audit map, so scope and price are agreed before work begins. The audit fee credits toward the build.",
      },
      {
        h: "Build and test",
        p: "Built against your real call flow, your real estimate list, your real calendar. Tested with sample jobs before it touches a customer.",
      },
      {
        h: "Handover",
        p: "A working session with your people, plus a written runbook of what it does and what it deliberately does not do.",
      },
    ],
    faqs: [
      {
        q: "Why the starting price instead of a flat number?",
        a: "Because the scope decides the price. Every build is quoted in writing from the audit map before work begins. From $2,500 is the floor, not a teaser.",
      },
      {
        q: "Do you sell websites?",
        a: "No. If the map says the site is the problem, that gets scoped honestly, but a cheap storefront is not an offer here.",
      },
    ],
  },
  {
    name: "Advisor retainer",
    slug: "automation-retainer",
    price: "From $2,000/mo",
    tagline:
      "For operations with 10 or more people: the map stays current, the next cut gets built each month, and the systems stay running.",
    answer:
      "The advisor retainer is a continuous engagement for larger Arkansas operations. The leak map is kept current, the highest-payback fix is built each month, and the running systems are watched and tuned. From $2,000 a month. It starts from a Front Desk Audit, and the audit fee credits toward the first month.",
    includes: [
      "The leak map reviewed and re-ranked monthly",
      "One scoped build or fix shipped each month from the top of the map",
      "Answering and follow-up systems monitored and tuned",
      "A monthly one-page report: what shipped, what it returned, what is next",
      "Direct line to the operator, not a ticket queue",
    ],
    process: [
      {
        h: "Audit first",
        p: "The retainer starts from the audit map, so every month builds the next highest-payback item, in order.",
      },
      {
        h: "Monthly cycle",
        p: "Pick the top item, build it, measure it, report it. The map is re-ranked with the new numbers.",
      },
      {
        h: "Quarterly review",
        p: "Every quarter we sit down with the full map and decide what the next quarter is for.",
      },
    ],
    faqs: [
      {
        q: "How is this different from the monthly answering plans?",
        a: "The plans run your front desk. The retainer is for a larger operation that needs an ongoing builder: new systems each month, not just the phones covered.",
      },
      {
        q: "Is there a minimum term?",
        a: "Three months is the honest minimum to prove a build cycle. After that, month to month.",
      },
    ],
  },
];

export function serviceBySlug(slug: string): Service {
  const s = services.find((s) => s.slug === slug);
  if (!s) throw new Error(`Unknown service slug: ${slug}`);
  return s;
}
