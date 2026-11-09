/* Q1 2027 budget: how we divide it. OUR PROPOSAL (9 Nov 2026), built on the user's priorities:
   January mostly fitness, a clearance sale, the other sports funded by what they sell (Jan and Feb), Feb = new arrivals,
   March = Women's Day clubbed with sport, summer, water and swimming, running and travel.
   The money is each state's 2027 ad budget per month (ultimate_data_sheet_1.xlsx, DATA.spend.*.y27): the shares below
   split every month's budget, so the totals stay exactly the sheet's. pct = share of the month's budget (index 0 = Jan).
   sport: how a campaign's money is credited to sports ("rev" = the other sports, by their 2026 turnover that month and state;
   null = not a sport: commercial or brand). mix = suggested channel split of the campaign (%), using the sheet's channel lines. */
window.BUDGET27 = {
  channels: [
    ["dig", "Digital paid: boosts and ads"], ["ooh", "Hoardings, OOH, AOP branding"], ["ins", "In-store communication"], ["mall", "In-mall"],
    ["evt", "Store events"], ["inf", "Influencers"], ["free", "Free products and IC"], ["fly", "Flyers"]
  ],
  sheetMix: { dig: 30, ooh: 30, ins: 20, mall: 5, evt: 5, inf: 5, free: 3, fly: 2 },
  campaigns: [
    { id: "fit", name: "Fitness: New Year, New Moves", color: "#E0A100", ink: "#1C1E33", pct: [45, 20, 0], sport: { fitness: 1 },
      mix: { dig: 30, ooh: 25, ins: 15, mall: 5, evt: 10, inf: 10, free: 3, fly: 2 },
      when: "1 Jan to 28 Feb; heaviest 1 to 21 Jan, the resolution window",
      hoard: "\"New Year, New Moves\": one hero kit and its price (mat, dumbbells, bands) and the distance to the store. Pune sport of the month: fitness.",
      inf: "3 to 4 fitness micro-creators per city (10k to 50k followers, from the Pune pool of 70 and Gujarat and MP pools of 40): a 30-day home-workout challenge with Decathlon kit, one reel a week.",
      social: "30-day challenge reels, \"kit under ₹999\" carousels, teammates training in store, gym AOP members' stories. Four posts a week.",
      boost: "Boost the two best reels each week, 5 km around each store, fitness interests, 18 to 40. Retarget video viewers with the store offer." },
    { id: "clr", name: "Clearance sale", color: "#D6453D", ink: "#fff", pct: [25, 0, 0], sport: null,
      mix: { dig: 35, ooh: 25, ins: 20, mall: 10, evt: 0, inf: 5, free: 0, fly: 5 },
      when: "January sale dates (country calendar); our biggest commercial moment of the quarter",
      hoard: "Price-led: the sale dates, three hero prices, \"in store now\". On the existing hoardings for the sale weeks only, then back to fitness.",
      inf: "Haul reels (\"what I got for under ₹999\"): 1 to 2 creators per store on day one and on the last weekend.",
      social: "Countdown stories, daily stock drops, crowd videos from the store. WhatsApp to past customers on day one and the last weekend.",
      boost: "Heaviest on the opening and closing weekends; retarget store visitors and past buyers, 3 to 8 km." },
    { id: "aon", name: "Every other sport, by what it sells", color: "#9AA2C8", ink: "#1C1E33", pct: [25, 25, 10], sport: "rev",
      mix: { dig: 30, ooh: 30, ins: 20, mall: 5, evt: 5, inf: 5, free: 3, fly: 2 },
      when: "January and February (a quarter of each month), then 10% in March",
      hoard: "No separate hoarding: AOP branding at the practice places (turfs, courts, pools, trek groups).",
      inf: "Sport creators only where the sport is selling: winter treks, race season (Vadodara Marathon 31 Jan, Indore Marathon in Feb), Bajaj Pune Grand Tour 26 to 31 Jan, IPL from 14 Mar (Gujarat cricket).",
      social: "One post a week per sport, from AOP partners and customers; the Pune sport of the month.",
      boost: "Money follows sales: each sport gets the share of this bucket that it had of 2026 turnover that month (table below). Boost only posts that beat the page's average." },
    { id: "loc", name: "Local moments", color: "#C9CDD9", ink: "#1C1E33", pct: [5, 5, 0], sport: null,
      mix: { dig: 20, ooh: 10, ins: 20, mall: 10, evt: 40, inf: 0, free: 0, fly: 0 },
      when: "Uttarayan 14 Jan (Gujarat), Republic Day 26 Jan (Movement for All), Beach Day Surat and Valentine's Day (Feb)",
      hoard: "None.", inf: "Local city creators on the day.", social: "Event photos and reels the same day.", boost: "Small, in the event week only, 3 km." },
    { id: "na", name: "New arrivals (SS27)", color: "#6B4FBB", ink: "#fff", pct: [0, 40, 10], sport: { running: 0.4, swimming: 0.3, fitness: 0.3 },
      mix: { dig: 30, ooh: 25, ins: 25, mall: 5, evt: 0, inf: 12, free: 3, fly: 0 },
      when: "From 1 Feb (new shoes, phase 1); SS27 range in store from 15 Feb",
      hoard: "\"New season is in\": the Kiprun shoe, SS27 swimwear and women's fitness wear, with prices.",
      inf: "First-look and try-on reels, 2 per store: runners for shoes, women creators for apparel and swimwear.",
      social: "A product drop every Friday; a carousel of five new pieces; teammate try-ons.",
      boost: "Catalogue ads to people within 8 km; retarget site and app visitors who looked at new arrivals." },
    { id: "swim", name: "Summer water: learn to swim", color: "#0096C7", ink: "#fff", pct: [0, 10, 25], sport: { swimming: 1 },
      mix: { dig: 25, ooh: 35, ins: 15, mall: 5, evt: 5, inf: 10, free: 3, fly: 2 },
      when: "In store from 15 Feb, outside the store from 15 Mar (the water plan)",
      hoard: "\"Summer fun with water\": a family in the pool, the starter-kit price and the nearest partner pool.",
      inf: "Swim coaches and parents; beginner journeys (Pune water plan: 3 months of influencers from 15 Mar).",
      social: "First-swim videos from partner pools, beginner stories, the 30-day swim streak.",
      boost: "Parents 28 to 45, 5 km around stores and partner pools; push Learn to Swim sign-ups first, then kits." },
    { id: "wd", name: "Women's Day x sport", color: "#C2185B", ink: "#fff", pct: [0, 0, 25], sport: { fitness: 0.4, running: 0.3, swimming: 0.3 },
      mix: { dig: 25, ooh: 15, ins: 15, mall: 5, evt: 20, inf: 15, free: 5, fly: 0 },
      when: "1 to 14 Mar; Women's Day weekend Sat 6 and Sun 7 Mar",
      hoard: "\"She plays\": women from our own community (runners, swimmers, gym members), no models.",
      inf: "Women creators in fitness, running and swimming, 2 per city; a women's run and a Women Who Swim session.",
      social: "Real women customers and teammates, their sport and their kit; women-only events.",
      boost: "Women 22 to 45, 5 km; event sign-ups first, then products." },
    { id: "run", name: "Running: Kiprun and race season", color: "#3643BA", ink: "#fff", pct: [0, 0, 15], sport: { running: 1 },
      mix: { dig: 30, ooh: 20, ins: 15, mall: 0, evt: 20, inf: 12, free: 3, fly: 0 },
      when: "March: Kiprun Challenger ₹9,999 launches (March to May)",
      hoard: "The shoe and its price: Kiprun Challenger, ₹9,999.",
      inf: "Runners and run-club leaders; a free gait check in store.",
      social: "Run club Saturdays at 6 AM, bib-collection days, shoe fitting after the run.",
      boost: "Runners and race-participant lookalikes, 8 km." },
    { id: "trav", name: "Travel and summer treks", color: "#2E7D32", ink: "#fff", pct: [0, 0, 15], sport: { mountain: 1 },
      mix: { dig: 40, ooh: 20, ins: 20, mall: 5, evt: 5, inf: 10, free: 0, fly: 0 },
      when: "March, ahead of the summer holidays",
      hoard: "\"Pack for summer\": trek bag, shoe and jacket with prices; near airports and highways where we have sites.",
      inf: "Travel and trek creators: packing reels, weekend getaways near the city.",
      social: "Packing lists, Himalayan summer treks, weekend getaways near the city.",
      boost: "Travel interests, 25 to 45, 10 km." }
  ],
  /* 2027 slide: per city hoardings, influencer pool and AOP mix (travel / gym / yoga / racket) */
  cityMix: {
    Pune: { hoard: 5, pool: 70, mix: [1, 1, 1, 2] }, Ahmedabad: { hoard: 2, pool: 40, mix: [2, 3, 2, 3] }, Vadodara: { hoard: 4, pool: 40, mix: [2, 3, 2, 3] },
    Surat: { hoard: 3, pool: 40, mix: [2, 3, 2, 3] }, Rajkot: { hoard: 1, pool: 40, mix: [2, 3, 2, 3] }, Indore: { hoard: 0, pool: 40, mix: [1, 1, 1, 2] },
    Bhopal: { hoard: 1, pool: 40, mix: [1, 1, 1, 2] }, Gwalior: { hoard: 0, pool: 40, mix: [1, 1, 1, 2] }
  },
  storeCity: { Wakad: "Pune", Wagholi: "Pune", "SGS Mall": "Pune", NIBM: "Pune", Amanora: "Pune", Motera: "Ahmedabad", Nexus: "Ahmedabad", Dumas: "Surat", Baroda: "Vadodara", Rajkot: "Rajkot", Indore: "Indore", Bhopal: "Bhopal", Gwalior: "Gwalior" }
};

