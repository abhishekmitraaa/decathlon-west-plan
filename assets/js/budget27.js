/* Q1 2027 budget. REAL NUMBERS (fixed 10 Nov 2026, the user rejected the earlier % proposal, e.g. "Movement for All ₹37.72 L"):
   Pune: the Pune spend plan (data_recent_marketing_spends_pune_plan___1.xlsx, BFS PUNE), line by line: Jan ₹30,54,000, Feb ₹19,89,000,
   Mar ₹27,90,000 (PUNE_PLAN in puneplan.js; the sheet's March ₹29,39,000 held a copied January influencer line, removed). Every line is credited to the campaign it serves (camp below = PUNE_PLAN camp names).
   Gujarat and MP: only month totals exist (ultimate_data_sheet_1.xlsx, DATA.spend.*.y27); there is no campaign split in our files,
   so their money stays UNSPLIT (out.unsplit): no campaign, sport or channel figure is made up for them (user, 10 Nov 2026: show what we
   actually spend on each campaign in its month).
   sport: how a campaign's money is credited to sports ("rev" = by each sport's 2026 turnover that month and state; null = not a sport). */
window.BUDGET27 = {
  // channels follow the Pune spend plan (BFS PUNE, 10 Nov 2026): the lines Pune actually buys
  channels: [
    ["aop", "AOPs and free products"], ["ooh", "Hoardings"], ["ins", "In-store comms"], ["inf", "Influencers"], ["evt", "Events"],
    ["cont", "Content: reels, media vendor"], ["mall", "In-mall"], ["boost", "Social boost and digital"], ["fly", "Flyers and vouchers"]
  ],
  campaigns: [
    { id: "fit", camp: "Movement for All", name: "Movement for All: New Year, New Moves", color: "#E0A100", ink: "#1C1E33", sport: { fitness: 1 },
      when: "January (influencers 2 to 17 Jan); partner events: yoga, run, gym and Zumba",
      hoard: "\"New Year, New Moves\": one hero kit and its price (mat, dumbbells, bands) and the distance to the store. Pune sport of the month: fitness.",
      pune: "Pune plan, January: partner events yoga ₹75,000 (500 walk-ins), run ₹75,000 (400), gym, fitness and Zumba ₹1,50,000 (500); 5 hoardings ₹5,25,000; 17 influencers 2 to 17 Jan ₹1,49,000; 17 reels on Let's Play Pune ₹1,00,000. January total ₹10,74,000. Participation goal for the partner events together: 7,500 people, 1,500 per store.",
      inf: "Pune: 17 influencers, 2 to 17 Jan. In 2026 the same campaign got 14 lakh views at ₹0.11 a view.",
      social: "30-day challenge reels, \"kit under ₹999\" carousels, teammates training in store, gym AOP members' stories. Four posts a week.",
      boost: "Boost the two best reels each week, 5 km around each store, fitness interests, 18 to 40. Retarget video viewers with the store offer." },
    { id: "clr", camp: "Clearance sale", name: "Clearance sale", color: "#D6453D", ink: "#fff", sport: null,
      when: "January; the 2026 clearance ran 10 Jan to 15 Feb: our biggest commercial moment of the quarter",
      hoard: "Price-led: the sale dates, three hero prices, \"in store now\". On the existing hoardings for the sale weeks only, then back to fitness.",
      pune: "Pune plan, January: 50 influencers for the clearance sale ₹5,00,000 (dates TBD); in-store communication ₹5,50,000; in-mall ₹1,65,000. Total ₹12,15,000. In 2026 the clearance influencers got 39 lakh views at ₹0.13 a view, the best reach of the year.",
      inf: "Haul reels (\"what I got for under ₹999\"): 50 creators in Pune, on day one and on the last weekend.",
      social: "Countdown stories, daily stock drops, crowd videos from the store. WhatsApp to past customers on day one and the last weekend.",
      boost: "Heaviest on the opening and closing weekends; retarget store visitors and past buyers, 3 to 8 km." },
    { id: "aon", camp: "AOPs", name: "AOPs: every sport at its practice places", color: "#12A150", ink: "#fff", sport: "rev",
      when: "Every month: 27 AOPs a month in Pune (Wakad 6, Wagholi 6, SGS 5, NIBM 5, Amanora 5)",
      hoard: "No separate hoarding: AOP branding at the practice places (turfs, courts, pools, gyms, trek groups).",
      pune: "Pune plan: AOPs ₹7,65,000 every month (Wakad 6 x 40,000; Wagholi, SGS, NIBM, Amanora x 25,000), ₹22,95,000 for Q1.",
      inf: "AOP partners' own coaches and members post; no paid creators on this line.",
      social: "One post a week per sport, from AOP partners and customers; the Pune sport of the month.",
      boost: "Money follows sales: AOP money is credited to each sport by its share of 2026 turnover that month." },
    { id: "na", camp: "New arrivals", name: "New arrivals (SS27)", color: "#6B4FBB", ink: "#fff", sport: { running: 0.4, swimming: 0.3, fitness: 0.3 },
      when: "February; influencers 24 Feb to 6 Mar",
      hoard: "\"New season is in\": the Kiprun shoe, SS27 swimwear and women's fitness wear, with prices.",
      pune: "Pune plan, February: 4 hoardings ₹4,25,000; 15 influencers 24 Feb to 6 Mar ₹1,49,000; 20 reels on Let's Play Pune ₹1,00,000; in-store ₹5,50,000. Total ₹12,24,000. In 2026 new arrivals cost ₹0.63 a view, the dearest: brief try-ons that sell, not hauls.",
      inf: "First-look and try-on reels: runners for shoes, women creators for apparel and swimwear.",
      social: "A product drop every Friday; a carousel of five new pieces; teammate try-ons.",
      boost: "Catalogue ads to people within 8 km; retarget site and app visitors who looked at new arrivals." },
    { id: "wd", camp: "Women's Day", name: "Women's Day x sport", color: "#C2185B", ink: "#fff", sport: { fitness: 0.4, running: 0.3, swimming: 0.3 },
      when: "Women's Day weekend Sat 6 and Sun 7 Mar (Women's Day is Mon 8 Mar)",
      hoard: "\"She plays\": women from our own community (runners, swimmers, gym members), no models.",
      pune: "Pune plan, March: Women's Day weekend event ₹1,50,000, 800 walk-ins expected.",
      inf: "Women creators in fitness, running and swimming; a women's run and a Women Who Swim session.",
      social: "Real women customers and teammates, their sport and their kit; women-only events.",
      boost: "Women 22 to 45, 5 km; event sign-ups first, then products." },
    { id: "sum", camp: "Summer", name: "Summer: water sports first", color: "#0096C7", ink: "#fff", sport: { swimming: 0.6, running: 0.2, mountain: 0.2 },
      when: "March (summer + summer camp influencers March to May); swimming in store from 15 Feb, outside from 15 Mar",
      hoard: "All 7 Pune boards on swimming in March: \"Summer fun with water\", a family in the pool, the starter-kit price and the nearest partner pool.",
      pune: "Pune plan, March: 7 swimming hoardings ₹7,25,000; summer + summer camp influencers, 50 from March to May ₹5,00,000; 17 reels ₹1,00,000; in-store ₹5,50,000. Total ₹18,75,000. At least 10 swimming academies in every catchment by 20 Feb.",
      inf: "Water first: swim coaches, parents and beginner swimmers, then runners and summer-trek creators. Pune spend plan: 50 summer + summer camp influencers (₹5 L, March to May). Influencer sheet 2027: Summer 6 to 15 Mar, 35 (₹3.5 L); April summer 40 (₹4.5 L); May summer 40 (₹4.5 L).",
      social: "First-swim videos from partner pools, run club Saturdays, packing lists for summer treks.",
      boost: "Parents 28 to 45 near stores and partner pools; runners 8 km; travel interests 10 km." }
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
  fit: { video: "circuit-games", img: ["cc/fitness.jpg"], yt: ["OqE_Z5L3RSY", "YrVz4sayHQg"] },
  clr: { img: ["winter-off.jpg"], contain: true, yt: ["0EM3JYLbNZE"] },
  aon: { video: "aop-wall", img: ["su/su-pune-ride.jpg"], yt: ["Y3OH-j05aqk"] },
  na: { img: ["u-kiprun.jpg", "water/water-women-cover.jpg"], yt: ["NjveKnMMzD4", "9LeVIZul0ZQ"] },
  sum: { video: "water-armbands", img: ["water/water-women-pool.jpg"], yt: ["9LeVIZul0ZQ", "NjveKnMMzD4", "DtWHQZWxk4c"] },
  wd: { video: "run-like-a-girl", img: ["water/water-women-cover.jpg"], yt: ["gvnwqy0IYwg"] },

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

/* Q1 allocation for one state (or "West" = all three): lakh by campaign and month, by sport, by channel.
   Pune = the real spend plan lines; Gujarat and MP = their 2027 month totals, not split (out.unsplit). */
window.BUDGET27.month = function (st, m) { // Q1 month budget in lakh (m: 0 = Jan)
  const PP = window.PUNE_PLAN;
  return st === "Pune" && PP ? PP.totals[m + 2] / 1e5 : window.DATA.spend[st].y27[m];
};
window.BUDGET27.alloc = function (st) {
  const B = window.BUDGET27, TO = window.SPORT_TO_2026, SP = window.SPORTS27, PP = window.PUNE_PLAN;
  const states = st === "West" ? ["Pune", "Gujarat", "MP"] : [st];
  const out = { camp: {}, sport: {}, sportM: {}, campSport: {}, channel: {}, campCh: {}, month: [0, 0, 0], total: 0, unsplit: [0, 0, 0], split: 0 };
  B.campaigns.forEach(c => { out.camp[c.id] = [0, 0, 0]; out.campSport[c.id] = {}; out.campCh[c.id] = {}; });
  SP.sports.forEach(s => { out.sport[s.id] = 0; out.sportM[s.id] = [0, 0, 0]; });
  B.channels.forEach(([k]) => { out.channel[k] = 0; });
  const byCamp = Object.fromEntries(B.campaigns.map(c => [c.camp, c]));
  states.forEach(s => [0, 1, 2].forEach(m => {
    const month = B.month(s, m), ls = PP.lines.filter(x => x.m === m + 2), lt = ls.reduce((a, x) => a + x.v, 0);
    out.month[m] += month; out.total += month;
    if (s !== "Pune") { out.unsplit[m] += month; return; }
    out.split += month;
    ls.forEach(x => {
      const c = byCamp[x.camp]; if (!c) return;
      const v = x.v / 1e5;
      out.camp[c.id][m] += v; out.channel[x.ch] = (out.channel[x.ch] || 0) + v; out.campCh[c.id][x.ch] = (out.campCh[c.id][x.ch] || 0) + v;
      const credit = (id, w) => { out.sport[id] += w; out.sportM[id][m] += w; out.campSport[c.id][id] = (out.campSport[c.id][id] || 0) + w; };
      if (c.sport === "rev") {
        const all = SP.sports.filter(y => y.where.includes(s));
        const w = all.map(y => (TO[y.id][s].in[m] || 0) + (TO[y.id][s].on[m] || 0)), tw = w.reduce((a, b) => a + b, 0) || 1;
        all.forEach((y, i) => credit(y.id, v * w[i] / tw));
      } else if (c.sport) {
        const ids = Object.keys(c.sport).filter(id => SP.sports.find(y => y.id === id).where.includes(s));
        const tw = ids.reduce((a, id) => a + c.sport[id], 0) || 1;
        ids.forEach(id => credit(id, v * c.sport[id] / tw));
      }
    });
  }));
  return out;
};
