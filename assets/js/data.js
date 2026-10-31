/* All numbers on the site come from this file.
   Sources: "Q4 plan 2026 - MP, GUJ, PUNE" deck and the MARCOM CALENDAR workbook.
   Money: Cr = crore, L = lakh. Edit here and the charts update. */

window.DATA = {
  q4: {
    target: 178.77, growth: 24.15, base: 144.0,
    channels: [
      { name: "Stores (13)", y1: 129.04, challenge: 154.75, growth: 19.9 },
      { name: "Digital", y1: 12.87, challenge: 15.77, growth: 22.5 },
      { name: "Wholesale", y1: 2.08, challenge: 8.25, growth: 296.0 }
    ],
    months: [
      { m: "October", growth: 13.9 },
      { m: "November", growth: 19.51 },
      { m: "December", growth: 24.09 }
    ]
  },

  // Commercial weekends, turnover in Cr
  weekends: [
    { name: "Dussehra", d26: "16-20 Oct", d25: "29 Sep-2 Oct", to25: 5.3, to26: 7.5, g: 40 },
    { name: "Diwali sale", d26: "31 Oct-1 Nov", d25: "10-12 Oct", to25: 4.7, to26: 5.5, g: 17 },
    { name: "Black Friday", d26: "27-30 Nov", d25: "28-30 Nov", to25: 9.8, to26: 12, g: 22.4 },
    { name: "EOY festive sale", d26: "18-25 Dec", d25: "17-25 Dec", to25: 17.7, to26: 20, g: 12.9 }
  ],

  // Q4 marketing mix, lakh
  funnel: [
    { stage: "Awareness", v: 92, pct: 58 },
    { stage: "Interest", v: 28, pct: 18 },
    { stage: "Conversion", v: 21, pct: 13 },
    { stage: "Loyalty", v: 18, pct: 11 }
  ],
  spendLines: [
    { name: "Hoardings, OOH and HIPOP", v: 24, okr: "Bills growth 15%" },
    { name: "Free products and IC", v: 13, okr: "Barter deals with practice places and event partners" },
    { name: "In-mall", v: 11, okr: "Mall-to-store conversion +0.5 pts" },
    { name: "Influencers", v: 11, okr: "20 mn views" },
    { name: "Store events", v: 8, okr: "Purchase frequency 1.38" },
    { name: "In-store communication", v: 3, okr: "Bills growth 15%" },
    { name: "In-store flyers", v: 2, okr: "Black Friday sale +25%" }
  ],
  spendTotals: { city: 93, marcom: 65, total: 158, share: 1.09, cityShare: 0.65, marcomShare: 0.45 },

  // Advertising spend by month, lakh (ultimate_data_sheet_1.xlsx, 26 Oct 2026, rows 125-175).
  // 2026: Jan-Sep realised, Oct-Dec = Q4 plan from the state line tables. 2027 = plan (rows 132-134),
  // which the sheet splits into lines at a fixed share every month (split27).
  spend: {
    months: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    Pune: { y26: [24.07, 8.74, 22.75, 26.57, 25.18, 30.26, 23.42, 22.47, 19.7, 25.3, 38.99, 23.11], y27: [28.74, 22.68, 28.97, 32.21, 37.55, 33.78, 36.43, 29.77, 22.14, 22.84, 34.1, 36.14] },
    Gujarat: { y26: [20.24, 14.73, 28.75, 33.33, 30.87, 24.42, 24.73, 12.98, 23.82, 19.95, 26.83, 31.65], y27: [22.54, 15.66, 21.34, 24.44, 28.79, 24.1, 23.14, 22.02, 12.79, 16.88, 23.53, 25.33] },
    MP: { y26: [2.87, 2.22, 0.54, 2.81, 2.86, 2.38, 2.48, 1.92, 7.1, 6.8, 9.87, 11.09], y27: [11.92, 8.04, 8.55, 9.7, 10.36, 10.42, 10.5, 9.59, 7.29, 9.57, 11.03, 13.07] },
    split27: [["Digital paid (MarCom)", 30], ["Hoardings, OOH, HIPOP and AOP", 30], ["In-store communication", 20], ["In-mall", 5], ["Store events", 5], ["Influencers", 5], ["Free products and IC", 3], ["Flyers", 2]]
  },

  // Omni turnover by month, 2026, Cr (Master Data sheet)
  omni: {
    total: [21.09,16.72,21.63,23.88,27.94,25.47,27.05,22.30,18.72,21.85,29.47,30.38],
    growth: [13.7,9.2,-2.0,13.1,18.1,9.2,23.3,13.5,12.7,28.2,7.9,12.6],
    outstore: [1.57,1.75,1.89,2.00,2.04,2.26,2.91,2.29,2.86,3.61,3.79,4.77],
    outGrowth: [-9.2,25.3,-21.9,27.2,24.7,29.2,55.8,35.3,63.8,185.3,67.4,85.5]
  },

  // Pune city top sports, 2027 plan, Cr per month (Pune COMM Calendar rows 98-102)
  puneSports: [
    { sport: "Hiking & trekking", v: [0.76,0.53,0.55,0.48,0.52,0.67,0.86,0.80,0.59,0.92,0.71,0.99], total: 8.39 },
    { sport: "Fitness", v: [0.88,0.58,0.61,0.56,0.61,0.57,0.49,0.50,0.49,0.70,0.60,0.69], total: 7.28 },
    { sport: "Supporting + urban", v: [0.22,0.23,0.35,0.46,0.68,0.36,0.25,0.24,0.27,0.56,0.46,0.49], total: 4.57 },
    { sport: "Running", v: [0.37,0.29,0.29,0.26,0.28,0.27,0.25,0.26,0.25,0.34,0.28,0.30], total: 3.43 },
    { sport: "Racket", v: [0.22,0.31,0.25,0.24,0.26,0.23,0.20,0.20,0.20,0.28,0.25,0.28], total: 2.92 }
  ],
  puneSportOfMonth: ["Fitness","Camping","Pickleball","Cricket + roller","Swimming","Football","Cycling","Badminton","Water sports","Running","Trekking","Trekking"],

  // Share of Pune city turnover. The sheet's per-store 2027 budget totals repeat channel-line
  // values (Wakad = in-mall, SGS = flyers, Wagholi = free products), so they are left out.
  puneStores: [
    { store: "Wakad", share: 40.9 },
    { store: "SGS Mall", share: 18.8 },
    { store: "Wagholi", share: 17.5 },
    { store: "Amanora", share: 14.4 },
    { store: "NIBM", share: 8.5 }
  ],

  budget2027: {
    total: 56,
    lines: [
      { name: "Hoardings", pct: 35, why: "Catch road traffic with seasonal campaigns.", how: ["4 hoardings, only for commercial campaigns", "Keep every creative seasonal"] },
      { name: "Influencers", pct: 25, why: "Local creators pull in footfall from shoppers who came to buy, which converts easily and lifts ABV.", how: ["21 influencer campaigns done", "YTD CPV 0.08", "Q4: 12 weeks, 12 influencers", "40.3 lakh impressions, 63.7K interactions YTD"] },
      { name: "Practice tie-ups", pct: 25, why: "Make Decathlon the name every regular player knows.", how: ["15+ premium facilities onboarded", "Team sports, racket and swimming lead", "If they pay to play, they will shop to play"] },
      { name: "Local events", pct: 10, why: "Keep Decathlon culture alive with sportspeople and kids.", how: ["Activations all year", "Major events through Decathlon Play", "Partnered events only"] },
      { name: "WhatsApp, PN, RCS", pct: 5, why: "Bring existing customers back more often.", how: ["Targeted WhatsApp, push and RCS campaigns", "Commercial and brand support"] }
    ]
  },

  kiprun: [
    { n: "7", l: "running clubs engaged" },
    { n: "700", l: "runners at the launch" },
    { n: "11", l: "community runs" },
    { n: "10", l: "bib distributions with 5 Kiprun stalls" },
    { n: "45", l: "influencer videos" },
    { n: "4", l: "marathons with launch integration" },
    { n: "2,000", l: "Santa Run runners" }
  ],

  ipEvents: [
    { name: "New Year, New Moves", when: "Jan", goal: 25000 },
    { name: "Beach Day", when: "Feb", goal: 10000 },
    { name: "Women's Day", when: "Mar", goal: 15000 },
    { name: "Summer Camp", when: "Apr-Jun", goal: 5000 },
    { name: "Sports Utsav", when: "May", goal: 200000 },
    { name: "Yoga Day", when: "Jun", goal: 10000 },
    { name: "Mountain Day", when: "Aug", goal: 5000 },
    { name: "Sports Utsav Jr", when: "Nov", goal: 50000 }
  ],

  // Q1 2027 holidays and moments by market. t: holiday | festival | sport | moment | exams.
  // approx: date estimated (source lists for 2027 are provisional). Checked 27 Oct 2026; see context.md.
  holidaysQ1: [
    { d: "2027-01-01", name: "New Year", r: ["Pune","Gujarat","MP"], t: "moment", use: "New Year, New Moves: resolution kits and fitness starters" },
    { d: "2027-01-14", name: "Makar Sankranti: til-gul and haldi-kunku", r: ["Pune"], t: "festival", use: "Women's get-togethers: yoga and walking edits" },
    { d: "2027-01-14", e: "2027-01-15", name: "Uttarayan and Vasi Uttarayan", r: ["Gujarat"], t: "holiday", use: "Two days on the terrace: caps, sunglasses, sunscreen, family games" },
    { d: "2027-01-14", e: "2027-01-16", name: "International Kite Festival, Ahmedabad", r: ["Gujarat"], t: "festival", approx: true, use: "Riverfront crowds near Motera and Nexus" },
    { d: "2027-01-14", name: "Makar Sankranti", r: ["MP"], t: "festival", use: "Kite flying and fairs: outdoor family kit" },
    { d: "2027-01-10", e: "2027-01-31", name: "Khelo MP Youth Games", r: ["MP"], t: "sport", approx: true, use: "28 sports, players from every block: team kits and academies" },
    { d: "2027-01-20", e: "2027-01-26", name: "Republic Day sale", r: ["Pune","Gujarat","MP"], t: "moment", use: "Commercial weekend ending on the 26th" },
    { d: "2027-01-26", name: "Republic Day", r: ["Pune","Gujarat","MP"], t: "holiday", use: "Tuesday holiday: long-weekend outings" },
    { d: "2027-01-26", e: "2027-01-31", name: "Bajaj Pune Grand Tour (UCI cycling)", r: ["Pune"], t: "sport", use: "Six stages on Pune roads: cycling push at all five stores" },
    { d: "2027-01-31", name: "Vadodara International Marathon", r: ["Gujarat"], t: "sport", use: "1.1 lakh registrations: Kiprun bib pick-ups at Baroda" },
    { d: "2027-02-01", e: "2027-02-28", name: "Rann Utsav season ends", r: ["Gujarat"], t: "festival", approx: true, use: "Kutch travel: last weeks of the winter travel edit" },
    { d: "2027-02-07", name: "Indore Marathon", r: ["MP"], t: "sport", approx: true, use: "First Sunday of February: running kit and bibs at Indore" },
    { d: "2027-02-14", name: "Valentine's Day", r: ["Pune","Gujarat","MP"], t: "moment", use: "Couples who train together: gifting" },
    { d: "2027-02-15", e: "2027-03-31", name: "Board exams (CBSE and state boards)", r: ["Pune","Gujarat","MP"], t: "exams", approx: true, use: "Kids' sport dips; sell summer camps for after the last paper" },
    { d: "2027-02-19", name: "Chhatrapati Shivaji Maharaj Jayanti", r: ["Pune"], t: "holiday", use: "Friday long weekend: fort treks at Sinhagad and Rajgad" },
    { d: "2027-02-20", name: "Sant Ravidas Jayanti", r: ["MP"], t: "holiday", use: "State holiday" },
    { d: "2027-02-20", e: "2027-02-26", name: "Khajuraho Dance Festival", r: ["MP"], t: "festival", approx: true, use: "Tourism week: travel and walking kit" },
    { d: "2027-02-27", name: "Marathi Bhasha Din", r: ["Pune"], t: "moment", use: "Marathi-first posts and in-store signage" },
    { d: "2027-03-06", name: "Maha Shivratri", r: ["Pune","Gujarat","MP"], t: "holiday", use: "Saturday holiday (some calendars say 5 Mar)" },
    { d: "2027-03-08", name: "Women's Day", r: ["Pune","Gujarat","MP"], t: "moment", use: "Women's Sport Month finale: runs and store events" },
    { d: "2027-03-10", name: "Eid al-Fitr", r: ["Pune","Gujarat","MP"], t: "holiday", approx: true, use: "Depends on the moon; family shopping day" },
    { d: "2027-03-14", e: "2027-03-21", name: "Bhagoria (Jhabua, Alirajpur, Dhar)", r: ["MP"], t: "festival", approx: true, use: "Tribal fairs the week before Holi" },
    { d: "2027-03-14", name: "IPL season starts (to end May)", r: ["Pune","Gujarat","MP"], t: "sport", approx: true, use: "Cricket month: box cricket and kit; Gujarat Titans play at home in Ahmedabad" },
    { d: "2027-03-21", e: "2027-03-22", name: "Holika Dahan and Holi / Dhuleti", r: ["Pune","Gujarat","MP"], t: "holiday", use: "Monday holiday: long weekend" },
    { d: "2027-03-26", name: "Rang Panchami", r: ["Pune"], t: "festival", use: "Second colour day in Maharashtra" },
    { d: "2027-03-26", name: "Rang Panchami: Indore's Gair procession", r: ["MP"], t: "festival", use: "The city's biggest street crowd, near our Indore store" },
    { d: "2027-03-26", e: "2027-03-28", name: "Good Friday to Easter", r: ["Pune","Gujarat","MP"], t: "holiday", use: "Long weekend: travel and trek kit" }
  ]
};

/* The runway: August 2026 to March 2027. Dates are [start, end] as YYYY-MM-DD. */
window.RUNWAY = {
  start: "2026-08-01", end: "2027-03-31", focusStart: "2026-10-01", focusEnd: "2026-12-31",
  lanes: [
    { name: "National campaigns", items: [
      { t: "Sale", s: "2026-08-03", e: "2026-08-28", k: "sale", approx: true },
      { t: "New arrivals", s: "2026-09-02", e: "2026-09-28", k: "nat", approx: true },
      { t: "Winter Travel campaign", s: "2026-10-15", e: "2027-01-30", k: "nat", star: true },
      { t: "Travel", s: "2026-10-15", e: "2026-12-31", k: "nat" },
      { t: "Footwear phase 4", s: "2026-10-01", e: "2027-01-25", k: "nat", approx: true },
      { t: "Kiprun launch India", s: "2026-10-01", e: "2026-11-30", k: "nat", approx: true },
      { t: "MH500 backpack", s: "2026-11-01", e: "2026-11-30", k: "nat", approx: true },
      { t: "Fitness: Movement for All", s: "2027-01-01", e: "2027-01-31", k: "nat", approx: true },
      { t: "New arrivals", s: "2027-02-01", e: "2027-03-31", k: "nat", approx: true },
      { t: "Footwear", s: "2027-02-01", e: "2027-03-31", k: "nat", approx: true }
    ]},
    { name: "Sport of the month", items: [
      { t: "Running", s: "2026-10-01", e: "2026-10-31", k: "sport" },
      { t: "Climbing, trekking", s: "2026-11-01", e: "2026-11-30", k: "sport" },
      { t: "Trekking", s: "2026-12-01", e: "2026-12-31", k: "sport" }
    ]},
    { name: "Commercial weekends and sales", items: [
      { t: "Dussehra", s: "2026-10-16", e: "2026-10-20", k: "sale", note: "7.5 Cr" },
      { t: "Diwali sale", s: "2026-10-31", e: "2026-11-01", k: "sale", note: "5.5 Cr" },
      { t: "Black Friday", s: "2026-11-27", e: "2026-11-30", k: "sale", star: true, note: "12 Cr" },
      { t: "Christmas sale", s: "2026-12-19", e: "2026-12-31", k: "sale" },
      { t: "Republic Day sale", s: "2027-01-20", e: "2027-01-26", k: "sale" },
      { t: "Sale campaign", s: "2027-02-01", e: "2027-02-28", k: "sale", approx: true },
      { t: "Women's Day", s: "2027-03-01", e: "2027-03-08", k: "sale" }
    ]},
    { name: "Gifting and community", items: [
      { t: "Navratri, Dussehra", s: "2026-10-11", e: "2026-10-20", k: "local", approx: true },
      { t: "Kiprun community run", s: "2026-10-18", e: "2026-10-18", k: "local", star: true },
      { t: "Kids festival", s: "2026-10-31", e: "2026-11-02", k: "local" },
      { t: "Sports Utsav Jr: skating workshop", s: "2026-10-31", e: "2026-10-31", k: "local" },
      { t: "Diwali: Gift a Sport", s: "2026-11-01", e: "2026-11-30", k: "local", approx: true },
      { t: "Children's Day: back-to-school colouring books", s: "2026-11-14", e: "2026-11-14", k: "local", star: true },
      { t: "Decathlon CSR initiatives", s: "2026-11-01", e: "2026-11-30", k: "local", approx: true },
      { t: "Christmas: Gift a Sport", s: "2026-12-01", e: "2026-12-31", k: "local", approx: true },
      { t: "Adajan, Surat: grand launch 27 Dec", s: "2026-12-01", e: "2027-01-01", k: "open", star: true },
      { t: "Uttarayan", s: "2027-01-14", e: "2027-01-15", k: "local" },
      { t: "Summer launch", s: "2027-03-01", e: "2027-03-31", k: "local", approx: true },
      { t: "Holi", s: "2027-03-15", e: "2027-03-22", k: "local" }
    ]},
    { name: "External sports events", items: [
      { t: "Khel Mahakumbh, Gujarat: 76 lakh players", s: "2026-10-09", e: "2026-12-31", k: "ext", approx: true },
      { t: "HYROX", s: "2026-11-27", e: "2026-11-29", k: "ext" },
      { t: "Adani Ahmedabad Marathon", s: "2026-11-29", e: "2026-11-29", k: "ext", star: true },
      { t: "Pune International Marathon", s: "2026-12-06", e: "2026-12-06", k: "ext", approx: true },
      { t: "Bajaj Pune Marathon", s: "2026-12-13", e: "2026-12-13", k: "ext", approx: true },
      { t: "Khelo MP Youth Games", s: "2027-01-10", e: "2027-01-31", k: "ext", approx: true },
      { t: "Bajaj Pune Grand Tour (UCI cycling)", s: "2027-01-26", e: "2027-01-31", k: "ext", star: true },
      { t: "Vadodara Marathon: 1.1 lakh", s: "2027-01-31", e: "2027-01-31", k: "ext" },
      { t: "Indore Marathon", s: "2027-02-07", e: "2027-02-07", k: "ext", approx: true }
    ]},
    { name: "Hoardings, influencers and AOPs", items: [
      { t: "Pune: 7 hoardings live", s: "2026-10-10", e: "2026-12-31", k: "ooh", star: true },
      { t: "Gujarat and Bhopal: 11 hoardings live", s: "2026-11-01", e: "2026-12-31", k: "ooh" },
      { t: "Influencers: Pune 70, Gujarat 40, MP 40", s: "2026-10-01", e: "2027-02-28", k: "ooh", approx: true },
      { t: "50 influencer videos, 5M views", s: "2027-01-01", e: "2027-03-31", k: "ooh", approx: true },
      // Q4 target from AOP_PLAN (Nov + Dec per store): Pune 49, Gujarat 40, MP 25
      { t: "New AOPs, Nov-Dec: 114 (Pune 49, Gujarat 40, MP 25)", s: "2026-11-01", e: "2026-12-31", k: "ooh" }
    ]}
  ]
};

