/*
 * Problem data for the /fix/[problem] pages.
 *
 * These are the searches an owner runs before they know what to buy: "missed
 * calls", "after hours calls", "customers not answering quotes".
 * Problem-first, product-second, one page per leak.
 *
 * Deliberately NOT crossed with cities. A problem page multiplied by 25 towns
 * produces 125 pages that differ by a place name, which is the exact thin
 * content pattern cities.ts was written to avoid. The geo intent is already
 * served by /locations/[city]; these pages link into that cluster
 * instead of duplicating it.
 *
 * Voice rules: direct, plain, concrete, no hype, no em dashes.
 */

export interface Problem {
  /** Page H1, written as the owner's complaint. */
  h1: string;
  /** Short label for cards, chips, and nav. */
  label: string;
  slug: string;
  /** One-line search-intent description. */
  intent: string;
  /** 40-60 word direct answer block (ai-seo extractable structure). */
  answer: string;
  /** How the owner knows they have this problem. */
  symptoms: string[];
  /** What the leak actually costs, with the arithmetic shown. */
  cost: { h: string; p: string };
  /** The fix, in order. */
  fix: { h: string; p: string }[];
  faqs: { q: string; a: string }[];
  /** Service slug this problem routes to. */
  service: string;
}

/** Reset 2026-11-16: only problems the Front Door offers fix publish a page. */
export const LIVE_PROBLEM_SLUGS = ["missed-calls", "after-hours-calls", "quote-follow-up"] as const;

