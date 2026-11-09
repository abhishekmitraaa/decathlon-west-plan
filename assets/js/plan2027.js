/* 2027 plan page: Q1 and Q2, sport by sport. Data: PLANNER and PLAN_DETAIL (the 2027 planner), DATA.spend (2027 ad budget),
   AOP_PLAN (practice places by store and month, Nov 2026 - Oct 2027), SPORTS27 and SPORT_TOV_2026 (sports27.js). */
(() => {
  const $ = (s, r = document) => r.querySelector(s), $$ = (s, r = document) => [...r.querySelectorAll(s)];
  const esc = s => String(s).replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
  const PL = window.PLANNER, PD = window.PLAN_DETAIL, D = window.DATA, AOP = window.AOP_PLAN || [];
  const SP = window.SPORTS27, TOV = window.SPORT_TOV_2026;
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

  // a sport's numbers for a view (q1, q2 or h1)
  function nums(s, view) {
    let base = 0, goal = 0, budget = 0, aops = 0;
    const byState = {};
    Q[view].qs.forEach(q => {
      STATES.forEach(st => {
        const b = Q[q].months.reduce((t, m) => t + (TOV[s.id][st]?.[m] || 0), 0) / 1e5;
        base += b; goal += b * (1 + s.growth[q]);
        byState[st] = (byState[st] || 0) + b;
        budget += (s.budget[q][st] || 0) * qSpend(st, q);
        aops += s.aop[q][st] || 0;
      });
    });
    return { base, goal, growth: goal / base - 1, budget, aops, byState };
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
      [L(goal), `online turnover goal for the 7 sports, +${Math.round((goal / base - 1) * 100)}% on 2026`]
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
    const tot = rows.reduce((t, { n }) => ({ base: t.base + n.base, goal: t.goal + n.goal, budget: t.budget + n.budget, aops: t.aops + n.aops }), { base: 0, goal: 0, budget: 0, aops: 0 });
    $("#y27Glance").innerHTML = `<table class="y27-table"><thead><tr><th>Sport</th><th>Where</th><th>Online turnover, ${Q[view].label} 2026, and the 2027 goal</th><th>Growth</th><th>Budget</th><th>AOPs</th></tr></thead><tbody>
      ${rows.map(({ s, n }) => `<tr><td><b class="y27-dot" style="--c:${s.color}">${s.name}</b></td><td>${s.where.join(", ")}</td>
        <td><div class="y27-bar"><i style="--w:${n.base / maxGoal * 100}%;--c:${s.color}"></i><i class="g" style="--w:${n.goal / maxGoal * 100}%;--c:${s.color}"></i></div><span class="y27-bv">${L(n.base)} → <b>${L(n.goal)}</b></span></td>
        <td><b>+${Math.round(n.growth * 100)}%</b></td><td>${L(n.budget)}</td><td>${n.aops}</td></tr>`).join("")}
      <tr class="tot"><td><b>7 sports</b></td><td></td><td><span class="y27-bv">${L(tot.base)} → <b>${L(tot.goal)}</b></span></td><td><b>+${Math.round((tot.goal / tot.base - 1) * 100)}%</b></td><td><b>${L(tot.budget)}</b></td><td><b>${tot.aops}</b></td></tr>
      </tbody></table><p class="y27-key"><i class="a"></i>2026, same months <i class="b"></i>2027 goal</p>`;

    $("#y27Cards").innerHTML = rows.map(({ s, n }) => {
      const maxSt = Math.max(...STATES.map(st => n.byState[st] || 0)) || 1;
      const series = STATES.reduce((acc, st) => acc.map((v, i) => v + (TOV[s.id][st]?.[i] || 0)), Array(10).fill(0));
      const maxM = Math.max(...series);
      const spark = `<div class="y27-spark" aria-label="Online turnover by month, January to October 2026">${series.map((v, i) => `<span class="${Q[view].months.includes(i) ? "on" : ""}" style="--h:${v / maxM * 100}%;--c:${s.color}" title="${MONTHS[i]} 2026: ${L(rupeesL(v))}"><em>${MONTHS[i][0]}</em></span>`).join("")}</div>`;
      const moves = Q[view].qs.map(q => `<div><h4>${q.toUpperCase()}: what we do</h4><ul>${s.moves[q].map(x => `<li>${esc(x)}</li>`).join("")}</ul></div>`).join("");
      const perState = STATES.filter(st => Q[view].qs.some(q => s.aop[q][st] || s.budget[q][st])).map(st => {
        const b = Q[view].qs.reduce((t, q) => t + (s.budget[q][st] || 0) * qSpend(st, q), 0), a = Q[view].qs.reduce((t, q) => t + (s.aop[q][st] || 0), 0);
        return `<span style="--c:${SC[st]}"><b>${st}</b>${L(b)}, ${a} AOPs</span>`;
      }).join("");
      return `<article class="y27-card" style="--c:${s.color};--tx:${s.ink}" id="sport-${s.id}">
        <header><h3>${s.name}</h3><span>${s.where.join(", ")}</span><p>${esc(s.idea)}</p></header>
        <div class="y27-cnums"><div><b>${L(n.base)}</b><span>online, ${Q[view].label} 2026</span></div><div><b>${L(n.goal)}</b><span>2027 goal, +${Math.round(n.growth * 100)}%</span></div><div><b>${L(n.budget)}</b><span>budget</span></div><div><b>${n.aops}</b><span>AOPs: ${esc(s.aopKind)}</span></div></div>
        <div class="y27-cmid"><div><h4>2026 online turnover by business unit, ${Q[view].label}</h4>${STATES.map(st => `<div class="y27-st"><span>${st}</span><i style="--w:${(n.byState[st] || 0) / maxSt * 100}%;--c:${SC[st]}"></i><b>${L(n.byState[st] || 0)}</b></div>`).join("")}</div>
          <div><h4>2026 online turnover, month by month</h4>${spark}</div></div>
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
      : `<div class="y27-goal q2"><h4>Q2 goals</h4><p>The Q2 turnover, bills and conversion targets are not in our files yet. The sport goals below add up to <b>${L(SP.sports.reduce((t, s) => t + nums(s, "q2").goal, 0))}</b> of online turnover for the 7 sports.</p></div>`).join("");
    $("#y27Strat").innerHTML = ms.map(m => {
      const st = SP.months[m];
      const budget = STATES.reduce((t, s) => t + spend(s, m), 0), aops = STATES.reduce((t, s) => t + aopMonth(s, m), 0);
      return `<article class="y27-scol"><span class="oct-when">${FULL[m]}</span><h3>${esc(st.title)}</h3>
        <div class="y27-snums"><span><b>${L(budget)}</b>ad budget</span><span><b>${aops}</b>AOPs</span><span><b>${esc(D.puneSportOfMonth[m])}</b>Pune sport of the month</span></div>
        <ul>${st.moves.map(x => `<li>${esc(x)}</li>`).join("")}</ul>
        <div class="y27-ssports">${SP.sports.map(s => `<p style="--c:${s.color}"><b>${s.name}</b>${s.months[m].map(esc).join("; ")}</p>`).join("")}</div></article>`;
    }).join("");
  }

  function render() {
    const lab = Q[view].label;
    $("#y27CalTitle").innerHTML = `${view === "h1" ? "January to June" : lab + " 2027"}<span class="lt">, month by month</span>`;
    $("#y27SportsTitle").innerHTML = `The sports<span class="lt">, ${lab}</span>`;
    $("#y27StratTitle").innerHTML = `Strategies<span class="lt">, ${lab} month by month</span>`;
    $("#y27Strat").style.setProperty("--n", Q[view].months.length);
    $$("#y27Seg button").forEach(b => b.setAttribute("aria-pressed", b.dataset.q === view));
    kpis(); calendar(); monthPanel(); sports(); strategies();
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
