// Water 2027, the overall budget: each state's 2027 ad budget, January to June (DATA.spend y27, the same
// numbers as the West plan and the 2027 plan, from ultimate_data_sheet_1), against what the water sports
// sheet spends (window.waterBudgetBy, from waterbudget.js). Follows the page's month and state buttons.
(() => {
  const box = document.getElementById("woApp");
  if (!box || !window.DATA || !window.DATA.spend) return;
  const SP = window.DATA.spend;
  const esc = s => String(s ?? "").replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
  const sum = a => a.reduce((x, y) => x + y, 0);
  // rupees: under ₹1 L as K, then L, then Cr
  const R = n => { if (n < 0) return "-" + R(-n); const a = Math.abs(n); if (a < 1000) return "₹" + Math.round(n).toLocaleString("en-IN"); if (a < 1e5) return "₹" + +(n / 1e3).toFixed(1) + "K"; if (a >= 1e7) return "₹" + (n / 1e7).toFixed(2) + " Cr"; return "₹" + +(n / 1e5).toFixed(2) + " L"; };
  const pct = (a, b) => b ? Math.round(a / b * 100) + "%" : "-";
  const MON = ["Jan", "Feb", "Mar", "Apr", "May", "Jun"], FULL = ["January", "February", "March", "April", "May", "June"];
  const KEY = ["jan", "feb", "mar", "apr", "may", "jun"];
  const STS = [
    { st: "Pune", c: "#3643BA", img: "assets/img/water/water-women-pool.jpg", alt: "Three women in cover-up swimwear sitting at a pool", cap: "Women Who Swim", line: "Six stores, 30 partner pools and the West's biggest water city." },
    { st: "Gujarat", c: "#00A99D", img: "assets/img/water/water-snorkel.jpg", alt: "Snorkeller with a full-face mask", cap: "Easybreath snorkel masks", line: "Ahmedabad, Baroda, Surat and Rajkot: the most hoardings and influencers of the three." },
    { st: "MP", c: "#7B3FC4", img: "assets/img/water/water-diver.jpg", alt: "A diver under water among orange fish", cap: "Under the water", line: "Indore, Bhopal and Gwalior: no water hoardings, the money goes on influencers, Meta and pools." }
  ];
  // what each month is about (the water sheet's campaigns)
  const THEME = (window.WATERBUDGET_CAMPAIGNS || []).reduce((o, c) => { o[c.m] = c.t; return o; }, {});
  const VIEW = () => window.W27_VIEW || { state: "all", view: "h1" };

  const data = () => {
    const W = window.waterBudgetBy ? window.waterBudgetBy() : null;
    return STS.map(s => {
      const ad = SP[s.st].y27.slice(0, 6).map(l => l * 1e5), ad26 = SP[s.st].y26.slice(0, 6).map(l => l * 1e5);
      const w = W && W[s.st] ? [0, ...W[s.st].mo] : [0, 0, 0, 0, 0, 0];
      const lines = W && W[s.st] ? Object.entries(W[s.st].ch).map(([k, x]) => ({ k, n: x.n, v: [0, ...x.v] })) : [];
      return { ...s, ad, ad26, w, lines };
    });
  };

  const monthTile = (d, i, sel) => {
    const a = d.ad[i], w = d.w[i], over = w > a, rest = a - w;
    const share = a ? Math.min(100, w / a * 100) : 0;
    return `<button type="button" class="wo-m${sel ? " on" : ""}${over ? " over" : ""}" data-v="${KEY[i]}" aria-label="Show ${FULL[i]}">
      <header><b>${MON[i]}</b><span>${esc(THEME[MON[i]] || "")}</span></header>
      <div class="wo-big">${R(a)}<small>ad budget</small></div>
      <div class="wo-bar" aria-hidden="true"><i style="--w:${share}%"></i></div>
      ${w ? `<p class="wo-w"><b>Water ${R(w)}</b><span>${pct(w, a)} of the month</span></p>
        <p class="wo-rest">${over ? `<em>${R(w - a)} more than the whole month's ad budget</em>` : `Everything else ${R(rest)}`}</p>`
        : `<p class="wo-w"><b>Water: nothing yet</b></p><p class="wo-rest">Pools and coaches get signed now, paid by the February deadline</p>`}
    </button>`;
  };

  const linesPanel = (d, mi) => {
    const months = mi == null ? [1, 2, 3, 4, 5] : [mi];
    const label = mi == null ? "February to June" : FULL[mi];
    const vals = d.lines.map(l => ({ ...l, t: sum(months.map(i => l.v[i])) }));
    const paid = vals.filter(l => l.t).sort((a, b) => b.t - a.t), tbd = vals.filter(l => !l.t && (l.k === "wapush" || l.k === "city"));
    const wt = sum(paid.map(l => l.t)), at = sum(months.map(i => d.ad[i]));
    const max = Math.max(1, ...paid.map(l => l.t));
    return `<div class="panel fr-lines wo-lines"><h3>${d.st}'s water money, line by line<small>${label}</small></h3>
      ${paid.length ? `<ul class="fr-ls">${paid.map(l => `<li><div><b>${esc(l.n.replace(" (budget with MarCom)", ""))}</b><i class="wo-lb" style="--w:${l.t / max * 100}%;--c:${d.c}"></i></div><span>${R(l.t)}<small>${pct(l.t, wt)} of water</small></span></li>`).join("")}</ul>`
        : `<p class="wo-none">No water spend in ${label}: the sheet starts in February. The pools and coaches are signed this month.</p>`}
      ${tbd.length ? `<p class="wo-tbd">Not in the total yet: ${tbd.map(l => esc(l.n.replace(" (budget with MarCom)", ""))).join(" and ")}, budget to agree with MarCom.</p>` : ""}
      <div class="fr-tot"><span>Water</span><b>${R(wt)}</b><small>${at ? `${pct(wt, at)} of ${d.st}'s ${label} ad budget (${R(at)})` : ""}</small></div>
    </div>`;
  };

  const stateBlock = (d, mi, n, of) => {
    const adH = sum(d.ad), wH = sum(d.w), ad26 = sum(d.ad26), adFJ = sum(d.ad.slice(1));
    const overs = d.w.map((w, i) => w > d.ad[i] ? i : -1).filter(i => i >= 0);
    return `<article class="wo-st" style="--c:${d.c}">
      <div class="wo-hero">
        <div class="wo-head">
          <div class="fr-tag wo-tag"><em>${n} of ${of}</em><b>${d.st}</b><span>Jan to Jun 2027</span><span>Ad budget ${R(adH)}</span><span>Water ${R(wH)}, ${pct(wH, adH)}</span></div>
          <h3 class="display wo-title">${d.st}<span class="lt">: January to June</span></h3>
          <p class="wo-lede">${esc(d.line)} The 2027 ad budget for these six months is <b>${R(adH)}</b> (${R(ad26)} spent in the same months of 2026, ${ad26 ? (adH >= ad26 ? "+" : "") + Math.round((adH / ad26 - 1) * 100) + "%" : "-"}). The water sports sheet spends <b>${R(wH)}</b> from February to June: ${pct(wH, adFJ)} of those five months.</p>
          ${overs.length ? `<p class="wo-alert"><b>Check:</b> in ${overs.map(i => FULL[i]).join(", ")}, water alone is more than ${d.st}'s whole ad budget for the month (${overs.map(i => `${MON[i]}: water ${R(d.w[i])} against ${R(d.ad[i])}`).join("; ")}). Is the water sheet inside the 2027 ad budget, or on top of it?</p>` : ""}
        </div>
        <figure class="wo-photo"><img src="${d.img}" alt="${esc(d.alt)}" loading="lazy"><figcaption>${esc(d.cap)}</figcaption></figure>
      </div>
      <div class="wo-grid">
        <div class="wo-months">${MON.map((_, i) => monthTile(d, i, mi === i)).join("")}</div>
        ${linesPanel(d, mi)}
      </div>
    </article>`;
  };

  // the Excel view under each state's row: the ad budget by line, then the water money city by city and store by store
  const SPLIT = SP.split27 || [];
  const sheet = (d, mi) => {
    const rows = window.waterBudgetSheet ? window.waterBudgetSheet(d.st) : [];
    const six = v5 => [0, ...v5];
    const cls = i => mi === i ? ' class="on"' : "";
    const cells = (v, sub, neg) => MON.map((_, i) => `<td${cls(i)}>${v[i] ? `<span class="${neg && v[i] < 0 ? "neg" : ""}">${R(v[i])}</span>` : '<span class="z">-</span>'}${sub && sub[i] && v[i] ? `<small>${esc(sub[i])}</small>` : ""}</td>`).join("") + `<td class="t">${sum(v) ? `<span class="${neg && sum(v) < 0 ? "neg" : ""}">${R(sum(v))}</span>` : "-"}</td>`;
    const head = t => `<tr class="grp"><th colspan="8">${t}</th></tr>`;
    const wTot = d.w, left = d.ad.map((a, i) => a - wTot[i]);
    let b = head(`1. ${d.st}'s 2027 ad budget, by line <small>the sheet splits every month the same way</small>`);
    b += SPLIT.map(([n, p]) => `<tr class="ln"><th>${esc(n)}<small>${p}%</small></th>${cells(d.ad.map(a => a * p / 100))}</tr>`).join("");
    b += `<tr class="tot"><th>Ad budget</th>${cells(d.ad)}</tr>`;
    b += head(`2. Water sports, city by city and store by store <small>no water spend in January; pools, flyers and coach kits are paid by the February deadline</small>`);
    rows.forEach(c => {
      b += `<tr class="city"><th>${esc(c.city)}<small>${c.ooc ? "out of catchment" : "city total"}</small></th>${cells(six(c.v))}</tr>`;
      c.lines.forEach(([n, v, sub]) => { b += `<tr class="ln"><th>${esc(n)}<small>city-wide</small></th>${cells(six(v), sub ? ["", ...sub] : null)}</tr>`; });
      c.stores.forEach(x => { b += `<tr class="store"><th>${esc(x.name)} store<small>${x.parts.map(p => p[2] || p[0].toLowerCase()).join(", ") || "nothing in the sheet"}</small></th>${cells(six(x.v))}</tr>`; });
    });
    b += `<tr class="tot"><th>Water total</th>${cells(wTot)}</tr>`;
    b += `<tr class="left"><th>Ad budget left for everything else<small>ad budget minus water</small></th>${cells(left, null, true)}</tr>`;
    return `<details class="wo-dd"${VIEW().state === d.st ? " open" : ""}><summary><b>${d.st}: where we invest, month by month</b><span>The Excel view: the ad budget by line, then the water money for every city and store</span><i class="nd-chev" aria-hidden="true"></i></summary>
      <div class="sb-wrap"><table class="wo-xl" style="--c:${d.c}"><thead><tr><th>${d.st}</th>${MON.map((m, i) => `<th${cls(i)}>${m}</th>`).join("")}<th>Jan to Jun</th></tr></thead><tbody>${b}</tbody></table></div></details>`;
  };

  const glance = (D, mi, state) => {
    const row = (name, c, ad, w) => `<tr${c ? ` style="--c:${c}"` : ` class="all"`}><th>${name}</th>${MON.map((_, i) => `<td class="${mi === i ? "on" : ""}${w[i] > ad[i] ? " over" : ""}"><b>${R(ad[i])}</b><small>${w[i] ? `water ${R(w[i])} · ${pct(w[i], ad[i])}` : "water -"}</small></td>`).join("")}<td class="t"><b>${R(sum(ad))}</b><small>water ${R(sum(w))} · ${pct(sum(w), sum(ad))}</small></td></tr>`;
    const tAd = MON.map((_, i) => sum(D.map(d => d.ad[i]))), tW = MON.map((_, i) => sum(D.map(d => d.w[i])));
    return `<div class="panel wo-glance"><h3>${state === "all" ? "The West" : esc(state)} at a glance<small>2027 ad budget by month, and the water sports part of it. Open the dropdown under a state for every line, city and store</small></h3>
      <div class="sb-wrap"><table class="wo-gt"><thead><tr><th></th>${MON.map((m, i) => `<th class="${mi === i ? "on" : ""}">${m}</th>`).join("")}<th>Jan to Jun</th></tr></thead>
      <tbody>${D.filter(d => state === "all" || d.st === state).map(d => row(d.st, d.c, d.ad, d.w) + `<tr class="wo-ddr"><td colspan="8">${sheet(d, mi)}</td></tr>`).join("")}${state === "all" ? row("West", "", tAd, tW) : ""}</tbody></table></div>
      <p class="wo-note">Ad budget = the 2027 plan on the West plan and 2027 plan pages (ultimate_data_sheet_1, every line: digital, hoardings, in-store, in-mall, events, influencers, free products, flyers). Water = the water sports sheet (WATER_SPORTS.xlsx) as edited in the budget below. Red: water is bigger than the whole month's ad budget.</p></div>`;
  };

  const render = () => {
    const { state, view } = VIEW(), mi = view === "h1" ? null : KEY.indexOf(view);
    const D = data(), show = D.filter(d => state === "all" || d.st === state);
    const open = [...box.querySelectorAll(".wo-dd")].map(x => x.open);
    box.innerHTML = glance(D, mi, state) + show.map((d, j) => stateBlock(d, mi, state === "all" ? j + 1 : D.indexOf(d) + 1, 3)).join("");
    const dds = [...box.querySelectorAll(".wo-dd")];
    if (open.length === dds.length) dds.forEach((x, i) => { x.open = open[i]; });
    box.querySelectorAll(".wo-m").forEach(b => b.addEventListener("click", () => {
      const v = mi != null && KEY[mi] === b.dataset.v ? "h1" : b.dataset.v;
      const btn = document.querySelector(`#w27Seg button[data-q="${v}"]`);
      if (btn) { const y = box.getBoundingClientRect().top; btn.click(); scrollBy(0, box.getBoundingClientRect().top - y); }
    }));
  };
  window.addEventListener("w27:view", render);
  window.addEventListener("wb:change", render);
  render();
})();
