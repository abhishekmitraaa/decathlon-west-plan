/* 2027 page, part 3: the Q1 moments (Movement for All, clearance sale, new arrivals, Women's Day, summer), as on the main site,
   and the 2027 influencer plan campaign by campaign (user's influencer sheet, 10 Nov 2026). Follows the region switch (window.Y27REGION).
   Data: BUDGET27.alloc (Q1 money by campaign), PUNE_PLAN (Pune spend plan lines). */
(() => {
  const $ = (s, r = document) => r.querySelector(s), $$ = (s, r = document) => [...r.querySelectorAll(s)];
  const esc = s => String(s).replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
  const B = window.BUDGET27, PP = window.PUNE_PLAN;
  const L = v => v >= 100 ? `₹${(v / 100).toFixed(2)} Cr` : `₹${v.toFixed(2)} L`;
  const inr = v => "₹" + Math.round(v).toLocaleString("en-IN");
  const Lr = r => r < 1e5 ? `₹${Math.round(r / 1000)}K` : `₹${(r / 1e5).toFixed(2)} L`;
  let region = window.Y27REGION || "West";
  const isPune = () => region === "West" || region === "Pune";

  // Women's Day store formats (main site, Q1 2027 chapter)
  const WD = {
    Pune: [["Wakad", "Pilates and core on the forecourt, then a women's 5K club run"], ["Wagholi", "Playground morning: pilates, then a women-only pickleball slot"], ["SGS Mall", "In-mall studio: pilates and strength taster classes"], ["Amanora", "Mall-atrium yoga flow and a She Plays try-a-sport zone"], ["NIBM", "Mothers and daughters: yoga and skipping challenges"]],
    Gujarat: [["Motera", "Rooftop-style pilates on the playground"], ["Nexus", "In-mall pilates and a women's run group launch"], ["Baroda", "Court morning: pilates, then women's box cricket"], ["Dumas, Surat", "Sunrise yoga and a women-only pickleball slot"], ["Rajkot", "Garba-fit cardio and a women's walking group"]],
    MP: [["Indore", "Playground pilates, then a women's 5K"], ["Bhopal", "Lakeside yoga by the Upper Lake, back to DB Mall"], ["Gwalior", "Morning walk and yoga, with a self-defence basics class"]]
  };
  const MOM = [
    { ids: ["fit"], n: "Movement for All", lt: "New Year, New Moves", when: "January, all 13 stores", video: "circuit-games", img: "cc/fitness.jpg", c: "#E0A100",
      p: "A complete fitness event across all 13 stores: the city moves for the month. Partner yoga, run and gym sessions bring people to the store; creators post the first two weeks.",
      camps: ["Movement for All"], ms: [2, 4], sports: "Fitness, then running and yoga" },
    { ids: ["clr"], n: "Clearance sale", lt: "animated at the stores", when: "January (2026 ran 10 Jan to 15 Feb)", img: "winter-off.jpg", c: "#D6453D", contain: true,
      p: "In all 13 stores: the end-of-season sale, animated in store, not just discounted. The biggest influencer push of Q1.", camps: ["Clearance sale"], ms: [2], sports: "Every sport: clears the winter range" },
    { ids: ["na"], n: "New arrivals", lt: "SS27", when: "February; creators 24 Feb to 6 Mar", img: "u-kiprun.jpg", c: "#6B4FBB",
      p: "The new summer range runs alongside the sale: shoes first (new arrivals: shoes 1 in the planner), then swimwear.", camps: ["New arrivals"], ms: [3], sports: "Running, swimming, fitness" },
    { ids: ["wd"], n: "Women's Day", lt: "one weekend, all 13 stores", when: "Sat 6 and Sun 7 March (Women's Day is Mon 8 March)", video: "womens-day", c: "#C2185B", wide: true,
      p: "Women-only mornings on the weekend before Women's Day: pilates or yoga first, then a sport to try, then shopping with a Women's Day offer, and a women's club that keeps meeting.",
      camps: ["Women's Day"], ms: [4], sports: "Fitness, running, swimming" },
    { ids: ["sum"], n: "Summer", lt: "water, running and travel", when: "March to May", img: "water/water-women-pool.jpg", c: "#0096C7",
      p: "Learn to swim before the pools fill up, the Kiprun Challenger (₹9,999) for the race season, and summer treks. Summer camp creators run from March to May.", camps: ["Summer"], ms: [4], sports: "Swimming, running, mountain" }
  ];

  const MN = ["Jan", "Feb", "Mar"];
  function moments() {
    const el = $("#mom27"); if (!el) return;
    const A = B.alloc("Pune");
    const q = (X, m) => m.ids.reduce((t, id) => t + X.camp[id].reduce((a, b) => a + b, 0), 0);
    el.innerHTML = MOM.map(m => {
      const q1 = q(A, m), pm = [0, 1, 2].map(i => m.ids.reduce((t, id) => t + A.camp[id][i], 0));
      const ls = isPune() && PP ? PP.lines.filter(x => m.ms.includes(x.m) && m.camps.includes(x.camp)) : [];
      const film = m.video ? `<div class="pb27-film"><video muted loop playsinline preload="none" poster="assets/posters/${m.video}.jpg" data-src="assets/videos/${m.video}.mp4" aria-label="${esc(m.n)} film"></video></div>` : "";
      const pics = m.wide && m.video ? "" : [m.img, m.img2].filter(Boolean).map(f => `<img class="${m.contain ? "contain" : ""}" src="assets/img/${f}" alt="" loading="lazy">`).join("");
      const stores = m.wide ? `<div class="mo-stores">${(region === "West" ? ["Pune", "Gujarat", "MP"] : [region]).map(st => `<div><h5>${st === "MP" ? "Madhya Pradesh" : st}</h5><ul>${WD[st].map(([s, t]) => `<li><b>${s}</b>${esc(t)}</li>`).join("")}</ul></div>`).join("")}</div>` : "";
      const split = region !== "Pune" ? `<span><b>${region === "West" ? "Gujarat, MP: not in our files" : "No " + region + " campaign plan yet"}</b>only month totals; the budget shown is Pune's</span>` : "";
      const src = "Pune spend plan";
      return `<article class="mo27 ${m.wide ? "wide" : ""}" style="--c:${m.c}"><div class="mo-media ${(film && pics) || (m.img && m.img2) ? "two" : ""}">${film}${pics}</div>
        <div class="mo-body"><span class="mo-when">${esc(m.when)}</span><h3>${esc(m.n)}<span class="lt">: ${esc(m.lt)}</span></h3><p>${esc(m.p)}</p>
          <div class="mo-nums"><span><b>${L(q1)}</b>spent on it, ${src}</span><span><b>${pm.map((v, i) => v ? `${MN[i]} ${L(v)}` : "").filter(Boolean).join(" · ")}</b>in its month</span>${split}<span><b>${esc(m.sports)}</b>sports it serves</span></div>
          ${ls.length ? `<div class="mo-pune"><h4>Pune, from the spend plan</h4><ul>${ls.map(x => `<li><span>${esc(x.t.replace("Influencer campaign: ", "Influencers: "))}<small>${PP.months[x.m]}${x.q ? ", " + esc(x.q) : ""}${x.d ? ", " + esc(x.d) : ""}${x.n ? " (" + esc(x.n) + ")" : ""}</small></span><b>${inr(x.v)}</b></li>`).join("")}</ul><p>Pune total <b>${inr(ls.reduce((a, x) => a + x.v, 0))}</b></p></div>` : ""}
          ${stores}</div></article>`;
    }).join("");
    $$("video[data-src]", el).forEach(v => { v.muted = true; gate.observe(v); });
  }
  const gate = new IntersectionObserver(es => es.forEach(e => { const v = e.target; if (e.isIntersecting) { if (!v.src) v.src = v.dataset.src; v.play().catch(() => {}); } else v.pause(); }), { rootMargin: "120px" });

  /* ---------- influencers 2027: the user's sheet, row by row ---------- */
  // [campaign, dates as in the sheet, first month, last month (0 = Jan, null = no date), influencers, views (sheet), cost (₹), CPV (sheet), go-live]
  const INF = [
    ["Movement Is For All", "1 to 31 Jan", 0, 0, 17, 1401400, 149000, 0.11, "2 to 17 Jan"], ["Clearance (January)", "10 Jan to 15 Feb", 0, 1, 50, 3905989, 500000, 0.13],
    ["New Arrivals", "24 Feb to 6 Mar", 1, 2, 15, 254400, 160000, 0.63], ["Summer campaign", "6 to 15 Mar", 2, 2, 35, 1065288, 350000, 0.33],
    ["Gudi Padwa", "16 to 22 Mar", 2, 2, 6, 1172371, 60000, 0.05], ["April summer", "April", 3, 3, 40, 370000, 450000, null],
    ["April misc", "1 to 30 Apr", 3, 3, 1, 656447, 20000, 0.03], ["May summer", "May", 4, 4, 40, 849835, 450000, 0.53],
    ["Monsoon", "15 to 30 May", 4, 4, 15, 0, 150000, 0], ["June misc: monsoon", "June", 5, 5, 40, 0, 400000, 0],
    ["50th Anniversary", "24 to 26 Jul (sheet: 2026)", 6, 6, 18, 914409, 220040, 0.24], ["Festive offer", "13 to 20 Oct (sheet: 2026)", 9, 9, 15, 975400, 150000, 0.15],
    ["Diwali", "No date in the sheet", null, null, 9, 0, 90000, 0], ["Black Friday", "27 to 30 Nov", 10, 10, 50, 0, 500000, 0],
    ["Winter", "December", 11, 11, 20, null, 224000, null], ["Christmas", "No date in the sheet", null, null, 15, 0, 210040, 0],
    ["Express Delivery + Digital", "No date in the sheet", null, null, 60, null, 600000, null], ["Playground", "No date in the sheet", null, null, 30, null, 300000, null]
  ];
  const MON = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  const QC = ["#E0A100", "#0096C7", "#12A150", "#C2185B"];
  function influencers() {
    const el = $("#infl27"); if (!el) return;
    const n = INF.reduce((a, r) => a + r[4], 0), c = INF.reduce((a, r) => a + r[6], 0);
    const q = k => INF.filter(r => r[2] != null && Math.floor(r[2] / 3) === k);
    const qs = [0, 1, 2, 3].map(k => ({ k, n: q(k).reduce((a, r) => a + r[4], 0), c: q(k).reduce((a, r) => a + r[6], 0), rows: q(k).length }));
    const und = INF.filter(r => r[2] == null);
    const maxc = Math.max(...INF.map(r => r[6]));
    el.innerHTML = `<div class="if27-kpis"><div class="tot"><b>${n}</b><span>influencers in ${INF.length} campaigns</span></div><div class="tot"><b>${Lr(c)}</b><span>total cost, ${inr(c)}</span></div>
        ${qs.map(x => `<div style="--c:${QC[x.k]}"><b>${x.n}</b><span>Q${x.k + 1}: ${x.rows} campaigns, ${Lr(x.c)}</span></div>`).join("")}
        <div style="--c:#9AA2C8"><b>${und.reduce((a, r) => a + r[4], 0)}</b><span>no date yet: ${und.length} campaigns, ${Lr(und.reduce((a, r) => a + r[6], 0))}</span></div></div>
      <div class="if27-tl"><div class="if27-axis"><span></span>${MON.map((m, i) => `<span class="${Math.floor(i / 3) % 2 ? "alt" : ""}">${m}</span>`).join("")}</div>
        ${INF.map(r => `<div class="if27-row"><div class="if27-lab"><b>${esc(r[0])}</b><small>${esc(r[1])}</small></div><div class="if27-track">${MON.map((m, i) => `<i class="${Math.floor(i / 3) % 2 ? "alt" : ""}"></i>`).join("")}
          ${r[2] != null ? `<span class="${r[2] >= 9 ? "r" : ""}" style="grid-column:${r[2] + 1} / ${r[3] + 2};--c:${QC[Math.floor(r[2] / 3)]}"><b>${r[4]}</b> influencers, ${Lr(r[6])}</span>` : `<span class="nd" style="grid-column:1 / 13"><b>${r[4]}</b> influencers, ${Lr(r[6])}: no date in the sheet</span>`}</div></div>`).join("")}</div>
      <details class="if27-d"><summary><b>The sheet, row by row</b><span>Influencers, cost, cost per influencer, and the views and cost per view written in the sheet</span></summary>
      <div class="sb-wrap"><table class="y27-table if27-t"><thead><tr><th>Campaign</th><th>Dates</th><th>Influencers</th><th>Cost</th><th>Per influencer</th><th></th><th>Views (sheet)</th><th>Cost per view (sheet)</th></tr></thead><tbody>
        ${INF.map(r => `<tr><td><b>${esc(r[0])}</b>${r[8] ? `<small>go live ${esc(r[8])}</small>` : ""}</td><td>${esc(r[1])}</td><td class="n"><b>${r[4]}</b></td><td class="n">${inr(r[6])}</td><td class="n">${inr(r[6] / r[4])}</td><td class="bar"><i style="--w:${r[6] / maxc * 100}%"></i></td><td class="n">${r[5] ? r[5].toLocaleString("en-IN") : r[5] === 0 ? "0" : "-"}</td><td class="n">${r[7] ? "₹" + r[7].toFixed(2) : r[7] === 0 ? "0.00" : "-"}</td></tr>`).join("")}
        <tr class="tot"><td><b>All</b></td><td></td><td class="n"><b>${n}</b></td><td class="n"><b>${inr(c)}</b></td><td class="n">${inr(c / n)}</td><td></td><td></td><td></td></tr></tbody></table></div></details>
      <p class="w27-note">Source: the influencer sheet shared on 10 Nov 2026 (Campaign Name, Campaign Dates, Content Link, Go Live Date, Total Views, Total Cost, CPV). "Influencers" is the Content Link count. The July and October rows still carry 2026 dates in the sheet, and the views look like 2026 results; 2027 has its 51st anniversary in July and Black Friday on 26 to 29 Nov in the planner. Q1 here differs from the Pune spend plan in three places: new arrivals ₹1.60 L here vs ₹1.49 L; summer 35 + 40 + 40 creators here vs 50 for ₹5 L there; Gudi Padwa (6, ₹60,000) is only here.</p>`;
  }

  document.addEventListener("y27region", e => { region = e.detail; moments(); });
  moments(); influencers();
})();
