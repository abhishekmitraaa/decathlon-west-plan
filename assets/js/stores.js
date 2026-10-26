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

  /* ---------- scoreboard: Q4 challenge and budget by store ---------- */
  function drawBoard() {
    const f2 = n => Number(n).toLocaleString("en-IN", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
    const maxCh = Math.max(...stores.map(s => s.challenge)), maxB = Math.max(...stores.map(s => s.budgetTotal));
    const sum = (list, k) => list.reduce((a, s) => a + s[k], 0);
    const sumB = (list, i) => list.reduce((a, s) => a + s.budget[i], 0);
    const g = (q, c) => `${c >= q ? "+" : "−"}${fmt(Math.abs(c - q) / q * 100, 1)}%`;
    const totRow = (label, list, cls) => {
      const q = sum(list, "q425"), c = sum(list, "challenge"), bt = sum(list, "budgetTotal");
      return `<tr class="${cls}"><th scope="row">${label}</th><td>${f2(q)}</td><td>${f2(sum(list, "ambition"))}</td><td><b>${f2(c)}</b></td><td>${g(q, c)}</td>
        <td class="sep">${f2(sumB(list, 0))}</td><td>${f2(sumB(list, 1))}</td><td>${f2(sumB(list, 2))}</td><td><b>${f2(bt)}</b></td><td>${fmt(bt / (c * 100) * 100)}%</td></tr>`;
    };
    const body = ["Pune", "Gujarat", "MP"].map(st => {
      const list = stores.filter(s => s.state === st);
      return `<tr class="sb-st" style="--c:${STATE_COL[st]}"><th colspan="10" scope="rowgroup">${STATE_NAME[st]}</th></tr>` + list.map(s => `<tr data-id="${s.id}" tabindex="0" aria-pressed="${s.id === current}">
        <th scope="row">${esc(s.name)}</th><td>${f2(s.q425)}</td><td>${f2(s.ambition)}</td>
        <td class="bar" style="--w:${s.challenge / maxCh * 100}%;--c:${STATE_COL[st]}"><b>${f2(s.challenge)}</b></td><td>${s.growth >= 0 ? "+" : "−"}${fmt(Math.abs(s.growth), 1)}%</td>
        <td class="sep">${f2(s.budget[0])}</td><td>${f2(s.budget[1])}</td><td>${f2(s.budget[2])}</td>
        <td class="bar" style="--w:${s.budgetTotal / maxB * 100}%;--c:${STATE_COL[st]}"><b>${f2(s.budgetTotal)}</b></td><td>${fmt(s.budgetTotal / (s.challenge * 100) * 100)}%</td></tr>`).join("") +
        totRow(`${STATE_NAME[st]} stores`, list, "sb-sub");
    }).join("");
    $("#sbStores").innerHTML = `<table class="sb-table"><thead>
      <tr class="sb-grp"><th rowspan="2" scope="col">Store</th><th colspan="4" scope="colgroup">Turnover challenge, Cr</th><th colspan="5" scope="colgroup" class="sep">Marketing budget, lakh</th></tr>
      <tr><th scope="col">Q4 2025</th><th scope="col">Ambition</th><th scope="col">Q4 2026 challenge</th><th scope="col">Growth</th><th scope="col" class="sep">Oct</th><th scope="col">Nov</th><th scope="col">Dec</th><th scope="col">Q4 total</th><th scope="col">% of challenge</th></tr></thead>
      <tbody>${body}${totRow("13 stores", stores, "sb-total")}</tbody></table>
      <p class="foot">With digital and wholesale added, the state challenges are Pune ${f2(D.stateTO["PUNE TOTAL"].ch)} Cr, Gujarat ${f2(D.stateTO["GJ TOTAL"].ch)} Cr and MP ${f2(D.stateTO["MP TOTAL"].ch)} Cr: 178.77 Cr for the cluster.</p>`;
    $$("#sbStores tr[data-id]").forEach(r => {
      r.addEventListener("click", () => select(r.dataset.id, true));
      r.addEventListener("keydown", e => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); select(r.dataset.id, true); } });
    });

    // line summary across the three state plans, in the same categories as the state money mix
    const ST = ["Pune", "Gujarat", "MP"], by = Object.fromEntries(ST.map(st => [st, stateCats(st)]));
    const tot = CAT.map((c, i) => ST.reduce((a, st) => a + by[st][i], 0)), all = tot.reduce((a, b) => a + b, 0);
    const order = tot.map((v, i) => i).filter(i => tot[i] > 0).sort((a, b) => (CAT[a][0] === "Other") - (CAT[b][0] === "Other") || tot[b] - tot[a]);
    const maxT = Math.max(...tot), stTot = ST.map(st => by[st].reduce((a, b) => a + b, 0));
    $("#sbLines").innerHTML = `<table class="sb-table sb-lines"><thead><tr><th scope="col">Line</th>${ST.map(st => `<th scope="col" style="color:${STATE_COL[st]}">${STATE_NAME[st]}</th>`).join("")}<th scope="col">Total</th><th scope="col" class="share">Share of budget</th></tr></thead><tbody>
      ${order.map(i => `<tr><th scope="row"><i class="sw" style="background:${CAT[i][1]}"></i>${CAT[i][0]}</th>${ST.map(st => `<td>${by[st][i] ? fmt(by[st][i], 1) : "–"}</td>`).join("")}<td><b>${fmt(tot[i], 1)}</b></td>
        <td class="share"><div class="sh-cell"><span class="sh-bar"><i style="width:${tot[i] / maxT * 100}%;background:${CAT[i][1]}"></i></span><b>${fmt(tot[i] / all * 100, 1)}%</b></div></td></tr>`).join("")}
      <tr class="sb-total"><th scope="row">Total</th>${stTot.map(v => `<td><b>${fmt(v, 1)}</b></td>`).join("")}<td><b>${fmt(all, 1)}</b></td><td class="share"><b>100%</b></td></tr></tbody></table>
      <p class="foot">The store budgets above add up to ${fmt(sum(stores, "budgetTotal"), 1)} L. The state line plans add up to ${fmt(all, 1)} L because they also carry spend that sits with the state, such as digital paid to MarCom. Gujarat's and MP's line items add up to more than their own stated totals (${fmt(D.stateLines.Gujarat.total.reduce((a, b) => a + b, 0), 1)} L and ${fmt(D.stateLines.MP.total.reduce((a, b) => a + b, 0), 1)} L). "Other" is Pune's internal consumption, Gujarat's other online channels and MP's general advertising.</p>`;
  }

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
    const light = ["#8A92E0", "#2BFF88", "#C9CEF0"];
    const rows = ["Pune", "Gujarat", "MP"].map(st => {
      const sums = stateCats(st), tot = sums.reduce((a, b) => a + b, 0);
      const sheetTot = D.stateLines[st].total.reduce((a, b) => a + b, 0);
      const parts = sums.map((v, i) => ({ v, i })).filter(x => x.v > 0).sort((a, b) => b.v - a.v);
      return `<div class="mix-state">
        <div class="mix-row"><b>${STATE_NAME[st]}<small>${fmt(sheetTot, 1)} L Q4 plan</small></b>
          <div class="mix-bar">${parts.map(({ v, i }) => `<i style="flex:${v} 1 0;background:${CAT[i][1]};color:${light.includes(CAT[i][1]) ? "#10135A" : "#fff"}">${v / tot > 0.06 ? Math.round(v / tot * 100) + "%" : ""}</i>`).join("")}</div></div>
        <ul class="mix-detail">${parts.map(({ v, i }) => `<li><i style="background:${CAT[i][1]}"></i><span>${CAT[i][0]}</span><b>${fmt(v, 1)} L</b><em>${Math.round(v / tot * 100)}%</em></li>`).join("")}</ul>
      </div>`;
    }).join("");
    $("#stateMix").innerHTML = rows +
      `<p class="mix-note">Pune's line plan has no digital line because Pune's paid digital sits with MarCom. Pune's months follow its campaigns: October is Dussehra and festive, November is Winter Travel, December is the end-of-year sale. Lakh figures are October to December added up from the sheet's line items; Gujarat's and MP's line items add up to more than their stated totals.</p>`;
  }

  /* ---------- wiring ---------- */
  function select(id, scroll) {
    current = id;
    $$("#sbStores tr[data-id]").forEach(b => b.setAttribute("aria-pressed", b.dataset.id === id));
    render();
    if (scroll) {
      const d = $("#storeDetail"), top = d.getBoundingClientRect().top;
      if (top > innerHeight * 0.75 || top < 0) d.scrollIntoView({ behavior: matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth", block: "start" });
    }
  }
  if (!$("#storeDetail")) return;
  if ($("#sbStores")) drawBoard();
  drawMix();
  render();
})();
