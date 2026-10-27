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
    ["₹85 L", "Target for the first 3 days", "Sun 27 - Tue 29 Dec"],
    ["18,215", "Walk-ins needed in 3 days", "at 25.9% conversion"],
    ["₹2.5 Cr", "First 30 days", "27 Dec - 25 Jan"],
    ["49,580", "Walk-ins needed in 30 days", "13,950 bills at a ₹1,800 basket"],
    ["₹18 L", "Budget", "The plan currently spends ₹24.9 L"],
    ["₹50", "Cost per walk-in", "Bhopal's opening: ₹153"]
  ];

  // Timeline from the team (27 Oct 2026): hoardings locked 30 Oct, AOPs from 1 Nov, then events and
  // community activation, grand launch Sun 27 Dec. Activities come from the opening-plan workbook.
  const PHASES = [
    ["1", "Hoardings locked", "30 Oct", "Hoardings finalised, led by the Pal Umra Bridge board (40 x 20 ft, Nov 2026 to Oct 2027) between Adajan, Piplod and Vesu"],
    ["2", "AOPs in the catchment", "From 1 Nov", "AOPs finalised and kit walls placed at gyms, pools, academies and studios around Adajan; partner list of 150+ places and the 10,087 nearby customers"],
    ["3", "Kaink navu aave che", "1 - 22 Nov", "“Something new is coming”: teaser shop front and reels. Stay light over Diwali (8 Nov) while Surat is away"],
    ["4", "Events and community activation", "23 Nov - 26 Dec", "Date reveal, Ramat Rath in 36 societies, society sports days, old-shoe drive, treasure hunt, Happy Streets on LP Savani, radio, Cinepolis, 80,000 leaflets, creators' preview, 10-day countdown"],
    ["5", "Grand launch", "Sun 27 Dec", "Pehli Ramat inauguration with Surat athletes, Tapi Sunrise Run, sports carnival, gifts on bigger bills"],
    ["6", "Ramat chalu rahe", "28 Dec - 25 Jan", "“Keep playing”: Night Carnival, New Year run, Happy Streets #2, box cricket league, pickle league, Kai Po Che! for Uttarayan (14 Jan)"]
  ];

  // Day targets are the workbook's three opening-day targets (planned for 18-20 Dec), carried to the first three days.
  const WEEKEND = [
    ["Sun 27 Dec", "Grand launch", 3060000, ["06:45 Tapi Sunrise Run (5K / 10K) + yoga, 600 runners", "10:00 Pehli Ramat inauguration with Surat athletes", "10:00 - 19:00 Sports carnival: 15 sport zones, kids' obstacle course"]],
    ["Mon 28 Dec", "Night Carnival", 2805000, ["Hourly plank, push-up and skipping challenges", "16:00 School and academy kit desk", "18:00 Adajan Night Carnival: box cricket under lights, pickleball, skating, DJ, food trucks"]],
    ["Tue 29 Dec", "Night run", 2635000, ["08:00 Golden hour for pass holders", "Pickleball King of the Court, Bumper Draw launch", "19:30 LP Savani After Dark: 3K / 5K night run ending at the store"]]
  ];

  const WEEKS = [["W1", "Launch week", 8500000], ["W2", "New Year", 5551691], ["W3", "Kai Po Che!", 4683783], ["W4", "Pickle & Cricket Week", 3934818], ["W5", "", 2440548]];

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
    ["Surat leaves town for Diwali", "Diamond units close 3-4 weeks. Tease before Diwali, stay light 6-22 Nov, go big from 23 Nov."],
    ["Distance decides who shops", "64% of homes in Vesu and Athwa shop at Dumas, only 3% in Adajan 395009. The message: “Decathlon now 6 minutes from you”."],
    ["A warm base already exists", "10,087 Dumas customers live in Adajan's pincodes and Katargam. WhatsApp to them is the cheapest walk-in."],
    ["Gujarat notices radio, cinema and print", "Kantar 2024: radio index 127, cinema 119, print 111. So radio, Cinepolis and leaflets are in the mix."],
    ["Pickleball doubled", "Padel and pickleball at Dumas +108% (Jan-Sep 2026). A court at the Night Carnival and a Pickle Premier League."],
    ["Women are under-served", "751 women per 1,000 men in the catchment. A women's run group, a She Plays zone and a women-only pickleball slot."],
    ["Dec-Jan is the best outdoor season", "31°C days, 16°C nights, almost no rain. Sunrise runs, car-free Sunday mornings and carnivals after sunset."],
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
    "Date: opening is Sunday 27 Dec (confirmed by the team). The workbook was built for an 18-20 Dec weekend, so its day and week targets are carried over and need re-phasing; the printed grand-opening poster still shows 20 Dec.",
    "Budget: the plan spends ₹24.9 L against an ₹18 L budget.",
    "Permissions for Happy Streets, the night run, sunrise run and Night Carnival need police and SMC approval: apply now.",
    "Tills: at a ₹1,800 basket the first three days need 4,700 bills. Up to 11 tills are needed at the launch-day peak.",
    "Stock: winter jackets, fleeces, trek shoes, running shoes and home gym deep by 20 Dec."
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

    <h3 class="display-s sr-sub"><span class="lt">The timeline,</span> from hoardings to day 30</h3>
    <ol class="sr-phases">${PHASES.map((p, i) => `<li class="${i === 4 ? "peak" : ""}"><span class="ph-id">${p[0]}</span><b>${esc(p[1])}</b><span class="ph-date">${p[2]}</span><p>${esc(p[3])}</p></li>`).join("")}</ol>

    <h3 class="display-s sr-sub"><span class="lt">The opening weekend:</span> ₹85 L in three days</h3>
    <div class="sr-weekend">${WEEKEND.map(d => `<article class="sr-day"><span class="sr-date">${d[0]}</span><h4>${d[1]}</h4><b class="sr-target">${L(d[2])}</b><ul>${d[3].map(x => `<li>${esc(x)}</li>`).join("")}</ul></article>`).join("")}</div>
    <div class="sr-insp">
      <div class="sm-video ig-reel"><video muted loop playsinline preload="none" poster="assets/posters/ig/DcbXgJmIvz9.jpg" data-src="assets/videos/ig/DcbXgJmIvz9.mp4" aria-label="Decathlon Vitalsport event reel"></video><button type="button" class="snd-btn" aria-pressed="false" aria-label="Play with sound"><svg viewBox="0 0 24 24" width="14" height="14" aria-hidden="true"><path fill="currentColor" d="M12 3v10.55A4 4 0 1 0 14 17V7h4V3h-6z"/></svg><span>Sound off</span></button></div>
      <div><span class="oct-when">Inspiration for the Night Carnival</span><h4>Vitalsport, Decathlon Campus HQ</h4><p>Decathlon's Vitalsport in France turns the store grounds into a weekend of try-every-sport zones run with local clubs. The Adajan Night Carnival borrows it after dark: club stalls, open courts and a reason to stay till late.</p><a class="ig-link" href="https://www.instagram.com/reel/DcbXgJmIvz9/" target="_blank" rel="noopener">@decathlon_campus_hq on Instagram</a></div>
    </div>
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
        <p class="sr-note">Decathlon keeps full prices. Opening-weekend gifts on bigger bills, a weekly “Poora Bill Maaf” draw on bills of ₹2,999+ (grand prize: a Rockrider cycle on 24 Jan), and a Ramat Passport that rewards coming back.</p>
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
