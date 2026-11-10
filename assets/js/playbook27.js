/* 2027 page, part 2: the season by state (weather, school, mood), the Q1 marketing playbook (budget by campaign, sport and channel,
   with what goes on hoardings, influencers, social and boosts), AOPs store by store, and Decathlon films from other countries.
   Data: BUDGET27, SEASON27, VIDEOS27 (budget27.js), AOP_PLAN (data.js), AOP_NAMES (aopnames.js), SPORT_TO_2026, SPORTS27 (sports27.js). */
(() => {
  const $ = (s, r = document) => r.querySelector(s), $$ = (s, r = document) => [...r.querySelectorAll(s)];
  const esc = s => String(s).replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
  const B = window.BUDGET27, SE = window.SEASON27, V = window.VIDEOS27, AOP = window.AOP_PLAN || [], AN = window.AOP_NAMES || {};
  const SP = window.SPORTS27, TO = window.SPORT_TO_2026, D = window.DATA;
  const ALLST = ["Pune", "Gujarat", "MP"], STATES = [...ALLST], SC = { Pune: "var(--pune)", Gujarat: "var(--guj)", MP: "var(--mp)" };
  const FULL = ["January", "February", "March", "April", "May", "June"], MON = ["Jan", "Feb", "Mar", "Apr", "May", "Jun"];
  const L = v => v >= 100 ? `₹${(v / 100).toFixed(2)} Cr` : `₹${v.toFixed(2)} L`;
  const inr = v => "₹" + Math.round(v).toLocaleString("en-IN");
  const CAMP = Object.fromEntries(B.campaigns.map(c => [c.id, c]));

  /* ---------- lazy films: our own mp4s load and play only on screen; YouTube only on click ---------- */
  const gate = new IntersectionObserver(es => es.forEach(e => {
    const v = e.target;
    if (e.isIntersecting) { if (!v.src && v.dataset.src) v.src = v.dataset.src; v.play?.().catch(() => {}); } else v.pause?.();
  }), { rootMargin: "120px" });
  const film = (name, label) => `<div class="pb27-film" data-exp-poster="assets/posters/${name}.jpg"><video muted loop playsinline preload="none" poster="assets/posters/${name}.jpg" data-src="assets/videos/${name}.mp4" aria-label="${esc(label)}"></video></div>`;
  const yt = id => { const v = V[id] || {}; return `<button type="button" class="yt27" data-yt="${id}" aria-label="Play: Decathlon ${esc(v.c || "")}, ${esc(v.t || "")}"><img src="https://i.ytimg.com/vi/${id}/hqdefault.jpg" alt="" loading="lazy" crossorigin="anonymous"><i></i><span><b>Decathlon ${esc(v.c || "")}</b>${esc(v.t || "")}</span></button>`; };
  const wire = root => {
    $$("video[data-src]", root).forEach(v => { v.muted = true; gate.observe(v); });
    $$(".yt27", root).forEach(b => b.addEventListener("click", () => {
      const f = document.createElement("iframe");
      f.src = `https://www.youtube-nocookie.com/embed/${b.dataset.yt}?autoplay=1&rel=0`;
      f.allow = "autoplay; encrypted-media; picture-in-picture"; f.allowFullscreen = true; f.title = b.getAttribute("aria-label");
      f.className = "yt27-frame"; b.replaceWith(f);
    }));
  };

  /* ---------- the season, state by state ---------- */
  let view = window.Y27VIEW || "q1";
  const QM = { q1: [0, 1, 2], q2: [3, 4, 5], h1: [0, 1, 2, 3, 4, 5] };
  function season() {
    const ms = QM[view] || QM.q1;
    $("#y27SeasonTitle").innerHTML = `${view === "h1" ? "January to June" : view.toUpperCase() + " 2027"}<span class="lt"> in each state: the weather, the kids, the mood</span>`;
    $("#y27Season").innerHTML = STATES.map(st => {
      const S = SE[st];
      return `<article class="se27" style="--c:${SC[st]}">
        <div class="se27-top">${film(S.film, st + " film")}<div class="se27-name"><h3>${st}</h3><span>${esc(S.city)}</span></div></div>
        ${ms.map(m => { const x = S.months[m];
          return `<div class="se27-m"><div class="se27-when"><b>${FULL[m]}</b><span class="se27-temp" title="Typical high ${x.hi}°C, low ${x.lo}°C"><i style="--lo:${(x.lo - 5) / 40 * 100}%;--hi:${(x.hi - 5) / 40 * 100}%;--h:${x.hi}"></i><em>${x.lo}° to ${x.hi}°C</em></span></div>
            <p class="se27-sky">${esc(x.sky)}</p>
            <p><b>Kids</b>${esc(x.kids)}</p>
            <p class="se27-us"><b>For us</b>${esc(x.us)}</p></div>`; }).join("")}
      </article>`;
    }).join("");
    wire($("#y27Season"));
  }

  /* ---------- Q1 playbook ---------- */
  let pst = window.Y27REGION || "West", tab = 0;
  function overview() {
    const A = B.alloc(pst);
    const segs = m => B.campaigns.filter(c => A.camp[c.id][m] > 0).map(c => {
      const v = A.camp[c.id][m], p = v / A.month[m] * 100;
      return `<span style="width:${p}%;--c:${c.color};--tx:${c.ink}" title="${FULL[m]}: ${esc(c.name)}, ${L(v)} (${Math.round(p)}%)"><b>${p >= 14 ? esc(c.name.split(":")[0]) : ""}</b>${p >= 9 ? `<em>${L(v)}</em>` : ""}</span>`;
    }).join("") + (A.unsplit[m] > 0 ? (() => { const p = A.unsplit[m] / A.month[m] * 100; return `<span style="width:${p}%;--c:#E3E6EF;--tx:#1C1E33" title="${FULL[m]}: Gujarat and MP, not split by campaign, ${L(A.unsplit[m])}"><b>${p >= 14 ? (pst === "West" ? "Gujarat + MP: not split" : "Not split by campaign") : ""}</b>${p >= 9 ? `<em>${L(A.unsplit[m])}</em>` : ""}</span>`; })() : "");
    const uns = A.unsplit.reduce((a, b) => a + b, 0);
    const used = B.campaigns;
    const sportRows = SP.sports.filter(s => pst === "West" || s.where.includes(pst)).map(s => {
      const bud = A.sport[s.id] || 0;
      const sts = pst === "West" ? STATES : [pst];
      const sale = [0, 1, 2].reduce((t, m) => t + sts.reduce((a, x) => a + (TO[s.id][x].in[m] || 0) + (TO[s.id][x].on[m] || 0), 0), 0);
      const all = [0, 1, 2].reduce((t, m) => t + sts.reduce((a, x) => a + (TO.all[x].in[m] || 0) + (TO.all[x].on[m] || 0), 0), 0);
      return { s, bud, bs: A.split ? bud / A.split * 100 : 0, ts: sale / all * 100 };
    }).filter(r => r.bud > 0 || r.ts > 0);
    const notSport = A.camp.clr.reduce((a, b) => a + b, 0);
    const estTxt = pst === "Pune" ? "Pune's spend plan (BFS PUNE), line by line: every rupee below is a line in the sheet, under the campaign it pays for, in its month." : pst === "West" ? "Pune: its spend plan, line by line, campaign by campaign. Gujarat and MP: only their 2027 month totals are in our files (ultimate data sheet), so their money is shown as one block, not split by campaign." : `${pst}: only the 2027 month totals are in our files (ultimate data sheet). There is no ${pst} campaign plan yet, so nothing is split by campaign: the campaigns below show Pune's plan.`;
    const maxS = Math.max(...sportRows.map(r => Math.max(r.bs, r.ts)));
    $("#pb27Over").innerHTML = `
      <div class="pb27-ohead"><div><h3 class="display-s">${L(A.total)}<span class="lt"> for Q1, ${pst === "West" ? "all three states" : pst}</span></h3>
        <p>${estTxt}</p></div></div>
      <div class="pb27-months">${[0, 1, 2].map(m => `<div class="pb27-mrow"><div class="pb27-mlab"><b>${FULL[m]}</b><span>${L(A.month[m])}</span></div><div class="pb27-bar">${segs(m)}</div></div>`).join("")}</div>
      <div class="pb27-key">${used.filter(c => A.camp[c.id].some(v => v > 0)).map(c => `<span><i style="--c:${c.color}"></i>${esc(c.name)} <b>${L(A.camp[c.id].reduce((a, b) => a + b, 0))}</b></span>`).join("")}${uns ? `<span><i style="--c:#E3E6EF"></i>${pst === "West" ? "Gujarat + MP, not split by campaign" : "Not split by campaign"} <b>${L(uns)}</b></span>` : ""}</div>
      <div class="pb27-two">
        <div><h4>Sport by sport: share of the Q1 budget vs share of what we sell</h4>
          ${sportRows.map(r => `<div class="pb27-sp"><span><i style="--c:${r.s.color}"></i>${r.s.name}</span><div><i class="b" style="--w:${r.bs / maxS * 100}%;--c:${r.s.color}"></i><i class="t" style="--w:${r.ts / maxS * 100}%"></i></div><b>${L(r.bud)}</b><em>${r.bs.toFixed(0)}% / ${r.ts.toFixed(0)}%</em></div>`).join("")}
          <p class="pb27-note"><i class="b"></i>Budget share${uns ? " (of Pune's plan)" : ""} <i class="t"></i>Turnover share, Q1 2026 (in-store + online). How lines are credited: Movement for All to fitness; AOPs to every sport by its 2026 turnover that month; new arrivals, Women's Day and summer split across their sports. Not credited to a sport: the clearance sale, ${L(notSport)}.</p></div>
        <div><h4>Where the money goes</h4>
          ${A.split ? B.channels.filter(([k]) => A.channel[k] > 0).sort((x, y) => A.channel[y[0]] - A.channel[x[0]]).map(([k, n]) => { const v = A.channel[k], p = v / A.split * 100; return `<div class="pb27-ch"><span>${n}</span><div><i style="--w:${p / 35 * 100}%"></i></div><b>${L(v)}</b><em>${p.toFixed(0)}%</em></div>`; }).join("") : `<p class="pb27-note">No channel plan for ${pst} in our files yet.</p>`}
          <p class="pb27-note">Pune's real Q1 lines${uns ? "; Gujarat and MP have no channel plan in our files" : ""}. The Pune plan has no paid digital line: MarCom runs paid digital centrally.</p></div>
      </div>`;
  }
  function panel() {
    const A0 = B.alloc(pst), A = A0.split ? A0 : B.alloc("Pune"), WA = B.alloc("West"); // Gujarat, MP: no campaign plan yet, so the campaigns show Pune's
    const list = $("#pb27Tabs"), pn = $("#pb27Panel");
    list.innerHTML = B.campaigns.map((c, i) => `<button type="button" class="sw-tab pb27-tab" role="tab" id="pbt${i}" aria-selected="${i === tab}" aria-controls="pb27Panel" data-i="${i}" style="--c:${c.color}"><span><i></i>${esc(c.name)}</span><small>${L(A.camp[c.id].reduce((a, b) => a + b, 0))}</small></button>`).join("");
    const c = B.campaigns[tab], M = B.media[c.id] || {}, tot = A.camp[c.id].reduce((a, b) => a + b, 0);
    const credited = SP.sports.map(s => ({ s, v: A.campSport[c.id][s.id] || 0 }));
    const cr = credited.filter(r => r.v > 0.005);
    const media = `${M.video ? film(M.video, c.name) : ""}${(M.img || []).slice(0, M.video ? 1 : 2).map(f => `<img src="assets/img/${f}" alt="" loading="lazy">`).join("")}`;
    pn.setAttribute("aria-labelledby", "pbt" + tab);
    pn.style.setProperty("--c", c.color);
    pn.innerHTML = `<div class="sp-hero"><div class="sp-media ${M.contain ? "contain" : ""}">${media}</div>
        <div class="sp-copy"><span class="pb27-when">${esc(c.when)}</span><h3>${esc(c.name)}</h3>
          <div class="pb27-pm">${[0, 1, 2].map(m => `<span class="${A.camp[c.id][m] ? "" : "off"}"><b>${A.camp[c.id][m] ? L(A.camp[c.id][m]) : "-"}</b>${MON[m]}${A.camp[c.id][m] ? `, of ${L(A.month[m] - A.unsplit[m])} Pune` : ""}</span>`).join("")}</div>
          ${cr.length ? `<div class="pb27-cr"><h4>Money credited to</h4>${cr.map(r => `<span style="--c:${r.s.color}"><i></i>${r.s.name} <b>${L(r.v)}</b></span>`).join("")}</div>` : `<div class="pb27-cr"><h4>Not a sport</h4><span>Commercial moment: every sport sells in it</span></div>`}
        </div></div>
      <div class="sp-stats">${(pst === "West" ? [["West", WA], ...STATES.map(s => [s, B.alloc(s)])] : [[pst, A0]]).map(([n, X]) => `<div><b>${X.split ? L(X.camp[c.id].reduce((a, b) => a + b, 0)) : "-"}</b><span>${n === "Pune" ? "Pune, spend plan" : n === "West" ? "West = Pune's plan" : n + ": no campaign plan in our files"}</span></div>`).join("")}</div>
      <div class="pb27-plan">
        ${c.pune ? `<div class="pb27-pune"><b>Pune, from the spend plan</b><p>${esc(c.pune)}</p></div>` : ""}
        <div class="pb27-blocks">
          <div><h4><i class="ic h"></i>On the hoardings</h4><p>${esc(c.hoard)}</p></div>
          <div><h4><i class="ic i"></i>Influencers</h4><p>${esc(c.inf)}</p></div>
          <div><h4><i class="ic s"></i>Social content</h4><p>${esc(c.social)}</p></div>
          <div><h4><i class="ic b"></i>How we boost</h4><p>${esc(c.boost)}</p></div>
        </div>
        <h4 class="pb27-h4">The money by channel${pst === "West" ? "" : ", " + pst}</h4>
        <div class="pb27-mix">${B.channels.filter(([k]) => A.campCh[c.id][k] > 0).map(([k, n]) => { const v = A.campCh[c.id][k], p = Math.round(v / tot * 100); return `<span style="flex:${v}" title="${n}: ${p}%, ${L(v)}"><b>${n.split(":")[0]}</b><em>${p}%, ${L(v)}</em></span>`; }).join("")}</div>
        ${(M.yt || []).length ? `<h4 class="pb27-h4">Seen elsewhere: Decathlon films to borrow from</h4><div class="pb27-yt">${M.yt.map(id => `<div>${yt(id)}<p>${esc((V[id] || {}).w || "")}</p></div>`).join("")}</div>` : ""}
      </div>`;
    $$(".pb27-tab", list).forEach(b => b.addEventListener("click", () => { tab = +b.dataset.i; panel(); }));
    wire(pn);
  }

  /* ---------- AOPs store by store ---------- */
  function aops() {
    const cityOf = s => B.storeCity[s] || "";
    const rows = STATES.map(st => {
      const ss = AOP.filter(a => a.state === st);
      const body = ss.map(a => {
        const q1 = a.months.slice(2, 5), q2 = a.months.slice(5, 8), mix = (B.cityMix[cityOf(a.store)] || {}).mix || [];
        const s1 = q1.reduce((x, y) => x + y, 0), s2 = q2.reduce((x, y) => x + y, 0);
        return `<tr><td><b>${esc(a.store)}</b><small>${esc(cityOf(a.store))}</small></td><td>${a.live ?? "-"}</td>
          ${q1.map(v => `<td class="n q1">${v}</td>`).join("")}<td class="n q1 s"><b>${s1}</b></td>
          ${q2.map(v => `<td class="n">${v}</td>`).join("")}<td class="n s"><b>${s2}</b></td>
          <td class="n">${a.total}</td><td class="n">${inr(a.cost)}</td><td class="n"><b>${inr(s1 * a.cost)}</b></td>
          <td><span class="aop27-mix">${mix.length ? `Travel ${mix[0]}, gym ${mix[1]}, yoga ${mix[2]}, racket ${mix[3]}` : "-"}</span></td></tr>`;
      }).join("");
      const t = k => ss.reduce((x, a) => x + a.months.slice(k, k + 3).reduce((p, q) => p + q, 0), 0);
      const cost = ss.reduce((x, a) => x + a.months.slice(2, 5).reduce((p, q) => p + q, 0) * a.cost, 0);
      return `<tr class="grp"><td colspan="14" style="--c:${SC[st]}">${st}</td></tr>${body}
        <tr class="tot"><td><b>${st}</b></td><td>${ss.reduce((x, a) => x + (a.live || 0), 0)}</td><td colspan="3"></td><td class="n"><b>${t(2)}</b></td><td colspan="3"></td><td class="n"><b>${t(5)}</b></td><td class="n">${ss.reduce((x, a) => x + a.total, 0)}</td><td></td><td class="n"><b>${inr(cost)}</b></td><td></td></tr>`;
    }).join("");
    $("#aop27Table").innerHTML = `<table class="y27-table aop27"><thead><tr><th>Store</th><th>Live now</th><th>Jan</th><th>Feb</th><th>Mar</th><th>Q1</th><th>Apr</th><th>May</th><th>Jun</th><th>Q2</th><th>Nov 26 to Oct 27</th><th>Cost per AOP</th><th>Q1 cost</th><th>2027 mix per store (slide)</th></tr></thead><tbody>${rows}</tbody></table>`;
    $("#aop27Names").innerHTML = Object.entries(AN).map(([store, list]) => `<details class="aop27-d"><summary><b>${esc(store)}</b><span>${list.length} practice places tied up</span></summary>
      <div class="sb-wrap"><table class="y27-table aop27n"><thead><tr><th>Practice place</th><th>Sport</th><th>Area</th><th>Partnership</th></tr></thead><tbody>${list.map(r => `<tr><td><b>${esc(r[0])}</b></td><td>${esc(r[1])}</td><td>${esc(r[2])}</td><td>${esc(r[3] || "-")}</td></tr>`).join("")}</tbody></table></div></details>`).join("");
  }

  /* ---------- films from other countries ---------- */
  function inspire() {
    $("#y27Films").innerHTML = Object.keys(V).map(id => `<article class="ins27">${yt(id)}<p><span class="ins27-c">${esc(V[id].c)}</span>${esc(V[id].w)}</p></article>`).join("");
    wire($("#y27Films"));
  }

  document.addEventListener("y27view", e => { view = e.detail; season(); });
  // Sports Utsav 2026 (Sports Utsav 26 master deck, slide 81): participants planned (piloting) vs realised, per store
  const SU = [["Wagholi", "Pune", 910, 2935], ["Indore", "MP", 860, 2169], ["Bhopal", "MP", 680, 1934], ["Dumas Road", "Gujarat", 700, 1782], ["Motera", "Gujarat", 1480, 1337],
    ["NIBM", "Pune", 550, 1146], ["Wakad", "Pune", 1060, 1064], ["Nexus", "Gujarat", 2200, 958], ["Baroda", "Gujarat", 1790, 956], ["Amanora", "Pune", 1030, 711],
    ["SGS Mall", "Pune", 950, 668], ["Rajkot", "Gujarat", 380, 311], ["Gwalior", "MP", 300, 275]];
  function utsav() {
    if (!$("#suStores")) return;
    const SR = SU.filter(r => STATES.includes(r[1]));
    const mx = Math.max(...SR.map(r => r[3])), pl = SR.reduce((a, r) => a + r[2], 0), pd = SR.reduce((a, r) => a + r[3], 0), best = [...SR].sort((a, b) => b[3] / b[2] - a[3] / a[2])[0];
    const nf = n => n.toLocaleString("en-IN");
    $("#suKpis").innerHTML = [[nf(pd), `people played in our ${SR.length} stores${pst === "West" ? "" : ", " + pst}`], [Math.round(pd / pl * 100) + "%", `of the ${nf(pl)} we planned`], ...(pst === "West" ? [["55", "activations: 12 runs, 12 rides, 12 tournaments, 6 experiences, 13 challenges"]] : []), [Math.round(best[3] / best[2] * 100) + "%", `${best[0]}: ${nf(best[3])} against ${nf(best[2])} planned`]].map(([b, s]) => `<div><b>${b}</b><span>${s}</span></div>`).join("");
    $("#suStores").innerHTML = `<table class="y27-table su-t"><thead><tr><th>Store</th><th>Planned</th><th>Played</th><th></th><th>Hit</th></tr></thead><tbody>${SR.map(r => `<tr><td><b>${r[0]}</b><small>${r[1]}</small></td><td>${r[2].toLocaleString("en-IN")}</td><td><b>${r[3].toLocaleString("en-IN")}</b></td><td class="bar"><i style="--w:${r[3] / mx * 100}%;--c:${SC[r[1]]}"></i><i class="p" style="left:${r[2] / mx * 100}%"></i></td><td class="${r[3] >= r[2] ? "up" : "dn"}">${Math.round(r[3] / r[2] * 100)}%</td></tr>`).join("")}</tbody></table>`;
  }
  document.addEventListener("y27region", e => {
    pst = e.detail; STATES.splice(0, STATES.length, ...(pst === "West" ? ALLST : [pst]));
    season(); overview(); panel(); aops(); utsav();
  });
  if (pst !== "West") STATES.splice(0, STATES.length, pst);
  utsav(); season(); overview(); panel(); aops(); inspire();
  window.renderPyramid?.($("#mktPyramid"));
  window.renderPunePlan?.($("#pb27Pune"), [2, 3, 4]);
  window.renderPuneAops?.($("#pb27PuneAops"), [2, 3, 4, 5]);
  window.renderInfluencers?.($("#pb27Infl"), "2027-01-01", "2027-03-31", false); // Q1 only (user, 10 Nov 2026)
  $("#pb27Tabs").addEventListener("keydown", e => {
    if (!["ArrowDown", "ArrowUp", "ArrowLeft", "ArrowRight"].includes(e.key)) return;
    e.preventDefault();
    tab = (tab + (e.key === "ArrowDown" || e.key === "ArrowRight" ? 1 : -1) + B.campaigns.length) % B.campaigns.length;
    panel(); $(`#pbt${tab}`)?.focus();
  });
})();
