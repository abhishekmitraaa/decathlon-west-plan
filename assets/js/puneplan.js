/* Pune marketing plan, November 2026 to March 2027, line by line. Source: data_recent_marketing_spends_pune_plan__.xlsx (sheet "BFS PUNE",
   10 Nov 2026). Amounts in rupees exactly as the sheet. ch = channel; camp = campaign it serves; q = quantity; d = dates; n = note.
   Also: the 2026 influencer tracker (user screenshot, 10 Nov 2026), and the marketing pyramid (the user's vision). */
window.PUNE_PLAN = {
  months: ["Nov 2026", "Dec 2026", "Jan 2027", "Feb 2027", "Mar 2027"],
  // month budgets = the sheet's "Total Budget" rows (user, 10 Nov 2026, fourth brief: Pune Nov ₹28,47,282 and Dec ₹29,62,282 are the total
  // advertising and marketing budget; the earlier ₹28 L / ₹30.15 L are superseded). Jan to Mar: ₹30,54,000 / ₹19,89,000 / ₹27,90,000.
  // March: the sheet's total is ₹29,39,000, but it includes a "New Year, New Moves" influencer line (17, ₹1,49,000, "2 to 17 Jan") copied
  // from January; the user removed it (10 Nov 2026), so March = the remaining lines, ₹27,90,000.
  totals: [2847282, 2962282, 3054000, 1989000, 2790000],
  channels: { ooh: ["Hoardings", "#3643BA"], aop: ["AOPs and free products", "#12A150"], ins: ["In-store comms", "#E0A100"], mall: ["In-mall", "#9AA2C8"],
    inf: ["Influencers", "#C2185B"], evt: ["Events", "#E8590C"], cont: ["Content: media vendor reels", "#0096C7"], boost: ["Social boost", "#6B4FBB"], fly: ["Flyers and coupon cards", "#5D6D7E"] },
  lines: [
    // November 2026: Black Friday (27-30 Nov) and Winter & Travel. Lines from data_recent_marketing_spends_pune_plan___1.xlsx (BFS PUNE, 10 Nov 2026, second copy)
    { m: 0, ch: "ooh", camp: "Winter & Travel", t: "Hoardings live", v: 935000, q: "7 hoardings" },
    { m: 0, ch: "mall", camp: "Black Friday", t: "In-mall comms", v: 170000, n: "NIBM 45,000, Amanora 45,000, SGS 75,000 (these add to 1,65,000)" },
    { m: 0, ch: "ins", camp: "Black Friday", t: "In-store comms, visible to customers", v: 497282, d: "whole city live from 23 Nov", n: "Amanora 83,000, SGS 1,44,283, Wakad 1,10,000, NIBM 50,000, Wagholi 1,50,000 (these add to 5,37,283)" },
    { m: 0, ch: "aop", camp: "AOPs", t: "AOPs, free products and IC", v: 625000, q: "22 AOPs", n: "Wakad 5 x 40,000, Wagholi 5 x 25,000, SGS 4, NIBM 4, Amanora 4 x 25,000" },
    { m: 0, ch: "inf", camp: "Black Friday", t: "Instagram influencers", v: 400000, q: "40 influencers", d: "21 to 28 Nov" },
    { m: 0, ch: "inf", camp: "Winter & Travel", t: "Instagram influencers", v: 100000, q: "10 influencers", d: "15 to 21 Nov", n: "first half of the 20 Winter & Travel influencers (₹2,00,000)" },
    { m: 0, ch: "boost", camp: "Black Friday", t: "Social media boost", v: 30000, q: "5 posts", n: "plus a countdown of 4 posts + 4 stories, 23 to 28 Nov (₹40,000 in the Black Friday table, not in the total)" },
    { m: 0, ch: "fly", camp: "Black Friday", t: "Coupon cards after billing: basket over ₹2,799 gets a product free", v: 70000, q: "35,000 cards", d: "handed out from 17 Nov" },
    { m: 0, ch: "evt", camp: "Kiprun", t: "Kiprun event", v: 20000 },
    // December 2026: Winter & Travel, Christmas sale 19-31 Dec
    { m: 1, ch: "ooh", camp: "Winter & Travel", t: "Hoardings live", v: 935000, q: "7 hoardings" },
    { m: 1, ch: "mall", camp: "Christmas sale", t: "In-mall comms", v: 165000, n: "NIBM 45,000, Amanora 45,000, SGS 75,000; December in-mall, credited to Christmas" },
    { m: 1, ch: "ins", camp: "Christmas sale", t: "In-store comms, visible to customers", v: 497282, d: "whole city live from 19 Dec", n: "Amanora 83,000, SGS 1,44,283, Wakad 1,10,000, NIBM 50,000, Wagholi 1,50,000 (these add to 5,37,283)" },
    { m: 1, ch: "aop", camp: "AOPs", t: "AOPs, free products and IC", v: 765000, q: "27 AOPs", n: "Wakad 6 x 40,000, Wagholi 6, SGS 5, NIBM 5, Amanora 5 x 25,000" },
    { m: 1, ch: "inf", camp: "Christmas sale", t: "Instagram influencers", v: 350000, q: "35 influencers", d: "19 to 23 Dec" },
    { m: 1, ch: "inf", camp: "Winter & Travel", t: "Instagram influencers", v: 100000, q: "10 influencers", d: "1 to 15 Dec", n: "second half of the 20; plus 7 on barter (₹50,000) and 10 influencer reels recycled as boosts (₹10,000): not in the month total" },
    { m: 1, ch: "boost", camp: "Christmas sale", t: "Social media boost", v: 30000, q: "10 posts around Christmas and Winter & Travel", n: "the Christmas table also writes 35,000 for the boost (in its quantity column, 19 to 23 Dec); the December total uses 30,000" },
    { m: 1, ch: "evt", camp: "Kiprun", t: "Kiprun event", v: 20000 },
    { m: 1, ch: "cont", camp: "Winter & Travel", t: "Media vendor", v: 100000 },
    // January 2027: Movement for All, clearance sale
    { m: 2, ch: "evt", camp: "Movement for All", t: "Partner event: yoga", v: 75000, q: "500 walk-ins expected" },
    { m: 2, ch: "evt", camp: "Movement for All", t: "Partner event: run", v: 75000, q: "400 walk-ins expected" },
    { m: 2, ch: "evt", camp: "Movement for All", t: "Partner event: gym, fitness, Zumba workout", v: 150000, q: "500 walk-ins expected" },
    { m: 2, ch: "ooh", camp: "Movement for All", t: "Hoardings", v: 525000, q: "5 hoardings" },
    { m: 2, ch: "aop", camp: "AOPs", t: "AOPs", v: 765000, q: "27 AOPs" },
    { m: 2, ch: "inf", camp: "Clearance sale", t: "Influencer campaign: clearance sale", v: 500000, q: "50 influencers", d: "dates TBD" },
    { m: 2, ch: "inf", camp: "Movement for All", t: "Influencer campaign: New Year, New Moves", v: 149000, q: "17 influencers", d: "2 to 17 Jan" },
    { m: 2, ch: "cont", camp: "Movement for All", t: "Media vendor", v: 100000, q: "17 reels on the Let's Play Pune page" },
    { m: 2, ch: "ins", camp: "Clearance sale", t: "In-store communication", v: 550000, n: "Amanora 83,000, SGS 1,44,283, Wakad 1,50,000, NIBM 50,000, Wagholi 1,50,000 (these add to 5,77,283, not 5,50,000)" },
    { m: 2, ch: "mall", camp: "Clearance sale", t: "In-mall comms", v: 165000 },
    // February 2027: new arrivals
    { m: 3, ch: "ooh", camp: "New arrivals", t: "Hoardings", v: 425000, q: "4 hoardings" },
    { m: 3, ch: "aop", camp: "AOPs", t: "AOPs", v: 765000, q: "27 AOPs" },
    { m: 3, ch: "inf", camp: "New arrivals", t: "Influencer campaign: new arrivals", v: 149000, q: "15 influencers", d: "24 Feb to 6 Mar" },
    { m: 3, ch: "cont", camp: "New arrivals", t: "Media vendor", v: 100000, q: "20 reels on the Let's Play Pune page" },
    { m: 3, ch: "ins", camp: "New arrivals", t: "In-store communication", v: 550000, n: "Amanora 83,000, SGS 1,44,283, Wakad 1,50,000, NIBM 50,000, Wagholi 1,50,000 (these add to 5,77,283, not 5,50,000)" },
    // March 2027: Women's Day, summer
    { m: 4, ch: "evt", camp: "Women's Day", t: "Women's Day weekend event", v: 150000, q: "800 walk-ins expected" },
    { m: 4, ch: "ooh", camp: "Summer", t: "Swimming hoardings: learn to swim, summer water", v: 725000, q: "7 hoardings", n: "summer goes strong on water sports" },
    { m: 4, ch: "aop", camp: "AOPs", t: "AOPs", v: 765000, q: "27 AOPs" },
    { m: 4, ch: "inf", camp: "Summer", t: "Influencer campaign: summer + summer camp", v: 500000, q: "50 influencers", d: "March to May" },
    { m: 4, ch: "cont", camp: "Summer", t: "Media vendor", v: 100000, q: "17 reels on the Let's Play Pune page" },
    { m: 4, ch: "ins", camp: "Summer", t: "In-store communication", v: 550000, n: "Amanora 83,000, SGS 1,44,283, Wakad 1,50,000, NIBM 50,000, Wagholi 1,50,000 (these add to 5,77,283, not 5,50,000)" }
  ],
  aopStores: { // monthly AOP budget per store (₹), Nov 2026 to Apr 2027
    head: ["Nov", "Dec", "Jan", "Feb", "Mar", "Apr"],
    rows: [["Wakad", 200000, 240000, 240000, 240000, 240000, 240000], ["Wagholi", 125000, 150000, 150000, 150000, 150000, 150000], ["SGS Mall", 100000, 125000, 125000, 125000, 125000, 125000], ["NIBM", 100000, 125000, 125000, 125000, 125000, 125000], ["Amanora", 100000, 125000, 125000, 125000, 125000, 125000]]
  },
  notes: [
    "Playground stores (Wagholi, Amanora, Wakad): do AOPs with coaching classes that use our facility, to raise the engagement rate. Boost 3 playground videos: \"Are you a coach looking for a facility and students? Decathlon can be the home of your classes.\"",
    "Swimming: at least 10 academies in each store's catchment by 20 Feb 2027."
  ],
  // the 2026 influencer tracker (Pune): content pieces, views, cost (₹), CPV
  tracker: [
    ["Movement Is For All", "1 to 31 Jan", 17, 1401400, 149000, "2 to 17 Jan"], ["Clearance (Jan)", "10 Jan to 15 Feb", 50, 3905989, 500000], ["New Arrivals", "24 Feb to 6 Mar", 15, 254400, 160000],
    ["Summer campaign", "6 to 15 Mar", 35, 1065288, 350000], ["Gudi Padwa", "16 to 22 Mar", 6, 1172371, 60000], ["April summer", "April", 40, 370000, 450000],
    ["April misc", "1 to 30 Apr", 1, 656447, 20000], ["May summer", "May", 40, 849835, 450000], ["Monsoon", "15 to 30 May", 15, 0, 150000], ["June misc: monsoon", "June", 40, 0, 400000],
    ["50th anniversary", "24 to 26 Jul", 18, 914409, 220040], ["Festive offer", "13 to 20 Oct", 15, 975400, 150000], ["Diwali", "Nov", 9, 0, 90000], ["Black Friday", "27 to 30 Nov", 50, 0, 500000],
    ["Winter", "Dec", 20, 0, 224000], ["Christmas", "Dec", 15, 0, 210040], ["Express delivery + digital", "", 60, 0, 600000], ["Playground", "", 30, 0, 300000]
  ],
  // influencer campaigns planned, Nov 2026 to May 2027 (Pune plan), for the timeline
  influencers: [
    { t: "Black Friday", s: "2026-11-21", e: "2026-11-28", n: 40, v: 400000, c: "#D6453D" },
    { t: "Winter & Travel (first 10)", s: "2026-11-15", e: "2026-11-21", n: 10, v: 100000, c: "#2E7D32" },
    { t: "Winter & Travel (next 10)", s: "2026-12-01", e: "2026-12-15", n: 10, v: 100000, c: "#2E7D32", x: "+7 on barter" },
    { t: "Christmas sale", s: "2026-12-19", e: "2026-12-23", n: 35, v: 350000, c: "#C2185B" },
    { t: "New Year, New Moves (Movement for All)", s: "2027-01-02", e: "2027-01-17", n: 17, v: 149000, c: "#E0A100" },
    { t: "Clearance sale (dates TBD; 2026 ran 10 Jan to 15 Feb)", s: "2027-01-10", e: "2027-02-15", n: 50, v: 500000, c: "#D6453D", tbd: 1 },
    { t: "New arrivals", s: "2027-02-24", e: "2027-03-06", n: 15, v: 149000, c: "#6B4FBB" },
    { t: "Summer + summer camp", s: "2027-03-01", e: "2027-05-31", n: 50, v: 500000, c: "#0096C7" }
  ]
};