/* Strategy toolkit: what each tactic gives (team's strategy sheet). marcom = run centrally by MarCom. */
window.TOOLKIT = [
  { s: "Society activations", gives: "New user growth, indirect walk-ins with a bait", word: "Growth", benefit: "Walk-ins" },
  { s: "Running / cycling events bib collection", gives: "Good awareness, connects with youth (18-28)", word: "Youth", benefit: "Awareness" },
  { s: "School activation", gives: "Family and kids growth, direct turnover with moms, higher ABV", word: "Families", benefit: "Turnover" },
  { s: "Women-centric events", gives: "Women bring family and friends, so bigger basket", word: "Basket value", benefit: "Turnover" },
  { s: "Influencers", gives: "Fast reach, credibility, new audience trials", word: "Reach", benefit: "Awareness + walk-ins" },
  { s: "Cleanup drives and NGO events", gives: "Local goodwill, trust, PR and content value", word: "Goodwill", benefit: "Reputation" },
  { s: "Playground events at stores", gives: "Direct footfall", word: "Footfall", benefit: "Walk-ins" },
  { s: "Playground occupancy increase", gives: "Repeat visits, longer dwell time, family purchases", word: "Habit", benefit: "Retention" },
  { s: "Hoardings", gives: "Visibility near the store, hard to measure", word: "Visibility", benefit: "Awareness" },
  { s: "Metro wrap", gives: "Daily commuter reach, city-level presence", word: "Presence", benefit: "Awareness" },
  { s: "Social media content of teammates", gives: "Authentic, trusted, humanises the store, low cost", word: "Trust", benefit: "Engagement" },
  { s: "Brand content (content of us)", gives: "Awareness, storytelling, product education, fuels ads and influencers", word: "Awareness", benefit: "Awareness + community" },
  { s: "Meta ads", gives: "Targeted reach by area and age, trackable leads", word: "Targeting", benefit: "Direct revenue", marcom: true },
  { s: "AOP hoarding at a sports partner academy", gives: "Sporty audience, players and parents, high relevance", word: "Relevance", benefit: "Awareness" },
  { s: "In-store events", gives: "Direct footfall and conversion, community building", word: "Conversion", benefit: "Engagement" },
  { s: "WhatsApp / CRM broadcasts to existing customers", gives: "Repeat purchase, cheapest way to bring people back", word: "Retention", benefit: "Retention", marcom: true },
  { s: "Google Business Profile and local search ads", gives: "Catches people already searching “sports store near me”", word: "Intent", benefit: "Direct revenue", marcom: true },
  { s: "Corporate and office tie-ups", gives: "Employee wellness events, bulk and B2B orders", word: "Walk-ins", benefit: "Turnover" },
  { s: "College and campus activations", gives: "Young buyers, sports clubs, event footfall", word: "Awareness", benefit: "Young users" },
  { s: "Gym, yoga studio and sports club tie-ups", gives: "Active audience, referral walk-ins", word: "Referrals", benefit: "Walk-ins" },
  { s: "Free workshops and coaching", gives: "Bike repair, fitness and beginner sports: skills, trust, repeat visits", word: "Community", benefit: "Engagement" },
  { s: "Local tournaments and leagues at the store", gives: "Footfall, team bulk buying, content", word: "Teams", benefit: "Engagement + walk-ins" },
  { s: "Referral and loyalty offers", gives: "Word of mouth, new users through existing ones", word: "Advocacy", benefit: "Acquisition" },
  { s: "Mall pop-ups", gives: "Reach in high-footfall spots outside the store", word: "Exposure", benefit: "Awareness + walk-ins" },
  { s: "Local athlete or coach as ambassador", gives: "Credibility in the city, strong content", word: "Credibility", benefit: "Awareness" },
  { s: "In-store visual merchandising", gives: "Conversion", word: "Festive", benefit: "Conversion" }
];

/* Who buys: team's strategy sheet. */
window.SHOPPERS = { men: { share: 70, growth: 5 }, women: { share: 30, growth: 11 } };

/* Per-city mediums that are confirmed in the deck or sheets. AOP mix per store from the AOPs 2027 slide (Pune 5, Gujarat 10, MP 5). */
window.CITY_MEDIUMS = {
  Pune: { hoardings: 5, metro: true, influencers: "Pune pool of 70", aop: { travel: 1, gym: 1, yoga: 1, racket: 2 } },
  Ahmedabad: { hoardings: 2, metro: true, influencers: "Gujarat pool of 40", aop: { travel: 2, gym: 3, yoga: 2, racket: 3 } },
  Vadodara: { hoardings: 4, metro: false, influencers: "Gujarat pool of 40", aop: { travel: 2, gym: 3, yoga: 2, racket: 3 } },
  Surat: { hoardings: 3, metro: false, influencers: "Gujarat pool of 40", aop: { travel: 2, gym: 3, yoga: 2, racket: 3 } },
  Rajkot: { hoardings: 1, metro: false, influencers: "Gujarat pool of 40", aop: { travel: 2, gym: 3, yoga: 2, racket: 3 } },
  Indore: { hoardings: 0, metro: false, influencers: "MP pool of 40", aop: { travel: 1, gym: 1, yoga: 1, racket: 2 } },
  Bhopal: { hoardings: 1, metro: false, influencers: "MP pool of 40", aop: { travel: 1, gym: 1, yoga: 1, racket: 2 } },
  Gwalior: { hoardings: 0, metro: false, influencers: "MP pool of 40", aop: { travel: 1, gym: 1, yoga: 1, racket: 2 } }
};

/* Store or city specific moments that the sheets and deck confirm. */
window.STORE_MOMENTS = {
  Gujarat: ["Navratri and Dussehra in October", "Uttarayan, 14-15 Jan", "IPL starts 14 Mar"],
  Ahmedabad: ["Adani Marathon, 29 Nov", "Metro stations are on the Sport is Everywhere QR-wall list"],
  Surat: ["New store at Adajan: grand launch 27 Dec", "Beach Fest with 5k participants in Q1", "2x marketing spend in Q1"],
  Pune: ["Metro stations are on the Sport is Everywhere QR-wall list", "Shivaji Maharaj Jayanti long weekend, 19 Feb"],
  MP: ["Sant Ravidas Jayanti, 20 Feb"],
  Bhopal: ["Bhopal hoardings run Nov to Jan (2026 update)"]
};

/* 2027 year planner lanes. Months are 0 = Jan … 11 = Dec, items span [a, b]. */
window.PLANNER = {
  months: ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],
  lanes: [
    { name: "Holidays and moments", items: [
      { t: "Uttarayan 14 Jan\nRepublic Day 26 Jan", a: 0, b: 0, k: "hol" }, { t: "Valentine's Day 14 Feb\nShivaji Jayanti 19 Feb", a: 1, b: 1, k: "hol" },
      { t: "Women's Day 8 Mar\nHoli 22 Mar", a: 2, b: 2, k: "hol" }, { t: "Gudi Padwa 8 Apr", a: 3, b: 3, k: "hol" }, { t: "Maharashtra Day 1 May", a: 4, b: 4, k: "hol" },
      { t: "Yoga Day 21 Jun", a: 5, b: 5, k: "hol" }, { t: "Ashadhi Ekadashi\n(Wari) 13 Jul", a: 6, b: 6, k: "hol" }, { t: "Independence Day 15 Aug", a: 7, b: 7, k: "hol" },
      { t: "Ganesh Chaturthi 3 Sep\nNavratri from 30 Sep", a: 8, b: 8, k: "hol" }, { t: "Dussehra 9 Oct\nDiwali 29 Oct", a: 9, b: 9, k: "hol" },
      { t: "Children's Day 14 Nov\nBlack Friday 26 Nov", a: 10, b: 10, k: "hol" }, { t: "Christmas 25 Dec\nNew Year's Eve 31 Dec", a: 11, b: 11, k: "hol" }
    ]},
    { name: "Season", items: [
      { t: "Winter", a: 0, b: 0, k: "season" }, { t: "Summer + summer camp", a: 2, b: 4, k: "season" },
      { t: "Monsoon & back to school", a: 5, b: 8, k: "season" }, { t: "Winter & travel", a: 9, b: 11, k: "season" } ] },
    { name: "Country campaigns", items: [
      { t: "Republic Day, MII", a: 0, b: 0, k: "nat" }, { t: "New arrivals: shoes 1", a: 1, b: 2, k: "nat" },
      { t: "Valentine's Day", a: 1, b: 1, k: "nat" }, { t: "Holi", a: 2, b: 2, k: "nat" },
      { t: "Ugadi, Gudi Padwa", a: 3, b: 3, k: "nat" }, { t: "Shoes phase 2", a: 3, b: 3, k: "nat" },
      { t: "Shoes phase 3", a: 6, b: 6, k: "nat" }, { t: "Independence Day, MII", a: 7, b: 7, k: "nat" },
      { t: "National Sports Day", a: 7, b: 7, k: "nat" }, { t: "New arrivals", a: 8, b: 8, k: "nat" },
      { t: "Shoes phase 4", a: 9, b: 9, k: "nat" }, { t: "Dussehra: Gift a Sport", a: 9, b: 9, k: "nat" } ] },
    { name: "Hero ranges", items: [
      { t: "SS hero and iconic", a: 0, b: 5, k: "tech" }, { t: "AW hero and iconic", a: 6, b: 11, k: "tech" } ] },
    { name: "Sport ecosystem and wellbeing", items: [
      { t: "Cycling / running", a: 0, b: 1, k: "eco" }, { t: "Movement for All", a: 0, b: 0, k: "eco", star: true },
      { t: "Women's Day", a: 2, b: 2, k: "eco" }, { t: "Circular Bazaar", a: 5, b: 5, k: "eco" },
      { t: "Fitness", a: 6, b: 7, k: "eco" }, { t: "Cycling / running", a: 9, b: 10, k: "eco" },
      { t: "Mental Health Day", a: 9, b: 9, k: "eco" }, { t: "Children's Day", a: 10, b: 10, k: "eco" } ] },
    { name: "Event IP", items: [
      { t: "New Year, New Moves", a: 0, b: 0, k: "evt" }, { t: "Beach Day, Surat", a: 1, b: 1, k: "evt", star: true },
      { t: "Women's Day", a: 2, b: 2, k: "evt", star: true }, { t: "Summer Camp", a: 3, b: 3, k: "evt", star: true },
      { t: "Sports Utsav", a: 4, b: 4, k: "evt" }, { t: "Yoga Day", a: 5, b: 5, k: "evt" },
      { t: "Mountain Days", a: 7, b: 7, k: "evt" }, { t: "Kids Carnival", a: 10, b: 10, k: "evt" } ] },
    { name: "Commercial", items: [
      { t: "Clearance sale", a: 0, b: 0, k: "sale", star: true }, { t: "51st anniversary", a: 6, b: 6, k: "sale" },
      { t: "Clearance sale", a: 7, b: 7, k: "sale", star: true }, { t: "Diwali sale (optional)", a: 9, b: 9, k: "sale" },
      { t: "Black Friday, 26-29 Nov", a: 10, b: 10, k: "sale" }, { t: "Christmas sale (optional)", a: 11, b: 11, k: "sale" } ] },
    { name: "Product launch", items: [
      { t: "TBD", a: 0, b: 1, k: "tbd" }, { t: "Kiprun Challenger, ₹9,999", a: 2, b: 4, k: "launch" }, { t: "TBD", a: 7, b: 8, k: "tbd" } ] },
    { name: "Pune cultural moments", items: [
      { t: "Holi, 22 Mar", a: 2, b: 2, k: "local" }, { t: "Maharashtra Day", a: 4, b: 4, k: "local" },
      { t: "Wari", a: 6, b: 6, k: "local" }, { t: "Ganesh Chaturthi", a: 8, b: 8, k: "local" }, { t: "Navratri", a: 9, b: 9, k: "local" } ] }
  ]
};

