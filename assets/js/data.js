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
    { name: "Dussehra", d26: "16–20 Oct", d25: "29 Sep–2 Oct", to25: 5.3, to26: 7.5, g: 40 },
    { name: "Diwali sale", d26: "31 Oct–1 Nov", d25: "10–12 Oct", to25: 4.7, to26: 5.5, g: 17 },
    { name: "Black Friday", d26: "27–30 Nov", d25: "28–30 Nov", to25: 9.8, to26: 12, g: 22.4 },
    { name: "EOY festive sale", d26: "18–25 Dec", d25: "17–25 Dec", to25: 17.7, to26: 20, g: 12.9 }
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
    Pune: { y26: [24.07, 8.74, 22.75, 26.57, 25.18, 30.26, 23.42, 22.47, 19.7, 16.5, 27.0, 10.75], y27: [28.74, 22.68, 28.97, 32.21, 37.55, 33.78, 36.43, 29.77, 22.14, 22.84, 34.1, 36.14] },
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
    { name: "Summer Camp", when: "Apr–Jun", goal: 5000 },
    { name: "Sports Utsav", when: "May", goal: 200000 },
    { name: "Yoga Day", when: "Jun", goal: 10000 },
    { name: "Mountain Day", when: "Aug", goal: 5000 },
    { name: "Sports Utsav Jr", when: "Nov", goal: 50000 }
  ],

  holidaysQ1: [
    { d: "2027-01-14", name: "Makar Sankranti / Uttarayan", r: ["Gujarat"] },
    { d: "2027-01-15", name: "Vasi Uttarayan", r: ["Gujarat"] },
    { d: "2027-01-26", name: "Republic Day", r: ["Pune","Gujarat","MP"] },
    { d: "2027-02-19", name: "Shivaji Maharaj Jayanti (long weekend)", r: ["Pune"] },
    { d: "2027-02-20", name: "Sant Ravidas Jayanti", r: ["MP"] },
    { d: "2027-03-06", name: "Maha Shivratri", r: ["Pune","Gujarat","MP"] },
    { d: "2027-03-10", name: "Id-ul-Fitr", r: ["Pune","Gujarat","MP"] },
    { d: "2027-03-14", name: "IPL starts (runs to 30 May)", r: ["Gujarat"] },
    { d: "2027-03-22", name: "Holi / Dhuleti (long weekend)", r: ["Pune","Gujarat","MP"] },
    { d: "2027-03-26", name: "Good Friday (long weekend)", r: ["Pune","Gujarat","MP"] }
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
      { t: "Adajan, Surat: opening weekend", s: "2026-12-18", e: "2026-12-20", k: "open", star: true },
      { t: "Adajan: Ramat Chalu Rahe", s: "2026-12-21", e: "2027-01-16", k: "local" },
      { t: "Local activations", s: "2027-01-01", e: "2027-01-31", k: "local", approx: true },
      { t: "Uttarayan", s: "2027-01-14", e: "2027-01-15", k: "local" },
      { t: "Summer launch", s: "2027-03-01", e: "2027-03-31", k: "local", approx: true },
      { t: "Holi", s: "2027-03-15", e: "2027-03-22", k: "local" }
    ]},
    { name: "External events", items: [
      { t: "HYROX", s: "2026-11-27", e: "2026-11-29", k: "ext" },
      { t: "Adani Marathon", s: "2026-11-29", e: "2026-11-29", k: "ext" }
    ]},
    { name: "Hoardings and influencers", items: [
      { t: "16 hoardings: 5 Pune, 4 Baroda, 3 Surat, 2 Ahmedabad, 1 Rajkot, 1 Bhopal", s: "2026-10-01", e: "2027-02-28", k: "ooh", approx: true },
      { t: "Influencers: Pune (Adi), Gujarat 40, MP 40", s: "2026-10-01", e: "2027-02-28", k: "ooh", approx: true },
      { t: "50 influencer videos, 5M views", s: "2027-01-01", e: "2027-03-31", k: "ooh", approx: true }
    ]}
  ]
};

/* Strategy toolkit: what each tactic gives (team's strategy sheet). marcom = run centrally by MarCom. */
window.TOOLKIT = [
  { s: "Society activations", gives: "New user growth, indirect walk-ins with a bait", word: "Growth", benefit: "Walk-ins" },
  { s: "Running / cycling events bib collection", gives: "Good awareness, connects with youth (18–28)", word: "Youth", benefit: "Awareness" },
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
  Pune: { hoardings: 5, metro: true, influencers: "Pune (Adi)", aop: { travel: 1, gym: 1, yoga: 1, racket: 2 } },
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
  Gujarat: ["Navratri and Dussehra in October", "Uttarayan, 14–15 Jan", "IPL starts 14 Mar"],
  Ahmedabad: ["Adani Marathon, 29 Nov", "Metro stations are on the Sport is Everywhere QR-wall list"],
  Surat: ["New store at Adajan: opening weekend 18–20 Dec", "Beach Fest with 5k participants in Q1", "2x marketing spend in Q1"],
  Pune: ["Metro stations are on the Sport is Everywhere QR-wall list", "Shivaji Maharaj Jayanti long weekend, 19 Feb"],
  MP: ["Sant Ravidas Jayanti, 20 Feb"],
  Bhopal: ["Bhopal hoardings run Nov to Jan (2026 update)"]
};

/* 2027 year planner lanes. Months are 0 = Jan … 11 = Dec, items span [a, b]. */
window.PLANNER = {
  months: ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],
  lanes: [
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
      { t: "Cycling / running", a: 0, b: 1, k: "eco" }, { t: "Movement for All", a: 0, b: 0, k: "eco" },
      { t: "Women's Day", a: 2, b: 2, k: "eco" }, { t: "Circular Bazaar", a: 5, b: 5, k: "eco" },
      { t: "Fitness", a: 6, b: 7, k: "eco" }, { t: "Cycling / running", a: 9, b: 10, k: "eco" },
      { t: "Mental Health Day", a: 9, b: 9, k: "eco" }, { t: "Children's Day", a: 10, b: 10, k: "eco" } ] },
    { name: "Event IP", items: [
      { t: "New Year, New Moves", a: 0, b: 0, k: "evt" }, { t: "Beach Day", a: 1, b: 1, k: "evt" },
      { t: "Women's Day", a: 2, b: 2, k: "evt" }, { t: "Summer Camp", a: 3, b: 3, k: "evt" },
      { t: "Sports Utsav", a: 4, b: 4, k: "evt" }, { t: "Yoga Day", a: 5, b: 5, k: "evt" },
      { t: "Mountain Days", a: 7, b: 7, k: "evt" }, { t: "Kids Carnival", a: 10, b: 10, k: "evt" } ] },
    { name: "Commercial", items: [
      { t: "Clearance sale", a: 0, b: 0, k: "sale" }, { t: "51st anniversary", a: 6, b: 6, k: "sale" },
      { t: "Clearance sale", a: 7, b: 7, k: "sale" }, { t: "Diwali sale (optional)", a: 9, b: 9, k: "sale" },
      { t: "Black Friday, 26–29 Nov", a: 10, b: 10, k: "sale" }, { t: "Christmas sale (optional)", a: 11, b: 11, k: "sale" } ] },
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
   "lat": 21.145,
   "lon": 72.758,
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
    16.5,
    27.0,
    10.75
   ],
   "lines": [
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
