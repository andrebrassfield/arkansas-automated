/*
 * Problem data for the /fix/[problem] pages.
 *
 * These are the searches an owner runs before they know what to buy: "missed
 * calls", "after hours answering service", "customers not answering quotes".
 * Problem-first, product-second, one page per leak.
 *
 * Deliberately NOT crossed with cities. A problem page multiplied by 25 towns
 * produces 125 pages that differ by a place name, which is the exact thin
 * content pattern cities.ts was written to avoid. The geo intent is already
 * served by /ai-receptionist/[city]; these pages link into that cluster
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

export const problems: Problem[] = [
  {
    h1: "Calls are going to voicemail and those customers are not calling back",
    label: "Missed calls",
    slug: "missed-calls",
    intent: "Stop missing calls at an Arkansas service business",
    answer:
      "A missed call at an Arkansas service business is usually a lost job, not a delayed one. Most callers with an urgent problem never leave voicemail; they dial the next company. The fix is a 24/7 AI receptionist that answers in your business's voice, qualifies the caller, and books the job while they are still on the line.",
    symptoms: [
      "Voicemail box that fills up with hang-ups rather than messages",
      "Callers who booked somebody else by the time you called back at 6 PM",
      "Your phone log shows more inbound calls than your calendar shows jobs",
      "The owner answers the phone from a ladder, a crawl space, or the interstate",
      "Paid leads from Google or a lead vendor that never turn into booked work",
    ],
    cost: {
      h: "Run the number before you decide it is small",
      p: "Take your average booked job value and multiply it by the calls that ring out in a week. Four missed calls a week at a $400 average job is $83,000 a year in work that reached your phone and left. You do not have to close all of it for the arithmetic to change what you do on Monday.",
    },
    fix: [
      {
        h: "Count what you are actually missing",
        p: "Pull the call log from your carrier or your tracking number for the last 30 days and count unanswered inbound calls, then compare that to booked jobs. Most owners are surprised by the gap, and the number is the whole argument.",
      },
      {
        h: "Answer everything, then sort it",
        p: "An AI receptionist picks up on the first ring at any hour, in your business's voice. Nothing goes to voicemail. The qualification questions you wrote decide what happens next.",
      },
      {
        h: "Escalate real emergencies to a human",
        p: "You set the rules. A burst pipe or a stopped truck rings your on-call phone immediately. A remodel quote gets booked into next week. The system never has to guess, because you told it.",
      },
      {
        h: "Book on the spot and confirm by text",
        p: "The call ends with a slot on your real calendar and an SMS confirmation to the customer. That is the difference between a captured lead and a message you will return tomorrow.",
      },
    ],
    faqs: [
      {
        q: "Would an answering service fix this just as well?",
        a: "It fixes the ringing, not the booking. A traditional answering service takes a message and hands it back to you, so the follow-up work still lands on your desk and the customer still waits. An AI receptionist qualifies the caller against your rules and puts the job on your calendar during the call. We wrote a full comparison if you want the detail.",
      },
      {
        q: "How fast can this be live?",
        a: "The free 15-minute assessment happens first, with your business details loaded so you hear it answer as your company. From there a standard AI front desk build takes about two weeks, most of which is you testing it and tuning the script before it takes a real customer call.",
      },
      {
        q: "What does it cost?",
        a: "The AI front desk is $2,500 to set up plus $497 a month, with call recordings and a monthly tuning session included. Against the missed-call arithmetic above, most Arkansas service businesses cover it with one or two recovered jobs a month.",
      },
    ],
    service: "ai-front-desk",
  },
  {
    h1: "Nobody answers after five, and that is when the good calls come in",
    label: "After-hours calls",
    slug: "after-hours-calls",
    intent: "After-hours answering for Arkansas businesses",
    answer:
      "After-hours calls are the highest-intent calls an Arkansas service business gets, and most of them hit voicemail. Emergencies and evening commuters both call outside business hours. A 24/7 AI receptionist answers at any hour, triages emergencies to your on-call phone, and books everything else into the next open slot.",
    symptoms: [
      "Emergency work going to whichever competitor picks up at 9 PM",
      "A commuter market where customers only call after 6 PM",
      "Paying someone overtime, or the owner, to watch a phone that rings twice",
      "Weekend calls nobody sees until Monday morning",
      "An on-call rotation that burns out your best technician",
    ],
    cost: {
      h: "The after-hours call is worth more than the daytime one",
      p: "Someone calling at 9 PM has an active problem and a short list. Emergency and after-hours work usually carries a premium rate and closes at a much higher rate than a daytime price-shopping call. Missing those specifically is a more expensive habit than missing an average call.",
    },
    fix: [
      {
        h: "Decide what an emergency is, in writing",
        p: "Burst pipe yes, slow drain no. No heat in January yes, thermostat question no. This list is the single most important thing you will write, and it takes about twenty minutes.",
      },
      {
        h: "Route emergencies to a person immediately",
        p: "The receptionist takes the details, then rings your on-call phone and texts the summary so whoever picks up already knows the address and the problem.",
      },
      {
        h: "Book the non-emergencies instead of banking them",
        p: "Everything that can wait gets scheduled into tomorrow's route on the call, not returned tomorrow. The customer stops shopping, which is the entire point.",
      },
      {
        h: "Retire the phone-watching shift",
        p: "Once triage is reliable, nobody sits up waiting for a phone that might ring. The rotation covers real dispatches only, which is usually where the payback shows up for crews.",
      },
    ],
    faqs: [
      {
        q: "Will it wake me up for something stupid?",
        a: "Only if your rules say to. The escalation list is yours, you test it against real scenarios before launch, and you change it in the monthly tuning session when reality disagrees with what you wrote. Most owners tighten it once in the first month and then leave it alone.",
      },
      {
        q: "What about calls in Spanish at 10 PM?",
        a: "The receptionist takes the language cue from the caller and runs your qualification script in either English or Spanish, then hands you one job card. It is part of the standard build, not an add-on, and it matters most in Springdale and Rogers.",
      },
      {
        q: "Do I need this if I already have call forwarding to my cell?",
        a: "Forwarding moves the ringing, it does not answer it. If you are asleep, driving, or on another job, the caller still gets voicemail, and now it is your voicemail. The question is whether the call gets handled, not whether it reaches your pocket.",
      },
    ],
    service: "ai-front-desk",
  },
  {
    h1: "Quotes go out and then nothing happens",
    label: "Quote follow-up",
    slug: "quote-follow-up",
    intent: "Automated quote and estimate follow-up for Arkansas businesses",
    answer:
      "Most estimates that go unanswered are not rejections, they are quotes nobody followed up on. A timed follow-up sequence sends a second and third touch by SMS and email automatically until the quote is won or lost, so closing stops depending on whether anyone remembered to call.",
    symptoms: [
      "A pile of open estimates nobody has looked at in three weeks",
      "No consistent answer to the question of how many touches a quote gets",
      "Follow-up that happens when the owner is bored on a Sunday night",
      "Customers who say they went with someone else who checked back",
      "No idea what your actual quote-to-close rate is",
    ],
    cost: {
      h: "The second touch is where the money is",
      p: "The first quote is the cost of doing business. The second and third contacts are where quotes that would have gone cold turn into jobs, and they are exactly the ones a busy shop skips. Count your open estimates from last quarter, multiply by your average job, and ask how many got a single follow-up.",
    },
    fix: [
      {
        h: "Give every quote an owner that is not a person",
        p: "The moment a quote goes out, it enters a sequence. Nobody has to remember it, put it on a list, or feel bad about it at 9 PM on Sunday.",
      },
      {
        h: "Two touches by SMS, one by email, then stop",
        p: "Short, plain, and easy to reply to. Text gets read; email gets filed. The sequence ends cleanly either way so you are not pestering people into a no.",
      },
      {
        h: "Let a reply cancel the chase automatically",
        p: "The customer answers and the sequence stops immediately. Nothing is worse than an automated nudge arriving after somebody already said yes.",
      },
      {
        h: "Report the close rate you never had",
        p: "Once every quote runs the same path, you can finally see which job types, price bands, and lead sources actually close, and price accordingly.",
      },
    ],
    faqs: [
      {
        q: "Will this annoy customers?",
        a: "Two texts and an email over ten days, each one short and easy to reply to, is not harassment; it is the job. What annoys people is being ignored after they asked for a price. The sequence stops the moment they reply either way.",
      },
      {
        q: "Does this work with the software I already use?",
        a: "Usually yes. We build on Jobber, Housecall Pro, ServiceTitan, QuickBooks, Follow Up Boss, Google Workspace, and the rest of the normal Arkansas small business stack. If a tool genuinely cannot do it, we say so and show you the math on switching before you spend anything.",
      },
      {
        q: "What does a quote follow-up build cost?",
        a: "A quote follow-up sequence on its own is at the bottom of the workflow automation range, around $1,500 setup plus a monthly managed tier. The $999 operations audit prices it exactly for your operation first, and the audit fee credits toward the build.",
      },
    ],
    service: "workflow-automation",
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
        a: "A single sequence is a couple of weeks. A full lead-to-invoice pipeline with dispatch coordination runs longer and lands in the $1,500 to $5,000 range depending on scope. The operations audit fixes the number before you commit.",
      },
      {
        q: "What happens when it breaks?",
        a: "The monthly managed tier exists for exactly that. Automation that nobody maintains dies quietly and you find out from a customer. We monitor the flows and you have a human to call.",
      },
    ],
    service: "workflow-automation",
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
    service: "ai-front-desk",
  },
];

export function problemBySlug(slug: string): Problem {
  const p = problems.find((p) => p.slug === slug);
  if (!p) throw new Error(`Unknown problem slug: ${slug}`);
  return p;
}