/* Month-by-month Pune 2027 plan, straight from the MARCOM CALENDAR workbook. */
window.PLAN_DETAIL = {
 "seasonality": [
  "LOW SEASON",
  "LOW SEASON",
  "RISING SEASON",
  "RISING SEASON",
  "PEAK SEASON",
  "SUSTAINED SEASON",
  "SUSTAINED SEASON",
  "LOW SEASON",
  "LOW SEASON",
  "RISING SEASON",
  "PEAK SEASON",
  "PEAK SEASON"
 ],
 "weather": [
  "Winter",
  "",
  "Summer",
  "Summer",
  "Summer",
  "Summer",
  "Monsoon",
  "Monsoon",
  "Monsoon",
  "Spring",
  "Winter",
  "Winter"
 ],
 "compPresence": [
  "PUMA: Running/Training\nadidas: Running/Originals\nNike: Performance/Running\nShakti: Multi-sport\nASICS: Running\nGully Labs: Sneakers/Culture",
  "PUMA: Lifestyle/Fitness\nadidas: Originals\nNike: Women/Running\nShakti: Fitness\nASICS: Running\nGully Labs: Lifestyle",
  "PUMA: Cricket/RCB\nadidas: Cricket/Football\nNike: Football/Running\nShakti: Cricket/Racket sports\nASICS: Running\nGully Labs: Culture/Sneakers",
  "PUMA: Cricket/Summer\nadidas: Cricket/Summer\nNike: Outdoor/Running\nShakti: Cricket/Outdoor\nASICS: Running\nGully Labs: Lifestyle",
  "PUMA: Training/Summer\nadidas: Running/Lifestyle\nNike: Training/Running\nShakti: Fitness/Swimming\nASICS: Running\nGully Labs: Lifestyle",
  "PUMA: Football/Running\nadidas: Football\nNike: Football/Running\nShakti: Football/Racket sports\nASICS: Running\nGully Labs: Culture",
  "PUMA: Running/Monsoon\nadidas: Running/Training\nNike: Running/Outdoor\nShakti: Indoor Fitness\nASICS: Running\nGully Labs: Lifestyle",
  "PUMA: Sport/Youth\nadidas: Performance\nNike: Athlete-led\nShakti: Multi-sport\nASICS: Running\nGully Labs: Indian Culture",
  "PUMA: New Drops\nadidas: New Product\nNike: Innovation\nShakti: New Equipment\nASICS: New Running\nGully Labs: Sneaker Drops",
  "PUMA: Festive/Lifestyle\nadidas: Originals/Festive\nNike: Lifestyle\nShakti: Family Sports\nASICS: Running\nGully Labs: Culture/Festive",
  "PUMA: Sale/Offers\nadidas: Sale/Offers\nNike: Selective Promo\nShakti: Value/Offers\nASICS: Offers\nGully Labs: Drops/Offers",
  "PUMA: Gifting\nadidas: Gifting/Originals\nNike: Gifting/Winter\nShakti: Gifting/Sport\nASICS: Running/Gifting\nGully Labs: Gifting/Sneakers"
 ],
 "compCampaign": [
  "New Year Fitness: Push “start running / start training” messaging to capture resolutions.",
  "Women + Lifestyle: Build relevance through women-focused products, creators and fitness stories.",
  "Cricket + Culture: Use cricket fandom, athletes and social content to drive engagement.",
  "Summer Sport: Connect products with holidays, outdoor activities and family time.",
  "Active Family: Promote fitness and activities that families can do together.",
  "Football Fever: Use tournaments, football culture and product storytelling to create excitement.",
  "Monsoon Fitness: Position indoor training and weather-ready products as the solution.",
  "Sport Participation: Connect sport with national pride, athletes and community participation. / Ladak marathon",
  "New Product Drops: Create excitement through launches, innovation stories and early access.",
  "Festive + Gifting: Position sport/lifestyle products as festive and gifting choices.",
  "Black Friday / Sale: Create urgency through limited-period discounts and high-intent digital targeting.",
  "Christmas + New Year: Combine gifting with “new year, new lifestyle” acquisition."
 ],
 "compProduct": [
  "Running shoes, training shoes, gymwear and entry-level performance products.",
  "Women's footwear, activewear, lifestyle sneakers and gifting products.",
  "Cricket jerseys, football boots, balls, sportswear and lifestyle sneakers.",
  "Cricket equipment, summer clothing, swimming/outdoor products and kids' sport.",
  "Training shoes, activewear, fitness equipment and outdoor products.",
  "",
  "Running shoes, indoor fitness equipment, rain-ready accessories and training apparel.",
  "Multi-sport equipment, performance footwear and sport apparel.",
  "Hero products, innovation-led products and new sneaker/apparel drops.",
  "Lifestyle footwear, sportswear, family products and festive bundles.",
  "Bestsellers, entry-price products, bundles and discounted inventory.",
  "Gifting products, sneakers, winter apparel and family sport products."
 ],
 "compOffer": [
  "New-season launches with fitness-led product communication rather than heavy discounting.",
  "Gifting bundles and product-led offers around Valentine's / women's fitness.",
  "Campaign-linked offers around cricket and football moments.",
  "Seasonal summer offers and product bundles.",
  "Family/summer packages and category-led offers.",
  "Product-led football offers and team/sport merchandise.",
  "Seasonal offers to drive indoor/monsoon purchases.",
  "Event/community-led product offers.",
  "Launch-led offers or early-access product communication.",
  "Festive bundles, gifting offers and mall-led promotions.",
  "Deep promotional period: discounts, urgency, retargeting and CRM conversion.",
  "Gift bundles and year-end offers."
 ],
 "compDigital": [
  "Running reels, fitness tips, paid ads and “new year” messaging to capture intent.",
  "Women creators, lifestyle reels, fitness inspiration and targeted social ads.",
  "UGC, athletes, cricket/football content and creator collaborations.",
  "Summer product videos, family content and outdoor inspiration.",
  "Fitness creators, family content and product education.",
  "Football creators, athlete stories, match/tournament content and paid media.",
  "Running content adapted to monsoon + indoor workout content.",
  "Athlete stories, national-sport content and community-generated content.",
  "Product teasers, launch videos, creator reviews and product storytelling.",
  "Festive reels, gifting guides, paid retargeting and mall campaigns.",
  "Performance marketing, CRM, remarketing and urgency-led creatives.",
  "Gifting guides, product recommendations and New Year acquisition campaigns."
 ],
 "compPhysical": [
  "Refresh store VM around fitness and New Year products.",
  "Strong mall visibility + lifestyle displays + gifting zones.",
  "Cricket/football displays and athlete/product visibility.",
  "Summer/outdoor merchandising and family-focused displays.",
  "Family, fitness and summer merchandising.",
  "Football-focused VM, jerseys and footwear prominently displayed.",
  "Running/fitness VM with monsoon-relevant products.",
  "Sport-led displays around National Sports Day / Independence.",
  "New-launch VM designed to create product discovery.",
  "Festive VM, gifting zones and mall visibility.",
  "Sale signage, high-visibility price communication and conversion-led VM.",
  "Gifting displays, winter products and festive merchandising."
 ],
 "compEvent": [
  "Running clubs, New Year fitness challenges and beginner sessions.",
  "Women's fitness sessions, community workouts and lifestyle events.",
  "Cricket screenings, tournaments, fan communities and football activities.",
  "Cricket, outdoor and family participation events.",
  "Family fitness activities, kids' camps and holiday programs.",
  "Football tournaments, screenings, fan events and product trials.",
  "Indoor fitness sessions, running groups and monsoon challenges.",
  "Community sports events and mass participation activities.",
  "Product trials, launch events and expert-led demonstrations.",
  "Festive activations, mall events and community engagement.",
  "Mostly conversion-led rather than community-led activations.",
  "Gifting events, family activities and year-end community engagement."
 ],
 "target": [
  "Families + teenagers + fitness beginners: Customers looking to start a healthier routine.",
  "Women + fitness beginners: Customers looking for accessible and social ways to stay active.",
  "Cricket/football players + fans: Customers motivated by sport culture and participation.",
  "Families + kids: Customers looking for activities during holidays and summer.",
  "Families + active kids: Customers with more time for camps and recreational activities.",
  "Football players + fans: Performance users as well as football culture followers.",
  "Runners + fitness users: Customers",
  "",
  "",
  "",
  "",
  ""
 ],
 "theyDoWell": [
  "Own Fitness Intent",
  "Lifestyle Relevance",
  "Sport + Culture",
  "Seasonal Relevance",
  "Family Appeal",
  "Sport Passion",
  "Product Relevance",
  "Youth + Culture",
  "Product Excitement",
  "Retail Visibility",
  "Urgency + Offers",
  "Gifting"
 ],
 "opportunity": [
  "Start a Sport",
  "Women in Sport",
  "Local Sports Communities",
  "Summer Sport Hub",
  "Family Activity",
  "Football Takeover",
  "Monsoon Sport",
  "Mass Participation",
  "Product Education",
  "Festive Sport Gifting",
  "Value + Conversion",
  "Gift a Sport"
 ],
 "response": [
  "Run Clubs + Beginner Products",
  "Women Events + Fitness Trials",
  "Cricket/Football Events",
  "Cricket + Swimming + Outdoor",
  "Camps + Family Activities",
  "Football Tournaments + Trials",
  "Indoor Fitness + Rain-ready Products",
  "National Sports Day + Communities",
  "Product Demos + Expert Content",
  "Festive Bundles + Gifting",
  "CRM + Digital Conversion",
  "Gifting + New Year Sport Acquisition"
 ],
 "communityEvents": [
  "SGS - Running event 12/01/27 \nSGS - Football event 09/01/11\nWakad - Badminton 10/01/11",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  ""
 ],
 "channels": [
  "WhatsApp + Community + Instagram Reels",
  "Women creators + WhatsApp + Instagram + Community",
  "Partner communities + Instagram + WhatsApp + OOH",
  "Schools + Housing Societies + Meta + WhatsApp",
  "Society partnerships + Schools + Meta + Store",
  "Football communities + Instagram + YouTube + WhatsApp",
  "Gym partnerships + CRM + Meta",
  "OOH + PR + Community + Social + Store",
  "Influencers + Product content + CRM + Store",
  "Mall + OOH + Meta + WhatsApp + Influencers",
  "CRM + Paid Digital + Retargeting + Store",
  "CRM + WhatsApp + Influencers + Store"
 ],
 "banner": [
  "Start Your SportNew Year, New Moves",
  "Move TogetherWomen's Sport Month",
  "Find Your SportCricket / Pickleball / Football",
  "Gudi Padwa April 7",
  "Maharashtra Day May 1st",
  "Football + YogaMove Your Way",
  "WARI",
  "India PlaysFind Your Sport",
  "Ganesh Chaturthi Sept 4th",
  "Gift a SportSport for Everyone",
  "Black FridayBest Value for Sport",
  "Gift a SportNew Year, New Sport"
 ],
 "academy": [
  "Wakad: Running/football\nWagholi: Cricket\nAmanora: Swimming/skating\nNIBM: Badminton/fitness\nSGS: Running",
  "Wakad: Fitness\nWagholi: Yoga\nAmanora: Swimming\nNIBM: Women fitness\nSGS: Yoga/running",
  "Wakad: Football\nWagholi: Cricket\nAmanora: Pickleball\nNIBM: Racket sports\nSGS: Pickleball",
  "Wakad: Cricket\nWagholi: Cricket\nAmanora: Swimming\nNIBM: Skating\nSGS: Outdoor sports",
  "Wakad: Football\nWagholi: Cricket\nAmanora: Swimming\nNIBM: Multi-sport\nSGS: Running",
  "Wakad: Football\nWagholi: Football\nAmanora: Swimming\nNIBM: Badminton\nSGS: Football",
  "Wakad: Indoor fitness\nWagholi: Badminton\nAmanora: Swimming\nNIBM: Indoor sports\nSGS: Running",
  "All 5: Multi-sport academies + National Sports Day",
  "Wakad: Running\nWagholi: Cricket\nAmanora: Swimming\nNIBM: Racket sports\nSGS: Technical sport",
  "Amanora: Family sports\nWakad: Football\nWagholi: Cricket\nNIBM: Fitness\nSGS: Running",
  "All 5: Academy member offers + product conversion",
  "All 5: “Gift a Sport” academy partnerships"
 ],
 "gym": [
  "Wakad: New Year fitness\nWagholi: Transformation\nAmanora: Family fitness\nNIBM: Local gyms\nSGS: Running",
  "Wakad: Women fitness\nWagholi: Women wellness\nAmanora: Women + family\nNIBM: Women gyms\nSGS: Fitness communities",
  "Wakad: Corporate fitness\nWagholi: Fitness challenge\nAmanora: Family fitness\nNIBM: Local gyms\nSGS: Young professionals",
  "Wakad: Summer fitness\nWagholi: Family challenge\nAmanora: Kids + parents\nNIBM: Fitness challenge\nSGS: Outdoor fitness",
  "Wakad: Transformation\nWagholi: Family fitness\nAmanora: Kids fitness\nNIBM: Community gyms\nSGS: Running",
  "Wakad: Football conditioning\nWagholi: Sports fitness\nAmanora: Family fitness\nNIBM: Fitness\nSGS: Athlete fitness",
  "All: Monsoon indoor fitness challenges",
  "All: Fitness challenge + National Sports Day",
  "Wakad: Running\nWagholi: Fitness\nAmanora: Women/family\nNIBM: Fitness\nSGS: Technical running",
  "Amanora: Festive fitness\nWakad: Performance\nWagholi: Family\nNIBM: Community\nSGS: Running",
  "All: Gym CRM + high-intent offers",
  "All: New Year fitness registrations"
 ],
 "school": [
  "Wakad: Teen sport\nWagholi: Schools\nAmanora: Kids activities\nNIBM: Schools\nSGS: Colleges",
  "SGS: Girls' colleges\nNIBM: Girls' schools\nWakad: Women/teen sport\nWagholi: Schools\nAmanora: Family schools",
  "SGS: College cricket\nWakad: Football\nWagholi: Cricket\nAmanora: Pickleball\nNIBM: Racket sports",
  "Wagholi: Summer schools\nAmanora: Kids camps\nWakad: Sports camps\nNIBM: Kids sport\nSGS: College sports",
  "All: Holiday camps + multi-sport",
  "Wakad: College football\nSGS: Football\nWagholi: Cricket/football\nAmanora: Kids\nNIBM: Badminton",
  "All: Indoor sport challenges",
  "All: Independence + National Sports Day",
  "SGS: Sports colleges\nWakad: Athlete sessions\nWagholi: Cricket\nAmanora: Kids\nNIBM: Racket sports",
  "Amanora: Family sports day\nWakad: Football\nWagholi: Cricket\nNIBM: Fitness\nSGS: Running",
  "All: Youth sport offers",
  "All: Christmas sports carnival"
 ],
 "corporate": [
  "Wakad/Hinjewadi: IT fitness\nWagholi/Kharadi: Employee fitness\nAmanora/Magarpatta: Family wellness\nNIBM: Local businesses\nSGS: Central Pune corporates",
  "Women employee wellness across Kharadi, Magarpatta, Hinjewadi",
  "Corporate cricket/pickleball league across Wakad + Kharadi + Magarpatta",
  "Summer employee challenge across all catchments",
  "Family sports day - Amanora + Wagholi + Kharadi",
  "Football league - Wakad/Hinjewadi",
  "Indoor corporate fitness - all catchments",
  "City-wide corporate sports challenge",
  "Product demo + wellness - Hinjewadi/Kharadi",
  "Festive wellness - all catchments",
  "Employee offers + CRM",
  "Corporate gifting + sport kits"
 ],
 "society": [
  "Wakad/Punawale: Teen sport\nWagholi: Family fitness\nAmanora/Hadapsar: Family sport\nNIBM/Undri: Fitness\nSGS: Central Pune communities",
  "Women fitness - NIBM, Amanora, Wakad",
  "Cricket/football leagues - Wakad + Wagholi; pickleball - Amanora",
  "Kids summer camps - Amanora + Wagholi + NIBM",
  "Family challenge - all 5 catchments",
  "Football screenings - Wakad + Wagholi",
  "Monsoon indoor challenge - NIBM + Amanora + Wagholi",
  "Multi-sport society day - all 5",
  "Product demo - premium societies around Wakad/Amanora/SGS",
  "Festive sport carnival - Amanora + NIBM + Wagholi",
  "Society member value offers - all 5",
  "Christmas family sport day - all 5"
 ],
 "sportsEvent": ["Running - Wakad/SGS + family sport - Amanora/Wagholi/NIBM", "Women’s fitness - all 5 catchments", "Wakad: Football\nWagholi: Cricket\nAmanora: Pickleball\nNIBM: Badminton\nSGS: Running", "Summer sports day - Amanora/Wagholi", "Family multi-sport - Amanora/NIBM/Wagholi", "Football - Wakad/SGS", "Indoor fitness - NIBM/Amanora/SGS", "All 5: National Sports Day", "Running/cycling/product trials - Wakad/SGS", "Festive sport carnival - Amanora/Wagholi/NIBM", "Conversion events - Wakad/SGS + local events in other stores", "All 5: Gift a Sport"],
 "influencers": ["Fitness/running creators mapped to each store catchment", "Women creators + athletes", "Cricket/football/pickleball creators", "Family + kids creators", "Parenting + family creators", "Football + running athletes", "Fitness + monsoon creators", "Local athletes from all 5 catchments", "Technical product reviewers", "Pune lifestyle + family creators", "Value/deal creators", "Gifting + lifestyle creators"],
 "ooh": [
  "Wakad: BIG OOH\nSGS: Central visibility\nWagholi: Nagar Road entry\nAmanora: Mall media\nNIBM: Hyperlocal only",
  "Amanora: Mall + women-led media\nSGS: Central Pune\nOthers: digital/local",
  "Wakad + SGS: Cricket/pickleball OOH\nWagholi: Nagar Road\nAmanora: Mall media\nNIBM: Hyperlocal",
  "Amanora + Wagholi: Summer/family visibility\nWakad: selective OOH",
  "Wakad + Amanora: Summer Sport\nWagholi: local visibility",
  "Wakad: Football OOH\nSGS: City visibility\nOthers: local",
  "Limited OOH: Digital + catchment media across 5 stores",
  "Wakad + SGS + Amanora: BIG National Sports Day visibility\nWagholi/NIBM: local",
  "Wakad + SGS: Launch visibility\nAmanora: mall media",
  "Amanora: BIG festive mall visibility\nWakad/SGS: OOH\nWagholi/NIBM: local",
  "Wakad + SGS: Black Friday conversion OOH\nOthers: hyperlocal",
  "Amanora + Wakad: Christmas/New Year\nWagholi/SGS: local"
 ],
 "storeActivation": ["All 5: New Year, New Sport", "All 5: Women Who Play", "Wakad/SGS: Cricket/Pickleball; Wagholi: Cricket; Amanora: Family; NIBM: Badminton", "Amanora/Wagholi: Summer Sport Hub; other stores local sport", "Amanora: Sports Utsav + family; Wagholi/NIBM: camps", "Wakad: Football; other 4: local football activations", "All 5: Monsoon Sport Zone", "All 5: National Sports Day", "All 5: New Arrival / Product Demo", "Amanora: Gift a Sport; all: festive sport", "All 5: Black Friday conversion", "All 5: Christmas + New Year"],
 "flyers": [
  "Wakad: Gyms/societies\nWagholi: Societies\nAmanora: Mall/family\nNIBM: Societies\nSGS: Colleges",
  "Women gyms + societies around all stores",
  "Academies + sports clubs around all 5",
  "Schools + societies around Amanora/Wagholi/NIBM",
  "Summer camps around all 5",
  "Football academies around Wakad/SGS/Wagholi",
  "Indoor venues around NIBM/Amanora/SGS",
  "Academies + colleges across all catchments",
  "Running/technical communities",
  "Festive societies + malls",
  "High-intent catchments around all stores",
  "Schools + societies around all stores"
 ],
 "freeProducts": ["Teen trial kits + community T-shirts", "Women community kits", "Tournament prizes across 5 stores", "Kids camp kits", "Family challenge products", "Football prizes + trials", "Indoor fitness trials", "National Sports Day kits across all 5", "New product trial units", "Festive event kits", "Only conversion-linked", "Gifting/community kits"],
 "partnerships": ["Running + gym partnerships across stores", "Women fitness partnerships", "Cricket/football/pickleball partnerships", "Summer camp + school partnerships", "Family/society partnerships", "Football partnerships", "Indoor sports venues", "Large-scale Pune sports partnership", "Product launch + creators", "Festive mall/community partnerships", "Performance + CRM", "New Year + gifting"]
};

