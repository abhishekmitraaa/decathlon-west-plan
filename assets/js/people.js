/* Why the West, personas and the competitive field.
   Sources: regional context slide, ultimate data sheet, strategy sheet, Ahmedabad and Pune persona boards,
   Pune Marcom calendar (competitor rows), Q4 campaign calendar. */
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
  // Penetration, 2026 so far: in-store turnover 1 Jan - 25 Oct 2026 (tuonver_data.xlsx) against each city's
  // 2026 sports market (India City Ranking 2025 projection) pro-rated to the same 298 days.
  // [city, state, stores, market 2026 Cr, in-store TO 2026 YTD Cr, customers 2026 YTD, returning customers]
  const DAYS = 298, YEAR = 365;
  const PEN = [
    ["Pune", "Pune", 5, 2433.62, 198.93, 571174, 344445],
    ["Ahmedabad", "Gujarat", 2, 2428.80, 76.39, 213036, 115118],
    ["Surat", "Gujarat", 1, 2376.77, 31.63, 84137, 44510],
    ["Vadodara", "Gujarat", 1, 919.06, 28.98, 71364, 39461],
    ["Indore", "MP", 1, 793.05, 26.13, 72015, 37732],
    ["Bhopal", "MP", 1, 642.50, 22.14, 70837, 23419],
    ["Rajkot", "Gujarat", 1, 614.79, 7.41, 26653, 12015],
    ["Gwalior", "MP", 1, 263.82, 5.93, 25815, 11416]
  ];
  const ST_COL = { Pune: "var(--blue)", Gujarat: "var(--guj)", MP: "var(--mp)" };
  const cr = n => "₹" + Math.round(n).toLocaleString("en-IN") + " Cr";
  const lakh = n => (n / 1e5).toLocaleString("en-IN", { maximumFractionDigits: 2 }) + " lakh";
  const rows = PEN.map(([city, st, n, m26, to, cu, ret]) => ({ city, st, n, mk: m26 * DAYS / YEAR, m26, to, cu, ret }));
  const penMax = Math.max(...rows.map(r => r.mk));
  const mkAll = rows.reduce((a, r) => a + r.mk, 0), toAll = rows.reduce((a, r) => a + r.to, 0);
  const cuAll = rows.reduce((a, r) => a + r.cu, 0), retAll = rows.reduce((a, r) => a + r.ret, 0);
  const penRows = rows.map(r => { const sh = r.to / r.mk * 100; return `<div class="pen-row" style="--c:${ST_COL[r.st]}">
      <span class="pen-city">${r.city} <em>${r.n} store${r.n > 1 ? "s" : ""}</em></span>
      <div class="pen-track" data-tip="<b>${r.city}</b><br>Sports market, 1 Jan to 25 Oct: ${cr(r.mk)}<br>Our in-store turnover: ${cr(r.to)} (${sh.toFixed(1)}%)<br>Customers: ${lakh(r.cu)}, ${Math.round(r.ret / r.cu * 100)}% returning">
        <i class="m25" style="width:${r.mk / penMax * 100}%"></i><i class="us" style="width:${Math.max(r.to / penMax * 100, 0.6)}%"></i>
      </div>
      <b class="pen-share">${sh.toFixed(1)}%</b>
      <span class="pen-n">${cr(r.to)}</span><span class="pen-n">${cr(r.mk)}</span><span class="pen-n">${lakh(r.cu)}</span></div>`; }).join("");
  $("#goldGrid").innerHTML = `<div class="gold gold-hero"><b>${people.toFixed(1)}M</b><span>people across the three markets</span><small>Only 13 stores: one for every ${(people / 13).toFixed(1)}M people.</small></div>
    <div class="gold gold-pen"><div class="pen-head"><span>Our share of each city's sports market, 2026 so far</span>
      <small>${cr(toAll)} in-store turnover from 1 January to 25 October across our 8 store cities, against a ${cr(mkAll)} market for the same days: ${(toAll / mkAll * 100).toFixed(1)}%. ${lakh(cuAll)} customers, ${Math.round(retAll / cuAll * 100)}% of them returning.</small></div>
      <div class="pen-key"><span><i class="us"></i>Our in-store turnover</span><span><i class="m25"></i>Sports market, same days</span></div>
      <div class="pen-row pen-hd"><span>City</span><span>2026 so far: 1 Jan to 25 Oct</span><span>Our share</span><span class="pen-n">Our sales, YTD</span><span class="pen-n">City market, YTD</span><span class="pen-n">Customers, YTD</span></div>
      ${penRows}
      <p class="pen-foot">Turnover and customers: store data, 1 Jan to 25 Oct 2026. Market: India City Ranking 2025's 2026 projection, pro-rated to those 298 days. Every city's market grows about 10.7% a year to 2030.</p></div>`;

  // sports market pulse
  const PLAY = [["Pune", 12, 16, "var(--blue)"], ["Gujarat", 10, 14, "var(--guj)"], ["Madhya Pradesh", 8, 12, "var(--mp)"]];
  $("#pulsePlay").innerHTML = PLAY.map(([n, a, b, c]) => `<div class="pp-row"><span>${n}</span>
    <div class="pp-track"><i style="left:${a / 20 * 100}%;width:${(b - a) / 20 * 100}%;background:${c}"></i></div><b>${a}-${b}%</b></div>`).join("") +
    `<div class="pp-axis"><span>0%</span><span>10%</span><span>20%</span></div>`;
  const MIXCOL = ["var(--blue)", "#8A92E0", "var(--teal)", "var(--guj)", "var(--mp)"];
  const mixTot = D.puneSports.reduce((a, x) => a + x.total, 0);
  if ($("#pulseMix")) $("#pulseMix").innerHTML = `<div class="pm-bar">${D.puneSports.map((x, i) => `<i style="flex:${x.total} 1 0;background:${MIXCOL[i]}" data-tip="<b>${esc(x.sport)}</b><br>${x.total} Cr, ${Math.round(x.total / mixTot * 100)}%"></i>`).join("")}</div>
    <ul class="pm-list">${D.puneSports.map((x, i) => `<li><i style="background:${MIXCOL[i]}"></i><span>${esc(x.sport)}</span><b>${Math.round(x.total / mixTot * 100)}%</b></li>`).join("")}</ul>`;
  // Big outside events (not Decathlon's), checked against news reports on 26 Oct 2026; see context.md
  const PULSE_EVENTS = [
    ["Oct - Dec", "Khel Mahakumbh 2026", "Gujarat", "76 lakh players and 3.5 lakh teams registered across 35+ sports"],
    ["29 Nov", "Adani Ahmedabad Marathon", "Gujarat", "10th edition; a record 24,000+ runners last year"],
    ["Early Dec", "Pune International Marathon", "Pune", "15,000 runners and 70+ international athletes last year"],
    ["Mid Dec", "Bajaj Pune Marathon", "Pune", "Full, half, 10K and 5K on the city's roads"],
    ["Jan", "Khelo MP Youth Games", "MP", "19 days, 28 sports, players from all 313 blocks"],
    ["Jan", "Army Marathon, Bhopal", "MP", "About 6,500 runners in 2025"],
    ["26-31 Jan", "Bajaj Pune Grand Tour", "Pune", "UCI 2.1 cycling, 6 stages; 2.5 million roadside fans in 2026"],
    ["31 Jan", "Vadodara International Marathon", "Gujarat", "1.1 lakh registrations in 2026"],
    ["Early Feb", "Indore Marathon", "MP", "13th edition; full, half, 10K and 5K"]
  ];
  // market size and the fastest-growing sport (Ahmedabad catchment master, Surat opening plan)
  const MARKETS = [["Ahmedabad", 1801, 2698, "2023 → 2027", "10.6% a year"], ["Surat", 1591, 2451, "2025 → 2030", "9.0% a year"]];
  const mMax = Math.max(...MARKETS.map(m => m[2]));
  if ($("#pulseMarkets")) $("#pulseMarkets").innerHTML = MARKETS.map(m => `<div class="mk-row"><span>${m[0]}<small>${m[3]}</small></span>
    <div class="mk-bars"><i class="from" style="--w:${m[1] / mMax * 100}%"></i><i class="to" style="--w:${m[2] / mMax * 100}%"></i></div>
    <b>₹${m[1].toLocaleString("en-IN")} → ₹${m[2].toLocaleString("en-IN")} Cr<small>${m[4]}</small></b></div>`).join("");
  if ($("#pulsePickle")) {
  const PICKLE = [["Rajkot", 900], ["Motera", 175], ["Dumas Road, Surat", 115], ["Baroda", 74], ["Nexus", 71]];
  const pMax = Math.log10(PICKLE[0][1] + 10);
  $("#pulsePickle").innerHTML = PICKLE.map(p => `<div class="pk-row"><span>${p[0]}</span><i style="--w:${Math.log10(p[1] + 10) / pMax * 100}%"></i><b>+${p[1]}%</b></div>`).join("") +
    `<p class="pk-note">Rajkot grew from a very small base. Bar lengths use a log scale so every store stays readable.</p>`;
  }

  // Kantar 2024: campaign exposure and how Gujarat over- or under-indexes by channel
  const kx = document.getElementById("kantarExposure");
  if (kx) {
    const EXPO = [["Mumbai", 83], ["National", 72], ["Gujarat", 53], ["Pune", 49]];
    kx.innerHTML = `<h4>Saw a recent Decathlon campaign</h4>` + EXPO.map(e => `<div class="kx-row ${e[0] === "Gujarat" || e[0] === "Pune" ? "ours" : ""}"><span>${e[0]}</span><i style="--w:${e[1]}%"></i><b>${e[1]}%</b></div>`).join("");
    const IDX = [["Radio", 127], ["Cinema", 119], ["Newspaper and print", 111], ["Streaming", 107], ["TV", 106], ["At an event", 104], ["Search", 103],
                 ["Friends and family", 100], ["In a shop", 100], ["Online video", 97], ["Social and messaging", 94], ["Outdoor", 94]];
    document.getElementById("kantarIndex").innerHTML = `<h4>Gujarat vs national, by channel (100 = same as India)</h4>` +
      IDX.map(i => { const d = i[1] - 100; return `<div class="ki-row"><span>${i[0]}</span><div class="ki-track"><i class="${d >= 0 ? "up" : "down"}" style="${d >= 0 ? `left:50%;width:${d / 30 * 50}%` : `right:50%;width:${-d / 30 * 50}%`}"></i><em></em></div><b>${i[1]}</b></div>`; }).join("");
  }

  const EV_COL = { Pune: "var(--blue)", Gujarat: "var(--guj)", MP: "var(--mp)" };
  $("#pulseEvents").innerHTML = PULSE_EVENTS.map(([d, t, st, x]) => `<li><span>${d}</span><b>${t} <em style="color:${EV_COL[st]}">${st}</em></b><small>${x}</small></li>`).join("");

  const per = Object.keys(POP).map(k => ({ k, v: POP[k] / STORES[k] }));
  const maxPer = Math.max(...per.map(p => p.v));
  const NAME = { Pune: "Pune", Gujarat: "Gujarat", MP: "Madhya Pradesh" };
  const COL = { Pune: "var(--blue)", Gujarat: "var(--guj)", MP: "var(--mp)" };
  $("#perStore").innerHTML = per.map(p => `<div class="ps-row"><span>${NAME[p.k]}<small>${STORES[p.k]} stores</small></span>
    <i style="--w:${p.v / maxPer * 100}%;background:${COL[p.k]}"></i><b>${p.v.toFixed(1)}M</b></div>`).join("");


  /* ---------- personas ---------- */
  const NEXUS = [
    { n: "Sports Family", a: "Family Sports Enabler", tag: "Sport brings the family together", now: 32, target: 32, tLabel: "Maintain", img: "u-family-football.jpg", pos: "center 35%",
      age: "30-50", gender: "Family decision", lives: "Vastrapur, Bodakdev, Satellite, Ambawadi, Thaltej", basket: "₹4,000-10,000", abv: "Very high",
      visit: "Every 1-2 months, weekend evenings", online: "30% online", sports: "Swimming, cricket, cycling, football, badminton",
      trigger: "School season, holidays, summer camps", pain: "Finding everything for the family", need: "Convenience and trust" },
    { n: "Active Lifestyle Professional", a: "Health Optimiser", tag: "Fitness is part of everyday life", now: 25, target: 27, img: "u-runclub.jpg", pos: "center 30%",
      age: "24-40", gender: "65% men, 35% women", lives: "Satellite, SG Highway, Bodakdev, Vastrapur, Navrangpura", basket: "₹3,000-8,000", abv: "High",
      visit: "Monthly, weekday evenings", online: "40% online", sports: "Running, gym, yoga, cycling, walking, pickleball",
      trigger: "Fitness goals, marathons, gym membership", pain: "Limited time", need: "Performance and comfort" },
    { n: "Outdoor & Travel Explorer", a: "Weekend Adventurer", tag: "Live for the next adventure", now: 23, target: 17, img: "u-trek-couple.jpg", pos: "center 45%",
      age: "25-45", gender: "Family driven", lives: "Bopal, Shela, Thaltej, SG Highway", basket: "₹5,000-12,000", abv: "High",
      visit: "Seasonal, weekends", online: "35% online", sports: "Hiking, trekking, camping, travel",
      trigger: "Upcoming trip plans", pain: "Choosing the right gear", need: "Durable gear" },
    { n: "Progressive Sports Enthusiast", a: "Beginner to intermediate player", tag: "Keep improving every day", now: 11, target: 22, img: "u-pickleball.jpg", pos: "center 25%",
      age: "16-34", gender: "Balanced", lives: "Navrangpura, Naranpura, Vastrapur", basket: "₹2,000-6,000", abv: "Medium",
      visit: "Every 1-2 months, evenings and weekends", online: "25% online", sports: "Badminton, tennis, football, pickleball, running",
      trigger: "Joining an academy or a new sport", pain: "Confusion about equipment", need: "Right equipment and guidance" },
    { n: "Young Trend & Discovery", a: "Future Sports Consumer", tag: "Discover. Try. Play.", now: 9, target: 14, img: "u-women-football.jpg", pos: "center 40%",
      age: "18-24", gender: "Balanced", lives: "University and PG catchments", basket: "₹1,000-3,000", abv: "Low to medium",
      visit: "Occasional, weekend evenings", online: "60% online", sports: "Gym, walking, beginner sports",
      trigger: "Trends, influencers, offers", pain: "Doesn't know where to start", need: "Affordable discovery" },
    { n: "The Patron", a: "Business owner (wholesale and network)", tag: "My time is worth more than the discount.", now: null, target: null, img: "u-golf.jpg", pos: "center 30%",
      age: "35-55", gender: "75% men, 25% women", lives: "Bodakdev 380054, Science City 380061, Ambli 380055, Bopal 380059", basket: "₹10,000-60,000", abv: "Very high",
      visit: "Quarterly, Sunday mornings", online: "Not given", sports: "Golf, cycling, walking, gym, trekking",
      trigger: "Health goal, doctor's advice, a trip, a corporate order", pain: "Lack of time. Will not queue or hunt for staff.", need: "A frictionless outcome" }
  ];
  // Pune persona sheet (Pune_persona.xlsx, 26 Oct 2026). Daily Athlete age kept at 16-34 on the user's instruction (sheet: 16 to 35).
  const KOTHRUD = [
    { n: "Urban Performance Professional", share: "30-35%", d: "Time-conscious professionals seeking premium sports products, convenience and high-performance solutions for their active lifestyle.",
      age: "24-38", hh: "2-3", inc: "₹10-30 L+", basket: "₹3,500-5,500", freq: "8-12 orders a year", conv: "28-32%", clv: "₹30K-50K a year",
      occ: "IT, finance, doctors, consultants, entrepreneurs", plays: "Running, fitness, cycling, swimming", pins: "411038, 411052, 411004",
      driver: "Performance and convenience", digital: "App, Click & Collect, express delivery (90-95% digital)", pain: "Time poor",
      store: "Fast checkout, expert teammates", community: "Running clubs, cycling groups", y1: "₹8.3-9.0 Cr (32-35%)", grow: "Premium running, fitness and omni",
      img: "u-kiprun.jpg", pos: "center 40%" },
    { n: "Sports Driven Family", share: "25-30%", d: "Health-conscious families investing in sports, fitness and long-term development for every family member.",
      age: "Parents 30-45, kids 6-18", hh: "4-5", inc: "₹12-35 L+", basket: "₹5,500-9,000", freq: "6-8 orders a year", conv: "35-40%", clv: "₹40K-70K a year",
      occ: "Working parents, professionals, business owners", plays: "Football, cricket, badminton, tennis", pins: "411038, 411052, 411058, 411051",
      driver: "Quality and family value", digital: "Omnichannel (80-90% digital)", pain: "Multiple shopping trips",
      store: "One-stop family store", community: "School events, family sports days", y1: "₹7.0-7.8 Cr (27-30%)", grow: "Kids' sports and family lifetime value",
      img: "u-family-cycle.jpg", pos: "center 30%" },
    { n: "Daily Athlete & Academy Player", share: "20-25%", d: "Regular sports practitioners who need technical products, expert guidance and frequent equipment upgrades.",
      age: "16-34", hh: "3-4", inc: "₹4-15 L", basket: "₹2,000-3,800", freq: "10-16 orders a year", conv: "30-35%", clv: "₹22K-40K a year",
      occ: "Students, academy players, young professionals", plays: "Tennis, badminton, cricket", pins: "411038, 411004, 411030",
      driver: "Technical performance", digital: "YouTube, Instagram, reviews (95%+ digital)", pain: "Product availability",
      store: "Technical services", community: "Academies, leagues, tournaments", y1: "₹5.2-6.0 Cr (20-23%)", grow: "Technical sports and services",
      img: "u-padel.jpg", pos: "center 0%" },
    { n: "Active Urban Explorer", share: "15-20%", d: "Adventure and outdoor enthusiasts looking for reliable gear for trekking, travel, cycling and weekend experiences.",
      age: "22-40", hh: "2-3", inc: "₹8-20 L", basket: "₹2,800-4,500", freq: "3-5 orders a year", conv: "18-25%", clv: "₹12K-25K a year",
      occ: "Young professionals, travellers", plays: "Hiking, trekking, cycling", pins: "411038, 411021, 411058",
      driver: "Adventure and experience", digital: "Instagram, Maps, travel blogs (92-95% digital)", pain: "Last-minute purchases",
      store: "Quick outdoor shopping", community: "Trekking clubs, outdoor communities", y1: "₹3.8-4.5 Cr (15-17%)", grow: "Outdoor, hiking and seasonal categories",
      img: "u-trek-couple.jpg", pos: "center 45%" },
    { n: "Active Senior Lifestyle", share: "10-15%", d: "Retired or soon-to-retire residents focused on keeping an active, healthy and independent lifestyle.",
      age: "55-70", hh: "2-3", inc: "₹8-25 L+ (pension, investments, rent)", basket: "₹3,000-5,000", freq: "4-6 orders a year", conv: "35-40%", clv: "₹18K-35K a year",
      occ: "Retired professionals, government employees, business owners, professors, senior executives", plays: "Walking, yoga, swimming, cycling, table tennis, badminton, fitness",
      pins: "411038, 411052, 411004, 411051", driver: "Comfort, durability, safety and health", digital: "Apps, WhatsApp and home delivery, growing (60-75% digital)",
      pain: "Few quality sports and wellness shops nearby; wants personal help", store: "Knowledgeable teammates, easy navigation, quick billing, health-focused range",
      community: "Morning walks, yoga groups, social clubs, wellness activities", y1: "₹2.0-2.8 Cr", grow: "Walking, fitness, yoga, swimming, cycling, recovery and wellness",
      img: "u-seniors.jpg", pos: "center 30%" }
  ];
  const ph = (img, name, pos) => img
    ? `<img src="assets/img/${img}" alt="" loading="lazy"${pos ? ` style="object-position:${pos}"` : ""}>`
    : `<div class="pc-mono">${esc(name.split(" ").map(w => w[0]).join("").slice(0, 2))}</div>`;
  const kv = (k, v) => v ? `<div><dt>${k}</dt><dd>${esc(v)}</dd></div>` : "";

  function showBoard(b) {
    $$("#personaSeg button").forEach(x => x.setAttribute("aria-pressed", x.dataset.b === b));
    if (b === "nexus") {
      const max = 32;
      $("#personaIntro").innerHTML = `
        <div class="pi-text"><h3 class="display-s"><span class="lt">Ahmedabad:</span> where the mix is heading</h3>
          <p>Built from a 400-person walk-in survey (35%), catchment demographics (25%), footfall analytics (15%), category performance (15%) and the Ahmedabad sports ecosystem (10%). The plan grows progressive players from 11% to 22% of customers and young discoverers from 9% to 14%. The Patron, a business-owner buyer, is not in the mix yet.</p></div>
        <div class="pi-chart">${NEXUS.filter(p => p.now !== null).map(p => `<div class="mix2"><span>${esc(p.n)}</span>
          <div class="mix2-bars"><i class="now" style="--w:${p.now / max * 100}%" data-tip="<b>${esc(p.n)}</b><br>Share now ${p.now}%"></i><i class="tgt" style="--w:${p.target / max * 100}%" data-tip="<b>${esc(p.n)}</b><br>Target ${p.tLabel || p.target + "%"}"></i></div>
          <b>${p.now}% <em>→ ${p.tLabel || p.target + "%"}</em></b></div>`).join("")}
          <div class="mix2-key"><span><i class="now"></i>Share now</span><span><i class="tgt"></i>Target</span></div></div>`;
      $("#personaGrid").innerHTML = NEXUS.map(p => `<article class="pc">
        <div class="pc-img">${ph(p.img, p.n, p.pos)}<span class="pc-share">${p.now === null ? "Not yet in mix" : `${p.now}% now`}</span></div>
        <div class="pc-body"><h4>${esc(p.n)}</h4><p class="pc-tag">“${esc(p.tag)}”</p>
          <dl>${kv("Age", p.age)}${kv("Gender", p.gender)}${kv("Basket", p.basket)}${kv("ABV", p.abv)}${kv("Visits", p.visit)}${kv("Online share", p.online)}</dl>
          <dl class="pc-wide">${kv("Lives in", p.lives)}${kv("Plays", p.sports)}${kv("Buys when", p.trigger)}${kv("Pain point", p.pain)}${kv("Needs", p.need)}</dl></div></article>`).join("");
    } else {
      $("#personaIntro").innerHTML = `
        <div class="pi-text"><h3 class="display-s"><span class="lt">Pune:</span> five personas, one destination</h3>
          <p>The team's purpose: be Pune's multi-sport smart city partner, bringing sport closer to people. Shares are the team's estimates of Pune's customers.</p></div>
        <div class="pi-chart">${KOTHRUD.map(p => { const [lo, hi] = p.share.replace("%", "").split(/[--]/).map(Number); return `<div class="mix2"><span>${esc(p.n)}</span>
          <div class="pune-bar" data-tip="<b>${esc(p.n)}</b><br>${lo}-${hi}% of customers"><i class="lo" style="width:${lo / 35 * 100}%"></i><i class="hi" style="width:${(hi - lo) / 35 * 100}%"></i></div><b>${lo}-${hi}%</b></div>`; }).join("")}</div>`;
      $("#personaGrid").innerHTML = KOTHRUD.map(p => `<article class="pc">
        <div class="pc-img">${ph(p.img, p.n, p.pos)}<span class="pc-share">${p.share} of customers</span></div>
        <div class="pc-body"><h4>${esc(p.n)}</h4><p>${esc(p.d)}</p>
          <dl>${kv("Age", p.age)}${kv("Household", p.hh)}${kv("Income", p.inc)}${kv("Basket", p.basket)}${kv("Visits", p.freq)}${kv("Conversion", p.conv)}</dl>
          <dl class="pc-wide">${kv("Occupation", p.occ)}${kv("Plays", p.plays)}${kv("Lives in (pincodes)", p.pins)}${kv("Decides on", p.driver)}${kv("Online", p.digital)}${kv("Pain point", p.pain)}${kv("Expects in store", p.store)}${kv("Community", p.community)}${kv("Growth opportunity", p.grow)}</dl></div></article>`).join("");
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
  if ($("#brandGrid")) $("#brandGrid").innerHTML = g;

  const EVENTS = [
    { d: "31 Oct", t: "Sports Utsav Junior", s: "Our kids' skating workshop, 11 AM - 2 PM.", k: "ours" },
    { d: "Oct", t: "Navratri and Dussehra", s: "Gujarat's biggest festival season. Gift a Sport and the Dussehra sale ride it.", k: "culture" },
    { d: "27-29 Nov", t: "HYROX", s: "The fitness race format. Black Friday lands the same weekend.", k: "ext" },
    { d: "29 Nov", t: "Adani Marathon", s: "Ahmedabad's marathon. Run kit, bibs and Kiprun visibility.", k: "ext" },
    { d: "Nov", t: "Black Friday, everywhere", s: "Competitors go deep on discounts, urgency and retargeting.", k: "comp" },
    { d: "14 Mar - 30 May", t: "IPL 2027", s: "Cricket fever across the cluster. Pune runs pickleball in March and cricket in April.", k: "ext" },
    { d: "2030", t: "Commonwealth Games", s: "Gujarat hosts. Every partnership we build now compounds.", k: "ext" }
  ];
  if ($("#extEvents")) $("#extEvents").innerHTML = EVENTS.map(e => `<div class="ev ev-${e.k}"><span class="ev-d">${e.d}</span><b>${e.t}</b><p>${e.s}</p></div>`).join("");

  /* ---------- films: muted by default, the presenter turns sound on ----------
     Works for every .sm-video on the page, including ones the playbook adds later. */
  const reduced = matchMedia("(prefers-reduced-motion: reduce)").matches;
  const setBtn = (btn, on) => { if (!btn) return; btn.setAttribute("aria-pressed", on); $("span", btn).textContent = on ? "Sound on" : "Sound off"; };
  const muteEverything = except => {
    $$(".sm-video").forEach(f => { const v = $("video", f); if (v !== except) { v.muted = true; setBtn($(".snd-btn", f), false); } });
    $$(".reel-phone").forEach(r => { const v = $("video", r); if (v && v !== except) { v.muted = true; r.dataset.sound = "off"; const t = $(".snd", r); if (t) t.textContent = "Sound off"; } });
    $$(".phone video, .spot video").forEach(v => { if (v !== except) v.muted = true; });
  };
  // If the browser refuses to play with sound, fall back to muted so the button never lies.
  const playOrFallback = (v, btn) => v.play().catch(() => {
    v.muted = true;
    setBtn(btn, false);
    v.play().catch(() => {});
  });
  const filmObs = new IntersectionObserver(entries => entries.forEach(en => {
    const v = en.target, btn = $(".snd-btn", v.parentElement);
    if (en.isIntersecting) {
      if (!v.src && v.dataset.src) v.src = v.dataset.src;
      if (!reduced || v.dataset.user) playOrFallback(v, btn);
    } else v.pause();
  }), { threshold: 0.15 });
  $$(".sm-video video").forEach(v => { v.muted = true; filmObs.observe(v); });

  document.addEventListener("click", e => {
    const tile = e.target.closest(".sm-video");
    if (tile) {
      const v = $("video", tile), btn = $(".snd-btn", tile);
      const on = !btn || btn.getAttribute("aria-pressed") !== "true";
      if (on) {
        muteEverything(v);
        if (!v.src && v.dataset.src) { v.src = v.dataset.src; v.load(); }
        v.dataset.user = "1";
        v.muted = false;
        v.volume = 1;
        try { v.currentTime = 0; } catch (err) { /* not seekable yet, plays from where it is */ }
        setBtn(btn, true);
        playOrFallback(v, btn);
      } else {
        v.muted = true;
        setBtn(btn, false);
      }
      return;
    }
    // a reel turned up elsewhere silences the films
    if (e.target.closest(".reel-phone")) $$(".sm-video").forEach(f => { $("video", f).muted = true; setBtn($(".snd-btn", f), false); });
  });
})();