/* Pictures and films per campaign: our own (assets/videos, assets/img) and official Decathlon films from other countries (YouTube ids,
   checked 9 Nov 2026 via YouTube oEmbed: author = the Decathlon country channel). They play only when clicked. */
window.BUDGET27.media = {
  fit: { video: "circuit-games", img: ["gym.jpg"], yt: ["OqE_Z5L3RSY", "YrVz4sayHQg"] },
  clr: { img: ["winter-off.jpg", "gifts-1999.jpg"], contain: true, yt: ["0EM3JYLbNZE"] },
  aon: { video: "aop-wall", img: ["u-padel.jpg", "u-trek-couple.jpg"], yt: ["Y3OH-j05aqk"] },
  loc: { video: "motera", img: ["yoga-motera-playground.jpg"], yt: ["f6R_l1DcpUM"] },
  na: { img: ["u-kiprun.jpg", "swim-kit-aop.jpg"], yt: ["NjveKnMMzD4", "9LeVIZul0ZQ"] },
  swim: { img: ["swim-kit-aop.jpg", "u-family-cycle.jpg"], yt: ["9LeVIZul0ZQ", "EksBqkLXbtk"] },
  wd: { video: "run-like-a-girl", img: ["wd-pink-run.jpg"], yt: ["gvnwqy0IYwg"] },
  run: { video: "kiprun", img: ["u-runclub.jpg"], yt: ["NjveKnMMzD4"] },
  trav: { video: "winter-gear", img: ["u-trek-couple.jpg"], yt: ["DtWHQZWxk4c"] }
};
window.VIDEOS27 = {
  OqE_Z5L3RSY: { c: "Taiwan", t: "Ready to play?", w: "One line, many sports, real people: the brand promise without a product in sight." },
  YrVz4sayHQg: { c: "UK", t: "Spring into Action (TV)", w: "Season change as the reason to start: our New Year and summer starts." },
  "0EM3JYLbNZE": { c: "Malaysia", t: "We make sports accessible to the many", w: "Price as a promise, not a discount: the tone for clearance." },
  "Y3OH-j05aqk": { c: "Korea", t: "Why Decathlon is special", w: "The brand story told through the sports people play." },
  f6R_l1DcpUM: { c: "Malaysia", t: "10 years in Malaysia", w: "Local pride: how a country team tells its own story." },
  NjveKnMMzD4: { c: "Korea", t: "SS26 Running", w: "A season launch in one film: product in motion, no voice-over." },
  "9LeVIZul0ZQ": { c: "India", t: "New swimsuit collection", w: "Our own India short: the format for SS27 swimwear." },
  EksBqkLXbtk: { c: "India", t: "Swimming goggles: sports you love at prices you love", w: "Price-led product film from Decathlon India." },
  gvnwqy0IYwg: { c: "India", t: "Women's Day 2025: Play Your Own Way", w: "Last year's Women's Day film from Decathlon India: build on it." },
  DtWHQZWxk4c: { c: "Korea", t: "SS26 Hiking: Dry fast, grip hard", w: "Two product promises as the whole campaign line." },
  GuEpIysAs4M: { c: "Malaysia", t: "Made in Malaysia, episode 1", w: "Local makers as heroes; our Made in India angle." },
  hFUFMlG0B9s: { c: "India", t: "Made in India", w: "Decathlon India's own made-in-India story." },
  ZQb8FvC8jfc: { c: "India", t: "Decathlon Anthem", w: "The India brand film." }
};

