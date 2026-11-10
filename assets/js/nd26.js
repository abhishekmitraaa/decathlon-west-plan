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
    { l: "ooh", t: "7 Pune hoardings (₹9.35 L a month): new creative live by 15 Nov at the latest (vendor away)", s: "2026-11-15", e: "2026-12-31", k: "sale", n: "user" },
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
        return `<span class="pl-chip ${it.k} ${it.go ? "go" : ""} ${week >= a && week <= b ? "" : "dim"}" style="grid-column:${a + 1} / ${b + 2};grid-row:${r + 1}" title="${esc(it.t)} (${fd(d(it.s))}${it.e !== it.s ? " to " + fd(d(it.e)) : ""}; ${SRC[it.n] || ""})">${it.go ? "★ " : ""}${esc(it.t)}</span>`;
      }).join("");
      h += `<div class="pl-lane-name">${name}</div><div class="pl-lane">${chips}</div>`;
    });
    g.innerHTML = h;
    $$(".w27-wk", g).forEach(b => b.addEventListener("click", () => { week = +b.dataset.i; runway(); weekPanel(); }));
  }
  function weekPanel() {
    const x = weeks[week], el = $("#ndWeek"); if (!el) return;
    const live = LANES.map(([id, name]) => { const its = ITEMS.filter(it => it.l === id && d(it.s) <= x.sun && d(it.e) >= x.mon); return its.length ? `<div class="w27-wl"><h4>${name}</h4><ul>${its.map(it => `<li class="${it.go ? "go" : ""}">${it.go ? "★ " : ""}${esc(it.t)}<small>${fd(d(it.s))}${it.e !== it.s ? " to " + fd(d(it.e)) : ""}; ${SRC[it.n] || ""}</small></li>`).join("")}</ul></div>` : ""; }).join("");
    el.innerHTML = `<div class="y27-mhead"><h3 class="display-s">Week ${x.w}<span class="lt">: ${fd(x.mon)} to ${fd(x.sun)}</span></h3><div class="y27-mnav"><button type="button" data-d="-1" aria-label="Previous week">‹</button><button type="button" data-d="1" aria-label="Next week">›</button></div></div><div class="w27-wgrid">${live}</div>`;
    $$("#ndWeek .y27-mnav button").forEach(b => b.addEventListener("click", () => { week = (week + +b.dataset.d + NW) % NW; runway(); weekPanel(); }));
  }

  /* ---------- AOPs, November and December, every store ---------- */
  function aops() {
    const el = $("#ndAops"); if (!el) return;
    const A = window.AOP_PLAN || [], ST = ["Pune", "Gujarat", "MP"], C = { Pune: "var(--pune)", Gujarat: "var(--guj)", MP: "var(--mp)" };
    el.innerHTML = `<table class="y27-table aop27"><thead><tr><th>Store</th><th>Live now</th><th>November</th><th>December</th><th>Nov + Dec</th><th>Cost per AOP</th><th>Nov + Dec cost</th></tr></thead><tbody>${ST.map(st => {
      const ss = A.filter(a => a.state === st);
      const rows = ss.map(a => `<tr><td><b>${a.store}</b></td><td>${a.live ?? "-"}</td><td class="n">${a.months[0]}</td><td class="n">${a.months[1]}</td><td class="n"><b>${a.months[0] + a.months[1]}</b></td><td class="n">${inr(a.cost)}</td><td class="n"><b>${inr((a.months[0] + a.months[1]) * a.cost)}</b></td></tr>`).join("");
      const n = ss.reduce((t, a) => t + a.months[0] + a.months[1], 0), c = ss.reduce((t, a) => t + (a.months[0] + a.months[1]) * a.cost, 0);
      return `<tr class="grp"><td colspan="7" style="--c:${C[st]}">${st}</td></tr>${rows}<tr class="tot"><td><b>${st}</b></td><td>${ss.reduce((t, a) => t + (a.live || 0), 0)}</td><td class="n">${ss.reduce((t, a) => t + a.months[0], 0)}</td><td class="n">${ss.reduce((t, a) => t + a.months[1], 0)}</td><td class="n"><b>${n}</b></td><td></td><td class="n"><b>${inr(c)}</b></td></tr>`;
    }).join("")}</tbody></table>`;
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
  FR[2].brings = T ? `No goal of its own. Its sport, mountain (hiking, trekking, camping), sold ${cr(mtn(9) / 1e7)} in October 2026, ${(mtn(9) / allT(9) * 100).toFixed(1)}% of West turnover, and ${(mtn(10) / allT(10) * 100).toFixed(1)}% in 1 to 8 November.` : "No goal of its own.";
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
      el.innerHTML = `<h3>${title}</h3><ul class="fr-ls">${f.ls.map(x => `<li><div><b>${esc(x.t)}</b><small>${PP.months[x.m]}${x.q ? ", " + esc(x.q) : ""}${x.d ? ", " + esc(x.d) : ""}</small>${x.n ? `<em>${esc(x.n)}</em>` : ""}</div><span>${inr(x.v)}</span></li>`).join("")}</ul>
        <div class="fr-tot"><span>Pune total</span><b>${inr(f.v)}</b><small>${share(f.v)} (lines ${Lk(PL)})</small></div><p class="fr-brings"><b>What it brings</b>${esc(f.brings)}</p>`; };
    lines($("#ndBfPune"), FR[1], "Pune's Black Friday, line by line");
    lines($("#ndWinterLines"), FR[2], "Pune's Winter, Trek &amp; Travel, line by line");
    lines($("#ndXmasLines"), FR[3], "Pune's Christmas, line by line");
    if ($("#ndWinterTo")) $("#ndWinterTo").textContent = FR[2].brings;
    if ($("#ndXmasGoal")) $("#ndXmasGoal").innerHTML = `<b>${cr(gsum(7))}</b><span>Christmas sale turnover goal (West), ${pc(gsum(7), gsum(6))} on 2025</span>`;
  }

  /* ---------- hoardings: Pune not updated yet; Baroda up (photos 10 Nov 2026) ---------- */
  function hoardings() {
    const el = $("#ndHoard"); if (!el) return;
    const H = window.HOARDINGS || [], pu = H.filter(h => h.city === "Pune"), ba = H.filter(h => h.city === "Baroda");
    const pt = pu.reduce((a, h) => a + h.cost, 0), bt = ba.reduce((a, h) => a + h.cost, 0);
    const shots = [["baroda-subhanpura-live", "Subhanpura, 10 Nov: Kiprun Kipride, “Visit Decathlon Vadodara, just 10 mins away”"], ["baroda-fatehgunj-live", "Fatehgunj, 10 Nov: the Kiprun board in a row of eight"], ["baroda-akota-live", "Akota, over the DMart car park: “just 15 mins away”"]];
    el.innerHTML = `<div class="nd-hu-grid">
      <article class="nd-hu-c wait"><header><span class="st">Live by 15 Nov</span><h4>Pune: ${pu.length} boards</h4><b>${Lk(pt)} a month</b></header>
        <figure><img src="assets/img/hpgm/pune-wagholi.jpg" alt="Pune hoarding at Wagholi still showing the festive cycle creative, 10 October" loading="lazy"><figcaption>Wagholi, 10 Oct: still the festive “Your Festive Upgrade” cycle creative. The vendor is away; once back, the new creative goes live on all 7 boards by 15 November at the latest.</figcaption></figure>
        <ul>${pu.map(h => `<li><span>${esc(h.loc)}</span><small>${esc(h.size)}</small><b>${Lk(h.cost)}</b></li>`).join("")}</ul></article>
      <article class="nd-hu-c up"><header><span class="st">Live: Kiprun</span><h4>Baroda: ${ba.length} boards</h4><b>${Lk(bt)} a month</b></header>
        <p class="nd-hu-p">Kiprun Kipride stays up for now; the boards switch to Winter in December.</p><div class="nd-hu-pics">${shots.map(([f, c]) => `<figure><img src="assets/img/hoard/${f}.jpg" alt="Baroda hoarding: ${esc(c)}" loading="lazy"><figcaption>${esc(c)}</figcaption></figure>`).join("")}</div>
        <ul>${ba.map(h => `<li><span>${esc(h.loc)}</span><small>${esc(h.size)}</small><b>${Lk(h.cost)}</b></li>`).join("")}</ul></article>
      </div>`;
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

  frames(); hoardings(); summary();
  runway(); weekPanel(); aops();
  window.renderPunePlan?.($("#ndPune"), [0, 1]);
  window.renderPuneAops?.($("#ndPuneAops"), [0, 1]);
  window.renderInfluencers?.($("#ndInfl"), "2026-11-01", "2026-12-31", false);
  window.renderPyramid?.($("#mktPyramid"));
})();
