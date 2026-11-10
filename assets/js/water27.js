/* Water sports 2027: week-by-week plan. Sources (n): pune = SS_2027_Pune_water_sport_plan.docx; guj = Gujarat_water_sport_plan_-_2027.docx;
   gisp = The Great Indian Swim Project (WA0002 docx + WA0003 deck); india = Swimming Strategic A4 India + INDIA SWIMMING PROJECT deck;
   part = Pune_Partnerhsips__Coaches_affiliation_.xlsx; plan = 2027 planner (MARCOM calendar); ours = our proposal or our timing (to confirm).
   st: P = Pune, G = Gujarat, M = MP; no st = every state. k = chip style (planner kinds + prop). go = a go-live date. */
window.WATER27 = {
  lanes: [
    { id: "moments", name: "Season and moments" },
    { id: "golive", name: "Go live" },
    { id: "team", name: "Team and training" },
    { id: "merch", name: "In-store: range and merchandising" },
    { id: "instore", name: "In-store and mall communication" },
    { id: "ooh", name: "Outstore: hoardings and flyers" },
    { id: "digital", name: "Digital and WhatsApp" },
    { id: "infl", name: "Influencers and creators" },
    { id: "pools", name: "Pools, academies and coaches" },
    { id: "aop", name: "AOPs (practice places), all sports" },
    { id: "events", name: "Events and community" },
    { id: "qc", name: "Quick commerce and online" },
    { id: "review", name: "Goals and reviews" }
  ],
  quarters: {
    q426: { label: "Q4 2026", long: "Q4 2026: get ready (weeks 39 to 53)", year: 2026, w0: 39, w1: 53 },
    q1: { label: "Q1 2027", long: "Q1 2027: January to March", year: 2027, w0: 1, w1: 13 },
    q2: { label: "Q2 2027", long: "Q2 2027: April to June", year: 2027, w0: 14, w1: 26 },
    q3: { label: "Q3 2027", long: "Q3 2027: July to September", year: 2027, w0: 27, w1: 39 },
    q4: { label: "Q4 2027", long: "Q4 2027: October to December", year: 2027, w0: 40, w1: 52 }
  },
  items: [
    /* ---------- Q4 2026: get ready ---------- */
    { l: "moments", t: "Winter and travel", s: "2026-10-01", e: "2026-12-31", k: "season", n: "plan" },
    { l: "moments", t: "Diwali 8 Nov", s: "2026-11-08", e: "2026-11-08", k: "hol" },
    { l: "moments", t: "Children's Day 14 Nov", s: "2026-11-14", e: "2026-11-14", k: "hol" },
    { l: "moments", t: "Surat Adajan store opens, 18 Dec", s: "2026-12-18", e: "2026-12-20", k: "launch", st: ["G"] },
    { l: "moments", t: "Christmas 25 Dec", s: "2026-12-25", e: "2026-12-25", k: "hol" },
    { l: "golive", t: "Store ranges validated (week 39)", s: "2026-09-21", e: "2026-09-27", k: "launch", go: 1, done: 1, st: ["P", "G"], n: "pune" },
    { l: "golive", t: "Brand x retail range validation (week 40)", s: "2026-09-28", e: "2026-10-04", k: "launch", go: 1, done: 1, st: ["P", "G"], n: "pune" },
    { l: "golive", t: "Store maps validated (week 41)", s: "2026-10-05", e: "2026-10-11", k: "launch", go: 1, done: 1, st: ["P", "G"], n: "pune" },
    { l: "golive", t: "Registrations open: Make Your Catchment Swim", s: "2026-12-01", e: "2026-12-06", k: "launch", go: 1, n: "gisp" },
    { l: "team", t: "Recruit the water team, all in place by 10 Jan (every teammate a swimmer)", s: "2026-11-02", e: "2027-01-10", k: "nat", st: ["P", "G", "M"], n: "pune" },
    { l: "team", t: "Name one Swimming Champion per city and store", s: "2026-11-02", e: "2026-11-29", k: "eco", n: "gisp" },
    { l: "merch", t: "SS27 offer selection and store mass plans", s: "2026-09-21", e: "2026-10-11", k: "tech", done: 1, st: ["P", "G"], n: "pune" },
    { l: "merch", t: "Beginner kit and starter-wall brief", s: "2026-11-09", e: "2026-11-29", k: "tech", n: "gisp" },
    { l: "digital", t: "One registration form, consent and referral tracking", s: "2026-11-02", e: "2026-11-29", k: "nat", n: "gisp" },
    { l: "digital", t: "Local paid digital, geo-targeted (₹1 L, Dec to Apr)", s: "2026-12-01", e: "2027-04-30", k: "nat", n: "gisp" },
    { l: "infl", t: "Creators and community voices (₹45,000)", s: "2026-12-01", e: "2027-04-30", k: "evt", n: "gisp" },
    { l: "pools", t: "Map academies and pools; agree trial offer, referral ID, capacity, safety", s: "2026-11-02", e: "2026-11-29", k: "eco", n: "gisp" },
    { l: "pools", t: "Amanora: 7 pool tie-ups end in Dec, renew them", s: "2026-12-01", e: "2026-12-31", k: "local", st: ["P"], n: "part" },
    { l: "events", t: "Build the ecosystem", s: "2026-11-02", e: "2026-11-30", k: "evt", n: "gisp" },
    { l: "events", t: "Make Your Catchment Swim: beginner sessions, Aqua Zumba pilot per city, first stories", s: "2026-12-01", e: "2026-12-31", k: "evt", n: "gisp" },
    { l: "review", t: "Swim Project starts: ₹8 L, phased, 90-day checkpoint", s: "2026-11-02", e: "2026-11-08", k: "tech", n: "gisp" },
    { l: "review", t: "Baseline: swimming sales before launch", s: "2026-11-09", e: "2026-11-29", k: "tech", n: "gisp" },
    { l: "review", t: "Weekly rhythm: Mon numbers, Wed partners, Fri weekend check, weekend sessions", s: "2026-12-01", e: "2027-04-30", k: "tbd", n: "gisp" },

    /* ---------- Q1 2027 ---------- */
    { l: "moments", t: "Winter", s: "2027-01-01", e: "2027-02-28", k: "season", n: "plan" },
    { l: "moments", t: "Summer + summer camp", s: "2027-03-01", e: "2027-05-31", k: "season", n: "plan" },
    { l: "moments", t: "Uttarayan 14 Jan", s: "2027-01-14", e: "2027-01-14", k: "hol" },
    { l: "moments", t: "Republic Day 26 Jan", s: "2027-01-26", e: "2027-01-26", k: "hol" },
    { l: "moments", t: "Beach Day, Surat", s: "2027-02-08", e: "2027-02-21", k: "hol", st: ["G"], n: "plan" },
    { l: "moments", t: "Women's Day 8 Mar", s: "2027-03-08", e: "2027-03-08", k: "hol" },
    { l: "moments", t: "Holi 22 Mar", s: "2027-03-22", e: "2027-03-22", k: "hol" },
    { l: "golive", t: "Water team in place", s: "2027-01-10", e: "2027-01-10", k: "launch", go: 1, st: ["P", "G", "M"], n: "pune" },
    { l: "golive", t: "In-store live: summer campaign, CAD, golden peg", s: "2027-02-15", e: "2027-02-21", k: "launch", go: 1, st: ["P", "G"], n: "pune" },
    { l: "golive", t: "Pune: at least 10 swimming academies in every catchment", s: "2027-02-15", e: "2027-02-20", k: "launch", go: 1, st: ["P"], n: "pp" },
    { l: "golive", t: "Gujarat coaches onboarded (latest)", s: "2027-02-15", e: "2027-02-15", k: "launch", go: 1, st: ["G"], n: "guj" },
    { l: "golive", t: "Outstore live: hoardings, pools, flyers", s: "2027-03-15", e: "2027-03-21", k: "launch", go: 1, st: ["P", "G"], n: "pune" },
    { l: "team", t: "Pune training 19-20 Jan", s: "2027-01-19", e: "2027-01-20", k: "nat", st: ["P"], n: "guj" },
    { l: "team", t: "Pune training 10-11 Feb", s: "2027-02-10", e: "2027-02-11", k: "nat", st: ["P"], n: "guj" },
    { l: "team", t: "Pune training 2-3 Mar", s: "2027-03-02", e: "2027-03-03", k: "nat", st: ["P"], n: "guj" },
    { l: "team", t: "Gujarat training 8-9 Feb", s: "2027-02-08", e: "2027-02-09", k: "nat", st: ["G"], n: "guj" },
    { l: "team", t: "Gujarat training 23-24 Feb", s: "2027-02-23", e: "2027-02-24", k: "nat", st: ["G"], n: "guj" },
    { l: "team", t: "MP training 16-17 Feb", s: "2027-02-16", e: "2027-02-17", k: "nat", st: ["M"], n: "guj" },
    { l: "team", t: "Swim kit for every teammate (₹1,999), weekly practice", s: "2027-01-11", e: "2027-05-31", k: "eco", st: ["P", "G", "M"], n: "pune" },
    { l: "team", t: "Store visit (end Feb)", s: "2027-02-22", e: "2027-02-28", k: "local", st: ["G"], n: "guj" },
    { l: "merch", t: "Water move, checklist, top 15 families to 100% CAD", s: "2027-01-18", e: "2027-02-15", k: "tech", st: ["P", "G"], n: "pune" },
    { l: "merch", t: "Golden peg challenge: weekly FCS, growth vs country, caps and goggle cases per goggle (ABQ)", s: "2027-02-15", e: "2027-06-30", k: "tech", st: ["P", "G"], n: "pune" },
    { l: "merch", t: "Family window: 4 dressed mannequins; entrance: Una, UV top + Fiti 500, kids combi (Motera, Dumas)", s: "2027-02-15", e: "2027-06-30", k: "tech", st: ["G"], n: "guj" },
    { l: "merch", t: "Step 1.5 add-ons: goggle case, phone pocket, 3 L and 7 L pouches, mesh bag", s: "2027-02-15", e: "2027-06-30", k: "tech", st: ["G"], n: "guj" },
    { l: "merch", t: "SS27 women's cover-up swimwear: Jisa Shorty, Rossa full zip, Rossa legging, Una skirt", s: "2027-02-15", e: "2027-06-30", k: "nat", n: "india" },
    { l: "instore", t: "Window wall and store home page, stop rayons, CAB + TGs (₹1.10 L) + in-mall lollipops (₹4.24 L)", s: "2027-02-15", e: "2027-06-30", k: "nat", st: ["P"], n: "pune" },
    { l: "instore", t: "Window wall, stop rayons, CAB + TGs, TV; Nexus in-mall; lollipops at Motera, Dumas, Baroda", s: "2027-02-15", e: "2027-06-30", k: "nat", st: ["G"], n: "guj" },
    { l: "instore", t: "No in-store water plan in our files", s: "2027-02-15", e: "2027-06-30", k: "tbd", st: ["M"] },
    { l: "ooh", t: "11 hoardings live: Wakad 3, Amanora 2, Wagholi 2, city 2, SGS 1, NIBM 1 (₹15.7 L; run length to confirm)", s: "2027-03-15", e: "2027-05-31", k: "sale", st: ["P"], n: "pune" },
    { l: "ooh", t: "3D city hoarding: \"Summer fun with water\" (budget not set)", s: "2027-03-15", e: "2027-05-31", k: "sale", st: ["G"], n: "guj" },
    { l: "ooh", t: "Flyers at pools, societies, schools (Pune ₹81,000; Nexus ₹30,000)", s: "2027-03-15", e: "2027-04-30", k: "local", st: ["P", "G"], n: "pune" },
    { l: "ooh", t: "Test: \"The City Needs a Swim\" digital hoardings with a QR code", s: "2027-03-15", e: "2027-04-11", k: "prop", n: "gisp" },
    { l: "digital", t: "WhatsApp push 1 (Feb, week 3)", s: "2027-02-15", e: "2027-02-21", k: "launch", st: ["P", "G"], n: "pune" },
    { l: "digital", t: "WhatsApp push 2 (Mar, week 2)", s: "2027-03-08", e: "2027-03-14", k: "launch", st: ["P", "G"], n: "pune" },
    { l: "digital", t: "New arrival x Summer collection on the store home page", s: "2027-02-15", e: "2027-06-30", k: "nat", st: ["P", "G"], n: "pune" },
    { l: "infl", t: "Instagram influencers, 3 months (₹12 L) + ad-boost reels (₹50,000)", s: "2027-03-15", e: "2027-06-13", k: "evt", st: ["P"], n: "pune" },
    { l: "infl", t: "Summer + summer camp: 50 influencers, ₹5 L (all sports; 2026: summer reels at ₹0.33 a view)", s: "2027-03-01", e: "2027-05-31", k: "evt", st: ["P"], n: "pp" },
    { l: "infl", t: "Instagram influencers, ₹20,000 per store (Nexus, Motera, Dumas, Baroda)", s: "2027-03-15", e: "2027-04-30", k: "evt", st: ["G"], n: "guj" },
    { l: "pools", t: "SGS: Nilu Phule pool tie-up ends 22 Jan, renew", s: "2027-01-04", e: "2027-01-22", k: "local", st: ["P"], n: "part" },
    { l: "pools", t: "Sign 58 pools at ₹25,000: Wagholi 15, Amanora 10, Wakad 10, city 10, NIBM 8, SGS 5", s: "2027-01-04", e: "2027-03-14", k: "eco", st: ["P"], n: "pune" },
    { l: "pools", t: "Affiliate 80 coaches with a ₹5,000 kit: Wakad 20, Amanora 20, others 10", s: "2027-01-04", e: "2027-03-14", k: "eco", st: ["P"], n: "pune" },
    { l: "pools", t: "Coaches onboarded (₹2.25 L, 45 coaches at ₹5,000) and pool tie-ups (₹4.5 L)", s: "2027-01-04", e: "2027-02-15", k: "eco", st: ["G"], n: "guj" },
    { l: "pools", t: "Coaches seminar 26-28 Feb", s: "2027-02-26", e: "2027-02-28", k: "launch", st: ["G"], n: "guj" },
    { l: "pools", t: "Wagholi: Raj Swimming Pool from 1 Feb", s: "2027-02-01", e: "2027-02-07", k: "local", st: ["P"], n: "part" },
    { l: "pools", t: "NIBM: Varunah and Ganga Dhaam tie-ups end in March, renew before summer", s: "2027-02-01", e: "2027-03-31", k: "local", st: ["P"], n: "part" },
    { l: "pools", t: "Academies: Pune 7, Gujarat 12, MP 9 (target 28)", s: "2026-11-02", e: "2027-01-31", k: "prop", n: "gisp" },
    { l: "events", t: "30-Day Swim Challenge: swim streaks, Women Who Swim, creator stories", s: "2027-01-01", e: "2027-01-31", k: "evt", n: "gisp" },
    { l: "events", t: "Swim Together: family weekends, societies, corporates, academy referrals", s: "2027-02-01", e: "2027-02-28", k: "evt", n: "gisp" },
    { l: "events", t: "Decathlon Swim League: academy vs academy, beginner categories, city finals", s: "2027-03-01", e: "2027-03-31", k: "evt", n: "gisp" },
    { l: "events", t: "Women Who Swim on Women's Day weekend", s: "2027-03-06", e: "2027-03-07", k: "prop", n: "ours" },
    { l: "events", t: "Learn swimming with Decathlon x coach: Townscript sign-ups, free goggle with a full set (new customers)", s: "2027-03-15", e: "2027-06-30", k: "evt", st: ["P", "G"], n: "pune" },
    { l: "qc", t: "Quick commerce: stock ahead of demand, in-range cover (RDP), digital LMs for the rest, express delivery message", s: "2027-03-01", e: "2027-06-30", k: "nat", st: ["P", "G"], n: "pune" },
    { l: "review", t: "90-day checkpoint (Swim Project)", s: "2027-02-01", e: "2027-02-07", k: "tech", n: "gisp" },
    { l: "review", t: "Business plan March to June: Pune ₹17.65 Cr (+25%), Gujarat ₹9.00 Cr (+20%)", s: "2027-03-01", e: "2027-06-30", k: "launch", st: ["P", "G"], n: "pune" },
    { l: "review", t: "Biweekly catch-up", s: "2027-02-01", e: "2027-06-30", k: "tbd", st: ["G"], n: "guj" },

    /* ---------- Q2 2027 ---------- */
    { l: "moments", t: "Monsoon and back to school", s: "2027-06-01", e: "2027-09-30", k: "season", n: "plan" },
    { l: "moments", t: "Gudi Padwa 8 Apr", s: "2027-04-08", e: "2027-04-08", k: "hol" },
    { l: "moments", t: "School summer holidays (dates vary by board)", s: "2027-04-19", e: "2027-06-13", k: "hol" },
    { l: "moments", t: "Maharashtra Day 1 May", s: "2027-05-01", e: "2027-05-01", k: "hol" },
    { l: "moments", t: "Yoga Day 21 Jun", s: "2027-06-21", e: "2027-06-21", k: "hol" },
    { l: "golive", t: "Peak: April and May are the two biggest water months", s: "2027-04-05", e: "2027-05-30", k: "launch", go: 1, n: "ours" },
    { l: "golive", t: "Wagholi: Kavya pool from 1 Apr", s: "2027-04-01", e: "2027-04-04", k: "launch", go: 1, st: ["P"], n: "part" },
    { l: "digital", t: "WhatsApp push 3 (Apr, week 2)", s: "2027-04-08", e: "2027-04-14", k: "launch", st: ["P", "G"], n: "pune" },
    { l: "digital", t: "WhatsApp push 4 (May, week 1)", s: "2027-05-01", e: "2027-05-07", k: "launch", st: ["P", "G"], n: "pune" },
    { l: "events", t: "Summer Swim Movement: school holidays, 1,000 People milestone, starter kits", s: "2027-04-01", e: "2027-04-30", k: "evt", n: "gisp" },
    { l: "events", t: "Summer Camp (event IP): learn-to-swim week with partner pools", s: "2027-04-19", e: "2027-05-02", k: "prop", n: "plan" },
    { l: "events", t: "Sports Utsav", s: "2027-05-01", e: "2027-05-31", k: "evt", n: "plan" },
    { l: "pools", t: "Wakad: Bluewater and Proswim tie-ups end in May, renew", s: "2027-05-01", e: "2027-05-31", k: "local", st: ["P"], n: "part" },
    { l: "review", t: "Swim Project review: 3,000 sign-ups, 1,500 first swims, 600 repeat, 600 buyers, ₹15 L", s: "2027-05-03", e: "2027-05-09", k: "tech", n: "gisp" },

    /* ---------- Q3 2027 (mostly our proposal: the off-season) ---------- */
    { l: "moments", t: "Ashadhi Ekadashi 13 Jul", s: "2027-07-13", e: "2027-07-13", k: "hol" },
    { l: "moments", t: "Independence Day 15 Aug", s: "2027-08-15", e: "2027-08-15", k: "hol" },
    { l: "moments", t: "Ganesh Chaturthi 3 Sep", s: "2027-09-03", e: "2027-09-03", k: "hol" },
    { l: "moments", t: "51st anniversary", s: "2027-07-01", e: "2027-07-31", k: "sale", n: "plan" },
    { l: "moments", t: "Clearance sale", s: "2027-08-01", e: "2027-08-31", k: "sale", n: "plan" },
    { l: "golive", t: "Store ranges for SS28 validated (week 39, as in 2026)", s: "2027-09-27", e: "2027-10-03", k: "prop", go: 1, st: ["P", "G"], n: "ours" },
    { l: "review", t: "Summer review: turnover vs ₹26.65 Cr, families, ABQ, pools, coaches", s: "2027-07-05", e: "2027-07-18", k: "prop", n: "ours" },
    { l: "merch", t: "Swim all year: keep the core range (goggles, caps, swimsuits, towels) for regulars", s: "2027-07-01", e: "2027-09-30", k: "prop", n: "india" },
    { l: "digital", t: "Monsoon + travel campaign: indoor pools, resorts, Goa", s: "2027-07-05", e: "2027-09-26", k: "prop", n: "india" },
    { l: "pools", t: "Coaches: product training, sales at the pool, keep them affiliated", s: "2027-07-05", e: "2027-09-26", k: "prop", n: "india" },
    { l: "events", t: "Celebrate everyone who learnt to swim this year (the Kerala model)", s: "2027-09-06", e: "2027-09-19", k: "prop", n: "india" },
    { l: "qc", t: "Online and quick commerce carry the off-season", s: "2027-07-01", e: "2027-09-30", k: "prop", n: "ours" },

    /* ---------- Q4 2027 (our proposal: the 2026 cycle again, for SS28) ---------- */
    { l: "moments", t: "Winter and travel", s: "2027-10-01", e: "2027-12-31", k: "season", n: "plan" },
    { l: "moments", t: "Dussehra 9 Oct", s: "2027-10-09", e: "2027-10-09", k: "hol" },
    { l: "moments", t: "Diwali 29 Oct", s: "2027-10-29", e: "2027-10-29", k: "hol" },
    { l: "moments", t: "Black Friday 26-29 Nov", s: "2027-11-26", e: "2027-11-29", k: "sale", n: "plan" },
    { l: "moments", t: "Christmas 25 Dec", s: "2027-12-25", e: "2027-12-25", k: "hol" },
    { l: "golive", t: "Brand x retail validation (week 40)", s: "2027-10-04", e: "2027-10-10", k: "prop", go: 1, st: ["P", "G"], n: "ours" },
    { l: "golive", t: "Store maps validated (week 41)", s: "2027-10-11", e: "2027-10-17", k: "prop", go: 1, st: ["P", "G"], n: "ours" },
    { l: "merch", t: "CAD validation for summer 2028 (November)", s: "2027-11-01", e: "2027-11-28", k: "prop", n: "india" },
    { l: "team", t: "Recruit the SS28 water team", s: "2027-11-01", e: "2027-12-31", k: "prop", n: "ours" },
    { l: "digital", t: "Winter travel: swimwear for holidays and hotel pools", s: "2027-10-04", e: "2027-12-26", k: "prop", n: "india" },
    { l: "pools", t: "Renew pool and academy tie-ups for 2028; Wagholi Club 360 starts in Dec", s: "2027-11-01", e: "2027-12-31", k: "prop", st: ["P"], n: "part" },
    { l: "events", t: "Build the ecosystem for summer 2028 (the Swim Project, round 2)", s: "2027-11-01", e: "2027-12-31", k: "prop", n: "ours" }
  ],

  /* what we can do, per quarter (bottom of the calendar) */
  ideas: {
    q426: [
      ["Lock the pools before the peak", "Renew Amanora's 7 pool tie-ups that end in December and sign the 28 academies of the Swim Project (Pune 7, Gujarat 12, MP 9) before sessions are advertised."],
      ["One owner per city", "A named Swimming Champion owns the weekly numbers: registrations, attendance, sales. Not just the event calendar."],
      ["Measure from day one", "One form, one QR per store, academy and campaign, and a sales baseline in November, so every rupee after launch can be traced."],
      ["Adajan gets water from the start", "The new Surat store opens on 18 Dec and is not in the Gujarat water plan. Copy the Dumas Road set-up and staff it before 15 Feb.", 1]
    ],
    q1: [
      ["Two go-live dates, not ten", "Everything in store goes live on Mon 15 Feb (campaign, CAD, golden peg, WhatsApp). Everything outside on Mon 15 Mar (hoardings, pools, flyers, influencers)."],
      ["Sell the full set", "Free goggle with goggle + swimwear + cap + towel + bag (+ goggle case in Gujarat), for new customers. Push caps and goggle cases per goggle to lift ABQ."],
      ["Women Who Swim", "Women-only beginner sessions with women coaches; tie it to the Women's Day weekend (6-7 Mar) and the SS27 cover-up swimwear (Jisa, Rossa, Una).", 1],
      ["Coaches are the channel", "125 coaches with a ₹5,000 kit (Pune 80, Gujarat 45): trained on the range, a referral code each, sales at the pool."],
      ["The Swim League in March", "Academy vs academy with beginner categories and city finals: content for the hoardings and influencers that start on 15 Mar."]
    ],
    q2: [
      ["Win April and May", "In 2026 April (₹6.81 Cr) and May (₹7.46 Cr) were the two biggest water months in the West, and swimming was 11.6% of all April turnover."],
      ["School holidays = learners", "Learn-to-swim camps with partner pools as the summer camp; starter kits and family bundles for parents (Priority 2: capture the summer learners)."],
      ["Never run out", "Quick commerce and express delivery for water sports; anticipate demand per store so goggles, caps and kids' swimwear never go out of stock."],
      ["Renew before it ends", "Wakad's Bluewater and Proswim tie-ups end in May: renew while the season is running."],
      ["Count what happened", "Close the Swim Project in early May against its targets: 3,000 sign-ups, 1,500 first swims, 600 repeat swimmers, 600 buyers, ₹15 L sales."]
    ],
    q3: [
      ["Swimming is not only for summer", "The India Strategic A4 lists 'seen as a seasonal sport' as a weakness while the weather allows swimming all year. Keep the core range and the regulars.", 1],
      ["Monsoon and travel", "Indoor pools, resorts and beach holidays: India tops 10 Asian markets in searches for hotels with pools.", 1],
      ["Keep coaches close", "Product training and sales at the pool through the off-season, so they are ready for SS28.", 1],
      ["Review and plan SS28", "Summer review in July, then the SS28 range validated in week 39, as in 2026.", 1]
    ],
    q4: [
      ["Same cycle, earlier", "Weeks 40 and 41 for range and store maps, CAD validation in November, team recruited by early January.", 1],
      ["Winter travel swim", "Swimwear for holiday pools and trips through Diwali, Black Friday and Christmas.", 1],
      ["Round 2 of the Swim Project", "Rebuild the academy network for 2028 with what worked in 2027.", 1]
    ]
  },

  /* stores (water plan). team: [full-time, part-time, interns]; hire = still to recruit (Gujarat plan); goal / base in rupees, March to June */
  stores: [
    { id: "amanora", name: "Amanora", city: "Pune", st: "Pune", aop: "Amanora", team: [3, 3, 3], pools: 10, coaches: 20, hoard: 2, partners: "7 pools listed (tie-ups end Dec 2026)", inmall: 70000, out: { hoard: 270000, pools: 250000, flyers: 15000, infl: 300000, coach: 100000 }, outStated: 935000, goal: 24336155 },
    { id: "sgs", name: "SGS Mall", city: "Pune", st: "Pune", aop: "SGS Mall", team: [4, 6, 2], pools: 5, coaches: 10, hoard: 1, partners: "1 pool (Nilu Phule, to 22 Jan 2027)", inmall: 62000, out: { hoard: 150000, pools: 125000, flyers: 20000, infl: 150000, coach: 50000 }, outStated: 495000, goal: 22941668 },
    { id: "wagholi", name: "Wagholi", city: "Pune", st: "Pune", aop: "Wagholi", team: [3, 4, 2], pools: 15, coaches: 10, hoard: 2, partners: "5 pools listed (Raj from Feb, Kavya from Apr 2027)", inmall: 130000, out: { hoard: 280000, pools: 375000, flyers: 10000, infl: 300000, coach: 50000 }, outStated: 1015000, goal: 23306966 },
    { id: "wakad", name: "Wakad", city: "Pune", st: "Pune", aop: "Wakad", team: [4, 4, 12], pools: 10, coaches: 20, hoard: 3, partners: "2 academies (Bluewater, Proswim, to May 2027)", inmall: 40000, out: { hoard: 420000, pools: 250000, flyers: 20000, infl: 300000, coach: 100000 }, outStated: 1070000, goal: 50893673 },
    { id: "nibm", name: "NIBM", city: "Pune", st: "Pune", aop: "NIBM", team: [2, 6, 1], pools: 8, coaches: 10, hoard: 1, partners: "2 pools to Mar 2027 (Varunah, Ganga Dhaam)", inmall: 232000, out: { hoard: 150000, pools: 200000, flyers: 16000, infl: 150000, coach: 50000 }, outStated: 566000, goal: 14272318 },
    { id: "ooc", name: "Pune city and online", city: "Pune", st: "Pune", aop: null, team: [1, 0, 0], pools: 10, coaches: 10, hoard: 2, partners: "B2B and digital (CDMR)", inmall: 0, out: { hoard: 300000, pools: 250000, flyers: 0, infl: 50000, coach: 50000 }, outStated: 650000, goal: 40714939 },
    { id: "nexus", name: "Nexus", city: "Ahmedabad", st: "Gujarat", aop: "Nexus", team: [2, 2, 0], hire: 3, coaches: 10, academies: "Ahmedabad 5", instore: "Window wall, stop rayons, CAB + TGs, TV, in-mall", out: { pools: 100000, flyers: 30000, infl: 20000, coach: 50000 }, outStated: 200000, base: 20500156, goal: 24600187 },
    { id: "motera", name: "Motera", city: "Ahmedabad", st: "Gujarat", aop: "Motera", team: [1, 2, 0], hire: 3, coaches: 10, academies: "Ahmedabad 5", instore: "All + lollipops; family window and entrance display", out: { pools: 100000, infl: 20000, coach: 50000 }, outStated: 170000, base: 19215223, goal: 23058268 },
    { id: "dumas", name: "Dumas Road", city: "Surat", st: "Gujarat", aop: "Dumas", team: [2, 2, 0], hire: 1, coaches: 10, academies: "Surat 3", instore: "All + lollipops; family window and entrance display", out: { pools: 100000, infl: 20000, coach: 50000 }, outStated: 170000, base: 16140797, goal: 19368956 },
    { id: "baroda", name: "Baroda", city: "Vadodara", st: "Gujarat", aop: "Baroda", team: [2, 0, 0], hire: 4, coaches: 10, academies: "Vadodara 2", instore: "All + lollipops", out: { pools: 100000, infl: 20000, coach: 50000 }, outStated: 170000, base: 15291011, goal: 18349213 },
    { id: "rajkot", name: "Rajkot", city: "Rajkot", st: "Gujarat", aop: "Rajkot", team: [1, 1, 0], hire: 0, coaches: 5, academies: "Rajkot 2", instore: "Window wall, CAB + TGs", out: { pools: 50000, coach: 25000 }, outStated: 75000, base: 3855443, goal: 4626531 },
    { id: "adajan", name: "Adajan (new)", city: "Surat", st: "Gujarat", aop: null, team: null, academies: "Surat 3 (shared)", instore: "Opens 18 Dec 2026: not in the water plan yet", out: null },
    { id: "indore", name: "Indore", city: "Indore", st: "MP", aop: "Indore", team: [2, 1, 0], hire: 2, academies: "Indore 4: 1,000 People Mission", instore: "No water plan in our files", out: null },
    { id: "bhopal", name: "Bhopal", city: "Bhopal", st: "MP", aop: "Bhopal", team: [0, 1, 0], hire: 3, academies: "Bhopal 3: Family Swim Days", instore: "No water plan in our files", out: null },
    { id: "gwalior", name: "Gwalior", city: "Gwalior", st: "MP", aop: "Gwalior", team: null, academies: "Gwalior 2: beginner discovery", instore: "Not in the human plan", out: null }
  ],

  /* Gujarat merchandising budget (Motera and Dumas Road) */
  merchGuj: [["Family window display (4 mannequins, communication, lighting)", 97638], ["Entrance display (3 mannequins, podium, spotlights)", 49812], ["Towels: size board", 2500], ["Snorkel masks: video screen", 9000], ["Phone pocket: acrylic cube", 1200], ["UV tops: display and stickers", 1600], ["Goggles and headwear, aqua learning", 0]],

  /* Swim Project money (₹8 L): by activity and by geography (two views of the same envelope) */
  gisp: {
    activity: [["Academy trials and acquisition", 240000], ["City launch events and community", 120000], ["Local paid digital", 100000], ["Videography and content", 90000], ["In-store branding, QR stands, POS", 45000], ["Creators and ambassadors", 45000], ["CRM, tracking, reporting", 25000], ["Contingency (released on evidence)", 135000]],
    geo: [["Pune", 270000], ["Gujarat", 290000], ["MP", 170000], ["Regional content, tracking, contingency", 70000]]
  },

  families: {
    pune: ["Swim towels", "Goggles, masks", "Cover-up swimwear", "Swim headwear", "Men's swimsuits", "Girls' swimwear", "Boys' swimsuits", "Sun protection", "Aqua learning accessories", "Swimming material", "Men's beach shorts"],
    guj: ["Goggles", "Caps", "Material", "Aqua learning", "Towels", "Women's swimsuits", "Baby swimsuits", "Men's swimsuits", "Boys' swimsuits", "Girls' swimsuits"]
  }
};
