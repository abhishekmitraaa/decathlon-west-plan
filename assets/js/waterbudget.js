/* Water sports 2027: budget and plan, February to June, from the user's WATER_SPORTS.xlsx (sheet "CDMR", shared 21 Nov 2026).
   Editable on the live site: Edit -> change any number -> Save for everyone with the edit PIN (same Supabase store and PIN as the
   Kolkata page: table public.west_plan_docs, id "water2027"). If the database cannot be reached the page shows the sheet's numbers.
   April and June (user, 22 Nov 2026): where the sheet left April (influencers, Meta, boosts) or June (influencers) empty, they continue March.
   Influencer cost: the user's rule of thumb, about ₹10,000 per influencer in Pune (21 Nov 2026); the same rate is the starting value
   for Gujarat and MP until the user sets it. Turnover goals March to June: the water plan (WATER27.stores, Pune ₹17.65 Cr, Gujarat ₹9.00 Cr). */
window.WATERBUDGET_DEFAULT = {
  v: 1,
  months: ["Feb", "Mar", "Apr", "May", "Jun"],
  rate: { Pune: 10000, Gujarat: 10000, MP: 10000 },
  hoard: [
    { city: "Pune", st: "Pune", n: [4, 6, 6, 6, 4], v: [600000, 900000, 900000, 900000, 600000] },
    { city: "Ahmedabad", st: "Gujarat", n: [2, 3, 3, 3, 2], v: [350000, 450000, 450000, 450000, 350000] },
    { city: "Baroda", st: "Gujarat", n: [4, 4, 4, 4, 4], v: [150000, 150000, 150000, 150000, 150000] },
    { city: "Surat", st: "Gujarat", n: [4, 4, 4, 4, 4], v: [600000, 600000, 600000, 600000, 600000] }
  ],
  infl: [
    { city: "Pune", st: "Pune", n: [15, 17, 17, 17, 17] }, { city: "Ahmedabad", st: "Gujarat", n: [15, 17, 17, 17, 17] },
    { city: "Baroda", st: "Gujarat", n: [7, 7, 7, 7, 7] }, { city: "Surat", st: "Gujarat", n: [10, 15, 15, 15, 15] },
    { city: "Rajkot", st: "Gujarat", n: [7, 7, 7, 7, 7] }, { city: "Indore", st: "MP", n: [20, 20, 20, 20, 20] },
    { city: "Bhopal", st: "MP", n: [10, 7, 7, 7, 7] }, { city: "Gwalior", st: "MP", n: [7, 7, 7, 7, 7] },
    { city: "Jabalpur", st: "MP", ooc: 1, n: [4, 4, 4, 4, 4] }, { city: "Chhindwara", st: "MP", ooc: 1, n: [4, 4, 4, 4, 4] },
    { city: "Gandhinagar", st: "Gujarat", ooc: 1, n: [0, 0, 0, 0, 0] }, { city: "Jamnagar", st: "Gujarat", ooc: 1, n: [3, 3, 3, 3, 3] },
    { city: "Kachchh", st: "Gujarat", ooc: 1, n: [3, 3, 3, 3, 3] }
  ],
  meta: [
    { city: "Pune", st: "Pune", v: [30000, 50000, 50000, 50000, null] }, { city: "Ahmedabad", st: "Gujarat", v: [30000, 50000, 50000, 50000, null] },
    { city: "Baroda", st: "Gujarat", v: [20000, 30000, 30000, 30000, null] }, { city: "Surat", st: "Gujarat", v: [30000, 40000, 40000, 40000, null] },
    { city: "Rajkot", st: "Gujarat", v: [25000, 25000, 25000, 25000, null] }, { city: "Indore", st: "MP", v: [30000, 30000, 30000, 30000, null] },
    { city: "Bhopal", st: "MP", v: [30000, 30000, 30000, 30000, null] }, { city: "Gwalior", st: "MP", v: [25000, 25000, 25000, 25000, null] },
    { city: "Jabalpur (out of catchment)", st: "MP", v: [35000, 45000, 45000, 45000, null] }, { city: "Gandhinagar (out of catchment)", st: "Gujarat", v: [35000, 45000, 45000, 45000, null] }
  ],
  boost: [
    { city: "Pune", st: "Pune", v: [20000, 30000, 30000, 30000, null] }, { city: "Ahmedabad", st: "Gujarat", v: [20000, 30000, 30000, 30000, null] },
    { city: "Baroda", st: "Gujarat", v: [20000, 20000, 20000, 20000, null] }, { city: "Surat", st: "Gujarat", v: [20000, 30000, 30000, 30000, null] },
    { city: "Rajkot", st: "Gujarat", v: [7000, 7000, 7000, 7000, null] }, { city: "Indore", st: "MP", v: [20000, 20000, 20000, 20000, null] },
    { city: "Bhopal", st: "MP", v: [20000, 20000, 20000, 20000, null] }, { city: "Gwalior", st: "MP", v: [7000, 7000, 7000, 7000, null] },
    { city: "Jabalpur (out of catchment)", st: "MP", v: [15000, 15000, 15000, 15000, null] }, { city: "Gandhinagar (out of catchment)", st: "Gujarat", v: [15000, 15000, 15000, 15000, null] }
  ],
  events: [
    { store: "Amanora", st: "Pune", v: [null, 20000, 20000, 20000, 10000] }, { store: "SGS", st: "Pune", v: [null, 20000, 20000, 20000, 10000] },
    { store: "Wagholi", st: "Pune", v: [null, 20000, 20000, 20000, 10000] }, { store: "Wakad", st: "Pune", v: [null, 20000, 20000, 20000, 10000] },
    { store: "NIBM", st: "Pune", v: [null, 20000, 20000, 20000, 10000] }, { store: "Kothrud / Baner", st: "Pune", v: [null, 20000, 20000, 20000, 10000] },
    { store: "Nexus", st: "Gujarat", v: [null, 20000, 20000, 20000, 10000] }, { store: "Motera", st: "Gujarat", v: [null, 20000, 20000, 20000, 10000] },
    { store: "Baroda", st: "Gujarat", v: [null, 20000, 20000, 20000, 10000] }, { store: "Dumas", st: "Gujarat", v: [null, 20000, 20000, 20000, 10000] },
    { store: "Adajan", st: "Gujarat", v: [null, 20000, 20000, 20000, 10000] }, { store: "Rajkot", st: "Gujarat", v: [null, 7000, 7000, 7000, 7000] },
    { store: "Bhopal", st: "MP", v: [null, 20000, 20000, 20000, 10000] }, { store: "Indore", st: "MP", v: [null, 20000, 20000, 20000, 10000] },
    { store: "Gwalior", st: "MP", v: [null, 7000, 7000, 7000, 7000] }
  ],
  aop: [
    { store: "Amanora", st: "Pune", n: 5, r: 25000 }, { store: "SGS", st: "Pune", n: 5, r: 25000 }, { store: "Wagholi", st: "Pune", n: 6, r: 25000 },
    { store: "Wakad", st: "Pune", n: 6, r: 25000 }, { store: "NIBM", st: "Pune", n: 5, r: 25000 }, { store: "Kothrud / Baner", st: "Pune", n: 3, r: 25000 },
    { store: "Nexus", st: "Gujarat", n: 5, r: 25000 }, { store: "Motera", st: "Gujarat", n: 6, r: 25000 }, { store: "Baroda", st: "Gujarat", n: 6, r: 25000 },
    { store: "Dumas", st: "Gujarat", n: 6, r: 25000 }, { store: "Adajan", st: "Gujarat", n: 5, r: 25000 }, { store: "Rajkot", st: "Gujarat", n: 3, r: 10000 },
    { store: "Bhopal", st: "MP", n: 4, r: 25000 }, { store: "Indore", st: "MP", n: 6, r: 25000 }, { store: "Gwalior", st: "MP", n: 3, r: 10000 }
  ],
  flyers: [
    { store: "Amanora", st: "Pune", v: 15000 }, { store: "SGS", st: "Pune", v: 20000 }, { store: "Wagholi", st: "Pune", v: 10000 }, { store: "Wakad", st: "Pune", v: 20000 },
    { store: "NIBM", st: "Pune", v: 16000 }, { store: "Kothrud / Baner", st: "Pune", v: 16000 }, { store: "Nexus", st: "Gujarat", v: 25000 }, { store: "Motera", st: "Gujarat", v: 20000 },
    { store: "Baroda", st: "Gujarat", v: 10000 }, { store: "Dumas", st: "Gujarat", v: 20000 }, { store: "Adajan", st: "Gujarat", v: 16000 }, { store: "Rajkot", st: "Gujarat", v: 5000 },
    { store: "Bhopal", st: "MP", v: 10000 }, { store: "Indore", st: "MP", v: 10000 }, { store: "Gwalior", st: "MP", v: 5000 }
  ],
  coach: [{ st: "Pune", n: 30, kit: 2500 }, { st: "Gujarat", n: 31, kit: 2500 }, { st: "MP", n: 13, kit: 2500 }], // one coach per partner pool (our assumption; the sheet says "all AOP coaches")
  wa: [
    { store: "Amanora", st: "Pune", n: [100, 350, 400, 500, null] }, { store: "SGS", st: "Pune", n: [100, 350, 400, 500, null] }, { store: "Wagholi", st: "Pune", n: [100, 350, 400, 500, null] },
    { store: "Wakad", st: "Pune", n: [100, 350, 400, 500, null] }, { store: "NIBM", st: "Pune", n: [100, 350, 400, 500, null] },
    { store: "Nexus", st: "Gujarat", n: [100, 350, 400, 500, null] }, { store: "Motera", st: "Gujarat", n: [100, 350, 400, 500, null] }, { store: "Baroda", st: "Gujarat", n: [100, 350, 400, 500, null] },
    { store: "Dumas", st: "Gujarat", n: [100, 350, 400, 500, null] }, { store: "Adajan", st: "Gujarat", n: [100, 350, 400, 500, null] }, { store: "Rajkot", st: "Gujarat", n: [100, 200, 250, 300, null] },
    { store: "Bhopal", st: "MP", n: [100, 350, 400, 500, null] }, { store: "Indore", st: "MP", n: [100, 350, 400, 500, null] }, { store: "Gwalior", st: "MP", n: [100, 200, 250, 300, null] }
  ],
  // WhatsApp pushes (user, 22 Nov 2026): the budget is to be agreed with the MarCom team, then filled in here. Push weeks from the water plan.
  wapush: [
    { st: "Pune", n: [1, 1, 1, 1, null], v: [null, null, null, null, null] },
    { st: "Gujarat", n: [1, 1, 1, 1, null], v: [null, null, null, null, null] },
    { st: "MP", n: [1, 1, 1, 1, null], v: [null, null, null, null, null] }
  ],
  waweeks: ["Feb, week 3", "Mar, week 2", "Apr, week 2", "May, week 1", ""],
  // Local city pages (user, 22 Nov 2026): swimming content on our city Instagram pages with the AOP coaches: how to swim, which products to use,
  // filmed at the partner pool or in the store. Pieces a month are our starting proposal; the budget is still to be set.
  city: [
    { city: "Pune", st: "Pune", n: [2, 4, 4, 4, 2], v: [null, null, null, null, null] }, { city: "Ahmedabad", st: "Gujarat", n: [2, 4, 4, 4, 2], v: [null, null, null, null, null] },
    { city: "Baroda", st: "Gujarat", n: [1, 2, 2, 2, 1], v: [null, null, null, null, null] }, { city: "Surat", st: "Gujarat", n: [2, 4, 4, 4, 2], v: [null, null, null, null, null] },
    { city: "Rajkot", st: "Gujarat", n: [1, 2, 2, 2, 1], v: [null, null, null, null, null] }, { city: "Indore", st: "MP", n: [1, 2, 2, 2, 1], v: [null, null, null, null, null] },
    { city: "Bhopal", st: "MP", n: [1, 2, 2, 2, 1], v: [null, null, null, null, null] }, { city: "Gwalior", st: "MP", n: [1, 2, 2, 2, 1], v: [null, null, null, null, null] }
  ],
  goals: [
    { name: "Wakad", st: "Pune", v: 50893673 }, { name: "Pune city and online", st: "Pune", v: 40714939 }, { name: "Amanora", st: "Pune", v: 24336155 },
    { name: "Wagholi", st: "Pune", v: 23306966 }, { name: "SGS Mall", st: "Pune", v: 22941668 }, { name: "NIBM", st: "Pune", v: 14272318 },
    { name: "Nexus", st: "Gujarat", v: 24600187 }, { name: "Motera", st: "Gujarat", v: 23058268 }, { name: "Dumas Road", st: "Gujarat", v: 19368956 },
    { name: "Baroda", st: "Gujarat", v: 18349213 }, { name: "Rajkot", st: "Gujarat", v: 4626531 }
  ],
  notes: ""
};

