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
      ${paid.length ? `<ul class="fr-ls">${paid.map(l => `<li><div><b>${esc(l.n)}</b><i class="wo-lb" style="--w:${l.t / max * 100}%;--c:${d.c}"></i></div><span>${R(l.t)}<small>${pct(l.t, wt)} of water</small></span></li>`).join("")}</ul>`
        : `<p class="wo-none">No water spend in ${label}: the sheet starts in February. The pools and coaches are signed this month.</p>`}
      ${tbd.length ? `<p class="wo-tbd">Not in the total yet: ${tbd.map(l => esc(l.n.replace(/ \(.*\)$/, ""))).join(" and ")}. Both come out of the MarCom digital budget: amount to agree with MarCom.</p>` : ""}
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
  const FUN = () => window.WATER_FUNNEL || {};
  const ftag = f => f ? `<em class="fn fn-${f.toLowerCase()}">${f}</em>` : "";
  // revenue: 2026 turnover of the same month (every sport, store + online; SPORT_SHARE_2026, lakh) and the 2027 goal at +15.5%
  // (the Mission 2027 West omni goal, our proposal: no monthly 2027 goal by state in our files)
  const GROW = 0.155;
  const rev26 = key => { const rows = window.SPORT_SHARE_2026 && window.SPORT_SHARE_2026.st[key]; return MON.map((_, i) => rows ? sum(rows.map(r => r[i])) * 1e5 : 0); };
  const chartCard = (name, c, ad, w, r26) => {
    const r27 = r26.map(v => v * (1 + GROW)), maxR = Math.max(1, ...r27), stk = ad.map((a, i) => Math.max(a, w[i])), maxS = Math.max(1, ...stk);
    const rT = sum(r27), aT = sum(ad), wT = sum(w);
    return `<article class="wo-ch" style="--c:${c}"><header><b>${esc(name)}</b><span>January to June 2027</span></header>
      <div class="wo-ch-k"><div><b>${R(rT)}</b><small>revenue goal (${R(sum(r26))} in 2026)</small></div><div><b>${R(aT)}</b><small>ad budget, ${(aT / rT * 100).toFixed(1)}% of revenue</small></div><div><b>${R(wT)}</b><small>of it on water, ${pct(wT, aT)}</small></div></div>
      <div class="wo-ch-two">
        <figure><figcaption>Revenue goal, by month</figcaption><div class="wo-cols">${MON.map((m, i) => `<div class="wo-col" title="${FULL[i]} 2027 goal ${R(r27[i])} (2026: ${R(r26[i])})"><div class="wo-plot"><b>${R(r27[i]).replace("₹", "")}</b><i class="rv" style="--h:${(r27[i] / maxR).toFixed(3)}"></i></div><span>${m}</span></div>`).join("")}</div></figure>
        <figure><figcaption>Spend, by month</figcaption><div class="wo-cols">${MON.map((m, i) => { const rest = Math.max(0, ad[i] - w[i]); return `<div class="wo-col${w[i] > ad[i] ? " over" : ""}" title="${FULL[i]}: ad budget ${R(ad[i])}, water ${R(w[i])}${w[i] > ad[i] ? ", water is more than the month's ad budget" : `, the rest ${R(rest)}`}"><div class="wo-plot"><b>${R(stk[i]).replace("₹", "")}</b><div class="stk" style="--h:${(stk[i] / maxS).toFixed(3)}">${w[i] ? `<i class="wt" style="flex:${w[i]} 1 0"></i>` : ""}${rest ? `<i class="rs" style="flex:${rest} 1 0"></i>` : ""}</div></div><span>${m}</span></div>`; }).join("")}</div>
          <p class="wo-key"><span><i class="wt"></i>Water</span><span><i class="rs"></i>Rest of the ad budget</span>${w.some((x, i) => x > ad[i]) ? '<span class="ov">Red figure: water is more than the month\'s ad budget</span>' : ""}</p></figure>
      </div></article>`;
  };
  // the water budget by funnel stage, with the KPIs and the proposed targets (user, 22 Nov 2026)
  const STAGES = [
    ["Awareness", "Local reach, video views", "", "Hoardings, influencers, Instagram boosts, city pages"],
    ["Acquisition", "Registrations, cost per lead", "3,000 qualified registrations", "Meta ads; February: free coaching for every child (proposal)"],
    ["Participation", "Actual pool attendance", "1,500 first swimming experiences", "Events (night swims proposed), pool partnerships"],
    ["Retention", "Second and fourth swim", "500 repeat swimmers / community members", "WhatsApp pushes and community"],
    ["Conversion", "Swim category sales", "300 attributable product purchases", "Coach kits with the 8% affiliate link"]
  ];
  const funnel = (states, mi) => {
    const W = window.waterBudgetBy ? window.waterBudgetBy() : {}, F = FUN();
    const months = mi == null ? [0, 1, 2, 3, 4] : mi >= 1 ? [mi - 1] : [];
    const by = Object.fromEntries(STAGES.map(([s]) => [s, 0]));
    states.forEach(st => Object.entries((W[st] || {}).ch || {}).forEach(([k, x]) => { if (F[k]) by[F[k]] += sum(months.map(i => x.v[i])); }));
    const all = sum(Object.values(by)), max = Math.max(1, ...Object.values(by));
    return `<div class="wo-fun"><h3>The water budget by funnel stage<small>${states.length > 1 ? "West" : esc(states[0])}, ${mi == null ? "February to June" : FULL[mi]}. Every budget line carries its stage tag</small></h3>
      <div class="sb-wrap"><table class="wo-ft"><thead><tr><th>Stage</th><th>Water budget</th><th>What we track</th><th>Proposed target</th><th>Lines</th></tr></thead><tbody>
      ${STAGES.map(([s, kpi, tgt, lines]) => `<tr><th>${ftag(s)}</th><td class="m"><b>${by[s] ? R(by[s]) : (s === "Retention" ? "to agree" : "-")}</b><i style="--w:${by[s] / max * 100}%"></i><small>${by[s] && all ? pct(by[s], all) : ""}</small></td><td>${kpi}</td><td>${tgt || "-"}</td><td>${lines}</td></tr>`).join("")}
      </tbody></table></div>
      <p class="wo-note">Targets: proposed in the swim deck you shared, not historical benchmarks: validate against pool capacity, footfall, conversion and the category baseline. Retention (WhatsApp) comes out of the MarCom digital budget: amount to agree.</p></div>`;
  };
  const sheet = (d, mi) => {
    const rows = window.waterBudgetSheet ? window.waterBudgetSheet(d.st) : [];
    const W = window.waterBudgetBy ? window.waterBudgetBy()[d.st].ch : {};
    const six = v5 => [0, ...v5];
    const cls = i => mi === i ? ' class="on"' : "";
    const cells = (v, sub, neg) => MON.map((_, i) => `<td${cls(i)}>${v[i] ? `<span class="${neg && v[i] < 0 ? "neg" : ""}">${R(v[i])}</span>` : '<span class="z">-</span>'}${sub && sub[i] && v[i] ? `<small>${esc(sub[i])}</small>` : ""}</td>`).join("") + `<td class="t">${sum(v) ? `<span class="${neg && sum(v) < 0 ? "neg" : ""}">${R(sum(v))}</span>` : "-"}</td>`;
    // water rows of one kind, city by city (city-wide lines) or store by store (store lines)
    const pick = key => {
      const out = [];
      rows.forEach(c => {
        c.lines.filter(l => l[3] === key).forEach(l => out.push({ name: c.city + (c.ooc ? " (out of catchment)" : ""), v: six(l[1]), sub: l[2] ? ["", ...l[2]] : null }));
        c.stores.forEach(x => x.parts.filter(p => p[3] === key).forEach(p => out.push({ name: x.name + " store", v: six(p[1]), sub: p[2] ? MON.map((_, i) => i === 1 ? p[2] : "") : null })));
      });
      return out.filter(r => sum(r.v));
    };
    const pct = i => (SPLIT[i] || [])[1] || 0;
    const share = p => d.ad.map(a => a * p / 100);
    // AOPs: the 2027 AOP plan, store by store (AOPs a month × cost per AOP); paid from the "hoardings, OOH, HIPOP and AOP" 30%
    const aopRows = (window.AOP_PLAN || []).filter(r => r.state === d.st).map(r => ({ name: r.store, v: MON.map((_, i) => r.months[i] * r.cost), sub: MON.map((_, i) => `${r.months[i]} AOPs × ${R(r.cost)}`) }));
    const aop = MON.map((_, i) => sum(aopRows.map(r => r.v[i])));
    const LINES = [
      { n: "Digital paid (MarCom)", f: "Acquisition", note: `${pct(0)}% of the ad budget`, b: share(pct(0)), water: [["Meta ads", "meta"], ["Instagram boosts", "boost"]], marcom: true },
      { n: "Hoardings", f: "Awareness", note: `${pct(1)}% of the ad budget, minus the AOPs`, b: share(pct(1)).map((v, i) => v - aop[i]), water: [["3D or digital hoardings", "hoard"]] },
      { n: "AOPs: partnerships with pools, gyms, academies", f: "Participation", note: `the rest of the same ${pct(1)}%: the 2027 AOP plan`, b: aop, detail: aopRows, water: [["Pool partnerships", "aop"]] },
      { n: "In-store communication", f: "Conversion", note: `${pct(2)}%`, b: share(pct(2)), water: [] },
      { n: "In-mall", f: "Awareness", note: `${pct(3)}%`, b: share(pct(3)), water: [] },
      { n: "Store events", f: "Participation", note: `${pct(4)}%`, b: share(pct(4)), water: [["Events", "events"]] },
      { n: "Influencers", f: "Awareness", note: `${pct(5)}%`, b: share(pct(5)), water: [["Influencers", "infl"]] },
      { n: "Free products and IC", f: "Conversion", note: `${pct(6)}%`, b: share(pct(6)), water: [["Coach kits", "coach"]] },
      { n: "Flyers", f: "Conversion", note: `${pct(7)}%: checklist flyers for water need no budget`, b: share(pct(7)), water: [] }
    ];
    let b = "", wAll = MON.map(() => 0);
    LINES.forEach((L, li) => {
      b += `<tr class="line"><th>${li + 1}. ${esc(L.n)}${ftag(L.f)}<small>${esc(L.note)}</small></th>${cells(L.b)}</tr>`;
      if (L.detail) b += L.detail.map(r => `<tr class="det"><th>${esc(r.name)}<small>AOP plan</small></th>${cells(r.v, r.sub)}</tr>`).join("");
      const lw = MON.map(() => 0);
      L.water.forEach(([n, key]) => {
        const rs = pick(key); if (!rs.length) return;
        const t = MON.map((_, i) => sum(rs.map(r => r.v[i])));
        t.forEach((v, i) => { lw[i] += v; });
        b += `<tr class="wh"><th>Water: ${esc(n)}${ftag(FUN()[key])}<small>${L.marcom ? "paid from this MarCom digital budget, no separate money" : "from this line"}</small></th>${cells(t)}</tr>`;
        b += rs.map(r => `<tr class="wr"><th>${esc(r.name)}</th>${cells(r.v, r.sub)}</tr>`).join("");
      });
      if (L.marcom) {
        const wa = W.wapush ? six(W.wapush.v) : MON.map(() => 0), cp = W.city ? six(W.city.v) : MON.map(() => 0);
        [["WhatsApp pushes", wa], ["Local city pages", cp]].forEach(([n, v]) => {
          const fk = n === "WhatsApp pushes" ? "wapush" : "city";
          if (sum(v)) { v.forEach((x, i) => { lw[i] += x; }); b += `<tr class="wh"><th>Water: ${n}${ftag(FUN()[fk])}<small>paid from this MarCom digital budget</small></th>${cells(v)}</tr>`; }
          else b += `<tr class="wh tbd"><th>Water: ${n}${ftag(FUN()[fk])}<small>paid from this MarCom digital budget: amount to agree with MarCom</small></th>${MON.map((_, i) => `<td${cls(i)}><span class="z">-</span></td>`).join("")}<td class="t">to agree</td></tr>`;
        });
      }
      if (sum(lw)) b += `<tr class="left"><th>Left on this line after water</th>${cells(L.b.map((v, i) => v - lw[i]), null, true)}</tr>`;
      lw.forEach((v, i) => { wAll[i] += v; });
    });
    b += `<tr class="tot"><th>Ad budget</th>${cells(d.ad)}</tr>`;
    b += `<tr class="tot w"><th>Water, all lines</th>${cells(wAll)}</tr>`;
    b += `<tr class="left"><th>Ad budget left for everything else<small>ad budget minus water</small></th>${cells(d.ad.map((a, i) => a - wAll[i]), null, true)}</tr>`;
    return `<details class="wo-dd"${VIEW().state === d.st ? " open" : ""}><summary><b>${d.st}: where we invest, month by month</b><span>The Excel view: every line of the ad budget, AOPs apart from hoardings, and what water takes from each line, city by city and store by store</span><i class="nd-chev" aria-hidden="true"></i></summary>
      <div class="sb-wrap frz"><table class="wo-xl" style="--c:${d.c}"><thead><tr><th>${d.st}</th>${MON.map((m, i) => `<th${cls(i)}>${m}</th>`).join("")}<th>Jan to Jun</th></tr></thead><tbody>${b}</tbody></table></div>
      <p class="wo-note">Lines from the 2027 ad budget sheet (ultimate_data_sheet_1 splits every month the same way). AOPs are the 2027 AOP plan (AOPs a month × cost per AOP, store by store), taken out of the sheet's "hoardings and AOP" line (30%), so hoardings show on their own. Meta ads, Instagram boosts, WhatsApp pushes and city pages come out of the MarCom digital budget: no separate money. Checklist flyers need no budget. Water pools and coach kits are paid by the February deadline. Tags: the funnel stage each line works on. Red: water is more than the line.</p></details>`;
  };

  const glance = (D, mi, state) => {
    const row = (name, c, ad, w) => `<tr${c ? ` style="--c:${c}"` : ` class="all"`}><th>${name}</th>${MON.map((_, i) => `<td class="${mi === i ? "on" : ""}${w[i] > ad[i] ? " over" : ""}"><b>${R(ad[i])}</b><small>${w[i] ? `water ${R(w[i])} · ${pct(w[i], ad[i])}` : "water -"}</small></td>`).join("")}<td class="t"><b>${R(sum(ad))}</b><small>water ${R(sum(w))} · ${pct(sum(w), sum(ad))}</small></td></tr>`;
    const tAd = MON.map((_, i) => sum(D.map(d => d.ad[i]))), tW = MON.map((_, i) => sum(D.map(d => d.w[i])));
    const cards = state === "all" ? [["West", "#10135A", tAd, tW, rev26("West")], ...D.map(d => [d.st, d.c, d.ad, d.w, rev26(d.st)])] : D.filter(d => d.st === state).map(d => [d.st, d.c, d.ad, d.w, rev26(d.st)]);
    return `<div class="panel wo-glance"><h3>${state === "all" ? "The West" : esc(state)} at a glance<small>Revenue goal and spend, January to June 2027, then the ad budget by month and the water part of it. Open the dropdown under a state for every line, city and store</small></h3>
      <div class="wo-ch-grid${cards.length === 1 ? " one" : ""}">${cards.map(c => chartCard(...c)).join("")}</div>
      <p class="wo-note">Revenue goal = 2026 turnover of the same month (every sport, store and online, Tableau file to 8 Nov) + 15.5%, the Mission 2027 West omni goal (our proposal: there is no monthly 2027 goal by state in our files). Spend = the 2027 ad budget; water sits inside it (red month: water is more than the whole ad budget).</p>
      <div class="sb-wrap wo-gwrap"><table class="wo-gt"><thead><tr><th></th>${MON.map((m, i) => `<th class="${mi === i ? "on" : ""}">${m}</th>`).join("")}<th>Jan to Jun</th></tr></thead>
      <tbody>${D.filter(d => state === "all" || d.st === state).map(d => row(d.st, d.c, d.ad, d.w) + `<tr class="wo-ddr"><td colspan="8">${sheet(d, mi)}</td></tr>`).join("")}${state === "all" ? row("West", "", tAd, tW) : ""}</tbody></table></div>
      <p class="wo-note">Ad budget = the 2027 plan on the West plan and 2027 plan pages (ultimate_data_sheet_1, every line: digital, hoardings, in-store, in-mall, events, influencers, free products, flyers). Water = the water sports sheet (WATER_SPORTS.xlsx) as edited in the budget below. Red: water is bigger than the whole month's ad budget.</p>
      ${funnel(state === "all" ? D.map(d => d.st) : [state], mi)}</div>`;
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
