/* Water sports 2027 page, January to June: week-by-week planner (WATER27 in water27.js + the marketing lines generated from the water sheet by
   waterbudget.js), in store, the marketing budget, the hoarding maps, and the sport share 2026 (share26.js). Views: West / Pune / Gujarat / MP and Jan to Jun or one month. */
(() => {
  const $ = (s, r = document) => r.querySelector(s), $$ = (s, r = document) => [...r.querySelectorAll(s)];
  const esc = s => String(s).replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
  const W = window.WATER27, SH = window.SPORT_SHARE_2026, AOP = window.AOP_PLAN || [];
  const DAY = 864e5, MON = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  const FULLM = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  const STATES = ["Pune", "Gujarat", "MP"], CODE = { Pune: "P", Gujarat: "G", MP: "M" }, NAME = { P: "Pune", G: "Gujarat", M: "MP" };
  const SC = { Pune: "var(--pune)", Gujarat: "var(--guj)", MP: "var(--mp)" };
  const SRC = { sheet: "water sports sheet, 21 Nov 2026", pp: "Pune spend plan", pune: "Pune water plan", guj: "Gujarat water plan", gisp: "Great Indian Swim Project", india: "India swimming plan", part: "Pune partnerships sheet", plan: "2027 planner", ours: "our proposal" };
  const TODAY = new Date(Date.UTC(2026, 10, 9));

  const d = s => { const [y, m, dd] = s.split("-").map(Number); return new Date(Date.UTC(y, m - 1, dd)); };
  const fd = x => `${x.getUTCDate()} ${MON[x.getUTCMonth()]}`;
  const monday = (y, w) => { const j4 = Date.UTC(y, 0, 4), dow = (new Date(j4).getUTCDay() + 6) % 7; return new Date(j4 - dow * DAY + (w - 1) * 7 * DAY); };
  const inr = v => "₹" + Math.round(v).toLocaleString("en-IN");
  const L = l => l >= 100 ? `₹${(l / 100).toFixed(2)} Cr` : l < 1 ? `₹${+(l * 100).toFixed(1)}K` : `₹${l >= 10 ? l.toFixed(1) : +l.toFixed(2)} L`; // lakh in
  const RL = r => L(r / 1e5); // rupees in

  let view = "h1", state = "all", week = 0;

  const MKEY = ["jan", "feb", "mar", "apr", "may", "jun"];
  const monthMode = () => view === "h1";
  function weeks(q) {
    if (q === "h1") return MKEY.map((k, m) => ({ w: MON[m], key: k, month: true, mon: new Date(Date.UTC(2027, m, 1)), sun: new Date(Date.UTC(2027, m + 1, 0)) }));
    const Q = W.views[q], out = [];
    for (let w = Q.w0; w <= Q.w1; w++) { const m = monday(Q.year, w); out.push({ w, mon: m, sun: new Date(m.getTime() + 6 * DAY) }); }
    return out;
  }
  // months of the quarter: weeks grouped by the month of their Monday
  function monthsOf(ws) {
    const g = [];
    ws.forEach((x, i) => {
      const y = x.mon.getUTCFullYear(), m = x.mon.getUTCMonth(), last = g[g.length - 1];
      if (last && last.y === y && last.m === m) last.b = i; else g.push({ y, m, a: i, b: i });
    });
    return g;
  }
  const show = it => state === "all" || !it.st || it.st.includes(CODE[state]);
  const allItems = () => W.items.concat(typeof window.waterGenItems === "function" ? window.waterGenItems() : []);
  const aopIdx = (y, m) => { const i = (y - 2026) * 12 + m - 10; return i >= 0 && i < 12 ? i : -1; };
  const storesOf = st => AOP.filter(a => st === "all" || a.state === st);
  const aopSum = (st, y, m) => { const i = aopIdx(y, m); return i < 0 ? null : storesOf(st).reduce((t, a) => t + (a.months[i] || 0), 0); };
  const shareKey = () => state === "all" ? "West" : state;
  const water = (y, m) => (m <= 10 ? SH.water[shareKey()][m] : null); // 2026 pattern, lakh
  const span = (it, ws) => {
    const w0 = ws[0].mon.getTime(), s = d(it.s).getTime(), e = d(it.e).getTime(), end = ws[ws.length - 1].sun.getTime();
    if (e < w0 || s > end) return null;
    let a = ws.findIndex(x => x.sun.getTime() >= s), b = -1;
    ws.forEach((x, i) => { if (x.mon.getTime() <= e) b = i; });
    return a < 0 || b < 0 ? null : [a, Math.max(a, b)];
  };
  const weekOfToday = ws => ws.findIndex(x => TODAY >= x.mon && TODAY <= x.sun);

  /* ---------- hero ---------- */
  function hero() {
    const jo = SH.water.West.slice(0, 10).reduce((a, b) => a + b, 0);
    const goal = W.stores.reduce((t, s) => t + (s.goal || 0), 0);
    const B = window.WATERBUDGET_DEFAULT, pools = B ? B.aop.reduce((t, r) => t + r.n, 0) : 0;
    $("#w27Kpis").innerHTML = [
      [RL(goal), "water turnover goal, March to June 2027 (Pune +25%, Gujarat +20%)"],
      [L(jo), "West water sports turnover, January to October 2026, all channels"],
      ["15 Feb, 15 Mar", "in store goes live, then outside the store"],
      [typeof window.waterBudgetTotal === "function" ? RL(window.waterBudgetTotal()) : "-", "marketing budget, February to June (water sports sheet): hoardings, influencers, Meta, events, " + pools + " partner pools"]
    ].map(([b, s]) => `<div><b>${b}</b><span>${s}</span></div>`).join("");
  }

  /* ---------- quarter switch and its numbers ---------- */
  function qbar() {
    $("#w27Seg").innerHTML = Object.entries(W.views).map(([k, q]) => `<button type="button" data-q="${k}" aria-pressed="${k === view}">${q.label}</button>`).join("");
    $$("#w27Seg button").forEach(b => b.addEventListener("click", () => { view = b.dataset.q; week = defWeek(); render(); }));
    const ws = weeks(view), ms = monthsOf(ws);
    const tw = ms.reduce((t, g) => t + (g.m <= 9 ? water(g.y, g.m) : 0), 0);
    const miss = ms.filter(g => g.m > 9).map(g => g.m === 10 ? "Nov only partly in" : "Dec not in");
    const go = W.items.filter(it => it.go && show(it) && span(it, ws)).length;
    const B = window.WATERBUDGET_DEFAULT, MI = { feb: 0, mar: 1, apr: 2, may: 3, jun: 4 };
    $("#w27QNums").innerHTML = `<span><b>${L(tw)}</b>water turnover, same months 2026${miss.length ? ` (${miss.join(", ")} the data, so left out)` : ""}</span>
      <span><b>${(() => { const sel = state === "all" ? B.infl : B.infl.filter(r => r.st === state); return view === "h1" ? sel.reduce((t, r) => t + r.n.reduce((a, v) => a + (v || 0), 0), 0) : view === "jan" ? 0 : sel.reduce((t, r) => t + (r.n[MI[view]] || 0), 0); })()}</b>influencers</span>
      <span><b>${go}</b>go-live date${go === 1 ? "" : "s"}</span>`;
  }

  /* ---------- the calendar ---------- */
  function calendar() {
    const ws = weeks(view), ms = monthsOf(ws), n = ws.length, grid = $("#w27Grid"), now = weekOfToday(ws);
    grid.style.setProperty("--n", n);
    const maxW = Math.max(...ms.map(g => water(g.y, g.m) || 0)) || 1;
    grid.classList.toggle("mm", monthMode());
    let h = monthMode() ? `<div class="pl-corner w27-corner">One column per month. Click a month to see it week by week. Bar: water turnover in the same month of 2026${state === "all" ? ", West" : ", " + state}</div>`
      : `<div class="pl-corner w27-corner">Weeks start on Monday. Bar: water turnover in the same month of 2026${state === "all" ? ", West" : ", " + state}</div>`;
    const ITEMS = allItems();
    h += ms.map(g => {
      const wv = water(g.y, g.m), a = aopSum(state, g.y, g.m);
      if (monthMode()) return `<button type="button" class="w27-mon w27-mbtn" data-v="${MKEY[g.m]}" style="grid-column:${g.a + 2} / ${g.b + 3}" aria-label="Show ${FULLM[g.m]} week by week"><b>${FULLM[g.m]}</b>
        <small>${wv != null ? `${L(wv)} water in 2026` : "water: no data yet"}</small><i class="pl-spend" style="--w:${(wv || 0) / maxW * 100}%"></i><em>Week by week ›</em></button>`;
      return `<div class="w27-mon" style="grid-column:${g.a + 2} / ${g.b + 3}"><b>${FULLM[g.m]} ${g.y}</b>
        <small>${wv != null ? `${L(wv)} water${g.m === 10 ? " (to 8 Nov)" : ""}` : "water: no data yet"}</small>
        <i class="pl-spend" style="--w:${(wv || 0) / maxW * 100}%"></i></div>`;
    }).join("");
    if (!monthMode()) h += ws.map((x, i) => `<button type="button" class="w27-wk ${i === now ? "now" : ""}" style="grid-column:${i + 2}" data-i="${i}" aria-pressed="${i === week}" aria-label="Week ${x.w}, ${fd(x.mon)} to ${fd(x.sun)}"><b>W${x.w}</b><small>${fd(x.mon)}</small>${i === now ? "<em>We are here</em>" : ""}</button>`).join("");

    W.lanes.forEach(lane => {
      if (lane.id === "aop") return; // all-sports AOP plan: not part of the water plan
      if (lane.id === "aop-old") {
        const cells = ms.map(g => {
          const i = aopIdx(g.y, g.m);
          if (i < 0) return `<span class="pl-chip tbd" style="grid-column:${g.a + 1} / ${g.b + 2}">Not in the AOP plan</span>`;
          const txt = state === "all"
            ? STATES.map(st => `${st} ${aopSum(st, g.y, g.m)}`).join(", ")
            : storesOf(state).map(a => `${a.store} ${a.months[i]}`).join(", ");
          const on = week >= g.a && week <= g.b;
          return `<span class="pl-chip eco w27-aop ${on ? "" : "dim"}" style="grid-column:${g.a + 1} / ${g.b + 2}"><b>${aopSum(state, g.y, g.m)} AOPs</b>&nbsp;${esc(txt)}</span>`;
        }).join("");
        h += `<div class="pl-lane-name">${lane.name}</div><div class="pl-lane">${cells}</div>`;
        return;
      }
      const items = ITEMS.filter(it => it.l === lane.id && show(it)).map(it => ({ it, sp: span(it, ws) })).filter(x => x.sp);
      if (!items.length) return;
      items.sort((a, b) => a.sp[0] - b.sp[0] || (b.sp[1] - b.sp[0]) - (a.sp[1] - a.sp[0]));
      const rows = [];
      const chips = items.map(({ it, sp: [a, b] }) => {
        let r = rows.findIndex(end => end < a);
        if (r < 0) { rows.push(-1); r = rows.length - 1; }
        rows[r] = b;
        const on = week >= a && week <= b;
        const tag = state === "all" && it.st && it.st.length === 1 ? `<em class="w27-tag" style="--c:${SC[NAME[it.st[0]]]}">${NAME[it.st[0]]}</em>` : "";
        const tip = `${it.t} (${fd(d(it.s))}${it.e !== it.s ? " to " + fd(d(it.e)) : ""}${it.n ? "; " + SRC[it.n] : ""})`;
        return `<span class="pl-chip ${it.k} ${it.go ? "go" : ""} ${it.done ? "done" : ""} ${on ? "" : "dim"}" style="grid-column:${a + 1} / ${b + 2};grid-row:${r + 1}" title="${esc(tip)}">${tag}${it.go ? "★ " : ""}${it.done ? "✓ " : ""}${esc(it.t)}</span>`;
      }).join("");
      h += `<div class="pl-lane-name">${lane.name}</div><div class="pl-lane">${chips}</div>`;
    });

    // bottom of the calendar: turnover share by sport, same month 2026
    h += `<div class="y27-band w27-band">Turnover share by sport, same month 2026${state === "all" ? " (West)" : ` (${state})`}</div>`;
    h += `<div class="pl-lane-name">Top sports and swimming</div><div class="pl-lane w27-shlane">${ms.map(g => {
      if (g.m > 10) return `<span class="w27-shcell" style="grid-column:${g.a + 1} / ${g.b + 2}"><small>${FULLM[g.m]}: no 2026 data yet</small></span>`;
      const rows = SH.st[shareKey()], tot = rows.reduce((t, r) => t + r[g.m], 0);
      const list = SH.sports.map((s, k) => ({ s, v: rows[k][g.m] })).filter(x => x.s !== "All other sports").sort((a, b) => b.v - a.v);
      const sw = list.findIndex(x => x.s === "Swimming");
      const top = list.slice(0, 4);
      return `<span class="w27-shcell" style="grid-column:${g.a + 1} / ${g.b + 2}">${top.map((x, k) => `<span class="${x.s === "Swimming" ? "sw" : ""}"><i style="--w:${x.v / tot * 100 * 4}%"></i>${k + 1}. ${esc(x.s)} <b>${(x.v / tot * 100).toFixed(1)}%</b></span>`).join("")}${sw >= 4 ? `<span class="sw"><i style="--w:${list[sw].v / tot * 100 * 4}%"></i>${sw + 1}. Swimming <b>${(list[sw].v / tot * 100).toFixed(1)}%</b></span>` : ""}${g.m === 10 ? "<small>November to the 8th</small>" : ""}</span>`;
    }).join("")}</div>`;

    grid.innerHTML = h;
    // frozen header (like Excel): the week row sticks under the month row
    requestAnimationFrame(() => { const m = grid.querySelector(".w27-mon"); if (m) grid.style.setProperty("--mh", m.offsetHeight + "px"); });
    $$(".w27-wk", grid).forEach(b => b.addEventListener("click", () => { week = +b.dataset.i; calendar(); weekPanel(); const dd = document.getElementById("w27WeekDD"); if (dd) dd.open = true; }));
    $$(".w27-mbtn", grid).forEach(b => b.addEventListener("click", () => { view = b.dataset.v; week = 0; render(); }));
  }

  function legend() {
    $("#w27Legend").innerHTML = `<span><i class="pl-chip launch go">★</i>Go live</span><span><i class="pl-chip prop"></i>Our proposal or our timing</span><span><i class="pl-chip done">✓</i>Done</span>
      <span><i class="pl-chip evt"></i>Events</span><span><i class="pl-chip eco"></i>Pools, coaches, AOPs</span><span><i class="pl-chip sale"></i>Hoardings, sales</span><span><i class="pl-chip local"></i>Store-level</span><span><i class="pl-chip hol"></i>Holidays</span>`;
  }

  /* ---------- the week ---------- */
  function weekPanel() {
    const ws = weeks(view), x = ws[week];
    const live = W.lanes.map(lane => {
      if (lane.id === "aop") return "";
      const its = allItems().filter(it => it.l === lane.id && show(it) && d(it.s) <= x.sun && d(it.e) >= x.mon);
      if (!its.length) return "";
      return `<div class="w27-wl"><h4>${lane.name}</h4><ul>${its.map(it => `<li class="${it.go ? "go" : ""}">${it.go ? "★ " : ""}${esc(it.t)}<small>${fd(d(it.s))}${it.e !== it.s ? " to " + fd(d(it.e)) : ""}${it.st ? ", " + it.st.map(c => NAME[c]).join(" and ") : ""}${it.n ? "; " + SRC[it.n] : ""}</small></li>`).join("")}</ul></div>`;
    }).join("");
    const y = x.mon.getUTCFullYear(), m = x.mon.getUTCMonth(), i = aopIdx(y, m);
    const aops = i < 0 ? `<p class="w27-muted">${FULLM[m]} ${y} is outside the AOP plan (Nov 2026 to Oct 2027).</p>`
      : `<div class="y27-pills w27-aops">${storesOf(state).map(a => `<span style="--c:${SC[a.state]}"><b>${a.months[i]}</b>${a.store}</span>`).join("")}</div>`;
    $("#w27Week").innerHTML = `<div class="y27-mhead"><h3 class="display-s">${x.month ? FULLM[x.mon.getUTCMonth()] + " 2027" : "Week " + x.w}<span class="lt">: ${fd(x.mon)} to ${fd(x.sun)} ${x.sun.getUTCFullYear()}</span></h3>
      <div class="y27-mnav"><button type="button" data-d="-1" aria-label="Previous">‹</button><button type="button" data-d="1" aria-label="Next">›</button></div></div>
      <div class="w27-wgrid">${live || `<p class="w27-muted">Nothing planned this week${state === "all" ? "" : " for " + state}.</p>`}</div>
`;
    $$("#w27Week .y27-mnav button").forEach(b => b.addEventListener("click", () => {
      week = (week + +b.dataset.d + ws.length) % ws.length; calendar(); weekPanel();
      $(`#w27Week .y27-mnav button[data-d="${b.dataset.d}"]`)?.focus();
    }));
  }

  function ideas() {
    $("#w27IdeasTitle").textContent = `What we can do, ${W.views[view].long}`;
    $("#w27Ideas").innerHTML = W.ideas[W.views[view].idea].map(([h, p, prop]) => `<article class="${prop ? "prop" : ""}"><h4>${esc(h)}</h4><p>${esc(p)}</p>${prop ? "<small>Our proposal</small>" : ""}</article>`).join("");
  }

  /* ---------- sport share heatmap ---------- */
  function heat() {
    const key = shareKey(), rows = SH.st[key];
    const mt = i => rows.reduce((t, r) => t + r[i], 0);
    const jj = r => r.slice(0, 6).reduce((a, b) => a + b, 0), jo = r => r.slice(0, 10).reduce((a, b) => a + b, 0);
    const allH = rows.reduce((t, r) => t + jj(r), 0), all = rows.reduce((t, r) => t + jo(r), 0);
    const order = SH.sports.map((s, k) => k).sort((a, b) => (SH.sports[a] === "All other sports") - (SH.sports[b] === "All other sports") || jj(rows[b]) - jj(rows[a]));
    const ms = monthsOf(weeks(view)).map(g => g.m);
    const top4 = order.slice(0, 4).map(k => SH.sports[k]), top4s = order.slice(0, 4).reduce((t, k) => t + jj(rows[k]), 0) / allH * 100;
    const sw = SH.sports.indexOf("Swimming"), swR = rows[sw], swRank = order.indexOf(sw) + 1;
    $("#w27ShareLede").innerHTML = `${state === "all" ? "West" : state}, every channel (store and online), 2026: the pattern we plan 2027 on. From January to June, four of our ${SH.nsports} sports, ${top4.slice(0, 3).join(", ").toLowerCase()} and ${top4[3].toLowerCase()}, made <b>${top4s.toFixed(0)}%</b> of turnover. <b>Swimming made ${L(jj(swR))} from January to June 2026, ${(jj(swR) / allH * 100).toFixed(1)}% of turnover</b> (number ${swRank} of the sports), and ${L(jo(swR))} year to date, January to October, ${(jo(swR) / all * 100).toFixed(1)}%. Each cell is the sport's share of that month's turnover; the darker, the bigger. Columns of the months you picked are outlined.`;
    const cell = (v, t, mi) => {
      const s = v / t * 100, a = Math.min(1, s / 22);
      return `<td class="hc ${ms.includes(mi) ? "inq" : ""}" style="--a:${(0.06 + a * 0.84).toFixed(2)}" data-dark="${a > 0.5 ? 1 : 0}" title="${FULLM[mi]} 2026: ${L(v)}, ${s.toFixed(1)}% of turnover">${s.toFixed(1)}%</td>`;
    };
    $("#w27Heat").innerHTML = `<table class="w27-heat"><thead><tr><th>Sport</th>${MON.map((m, i) => `<th class="${ms.includes(i) ? "inq" : ""}">${m}${i === 10 ? "<small>to 8th</small>" : ""}</th>`).join("")}<th class="w27-hj">Jan to Jun<small>share</small></th><th class="w27-hj">Jan to Jun<small>turnover</small></th><th>YTD Jan to Oct<small>share</small></th><th>YTD Jan to Oct<small>turnover</small></th></tr></thead><tbody>
      ${order.map(k => { const r = rows[k], nm = SH.sports[k];
        return `<tr class="${nm === "Swimming" ? "sw" : ""} ${nm === "All other sports" ? "oth" : ""}"><td><b>${esc(nm)}</b></td>${r.map((v, i) => cell(v, mt(i), i)).join("")}<td class="hc na">-</td><td class="w27-n w27-hj"><b>${(jj(r) / allH * 100).toFixed(1)}%</b></td><td class="w27-n w27-hj">${L(jj(r))}</td><td class="w27-n"><b>${(jo(r) / all * 100).toFixed(1)}%</b></td><td class="w27-n">${L(jo(r))}</td></tr>`; }).join("")}
      <tr class="tot"><td><b>All sports</b></td>${MON.slice(0, 11).map((m, i) => `<td class="w27-n">${L(mt(i))}</td>`).join("")}<td class="w27-n">-</td><td class="w27-n w27-hj"><b>100%</b></td><td class="w27-n w27-hj"><b>${L(allH)}</b></td><td class="w27-n"><b>100%</b></td><td class="w27-n"><b>${L(all)}</b></td></tr>
      </tbody></table><p class="w27-scale"><span>0%</span><i></i><span>22%+ of the month</span><span class="w27-muted">Every cell is a % of that month's turnover. Jan to Jun = the months of the water plan; YTD = January to October 2026. December: no data yet. November: 1 to 8 Nov only.</span></p>`;
  }

  /* ---------- stores: in store (team, in store and mall) + the sheet's store lines + the turnover goal ---------- */
  function stores() {
    $("#w27StoresTitle").innerHTML = `In store, store by store<span class="lt">${state === "all" ? "" : ", " + state}</span>`;
    const B = window.WATERBUDGET_DEFAULT, list = W.stores.filter(s => state === "all" || s.st === state);
    const key = s => ({ "SGS Mall": "SGS", "Dumas Road": "Dumas", "Adajan (new)": "Adajan", "Pune city and online": "Kothrud / Baner" }[s.name] || s.name);
    const row = (arr, s) => arr.find(r => r.store === key(s));
    const head = `<tr><th>Store</th><th>Water team<small>full-time, part-time, interns</small></th><th>In store and mall</th><th>Pool partnerships<small>water sheet, by Feb</small></th><th>Events<small>Mar to Jun, water sheet</small></th><th>WhatsApp community<small>members by May</small></th><th>Water turnover, Mar to Jun<small>2026 → 2027 goal</small></th></tr>`;
    let body = "";
    STATES.filter(st => list.some(s => s.st === st)).forEach(st => {
      const ss = list.filter(s => s.st === st);
      body += `<tr class="grp"><td colspan="7" style="--c:${SC[st]}">${st}</td></tr>`;
      ss.forEach(s => {
        const team = s.team ? `${s.team.join(" / ")}${s.hire ? `<small>${s.hire} still to hire</small>` : ""}` : `<span class="w27-muted">Not in the plan</span>`;
        const inst = s.inmall != null ? (s.inmall ? inr(s.inmall) : "-") : `<small>${esc(s.instore || "-")}</small>`;
        const ap = row(B.aop, s), ev = row(B.events, s), wa = row(B.wa, s), fl = row(B.flyers, s);
        const base = s.base || (s.goal ? s.goal / 1.25 : 0);
        const goal = s.goal ? `${RL(base)} → <b>${RL(s.goal)}</b>${s.base ? "" : "<small>2026 = goal / 1.25</small>"}` : `<span class="w27-muted">No goal in our files</span>`;
        body += `<tr><td><b>${esc(s.name)}</b><small>${esc(s.city)}</small></td><td>${team}</td><td>${inst}</td>
          <td>${ap ? `<b>${ap.n} pools</b><small>${inr(ap.n * ap.r)}${fl ? `; flyers ${inr(fl.v)}` : ""}</small>` : "-"}</td>
          <td>${ev ? `<b>${inr(ev.v.reduce((t, v) => t + (v || 0), 0))}</b>` : "-"}</td><td>${wa ? (wa.n[3] || "-") : "-"}</td><td>${goal}</td></tr>`;
      });
      const g = ss.reduce((t, s) => t + (s.goal || 0), 0), b0 = ss.reduce((t, s) => t + (s.base || (s.goal ? s.goal / 1.25 : 0)), 0);
      const aps = B.aop.filter(r => r.st === st), evs = B.events.filter(r => r.st === st);
      body += `<tr class="tot"><td><b>${st}</b></td><td></td><td>${st === "Pune" ? inr(ss.reduce((t, s) => t + (s.inmall || 0), 0)) : ""}</td><td><b>${aps.reduce((t, r) => t + r.n, 0)} pools</b></td><td><b>${inr(evs.reduce((t, r) => t + r.v.reduce((a, v) => a + (v || 0), 0), 0))}</b></td><td></td><td>${g ? `${RL(b0)} → <b>${RL(g)}</b>` : "-"}</td></tr>`;
    });
    $("#w27Stores").innerHTML = `<table class="y27-table w27-stores">${head}${body}</table>`;
    $("#w27StoresNote").innerHTML = "Teams and in store from the Pune and Gujarat water plans (full-time includes the department manager; names are not shown). Pools, events, flyers and WhatsApp targets from the water sports sheet (21 Nov 2026); Pune city and online is the sheet's Kothrud / Baner column. The full marketing budget is in the next section.";
  }

  /* ---------- in-store money that stays: Gujarat merchandising (the old outstore budgets are replaced by the water sheet) ---------- */
  function money() {
    const el = $("#w27Money"); if (!el) return;
    const mg = W.merchGuj, inr2 = v => inr(v);
    el.innerHTML = `<div class="panel w27-mcard"><h3 class="display-s">Gujarat merchandising<span class="lt">, Motera and Dumas Road</span></h3>${mg.map(([n, v]) => `<div class="y27-st w27-bar"><span>${esc(n)}</span><i style="--w:${v / mg[0][1] * 100}%;--c:var(--blue)"></i><b>${inr2(v)}</b></div>`).join("")}<p class="w27-note">₹1,61,750 in all (in-store, from the Gujarat water plan).</p></div>`;
  }

  /* ---------- range and the why ---------- */
  function range() {
    const F = W.families;
    $("#w27Range").innerHTML = `
      <div class="panel w27-rcard"><h3 class="display-s">Pune: top families to 100% CAD by 15 Feb</h3><ul class="w27-chips">${F.pune.map(f => `<li>${esc(f)}</li>`).join("")}</ul><p>Caps sold per goggle is the ABQ lever.</p></div>
      <div class="panel w27-rcard"><h3 class="display-s">Gujarat: families that make 85% of water turnover</h3><ul class="w27-chips">${F.guj.map(f => `<li>${esc(f)}</li>`).join("")}</ul><p>ABQ add-ons: goggle case, phone pocket, 3 L and 7 L pouches, mesh bag for station coaching. Goggles: adults first, then kids, with the promises (anti-fog, UV, adjustable).</p></div>
      <div class="panel w27-rcard"><h3 class="display-s">Three promises, said everywhere</h3><div class="w27-prom"><span><b>Anti-fog</b>goggles</span><span><b>Chlorine resistant</b>swimsuits</span><span><b>UV protection</b>even when wet</span></div><p>From the India Strategic A4: move from "affordable but basic" to "affordable and technical". Women's cover-up swimwear for SS27: Jisa Shorty without sleeves, Rossa full body zip, Rossa legging, Una skirt full zip.</p></div>
      <div class="panel w27-rcard w27-wide"><h3 class="display-s">Where we stand</h3><div class="w27-facts">
        <span><b>19.1%</b>Decathlon's share of the Pune swimming market (₹101.9 Cr market, ₹19.33 Cr our 2026 close)</span>
        <span><b>7%</b>our share in India, aiming for 10% by 2030 (₹4,700 Cr market in 2025, 10% a year)</span>
        <span><b>₹33.9 Cr</b>water sports in Pune and Gujarat, 1 Jan to 8 Nov 2026, +15.6%; digital 14.6%, margin 27.8%, basket ₹2,469</span>
        <span><b>₹385 Cr</b>India swimming turnover goal for 2027 (+15%), on the way from ₹300 Cr (2025) to ₹496 Cr (2029)</span>
        <span><b>65 / 35</b>men / women among swimmers; juniors 24%</span>
        <span><b>10%</b>of accidental deaths in India are drownings; 50% of Indians see swimming as a life skill</span>
      </div><p>India plan, four axes: learn to swim (coaches and community), women, brand perception (technical, local content), supply and commerce (less import dependence, quick commerce and marketplaces). Pune priorities: keep our customers coming back next year, and win the learners who start in summer.</p></div>`;
  }

  function defWeek() { const ws = weeks(view), t = weekOfToday(ws); return t >= 0 ? t : 0; }

  function render() {
    const Q = W.views[view];
    $("#w27CalTitle").innerHTML = `${Q.long}<span class="lt">, ${view === "h1" ? "month by month" : "week by week"}${state === "all" ? ", West" : ", " + state}</span>`;
    $$("#w27St button").forEach(b => b.setAttribute("aria-pressed", b.dataset.s === state));
    window.W27_VIEW = { state, view };
    qbar(); calendar(); weekPanel(); ideas(); heat(); stores();
    window.dispatchEvent(new CustomEvent("w27:view"));
  }

  $$("#w27St button").forEach(b => b.addEventListener("click", () => { state = b.dataset.s; render(); }));
  window.addEventListener("wb:change", () => { hero(); qbar(); calendar(); weekPanel(); });
  week = defWeek();
  hero(); legend(); money(); range(); render();
  // films: load and play only when on screen
  const gate = new IntersectionObserver(es => es.forEach(e => { const v = e.target; if (e.isIntersecting) { if (!v.src) v.src = v.dataset.src; v.play().catch(() => {}); } else v.pause(); }), { rootMargin: "120px" });
  $$("video[data-src]").forEach(v => { v.muted = true; gate.observe(v); });
})();
