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

  // OPENING PLAN tab of the updated workbook (v2). Cost per walk-in ₹50 per the team (the sheet's own line says ₹61).
  const KPI = [
    ["₹85 L", "Target for the first 3 days", "Sun 27 - Tue 29 Dec"],
    ["14,904", "Walk-ins needed in 3 days", "at 25.9% conversion and a ₹2,200 basket"],
    ["₹2.5 Cr", "First 30 days", "27 Dec - 25 Jan"],
    ["49,600", "Walk-ins target, first 30 days", "27 Dec - 25 Jan, from 28 strategies"],
    ["₹24.7 L", "Plan spend", "against an ₹18 L budget"],
    ["₹50", "Cost per walk-in", "Bhopal's opening: ₹153"]
  ];

  // Timeline from the team (27 Oct 2026): hoardings locked 30 Oct, AOPs from 1 Nov, then events and
  // community activation, grand launch Sun 27 Dec. Activities come from the opening-plan workbook.
  const PHASES = [
    ["1", "Deal signed: banner up", "Day the deal is signed", "The “Opening in December 2026” banner goes up on the building straight away, with a QR code to apply for jobs at the store"],
    ["2", "Hoardings locked", "30 Oct", "Hoardings finalised, led by the Pal Umra Bridge board between Adajan, Piplod and Vesu"],
    ["3", "AOPs and hoardings live", "By 15 Nov", "All 10 AOPs and 2 hoardings live in the Adajan area: kit walls at gyms, pools, academies and studios, placed from 1 Nov"],
    ["4", "Events and community activation", "Nov - 26 Dec", "Teaser over Diwali, date reveal from 23 Nov, Ramat Rath in 36 societies, society sports days, treasure hunt, Happy Streets, creators' preview, 10-day countdown"],
    ["5", "Grand launch", "Sun 27 Dec", "Pehli Ramat inauguration with Surat athletes, Tapi Sunrise Run, sports carnival, gifts on bigger bills. Express delivery for Surat goes live the same day"],
    ["6", "Ramat chalu rahe", "28 Dec - 25 Jan", "“Keep playing”: Night Carnival, New Year run, Happy Streets #2, box cricket league, pickle league, Kai Po Che! for Uttarayan (14 Jan)"]
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

  const GIFTS = [["₹2,499+", "Gift card"], ["₹3,999+", "10 L hiking backpack"], ["₹5,999+", "17 L football backpack"], ["₹9,999+", "24 L backpack"]];

  const ALL = [["Online ads near the store", "Digital funnel ads", 290000, 6000], ["Happy Streets on LP Savani", "Ramat ni Sadak", 140000, 5400], ["Shop front and street footfall", "Blue on LP Savani", 0, 5200], ["WhatsApp to customers near Adajan", "Decathlon now 6 minutes away", 225000, 3530], ["Influencers and Surat city pages", "Creator waves", 620000, 3000], ["SMS and app to all Surat customers", "Surat, now 2 Decathlons", 0, 2700], ["Come-back passport", "Ramat Passport: aavo pachha", 40000, 2236], ["Hoardings and direction boards", "Chalo Ramiye, Adajan!", 192150, 2000], ["Club before opening", "Adajan Ramat Club", 30000, 2000], ["Sports carnival and sunrise run", "Tapi Sunrise Run + Chalo Ramiye Sports Carnival", 85000, 1980], ["Night sports carnival", "Adajan Night Carnival", 60000, 1925], ["Society visits", "Ramat Rath", 12000, 1620], ["Word of mouth and Google reviews", "Bring a friend + 500 reviews", 0, 1490], ["Newspaper leaflets and press", "Paper ma Decathlon", 115000, 1120], ["Radio countdown", "10 Divas, 10 Ramat on air", 0, 1050], ["Workshops for 50+", "First community", 10000, 1005], ["Theme weeks after opening", "Santa Party, New Year Run, Kai Po Che!", 44000, 900], ["Card and bill partners", "-", 5000, 800], ["School sports days", "School Sports Day kit desk", 80000, 720], ["Society sports days", "Society Ramat Day", 35000, 630], ["Corporates", "Hazira Corporate Saturday", 35000, 600], ["Opening day and run", "Adajan + LP Savani run", 69500, 540], ["City treasure hunt", "Find the box", 35000, 510], ["Cinema ads next door", "Cinepolis Adajan pre-show", 35000, 500], ["Academies and coaches", "Coach Ambassadors + Academy Kit Nights", 110000, 480], ["Box cricket night league", "Adajan Box Cricket Night League", 25000, 400], ["Weekly run club", "Adajan Run Club", 4500, 240], ["Pickleball league", "Adajan Pickle Premier League", 25000, 200]];

  const BENCH = [
    ["Bhopal DB Mall (2025)", "Mall, MP", 2623331, 17187, 8473738, 153],
    ["Nexus Ahmedabad (2025)", "Mall, Gujarat", 2405000, 10500, 6500000, 229],
    ["Pondy Bazaar (2025)", "High street, Chennai", 3000000, 9700, 9374300, 309],
    ["Pune (plan, opening week)", "Convenience, Pune", 2300000, 15000, 5300000, 153],
    ["Adajan (opening plan, 30 days)", "High street, Surat", 2469635, 49600, 25000000, 50]
  ];

  const WATCH = [
    "Date: opening is Sunday 27 Dec (confirmed by the team). The workbook was built for an 18-20 Dec weekend, so its week targets need re-phasing; the printed grand-opening poster still shows 20 Dec.",
    "Budget: the plan spends ₹24.9 L against an ₹18 L budget.",
    "Permissions for Happy Streets, the night run, sunrise run and Night Carnival need police and SMC approval: apply now.",
    "Tills: 5 tills needed. ₹85 L in 3 days at a ₹2,200 basket is about 3,860 bills (14,904 walk-ins at 25.9% conversion): about 1,290 a day, or 107 an hour over 12 hours. A till handles 20-30 bills an hour, so 4-5 tills; keep mobile billing ready for the launch-day peak.",
    "Stock: winter jackets, fleeces, trek shoes, running shoes and home gym deep by 20 Dec."
  ];

  const maxW = Math.max(...WEEKS.map(w => w[2]));
  const totSrc = SOURCES.reduce((a, s) => a + s[1], 0);
  const maxTop = TOP[0][1];

  root.innerHTML = `
    <div class="sr-hero">
      <div class="sr-hero-media">
        <img src="assets/img/surat-store.jpg" alt="Render of the new large-format Decathlon store" loading="lazy">
        <img src="assets/img/surat-deal-banner.jpg" alt="Decathlon banner on the building: Opening in December 2026, explore more than 50 sports, with a QR code to apply for jobs" loading="lazy">
        <img src="assets/img/surat-grand-opening.jpg" alt="Grand opening Adajan Surat poster" loading="lazy">
        <img src="assets/img/surat-offer.jpg" alt="Adajan opening gifts poster" loading="lazy">
      </div>
      <dl class="sr-kpis">${KPI.map(k => `<div><dt>${k[1]}</dt><dd>${k[0]}</dd><small>${k[2]}</small></div>`).join("")}</dl>
    </div>

    <h3 class="display-s sr-sub"><span class="lt">The timeline,</span> from hoardings to day 30</h3>
    <ol class="sr-phases">${PHASES.map((p, i) => `<li class="${i === 4 ? "peak" : ""}"><span class="ph-id">${p[0]}</span><b>${esc(p[1])}</b><span class="ph-date">${p[2]}</span><p>${esc(p[3])}</p></li>`).join("")}</ol>

    <h3 class="display-s sr-sub"><span class="lt">Key opening strategies</span> to warm up the catchment</h3>
    <div class="sr-keys">
      <article class="sr-key sr-key-th">
        <div class="sm-video th-film"><video muted loop playsinline preload="none" poster="assets/posters/treasure-hunt.jpg" data-src="assets/videos/treasure-hunt.mp4" aria-label="Treasure hunt film: a runner finds a Decathlon box with a golden ticket and redeems it in store"></video></div>
        <div><span class="sr-kk">Treasure hunt, marketed with influencers</span><h4>Find the box. Win the city.</h4>
          <p>Blue mystery boxes appear at colleges, malls, parks, gyms and playgrounds around Adajan. Inside, a golden ticket to redeem at the new store. Surat creators drop the clues on their pages, so the hunt spreads before the doors open. Format borrowed from the “Kheloge Khudoge Banoge Kharab” campaign deck.</p>
          <ul class="sr-kn"><li><b>600</b>players; the final clue is in the store</li><li><b>14</b>creator waves on Surat city pages, 10 lakh views</li><li><b>3,510</b>walk-ins (hunt + creators)</li></ul></div>
      </article>
      <article class="sr-key sr-key-nc">
        <div><span class="sr-kk">Night carnival for families</span><h4>Adajan Night Carnival</h4>
          <p>Surat loves going out at night. Box cricket under lights, pickleball, skating, a DJ and food trucks on the forecourt, with an RJ live, built like Decathlon's Vitalsport weekends in France. <a class="ig-link" href="https://www.instagram.com/reel/DcbXgJmIvz9/" target="_blank" rel="noopener">@decathlon_campus_hq</a></p>
          <ul class="sr-kn"><li><b>3,500</b>people expected</li><li><b>1,925</b>walk-ins, more than half</li><li><b>₹60,000</b>budget</li></ul></div>
        <div class="sm-video ig-reel"><video muted loop playsinline preload="none" poster="assets/posters/ig/DcbXgJmIvz9.jpg" data-src="assets/videos/ig/DcbXgJmIvz9.mp4" aria-label="Decathlon Vitalsport event reel"></video><button type="button" class="snd-btn" aria-pressed="false" aria-label="Play with sound"><svg viewBox="0 0 24 24" width="14" height="14" aria-hidden="true"><path fill="currentColor" d="M12 3v10.55A4 4 0 1 0 14 17V7h4V3h-6z"/></svg><span>Sound off</span></button></div>
      </article>
      <article class="sr-key">
        <div class="hs-collage"><img src="assets/img/happy-streets-1.jpg" alt="Decathlon team at Happy Streets, Pune" loading="lazy"><img src="assets/img/happy-streets-2.jpg" alt="Kids doing push-up challenges with a Decathlon coach at Happy Streets" loading="lazy"><img src="assets/img/happy-streets-3.jpg" alt="Kids and families at a Decathlon Happy Streets game" loading="lazy"></div>
        <div><span class="sr-kk">Yoga, walking and running</span><h4>New Year run and Happy Streets</h4>
          <p>A New Year run from the new store, Happy Streets (car-free Sundays on LP Savani, as we ran with Pune Municipal Corporation in Pune), the Tapi Sunrise Run with yoga, and a weekly Adajan Run Club.</p>
          <ul class="sr-kn"><li><b>600</b>runners + 3,000 at the carnival</li><li><b>9,000</b>people per Happy Streets Sunday</li><li><b>8,160</b>walk-ins across these events</li></ul></div>
      </article>
      <article class="sr-key">
        <div><h4>Society events</h4>
          <p>We visit 36 housing societies around Adajan with sports to try, and host 6 society sports days where families play together; families buy what their kids tried.</p>
          <ul class="sr-kn"><li><b>36</b>societies visited</li><li><b>6</b>society sports days, about 300 people each</li><li><b>2,250</b>walk-ins</li></ul></div>
      </article>
    </div>
    <details class="sr-all"><summary>All 28 strategies: events, partners, budget and walk-ins</summary>
      <div class="sb-wrap"><table class="sb-table"><thead><tr><th scope="col">Strategy</th><th scope="col">Event</th><th scope="col">Budget</th><th scope="col">Walk-ins</th></tr></thead><tbody>${ALL.map(r => `<tr><th scope="row">${esc(r[0])}</th><td style="text-align:left">${esc(r[1])}</td><td>${r[2] ? "₹" + num(r[2]) : "No cost"}</td><td>${num(r[3])}</td></tr>`).join("")}
      <tr class="sb-total"><th scope="row">Total</th><td></td><td>₹23,22,150 + ₹1,47,485 offers</td><td>49,600</td></tr></tbody></table></div>
    </details>
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
