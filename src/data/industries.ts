/*
 * Industry data for the /for/[industry] programmatic pages (Personas playbook).
 *
 * Same thin-content guard as cities.ts: every leak, automate-first item, and
 * FAQ is hand-written for the trade. These come from how Arkansas service
 * businesses actually run: owner on the tools, thin office, phone-heavy
 * intake, and follow-up that lives in somebody's memory.
 *
 * Voice rules: direct, plain, concrete, no hype, no em dashes.
 *
 * GEO prompt-matching pass (teardown fix #4): FAQ questions are phrased the way
 * an owner asks an assistant (natural question form, first person where it
 * fits), not as labels. Answers are unchanged.
 */

export interface Industry {
  /** Display name, plural, e.g. "plumbers". */
  name: string;
  /** Singular for sentences, e.g. "plumber". */
  singular: string;
  slug: string;
  /** One-line search-intent description for hub cards and meta. */
  intent: string;
  /** Unique framing paragraph for the top of the page. */
  angle: string;
  /** Four trade-specific leaks. */
  leaks: { h: string; p: string }[];
  /** Four trade-specific "automate this first" items. */
  automate: { h: string; p: string }[];
  /** Three trade-specific FAQs (added to the shared two). */
  faqs: { q: string; a: string }[];
}

export const industries: Industry[] = [
  {
    name: "plumbers",
    singular: "plumber",
    slug: "plumbers",
    intent: "AI answering, booking, and follow-up for plumbing companies",
    angle:
      "Plumbing is an emergency business wearing a scheduling business's clothes. The burst pipe at 9 PM is worth three times the slow drain at noon, and the company that answers the 9 PM call gets both. Most Arkansas plumbing shops still let that call hit voicemail.",
    leaks: [
      {
        h: "Emergency calls after hours",
        p: "A homeowner with water on the floor calls every plumber on the list until a human or something close to one picks up. Voicemail is a referral to your competitor.",
      },
      {
        h: "The callback nobody logged",
        p: "A message taken on paper at the job site gets wet, gets lost, or gets remembered at 9 PM. The caller already booked somebody else.",
      },
      {
        h: "Quotes that die in the truck",
        p: "The estimate gets written, sent, and never touched again. A two-touch follow-up would close a third of them, but nobody owns the second touch.",
      },
      {
        h: "Dispatch by group text",
        p: "Job details move from call to text to notebook to invoice, and something gets retyped wrong at every step. The customer notices before you do.",
      },
    ],
    automate: [
      {
        h: "24/7 AI answering and triage",
        p: "Every call answered, emergencies flagged and escalated to your on-call phone, routine work booked straight onto the calendar.",
      },
      {
        h: "Quote follow-up sequences",
        p: "Every estimate gets a timed second and third touch by SMS, automatically, until it is won or lost. Nobody relies on memory.",
      },
      {
        h: "Job intake that types itself",
        p: "Caller details, photos, and the job address captured on the first call and pushed into your scheduling or invoicing tool. No retyping.",
      },
      {
        h: "Review requests after the job",
        p: "When the invoice closes, the review request goes out. Your Google rating compounds while you work.",
      },
    ],
    faqs: [
      {
        q: "Will the AI know a real emergency from a clogged sink?",
        a: "Yes, because you teach it your rules in the setup. Burst pipes, gas smells, and sewage backups escalate to your on-call phone instantly. Slow drains and remodel quotes get booked into the next open slot. You set the guardrails and test them yourself before it goes live.",
      },
      {
        q: "My guys are not office people. How much do they have to touch?",
        a: "Almost nothing. The system answers, books, and follows up on its own. Your crew gets a clean job card with the details the caller already gave. The office work happens in the background.",
      },
      {
        q: "What does this cost a one-truck shop?",
        a: "The AI front desk is $199 to set up plus $499 a month, and it typically pays for itself with one or two booked jobs it would have missed. The missed-call test that starts it is free.",
      },
    ],
  },
  {
    name: "HVAC companies",
    singular: "HVAC company",
    slug: "hvac",
    intent: "AI answering and workflow automation for HVAC contractors",
    angle:
      "HVAC demand in Arkansas is a cliff, not a curve. The first 100-degree week and the first hard freeze both arrive at once, and the companies that answer every call in that spike book the season. The audit times the unanswered calls and the quotes that go cold, then ranks which one pays back first.",
    leaks: [
      {
        h: "Seasonal spikes that break the front desk",
        p: "Call volume triples in a week and the office answers half of it. The unanswered half does not leave messages. It books your competitor.",
      },
      {
        h: "Maintenance agreements nobody renews",
        p: "The renewal list sits in a spreadsheet and gets worked when somebody remembers. Lapsed agreements are the cheapest revenue you already earned.",
      },
      {
        h: "No-cool calls triaged by whoever answered",
        p: "A rental property with a broken unit in July and a filter question get the same queue position. Emergencies need rules, not luck.",
      },
      {
        h: "Estimates for replacements that go cold",
        p: "A $9,000 system quote gets one email and no follow-up. The homeowner gets three bids and picks the one that called back.",
      },
    ],
    automate: [
      {
        h: "Spike-proof AI answering",
        p: "Every call answered on the first ring whether it is a Tuesday in April or the first freeze in November. No overtime, no temp hires.",
      },
      {
        h: "Emergency triage rules",
        p: "No-cool in July, no-heat in January, and gas smells escalate to on-call immediately. Everything else books into the schedule.",
      },
      {
        h: "Agreement renewal campaigns",
        p: "Expiring maintenance agreements get automatic SMS and email touches before they lapse. Renewals stop depending on a sticky note.",
      },
      {
        h: "Replacement quote follow-up",
        p: "Big-ticket estimates get a timed follow-up sequence with financing talking points, automatically, until the homeowner decides.",
      },
    ],
    faqs: [
      {
        q: "Can it actually handle the summer call spike?",
        a: "That is the point of it. An AI front desk answers every call at the same time, qualifies the caller, and books against your calendar. There is no hold queue and no lunch hour. We will show you load numbers before you commit.",
      },
      {
        q: "Does it work with ServiceTitan or Housecall Pro?",
        a: "Yes. The front desk books into the calendar and pushes intake into the tools you already pay for. If your stack is a shared Google Calendar and QuickBooks, it works with that too.",
      },
      {
        q: "Can it sell maintenance plans on the call?",
        a: "You choose. The system can offer the agreement on every qualifying call, mention it only on tune-up bookings, or never mention it. The script is yours and we build it together.",
      },
    ],
  },
  {
    name: "electricians",
    singular: "electrician",
    slug: "electricians",
    intent: "AI answering and job booking for electrical contractors",
    angle:
      "Electrical work splits cleanly into two piles: the urgent and the profitable. A dead outlet circuit for a restaurant is tonight. A panel upgrade quote is this month. The shops that answer both, fast, and follow up on the second pile, are the ones adding trucks.",
    leaks: [
      {
        h: "Urgent calls while you are in a panel",
        p: "You cannot answer with your hands in a live box, and the caller with no power is not leaving a message. They are calling the next license on the list.",
      },
      {
        h: "Quote requests from builders that stall",
        p: "A GC sends three electricians the same plans. The first complete number back usually gets the job. Slow intake makes you the third bid every time.",
      },
      {
        h: "Permit and inspection scheduling by phone tag",
        p: "Inspectors, homeowners, and your crew all need the same Tuesday. Coordinating it by voicemail burns an hour a job.",
      },
      {
        h: "Small jobs that are not worth a callback but are",
        p: "Ceiling fans and EV chargers feel like interruptions, but they fill gaps between rough-ins at full margin. They only work if booking them is effortless.",
      },
    ],
    automate: [
      {
        h: "Answered while you work",
        p: "The AI front desk picks up while you are in the panel, qualifies urgency, and books or escalates by your rules. You call back the ones that matter.",
      },
      {
        h: "Bid intake that starts the clock",
        p: "Plans and quote requests get captured, acknowledged instantly, and routed into your estimating flow. Builders stop wondering if you got it.",
      },
      {
        h: "Scheduling without phone tag",
        p: "Customers book from your real availability by text link. Confirmations and reminders go out automatically.",
      },
      {
        h: "Small-job pipeline",
        p: "Quick jobs get a flat-booking path with pricing ranges stated up front. The calendar fills its own gaps.",
      },
    ],
    faqs: [
      {
        q: "Can it give pricing or will it overpromise?",
        a: "It quotes only what you put in the script: service call fee, ranges for common jobs, or nothing at all. It never invents a number. If a job needs a look, it books the look.",
      },
      {
        q: "We do commercial and residential. Can it route both?",
        a: "Yes. The intake splits by job type from the first question, so commercial inquiries get the right questions and the right follow-up, and residential calls book into the residential calendar.",
      },
      {
        q: "What is the cheapest way to try it?",
        a: "The free missed-call test. We call your line after you close and send you the recording. If the leak is real, the answering plans start at $129 a month. Or start with the free 15-minute assessment.",
      },
    ],
  },
  {
    name: "roofers",
    singular: "roofer",
    slug: "roofers",
    intent: "AI answering and storm-season intake for roofing companies",
    angle:
      "Roofing in Arkansas lives and dies by storm season. When a hail cell crosses the River Valley or the metro, the phones of thirty roofing companies light up the same evening, and the ones with automated intake work the whole event. The ones relying on callbacks work a fraction of it.",
    leaks: [
      {
        h: "Storm-night call floods",
        p: "Two hundred homeowners call in 48 hours and your office can answer twenty. Every missed call is a $10,000 roof walking to the company with a working phone tree.",
      },
      {
        h: "Insurance-job follow-up that drifts",
        p: "Adjusters, supplements, and mortgage company checks all need chasing at different times. One dropped thread stalls a job for six weeks.",
      },
      {
        h: "Inspection bookings by voicemail",
        p: "Free inspections are your top of funnel, and they are being scheduled by phone tag while the homeowner books three other inspections.",
      },
      {
        h: "The crew that does not know tomorrow's address",
        p: "Job details move by text and memory. A wrong start time or a missing materials note costs a morning and looks amateur.",
      },
    ],
    automate: [
      {
        h: "Storm-mode intake",
        p: "Every call answered during an event, damage triaged by your questions, inspections booked onto the calendar in order. The flood becomes a queue.",
      },
      {
        h: "Inspection scheduling links",
        p: "Homeowners book their own inspection slot by text, with automatic reminders that cut no-shows.",
      },
      {
        h: "Claim status chasing",
        p: "Timed follow-ups for every open insurance job, adjuster touchpoints logged, nothing aging in a spreadsheet unseen.",
      },
      {
        h: "Crew-ready job packets",
        p: "Address, scope, materials notes, and photos assembled automatically from intake. The crew rolls out with the full picture.",
      },
    ],
    faqs: [
      {
        q: "We use subcontractors and our volume swings hard. Does this fit?",
        a: "It fits that model better than a staffed office does. The system answers at storm volume and goes quiet in the off season without a payroll decision. You pay a flat monthly, not a salary for the spike.",
      },
      {
        q: "Can it ask insurance questions without practicing law?",
        a: "It collects facts only: date of damage, carrier, whether a claim is filed, the claim number if they have one. It never advises on coverage. The script is yours and we build the boundaries in.",
      },
      {
        q: "How fast can this be running before storm season?",
        a: "A done-for-you AI front desk is typically live in two to three weeks from the assessment. If the season is close, say so on the call and we will tell you honestly whether the timeline works.",
      },
    ],
  },
  {
    name: "dental practices",
    singular: "dental practice",
    slug: "dentists",
    intent: "AI front desk and scheduling automation for dental practices",
    angle:
      "A dental front desk is a revenue position. New-patient calls die during check-in, insurance verification stacks up, and billing follow-up waits on whoever is free. The audit times those three before anyone buys a tool.",
    leaks: [
      {
        h: "New patient calls during check-in rush",
        p: "The phone rings while the desk is elbow-deep in insurance cards. The new patient calling three practices books with whoever answers.",
      },
      {
        h: "Hygiene recall that runs on postcards",
        p: "Six-month recalls go out late or not at all, and the schedule develops holes that get filled with panic discounting instead of patients.",
      },
      {
        h: "Same-day cancellation holes",
        p: "A 2 PM crown cancels at 10 AM and the chair sits empty because the waitlist lives in someone's head.",
      },
      {
        h: "Verification and billing that wait on the desk",
        p: "Eligibility checks and unpaid balances pile up while the desk is with a patient. The money is already earned. It just is not collected on time.",
      },
    ],
    automate: [
      {
        h: "Every call answered",
        p: "New patients greeted, qualified, and booked into the right appointment type, even while the desk is checking somebody in.",
      },
      {
        h: "Recall and reactivation sequences",
        p: "Due and overdue patients get automatic SMS and email touches with a booking link. The schedule fills from the list you already own.",
      },
      {
        h: "Waitlist that fills holes automatically",
        p: "Cancellations trigger outreach to the waitlist in priority order. Empty chairs get claimed in minutes, not days.",
      },
      {
        h: "After-hours self-booking",
        p: "Evening callers book into real availability by text link. Monday morning starts with a schedule, not a voicemail box.",
      },
    ],
    faqs: [
      {
        q: "Is this HIPAA safe?",
        a: "The front desk handles scheduling, not clinical detail, and we configure it to collect the minimum: name, contact, insurance carrier if you want it, and the reason for the visit. No clinical notes in the intake. We will walk your office manager through exactly what is stored and where before anything goes live.",
      },
      {
        q: "We use Dentrix / Open Dental / Eaglesoft. Does it connect?",
        a: "Scheduling writes into your real availability through the calendar layer your practice actually runs on. We confirm the exact integration path on the assessment call, with your practice management system in mind, before quoting the build.",
      },
      {
        q: "Our front desk is great. Does this replace her?",
        a: "No. It covers the calls she cannot take because she is with a patient, and the hours the office is closed. Most practices tell us the desk gets more done because the phone stops interrupting insurance work.",
      },
    ],
  },
  {
    name: "law firms",
    singular: "law firm",
    slug: "law-firms",
    intent: "AI intake and consultation booking for Arkansas law firms",
    angle:
      "Legal intake is a race. The person calling about a wreck, a custody fight, or a contract dispute calls three firms and hires the one that answers and books the consult. Small Arkansas firms lose that race every day to their own voicemail.",
    leaks: [
      {
        h: "New client calls during court",
        p: "You are in front of a judge and the best case of the month is calling. It goes to voicemail, and the caller hires the firm that picked up.",
      },
      {
        h: "Intake details taken three times",
        p: "The receptionist writes it, the paralegal re-enters it, the attorney asks it again. Clients notice, and conflicts checking starts late.",
      },
      {
        h: "Consult no-shows with no reminder chain",
        p: "A booked consultation without reminders is a coin flip. The no-show slot could have been sold twice.",
      },
      {
        h: "Unqualified consults eating attorney hours",
        p: "Wrong practice area, wrong county, no budget. Without intake screening, the attorney pays for the filter with their own calendar.",
      },
    ],
    automate: [
      {
        h: "24/7 intake answering",
        p: "Every call answered, conflict-checking basics captured, and qualified callers booked into consultations by practice area and county.",
      },
      {
        h: "Structured intake packets",
        p: "Caller details, opposing party, and matter type captured once and delivered as a clean packet. Conflicts start before the consult, not after.",
      },
      {
        h: "Consult reminder chains",
        p: "Automatic SMS and email reminders with directions and document checklists. No-show rates drop, and the ones who cancel free the slot early.",
      },
      {
        h: "Polite deflection of bad fits",
        p: "Wrong practice area or jurisdiction gets a respectful referral script instead of attorney time. Your calendar fills with cases you actually take.",
      },
    ],
    faqs: [
      {
        q: "How do you handle confidentiality and attorney-client privilege?",
        a: "The intake collects contact and matter basics, the same information your receptionist takes on a first call, and it states plainly that no attorney-client relationship is formed and no confidential detail should be shared yet. You approve every word of the script.",
      },
      {
        q: "Can it screen by practice area and county?",
        a: "Yes, that is the core of the build. Family law in Sebastian County gets one path, personal injury statewide gets another, and everything outside your practice list gets a referral message you write.",
      },
      {
        q: "We already have a receptionist. Why add this?",
        a: "Coverage, not replacement. Court days, lunch hours, sick days, and 6 PM callers are where intake leaks. The system takes those calls and hands your receptionist clean packets instead of voicemail transcriptions.",
      },
    ],
  },
  {
    name: "real estate agencies",
    singular: "real estate agency",
    slug: "real-estate",
    intent: "AI lead response and follow-up for Arkansas real estate agencies",
    angle:
      "Real estate lead response is measured in minutes, and Arkansas agents are measured in showings. The portal lead that gets a text in ninety seconds books the tour. The one that gets a call tomorrow books with the agent who texted first.",
    leaks: [
      {
        h: "Portal leads answered tomorrow",
        p: "Zillow and Realtor inquiries arrive at 9 PM while you are at dinner. By morning the buyer has talked to two agents who responded at 9:05.",
      },
      {
        h: "Sign calls with no capture",
        p: "A buyer calls the number on the sign, gets voicemail, and drives on. The lead was worth a commission and left no name behind.",
      },
      {
        h: "Nurture lists that go quiet",
        p: "The six-to-twelve-month buyers sit in the CRM untouched until they buy from whoever stayed in touch. Staying in touch by hand does not scale past twenty names.",
      },
      {
        h: "Showing coordination by text chain",
        p: "Three parties, two calendars, one lockbox code. Every reschedule is ten messages that an assistant could have handled if you had one.",
      },
    ],
    automate: [
      {
        h: "Ninety-second lead response",
        p: "Every portal and website lead gets an instant, personal SMS and email response with your booking link, day or night.",
      },
      {
        h: "Sign-call capture",
        p: "Every call on every listing answered, the caller qualified, and their details delivered to you before they reach the next sign.",
      },
      {
        h: "Long-term nurture that runs itself",
        p: "Your cold list gets a real touch every month: market updates, new listings that match, and a check-in. The pipeline stays warm without your Sundays.",
      },
      {
        h: "Showing scheduling without the chain",
        p: "Buyers book from your real availability, confirmations and reminders go out automatically, and reschedules happen by link instead of by thread.",
      },
    ],
    faqs: [
      {
        q: "Does it work with my CRM?",
        a: "Yes. Follow Up Boss, kvCORE, LionDesk, and the common agency stacks all accept the intake. If your CRM is a spreadsheet, we start there and upgrade when you are ready.",
      },
      {
        q: "Will sellers and buyers know it is automated?",
        a: "They will know it is fast. The first response goes out in your voice with your name, and the moment a conversation needs judgment it hands off to you with the full thread attached.",
      },
      {
        q: "I am a solo agent, not a brokerage. Is this overkill?",
        a: "Solo agents get the most from it, because there is no one else to answer. The front desk is $199 to set up plus $499 a month, typically one recovered closing a year to pay for itself several times over.",
      },
    ],
  },
  {
    name: "medical clinics and chiropractors",
    singular: "clinic",
    slug: "medical-clinics",
    intent: "AI front desk and scheduling for clinics and chiropractors",
    angle:
      "Independent clinics and chiropractic offices run lean on purpose: one front desk, maybe two, covering phones, check-in, and billing at once. The phone is where that math breaks, and the missed new-patient call is the most expensive ring in the building.",
    leaks: [
      {
        h: "Phones ringing during check-in",
        p: "The desk is checking in a waiting room and the phone rings off the hook. New patients calling three clinics book with whoever picks up.",
      },
      {
        h: "The 6 PM caller who would have booked",
        p: "Half of new-patient calls come after the office closes. Voicemail converts a fraction of what a live booking path converts.",
      },
      {
        h: "No-shows with no reminder chain",
        p: "Appointments booked a week out without reminders miss at double the rate. The gap costs a full slot, every time.",
      },
      {
        h: "Care-plan follow-up by memory",
        p: "The patient who should return in two weeks gets a call when somebody remembers. Care plans drift and outcomes and revenue both sag.",
      },
    ],
    automate: [
      {
        h: "Every call answered, every hour",
        p: "New patients greeted, qualified, and booked into the right visit type, while the desk handles the humans in the room.",
      },
      {
        h: "After-hours self-booking",
        p: "Evening callers get a text link to real availability. The morning starts with a schedule instead of a voicemail box.",
      },
      {
        h: "Reminder and confirmation chains",
        p: "Automatic confirmations, day-before reminders, and same-day nudges. No-shows drop and cancellations free slots early enough to refill.",
      },
      {
        h: "Recall and care-plan follow-up",
        p: "Due-for-visit and dropped-off patients get automatic outreach with a booking link. Reactivation stops depending on memory.",
      },
    ],
    faqs: [
      {
        q: "How is patient privacy handled?",
        a: "The intake collects scheduling basics only: name, contact, and visit reason in the patient's own words. No clinical detail, no records. We configure storage and retention with your office manager and show you exactly what lives where before launch.",
      },
      {
        q: "Can it book different visit types and provider schedules?",
        a: "Yes. New patient, adjustment, exam, and re-check all get their own duration and rules, across multiple providers. You approve the booking logic and test it before it answers a real call.",
      },
      {
        q: "We are a two-person office. Is this sized for us?",
        a: "That is the exact practice it fits. The front desk is $199 setup plus $499 a month, less than a part-time hire, and it covers the phones when your one desk person is with a patient or out sick.",
      },
    ],
  },
  {
    name: "auto repair shops",
    singular: "auto repair shop",
    slug: "auto-repair",
    intent: "AI answering and status updates for auto repair shops",
    angle:
      "An auto repair shop's phone is two kinds of interruption: new work trying to come in, and existing customers asking where their car is. Both cost the service writer's whole day. Automating both is the cheapest capacity a shop can buy.",
    leaks: [
      {
        h: "New work calls during the morning drop-off rush",
        p: "The phone rings while three customers are dropping keys. The caller needing a brake quote calls the next shop on the list.",
      },
      {
        h: "Status calls eating the service writer",
        p: "Half the day's calls are 'is it ready yet.' Each one pulls the writer off the counter, and the answer usually lives in the shop management system already.",
      },
      {
        h: "Declined work that never gets a second ask",
        p: "The customer declines the struts today and nobody follows up in three weeks when the budget resets. Declined work is a pipeline, treated like a dead end.",
      },
      {
        h: "Estimates that stall waiting on parts or approval",
        p: "The estimate sits unsent, or sent and unanswered, and the bay stays booked for a car that is not coming. One stalled approval cascades through the week.",
      },
    ],
    automate: [
      {
        h: "New work answered on the first ring",
        p: "Every call answered, the vehicle and symptoms captured, and drop-off slots booked against the real calendar, even during the morning rush.",
      },
      {
        h: "Status updates without the phone",
        p: "Automatic texts at diagnosis, approval, and completion. The 'is it ready' calls stop because the answer arrives first.",
      },
      {
        h: "Estimate approval by text",
        p: "The estimate goes out with approve and decline buttons. Approvals come back in minutes and parts get ordered the same hour.",
      },
      {
        h: "Declined-work follow-up",
        p: "Deferred repairs get a timed second ask with the safety note attached. The shop's own history becomes a pipeline.",
      },
    ],
    faqs: [
      {
        q: "Does it work with Shop-Ware, Tekmetric, or Mitchell 1?",
        a: "The front desk and status automation connect to the calendar and workflow layer your shop actually runs on. We confirm the exact path for your system on the assessment call before quoting the build.",
      },
      {
        q: "Can it quote prices for common jobs?",
        a: "Only what you put in the script: diagnostic fee, ranges for brakes or batteries if you want them stated, or nothing. Anything beyond that books a diagnostic slot. It never invents a number.",
      },
      {
        q: "My customers are old school. Will they hate texting?",
        a: "Every flow falls back to a human. Callers can always reach the shop during hours, and the texts are plain and short. What customers hate is not knowing. The updates fix that.",
      },
    ],
  },
  {
    name: "landscapers and lawn care",
    singular: "landscaper",
    slug: "landscapers",
    intent: "AI booking and route-season automation for landscapers",
    angle:
      "Lawn care is a routing business with a phone problem. The season starts the same week for every company in the county, and the crews that answer the spring rush and follow up on every quote fill the route. The ones returning calls in May get the leftovers.",
    leaks: [
      {
        h: "The spring rush hits voicemail",
        p: "Three weeks of the year decide the season, and you are on a mower for all of them. Every missed call is a weekly account worth a thousand dollars a summer.",
      },
      {
        h: "Quote follow-up between yards",
        p: "The cleanup or mulch quote goes out and the follow-up depends on remembering at 8 PM. Half of quoting season is follow-up, and half of it never happens.",
      },
      {
        h: "Weather reschedules by phone tree",
        p: "A rain day means thirty customers need telling. Doing it by hand eats the day you were trying to save.",
      },
      {
        h: "One-time jobs that never become routes",
        p: "A spring cleanup customer is a weekly account you have not asked for yet. The ask almost never happens because nobody owns it.",
      },
    ],
    automate: [
      {
        h: "Rush-proof answering and booking",
        p: "Every call answered during the spring flood, service and address captured, quotes scheduled, and simple services booked directly.",
      },
      {
        h: "Quote follow-up sequences",
        p: "Every estimate gets timed second and third touches automatically until it is won or lost. Season revenue stops depending on memory.",
      },
      {
        h: "Weather-day broadcast",
        p: "Rain pushes the route, and every affected customer gets a text with the new day in one send. The phone stays quiet and the customers stay informed.",
      },
      {
        h: "One-time to recurring upsell",
        p: "After a one-time job completes, the seasonal offer goes out automatically. Cleanups become accounts while the gate is still open.",
      },
    ],
    faqs: [
      {
        q: "It is just me and two crews. Is this too much system?",
        a: "No. The whole point is that a two-crew operation can answer like a company with an office. The front desk runs $199 setup plus $499 a month and typically pays for itself with a handful of weekly accounts.",
      },
      {
        q: "Can it handle quote requests that need a site visit?",
        a: "Yes. Simple mowing can book by script with your pricing rules, and anything that needs eyes on the property books a quote visit into your real calendar with the address and gate notes attached.",
      },
      {
        q: "What happens in the off season?",
        a: "The system scales down with you. Leaf season and snow work can run their own scripts, and the quiet months still answer every call so the first warm week is already booked.",
      },
    ],
  },
];

export function industryBySlug(slug: string): Industry {
  const i = industries.find((i) => i.slug === slug);
  if (!i) throw new Error(`Unknown industry slug: ${slug}`);
  return i;
}