window.WATERBUDGET_CITYPAGES = [
  ["Learn to swim with our coach", "Short reels at the partner pool: an AOP coach teaches one skill a week (breathing, floating, kicking, the first length)."],
  ["What to wear and pack", "The coach in our store: goggles that fit, caps, swimwear for beginners, kickboard and pull buoy, what a child needs for the first class."],
  ["Coach at the store", "Invite the coaches to the store on weekends: a swim kit clinic, questions answered, sign-ups for the free classes in our AOPs."],
  ["Parents and first swims", "Tips for a child's first class and for the summer camp; tag the partner pool so families can book."],
  ["Women Who Swim", "Women coaches and swimmers: cover-up swimwear, women-only batches at our partner pools."]
];

window.WATERBUDGET_CAMPAIGNS = [
  { m: "Jan", t: "Build the ecosystem", c: ["Sign the pool partnerships before the February deadline (74 across the West at ₹25,000; Rajkot and Gwalior ₹10,000) and give every partner-pool coach a ₹2,500 kit", "30-Day Swim Challenge: swim streaks, Women Who Swim", "Water team in place 10 Jan; Pune training 19-20 Jan"], b: "Pools, academies and coaches are ready before the learners arrive. No ad money in January in the sheet." },
  { m: "Feb", t: "In store goes live", c: ["Mon 15 Feb: summer campaign, CAD and golden peg in every store", "WhatsApp community starts: 100 members a store", "Pool tie-ups and checklist flyers done by the Feb deadline", "Swim Together family weekends; Beach Day Surat; coaches seminar 26-28 Feb"], b: "Catch the early learners and start the community we sell to all summer." },
  { m: "Mar", t: "Outside goes live", c: ["Mon 15 Mar: hoardings, flyers, influencers", "Decathlon Swim League: academy vs academy", "Women Who Swim on Women's Day weekend (6-7 Mar)", "Mid-week events: Aqua Zumba with family and friends; learn to swim with coaches, 5 free classes for our customers"], b: "The season starts: new swimmers and families, priority 1 in the sheet (capture the learners)." },
  { m: "Apr", t: "School holidays", c: ["Summer Swim Movement and the 1,000 People milestone", "Summer Camp learn-to-swim week with partner pools (19 Apr - 2 May)", "Influencers, Meta and boosts at March's level", "Events twice a month; WhatsApp 400 a store"], b: "April was the West's second-biggest water month in 2026 (₹6.81 Cr). Influencers, Meta and boosts continue at March's level." },
  { m: "May", t: "The peak", c: ["Influencers, Meta and boosts", "Sports Utsav", "Events twice a month; WhatsApp 500 a store"], b: "May was the biggest water month in 2026 (₹7.46 Cr)." },
  { m: "Jun", t: "Close and keep them", c: ["One event per store", "Influencers at March's level", "Pune down to 4 boards", "Monsoon and back to school; summer review in July"], b: "Priority 2 in the sheet: keep this year's swimmers coming back next year." }
];