/* Store-level Q4 2026 data, generated from ultimate_data_sheet.xlsx (Sheet1).
   Turnover in Cr, budgets in lakh. Rows 92-117 turnover challenge, rows 3-16 store budgets,
   rows 19-74 spend by line. */
Object.assign(window.DATA, {
 "stores": [
  {
   "id": "wakad",
   "name": "Wakad",
   "state": "Pune",
   "city": "Pune",
   "area": "Wakad, Hinjewadi and Punawale",
   "mall": false,
   "lat": 18.598,
   "lon": 73.763,
   "q425": 27.29,
   "ambition": 26.34,
   "challenge": 30.4,
   "growth": 11.4,
   "overAmbition": 4.06,
   "budget": [
    5.48,
    7.69,
    7.5
   ]
  },
  {
   "id": "wagholi",
   "name": "Wagholi",
   "state": "Pune",
   "city": "Pune",
   "area": "Wagholi, Kharadi and the Nagar Road entry",
   "mall": false,
   "lat": 18.58,
   "lon": 73.986,
   "q425": 11.67,
   "ambition": 12.63,
   "challenge": 14.4,
   "growth": 23.4,
   "overAmbition": 1.77,
   "budget": [
    2.28,
    3.24,
    3.19
   ]
  },
  {
   "id": "sgs",
   "name": "SGS Mall",
   "state": "Pune",
   "city": "Pune",
   "area": "Central Pune",
   "mall": true,
   "lat": 18.518,
   "lon": 73.877,
   "q425": 12.42,
   "ambition": 13.17,
   "challenge": 14.32,
   "growth": 15.3,
   "overAmbition": 1.15,
   "budget": [
    2.41,
    3.27,
    3.76
   ]
  },
  {
   "id": "amanora",
   "name": "Amanora",
   "state": "Pune",
   "city": "Pune",
   "area": "Amanora, Magarpatta and Hadapsar",
   "mall": true,
   "lat": 18.519,
   "lon": 73.934,
   "q425": 9.27,
   "ambition": 10.08,
   "challenge": 10.61,
   "growth": 14.4,
   "overAmbition": 0.53,
   "budget": [
    1.87,
    2.57,
    2.8
   ]
  },
  {
   "id": "nibm",
   "name": "NIBM",
   "state": "Pune",
   "city": "Pune",
   "area": "NIBM and Undri",
   "mall": false,
   "lat": 18.475,
   "lon": 73.902,
   "q425": 4.59,
   "ambition": 6.37,
   "challenge": 5.8,
   "growth": 26.4,
   "overAmbition": -0.57,
   "budget": [
    1.17,
    1.22,
    1.28
   ]
  },
  {
   "id": "motera",
   "name": "Motera",
   "state": "Gujarat",
   "city": "Ahmedabad",
   "area": "Motera, north Ahmedabad",
   "mall": false,
   "lat": 23.1,
   "lon": 72.597,
   "q425": 12.68,
   "ambition": 12.82,
   "challenge": 14.5,
   "growth": 14.4,
   "overAmbition": 1.67,
   "budget": [
    3.65,
    4.88,
    6.03
   ]
  },
  {
   "id": "nexus",
   "name": "Nexus",
   "state": "Gujarat",
   "city": "Ahmedabad",
   "area": "Nexus, west Ahmedabad",
   "mall": true,
   "lat": 23.04,
   "lon": 72.531,
   "q425": 11.3,
   "ambition": 12.73,
   "challenge": 13.19,
   "growth": 16.8,
   "overAmbition": 0.46,
   "budget": [
    3.28,
    5.18,
    5.75
   ]
  },
  {
   "id": "baroda",
   "name": "Baroda",
   "state": "Gujarat",
   "city": "Vadodara",
   "area": "Alkapuri, Vadodara",
   "mall": false,
   "lat": 22.311,
   "lon": 73.17,
   "q425": 8.95,
   "ambition": 10.07,
   "challenge": 10.45,
   "growth": 16.7,
   "overAmbition": 0.38,
   "budget": [
    2.78,
    3.93,
    4.17
   ]
  },
  {
   "id": "surat",
   "name": "Surat",
   "state": "Gujarat",
   "city": "Surat",
   "area": "Dumas Road, Surat",
   "mall": false,
   "lat": 21.1187,
   "lon": 72.7356,
   "q425": 8.97,
   "ambition": 10.45,
   "challenge": 10.66,
   "growth": 18.9,
   "overAmbition": 0.21,
   "budget": [
    3.31,
    3.52,
    4.33
   ]
  },
  {
   "id": "rajkot",
   "name": "Rajkot",
   "state": "Gujarat",
   "city": "Rajkot",
   "area": "Rajkot",
   "mall": false,
   "lat": 22.303,
   "lon": 70.802,
   "q425": 2.4,
   "ambition": 2.28,
   "challenge": 2.69,
   "growth": 12.2,
   "overAmbition": 0.41,
   "budget": [
    0.58,
    0.78,
    1.11
   ]
  },
  {
   "id": "indore",
   "name": "Indore",
   "state": "MP",
   "city": "Indore",
   "area": "Indore",
   "mall": false,
   "lat": 22.72,
   "lon": 75.858,
   "q425": 9.77,
   "ambition": 10.44,
   "challenge": 11.92,
   "growth": 22.1,
   "overAmbition": 1.48,
   "budget": [
    2.91,
    4.09,
    4.58
   ]
  },
  {
   "id": "bhopal",
   "name": "Bhopal",
   "state": "MP",
   "city": "Bhopal",
   "area": "Bhopal",
   "mall": false,
   "lat": 23.26,
   "lon": 77.413,
   "q425": 6.63,
   "ambition": 8.36,
   "challenge": 12.21,
   "growth": 84.2,
   "overAmbition": 3.85,
   "budget": [
    2.94,
    3.97,
    4.99
   ]
  },
  {
   "id": "gwalior",
   "name": "Gwalior",
   "state": "MP",
   "city": "Gwalior",
   "area": "Gwalior",
   "mall": false,
   "lat": 26.218,
   "lon": 78.183,
   "q425": 3.11,
   "ambition": 3.83,
   "challenge": 3.6,
   "growth": 15.7,
   "overAmbition": -0.23,
   "budget": [
    0.78,
    1.14,
    1.3
   ]
  }
 ],
 "stateTO": {
  "Pune Digital": {
   "q425": 4.45,
   "amb": 5.54,
   "ch": 5.8,
   "g": 30.2,
   "inc": 0.26
  },
  "Pune Wholesale": {
   "q425": 1.64,
   "amb": 5.19,
   "ch": 5.89,
   "g": 259.2,
   "inc": 0.7
  },
  "PUNE TOTAL": {
   "q425": 71.34,
   "amb": 79.31,
   "ch": 87.22,
   "g": 22.3,
   "inc": 7.91
  },
  "Ahmedabad Digital": {
   "q425": 1.23,
   "amb": 1.6,
   "ch": 1.6,
   "g": 29.9,
   "inc": 0.0
  },
  "Gujarat Digital": {
   "q425": 2.89,
   "amb": 4.18,
   "ch": 3.75,
   "g": 29.9,
   "inc": -0.43
  },
  "Gujarat Wholesale": {
   "q425": 0.44,
   "amb": 1.72,
   "ch": 2.36,
   "g": 431.9,
   "inc": 0.64
  },
  "GJ TOTAL": {
   "q425": 48.86,
   "amb": 55.85,
   "ch": 59.2,
   "g": 21.2,
   "inc": 3.35
  },
  "MP Digital": {
   "q425": 4.3,
   "amb": 4.81,
   "ch": 4.62,
   "g": 7.4,
   "inc": -0.19
  },
  "MP TOTAL": {
   "q425": 23.8,
   "amb": 27.44,
   "ch": 32.35,
   "g": 35.9,
   "inc": 4.91
  },
  "Pune Stores": {
   "q425": 65.24,
   "amb": 68.58,
   "ch": 75.53,
   "g": 15.8,
   "inc": 6.95
  },
  "GJ Stores": {
   "q425": 44.29,
   "amb": 48.35,
   "ch": 51.49,
   "g": 16.2,
   "inc": 3.14
  },
  "MP Stores": {
   "q425": 19.5,
   "amb": 22.63,
   "ch": 27.73,
   "g": 42.2,
   "inc": 5.1
  }
 },
 "stateLines": {
  "Pune": {
   "total": [
    25.3,
    38.988,
    23.106
   ],
   "lines": [
    {
     "line": "Paid Internal Fees Advertising (Digital Paid to Marcom)",
     "v": [
      8.8,
      11.988,
      12.356
     ]
    },
    {
     "line": "Internal consumption (Non Marketing)",
     "v": [
      3.5,
      0.0,
      0.0
     ]
    },
    {
     "line": "In Mall Communication",
     "v": [
      2.25,
      4.5,
      2.25
     ]
    },
    {
     "line": "Hoarding,OOH and Hipop / AOP",
     "v": [
      5.75,
      4.5,
      4.5
     ]
    },
    {
     "line": "Instore communication (Campaign & Merch)",
     "v": [
      1.5,
      5.5,
      1.5
     ]
    },
    {
     "line": "Store Event",
     "v": [
      1.0,
      6.0,
      0.0
     ]
    },
    {
     "line": "Flyers",
     "v": [
      1.0,
      1.0,
      1.0
     ]
    },
    {
     "line": "Influencer Marketing Fees",
     "v": [
      1.5,
      5.0,
      1.5
     ]
    },
    {
     "line": "Free products and IC (Marketing)",
     "v": [
      0.0,
      0.5,
      0.0
     ]
    }
   ]
  },
  "Gujarat": {
   "total": [
    19.95,
    26.83,
    31.65
   ],
   "lines": [
    {
     "line": "Paid Internal Fees Advertising (Digital Paid to Marcom)",
     "v": [
      5.44,
      7.32,
      8.56
     ]
    },
    {
     "line": "Regional Marketing - In Mall",
     "v": [
      3.7,
      3.7,
      3.7
     ]
    },
    {
     "line": "Regional Marketing Hoarding / HIPOP",
     "v": [
      3.31,
      6.29,
      6.2
     ]
    },
    {
     "line": "Regional Marketing Influencer & Affiliation",
     "v": [
      2.21,
      3.23,
      3.96
     ]
    },
    {
     "line": "Press Advertising PR Pages",
     "v": [
      0.33,
      0.48,
      0.59
     ]
    },
    {
     "line": "Free Products & IC",
     "v": [
      2.13,
      1.94,
      2.37
     ]
    },
    {
     "line": "Regional Marketing Store Event x collab",
     "v": [
      1.66,
      2.42,
      2.97
     ]
    },
    {
     "line": "Other Online Channels",
     "v": [
      1.21,
      0.0,
      0.0
     ]
    },
    {
     "line": "Instore Communication",
     "v": [
      0.99,
      1.45,
      1.78
     ]
    },
    {
     "line": "Community / Sports Partnerships",
     "v": [
      0.99,
      1.45,
      1.78
     ]
    }
   ]
  },
  "MP": {
   "total": [
    6.8,
    9.87,
    11.09
   ],
   "lines": [
    {
     "line": "Paid Internal Fees Advertising (Digital Paid to Marcom)",
     "v": [
      2.72,
      3.95,
      4.44
     ]
    },
    {
     "line": "Regional Marketing - In Mall",
     "v": [
      0.45,
      0.35,
      0.35
     ]
    },
    {
     "line": "Regional Marketing Hoarding / HIPOP",
     "v": [
      0.85,
      2.6,
      2.4
     ]
    },
    {
     "line": "Regional Marketing Influencer & Affiliation",
     "v": [
      1.29,
      1.87,
      2.1
     ]
    },
    {
     "line": "Press Advertising PR Pages",
     "v": [
      0.11,
      0.16,
      0.18
     ]
    },
    {
     "line": "Free Products & IC",
     "v": [
      0.86,
      0.78,
      0.88
     ]
    },
    {
     "line": "Regional Marketing Store Event x collab",
     "v": [
      0.64,
      0.93,
      1.05
     ]
    },
    {
     "line": "Instore Communication",
     "v": [
      0.48,
      0.7,
      0.79
     ]
    },
    {
     "line": "Community / Sports Partnerships",
     "v": [
      0.48,
      0.7,
      0.79
     ]
    },
    {
     "line": "Old - General Advertising",
     "v": [
      0.05,
      0.0,
      0.0
     ]
    }
   ]
  }
 }
});

/* Winter hoarding programme 2026 (2026_WINTER_HOARDING_PGM.xlsx, 26 Oct 2026). cost = rupees per month.
   Ahmedabad: 2 hoardings, ₹3.5 L a month for the two (user, 28 Oct 2026), split evenly; sites to be confirmed.
   status live = Pune boards up from 10-13 Oct (photo stamps); nov = Gujarat and Bhopal go live in November.
   lat/lon: exact = photo GPS stamp, otherwise an approximate area pin. why = our rationale for the site. */
window.HOARDINGS = [
 {
  "city": "Pune",
  "loc": "Hyundai Service Centre, facing Pune, towards Wagholi",
  "size": "40 x 30 ft",
  "dur": "Nov-Dec 2026",
  "cost": 130000,
  "status": "live",
  "why": "Catches Nagar Road traffic just before our Wagholi store, on the city's eastern entry.",
  "img": "hpgm/pune-wagholi.jpg",
  "lat": 18.571295,
  "lon": 73.954203,
  "exact": true
 },
 {
  "city": "Pune",
  "loc": "Kesnand Phata, facing Nagar, towards Pune",
  "size": "30 x 20 ft",
  "dur": "Nov-Dec 2026",
  "cost": 110000,
  "status": "live",
  "why": "The first board on the way in from Nagar and the new Wagholi and Kesnand townships.",
  "img": "hpgm/pune-kesnand.jpg",
  "lat": 18.581396,
  "lon": 73.98654,
  "exact": true
 },
 {
  "city": "Pune",
  "loc": "EuroKids, Wakad",
  "size": "45 x 30 ft",
  "dur": "Nov-Dec 2026",
  "cost": 140000,
  "status": "live",
  "why": "Beside a preschool on the school run: parents and families, a few minutes from Decathlon Wakad.",
  "img": "hpgm/pune-wakad-eurokids.jpg",
  "lat": 18.5995,
  "lon": 73.7625,
  "exact": false
 },
 {
  "city": "Pune",
  "loc": "Bhumkar Bridge, Wakad",
  "size": "40 x 30 ft",
  "dur": "Nov-Dec 2026",
  "cost": 125000,
  "status": "live",
  "why": "Where Hinjewadi IT traffic leaves the highway for Wakad: our time-poor professionals pass it twice a day.",
  "img": "hpgm/pune-bhumkar.jpg",
  "lat": 18.604,
  "lon": 73.752,
  "exact": false
 },
 {
  "city": "Pune",
  "loc": "Baner",
  "size": "45 x 30 ft",
  "dur": "Nov-Dec 2026",
  "cost": 140000,
  "status": "live",
  "why": "A young, high-income belt near the Balewadi sports complex with no store of its own; the board pulls it to Wakad and SGS.",
  "img": "hpgm/pune-baner.jpg",
  "lat": 18.56,
  "lon": 73.787,
  "exact": false
 },
 {
  "city": "Pune",
  "loc": "Sanvidhan Chowk, NIBM",
  "size": "30 x 30 ft",
  "dur": "Nov-Dec 2026",
  "cost": 150000,
  "status": "live",
  "why": "The main junction of the NIBM and Undri belt, our NIBM store's catchment of young families and new housing.",
  "img": "hpgm/pune-nibm.jpg",
  "lat": 18.474,
  "lon": 73.899,
  "exact": false
 },
 {
  "city": "Pune",
  "loc": "Amanora Road",
  "size": "40 x 20 ft",
  "dur": "Nov-Dec 2026",
  "cost": 140000,
  "status": "live",
  "why": "On the road into Amanora and Magarpatta: offices by day, mall shoppers by evening, all heading past Decathlon Amanora.",
  "img": "hpgm/pune-amanora.jpg",
  "lat": 18.5185,
  "lon": 73.9375,
  "exact": false
 },
 {
  "city": "Baroda",
  "loc": "Akota, DMart parking terrace",
  "size": "20 x 20 ft",
  "dur": "Nov-Dec 2026",
  "cost": 40000,
  "status": "nov",
  "why": "Above a DMart car park: families doing their weekly shop, already in a planned-purchase mood.",
  "img": "hpgm/baroda-akota.jpg",
  "lat": 22.2968,
  "lon": 73.1663,
  "exact": false
 },
 {
  "city": "Baroda",
  "loc": "Fatehgunj, Bull Circle",
  "size": "20 x 20 ft",
  "dur": "Nov-Dec 2026",
  "cost": 35000,
  "status": "nov",
  "why": "One of the city's busiest circles, close to MS University: students and first-job buyers.",
  "img": "hpgm/baroda-fatehgunj.jpg",
  "lat": 22.3195,
  "lon": 73.1855,
  "exact": false
 },
 {
  "city": "Baroda",
  "loc": "Gotri Bridge, towards Natubhai Circle",
  "size": "20 x 20 ft",
  "dur": "Nov-Dec 2026",
  "cost": 50000,
  "status": "nov",
  "why": "West Vadodara's growing residential belt, with heavy evening traffic towards Natubhai Circle.",
  "img": "hpgm/baroda-gotri.jpg",
  "lat": 22.312,
  "lon": 73.144,
  "exact": false
 },
 {
  "city": "Baroda",
  "loc": "Subhanpura, facing Ellorapark, towards Gorwa",
  "size": "25 x 15 ft",
  "dur": "Nov-Dec 2026",
  "cost": 40000,
  "status": "nov",
  "why": "Settled residential neighbourhoods with schools and coaching classes around: parents and teenagers.",
  "img": "hpgm/baroda-subhanpura.jpg",
  "lat": 22.32,
  "lon": 73.16,
  "exact": false
 },
 {
  "city": "Rajkot",
  "loc": "Bhaktinagar Circle",
  "size": "40 x 20 ft",
  "dur": "Nov-Dec 2026",
  "cost": 150000,
  "status": "nov",
  "why": "A main circle in a one-store city: one big board reaches most of Rajkot's daily traffic.",
  "img": "hpgm/rajkot-bhaktinagar.jpg"
 },
 {
  "city": "Rajkot",
  "loc": "Kishanpara Circle, facing Mahila College",
  "size": "40 x 20 ft",
  "dur": "Nov-Dec 2026",
  "cost": 130000,
  "status": "nov",
  "why": "Faces a women's college: young women and families in the city where padel and pickleball grew fastest.",
  "img": "hpgm/rajkot-kishanpara.jpg"
 },
 {
  "city": "Surat",
  "loc": "Pal Umra Bridge, towards SVNIT",
  "size": "40 x 20 ft",
  "dur": "Nov 2026 - Oct 2027",
  "cost": 190000,
  "status": "plan",
  "why": "Between Adajan, Piplod and Vesu: planned as a year-long anchor for the new Adajan store. Not booked yet.",
  "img": "hpgm/surat-palumra.jpg",
  "lat": 21.169,
  "lon": 72.788,
  "exact": false
 },
 {
  "city": "Bhopal",
  "loc": "Vyapam Square, Link Road No. 1",
  "size": "20 x 10 ft",
  "dur": "Nov-Dec 2026",
  "cost": 75000,
  "status": "nov",
  "why": "A busy square on Link Road No. 1, one of the main roads across the new city.",
  "img": "hpgm/bhopal-vyapam.jpg",
  "lat": 23.2345,
  "lon": 77.429,
  "exact": false
 },
 {
  "city": "Bhopal",
  "loc": "Kamla Park",
  "size": "20 x 10 ft",
  "dur": "Nov-Dec 2026",
  "cost": 80000,
  "status": "nov",
  "why": "Near the Upper Lake, on the road between the old city and the new: steady all-day traffic.",
  "img": "hpgm/bhopal-kamlapark.jpg",
  "lat": 23.259,
  "lon": 77.395,
  "exact": false
 },
 {
  "city": "Ahmedabad",
  "loc": "Ahmedabad hoarding 1, site to be confirmed",
  "size": "Size to be confirmed",
  "dur": "Nov-Dec 2026",
  "cost": 175000,
  "status": "nov",
  "why": "Our two Ahmedabad stores, Motera and Nexus, get the same road presence in sale weeks as the rest of Gujarat.",
  "img": null
 },
 {
  "city": "Ahmedabad",
  "loc": "Ahmedabad hoarding 2, site to be confirmed",
  "size": "Size to be confirmed",
  "dur": "Nov-Dec 2026",
  "cost": 175000,
  "status": "nov",
  "why": "Our two Ahmedabad stores, Motera and Nexus, get the same road presence in sale weeks as the rest of Gujarat.",
  "img": null
 }
];

