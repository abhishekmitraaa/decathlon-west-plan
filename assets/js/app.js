(() => {
  "use strict";
  const D = window.DATA, RW = window.RUNWAY, PL = window.PLANNER, PD = window.PLAN_DETAIL;
  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => [...r.querySelectorAll(s)];
  const css = n => getComputedStyle(document.documentElement).getPropertyValue(n).trim();
  const reduced = matchMedia("(prefers-reduced-motion: reduce)").matches;
  const SVGNS = "http://www.w3.org/2000/svg";
  const fmt = (n, d = 1) => Number(n).toLocaleString("en-IN", { maximumFractionDigits: d, minimumFractionDigits: 0 });
  const esc = s => String(s).replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));

  function h(tag, attrs = {}, html = "") {
    const n = document.createElement(tag);
    for (const [k, v] of Object.entries(attrs)) {
      if (k === "style" && typeof v === "object") for (const [p, pv] of Object.entries(v)) {
        if (p.startsWith("--")) n.style.setProperty(p, pv); else n.style[p] = pv;
      }
      else if (v !== undefined && v !== null) n.setAttribute(k, v);
    }
    if (html) n.innerHTML = html;
    return n;
  }
  function s(tag, attrs = {}, parent) {
    const n = document.createElementNS(SVGNS, tag);
    for (const [k, v] of Object.entries(attrs)) if (v !== undefined) n.setAttribute(k, v);
    if (parent) parent.appendChild(n);
    return n;
  }
  function svg(el, w, hgt) {
    el.innerHTML = "";
    return s("svg", { viewBox: `0 0 ${w} ${hgt}`, width: w, height: hgt, role: "img" }, el);
  }
  function text(parent, x, y, str, attrs = {}) {
    const t = s("text", { x, y, "font-size": 12, fill: css("--text-2"), ...attrs }, parent);
    t.textContent = str;
    return t;
  }
  const niceMax = v => { const p = Math.pow(10, Math.floor(Math.log10(v))); return Math.ceil(v / p * 2) / 2 * p; };

  /* ---------- tooltip ---------- */
  const tip = $("#tip");
  document.addEventListener("pointerover", e => {
    const t = e.target.closest("[data-tip]");
    if (!t) return;
    tip.innerHTML = t.getAttribute("data-tip");
    tip.hidden = false;
  });
  document.addEventListener("pointermove", e => {
    if (tip.hidden) return;
    const x = Math.min(e.clientX + 14, innerWidth - tip.offsetWidth - 10);
    const y = e.clientY - tip.offsetHeight - 14;
    tip.style.left = x + "px";
    tip.style.top = (y < 8 ? e.clientY + 18 : y) + "px";
  });
  document.addEventListener("pointerout", e => { if (e.target.closest("[data-tip]")) tip.hidden = true; });

  /* ---------- top bar, progress, active section ---------- */
  const bar = $("#topbar"), prog = $("#progress");
  const onScroll = () => {
    bar.classList.toggle("solid", scrollY > 40);
    const max = document.documentElement.scrollHeight - innerHeight;
    prog.style.width = (max > 0 ? scrollY / max * 100 : 0) + "%";
  };
  addEventListener("scroll", onScroll, { passive: true });
  onScroll();
  const navLinks = $$(".nav a");
  const secObs = new IntersectionObserver(entries => {
    entries.forEach(en => {
      if (!en.isIntersecting) return;
      navLinks.forEach(a => a.classList.toggle("on", a.getAttribute("href") === "#" + en.target.id));
    });
  }, { rootMargin: "-45% 0px -50% 0px" });
  $$("section[id]").forEach(sec => secObs.observe(sec));

  /* ---------- videos: play only while visible ---------- */
  const vidObs = new IntersectionObserver(entries => {
    entries.forEach(en => {
      const v = en.target;
      if (en.isIntersecting) {
        if (v.dataset.src && !v.src) { v.src = v.dataset.src; }
        if (!reduced || v.dataset.user) v.play().catch(() => {});
      } else v.pause();
    });
  }, { threshold: 0.25 });
  const watch = v => vidObs.observe(v);

  /* ---------- hero ---------- */
  const heroReels = [
    { n: "circuit-games", c: "Mall circuit games", x: "-104%", y: "-4%", r: "-9deg" },
    { n: "winter-gear", c: "Winter gear UGC", x: "-36%", y: "-12%", r: "-3deg" },
    { n: "kiprun", c: "Kiprun run club", x: "34%", y: "-2%", r: "4deg" },
    { n: "yoga-day", c: "Yoga Day, Motera", x: "100%", y: "9%", r: "10deg" }
  ];
  const hp = $("#heroPhones");
  heroReels.forEach((r, i) => {
    const f = h("figure", { class: "phone", style: { "--x": r.x, "--y": r.y, "--rot": r.r, animationDelay: (0.25 + i * 0.09) + "s", zIndex: i === 1 || i === 2 ? 2 : 1, margin: 0 } });
    const v = h("video", { muted: "", loop: "", playsinline: "", preload: "metadata", poster: `assets/posters/${r.n}.jpg`, "data-src": `assets/videos/${r.n}.mp4`, "aria-label": r.c });
    v.muted = true;
    f.append(v, h("figcaption", {}, esc(r.c)));
    hp.append(f);
    watch(v);
  });
  if (innerWidth < 520) $$(".phone", hp).forEach((p, i) => { if (i === 0 || i === 3) p.style.display = "none"; });

  const tickerItems = [
    "Q4 challenge 178.77 Cr", "+24.15% vs last year", "Winter Travel: 15 Oct - 30 Jan", "Black Friday 27-30 Nov: 12 Cr", "Christmas sale 19-31 Dec", "Wakad: 30.4 Cr, the biggest store challenge",
    "Adajan, Surat: grand launch 27 Dec", "16 hoardings: 7 live in Pune", "80+ local influencers", "Kiprun launch: 700 runners, 7 clubs",
    "Q1 2027: +12.1% turnover", "Commonwealth Games 2030, Gujarat"
  ];
  const tk = $("#ticker");
  tk.innerHTML = [...tickerItems, ...tickerItems].map(t => `<span>${esc(t)}</span>`).join("");

  // count-up on load, part of the hero sequence
  $$("[data-count]").forEach(el => {
    const end = parseFloat(el.dataset.count), dec = +(el.dataset.dec || 0);
    if (reduced) return;
    const t0 = performance.now() + 450, dur = 1100;
    const step = now => {
      const p = Math.min(1, Math.max(0, (now - t0) / dur));
      const e = 1 - Math.pow(1 - p, 3);
      el.textContent = (end * e).toFixed(dec);
      if (p < 1) requestAnimationFrame(step);
    };
    el.textContent = (0).toFixed(dec);
    requestAnimationFrame(step);
  });

  /* ---------- charts ---------- */
  const renderers = [];
  const addChart = (el, fn) => { if (!el) return; renderers.push(() => fn(el, el.clientWidth)); };

  // October recap: crop each Instagram embed above its likes and comment bar (about 152px)
  (() => {
    const box = $("#october");
    if (!box) return;
    const CUT = 152;
    const fit = f => { const h = f.offsetHeight; if (h > 320) f.parentElement.style.height = (h - CUT) + "px"; };
    const ro = new ResizeObserver(es => es.forEach(e => fit(e.target)));
    const seen = new WeakSet();
    const scan = () => $$("iframe.instagram-media", box).forEach(f => { if (!seen.has(f)) { seen.add(f); ro.observe(f); fit(f); } });
    new MutationObserver(scan).observe(box, { childList: true, subtree: true });
    scan();
  })();

  // Pune hoardings map: our five stores and the hoardings we have locations for
  (() => {
    const el = $("#puneHoardMap");
    if (!el || !window.L) return;
    const map = L.map(el, { scrollWheelZoom: false, zoomControl: true, attributionControl: true });
    L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", { maxZoom: 18, attribution: "&copy; OpenStreetMap contributors" }).addTo(map);
    const pts = [];
    const storeIcon = L.icon({ iconUrl: "assets/img/deca-pin.png", iconSize: [28, 28], iconAnchor: [14, 14], popupAnchor: [0, -14], className: "map-store" });
    D.stores.filter(s => s.state === "Pune").forEach(s => {
      const m = L.marker([s.lat, s.lon], { icon: storeIcon, title: `Decathlon ${s.name}` }).addTo(map);
      const left = s.name === "SGS Mall";
      m.bindTooltip(`Decathlon ${s.name}`, { permanent: true, direction: left ? "left" : "right", offset: [left ? -16 : 16, 0], className: "map-tip map-tip-store" });
      m.bindPopup(`<b>Decathlon ${esc(s.name)}</b><br>${esc(s.area)}`);
      pts.push([s.lat, s.lon]);
    });
    (window.HOARDINGS || []).filter(h => h.city === "Pune" && h.lat).forEach((h, i) => {
      const icon = L.divIcon({ className: "map-board", html: `<i>${i + 1}</i>`, iconSize: [20, 20], iconAnchor: [24, 24], popupAnchor: [-14, -24] }); // drawn up-left of the point so store logos stay visible
      const m = L.marker([h.lat, h.lon], { icon, zIndexOffset: 1000 }).addTo(map);
      m.bindPopup(`<img src="assets/img/${h.img}" alt="" style="width:220px;border-radius:6px;display:block;margin-bottom:6px"><b>${i + 1}. ${esc(h.loc)}</b><br>${esc(h.size)}, ₹${(h.cost / 1e5).toFixed(2)} L a month${h.exact ? "" : "<br><small>Pin is approximate</small>"}`);
      pts.push([h.lat, h.lon]);
    });
    map.fitBounds(pts, { padding: [40, 40] });
  })();

  // Winter hoarding programme: Pune photo grid (October recap) and the full wall (Marketing playbook)
  (() => {
    const HG = window.HOARDINGS || [];
    const L$ = n => "₹" + (n / 1e5).toLocaleString("en-IN", { maximumFractionDigits: 2 }) + " L";
    const pp = $("#punePhotos");
    if (pp) pp.innerHTML = HG.filter(h => h.city === "Pune").map((h, i) => `<figure><img src="assets/img/${h.img}" alt="Hoarding at ${esc(h.loc)}" loading="lazy"><figcaption><b>${i + 1}. ${esc(h.loc.split(",")[0])}</b><span>${esc(h.size)}, ${L$(h.cost)} a month</span></figcaption></figure>`).join("");
    const box = $("#hoardProgram");
    if (!box) return;
    const cities = ["Pune", "Baroda", "Rajkot", "Surat", "Bhopal"];
    const month = HG.reduce((a, h) => a + h.cost, 0);
    const q4 = HG.reduce((a, h) => a + h.cost * 2, 0);
    box.innerHTML = `<div class="hp-head"><h3 class="display-s"><span class="lt">On the road:</span> winter hoarding programme</h3>
        <div class="hp-stats"><div><b>${HG.length}</b><span>sites in 5 cities</span></div><div><b>${L$(month)}</b><span>a month, all sites</span></div><div><b>${L$(q4)}</b><span>for November and December</span></div><div><b>7 live</b><span>in Pune; Gujarat and Bhopal go live in November</span></div></div></div>
      <div class="hp-cities">${cities.map(c => { const list = HG.filter(h => h.city === c); return `<span><b>${c}</b>${list.length} site${list.length > 1 ? "s" : ""}, ${L$(list.reduce((a, h) => a + h.cost, 0))} a month</span>`; }).join("")}</div>
      <div class="hp-maps">${["Baroda", "Surat", "Bhopal"].map(c => `<div class="hp-map-card"><h5>${c}<small>${HG.filter(h => h.city === c).length} hoarding${HG.filter(h => h.city === c).length > 1 ? "s" : ""}</small></h5><div class="hp-mini" id="hpMap${c}" role="img" aria-label="Map of ${c} with Decathlon stores and hoardings"></div></div>`).join("")}</div>
      <div class="hp-grid">${HG.map(h => `<article class="hp-card"><div class="hp-img"><img src="assets/img/${h.img}" alt="Hoarding site: ${esc(h.loc)}" loading="lazy"><span class="hp-st ${h.status}">${h.status === "live" ? "Live" : "Live from Nov"}</span><span class="hp-city-tag">${h.city} ${HG.filter(x => x.city === h.city).indexOf(h) + 1}</span></div>
        <div class="hp-body"><b>${esc(h.loc)}</b><span class="hp-meta">${esc(h.size)}, ${esc(h.dur)}, <strong>${L$(h.cost)} a month</strong></span><p>${esc(h.why)}</p></div></article>`).join("")}</div>
      <p class="hoard-foot">Map pins are approximate. Ahmedabad: sites near Motera and Nexus still to be confirmed. Gujarat and Bhopal photos show the booked sites before our creative goes up. The Surat board runs a full year, to October 2027 (${L$(190000 * 12)}).</p>`;
  })();

  // Small hoarding maps for Baroda, Surat and Bhopal (playbook programme)
  (() => {
    if (!window.L || !window.HOARDINGS) return;
    const logo = L.icon({ iconUrl: "assets/img/deca-pin.png", iconSize: [22, 22], iconAnchor: [11, 11], className: "map-store" });
    const EXTRA = { Surat: [{ name: "Adajan (opens Dec)", lat: 21.1960, lon: 72.7930 }] };
    const CITY = { Baroda: "Vadodara", Surat: "Surat", Bhopal: "Bhopal" };
    Object.keys(CITY).forEach(c => {
      const el = $("#hpMap" + c);
      if (!el) return;
      const map = L.map(el, { scrollWheelZoom: false, zoomControl: false, attributionControl: true });
      L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", { maxZoom: 18, attribution: "&copy; OpenStreetMap" }).addTo(map);
      const pts = [];
      D.stores.filter(s => s.city === CITY[c]).map(s => ({ name: s.name === c ? (c === "Surat" ? "Dumas Road" : c) : s.name, lat: s.lat, lon: s.lon })).concat(EXTRA[c] || []).forEach(s => {
        L.marker([s.lat, s.lon], { icon: logo }).addTo(map).bindTooltip(`Decathlon ${s.name}`, { permanent: true, direction: "right", offset: [12, 0], className: "map-tip map-tip-store map-tip-sm" });
        pts.push([s.lat, s.lon]);
      });
      window.HOARDINGS.filter(h => h.city === c && h.lat).forEach((h, i) => {
        const icon = L.divIcon({ className: "map-board", html: `<i>${i + 1}</i>`, iconSize: [20, 20], iconAnchor: [10, 10] });
        L.marker([h.lat, h.lon], { icon, zIndexOffset: 1000 }).addTo(map)
          .bindPopup(`<img src="assets/img/${h.img}" alt="" style="width:200px;border-radius:6px;display:block;margin-bottom:6px"><b>${i + 1}. ${esc(h.loc)}</b><br>${esc(h.size)}, ₹${(h.cost / 1e5).toFixed(2)} L a month`);
        pts.push([h.lat, h.lon]);
      });
      map.fitBounds(pts, { padding: [36, 36], maxZoom: 13 });
    });
  })();

  // AOPs (areas of practice) in Q4: November and December from the store plan (shown in the AOP tab)
  const aopQ4 = () => {
    const A = window.AOP_PLAN;
    if (!A) return "";
    const COL = { Pune: "var(--blue)", Gujarat: "var(--guj)", MP: "var(--mp)" }, NAME = { Pune: "Pune", Gujarat: "Gujarat", MP: "Madhya Pradesh" };
    const L$ = n => "₹" + (n / 1e5).toLocaleString("en-IN", { minimumFractionDigits: 2, maximumFractionDigits: 2 }) + " L";
    const sum = (list, f) => list.reduce((a, x) => a + f(x), 0);
    const q4 = x => x.months[0] + x.months[1];
    const total = sum(A, q4), cost = sum(A, x => q4(x) * x.cost);
    const nov = sum(A, x => x.months[0]), dec = sum(A, x => x.months[1]);
    const live = sum(A.filter(x => x.live != null), x => x.live);
    const row = x => `<tr><th scope="row">${esc(x.store)}</th><td>${x.live != null ? `<b>${x.live}</b>` : `<span class="ak-na">Not shared</span>`}</td>
        <td>${x.months[0]}</td><td>${x.months[1]}</td><td><b>${q4(x)}</b></td><td>₹${x.cost.toLocaleString("en-IN")}</td><td><b>${L$(q4(x) * x.cost)}</b></td></tr>`;
    const body = ["Pune", "Gujarat", "MP"].map(st => {
      const list = A.filter(x => x.state === st);
      return `<tr class="ak-st" style="--c:${COL[st]}"><th colspan="7" scope="rowgroup">${NAME[st]}<small>${sum(list, q4)} new AOPs, ${L$(sum(list, x => q4(x) * x.cost))}</small></th></tr>` + list.map(row).join("");
    }).join("");
    return `<p class="ak-lead">${nov} open in November and ${dec} in December. Live now: ${A.filter(x => x.live != null).map(x => `${x.store} ${x.live}`).join(", ")}.</p>
      <div class="sb-wrap"><table class="sb-table ak-table"><thead><tr><th scope="col">Store</th><th scope="col">Live now</th><th scope="col">Nov</th><th scope="col">Dec</th><th scope="col">Q4 new</th><th scope="col">Cost per AOP</th><th scope="col">Q4 cost</th></tr></thead>
        <tbody>${body}<tr class="sb-total"><th scope="row">13 stores</th><td>${live}</td><td>${nov}</td><td>${dec}</td><td>${total}</td><td></td><td>${L$(cost)}</td></tr></tbody></table></div>
      <p class="foot">Live counts were shared for Wakad, Amanora, Wagholi, SGS, Baroda and Bhopal. Rajkot and Gwalior run lighter AOPs at ₹7,000 each.</p>`;
  };

  // Campaign-wise Q4 spend: a cluster summary by campaign theme, then a toggle for each business unit
  (() => {
    const box = $("#sbCamp"), C = D.campQ4;
    if (!box || !C) return;
    const L1 = n => "₹" + (n / 1e5).toFixed(2) + " L";
    const ST = [["Gujarat", "Gujarat", css("--guj")], ["MP", "Madhya Pradesh", css("--mp")], ["Pune", "Pune", css("--pune")]];
    const q4 = r => r[1] + r[2] + r[3];
    // each state's campaign names differ, so the cluster view groups them into shared themes
    const THEMES = [
      ["Winter and travel", /winter|travel/i], ["Festive: Navratri, Dussehra, Diwali", /navratri|dussehra|diwali|festive/i],
      ["Running, Kiprun and marathons", /running|kiprun|marathon/i], ["Climbing and trekking", /climbing|trekking/i],
      ["Kids Fest and Children's Day", /kids/i], ["Black Friday", /black friday/i], ["Christmas and year-end sale", /christmas|end of year/i],
      ["Buffer, anniversary and other", /./]
    ];
    const themeOf = name => THEMES.findIndex(t => t[1].test(name));
    const stTot = k => C[k].reduce((a, r) => a + q4(r), 0);
    const cluster = () => {
      const grid = THEMES.map(() => ({ Gujarat: 0, MP: 0, Pune: 0 }));
      ST.forEach(([k]) => C[k].forEach(r => { grid[themeOf(r[0])][k] += q4(r); }));
      const all = ST.reduce((a, [k]) => a + stTot(k), 0);
      const max = Math.max(...grid.map(g => g.Gujarat + g.MP + g.Pune));
      return `<div class="cq-kpis">${ST.map(([k, n, c]) => `<div style="--c:${c}"><b>${L1(stTot(k))}</b><span>${n}</span></div>`).join("")}<div class="tot"><b>₹1.6 Cr</b><span>Q4 marketing budget</span></div></div>
        <table class="sb-table sb-lines"><thead><tr><th scope="col">Campaign theme</th>${ST.map(([, n, c]) => `<th scope="col" style="color:${c}">${n}</th>`).join("")}<th scope="col">Cluster</th><th scope="col" class="share">Share</th></tr></thead><tbody>
        ${grid.map((g, i) => { const t = g.Gujarat + g.MP + g.Pune; return `<tr><th scope="row">${THEMES[i][0]}</th>${ST.map(([k]) => `<td>${g[k] ? L1(g[k]) : "-"}</td>`).join("")}<td><b>${L1(t)}</b></td><td class="share"><div class="sh-cell"><span class="sh-bar"><i style="width:${t / max * 100}%;background:var(--blue)"></i></span><b>${(t / all * 100).toFixed(1)}%</b></div></td></tr>`; }).join("")}
        </tbody></table>`;
    };
    const state = k => {
      const [, n, c] = ST.find(x => x[0] === k), rows = C[k], tot = stTot(k), base = k === "Pune" ? C.puneTotal : tot;
      const top = [...rows].sort((a, b) => q4(b) - q4(a))[0];
      return `<div class="cq-st" style="--c:${c}"><h4>${n}<small>${L1(tot)}${k === "Pune" ? ` shown of ${L1(C.puneTotal)}` : ""} · biggest: ${esc(top[0].split(" (")[0])}</small></h4>
        <table class="sb-table"><thead><tr><th scope="col">Campaign</th><th scope="col">Oct</th><th scope="col">Nov</th><th scope="col">Dec</th><th scope="col">Q4</th><th scope="col">Share</th></tr></thead><tbody>
        ${rows.map(r => `<tr><th scope="row">${esc(r[0])}</th>${[r[1], r[2], r[3]].map(v => `<td>${v ? L1(v) : "-"}</td>`).join("")}<td><b>${L1(q4(r))}</b></td><td>${(q4(r) / base * 100).toFixed(1)}%</td></tr>`).join("")}
        </tbody></table></div>`;
    };
    box.innerHTML = `<div class="seg persona-seg cq-seg" role="group" aria-label="Choose business unit">${[["All", "Cluster summary"], ...ST.map(([k, n]) => [k, n])].map(([k, n], i) => `<button type="button" data-k="${k}" aria-pressed="${i === 0}">${n}</button>`).join("")}</div>
      <div id="cqView"></div>`;
    const show = k => { $("#cqView").innerHTML = k === "All" ? cluster() : state(k); $$(".cq-seg button", box).forEach(b => b.setAttribute("aria-pressed", b.dataset.k === k)); };
    $$(".cq-seg button", box).forEach(b => b.addEventListener("click", () => show(b.dataset.k)));
    show("All");
  })();

  // Q4 topline: challenge, by state, by channel, by month (store-level challenge sheet)
  if ($("#sbTop")) (() => {
    const T = D.stateTO, q = D.q4;
    const states = [["Pune", T["PUNE TOTAL"], "var(--blue)"], ["Gujarat", T["GJ TOTAL"], "var(--guj)"], ["Madhya Pradesh", T["MP TOTAL"], "var(--mp)"]];
    const base = states.reduce((a, x) => a + x[1].q425, 0);
    const row = (name, y1, y2, g, col) => `<div class="tl-row"><span>${name}</span>
      <div class="tl-bars"><i class="y1" style="width:${y1 / y2 * 100}%" data-tip="<b>${name}</b><br>Q4 2025: ${fmt(y1, 2)} Cr"></i><i class="y2" style="background:${col}" data-tip="<b>${name}</b><br>Q4 2026 challenge: ${fmt(y2, 2)} Cr"></i></div>
      <b>${fmt(y2, 2)} Cr<em>+${fmt(g, 1)}%</em></b></div>`;
    const maxM = Math.max(...q.months.map(m => m.growth));
    $("#sbTop").innerHTML = `<div class="tl-hero"><span>Q4 2026 turnover challenge</span><b>${fmt(q.target, 2)} Cr</b>
        <p><strong>+${fmt(q.growth, 2)}%</strong> on Q4 2025's ${fmt(base, 2)} Cr. MP grows fastest, Pune carries the most, and wholesale nearly quadruples.</p>
        <div class="tl-months">${q.months.map(m => `<div><i style="height:${m.growth / maxM * 100}%"></i><b>+${fmt(m.growth, 1)}%</b><span>${m.m.slice(0, 3)}</span></div>`).join("")}</div>
        <small>Challenge growth by month: each month asks for more than the last.</small></div>
      <div class="tl-col"><h4>By state</h4>${states.map(([n, t, c]) => row(n, t.q425, t.ch, t.g, c)).join("")}</div>
      <div class="tl-col"><h4>By channel</h4>${q.channels.map(c => row(c.name, c.y1, c.challenge, c.growth, "var(--ink)")).join("")}</div>
      <p class="tl-key"><span><i class="y1"></i>Q4 2025</span><span><i class="y2"></i>Q4 2026 challenge</span> Each bar is drawn to its own challenge, so the pale part shows how much is new.</p>`;
  })();

  // Q4 so far: in-store sales 1-26 Oct against each store's Q4 challenge
  (() => {
    const O = D.octMTD, box = $("#sbPace");
    if (!O) return;
    const q0 = new Date("2026-10-01"), q1 = new Date("2026-12-31"), now = new Date(O.to);
    const timePct = ((now - q0) / 864e5 + 1) / ((q1 - q0) / 864e5 + 1) * 100;
    const cust = O.custTotal, ret = O.retTotal; // report totals count a customer once across stores
    const toAll = O.stores.reduce((a, s) => a + s.to, 0);
    const k = $("#octKpis");
    if (k) k.innerHTML = `<div><b>₹${fmt(toAll, 2)} Cr</b><span>in-store sales, 1-26 October</span></div><div><b>+${O.growth}%</b><span>growth on last year (store report)</span></div><div><b>${(cust / 1e5).toFixed(2)} lakh</b><span>customers, ${Math.round(ret / cust * 100)}% of them returning</span></div><div><b>${(O.stores.reduce((a, s) => a + s.qty, 0) / 1e5).toFixed(2)} lakh</b><span>items sold</span></div>`;
    if (!box) return;
    const COL = { Pune: "var(--blue)", Gujarat: "var(--guj)", MP: "var(--mp)" }, NAME = { Pune: "Pune", Gujarat: "Gujarat", MP: "Madhya Pradesh" };
    const rows = D.stores.map(s => { const o = O.stores.find(x => x.store === s.name) || { to: 0, cust: 0 }; return { ...s, oct: o.to, cust: o.cust, pct: o.to / s.challenge * 100 }; });
    const chAll = rows.reduce((a, r) => a + r.challenge, 0);
    const row = r => `<div class="pc-row"><span>${esc(r.name)}</span>
        <div class="pc-track" data-tip="<b>${esc(r.name)}</b><br>1-26 Oct: ₹${fmt(r.oct, 2)} Cr<br>Q4 challenge: ₹${fmt(r.challenge, 2)} Cr (${fmt(r.pct, 1)}%)"><i style="width:${Math.min(r.pct, 100)}%;background:${COL[r.state]}"></i></div>
        <b>${r.pct.toFixed(1)}%</b><small>₹${fmt(r.oct, 2)} of ₹${fmt(r.challenge, 2)} Cr</small></div>`;
    box.innerHTML = `<div class="panel-head row"><div><h3>Q4 so far: 1 to 26 October</h3>
        <p>In-store sales against each store's Q4 challenge. ${fmt(timePct, 0)}% of the quarter's days are gone; November and December carry Diwali, Black Friday and the year-end sale, so stores below the line are not necessarily behind.</p></div>
        <div class="pc-total"><b>₹${fmt(toAll, 2)} Cr</b><span>of ₹${fmt(chAll, 2)} Cr store challenge: ${fmt(toAll / chAll * 100, 1)}%</span></div></div>
      <div class="pc-groups" style="--t:${timePct}%">${["Pune", "Gujarat", "MP"].map(st => `<div class="pc-grp">${(() => { const L2 = rows.filter(r => r.state === st), o = L2.reduce((a, r) => a + r.oct, 0), ch = L2.reduce((a, r) => a + r.challenge, 0); return `<div class="pc-st" style="--c:${COL[st]}"><h4>${NAME[st]}</h4><b>${(o / ch * 100).toFixed(1)}%</b><small>₹${fmt(o, 2)} of ₹${fmt(ch, 2)} Cr</small></div>`; })()}${rows.filter(r => r.state === st).sort((a, b) => b.pct - a.pct).map(row).join("")}</div>`).join("")}</div>`;
  })();

  // Q4 challenge by channel: per-channel scale so wholesale stays readable
  addChart($("#chChannels"), (el, W) => {
    const rows = D.q4.channels, rowH = 66, H = rows.length * rowH + 8;
    const g = svg(el, W, H);
    const labelW = Math.min(210, W * 0.36), barX = labelW, barW = W - labelW - 70;
    rows.forEach((r, i) => {
      const y = i * rowH + 6, max = r.challenge;
      text(g, 0, y + 18, r.name, { "font-size": 14, "font-weight": 650, fill: css("--text") });
      text(g, 0, y + 38, `+${fmt(r.growth, 2)}% challenge growth`, { "font-size": 12, "font-weight": 700, fill: css("--mint-ink") });
      s("rect", { x: barX, y: y + 4, width: barW * r.y1 / max, height: 16, rx: 3, fill: "#C9CEF0", "data-tip": `<b>${esc(r.name)}</b><br>Y1: ${fmt(r.y1, 2)} Cr` }, g);
      s("rect", { x: barX, y: y + 24, width: barW, height: 22, rx: 3, fill: css("--blue"), "data-tip": `<b>${esc(r.name)}</b><br>Challenge: ${fmt(r.challenge, 2)} Cr` }, g);
      text(g, barX + barW * r.y1 / max + 6, y + 17, fmt(r.y1, 2), { "font-size": 12, "font-weight": 700 });
      text(g, barX + barW + 6, y + 40, fmt(r.challenge, 2) + " Cr", { "font-size": 13, "font-weight": 800, fill: css("--ink") });
    });
  });
  // monthly ramp
  if ($("#ramp")) (() => {
    const max = Math.max(...D.q4.months.map(m => m.growth));
    $("#ramp").innerHTML = D.q4.months.map(m => `<div style="--h:${m.growth / max * 100}%"><b>+${fmt(m.growth, 2)}%</b><span>${m.m} challenge growth</span></div>`).join("");
  })();

  // commercial weekends: grouped columns
  addChart($("#chWeekends"), (el, W) => {
    const H = 240, m = { t: 34, b: 44, l: 4, r: 4 }, data = D.weekends;
    const g = svg(el, W, H);
    const max = 22, iw = W - m.l - m.r, ih = H - m.t - m.b, band = iw / data.length, bw = Math.min(30, band * 0.3);
    const y = v => m.t + ih - v / max * ih;
    s("line", { x1: m.l, x2: W - m.r, y1: m.t + ih, y2: m.t + ih, stroke: css("--line"), "stroke-width": 1.5 }, g);
    data.forEach((d, i) => {
      const cx = m.l + band * i + band / 2;
      s("rect", { x: cx - bw - 2, y: y(d.to25), width: bw, height: m.t + ih - y(d.to25), rx: 3, fill: "#C9CEF0", "data-tip": `<b>${d.name} 2025</b><br>${d.d25}: ${d.to25} Cr` }, g);
      s("rect", { x: cx + 2, y: y(d.to26), width: bw, height: m.t + ih - y(d.to26), rx: 3, fill: css("--blue"), "data-tip": `<b>${d.name} 2026 target</b><br>${d.d26}: ${d.to26} Cr` }, g);
      text(g, cx - bw / 2 - 2, y(d.to25) - 6, d.to25, { "text-anchor": "middle", "font-size": 11, "font-weight": 600 });
      text(g, cx + bw / 2 + 2, y(d.to26) - 6, d.to26, { "text-anchor": "middle", "font-size": 12, "font-weight": 800, fill: css("--ink") });
      text(g, cx, y(d.to26) - 22, `+${d.g}%`, { "text-anchor": "middle", "font-size": 12, "font-weight": 800, fill: css("--mint-ink") });
      text(g, cx, H - 24, d.name.replace("EOY festive sale", "EOY sale").replace(" sale", ""), { "text-anchor": "middle", "font-size": 12, "font-weight": 650, fill: css("--text") });
      text(g, cx, H - 8, d.d26, { "text-anchor": "middle", "font-size": 11 });
    });
    text(g, m.l, 12, "■ 2025 actual", { fill: "#9AA2DA", "font-size": 11, "font-weight": 700 });
    text(g, m.l + 92, 12, "■ 2026 target", { fill: css("--blue"), "font-size": 11, "font-weight": 700 });
  });

  // funnel
  if ($("#funnel")) $("#funnel").innerHTML = D.funnel.map(f => `<div class="funnel-row"><span>${f.stage}</span><div class="bar" style="--w:${f.v / D.funnel[0].v * 100}%">${f.v} L</div><em>${f.pct}%</em></div>`).join("");

  // spend lines
  if ($("#spendLines")) (() => {
    const max = Math.max(...D.spendLines.map(l => l.v));
    $("#spendLines").innerHTML = D.spendLines.map(l => `<div class="line-item"><b>${esc(l.name)}</b><span>${l.v} L</span><i style="--w:${l.v / max * 100}%"></i><small>${esc(l.okr)}</small></div>`).join("");
  })();

  // spend by month: 2026 vs 2027 with region toggle
  let region = "All";
  const sumArr = (a, b) => a.map((v, i) => v + b[i]);
  const regionSeries = r => {
    if (r !== "All") return D.spend[r];
    const k = ["Pune", "Gujarat", "MP"];
    return { y26: k.map(x => D.spend[x].y26).reduce(sumArr), y27: k.map(x => D.spend[x].y27).reduce(sumArr) };
  };
  const regionColor = r => ({ All: css("--blue"), Pune: css("--pune"), Gujarat: css("--guj"), MP: css("--mp") }[r]);
  addChart($("#chSpend"), (el, W) => {
    const H = 300, m = { t: 20, b: 30, l: 38, r: 70 };
    const ser = regionSeries(region), col = regionColor(region);
    const g = svg(el, W, H), iw = W - m.l - m.r, ih = H - m.t - m.b;
    const max = niceMax(Math.max(...ser.y26, ...ser.y27) * 1.05);
    const x = i => m.l + iw * i / 11, y = v => m.t + ih - v / max * ih;
    // quarter bands
    [[0, 2, "Q1"], [9, 11, "Q4"]].forEach(([a, b, l]) => {
      s("rect", { x: x(a) - iw / 22, y: m.t, width: x(b) - x(a) + iw / 11, height: ih, fill: css("--mist") }, g);
      text(g, (x(a) + x(b)) / 2, m.t + 14, l, { "text-anchor": "middle", "font-size": 11, "font-weight": 800, fill: css("--text-3") });
    });
    for (let i = 0; i <= 4; i++) {
      const v = max * i / 4;
      s("line", { x1: m.l, x2: W - m.r, y1: y(v), y2: y(v), stroke: css("--line"), "stroke-dasharray": i ? "2 4" : "" }, g);
      text(g, m.l - 8, y(v) + 4, fmt(v, 0), { "text-anchor": "end", "font-size": 11 });
    }
    D.spend.months.forEach((mo, i) => text(g, x(i), H - 8, mo, { "text-anchor": "middle", "font-size": 11, "font-weight": 600 }));
    const path = a => a.map((v, i) => `${i ? "L" : "M"}${x(i).toFixed(1)},${y(v).toFixed(1)}`).join("");
    s("path", { d: path(ser.y27) + `L${x(11)},${y(0)}L${x(0)},${y(0)}Z`, fill: col, opacity: 0.1 }, g);
    s("path", { d: path(ser.y26), fill: "none", stroke: "#9AA2C8", "stroke-width": 2, "stroke-dasharray": "5 5" }, g);
    s("path", { d: path(ser.y27), fill: "none", stroke: col, "stroke-width": 3, "stroke-linejoin": "round" }, g);
    ser.y27.forEach((v, i) => s("circle", { cx: x(i), cy: y(v), r: 5, fill: "#fff", stroke: col, "stroke-width": 2.5,
      "data-tip": `<b>${D.spend.months[i]} · ${region}</b><br>2027 plan: ${fmt(v)} L<br>2026 ${i >= 9 ? "Q4 plan" : "actual"}: ${fmt(ser.y26[i])} L` }, g));
    text(g, x(11) + 10, y(ser.y27[11]) + 4, "2027 plan", { "font-size": 12, "font-weight": 800, fill: col });
    text(g, x(11) + 10, y(ser.y26[11]) + (Math.abs(y(ser.y26[11]) - y(ser.y27[11])) < 16 ? 18 : 4), "2026", { "font-size": 12, "font-weight": 700, fill: "#8A92BC" });
  });
  const spendNotes = () => {
    const sum = a => a.reduce((x, y) => x + y, 0);
    $("#spendNotes").innerHTML = ["Pune", "Gujarat", "MP"].map(r => {
      const d = D.spend[r], a = sum(d.y26), b = sum(d.y27), ch = (b - a) / a * 100;
      const c = regionColor(r);
      const qa = sum(d.y26.slice(0, 3)), qb = sum(d.y27.slice(0, 3)), qc = (qb - qa) / qa * 100;
      return `<div><span class="sw" style="background:${c}"></span>${r}<b>${fmt(b / 100, 2)} Cr in 2027</b>${ch >= 0 ? "+" : ""}${fmt(ch, 0)}% vs ${fmt(a / 100, 2)} Cr in 2026<small class="sn-q1">Q1: ${fmt(qa / 100, 2)} Cr → <b>${fmt(qb / 100, 2)} Cr</b> (${qc >= 0 ? "+" : ""}${fmt(qc, 0)}%)</small></div>`;
    }).join("");
  };
  spendNotes();
  (() => {
    const ST = [["Pune", "Pune", css("--pune")], ["Gujarat", "Gujarat", css("--guj")], ["MP", "Madhya Pradesh", css("--mp")]];
    const COLS = ["#141A5C", "#3643BA", "#00C4E1", "#8A92E0", "#00A99D", "#2BFF88", "#7B3FC4", "#C9CEF0"];
    const tot = Object.fromEntries(ST.map(([k]) => [k, D.spend[k].y27.reduce((x, y) => x + y, 0)]));
    const all = ST.reduce((a, [k]) => a + tot[k], 0), maxP = Math.max(...D.spend.split27.map(x => x[1]));
    $("#split27").innerHTML = `<table class="sb-table sb-lines"><thead><tr><th scope="col">Line</th>${ST.map(([, n, c]) => `<th scope="col" style="color:${c}">${n}</th>`).join("")}<th scope="col">Total</th><th scope="col" class="share">Share of budget</th></tr></thead><tbody>
      ${D.spend.split27.map(([n, p], i) => `<tr><th scope="row"><i class="sw" style="background:${COLS[i]}"></i>${n}</th>${ST.map(([k]) => `<td>₹${(tot[k] * p / 1e4).toFixed(2)} Cr</td>`).join("")}<td><b>₹${(all * p / 1e4).toFixed(2)} Cr</b></td>
        <td class="share"><div class="sh-cell"><span class="sh-bar"><i style="width:${p / maxP * 100}%;background:${COLS[i]}"></i></span><b>${p}%</b></div></td></tr>`).join("")}
      <tr class="sb-total"><th scope="row">Total</th>${ST.map(([k]) => `<td><b>₹${(tot[k] / 100).toFixed(2)} Cr</b></td>`).join("")}<td><b>₹${(all / 100).toFixed(2)} Cr</b></td><td class="share"><b>100%</b></td></tr></tbody></table>
      <p class="foot">The data sheet splits every month of every state the same way, so the shares are fixed. ${fmt(all / 100, 2)} Cr in total for 2027.</p>`;
  })();
  $$("#regionSeg button").forEach(b => b.addEventListener("click", () => {
    region = b.dataset.r;
    $$("#regionSeg button").forEach(x => x.setAttribute("aria-pressed", x === b));
    drawSpend();
  }));
  const drawSpend = renderers[renderers.length - 1];

  // omni turnover 2026
  addChart($("#chOmni"), (el, W) => {
    const H = 240, m = { t: 26, b: 24, l: 4, r: 4 }, o = D.omni, months = D.spend.months;
    const g = svg(el, W, H), iw = W - m.l - m.r, ih = H - m.t - m.b, band = iw / 12, bw = Math.max(8, band * 0.62);
    const max = 32, y = v => m.t + ih - v / max * ih;
    o.total.forEach((t, i) => {
      const x = m.l + band * i + (band - bw) / 2, inn = t - o.outstore[i];
      s("rect", { x, y: y(inn), width: bw, height: m.t + ih - y(inn), fill: i >= 9 ? css("--blue") : "#A9B0E6",
        "data-tip": `<b>${months[i]} 2026</b><br>Omni: ${fmt(t, 2)} Cr (${o.growth[i] >= 0 ? "+" : ""}${o.growth[i]}%)<br>Outstore: ${fmt(o.outstore[i], 2)} Cr (${o.outGrowth[i] >= 0 ? "+" : ""}${o.outGrowth[i]}%)` }, g);
      s("rect", { x, y: y(t), width: bw, height: y(inn) - y(t), fill: css("--mint"), "data-tip": `<b>${months[i]} outstore</b><br>${fmt(o.outstore[i], 2)} Cr, ${o.outGrowth[i] >= 0 ? "+" : ""}${o.outGrowth[i]}% vs 2025` }, g);
      if (i === 9 || i === 11 || (i === 6 && band > 40)) text(g, x + bw / 2, y(t) - 6, `+${fmt(o.outGrowth[i], 0)}%`, { "text-anchor": "middle", "font-size": 10.5, "font-weight": 800, fill: css("--mint-ink") });
      text(g, x + bw / 2, H - 6, months[i][0], { "text-anchor": "middle", "font-size": 11, "font-weight": 600 });
    });
    text(g, 4, 11, "■ in-store", { "font-size": 11, "font-weight": 700, fill: "#8D95D8" });
    text(g, 82, 11, "■ outstore", { "font-size": 11, "font-weight": 700, fill: css("--mint-ink") });
  });

  // What people play in Q4 (Oct-Dec): Pune city top-sports plan, months 10-12
  const sportCols = ["#3643BA", "#8A92E0", "#2BFF88", "#00A99D", "#7B3FC4"];
  const darkSeg = [true, false, false, true, true];
  if ($("#chSports")) (() => {
    const Q = [9, 10, 11], QM = ["October", "November", "December"], SOM = ["Running", "Climbing and trekking", "Trekking"];
    const mTot = Q.map(i => D.puneSports.reduce((a, sp) => a + sp.v[i], 0));
    const sTot = D.puneSports.map(sp => Q.reduce((a, i) => a + sp.v[i], 0));
    const qTot = mTot.reduce((a, b) => a + b, 0), maxM = Math.max(...mTot);
    const lead = sTot.indexOf(Math.max(...sTot));
    $("#sportsNote").textContent = `Pune city top sports, October to December (Cr). ${fmt(qTot, 2)} Cr in the quarter; ${D.puneSports[lead].sport.toLowerCase()} leads with ${Math.round(sTot[lead] / qTot * 100)}%.`;
    $("#chSports").innerHTML = Q.map((i, k) => `<div class="q4s-row">
        <div class="q4s-m"><b>${QM[k]}</b><span>Sport of the month: ${SOM[k]}</span></div>
        <div class="q4s-bar" style="width:${mTot[k] / maxM * 100}%">${D.puneSports.map((sp, j) => `<i style="flex:${sp.v[i]} 1 0;background:${sportCols[j]};color:${darkSeg[j] ? "#fff" : "#10135A"}" data-tip="<b>${QM[k]} · ${esc(sp.sport)}</b><br>${fmt(sp.v[i], 2)} Cr">${fmt(sp.v[i], 2)}</i>`).join("")}</div>
        <em>${fmt(mTot[k], 2)} Cr</em></div>`).join("");
    $("#sportsLegend").innerHTML = D.puneSports.map((sp, j) => `<span><i style="background:${sportCols[j]}"></i>${sp.sport} · ${fmt(sTot[j], 2)} Cr (${Math.round(sTot[j] / qTot * 100)}%)</span>`).join("");
  })();

  // stores
  if ($("#puneStoreShare")) (() => {
    const maxS = Math.max(...D.puneStores.map(s => s.share));
    $("#puneStoreShare").innerHTML = D.puneStores.map(st => `<div class="store-row"><b>${st.store}</b><div class="store-bars">
      <i style="--w:${st.share / maxS * 100}%;background:var(--blue)" data-tip="<b>${st.store}</b><br>${st.share}% of Pune turnover"></i></div>
      <small>${st.share}% of Pune city turnover</small></div>`).join("");
  })();


  /* ---------- runway ---------- */
  const measure = (() => {
    const ctx = document.createElement("canvas").getContext("2d");
    return (str, font = "700 12px Inter") => { ctx.font = font; return ctx.measureText(str).width; };
  })();
  // today's marker follows the real date, kept inside the runway's range
  const now = new Date(), nowISO = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, "0")}-${String(now.getDate()).padStart(2, "0")}`;
  const todayISO = nowISO < RW.start ? RW.start : nowISO > RW.end ? RW.end : nowISO;
  const todayLabel = new Date(todayISO + "T00:00:00").toLocaleDateString("en-GB", { day: "numeric", month: "short" });
  const drawRunway = () => {
    const el = $("#runwayChart");
    const t0 = new Date(RW.start), t1 = new Date(RW.end), span = (t1 - t0) / 864e5 + 1;
    const pos = d => ((new Date(d) - t0) / 864e5) / span * 100;
    const trackW = Math.max(el.clientWidth, 960) - 170;
    const monthNames = ["Aug 2026", "Sep", "Oct", "Nov", "Dec", "Jan 2027", "Feb", "Mar"];
    const focus = [2, 3, 4];
    const bounds = monthNames.map((_, i) => pos(new Date(Date.UTC(2026, 7 + i, 1)).toISOString().slice(0, 10)));
    let html = `<div class="rw-months" style="grid-template-columns:170px 1fr"><span style="border:0"></span><div style="position:relative;height:18px">${
      monthNames.map((m, i) => `<span class="${focus.includes(i) ? "focus" : ""}" style="position:absolute;left:${bounds[i]}%">${m}</span>`).join("")}</div></div>`;
    const rowH = 34;
    RW.lanes.forEach((lane, li) => {
      // pack items into rows by their drawn extent: the bar, or the label if that is wider
      const rows = [];
      const placed = lane.items.map(it => {
        const a = pos(it.s), b = pos(it.e) + 100 / span;
        const labelPx = measure(it.t) + (it.note ? measure(" " + it.note, "600 12px Inter") + 5 : 0) + (it.star ? 17 : 0) + 22;
        const x0 = a / 100 * trackW, x1 = Math.max(b / 100 * trackW, x0 + labelPx);
        let r = rows.findIndex(end => end + 6 <= x0);
        if (r < 0) { rows.push(0); r = rows.length - 1; }
        rows[r] = x1;
        return { it, a, b, r };
      });
      html += `<div class="rw-lane"><h4>${lane.name}</h4><div class="rw-track" style="height:${rows.length * rowH + 16}px">
        <div class="rw-band" style="left:${pos(RW.focusStart)}%;width:${pos(RW.focusEnd) - pos(RW.focusStart) + 100 / span}%"></div>
        <div class="rw-today ${li ? "quiet" : ""}" style="left:${pos(todayISO)}%"></div>
        ${placed.map(p => {
          const lab = `${p.it.star ? '<span class="star" aria-label="key event">★</span>' : ""}${esc(p.it.t)}${p.it.note ? ` <em>${p.it.note}</em>` : ""}`;
          const fd = (d, o) => new Date(d).toLocaleDateString("en-IN", o);
          const when = p.it.approx
            ? `${fd(p.it.s, { month: "short", year: "numeric" })}${fd(p.it.s, { month: "short" }) !== fd(p.it.e, { month: "short" }) ? " - " + fd(p.it.e, { month: "short", year: "numeric" }) : ""}<br>Approximate, read from the Q4 timeline slide`
            : `${fd(p.it.s, { day: "numeric", month: "short" })} - ${fd(p.it.e, { day: "numeric", month: "short", year: "numeric" })}`;
          const tipTxt = `<b>${esc(p.it.t)}</b><br>${when}${p.it.note ? "<br>Target " + p.it.note : ""}`;
          return `<div class="rw-item ${p.it.k}" style="left:${p.a}%;width:${p.b - p.a}%;top:${10 + p.r * rowH}px" data-tip="${esc(tipTxt)}">${lab}</div>`;
        }).join("")}
      </div></div>`;
    });
    el.innerHTML = html;
  };
  renderers.push(drawRunway);
  (() => {
    $("#runwayKey").innerHTML = [
      ["#fff", "National campaign"], [css("--red"), "Sale or commercial weekend"], ["rgba(255,255,255,.2)", "Local adaptation or event"],
      [css("--mint"), "Store opening"], ["rgba(43,255,136,.3)", "Sport of the month"], [css("--sun"), `External event, or today (${todayLabel})`]
    ].map(([c, l]) => `<span><i style="background:${c}"></i>${l}</span>`).join("") + `<span>★ Key event</span>`;
  })();

  $("#kiprunKpis").innerHTML = D.kiprun.map(k => `<li><b>${k.n}</b>${k.l}</li>`).join("");
  $$(".spot video").forEach(v => { v.muted = true; watch(v); });

  /* ---------- 2027 planner ---------- */
  let month = 0;
  const pune27 = D.spend.Pune.y27, maxP = Math.max(...pune27);
  const plannerEl = $("#plannerGrid");
  function buildPlanner() {
    let html = `<div class="pl-corner">Bar under each month: Pune ad spend, relative to the biggest month</div>`;
    html += PL.months.map((m, i) => `<button type="button" class="pl-month ${["q1", "q2", "q3", "q4"][Math.floor(i / 3)]}" data-m="${i}" aria-pressed="${i === month}">
        <b>${m}</b><small>${PD.seasonality[i].toLowerCase().replace(/^./, c => c.toUpperCase())}<br>${PD.weather[i]}</small><i class="pl-spend" style="--w:${pune27[i] / maxP * 100}%" data-tip="<b>${m} 2027</b><br>Pune ad spend ${fmt(pune27[i])} L"></i></button>`).join("");
    PL.lanes.forEach(lane => {
      const rows = [];
      const chips = lane.items.map(it => {
        let r = rows.findIndex(end => end < it.a);
        if (r < 0) { rows.push(-1); r = rows.length - 1; }
        rows[r] = it.b;
        const on = month >= it.a && month <= it.b;
        return `<span class="pl-chip ${it.k} ${on ? "" : "dim"}" style="grid-column:${it.a + 1} / ${it.b + 2};grid-row:${r + 1}" data-tip="${esc(`<b>${it.t.split("\n").join("<br>")}</b><br>${PL.months[it.a]}${it.b > it.a ? " - " + PL.months[it.b] : ""} 2027${it.star ? "<br>★ Key moment" : ""}`)}">${it.star ? "★ " : ""}${it.t.split("\n").map(esc).join("<br>")}</span>`;
      }).join("");
      html += `<div class="pl-lane-name">${lane.name}</div><div class="pl-lane">${chips}</div>`;
    });
    html += `<div class="pl-lane-name">Sport of the month</div><div class="pl-sport">${D.puneSportOfMonth.map((sp, i) => `<span class="${i === month ? "on" : ""}">${sp}</span>`).join("")}</div>`;
    plannerEl.innerHTML = html;
    $$(".pl-month", plannerEl).forEach(b => b.addEventListener("click", () => selectMonth(+b.dataset.m)));
  }
  const MONTHS_FULL = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  const splitBanner = t => {
    const m = t.match(/^(.*?[a-z])([A-Z].*)$/);
    return m && !/^(Gudi|Maharashtra|Ganesh)/.test(t) ? [m[1], m[2]] : [t, ""];
  };
  function field(label, v, cls = "") {
    if (!v) return "";
    return `<div class="md-f ${cls}"><dt>${label}</dt><dd>${esc(v)}</dd></div>`;
  }
  let mdOpen = false;
  function renderMonth() {
    const i = month, P = k => PD[k][i];
    const [b1, b2] = splitBanner(P("banner"));
    $("#monthDetail").innerHTML = `
      <div class="md-head">
        <h3 class="display-s">${MONTHS_FULL[i]}</h3>
        <div><span class="md-banner">${esc(b1)}${b2 ? ": " + esc(b2) : ""}</span><p>${esc(P("response"))}. Sport of the month: ${D.puneSportOfMonth[i].toLowerCase()}. Pune ad spend ${fmt(pune27[i])} L.</p></div>
        <div class="md-nav"><select aria-label="Choose month" id="mdSelect">${MONTHS_FULL.map((n, k) => `<option value="${k}" ${k === i ? "selected" : ""}>${n} 2027</option>`).join("")}</select><button type="button" data-d="-1" aria-label="Previous month">‹</button><button type="button" data-d="1" aria-label="Next month">›</button></div>
      </div>
      <details class="md-more" ${mdOpen ? "open" : ""}><summary>${MONTHS_FULL[i]} in full: what competitors do, how Pune answers, and what goes live on the ground</summary>
      <div class="md-body">
        <div class="md-col them"><h4>What competitors do</h4>
          ${field("Their campaign", P("compCampaign"))}
          ${field("Who is pushing what", P("compPresence"))}
          ${field("Products they push", P("compProduct"))}
          ${field("Offers", P("compOffer"))}
          ${field("Online", P("compDigital"))}
          ${field("In store", P("compPhysical"))}
          ${field("Events and community", P("compEvent"))}
          ${field("What they do well", P("theyDoWell"))}
        </div>
        <div class="md-col"><h4>How Pune answers</h4>
          ${field("Our opportunity", P("opportunity"), "hl")}
          ${field("Our response", P("response"), "hl")}
          ${field("Who we are talking to", P("target"))}
          ${field("Marketing channels", P("channels"))}
          ${field("Website banner", b2 ? `${b1}: ${b2}` : b1)}
          ${field("Community events booked", P("communityEvents"))}
          ${field("Influencers", P("influencers"))}
          ${field("Partnerships", P("partnerships"))}
        </div>
        <div class="md-col ground"><h4>On the ground</h4>
          ${field("Hoardings, OOH, HIPOP and AOP", P("ooh"))}
          ${field("Store activation", P("storeActivation"))}
          ${field("Academies", P("academy"))}
          ${field("Gyms", P("gym"))}
          ${field("Schools and colleges", P("school"))}
          ${field("Corporates", P("corporate"))}
          ${field("Residential societies", P("society"))}
          ${field("Sports community events", P("sportsEvent"))}
          ${field("Flyers", P("flyers"))}
          ${field("Free products", P("freeProducts"))}
        </div>
      </div></details>`;
    $(".md-more").addEventListener("toggle", e => { mdOpen = e.target.open; });
    $("#mdSelect").addEventListener("change", e => selectMonth(+e.target.value));
    $$(".md-nav button").forEach(b => b.addEventListener("click", () => selectMonth((month + +b.dataset.d + 12) % 12, true)));
  }
  function selectMonth(i, keepFocus) {
    month = i;
    buildPlanner();
    renderMonth();
    if (keepFocus) $(".md-nav button[data-d='1']")?.focus();
  }
  selectMonth(0);

  // IP footfall bars
  (() => {
    const max = Math.max(...D.ipEvents.map(e => e.goal));
    if ($("#ipBars")) $("#ipBars").innerHTML = D.ipEvents.map(e => `<div class="ip-row ${e.goal === max ? "top" : ""}"><b>${e.name}</b><span>${e.when}</span>
      <i style="--w:${Math.max(e.goal / max * 100, 1)}%" data-v="${e.goal.toLocaleString("en-IN")}"></i></div>`).join("");
  })();

  /* ---------- budget 2027 ---------- */
  (() => {
    const B = D.budget2027, barEl = $("#budgetBar");
    if (!barEl) return;
    barEl.innerHTML = B.lines.map((l, i) => `<button type="button" role="tab" style="--p:${l.pct}" aria-selected="${i === 0}" data-i="${i}"><b>${l.pct}%</b><span>${l.name}</span></button>`).join("");
    const show = i => {
      const l = B.lines[i];
      $("#budgetDetail").innerHTML = `<div><h4>${l.name}: ${fmt(B.total * l.pct / 100)} L</h4><p>${esc(l.why)}</p></div><ul>${l.how.map(x => `<li>${esc(x)}</li>`).join("")}</ul>`;
      $$("button", barEl).forEach((b, k) => b.setAttribute("aria-selected", k === i));
    };
    $$("button", barEl).forEach(b => b.addEventListener("click", () => show(+b.dataset.i)));
    show(0);
  })();

  /* ---------- playbook switchboard ---------- */
  const monthsWith = (key, test) => PD[key].map((v, i) => [i, v]).filter(([, v]) => v && (!test || test(v)));
  const monthCards = (key, test, limit = 12) => `<div class="sp-months">${monthsWith(key, test).slice(0, limit).map(([i, v]) => `<div><b>${PL.months[i]}</b>${esc(v)}</div>`).join("")}</div>`;
  const CHANNELS = [
    { name: "Hoardings and OOH", tag: "35%", media: ["hpgm/pune-baner.jpg", "hpgm/pune-bhumkar.jpg"],
      title: "Own the road during sale weeks",
      copy: "Hoardings run only for commercial campaigns and change with the season, so the road sees the sale before the phone does.",
      cities: [["7", "Pune"], ["4", "Baroda"], ["2", "Rajkot"], ["2", "Bhopal"], ["1", "Surat"]],
      stats: [["16", "hoardings this winter"], ["₹17.25 L", "a month, all sites"], ["+15%", "bills growth OKR"], ["35%", "of the 2027 budget"]],
      planTitle: "Pune OOH plan, 2027", plan: () => monthCards("ooh") },
    { name: "Practice-place hoardings (AOP)", tag: "25%", media: ["aop-wall.mp4"], wideMedia: true,
      title: "Sport is everywhere",
      copy: "We turn the places people already play into small Decathlon stores. A kit wall with prices and QR codes goes up at swimming academies, sports academies, gyms, yoga studios, metro stations in Pune and Ahmedabad, parks, societies and corporate campuses.",
      flow: ["See the display", "Scan the QR code", "Explore or complete a kit", "Shop online", "Home delivery or Click & Collect"],
      stats: [["114", "new AOPs in Q4"], ["₹25.04 L", "Q4 cost"], ["114", "live now (6 stores)"], ["3-5", "pilot locations per city in Q1"]],
      planTitle: "AOPs in Q4, store by store: what opens in November and December, and what it costs", plan: aopQ4 },
    { name: "WhatsApp channels, PN and RCS", tag: "5%", media: ["whatsapp.jpg", "push-notification.jpg"], contain: true,
      title: "Bring them back",
      copy: "Existing customers hear about sales, new arrivals and local events on channels they already check: WhatsApp, push notifications in the app and RCS messages. The WhatsApp channel also carries express delivery: customers in pin codes a store can reach in 2 hours get a message when express is live for them, so the nearest store becomes the fastest one.",
      flow: ["Store sets its express pin codes", "WhatsApp alert to customers in those pin codes", "Order in the app", "Delivered from the nearest store in 2 hours"],
      stats: [["5 L", "customers reached in Q1"], ["2 hr", "express delivery, pin-code targeted"], ["30", "express orders a day, target"], ["+15%", "returning customers in Q1"]],
      planTitle: "Months where WhatsApp and CRM lead in Pune", plan: () => monthCards("channels", v => /WhatsApp|CRM/i.test(v)) },
    { name: "Influencers", tag: "25%", media: ["../posters/process-vs.jpg", "../posters/winter-gear.jpg", "../posters/kiprun.jpg"],
      title: "Local voices, buying intent",
      copy: "Top local creators spread the offer across the city and send people who came to buy. That makes conversion easier and lifts the basket. One influencer a week through Q4, 40 each in Gujarat and MP.",
      stats: [["21", "campaigns done"], ["0.08", "cost per view, YTD"], ["40.3 L", "impressions, YTD"], ["63.7K", "likes and comments, YTD"], ["20 mn", "views target"]],
      planTitle: "Pune creator list by month", plan: () => monthCards("influencers") },
    { name: "Meta, app and landing pages", tag: "65 L", media: ["meta-reel.jpg", "landing-page.jpg"],
      title: "Paid social that lands on a local page",
      copy: "Meta reels and stories carry each campaign, and ads land on campaign pages in the app and on decathlon.in. Festive pages can speak the local language, like नव-ऊर्जा, नव-खेल for new arrivals from ₹199.",
      stats: [["65 L", "MarCom spend in Q4"], ["0.45%", "of turnover"], ["20%", "bounce-rate target"], ["50 L", "turnover from omni campaigns"]],
      planTitle: "Pune website banners, 2027", plan: () => monthCards("banner").replace(/([a-z])([A-Z])/g, "$1: $2") },
    { name: "In-mall and in-store kit", tag: "16 L", media: ["winter-off.jpg", "two-hour-delivery.jpg"],
      title: "Close the sale at the shelf",
      copy: "Once people are in the mall, the kit pulls them into the store and to the right aisle: facade, flyers, TG headers, standees, A4 and stop-rayon signs, and a winter window with signage in every store.",
      stats: [["11 L", "in-mall media, Q4"], ["+0.5 pts", "mall-to-store conversion"], ["3 L", "in-store communication"], ["2 L", "flyers, BF sale +25%"]],
      planTitle: "Store activation by month", plan: () => monthCards("storeActivation") },
    { name: "Events and community", tag: "10%", media: ["heritage-run.jpg", "local-love.jpg", "kiprun-runner.jpg"],
      title: "Show up where people play",
      copy: "Pop-ups, external events, school visits and society activations, plus the Heritage Run: a community walk and run every Sunday morning, rotating through the cities, with a story stop at a landmark the city is proud of. Partnered events only, and the big ones go through Decathlon Play.",
      flow: ["Sunday 6:30 am", "3K walk or 5K run", "10-minute story stop at the landmark", "Breakfast and a reel", "Next Sunday, next city"],
      stats: [["8 L", "store events, Q4"], ["500", "runners at in-store meetups"], ["10", "apartments for the Workshop Mela"], ["1.38", "purchase frequency OKR"]],
      planTitle: "Heritage Run: Sunday walks and runs, and the story at each stop", plan: () => `<div class="hr-grid"><article class="hr-card"><span class="hr-city">Pune</span><h5>Shaniwar Wada to Lal Mahal</h5><small>Old Pune's peths</small><p>Built in 1732 by Peshwa Bajirao I, Shaniwar Wada was the seat of the Peshwas. Lal Mahal, a short run away, stands where young Shivaji grew up.</p><em>Stores: Wakad, SGS Mall, Amanora, NIBM, Wagholi</em></article><article class="hr-card"><span class="hr-city">Pune</span><h5>Sinhagad trail</h5><small>Fort trek, once a quarter</small><p>In 1670 Tanaji Malusare scaled the cliff to win the fort back and died doing it: “Gad aala, pan sinha gela”, the fort is won but the lion is lost.</p><em>Stores: All Pune stores</em></article><article class="hr-card"><span class="hr-city">Ahmedabad</span><h5>The old city's pols</h5><small>India's first UNESCO World Heritage City</small><p>Ahmedabad's walled city became India's first World Heritage City in 2017: gated pols, carved wooden homes and the Sidi Saiyyed mosque's stone jaali.</p><em>Stores: Motera, Nexus</em></article><article class="hr-card"><span class="hr-city">Ahmedabad</span><h5>Riverfront to Sabarmati Ashram</h5><small>Riverfront run</small><p>Gandhi lived at the ashram from 1917 to 1930 and set out from it on the Dandi March.</p><em>Stores: Motera, Nexus</em></article><article class="hr-card"><span class="hr-city">Vadodara</span><h5>Laxmi Vilas Palace and Sayaji Baug</h5><small>Royal Baroda</small><p>Built in 1890 for Maharaja Sayajirao Gaekwad III, the palace is said to be four times the size of Buckingham Palace.</p><em>Stores: Baroda</em></article><article class="hr-card"><span class="hr-city">Surat</span><h5>Tapi riverfront to Surat Castle</h5><small>The old port city</small><p>The castle went up in the 1540s to guard Surat from Portuguese raids, when Surat was the Mughal empire's great port.</p><em>Stores: Dumas Road, Adajan</em></article><article class="hr-card"><span class="hr-city">Rajkot</span><h5>Kaba Gandhi no Delo</h5><small>Gandhi's boyhood home</small><p>Gandhi grew up in this Rajkot house; the family home is now a memorial a short run from Race Course.</p><em>Stores: Rajkot</em></article><article class="hr-card"><span class="hr-city">Indore</span><h5>Rajwada to Lalbagh Palace</h5><small>The Holkars' city</small><p>The seven-storey Rajwada was the Holkars' palace; Ahilyabai Holkar's rule is still Indore's pride.</p><em>Stores: Indore</em></article><article class="hr-card"><span class="hr-city">Bhopal</span><h5>Upper Lake, VIP Road</h5><small>The city of lakes</small><p>Bhopal's Upper Lake is credited to Raja Bhoj in the 11th century; the lakeside road is the city's favourite morning run.</p><em>Stores: Bhopal</em></article><article class="hr-card"><span class="hr-city">Gwalior</span><h5>Up to Gwalior Fort</h5><small>The pearl of fortresses</small><p>A temple inside the fort holds one of the oldest known inscriptions of the zero, from the 9th century; Babur called the fort the pearl among fortresses.</p><em>Stores: Gwalior</em></article></div><h4 class="hr-sub">Residential society plan, Pune</h4>${monthCards("society")}` },
    { name: "Store openings", tag: "Dec", media: ["surat-grand-opening.jpg", "surat-map.jpg", "surat-offer.jpg"],
      title: "Adajan, Surat: grand launch 27 December",
      copy: "Chalo Ramiye, Adajan! Hoardings locked on 30 Oct, AOPs placed in the catchment from 1 Nov, then events and community activation, and the grand launch on Sunday 27 Dec: ₹85 L in the first three days, then 30 days to ₹2.5 Cr. Gifts on bigger bills instead of discounts, Deca Runners classes, and twice the usual marketing spend in Q1. The full plan is in the Surat section.",
      stats: [["720+", "sports items in store"], ["2x", "Q1 marketing spend"], ["5k", "Beach Fest participants"], ["10:30-10", "open daily"]],
      planTitle: "Surat new-store timeline", plan: () => `<ol class="sr-tl"><li><b>Deal signed</b><span>“Opening in December 2026” banner goes up on the building, with a QR code to apply for jobs</span></li><li><b>30 Oct</b><span>Hoardings finalised, led by the Pal Umra Bridge board</span></li><li><b>By 15 Nov</b><span>All 10 AOPs and 2 hoardings live in the Adajan area (placement from 1 Nov)</span></li><li><b>Nov - Dec</b><span>Events and community activation: teaser, date reveal, Ramat Rath in 36 societies, treasure hunt, Happy Streets, creators' preview, 10-day countdown</span></li><li class="peak"><b>Sun 27 Dec</b><span>Grand launch: inauguration with Surat athletes, Tapi Sunrise Run, sports carnival</span></li><li><b>27 Dec - 25 Jan</b><span>First 30 days to ₹2.5 Cr: Night Carnival, New Year run, leagues, Kai Po Che! for Uttarayan</span></li></ol>` },
    { name: "Quick commerce and delivery", tag: "2 hr", media: ["quick-commerce.jpg", "two-hour-delivery.jpg", "app-order.jpg"],
      title: "Sport, delivered fast",
      copy: "The 12 Cr digital challenge splits three ways: home delivery and pick-from-store, sell-at-store in our shops, and express delivery with affiliation. Digital turnover grows 27% when traffic, conversion, orders and basket all move together.",
      equation: true,
      stats: [["8 Cr", "home delivery and pick-up, 66% share"], ["3.3 Cr", "sell-at-store, 27.5% share"], ["80 L", "express and affiliation"], ["30", "express orders a day"]],
      planTitle: "Growth levers", plan: () => `<ul><li>Ship-from-store for Pune cuts lead time by 2 days in 4 districts</li><li>Highlight 20 R3 and exclusive models in store: 40% OOR share</li><li>Cycling and equipment boosted with EMI, Dussehra and no-carton strategy</li><li>Affiliation through 50+ travel agencies, 50 academies and coaches, runners and cyclists: 40 L, +130%</li><li>Pick and pack in 30 minutes, 99% of the time</li></ul>` },
    { name: "Playground activation", tag: "5 stores", media: ["playground-court.jpg", "yoga-motera-playground.jpg"],
      title: "Keep the court busy",
      copy: "Five stores have their own playground: Indore, Wagholi, Surat (Dumas Road), Baroda and Motera. A busy court is the best ad a store has. We fill it every week with continuous events, show it on social media while it happens, and use push notifications to call nearby customers in for the next session.",
      flow: ["Weekly event calendar per court", "Reels and stories from the court", "Push to customers near the store", "Play, then shop inside"],
      stats: [["5", "stores with a playground"], ["Every week", "an event on each court"], ["3", "channels: events, social, push"], ["Walk-ins", "the measure: footfall and dwell time"]],
      planTitle: "How each court gets used", plan: () => `<ul><li><b>Indore:</b> weekend leagues and weekday evening open play; push to Indore app users before each session</li><li><b>Wagholi:</b> family and kids' sessions on weekends for the Wagholi and Kharadi housing belt; society groups invited by WhatsApp</li><li><b>Surat, Dumas Road:</b> evening box cricket and pickle sessions, kept running as Adajan opens so Dumas stays busy</li><li><b>Baroda:</b> school and academy slots on weekday afternoons, open play on weekends</li><li><b>Motera:</b> the template: Yoga Day filled this court with hundreds of people; repeat with monthly community mornings</li><li><b>Every court:</b> a fixed weekly slot people can plan around, a reel or story from every session, and a push notification to nearby customers before the next one. Playground events give direct footfall; regular use brings repeat visits, longer dwell time and family purchases (strategy toolkit).</li></ul>` }
  ];
  // Tab order set by the team (27 Oct 2026)
  const ORDER = ["Hoardings and OOH", "Practice-place hoardings (AOP)", "Playground activation", "Quick commerce and delivery", "Events and community",
    "Store openings", "Influencers", "In-mall and in-store kit", "Meta, app and landing pages", "WhatsApp channels, PN and RCS"];
  CHANNELS.sort((a, b) => ORDER.indexOf(a.name) - ORDER.indexOf(b.name));
  (() => {
    const list = $("#switchList"), panel = $("#switchPanel");
    list.innerHTML = CHANNELS.map((c, i) => `<button type="button" class="sw-tab" role="tab" id="tab${i}" aria-selected="${i === 0}" aria-controls="switchPanel" data-i="${i}">${esc(c.name)}<small>${esc(c.tag)}</small></button>`).join("");
    const show = i => {
      const c = CHANNELS[i];
      panel.setAttribute("aria-labelledby", "tab" + i);
      panel.innerHTML = `
        <div class="sp-hero">
          <div class="sp-media ${c.contain ? "contain" : ""} ${c.wideMedia ? "wide" : ""}">${c.media.map(m => m.endsWith(".mp4") ? `<div class="sm-video"><video autoplay muted loop playsinline poster="assets/posters/${m.replace(".mp4", ".jpg")}" src="assets/videos/${m}"></video><button type="button" class="snd-btn" aria-pressed="false" aria-label="Play video with sound"><svg viewBox="0 0 24 24" width="14" height="14" aria-hidden="true"><path fill="currentColor" d="M12 3v10.55A4 4 0 1 0 14 17V7h4V3h-6z"/></svg><span>Sound off</span></button></div>` : `<img src="assets/img/${m}" alt="" loading="lazy">`).join("")}</div>
          <div class="sp-copy">
            <h3>${esc(c.title)}</h3>
            <p>${esc(c.copy)}</p>
            ${c.cities ? `<div class="sp-cities">${c.cities.map(([n, city]) => `<span><b>${n}</b>${city}</span>`).join("")}</div>` : ""}
            ${c.flow ? `<div class="sp-flow">${c.flow.map(f => `<span>${f}</span>`).join("<i></i>")}</div>` : ""}
            ${c.equation ? `<div class="sp-flow"><span>Traffic +18%</span><i></i><span>CVR 1.6%, +7%</span><i></i><span>Orders +22%</span><i></i><span>ABV +6%</span><i></i><span style="background:var(--mint)">Digital TO +27%</span></div>` : ""}
          </div>
        </div>
        <div class="sp-stats">${c.stats.map(([n, l]) => `<div><b>${n}</b><span>${l}</span></div>`).join("")}</div>
        <div class="sp-plan"><h4>${esc(c.planTitle)}</h4>${c.plan()}</div>`;
      $$(".sw-tab", list).forEach((b, k) => b.setAttribute("aria-selected", k === i));
    };
    $$(".sw-tab", list).forEach(b => b.addEventListener("click", () => show(+b.dataset.i)));
    list.addEventListener("keydown", e => {
      if (!["ArrowDown", "ArrowUp", "ArrowLeft", "ArrowRight"].includes(e.key)) return;
      e.preventDefault(); e.stopPropagation();
      const tabs = $$(".sw-tab", list), cur = tabs.indexOf(document.activeElement);
      const nx = (cur + (e.key === "ArrowDown" || e.key === "ArrowRight" ? 1 : -1) + tabs.length) % tabs.length;
      tabs[nx].focus(); show(nx);
    });
    show(0);
  })();

  /* ---------- reels ---------- */
  const REELS = [
    { n: "circuit-games", t: "Mall circuit games", h: "Forty strangers sweating in the middle of a mall.",
      w: "Nobody explains the workout. The crowd is the proof. Fast cuts, real breath, the court does the selling.",
      u: "January's Movement for All, shot at SGS, Amanora and Nexus." },
    { n: "winter-gear", t: "Winter gear on a budget", h: "A parent says the total out loud.",
      w: "Value is never claimed, it's shown: one receipt, one toddler, one full winter kit. The price is the punchline.",
      u: "Gift a Sport under ₹999 and the Winter Travel edit." },
    { n: "kiprun", t: "Kiprun run club", h: "Sweaty faces, bibs, a group photo.",
      w: "The runners are the hero; Kiprun is in every frame but never the subject. Community tells the story, the brand just shows up in it.",
      u: "The Kiprun Challenger launch in March." },
    { n: "process-vs", t: "Process vs product", h: "The mess first. The magic after.",
      w: "Showing the set-up earns the finale. People trust what they saw being built.",
      u: "The Surat countdown, 17 to 26 December." },
    { n: "yoga-day", t: "Yoga Day from above", h: "One drone shot. A playground of mats.",
      w: "Scale proven in one second, no voice-over needed. The bigger the crowd, the smaller the logo can be.",
      u: "Yoga Day 2027 and Sports Utsav." },
    { n: "motera", t: "Decathlon Motera", h: "Our own teammate on the mic at sunrise.",
      w: "Local faces beat any creator for trust. The store becomes a person, not a building.",
      u: "Gujarat pages, Uttarayan week and store-event recaps." },
    { n: "run-like-a-girl", t: "Proud to run like a girl", h: "One caption. Fourteen seconds.",
      w: "It borrows a feeling women already carry and simply turns up the volume. Short enough to watch twice, which the algorithm loves.",
      u: "Women's Sport Month in February and Women's Day." }
  ];
  (() => {
    const row = $("#reelRow");
    row.innerHTML = REELS.map(r => `<article class="reel">
      <button type="button" class="reel-phone" data-sound="off" aria-label="Play ${esc(r.t)} with sound">
        <video muted loop playsinline preload="none" poster="assets/posters/${r.n}.jpg" data-src="assets/videos/${r.n}.mp4"></video>
        <span class="snd">Sound off</span>
      </button>
      <h3>${esc(r.t)}</h3>
      <dl class="reel-notes"><div><dt>The hook</dt><dd>${esc(r.h)}</dd></div><div><dt>Why it works</dt><dd>${esc(r.w)}</dd></div><div><dt>Where we'll use it</dt><dd>${esc(r.u)}</dd></div></dl></article>`).join("");
    $$(".reel-phone", row).forEach(btn => {
      const v = $("video", btn);
      v.muted = true;
      watch(v);
      btn.addEventListener("click", () => {
        const turnOn = btn.dataset.sound === "off";
        $$(".reel-phone", row).forEach(o => { const ov = $("video", o); ov.muted = true; o.dataset.sound = "off"; $(".snd", o).textContent = "Sound off"; });
        if (!v.src) v.src = v.dataset.src;
        if (turnOn) { v.muted = false; v.dataset.user = "1"; v.play().catch(() => {}); btn.dataset.sound = "on"; $(".snd", btn).textContent = "Sound on"; }
      });
    });
  })();

  // AW26 social content plan
  if ($("#contentPlan")) $("#contentPlan").innerHTML = [
    { q: "Q1", m: "Jan-Mar", c: "Winter campaign, Republic Day, Valentine's Day, Women's Day and Holi", p: "New shoes launch phase 1, running and cycling", h: "New Year, New Moves. Movement for All. Clearance sale alerts.", now: true },
    { q: "Q2", m: "Apr-Jun", c: "Summer camp, Ugadi and Gudi Padwa, Sports Utsav (22-23 May), Yoga Day", p: "Swimming, cricket, fitness gear, Kiprun Challenger", h: "World Environment Day Circular Bazaar. Beach Day promo." },
    { q: "Q3", m: "Jul-Sep", c: "Monsoon and back to school, Independence Day, National Sports Day, 51st anniversary", p: "Shoes phase 3 and 4, AW hero and iconic range", h: "Mountain Days. Monsoon gear. Outdoor challenges." },
    { q: "Q4", m: "Oct-Dec", c: "Dussehra Gift a Sport, Diwali (optional), Black Friday, Christmas sale", p: "Winter and travel, trekking, Kids Carnival", h: "Festive gifting guide. World Mental Health Day.", now: true }
  ].map(q => `<div class="cp-q ${q.now ? "now" : ""}"><h4>${q.q}<small>${q.m}</small></h4><dl>
      <dt>Campaigns</dt><dd>${q.c}</dd><dt style="margin-top:8px">Product focus</dt><dd>${q.p}</dd><dt style="margin-top:8px">Content hooks</dt><dd>${q.h}</dd></dl></div>`).join("") +
    `<div class="cp-foot">Social content plan, AW26. Runs on Meta reels and stories, WhatsApp and push, organic social with creators, and in-app pages. The line we want people to say back to us: “You inspired me to start.”</div>`;

  /* ---------- Q1 ---------- */
  (() => {
    const sum = (a, n) => a.slice(0, n).reduce((x, y) => x + y, 0);
    const rows = ["Pune", "Gujarat", "MP"].map(r => ({ r, a: sum(D.spend[r].y26, 3), b: sum(D.spend[r].y27, 3) }));
    const max = Math.max(...rows.flatMap(x => [x.a, x.b]));
    if (!$("#chQ1")) return;
    $("#chQ1").innerHTML = `<div class="stores">${rows.map(x => {
      const ch = (x.b - x.a) / x.a * 100;
      return `<div class="store-row" style="grid-template-columns:90px 1fr"><b>${x.r}</b><div class="store-bars">
        <i style="--w:${x.a / max * 100}%;background:#C9CEF0" data-tip="<b>${x.r}, Q1 2026</b><br>${fmt(x.a)} L"></i>
        <i style="--w:${x.b / max * 100}%;background:${regionColor(x.r)}" data-tip="<b>${x.r}, Q1 2027 plan</b><br>${fmt(x.b)} L"></i></div>
        <small>${fmt(x.a)} L in Q1 2026 → <b>${fmt(x.b)} L</b> in Q1 2027 (${ch >= 0 ? "+" : ""}${fmt(ch, 0)}%)</small></div>`;
    }).join("")}</div>`;
  })();

  (() => {
    const t0 = new Date("2027-01-01"), days = 90;
    const H = D.holidaysQ1;
    const regions = [["Pune", "Pune", css("--pune")], ["Gujarat", "Gujarat", css("--guj")], ["MP", "Madhya Pradesh", css("--mp")]];
    const TYPE = { holiday: "Holiday", festival: "Festival", sport: "Sports event", moment: "Moment", exams: "Exams" };
    const pos = d => ((new Date(d) - t0) / 864e5 + 0.5) / days * 100;
    const day = d => new Date(d).toLocaleDateString("en-IN", { day: "numeric", month: "short" });
    const when = x => x.e ? `${day(x.d)} - ${day(x.e)}` : day(x.d);
    const tip = x => `<b>${esc(x.name)}</b><br>${when(x)}${x.approx ? " (approx.)" : ""}<br>${esc(x.use)}`;
    let html = `<div class="hol-grid"><div class="hol-head"><span>January</span><span>February</span><span>March</span></div>`;
    regions.forEach(([r, name, c]) => {
      html += `<div class="hol-row"><h4><i style="background:${c}"></i>${name}</h4><div class="hol-track">${
        H.filter(x => x.r.includes(r)).map(x => x.e
          ? `<span class="hol-span t-${x.t}" style="left:${pos(x.d)}%;width:${pos(x.e) - pos(x.d)}%;--c:${c}" data-tip="${tip(x)}"></span>`
          : `<button type="button" class="hol-dot t-${x.t}" style="left:${pos(x.d)}%;color:${c}" aria-label="${esc(x.name)}, ${when(x)}" data-tip="${tip(x)}"></button>`).join("")
      }</div></div>`;
    });
    html += `</div><div class="hol-cols">${regions.map(([r, name, c]) => `<details class="hol-col" style="--c:${c}"><summary><h4>${name}</h4><span>${H.filter(x => x.r.includes(r)).length} holidays and moments</span></summary><ul>${
      H.filter(x => x.r.includes(r)).map(x => `<li><b>${when(x)}</b><div><span class="hol-name">${esc(x.name)}</span><span class="hol-type t-${x.t}">${TYPE[x.t]}${x.approx ? ", date approx." : ""}</span><small>${esc(x.use)}</small></div></li>`).join("")
    }</ul></details>`).join("")}</div>
      <p class="foot">Dates from 2027 calendars (Drik Panchang, state holiday lists) and event organisers; state lists for 2027 are provisional, and dates marked approx. are estimates. Next up after March: Gudi Padwa (8 Apr, Pune).</p>`;
    $("#holidays").innerHTML = html;
  })();

  /* ---------- render charts + resize ---------- */
  const renderAll = () => renderers.forEach(f => f());
  renderAll();
  let rt;
  addEventListener("resize", () => { clearTimeout(rt); rt = setTimeout(renderAll, 150); });
  if (document.fonts) document.fonts.ready.then(renderAll);

  /* ---------- present mode ---------- */
  const steps = [$("#top"), ...$$("[data-step]")];
  const hud = $("#hud"), presentBtn = $("#presentBtn");
  let presenting = false;
  const current = () => {
    let idx = 0;
    steps.forEach((el, i) => { if (el.getBoundingClientRect().top <= 90) idx = i; });
    return idx;
  };
  const go = d => {
    const i = Math.max(0, Math.min(steps.length - 1, current() + d));
    steps[i].scrollIntoView({ behavior: reduced ? "auto" : "smooth" });
    if (presenting) hud.textContent = `${i + 1} / ${steps.length}`;
  };
  presentBtn.addEventListener("click", () => {
    presenting = !presenting;
    presentBtn.setAttribute("aria-pressed", presenting);
    hud.hidden = !presenting;
    hud.textContent = `${current() + 1} / ${steps.length} · use ← → or PgUp PgDn`;
    if (presenting && document.documentElement.requestFullscreen) document.documentElement.requestFullscreen().catch(() => {});
    if (!presenting && document.fullscreenElement) document.exitFullscreen().catch(() => {});
  });
  addEventListener("keydown", e => {
    if (e.target instanceof Element && e.target.closest("input, textarea, [role=tablist]")) return;
    const fwd = ["PageDown", "ArrowRight"].includes(e.key) || (presenting && e.key === "ArrowDown");
    const back = ["PageUp", "ArrowLeft"].includes(e.key) || (presenting && e.key === "ArrowUp");
    if (fwd) { e.preventDefault(); go(1); }
    else if (back) { e.preventDefault(); go(-1); }
    else if (e.key === "p" && !e.metaKey && !e.ctrlKey) presentBtn.click();
  });
})();
