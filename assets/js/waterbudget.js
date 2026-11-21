/* Water sports 2027: budget and plan, February to June, from the user's WATER_SPORTS.xlsx (sheet "CDMR", shared 21 Nov 2026).
   Editable on the live site: Edit -> change any number -> Save for everyone with the edit PIN (same Supabase store and PIN as the
   Kolkata page: table public.west_plan_docs, id "water2027"). If the database cannot be reached the page shows the sheet's numbers.
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
    { city: "Pune", st: "Pune", n: [15, 17, null, 17, null] }, { city: "Ahmedabad", st: "Gujarat", n: [15, 17, null, 17, null] },
    { city: "Baroda", st: "Gujarat", n: [7, 7, null, 7, null] }, { city: "Surat", st: "Gujarat", n: [10, 15, null, 15, null] },
    { city: "Rajkot", st: "Gujarat", n: [7, 7, null, 7, null] }, { city: "Indore", st: "MP", n: [20, 20, null, 20, null] },
    { city: "Bhopal", st: "MP", n: [10, 7, null, 7, null] }, { city: "Gwalior", st: "MP", n: [7, 7, null, 7, null] },
    { city: "Jabalpur", st: "MP", ooc: 1, n: [4, 4, null, 4, null] }, { city: "Chhindwara", st: "MP", ooc: 1, n: [4, 4, null, 4, null] },
    { city: "Gandhinagar", st: "Gujarat", ooc: 1, n: [0, 0, null, 0, null] }, { city: "Jamnagar", st: "Gujarat", ooc: 1, n: [3, 3, null, 3, null] },
    { city: "Kachchh", st: "Gujarat", ooc: 1, n: [3, 3, null, 3, null] }
  ],
  meta: [
    { city: "Pune", st: "Pune", v: [30000, 50000, null, 50000, null] }, { city: "Ahmedabad", st: "Gujarat", v: [30000, 50000, null, 50000, null] },
    { city: "Baroda", st: "Gujarat", v: [20000, 30000, null, 30000, null] }, { city: "Surat", st: "Gujarat", v: [30000, 40000, null, 40000, null] },
    { city: "Rajkot", st: "Gujarat", v: [25000, 25000, null, 25000, null] }, { city: "Indore", st: "MP", v: [30000, 30000, null, 30000, null] },
    { city: "Bhopal", st: "MP", v: [30000, 30000, null, 30000, null] }, { city: "Gwalior", st: "MP", v: [25000, 25000, null, 25000, null] },
    { city: "Jabalpur (out of catchment)", st: "MP", v: [35000, 45000, null, 45000, null] }, { city: "Gandhinagar (out of catchment)", st: "Gujarat", v: [35000, 45000, null, 45000, null] }
  ],
  boost: [
    { city: "Pune", st: "Pune", v: [20000, 30000, null, 30000, null] }, { city: "Ahmedabad", st: "Gujarat", v: [20000, 30000, null, 30000, null] },
    { city: "Baroda", st: "Gujarat", v: [20000, 20000, null, 20000, null] }, { city: "Surat", st: "Gujarat", v: [20000, 30000, null, 30000, null] },
    { city: "Rajkot", st: "Gujarat", v: [7000, 7000, null, 7000, null] }, { city: "Indore", st: "MP", v: [20000, 20000, null, 20000, null] },
    { city: "Bhopal", st: "MP", v: [20000, 20000, null, 20000, null] }, { city: "Gwalior", st: "MP", v: [7000, 7000, null, 7000, null] },
    { city: "Jabalpur (out of catchment)", st: "MP", v: [15000, 15000, null, 15000, null] }, { city: "Gandhinagar (out of catchment)", st: "Gujarat", v: [15000, 15000, null, 15000, null] }
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
  coach: [{ st: "Pune", n: 80, kit: 2500 }, { st: "Gujarat", n: 45, kit: 2500 }, { st: "MP", n: 0, kit: 2500 }],
  wa: [
    { store: "Amanora", st: "Pune", n: [100, 350, 400, 500, null] }, { store: "SGS", st: "Pune", n: [100, 350, 400, 500, null] }, { store: "Wagholi", st: "Pune", n: [100, 350, 400, 500, null] },
    { store: "Wakad", st: "Pune", n: [100, 350, 400, 500, null] }, { store: "NIBM", st: "Pune", n: [100, 350, 400, 500, null] },
    { store: "Nexus", st: "Gujarat", n: [100, 350, 400, 500, null] }, { store: "Motera", st: "Gujarat", n: [100, 350, 400, 500, null] }, { store: "Baroda", st: "Gujarat", n: [100, 350, 400, 500, null] },
    { store: "Dumas", st: "Gujarat", n: [100, 350, 400, 500, null] }, { store: "Adajan", st: "Gujarat", n: [100, 350, 400, 500, null] }, { store: "Rajkot", st: "Gujarat", n: [100, 200, 250, 300, null] },
    { store: "Bhopal", st: "MP", n: [100, 350, 400, 500, null] }, { store: "Indore", st: "MP", n: [100, 350, 400, 500, null] }, { store: "Gwalior", st: "MP", n: [100, 200, 250, 300, null] }
  ],
  goals: [
    { name: "Wakad", st: "Pune", v: 50893673 }, { name: "Pune city and online", st: "Pune", v: 40714939 }, { name: "Amanora", st: "Pune", v: 24336155 },
    { name: "Wagholi", st: "Pune", v: 23306966 }, { name: "SGS Mall", st: "Pune", v: 22941668 }, { name: "NIBM", st: "Pune", v: 14272318 },
    { name: "Nexus", st: "Gujarat", v: 24600187 }, { name: "Motera", st: "Gujarat", v: 23058268 }, { name: "Dumas Road", st: "Gujarat", v: 19368956 },
    { name: "Baroda", st: "Gujarat", v: 18349213 }, { name: "Rajkot", st: "Gujarat", v: 4626531 }
  ],
  notes: ""
};

window.WATERBUDGET_CAMPAIGNS = [
  { m: "Jan", t: "Build the ecosystem", c: ["Sign the pools (Pune 58 at ₹25,000) and onboard coaches", "30-Day Swim Challenge: swim streaks, Women Who Swim", "Water team in place 10 Jan; Pune training 19-20 Jan"], b: "Pools, academies and coaches are ready before the learners arrive. No ad money in January in the sheet." },
  { m: "Feb", t: "In store goes live", c: ["Mon 15 Feb: summer campaign, CAD and golden peg in every store", "WhatsApp community starts: 100 members a store", "Pool tie-ups and checklist flyers done by the Feb deadline", "Swim Together family weekends; Beach Day Surat; coaches seminar 26-28 Feb"], b: "Catch the early learners and start the community we sell to all summer." },
  { m: "Mar", t: "Outside goes live", c: ["Mon 15 Mar: hoardings, flyers, influencers", "Decathlon Swim League: academy vs academy", "Women Who Swim on Women's Day weekend (6-7 Mar)", "Mid-week events: Aqua Zumba with family and friends; learn to swim with coaches, 5 free classes for our customers"], b: "The season starts: new swimmers and families, priority 1 in the sheet (capture the learners)." },
  { m: "Apr", t: "School holidays", c: ["Summer Swim Movement and the 1,000 People milestone", "Summer Camp learn-to-swim week with partner pools (19 Apr - 2 May)", "Events twice a month; WhatsApp 400 a store"], b: "April was the West's second-biggest water month in 2026 (₹6.81 Cr). The sheet has no influencer, Meta or boost money in April: worth a look." },
  { m: "May", t: "The peak", c: ["Influencers, Meta and boosts back on", "Sports Utsav", "Events twice a month; WhatsApp 500 a store", "Swim Project review: 3,000 sign-ups, 600 buyers"], b: "May was the biggest water month in 2026 (₹7.46 Cr)." },
  { m: "Jun", t: "Close and keep them", c: ["One event per store", "Pune down to 4 boards", "Monsoon and back to school; summer review in July"], b: "Priority 2 in the sheet: keep this year's swimmers coming back next year." }
];

(() => {
  const SB = { url: "https://vxdhhgdfubqedfpwfyrb.supabase.co", key: "sb_publishable_5DJXCUF-gyul7S71vHAHQQ_oSYZHZmP", id: "water2027" };
  const el = document.getElementById("wbApp");
  if (!el) return;
  const $ = (s, r = el) => r.querySelector(s), $$ = (s, r = el) => [...r.querySelectorAll(s)];
  const esc = s => String(s ?? "").replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
  const clone = o => JSON.parse(JSON.stringify(o));
  const L = n => "₹" + (n / 1e5).toLocaleString("en-IN", { maximumFractionDigits: 2 }) + " L";
  const Cr = n => "₹" + (n / 1e7).toFixed(2) + " Cr";
  const N = v => (v == null || v === "" || isNaN(+v)) ? 0 : +v;
  const STS = [["Pune", "#3643BA"], ["Gujarat", "#00A99D"], ["MP", "#7B3FC4"]];
  const CH = [["hoard", "Hoardings (3D or digital)", "#10135A"], ["infl", "Influencers", "#E8590C"], ["meta", "Meta ads", "#3643BA"], ["boost", "Instagram boosts", "#C13584"],
    ["events", "Events", "#1BAA5E"], ["aop", "Pool partnerships (AOPs)", "#0096C7"], ["flyers", "Checklist flyers", "#F2B705"], ["coach", "Coach kits", "#7B3FC4"]];
  let doc = clone(window.WATERBUDGET_DEFAULT), editing = false;

  // money of one line, by month (5 months) and by state; one-off lines (AOP, flyers, coach kits) count in February (the sheet's deadline)
  const lineMonths = (k, d = doc) => {
    const z = () => [0, 0, 0, 0, 0];
    const by = Object.fromEntries(STS.map(([s]) => [s, z()]));
    const add = (st, i, v) => { if (by[st]) by[st][i] += v; };
    if (k === "hoard" || k === "meta" || k === "boost" || k === "events") d[k].forEach(r => r.v.forEach((v, i) => add(r.st, i, N(v))));
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

  const render = () => {
    const T = totals(), M = doc.months;
    const inflN = M.map((_, i) => sum(doc.infl.map(r => N(r.n[i]))));
    const inflV = lineMonths("infl");
    const goal = st => sum(doc.goals.filter(g => g.st === st).map(g => N(g.v)));
    const mar2jun = st => { const by = STS.reduce((a, [s]) => a, 0); let t = 0; CH.forEach(([k]) => { const b = lineMonths(k)[st]; t += sum(b.slice(1)); }); return t; };
    const maxCh = Math.max(...Object.values(T.ch), 1), maxMo = Math.max(...T.mo, 1);
    const camp = window.WATERBUDGET_CAMPAIGNS;
    el.innerHTML = `
      <div class="wb-kpis">
        <div class="tot"><b>${L(T.all)}</b><span>Water ad budget, February to June</span></div>
        ${STS.map(([s, c]) => `<div style="--c:${c}"><b>${L(T.st[s])}</b><span>${s}, ${T.all ? Math.round(T.st[s] / T.all * 100) : 0}%</span></div>`).join("")}
        <div><b>${sum(inflN)}</b><span>Influencer slots, ${L(T.ch.infl)}</span></div>
        <div><b>${(goal("Pune") + goal("Gujarat")) ? (sum(["Pune", "Gujarat"].map(mar2jun)) / (goal("Pune") + goal("Gujarat")) * 100).toFixed(1) + "%" : "-"}</b><span>Ad budget Mar-Jun as a share of the ₹${((goal("Pune") + goal("Gujarat")) / 1e7).toFixed(2)} Cr turnover goal (Pune + Gujarat)</span></div>
      </div>
      <h3 class="wb-h">Month by month: campaigns, influencers and money</h3>
      <div class="wb-months">${camp.map(c => { const i = M.indexOf(c.m); const inN = i >= 0 ? inflN[i] : 0; const money = i >= 0 ? T.mo[i] : 0;
        return `<article class="wb-mc"><header><b>${c.m}</b><span>${esc(c.t)}</span></header>
          <div class="wb-mn"><div><b>${money ? L(money) : "₹0"}</b><small>ad budget</small></div><div><b>${inN || 0}</b><small>influencers${inN ? ", " + L(STS.reduce((a, [s]) => a + inflV[s][i], 0)) : ""}</small></div>${i >= 0 ? `<div><b>${sum(doc.hoard.map(h => N(h.n[i])))}</b><small>hoardings</small></div>` : ""}</div>
          ${i >= 0 && inN ? `<p class="wb-inf">${STS.map(([s]) => { const n = sum(doc.infl.filter(r => r.st === s).map(r => N(r.n[i]))); return n ? `${s} ${n} × ${L(N(doc.rate[s]))}` : ""; }).filter(Boolean).join(" · ")}</p>` : ""}
          <ul>${c.c.map(x => `<li>${esc(x)}</li>`).join("")}</ul><p class="wb-ben"><b>How it helps:</b> ${esc(c.b)}</p></article>`; }).join("")}</div>
      <div class="wb-two">
        <div class="panel wb-panel"><h4>Where the money goes</h4>${CH.map(([k, n, c]) => `<div class="wb-bar"><span>${n}</span><div><i style="--w:${T.ch[k] / maxCh * 100}%;background:${c}"></i></div><b>${L(T.ch[k])}</b><small>${T.all ? (T.ch[k] / T.all * 100).toFixed(1) : 0}%</small></div>`).join("")}</div>
        <div class="panel wb-panel"><h4>By month and state</h4><div class="wb-cols">${M.map((m, i) => `<div class="wb-col"><b>${L(T.mo[i])}</b><div class="wb-stack" style="--h:${T.mo[i] / maxMo * 100}%">${STS.map(([s, c]) => { const v = CH.reduce((a, [k]) => a + lineMonths(k)[s][i], 0); return `<i style="flex:${v} 1 0;background:${c}" title="${s} ${m}: ${L(v)}"></i>`; }).join("")}</div><span>${m}</span></div>`).join("")}</div>
          <p class="wb-key">${STS.map(([s, c]) => `<span><i style="background:${c}"></i>${s} ${L(T.st[s])}</span>`).join("")}</p>
          <h4 class="wb-h4">Against the turnover goal, March to June</h4>
          ${["Pune", "Gujarat"].map(s => `<div class="wb-goal"><span>${s}</span><b>${Cr(goal(s))}</b><small>goal · ad budget ${L(mar2jun(s))} = ${goal(s) ? (mar2jun(s) / goal(s) * 100).toFixed(1) : 0}%</small></div>`).join("")}
          <div class="wb-goal"><span>MP</span><b>-</b><small>no water turnover goal in our files · ad budget ${L(mar2jun("MP"))}</small></div></div>
      </div>
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
      t("Coach affiliation", "₹2,500 kit per coach; affiliates earn 8% (₹8,000 on ₹1 L of sales, as in the sheet) · coach numbers: water plan (Pune 80, Gujarat 45)", `<th>State</th><th>Coaches</th><th>Kit ₹</th><th>Total</th>`,
        doc.coach.map((r, j) => `<tr><th>${esc(r.st)}</th>${cell(`coach.${j}.n`, r.n)}${cell(`coach.${j}.kit`, r.kit, 1)}<td class="t">${L(N(r.n) * N(r.kit))}</td></tr>`).join(""), ""),
      t("WhatsApp community", "members to reach per store (a target, not money)", `<th>Store</th>${mh}`,
        doc.wa.map((r, j) => `<tr><th>${esc(r.store)}</th>${M.map((_, i) => cell(`wa.${j}.n.${i}`, r.n[i])).join("")}</tr>`).join(""),
        `<tr><th>All</th>${tot(doc.wa, r => r.n).map(v => `<td class="t">${v.toLocaleString("en-IN")}</td>`).join("")}</tr>`),
      t("Turnover goals, March to June", "water plan, by store", `<th>Store</th><th>State</th><th>Goal ₹</th>`,
        doc.goals.map((r, j) => `<tr><th>${esc(r.name)}</th><td>${esc(r.st)}</td>${editing ? cell(`goals.${j}.v`, r.v, 1) : `<td>${Cr(N(r.v))}</td>`}</tr>`).join(""),
        `<tr><th>All</th><td></td><td class="t">${Cr(sum(doc.goals.map(r => N(r.v))))}</td></tr>`)
    ].join("") + `<div class="wb-t"><h5>Notes<small>free text</small></h5><div class="wb-notes" ${editing ? 'contenteditable="true"' : ""} id="wbNotes">${esc(doc.notes) || (editing ? "" : "No notes yet.")}</div></div>
      <p class="wb-src">From WATER_SPORTS.xlsx (sheet CDMR, 21 Nov 2026). The sheet's June events for Gujarat and MP sit under a header that says "May": read as June. April and June have no influencer, Meta or boost lines. One-off lines (pools, flyers, coach kits) are counted in February, their deadline.</p>`;
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
    $$(".wb-tables input").forEach(i => i.addEventListener("change", () => { setPath(i.dataset.p, i.value); const open = el.querySelector(".wb-sheet").open; const y = scrollY; render(); el.querySelector(".wb-sheet").open = open; scrollTo(0, y); status("Changed, not saved yet."); }));
  };
  async function load() {
    doc = clone(window.WATERBUDGET_DEFAULT); render(); status("Loading the saved version...");
    try {
      const r = await fetch(`${SB.url}/rest/v1/west_plan_docs?id=eq.${SB.id}&select=data,updated_at`, { headers: { apikey: SB.key } });
      if (!r.ok) throw new Error(r.status);
      const j = await r.json();
      if (j[0] && j[0].data && j[0].data.hoard) { doc = j[0].data; render(); status("Last saved " + new Date(j[0].updated_at).toLocaleString("en-IN", { day: "numeric", month: "short", hour: "2-digit", minute: "2-digit" })); }
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
    const text = rows.map(r => r.map(x => `"${String(x ?? "").replace(/"/g, '""')}"`).join(",")).join("\n");
    const a = document.createElement("a"); a.href = URL.createObjectURL(new Blob(["﻿" + text], { type: "text/csv" })); a.download = "water-sports-plan-2027.csv"; a.click();
  }
  load();
})();
