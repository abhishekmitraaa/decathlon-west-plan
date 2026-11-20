/* Renders mission2027.html from window.MISSION27 (assets/js/mission27.js, generated from the Mission 2027 workbook). */
(() => {
  const M = window.MISSION27, el = document.getElementById("msBody");
  if (!M || !el) return;
  const esc = s => String(s ?? "").replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
  const br = s => esc(s).replace(/\n/g, "<br>");
  const prio = p => `<span class="mx-prio ${p === "Must win" ? "mw" : p === "Important" ? "im" : "co"}">${esc(p)}</span>`;
  const howList = h => `<ol class="mx-how">${String(h || "").split("\n").filter(Boolean).map(x => `<li>${esc(x.replace(/^\d+\/\s*/, ""))}</li>`).join("")}</ol>`;
  const SEC_C = { DIGITAL: "dig", MARKETING: "mkt", TRAINING: "trn", "PEOPLE AND WAY OF WORKING": "ppl" };
  const head = (id, title, sub) => `<header class="sec-head mx-head" id="${id}"><h2 class="display-s">${title}</h2>${sub ? `<p class="kol-sub">${sub}</p>` : ""}</header>`;

  let h = "";
  // KPI tiles
  h += head("m-kpis", "Main KPIs 2027", "From the West's January to October 2026 numbers, grown by the % in the Excel (change them there).");
  h += `<div class="mx-tiles">${M.tiles.map((t, i) => `<div class="mx-tile ${i < 4 ? "a" : "b"}"><span>${esc(t.t)}</span><b>${esc(t.v)}</b><small>${esc(t.s)}</small></div>`).join("")}</div>`;

  // Mission objectives
  h += head("m-mission", "The mission", "Objective (I + verb + what + when), the key result, the priority and how. Digital, marketing and training are the core; the additional role stays under 20% of my time.");
  M.sections.forEach(s => {
    const c = Object.keys(SEC_C).find(k => s.name.startsWith(k));
    h += `<section class="mx-sec ${c ? SEC_C[c] : "add"}"><h3><i>${esc(s.n)}</i>${esc(s.name.charAt(0) + s.name.slice(1).toLowerCase())}<span>${esc(s.sub)}</span></h3>
      <div class="mx-cards">${s.rows.map(r => `<article class="mx-card">
        <div class="mx-top"><b class="mx-n">${esc(r.n)}</b>${prio(r.prio)}</div>
        <p class="mx-obj">${esc(r.obj)}</p>
        <p class="mx-kr">${br(r.kr)}</p>
        ${howList(r.how)}
        <p class="mx-who2">With: ${esc(r.who)}</p></article>`).join("")}</div></section>`;
  });

  // 2026 by market (omni26view.js fills it)
  h += head("m-markets", "2026 by market: Pune, Gujarat, MP", "Omni and digital turnover, January to October 2026, from the same YTD files. Switch markets to see channels, months and stores.");
  h += `<div class="panel mx-panel mx-om"><div data-omni26="All"></div></div>`;

  // KPI table
  h += head("m-numbers", "Every KPI: 2026 to 2027", "2026 = January to October actual; full year = × 12/10 (replace with the real close in January).");
  h += `<details class="panel pm-d mx-d" open><summary><b>All KPIs, with the 2026 baseline and the 2027 target</b><span>${M.kpis.reduce((a, k) => a + k.rows.length, 0)} KPIs</span><i class="nd-chev" aria-hidden="true"></i></summary>
    <div class="sb-wrap"><table class="mx-t"><thead><tr><th>#</th><th>KPI</th><th>2026 Jan-Oct</th><th>2026 full year</th><th>Growth</th><th>2027 target</th><th>Stretch</th><th>Priority</th></tr></thead><tbody>
    ${M.kpis.map(k => `<tr class="mx-tsec"><td colspan="8">${esc(k.name)}</td></tr>` + k.rows.map(r => `<tr title="${esc(r.how)}"><td class="n">${esc(r.n)}</td><td><b>${esc(r.k)}</b><small>${esc(r.how)}</small></td><td>${esc(r.base)}</td><td>${esc(r.fy)}</td><td>${esc(r.g)}</td><td class="tg">${esc(r.tgt)}</td><td>${esc(r.st)}</td><td>${prio(r.prio)}</td></tr>`).join("")).join("")}
    </tbody></table></div></details>`;

  // Stores
  h += head("m-stores", "Stores 2027: SAS and AOPs", "SAS by store = sales booked at the store on ACE or the customer's app (Jan to Oct 2026). Focus stores grow 25%, the others 18%.");
  h += `<div class="panel mx-panel"><div class="sb-wrap"><table class="mx-t mx-st"><thead><tr><th>Store</th><th>State</th><th>SAS 2026 (Jan-Oct)</th><th>Growth</th><th>SAS 2027 target</th><th>AOPs live</th><th>AOPs 2027</th><th>How we grow it</th></tr></thead><tbody>
    ${M.stores.map(s => `<tr class="${s.f ? "foc" : ""}"><td><b>${esc(s.s)}</b>${s.f ? '<span class="mx-foc">Focus</span>' : ""}</td><td>${esc(s.st)}</td><td>${esc(s.sas26)}</td><td>${esc(s.g)}</td><td class="tg">${esc(s.tgt)}</td><td>${esc(s.aopl)}</td><td>${esc(s.aopp)}</td><td><small>${esc(s.how)}</small></td></tr>`).join("")}
    </tbody></table></div></div>`;

  // Training
  h += head("m-training", "Training plan 2027", "Digital trainings for every store and the cluster: one session per store per quarter, in person where possible, video call to top up.");
  h += `<div class="mx-kick">${M.kick.map(k => `<div class="mx-kc ${k.st === "Next" ? "next" : ""}"><span>${esc(k.w)} · ${esc(k.m)}</span><b>${esc(k.s)}</b><small>${esc(k.c)} · ${esc(k.t)}</small>${k.st === "Next" ? '<i class="mx-next">Next</i>' : ""}</div>`).join("")}</div>`;
  h += `<div class="mx-themes">${M.themes.map(t => `<div class="mx-th"><i>${esc(t.q)}</i><b>${esc(t.th)}</b><p>${esc(t.tp)}</p><small>We check: ${esc(t.chk)}</small></div>`).join("")}</div>`;
  h += `<details class="panel pm-d mx-d"><summary><b>Store by store, quarter by quarter</b><span>${M.plan.length} stores × 4 quarters = ${M.plan.length * 4} sessions</span><i class="nd-chev" aria-hidden="true"></i></summary>
    <div class="sb-wrap"><table class="mx-t mx-tp"><thead><tr><th>Store</th><th>City</th><th>Q1</th><th>Q2</th><th>Q3</th><th>Q4</th></tr></thead><tbody>
    ${M.plan.map(p => `<tr><td><b>${esc(p.s)}</b></td><td>${esc(p.c)}</td>${p.q.map(q => `<td class="${String(q).startsWith("Physical") ? "ph" : "vc"}">${esc(q)}</td>`).join("")}</tr>`).join("")}
    </tbody></table></div></details>`;

  // Scorecard
  h += head("m-score", "Store scorecard: two-way feedback", "Store leaders give feedback on me through the survey; this is the other direction. Each month every store is scored 1 to 5 (in the Excel) and shared with the store leaders and regional directors.");
  h += `<div class="mx-score"><div class="panel mx-panel"><h4>What we score</h4><ul class="mx-crit">${M.crit.map(c => `<li>${esc(c)}</li>`).join("")}<li>Follow-ups needed for one action (today about 6)</li></ul></div>
    <div class="panel mx-panel"><h4>How to score</h4><dl class="mx-leg">${M.legend.map(([a, b]) => `<dt>${esc(a)}</dt><dd>${esc(b)}</dd>`).join("")}</dl></div></div>`;

  // Quarters
  h += head("m-quarters", "2027, quarter by quarter", "");
  h += `<ol class="mx-q">${M.quarters.map(q => `<li class="${esc(String(q.a).toLowerCase())}"><span>${esc(q.w)}</span><b>${esc(q.a)}</b><p>${esc(q.m)}</p><small>KPI ${esc(q.k)}</small></li>`).join("")}</ol>`;

  h += `<div class="mx-dl mx-dl2"><a class="mx-btn" href="exports/Mission-2027-Anandita-Mitra.xlsx" download>Download the mission (Excel)</a><a class="mx-btn ghost" href="exports/IDM-Anandita-Mitra-Nov-2026.xlsx" download>Download the IDM (Excel)</a></div>`;
  el.innerHTML = h;
})();