/* Weather, school and mood by state and month (index 0 = January ... 5 = June). Temperatures: typical daytime high and night low
   in °C (long-term averages, rounded; Pune, Ahmedabad, Bhopal and Indore). School: typical for the boards in each state (CBSE and the
   state board); dates move a little every year. Our own summary, to check each year. */
window.SEASON27 = {
  Pune: { film: "pune-state", img: "pune-ghats.jpg", city: "Pune", months: [
    { hi: 30, lo: 11, sky: "Dry, cool mornings, warm afternoons", kids: "School term; annual sports days; winter picnics and treks", us: "Best month to start fitness and running outdoors; early-morning run clubs" },
    { hi: 32, lo: 12, sky: "Dry and pleasant", kids: "Class 12 boards (HSC) from mid-Feb, CBSE boards from mid-Feb; families stay home", us: "Parents shop for themselves, not trips; new arrivals and fitness at home" },
    { hi: 35, lo: 16, sky: "Hot afternoons start", kids: "Class 10 boards (SSC) and school finals; Holi", us: "Talk to parents after exams: summer plans, swimming sign-ups" },
    { hi: 37, lo: 20, sky: "Hot and dry", kids: "Results; schools close in late April; summer camps start", us: "Swimming, summer camps, travel bags" },
    { hi: 36, lo: 22, sky: "Hottest; pre-monsoon showers late in the month", kids: "Summer holidays: swim classes, camps, hill-station trips, late mornings and screens", us: "Peak water month; get kids off screens: camps and learn-to-swim" },
    { hi: 31, lo: 23, sky: "Monsoon arrives around 10 June", kids: "Schools reopen mid-June; back to school", us: "Back-to-school kits, rainwear, indoor sports" } ] },
  Gujarat: { film: "gujarat-state-1", img: "gujarat-coast.jpg", city: "Ahmedabad", months: [
    { hi: 28, lo: 12, sky: "Cool mornings, steady kite winds", kids: "Uttarayan kite holidays 14 and 15 Jan; school term", us: "Uttarayan week on our Gujarat pages; fitness and running in the cool mornings" },
    { hi: 31, lo: 14, sky: "Pleasant, warming", kids: "Board exam preparation; CBSE boards from mid-Feb", us: "Beach Day in Surat; new arrivals" },
    { hi: 36, lo: 19, sky: "Hot", kids: "Gujarat board exams (March) and finals; Holi", us: "Women's Day; IPL starts 14 Mar: cricket in Ahmedabad (Motera)" },
    { hi: 40, lo: 23, sky: "Very hot", kids: "Exams over; vacations start late April to early May", us: "Swimming and indoor sports; early-morning and evening activities only" },
    { hi: 42, lo: 26, sky: "Peak heat, many days above 42°C", kids: "Summer vacation to early June: swimming, cricket camps, family trips", us: "Pools are the place to be: learn-to-swim, cricket camps at dawn" },
    { hi: 38, lo: 27, sky: "Humid; monsoon from late June", kids: "Schools reopen in early June", us: "Back to school; monsoon gear" } ] },
  MP: { film: "mp-state", img: "mp-rajwada.jpg", city: "Bhopal and Indore", months: [
    { hi: 25, lo: 10, sky: "Coldest month, foggy mornings", kids: "School term; late, cold mornings", us: "Winter wear and indoor fitness; Indore Marathon training" },
    { hi: 28, lo: 12, sky: "Cool and pleasant", kids: "MP board exams start (Feb); CBSE from mid-Feb", us: "Indore Marathon (first Sunday, to confirm); new arrivals" },
    { hi: 33, lo: 16, sky: "Warming", kids: "Board exams continue; Holi", us: "Women's Day; Holi; running into summer" },
    { hi: 38, lo: 21, sky: "Hot and dry", kids: "New school session from 1 April in many schools", us: "School kits; swimming starts" },
    { hi: 41, lo: 25, sky: "Peak heat", kids: "Summer vacation (May to mid-June)", us: "Learn to swim (Indore: 1,000 People Mission), summer camps" },
    { hi: 35, lo: 24, sky: "Monsoon from mid to late June", kids: "Schools reopen mid-June", us: "Back to school; rainwear" } ] }
};

