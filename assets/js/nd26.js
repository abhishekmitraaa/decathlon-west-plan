/* November + December 2026 page, part 2: December (Winter & Travel, Christmas gifting, Christmas sale), the Pune runway week by week,
   AOPs for November and December, the Pune plan line by line, influencers, and the marketing pyramid.
   Data: PUNE_PLAN, MKT_PYRAMID (puneplan.js), AOP_PLAN (data.js). Sources noted per item. */
(() => {
  const $ = (s, r = document) => r.querySelector(s), $$ = (s, r = document) => [...r.querySelectorAll(s)];
  const esc = s => String(s).replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
  const inr = v => "₹" + Math.round(v).toLocaleString("en-IN");
  const DAY = 864e5, MON = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  const d = s => { const [y, m, x] = s.split("-").map(Number); return new Date(Date.UTC(y, m - 1, x)); };
  const fd = x => `${x.getUTCDate()} ${MON[x.getUTCMonth()]}`;
  const TODAY = new Date(Date.UTC(2026, 10, 10));

  /* ---------- the Pune runway, Mon 2 Nov 2026 to Sun 3 Jan 2027 (ISO weeks 45 to 53) ---------- */
  const W0 = d("2026-11-02"), NW = 9;
  const weeks = [...Array(NW)].map((_, i) => ({ w: 45 + i, mon: new Date(W0.getTime() + i * 7 * DAY), sun: new Date(W0.getTime() + (i * 7 + 6) * DAY) }));
  const LANES = [
    ["moments", "Season and moments"], ["sales", "Sales"], ["camp", "Campaigns and gifting"], ["inf", "Influencers"], ["ins", "In-store, mall and coupons"],
    ["ooh", "Hoardings"], ["aop", "AOPs"], ["evt", "City events and our events"], ["soc", "Social and content"]
  ];
  // n: source. plan = Pune spend plan (BFS PUNE); rw = Q4 runway on the main site; web = public race listings (to confirm); ours = our suggestion
  const ITEMS = [
    { l: "moments", t: "Diwali 8 Nov", s: "2026-11-08", e: "2026-11-08", k: "hol" },
    { l: "moments", t: "Children's Day 14 Nov", s: "2026-11-14", e: "2026-11-14", k: "hol" },
    { l: "moments", t: "Christmas 25 Dec", s: "2026-12-25", e: "2026-12-25", k: "hol" },
    { l: "moments", t: "New Year's Eve 31 Dec", s: "2026-12-31", e: "2026-12-31", k: "hol" },
    { l: "sales", t: "Black Friday, 27 to 30 Nov", s: "2026-11-27", e: "2026-11-30", k: "sale", go: 1, n: "plan" },
    { l: "sales", t: "Christmas Sale, 19 to 31 Dec", s: "2026-12-19", e: "2026-12-31", k: "sale", go: 1, n: "plan" },
    { l: "camp", t: "Diwali: Gift a Sport", s: "2026-11-02", e: "2026-11-15", k: "local", n: "rw" },
    { l: "camp", t: "Winter, Trek & Travel: 1 to 15 Dec", s: "2026-12-01", e: "2026-12-15", k: "nat", n: "user" },
    { l: "camp", t: "Christmas gifting videos: 17 to 25 Dec", s: "2026-12-17", e: "2026-12-25", k: "launch", n: "user" },
    { l: "camp", t: "MH500 backpack", s: "2026-11-02", e: "2026-11-30", k: "tech", n: "rw" },
    { l: "inf", t: "Black Friday: 40 influencers, ₹4 L", s: "2026-11-21", e: "2026-11-28", k: "evt", n: "plan" },
    { l: "inf", t: "Winter & Travel: 10 influencers (₹1 L)", s: "2026-11-15", e: "2026-11-21", k: "eco", n: "plan" },
    { l: "inf", t: "Winter & Travel: 10 influencers (₹1 L) + 7 on barter (₹50,000)", s: "2026-12-01", e: "2026-12-15", k: "eco", n: "plan" },
    { l: "inf", t: "Christmas: 35 influencers, ₹3.5 L", s: "2026-12-19", e: "2026-12-23", k: "evt", n: "plan" },
    { l: "ins", t: "Coupon cards: basket over ₹2,799 gets a product free (35,000 cards)", s: "2026-11-17", e: "2026-11-30", k: "local", n: "plan" },
    { l: "ins", t: "Black Friday comms live, whole city", s: "2026-11-23", e: "2026-11-30", k: "nat", go: 1, n: "plan" },
    { l: "ins", t: "Christmas comms live, whole city", s: "2026-12-19", e: "2026-12-31", k: "nat", go: 1, n: "plan" },
    { l: "ins", t: "In-mall: NIBM, Amanora, SGS (₹1.70 L Nov, ₹1.65 L Dec)", s: "2026-11-02", e: "2026-12-31", k: "tbd", n: "plan" },
    { l: "ooh", t: "7 Pune hoardings (₹9.35 L a month): winter comms up by 15 Nov", s: "2026-11-15", e: "2026-12-31", k: "sale", n: "user" },
    { l: "aop", t: "22 AOPs: Wakad 5, Wagholi 5, SGS 4, NIBM 4, Amanora 4 (₹6.25 L)", s: "2026-11-02", e: "2026-11-30", k: "eco", n: "plan" },
    { l: "aop", t: "27 AOPs: Wakad 6, Wagholi 6, SGS 5, NIBM 5, Amanora 5 (₹7.65 L)", s: "2026-12-01", e: "2026-12-31", k: "eco", n: "plan" },
    { l: "evt", t: "Children's Day: colouring books", s: "2026-11-14", e: "2026-11-14", k: "local", n: "rw" },
    { l: "evt", t: "Kiprun event (₹20,000)", s: "2026-11-16", e: "2026-11-22", k: "launch", n: "plan" },
    { l: "evt", t: "Pune International Marathon, Sun 6 Dec", s: "2026-12-06", e: "2026-12-06", k: "ext", n: "web" },
    { l: "evt", t: "SRT Ultra trail (53 km), Sat 12 Dec", s: "2026-12-12", e: "2026-12-12", k: "ext", n: "web" },
    { l: "evt", t: "Bajaj Pune Marathon, Sun 13 Dec (to confirm)", s: "2026-12-13", e: "2026-12-13", k: "ext", n: "web" },
    { l: "evt", t: "Kiprun event (₹20,000)", s: "2026-12-14", e: "2026-12-20", k: "launch", n: "plan" },
    { l: "evt", t: "Pimpri Chinchwad Half Marathon, Sun 20 Dec", s: "2026-12-20", e: "2026-12-20", k: "ext", n: "web" },
    { l: "soc", t: "Black Friday countdown: 4 posts + 4 stories", s: "2026-11-23", e: "2026-11-28", k: "nat", n: "plan" },
    { l: "soc", t: "Boost: 5 posts (₹30,000)", s: "2026-11-16", e: "2026-11-30", k: "tbd", n: "plan" },
    { l: "soc", t: "Christmas countdown: 4 posts + 4 stories; boost 10 posts (₹30,000)", s: "2026-12-14", e: "2026-12-23", k: "nat", n: "plan" },
    { l: "soc", t: "Media vendor (₹1 L)", s: "2026-12-01", e: "2026-12-31", k: "tbd", n: "plan" }
  ];
  const SRC = { plan: "Pune spend plan", rw: "Q4 runway", web: "public race listing, to confirm", user: "brief", ours: "our suggestion" };
  let week = Math.max(0, weeks.findIndex(x => TODAY >= x.mon && TODAY <= x.sun));
  const span = it => { const s = d(it.s).getTime(), e = d(it.e).getTime(), a = W0.getTime(), b = weeks[NW - 1].sun.getTime(); if (e < a || s > b) return null; return [Math.max(0, Math.floor((s - a) / (7 * DAY))), Math.min(NW - 1, Math.floor((e - a) / (7 * DAY)))]; };
  function runway() {
    const g = $("#ndGrid"); if (!g) return;
    g.style.setProperty("--n", NW);
    const months = [{ m: 10, a: 0, b: 3 }, { m: 11, a: 4, b: 8 }];
    const now = weeks.findIndex(x => TODAY >= x.mon && TODAY <= x.sun);
    let h = `<div class="pl-corner w27-corner">Pune only. Weeks start on Monday. ★ = goes live</div>`;
    h += months.map(x => `<div class="w27-mon" style="grid-column:${x.a + 2} / ${x.b + 3}"><b>${x.m === 10 ? "November" : "December"} 2026</b><small>${x.m === 10 ? "Pune total ₹28.47 L" : "Pune total ₹29.62 L"}</small></div>`).join("");
    h += weeks.map((x, i) => `<button type="button" class="w27-wk ${i === now ? "now" : ""}" style="grid-column:${i + 2}" data-i="${i}" aria-pressed="${i === week}"><b>W${x.w}</b><small>${fd(x.mon)}</small>${i === now ? "<em>We are here</em>" : ""}</button>`).join("");
    LANES.forEach(([id, name]) => {
      const its = ITEMS.filter(x => x.l === id).map(it => ({ it, sp: span(it) })).filter(x => x.sp).sort((a, b) => a.sp[0] - b.sp[0]);
      const rows = [];
      const chips = its.map(({ it, sp: [a, b] }) => {
        let r = rows.findIndex(e => e < a); if (r < 0) { rows.push(-1); r = rows.length - 1; } rows[r] = b;
        return `<span class="pl-chip ${it.k} ${it.go ? "go" : ""} ${week >= a && week <= b ? "" : "dim"}" style="grid-column:${a + 1} / ${b + 2};grid-row:${r + 1}" title="${esc(it.t)} (${fd(d(it.s))}${it.e !== it.s ? " to " + fd(d(it.e)) : ""})">${it.go ? "★ " : ""}${esc(it.t)}</span>`;
      }).join("");
      h += `<div class="pl-lane-name">${name}</div><div class="pl-lane">${chips}</div>`;
    });
    g.innerHTML = h;
    $$(".w27-wk", g).forEach(b => b.addEventListener("click", () => { week = +b.dataset.i; runway(); weekPanel(); const dd = $("#ndWeekD"); if (dd) dd.open = true; }));
  }
  function weekPanel() {
    const x = weeks[week], el = $("#ndWeek"); if (!el) return;
    if ($("#ndWeekSum")) $("#ndWeekSum").textContent = `Week ${x.w}: ${fd(x.mon)} to ${fd(x.sun)}`;
    const live = LANES.map(([id, name]) => { const its = ITEMS.filter(it => it.l === id && d(it.s) <= x.sun && d(it.e) >= x.mon); return its.length ? `<div class="w27-wl"><h4>${name}</h4><ul>${its.map(it => `<li class="${it.go ? "go" : ""}">${it.go ? "★ " : ""}${esc(it.t)}<small>${fd(d(it.s))}${it.e !== it.s ? " to " + fd(d(it.e)) : ""}</small></li>`).join("")}</ul></div>` : ""; }).join("");
    el.innerHTML = `<div class="y27-mhead"><h3 class="display-s">Week ${x.w}<span class="lt">: ${fd(x.mon)} to ${fd(x.sun)}</span></h3><div class="y27-mnav"><button type="button" data-d="-1" aria-label="Previous week">‹</button><button type="button" data-d="1" aria-label="Next week">›</button></div></div><div class="w27-wgrid">${live}</div>`;
    $$("#ndWeek .y27-mnav button").forEach(b => b.addEventListener("click", () => { week = (week + +b.dataset.d + NW) % NW; runway(); weekPanel(); }));
  }

  /* ---------- AOPs, November and December, every store ---------- */
  function aops() {
    const el = $("#ndAops"); if (!el) return;
    // counts and "live now": AOP_PLAN; money: the Pune spend plan (PUNE_PLAN.aopStores), which is what the budget pays
    const A = (window.AOP_PLAN || []).filter(a => a.state === "Pune"), M = Object.fromEntries((window.PUNE_PLAN.aopStores.rows || []).map(r => [r[0], [r[1], r[2]]]));
    const rows = A.map(a => { const n = a.months[0] + a.months[1], v = (M[a.store] || [0, 0]); const c = v[0] + v[1];
      return `<tr><td><b>${a.store}</b></td><td>${a.live ?? "-"}</td><td class="n">${a.months[0]}</td><td class="n">${a.months[1]}</td><td class="n"><b>${n}</b></td><td class="n">${inr(v[0] / (a.months[0] || 1))}</td><td class="n">${inr(v[0])}</td><td class="n">${inr(v[1])}</td><td class="n"><b>${inr(c)}</b></td></tr>`; }).join("");
    const tN = i => A.reduce((t, a) => t + a.months[i], 0), tV = i => A.reduce((t, a) => t + ((M[a.store] || [0, 0])[i]), 0);
    el.innerHTML = `<table class="y27-table aop27"><thead><tr><th>Store</th><th>Live now</th><th>Added Nov</th><th>Added Dec</th><th>Nov + Dec</th><th>Per AOP</th><th>Nov money</th><th>Dec money</th><th>Nov + Dec money</th></tr></thead><tbody>${rows}
      <tr class="tot"><td><b>Pune</b></td><td>${A.reduce((t, a) => t + (a.live || 0), 0)}</td><td class="n">${tN(0)}</td><td class="n">${tN(1)}</td><td class="n"><b>${tN(0) + tN(1)}</b></td><td></td><td class="n">${inr(tV(0))}</td><td class="n">${inr(tV(1))}</td><td class="n"><b>${inr(tV(0) + tV(1))}</b></td></tr></tbody></table>`;
  }

  /* ---------- the four campaigns (frames): money from the Pune plan by campaign, goals from the SD piloting sheet ---------- */
  const PP = window.PUNE_PLAN, G = window.NOV_GOALS || [], T = window.SPORT_TO_2026;
  const Lk = r => { const l = r / 1e5; return r < 1e5 ? `₹${Math.round(r / 1000)}K` : `₹${l.toFixed(2)} L`; };
  const camp = (c, ms = [0, 1]) => PP.lines.filter(x => ms.includes(x.m) && c.includes(x.camp));
  const sum = ls => ls.reduce((a, x) => a + x.v, 0);
  const PT = PP.totals[0] + PP.totals[1], PL = PP.lines.filter(x => x.m < 2).reduce((a, x) => a + x.v, 0);
  const gsum = i => G.reduce((a, g) => a + (g[i] || 0), 0), Q4 = gsum(2);
  const cr = n => "₹" + n.toFixed(2) + " Cr", pc = (a, b) => (a >= b ? "+" : "") + Math.round((a / b - 1) * 100) + "%";
  const FR = [
    { id: "diwali", sec: "diwali", n: "Diwali: Gift a Sport", d: "6 to 11 Nov", c: [], col: "#FFC21A",
      what: "Gift a Sport, no sale. In-store comms in Bhopal, Motera and Surat; Diwali reels on all 8 city pages; content recycled across the cluster.",
      inf: "Pune: none in the plan. Gujarat 13 (₹1.3 L), Indore 4 on barter, Bhopal 4, Gwalior 2 (gift cards)", west: "Gujarat influencers ₹1.3 L",
      brings: "No sale and no turnover goal: a brand moment. About 1.9 lakh views on the 10 creator reels by 5 Nov." },
    { id: "bf", sec: "blackfriday", n: "Black Friday", d: "27 to 30 Nov", c: ["Black Friday"], col: "#111", goal: [4, 5],
      what: "A four-day sale. Coupon cards from 17 Nov, in-store and in-mall live on 23 Nov, a countdown on social, creators from 21 Nov.",
      inf: "Pune 40 (₹4 L); Gujarat 67+ (₹7.4 L); MP 40 (₹2.02 L)", west: "Gujarat ₹7.4 L and MP ₹2.02 L of influencers" },
    { id: "winter", sec: "winter", n: "Winter, Trek & Travel", d: "1 to 15 Dec", c: ["Winter & Travel"], col: "#2E7D32",
      what: "Winter only: 1 to 15 December. Trek and travel reels, creators, the winter wall in store; the 7 Pune hoardings carry it (the sheet books them for Winter & Travel in Nov and Dec).",
      inf: "Pune 20 (₹2 L) in the sheet: 10 from 15 to 21 Nov, 10 from 1 to 15 Dec; + 7 on barter (₹50,000) and 10 reels recycled as boosts (₹10,000), outside the total", west: "Not planned separately for Gujarat and MP" },
    { id: "xmas", sec: "december", n: "Christmas: gifting and the sale", d: "Gifting 17 to 25 Dec; sale 19 to 31 Dec", c: ["Christmas sale"], col: "#C8102E", goal: [6, 7],
      what: "Christmas gifting videos 17 to 25 Dec; the Christmas Sale 19 to 31 Dec with in-store comms live from 19 Dec, 35 creators 19 to 23 Dec, a countdown and boosts.",
      inf: "Pune 35 (₹3.5 L), 19 to 23 Dec", west: "Gujarat and MP Christmas budgets not in our files yet" }
  ];
  FR.forEach(f => { f.ls = camp(f.c); f.v = sum(f.ls); });
  const ALW = { n: "Always on: AOPs and Kiprun events", ls: camp(["AOPs", "Kiprun"]), what: "22 AOPs in November and 27 in December across the 5 stores; a Kiprun event each month (₹20,000)." };
  ALW.v = sum(ALW.ls);
  const goalTxt = f => f.goal ? `${cr(gsum(f.goal[1]))}, ${pc(gsum(f.goal[1]), gsum(f.goal[0]))} on 2025` : "";
  const mtn = m => ["Pune", "Gujarat", "MP"].reduce((a, s) => a + T.mountain[s].in[m] + T.mountain[s].on[m], 0), allT = m => ["Pune", "Gujarat", "MP"].reduce((a, s) => a + T.all[s].in[m] + T.all[s].on[m], 0);
  FR[2].brings = "-";
  FR[1].brings = `Turnover goal ${goalTxt(FR[1])}: ${(gsum(5) / Q4 * 100).toFixed(1)}% of the ${cr(Q4)} Q4 store challenge in 4 days.`;
  FR[3].brings = `Turnover goal ${goalTxt(FR[3])}: ${(gsum(7) / Q4 * 100).toFixed(1)}% of the Q4 store challenge.`;
  const share = v => v ? `${Math.round(v / PL * 100)}% of Pune's Nov + Dec` : "Not in the Pune plan";

  function frames() {
    const ov = $("#ndFrames");
    if (ov) ov.innerHTML = FR.map((f, i) => `<a class="fr-card" href="#${f.sec}" style="--c:${f.col}"><em>${i + 1}</em><b>${esc(f.n)}</b><span>${esc(f.d)}</span><strong>${f.v ? Lk(f.v) : "₹1.30 L"}<small>${f.v ? share(f.v) : "Gujarat influencers"}</small></strong></a>`).join("") +
      `<a class="fr-card alw" href="#aops"><em>+</em><b>Always on</b><span>AOPs and Kiprun events</span><strong>${Lk(ALW.v)}<small>${share(ALW.v)}</small></strong></a>`;
    $$(".fr-tag").forEach(el => {
      const i = FR.findIndex(f => f.id === el.dataset.fr), f = FR[i]; if (!f) return;
      el.innerHTML = `<em>${i + 1} of 4</em><b>${esc(f.n)}</b><span>${esc(f.d)}</span><span>Pune <b>${f.v ? Lk(f.v) : "₹0"}</b>${f.v ? ", " + share(f.v) : ", not in the Pune plan"}</span>${f.goal ? `<span>Goal <b>${cr(gsum(f.goal[1]))}</b></span>` : ""}`;
    });
    const lines = (el, f, title) => { if (!el) return;
      el.innerHTML = `<h3>${title}</h3><p class="fr-share">${esc(f.n.split(":")[0])} takes <b>${Math.round(f.v / PL * 100)}%</b> of Pune's November and December money (${inr(f.v)} of ${inr(PL)}). Each line's share of the campaign:</p><ul class="fr-ls">${f.ls.map(x => `<li><div><b>${esc(x.t)}</b><small>${PP.months[x.m]}${x.q ? ", " + esc(x.q) : ""}${x.d ? ", " + esc(x.d) : ""}</small>${x.n ? `<em>${esc(x.n)}</em>` : ""}<i class="fr-bar"><i style="--w:${x.v / f.v * 100}%"></i></i></div><span>${inr(x.v)}<small class="fr-pc">${(x.v / f.v * 100).toFixed(1)}% of the campaign</small></span></li>`).join("")}</ul>
        <div class="fr-tot"><span>Pune total</span><b>${inr(f.v)}</b><small>${share(f.v)} (lines ${Lk(PL)})</small></div>${f.brings && f.brings !== "-" ? `<p class="fr-brings"><b>What it brings</b>${esc(f.brings)}</p>` : ""}`; };
    lines($("#ndBfPune"), FR[1], "Pune's Black Friday, line by line");
    lines($("#ndWinterLines"), FR[2], "Pune's Winter, Trek &amp; Travel, line by line");
    lines($("#ndXmasLines"), FR[3], "Pune's Christmas, line by line");
    if ($("#ndXmasGoal")) $("#ndXmasGoal").innerHTML = `<b>${cr(gsum(7))}</b><span>Christmas sale turnover goal (West), ${pc(gsum(7), gsum(6))} on 2025</span>`;
  }

  /* ---------- hoardings: Pune not updated yet; Baroda up (photos 10 Nov 2026) ---------- */
  function hoardings() {
    const el = $("#ndHoard"); if (!el) return;
    const H = window.HOARDINGS || [], pu = H.filter(h => h.city === "Pune"), ba = H.filter(h => h.city === "Baroda");
    const pt = pu.reduce((a, h) => a + h.cost, 0), bt = ba.reduce((a, h) => a + h.cost, 0);
    const shots = [["baroda-subhanpura-live", "Subhanpura, 10 Nov: Kiprun Kipride, “Visit Decathlon Vadodara, just 10 mins away”"], ["baroda-fatehgunj-live", "Fatehgunj, 10 Nov: the Kiprun board in a row of eight"], ["baroda-akota-live", "Akota, over the DMart car park: “just 15 mins away”"]];
    el.innerHTML = `<article class="nd-hu-pune"><header><span class="st">Winter comms up by 15 Nov</span><h4>Pune: ${pu.length} boards</h4><b>${Lk(pt)} a month</b></header>
        <div class="nd-hu-two"><div class="nd-hu-map" id="ndHoardMap" role="img" aria-label="Map of Pune's ${pu.length} hoardings and our 5 stores"></div>
          <div class="nd-hu-side"><figure class="nd-hu-prev" id="ndHuPrev"></figure>
          <ol class="nd-hu-list">${pu.map((h, i) => `<li><button type="button" data-i="${i}" aria-pressed="${i === 0}"><i>${i + 1}</i><span>${esc(h.loc)}<small>${esc(h.size)}</small></span><b>${Lk(h.cost)}</b></button></li>`).join("")}</ol></div></div>
        <p class="nd-hu-hint">Click a board's number, on the list or on the map, to see its photo.</p></article>
      <button type="button" class="nd-hu-tg" aria-expanded="false" aria-controls="ndHoardGuj">Gujarat: show the Baroda boards</button>
      <div id="ndHoardGuj" hidden><article class="nd-hu-c up"><header><span class="st">Live: Kiprun</span><h4>Baroda: ${ba.length} boards</h4><b>${Lk(bt)} a month</b></header>
        <p class="nd-hu-p">Kiprun Kipride stays up for now; the boards switch to Winter in December.</p><div class="nd-hu-pics">${shots.map(([f, c]) => `<figure><img src="assets/img/hoard/${f}.jpg" alt="Baroda hoarding: ${esc(c)}" loading="lazy"><figcaption>${esc(c)}</figcaption></figure>`).join("")}</div>
        <ul>${ba.map(h => `<li><span>${esc(h.loc)}</span><small>${esc(h.size)}</small><b>${Lk(h.cost)}</b></li>`).join("")}</ul></article></div>`;
    const show = i => { const h = pu[i], f = $("#ndHuPrev"); if (!h || !f) return;
      f.innerHTML = h.img ? `<img src="assets/img/${h.img}" alt="Hoarding site ${i + 1}: ${esc(h.loc)}"><figcaption><b>${i + 1}. ${esc(h.loc)}</b>${esc(h.size)}, ${Lk(h.cost)} a month${h.why ? ". " + esc(h.why) : ""}</figcaption>` : `<figcaption><b>${i + 1}. ${esc(h.loc)}</b>No photo of this board yet.</figcaption>`;
      $$(".nd-hu-list button", el).forEach(b => b.setAttribute("aria-pressed", String(+b.dataset.i === i))); };
    window.ndHoardShow = show;
    $$(".nd-hu-list button", el).forEach(b => b.addEventListener("click", () => show(+b.dataset.i)));
    show(0);
    const tg = $(".nd-hu-tg", el), gj = $("#ndHoardGuj");
    tg.addEventListener("click", () => { const open = gj.hidden; gj.hidden = !open; tg.setAttribute("aria-expanded", String(open)); tg.textContent = open ? "Gujarat: hide the Baroda boards" : "Gujarat: show the Baroda boards"; });
    // the map: our stores and the numbered boards (Leaflet, as on the main page)
    const m = $("#ndHoardMap"); if (!m) return;
    if (!window.L) { m.innerHTML = `<p class="nd-hu-nomap">The map needs an internet connection; the boards are listed alongside.</p>`; return; }
    const map = L.map(m, { scrollWheelZoom: false });
    L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", { maxZoom: 18, attribution: "&copy; OpenStreetMap contributors" }).addTo(map);
    const pts = [], icon = L.icon({ iconUrl: "assets/img/deca-pin.png", iconSize: [26, 26], iconAnchor: [13, 13], className: "map-store" });
    ((window.DATA || {}).stores || []).filter(x => x.state === "Pune" && x.lat).forEach(x => { L.marker([x.lat, x.lon], { icon, title: "Decathlon " + x.name }).addTo(map).bindTooltip("Decathlon " + x.name, { direction: "right", offset: [14, 0], className: "map-tip map-tip-store" }); pts.push([x.lat, x.lon]); });
    pu.forEach((h, i) => { if (!h.lat) return; L.marker([h.lat, h.lon], { icon: L.divIcon({ className: "map-board", html: `<i>${i + 1}</i>`, iconSize: [20, 20], iconAnchor: [24, 24] }), zIndexOffset: 1000 }).addTo(map).on("click", () => show(i)).bindPopup(`${h.img ? `<img src="assets/img/${h.img}" alt="" style="width:200px;border-radius:6px;display:block;margin-bottom:6px">` : ""}<b>${i + 1}. ${esc(h.loc)}</b><br>${esc(h.size)}, ${Lk(h.cost)} a month`); pts.push([h.lat, h.lon]); });
    if (pts.length) map.fitBounds(pts, { padding: [30, 30] });
  }

  /* ---------- Pune money as charts: November, December (by channel) and the two months by campaign ---------- */
  function puneCharts() {
    const el = $("#ndPuneCharts"); if (!el) return;
    const CH = PP.channels, CC = { "Black Friday": ["Black Friday", "#111"], "Winter & Travel": ["Winter, Trek & Travel", "#2E7D32"], "Christmas sale": ["Christmas", "#C8102E"], "AOPs": ["AOPs and free products", "#12A150"], "Kiprun": ["Kiprun events", "#E8590C"] };
    const svgDonut = (parts, total, big, small) => { const R = 70, C = 2 * Math.PI * R; let off = 0;
    const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="380" height="380" viewBox="0 0 200 200"><circle cx="100" cy="100" r="${R}" fill="none" stroke="#EEF0F5" stroke-width="34"/>${parts.map(([, v, c]) => { const l = v / total * C, el = `<circle cx="100" cy="100" r="${R}" fill="none" stroke="${c}" stroke-width="34" stroke-dasharray="${l.toFixed(2)} ${(C - l).toFixed(2)}" stroke-dashoffset="${(-off).toFixed(2)}" transform="rotate(-90 100 100)"/>`; off += l; return el; }).join("")}<text x="100" y="99" text-anchor="middle" font-family="Inter, Arial, sans-serif" font-size="19" font-weight="800" fill="#10135A">${big}</text><text x="100" y="119" text-anchor="middle" font-family="Inter, Arial, sans-serif" font-size="11" fill="#5A6080">${small}</text></svg>`;
    return `<img class="nb-svg" width="190" height="190" alt="${small}: ${big}" src="data:image/svg+xml;charset=utf-8,${encodeURIComponent(svg)}">`; };
    const donut = (title, total, parts) => `<div class="panel pm-chart"><h3>${title}</h3><div class="nb-donut">${svgDonut(parts, total, inr(total), title.replace(", by campaign", ""))}</div>
        <ul class="nb-legend">${parts.map(([n, v, c]) => `<li><i style="background:${c}"></i>${esc(n)}<b>${inr(v)}</b><small>${(v / total * 100).toFixed(1)}%</small></li>`).join("")}</ul></div>`;
    const byCh = ms => Object.keys(CH).map(k => [CH[k][0], PP.lines.filter(x => ms.includes(x.m) && x.ch === k).reduce((a, x) => a + x.v, 0), CH[k][1]]).filter(x => x[1]).sort((a, b) => b[1] - a[1]);
    const byCamp = Object.keys(CC).map(k => [CC[k][0], PP.lines.filter(x => x.m < 2 && x.camp === k).reduce((a, x) => a + x.v, 0), CC[k][1]]).filter(x => x[1]).sort((a, b) => b[1] - a[1]);
    el.innerHTML = donut("November", PP.totals[0], byCh([0])) + donut("December", PP.totals[1], byCh([1])) + donut("Nov + Dec, by campaign", PL, byCamp);
  }

  /* ---------- AOP cost, November and December (Pune spend plan) ---------- */
  function aopKpis() {
    const el = $("#ndAopKpis"); if (!el) return;
    const v = m => PP.lines.filter(x => x.m === m && x.ch === "aop").reduce((a, x) => a + x.v, 0);
    const n = m => (window.AOP_PLAN || []).filter(a => a.state === "Pune").reduce((t, a) => t + (a.months[m] || 0), 0);
    el.innerHTML = [["", inr(v(0)), `Pune, November: ${n(0)} AOPs`], ["", inr(v(1)), `Pune, December: ${n(1)} AOPs`], ["tot", inr(v(0) + v(1)), `Pune, November + December: ${n(0) + n(1)} AOPs`]]
      .map(([c, b, t]) => `<div class="${c}"><b>${b}</b><span>${t}</span></div>`).join("");
  }

  /* ---------- influencers, November and December: a clear timeline ---------- */
  function inflNovDec() {
    const el = $("#ndInfl"); if (!el) return;
    const a = d("2026-11-01").getTime(), b = d("2026-12-31").getTime() + DAY, span = b - a;
    const rows = PP.influencers.filter(r => d(r.e) >= d("2026-11-01") && d(r.s) <= d("2026-12-31"));
    const n = rows.reduce((t, r) => t + r.n, 0), v = rows.reduce((t, r) => t + r.v, 0);
    const pos = t => (t - a) / span * 100;
    const ticks = []; for (let t = d("2026-11-02").getTime(); t < b; t += 7 * DAY) ticks.push(t);
    const fdd = t => fd(new Date(t));
    el.innerHTML = `<div class="ndi-kpis"><div><b>${n}</b><span>paid influencers, Pune</span></div><div><b>${inr(v)}</b><span>influencer money, November + December</span></div><div><b>${rows.length}</b><span>bursts, one per campaign</span></div><div><b>+7</b><span>on barter for Winter, Trek &amp; Travel (₹50,000, outside the budget)</span></div></div>
      <div class="ndi-tl"><div class="ndi-axis"><span class="ndi-mo" style="left:0">November</span><span class="ndi-mo" style="left:${pos(d("2026-12-01").getTime())}%">December</span>${ticks.map(t => `<span class="ndi-tk" style="left:${pos(t)}%">${fdd(t)}</span>`).join("")}</div>
        ${rows.map(r => { const s0 = d(r.s).getTime(), e0 = d(r.e).getTime() + DAY;
          return `<div class="ndi-row"><div class="ndi-lab"><i style="--c:${r.c}"></i><b>${esc(r.t.replace(/ \(.*\)$/, ""))}${/first|next/.test(r.t) ? ` <small>${/first/.test(r.t) ? "part 1" : "part 2"}</small>` : ""}</b><span>${r.n} influencers · ${inr(r.v)} · ${inr(r.v / r.n)} each</span></div>
            <div class="ndi-track">${ticks.map(t => `<i style="left:${pos(t)}%"></i>`).join("")}<i class="mo" style="left:${pos(d("2026-12-01").getTime())}%"></i><span class="ndi-bar" style="left:${pos(s0)}%;width:${Math.max(pos(e0) - pos(s0), 2.2)}%;--c:${r.c}"></span><em class="ndi-dt ${pos(e0) > 60 ? "l" : ""}" style="${pos(e0) > 60 ? `right:${100 - pos(s0)}%` : `left:${pos(e0)}%`}">${fd(d(r.s))} to ${fd(d(r.e))}</em></div></div>`; }).join("")}
      </div>`;
  }

  /* ---------- Pune money: the KPIs, with the AOPs ---------- */
  function puneKpis() {
    const el = $("#ndPuneKpis"); if (!el) return;
    const aop = m => PP.lines.filter(x => x.m === m && x.ch === "aop"), aopV = m => aop(m).reduce((a, x) => a + x.v, 0);
    const aopN = m => (window.AOP_PLAN || []).filter(a => a.state === "Pune").reduce((t, a) => t + (a.months[m] || 0), 0);
    el.innerHTML = [["tot", inr(PP.totals[0]), "November, all planned"], ["tot", inr(PP.totals[1]), "December, all planned"], ["tot", inr(PT), "November + December"],
      ["", `${aopN(0)} + ${aopN(1)}`, `AOPs added: ${aopN(0)} in November, ${aopN(1)} in December (${aopN(0) + aopN(1)})`],
      ["", inr(aopV(0) + aopV(1)), `AOP money: ${inr(aopV(0))} Nov + ${inr(aopV(1))} Dec, ${Math.round((aopV(0) + aopV(1)) / PT * 100)}% of the two months`]]
      .map(([c, b, t]) => `<div class="${c}"><b>${b}</b><span>${t}</span></div>`).join("");
  }

  /* ---------- summary, November and December ---------- */
  function summary() {
    const el = $("#ndSummary"); if (!el) return;
    const rows = [...FR, ALW];
    const bar = rows.filter(r => r.v).map(r => `<span style="flex:${r.v};--c:${r.col || "#9AA2C8"}" title="${esc(r.n)}: ${inr(r.v)}"><b>${esc(r.n.split(":")[0])}</b><em>${Lk(r.v)}, ${Math.round(r.v / PL * 100)}%</em></span>`).join("");
    el.innerHTML = `<div class="nd-sum-top"><div><b>${Lk(PT)}</b><span>Pune, November (${Lk(PP.totals[0])}) and December (${Lk(PP.totals[1])})</span></div>
        <div><b>${cr(gsum(5) + gsum(7))}</b><span>sale goals, West: Black Friday ${cr(gsum(5))} + Christmas ${cr(gsum(7))}</span></div>
        <div><b>${40 + 20 + 35}</b><span>Pune influencers in the plan (+7 on barter)</span></div>
        <div><b>${22 + 27}</b><span>Pune AOPs, 22 in Nov and 27 in Dec</span></div></div>
      <div class="nd-sum-bar">${bar}</div>
      <div class="sb-wrap"><table class="y27-table nd-sum-t"><thead><tr><th>Campaign</th><th>When</th><th>What we do</th><th>Pune budget</th><th>Share</th><th>Influencers</th><th>Gujarat and MP</th><th>What it brings</th></tr></thead><tbody>
      ${rows.map((r, i) => `<tr><td><b class="y27-dot" style="--c:${r.col || "#9AA2C8"}">${esc(r.n)}</b></td><td>${esc(r.d || "Nov and Dec")}</td><td>${esc(r.what)}</td><td class="n"><b>${r.v ? inr(r.v) : "-"}</b></td><td class="n">${r.v ? Math.round(r.v / PL * 100) + "%" : "-"}</td><td>${esc(r.inf || "-")}</td><td>${esc(r.west || "-")}</td><td>${esc(r.brings || "Practice places and running events that bring players back to the store.")}</td></tr>`).join("")}
      <tr class="tot"><td><b>Pune, Nov + Dec</b></td><td></td><td></td><td class="n"><b>${inr(PT)}</b></td><td class="n">100%</td><td>95 + 7 on barter</td><td></td><td><b>${cr(gsum(5) + gsum(7))}</b> of sale goals (West)</td></tr></tbody></table></div>
      <p class="w27-note">Pune money: the Pune spend plan (BFS PUNE), every line counted once under its campaign. Budget = the sheet's total advertising and marketing budget: ₹28,47,282 in November and ₹29,62,282 in December, ${inr(PT)} together; the lines add exactly to it. Lines the sheet lists outside the month totals (Black Friday countdown ₹40,000, Winter barter ₹50,000, recycle boosts ₹10,000) are not counted. Goals: the SD piloting sheet (Black Friday 27 to 30 Nov, Christmas 18 to 25 Dec). Gujarat and MP: the influencer budgets shared on 5 to 9 Nov.</p>`;
  }

  frames(); hoardings(); summary(); puneKpis(); aopKpis(); inflNovDec(); puneCharts();
  window.ND_DECK = { FR, ALW, PT, PL, ITEMS, LANES }; // read by deck.js (native PowerPoint)
  const sc = $("#ndSumCards");
  if (sc) sc.innerHTML = [...FR.filter(f => f.v), ALW].map((f, i) => `<a class="fr-card ${f === ALW ? "alw" : ""}" href="#${f.sec || "pune"}" style="--c:${f.col || "#9AA2C8"}"><em>${f === ALW ? "+" : i + 1}</em><b>${esc(f.n)}</b><span>${esc(f.d || "November and December")}</span><strong>${inr(f.v)}<small>${Math.round(f.v / PL * 100)}% of Pune's Nov + Dec</small></strong></a>`).join("");
  runway(); weekPanel(); aops();
  window.renderPunePlan?.($("#ndPune"), [0, 1]);
  window.renderPuneAops?.($("#ndPuneAops"), [0, 1]);
  window.renderPyramid?.($("#mktPyramid"));
})();