/* AOP (area of practice) plan per store, Nov 2026 - Oct 2027 (user table, 27 Oct 2026). cost = rupees per AOP.
   live = AOPs already running (user, 27 Oct 2026; given for Pune stores only). */
window.AOP_PLAN = [{"store": "Wakad", "state": "Pune", "total": 54, "cost": 25000, "months": [5, 6, 7, 7, 8, 5, 4, 4, 3, 1, 1, 3], "live": 58}, {"store": "Wagholi", "state": "Pune", "total": 45, "cost": 25000, "months": [5, 6, 5, 5, 5, 5, 4, 3, 2, 1, 1, 3], "live": 15}, {"store": "SGS Mall", "state": "Pune", "total": 33, "cost": 25000, "months": [4, 5, 3, 4, 3, 3, 4, 2, 1, 1, 0, 3], "live": 6}, {"store": "NIBM", "state": "Pune", "total": 32, "cost": 24000, "months": [4, 5, 4, 3, 4, 4, 3, 2, 0, 0, 1, 2], "live": null}, {"store": "Amanora", "state": "Pune", "total": 31, "cost": 25000, "months": [4, 5, 3, 4, 3, 3, 2, 2, 1, 1, 0, 3], "live": 22}, {"store": "Motera", "state": "Gujarat", "total": 38, "cost": 24000, "months": [4, 5, 4, 4, 5, 5, 4, 2, 1, 1, 0, 3], "live": null}, {"store": "Nexus", "state": "Gujarat", "total": 37, "cost": 24000, "months": [4, 5, 4, 4, 4, 4, 4, 3, 2, 0, 0, 3], "live": null}, {"store": "Dumas", "state": "Gujarat", "total": 36, "cost": 23000, "months": [4, 5, 4, 4, 4, 4, 4, 2, 1, 1, 0, 3], "live": null}, {"store": "Baroda", "state": "Gujarat", "total": 34, "cost": 24000, "months": [4, 4, 4, 3, 4, 4, 4, 2, 1, 1, 0, 3], "live": 6}, {"store": "Rajkot", "state": "Gujarat", "total": 19, "cost": 7000, "months": [3, 2, 2, 3, 2, 2, 1, 1, 1, 0, 0, 2], "live": null}, {"store": "Indore", "state": "MP", "total": 36, "cost": 20000, "months": [5, 5, 3, 4, 4, 4, 4, 2, 1, 1, 0, 3], "live": null}, {"store": "Bhopal", "state": "MP", "total": 33, "cost": 20000, "months": [4, 5, 3, 4, 3, 3, 4, 2, 1, 1, 0, 3], "live": 7}, {"store": "Gwalior", "state": "MP", "total": 21, "cost": 7000, "months": [3, 3, 3, 2, 3, 2, 1, 1, 1, 0, 0, 2], "live": null}];

/* In-store sales 1-26 Oct 2026 by store (store report shared 27 Oct 2026). to in Cr. growth = report's grand-total TO growth (%), likely vs the same days of Oct 2025. */
window.DATA.octMTD = {"from": "2026-10-01", "to": "2026-10-26", "growth": 8.6, "custTotal": 104018, "retTotal": 77414, "stores": [{"store": "Wakad", "to": 6.3708, "qty": 89208, "cust": 20006, "ret": 15343}, {"store": "SGS Mall", "to": 2.6904, "qty": 39463, "cust": 11418, "ret": 8480}, {"store": "Wagholi", "to": 2.6174, "qty": 36451, "cust": 9923, "ret": 7853}, {"store": "Amanora", "to": 2.2402, "qty": 32265, "cust": 8878, "ret": 7148}, {"store": "NIBM", "to": 1.1898, "qty": 18091, "cust": 5304, "ret": 4286}, {"store": "Motera", "to": 2.637, "qty": 35099, "cust": 8729, "ret": 6622}, {"store": "Nexus", "to": 2.3664, "qty": 34602, "cust": 8958, "ret": 6422}, {"store": "Surat", "to": 2.2896, "qty": 32601, "cust": 6863, "ret": 4851}, {"store": "Baroda", "to": 1.8952, "qty": 26333, "cust": 6157, "ret": 4511}, {"store": "Rajkot", "to": 0.5297, "qty": 8676, "cust": 2414, "ret": 1673}, {"store": "Indore", "to": 1.9868, "qty": 27516, "cust": 6749, "ret": 4849}, {"store": "Bhopal", "to": 1.632, "qty": 24966, "cust": 7005, "ret": 4404}, {"store": "Gwalior", "to": 0.4803, "qty": 7419, "cust": 2537, "ret": 1787}]};

/* Q4 2026 spend by campaign per state, rupees Oct/Nov/Dec (user's campaign-split screenshots, 28 Oct 2026).
   Pune's sheet shows 5 campaigns = 70.05% of its 54.25 L plan; the rest is not in the screenshot. */
window.DATA.campQ4 = {"Gujarat": [["Winter Season (15 Oct - 30 Jan)", 72568, 292680, 577305], ["Climbing and Trekking (Nov)", 0, 195120, 484936], ["Navratri / Dussehra (11-20 Oct)", 449923, 0, 0], ["Diwali (24-26 Oct), Gift a Sport", 362841, 0, 0], ["Running + Kiprun launch (21 Oct - 30 Nov)", 101596, 468288, 0], ["Kids Fest (31 Oct - 2 Nov), Children's Day (14 Nov)", 188678, 273168, 0], ["Black Friday (27-30 Nov)", 0, 409752, 0], ["Adani Marathon (29 Nov)", 0, 234144, 0], ["Christmas (19-31 Dec)", 0, 0, 415659], ["Travel (15 Oct - 31 Dec)", 0, 0, 554212], ["Buffer + Express Delivery in Ahmedabad and OOC reels", 275759, 39024, 115461]], "MP": [["Winter Season (25 Oct - 30 Jan)", 135956, 246626, 277240], ["Diwali + Dussehra (16-20 Oct)", 237923, 49325, 0], ["Running + Kiprun launch (21 Oct - 30 Nov)", 169945, 147976, 0], ["Kids Fest (31 Oct - 2 Nov), Children's Day (14 Nov)", 74776, 98651, 0], ["Black Friday (27-30 Nov)", 0, 197301, 0], ["Climbing and Trekking", 0, 118381, 166344], ["Anniversary", 0, 29595, 0], ["Christmas (19-31 Dec)", 0, 0, 388136], ["Unnamed line in the sheet", 0, 0, 221792], ["Buffer", 33989, 49325, 55448]], "Pune": [["Dussehra / Festive (commercial, Oct)", 850000, 0, 0], ["Kiprun (product launch, Oct)", 350000, 0, 0], ["Winter Travel (OPCO, Nov)", 0, 1775000, 0], ["Trekking (sport of the month, Nov)", 0, 200000, 0], ["End of Year Sale (commercial, Dec)", 0, 0, 625000]]};
window.DATA.campQ4.puneTotal = 5425000;

/* Digital turnover YTD 2026, Jan - Oct (Digital_ytd_2026_data_.xlsx, shared 29 Oct 2026; October is month to date).
   Rupees. Gujarat = Ahmedabad + Rest of West (Surat, Baroda, Rajkot). ch: ecom = DSI E-commerce, store = digital orders booked to a store, mkt = marketplace.
   retYtd / retOct = returning customers as a share of customers; newYtd / newOct = new customers as a share of customers, counted per sport line (a customer buying two sports counts twice).
   octTop / octSports: [sport, October so far, October vs the Jan - Sep monthly average (x), October vs September (x)]. */
window.DATA.digitalYTD = {"bu": {"Pune": {"months": [19717597, 15495575, 18332736, 19610179, 21266334, 22138823, 28703063, 23256120, 16984071, 16026216], "ch": {"ecom": 144475649, "store": 56694234, "mkt": 360831}, "newYtd": 21.5, "newOct": 25.3, "retYtd": 78.5, "retOct": 74.7, "octTop": [["Cycling", 2519705, 1.1], ["Hiking", 2499176, 0.64], ["Fitness equipment", 1960995, 0.85], ["Fitness outfit", 1346319, 0.71], ["Running", 1095055, 0.81]]}, "Gujarat": {"months": [17801519, 12003547, 13391705, 17101860, 17496024, 16008257, 17259711, 14790327, 13568490, 12194983], "ch": {"ecom": 120568146, "store": 30709265, "mkt": 339010}, "newYtd": 30.7, "newOct": 35.2, "retYtd": 69.3, "retOct": 64.8, "octTop": [["Hiking", 2305868, 0.74], ["Fitness equipment", 1408951, 0.76], ["Cycling", 1275502, 1.18], ["Running", 1193254, 0.77], ["Fitness outfit", 958624, 0.76]]}, "MP": {"months": [12399179, 7439630, 8191304, 9409322, 10379519, 9643508, 10363778, 10092115, 9447820, 8801910], "ch": {"ecom": 77258324, "store": 18763842, "mkt": 145917}, "newYtd": 32.2, "newOct": 38.2, "retYtd": 67.8, "retOct": 61.8, "octTop": [["Hiking", 2355194, 1.08], ["Cycling", 1087917, 1.9], ["Fitness equipment", 911779, 0.8], ["Fitness outfit", 764929, 0.89], ["Running", 763200, 0.78]]}}, "sports": [["Hiking", {"Pune": 37875671, "Gujarat": 30305658, "MP": 21935630}], ["Fitness equipment", {"Pune": 22736570, "Gujarat": 18134202, "MP": 11196413}], ["Cycling", {"Pune": 23105557, "Gujarat": 11034770, "MP": 6240096}], ["Fitness outfit", {"Pune": 18376481, "Gujarat": 12384072, "MP": 8516312}], ["Running", {"Pune": 13293837, "Gujarat": 15106268, "MP": 9540167}], ["Kids' cycling and urban gliding", {"Pune": 10761839, "Gujarat": 6598372, "MP": 4153546}], ["Swimming", {"Pune": 8695886, "Gujarat": 6308893, "MP": 3157654}], ["Trekking and climbing", {"Pune": 8286139, "Gujarat": 6336900, "MP": 3092580}]], "stores": [["Wakad", "Pune", 18365560, 1091799], ["Wagholi", "Pune", 13467178, 966525], ["Indore", "MP", 10493005, 821309], ["Amanora", "Pune", 9108824, 1066639], ["SGS Mall", "Pune", 8847234, 582129], ["Nexus", "Gujarat", 7690770, 679456], ["Surat", "Gujarat", 6986745, 611009], ["NIBM", "Pune", 6905437, 825462], ["Motera", "Gujarat", 5799730, 625710], ["Bhopal", "MP", 5758838, 653703], ["Rajkot", "Gujarat", 5562958, 521398], ["Baroda", "Gujarat", 4651545, 333568], ["Gwalior", "MP", 2511999, 347314]], "octSports": [["Hiking", 7160239, 0.78, 0.86], ["Cycling", 4883124, 1.24, 1.3], ["Fitness equipment", 4281725, 0.81, 0.96], ["Fitness outfit", 3069872, 0.76, 0.86], ["Running", 3051509, 0.79, 0.95], ["Kids' cycling and urban gliding", 1675924, 0.76, 0.92], ["Swimming", 1179961, 0.63, 0.85], ["Camping", 1004182, 0.92, 1.38], ["Trekking and climbing", 994103, 0.54, 0.58], ["Countrywear and dog", 883770, 0.87, 0.95], ["Hiring", 808511, 0.66, 0.86], ["Tennis and squash", 800793, 0.81, 0.79], ["Winter sports", 778121, 1.09, 1.11], ["Football and futsal", 756442, 0.76, 0.76], ["Golf", 656216, 0.7, 0.97]], "regions": [["Pune", 201530714], ["Rest of West (Surat, Baroda, Rajkot)", 98887625], ["Madhya Pradesh", 96168084], ["Ahmedabad", 52728796]], "totalTO": 4100000000};

/* My Store pages: each store's own page on decathlon.in (decathlon.in/store/<slug>), read from the site's store list on 29 Oct 2026.
   [slug, store, city, business unit, address, Monday hours, Google rating, Google reviews, store leader]. Screenshots in assets/img/mystore/. */
window.MY_STORES = [["wakad", "Wakad", "Pune", "Pune", "Vision One Mall, Tathawade Rd, Pimpri-Chinchwad 411033", "8:00 am - 10:00 pm", 4.5, 25610, "Faiz Mitha"], ["wagholi", "Wagholi", "Pune", "Pune", "Nagar Rd, next to Soyarik Garden, Wagholi 412207", "9:00 am - 9:00 pm", 4.6, 14423, "Pankaj Khot"], ["sgsmall", "SGS Mall", "Pune", "Pune", "SGS Mall, Lower Ground Floor, Moledina Rd, Camp 411001", "11:00 am - 10:00 pm", 4.7, 10430, "Ajinkya Nimbalkar"], ["nibm", "NIBM", "Pune", "Pune", "NIBM Post Office Rd, opp. Anandvan Forest, Kondhwa 411060", "11:00 am - 10:00 pm", 4.9, 5116, "Adrine Varghese"], ["amanoramall", "Amanora Mall", "Pune", "Pune", "Lower Ground Floor, Amanora Town Centre, Hadapsar 411028", "11:00 am - 10:00 pm", 4.7, 7338, "Pravin Rajan"], ["motera", "Motera", "Ahmedabad", "Gujarat", "SH 71, next to McDonald's, GIDC Bhat, Motera 380005", "10:00 am - 10:00 pm", 4.6, 15795, "Sumit Sahni"], ["nexusahmedabad", "Nexus Ahmedabad", "Ahmedabad", "Gujarat", "Nexus Ahmedabad One, Vastrapur 380015", "10:00 am - 10:00 pm", 4.6, 5959, "Bhanu Pratap"], ["dumas", "Surat, Dumas Road", "Surat", "Gujarat", "Dumas Rd, opposite Surat International Airport 395007", "10:00 am - 10:00 pm", 4.5, 11557, "Rishi Joshi"], ["vadodara", "Vadodara", "Vadodara", "Gujarat", "Gotri - Sevasi Rd, opp. Kabir Farms, Gotri 391101", "10:00 am - 10:00 pm", 4.6, 19702, "Ayusman Sahu"], ["rajkot", "Rajkot", "Rajkot", "Gujarat", "JP Sapphire, Race Course Rd, near GST Bhavan 360001", "10:00 am - 10:00 pm", 4.8, 2042, "Abhishek Pandya"], ["indore", "Indore", "Indore", "MP", "22/23 AB Rd, opp. Industry House, Old Palasia 452001", "10:00 am - 10:00 pm", 4.5, 12743, "Kuldeep Singh"], ["bhopal", "Bhopal", "Bhopal", "MP", "LG-29, DB Mall, Arera Hills", "11:00 am - 10:00 pm", 4.9, 1400, "Anjali Pandey"], ["gwalior", "Gwalior", "Gwalior", "MP", "Keshar Towers, Racecourse Rd, Keshar Bagh 474005", "11:00 am - 9:30 pm", 4.8, 1612, "Langston Vareed"]];

