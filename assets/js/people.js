/* Why the West, personas and the competitive field.
   Sources: regional context slide, ultimate data sheet, strategy sheet, Nexus Ahmedabad One persona board,
   Kothrud persona slide, Pune Marcom calendar (competitor rows), Q4 campaign calendar. */
(() => {
  "use strict";
  const D = window.DATA, PD = window.PLAN_DETAIL;
  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => [...r.querySelectorAll(s)];
  const esc = s => String(s).replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));

  /* ---------- why the West ---------- */
  const POP = { Pune: 10.4, Gujarat: 70.4, MP: 85.8 };
  const STORES = { Pune: 5, Gujarat: 5, MP: 3 };
  const people = POP.Pune + POP.Gujarat + POP.MP;
  const GOLD = [
    { n: `${people.toFixed(1)}M`, l: "people across the three markets", s: `13 stores: one for every ${(people / 13).toFixed(1)}M people` },
    { n: "+24.15%", l: "Q4 challenge growth", s: "143.99 Cr in Q4 2025 to 178.77 Cr" },
    { n: "+42.2%", l: "MP stores' Q4 challenge", s: "Bhopal alone is +84.2%" },
    { n: "25.8–27.4", l: "median age, in years", s: "MP 25.8, Pune 26.3, Gujarat 27.4" },
    { n: "+11%", l: "women's business growth", s: "Twice the men's +5%, from a 30% share" },
    { n: "+296%", l: "wholesale challenge growth", s: "2.08 Cr to 8.25 Cr. Digital adds +22.5%" },
    { n: "0.90%", l: "of challenge turnover goes to marketing", s: "1.60 Cr Q4 plan for 178.77 Cr" }
  ];
  $("#goldGrid").innerHTML = GOLD.map((g, i) => `<div class="gold ${i === 0 ? "gold-hero" : ""}"><b>${g.n}</b><span>${g.l}</span><small>${g.s}</small></div>`).join("");

  const per = Object.keys(POP).map(k => ({ k, v: POP[k] / STORES[k] }));
  const maxPer = Math.max(...per.map(p => p.v));
  const NAME = { Pune: "Pune", Gujarat: "Gujarat", MP: "Madhya Pradesh" };
  const COL = { Pune: "var(--blue)", Gujarat: "var(--guj)", MP: "var(--mp)" };
  $("#perStore").innerHTML = per.map(p => `<div class="ps-row"><span>${NAME[p.k]}<small>${STORES[p.k]} stores</small></span>
    <i style="--w:${p.v / maxPer * 100}%;background:${COL[p.k]}"></i><b>${p.v.toFixed(1)}M</b></div>`).join("");

  const HISTORY = [
    { y: "1976", t: "Decathlon opens its first store, in Englos near Lille, France." },
    { y: "2009", t: "Decathlon comes to India." },
    { y: "2024", t: "A new brand identity: Decathlon blue and the orbit logo." },
    { y: "Q4 2025", t: "The West cluster turns over 143.99 Cr in a quarter." },
    { y: "Oct 2026", t: "Decathlon turns 50, celebrated in The Blue Voice." },
    { y: "Q4 2026", t: "The 178.77 Cr challenge: +24.15% on last year." },
    { y: "20 Dec 2026", t: "A new store opens at Adajan, Surat." },
    { y: "2030", t: "The Commonwealth Games come to Gujarat." }
  ];
  $("#historyLine").innerHTML = HISTORY.map((h, i) => `<li class="${i >= 3 ? "west" : ""}"><b>${h.y}</b><span>${h.t}</span></li>`).join("");

  /* ---------- personas ---------- */
  const NEXUS = [
    { n: "Sports Family", a: "Family Sports Enabler", tag: "Sport brings the family together", now: 32, target: 32, tLabel: "Maintain", img: "persona-family.jpg",
      age: "30–50", gender: "Family decision", lives: "Vastrapur, Bodakdev, Satellite, Ambawadi, Thaltej", basket: "₹4,000–10,000", abv: "Very high",
      visit: "Every 1–2 months, weekend evenings", online: "30% online", sports: "Swimming, cricket, cycling, football, badminton",
      trigger: "School season, holidays, summer camps", pain: "Finding everything for the family", need: "Convenience and trust" },
    { n: "Active Lifestyle Professional", a: "Health Optimiser", tag: "Fitness is part of everyday life", now: 25, target: 27, img: "gym.jpg",
      age: "24–40", gender: "65% men, 35% women", lives: "Satellite, SG Highway, Bodakdev, Vastrapur, Navrangpura", basket: "₹3,000–8,000", abv: "High",
      visit: "Monthly, weekday evenings", online: "40% online", sports: "Running, gym, yoga, cycling, walking, pickleball",
      trigger: "Fitness goals, marathons, gym membership", pain: "Limited time", need: "Performance and comfort" },
    { n: "Outdoor & Travel Explorer", a: "Weekend Adventurer", tag: "Live for the next adventure", now: 23, target: 17, img: "persona-explorer.jpg",
      age: "25–45", gender: "Family driven", lives: "Bopal, Shela, Thaltej, SG Highway", basket: "₹5,000–12,000", abv: "High",
      visit: "Seasonal, weekends", online: "35% online", sports: "Hiking, trekking, camping, travel",
      trigger: "Upcoming trip plans", pain: "Choosing the right gear", need: "Durable gear" },
    { n: "Progressive Sports Enthusiast", a: "Beginner to intermediate player", tag: "Keep improving every day", now: 11, target: 22, img: "persona-athlete.jpg",
      age: "15–35", gender: "Balanced", lives: "Navrangpura, Naranpura, Vastrapur", basket: "₹2,000–6,000", abv: "Medium",
      visit: "Every 1–2 months, evenings and weekends", online: "25% online", sports: "Badminton, tennis, football, pickleball, running",
      trigger: "Joining an academy or a new sport", pain: "Confusion about equipment", need: "Right equipment and guidance" },
    { n: "Young Trend & Discovery", a: "Future Sports Consumer", tag: "Discover. Try. Play.", now: 9, target: 14, img: "../posters/circuit-games.jpg",
      age: "18–28", gender: "Balanced", lives: "University and PG catchments", basket: "₹1,000–3,000", abv: "Low to medium",
      visit: "Occasional, weekend evenings", online: "60% online", sports: "Gym, walking, beginner sports",
      trigger: "Trends, influencers, offers", pain: "Doesn't know where to start", need: "Affordable discovery" },
    { n: "The Patron", a: "Business owner (wholesale and network)", tag: "My time is worth more than the discount.", now: null, target: null, img: null,
      age: "35–55", gender: "75% men, 25% women", lives: "Bodakdev 380054, Science City 380061, Ambli 380055, Bopal 380059", basket: "₹10,000–60,000", abv: "Very high",
      visit: "Quarterly, Sunday mornings", online: "Not given", sports: "Golf, cycling, walking, gym, trekking",
      trigger: "Health goal, doctor's advice, a trip, a corporate order", pain: "Lack of time. Will not queue or hunt for staff.", need: "A frictionless outcome" }
  ];
  const KOTHRUD = [
    { n: "Urban Performance Professional", share: "30–35%", d: "Time-conscious professionals seeking performance, convenience and premium quality.", age: "24–38",
      occ: "IT professionals, consultants, doctors, finance, researchers, entrepreneurs", inc: "₹10–30 L+", hh: "2–3", img: null },
    { n: "Active Urban Explorer", share: "20–25%", d: "Adventure and outdoor enthusiasts seeking reliable gear for weekend trips and active experiences.", age: "22–40",
      occ: "Young professionals, master's students, college students, travel enthusiasts", inc: "₹8–15 L+", hh: "2–3", img: "persona-explorer.jpg" },
    { n: "Sports Driven Family", share: "25–30%", d: "Health-conscious families investing in sports and overall development for every member.", age: "Parents 30–45, kids 6–18",
      occ: "Working parents, business owners, professionals", inc: "₹12–35 L+", hh: "4–5", img: "persona-family.jpg" },
    { n: "Daily Athlete & Academy Player", share: "15–20%", d: "Regular sports practitioners who need technical products, expert guidance and quick availability.", age: "22–40",
      occ: "College students, academy players, young professionals", inc: "₹4–7 L+", hh: "3–4", img: "persona-athlete.jpg" },
    { n: "Active Senior Lifestyle", share: "10–15%", d: "Retired or soon-to-retire residents focused on staying active, healthy and independent.", age: "55–70",
      occ: "Retired, government employees, business owners", inc: "₹8–25 L+ (pension and investments)", hh: "2–3", img: "persona-senior.jpg" }
  ];
  const ph = (img, name) => img
    ? `<img src="assets/img/${img}" alt="" loading="lazy">`
    : `<div class="pc-mono">${esc(name.split(" ").map(w => w[0]).join("").slice(0, 2))}</div>`;
  const kv = (k, v) => v ? `<div><dt>${k}</dt><dd>${esc(v)}</dd></div>` : "";

  function showBoard(b) {
    $$("#personaSeg button").forEach(x => x.setAttribute("aria-pressed", x.dataset.b === b));
    if (b === "nexus") {
      const max = 32;
      $("#personaIntro").innerHTML = `
        <div class="pi-text"><h3 class="display-s"><span class="lt">Nexus, Ahmedabad One:</span> where the mix is heading</h3>
          <p>Built from a 400-person walk-in survey (35%), catchment demographics (25%), footfall analytics (15%), category performance (15%) and the Ahmedabad sports ecosystem (10%). The plan grows progressive players from 11% to 22% of customers and young discoverers from 9% to 14%. The Patron, a business-owner buyer, is not in the mix yet.</p></div>
        <div class="pi-chart">${NEXUS.filter(p => p.now !== null).map(p => `<div class="mix2"><span>${esc(p.n)}</span>
          <div class="mix2-bars"><i class="now" style="--w:${p.now / max * 100}%" data-tip="<b>${esc(p.n)}</b><br>Share now ${p.now}%"></i><i class="tgt" style="--w:${p.target / max * 100}%" data-tip="<b>${esc(p.n)}</b><br>Target ${p.tLabel || p.target + "%"}"></i></div>
          <b>${p.now}% <em>→ ${p.tLabel || p.target + "%"}</em></b></div>`).join("")}
          <div class="mix2-key"><span><i class="now"></i>Share now</span><span><i class="tgt"></i>Target</span></div></div>`;
      $("#personaGrid").innerHTML = NEXUS.map(p => `<article class="pc">
        <div class="pc-img">${ph(p.img, p.n)}<span class="pc-share">${p.now === null ? "Not yet in mix" : `${p.now}% now`}</span></div>
        <div class="pc-body"><h4>${esc(p.n)}</h4><p class="pc-tag">“${esc(p.tag)}”</p>
          <dl>${kv("Age", p.age)}${kv("Gender", p.gender)}${kv("Basket", p.basket)}${kv("ABV", p.abv)}${kv("Visits", p.visit)}${kv("Online share", p.online)}</dl>
          <dl class="pc-wide">${kv("Lives in", p.lives)}${kv("Plays", p.sports)}${kv("Buys when", p.trigger)}${kv("Pain point", p.pain)}${kv("Needs", p.need)}</dl></div></article>`).join("");
    } else {
      $("#personaIntro").innerHTML = `
        <div class="pi-text"><h3 class="display-s"><span class="lt">Kothrud, Pune:</span> five personas, one destination</h3>
          <p>“Decathlon Kothrud is the multi-sport smart city partner, dedicated to its urban customers by bringing their sports closer to people.” Shares are the team's estimates.</p></div>`;
      $("#personaGrid").innerHTML = KOTHRUD.map(p => `<article class="pc">
        <div class="pc-img">${ph(p.img, p.n)}<span class="pc-share">${p.share}</span></div>
        <div class="pc-body"><h4>${esc(p.n)}</h4><p>${esc(p.d)}</p>
          <dl>${kv("Age", p.age)}${kv("Household", p.hh)}${kv("Income", p.inc)}</dl>
          <dl class="pc-wide">${kv("Occupation", p.occ)}</dl></div></article>`).join("");
    }
  }
  $$("#personaSeg button").forEach(b => b.addEventListener("click", () => showBoard(b.dataset.b)));
  showBoard("nexus");

  /* ---------- the field: competitors by month ---------- */
  const BRANDS = ["PUMA", "adidas", "Nike", "Shakti", "ASICS", "Gully Labs"];
  const M = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  const cell = (b, i) => {
    const line = (PD.compPresence[i] || "").split("\n").find(l => l.toLowerCase().startsWith(b.toLowerCase() + ":"));
    return line ? line.split(":").slice(1).join(":").trim().replace(/\//g, " / ") : "";
  };
  const theme = i => (PD.compCampaign[i] || "").split(":")[0];
  let g = `<div class="bg-corner">2027</div>${M.map(m => `<div class="bg-m">${m}</div>`).join("")}`;
  g += `<div class="bg-brand">Their big theme</div>${M.map((_, i) => `<div class="bg-theme">${esc(theme(i))}</div>`).join("")}`;
  BRANDS.forEach(b => {
    g += `<div class="bg-brand">${b}</div>${M.map((_, i) => `<div class="bg-c">${esc(cell(b, i))}</div>`).join("")}`;
  });
  g += `<div class="bg-brand ours">Our answer in Pune</div>${M.map((_, i) => `<div class="bg-ours">${esc(PD.response[i] || "")}</div>`).join("")}`;
  $("#brandGrid").innerHTML = g;

  const EVENTS = [
    { d: "31 Oct", t: "Sports Utsav Junior", s: "Our kids' skating workshop, 11 AM – 2 PM.", k: "ours" },
    { d: "Oct", t: "Navratri and Dussehra", s: "Gujarat's biggest festival season. Gift a Sport and the Dussehra sale ride it.", k: "culture" },
    { d: "27–29 Nov", t: "HYROX", s: "The fitness race format. Black Friday lands the same weekend.", k: "ext" },
    { d: "29 Nov", t: "Adani Marathon", s: "Ahmedabad's marathon. Run kit, bibs and Kiprun visibility.", k: "ext" },
    { d: "Nov", t: "Black Friday, everywhere", s: "Competitors go deep on discounts, urgency and retargeting.", k: "comp" },
    { d: "14 Mar – 30 May", t: "IPL 2027", s: "Cricket fever across the cluster. Pune runs pickleball in March and cricket in April.", k: "ext" },
    { d: "2030", t: "Commonwealth Games", s: "Gujarat hosts. Every partnership we build now compounds.", k: "ext" }
  ];
  $("#extEvents").innerHTML = EVENTS.map(e => `<div class="ev ev-${e.k}"><span class="ev-d">${e.d}</span><b>${e.t}</b><p>${e.s}</p></div>`).join("");
})();