const allProblems: Problem[] = [
  {
    h1: "Calls are going to voicemail and those customers are not calling back",
    label: "Missed calls",
    slug: "missed-calls",
    intent: "Stop missing calls at an Arkansas service business",
    answer:
      "A missed call at an Arkansas service business is usually a lost job, not a delayed one. Most callers with an urgent problem do not leave voicemail; they dial the next shop. The fix is plumbing, not a robot: ring the office and the owner together, text back every missed call within a minute in your shop's name, and follow up until the job is booked or lost.",
    symptoms: [
      "Voicemail box that fills up with hang-ups rather than messages",
      "Callers who booked somebody else by the time you called back at 6 PM",
      "Your phone log shows more inbound calls than your calendar shows jobs",
      "The owner answers the phone from a ladder, a crawl space, or the interstate",
      "Paid leads from Google or a lead vendor that never turn into booked work",
    ],
    cost: {
      h: "Run the number before you decide it is small",
      p: "Take your average booked job value and multiply it by the calls that ring out in a week. Four missed calls a week at a $400 average job is $83,200 a year in work that reached your phone and left. You will not win all of it back. Winning back a few of those a month is usually more than the fix costs.",
    },
    fix: [
      {
        h: "Count what you are actually missing",
        p: "Pull the call log from your carrier or your tracking number for the last 30 days and count unanswered inbound calls, then compare that to booked jobs. The free Phone Test does this from the outside: we call, we miss on purpose, and we score what happens.",
      },
      {
        h: "Ring the right phones before the call is missed",
        p: "The office line and the owner's cell ring together, so the call has two chances to be picked up by a person before anything else happens.",
      },
      {
        h: "Text back every missed call within a minute",
        p: "If nobody picks up, the caller gets a text in your shop's name asking what they need and where they are. Most people answer a text faster than they leave a voicemail, and now you have it in writing.",
      },
      {
        h: "Follow up until it is booked or dead",
        p: "Follow-up texts go out on day 1, day 3 and day 7, written in your voice and approved by you. A reply stops the sequence so nobody gets nagged after they already said yes.",
      },
    ],
    faqs: [
      {
        q: "Is this an AI that answers my phone?",
        a: "No. Your phones ring your people first. When a call is still missed, the system follows up in writing so the customer hears from you in under a minute instead of tomorrow. You or your office still take the job.",
      },
      {
        q: "How fast can this be live?",
        a: "The free Phone Test comes first and your score is back within 3 days. The Front Door Setup is scoped from that score and set up in person. Most shops are live within about two weeks, most of which is you approving the texts.",
      },
      {
        q: "What does it cost?",
        a: "The Phone Test is free. The Front Door Setup is a one-time fee from $1,500, priced in writing from your score. Front Door Monthly, from $497 a month, keeps it running and re-runs the Phone Test every month. Month to month.",
      },
    ],
    service: "front-door-setup",
  },
  {
    h1: "Nobody answers after five, and that is when the good calls come in",
    label: "After-hours calls",
    slug: "after-hours-calls",
    intent: "Handle after-hours calls at an Arkansas service business",
    answer:
      "After-hours calls are some of the highest-intent calls an Arkansas service business gets, and most of them hit voicemail. The fix is a written plan, not a night shift: every missed call gets a text back in a minute, the customer can reply with the problem and address, true emergencies ring your on-call phone, and everything else gets booked first thing in the morning.",
    symptoms: [
      "Emergency work going to whichever competitor picks up at 9 PM",
      "A commuter market where customers only call after 6 PM",
      "Paying someone overtime, or the owner, to watch a phone that rings twice",
      "Weekend calls nobody sees until Monday morning",
      "An on-call rotation that burns out your best technician",
    ],
    cost: {
      h: "The after-hours call is worth more than the daytime one",
      p: "Someone calling at 9 PM has an active problem and a short list. Emergency and after-hours work usually carries a higher rate and closes more often than a daytime price-shopping call. Missing those specifically is a more expensive leak than the raw call count suggests.",
    },
    fix: [
      {
        h: "Decide what an emergency is, in writing",
        p: "Burst pipe yes, slow drain no. No heat in January yes, thermostat question no. This list is the single most important thing you will write, and it takes about twenty minutes at the setup visit.",
      },
      {
        h: "Text back every after-hours call",
        p: "A missed call at 9 PM gets a text in a minute saying you got it, asking what happened and where, and saying when you will call back. The customer stops dialing down the list.",
      },
      {
        h: "Send real emergencies to a person",
        p: "When the reply matches your emergency list, your on-call phone gets a text with the caller's number and what they said, so whoever calls back already knows the problem.",
      },
      {
        h: "Book the rest first thing in the morning",
        p: "Everything that can wait lands on the office's list for the morning with the details already in writing. The follow-up texts keep going until it is booked or lost.",
      },
    ],
    faqs: [
      {
        q: "Will it wake me up for something stupid?",
        a: "Only if your list says to. You write the emergency list, we test it with real scenarios before launch, and Front Door Monthly adjusts it when reality disagrees with what you wrote. Most owners tighten it once in the first month.",
      },
      {
        q: "What about customers who text back in Spanish?",
        a: "The texts can go out in English and Spanish, written and approved by you. Replies come to you as they were written. It matters most in Springdale and Rogers.",
      },
      {
        q: "Do I need this if I already forward calls to my cell?",
        a: "Forwarding moves the ringing, it does not handle the call. If you are asleep, driving, or on another job, the caller still gets voicemail, and now it is your voicemail. The question is whether the customer hears back before they call someone else.",
      },
    ],
    service: "front-door-setup",
  },
  {
    h1: "Quotes go out and then nothing happens",
    label: "Quote follow-up",
    slug: "quote-follow-up",
    intent: "Automated quote and estimate follow-up for Arkansas businesses",
    answer:
      "Most estimates that go unanswered are not rejections, they are quotes nobody followed up on. A timed follow-up sequence sends short texts on day 1, day 3 and day 7 until the quote is won or lost, and stops the moment the customer replies, so closing stops depending on who remembered.",
    symptoms: [
      "A pile of open estimates nobody has looked at in three weeks",
      "No consistent answer to the question of how many touches a quote gets",
      "Follow-up that happens when the owner is bored on a Sunday night",
      "Customers who say they went with someone else who checked back",
      "No idea what your actual quote-to-close rate is",
    ],
    cost: {
      h: "The second touch is where the money is",
      p: "The first quote is the cost of doing business. The second and third contacts are where quotes that would have gone cold turn into jobs, and they are exactly the ones a busy shop skips. Count your open estimates from last quarter, multiply by your average job, and decide how many of those one more text would have saved.",
    },
    fix: [
      {
        h: "Give every quote an owner that is not a person",
        p: "The moment a quote goes out, it enters a sequence. Nobody has to remember it, put it on a list, or feel bad about it at 9 PM on Sunday.",
      },
      {
        h: "Day 1, day 3, day 7, then stop",
        p: "Short, plain, and easy to reply to, written in your voice and approved by you. The sequence ends cleanly either way so you are not pestering people into a no.",
      },
      {
        h: "Let a reply cancel the chase automatically",
        p: "The customer answers and the sequence stops immediately. Nothing is worse than an automated nudge arriving after somebody already said yes.",
      },
      {
        h: "Count the close rate you never had",
        p: "Once every quote runs the same path, Front Door Monthly reports how many quotes went out, how many replied and how many booked, so you can see what actually closes.",
      },
    ],
    faqs: [
      {
        q: "Will this annoy customers?",
        a: "Three short texts over a week, each easy to reply to, is not harassment; it is the job. What annoys people is being ignored after they asked for a price. The sequence stops the moment they reply either way.",
      },
      {
        q: "Does this work with the software I already use?",
        a: "Usually yes. We start with the job, phone and calendar tools you already pay for, like Jobber, Housecall Pro, ServiceTitan or Google Workspace, and only add a tool when yours cannot do the job. If it cannot, we say so before you pay.",
      },
      {
        q: "What does quote follow-up cost?",
        a: "It is part of the Front Door Setup, one-time from $1,500, priced in writing from your free Phone Test score. Front Door Monthly, from $497 a month, keeps the sequences running and reports the counts.",
      },
    ],
    service: "front-door-setup",
  },
  {
    h1: "Everything gets typed in twice, and once of those times it is wrong",
    label: "Double entry",
    slug: "double-entry",
    intent: "Stop retyping data between systems at an Arkansas business",
    answer:
      "Double entry is when a job gets typed into a phone note, then a calendar, then a CRM, then an invoice. Every retype costs minutes and adds an error the customer eventually notices. Workflow automation captures the job once at intake and pushes it into every downstream system automatically.",
    symptoms: [
      "The same address typed into three different tools in one afternoon",
      "Invoices that do not match what was quoted on the phone",
      "A spreadsheet that exists only to bridge two systems that will not talk",
      "Office staff whose day is mostly moving information from one screen to another",
      "Jobs that get finished and never invoiced because a step was manual",
    ],
    cost: {
      h: "This one is measured in hours, not lost jobs",
      p: "Time whoever handles your paperwork for one week, honestly, on retyping alone. Ten hours a week of transcription at Arkansas office wages is real money, and it is the cheapest kind of automation to build because the steps never change and nothing about them requires judgment.",
    },
    fix: [
      {
        h: "Map the handoffs before touching anything",
        p: "Trace one real job from first call to paid invoice and write down every place a human retypes something. The list is always longer than the owner expects, and it is the build order.",
      },
      {
        h: "Capture once, at intake",
        p: "Name, address, phone, job type, and notes get captured on the first contact, whether that is a call, a form, or the receptionist, and that record becomes the single source for everything after it.",
      },
      {
        h: "Push it downstream automatically",
        p: "Calendar, CRM, job card, and invoice all read from the same record. No copy and paste, so no drift between what was promised and what gets billed.",
      },
      {
        h: "Close the loop on the back end",
        p: "The completed job triggers the invoice, and the paid invoice triggers the review request. The steps that used to die because everyone was busy now happen on their own.",
      },
    ],
    faqs: [
      {
        q: "Do I need new software for this?",
        a: "Usually not. We build on the tools you already pay for. Recommending a switch is a last resort, and when we do we show the math rather than the brochure.",
      },
      {
        q: "How long does a workflow build take?",
        a: "A single sequence is a couple of weeks. A full lead-to-invoice pipeline with dispatch coordination runs longer and is scoped in writing before work begins, from $2,500. The Front Desk Audit fixes the number before you commit.",
      },
      {
        q: "What happens when it breaks?",
        a: "The monthly managed tier exists for exactly that. Automation that nobody maintains dies quietly and you find out from a customer. We monitor the flows and you have a human to call.",
      },
    ],
    service: "front-door-setup",
  },
  {
    h1: "Booked jobs turn into no-shows and nobody knows why",
    label: "No-shows",
    slug: "no-shows",
    intent: "Reduce no-shows and cancellations at an Arkansas business",
    answer:
      "No-shows are usually a reminder problem, not a customer problem. A booked appointment with no confirmation, no reminder, and no easy way to reschedule turns into a wasted truck roll or an empty chair. Automated SMS confirmations, timed reminders, and one-tap rescheduling recover most of them.",
    symptoms: [
      "A truck rolled to an address where nobody is home",
      "Empty slots in a clinic or shop schedule that were booked last week",
      "Customers who say they never got a confirmation",
      "Rescheduling that requires a phone call during business hours",
      "Staff manually calling tomorrow's list every afternoon",
    ],
    cost: {
      h: "Count the slot and the drive, not just the slot",
      p: "A no-show costs the appointment, the fuel and hours to get there, and the job you turned away to hold the slot. For a trade with a crew, one no-show can cost most of a profitable half day. For a clinic it is a chair that cannot be resold on an hour's notice.",
    },
    fix: [
      {
        h: "Confirm by text at the moment of booking",
        p: "Not later, not in an email nobody opens. A text sent while the customer is still on the phone with the details in front of them anchors the appointment.",
      },
      {
        h: "Remind at 24 hours and again on the morning",
        p: "Two reminders, both by SMS, both short. This alone removes most of the forgot-about-it category, which is the largest one.",
      },
      {
        h: "Make rescheduling one tap",
        p: "A customer who can move an appointment by text moves it. A customer who has to call during business hours to move it just does not show up. Same intent, wildly different outcome for you.",
      },
      {
        h: "Backfill the gap automatically",
        p: "When a slot opens, the system can offer it to whoever asked for something sooner. The cancellation stops being a hole in the day.",
      },
    ],
    faqs: [
      {
        q: "Is this part of the AI front desk or a separate build?",
        a: "Confirmations and reminder chains come with the AI front desk, because it is the thing doing the booking. Backfilling cancellations from a waitlist and syncing across multiple providers or crews is workflow automation, and it gets scoped separately.",
      },
      {
        q: "Does texting customers require anything special?",
        a: "It requires consent and a working opt-out, both of which are handled in the build. This is standard for appointment messaging and we set it up correctly rather than leaving it to you.",
      },
      {
        q: "We are a clinic, not a trade. Does this still apply?",
        a: "It applies more. Multi-provider schedules make an empty chair harder to refill on short notice, so reminders and one-tap rescheduling have a bigger effect. The intake questions are different and we write those for your practice.",
      },
    ],
    service: "front-door-setup",
  },
];

export const problems: Problem[] = allProblems.filter((p) => (LIVE_PROBLEM_SLUGS as readonly string[]).includes(p.slug));
export const retiredProblemSlugs: string[] = allProblems
  .map((p) => p.slug)
  .filter((slug) => !(LIVE_PROBLEM_SLUGS as readonly string[]).includes(slug));

export function problemBySlug(slug: string): Problem {
  const p = problems.find((p) => p.slug === slug);
  if (!p) throw new Error(`Unknown problem slug: ${slug}`);
  return p;
}