/* The marketing pyramid: the user's vision (10 Nov 2026), built on the "Building the sport ecosystem" circle (DECATHLON Play). */
window.MKT_PYRAMID = {
  top: { h: "Make noise", s: "One KILL strategy a quarter", p: "Disruptive marketing: one idea the whole city talks about, built on everything below it. Not ten ideas: one.",
    ideas: ["Nov-Dec: Black Friday morning, doors open after a city run", "Q1: Movement for All, the city moves for 31 days", "Summer: The City Needs a Swim, a pool takeover"] },
  mid: { h: "Be seen", s: "Reach", items: ["Hoardings", "Social media", "Influencers"], p: "Only once the base is ready: people who see us must find a store, a place to play and a reason to come." },
  base: { h: "The basics", s: "Every month, every store", items: ["In-store community", "AOPs", "One flagship event a month", "The right team", "In-store comms campaigns", "Festive moments"], p: "Earn the right to be seen: the store is the heart of sport." },
  circle: { core: "Store: the heart of sport", nodes: [
    { h: "In-store", items: ["IP events: Sports Utsav, Yoga", "Store campaigns", "Playground occupancy", "Coaching: expert sessions"] },
    { h: "Community", items: ["Active local sports groups", "Primary sports: running and cycling"] },
    { h: "Partnerships", items: ["Local event tie-ups", "Tournament organisers", "Areas of practice (AOPs)", "Other catchment collaborations"] } ] }
};