/* Adajan hoarding map (the team's Adajan Hoarding Map artifact, 29 Oct 2026): pre-opening outdoor plan for DSI Adajan,
   Pacific Solitaire, L.P. Savani Rd. sites: [board, place, lat, lon, listing, score 0-100 without cost, rate, role, top pick].
   hot: crowd hotspots, strongest first. pts: [place, group, category, lat, lon, area] from the team's catchment register, plus named sports places, schools, colleges and housing across Surat from OpenStreetMap (area = "OpenStreetMap", 31 Oct 2026).
   Pins are Google place pins near each board, not surveyed positions. */
window.ADAJAN = {"store": [21.1883, 72.7893], "dumas": [21.1186812, 72.7356244], "sites": [["B", "Madhuvan Circle, facing TGB", 21.1911293, 72.7883627, "Media Ant 79417", 86, "₹5,400 a day (offer; base ₹5,940)", "New store opening and directional. Junction board: 30 to 45 s read time, QR works.", 1], ["E", "Cable Bridge, above Star Bazaar", 21.1853571, 72.7938441, "Media Ant 79567", 85, "₹3,940 a day", "Brand awareness plus opening date. Main road, traffic from the Athwa side.", 1], ["A", "L.P. Savani Rd near Shell", 21.188592, 72.79034, "Media Ant 79398", 80, "Not listed", "Directional, last stretch to the store. Swap-in if B is taken.", 0], ["C", "Sardar Bridge towards Gujarat Gas Circle", 21.1923099, 72.8044049, "Media Ant 88645", 66, "₹7,875 a day", "Outer-ring awareness on the Athwa side.", 0], ["G", "Rander Rd, Rushabh Char Rasta", 21.2001197, 72.8041592, "Media Ant 79397", 57, "₹2,170 a day", "Awareness for Rander, the biggest untapped pincode (14% of walk-ins).", 0], ["F", "Anand Mahal Rd, Prime Arcade to Gujarat Gas", 21.1937837, 72.8018351, "SmartAds 13675", 57, "₹46,000 as listed (period unclear)", "Reserve only: dense residential road.", 0]], "hot": [["Madhuvan to TGB core", 21.191, 72.7859, "8 IT, 8 sports, 7 housing or school sites within 0.5 km. The strongest point, with the store and boards B and A on it."], ["Pal and Sportena", 21.1879, 72.7768, "1 IT, 6 sports, 4 housing sites within 0.5 km, 1.3 km west."], ["Green Residency and Royal Cricket Ground", 21.1995, 72.7893, "5 sports, 1 housing site within 0.5 km, 1.25 km north."], ["Akshar Jyot to SV Cricket Academy belt", 21.1923, 72.7956, "2 sports, 3 housing or school sites within 0.5 km, 0.8 km north-east."], ["Pal to Galaxy IT cluster", 21.182, 72.7845, "4 IT, 1 sports site within 0.5 km, 0.9 km south-west."]], "roads": [["L.P. Savani Rd, Madhuvan Circle to Cable Bridge", [[21.1911293, 72.7883627], [21.188592, 72.79034], [21.1853571, 72.7938441]]], ["Madhuvan Circle to Gujarat Gas Circle and Sardar Bridge", [[21.1911293, 72.7883627], [21.1937837, 72.8018351], [21.1923099, 72.8044049]]]], "comp": [["Nike", 21.1891846, 72.7899816], ["adidas", 21.1880321, 72.7900341], ["Puma", 21.1930978, 72.787472]], "pts": [["Fittest Human Dynasty", "sport", "Sports clubs & academies", 21.18772, 72.78974, "Adajan Gam"], ["United Soccer India Football Club", "sport", "Sports clubs & academies", 21.1844, 72.78908, "Adajan Gam"], ["Ved Yogshala Adajan", "sport", "Sports clubs & academies", 21.19087, 72.78558, "Madhuvan Circle"], ["Football Coaching in Surat (TGB)", "sport", "Sports clubs & academies", 21.19184, 72.78581, "LP Savani"], ["Cricket Coaching Center (C.C.C.)", "sport", "Sports clubs & academies", 21.19217, 72.78534, "TGB"], ["Vision Football Academy", "sport", "Sports clubs & academies", 21.19213, 72.78525, "TGB"], ["Fitmotivation by Shilpa Narang", "sport", "Sports clubs & academies", 21.18357, 72.78584, "Pal"], ["Kore Fitness", "sport", "Sports clubs & academies", 21.19371, 72.78643, "LP Savani"], ["Cult Gym Adajan", "sport", "Sports clubs & academies", 21.19374, 72.78646, "LP Savani"], ["Padukone Sports Management badminton acade", "sport", "Sports clubs & academies", 21.19403, 72.78662, "LP Savani"], ["Oneiros, Adajan", "sport", "Sports clubs & academies", 21.19468, 72.78749, "LP Savani"], ["SV Cricket Academy & Box Turf", "sport", "Sports clubs & academies", 21.19187, 72.79738, "Adajan Gam"], ["Lavanya Yog & Fitness Studio", "sport", "Sports clubs & academies", 21.19273, 72.78051, "New Pal Lake Rd"], ["Ubuntu Cricket Academy", "sport", "Sports clubs & academies", 21.19631, 72.78272, "TGB"], ["Kaps Cricket Academy (Sports Culture)", "sport", "Sports clubs & academies", 21.1963, 72.7827, "TGB"], ["Happy Football Academy", "sport", "Sports clubs & academies", 21.19752, 72.79693, "Adajan"], ["SMC Sports Complex", "sport", "Sports clubs & academies", 21.19658, 72.79893, "Muktanand Nagar"], ["Sportena – The Fit Stop", "sport", "Sports clubs & academies", 21.18806, 72.77598, "Adajan Gam"], ["Hustlers Health & Fitness", "sport", "Sports clubs & academies", 21.19952, 72.78339, "LP Savani"], ["KAPS Cricket Academy", "sport", "Sports clubs & academies", 21.19185, 72.80227, "Adajan Gam"], ["Happy Yogaz by Khushi", "sport", "Sports clubs & academies", 21.18613, 72.7754, "Galaxy Circle"], ["Football Association of Surat", "sport", "Sports clubs & academies", 21.20202, 72.78999, "Adajan Gam"], ["The Era Next Gen Sports", "sport", "Sports clubs & academies", 21.18396, 72.77408, "Pal"], ["Kratos LifeStyle", "sport", "Sports clubs & academies", 21.18668, 72.77253, "Pal"], ["The Surat Tennis Club", "sport", "Sports clubs & academies", 21.18185, 72.80523, "Athwa"], ["Sarita Sagar Sankul Trust", "sport", "Sports clubs & academies", 21.19132, 72.80721, "Under Sardar Bridge"], ["Spin Table Tennis Academy", "sport", "Sports clubs & academies", 21.1861, 72.80809, "Athwa (Parsi Gymkhana)"], ["Propel Racquet Academy", "sport", "Sports clubs & academies", 21.20083, 72.77567, "Pal"], ["Ravindra's Lawn Tennis Academy", "sport", "Sports clubs & academies", 21.17803, 72.76301, "Bhatha"], ["Samrat Sports Complex", "sport", "Sports clubs & academies", 21.1787, 72.76264, "Bhatha"], ["Yog Aaditri", "sport", "Sports clubs & academies", 21.20576, 72.76675, "Palanpur"], ["Gladiator Fitness & Gym", "sport", "Sports clubs & academies", 21.21404, 72.77529, "Palanpur"], ["Rander Sultaniya Gymkhana", "sport", "Sports clubs & academies", 21.21695, 72.79917, "Rander"], ["Rander Islam Gymkhana", "sport", "Sports clubs & academies", 21.21899, 72.79248, "Rander"], ["VNSGU Athletic Track", "sport", "Sports clubs & academies", 21.15367, 72.78956, "Udhna-Magdalla Rd"], ["SNB Sports Academy", "sport", "Sports clubs & academies", 21.24143, 72.78209, "Jahangirpura"], ["Oneiros, Ved Road", "sport", "Sports clubs & academies", 21.23773, 72.81981, "Ved Rd"], ["Kavi Kalapi Lake Garden", "sport", "Turfs, courts, pools, grounds & parks", 21.18901, 72.79435, "Adajan Gam"], ["Shanti Kunj Garden", "sport", "Turfs, courts, pools, grounds & parks", 21.19463, 72.78889, "TGB"], ["Swastik Party Plot", "sport", "Turfs, courts, pools, grounds & parks", 21.18667, 72.78266, "Adajan Gam"], ["SMC Pal Swimming Pool", "sport", "Turfs, courts, pools, grounds & parks", 21.18598, 72.78152, "Adajan Gam"], ["SMC Party Plot, Adajan", "sport", "Turfs, courts, pools, grounds & parks", 21.18976, 72.78074, "Adajan Gam"], ["CoPlay PickleUp, Galaxy Circle", "sport", "Turfs, courts, pools, grounds & parks", 21.19044, 72.78019, "Galaxy Circle"], ["Morarji Desai Garden", "sport", "Turfs, courts, pools, grounds & parks", 21.18999, 72.80065, "Adajan"], ["Bhagwan Shree Parshuram Garden", "sport", "Turfs, courts, pools, grounds & parks", 21.19899, 72.78597, "Green Valley Rd"], ["Crazy 11 Box Cricket, Pickleball & Badmint", "sport", "Turfs, courts, pools, grounds & parks", 21.19104, 72.77601, "Galaxy Circle"], ["Pal Lake Garden", "sport", "Turfs, courts, pools, grounds & parks", 21.19645, 72.77806, "Pal"], ["Jyotindra Dave Udyan", "sport", "Turfs, courts, pools, grounds & parks", 21.20204, 72.7914, "Adajan"], ["Royal Cricket Ground", "sport", "Turfs, courts, pools, grounds & parks", 21.20246, 72.78996, "Adajan"], ["Riverfront walkway (Tapi)", "sport", "Turfs, courts, pools, grounds & parks", 21.18435, 72.80392, "Adajan / Rander"], ["SMC Vir Savarkar Swimming Pool", "sport", "Turfs, courts, pools, grounds & parks", 21.20252, 72.79225, "Honey Park Rd"], ["Crick Pick Sports Arena", "sport", "Turfs, courts, pools, grounds & parks", 21.19059, 72.77269, "Pal"], ["Pickball Club", "sport", "Turfs, courts, pools, grounds & parks", 21.18679, 72.77202, "Gaurav Path"], ["Ballin Turf and Pickleball", "sport", "Turfs, courts, pools, grounds & parks", 21.19424, 72.77193, "Baghban Circle, Pal"], ["DM Arena Sports Ground", "sport", "Turfs, courts, pools, grounds & parks", 21.18002, 72.77098, "Bhatha"], ["The Piickle Club", "sport", "Turfs, courts, pools, grounds & parks", 21.19376, 72.76913, "Gaurav Path"], ["Sportsspark Adajan Turf", "sport", "Turfs, courts, pools, grounds & parks", 21.20566, 72.80343, "Adajan Patiya"], ["Dissotto Turf", "sport", "Turfs, courts, pools, grounds & parks", 21.20862, 72.80416, "New Rander Rd"], ["Moti Baug Party Plot", "sport", "Turfs, courts, pools, grounds & parks", 21.20744, 72.77121, "Palanpur"], ["Swami Vivekanand Sports Ground (SMC)", "sport", "Turfs, courts, pools, grounds & parks", 21.2139, 72.79541, "Rander"], ["Top Field Pickleball", "sport", "Turfs, courts, pools, grounds & parks", 21.20649, 72.76484, "Shavion Circle, Gaurav"], ["L P Savani Box Cricket", "sport", "Turfs, courts, pools, grounds & parks", 21.21377, 72.77318, "Palanpur"], ["L. P. Savani Juniors – Pal", "fam", "Schools & preschools", 21.18677, 72.77946, "Pal Gam Rd"], ["Kiddos International Pre School", "fam", "Schools & preschools", 21.19468, 72.79697, "Adajan"], ["Vatsalya International Preschool – NEST", "fam", "Schools & preschools", 21.1962, 72.78192, "LP Savani"], ["Shree Swaminarayan H.V. Vidyalaya", "fam", "Schools & preschools", 21.20091, 72.7965, "Adajan"], ["L.P. Savani Vidhyabhavan", "fam", "Schools & preschools", 21.20074, 72.78153, "LP Savani Circle"], ["SMC School, Athwalines", "fam", "Schools & preschools", 21.17461, 72.79859, "Athwa"], ["Lourdes Convent High School", "fam", "Schools & preschools", 21.17718, 72.80212, "Athwa"], ["Shreyas School", "fam", "Schools & preschools", 21.17524, 72.80271, "Athwa"], ["Prabhat Tara Public School", "fam", "Schools & preschools", 21.20604, 72.79482, "Rander Rd"], ["SSET CBSE School", "fam", "Schools & preschools", 21.20909, 72.79214, "Rander Rd"], ["Ryan International School", "fam", "Schools & preschools", 21.20501, 72.80318, "Adajan Patiya"], ["Dream High International Pre School", "fam", "Schools & preschools", 21.2043, 72.80479, "Adajan Patiya"], ["Seven Steps School", "fam", "Schools & preschools", 21.20673, 72.77727, "Palanpur Canal Rd"], ["Kids Planet English School", "fam", "Schools & preschools", 21.21005, 72.79481, "Rander Rd"], ["L.P. Savani International School", "fam", "Schools & preschools", 21.19924, 72.76793, "Gaurav Path, Pal"], ["St. Xavier's High School", "fam", "Schools & preschools", 21.17517, 72.80997, "Ghod Dod Rd"], ["Wonder Star School", "fam", "Schools & preschools", 21.21232, 72.79783, "Rander"], ["Earth Junior", "fam", "Schools & preschools", 21.20693, 72.77072, "Palanpur"], ["Divine Child High School", "fam", "Schools & preschools", 21.17464, 72.81249, "Ghod Dod Rd"], ["Air International Preschool", "fam", "Schools & preschools", 21.2114, 72.77322, "Palanpur"], ["Shree Jalaram International School (SJIS)", "fam", "Schools & preschools", 21.2109, 72.7698, "Gaurav Path, Palanpur"], ["L P Savani School, Palanpur", "fam", "Schools & preschools", 21.21393, 72.77326, "Palanpur"], ["Gurukrupa Vidhyalaya", "fam", "Schools & preschools", 21.22188, 72.78675, "Morabhagal, Rander"], ["L. P. Savani Academy", "fam", "Schools & preschools", 21.14321, 72.78336, "Vesu"], ["Podar International School (Jahangirabad)", "fam", "Schools & preschools", 21.23243, 72.77676, "Jahangirabad"], ["B.R.C.M. College of Business Administratio", "fam", "Colleges & universities", 21.17655, 72.79748, "Athwa"], ["Navyug Commerce College", "fam", "Colleges & universities", 21.20133, 72.80044, "Rander Rd"], ["Navyug Science College", "fam", "Colleges & universities", 21.2014, 72.80147, "Rander Rd"], ["Navyug Arts College", "fam", "Colleges & universities", 21.20228, 72.80035, "Rander Rd"], ["Sir P.T. Sarvajanik College of Science", "fam", "Colleges & universities", 21.18251, 72.80716, "Athwa"], ["Sarvajanik College of Engineering & Techno", "fam", "Colleges & universities", 21.18199, 72.80864, "Athwa"], ["SVNIT (Sardar Vallabhbhai National Institu", "fam", "Colleges & universities", 21.16712, 72.7852, "Ichchhanath"], ["SS Ghandhy Degree Engineering College", "fam", "Colleges & universities", 21.18059, 72.81306, "Majura Gate"], ["Dr. S. & S.S. Gandhi College of Engineerin", "fam", "Colleges & universities", 21.18054, 72.81721, "Majura Gate"], ["Veer Narmad South Gujarat University (VNSG", "fam", "Colleges & universities", 21.15352, 72.78319, "Udhna-Magdalla Rd"], ["AMExemplar Services LLP", "it", "IT, offices & corporate", 21.18888, 72.78912, "LP Savani"], ["Vision Business Hub", "it", "IT, offices & corporate", 21.1877, 72.79002, "LP Savani"], ["UniQual iTech", "it", "IT, offices & corporate", 21.18912, 72.78999, "LP Savani"], ["White Orchid", "it", "IT, offices & corporate", 21.18942, 72.78968, "LP Savani"], ["The Address, Velocity Business Hub", "it", "IT, offices & corporate", 21.19123, 72.78836, "LP Savani"], ["Sumerru Business Corner", "it", "IT, offices & corporate", 21.18714, 72.78584, "Adajan Gam"], ["Velocity Business Hub", "it", "IT, offices & corporate", 21.19213, 72.78747, "TGB"], ["Crest Infosystems Pvt. Ltd.", "it", "IT, offices & corporate", 21.19297, 72.7877, "LP Savani"], ["The Boulevard", "it", "IT, offices & corporate", 21.18953, 72.7828, "Green City Rd"], ["Triveni Global Software Services", "it", "IT, offices & corporate", 21.18324, 72.78363, "Pal RTO"], ["VBinfotech", "it", "IT, offices & corporate", 21.18378, 72.78308, "Pal RTO"], ["'Helios' The Business", "it", "IT, offices & corporate", 21.19001, 72.77952, "Galaxy Circle"], ["Casepoint Pvt. Ltd.", "it", "IT, offices & corporate", 21.1836, 72.7803, "Pal-Umra Bridge"], ["Rio Empire", "it", "IT, offices & corporate", 21.18255, 72.78043, "Pal"], ["AM/NS Steel India, Adajan office", "it", "IT, offices & corporate", 21.20506, 72.79477, "Adajan"], ["Pragati IT Park", "it", "IT, offices & corporate", 21.23457, 72.87127, "Mota Varachha"], ["Reliance Industries, Hazira Manufacturing ", "it", "IT, offices & corporate", 21.17489, 72.66818, "Hazira"], ["Larsen & Toubro (East Campus)", "it", "IT, offices & corporate", 21.16054, 72.66473, "Hazira"], ["AM/NS Township", "it", "IT, offices & corporate", 21.13004, 72.65682, "Hazira"], ["ArcelorMittal Nippon Steel India (AM/NS)", "it", "IT, offices & corporate", 21.12771, 72.65558, "Hazira"], ["Garden Valley Society", "fam", "Residential societies", 21.18776, 72.7923, "Adajan Gam"], ["Western Somchintamani Residency", "fam", "Residential societies", 21.18745, 72.78562, "Adajan Gam"], ["Vasupujya Residency", "fam", "Residential societies", 21.19199, 72.78933, "TGB"], ["Western Arena Housing Society", "fam", "Residential societies", 21.18973, 72.78564, "Green City Rd"], ["Green Arcade", "fam", "Residential societies", 21.19144, 72.78691, "LP Savani"], ["Aagman Residency", "fam", "Residential societies", 21.19278, 72.78817, "TGB"], ["Shankheshwara Heights", "fam", "Residential societies", 21.18721, 72.78427, "Pal"], ["Pratham Ganesa", "fam", "Residential societies", 21.19075, 72.78243, "Green City Rd"], ["Neelkanth Residency", "fam", "Residential societies", 21.18972, 72.78001, "Green City Rd"], ["Akshar Jyot Society", "fam", "Residential societies", 21.19196, 72.7981, "Hazira-Adajan Rd"], ["New Suncity Apartments", "fam", "Residential societies", 21.19581, 72.79578, "Anand Mahal Ln, Adajan"], ["Green Residency", "fam", "Residential societies", 21.19981, 72.79103, "Honey Park, Adajan"], ["Shree Bharti Royal Residency", "fam", "Residential societies", 21.19028, 72.77601, "Green City Rd, Pal"], ["Suryam Horizon", "fam", "Residential societies", 21.1869, 72.77553, "Pal (Nishal Circle)"], ["The Pursuit of Happiness (Shaligram)", "fam", "Residential societies", 21.19814, 72.7743, "Monarch Rd, Pal"], ["La-Helios", "fam", "Residential societies", 21.20093, 72.77436, "TP 10, Pal"], ["Shivam Apartments", "fam", "Residential societies", 21.20464, 72.80033, "Rander Rd"], ["Shubham Sky", "fam", "Residential societies", 21.19371, 72.76884, "Gaurav Path, Pal"], ["Ultimate", "fam", "Residential societies", 21.20551, 72.80457, "New Rander Rd"], ["Sangini Emperia", "fam", "Residential societies", 21.20907, 72.80184, "Rander"], ["Megh Dhanush Apartments", "fam", "Residential societies", 21.17141, 72.80784, "Ghod Dod Rd"], ["Vrundavan Residency", "fam", "Residential societies", 21.20694, 72.77271, "Palanpur"], ["Silver Plaza", "fam", "Residential societies", 21.21284, 72.79289, "Palanpur Patia"], ["Soham Pride Residence", "fam", "Residential societies", 21.20059, 72.76475, "Gaurav Path"], ["Stuti Highland", "fam", "Residential societies", 21.20865, 72.77003, "Palanpur"], ["Crystal Heights", "fam", "Residential societies", 21.21171, 72.77007, "Palanpur"], ["Santvan Seron", "fam", "Residential societies", 21.21065, 72.76593, "Gaurav Path, Palanpur"], ["Sangath Homes", "fam", "Residential societies", 21.21784, 72.76718, "Gaurav Path"], ["Rajhans Residency", "fam", "Residential societies", 21.22941, 72.78794, "Jahangirabad"], ["Aangan Residency", "fam", "Residential societies", 21.23417, 72.78528, "Jahangirpura"], ["Union Residency", "fam", "Residential societies", 21.14855, 72.76439, "Piplod"], ["Tapidas & Tulsidas Varajdas School", "fam", "School", 21.18607, 72.8124, "OpenStreetMap"], ["Katargam Sketing Rink", "sport", "Sports centre", 21.21772, 72.83839, "OpenStreetMap"], ["Govt. School", "fam", "School", 21.20848, 72.82575, "OpenStreetMap"], ["MADHAVKUNJ SOCIETY", "fam", "Housing", 21.23206, 72.8163, "OpenStreetMap"], ["Lancer Army School", "fam", "School", 21.1592, 72.7716, "OpenStreetMap"], ["Happy Palace", "fam", "Housing", 21.20437, 72.85152, "OpenStreetMap"], ["Shri O.H. Nazar Ayurved College", "fam", "College", 21.20694, 72.83951, "OpenStreetMap"], ["Vinay International School", "fam", "School", 21.15324, 72.85886, "OpenStreetMap"], ["Ambaba Commerce College", "fam", "College", 21.18059, 72.92086, "OpenStreetMap"], ["Model Town Park", "fam", "Housing", 21.19221, 72.87936, "OpenStreetMap"], ["MBH fitness gym", "sport", "Gym or fitness centre", 21.22141, 72.85792, "OpenStreetMap"], ["Dev - Raj Residency", "fam", "Housing", 21.15379, 72.79794, "OpenStreetMap"], ["C.B. Patel Cricket Stadium", "sport", "Court or pitch", 21.15229, 72.7882, "OpenStreetMap"], ["Akshat’s Kingdom", "fam", "Housing", 21.15539, 72.79923, "OpenStreetMap"], ["Sneh Villa Apartment", "fam", "Housing", 21.14667, 72.79249, "OpenStreetMap"], ["OFIRA SIESTA", "fam", "Housing", 21.14512, 72.78922, "OpenStreetMap"], ["A tower Rajhans Cremena", "fam", "Housing", 21.14084, 72.78651, "OpenStreetMap"], ["Shreenidhi Residency", "fam", "Housing", 21.23546, 72.87712, "OpenStreetMap"], ["Admin Building", "fam", "College", 21.13204, 72.718, "OpenStreetMap"], ["D-3 Classroom Complex", "fam", "College", 21.13331, 72.71852, "OpenStreetMap"], ["D-6 Civil Engineering Department", "fam", "College", 21.13434, 72.71757, "OpenStreetMap"], ["Hostel Playground", "fam", "College", 21.13193, 72.71508, "OpenStreetMap"], ["radhe residency", "fam", "Housing", 21.24223, 72.8782, "OpenStreetMap"], ["Lords Institute of Management", "fam", "College", 21.20068, 72.8406, "OpenStreetMap"], ["Pandit Dindayal Upadhyay Indoor Stadium", "sport", "Stadium", 21.17662, 72.8011, "OpenStreetMap"], ["Vanita Vishram School", "fam", "School", 21.18318, 72.81087, "OpenStreetMap"], ["Sardar Vallabhbhai National Institute of Technology", "fam", "University", 21.16332, 72.78524, "OpenStreetMap"], ["K.V.-3", "fam", "School", 21.14086, 72.75253, "OpenStreetMap"], ["Krida Kendra", "sport", "Sports centre", 21.14156, 72.75199, "OpenStreetMap"], ["Lalbhai Contractor Stadium", "sport", "Sports centre", 21.15534, 72.76881, "OpenStreetMap"], ["Delhi Public School", "fam", "School", 21.12404, 72.72382, "OpenStreetMap"], ["Samarth Park", "fam", "Housing", 21.13728, 72.7546, "OpenStreetMap"], ["Sunshine appartment", "fam", "Housing", 21.13736, 72.75723, "OpenStreetMap"], ["ONGC Colony Phase-2", "fam", "Housing", 21.13432, 72.76331, "OpenStreetMap"], ["ONGC Colony Phase-1", "fam", "Housing", 21.14176, 72.75068, "OpenStreetMap"], ["Director's Bungalow", "fam", "Housing", 21.16613, 72.78715, "OpenStreetMap"], ["Himgiri Bungalows", "fam", "Housing", 21.16082, 72.77579, "OpenStreetMap"], ["Parimal Rana Old House", "fam", "Housing", 21.19657, 72.83882, "OpenStreetMap"], ["Parth Complex", "fam", "Housing", 21.22362, 72.8244, "OpenStreetMap"], ["Vivekanand commerce college", "fam", "College", 21.24972, 72.78539, "OpenStreetMap"], ["Ashirwad palace", "sport", "Swimming pool", 21.16694, 72.81041, "OpenStreetMap"], ["Anand Row Houses", "fam", "Housing", 21.19253, 72.79507, "OpenStreetMap"], ["Rustampura swimming pool", "sport", "Swimming pool", 21.18555, 72.82945, "OpenStreetMap"], ["milan bungalows", "fam", "Housing", 21.15449, 72.76592, "OpenStreetMap"], ["C.C Shah Sarvajanik English High School", "fam", "School", 21.17512, 72.79255, "OpenStreetMap"], ["Orchid Greens", "fam", "Housing", 21.21262, 72.77408, "OpenStreetMap"], ["The Laurels", "fam", "Housing", 21.14927, 72.79255, "OpenStreetMap"], ["Ashwamegh vilaa", "fam", "Housing", 21.21468, 72.88219, "OpenStreetMap"], ["Buidling A", "fam", "Housing", 21.21608, 72.85121, "OpenStreetMap"], ["Swapn residency", "fam", "Housing", 21.20943, 72.88981, "OpenStreetMap"], ["Panchnath residency", "fam", "Housing", 21.20921, 72.88173, "OpenStreetMap"], ["Royal heaven", "fam", "Housing", 21.2132, 72.88326, "OpenStreetMap"], ["SVNIT basketball court", "sport", "Court or pitch", 21.15977, 72.78622, "OpenStreetMap"], ["SMC Swimming Pool", "sport", "Swimming pool", 21.22476, 72.88385, "OpenStreetMap"], ["Muktanand Society", "fam", "Housing", 21.14543, 72.78334, "OpenStreetMap"], ["khebar palace apartment", "fam", "Housing", 21.19989, 72.82484, "OpenStreetMap"], ["Satadhar Society", "fam", "Housing", 21.2215, 72.85173, "OpenStreetMap"], ["Intercity Township Society", "fam", "Housing", 21.19095, 72.85732, "OpenStreetMap"], ["Abhilasha Heights", "fam", "Housing", 21.19098, 72.85982, "OpenStreetMap"], ["Shreepad Seasons", "fam", "Housing", 21.20989, 72.76792, "OpenStreetMap"], ["Model Town", "fam", "Housing", 21.18761, 72.86027, "OpenStreetMap"], ["Satyam Apartment", "fam", "Housing", 21.20339, 72.79923, "OpenStreetMap"], ["Rajhans Grandezza", "fam", "Housing", 21.15034, 72.79353, "OpenStreetMap"], ["Capital Life", "fam", "Housing", 21.15107, 72.79221, "OpenStreetMap"], ["Poddar Residency", "fam", "Housing", 21.1504, 72.79081, "OpenStreetMap"], ["cellestial dreams", "fam", "Housing", 21.1462, 72.78756, "OpenStreetMap"], ["Siddhanath Mahadev Society", "fam", "Housing", 21.20643, 72.79639, "OpenStreetMap"], ["Green Park Society", "fam", "Housing", 21.21657, 72.85868, "OpenStreetMap"], ["Veer Narmad South Gujarat University", "fam", "University", 21.15485, 72.78732, "OpenStreetMap"], ["Sai Villa Levi's Bungalows", "fam", "Housing", 21.23409, 72.7773, "OpenStreetMap"], ["Heavenly Heights", "fam", "Housing", 21.16469, 72.80979, "OpenStreetMap"], ["Basketball Court - Arena", "sport", "Court or pitch", 21.1247, 72.72443, "OpenStreetMap"], ["shivant d", "fam", "Housing", 21.25123, 72.8918, "OpenStreetMap"], ["Nilkanth Luxuria", "fam", "Housing", 21.23357, 72.91355, "OpenStreetMap"], ["shital builing", "fam", "Housing", 21.1785, 72.83685, "OpenStreetMap"], ["Ajitnath Awas", "fam", "Housing", 21.20004, 72.80329, "OpenStreetMap"], ["Rajhans Altezza", "fam", "Housing", 21.14074, 72.78446, "OpenStreetMap"], ["C B Patel Tennis Court", "sport", "Court or pitch", 21.13932, 72.78745, "OpenStreetMap"], ["Ratna Jyoti Apartments", "fam", "Housing", 21.14088, 72.77426, "OpenStreetMap"], ["SMC Swimming Pool", "sport", "Swimming pool", 21.15095, 72.80092, "OpenStreetMap"], ["Nest House", "fam", "Housing", 21.15156, 72.80096, "OpenStreetMap"], ["CB Patel Sports Complex", "sport", "Court or pitch", 21.15102, 72.79912, "OpenStreetMap"], ["Sahajanand Hills", "fam", "Housing", 21.20653, 72.76816, "OpenStreetMap"], ["Sagar Complex", "fam", "Housing", 21.19781, 72.79628, "OpenStreetMap"], ["Sir KP Commerce College Ground", "fam", "College", 21.17982, 72.80487, "OpenStreetMap"], ["Suman High School No 5", "fam", "School", 21.16571, 72.85828, "OpenStreetMap"], ["C.K. Pithawala College of Engineering and Technology", "fam", "College", 21.13319, 72.71603, "OpenStreetMap"], ["Sports Complex", "sport", "Sports club", 21.13283, 72.71875, "OpenStreetMap"], ["Shiv Darshan Row House 2", "fam", "Housing", 21.22493, 72.8087, "OpenStreetMap"], ["Nagar Primary School No 60", "fam", "School", 21.19775, 72.83666, "OpenStreetMap"], ["શ્રી કે. સી. કોઠારી સેકન્ડરી એન્ડ હાઈ સેકન્ડરી સ્કૂલ ( સાધના સ્કૂલ)", "fam", "School", 21.2131, 72.86182, "OpenStreetMap"], ["White House", "fam", "Housing", 21.15552, 72.77725, "OpenStreetMap"], ["SD Jain Sports Ground", "fam", "School", 21.15205, 72.77234, "OpenStreetMap"], ["Katargam Sketing Rink", "fam", "School", 21.21772, 72.83839, "OpenStreetMap"], ["Smt. R. B. Shah Mahavir Super Speciality Hospital / Shri Bachubhai Dahyabhai Mehta Mahavir Heart Institute", "fam", "School or institute", 21.18418, 72.81394, "OpenStreetMap"], ["DWTI - Prabhu General Hospital and Bankers Heart Institute", "fam", "School or institute", 21.16773, 72.77829, "OpenStreetMap"], ["P.P.Savani Heart Institute and Multispeciality Hospital", "fam", "School or institute", 21.22081, 72.87379, "OpenStreetMap"], ["Bhadra Memorial Eye Institute", "fam", "School or institute", 21.19668, 72.80495, "OpenStreetMap"], ["Government Medical College and New Civil  Hospital, Surat", "fam", "School or institute", 21.17818, 72.82026, "OpenStreetMap"], ["Vishalakshi Netramandip Eye Hospital", "fam", "School or institute", 21.21335, 72.82856, "OpenStreetMap"], ["Miracle Kids ICU", "fam", "School or institute", 21.19326, 72.86998, "OpenStreetMap"], ["LP Savani School", "fam", "School or institute", 21.19969, 72.78284, "OpenStreetMap"], ["Gaushala", "fam", "School or institute", 21.21945, 72.85204, "OpenStreetMap"], ["Convention Center;કન્વેન્શન સેન્ટર", "fam", "School or institute", 21.12206, 72.79936, "OpenStreetMap"], ["C.K. Pithawala College Of Engineering and Technology", "fam", "School or institute", 21.13138, 72.71892, "OpenStreetMap"], ["SoftBuzz Computer Classes", "fam", "Coaching", 21.19309, 72.78052, "OpenStreetMap"], ["NEST Pre-School & CSC Bal Vidyalaya", "fam", "Pre-school", 21.20197, 72.77834, "OpenStreetMap"], ["C B Patel Computer College", "fam", "School or institute", 21.15208, 72.799, "OpenStreetMap"], ["G.D.Goenka International School", "fam", "School or institute", 21.15429, 72.79129, "OpenStreetMap"], ["University Lake", "fam", "School or institute", 21.1515, 72.78613, "OpenStreetMap"], ["Elite Fashion Institute", "fam", "School or institute", 21.17125, 72.79085, "OpenStreetMap"], ["Mangetic Institute", "fam", "School or institute", 21.1514, 72.84498, "OpenStreetMap"], ["alfa modern school", "fam", "School or institute", 21.12416, 72.85086, "OpenStreetMap"], ["ST PAUL PUBLIC SCHOOL", "fam", "School or institute", 21.12487, 72.86178, "OpenStreetMap"], [".mary matha school", "fam", "School or institute", 21.17252, 72.86277, "OpenStreetMap"], [".sunrays school", "fam", "School or institute", 21.15374, 72.84472, "OpenStreetMap"], [".nagar primary school", "fam", "School or institute", 21.14982, 72.83898, "OpenStreetMap"], [".suman high school", "fam", "School or institute", 21.14807, 72.83637, "OpenStreetMap"], [".school", "fam", "School or institute", 21.1467, 72.86885, "OpenStreetMap"], [".school", "fam", "School or institute", 21.14702, 72.87095, "OpenStreetMap"], ["College Event Parking Ground", "fam", "School or institute", 21.1312, 72.71741, "OpenStreetMap"], ["College Canteen", "fam", "School or institute", 21.13307, 72.7179, "OpenStreetMap"], ["CKPCET Cricket Ground", "fam", "College", 21.13203, 72.71933, "OpenStreetMap"], ["Akhand Anand School/College", "fam", "School or institute", 21.22142, 72.82201, "OpenStreetMap"], ["Swaminarayan Temple/School", "fam", "School or institute", 21.24404, 72.82069, "OpenStreetMap"], ["V.N.Godhani School", "fam", "School or institute", 21.22039, 72.83311, "OpenStreetMap"], ["School (no name in OpenStreetMap)", "fam", "School", 21.2118, 72.77997, "OpenStreetMap"], ["Smt. Z.S. Patel College of Management", "fam", "College", 21.2096, 72.78108, "OpenStreetMap"], ["P.P. Savani Vidhyalay", "fam", "School", 21.21763, 72.85957, "OpenStreetMap"], ["G. G. Zadafiya Vidhyalay", "fam", "School", 21.22069, 72.85113, "OpenStreetMap"], ["School (no name in OpenStreetMap)", "fam", "School", 21.23113, 72.82952, "OpenStreetMap"], ["Pinkan Blue Preschool Surat", "fam", "Pre-school", 21.17021, 72.79463, "OpenStreetMap"], ["Angel's Ink Tattoo & Piercing & Training Institute", "fam", "School or institute", 21.20166, 72.78531, "OpenStreetMap"], ["Harekrushna Vidhyalaya", "fam", "School", 21.21256, 72.88891, "OpenStreetMap"], ["College (no name in OpenStreetMap)", "fam", "College", 21.25975, 72.90414, "OpenStreetMap"], ["Samrithi English Medium School", "fam", "School", 21.1679, 72.83469, "OpenStreetMap"], ["School (no name in OpenStreetMap)", "fam", "School", 21.18623, 72.82058, "OpenStreetMap"], ["University (no name in OpenStreetMap)", "fam", "University", 21.22282, 72.87705, "OpenStreetMap"], ["College (no name in OpenStreetMap)", "fam", "College", 21.22209, 72.87675, "OpenStreetMap"], ["School (no name in OpenStreetMap)", "fam", "School", 21.22241, 72.87529, "OpenStreetMap"], ["School (no name in OpenStreetMap)", "fam", "School", 21.22184, 72.87405, "OpenStreetMap"], ["College (no name in OpenStreetMap)", "fam", "College", 21.22348, 72.87773, "OpenStreetMap"], ["School (no name in OpenStreetMap)", "fam", "School", 21.19055, 72.86227, "OpenStreetMap"], ["School (no name in OpenStreetMap)", "fam", "School", 21.187, 72.81082, "OpenStreetMap"], ["School (no name in OpenStreetMap)", "fam", "School", 21.18777, 72.79942, "OpenStreetMap"], ["School (no name in OpenStreetMap)", "fam", "School", 21.20377, 72.78393, "OpenStreetMap"], ["School (no name in OpenStreetMap)", "fam", "School", 21.19494, 72.78749, "OpenStreetMap"], ["School (no name in OpenStreetMap)", "fam", "School", 21.19742, 72.78522, "OpenStreetMap"], ["ALLEN Career Institute", "fam", "School or institute", 21.14613, 72.78592, "OpenStreetMap"], ["P P Savani University- Vesu, Surat NIC Campus", "fam", "School or institute", 21.13853, 72.77399, "OpenStreetMap"], ["University (no name in OpenStreetMap)", "fam", "University", 21.15418, 72.79069, "OpenStreetMap"], ["University (no name in OpenStreetMap)", "fam", "University", 21.15508, 72.78946, "OpenStreetMap"], ["University (no name in OpenStreetMap)", "fam", "University", 21.15347, 72.78898, "OpenStreetMap"], ["College (no name in OpenStreetMap)", "fam", "College", 21.17928, 72.81338, "OpenStreetMap"], ["College (no name in OpenStreetMap)", "fam", "College", 21.17929, 72.81524, "OpenStreetMap"], ["College (no name in OpenStreetMap)", "fam", "College", 21.17898, 72.817, "OpenStreetMap"], ["S.D Planets", "fam", "Pre-school", 21.15166, 72.77317, "OpenStreetMap"]], "link": "https://claude.ai/artifact/KjC3d6kGs7wYJ2sCGozgw6"};