(() => {
  const SB = { url: "https://vxdhhgdfubqedfpwfyrb.supabase.co", key: "sb_publishable_5DJXCUF-gyul7S71vHAHQQ_oSYZHZmP", id: "water2027" };
  const el = document.getElementById("wbApp");
  if (!el) return;
  const $ = (s, r = el) => r.querySelector(s), $$ = (s, r = el) => [...r.querySelectorAll(s)];
  const esc = s => String(s ?? "").replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
  const clone = o => JSON.parse(JSON.stringify(o));
  // money in rupees: under ₹1 L as K (₹20K, ₹2.5K), then L, then Cr
  const L = n => { const a = Math.abs(n); if (a < 1000) return "₹" + Math.round(n).toLocaleString("en-IN"); if (a < 1e5) return "₹" + +(n / 1e3).toFixed(1) + "K"; if (a >= 1e7) return "₹" + (n / 1e7).toFixed(2) + " Cr"; return "₹" + (n / 1e5).toLocaleString("en-IN", { maximumFractionDigits: 2 }) + " L"; };
  const Cr = n => "₹" + (n / 1e7).toFixed(2) + " Cr";
  const N = v => (v == null || v === "" || isNaN(+v)) ? 0 : +v;
  const STS = [["Pune", "#3643BA"], ["Gujarat", "#00A99D"], ["MP", "#7B3FC4"]];
  const CH = [["hoard", "Hoardings (3D or digital)", "#10135A"], ["infl", "Influencers", "#E8590C"], ["meta", "Meta ads", "#3643BA"], ["boost", "Instagram boosts", "#C13584"],
    ["events", "Events", "#1BAA5E"], ["aop", "Pool partnerships (AOPs)", "#0096C7"], ["flyers", "Checklist flyers", "#F2B705"], ["coach", "Coach kits", "#7B3FC4"], ["wapush", "WhatsApp pushes (budget with MarCom)", "#25D366"], ["city", "Local city pages", "#F28C28"]];
  let doc = clone(window.WATERBUDGET_DEFAULT), editing = false;

  // money of one line, by month (5 months) and by state; one-off lines (AOP, flyers, coach kits) count in February (the sheet's deadline)
  const lineMonths = (k, d = doc) => {
    const z = () => [0, 0, 0, 0, 0];
    const by = Object.fromEntries(STS.map(([s]) => [s, z()]));
    const add = (st, i, v) => { if (by[st]) by[st][i] += v; };
    if (k === "hoard" || k === "meta" || k === "boost" || k === "events" || k === "wapush" || k === "city") (d[k] || []).forEach(r => r.v.forEach((v, i) => add(r.st, i, N(v))));
    if (k === "infl") d.infl.forEach(r => r.n.forEach((v, i) => add(r.st, i, N(v) * N(d.rate[r.st]))));
    if (k === "aop") d.aop.forEach(r => add(r.st, 0, N(r.n) * N(r.r)));
    if (k === "flyers") d.flyers.forEach(r => add(r.st, 0, N(r.v)));
    if (k === "coach") d.coach.forEach(r => add(r.st, 0, N(r.n) * N(r.kit)));
    return by;
  };
  const sum = a => a.reduce((x, y) => x + y, 0);
  const totals = () => {
    const ch = {}, st = Object.fromEntries(STS.map(([s]) => [s, 0])), mo = [0, 0, 0, 0, 0];
    CH.forEach(([k]) => { const by = lineMonths(k); ch[k] = 0; STS.forEach(([s]) => { by[s].forEach((v, i) => { ch[k] += v; st[s] += v; mo[i] += v; }); }); });
    return { ch, st, mo, all: sum(mo) };
  };

  const tbd = () => { const out = []; if (!sum((doc.wapush || []).flatMap(r => r.v.map(N)))) out.push("WhatsApp pushes"); if (!sum((doc.city || []).flatMap(r => r.v.map(N)))) out.push("local city pages"); return out.join(" and "); };
  // page view (water2027.js): state "all" | Pune | Gujarat | MP, and the month view (h1 = Jan to Jun, or one month)
  const VIEW = () => window.W27_VIEW || { state: "all", view: "h1" };
  const MI = { jan: -1, feb: 0, mar: 1, apr: 2, may: 3, jun: 4 };
  // the Excel-like view: every line of spend, city by city and store by store, for the chosen month and state
  const CITIES = { Pune: ["Pune"], Gujarat: ["Ahmedabad", "Baroda", "Surat", "Rajkot", "Gandhinagar", "Jamnagar", "Kachchh"], MP: ["Indore", "Bhopal", "Gwalior", "Jabalpur", "Chhindwara"] };
  const STORES = { Pune: ["Amanora", "SGS", "Wagholi", "Wakad", "NIBM", "Kothrud / Baner"], Ahmedabad: ["Nexus", "Motera"], Baroda: ["Baroda"], Surat: ["Dumas", "Adajan"], Rajkot: ["Rajkot"], Indore: ["Indore"], Bhopal: ["Bhopal"], Gwalior: ["Gwalior"] };
  const OOC = ["Gandhinagar", "Jamnagar", "Kachchh", "Jabalpur", "Chhindwara"];
  const cityOf = n => String(n).replace(" (out of catchment)", "");
  const storeTable = (state, mi, sOK, mOK, scope) => {
    const COLS = [["hoard", "Hoardings"], ["infl", "Influencers"], ["meta", "Meta ads"], ["boost", "Insta boosts"], ["events", "Events"], ["aop", "Pools"], ["flyers", "Flyers"], ["coach", "Coach kits"]];
    const mSum = arr => arr.reduce((t, v, i) => t + (mOK(i) ? N(v) : 0), 0);
    const feb = mOK(0);
    const cityRow = (st, c) => {
      const h = doc.hoard.find(r => r.city === c), inf = doc.infl.find(r => r.city === c), me = doc.meta.find(r => cityOf(r.city) === c), bo = doc.boost.find(r => cityOf(r.city) === c);
      const boards = h ? (mi == null ? `${Math.min(...h.n.map(N))}-${Math.max(...h.n.map(N))} boards` : `${N(h.n[mi])} boards`) : "";
      return { hoard: h ? mSum(h.v) : 0, boards, infl: inf ? mSum(inf.n) * N(doc.rate[st]) : 0, inflN: inf ? mSum(inf.n) : 0, meta: me ? mSum(me.v) : 0, boost: bo ? mSum(bo.v) : 0, events: 0, aop: 0, flyers: 0, coach: 0 };
    };
    const storeRow = (st, name) => {
      const ev = doc.events.find(r => r.store === name), ap = doc.aop.find(r => r.store === name), fl = doc.flyers.find(r => r.store === name);
      const statePools = sum(doc.aop.filter(r => r.st === st).map(r => N(r.n))), co = doc.coach.find(r => r.st === st);
      const coach = feb && ap && co && statePools ? N(co.n) * N(co.kit) * N(ap.n) / statePools : 0;
      return { hoard: 0, infl: 0, meta: 0, boost: 0, events: ev ? mSum(ev.v) : 0, aop: feb && ap ? N(ap.n) * N(ap.r) : 0, pools: ap ? N(ap.n) : 0, flyers: feb && fl ? N(fl.v) : 0, coach };
    };
    const tot = r => COLS.reduce((t, [k]) => t + (r[k] || 0), 0);
    const cell = (v, extra) => `<td>${v ? L(v) : '<span class="z">-</span>'}${extra ? `<small>${extra}</small>` : ""}</td>`;
    let body = "", grand = Object.fromEntries(COLS.map(([k]) => [k, 0]));
    STS.filter(([st]) => sOK(st)).forEach(([st, col]) => {
      const sub = Object.fromEntries(COLS.map(([k]) => [k, 0]));
      body += `<tr class="st"><th colspan="${COLS.length + 2}" style="--c:${col}">${st}</th></tr>`;
      CITIES[st].forEach(c => {
        const cr = cityRow(st, c), stores = STORES[c] || [];
        const rows = stores.map(n => [n, storeRow(st, n)]);
        const cityTot = tot(cr) + sum(rows.map(([, r]) => tot(r)));
        if (!cityTot && !stores.length) return;
        COLS.forEach(([k]) => { sub[k] += (cr[k] || 0) + sum(rows.map(([, r]) => r[k] || 0)); });
        body += `<tr class="city"><th>${esc(c)}${OOC.includes(c) ? "<small>out of catchment</small>" : "<small>city-wide</small>"}</th>${cell(cr.hoard, cr.boards)}${cell(cr.infl, cr.inflN ? cr.inflN + " influencers" : "")}${cell(cr.meta)}${cell(cr.boost)}<td></td><td></td><td></td><td></td><td class="t">${L(tot(cr))}</td></tr>`;
        rows.forEach(([n, r]) => { body += `<tr class="store"><th>${esc(n)}</th><td></td><td></td><td></td><td></td>${cell(r.events)}${cell(r.aop, feb && r.pools ? r.pools + " pools" : "")}${cell(r.flyers)}${cell(r.coach, feb && r.pools ? r.pools + " kits" : "")}<td class="t">${L(tot(r))}</td></tr>`; });
      });
      const wa = sum((doc.wapush || []).filter(r => r.st === st).map(r => mSum(r.v))), cp = sum((doc.city || []).filter(r => r.st === st).map(r => mSum(r.v)));
      COLS.forEach(([k]) => { grand[k] += sub[k]; });
      body += `<tr class="sub"><th>${st} total${wa || cp ? "" : "<small>+ WhatsApp pushes and city pages: budget to agree</small>"}</th>${COLS.map(([k]) => `<td>${sub[k] ? L(sub[k]) : "-"}</td>`).join("")}<td class="t">${L(tot(sub) + wa + cp)}</td></tr>`;
    });
    const waAll = sum((doc.wapush || []).filter(r => sOK(r.st)).map(r => mSum(r.v))), cpAll = sum((doc.city || []).filter(r => sOK(r.st)).map(r => mSum(r.v)));
    return `<div class="panel wb-store"><div class="sb-wrap"><table class="wb-st"><thead><tr><th>${esc(scope)}</th>${COLS.map(([, n]) => `<th>${n}</th>`).join("")}<th>Total</th></tr></thead><tbody>${body}</tbody>
      <tfoot><tr><th>All</th>${COLS.map(([k]) => `<td>${grand[k] ? L(grand[k]) : "-"}</td>`).join("")}<td>${L(tot(grand) + waAll + cpAll)}</td></tr></tfoot></table></div>
      <p class="wb-note">City-wide lines (hoardings, influencers, Meta, boosts) sit on the city row; store lines (events, pool partnerships, checklist flyers, coach kits) on each store. Pools, flyers and coach kits are paid by the February deadline, so they show in February and in Jan to Jun. ${mi === -1 ? "January: the sheet has no spend; the pools and coaches are signed this month for the February deadline." : ""}</p></div>`;
  };
  const render = () => {
    const { state, view } = VIEW(), mi = view === "h1" ? null : MI[view];
    const sOK = st => state === "all" || st === state, mOK = i => mi == null || i === mi;
    const M = doc.months, SV = STS.filter(([s]) => sOK(s));
    const T = { ch: {}, st: {}, mo: M.map(() => 0), all: 0 };
    CH.forEach(([k]) => { T.ch[k] = 0; SV.forEach(([s]) => { lineMonths(k)[s].forEach((v, i) => { if (!mOK(i)) return; T.ch[k] += v; T.st[s] = (T.st[s] || 0) + v; T.mo[i] += v; T.all += v; }); }); });
    const inflRows = doc.infl.filter(r => sOK(r.st)), hoardRows = doc.hoard.filter(r => sOK(r.st));
    const inflN = M.map((_, i) => sum(inflRows.map(r => N(r.n[i]))));
    const goal = st => sum(doc.goals.filter(g => g.st === st).map(g => N(g.v)));
    const mar2jun = st => CH.reduce((t, [k]) => t + sum(lineMonths(k)[st].slice(1)), 0);
    const maxCh = Math.max(...Object.values(T.ch), 1);
    const monthTot = i => SV.reduce((a, [s]) => a + CH.reduce((t, [k]) => t + lineMonths(k)[s][i], 0), 0);
    const maxMo = Math.max(1, ...M.map((_, j) => monthTot(j)));
    const scope = `${state === "all" ? "West" : state}, ${mi == null ? "February to June" : view === "jan" ? "January" : ["February", "March", "April", "May", "June"][mi]}`;
    const camp = window.WATERBUDGET_CAMPAIGNS.filter(c => view === "h1" || c.m.toLowerCase() === view);
    const gs = (state === "all" ? ["Pune", "Gujarat"] : [state]).filter(s => goal(s));
    const PK = (window.WATER_MAPS || {}).cities || {};
    const storesOf = city => { const pk = (PK[city] || {}).picks || []; const g = {}; pk.forEach(p => { (g[p[4]] = g[p[4]] || []).push(`${p[1]} (${p[7]}, ${p[8]})`); }); return g; };
    el.innerHTML = `
      <p class="wb-scope">Showing <b>${esc(scope)}</b>. Change it with the month and West / Pune / Gujarat / MP buttons at the top of the page.</p>
      <div class="wb-kpis">
        <div class="tot"><b>${L(T.all)}</b><span>Marketing budget, ${esc(scope)}</span></div>
        ${state === "all" ? STS.map(([s, c]) => `<div style="--c:${c}"><b>${L(T.st[s] || 0)}</b><span>${s}, ${T.all ? Math.round((T.st[s] || 0) / T.all * 100) : 0}%</span></div>`).join("")
          : `<div style="--c:#10135A"><b>${L(T.ch.hoard)}</b><span>Hoardings: ${hoardRows.map(r => `${r.city} ${mi == null ? Math.max(...r.n.map(N)) : N(r.n[mi] )} boards`).join(", ") || "none in the sheet"}</span></div>
             <div style="--c:#1BAA5E"><b>${L(T.ch.events)}</b><span>Events</span></div><div style="--c:#0096C7"><b>${L(T.ch.aop + T.ch.flyers + T.ch.coach)}</b><span>Pools, flyers and coach kits (February)</span></div>`}
        <div style="--c:#E8590C"><b>${sum(inflN.filter((_, i) => mOK(i)))}</b><span>Influencer slots, ${L(T.ch.infl)}</span></div>
        <div><b>${gs.length ? (sum(gs.map(mar2jun)) / sum(gs.map(goal)) * 100).toFixed(1) + "%" : "-"}</b><span>${gs.length ? `Budget Mar-Jun against the ₹${(sum(gs.map(goal)) / 1e7).toFixed(2)} Cr turnover goal (${gs.join(" + ")})` : "No water turnover goal for MP in our files"}</span></div>
      </div>
      ${tbd() ? `<p class="wb-tbd">Not in the total yet: ${tbd()}. Budget still to be set${/WhatsApp/.test(tbd()) ? " (WhatsApp: to be agreed with the MarCom team)" : ""}; add it in the plan sheet below.</p>` : ""}
      <h3 class="wb-h">Where we spend, store by store</h3>
      ${storeTable(state, mi, sOK, mOK, scope)}
      <h3 class="wb-h">${view === "h1" ? "Month by month: campaigns, influencers and money" : "The month: campaigns, influencers and money"}</h3>
      <div class="wb-months ${view === "h1" ? "" : "one"}">${camp.map(c => { const i = M.indexOf(c.m); const inN = i >= 0 ? inflN[i] : 0; const money = i >= 0 ? T.mo[i] : 0;
        return `<article class="wb-mc"><header><b>${c.m}</b><span>${esc(c.t)}</span></header>
          <div class="wb-mn"><div><b>${money ? L(money) : "₹0"}</b><small>marketing budget</small></div><div><b>${inN || 0}</b><small>influencers${inN ? ", " + L(SV.reduce((a, [s]) => a + lineMonths("infl")[s][i], 0)) : ""}</small></div>${i >= 0 ? `<div><b>${sum(hoardRows.map(h => N(h.n[i])))}</b><small>hoardings</small></div>` : ""}</div>
          ${i >= 0 && inN ? `<p class="wb-inf">${SV.map(([s]) => { const n = sum(doc.infl.filter(r => r.st === s).map(r => N(r.n[i]))); return n ? `${s} ${n} × ${L(N(doc.rate[s]))}` : ""; }).filter(Boolean).join(" · ")}</p>` : ""}
          <ul>${c.c.map(x => `<li>${esc(x)}</li>`).join("")}${i >= 0 && doc.waweeks && doc.waweeks[i] ? `<li class="wa">WhatsApp push, ${esc(doc.waweeks[i])}${sum((doc.wapush || []).filter(r => sOK(r.st)).map(r => N(r.v[i]))) ? ", " + L(sum(doc.wapush.filter(r => sOK(r.st)).map(r => N(r.v[i])))) : " (budget with MarCom)"}</li>` : ""}${i >= 0 && doc.city ? (() => { const n = sum(doc.city.filter(r => sOK(r.st)).map(r => N(r.n[i]))); return n ? `<li class="cp">City pages: ${n} swimming posts with our AOP coaches</li>` : ""; })() : ""}</ul><p class="wb-ben"><b>How it helps:</b> ${esc(c.b)}</p></article>`; }).join("")}</div>
      <div class="wb-two">
        <div class="panel wb-panel"><h4>Where the money goes <small>${esc(scope)}</small></h4>${CH.map(([k, n, c]) => `<div class="wb-bar"><span>${n}</span><div><i style="--w:${T.ch[k] / maxCh * 100}%;background:${c}"></i></div><b>${!T.ch[k] && (k === "wapush" || k === "city") ? "to agree" : L(T.ch[k])}</b><small>${T.all ? (T.ch[k] / T.all * 100).toFixed(1) : 0}%</small></div>`).join("")}
          <h4 class="wb-h4">The hoardings, city by city and store by store</h4>
          ${hoardRows.length ? `<div class="sb-wrap"><table class="wb-ht"><thead><tr><th>City</th>${M.map((m, i) => `<th class="${mOK(i) ? "" : "off"}">${m}</th>`).join("")}<th>₹</th></tr></thead><tbody>${hoardRows.map(r => `<tr><th>${esc(r.city)}<small>${r.st}</small></th>${M.map((_, i) => `<td class="${mOK(i) ? "" : "off"}">${N(r.n[i])}</td>`).join("")}<td><b>${L(sum(r.v.map((v, i) => mOK(i) ? N(v) : 0)))}</b></td></tr>
            <tr class="by"><td colspan="${M.length + 2}">${Object.entries(storesOf(r.city)).map(([st, l]) => `<span><b>${esc(st)}</b>${l.map(esc).join("; ")}</span>`).join("") || "Sites on the hoarding map below"}</td></tr>`).join("")}</tbody></table></div><p class="wb-note">Boards a month from the sheet; the store each board serves comes from the picks on the hoarding map below (3D cut-out or digital, never a plain box board).</p>` : `<p class="wb-note">No hoardings for ${esc(state)} in the sheet.</p>`}</div>
        <div class="panel wb-panel"><h4>By month${state === "all" ? " and state" : ""}</h4><div class="wb-cols">${M.map((m, i) => `<div class="wb-col ${mOK(i) ? "" : "off"}"><b>${L(monthTot(i))}</b><div class="wb-stack" style="--h:${monthTot(i) / maxMo * 100}%">${SV.map(([s, c]) => { const v = CH.reduce((a, [k]) => a + lineMonths(k)[s][i], 0); return `<i style="flex:${v} 1 0;background:${c}" title="${s} ${m}: ${L(v)}"></i>`; }).join("")}</div><span>${m}</span></div>`).join("")}</div>
          <p class="wb-key">${SV.map(([s, c]) => `<span><i style="background:${c}"></i>${s} ${L(T.st[s] || 0)}</span>`).join("")}</p>
          <h4 class="wb-h4">Influencers month by month, by city</h4>
          <div class="sb-wrap"><table class="wb-ht"><thead><tr><th>City</th>${M.map((m, i) => `<th class="${mOK(i) ? "" : "off"}">${m}</th>`).join("")}<th>₹</th></tr></thead><tbody>${inflRows.map(r => `<tr><th>${esc(r.city)}${r.ooc ? "<small>out of catchment</small>" : ""}</th>${M.map((_, i) => `<td class="${mOK(i) ? "" : "off"}">${r.n[i] == null ? "-" : N(r.n[i])}</td>`).join("")}<td><b>${L(r.n.reduce((t, v, i) => t + (mOK(i) ? N(v) * N(doc.rate[r.st]) : 0), 0))}</b></td></tr>`).join("")}
            <tr class="tt"><th>All</th>${M.map((_, i) => `<td class="${mOK(i) ? "" : "off"}">${inflN[i]}</td>`).join("")}<td><b>${L(T.ch.infl)}</b></td></tr></tbody></table></div>
          <h4 class="wb-h4">Against the turnover goal, March to June</h4>
          ${(state === "all" ? ["Pune", "Gujarat", "MP"] : [state]).map(s => goal(s) ? `<div class="wb-goal"><span>${s}</span><b>${Cr(goal(s))}</b><small>goal · marketing budget ${L(mar2jun(s))} = ${(mar2jun(s) / goal(s) * 100).toFixed(1)}%</small></div>` : `<div class="wb-goal"><span>${s}</span><b>-</b><small>no water turnover goal in our files · marketing budget ${L(mar2jun(s))}</small></div>`).join("")}</div>
      </div>
      <div class="panel wb-cp"><h4>Local city pages: swimming with our coaches</h4><p>Our city Instagram pages carry swimming content made with the coaches of our AOP pools. We invite them to the store or film them at the pool: they teach how to swim and show which products to use. Every post tags the partner pool and links to the free classes for our customers.</p>
        <div class="wb-cp-grid">${(window.WATERBUDGET_CITYPAGES || []).map(([h, t]) => `<div><b>${esc(h)}</b><span>${esc(t)}</span></div>`).join("")}</div>
        <small>${sum((doc.city || []).map(r => sum(r.n.map(N))))} posts planned February to June across ${(doc.city || []).length} city pages (our proposal; change it in the sheet). Budget to be set.</small></div>
      <details class="panel pm-d wb-sheet"${editing ? " open" : ""}><summary><b>The plan sheet, line by line</b><span>${editing ? "Editing: change any number, then save" : "Click Edit to change any number"}</span><i class="nd-chev" aria-hidden="true"></i></summary>
        <div class="wb-bar-edit">
          <button type="button" class="kol-btn" id="wbEdit" ${editing ? "hidden" : ""}>Edit</button>
          <label class="kol-pin" ${editing ? "" : "hidden"}>Edit PIN <input type="password" id="wbPin" autocomplete="off" size="10"></label>
          <button type="button" class="kol-btn go" id="wbSave" ${editing ? "" : "hidden"}>Save for everyone</button>
          <button type="button" class="kol-btn ghost" id="wbCancel" ${editing ? "" : "hidden"}>Cancel</button>
          <button type="button" class="kol-btn ghost" id="wbCsv">Download a copy (CSV)</button>
          <a class="kol-btn ghost" href="exports/Water-Sports-Plan-Feb-Jun-2027.xlsx" download>Original Excel</a>
          <span class="kol-status" id="wbStatus" role="status" aria-live="polite"></span></div>
        <div class="wb-tables">${tables()}</div></details>`;
    bind();
  };

  const cell = (path, v, money) => editing ? `<td><input data-p="${path}" value="${v == null ? "" : esc(v)}" inputmode="numeric" aria-label="${esc(path)}"></td>` : `<td class="${v == null ? "na" : ""}">${v == null ? "-" : money ? L(N(v)) : esc(v)}</td>`;
  const tables = () => {
    const M = doc.months, mh = `${M.map(m => `<th>${m}</th>`).join("")}`;
    const tot = (rows, f) => M.map((_, i) => sum(rows.map(r => N(f(r)[i]))));
    const t = (title, sub, head, body, foot) => `<div class="wb-t"><h5>${title}<small>${sub}</small></h5><div class="sb-wrap"><table><thead><tr>${head}</tr></thead><tbody>${body}</tbody>${foot ? `<tfoot>${foot}</tfoot>` : ""}</table></div></div>`;
    return [
      t("Hoardings", "count and ₹ a month, by city · 3D cut-outs or digital screens, no plain box boards", `<th>City</th>${M.map(m => `<th>${m} #</th><th>${m} ₹</th>`).join("")}<th>Total</th>`,
        doc.hoard.map((r, j) => `<tr><th>${esc(r.city)}</th>${M.map((_, i) => cell(`hoard.${j}.n.${i}`, r.n[i]) + cell(`hoard.${j}.v.${i}`, r.v[i], 1)).join("")}<td class="t">${L(sum(r.v.map(N)))}</td></tr>`).join(""),
        `<tr><th>All</th>${M.map((_, i) => `<td class="t">${sum(doc.hoard.map(r => N(r.n[i])))}</td><td class="t">${L(sum(doc.hoard.map(r => N(r.v[i]))))}</td>`).join("")}<td class="t">${L(sum(doc.hoard.map(r => sum(r.v.map(N)))))}</td></tr>`),
      t("Influencers", `number per city · cost = number × rate (Pune ${L(N(doc.rate.Pune))}, Gujarat ${L(N(doc.rate.Gujarat))}, MP ${L(N(doc.rate.MP))} each)`, `<th>City</th>${mh}<th>Total</th>`,
        doc.infl.map((r, j) => `<tr><th>${esc(r.city)}${r.ooc ? ' <small class="ooc">out of catchment</small>' : ""}</th>${M.map((_, i) => cell(`infl.${j}.n.${i}`, r.n[i])).join("")}<td class="t">${sum(r.n.map(N))}</td></tr>`).join("") +
        `<tr class="rate"><th>Rate per influencer (₹)</th><td colspan="${M.length + 1}">${STS.map(([s]) => `${s} ${editing ? `<input class="wb-rate" data-p="rate.${s}" value="${esc(doc.rate[s])}" inputmode="numeric">` : L(N(doc.rate[s]))}`).join(" · ")}</td></tr>`,
        `<tr><th>All</th>${tot(doc.infl, r => r.n).map(v => `<td class="t">${v}</td>`).join("")}<td class="t">${sum(doc.infl.map(r => sum(r.n.map(N))))}</td></tr>`),
      ...[["meta", "Meta ads (MarCom)", "₹ by city"], ["boost", "Instagram boosts", "₹ by city"]].map(([k, n, s]) => t(n, s, `<th>City</th>${mh}<th>Total</th>`,
        doc[k].map((r, j) => `<tr><th>${esc(r.city)}</th>${M.map((_, i) => cell(`${k}.${j}.v.${i}`, r.v[i], 1)).join("")}<td class="t">${L(sum(r.v.map(N)))}</td></tr>`).join(""),
        `<tr><th>All</th>${tot(doc[k], r => r.v).map(v => `<td class="t">${L(v)}</td>`).join("")}<td class="t">${L(sum(doc[k].map(r => sum(r.v.map(N)))))}</td></tr>`)),
      t("Events", "₹ by store · March mid-week, April and May twice a month, June one event · Aqua Zumba, learn to swim with coaches", `<th>Store</th>${mh}<th>Total</th>`,
        doc.events.map((r, j) => `<tr><th>${esc(r.store)}</th>${M.map((_, i) => cell(`events.${j}.v.${i}`, r.v[i], 1)).join("")}<td class="t">${L(sum(r.v.map(N)))}</td></tr>`).join(""),
        `<tr><th>All</th>${tot(doc.events, r => r.v).map(v => `<td class="t">${L(v)}</td>`).join("")}<td class="t">${L(sum(doc.events.map(r => sum(r.v.map(N)))))}</td></tr>`),
      t("Pool partnerships (AOPs) and checklist flyers", "one-off, deadline February · flyers: new swimmers who bring the academy's gear checklist get a free product", `<th>Store</th><th>Pools</th><th>₹ per pool</th><th>Pools ₹</th><th>Flyers ₹</th>`,
        doc.aop.map((r, j) => { const f = doc.flyers.find(x => x.store === r.store); const fj = doc.flyers.indexOf(f); return `<tr><th>${esc(r.store)}</th>${cell(`aop.${j}.n`, r.n)}${cell(`aop.${j}.r`, r.r, 1)}<td class="t">${L(N(r.n) * N(r.r))}</td>${f ? cell(`flyers.${fj}.v`, f.v, 1) : "<td>-</td>"}</tr>`; }).join(""),
        `<tr><th>All</th><td class="t">${sum(doc.aop.map(r => N(r.n)))}</td><td></td><td class="t">${L(sum(doc.aop.map(r => N(r.n) * N(r.r))))}</td><td class="t">${L(sum(doc.flyers.map(r => N(r.v))))}</td></tr>`),
      t("Coach affiliation", "₹2,500 kit per coach; affiliates earn 8% (₹8,000 on ₹1 L of sales, as in the sheet) · coaches: one per partner pool until you set the real number", `<th>State</th><th>Coaches</th><th>Kit ₹</th><th>Total</th>`,
        doc.coach.map((r, j) => `<tr><th>${esc(r.st)}</th>${cell(`coach.${j}.n`, r.n)}${cell(`coach.${j}.kit`, r.kit, 1)}<td class="t">${L(N(r.n) * N(r.kit))}</td></tr>`).join(""), ""),
      t("WhatsApp community", "members to reach per store (a target, not money)", `<th>Store</th>${mh}`,
        doc.wa.map((r, j) => `<tr><th>${esc(r.store)}</th>${M.map((_, i) => cell(`wa.${j}.n.${i}`, r.n[i])).join("")}</tr>`).join(""),
        `<tr><th>All</th>${tot(doc.wa, r => r.n).map(v => `<td class="t">${v.toLocaleString("en-IN")}</td>`).join("")}</tr>`),
      t("WhatsApp pushes", "pushes a month and ₹ by state · budget to be agreed with the MarCom team, then filled in here", `<th>State</th>${M.map(m => `<th>${m} #</th><th>${m} ₹</th>`).join("")}<th>Total</th>`,
        (doc.wapush || []).map((r, j) => `<tr><th>${esc(r.st)}</th>${M.map((_, i) => cell(`wapush.${j}.n.${i}`, r.n[i]) + cell(`wapush.${j}.v.${i}`, r.v[i], 1)).join("")}<td class="t">${sum(r.v.map(N)) ? L(sum(r.v.map(N))) : "to agree"}</td></tr>`).join("") +
        `<tr class="rate"><th>Push weeks</th><td colspan="${M.length * 2 + 1}">${(doc.waweeks || []).filter(Boolean).map(esc).join(" · ")}</td></tr>`, ""),
      t("Local city pages: swimming content with our AOP coaches", "posts a month and ₹ by city · how to swim and which products to use, filmed at the partner pool or in our store", `<th>City</th>${M.map(m => `<th>${m} posts</th><th>${m} ₹</th>`).join("")}<th>Posts</th>`,
        (doc.city || []).map((r, j) => `<tr><th>${esc(r.city)}</th>${M.map((_, i) => cell(`city.${j}.n.${i}`, r.n[i]) + cell(`city.${j}.v.${i}`, r.v[i], 1)).join("")}<td class="t">${sum(r.n.map(N))}</td></tr>`).join(""),
        `<tr><th>All</th>${M.map((_, i) => `<td class="t">${sum((doc.city || []).map(r => N(r.n[i])))}</td><td class="t">${L(sum((doc.city || []).map(r => N(r.v[i]))))}</td>`).join("")}<td class="t">${sum((doc.city || []).map(r => sum(r.n.map(N))))}</td></tr>`),
      t("Turnover goals, March to June", "water plan, by store", `<th>Store</th><th>State</th><th>Goal ₹</th>`,
        doc.goals.map((r, j) => `<tr><th>${esc(r.name)}</th><td>${esc(r.st)}</td>${editing ? cell(`goals.${j}.v`, r.v, 1) : `<td>${Cr(N(r.v))}</td>`}</tr>`).join(""),
        `<tr><th>All</th><td></td><td class="t">${Cr(sum(doc.goals.map(r => N(r.v))))}</td></tr>`)
    ].join("") + `<div class="wb-t"><h5>Notes<small>free text</small></h5><div class="wb-notes" ${editing ? 'contenteditable="true"' : ""} id="wbNotes">${esc(doc.notes) || (editing ? "" : "No notes yet.")}</div></div>
      <p class="wb-src">From WATER_SPORTS.xlsx (sheet CDMR, 21 Nov 2026). The sheet's June events for Gujarat and MP sit under a header that says "May": read as June. April continues March for influencers, Meta and boosts, and June continues March for influencers (user, 22 Nov 2026); June has no Meta or boost line. One-off lines (pools, flyers, coach kits) are counted in February, their deadline.</p>`;
  };

  const setPath = (p, raw) => {
    const keys = p.split("."); let o = doc;
    for (let i = 0; i < keys.length - 1; i++) o = o[keys[i]];
    const v = String(raw).replace(/[₹,\s]/g, "");
    o[keys[keys.length - 1]] = v === "" ? null : (isNaN(+v) ? o[keys[keys.length - 1]] : +v);
  };
  const status = t => { const s = $("#wbStatus"); if (s) s.textContent = t; };
  const bind = () => {
    $("#wbEdit")?.addEventListener("click", () => { editing = true; render(); try { const p = sessionStorage.getItem("kolPin"); if (p) $("#wbPin").value = p; } catch (e) {} status("Editing: change any number, then Save for everyone."); });
    $("#wbCancel")?.addEventListener("click", () => { editing = false; load(); });
    $("#wbSave")?.addEventListener("click", save);
    $("#wbCsv")?.addEventListener("click", csv);
    $$(".wb-tables input").forEach(i => i.addEventListener("change", () => { setPath(i.dataset.p, i.value); const open = el.querySelector(".wb-sheet").open; const y = scrollY; render(); el.querySelector(".wb-sheet").open = open; scrollTo(0, y); status("Changed, not saved yet."); window.dispatchEvent(new CustomEvent("wb:change")); }));
  };
  async function load() {
    doc = clone(window.WATERBUDGET_DEFAULT); render(); status("Loading the saved version...");
    try {
      const r = await fetch(`${SB.url}/rest/v1/west_plan_docs?id=eq.${SB.id}&select=data,updated_at`, { headers: { apikey: SB.key } });
      if (!r.ok) throw new Error(r.status);
      const j = await r.json();
      if (j[0] && j[0].data && j[0].data.hoard) { doc = j[0].data; ["wapush", "waweeks", "city"].forEach(k => { if (!doc[k]) doc[k] = clone(window.WATERBUDGET_DEFAULT[k]); }); render(); status("Last saved " + new Date(j[0].updated_at).toLocaleString("en-IN", { day: "numeric", month: "short", hour: "2-digit", minute: "2-digit" })); }
      else status("Showing the sheet (nothing saved yet).");
    } catch (e) { status("Showing the sheet (the saved version could not be loaded)."); }
  }
  async function save() {
    const pin = ($("#wbPin")?.value || "").trim();
    if (!pin) { status("Enter the edit PIN to save."); $("#wbPin")?.focus(); return; }
    const n = $("#wbNotes"); if (n) doc.notes = n.innerText.trim();
    status("Saving...");
    try {
      const r = await fetch(`${SB.url}/rest/v1/rpc/save_west_plan_doc`, { method: "POST", headers: { apikey: SB.key, "Content-Type": "application/json" }, body: JSON.stringify({ p_id: SB.id, p_pin: pin, p_data: doc }) });
      if (!r.ok) { const t = await r.text(); throw new Error(/PIN/i.test(t) ? "wrong PIN" : "the database said no (" + r.status + ")"); }
      try { sessionStorage.setItem("kolPin", pin); } catch (e) {}
      editing = false; render(); status("Saved for everyone.");
    } catch (e) { status("Not saved: " + e.message + ". Your changes are still on this page; download a copy to keep them."); }
  }
  function csv() {
    const M = doc.months, rows = [["Line", "City or store", "State", ...M, "Total"]];
    doc.hoard.forEach(r => { rows.push(["Hoardings (count)", r.city, r.st, ...r.n, sum(r.n.map(N))]); rows.push(["Hoardings (₹)", r.city, r.st, ...r.v, sum(r.v.map(N))]); });
    doc.infl.forEach(r => rows.push(["Influencers (count)", r.city, r.st, ...r.n.map(v => v ?? ""), sum(r.n.map(N))]));
    ["meta", "boost", "events"].forEach(k => doc[k].forEach(r => rows.push([{ meta: "Meta ads (₹)", boost: "Instagram boosts (₹)", events: "Events (₹)" }[k], r.city || r.store, r.st, ...r.v.map(v => v ?? ""), sum(r.v.map(N))])));
    doc.aop.forEach(r => rows.push(["Pool partnerships (₹)", r.store, r.st, N(r.n) * N(r.r), "", "", "", "", N(r.n) * N(r.r)]));
    doc.flyers.forEach(r => rows.push(["Flyers (₹)", r.store, r.st, r.v, "", "", "", "", r.v]));
    doc.coach.forEach(r => rows.push(["Coach kits (₹)", r.st, r.st, N(r.n) * N(r.kit), "", "", "", "", N(r.n) * N(r.kit)]));
    doc.wa.forEach(r => rows.push(["WhatsApp members", r.store, r.st, ...r.n.map(v => v ?? ""), ""]));
    (doc.wapush || []).forEach(r => { rows.push(["WhatsApp pushes (count)", r.st, r.st, ...r.n.map(v => v ?? ""), sum(r.n.map(N))]); rows.push(["WhatsApp pushes (₹, with MarCom)", r.st, r.st, ...r.v.map(v => v ?? ""), sum(r.v.map(N))]); });
    (doc.city || []).forEach(r => { rows.push(["City page posts", r.city, r.st, ...r.n.map(v => v ?? ""), sum(r.n.map(N))]); rows.push(["City pages (₹)", r.city, r.st, ...r.v.map(v => v ?? ""), sum(r.v.map(N))]); });
    const text = rows.map(r => r.map(x => `"${String(x ?? "").replace(/"/g, '""')}"`).join(",")).join("\n");
    const a = document.createElement("a"); a.href = URL.createObjectURL(new Blob(["﻿" + text], { type: "text/csv" })); a.download = "water-sports-plan-2027.csv"; a.click();
  }
  window.addEventListener("w27:view", () => { if (!editing) render(); });
  // water money by state and month (Feb to Jun, rupees) and by line, for the overall-budget section
  window.waterBudgetBy = () => { const out = {}; STS.forEach(([st]) => { out[st] = { mo: [0, 0, 0, 0, 0], ch: {} }; }); CH.forEach(([k, n]) => { const by = lineMonths(k); STS.forEach(([st]) => { out[st].ch[k] = { n, v: by[st].slice() }; by[st].forEach((v, i) => { out[st].mo[i] += v; }); }); }); return out; };
  window.waterBudgetTotal = () => CH.reduce((t, [k]) => t + STS.reduce((a, [st]) => a + sum(lineMonths(k)[st]), 0), 0);
  // calendar items for water2027.js, built from the current numbers so the calendar follows the sheet
  const MD = [["2027-02-01", "2027-02-28"], ["2027-03-01", "2027-03-31"], ["2027-04-01", "2027-04-30"], ["2027-05-01", "2027-05-31"], ["2027-06-01", "2027-06-30"]];
  const CODE = { Pune: "P", Gujarat: "G", MP: "M" };
  window.waterGenItems = () => {
    const out = [];
    doc.months.forEach((m, i) => {
      const [s0, e0] = MD[i];
      doc.hoard.forEach(r => { if (N(r.n[i])) out.push({ l: "ooh", t: `${r.city}: ${N(r.n[i])} hoardings, 3D or digital (${L(N(r.v[i]))})`, s: s0, e: e0, k: "sale", st: [CODE[r.st]], n: "sheet" }); });
      STS.forEach(([st]) => {
        const rows = doc.infl.filter(r => r.st === st && N(r.n[i])), n = sum(rows.map(r => N(r.n[i])));
        if (n) out.push({ l: "infl", t: `${n} influencers, ${L(n * N(doc.rate[st]))}: ${rows.map(r => `${r.city} ${N(r.n[i])}`).join(", ")}`, s: s0, e: e0, k: "evt", st: [CODE[st]], n: "sheet" });
        const md = sum(doc.meta.filter(r => r.st === st).map(r => N(r.v[i]))) + sum(doc.boost.filter(r => r.st === st).map(r => N(r.v[i])));
        if (md) out.push({ l: "digital", t: `Meta ads and Instagram boosts ${L(md)}`, s: s0, e: e0, k: "nat", st: [CODE[st]], n: "sheet" });
        const ev = doc.events.filter(r => r.st === st && N(r.v[i]));
        if (ev.length) out.push({ l: "events", t: `Events in ${ev.length} stores, ${L(sum(ev.map(r => N(r.v[i]))))}: Aqua Zumba, learn to swim with coaches`, s: s0, e: e0, k: "evt", st: [CODE[st]], n: "sheet" });
        const wa = doc.wa.filter(r => r.st === st && N(r.n[i]));
        if (wa.length) out.push({ l: "digital", t: `WhatsApp community: ${sum(wa.map(r => N(r.n[i]))).toLocaleString("en-IN")} members (${N(wa[0].n[i])} a store)`, s: s0, e: e0, k: "local", st: [CODE[st]], n: "sheet" });
        const cp = sum((doc.city || []).filter(r => r.st === st).map(r => N(r.n[i])));
        if (cp) out.push({ l: "infl", t: `City pages: ${cp} swimming posts with our AOP coaches`, s: s0, e: e0, k: "prop", st: [CODE[st]], n: "sheet" });
        if (i === 0) {
          const ap = doc.aop.filter(r => r.st === st);
          if (ap.length) out.push({ l: "pools", t: `Pool partnerships by the Feb deadline: ${ap.map(r => `${r.store} ${N(r.n)}`).join(", ")} (${L(sum(ap.map(r => N(r.n) * N(r.r))))})`, s: "2027-01-04", e: "2027-02-28", k: "eco", st: [CODE[st]], n: "sheet" });
          const c = doc.coach.find(r => r.st === st);
          if (c && N(c.n)) out.push({ l: "pools", t: `Coach kits: ${N(c.n)} coaches × ${L(N(c.kit))}, 8% affiliate link`, s: "2027-01-18", e: "2027-02-28", k: "eco", st: [CODE[st]], n: "sheet" });
          const fl = sum(doc.flyers.filter(r => r.st === st).map(r => N(r.v)));
          if (fl) out.push({ l: "ooh", t: `Checklist flyers at the academies ${L(fl)}: a free product for new swimmers who bring it`, s: "2027-02-01", e: "2027-06-30", k: "local", st: [CODE[st]], n: "sheet" });
        }
      });
      if (doc.waweeks && doc.waweeks[i]) out.push({ l: "digital", t: `WhatsApp push (${doc.waweeks[i]}), budget with MarCom`, s: s0, e: s0.replace(/-01$/, "-07"), k: "launch", n: "sheet" });
    });
    return out;
  };
  load().then(() => window.dispatchEvent(new CustomEvent("wb:change")));
})();
