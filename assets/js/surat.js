/* Surat (Adajan) opening plan.
   Source: DSI Adajan, Surat · Catchment & Persona + Opening Plan workbook, prepared 14 Oct 2026
   (START HERE, ALL NUMBERS, OPENING PLAN, OPENING WEEKEND, OFFERS, SURAT INSIGHTS sheets). */
(() => {
  "use strict";
  const root = document.getElementById("suratApp");
  if (!root) return;
  const esc = s => String(s).replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
  const L = n => (n / 1e5).toLocaleString("en-IN", { maximumFractionDigits: 1 }) + " L";
  const num = n => Math.round(n).toLocaleString("en-IN");

  const KPI = [
    ["₹85 L", "Opening weekend target", "Fri 18 – Sun 20 Dec"],
    ["18,215", "Walk-ins needed in 3 days", "at 25.9% conversion"],
    ["₹2.5 Cr", "First 30 days", "18 Dec – 16 Jan"],
    ["49,580", "Walk-ins needed in 30 days", "13,950 bills at a ₹1,800 basket"],
    ["₹18 L", "Budget", "The plan currently spends ₹24.9 L"],
    ["₹50", "Cost per walk-in", "Bhopal's opening: ₹153"]
  ];

  const PHASES = [
    ["P0", "Ground game", "19 Oct – 2 Nov", "Customer list of 10,087 near Adajan, map 150+ places, sign partners, permits, Gujarati creative"],
    ["P1", "Kaink navu aave che", "3 – 22 Nov", "“Something new is coming”: club opens, teaser shop front and reels. Stay light over Diwali (8 Nov) while Surat is away"],
    ["P2", "Reveal", "23 Nov – 7 Dec", "Date reveal, hoardings, Ramat Rath in 36 societies, society sports days, old-shoe drive, Hazira kiosks, coach codes"],
    ["P3", "10 Divas, 10 Ramat", "8 – 17 Dec", "Countdown: treasure hunt (12 Dec), Happy Streets #1 on LP Savani (13 Dec), radio, Cinepolis, 80,000 leaflets, creators' preview"],
    ["P4", "Chalo Ramiye weekend", "18 – 20 Dec", "Pehli Ramat + night run (Fri), Night Carnival (Sat), sunrise run + sports carnival (Sun), gifts on bigger bills"],
    ["P5", "Ramat chalu rahe", "21 Dec – 16 Jan", "“Keep playing”: Santa Party, New Year run, Happy Streets #2 (3 Jan), box cricket league, pickle league, Kai Po Che!"]
  ];

  const WEEKEND = [
    ["Fri 18 Dec", "Opening day", 2635000, ["10:00 Pehli Ramat inauguration with Surat athletes", "16:00 School and academy kit desk", "19:30 LP Savani After Dark: 3K / 5K night run ending at the store"]],
    ["Sat 19 Dec", "Night Carnival", 2805000, ["08:00 Golden hour for pass holders", "Hourly plank, push-up and skipping challenges", "18:00 Adajan Night Carnival: box cricket under lights, pickleball, skating, DJ, food trucks"]],
    ["Sun 20 Dec", "Sunrise run + sports carnival", 3060000, ["06:45 Tapi Sunrise Run (5K / 10K) + yoga, 600 runners", "10:00 – 19:00 Sports carnival: 15 sport zones, kids' obstacle course", "Pickleball King of the Court, carnival finals, Bumper Draw launch"]]
  ];

  const WEEKS = [["W1", "Opening weekend", 8500000], ["W2", "", 5551691], ["W3", "", 4683783], ["W4", "Pickle & Cricket Week", 3934818], ["W5", "Kai Po Che!", 2440548]];

  const SOURCES = [["Digital and media", 25100, "var(--blue)"], ["Community and partners", 12409, "var(--teal)"], ["Events", 12095, "var(--purple)"]];

  const TOP = [
    ["Online ads near the store", 6000], ["Happy Streets on LP Savani", 5400], ["Shop front and street footfall", 5200],
    ["WhatsApp to customers near Adajan", 3530], ["Influencers and Surat city pages", 3000], ["Ramat Passport (come back)", 2732],
    ["SMS and app to all Surat customers", 2700], ["Hoardings and direction boards", 2000], ["Ramat Club before opening", 2000],
    ["Tapi Sunrise Run + sports carnival", 1980], ["Adajan Night Carnival", 1925]
  ];

  const MARKET = [
    ["₹1,591 Cr", "Surat's sports market, 2025", "Growing to ₹2,451 Cr by 2030, about 9% a year"],
    ["₹674 Cr", "Inside a 20-minute drive", "42% of the city's sports spend"],
    ["₹18 Cr", "What Adajan can win in Year 1", "In-store business case"],
    ["1.2% → 2.9%", "Decathlon's share of that market", "Today, then with Adajan in Year 1"],
    ["5.64 lakh", "People within 15 minutes", "1.34 lakh households, median age about 30"],
    ["₹235 Cr", "Adajan living area, #1 in Surat", "Decathlon's share there is only 0.75%"]
  ];

  const INSIGHTS = [
    ["Surat leaves town for Diwali", "Diamond units close 3–4 weeks. Tease before Diwali, stay light 6–22 Nov, go big from 23 Nov."],
    ["Distance decides who shops", "64% of homes in Vesu and Athwa shop at Dumas, only 3% in Adajan 395009. The message: “Decathlon now 6 minutes from you”."],
    ["A warm base already exists", "10,087 Dumas customers live in Adajan's pincodes and Katargam. WhatsApp to them is the cheapest walk-in."],
    ["Gujarat notices radio, cinema and print", "Kantar 2024: radio index 127, cinema 119, print 111. So radio, Cinepolis and leaflets are in the mix."],
    ["Pickleball doubled", "Padel and pickleball at Dumas +108% (Jan–Sep 2026). A court at the Night Carnival and a Pickle Premier League."],
    ["Women are under-served", "751 women per 1,000 men in the catchment. A women's run group, a She Plays zone and a women-only pickleball slot."],
    ["Dec–Jan is the best outdoor season", "31°C days, 16°C nights, almost no rain. Sunrise runs, car-free Sunday mornings and carnivals after sunset."],
    ["₹2.5 Cr is a stretch", "A normal Year-1 month is ₹1.5 Cr, so month one is 1.67x. The tracker holds a lever list for the gap."]
  ];

  const GIFTS = [["₹2,499+", "Sports sipper"], ["₹3,999+", "10 L hiking backpack"], ["₹5,999+", "17 L football backpack"], ["₹9,999+", "24 L backpack"]];

  const BENCH = [
    ["Bhopal DB Mall (2025)", "Mall, MP", 2623331, 17187, 8473738, 153],
    ["Nexus Ahmedabad (2025)", "Mall, Gujarat", 2405000, 10500, 6500000, 229],
    ["Pondy Bazaar (2025)", "High street, Chennai", 3000000, 9700, 9374300, 309],
    ["Pune (plan, opening week)", "Convenience, Pune", 2300000, 15000, 5300000, 153],
    ["Adajan (opening weekend)", "High street, Surat", 1800000, 18215, 8500000, 36]
  ];

  const WATCH = [
    "Date: the expansion retroplan shows opening on 27 Dec. Confirm 18 Dec before booking hoardings, radio and cinema.",
    "Budget: the plan spends ₹24.9 L against an ₹18 L budget.",
    "Permissions for Happy Streets, the night run, sunrise run and Night Carnival need police and SMC approval: apply by 26 Oct.",
    "Tills: at a ₹1,800 basket the weekend needs 4,700 bills. Up to 11 tills are needed at Sunday's peak.",
    "Stock: winter jackets, fleeces, trek shoes, running shoes and home gym deep by 10 Dec."
  ];

  const maxW = Math.max(...WEEKS.map(w => w[2]));
  const totSrc = SOURCES.reduce((a, s) => a + s[1], 0);
  const maxTop = TOP[0][1];

  root.innerHTML = `
    <div class="sr-hero">
      <div class="sr-hero-media">
        <img src="assets/img/surat-store.jpg" alt="Render of the new large-format Decathlon store" loading="lazy">
        <img src="assets/img/surat-grand-opening.jpg" alt="Grand opening Adajan Surat poster" loading="lazy">
        <img src="assets/img/surat-offer.jpg" alt="Adajan opening gifts poster" loading="lazy">
      </div>
      <dl class="sr-kpis">${KPI.map(k => `<div><dt>${k[1]}</dt><dd>${k[0]}</dd><small>${k[2]}</small></div>`).join("")}</dl>
    </div>

    <h3 class="display-s sr-sub"><span class="lt">Six phases,</span> from teaser to day 30</h3>
    <ol class="sr-phases">${PHASES.map((p, i) => `<li class="${i === 4 ? "peak" : ""}"><span class="ph-id">${p[0]}</span><b>${esc(p[1])}</b><span class="ph-date">${p[2]}</span><p>${esc(p[3])}</p></li>`).join("")}</ol>

    <h3 class="display-s sr-sub"><span class="lt">The opening weekend:</span> ₹85 L in three days</h3>
    <div class="sr-weekend">${WEEKEND.map(d => `<article class="sr-day"><span class="sr-date">${d[0]}</span><h4>${d[1]}</h4><b class="sr-target">${L(d[2])}</b><ul>${d[3].map(x => `<li>${esc(x)}</li>`).join("")}</ul></article>`).join("")}</div>
    <div class="sr-weeks">
      <h4>Turnover by week, first 30 days</h4>
      ${WEEKS.map(w => `<div class="sr-week"><span>${w[0]}${w[1] ? `<small>${w[1]}</small>` : ""}</span><i style="--w:${w[2] / maxW * 100}%" data-tip="<b>${w[0]}</b><br>${L(w[2])}"></i><b>${L(w[2])}</b></div>`).join("")}
    </div>

    <div class="sr-two">
      <div class="sr-card">
        <h3 class="display-s"><span class="lt">Where</span> 49,600 walk-ins come from</h3>
        <p>28 strategies, 81 events and 126 partners. About 53,800 people expected at events.</p>
        <div class="sr-src">${SOURCES.map(s => `<i style="flex:${s[1]} 1 0;background:${s[2]}" data-tip="<b>${s[0]}</b><br>${num(s[1])} walk-ins"></i>`).join("")}</div>
        <ul class="sr-src-key">${SOURCES.map(s => `<li><i style="background:${s[2]}"></i>${s[0]}<b>${num(s[1])} · ${Math.round(s[1] / totSrc * 100)}%</b></li>`).join("")}</ul>
        <h4>Biggest drivers of walk-ins</h4>
        ${TOP.map(t => `<div class="sr-top"><span>${esc(t[0])}</span><i style="--w:${t[1] / maxTop * 100}%"></i><b>${num(t[1])}</b></div>`).join("")}
      </div>
      <div class="sr-card">
        <h3 class="display-s"><span class="lt">The market</span> we are opening into</h3>
        <div class="sr-market">${MARKET.map(m => `<div><b>${m[0]}</b><span>${m[1]}</span><small>${m[2]}</small></div>`).join("")}</div>
        <h4>Gifts, never discounts</h4>
        <p class="sr-note">Decathlon keeps full prices. Opening-weekend gifts on bigger bills, a weekly “Poora Bill Maaf” draw on bills of ₹2,999+ (grand prize: a Rockrider cycle on 16 Jan), and a Ramat Passport that rewards coming back.</p>
        <div class="sr-gifts">${GIFTS.map(g => `<div><b>${g[0]}</b><span>${g[1]}</span></div>`).join("")}</div>
      </div>
    </div>

    <h3 class="display-s sr-sub"><span class="lt">What we learned,</span> and what we do about it</h3>
    <div class="sr-insights">${INSIGHTS.map((x, i) => `<div><span class="sr-i">${i + 1}</span><b>${esc(x[0])}</b><p>${esc(x[1])}</p></div>`).join("")}</div>

    <div class="sr-two">
      <div class="sr-card">
        <h3 class="display-s"><span class="lt">Against</span> other openings</h3>
        <div class="sr-bench" role="table">
          <div class="sb-row sb-head" role="row"><span>Opening</span><span>Budget</span><span>Walk-ins</span><span>Turnover</span><span>₹ per walk-in</span></div>
          ${BENCH.map(b => `<div class="sb-row ${b[0].startsWith("Adajan") ? "ours" : ""}" role="row"><span>${esc(b[0])}<small>${esc(b[1])}</small></span><span>${L(b[2])}</span><span>${num(b[3])}</span><span>${L(b[4])}</span><span>₹${b[5]}</span></div>`).join("")}
        </div>
      </div>
      <div class="sr-card sr-watch">
        <h3 class="display-s"><span class="lt">Watch</span> outs</h3>
        <ul>${WATCH.map(w => `<li>${esc(w)}</li>`).join("")}</ul>
      </div>
    </div>`;
})();