/* Q1 allocation for one state (or "West" = all three): lakh by campaign and month, by sport, by channel. */
window.BUDGET27.alloc = function (st) {
  const B = window.BUDGET27, D = window.DATA, TO = window.SPORT_TO_2026, SP = window.SPORTS27;
  const states = st === "West" ? ["Pune", "Gujarat", "MP"] : [st];
  const out = { camp: {}, sport: {}, sportM: {}, channel: {}, month: [0, 0, 0], total: 0 };
  B.campaigns.forEach(c => { out.camp[c.id] = [0, 0, 0]; });
  SP.sports.forEach(s => { out.sport[s.id] = 0; out.sportM[s.id] = [0, 0, 0]; });
  B.channels.forEach(([k]) => { out.channel[k] = 0; });
  const credit = (id, m, v) => { out.sport[id] += v; out.sportM[id][m] += v; };
  states.forEach(s => [0, 1, 2].forEach(m => {
    const month = D.spend[s].y27[m];
    out.month[m] += month; out.total += month;
    B.campaigns.forEach(c => {
      const v = month * c.pct[m] / 100;
      if (!v) return;
      out.camp[c.id][m] += v;
      B.channels.forEach(([k]) => { out.channel[k] += v * (c.mix[k] || 0) / 100; });
      if (c.sport === "rev") {
        const others = SP.sports.filter(x => x.id !== "fitness" && x.where.includes(s));
        const w = others.map(x => (TO[x.id][s].in[m] || 0) + (TO[x.id][s].on[m] || 0)), tw = w.reduce((a, b) => a + b, 0) || 1;
        others.forEach((x, i) => credit(x.id, m, v * w[i] / tw));
      } else if (c.sport) {
        const ids = Object.keys(c.sport).filter(id => SP.sports.find(x => x.id === id).where.includes(s));
        const tw = ids.reduce((a, id) => a + c.sport[id], 0) || 1;
        ids.forEach(id => credit(id, m, v * c.sport[id] / tw));
      }
    });
  }));
  return out;
};
