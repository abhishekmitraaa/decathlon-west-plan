/* Store by store: map, ranking, per-store what / where / how, state money mix, strategy toolkit.
   Facts come from data.js (ultimate data sheet, Marcom calendar, deck). Anything computed
   from those numbers is labelled "suggested" on the page. */
(() => {
  "use strict";
  const D = window.DATA, PD = window.PLAN_DETAIL, TK = window.TOOLKIT, CM = window.CITY_MEDIUMS, MOM = window.STORE_MOMENTS, SH = window.SHOPPERS;
  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => [...r.querySelectorAll(s)];
  const esc = s => String(s).replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
  const fmt = (n, d = 2) => Number(n).toLocaleString("en-IN", { maximumFractionDigits: d, minimumFractionDigits: 0 });
  const sign = n => (n > 0 ? "+" : n < 0 ? "−" : "") + fmt(Math.abs(n));
  const SVGNS = "http://www.w3.org/2000/svg";
  const STATE_COL = { Pune: "#3643BA", Gujarat: "#00A99D", MP: "#7B3FC4" };
  const STATE_NAME = { Pune: "Pune", Gujarat: "Gujarat", MP: "Madhya Pradesh" };

  const stores = D.stores.map(s => ({ ...s, budgetTotal: +(s.budget.reduce((a, b) => a + b, 0)).toFixed(2) }));
  stores.forEach(s => { s.intensity = s.budgetTotal / (s.challenge * 100) * 100; });
  let current = stores[0].id;

  /* ---------- toolkit ---------- */
  (() => {
    const filters = ["All", "Awareness", "Walk-ins", "Turnover", "Retention", "Engagement", "Direct revenue", "MarCom-run"];
    const seg = $("#toolkitFilter"), grid = $("#toolkitGrid");
    if (!seg) return;
    seg.innerHTML = filters.map((f, i) => `<button type="button" aria-pressed="${i === 0}" data-f="${f}">${f}</button>`).join("");
    const show = f => {
      const rows = TK.filter(t => f === "All" || (f === "MarCom-run" ? t.marcom : t.benefit.toLowerCase().includes(f.toLowerCase())));
      grid.innerHTML = rows.map(t => `<div class="tk"><h4>${esc(t.s)}</h4><p>${esc(t.gives)}</p>
        <div class="tk-tags"><span>${esc(t.word)}</span><span>${esc(t.benefit)}</span>${t.marcom ? '<span class="mc">MarCom</span>' : ""}</div></div>`).join("");
      $$("button", seg).forEach(b => b.setAttribute("aria-pressed", b.dataset.f === f));
    };
    $$("button", seg).forEach(b => b.addEventListener("click", () => show(b.dataset.f)));
    show("All");
  })();

  /* ---------- map ---------- */
  function drawMap() {
    const el = $("#storeMap");
    const W = Math.max(320, el.clientWidth - 40), H = Math.round(W * 0.92);
    const lon0 = 69.9, lon1 = 79.2, lat0 = 17.7, lat1 = 26.9;
    const k = Math.min(W / (lon1 - lon0), H / (lat1 - lat0));
    const X = lon => (lon - lon0) * k, Y = lat => (lat1 - lat) * k;
    const svg = document.createElementNS(SVGNS, "svg");
    svg.setAttribute("viewBox", `0 0 ${W} ${H}`);
    svg.setAttribute("role", "group");
    const add = (tag, attrs, parent = svg) => { const n = document.createElementNS(SVGNS, tag); for (const [a, v] of Object.entries(attrs)) n.setAttribute(a, v); parent.appendChild(n); return n; };
    const txt = (x, y, t, attrs = {}, parent = svg) => { const n = add("text", { x, y, "font-size": 12, fill: "#4A5378", ...attrs }, parent); n.textContent = t; return n; };

    // faint graticule
    for (let lon = 70; lon <= 79; lon += 1) add("line", { x1: X(lon), x2: X(lon), y1: 0, y2: H, stroke: "#EEF0FA" });
    for (let lat = 18; lat <= 26; lat += 1) add("line", { x1: 0, x2: W, y1: Y(lat), y2: Y(lat), stroke: "#EEF0FA" });
    const regionLabel = (lon, lat, t) => txt(X(lon), Y(lat), t, { "font-size": Math.max(16, W / 22), "font-weight": 900, "font-style": "italic", fill: "#E3E6F6", "font-family": "Inter" });
    regionLabel(70.2, 24.6, "Gujarat");
    regionLabel(75.6, 25.6, "Madhya Pradesh");
    regionLabel(73.2, 21.2, "Maharashtra");

    const r = s => 4 + Math.sqrt(s.challenge) * (W / 330);
    // Ahmedabad's two stores sit 7 km apart; nudge them so both dots read
    const nudge = { motera: [0.05, 0.22], nexus: [-0.2, -0.08] };
    const labelSide = { motera: "r", nexus: "l", baroda: "r", surat: "r", rajkot: "r", indore: "r", bhopal: "r", gwalior: "l" };

    const dot = (s, cx, cy, rad, label, side) => {
      const g = add("g", { class: `dot${s.id === current ? " on" : ""}`, tabindex: 0, role: "button", "aria-label": `${s.name}, ${s.city}`, "data-id": s.id,
        "data-tip": `<b>${esc(s.name)}</b><br>Challenge ${fmt(s.challenge)} Cr, ${s.growth >= 0 ? "+" : ""}${s.growth}%<br>Q4 budget ${fmt(s.budgetTotal)} L` });
      add("circle", { cx, cy, r: rad + 6, fill: STATE_COL[s.state], opacity: 0.15 }, g);
      add("circle", { class: "core", cx, cy, r: rad, fill: STATE_COL[s.state], stroke: "#fff", "stroke-width": 2 }, g);
      if (label) txt(side === "l" ? cx - rad - 6 : cx + rad + 6, cy + 4, label, { "text-anchor": side === "l" ? "end" : "start", "font-weight": 750, fill: "#0F1640" }, g);
      return g;
    };
    stores.filter(s => s.state !== "Pune").forEach(s => {
      const [dl, dt] = nudge[s.id] || [0, 0];
      dot(s, X(s.lon + dl), Y(s.lat + dt), r(s), s.name, labelSide[s.id]);
    });

    // Pune: one marker on the map, stores in a zoomed inset
    const pune = stores.filter(s => s.state === "Pune");
    const pLat = 18.53, pLon = 73.88, px = X(pLon), py = Y(pLat);
    const R = W * 0.2, icx = W - R - 58, icy = H - R - 26;
    add("line", { x1: px, y1: py, x2: icx - R * 0.95, y2: icy - R * 0.3, stroke: "#3643BA", "stroke-dasharray": "4 4", "stroke-width": 1.5 });
    add("circle", { cx: px, cy: py, r: 7, fill: "#3643BA", stroke: "#fff", "stroke-width": 2 });
    txt(px - 10, py + 4, "Pune", { "text-anchor": "end", "font-weight": 750, fill: "#0F1640" });
    add("circle", { cx: icx, cy: icy, r: R, fill: "#F5F6FD", stroke: "#3643BA", "stroke-width": 1.5 });
    txt(icx, icy - R + 20, "Pune city", { "text-anchor": "middle", "font-size": 11, "font-weight": 800, fill: "#3643BA" });
    const kz = (R * 1.45) / 0.3;
    pune.forEach(s => {
      const cx = icx + (s.lon - pLon) * kz, cy = icy - (s.lat - pLat) * kz;
      dot(s, cx, cy, Math.max(5, r(s) * 0.75), s.name, { wakad: "l", sgs: "l", wagholi: "r", amanora: "r", nibm: "r" }[s.id]);
    });
    txt(4, H - 6, "Positions are approximate. Dot size shows the Q4 challenge.", { "font-size": 11, fill: "#7A82A6" });

    el.innerHTML = "";
    el.appendChild(svg);
    $$(".dot", svg).forEach(g => {
      g.addEventListener("click", () => select(g.dataset.id, true));
      g.addEventListener("keydown", e => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); select(g.dataset.id, true); } });
    });
  }

  /* ---------- ranking ---------- */
  let sortKey = "overAmbition";
  const NOTES = {
    overAmbition: "Turnover each store must add beyond its own ambition in Q4 (Cr).",
    growth: "Challenge growth over Q4 2025.",
    budgetTotal: "Store marketing budget for October to December 2026 (L)."
  };
  function drawRank() {
    const list = [...stores].sort((a, b) => b[sortKey] - a[sortKey]);
    const vals = list.map(s => s[sortKey]);
    const max = Math.max(...vals, 0), min = Math.min(...vals, 0), span = max - min || 1;
    const zero = (-min / span) * 100;
    const unit = sortKey === "growth" ? "%" : sortKey === "budgetTotal" ? " L" : " Cr";
    $("#storeRank").innerHTML = list.map(s => {
      const v = s[sortKey], w = Math.abs(v) / span * 100, left = v >= 0 ? zero : zero - w;
      return `<button type="button" class="st-row" data-id="${s.id}" aria-pressed="${s.id === current}">
        <b>${esc(s.name)}</b>
        <span class="trk">${min < 0 ? `<span class="zero" style="left:${zero}%"></span>` : ""}<i style="left:${left}%;width:${Math.max(w, 0.8)}%;background:${v < 0 ? "#C03F9C" : STATE_COL[s.state]}"></i></span>
        <em>${sortKey === "growth" ? (v >= 0 ? "+" : "") + fmt(v, 1) + "%" : sign(v) + unit}</em></button>`;
    }).join("") ;
    $("#rankNote").textContent = NOTES[sortKey];
    $$("#storeRank .st-row").forEach(b => b.addEventListener("click", () => select(b.dataset.id, true)));
    if (!$(".st-legend")) {
      $(".st-rank").insertAdjacentHTML("beforeend", `<div class="st-legend">${Object.entries(STATE_COL).map(([k, c]) => `<span><i style="background:${c}"></i>${STATE_NAME[k]}</span>`).join("")}<span><i style="background:#C03F9C"></i>Challenge below ambition</span></div>`);
    }
  }
  $$("#rankSeg button").forEach(b => b.addEventListener("click", () => {
    sortKey = b.dataset.k;
    $$("#rankSeg button").forEach(x => x.setAttribute("aria-pressed", x === b));
    drawRank();
  }));

  /* ---------- per-store detail ---------- */
  // Pune store names and catchment areas as they appear in the Marcom calendar
  const ALIAS = {
    wakad: ["Wakad", "Hinjewadi", "Punawale"], wagholi: ["Wagholi", "Kharadi", "Nagar Road"], sgs: ["SGS", "Central Pune"],
    amanora: ["Amanora", "Magarpatta", "Hadapsar"], nibm: ["NIBM", "Undri"]
  };
  const ALL_KEYS = Object.values(ALIAS).flat();
  const Q1 = [0, 1, 2], MON = ["Jan", "Feb", "Mar"];
  // Lines from a Pune calendar row (Jan to Mar) that apply to this store
  function puneLines(field, id) {
    const out = [];
    Q1.forEach(i => {
      const cell = (PD[field] && PD[field][i]) || "";
      if (!cell) return;
      const parts = cell.split(/\n|;\s*/).map(x => x.trim()).filter(Boolean);
      const mentionsAny = ALL_KEYS.some(k => cell.toLowerCase().includes(k.toLowerCase()));
      parts.forEach(part => {
        const low = part.toLowerCase();
        const mine = ALIAS[id].some(k => low.includes(k.toLowerCase()));
        const all = /^all\b|all 5|all catchments|around all|all stores/i.test(part) || !mentionsAny;
        if (mine || all) {
          const clean = part.replace(new RegExp("^(" + ALIAS[id][0] + ")(/[^:]+)?:\\s*", "i"), "");
          out.push(`${MON[i]}: ${clean}`);
        }
      });
    });
    return out;
  }
  const li = arr => arr.length ? `<ul>${arr.map(x => `<li>${x}</li>`).join("")}</ul>` : "";

  function tierOf(s) {
    const rank = [...stores].sort((a, b) => b.overAmbition - a.overAmbition).findIndex(x => x.id === s.id) + 1;
    if (s.overAmbition >= 1.5) return { name: "Big push", rank,
      why: `${s.name} has to add ${fmt(s.overAmbition)} Cr beyond its ambition, number ${rank} of 13. It needs reach and footfall, not only conversion.`,
      picks: ["Influencers", s.city === "Pune" || s.city === "Ahmedabad" ? "Metro wrap" : "Hoardings", "Society activations", "Local tournaments and leagues at the store"] };
    if (s.overAmbition >= 0.3) return { name: "Steady build", rank,
      why: `${s.name} needs ${fmt(s.overAmbition)} Cr beyond ambition. Targeted, relevant reach works better here than mass media.`,
      picks: ["AOP hoarding at a sports partner academy", "Women-centric events", "School activation", "Referral and loyalty offers"] };
    return { name: "Protect and convert", rank,
      why: s.overAmbition < 0
        ? `${s.name}'s challenge (${fmt(s.challenge)} Cr) sits below its ambition (${fmt(s.ambition)} Cr). Keep spend lean and bring existing customers back.`
        : `${s.name} is close to its ambition (+${fmt(s.overAmbition)} Cr). Keep spend lean and bring existing customers back.`,
      picks: ["WhatsApp / CRM broadcasts to existing customers", "Google Business Profile and local search ads", "Free workshops and coaching", "In-store events"] };
  }

  function render() {
    const s = stores.find(x => x.id === current);
    const city = CM[s.city] || {};
    const tier = tierOf(s);
    const maxB = Math.max(...s.budget);
    const isPune = s.state === "Pune";
    const moments = [...new Set([...(MOM[s.state] || []), ...(MOM[s.city] || []), ...(MOM[s.name] || [])])];
    const aop = city.aop || {};
    const aopTotal = Object.values(aop).reduce((a, b) => a + b, 0);

    const what = `
      <div><h5>Q4 campaigns running in every store</h5>${li([
        "Winter Travel campaign, 15 Oct – 30 Jan",
        "Dussehra (16–20 Oct) and Diwali sale (31 Oct – 1 Nov)",
        "Gift a Sport for Diwali and Christmas",
        "Black Friday, 27–30 Nov",
        "Christmas sale, 19–31 Dec",
        "Kiprun launch and community run on 18 Oct",
        "Kids festival, 31 Oct – 2 Nov",
        "Sport of the month: running (Oct), climbing and trekking (Nov), trekking (Dec)"
      ])}</div>
      ${moments.length ? `<div><h5>Local moments for ${esc(s.city === s.name ? s.city : s.name + ", " + s.city)}</h5>${li(moments.map(esc))}</div>` : ""}
      ${isPune ? `<div><h5>Q1 2027 store activation (Pune calendar)</h5>${li(puneLines("storeActivation", s.id).map(esc))}</div>` : ""}`;

    const inside = [
      "Winter window with signage",
      "NH500 in-store challenge to lift ABV",
      "Sale implant across 3 touchpoints",
      "New arrivals alongside the sale",
      "In-store events and visual merchandising"
    ];
    if (s.mall) inside.push("Mall store: in-mall media to pull mall traffic into the store");
    const around = isPune
      ? ["academy", "gym", "school", "corporate", "society", "sportsEvent"].map(f => {
          const label = { academy: "Academies", gym: "Gyms", school: "Schools and colleges", corporate: "Corporates", society: "Residential societies", sportsEvent: "Sports community events" }[f];
          const rows = puneLines(f, s.id);
          return rows.length ? `<div><h5>${label}</h5>${li(rows.map(esc))}</div>` : "";
        }).join("")
      : `<div><h5>Area-of-practice tie-ups per store (${aopTotal})</h5>${li([
          `${aop.travel} travel agencies`, `${aop.gym} gyms and fitness studios`, `${aop.yoga} yoga studio${aop.yoga === 1 ? "" : "s"}`, `${aop.racket} racket academies`])}</div>`;
    const where = `<div><h5>Inside the store</h5>${li(inside.map(esc))}</div>${around}`;

    const chips = [];
    if (city.hoardings) chips.push(`${city.hoardings} hoarding${city.hoardings > 1 ? "s" : ""} in ${s.city}`);
    if (city.metro) chips.push("Metro QR walls");
    if (s.mall) chips.push("In-mall media");
    chips.push(`Influencers: ${city.influencers}`);
    chips.push(`${aopTotal} AOP tie-ups${["Pune", "Ahmedabad", "Indore"].includes(s.city) ? ", QR-wall pilot city" : ""}`);
    const marcom = ["Meta ads", "WhatsApp and CRM", "Google Business Profile"];
    const how = `
      <div><h5>Mediums in ${esc(s.city)}</h5><div class="sd-chips">${chips.map(c => `<span>${esc(c)}</span>`).join("")}${marcom.map(c => `<span class="mc">${c} · MarCom</span>`).join("")}</div></div>
      ${isPune ? `<div><h5>Pune OOH plan, Q1 2027</h5>${li(puneLines("ooh", s.id).map(esc))}</div>` : ""}
      ${isPune ? `<div><h5>Flyers, Q1 2027</h5>${li(puneLines("flyers", s.id).map(esc))}</div>` : ""}
      <div><h5>${esc(STATE_NAME[s.state])} Q4 money by line</h5>${li(topLines(s.state).map(esc))}</div>`;

    const toolkitPick = tier.picks.concat(s.mall ? ["Mall pop-ups"] : []).map(n => TK.find(t => t.s === n)).filter(Boolean);

    $("#storeDetail").innerHTML = `
      <div class="sd-head">
        <div>
          <h3>${esc(s.name)}</h3>
          <p>${esc(s.area)} · ${esc(STATE_NAME[s.state])}</p>
          <div class="sd-tags"><span class="tier">${tier.name}</span>${s.mall ? "<span>Mall store</span>" : ""}<span>Rank ${tier.rank} of 13 on turnover over ambition</span></div>
        </div>
        <div class="sd-months" aria-label="Q4 budget by month">${["Oct", "Nov", "Dec"].map((m, i) =>
          `<div><span>${fmt(s.budget[i])} L</span><i style="height:${s.budget[i] / maxB * 52}px" data-tip="<b>${s.name} · ${m} 2026</b><br>${fmt(s.budget[i])} L"></i>${m}</div>`).join("")}</div>
      </div>
      <dl class="sd-kpis">
        <div><dt>Q4 2025 turnover</dt><dd>${fmt(s.q425)} Cr</dd></div>
        <div><dt>Ambition</dt><dd>${fmt(s.ambition)} Cr</dd></div>
        <div><dt>Challenge</dt><dd>${fmt(s.challenge)} Cr</dd></div>
        <div><dt>Challenge growth</dt><dd class="pos">+${fmt(s.growth, 1)}%</dd></div>
        <div><dt>Over ambition</dt><dd class="${s.overAmbition < 0 ? "neg" : "pos"}">${sign(s.overAmbition)} Cr</dd></div>
        <div><dt>Q4 budget</dt><dd>${fmt(s.budgetTotal)} L</dd><dt>${fmt(s.intensity)}% of challenge TO</dt></div>
      </dl>
      <div class="sd-body">
        <div class="sd-col"><h4>What it runs</h4>${what}</div>
        <div class="sd-col"><h4>Where it plays</h4>${where}</div>
        <div class="sd-col"><h4>How it reaches people</h4>${how}</div>
      </div>
      <div class="sd-suggest">
        <div><h4>Suggested focus: ${tier.name.toLowerCase()}</h4><p>${esc(tier.why)} Women-centric events belong in every store: women are ${SH.women.share}% of the business and growing ${SH.women.growth}% a year, against ${SH.men.growth}% for men.</p></div>
        <ol>${toolkitPick.map(t => `<li><b>${esc(t.s)}</b><span>${esc(t.gives)}</span></li>`).join("")}</ol>
      </div>`;
  }

  /* ---------- state money mix ---------- */
  const CAT = [
    ["Digital (MarCom)", "#141A5C", /digital paid/i],
    ["Hoardings, OOH, HIPOP", "#3643BA", /hoarding/i],
    ["In-mall", "#8A92E0", /in mall/i],
    ["Influencers", "#2BFF88", /influencer/i],
    ["Store events", "#00A99D", /store event/i],
    ["In-store comms and flyers", "#00C4E1", /instore comm|flyers/i],
    ["Partnerships and free products", "#7B3FC4", /community|free product/i],
    ["PR", "#C03F9C", /press/i],
    ["Other", "#C9CEF0", /./]
  ];
  const catOf = line => CAT.findIndex(c => c[2].test(line));
  function stateCats(state) {
    const sums = CAT.map(() => 0);
    D.stateLines[state].lines.forEach(l => { sums[catOf(l.line)] += l.v.reduce((a, b) => a + b, 0); });
    return sums;
  }
  function topLines(state) {
    const sums = stateCats(state), tot = sums.reduce((a, b) => a + b, 0);
    return sums.map((v, i) => [CAT[i][0], v]).filter(x => x[1] > 0).sort((a, b) => b[1] - a[1]).slice(0, 4)
      .map(([n, v]) => `${n}: ${fmt(v, 1)} L (${fmt(v / tot * 100, 0)}%)`);
  }
  function drawMix() {
    const rows = ["Pune", "Gujarat", "MP"].map(st => {
      const sums = stateCats(st), tot = sums.reduce((a, b) => a + b, 0);
      const sheetTot = D.stateLines[st].total.reduce((a, b) => a + b, 0);
      return `<div class="mix-row"><b>${STATE_NAME[st]}<small>${fmt(sheetTot, 1)} L Q4 plan</small></b><div class="mix-bar">${sums.map((v, i) => v > 0
        ? `<i style="flex:${v} 1 0;background:${CAT[i][1]};color:${["#141A5C", "#3643BA", "#C03F9C", "#00A99D"].includes(CAT[i][1]) ? "#fff" : "#141A5C"}" data-tip="<b>${STATE_NAME[st]} · ${CAT[i][0]}</b><br>${fmt(v, 1)} L, ${fmt(v / tot * 100, 0)}% of the lines">${v / tot > 0.07 ? fmt(v / tot * 100, 0) + "%" : ""}</i>` : "").join("")}</div></div>`;
    }).join("");
    $("#stateMix").innerHTML = rows +
      `<div class="mix-legend">${CAT.map(c => `<span><i style="background:${c[1]}"></i>${c[0]}</span>`).join("")}</div>
       <p class="mix-note">Pune's line plan has no digital line because Pune's paid digital sits with MarCom. Pune's months follow its campaigns: October is Dussehra and festive, November is Winter Travel, December is the end-of-year sale. Shares are worked out from the line items in the sheet.</p>`;
  }

  /* ---------- wiring ---------- */
  function select(id, scroll) {
    current = id;
    $$("#storeMap .dot").forEach(g => g.classList.toggle("on", g.dataset.id === id));
    $$("#storeRank .st-row").forEach(b => b.setAttribute("aria-pressed", b.dataset.id === id));
    render();
    if (scroll) {
      const d = $("#storeDetail"), top = d.getBoundingClientRect().top;
      if (top > innerHeight * 0.75 || top < 0) d.scrollIntoView({ behavior: matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth", block: "start" });
    }
  }
  if (!$("#storeMap")) return;
  drawMap();
  drawRank();
  drawMix();
  render();
  let t;
  addEventListener("resize", () => { clearTimeout(t); t = setTimeout(drawMap, 150); });
})();