/* Krishna 360 Media LLP outdoor proposal, 31 Oct 2026 (OOH_Proposal_31-10-26.pdf + OOH_Pics_31-10-26.pdf): 22 Surat billboards.
   [site no, place, size ft, sq ft, lit (BL back-lit, FL front-lit), ₹ a month, printing + mounting ₹ one-off, available from, lat, lon, pin source, score, km from Adajan, verdict].
   Pins: GPS = the photo's GPS stamp; known pin = from the Adajan map or our register; approx = from the named road or landmark.
   Score /100 (ours): crowd within 1 km from the Adajan register 40, closeness to Adajan 25, near a crowd hotspot 15, size 10, faces L P Savani 10.
   18% GST extra; monthly in advance; no cancellation in the contract period. */
window.ADAJAN.k360 = [[1, "L P Savani Road near Nirmal Hospital", "20 x 10", 200, "BL", 125000, 5000, "Available", 21.1955, 72.7843, "approx", 79, 1.0, "pick"], [10, "Pal walkway, Galaxy Circle", "20 x 10", 200, "BL", 125000, 5000, "1 Nov", 21.19044, 72.78019, "approx", 76, 1.0, "alt"], [16, "Galaxy Circle, Adajan - Pal Gam", "20 x 10", 200, "BL", 80000, 5000, "Available", 21.18996, 72.779085, "GPS", 72, 1.1, "pick"], [6, "Adajan Honey Park Road facing L P Savani", "20 x 10", 200, "BL", 125000, 5000, "1 Nov", 21.1975, 72.7862, "approx", 71, 1.1, "alt"], [2, "Adajan D-Mart", "20 x 20", 400, "BL", 151000, 10000, "9 Nov", 21.2008, 72.7912, "approx", 55, 1.4, ""], [20, "Adajan near D-Mart, Honey Park Road", "20 x 10", 200, "BL", 85000, 10000, "Available", 21.2002, 72.7905, "approx", 55, 1.3, ""], [8, "Sardar Bridge above Everest, towards Gujarat Gas Circle", "40 x 30", 1200, "FL", 225000, 16200, "Available", 21.19231, 72.804405, "known pin", 54, 1.6, "scale"], [9, "Cable-stayed bridge junction near Star Bazaar, facing L P Savani", "20 x 10", 200, "BL", 125000, 5000, "2 Nov", 21.185357, 72.793844, "known pin", 54, 0.6, "pick"], [19, "Adajan near Pal Lake Circle", "20 x 10", 200, "BL", 85000, 10000, "Available", 21.19645, 72.77806, "known pin", 51, 1.5, ""], [13, "Rander Road near Navyug College", "40 x 20", 800, "FL", 151000, 10800, "1 Nov", 21.20133, 72.80044, "known pin", 44, 1.9, ""], [3, "Anand Mahal Road, Prime Arcade junction", "30 x 20", 600, "BL", 175000, 15000, "Available", 21.193784, 72.801835, "known pin", 41, 1.4, ""], [14, "Adajan Deepa Complex towards Gujarat Gas Circle", "15 x 15", 225, "BL", 151000, 5625, "Available", 21.196266, 72.805247, "GPS", 35, 1.9, ""], [18, "Near Tekarawala School, Palanpur Patia", "20 x 20", 400, "BL", 85000, 10000, "Available", 21.208821, 72.793824, "GPS", 35, 2.3, ""], [22, "Adajan Canal Road, Palanpur Jakatnaka junction, facing L P Savani", "20 x 10", 200, "BL", 95000, 5000, "Available", 21.206, 72.7752, "approx", 35, 2.5, ""], [5, "SVNIT Pal Bridge near Umra, facing the bridge", "20 x 20", 400, "BL", 151000, 10000, "Available", 21.1745, 72.7832, "approx", 29, 1.7, "skip"], [11, "Palanpur Patiya Jakatnaka facing Canal Road", "20 x 20", 400, "FL", 60000, 5400, "13 Nov", 21.2065, 72.7745, "approx", 27, 2.5, ""], [15, "Adajan Patiya near Dhanmora FOB", "15 x 20", 300, "BL", 75000, 7500, "5 Nov", 21.2048, 72.804, "approx", 24, 2.4, ""], [12, "Pal Ugat canal, Nirvana Shopping opp. Pantaloons near D-Mart", "20 x 10", 200, "BL", 125000, 5000, "2 Nov", 21.2085, 72.77, "approx", 22, 3.0, ""], [4, "Pal Gaurav Path facing Pal Haveli", "20 x 20", 400, "BL", 151000, 10000, "4 Nov", 21.1965, 72.7665, "approx", 21, 2.5, "skip"], [21, "Pal - Umra Road towards Piplod, SVNIT Circle", "20 x 20", 400, "BL", 225000, 10000, "5 Nov", 21.166, 72.7855, "approx", 16, 2.5, "skip"], [7, "Jilani Bridge facing Katargam", "20 x 20", 400, "FL", 65000, 5400, "2 Nov", 21.2195, 72.8125, "approx", 8, 4.2, "skip"], [17, "Subhash Garden, Morabhagal", "20 x 10", 200, "BL", 80000, 5000, "Available", 21.227693, 72.778874, "GPS", 7, 4.5, "skip"]];

