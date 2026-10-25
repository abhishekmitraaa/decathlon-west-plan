/* Content calendar: month grid + full post briefs + pillar mix + influencer plan. */
(() => {
  "use strict";
  const C = window.CONTENT, D = window.DATA;
  const root = document.getElementById("contentCal");
  if (!C || !root) return;
  const esc = s => String(s).replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => [...r.querySelectorAll(s)];
  const P = C.pillars, KEYS = Object.keys(P);
  const DOW = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
  const toPost = ([day, format, pillar, title, campaign, sport, region, hook, why, creator]) => ({ day, format, pillar, title, campaign, sport, region, hook, why, creator });
  C.months.forEach(m => { m.list = m.posts.map(toPost); });
  const all = C.months.flatMap(m => m.list);

  // overall mix and influencer counts
  const mix = KEYS.map(k => all.filter(p => p.pillar === k).length);
  const creators = all.filter(p => p.creator);

  root.innerHTML = `
    <div class="cc-top">
      <div class="cc-pillars">
        <h3 class="display-s"><span class="lt">Five pillars,</span> five feelings</h3>
        <p>Every post has one job and one emotion. Target share of posts, and what this plan delivers.</p>
        ${KEYS.map((k, i) => `<div class="cc-pil"><i style="background:${P[k].col}"></i><div><b>${P[k].name}</b><small>${P[k].feel}</small></div>
          <span>${Math.round(mix[i] / all.length * 100)}%<small>target ${P[k].target}%</small></span></div>`).join("")}
      </div>
      <div class="cc-stats">
        <div><b>${all.length}</b><span>posts from 26 Oct to 31 Mar</span></div>
        <div><b>${creators.length}</b><span>influencer and creator videos</span></div>
        <div><b>${C.months.length}</b><span>months, planned day by day</span></div>
        <div class="cc-formats">${["Reel", "Carousel", "Static", "Story", "Live"].map(f => `<span><b>${all.filter(p => p.format === f).length}</b> ${f.toLowerCase()}${f === "Story" ? " series" : f === "Live" ? "" : "s"}</span>`).join("")}</div>
      </div>
    </div>

    <div class="cc-tabs seg" role="tablist" aria-label="Choose month" id="ccTabs">
      ${C.months.map((m, i) => `<button type="button" role="tab" data-i="${i}" aria-selected="${i === 1}">${m.label.slice(0, 3)} ${m.y}</button>`).join("")}
    </div>
    <div id="ccMonth"></div>

    <div class="cc-infl">
      <h3 class="display-s"><span class="lt">Influencer videos,</span> when and where</h3>
      <p>Every creator video in the plan, with the Q4 influencer budget per state from the line-item sheet.</p>
      <div class="cc-infl-grid">
        <div class="cc-budget" id="ccBudget"></div>
        <ol class="cc-infl-list">${creators.map(p => {
          const m = C.months.find(x => x.list.includes(p));
          return `<li><span>${p.day} ${m.label.slice(0, 3)}</span><b>${esc(p.creator)}</b><em>${esc(p.title)}</em><small>${esc(p.region)} · ${esc(p.sport)}</small></li>`;
        }).join("")}</ol>
      </div>
    </div>`;

  // influencer budget, Oct–Dec, from the state line tables
  const bud = ["Pune", "Gujarat", "MP"].map(st => {
    const line = D.stateLines[st].lines.find(l => /influencer/i.test(l.line));
    return { st, v: line ? line.v : [0, 0, 0] };
  });
  const bMax = Math.max(...bud.flatMap(b => b.v));
  $("#ccBudget").innerHTML = `<h4>Q4 influencer budget (L)</h4>` + bud.map(b => `<div class="cb-row"><span>${b.st === "MP" ? "Madhya Pradesh" : b.st}</span>
    <div class="cb-bars">${["Oct", "Nov", "Dec"].map((mo, i) => `<div><i style="height:${b.v[i] / bMax * 64}px"></i><small>${mo}</small><b>${b.v[i].toFixed(1)}</b></div>`).join("")}</div>
    <em>${b.v.reduce((a, c) => a + c, 0).toFixed(1)} L</em></div>`).join("") +
    `<p class="foot">Pune's November spike (5 L) is Winter Travel. Gujarat and MP each also run a pool of 40 creators.</p>`;

  function showMonth(i) {
    const m = C.months[i];
    $$("#ccTabs button").forEach(b => b.setAttribute("aria-selected", +b.dataset.i === i));
    const first = new Date(m.y, m.m, 1), days = new Date(m.y, m.m + 1, 0).getDate();
    const lead = (first.getDay() + 6) % 7;
    const byDay = {};
    m.list.forEach((p, k) => { (byDay[p.day] = byDay[p.day] || []).push({ ...p, k }); });
    let cells = "";
    for (let b = 0; b < lead; b++) cells += `<div class="cc-day empty"></div>`;
    for (let d = 1; d <= days; d++) {
      const past = m.from && d < m.from;
      cells += `<div class="cc-day ${past ? "past" : ""}"><span class="cc-num">${d}</span>${(byDay[d] || []).map(p =>
        `<button type="button" class="cc-chip" style="--c:${P[p.pillar].col}" data-k="${p.k}"><small>${p.format}${p.creator ? " · ★ creator" : ""}</small>${esc(p.title)}</button>`).join("")}</div>`;
    }
    const mMix = KEYS.map(k => m.list.filter(p => p.pillar === k).length);
    $("#ccMonth").innerHTML = `
      <div class="cc-head">
        <div><h3>${m.label} ${m.y}<span class="lt">: ${esc(m.theme)}</span></h3>
          <p>Sport of the month: <b>${esc(m.sport)}</b> · Call to action: <b>${esc(m.cta)}</b></p></div>
        <div class="cc-mmix">${KEYS.map((k, j) => mMix[j] ? `<span style="--c:${P[k].col}"><i></i>${P[k].name} ${mMix[j]}</span>` : "").join("")}<span class="cc-cr">★ ${m.list.filter(p => p.creator).length} creator videos</span></div>
      </div>
      <div class="cc-grid">${DOW.map(d => `<div class="cc-dow">${d}</div>`).join("")}${cells}</div>
      <h4 class="cc-sub">Every post in ${m.label}, with the brief</h4>
      <div class="cc-briefs">${m.list.map((p, k) => {
        const dt = new Date(m.y, m.m, p.day);
        return `<article class="cc-brief" id="ccb-${k}" style="--c:${P[p.pillar].col}">
          <div class="cb-date"><b>${p.day}</b><span>${DOW[(dt.getDay() + 6) % 7]}</span></div>
          <div class="cb-main">
            <div class="cb-tags"><span class="cb-pil">${P[p.pillar].name}</span><span>${p.format}</span><span>${esc(p.region)}</span>${p.sport !== "—" ? `<span>${esc(p.sport)}</span>` : ""}${p.creator ? `<span class="cb-cr">★ ${esc(p.creator)}</span>` : ""}</div>
            <h5>${esc(p.title)}</h5>
            <p class="cb-hook">“${esc(p.hook)}”</p>
            <dl><div><dt>Campaign</dt><dd>${esc(p.campaign)}</dd></div><div><dt>Why this date</dt><dd>${esc(p.why)}</dd></div><div><dt>Feeling</dt><dd>${P[p.pillar].feel}</dd></div></dl>
          </div></article>`;
      }).join("")}</div>`;
    $$("#ccMonth .cc-chip").forEach(c => c.addEventListener("click", () => {
      const el = document.getElementById("ccb-" + c.dataset.k);
      $$(".cc-brief.on").forEach(x => x.classList.remove("on"));
      el.classList.add("on");
      el.scrollIntoView({ behavior: matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth", block: "center" });
    }));
  }
  $$("#ccTabs button").forEach(b => b.addEventListener("click", () => showMonth(+b.dataset.i)));
  showMonth(1);
})();