/* Renderers shared by november.html and plan2027.html */
(() => {
  const esc = s => String(s).replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
  const inr = v => "₹" + Math.round(v).toLocaleString("en-IN");
  const L = r => { const l = r / 1e5; return l >= 100 ? `₹${(l / 100).toFixed(2)} Cr` : `₹${l.toFixed(2)} L`; };
  const P = window.PUNE_PLAN, MP = window.MKT_PYRAMID;

  // the pyramid
  window.renderPyramid = el => {
    if (!el) return;
    el.innerHTML = `<div class="mp-wrap">
      <div class="mp-mount" role="img" aria-label="Marketing pyramid: the basics at the base, then reach, then one kill strategy at the top">
        <div class="mp-tier t3"><span class="mp-flag">1 KILL</span><b>${MP.top.h}</b><small>${MP.top.s}</small></div>
        <div class="mp-tier t2"><b>${MP.mid.h}</b><small>${MP.mid.items.join("  +  ")}</small></div>
        <div class="mp-tier t1"><b>${MP.base.h}</b><small>${MP.base.items.join("  +  ")}</small></div>
        <div class="mp-ground"><i></i>${MP.circle.core}</div>
      </div>
      <div class="mp-read">
        <div class="mp-step s3"><h4><em>3</em>${MP.top.h}: ${MP.top.s.toLowerCase()}</h4><p>${esc(MP.top.p)}</p><ul>${MP.top.ideas.map(x => `<li>${esc(x)}</li>`).join("")}</ul></div>
        <div class="mp-step s2"><h4><em>2</em>${MP.mid.h}: ${MP.mid.items.join(", ").toLowerCase()}</h4><p>${esc(MP.mid.p)}</p></div>
        <div class="mp-step s1"><h4><em>1</em>${MP.base.h}: ${MP.base.s.toLowerCase()}</h4><p>${esc(MP.base.p)}</p><ul class="mp-chips">${MP.base.items.map(x => `<li>${esc(x)}</li>`).join("")}</ul></div>
        <div class="mp-loop"><h4>The engine under the base</h4><div class="mp-nodes">${MP.circle.nodes.map(n => `<div><b>${n.h}</b><span>${n.items.map(esc).join(", ")}</span></div>`).join("<i aria-hidden=\"true\">→</i>")}</div><p>In-store brings people to community, community feeds partnerships, partnerships bring people back to the store.</p></div>
      </div></div>`;
  };

  // Pune plan, month by month (months = indexes into P.months)
  window.renderPunePlan = (el, months) => {
    if (!el) return;
    const ch = P.channels;
    const cards = months.map(m => {
      const ls = P.lines.filter(x => x.m === m), sum = ls.reduce((a, b) => a + b.v, 0);
      const byCh = Object.keys(ch).map(k => [k, ls.filter(x => x.ch === k).reduce((a, b) => a + b.v, 0)]).filter(x => x[1]);
      return `<article class="pp-month"><header><h4>${P.months[m]}</h4><b>${inr(P.totals[m])}</b>${sum !== P.totals[m] ? `<small>the lines add to ${inr(sum)}</small>` : ""}</header>
        <div class="pp-bar">${byCh.map(([k, v]) => `<span style="flex:${v};--c:${ch[k][1]}" title="${ch[k][0]}: ${inr(v)}"></span>`).join("")}</div>
        <ul>${ls.map(x => `<li><i style="--c:${ch[x.ch][1]}"></i><div><b>${esc(x.t)}</b><small>${esc(x.camp)}${x.q ? ", " + esc(x.q) : ""}${x.d ? ", " + esc(x.d) : ""}</small>${x.n ? `<em>${esc(x.n)}</em>` : ""}</div><span>${inr(x.v)}</span></li>`).join("")}</ul></article>`;
    }).join("");
    const all = P.lines.filter(x => months.includes(x.m)), tot = months.reduce((a, m) => a + P.totals[m], 0);
    const byCh = Object.keys(ch).map(k => [k, all.filter(x => x.ch === k).reduce((a, b) => a + b.v, 0)]).filter(x => x[1]).sort((a, b) => b[1] - a[1]);
    const mx = byCh[0][1];
    el.innerHTML = `<div class="pp-sum"><div><b>${L(tot)}</b><span>Pune, ${P.months[months[0]]}${months.length > 1 ? " to " + P.months[months[months.length - 1]] : ""}</span></div>
      <div class="pp-ch">${byCh.map(([k, v]) => `<div><span><i style="--c:${ch[k][1]}"></i>${ch[k][0]}</span><div><i style="--w:${v / mx * 100}%;--c:${ch[k][1]}"></i></div><b>${L(v)}</b><em>${(v / tot * 100).toFixed(0)}%</em></div>`).join("")}</div></div>
      <div class="pp-months" style="--n:${months.length}">${cards}</div>`;
  };

  // AOP money per Pune store
  window.renderPuneAops = (el, cols) => {
    if (!el) return;
    const A = P.aopStores;
    const tot = cols.map(i => A.rows.reduce((a, r) => a + r[i + 1], 0));
    el.innerHTML = `<table class="y27-table pp-aop"><thead><tr><th>Store</th>${cols.map(i => `<th>${A.head[i]}</th>`).join("")}<th>Total</th></tr></thead><tbody>
      ${A.rows.map(r => `<tr><td><b>${r[0]}</b></td>${cols.map(i => `<td>${inr(r[i + 1])}<small>${r[i + 1] / (r[0] === "Wakad" ? 40000 : 25000)} AOPs</small></td>`).join("")}<td><b>${inr(cols.reduce((a, i) => a + r[i + 1], 0))}</b></td></tr>`).join("")}
      <tr class="tot"><td><b>Pune</b></td>${tot.map((v, k) => `<td><b>${inr(v)}</b><small>${A.rows.reduce((a, r) => a + r[cols[k] + 1] / (r[0] === "Wakad" ? 40000 : 25000), 0)} AOPs</small></td>`).join("")}<td><b>${inr(tot.reduce((a, b) => a + b, 0))}</b></td></tr></tbody></table>`;
  };

  // influencer timeline (Gantt) between two dates, plus the 2026 tracker
  window.renderInfluencers = (el, from, to, withTracker) => {
    if (!el) return;
    const d = s => new Date(s + "T00:00:00Z").getTime(), a = d(from), b = d(to), span = b - a + 864e5;
    const MON = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    const ticks = []; { const x = new Date(a); x.setUTCDate(1); while (x.getTime() <= b) { if (x.getTime() >= a) ticks.push(x.getTime()); x.setUTCMonth(x.getUTCMonth() + 1); } }
    const rows = P.influencers.filter(r => d(r.e) >= a && d(r.s) <= b);
    const tN = rows.reduce((s, r) => s + r.n, 0), tV = rows.reduce((s, r) => s + r.v, 0);
    let h = `<div class="pi-head"><div><b>${tN}</b><span>influencers planned (Pune)</span></div><div><b>${L(tV)}</b><span>influencer budget</span></div></div>
      <div class="pi-gantt"><div class="pi-axis">${ticks.map(t => `<span style="left:${(t - a) / span * 100}%">${MON[new Date(t).getUTCMonth()]}</span>`).join("")}</div>
      ${rows.map(r => { const s = Math.max(d(r.s), a), e = Math.min(d(r.e) + 864e5, b + 864e5);
        return `<div class="pi-row"><div class="pi-lab"><b>${esc(r.t)}</b><small>${r.n} influencers${r.x ? " " + esc(r.x) : ""}, ${L(r.v)}</small></div><div class="pi-track">${ticks.map(t => `<i style="left:${(t - a) / span * 100}%"></i>`).join("")}<span class="${r.tbd ? "tbd" : ""}" style="left:${(s - a) / span * 100}%;width:${(e - s) / span * 100}%;--c:${r.c}" title="${esc(r.t)}: ${r.s} to ${r.e}"></span></div></div>`; }).join("")}</div>`;
    if (withTracker) {
      const T = P.tracker, tv = T.reduce((s, r) => s + r[3], 0), tc = T.reduce((s, r) => s + r[4], 0), tn = T.reduce((s, r) => s + r[2], 0);
      const done = T.filter(r => r[3] > 0), dv = done.reduce((s, r) => s + r[3], 0), dc = done.reduce((s, r) => s + r[4], 0);
      h += `<details class="pi-trk"><summary><b>What worked in 2026: the Pune influencer tracker</b><span>${tn} pieces of content, ${L(tc)}; ${(dv / 1e5).toFixed(1)} lakh views on the campaigns with results, ₹${(dc / dv).toFixed(2)} a view</span></summary>
        <div class="sb-wrap"><table class="y27-table pi-t"><thead><tr><th>Campaign</th><th>Dates</th><th>Content</th><th>Views</th><th>Cost</th><th>Cost per view</th></tr></thead><tbody>
        ${T.map(r => `<tr><td><b>${esc(r[0])}</b></td><td>${esc(r[1])}${r[5] ? `<small>live ${esc(r[5])}</small>` : ""}</td><td>${r[2]}</td><td>${r[3] ? r[3].toLocaleString("en-IN") : "-"}</td><td>${inr(r[4])}</td><td>${r[3] ? "₹" + (r[4] / r[3]).toFixed(2) : "-"}</td></tr>`).join("")}
        <tr class="tot"><td><b>All</b></td><td></td><td><b>${tn}</b></td><td><b>${tv.toLocaleString("en-IN")}</b></td><td><b>${inr(tc)}</b></td><td></td></tr></tbody></table></div>
        <p class="pi-note">Cheapest views: Gudi Padwa (₹0.05) and April misc (₹0.03); Movement Is For All ₹0.11 and the January clearance ₹0.13. Dearest: new arrivals (₹0.63) and May summer (₹0.53). Rows without views had no results logged yet.</p></details>`;
    }
    el.innerHTML = h;
  };
})();