/* Surat city hotspots, the whole city, not only the Decathlon catchments (31 Oct 2026). [place, type, lat, lon, note].
   type: live (where people live), work (where they work), shop (shopping and leisure), move (stations and airport).
   Pins from OpenStreetMap for landmarks and areas (area pins are a central point); Adajan, Pragati IT Park, Hazira and the venues from the Adajan hoarding map.
   venues: [venue, lat, lon, Google reviews] from the Adajan hoarding map. */
window.ADAJAN.city = [["Katargam", "live", 21.22882, 72.82531, "6.46 lakh people (Adajan hoarding map), the most populous area on it; no Decathlon nearby."], ["Rander", "live", 21.21607, 72.79975, "2.5 lakh people; 14% of the Adajan plan's walk-ins, only 1.9% already shop at Dumas."], ["Adajan and Pal", "live", 21.1883, 72.7893, "Surat's #1 living area by sports spend (₹235 Cr); the new store opens here."], ["Vesu and VIP Road", "live", 21.13711, 72.78868, "Premium homes; 64% of homes in Vesu and Athwa already shop at Dumas."], ["Piplod", "live", 21.16521, 72.77575, "Affluent belt between Dumas Road and Athwa, around Piplod Lake."], ["Varachha", "live", 21.21301, 72.85726, "Dense diamond-worker neighbourhoods east of the river; far from both stores."], ["Mota Varachha and Sarthana", "live", 21.23159, 72.90312, "Fast-growing eastern suburbs on the Kamrej road."], ["Udhna and Limbayat", "live", 21.17603, 72.85679, "Dense working-class south-east."], ["Dindoli", "live", 21.15232, 72.87249, "Large new housing belt in the south-east."], ["Althan and Bhatar", "live", 21.15, 72.81, "Mid to upper-middle homes between Vesu and Udhna."], ["Palanpur and Jahangirpura", "live", 21.22, 72.787, "New towers north of Adajan, on the Rander side."], ["Ring Road textile markets", "work", 21.19418, 72.84345, "The city's biggest daily commuter and trader flow."], ["Varachha diamond hub", "work", 21.2125, 72.86, "Diamond units employ lakhs; they close for 3-4 weeks over Diwali."], ["Surat Diamond Bourse", "work", 21.10989, 72.79507, "Huge new office complex at Khajod, south of Vesu."], ["Pragati IT Park, Mota Varachha", "work", 21.2345667, 72.8712734, "IT park 9.9 km from Adajan."], ["Hazira industrial belt", "work", 21.17489, 72.66818, "Reliance, L&T and AM/NS plants; the workforce commutes via Hazira Rd past Adajan."], ["Pandesara GIDC", "work", 21.14863, 72.83148, "Textile processing estate in the south."], ["Sachin GIDC", "work", 21.07841, 72.87322, "Industrial estate on the southern edge."], ["Rahul Raj Mall, Dumas Road", "shop", 21.15503, 72.76684, "Mall on the Dumas Road strip, on the way to our Dumas store."], ["Citylight", "shop", 21.16802, 72.79442, "Shopping and dining street in the Vesu-Athwa belt."], ["Gopi Talav", "shop", 21.18857, 72.82945, "Restored lake and leisure spot in the old city."], ["Dumas Beach", "shop", 21.0805, 72.713, "Weekend beach crowd past the airport."], ["Sarthana Nature Park and Zoo", "shop", 21.23204, 72.89815, "Family day-out spot in the east."], ["Surat Railway Station", "move", 21.20506, 72.84069, "Main station; the Ring Road and Varachha flyovers meet here."], ["Udhna Junction", "move", 21.17043, 72.85099, "Second station, south-east."], ["Surat Airport", "move", 21.11629, 72.74173, "Opposite our Dumas Road store."]];
window.ADAJAN.venues = [["Indoor Stadium, Athwalines", 21.1767544, 72.8011289, 4676], ["Lalbhai Stadium, Piplod", 21.1554263, 72.7691986, 1038], ["SMC Sports Complex, Varachha", 21.221004, 72.857087, 938], ["Bhanki Stadium, Rander", 21.2254817, 72.7911686, 793], ["SRK Sports Park, Katargam", 21.2465032, 72.825019, 636], ["L R Patel Sports Complex", 21.1319012, 72.8031937, 491], ["DRB Sports Complex", 21.1323147, 72.7791697, 261], ["VNSGU Indoor Stadium", 21.1540224, 72.7889296, 111]];

/* Surat city crowd hotspots by density (31 Oct 2026): 1,809 places across the city from OpenStreetMap (shops, eateries, banks, clinics,
   offices, bus stops and other everyday places, schools and institutes, sports places; housing at 0.7), spread over about 0.5 km on a 100 m grid;
   the 12 strongest peaks at least 1.6 km apart. [id, area (approximate name), lat, lon, places within 1 km, km to the nearest Decathlon].
   OpenStreetMap only, so the Adajan register does not tilt it towards Adajan. */
window.ADAJAN.cityHot = [["C1", "Railway station and Delhi Gate", 21.205, 72.838, 100, 5.4], ["C2", "Athwa and Ghod Dod Road", 21.182, 72.816, 128, 2.9], ["C3", "ONGC colony and Magdalla, by the airport", 21.133, 72.718, 62, 2.4], ["C4", "Hirabag and the Varachha diamond hub", 21.214, 72.861, 74, 8.0], ["C5", "Adajan, Honey Park and L.P. Savani", 21.199, 72.792, 84, 1.2], ["C6", "Yogi Chowk and Sarthana", 21.215, 72.887, 61, 10.6], ["C7", "Vesu, VIP Road and Althan", 21.152, 72.792, 73, 4.0], ["C8", "Citylight and Athwalines", 21.17, 72.791, 61, 2.0], ["C9", "Salabatpura and Saiyedwada, old city", 21.197, 72.825, 57, 3.8], ["C10", "Limbayat and Udhna, east", 21.19, 72.865, 55, 7.9], ["C11", "Rander", 21.214, 72.793, 56, 2.9], ["C12", "Katargam", 21.225, 72.823, 50, 5.4]];
