/* 2027 plan page: Q1 and Q2, sport by sport. Data: PLANNER and PLAN_DETAIL (the 2027 planner), DATA.spend (2027 ad budget),
   AOP_PLAN (practice places by store and month, Nov 2026 - Oct 2027), SPORTS27 and SPORT_TO_2026 (sports27.js: in-store + online turnover by sport). */
(() => {
  const $ = (s, r = document) => r.querySelector(s), $$ = (s, r = document) => [...r.querySelectorAll(s)];
  const esc = s => String(s).replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
  const PL = window.PLANNER, PD = window.PLAN_DETAIL, D = window.DATA, AOP = window.AOP_PLAN || [];
  const SP = window.SPORTS27, TO = window.SPORT_TO_2026;
  // turnover in rupees for a sport id (or "all"), state and month; ch = "in" (in-store, offline), "on" (online) or both
  const tov = (id, st, m, ch) => { const r = TO[id]?.[st]; if (!r) return 0; return ch ? (r[ch][m] || 0) : (r.in[m] || 0) + (r.on[m] || 0); };
  const STATES = ["Pune", "Gujarat", "MP"], SC = { Pune: "var(--pune)", Gujarat: "var(--guj)", MP: "var(--mp)" };
  const MONTHS = PL.months, FULL = ["January", "February", "March", "April", "May", "June"];
  const Q = { q1: { months: [0, 1, 2], label: "Q1", long: "Q1: January to March", qs: ["q1"] },
              q2: { months: [3, 4, 5], label: "Q2", long: "Q2: April to June", qs: ["q2"] },
              h1: { months: [0, 1, 2, 3, 4, 5], label: "Q1 and Q2", long: "Q1 and Q2: January to June", qs: ["q1", "q2"] } };
  const qOf = m => (m < 3 ? "q1" : "q2");

  // money: lakh in, "₹x L" or "₹x Cr" out
  const L = v => v >= 100 ? `₹${(v / 100).toFixed(2)} Cr` : `₹${v >= 10 ? v.toFixed(1) : v.toFixed(2)} L`;
  const rupeesL = r => r / 1e5;

  // 2027 ad budget per state and month (lakh), AOPs per state and month (AOP_PLAN index 0 = Nov 2026, so Jan 2027 = 2)
  const spend = (st, m) => D.spend[st].y27[m];
  const aopMonth = (st, m) => AOP.filter(a => a.state === st).reduce((t, a) => t + (a.months[m + 2] || 0), 0);
  const qSpend = (st, q) => Q[q].months.reduce((t, m) => t + spend(st, m), 0);
  const qAop = (st, q) => Q[q].months.reduce((t, m) => t + aopMonth(st, m), 0);

  // a sport's budget in a quarter and state (lakh). Q1: from the Q1 playbook allocation (budget27.js); Q2: proposed share of the state's budget
  const ALLOC = {};
  const sb = (s, q, st) => q === "q1" ? ((ALLOC[st] = ALLOC[st] || window.BUDGET27.alloc(st)).sport[s.id] || 0) : (s.budget[q][st] || 0) * qSpend(st, q);

  // a sport's numbers for a view (q1, q2 or h1)
  function nums(s, view) {
    let base = 0, goal = 0, budget = 0, aops = 0, online = 0;
    const byState = {}, byStateOn = {};
    Q[view].qs.forEach(q => {
      STATES.forEach(st => {
        const b = Q[q].months.reduce((t, m) => t + tov(s.id, st, m), 0) / 1e5;
        const o = Q[q].months.reduce((t, m) => t + tov(s.id, st, m, "on"), 0) / 1e5;
        base += b; online += o; goal += b * (1 + s.growth[q]);
        byState[st] = (byState[st] || 0) + b;
        byStateOn[st] = (byStateOn[st] || 0) + o;
        budget += sb(s, q, st);
        aops += s.aop[q][st] || 0;
      });
    });
    const all = Q[view].months.reduce((t, m) => t + STATES.reduce((a, st) => a + tov("all", st, m), 0), 0) / 1e5;
    return { base, online, offline: base - online, share: base / all, goal, growth: goal / base - 1, budget, aops, byState, byStateOn };
  }

  let view = "q1", month = 0;

  /* ---------- hero numbers ---------- */
  function kpis() {
    const ms = Q[view].months;
    const total = STATES.reduce((t, st) => t + ms.reduce((a, m) => a + spend(st, m), 0), 0);
    const sportBudget = SP.sports.reduce((t, s) => t + nums(s, view).budget, 0);
    const aops = STATES.reduce((t, st) => t + ms.reduce((a, m) => a + aopMonth(st, m), 0), 0);
    const base = SP.sports.reduce((t, s) => t + nums(s, view).base, 0), goal = SP.sports.reduce((t, s) => t + nums(s, view).goal, 0);
    $("#y27Kpis").innerHTML = [
      [L(total), `West ad budget, ${Q[view].label} 2027`],
      [L(sportBudget), `of it led by the 7 sports (${Math.round(sportBudget / total * 100)}%)`],
      [aops, "AOPs (practice places) planned"],
      [L(goal), `turnover goal for the 7 sports, in-store + online, +${Math.round((goal / base - 1) * 100)}% on 2026`]
    ].map(([b, s]) => `<div><b>${b}</b><span>${s}</span></div>`).join("");
  }

  /* ---------- calendar: the 2027 planner format, cut to the quarter, with a lane per sport ---------- */
  function calendar() {
    const ms = Q[view].months, a0 = ms[0], a1 = ms[ms.length - 1], n = ms.length;
    const grid = $("#y27Grid");
    grid.style.setProperty("--n", n);
    const west = m => STATES.reduce((t, st) => t + spend(st, m), 0), maxW = Math.max(...ms.map(west));
    let html = `<div class="pl-corner">Bar under each month: West ad budget, ${Q[view].label}</div>`;
    html += ms.map(i => `<button type="button" class="pl-month ${qOf(i)}" data-m="${i}" aria-pressed="${i === month}">
        <b>${MONTHS[i]}</b><small>${PD.seasonality[i].toLowerCase().replace(/^./, c => c.toUpperCase())}<br>${PD.weather[i] || "&nbsp;"}</small><i class="pl-spend" style="--w:${west(i) / maxW * 100}%"></i><em class="y27-mm">${L(west(i))}, ${STATES.reduce((t, st) => t + aopMonth(st, i), 0)} AOPs</em></button>`).join("");
    PL.lanes.forEach(lane => {
      const items = lane.items.filter(it => it.b >= a0 && it.a <= a1);
      if (!items.length) return;
      const rows = [];
      const chips = items.map(it => {
        const a = Math.max(it.a, a0) - a0, b = Math.min(it.b, a1) - a0;
        let r = rows.findIndex(end => end < a);
        if (r < 0) { rows.push(-1); r = rows.length - 1; }
        rows[r] = b;
        const on = month >= it.a && month <= it.b;
        return `<span class="pl-chip ${it.k} ${on ? "" : "dim"}" style="grid-column:${a + 1} / ${b + 2};grid-row:${r + 1}">${it.star ? "★ " : ""}${it.t.split("\n").map(esc).join("<br>")}</span>`;
      }).join("");
      html += `<div class="pl-lane-name">${lane.name}</div><div class="pl-lane">${chips}</div>`;
    });
    html += `<div class="pl-lane-name">Sport of the month (Pune)</div><div class="pl-sport">${ms.map(i => `<span class="${i === month ? "on" : ""}">${D.puneSportOfMonth[i]}</span>`).join("")}</div>`;
    html += `<div class="y27-band">Our 7 sports</div>`;
    SP.sports.forEach(s => {
      html += `<div class="pl-lane-name y27-lane-name" style="--c:${s.color}"><i></i><span>${s.name}<small>${s.where.join(", ")}</small></span></div><div class="pl-lane y27-lane">${ms.map((m, k) =>
        `<span class="pl-chip y27-chip ${m === month ? "" : "dim"}" style="grid-column:${k + 1};--c:${s.color}">${s.months[m].map(esc).join("<br>")}</span>`).join("")}</div>`;
    });
    grid.innerHTML = html;
    $$(".pl-month", grid).forEach(b => b.addEventListener("click", () => { month = +b.dataset.m; calendar(); monthPanel(); }));
  }

  /* ---------- the month, sport by sport ---------- */
  function monthPanel() {
    const m = month, st = SP.months[m];
    const budget = STATES.map(s => `<span style="--c:${SC[s]}"><b>${L(spend(s, m))}</b>${s}</span>`).join("");
    const aops = STATES.map(s => `<span style="--c:${SC[s]}"><b>${aopMonth(s, m)}</b>${s}</span>`).join("");
    $("#y27Month").innerHTML = `<div class="y27-mhead"><h3 class="display-s">${FULL[m]} 2027<span class="lt">: ${esc(st.title)}</span></h3>
        <div class="y27-mnav"><button type="button" data-d="-1" aria-label="Previous month">‹</button><button type="button" data-d="1" aria-label="Next month">›</button></div></div>
      <div class="y27-mnums"><div><h4>Ad budget</h4><div class="y27-pills">${budget}</div></div><div><h4>AOPs</h4><div class="y27-pills">${aops}</div></div></div>
      <ul class="y27-mmoves">${st.moves.map(x => `<li>${esc(x)}</li>`).join("")}</ul>
      <div class="y27-msports">${SP.sports.map(s => `<div style="--c:${s.color}"><b>${s.name}</b>${s.months[m].map(esc).join("<br>")}</div>`).join("")}</div>`;
    $$(".y27-mnav button").forEach(b => b.addEventListener("click", () => {
      const ms = Q[view].months, k = ms.indexOf(month);
      month = ms[(k + +b.dataset.d + ms.length) % ms.length]; calendar(); monthPanel();
      $(`.y27-mnav button[data-d="${b.dataset.d}"]`)?.focus();
    }));
  }

  /* ---------- sports at a glance and the sport cards ---------- */
  function sports() {
    const rows = SP.sports.map(s => ({ s, n: nums(s, view) }));
    const maxGoal = Math.max(...rows.map(r => r.n.goal));
    const tot = rows.reduce((t, { n }) => ({ base: t.base + n.base, online: t.online + n.online, share: t.share + n.share, goal: t.goal + n.goal, budget: t.budget + n.budget, aops: t.aops + n.aops }), { base: 0, online: 0, share: 0, goal: 0, budget: 0, aops: 0 });
    $("#y27Glance").innerHTML = `<table class="y27-table"><thead><tr><th>Sport</th><th>Where</th><th>Turnover, ${Q[view].label} 2026 (in-store + online), and the 2027 goal</th><th>Share of all turnover</th><th>In-store / online</th><th>Growth</th><th>Budget</th><th>AOPs</th></tr></thead><tbody>
      ${rows.map(({ s, n }) => `<tr><td><b class="y27-dot" style="--c:${s.color}">${s.name}</b></td><td>${s.where.join(", ")}</td>
        <td><div class="y27-bar"><i style="--w:${n.base / maxGoal * 100}%;--c:${s.color}"></i><i class="g" style="--w:${n.goal / maxGoal * 100}%;--c:${s.color}"></i></div><span class="y27-bv">${L(n.base)} → <b>${L(n.goal)}</b></span></td>
        <td><b>${(n.share * 100).toFixed(1)}%</b></td><td><span class="y27-bv">${L(n.offline)} / ${L(n.online)}<br>${Math.round(n.offline / n.base * 100)}% / ${Math.round(n.online / n.base * 100)}%</span></td>
        <td><b>+${Math.round(n.growth * 100)}%</b></td><td>${L(n.budget)}</td><td>${n.aops}</td></tr>`).join("")}
      <tr class="tot"><td><b>7 sports</b></td><td></td><td><span class="y27-bv">${L(tot.base)} → <b>${L(tot.goal)}</b></span></td><td><b>${(tot.share * 100).toFixed(1)}%</b></td><td><span class="y27-bv">${L(tot.base - tot.online)} / ${L(tot.online)}</span></td><td><b>+${Math.round((tot.goal / tot.base - 1) * 100)}%</b></td><td><b>${L(tot.budget)}</b></td><td><b>${tot.aops}</b></td></tr>
      </tbody></table><p class="y27-key"><i class="a"></i>2026, same months <i class="b"></i>2027 goal. Share: of all West turnover in those months (every sport). In-store is offline, online is out of store.</p>`;

    $("#y27Cards").innerHTML = rows.map(({ s, n }) => {
      const maxSt = Math.max(...STATES.map(st => n.byState[st] || 0)) || 1;
      const series = Array.from({ length: 10 }, (_, i) => ({ v: STATES.reduce((t, st) => t + tov(s.id, st, i), 0), o: STATES.reduce((t, st) => t + tov(s.id, st, i, "on"), 0) }));
      const maxM = Math.max(...series.map(x => x.v));
      const spark = `<div class="y27-spark" aria-label="Turnover by month, January to October 2026, in-store and online">${series.map((x, i) => `<span class="${Q[view].months.includes(i) ? "on" : ""}" style="--h:${x.v / maxM * 100}%;--c:${s.color};--o:${x.o / x.v * 100}%" title="${MONTHS[i]} 2026: ${L(rupeesL(x.v))} (in-store ${L(rupeesL(x.v - x.o))}, online ${L(rupeesL(x.o))})"><em>${MONTHS[i][0]}</em></span>`).join("")}</div>`;
      const moves = Q[view].qs.map(q => `<div><h4>${q.toUpperCase()}: what we do</h4><ul>${s.moves[q].map(x => `<li>${esc(x)}</li>`).join("")}</ul></div>`).join("");
      const perState = STATES.filter(st => Q[view].qs.some(q => s.aop[q][st] || sb(s, q, st))).map(st => {
        const b = Q[view].qs.reduce((t, q) => t + sb(s, q, st), 0), a = Q[view].qs.reduce((t, q) => t + (s.aop[q][st] || 0), 0);
        return `<span style="--c:${SC[st]}"><b>${st}</b>${L(b)}, ${a} AOPs</span>`;
      }).join("");
      return `<article class="y27-card" style="--c:${s.color};--tx:${s.ink}" id="sport-${s.id}">
        <header><h3>${s.name}</h3><span>${s.where.join(", ")}</span><p>${esc(s.idea)}</p></header>
        <div class="y27-cnums"><div><b>${L(n.base)}</b><span>${Q[view].label} 2026, in-store + online (${(n.share * 100).toFixed(1)}% of all turnover)</span></div><div><b>${L(n.goal)}</b><span>2027 goal, +${Math.round(n.growth * 100)}%</span></div><div><b>${L(n.budget)}</b><span>budget</span></div><div><b>${n.aops}</b><span>AOPs: ${esc(s.aopKind)}</span></div></div>
        <div class="y27-cmid"><div><h4>2026 turnover by state, ${Q[view].label}: in-store (offline) and online</h4>${STATES.map(st => `<div class="y27-st y27-st2"><span>${st}</span><i style="--w:${(n.byState[st] || 0) / maxSt * 100}%;--c:${SC[st]};--o:${(n.byStateOn[st] || 0) / (n.byState[st] || 1) * 100}%" title="In-store ${L((n.byState[st] || 0) - (n.byStateOn[st] || 0))}, online ${L(n.byStateOn[st] || 0)}"></i><b>${L(n.byState[st] || 0)}</b></div>`).join("")}
            <p class="y27-chkey"><i class="a" style="--c:${s.color}"></i>In-store <i class="b" style="--c:${s.color}"></i>Online: ${Math.round(n.online / n.base * 100)}%</p></div>
          <div><h4>2026 turnover, month by month (in-store + online)</h4>${spark}</div></div>
        <div class="y27-split">${perState}</div>
        <div class="y27-moves ${Q[view].qs.length > 1 ? "two" : ""}">${moves}</div>
      </article>`;
    }).join("");
  }

  /* ---------- strategies, month by month ---------- */
  function strategies() {
    const ms = Q[view].months;
    $("#y27Goals").innerHTML = Q[view].qs.map(q => q === "q1"
      ? `<div class="y27-goal"><h4>Q1 goals (Q1 2027 plan)</h4><div><span><b>12.1%</b>turnover growth</span><span><b>₹8.3 Cr</b>incremental turnover</span><span><b>3.7 L</b>bills, +10%</span><span><b>33%</b>conversion</span></div><p>Traffic: customers +10%. Retention: returning customers +15%. Conversion: bills +10%.</p></div>`
      : `<div class="y27-goal q2"><h4>Q2 goals</h4><p>The Q2 turnover, bills and conversion targets are not in our files yet. The sport goals below add up to <b>${L(SP.sports.reduce((t, s) => t + nums(s, "q2").goal, 0))}</b> of turnover (in-store + online) for the 7 sports.</p></div>`).join("");
    $("#y27Strat").innerHTML = ms.map(m => {
      const st = SP.months[m];
      const budget = STATES.reduce((t, s) => t + spend(s, m), 0), aops = STATES.reduce((t, s) => t + aopMonth(s, m), 0);
      return `<article class="y27-scol"><span class="oct-when">${FULL[m]}</span><h3>${esc(st.title)}</h3>
        <div class="y27-snums"><span><b>${L(budget)}</b>ad budget</span><span><b>${aops}</b>AOPs</span><span><b>${esc(D.puneSportOfMonth[m])}</b>Pune sport of the month</span></div>
        <ul>${st.moves.map(x => `<li>${esc(x)}</li>`).join("")}</ul>
        <div class="y27-ssports">${SP.sports.map(s => `<p style="--c:${s.color}"><b>${s.name}</b>${s.months[m].map(esc).join("; ")}</p>`).join("")}</div></article>`;
    }).join("");
  }

  /* ---------- the 7 sports: turnover and share of turnover, month by month (2026, in-store + online) ---------- */
  let tosSt = "West", tosCh = "";
  const ORDER = ["mountain", "fitness", "running", "swimming", "cycling", "cricket", "pickleball"];
  const ALLM = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  const sts = () => tosSt === "West" ? STATES : [tosSt];
  const tm = (id, m) => sts().reduce((t, st) => t + tov(id, st, m, tosCh || undefined), 0);
  const cr = r => r >= 1e7 ? `₹${(r / 1e7).toFixed(2)} Cr` : `₹${(r / 1e5).toFixed(1)} L`;
  function lineRow(label, vals, fmt, cls, peakNote) {
    const ok = vals.filter(v => v != null), max = Math.max(...ok), min = Math.min(...ok), pk = vals.indexOf(max);
    const y = v => 12 + (1 - (v - min) / ((max - min) || 1)) * 70; // % from top
    const pts = vals.map((v, i) => v == null ? null : `${(i + 0.5) / 12 * 1000},${y(v) * 1.2}`).filter(Boolean).join(" ");
    return `<div class="tos-lab">${label}</div><div class="tos-line ${cls}"><svg viewBox="0 0 1000 120" preserveAspectRatio="none" aria-hidden="true"><polyline points="${pts}" vector-effect="non-scaling-stroke"/></svg>
      ${vals.map((v, i) => v == null ? "" : `<span class="tos-pt ${i === pk ? "pk" : ""} ${Q[view].months.includes(i) ? "inq" : ""}" style="left:${(i + 0.5) / 12 * 100}%;top:${y(v)}%"><i></i><b>${fmt(v)}</b>${i === pk && peakNote ? `<em>${peakNote}</em>` : ""}</span>`).join("")}</div>`;
  }
  function toShare() {
    const ms = [...Array(12).keys()], SPI = Object.fromEntries(SP.sports.map(s => [s.id, s]));
    const tot = ms.map(m => m < 11 ? tm("all", m) : null);
    const val = ms.map(m => m < 11 ? Object.fromEntries(ORDER.map(id => [id, tm(id, m)])) : null);
    const spendM = ms.map(m => sts().reduce((t, st) => t + (D.spend[st].y27[m] || 0), 0));
    const chName = tosCh === "in" ? "in-store (offline)" : tosCh === "on" ? "online" : "in-store + online";
    let h = `<div class="tos-head"><h3 class="display-s">What the 7 sports sell<span class="lt">, month by month</span></h3>
      <div class="tos-ctl"><div class="seg" role="group" aria-label="State">${["West", ...STATES].map(s => `<button type="button" data-ts="${s}" aria-pressed="${s === tosSt}">${s}</button>`).join("")}</div>
      <div class="seg" role="group" aria-label="Channel">${[["", "In-store + online"], ["in", "In-store (offline)"], ["on", "Online"]].map(([k, n]) => `<button type="button" data-tc="${k}" aria-pressed="${k === tosCh}">${n}</button>`).join("")}</div></div></div>
      <p class="tos-lede">2026 turnover, ${chName}, ${tosSt === "West" ? "all West stores" : tosSt}. Each column is one month; the colours are each sport's share of everything we sold that month, the grey is all other sports. Months of ${Q[view].label} are highlighted. 2027 follows this rhythm; 2027 targets by sport are not in our files.</p>
      <div class="tos-key">${ORDER.map(id => `<span><i style="--c:${SPI[id].color}"></i>${SPI[id].name}</span>`).join("")}<span><i style="--c:#C9CDD9"></i>Other sports</span></div>
      <div class="tos-scroll"><div class="tos-grid">
      <div class="tos-lab"></div>${ALLM.map((m, i) => `<div class="tos-mh ${Q[view].months.includes(i) ? "inq" : ""}">${m}${i === 10 ? "<small>to 8 Nov</small>" : ""}</div>`).join("")}`;
    h += lineRow(`Turnover, all sports<small>2026, ${chName}</small>`, tot, cr, "to", "Money time");
    h += lineRow(`Ad budget<small>2027 plan</small>`, spendM, v => L(v), "ad");
    h += `<div class="tos-lab">Share of turnover<small>7 sports + other</small></div>${ms.map(m => {
      if (m > 10) return `<div class="tos-col na"><span>No 2026 data yet</span></div>`;
      const t = tot[m], seven = ORDER.reduce((a, id) => a + val[m][id], 0);
      const segs = ORDER.map(id => ({ id, v: val[m][id], c: SPI[id].color, n: SPI[id].name, ink: SPI[id].ink })).concat([{ id: "oth", v: t - seven, c: "#C9CDD9", n: "Other sports", ink: "var(--ink)" }]);
      return `<div class="tos-col ${Q[view].months.includes(m) ? "inq" : ""}"><b class="tos-sum">${Math.round(seven / t * 100)}%</b><div class="tos-stack">${segs.map(x => { const p = x.v / t * 100;
        return `<span style="height:${p}%;--c:${x.c};--tx:${x.ink}" title="${ALLM[m]} 2026, ${x.n}: ${cr(x.v)}, ${p.toFixed(1)}% of turnover">${p >= 5 ? Math.round(p) + "%" : ""}</span>`; }).join("")}</div></div>`;
    }).join("")}`;
    h += ORDER.map(id => `<div class="tos-lab tos-sp"><i style="--c:${SPI[id].color}"></i>${SPI[id].name}</div>${ms.map(m => m > 10 ? `<div class="tos-c na">-</div>` : `<div class="tos-c ${Q[view].months.includes(m) ? "inq" : ""}">${cr(val[m][id])}<small>${(val[m][id] / tot[m] * 100).toFixed(1)}%</small></div>`).join("")}`).join("");
    h += `<div class="tos-lab tos-sp tot"><b>7 sports</b></div>${ms.map(m => { if (m > 10) return `<div class="tos-c na tot">-</div>`; const s7 = ORDER.reduce((a, id) => a + val[m][id], 0); return `<div class="tos-c tot ${Q[view].months.includes(m) ? "inq" : ""}"><b>${cr(s7)}</b><small>${(s7 / tot[m] * 100).toFixed(1)}%</small></div>`; }).join("")}`;
    h += `<div class="tos-lab tos-sp"><b>All sports</b></div>${ms.map(m => `<div class="tos-c ${m > 10 ? "na" : ""}">${m > 10 ? "-" : `<b>${cr(tot[m])}</b>`}</div>`).join("")}`;
    h += `</div></div><p class="tos-note">Source: Tableau sport-wise YTD 2026 (1 Jan to 8 Nov 2026). In-store is what we sell in the store (offline); online is everything out of store: decathlon.in, marketplaces, B2B, quick commerce. Mountain is hiking, trekking and climbing and camping; fitness is outfit and equipment; cycling is sport bikes, commuting and repairs (kids' bikes and skates are in "other"); pickleball is the padel, pickleball and beach tennis line. Ad budget: 2027 plan by month (lakh), drawn as its own line, not on the turnover scale.</p>`;
    $("#y27Tos").innerHTML = h;
    $$("#y27Tos [data-ts]").forEach(b => b.addEventListener("click", () => { tosSt = b.dataset.ts; toShare(); }));
    $$("#y27Tos [data-tc]").forEach(b => b.addEventListener("click", () => { tosCh = b.dataset.tc; toShare(); }));
  }

  function render() {
    const lab = Q[view].label;
    $("#y27CalTitle").innerHTML = `${view === "h1" ? "January to June" : lab + " 2027"}<span class="lt">, month by month</span>`;
    $("#y27SportsTitle").innerHTML = `The sports<span class="lt">, ${lab}</span>`;
    $("#y27StratTitle").innerHTML = `Strategies<span class="lt">, ${lab} month by month</span>`;
    $("#y27Strat").style.setProperty("--n", Q[view].months.length);
    $$("#y27Seg button").forEach(b => b.setAttribute("aria-pressed", b.dataset.q === view));
    kpis(); calendar(); monthPanel(); toShare(); sports(); strategies();
    window.Y27VIEW = view; document.dispatchEvent(new CustomEvent("y27view", { detail: view }));
  }

  $("#y27Key").innerHTML = SP.sports.map(s => `<a href="#sport-${s.id}" style="--c:${s.color}">${s.name}</a>`).join("");
  $$("#y27Seg button").forEach(b => b.addEventListener("click", () => {
    view = b.dataset.q;
    if (!Q[view].months.includes(month)) month = Q[view].months[0];
    render();
  }));
  const fromHash = (location.hash.match(/^#(q1|q2|h1)$/) || [])[1];
  if (fromHash) { view = fromHash; month = Q[view].months[0]; }
  render();
})();
