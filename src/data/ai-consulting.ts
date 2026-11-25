/*
 * Regional "AI consulting" pages. Added 2026-11-25.
 *
 * Why these exist: the 2026-11-16 Phone Test reset retired every page that
 * used the words "AI consulting" and pointed /ai-consultant at the homepage.
 * Owners in Northwest Arkansas and the River Valley still type that phrase
 * when they look for help, so the site had nothing that answered it. These
 * pages answer the phrase without turning Arkansas Automated into a general
 * AI consultancy: every section ends at the free Phone Test and the published
 * price sheet.
 *
 * Copy rules match the rest of the site: plain, operator voice, no em or en
 * dashes, no claim without a source, no competitor named.
 */

export interface AiRegion {
  slug: string;
  /** Region name as an owner would type it. */
  name: string;
  /** Short form for headings and the title tag. */
  short: string;
  /** City slugs from src/data/cities.ts served in person in this region. */
  citySlugs: string[];
  /** One paragraph on why the phone is the first AI problem here. */
  local: string;
  /** Logistics line. */
  drive: string;
}

export const aiRegions: AiRegion[] = [
  {
    slug: "northwest-arkansas",
    name: "Northwest Arkansas",
    short: "NWA",
    citySlugs: ["fayetteville", "springdale", "rogers", "bentonville", "bella-vista", "siloam-springs"],
    local:
      "In Northwest Arkansas the crew is usually somewhere on I-49 between one job and the next, and the owner is the person who was supposed to pick up. Before any AI tool is worth buying, the calls and web forms that already come in have to get an answer. That is the first thing we measure.",
    drive: "On-site setup from Fort Smith, about an hour down I-49",
  },
  {
    slug: "river-valley",
    name: "Fort Smith and the River Valley",
    short: "Fort Smith",
    citySlugs: ["fort-smith", "van-buren", "russellville"],
    local:
      "Fort Smith is our home base. River Valley shops run lean, the owner answers between jobs, and a missed call on a hot afternoon goes to the next name on the map. Before any AI tool is worth buying, the calls and web forms that already come in have to get an answer. That is the first thing we measure.",
    drive: "Our home base. On-site setup across the River Valley",
  },
];

/** Shared FAQ. The region name is filled in per page. */
export function aiFaqs(region: AiRegion) {
  return [
    {
      q: `What does AI consulting cost for a small business in ${region.name}?`,
      a: "Ours is on the page. The Phone Test is free. The Front Door Setup is from $1,500 one time, Front Door Monthly is from $497 a month with no contract, and Ads are $3,000 a month flat, offered only once a shop scores 80 or higher. You get the setup price in writing before any work starts.",
    },
    {
      q: "Do I have to sit through a discovery call first?",
      a: "No. You send your business name, mobile number and town. We run the Phone Test over about three days and send you a score out of 100, your three biggest leaks with the clock times, and what they cost at your numbers. The 15 minute walkthrough after that is optional.",
    },
    {
      q: "Will an AI answer my phone?",
      a: "No. We do not run AI receptionists. Your office and your cell ring together first, and when a call or form is still missed, the system texts the customer back in your shop's name and follows up on day 1, 3 and 7.",
    },
    {
      q: "Can you help my business show up when someone asks ChatGPT for a contractor?",
      a: "That is part of the Phone Test. We check whether Google and ChatGPT name your business for your trade and town, and whether your website gives a crawler a real page for each service. You can run the free AI answer check yourself at arkansasautomated.com/answer-check.",
    },
    {
      q: "Do you train office staff on ChatGPT or work with schools and nonprofits?",
      a: "No. We work with home service businesses: plumbers, HVAC, electricians, roofers and landscapers. Schools, churches, nonprofits and staff training are better served by people who specialize in them, and there are good ones in Arkansas.",
    },
  ];
}
