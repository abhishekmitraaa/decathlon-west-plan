/* Water sports 2027 page: week-by-week planner (WATER27 in water27.js), AOP_PLAN (data.js), sport share 2026 (share26.js). */
(() => {
  const $ = (s, r = document) => r.querySelector(s), $$ = (s, r = document) => [...r.querySelectorAll(s)];
  const esc = s => String(s).replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
  const W = window.WATER27, SH = window.SPORT_SHARE_2026, AOP = window.AOP_PLAN || [];
  const DAY = 864e5, MON = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  const FULLM = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  const STATES = ["Pune", "Gujarat", "MP"], CODE = { Pune: "P", Gujarat: "G", MP: "M" }, NAME = { P: "Pune", G: "Gujarat", M: "MP" };
  const SC = { Pune: "var(--pune)", Gujarat: "var(--guj)", MP: "var(--mp)" };
  const SRC = { pp: "Pune spend plan", pune: "Pune water plan", guj: "Gujarat water plan", gisp: "Great Indian Swim Project", india: "India swimming plan", part: "Pune partnerships sheet", plan: "2027 planner", ours: "our proposal" };
  const TODAY = new Date(Date.UTC(2026, 10, 9));

  const d = s => { const [y, m, dd] = s.split("-").map(Number); return new Date(Date.UTC(y, m - 1, dd)); };
  const fd = x => `${x.getUTCDate()} ${MON[x.getUTCMonth()]}`;
  const monday = (y, w) => { const j4 = Date.UTC(y, 0, 4), dow = (new Date(j4).getUTCDay() + 6) % 7; return new Date(j4 - dow * DAY + (w - 1) * 7 * DAY); };
  const inr = v => "₹" + Math.round(v).toLocaleString("en-IN");
  const L = l => l >= 100 ? `₹${(l / 100).toFixed(2)} Cr` : `₹${l >= 10 ? l.toFixed(1) : l.toFixed(2)} L`; // lakh in
  const RL = r => L(r / 1e5); // rupees in

  let view = "q1", state = "all", week = 0;

  function weeks(q) {
    const Q = W.quarters[q], out = [];
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
  const aopIdx = (y, m) => { const i = (y - 2026) * 12 + m - 10; return i >= 0 && i < 12 ? i : -1; };
  const storesOf = st => AOP.filter(a => st === "all" || a.state === st);
  const aopSum = (st, y, m) => { const i = aopIdx(y, m); return i < 0 ? null : storesOf(st).reduce((t, a) => t + (a.months[i] || 0), 0); };
  const shareKey = () => state === "all" ? "West" : state;
  const water = (y, m) => (m <= 10 ? SH.water[shareKey()][m] : null); // 2026 pattern, lakh
  const span = (it, ws) => {
    const w0 = ws[0].mon.getTime(), s = d(it.s).getTime(), e = d(it.e).getTime(), end = ws[ws.length - 1].sun.getTime();
    if (e < w0 || s > end) return null;
    return [Math.max(0, Math.floor((s - w0) / (7 * DAY))), Math.min(ws.length - 1, Math.floor((e - w0) / (7 * DAY)))];
  };
  const weekOfToday = ws => ws.findIndex(x => TODAY >= x.mon && TODAY <= x.sun);

  /* ---------- hero ---------- */
  function hero() {
    const jo = SH.water.West.slice(0, 10).reduce((a, b) => a + b, 0);
    const goal = W.stores.reduce((t, s) => t + (s.goal || 0), 0);
    const coaches = W.stores.reduce((t, s) => t + (s.coaches || 0), 0);
    const pools = W.stores.filter(s => s.st === "Pune").reduce((t, s) => t + (s.pools || 0), 0);
    $("#w27Kpis").innerHTML = [
      [RL(goal), "water turnover goal, March to June 2027 (Pune +25%, Gujarat +20%)"],
      [L(jo), "West water sports turnover, January to October 2026, all channels"],
      ["15 Feb, 15 Mar", "in store goes live, then outside the store"],
      [`${coaches} coaches, ${pools} pools`, "affiliated coaches (Pune and Gujarat) and Pune pool tie-ups to sign"]
    ].map(([b, s]) => `<div><b>${b}</b><span>${s}</span></div>`).join("");
  }

  /* ---------- quarter switch and its numbers ---------- */
  function qbar() {
    $("#w27Seg").innerHTML = Object.entries(W.quarters).map(([k, q]) => `<button type="button" data-q="${k}" aria-pressed="${k === view}">${q.label}</button>`).join("");
    $$("#w27Seg button").forEach(b => b.addEventListener("click", () => { view = b.dataset.q; week = defWeek(); render(); }));
    const ws = weeks(view), ms = monthsOf(ws);
    const tw = ms.reduce((t, g) => t + (g.m <= 9 ? water(g.y, g.m) : 0), 0);
    const miss = ms.filter(g => g.m > 9).map(g => g.m === 10 ? "Nov only partly in" : "Dec not in");
    const ao = ms.map(g => aopSum(state, g.y, g.m)), aok = ao.filter(x => x != null);
    const go = W.items.filter(it => it.go && show(it) && span(it, ws)).length;
    $("#w27QNums").innerHTML = `<span><b>${L(tw)}</b>water turnover, same months 2026${miss.length ? ` (${miss.join(", ")} the data, so left out)` : ""}</span>
      <span><b>${aok.length ? aok.reduce((a, b) => a + b, 0) : "-"}</b>AOPs planned${aok.length < ao.length ? " (AOP plan runs Nov 2026 to Oct 2027)" : ""}</span>
      <span><b>${go}</b>go-live date${go === 1 ? "" : "s"}</span>`;
  }

  /* ---------- the calendar ---------- */
  function calendar() {
    const ws = weeks(view), ms = monthsOf(ws), n = ws.length, grid = $("#w27Grid"), now = weekOfToday(ws);
    grid.style.setProperty("--n", n);
    const maxW = Math.max(...ms.map(g => water(g.y, g.m) || 0)) || 1;
    let h = `<div class="pl-corner w27-corner">Weeks start on Monday. Bar: water turnover in the same month of 2026${state === "all" ? ", West" : ", " + state}</div>`;
    h += ms.map(g => {
      const wv = water(g.y, g.m), a = aopSum(state, g.y, g.m);
      return `<div class="w27-mon" style="grid-column:${g.a + 2} / ${g.b + 3}"><b>${FULLM[g.m]} ${g.y}</b>
        <small>${wv != null ? `${L(wv)} water${g.m === 10 ? " (to 8 Nov)" : ""}` : "water: no data yet"}${a != null ? `, ${a} AOPs` : ""}</small>
        <i class="pl-spend" style="--w:${(wv || 0) / maxW * 100}%"></i></div>`;
    }).join("");
    h += ws.map((x, i) => `<button type="button" class="w27-wk ${i === now ? "now" : ""}" style="grid-column:${i + 2}" data-i="${i}" aria-pressed="${i === week}" aria-label="Week ${x.w}, ${fd(x.mon)} to ${fd(x.sun)}"><b>W${x.w}</b><small>${fd(x.mon)}</small>${i === now ? "<em>We are here</em>" : ""}</button>`).join("");

    W.lanes.forEach(lane => {
      if (lane.id === "aop") {
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
      const items = W.items.filter(it => it.l === lane.id && show(it)).map(it => ({ it, sp: span(it, ws) })).filter(x => x.sp);
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
    $$(".w27-wk", grid).forEach(b => b.addEventListener("click", () => { week = +b.dataset.i; calendar(); weekPanel(); }));
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
      const its = W.items.filter(it => it.l === lane.id && show(it) && d(it.s) <= x.sun && d(it.e) >= x.mon);
      if (!its.length) return "";
      return `<div class="w27-wl"><h4>${lane.name}</h4><ul>${its.map(it => `<li class="${it.go ? "go" : ""}">${it.go ? "★ " : ""}${esc(it.t)}<small>${fd(d(it.s))}${it.e !== it.s ? " to " + fd(d(it.e)) : ""}${it.st ? ", " + it.st.map(c => NAME[c]).join(" and ") : ""}${it.n ? "; " + SRC[it.n] : ""}</small></li>`).join("")}</ul></div>`;
    }).join("");
    const y = x.mon.getUTCFullYear(), m = x.mon.getUTCMonth(), i = aopIdx(y, m);
    const aops = i < 0 ? `<p class="w27-muted">${FULLM[m]} ${y} is outside the AOP plan (Nov 2026 to Oct 2027).</p>`
      : `<div class="y27-pills w27-aops">${storesOf(state).map(a => `<span style="--c:${SC[a.state]}"><b>${a.months[i]}</b>${a.store}</span>`).join("")}</div>`;
    $("#w27Week").innerHTML = `<div class="y27-mhead"><h3 class="display-s">Week ${x.w}<span class="lt">: ${fd(x.mon)} to ${fd(x.sun)} ${x.sun.getUTCFullYear()}</span></h3>
      <div class="y27-mnav"><button type="button" data-d="-1" aria-label="Previous week">‹</button><button type="button" data-d="1" aria-label="Next week">›</button></div></div>
      <div class="w27-wgrid">${live || `<p class="w27-muted">Nothing planned this week${state === "all" ? "" : " for " + state}.</p>`}</div>
      <h4 class="w27-h4">AOPs in ${FULLM[m]}, store by store${i < 0 ? "" : ` (${storesOf(state).reduce((t, a) => t + a.months[i], 0)})`}</h4>${aops}`;
    $$("#w27Week .y27-mnav button").forEach(b => b.addEventListener("click", () => {
      week = (week + +b.dataset.d + ws.length) % ws.length; calendar(); weekPanel();
      $(`#w27Week .y27-mnav button[data-d="${b.dataset.d}"]`)?.focus();
    }));
  }

  function ideas() {
    $("#w27IdeasTitle").innerHTML = `What we can do<span class="lt">, ${W.quarters[view].label}</span>`;
    $("#w27Ideas").innerHTML = W.ideas[view].map(([h, p, prop]) => `<article class="${prop ? "prop" : ""}"><h4>${esc(h)}</h4><p>${esc(p)}</p>${prop ? "<small>Our proposal</small>" : ""}</article>`).join("");
  }

  /* ---------- sport share heatmap ---------- */
  function heat() {
    const key = shareKey(), rows = SH.st[key];
    const mt = i => rows.reduce((t, r) => t + r[i], 0);
    const jo = r => r.slice(0, 10).reduce((a, b) => a + b, 0), all = rows.reduce((t, r) => t + jo(r), 0);
    const order = SH.sports.map((s, k) => k).sort((a, b) => (SH.sports[a] === "All other sports") - (SH.sports[b] === "All other sports") || jo(rows[b]) - jo(rows[a]));
    const ms = monthsOf(weeks(view)).filter(g => g.y === 2027 || view === "q426").map(g => g.m);
    const top4 = order.slice(0, 4).map(k => SH.sports[k]), top4s = order.slice(0, 4).reduce((t, k) => t + jo(rows[k]), 0) / all * 100;
    const top12 = order.filter(k => SH.sports[k] !== "All other sports").reduce((t, k) => t + jo(rows[k]), 0) / all * 100;
    $("#w27ShareLede").innerHTML = `${state === "all" ? "West" : state}, every channel (store and online), 2026: the pattern we plan 2027 on. We sold ${SH.nsports} sports; four of them, ${top4.slice(0, 3).join(", ").toLowerCase()} and ${top4[3].toLowerCase()}, made <b>${top4s.toFixed(0)}%</b> of January to October turnover, and the 12 below made ${top12.toFixed(0)}%. Each cell is the sport's share of that month's turnover; the darker, the bigger. Columns of the quarter you picked are outlined.`;
    const cell = (v, t, mi) => {
      const s = v / t * 100, a = Math.min(1, s / 22);
      return `<td class="hc ${ms.includes(mi) ? "inq" : ""}" style="--a:${(0.06 + a * 0.84).toFixed(2)}" data-dark="${a > 0.5 ? 1 : 0}" title="${FULLM[mi]} 2026: ${L(v)}, ${s.toFixed(1)}% of turnover">${s.toFixed(1)}</td>`;
    };
    $("#w27Heat").innerHTML = `<table class="w27-heat"><thead><tr><th>Sport</th>${MON.map((m, i) => `<th class="${ms.includes(i) ? "inq" : ""}">${m}${i === 10 ? "<small>to 8th</small>" : ""}</th>`).join("")}<th>Jan to Oct</th><th>Turnover</th></tr></thead><tbody>
      ${order.map(k => { const r = rows[k], nm = SH.sports[k];
        return `<tr class="${nm === "Swimming" ? "sw" : ""} ${nm === "All other sports" ? "oth" : ""}"><td><b>${esc(nm)}</b></td>${r.map((v, i) => cell(v, mt(i), i)).join("")}<td class="hc na">-</td><td class="w27-n"><b>${(jo(r) / all * 100).toFixed(1)}%</b></td><td class="w27-n">${L(jo(r))}</td></tr>`; }).join("")}
      <tr class="tot"><td><b>All sports</b></td>${MON.slice(0, 11).map((m, i) => `<td class="w27-n">${L(mt(i))}</td>`).join("")}<td class="w27-n">-</td><td class="w27-n"><b>100%</b></td><td class="w27-n"><b>${L(all)}</b></td></tr>
      </tbody></table><p class="w27-scale"><span>0%</span><i></i><span>22%+ of the month</span><span class="w27-muted">December: no data yet. November: 1 to 8 Nov only.</span></p>`;
  }

  /* ---------- stores ---------- */
  function stores() {
    const ws = weeks(view), ms = monthsOf(ws);
    $("#w27StoresTitle").innerHTML = `Store by store<span class="lt">, ${W.quarters[view].label}</span>`;
    const list = W.stores.filter(s => state === "all" || s.st === state);
    const aopOf = s => { const a = AOP.find(x => x.store === s.aop); return ms.map(g => { const i = aopIdx(g.y, g.m); return a && i >= 0 ? a.months[i] : null; }); };
    const outSum = s => s.out ? Object.values(s.out).reduce((a, b) => a + b, 0) : 0;
    const head = `<tr><th>Store</th><th>Water team<small>full-time, part-time, interns</small></th><th>AOPs, all sports<small>${ms.map(g => MON[g.m]).join(" / ")}</small></th><th>Pools, coaches, academies</th><th>In store and mall</th><th>Outstore budget</th><th>Water turnover, Mar to Jun<small>2026 → 2027 goal</small></th></tr>`;
    let body = "";
    STATES.filter(st => list.some(s => s.st === st)).forEach(st => {
      const ss = list.filter(s => s.st === st);
      body += `<tr class="grp"><td colspan="7" style="--c:${SC[st]}">${st}</td></tr>`;
      ss.forEach(s => {
        const ao = aopOf(s), aok = ao.filter(x => x != null);
        const team = s.team ? `${s.team.join(" / ")}${s.hire ? `<small>${s.hire} still to hire</small>` : ""}` : `<span class="w27-muted">Not in the plan</span>`;
        const pools = [s.pools ? `${s.pools} pools to sign` : "", s.coaches ? `${s.coaches} coaches` : "", s.academies ? `Academies: ${esc(s.academies)}` : "", s.partners ? `<small>Now: ${esc(s.partners)}</small>` : ""].filter(Boolean).join("<br>");
        const inst = s.inmall != null ? (s.inmall ? inr(s.inmall) : "-") : `<small>${esc(s.instore || "-")}</small>`;
        const os = outSum(s), outCell = s.out ? `<b>${inr(os)}</b>${s.outStated && s.outStated !== os ? `<small>plan says ${inr(s.outStated)}</small>` : ""}${s.hoard ? `<small>${s.hoard} hoarding${s.hoard > 1 ? "s" : ""}</small>` : ""}` : `<span class="w27-muted">None in our files</span>`;
        const base = s.base || (s.goal ? s.goal / 1.25 : 0);
        const goal = s.goal ? `${RL(base)} → <b>${RL(s.goal)}</b>${s.base ? "" : "<small>2026 = goal / 1.25</small>"}` : `<span class="w27-muted">No goal in our files</span>`;
        body += `<tr><td><b>${esc(s.name)}</b><small>${esc(s.city)}</small></td><td>${team}</td>
          <td>${aok.length ? `<b>${aok.reduce((a, b) => a + b, 0)}</b><small>${ao.map(x => x == null ? "-" : x).join(" / ")}</small>` : `<span class="w27-muted">${s.aop ? "Outside the plan" : "-"}</span>`}</td>
          <td>${pools || "-"}</td><td>${inst}</td><td>${outCell}</td><td>${goal}</td></tr>`;
      });
      const g = ss.reduce((t, s) => t + (s.goal || 0), 0), b = ss.reduce((t, s) => t + (s.base || (s.goal ? s.goal / 1.25 : 0)), 0), o = ss.reduce((t, s) => t + outSum(s), 0);
      const ao = ss.reduce((t, s) => t + aopOf(s).reduce((a, x) => a + (x || 0), 0), 0);
      body += `<tr class="tot"><td><b>${st}</b></td><td></td><td><b>${ao}</b></td><td></td><td>${st === "Pune" ? inr(ss.reduce((t, s) => t + (s.inmall || 0), 0)) : ""}</td><td>${o ? `<b>${inr(o)}</b>` : "-"}</td><td>${g ? `${RL(b)} → <b>${RL(g)}</b>` : "-"}</td></tr>`;
    });
    $("#w27Stores").innerHTML = `<table class="y27-table w27-stores">${head}${body}</table>`;
    $("#w27StoresNote").innerHTML = "Teams: Pune from the Pune plan's human structure; Gujarat and MP from the Gujarat plan's human planning (full-time includes the department manager; names are not shown). Pools and coaches in Gujarat are budgets: ₹1 L of pool tie-ups per store (₹50,000 in Rajkot) and coaches at ₹5,000 a kit. Academies: the Swim Project's targets per city. Wakad's outstore lines add to ₹10.90 L; the plan says ₹10.70 L.";
  }

  /* ---------- money ---------- */
  function money() {
    const P = W.stores.filter(s => s.st === "Pune"), G = W.stores.filter(s => s.st === "Gujarat" && s.out);
    const lines = [["hoard", "Hoardings"], ["pools", "Pool tie-ups"], ["flyers", "Flyers"], ["infl", "Instagram influencers"], ["coach", "Coach kits"]];
    const tbl = (ss, title, extra) => {
      const used = lines.filter(([k]) => ss.some(s => s.out[k]));
      const tot = s => used.reduce((t, [k]) => t + (s.out[k] || 0), 0);
      return `<div class="panel w27-mcard"><h3 class="display-s">${title}</h3><div class="sb-wrap"><table class="y27-table w27-mt"><tr><th></th>${ss.map(s => `<th>${esc(s.name.replace(" and online", ""))}</th>`).join("")}<th>Total</th></tr>
        ${used.map(([k, n]) => `<tr><td>${n}</td>${ss.map(s => `<td>${s.out[k] ? inr(s.out[k]) : "-"}</td>`).join("")}<td><b>${inr(ss.reduce((t, s) => t + (s.out[k] || 0), 0))}</b></td></tr>`).join("")}
        <tr class="tot"><td><b>Outstore</b></td>${ss.map(s => `<td><b>${inr(tot(s))}</b></td>`).join("")}<td><b>${inr(ss.reduce((t, s) => t + tot(s), 0))}</b></td></tr>${extra || ""}</table></div></div>`;
    };
    const pIn = `<tr><td>In store and mall</td>${P.map(s => `<td>${s.inmall ? inr(s.inmall) : "-"}</td>`).join("")}<td><b>${inr(P.reduce((t, s) => t + s.inmall, 0))}</b></td></tr>
      <tr><td>Trainings</td>${P.map(() => `<td>₹5,000</td>`).join("")}<td><b>₹30,000</b></td></tr>`;
    const bar = (rows, max) => rows.map(([n, v]) => `<div class="y27-st w27-bar"><span>${esc(n)}</span><i style="--w:${v / max * 100}%;--c:var(--blue)"></i><b>${v ? inr(v) : "no budget"}</b></div>`).join("");
    const mg = W.merchGuj, gp = W.gisp;
    $("#w27Money").innerHTML = tbl(P, "Pune store plan", pIn)
      + `<p class="w27-note">Our sums from the plan's lines: outstore ₹47.51 L (the plan says ₹47.31 L, because Wakad is written as ₹10.70 L), in store and mall ₹5.34 L, trainings ₹30,000: ₹53.15 L in all. Plus a ₹1,999 swim kit per teammate.</p>`
      + tbl(G, "Gujarat store plan", `<tr><td>Hoardings</td><td colspan="${G.length + 1}">3D city hoarding, "Summer fun with water": no budget in the plan</td></tr>`)
      + `<div class="w27-mrow"><div class="panel w27-mcard"><h3 class="display-s">Gujarat merchandising<span class="lt">, Motera and Dumas Road</span></h3>${bar(mg, mg[0][1])}<p class="w27-note">₹1,61,750 in all. The summary table writes the entrance display as ₹49,821; its lines add to ₹49,812, which is what the total uses.</p></div>
        <div class="panel w27-mcard"><h3 class="display-s">Great Indian Swim Project<span class="lt">, ₹8 L, Nov 2026 to Apr 2027</span></h3>${bar(gp.activity, gp.activity[0][1])}<h4 class="w27-h4">The same ₹8 L by place</h4>${bar(gp.geo, gp.geo[1][1])}<p class="w27-note">Two views of one envelope, not added together. Targets: 3,000 sign-ups, 1,500 first swims, 600 repeat swimmers, 1,000 community members, 600 buyers, ₹15 L of sales traced to the programme (1.88x the spend; not ROI).</p></div></div>`;
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
    const Q = W.quarters[view];
    $("#w27CalTitle").innerHTML = `${Q.label}<span class="lt">, week by week${state === "all" ? "" : ", " + state}</span>`;
    $$("#w27St button").forEach(b => b.setAttribute("aria-pressed", b.dataset.s === state));
    if ((!location.hash || /^#(q426|q[1-4])$/.test(location.hash)) && location.hash !== "#" + view) history.replaceState(null, "", "#" + view);
    qbar(); calendar(); weekPanel(); ideas(); heat(); stores();
  }

  $$("#w27St button").forEach(b => b.addEventListener("click", () => { state = b.dataset.s; render(); }));
  const h = (location.hash.match(/^#(q426|q1|q2|q3|q4)$/) || [])[1];
  if (h) view = h;
  week = defWeek();
  hero(); legend(); money(); range(); render();
  // films: load and play only when on screen
  const gate = new IntersectionObserver(es => es.forEach(e => { const v = e.target; if (e.isIntersecting) { if (!v.src) v.src = v.dataset.src; v.play().catch(() => {}); } else v.pause(); }), { rootMargin: "120px" });
  $$("video[data-src]").forEach(v => { v.muted = true; gate.observe(v); });
})();
