/*
 * City data for the /ai-workshops/[city] and /ai-receptionist/[city]
 * programmatic pages.
 *
 * Thin-content guard (programmatic-seo skill): every field below is
 * hand-written per city, not a template with the name swapped. `economy` and
 * `angle` carry the genuinely local detail; `workshopNote` states plainly how
 * a business in that city actually gets served (public seats run in Fort
 * Smith; everywhere else is private on-site or NWA sessions as they open).
 * `phones` is the same guard applied to the AI receptionist cluster: two
 * paragraphs about how the phone actually behaves in that town, written per
 * city. A city with no honest local phone story does not get a page.
 *
 * Voice rules: direct, plain, concrete numbers, no hype, no em dashes.
 */

export interface City {
  name: string;
  slug: string;
  region: string;
  /** Short logistics note, shown as a fact on the page. */
  drive: string;
  /** One sentence on the local business mix. */
  economy: string;
  /** Two short paragraphs, unique to this city. */
  angle: string[];
  /** Two paragraphs on the local phone and front-desk reality. */
  phones: string[];
  /** How workshops serve this city, stated plainly. */
  workshopNote: string;
  /** Slugs of nearby cities, for cross-links. */
  nearby: string[];
}

export const cities: City[] = [
  {
    name: "Fort Smith",
    slug: "fort-smith",
    region: "River Valley",
    drive: "Our home base",
    economy:
      "Manufacturing, logistics on the Arkansas and Oklahoma line, two hospital systems, and a deep bench of HVAC, plumbing, roofing, and electrical shops serving the whole River Valley.",
    angle: [
      "Fort Smith runs on shops that answer the phone between jobs. A roofer on a ladder in Chaffee Crossing or a plumber under a house in Fianna Hills cannot pick up, and the caller does not wait. They dial the next name in the list.",
      "This is where we host the public workshops, and where we built the intake and follow-up systems behind Fort Smith Directory. If you want to see the work before you buy it, everything we install for clients is running here first.",
    ],
    phones: [
      "The Fort Smith service call is almost always placed from a phone the caller is holding while looking at the problem. Water on the floor, no cold air in August, a garage door that will not close. Those callers do not leave voicemail and they do not call back. They work down the search results until a voice answers.",
      "An AI receptionist changes the arithmetic for a Fort Smith shop because the owner is usually the one missing the call. You are in a crawl space, on a roof, or driving between Chaffee Crossing and Greenwood. The receptionist picks up in your business's voice, asks your qualification questions, and puts the job on your calendar before you are back in the truck.",
    ],
    workshopNote:
      "Public workshops run here on Saturday afternoons, 1 to 5 PM, capped at 18 owners. The room address goes out with your seat confirmation.",
    nearby: ["van-buren", "russellville", "siloam-springs", "fayetteville"],
  },
  {
    name: "Van Buren",
    slug: "van-buren",
    region: "River Valley",
    drive: "10 minutes from our Fort Smith base",
    economy:
      "Historic downtown retail and restaurants along Main Street, a working railyard, and trades and service shops covering Crawford County and the north side of the river.",
    angle: [
      "Van Buren businesses live close to their customers. The shops on and around Main Street win on reputation, which makes a missed call more expensive than it looks. One unanswered Saturday inquiry is a neighbor hiring someone from the other side of the bridge.",
      "We are across the river, so on-site work in Van Buren is the easiest trip we make. Most of what Van Buren owners need, call answering, quote follow-up, and scheduling, we can map in a single working session.",
    ],
    phones: [
      "In a town this size the phone is the reputation. A Van Buren caller often already knows someone who used you, so they call expecting a person, and an unanswered ring reads as a business that got too busy for them. That impression travels fast in Crawford County.",
      "The fix is not a call center that answers as a stranger. It is a receptionist that answers as your business, knows your service area stops at the county line or does not, and texts you the details of anything it cannot handle. Van Buren owners tend to test it hardest on that last point, and it holds up.",
    ],
    workshopNote:
      "Public workshops run 10 minutes away in Fort Smith on Saturday afternoons. Private on-site workshops for a Van Buren team or trade group are available on request.",
    nearby: ["fort-smith", "siloam-springs", "russellville", "fayetteville"],
  },
  {
    name: "Fayetteville",
    slug: "fayetteville",
    region: "Northwest Arkansas",
    drive: "About an hour from Fort Smith",
    economy:
      "The University of Arkansas, a restaurant and hospitality corridor on Dickson Street, fast-growing property management, and service companies scaling with one of the fastest-growing metros in the state.",
    angle: [
      "Fayetteville has two business seasons: the school year and the summer turnover. Property managers, cleaners, movers, and HVAC shops all get hit in the same six-week window, and the ones who answer fast take the whole season.",
      "Fayetteville owners tend to be early adopters. The question we hear most is not whether AI answering works, but whether it can keep up with their call volume in August. It can, and we will show you the load numbers before you commit.",
    ],
    phones: [
      "August is the test. Move-in week puts every property manager, cleaner, locksmith, and HVAC shop in Fayetteville on the same phone at the same hour, and a human front desk simply runs out of hands. The calls that go unanswered in that window are the ones you spent all year marketing for.",
      "An AI receptionist does not queue. It answers the fortieth call the way it answered the first, takes the unit number and the problem, and books the slot. For Fayetteville the useful setting is usually overflow: your office picks up when it can, and everything that would have rung out goes to the receptionist instead of to voicemail.",
    ],
    workshopNote:
      "Northwest Arkansas workshop sessions open as demand builds. Reserve a seat and we will notify you first, or book a private on-site workshop for your team now.",
    nearby: ["springdale", "rogers", "bentonville", "siloam-springs"],
  },
  {
    name: "Springdale",
    slug: "springdale",
    region: "Northwest Arkansas",
    drive: "About an hour from Fort Smith",
    economy:
      "Tyson's hometown, with food processing, trucking and logistics, construction, and one of the most active Hispanic small-business communities in Arkansas.",
    angle: [
      "Springdale businesses often serve customers in two languages, and that is exactly where a phone system falls apart. An AI front desk can greet and qualify callers in English or Spanish and route them the same way every time, day or night.",
      "The contractors and trucking outfits here run lean office staff on purpose. Automating the quote chase and the after-hours calls is usually worth a full hire they were trying to avoid making.",
    ],
    phones: [
      "The language question is the whole question in Springdale. A caller who reaches a greeting they cannot follow hangs up and calls a competitor who answers in Spanish, and the business that lost the job never learns it happened. There is no voicemail to review, because nobody left one.",
      "A bilingual AI receptionist takes the language cue from the caller and runs your qualification script either way, then hands you one job card in English. Springdale contractors and trucking outfits get the second thing too: the after-hours dispatch call answered at 11 PM without paying somebody to sit up for it.",
    ],
    workshopNote:
      "Northwest Arkansas sessions open as demand builds, or book a private on-site workshop in Springdale for your team. Bilingual setups are covered in the build.",
    nearby: ["fayetteville", "rogers", "siloam-springs", "bentonville"],
  },
  {
    name: "Rogers",
    slug: "rogers",
    region: "Northwest Arkansas",
    drive: "About 70 minutes from Fort Smith",
    economy:
      "Retail and restaurants along the 71B corridor, Walmart vendor offices, new construction on every side, and home services chasing some of the busiest growth in the state.",
    angle: [
      "Rogers growth is good for business and brutal on the front desk. When every subdivision that goes up needs HVAC, fencing, and gutters at once, the shops that answer and follow up first book the work. The rest wonder where the season went.",
      "Most Rogers owners we talk to do not need more leads. They need the leads they already paid for to stop leaking out between the first call and the second follow-up. That is a workflow problem, and it is the cheapest one to fix.",
    ],
    phones: [
      "Rogers home service companies are usually paying for their calls. Google Local Services, a paid map pack position, a lead vendor, all of it priced per call. When one of those rings out, you did not just lose a job, you paid for the privilege of losing it.",
      "That is why the receptionist math is easy here. Answering every paid call, qualifying it against your service area and job minimum, and booking it on the spot recovers the spend you are already making. Rogers owners who track cost per booked job see it inside the first month.",
    ],
    workshopNote:
      "Northwest Arkansas sessions open as demand builds, or bring us on-site in Rogers for a private workshop built around your trade.",
    nearby: ["bentonville", "springdale", "fayetteville", "siloam-springs"],
  },
  {
    name: "Bentonville",
    slug: "bentonville",
    region: "Northwest Arkansas",
    drive: "About 70 minutes from Fort Smith",
    economy:
      "Walmart's headquarters and its vendor ecosystem, a cycling and hospitality boom, professional services, and a steady stream of new restaurants and boutiques.",
    angle: [
      "Bentonville has two economies. The vendor offices run on enterprise tooling, and the local shops, restaurants, and service businesses run on the owner's cell phone. We work with the second group, and the gap between the two is the opportunity.",
      "The businesses growing fastest here are the ones that answer like a company twice their size. A 24/7 front desk and automated follow-up is how a four-person shop does that without hiring.",
    ],
    phones: [
      "Bentonville customers are calibrated by the vendor offices. They deal with companies that answer on the second ring all day, then call a local shop and get a cell phone with a job site in the background. The comparison is unfair and it is happening anyway.",
      "An AI receptionist is how a four-person Bentonville business sounds like a company with a front desk, because functionally it has one. Consistent greeting, real qualification, a booked slot, and a confirmation text. The customer never files you under the second category.",
    ],
    workshopNote:
      "Northwest Arkansas sessions open as demand builds, or book a private on-site workshop in Bentonville for your team.",
    nearby: ["rogers", "springdale", "fayetteville", "siloam-springs"],
  },
  {
    name: "Bella Vista",
    slug: "bella-vista",
    region: "Northwest Arkansas",
    drive: "About 85 minutes from Fort Smith",
    economy:
      "A large retirement and second-home community built around lakes and golf courses, with home services, remodelers, lawn care, and healthcare providers serving an older and steadily growing population.",
    angle: [
      "Bella Vista is a home services town by design. Thousands of houses on wooded lots, an aging owner base that hires out the work it used to do, and a property owners association that sets the rhythm for a lot of it. The demand is stable. The problem is reaching it.",
      "The businesses that do well here are the ones that feel easy to deal with. Bella Vista customers ask more questions before they book, and they remember which company answered patiently. That is a front desk problem before it is a marketing problem.",
    ],
    phones: [
      "Bella Vista calls land in the middle of the day, not at midnight, and they are longer than average. A retired homeowner wants to describe the problem, ask what it might cost, and hear that somebody will actually show up. A rushed thirty-second call loses that job even when you win the price.",
      "This is the setup where patience is the feature. The receptionist can take the whole description, quote the range you approved, confirm the address on a private drive, and book a window instead of a time. Bella Vista owners usually set it to offer a live callback option too, because some of this customer base wants a person and there is no reason to fight that.",
    ],
    workshopNote:
      "Northwest Arkansas sessions open as demand builds. Bella Vista and Bentonville teams can also book a private on-site workshop, and we run NWA sessions closer to Rogers when there are enough seats.",
    nearby: ["bentonville", "rogers", "springdale", "siloam-springs"],
  },
  {
    name: "Siloam Springs",
    slug: "siloam-springs",
    region: "Northwest Arkansas",
    drive: "About 50 minutes from Fort Smith",
    economy:
      "John Brown University, light manufacturing, a revitalized downtown, and trades serving both northwest Arkansas and the Oklahoma border towns.",
    angle: [
      "Siloam Springs shops work two states. That means calls from a wider area than the office staff ever sees, and a lot of after-hours traffic from across the line. An AI front desk does not care which side of the border the call comes from.",
      "It is also a town where the owner is usually still on the tools. The businesses that grow past the owner are the ones that get the phone answered and the follow-up handled without the owner touching it.",
    ],
    phones: [
      "The border is the interesting part of a Siloam Springs phone. Half the callers are in Arkansas and half are in Oklahoma, and for most trades the answer to whether you go there depends on the town, the drive, and the size of the job. Staff get that wrong constantly.",
      "You can encode it once. The receptionist asks for the address first, checks it against the service area you defined, and either books it or declines it politely with a referral. Siloam Springs owners get back the twenty minutes a day they spend on calls they were never going to take.",
    ],
    workshopNote:
      "Northwest Arkansas sessions open as demand builds. Siloam Springs teams can also book a private on-site workshop, and Fort Smith public seats are about 50 minutes away.",
    nearby: ["springdale", "fayetteville", "rogers", "fort-smith"],
  },
  {
    name: "Russellville",
    slug: "russellville",
    region: "River Valley",
    drive: "About an hour from Fort Smith",
    economy:
      "Arkansas Tech University, Arkansas Nuclear One, manufacturing, and service businesses covering the middle of the River Valley along I-40.",
    angle: [
      "Russellville sits in the middle of everything, which means its service businesses cover big territory. Long drive times between jobs make the office phone even harder to staff, and make automated answering and scheduling pay back faster.",
      "The industrial and utility work here sets a high bar for reliability, and the local shops absorb that expectation. Systems that answer every call and log every follow-up fit how Russellville already likes to work.",
    ],
    phones: [
      "A Russellville service business spends a lot of its day on I-40. Dardanelle, Atkins, Pottsville, Clarksville, all of it is drive time, and drive time is exactly when the phone rings. Hands-free answering is not answering, because you cannot write down an address at 70 miles an hour.",
      "The receptionist takes the call you cannot take and gives it back to you as a job card with the address already in it. For Russellville the second win is routing: it can ask where the caller is and slot them into the day you are already driving, instead of sending you back across the county tomorrow.",
    ],
    workshopNote:
      "Fort Smith public workshops are about an hour west. Private on-site workshops in Russellville are available for teams and trade groups.",
    nearby: ["fort-smith", "conway", "searcy", "van-buren"],
  },
  {
    name: "Conway",
    slug: "conway",
    region: "Central Arkansas",
    drive: "About two hours from Fort Smith",
    economy:
      "Three colleges, insurance and data operations, retail along Harkrider and Oak, and some of the fastest-growing suburbs in central Arkansas.",
    angle: [
      "Conway keeps adding rooftops, and every rooftop needs HVAC, lawn care, fencing, and pest control. The trades that systemized their intake early are the ones compounding. The ones still running on the owner's phone are working harder for the same week.",
      "Conway also has a deep bench of office-heavy small businesses, clinics, agencies, and professional firms, where the win is not call answering but the retyping and scheduling between systems. That is workflow automation, and it is our bread and butter.",
    ],
    phones: [
      "Conway has a front desk problem that looks like a staffing problem. The colleges mean a steady supply of part-time office help, so businesses here do hire someone to answer, and then that person graduates or moves and the phone quality resets to zero every spring.",
      "An AI receptionist is the part of the front desk that does not turn over. It greets the same way in May as it did in September, holds your pricing ranges and your qualification questions, and lets the person you did hire spend the day on the work only a person can do.",
    ],
    workshopNote:
      "For central Arkansas teams we recommend a private on-site workshop in Conway, or the free 15-minute assessment followed by a scoped done-for-you build.",
    nearby: ["little-rock", "north-little-rock", "benton", "russellville"],
  },
  {
    name: "Little Rock",
    slug: "little-rock",
    region: "Central Arkansas",
    drive: "About two hours from Fort Smith",
    economy:
      "The state capital: government contractors, law firms, hospitals and clinics, banks, and a large market of home services covering the whole metro.",
    angle: [
      "Little Rock businesses compete with more noise than anywhere else in the state. When a homeowner searches for a roofer or a plaintiff searches for a lawyer, ten names come back. The one that answers first, follows up twice, and books the consult is usually the one that gets the job.",
      "We run done-for-you builds and embedded retainers across the metro. The typical Little Rock engagement starts with the operations audit, because the volume here makes the ROI math easy to show before anyone writes a big check.",
    ],
    phones: [
      "Little Rock is the most measurable market in the state, because the caller has ten options and uses them. Search intent here converts on speed to answer more than on price. A homeowner with a leak or a plaintiff with a deadline calls down the list, and the list is long.",
      "For firms and clinics the receptionist does more than answer. It runs intake: conflict-check questions for a law firm, insurance and reason-for-visit for a clinic, job type and address for a trade. The Little Rock version of this build is usually the one with the most qualification logic in it, because the volume justifies getting the screening right.",
    ],
    workshopNote:
      "For Little Rock we lead with the $999 operations audit or a private on-site workshop for your firm. Public workshop seats run in Fort Smith if you want the full-day experience.",
    nearby: ["north-little-rock", "benton", "conway", "searcy"],
  },
  {
    name: "North Little Rock",
    slug: "north-little-rock",
    region: "Central Arkansas",
    drive: "About two hours from Fort Smith",
    economy:
      "Logistics and industrial operations along the river, Argenta's restaurants and venues, and trades covering the north side of the metro.",
    angle: [
      "North Little Rock is where the metro's physical work happens. Warehouses, fleets, and industrial services all run on dispatch and follow-up, and most of it is still done by hand between a clipboard, a spreadsheet, and a phone.",
      "That is the cheapest kind of automation there is, because the steps never change. Capture the job once, route it once, and let the system do the chasing. We map it in the audit and build it in the tools you already pay for.",
    ],
    phones: [
      "The North Little Rock phone is a dispatch phone. Fleets, warehouses, and industrial services take calls that are less about selling and more about routing: which truck, which yard, how fast, and who authorizes it. The cost of a missed one is a stalled job, not a lost quote.",
      "A receptionist built for dispatch asks the routing questions in a fixed order, escalates the ones that stop work to a live phone, and logs the rest with a ticket number the customer can reference. It is a less glamorous build than a sales front desk, and usually a higher return one.",
    ],
    workshopNote:
      "Private on-site workshops work best here, paired with the operations audit for industrial and dispatch-heavy businesses.",
    nearby: ["little-rock", "conway", "benton", "searcy"],
  },
  {
    name: "Jacksonville",
    slug: "jacksonville",
    region: "Central Arkansas",
    drive: "About two and a quarter hours from Fort Smith",
    economy:
      "Little Rock Air Force Base and the community built around it, with rentals and property management, auto services, healthcare, and trades serving a population that turns over on military orders.",
    angle: [
      "Jacksonville turns over on a schedule most towns never see. Families arrive and leave on orders, which means a permanent supply of move-in repairs, rental turns, auto work, and first-time-customer calls from people with no local referral network.",
      "That is a market where being findable and reachable beats being established. A newly arrived family does not know who your grandfather was. They search, they call, and they hire whoever answers and can come this week.",
    ],
    phones: [
      "Almost every Jacksonville caller is a first-time customer with no idea who you are, so the first fifteen seconds of the call carry the whole decision. They are checking whether you sound legitimate, whether you take their insurance or their base housing situation, and whether you can come before the weekend.",
      "The receptionist answers that call consistently at any hour, which matters here because military schedules are not nine to five. It can also handle the two questions this town asks constantly, whether you serve base housing and whether you can work around a deployment or PCS timeline, without you repeating yourself forty times a month.",
    ],
    workshopNote:
      "Private on-site workshops in Jacksonville, or start with the free assessment. Little Rock and Cabot owners often join the same central Arkansas session.",
    nearby: ["cabot", "north-little-rock", "little-rock", "searcy"],
  },
  {
    name: "Cabot",
    slug: "cabot",
    region: "Central Arkansas",
    drive: "About two and a half hours from Fort Smith",
    economy:
      "A commuter town for Little Rock and the air base, with new residential construction, schools driving family growth, and home services, clinics, and retail scaled to a population that works somewhere else during the day.",
    angle: [
      "Cabot empties out on weekday mornings and fills back up after five. The customers are there, but they are not there when most offices are open, and that single fact shapes every service business in Lonoke County.",
      "The businesses winning in Cabot are the ones reachable in the evening and on Saturday. It is not a marketing edge so much as a scheduling one, and it is entirely fixable without asking anyone to work nights.",
    ],
    phones: [
      "The Cabot call comes at 6:40 PM. A commuter got home, found the water heater dead or the AC blowing warm, and started calling. Every office that closed at five is already out of the running, and by morning that homeowner has booked somebody.",
      "This is the clearest evening-coverage case in central Arkansas. The receptionist takes the 6:40 call, books it into tomorrow's route, and texts the confirmation before the homeowner has finished dinner. You have not extended anyone's hours and you have stopped losing the entire commuter window.",
    ],
    workshopNote:
      "Private on-site workshops in Cabot, or start with the free 15-minute assessment and a scoped build. Central Arkansas sessions cover Cabot, Jacksonville, and the north metro.",
    nearby: ["jacksonville", "searcy", "north-little-rock", "little-rock"],
  },
  {
    name: "Benton",
    slug: "benton",
    region: "Central Arkansas",
    drive: "About two hours from Fort Smith",
    economy:
      "Saline County's growth engine: new subdivisions, retail along I-30, healthcare offices, and home services expanding with the Little Rock commuter wave.",
    angle: [
      "Benton is building houses faster than its service businesses can answer the phone. Every new phase of a subdivision is a wave of HVAC, plumbing, and electrical calls, and the shops with automated intake book the wave. The rest get the overflow.",
      "For Benton owners the first fix is almost always the same: answer every call, confirm every quote follow-up, and let the owner stop being the dispatch desk. That is one build, not a department.",
    ],
    phones: [
      "New construction changes what the phone is for. A Benton trade shop fields warranty calls, punch list calls, builder calls, and homeowner calls, and they need completely different answers. Staff who cannot tell them apart give the builder the homeowner script and lose the account.",
      "The receptionist can separate them on the first question and route accordingly: builder work to your project manager, warranty to the log, homeowner emergencies to your on-call phone. Benton owners tend to build this one first because the sorting alone pays for it.",
    ],
    workshopNote:
      "Private on-site workshops in Benton, or start with the free assessment and a scoped build. Little Rock and Conway owners often join the same session.",
    nearby: ["bryant", "little-rock", "hot-springs", "north-little-rock"],
  },
  {
    name: "Bryant",
    slug: "bryant",
    region: "Central Arkansas",
    drive: "About two and a quarter hours from Fort Smith",
    economy:
      "Benton's fast-growing twin on I-30, with young families, heavy youth sports traffic, new retail and restaurants, and home services chasing subdivisions that did not exist five years ago.",
    angle: [
      "Bryant grew into a city while its service businesses were still run like they served a small town. The customer base is young, busy, and used to booking everything from a phone screen, which is a different buyer than the one most of these companies were built for.",
      "That gap is the whole opportunity here. The Bryant business that answers instantly, texts a confirmation, and shows up in the window it promised looks dramatically more professional than a competitor doing identical work.",
    ],
    phones: [
      "Bryant households are dual-income and scheduled to the minute. They call between practices and meetings, they will not sit on hold, and if they get voicemail they do not leave one, they just tap the next result. The call is over before you knew it started.",
      "Text is the other half of it. The receptionist answers, books, and then confirms by SMS, which is the channel this customer base actually reads. For Bryant we usually turn on the reminder and reschedule flow too, because a family that can move an appointment by text does not become a no-show.",
    ],
    workshopNote:
      "Private on-site workshops in Bryant and Benton, or start with the free assessment. Saline County teams often share a central Arkansas session.",
    nearby: ["benton", "little-rock", "hot-springs", "north-little-rock"],
  },
  {
    name: "Hot Springs",
    slug: "hot-springs",
    region: "Central Arkansas",
    drive: "About 90 minutes from Fort Smith",
    economy:
      "Tourism and hospitality around the national park and the lakes, restaurants and attractions, a large retirement community, and real estate and home services feeding both.",
    angle: [
      "Hot Springs runs on seasonality. When the phones spike in the spring and around race season, the businesses with automated answering catch the wave and the businesses without it hear about the customers they missed in July.",
      "The second Hot Springs pattern is the owner-operator with a thin office, property managers, tour operators, and trades, where one missed booking call is a real percentage of a weekend's revenue. That is exactly what an AI front desk is for.",
    ],
    phones: [
      "A Hot Springs phone has two settings and no dial in between. Off season it rings a few times a day. Race season and summer on the lake, it rings constantly and half the callers are from out of town asking questions a local would never ask. Staffing for the peak wastes money and staffing for the valley loses the peak.",
      "An AI receptionist is the only front desk that costs the same in February and in April. For lodging, tours, and lake-side property management it handles the availability question, the deposit question, and the where-exactly-are-you question all day, and hands you the ones that need a human.",
    ],
    workshopNote:
      "Private on-site workshops in Hot Springs, especially for hospitality and property management teams, or start with the free assessment.",
    nearby: ["benton", "bryant", "little-rock", "texarkana"],
  },
  {
    name: "Searcy",
    slug: "searcy",
    region: "Central Arkansas",
    drive: "About two and a half hours from Fort Smith",
    economy:
      "Harding University, manufacturing, healthcare, and trades serving White County and the surrounding farm country.",
    angle: [
      "Searcy businesses cover a lot of farm country, and the customers call when they call. An equipment dealer or a septic company cannot staff a front desk for a territory that wide, and they should not have to. The phone answering and the quote chase can run themselves.",
      "The honest pitch for Searcy is the audit first. The workflows here are usually simple and the ROI shows up fast, but we map it before we price it so nobody buys more system than the business needs.",
    ],
    phones: [
      "Searcy call volume is low enough that owners talk themselves out of fixing the phone. Six calls a day does not feel like a problem worth paying for. The number that matters is different: how many of the six came in while you were under a piece of equipment, and what the average job is worth.",
      "At White County job sizes, catching two or three missed calls a month covers the service outright. That is the honest version of the pitch, and it is why we recommend the assessment before the build here. If your six calls are already getting answered, we will tell you to keep your money.",
    ],
    workshopNote:
      "Start with the free assessment and the operations audit. Private on-site workshops in Searcy are available for teams of six or more.",
    nearby: ["cabot", "batesville", "conway", "jonesboro"],
  },
  {
    name: "Batesville",
    slug: "batesville",
    region: "North Central Arkansas",
    drive: "About three hours from Fort Smith",
    economy:
      "Lyon College, poultry and food processing, manufacturing along the White River, healthcare, and trades serving Independence County and a wide ring of smaller towns.",
    angle: [
      "Batesville is the town everyone around it drives to. That makes its service businesses regional by default, covering customers in a dozen small communities that have no plumber or no clinic of their own.",
      "Regional coverage from a small office is the recurring Batesville problem. The territory is bigger than the staff, and the phone is where that shows up first.",
    ],
    phones: [
      "The Batesville phone covers more map than the business does. Calls come from Newark, Cave City, Southside, and further, and the first real question on every one of them is whether you come out that far and what it costs to. Getting that wrong in either direction is expensive.",
      "You can set the rule once and let the receptionist enforce it: inside this radius book it, outside it quote the trip charge or refer it out. Batesville owners also use it to batch by direction, so the calls from one side of the county land on the same day instead of scattering across the week.",
    ],
    workshopNote:
      "Start with the free assessment and the operations audit. Private on-site workshops in Batesville are available for teams and trade groups.",
    nearby: ["searcy", "jonesboro", "paragould", "conway"],
  },
  {
    name: "Jonesboro",
    slug: "jonesboro",
    region: "Northeast Arkansas",
    drive: "About three hours from Fort Smith",
    economy:
      "The hub of northeast Arkansas: Arkansas State University, St. Bernards and NEA Baptist healthcare, agribusiness, and manufacturing along the Crowley's Ridge corridor.",
    angle: [
      "Jonesboro serves a trade area that stretches into Missouri and across the Delta. The clinics, contractors, and ag suppliers here cover huge territory, and the office cannot scale with the map. Automated intake and follow-up can.",
      "For Jonesboro we work mostly on retainer and scoped builds, with on-site working sessions scheduled in blocks. Distance is not the constraint it used to be, but we price on-site time honestly and tell you when remote is the right call.",
    ],
    phones: [
      "Jonesboro businesses answer for a region, not a city. A clinic takes calls from four counties, an ag supplier takes them from two states, and the person at the desk is making service-area and scheduling decisions all day with incomplete information.",
      "Encoding those decisions is the Jonesboro build. The receptionist knows the counties you cover, the equipment you stock, and which calls are worth the drive, and it applies that at 2 PM on a Tuesday exactly the way it does at 9 PM on a Sunday. The ag and healthcare versions of this look different, and we scope them separately.",
    ],
    workshopNote:
      "Jonesboro engagements usually start with the operations audit, then a scoped build with scheduled on-site sessions. Private workshops are available for larger teams.",
    nearby: ["paragould", "batesville", "west-memphis", "searcy"],
  },
  {
    name: "Paragould",
    slug: "paragould",
    region: "Northeast Arkansas",
    drive: "About three and a half hours from Fort Smith",
    economy:
      "Manufacturing and food processing, agriculture across Greene County, healthcare, and a base of family-owned trades and retail twenty minutes up the road from Jonesboro.",
    angle: [
      "Paragould businesses are mostly second and third generation, and they compete with Jonesboro for the same regional customers while carrying a fraction of the overhead. That is a real advantage right up until the phone goes unanswered.",
      "The owners here are pragmatic buyers. They want to know what it costs, what it replaces, and what happens when it breaks, in that order, before anyone talks about AI.",
    ],
    phones: [
      "A Paragould shop loses calls to Jonesboro without ever seeing it happen. A customer twenty minutes away calls you first because you are closer and cheaper, gets no answer, and calls the bigger company up the road. Nothing about that shows up in your numbers except a flat month.",
      "Answering every call is how a family shop keeps the proximity advantage it already earned. The receptionist does not need to be clever here. It needs to pick up, take the job, and text you, reliably, in a voice that does not sound like a call center in another state.",
    ],
    workshopNote:
      "Start with the free assessment or the $999 operations audit. Private on-site workshops in Paragould are available, often combined with a Jonesboro session.",
    nearby: ["jonesboro", "batesville", "west-memphis", "searcy"],
  },
  {
    name: "West Memphis",
    slug: "west-memphis",
    region: "East Arkansas and the Delta",
    drive: "About four hours from Fort Smith",
    economy:
      "One of the busiest freight crossroads in the country where I-40 and I-55 meet, with trucking and logistics, warehousing, auto and diesel service, and a local market that shares a metro with Memphis.",
    angle: [
      "West Memphis runs on freight and on the Tennessee line. Its service businesses compete inside a metro where the customer can just as easily cross the bridge, so being reachable and fast is not a nicety, it is the entire local advantage.",
      "The logistics businesses here already understand systems. They dispatch, they track, they measure. Automating intake and follow-up is a smaller leap in West Memphis than almost anywhere else in the state.",
    ],
    phones: [
      "Freight does not keep business hours. A diesel shop, a towing outfit, or a warehouse service in West Memphis takes calls at 3 AM from a driver who is stopped and losing money by the minute, and that caller will absolutely dial the next number on the list before the second ring finishes.",
      "The 24 hour case makes itself here. What matters is the triage: the receptionist separates a stopped truck from a routine scheduling call, wakes somebody up for the first, and books the second for morning. West Memphis owners usually also want it to capture the DOT or unit number on the first call, and it can.",
    ],
    workshopNote:
      "Start with the free assessment or the $999 operations audit. Private on-site workshops in West Memphis are available for teams and dispatch-heavy operations.",
    nearby: ["jonesboro", "paragould", "little-rock", "pine-bluff"],
  },
  {
    name: "Pine Bluff",
    slug: "pine-bluff",
    region: "South Arkansas",
    drive: "About three and a half hours from Fort Smith",
    economy:
      "Paper and chemical manufacturing, the Pine Bluff Arsenal, Jefferson Regional healthcare, the University of Arkansas at Pine Bluff, agriculture across the Delta, and long-standing family-owned trades and retail.",
    angle: [
      "Pine Bluff has fewer competitors per trade than the growth markets up the interstate, which cuts both ways. There is less pressure on price, and there are fewer second chances, because a customer who cannot reach anybody local starts looking toward Little Rock.",
      "The businesses that have lasted here did it on relationships and reliability. Automation that answers every call in your own voice extends that reputation instead of replacing it, which is the only version of this that works in Pine Bluff.",
    ],
    phones: [
      "In a market this size the same phone number has been in circulation for decades, and a lot of the callers know the family behind it. That is worth protecting. A generic answering service picking up in a stranger's voice does real damage to a business whose whole equity is that people know who answers.",
      "Which is why the voice and script work matters more here than the technology. The receptionist greets as your business, uses the names your customers expect, and hands off to a person on anything sensitive. For industrial and institutional accounts in Pine Bluff it also captures a PO or work order number up front, because those customers will ask for it later.",
    ],
    workshopNote:
      "Start with the free assessment or the $999 operations audit. Private on-site workshops in Pine Bluff are available for teams and trade groups.",
    nearby: ["little-rock", "el-dorado", "west-memphis", "benton"],
  },
  {
    name: "El Dorado",
    slug: "el-dorado",
    region: "South Arkansas",
    drive: "About three and a half hours from Fort Smith",
    economy:
      "Oil and chemical industry roots, Murphy USA's headquarters, timber, healthcare, and a downtown arts district that draws visitors into a market otherwise built on industrial employers.",
    angle: [
      "El Dorado is the most self-contained market on this list. The nearest metro is two hours in any direction, so local businesses serve local customers with very little leakage, and the competitive set is small and well known.",
      "Isolation makes response time the differentiator. When there are three companies that do what you do within an hour's drive, the one that picks up is not competing on marketing at all.",
    ],
    phones: [
      "With a short competitor list, an El Dorado caller who cannot reach you does something specific: they call the other two, and if none of you answer, they wait and call again tomorrow. You have not lost the job outright, you have delayed it and annoyed them, and you have taught them to call the other name first next time.",
      "The industrial side of the market changes the build. Contractors serving plant and timber accounts need the receptionist to capture site, contact, and authorization details up front, and to know which callers get escalated immediately because a line is down. That is a different script than a residential front desk, and we write it that way.",
    ],
    workshopNote:
      "Start with the free assessment or the $999 operations audit. Private on-site workshops in El Dorado are available for teams and trade groups.",
    nearby: ["pine-bluff", "texarkana", "hot-springs", "little-rock"],
  },
  {
    name: "Texarkana",
    slug: "texarkana",
    region: "Southwest Arkansas",
    drive: "About two and a half hours from Fort Smith",
    economy:
      "A bi-state economy: logistics and rail, manufacturing, healthcare, and service businesses covering two tax codes and one metro split down State Line Avenue.",
    angle: [
      "Texarkana businesses work two states at once, which doubles the quoting, scheduling, and follow-up load without doubling the office. Automation that captures a job once and routes it everywhere it needs to go is worth more here than almost anywhere.",
      "The logistics DNA of the town shows in how owners buy. They want to see the route before they commit. That is exactly what the operations audit hands you: the map, the numbers, and the build order.",
    ],
    phones: [
      "State Line Avenue makes every Texarkana call a routing decision. Which side is the address on, does that change your rate, your licensing, or your tax, and does the crew you were going to send cross over. Ask those questions out of order and you quote a job you cannot legally take.",
      "The receptionist asks for the address before anything else and branches from there, which sounds small and eliminates the single most common intake error in this market. Texarkana owners also use it to keep the two sides straight in the record, so the invoice and the tax treatment match what was actually promised on the phone.",
    ],
    workshopNote:
      "Start with the free assessment or the $999 operations audit. Private on-site workshops in Texarkana are available for teams and trade groups.",
    nearby: ["el-dorado", "hot-springs", "fort-smith", "pine-bluff"],
  },
];

export const regions = [
  { name: "River Valley", slugs: ["fort-smith", "van-buren", "russellville"] },
  {
    name: "Northwest Arkansas",
    slugs: ["fayetteville", "springdale", "rogers", "bentonville", "bella-vista", "siloam-springs"],
  },
  {
    name: "Central Arkansas",
    slugs: [
      "conway",
      "little-rock",
      "north-little-rock",
      "jacksonville",
      "cabot",
      "benton",
      "bryant",
      "hot-springs",
      "searcy",
    ],
  },
  {
    name: "Northeast Arkansas and the Delta",
    slugs: ["jonesboro", "paragould", "batesville", "west-memphis"],
  },
  { name: "South and Southwest Arkansas", slugs: ["texarkana", "el-dorado", "pine-bluff"] },
];

export function cityBySlug(slug: string): City {
  const c = cities.find((c) => c.slug === slug);
  if (!c) throw new Error(`Unknown city slug: ${slug}`);
  return c;
}
