/* Content calendar: writing rules, pillar mix, month banner + hero film, photo calendar,
   full post briefs, influencer plan and photo credits. */
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

  /* ---------- a picture for every post: our own photos first, Creative Commons for the rest ---------- */
  const IMG = "assets/img/";
  const RULES_IMG = [
    [/tapi|sunrise run/i, "u-runclub.jpg"], [/night carnival|box cricket/i, "cc/cricket.jpg"], [/santa/i, "cc/christmas.jpg"],
    [/team|meet your/i, "school-motera.jpg"], [/surat|adajan|happy streets|treasure|bumper|pehli ramat/i, "surat-store.jpg"],
    [/skating/i, "sports-utsav-jr.jpg"], [/colouring|children's day|csr|every kid/i, "school-motera.jpg"],
    [/bloopers|wrapped|sport partner|in numbers/i, "u-seniors.jpg"],
    [/kids|obstacle|summer camp/i, "cc/kids.jpg"], [/first cycle|cycle/i, "u-family-cycle.jpg"],
    [/christmas/i, "cc/christmas.jpg"], [/happy diwali|diwali sale|diwali/i, "cc/diwali.jpg"], [/gift/i, "gifts-1999.jpg"],
    [/sinhagad|fort/i, "pune-fort-trail.jpg"], [/himalayan|manali|winter trek|layer|trek shoes|pack with me|date night|love|valentine|rate the date/i, "u-trek-couple.jpg"],
    [/trek|saputara|mh500|pack|sunrise/i, "cc/trek-green.jpg"], [/black friday|sale|clearance|new arrivals|haul|shoes drop/i, "cc/shoes.jpg"],
    [/hyrox|fitness session|new moves|starter|gym|movement for all/i, "cc/fitness.jpg"], [/kiprun|new shoes|first 5k/i, "u-kiprun.jpg"],
    [/women|she plays|move together|why we play/i, "u-women-football.jpg"],
    [/marathon/i, "cc/marathon.jpg"], [/run|race/i, "u-runclub.jpg"], [/uttarayan|kite|kai po che|terrace|sankranti/i, "cc/kite.jpg"],
    [/republic|tricolour|made in india|where your gear/i, "cc/flag.jpg"],
    [/year|2026|thank you/i, "cc/newyear.jpg"], [/fitness/i, "cc/fitness.jpg"],
    [/camping|tent/i, "cc/camping.jpg"], [/beach/i, "cc/beach.jpg"], [/pickleball 101/i, "u-padel.jpg"], [/pickleball/i, "u-pickleball.jpg"],
    [/cricket|ipl|gully/i, "cc/cricket.jpg"], [/football/i, "cc/football.jpg"], [/badminton/i, "cc/badminton.jpg"],
    [/holi/i, "cc/holi.jpg"], [/eid/i, "heritage-run.jpg"]
  ];
  const imgFor = p => {
    const text = `${p.title} ${p.campaign} ${p.sport}`;
    const hit = RULES_IMG.find(([re]) => re.test(text));
    return IMG + (hit ? hit[1] : "heritage-run.jpg");
  };
  const BANNER = { October: "cc/kids.jpg", November: "cc/trek-snow.jpg", December: "surat-store.jpg", January: "cc/kite.jpg", February: "u-women-football.jpg", March: "cc/holi.jpg" };
  const RULE_PICS = ["u-kiprun.jpg", "cc/kite.jpg", "u-family-cycle.jpg"];

  const mix = KEYS.map(k => all.filter(p => p.pillar === k).length);
  const creators = all.filter(p => p.creator);

  root.innerHTML = `
    <div class="cc-rules">
      <div class="toolkit-head">
        <h3 class="display-s"><span class="lt">How we write:</span> three rules from Piyush Pandey</h3>
        <p>The man behind Fevicol, Cadbury and Asian Paints never sold a product. He staged a story and let the product end it. Every post below is written this way.</p>
      </div>
      <div class="cc-rule-grid">${C.rules.map((r, i) => `<article class="cc-rule">
        <div class="cc-rule-img" style="background-image:url('${IMG + RULE_PICS[i]}')"><span>${i + 1}</span></div>
        <div class="cc-rule-body"><h4>${esc(r.n)}</h4><p class="cc-lift">${esc(r.lift)}</p><p>${esc(r.us)}</p></div></article>`).join("")}</div>
    </div>

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
        <div><b>${C.months.length}</b><span>hero films, one a month</span></div>
        <div class="cc-formats">${["Reel", "Carousel", "Static", "Story", "Live"].map(f => `<span><b>${all.filter(p => p.format === f).length}</b> ${f.toLowerCase()}${f === "Story" ? " series" : f === "Live" ? "" : "s"}</span>`).join("")}</div>
        <div class="cc-collage">${["u-pickleball.jpg", "u-runclub.jpg", "u-trek-couple.jpg", "u-family-cycle.jpg"].map(s => `<img src="${IMG + s}" alt="" loading="lazy">`).join("")}</div>
      </div>
    </div>

    <div class="cc-tabs seg" role="tablist" aria-label="Choose month" id="ccTabs">
      ${C.months.map((m, i) => `<button type="button" role="tab" data-i="${i}" aria-selected="${i === 1}">${m.label.slice(0, 3)} ${m.y}</button>`).join("")}
    </div>
    <div id="ccMonth"></div>`;

  /* ---------- influencer plan, below the reels ---------- */
  const infl = document.getElementById("ccInfluencers");
  if (infl) {
    const bud = ["Pune", "Gujarat", "MP"].map(st => {
      const line = D.stateLines[st].lines.find(l => /influencer/i.test(l.line));
      return { st, v: line ? line.v : [0, 0, 0] };
    });
    const bMax = Math.max(...bud.flatMap(b => b.v));
    infl.innerHTML = `<div class="cc-infl">
      <h3 class="display-s"><span class="lt">Influencer videos,</span> when and where</h3>
      <p>Every creator video in the plan, with the Q4 influencer budget per state from the line-item sheet.</p>
      <div class="cc-infl-grid">
        <div class="cc-budget"><h4>Q4 influencer budget (L)</h4>${bud.map(b => `<div class="cb-row"><span>${b.st === "MP" ? "Madhya Pradesh" : b.st}</span>
          <div class="cb-bars">${["Oct", "Nov", "Dec"].map((mo, i) => `<div><i style="height:${b.v[i] / bMax * 64}px"></i><small>${mo}</small><b>${b.v[i].toFixed(1)}</b></div>`).join("")}</div>
          <em>${b.v.reduce((a, c) => a + c, 0).toFixed(1)} L</em></div>`).join("")}
          <p class="foot">Pune's November spike (5 L) is Winter Travel. Gujarat and MP each also run a pool of 40 creators.</p></div>
        <ol class="cc-infl-list">${creators.map(p => {
          const m = C.months.find(x => x.list.includes(p));
          return `<li><span>${p.day} ${m.label.slice(0, 3)}</span><div><b>${esc(p.creator)}</b><em>${esc(p.title)}</em></div><small>${esc(p.region)}</small></li>`;
        }).join("")}</ol>
      </div></div>`;
  }
  const cr = document.getElementById("ccCredits");
  if (cr && C.credits) {
    cr.innerHTML = "<summary>Photo credits</summary>Creative Commons: " + Object.values(C.credits).map(c =>
      `<a href="${esc(c.link || "#")}" target="_blank" rel="noopener">${esc(c.title)}</a> by ${esc(c.creator)}, ${esc(c.license)}`).join(" · ") +
      ". Other photos are Decathlon's own or supplied by the team.";
  }

  function showMonth(i) {
    const m = C.months[i], h = (C.heroes || {})[m.label];
    $$("#ccTabs button").forEach(b => b.setAttribute("aria-selected", +b.dataset.i === i));
    const first = new Date(m.y, m.m, 1), days = new Date(m.y, m.m + 1, 0).getDate();
    const lead = (first.getDay() + 6) % 7;
    const byDay = {};
    m.list.forEach((p, k) => { (byDay[p.day] = byDay[p.day] || []).push({ ...p, k }); });
    let cells = "";
    for (let b = 0; b < lead; b++) cells += `<div class="cc-day empty"></div>`;
    for (let d = 1; d <= days; d++) {
      const past = m.from && d < m.from, list = byDay[d] || [];
      cells += `<div class="cc-day ${past ? "past" : ""} ${list.length ? "has" : ""}">
        ${list.length ? `<div class="cc-thumb" style="background-image:url('${imgFor(list[0])}')"></div>` : ""}
        <span class="cc-num">${d}</span>${list.map(p =>
        `<button type="button" class="cc-chip" style="--c:${P[p.pillar].col}" data-k="${p.k}"><small>${p.format}${p.creator ? " · ★ creator" : ""}</small>${esc(p.title)}</button>`).join("")}</div>`;
    }
    const mMix = KEYS.map(k => m.list.filter(p => p.pillar === k).length);
    $("#ccMonth").innerHTML = `
      <div class="cc-banner" style="background-image:linear-gradient(90deg, rgba(16,19,90,.92) 0%, rgba(16,19,90,.55) 55%, rgba(16,19,90,.1) 100%), url('${IMG + BANNER[m.label]}')">
        <span class="cc-bmonth">${m.label} ${m.y}</span>
        <h3>${esc(m.theme)}</h3>
        <p>Sport of the month: <b>${esc(m.sport)}</b><br>Call to action: <b>${esc(m.cta)}</b></p>
        <div class="cc-mmix">${KEYS.map((k, j) => mMix[j] ? `<span style="--c:${P[k].col}"><i></i>${P[k].name} ${mMix[j]}</span>` : "").join("")}<span class="cc-cr">★ ${m.list.filter(p => p.creator).length} creator videos</span></div>
      </div>
      ${h ? `<article class="cc-hero">
        <div class="cc-hero-tag">Hero film of the month</div>
        <h4>“${esc(h.name)}”</h4>
        <p class="cc-occ">Borrowed occasion: ${esc(h.occasion)}</p>
        <div class="cc-acts">
          <div><span>The story</span><p>${esc(h.story)}</p></div>
          <div><span>The impossible proof</span><p>${esc(h.proof)}</p></div>
          <div class="res"><span>Decathlon resolves it</span><p>${esc(h.resolve)}</p></div>
        </div></article>` : ""}
      <div class="cc-grid">${DOW.map(d => `<div class="cc-dow">${d}</div>`).join("")}${cells}</div>
      <h4 class="cc-sub">Every post in ${m.label}, with the brief</h4>
      <div class="cc-briefs">${m.list.map((p, k) => {
        const dt = new Date(m.y, m.m, p.day);
        return `<article class="cc-brief" id="ccb-${k}" style="--c:${P[p.pillar].col}">
          <div class="cb-img" style="background-image:url('${imgFor(p)}')"><div class="cb-date"><b>${p.day}</b><span>${DOW[(dt.getDay() + 6) % 7]}</span></div><span class="cb-fmt">${p.format}</span></div>
          <div class="cb-main">
            <div class="cb-tags"><span class="cb-pil">${P[p.pillar].name}</span><span>${esc(p.region)}</span>${p.sport !== "-" ? `<span>${esc(p.sport)}</span>` : ""}${p.creator ? `<span class="cb-cr">★ ${esc(p.creator)}</span>` : ""}</div>
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
