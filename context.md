# context.md: Decathlon West plan site (Pune, Gujarat, MP · Q4 2026 + Q1 2027)

Single source of truth for this project. Read it before any work. Update it at the end of every task
(see CLAUDE.md): add every new number, file, decision, preference and open question. Never delete
history; mark superseded facts as superseded.

Last updated: 2026-11-10

---

## 1. What this project is

- A presentation website for a **shareholder presentation of the Decathlon West cluster** (Pune city, Gujarat, Madhya Pradesh), covering **Q4 2026 and Q1 2027 / 2027**. Built for Anandita Mitra (Decathlon; files come from anandita.mitra@decathlon.com and ananditawork1@gmail.com), working through Abhishek Mitra's machine and accounts.
- Not a slide deck: a "crazy marketing planning website", Decathlon look (The Blue Voice), interactive, data-first.
- **Live site:** https://decathlon-west-plan.vercel.app (public URL; the GitHub repo is private).
- **Repo:** https://github.com/abhishekmitraaa/decathlon-west-plan (private, branch `main`). Vercel project `decathlon-west-plan` in team `abhishekmitraaas-projects`, connected to the repo: every push to `main` deploys to production.
- **Local folder:** `C:\Users\Abhishek Mitra\OneDrive\Desktop\anandita website`. Local preview: `python -m http.server 8777 --bind 127.0.0.1` from the folder (was 8765, superseded 2026-10-26 because another app uses 8765).

### File map
- `index.html`: all sections and markup. Script/CSS links carry a version tag `?v=2026...`; **bump it on every change** or browsers keep stale files.
- `assets/css/site.css`: all styles (Blue Voice tokens at the top).
- `assets/js/data.js`: core numbers (`window.DATA`), Q4 runway (`window.RUNWAY`), 2027 planner (`window.PLANNER`), Pune month-by-month plan (`window.PLAN_DETAIL`), store-level data (`DATA.stores`, `DATA.stateTO`, `DATA.stateLines`), `TOOLKIT`, `SHOPPERS`, `CITY_MEDIUMS`, `STORE_MOMENTS`.
- `assets/js/app.js`: hero, scoreboard charts, runway, planner, budget, playbook (9 channel tabs incl. AOP numbers table), reels, Q1, present mode.
- `assets/js/stores.js`: store comparison (in the Scoreboard, grouped Pune / Gujarat / MP), store detail, state money mix, toolkit filter.
- `assets/js/people.js`: Why the West (goldmine tiles, sports pulse, people per store), personas (Ahmedabad, Pune), The field (competitors, events, Bancard booth), Kantar chart, film sound handling for every `.sm-video`.
- `assets/js/surat.js`: Surat (Adajan) opening plan section.
- `assets/js/content.js`: content calendar data (posts, pillars, rules, hero films, photo credits). `assets/js/calendar.js`: renders it.
- `assets/img/`: photos (team photos `u-*.jpg`, Creative Commons photos in `cc/`). `assets/videos/` + `assets/posters/`: compressed reels and state films.
- `plan2027.html` (2027 Q1 and Q2 plan, sport by sport; opened from the "2027 plan" dropdown in the main top bar and a button under the 2027 planner): `assets/js/sports27.js` (window.SPORT_TOV_2026 = online turnover by sport, BU and month Jan-Oct 2026; window.SPORTS27 = the 7 sports' plan: month lanes, moves, proposed growth / budget share / AOP split, and the month-by-month strategy) + `assets/js/plan2027.js` (renders it from PLANNER, PLAN_DETAIL, DATA.spend, AOP_PLAN). Styles `.y27-*` in site.css.
- `water2027.html` (water sports 2027, week by week; opened from the "2027 plan" dropdown, a button under the 2027 planner and a link on plan2027): `assets/js/water27.js` (window.WATER27: lanes, quarters as ISO weeks, about 120 dated items with source tags, ideas per quarter, stores, budgets, families), `assets/js/share26.js` (window.SPORT_SHARE_2026: Tableau turnover by sport, top 12 + other, by state and month, plus water = swimming + surf), `assets/js/water2027.js` (renderer). Styles `.w27-*` in site.css.
- plan2027 also loads `assets/js/budget27.js` (window.BUDGET27: Q1 campaigns, % of each month's budget, sport credit rules, channel mix, hoarding / influencer / social / boost guidance, media, `alloc(state)`; window.VIDEOS27; window.SEASON27 weather and school by state and month), `assets/js/aopnames.js` (window.AOP_NAMES: Pune named practice places, no contacts) and `assets/js/playbook27.js` (season, Q1 playbook, AOPs, films). Styles `.se27-*`, `.pb27-*`, `.aop27*`, `.ins27*`, `.yt27*`.
- `assets/js/puneplan.js`: window.PUNE_PLAN (Pune spend plan Nov 2026 to Mar 2027 line by line, AOP money per store, 2026 influencer tracker, influencer timeline) and window.MKT_PYRAMID, plus shared renderers renderPyramid, renderPunePlan, renderPuneAops, renderInfluencers (used by november.html and plan2027.html). `assets/js/nd26.js`: November page part 2 (Pune runway W45-W53, week panel, AOPs Nov-Dec). Styles `.nd-*`, `.mp-*`, `.pp-*`, `.pi-*`, `.su-*`, `.wl-*`.
- New media (10 Nov): assets/img/dec (christmas-sale.jpg, sport-ecosystem.jpg), assets/img/su (Sports Utsav 2026 collages su-*.jpg and Decathlon campaign photos deca-*.jpg from the Sports Utsav deck), assets/img/water (Drive product images, water deck photos), assets/videos + posters water-goggles-pool / water-goggles-spirit / water-goggles-bfast / water-armbands (from the Drive product films, cut to 8-16 s, no sound).
- `.vercelignore` keeps context.md, CLAUDE.md and `.claude/` off the public site.

### Page order (current)
Hero → People ("Who we sell to": Pune, Gujarat, MP state stories with films) → Why the West (166.6M headline + penetration chart: our 2025 share of each store city's sports market, market 2025 and 2030; pulse cards: who plays, pickleball, big external events; map; people per store) → Shoppers (personas: Ahmedabad, Pune) → **Chapter 01 Q4 2026 campaigns** band → Scoreboard (Q4 only: topline panel = 178.77 Cr challenge, +24.15%, month growth bars, by-state and by-channel bars; then line summary in L and % of budget) → Q4 runway + spotlights → October so far (#october: Ahmedabad IG reel, Kiprun launch 18 Oct with 5 video slots, Pune hoardings, Pune influencer shoot IG reel) → **Chapter 02 Strategies** → Strategy (budget, 2026 recap→Q4→2027 for schools and Yoga Day, shoppers 70/30, toolkit, channel audiences, Kantar, AOP with video) → Marketing playbook ("On the road" hoarding wall, then channel switchboard) → Content calendar (rules, pillars, months, reels band, influencers, credits) → **Chapter 03 Surat opening plan** → Surat → **Chapter 04 Q1 2027 and the year ahead** → Q1 2027 (incl. advertising spend month by month 2026 vs 2027 with the 2027 line split, moved here from the Scoreboard) → 2027 planner → Horizon (CWG 2030).
- (Read in full from the rendered site on 2026-11-10; every section's copy is in **Appendix B**.) Main page also has: top bar (nav: People, Why West, Shoppers, Scoreboard, Q4 campaigns, October recap, Strategy, Marketing playbook, Content, Surat, 2027, Q1 2027; dropdowns "Nov & Dec 2026" and "2027 plan" linking the other pages; Present button), a "Skip to the numbers" link, a hero marquee (Q4 challenge 178.77 Cr +24.15%, Winter Travel 15 Oct - 30 Jan, Black Friday 27-30 Nov: 12 Cr, Christmas sale 19-31 Dec, Wakad 30.4 Cr biggest store challenge, Adajan grand launch 27 Dec, 18 hoardings: 7 live in Pune, 80+ local influencers, Kiprun launch: 700 runners, 7 clubs, Q1 2027: +12.1% turnover, CWG 2030 Gujarat), the horizon footer "Decathlon Pune, Gujarat and MP · Marketing plan Q4 2026 and Q1 2027. Confidential. For shareholder review." and the "Download this page" bar (PDF, GIF).
- **november.html** ("Nov and Dec 2026 · West Plan"): top (Update, 10 November 2026: two months, four campaigns) → 1 of 4 Diwali: Gift a Sport (6 to 11 Nov; Pune ₹0, not in the Pune plan), with Social media (Let's Play city pages), Influencers: done so far, In-store comms → 2 of 4 Black Friday (27 to 30 Nov; Pune ₹12.20 L, 21% of Pune's Nov + Dec; goal ₹12.34 Cr) → 3 of 4 Winter, Trek & Travel (all of Nov and Dec; Pune ₹20.70 L, 36%; hoardings: Pune not updated yet, Baroda up) → 4 of 4 Christmas: gifting (1 to 25 Dec) and the sale (19 to 31 Dec; Pune ₹10.95 L) → Pune runway W45-W53 → Pune's money, line by line (Nov ₹28.00 L, Dec ₹30.15 L) → AOPs Nov and Dec, every store → How we do marketing, from the ground up (pyramid) → November budget and Q4 goals → Summary: Nov and Dec in one view → footer (sources) → Download bar.
- **plan2027.html** ("2027 Plan Q1 Q2 · West Plan"): sticky bar (Region: Pune / West / MP / Gujarat; Show: Q1 Jan to Mar / Q2 Apr to Jun / Q1 and Q2; sport jump links Running, Fitness, Cycling, Mountain, Swimming, Cricket, Pickleball) → top (2027, sport by sport) → Season (Q1 2027 in each state: weather, kids, mood) → Calendar (Q1 2027 month by month, planner format + 7 sport lanes, month panel) → Q1 moments (Movement for All, clearance sale, Women's Day) → Q1 marketing playbook (campaign tabs with budgets) → Influencers 2027, campaign by campaign → AOPs, store by store → One flagship event: Sports Utsav → The sports, Q1 (cards, in-store + online turnover, share by month) → Decathlon around the world (films) → Strategies, Q1 month by month → footer (sources) → Download bar.
- **water2027.html** ("Water Sports 2027 · West Plan"): sticky bar (quarters Q4 2026, Q1-Q4 2027; states All stores / Pune / Gujarat / MP; KPIs: water turnover same months 2026, AOPs planned, go-live dates) → top (Make your catchment swim, week by week) → Calendar (week by week, ISO weeks, week panel, "What we can do" ideas) → Be one with water (films and pictures) → Which sports make the money, month by month (heatmap) → Store by store → The money, line by line → The range and the why, from India to the store → footer (sources) → Download bar.

---

## 2. User preferences and standing instructions (learned)
- Events and community plans go only to the end of Q1 2027, not beyond (user, 28 Oct 2026). When adding from a source deck, add only what the user names (e.g. pictures and costing only).
- Keep source/caveat footnotes off the scoreboard blocks (user removed them 28 Oct 2026); flag discrepancies in replies and in section 5 instead.

- **Push to repo after every change** ("push to reco" = push to repo). Commit with the Co-Authored-By trailer, push to `main`, confirm the Vercel deploy is READY.
- **Look: Decathlon "The Blue Voice"** (Oct 2026 cover): font **Inter** everywhere (deck uses Inter; Decathlon's own font is not public). Headlines: light lead-in word(s) + semibold main word; italic letter as accent ("as **O**ne."). Gradient: green #2BFF88 → teal #01EDC9 → cyan #00C4E1 → cobalt #1932C1 → indigo #2920AD → purple #6C3DB1 → magenta #C03F9C, with fine diagonal hatch. Decathlon blue #3643BA, ink #10135A. State colours: Pune blue, Gujarat teal #00A99D, MP purple #7B3FC4.
- **Details must be visible without hovering or clicking** (money mix, chart values).
- **Use the user's own photos first**, then free Creative Commons (with credits). Not Pinterest/Google-copyrighted images.
- **Videos:** play muted when on screen; a Sound button (and clicking the tile) turns sound on and mutes every other video.
- **Naming:** say "Ahmedabad" and "Pune" for persona boards, never "Nexus Ahmedabad One" or "Kothrud".
- **Story order:** Q4 campaigns → strategies around them → Surat opening plan → Q1 & 2027. Strategies should show 2026 recap → Q4 plan → 2027 plan.
- **Copy voice:** marketer voice; follow Piyush Pandey's three rules: (1) prove the claim, never explain it, stage the impossible; (2) never manufacture emotion, borrow an occasion people already feel; (3) the brand resolves the story, it doesn't narrate it. Don't use the word "cheaply" for WhatsApp.
- Gujarat heading must mix lines: "The land of Garba, of traders and makers, the textile heart of India".
- Reels band is framed as inspiration, never "stealing": heading "Reels to take inspiration from", note label "Where we'll use it" (2026-10-25).
- The playbook section is called **Marketing playbook** (nav and heading), and shows every hoarding photo up front, visible without clicking (2026-10-25).
- **Scoreboard is Q4 only and simple** (2026-10-26): turnover challenge of every store, marketing budget allocation of every store, and a summary of line entries in lakh and % of budget. Removed: Q4 challenge by channel, commercial weekends, funnel + deck city spend lines, "Outstore is the fastest lane" omni chart (not needed), Pune store share, sortable store ranking. Monthly spend 2026 vs 2027 lives in the Q1 2027 chapter.
- **"Big events pulling people out"** = large external (non-Decathlon) sports events in Gujarat, Pune and MP with big participation, not our own activations (2026-10-26).
- Persona photos are picked from the user's photos by description and emotion (2026-10-26).
- **Why the West goldmine** (2026-10-26): show sports-market growth/share for each city where we have stores. Removed the tiles 8–16% play sport, 59% trekking+fitness, 3.2 lakh Decathlon Play, 2,700 Kiprun/Santa runners, +11% women's business, 11%→22% progressive players; removed the "What Pune plays" card and the "Sports markets growing" card (folded into city tiles). "Who plays sport" card kept.
- **Q4 runway** (2026-10-26): no "Adajan: Ramat Chalu Rahe", no "Local activations"; the External sports events lane lists big outside events. Pune influencers = **70** (not "Adi"). Today marker follows the real date.
- "What people play in Q4" removed from the Scoreboard (2026-10-26).
- (2026-10-26, later) Scoreboard must keep the **topline numbers as graphs with a little text** (challenge, by state, by channel, by month). **Store by store section removed** (incl. "Where each state's Q4 money goes"), **The field section removed**. Pune personas: no year-one turnover numbers (₹8.3 Cr etc.) and no ₹26 Cr target text. Keep layouts compact: goldmine, persona intro and content-calendar briefs were too spaced out.
- **Changes_presentation.docx** (2026-10-26) instructions: no "~" and no "–" anywhere on the site, use "-" (em dashes also replaced; "~36%"/"~8%" became "36%"/"8%"). Gujarat heading: "The land of Garba, traders and makers, the textile heart of India". Pickleball card not needed. Persona faces must be visible. Daily Athlete & Academy Player age 16-34 on both boards (Ahmedabad's equivalent is Progressive Sports Enthusiast). Pune personas shown as a graph. Scoreboard store table removed "for now". Adajan opening on the runway runs 1 Dec to 1 Jan. After influencers on the runway: AOP practice-place hoardings Gujarat Nov 5, Dec 7, Jan 2027 5 gyms + 5 swimming pools. After the runway: "strategies so far in October" section with the Instagram reels.
- Keep numbers exact and sourced; flag discrepancies instead of silently fixing source data.
- **context.md holds every piece of the site's content** (user, 10 Nov 2026: "read the entire website in great detail and store each piece of content in context.md"): Appendix B is the page-by-page inventory. When a page changes, refresh Appendix B with the scripts in `.claude/site-inventory/` (serve the folder on port 8777, then `node extract.js OUT`, `node explore.js OUT`, `node extra.js OUT`, `node wq.js OUT`, `node films.js > OUT/films.json`, `python3 gen.py OUT`, and replace Appendix B with OUT/appendixB.md).
- **10 Nov 2026 brief (user, WhatsApp notes)**: club November and December 2026 on one page; Christmas Day campaign comes in December, so the gifting videos continue ("Christmas day gifting videos"); put the AOPs planned for November and December on the Nov page; add the Q4 runway **only for Pune** with Winter & Travel, Christmas Sale 19-31 Dec, Black Friday 27-30 (user wrote "December"; it is 27-30 November) and the city events; in 2027 Jan-Mar add the holidays and Movement (for All); use the "Building the Sport Ecosystem" circle to explain the basics of marketing as a triangle / mountain: base = in-store community, AOPs, one monthly flagship event, the right team, in-store comms campaigns + festives; then hoardings, social media, influencers; then disruptive marketing, "make noise with 1 KILL strategy"; add GIFs, pictures and videos from the shared Drive folder across Q1 2027 and the water plan ("make it attractive"); use the influencer tracker picture to add influencers planned with dates and campaign; use the recent Pune marketing spend file to plan the budget, campaigns and influencers in detail for Nov, Dec and Q1 2027.
- **10 Nov 2026, second brief (user)**: November page in a **very simple format**: divide November and December into campaign frames (Diwali, Black Friday, **Winter, Trek & Travel**, Christmas), each with what we do, strategy, budget and **its contribution**, and a **summary at the end**; add **hoarding updates** (Pune not updated yet; learn from Gujarat: Baroda's hoardings are up). Black Friday table: amounts under a lakh in **thousands, e.g. ₹32K** (not ₹0.32 L). "Walk-in events: a suggestion for Black Friday morning" goes **in a dropdown**. December content = **Christmas, Winter and Trek & Travel**. Pages must link to each other: from the November page you must see the 2027 tab and vice versa (**page tabs on every page**). 2027 page: **four region tabs: Pune, West, MP, Gujarat**; clicking Pune shows only Pune (Q1 month by month, our sports, budget, everything). Add the main site's Q1 campaign spaces (Movement for All, Women's Day, clearance sale) to the 2027 sport-by-sport page. A separate **Influencers 2027** header: how many influencers, which campaigns, quantity and cost, from the influencer sheet picture (the user says that sheet is **for 2027**).
- **Q1 2027 budget priorities** (user, 9 Nov 2026): Q1 money goes mostly to **fitness** (January); Jan to Feb the other sports get a few percent each "depending on the revenue of what is worth"; a **clearance sale** budget in Q1 (big commercial moment); **February = fresh/new arrivals**; **March = Women's Day** (clubbed with the sports campaign) and a good amount on **summer and sports: water/swimming, running and travel**. User asked us to suggest the split and what goes on hoardings, influencers, social content and boosts; and to add the AOP list store-wise.
- **Make it a marketing playbook, not confusing** (user, 9 Nov 2026): like the main site's marketing playbook (tabs, pictures, videos); look at international Decathlon videos (Malaysia, Korea, China...); summer feel, not dull; segment by state (Pune, Gujarat, MP) with **weather**; consider **schools and what kids do** in each month (school, exams, holidays, sleeping in, screens).
- **Turnover = in-store + online** (user, 9 Nov 2026: "I only see online, I want to see offline + online turnover; in-store is offline data, so be mindful"). Show both, with the split: in-store = offline, out of store = online. Show each of the 7 sports' revenue and TO share month by month, in the style of the user's MARCOM calendar samples (monthly turnover line with the peak marked "Money time", stacked share bars per month with the ₹ values and % below).
- **Water sports 2027 page** (user, 9 Nov 2026): quarter-wise and week-wise planning for water sports with everything: in-store, outstore, digital, influencers, hoardings, go-live dates, AOPs per store for every store and city; ideas ("what can be done") and each sport's share of turnover through the year at the bottom of the calendar.
- **2027 work** (user, 9 Nov 2026): a separate tab/page for 2027, Q1 and Q2. Keep the calendar in exactly the 2027 planner format ("very easy to understand, don't change the format"); sports go right below the calendar; strategies at the bottom built on the calendar; clicking a quarter shows everything for it. Focus sports: swimming, mountain, running, cycling, fitness, and for Gujarat specifically cricket (and pickleball); more may come.
- AOPs and hoardings are presented as Q4 only unless asked otherwise (2026-10-27).
- Check desktop (1440 and 1536, the user's laptop) and phone (390) after changes; no horizontal scroll; no console errors. User wants tight layouts: small side margins, small gaps between text and sections; no Instagram like counts on the page.

---

## 3. Source files received

| File (uploads folder) | What it is |
|---|---|
| `Q4_plan_2026_-_MP___GUJ___PUNE.pdf` (42 pages) | The Q4 plan deck. Fonts used: Inter (main), Poppins, Roboto, Plus Jakarta Sans. Text colours: #3643BA blue, #7AFFA6 mint. Many pages are images. Some slides are copied from other cities (Lucknow p3, Delhi NCR p18, Tamil Nadu/Coimbatore p29–32). |
| Deck p9 "Hoardings" (4 photos, extracted) | Pune 4 hoardings Q4 + Q1 → `hoarding-wagholi.jpg` (GPS stamp: Wagholi, Pune, 10 Oct 2026 18:49); Surat 3 hoardings Nov–Jan → `hoarding-surat.jpg` (vendor site photo, Shah Publicity: "Pal Umra Flyover Bridge towards SVNIT, 40 x 20", codes PUFOFP/PUFOP2, dated 15 Jul 2026, currently showing an Indriya jewellery ad); Bhopal 2 hoardings Nov–Jan → `hoarding-bhopal.jpg` (elliptical ₹32,999 creative, dated 11/08/2026); Ahmedabad 2 + Baroda 4 → `hoarding-night.jpg` (backlit elliptical board). Slide's "2026 update" panel: hoardings in top 3 PIN codes 226010/226016/226001, 2 FOC at Hazratganj, footfall 5–7 lakh per hoarding (Google data), which is Lucknow text. Deck p25 AOP "Sport is everywhere" kit wall → `swim-kit-aop.jpg`. |
| `MARCOM_CALANDER.xlsx` | Sheets: "Pune COMM Calendar 2027" (2027 month-by-month planner: seasons, campaigns, sport of month, competitors, Pune response, channels, banners, academies, gyms, schools, corporates, societies, OOH, store activation, flyers, free products), "Copy of Marketing Budget" (2026 realised, 2027 by store leaders, 2027 AFTER), "Copy of Master Data" (omni / outstore turnover 2026). Also on Drive as Google Sheet "MARCOM CALENDAR". |
| `ultimate_data_sheet.xlsx` (Sheet1) | (superseded for the 2027 plan by `ultimate_data_sheet_1.xlsx`, see next row) Store Q4 budgets (Gujarat in lakh, MP and Pune in rupees), Gujarat / MP spend by line Oct–Dec, Pune month-wise lines Oct–Dec + campaign split, store turnover challenge table (rows 92–117), 2026 realised spend Jan–Sep and 2027 plan per state. |
| `ultimate_data_sheet_1.xlsx` (Sheet1, 26 Oct 2026, 175 rows) | Same as the first sheet except: title "Marketing spend Q4 2026"; **2027 plan rows 132–134 replaced** (Pune 3.65 Cr, Gujarat 2.61 Cr, MP 1.20 Cr, was 2.10 / 1.59 / 0.62 Cr); new tables "Ad Expense PUNE / Guj / MP 2027" (rows 137–175) split each month's 2027 total into lines at a fixed share: Digital paid (to MarCom) 30%, Hoarding/OOH/HIPOP/AOP 30%, In-store communication (campaign & merch) 20%, In-mall 5%, Store event 5%, Influencer fees 5%, Free products & IC 3%, Flyers 2%, Internal consumption 0, Other 0. Line items add exactly to the monthly totals. 2026 realised Jan–Sep unchanged; row 127 Oct–Dec says "refer to the above details" (the Q4 line tables). |
| `Changes_presentation.docx` (26 Oct 2026, 9 screenshots + notes) | Review notes on the live site; see section 2 and the change log. Two other attachments in that message did not arrive (an Excel with Pune persona details and city penetration vs sports market, and a video). Instagram reels: https://www.instagram.com/reel/Dej2y30sNG8/ (Decathlon Ahmedabad, @letsplay_ahmedabad, festive price reel) and https://www.instagram.com/reel/DebG9L9OsVr/ (Pune creator @the.vogue.mayur outside the Marathi-signed store). Pune Digital (MarCom) Q4: Oct ₹8,80,000, Nov ₹11,98,800, Dec ₹12,35,600. 15 Pune influencers shot around Dussehra. Kiprun launch 18 Oct (5 videos to come). |
| `Pune_persona.xlsx` (26 Oct 2026, sheet 1PERSONAS) | Pune persona details (Kothrud catchment pincodes; site says "Pune"). Per persona: who they are, age, occupation, share, population, pincodes, income, lifestyle, sports, basket, frequency, annual value, decision driver, digital, pain point, store expectation, revenue opportunity, conversion, household, digital adoption, app / C&C / express use, shopping day, peak time, fulfilment, participation, loyalty, price sensitivity, technical affinity, community, active customers Y1, Y1 turnover, share of a ₹26 Cr target, growth opportunity. Senior persona's details sit in column H rows 10-25. Household sizes were stored as dates by Excel (2026-02-03 = 2-3 etc.). |
| `Copy_of_India_City_Ranking_-_2025.xlsx` (26 Oct 2026, 26 sheets) | National city ranking. "Final List + T3" used: rank, population 2023, sports market 2023/2024/2025 and projections 2026-2030, DSI consolidated TO 2024/2025 and market share. "qbr_ranking" has untapped market per city. |
| Chat photos, 26 Oct 2026 (11) | Golf couple at a floodlit range → `u-golf.jpg` (The Patron); family playing football in a park → `u-family-football.jpg` (Ahmedabad Sports Family); new store map (Gujarat: Motera, Nexus, Rajkot, Baroda, Dumas; MP: Indore, Bhopal, Gwalior; Pune city circle: Wakad, Wagholi, SGS Mall, Amanora, NIBM) → `west-stores-map.png` (replaces `west-map.jpg` next to People per store). The other 8 are the same team photos as before (padel, women's football Bloom/Glow, run club, trek couple, pickleball, Kiprun runner, seniors frisbee, family cycling). |
| `SOCIAL_MEDIA_TRACKER-compressed.xlsx` | Another brand's (Skate Supply India) social tracker, used only as a format reference: Brand Bible, monthly calendar layout, hook library, influencer tiers, themes + emotions. |
| `1xSurat_Adajan_Master_and_OpeningPlan_1.xlsx` (31 sheets) | DSI Adajan, Surat catchment + opening plan, prepared 14 Oct 2026. |
| `1x_DSI_Ahmedabad_-_Catchment__Persona_Master_3.xlsx` (22 sheets) | Ahmedabad catchment and persona master (Nexus IN1462, Motera IN1448), YTD Jan–Jul 2026. |
| Google Drive folder "vIDEOS INSPIRATION" (1TwrO66uSDTq7xhNHZXB2a2duwTTB-ky8) | 7 reels: circuit-games, winter-gear, kiprun, process-vs, yoga-day, motera, run-like-a-girl (compressed into assets/videos). |
| State films | Pune: monsoon ghats (Pinterest pin 1088252697440839479) → `pune-state.mp4`; Gujarat: Kutch sunset/beach → `gujarat-state-1.mp4`, "Gujarat is…" montage → `gujarat-state-2.mp4`; MP film (letterbox cropped) → `mp-state.mp4`. AOP "Sport is Everywhere, Scan. Shop. Play. Pune / Ahmedabad / Indore" (VID-20261025-WA0015) → `aop-wall.mp4`. |
| Images (chat uploads) | Regional context slide, AOP 2027 slide, Surat new-store slide, west store map, Nexus persona board, Kothrud persona slide, The Blue Voice cover, Sports Utsav Junior poster (31 Oct, 11 AM–2 PM), Bancard booth (Huge Makers, Instagram), strategy sheet screenshot, store budget screenshot, Q4 campaign calendar screenshot, state photos (Sahyadri fort trail, Shivaji Maharaj, Kutch embroidery, Gujarat seafront [removed], Gwalior Fort, Tansen comic, Rajwada Indore, Sanchi Stupa on ₹200 note), Motera school visit, Motera Yog Kumbh (2 photos), Adajan store render with Gujarati signage, and team photos (padel player, women's football "Bloom/Glow", run club in PUMA kit, trek couple, pickleball player, Kiprun runner, family cycling, seniors with frisbee). |
| `YTD_DATA_2026_FROM_TABLEAU_SPORT_WISE.xlsx` (9 Nov 2026; Sheet 1 and Sheet2, 3,519 rows each) | **Total sales by sport (store + online)**, Tableau, Jan 2026 to 8 Nov 2026 (November partial). Rows: city cluster (PUNE, AHMEDABAD, REST OF WEST, MADHYA PRADESH) × channel (InStore, OutStore) × sport (47 sports) × month. Sheet 1: turnover, quantity, customers, returning customers (TO growth only on the grand total: +20.2%). Sheet2: turnover, purchase frequency, digital share, TO share, new-customer growth (grand total: freq 1.73, digital share 15.88%, new customers +13.8%). Grand total ₹476.83 Cr, 69,73,745 units, 12,18,600 customers, 7,72,176 returning. This is the store-level sales by sport we were missing (see section 4 "Sales by sport 2026, all channels"). |
| Two Tableau screenshots, "Economic Performance Overview" (9 Nov 2026; data till 08/11/2026, compare day to day vs 02/01/2025-09/11/2025) | Filter: Omni, city clusters Pune + Ahmedabad + Rest of West (no MP), sport = multiple values. Figures match **Swimming + Surf/Bodyboard** in the YTD file exactly (Pune 16.95 + 2.81 = ₹19.76 Cr), i.e. water sports West excluding MP. Numbers in section 4 "Water sports". |
| `SS_2027_Pune_water_sport_plan.docx` (9 Nov 2026) | "Pune water sports plan SS 2027, Strategic A4": market and share, priorities, 6 actions (mass plan, human, merchandising, campaigns + communication budget per store, events, quick commerce) and the March-June 2027 business plan per store. Numbers in section 4. |
| `DOC-20261109-WA0002.docx` (9 Nov 2026) and `DOC-20261109-WA0003.pdf` (22-slide deck, same content) | "The Great Indian Swim Project, Regional Swimming Growth Strategy, Pune / Gujarat / MP": Nov 2026 to Apr 2027, proposed ₹8 lakh. The docx is the long-form version; the PDF is the leadership deck ("working strategy deck, for regional leadership discussion"). Numbers in section 4. |
| `Pune_Partnerhsips__Coaches_affiliation_.xlsx` (9 Nov 2026) | Sheet "Partnerships": practice places tied up per Pune store (Amanora, SGS, Wakad, NIBM, Wagholi; the "B2B + Digital (OOC)" block is empty) with sport, location, partnership timeline, image-drive link (Amanora also GMB rating). Sheet "Schools 2025": Back to School 2025 school tie-ups per store (B2B onboarding, sticker deal, stickers qty, collaborations). Sheet "Coaches data": empty (header "Affiliation Repository" only). Contains phone numbers and emails: **keep contact details off the site**. |
| `Gujarat_water_sport_plan_-_2027.docx` (9 Nov 2026, second batch) | Gujarat water sports plan SS 2027, Strategic A4 (same 7-action format as Pune). Also carries updated training dates for Pune and MP and the human planning for Gujarat and MP stores (named staff: keep names off the site). Numbers in section 4. |
| `Swimming_Strategic_A4_-_India.pdf` (6 pages, 9 Nov 2026) | National "Swimming India Strategic A4" (leader Ravi Kiran, update 14/01/2025): market, SWOT, mission "Move non swimmers to swimmers", 4 strategies, business plan 2025-2029. |
| `data_recent_marketing_spends_pune_plan__.xlsx` (10 Nov 2026, sheet "BFS PUNE") | **Pune's own plan, Nov 2026 to Mar 2027, line by line** (see section 4 "Pune plan Nov 2026 to Mar 2027"). |
| Influencer tracker screenshot (10 Nov 2026) | Pune influencer campaigns of 2026 with dates, content count, views, cost, CPV (section 4). |
| Influencer sheet picture, second copy (10 Nov 2026, later) | The same 18 rows as the tracker above (Campaign Name, Campaign Dates, Influencer @, Category, Gender, Content Link, Go Live Date, Total Views, Total Interactions, Total Cost, CPV, Agency, Contract). **User: "this is for influencers and the campaigns for 2027".** The total row at the top is cut off (visible: 2,909,040-ish cost and 0.26 CPV, i.e. the sum to the 50th Anniversary row). Supersedes our earlier reading as a 2026 tracker. |
| Baroda hoarding photos (user, 10 Nov 2026) | 3 photos of our Baroda boards, live: Subhanpura (GPS 22.319359, 73.160338, Tue 10 Nov 2026 10:07, Kiprun Kipride road performance shoes, "Visit Decathlon Vadodara, just 10 mins away"); Fatehgunj, Saffron Complex opp. Narhari Hospital (GPS 22.318606, 73.187013, 10:17, the Kiprun board in a cluster of 8 boards); Akota, over the DMart car park (no GPS stamp; user: "picture without location is Akota", "just 15 mins away"). Saved as assets/img/hoard/baroda-subhanpura-live.jpg, baroda-fatehgunj-live.jpg, baroda-akota-live.jpg. Gotri: no photo. |
| Christmas Sale creative (10 Nov 2026) | "Decathlon Christmas Sale, 19th - 31st December" → assets/img/dec/christmas-sale.jpg. |
| "Building the Sport Ecosystem, Experiential marketing" slide (DECATHLON Play, 10 Nov 2026) | Circle: Store (heart of sport) with In-store (IP events e.g. Sports Utsav, Yoga; store campaigns; playground occupancy; coaching expert sessions), Community (active local sports groups; primary sport running and cycling), Partnerships (local event tie-ups; tournament organisers; area of practice; other catchment collaborations). Basis of the marketing pyramid. |
| `Sports_Utsav_26_Campaign__Event_MasterDeck.pdf` (87 pages; also in the Drive folder) | Sports Utsav 23-24 May 2026: national 2,07,547 users, 650+ events, 51% new to DSI, TO ₹2,05,61,464, ABV ₹2,362, 130+ stores; budget Pune ₹3,80,000 (5,050 committed participants), Guj + MP ₹4,05,000 (4,300); our 13 stores planned 12,890, realised 16,246 (126%); activations 55 (run 12, ride 12, tournament 12, experiences 6, challenges 13); Instagram 3,28,616 views, reach 2,90,269. |
| Shared Drive folder 1E4rw-fdOsTXPEgmPrkyrGqgizkFHAYYd (10 Nov 2026) | "Water Sports - Strategies to Win 2025" (Google Slides, 67 pages, exported to PDF), the Sports Utsav deck, 6 Nabaiji / Decathlon product films (Spirit goggles x3, BFAST goggles x2, inflatable armbands; usage rights to 2029-2030, one BFAST 900 film expires 09-01-2027 and is not used) and 3 small product images (boxer 100, kids swimsuit Olga, goggles 100 Kuwee). |
| Two photos of the Pune MARCOM calendar 2027 sheet (9 Nov 2026, format samples) | (1) "PUNE MARCOM CALENDAR 2027" line chart, Apr-Aug: blue 218,742,231 / 259,024,757 ("Money time", circled May) / 232,012,674 / 241,400,086 / 200,153,682 (Aug, "Clearence"); red 999,850 / 11,55,889 / 10,41,860 / 10,80,270 / 9,89,047 (label not visible). The blue line matches Pune 2026 in-store turnover from Tableau almost exactly (Apr ₹21.76 Cr, May ₹25.80 Cr, Jun ₹23.03 Cr, Jul ₹23.87 Cr, Aug ₹19.87 Cr), so it is mostly offline. (2) "TOP SPORTS" 3D stacked share bars Jan-Apr with ₹ rows: hiking & trekking 75,95,000 / 52,65,000 / 55,35,000 / 48,00,000; fitness 88,20,000 / 58,50,000 / 61,50,000 / 56,00,000; running 36,75,000 / 29,25,000 / 28,70,000 / 26,00,000; racket 22,05,000 / 31,20,000 / 24,60,000 / 24,00,000; supporting + urban (swim/kids) 22,05,000 / 23,40,000 / 34,85,000 / 46,00,000; shares Jan 31 / 36 / 15 / 9%, Feb 27 / 30 / 15 / 16%, Mar 27 / 30 / 14 / 12%, Apr 24 / 28 / 13 / 12% (shares within these top sports). Same as the "Pune city top sports plan" already in data.js. |
| `INDIA_-_SWIMMING_PROJECT_-compressed.pdf` (32 pages, 9 Nov 2026) | India Swimming Project deck: demographics (India 1/2/3), market (PAM 240M, TAM 55M, SAM 15M swimmers), Kerala swim community (Coach Saji V; 460 swimmers crossed the river, 23 girls in the India Book of Records), 4 axes with owners and trackers (Learn to swim: 90 coaches onboarded, 200 by end Q1 2026, 500 before summer 2026; Women: 4-5 SS27/28 launches; Brand perception: content and CAD; Supply: armbands/rings moved to Malaysia, caps made in India; Commerce: QC, marketplace, B2B). Contains staff emails: keep off the site. |

---

## 4. Key numbers and facts (narrative; exact tables in the appendix)

### Q4 2026 challenge
- West cluster Q4 challenge **178.77 Cr**, **+24.15%** on Q4 2025's **143.99 Cr** (deck said 178 Cr / 144 Cr).
- Channel split (from the store sheet): Stores (13) 129.04 → 154.75 Cr (+19.9%); Digital 12.87 → 15.77 Cr (+22.5%); Wholesale 2.08 → 8.25 Cr (+296%). Deck's own channel table: In-store 129 → 154 (+17% stated), Digital outstore 9.99 → 12 (+22.53%), Wholesale 2.08 → 8.25 (+691% stated), total 144 → 178 (+24.15%).
- State challenges: **Pune 87.22 Cr (+22.3%)**, **Gujarat 59.20 Cr (+21.2%)**, **MP 32.35 Cr (+35.9%)**. Over ambition: Pune +6.94 Cr (5 stores), Gujarat +3.13 Cr, MP +5.10 Cr.
- Monthly challenge growth: Oct 13.90%, Nov 19.51%, Dec 24.09%.
- Q4 marketing plan (three states, sum of Oct–Dec sheet totals) ≈ **1.60 Cr** (Pune 54.25 L, Gujarat 78.43 L, MP 27.75 L). Deck: total marketing spend 1.58 Cr (City 93 L = 0.65% of TO, MarCom 65 L = 0.45%; total 1.09%; realised ambition TO 244 Cr "re-check").
- Deck Q4 marketing mix by funnel: Awareness 92 L (58%), Interest 28 L (18%), Conversion 21 L (13%), Loyalty 18 L (11%).
- Deck city spend lines: Hoardings/OOH/HIPOP 24 L (bills +15%); In-mall 11 L (mall-to-store CVR +0.5 pts); Influencers 11 L (20 mn views); Free products & IC 13 L (barter with practice places); In-store flyers 2 L (BF sale +25%); Store events 8 L (purchase frequency 1.38); In-store comms 3 L (bills +15%); retention purchase frequency 1.95 YTD.

### Q4 campaigns and dates
- Winter Travel campaign 15 Oct – 30 Jan; Travel 15 Oct – 31 Dec; Dussehra 16–20 Oct (7.5 Cr target, +40%); Navratri/Dussehra; Kiprun community run 18 Oct; Kiprun launch India (Oct–Nov); Kids Festival 31 Oct – 2 Nov; Sports Utsav Junior skating workshop 31 Oct 11 AM–2 PM; Diwali sale 31 Oct – 1 Nov (5.5 Cr, +17%); Diwali 8 Nov (Sunday); Diwali Gift a Sport (Nov); Decathlon CSR initiatives (Nov); MH500 backpack (Nov); Children's Day 14 Nov = back-to-school colouring-book activation (all 3 states); HYROX 27–29 Nov; Black Friday 27–30 Nov (12 Cr, +22.4%); Adani Marathon 29 Nov (Ahmedabad); Christmas Gift a Sport; Christmas sale 19–31 Dec (calendar) vs EOY festive sale 18–25 Dec 20 Cr target (deck); Surat Adajan opening weekend 18–20 Dec.
- Sport of the month Q4: Oct running, Nov climbing & trekking, Dec trekking.
- Q4 hoardings: 16 = 5 Pune, 4 Baroda, 3 Surat, 2 Ahmedabad, 1 Rajkot, 1 Bhopal (update slide: Pune 4 Q4–Q1, Surat 3 Nov–Jan, Bhopal 2 Nov–Jan, Ahmedabad 2, Baroda 4 → 15). Influencers: Pune 70 (user, 26 Oct 2026; was "Pune (Adi)"), Gujarat 40, MP 40.
- Kiprun launch stats: 7 clubs, 700 runners, 11 community runs, 10 bib distributions with 5 Kiprun stalls, 45 influencer videos, 4 marathons, 2,000 Santa Run runners.
- Winter + Travel: 48% of winter turnover lands in Q4; 40 influencers on quick commerce, 5 Mn views; stores open 1 hour earlier; 20 trek route videos (1.5 Mn views), 10 footwear UGC (1 Mn); winter window in every store; NH500 in-store challenge; 50 travel agencies as affiliates; travel meetups after 300 members.
- Gift a Sport edits: under ₹999, under ₹1,999, Decathlon's Choice, for footballers, for runners.

### 2027 budget and channels (deck p8)
- 2027 communication budget **56 L**: Hoardings 35% (4 hoardings, commercial campaigns only), Influencers 25% (21 campaigns done, YTD CPV 0.08, Q4 12 weeks = 12 influencers, 40.3 lakh impressions, 63.7K interactions), Practice tie-ups 25% (15+ premium facilities; team sports, racket, swimming lead), Local events 10% (partnered only, Decathlon Play), WhatsApp/PN/RCS 5%.
- Marketing channels slide: New customers = Meta ads, outdoor communication, influencers. Existing = PN & WhatsApp, GMB, organic social, in-app. In-store kit = facade, flyers, TG headers, standee, TV, A4/stop rayons.
- AOP 2027 slide: 3 markets, "20 total AOPs" headline, per store Pune 5 (travel 1, gym 1, yoga 1, racket 2), Gujarat 10 (2/3/2/3), MP 5 (1/1/1/2) → per-store numbers add to 90. Partners get in-store branding, joint events/workshops/challenges, social collabs, member offers. Timeline: onboard Q1–Q2 2027, quarterly review.
- Sport is Everywhere QR walls: pilots 3–5 per city in Q1 (Pune, Ahmedabad, Indore); flow see display → scan QR → explore/complete kit → shop online → home delivery or C&C.

### Q1 2027
- Turnover growth 12.1%, incremental TO 8.3 Cr, bills 3.7 L (+10%), conversion 33%. Priority sports trekking, fitness, running. Country campaigns: Republic Day (MII, Jan), New arrivals (Feb), Footwear (Feb–Mar), Women's Day (Mar); Clearance/sale campaign.
- Traffic (customers +10%): 50 influencer videos (5M views); Move Your Way 3.5k registrations; bib collection 30 with 20k walk-ins; apartment/corporate events 10k engagements; Beach Fest Surat 5k participants; 2x marketing spend for the new Surat store.
- Retention (+15%): membership/RCS/WhatsApp to 5 L customers; Workshop Mela in 10 apartments (250 bikes serviced, 25 buybacks); community meetup with 500 runners in stores.
- Conversion (bills +10%): sale implant across 3 touchpoints; new arrivals alongside the sale.
- Pune calendar Jan events: SGS football 9 Jan, Wakad badminton 10 Jan, SGS running 12 Jan.

### Regional context (slide)
- Pune city: population 10.4M (district), ~36% urban, median age 26.3, ~8–9% of India GDP (Maharashtra), sports practice ~12–16%. Stores: Wakad, Amanora, NIBM, SGS Mall, Wagholi.
- Gujarat: 70.4M, 42.6% urban, median 27.4, ~8.0% of India GDP, sports 10–14%. Stores: Motera, Nexus (Ahmedabad), Dumas (Surat), Rajkot, Baroda (Vadodara).
- MP: 85.8M, 27.6% urban, median 25.8, ~4.4% GDP, sports 8–12%. Stores: Bhopal, Indore, Gwalior.
- Slide headline says "~86M people" but the three markets sum to 166.6M (site uses 166.6M). People per store: Pune 2.1M, Gujarat 14.1M, MP 28.6M; cluster 12.8M per store.
- Shopper split (strategy sheet): men ~70% of business growing ~5%; women ~30% growing ~11%.

### Surat (Adajan) opening plan (workbook, 14 Oct 2026)
- Theme "Surat nu jaman, have Adajan ni ramat · Chalo Ramiye, Adajan!" (Surat is famous for its food; now Adajan for its play). Hashtag #ChaloRamiyeAdajanDecathlon.
- Opening weekend Fri 18 – Sun 20 Dec: target ₹85 L (Fri ₹26.35 L, Sat ₹28.05 L, Sun ₹30.6 L), 18,215 walk-ins, 25.9% conversion, ₹1,800 basket, 4,722 bills; peak 274 shoppers inside on Sunday, up to 11 tills needed vs 5 planned.
- First 30 days (18 Dec – 16 Jan): ₹2.5 Cr target (plan ₹2.51 Cr; safe case ₹2.07 Cr; gap ₹43 L), 49,580 walk-ins, 13,950 bills, 28.1% conversion. Weeks: W1 ₹85 L, W2 ₹55.5 L, W3 ₹46.8 L, W4 "Pickle & Cricket Week" ₹39.3 L, W5 "Kai Po Che!" ₹24.4 L. Month plan is 1.67x a normal Year-1 month (₹1.5 Cr).
- Budget ₹18 L; plan spends ₹24.93 L (over by ₹6.93 L). Cost per walk-in ₹50 (weekend ₹36). Spend: digital 2.9 L, influencers 6.2 L, OOH 1.92 L, cinema 0.35 L, print & PR 1.15 L, community & partners 3.22 L, events 4.88 L, opening offers 2.01 L.
- 28 strategies, 81 events, 126 partners; walk-ins from digital & media 25,100, community & partners 12,409, events 12,095; ~53,800 people at events. Top drivers: online ads 6,000; Happy Streets 5,400; shop front 5,200; WhatsApp to nearby customers 3,530; influencers 3,000; Ramat Passport 2,732; SMS/app 2,700; hoardings 2,000; Ramat Club 2,000; Tapi Sunrise Run + carnival 1,980; Night Carnival 1,925.
- Phases: P0 Ground game 19 Oct–2 Nov; P1 "Kaink navu aave che" 3–22 Nov (light over Diwali 8 Nov); P2 Reveal 23 Nov–7 Dec; P3 "10 Divas, 10 Ramat" 8–17 Dec (treasure hunt 12 Dec, Happy Streets #1 on LP Savani 13 Dec, radio, Cinepolis, 80,000 leaflets); P4 weekend 18–20 Dec (Pehli Ramat + night run Fri, Night Carnival Sat, Tapi Sunrise Run 06:45 + 15-zone sports carnival Sun); P5 "Ramat chalu rahe" 21 Dec–16 Jan (Santa Party, New Year run, Happy Streets #2 3 Jan, box cricket night league, Pickle Premier League, Kai Po Che! 11–13 Jan, run club).
- Market: Surat sports market ₹1,591 Cr (2025) → ₹2,451 Cr (2030), ~9.0%/yr; SAM within 20 min ₹674 Cr (42%); SOM Year 1 ₹18 Cr; Decathlon share of SAM 1.2% → 2.9% with Adajan; 5.64 lakh people / 1.34 lakh households within 15 min; median age ~30; 751 women per 1,000 men; Adajan living area ₹235 Cr (#1 in Surat), Decathlon share 0.75%. Dumas: last 12 months ₹38.36 Cr, 99,507 customers, Jan–Sep 2026 +25%, conversion 35%, ABV ₹2,707, Dec 2025 ₹3.36 Cr; Surat Dec 2026 forecast ₹5.36 Cr. 10,087 Dumas customers live in Adajan pincodes + Katargam.
- Offers (no % discounts): gifts on bills ₹2,499+ sipper, ₹3,999+ 10 L backpack, ₹5,999+ 17 L backpack, ₹9,999+ 24 L backpack; "Poora Bill Maaf" draws 26 Dec, 2, 9, 16 Jan on bills ₹2,999+; grand prize Rockrider cycle 16 Jan; Ramat Pass for first 5,000; Ramat Passport stamps.
- Benchmarks: Bhopal DB Mall 2025 (budget ₹26.2 L, 17,187 walk-ins, ₹84.7 L, ₹153/walk-in); Nexus 2025 (₹24.1 L, 10,500, ₹65 L, ₹229); Pondy Bazaar Chennai (₹30 L, 9,700, ₹93.7 L, ₹309); Pune plan opening week (₹23 L, 15,000, ₹53 L, ₹153); Adajan weekend (₹18 L, 18,215, ₹85 L, ₹36).
- Insights: Surat leaves town for Diwali (diamond units close 3–4 weeks); distance decides (64% of Vesu/Athwa homes shop Dumas vs 3% in Adajan 395009); Kantar radio 127 / cinema 119 / print 111; Instagram 31.6% of walk-ins (Bhopal survey); pickleball at Dumas +108%; Run for Girl Child 8–10k runners; Dec–Jan 31°C/16°C.
- Surat new-store slide (separate, indicative): target opening Q1 2027, site TBC, large format, catchment Surat + Dumas, Vesu, Adajan, Piplod, Vapi; timeline Oct–Dec site, Jan partnerships, Feb pre-opening, Mar soft launch, Apr grand opening.

### Ahmedabad master (Jan–Jul 2026)
- Ahmedabad city pop 8.4M (metro 9.585M), ABC share 42%, sport spend ₹3,000/person/yr, median 27.4, Jain 3.6%. Sports market ₹1,801 Cr (2023) → ₹2,698 Cr (2027) → ₹2,999 Cr (2028), CAGR 10.6%. DSI TO 60 → 100 Cr target (2 stores, 5 assumed by 2028).
- Store performance YTD Jan–Jul 2026: Motera ₹30.85 Cr (+22.6%, ABV ₹2,749, conv 32%); Nexus ₹27.56 Cr (+9.5%, ABV ₹2,374, conv 27%); Dumas Road ₹24.04 Cr (+23.5%, ABV ₹2,707, conv 35%); Baroda ₹22.32 Cr (+25.3%, ABV ₹2,797); Rajkot ₹5.64 Cr (+43.7%). Gujarat total ₹110.4 Cr.
- Padel/pickleball growth: Rajkot +900%, Motera +175%, Dumas +115%, Baroda +74%, Nexus +71%.
- Kantar 2024: saw a recent campaign: Mumbai 83%, national 72%, Gujarat 53%, Pune 49%. Gujarat channel index vs India: radio 127, cinema 119, print 111, streaming 107, TV 106, event 104, search 103, friends 100, in shop 100, online video 97, social 94, outdoor 94.
- Action plan highlights: Veer Savarkar Sports Complex partnership (CWG 2030 venue); route bulky/kids/cycle demand to SAS; garba-prep fitness campaign Aug–Sep; add print, radio, cinema in Gujarat; Gujarat Titans match-day activation at Motera; padel corners.

### Personas
- Photos (26 Oct 2026). Ahmedabad: Sports Family → family football; Active Lifestyle Professional → run club; Outdoor & Travel Explorer → trek couple; Progressive Sports Enthusiast → pickleball player; Young Trend & Discovery → women's football Bloom/Glow; The Patron → golf couple. Pune: Urban Performance Professional → Kiprun runner lacing up; Active Urban Explorer → trek couple (only photo used on both boards); Sports Driven Family → family cycling; Daily Athlete & Academy Player → padel player; Active Senior Lifestyle → seniors with frisbee. Card photo height 210px with per-photo focus point.
- Ahmedabad (Nexus board; 400-person walk-in survey 35%, catchment 25%, footfall analytics 15%, category 15%, ecosystem 10%): Sports Family 32% (maintain), Active Lifestyle Professional 25% → 27%, Outdoor & Travel Explorer 23% → 17%, Progressive Sports Enthusiast 11% → 22%, Young Trend & Discovery 9% → 14%, The Patron (business owner) not yet in mix. Targets sum to 112%.
- Young Trend & Discovery (Ahmedabad) age is **18-24** (user, 28 Oct 2026); was 18-28 on the Nexus board. Superseded: 18-28.
- Pune (Kothrud slide; shares are estimates): Urban Performance Professional 30–35%, Active Urban Explorer 20–25%, Sports Driven Family 25–30%, Daily Athlete & Academy Player 15–20%, Active Senior Lifestyle 10–15%.

### Competitors (Pune Marcom calendar)
- PUMA, adidas, Nike, Shakti, ASICS, Gully Labs per month; themes Jan New Year fitness → Dec Christmas + New Year; Pune responses per month (run clubs, women events, cricket/football events … gifting + new year acquisition).

### State stories (site copy, some from general knowledge; see open questions)
- Pune "The calm of the Sahyadris": forts and monsoon treks; Shivaji Maharaj grew up in Pune, Rajgad first capital; Oxford of the East; Hinjewadi IT parks next to Wakad.
- Gujarat "The land of Garba, of traders and makers, the textile heart of India": Manchester of the East; Surat diamond hub; Surat was the East India Company's first base before Bombay; Baroda the King City of the Gaekwads; nine nights of Navratri garba; Uttarayan.
- MP "Forts, music and the youngest crowd": Gwalior of the Scindias, Man Singh Palace; Tansen, UNESCO City of Music; Rajwada built by the Holkars, Indore cleanest city; Sanchi Stupa near Bhopal on the ₹200 note; Bhopal City of Lakes.

### Advertising spend 2026 vs 2027 (ultimate_data_sheet_1.xlsx)
- 2026 (Jan–Sep realised + Oct–Dec Q4 plan): Pune 2.57 Cr, Gujarat 2.92 Cr, MP 0.53 Cr.
- 2027 plan: Pune 3.65 Cr (+42%), Gujarat 2.61 Cr (−11%), MP 1.20 Cr (+127%); cluster 7.46 Cr. Old figures (Pune 2.10, Gujarat 1.59, MP 0.62 Cr) are **superseded**.
- 2027 split every month and state: digital paid 30%, hoardings/OOH/HIPOP/AOP 30%, in-store 20%, in-mall 5%, store events 5%, influencers 5%, free products 3%, flyers 2%.

### Q4 scoreboard figures (store sheet)
- **Pune Digital (MarCom) added 26 Oct 2026** (user figures, not the sheet): 8.80 / 11.988 / 12.356 L = 33.144 L. Pune Q4 line plan now 87.39 L (totals 25.30 / 38.99 / 23.11 L, was 16.5 / 27 / 10.75); Pune 2026 ad spend Oct-Dec in the spend chart updated the same way (Pune 2026 total now 2.90 Cr, 2027 plan 3.65 Cr = +26%). Line summary total now 202.5 L: Digital (MarCom) 65.6 L = 32.4% (Pune 33.1, Gujarat 21.3, MP 11.1), hoardings 18%, influencers 11.2%, in-mall 10.5%, in-store 8.7%, events 8.2%, partnerships 7.7%, PR 0.9%, other 2.4%. The figures below are pre-update.
- Store challenge sums: Pune stores 65.24 → 75.53 Cr (+15.8%), Gujarat stores 44.30 → 51.49 Cr (+16.2%), MP stores 19.51 → 27.73 Cr (+42.1%), 13 stores 129.05 → 154.75 Cr (+19.9%); ambition sum 139.57 Cr.
- Store Q4 budgets (L, Oct/Nov/Dec): Pune 13.21/17.99/18.53 = 49.73; Gujarat 13.60/18.29/21.39 = 53.28; MP 6.63/9.20/10.87 = 26.70; 13 stores 129.71 L = 0.84% of store challenge (Pune 0.66%, Gujarat 1.03%, MP 0.96%).
- Line summary (state line plans, Oct–Dec, L; Pune / Gujarat / MP / total / share): Hoardings-OOH-HIPOP 14.75/15.80/5.85/36.4/21.5%; Digital (MarCom) –/21.32/11.11/32.4/19.1%; Influencers 8.0/9.4/5.26/22.7/13.4%; In-mall 9.0/11.1/1.15/21.3/12.5%; In-store comms + flyers 11.5/4.22/1.97/17.7/10.4%; Store events 7.0/7.05/2.62/16.7/9.8%; Partnerships + free products 0.5/10.66/4.49/15.7/9.2%; PR –/1.4/0.45/1.8/1.1%; Other (Pune internal consumption 3.5, Gujarat other online 1.21, MP general advertising 0.05) 4.8/2.8%. Total 54.25/82.16/32.95 = 169.4 L.

### Penetration vs sports market (India City Ranking 2025, Final List + T3)
City: rank | population 2023 | market 2023 / 2025 / 2027 / 2030 (Cr) | DSI TO 2024 (share) | DSI TO 2025 (share) | untapped (qbr, Cr)
- Pune: 8 | 6.46M | 1,804 / 2,212 / 2,704 / 3,685 | 175.24 (8.88%) | 161.25 (7.29%) | 1,554
- Ahmedabad: 7 | 7.40M | 1,801 / 2,208 / 2,698 / 3,678 | 60.47 (3.07%) | 58.54 (2.65%) | 1,710
- Surat: 9 | 6.16M | 1,762 / 2,160 / 2,641 / 3,599 | 25.59 (1.33%) | 23.87 (1.10%) | 1,730
- Vadodara: 22 | 2.30M | 681 / 835 / 1,021 / 1,392 | 24.69 (3.62%) | 24.37 (2.92%) | 649
- Indore: 15 | 2.71M | 588 / 721 / 881 / 1,201 | 25.46 (3.96%) | 23.45 (3.25%) | 552
- Bhopal: 25 | 2.48M | 476 / 584 / 714 / 973 | 2.45 (0.51%) | 3.99 (0.68%) | 474
- Rajkot: 23 | 1.77M | 456 / 559 / 683 / 931 | 5.32 (1.17%) | 6.71 (1.20%) | 449
- Gwalior: 82 | 1.47M | 196 / 240 / 293 / 399 | 4.96 (2.32%) | 4.89 (2.04%) | 188
- 8 cities: market 2025 ₹9,519 Cr, our TO ₹307 Cr = 3.2%. The file grows every city's market at the same ~10.7% a year 2025-2030.

### Pune personas (Pune_persona.xlsx)
- Urban Performance Professional 30-35% (2.25-2.60 lakh people), Sports Driven Family 25-30%, Daily Athlete & Academy Player 20-25% (was shown 15-20%), Active Urban Explorer 15-20% (was 20-25%), Active Senior Lifestyle 10-15%.
- Y1 turnover vs ₹26 Cr target: UPP ₹8.3-9.0 Cr (32-35%), SDF ₹7.0-7.8 Cr (27-30%), DAAP ₹5.2-6.0 Cr (20-23%), AUE ₹3.8-4.5 Cr (15-17%), Senior ₹2.0-2.8 Cr. Active customers Y1: 9,500-11,000 / 7,500-9,000 / 6,500-8,000 / 5,000-6,500.
- Basket: ₹3,500-5,500 / ₹5,500-9,000 / ₹2,000-3,800 / ₹2,800-4,500 / ₹3,000-5,000. Conversion: 28-32% / 35-40% / 30-35% / 18-25% / 35-40%. Orders a year: 8-12 / 6-8 / 10-16 / 3-5 / 4-6.

### Big external events (web-checked 26 Oct 2026)
- Khel Mahakumbh 2026 (Gujarat): 76,02,178 players and 3,49,747 teams registered (29 Aug–22 Sep), 35+ sports; inaugurated in Vadodara, Oct 2026. newkerala.com reports.
- Adani Ahmedabad Marathon: 10th edition 29 Nov 2026; 9th (30 Nov 2025) had a record 24,000+ runners (IANS).
- Pune International Marathon: 39th edition 7 Dec 2025 with 15,000+ runners, 70+ foreign athletes (pre-race report); 2026 date not confirmed ("early Dec").
- Bajaj Pune Marathon: 6th edition 14 Dec 2025 (full, half, 10K, 5K); 2026 date not confirmed ("mid Dec"); 2019 half marathon had 20,000+ runners.
- Bajaj Pune Grand Tour: first UCI 2.2 race in India, 19–23 Jan 2026, ~2.5 million spectators; upgraded to UCI 2.1, 2nd edition 26–31 Jan 2027, 6 stages. Pune awarded 2032 UCI Road World Championships (per report).
- Vadodara International Marathon: 13th edition 1 Feb 2026, ~1.10 lakh registrations; 2027 edition listed 31 Jan 2027.
- Khelo MP Youth Games: Jan 2026, 19 days, 28 disciplines, 313 blocks; 2027 dates not confirmed.
- Army Marathon Bhopal: ~6,500 runners Jan 2025.
- Indore Marathon: first Sunday of February; 12th edition 1 Feb 2026 (official site also lists 15 Feb; conflict); organiser claims 25K+ participants (likely cumulative).

### Strategies: 2026 recap → Q4 → 2027
- Back to school: 2026 Motera school visits; Q4 14 Nov colouring books → reward at store (family walk-ins), Surat school sports-day kit desks Dec–Jan (8 schools); 2027 Pune school activations (teen sport Jan, girls' schools Feb, summer camps Apr–May, Christmas carnival Dec).
- Yoga Day: 2026 Antyodaya Yog Kumbh at Decathlon Motera 21 June; Q4 sunrise yoga with Tapi Sunrise Run 20 Dec; 2027 Yoga Day 1–21 June (national goal 10,000).

### 2027 Q1 and Q2 sport plan (plan2027.html, 9 Nov 2026)
- Online (digital) turnover by sport, 2026 (Digital_ytd_2026_data_.xlsx; the only turnover by sport we have; store sales by sport not in our files). Q1 (Jan-Mar) / Q2 (Apr-Jun), West: mountain (hiking + trekking & climbing + camping) ₹3.07 Cr / ₹4.02 Cr; fitness (equipment + outfit) ₹2.55 / ₹2.79 Cr; running ₹1.36 / ₹1.01 Cr; cycling (sports + mobility + maintenance) ₹1.23 / ₹1.48 Cr; swimming ₹40.4 L / ₹80.0 L; cricket ₹18.6 / ₹18.8 L; pickleball (padel, pickleball, beach tennis line) ₹3.48 / ₹4.40 L. 7 sports: Q1 ₹8.84 Cr, Q2 ₹10.32 Cr. Jan-Oct: mountain 11.87, fitness 9.13, cycling 4.92, running 3.79, swimming 1.82, cricket 0.57, pickleball 0.15 Cr.
- 2027 ad budget (ultimate_data_sheet_1): Q1 Pune ₹80.39 L, Gujarat ₹59.54 L, MP ₹28.51 L = ₹1.68 Cr; Q2 ₹103.54 / ₹77.33 / ₹30.48 L = ₹2.11 Cr.
- AOPs from AOP_PLAN (Jan-Mar / Apr-Jun 2027): Pune 68 / 50, Gujarat 55 / 46, MP 29 / 23 = 152 / 119. By month Jan 49, Feb 51, Mar 52.
- **Proposals (ours, to confirm)**: growth on the same quarter of 2026 (Q1 / Q2): running +18 / +10%, fitness +15 / +15, cycling +20 / +15, mountain +12 / +12, swimming +15 / +25, cricket +25 / +25, pickleball +60 / +60 → 7-sport online goal Q1 ₹10.21 Cr (+16%), Q2 ₹11.81 Cr (+14%). Budget: share of each state's quarter ad budget per sport (sports lead 63% of Pune and Gujarat Q1, 57% MP; Q2 57 / 62 / 58%) → sport-led ₹1.04 Cr in Q1, ₹1.25 Cr in Q2; the rest is sale, national campaigns, new arrivals and brand. AOPs split by sport so each state's split adds exactly to its AOP_PLAN quarter total (e.g. Q1 Pune: fitness 20, running 14, cycling 10, pickleball 10, mountain 8, swimming 6). Cricket = Gujarat only; pickleball = Gujarat and Pune; MP has neither.
- Calendar facts used: Bajaj Pune Grand Tour 26-31 Jan 2027; Vadodara Marathon Sun 31 Jan; Indore Marathon first Sunday of Feb (date to confirm); Women's Day weekend Sat 6 - Sun 7 Mar; IPL Sun 14 Mar - Sun 30 May; Holi Mon 22 Mar; Good Friday 26 Mar; World Health Day Wed 7 Apr; Gudi Padwa Thu 8 Apr; Maharashtra Day Sat 1 May; Global Running Day Wed 2 Jun; World Bicycle Day Thu 3 Jun; Yoga Day Mon 21 Jun; Kiprun Challenger ₹9,999 Mar-May; event IPs and Pune sport of the month from the planner; Q1 goals from the Q1 2027 plan. Q2 turnover/bills/conversion goals: none in our files.

### Swimming and water sports 2027 (uploads of 9 Nov 2026; saved, not yet on the site)
- **Pune water sports plan SS 2027** (SS_2027_Pune_water_sport_plan.docx). Timeline M5-M12 2026 and M1-M4 2027.
  - Pune swimming market projected ₹1,01,89,64,254 (₹101.9 Cr) by end 2026; Decathlon Pune share projected to close at 19.1% with ₹19,32,50,220 (₹19.33 Cr) turnover. Source cited: "Pune Sport Categorization 2022-26".
  - Priority 1: retain customers so they come back next year. Priority 2: capture learners and new swimmers (who start in summer). Threats: local competition and quick commerce.
  - Facts quoted: gender split men 65% / women 35%, junior 24%; India tops 10 Asian markets for travellers searching for accommodation with pools; 30M+ Indians visit amusement parks a year, market growing 14% a year.
  - Action 1, mass plan + offer SS27: stores validate range by week 39 2026; brand x retail range validation week 40; store maps validated week 41 (store leader + department manager + regional manager + brand).
  - Action 2, human: team recruited by 10 Jan 2027; whole swimming team are swimmers (practise at least twice a week), 50% diversity. Per store FT / PT / intern: Amanora 3/3/3, SGS 4/6/2, Wagholi 3/4/2, Wakad 4/4/12, NIBM 2/6/1 (blank in the human table, filled in the business plan), OOC 1 FT (CDMR). Stated total 18 FT, 23 PT, 20 interns. Training dates 19 Jan, 16 Feb, 23 Mar 2027. IC panoply ₹1,999 per teammate for weekly practice.
  - Action 3, merchandising: water sports move + 100% checklist and top 15 families 100% CAD by 15 Feb 2027; golden peg challenge from 15 Feb (weekly FCS + TO growth vs country; caps sold per goggle to lift ABQ). Families: swim towels; goggles, masks; covering swimwear; swim headwear; men's swimsuits; girls' swim; boys' swimsuits; sun protection; Aqualearn accessories; swimming material; men's occasional beachwear.
  - Action 4, campaigns: New arrival x Summer collection live in all stores by 15 Feb; WhatsApp push monthly (Feb week 3, Mar week 2, Apr week 2, May week 1); outstore live by 15 Mar.
    - In-store + mall (₹) Amanora / SGS / Wagholi / Wakad / NIBM: window wall + store home page 5,000 / 8,000 / 10,000 / 25,000 / 20,000; stop rayons 1,000 / - / 5,000 / 5,000 / 2,000; CAB + TGs 4,000 / - / 15,000 / 10,000 / -; TV none; in-mall / lollipops 60,000 / 54,000 / 1,00,000 / - / 2,10,000. Totals 70,000 / 62,000 / 1,30,000 / 40,000 / 2,32,000 = ₹5,34,000.
    - Outstore (₹) Amanora / SGS / Wagholi / Wakad / NIBM / OOC: hoardings 2 x 1,35,000 = 2,70,000 / 1,50,000 / 2 x 1,40,000 = 2,80,000 / 3 = 4,20,000 / 1 = 1,50,000 / 2 x 1,50,000 = 3,00,000; pool partnerships at ₹25,000 each 10 = 2,50,000 / 5 = 1,25,000 / 15 = 3,75,000 / 10 = 2,50,000 / 8 = 2,00,000 / 10 = 2,50,000; flyers 15,000 / 20,000 / 10,000 / 20,000 / 16,000 / 0; Instagram influencers 1,00,000 x 3 months / 50,000 x 3 / 1,00,000 x 3 / 1,00,000 x 3 / 50,000 x 3 / ad-boost reels 2 = 50,000; coaches affiliation (sponsor coaches with a ₹5,000 kit, "Learn swimming with Decathlon x coach") 20 = 1,00,000 / 10 = 50,000 / 10 = 50,000 / 20 = 1,00,000 / 10 = 50,000 / 10 = 50,000. Stated totals 9,35,000 / 4,95,000 / 10,15,000 / 10,70,000 / 5,66,000 / 6,50,000 = ₹47,31,000.
  - Action 5, events: "Learn swimming with Decathlon x coach / Academy" with all affiliated coaches and pool partners; registrations tracked on Townscript; 1 free goggle when buying a whole set (goggle + swimwear + cap + towel + bag), shared by coupon, new customers only.
  - Action 6, quick commerce: anticipate demand and match in-store supply; coverage for in-range models (RDP, range selection); digital LMs for out-of-range stock (CDMR + Anushka Khandelwal); campaigns on express delivery for water sports.
  - **Business plan March to June 2027, turnover at +25% vs 2026** (₹): Amanora 2,43,36,155; SGS 2,29,41,668; Wagholi 2,33,06,966; Wakad 5,08,93,673; NIBM 1,42,72,318; OOC 4,07,14,939; **Pune 17,64,65,719 (₹17.65 Cr)** (written "4,0714,939" and "17,646,5719" in the file; the stores add up exactly). Trainings ₹5,000 per store x 6 = ₹30,000; in-store + mall ₹5,34,000; outstore ₹47,31,000 → ₹52,95,000 with trainings (our sum; IC panoply and staff cost not included).
- **The Great Indian Swim Project** (WA0002 docx + WA0003 deck). Regional (Pune, Gujarat, MP), Nov 2026 to Apr 2027, proposed ₹8,00,000. Ambition: "create more swimmers", not just sell swimming products. Platform line "MAKE YOUR CATCHMENT SWIM. Every city. Every age. Every swimmer." Audience: non-swimmers and beginners.
  - 4 pillars: Acquire, Connect, Engage, Convert. Journey: Discover → Register → Experience → Equip → Belong. Rule: every activation needs a measurable next step.
  - Six-month targets (proposed): 3,000 qualified registrations; 1,500 first swimming experiences; 600 repeat swimmers (2+ more sessions); 1,000 community members; 600 purchasing customers; ₹15 lakh attributed category sales. Funnel assumptions: registration → first swim 50%, first swim → repeat 40%, registration → purchase 20%. ₹15 L / ₹8 L = 1.88x sales-to-marketing (stated as not ROI).
  - 6 flagship campaigns: A "1,000 People. One Swimming Mission." (academy beginner sessions, progress counter); B "Women Who Swim" (women-only beginner sessions, female instructors); C "Every Family Should Swim" (parent-child days, societies, schools, water safety); D "Aqua Zumba, Swim & Move" (one pilot per anchor city, external content crew, QR desk to lessons); E "Decathlon Swim League" (academy vs academy, beginner categories, city finals); F "The City Needs a Swim" (digital hoardings, underwater visuals, QR to nearby sessions, test before scaling).
  - Supporting ideas: City Needs a Swim installation (quiz + QR), Swim After Dark, Floating Billboard, Follow the Blue Footprints, Underwater Selfie Challenge, 30-Day Swim Streak, Swimming Starter Wall. Inspiration (to verify before public use): adidas Liquid Billboard, Speedo Outsiders Club, Nike women-focused swim storytelling, Speedo anti-run-club.
  - Cities: Pune community hub (Wakad, Amanora, NIBM, SGS, Kothrud; Aqua Zumba pilot, Women Who Swim, society + corporate, first Swim League; 7 academies; ₹2.70 L). Gujarat family + community (Ahmedabad 5 academies: Nexus and Motera catchments, women-only + family; Surat 3: academy-led family + beginner; Vadodara 2, Rajkot 2: partner-led discovery; total 12; ₹2.90 L). MP beginner acquisition (Indore 4: 1,000 People Mission; Bhopal 3: Family Swim Days; Gwalior 2: beginner discovery; total 9; ₹1.70 L). Regional content, tracking, contingency ₹0.70 L. 28 academies in all (proposed, not confirmed).
  - Calendar: Nov 2026 build the ecosystem (map academies and pools, terms, store champions, tracking, sales baseline); Dec 2026 Make Your Catchment Swim (registrations, discovery sessions, Aqua Zumba pilots, first stories); Jan 2027 30-Day Swim Challenge (swim streaks, Women Who Swim, creator stories); Feb 2027 Swim Together (family weekends, society + corporate, academy referrals); Mar 2027 Decathlon Swim League (academy competitions, beginner categories, city finals); Apr 2027 Summer Swim Movement (school holidays, 1,000 People milestone, starter kits, conversion). Weekly rhythm Mon review / Wed follow-up / Fri confirm weekend / Sat-Sun deliver / month-end scorecard.
  - Budget by activity (same ₹8 L, not additive with the geography split): academy trials + acquisition ₹2,40,000; city launch events + community ₹1,20,000; videography + content ₹90,000; local paid digital ₹1,00,000; in-store branding, QR stands, POS ₹45,000; creators + ambassadors ₹45,000; CRM, tracking, reporting ₹25,000; contingency ₹1,35,000.
  - Academy partner programme: verify academies, agree capacity / pricing / safety, unique referral QR + tracking ID per academy, complimentary intro class (academy funds or co-funds), no blanket discounts or pay-per-lead until conversion is proven, written agreements. One named Swimming Champion per city / catchment. Asks of leadership: approve ₹8 L with a 90-day checkpoint; academies as the main channel; nominate champions; approve external content; agree a monthly scorecard.
- **Water sports (Swimming + Surf/Bodyboard), Pune + Ahmedabad + Rest of West, 1 Jan to 8 Nov 2026** (Tableau screenshots, vs same days 2025): turnover ₹33.9 Cr (+15.6%), digital ₹5.0 Cr (+38.0%, digital share 14.6%), quantity 7.0 L (+20.7%), margin 27.8% (+0.88 pt), ABV ₹2,469 (+4.4%), ABQ 3.5 (-1.1%), ASP ₹490 (-3.9%). Channels: physical in-store ₹28.9 Cr (+12.5%), store-assisted ₹21.2 L (+456.1%), Decathlon.in ₹1.6 Cr (+35.4%), B2B ₹2.7 Cr (+26.6%), marketplace ₹45.9 L (+83.6%), circular ₹1.9 L (+192.3%). By month (Cr): Jan 1.6, Feb 2.4, Mar 5.2, Apr 5.9, May 6.4, Jun 3.5, Jul 2.4, Aug 2.2, Sep 1.9, Oct 1.9, Nov (to 8th) 48.4 L. By city: Pune ₹19,76,24,828 (+15.3%, 58.3% share, digital 15.0%, 4,08,924 units +20.3%, margin 27.8% +0.70); Ahmedabad ₹7,43,76,941 (+11.9%, 21.9%, digital 14.2%, 1,48,296 units +12.4%, margin 27.7% +1.07); Rest of West ₹6,71,67,617 (+21.1%, 19.8%, digital 14.2%, 1,46,057 units +31.9%, margin 27.8% +1.24).
- **Sales by sport 2026, all channels** (YTD_DATA_2026_FROM_TABLEAU_SPORT_WISE, Sheet 1; our sums, ₹ Cr; Pune / Ahmedabad / Rest of West / MP = West). Same sport groups as the 2027 page.
  - Swimming: Q1 4.97 / 1.63 / 1.29 / 0.95 = 8.84; Q2 7.93 / 3.11 / 2.79 / 2.23 = 16.06; Jan-Oct 33.44 (in-store 85.6%). By month West Jan-Nov: 1.46, 2.32, 5.06, 5.94, 6.47, 3.65, 2.51, 2.24, 1.94, 1.84, 0.44.
  - Mountain (hiking + trekking & climbing + camping): Q1 12.75 / 5.57 / 5.06 / 5.22 = 28.60; Q2 18.39 / 8.23 / 7.88 / 6.25 = 40.75; Jan-Oct 114.37 (in-store 84.2%).
  - Fitness (outfit + equipment): Q1 13.26 / 4.41 / 4.20 / 3.79 = 25.66; Q2 15.56 / 6.04 / 5.53 / 4.47 = 31.59; Jan-Oct 95.43 (in-store 88.1%).
  - Running: Q1 5.25 / 2.41 / 2.30 / 1.96 = 11.92; Q2 6.08 / 2.52 / 2.39 / 2.04 = 13.03; Jan-Oct 40.70 (in-store 87.1%).
  - Cycling (sports + mobility + maintenance): Q1 3.58 / 1.12 / 1.37 / 0.72 = 6.78; Q2 4.14 / 1.32 / 1.61 / 0.81 = 7.87; Jan-Oct 24.35 (in-store 85.8%). Separate line "Cycling kid / urban gliding": Q1 7.42, Q2 10.49, Jan-Oct 28.95.
  - Cricket: Q1 1.73 / 0.81 / 0.71 / 0.51 = 3.75; Q2 2.40 / 1.32 / 1.08 / 0.63 = 5.43; Jan-Oct 13.54 (in-store 94.4%).
  - Pickleball (padel, pickleball, beach tennis): Q1 0.08 / 0.04 / 0.06 / 0.05 = 0.23; Q2 0.09 / 0.07 / 0.09 / 0.04 = 0.29; Jan-Oct 0.90.
  - Biggest sports Jan to 8 Nov (West, Cr): hiking 94.07, fitness outfit 78.34, running 41.71, swimming 33.88, kid cycling / urban gliding 29.46, fitness equipment 19.07, cycling sports 18.44, trekking & climbing 15.72, football & futsal 15.07, tennis & squash 14.60, cricket 13.78, winter sports 12.16. By cluster: Pune 232.52 (in-store 205.40), Ahmedabad 89.53, Rest of West 84.59, MP 70.19. All sports West by month Jan-Oct (Cr): 46.43, 34.62, 43.87, 51.14, 60.86, 52.17, 52.02, 44.99, 38.53, 41.34.
- **Pune partnerships** (Pune_Partnerhsips__Coaches_affiliation_.xlsx; listed rows): Amanora 23 (7 swimming pools: AKV, Infinity, Core Fitness, Legacy Sports, Rabs, Fitlife, Champions; padel: I Padel Academy), SGS 6 (swimming: Nilu Phule, Swargate), Wakad 31 (swimming: Bluewater Academy, Proswim Academy, both Apr 2026-May 2027; pickleball/padel: UJ Turf Walekarwadi, Pickle & Cue, Paddle House, Power Play Park), NIBM 35 (swimming: Varunah Aquatics, Ganga Dhaam Society Pool, Ileseum; pickleball/padel: Flux, Court Culture, Muscle Bar, Pickle Haus, Padel Haus, PVS, Ray Sports), Wagholi 22 rows with 2 repeats (swimming: Shree, Kothari International, Raj, Kavya, Club 360; pickleball/padel: ADYPU, Casa de Padel, Pickler, Wisdom; several start dates Feb-Dec 2027). Schools 2025 (Back to School, "<12 schools done for the city">): Wagholi 10 listed (Narayana e-Techno done, 7,500 stickers), Amanora 6 (Pawar Public 23,000 stickers, Global 15,000, Narayana 8,000, Orchid 6,350, Angel Paradise 1,000; Yoga Day, Muddy Buddy 28 Jun, store visits), SGS 4 (S.M. Chouksey 20,000, St Anne's 14,000, Orchids 15,000), Wakad 9 (small sticker runs), NIBM 6 (Narayana 4,500).

### Water sports 2027 page (water2027.html, 9 Nov 2026)
- **Gujarat water plan SS 2027** (Gujarat_water_sport_plan_-_2027.docx). Same timeline (M5-M12 2026, M1-M4 2027) and actions as Pune (range by week 39, brand x retail week 40 (file says "2036", a typo), store maps week 41; team by 10 Jan; CAD + top 15 families + golden peg 15 Feb; summer campaign 15 Feb; WhatsApp Feb wk3, Mar wk2, Apr wk2, May wk1; outstore by 15 Mar).
  - Diversity 70:30 (70% women incl. FT, PT, interns for Mar-May). Training dates: **Pune 19-20 Jan, 10-11 Feb, 2-3 Mar 2027; Gujarat 8-9 Feb and 23-24 Feb; MP 16-17 Feb**. Swim kit ₹1,999 per teammate.
  - ABQ focus: goggle cases per goggle; add-ons goggle case, L-pocket (phone pocket), 3 L and 7 L pouches, mesh bag (station coaching); "Step 1.5" placement.
  - Merchandising in DSI Motera and DSI Dumas Road: family window (male and female mannequins ₹11,911 each, boy and girl ₹6,908 each, communication ₹40,000, lighting ₹20,000 = ₹97,638); entrance display, 3 mannequins in hero products (women Una top and bottom, men UV top + Fiti 500 jammer, kids combi swimsuit) + podium ₹1,834 + cover ₹2,248 + spotlights ₹15,000 = ₹49,812; towels size board ₹2,500; snorkel masks video screen ₹9,000; tel-pocket acrylic cube ₹1,200; UV tops ₹1,600; goggles/headwear and aqua learning no budget. Total ₹1,61,750.
  - Human planning (counts; names not used): Nexus DM + 1 FT + 2 PT, 3 to recruit; Baroda DM + 1 FT, 4 to recruit (2 PT, 2 interns); Dumas DM + 1 FT + 2 PT, 1 intern to recruit; Motera 1 FT + 2 PT, 3 interns to recruit; Rajkot 1 FT + 1 PT; Indore DM + 1 FT + 1 PT, 2 to recruit; Bhopal 1 PT, 3 to recruit. Gwalior and Adajan not listed.
  - Campaign: city hoarding 3D, theme "Summer fun with water (affordability)", no budget. Coaches onboarded by 15 Feb at the latest; coaches seminar 26-28 Feb. In-store + mall: window wall and home page at all 5; stop rayons all but Rajkot; CAB + TGs all 5; TV all but Rajkot; in-mall comms at Nexus, lollipops at Motera, Dumas, Baroda.
  - Outstore (₹) Nexus / Motera / Dumas / Baroda / Rajkot: pool partnerships (IC + comm.) 1,00,000 / 1,00,000 / 1,00,000 / 1,00,000 / 50,000 = 4,50,000; flyers 30,000 Nexus only; Instagram influencers 20,000 x 4 = 80,000 (Rajkot none); coaches affiliation (₹5,000 kit) 50,000 x 4 + 25,000 = 2,25,000 (so 10 coaches per store, 5 in Rajkot: 45). Totals 2,00,000 / 1,70,000 / 1,70,000 / 1,70,000 / 75,000 = ₹7,85,000 (written "7,85,0000").
  - Events: Learn swimming with Decathlon x coach, Townscript, free goggle with a full set (goggle + swimwear + cap + towel + bag + goggle case). QC same as Pune. Action 7: city launch with all departments, store visit end Feb (Bhanu + Akshat), biweekly catch-up.
  - **Business plan M3-M6** (₹) 2026 → 2027 at +20%: Nexus 2,05,00,156 → 2,46,00,187; Motera 1,92,15,223 → 2,30,58,268; Dumas 1,61,40,797 → 1,93,68,956; Baroda 1,52,91,011 → 1,83,49,213; Rajkot 38,55,443 → 46,26,531; stated totals 7,50,02,643 → **9,00,03,171 (₹9.00 Cr)**. Families (85% of TO): goggles, caps, material, aqua learning, towels, women's, baby, men's, boys', girls' swimsuits.
- **India swimming (national)**: market ₹7,200 Cr / 700 M Euro by 2030 at 10% CAGR; Decathlon share 7% (2023 in the A4, 2025 in the deck) aiming for 10% by 2030; men 65 / women 35, juniors 24%; 5,000 pools, 7,500 km coastline; drowning 10% of accidental deaths; 50% see swimming as a life skill (DKT study); 30M+ amusement-park visitors, +14% a year. SWOT obstacles: pool access, coaching, water; weaknesses: China dependence (54%), seen as cheaper and less technical than Speedo, seen as seasonal. Strategies: 1 Learn (100+ coaches certified and affiliated; community, e.g. Kerala Saji V), 2 Women (1,000 women swimming regularly; Deepali, Laps Academy), 3 Brand perception (merch on technicity: anti-fog, chlorine resistance, UV; local content), 4 Supply/commerce (de-risk China in optics and aqua learning; quick commerce and marketplace). Business plan (as laid out in the A4): turnover ₹300 Cr (2025), 335 (2026), **385 (2027)**, 443 (2028), 496 Cr (2029); TO growth 6 / 12 / 15 / 15 / 12%; market value ₹4,700 / 5,216 / 5,739 / 6,313 / 6,948 Cr; the remaining rows (10% each; 8, 8, 9, 9, 10%) are labelled market growth and market share but the labels look shifted. Women SS27 launches: Jisa Shorty without sleeve, Rossa full body zip, Rossa legging, Una skirt full zip (+ new Una top SS28).
- **The page**: hero (₹26.65 Cr Mar-Jun 2027 goal = Pune 17.65 + Gujarat 9.00; ₹38.52 Cr West water Jan-Oct 2026; go-live 15 Feb and 15 Mar; 125 coaches (Pune 80 + Gujarat 45) and 58 Pune pools). Sticky bar: quarter (Q4 2026 lead-in weeks 39-53, Q1-Q4 2027 as ISO weeks) and state (all, Pune, Gujarat, MP), with water turnover of the same months 2026, AOPs in the quarter, go-live count. Calendar in the planner format, one column per week, 13 lanes (season and moments, go live, team and training, in-store range and merchandising, in-store and mall communication, outstore hoardings and flyers, digital and WhatsApp, influencers, pools/academies/coaches, AOPs per month per state or per store, events and community, quick commerce, goals and reviews), then a band "Turnover share by sport, same month 2026" (top 4 sports + swimming per month). Week panel (everything that week + AOPs by store that month), "What we can do" cards per quarter. Then a heatmap of each sport's share of monthly turnover (Jan-Nov 2026, top 12 + other, per state), store-by-store table (team, AOPs by month, pools/coaches/academies, in-store, outstore budget, Mar-Jun goal), money (Pune and Gujarat line tables, Gujarat merch, Swim Project ₹8 L by activity and place), range and why.
  - Sport share 2026 (West, Jan-Oct, all channels): hiking 19.6%, fitness outfit 16.5%, running 8.7%, swimming 7.2% (these four = 52%), kids' cycling and skates 6.2%, fitness equipment 4.0%, cycling sport bikes 3.8%, trekking and climbing 3.3%, football 3.2%, tennis and squash 3.1%, cricket 2.9%, nutrition and care 2.5%, all other 19.0%. Total ₹465.97 Cr Jan-Oct. Swimming share by month: Jan 3.2, Feb 6.7, Mar 11.5, Apr 11.6, May 10.6, Jun 7.0, Jul 4.8, Aug 5.0, Sep 5.0, Oct 4.5%: third biggest sport in March and April.
  - Water (swimming + surf) 2026 by quarter, West: Q1 ₹10.23 Cr, Q2 ₹18.41 Cr, Q3 ₹7.72 Cr; Oct ₹2.17 Cr.
  - Our timing / proposals on the page (dashed chips, "our proposal"): Pune influencers 15 Mar-13 Jun (plan says 3 months), Gujarat influencers 15 Mar-30 Apr, hoardings 15 Mar-31 May (run length not in the plan), flyers 15 Mar-30 Apr, in-store communication to 30 Jun, Swim Project paid digital and creators Dec-Apr, Women Who Swim on the Women's Day weekend, summer camp learn-to-swim week, The City Needs a Swim hoarding test, all of Q3 and Q4 2027 except holidays, planner sales and AOPs (repeat of the 2026 cycle for SS28). Pune outstore total now shown as ₹47.51 L from the lines (plan says ₹47.31 L); Pune store plan ₹53.15 L with in-store ₹5.34 L and trainings ₹30,000 (supersedes the ₹52.95 L noted above, which used the stated ₹47.31 L).

### 2027 page switched to in-store + online (9 Nov 2026)
- plan2027 now uses `SPORT_TO_2026` (Tableau sport-wise YTD, in = InStore/offline, on = OutStore/online, by state and month Jan to 8 Nov 2026) instead of the online-only Digital YTD figures (which are superseded on the site; still recorded above).
- 7 sports, West, 2026 (in-store + online): **Q1 ₹85.79 Cr** (in-store ₹74.09 Cr, online ₹11.70 Cr; **68.7% of all turnover**) → proposed 2027 goal ₹98.98 Cr (+15%); **Q2 ₹115.04 Cr** (₹102.26 / ₹12.78 Cr; 70.1%) → ₹132.70 Cr; Q1 + Q2 ₹200.83 Cr → ₹231.68 Cr. Same growth proposals as before. Running Q1 ₹11.92 Cr (9.5% of all turnover, online 13%) → ₹14.06 Cr.
- 7 sports' share of all West turnover by month 2026: Jan 68.8, Feb 67.8, Mar 69.3, Apr 69.4, May 71.9, Jun 68.6, Jul 68.9, Aug 68.1, Sep 69.9, Oct 68.8, Nov (to 8th) 70.6%. All sports by month (Cr): 46.43, 34.62, 43.87, 51.14, 60.86 (May, the peak: "Money time"), 52.17, 52.02, 44.99, 38.53, 41.34, 10.87 (to 8 Nov). Mountain share 17.8% (Mar) to 30.5% (Nov); swimming 3.2% (Jan) to 11.6% (Apr).
- New block "What the 7 sports sell, month by month" under the calendar: state switch (West, Pune, Gujarat, MP), channel switch (in-store + online, in-store, online), monthly turnover line with the peak marked, 2027 ad budget line (separate chart), 100% stacked share bars (7 sports + other sports, palette validated), ₹ and % table. Glance table adds share of all turnover and the in-store / online split; cards show turnover by state with the online part lighter, and monthly bars split in-store / online.

### Q1 2027 marketing playbook (plan2027.html #playbook, 9 Nov 2026; our proposal on the user's priorities)
- Money: the 2027 ad budget per state and month (ultimate_data_sheet_1): Jan ₹63.2 L, Feb ₹46.4 L, Mar ₹58.9 L = **₹168.44 L West** (Pune ₹80.39 L, Gujarat ₹59.54 L, MP ₹28.51 L). Every state's month is split by the same %:
  - January: Fitness "New Year, New Moves" 45%, Clearance sale 25%, Every other sport by what it sells 25%, Local moments 5%.
  - February: New arrivals (SS27) 40%, Every other sport 25%, Fitness 20%, Summer water 10%, Local moments 5%.
  - March: Summer water 25%, Women's Day x sport 25%, Running (Kiprun Challenger ₹9,999) 15%, Travel and summer treks 15%, New arrivals 10%, Every other sport 10%.
- West Q1 by campaign (L): fitness 37.7 (Pune 17.5, Gujarat 13.3, MP 6.97), every other sport 33.3, new arrivals 24.4, summer water 19.4, clearance 15.8, Women's Day 14.7, running 8.83, travel 8.83, local 5.48.
- Credited to sports (L, West Q1): fitness 50.9 (30% of the budget vs 21% of Q1 2026 turnover), swimming 35.4 (21% vs 7%), running 30.0 (18% vs 10%), mountain 26.2 (16% vs 23%), cycling 3.84 (2% vs 5%), cricket 0.74, pickleball 0.10; not a sport (clearance + local) 21.3 L. Sport-led ₹1.47 Cr (87%), replacing the earlier proposal (₹1.04 Cr) on the sport cards for Q1. Rules: new arrivals = running 40% / swimming 30% / fitness 30%; Women's Day = fitness 40 / running 30 / swimming 30; "every other sport" = mountain, running, cycling, swimming, cricket (Gujarat), pickleball (Pune, Gujarat) in proportion to their 2026 turnover that month and state.
- By channel (L, West Q1, our per-campaign mixes): digital paid 50.0 (30%), hoardings/OOH/AOP 42.5 (25%), in-store 30.9 (18%), influencers 15.2 (9%), store events 13.7 (8%), in-mall 9.04 (5%), free products 4.44 (3%), flyers 2.60 (2%). The sheet's fixed split is 30/30/20/5/5/5/3/2.
- Each campaign tab: when, ₹ per month, sports credited, ₹ by state, what goes on the hoardings, influencers, social content, how we boost, channel split, and Decathlon films to borrow from. Clearance visual = the "Decathlon Winter Off, 01.01 (Fri) - 01.23 (Sat), up to 50%" creative already in assets/img (dates fit 2027).
- AOPs store by store (AOP_PLAN): Q1 Pune 68 (cost ₹16.89 L), Gujarat 55 (₹11.89 L), MP 29 (₹4.76 L); Q2 50 / 46 / 23; live now Pune 101 (Wakad 58, Amanora 22, Wagholi 15, SGS 6), Gujarat 6 (Baroda), MP 7 (Bhopal). Mix per store from the 2027 slide. Pune named places: Amanora 22, SGS 6, Wakad 31, NIBM 34, Wagholi 18 (aopnames.js).
- Season by state (SEASON27): typical highs/lows (our rounded long-term averages; Pune Jan 11-30°C ... May 22-36°C; Ahmedabad Jan 12-28 ... May 26-42°C; Bhopal/Indore Jan 10-25 ... May 25-41°C), sky, what kids do (term, boards: HSC and CBSE from mid-Feb, SSC/GSEB/MP board Feb-Mar, holidays late April to mid-June, Uttarayan 14-15 Jan) and what it means for us. Our summary from general knowledge: to check each year.
- Films (official, checked via YouTube oEmbed author 9 Nov 2026): India Women's Day 2025 "Play Your Own Way" gvnwqy0IYwg, India New swimsuit collection 9LeVIZul0ZQ, India Swimming goggles EksBqkLXbtk, India Made in India hFUFMlG0B9s, India Anthem ZQb8FvC8jfc; Korea SS26 Running NjveKnMMzD4, SS26 Hiking DtWHQZWxk4c, brand story Y3OH-j05aqk; Taiwan "Ready to play?" OqE_Z5L3RSY; Malaysia 10 years f6R_l1DcpUM, "We make sports accessible to the many" 0EM3JYLbNZE, Made in Malaysia ep 1 GuEpIysAs4M; UK Spring into Action YrVz4sayHQg. Decathlon China: no official YouTube campaigns found (it posts on Chinese platforms). Thumbnails from i.ytimg.com; the film loads only on click (youtube-nocookie).

### Pune plan, Nov 2026 to Mar 2027 (data_recent_marketing_spends_pune_plan__.xlsx, BFS PUNE)
- **November ₹28,00,000**: hoardings ₹9,35,000 (7 live, Winter & Travel); in-mall ₹1,70,000 (NIBM 45,000, Amanora 45,000, SGS 75,000 = 1,65,000); in-store ₹5,50,000 (Amanora 83,000, SGS 1,44,283, Wakad 1,50,000, NIBM 50,000, Wagholi 1,50,000 = 5,77,283; whole city live 23 Nov); AOPs + free products & IC ₹6,25,000 (22 AOPs: Wakad 5 x 40,000, Wagholi 5, SGS 4, NIBM 4, Amanora 4 x 25,000); influencers ₹4,00,000 (Black Friday, 40, 21-28 Nov); social boost ₹30,000 (5 posts) + countdown 4 posts + 4 stories 23-28 Nov (₹40,000 in the BF table, not in total); coupon cards ₹70,000 (35,000 cards, basket over ₹2,799 gets a product free, from 17 Nov); Kiprun event ₹20,000. Total in-store ₹22,80,000, marketing ₹5,20,000.
- **December ₹30,15,000**: hoardings ₹9,35,000; in-mall ₹1,65,000; in-store ₹5,50,000 (Christmas, city live 19 Dec); AOPs ₹7,65,000 (27: Wakad 6 x 40,000, Wagholi 6, SGS 5, NIBM 5, Amanora 5 x 25,000); influencers ₹4,50,000 (Christmas 35 = ₹3,50,000, 19-23 Dec; Winter & Travel 10 = ₹1,00,000; + 7 barter ₹50,000 and recycle boosts ₹10,000 not in total); boost ₹30,000 (10 posts; Christmas table lists ₹35,000, 19-23 Dec); Kiprun ₹20,000; media vendor ₹1,00,000. In-store ₹24,15,000, marketing ₹6,00,000.
- **January 2027 ₹30,54,000** (Movement for All): partner events yoga ₹75,000 (500 walk-ins), run ₹75,000 (400), gym/fitness/Zumba ₹1,50,000 (500); hoardings ₹5,25,000 (5); AOPs ₹7,65,000 (27); influencers clearance sale ₹5,00,000 (50, TBD) and New Year New Moves ₹1,49,000 (17, 2-17 Jan); media vendor ₹1,00,000 (17 reels on Let's Play Pune); in-store ₹5,50,000; in-mall ₹1,65,000.
- **February ₹19,89,000**: hoardings ₹4,25,000 (4); AOPs ₹7,65,000; influencers new arrivals ₹1,49,000 (15, 24 Feb - 6 Mar); media vendor ₹1,00,000 (20 reels); in-store ₹5,50,000; in-mall blank.
- **March ₹29,39,000**: Women's Day weekend event ₹1,50,000 (800 walk-ins); hoardings ₹7,25,000 (7); AOPs ₹7,65,000; influencers summer + summer camp ₹5,00,000 (50, March-May); "New Year New Moves" ₹1,49,000 (17, 2-17 Jan) repeated in the March table; media vendor ₹1,00,000 (17 reels); in-store ₹5,50,000.
- AOP money per store per month Dec-Apr: Wakad 2,40,000, Wagholi 1,50,000, SGS / NIBM / Amanora 1,25,000 each (Nov: 2,00,000 / 1,25,000 / 1,00,000 x 3).
- Q1 Pune total ₹79.82 L (ultimate sheet Pune Q1 ₹80.39 L); Q1 by channel: AOPs 22.95 L (29%), hoardings 16.75 (21%), in-store 16.5 (21%), influencers 14.47 (18%), events 4.5 (6%), media vendor 3.0 (4%), in-mall 1.65 (2%). No paid digital line (MarCom). The Q1 playbook's channels were switched to these lines.
- Recommendations in the sheet: playground stores Wagholi, Amanora, Wakad do AOPs with coaching classes using our facility; boost 3 playground videos ("Are you a coach looking for a facility and students..."); **at least 10 swimming academies in each catchment by 20 Feb 2027**.
- **2026 influencer tracker (Pune)**: Movement Is For All 1-31 Jan, 17 pieces, live 2-17 Jan, 14,01,400 views, ₹1,49,000, CPV 0.11; Clearance Jan 10 Jan-15 Feb, 50, 39,05,989, ₹5,00,000, 0.13; New Arrivals 24 Feb-6 Mar, 15, 2,54,400, ₹1,60,000, 0.63; Summer 6-15 Mar, 35, 10,65,288, ₹3,50,000, 0.33; April Summer 40, 3,70,000 views, ₹4,50,000; Gudi Padwa 16-22 Mar, 6, 11,72,371, ₹60,000, 0.05; April Misc 1, 6,56,447, ₹20,000, 0.03; May Summer 40, 8,49,835, ₹4,50,000, 0.53; Monsoon 15-30 May 15, ₹1,50,000; June misc 40, ₹4,00,000; 50th Anniversary 24-26 Jul 2026, 18, 9,14,409, ₹2,20,040, 0.24; Festive offer 13-20 Oct 2026, 15, 9,75,400, ₹1,50,000, 0.15; Diwali 9, ₹90,000; Black Friday 27-30 Nov 50, ₹5,00,000; Winter Dec 20, ₹2,24,000; Christmas 15, ₹2,10,040; Express delivery + digital 60, ₹6,00,000; Playground 30, ₹3,00,000. Our sums: 476 pieces, ₹49.8 L; 115.7 lakh views on the campaigns with results (₹0.22 a view). Planned Nov 2026 to May 2027 (Pune plan): 217 influencers, ₹21.5 L.
- **Influencers 2027 (superseding the "2026 tracker" reading, user 10 Nov)**: the same sheet is the 2027 plan: 18 campaigns, **476 influencers, ₹49,83,080**. By quarter (our grouping by start month): Q1 5 campaigns, 123 influencers, ₹12.19 L (Movement 17 / ₹1.49 L, Clearance 50 / ₹5 L, New Arrivals 15 / ₹1.60 L, Summer 6-15 Mar 35 / ₹3.5 L, Gudi Padwa 6 / ₹60,000); Q2 5 campaigns, 136, ₹14.70 L (April summer 40 / ₹4.5 L, April misc 1 / ₹20,000, May summer 40 / ₹4.5 L, Monsoon 15 / ₹1.5 L, June misc 40 / ₹4 L); Q3 1 (50th Anniversary 18 / ₹2,20,040); Q4 3 (Festive 15 / ₹1.5 L, Black Friday 50 / ₹5 L, Winter Dec 20 / ₹2.24 L) = 85, ₹8.74 L; no date: Diwali 9 / ₹90,000, Christmas 15 / ₹2,10,040, Express Delivery + Digital 60 / ₹6 L, Playground 30 / ₹3 L = 114, ₹12.00 L. "Influencers" = the Content Link count. Shown on plan2027.html #influencers (Pune and West only).
- **Hoardings, 10 Nov**: Pune 7 boards ₹9.35 L a month (₹1.34 L a board), latest photo still the Dussehra "Your Festive Upgrade" ST100 creative (Wagholi, 10 Oct): not updated yet. Baroda 4 boards ₹1.65 L a month (₹41,250 a board, 20 x 20 ft / 25 x 15 ft), live with Kiprun Kipride. HOARDINGS data: Baroda status set to live, live photos for 3, GPS pins for Subhanpura and Fatehgunj.
- **Nov + Dec by campaign (Pune spend plan, every line once)**: Black Friday ₹12,20,000 (21% of Pune's ₹58,15,000 Nov + Dec): in-mall 1.70 L, in-store 5.50 L, influencers 4 L, boost 30,000, coupon cards 70,000; Winter, Trek & Travel ₹20,70,000 (36%): hoardings 9.35 L x 2, influencers 1 L, media vendor 1 L; Christmas ₹10,95,000 (19%): in-mall 1.65 L, in-store 5.50 L, influencers 3.50 L, boost 30,000; always on ₹14,30,000 (25%): AOPs 6.25 L + 7.65 L, Kiprun events 20,000 x 2. Diwali is not in the Pune plan (Gujarat influencers ₹1.3 L). West sale goals (SD sheet): Black Friday ₹12.34 Cr (+16% on 2025, 8.0% of the ₹154.75 Cr Q4 store challenge), Christmas ₹17.49 Cr (+2%, 11.3%). Mountain sold ₹10.59 Cr in Oct 2026 (25.6% of West turnover) and 30.5% in 1-8 Nov (Tableau), used as Winter & Travel's contribution.
- **Holidays Q1 2027** (web-checked 10 Nov): Lohri 13 Jan, Uttarayan 14 Jan, Republic Day 26 Jan, Valentine's 14 Feb, Shivaji Jayanti 19 Feb, Maha Shivaratri Sat 6 Mar, Women's Day 8 Mar, Eid al-Fitr 9 or 10 Mar (moon), Holi Mon 22 Mar (central list says 23), Good Friday 26 Mar; Gudi Padwa 7 Apr per most lists (planner says 8 Apr).
- **Pune city events Nov-Dec 2026** (public listings): Pune International Marathon Sun 6 Dec (Sanas Ground, 40th edition); SRT Ultra 53 km trail Sat 12 Dec; Bajaj Pune Marathon Sun 13 Dec (to confirm); Yashada Pimpri Chinchwad Half Marathon Sun 20 Dec.
- **Water 2025 deck** ("Strategies & actions to win water sports 2025"): water does 60% of TO in 20 weeks (W09-W30; 60% between W12 and W24); less than 1% of Indians can swim unassisted vs 80% US/EU; 10 families = 78% TO, 15 = 87%; towels 18% (margin 28.5%), goggles 13% (30%), covering swimwear 12%, headwear 9% (34%), women swimsuit 14% (22%); towels 15% of quick-commerce TO; goggles, caps, floats best sellers on QC; marketplace 10% of TO; POTM April swim/surf shorts ₹499, May boardshorts ₹799; mass plans validated in December; local Indian photo shoots for hero products.
- Marketing pyramid (our words on the user's vision): 1 basics (store = heart of sport + in-store community, AOPs, one flagship event a month, right team, in-store comms campaigns, festive moments), 2 be seen (hoardings, social, influencers), 3 make noise (one KILL strategy a quarter; suggested: Nov-Dec Black Friday morning city run to the store doors, Q1 Movement for All 31 days, summer The City Needs a Swim pool takeover).

### Content calendar
- 97 posts, 26 Oct 2026 – 31 Mar 2027; 17 creator videos; 6 hero films; pillars Emotional 20% target, Fun 20%, Learn 15%, Community 25%, Product 20% (plan delivers 23 / 19 / 11 / 32 / 15). Formats: 67 reels, 15 carousels, 7 statics, 7 story series, 1 live.

---

## 5. Discrepancies and open questions (flag to the user, don't silently fix)

- Deck channel growth: wholesale +691% stated vs +297% from its own numbers; in-store +17% vs +19%; total 24.15% vs 23.6% (144 → 178).
- Slide 6 weekdays wrong: 31 Oct 2026 is Saturday (not Fri); 30 Nov is Monday; 18 and 25 Dec are Fridays. Christmas sale 19–31 Dec (calendar) vs EOY 18–25 Dec (deck).
- Surat opening date: workbook 18 Dec; posters 20 Dec; expansion retroplan 27 Dec; new-store slide says Q1/April 2027. Site uses the 18–20 Dec weekend. **(Superseded 2026-10-27: the site uses Sunday 27 Dec 2026 everywhere, confirmed by the team; re-checked in the full site read of 2026-11-10.)**
- Surat budget ₹24.9 L planned vs ₹18 L; gift cost 2.01 L vs 1.71 L on two tabs; 5 tills planned vs up to 11 needed.
- Hoardings 16 (timeline) vs 15 (update slide, no Rajkot).
- 2027 ad spend in the first data sheet (rows 132–134) was wrong; replaced by ultimate_data_sheet_1.xlsx on 26 Oct 2026 (user flagged it).
- (Resolved 26 Oct by India City Ranking 2025.) Shares differ by source: Ahmedabad 2.65% (ranking, 2025) vs 3.33% (Ahmedabad master, 2023); Surat 1.10% (ranking) vs 2.2% (Surat workbook) vs 4.2% (proximity deck). Site uses the ranking file. Pune persona sheet gives Daily Athlete age 16 to 35; site keeps the user's 16-34. Earlier note: sports-market size per city was only in our files for Ahmedabad and Surat; ask the user for the proximity-deck figures for Pune, Vadodara, Rajkot, Indore, Bhopal and Gwalior. Ahmedabad share 3.33% (2023), 3.71% (2027), 3.57% (2028) per city snapshot (note there: deck ID card shows 10% for 2023). Content calendar still credits a Pune reel (27 Dec) to creator "Adi".
- Store Q4 budgets add to 129.71 L but the state line plans add to 169.4 L (line items) / 160.4 L (stated totals). The gap is assumed to be state-level spend (e.g. digital paid to MarCom); confirm with the user.
- Missing attachments (26 Oct): the Excel files arrived later the same day (Pune_persona.xlsx, India City Ranking); still missing: a video for the October section. Ask the user to resend. Kiprun launch videos (5) still to come.
- Influencer shoot views (15 Pune reels) not available from embeds; need numbers from the user's Instagram Insights.
- External event dates for Pune International Marathon, Bajaj Pune Marathon, Khelo MP Youth Games and Indore Marathon 2026–27 are not confirmed; Indore 2026 date conflicts (1 vs 15 Feb).
- Deck p9 hoarding photos are partly not from this cluster: the "Bhopal" photo shows UP32 number plates, Drishti IAS and a Lucknow blood bank sign, and the board reads "Visit Decathlon Vibhuti Khand & Lulu Mall" (Lucknow stores); the "Ahmedabad + Baroda" night board appears to be the same Lucknow creative. The Surat photo is the booked site still carrying another brand's ad. The "2026 update" text (PIN codes 2260xx, Hazratganj) is Lucknow's. Site captions describe the creative and site without claiming the photo location; ask the user for real Bhopal / Ahmedabad / Baroda photos.
- AOP "20 total" vs per-store numbers adding to 90.
- Regional slide "~86M people" vs 166.6M sum. Nexus persona targets sum to 112%.
- Gujarat and MP line items add to more than their stated monthly totals (Oct Gujarat 21.97 vs 19.95 L; MP 7.93 vs 6.80 L). Pune campaign split table doesn't match its own totals.
- Old Marcom per-store budgets were a formula error (removed). Deck "Digital acceleration to 2030" (4.7 Cr e-com) doesn't match this cluster (removed). Tamil Nadu / Lucknow / Delhi NCR slides are leftovers.
- General-knowledge facts on the site to verify: 1976 Lille / 2009 India (history block since removed), Rajgad, Surat diamonds share, Gwalior UNESCO City of Music, Indore cleanest city, Sanchi UNESCO.
- Brand safety: team photos show PUMA kit (run club), Agassi paddle, "Bloom/Glow" jerseys; Tansen image is an Amar Chitra Katha cover. Fine internally, swap before public Decathlon use.
- The site URL is public even though the repo is private; Vercel password protection needs a paid plan.

- Campaign-wise cluster summary (28 Oct): the campaigns listed add up to ₹120.10 L (Gujarat 55.11 + MP 26.99 + Pune 38.00 shown in its screenshot), while the cluster card shows the Q4 marketing budget ₹1.3 Cr (store budgets ₹129.71 L), per the user. Gap ₹9.61 L; Pune's own plan is ₹54.25 L (₹16.25 L of its campaigns not in the screenshot). Open: confirm whether the 1.3 Cr should be the campaign total.
- Surat walk-ins (28 Oct): the site now uses one first-month target, **49,600** (user). Superseded on the page: 40,565 ("needed in 30 days") and 48,776 (sum of the 28 strategy rows; the All-strategies total row now shows 49,600, so the rows add up to 824 less than the total shown). SOURCES add up to 49,604. Cost per walk-in at 49,600: ₹24,69,635 / 49,600 = ₹49.8, so ₹50 holds.
- Q4 marketing budget ₹1.6 Cr (user, 28 Oct). On the page: store budgets ₹129.71 L, line plans ₹202.5 L; store budgets + Pune digital (8.80 + 11.988 + 12.356 = ₹33.14 L) = ₹162.85 L, which probably explains the 1.6 Cr. Confirm. Campaigns listed add up to ₹120.10 L.
- Q4 AOP target 114 (AOP_PLAN Nov + Dec) excludes Surat Adajan's 10 opening AOPs; the AOP live-now count is also 114 (6 stores), a coincidence. Confirm whether Adajan's 10 should be added to the Q4 total.
- Ahmedabad hoardings: is ₹3.5 L a month for both boards or each? Site uses ₹3.5 L for the two. Sites, sizes and go-live date to come. In-mall deck: Indore has no cost or photo; in-mall monthly cost ₹6.92 L (₹20.76 L for 3 months) vs the tab's "11 L in-mall media, Q4" stat, not reconciled.
- Digital YTD sheet: October cut-off date not stated (month to date). "HIRING" appears as a sport (₹1.19 Cr YTD), meaning unclear. ₹398 Cr total turnover is the user's figure; not cross-checked against store turnover data.
- Pickleball October: the film's opening caption says "758+ participants"; the user's figure is 754 (site uses 754). Average purchase frequency for digital: needs an orders or unique-customer column.
- Store TO (₹397.54 Cr) + digital (₹44.93 Cr) = ₹442.5 Cr, above the ₹410 Cr overall (which also includes B2B and marketplace): store turnover likely already includes digital orders booked through stores (₹10.62 Cr) or definitions differ. Ask the team which; it decides the true online share per BU.
- Adajan artifact notes: it lists the opening as 18 Dec in one place and 27 Dec in the retroplan (site uses 27 Dec, confirmed by the team); the two brand guides disagree on DOOH/LED boards and flex (brand team to decide); the live Surat hoarding in our programme is Pal Umra Bridge, which is not one of the artifact's six candidates.
- Krishna 360 proposal: most pins are approximate (confirm exact spot and facing with the vendor); the suggested 3 boards exceed the Adajan plan's hoardings line (₹1,92,150); sites 5 and 21 may be the same stretch as the booked Pal Umra board.
- Surat Nike/adidas/Puma stores outside L.P. Savani Rd: no source found (OSM and Nominatim empty); need the brands' store lists or the team's knowledge. City-wide sports/school/housing data outside Adajan is thin (OSM).
- City crowd hotspots rest on OpenStreetMap, which under-maps Surat (≈1,800 places for a city of ~80 lakh): ranks show where mapped activity clusters, not footfall; hotspot 3 (ONGC colony) is driven partly by OSM housing entries. Footfall data (e.g. telecom or Google Popular Times) would confirm.
- Vendor pins: most Shah and Krishna sites are placed from the named road (only Arzees Circle and 4 Krishna sites have GPS); Vesu VIP Road positions (Jivraj Circle, Luthra Circle, Avadh, GD Goenka) are approximate along VIP Road from VNSGU. Confirm exact spots and facing before booking.
- November update: is ₹7.4 L the Gujarat Black Friday influencer spend or the total? (site shows it as Gujarat; total with Pune ₹11.4 L). Baroda influencer number missing. MP Black Friday budget missing. "30k from Ashes" read as SGS Mall. Rajkot Let's Play handle unknown. Bhopal influencers' payment terms not given.
- City-page reels for the November page: need the latest 4-6 reel links per page (Ahmedabad, Surat, Baroda, Pune, Indore, Bhopal, Gwalior; Rajkot handle unknown). Influencer videos and in-store comms photos still to come from the user.
- No Diwali sale (user, 5 Nov) vs the main site's Q4 data, which still lists a Diwali sale 31 Oct - 1 Nov (₹5.5 Cr target) in the Q4 months and runway: ask whether to remove it there too. Shares and saves for reels need the page admins' Insights.
- Download feature (PDF is one continuous page since the user's black-lines report): the user asked for "PDF and GIF pdf"; built as a PDF plus an animated GIF scroll-through. Confirm that is what they meant. Vercel has not built the last pushes (38efc6d onwards): the project's GitHub link may need reconnecting in the Vercel dashboard.
- 2027 sport plan (9 Nov): growth goals, sport budget shares and the AOP split by sport are our proposals; the user should confirm or send the real splits. Turnover by sport is online only (store sales by sport needed). Q2 goals (turnover, bills, conversion) missing. Is pickleball Gujarat-only like cricket, or also Pune (site: Gujarat and Pune, since Pune's March sport of the month is pickleball)? Indore Marathon 2027 date to confirm.
- Swimming uploads (9 Nov): (a) Pune water plan outstore: Wakad's lines add to ₹10,90,000 (4,20,000 + 2,50,000 + 20,000 + 3,00,000 + 1,00,000) but the plan says ₹10,70,000 (outstore total ₹47,31,000 uses 10,70,000; with 10,90,000 it is ₹47,51,000). (b) Staff: FTs by store add to 17 (3 + 4 + 3 + 4 + 2 + 1), the plan says 18; PT 23 and interns 20 add up. NIBM's line is blank in the human-structure table. (c) The March-June 2027 goal ₹17.65 Cr at +25% implies a 2026 base of ₹14.12 Cr; Tableau Pune March-June 2026 is ₹10.78 Cr swimming, ₹12.49 Cr swimming + surf, ₹13.09 Cr all water sports: which scope does the plan use? (d) How do the regional ₹8 L Great Indian Swim Project and the Pune store plan (₹52.95 L of in-store, outstore and training) relate: separate budgets, or is the ₹2.70 L Pune share inside the ₹52.95 L? Both also differ from the 2027 ad budget sheet. (e) Tableau OutStore by sport is not the same as the Digital YTD online figures used on plan2027 (e.g. swimming Q1 online ₹40.4 L in Digital YTD); reconcile before switching the site's turnover from online to all channels. (f) The Great Indian Swim Project's ₹15 L attributed sales vs Pune's ₹17.65 Cr Mar-Jun goal: very different scales (attributed beginner sales vs total sport). (g) Partnership sheet: "Coaches data" sheet is empty, so the coach affiliation list (20 / 10 / 10 / 20 / 10 / 10 coaches per store) is not yet available.
- 10 Nov batch: (a) Pune in-mall Nov says ₹1,70,000 but the store split adds to ₹1,65,000; in-store store split adds to ₹5,77,283 vs ₹5,50,000. (b) BF countdown ₹40,000, Winter barter ₹50,000 and recycle boost ₹10,000, Christmas boost ₹35,000 are listed but not in the month totals. (c) March table repeats "New Year New Moves" ₹1,49,000 (17, 2-17 Jan): copy error? (d) Spend file AOPs Jan-Mar 27 a month (81) vs AOP_PLAN Pune Q1 68. (e) 2026 tracker vs 2026 plan differ for BF (50 / ₹5 L vs 40 / ₹4 L) and Christmas (15 vs 35). (f) User wrote Black Friday "27th-30th December": treated as November. (g) Bajaj Pune Marathon 13 Dec to confirm.
- 10 Nov, second batch: (a) The influencer sheet the user calls 2027 still carries 2026 dates for the 50th Anniversary (24-26 Jul 2026) and Festive offer (13-20 Oct 2026), and its views look like 2026 results; 2027 is the 51st anniversary and Black Friday is 26-29 Nov in the planner (sheet says 27-30 Nov). (b) Sheet vs Pune spend plan for Q1: new arrivals ₹1.60 L vs ₹1.49 L; summer 35 (6-15 Mar, ₹3.5 L) + April 40 + May 40 vs 50 for ₹5 L March to May; Gudi Padwa (6, ₹60,000) only in the sheet. (c) Diwali, Christmas, Express Delivery + Digital and Playground have no dates in the sheet. (d) Pune hoardings: is the Winter & Travel creative up yet? The latest photo (10 Oct) shows the festive creative. (e) Baroda Gotri board: no live photo yet. (f) Region filter on plan2027 hides calendar and strategy lines that name only other states' places (our keyword list); lines naming several states stay.
- Q1 playbook (9 Nov): (a) we read "second one is quarter one till Feb, a few percent depending on the revenue of what is worth" as: the other sports get money in Jan and Feb in proportion to what they sell (25% of each month, 10% in March); confirm. (b) Clearance sale dates for India (the Winter Off creative says 1 to 23 Jan). (c) Swimming gets 21% of the Q1 budget vs 7% of Q1 sales (pre-season by design); is that right? (d) The Q2 playbook needs the user's Q2 priorities. (e) Influencer counts and boost radii are our suggestions.
- In-store + online switch (9 Nov): Tableau "OutStore" (online) is larger than the Digital YTD figures (7 sports Q1 2026: OutStore ₹11.70 Cr vs Digital YTD ₹8.84 Cr), because OutStore also holds B2B, marketplaces and quick commerce. The red line in the user's MARCOM sample (10-11.5 lakh a month, Apr-Aug) is unlabelled: what is it?
- Water page (9 Nov, second batch): (a) Pune training dates differ: Pune plan 19 Jan, 16 Feb, 23 Mar 2027; Gujarat plan lists Pune 19-20 Jan, 10-11 Feb, 2-3 Mar (site uses the Gujarat plan's). (b) Gujarat business plan stated totals are a few rupees off the store sums (2026: stores add to 7,50,02,630 vs 7,50,02,643; 2027: 9,00,03,155 vs 9,00,03,171). (c) Gujarat entrance display: lines add to ₹49,812, summary table says ₹49,821; the ₹1,61,750 total uses 49,812. Is the merch budget for Motera and Dumas together or each? (d) Gujarat hoarding has no budget. (e) Adajan (Surat, opens 18 Dec) and Gwalior are in no water plan; MP has no store water plan, budget or goal (only the Swim Project and training dates). (f) Timings we set (influencer months, hoarding run length, flyer and in-store end dates) need confirming. (g) India A4 business plan rows: label alignment unclear (see section 4).
- Budget assumptions to confirm: ₹32,000 = Gwalior's Black Friday influencer budget; in-store comms ₹50,000 per store per month (not ₹50,000 in total); Gujarat's ₹1.3 L Diwali influencers counted in November. Surat, Indore and Bhopal have no Q4 piloting figure in the SD sheet. Christmas goals below 2025 for Wakad (-17%), Indore (-5%), Gwalior (-26%).
- Full site read (2026-11-10), cross-page points to confirm: (a) the main page says "18 hoardings: 7 live in Pune" (hero marquee) and "Pune: 7 hoardings live" (Q4 runway), while the November page's hoarding update says Pune is "Not updated yet" (latest photo Wagholi, 10 Oct, still the festive cycle creative): the boards are booked and paid (₹9.35 L a month) but the Winter & Travel creative is not confirmed up. (b) The main page's Q4 data and content calendar still carry the Diwali sale (31 Oct - 1 Nov, ₹5.5 Cr target, teaser and "Diwali sale is live" posts) while the November page says "No Diwali sale in the stores this year" (already open above). (c) Hero "80+ local influencers" vs the runway's Pune 70 influencers plus Gujarat / MP creators: fine as a cluster total, but the source of "80+" is not in section 4.

- Two Vercel projects build this repo (2026-11-10): abhishekmitraaas-projects/decathlon-west-plan and anandita-work/decathlon-west-plan. Confirm which one serves the live site and whether the second should stay connected.

---

## 6. Change log (newest last)

- 2026-10-25: Built site from deck + Marcom calendar; Vercel + private GitHub repo; data audit; store-by-store from ultimate sheet; Blue Voice restyle; why West, personas, field; state stories with films and sound; Surat opening plan; chapter structure; AOP video; Kantar; content calendar with Piyush Pandey rules, hero films, photos, reels folded in; Gujarat "land of Garba" heading; context.md + CLAUDE.md + Stop hook created.
- 2026-10-25: Reels heading → "Reels to take inspiration from", note label "Steal it for" → "Where we'll use it". Playbook renamed "Marketing playbook" (nav + heading) and given an "On the road" hoarding wall: Pune, Surat, Bhopal, Ahmedabad + Baroda (deck p9) and the practice-place kit wall, with counts and a footnote on 15 vs 16 boards. New images `hoarding-surat.jpg`, `hoarding-bhopal.jpg`. Assets ?v=20261025l.
- 2026-10-26: New data sheet `ultimate_data_sheet_1.xlsx`: 2027 ad spend corrected in data.js (+ `split27`), spend chart moved to Q1 2027 chapter with a 2027 line-split bar. Scoreboard rebuilt Q4-only: store table (challenge + budget, grouped by state, rows open the store plan) and line summary (L + % of budget); removed channel chart, weekends, funnel/city lines, outstore chart, Pune store share, ranking. Persona photos replaced (incl. new golf and family football photos). "Big events pulling people out" now lists 9 external events (web-checked). People-per-store map replaced with `west-stores-map.png`. Local preview now on port 8777 (8765 is used by another app). Assets ?v=20261026a.
- 2026-10-26: Why the West: goldmine tiles replaced by one tile per store city (Q4 turnover growth: Pune +15.8% 65.24→75.53, Ahmedabad +15.5% 23.98→27.69, Vadodara +16.7%, Surat +18.9%, Rajkot +12.2%, Indore +22.1%, Bhopal +84.2%, Gwalior +15.7%; sports market + share for Ahmedabad and Surat) + a how-to-read note; removed What Pune plays and Sports markets cards. Runway: removed Ramat Chalu Rahe and Local activations; External sports events lane now has 9 events (Khel Mahakumbh, HYROX, Adani Ahmedabad Marathon, Pune International Marathon ~6 Dec, Bajaj Pune Marathon ~13 Dec, Khelo MP Youth Games Jan, Bajaj Pune Grand Tour 26–31 Jan, Vadodara Marathon 31 Jan, Indore Marathon ~7 Feb); influencers Pune 70; today marker uses the real date. Scoreboard: What people play in Q4 removed. Assets ?v=20261026d.
- 2026-10-26: Applied Changes_presentation.docx: site-wide "–"/"—"/"~" → "-"; Gujarat heading grammar; Pickleball card removed; persona photo crops fixed (padel anchored to top); Daily Athlete age 16-34 (Pune) and Progressive Sports Enthusiast 16-34 (Ahmedabad); Pune persona range chart; Surat tile adds share 2.2%; scoreboard store table removed (line summary kept, now drawn without it); Pune Digital (MarCom) added and totals rechecked; runway Adajan opening 1 Dec-1 Jan, lane "Hoardings, influencers and AOPs" with Gujarat AOP 5 (Nov), 7 (Dec), 5 gyms + 5 pools (Jan); new #october section (nav "October") with 2 Instagram embeds (instagram.com/embed.js, no SRI since Instagram changes that file), Kiprun 5 video slots, Pune hoarding photo. Assets ?v=20261026g.
- 2026-10-26: Why the West: city tiles replaced by a penetration chart (our 2025 turnover vs each store city's sports market 2025 and 2030, share %), from India City Ranking 2025. Pune personas rebuilt from Pune_persona.xlsx (sheet order, corrected shares, year-one turnover, basket, visits, conversion, plays, pincodes, decision driver, online, pain point, store expectation, community, growth opportunity). Assets ?v=20261026i.
- 2026-10-26: Goldmine re-laid out as two columns (headline + one-line-per-city penetration chart, ~440px tall). Scoreboard topline panel added (#sbTop, app.js). Store by store (#stores) and The field (#field) sections and nav links removed; stores.js draws the line summary before its #storeDetail guard; people.js guards #brandGrid/#extEvents. Pune personas: year-one turnover line and target text removed; share chart is now filled bars (lo solid, lo-hi pale). Persona intro, cards and content-calendar briefs tightened (brief photo column 120px). Assets ?v=20261026j.
- 2026-10-26: October section: the Ahmedabad reel card (Dej2y30sNG8) replaced by "Our social media", a sideways strip of 5 Instagram embeds the user sent: p/DejcABnxu21 (letsplay_ahmedabad, ST100 festive upgrade ₹11,999 from ₹18,999), reel/DehJUqQtsej (letsplaysurat, Dussehra festive deal), reel/DeHTVs1MlIq (letsplay_ahmedabad, "Don't just pick any shoes"), reel/Dd8J7lzNngs, p/DewQ1znDYeS (tracking parameters stripped). Assets ?v=20261026k.
- 2026-10-26: "Push to repo" request: no new changes; everything was already pushed (68d2cec) and live.
- 2026-10-26: Layout tightened site-wide: --wrap 1240 → 1440px, gutter clamp(16px, 2.6vw, 36px), section padding clamp(48px, 6vw, 84px), section-head margin and display size reduced, chapter bands thinner. "October so far" renamed "October recap" (nav "October recap", social card label "On our pages"). Instagram embeds in the recap are cropped 152px from the bottom (app.js ResizeObserver) so likes and comments don't show. Why the West pulse cards (who plays, big events) now sit side by side. Assets ?v=20261026m.
- 2026-10-26: October recap Kiprun card: the 5 empty video frames replaced by a sideways strip of 5 Instagram embeds the user sent: reel/DerNs9uMOzh (letsplay_ahmedabad, "Kiprun Launch 5k"), reel/DeogOh8ueLw (letsplaypune), reel/DepMy7ONzQT (creators priyan_siuuuu_ and tri.ash, Kiprun stall outside a store), p/De6Typ5jJG9 (letsplaygwalior), reel/De8jWqqoXHh. Likes cropped like the social strip. Assets ?v=20261026n.
- 2026-10-26: Gaps fixed: every section header is now title with the intro directly below (single column, no wide gap to a right-hand intro). Why the West re-laid out: share chart, then map | People per store + Who plays sport (white card), then Big events full width in 3 columns. October recap strip cards (social media, Kiprun) have one-line headers (chip, title and text side by side). Assets ?v=20261026p.
- 2026-10-26: October recap "Hoardings up in Pune" card now has a live map (Leaflet 1.9.4 from cdnjs with SRI, OpenStreetMap tiles) with the 5 Pune store pins (approximate coordinates from data.js) and the Wagholi hoarding (18.571295, 73.954203, from the photo's GPS stamp; popup with photo), plus the Wagholi photo and 3 "photo and location to come" slots. `assets/pune-hoardings.kml` (stores + hoardings) is linked for import into Google My Maps; a Google My Map can't be created from here (needs the user's Google account). Open: locations and photos of the other 3 Pune hoardings (deck says 4 in Q4+Q1; timeline says 5). Assets ?v=20261026r.
- 2026-10-26: October recap influencer card: 15 Pune creator reels/posts as a sideways strip (likes cropped) with stats: 15 creators, 15 reels, 4.28 lakh combined followers (sum of follower counts shown on each public embed page on 26 Oct), biggest @fit.vaibhav_06 115K. All 15 push the Rockrider ST100 festive offer ₹11,999 vs ₹18,999. Reels: reel/DebG9L9OsVr @the.vogue.mayur 18K; reel/DebNi-qO9Gj @saurabh__itankar 13K; reel/DedpMdqodKv @fit.vaibhav_06 115K; reel/Dee6mA6tV09 @maansakadam 15K; reel/DebKjABBfhT @pavan.nayak1 53K; reel/Deb-eVJNxCV @rahul_champawat 23K; reel/DeiwuE7zTkD @goldenshadesoflife 54K; reel/DebNX_Lxffr @nandithachauhan 33K; reel/DebOshCNj2q @tejaswinivalkunde 23K; reel/Deb7wcytcMK @chaitalisonawane_ 9K; p/DebTJH2suat @abhiis.co 19K; reel/DedzO4doiQR @manishchandrajwar 28K; reel/Deb6x1lIhiU @life.of.ishikaa_ 15K; reel/Degfrr-NKBh @hotwanii 3K; reel/DeeSgvrI42D @shreyasonawane_ 7K. Views are not shown by Instagram embeds; ask the user for views from Insights. Assets ?v=20261026s.
- 2026-10-26: **Winter hoarding programme** (`2026_WINTER_HOARDING_PGM-compressed.xlsx`, 16 sites with photos; user: Pune live, Gujarat and Bhopal live in November). Data in `window.HOARDINGS` (data.js), photos in `assets/img/hpgm/`. Sites (W x H ft, duration, ₹/month): Pune 7 = Hyundai Service Centre towards Wagholi 40x30 1,30,000 (GPS 18.571295, 73.954203); Kesnand Phata towards Pune 30x20 1,10,000 (GPS 18.581396, 73.98654); EuroKids Wakad 45x30 1,40,000; Bhumkar Bridge Wakad 40x30 1,25,000; Baner 411045 45x30 1,40,000; Sanvidhan Chowk NIBM 30x30 1,50,000; Amanora Road 40x20 1,40,000 (photo shows a blank board). Baroda 4 = Akota DMart parking terrace 20x20 40,000; Fatehgunj Bull Circle 20x20 35,000; Gotri Bridge towards Natubhai Circle 20x20 50,000; Subhanpura facing Ellorapark towards Gorwa 25x15 40,000. Rajkot 2 = Bhaktinagar Circle (H-1656) 40x20 1,50,000; Kishanpara Circle facing Mahila College (H-1683) 40x20 1,30,000. Surat 1 = Pal Umra Bridge 40x20 1,90,000, Nov 2026 to Oct 2027. Bhopal 2 = Vyapam Square Link Road No. 1 20x10 75,000; Kamla Park 20x10 80,000. Ahmedabad: near Motera and Nexus, yet to come. All others Nov-Dec 2026. Totals: ₹17.25 L a month (Pune 9.35, Baroda 1.65, Rajkot 2.8, Surat 1.9, Bhopal 1.55); Nov-Dec ₹34.5 L; Surat full year ₹22.8 L. Pune photo stamps show boards up 10-13 Oct although the sheet says Nov-Dec. Each site has a written "why this site" (our rationale). Playbook "On the road" wall now renders this programme (stats, city totals, 16 cards with Live / Live from Nov); October recap Pune map shows 7 numbered hoarding pins (5 approximate) + 7 photos; KML updated with all 7. Hoarding counts elsewhere updated (runway: Pune 7 live from 10 Oct, Gujarat + Bhopal 9 from Nov; channel tab cities 7/4/2/2/1, ₹17.25 L a month). Old deck counts (16 = 5/4/3/2/1/1, 15 on the slide) superseded; old deck photos hoarding-night/hoarding-bhopal (Lucknow) no longer used. Discrepancy: Pune hoarding line in the Q4 sheet is 14.75 L vs 18.7 L for 7 boards over Nov-Dec. Assets ?v=20261026v.
- 2026-10-26: Pune hoarding map: store pins are now the Decathlon logo (user-supplied, `assets/img/deca-pin.png`, 96px rounded) with blue "Decathlon <store>" name labels and a popup with the catchment area; hoarding squares drawn up-left of their points and above the logos so both show. KML store icon points to the live logo URL. Note: Instagram embeds log harmless CSP report-only console errors from inside their iframes. Assets ?v=20261026y.
- 2026-10-26: Strategy: "2027 communication budget: 56 L" block removed (user: not needed there; data still in DATA.budget2027). Chapter 02 subtitle now "community plays, channels, hoardings and content". Hoarding programme gets 3 small maps (Baroda, Surat, Bhopal; 230px) with Decathlon logo store pins (Surat also shows Adajan, opens Dec) and numbered hoarding pins; cards tagged "City N" to match map numbers. Approximate pins: Akota DMart 22.2968,73.1663; Fatehgunj Bull Circle 22.3195,73.1855; Gotri Bridge 22.3120,73.1440; Subhanpura 22.3200,73.1600; Pal Umra Bridge 21.1690,72.7880; Vyapam Square 23.2345,77.4290; Kamla Park 23.2590,77.3950; Adajan store 21.1960,72.7930. Assets ?v=20261026z.
- 2026-10-27 (asked 26 Oct): Strategy: removed "How Gujarat notices brands" (Kantar), "Area of practice tie-ups" (AOP video + 5/10/5 tie-ups) and the "Decathlon is loved by…" quote (user: remove). Kantar JS already guarded.
- **`tuonver_data.xlsx`** (26 Oct 2026; user: 2026 rows = 1 Jan 2026 to yesterday, 25 Oct): in-store turnover, qty, customers, returning customers per store for 2025 and 2026; column "turnover growth" filled only on 2025 rows (Wakad 29.4, SGS 28.5, Wagholi 28.2, Amanora 28.0, NIBM 27.0, Motera 29.6, Nexus 26.0, Dumas 26.1, Baroda 28.7, Rajkot 37.0, Indore 33.6, Gwalior 53.0, Bhopal blank; grand total 17.6) — meaning unclear (maybe 2025 vs 2024), not used on the site. 2026 YTD in-store TO (Cr) / customers / returning: Wakad 83.63 / 209,030 / 123,918; SGS 35.75 / 121,879 / 70,365; Wagholi 35.29 / 100,248 / 62,457; Amanora 28.98 / 90,989 / 57,065; NIBM 15.27 / 49,028 / 30,640; Motera 40.59 / 100,636 / 56,747; Nexus 35.80 / 112,400 / 58,371; Dumas 31.63 / 84,137 / 44,510; Baroda 28.98 / 71,364 / 39,461; Rajkot 7.41 / 26,653 / 12,015; Indore 26.13 / 72,015 / 37,732; Bhopal DB Mall 22.14 / 70,837 / 23,419; Gwalior 5.93 / 25,815 / 11,416. 2025 (period unconfirmed, likely full year) TO Cr: Wakad 95.34, SGS 43.28, Wagholi 41.70, Amanora 33.09, NIBM 16.41, Motera 43.20, Nexus 41.67, Dumas 32.44, Baroda 30.60, Rajkot 7.25, Indore 30.85, Bhopal 6.63, Gwalior 7.48. City totals 2026 YTD: Pune 198.93 Cr / 5.71 lakh customers; Ahmedabad 76.39 / 2.13 lakh; 8 cities 397.5 Cr / 11.35 lakh customers, 55% returning.
- Penetration chart now = 2026 YTD in-store turnover vs each city's 2026 market (City Ranking projection) pro-rated to 298 days: Pune 10.0%, Bhopal 4.2%, Indore 4.0%, Ahmedabad 3.9%, Vadodara 3.9%, Gwalior 2.8%, Surat 1.6%, Rajkot 1.5%; all 8 cities ₹398 Cr of ₹8,550 Cr = 4.6%. Why West lede: "sports markets worth ₹10,470 Cr this year … about 4.6%". Previous 2025 shares (City Ranking DSI conso TO) superseded. Assets ?v=20261027b.
- 2026-10-27: October recap reels now play on the page: Instagram embeds (and instagram.com/embed.js) replaced by native `.sm-video` tiles that autoplay muted when on screen, with a Sound on/off button on every reel (tap to hear; one plays with sound at a time, shared handler in people.js). Videos pulled from each post's public embed, compressed to 360px H.264 (`assets/videos/ig/<code>.mp4`, 18 files, 33 MB) with covers in `assets/posters/ig/`. Each tile has an @handle link to the post. No video available (creator blocked embedding or photo post), shown as cover + "Watch/View on Instagram": De8jWqqoXHh (@chal.dod), Deb6x1lIhiU, Degfrr-NKBh, DeeSgvrI42D, and photo posts DejcABnxu21, DewQ1znDYeS, De6Typ5jJG9. Note: Instagram CDN links expire, so local copies are used. Q4 runway: "Important campaigns" heading above the spotlights (Kiprun, Winter + Travel, Gift a Sport, Adajan). Strategy: removed the "The strategy" header (duplicated the Chapter 02 band) and the "What worked in 2026, and what comes next" recap block (school + Yoga Day); section now opens with shoppers 70/30. Assets ?v=20261027d.
- 2026-10-27: **AOP (area of practice) plan by store** (user table, Nov 2026 - Oct 2027; months assumed Nov 2026 to Oct 2027), data in `window.AOP_PLAN`. Store: total / cost per AOP / total cost / Nov..Oct. Rajkot 19 / 7,000 / 1,33,000 / 3,2,2,3,2,2,1,1,1,0,0,2; Nexus 37 / 24,000 / 8,88,000 / 4,5,4,4,4,4,4,3,2,0,0,3; Baroda 34 / 24,000 / 8,16,000 / 4,4,4,3,4,4,4,2,1,1,0,3; Motera 38 / 24,000 / 9,12,000 / 4,5,4,4,5,5,4,2,1,1,0,3; Dumas 36 / 23,000 / 8,28,000 / 4,5,4,4,4,4,4,2,1,1,0,3; Amanora 31 / 25,000 / 7,75,000 / 4,5,3,4,3,3,2,2,1,1,0,3; SGS 33 / 25,000 / 8,25,000 / 4,5,3,4,3,3,4,2,1,1,0,3; NIBM 32 / 24,000 / 7,68,000 / 4,5,4,3,4,4,3,2,0,0,1,2; Wakad 54 / 25,000 / 13,50,000 / 5,6,7,7,8,5,4,4,3,1,1,3; Wagholi 45 / 25,000 / 11,25,000 / 5,6,5,5,5,5,4,3,2,1,1,3; Gwalior 21 / 7,000 / 1,47,000 / 3,3,3,2,3,2,1,1,1,0,0,2; Indore 36 / 20,000 / 7,20,000 / 5,5,3,4,4,4,4,2,1,1,0,3; Bhopal 33 / 20,000 / 6,60,000 / 4,5,3,4,3,3,4,2,1,1,0,3. All monthly rows sum to totals. Totals: 449 AOPs, ₹99.47 L (Pune 195 / ₹48.43 L, Gujarat 164 / ₹35.77 L, MP 90 / ₹15.27 L); by month 53, 61, 49, 51, 52, 48, 43, 28, 16, 9, 3, 36. **Live now** (user, 27 Oct): Wakad 58 (107% of plan), Amanora 22, Wagholi 15, SGS 6 = 101; others not shared. Shown in Strategy (#aopKpis, after shoppers): stats, monthly bars, store table with live progress and a monthly heat grid. Playbook AOP tab stats updated (449, ₹99.47 L, 101 live); its older per-store mix table (AOP slide, 90 tie-ups) is superseded but still in the tab. The heading "Important campaigns" and removal of the strategy header / 2026 recap were already done (repeat request). Assets ?v=20261027f.
- 2026-10-27: AOP block moved from Strategy to the Marketing playbook, directly under the winter hoarding programme, and cut to **Q4 only** (user): Nov + Dec per store. Q4: 114 new AOPs (Nov 53, Dec 61), cost ₹25.04 L (Pune 49 / ₹12.16 L, Gujarat 40 / ₹8.66 L, MP 25 / ₹4.22 L); live now 101 in Pune. Full-year figures stay in data only. The strategy toolkit and "Who each channel is for" moved into the Marketing playbook after the channel switchboard (last tab: quick commerce and delivery), in a white panel (.pb-light). Strategy section now holds only the shoppers 70/30 bar. Playbook AOP tab stats: 114 new AOPs in Q4, ₹25.04 L, 101 live. Assets ?v=20261027h.
- 2026-10-27: 2027 planner: Q1 (mint), Q2 (cyan) and Q4 (magenta) month headers highlighted with badges, tint and a top stripe. Q1 2027 "Holidays and moments" rebuilt by market: timeline rows (dots for days, bars for ranges) + three columns Pune / Gujarat / MP, each item with date, type (holiday, festival, sports event, moment, exams), "date approx." flag and how we use it. 27 items (DATA.holidaysQ1, fields d, e, name, r, t, use, approx). Added: New Year; Makar Sankranti (Pune til-gul, MP); International Kite Festival Ahmedabad 14-16 Jan (approx); Khelo MP Youth Games (Jan, approx); Republic Day sale 20-26 Jan; Bajaj Pune Grand Tour 26-31 Jan; Vadodara Marathon 31 Jan; Rann Utsav season to end Feb (approx); Indore Marathon ~7 Feb; Valentine's Day; board exams mid-Feb to Mar (approx); Khajuraho Dance Festival ~20-26 Feb (approx); Marathi Bhasha Din 27 Feb; Women's Day 8 Mar; Bhagoria ~14-21 Mar (approx); Holika Dahan 21 Mar; Rang Panchami 26 Mar (Pune; Indore Gair procession); Good Friday to Easter 26-28 Mar. IPL start now all markets (approx 14 Mar). Sources: Drik Panchang (Holi 22 Mar, Holika Dahan 21 Mar, Rang Panchami 26 Mar, Maha Shivratri 5 Mar vs Calendarific 6 Mar), calendarific / officeholidays / publicholidays.in (Shivaji Jayanti 19 Feb, Eid 10 Mar tentative, Gudi Padwa 8 Apr); state 2027 lists are provisional. Assets ?v=20261027j.
- Open: confirm Maha Shivratri (5 vs 6 Mar), Eid (moon), Bhagoria, Khajuraho, Kite Festival and Khelo MP dates once official 2027 notices are out.
- 2026-10-27: Q4 AOP table moved into the Marketing playbook's "Practice-place hoardings (AOP)" tab (replaces the old AOP-slide table of 90 tie-ups, which is removed along with aopPlan; the separate block under the hoarding programme is gone). WhatsApp tab: express delivery alerts by pin code (store sets its 2-hour pin codes, WhatsApp alert to customers there, order in app, delivered from nearest store); stats now 5 L reached in Q1, 2 hr express pin-code targeted, 30 express orders a day target, +15% returning. Strategy toolkit is a collapsed dropdown (<details>). October recap: new "Navratri landing page" card with the user's screenshot (`assets/img/navratri-landing.jpg`): नव-ऊर्जा, नव-खेल, new arrivals from ₹199, category tiles (trousers, shoes, sunglasses, bags, jackets, T-shirts, equipment, caps), "Nine Days, Nine Gifts" (kites ₹699, cornhole ₹1,499, watch ₹1,599). Assets ?v=20261027l.
- 2026-10-27: Content calendar "Influencer videos, when and where": thumbnails removed, compact 3-column text list (date, creator, video, region); 27 Dec creator renamed "Pune lead creator" (was "Pune: Adi"). Photo credits paragraph removed from the content section; CC attribution kept as a collapsed "Photo credits" note in the footer (CC licences need attribution while those photos are still used in the calendar). Strategy section removed (the 70/30 men/women bar was the last item; data point still in context); nav "Strategy" now jumps to the Chapter 02 band (#ch-strategy, now data-step). Assets ?v=20261027m.
- 2026-10-27: New playbook tab "Playground activation" after quick commerce (user): stores with playgrounds Indore, Wagholi, Surat (Dumas Road), Baroda, Motera; levers = continuous weekly events, social media from the court, push notifications to nearby customers. User photo of the Gujarati-signed store court → `assets/img/playground-court.jpg` (+ Motera Yoga Day playground photo). Per-store usage ideas are our proposal, no targets given; measure = walk-ins, footfall, dwell time. Assets ?v=20261027n.
- 2026-10-27: **Surat Adajan opening is Sunday 27 Dec 2026** (user; supersedes 18-20 Dec weekend and the AOP slide's Apr 2027). Timeline (user): 30 Oct hoardings finalised; 1 Nov AOPs finalised and placement in the catchment starts; then events and community activation; grand launch 27 Dec. Surat section rebuilt: steps 1-6 (30 Oct hoardings, from 1 Nov AOPs, 1-22 Nov teaser/Diwali light, 23 Nov-26 Dec events and community, Sun 27 Dec grand launch, 28 Dec-25 Jan Ramat chalu rahe). KPIs: ₹85 L first 3 days (Sun 27-Tue 29 Dec), ₹2.5 Cr first 30 days (27 Dec-25 Jan). The workbook's day targets (₹26.35 / 28.05 / 30.6 L, built for Fri-Sun 18-20 Dec) are carried to 27/28/29 Dec (launch day gets the Sunday programme and ₹30.6 L) and week targets relabelled (W1 launch week, W2 New Year, W3 Kai Po Che!, W4 Pickle & Cricket) — flagged as needing re-phasing. Bumper Draw moved to 24 Jan. Content calendar Surat posts shifted: reveal post 23 Nov says 27 December; meet the team 16 Dec, countdown 17-26 Dec, treasure hunt 19 Dec, Happy Streets #1 20 Dec, creators' preview 24 Dec, theme line 26 Dec, grand launch live + Tapi Sunrise Run 27 Dec, Night Carnival 28 Dec, New Year's Eve run 31 Dec (replaces Santa Party), Happy Streets #2 10 Jan. Store openings tab: timeline list from the user's milestones. Ticker, runway label, chapter band, spotlight updated. Note: the printed grand-opening posters (assets) still show 20 Dec.
- 2026-10-27: Playbook tab order (user): Hoardings, AOP, Playground activation, Quick commerce, Events and community, Store openings, Influencers, In-mall and in-store kit (not in the user's list; placed before the last two), Meta/app/landing pages, WhatsApp. Implemented by sorting CHANNELS with an ORDER list.
- 2026-10-27: Content calendar: market filter (All / Pune / Gujarat incl. Surat / MP) filters calendar chips and briefs; per-month market context (typical weather day/night °C approx., who we talk to, what's on locally) for each market; briefs shortened to compact 3-column cards (date, format, region, title, hook, one-line why; no photo, no campaign/feeling rows). Posts now sorted by day. Assets ?v=20261027p.
- Open: Surat grand-opening poster artwork shows 20 Dec 2026; replace with 27 Dec versions when available.
- 2026-10-27: Q1 2027 section: "Women's Day: one morning, all 13 stores" block (Sun 7 / Mon 8 Mar 2027) with the user's reference film (Klickpin pin 396387205494726228, a rooftop "Profit & Pilates" women's event by Femology; `assets/videos/womens-day.mp4` 480px, 1.8 MB, poster `assets/posters/womens-day.jpg`, sound toggle). Flow: women-only session, try a sport, shop with the day's offer, join a women's club. Per-store formats (our proposal): playground stores outdoors (Wagholi, Motera, Baroda, Dumas, Indore), mall stores in the atrium (SGS, Amanora, Nexus, Bhopal DB Mall), others (Wakad, NIBM, Rajkot, Gwalior). No targets given.
- 2026-10-27: Playbook "Events and community" tab: Heritage Run = community walk (3K) and run (5K) every Sunday 6:30 am, rotating cities, 10-minute story stop. 10 routes with a one-line story: Pune Shaniwar Wada to Lal Mahal (1732, Bajirao I) and Sinhagad (1670, Tanaji Malusare); Ahmedabad old-city pols (UNESCO World Heritage City 2017, Sidi Saiyyed jaali) and riverfront to Sabarmati Ashram (Gandhi 1917-1930, Dandi March); Vadodara Laxmi Vilas Palace (1890, Sayajirao Gaekwad III, said to be 4x Buckingham Palace) and Sayaji Baug; Surat Tapi riverfront to Surat Castle (1540s, against Portuguese raids); Rajkot Kaba Gandhi no Delo; Indore Rajwada to Lalbagh Palace (Holkars, Ahilyabai); Bhopal Upper Lake (Raja Bhoj, 11th c.); Gwalior Fort (9th-century zero inscription, Babur's "pearl"). Stories are general knowledge; the Pune society plan stays below. Assets ?v=20261027r.
- 2026-10-27: Penetration chart: bars shortened, figures split into labelled columns (Our sales YTD, City market YTD, Customers YTD) under a header "2026 so far: 1 Jan to 25 Oct" so it's clear the ₹199 Cr etc. are 2026 year-to-date in-store turnover, not 2025 or full year. Phone view hides the three figure columns. Assets ?v=20261027t.
- 2026-10-27: **October to date (1-26 Oct 2026), store report** (user screenshot), `DATA.octMTD`. Turnover (₹) / qty / customers / returning: Wakad 6,37,08,019.5 / 89,208 / 20,006 / 15,343; SGS Mall 2,69,04,013.9 / 39,463 / 11,418 / 8,480; Wagholi 2,61,73,524.9 / 36,451 / 9,923 / 7,853; Amanora 2,24,01,621.1 / 32,265 / 8,878 / 7,148; NIBM 1,18,98,486.5 / 18,091 / 5,304 / 4,286; Motera 2,63,69,559.5 / 35,099 / 8,729 / 6,622; Nexus 2,36,63,939.0 / 34,602 / 8,958 / 6,422; Dumas Road 2,28,95,599.2 / 32,601 / 6,863 / 4,851; Baroda 1,89,52,199.8 / 26,333 / 6,157 / 4,511; Rajkot 52,96,778.6 / 8,676 / 2,414 / 1,673; Indore 1,98,67,790.2 / 27,516 / 6,749 / 4,849; Bhopal DB Mall 1,63,20,208.2 / 24,966 / 7,005 / 4,404; Gwalior 48,03,000.9 / 7,419 / 2,537 / 1,787. Grand total ₹28,92,54,741.4 (₹28.93 Cr), 4,12,690 items, 1,04,018 customers, 77,414 returning (74%), TO growth 8.6 (grand total only; likely vs same days 2025). Store rows sum to 1,04,941 customers / 78,229 returning (report total de-duplicates across stores); turnover and qty match exactly.
- New Scoreboard panel "Q4 so far: 1 to 26 October" (#sbPace): each store's Oct sales vs its Q4 challenge (₹28.93 Cr of ₹154.75 Cr = 18.7%; 28.3% of Q4 days gone), grouped by state, with a time-gone line. Highest: Surat 21.5%, Amanora 21.1%, Wakad 21.0%, NIBM 20.5%; lowest Bhopal 13.4%, Gwalior 13.3% (MP has the steepest challenge, +35.9%). Discovery: October challenge growth is +13.9% but the report shows +8.6% so far. October recap now opens with 4 KPIs (₹28.93 Cr, +8.6%, 1.04 lakh customers 74% returning, 4.13 lakh items). Assets ?v=20261027v.
- 2026-10-27: Q4 so far panel: state totals added: Pune ₹15.11 of ₹75.53 Cr (20.0%), Gujarat ₹9.72 of ₹51.49 Cr (18.9%), MP ₹4.10 of ₹27.73 Cr (14.8%). Women's Day is a **weekend event, Sat 6 and Sun 7 Mar 2027** (user; Women's Day itself is Mon 8 Mar); block now says "one weekend, all 13 stores" and shows two user pictures: Kiprun pink "Women's Day pilates accessory pack" giveaway (snood, socks, drawstring bag, mat, cap) → `assets/img/wd-giveaway.jpg`, and a Decathlon pink community run with a charity cheque (France) → `assets/img/wd-pink-run.jpg`. Surat section: Night Carnival inspiration reel (reel/DcbXgJmIvz9, @decathlon_campus_hq, Vitalsport weekend in France) downloaded to `assets/videos/ig/DcbXgJmIvz9.mp4` with sound toggle. Assets ?v=20261027x.
- 2026-10-27: Chapter 04 band: number "04" removed, subtitle now "The full 2027 calendar, its budget and where it goes, then January to March in detail." Order after the band: 2027 planner (Q1 mint, Q2 cyan, **Q3 amber** now marked, Q4 magenta; new top lane "Holidays and moments" at month level: Jan Uttarayan + Republic Day, Feb Valentine's + Shivaji Jayanti, Mar Women's Day + Holi, Apr Gudi Padwa, May Maharashtra Day, Jun Yoga Day, Jul Wari, Aug Independence Day, Sep Ganesh Chaturthi, Oct Navratri/Dussehra/Diwali (Diwali 2027 ~29 Oct per calendarlabs), Nov Children's Day + Black Friday, Dec Christmas + NYE) → month detail → Holidays and moments Jan-Mar (timeline + Pune / Gujarat / MP lists as closed dropdowns) → "Advertisement Budget 2027" chart (renamed) → "Where the 2027 budget goes" table like the Q4 one (lines x Pune 365.3 / Gujarat 260.6 / MP 120.0 = 746 L, fixed shares 30/30/20/5/5/5/3/2) → Decathlon Play IPs. Q1 2027 section now follows (KPIs, levers, Women's Day, Q1 spend). Nav: "2027" before "Q1 2027". Women's Day block re-laid out: text and flow on top, then a media row (film 210px | giveaway | pink run, all 380px tall, images contained, not cropped), then the 3 store columns. Assets ?v=20261027z.
- 2026-10-28: Planner month detail: month dropdown (select) added next to the arrows; the full detail (competitors / How Pune answers / On the ground) is now a closed dropdown under the month banner (open state kept while switching months). Planner "Holidays and moments" lane now one item per line with dates: Uttarayan 14 Jan, Republic Day 26 Jan; Valentine's 14 Feb, Shivaji Jayanti 19 Feb; Women's Day 8 Mar, Holi 22 Mar; Gudi Padwa 8 Apr; Maharashtra Day 1 May; Yoga Day 21 Jun; Ashadhi Ekadashi (Wari) 13 Jul; Independence Day 15 Aug; Ganesh Chaturthi 3 Sep, Navratri from 30 Sep; Dussehra 9 Oct, Diwali 29 Oct; Children's Day 14 Nov, Black Friday 26 Nov; Christmas 25 Dec, NYE 31 Dec. Sources: Drik Panchang / hindupad / days.to / vedicmarga (Navratri 30 Sep vs 1 Oct, Dussehra 9 vs 10 Oct, Diwali 28 vs 29 Oct differ by source). Discrepancy: Marcom calendar banner says "Gudi Padwa April 7"; holiday lists say 8 Apr. "Where the 2027 budget goes" cells now show ₹ … L, totals ₹ … Cr. Assets ?v=20261028a.
- 2026-10-28: Removed "Decathlon Play event IPs, 2027 national footfall goals" block (with Sports Utsav Jr poster) and the big "Q1 advertising, 2026 vs 2027 plan" bars; Q1 comparison now a line in each Advertisement Budget 2027 state card (Pune 0.56 → 0.80 Cr +45%, Gujarat 0.64 → 0.60 Cr -7%, MP 0.06 → 0.29 Cr +406%). "Where the 2027 budget goes" now in crore throughout (user: show Cr), e.g. Pune digital ₹1.10 Cr. Data (DATA.ipEvents) kept. Assets ?v=20261028c.
- 2026-10-28: Surat opening days: the Vitalsport inspiration reel now sits inside the Night Carnival day card (with a short inspiration note) instead of a separate block below. Day amounts labelled "sales target" with a note: each day's figure is the new store's sales target for that day (₹30.6 L launch, ₹28.1 L Night Carnival, ₹26.4 L night run = ₹85 L; workbook targets). Assets ?v=20261028d.
- 2026-10-28: Surat (user): as soon as the official deal is signed, the "Opening in December 2026" banner goes up on the building (user image with hiring QR: "Choose the career that lets you play! Apply now and join our team" → `assets/img/surat-deal-banner.jpg`). **All 10 AOPs and 2 hoardings live in the Adajan area by 15 Nov.** Timeline steps now: 1 deal signed/banner, 2 hoardings locked 30 Oct, 3 AOPs + hoardings live by 15 Nov, 4 events and community Nov-26 Dec, 5 grand launch 27 Dec, 6 Ramat chalu rahe to 25 Jan; store-openings tab timeline updated the same way. Surat hero re-laid out: 4 images in a row (store render, deal banner, 2 posters contained, not cropped), KPI row of 6 smaller cards. Discrepancies: the winter hoarding sheet lists 1 Surat site (Pal Umra) vs 2 hoardings here; AOP plan gives Dumas 9 in Nov+Dec vs 10 AOPs here (Adajan isn't in the AOP sheet).
- 2026-10-28: Content calendar: month calendar grid and "Every post … in brief" are now closed dropdowns (open state kept across months; clicking a calendar chip opens the briefs and jumps to the post). Removed the AW26 quarter plan (Q1-Q4 campaigns, product focus, content hooks) under the reels. Assets ?v=20261028e.
- 2026-10-28: **Updated Surat workbook** `1xSurat_Adajan_Master_and_OpeningPlan_2.xlsx` (OPENING PLAN tab): 3-day walk-ins 14,904 (was 18,215) at 25.9% conversion and ₹2,200 basket (was ₹1,800); 30 days ₹2.5 Cr needs 40,565 walk-ins (was 49,580); 28 strategies plan 48,776 walk-ins (120% covered), 81 events, 126 partners, strategy spend ₹23,22,150 + offers ₹1,47,485 = ₹24,69,635; sheet's own cost per walk-in ₹61. **User: cost per walk-in is ₹50** (site uses ₹50; ₹24.7 L / 48,776 = ₹50.6). Benchmark row now "Adajan (opening plan, 30 days)": ₹24.7 L, 48,776 walk-ins, ₹2.5 Cr, ₹50. People met before opening 12,200; 77 events and event-days. Opening-day cards with sales targets removed; replaced by "Key opening strategies to warm up the catchment" (user): treasure hunt marketed with influencers (600 players, 14 creator waves / 10 lakh views, 3,510 walk-ins; visual = page 2 of the user's "Kheloge Khudoge Banoge Kharab" PDF campaign deck: blue mystery boxes in catchment at colleges, malls, parks, gyms, playgrounds, golden ticket redeemed in store, rewards Platinum/Gold/Silver/Bronze → `assets/img/treasure-hunt-journey.jpg`), night carnival for families (3,500 people, 1,925 walk-ins, ₹60,000, with the Vitalsport reel), yoga/walking/running (Tapi Sunrise Run + carnival 600 + 3,000, Happy Streets 9,000 per Sunday, opening run, run club; 8,160 walk-ins), society events (Ramat Rath 36 societies + 6 Society Ramat Days; 2,250 walk-ins). All 28 strategies listed in a dropdown table (strategy, event, budget, walk-ins). Content calendar dropdown label now just "<Month> calendar". KKB deck also names creators (Sheetal Devi, Avani Lekhara, Sumit Antil, Purav Jha etc.) and targets (+25pp consideration, 10K+ UGC, +20% omni traffic) — not used on the site. Assets ?v=20261028g.
- 2026-10-28: October recap: added reel/De8wddSJ_Md (@letsplaypune) to "Our social media" (now 6) and reel/DeoDoocxnaM (@ananta_runclub) to the Kiprun launch strip (now 6); both downloaded and play on the page with sound toggles. Assets ?v=20261028h.
- 2026-10-28: AOP live counts (user): Baroda 6, Bhopal 7 → live now 114 across 6 stores (Wakad 58, Amanora 22, Wagholi 15, SGS 6, Baroda 6, Bhopal 7). Surat key strategies: treasure-hunt image replaced by the user's short film (VID-20261027-WA0040, 10 s, runner finds a Decathlon box with a golden ticket and redeems it in store → `assets/videos/treasure-hunt.mp4`, 300px slot, muted loop). Running card renamed "New Year run and Happy Streets" with a 3-photo collage from Decathlon's Pune Happy Streets (with PMC) → `assets/img/happy-streets-1..3.jpg`. Society card header just "Society events" (no Ramat Rath / Society Ramat Day names). User also shared the KKB campaign-plan page (insight/objective/audience, 4 phases: tease, mystery hunt, reveal, community takeover) for context.
- **Campaign-wise Q4 spend** (user screenshots; DATA.campQ4) in a dropdown under "Where the Q4 budget goes". Gujarat (₹, Oct/Nov/Dec, Q4, share): Winter Season 15 Oct-30 Jan 72,568/2,92,680/5,77,305 = 9,42,553 (17.1%); Climbing & Trekking 0/1,95,120/4,84,936 = 6,80,056 (12.3%); Navratri/Dussehra 4,49,923 (8.2%); Diwali/Gift a Sport 3,62,841 (6.6%); Running + Kiprun 1,01,596/4,68,288 = 5,69,883 (10.3%); Kids Fest + Children's Day 1,88,678/2,73,168 = 4,61,845 (8.4%); Black Friday 4,09,752 (7.4%); Adani Marathon 2,34,144 (4.2%); Christmas 4,15,659 (7.5%); Travel 5,54,212 (10.1%); Buffer + Express Delivery Ahmedabad + OOC reels 2,75,759/39,024/1,15,461 = 4,30,244 (7.8%); total ₹55.11 L (vs Gujarat line plan 78.43 L — discrepancy). MP: Winter Season 25 Oct-30 Jan 1,35,956/2,46,626/2,77,240 = 6,59,823 (24.4%); Diwali + Dussehra 2,37,923/49,325 = 2,87,248 (10.6%); Running + Kiprun 1,69,945/1,47,976 = 3,17,921 (11.8%); Kids Fest 74,776/98,651 = 1,73,426 (6.4%); Black Friday 1,97,301 (7.3%); Climbing & Trekking 1,18,381/1,66,344 = 2,84,725 (10.6%); Anniversary 29,595 (1.1%); Christmas 3,88,136 (14.4%); unnamed "-" 2,21,792 (8.2%); Buffer 33,989/49,325/55,448 = 1,38,762 (5.1%); total 6,52,588 / 9,37,180 / 11,08,961 = 26,98,730 (sheet shows Oct 96%, Nov 95%). Pune (campaign x line investment sheet, total 54,25,000): Dussehra/Festive commercial Oct 8,50,000 (15.67%), Winter Travel OPCO Nov 17,75,000 (32.72%), End of Year Sale commercial Dec 6,25,000 (11.52%), Kiprun product launch Oct 3,50,000 (6.45%, all on the internal-consumption line), Trekking SOTM Nov 2,00,000 (3.69%; 1.5 L in-store + 0.5 L influencer); visible = 70.05%, rest not in screenshot. Pune line columns inside campaigns don't add up (e.g. Dussehra hoarding 5,75,000 vs 14.71% share) — only campaign totals used.
- 2026-10-28: Hero: the 4th phone (Nike "proud to run like a girl" reel, shows the Nike swoosh) replaced by the Yoga Day / Motera Yog Kumbh reel (user: remove Nike from the top). The Nike reel is still in the content-calendar reels band.
- 2026-10-28: Campaign-wise spend dropdown now opens on a **cluster summary** with a toggle (Cluster summary | Gujarat | Madhya Pradesh | Pune), like the persona toggle. Cluster view: state totals (Gujarat ₹55.11 L, MP ₹26.99 L, Pune ₹54.25 L, cluster ₹136.35 L) and campaigns grouped into themes: Winter and travel ₹39.32 L (28.8%), Festive ₹19.50 L (14.3%), Running/Kiprun/marathons ₹14.72 L (10.8%), Climbing and trekking ₹11.65 L (8.5%), Christmas and year-end ₹14.29 L (10.5%), Kids Fest ₹6.35 L, Black Friday ₹6.07 L, Buffer/anniversary/other ₹8.20 L, Pune not in screenshot ₹16.25 L (11.9%). Assets ?v=20261028k.
- 2026-10-28: Planner stars (user): Movement for All, Clearance sale (Jan and Aug), Beach Day (renamed "Beach Day, Surat"), Women's Day (Event IP), Summer Camp. Assets ?v=20261028i.
- 2026-10-28: Young Trend & Discovery age 18-24. Removed three footnotes: campaign-wise source note (Pune 70% / Gujarat ₹55.11 L vs ₹78.43 L), the Q4-so-far note (October challenge +13.9% vs +8.6%, store-level sheet), and the store-budget note under Where the Q4 budget goes (129.71 L, Pune digital, Other). Cluster summary: removed the "Pune: not in the screenshot" row; Pune card shows ₹38.00 L (campaigns shown); cluster card now "₹1.3 Cr Q4 marketing budget" (store budgets ₹129.71 L); theme shares are of the ₹120.10 L campaigns listed (Winter and travel 32.7%). Empty cells use "-". Assets ?v=20261028l.
- 2026-10-28: Campaign-wise cluster card "₹1.6 Cr Q4 marketing budget" (user; superseded ₹1.3 Cr). Surat: first-month walk-ins target 49,600 everywhere (KPI card, All-strategies total, benchmark row); opening gift ₹2,499+ is now "Gift card" (was Sports sipper); watch-out now "5 tills needed", cross-checked: ₹85 L / ₹2,200 = ~3,860 bills in 3 days (= 14,904 × 25.9%), ~1,290 a day, ~107 an hour over 12 h, 20-30 bills per till per hour = 4-5 tills (superseded: 12 tills). 2027 planner lede: "The full Marcom calendar for the country" (was "for Pune"). Assets ?v=20261028m.
- 2026-10-28: Hero skyline replaced with the user's new skyline illustration (Pune, Gujarat and MP landmarks; Statue of Unity, sun, bridge, tiger). Background removed: the black band was already transparent; the flat blue (rgb 40,71,188) keyed out with soft alpha and un-mixed edges, cropped to the art (1400x227). Saved as assets/img/skyline-band.webp (190 KB, full alpha; a 256-colour PNG banded the sun glow). Old skyline-band.jpg removed. It now sits on the hero gradient.
- 2026-10-28: Q4 runway lane "Hoardings, influencers and AOPs": the three Gujarat AOP chips (practice-place hoardings Gujarat 5 in Nov, AOP Gujarat 7 in Dec, AOP Gujarat 5 gyms + 5 pools in Jan 2027; superseded) replaced by one chip "AOPs, Q4: 114 (Pune 49, Gujarat 40, MP 25)" spanning 1 Nov - 31 Dec, from AOP_PLAN (Nov + Dec per store). Surat Adajan's 10 opening AOPs are not in AOP_PLAN (would make 124). Assets ?v=20261028n.
- 2026-10-28: **In-mall and in-store kit tab**: added photos and monthly cost only (user: nothing else) from `LIVE In-mall communications - India.pdf` (64 pages, national deck; West pages 14-21 and 64). Pune: Amanora ₹50,000, SGS Mall ₹54,000, NIBM (Tribeca Mall) ₹40,000 = ₹1.44 L/month. Gujarat: Nexus Ahmedabad atrium ₹3.4 L + Nexus banners ₹18,000 = ₹3.58 L/month. MP: Bhopal atrium and parking = part of the opening plan (no monthly cost), Bhopal digital screens ₹1.6 L, Gwalior mall facade ₹30,000 = ₹1.90 L/month. West ₹6.92 L/month. 13 photos in `assets/img/inmall/`. Replaces the store-activation month cards in that tab. Indore page has no photo and no cost; Wakad, Wagholi, Motera, Surat, Baroda, Rajkot not in the deck.
- 2026-10-28: **Playground activation**: ₹2.5 L on influencers to communicate the playgrounds and keep them busy; Indore has no playground communication yet, revamped playground with updated communication ready by 15 Nov; Motera, Dumas and Wagholi start influencer spend first for engagement on the playgrounds, second for bookings (user).
- 2026-10-28: **Quick commerce and delivery** re-phased Dec-Mar from the user's strategy note (picture): express 2-hour delivery animated in Ahmedabad, Pune and Surat (Adajan opening 27 Dec). Dec: go live, 5 km end-to-end serviceability check, year-end "Need it before New Year? Get it in 2 hours". Jan: geo-fenced WhatsApp/SMS/push inside the 5 km zone, Uttarayan line, Republic Day. Feb: society/academy/corporate-park tie-ups with QR drive; 4-6 week pilot ends. Mar: Holi and Women's Day lines, SKU refresh. Every month: visible in store and app, right stock (3-6 months SKU-level online orders, Pune and Ahmedabad), weekly review, teammates promote the 2-Hour Promise at cash counters, lifts, playgrounds and trial rooms (Bangalore 5-store example), WhatsApp pin-code alerts. Store photo from the note → `assets/img/two-hour-promise-store.jpg`. Old Dussehra-era growth levers removed.
- 2026-10-28: **Events and community**: planned to end of Q1 2027 only (user). Q1 themes: January fitness events, February Beach Day in Surat, March Women's Day events (13 stores, Sat-Sun). Each Heritage Run city card now names the event: Pune Shaniwar Wada heritage walk 3K, Sinhagad trail walk; Ahmedabad pols heritage walk 3K, Riverfront 5K run; Vadodara sunrise yoga + 3K walk; Surat 5K run (Jan) + Beach Day (Feb); Rajkot heritage walk 3K; Indore 5K run; Bhopal sunrise yoga + 5K run; Gwalior walk up to the fort (event types are our proposal). Pune society plan cut to Jan-Mar. Added the Instagram post DfCF0v4hmxx (@letsplaygwalior, Sports Utsav Junior kids circuit, 31 Oct 6-9 pm) as tab media → `assets/img/gwalior-sports-utsav.jpg` (replaced local-love.jpg in that tab).
- 2026-10-28: **Store openings** tab: removed "720+ sports items in store" (and 2x Q1 spend, 5k Beach Fest, opening hours); copy, stats and plan now from the Surat section only: ₹85 L first 3 days, ₹2.5 Cr first 30 days, 49,600 walk-ins, ₹50 per walk-in; timeline plus the four key opening strategies.
- 2026-10-28: **Hoardings**: Ahmedabad added, 2 hoardings, ₹3.5 L a month for the two (user; split ₹1.75 L each in data, sites and photos to come, status live from Nov). Programme now 18 sites in 6 cities, ₹20.75 L a month, ₹41.5 L for Nov-Dec. Hoardings tab, hero ticker (18 hoardings) and Q4 runway chip (Gujarat and Bhopal: 11 hoardings live) updated.
- 2026-10-28: Surat: express delivery for Surat goes live 27 Dec (grand-launch phase and the playbook timeline). 2027 planner: "Our focus in 2027" strip: footwear marketing (very strongly), cricket, yoga. Q1 2027 conversion lever: test in the pipeline, a personalised page for Pune with Deepak and Nikhil for better conversion. Assets ?v=20261028o.
- 2026-10-28: Playground tab pictures were slow to appear (about 5 s on the live site, competing with page media); playbook tab images now load eagerly with high priority and all tab images are pre-fetched after page load. **Quick commerce**: express delivery is already live in Ahmedabad and Pune; Surat (Adajan) from 27 Dec (user). Removed stats 8 Cr home delivery and pick-up 66%, 3.3 Cr sell-at-store, 80 L express and affiliation, 30 orders a day; replaced by one target: **100+ express orders a day by Q1, at minimum** (user). WhatsApp tab's "30 express orders a day, target" also now 100+ (superseded: 30). **In-mall tab**: removed the clearance/winter-off picture, the 2-hour delivery picture, the title "Close the sale at the shelf" and its copy, and the "+0.5 pts mall-to-store conversion" stat; tab now shows only 11 L in-mall media Q4, 3 L in-store communication, 2 L flyers, then the in-mall live costs (Pune, Gujarat, MP, West a month) and the photos. **Q1 2027**: above Women's Day, two cards: Move Your Way: Movement for All, a complete fitness event across all 13 stores (January); Clearance sale animated at the stores (January, all 13 stores). Assets ?v=20261028p.
- 2026-10-28: Quick commerce tab picture replaced by the team's "Avail 2 Hour Quick Delivery" creative (user image, QR + Download the App, only for selected products and pin codes) → `assets/img/two-hour-quick-delivery.jpg`, shown whole on a matching blue. Where the Q4 budget goes: added a 4-step funnel strip (Awareness, Interest, Conversion, Loyalty) and a Funnel stage column, after the Mumbai cluster's "Q4 Marketing Funnel" and "Q4 Marketing Budget and Marketing Mix" slides (user shared; stages and roles only, none of Mumbai's numbers, per the user). Mapping (ours): Digital = Awareness + Loyalty (paid + owned/retention), Hoardings = Awareness, Influencers = Awareness + Interest, In-mall = Interest, In-store comms and flyers = Conversion, Store events = Interest + Loyalty, Partnerships and free products = Interest + Loyalty, PR = Awareness. Assets ?v=20261028q.
- 2026-10-29: **Digital YTD 2026** (`Digital_ytd_2026_data_.xlsx`, 5,538 rows: region x channel/store x 38 sports x month 1-10; columns turnover, quantity, customers, new, returning) → `DATA.digitalYTD` and a new dropdown under the campaign-wise spend ("Digital YTD 2026: Pune, Gujarat and Madhya Pradesh, with October"), charts animate in when it opens. Jan-Oct digital ₹44.93 Cr: Pune ₹20.15 Cr (44.9%), Gujarat ₹15.16 Cr (Rest of West ₹9.89 Cr 22.0% + Ahmedabad ₹5.27 Cr 11.7%), MP ₹9.62 Cr (21.4%); user's shares Pune / RoW 22 / MP 21 / Ahmedabad 11 match. Digital = 11.3% of ₹398 Cr total West turnover so far in 2026 incl. digital (user figure, 29 Oct). Channels: e-commerce ₹34.23 Cr (76%), digital orders booked to stores ₹10.62 Cr, marketplace ₹0.08 Cr; e-com share Pune 72%, Gujarat 80%, MP 80%. Monthly West (₹ L): 499.2, 349.4, 399.2, 461.2, 491.4, 477.9, 563.3 (July peak), 481.4, 400.0, 370.2 (Oct MTD, cut-off date not in sheet). Top sports YTD: Hiking ₹9.01 Cr, Fitness equipment ₹5.21 Cr, Cycling ₹4.04 Cr, Fitness outfit ₹3.93 Cr, Running ₹3.79 Cr. October so far: Hiking ₹71.6 L biggest; Cycling ₹48.8 L = 1.24x its Jan-Sep monthly average (MP 1.9x, Gujarat 1.18x, Pune 1.1x); Winter sports 1.09x; Camping 1.38x Sep. New-customer share Oct vs YTD: Pune 25.3 vs 21.5, Gujarat 35.2 vs 30.7, MP 38.2 vs 32.2 (counts are per sport line). Store-booked digital YTD: Wakad ₹1.84 Cr, Wagholi ₹1.35 Cr, Indore ₹1.05 Cr ... Gwalior ₹0.25 Cr; Applewoods ₹0.2 L in totals only. Funnel: Digital (MarCom) is Awareness + Conversion (user; superseded Awareness + Loyalty); Interest step now says walk-ins. Assets ?v=20261029b.
- 2026-10-29: Digital YTD dropdown: "1.1x" chips replaced by "vs usual month" percentages (October so far against the sport's Jan-Sep average month; e.g. Pune cycling ₹25.2 L vs ₹22.9 L = +10%); user asked what 1.1x meant. Added **returning customer rate** (returning / customers, from the sheet; new + returning = customers on all but 7 of 5,538 rows): Jan-Oct Pune 78.5%, Gujarat 69.3%, MP 67.8% (West 72.9%); October so far Pune 74.7%, Gujarat 64.8%, MP 61.8% (West 68.2%). Shown as a bar chart under "How digital sells" and on each October card. Assets ?v=20261029c.
- 2026-10-29: Digital YTD dropdown: removed the source/caveat footnote (user). User asked for **average frequency** instead of returning customers: the digital sheet has no order count and no unique-customer count (customers are counted per sport and month), so frequency cannot be computed from it; returning-customer chart left in place until the user sends frequency figures (asked). October recap: new row after the influencer shoot, **Pickleball across multiple academies, all of October: 754 participants, 524 walk-ins** (user; no investment shown, per the user), with the user's 40 s film (VID-20261029-WA0000, re-encoded → `assets/videos/pickleball-october.mp4`, poster from the neon-pickleball shot). Assets ?v=20261029d.
- 2026-10-29: **Video stutter fix** (user: pickleball, influencer and social videos getting stuck). Audit: all 36 mp4s are H.264 with faststart, so files were not the cause; reproduced at 3 Mbps: up to 8 visible videos downloaded at once (pickleball advanced 0.7 s in 8 s). Fix: one shared video gate in app.js (`window.vidGate`) for every video (hero phones, reels band, .sm-video films, playbook tab video, spotlights): only the 4 most-visible videos play at once (2 under 700 px), the rest wait on their poster; a video with sound on gets the connection to itself; paused videos that are still downloading release their download and resume where they were; a video with no playback and no download progress for 6 s is reloaded (max 2 tries). Playbook tab video now lazy (data-src) through the gate. Re-encoded the 10 heaviest videos (crf 28, max 750 kbps, 432 px wide for vertical reels, 854 px for wide films): pickleball 6.58 → 4.11 MB, process-vs 7.63 → 3.70, yoga-day 6.20 → 2.94, circuit-games 7.03 → 4.03, motera 5.74 → 3.58, winter-gear 4.93 → 3.26, kiprun 3.12 → 2.08, gujarat-state-2 5.42 → 3.57, run-like-a-girl 1.70 → 1.08, aop-wall 1.19 → 0.83. Verified: at 3 Mbps every visible video advances; walking all 40 videos one by one on desktop and phone, all play (2 hero phones hidden on phone by design). Assets ?v=20261029e.
- 2026-10-29: AOP Q4 check (user said the Q4 new numbers looked wrong). User confirmed the AOP store table starts **November 2026** (the earlier assumption is now confirmed). Recalculated every store: Q4 new = Nov + Dec = 114 (Nov 53, Dec 61; Pune 22+27 = 49, Gujarat 19+21 = 40, MP 12+13 = 25), cost ₹25.04 L; unchanged. The confusion was that AOPs already live also total 114 (6 stores). Labels clarified: table columns "Already live / New in Nov / New in Dec / New in Q4", lead line "114 new AOPs open in Q4 ... on top of the 114 already live", tab stats "114 new AOPs opening in Nov and Dec" and "114 already live today, 6 stores", runway chip "New AOPs, Nov-Dec: 114 (Pune 49, Gujarat 40, MP 25)". Assets ?v=20261029f.
- 2026-10-29: **My Store pages** (user: each store's page on decathlon.in is its "My Store" page, e.g. https://www.decathlon.in/store/motera). New Marketing playbook tab "My Store pages", placed just above WhatsApp. Data read from the site's own store list (Contentful content type ourStoreList / ourStore, 133 stores in India) → `window.MY_STORES` in data.js; slugs: wakad, wagholi, sgsmall, nibm, amanoramall, motera, nexusahmedabad, dumas (Surat), vadodara, rajkot, indore, bhopal, gwalior. Per store: address, Monday hours, Google rating and review count, store leader. Ratings: Wakad 4.5 (25,610), Wagholi 4.6 (14,423), SGS 4.7 (10,430), NIBM 4.9 (5,116), Amanora 4.7 (7,338), Motera 4.6 (15,795), Nexus 4.6 (5,959), Surat 4.5 (11,557), Vadodara 4.6 (19,702), Rajkot 4.8 (2,042), Indore 4.5 (12,743), Bhopal 4.9 (1,400), Gwalior 4.8 (1,612); average 4.67, total 1,33,727 reviews. Leaders: Faiz Mitha, Pankaj Khot, Ajinkya Nimbalkar, Adrine Varghese, Pravin Rajan, Sumit Sahni, Bhanu Pratap, Rishi Joshi, Ayusman Sahu, Abhishek Pandya, Kuldeep Singh, Anjali Pandey, Langston Vareed. Glimpses: screenshots of the top of each page (1280x800, saved 640 px) in `assets/img/mystore/`, each card links to the live page. Grid 5 across on desktop, 2 on phone. Assets ?v=20261029g.
- 2026-10-29: My Store pages tab moved above "Meta, app and landing pages" (user). Playbook tab order now: Hoardings, AOP, Playground activation, Quick commerce, Events and community, Store openings, Influencers, In-mall and in-store kit, My Store pages, Meta/app/landing pages, WhatsApp. Assets ?v=20261029h.
- 2026-10-29: **Overall West turnover 1 Jan - 25 Oct 2026 = ₹410 Cr** (user), including B2B, digital and marketplace; supersedes ₹398 Cr. (₹398 Cr on the page was the sum of in-store turnover in the 8 store cities, ₹397.54 Cr; the user's earlier "398 Cr including digital" is superseded too.) Why the West: headline now "₹410 Cr overall turnover ... including B2B, digital and marketplace, against a ₹8,550 Cr sports market in our 8 store cities for the same days: 4.8%" (was 4.6% on in-store); city rows stay in-store (footnote says ₹398 Cr across the 8 cities). Digital YTD dropdown: digital ₹44.93 Cr = 11.0% of ₹410 Cr (was 11.3% of ₹398 Cr). Assets ?v=20261029i.
- 2026-10-29: Question only, no site change (user: digital share offline vs online per BU). Digital YTD (Jan-Oct) vs in-store 1 Jan-25 Oct: Pune ₹20.15 Cr vs ₹198.93 Cr = 9.2%; Gujarat ₹15.16 Cr vs ₹144.41 Cr (Ahmedabad 76.39, Surat 31.63, Vadodara 28.98, Rajkot 7.41) = 9.5%; MP ₹9.62 Cr vs ₹54.20 Cr (Indore 26.13, Bhopal 22.14, Gwalior 5.93) = 15.1%; West ₹44.93 Cr vs ₹397.54 Cr = 10.2%. Excluding digital orders booked to stores (e-com + marketplace only): Pune ₹14.48 Cr 6.8%, Gujarat ₹12.09 Cr 7.7%, MP ₹7.74 Cr 12.5%.
- 2026-10-31: **Adajan hoarding map** (user shared artifact https://claude.ai/artifact/KjC3d6kGs7wYJ2sCGozgw6, "Adajan Hoarding Map": pre-opening outdoor plan for DSI Adajan, Pacific Solitaire, L.P. Savani Rd; sources: Master and Opening Plan workbook, Where We Play guide, OOH Landscape Case Study 2026, Media Ant listings, Google pins). New dropdown in the Surat section, just before "All 28 strategies": priority line (B Madhuvan Circle 86, E Cable Bridge 85, A Shell L.P. Savani Rd 80, C Sardar Bridge 66, G Rander Rd 57, F Anand Mahal Rd 57; scores 0-100 without cost; rates B ₹5,400/day offer (base ₹5,940), E ₹3,940/day, C ₹7,875/day, G ₹2,170/day, F ₹46,000 period unclear, A not listed), Leaflet street map with both stores marked (Adajan 21.1883, 72.7893; Dumas Road 21.11868, 72.73562), boards, 5 crowd hotspots (Madhuvan to TGB core strongest: 8 IT, 8 sports, 7 housing/school sites within 0.5 km), 148 catchment places (sports, IT, schools/housing), 2 busy roads, Nike/adidas/Puma, 1.4/4.2/5.6 km rings; layer toggle; views "Adajan and its boards" (default) and "Both stores"; board table and hotspot list; link to the full artifact. Data in `window.ADAJAN` (data.js). **Store pins corrected**: Dumas Road store was 21.145, 72.758 (approximate) → 21.1187, 72.7356 (Google place from its My Store page, ~3.8 km off before); Adajan pin in the hoarding-programme Surat mini map 21.1960, 72.7930 → 21.1883, 72.7893 (artifact). Dumas to Adajan 9.3 km straight line. Assets ?v=20261031b.
- 2026-10-31: **Krishna 360 Media LLP outdoor proposal** (OOH_Proposal_31-10-26.pdf and OOH_Pics_31-10-26.pdf, 22 photos): 22 Surat billboards, ₹60,000 - ₹2,25,000 a month, 18% GST extra, monthly in advance, no cancellation, availability 1-13 Nov 2026. Added to the Adajan hoarding map dropdown: map layer with every site (vendor photo in the pop-up, `assets/img/k360/site-NN.jpg`), booked Pal Umra board marked ✓, view "All vendor sites", ranked table and a suggestion. Pins: GPS from photo stamps for sites 14, 16, 17, 18; known pins for 3, 8, 9, 13, 19; the rest approximate from the named road. Our score /100: crowd within 1 km from the Adajan register 40, closeness to Adajan 25, near a hotspot 15, size 10, faces L P Savani 10. Top: 1 LP Savani nr Nirmal Hospital 79, 10 Pal walkway Galaxy Circle 76, 16 Galaxy Circle 72, 6 Honey Park Rd 71; bottom: 7 Jilani Bridge 8, 17 Morabhagal 7. **Suggestion: book sites 1 (₹1.25 L), 9 (₹1.25 L, = board E on the hoarding map) and 16 (₹0.80 L) = ₹3.30 L a month**; add 8 Sardar Bridge (1,200 sq ft, ₹2.25 L, ₹188/sq ft) for scale = ₹5.55 L; back-ups 6 and 10; skip 5 and 21 (next to the booked Pal Umra board), 7 and 17 (4+ km out), 4. Assets ?v=20261031d.
- 2026-10-31: **No hoarding is booked in Surat yet** (user). Superseded: Pal Umra Bridge board "booked through to October 2027". HOARDINGS Surat status now "plan" (card tag "Not booked yet"); programme footnote now says nothing is booked in Surat, Pal Umra planned for a year (₹22.8 L), Krishna 360 proposal under review; Adajan map marks it "P, planned, not booked"; Krishna 360 text: sites 5 and 21 are on the planned Pal Umra stretch, pick one. **Whole-city view** added to the Adajan hoarding map (user: city hotspots, not only the Decathlon catchment): button "Whole city: hotspots" shows only city hotspots and both stores; 26 city hotspots in `window.ADAJAN.city` (homes: Katargam 6.46 lakh people, Rander 2.5 lakh, Adajan-Pal, Vesu-VIP Rd, Piplod, Varachha, Mota Varachha-Sarthana, Udhna-Limbayat, Dindoli, Althan-Bhatar, Palanpur-Jahangirpura; work: Ring Road textile markets, Varachha diamond hub, Surat Diamond Bourse, Pragati IT Park, Hazira, Pandesara GIDC, Sachin GIDC; shopping/leisure: Rahul Raj Mall, Citylight, Gopi Talav, Dumas Beach, Sarthana park; stations: Surat station, Udhna Jn, airport) + 8 city sports venues by Google reviews (Indoor Stadium Athwalines 4,676 ...). Pins from OpenStreetMap (area pins are central points). List below the map with distance to the nearest Decathlon, and a note: biggest crowds without a Decathlon nearby are Katargam, Varachha and the Ring Road markets (5-9 km from both stores); city boards there = awareness, express delivery and app. Assets ?v=20261031e.
- 2026-10-31: Whole-city view now also shows sports clubs, academies and venues, schools and housing, crowd hotspots and Nike/adidas/Puma across Surat (user). Added from OpenStreetMap (Overpass, 31 Oct 2026, bbox 21.07-21.29, 72.70-72.94): 15 sports places and 78 schools, colleges and housing not already in the Adajan register (deduped within 150 m); ADAJAN.pts now 241. City view hides only the hoarding layers (planned board, vendor sites, rings, roads, boards). OSM has no Nike/adidas/Puma stores in Surat and Nominatim found none; only the 3 on L.P. Savani Rd (Adajan map) are shown. OSM coverage outside Adajan is thin (23 named sports places, 39 schools/colleges city-wide), so the west looks denser than it is. Assets ?v=20261031f.
- 2026-10-31: **City crowd hotspots computed for the whole of Surat** (user: they were missing; schools incomplete). Source: OpenStreetMap via Overpass, 31 Oct 2026, fetched in 4 tiles: 1,809 places (≈1,500 everyday places: shops, eateries, banks, clinics, offices, bus stops; 157 schools/colleges/universities/pre-schools/institutes; sports places; housing at weight 0.7). Smoothed over 0.5 km on a 100 m grid; 12 strongest peaks ≥1.6 km apart (OSM only, so the Adajan register does not tilt it). Ranked: 1 Railway station and Delhi Gate (100 places within 1 km, 5.4 km to nearest Decathlon), 2 Athwa and Ghod Dod Rd (128, 2.9), 3 ONGC colony and Magdalla by the airport (62, 2.4), 4 Hirabag and Varachha diamond hub (74, 8.0), 5 Adajan, Honey Park and L.P. Savani (84, 1.2), 6 Yogi Chowk and Sarthana (61, 10.6), 7 Vesu, VIP Rd and Althan (73, 4.0), 8 Citylight and Athwalines (61, 2.0), 9 Salabatpura and Saiyedwada old city (57, 3.8), 10 Limbayat and Udhna east (55, 7.9), 11 Rander (56, 2.9), 12 Katargam (50, 5.4). Area names approximate (nearest OSM place / reverse lookup). Data `window.ADAJAN.cityHot`; red numbered layer "Crowd hotspots, whole city" in the city view, list under the map. Schools: +64 schools/institutes from OSM (deduped), ADAJAN.pts now 305. The 5 Adajan hotspots layer renamed "Crowd hotspots, Adajan catchment". Assets ?v=20261031g.
- 2026-10-31: User asked "Done?"; confirmed the city hotspot and schools update is live (?v=20261031g). No new data.
- 2026-10-31: **Shah Publicity outdoor offers** (Jeel Thakkar, to Rishi, Decathlon Surat; refs SP/1026/174 and SP/1026/143; files Adajan__Decathlon_31-10-2026.xlsx + photo deck, Vesu__Decathlon xlsx + pptx, LED_Decathlon xlsx + pptx): Adajan 16 sites (list ₹90,000 - ₹9,00,000, discounted ₹65,000 - ₹7,51,000 a month, incl. FOB 100x20 at ₹7.51 L and two cable-bridge gantries 60x10 at ₹2.51 L; Madhuvan Circle facing TGB 20x10 at ₹95,000 = board B of the hoarding map; Arzees Circle GPS 21.19023, 72.79634), Vesu 7 (Pal Umra flyover 40x20 ₹2.00 L = the board we had planned at ₹1.90 L; VIP walkway boards and gantries ₹1.25 L - ₹3.25 L), LED 2 (Vesu VIP walkway Jivraj Circle 20x10 and Piplod Rahul Raj junction 20x15: ₹50,000 a month, ₹45,000 on a 1-year deal, 10-sec spot, 2-min loop, ~480 plays/day, 8 am-midnight). Advance payment, 18% GST extra. Same boards as Krishna 360 at the same rate: Prime Arcade junction (K3 = S5), Honey Park Rd (K6 = S6), Adajan D-Mart (K2 = S9); the Pal walkway Galaxy Circle photo (PGCFKM) appears in both decks. Photos → `assets/img/shah/`. All 47 offers now in `window.ADAJAN.vendors`, re-scored on one city-wide scale (OSM everyday places within 1 km 40, nearest Decathlon 25, near a hotspot 15, size 10, back-lit/LED 10) and grouped by catchment (Adajan 35, Vesu and Dumas Road 10, City 2). Supersedes the Krishna-only ranking and suggestion. **New suggestion: 6 boards, ₹6.20 L a month before GST**: Adajan S11 Madhuvan Circle ₹95,000, K20 Honey Park Rd by D-Mart ₹85,000, K9 cable bridge facing L P Savani ₹1.25 L; Vesu S24 LED Jivraj Circle ₹50,000, S17 Pal Umra flyover ₹2.00 L; City K7 Jilani Bridge facing Katargam ₹65,000. Skip S14 FOB, S13, S15, S16 (cable-bridge gantries at twice K9), S20-S23 (VIP walkway ₹3 L+, ~₹750/sq ft), K21/K5 (same Pal Umra stretch as S17), K4, K12, K17. Map: one layer "Vendor offers, Krishna 360 and Shah" (Shah pins dashed), new view "Vesu catchment"; tables per catchment with list and discounted rates. Assets ?v=20261031i.
- 2026-11-05: **New separate page `november.html`, "November 2026 marketing update"** (user), reached from a new dropdown "Nov 2026 update" at the right of the main top bar (links to each section). Own script `assets/js/november.js` (content + a light video player, max 3 playing, one sound). Sections: **Diwali** 2026 (India): Dhanteras Fri 6 Nov, Choti Diwali Sat 7, Diwali/Lakshmi Puja Sun 8, Govardhan Puja and Gujarati New Year Tue 10, Bhai Dooj Wed 11 (web sources; Govardhan/Bhai Dooj vary by panchang); live so far: Diwali sale 31 Oct-1 Nov (₹5.5 Cr target, ₹4.7 Cr LY), Gift a Sport 1-30 Nov, Diwali campaigns Gujarat ₹3.63 L / MP ₹2.87 L, 7 Pune hoardings, 114 AOPs live, Diwali reels; **content recycling** (user): Gujarat content reused in MP, best MP content reused in Gujarat, same with Pune. **Social media**, city pages as of 5 Nov (public profile embeds): @letsplay_ahmedabad 7,203 followers / 266 posts; @letsplaysurat 10.6K / 342; @lets_play_baroda 4,178 / 360; Rajkot: no Let's Play page found; @letsplaypune 3,653 / 264; @lets_playindore 4,339 / 99 (@letsplayindore is an empty duplicate); @letsplaybhopal 259 / 46; Gwalior is now @letsplayygwalior 24 / 3 (old @letsplaygwalior link broken). New reels (user links): Gwalior DfXGxBSNynn ("why gift mithai"), DfUWnpNtb7g, DfPRG2rNlj2 (photo); Indore DfU25F5ADdQ (photo); influencer @__.bhavya DfPVVJkI_wa ("Celebrate Diwali, the Decathlon way"). **Influencers done** (user): Gujarat 13 for ₹1.3 L with Akshat, Indore 4 on barter, Bhopal 4, Gwalior 2 with a gift card each (videos to come). **In-store comms**: 13 stores listed, photos to come. **Black Friday 27-30 Nov** influencers, none finalised: Surat 25, Ahmedabad 30, Rajkot 12 (by Mon 9 Nov), Baroda number not given → Gujarat 67+ for ₹7.4 L; Pune 40 for ₹4 L; Indore 15, Bhopal 15, Gwalior 10 (MP 40, budget not given); 147+ in all. Stories: countdown 4/3/2 days left (27/28/29) and last day 30; first come first served, limited stock, benefits only till 30 Nov; membership points; **40% not communicated yet: waiting for the Marcom brief, then check whether to show a percentage or something else** (user); 2 draft stories → `assets/img/nov/`. **Walk-in events** (user suggestion): Black Friday morning partner events (cycling, running, yoga or school kids) with at least 1,000 walk-ins per store, if stores agree: Baroda, Indore, Wakad, Amanora, Wagholi, SGS ₹30,000 each, NIBM ₹20,000 = ₹2.0 L. Assets ?v=20261105e.
- 2026-11-05: November page edits (user): Black Friday heading now "Black Friday influencers" with the date tag 27 - 30 November; section restyled in the black comms look (black background, bold white type, blue swoosh, dark table and cards). Statuses: Gujarat and MP "to be finalised by Monday 9 Nov"; Pune "cross-checking with the vendor; likely done by Tuesday 10 Nov" (superseded "to finalise"). User asked for the latest 4-6 videos from every city page: could not be fetched (Instagram's public embeds do not list a page's latest posts, and reading the profile feed through a browser session was refused as bot-check circumvention); asked the user for the reel links. Cards keep the reels already on file meanwhile. Assets ?v=20261105f.
- 2026-11-05: November page, round 3 (user): **latest posts on every city card** read from each page's public profile grid (normal visit) and fetched via the public embed: Pune DfWc3lrALwl, DfUg1stSYDY, DfRwSCQMThb, DfQCQKltWXg, DfPckVPtYok, DfOjP_Ega2u (mostly creator collabs); Surat DfH4ZLHtzTY, DfFUtI_tj0d, DewQ1znDYeS, DeosStPNuxE, DehJUqQtsej, Dd8J7lzNngs; Ahmedabad DfWmPyARQTi, DfTvKjJMMEv, DfR5JF9xhnU, DfARs-kRF7G, De4J7EvhdBz, DezBlWXjO_i; Baroda DfErMzJoxFv, DewTiKNIDpW + 4 Gujarat collabs on its grid; **Rajkot page found: @play_rajkot, 3,676 followers, 187 posts** (DfT8OR-ML-9, Deq8s6ms1G5 + collabs); Indore DfU25F5ADdQ, DfUWa1cAFwo, DfSWm7UAH3K, DfRxzv1zGEc, DfPoeqygHml, DfMvGGDTaaV; Bhopal DfXLqoETY1p, DfRyd7KTa0b, DfPVVJkI_wa, DfM09PzqoXZ, DfMvv1cuhKa, DfG-yANhDpg; Gwalior all 3. Gujarat pages share collab reels. **In-store comms photos**: Bhopal 5 (entrance diyas and balloons, Gift a Sport rangoli, welcome desk garlands, team, camping corner) and Motera 5 (Gift a Sport light box outside, ball wall from ₹399, ₹899 cricket combo gondola, archery and darts wall) → `assets/img/nov/`; both marked "Diwali comms live". **Diwali design** after the team's Diwali Gift a Sport creative: royal blue, gold "Diwali" + white "Gift a Sport", animated string lights, swaying lanterns, flickering diya (reduced-motion respected), on the Diwali and in-store sections. In-store message (user's idea): "It all starts in the store": going beyond profit, margins and bottom line; Decathlon is a people brand; celebrate festivals with teammates and every family that steps in; gifting culture starts in stores; small investments that say we are with you; Happy Diwali. Assets ?v=20261105g.
- 2026-11-05: **No Diwali sale in stores this year** (user): "31 Oct - 1 Nov Diwali sale" removed from the November page's Live so far, replaced by a short brief (no sale, Gift a Sport instead; in-store comms Bhopal and Motera; influencers 23 so far; Diwali reels on all 8 pages; content recycling; Pune hoardings and AOPs; Black Friday influencers by 9-10 Nov). **Influencer reels live** (user links): Gujarat (Ahmedabad and Baroda tabs) DfHm1Z2vrbd @hetansh_shahh 47.6K views, DfHJeAntkw4 @aishwaryaradhani 44.9K, DfG0V96gt7T @ayushithakkarrr 37.7K, DfG2BaXNPLH @monikacreatescontent 23.3K, DfHEdoasy0O @kashii__w 4,241, DfG8IBLiePI @vadodara_foodiesisters 3,611 (≈1.61 lakh); Bhopal DfMvv1cuhKa @bhopal_events_update 14.6K, DerYOikTLww @jasminethakurr 11.3K, DfPVVJkI_wa @__.bhavya 6,361, DfPFRE0KFpO @wassup_bhopal (views not shown) (≈32.3K); ≈1.93 lakh in all. **Reel views** (user asked views, shares, saves): views read from each page's public Reels tab on 5 Nov → `window.IG_VIEWS` (data.js), shown as a small pill under each reel on the November page and on the October recap reels (e.g. Surat DehJUqQtsej 2.66 lakh, Rajkot/Ahmedabad Dej2y30sNG8 2.46 lakh). Shares and saves are not public (owner Insights only); only a page's latest 12 reels show views. november.html now loads data.js. Assets ?v=20261105h.
- 2026-11-05: In-store comms: the 11 stores without Diwali comms now read "Not up yet" (user: they have not put them up; say it nicely, short). New influencer reel (Indore): DfXGo04OAM4 by @taste_budds (Riya & Atishay, Indore food and travel, 17K followers), 1,793 views on 5 Nov (posted that day); added as an Indore group in Influencers. Assets ?v=20261105i.
- 2026-11-05: Surat (Dumas Road) in-store comms photos (user): Diwali gift tower with Decathlon-wrapped gifts, Happy Diwali ribbons and toran; Gift a Sport winter stand with padded jackets ₹1,999 and gloves → `assets/img/nov/surat-instore-1..2.jpg`; Surat marked "Diwali comms live" (3 of 13 now: Bhopal, Motera, Surat). Other stores now read "Not putting them up" (user; superseded "Not up yet"); Live so far in-store line updated. **Fireworks** added to the Diwali and in-store sections (canvas: gold, saffron, white, pink, sky bursts from the sides, only while on screen, off for reduced motion). Assets ?v=20261105n.
- 2026-11-05: User said "Stop"; no new data or changes.
- 2026-11-06: **Black Friday influencer budgets, MP** (user): Bhopal ₹70,000, Indore ₹1 L, and "Black Friday sale ₹32,000" read as **Gwalior** (to confirm) = MP ₹2.02 L; all Black Friday influencers ₹13.42 L (Gujarat ₹7.4 L, Pune ₹4 L). **Nov / Dec budgets** (user): Gujarat ₹20 L / ₹21 L; MP ₹9.86 L / ₹11 L; Pune ₹17.98 L / ₹18.534 L. New section "November and December budget": committed = hoardings (booked sites a month: Pune ₹9.35 L, Gujarat ₹7.95 L = Ahmedabad 3.5 + Baroda 1.65 + Rajkot 2.8, MP ₹1.55 L Bhopal; planned Surat ₹1.9 L not counted) + influencers in November (Gujarat ₹8.7 L = BF 7.4 + Diwali 1.3 done; MP ₹2.02 L; Pune ₹4 L; December not planned) + in-store comms ₹50,000 a store a month (read as per store per month; Gujarat 5, MP 3, Pune 5 → ₹2.5 / 1.5 / 2.5 L). **Left to plan** (highlighted): Gujarat Nov ₹0.85 L, Dec ₹10.55 L; MP Nov ₹4.79 L, Dec ₹7.95 L; Pune Nov ₹2.13 L, Dec ₹6.68 L; total ₹32.95 L of ₹98.37 L. If walk-in events go ahead, Nov left falls by Pune ₹1.4 L, Gujarat ₹0.3 L, MP ₹0.3 L. **Q4 turnover goals** from `Q4_CAMPAIGN_WISE_TURONVER_GOAL_.xlsx` (SD piloting sheet): per store Q4'26 challenge, piloting, BFS 2025 vs Black Friday 2026 goal, Christmas 2025 vs 2026 goal, Kiprun shoes incremental, Kids Utsav. West: Black Friday ₹12.34 Cr (+16%), Christmas ₹17.49 Cr (+2%), Kiprun ₹1.37 Cr, store challenge ₹154.75 Cr; Pune BF ₹5.89 Cr / Xmas ₹7.91 Cr, Gujarat ₹4.86 / ₹6.75 Cr, MP ₹1.59 / ₹2.83 Cr. Sheet's Diwali sale (30 Oct-1 Nov) column left out (no Diwali sale). Galleries: reel rows glide on their own when wider than the screen (pause on touch/hover), short rows centred (Gwalior, Indore); in-store photos with 4+ shots loop as a slideshow (Bhopal, Motera), Surat's 2 centred. Nav and main-page dropdown gain Budget and Turnover goals. Assets ?v=20261106c.
- 2026-11-06: Budget now **November only** (user; December removed). **Gujarat influencers ₹7.4 L** (user; superseded ₹8.7 L with the ₹1.3 L Diwali). Hoarding costs re-checked against `2026_WINTER_HOARDING_PGM-compressed.xlsx`: Pune 7 sites ₹9.35 L, Baroda 4 ₹1.65 L, Rajkot 2 ₹2.8 L, Bhopal 2 ₹1.55 L, Surat Pal Umra ₹1.9 L (not booked, excluded), Ahmedabad "yet to come" in the sheet (₹3.5 L for 2 boards per user) → Gujarat ₹7.95 L, matches. November left to plan: **Gujarat ₹2.15 L** (20 - 7.95 - 7.4 - 2.5), MP ₹4.79 L, Pune ₹2.13 L; West ₹9.07 L of ₹47.84 L (hoardings ₹18.85 L 39%, influencers ₹13.42 L 28%, in-store ₹6.5 L 14%, left 19%). Budget and Q4 turnover goals merged into one section at the end of the page ("November budget and Q4 goals", after walk-in events), with a donut for the West, a labelled stacked bar per business unit (new colours: hoardings navy, influencers pink, in-store teal, left gold) and a 2025 vs 2026 goal chart for Black Friday and Christmas per business unit. Nav and main dropdown: one "Budget and goals" link. On phones the budget bars run full width without in-bar labels. Assets ?v=20261106f.
- 2026-11-06: Budget section headline row (user): **total November budget ₹47.84 L** (Gujarat ₹20 L, MP ₹9.86 L, Pune ₹17.98 L), ₹38.77 L committed, ₹9.07 L left to plan. Assets ?v=20261106g.
- 2026-11-06: Surat (Dumas Road) in-store comms: 2 more photos (shop window with marigold garlands; entrance doors with marigold torans and lotus lanterns) → `assets/img/nov/surat-instore-3..4.jpg`; Surat now 4 photos, shown as the looping slideshow. Assets ?v=20261106h.
- 2026-11-06: **Download this page** footer bar on both pages (index.html before the tip, november.html after the footer): *Download PDF* = the complete page you are on, A4 portrait pages, dropdowns opened, videos shown as their poster stills, animated charts at their end state; *Download GIF* = an animated scroll through the whole page (≤720 px wide, ≤90 frames, 0.65 s per frame). Built in `assets/js/export.js` with html2canvas 1.4.1, jsPDF 2.5.1 and gif.js 0.2.0 from cdnjs (SRI pinned), loaded only on click; files named `<page title>-<date>.pdf/.gif`. Tested locally: November PDF 3.3 MB / GIF 2 MB in ~4 s; main-site PDF 9.3 MB, 24 pages, ~12 s; no console errors at 1440 and 390 px. "GIF pdf" read as an animated GIF (open question in section 5). Pushed to the repo without chasing the Vercel deploy (user). Assets ?v=20261107a.
- 2026-11-06: PDF download fixed (user: black lines in the middle, pages split; "download everything as it is"). The black lines were the PDF viewer's background showing between A4 pages, and sections were stacked without the gaps between them. Now the PDF is **one continuous page shaped like the website** (width = the browser width, no page breaks), each section placed at its exact position on the page with the page background in the gaps, drawn in 2,000 px strips that overlap by 2 px so no seam shows (checked: no brightness change at the joins). Very long pages are scaled to fit the 14,400 pt PDF page limit (main site: 621 x 14,400 pt). Tested: November 6.7 MB, main site 15.4 MB, 1 page each, no console errors at 1440 and 390 px. GIF uses the same layout. Assets ?v=20261107b.
- 2026-11-09: **New page plan2027.html, "2027, sport by sport"** (user): quarter switch (Q1 / Q2 / Q1 and Q2, sticky; also via #q1, #q2, #h1) drives the whole page. Calendar in the 2027 planner's format cut to the quarter (same lanes and chips, month header with West ad budget and AOPs) plus 7 sport lanes (running, fitness, cycling, mountain, swimming, cricket for Gujarat, pickleball); pick a month for a panel with budget and AOPs by state, the month's moves and each sport's plan. Sports: at-a-glance table (2026 online turnover same quarter → 2027 goal, growth, budget, AOPs) and a card per sport (idea, numbers, 2026 turnover by BU, Jan-Oct monthly bars, budget and AOPs by state, what we do per quarter). Strategies: Q1 goals (12.1%, ₹8.3 Cr, 3.7 L bills, 33%), then month columns (title, budget, AOPs, sport of the month, moves, each sport). Main site: "2027 plan" dropdown in the top bar and a button under the 2027 planner; on phones the two top-bar menus shorten to "Nov update"/"Nov" and "2027" and the Present button hides below 560px (it was already off screen). Tested 1440 and 390 (and 360): no console errors, no horizontal scroll. Assets ?v=20261109a.
- 2026-11-09: **Saved the swimming and sport-wise uploads** (user: "save this data for now and wait for my command"; nothing on the site changed): Tableau sport-wise YTD 2026 (all channels, by cluster, channel, sport, month), two Tableau water-sports screenshots, SS 2027 Pune water sport plan, The Great Indian Swim Project (docx + 22-slide PDF), Pune partnerships + schools. Section 3 rows, section 4 "Swimming and water sports 2027", section 5 discrepancies (Wakad outstore sum, FT count, 17.65 Cr base, budget overlap, online vs OutStore).
- 2026-11-09: **New page water2027.html, "Make your catchment swim, week by week"** (user: quarter-wise, week-wise water plan with in-store, outstore, digital, influencers, hoardings, go-live, AOPs per store for every store and city, ideas and turnover share by sport at the bottom of the calendar). New files water27.js, share26.js, water2027.js; `.w27-*` CSS. Saved the Gujarat water plan, India Strategic A4 and India Swimming Project deck (section 3 and 4). Links: "2027 plan" dropdown item, button under the 2027 planner, link on plan2027 above the sports table. Tested 1440 and 390 in all 5 quarters and 4 state filters: no console errors, no horizontal scroll. Assets ?v=20261109b.
- 2026-11-09: **2027 page now shows in-store (offline) + online turnover** (user: "I only see online"; sent 2 MARCOM calendar photos as samples): sports27.js SPORT_TOV_2026 replaced by SPORT_TO_2026 (Tableau, in/on split); KPI, glance table (share of all turnover, in-store / online), cards (state bars and monthly bars split) and copy updated; new "What the 7 sports sell, month by month" block under the calendar with Money time line, ad budget line, stacked shares and ₹/% table. Mountain idea now "Our biggest sport". Tested 1440 and 390: no console errors, no horizontal scroll. Assets ?v=20261109c.
- 2026-11-09: **2027 page made into a playbook** (user: Q1 budget priorities, playbook look, pictures and videos, weather by state, schools and kids, AOPs store-wise): new sections Season (3 state cards with film, weather bar, kids, what it means for us; follows the quarter switch), Q1 marketing playbook (budget overview by month and campaign with state switch, sport budget vs sales share, channel split, 9 campaign tabs with media, hoardings / influencers / social / boost, channel bar and international films), AOPs store by store (Q1, Q2, cost, mix, Pune named places), Decathlon around the world (13 official films, click to play), summer photo strip in the hero. Sport cards' Q1 budget now from the playbook (KPI ₹1.47 Cr sport-led). Palette checked with the dataviz validator (adjacent stack orders pass). Tested 1440 and 390: no console errors, no horizontal scroll. Assets ?v=20261109d.
- 2026-11-10: **Nov + Dec page, Pune plan, pyramid, media** (user brief 10 Nov): november.html now "November and December 2026" with new sections December (Christmas Sale creative, Christmas gifting videos continue, Winter & Travel, key numbers), Pune runway W45-W53 (Pune only: sales, campaigns and gifting, influencers, in-store/mall/coupons, hoardings, AOPs, city events, social), Pune's money line by line (Nov + Dec), influencer timeline, AOP money per store, AOPs Nov-Dec every store, How we do marketing (pyramid). plan2027: holidays Q1 updated in PLANNER (also on the main site), Pune plan lane (events + influencers) in the calendar, pyramid at the top of the playbook, Q1 channels switched to Pune's real lines with Pune's split shown, Movement for All renamed and Pune lines per campaign, Pune real plan Jan-Mar, influencer timeline Nov-May + 2026 tracker, AOP money Jan-Apr, new section One flagship event (Sports Utsav 2026 results per store + photos); campaign media from Sports Utsav, Drive films and the water deck. water2027: summer photo strip in the hero, new section Be one with water (4 product films, 7 pictures, 2025 lessons), Pune academies go-live (20 Feb) and summer influencers in the calendar. Tested 1440 and 390 on all 4 pages: no console errors, no horizontal scroll. Assets ?v=20261110a/b/c.
- 2026-11-05: User asked how to run the site locally; answered with the static-server steps (Python 3.11.9 is installed; port 8777 since 8765 is used by another app). No site changes.
- 2026-10-25: No new data. Local preview server (port 8765) stopped; restart with `python -m http.server 8765 --bind 127.0.0.1` when needed.

---
- 2026-11-10 (second batch): November page rebuilt as four campaign frames (Diwali, Black Friday, new Winter, Trek & Travel section with hoarding updates and Baroda's live photos, Christmas with December content for Christmas, Winter, Trek & Travel), each with a frame tag (Pune budget, share, goal) and a line-by-line Pune panel; hero shows the frames; summary section at the end; walk-in events moved into a dropdown inside Black Friday; Black Friday amounts under a lakh shown as ₹70K / ₹32K. Page tabs (West plan, Nov & Dec 2026, 2027 plan, Water 2027) in the top bar of november, plan2027 and water2027; main page Nov menu renamed "Nov & Dec 2026" with the new anchors and a "Pune only" link to plan2027#pune. plan2027: region tabs Pune / West / MP / Gujarat drive the whole page (hero, calendar, month panel, sports, cards, share chart, strategies, season, playbook, AOPs, Sports Utsav; Pune-only blocks hidden for Gujarat and MP; hash #pune, #gujarat, #mp); new Q1 moments section (Movement for All, clearance sale, new arrivals, Women's Day with store formats, summer; Q1 budget per region and Pune spend-plan lines) and Influencers 2027 section (18 campaigns, timeline, the sheet in a dropdown). New assets/js/moments27.js, assets/img/hoard/. HOARDINGS: Baroda live with photos; main-page hoarding stats updated. Versions: site.css 20261110d, data.js and app.js 20261110b, november.js and nd26.js 20261110b, plan2027.js 20261110b, playbook27.js 20261110d, moments27.js 20261110a. Checked at 1440 and 390: no console errors, no horizontal scroll.
- 2026-11-10 (full site read, user: "read the entire website in great detail and store each piece of content in context.md"): rendered all four pages (index, november, plan2027, water2027) in Chromium at 1440 px, opened every dropdown and clicked every tab, month, week, quarter (Q1 / Q2 / Q1 and Q2; Q4 2026 to Q4 2027) and region / state switch (Pune, West, MP, Gujarat; All stores), and saved every piece of copy, number, chart label, table row, image, video and film link as **Appendix B** (page by page, section by section, variants listed as "After clicking ..."). Also: section 1 now lists the structure of all four pages; section 5 gained the cross-page points found (Pune hoardings "7 live" vs "not updated yet", Diwali sale still on the main page, "80+ local influencers" source) and the Surat 18-20 Dec line is marked superseded by 27 Dec. No site files changed (context.md is not deployed).
- 2026-11-10: PR abhishekmitraaa/decathlon-west-plan#1 (branch claude/zen-sagan-uy2cqw, context-only change): Vercel built preview deployments, both READY, from **two** Vercel projects connected to this repo: `decathlon-west-plan` in team abhishekmitraaas-projects (the known one) and a second `decathlon-west-plan` in team **anandita-work** (preview decathlon-west-plan-git-claude-zen-sagan-uy2cqw-anandita-work.vercel.app). Noted in section 5.
- 2026-11-10: PR abhishekmitraaa/decathlon-west-plan#1 at 6bfcdc3: both Vercel previews rebuilt and READY, all checks passed, no review comments. No new data.
- 2026-11-10: Vercel bot status updates only on PR #1 (previews for 4713de1 building, earlier ones READY). No new data. This line is committed locally and not pushed on its own: each push triggers new preview builds and new bot notifications; it rides the next real change.

## Appendix: exact data tables (generated from assets/js/data.js and content.js)

### Store-level Q4 2026 challenge (Cr) and Q4 store budgets (L, Oct | Nov | Dec)

| Store | State | City / area | Q4 2025 | Ambition | Challenge | Growth % | Over ambition | Budget Oct | Nov | Dec |
|---|---|---|---|---|---|---|---|---|---|---|
| Wakad | Pune | Wakad, Hinjewadi and Punawale | 27.29 | 26.34 | 30.4 | 11.4 | 4.06 | 5.48 | 7.69 | 7.5 |
| Wagholi | Pune | Wagholi, Kharadi and the Nagar Road entry | 11.67 | 12.63 | 14.4 | 23.4 | 1.77 | 2.28 | 3.24 | 3.19 |
| SGS Mall | Pune | Central Pune | 12.42 | 13.17 | 14.32 | 15.3 | 1.15 | 2.41 | 3.27 | 3.76 |
| Amanora | Pune | Amanora, Magarpatta and Hadapsar | 9.27 | 10.08 | 10.61 | 14.4 | 0.53 | 1.87 | 2.57 | 2.8 |
| NIBM | Pune | NIBM and Undri | 4.59 | 6.37 | 5.8 | 26.4 | -0.57 | 1.17 | 1.22 | 1.28 |
| Motera | Gujarat | Motera, north Ahmedabad | 12.68 | 12.82 | 14.5 | 14.4 | 1.67 | 3.65 | 4.88 | 6.03 |
| Nexus | Gujarat | Nexus, west Ahmedabad | 11.3 | 12.73 | 13.19 | 16.8 | 0.46 | 3.28 | 5.18 | 5.75 |
| Baroda | Gujarat | Alkapuri, Vadodara | 8.95 | 10.07 | 10.45 | 16.7 | 0.38 | 2.78 | 3.93 | 4.17 |
| Surat | Gujarat | Dumas Road, Surat | 8.97 | 10.45 | 10.66 | 18.9 | 0.21 | 3.31 | 3.52 | 4.33 |
| Rajkot | Gujarat | Rajkot | 2.4 | 2.28 | 2.69 | 12.2 | 0.41 | 0.58 | 0.78 | 1.11 |
| Indore | MP | Indore | 9.77 | 10.44 | 11.92 | 22.1 | 1.48 | 2.91 | 4.09 | 4.58 |
| Bhopal | MP | Bhopal | 6.63 | 8.36 | 12.21 | 84.2 | 3.85 | 2.94 | 3.97 | 4.99 |
| Gwalior | MP | Gwalior | 3.11 | 3.83 | 3.6 | 15.7 | -0.23 | 0.78 | 1.14 | 1.3 |

### State and channel totals from the challenge sheet (Cr)

| Line | Q4 2025 | Ambition | Challenge | Growth % | Over ambition |
|---|---|---|---|---|---|
| Pune Digital | 4.45 | 5.54 | 5.8 | 30.2 | 0.26 |
| Pune Wholesale | 1.64 | 5.19 | 5.89 | 259.2 | 0.7 |
| PUNE TOTAL | 71.34 | 79.31 | 87.22 | 22.3 | 7.91 |
| Ahmedabad Digital | 1.23 | 1.6 | 1.6 | 29.9 | 0 |
| Gujarat Digital | 2.89 | 4.18 | 3.75 | 29.9 | -0.43 |
| Gujarat Wholesale | 0.44 | 1.72 | 2.36 | 431.9 | 0.64 |
| GJ TOTAL | 48.86 | 55.85 | 59.2 | 21.2 | 3.35 |
| MP Digital | 4.3 | 4.81 | 4.62 | 7.4 | -0.19 |
| MP TOTAL | 23.8 | 27.44 | 32.35 | 35.9 | 4.91 |
| Pune Stores | 65.24 | 68.58 | 75.53 | 15.8 | 6.95 |
| GJ Stores | 44.29 | 48.35 | 51.49 | 16.2 | 3.14 |
| MP Stores | 19.5 | 22.63 | 27.73 | 42.2 | 5.1 |

### Q4 2026 spend by line item per state (L, Oct | Nov | Dec)

**Pune** (sheet total: 16.5 | 27 | 10.75)

- Internal consumption (Non Marketing): 3.5 | 0 | 0
- In Mall Communication: 2.25 | 4.5 | 2.25
- Hoarding,OOH and Hipop / AOP: 5.75 | 4.5 | 4.5
- Instore communication (Campaign & Merch): 1.5 | 5.5 | 1.5
- Store Event: 1 | 6 | 0
- Flyers: 1 | 1 | 1
- Influencer Marketing Fees: 1.5 | 5 | 1.5
- Free products and IC (Marketing): 0 | 0.5 | 0

**Gujarat** (sheet total: 19.95 | 26.83 | 31.65)

- Paid Internal Fees Advertising (Digital Paid to Marcom): 5.44 | 7.32 | 8.56
- Regional Marketing - In Mall: 3.7 | 3.7 | 3.7
- Regional Marketing Hoarding / HIPOP: 3.31 | 6.29 | 6.2
- Regional Marketing Influencer & Affiliation: 2.21 | 3.23 | 3.96
- Press Advertising PR Pages: 0.33 | 0.48 | 0.59
- Free Products & IC: 2.13 | 1.94 | 2.37
- Regional Marketing Store Event x collab: 1.66 | 2.42 | 2.97
- Other Online Channels: 1.21 | 0 | 0
- Instore Communication: 0.99 | 1.45 | 1.78
- Community / Sports Partnerships: 0.99 | 1.45 | 1.78

**MP** (sheet total: 6.8 | 9.87 | 11.09)

- Paid Internal Fees Advertising (Digital Paid to Marcom): 2.72 | 3.95 | 4.44
- Regional Marketing - In Mall: 0.45 | 0.35 | 0.35
- Regional Marketing Hoarding / HIPOP: 0.85 | 2.6 | 2.4
- Regional Marketing Influencer & Affiliation: 1.29 | 1.87 | 2.1
- Press Advertising PR Pages: 0.11 | 0.16 | 0.18
- Free Products & IC: 0.86 | 0.78 | 0.88
- Regional Marketing Store Event x collab: 0.64 | 0.93 | 1.05
- Instore Communication: 0.48 | 0.7 | 0.79
- Community / Sports Partnerships: 0.48 | 0.7 | 0.79
- Old - General Advertising: 0.05 | 0 | 0

### Advertising spend by month (L). y26 = Jan–Sep 2026 actual + Oct–Dec Q4 plan; y27 = 2027 plan (ultimate data sheet)

Months: Jan | Feb | Mar | Apr | May | Jun | Jul | Aug | Sep | Oct | Nov | Dec

- Pune 2026: 24.07 | 8.74 | 22.75 | 26.57 | 25.18 | 30.26 | 23.42 | 22.47 | 19.7 | 16.5 | 27 | 10.75
- Pune 2027: 28.74 | 22.68 | 28.97 | 32.21 | 37.55 | 33.78 | 36.43 | 29.77 | 22.14 | 22.84 | 34.1 | 36.14 (ultimate_data_sheet_1; superseded: 13.1 | 12.05 | 18.31 | 17.45 | 22.73 | 19.93 | 17.31 | 13.82 | 13.49 | 16.7 | 22.64 | 20.95)

- Gujarat 2026: 20.24 | 14.73 | 28.75 | 33.33 | 30.87 | 24.42 | 24.73 | 12.98 | 23.82 | 19.95 | 26.83 | 31.65
- Gujarat 2027: 22.54 | 15.66 | 21.34 | 24.44 | 28.79 | 24.1 | 23.14 | 22.02 | 12.79 | 16.88 | 23.53 | 25.33 (superseded: 11.24 | 11.46 | 11.69 | 14.01 | 17.18 | 12.85 | 10.9 | 10.65 | 10.84 | 10.81 | 15.65 | 16.68)

- MP 2026: 2.87 | 2.22 | 0.54 | 2.81 | 2.86 | 2.38 | 2.48 | 1.92 | 7.1 | 6.8 | 9.87 | 11.09
- MP 2027: 11.92 | 8.04 | 8.55 | 9.7 | 10.36 | 10.42 | 10.5 | 9.59 | 7.29 | 9.57 | 11.03 | 13.07 (superseded: 3.84 | 4.07 | 3.47 | 4.08 | 5.22 | 4.04 | 3.69 | 3.62 | 3.89 | 6.62 | 9.25 | 10.08)

### Omni turnover 2026 by month (Cr, Master Data sheet; region not labelled)

- Total: 21.09 | 16.72 | 21.63 | 23.88 | 27.94 | 25.47 | 27.05 | 22.3 | 18.72 | 21.85 | 29.47 | 30.38
- Growth %: 13.7 | 9.2 | -2 | 13.1 | 18.1 | 9.2 | 23.3 | 13.5 | 12.7 | 28.2 | 7.9 | 12.6
- Outstore: 1.57 | 1.75 | 1.89 | 2 | 2.04 | 2.26 | 2.91 | 2.29 | 2.86 | 3.61 | 3.79 | 4.77
- Outstore growth %: -9.2 | 25.3 | -21.9 | 27.2 | 24.7 | 29.2 | 55.8 | 35.3 | 63.8 | 185.3 | 67.4 | 85.5

### Pune city top sports plan by month (Cr, Jan–Dec)

- Hiking & trekking: 0.76 | 0.53 | 0.55 | 0.48 | 0.52 | 0.67 | 0.86 | 0.8 | 0.59 | 0.92 | 0.71 | 0.99 (total 8.39)
- Fitness: 0.88 | 0.58 | 0.61 | 0.56 | 0.61 | 0.57 | 0.49 | 0.5 | 0.49 | 0.7 | 0.6 | 0.69 (total 7.28)
- Supporting + urban: 0.22 | 0.23 | 0.35 | 0.46 | 0.68 | 0.36 | 0.25 | 0.24 | 0.27 | 0.56 | 0.46 | 0.49 (total 4.57)
- Running: 0.37 | 0.29 | 0.29 | 0.26 | 0.28 | 0.27 | 0.25 | 0.26 | 0.25 | 0.34 | 0.28 | 0.3 (total 3.43)
- Racket: 0.22 | 0.31 | 0.25 | 0.24 | 0.26 | 0.23 | 0.2 | 0.2 | 0.2 | 0.28 | 0.25 | 0.28 (total 2.92)

Pune sport of the month (Jan–Dec): Fitness, Camping, Pickleball, Cricket + roller, Swimming, Football, Cycling, Badminton, Water sports, Running, Trekking, Trekking

### Pune store share of city turnover

Wakad 40.9%, SGS Mall 18.8%, Wagholi 17.5%, Amanora 14.4%, NIBM 8.5%

### Commercial weekends (Cr)

- Dussehra: 2026 16–20 Oct target 7.5 Cr (+40%); 2025 29 Sep–2 Oct actual 5.3 Cr
- Diwali sale: 2026 31 Oct–1 Nov target 5.5 Cr (+17%); 2025 10–12 Oct actual 4.7 Cr
- Black Friday: 2026 27–30 Nov target 12 Cr (+22.4%); 2025 28–30 Nov actual 9.8 Cr
- EOY festive sale: 2026 18–25 Dec target 20 Cr (+12.9%); 2025 17–25 Dec actual 17.7 Cr

### Decathlon Play event IPs, 2027 national footfall goals

New Year, New Moves (Jan) 25000; Beach Day (Feb) 10000; Women's Day (Mar) 15000; Summer Camp (Apr–Jun) 5000; Sports Utsav (May) 200000; Yoga Day (Jun) 10000; Mountain Day (Aug) 5000; Sports Utsav Jr (Nov) 50000

### Q1 2027 holidays

2027-01-14 Makar Sankranti / Uttarayan [Gujarat]
2027-01-15 Vasi Uttarayan [Gujarat]
2027-01-26 Republic Day [Pune, Gujarat, MP]
2027-02-19 Shivaji Maharaj Jayanti (long weekend) [Pune]
2027-02-20 Sant Ravidas Jayanti [MP]
2027-03-06 Maha Shivratri [Pune, Gujarat, MP]
2027-03-10 Id-ul-Fitr [Pune, Gujarat, MP]
2027-03-14 IPL starts (runs to 30 May) [Gujarat]
2027-03-22 Holi / Dhuleti (long weekend) [Pune, Gujarat, MP]
2027-03-26 Good Friday (long weekend) [Pune, Gujarat, MP]

### AOP per-store mix (2027 slide)

Pune: hoardings 5, metro true, influencers Pune pool of 70, AOP travel 1 / gym 1 / yoga 1 / racket 2
Ahmedabad: hoardings 2, metro true, influencers Gujarat pool of 40, AOP travel 2 / gym 3 / yoga 2 / racket 3
Vadodara: hoardings 4, metro false, influencers Gujarat pool of 40, AOP travel 2 / gym 3 / yoga 2 / racket 3
Surat: hoardings 3, metro false, influencers Gujarat pool of 40, AOP travel 2 / gym 3 / yoga 2 / racket 3
Rajkot: hoardings 1, metro false, influencers Gujarat pool of 40, AOP travel 2 / gym 3 / yoga 2 / racket 3
Indore: hoardings 0, metro false, influencers MP pool of 40, AOP travel 1 / gym 1 / yoga 1 / racket 2
Bhopal: hoardings 1, metro false, influencers MP pool of 40, AOP travel 1 / gym 1 / yoga 1 / racket 2
Gwalior: hoardings 0, metro false, influencers MP pool of 40, AOP travel 1 / gym 1 / yoga 1 / racket 2

### Strategy toolkit (26 tactics from the team sheet)

- Society activations: New user growth, indirect walk-ins with a bait [Growth; Walk-ins]
- Running / cycling events bib collection: Good awareness, connects with youth (18–28) [Youth; Awareness]
- School activation: Family and kids growth, direct turnover with moms, higher ABV [Families; Turnover]
- Women-centric events: Women bring family and friends, so bigger basket [Basket value; Turnover]
- Influencers: Fast reach, credibility, new audience trials [Reach; Awareness + walk-ins]
- Cleanup drives and NGO events: Local goodwill, trust, PR and content value [Goodwill; Reputation]
- Playground events at stores: Direct footfall [Footfall; Walk-ins]
- Playground occupancy increase: Repeat visits, longer dwell time, family purchases [Habit; Retention]
- Hoardings: Visibility near the store, hard to measure [Visibility; Awareness]
- Metro wrap: Daily commuter reach, city-level presence [Presence; Awareness]
- Social media content of teammates: Authentic, trusted, humanises the store, low cost [Trust; Engagement]
- Brand content (content of us): Awareness, storytelling, product education, fuels ads and influencers [Awareness; Awareness + community]
- Meta ads: Targeted reach by area and age, trackable leads [Targeting; Direct revenue; MarCom-run]
- AOP hoarding at a sports partner academy: Sporty audience, players and parents, high relevance [Relevance; Awareness]
- In-store events: Direct footfall and conversion, community building [Conversion; Engagement]
- WhatsApp / CRM broadcasts to existing customers: Repeat purchase, cheapest way to bring people back [Retention; Retention; MarCom-run]
- Google Business Profile and local search ads: Catches people already searching “sports store near me” [Intent; Direct revenue; MarCom-run]
- Corporate and office tie-ups: Employee wellness events, bulk and B2B orders [Walk-ins; Turnover]
- College and campus activations: Young buyers, sports clubs, event footfall [Awareness; Young users]
- Gym, yoga studio and sports club tie-ups: Active audience, referral walk-ins [Referrals; Walk-ins]
- Free workshops and coaching: Bike repair, fitness and beginner sports: skills, trust, repeat visits [Community; Engagement]
- Local tournaments and leagues at the store: Footfall, team bulk buying, content [Teams; Engagement + walk-ins]
- Referral and loyalty offers: Word of mouth, new users through existing ones [Advocacy; Acquisition]
- Mall pop-ups: Reach in high-footfall spots outside the store [Exposure; Awareness + walk-ins]
- Local athlete or coach as ambassador: Credibility in the city, strong content [Credibility; Awareness]
- In-store visual merchandising: Conversion [Festive; Conversion]

### Content calendar posts (26 Oct 2026 – 31 Mar 2027)

**October 2026**: theme Diwali sale and Kids Festival; sport Running; CTA Bring the family this weekend

- 27 Oct · Reel · P · Diwali sale teaser: 4 days to go · Diwali sale (31 Oct – 1 Nov) · All
- 29 Oct · Reel · C · Kids Festival invite · Kids Festival (31 Oct – 2 Nov) · All · creator: Parent creator in each state
- 30 Oct · Story · F · Poll: which sport should your kid try first? · Kids Festival · All
- 31 Oct · Reel · C · Sports Utsav Junior: skating workshop live · Sports Utsav Junior · All
- 31 Oct · Carousel · P · Diwali sale is live · Diwali sale · All

**November 2026**: theme Gift a Sport, chase the mountains; sport Climbing and trekking; CTA Gift a sport this Diwali

- 1 Nov · Reel · C · Kids Festival recap · Kids Festival · All
- 2 Nov · Carousel · L · Your first winter trek: 10 things to pack · Winter Travel (15 Oct – 30 Jan) · All
- 4 Nov · Reel · C · Trek route video: Sinhagad at sunrise · Winter Travel · Pune · creator: Pune trek creator
- 5 Nov · Carousel · P · Gift a Sport: gifts under ₹999 · Diwali: Gift a Sport · All
- 6 Nov · Reel · E · The first cycle you ever got · Diwali: Gift a Sport · All
- 7 Nov · Story · F · This or that: which gift would you rather get? · Diwali: Gift a Sport · All
- 8 Nov · Static · E · Happy Diwali from 13 stores · Diwali (8 Nov) · All
- 10 Nov · Reel · C · 30 days in my trek shoes · Winter Travel · Gujarat · creator: Gujarat creator (footwear UGC)
- 12 Nov · Reel · L · How to layer for a Himalayan trek · Winter Travel · All
- 14 Nov · Reel · C · Children's Day: colouring books are in · Back to school (14 Nov) · All
- 15 Nov · Reel · F · Kids vs parents: obstacle course race · Children's Day · Pune
- 17 Nov · Reel · E · Sport for every kid: our CSR work · Decathlon CSR initiatives (Nov) · All
- 18 Nov · Reel · C · Saputara weekend kit · Winter Travel · MH500 backpack (Nov) · Gujarat · creator: Gujarat creator wave
- 19 Nov · Carousel · L · Packing the MH500: one bag, one weekend · MH500 backpack (Nov) · All
- 20 Nov · Story · F · Guess the trek from the emoji · Winter Travel · All
- 23 Nov · Reel · C · Adajan, the date is out: 18 December · Surat opening: reveal (23 Nov – 7 Dec) · Surat
- 25 Nov · Reel · P · Black Friday countdown: 2 days · Black Friday (27–30 Nov) · All
- 26 Nov · Reel · P · Black Friday haul preview · Black Friday · MP · creator: MP creator wave
- 27 Nov · Carousel · P · Black Friday is live: best value for sport · Black Friday · All
- 28 Nov · Reel · C · HYROX weekend: train like a racer · HYROX (27–29 Nov) · All
- 29 Nov · Reel · E · Adani Marathon: finisher stories · Adani Marathon (29 Nov) · Gujarat
- 30 Nov · Story · P · Black Friday: last day · Black Friday · All

**December 2026**: theme Trek, travel and a new home in Surat; sport Trekking; CTA Chalo Ramiye, Adajan!

- 1 Dec · Carousel · L · Manali kit vs Europe kit · Winter Travel · All
- 3 Dec · Reel · C · Trek route video: winter sunrise · Winter Travel · MP · creator: MP trek creator
- 5 Dec · Reel · F · Pack with me: winter trek edition · Winter Travel · All
- 7 Dec · Reel · E · Adajan, meet your team · Surat opening · Surat
- 8 Dec · Story · C · 10 Divas, 10 Ramat: countdown begins · Surat countdown (8–17 Dec) · Surat
- 10 Dec · Carousel · P · Christmas gifts for runners and footballers · Christmas: Gift a Sport · All
- 12 Dec · Reel · F · Surat treasure hunt: the first clue · Surat treasure hunt (12 Dec) · Surat
- 13 Dec · Reel · C · Happy Streets on LP Savani · Happy Streets #1 (13 Dec) · Surat
- 15 Dec · Reel · C · Creators' preview of the Adajan store · Surat countdown · Surat · creator: Surat city creators
- 17 Dec · Reel · E · Surat is famous for its food. Now Adajan for its play. · Surat opening · Surat
- 18 Dec · Live · C · Pehli Ramat: Adajan opens + night run · Surat opening weekend (18–20 Dec) · Surat
- 19 Dec · Reel · C · Adajan Night Carnival · Surat opening weekend · Surat
- 19 Dec · Carousel · P · Christmas sale is on · Christmas sale (19–31 Dec) · All
- 20 Dec · Reel · C · Tapi Sunrise Run + sports carnival · Surat opening weekend · Surat
- 22 Dec · Carousel · L · Last-minute gift guide by sport · Christmas: Gift a Sport · All
- 24 Dec · Reel · F · Santa Party at Adajan · Surat: Ramat chalu rahe · Surat
- 25 Dec · Static · E · Merry Christmas: Gift a Sport · Christmas · All
- 27 Dec · Reel · E · My 2026 in sport · Year end · Pune · creator: Pune: Adi
- 29 Dec · Reel · F · Your 2026 sport, wrapped · Year end · All
- 31 Dec · Reel · E · 13 stores. One West. Thank you. · Year end · All

**January 2027**: theme New Year, New Moves; sport Fitness; CTA Start your sport

- 1 Jan · Reel · E · New Year, New Moves: what will you start? · New Year, New Moves · All
- 2 Jan · Story · F · Pick your 2027 sport · New Year, New Moves · All
- 3 Jan · Reel · C · Happy Streets #2, Adajan · Surat: Happy Streets #2 (3 Jan) · Surat
- 5 Jan · Carousel · L · Starter kits: run, gym, yoga with a 30-day plan · New Year starter kits · All
- 7 Jan · Reel · C · 30 days of New Moves: day 1 · New Year, New Moves · Pune · creator: Pune fitness creator
- 9 Jan · Reel · C · SGS football event · Pune community events · Pune
- 10 Jan · Reel · C · Wakad badminton event · Pune community events · Pune
- 11 Jan · Reel · P · Kai Po Che! terrace kit · Uttarayan (14–15 Jan) · Gujarat
- 12 Jan · Reel · C · SGS running event · Pune community events · Pune
- 13 Jan · Reel · F · Uttarayan: who holds the kite longest? · Uttarayan · Gujarat
- 14 Jan · Static · E · Happy Uttarayan and Makar Sankranti · Uttarayan · All
- 16 Jan · Reel · C · Adajan Bumper Draw: Rockrider winner · Surat: Bumper Draw (16 Jan) · Surat
- 18 Jan · Reel · C · Movement for All in Indore · Fitness: Movement for All · MP · creator: MP creator wave
- 20 Jan · Carousel · P · Republic Day sale starts: Made in India picks · Republic Day sale (20–26 Jan) · All
- 22 Jan · Reel · L · Where your gear is made · Republic Day: Made in India · All
- 24 Jan · Reel · F · Tricolour challenge · Republic Day · All
- 26 Jan · Reel · E · Republic Day: we play for India · Republic Day · All
- 28 Jan · Reel · E · Why I started running · Lead-in to Women's Sport Month · Pune · creator: Pune women creator
- 30 Jan · Reel · C · January in numbers: New Moves · New Year, New Moves · All

**February 2027**: theme Move Together; sport Camping; CTA Move together

- 1 Feb · Reel · P · New arrivals: shoes drop 1 · New arrivals: shoes 1 (Feb) · All
- 3 Feb · Carousel · L · Your first camping trip checklist · Camping, sport of the month · All
- 5 Feb · Reel · F · Camping date night · Valentine's week (7–14 Feb) · Gujarat · creator: Gujarat couple creators
- 7 Feb · Reel · F · Who's your sport partner? · Valentine's week · All
- 9 Feb · Reel · E · Move Together: women who play · Women's Sport Month (Pune) · Pune
- 11 Feb · Reel · C · Women's fitness session at NIBM · Women's Sport Month · Pune
- 13 Feb · Story · F · Rate the date: trek or beach? · Valentine's week · All
- 14 Feb · Static · E · Love what you play · Valentine's Day · All
- 16 Feb · Reel · E · She plays: MP's women athletes · Women's Sport Month · MP · creator: MP women creators
- 19 Feb · Reel · E · Shivaji Maharaj Jayanti: the fort trek · Shivaji Maharaj Jayanti (19 Feb) · Pune
- 21 Feb · Reel · C · Beach Fest, Surat · Beach Day · Beach Fest (Q1, date to confirm) · Surat
- 22 Feb · Reel · L · Pitch a tent in 2 seconds · Camping, sport of the month · All
- 24 Feb · Carousel · P · February sale: best of the month · Sale campaign (Feb) · All
- 26 Feb · Reel · C · New shoes, first 5K · New arrivals: shoes 1 · Gujarat · creator: Gujarat runner creator
- 28 Feb · Reel · F · February bloopers from our stores · Brand · All

**March 2027**: theme Find Your Sport; sport Pickleball; CTA Find your sport

- 1 Mar · Reel · E · Her first race · Women's Day (1–8 Mar) · All
- 3 Mar · Reel · E · Women's Day: why we play · Women's Day · All · creator: Women creators, all states
- 5 Mar · Carousel · L · Pickleball 101 · Pickleball, sport of the month · All
- 6 Mar · Reel · C · Pickleball open play at Amanora · Pickleball, sport of the month · Pune
- 8 Mar · Static · E · Happy Women's Day · Women's Day · All
- 10 Mar · Static · E · Eid Mubarak · Id-ul-Fitr (10 Mar) · All
- 12 Mar · Reel · P · Kiprun Challenger launch, ₹9,999 · Kiprun Challenger launch (Mar–May) · All
- 14 Mar · Reel · F · IPL is here: gully cricket gear check · IPL 2027 (from 14 Mar) · All
- 16 Mar · Reel · C · Box cricket night league · IPL season · Gujarat · creator: Gujarat cricket creator
- 18 Mar · Reel · L · Holi-proof your shoes · Holi (15–22 Mar) · All
- 20 Mar · Reel · F · Holi colour run · Holi · All
- 22 Mar · Static · E · Happy Holi · Holi (22 Mar) · All
- 24 Mar · Carousel · P · Clearance sale · Clearance (Mar) · All
- 26 Mar · Reel · C · Summer launch: long weekend at the stores · Summer launch · All
- 29 Mar · Reel · C · Summer camp sign-ups · Summer camp (Apr–May) · All · creator: Parent creators
- 31 Mar · Reel · F · Q1 wrapped · Brand · All

### Hero films per month

- October: "The quietest Diwali holiday" (occasion: Diwali holidays and the Kids Festival). Story: A grandmother complains that the grandkids have been glued to phones all Diwali break. Proof: The whole society's Wi-Fi goes down on Saturday. Not one kid notices: they're all at the Kids Festival on skates, scooters and a football pitch. Resolve: Last five seconds: the Decathlon playground at dusk. “No screens this weekend. Only play.”
- November: "Pehli cycle" (occasion: Diwali homecoming). Story: A father in Ahmedabad still keeps the rusty cycle his own father gave him, polished every Diwali. His son comes home with a long box. Proof: Three generations, one bell. The old cycle still rings. Resolve: The box opens to a new Rockrider with a bow, for the grandson. Card: “Gift a Sport.”
- December: "Surat nu jaman, Adajan ni ramat" (occasion: Surat's love of food, and a new store). Story: A Surti family plans a whole Sunday around food: locho at 9, undhiyu at 1, ghari for dessert. Proof: By evening nobody can stand up. Grandpa, 72, challenges all of them to the Tapi Sunrise Run, and beats them. Resolve: Final shot: the Adajan store doors opening. “Surat is famous for its food. Now Adajan for its play.”
- January: "The terrace war" (occasion: Uttarayan). Story: Two neighbouring terraces, a decade-long kite rivalry, and one aunty who has never lost. Proof: Wind, sun and a 9-hour sky battle: her cap never flies off, her shades never slip, her chair never wobbles. Resolve: She cuts the last kite and calmly opens her cooler bag. Five-second end card: the Kai Po Che! terrace kit.
- February: "She ran for the bus" (occasion: Women's Sport Month). Story: Every morning a Pune mother sprints to catch her daughter's school bus with the tiffin. Proof: The neighbourhood starts timing her. She's faster every week. Resolve: The daughter hands her a race bib. Last frame: both at the start line, “Move together.”
- March: "Sharma aunty's window" (occasion: IPL season). Story: One gully team has broken the same window for ten years. Sharma aunty has a drawer full of confiscated balls. Proof: This season the ball is smashed so far it clears the whole building. For once, the window survives. Resolve: Aunty walks out with a bat and asks to bat first. End card: “Gully ready? Kit up.”

### Creative Commons photo credits (assets/img/cc)

- holi.jpg: Holi - The festival of Colours by Sundarhum, CC BY-SA 4.0
- diwali.jpg: Diwali Diya 4 by Slyronit, CC BY-SA 4.0
- kids.jpg: Football in India by Qirille, CC BY-SA 4.0
- kite.jpg: Kite Festival Uttarayan in Gujarat by Gopalkhetani, CC BY-SA 4.0
- marathon.jpg: 2008 Pune Marathon runners by Kushal Das from Pune, India, CC BY 2.0
- newyear.jpg: 2025 New Year Fireworks in Tamsui, New Taipei (54238509582) by Artemas Liu, CC BY-SA 2.0
- pickleball.jpg: Pickleball Paddle 2025 by Fakhar Saeed, CC0
- fitness.jpg: 92nd Military Police Company Crossfit Competition (8770089) by U.S. Army photo by Spc. Samuel Signor, Public domain
- cycling.jpg: CH.ZH.Affoltern-am-Albis 2024-03-30 road-bike-racing by Roy Egloff, CC BY-SA 4.0
- christmas.jpg: Oxford Street Christmas Lights - geograph.org.uk - 1661010 by Christine Matthews, CC BY-SA 2.0
- beach.jpg: USMC-111007-M-UV915-234 by Unknown, Public domain
- badminton.jpg: UKM BADMINTON UM by UNIVERSITAS MULIA, CC BY-SA 4.0
- flag.jpg: The waving Indian flag by Sisheer Philip, CC BY-SA 4.0
- cricket.jpg: Sachin in action by Privatemusings, CC BY-SA 4.0
- trek-snow.jpg: SarPass... by Chandramohan Burly V, CC BY-SA 2.0
- trek-green.jpg: Kudremukh, Shola Grasslands. by wildxplorer, CC BY 2.0
- shoes.jpg: Shoes for sale by kewl, CC BY 2.0
- camping.jpg: Stars Over Everest 2 by SamHawleywood, CC BY 2.0
- football.jpg: Kids Playing 1 by LabyrinthX-2, CC BY-SA 2.0

## Appendix B: site content inventory, page by page (rendered 2026-11-10)
Every visible piece of copy, number, chart label, table row, tab/switch variant and media file on the live site, read from the rendered pages (Chromium at 1440 px, all `<details>` opened, every tab, switch, month, quarter and region button clicked). Generated from the site as of commit 8a84384; refresh it when the site changes. Lines are shown in reading order; "|" separates table cells. "After clicking X" lists only the lines that are new compared with what was already shown above in that section. Sound on/off buttons and duplicate marquee text are left out. Media: `img` = image file, `vid` = video file (poster still in brackets).

### B.1 index.html, main site "Play as One"
- Browser title: "Play As One · West Plan". Meta description: "Decathlon Pune, Gujarat and Madhya Pradesh marketing plan for Q4 2026 and Q1 2027.".
- Sections in order: `topbar`, `top`, `people`, `why`, `personas`, `ch-q4`, `scoreboard`, `runway`, `october`, `ch-strategy`, `playbook`, `calendar`, `ch-surat`, `surat`, `ch-2027`, `planner`, `q1`, `horizon`.
- Outside the sections (`a`): Skip to the numbers
- Outside the sections (`expBar`): Download this page / Download PDF / Download GIF / The complete page, as you see it.

#### index › `topbar`: DECATHLON West

```text
People
Why West
Shoppers
Scoreboard
Q4 campaigns
October recap
Strategy
Marketing playbook
Content
Surat
2027
Q1 2027
Nov & Dec 2026
November and December 2026Open the page
Diwali: Gift a Sport, 6 to 11 Nov
Black Friday, 27 to 30 Nov
Winter, Trek & Travel
Christmas: gifting and the sale
Pune runway, week by week
November budget and Q4 goals
Summary: Nov and Dec in one view
2027 plan
2027, Q1 and Q2, sport by sportOpen the page
Q1: January to March
Q2: April to June
Q1 and Q2 together
Pune only
Water sports 2027, week by weekEvery store: in store, outstore, digital, AOPs
Present
```

#### index › `top`: Pune, Gujarat and Madhya Pradesh · Q4 2026 + Q1 2027
- img: assets/img/skyline-band.webp [alt: Illustrated skyline of Pune, Gujarat and Madhya Pradesh landmarks]
- vid: assets/videos/circuit-games.mp4 [poster assets/posters/circuit-games.jpg]; assets/videos/winter-gear.mp4 [poster assets/posters/winter-gear.jpg]; assets/videos/kiprun.mp4 [poster assets/posters/kiprun.jpg]; assets/videos/yoga-day.mp4 [poster assets/posters/yoga-day.jpg]

```text
Play
as One.
Three markets, one challenge. This is how marketing gets the West cluster to 178.77 Cr this quarter and keeps the momentum going into 2027.
Q4 challenge
178.77 Cr
Growth vs last year
24.15%
Q4 marketing plan
1.60 Cr
Pune challenge
87.22 Cr
Gujarat challenge
59.20 Cr
MP challenge
32.35 Cr
Mall circuit games
Winter gear UGC
Kiprun run club
Yoga Day, Motera
Q4 challenge 178.77 Cr+24.15% vs last yearWinter Travel: 15 Oct - 30 JanBlack Friday 27-30 Nov: 12 CrChristmas sale 19-31 DecWakad: 30.4 Cr, the biggest store challengeAdajan, Surat: grand launch 27 Dec18 hoardings: 7 live in Pune80+ local influencersKiprun launch: 700 runners, 7 clubsQ1 2027: +12.1% turnoverCommonwealth Games 2030, Gujarat
```

#### index › `people`: Who we sell to
- img: assets/img/pune-fort-trail.jpg [alt: A Maratha fort trail along a green Sahyadri ridge]; assets/img/pune-shivaji.jpg [alt: Portrait of Chhatrapati Shivaji Maharaj]; assets/img/gujarat-embroidery.jpg [alt: A woman in traditional dress doing hand embroidery on bright fabric]; assets/img/mp-gwalior-fort.jpg [alt: Man Singh Palace at Gwalior Fort with blue tile work]; assets/img/mp-rajwada.jpg [alt: Rajwada Palace, Indore, seen from below]; assets/img/mp-sanchi.jpg [alt: Sanchi Stupa behind a 200 rupee note that pictures it]; assets/img/mp-tansen.jpg [alt: Amar Chitra Katha comic cover of Tansen playing the tanpura]
- vid: assets/videos/pune-state.mp4 [poster assets/posters/pune-state.jpg]; assets/videos/gujarat-state-2.mp4 [poster assets/posters/gujarat-state-2.jpg]; assets/videos/gujarat-state-1.mp4 [poster assets/posters/gujarat-state-1.jpg];  [poster assets/posters/mp-state.jpg]

```text
Three states with very different stories, histories and people.
Pune city · 5 stores
The calm of the Sahyadris
87.22 CrQ4 challenge, +22.3% on Q4 2025
The Sahyadri hills ring the city, with Maratha forts a short drive away. Weekend treks and monsoon hikes are part of everyday life.
Shivaji Maharaj grew up in Pune, and nearby Rajgad was his first capital.
Known as the Oxford of the East for its colleges and universities.
Hinjewadi's IT parks, next door to our Wakad store, made Pune one of India's tech hubs.
Who lives here
IT professionals
Students
Young families
Weekend trekkers
Runners and cyclists
Academy players
Active seniors
Population (district)
10.4M
Median age
26.3
Urban
36%
Plays sport
12-16%
Gujarat · 5 stores
The land of Garba, traders and makers, the textile heart of India
59.20 CrQ4 challenge, +21.2% on Q4 2025
The epicentre of Indian textiles. Ahmedabad's mills earned it the name Manchester of the East.
Surat is the world's diamond hub: most of the world's diamonds are cut and polished there.
Before Bombay, Surat was the British East India Company's first base and busiest harbour in India.
Baroda, the King City, was the seat of the Gaekwads.
The land of Garba: nine nights of Navratri dancing, with weeks of fitness prep before it. Uttarayan fills every terrace in January.
Merchant and business families
Textile and diamond traders
Entrepreneurs
Upper-middle-class families
Travel lovers
Population
70.4M
27.4
42.6%
Share of India GDP
8%
Madhya Pradesh · 3 stores
Forts, music and the youngest crowd
32.35 CrQ4 challenge, +35.9% on Q4 2025, the fastest of the three
Gwalior is the city of the Scindias, watched over by Gwalior Fort and its 15th-century Man Singh Palace.
Tansen, the legendary musician of Akbar's court, came from Gwalior. The city still hosts a Tansen music festival every year and is a UNESCO City of Music.
Indore's Rajwada palace was built by the Holkars, and Indore has been named India's cleanest city again and again.
Sanchi Stupa, near Bhopal, is a UNESCO World Heritage Site and is printed on the ₹200 note. Bhopal itself is the City of Lakes.
Students and first-job professionals
Government employees
A fast-growing middle class
85.8M
25.8
27.6%
8-12%
```

#### index › `why`: Why the West is a hidden goldmine
- img: assets/img/west-stores-map.png [alt: Map of Decathlon stores: Motera, Nexus, Rajkot, Baroda and Dumas in Gujarat; Indore, Bhopal and Gwalior in Madhya Pradesh; Wakad, Wagholi, SGS Mall, Amanora and NIBM in Pune city]

```text
166.6 million people, only 13 stores, and sports markets worth ₹10,470 Cr this year in our store cities alone. So far in 2026 we hold about 4.6% of it. Pune shows what a city looks like when we commit.
166.6Mpeople across the three marketsOnly 13 stores: one for every 12.8M people.
Our share of each city's sports market, 2026 so far
₹410 Cr overall turnover from 1 January to 25 October, including B2B, digital and marketplace, against a ₹8,550 Cr sports market in our 8 store cities for the same days: 4.8%. 11.35 lakh customers, 55% of them returning.
Our in-store turnoverSports market, same days
City2026 so far: 1 Jan to 25 OctOur shareOur sales, YTDCity market, YTDCustomers, YTD
Pune 5 stores
10.0%
₹199 Cr₹1,987 Cr5.71 lakh
Ahmedabad 2 stores
3.9%
₹76 Cr₹1,983 Cr2.13 lakh
Surat 1 store
1.6%
₹32 Cr₹1,940 Cr0.84 lakh
Vadodara 1 store
₹29 Cr₹750 Cr0.71 lakh
Indore 1 store
4.0%
₹26 Cr₹647 Cr0.72 lakh
Bhopal 1 store
4.2%
₹22 Cr₹525 Cr0.71 lakh
Rajkot 1 store
1.5%
₹7 Cr₹502 Cr0.27 lakh
Gwalior 1 store
2.8%
₹6 Cr₹215 Cr0.26 lakh
City rows are in-store turnover and customers from store data, 1 Jan to 25 Oct 2026 (₹398 Cr across the 8 cities). Market: India City Ranking 2025's 2026 projection, pro-rated to those 298 days. Every city's market grows about 10.7% a year to 2030.
People per store
How many people each store serves today. MP has one store for every 28.6 million people.
Pune5 stores
2.1M
Gujarat5 stores
14.1M
Madhya Pradesh3 stores
28.6M
Pune uses the district population (10.4M), Gujarat (70.4M) and MP (85.8M) use state populations, from the regional context slide.
Who plays sport
Share of people who play regularly, by market.
Pune
12-16%
Gujarat
10-14%
Madhya Pradesh
8-12%
0%10%20%
Big events pulling people out
The region's largest sports events, run by others. This is where the crowds already are.
Oct - DecKhel Mahakumbh 2026 Gujarat76 lakh players and 3.5 lakh teams registered across 35+ sports
29 NovAdani Ahmedabad Marathon Gujarat10th edition; a record 24,000+ runners last year
Early DecPune International Marathon Pune15,000 runners and 70+ international athletes last year
Mid DecBajaj Pune Marathon PuneFull, half, 10K and 5K on the city's roads
JanKhelo MP Youth Games MP19 days, 28 sports, players from all 313 blocks
JanArmy Marathon, Bhopal MPAbout 6,500 runners in 2025
26-31 JanBajaj Pune Grand Tour PuneUCI 2.1 cycling, 6 stages; 2.5 million roadside fans in 2026
31 JanVadodara International Marathon Gujarat1.1 lakh registrations in 2026
Early FebIndore Marathon MP13th edition; full, half, 10K and 5K
```

#### index › `personas`: Inside our stores: the shoppers
- img: assets/img/u-family-football.jpg; assets/img/u-runclub.jpg; assets/img/u-trek-couple.jpg; assets/img/u-pickleball.jpg; assets/img/u-women-football.jpg; assets/img/u-golf.jpg

```text
Two shopper boards: Ahmedabad, with six personas from a 400-person walk-in survey, and Pune, with five.
Ahmedabad
Pune
Ahmedabad: where the mix is heading
Built from a 400-person walk-in survey (35%), catchment demographics (25%), footfall analytics (15%), category performance (15%) and the Ahmedabad sports ecosystem (10%). The plan grows progressive players from 11% to 22% of customers and young discoverers from 9% to 14%. The Patron, a business-owner buyer, is not in the mix yet.
Sports Family
32% → Maintain
Active Lifestyle Professional
25% → 27%
Outdoor & Travel Explorer
23% → 17%
Progressive Sports Enthusiast
11% → 22%
Young Trend & Discovery
9% → 14%
Share nowTarget
32% now
“Sport brings the family together”
Age
30-50
Gender
Family decision
Basket
₹4,000-10,000
ABV
Very high
Visits
Every 1-2 months, weekend evenings
Online share
30% online
Lives in
Vastrapur, Bodakdev, Satellite, Ambawadi, Thaltej
Plays
Swimming, cricket, cycling, football, badminton
Buys when
School season, holidays, summer camps
Pain point
Finding everything for the family
Needs
Convenience and trust
25% now
“Fitness is part of everyday life”
24-40
65% men, 35% women
₹3,000-8,000
High
Monthly, weekday evenings
40% online
Satellite, SG Highway, Bodakdev, Vastrapur, Navrangpura
Running, gym, yoga, cycling, walking, pickleball
Fitness goals, marathons, gym membership
Limited time
Performance and comfort
23% now
“Live for the next adventure”
25-45
Family driven
₹5,000-12,000
Seasonal, weekends
35% online
Bopal, Shela, Thaltej, SG Highway
Hiking, trekking, camping, travel
Upcoming trip plans
Choosing the right gear
Durable gear
11% now
“Keep improving every day”
16-34
Balanced
₹2,000-6,000
Medium
Every 1-2 months, evenings and weekends
25% online
Navrangpura, Naranpura, Vastrapur
Badminton, tennis, football, pickleball, running
Joining an academy or a new sport
Confusion about equipment
Right equipment and guidance
9% now
“Discover. Try. Play.”
18-24
₹1,000-3,000
Low to medium
Occasional, weekend evenings
60% online
University and PG catchments
Gym, walking, beginner sports
Trends, influencers, offers
Doesn't know where to start
Affordable discovery
Not yet in mix
The Patron
“My time is worth more than the discount.”
35-55
75% men, 25% women
₹10,000-60,000
Quarterly, Sunday mornings
Not given
Bodakdev 380054, Science City 380061, Ambli 380055, Bopal 380059
Golf, cycling, walking, gym, trekking
Health goal, doctor's advice, a trip, a corporate order
Lack of time. Will not queue or hunt for staff.
A frictionless outcome
```

After clicking **Pune**:
```text
Pune: five personas, one destination
The team's purpose: be Pune's multi-sport smart city partner, bringing sport closer to people. Shares are the team's estimates of Pune's customers.
Urban Performance Professional
30-35%
Sports Driven Family
25-30%
Daily Athlete & Academy Player
20-25%
Active Urban Explorer
15-20%
Active Senior Lifestyle
10-15%
30-35% of customers
Time-conscious professionals seeking premium sports products, convenience and high-performance solutions for their active lifestyle.
24-38
Household
2-3
Income
₹10-30 L+
₹3,500-5,500
8-12 orders a year
Conversion
28-32%
Occupation
IT, finance, doctors, consultants, entrepreneurs
Running, fitness, cycling, swimming
Lives in (pincodes)
411038, 411052, 411004
Decides on
Performance and convenience
Online
App, Click & Collect, express delivery (90-95% digital)
Time poor
Expects in store
Fast checkout, expert teammates
Community
Running clubs, cycling groups
Growth opportunity
Premium running, fitness and omni
25-30% of customers
Health-conscious families investing in sports, fitness and long-term development for every family member.
Parents 30-45, kids 6-18
4-5
₹12-35 L+
₹5,500-9,000
6-8 orders a year
35-40%
Working parents, professionals, business owners
Football, cricket, badminton, tennis
411038, 411052, 411058, 411051
Quality and family value
Omnichannel (80-90% digital)
Multiple shopping trips
One-stop family store
School events, family sports days
Kids' sports and family lifetime value
20-25% of customers
Regular sports practitioners who need technical products, expert guidance and frequent equipment upgrades.
3-4
₹4-15 L
₹2,000-3,800
10-16 orders a year
Students, academy players, young professionals
Tennis, badminton, cricket
411038, 411004, 411030
Technical performance
YouTube, Instagram, reviews (95%+ digital)
Product availability
Technical services
Academies, leagues, tournaments
Technical sports and services
15-20% of customers
Adventure and outdoor enthusiasts looking for reliable gear for trekking, travel, cycling and weekend experiences.
22-40
₹8-20 L
₹2,800-4,500
3-5 orders a year
18-25%
Young professionals, travellers
Hiking, trekking, cycling
411038, 411021, 411058
Adventure and experience
Instagram, Maps, travel blogs (92-95% digital)
Last-minute purchases
Quick outdoor shopping
Trekking clubs, outdoor communities
Outdoor, hiking and seasonal categories
10-15% of customers
Retired or soon-to-retire residents focused on keeping an active, healthy and independent lifestyle.
55-70
₹8-25 L+ (pension, investments, rent)
₹3,000-5,000
4-6 orders a year
Retired professionals, government employees, business owners, professors, senior executives
Walking, yoga, swimming, cycling, table tennis, badminton, fitness
411038, 411052, 411004, 411051
Comfort, durability, safety and health
Apps, WhatsApp and home delivery, growing (60-75% digital)
Few quality sports and wellness shops nearby; wants personal help
Knowledgeable teammates, easy navigation, quick billing, health-focused range
Morning walks, yoga groups, social clubs, wellness activities
Walking, fitness, yoga, swimming, cycling, recovery and wellness
```

#### index › `ch-q4`: 01

```text
Q4 2026 campaigns
Where we stand, what runs from October to December, and the moments we are betting on.
```

#### index › `scoreboard`: The scoreboard

```text
Q4 only: what we must sell, where it comes from, and where the marketing money goes. Built from the store-level data sheet and the state line plans.
Q4 2026 turnover challenge178.77 Cr
+24.15% on Q4 2025's 144 Cr. MP grows fastest, Pune carries the most, and wholesale nearly quadruples.
+13.9%Oct
+19.5%Nov
+24.1%Dec
Challenge growth by month: each month asks for more than the last.
By state
Pune
87.22 Cr+22.3%
Gujarat
59.2 Cr+21.2%
Madhya Pradesh
32.35 Cr+35.9%
By channel
Stores (13)
154.75 Cr+19.9%
Digital
15.77 Cr+22.5%
Wholesale
8.25 Cr+296%
Q4 2025Q4 2026 challenge Each bar is drawn to its own challenge, so the pale part shows how much is new.
Q4 so far: 1 to 26 October
In-store sales against each store's Q4 challenge. 28% of the quarter's days are gone; November and December carry Diwali, Black Friday and the year-end sale, so stores below the line are not necessarily behind.
₹28.93 Crof ₹154.75 Cr store challenge: 18.7%
20.0%₹15.11 of ₹75.53 Cr
Amanora
21.1%₹2.24 of ₹10.61 Cr
Wakad
21.0%₹6.37 of ₹30.4 Cr
NIBM
20.5%₹1.19 of ₹5.8 Cr
SGS Mall
18.8%₹2.69 of ₹14.32 Cr
Wagholi
18.2%₹2.62 of ₹14.4 Cr
18.9%₹9.72 of ₹51.49 Cr
Surat
21.5%₹2.29 of ₹10.66 Cr
Rajkot
19.7%₹0.53 of ₹2.69 Cr
Motera
18.2%₹2.64 of ₹14.5 Cr
Baroda
18.1%₹1.9 of ₹10.45 Cr
Nexus
17.9%₹2.37 of ₹13.19 Cr
14.8%₹4.1 of ₹27.73 Cr
Indore
16.7%₹1.99 of ₹11.92 Cr
Bhopal
13.4%₹1.63 of ₹12.21 Cr
Gwalior
13.3%₹0.48 of ₹3.6 Cr
Where the Q4 budget goes
Each state's October to December line plan added up, in lakh, each line's share of the budget, and the funnel stage it works on.
AwarenessGet known: reach new customers
InterestGet considered: walk-ins to the mall, the store and our events
ConversionGet the bill: in store, on the app, express delivery
LoyaltyBring them back: communities, WhatsApp and app retention
| Line | Pune | Gujarat | Madhya Pradesh | Total | Share of budget | Funnel stage
| Digital (MarCom) | 33.1 | 21.3 | 11.1 | 65.6
|
32.4%
| AwarenessConversion
| Hoardings, OOH, HIPOP | 14.8 | 15.8 | 5.9 | 36.4
18%
| Awareness
| Influencers | 8 | 9.4 | 5.3 | 22.7
11.2%
| AwarenessInterest
| In-mall | 9 | 11.1 | 1.2 | 21.3
10.5%
| Interest
| In-store comms and flyers | 11.5 | 4.2 | 2 | 17.7
8.7%
| Conversion
| Store events | 7 | 7.1 | 2.6 | 16.7
8.2%
| InterestLoyalty
| Partnerships and free products | 0.5 | 10.7 | 4.5 | 15.7
7.7%
| PR | - | 1.4 | 0.5 | 1.8
0.9%
| Other | 3.5 | 1.2 | 0.1 | 4.8
2.4%
| Total | 87.4 | 82.2 | 32.9 | 202.5 | 100% |
Campaign-wise spend: cluster summary, Gujarat, Madhya Pradesh, Pune
Cluster summary
₹55.11 LGujarat
₹26.99 LMadhya Pradesh
₹38.00 LPune
₹1.6 CrQ4 marketing budget
| Campaign theme | Gujarat | Madhya Pradesh | Pune | Cluster | Share
| Winter and travel | ₹14.97 L | ₹6.60 L | ₹17.75 L | ₹39.32 L |
32.7%
| Festive: Navratri, Dussehra, Diwali | ₹8.13 L | ₹2.87 L | ₹8.50 L | ₹19.50 L |
16.2%
| Running, Kiprun and marathons | ₹8.04 L | ₹3.18 L | ₹3.50 L | ₹14.72 L |
12.3%
| Climbing and trekking | ₹6.80 L | ₹2.85 L | ₹2.00 L | ₹11.65 L |
9.7%
| Kids Fest and Children's Day | ₹4.62 L | ₹1.73 L | - | ₹6.35 L |
5.3%
| Black Friday | ₹4.10 L | ₹1.97 L | - | ₹6.07 L |
5.1%
| Christmas and year-end sale | ₹4.16 L | ₹3.88 L | ₹6.25 L | ₹14.29 L |
11.9%
| Buffer, anniversary and other | ₹4.30 L | ₹3.90 L | - | ₹8.20 L |
6.8%
Digital YTD 2026: Pune, Gujarat and Madhya Pradesh, with October
₹20.15 CrPune, 45%
₹15.16 CrGujarat, 34%
₹9.62 CrMadhya Pradesh, 21%
₹44.93 CrWest digital, Jan to Oct
Digital's share of total turnover, and who brings it
11.0%of ₹410 Cr overall turnover so far this year (stores, B2B, digital and marketplace) is digital
Digital ₹44.93 CrStores and other channels
44.9%22.0%21.4%11.7%
PuneRest of West (Surat, Baroda, Rajkot)Madhya PradeshAhmedabad
Month by month
4.99
Jan
3.49
Feb
3.99
Mar
4.61
Apr
4.91
May
4.78
Jun
5.63
Jul
4.81
Aug
4.00
Sep
3.70
Oct
PuneGujaratMadhya Pradesh
In ₹ crore. July was the peak at ₹5.63 Cr; October is month to date.
How digital sells
72%28%
80%20%
E-commerceOrders through storesMarketplace
Returning customers
78.5%
74.7%
69.3%
64.8%
67.8%
61.8%
Top bar: January to October. Lower bar: October so far. Returning customers are the share of customers who had bought before; the rest are new.
Top sports, Jan to Oct
Hiking
₹901.2 L
Fitness equipment
₹520.7 L
Cycling
₹403.8 L
Fitness outfit
₹392.8 L
Running
₹379.4 L
Kids' cycling and urban gliding
₹215.1 L
Swimming
₹181.6 L
Trekking and climbing
₹177.2 L
October so far: what worked
Cycling is the standout: ₹48.8 L in October, already +24% on its monthly average with the month not over, and +90% in Madhya Pradesh.
Winter is starting: winter sports ₹7.8 L, +9% on the monthly average; camping +38% on September.
More new customers: October brought in more first-time buyers, so the returning share is lower than for the year in every business unit (Pune 74.7% returning against 78.5%, Gujarat 64.8% returning against 69.3%, Madhya Pradesh 61.8% returning against 67.8%).
Hiking stays the biggest sport online: ₹71.6 L so far in October.
Pune₹160.3 L
Returning customers 74.7% (year 78.5%)
SportOctobervs usual month
₹25.2 L+10%
₹25.0 L-36%
₹19.6 L-15%
₹13.5 L-29%
₹11.0 L-19%
Gujarat₹121.9 L
Returning customers 64.8% (year 69.3%)
₹23.1 L-26%
₹14.1 L-24%
₹12.8 L+18%
₹11.9 L-23%
₹9.6 L-24%
Madhya Pradesh₹88.0 L
Returning customers 61.8% (year 67.8%)
₹23.6 L+8%
₹10.9 L+90%
₹9.1 L-20%
₹7.6 L-11%
₹7.6 L-22%
“vs usual month” compares October so far with the sport's average month from January to September. Pune cycling: ₹25.2 L so far against a usual ₹22.9 L, so +10%, with October not over yet.
Digital orders through each store, Jan to Oct
₹183.7 LOct ₹10.9 L
₹134.7 LOct ₹9.7 L
₹104.9 LOct ₹8.2 L
₹91.1 LOct ₹10.7 L
₹88.5 LOct ₹5.8 L
₹76.9 LOct ₹6.8 L
₹69.9 LOct ₹6.1 L
₹69.1 LOct ₹8.3 L
₹58.0 LOct ₹6.3 L
₹57.6 LOct ₹6.5 L
₹55.6 LOct ₹5.2 L
₹46.5 LOct ₹3.3 L
₹25.1 LOct ₹3.5 L
```

After clicking **Gujarat**:
```text
Gujarat₹55.11 L · biggest: Winter Season
| Campaign | Oct | Nov | Dec | Q4 | Share
| Winter Season (15 Oct - 30 Jan) | ₹0.73 L | ₹2.93 L | ₹5.77 L | ₹9.43 L | 17.1%
| Climbing and Trekking (Nov) | - | ₹1.95 L | ₹4.85 L | ₹6.80 L | 12.3%
| Navratri / Dussehra (11-20 Oct) | ₹4.50 L | - | - | ₹4.50 L | 8.2%
| Diwali (24-26 Oct), Gift a Sport | ₹3.63 L | - | - | ₹3.63 L | 6.6%
| Running + Kiprun launch (21 Oct - 30 Nov) | ₹1.02 L | ₹4.68 L | - | ₹5.70 L | 10.3%
| Kids Fest (31 Oct - 2 Nov), Children's Day (14 Nov) | ₹1.89 L | ₹2.73 L | - | ₹4.62 L | 8.4%
| Black Friday (27-30 Nov) | - | ₹4.10 L | - | ₹4.10 L | 7.4%
| Adani Marathon (29 Nov) | - | ₹2.34 L | - | ₹2.34 L | 4.2%
| Christmas (19-31 Dec) | - | - | ₹4.16 L | ₹4.16 L | 7.5%
| Travel (15 Oct - 31 Dec) | - | - | ₹5.54 L | ₹5.54 L | 10.1%
| Buffer + Express Delivery in Ahmedabad and OOC reels | ₹2.76 L | ₹0.39 L | ₹1.15 L | ₹4.30 L | 7.8%
```

After clicking **Madhya Pradesh**:
```text
Madhya Pradesh₹26.99 L · biggest: Winter Season
| Winter Season (25 Oct - 30 Jan) | ₹1.36 L | ₹2.47 L | ₹2.77 L | ₹6.60 L | 24.4%
| Diwali + Dussehra (16-20 Oct) | ₹2.38 L | ₹0.49 L | - | ₹2.87 L | 10.6%
| Running + Kiprun launch (21 Oct - 30 Nov) | ₹1.70 L | ₹1.48 L | - | ₹3.18 L | 11.8%
| Kids Fest (31 Oct - 2 Nov), Children's Day (14 Nov) | ₹0.75 L | ₹0.99 L | - | ₹1.73 L | 6.4%
| Black Friday (27-30 Nov) | - | ₹1.97 L | - | ₹1.97 L | 7.3%
| Climbing and Trekking | - | ₹1.18 L | ₹1.66 L | ₹2.85 L | 10.6%
| Anniversary | - | ₹0.30 L | - | ₹0.30 L | 1.1%
| Christmas (19-31 Dec) | - | - | ₹3.88 L | ₹3.88 L | 14.4%
| Unnamed line in the sheet | - | - | ₹2.22 L | ₹2.22 L | 8.2%
| Buffer | ₹0.34 L | ₹0.49 L | ₹0.55 L | ₹1.39 L | 5.1%
```

After clicking **Pune**:
```text
Pune₹38.00 L shown of ₹54.25 L · biggest: Winter Travel
| Dussehra / Festive (commercial, Oct) | ₹8.50 L | - | - | ₹8.50 L | 15.7%
| Kiprun (product launch, Oct) | ₹3.50 L | - | - | ₹3.50 L | 6.5%
| Winter Travel (OPCO, Nov) | - | ₹17.75 L | - | ₹17.75 L | 32.7%
| Trekking (sport of the month, Nov) | - | ₹2.00 L | - | ₹2.00 L | 3.7%
| End of Year Sale (commercial, Dec) | - | - | ₹6.25 L | ₹6.25 L | 11.5%
```

#### index › `runway`: The Q4 runway
- img: assets/img/winter-sky.jpg [alt: Clouds over a hill trail, winter campaign visual]; assets/img/gift-a-sport.jpg [alt: Gift a Sport campaign creative]; assets/img/gifts-1999.jpg [alt: Gifts under 1,999 rupees banner]; assets/img/gifts-footballers.jpg [alt: Gift ideas for footballers banner]; assets/img/surat-store.jpg [alt: Render of the new large-format Decathlon store in Surat]; assets/img/surat-grand-opening.jpg [alt: Grand opening Adajan Surat poster (printed with the earlier 20 December date)]; assets/img/surat-offer.jpg [alt: Adajan Surat opening offer: free cooler bag, backpack and shopping bag]
- vid:  [poster assets/posters/kiprun.jpg]

```text
August to March in one view. The highlighted band is the Q4 focus window. Stars mark the moments we are betting on.
Aug 2026SepOctNovDecJan 2027FebMar
National campaigns
Sale
New arrivals
★Winter Travel campaign
Travel
Footwear phase 4
Kiprun launch India
MH500 backpack
Fitness: Movement for All
Footwear
Sport of the month
Running
Climbing, trekking
Trekking
Commercial weekends and sales
Dussehra 7.5 Cr
Diwali sale 5.5 Cr
★Black Friday 12 Cr
Christmas sale
Republic Day sale
Sale campaign
Women's Day
Gifting and community
Navratri, Dussehra
★Kiprun community run
Kids festival
Sports Utsav Jr: skating workshop
Diwali: Gift a Sport
★Children's Day: back-to-school colouring books
Decathlon CSR initiatives
Christmas: Gift a Sport
★Adajan, Surat: grand launch 27 Dec
Uttarayan
Summer launch
Holi
External sports events
Khel Mahakumbh, Gujarat: 76 lakh players
HYROX
★Adani Ahmedabad Marathon
Pune International Marathon
Bajaj Pune Marathon
Khelo MP Youth Games
★Bajaj Pune Grand Tour (UCI cycling)
Vadodara Marathon: 1.1 lakh
Indore Marathon
Hoardings, influencers and AOPs
★Pune: 7 hoardings live
Gujarat and Bhopal: 11 hoardings live
Influencers: Pune 70, Gujarat 40, MP 40
50 influencer videos, 5M views
New AOPs, Nov-Dec: 114 (Pune 49, Gujarat 40, MP 25)
National campaignSale or commercial weekendLocal adaptation or eventStore openingSport of the monthExternal event, or today (10 Nov)★ Key event
Important campaigns
Kiprun launch
Our running brand goes to the runners first: clubs, community runs, marathons, bib pick-ups and a Santa Run.
7running clubs engaged
700runners at the launch
11community runs
10bib distributions with 5 Kiprun stalls
45influencer videos
4marathons with launch integration
2,000Santa Run runners
Winter + Travel
48% of winter turnover lands in Q4. Five moves to win it:
Influencers. 20 trek videos with route names and demos (1.5 Mn views), 10 footwear UGC videos (1 Mn) and creators showing lowest-price best-value offers. A further 40 influencers push quick commerce, targeting 5 Mn views.
In-store merch. A winter window with signage in every store, with a winning-points checklist.
In-store challenge. NH500 models to lift ABV.
Affiliation. 50 travel agencies onboarded as affiliates.
Travel meetups. Store meetups once 300 members are onboarded. Stores open an hour early to catch early footfall.
Gift a Sport
Festive gifting runs from Dussehra to Christmas with ready-made edits: gifts under ₹999, gifts under ₹1,999, Decathlon's Choice, gifts for footballers and gifts for runners.
Adajan, Surat: grand launch 27 Dec
A large-format store for Surat city and the towns around it: Dumas, Vesu, Adajan, Piplod and Vapi. Grand launch on Sunday 27 Dec. Gifts on bigger bills instead of discounts, Deca Runners classes, and twice the usual marketing spend in Q1. See the full opening plan.
```

#### index › `october`: October recap
- img: assets/posters/ig/DejcABnxu21.jpg [alt: Post by @letsplay_ahmedabad]; assets/posters/ig/DewQ1znDYeS.jpg [alt: Post by @letsplaysurat]; assets/posters/ig/De6Typ5jJG9.jpg [alt: Post by @letsplaygwalior]; assets/posters/ig/De8jWqqoXHh.jpg [alt: Post by @chal.dod]; assets/img/navratri-landing.jpg [alt: Decathlon Navratri landing page: नव-ऊर्जा, नव-खेल, new arrivals from 199 rupees, category tiles and Nine Days, Nine Gifts with kites, cornhole and a watch]; assets/img/hpgm/pune-wagholi.jpg [alt: Hoarding at Hyundai Service Centre, facing Pune, towards Wagholi]; assets/img/hpgm/pune-kesnand.jpg [alt: Hoarding at Kesnand Phata, facing Nagar, towards Pune]; assets/img/hpgm/pune-wakad-eurokids.jpg [alt: Hoarding at EuroKids, Wakad]; assets/img/hpgm/pune-bhumkar.jpg [alt: Hoarding at Bhumkar Bridge, Wakad]; assets/img/hpgm/pune-baner.jpg [alt: Hoarding at Baner]; assets/img/hpgm/pune-nibm.jpg [alt: Hoarding at Sanvidhan Chowk, NIBM]; assets/img/hpgm/pune-amanora.jpg [alt: Hoarding at Amanora Road]; assets/posters/ig/Deb6x1lIhiU.jpg [alt: Post by @life.of.ishikaa_]; assets/posters/ig/Degfrr-NKBh.jpg [alt: Post by @hotwanii]; assets/posters/ig/DeeSgvrI42D.jpg [alt: Post by @shreyasonawane_]
- vid:  [poster assets/posters/ig/DehJUqQtsej.jpg];  [poster assets/posters/ig/DeHTVs1MlIq.jpg];  [poster assets/posters/ig/Dd8J7lzNngs.jpg];  [poster assets/posters/ig/De8wddSJ_Md.jpg];  [poster assets/posters/ig/DerNs9uMOzh.jpg];  [poster assets/posters/ig/DeogOh8ueLw.jpg];  [poster assets/posters/ig/DepMy7ONzQT.jpg];  [poster assets/posters/ig/DeoDoocxnaM.jpg];  [poster assets/posters/ig/DebG9L9OsVr.jpg];  [poster assets/posters/ig/DebNi-qO9Gj.jpg];  [poster assets/posters/ig/DedpMdqodKv.jpg];  [poster assets/posters/ig/Dee6mA6tV09.jpg];  [poster assets/posters/ig/DebKjABBfhT.jpg];  [poster assets/posters/ig/Deb-eVJNxCV.jpg];  [poster assets/posters/ig/DeiwuE7zTkD.jpg];  [poster assets/posters/ig/DebNX_Lxffr.jpg];  [poster assets/posters/ig/DebOshCNj2q.jpg];  [poster assets/posters/ig/Deb7wcytcMK.jpg];  [poster assets/posters/ig/DebTJH2suat.jpg];  [poster assets/posters/ig/DedzO4doiQR.jpg];  [poster assets/posters/pickleball-october.jpg]
- external links: https://www.instagram.com/p/DejcABnxu21/; https://www.instagram.com/reel/DehJUqQtsej/; https://www.instagram.com/reel/DeHTVs1MlIq/; https://www.instagram.com/reel/Dd8J7lzNngs/; https://www.instagram.com/p/DewQ1znDYeS/; https://www.instagram.com/reel/De8wddSJ_Md/; https://www.instagram.com/reel/DerNs9uMOzh/; https://www.instagram.com/reel/DeogOh8ueLw/; https://www.instagram.com/reel/DepMy7ONzQT/; https://www.instagram.com/p/De6Typ5jJG9/; https://www.instagram.com/reel/De8jWqqoXHh/; https://www.instagram.com/reel/DeoDoocxnaM/; https://www.instagram.com/reel/DebG9L9OsVr/; https://www.instagram.com/reel/DebNi-qO9Gj/; https://www.instagram.com/reel/DedpMdqodKv/; https://www.instagram.com/reel/Dee6mA6tV09/; https://www.instagram.com/reel/DebKjABBfhT/; https://www.instagram.com/reel/Deb-eVJNxCV/; https://www.instagram.com/reel/DeiwuE7zTkD/; https://www.instagram.com/reel/DebNX_Lxffr/; https://www.instagram.com/reel/DebOshCNj2q/; https://www.instagram.com/reel/Deb7wcytcMK/; https://www.instagram.com/p/DebTJH2suat/; https://www.instagram.com/reel/DedzO4doiQR/; https://www.instagram.com/reel/Deb6x1lIhiU/; https://www.instagram.com/reel/Degfrr-NKBh/; https://www.instagram.com/reel/DeeSgvrI42D/

```text
What we ran this month and what it looked like: our posts, the Kiprun launch, the Pune boards and the creator shoot.
₹28.93 Crin-store sales, 1-26 October
+8.6%growth on last year (store report)
1.04 lakhcustomers, 74% of them returning
4.13 lakhitems sold
On our pages
Our social media
What went out this month on @letsplay_ahmedabad and @letsplaysurat: festive deals, Dussehra and the new shoe range. Tap a reel for sound. Scroll sideways to see all six.
View on Instagram@letsplay_ahmedabad
@letsplaysurat2.66 lakh views
@letsplay_ahmedabad
@letsplaysurat
View on Instagram@letsplaysurat
@letsplaypune468 views
18 October
Kiprun launch
Our running brand went to the runners first: 7 running clubs and 700 runners at the launch, with community runs and bib pick-ups to follow. Six reels and posts from the launch in Ahmedabad, Pune and Gwalior, from our pages and the runners themselves. Tap a reel for sound; scroll sideways to see them all.
@letsplaypune
@priyan_siuuuu_
View on Instagram@letsplaygwalior
Watch on Instagram@chal.dod
@ananta_runclub
Navratri, on our app and site
Navratri landing page
For Navratri the landing page went festive: नव-ऊर्जा, नव-खेल (new energy, new games), new arrivals from ₹199, category tiles under festive arches, and "Nine Days, Nine Gifts": a sport gift for each night, from kites at ₹699 to a cornhole set at ₹1,499 and a watch at ₹1,599.
From 10 October, Pune
Hoardings up in Pune
Seven boards live since mid-October, ₹9.35 L a month, each one placed on a road into one of our five stores. Tap a pin for the photo.
1. Hyundai Service Centre40 x 30 ft, ₹1.3 L a month
2. Kesnand Phata30 x 20 ft, ₹1.1 L a month
3. EuroKids45 x 30 ft, ₹1.4 L a month
4. Bhumkar Bridge40 x 30 ft, ₹1.25 L a month
5. Baner45 x 30 ft, ₹1.4 L a month
6. Sanvidhan Chowk30 x 30 ft, ₹1.5 L a month
7. Amanora Road40 x 20 ft, ₹1.4 L a month
Decathlon store Hoarding. Wagholi and Kesnand pins come from the photos' GPS stamps; the other pins are approximate. Download this map for Google My Maps
Around Dussehra, Pune
Influencer shoot: 15 Pune creators
One offer, fifteen voices: every creator took the Rockrider ST100 festive deal, ₹11,999 instead of ₹18,999, to their own followers. Tap a reel for sound. Scroll sideways to see all fifteen.
15Pune creators
15reels and posts
4.28 lakhcombined followers
115Kbiggest creator, @fit.vaibhav_06
@the.vogue.mayur
@saurabh__itankar
@fit.vaibhav_06
@maansakadam
@pavan.nayak1
@rahul_champawat
@goldenshadesoflife
@nandithachauhan
@tejaswinivalkunde
@chaitalisonawane_
@abhiis.co
@manishchandrajwar
Watch on Instagram@life.of.ishikaa_
Watch on Instagram@hotwanii
Watch on Instagram@shreyasonawane_
All of October
Pickleball across multiple academies
A month of pickleball events run with academies across the city, from day games to neon nights under UV lights.
754participants
524walk-ins to our stores
```

#### index › `ch-strategy`: 02

```text
The strategies around them
How we reach people: community plays, channels, hoardings and content.
```

#### index › `playbook`: Marketing playbook
- img: assets/img/hpgm/pune-wagholi.jpg [alt: Hoarding site: Hyundai Service Centre, facing Pune, towards Wagholi]; assets/img/hpgm/pune-kesnand.jpg [alt: Hoarding site: Kesnand Phata, facing Nagar, towards Pune]; assets/img/hpgm/pune-wakad-eurokids.jpg [alt: Hoarding site: EuroKids, Wakad]; assets/img/hpgm/pune-bhumkar.jpg [alt: Hoarding site: Bhumkar Bridge, Wakad]; assets/img/hpgm/pune-baner.jpg [alt: Hoarding site: Baner]; assets/img/hpgm/pune-nibm.jpg [alt: Hoarding site: Sanvidhan Chowk, NIBM]; assets/img/hpgm/pune-amanora.jpg [alt: Hoarding site: Amanora Road]; assets/img/hoard/baroda-akota-live.jpg [alt: Hoarding site: Akota, DMart parking terrace]; assets/img/hoard/baroda-fatehgunj-live.jpg [alt: Hoarding site: Fatehgunj, Bull Circle]; assets/img/hpgm/baroda-gotri.jpg [alt: Hoarding site: Gotri Bridge, towards Natubhai Circle]; assets/img/hoard/baroda-subhanpura-live.jpg [alt: Hoarding site: Subhanpura, facing Ellorapark, towards Gorwa]; assets/img/hpgm/rajkot-bhaktinagar.jpg [alt: Hoarding site: Bhaktinagar Circle]; assets/img/hpgm/rajkot-kishanpara.jpg [alt: Hoarding site: Kishanpara Circle, facing Mahila College]; assets/img/hpgm/surat-palumra.jpg [alt: Hoarding site: Pal Umra Bridge, towards SVNIT]; assets/img/hpgm/bhopal-vyapam.jpg [alt: Hoarding site: Vyapam Square, Link Road No. 1]; assets/img/hpgm/bhopal-kamlapark.jpg [alt: Hoarding site: Kamla Park]; assets/img/hpgm/pune-baner.jpg; assets/img/hpgm/pune-bhumkar.jpg

```text
Every hoarding on the road this winter, then how each strategy shows up in the street, on the phone and in the store. Pick a channel.
On the road: winter hoarding programme
18sites in 6 cities
₹20.75 La month, all sites
₹41.5 Lfor November and December
11 livePune 7 and Baroda 4 (photos 10 Nov); Ahmedabad, Rajkot and Bhopal go live in November
Pune7 sites, ₹9.35 L a monthAhmedabad2 sites, ₹3.5 L a monthBaroda4 sites, ₹1.65 L a monthRajkot2 sites, ₹2.8 L a monthSurat1 site, ₹1.9 L a monthBhopal2 sites, ₹1.55 L a month
Baroda4 hoardings
Surat1 hoarding
Bhopal2 hoardings
LivePune 1
Hyundai Service Centre, facing Pune, towards Wagholi40 x 30 ft, Nov-Dec 2026, ₹1.3 L a month
Catches Nagar Road traffic just before our Wagholi store, on the city's eastern entry.
LivePune 2
Kesnand Phata, facing Nagar, towards Pune30 x 20 ft, Nov-Dec 2026, ₹1.1 L a month
The first board on the way in from Nagar and the new Wagholi and Kesnand townships.
LivePune 3
EuroKids, Wakad45 x 30 ft, Nov-Dec 2026, ₹1.4 L a month
Beside a preschool on the school run: parents and families, a few minutes from Decathlon Wakad.
LivePune 4
Bhumkar Bridge, Wakad40 x 30 ft, Nov-Dec 2026, ₹1.25 L a month
Where Hinjewadi IT traffic leaves the highway for Wakad: our time-poor professionals pass it twice a day.
LivePune 5
Baner45 x 30 ft, Nov-Dec 2026, ₹1.4 L a month
A young, high-income belt near the Balewadi sports complex with no store of its own; the board pulls it to Wakad and SGS.
LivePune 6
Sanvidhan Chowk, NIBM30 x 30 ft, Nov-Dec 2026, ₹1.5 L a month
The main junction of the NIBM and Undri belt, our NIBM store's catchment of young families and new housing.
LivePune 7
Amanora Road40 x 20 ft, Nov-Dec 2026, ₹1.4 L a month
On the road into Amanora and Magarpatta: offices by day, mall shoppers by evening, all heading past Decathlon Amanora.
LiveBaroda 1
Akota, DMart parking terrace20 x 20 ft, Nov-Dec 2026, ₹0.4 L a month
Above a DMart car park: families doing their weekly shop, already in a planned-purchase mood.
LiveBaroda 2
Fatehgunj, Bull Circle20 x 20 ft, Nov-Dec 2026, ₹0.35 L a month
One of the city's busiest circles, close to MS University: students and first-job buyers.
LiveBaroda 3
Gotri Bridge, towards Natubhai Circle20 x 20 ft, Nov-Dec 2026, ₹0.5 L a month
West Vadodara's growing residential belt, with heavy evening traffic towards Natubhai Circle.
LiveBaroda 4
Subhanpura, facing Ellorapark, towards Gorwa25 x 15 ft, Nov-Dec 2026, ₹0.4 L a month
Settled residential neighbourhoods with schools and coaching classes around: parents and teenagers.
Live from NovRajkot 1
Bhaktinagar Circle40 x 20 ft, Nov-Dec 2026, ₹1.5 L a month
A main circle in a one-store city: one big board reaches most of Rajkot's daily traffic.
Live from NovRajkot 2
Kishanpara Circle, facing Mahila College40 x 20 ft, Nov-Dec 2026, ₹1.3 L a month
Faces a women's college: young women and families in the city where padel and pickleball grew fastest.
Not booked yetSurat 1
Pal Umra Bridge, towards SVNIT40 x 20 ft, Nov 2026 - Oct 2027, ₹1.9 L a month
Between Adajan, Piplod and Vesu: planned as a year-long anchor for the new Adajan store. Not booked yet.
Live from NovBhopal 1
Vyapam Square, Link Road No. 120 x 10 ft, Nov-Dec 2026, ₹0.75 L a month
A busy square on Link Road No. 1, one of the main roads across the new city.
Live from NovBhopal 2
Kamla Park20 x 10 ft, Nov-Dec 2026, ₹0.8 L a month
Near the Upper Lake, on the road between the old city and the new: steady all-day traffic.
Site photo to comeLive from NovAhmedabad 1
Ahmedabad hoarding 1, site to be confirmedSize to be confirmed, Nov-Dec 2026, ₹1.75 L a month
Our two Ahmedabad stores, Motera and Nexus, get the same road presence in sale weeks as the rest of Gujarat.
Site photo to comeLive from NovAhmedabad 2
Ahmedabad hoarding 2, site to be confirmedSize to be confirmed, Nov-Dec 2026, ₹1.75 L a month
Map pins are approximate. Ahmedabad: 2 hoardings at ₹3.5 L a month for the two; sites and photos to follow. Baroda photos (Akota, Fatehgunj, Subhanpura) show our Kiprun boards live on 10 Nov; Rajkot and Bhopal photos show the booked sites before our creative goes up. Nothing is booked in Surat yet: the Pal Umra board is planned for a year (₹22.8 L), and a Krishna 360 proposal of 22 sites is under review (see the Surat section).
Hoardings and OOH35%
Practice-place hoardings (AOP)25%
Playground activation5 stores
Quick commerce and delivery2 hr
Events and community10%
Store openingsDec
Influencers25%
In-mall and in-store kit16 L
My Store pages13
Meta, app and landing pages65 L
WhatsApp channels, PN and RCS5%
Own the road during sale weeks
Hoardings run only for commercial campaigns and change with the season, so the road sees the sale before the phone does.
7Pune2Ahmedabad4Baroda2Rajkot2Bhopal1Surat
18hoardings this winter
+15%bills growth OKR
35%of the 2027 budget
Pune OOH plan, 2027
JanWakad: BIG OOH
SGS: Central visibility
Wagholi: Nagar Road entry
Amanora: Mall media
NIBM: Hyperlocal only
FebAmanora: Mall + women-led media
SGS: Central Pune
Others: digital/local
MarWakad + SGS: Cricket/pickleball OOH
Wagholi: Nagar Road
NIBM: Hyperlocal
AprAmanora + Wagholi: Summer/family visibility
Wakad: selective OOH
MayWakad + Amanora: Summer Sport
Wagholi: local visibility
JunWakad: Football OOH
SGS: City visibility
Others: local
JulLimited OOH: Digital + catchment media across 5 stores
AugWakad + SGS + Amanora: BIG National Sports Day visibility
Wagholi/NIBM: local
SepWakad + SGS: Launch visibility
Amanora: mall media
OctAmanora: BIG festive mall visibility
Wakad/SGS: OOH
NovWakad + SGS: Black Friday conversion OOH
Others: hyperlocal
DecAmanora + Wakad: Christmas/New Year
Wagholi/SGS: local
The strategy toolkit26 tactics and what each one gives us. Tap to open, then filter by the benefit you need.
Tactics marked MarCom are run centrally.
All
Awareness
Walk-ins
Turnover
Retention
Engagement
Direct revenue
MarCom-run
Society activations
New user growth, indirect walk-ins with a bait
GrowthWalk-ins
Running / cycling events bib collection
Good awareness, connects with youth (18-28)
YouthAwareness
School activation
Family and kids growth, direct turnover with moms, higher ABV
FamiliesTurnover
Women-centric events
Women bring family and friends, so bigger basket
Basket valueTurnover
Influencers
Fast reach, credibility, new audience trials
ReachAwareness + walk-ins
Cleanup drives and NGO events
Local goodwill, trust, PR and content value
GoodwillReputation
Playground events at stores
Direct footfall
FootfallWalk-ins
Playground occupancy increase
Repeat visits, longer dwell time, family purchases
HabitRetention
Hoardings
Visibility near the store, hard to measure
VisibilityAwareness
Metro wrap
Daily commuter reach, city-level presence
PresenceAwareness
Social media content of teammates
Authentic, trusted, humanises the store, low cost
TrustEngagement
Brand content (content of us)
Awareness, storytelling, product education, fuels ads and influencers
AwarenessAwareness + community
Meta ads
Targeted reach by area and age, trackable leads
TargetingDirect revenueMarCom
AOP hoarding at a sports partner academy
Sporty audience, players and parents, high relevance
RelevanceAwareness
In-store events
Direct footfall and conversion, community building
ConversionEngagement
WhatsApp / CRM broadcasts to existing customers
Repeat purchase, cheapest way to bring people back
RetentionRetentionMarCom
Google Business Profile and local search ads
Catches people already searching “sports store near me”
IntentDirect revenueMarCom
Corporate and office tie-ups
Employee wellness events, bulk and B2B orders
Walk-insTurnover
College and campus activations
Young buyers, sports clubs, event footfall
AwarenessYoung users
Gym, yoga studio and sports club tie-ups
Active audience, referral walk-ins
ReferralsWalk-ins
Free workshops and coaching
Bike repair, fitness and beginner sports: skills, trust, repeat visits
CommunityEngagement
Local tournaments and leagues at the store
Footfall, team bulk buying, content
TeamsEngagement + walk-ins
Referral and loyalty offers
Word of mouth, new users through existing ones
AdvocacyAcquisition
Mall pop-ups
Reach in high-footfall spots outside the store
ExposureAwareness + walk-ins
Local athlete or coach as ambassador
Credibility in the city, strong content
CredibilityAwareness
In-store visual merchandising
Conversion
FestiveConversion
Who each channel is for
Bring in new customers
Outdoor communication
Bring existing customers back
Push notifications and WhatsApp
Google My Business
Organic social
In-app
In-store kit
Facade
Flyers
TG headers
Standee
TV
A4 and stop rayons
```

After clicking **Practice-place hoardings (AOP) 25%**:
```text
Sport is everywhere
We turn the places people already play into small Decathlon stores. A kit wall with prices and QR codes goes up at swimming academies, sports academies, gyms, yoga studios, metro stations in Pune and Ahmedabad, parks, societies and corporate campuses.
See the displayScan the QR codeExplore or complete a kitShop onlineHome delivery or Click & Collect
114new AOPs opening in Nov and Dec
₹25.04 Lcost of the new AOPs
114already live today, 6 stores
3-5pilot locations per city in Q1
AOPs in Q4, store by store: what opens in November and December, and what it costs
114 new AOPs open in Q4: 53 in November and 61 in December. On top of the 114 already live: Wakad 58, Wagholi 15, SGS Mall 6, Amanora 22, Baroda 6, Bhopal 7.
| Store | Already live | New in Nov | New in Dec | New in Q4 | Cost per AOP | Q4 cost
| Pune49 new AOPs in Nov and Dec, ₹12.16 L
| Wakad | 58
| 5 | 6 | 11 | ₹25,000 | ₹2.75 L
| Wagholi | 15
| SGS Mall | 6
| 4 | 5 | 9 | ₹25,000 | ₹2.25 L
| NIBM | Not shared
| 4 | 5 | 9 | ₹24,000 | ₹2.16 L
| Amanora | 22
| Gujarat40 new AOPs in Nov and Dec, ₹8.66 L
| Motera | Not shared
| Nexus | Not shared
| Dumas | Not shared
| 4 | 5 | 9 | ₹23,000 | ₹2.07 L
| Baroda | 6
| 4 | 4 | 8 | ₹24,000 | ₹1.92 L
| Rajkot | Not shared
| 3 | 2 | 5 | ₹7,000 | ₹0.35 L
| Madhya Pradesh25 new AOPs in Nov and Dec, ₹4.22 L
| Indore | Not shared
| 5 | 5 | 10 | ₹20,000 | ₹2.00 L
| Bhopal | 7
| 4 | 5 | 9 | ₹20,000 | ₹1.80 L
| Gwalior | Not shared
| 3 | 3 | 6 | ₹7,000 | ₹0.42 L
| 13 stores | 114 | 53 | 61 | 114 | | ₹25.04 L
Live counts were shared for Wakad, Amanora, Wagholi, SGS, Baroda and Bhopal. Rajkot and Gwalior run lighter AOPs at ₹7,000 each.
```

After clicking **Playground activation 5 stores**:
```text
Keep the court busy
Five stores have their own playground: Indore, Wagholi, Surat (Dumas Road), Baroda and Motera. A busy court is the best ad a store has. We spend ₹2.5 L on influencers who tell the city about our playgrounds and keep them busy, alongside continuous events, social media and push notifications.
Influencers show the courtPeople come and playMore bookingsPlay, then shop inside
₹2.5 Linfluencers for the playgrounds
5stores with a playground
15 NovIndore playground revamped
2goals: engagement first, then bookings
How each court gets used
Indore: no playground communication yet. By 15 November the playground is revamped, with updated communication; then weekend leagues, weekday evening open play and a push to Indore app users before each session
Motera, Dumas Road (Surat) and Wagholi: we start spending on influencers here, first to get more people engaging on the playgrounds, second to get more bookings
Motera: the template: Yoga Day filled this court with hundreds of people; repeat with monthly community mornings
Wagholi: family and kids' sessions on weekends for the Wagholi and Kharadi housing belt; society groups invited by WhatsApp
Surat, Dumas Road: evening box cricket and pickle sessions, kept running as Adajan opens so Dumas stays busy
Baroda: school and academy slots on weekday afternoons, open play on weekends
Every court: a fixed weekly slot people can plan around, a reel or story from every session, and a push notification to nearby customers before the next one
```

After clicking **Quick commerce and delivery 2 hr**:
```text
Sport, delivered in 2 hours
Express delivery is already live in Ahmedabad and Pune. In Surat it goes live with the Adajan opening on 27 December. From December to March we animate it in these three cities: only pin codes we can really serve, the stock people order online, and a 2-Hour Promise our teammates talk about in store.
Traffic +18%CVR 1.6%, +7%Orders +22%ABV +6%Digital TO +27%
100+express orders a day by Q1, at minimum
Express delivery, December to March
DecemberAlready live in Ahmedabad and Pune; Surat goes live with the Adajan opening on 27 Dec. Check every pin code within 5 km is serviceable end to end (pick, pack and rider), not just in radius on paper. Year-end sale: “Need it before New Year? Get it in 2 hours.”
JanuaryGeo-fenced WhatsApp, SMS and app push only to pin codes inside the 5 km zone: “2-hour delivery now live in your area”. Uttarayan in Ahmedabad and Surat: “Need it before Uttarayan? Get it in 2 hours.” Republic Day sale.
FebruarySociety, academy and corporate-park tie-ups inside the radius, with a small QR-code drive at the gate for the nearest store. The 4-6 week pilot ends: keep what works.
MarchHoli and Women's Day: “Need it before Holi? Get it in 2 hours.” Re-check online order rankings, drop dead SKUs, add new ones for summer.
Every month
Visible where it matters: express delivery shown in store and on the app for these cities, not a generic national banner
Right stock in the stores: 3-6 months of SKU-level online orders for Pune and Ahmedabad, checked against on-hand stock; high-demand online SKUs flagged
Pilot and track: 4-6 weeks, reviewed every week
Teammates sell the 2-Hour Promise: communication where customers wait (cash counters, lifts, playgrounds, trial rooms), as the 5 Bangalore stores do, and our promotional videos shared in local communities
WhatsApp alerts by pin code when express goes live for a customer's area
```

After clicking **Events and community 10%**:
```text
Show up where people play
Pop-ups, external events, school visits and society activations, plus the Heritage Run: a Sunday-morning walk, run or yoga session in every city, with a story stop at a landmark the city is proud of. Partnered events only, and the big ones go through Decathlon Play. Planned to the end of Q1 2027.
Sunday 6:30 amWalk, run or yoga10-minute story stop at the landmarkBreakfast and a reelNext Sunday, next city
8 Lstore events, Q4
500runners at in-store meetups
10apartments for the Workshop Mela
1.38purchase frequency OKR
Q1 2027: one theme a month, and the event in each city
JanuaryFitness events in every city: the Sunday walks, runs and yoga below
FebruaryBeach Day in Surat
MarchWomen's Day events across all 13 stores, Saturday and Sunday
PuneHeritage walk, 3KJanuary
Shaniwar Wada to Lal Mahal
Old Pune's peths
Built in 1732 by Peshwa Bajirao I, Shaniwar Wada was the seat of the Peshwas. Lal Mahal, a short walk away, stands where young Shivaji grew up.
Stores: Wakad, SGS Mall, Amanora, NIBM, Wagholi
PuneTrail walk up the fortJanuary
Sinhagad trail
Fort trek
In 1670 Tanaji Malusare scaled the cliff to win the fort back and died doing it: “Gad aala, pan sinha gela”, the fort is won but the lion is lost.
Stores: All Pune stores
AhmedabadHeritage walk, 3KJanuary
The old city's pols
India's first UNESCO World Heritage City
Ahmedabad's walled city became India's first World Heritage City in 2017: gated pols, carved wooden homes and the Sidi Saiyyed mosque's stone jaali.
Stores: Motera, Nexus
Ahmedabad5K runJanuary
Riverfront to Sabarmati Ashram
Riverfront run
Gandhi lived at the ashram from 1917 to 1930 and set out from it on the Dandi March.
VadodaraSunrise yoga, then a 3K walkJanuary
Laxmi Vilas Palace and Sayaji Baug
Royal Baroda
Built in 1890 for Maharaja Sayajirao Gaekwad III, the palace is said to be four times the size of Buckingham Palace.
Stores: Baroda
Surat5K run in January; Beach Day in FebruaryJanuary and February
Tapi riverfront to Surat Castle
The old port city
The castle went up in the 1540s to guard Surat from Portuguese raids, when Surat was the Mughal empire's great port.
Stores: Dumas Road, Adajan
RajkotHeritage walk, 3KJanuary
Kaba Gandhi no Delo
Gandhi's boyhood home
Gandhi grew up in this Rajkot house; the family home is now a memorial a short walk from Race Course.
Stores: Rajkot
Indore5K runJanuary
Rajwada to Lalbagh Palace
The Holkars' city
The seven-storey Rajwada was the Holkars' palace; Ahilyabai Holkar's rule is still Indore's pride.
Stores: Indore
BhopalSunrise yoga by the lake, then a 5K runJanuary
Upper Lake, VIP Road
The city of lakes
Bhopal's Upper Lake is credited to Raja Bhoj in the 11th century; the lakeside road is the city's favourite morning run.
Stores: Bhopal
GwaliorWalk up to the fortJanuary
Up to Gwalior Fort
The pearl of fortresses
A temple inside the fort holds one of the oldest known inscriptions of the zero, from the 9th century; Babur called the fort the pearl among fortresses.
Stores: Gwalior
Residential society plan, Pune, January to March
JanWakad/Punawale: Teen sport
Wagholi: Family fitness
Amanora/Hadapsar: Family sport
NIBM/Undri: Fitness
SGS: Central Pune communities
FebWomen fitness - NIBM, Amanora, Wakad
MarCricket/football leagues - Wakad + Wagholi; pickleball - Amanora
```

After clicking **Store openings Dec**:
```text
Adajan, Surat: grand launch 27 December
Chalo Ramiye, Adajan! Every opening follows the Surat plan: the banner goes up the day the deal is signed, hoardings are locked on 30 Oct, all 10 AOPs and 2 hoardings are live by 15 Nov, then events and community activation warm up the catchment before the grand launch on Sunday 27 Dec, when express delivery for Surat goes live too. Gifts on bigger bills, never discounts. The full plan is in the Surat section.
₹85 Lfirst 3 days
₹2.5 Crfirst 30 days
49,600walk-ins target, first month
₹50cost per walk-in
Surat new-store timeline and key opening strategies
Deal signed“Opening in December 2026” banner goes up on the building, with a QR code to apply for jobs
30 OctHoardings finalised, led by the Pal Umra Bridge board
By 15 NovAll 10 AOPs and 2 hoardings live in the Adajan area (placement from 1 Nov)
Nov - DecEvents and community activation: teaser, date reveal, Ramat Rath in 36 societies, treasure hunt, Happy Streets, creators' preview, 10-day countdown
Sun 27 DecGrand launch: inauguration with Surat athletes, Tapi Sunrise Run, sports carnival. Express delivery for Surat goes live.
27 Dec - 25 JanFirst 30 days to ₹2.5 Cr: Night Carnival, New Year run, leagues, Kai Po Che! for Uttarayan
Key opening strategies to warm up the catchment
Treasure hunt, marketed with influencers: blue mystery boxes around the catchment, clues dropped by local creators, the final clue in the store
Night carnival for families: box cricket under lights, pickleball, skating, a DJ and food trucks
New Year run and Happy Streets: car-free Sunday mornings and a run that ends inside the store
Society events: sports days that let families try a sport together
```

After clicking **Influencers 25%**:
```text
Local voices, buying intent
Top local creators spread the offer across the city and send people who came to buy. That makes conversion easier and lifts the basket. One influencer a week through Q4, 40 each in Gujarat and MP.
21campaigns done
0.08cost per view, YTD
40.3 Limpressions, YTD
63.7Klikes and comments, YTD
20 mnviews target
Pune creator list by month
JanFitness/running creators mapped to each store catchment
FebWomen creators + athletes
MarCricket/football/pickleball creators
AprFamily + kids creators
MayParenting + family creators
JunFootball + running athletes
JulFitness + monsoon creators
AugLocal athletes from all 5 catchments
SepTechnical product reviewers
OctPune lifestyle + family creators
NovValue/deal creators
DecGifting + lifestyle creators
```

After clicking **In-mall and in-store kit 16 L**:
```text
11 Lin-mall media, Q4
3 Lin-store communication
2 Lflyers, BF sale +25%
In-mall communication live now: Pune, Gujarat and MP
₹1.44 LPune, a month
₹3.58 LGujarat, a month
₹1.90 LMadhya Pradesh, a month
₹6.92 LWest, a month
Pune
Amanora₹0.50 L a month
SGS Mall₹0.54 L a month
NIBM, Tribeca Mall₹0.40 L a month
Gujarat
Nexus Ahmedabad, atrium₹3.40 L a month
Nexus Ahmedabad, atrium
Nexus Ahmedabad, banners₹0.18 L a month
Madhya Pradesh
Bhopal, atrium and parkingPart of the opening plan
Bhopal, atrium and parking
Bhopal, digital screens₹1.60 L a month
Bhopal, digital screens
Gwalior, mall facade₹0.30 L a month
```

After clicking **My Store pages 13**:
```text
Every store has its own page
In Decathlon terms each store's page on decathlon.in is its My Store page: the store photo, address and directions, opening hours, Google rating and reviews, contact, the store leader, services and events. All 13 West stores have one, so a local campaign can send people straight to their nearest store.
13My Store pages in the West
4.7 ★average Google rating
1.34 lakhGoogle reviews across the stores
The 13 My Store pages: tap one to open it
Wakad4.5 ★ 25,610 reviewsVision One Mall, Tathawade Rd, Pimpri-Chinchwad 4110338:00 am - 10:00 pm, store leader Faiz Mithadecathlon.in/store/wakad
Wagholi4.6 ★ 14,423 reviewsNagar Rd, next to Soyarik Garden, Wagholi 4122079:00 am - 9:00 pm, store leader Pankaj Khotdecathlon.in/store/wagholi
SGS Mall4.7 ★ 10,430 reviewsSGS Mall, Lower Ground Floor, Moledina Rd, Camp 41100111:00 am - 10:00 pm, store leader Ajinkya Nimbalkardecathlon.in/store/sgsmall
NIBM4.9 ★ 5,116 reviewsNIBM Post Office Rd, opp. Anandvan Forest, Kondhwa 41106011:00 am - 10:00 pm, store leader Adrine Varghesedecathlon.in/store/nibm
Amanora Mall4.7 ★ 7,338 reviewsLower Ground Floor, Amanora Town Centre, Hadapsar 41102811:00 am - 10:00 pm, store leader Pravin Rajandecathlon.in/store/amanoramall
Motera4.6 ★ 15,795 reviewsSH 71, next to McDonald's, GIDC Bhat, Motera 38000510:00 am - 10:00 pm, store leader Sumit Sahnidecathlon.in/store/motera
Nexus Ahmedabad4.6 ★ 5,959 reviewsNexus Ahmedabad One, Vastrapur 38001510:00 am - 10:00 pm, store leader Bhanu Pratapdecathlon.in/store/nexusahmedabad
Surat, Dumas Road4.5 ★ 11,557 reviewsDumas Rd, opposite Surat International Airport 39500710:00 am - 10:00 pm, store leader Rishi Joshidecathlon.in/store/dumas
Vadodara4.6 ★ 19,702 reviewsGotri - Sevasi Rd, opp. Kabir Farms, Gotri 39110110:00 am - 10:00 pm, store leader Ayusman Sahudecathlon.in/store/vadodara
Rajkot4.8 ★ 2,042 reviewsJP Sapphire, Race Course Rd, near GST Bhavan 36000110:00 am - 10:00 pm, store leader Abhishek Pandyadecathlon.in/store/rajkot
Indore4.5 ★ 12,743 reviews22/23 AB Rd, opp. Industry House, Old Palasia 45200110:00 am - 10:00 pm, store leader Kuldeep Singhdecathlon.in/store/indore
Bhopal4.9 ★ 1,400 reviewsLG-29, DB Mall, Arera Hills11:00 am - 10:00 pm, store leader Anjali Pandeydecathlon.in/store/bhopal
Gwalior4.8 ★ 1,612 reviewsKeshar Towers, Racecourse Rd, Keshar Bagh 47400511:00 am - 9:30 pm, store leader Langston Vareeddecathlon.in/store/gwalior
```

After clicking **Meta, app and landing pages 65 L**:
```text
Paid social that lands on a local page
Meta reels and stories carry each campaign, and ads land on campaign pages in the app and on decathlon.in. Festive pages can speak the local language, like नव-ऊर्जा, नव-खेल for new arrivals from ₹199.
65 LMarCom spend in Q4
0.45%of turnover
20%bounce-rate target
50 Lturnover from omni campaigns
Pune website banners, 2027
JanStart Your Sport: New Year, New Moves
FebMove Together: Women's Sport Month
MarFind Your Sport: Cricket / Pickleball / Football
AprGudi Padwa April 7
MayMaharashtra Day May 1st
JunFootball + Yoga: Move Your Way
JulWARI
AugIndia Plays: Find Your Sport
SepGanesh Chaturthi Sept 4th
OctGift a Sport: Sport for Everyone
NovBlack Friday: Best Value for Sport
DecGift a Sport: New Year, New Sport
```

After clicking **WhatsApp channels, PN and RCS 5%**:
```text
Bring them back
Existing customers hear about sales, new arrivals and local events on channels they already check: WhatsApp, push notifications in the app and RCS messages. The WhatsApp channel also carries express delivery: customers in pin codes a store can reach in 2 hours get a message when express is live for them, so the nearest store becomes the fastest one.
Store sets its express pin codesWhatsApp alert to customers in those pin codesOrder in the appDelivered from the nearest store in 2 hours
5 Lcustomers reached in Q1
2 hrexpress delivery, pin-code targeted
100+express orders a day by Q1
+15%returning customers in Q1
Months where WhatsApp and CRM lead in Pune
JanWhatsApp + Community + Instagram Reels
FebWomen creators + WhatsApp + Instagram + Community
MarPartner communities + Instagram + WhatsApp + OOH
AprSchools + Housing Societies + Meta + WhatsApp
JunFootball communities + Instagram + YouTube + WhatsApp
JulGym partnerships + CRM + Meta
SepInfluencers + Product content + CRM + Store
OctMall + OOH + Meta + WhatsApp + Influencers
NovCRM + Paid Digital + Retargeting + Store
DecCRM + WhatsApp + Influencers + Store
```

#### index › `calendar`: Content calendar
- img: assets/img/u-pickleball.jpg; assets/img/u-runclub.jpg; assets/img/u-trek-couple.jpg; assets/img/u-family-cycle.jpg
- vid:  [poster assets/posters/circuit-games.jpg];  [poster assets/posters/winter-gear.jpg];  [poster assets/posters/kiprun.jpg];  [poster assets/posters/process-vs.jpg];  [poster assets/posters/yoga-day.jpg];  [poster assets/posters/motera.jpg];  [poster assets/posters/run-like-a-girl.jpg]

```text
What goes on our Pune, Gujarat and MP pages, day by day, from today to the end of March. Each post is tied to a campaign, a sport or a local moment, with the hook, the feeling and the reason for the date. Click a post to jump to its brief.
How we write: three rules from Piyush Pandey
The man behind Fevicol, Cadbury and Asian Paints never sold a product. He staged a story and let the product end it. Every post below is written this way.
1
Prove it. Never explain it.
Fevicol never said 'strong glue'. It showed an egg a hammer couldn't break.
We never say 'durable' or 'great value'. We show a tent going up in two seconds while a baraat dances past, or a shoe still running after a year of Pune potholes. Stage the impossible; let the benefit become obvious.
2
Never manufacture emotion. Borrow the occasion.
Cadbury rode the cricket win India was already crazy about. Asian Paints rode Diwali homecomings.
Our feelings are already on the calendar: Diwali homecoming, Uttarayan terraces, Shivaji Maharaj Jayanti treks, IPL in every gully, Holi, a kid's first race. We plug the story into a feeling people already have.
3
The brand resolves the story. It doesn't narrate it.
In Asian Paints ads the family is the hero. Fevicol shows up in the last five seconds.
The kid, the mother, the gully team are the protagonists. Decathlon arrives at the end as the thing that made it possible: a bib, a ball, a store door opening. Never a product monologue.
Five pillars, five feelings
Every post has one job and one emotion. Target share of posts, and what this plan delivers.
EmotionalPride, nostalgia, belonging
23%target 20%
Fun & engagementLaughter, play, sharing
18%target 20%
LearnConfidence, trust
11%target 15%
Community & eventsBelonging, FOMO
33%target 25%
Product & offersDesire, urgency
15%target 20%
97posts from 26 Oct to 31 Mar
17influencer and creator videos
6hero films, one a month
67 reels15 carousels7 statics7 story series1 live
All markets
Pune
Gujarat
Madhya Pradesh
Oct 2026
Nov 2026
Dec 2026
Jan 2027
Feb 2027
Mar 2027
November 2026
Gift a Sport, chase the mountains
Sport of the month: Climbing and trekking
Call to action: Gift a sport this Diwali
Emotional 4Fun & engagement 3Learn 3Community & events 7Product & offers 5★ 4 creator videos
Hero film of the month
“Pehli cycle”
Borrowed occasion: Diwali homecoming
The story
A father in Ahmedabad still keeps the rusty cycle his own father gave him, polished every Diwali. His son comes home with a long box.
The impossible proof
Three generations, one bell. The old cycle still rings.
Decathlon resolves it
The box opens to a new Rockrider with a bow, for the grandson. Card: “Gift a Sport.”
Weather
30° / 15°, dry and clear
Who
IT professionals in Hinjewadi and Kharadi, weekend trekkers, students, sports-driven families
On locally
Diwali, Sinhagad and Rajgad fort treks
32° / 18°, dry
Business-owning and trading families, Surat's diamond and textile workers, Ahmedabad's cricket and Garba crowd
Diwali (Surat away 6-22 Nov), Adani Ahmedabad Marathon (29 Nov)
28° / 13°, cool nights
Students in Indore and Bhopal, government employees, young families; Gwalior's winter is the coldest in the cluster
Diwali, wedding season
November calendar
Mon
Tue
Wed
Thu
Fri
Sat
Sun
ReelKids Festival recap
CarouselYour first winter trek: 10 things to pack
4
Reel · ★ creatorTrek route video: Sinhagad at sunrise
5
CarouselGift a Sport: gifts under ₹999
6
ReelThe first cycle you ever got
7
StoryThis or that: which gift would you rather get?
8
StaticHappy Diwali from 13 stores
9
10
Reel · ★ creator30 days in my trek shoes
12
ReelHow to layer for a Himalayan trek
13
14
ReelChildren's Day: colouring books are in
15
ReelKids vs parents: obstacle course race
16
17
ReelSport for every kid: our CSR work
18
Reel · ★ creatorSaputara weekend kit
19
CarouselPacking the MH500: one bag, one weekend
20
StoryGuess the trek from the emoji
21
23
ReelAdajan, the date is out: 27 December
24
25
ReelBlack Friday countdown: 2 days
26
Reel · ★ creatorBlack Friday haul preview
27
CarouselBlack Friday is live: best value for sport
28
ReelHYROX weekend: train like a racer
29
ReelAdani Marathon: finisher stories
30
StoryBlack Friday: last day
Every post in November, in brief
1Sun
ReelAll
Kids Festival recap
“This is what a weekend without screens looks like.”
Recap on the busiest day of the festival pulls families in for day 3.
2Mon
CarouselAll
Your first winter trek: 10 things to pack
“Save this before you book.”
November's sport is climbing and trekking, and 48% of winter turnover lands in Q4.
4Wed
ReelPune★ creator
Trek route video: Sinhagad at sunrise
“One fort. One bag. Back before breakfast.”
Part of the 20 trek route videos in the winter plan (1.5 Mn views target).
5Thu
Gift a Sport: gifts under ₹999
“Sorted your Diwali gifts? We did.”
Gifting edits drive the November turnover; under ₹999 is the easiest yes.
6Fri
The first cycle you ever got
“Remember who gave you your first cycle?”
Gifting works on emotion, not price. Surat goes quiet from 6 Nov for Diwali, so this is a brand post, not a sale.
7Sat
StoryAll
This or that: which gift would you rather get?
“Tap to pick.”
Easy engagement on a festive Saturday; answers shape the next gifting reel.
8Sun
StaticAll
Happy Diwali from 13 stores
“From all of us in blue, to all of you.”
Diwali day: no hard sell, just the team.
10Tue
ReelGujarat★ creator
30 days in my trek shoes
“I wore them up Saputara. Here's what happened.”
One of 10 footwear UGC videos in the winter plan (1 Mn views target).
12Thu
How to layer for a Himalayan trek
“Three layers. Zero shivering.”
Teaches the base, mid and shell layer system; leads straight to the winter window in store.
14Sat
Children's Day: colouring books are in
“Colour it. Bring it. Win it.”
The back-to-school activation: kids bring the finished colouring page to a store for a reward. Every page is a family walk-in.
15Sun
ReelPune
Kids vs parents: obstacle course race
“Who's faster? The comments decide.”
Fun, family and shareable; keeps the Children's Day story going over the weekend.
17Tue
Sport for every kid: our CSR work
“Some kids get their first ball from us.”
November is CSR month in the campaign calendar; purpose content earns trust.
18Wed
Saputara weekend kit
“Everything for Saputara fits in one bag.”
The MH500 backpack focus is in November; Gujarat's trekking season is October to February.
19Thu
Packing the MH500: one bag, one weekend
“Packing hack you'll actually use.”
Product education for the month's hero backpack.
20Fri
Guess the trek from the emoji
“🏰⛰️🌅 = ?”
Light engagement that keeps trekking top of mind between bigger posts.
23Mon
ReelSurat
Adajan, the date is out: 27 December
“Chalo Ramiye, Adajan! 27 December.”
Surat is back from Diwali by 23 Nov, which is why the plan holds the reveal until then.
25Wed
Black Friday countdown: 2 days
“Make the list. We'll handle the prices.”
Black Friday is a 12 Cr weekend target, up 22% on last year.
26Thu
ReelMP★ creator
Black Friday haul preview
“Here's what's going in my cart on Friday.”
Creator previews make the sale feel personal; MP's 40 influencers carry it.
27Fri
Black Friday is live: best value for sport
“It's on. Best value for sport.”
Launch post for the biggest Q4 weekend after the year-end sale; stories every few hours after it.
28Sat
HYROX weekend: train like a racer
“8 stations. 8 km. Are you in?”
HYROX lands on Black Friday weekend; fitness racers are high-intent shoppers.
29Sun
ReelGujarat
Adani Marathon: finisher stories
“You inspired me to start.”
Ahmedabad's marathon. Finisher stories are the line we want people to say back to us.
30Mon
Black Friday: last day
“Last call. Midnight.”
Urgency on the final day of the 12 Cr weekend.
Reels to take inspiration from
Seven reels that set the tone for our local pages. Each one follows the rules above. Tap to play with sound.
Mall circuit games
The hook
Forty strangers sweating in the middle of a mall.
Why it works
Nobody explains the workout. The crowd is the proof. Fast cuts, real breath, the court does the selling.
Where we'll use it
January's Movement for All, shot at SGS, Amanora and Nexus.
Winter gear on a budget
A parent says the total out loud.
Value is never claimed, it's shown: one receipt, one toddler, one full winter kit. The price is the punchline.
Gift a Sport under ₹999 and the Winter Travel edit.
Kiprun run club
Sweaty faces, bibs, a group photo.
The runners are the hero; Kiprun is in every frame but never the subject. Community tells the story, the brand just shows up in it.
The Kiprun Challenger launch in March.
Process vs product
The mess first. The magic after.
Showing the set-up earns the finale. People trust what they saw being built.
The Surat countdown, 17 to 26 December.
Yoga Day from above
One drone shot. A playground of mats.
Scale proven in one second, no voice-over needed. The bigger the crowd, the smaller the logo can be.
Yoga Day 2027 and Sports Utsav.
Decathlon Motera
Our own teammate on the mic at sunrise.
Local faces beat any creator for trust. The store becomes a person, not a building.
Gujarat pages, Uttarayan week and store-event recaps.
Proud to run like a girl
One caption. Fourteen seconds.
It borrows a feeling women already carry and simply turns up the volume. Short enough to watch twice, which the algorithm loves.
Women's Sport Month in February and Women's Day.
Influencer videos, when and where
Every creator video in the plan, with the Q4 influencer budget per state from the line-item sheet.
Q4 influencer budget (L)
Oct1.5
Nov5.0
Dec1.5
8.0 L
Oct2.2
Nov3.2
Dec4.0
9.4 L
Oct1.3
Nov1.9
Dec2.1
5.3 L
Pune's November spike (5 L) is Winter Travel. Gujarat and MP each also run a pool of 40 creators.
29 Oct
Parent creator in each stateKids Festival invite
All
4 Nov
Pune trek creatorTrek route video: Sinhagad at sunrise
10 Nov
Gujarat creator (footwear UGC)30 days in my trek shoes
18 Nov
Gujarat creator waveSaputara weekend kit
26 Nov
MP creator waveBlack Friday haul preview
MP
3 Dec
MP trek creatorTrek route video: winter sunrise
24 Dec
Surat city creatorsCreators' preview of the Adajan store
Surat
27 Dec
Pune lead creatorMy 2026 in sport
7 Jan
Pune fitness creator30 days of New Moves: day 1
18 Jan
MP creator waveMovement for All in Indore
28 Jan
Pune women creatorWhy I started running
5 Feb
Gujarat couple creatorsCamping date night
16 Feb
MP women creatorsShe plays: MP's women athletes
26 Feb
Gujarat runner creatorNew shoes, first 5K
3 Mar
Women creators, all statesWomen's Day: why we play
16 Mar
Gujarat cricket creatorBox cricket night league
29 Mar
Parent creatorsSummer camp sign-ups
```

After clicking **Pune**:
```text
Every post in November for Pune, in brief
```

After clicking **Gujarat**:
```text
Every post in November for Gujarat, in brief
```

After clicking **Madhya Pradesh**:
```text
Every post in November for Madhya Pradesh, in brief
```

After clicking **Oct 2026**:
```text
October 2026
Diwali sale and Kids Festival
Sport of the month: Running
Call to action: Bring the family this weekend
Fun & engagement 1Community & events 2Product & offers 2★ 1 creator videos
“The quietest Diwali holiday”
Borrowed occasion: Diwali holidays and the Kids Festival
A grandmother complains that the grandkids have been glued to phones all Diwali break.
The whole society's Wi-Fi goes down on Saturday. Not one kid notices: they're all at the Kids Festival on skates, scooters and a football pitch.
Last five seconds: the Decathlon playground at dusk. “No screens this weekend. Only play.”
31° / 18°, monsoon over
Navratri, Dussehra
October calendar
ReelDiwali sale teaser: 4 days to go
Reel · ★ creatorKids Festival invite
StoryPoll: which sport should your kid try first?
31
ReelSports Utsav Junior: skating workshop live
CarouselDiwali sale is live
Every post in October for Madhya Pradesh, in brief
27Tue
Diwali sale teaser: 4 days to go
“Wishlist now. Thank us on the 31st.”
Diwali sale target is 5.5 Cr, up 17% on last year. A short teaser builds the wishlist before the weekend.
29Thu
ReelAll★ creator
Kids Festival invite
“No screens this weekend. Only play.”
Kids Festival runs three days; the invite goes out two days before so families can plan.
30Fri
Poll: which sport should your kid try first?
“Skating, football or swimming? Vote.”
A low-effort poll that primes parents for the weekend and tells us which zones to staff.
31Sat
Sports Utsav Junior: skating workshop live
“First wobble. First glide. Same morning.”
The skating workshop runs 11 AM - 2 PM on 31 Oct. Real kids on skates is the most shareable content of the weekend.
Diwali sale is live
“Best value for sport, two days only.”
Opens the 31 Oct - 1 Nov sale with the top gifts and price points.
```

After clicking **Dec 2026**:
```text
December 2026
Trek, travel and a new home in Surat
Sport of the month: Trekking
Call to action: Chalo Ramiye, Adajan!
Emotional 5Fun & engagement 3Learn 2Community & events 8Product & offers 2★ 3 creator videos
“Surat nu jaman, Adajan ni ramat”
Borrowed occasion: Surat's love of food, and a new store
A Surti family plans a whole Sunday around food: locho at 9, undhiyu at 1, ghari for dessert.
By evening nobody can stand up. Grandpa, 72, challenges all of them to the Tapi Sunrise Run, and beats them.
Final shot: the Adajan store doors opening. “Surat is famous for its food. Now Adajan for its play.”
26° / 9°, cold nights
Winter wear season; Gwalior nights near 6°
December calendar
CarouselManali kit vs Europe kit
Reel · ★ creatorTrek route video: winter sunrise
ReelPack with me: winter trek edition
CarouselChristmas gifts for runners and footballers
CarouselChristmas sale is on
CarouselLast-minute gift guide by sport
StaticMerry Christmas: Gift a Sport
ReelYour 2026 sport, wrapped
Reel13 stores. One West. Thank you.
Every post in December for Madhya Pradesh, in brief
1Tue
Manali kit vs Europe kit
“Two trips. Two kits. One checklist.”
Matches the Manali and Europe kit bundles in the Surat plan; December is the winter-trip shopping month.
3Thu
Trek route video: winter sunrise
“Sunrise from the top. Worth the 5 AM alarm.”
Continues the trek route series in MP.
5Sat
Pack with me: winter trek edition
“Packing for 3 days in 30 seconds.”
A trend format that turns the winter checklist into entertainment.
10Thu
Christmas gifts for runners and footballers
“Gifts they'll actually use.”
Christmas gifting edit; sets up the 19-31 Dec Christmas sale.
19Sat
Christmas sale is on
“Gift a sport. Save on the season.”
Opens the 19-31 Dec Christmas sale across the cluster.
22Tue
Last-minute gift guide by sport
“Still shopping? Find their sport.”
Helps late shoppers in the last Christmas week.
25Fri
Merry Christmas: Gift a Sport
“The best gifts get used.”
Christmas day: warm brand moment.
29Tue
Your 2026 sport, wrapped
“Comment your sport of 2026.”
A wrapped-style engagement post that people share.
31Thu
13 stores. One West. Thank you.
“From Wakad to Gwalior: thank you.”
Year-in-review reel to end on gratitude.
```

After clicking **Jan 2027**:
```text
January 2027
New Year, New Moves
Sport of the month: Fitness
Call to action: Start your sport
Emotional 4Fun & engagement 3Learn 2Community & events 8Product & offers 2★ 3 creator videos
“The terrace war”
Borrowed occasion: Uttarayan
Two neighbouring terraces, a decade-long kite rivalry, and one aunty who has never lost.
Wind, sun and a 9-hour sky battle: her cap never flies off, her shades never slip, her chair never wobbles.
She cuts the last kite and calmly opens her cooler bag. Five-second end card: the Kai Po Che! terrace kit.
25° / 8°, coldest month
Makar Sankranti, Khelo MP Youth Games
January calendar
ReelNew Year, New Moves: what will you start?
StoryPick your 2027 sport
CarouselStarter kits: run, gym, yoga with a 30-day plan
StaticHappy Uttarayan and Makar Sankranti
Reel · ★ creatorMovement for All in Indore
CarouselRepublic Day sale starts: Made in India picks
ReelWhere your gear is made
ReelTricolour challenge
ReelRepublic Day: we play for India
ReelJanuary in numbers: New Moves
Every post in January for Madhya Pradesh, in brief
1Fri
New Year, New Moves: what will you start?
“This is your sign to start.”
January's Pune banner is 'Start your sport'; Fitness: Movement for All is the national theme.
2Sat
Pick your 2027 sport
“One sport. Twelve months. Pick it.”
A resolution poll that feeds the starter-kit post.
5Tue
Starter kits: run, gym, yoga with a 30-day plan
“Day 1 to day 30, sorted.”
Starter kits with a plan card are the bridge from resolution to purchase.
14Thu
Happy Uttarayan and Makar Sankranti
“Higher every year.”
Festival greeting; the city is on its terraces, so no selling.
18Mon
Movement for All in Indore
“Indore moves. Do you?”
MP creator wave on the national fitness theme.
20Wed
Republic Day sale starts: Made in India picks
“Made in India. Played everywhere.”
Opens the Republic Day sale with Made in India products.
22Fri
Where your gear is made
“This ball was made closer than you think.”
Builds trust in the Made in India range during the sale.
24Sun
Tricolour challenge
“Saffron, white, green: show us your kit.”
A UGC challenge for the Republic Day weekend.
26Tue
Republic Day: we play for India
“Every game is a little bit patriotic.”
Republic Day emotional moment.
30Sat
January in numbers: New Moves
“You moved. Here's proof.”
Community recap to close the month.
```

After clicking **Feb 2027**:
```text
February 2027
Move Together
Sport of the month: Camping
Call to action: Move together
Emotional 4Fun & engagement 4Learn 2Community & events 3Product & offers 2★ 3 creator videos
“She ran for the bus”
Borrowed occasion: Women's Sport Month
Every morning a Pune mother sprints to catch her daughter's school bus with the tiffin.
The neighbourhood starts timing her. She's faster every week.
The daughter hands her a race bib. Last frame: both at the start line, “Move together.”
28° / 11°, mild
Indore Marathon, Khajuraho Dance Festival
February calendar
ReelNew arrivals: shoes drop 1
CarouselYour first camping trip checklist
ReelWho's your sport partner?
StoryRate the date: trek or beach?
StaticLove what you play
Reel · ★ creatorShe plays: MP's women athletes
ReelPitch a tent in 2 seconds
CarouselFebruary sale: best of the month
ReelFebruary bloopers from our stores
Every post in February for Madhya Pradesh, in brief
1Mon
New arrivals: shoes drop 1
“New shoes. Same old you, but faster.”
February starts the first shoe drop of 2027.
3Wed
Your first camping trip checklist
“Night one, sorted.”
February is camping month on the Pune calendar.
7Sun
Who's your sport partner?
“Tag the one who never skips leg day with you.”
A tag-a-friend post that spreads organically.
13Sat
Rate the date: trek or beach?
“Vote and send it to them.”
Light weekend engagement.
14Sun
Love what you play
“Some loves last longer.”
Valentine's Day brand moment.
16Tue
She plays: MP's women athletes
“Gwalior to Indore, she's playing.”
Women creators across MP keep the theme going outside Pune.
22Mon
Pitch a tent in 2 seconds
“Blink and it's up.”
Product demo that's also a how-to.
24Wed
February sale: best of the month
“Best value for sport, this week only.”
February's sale campaign from the Q1 calendar.
28Sun
February bloopers from our stores
“We tried. We fell. We laughed.”
Teammate bloopers humanise the stores.
```

After clicking **Mar 2027**:
```text
March 2027
Find Your Sport
Sport of the month: Pickleball
Call to action: Find your sport
Emotional 5Fun & engagement 3Learn 2Community & events 4Product & offers 2★ 3 creator videos
“Sharma aunty's window”
Borrowed occasion: IPL season
One gully team has broken the same window for ten years. Sharma aunty has a drawer full of confiscated balls.
This season the ball is smashed so far it clears the whole building. For once, the window survives.
Aunty walks out with a bat and asks to bat first. End card: “Gully ready? Kit up.”
33° / 16°, summer starts
Bhagoria, Holi, Rang Panchami Gair in Indore
March calendar
ReelHer first race
Reel · ★ creatorWomen's Day: why we play
CarouselPickleball 101
StaticHappy Women's Day
StaticEid Mubarak
ReelKiprun Challenger launch, ₹9,999
ReelIPL is here: gully cricket gear check
ReelHoli-proof your shoes
ReelHoli colour run
StaticHappy Holi
CarouselClearance sale
ReelSummer launch: long weekend at the stores
Reel · ★ creatorSummer camp sign-ups
ReelQ1 wrapped
Every post in March for Madhya Pradesh, in brief
Her first race
“She almost didn't sign up.”
Women's Day week opens with a first-timer's story.
Women's Day: why we play
“Ask her why she plays.”
Women creators across all three states.
5Fri
Pickleball 101
“Easiest sport you'll ever start.”
Pickleball is growing fastest in Gujarat: +175% at Motera, +108% at Dumas.
8Mon
Happy Women's Day
“Here's to every woman who plays.”
Women's Day greeting.
10Wed
Eid Mubarak
“Wishing you joy, together.”
Festival greeting across all three states.
12Fri
Kiprun Challenger launch, ₹9,999
“Built for your next PB.”
The quarter's product launch.
IPL is here: gully cricket gear check
“Gully ready? Show us your kit.”
IPL starts 14 Mar; cricket fever across the cluster.
18Thu
Holi-proof your shoes
“Colours off in 2 minutes.”
Useful and seasonal; Holi week is coming.
20Sat
Holi colour run
“Run. Get colourful. Repeat.”
Festive fun the weekend before Holi.
Happy Holi
“Play with colour. Play with us.”
Holi greeting; long weekend in all three states.
Clearance sale
“Last pieces. Lowest prices.”
March clearance from the Q1 calendar.
26Fri
Summer launch: long weekend at the stores
“Summer starts now.”
Good Friday long weekend; summer season begins 1 March.
29Mon
Summer camp sign-ups
“Book their summer before it books itself.”
Parent creators open summer camp sign-ups.
31Wed
Q1 wrapped
“Three months. Here's what you played.”
Fun recap to close Q1.
```

#### index › `ch-surat`: 03

```text
Surat opening plan
Adajan opens on Sunday 27 December. Hoardings, AOPs, community events, then the grand launch and 30 days to ₹2.5 Cr.
```

#### index › `surat`: Surat: Chalo Ramiye, Adajan!
- img: assets/img/surat-store.jpg [alt: Render of the new large-format Decathlon store]; assets/img/surat-deal-banner.jpg [alt: Decathlon banner on the building: Opening in December 2026, explore more than 50 sports, with a QR code to apply for jobs]; assets/img/surat-grand-opening.jpg [alt: Grand opening Adajan Surat poster]; assets/img/surat-offer.jpg [alt: Adajan opening gifts poster]; assets/img/happy-streets-1.jpg [alt: Decathlon team at Happy Streets, Pune]; assets/img/happy-streets-2.jpg [alt: Kids doing push-up challenges with a Decathlon coach at Happy Streets]; assets/img/happy-streets-3.jpg [alt: Kids and families at a Decathlon Happy Streets game]
- vid:  [poster assets/posters/treasure-hunt.jpg];  [poster assets/posters/ig/DcbXgJmIvz9.jpg]
- external links: https://www.instagram.com/reel/DcbXgJmIvz9/; https://claude.ai/artifact/KjC3d6kGs7wYJ2sCGozgw6

```text
Surat is famous for its food. Now let's make Adajan famous for sport. The opening plan for the new Adajan store, from the first teaser to day 30.
Target for the first 3 days
₹85 L
Sun 27 - Tue 29 Dec
Walk-ins needed in 3 days
14,904
at 25.9% conversion and a ₹2,200 basket
First 30 days
₹2.5 Cr
27 Dec - 25 Jan
Walk-ins target, first 30 days
49,600
27 Dec - 25 Jan, from 28 strategies
Plan spend
₹24.7 L
against an ₹18 L budget
Cost per walk-in
₹50
Bhopal's opening: ₹153
The timeline, from hoardings to day 30
1Deal signed: banner upDay the deal is signed
The “Opening in December 2026” banner goes up on the building straight away, with a QR code to apply for jobs at the store
2Hoardings locked30 Oct
Hoardings finalised, led by the Pal Umra Bridge board between Adajan, Piplod and Vesu
3AOPs and hoardings liveBy 15 Nov
All 10 AOPs and 2 hoardings live in the Adajan area: kit walls at gyms, pools, academies and studios, placed from 1 Nov
4Events and community activationNov - 26 Dec
Teaser over Diwali, date reveal from 23 Nov, Ramat Rath in 36 societies, society sports days, treasure hunt, Happy Streets, creators' preview, 10-day countdown
5Grand launchSun 27 Dec
Pehli Ramat inauguration with Surat athletes, Tapi Sunrise Run, sports carnival, gifts on bigger bills. Express delivery for Surat goes live the same day
6Ramat chalu rahe28 Dec - 25 Jan
“Keep playing”: Night Carnival, New Year run, Happy Streets #2, box cricket league, pickle league, Kai Po Che! for Uttarayan (14 Jan)
Key opening strategies to warm up the catchment
Treasure hunt, marketed with influencers
Find the box. Win the city.
Blue mystery boxes appear at colleges, malls, parks, gyms and playgrounds around Adajan. Inside, a golden ticket to redeem at the new store. Surat creators drop the clues on their pages, so the hunt spreads before the doors open. Format borrowed from the “Kheloge Khudoge Banoge Kharab” campaign deck.
600players; the final clue is in the store
14creator waves on Surat city pages, 10 lakh views
3,510walk-ins (hunt + creators)
Night carnival for families
Adajan Night Carnival
Surat loves going out at night. Box cricket under lights, pickleball, skating, a DJ and food trucks on the forecourt, with an RJ live, built like Decathlon's Vitalsport weekends in France. @decathlon_campus_hq
3,500people expected
1,925walk-ins, more than half
₹60,000budget
Yoga, walking and running
New Year run and Happy Streets
A New Year run from the new store, Happy Streets (car-free Sundays on LP Savani, as we ran with Pune Municipal Corporation in Pune), the Tapi Sunrise Run with yoga, and a weekly Adajan Run Club.
600runners + 3,000 at the carnival
9,000people per Happy Streets Sunday
8,160walk-ins across these events
Society events
We visit 36 housing societies around Adajan with sports to try, and host 6 society sports days where families play together; families buy what their kids tried.
36societies visited
6society sports days, about 300 people each
2,250walk-ins
Adajan hoarding map: where the boards go
Priority, budget ignored: B Madhuvan Circle, E Cable Bridge, A Shell, C Sardar Bridge, G Rander Rd, F Anand Mahal Rd. The strongest spot is the Madhuvan to TGB core, 0.5 km from the store, and board B sits right on it. Nothing is final until a board clears the site checklist.
Adajan and its boards
All vendor sites
Vesu catchment
Both stores
Whole city: hotspots
Decathlon storeBTop-two boardAOther board1Crowd hotspotSports placeIT or officeSchool or housingBusy roadK1Vendor site to book (K Krishna 360, S Shah)S7Other vendor site (tap for the photo)PPlanned, not booked yet1City crowd hotspotCity hotspot: homesworkshopping and leisurestationsCity sports venue
| Board | Score | From Adajan | Rate | Role
| BMadhuvan Circle, facing TGBMedia Ant 79417 | 86 | 0.3 km | ₹5,400 a day (offer; base ₹5,940) | New store opening and directional. Junction board: 30 to 45 s read time, QR works.
| ECable Bridge, above Star BazaarMedia Ant 79567 | 85 | 0.6 km | ₹3,940 a day | Brand awareness plus opening date. Main road, traffic from the Athwa side.
| AL.P. Savani Rd near ShellMedia Ant 79398 | 80 | 0.1 km | Not listed | Directional, last stretch to the store. Swap-in if B is taken.
| CSardar Bridge towards Gujarat Gas CircleMedia Ant 88645 | 66 | 1.6 km | ₹7,875 a day | Outer-ring awareness on the Athwa side.
| GRander Rd, Rushabh Char RastaMedia Ant 79397 | 57 | 2.0 km | ₹2,170 a day | Awareness for Rander, the biggest untapped pincode (14% of walk-ins).
| FAnand Mahal Rd, Prime Arcade to Gujarat GasSmartAds 13675 | 57 | 1.4 km | ₹46,000 as listed (period unclear) | Reserve only: dense residential road.
Madhuvan to TGB core. 8 IT, 8 sports, 7 housing or school sites within 0.5 km. The strongest point, with the store and boards B and A on it.
Pal and Sportena. 1 IT, 6 sports, 4 housing sites within 0.5 km, 1.3 km west.
Green Residency and Royal Cricket Ground. 5 sports, 1 housing site within 0.5 km, 1.25 km north.
Akshar Jyot to SV Cricket Academy belt. 2 sports, 3 housing or school sites within 0.5 km, 0.8 km north-east.
Pal to Galaxy IT cluster. 4 IT, 1 sports site within 0.5 km, 0.9 km south-west.
Surat, the whole city: where the crowds are
Not only our catchments. Pick "Whole city: hotspots" above the map: it shows these city hotspots with the sports clubs, academies and venues, schools and housing, our crowd hotspots and the Nike, adidas and Puma stores we have located, across Surat. Each pin shows how far it is from both stores. Places outside Adajan come from OpenStreetMap, which lists fewer of them, so the west of the city looks denser than it is.
Crowd hotspots across the whole city, densest first
Railway station and Delhi Gate100 everyday places within 1 km, 5.4 km from the nearest Decathlon
Athwa and Ghod Dod Road128 everyday places within 1 km, 2.9 km from the nearest Decathlon
ONGC colony and Magdalla, by the airport62 everyday places within 1 km, 2.4 km from the nearest Decathlon
Hirabag and the Varachha diamond hub74 everyday places within 1 km, 8 km from the nearest Decathlon
Adajan, Honey Park and L.P. Savani84 everyday places within 1 km, 1.2 km from the nearest Decathlon
Yogi Chowk and Sarthana61 everyday places within 1 km, 10.6 km from the nearest Decathlon
Vesu, VIP Road and Althan73 everyday places within 1 km, 4 km from the nearest Decathlon
Citylight and Athwalines61 everyday places within 1 km, 2 km from the nearest Decathlon
Salabatpura and Saiyedwada, old city57 everyday places within 1 km, 3.8 km from the nearest Decathlon
Limbayat and Udhna, east55 everyday places within 1 km, 7.9 km from the nearest Decathlon
Rander56 everyday places within 1 km, 2.9 km from the nearest Decathlon
Katargam50 everyday places within 1 km, 5.4 km from the nearest Decathlon
Worked out from 1,809 places across Surat in OpenStreetMap (shops, eateries, banks, clinics, offices, bus stops, schools, sports places and housing): where they bunch up most. Area names are approximate.
Where people live
Katargam 5.9 km from the nearest Decathlon6.46 lakh people (Adajan hoarding map), the most populous area on it; no Decathlon nearby.
Rander 3.3 km from the nearest Decathlon2.5 lakh people; 14% of the Adajan plan's walk-ins, only 1.9% already shop at Dumas.
Adajan and Pal 0.0 km from the nearest DecathlonSurat's #1 living area by sports spend (₹235 Cr); the new store opens here.
Vesu and VIP Road 5.7 km from the nearest DecathlonPremium homes; 64% of homes in Vesu and Athwa already shop at Dumas.
Piplod 2.9 km from the nearest DecathlonAffluent belt between Dumas Road and Athwa, around Piplod Lake.
Varachha 7.6 km from the nearest DecathlonDense diamond-worker neighbourhoods east of the river; far from both stores.
Mota Varachha and Sarthana 12.7 km from the nearest DecathlonFast-growing eastern suburbs on the Kamrej road.
Udhna and Limbayat 7.1 km from the nearest DecathlonDense working-class south-east.
Dindoli 9.5 km from the nearest DecathlonLarge new housing belt in the south-east.
Althan and Bhatar 4.8 km from the nearest DecathlonMid to upper-middle homes between Vesu and Udhna.
Palanpur and Jahangirpura 3.5 km from the nearest DecathlonNew towers north of Adajan, on the Rander side.
Where they work
Ring Road textile markets 5.7 km from the nearest DecathlonThe city's biggest daily commuter and trader flow.
Varachha diamond hub 7.8 km from the nearest DecathlonDiamond units employ lakhs; they close for 3-4 weeks over Diwali.
Surat Diamond Bourse 6.2 km from the nearest DecathlonHuge new office complex at Khajod, south of Vesu.
Pragati IT Park, Mota Varachha 9.9 km from the nearest DecathlonIT park 9.9 km from Adajan.
Hazira industrial belt 9.4 km from the nearest DecathlonReliance, L&T and AM/NS plants; the workforce commutes via Hazira Rd past Adajan.
Pandesara GIDC 6.2 km from the nearest DecathlonTextile processing estate in the south.
Sachin GIDC 15.0 km from the nearest DecathlonIndustrial estate on the southern edge.
Shopping and leisure
Rahul Raj Mall, Dumas Road 4.4 km from the nearest DecathlonMall on the Dumas Road strip, on the way to our Dumas store.
Citylight 2.3 km from the nearest DecathlonShopping and dining street in the Vesu-Athwa belt.
Gopi Talav 4.2 km from the nearest DecathlonRestored lake and leisure spot in the old city.
Dumas Beach 4.9 km from the nearest DecathlonWeekend beach crowd past the airport.
Sarthana Nature Park and Zoo 12.3 km from the nearest DecathlonFamily day-out spot in the east.
Stations and airport
Surat Railway Station 5.6 km from the nearest DecathlonMain station; the Ring Road and Varachha flyovers meet here.
Udhna Junction 6.7 km from the nearest DecathlonSecond station, south-east.
Surat Airport 0.7 km from the nearest DecathlonOpposite our Dumas Road store.
What it means for the city
Our two stores cover the west and south-west: Adajan, Pal, Rander, Vesu, Piplod and Dumas Road. The biggest crowds without a Decathlon nearby are Katargam, Varachha and the Ring Road markets, 5 to 9 km from both stores. Boards there build awareness and push express delivery and the app rather than store visits. For the opening, keep boards on the Adajan side; for the city, a big board on the Ring Road or the Varachha flyover is the one place that reaches Surat's largest crowds.
Every vendor offer, 31 Oct: Krishna 360 (K) and Shah Publicity (S), by catchment
Suggestion: 6 boards for ₹6.20 L a month before GST, printing and mounting.
Adajan catchment: the new store, ₹3.05 L a month:
K20Adajan near D-Mart, Honey Park Road: ₹0.85 LS11L P Savani Rd, Madhuvan Circle facing TGB Circle: ₹0.95 LK9Cable-stayed bridge junction near Star Bazaar, facing L P Savani: ₹1.25 L
Honey Park Rd by D-Mart: the densest housing and retail around the store, at ₹85,000. Board B on the hoarding map, its top pick: the junction by the store. Cheapest of the strong Adajan boards. Cable bridge facing L P Savani (board E on the hoarding map): catches traffic coming in from Athwa and Vesu; half the Shah gantry rates here.
Vesu and Dumas Road catchment, ₹2.50 L a month:
S17Pal Umra flyover bridge towards SVNIT: ₹2.00 LS24LED screen, Vesu VIP walkway, Jivraj Circle towards GD Goenka School: ₹0.50 L
Pal Umra flyover, 40 x 20: links Adajan and Vesu and reaches both catchments. This is the board we had planned at ₹1.90 L; the new quote is ₹2.00 L. LED on the Vesu VIP walkway: about 480 plays a day, 8 am to midnight, for ₹50,000 (₹45,000 on a one-year deal). Vesu is the city's richest catchment.
Elsewhere in the city, ₹0.65 L a month:
K7Jilani Bridge facing Katargam: ₹0.65 L
Jilani Bridge facing Katargam, ₹65,000: the only offer that reaches Katargam, one of the city's biggest crowds with no Decathlon nearby.
Both vendors offer some of the same boards at the same rate (Prime Arcade junction, Honey Park Rd, D-Mart): ask each to beat the other before booking. Skip the Shah foot over-bridge (₹7.51 L) and the cable-bridge gantries (₹2.51 L), which cost twice the Krishna board at the same spot, and the Vesu VIP walkway boards at ₹3 L or more, which cost about ₹750 a sq ft.
Adajan catchment: the new store
| Site | Vendor | Size | A month | From | Score | To Adajan / Dumas | Call
| K2Adajan D-Mart | Krishna 360 | 20 x 20 BL | ₹1.51 L | 9 Nov | 87 | 1.4 / 10.8 km | Back-up
| S9Adajan D-MartKrishna 360 site 2 (same location, same rate) | Shah Publicity | 20 x 20 BL | ₹1.51 Llist ₹2.00 L | 9 Nov | 87 | 1.4 / 10.8 km | Back-up
| K20Adajan near D-Mart, Honey Park Road | Krishna 360 | 20 x 10 BL | ₹0.85 L | Available | 84 | 1.3 / 10.7 km | Book
| K6Adajan Honey Park Road facing L P Savani | Krishna 360 | 20 x 10 BL | ₹1.25 L | 1 Nov | 82 | 1.1 / 10.2 km | Back-up
| S6Adajan Honey Park Rd facing L P Savani (left)Krishna 360 site 6 (same board, same rate) | Shah Publicity | 20 x 10 BL | ₹1.25 Llist ₹1.75 L | 1 Nov if not renewed | 82 | 1.1 / 10.2 km | Back-up
| S7Adajan Honey Park Rd facing L P Savani (right) | Shah Publicity | 20 x 10 BL | ₹1.25 Llist ₹1.75 L | 9 Nov | 82 | 1.1 / 10.2 km | Back-up
| K1L P Savani Road near Nirmal Hospital | Krishna 360 | 20 x 10 BL | ₹1.25 L | Available | 78 | 1 / 9.9 km | Back-up
| K3Anand Mahal Road, Prime Arcade junction | Krishna 360 | 30 x 20 BL | ₹1.75 L | Available | 74 | 1.4 / 10.8 km |
| S5Anand Mahal Rd, Prime Arcade junctionKrishna 360 site 3 (same board, same rate) | Shah Publicity | 30 x 20 BL | ₹1.75 Llist ₹2.25 L | Available | 74 | 1.4 / 10.8 km |
| S2Anand Mahal Rd, Ascon Plaza towards Prime Arcade | Shah Publicity | 20 x 20 BL | ₹1.51 Llist ₹2.00 L | 12 Nov | 73 | 1.2 / 10.6 km |
| S11L P Savani Rd, Madhuvan Circle facing TGB CircleBoard B on the hoarding map, its top pick | Shah Publicity | 20 x 10 BL | ₹0.95 Llist ₹1.25 L | 16 Nov if not renewed | 73 | 0.3 / 9.7 km | Book
| S1Arzees Circle towards Gujarat Gas Circle | Shah Publicity | 20 x 20 BL | ₹1.51 Llist ₹2.00 L | 18 Nov | 72 | 0.8 / 10.1 km |
| K18Near Tekarawala School, Palanpur Patia | Krishna 360 | 20 x 20 BL | ₹0.85 L | Available | 71 | 2.3 / 11.7 km |
| K13Rander Road near Navyug College | Krishna 360 | 40 x 20 FL | ₹1.51 L | 1 Nov | 70 | 1.9 / 11.4 km |
| S4Anand Mahal Rd, Prime Arcade junction (near Reliance, opp. Zudio) | Shah Publicity | 30 x 20 FL | ₹0.75 Llist ₹1.00 L | Available | 68 | 1.5 / 10.9 km |
| S3Anand Mahal Rd, Prime Arcade | Shah Publicity | 20 x 20 FL | ₹0.65 Llist ₹0.90 L | 21 Nov | 67 | 1.4 / 10.8 km |
| K8Sardar Bridge above Everest, towards Gujarat Gas Circle | Krishna 360 | 40 x 30 FL | ₹2.25 L | Available | 66 | 1.6 / 10.9 km |
| S14Adajan Pal foot over-bridge towards Cable Bridge, Star Bazaar | Shah Publicity | 100 x 20 FOB FL | ₹7.51 Llist ₹9.00 L | 1 Dec if not renewed | 66 | 0.4 / 9.3 km | Skip
| S12L P Savani School Circle | Shah Publicity | 20 x 10 BL | ₹1.25 Llist ₹1.75 L | 27 Nov if not renewed | 64 | 1.6 / 10.3 km |
| S13Pal near Aquarium towards RTO, facing Star Bazaar | Shah Publicity | 20 x 20 BL | ₹2.51 Llist ₹3.25 L | 3 Dec if not renewed | 64 | 0.4 / 9.5 km | Skip
| K9Cable-stayed bridge junction near Star Bazaar, facing L P Savani | Krishna 360 | 20 x 10 BL | ₹1.25 L | 2 Nov | 61 | 0.6 / 9.6 km | Book
| K10Pal walkway, Galaxy Circle | Krishna 360 | 20 x 10 BL | ₹1.25 L | 1 Nov | 60 | 1 / 9.2 km |
| S8Pal near Galaxy Circle, La Pentola | Shah Publicity | 20 x 20 BL | ₹1.51 Llist ₹2.00 L | 1 Nov | 60 | 1.1 / 9.2 km |
| S15Cable-stayed bridge, Star Bazaar gantry facing Athwalines | Shah Publicity | 60 x 10 Gantry BL | ₹2.51 Llist ₹3.25 L | Available | 58 | 0.6 / 9.6 km | Skip
| K16Galaxy Circle, Adajan - Pal Gam | Krishna 360 | 20 x 10 BL | ₹0.80 L | Available | 57 | 1.1 / 9.1 km |
| K19Adajan near Pal Lake Circle | Krishna 360 | 20 x 10 BL | ₹0.85 L | Available | 56 | 1.5 / 9.7 km |
| S16L P Savani cable bridge near Star Bazaar towards Parle PointBoard E area on the hoarding map | Shah Publicity | 60 x 10 Gantry BL | ₹2.51 Llist ₹3.25 L | 5 Nov | 56 | 0.7 / 9.6 km | Skip
| K14Adajan Deepa Complex towards Gujarat Gas Circle | Krishna 360 | 15 x 15 BL | ₹1.51 L | Available | 55 | 1.9 / 11.2 km |
| S10L P Savani Rd opp. Nayara petrol pump towards Pal Gaurav Path | Shah Publicity | 20 x 20 BL | ₹1.51 Llist ₹2.00 L | 1 Dec | 55 | 1.8 / 9.9 km |
| K5SVNIT Pal Bridge near Umra, facing the bridge | Krishna 360 | 20 x 20 BL | ₹1.51 L | Available | 53 | 1.7 / 7.9 km | Skip
| K22Adajan Canal Road, Palanpur Jakatnaka junction, facing L P Savani | Krishna 360 | 20 x 10 BL | ₹0.95 L | Available | 52 | 2.5 / 10.5 km |
| K15Adajan Patiya near Dhanmora FOB | Krishna 360 | 15 x 20 BL | ₹0.75 L | 5 Nov | 52 | 2.4 / 11.9 km |
| K11Palanpur Patiya Jakatnaka facing Canal Road | Krishna 360 | 20 x 20 FL | ₹0.60 L | 13 Nov | 47 | 2.5 / 10.6 km |
| K12Pal Ugat canal, Nirvana Shopping opp. Pantaloons near D-Mart | Krishna 360 | 20 x 10 BL | ₹1.25 L | 2 Nov | 38 | 3 / 10.6 km | Skip
| K4Pal Gaurav Path facing Pal Haveli | Krishna 360 | 20 x 20 BL | ₹1.51 L | 4 Nov | 38 | 2.5 / 9.2 km | Skip
Vesu and Dumas Road catchment
| S19Vesu VIP walkway, Jivraj Circle facing Citylight | Shah Publicity | 20 x 20 BL | ₹3.00 Llist ₹5.00 L | 19 Dec if not renewed | 71 | 4.3 / 6.7 km | Back-up
| S20VIP Rd near Jivraj Circle towards Luthra Circle (gantry) | Shah Publicity | 38 x 10 Gantry BL | ₹3.25 Llist ₹5.00 L | 16 Nov if not renewed | 71 | 4.4 / 6.6 km | Skip
| S17Pal Umra flyover bridge towards SVNITThe Pal Umra board we had planned (₹1.90 L); not booked | Shah Publicity | 40 x 20 FL | ₹2.00 Llist ₹2.51 L | 3 Dec if not renewed | 70 | 2.2 / 7.8 km | Book
| S24LED screen, Vesu VIP walkway, Jivraj Circle towards GD Goenka School10-sec spot, 2-min loop, about 480 plays a day, 8 am to midnight; ₹45,000 a month on a 1-year deal | Shah Publicity | 20 x 10 LED LED | ₹0.50 Llist ₹0.70 L | Available | 69 | 4.3 / 6.6 km | Book
| S21VIP Rd near Avadh walkway | Shah Publicity | 20 x 20 BL | ₹3.00 Llist ₹5.00 L | 1 Dec if not renewed | 65 | 4.8 / 6.5 km | Skip
| K21Pal - Umra Road towards Piplod, SVNIT Circle | Krishna 360 | 20 x 20 BL | ₹2.25 L | 5 Nov | 63 | 2.5 / 7.4 km | Skip
| S18Vesu VIP walkway near VNSGU gate 8, facing Citylight | Shah Publicity | 20 x 8 BL | ₹1.25 Llist ₹1.75 L | 16 Nov | 60 | 3.8 / 6.9 km | Back-up
| S22Vesu VIP walkway, Luthra junction near Reliance Trends and H&M | Shah Publicity | 20 x 20 BL | ₹3.00 Llist ₹5.00 L | 17 Nov | 46 | 5.1 / 6.3 km | Skip
| S23Vesu VIP walkway, University Rd junction facing GD Goenka (gantry) | Shah Publicity | 44 x 10 Gantry BL | ₹3.25 Llist ₹5.00 L | 12 Nov | 46 | 4.9 / 5.9 km | Skip
| S25LED screen, Piplod Rahul Raj junction10-sec spot, 2-min loop, about 480 plays a day, 8 am to midnight; ₹45,000 a month on a 1-year deal | Shah Publicity | 20 x 15 LED LED | ₹0.50 Llist ₹0.70 L | Available | 38 | 4.4 / 5.2 km | Back-up
Elsewhere in the city
| K7Jilani Bridge facing Katargam | Krishna 360 | 20 x 20 FL | ₹0.65 L | 2 Nov | 34 | 4.2 / 13.8 km | Book
| K17Subhash Garden, Morabhagal | Krishna 360 | 20 x 10 BL | ₹0.80 L | Available | 21 | 4.5 / 12.9 km | Skip
One score out of 100 for every offer, ours: everyday places within 1 km (OpenStreetMap, the same for the whole city) 40, closeness to the nearest Decathlon 25, near a crowd hotspot 15, size 10, back-lit or LED 10. Shah rates are their discounted rates (list rate below). All rates are before 18% GST. Most pins are placed from the named road or landmark; confirm the exact spot and facing direction with the vendor, and run each board through the site checklist, before booking. Tap any site on the map for the vendor's photo.
Score is out of 100 with cost left out, so a cheap board gets no credit. Pins are Google place pins near each board, not surveyed positions. Dumas Road is 9.5 km from Adajan in a straight line. Open the full interactive hoarding map for the site checklist, every place in the catchment and the busy-road notes.
All 28 strategies: events, partners, budget and walk-ins
| Strategy | Event | Budget | Walk-ins
| Online ads near the store | Digital funnel ads | ₹2,90,000 | 6,000
| Happy Streets on LP Savani | Ramat ni Sadak | ₹1,40,000 | 5,400
| Shop front and street footfall | Blue on LP Savani | No cost | 5,200
| WhatsApp to customers near Adajan | Decathlon now 6 minutes away | ₹2,25,000 | 3,530
| Influencers and Surat city pages | Creator waves | ₹6,20,000 | 3,000
| SMS and app to all Surat customers | Surat, now 2 Decathlons | No cost | 2,700
| Come-back passport | Ramat Passport: aavo pachha | ₹40,000 | 2,236
| Hoardings and direction boards | Chalo Ramiye, Adajan! | ₹1,92,150 | 2,000
| Club before opening | Adajan Ramat Club | ₹30,000 | 2,000
| Sports carnival and sunrise run | Tapi Sunrise Run + Chalo Ramiye Sports Carnival | ₹85,000 | 1,980
| Night sports carnival | Adajan Night Carnival | ₹60,000 | 1,925
| Society visits | Ramat Rath | ₹12,000 | 1,620
| Word of mouth and Google reviews | Bring a friend + 500 reviews | No cost | 1,490
| Newspaper leaflets and press | Paper ma Decathlon | ₹1,15,000 | 1,120
| Radio countdown | 10 Divas, 10 Ramat on air | No cost | 1,050
| Workshops for 50+ | First community | ₹10,000 | 1,005
| Theme weeks after opening | Santa Party, New Year Run, Kai Po Che! | ₹44,000 | 900
| Card and bill partners | - | ₹5,000 | 800
| School sports days | School Sports Day kit desk | ₹80,000 | 720
| Society sports days | Society Ramat Day | ₹35,000 | 630
| Corporates | Hazira Corporate Saturday | ₹35,000 | 600
| Opening day and run | Adajan + LP Savani run | ₹69,500 | 540
| City treasure hunt | Find the box | ₹35,000 | 510
| Cinema ads next door | Cinepolis Adajan pre-show | ₹35,000 | 500
| Academies and coaches | Coach Ambassadors + Academy Kit Nights | ₹1,10,000 | 480
| Box cricket night league | Adajan Box Cricket Night League | ₹25,000 | 400
| Weekly run club | Adajan Run Club | ₹4,500 | 240
| Pickleball league | Adajan Pickle Premier League | ₹25,000 | 200
| Total | | ₹23,22,150 + ₹1,47,485 offers | 49,600
Turnover by week, first 30 days
W1Launch week85 L
W2New Year55.5 L
W3Kai Po Che!46.8 L
W4Pickle & Cricket Week39.3 L
W524.4 L
Where 49,600 walk-ins come from
28 strategies, 81 events and 126 partners. About 53,800 people expected at events.
Digital and media25,100 · 51%
Community and partners12,409 · 25%
Events12,095 · 24%
Biggest drivers of walk-ins
Online ads near the store6,000
Happy Streets on LP Savani5,400
Shop front and street footfall5,200
WhatsApp to customers near Adajan3,530
Influencers and Surat city pages3,000
Ramat Passport (come back)2,732
SMS and app to all Surat customers2,700
Hoardings and direction boards2,000
Ramat Club before opening2,000
Tapi Sunrise Run + sports carnival1,980
Adajan Night Carnival1,925
The market we are opening into
₹1,591 CrSurat's sports market, 2025Growing to ₹2,451 Cr by 2030, about 9% a year
₹674 CrInside a 20-minute drive42% of the city's sports spend
₹18 CrWhat Adajan can win in Year 1In-store business case
1.2% → 2.9%Decathlon's share of that marketToday, then with Adajan in Year 1
5.64 lakhPeople within 15 minutes1.34 lakh households, median age about 30
₹235 CrAdajan living area, #1 in SuratDecathlon's share there is only 0.75%
Gifts, never discounts
Decathlon keeps full prices. Opening-weekend gifts on bigger bills, a weekly “Poora Bill Maaf” draw on bills of ₹2,999+ (grand prize: a Rockrider cycle on 24 Jan), and a Ramat Passport that rewards coming back.
₹2,499+Gift card
₹3,999+10 L hiking backpack
₹5,999+17 L football backpack
₹9,999+24 L backpack
What we learned, and what we do about it
1Surat leaves town for Diwali
Diamond units close 3-4 weeks. Tease before Diwali, stay light 6-22 Nov, go big from 23 Nov.
2Distance decides who shops
64% of homes in Vesu and Athwa shop at Dumas, only 3% in Adajan 395009. The message: “Decathlon now 6 minutes from you”.
3A warm base already exists
10,087 Dumas customers live in Adajan's pincodes and Katargam. WhatsApp to them is the cheapest walk-in.
4Gujarat notices radio, cinema and print
Kantar 2024: radio index 127, cinema 119, print 111. So radio, Cinepolis and leaflets are in the mix.
5Pickleball doubled
Padel and pickleball at Dumas +108% (Jan-Sep 2026). A court at the Night Carnival and a Pickle Premier League.
6Women are under-served
751 women per 1,000 men in the catchment. A women's run group, a She Plays zone and a women-only pickleball slot.
7Dec-Jan is the best outdoor season
31°C days, 16°C nights, almost no rain. Sunrise runs, car-free Sunday mornings and carnivals after sunset.
8₹2.5 Cr is a stretch
A normal Year-1 month is ₹1.5 Cr, so month one is 1.67x. The tracker holds a lever list for the gap.
Against other openings
OpeningBudgetWalk-insTurnover₹ per walk-in
Bhopal DB Mall (2025)Mall, MP26.2 L17,18784.7 L₹153
Nexus Ahmedabad (2025)Mall, Gujarat24.1 L10,50065 L₹229
Pondy Bazaar (2025)High street, Chennai30 L9,70093.7 L₹309
Pune (plan, opening week)Convenience, Pune23 L15,00053 L₹153
Adajan (opening plan, 30 days)High street, Surat24.7 L49,600250 L₹50
Watch outs
Date: opening is Sunday 27 Dec (confirmed by the team). The workbook was built for an 18-20 Dec weekend, so its week targets need re-phasing; the printed grand-opening poster still shows 20 Dec.
Budget: the plan spends ₹24.9 L against an ₹18 L budget.
Permissions for Happy Streets, the night run, sunrise run and Night Carnival need police and SMC approval: apply now.
Tills: 5 tills needed. ₹85 L in 3 days at a ₹2,200 basket is about 3,860 bills (14,904 walk-ins at 25.9% conversion): about 1,290 a day, or 107 an hour over 12 hours. A till handles 20-30 bills an hour, so 4-5 tills; keep mobile billing ready for the launch-day peak.
Stock: winter jackets, fleeces, trek shoes, running shoes and home gym deep by 20 Dec.
```

#### index › `ch-2027`: Q1 2027 and the year ahead

```text
The full 2027 calendar, its budget and where it goes, then January to March in detail.
```

#### index › `planner`: 2027, month by month

```text
The full Marcom calendar for the country. Pick a month to see what competitors will do, how we answer, and what goes live on the ground.
Our focus in 2027Footwear marketing, very stronglyCricketYoga
Open the Q1 and Q2 plan, sport by sport: swimming, mountain, running, cycling, cricket, pickleball and fitness
Water sports 2027, week by week, store by store
Bar under each month: Pune ad spend, relative to the biggest month
JanLow season
Winter
FebLow season
MarRising season
Summer
AprRising season
MayPeak season
JunSustained season
JulSustained season
Monsoon
AugLow season
SepLow season
OctRising season
Spring
NovPeak season
DecPeak season
Holidays and moments
Lohri 13 Jan
Uttarayan 14 Jan
Republic Day 26 JanValentine's Day 14 Feb
Shivaji Jayanti 19 FebMaha Shivaratri 6 Mar
Women's Day 8 Mar
Eid al-Fitr 9-10 Mar
Holi 22 Mar
Good Friday 26 MarGudi Padwa 8 AprMaharashtra Day 1 MayYoga Day 21 JunAshadhi Ekadashi
(Wari) 13 JulIndependence Day 15 AugGanesh Chaturthi 3 Sep
Navratri from 30 SepDussehra 9 Oct
Diwali 29 OctChildren's Day 14 Nov
Black Friday 26 NovChristmas 25 Dec
New Year's Eve 31 Dec
Season
WinterSummer + summer campMonsoon & back to schoolWinter & travel
Country campaigns
Republic Day, MIINew arrivals: shoes 1Valentine's DayHoliUgadi, Gudi PadwaShoes phase 2Shoes phase 3Independence Day, MIINational Sports DayNew arrivalsShoes phase 4Dussehra: Gift a Sport
Hero ranges
SS hero and iconicAW hero and iconic
Sport ecosystem and wellbeing
Cycling / running★ Movement for AllWomen's DayCircular BazaarFitnessCycling / runningMental Health DayChildren's Day
Event IP
New Year, New Moves★ Beach Day, Surat★ Women's Day★ Summer CampSports UtsavYoga DayMountain DaysKids Carnival
Commercial
★ Clearance sale51st anniversary★ Clearance saleDiwali sale (optional)Black Friday, 26-29 NovChristmas sale (optional)
Product launch
TBDKiprun Challenger, ₹9,999TBD
Pune cultural moments
Holi, 22 MarMaharashtra DayWariGanesh ChaturthiNavratri
Sport of the month
FitnessCampingPickleballCricket + rollerSwimmingFootballCyclingBadmintonWater sportsRunningTrekkingTrekking
January
Start Your Sport: New Year, New Moves
Run Clubs + Beginner Products. Sport of the month: fitness. Pune ad spend 28.7 L.
January 2027February 2027March 2027April 2027May 2027June 2027July 2027August 2027September 2027October 2027November 2027December 2027
‹
›
January in full: what competitors do, how Pune answers, and what goes live on the ground
What competitors do
Their campaign
New Year Fitness: Push “start running / start training” messaging to capture resolutions.
Who is pushing what
PUMA: Running/Training
adidas: Running/Originals
Nike: Performance/Running
Shakti: Multi-sport
ASICS: Running
Gully Labs: Sneakers/Culture
Products they push
Running shoes, training shoes, gymwear and entry-level performance products.
Offers
New-season launches with fitness-led product communication rather than heavy discounting.
Online
Running reels, fitness tips, paid ads and “new year” messaging to capture intent.
In store
Refresh store VM around fitness and New Year products.
Events and community
Running clubs, New Year fitness challenges and beginner sessions.
What they do well
Own Fitness Intent
How Pune answers
Our opportunity
Start a Sport
Our response
Run Clubs + Beginner Products
Who we are talking to
Families + teenagers + fitness beginners: Customers looking to start a healthier routine.
Marketing channels
WhatsApp + Community + Instagram Reels
Website banner
Community events booked
SGS - Running event 12/01/27
SGS - Football event 09/01/11
Wakad - Badminton 10/01/11
Influencers
Fitness/running creators mapped to each store catchment
Partnerships
Running + gym partnerships across stores
On the ground
Hoardings, OOH, HIPOP and AOP
Wakad: BIG OOH
SGS: Central visibility
Wagholi: Nagar Road entry
Amanora: Mall media
NIBM: Hyperlocal only
Store activation
All 5: New Year, New Sport
Academies
Wakad: Running/football
Wagholi: Cricket
Amanora: Swimming/skating
NIBM: Badminton/fitness
SGS: Running
Gyms
Wakad: New Year fitness
Wagholi: Transformation
Amanora: Family fitness
NIBM: Local gyms
Schools and colleges
Wakad: Teen sport
Wagholi: Schools
Amanora: Kids activities
NIBM: Schools
SGS: Colleges
Corporates
Wakad/Hinjewadi: IT fitness
Wagholi/Kharadi: Employee fitness
Amanora/Magarpatta: Family wellness
NIBM: Local businesses
SGS: Central Pune corporates
Residential societies
Wakad/Punawale: Teen sport
Wagholi: Family fitness
Amanora/Hadapsar: Family sport
NIBM/Undri: Fitness
SGS: Central Pune communities
Sports community events
Running - Wakad/SGS + family sport - Amanora/Wagholi/NIBM
Flyers
Wakad: Gyms/societies
Wagholi: Societies
Amanora: Mall/family
NIBM: Societies
Free products
Teen trial kits + community T-shirts
Holidays and moments, January to March, by market
Open a market to see its list.
JanuaryFebruaryMarch
Pune
Gujarat
Madhya Pradesh
16 holidays and moments
1 Jan
New YearMomentNew Year, New Moves: resolution kits and fitness starters
14 Jan
Makar Sankranti: til-gul and haldi-kunkuFestivalWomen's get-togethers: yoga and walking edits
20 Jan - 26 Jan
Republic Day saleMomentCommercial weekend ending on the 26th
26 Jan
Republic DayHolidayTuesday holiday: long-weekend outings
26 Jan - 31 Jan
Bajaj Pune Grand Tour (UCI cycling)Sports eventSix stages on Pune roads: cycling push at all five stores
14 Feb
Valentine's DayMomentCouples who train together: gifting
15 Feb - 31 Mar
Board exams (CBSE and state boards)Exams, date approx.Kids' sport dips; sell summer camps for after the last paper
19 Feb
Chhatrapati Shivaji Maharaj JayantiHolidayFriday long weekend: fort treks at Sinhagad and Rajgad
27 Feb
Marathi Bhasha DinMomentMarathi-first posts and in-store signage
6 Mar
Maha ShivratriHolidaySaturday holiday (some calendars say 5 Mar)
8 Mar
Women's DayMomentWomen's Sport Month finale: runs and store events
10 Mar
Eid al-FitrHoliday, date approx.Depends on the moon; family shopping day
14 Mar
IPL season starts (to end May)Sports event, date approx.Cricket month: box cricket and kit; Gujarat Titans play at home in Ahmedabad
21 Mar - 22 Mar
Holika Dahan and Holi / DhuletiHolidayMonday holiday: long weekend
26 Mar
Rang PanchamiFestivalSecond colour day in Maharashtra
26 Mar - 28 Mar
Good Friday to EasterHolidayLong weekend: travel and trek kit
15 holidays and moments
14 Jan - 15 Jan
Uttarayan and Vasi UttarayanHolidayTwo days on the terrace: caps, sunglasses, sunscreen, family games
14 Jan - 16 Jan
International Kite Festival, AhmedabadFestival, date approx.Riverfront crowds near Motera and Nexus
31 Jan
Vadodara International MarathonSports event1.1 lakh registrations: Kiprun bib pick-ups at Baroda
1 Feb - 28 Feb
Rann Utsav season endsFestival, date approx.Kutch travel: last weeks of the winter travel edit
18 holidays and moments
Makar SankrantiFestivalKite flying and fairs: outdoor family kit
10 Jan - 31 Jan
Khelo MP Youth GamesSports event, date approx.28 sports, players from every block: team kits and academies
7 Feb
Indore MarathonSports event, date approx.First Sunday of February: running kit and bibs at Indore
20 Feb
Sant Ravidas JayantiHolidayState holiday
20 Feb - 26 Feb
Khajuraho Dance FestivalFestival, date approx.Tourism week: travel and walking kit
14 Mar - 21 Mar
Bhagoria (Jhabua, Alirajpur, Dhar)Festival, date approx.Tribal fairs the week before Holi
Rang Panchami: Indore's Gair processionFestivalThe city's biggest street crowd, near our Indore store
Dates from 2027 calendars (Drik Panchang, state holiday lists) and event organisers; state lists for 2027 are provisional, and dates marked approx. are estimates. Next up after March: Gudi Padwa (8 Apr, Pune).
Advertisement Budget 2027
2027 budget month by month, against 2026 (actual to September, then the Q4 plan). In lakh.
All
MP
Q1
Q4
0
21
43
64
85
Jan
Feb
Mar
Apr
May
Jun
Jul
Aug
Sep
Oct
Nov
Dec
2027 plan
2026
Pune3.65 Cr in 2027+26% vs 2.91 Cr in 2026Q1: 0.56 Cr → 0.8 Cr (+45%)
Gujarat2.61 Cr in 2027-11% vs 2.92 Cr in 2026Q1: 0.64 Cr → 0.6 Cr (-7%)
MP1.2 Cr in 2027+127% vs 0.53 Cr in 2026Q1: 0.06 Cr → 0.29 Cr (+406%)
Where the 2027 budget goes
Each state's 2027 plan split into lines, in crore, and each line's share of the budget.
| Line | Pune | Gujarat | Madhya Pradesh | Total | Share of budget
| Digital paid (MarCom) | ₹1.10 Cr | ₹0.78 Cr | ₹0.36 Cr | ₹2.24 Cr
|
30%
| Hoardings, OOH, HIPOP and AOP | ₹1.10 Cr | ₹0.78 Cr | ₹0.36 Cr | ₹2.24 Cr
| In-store communication | ₹0.73 Cr | ₹0.52 Cr | ₹0.24 Cr | ₹1.49 Cr
20%
| In-mall | ₹0.18 Cr | ₹0.13 Cr | ₹0.06 Cr | ₹0.37 Cr
5%
| Store events | ₹0.18 Cr | ₹0.13 Cr | ₹0.06 Cr | ₹0.37 Cr
| Influencers | ₹0.18 Cr | ₹0.13 Cr | ₹0.06 Cr | ₹0.37 Cr
| Free products and IC | ₹0.11 Cr | ₹0.08 Cr | ₹0.04 Cr | ₹0.22 Cr
3%
| Flyers | ₹0.07 Cr | ₹0.05 Cr | ₹0.02 Cr | ₹0.15 Cr
2%
| Total | ₹3.65 Cr | ₹2.61 Cr | ₹1.20 Cr | ₹7.46 Cr | 100%
The data sheet splits every month of every state the same way, so the shares are fixed. 7.46 Cr in total for 2027.
```

After clicking **Feb Low season**:
```text
February
Move Together: Women's Sport Month
Women Events + Fitness Trials. Sport of the month: camping. Pune ad spend 22.7 L.
February in full: what competitors do, how Pune answers, and what goes live on the ground
Women + Lifestyle: Build relevance through women-focused products, creators and fitness stories.
PUMA: Lifestyle/Fitness
adidas: Originals
Nike: Women/Running
Shakti: Fitness
Gully Labs: Lifestyle
Women's footwear, activewear, lifestyle sneakers and gifting products.
Gifting bundles and product-led offers around Valentine's / women's fitness.
Women creators, lifestyle reels, fitness inspiration and targeted social ads.
Strong mall visibility + lifestyle displays + gifting zones.
Women's fitness sessions, community workouts and lifestyle events.
Lifestyle Relevance
Women in Sport
Women Events + Fitness Trials
Women + fitness beginners: Customers looking for accessible and social ways to stay active.
Women creators + WhatsApp + Instagram + Community
Women creators + athletes
Women fitness partnerships
Amanora: Mall + women-led media
SGS: Central Pune
Others: digital/local
All 5: Women Who Play
Wakad: Fitness
Wagholi: Yoga
Amanora: Swimming
NIBM: Women fitness
SGS: Yoga/running
Wakad: Women fitness
Wagholi: Women wellness
Amanora: Women + family
NIBM: Women gyms
SGS: Fitness communities
SGS: Girls' colleges
NIBM: Girls' schools
Wakad: Women/teen sport
Amanora: Family schools
Women employee wellness across Kharadi, Magarpatta, Hinjewadi
Women fitness - NIBM, Amanora, Wakad
Women’s fitness - all 5 catchments
Women gyms + societies around all stores
Women community kits
```

After clicking **Mar Rising season Summer**:
```text
March
Find Your Sport: Cricket / Pickleball / Football
Cricket/Football Events. Sport of the month: pickleball. Pune ad spend 29 L.
March in full: what competitors do, how Pune answers, and what goes live on the ground
Cricket + Culture: Use cricket fandom, athletes and social content to drive engagement.
PUMA: Cricket/RCB
adidas: Cricket/Football
Nike: Football/Running
Shakti: Cricket/Racket sports
Gully Labs: Culture/Sneakers
Cricket jerseys, football boots, balls, sportswear and lifestyle sneakers.
Campaign-linked offers around cricket and football moments.
UGC, athletes, cricket/football content and creator collaborations.
Cricket/football displays and athlete/product visibility.
Cricket screenings, tournaments, fan communities and football activities.
Sport + Culture
Local Sports Communities
Cricket/Football Events
Cricket/football players + fans: Customers motivated by sport culture and participation.
Partner communities + Instagram + WhatsApp + OOH
Cricket/football/pickleball creators
Cricket/football/pickleball partnerships
Wakad + SGS: Cricket/pickleball OOH
Wagholi: Nagar Road
NIBM: Hyperlocal
Wakad/SGS: Cricket/Pickleball; Wagholi: Cricket; Amanora: Family; NIBM: Badminton
Wakad: Football
Amanora: Pickleball
NIBM: Racket sports
SGS: Pickleball
Wakad: Corporate fitness
Wagholi: Fitness challenge
SGS: Young professionals
SGS: College cricket
Corporate cricket/pickleball league across Wakad + Kharadi + Magarpatta
Cricket/football leagues - Wakad + Wagholi; pickleball - Amanora
NIBM: Badminton
Academies + sports clubs around all 5
Tournament prizes across 5 stores
```

After clicking **Apr Rising season Summer**:
```text
April
Gudi Padwa April 7
Cricket + Swimming + Outdoor. Sport of the month: cricket + roller. Pune ad spend 32.2 L.
April in full: what competitors do, how Pune answers, and what goes live on the ground
Summer Sport: Connect products with holidays, outdoor activities and family time.
PUMA: Cricket/Summer
adidas: Cricket/Summer
Nike: Outdoor/Running
Shakti: Cricket/Outdoor
Cricket equipment, summer clothing, swimming/outdoor products and kids' sport.
Seasonal summer offers and product bundles.
Summer product videos, family content and outdoor inspiration.
Summer/outdoor merchandising and family-focused displays.
Cricket, outdoor and family participation events.
Seasonal Relevance
Summer Sport Hub
Cricket + Swimming + Outdoor
Families + kids: Customers looking for activities during holidays and summer.
Schools + Housing Societies + Meta + WhatsApp
Family + kids creators
Summer camp + school partnerships
Amanora + Wagholi: Summer/family visibility
Wakad: selective OOH
Amanora/Wagholi: Summer Sport Hub; other stores local sport
Wakad: Cricket
NIBM: Skating
SGS: Outdoor sports
Wakad: Summer fitness
Wagholi: Family challenge
Amanora: Kids + parents
NIBM: Fitness challenge
SGS: Outdoor fitness
Wagholi: Summer schools
Amanora: Kids camps
Wakad: Sports camps
NIBM: Kids sport
SGS: College sports
Summer employee challenge across all catchments
Kids summer camps - Amanora + Wagholi + NIBM
Summer sports day - Amanora/Wagholi
Schools + societies around Amanora/Wagholi/NIBM
Kids camp kits
```

After clicking **May Peak season Summer**:
```text
Maharashtra Day May 1st
Camps + Family Activities. Sport of the month: swimming. Pune ad spend 37.6 L.
May in full: what competitors do, how Pune answers, and what goes live on the ground
Active Family: Promote fitness and activities that families can do together.
PUMA: Training/Summer
adidas: Running/Lifestyle
Nike: Training/Running
Shakti: Fitness/Swimming
Training shoes, activewear, fitness equipment and outdoor products.
Family/summer packages and category-led offers.
Fitness creators, family content and product education.
Family, fitness and summer merchandising.
Family fitness activities, kids' camps and holiday programs.
Family Appeal
Family Activity
Camps + Family Activities
Families + active kids: Customers with more time for camps and recreational activities.
Society partnerships + Schools + Meta + Store
Parenting + family creators
Family/society partnerships
Wakad + Amanora: Summer Sport
Wagholi: local visibility
Amanora: Sports Utsav + family; Wagholi/NIBM: camps
NIBM: Multi-sport
Wakad: Transformation
Amanora: Kids fitness
NIBM: Community gyms
All: Holiday camps + multi-sport
Family sports day - Amanora + Wagholi + Kharadi
Family challenge - all 5 catchments
Family multi-sport - Amanora/NIBM/Wagholi
Summer camps around all 5
Family challenge products
```

After clicking **Jun Sustained season Summer**:
```text
June
Football + Yoga: Move Your Way
Football Tournaments + Trials. Sport of the month: football. Pune ad spend 33.8 L.
June in full: what competitors do, how Pune answers, and what goes live on the ground
Football Fever: Use tournaments, football culture and product storytelling to create excitement.
PUMA: Football/Running
adidas: Football
Shakti: Football/Racket sports
Gully Labs: Culture
Product-led football offers and team/sport merchandise.
Football creators, athlete stories, match/tournament content and paid media.
Football-focused VM, jerseys and footwear prominently displayed.
Football tournaments, screenings, fan events and product trials.
Sport Passion
Football Takeover
Football Tournaments + Trials
Football players + fans: Performance users as well as football culture followers.
Football communities + Instagram + YouTube + WhatsApp
Football + running athletes
Football partnerships
Wakad: Football OOH
SGS: City visibility
Others: local
Wakad: Football; other 4: local football activations
Wagholi: Football
SGS: Football
Wakad: Football conditioning
Wagholi: Sports fitness
NIBM: Fitness
SGS: Athlete fitness
Wakad: College football
Wagholi: Cricket/football
Amanora: Kids
Football league - Wakad/Hinjewadi
Football screenings - Wakad + Wagholi
Football - Wakad/SGS
Football academies around Wakad/SGS/Wagholi
Football prizes + trials
```

After clicking **Jul Sustained season Monsoon**:
```text
July
WARI
Indoor Fitness + Rain-ready Products. Sport of the month: cycling. Pune ad spend 36.4 L.
July in full: what competitors do, how Pune answers, and what goes live on the ground
Monsoon Fitness: Position indoor training and weather-ready products as the solution.
PUMA: Running/Monsoon
adidas: Running/Training
Nike: Running/Outdoor
Shakti: Indoor Fitness
Running shoes, indoor fitness equipment, rain-ready accessories and training apparel.
Seasonal offers to drive indoor/monsoon purchases.
Running content adapted to monsoon + indoor workout content.
Running/fitness VM with monsoon-relevant products.
Indoor fitness sessions, running groups and monsoon challenges.
Product Relevance
Monsoon Sport
Indoor Fitness + Rain-ready Products
Runners + fitness users: Customers
Gym partnerships + CRM + Meta
Fitness + monsoon creators
Indoor sports venues
Limited OOH: Digital + catchment media across 5 stores
All 5: Monsoon Sport Zone
Wakad: Indoor fitness
Wagholi: Badminton
NIBM: Indoor sports
All: Monsoon indoor fitness challenges
All: Indoor sport challenges
Indoor corporate fitness - all catchments
Monsoon indoor challenge - NIBM + Amanora + Wagholi
Indoor fitness - NIBM/Amanora/SGS
Indoor venues around NIBM/Amanora/SGS
Indoor fitness trials
```

After clicking **Aug Low season Monsoon**:
```text
August
India Plays: Find Your Sport
National Sports Day + Communities. Sport of the month: badminton. Pune ad spend 29.8 L.
August in full: what competitors do, how Pune answers, and what goes live on the ground
Sport Participation: Connect sport with national pride, athletes and community participation. / Ladak marathon
PUMA: Sport/Youth
adidas: Performance
Nike: Athlete-led
Gully Labs: Indian Culture
Multi-sport equipment, performance footwear and sport apparel.
Event/community-led product offers.
Athlete stories, national-sport content and community-generated content.
Sport-led displays around National Sports Day / Independence.
Community sports events and mass participation activities.
Youth + Culture
Mass Participation
National Sports Day + Communities
OOH + PR + Community + Social + Store
Local athletes from all 5 catchments
Large-scale Pune sports partnership
Wakad + SGS + Amanora: BIG National Sports Day visibility
Wagholi/NIBM: local
All 5: National Sports Day
All 5: Multi-sport academies + National Sports Day
All: Fitness challenge + National Sports Day
All: Independence + National Sports Day
City-wide corporate sports challenge
Multi-sport society day - all 5
Academies + colleges across all catchments
National Sports Day kits across all 5
```

After clicking **Sep Low season Monsoon**:
```text
September
Ganesh Chaturthi Sept 4th
Product Demos + Expert Content. Sport of the month: water sports. Pune ad spend 22.1 L.
September in full: what competitors do, how Pune answers, and what goes live on the ground
New Product Drops: Create excitement through launches, innovation stories and early access.
PUMA: New Drops
adidas: New Product
Nike: Innovation
Shakti: New Equipment
ASICS: New Running
Gully Labs: Sneaker Drops
Hero products, innovation-led products and new sneaker/apparel drops.
Launch-led offers or early-access product communication.
Product teasers, launch videos, creator reviews and product storytelling.
New-launch VM designed to create product discovery.
Product trials, launch events and expert-led demonstrations.
Product Excitement
Product Education
Product Demos + Expert Content
Influencers + Product content + CRM + Store
Technical product reviewers
Product launch + creators
Wakad + SGS: Launch visibility
Amanora: mall media
All 5: New Arrival / Product Demo
Wakad: Running
SGS: Technical sport
Wagholi: Fitness
Amanora: Women/family
SGS: Technical running
SGS: Sports colleges
Wakad: Athlete sessions
Product demo + wellness - Hinjewadi/Kharadi
Product demo - premium societies around Wakad/Amanora/SGS
Running/cycling/product trials - Wakad/SGS
Running/technical communities
New product trial units
```

After clicking **Oct Rising season Spring**:
```text
October
Gift a Sport: Sport for Everyone
Festive Bundles + Gifting. Sport of the month: running. Pune ad spend 22.8 L.
October in full: what competitors do, how Pune answers, and what goes live on the ground
Festive + Gifting: Position sport/lifestyle products as festive and gifting choices.
PUMA: Festive/Lifestyle
adidas: Originals/Festive
Nike: Lifestyle
Shakti: Family Sports
Gully Labs: Culture/Festive
Lifestyle footwear, sportswear, family products and festive bundles.
Festive bundles, gifting offers and mall-led promotions.
Festive reels, gifting guides, paid retargeting and mall campaigns.
Festive VM, gifting zones and mall visibility.
Festive activations, mall events and community engagement.
Retail Visibility
Festive Sport Gifting
Festive Bundles + Gifting
Mall + OOH + Meta + WhatsApp + Influencers
Pune lifestyle + family creators
Festive mall/community partnerships
Amanora: BIG festive mall visibility
Wakad/SGS: OOH
Amanora: Gift a Sport; all: festive sport
Amanora: Family sports
Amanora: Festive fitness
Wakad: Performance
Wagholi: Family
NIBM: Community
Amanora: Family sports day
Festive wellness - all catchments
Festive sport carnival - Amanora + NIBM + Wagholi
Festive sport carnival - Amanora/Wagholi/NIBM
Festive societies + malls
Festive event kits
```

After clicking **Nov Peak season Winter**:
```text
November
Black Friday: Best Value for Sport
CRM + Digital Conversion. Sport of the month: trekking. Pune ad spend 34.1 L.
November in full: what competitors do, how Pune answers, and what goes live on the ground
Black Friday / Sale: Create urgency through limited-period discounts and high-intent digital targeting.
PUMA: Sale/Offers
adidas: Sale/Offers
Nike: Selective Promo
Shakti: Value/Offers
ASICS: Offers
Gully Labs: Drops/Offers
Bestsellers, entry-price products, bundles and discounted inventory.
Deep promotional period: discounts, urgency, retargeting and CRM conversion.
Performance marketing, CRM, remarketing and urgency-led creatives.
Sale signage, high-visibility price communication and conversion-led VM.
Mostly conversion-led rather than community-led activations.
Urgency + Offers
Value + Conversion
CRM + Digital Conversion
CRM + Paid Digital + Retargeting + Store
Value/deal creators
Performance + CRM
Wakad + SGS: Black Friday conversion OOH
Others: hyperlocal
All 5: Black Friday conversion
All 5: Academy member offers + product conversion
All: Gym CRM + high-intent offers
All: Youth sport offers
Employee offers + CRM
Society member value offers - all 5
Conversion events - Wakad/SGS + local events in other stores
High-intent catchments around all stores
Only conversion-linked
```

After clicking **Dec Peak season Winter**:
```text
December
Gift a Sport: New Year, New Sport
Gifting + New Year Sport Acquisition. Sport of the month: trekking. Pune ad spend 36.1 L.
December in full: what competitors do, how Pune answers, and what goes live on the ground
Christmas + New Year: Combine gifting with “new year, new lifestyle” acquisition.
PUMA: Gifting
adidas: Gifting/Originals
Nike: Gifting/Winter
Shakti: Gifting/Sport
ASICS: Running/Gifting
Gully Labs: Gifting/Sneakers
Gifting products, sneakers, winter apparel and family sport products.
Gift bundles and year-end offers.
Gifting guides, product recommendations and New Year acquisition campaigns.
Gifting displays, winter products and festive merchandising.
Gifting events, family activities and year-end community engagement.
Gifting
Gift a Sport
Gifting + New Year Sport Acquisition
CRM + WhatsApp + Influencers + Store
Gifting + lifestyle creators
New Year + gifting
Amanora + Wakad: Christmas/New Year
Wagholi/SGS: local
All 5: Christmas + New Year
All 5: “Gift a Sport” academy partnerships
All: New Year fitness registrations
All: Christmas sports carnival
Corporate gifting + sport kits
Christmas family sport day - all 5
All 5: Gift a Sport
Schools + societies around all stores
Gifting/community kits
```

After clicking **Pune**:
```text
1
23
34
45
```

After clicking **Gujarat**:
```text
9
18
26
35
```

After clicking **MP**:
```text
4
8
15
```

#### index › `q1`: Q1 2027: keep the run going
- img: assets/img/wd-giveaway.jpg [alt: Giveaway: a Women's Day pilates accessory pack with snood, socks, drawstring bag, mat and cap]; assets/img/wd-pink-run.jpg [alt: Decathlon community run in pink under a Decathlon arch, with a pink flag and a cheque for a women's cause]
- vid:  [poster assets/posters/womens-day.jpg]

```text
Priority sports: trekking, fitness and running. Clearance is the commercial campaign. Republic Day, new arrivals, footwear and Women's Day carry the brand.
Turnover growth
12.1%
Incremental turnover
8.3 Cr
Bills
3.7 L +10%
Conversion
33%
Traffic
Customers +10%
50 influencer videos on new arrivals and sale, 5M views
Move Your Way: 3.5k registrations, fit sessions and in-store challenges
Bib collection at store: 30, with 20k walk-ins
Apartment and corporate events: 10k engagements
Beach Fest in Surat with 5k participants
2x marketing spend for the new Surat store
Retention
Returning customers +15%
Membership, RCS and WhatsApp: 5 lakh customers told about sale and new arrivals
Workshop Mela in 10 apartments: 250 bikes serviced, 25 buybacks
Membership points earned through sport
Community meetup with 500 runners inside stores
Bills +10%
Aggressive sale implant across 3 touchpoints
New arrivals running in parallel with the sale campaign
Republic Day sale in January, sale campaign in February
Test in the pipeline: a personalised page for Pune with Deepak and Nikhil, for better conversion
January, all 13 stores
Move Your Way: Movement for All
A complete fitness event across all 13 stores.
January, in every store
Clearance sale: animated at the stores
In all 13 stores.
Sat 6 and Sun 7 March, Women's Day weekend
Women's Day: one weekend, all 13 stores
Women are a third of our business and the fastest-growing part of it. Women's Day (Mon 8 March) falls after a weekend, so every store hosts women-only mornings on Saturday and Sunday: pilates or yoga first, then a sport to try, then shopping with a Women's Day offer. The film is the feel we want: a rooftop pilates session that looks like a party, not a class.
Women-only sessionTry a sportShop with the day's offerJoin a women's club that keeps meeting
GiveawayA Women's Day pilates accessory pack (snood, socks, drawstring bag, mat, cap) for women who register and post from the session.
Wear pinkA pink community run like Decathlon's in France: one colour, one arch, a cause for women, and a photo every store can post.
Pune
WakadPilates and core on the forecourt, then a women's 5K club run
WagholiPlayground morning: pilates, then a women-only pickleball slot
SGS MallIn-mall studio: pilates and strength taster classes
AmanoraMall-atrium yoga flow and a She Plays try-a-sport zone
NIBMMothers and daughters: yoga and skipping challenges
Gujarat
MoteraRooftop-style pilates on the playground, the format in the film
NexusIn-mall pilates and a women's run group launch
BarodaCourt morning: pilates, then women's box cricket
Dumas, SuratSunrise yoga and a women-only pickleball slot
RajkotGarba-fit cardio and a women's walking group
Madhya Pradesh
IndorePlayground pilates, then a women's 5K
BhopalLakeside yoga by the Upper Lake, back to DB Mall
GwaliorMorning walk and yoga, with a self-defence basics class
Run with local women creators (Women's Sport Month in February leads into it), registrations through the app, and a push to women customers near each store. Store formats follow each store's space: playground stores go outdoors, mall stores use the atrium.
```

#### index › `horizon`: On the horizon
- external links: https://commons.wikimedia.org/wiki/File:Holi_-_The_festival_of_Colours.jpg; https://commons.wikimedia.org/wiki/File:Diwali_Diya_4.jpg; https://commons.wikimedia.org/wiki/File:Football_in_India.jpg; https://commons.wikimedia.org/wiki/File:Kite_Festival_Uttarayan_in_Gujarat.jpg; https://commons.wikimedia.org/wiki/File:2008_Pune_Marathon_runners.jpg; https://commons.wikimedia.org/wiki/File:2025_New_Year_Fireworks_in_Tamsui,_New_Taipei_(54238509582).jpg; https://commons.wikimedia.org/wiki/File:Pickleball_Paddle_2025.jpg; https://commons.wikimedia.org/wiki/File:92nd_Military_Police_Company_Crossfit_Competition_(8770089).jpg; https://commons.wikimedia.org/wiki/File:CH.ZH.Affoltern-am-Albis_2024-03-30_road-bike-racing.jpg; https://commons.wikimedia.org/wiki/File:Oxford_Street_Christmas_Lights_-_geograph.org.uk_-_1661010.jpg; https://commons.wikimedia.org/wiki/File:USMC-111007-M-UV915-234.jpg; https://commons.wikimedia.org/wiki/File:UKM_BADMINTON_UM.jpg; https://commons.wikimedia.org/wiki/File:The_waving_Indian_flag.jpg; https://commons.wikimedia.org/wiki/File:Sachin_in_action.jpg; https://www.flickr.com/photos/66001271@N00/3856252950; https://www.flickr.com/photos/21932201@N04/2635903608; https://www.flickr.com/photos/58411470@N00/13902057323; https://www.flickr.com/photos/73216620@N08/6615779401; https://www.flickr.com/photos/58317401@N04/8044813365

```text
Commonwealth Games 2030. Gujarat.
Every tie-up, run club and society league we build in 2027 is groundwork for the Games coming to Gujarat.
Decathlon Pune, Gujarat and MP · Marketing plan Q4 2026 and Q1 2027
Confidential. For shareholder review.
Photo credits
Creative Commons: Holi - The festival of Colours by Sundarhum, CC BY-SA 4.0 · Diwali Diya 4 by Slyronit, CC BY-SA 4.0 · Football in India by Qirille, CC BY-SA 4.0 · Kite Festival Uttarayan in Gujarat by Gopalkhetani, CC BY-SA 4.0 · 2008 Pune Marathon runners by Kushal Das from Pune, India, CC BY 2.0 · 2025 New Year Fireworks in Tamsui, New Taipei (54238509582) by Artemas Liu, CC BY-SA 2.0 · Pickleball Paddle 2025 by Fakhar Saeed, CC0 · 92nd Military Police Company Crossfit Competition (8770089) by U.S. Army photo by Spc. Samuel Signor, Public domain · CH.ZH.Affoltern-am-Albis 2024-03-30 road-bike-racing by Roy Egloff, CC BY-SA 4.0 · Oxford Street Christmas Lights - geograph.org.uk - 1661010 by Christine Matthews, CC BY-SA 2.0 · USMC-111007-M-UV915-234 by Unknown, Public domain · UKM BADMINTON UM by UNIVERSITAS MULIA, CC BY-SA 4.0 · The waving Indian flag by Sisheer Philip, CC BY-SA 4.0 · Sachin in action by Privatemusings, CC BY-SA 4.0 · SarPass... by Chandramohan Burly V, CC BY-SA 2.0 · Kudremukh, Shola Grasslands. by wildxplorer, CC BY 2.0 · Shoes for sale by kewl, CC BY 2.0 · Stars Over Everest 2 by SamHawleywood, CC BY 2.0 · Kids Playing 1 by LabyrinthX-2, CC BY-SA 2.0. Other photos are Decathlon's own or supplied by the team.
```

### B.2 november.html, November and December 2026
- Browser title: "Nov and Dec 2026 · West Plan". Meta description: "Decathlon West, November and December 2026: Diwali, Black Friday, Winter and Travel, Christmas gifting and the Christmas Sale, the Pune runway, AOPs, the Pune plan line by line and how we do marketing.".
- Sections in order: `topbar`, `top`, `diwali`, `social`, `influencers`, `instore`, `blackfriday`, `winter`, `december`, `runway`, `pune`, `aops`, `marketing`, `budget`, `summary`, `footer`.
- Outside the sections (`expBar`): Download this page / Download PDF / Download GIF / The complete page, as you see it.

#### november › `topbar`: DECATHLON West

```text
West planPlan
Nov & Dec 2026Nov-Dec
2027 plan2027
Water 2027Water
Diwali
Black Friday
Winter, Trek & Travel
Christmas
Pune runway
Pune money
AOPs
Our marketing
Budget and goals
Summary
```

#### november › `top`: Update, 10 November 2026

```text
November and December 2026
Two months, four campaigns. Each one below has what we do, the money and what it brings in; the summary at the end puts them side by side.
1Diwali: Gift a Sport6 to 11 Nov₹1.30 LGujarat influencers2Black Friday27 to 30 Nov₹12.20 L21% of Pune's Nov + Dec3Winter, Trek & TravelAll of Nov and Dec₹20.70 L36% of Pune's Nov + Dec4Christmas: gifting and the saleGifting 1 to 25 Dec; sale 19 to 31 Dec₹10.95 L19% of Pune's Nov + Dec+Always onAOPs and Kiprun events₹14.30 L25% of Pune's Nov + Dec
```

#### november › `diwali`: 1 of 4Diwali: Gift a Sport6 to 11 NovPune ₹0, not in the Pune plan
- img: assets/img/nov/decathlon-wordmark-white.svg [alt: Decathlon]

```text
Diwali Gift a Sport
6 to 11 November. Diwali is on Sunday 8 November. The five days, and what has been live so far.
Fri 6 NovDhanteras
Sat 7 NovChoti Diwali
Sun 8 NovDiwali, Lakshmi Puja
Tue 10 NovGovardhan Puja and Gujarati New Year
Wed 11 NovBhai Dooj
Live so far
No saleNo Diwali sale in the stores this year: we celebrate with Gift a Sport instead of discounts
In storeGift a Sport comms: light boxes, wall headers, rangoli of balls and frisbees, garlands at the welcome desk. Live in Bhopal, Motera and Surat; the other stores are not putting them up
Influencers23 so far: Gujarat 13 (₹1.3 L, with Akshat), Indore 4 on barter, Bhopal 4, Gwalior 2 with a gift card each. The 10 reels below have about 1.9 lakh views
City pagesDiwali reels on all 8 Let's Play pages, e.g. Gwalior's “why gift mithai? When you have Decathlon”
RecyclingGujarat content reused in MP, the best of MP reused in Gujarat, the same with Pune
On the road7 hoardings live in Pune; 114 practice-place AOPs live in 6 stores
NextBlack Friday influencers finalised by Mon 9 Nov (Pune by Tue 10 Nov)
Content is being recycled across the cluster
Gujarat content→reused in MP
The best MP content→reused in Gujarat
The same between↔Pune and the other cities
One good reel now runs in several cities, so each city page posts more often over Diwali without new shoots.
```

#### november › `social`: Social media: our Let's Play city pages
- img: assets/posters/ig/DfR5JF9xhnU.jpg [alt: Post by @letsplay_ahmedabad]; assets/posters/ig/De4J7EvhdBz.jpg [alt: Post by @letsplay_ahmedabad]; assets/posters/ig/DezBlWXjO_i.jpg [alt: Post by @letsplay_ahmedabad]; assets/posters/ig/DewQ1znDYeS.jpg [alt: Post by @letsplaysurat]; assets/posters/ig/DeosStPNuxE.jpg [alt: Post by @letsplaysurat]; assets/posters/ig/DfWc3lrALwl.jpg [alt: Post by @___sportsarena___]; assets/posters/ig/DfUg1stSYDY.jpg [alt: Post by @doctor.who.runs]; assets/posters/ig/DfRwSCQMThb.jpg [alt: Post by @doctor.who.runs]; assets/posters/ig/DfPckVPtYok.jpg [alt: Post by @satishdubey07]; assets/posters/ig/DfOjP_Ega2u.jpg [alt: Post by @___sportsarena___]; assets/posters/ig/DfU25F5ADdQ.jpg [alt: Post by @lets_playindore]; assets/posters/ig/DfUWa1cAFwo.jpg [alt: Post by @lets_playindore]; assets/posters/ig/DfSWm7UAH3K.jpg [alt: Post by @lets_playindore]; assets/posters/ig/DfPoeqygHml.jpg [alt: Post by @lets_playindore]; assets/posters/ig/DfRyd7KTa0b.jpg [alt: Post by @bhopal.sb]; assets/posters/ig/DfM09PzqoXZ.jpg [alt: Post by @tinyshuttlestar]; assets/posters/ig/DfG-yANhDpg.jpg [alt: Post by @yakshitdairies_10]; assets/posters/ig/DfPRG2rNlj2.jpg [alt: Post by @letsplayygwalior]
- vid:  [poster assets/posters/ig/DfWmPyARQTi.jpg];  [poster assets/posters/ig/DfTvKjJMMEv.jpg];  [poster assets/posters/ig/DfARs-kRF7G.jpg];  [poster assets/posters/ig/DfH4ZLHtzTY.jpg];  [poster assets/posters/ig/DfFUtI_tj0d.jpg];  [poster assets/posters/ig/DehJUqQtsej.jpg];  [poster assets/posters/ig/Dd8J7lzNngs.jpg];  [poster assets/posters/ig/DfErMzJoxFv.jpg];  [poster assets/posters/ig/DewTiKNIDpW.jpg];  [poster assets/posters/ig/DfT8OR-ML-9.jpg];  [poster assets/posters/ig/Deq8s6ms1G5.jpg];  [poster assets/posters/ig/DfQCQKltWXg.jpg];  [poster assets/posters/ig/DfRxzv1zGEc.jpg];  [poster assets/posters/ig/DfMvGGDTaaV.jpg];  [poster assets/posters/ig/DfXLqoETY1p.jpg];  [poster assets/posters/ig/DfPVVJkI_wa.jpg];  [poster assets/posters/ig/DfMvv1cuhKa.jpg];  [poster assets/posters/ig/DfXGxBSNynn.jpg];  [poster assets/posters/ig/DfUWnpNtb7g.jpg]
- external links: https://www.instagram.com/letsplay_ahmedabad/; https://www.instagram.com/reel/DfWmPyARQTi/; https://www.instagram.com/reel/DfTvKjJMMEv/; https://www.instagram.com/p/DfR5JF9xhnU/; https://www.instagram.com/reel/DfARs-kRF7G/; https://www.instagram.com/p/De4J7EvhdBz/; https://www.instagram.com/p/DezBlWXjO_i/; https://www.instagram.com/letsplaysurat/; https://www.instagram.com/reel/DfH4ZLHtzTY/; https://www.instagram.com/reel/DfFUtI_tj0d/; https://www.instagram.com/p/DewQ1znDYeS/; https://www.instagram.com/p/DeosStPNuxE/; https://www.instagram.com/reel/DehJUqQtsej/; https://www.instagram.com/reel/Dd8J7lzNngs/; https://www.instagram.com/lets_play_baroda/; https://www.instagram.com/reel/DfErMzJoxFv/; https://www.instagram.com/reel/DewTiKNIDpW/; https://www.instagram.com/play_rajkot/; https://www.instagram.com/reel/DfT8OR-ML-9/; https://www.instagram.com/reel/Deq8s6ms1G5/; https://www.instagram.com/letsplaypune/; https://www.instagram.com/p/DfWc3lrALwl/; https://www.instagram.com/p/DfUg1stSYDY/; https://www.instagram.com/p/DfRwSCQMThb/; https://www.instagram.com/reel/DfQCQKltWXg/; https://www.instagram.com/p/DfPckVPtYok/; https://www.instagram.com/p/DfOjP_Ega2u/; https://www.instagram.com/lets_playindore/; https://www.instagram.com/p/DfU25F5ADdQ/; https://www.instagram.com/p/DfUWa1cAFwo/; https://www.instagram.com/p/DfSWm7UAH3K/; https://www.instagram.com/reel/DfRxzv1zGEc/; https://www.instagram.com/p/DfPoeqygHml/; https://www.instagram.com/reel/DfMvGGDTaaV/; https://www.instagram.com/letsplaybhopal/; https://www.instagram.com/reel/DfXLqoETY1p/; https://www.instagram.com/p/DfRyd7KTa0b/; https://www.instagram.com/reel/DfPVVJkI_wa/; https://www.instagram.com/p/DfM09PzqoXZ/; https://www.instagram.com/reel/DfMvv1cuhKa/; https://www.instagram.com/p/DfG-yANhDpg/; https://www.instagram.com/letsplayygwalior/; https://www.instagram.com/reel/DfXGxBSNynn/; https://www.instagram.com/reel/DfUWnpNtb7g/; https://www.instagram.com/p/DfPRG2rNlj2/

```text
Where each city page stands today (5 November), and the videos that are live there, city by city.
8 of 8city pages live
33.9Kfollowers across them
1,567posts so far
Suratbiggest page, 10.6K followers
Gujarat
Ahmedabad
@letsplay_ahmedabad: 7,203 followers, 266 posts. The latest 6 on the page below.
1.5K views@letsplay_ahmedabad on Instagram
6.6K views@letsplay_ahmedabad on Instagram
Watch on Instagram4.3K views
5K views@letsplay_ahmedabad on Instagram
Watch on Instagram3.8K views
Watch on Instagram
Surat
@letsplaysurat: 10.6K followers, 342 posts. The latest 6 on the page below.
3.2K views@letsplaysurat on Instagram
11.9K views@letsplaysurat on Instagram
2.66 lakh views@letsplaysurat on Instagram
@letsplaysurat on Instagram
Baroda
@lets_play_baroda: 4,178 followers, 360 posts. The latest 6 on the page below.
2.9K views@lets_play_baroda on Instagram
10.6K views@lets_play_baroda on Instagram
Rajkot
@play_rajkot: 3,676 followers, 187 posts. The latest 6 on the page below.
732 views@play_rajkot on Instagram
1K views@play_rajkot on Instagram
Pune
@letsplaypune: 3,653 followers, 264 posts. The latest 6 on the page below.
Watch on Instagram873 views
Watch on Instagram1.6K views
816 views@fitness_after_fifty on Instagram
Madhya Pradesh
Indore
@lets_playindore: 4,339 followers, 99 posts. The latest 6 on the page below.
Watch on Instagram631 views
225 views@lets_playindore on Instagram
2.1K views@lets_playindore on Instagram
Bhopal
@letsplaybhopal: 259 followers, 46 posts. The latest 6 on the page below.
@letsplaybhopal on Instagram
Watch on Instagram3.5K views
6.4K views@__.bhavya on Instagram
Watch on Instagram2.5K views
14.6K views@bhopal_events_update on Instagram
Watch on Instagram1.9K views
Gwalior
@letsplayygwalior: 24 followers, 3 posts. The latest 3 on the page below.
402 views@letsplayygwalior on Instagram
987 views@letsplayygwalior on Instagram
Watch on Instagram90 views
```

#### november › `influencers`: Influencers: done so far
- img: assets/posters/ig/DfG8IBLiePI.jpg [alt: Post by @vadodara_foodiesisters]
- vid:  [poster assets/posters/ig/DfHm1Z2vrbd.jpg];  [poster assets/posters/ig/DfHJeAntkw4.jpg];  [poster assets/posters/ig/DfG0V96gt7T.jpg];  [poster assets/posters/ig/DfG2BaXNPLH.jpg];  [poster assets/posters/ig/DfHEdoasy0O.jpg];  [poster assets/posters/ig/DfMvv1cuhKa.jpg];  [poster assets/posters/ig/DerYOikTLww.jpg];  [poster assets/posters/ig/DfPVVJkI_wa.jpg];  [poster assets/posters/ig/DfPFRE0KFpO.jpg];  [poster assets/posters/ig/DfXGo04OAM4.jpg]
- external links: https://www.instagram.com/reel/DfHm1Z2vrbd/; https://www.instagram.com/reel/DfHJeAntkw4/; https://www.instagram.com/reel/DfG0V96gt7T/; https://www.instagram.com/reel/DfG2BaXNPLH/; https://www.instagram.com/reel/DfHEdoasy0O/; https://www.instagram.com/p/DfG8IBLiePI/; https://www.instagram.com/reel/DfMvv1cuhKa/; https://www.instagram.com/reel/DerYOikTLww/; https://www.instagram.com/reel/DfPVVJkI_wa/; https://www.instagram.com/reel/DfPFRE0KFpO/; https://www.instagram.com/reel/DfXGo04OAM4/

```text
Creators who have already posted for our stores, and the reels that are live. Views as shown on Instagram on 5 November.
13Gujarat, ₹1.3 L, with Akshat
4Indore, Barter
4Bhopal
2Gwalior, A gift card each
23influencers so far
Gujarat
Ahmedabad and Baroda: 6 reels live
About 1.61 lakh views so far on the reels below.
47.6K views@hetansh_shahh on Instagram
44.9K views@aishwaryaradhani on Instagram
37.7K views@ayushithakkarrr on Instagram
23.3K views@monikacreatescontent on Instagram
4.2K views@kashii__w on Instagram
Watch on Instagram3.6K views
Madhya Pradesh
Bhopal: 4 reels live
About 32.3K views so far on the reels below.
14.6K views@bhopal_events_update on Instagram
11.3K views@jasminethakurr on Instagram
6.4K views@__.bhavya on Instagram
@wassup_bhopal on Instagram
Indore: 1 reel live
About 1.8K views so far on the reels below.
1.8K views@taste_budds on Instagram
```

#### november › `instore`: In-store comms
- img: assets/img/nov/bhopal-instore-1.jpg [alt: Bhopal: Diwali entrance: diyas, garlands and blue and gold balloons]; assets/img/nov/bhopal-instore-2.jpg [alt: Bhopal: Gift a Sport rangoli of balls, frisbees and shuttles]; assets/img/nov/bhopal-instore-3.jpg [alt: Bhopal: Welcome desk with marigold garlands and Happy Diwali bunting]; assets/img/nov/bhopal-instore-4.jpg [alt: Bhopal: The team with the Gift a Sport display]; assets/img/nov/bhopal-instore-5.jpg [alt: Bhopal: Gift a Sport corner by camping]; assets/img/nov/surat-instore-1.jpg [alt: Surat, Dumas Road: Diwali gift tower: Decathlon-wrapped gifts, Happy Diwali ribbons and marigold toran]; assets/img/nov/surat-instore-2.jpg [alt: Surat, Dumas Road: Gift a Sport winter stand: padded jackets from ₹1,999 and gloves]; assets/img/nov/surat-instore-3.jpg [alt: Surat, Dumas Road: Shop window lit up with marigold garlands]; assets/img/nov/surat-instore-4.jpg [alt: Surat, Dumas Road: Entrance doors with marigold torans and lotus lanterns]; assets/img/nov/motera-instore-1.jpg [alt: Motera: Gift a Sport light box outside the store]; assets/img/nov/motera-instore-2.jpg [alt: Motera: The Gift a Sport light box]; assets/img/nov/motera-instore-3.jpg [alt: Motera: Gift a Sport headers on the ball wall, from ₹399]; assets/img/nov/motera-instore-4.jpg [alt: Motera: Gift a Sport gondola with the ₹899 cricket combo]; assets/img/nov/motera-instore-5.jpg [alt: Motera: Gift a Sport headers on the archery and darts wall]

```text
It all starts in the store
Sometimes we go beyond profit, margins and the bottom line, to belong to the city we serve.
Decathlon is a people brand. Festivals are for celebrating together: with our teammates, and with every family that steps into the store. That is how a gifting culture starts, and it starts in our stores. It does not take a big investment. A garland on the welcome desk, a rangoli of balls and frisbees, a “Gift a Sport” wall, and a smile at the door say what matters: we are with you. Happy Diwali.
Pune
WakadNot putting them up
WagholiNot putting them up
SGS MallNot putting them up
NIBMNot putting them up
AmanoraNot putting them up
Gujarat
MoteraDiwali comms live
Nexus AhmedabadNot putting them up
Surat, Dumas RoadDiwali comms live
BarodaNot putting them up
RajkotNot putting them up
Madhya Pradesh
IndoreNot putting them up
BhopalDiwali comms live
GwaliorNot putting them up
Bhopal
Diwali entrance: diyas, garlands and blue and gold balloons
Gift a Sport rangoli of balls, frisbees and shuttles
Welcome desk with marigold garlands and Happy Diwali bunting
The team with the Gift a Sport display
Gift a Sport corner by camping
Surat, Dumas Road
Diwali gift tower: Decathlon-wrapped gifts, Happy Diwali ribbons and marigold toran
Gift a Sport winter stand: padded jackets from ₹1,999 and gloves
Shop window lit up with marigold garlands
Entrance doors with marigold torans and lotus lanterns
Motera
Gift a Sport light box outside the store
The Gift a Sport light box
Gift a Sport headers on the ball wall, from ₹399
Gift a Sport gondola with the ₹899 cricket combo
Gift a Sport headers on the archery and darts wall
```

#### november › `blackfriday`: 2 of 4Black Friday27 to 30 NovPune ₹12.20 L, 21% of Pune's Nov + DecGoal ₹12.34 Cr
- img: assets/img/nov/bf-story-black.jpg [alt: Draft Black Friday story: Black Friday Sale, 27 to 30 November, visit your nearest Decathlon store]; assets/img/nov/bf-story-countdown.jpg [alt: Draft Black Friday countdown story: 4 days left, membership points, visit your nearest Decathlon store]

```text
27 - 30 November
Black Friday influencers
Our first move for Black Friday. Gujarat and MP are finalised by Monday 9 November; Pune is being cross-checked with the vendor and should be done by Tuesday 10 November.
67+Gujarat influencers, ₹7.4 L
40Pune influencers, ₹4 L
40MP influencers, ₹2.02 L
147+influencers for Black Friday
| City | Influencers | Budget | Status
| Surat | 25 | - | To be finalised by Monday 9 Nov
| Ahmedabad | 30 | - | To be finalised by Monday 9 Nov
| Rajkot | 12 | - | To be finalised by Monday 9 Nov
| Baroda | - | - | To be finalised by Monday 9 Nov
| Gujarat total | 67+ | ₹7.4 L |
| Pune | 40 | ₹4 L | Cross-checking with the vendor; likely done by Tuesday 10 Nov
| Pune total | 40 | ₹4 L |
| Indore | 15 | ₹1 L | To be finalised by Monday 9 Nov
| Bhopal | 15 | ₹70K | To be finalised by Monday 9 Nov
| Gwalior | 10 | ₹32K | To be finalised by Monday 9 Nov
| Madhya Pradesh total | 40 | ₹2.02 L |
| All Black Friday | 147+ | ₹13.42 L |
Draft story
Draft countdown story
On stories and social media
A countdown through the sale: 4 days left on Fri 27, 3 days left on Sat 28, 2 days left on Sun 29, and the last day on Mon 30.
Urgency in every post: first come, first served; limited stock; the benefits run only for the Black Friday weekend, until 30 November.
Membership points on eligible purchases, and “visit your nearest Decathlon store”.
We are not communicating 40% yet. We are waiting for the brief from the Marcom team. Once it is here we will check with them whether to show a percentage at all, or say something else, and only then finalise the copy. The drafts above show 40% as a placeholder.
Pune's Black Friday, line by line
In-mall commsNov 2026NIBM 45,000, Amanora 45,000, SGS 75,000 (these add to 1,65,000)
₹1,70,000
In-store comms, visible to customersNov 2026, whole city live from 23 NovAmanora 83,000, SGS 1,44,283, Wakad 1,50,000, NIBM 50,000, Wagholi 1,50,000 (these add to 5,77,283)
₹5,50,000
Instagram influencersNov 2026, 40 influencers, 21 to 28 Nov
₹4,00,000
Social media boostNov 2026, 5 postsplus a countdown of 4 posts + 4 stories, 23 to 28 Nov (₹40,000 in the Black Friday table, not in the total)
₹30,000
Coupon cards after billing: basket over ₹2,799 gets a product freeNov 2026, 35,000 cards, handed out from 17 Nov
₹70,000
Pune total₹12,20,00021% of Pune's Nov + Dec (₹58.15 L)
What it bringsTurnover goal ₹12.34 Cr, +16% on 2025: 8.0% of the ₹154.75 Cr Q4 store challenge in 4 days.
Walk-in events: a suggestion for Black Friday morningFor the stores that need footfall: a partner event that ends at the store as the sale opens, with at least 1,000 walk-ins. Open for how it works and the budget.
Walk-ins are not the problem in Ahmedabad. For the stores that need footfall, we partner with an event partner on the morning the sale opens, and the partner commits to at least 1,000 walk-ins into the store.
How it works
Partner runs a cycling, running, yoga or school-kids eventThe route or finish is at the storeAt least 1,000 walk-ins in the morningThe sale is on when they arrive
Only where the store team is okay with it. The partner is paid against walk-ins delivered.
Budget, if the stores agree
| Store | Partner budget | Walk-ins asked
| Baroda | ₹30,000 | 1,000+
| Indore | ₹30,000 | 1,000+
| Wakad | ₹30,000 | 1,000+
| Amanora | ₹30,000 | 1,000+
| Wagholi | ₹30,000 | 1,000+
| SGS Mall | ₹30,000 | 1,000+
| NIBM | ₹20,000 | 1,000+
| 7 stores | ₹2 L | 7,000+
```

#### november › `winter`: 3 of 4Winter, Trek & TravelAll of Nov and DecPune ₹20.70 L, 36% of Pune's Nov + Dec
- img: assets/img/hpgm/pune-wagholi.jpg [alt: Pune hoarding at Wagholi still showing the festive cycle creative, 10 October]; assets/img/hoard/baroda-subhanpura-live.jpg [alt: Baroda hoarding: Subhanpura, 10 Nov: Kiprun Kipride, “Visit Decathlon Vadodara, just 10 mins away”]; assets/img/hoard/baroda-fatehgunj-live.jpg [alt: Baroda hoarding: Fatehgunj, 10 Nov: the Kiprun board in a row of eight]; assets/img/hoard/baroda-akota-live.jpg [alt: Baroda hoarding: Akota, over the DMart car park: “just 15 mins away”]

```text
November and December
Winter, Trek & Travel
From the first cold mornings to the New Year trip, people go out: Sahyadri night treks, family holidays, the coldest mornings of the year in Gwalior and Bhopal. Winter & Travel runs under both sales, all two months, and the hoardings carry it.
On the road
Pune: 7 hoardings on Winter & Travel, ₹9.35 L a month, November and December. The creative changes with the season, never with the sale.
Influencers
Pune, December: 10 paid creators (₹1 L) and 7 on barter (₹50,000). The best reels are recycled as boosts (₹10,000).
Content
Media vendor reels in December (₹1 L): pack with me for a Sahyadri night trek; one jacket, three layers; the New Year trip in one backpack.
In the store
The MH500 backpack leads in November (Q4 runway). A winter wall at the entrance: padded jackets from ₹1,999, gloves and caps, the way Surat set it up for Diwali.
Out of the store
SRT Ultra, the 53 km Sahyadri trail, on Saturday 12 December: be at the start with a hydration and headlamp stand. Trek groups as AOPs: every group that starts at our store is a practice place.
What it brings
No goal of its own. Its sport, mountain (hiking, trekking, camping), sold ₹10.59 Cr in October 2026, 25.6% of West turnover, and 30.5% in 1 to 8 November.
Pune's Winter, Trek & Travel, line by line
Hoardings liveNov 2026, 7 hoardings
₹9,35,000
Hoardings liveDec 2026, 7 hoardings
Instagram influencersDec 2026, 10 influencersplus 7 on barter (₹50,000) and the best reels recycled as boosts (₹10,000): not in the month total
₹1,00,000
Media vendorDec 2026
Pune total₹20,70,00036% of Pune's Nov + Dec (₹58.15 L)
What it bringsNo goal of its own. Its sport, mountain (hiking, trekking, camping), sold ₹10.59 Cr in October 2026, 25.6% of West turnover, and 30.5% in 1 to 8 November.
Hoardings: where we stand
Not updated yet
Pune: 7 boards
₹9.35 L a month
Wagholi, 10 Oct: still the festive “Your Festive Upgrade” cycle creative. The latest photo we have.
Hyundai Service Centre, facing Pune, towards Wagholi40 x 30 ft₹1.30 L
Kesnand Phata, facing Nagar, towards Pune30 x 20 ft₹1.10 L
EuroKids, Wakad45 x 30 ft₹1.40 L
Bhumkar Bridge, Wakad40 x 30 ft₹1.25 L
Baner45 x 30 ft₹1.40 L
Sanvidhan Chowk, NIBM30 x 30 ft₹1.50 L
Amanora Road40 x 20 ft₹1.40 L
Up
Baroda: 4 boards
₹1.65 L a month
Subhanpura, 10 Nov: Kiprun Kipride, “Visit Decathlon Vadodara, just 10 mins away”
Fatehgunj, 10 Nov: the Kiprun board in a row of eight
Akota, over the DMart car park: “just 15 mins away”
Akota, DMart parking terrace20 x 20 ft₹40K
Fatehgunj, Bull Circle20 x 20 ft₹35K
Gotri Bridge, towards Natubhai Circle20 x 20 ft₹50K
Subhanpura, facing Ellorapark, towards Gorwa25 x 15 ft₹40K
What Pune can take from Baroda
Up on day one, with proof. Baroda's boards were photographed live on 10 Nov, GPS-stamped. Pune pays ₹9.35 L a month whether the new creative is up or not: ask the vendor for the same dated photos.
One product, one line, on every board. Kiprun Kipride on all of them, and the line that does the work: “Visit Decathlon Vadodara, just 10 mins away”. Pune's Winter & Travel boards should name the nearest store and the minutes to it.
Smaller boards where people already shop. ₹41K a board in Baroda (20 x 20 ft, over a DMart car park, on a university circle) against ₹1.34 L in Pune (30 x 20 to 45 x 30 ft on the main roads). Worth testing one smaller board near a Pune DMart or society gate.
Stand out in a crowd. At Fatehgunj ours is one of eight boards: a single shoe on a dark background is the one you notice.
```

#### november › `december`: 4 of 4Christmas: gifting and the saleGifting 1 to 25 Dec; sale 19 to 31 DecPune ₹10.95 L, 
- img: assets/img/dec/christmas-sale.jpg [alt: Decathlon Christmas Sale, 19th to 31st December]; assets/img/gifts-1999.jpg [alt: Gifts under 1,999]; assets/img/gift-a-sport.jpg [alt: Gift a Sport]
- vid:  [poster assets/posters/winter-gear.jpg]

```text
December 2026
Christmas: the gifting videos and the Christmas Sale
The Diwali Gift a Sport videos don't stop: they become Christmas gifting videos through December, and the Christmas Sale runs from Saturday 19 to Thursday 31 December. December's content is Christmas, Winter and Trek & Travel together.
Christmas Sale creative: 19 to 31 December
Christmas gifting videos
Same format as Diwali: a parent says the total out loud; the value is shown, never claimed.
New hook: Secret Santa under ₹999, stocking fillers, a winter-trip kit for the holidays.
From 1 to 25 December on all city pages, then the sale takes over.
19 to 31 DecChristmas Sale; whole-city in-store comms live from 19 Dec
35Pune influencers for the sale, 19 to 23 Dec (₹3.5 L), plus a 4 post + 4 story countdown
10 postsBoosted around Christmas and Winter & Travel (₹30,000)
₹17.49 CrChristmas sale turnover goal (West), +2% on 2025
December content: Christmas, Winter, Trek & Travel
1 to 25 December
Christmas gifting
The gifting videos: a parent adds up the gifts out loud, the total is on screen
Secret Santa under ₹999 and stocking fillers for kids
Gift cards for the person who has everything
All month
Winter
One jacket, three layers: base layer, fleece, padded jacket
The winter-gear film on every city page
MP first: Gwalior and Bhopal get the coldest mornings in the cluster
From 14 December, the holidays
Trek & Travel
Pack with me: a Sahyadri night trek, the New Year trip, the Rann of Kutch
SRT Ultra trail (12 Dec) and the Pune races as live content
The best creator reels recycled as boosts
19 to 31 December
The sale takes over
Countdown: 4 posts and 4 stories, then boosts on 10 posts
35 Pune creators post between 19 and 23 Dec
Same three themes, now with the sale price
Pune's Christmas, line by line
In-mall commsDec 2026NIBM 45,000, Amanora 45,000, SGS 75,000
₹1,65,000
In-store comms, visible to customersDec 2026, whole city live from 19 Dec
₹5,50,000
Instagram influencersDec 2026, 35 influencers, 19 to 23 Dec
₹3,50,000
Social media boostDec 2026, 10 posts around Christmas and Winter & Travelthe Christmas table lists a ₹35,000 boost, 19 to 23 Dec
₹30,000
Pune total₹10,95,00019% of Pune's Nov + Dec (₹58.15 L)
What it bringsTurnover goal ₹17.49 Cr, +2% on 2025: 11.3% of the Q4 store challenge.
```

#### november › `runway`: Pune runway, November and December, week by week

```text
Only Pune: Black Friday and the Christmas Sale, Winter & Travel, the influencers, in-store and mall, hoardings, AOPs, the city's own events and our content. Pick a week to see everything in it.
Pune only. Weeks start on Monday. ★ = goes live
November 2026Pune total ₹28.00 L
December 2026Pune total ₹30.15 L
W452 Nov
W469 NovWe are here
W4716 Nov
W4823 Nov
W4930 Nov
W507 Dec
W5114 Dec
W5221 Dec
W5328 Dec
Season and moments
Winter and travel seasonDiwali 8 NovChildren's Day 14 NovChristmas 25 DecNew Year's Eve 31 Dec
Sales
★ Black Friday, 27 to 30 Nov★ Christmas Sale, 19 to 31 Dec
Campaigns and gifting
Diwali: Gift a SportWinter & TravelMH500 backpackChristmas gifting videos: Gift a Sport continues
Influencers
Black Friday: 40 influencers, ₹4 LWinter & Travel: 10 influencers (₹1 L) + 7 on barterChristmas: 35 influencers, ₹3.5 L
In-store, mall and coupons
In-mall: NIBM, Amanora, SGS (₹1.70 L Nov, ₹1.65 L Dec)Coupon cards: basket over ₹2,799 gets a product free (35,000 cards)★ Black Friday comms live, whole city★ Christmas comms live, whole city
Hoardings
7 hoardings live: Winter & Travel (₹9.35 L a month)
AOPs
22 AOPs: Wakad 5, Wagholi 5, SGS 4, NIBM 4, Amanora 4 (₹6.25 L)27 AOPs: Wakad 6, Wagholi 6, SGS 5, NIBM 5, Amanora 5 (₹7.65 L)
City events and our events
Children's Day: colouring booksKiprun event (₹20,000)Pune International Marathon, Sun 6 DecSRT Ultra trail (53 km), Sat 12 DecBajaj Pune Marathon, Sun 13 Dec (to confirm)Kiprun event (₹20,000)Pimpri Chinchwad Half Marathon, Sun 20 Dec
Social and content
Boost: 5 posts (₹30,000)Black Friday countdown: 4 posts + 4 storiesMedia vendor (₹1 L)Christmas countdown: 4 posts + 4 stories; boost 10 posts (₹30,000)
Week 46: 9 Nov to 15 Nov
‹
›
Winter and travel season2 Nov to 3 Jan;
Children's Day 14 Nov14 Nov;
Diwali: Gift a Sport2 Nov to 15 Nov; Q4 runway
Winter & Travel2 Nov to 3 Jan; Q4 runway
MH500 backpack2 Nov to 30 Nov; Q4 runway
In-mall: NIBM, Amanora, SGS (₹1.70 L Nov, ₹1.65 L Dec)2 Nov to 31 Dec; Pune spend plan
7 hoardings live: Winter & Travel (₹9.35 L a month)2 Nov to 31 Dec; Pune spend plan
22 AOPs: Wakad 5, Wagholi 5, SGS 4, NIBM 4, Amanora 4 (₹6.25 L)2 Nov to 30 Nov; Pune spend plan
Children's Day: colouring books14 Nov; Q4 runway
Sources: the Pune spend plan (BFS PUNE sheet), the Q4 runway on the main site, and public race listings for the city events (Pune International Marathon 6 Dec; SRT Ultra 12 Dec; Bajaj Pune Marathon 13 Dec, to confirm; Pimpri Chinchwad Half Marathon 20 Dec).
```

After clicking **W45 2 Nov**:
```text
Week 45: 2 Nov to 8 Nov
Diwali 8 Nov8 Nov;
```

After clicking **W47 16 Nov**:
```text
Week 47: 16 Nov to 22 Nov
Black Friday: 40 influencers, ₹4 L21 Nov to 28 Nov; Pune spend plan
Coupon cards: basket over ₹2,799 gets a product free (35,000 cards)17 Nov to 30 Nov; Pune spend plan
Kiprun event (₹20,000)16 Nov to 22 Nov; Pune spend plan
Boost: 5 posts (₹30,000)16 Nov to 30 Nov; Pune spend plan
```

After clicking **W48 23 Nov**:
```text
Week 48: 23 Nov to 29 Nov
★ Black Friday, 27 to 30 Nov27 Nov to 30 Nov; Pune spend plan
★ Black Friday comms live, whole city23 Nov to 30 Nov; Pune spend plan
Black Friday countdown: 4 posts + 4 stories23 Nov to 28 Nov; Pune spend plan
```

After clicking **W49 30 Nov**:
```text
Week 49: 30 Nov to 6 Dec
Christmas gifting videos: Gift a Sport continues1 Dec to 25 Dec; brief
Winter & Travel: 10 influencers (₹1 L) + 7 on barter1 Dec to 31 Dec; Pune spend plan
27 AOPs: Wakad 6, Wagholi 6, SGS 5, NIBM 5, Amanora 5 (₹7.65 L)1 Dec to 31 Dec; Pune spend plan
Pune International Marathon, Sun 6 Dec6 Dec; public race listing, to confirm
Media vendor (₹1 L)1 Dec to 31 Dec; Pune spend plan
```

After clicking **W50 7 Dec**:
```text
Week 50: 7 Dec to 13 Dec
SRT Ultra trail (53 km), Sat 12 Dec12 Dec; public race listing, to confirm
Bajaj Pune Marathon, Sun 13 Dec (to confirm)13 Dec; public race listing, to confirm
```

After clicking **W51 14 Dec**:
```text
Week 51: 14 Dec to 20 Dec
★ Christmas Sale, 19 to 31 Dec19 Dec to 31 Dec; Pune spend plan
Christmas: 35 influencers, ₹3.5 L19 Dec to 23 Dec; Pune spend plan
★ Christmas comms live, whole city19 Dec to 31 Dec; Pune spend plan
Kiprun event (₹20,000)14 Dec to 20 Dec; Pune spend plan
Pimpri Chinchwad Half Marathon, Sun 20 Dec20 Dec; public race listing, to confirm
Christmas countdown: 4 posts + 4 stories; boost 10 posts (₹30,000)14 Dec to 23 Dec; Pune spend plan
```

After clicking **W52 21 Dec**:
```text
Week 52: 21 Dec to 27 Dec
Christmas 25 Dec25 Dec;
```

After clicking **W53 28 Dec**:
```text
Week 53: 28 Dec to 3 Jan
New Year's Eve 31 Dec31 Dec;
```

#### november › `pune`: Pune's money, line by line

```text
November ₹28.00 L and December ₹30.15 L, exactly as the Pune plan sets them out: hoardings, in-mall, in-store, AOPs and free products, influencers, boosts, coupon cards, events and the media vendor.
₹58.1 LPune, Nov 2026 to Dec 2026
Hoardings
₹18.7 L32%
AOPs and free products
₹13.9 L24%
In-store comms
₹11.0 L19%
Influencers
₹8.50 L15%
In-mall
₹3.35 L6%
Content: media vendor reels
₹1.00 L2%
Flyers and coupon cards
₹0.70 L1%
Social boost
₹0.60 L1%
Events
₹0.40 L1%
Nov 2026
₹28.0 L
Hoardings liveWinter & Travel, 7 hoardings
₹9,35,000
In-mall commsBlack FridayNIBM 45,000, Amanora 45,000, SGS 75,000 (these add to 1,65,000)
₹1,70,000
In-store comms, visible to customersBlack Friday, whole city live from 23 NovAmanora 83,000, SGS 1,44,283, Wakad 1,50,000, NIBM 50,000, Wagholi 1,50,000 (these add to 5,77,283)
₹5,50,000
AOPs, free products and ICAOPs, 22 AOPsWakad 5 x 40,000, Wagholi 5 x 25,000, SGS 4, NIBM 4, Amanora 4 x 25,000
₹6,25,000
Instagram influencersBlack Friday, 40 influencers, 21 to 28 Nov
₹4,00,000
Social media boostBlack Friday, 5 postsplus a countdown of 4 posts + 4 stories, 23 to 28 Nov (₹40,000 in the Black Friday table, not in the total)
₹30,000
Coupon cards after billing: basket over ₹2,799 gets a product freeBlack Friday, 35,000 cards, handed out from 17 Nov
₹70,000
Kiprun eventKiprun
₹20,000
Dec 2026
₹30.1 L
In-mall commsChristmas saleNIBM 45,000, Amanora 45,000, SGS 75,000
₹1,65,000
In-store comms, visible to customersChristmas sale, whole city live from 19 Dec
AOPs, free products and ICAOPs, 27 AOPsWakad 6 x 40,000, Wagholi 6, SGS 5, NIBM 5, Amanora 5 x 25,000
₹7,65,000
Instagram influencersChristmas sale, 35 influencers, 19 to 23 Dec
₹3,50,000
Instagram influencersWinter & Travel, 10 influencersplus 7 on barter (₹50,000) and the best reels recycled as boosts (₹10,000): not in the month total
₹1,00,000
Social media boostChristmas sale, 10 posts around Christmas and Winter & Travelthe Christmas table lists a ₹35,000 boost, 19 to 23 Dec
Media vendorWinter & Travel
Influencers, November and December
85influencers planned (Pune)
₹8.50 Linfluencer budget
NovDec
Black Friday40 influencers, ₹4.00 L
Winter & Travel10 influencers +7 on barter, ₹1.00 L
Christmas sale35 influencers, ₹3.50 L
AOP money, store by store
| Store | Nov | Dec | Total
| Wakad | ₹2,00,0005 AOPs | ₹2,40,0006 AOPs | ₹4,40,000
| Wagholi | ₹1,25,0005 AOPs | ₹1,50,0006 AOPs | ₹2,75,000
| SGS Mall | ₹1,00,0004 AOPs | ₹1,25,0005 AOPs | ₹2,25,000
| NIBM | ₹1,00,0004 AOPs | ₹1,25,0005 AOPs | ₹2,25,000
| Amanora | ₹1,00,0004 AOPs | ₹1,25,0005 AOPs | ₹2,25,000
| Pune | ₹6,25,00022 AOPs | ₹7,65,00027 AOPs | ₹13,90,000
```

#### november › `aops`: AOPs, November and December, every store

```text
The practice places each store adds in November and December, from the AOP plan, and what they cost.
| Store | Live now | November | December | Nov + Dec | Cost per AOP | Nov + Dec cost
| Pune
| Wakad | 58 | 5 | 6 | 11 | ₹25,000 | ₹2,75,000
| Wagholi | 15 | 5 | 6 | 11 | ₹25,000 | ₹2,75,000
| SGS Mall | 6 | 4 | 5 | 9 | ₹25,000 | ₹2,25,000
| NIBM | - | 4 | 5 | 9 | ₹24,000 | ₹2,16,000
| Amanora | 22 | 4 | 5 | 9 | ₹25,000 | ₹2,25,000
| Pune | 101 | 22 | 27 | 49 | | ₹12,16,000
| Gujarat
| Motera | - | 4 | 5 | 9 | ₹24,000 | ₹2,16,000
| Nexus | - | 4 | 5 | 9 | ₹24,000 | ₹2,16,000
| Dumas | - | 4 | 5 | 9 | ₹23,000 | ₹2,07,000
| Baroda | 6 | 4 | 4 | 8 | ₹24,000 | ₹1,92,000
| Rajkot | - | 3 | 2 | 5 | ₹7,000 | ₹35,000
| Gujarat | 6 | 19 | 21 | 40 | | ₹8,66,000
| MP
| Indore | - | 5 | 5 | 10 | ₹20,000 | ₹2,00,000
| Bhopal | 7 | 4 | 5 | 9 | ₹20,000 | ₹1,80,000
| Gwalior | - | 3 | 3 | 6 | ₹7,000 | ₹42,000
| MP | 7 | 12 | 13 | 25 | | ₹4,22,000
Pune's counts match the Pune spend plan (22 in November, 27 in December). Live now: from the same AOP plan.
```

#### november › `marketing`: How we do marketing, from the ground up

```text
The basics carry everything: a store with a community, AOPs, one flagship event a month, the right team, in-store campaigns and the festive moments. Only then reach, and only then one idea that makes noise.
1 KILLMake noiseOne KILL strategy a quarter
Be seenHoardings + Social media + Influencers
The basicsIn-store community + AOPs + One flagship event a month + The right team + In-store comms campaigns + Festive moments
Store: the heart of sport
3Make noise: one kill strategy a quarter
Disruptive marketing: one idea the whole city talks about, built on everything below it. Not ten ideas: one.
Nov-Dec: Black Friday morning, doors open after a city run
Q1: Movement for All, the city moves for 31 days
Summer: The City Needs a Swim, a pool takeover
2Be seen: hoardings, social media, influencers
Only once the base is ready: people who see us must find a store, a place to play and a reason to come.
1The basics: every month, every store
Earn the right to be seen: the store is the heart of sport.
In-store community
AOPs
One flagship event a month
The right team
In-store comms campaigns
Festive moments
The engine under the base
In-storeIP events: Sports Utsav, Yoga, Store campaigns, Playground occupancy, Coaching: expert sessions
→
CommunityActive local sports groups, Primary sports: running and cycling
PartnershipsLocal event tie-ups, Tournament organisers, Areas of practice (AOPs), Other catchment collaborations
In-store brings people to community, community feeds partnerships, partnerships bring people back to the store.
```

#### november › `budget`: November budget and Q4 goals

```text
What each business unit has for November, what is already committed, what is left to plan, and the turnover each campaign has to deliver.
₹47.84 Ltotal budget, November
₹20 LGujarat
₹9.86 LMadhya Pradesh
₹17.98 LPune
₹9.07 Lleft to plan, after ₹38.77 L committed
West, November
₹9.07 Lleft to plan of ₹47.84 L
Hoardings₹18.85 L39%
Influencers₹13.42 L28%
In-store comms₹6.50 L14%
Left to plan₹9.07 L19%
By business unit
Gujarat₹20 L
₹7.95 L₹7.40 L₹2.50 L₹2.15 L
Left to plan ₹2.15 L
Madhya Pradesh₹9.86 L
₹1.55 L₹2.02 L₹1.50 L₹4.79 L
Left to plan ₹4.79 L
Pune₹17.98 L
₹9.35 L₹4 L₹2.50 L₹2.13 L
Left to plan ₹2.13 L
HoardingsInfluencersIn-store commsLeft to plan
Hoardings: booked sites, a month (Pune 7, Ahmedabad 2, Baroda 4, Rajkot 2, Bhopal 2); the planned Surat board is not booked. Influencers: Black Friday (Gujarat ₹7.4 L, Pune ₹4 L, MP ₹2.02 L). In-store comms: ₹50,000 a store. If the walk-in events go ahead, left to plan falls by ₹1.40 L in Pune, ₹30K in Gujarat and ₹30K in MP.
| November | Budget | Hoardings | Influencers | In-store comms | Left to plan
| Gujarat | ₹20 L | ₹7.95 L | ₹7.40 L | ₹2.50 L | ₹2.15 L
| Madhya Pradesh | ₹9.86 L | ₹1.55 L | ₹2.02 L | ₹1.50 L | ₹4.79 L
| Pune | ₹17.98 L | ₹9.35 L | ₹4 L | ₹2.50 L | ₹2.13 L
| West | ₹47.84 L | ₹18.85 L | ₹13.42 L | ₹6.50 L | ₹9.07 L
Q4 turnover goals, campaign by campaign
₹12.34 CrBlack Friday goal, +16% on 2025
₹17.49 CrChristmas sale goal, +2% on 2025
₹1.37 CrKiprun shoes, extra turnover
₹154.75 CrQ4 store challenge
Black Friday and Christmas sale: 2025 against the 2026 goal
Pune
Black Friday
2025 ₹5.31 Cr
2026 goal ₹5.89 Cr +11%
Christmas sale
2025 ₹8.24 Cr
2026 goal ₹7.91 Cr -4%
Gujarat
2025 ₹3.89 Cr
2026 goal ₹4.86 Cr +25%
2025 ₹5.95 Cr
2026 goal ₹6.75 Cr +13%
Madhya Pradesh
2025 ₹1.43 Cr
2026 goal ₹1.59 Cr +11%
2025 ₹2.89 Cr
2026 goal ₹2.83 Cr -2%
| Store | Q4 challenge | Piloting | Black Friday 27-30 Nov | Christmas 18-25 Dec | Kiprun shoes | Kids Utsav
| Wakad | ₹30.40 Cr | ₹29.16 Cr | ₹2.48 Cr +3% | ₹2.98 Cr -17% | ₹50 L | -
| Wagholi | ₹14.40 Cr | ₹12.50 Cr | ₹1.05 Cr +15% | ₹1.57 Cr +13% | ₹7 L | -
| SGS Mall | ₹14.32 Cr | ₹13.42 Cr | ₹1.02 Cr +10% | ₹1.53 Cr +2% | ₹6 L | -
| Amanora | ₹10.61 Cr | ₹10.20 Cr | ₹0.96 Cr +32% | ₹1.23 Cr +4% | ₹4 L | -
| NIBM | ₹5.80 Cr | ₹4.95 Cr | ₹0.38 Cr +12% | ₹0.60 Cr +5% | ₹1 L | -
| Pune | ₹75.53 Cr | | ₹5.89 Cr +11% | ₹7.91 Cr -4% | ₹68 L | -
| Motera | ₹14.50 Cr | ₹15.00 Cr | ₹1.50 Cr +18% | ₹2.00 Cr +19% | ₹22 L | -
| Nexus | ₹13.19 Cr | ₹13.27 Cr | ₹1.26 Cr +25% | ₹1.80 Cr +20% | ₹16.30 L | -
| Surat | ₹10.66 Cr | - | ₹1.02 Cr +40% | ₹1.31 Cr +3% | ₹13.20 L | ₹1.20 L
| Baroda | ₹10.45 Cr | ₹11.00 Cr | ₹0.90 Cr +27% | ₹1.27 Cr +11% | ₹12 L | ₹4 L
| Rajkot | ₹2.69 Cr | ₹2.69 Cr | ₹0.18 Cr +6% | ₹0.37 Cr +3% | ₹50K | ₹50K
| Gujarat | ₹51.49 Cr | | ₹4.86 Cr +25% | ₹6.75 Cr +13% | ₹64 L | ₹5.70 L
| Indore | ₹11.92 Cr | - | ₹0.71 Cr +8% | ₹1.25 Cr -5% | ₹4 L | ₹1 L
| Bhopal | ₹12.21 Cr | - | ₹0.69 Cr +19% | ₹1.23 Cr +12% | ₹1 L | ₹1.50 L
| Gwalior | ₹3.60 Cr | ₹3.48 Cr | ₹0.19 Cr +0% | ₹0.35 Cr -26% | ₹30K | ₹40K
| Madhya Pradesh | ₹27.73 Cr | | ₹1.59 Cr +11% | ₹2.83 Cr -2% | ₹5.30 L | ₹2.90 L
Percentages compare with the same sale in 2025 (Black Friday 28-30 Nov, Christmas 17-25 Dec). Surat, Indore and Bhopal have no piloting figure in the sheet yet. The sheet also carries a Diwali sale (30 Oct - 1 Nov) column; there is no Diwali sale this year, so it is left out.
```

#### november › `summary`: November and December, in one view

```text
The four campaigns side by side: when, what, the money (Pune's plan line by line, plus what we know for Gujarat and MP) and what each brings in.
₹58.15 LPune, November (₹28.00 L) and December (₹30.15 L)
₹29.83 Crsale goals, West: Black Friday ₹12.34 Cr + Christmas ₹17.49 Cr
85Pune influencers in the plan (+7 on barter)
49Pune AOPs, 22 in Nov and 27 in Dec
Black Friday₹12.20 L, 21%Winter, Trek & Travel₹20.70 L, 36%Christmas₹10.95 L, 19%Always on₹14.30 L, 25%
| Campaign | When | What we do | Pune budget | Share | Influencers | Gujarat and MP | What it brings
| Diwali: Gift a Sport | 6 to 11 Nov | Gift a Sport, no sale. In-store comms in Bhopal, Motera and Surat; Diwali reels on all 8 city pages; content recycled across the cluster. | - | - | Pune: none in the plan. Gujarat 13 (₹1.3 L), Indore 4 on barter, Bhopal 4, Gwalior 2 (gift cards) | Gujarat influencers ₹1.3 L | No sale and no turnover goal: a brand moment. About 1.9 lakh views on the 10 creator reels by 5 Nov.
| Black Friday | 27 to 30 Nov | A four-day sale. Coupon cards from 17 Nov, in-store and in-mall live on 23 Nov, a countdown on social, creators from 21 Nov. | ₹12,20,000 | 21% | Pune 40 (₹4 L); Gujarat 67+ (₹7.4 L); MP 40 (₹2.02 L) | Gujarat ₹7.4 L and MP ₹2.02 L of influencers | Turnover goal ₹12.34 Cr, +16% on 2025: 8.0% of the ₹154.75 Cr Q4 store challenge in 4 days.
| Winter, Trek & Travel | All of Nov and Dec | The season under both sales: 7 Pune hoardings for two months, trek and travel reels, creators in December, the MH500 backpack and a winter wall in store. | ₹20,70,000 | 36% | Pune 10 (₹1 L) + 7 on barter (₹50,000, outside the total) | Not planned separately for Gujarat and MP | No goal of its own. Its sport, mountain (hiking, trekking, camping), sold ₹10.59 Cr in October 2026, 25.6% of West turnover, and 30.5% in 1 to 8 November.
| Christmas: gifting and the sale | Gifting 1 to 25 Dec; sale 19 to 31 Dec | The Diwali gifting videos continue as Christmas gifting; the Christmas Sale from 19 Dec with in-store live, a countdown and boosts. | ₹10,95,000 | 19% | Pune 35 (₹3.5 L), 19 to 23 Dec | Gujarat and MP Christmas budgets not in our files yet | Turnover goal ₹17.49 Cr, +2% on 2025: 11.3% of the Q4 store challenge.
| Always on: AOPs and Kiprun events | Nov and Dec | 22 AOPs in November and 27 in December across the 5 stores; a Kiprun event each month (₹20,000). | ₹14,30,000 | 25% | - | - | Practice places and running events that bring players back to the store.
| Pune, Nov + Dec | | | ₹58,15,000 | 100% | 85 + 7 on barter | | ₹29.83 Cr of sale goals (West)
Pune money: the Pune spend plan (BFS PUNE), every line counted once under its campaign; the lines add exactly to ₹58,15,000. Lines the sheet lists outside the month totals (Black Friday countdown ₹40,000, Winter barter ₹50,000, recycle boosts ₹10,000) are not counted. Goals: the SD piloting sheet (Black Friday 27 to 30 Nov, Christmas 18 to 25 Dec). Gujarat and MP: the influencer budgets shared on 5 to 9 Nov.
```

#### november › `footer`: Instagram follower and post counts, and reel views, read from each page's public profile o

```text

```

### B.3 plan2027.html, 2027 sport by sport (Q1 + Q2)
- Browser title: "2027 Plan Q1 Q2 · West Plan". Meta description: "Decathlon West, 2027 Q1 and Q2 plan: the calendar, seven focus sports with turnover, growth, budget and AOPs, and the strategy month by month.".
- Sections in order: `topbar`, `top`, `season`, `calendar`, `moments`, `playbook`, `influencers`, `aops`, `utsav`, `sports`, `films`, `strategies`, `footer`.
- Outside the sections (`y27Qbar`): Region / Pune / West / MP / Gujarat / Show / Q1: Jan to Mar / Q2: Apr to Jun / Q1 and Q2 / Running / Fitness / Cycling / Mountain / Swimming / Cricket / Pickleball
- Outside the sections (`expBar`): Download this page / Download PDF / Download GIF / The complete page, as you see it.

#### plan2027 › `topbar`: DECATHLON West

```text
West planPlan
Nov & Dec 2026Nov-Dec
2027 plan2027
Water 2027Water
Season
Calendar
Q1 moments
Playbook
Influencers
AOPs
Flagship
Sports
Films
```

#### plan2027 › `top`: 2027 plan, January to June
- img: assets/img/gym.jpg; assets/img/winter-off.jpg; assets/img/u-kiprun.jpg; assets/img/wd-pink-run.jpg; assets/img/swim-kit-aop.jpg; assets/img/u-trek-couple.jpg

```text
2027, sport by sport
New Year fitness, the clearance sale, new arrivals, Women's Day, then summer: water, running and travel. The season in each state, the calendar, the Q1 marketing playbook with every rupee, the practice places store by store, and what each of our seven sports sells. Pick a quarter: the whole page follows.
₹1.68 CrWest ad budget, Q1 2027 (all of 2027: ₹7.46 Cr)
₹1.47 Crof it led by our 7 sports (87%)
152AOPs (practice places) planned
₹98.98 Crturnover goal for the 7 sports, in-store + online, +15% on 2026
```

After clicking **STATE Pune + Q1: Jan to Mar**:
```text
₹80.4 LPune ad budget, Q1 2027 (all of 2027: ₹3.65 Cr)
₹70.6 Lof it led by our 6 sports (88%)
68AOPs (practice places) planned
₹45.86 Crturnover goal for the 6 sports, in-store + online, +15% on 2026
```

After clicking **STATE Pune + Q2: Apr to Jun**:
```text
₹1.04 CrPune ad budget, Q2 2027 (all of 2027: ₹3.65 Cr)
₹59.0 Lof it led by our 6 sports (57%)
50AOPs (practice places) planned
₹59.99 Crturnover goal for the 6 sports, in-store + online, +15% on 2026
```

After clicking **STATE Pune + Q1 and Q2**:
```text
₹1.84 CrPune ad budget, Q1 and Q2 2027 (all of 2027: ₹3.65 Cr)
₹1.30 Crof it led by our 6 sports (70%)
118AOPs (practice places) planned
₹105.85 Crturnover goal for the 6 sports, in-store + online, +15% on 2026
```

After clicking **STATE West + Q2: Apr to Jun**:
```text
₹2.11 CrWest ad budget, Q2 2027 (all of 2027: ₹7.46 Cr)
₹1.25 Crof it led by our 7 sports (59%)
119AOPs (practice places) planned
₹132.70 Crturnover goal for the 7 sports, in-store + online, +15% on 2026
```

After clicking **STATE West + Q1 and Q2**:
```text
₹3.80 CrWest ad budget, Q1 and Q2 2027 (all of 2027: ₹7.46 Cr)
₹2.72 Crof it led by our 7 sports (72%)
271AOPs (practice places) planned
₹231.68 Crturnover goal for the 7 sports, in-store + online, +15% on 2026
```

After clicking **STATE MP + Q1: Jan to Mar**:
```text
₹28.5 LMP ad budget, Q1 2027 (all of 2027: ₹1.20 Cr)
₹24.5 Lof it led by our 5 sports (86%)
29AOPs (practice places) planned
₹14.47 Crturnover goal for the 5 sports, in-store + online, +15% on 2026
```

After clicking **STATE MP + Q2: Apr to Jun**:
```text
₹30.5 LMP ad budget, Q2 2027 (all of 2027: ₹1.20 Cr)
₹17.7 Lof it led by our 5 sports (58%)
23AOPs (practice places) planned
₹18.11 Crturnover goal for the 5 sports, in-store + online, +15% on 2026
```

After clicking **STATE MP + Q1 and Q2**:
```text
₹59.0 LMP ad budget, Q1 and Q2 2027 (all of 2027: ₹1.20 Cr)
₹42.2 Lof it led by our 5 sports (72%)
52AOPs (practice places) planned
₹32.58 Crturnover goal for the 5 sports, in-store + online, +15% on 2026
```

After clicking **STATE Gujarat + Q1: Jan to Mar**:
```text
₹59.5 LGujarat ad budget, Q1 2027 (all of 2027: ₹2.61 Cr)
₹52.0 Lof it led by our 7 sports (87%)
55AOPs (practice places) planned
₹35.78 Crturnover goal for the 7 sports, in-store + online, +15% on 2026
```

After clicking **STATE Gujarat + Q2: Apr to Jun**:
```text
₹77.3 LGujarat ad budget, Q2 2027 (all of 2027: ₹2.61 Cr)
₹47.9 Lof it led by our 7 sports (62%)
46AOPs (practice places) planned
₹50.75 Crturnover goal for the 7 sports, in-store + online, +15% on 2026
```

After clicking **STATE Gujarat + Q1 and Q2**:
```text
₹1.37 CrGujarat ad budget, Q1 and Q2 2027 (all of 2027: ₹2.61 Cr)
₹99.9 Lof it led by our 7 sports (73%)
101AOPs (practice places) planned
₹86.53 Crturnover goal for the 7 sports, in-store + online, +15% on 2026
```

#### plan2027 › `season`: Q1 2027 in each state: the weather, the kids, the mood
- vid: assets/videos/pune-state.mp4 [poster assets/posters/pune-state.jpg]; assets/videos/gujarat-state-1.mp4 [poster assets/posters/gujarat-state-1.jpg]; assets/videos/mp-state.mp4 [poster assets/posters/mp-state.jpg]

```text
Same month, three different seasons. How hot it gets, what the kids are doing (school, exams, holidays) and what that means for what we push, state by state.
Pune
January11° to 30°C
Dry, cool mornings, warm afternoons
KidsSchool term; annual sports days; winter picnics and treks
For usBest month to start fitness and running outdoors; early-morning run clubs
February12° to 32°C
Dry and pleasant
KidsClass 12 boards (HSC) from mid-Feb, CBSE boards from mid-Feb; families stay home
For usParents shop for themselves, not trips; new arrivals and fitness at home
March16° to 35°C
Hot afternoons start
KidsClass 10 boards (SSC) and school finals; Holi
For usTalk to parents after exams: summer plans, swimming sign-ups
Gujarat
Ahmedabad
January12° to 28°C
Cool mornings, steady kite winds
KidsUttarayan kite holidays 14 and 15 Jan; school term
For usUttarayan week on our Gujarat pages; fitness and running in the cool mornings
February14° to 31°C
Pleasant, warming
KidsBoard exam preparation; CBSE boards from mid-Feb
For usBeach Day in Surat; new arrivals
March19° to 36°C
Hot
KidsGujarat board exams (March) and finals; Holi
For usWomen's Day; IPL starts 14 Mar: cricket in Ahmedabad (Motera)
MP
Bhopal and Indore
January10° to 25°C
Coldest month, foggy mornings
KidsSchool term; late, cold mornings
For usWinter wear and indoor fitness; Indore Marathon training
February12° to 28°C
Cool and pleasant
KidsMP board exams start (Feb); CBSE from mid-Feb
For usIndore Marathon (first Sunday, to confirm); new arrivals
March16° to 33°C
Warming
KidsBoard exams continue; Holi
For usWomen's Day; Holi; running into summer
Temperatures are typical daytime highs and night lows (long-term averages, rounded) for Pune, Ahmedabad and Bhopal/Indore. School and exam months are typical for CBSE and the state boards; exact dates change every year.
```

After clicking **STATE Pune + Q2: Apr to Jun**:
```text
Q2 2027 in each state: the weather, the kids, the mood
April20° to 37°C
Hot and dry
KidsResults; schools close in late April; summer camps start
For usSwimming, summer camps, travel bags
May22° to 36°C
Hottest; pre-monsoon showers late in the month
KidsSummer holidays: swim classes, camps, hill-station trips, late mornings and screens
For usPeak water month; get kids off screens: camps and learn-to-swim
June23° to 31°C
Monsoon arrives around 10 June
KidsSchools reopen mid-June; back to school
For usBack-to-school kits, rainwear, indoor sports
```

After clicking **STATE Pune + Q1 and Q2**:
```text
January to June in each state: the weather, the kids, the mood
```

After clicking **STATE West + Q2: Apr to Jun**:
```text
April23° to 40°C
Very hot
KidsExams over; vacations start late April to early May
For usSwimming and indoor sports; early-morning and evening activities only
May26° to 42°C
Peak heat, many days above 42°C
KidsSummer vacation to early June: swimming, cricket camps, family trips
For usPools are the place to be: learn-to-swim, cricket camps at dawn
June27° to 38°C
Humid; monsoon from late June
KidsSchools reopen in early June
For usBack to school; monsoon gear
April21° to 38°C
KidsNew school session from 1 April in many schools
For usSchool kits; swimming starts
May25° to 41°C
Peak heat
KidsSummer vacation (May to mid-June)
For usLearn to swim (Indore: 1,000 People Mission), summer camps
June24° to 35°C
Monsoon from mid to late June
KidsSchools reopen mid-June
For usBack to school; rainwear
```

#### plan2027 › `calendar`: Q1 2027, month by month

```text
The same calendar as the 2027 planner, with our seven sports underneath. Pick a month to see everything in it, sport by sport.
Bar under each month: West ad budget, Q1
JanLow season
Winter₹63.2 L, 49 AOPs
FebLow season
₹46.4 L, 51 AOPs
MarRising season
Summer₹58.9 L, 52 AOPs
Holidays and moments
Lohri 13 Jan
Uttarayan 14 Jan
Republic Day 26 JanValentine's Day 14 Feb
Shivaji Jayanti 19 FebMaha Shivaratri 6 Mar
Women's Day 8 Mar
Eid al-Fitr 9-10 Mar
Holi 22 Mar
Good Friday 26 Mar
Season
WinterSummer + summer camp
Country campaigns
Republic Day, MIINew arrivals: shoes 1Valentine's DayHoli
Hero ranges
SS hero and iconic
Sport ecosystem and wellbeing
Cycling / running★ Movement for AllWomen's Day
Event IP
New Year, New Moves★ Beach Day, Surat★ Women's Day
Commercial
★ Clearance sale
Product launch
TBDKiprun Challenger, ₹9,999
Pune cultural moments
Holi, 22 Mar
Sport of the month (Pune)
FitnessCampingPickleball
Pune planevents and influencers
Event: yoga (500 walk-ins)
Event: run (400 walk-ins)
Event: gym, fitness, Zumba workout (500 walk-ins)
Influencers: clearance sale (50 influencers), dates TBD
Influencers: New Year, New Moves (17 influencers), 2 to 17 JanInfluencers: new arrivals (15 influencers), 24 Feb to 6 MarWomen's Day weekend event (800 walk-ins)
Influencers: summer + summer camp (50 influencers), March to May
Influencers: "New Year, New Moves" (as written in the March table) (17 influencers), 2 to 17 Jan
Our 7 sports
RunningPune, Gujarat, MP
Run clubs restart: New Year, New Moves
Vadodara Marathon, Sun 31 Jan: bib expo deskIndore Marathon, first Sunday of February (date to confirm)
5K and 10K training blocksWomen's Day pink run, Sat 6 - Sun 7 Mar
Kiprun Challenger ₹9,999 launches
FitnessPune, Gujarat, MP
Movement for All, all 13 stores
Pune sport of the month: fitnessHome gym and strength: new arrivals
Valentine's: train togetherWomen's Day weekend, 6-7 Mar: women-only pilates and yoga mornings
CyclingPune, Gujarat, MP
Bajaj Pune Grand Tour, 26-31 Jan (UCI 2.1, 6 stages)
Fan rides to the stagesWorkshop Mela in apartments: service and buybackWorkshop Mela: 10 apartments in Q1
Commuter bikes for summer
MountainPune, Gujarat, MP
Winter treks: Sahyadri sunrise treks, Saputara, PachmarhiCamping weekends: Pune sport of the monthHimalayan summer prep: gear lists with trek organisers
SwimmingPune, Gujarat, MP
Pool tie-ups for the summerPool partners onboarded
Learn to Swim batches announcedLearn to Swim registrations open
CricketGujarat
Box cricket night league, Surat (to 16 Jan)Society and corporate box-cricket leaguesIPL starts Sun 14 Mar: gully cricket gear check
PickleballGujarat, Pune
Pickle Premier League, Surat (to 16 Jan)Society pickleball leagues, AhmedabadPune sport of the month: pickleball
Court tie-ups
January 2027: Start the year with them
‹
›
Ad budget
₹28.7 LPune₹22.5 LGujarat₹11.9 LMP
AOPs
22Pune18Gujarat9MP
Movement for All in all 13 stores, and New Year, New Moves
Clearance sale, animated in every store
Bajaj Pune Grand Tour, 26-31 Jan; Vadodara Marathon, 31 Jan
Surat Adajan's first month: Ramat chalu rahe to 16 Jan
Pool and gym partners signed for the summer
RunningRun clubs restart: New Year, New Moves
Vadodara Marathon, Sun 31 Jan: bib expo desk
FitnessMovement for All, all 13 stores
Pune sport of the month: fitness
CyclingBajaj Pune Grand Tour, 26-31 Jan (UCI 2.1, 6 stages)
Fan rides to the stages
MountainWinter treks: Sahyadri sunrise treks, Saputara, Pachmarhi
SwimmingPool tie-ups for the summer
CricketBox cricket night league, Surat (to 16 Jan)
PickleballPickle Premier League, Surat (to 16 Jan)
What our 7 sports sell, month by month
In-store + online
In-store (offline)
Online
2026 turnover, in-store + online, all West stores. Each column is one month; the colours are each sport's share of everything we sold that month, the grey is all other sports. Months of Q1 are highlighted. 2027 follows this rhythm; 2027 targets by sport are not in our files.
MountainFitnessRunningSwimmingCyclingCricketPickleballOther sports
Jan
Feb
Mar
Apr
May
Jun
Jul
Aug
Sep
Oct
Novto 8 Nov
Dec
Turnover, all sports2026, in-store + online
₹46.43 Cr₹34.62 Cr₹43.87 Cr₹51.14 Cr₹60.86 CrMoney time₹52.17 Cr₹52.02 Cr₹44.99 Cr₹38.53 Cr₹41.34 Cr₹10.87 Cr
Ad budget2027 plan
₹63.2 L₹46.4 L₹58.9 L₹66.4 L₹76.7 L₹68.3 L₹70.1 L₹61.4 L₹42.2 L₹49.3 L₹68.7 L₹74.5 L
Share of turnover7 sports + other
69%
28%19%10%31%
68%
22%21%10%7%6%32%
18%22%9%12%6%31%
22%19%8%12%31%
72%
27%19%8%11%28%
25%20%8%7%5%31%
27%22%8%31%
22%24%9%6%32%
70%
27%21%9%5%5%30%
26%20%10%7%31%
71%
31%18%9%6%29%
No 2026 data yet
Mountain
₹13.19 Cr28.4%
₹7.62 Cr22.0%
₹7.79 Cr17.8%
₹11.24 Cr22.0%
₹16.47 Cr27.1%
₹13.04 Cr25.0%
₹13.98 Cr26.9%
₹9.99 Cr22.2%
₹10.45 Cr27.1%
₹10.59 Cr25.6%
₹3.32 Cr30.5%
-
Fitness
₹8.90 Cr19.2%
₹7.27 Cr21.0%
₹9.50 Cr21.6%
₹9.62 Cr18.8%
₹11.42 Cr18.8%
₹10.55 Cr20.2%
₹11.35 Cr21.8%
₹10.60 Cr23.6%
₹7.96 Cr20.7%
₹8.26 Cr20.0%
₹1.97 Cr18.2%
Running
₹4.74 Cr10.2%
₹3.32 Cr9.6%
₹3.85 Cr8.8%
₹4.20 Cr8.2%
₹4.67 Cr7.7%
₹4.16 Cr8.0%
₹4.29 Cr8.3%
₹3.98 Cr8.8%
₹3.54 Cr9.2%
₹3.94 Cr9.5%
₹1.01 Cr9.3%
Swimming
₹1.46 Cr3.2%
₹2.32 Cr6.7%
₹5.06 Cr11.5%
₹5.94 Cr11.6%
₹6.47 Cr10.6%
₹3.65 Cr7.0%
₹2.51 Cr4.8%
₹2.24 Cr5.0%
₹1.94 Cr5.0%
₹1.84 Cr4.5%
₹43.9 L4.0%
Cycling
₹2.32 Cr5.0%
₹1.94 Cr5.6%
₹2.52 Cr5.7%
₹2.50 Cr4.9%
₹2.62 Cr4.3%
₹2.75 Cr5.3%
₹2.38 Cr4.6%
₹2.54 Cr5.6%
₹2.04 Cr5.3%
₹2.74 Cr6.6%
₹66.7 L6.1%
Cricket
₹1.23 Cr2.6%
₹94.0 L2.7%
₹1.59 Cr3.6%
₹1.86 Cr3.6%
₹2.02 Cr3.3%
₹1.55 Cr3.0%
₹1.27 Cr2.4%
₹1.20 Cr2.7%
₹89.0 L2.3%
₹98.7 L2.4%
₹24.5 L2.3%
Pickleball
₹8.3 L0.2%
₹5.8 L0.2%
₹9.3 L0.2%
₹9.9 L0.2%
₹10.6 L0.2%
₹8.9 L0.2%
₹7.5 L0.1%
₹11.7 L0.3%
₹9.7 L0.3%
₹8.4 L0.2%
₹2.5 L0.2%
7 sports
₹31.93 Cr68.8%
₹23.47 Cr67.8%
₹30.39 Cr69.3%
₹35.46 Cr69.4%
₹43.78 Cr71.9%
₹35.80 Cr68.6%
₹35.86 Cr68.9%
₹30.66 Cr68.1%
₹26.93 Cr69.9%
₹28.44 Cr68.8%
₹7.68 Cr70.6%
All sports
₹46.43 Cr
₹34.62 Cr
₹43.87 Cr
₹51.14 Cr
₹60.86 Cr
₹52.17 Cr
₹52.02 Cr
₹44.99 Cr
₹38.53 Cr
₹41.34 Cr
₹10.87 Cr
Source: Tableau sport-wise YTD 2026 (1 Jan to 8 Nov 2026). In-store is what we sell in the store (offline); online is everything out of store: decathlon.in, marketplaces, B2B, quick commerce. Mountain is hiking, trekking and climbing and camping; fitness is outfit and equipment; cycling is sport bikes, commuting and repairs (kids' bikes and skates are in "other"); pickleball is the padel, pickleball and beach tennis line. Ad budget: 2027 plan by month (lakh), drawn as its own line, not on the turnover scale.
```

After clicking **Feb Low season ₹46.4 L, 51 AOPs**:
```text
February 2027: Clubs, camps and leagues
₹22.7 LPune₹15.7 LGujarat₹8.04 LMP
23Pune18Gujarat10MP
Beach Day, Surat (10,000 national footfall goal)
Camping weekends, Pune's sport of the month
Society leagues: box cricket and pickleball in Gujarat
Workshop Mela in apartments: bike service and buyback
New arrivals: shoes, phase 1
RunningIndore Marathon, first Sunday of February (date to confirm)
5K and 10K training blocks
FitnessHome gym and strength: new arrivals
Valentine's: train together
CyclingWorkshop Mela in apartments: service and buyback
MountainCamping weekends: Pune sport of the month
SwimmingPool partners onboarded
Learn to Swim batches announced
CricketSociety and corporate box-cricket leagues
PickleballSociety pickleball leagues, Ahmedabad
```

After clicking **Mar Rising season Summer ₹58.9 L, 52 AOPs**:
```text
March 2027: Women's Day and the IPL
₹29.0 LPune₹21.3 LGujarat₹8.55 LMP
23Pune19Gujarat10MP
Women's Day weekend, Sat 6 and Sun 7 Mar, all 13 stores
IPL from Sun 14 Mar: cricket in every Gujarat store
Learn to Swim registrations open
Holi, Mon 22 Mar; Good Friday long weekend from 26 Mar
RunningWomen's Day pink run, Sat 6 - Sun 7 Mar
FitnessWomen's Day weekend, 6-7 Mar: women-only pilates and yoga mornings
CyclingWorkshop Mela: 10 apartments in Q1
MountainHimalayan summer prep: gear lists with trek organisers
SwimmingLearn to Swim registrations open
CricketIPL starts Sun 14 Mar: gully cricket gear check
PickleballPune sport of the month: pickleball
```

After clicking **In-store (offline)**:
```text
2026 turnover, in-store (offline), all West stores. Each column is one month; the colours are each sport's share of everything we sold that month, the grey is all other sports. Months of Q1 are highlighted. 2027 follows this rhythm; 2027 targets by sport are not in our files.
Turnover, all sports2026, in-store (offline)
₹40.45 Cr₹28.91 Cr₹38.63 Cr₹45.27 Cr₹53.98 CrMoney time₹45.87 Cr₹44.44 Cr₹39.17 Cr₹32.53 Cr₹33.40 Cr₹9.45 Cr
28%20%10%31%
21%22%10%5%6%32%
18%22%9%11%6%30%
22%19%8%12%30%
26%22%8%31%
22%24%9%5%32%
25%21%10%5%31%
24%20%10%7%31%
30%19%10%6%29%
₹11.27 Cr27.9%
₹6.03 Cr20.9%
₹6.83 Cr17.7%
₹9.82 Cr21.7%
₹14.65 Cr27.1%
₹11.35 Cr24.7%
₹11.53 Cr26.0%
₹8.49 Cr21.7%
₹8.23 Cr25.3%
₹8.06 Cr24.1%
₹2.81 Cr29.7%
₹7.94 Cr19.6%
₹6.37 Cr22.0%
₹8.46 Cr21.9%
₹8.65 Cr19.1%
₹10.17 Cr18.8%
₹9.36 Cr20.4%
₹9.96 Cr22.4%
₹9.38 Cr23.9%
₹6.93 Cr21.3%
₹6.83 Cr20.4%
₹1.76 Cr18.7%
₹4.06 Cr10.0%
₹2.92 Cr10.1%
₹3.39 Cr8.8%
₹3.72 Cr8.2%
₹4.19 Cr7.8%
₹3.66 Cr8.0%
₹3.68 Cr8.3%
₹3.46 Cr8.8%
₹3.10 Cr9.5%
₹3.27 Cr9.8%
₹90.7 L9.6%
₹1.26 Cr3.1%
₹1.59 Cr5.5%
₹4.35 Cr11.3%
₹5.30 Cr11.7%
₹5.76 Cr10.7%
₹3.25 Cr7.1%
₹2.17 Cr4.9%
₹1.89 Cr4.8%
₹1.53 Cr4.7%
₹1.52 Cr4.6%
₹40.4 L4.3%
₹1.97 Cr4.9%
₹1.66 Cr5.8%
₹2.29 Cr5.9%
₹2.24 Cr4.9%
₹2.30 Cr4.3%
₹2.40 Cr5.2%
₹2.00 Cr4.5%
₹2.06 Cr5.2%
₹1.74 Cr5.3%
₹2.22 Cr6.7%
₹56.7 L6.0%
₹1.15 Cr2.9%
₹89.2 L3.1%
₹1.47 Cr3.8%
₹1.78 Cr3.9%
₹1.92 Cr3.6%
₹1.48 Cr3.2%
₹1.19 Cr2.7%
₹1.13 Cr2.9%
₹84.4 L2.6%
₹90.2 L2.7%
₹23.1 L2.4%
₹6.4 L0.2%
₹5.0 L0.2%
₹7.6 L0.2%
₹8.2 L0.2%
₹9.7 L0.2%
₹7.5 L0.2%
₹6.6 L0.1%
₹9.4 L0.2%
₹7.7 L0.2%
₹7.3 L0.2%
₹2.5 L0.3%
₹27.72 Cr68.5%
₹19.52 Cr67.5%
₹26.85 Cr69.5%
₹31.59 Cr69.8%
₹39.10 Cr72.4%
₹31.58 Cr68.9%
₹30.60 Cr68.8%
₹26.50 Cr67.7%
₹22.45 Cr69.0%
₹22.89 Cr68.5%
₹6.71 Cr71.0%
₹40.45 Cr
₹28.91 Cr
₹38.63 Cr
₹45.27 Cr
₹53.98 Cr
₹45.87 Cr
₹44.44 Cr
₹39.17 Cr
₹32.53 Cr
₹33.40 Cr
₹9.45 Cr
```

After clicking **Online**:
```text
2026 turnover, online, all West stores. Each column is one month; the colours are each sport's share of everything we sold that month, the grey is all other sports. Months of Q1 are highlighted. 2027 follows this rhythm; 2027 targets by sport are not in our files.
Turnover, all sports2026, online
₹5.98 Cr₹5.71 Cr₹5.23 Cr₹5.86 Cr₹6.88 Cr₹6.30 Cr₹7.57 Cr₹5.82 Cr₹6.01 Cr₹7.95 CrMoney time₹1.42 Cr
32%16%11%6%30%
28%16%7%13%31%
18%20%9%14%32%
66%
24%17%8%11%34%
26%18%7%10%32%
67%
27%19%8%6%5%33%
32%18%8%5%30%
26%21%9%6%8%29%
75%
37%17%7%7%5%25%
32%18%8%6%30%
36%15%7%7%32%
₹1.92 Cr32.2%
₹1.59 Cr27.8%
₹96.3 L18.4%
₹1.43 Cr24.3%
₹1.81 Cr26.3%
₹1.70 Cr26.9%
₹2.45 Cr32.3%
₹1.49 Cr25.7%
₹2.23 Cr37.1%
₹2.53 Cr31.8%
₹51.0 L36.0%
₹95.6 L16.0%
₹90.0 L15.8%
₹1.04 Cr19.9%
₹97.0 L16.5%
₹1.25 Cr18.2%
₹1.19 Cr18.9%
₹1.39 Cr18.4%
₹1.22 Cr21.0%
₹1.03 Cr17.1%
₹1.44 Cr18.1%
₹20.8 L14.7%
₹68.5 L11.5%
₹40.2 L7.1%
₹46.3 L8.8%
₹48.3 L8.2%
₹48.5 L7.1%
₹50.2 L8.0%
₹61.5 L8.1%
₹51.1 L8.8%
₹44.1 L7.3%
₹66.7 L8.4%
₹10.2 L7.2%
₹20.2 L3.4%
₹72.8 L12.8%
₹70.7 L13.5%
₹64.0 L10.9%
₹70.7 L10.3%
₹39.9 L6.3%
₹34.2 L4.5%
₹35.2 L6.0%
₹41.0 L6.8%
₹31.9 L4.0%
₹3.5 L2.5%
₹34.7 L5.8%
₹27.8 L4.9%
₹23.3 L4.5%
₹26.3 L4.5%
₹31.8 L4.6%
₹34.6 L5.5%
₹38.0 L5.0%
₹48.4 L8.3%
₹30.3 L5.0%
₹51.4 L6.5%
₹10.0 L7.1%
₹7.1 L1.2%
₹4.7 L0.8%
₹11.7 L2.2%
₹7.8 L1.3%
₹9.8 L1.4%
₹6.9 L1.1%
₹7.6 L1.0%
₹6.9 L1.2%
₹4.5 L0.8%
₹8.5 L1.1%
₹1.4 L1.0%
₹1.9 L0.3%
₹0.9 L0.1%
₹1.7 L0.3%
₹0.8 L0.1%
₹1.4 L0.2%
₹1.0 L0.1%
₹2.2 L0.4%
₹2.0 L0.3%
₹1.1 L0.1%
₹0.0 L0.0%
₹4.20 Cr70.4%
₹3.95 Cr69.3%
₹3.54 Cr67.6%
₹3.88 Cr66.2%
₹4.68 Cr68.0%
₹4.22 Cr66.9%
₹5.27 Cr69.5%
₹4.16 Cr71.4%
₹4.48 Cr74.5%
₹5.56 Cr70.0%
₹96.9 L68.4%
₹5.98 Cr
₹5.71 Cr
₹5.23 Cr
₹5.86 Cr
₹6.88 Cr
₹6.30 Cr
₹7.57 Cr
₹5.82 Cr
₹6.01 Cr
₹7.95 Cr
₹1.42 Cr
```

After clicking **STATE Pune + Q1: Jan to Mar**:
```text
Bar under each month: Pune ad budget, Q1
Winter₹28.7 L, 22 AOPs
₹22.7 L, 23 AOPs
Summer₹29.0 L, 23 AOPs
New Year, New Moves★ Women's Day
Our 6 sports, Pune
Run clubs restart: New Year, New Moves5K and 10K training blocksWomen's Day pink run, Sat 6 - Sun 7 Mar
Pune sport of the month: pickleball
₹29.0 LPune
23Pune
What our 6 sports sell, month by month
2026 turnover, online, Pune. Each column is one month; the colours are each sport's share of everything we sold that month, the grey is all other sports. Months of Q1 are highlighted. 2027 follows this rhythm; 2027 targets by sport are not in our files.
MountainFitnessRunningSwimmingCyclingPickleballOther sports
₹2.39 Cr₹2.34 Cr₹2.31 Cr₹2.67 Cr₹2.68 Cr₹2.58 Cr₹3.75 CrMoney time₹2.70 Cr₹2.15 Cr₹3.09 Cr₹47.9 L
₹28.7 L₹22.7 L₹29.0 L₹32.2 L₹37.5 L₹33.8 L₹36.4 L₹29.8 L₹22.1 L₹22.8 L₹34.1 L₹36.1 L
Share of turnover6 sports + other
28%19%6%6%7%33%
27%19%13%31%
18%22%6%17%6%32%
63%
21%18%6%13%5%37%
24%20%5%13%6%31%
25%22%6%7%7%33%
35%18%6%32%
26%23%7%6%9%29%
26%22%8%9%6%29%
25%24%6%6%34%
29%22%5%10%31%
₹66.5 L27.8%
₹63.2 L27.0%
₹41.0 L17.8%
₹55.4 L20.8%
₹64.7 L24.2%
₹63.6 L24.6%
₹1.32 Cr35.2%
₹68.9 L25.6%
₹54.9 L25.6%
₹77.4 L25.1%
₹13.7 L28.7%
₹46.0 L19.3%
₹44.6 L19.1%
₹50.2 L21.7%
₹47.9 L18.0%
₹53.0 L19.8%
₹56.4 L21.8%
₹67.1 L17.9%
₹61.4 L22.8%
₹46.4 L21.6%
₹73.2 L23.7%
₹10.8 L22.5%
₹14.8 L6.2%
₹11.4 L4.9%
₹13.8 L6.0%
₹14.8 L5.6%
₹14.4 L5.4%
₹15.4 L6.0%
₹21.1 L5.6%
₹18.3 L6.8%
₹17.2 L8.0%
₹19.7 L6.4%
₹2.5 L5.3%
₹13.9 L5.8%
₹31.1 L13.3%
₹38.6 L16.7%
₹34.1 L12.8%
₹36.1 L13.5%
₹18.6 L7.2%
₹15.3 L4.1%
₹17.1 L6.4%
₹18.9 L8.8%
₹13.8 L4.5%
₹1.4 L2.9%
₹17.8 L7.4%
₹11.0 L4.7%
₹13.5 L5.8%
₹14.0 L5.2%
₹15.9 L5.9%
₹17.4 L6.7%
₹17.7 L4.7%
₹24.6 L9.1%
₹13.7 L6.4%
₹18.0 L5.8%
₹4.6 L9.7%
₹1.2 L0.5%
₹0.3 L0.1%
₹1.0 L0.5%
₹0.7 L0.3%
₹0.6 L0.2%
₹0.2 L0.1%
₹0.9 L0.3%
₹0.4 L0.2%
₹0.4 L0.1%
6 sports
₹1.60 Cr67.1%
₹1.61 Cr69.0%
₹1.58 Cr68.4%
₹1.67 Cr62.6%
₹1.85 Cr69.1%
₹1.72 Cr66.6%
₹2.53 Cr67.6%
₹1.91 Cr70.9%
₹1.51 Cr70.5%
₹2.02 Cr65.6%
₹33.1 L69.2%
₹2.39 Cr
₹2.34 Cr
₹2.31 Cr
₹2.67 Cr
₹2.68 Cr
₹2.58 Cr
₹3.75 Cr
₹2.70 Cr
₹2.15 Cr
₹3.09 Cr
₹47.9 L
```

After clicking **STATE Pune + Q1: Jan to Mar > Jan Low season Winter ₹28.7 L, 22 AOPs**:
```text
₹28.7 LPune
22Pune
```

After clicking **STATE Pune + Q1: Jan to Mar > Feb Low season ₹22.7 L, 23 AOPs**:
```text
₹22.7 LPune
Running5K and 10K training blocks
```

After clicking **STATE Pune + Q1: Jan to Mar > In-store + online**:
```text
2026 turnover, in-store + online, Pune. Each column is one month; the colours are each sport's share of everything we sold that month, the grey is all other sports. Months of Q1 are highlighted. 2027 follows this rhythm; 2027 targets by sport are not in our files.
₹21.80 Cr₹17.20 Cr₹21.97 Cr₹24.43 Cr₹28.47 CrMoney time₹25.62 Cr₹27.62 Cr₹22.57 Cr₹17.98 Cr₹20.29 Cr₹4.57 Cr
64%
25%21%9%6%36%
65%
21%22%9%7%6%35%
17%22%8%13%6%33%
20%20%8%13%5%34%
25%20%8%11%32%
25%20%8%6%6%35%
30%21%8%33%
23%24%8%6%34%
25%22%9%5%33%
22%22%9%7%35%
24%21%9%8%33%
₹5.49 Cr25.2%
₹3.54 Cr20.6%
₹3.72 Cr16.9%
₹4.94 Cr20.2%
₹7.02 Cr24.7%
₹6.42 Cr25.1%
₹8.32 Cr30.1%
₹5.27 Cr23.4%
₹4.50 Cr25.0%
₹4.48 Cr22.1%
₹1.09 Cr23.9%
₹4.57 Cr20.9%
₹3.83 Cr22.3%
₹4.86 Cr22.1%
₹4.82 Cr19.7%
₹5.57 Cr19.5%
₹5.18 Cr20.2%
₹5.90 Cr21.4%
₹5.47 Cr24.2%
₹3.93 Cr21.9%
₹4.45 Cr21.9%
₹97.6 L21.3%
₹1.88 Cr8.6%
₹1.54 Cr9.0%
₹1.83 Cr8.3%
₹1.93 Cr7.9%
₹2.17 Cr7.6%
₹1.98 Cr7.7%
₹2.08 Cr7.5%
₹1.89 Cr8.4%
₹1.68 Cr9.4%
₹1.86 Cr9.2%
₹39.7 L8.7%
₹86.6 L4.0%
₹1.25 Cr7.2%
₹2.85 Cr13.0%
₹3.10 Cr12.7%
₹3.20 Cr11.2%
₹1.64 Cr6.4%
₹1.02 Cr3.7%
₹98.6 L4.4%
₹89.4 L5.0%
₹95.7 L4.7%
₹20.0 L4.4%
₹1.22 Cr5.6%
₹1.01 Cr5.9%
₹1.36 Cr6.2%
₹1.28 Cr5.2%
₹1.41 Cr5.0%
₹1.44 Cr5.6%
₹1.25 Cr4.5%
₹1.28 Cr5.7%
₹96.9 L5.4%
₹1.41 Cr7.0%
₹37.1 L8.1%
₹3.6 L0.2%
₹1.8 L0.1%
₹3.0 L0.1%
₹2.6 L0.1%
₹3.7 L0.1%
₹3.3 L0.1%
₹2.3 L0.1%
₹3.5 L0.2%
₹3.4 L0.2%
₹0.7 L0.1%
₹14.05 Cr64.5%
₹11.18 Cr65.0%
₹14.65 Cr66.7%
₹16.09 Cr65.9%
₹19.40 Cr68.1%
₹16.69 Cr65.2%
₹18.60 Cr67.3%
₹14.93 Cr66.2%
₹12.01 Cr66.8%
₹13.19 Cr65.0%
₹3.04 Cr66.6%
₹21.80 Cr
₹17.20 Cr
₹21.97 Cr
₹24.43 Cr
₹28.47 Cr
₹25.62 Cr
₹27.62 Cr
₹22.57 Cr
₹17.98 Cr
₹20.29 Cr
₹4.57 Cr
```

After clicking **STATE Pune + Q1: Jan to Mar > In-store (offline)**:
```text
2026 turnover, in-store (offline), Pune. Each column is one month; the colours are each sport's share of everything we sold that month, the grey is all other sports. Months of Q1 are highlighted. 2027 follows this rhythm; 2027 targets by sport are not in our files.
₹19.41 Cr₹14.86 Cr₹19.65 Cr₹21.76 Cr₹25.80 CrMoney time₹23.03 Cr₹23.87 Cr₹19.87 Cr₹15.84 Cr₹17.21 Cr₹4.10 Cr
25%21%9%5%36%
20%23%10%6%6%36%
17%22%9%13%6%33%
29%22%8%33%
23%24%9%5%34%
25%22%10%5%34%
22%22%10%7%35%
23%21%9%8%34%
₹4.83 Cr24.9%
₹2.91 Cr19.6%
₹3.31 Cr16.8%
₹4.39 Cr20.2%
₹6.38 Cr24.7%
₹5.79 Cr25.1%
₹7.01 Cr29.3%
₹4.58 Cr23.1%
₹3.95 Cr24.9%
₹3.70 Cr21.5%
₹95.7 L23.4%
₹4.11 Cr21.2%
₹3.39 Cr22.8%
₹4.36 Cr22.2%
₹4.34 Cr19.9%
₹5.04 Cr19.5%
₹4.61 Cr20.0%
₹5.23 Cr21.9%
₹4.85 Cr24.4%
₹3.47 Cr21.9%
₹3.72 Cr21.6%
₹86.8 L21.2%
₹1.73 Cr8.9%
₹1.43 Cr9.6%
₹1.69 Cr8.6%
₹1.78 Cr8.2%
₹2.02 Cr7.8%
₹1.83 Cr7.9%
₹1.87 Cr7.8%
₹1.71 Cr8.6%
₹1.51 Cr9.5%
₹1.66 Cr9.7%
₹37.2 L9.1%
₹72.7 L3.7%
₹93.5 L6.3%
₹2.47 Cr12.6%
₹2.76 Cr12.7%
₹2.84 Cr11.0%
₹1.45 Cr6.3%
₹86.6 L3.6%
₹81.5 L4.1%
₹70.5 L4.5%
₹81.9 L4.8%
₹18.5 L4.5%
₹1.04 Cr5.4%
₹89.8 L6.0%
₹1.22 Cr6.2%
₹1.14 Cr5.2%
₹1.25 Cr4.9%
₹1.27 Cr5.5%
₹1.07 Cr4.5%
₹1.04 Cr5.2%
₹83.2 L5.3%
₹1.23 Cr7.2%
₹32.4 L7.9%
₹2.4 L0.1%
₹1.5 L0.1%
₹2.0 L0.1%
₹1.9 L0.1%
₹2.9 L0.1%
₹2.7 L0.1%
₹2.1 L0.1%
₹3.0 L0.2%
₹2.7 L0.2%
₹0.7 L0.2%
₹12.45 Cr64.2%
₹9.57 Cr64.4%
₹13.07 Cr66.5%
₹14.42 Cr66.3%
₹17.56 Cr68.0%
₹14.97 Cr65.0%
₹16.07 Cr67.3%
₹13.02 Cr65.5%
₹10.50 Cr66.3%
₹11.16 Cr64.9%
₹2.71 Cr66.3%
₹19.41 Cr
₹14.86 Cr
₹19.65 Cr
₹21.76 Cr
₹25.80 Cr
₹23.03 Cr
₹23.87 Cr
₹19.87 Cr
₹15.84 Cr
₹17.21 Cr
₹4.10 Cr
```

After clicking **STATE Pune + Q2: Apr to Jun**:
```text
Q2 2027, month by month
Bar under each month: Pune ad budget, Q2
AprRising season
Summer₹32.2 L, 20 AOPs
MayPeak season
Summer₹37.5 L, 17 AOPs
JunSustained season
Summer₹33.8 L, 13 AOPs
Gudi Padwa 8 AprMaharashtra Day 1 MayYoga Day 21 Jun
Summer + summer campMonsoon & back to school
Ugadi, Gudi PadwaShoes phase 2
Circular Bazaar
★ Summer CampSports UtsavYoga Day
Kiprun Challenger, ₹9,999
Maharashtra Day
Cricket + rollerSwimmingFootball
Summer + summer camp: 50 influencers continue (March to May)Summer + summer camp: 50 influencers continue (March to May)Not in the Pune plan yet
Summer run clubs at 5:30 AM
Kiprun Challenger try-on runsHeat and hydration kit for runners
Kiprun Challenger pushGlobal Running Day, Wed 2 Jun
Monsoon-ready running shoes
6 AM summer workouts at partner gyms
World Health Day, Wed 7 AprSports Utsav: fitness zones in every storeYoga Day build-up from 1 Jun
Yoga Day, Mon 21 Jun
Learn-to-ride camps for kidsSummer holidays: kids' bikes and family ridesWorld Bicycle Day, Thu 3 Jun: ride to work
Service before the monsoon
Himalayan trek season opensPeak travel: summer holidays and Himalayan treksMonsoon treks from late June: rainwear and trek shoes
Learn to Swim summer batches start
Summer CampPeak swim camps
Pune sport of the month: swimmingSwim galas at partner pools before schools reopen
Summer evening leagues
Kids' coaching
April 2027: Summer starts: sign the kids up
₹32.2 LPune
20Pune
Summer Camp (April to June)
Learn to Swim batches, cricket camps and learn-to-ride camps begin
Himalayan trek season opens
Gudi Padwa, Thu 8 Apr; shoes, phase 2
RunningSummer run clubs at 5:30 AM
Kiprun Challenger try-on runs
Fitness6 AM summer workouts at partner gyms
World Health Day, Wed 7 Apr
CyclingLearn-to-ride camps for kids
MountainHimalayan trek season opens
SwimmingLearn to Swim summer batches start
Summer Camp
2026 turnover, online, Pune. Each column is one month; the colours are each sport's share of everything we sold that month, the grey is all other sports. Months of Q2 are highlighted. 2027 follows this rhythm; 2027 targets by sport are not in our files.
```

After clicking **STATE Pune + Q2: Apr to Jun > May Peak season Summer ₹37.5 L, 17 AOPs**:
```text
May 2027: Peak summer
₹37.5 LPune
17Pune
Sports Utsav (200,000 national footfall goal)
Swimming is Pune's sport of the month
Summer holidays: travel, kids' bikes, family sport
Maharashtra Day, Sat 1 May
RunningHeat and hydration kit for runners
Kiprun Challenger push
FitnessSports Utsav: fitness zones in every store
CyclingSummer holidays: kids' bikes and family rides
MountainPeak travel: summer holidays and Himalayan treks
SwimmingPeak swim camps
Pune sport of the month: swimming
PickleballSummer evening leagues
```

After clicking **STATE Pune + Q2: Apr to Jun > Jun Sustained season Summer ₹33.8 L, 13 AOPs**:
```text
June 2027: Yoga, rides and the monsoon
₹33.8 LPune
13Pune
Yoga Day, Mon 21 Jun, after 21 days of yoga (10,000 national goal)
Global Running Day, Wed 2 Jun; World Bicycle Day, Thu 3 Jun
Monsoon treks and rainwear; back to school
Swim galas and pickleball cup finals
RunningGlobal Running Day, Wed 2 Jun
FitnessYoga Day build-up from 1 Jun
CyclingWorld Bicycle Day, Thu 3 Jun: ride to work
MountainMonsoon treks from late June: rainwear and trek shoes
SwimmingSwim galas at partner pools before schools reopen
```

After clicking **STATE Pune + Q2: Apr to Jun > In-store + online**:
```text
2026 turnover, in-store + online, Pune. Each column is one month; the colours are each sport's share of everything we sold that month, the grey is all other sports. Months of Q2 are highlighted. 2027 follows this rhythm; 2027 targets by sport are not in our files.
```

After clicking **STATE Pune + Q2: Apr to Jun > In-store (offline)**:
```text
2026 turnover, in-store (offline), Pune. Each column is one month; the colours are each sport's share of everything we sold that month, the grey is all other sports. Months of Q2 are highlighted. 2027 follows this rhythm; 2027 targets by sport are not in our files.
```

After clicking **STATE Pune + Q1 and Q2**:
```text
January to June, month by month
Bar under each month: Pune ad budget, Q1 and Q2
Good Friday 26 MarGudi Padwa 8 AprMaharashtra Day 1 MayYoga Day 21 Jun
WinterSummer + summer campMonsoon & back to school
Republic Day, MIINew arrivals: shoes 1Valentine's DayHoliUgadi, Gudi PadwaShoes phase 2
Cycling / running★ Movement for AllWomen's DayCircular Bazaar
New Year, New Moves★ Women's Day★ Summer CampSports UtsavYoga Day
Holi, 22 MarMaharashtra Day
FitnessCampingPickleballCricket + rollerSwimmingFootball
Influencers: "New Year, New Moves" (as written in the March table) (17 influencers), 2 to 17 JanSummer + summer camp: 50 influencers continue (March to May)Summer + summer camp: 50 influencers continue (March to May)Not in the Pune plan yet
Kiprun Challenger ₹9,999 launchesSummer run clubs at 5:30 AM
Valentine's: train togetherWomen's Day weekend, 6-7 Mar: women-only pilates and yoga mornings6 AM summer workouts at partner gyms
Commuter bikes for summerLearn-to-ride camps for kidsSummer holidays: kids' bikes and family ridesWorld Bicycle Day, Thu 3 Jun: ride to work
Winter treks: Sahyadri sunrise treks, Saputara, PachmarhiCamping weekends: Pune sport of the monthHimalayan summer prep: gear lists with trek organisersHimalayan trek season opensPeak travel: summer holidays and Himalayan treksMonsoon treks from late June: rainwear and trek shoes
Learn to Swim batches announcedLearn to Swim registrations openLearn to Swim summer batches start
Court tie-upsSummer evening leagues
2026 turnover, online, Pune. Each column is one month; the colours are each sport's share of everything we sold that month, the grey is all other sports. Months of Q1 and Q2 are highlighted. 2027 follows this rhythm; 2027 targets by sport are not in our files.
```

After clicking **STATE Pune + Q1 and Q2 > In-store + online**:
```text
2026 turnover, in-store + online, Pune. Each column is one month; the colours are each sport's share of everything we sold that month, the grey is all other sports. Months of Q1 and Q2 are highlighted. 2027 follows this rhythm; 2027 targets by sport are not in our files.
```

After clicking **STATE Pune + Q1 and Q2 > In-store (offline)**:
```text
2026 turnover, in-store (offline), Pune. Each column is one month; the colours are each sport's share of everything we sold that month, the grey is all other sports. Months of Q1 and Q2 are highlighted. 2027 follows this rhythm; 2027 targets by sport are not in our files.
```

After clicking **STATE West + Q2: Apr to Jun**:
```text
Bar under each month: West ad budget, Q2
Summer₹66.4 L, 48 AOPs
Summer₹76.7 L, 43 AOPs
Summer₹68.3 L, 28 AOPs
IPL match days at Motera
Summer cricket camps with academiesIPL final, Sun 30 May
Summer camp finalsAcademy kit for the new season
Indoor nets for the monsoon
Inter-store pickleball cup, GujaratSummer evening leagues
Kids' coachingCup finals at the Motera playground
₹32.2 LPune₹24.4 LGujarat₹9.70 LMP
20Pune19Gujarat9MP
CricketIPL match days at Motera
Summer cricket camps with academies
PickleballInter-store pickleball cup, Gujarat
2026 turnover, online, all West stores. Each column is one month; the colours are each sport's share of everything we sold that month, the grey is all other sports. Months of Q2 are highlighted. 2027 follows this rhythm; 2027 targets by sport are not in our files.
```

After clicking **STATE West + Q2: Apr to Jun > May Peak season Summer ₹76.7 L, 43 AOPs**:
```text
₹37.5 LPune₹28.8 LGujarat₹10.4 LMP
17Pune17Gujarat9MP
IPL final, Sun 30 May: watch party at Motera
CricketIPL final, Sun 30 May
Summer camp finals
```

After clicking **STATE West + Q2: Apr to Jun > Jun Sustained season Summer ₹68.3 L, 28 AOPs**:
```text
₹33.8 LPune₹24.1 LGujarat₹10.4 LMP
13Pune10Gujarat5MP
CricketAcademy kit for the new season
PickleballCup finals at the Motera playground
```

After clicking **STATE West + Q2: Apr to Jun > In-store + online**:
```text
2026 turnover, in-store + online, all West stores. Each column is one month; the colours are each sport's share of everything we sold that month, the grey is all other sports. Months of Q2 are highlighted. 2027 follows this rhythm; 2027 targets by sport are not in our files.
```

After clicking **STATE West + Q2: Apr to Jun > In-store (offline)**:
```text
2026 turnover, in-store (offline), all West stores. Each column is one month; the colours are each sport's share of everything we sold that month, the grey is all other sports. Months of Q2 are highlighted. 2027 follows this rhythm; 2027 targets by sport are not in our files.
```

After clicking **STATE West + Q1 and Q2**:
```text
Bar under each month: West ad budget, Q1 and Q2
New Year, New Moves★ Beach Day, Surat★ Women's Day★ Summer CampSports UtsavYoga Day
Box cricket night league, Surat (to 16 Jan)Society and corporate box-cricket leaguesIPL starts Sun 14 Mar: gully cricket gear checkIPL match days at Motera
Court tie-upsInter-store pickleball cup, GujaratSummer evening leagues
2026 turnover, online, all West stores. Each column is one month; the colours are each sport's share of everything we sold that month, the grey is all other sports. Months of Q1 and Q2 are highlighted. 2027 follows this rhythm; 2027 targets by sport are not in our files.
```

After clicking **STATE West + Q1 and Q2 > In-store + online**:
```text
2026 turnover, in-store + online, all West stores. Each column is one month; the colours are each sport's share of everything we sold that month, the grey is all other sports. Months of Q1 and Q2 are highlighted. 2027 follows this rhythm; 2027 targets by sport are not in our files.
```

After clicking **STATE West + Q1 and Q2 > In-store (offline)**:
```text
2026 turnover, in-store (offline), all West stores. Each column is one month; the colours are each sport's share of everything we sold that month, the grey is all other sports. Months of Q1 and Q2 are highlighted. 2027 follows this rhythm; 2027 targets by sport are not in our files.
```

After clicking **STATE MP + Q1: Jan to Mar**:
```text
Bar under each month: MP ad budget, Q1
Winter₹11.9 L, 9 AOPs
₹8.04 L, 10 AOPs
Summer₹8.55 L, 10 AOPs
Our 5 sports, MP
Run clubs restart: New Year, New MovesIndore Marathon, first Sunday of February (date to confirm)
Movement for All, all 13 storesHome gym and strength: new arrivals
Winter treks: Sahyadri sunrise treks, Saputara, PachmarhiHimalayan summer prep: gear lists with trek organisers
₹11.9 LMP
9MP
CyclingFan rides to the stages
What our 5 sports sell, month by month
2026 turnover, online, MP. Each column is one month; the colours are each sport's share of everything we sold that month, the grey is all other sports. Months of Q1 are highlighted. 2027 follows this rhythm; 2027 targets by sport are not in our files.
MountainFitnessRunningSwimmingCyclingOther sports
₹1.42 Cr₹1.08 Cr₹1.01 Cr₹1.24 Cr₹1.37 Cr₹1.64 Cr₹1.21 Cr₹1.10 Cr₹1.20 Cr₹2.00 CrMoney time₹42.9 L
₹11.9 L₹8.04 L₹8.55 L₹9.70 L₹10.4 L₹10.4 L₹10.5 L₹9.59 L₹7.29 L₹9.57 L₹11.0 L₹13.1 L
Share of turnover5 sports + other
41%12%13%28%
22%16%12%11%7%31%
21%21%13%6%36%
31%14%11%10%31%
32%16%9%7%33%
34%13%8%37%
26%20%11%6%32%
26%20%13%5%31%
38%16%10%5%28%
43%13%8%8%25%
45%11%9%30%
₹58.7 L41.4%
₹23.8 L22.1%
₹21.2 L21.1%
₹37.9 L30.5%
₹44.4 L32.5%
₹55.5 L33.9%
₹31.6 L26.1%
₹28.8 L26.2%
₹44.9 L37.5%
₹85.2 L42.7%
₹19.4 L45.3%
₹16.6 L11.7%
₹17.4 L16.1%
₹20.7 L20.6%
₹17.2 L13.9%
₹21.9 L16.0%
₹20.5 L12.5%
₹24.3 L20.1%
₹21.8 L19.8%
₹18.9 L15.8%
₹26.7 L13.4%
₹4.5 L10.6%
₹18.8 L13.2%
₹13.0 L12.1%
₹12.7 L12.6%
₹13.6 L10.9%
₹12.6 L9.2%
₹13.5 L8.2%
₹13.4 L11.1%
₹14.1 L12.9%
₹11.7 L9.8%
₹16.5 L8.2%
₹4.0 L9.4%
₹1.8 L1.3%
₹12.0 L11.2%
₹5.9 L5.8%
₹12.6 L10.1%
₹9.8 L7.2%
₹7.1 L4.3%
₹5.9 L4.8%
₹5.0 L4.5%
₹6.2 L5.2%
₹6.9 L3.5%
₹0.4 L1.0%
₹5.7 L4.0%
₹7.7 L7.2%
₹4.2 L4.2%
₹4.1 L3.3%
₹3.6 L2.6%
₹6.0 L3.7%
₹6.9 L5.7%
₹5.5 L5.0%
₹4.1 L3.4%
₹15.2 L7.6%
₹1.8 L4.2%
5 sports
₹1.01 Cr71.7%
₹74.0 L68.6%
₹64.7 L64.3%
₹85.5 L68.8%
₹92.2 L67.4%
₹1.03 Cr62.6%
₹82.0 L67.8%
₹75.2 L68.5%
₹85.8 L71.7%
₹1.51 Cr75.4%
₹30.2 L70.5%
₹1.08 Cr
₹1.01 Cr
₹1.24 Cr
₹1.37 Cr
₹1.64 Cr
₹1.21 Cr
₹1.10 Cr
₹1.20 Cr
₹2.00 Cr
₹42.9 L
```

After clicking **STATE MP + Q1: Jan to Mar > Feb Low season ₹8.04 L, 10 AOPs**:
```text
₹8.04 LMP
10MP
```

After clicking **STATE MP + Q1: Jan to Mar > Mar Rising season Summer ₹8.55 L, 10 AOPs**:
```text
₹8.55 LMP
```

After clicking **STATE MP + Q1: Jan to Mar > In-store + online**:
```text
2026 turnover, in-store + online, MP. Each column is one month; the colours are each sport's share of everything we sold that month, the grey is all other sports. Months of Q1 are highlighted. 2027 follows this rhythm; 2027 targets by sport are not in our files.
₹7.92 Cr₹4.91 Cr₹5.91 Cr₹7.27 Cr₹8.34 CrMoney time₹7.72 Cr₹7.04 Cr₹6.41 Cr₹5.96 Cr₹6.80 Cr₹1.90 Cr
38%18%9%30%
23%22%12%6%33%
19%23%11%9%35%
25%18%9%11%33%
28%19%9%11%31%
28%20%8%7%33%
23%23%9%6%34%
22%24%9%35%
29%21%9%32%
33%18%9%6%30%
42%16%9%28%
₹2.98 Cr37.7%
₹1.14 Cr23.1%
₹1.10 Cr18.7%
₹1.79 Cr24.6%
₹2.34 Cr28.0%
₹2.13 Cr27.6%
₹1.61 Cr22.8%
₹1.42 Cr22.1%
₹1.75 Cr29.3%
₹2.24 Cr33.0%
₹79.2 L41.7%
₹1.39 Cr17.6%
₹1.06 Cr21.6%
₹1.34 Cr22.6%
₹1.31 Cr18.1%
₹1.58 Cr19.0%
₹1.57 Cr20.4%
₹1.64 Cr23.3%
₹1.55 Cr24.1%
₹1.24 Cr20.8%
₹1.25 Cr18.3%
₹30.7 L16.2%
₹74.7 L9.4%
₹57.3 L11.7%
₹64.3 L10.9%
₹68.4 L9.4%
₹71.8 L8.6%
₹64.0 L8.3%
₹65.1 L9.2%
₹58.9 L9.2%
₹56.3 L9.4%
₹64.1 L9.4%
₹17.3 L9.1%
₹15.9 L2.0%
₹27.4 L5.6%
₹51.5 L8.7%
₹78.9 L10.9%
₹88.8 L10.6%
₹55.4 L7.2%
₹42.2 L6.0%
₹31.5 L4.9%
₹27.1 L4.5%
₹23.6 L3.5%
₹3.4 L1.8%
₹25.2 L3.2%
₹22.8 L4.7%
₹23.5 L4.0%
₹28.5 L3.9%
₹23.3 L2.8%
₹28.8 L3.7%
₹31.7 L4.5%
₹31.9 L5.0%
₹25.5 L4.3%
₹41.1 L6.0%
₹6.8 L3.6%
₹5.53 Cr69.9%
₹3.27 Cr66.7%
₹3.83 Cr64.8%
₹4.86 Cr66.9%
₹5.76 Cr69.1%
₹5.18 Cr67.1%
₹4.64 Cr65.9%
₹4.19 Cr65.3%
₹4.07 Cr68.3%
₹4.78 Cr70.2%
₹1.37 Cr72.4%
₹7.92 Cr
₹4.91 Cr
₹5.91 Cr
₹7.27 Cr
₹8.34 Cr
₹7.72 Cr
₹7.04 Cr
₹6.41 Cr
₹5.96 Cr
₹6.80 Cr
₹1.90 Cr
```

After clicking **STATE MP + Q1: Jan to Mar > In-store (offline)**:
```text
2026 turnover, in-store (offline), MP. Each column is one month; the colours are each sport's share of everything we sold that month, the grey is all other sports. Months of Q1 are highlighted. 2027 follows this rhythm; 2027 targets by sport are not in our files.
₹6.50 Cr₹3.83 Cr₹4.91 Cr₹6.02 Cr₹6.98 CrMoney time₹6.08 Cr₹5.83 Cr₹5.31 Cr₹4.76 Cr₹4.81 Cr₹1.47 Cr
37%19%9%31%
23%23%12%34%
18%23%11%9%35%
23%19%9%11%34%
27%20%8%11%31%
26%23%8%8%32%
22%24%9%6%35%
21%25%8%35%
27%22%9%33%
29%20%10%5%32%
73%
41%18%9%27%
₹2.39 Cr36.8%
₹89.8 L23.4%
₹89.1 L18.2%
₹1.41 Cr23.4%
₹1.90 Cr27.2%
₹1.57 Cr25.8%
₹1.29 Cr22.2%
₹1.13 Cr21.2%
₹1.30 Cr27.3%
₹1.39 Cr28.9%
₹59.8 L40.7%
₹1.23 Cr18.9%
₹88.8 L23.2%
₹1.13 Cr23.0%
₹1.14 Cr19.0%
₹1.36 Cr19.6%
₹1.37 Cr22.5%
₹1.40 Cr24.0%
₹1.33 Cr25.0%
₹1.05 Cr22.0%
₹97.9 L20.4%
₹26.2 L17.8%
₹56.0 L8.6%
₹44.2 L11.5%
₹51.7 L10.5%
₹54.8 L9.1%
₹59.3 L8.5%
₹50.5 L8.3%
₹51.8 L8.9%
₹44.8 L8.4%
₹44.6 L9.4%
₹47.6 L9.9%
₹13.3 L9.1%
₹14.1 L2.2%
₹15.3 L4.0%
₹45.6 L9.3%
₹66.4 L11.0%
₹79.0 L11.3%
₹48.4 L8.0%
₹36.3 L6.2%
₹26.5 L5.0%
₹20.8 L4.4%
₹16.6 L3.5%
₹3.0 L2.0%
₹19.5 L3.0%
₹15.1 L3.9%
₹19.3 L3.9%
₹24.4 L4.1%
₹19.7 L2.8%
₹22.7 L3.7%
₹24.8 L4.2%
₹26.4 L5.0%
₹21.4 L4.5%
₹25.9 L5.4%
₹5.0 L3.4%
₹4.52 Cr69.5%
₹2.53 Cr66.1%
₹3.19 Cr64.9%
₹4.00 Cr66.5%
₹4.84 Cr69.4%
₹4.16 Cr68.4%
₹3.82 Cr65.5%
₹3.44 Cr64.7%
₹3.22 Cr67.5%
₹3.27 Cr68.0%
₹1.07 Cr73.0%
₹6.50 Cr
₹3.83 Cr
₹6.02 Cr
₹6.98 Cr
₹6.08 Cr
₹5.83 Cr
₹5.31 Cr
₹4.76 Cr
₹4.81 Cr
₹1.47 Cr
```

After clicking **STATE MP + Q2: Apr to Jun**:
```text
Bar under each month: MP ad budget, Q2
Summer₹9.70 L, 9 AOPs
Summer₹10.4 L, 9 AOPs
Summer₹10.4 L, 5 AOPs
Yoga Day 21 Jun
Shoes phase 2
Summer CampPeak swim campsSwim galas at partner pools before schools reopen
₹9.70 LMP
2026 turnover, online, MP. Each column is one month; the colours are each sport's share of everything we sold that month, the grey is all other sports. Months of Q2 are highlighted. 2027 follows this rhythm; 2027 targets by sport are not in our files.
```

After clicking **STATE MP + Q2: Apr to Jun > May Peak season Summer ₹10.4 L, 9 AOPs**:
```text
₹10.4 LMP
```

After clicking **STATE MP + Q2: Apr to Jun > Jun Sustained season Summer ₹10.4 L, 5 AOPs**:
```text
5MP
```

After clicking **STATE MP + Q2: Apr to Jun > In-store + online**:
```text
2026 turnover, in-store + online, MP. Each column is one month; the colours are each sport's share of everything we sold that month, the grey is all other sports. Months of Q2 are highlighted. 2027 follows this rhythm; 2027 targets by sport are not in our files.
```

After clicking **STATE MP + Q2: Apr to Jun > In-store (offline)**:
```text
2026 turnover, in-store (offline), MP. Each column is one month; the colours are each sport's share of everything we sold that month, the grey is all other sports. Months of Q2 are highlighted. 2027 follows this rhythm; 2027 targets by sport are not in our files.
```

After clicking **STATE MP + Q1 and Q2**:
```text
Bar under each month: MP ad budget, Q1 and Q2
Good Friday 26 MarYoga Day 21 Jun
Republic Day, MIINew arrivals: shoes 1Valentine's DayHoliShoes phase 2
Winter treks: Sahyadri sunrise treks, Saputara, PachmarhiHimalayan summer prep: gear lists with trek organisersHimalayan trek season opensPeak travel: summer holidays and Himalayan treksMonsoon treks from late June: rainwear and trek shoes
2026 turnover, online, MP. Each column is one month; the colours are each sport's share of everything we sold that month, the grey is all other sports. Months of Q1 and Q2 are highlighted. 2027 follows this rhythm; 2027 targets by sport are not in our files.
```

After clicking **STATE MP + Q1 and Q2 > In-store + online**:
```text
2026 turnover, in-store + online, MP. Each column is one month; the colours are each sport's share of everything we sold that month, the grey is all other sports. Months of Q1 and Q2 are highlighted. 2027 follows this rhythm; 2027 targets by sport are not in our files.
```

After clicking **STATE MP + Q1 and Q2 > In-store (offline)**:
```text
2026 turnover, in-store (offline), MP. Each column is one month; the colours are each sport's share of everything we sold that month, the grey is all other sports. Months of Q1 and Q2 are highlighted. 2027 follows this rhythm; 2027 targets by sport are not in our files.
```

After clicking **STATE Gujarat + Q1: Jan to Mar**:
```text
Bar under each month: Gujarat ad budget, Q1
Winter₹22.5 L, 18 AOPs
₹15.7 L, 18 AOPs
Summer₹21.3 L, 19 AOPs
Our 7 sports, Gujarat
Vadodara Marathon, Sun 31 Jan: bib expo desk5K and 10K training blocksWomen's Day pink run, Sat 6 - Sun 7 Mar
Pickle Premier League, Surat (to 16 Jan)Society pickleball leagues, AhmedabadCourt tie-ups
₹22.5 LGujarat
18Gujarat
2026 turnover, online, Gujarat. Each column is one month; the colours are each sport's share of everything we sold that month, the grey is all other sports. Months of Q1 are highlighted. 2027 follows this rhythm; 2027 targets by sport are not in our files.
₹2.17 Cr₹2.29 Cr₹1.92 Cr₹1.95 Cr₹2.84 Cr₹2.08 Cr₹2.62 Cr₹2.03 Cr₹2.67 Cr₹2.86 CrMoney time₹50.9 L
₹22.5 L₹15.7 L₹21.3 L₹24.4 L₹28.8 L₹24.1 L₹23.1 L₹22.0 L₹12.8 L₹16.9 L₹23.5 L₹25.3 L
31%15%16%5%29%
31%12%7%13%32%
18%17%10%14%36%
25%16%10%9%33%
25%18%8%9%35%
24%20%10%7%5%32%
31%18%10%5%29%
26%19%9%6%9%29%
78%
46%14%6%6%22%
32%15%11%6%31%
35%11%7%7%36%
₹67.3 L31.0%
₹71.8 L31.4%
₹34.0 L17.8%
₹49.5 L25.3%
₹72.2 L25.4%
₹50.5 L24.2%
₹81.3 L31.1%
₹51.8 L25.5%
₹1.23 Cr46.2%
₹90.2 L31.5%
₹17.9 L35.1%
₹33.0 L15.2%
₹28.0 L12.2%
₹33.0 L17.2%
₹31.8 L16.3%
₹50.2 L17.7%
₹42.4 L20.4%
₹48.0 L18.3%
₹39.2 L19.4%
₹37.8 L14.2%
₹43.6 L15.2%
₹5.5 L10.7%
₹34.9 L16.1%
₹15.9 L6.9%
₹19.9 L10.4%
₹19.9 L10.2%
₹21.6 L7.6%
₹21.3 L10.2%
₹27.0 L10.3%
₹18.7 L9.2%
₹15.2 L5.7%
₹30.5 L10.7%
₹3.7 L7.2%
₹4.5 L2.1%
₹29.7 L13.0%
₹26.2 L13.7%
₹17.4 L8.9%
₹24.9 L8.8%
₹14.2 L6.8%
₹13.0 L5.0%
₹13.1 L6.4%
₹15.9 L6.0%
₹11.1 L3.9%
₹1.7 L3.3%
₹11.3 L5.2%
₹9.1 L4.0%
₹5.6 L2.9%
₹8.2 L4.2%
₹12.3 L4.3%
₹11.1 L5.3%
₹13.4 L5.1%
₹18.2 L9.0%
₹12.5 L4.7%
₹18.2 L6.4%
₹3.5 L7.0%
₹3.6 L1.7%
₹1.5 L0.7%
₹3.7 L1.9%
₹3.1 L1.6%
₹3.8 L1.3%
₹2.5 L1.2%
₹3.0 L1.2%
₹2.7 L1.4%
₹1.8 L0.7%
₹3.6 L1.2%
₹0.5 L1.0%
₹-0.2 L-0.1%
₹0.5 L0.2%
₹0.9 L0.5%
₹1.1 L0.4%
₹1.55 Cr71.4%
₹1.56 Cr68.3%
₹1.23 Cr64.1%
₹1.31 Cr67.0%
₹1.85 Cr65.1%
₹1.43 Cr68.4%
₹1.86 Cr71.1%
₹1.45 Cr71.4%
₹2.07 Cr77.8%
₹1.98 Cr69.1%
₹32.7 L64.3%
₹2.17 Cr
₹2.29 Cr
₹1.92 Cr
₹1.95 Cr
₹2.84 Cr
₹2.08 Cr
₹2.62 Cr
₹2.03 Cr
₹2.86 Cr
₹50.9 L
```

After clicking **STATE Gujarat + Q1: Jan to Mar > Feb Low season ₹15.7 L, 18 AOPs**:
```text
₹15.7 LGujarat
```

After clicking **STATE Gujarat + Q1: Jan to Mar > Mar Rising season Summer ₹21.3 L, 19 AOPs**:
```text
₹21.3 LGujarat
19Gujarat
PickleballCourt tie-ups
```

After clicking **STATE Gujarat + Q1: Jan to Mar > In-store + online**:
```text
2026 turnover, in-store + online, Gujarat. Each column is one month; the colours are each sport's share of everything we sold that month, the grey is all other sports. Months of Q1 are highlighted. 2027 follows this rhythm; 2027 targets by sport are not in our files.
₹16.72 Cr₹12.51 Cr₹15.99 Cr₹19.44 Cr₹24.04 CrMoney time₹18.83 Cr₹17.35 Cr₹16.01 Cr₹14.59 Cr₹14.24 Cr₹4.39 Cr
28%18%13%5%31%
24%19%10%6%6%33%
19%21%9%11%6%31%
23%18%8%11%31%
30%18%7%10%27%
24%20%8%8%5%31%
23%22%9%6%31%
21%22%9%6%6%32%
29%19%9%5%6%29%
27%18%10%6%31%
33%16%10%5%29%
₹4.72 Cr28.2%
₹2.94 Cr23.5%
₹2.97 Cr18.6%
₹4.52 Cr23.2%
₹7.10 Cr29.5%
₹4.49 Cr23.9%
₹4.05 Cr23.3%
₹3.30 Cr20.6%
₹4.21 Cr28.8%
₹3.87 Cr27.2%
₹1.43 Cr32.6%
₹2.94 Cr17.6%
₹2.38 Cr19.0%
₹3.49 Cr17.9%
₹4.27 Cr17.8%
₹3.80 Cr20.2%
₹3.81 Cr21.9%
₹3.59 Cr22.4%
₹2.79 Cr19.1%
₹2.56 Cr18.0%
₹68.9 L15.7%
₹2.12 Cr12.7%
₹1.21 Cr9.7%
₹1.38 Cr8.6%
₹1.58 Cr8.1%
₹1.79 Cr7.4%
₹1.54 Cr8.2%
₹1.56 Cr9.0%
₹1.49 Cr9.3%
₹1.29 Cr8.9%
₹1.44 Cr10.1%
₹43.9 L10.0%
₹43.9 L2.6%
₹79.6 L6.4%
₹1.69 Cr10.6%
₹2.05 Cr10.6%
₹2.39 Cr9.9%
₹1.46 Cr7.8%
₹1.07 Cr6.2%
₹93.7 L5.9%
₹77.9 L5.3%
₹65.0 L4.6%
₹20.6 L4.7%
₹85.3 L5.1%
₹70.6 L5.6%
₹92.5 L5.8%
₹93.7 L4.8%
₹97.0 L4.0%
₹1.02 Cr5.4%
₹81.1 L4.7%
₹93.9 L5.9%
₹82.0 L5.6%
₹91.3 L6.4%
₹22.8 L5.2%
₹48.9 L2.9%
₹36.3 L2.9%
₹67.0 L4.2%
₹83.5 L4.3%
₹90.9 L3.8%
₹66.0 L3.5%
₹56.5 L3.3%
₹53.4 L3.3%
₹36.6 L2.5%
₹38.5 L2.7%
₹10.7 L2.4%
₹3.8 L0.2%
₹2.4 L0.2%
₹4.4 L0.3%
₹6.0 L0.3%
₹5.2 L0.2%
₹4.5 L0.2%
₹6.6 L0.4%
₹4.8 L0.3%
₹4.6 L0.3%
₹1.5 L0.3%
₹11.59 Cr69.4%
₹8.42 Cr67.3%
₹10.97 Cr68.6%
₹13.48 Cr69.3%
₹17.48 Cr72.7%
₹13.02 Cr69.2%
₹11.90 Cr68.6%
₹10.86 Cr67.8%
₹10.31 Cr70.7%
₹9.87 Cr69.3%
₹3.11 Cr70.9%
₹16.72 Cr
₹12.51 Cr
₹15.99 Cr
₹19.44 Cr
₹24.04 Cr
₹18.83 Cr
₹17.35 Cr
₹16.01 Cr
₹14.59 Cr
₹14.24 Cr
₹4.39 Cr
```

After clicking **STATE Gujarat + Q1: Jan to Mar > In-store (offline)**:
```text
2026 turnover, in-store (offline), Gujarat. Each column is one month; the colours are each sport's share of everything we sold that month, the grey is all other sports. Months of Q1 are highlighted. 2027 follows this rhythm; 2027 targets by sport are not in our files.
₹14.55 Cr₹10.22 Cr₹14.07 Cr₹17.49 Cr₹21.20 CrMoney time₹16.75 Cr₹14.74 Cr₹13.98 Cr₹11.93 Cr₹11.38 Cr₹3.88 Cr
28%18%12%5%31%
22%21%10%6%33%
19%21%8%10%6%31%
23%18%8%11%30%
74%
30%18%7%10%26%
22%23%9%6%32%
20%23%9%6%5%33%
25%20%10%5%6%31%
26%19%10%6%31%
32%16%10%28%
₹4.05 Cr27.8%
₹2.23 Cr21.8%
₹2.63 Cr18.7%
₹4.02 Cr23.0%
₹6.38 Cr30.1%
₹3.99 Cr23.8%
₹3.24 Cr22.0%
₹2.78 Cr19.9%
₹2.98 Cr25.0%
₹2.97 Cr26.1%
₹1.25 Cr32.3%
₹2.61 Cr17.9%
₹2.10 Cr20.5%
₹2.97 Cr21.1%
₹3.17 Cr18.1%
₹3.77 Cr17.8%
₹3.38 Cr20.2%
₹3.32 Cr22.6%
₹3.19 Cr22.8%
₹2.42 Cr20.3%
₹2.13 Cr18.7%
₹63.5 L16.3%
₹1.77 Cr12.2%
₹1.05 Cr10.3%
₹1.18 Cr8.4%
₹1.39 Cr7.9%
₹1.57 Cr7.4%
₹1.33 Cr7.9%
₹1.29 Cr8.8%
₹1.31 Cr9.3%
₹1.14 Cr9.6%
₹1.13 Cr10.0%
₹40.2 L10.3%
₹39.4 L2.7%
₹49.9 L4.9%
₹1.43 Cr10.1%
₹1.88 Cr10.8%
₹2.14 Cr10.1%
₹1.32 Cr7.9%
₹94.3 L6.4%
₹80.7 L5.8%
₹62.0 L5.2%
₹54.0 L4.7%
₹18.9 L4.9%
₹74.0 L5.1%
₹61.4 L6.0%
₹86.9 L6.2%
₹85.5 L4.9%
₹84.7 L4.0%
₹90.8 L5.4%
₹67.7 L4.6%
₹75.6 L5.4%
₹69.5 L5.8%
₹73.1 L6.4%
₹19.3 L5.0%
₹45.3 L3.1%
₹34.8 L3.4%
₹63.3 L4.5%
₹80.4 L4.6%
₹87.1 L4.1%
₹63.5 L3.8%
₹53.5 L3.6%
₹50.6 L3.6%
₹34.8 L2.9%
₹34.9 L3.1%
₹10.2 L2.6%
₹2.1 L0.2%
₹3.9 L0.3%
₹5.0 L0.3%
₹5.4 L0.3%
₹4.1 L0.2%
₹3.3 L0.2%
₹5.7 L0.4%
₹3.7 L0.3%
₹4.1 L0.4%
₹1.5 L0.4%
₹10.04 Cr69.1%
₹6.86 Cr67.1%
₹9.74 Cr69.2%
₹12.17 Cr69.6%
₹15.63 Cr73.7%
₹11.60 Cr69.2%
₹10.04 Cr68.1%
₹9.41 Cr67.3%
₹8.24 Cr69.1%
₹7.89 Cr69.3%
₹2.79 Cr71.8%
₹14.55 Cr
₹10.22 Cr
₹14.07 Cr
₹17.49 Cr
₹21.20 Cr
₹16.75 Cr
₹14.74 Cr
₹13.98 Cr
₹11.93 Cr
₹11.38 Cr
₹3.88 Cr
```

After clicking **STATE Gujarat + Q2: Apr to Jun**:
```text
Bar under each month: Gujarat ad budget, Q2
Summer₹24.4 L, 19 AOPs
Summer₹28.8 L, 17 AOPs
Summer₹24.1 L, 10 AOPs
₹24.4 LGujarat
2026 turnover, online, Gujarat. Each column is one month; the colours are each sport's share of everything we sold that month, the grey is all other sports. Months of Q2 are highlighted. 2027 follows this rhythm; 2027 targets by sport are not in our files.
```

After clicking **STATE Gujarat + Q2: Apr to Jun > May Peak season Summer ₹28.8 L, 17 AOPs**:
```text
₹28.8 LGujarat
17Gujarat
```

After clicking **STATE Gujarat + Q2: Apr to Jun > Jun Sustained season Summer ₹24.1 L, 10 AOPs**:
```text
₹24.1 LGujarat
10Gujarat
```

After clicking **STATE Gujarat + Q2: Apr to Jun > In-store + online**:
```text
2026 turnover, in-store + online, Gujarat. Each column is one month; the colours are each sport's share of everything we sold that month, the grey is all other sports. Months of Q2 are highlighted. 2027 follows this rhythm; 2027 targets by sport are not in our files.
```

After clicking **STATE Gujarat + Q2: Apr to Jun > In-store (offline)**:
```text
2026 turnover, in-store (offline), Gujarat. Each column is one month; the colours are each sport's share of everything we sold that month, the grey is all other sports. Months of Q2 are highlighted. 2027 follows this rhythm; 2027 targets by sport are not in our files.
```

After clicking **STATE Gujarat + Q1 and Q2**:
```text
Bar under each month: Gujarat ad budget, Q1 and Q2
Pickle Premier League, Surat (to 16 Jan)Society pickleball leagues, AhmedabadCourt tie-upsInter-store pickleball cup, GujaratSummer evening leagues
2026 turnover, online, Gujarat. Each column is one month; the colours are each sport's share of everything we sold that month, the grey is all other sports. Months of Q1 and Q2 are highlighted. 2027 follows this rhythm; 2027 targets by sport are not in our files.
```

After clicking **STATE Gujarat + Q1 and Q2 > In-store + online**:
```text
2026 turnover, in-store + online, Gujarat. Each column is one month; the colours are each sport's share of everything we sold that month, the grey is all other sports. Months of Q1 and Q2 are highlighted. 2027 follows this rhythm; 2027 targets by sport are not in our files.
```

After clicking **STATE Gujarat + Q1 and Q2 > In-store (offline)**:
```text
2026 turnover, in-store (offline), Gujarat. Each column is one month; the colours are each sport's share of everything we sold that month, the grey is all other sports. Months of Q1 and Q2 are highlighted. 2027 follows this rhythm; 2027 targets by sport are not in our files.
```

#### plan2027 › `moments`: Q1 moments: Movement for All, the clearance sale, Women's Day
- img: assets/img/gym.jpg; assets/img/winter-off.jpg; assets/img/u-kiprun.jpg; assets/img/water/water-women-pool.jpg
- vid:  [poster assets/posters/womens-day.jpg]

```text
The spaces we made on the main plan, now with their money: what each moment is, when, the Q1 budget it gets for the region you picked, what Pune's spend plan puts behind it, and for Women's Day what every store does.
January, all 13 stores
Movement for All: New Year, New Moves
A complete fitness event across all 13 stores: the city moves for the month. Partner yoga, run and gym sessions bring people to the store; creators post the first two weeks.
₹37.72 LQ1 budget, West (playbook)Fitness, then running and yogasports it serves
Pune, from the spend plan
Partner event: yoga500 walk-ins expected₹75,000
Partner event: run400 walk-ins expected₹75,000
Partner event: gym, fitness, Zumba workout500 walk-ins expected₹1,50,000
Hoardings5 hoardings₹5,25,000
Influencers: New Year, New Moves17 influencers, 2 to 17 Jan₹1,49,000
Media vendor17 reels on the Let's Play Pune page₹1,00,000
Pune total ₹10,74,000
January (2026 ran 10 Jan to 15 Feb)
Clearance sale: animated at the stores
In all 13 stores: the end-of-season sale, animated in store, not just discounted. The biggest influencer push of Q1.
₹15.80 LQ1 budget, West (playbook)Every sport: clears the winter rangesports it serves
Influencers: clearance sale50 influencers, dates TBD₹5,00,000
In-store communication₹5,50,000
In-mall comms₹1,65,000
Pune total ₹12,15,000
February; creators 24 Feb to 6 Mar
New arrivals: SS27
The new summer range runs alongside the sale: shoes first (new arrivals: shoes 1 in the planner), then swimwear.
₹24.44 LQ1 budget, West (playbook)Running, swimming, fitnesssports it serves
Hoardings4 hoardings₹4,25,000
Influencers: new arrivals15 influencers, 24 Feb to 6 Mar₹1,49,000
Media vendor20 reels on the Let's Play Pune page₹1,00,000
Pune total ₹12,24,000
Sat 6 and Sun 7 March (Women's Day is Mon 8 March)
Women's Day: one weekend, all 13 stores
Women-only mornings on the weekend before Women's Day: pilates or yoga first, then a sport to try, then shopping with a Women's Day offer, and a women's club that keeps meeting.
₹14.71 LQ1 budget, West (playbook)Fitness, running, swimmingsports it serves
Women's Day weekend event800 walk-ins expected₹1,50,000
Pune total ₹1,50,000
Pune
WakadPilates and core on the forecourt, then a women's 5K club run
WagholiPlayground morning: pilates, then a women-only pickleball slot
SGS MallIn-mall studio: pilates and strength taster classes
AmanoraMall-atrium yoga flow and a She Plays try-a-sport zone
NIBMMothers and daughters: yoga and skipping challenges
Gujarat
MoteraRooftop-style pilates on the playground
NexusIn-mall pilates and a women's run group launch
BarodaCourt morning: pilates, then women's box cricket
Dumas, SuratSunrise yoga and a women-only pickleball slot
RajkotGarba-fit cardio and a women's walking group
Madhya Pradesh
IndorePlayground pilates, then a women's 5K
BhopalLakeside yoga by the Upper Lake, back to DB Mall
GwaliorMorning walk and yoga, with a self-defence basics class
March to May
Summer: water, running and travel
Learn to swim before the pools fill up, the Kiprun Challenger (₹9,999) for the race season, and summer treks. Summer camp creators run from March to May.
₹37.01 LQ1 budget, West (playbook)Swimming, running, mountainsports it serves
Hoardings7 hoardings₹7,25,000
Influencers: summer + summer camp50 influencers, March to May₹5,00,000
Pune total ₹18,75,000
```

After clicking **STATE Pune + Q1: Jan to Mar**:
```text
₹17.47 LQ1 budget, Pune (playbook)Fitness, then running and yogasports it serves
₹7.18 LQ1 budget, Pune (playbook)Every sport: clears the winter rangesports it serves
₹11.97 LQ1 budget, Pune (playbook)Running, swimming, fitnesssports it serves
₹7.24 LQ1 budget, Pune (playbook)Fitness, running, swimmingsports it serves
₹18.20 LQ1 budget, Pune (playbook)Swimming, running, mountainsports it serves
```

After clicking **STATE MP + Q1: Jan to Mar**:
```text
₹6.97 LQ1 budget, MP (playbook)Fitness, then running and yogasports it serves
₹2.98 LQ1 budget, MP (playbook)Every sport: clears the winter rangesports it serves
₹4.07 LQ1 budget, MP (playbook)Running, swimming, fitnesssports it serves
₹2.14 LQ1 budget, MP (playbook)Fitness, running, swimmingsports it serves
₹5.51 LQ1 budget, MP (playbook)Swimming, running, mountainsports it serves
```

After clicking **STATE Gujarat + Q1: Jan to Mar**:
```text
₹13.27 LQ1 budget, Gujarat (playbook)Fitness, then running and yogasports it serves
₹5.63 LQ1 budget, Gujarat (playbook)Every sport: clears the winter rangesports it serves
₹8.40 LQ1 budget, Gujarat (playbook)Running, swimming, fitnesssports it serves
₹5.33 LQ1 budget, Gujarat (playbook)Fitness, running, swimmingsports it serves
₹13.30 LQ1 budget, Gujarat (playbook)Swimming, running, mountainsports it serves
```

#### plan2027 › `playbook`: Q1 marketing playbook
- img: assets/img/su/su-store-games.jpg; https://i.ytimg.com/vi/OqE_Z5L3RSY/hqdefault.jpg; https://i.ytimg.com/vi/YrVz4sayHQg/hqdefault.jpg
- vid:  [poster assets/posters/circuit-games.jpg]
- films (YouTube, play on click): Decathlon Taiwan / Ready to play? = youtu.be/OqE_Z5L3RSY; Decathlon UK / Spring into Action (TV) = youtu.be/YrVz4sayHQg

```text
January is fitness and the clearance sale, February is new arrivals, March is Women's Day with sport, then summer: water, running and travel. The other sports get money by what they sell. Here is how we split every rupee of the Q1 budget, and what each campaign puts on the hoardings, with influencers, on social and in boosts. Our proposal, to confirm.
How we do marketing, from the ground up
1 KILLMake noiseOne KILL strategy a quarter
Be seenHoardings + Social media + Influencers
The basicsIn-store community + AOPs + One flagship event a month + The right team + In-store comms campaigns + Festive moments
Store: the heart of sport
3Make noise: one kill strategy a quarter
Disruptive marketing: one idea the whole city talks about, built on everything below it. Not ten ideas: one.
Nov-Dec: Black Friday morning, doors open after a city run
Q1: Movement for All, the city moves for 31 days
Summer: The City Needs a Swim, a pool takeover
2Be seen: hoardings, social media, influencers
Only once the base is ready: people who see us must find a store, a place to play and a reason to come.
1The basics: every month, every store
Earn the right to be seen: the store is the heart of sport.
In-store community
AOPs
One flagship event a month
The right team
In-store comms campaigns
Festive moments
The engine under the base
In-storeIP events: Sports Utsav, Yoga, Store campaigns, Playground occupancy, Coaching: expert sessions
→
CommunityActive local sports groups, Primary sports: running and cycling
PartnershipsLocal event tie-ups, Tournament organisers, Areas of practice (AOPs), Other catchment collaborations
In-store brings people to community, community feeds partnerships, partnerships bring people back to the store.
₹1.68 Cr for Q1, all three states
The 2027 ad budget for January to March (ultimate data sheet), split by our proposal below. Each state's budget is split the same way.
January₹63.2 L
Movement for All₹28.4 LClearance sale₹15.8 LEvery other sport, by what it sells₹15.8 L
February₹46.4 L
Movement for All₹9.28 LEvery other sport, by what it sells₹11.6 LNew arrivals (SS27)₹18.6 L₹4.64 L
March₹58.9 L
₹5.89 L₹5.89 LSummer water₹14.7 LWomen's Day x sport₹14.7 LRunning₹8.83 LTravel and summer treks₹8.83 L
Movement for All: New Year, New Moves ₹37.7 LClearance sale ₹15.8 LEvery other sport, by what it sells ₹33.3 LLocal moments ₹5.48 LNew arrivals (SS27) ₹24.4 LSummer water: learn to swim ₹19.4 LWomen's Day x sport ₹14.7 LRunning: Kiprun and race season ₹8.83 LTravel and summer treks ₹8.83 L
Sport by sport: share of the Q1 budget vs share of what we sell
Running
₹30.0 L18% / 10%
Fitness
₹50.9 L30% / 21%
Cycling
₹3.84 L2% / 5%
Mountain
₹26.2 L16% / 23%
Swimming
₹35.4 L21% / 7%
Cricket
₹0.74 L0% / 3%
Pickleball
₹0.10 L0% / 0%
Budget share Turnover share, Q1 2026 (in-store + online). Fitness gets more than it sells on purpose: January is its month. Swimming and running are paid ahead of their season (April and May are their big months), mountain is carried by what it already sells. Not credited to a sport: clearance sale and local moments, ₹21.3 L.
Where the money goes
AOPs and free products
₹41.0 L24% / 29%
Hoardings
₹34.1 L20% / 21%
In-store comms
₹31.6 L19% / 21%
Influencers
₹28.1 L17% / 18%
Events
₹16.4 L10% / 6%
Content: reels, media vendor
₹8.77 L5% / 4%
In-mall
₹3.71 L2% / 2%
Social boost and digital
₹4.83 L3% / 0%
Flyers and coupon cards
₹0.00 L0% / 0%
Our campaign split Pune's real Q1 plan (spend plan, January to March: AOPs 29%, hoardings 21%, in-store 21%, influencers 18%, events 6%, reels 4%, in-mall 2%). The Pune plan has no paid digital line: MarCom runs paid digital centrally.
Movement for All: New Year, New Moves₹37.7 L
Clearance sale₹15.8 L
Every other sport, by what it sells₹33.3 L
Local moments₹5.48 L
New arrivals (SS27)₹24.4 L
Summer water: learn to swim₹19.4 L
Women's Day x sport₹14.7 L
Running: Kiprun and race season₹8.83 L
Travel and summer treks₹8.83 L
1 to 31 Jan (influencers 2 to 17 Jan), fitness kept on in Feb; partner events: yoga, run, gym and Zumba
Movement for All: New Year, New Moves
₹28.4 LJan, 45% of the month₹9.28 LFeb, 20% of the month-Mar
Money credited to
Fitness ₹37.7 L
₹37.7 LWest, 22% of Q1
₹17.5 LPune
₹13.3 LGujarat
₹6.97 LMP
Pune, from the spend plan
Pune plan, January: partner events (yoga ₹75,000, 500 walk-ins; run ₹75,000, 400; gym, fitness and Zumba ₹1.5 L, 500), 17 influencers 2 to 17 Jan (₹1.49 L), 5 hoardings (₹5.25 L), 17 reels on Let's Play Pune (₹1 L). In 2026 the same campaign got 14 lakh views at ₹0.11 a view.
On the hoardings
"New Year, New Moves": one hero kit and its price (mat, dumbbells, bands) and the distance to the store. Pune sport of the month: fitness.
Pune: 17 influencers, 2 to 17 Jan. Gujarat and MP: 3 to 4 fitness micro-creators per city (10k to 50k followers, from the Pune pool of 70 and Gujarat and MP pools of 40): a 30-day home-workout challenge with Decathlon kit, one reel a week.
Social content
30-day challenge reels, "kit under ₹999" carousels, teammates training in store, gym AOP members' stories. Four posts a week.
How we boost
Boost the two best reels each week, 5 km around each store, fitness interests, 18 to 40. Retarget video viewers with the store offer.
The money by channel
AOPs and free products25%, ₹9.43 LHoardings20%, ₹7.54 LIn-store comms15%, ₹5.66 LInfluencers15%, ₹5.66 LEvents15%, ₹5.66 LContent5%, ₹1.89 LIn-mall3%, ₹1.13 LSocial boost and digital2%, ₹0.75 L
Seen elsewhere: Decathlon films to borrow from
Decathlon TaiwanReady to play?
One line, many sports, real people: the brand promise without a product in sight.
Decathlon UKSpring into Action (TV)
Season change as the reason to start: our New Year and summer starts.
Pune: the real plan, January to March, line by line
₹79.8 LPune, Jan 2027 to Mar 2027
₹22.9 L29%
₹16.8 L21%
₹16.5 L21%
₹14.5 L18%
₹4.50 L6%
Content: media vendor reels
₹3.00 L4%
₹1.65 L2%
Jan 2027
₹30.5 L
Partner event: yogaMovement for All, 500 walk-ins expected
₹75,000
Partner event: runMovement for All, 400 walk-ins expected
Partner event: gym, fitness, Zumba workoutMovement for All, 500 walk-ins expected
₹1,50,000
HoardingsMovement for All, 5 hoardings
₹5,25,000
AOPsAOPs, 27 AOPs
₹7,65,000
Influencer campaign: clearance saleClearance sale, 50 influencers, dates TBD
₹5,00,000
Influencer campaign: New Year, New MovesMovement for All, 17 influencers, 2 to 17 Jan
₹1,49,000
Media vendorMovement for All, 17 reels on the Let's Play Pune page
₹1,00,000
In-store communicationClearance sale
₹5,50,000
In-mall commsClearance sale
₹1,65,000
Feb 2027
₹19.9 L
HoardingsNew arrivals, 4 hoardings
₹4,25,000
Influencer campaign: new arrivalsNew arrivals, 15 influencers, 24 Feb to 6 Mar
Media vendorNew arrivals, 20 reels on the Let's Play Pune page
In-store communicationNew arrivals
Mar 2027
₹29.4 L
Women's Day weekend eventWomen's Day, 800 walk-ins expected
HoardingsSummer, 7 hoardings
₹7,25,000
Influencer campaign: summer + summer campSummer, 50 influencers, March to May
Influencer campaign: "New Year, New Moves" (as written in the March table)Movement for All, 17 influencers, 2 to 17 Janlooks copied from January: confirm
Media vendorSummer, 17 reels on the Let's Play Pune page
In-store communicationSummer
Pune influencers in the spend plan, with dates, November to May
217influencers planned (Pune)
₹21.5 Linfluencer budget
NovDecJanFebMarAprMay
Black Friday40 influencers, ₹4.00 L
Winter & Travel10 influencers +7 on barter, ₹1.00 L
Christmas sale35 influencers, ₹3.50 L
New Year, New Moves (Movement for All)17 influencers, ₹1.49 L
Clearance sale (dates TBD; 2026 ran 10 Jan to 15 Feb)50 influencers, ₹5.00 L
New arrivals15 influencers, ₹1.49 L
Summer + summer camp50 influencers, ₹5.00 L
AOP money, Pune store by store, January to April
| Store | Jan | Feb | Mar | Apr | Total
| Wakad | ₹2,40,0006 AOPs | ₹2,40,0006 AOPs | ₹2,40,0006 AOPs | ₹2,40,0006 AOPs | ₹9,60,000
| Wagholi | ₹1,50,0006 AOPs | ₹1,50,0006 AOPs | ₹1,50,0006 AOPs | ₹1,50,0006 AOPs | ₹6,00,000
| SGS Mall | ₹1,25,0005 AOPs | ₹1,25,0005 AOPs | ₹1,25,0005 AOPs | ₹1,25,0005 AOPs | ₹5,00,000
| NIBM | ₹1,25,0005 AOPs | ₹1,25,0005 AOPs | ₹1,25,0005 AOPs | ₹1,25,0005 AOPs | ₹5,00,000
| Amanora | ₹1,25,0005 AOPs | ₹1,25,0005 AOPs | ₹1,25,0005 AOPs | ₹1,25,0005 AOPs | ₹5,00,000
| Pune | ₹7,65,00027 AOPs | ₹7,65,00027 AOPs | ₹7,65,00027 AOPs | ₹7,65,00027 AOPs | ₹30,60,000
Pune's line-by-line spend plan, its influencer timeline and its AOP money sit under Pune and West. The Gujarat and MP spend plans are not in our files yet.
```

After clicking **Clearance sale ₹15.8 L**:
```text
January; the 2026 clearance ran 10 Jan to 15 Feb (the Winter Off creative says 1 to 23 Jan): our biggest commercial moment of the quarter
Clearance sale
₹15.8 LJan, 25% of the month-Feb-Mar
Not a sport
Commercial moment: every sport sells in it
₹15.8 LWest, 9% of Q1
₹7.18 LPune
₹5.63 LGujarat
₹2.98 LMP
Pune plan: 50 influencers for the clearance sale (₹5 L), dates TBD; in-store comms ₹5.5 L and in-mall ₹1.65 L in January. In 2026 the clearance influencers got 39 lakh views at ₹0.13 a view, the best reach of the year.
Price-led: the sale dates, three hero prices, "in store now". On the existing hoardings for the sale weeks only, then back to fitness.
Haul reels ("what I got for under ₹999"): 50 creators in Pune, on day one and on the last weekend.
Countdown stories, daily stock drops, crowd videos from the store. WhatsApp to past customers on day one and the last weekend.
Heaviest on the opening and closing weekends; retarget store visitors and past buyers, 3 to 8 km.
Hoardings25%, ₹3.95 LIn-store comms30%, ₹4.74 LInfluencers30%, ₹4.74 LContent2%, ₹0.32 LIn-mall8%, ₹1.26 LSocial boost and digital5%, ₹0.79 L
Decathlon MalaysiaWe make sports accessible to the many
Price as a promise, not a discount: the tone for clearance.
```

After clicking **Every other sport, by what it sells ₹33.3 L**:
```text
January and February (a quarter of each month), then 10% in March
Every other sport, by what it sells
₹15.8 LJan, 25% of the month₹11.6 LFeb, 25% of the month₹5.89 LMar, 10% of the month
Running ₹6.98 LCycling ₹3.84 LMountain ₹17.4 LSwimming ₹4.27 LCricket ₹0.74 LPickleball ₹0.10 L
₹33.3 LWest, 20% of Q1
₹15.8 LPune
₹11.7 LGujarat
₹5.85 LMP
No separate hoarding: AOP branding at the practice places (turfs, courts, pools, trek groups).
Sport creators only where the sport is selling: winter treks, race season (Vadodara Marathon 31 Jan, Indore Marathon in Feb), Bajaj Pune Grand Tour 26 to 31 Jan, IPL from 14 Mar (Gujarat cricket).
One post a week per sport, from AOP partners and customers; the Pune sport of the month.
Money follows sales: each sport gets the share of this bucket that it had of 2026 turnover that month (table below). Boost only posts that beat the page's average.
AOPs and free products55%, ₹18.3 LHoardings15%, ₹4.99 LIn-store comms15%, ₹4.99 LInfluencers10%, ₹3.33 LContent5%, ₹1.66 L
Decathlon KoreaWhy Decathlon is special
The brand story told through the sports people play.
```

After clicking **Local moments ₹5.48 L**:
```text
Uttarayan 14 Jan (Gujarat), Republic Day 26 Jan (Movement for All), Beach Day Surat and Valentine's Day (Feb)
Local moments
₹3.16 LJan, 5% of the month₹2.32 LFeb, 5% of the month-Mar
Brand and local goodwill
₹5.48 LWest, 3% of Q1
₹2.57 LPune
₹1.91 LGujarat
₹1.00 LMP
None.
Local city creators on the day.
Event photos and reels the same day.
Small, in the event week only, 3 km.
In-store comms20%, ₹1.10 LEvents60%, ₹3.29 LContent10%, ₹0.55 LSocial boost and digital10%, ₹0.55 L
Decathlon Malaysia10 years in Malaysia
Local pride: how a country team tells its own story.
```

After clicking **New arrivals (SS27) ₹24.4 L**:
```text
New shoes from 1 Feb; SS27 range in store from 15 Feb; influencers 24 Feb to 6 Mar
New arrivals (SS27)
-Jan₹18.6 LFeb, 40% of the month₹5.89 LMar, 10% of the month
Running ₹9.78 LFitness ₹7.33 LSwimming ₹7.33 L
₹24.4 LWest, 15% of Q1
₹12.0 LPune
₹8.40 LGujarat
₹4.07 LMP
Pune plan, February: 15 influencers 24 Feb to 6 Mar (₹1.49 L), 4 hoardings (₹4.25 L), 20 reels on Let's Play Pune (₹1 L), in-store ₹5.5 L. In 2026 new arrivals cost ₹0.63 a view, the dearest: brief try-ons that sell, not hauls.
"New season is in": the Kiprun shoe, SS27 swimwear and women's fitness wear, with prices.
First-look and try-on reels: runners for shoes, women creators for apparel and swimwear.
A product drop every Friday; a carousel of five new pieces; teammate try-ons.
Catalogue ads to people within 8 km; retarget site and app visitors who looked at new arrivals.
AOPs and free products15%, ₹3.67 LHoardings25%, ₹6.11 LIn-store comms30%, ₹7.33 LInfluencers17%, ₹4.15 LContent7%, ₹1.71 LIn-mall3%, ₹0.73 LSocial boost and digital3%, ₹0.73 L
Decathlon KoreaSS26 Running
A season launch in one film: product in motion, no voice-over.
Decathlon IndiaNew swimsuit collection
Our own India short: the format for SS27 swimwear.
```

After clicking **Summer water: learn to swim ₹19.4 L**:
```text
In store from 15 Feb, outside the store from 15 Mar (the water plan)
Summer water: learn to swim
-Jan₹4.64 LFeb, 10% of the month₹14.7 LMar, 25% of the month
Swimming ₹19.4 L
₹19.4 LWest, 11% of Q1
₹9.51 LPune
₹6.90 LGujarat
₹2.94 LMP
Pune plan, March: summer + summer camp influencers, 50 from March to May (₹5 L); 7 hoardings (₹7.25 L); at least 10 swimming academies in every catchment by 20 Feb.
"Summer fun with water": a family in the pool, the starter-kit price and the nearest partner pool.
Swim coaches and parents; beginner journeys (Pune: summer + summer camp, 50 influencers March to May; the water plan adds 3 months from 15 Mar).
First-swim videos from partner pools, beginner stories, the 30-day swim streak.
Parents 28 to 45, 5 km around stores and partner pools; push Learn to Swim sign-ups first, then kits.
AOPs and free products30%, ₹5.81 LHoardings25%, ₹4.84 LIn-store comms15%, ₹2.90 LInfluencers17%, ₹3.29 LEvents5%, ₹0.97 LContent3%, ₹0.58 LIn-mall3%, ₹0.58 LSocial boost and digital2%, ₹0.39 L
Decathlon IndiaSwimming goggles: sports you love at prices you love
Price-led product film from Decathlon India.
```

After clicking **Women's Day x sport ₹14.7 L**:
```text
1 to 14 Mar; Women's Day weekend Sat 6 and Sun 7 Mar (Pune event ₹1.5 L, 800 walk-ins expected)
Women's Day x sport
-Jan-Feb₹14.7 LMar, 25% of the month
Running ₹4.41 LFitness ₹5.89 LSwimming ₹4.41 L
₹14.7 LWest, 9% of Q1
₹7.24 LPune
₹5.33 LGujarat
₹2.14 LMP
Pune plan, March: Women's Day weekend event ₹1.5 L, 800 walk-ins expected.
"She plays": women from our own community (runners, swimmers, gym members), no models.
Women creators in fitness, running and swimming, 2 per city; a women's run and a Women Who Swim session.
Real women customers and teammates, their sport and their kit; women-only events.
Women 22 to 45, 5 km; event sign-ups first, then products.
AOPs and free products5%, ₹0.74 LHoardings15%, ₹2.21 LIn-store comms15%, ₹2.21 LInfluencers20%, ₹2.94 LEvents35%, ₹5.15 LContent5%, ₹0.74 LSocial boost and digital5%, ₹0.74 L
Decathlon IndiaWomen's Day 2025: Play Your Own Way
Last year's Women's Day film from Decathlon India: build on it.
```

After clicking **Running: Kiprun and race season ₹8.83 L**:
```text
March: Kiprun Challenger ₹9,999 launches (March to May)
Running: Kiprun and race season
-Jan-Feb₹8.83 LMar, 15% of the month
Running ₹8.83 L
₹8.83 LWest, 5% of Q1
₹4.35 LPune
₹3.20 LGujarat
₹1.28 LMP
The shoe and its price: Kiprun Challenger, ₹9,999.
Runners and run-club leaders (part of Pune's 50 summer influencers); a free gait check in store.
Run club Saturdays at 6 AM, bib-collection days, shoe fitting after the run.
Runners and race-participant lookalikes, 8 km.
AOPs and free products30%, ₹2.65 LHoardings20%, ₹1.77 LIn-store comms10%, ₹0.88 LInfluencers20%, ₹1.77 LEvents15%, ₹1.32 LContent5%, ₹0.44 L
```

After clicking **Travel and summer treks ₹8.83 L**:
```text
March, ahead of the summer holidays
Travel and summer treks
Mountain ₹8.83 L
"Pack for summer": trek bag, shoe and jacket with prices; near airports and highways where we have sites.
Travel and trek creators (part of Pune's 50 summer influencers): packing reels, weekend getaways near the city.
Packing lists, Himalayan summer treks, weekend getaways near the city.
Travel interests, 25 to 45, 10 km.
AOPs and free products5%, ₹0.44 LHoardings30%, ₹2.65 LIn-store comms20%, ₹1.77 LInfluencers25%, ₹2.21 LContent10%, ₹0.88 LSocial boost and digital10%, ₹0.88 L
Decathlon KoreaSS26 Hiking: Dry fast, grip hard
Two product promises as the whole campaign line.
```

After clicking **STATE Pune + Q1: Jan to Mar**:
```text
₹80.4 L for Q1, Pune
The 2027 ad budget for January to March (ultimate data sheet), split by our proposal below.
January₹28.7 L
Movement for All₹12.9 LClearance sale₹7.18 LEvery other sport, by what it sells₹7.18 L
February₹22.7 L
Movement for All₹4.54 LEvery other sport, by what it sells₹5.67 LNew arrivals (SS27)₹9.07 L₹2.27 L
March₹29.0 L
₹2.90 L₹2.90 LSummer water₹7.24 LWomen's Day x sport₹7.24 LRunning₹4.35 LTravel and summer treks₹4.35 L
Movement for All: New Year, New Moves ₹17.5 LClearance sale ₹7.18 LEvery other sport, by what it sells ₹15.8 LLocal moments ₹2.57 LNew arrivals (SS27) ₹12.0 LSummer water: learn to swim ₹9.51 LWomen's Day x sport ₹7.24 LRunning: Kiprun and race season ₹4.35 LTravel and summer treks ₹4.35 L
₹14.5 L18% / 9%
₹24.0 L30% / 22%
₹2.10 L3% / 6%
₹12.3 L15% / 21%
₹17.7 L22% / 8%
₹0.05 L0% / 0%
Budget share Turnover share, Q1 2026 (in-store + online). Fitness gets more than it sells on purpose: January is its month. Swimming and running are paid ahead of their season (April and May are their big months), mountain is carried by what it already sells. Not credited to a sport: clearance sale and local moments, ₹9.76 L.
₹19.6 L24% / 29%
₹16.3 L20% / 21%
₹15.1 L19% / 21%
₹13.4 L17% / 18%
₹7.83 L10% / 6%
₹4.20 L5% / 4%
₹1.74 L2% / 2%
₹2.31 L3% / 0%
Movement for All: New Year, New Moves₹17.5 L
Clearance sale₹7.18 L
Every other sport, by what it sells₹15.8 L
Local moments₹2.57 L
New arrivals (SS27)₹12.0 L
Summer water: learn to swim₹9.51 L
Women's Day x sport₹7.24 L
Running: Kiprun and race season₹4.35 L
Travel and summer treks₹4.35 L
-Jan-Feb₹4.35 LMar, 15% of the month
Mountain ₹4.35 L
The money by channel, Pune
AOPs and free products5%, ₹0.22 LHoardings30%, ₹1.30 LIn-store comms20%, ₹0.87 LInfluencers25%, ₹1.09 LContent10%, ₹0.43 LSocial boost and digital10%, ₹0.43 L
```

After clicking **STATE Pune + Q1: Jan to Mar > Movement for All: New Year, New Moves ₹17.5 L**:
```text
₹12.9 LJan, 45% of the month₹4.54 LFeb, 20% of the month-Mar
Fitness ₹17.5 L
AOPs and free products25%, ₹4.37 LHoardings20%, ₹3.49 LIn-store comms15%, ₹2.62 LInfluencers15%, ₹2.62 LEvents15%, ₹2.62 LContent5%, ₹0.87 LIn-mall3%, ₹0.52 LSocial boost and digital2%, ₹0.35 L
```

After clicking **STATE Pune + Q1: Jan to Mar > Clearance sale ₹7.18 L**:
```text
₹7.18 LJan, 25% of the month-Feb-Mar
Hoardings25%, ₹1.80 LIn-store comms30%, ₹2.16 LInfluencers30%, ₹2.16 LContent2%, ₹0.14 LIn-mall8%, ₹0.57 LSocial boost and digital5%, ₹0.36 L
```

After clicking **STATE Pune + Q1: Jan to Mar > Every other sport, by what it sells ₹15.8 L**:
```text
₹7.18 LJan, 25% of the month₹5.67 LFeb, 25% of the month₹2.90 LMar, 10% of the month
Running ₹3.15 LCycling ₹2.10 LMountain ₹7.99 LSwimming ₹2.46 LPickleball ₹0.05 L
AOPs and free products55%, ₹8.66 LHoardings15%, ₹2.36 LIn-store comms15%, ₹2.36 LInfluencers10%, ₹1.58 LContent5%, ₹0.79 L
```

After clicking **STATE Pune + Q1: Jan to Mar > Local moments ₹2.57 L**:
```text
₹1.44 LJan, 5% of the month₹1.13 LFeb, 5% of the month-Mar
In-store comms20%, ₹0.51 LEvents60%, ₹1.54 LContent10%, ₹0.26 LSocial boost and digital10%, ₹0.26 L
```

After clicking **STATE Pune + Q1: Jan to Mar > New arrivals (SS27) ₹12.0 L**:
```text
-Jan₹9.07 LFeb, 40% of the month₹2.90 LMar, 10% of the month
Running ₹4.79 LFitness ₹3.59 LSwimming ₹3.59 L
AOPs and free products15%, ₹1.80 LHoardings25%, ₹2.99 LIn-store comms30%, ₹3.59 LInfluencers17%, ₹2.03 LContent7%, ₹0.84 LIn-mall3%, ₹0.36 LSocial boost and digital3%, ₹0.36 L
```

After clicking **STATE Pune + Q1: Jan to Mar > Summer water: learn to swim ₹9.51 L**:
```text
-Jan₹2.27 LFeb, 10% of the month₹7.24 LMar, 25% of the month
Swimming ₹9.51 L
AOPs and free products30%, ₹2.85 LHoardings25%, ₹2.38 LIn-store comms15%, ₹1.43 LInfluencers17%, ₹1.62 LEvents5%, ₹0.48 LContent3%, ₹0.29 LIn-mall3%, ₹0.29 LSocial boost and digital2%, ₹0.19 L
```

After clicking **STATE Pune + Q1: Jan to Mar > Women's Day x sport ₹7.24 L**:
```text
-Jan-Feb₹7.24 LMar, 25% of the month
Running ₹2.17 LFitness ₹2.90 LSwimming ₹2.17 L
AOPs and free products5%, ₹0.36 LHoardings15%, ₹1.09 LIn-store comms15%, ₹1.09 LInfluencers20%, ₹1.45 LEvents35%, ₹2.53 LContent5%, ₹0.36 LSocial boost and digital5%, ₹0.36 L
```

After clicking **STATE Pune + Q1: Jan to Mar > Running: Kiprun and race season ₹4.35 L**:
```text
Running ₹4.35 L
AOPs and free products30%, ₹1.30 LHoardings20%, ₹0.87 LIn-store comms10%, ₹0.43 LInfluencers20%, ₹0.87 LEvents15%, ₹0.65 LContent5%, ₹0.22 L
```

After clicking **STATE MP + Q1: Jan to Mar**:
```text
₹28.5 L for Q1, MP
January₹11.9 L
Movement for All₹5.36 LClearance sale₹2.98 LEvery other sport, by what it sells₹2.98 L
February₹8.04 L
Movement for All₹1.61 LEvery other sport, by what it sells₹2.01 LNew arrivals (SS27)₹3.22 L₹0.80 L
March₹8.55 L
₹0.85 L₹0.85 LSummer water₹2.14 LWomen's Day x sport₹2.14 LRunning₹1.28 LTravel and summer treks₹1.28 L
Movement for All: New Year, New Moves ₹6.97 LClearance sale ₹2.98 LEvery other sport, by what it sells ₹5.85 LLocal moments ₹1.00 LNew arrivals (SS27) ₹4.07 LSummer water: learn to swim ₹2.94 LWomen's Day x sport ₹2.14 LRunning: Kiprun and race season ₹1.28 LTravel and summer treks ₹1.28 L
₹4.83 L17% / 10%
₹9.05 L32% / 20%
₹0.47 L2% / 4%
₹4.84 L17% / 28%
₹5.34 L19% / 5%
Budget share Turnover share, Q1 2026 (in-store + online). Fitness gets more than it sells on purpose: January is its month. Swimming and running are paid ahead of their season (April and May are their big months), mountain is carried by what it already sells. Not credited to a sport: clearance sale and local moments, ₹3.98 L.
₹7.01 L25% / 29%
₹5.73 L20% / 21%
₹5.38 L19% / 21%
₹4.72 L17% / 18%
₹2.73 L10% / 6%
₹1.47 L5% / 4%
₹0.66 L2% / 2%
₹0.80 L3% / 0%
Movement for All: New Year, New Moves₹6.97 L
Clearance sale₹2.98 L
Every other sport, by what it sells₹5.85 L
Local moments₹1.00 L
New arrivals (SS27)₹4.07 L
Summer water: learn to swim₹2.94 L
Women's Day x sport₹2.14 L
Running: Kiprun and race season₹1.28 L
Travel and summer treks₹1.28 L
-Jan-Feb₹1.28 LMar, 15% of the month
Mountain ₹1.28 L
The money by channel, MP
AOPs and free products5%, ₹0.06 LHoardings30%, ₹0.38 LIn-store comms20%, ₹0.26 LInfluencers25%, ₹0.32 LContent10%, ₹0.13 LSocial boost and digital10%, ₹0.13 L
```

After clicking **STATE MP + Q1: Jan to Mar > Movement for All: New Year, New Moves ₹6.97 L**:
```text
₹5.36 LJan, 45% of the month₹1.61 LFeb, 20% of the month-Mar
Fitness ₹6.97 L
AOPs and free products25%, ₹1.74 LHoardings20%, ₹1.39 LIn-store comms15%, ₹1.05 LInfluencers15%, ₹1.05 LEvents15%, ₹1.05 LContent5%, ₹0.35 LIn-mall3%, ₹0.21 LSocial boost and digital2%, ₹0.14 L
```

After clicking **STATE MP + Q1: Jan to Mar > Clearance sale ₹2.98 L**:
```text
₹2.98 LJan, 25% of the month-Feb-Mar
Hoardings25%, ₹0.74 LIn-store comms30%, ₹0.89 LInfluencers30%, ₹0.89 LContent2%, ₹0.06 LIn-mall8%, ₹0.24 LSocial boost and digital5%, ₹0.15 L
```

After clicking **STATE MP + Q1: Jan to Mar > Every other sport, by what it sells ₹5.85 L**:
```text
₹2.98 LJan, 25% of the month₹2.01 LFeb, 25% of the month₹0.85 LMar, 10% of the month
Running ₹1.28 LCycling ₹0.47 LMountain ₹3.56 LSwimming ₹0.54 L
AOPs and free products55%, ₹3.21 LHoardings15%, ₹0.88 LIn-store comms15%, ₹0.88 LInfluencers10%, ₹0.58 LContent5%, ₹0.29 L
```

After clicking **STATE MP + Q1: Jan to Mar > Local moments ₹1.00 L**:
```text
₹0.60 LJan, 5% of the month₹0.40 LFeb, 5% of the month-Mar
In-store comms20%, ₹0.20 LEvents60%, ₹0.60 LContent10%, ₹0.10 LSocial boost and digital10%, ₹0.10 L
```

After clicking **STATE MP + Q1: Jan to Mar > New arrivals (SS27) ₹4.07 L**:
```text
-Jan₹3.22 LFeb, 40% of the month₹0.85 LMar, 10% of the month
Running ₹1.63 LFitness ₹1.22 LSwimming ₹1.22 L
AOPs and free products15%, ₹0.61 LHoardings25%, ₹1.02 LIn-store comms30%, ₹1.22 LInfluencers17%, ₹0.69 LContent7%, ₹0.28 LIn-mall3%, ₹0.12 LSocial boost and digital3%, ₹0.12 L
```

After clicking **STATE MP + Q1: Jan to Mar > Summer water: learn to swim ₹2.94 L**:
```text
-Jan₹0.80 LFeb, 10% of the month₹2.14 LMar, 25% of the month
Swimming ₹2.94 L
AOPs and free products30%, ₹0.88 LHoardings25%, ₹0.74 LIn-store comms15%, ₹0.44 LInfluencers17%, ₹0.50 LEvents5%, ₹0.15 LContent3%, ₹0.09 LIn-mall3%, ₹0.09 LSocial boost and digital2%, ₹0.06 L
```

After clicking **STATE MP + Q1: Jan to Mar > Women's Day x sport ₹2.14 L**:
```text
-Jan-Feb₹2.14 LMar, 25% of the month
Running ₹0.64 LFitness ₹0.86 LSwimming ₹0.64 L
AOPs and free products5%, ₹0.11 LHoardings15%, ₹0.32 LIn-store comms15%, ₹0.32 LInfluencers20%, ₹0.43 LEvents35%, ₹0.75 LContent5%, ₹0.11 LSocial boost and digital5%, ₹0.11 L
```

After clicking **STATE MP + Q1: Jan to Mar > Running: Kiprun and race season ₹1.28 L**:
```text
Running ₹1.28 L
AOPs and free products30%, ₹0.38 LHoardings20%, ₹0.26 LIn-store comms10%, ₹0.13 LInfluencers20%, ₹0.26 LEvents15%, ₹0.19 LContent5%, ₹0.06 L
```

After clicking **STATE Gujarat + Q1: Jan to Mar**:
```text
₹59.5 L for Q1, Gujarat
January₹22.5 L
Movement for All₹10.1 LClearance sale₹5.63 LEvery other sport, by what it sells₹5.63 L
February₹15.7 L
Movement for All₹3.13 LEvery other sport, by what it sells₹3.92 LNew arrivals (SS27)₹6.26 L₹1.57 L
March₹21.3 L
₹2.13 L₹2.13 LSummer water₹5.33 LWomen's Day x sport₹5.33 LRunning₹3.20 LTravel and summer treks₹3.20 L
Movement for All: New Year, New Moves ₹13.3 LClearance sale ₹5.63 LEvery other sport, by what it sells ₹11.7 LLocal moments ₹1.91 LNew arrivals (SS27) ₹8.40 LSummer water: learn to swim ₹6.90 LWomen's Day x sport ₹5.33 LRunning: Kiprun and race season ₹3.20 LTravel and summer treks ₹3.20 L
₹10.7 L18% / 10%
₹17.9 L30% / 19%
₹1.27 L2% / 5%
₹9.00 L15% / 24%
₹12.3 L21% / 6%
₹0.74 L1% / 3%
Budget share Turnover share, Q1 2026 (in-store + online). Fitness gets more than it sells on purpose: January is its month. Swimming and running are paid ahead of their season (April and May are their big months), mountain is carried by what it already sells. Not credited to a sport: clearance sale and local moments, ₹7.54 L.
₹14.5 L24% / 29%
₹12.0 L20% / 21%
₹11.1 L19% / 21%
₹9.96 L17% / 18%
₹5.83 L10% / 6%
₹3.09 L5% / 4%
₹1.31 L2% / 2%
₹1.72 L3% / 0%
Movement for All: New Year, New Moves₹13.3 L
Clearance sale₹5.63 L
Every other sport, by what it sells₹11.7 L
Local moments₹1.91 L
New arrivals (SS27)₹8.40 L
Summer water: learn to swim₹6.90 L
Women's Day x sport₹5.33 L
Running: Kiprun and race season₹3.20 L
Travel and summer treks₹3.20 L
-Jan-Feb₹3.20 LMar, 15% of the month
Mountain ₹3.20 L
The money by channel, Gujarat
AOPs and free products5%, ₹0.16 LHoardings30%, ₹0.96 LIn-store comms20%, ₹0.64 LInfluencers25%, ₹0.80 LContent10%, ₹0.32 LSocial boost and digital10%, ₹0.32 L
```

After clicking **STATE Gujarat + Q1: Jan to Mar > Movement for All: New Year, New Moves ₹13.3 L**:
```text
₹10.1 LJan, 45% of the month₹3.13 LFeb, 20% of the month-Mar
Fitness ₹13.3 L
AOPs and free products25%, ₹3.32 LHoardings20%, ₹2.65 LIn-store comms15%, ₹1.99 LInfluencers15%, ₹1.99 LEvents15%, ₹1.99 LContent5%, ₹0.66 LIn-mall3%, ₹0.40 LSocial boost and digital2%, ₹0.27 L
```

After clicking **STATE Gujarat + Q1: Jan to Mar > Clearance sale ₹5.63 L**:
```text
₹5.63 LJan, 25% of the month-Feb-Mar
Hoardings25%, ₹1.41 LIn-store comms30%, ₹1.69 LInfluencers30%, ₹1.69 LContent2%, ₹0.11 LIn-mall8%, ₹0.45 LSocial boost and digital5%, ₹0.28 L
```

After clicking **STATE Gujarat + Q1: Jan to Mar > Every other sport, by what it sells ₹11.7 L**:
```text
₹5.63 LJan, 25% of the month₹3.92 LFeb, 25% of the month₹2.13 LMar, 10% of the month
Running ₹2.55 LCycling ₹1.27 LMountain ₹5.80 LSwimming ₹1.27 LCricket ₹0.74 LPickleball ₹0.05 L
AOPs and free products55%, ₹6.43 LHoardings15%, ₹1.75 LIn-store comms15%, ₹1.75 LInfluencers10%, ₹1.17 LContent5%, ₹0.58 L
```

After clicking **STATE Gujarat + Q1: Jan to Mar > Local moments ₹1.91 L**:
```text
₹1.13 LJan, 5% of the month₹0.78 LFeb, 5% of the month-Mar
In-store comms20%, ₹0.38 LEvents60%, ₹1.15 LContent10%, ₹0.19 LSocial boost and digital10%, ₹0.19 L
```

After clicking **STATE Gujarat + Q1: Jan to Mar > New arrivals (SS27) ₹8.40 L**:
```text
-Jan₹6.26 LFeb, 40% of the month₹2.13 LMar, 10% of the month
Running ₹3.36 LFitness ₹2.52 LSwimming ₹2.52 L
AOPs and free products15%, ₹1.26 LHoardings25%, ₹2.10 LIn-store comms30%, ₹2.52 LInfluencers17%, ₹1.43 LContent7%, ₹0.59 LIn-mall3%, ₹0.25 LSocial boost and digital3%, ₹0.25 L
```

After clicking **STATE Gujarat + Q1: Jan to Mar > Summer water: learn to swim ₹6.90 L**:
```text
-Jan₹1.57 LFeb, 10% of the month₹5.33 LMar, 25% of the month
Swimming ₹6.90 L
AOPs and free products30%, ₹2.07 LHoardings25%, ₹1.73 LIn-store comms15%, ₹1.04 LInfluencers17%, ₹1.17 LEvents5%, ₹0.35 LContent3%, ₹0.21 LIn-mall3%, ₹0.21 LSocial boost and digital2%, ₹0.14 L
```

After clicking **STATE Gujarat + Q1: Jan to Mar > Women's Day x sport ₹5.33 L**:
```text
-Jan-Feb₹5.33 LMar, 25% of the month
Running ₹1.60 LFitness ₹2.13 LSwimming ₹1.60 L
AOPs and free products5%, ₹0.27 LHoardings15%, ₹0.80 LIn-store comms15%, ₹0.80 LInfluencers20%, ₹1.07 LEvents35%, ₹1.87 LContent5%, ₹0.27 LSocial boost and digital5%, ₹0.27 L
```

After clicking **STATE Gujarat + Q1: Jan to Mar > Running: Kiprun and race season ₹3.20 L**:
```text
Running ₹3.20 L
AOPs and free products30%, ₹0.96 LHoardings20%, ₹0.64 LIn-store comms10%, ₹0.32 LInfluencers20%, ₹0.64 LEvents15%, ₹0.48 LContent5%, ₹0.16 L
```

#### plan2027 › `influencers`: Influencers 2027, campaign by campaign

```text
Every influencer campaign in the 2027 sheet: how many creators, what it costs, and when it runs. The quarters are coloured; campaigns without a date in the sheet sit across the year.
476influencers in 18 campaigns
₹49.83 Ltotal cost, ₹49,83,080
123Q1: 5 campaigns, ₹12.19 L
136Q2: 5 campaigns, ₹14.70 L
18Q3: 1 campaigns, ₹2.20 L
85Q4: 3 campaigns, ₹8.74 L
114no date yet: 4 campaigns, ₹12.00 L
JanFebMarAprMayJunJulAugSepOctNovDec
Movement Is For All1 to 31 Jan
17 influencers, ₹1.49 L
Clearance (January)10 Jan to 15 Feb
50 influencers, ₹5.00 L
New Arrivals24 Feb to 6 Mar
15 influencers, ₹1.60 L
Summer campaign6 to 15 Mar
35 influencers, ₹3.50 L
Gudi Padwa16 to 22 Mar
6 influencers, ₹60K
April summerApril
40 influencers, ₹4.50 L
April misc1 to 30 Apr
1 influencers, ₹20K
May summerMay
Monsoon15 to 30 May
15 influencers, ₹1.50 L
June misc: monsoonJune
40 influencers, ₹4.00 L
50th Anniversary24 to 26 Jul (sheet: 2026)
18 influencers, ₹2.20 L
Festive offer13 to 20 Oct (sheet: 2026)
DiwaliNo date in the sheet
9 influencers, ₹90K: no date in the sheet
Black Friday27 to 30 Nov
WinterDecember
20 influencers, ₹2.24 L
ChristmasNo date in the sheet
15 influencers, ₹2.10 L: no date in the sheet
Express Delivery + DigitalNo date in the sheet
60 influencers, ₹6.00 L: no date in the sheet
PlaygroundNo date in the sheet
30 influencers, ₹3.00 L: no date in the sheet
The sheet, row by rowInfluencers, cost, cost per influencer, and the views and cost per view written in the sheet
| Campaign | Dates | Influencers | Cost | Per influencer | | Views (sheet) | Cost per view (sheet)
| Movement Is For Allgo live 2 to 17 Jan | 1 to 31 Jan | 17 | ₹1,49,000 | ₹8,765 | | 14,01,400 | ₹0.11
| Clearance (January) | 10 Jan to 15 Feb | 50 | ₹5,00,000 | ₹10,000 | | 39,05,989 | ₹0.13
| New Arrivals | 24 Feb to 6 Mar | 15 | ₹1,60,000 | ₹10,667 | | 2,54,400 | ₹0.63
| Summer campaign | 6 to 15 Mar | 35 | ₹3,50,000 | ₹10,000 | | 10,65,288 | ₹0.33
| Gudi Padwa | 16 to 22 Mar | 6 | ₹60,000 | ₹10,000 | | 11,72,371 | ₹0.05
| April summer | April | 40 | ₹4,50,000 | ₹11,250 | | 3,70,000 | -
| April misc | 1 to 30 Apr | 1 | ₹20,000 | ₹20,000 | | 6,56,447 | ₹0.03
| May summer | May | 40 | ₹4,50,000 | ₹11,250 | | 8,49,835 | ₹0.53
| Monsoon | 15 to 30 May | 15 | ₹1,50,000 | ₹10,000 | | 0 | 0.00
| June misc: monsoon | June | 40 | ₹4,00,000 | ₹10,000 | | 0 | 0.00
| 50th Anniversary | 24 to 26 Jul (sheet: 2026) | 18 | ₹2,20,040 | ₹12,224 | | 9,14,409 | ₹0.24
| Festive offer | 13 to 20 Oct (sheet: 2026) | 15 | ₹1,50,000 | ₹10,000 | | 9,75,400 | ₹0.15
| Diwali | No date in the sheet | 9 | ₹90,000 | ₹10,000 | | 0 | 0.00
| Black Friday | 27 to 30 Nov | 50 | ₹5,00,000 | ₹10,000 | | 0 | 0.00
| Winter | December | 20 | ₹2,24,000 | ₹11,200 | | - | -
| Christmas | No date in the sheet | 15 | ₹2,10,040 | ₹14,003 | | 0 | 0.00
| Express Delivery + Digital | No date in the sheet | 60 | ₹6,00,000 | ₹10,000 | | - | -
| Playground | No date in the sheet | 30 | ₹3,00,000 | ₹10,000 | | - | -
| All | | 476 | ₹49,83,080 | ₹10,469 | | |
Source: the influencer sheet shared on 10 Nov 2026 (Campaign Name, Campaign Dates, Content Link, Go Live Date, Total Views, Total Cost, CPV). "Influencers" is the Content Link count. The July and October rows still carry 2026 dates in the sheet, and the views look like 2026 results; 2027 has its 51st anniversary in July and Black Friday on 26 to 29 Nov in the planner. Q1 here differs from the Pune spend plan in three places: new arrivals ₹1.60 L here vs ₹1.49 L; summer 35 + 40 + 40 creators here vs 50 for ₹5 L there; Gudi Padwa (6, ₹60,000) is only here.
This influencer sheet is Pune's. Gujarat and MP 2027 influencer plans are not in our files yet: send them and they go here.
```

#### plan2027 › `aops`: AOPs, store by store

```text
Practice places (areas of practice) we brand and work with: how many each store adds every month of Q1 and Q2, what they cost and the 2027 mix per store. Then the named places Pune has already tied up.
| Store | Live now | Jan | Feb | Mar | Q1 | Apr | May | Jun | Q2 | Nov 26 to Oct 27 | Cost per AOP | Q1 cost | 2027 mix per store (slide)
| Pune
| WakadPune | 58
| 7 | 7 | 8 | 22
| 5 | 4 | 4 | 13
| 54 | ₹25,000 | ₹5,50,000
| Travel 1, gym 1, yoga 1, racket 2
| WagholiPune | 15
| 5 | 5 | 5 | 15
| 5 | 4 | 3 | 12
| 45 | ₹25,000 | ₹3,75,000
| SGS MallPune | 6
| 3 | 4 | 3 | 10
| 3 | 4 | 2 | 9
| 33 | ₹25,000 | ₹2,50,000
| NIBMPune | -
| 4 | 3 | 4 | 11
| 4 | 3 | 2 | 9
| 32 | ₹24,000 | ₹2,64,000
| AmanoraPune | 22
| 3 | 2 | 2 | 7
| 31 | ₹25,000 | ₹2,50,000
| Pune | 101 | | 68 | | 50 | 195 | | ₹16,89,000 |
| Gujarat
| MoteraAhmedabad | -
| 4 | 4 | 5 | 13
| 5 | 4 | 2 | 11
| 38 | ₹24,000 | ₹3,12,000
| Travel 2, gym 3, yoga 2, racket 3
| NexusAhmedabad | -
| 4 | 4 | 4 | 12
| 4 | 4 | 3 | 11
| 37 | ₹24,000 | ₹2,88,000
| DumasSurat | -
| 4 | 4 | 2 | 10
| 36 | ₹23,000 | ₹2,76,000
| BarodaVadodara | 6
| 34 | ₹24,000 | ₹2,64,000
| RajkotRajkot | -
| 2 | 3 | 2 | 7
| 2 | 1 | 1 | 4
| 19 | ₹7,000 | ₹49,000
| Gujarat | 6 | | 55 | | 46 | 164 | | ₹11,89,000 |
| MP
| IndoreIndore | -
| 3 | 4 | 4 | 11
| 36 | ₹20,000 | ₹2,20,000
| BhopalBhopal | 7
| 33 | ₹20,000 | ₹2,00,000
| GwaliorGwalior | -
| 3 | 2 | 3 | 8
| 21 | ₹7,000 | ₹56,000
| MP | 7 | | 29 | | 23 | 90 | | ₹4,76,000 |
AOP plan by store and month (Nov 2026 to Oct 2027) and cost per AOP. "Live now" from the same plan. The mix per store (travel, gym, yoga, racket) is from the 2027 AOP slide. Named places: Pune partnerships sheet; Gujarat and MP lists are not in our files yet.
Pune: the places we already work with
Amanora22 practice places tied up
| Practice place | Sport | Area | Partnership
| Prime Badminton Academy | Badminton | Mundhwa - Kharadi Rd | December 2025 to December 2026
| I padel academy | Padel | ghorpadi Mundhwa road | December 2025 to December 2026
| Pro sports arena | Football + Badminton | Mundhwa Industrial Area | December 2025 to December 2026
| Legends academy | Football, Badminton,Cricket | ghorpadi Mundhwa road | December 2025 to December 2026
| AKV Swimming Pool | Swimming | Godbole vasti,Manjnri 412307 | December 2025 to December 2026
| Fortune Sports Club | Football, Cricket | Hadapsar | December 2025 to December 2026
| Infinity swimming pool | Swimming | Hadapsar | December 2025 to December 2026
| Sajag Badminton Academy | Badminton | Manjri Bk | November 2025 to November 2026
| Sportanss Club | Badminton | Manjari Rd | November 2025 to November 2026
| Kings Sports Club | Football, Cricket | Manjari BK | December 2025 to December 2026
| Core Fitness | Swimming | Manjri hadapsar | December 2025 to December 2026
| Legacy Sports | Swimming | | December 2025 to December 2026
| Supernova | Football | Keshav nagar | December 2025 to December 2026
| Top Play | Football | Upper Kharadi Main Rd | Jan 2026 to Jan 2027
| Conquer Fitness | Fitness | Tukai Darshan | Jan 2026 to Jan 2027
| Amanora Cricket Turf & Sports Club | Football / Cricket | Amanora Park Town Main Rd | -
| Grass & Goals Turf | Football / Cricket | Keshav Nagar | -
| Supernova Sports Arena | Football / Cricket | Manjari Rd | -
| Rabs Sports complex | Swimming / racket sports | Hadapsar , bhekrai nagar | -
| Fitlife swimming pool | Swimming & Fitness | Manjari, shewaleadi | -
| SS baminton rally | Racketsports | Phursungi , hadapsar | -
| Champions swimming pool | Swimming | DP road , hadapsar 411028 | -
SGS Mall6 practice places tied up
| Lotus Sports Arena | Turf | Eradwane | Jan 15 2026 - Jan 15 2026
| HC Rehab Center | Fitness | Mundhwa | Jan 2026-Jan2027
| TURF 11 | Turf | DP road | Jan 9 2026 - Jan 9 2027
| Green Vibes | Turf | Narayan Peth | JULY 2025- JULY2026
| The Paddock turf | Turf | LAW CLG RD | Jan 3 2026-Jan 3 2027
| NILU PHULE | Swimming Pool | SWARGATE | Jan 22 2026-Jan 22 2027
Wakad31 practice places tied up
| Bluewater Academy | Swimming | Balewadi | April 2026 - May 2027
| Proswim Academy | Swimming | Kaspate Wasti | April 2026 - May 2027
| UJ Turf (Wakad) | Football/Cricket | Wakad | March 2026 - March 2027
| Easy 2 Move | Gym/ Phyiso | Pashan sus | Nov 1 2025 to nov 1 2026
| Smash Zone | Badminton/Cricket | Wakad | Sept 2025-Sept 2026
| Area 51 | Badminton | Hinjewadi | December 2025-December 2026
| Fit In | Gym | Dehu Road | NOV 8 - NOV 8 2026
| Sungrace Yoga Wellness | Yoga | Wakad | nov 14 to nov 14 2026
| E2M Punawale clinic | Physio | Punawale | Nov 7 2025 - Nov 7 2026
| Swara Sports arena | Cricket/Football | Pimpri chinchwad | Nov 10 2025 - Nov 10 2026
| Champions Turf | Cricket/ Football | Pimpri Chinchwad | Nov 10 2025 - Nov 10 2026
| Riyasa Yoga Studio | Yoga and Zumba | Baner | Dec 7 2025 to Dec 7 2026
| Ravet Sports Arena | Football/Cricket | Ravet | Apr 26- Dec 26
| Galaxy Sports Arena | Football/Cricket | Wakad | Apr 26- Dec 26
| Kaverinagar sports arena | Football | Kaspatewasti | April 26- Dec 26
| UJ Turf (Walekarwadi) | Cricket/Football/Pickleball | Walekarwadi | March 2026 - March 2027
| Game point | Badminton | Wakad | 23rd May 2026- 23rd May 2027
| GPA Badminton Club | Badminton | Wakad | 23rd May 2026- 23rd May 2027
| Legends academy | Football | Hinjewadi | 1st June-31st Dec 2026
| Invictus academy | Football | Wakad | 1st June-31st Dec 2026
| Green rush arena | Football | Baner | 1st May-31st Dec 2026
| Shera sports arena | Football/Cricket | Pimpri chinchwad | 1st May-31st Dec 2026
| Dhananjay Sports Academy | Badminton/Football | Ravet | June 2026- June 2027
| Yoddha Sports Club | Badminton/Football | Pimpri chinchwad | August 2026-August 2027
| Eklavya Academy | Basketball/Football | Pashan | Sep 2026-July 2027
| Pickle & Cue | Pickleball | Mahalunge | Sept 2026-Sept 2027
| Paddle House | Pickelball | Wakad | Sept 2026-Sept 2027
| Runbhumi Twin Turf | Cricket/Badminton | Balewadi | Sept 2026-Sept 2027
| Alphaloop Sports Complex | Cricket/Footlball | Pimpri chinchwad | Sept 2026-Sept 2028
| Power Play Park | Padle/Pickleball/Cricket | Pimpri chinchwad | In Loop
| Deoso Sports Club | Football/Cricket | Punawale | In Loop
NIBM34 practice places tied up
| DELUXE BADMINTON Academy | Badminton | Wanwadi, Salunke Vihar Rd | Oct 25 - Oct 26
| Stepover Turf | Football | Handewadi | Nov 25 - Nov 26
| Kanade Sport Club | Football | Undri | Nov 25 - Nov 26
| Rcesports | Badminton & Football | Wanwadi, Salunke Vihar Rd | Oct 25 - Oct 26
| WARRIOR FITNESS NIBM | Fitness | Mohammed Wadi | Nov 25 - Nov 26
| MAFA Fitness | Fitness | Mohammed Wadi | Nov 25 - Nov 26
| Apple Fitness | Fitness | Wanowrie | Nov 25 - Nov 26
| Brio Turf | Football | UNDRI | Nov 25 - Nov 26
| Flux Academy | Badminton & Pickleball | UNDRI | Nov 25 - Nov 26
| Sports Zone | Football/Cricket | Mohammed Wadi | Dec 25 - Dec 26
| The Legends Turf | Cricket/ Football | Mohammedwadi | Jan 26 - Jan 27
| RPUG | Badminton | Mohammedwadi | Jan 26 - Jan 27
| Court Culture | Pickleball | Mohammedwadi | Jan 26 - Jan 27
| GRASS ROOTS | Football | Kondhwa | Dec 25 - Dec 26
| TAG | Fitness | Wanowrie | Dec 25 - Dec 26
| Pune Turf | Football | Mohammed Wadi | Dec 25 - Dec 26
| Edge Fitness | Fitness | Mohammed Wadi | Dec 25 - Dec 26
| GURU | Badminton/ Tennis | NIBM | Jan 26 - Jan 27
| Muscle Bar Sports Club | Football/Pickleball/ Football | Undri | Jan 26 - Jan 27
| Pickle Haus | Pickleball | NIBM | Jan 26 - Jan 27
| Cosmic Fitness | Fitness | Wanowrie | Jan 26 - Jan 27
| Edge Performance Centre | Fitness | Mohammadwadi | Dec 25 - Dec 26
| Wild Fit | Fitness | Wanowrie | Jan 26 - Jan 27
| Being Fit | Fitness | Sainik Vihar | Jan 26 - Jan 27
| AGK Fitness | Fitness | Mohammadwadi | Jan 26 - Jan 27
| Varunah Aquatics | Swimming | Handewadi | March 26 - March 27
| Ganga Dhaam Society Pool | Swimming | Ganga Dhaam | March 26 - March 27
| Ileseum | Swimming | Undri | April 26 - July 26
| Padel Haus | Padel | Wanowrie | March 26 - March 27
| PVS Sports Areana | Pickle, Kid's Coaching class | Undri | APR 26 - APR 27
| Ray Sports Academy | Cricket, Pickelball, Football | WANAWADI | APR 26 - APR 27
| My Fitness Journey | Fitness | NIBM | APR 26 - APR 27
| K- Square | Fitness | NIBM | APR 26 - APR 27
| Marias Yoga Classes | YOGA | Undri | MOU is still pending
Wagholi18 practice places tied up
| Shree Swimming Pool | Swimming | Vimannagar | EOY 2025
| Kothari International | Swimming | Kharadi | EOY 2025
| PlayShire arena | Badminton Football Cricket | Kharadi | MID 2026
| Swa Anubhooti Yog Shalla | Yoga | Wagholi | MID 2026
| Nucleus Gym | Gym | Kharadi | MID 2026
| Infinity Gym | Gym | Wagholi | EOY 2025
| Raj Swimming Pool | Swimming | Wagholi | from Feb 2027
| Sports Arena | Basketball Football | loahgoan | from Feb 2027
| Masco Fit Brand Kharadi | Gym | Kharadi | from Feb 2027
| ADYPU | Pickleball | Lohegoan | from Feb 2027
| CASA DE PADEL | PADEL | Kharadi | from Mar 2027
| Pickler - Pickleball court | Pickleball | loahgoan | from Mar 2027
| Atenx Performance Studio Kharadi | Gym in Kharadi | CROESS FIT | Kharadi | from May 2027
| VTP PURVANCHAL SOCIETY | FOOTBALL AND CRICKET | WAGHOLI | from Apr 2027
| CLUB 360 | football , cricket , gym , swimming | KHARADI | from Dec 2027
| Wisdom | Pickleball / Batmition | | -
| Kavya Swimming pool | Swimming | kharadi | from Apr 2027
| FIT AND FIGHT CLUB | CROSS FIR | WAGHOLI | from Apr 2027
```

#### plan2027 › `utsav`: One flagship event: what Sports Utsav did in one weekend
- img: assets/img/su/su-pune-ride.jpg [alt: Sports Utsav ride at Amanora]; assets/img/su/su-store-games.jpg [alt: Sports Utsav games in store]; assets/img/su/su-family-day.jpg [alt: Sports Utsav family day]; assets/img/su/su-store-crowd.jpg [alt: Sports Utsav crowd at the store]

```text
Sports Utsav, 23 and 24 May 2026: every store turned into a playground. The proof that the base of the pyramid sells: one weekend, 55 activations in Pune, Gujarat and MP, and 126% of the participants we planned. It comes back in May 2027 (event IP in the planner).
16,246people played in our 13 stores
126%of the 12,890 we planned
55activations: 12 runs, 12 rides, 12 tournaments, 6 experiences, 13 challenges
323%Wagholi: 2,935 against 910 planned
| Store | Planned | Played | | Hit
| WagholiPune | 910 | 2,935 | | 323%
| IndoreMP | 860 | 2,169 | | 252%
| BhopalMP | 680 | 1,934 | | 284%
| Dumas RoadGujarat | 700 | 1,782 | | 255%
| MoteraGujarat | 1,480 | 1,337 | | 90%
| NIBMPune | 550 | 1,146 | | 208%
| WakadPune | 1,060 | 1,064 | | 100%
| NexusGujarat | 2,200 | 958 | | 44%
| BarodaGujarat | 1,790 | 956 | | 53%
| AmanoraPune | 1,030 | 711 | | 69%
| SGS MallPune | 950 | 668 | | 70%
| RajkotGujarat | 380 | 311 | | 82%
| GwaliorMP | 300 | 275 | | 92%
Source: Sports Utsav 26 Campaign and Event Master Deck (DECATHLON Play). National: 2,07,547 people, 650+ events, 51% new to Decathlon, ₹2.06 Cr turnover, ₹2,362 average basket, 3.29 lakh Instagram views. Budget: Pune ₹3.80 L, Gujarat and MP ₹4.05 L.
```

After clicking **STATE Pune + Q1: Jan to Mar**:
```text
6,524people played in our 5 stores, Pune
145%of the 4,500 we planned
```

After clicking **STATE MP + Q1: Jan to Mar**:
```text
4,378people played in our 3 stores, MP
238%of the 1,840 we planned
284%Bhopal: 1,934 against 680 planned
```

After clicking **STATE Gujarat + Q1: Jan to Mar**:
```text
5,344people played in our 5 stores, Gujarat
82%of the 6,550 we planned
255%Dumas Road: 1,782 against 700 planned
```

#### plan2027 › `sports`: The sports, Q1

```text
Turnover is what each sport sold in the same quarter of 2026, in-store (offline) plus online (out of store), with the split shown, and its share of everything we sold. Growth, budget and AOPs are our proposal, to confirm: the Q1 budget is what the sport gets from the Q1 playbook above; the Q2 budget is a share of each state's 2027 ad budget; the AOPs are each state's planned practice places for the quarter, split by sport.
Water sports in detail: the week-by-week plan for every store
| Sport | Where | Turnover, Q1 2026 (in-store + online), and the 2027 goal | Share of all turnover | In-store / online | Growth | Budget | AOPs
| Running | Pune, Gujarat, MP
|
₹11.92 Cr → ₹14.06 Cr
| 9.5% | ₹10.37 Cr / ₹1.55 Cr
87% / 13%
| +18% | ₹30.0 L | 29
| Fitness | Pune, Gujarat, MP
₹25.66 Cr → ₹29.51 Cr
| 20.5% | ₹22.77 Cr / ₹2.89 Cr
89% / 11%
| +15% | ₹50.9 L | 41
| Cycling | Pune, Gujarat, MP
₹6.78 Cr → ₹8.14 Cr
| 5.4% | ₹5.92 Cr / ₹85.9 L
| +20% | ₹3.84 L | 18
| Mountain | Pune, Gujarat, MP
₹28.60 Cr → ₹32.03 Cr
| 22.9% | ₹24.13 Cr / ₹4.48 Cr
84% / 16%
| +12% | ₹26.2 L | 16
| Swimming | Pune, Gujarat, MP
₹8.84 Cr → ₹10.16 Cr
| 7.1% | ₹7.20 Cr / ₹1.64 Cr
81% / 19%
| +15% | ₹35.4 L | 18
| Cricket | Gujarat
₹3.75 Cr → ₹4.69 Cr
| 3.0% | ₹3.52 Cr / ₹23.6 L
94% / 6%
| +25% | ₹0.74 L | 10
| Pickleball | Gujarat, Pune
₹23.5 L → ₹37.5 L
| 0.2% | ₹19.0 L / ₹4.48 L
| +60% | ₹0.10 L | 20
| 7 sports | | ₹85.79 Cr → ₹98.98 Cr | 68.7% | ₹74.09 Cr / ₹11.70 Cr | +15% | ₹1.47 Cr | 152
2026, same months 2027 goal. Share: of all West turnover in those months (every sport). In-store is offline, online is out of store.
Running
Pune, Gujarat, MP
Race season is ours: a Decathlon desk at every start line, and the shoe they run in.
₹11.92 CrQ1 2026, in-store + online (9.5% of all turnover)
₹14.06 Cr2027 goal, +18%
₹30.0 Lbudget
29AOPs: run clubs, tracks and race organisers
2026 turnover by state, Q1: in-store (offline) and online
Pune₹5.25 Cr
Gujarat₹4.71 Cr
MP₹1.96 Cr
In-store Online: 13%
2026 turnover, month by month (in-store + online)
JFMAMJJASO
Pune₹14.5 L, 14 AOPsGujarat₹10.7 L, 8 AOPsMP₹4.83 L, 7 AOPs
Q1: what we do
Bib collection at 30 races, in our stores: 20,000 walk-ins (Q1 plan)
Community meetup with 500 runners inside our stores (Q1 plan)
A run club in every store, Saturday 6 AM, with shoe fitting after the run
Footwear is the 2027 focus: new-arrival shoes at every start line
Fitness
People start in January. Be in the room when they do.
₹25.66 CrQ1 2026, in-store + online (20.5% of all turnover)
₹29.51 Cr2027 goal, +15%
₹50.9 Lbudget
41AOPs: gyms, yoga and pilates studios
Pune₹13.26 Cr
Gujarat₹8.62 Cr
MP₹3.79 Cr
In-store Online: 11%
Pune₹24.0 L, 20 AOPsGujarat₹17.9 L, 12 AOPsMP₹9.05 L, 9 AOPs
Move Your Way: 3,500 registrations, fit sessions and in-store challenges (Q1 plan)
Movement for All in all 13 stores in January
Women's Day weekend: a women-only session, a sport to try, then shopping with the day's offer
Gym tie-ups: member offers at partner gyms, their members train in our kit
Cycling
Pune hosts India's biggest cycle race in January. Ride with it.
₹6.78 CrQ1 2026, in-store + online (5.4% of all turnover)
₹8.14 Cr2027 goal, +20%
₹3.84 Lbudget
18AOPs: cycling clubs and bike-friendly societies
Pune₹3.58 Cr
Gujarat₹2.48 Cr
MP₹71.5 L
Pune₹2.10 L, 10 AOPsGujarat₹1.27 L, 4 AOPsMP₹0.47 L, 4 AOPs
Bajaj Pune Grand Tour, 26-31 January: fan rides from all 5 Pune stores to the stage routes (about 2.5 million watched in 2026)
Workshop Mela in 10 apartments: 250 bikes serviced, 25 buybacks (Q1 plan)
Gujarat and MP: Sunday group rides from every store
Mountain
Our biggest sport: winter treks first, then the Himalayan summer.
₹28.60 CrQ1 2026, in-store + online (22.9% of all turnover)
₹32.03 Cr2027 goal, +12%
₹26.2 Lbudget
16AOPs: trek organisers and travel agencies
Pune₹12.75 Cr
Gujarat₹10.63 Cr
MP₹5.22 Cr
In-store Online: 16%
Pune₹12.3 L, 8 AOPsGujarat₹9.00 L, 4 AOPsMP₹4.84 L, 4 AOPs
Winter weekend treks with organisers in every city; their gear list opens in our app
Camping in February, Pune's sport of the month: weekend camps in our tents
Keep the 50 travel-agency affiliates from the Q4 winter campaign working
Swimming
Summer is short. Sign them up before it starts.
₹8.84 CrQ1 2026, in-store + online (7.1% of all turnover)
₹10.16 Cr2027 goal, +15%
₹35.4 Lbudget
18AOPs: swimming pools and swim academies
Pune₹4.97 Cr
Gujarat₹2.92 Cr
MP₹94.7 L
In-store Online: 19%
Pune₹17.7 L, 6 AOPsGujarat₹12.3 L, 7 AOPsMP₹5.34 L, 5 AOPs
Sign pool partners in January and February, so the summer batches are ours
Learn to Swim registrations open in March, in store and in the app
Swim kit (goggles, caps, costumes) on the shop floor from March
Cricket
Gujarat
Our Motera store sits next to the world's biggest cricket stadium. Use it.
₹3.75 CrQ1 2026, in-store + online (3.0% of all turnover)
₹4.69 Cr2027 goal, +25%
₹0.74 Lbudget
10AOPs: cricket academies and box-cricket arenas
Pune₹1.73 Cr
Gujarat₹1.52 Cr
MP₹50.5 L
In-store Online: 6%
Gujarat₹0.74 L, 10 AOPs
Box cricket night league in Surat, from the Adajan opening to 16 January
Society and corporate box-cricket leagues in Ahmedabad, Surat, Baroda and Rajkot
IPL from 14 March: gully cricket gear in every Gujarat store, with creator reels
Pickleball
Gujarat, Pune
The fastest-growing sport in our Gujarat stores: Rajkot +900%, Motera +175%.
₹23.5 LQ1 2026, in-store + online (0.2% of all turnover)
₹37.5 L2027 goal, +60%
₹0.10 Lbudget
20AOPs: pickleball courts and clubs
Pune₹8.32 L
Gujarat₹10.5 L
MP₹4.65 L
Pune₹0.05 L, 10 AOPsGujarat₹0.05 L, 10 AOPs
Pickle Premier League in Surat, from the Adajan opening to 16 January
Society leagues in Ahmedabad: we bring the nets, paddles and balls
March is Pune's pickleball month: paddle demo days at Pune courts
```

After clicking **STATE Pune + Q1: Jan to Mar**:
```text
₹5.25 Cr → ₹6.19 Cr
| 8.6% | ₹4.85 Cr / ₹40.0 L
92% / 8%
| +18% | ₹14.5 L | 14
₹13.26 Cr → ₹15.25 Cr
| 21.7% | ₹11.85 Cr / ₹1.41 Cr
| +15% | ₹24.0 L | 20
₹3.58 Cr → ₹4.30 Cr
| 5.9% | ₹3.16 Cr / ₹42.2 L
88% / 12%
| +20% | ₹2.10 L | 10
₹12.75 Cr → ₹14.28 Cr
| 20.9% | ₹11.05 Cr / ₹1.71 Cr
| +12% | ₹12.3 L | 8
₹4.97 Cr → ₹5.71 Cr
| 8.1% | ₹4.13 Cr / ₹83.6 L
83% / 17%
| +15% | ₹17.7 L | 6
₹8.32 L → ₹13.3 L
| 0.1% | ₹5.81 L / ₹2.52 L
70% / 30%
| +60% | ₹0.05 L | 10
| 6 sports | | ₹39.89 Cr → ₹45.86 Cr | 65.4% | ₹35.09 Cr / ₹4.80 Cr | +15% | ₹70.6 L | 68
₹5.25 CrQ1 2026, in-store + online (8.6% of all turnover)
₹6.19 Cr2027 goal, +18%
₹14.5 Lbudget
14AOPs: run clubs, tracks and race organisers
In-store Online: 8%
Pune₹14.5 L, 14 AOPs
₹13.26 CrQ1 2026, in-store + online (21.7% of all turnover)
₹15.25 Cr2027 goal, +15%
₹24.0 Lbudget
20AOPs: gyms, yoga and pilates studios
Pune₹24.0 L, 20 AOPs
₹3.58 CrQ1 2026, in-store + online (5.9% of all turnover)
₹4.30 Cr2027 goal, +20%
₹2.10 Lbudget
10AOPs: cycling clubs and bike-friendly societies
In-store Online: 12%
Pune₹2.10 L, 10 AOPs
₹12.75 CrQ1 2026, in-store + online (20.9% of all turnover)
₹14.28 Cr2027 goal, +12%
₹12.3 Lbudget
8AOPs: trek organisers and travel agencies
Pune₹12.3 L, 8 AOPs
₹4.97 CrQ1 2026, in-store + online (8.1% of all turnover)
₹5.71 Cr2027 goal, +15%
₹17.7 Lbudget
6AOPs: swimming pools and swim academies
In-store Online: 17%
Pune₹17.7 L, 6 AOPs
₹8.32 LQ1 2026, in-store + online (0.1% of all turnover)
₹13.3 L2027 goal, +60%
₹0.05 Lbudget
10AOPs: pickleball courts and clubs
In-store Online: 30%
Pune₹0.05 L, 10 AOPs
```

After clicking **STATE Pune + Q2: Apr to Jun**:
```text
The sports, Q2
| Sport | Where | Turnover, Q2 2026 (in-store + online), and the 2027 goal | Share of all turnover | In-store / online | Growth | Budget | AOPs
₹6.08 Cr → ₹6.68 Cr
| 7.7% | ₹5.63 Cr / ₹44.6 L
93% / 7%
| +10% | ₹6.21 L | 5
₹15.56 Cr → ₹17.89 Cr
| 19.8% | ₹13.98 Cr / ₹1.57 Cr
90% / 10%
| +15% | ₹12.4 L | 12
₹4.14 Cr → ₹4.76 Cr
| 5.3% | ₹3.66 Cr / ₹47.3 L
| +15% | ₹10.4 L | 7
₹18.39 Cr → ₹20.59 Cr
| 23.4% | ₹16.55 Cr / ₹1.84 Cr
| +12% | ₹12.4 L | 8
₹7.93 Cr → ₹9.91 Cr
| 10.1% | ₹7.04 Cr / ₹88.8 L
| +25% | ₹14.5 L | 14
₹9.49 L → ₹15.2 L
| 0.1% | ₹7.49 L / ₹2.00 L
79% / 21%
| +60% | ₹3.11 L | 4
| 6 sports | | ₹52.18 Cr → ₹59.99 Cr | 66.5% | ₹46.95 Cr / ₹5.24 Cr | +15% | ₹59.0 L | 50
₹6.08 CrQ2 2026, in-store + online (7.7% of all turnover)
₹6.68 Cr2027 goal, +10%
₹6.21 Lbudget
5AOPs: run clubs, tracks and race organisers
2026 turnover by state, Q2: in-store (offline) and online
Pune₹6.08 Cr
In-store Online: 7%
Pune₹6.21 L, 5 AOPs
Q2: what we do
Kiprun Challenger at ₹9,999 (March to May): try-on runs from every store
Summer run clubs move to 5:30 AM, with hydration packs at the finish
Global Running Day, 2 June: one route per city that finishes at the store
₹15.56 CrQ2 2026, in-store + online (19.8% of all turnover)
₹17.89 Cr2027 goal, +15%
₹12.4 Lbudget
12AOPs: gyms, yoga and pilates studios
Pune₹15.56 Cr
In-store Online: 10%
Pune₹12.4 L, 12 AOPs
Yoga Day: 21 days of yoga from 1 June in stores and partner studios, ending Monday 21 June
Summer 6 AM workouts at partner gyms and on store playgrounds
Sports Utsav in May with a fitness zone in every store
₹4.14 CrQ2 2026, in-store + online (5.3% of all turnover)
₹4.76 Cr2027 goal, +15%
₹10.4 Lbudget
7AOPs: cycling clubs and bike-friendly societies
Pune₹4.14 Cr
Pune₹10.4 L, 7 AOPs
Learn-to-ride camps for kids in April and May, with a first-bike offer
World Bicycle Day, 3 June: ride-to-work mornings from every store
A service desk in every store before the monsoon
₹18.39 CrQ2 2026, in-store + online (23.4% of all turnover)
₹20.59 Cr2027 goal, +12%
Pune₹18.39 Cr
Pune₹12.4 L, 8 AOPs
Himalayan summer: trek organisers share their gear list, customers shop it in one tap
Summer holiday travel: luggage, backpacks and kids' outdoor kit
Sahyadri monsoon treks open in June: rainwear and trek shoes up front
₹7.93 CrQ2 2026, in-store + online (10.1% of all turnover)
₹9.91 Cr2027 goal, +25%
14AOPs: swimming pools and swim academies
Pune₹7.93 Cr
Learn to Swim summer batches at partner pools, April to June, kids first
May is Pune's swimming month
Swim galas in June: every child who finishes collects a certificate in store
₹9.49 LQ2 2026, in-store + online (0.1% of all turnover)
₹15.2 L2027 goal, +60%
₹3.11 Lbudget
4AOPs: pickleball courts and clubs
Pune₹9.49 L
In-store Online: 21%
Pune₹3.11 L, 4 AOPs
Evening leagues and kids' coaching at partner courts
```

After clicking **STATE Pune + Q1 and Q2**:
```text
The sports, Q1 and Q2
| Sport | Where | Turnover, Q1 and Q2 2026 (in-store + online), and the 2027 goal | Share of all turnover | In-store / online | Growth | Budget | AOPs
₹11.32 Cr → ₹12.87 Cr
| 8.1% | ₹10.48 Cr / ₹84.6 L
| +14% | ₹20.7 L | 19
₹28.82 Cr → ₹33.14 Cr
| 20.7% | ₹25.83 Cr / ₹2.98 Cr
| +15% | ₹36.4 L | 32
₹7.72 Cr → ₹9.06 Cr
| 5.5% | ₹6.82 Cr / ₹89.5 L
| +17% | ₹12.5 L | 17
₹31.14 Cr → ₹34.88 Cr
| 22.3% | ₹27.60 Cr / ₹3.54 Cr
| +12% | ₹24.8 L | 16
₹12.90 Cr → ₹15.62 Cr
| 9.2% | ₹11.17 Cr / ₹1.72 Cr
| +21% | ₹32.2 L | 20
₹17.8 L → ₹28.5 L
| 0.1% | ₹13.3 L / ₹4.51 L
75% / 25%
| +60% | ₹3.16 L | 14
| 6 sports | | ₹92.07 Cr → ₹105.85 Cr | 66.0% | ₹82.04 Cr / ₹10.04 Cr | +15% | ₹1.30 Cr | 118
₹11.32 CrQ1 and Q2 2026, in-store + online (8.1% of all turnover)
₹12.87 Cr2027 goal, +14%
₹20.7 Lbudget
19AOPs: run clubs, tracks and race organisers
2026 turnover by state, Q1 and Q2: in-store (offline) and online
Pune₹11.32 Cr
Pune₹20.7 L, 19 AOPs
₹28.82 CrQ1 and Q2 2026, in-store + online (20.7% of all turnover)
₹33.14 Cr2027 goal, +15%
₹36.4 Lbudget
32AOPs: gyms, yoga and pilates studios
Pune₹28.82 Cr
Pune₹36.4 L, 32 AOPs
₹7.72 CrQ1 and Q2 2026, in-store + online (5.5% of all turnover)
₹9.06 Cr2027 goal, +17%
₹12.5 Lbudget
17AOPs: cycling clubs and bike-friendly societies
Pune₹7.72 Cr
Pune₹12.5 L, 17 AOPs
₹31.14 CrQ1 and Q2 2026, in-store + online (22.3% of all turnover)
₹34.88 Cr2027 goal, +12%
₹24.8 Lbudget
Pune₹31.14 Cr
Pune₹24.8 L, 16 AOPs
₹12.90 CrQ1 and Q2 2026, in-store + online (9.2% of all turnover)
₹15.62 Cr2027 goal, +21%
₹32.2 Lbudget
20AOPs: swimming pools and swim academies
Pune₹12.90 Cr
Pune₹32.2 L, 20 AOPs
₹17.8 LQ1 and Q2 2026, in-store + online (0.1% of all turnover)
₹28.5 L2027 goal, +60%
₹3.16 Lbudget
14AOPs: pickleball courts and clubs
Pune₹17.8 L
In-store Online: 25%
Pune₹3.16 L, 14 AOPs
```

After clicking **STATE West + Q2: Apr to Jun**:
```text
₹13.03 Cr → ₹14.33 Cr
| 7.9% | ₹11.56 Cr / ₹1.47 Cr
| +10% | ₹11.1 L | 11
₹31.59 Cr → ₹36.33 Cr
| 19.2% | ₹28.18 Cr / ₹3.41 Cr
| +15% | ₹24.4 L | 26
₹7.87 Cr → ₹9.05 Cr
| 4.8% | ₹6.94 Cr / ₹92.7 L
| +15% | ₹17.0 L | 13
₹40.75 Cr → ₹45.65 Cr
| 24.8% | ₹35.82 Cr / ₹4.94 Cr
| +12% | ₹24.1 L | 16
₹16.06 Cr → ₹20.08 Cr
| 9.8% | ₹14.32 Cr / ₹1.75 Cr
| +25% | ₹29.4 L | 31
₹5.43 Cr → ₹6.79 Cr
| 3.3% | ₹5.19 Cr / ₹24.5 L
95% / 5%
| +25% | ₹9.28 L | 10
₹29.4 L → ₹47.1 L
| 0.2% | ₹25.5 L / ₹3.97 L
86% / 14%
| +60% | ₹9.29 L | 12
| 7 sports | | ₹115.04 Cr → ₹132.70 Cr | 70.1% | ₹102.26 Cr / ₹12.78 Cr | +15% | ₹1.25 Cr | 119
₹13.03 CrQ2 2026, in-store + online (7.9% of all turnover)
₹14.33 Cr2027 goal, +10%
₹11.1 Lbudget
11AOPs: run clubs, tracks and race organisers
Gujarat₹4.91 Cr
MP₹2.04 Cr
Pune₹6.21 L, 5 AOPsGujarat₹3.09 L, 3 AOPsMP₹1.83 L, 3 AOPs
₹31.59 CrQ2 2026, in-store + online (19.2% of all turnover)
₹36.33 Cr2027 goal, +15%
₹24.4 Lbudget
26AOPs: gyms, yoga and pilates studios
Gujarat₹11.56 Cr
MP₹4.47 Cr
Pune₹12.4 L, 12 AOPsGujarat₹7.73 L, 8 AOPsMP₹4.27 L, 6 AOPs
₹7.87 CrQ2 2026, in-store + online (4.8% of all turnover)
₹9.05 Cr2027 goal, +15%
₹17.0 Lbudget
13AOPs: cycling clubs and bike-friendly societies
Gujarat₹2.93 Cr
MP₹80.6 L
Pune₹10.4 L, 7 AOPsGujarat₹3.87 L, 3 AOPsMP₹2.74 L, 3 AOPs
₹40.75 CrQ2 2026, in-store + online (24.8% of all turnover)
₹45.65 Cr2027 goal, +12%
₹24.1 Lbudget
Gujarat₹16.11 Cr
MP₹6.25 Cr
Pune₹12.4 L, 8 AOPsGujarat₹7.73 L, 4 AOPsMP₹3.96 L, 4 AOPs
₹16.06 CrQ2 2026, in-store + online (9.8% of all turnover)
₹20.08 Cr2027 goal, +25%
₹29.4 Lbudget
31AOPs: swimming pools and swim academies
Gujarat₹5.90 Cr
MP₹2.23 Cr
Pune₹14.5 L, 14 AOPsGujarat₹10.1 L, 10 AOPsMP₹4.88 L, 7 AOPs
₹5.43 CrQ2 2026, in-store + online (3.3% of all turnover)
₹6.79 Cr2027 goal, +25%
₹9.28 Lbudget
Pune₹2.40 Cr
Gujarat₹2.40 Cr
MP₹62.8 L
In-store Online: 5%
Gujarat₹9.28 L, 10 AOPs
Gujarat Titans match days at Motera, next to the stadium: a fan zone and a kit desk
Summer cricket camps with academies: the camp kit list is shopped in store
IPL final, 30 May: a watch party on the Motera playground
₹29.4 LQ2 2026, in-store + online (0.2% of all turnover)
₹47.1 L2027 goal, +60%
₹9.29 Lbudget
12AOPs: pickleball courts and clubs
Gujarat₹15.8 L
MP₹4.18 L
In-store Online: 14%
Pune₹3.11 L, 4 AOPsGujarat₹6.19 L, 8 AOPs
Inter-store pickleball cup across the 5 Gujarat stores, April to June
Finals on the Motera playground in June
```

After clicking **STATE West + Q1 and Q2**:
```text
₹24.95 Cr → ₹28.40 Cr
| 8.6% | ₹21.93 Cr / ₹3.02 Cr
| +14% | ₹41.1 L | 40
₹57.26 Cr → ₹65.85 Cr
| 19.8% | ₹50.95 Cr / ₹6.31 Cr
| +15% | ₹75.4 L | 67
₹14.65 Cr → ₹17.19 Cr
| 5.1% | ₹12.87 Cr / ₹1.79 Cr
| +17% | ₹20.8 L | 31
₹69.36 Cr → ₹77.68 Cr
| 24.0% | ₹59.94 Cr / ₹9.41 Cr
| +12% | ₹50.3 L | 32
₹24.90 Cr → ₹30.24 Cr
| 8.6% | ₹21.52 Cr / ₹3.38 Cr
| +21% | ₹64.8 L | 49
₹9.19 Cr → ₹11.49 Cr
| 3.2% | ₹8.71 Cr / ₹48.1 L
| +25% | ₹10.0 L | 20
₹52.9 L → ₹84.6 L
| 0.2% | ₹44.4 L / ₹8.46 L
| +60% | ₹9.39 L | 32
| 7 sports | | ₹200.83 Cr → ₹231.68 Cr | 69.5% | ₹176.36 Cr / ₹24.48 Cr | +15% | ₹2.72 Cr | 271
₹24.95 CrQ1 and Q2 2026, in-store + online (8.6% of all turnover)
₹28.40 Cr2027 goal, +14%
₹41.1 Lbudget
40AOPs: run clubs, tracks and race organisers
Gujarat₹9.62 Cr
MP₹4.01 Cr
Pune₹20.7 L, 19 AOPsGujarat₹13.8 L, 11 AOPsMP₹6.66 L, 10 AOPs
₹57.26 CrQ1 and Q2 2026, in-store + online (19.8% of all turnover)
₹65.85 Cr2027 goal, +15%
₹75.4 Lbudget
67AOPs: gyms, yoga and pilates studios
Gujarat₹20.18 Cr
MP₹8.26 Cr
Pune₹36.4 L, 32 AOPsGujarat₹25.7 L, 20 AOPsMP₹13.3 L, 15 AOPs
₹14.65 CrQ1 and Q2 2026, in-store + online (5.1% of all turnover)
₹17.19 Cr2027 goal, +17%
₹20.8 Lbudget
31AOPs: cycling clubs and bike-friendly societies
Gujarat₹5.41 Cr
MP₹1.52 Cr
Pune₹12.5 L, 17 AOPsGujarat₹5.14 L, 7 AOPsMP₹3.21 L, 7 AOPs
₹69.36 CrQ1 and Q2 2026, in-store + online (24.0% of all turnover)
₹77.68 Cr2027 goal, +12%
₹50.3 Lbudget
32AOPs: trek organisers and travel agencies
Gujarat₹26.74 Cr
MP₹11.47 Cr
Pune₹24.8 L, 16 AOPsGujarat₹16.7 L, 8 AOPsMP₹8.80 L, 8 AOPs
₹24.90 CrQ1 and Q2 2026, in-store + online (8.6% of all turnover)
₹30.24 Cr2027 goal, +21%
₹64.8 Lbudget
49AOPs: swimming pools and swim academies
Gujarat₹8.83 Cr
MP₹3.18 Cr
Pune₹32.2 L, 20 AOPsGujarat₹22.3 L, 17 AOPsMP₹10.2 L, 12 AOPs
₹9.19 CrQ1 and Q2 2026, in-store + online (3.2% of all turnover)
₹11.49 Cr2027 goal, +25%
₹10.0 Lbudget
20AOPs: cricket academies and box-cricket arenas
Pune₹4.13 Cr
Gujarat₹3.93 Cr
MP₹1.13 Cr
Gujarat₹10.0 L, 20 AOPs
₹52.9 LQ1 and Q2 2026, in-store + online (0.2% of all turnover)
₹84.6 L2027 goal, +60%
₹9.39 Lbudget
32AOPs: pickleball courts and clubs
Gujarat₹26.3 L
MP₹8.82 L
Pune₹3.16 L, 14 AOPsGujarat₹6.24 L, 18 AOPs
```

After clicking **STATE MP + Q1: Jan to Mar**:
```text
₹1.96 Cr → ₹2.32 Cr
| 10.5% | ₹1.52 Cr / ₹44.5 L
77% / 23%
| +18% | ₹4.83 L | 7
₹3.79 Cr → ₹4.36 Cr
| 20.2% | ₹3.24 Cr / ₹54.7 L
| +15% | ₹9.05 L | 9
₹71.5 L → ₹85.8 L
| 3.8% | ₹53.9 L / ₹17.6 L
| +20% | ₹0.47 L | 4
₹5.22 Cr → ₹5.85 Cr
| 27.9% | ₹4.18 Cr / ₹1.04 Cr
80% / 20%
| +12% | ₹4.84 L | 4
₹94.7 L → ₹1.09 Cr
| 5.1% | ₹75.0 L / ₹19.7 L
| +15% | ₹5.34 L | 5
| 5 sports | | ₹12.64 Cr → ₹14.47 Cr | 67.4% | ₹10.24 Cr / ₹2.40 Cr | +15% | ₹24.5 L | 29
₹1.96 CrQ1 2026, in-store + online (10.5% of all turnover)
₹2.32 Cr2027 goal, +18%
₹4.83 Lbudget
7AOPs: run clubs, tracks and race organisers
In-store Online: 23%
MP₹4.83 L, 7 AOPs
₹3.79 CrQ1 2026, in-store + online (20.2% of all turnover)
₹4.36 Cr2027 goal, +15%
₹9.05 Lbudget
9AOPs: gyms, yoga and pilates studios
MP₹9.05 L, 9 AOPs
₹71.5 LQ1 2026, in-store + online (3.8% of all turnover)
₹85.8 L2027 goal, +20%
₹0.47 Lbudget
4AOPs: cycling clubs and bike-friendly societies
MP₹0.47 L, 4 AOPs
₹5.22 CrQ1 2026, in-store + online (27.9% of all turnover)
₹5.85 Cr2027 goal, +12%
₹4.84 Lbudget
4AOPs: trek organisers and travel agencies
In-store Online: 20%
MP₹4.84 L, 4 AOPs
₹94.7 LQ1 2026, in-store + online (5.1% of all turnover)
₹1.09 Cr2027 goal, +15%
₹5.34 Lbudget
5AOPs: swimming pools and swim academies
MP₹5.34 L, 5 AOPs
```

After clicking **STATE MP + Q2: Apr to Jun**:
```text
₹2.04 Cr → ₹2.25 Cr
| 8.8% | ₹1.65 Cr / ₹39.6 L
| +10% | ₹1.83 L | 3
₹4.47 Cr → ₹5.14 Cr
| 19.2% | ₹3.88 Cr / ₹59.6 L
| +15% | ₹4.27 L | 6
₹80.6 L → ₹92.7 L
| 3.5% | ₹66.9 L / ₹13.7 L
| +15% | ₹2.74 L | 3
₹6.25 Cr → ₹7.01 Cr
| 26.8% | ₹4.88 Cr / ₹1.38 Cr
78% / 22%
| +12% | ₹3.96 L | 4
₹2.23 Cr → ₹2.79 Cr
| 9.6% | ₹1.94 Cr / ₹29.4 L
| +25% | ₹4.88 L | 7
| 5 sports | | ₹15.81 Cr → ₹18.11 Cr | 67.7% | ₹13.00 Cr / ₹2.80 Cr | +15% | ₹17.7 L | 23
₹2.04 CrQ2 2026, in-store + online (8.8% of all turnover)
₹2.25 Cr2027 goal, +10%
₹1.83 Lbudget
3AOPs: run clubs, tracks and race organisers
MP₹1.83 L, 3 AOPs
₹4.47 CrQ2 2026, in-store + online (19.2% of all turnover)
₹5.14 Cr2027 goal, +15%
₹4.27 Lbudget
6AOPs: gyms, yoga and pilates studios
MP₹4.27 L, 6 AOPs
₹80.6 LQ2 2026, in-store + online (3.5% of all turnover)
₹92.7 L2027 goal, +15%
₹2.74 Lbudget
3AOPs: cycling clubs and bike-friendly societies
MP₹2.74 L, 3 AOPs
₹6.25 CrQ2 2026, in-store + online (26.8% of all turnover)
₹7.01 Cr2027 goal, +12%
₹3.96 Lbudget
In-store Online: 22%
MP₹3.96 L, 4 AOPs
₹2.23 CrQ2 2026, in-store + online (9.6% of all turnover)
₹2.79 Cr2027 goal, +25%
₹4.88 Lbudget
7AOPs: swimming pools and swim academies
MP₹4.88 L, 7 AOPs
```

After clicking **STATE MP + Q1 and Q2**:
```text
₹4.01 Cr → ₹4.56 Cr
| 9.5% | ₹3.16 Cr / ₹84.1 L
| +14% | ₹6.66 L | 10
₹8.26 Cr → ₹9.50 Cr
| 19.6% | ₹7.12 Cr / ₹1.14 Cr
| +15% | ₹13.3 L | 15
₹1.52 Cr → ₹1.79 Cr
| 3.6% | ₹1.21 Cr / ₹31.4 L
| +17% | ₹3.21 L | 7
₹11.47 Cr → ₹12.85 Cr
| 27.3% | ₹9.06 Cr / ₹2.42 Cr
| +12% | ₹8.80 L | 8
₹3.18 Cr → ₹3.88 Cr
| 7.6% | ₹2.69 Cr / ₹49.1 L
85% / 15%
| +22% | ₹10.2 L | 12
| 5 sports | | ₹28.44 Cr → ₹32.58 Cr | 67.6% | ₹23.24 Cr / ₹5.20 Cr | +15% | ₹42.2 L | 52
₹4.01 CrQ1 and Q2 2026, in-store + online (9.5% of all turnover)
₹4.56 Cr2027 goal, +14%
₹6.66 Lbudget
10AOPs: run clubs, tracks and race organisers
MP₹6.66 L, 10 AOPs
₹8.26 CrQ1 and Q2 2026, in-store + online (19.6% of all turnover)
₹9.50 Cr2027 goal, +15%
₹13.3 Lbudget
15AOPs: gyms, yoga and pilates studios
MP₹13.3 L, 15 AOPs
₹1.52 CrQ1 and Q2 2026, in-store + online (3.6% of all turnover)
₹1.79 Cr2027 goal, +17%
₹3.21 Lbudget
MP₹3.21 L, 7 AOPs
₹11.47 CrQ1 and Q2 2026, in-store + online (27.3% of all turnover)
₹12.85 Cr2027 goal, +12%
₹8.80 Lbudget
MP₹8.80 L, 8 AOPs
₹3.18 CrQ1 and Q2 2026, in-store + online (7.6% of all turnover)
₹3.88 Cr2027 goal, +22%
₹10.2 Lbudget
12AOPs: swimming pools and swim academies
In-store Online: 15%
MP₹10.2 L, 12 AOPs
```

After clicking **STATE Gujarat + Q1: Jan to Mar**:
```text
₹4.71 Cr → ₹5.56 Cr
| 10.4% | ₹4.00 Cr / ₹70.6 L
| +18% | ₹10.7 L | 8
₹8.62 Cr → ₹9.91 Cr
| 19.1% | ₹7.67 Cr / ₹94.0 L
| +15% | ₹17.9 L | 12
₹2.48 Cr → ₹2.98 Cr
| 5.5% | ₹2.22 Cr / ₹26.0 L
| +20% | ₹1.27 L | 4
₹10.63 Cr → ₹11.90 Cr
| 23.5% | ₹8.90 Cr / ₹1.73 Cr
| +12% | ₹9.00 L | 4
₹2.92 Cr → ₹3.36 Cr
| 6.5% | ₹2.32 Cr / ₹60.4 L
| +15% | ₹12.3 L | 7
₹1.52 Cr → ₹1.90 Cr
| 3.4% | ₹1.43 Cr / ₹8.84 L
₹10.5 L → ₹16.8 L
| 0.2% | ₹9.43 L / ₹1.06 L
| 7 sports | | ₹30.99 Cr → ₹35.78 Cr | 68.5% | ₹26.65 Cr / ₹4.34 Cr | +15% | ₹52.0 L | 55
₹4.71 CrQ1 2026, in-store + online (10.4% of all turnover)
₹5.56 Cr2027 goal, +18%
₹10.7 Lbudget
8AOPs: run clubs, tracks and race organisers
Gujarat₹10.7 L, 8 AOPs
₹8.62 CrQ1 2026, in-store + online (19.1% of all turnover)
₹9.91 Cr2027 goal, +15%
₹17.9 Lbudget
Gujarat₹17.9 L, 12 AOPs
₹2.48 CrQ1 2026, in-store + online (5.5% of all turnover)
₹2.98 Cr2027 goal, +20%
₹1.27 Lbudget
Gujarat₹1.27 L, 4 AOPs
₹10.63 CrQ1 2026, in-store + online (23.5% of all turnover)
₹11.90 Cr2027 goal, +12%
₹9.00 Lbudget
Gujarat₹9.00 L, 4 AOPs
₹2.92 CrQ1 2026, in-store + online (6.5% of all turnover)
₹3.36 Cr2027 goal, +15%
Gujarat₹12.3 L, 7 AOPs
₹1.52 CrQ1 2026, in-store + online (3.4% of all turnover)
₹1.90 Cr2027 goal, +25%
₹10.5 LQ1 2026, in-store + online (0.2% of all turnover)
₹16.8 L2027 goal, +60%
Gujarat₹0.05 L, 10 AOPs
```

After clicking **STATE Gujarat + Q2: Apr to Jun**:
```text
₹4.91 Cr → ₹5.40 Cr
| 7.9% | ₹4.29 Cr / ₹62.8 L
| +10% | ₹3.09 L | 3
₹11.56 Cr → ₹13.30 Cr
| 18.6% | ₹10.32 Cr / ₹1.24 Cr
| +15% | ₹7.73 L | 8
₹2.93 Cr → ₹3.36 Cr
| 4.7% | ₹2.61 Cr / ₹31.6 L
| +15% | ₹3.87 L | 3
₹16.11 Cr → ₹18.05 Cr
| 25.9% | ₹14.39 Cr / ₹1.72 Cr
| +12% | ₹7.73 L | 4
₹5.90 Cr → ₹7.38 Cr
| 9.5% | ₹5.34 Cr / ₹56.4 L
| +25% | ₹10.1 L | 10
₹2.40 Cr → ₹3.00 Cr
| 3.9% | ₹2.31 Cr / ₹9.45 L
96% / 4%
₹15.8 L → ₹25.2 L
| 0.3% | ₹14.5 L / ₹1.29 L
| +60% | ₹6.19 L | 8
| 7 sports | | ₹43.98 Cr → ₹50.75 Cr | 70.6% | ₹39.40 Cr / ₹4.58 Cr | +15% | ₹47.9 L | 46
₹4.91 CrQ2 2026, in-store + online (7.9% of all turnover)
₹5.40 Cr2027 goal, +10%
₹3.09 Lbudget
Gujarat₹3.09 L, 3 AOPs
₹11.56 CrQ2 2026, in-store + online (18.6% of all turnover)
₹13.30 Cr2027 goal, +15%
₹7.73 Lbudget
8AOPs: gyms, yoga and pilates studios
Gujarat₹7.73 L, 8 AOPs
₹2.93 CrQ2 2026, in-store + online (4.7% of all turnover)
₹3.87 Lbudget
Gujarat₹3.87 L, 3 AOPs
₹16.11 CrQ2 2026, in-store + online (25.9% of all turnover)
₹18.05 Cr2027 goal, +12%
Gujarat₹7.73 L, 4 AOPs
₹5.90 CrQ2 2026, in-store + online (9.5% of all turnover)
₹7.38 Cr2027 goal, +25%
₹10.1 Lbudget
10AOPs: swimming pools and swim academies
Gujarat₹10.1 L, 10 AOPs
₹2.40 CrQ2 2026, in-store + online (3.9% of all turnover)
₹3.00 Cr2027 goal, +25%
In-store Online: 4%
₹15.8 LQ2 2026, in-store + online (0.3% of all turnover)
₹25.2 L2027 goal, +60%
₹6.19 Lbudget
8AOPs: pickleball courts and clubs
Gujarat₹6.19 L, 8 AOPs
```

After clicking **STATE Gujarat + Q1 and Q2**:
```text
₹9.62 Cr → ₹10.96 Cr
| 8.9% | ₹8.29 Cr / ₹1.33 Cr
| +14% | ₹13.8 L | 11
₹20.18 Cr → ₹23.21 Cr
| 18.8% | ₹18.00 Cr / ₹2.19 Cr
| +15% | ₹25.7 L | 20
₹5.41 Cr → ₹6.35 Cr
| 5.0% | ₹4.83 Cr / ₹57.6 L
| +17% | ₹5.14 L | 7
₹26.74 Cr → ₹29.95 Cr
| 24.9% | ₹23.29 Cr / ₹3.45 Cr
| +12% | ₹16.7 L | 8
₹8.83 Cr → ₹10.74 Cr
| 8.2% | ₹7.66 Cr / ₹1.17 Cr
| +22% | ₹22.3 L | 17
₹3.93 Cr → ₹4.91 Cr
| 3.7% | ₹3.74 Cr / ₹18.3 L
₹26.3 L → ₹42.0 L
| 0.2% | ₹23.9 L / ₹2.35 L
91% / 9%
| +60% | ₹6.24 L | 18
| 7 sports | | ₹74.97 Cr → ₹86.53 Cr | 69.7% | ₹66.04 Cr / ₹8.92 Cr | +15% | ₹99.9 L | 101
₹9.62 CrQ1 and Q2 2026, in-store + online (8.9% of all turnover)
₹10.96 Cr2027 goal, +14%
₹13.8 Lbudget
Gujarat₹13.8 L, 11 AOPs
₹20.18 CrQ1 and Q2 2026, in-store + online (18.8% of all turnover)
₹23.21 Cr2027 goal, +15%
₹25.7 Lbudget
Gujarat₹25.7 L, 20 AOPs
₹5.41 CrQ1 and Q2 2026, in-store + online (5.0% of all turnover)
₹6.35 Cr2027 goal, +17%
₹5.14 Lbudget
Gujarat₹5.14 L, 7 AOPs
₹26.74 CrQ1 and Q2 2026, in-store + online (24.9% of all turnover)
₹29.95 Cr2027 goal, +12%
₹16.7 Lbudget
Gujarat₹16.7 L, 8 AOPs
₹8.83 CrQ1 and Q2 2026, in-store + online (8.2% of all turnover)
₹10.74 Cr2027 goal, +22%
₹22.3 Lbudget
17AOPs: swimming pools and swim academies
Gujarat₹22.3 L, 17 AOPs
₹3.93 CrQ1 and Q2 2026, in-store + online (3.7% of all turnover)
₹4.91 Cr2027 goal, +25%
₹26.3 LQ1 and Q2 2026, in-store + online (0.2% of all turnover)
₹42.0 L2027 goal, +60%
₹6.24 Lbudget
18AOPs: pickleball courts and clubs
In-store Online: 9%
Gujarat₹6.24 L, 18 AOPs
```

#### plan2027 › `films`: Decathlon around the world
- img: https://i.ytimg.com/vi/OqE_Z5L3RSY/hqdefault.jpg; https://i.ytimg.com/vi/YrVz4sayHQg/hqdefault.jpg; https://i.ytimg.com/vi/0EM3JYLbNZE/hqdefault.jpg; https://i.ytimg.com/vi/Y3OH-j05aqk/hqdefault.jpg; https://i.ytimg.com/vi/f6R_l1DcpUM/hqdefault.jpg; https://i.ytimg.com/vi/NjveKnMMzD4/hqdefault.jpg; https://i.ytimg.com/vi/9LeVIZul0ZQ/hqdefault.jpg; https://i.ytimg.com/vi/EksBqkLXbtk/hqdefault.jpg; https://i.ytimg.com/vi/gvnwqy0IYwg/hqdefault.jpg; https://i.ytimg.com/vi/DtWHQZWxk4c/hqdefault.jpg; https://i.ytimg.com/vi/GuEpIysAs4M/hqdefault.jpg; https://i.ytimg.com/vi/hFUFMlG0B9s/hqdefault.jpg; https://i.ytimg.com/vi/ZQb8FvC8jfc/hqdefault.jpg
- films (YouTube, play on click): Decathlon Taiwan / Ready to play? = youtu.be/OqE_Z5L3RSY; Decathlon UK / Spring into Action (TV) = youtu.be/YrVz4sayHQg; Decathlon Malaysia / We make sports accessible to the many = youtu.be/0EM3JYLbNZE; Decathlon Korea / Why Decathlon is special = youtu.be/Y3OH-j05aqk; Decathlon Malaysia / 10 years in Malaysia = youtu.be/f6R_l1DcpUM; Decathlon Korea / SS26 Running = youtu.be/NjveKnMMzD4; Decathlon India / New swimsuit collection = youtu.be/9LeVIZul0ZQ; Decathlon India / Swimming goggles: sports you love at prices you love = youtu.be/EksBqkLXbtk; Decathlon India / Women's Day 2025: Play Your Own Way = youtu.be/gvnwqy0IYwg; Decathlon Korea / SS26 Hiking: Dry fast, grip hard = youtu.be/DtWHQZWxk4c; Decathlon Malaysia / Made in Malaysia, episode 1 = youtu.be/GuEpIysAs4M; Decathlon India / Made in India = youtu.be/hFUFMlG0B9s; Decathlon India / Decathlon Anthem = youtu.be/ZQb8FvC8jfc

```text
Official films from Decathlon India, Korea, Taiwan, Malaysia and the UK, and what we can borrow from each. They play only when you tap them. Decathlon China posts on its own platforms, not on YouTube.
Decathlon TaiwanReady to play?
TaiwanOne line, many sports, real people: the brand promise without a product in sight.
Decathlon UKSpring into Action (TV)
UKSeason change as the reason to start: our New Year and summer starts.
Decathlon MalaysiaWe make sports accessible to the many
MalaysiaPrice as a promise, not a discount: the tone for clearance.
Decathlon KoreaWhy Decathlon is special
KoreaThe brand story told through the sports people play.
Decathlon Malaysia10 years in Malaysia
MalaysiaLocal pride: how a country team tells its own story.
Decathlon KoreaSS26 Running
KoreaA season launch in one film: product in motion, no voice-over.
Decathlon IndiaNew swimsuit collection
IndiaOur own India short: the format for SS27 swimwear.
Decathlon IndiaSwimming goggles: sports you love at prices you love
IndiaPrice-led product film from Decathlon India.
Decathlon IndiaWomen's Day 2025: Play Your Own Way
IndiaLast year's Women's Day film from Decathlon India: build on it.
Decathlon KoreaSS26 Hiking: Dry fast, grip hard
KoreaTwo product promises as the whole campaign line.
Decathlon MalaysiaMade in Malaysia, episode 1
MalaysiaLocal makers as heroes; our Made in India angle.
Decathlon IndiaMade in India
IndiaDecathlon India's own made-in-India story.
Decathlon IndiaDecathlon Anthem
IndiaThe India brand film.
```

#### plan2027 › `strategies`: Strategies, Q1 month by month

```text
Built on the calendar above: the big move of each month, the budget and AOPs it has, and what each sport does in it.
Q1 goals (Q1 2027 plan)
12.1%turnover growth₹8.3 Crincremental turnover3.7 Lbills, +10%33%conversion
Traffic: customers +10%. Retention: returning customers +15%. Conversion: bills +10%.
January
Start the year with them
₹63.2 Lad budget, West49AOPsFitnessPune sport of the month
Movement for All in all 13 stores, and New Year, New Moves
Clearance sale, animated in every store
Bajaj Pune Grand Tour, 26-31 Jan; Vadodara Marathon, 31 Jan
Surat Adajan's first month: Ramat chalu rahe to 16 Jan
Pool and gym partners signed for the summer
RunningRun clubs restart: New Year, New Moves; Vadodara Marathon, Sun 31 Jan: bib expo desk
FitnessMovement for All, all 13 stores; Pune sport of the month: fitness
CyclingBajaj Pune Grand Tour, 26-31 Jan (UCI 2.1, 6 stages); Fan rides to the stages
MountainWinter treks: Sahyadri sunrise treks, Saputara, Pachmarhi
SwimmingPool tie-ups for the summer
CricketBox cricket night league, Surat (to 16 Jan)
PickleballPickle Premier League, Surat (to 16 Jan)
February
Clubs, camps and leagues
₹46.4 Lad budget, West51AOPsCampingPune sport of the month
Beach Day, Surat (10,000 national footfall goal)
Camping weekends, Pune's sport of the month
Society leagues: box cricket and pickleball in Gujarat
Workshop Mela in apartments: bike service and buyback
New arrivals: shoes, phase 1
RunningIndore Marathon, first Sunday of February (date to confirm); 5K and 10K training blocks
FitnessHome gym and strength: new arrivals; Valentine's: train together
CyclingWorkshop Mela in apartments: service and buyback
MountainCamping weekends: Pune sport of the month
SwimmingPool partners onboarded; Learn to Swim batches announced
CricketSociety and corporate box-cricket leagues
PickleballSociety pickleball leagues, Ahmedabad
March
Women's Day and the IPL
₹58.9 Lad budget, West52AOPsPickleballPune sport of the month
Women's Day weekend, Sat 6 and Sun 7 Mar, all 13 stores
IPL from Sun 14 Mar: cricket in every Gujarat store
Kiprun Challenger ₹9,999 launches
Learn to Swim registrations open
Holi, Mon 22 Mar; Good Friday long weekend from 26 Mar
RunningWomen's Day pink run, Sat 6 - Sun 7 Mar; Kiprun Challenger ₹9,999 launches
FitnessWomen's Day weekend, 6-7 Mar: women-only pilates and yoga mornings
CyclingWorkshop Mela: 10 apartments in Q1; Commuter bikes for summer
MountainHimalayan summer prep: gear lists with trek organisers
SwimmingLearn to Swim registrations open
CricketIPL starts Sun 14 Mar: gully cricket gear check
PickleballPune sport of the month: pickleball; Court tie-ups
```

After clicking **STATE Pune + Q1: Jan to Mar**:
```text
₹28.7 Lad budget, Pune22AOPsFitnessPune sport of the month
RunningRun clubs restart: New Year, New Moves
Pickleball
₹22.7 Lad budget, Pune23AOPsCampingPune sport of the month
Running5K and 10K training blocks
₹29.0 Lad budget, Pune23AOPsPickleballPune sport of the month
```

After clicking **STATE Pune + Q2: Apr to Jun**:
```text
Strategies, Q2 month by month
Q2 goals
The Q2 turnover, bills and conversion targets are not in our files yet. The sport goals below add up to ₹59.99 Cr of turnover (in-store + online) for the 7 sports.
April
Summer starts: sign the kids up
₹32.2 Lad budget, Pune20AOPsCricket + rollerPune sport of the month
Summer Camp (April to June)
Learn to Swim batches, cricket camps and learn-to-ride camps begin
Himalayan trek season opens
Gudi Padwa, Thu 8 Apr; shoes, phase 2
RunningSummer run clubs at 5:30 AM; Kiprun Challenger try-on runs
Fitness6 AM summer workouts at partner gyms; World Health Day, Wed 7 Apr
CyclingLearn-to-ride camps for kids
MountainHimalayan trek season opens
SwimmingLearn to Swim summer batches start; Summer Camp
May
Peak summer
₹37.5 Lad budget, Pune17AOPsSwimmingPune sport of the month
Sports Utsav (200,000 national footfall goal)
Swimming is Pune's sport of the month
Summer holidays: travel, kids' bikes, family sport
Maharashtra Day, Sat 1 May
RunningHeat and hydration kit for runners; Kiprun Challenger push
FitnessSports Utsav: fitness zones in every store
CyclingSummer holidays: kids' bikes and family rides
MountainPeak travel: summer holidays and Himalayan treks
SwimmingPeak swim camps; Pune sport of the month: swimming
PickleballSummer evening leagues; Kids' coaching
June
Yoga, rides and the monsoon
₹33.8 Lad budget, Pune13AOPsFootballPune sport of the month
Yoga Day, Mon 21 Jun, after 21 days of yoga (10,000 national goal)
Global Running Day, Wed 2 Jun; World Bicycle Day, Thu 3 Jun
Monsoon treks and rainwear; back to school
Circular Bazaar
Swim galas and pickleball cup finals
RunningGlobal Running Day, Wed 2 Jun; Monsoon-ready running shoes
FitnessYoga Day build-up from 1 Jun; Yoga Day, Mon 21 Jun
CyclingWorld Bicycle Day, Thu 3 Jun: ride to work; Service before the monsoon
MountainMonsoon treks from late June: rainwear and trek shoes
SwimmingSwim galas at partner pools before schools reopen
```

After clicking **STATE Pune + Q1 and Q2**:
```text
Strategies, Q1 and Q2 month by month
```

After clicking **STATE West + Q2: Apr to Jun**:
```text
The Q2 turnover, bills and conversion targets are not in our files yet. The sport goals below add up to ₹132.70 Cr of turnover (in-store + online) for the 7 sports.
₹66.4 Lad budget, West48AOPsCricket + rollerPune sport of the month
IPL match days at Motera
CricketIPL match days at Motera; Summer cricket camps with academies
PickleballInter-store pickleball cup, Gujarat
₹76.7 Lad budget, West43AOPsSwimmingPune sport of the month
IPL final, Sun 30 May: watch party at Motera
CricketIPL final, Sun 30 May; Summer camp finals
₹68.3 Lad budget, West28AOPsFootballPune sport of the month
CricketAcademy kit for the new season; Indoor nets for the monsoon
PickleballCup finals at the Motera playground
```

After clicking **STATE MP + Q1: Jan to Mar**:
```text
₹11.9 Lad budget, MP9AOPs
FitnessMovement for All, all 13 stores
CyclingFan rides to the stages
₹8.04 Lad budget, MP10AOPs
Mountain
₹8.55 Lad budget, MP10AOPs
```

After clicking **STATE MP + Q2: Apr to Jun**:
```text
The Q2 turnover, bills and conversion targets are not in our files yet. The sport goals below add up to ₹18.11 Cr of turnover (in-store + online) for the 7 sports.
₹9.70 Lad budget, MP9AOPs
₹10.4 Lad budget, MP9AOPs
SwimmingPeak swim camps
₹10.4 Lad budget, MP5AOPs
```

After clicking **STATE Gujarat + Q1: Jan to Mar**:
```text
₹22.5 Lad budget, Gujarat18AOPs
₹15.7 Lad budget, Gujarat18AOPs
₹21.3 Lad budget, Gujarat19AOPs
PickleballCourt tie-ups
```

After clicking **STATE Gujarat + Q2: Apr to Jun**:
```text
The Q2 turnover, bills and conversion targets are not in our files yet. The sport goals below add up to ₹50.75 Cr of turnover (in-store + online) for the 7 sports.
₹24.4 Lad budget, Gujarat19AOPs
₹28.8 Lad budget, Gujarat17AOPs
₹24.1 Lad budget, Gujarat10AOPs
```

#### plan2027 › `footer`: Turnover by sport: Tableau sport-wise YTD 2026 (1 Jan to 8 Nov 2026, in-store and out of s

```text

```

### B.4 water2027.html, Water sports 2027
- Browser title: "Water Sports 2027 · West Plan". Meta description: "Decathlon West, water sports 2027: the plan week by week and quarter by quarter, in-store, outstore, digital, influencers, hoardings, go-live dates, AOPs and pools per store, and each sport's share of turnover.".
- Sections in order: `topbar`, `top`, `calendar`, `look`, `share`, `stores`, `money`, `range`, `footer`.
- Outside the sections (`w27Qbar`): Q4 2026 / Q1 2027 / Q2 2027 / Q3 2027 / Q4 2027 / All stores / Pune / Gujarat / MP / ₹10.23 Cr / water turnover, same months 2026 / 152 / AOPs planned / 6 / go-live dates
- Outside the sections (`expBar`): Download this page / Download PDF / Download GIF / The complete page, as you see it.
- Quarter bar numbers (`#w27QNums`) for every state x quarter:
  - all q426: ₹4.41 Cr water turnover, same months 2026 (Nov only partly in, Dec not in the data, so left out) · 114 AOPs planned (AOP plan runs Nov 2026 to Oct 2027) · 4 go-live dates
  - all q1: ₹10.23 Cr water turnover, same months 2026 · 152 AOPs planned · 6 go-live dates
  - all q2: ₹18.41 Cr water turnover, same months 2026 · 119 AOPs planned · 1 go-live date
  - all q3: ₹7.72 Cr water turnover, same months 2026 · 28 AOPs planned · 1 go-live date
  - all q4: ₹2.17 Cr water turnover, same months 2026 (Nov only partly in, Dec not in the data, so left out) · 36 AOPs planned (AOP plan runs Nov 2026 to Oct 2027) · 2 go-live dates
  - Pune q426: ₹2.19 Cr water turnover, same months 2026 (Nov only partly in, Dec not in the data, so left out) · 49 AOPs planned (AOP plan runs Nov 2026 to Oct 2027) · 4 go-live dates
  - Pune q1: ₹5.77 Cr water turnover, same months 2026 · 68 AOPs planned · 5 go-live dates
  - Pune q2: ₹9.20 Cr water turnover, same months 2026 · 50 AOPs planned · 1 go-live date
  - Pune q3: ₹3.41 Cr water turnover, same months 2026 · 14 AOPs planned · 1 go-live date
  - Pune q4: ₹1.15 Cr water turnover, same months 2026 (Nov only partly in, Dec not in the data, so left out) · 14 AOPs planned (AOP plan runs Nov 2026 to Oct 2027) · 2 go-live dates
  - Gujarat q426: ₹1.63 Cr water turnover, same months 2026 (Nov only partly in, Dec not in the data, so left out) · 40 AOPs planned (AOP plan runs Nov 2026 to Oct 2027) · 4 go-live dates
  - Gujarat q1: ₹3.33 Cr water turnover, same months 2026 · 55 AOPs planned · 4 go-live dates
  - Gujarat q2: ₹6.69 Cr water turnover, same months 2026 · 46 AOPs planned · 1 go-live date
  - Gujarat q3: ₹3.14 Cr water turnover, same months 2026 · 9 AOPs planned · 1 go-live date
  - Gujarat q4: ₹75.3 L water turnover, same months 2026 (Nov only partly in, Dec not in the data, so left out) · 14 AOPs planned (AOP plan runs Nov 2026 to Oct 2027) · 2 go-live dates
  - MP q426: ₹58.5 L water turnover, same months 2026 (Nov only partly in, Dec not in the data, so left out) · 25 AOPs planned (AOP plan runs Nov 2026 to Oct 2027) · 1 go-live date
  - MP q1: ₹1.13 Cr water turnover, same months 2026 · 29 AOPs planned · 1 go-live date
  - MP q2: ₹2.52 Cr water turnover, same months 2026 · 23 AOPs planned · 1 go-live date
  - MP q3: ₹1.17 Cr water turnover, same months 2026 · 5 AOPs planned · 0 go-live dates
  - MP q4: ₹27.3 L water turnover, same months 2026 (Nov only partly in, Dec not in the data, so left out) · 8 AOPs planned (AOP plan runs Nov 2026 to Oct 2027) · 0 go-live dates

#### water2027 › `topbar`: DECATHLON West

```text
West planPlan
Nov & Dec 2026Nov-Dec
2027 plan2027
Water 2027Water
Calendar
Films
Sports share
Stores
Money
Range
```

#### water2027 › `top`: 2027 plan, water sports
- img: assets/img/water/water-snorkel.jpg; assets/img/water/water-women-cover.jpg; assets/img/swim-kit-aop.jpg; assets/posters/water-armbands.jpg; assets/img/su/deca-kayak.jpg; assets/img/water/water-women-pool.jpg

```text
Make your catchment swim, week by week
Swimming is our fourth biggest sport in the West, and in March and April, when its share of turnover jumps from 3% to 11.5%, it is the third biggest. This is the water plan for every store, week by week: what goes live in store, outside the store, online and with influencers, and which pools, coaches and practice places carry it. Pick a quarter and a state: the whole page follows.
₹26.65 Crwater turnover goal, March to June 2027 (Pune +25%, Gujarat +20%)
₹38.52 CrWest water sports turnover, January to October 2026, all channels
15 Feb, 15 Marin store goes live, then outside the store
125 coaches, 58 poolsaffiliated coaches (Pune and Gujarat) and Pune pool tie-ups to sign
```

#### water2027 › `calendar`: Q1 2027, week by week

```text
The 2027 planner, one column per week (weeks start on Monday). ★ marks a go-live. Dashed chips are our proposals or our timing, to confirm. Pick a week to see everything in it.
Weeks start on Monday. Bar: water turnover in the same month of 2026, West
January 2027
₹1.74 Cr water, 49 AOPs
February 2027
₹2.67 Cr water, 51 AOPs
March 2027
₹5.82 Cr water, 52 AOPs
W14 Jan
W211 Jan
W318 Jan
W425 Jan
W51 Feb
W68 Feb
W715 Feb
W822 Feb
W91 Mar
W108 Mar
W1115 Mar
W1222 Mar
W1329 Mar
Season and moments
WinterUttarayan 14 JanRepublic Day 26 JanGujaratBeach Day, SuratSummer + summer campWomen's Day 8 MarHoli 22 Mar
Go live
★ Water team in place★ In-store live: summer campaign, CAD, golden pegPune★ Pune: at least 10 swimming academies in every catchmentGujarat★ Gujarat coaches onboarded (latest)★ Outstore live: hoardings, pools, flyersPune★ Wagholi: Kavya pool from 1 Apr
Team and training
Recruit the water team, all in place by 10 Jan (every teammate a swimmer)Swim kit for every teammate (₹1,999), weekly practicePunePune training 19-20 JanPunePune training 10-11 FebGujaratGujarat training 8-9 FebMPMP training 16-17 FebGujaratGujarat training 23-24 FebGujaratStore visit (end Feb)PunePune training 2-3 Mar
In-store: range and merchandising
Water move, checklist, top 15 families to 100% CADGolden peg challenge: weekly FCS, growth vs country, caps and goggle cases per goggle (ABQ)GujaratFamily window: 4 dressed mannequins; entrance: Una, UV top + Fiti 500, kids combi (Motera, Dumas)GujaratStep 1.5 add-ons: goggle case, phone pocket, 3 L and 7 L pouches, mesh bagSS27 women's cover-up swimwear: Jisa Shorty, Rossa full zip, Rossa legging, Una skirt
In-store and mall communication
PuneWindow wall and store home page, stop rayons, CAB + TGs (₹1.10 L) + in-mall lollipops (₹4.24 L)GujaratWindow wall, stop rayons, CAB + TGs, TV; Nexus in-mall; lollipops at Motera, Dumas, BarodaMPNo in-store water plan in our files
Outstore: hoardings and flyers
Pune11 hoardings live: Wakad 3, Amanora 2, Wagholi 2, city 2, SGS 1, NIBM 1 (₹15.7 L; run length to confirm)Gujarat3D city hoarding: "Summer fun with water" (budget not set)Flyers at pools, societies, schools (Pune ₹81,000; Nexus ₹30,000)Test: "The City Needs a Swim" digital hoardings with a QR code
Digital and WhatsApp
Local paid digital, geo-targeted (₹1 L, Dec to Apr)New arrival x Summer collection on the store home pageWhatsApp push 1 (Feb, week 3)WhatsApp push 2 (Mar, week 2)
Influencers and creators
Creators and community voices (₹45,000)PuneSummer + summer camp: 50 influencers, ₹5 L (all sports; 2026: summer reels at ₹0.33 a view)PuneInstagram influencers, 3 months (₹12 L) + ad-boost reels (₹50,000)GujaratInstagram influencers, ₹20,000 per store (Nexus, Motera, Dumas, Baroda)
Pools, academies and coaches
PuneSign 58 pools at ₹25,000: Wagholi 15, Amanora 10, Wakad 10, city 10, NIBM 8, SGS 5PuneAffiliate 80 coaches with a ₹5,000 kit: Wakad 20, Amanora 20, others 10GujaratCoaches onboarded (₹2.25 L, 45 coaches at ₹5,000) and pool tie-ups (₹4.5 L)Academies: Pune 7, Gujarat 12, MP 9 (target 28)PuneSGS: Nilu Phule pool tie-up ends 22 Jan, renewPuneNIBM: Varunah and Ganga Dhaam tie-ups end in March, renew before summerPuneWagholi: Raj Swimming Pool from 1 FebGujaratCoaches seminar 26-28 Feb
AOPs (practice places), all sports
49 AOPs Pune 22, Gujarat 18, MP 951 AOPs Pune 23, Gujarat 18, MP 1052 AOPs Pune 23, Gujarat 19, MP 10
Events and community
30-Day Swim Challenge: swim streaks, Women Who Swim, creator storiesSwim Together: family weekends, societies, corporates, academy referralsDecathlon Swim League: academy vs academy, beginner categories, city finalsWomen Who Swim on Women's Day weekendLearn swimming with Decathlon x coach: Townscript sign-ups, free goggle with a full set (new customers)Summer Swim Movement: school holidays, 1,000 People milestone, starter kits
Quick commerce and online
Quick commerce: stock ahead of demand, in-range cover (RDP), digital LMs for the rest, express delivery message
Goals and reviews
Weekly rhythm: Mon numbers, Wed partners, Fri weekend check, weekend sessionsGujaratBiweekly catch-up90-day checkpoint (Swim Project)Business plan March to June: Pune ₹17.65 Cr (+25%), Gujarat ₹9.00 Cr (+20%)
Turnover share by sport, same month 2026 (West)
Top sports and swimming
1. Hiking 23.3%2. Fitness outfit 15.5%3. Running 10.2%4. Kids' cycling, skates 5.5%8. Swimming 3.2%1. Hiking 17.6%2. Fitness outfit 16.9%3. Running 9.6%4. Swimming 6.7%1. Fitness outfit 17.3%2. Hiking 13.5%3. Swimming 11.5%4. Running 8.8%
★Go liveOur proposal or our timing✓Done
EventsPools, coaches, AOPsHoardings, salesStore-levelHolidays
Week 1: 4 Jan to 10 Jan 2027
‹
›
Winter1 Jan to 28 Feb; 2027 planner
★ Water team in place10 Jan, Pune and Gujarat and MP; Pune water plan
Recruit the water team, all in place by 10 Jan (every teammate a swimmer)2 Nov to 10 Jan, Pune and Gujarat and MP; Pune water plan
Local paid digital, geo-targeted (₹1 L, Dec to Apr)1 Dec to 30 Apr; Great Indian Swim Project
Creators and community voices (₹45,000)1 Dec to 30 Apr; Great Indian Swim Project
SGS: Nilu Phule pool tie-up ends 22 Jan, renew4 Jan to 22 Jan, Pune; Pune partnerships sheet
Sign 58 pools at ₹25,000: Wagholi 15, Amanora 10, Wakad 10, city 10, NIBM 8, SGS 54 Jan to 14 Mar, Pune; Pune water plan
Affiliate 80 coaches with a ₹5,000 kit: Wakad 20, Amanora 20, others 104 Jan to 14 Mar, Pune; Pune water plan
Coaches onboarded (₹2.25 L, 45 coaches at ₹5,000) and pool tie-ups (₹4.5 L)4 Jan to 15 Feb, Gujarat; Gujarat water plan
Academies: Pune 7, Gujarat 12, MP 9 (target 28)2 Nov to 31 Jan; Great Indian Swim Project
30-Day Swim Challenge: swim streaks, Women Who Swim, creator stories1 Jan to 31 Jan; Great Indian Swim Project
Weekly rhythm: Mon numbers, Wed partners, Fri weekend check, weekend sessions1 Dec to 30 Apr; Great Indian Swim Project
AOPs in January, store by store (49)
7Wakad5Wagholi3SGS Mall4NIBM3Amanora4Motera4Nexus4Dumas4Baroda2Rajkot3Indore3Bhopal3Gwalior
What we can do, Q1 2027
Two go-live dates, not ten
Everything in store goes live on Mon 15 Feb (campaign, CAD, golden peg, WhatsApp). Everything outside on Mon 15 Mar (hoardings, pools, flyers, influencers).
Sell the full set
Free goggle with goggle + swimwear + cap + towel + bag (+ goggle case in Gujarat), for new customers. Push caps and goggle cases per goggle to lift ABQ.
Women Who Swim
Women-only beginner sessions with women coaches; tie it to the Women's Day weekend (6-7 Mar) and the SS27 cover-up swimwear (Jisa, Rossa, Una).
Our proposal
Coaches are the channel
125 coaches with a ₹5,000 kit (Pune 80, Gujarat 45): trained on the range, a referral code each, sales at the pool.
The Swim League in March
Academy vs academy with beginner categories and city finals: content for the hoardings and influencers that start on 15 Mar.
```

After clicking **W2 11 Jan**:
```text
Week 2: 11 Jan to 17 Jan 2027
Uttarayan 14 Jan14 Jan
Swim kit for every teammate (₹1,999), weekly practice11 Jan to 31 May, Pune and Gujarat and MP; Pune water plan
```

After clicking **W3 18 Jan**:
```text
Week 3: 18 Jan to 24 Jan 2027
Pune training 19-20 Jan19 Jan to 20 Jan, Pune; Gujarat water plan
Water move, checklist, top 15 families to 100% CAD18 Jan to 15 Feb, Pune and Gujarat; Pune water plan
```

After clicking **W4 25 Jan**:
```text
Week 4: 25 Jan to 31 Jan 2027
Republic Day 26 Jan26 Jan
```

After clicking **W5 1 Feb**:
```text
Week 5: 1 Feb to 7 Feb 2027
Wagholi: Raj Swimming Pool from 1 Feb1 Feb to 7 Feb, Pune; Pune partnerships sheet
NIBM: Varunah and Ganga Dhaam tie-ups end in March, renew before summer1 Feb to 31 Mar, Pune; Pune partnerships sheet
Swim Together: family weekends, societies, corporates, academy referrals1 Feb to 28 Feb; Great Indian Swim Project
90-day checkpoint (Swim Project)1 Feb to 7 Feb; Great Indian Swim Project
Biweekly catch-up1 Feb to 30 Jun, Gujarat; Gujarat water plan
AOPs in February, store by store (51)
7Wakad5Wagholi4SGS Mall3NIBM4Amanora4Motera4Nexus4Dumas3Baroda3Rajkot4Indore4Bhopal2Gwalior
```

After clicking **W6 8 Feb**:
```text
Week 6: 8 Feb to 14 Feb 2027
Beach Day, Surat8 Feb to 21 Feb, Gujarat; 2027 planner
Pune training 10-11 Feb10 Feb to 11 Feb, Pune; Gujarat water plan
Gujarat training 8-9 Feb8 Feb to 9 Feb, Gujarat; Gujarat water plan
```

After clicking **W7 15 Feb**:
```text
Week 7: 15 Feb to 21 Feb 2027
★ In-store live: summer campaign, CAD, golden peg15 Feb to 21 Feb, Pune and Gujarat; Pune water plan
★ Pune: at least 10 swimming academies in every catchment15 Feb to 20 Feb, Pune; Pune spend plan
★ Gujarat coaches onboarded (latest)15 Feb, Gujarat; Gujarat water plan
MP training 16-17 Feb16 Feb to 17 Feb, MP; Gujarat water plan
Golden peg challenge: weekly FCS, growth vs country, caps and goggle cases per goggle (ABQ)15 Feb to 30 Jun, Pune and Gujarat; Pune water plan
Family window: 4 dressed mannequins; entrance: Una, UV top + Fiti 500, kids combi (Motera, Dumas)15 Feb to 30 Jun, Gujarat; Gujarat water plan
Step 1.5 add-ons: goggle case, phone pocket, 3 L and 7 L pouches, mesh bag15 Feb to 30 Jun, Gujarat; Gujarat water plan
SS27 women's cover-up swimwear: Jisa Shorty, Rossa full zip, Rossa legging, Una skirt15 Feb to 30 Jun; India swimming plan
Window wall and store home page, stop rayons, CAB + TGs (₹1.10 L) + in-mall lollipops (₹4.24 L)15 Feb to 30 Jun, Pune; Pune water plan
Window wall, stop rayons, CAB + TGs, TV; Nexus in-mall; lollipops at Motera, Dumas, Baroda15 Feb to 30 Jun, Gujarat; Gujarat water plan
No in-store water plan in our files15 Feb to 30 Jun, MP
WhatsApp push 1 (Feb, week 3)15 Feb to 21 Feb, Pune and Gujarat; Pune water plan
New arrival x Summer collection on the store home page15 Feb to 30 Jun, Pune and Gujarat; Pune water plan
```

After clicking **W8 22 Feb**:
```text
Week 8: 22 Feb to 28 Feb 2027
Gujarat training 23-24 Feb23 Feb to 24 Feb, Gujarat; Gujarat water plan
Store visit (end Feb)22 Feb to 28 Feb, Gujarat; Gujarat water plan
Coaches seminar 26-28 Feb26 Feb to 28 Feb, Gujarat; Gujarat water plan
```

After clicking **W9 1 Mar**:
```text
Week 9: 1 Mar to 7 Mar 2027
Summer + summer camp1 Mar to 31 May; 2027 planner
Pune training 2-3 Mar2 Mar to 3 Mar, Pune; Gujarat water plan
Summer + summer camp: 50 influencers, ₹5 L (all sports; 2026: summer reels at ₹0.33 a view)1 Mar to 31 May, Pune; Pune spend plan
Decathlon Swim League: academy vs academy, beginner categories, city finals1 Mar to 31 Mar; Great Indian Swim Project
Women Who Swim on Women's Day weekend6 Mar to 7 Mar; our proposal
Quick commerce: stock ahead of demand, in-range cover (RDP), digital LMs for the rest, express delivery message1 Mar to 30 Jun, Pune and Gujarat; Pune water plan
Business plan March to June: Pune ₹17.65 Cr (+25%), Gujarat ₹9.00 Cr (+20%)1 Mar to 30 Jun, Pune and Gujarat; Pune water plan
AOPs in March, store by store (52)
8Wakad5Wagholi3SGS Mall4NIBM3Amanora5Motera4Nexus4Dumas4Baroda2Rajkot4Indore3Bhopal3Gwalior
```

After clicking **W10 8 Mar**:
```text
Week 10: 8 Mar to 14 Mar 2027
Women's Day 8 Mar8 Mar
WhatsApp push 2 (Mar, week 2)8 Mar to 14 Mar, Pune and Gujarat; Pune water plan
```

After clicking **W11 15 Mar**:
```text
Week 11: 15 Mar to 21 Mar 2027
★ Outstore live: hoardings, pools, flyers15 Mar to 21 Mar, Pune and Gujarat; Pune water plan
11 hoardings live: Wakad 3, Amanora 2, Wagholi 2, city 2, SGS 1, NIBM 1 (₹15.7 L; run length to confirm)15 Mar to 31 May, Pune; Pune water plan
3D city hoarding: "Summer fun with water" (budget not set)15 Mar to 31 May, Gujarat; Gujarat water plan
Flyers at pools, societies, schools (Pune ₹81,000; Nexus ₹30,000)15 Mar to 30 Apr, Pune and Gujarat; Pune water plan
Test: "The City Needs a Swim" digital hoardings with a QR code15 Mar to 11 Apr; Great Indian Swim Project
Instagram influencers, 3 months (₹12 L) + ad-boost reels (₹50,000)15 Mar to 13 Jun, Pune; Pune water plan
Instagram influencers, ₹20,000 per store (Nexus, Motera, Dumas, Baroda)15 Mar to 30 Apr, Gujarat; Gujarat water plan
Learn swimming with Decathlon x coach: Townscript sign-ups, free goggle with a full set (new customers)15 Mar to 30 Jun, Pune and Gujarat; Pune water plan
```

After clicking **W12 22 Mar**:
```text
Week 12: 22 Mar to 28 Mar 2027
Holi 22 Mar22 Mar
```

After clicking **W13 29 Mar**:
```text
Week 13: 29 Mar to 4 Apr 2027
★ Wagholi: Kavya pool from 1 Apr1 Apr to 4 Apr, Pune; Pune partnerships sheet
Summer Swim Movement: school holidays, 1,000 People milestone, starter kits1 Apr to 30 Apr; Great Indian Swim Project
```

After clicking **STATE All stores + Q4 2026**:
```text
Q4 2026, week by week
September 2026
₹2.23 Cr water
October 2026
₹2.17 Cr water
November 2026
₹52.7 L water (to 8 Nov), 53 AOPs
December 2026
water: no data yet, 61 AOPs
W3921 Sep
W4028 Sep
W415 Oct
W4212 Oct
W4319 Oct
W4426 Oct
W452 Nov
W469 NovWe are here
W4716 Nov
W4823 Nov
W4930 Nov
W507 Dec
W5114 Dec
W5221 Dec
W5328 Dec
Winter and travelDiwali 8 NovChildren's Day 14 NovGujaratSurat Adajan store opens, 18 DecChristmas 25 DecWinter
★ ✓ Store ranges validated (week 39)★ ✓ Brand x retail range validation (week 40)★ ✓ Store maps validated (week 41)★ Registrations open: Make Your Catchment Swim
Recruit the water team, all in place by 10 Jan (every teammate a swimmer)Name one Swimming Champion per city and store
✓ SS27 offer selection and store mass plansBeginner kit and starter-wall brief
One registration form, consent and referral trackingLocal paid digital, geo-targeted (₹1 L, Dec to Apr)
Creators and community voices (₹45,000)
Academies: Pune 7, Gujarat 12, MP 9 (target 28)Map academies and pools; agree trial offer, referral ID, capacity, safetyPuneAmanora: 7 pool tie-ups end in Dec, renew them
Not in the AOP planNot in the AOP plan53 AOPs Pune 22, Gujarat 19, MP 1261 AOPs Pune 27, Gujarat 21, MP 13
Build the ecosystemMake Your Catchment Swim: beginner sessions, Aqua Zumba pilot per city, first stories30-Day Swim Challenge: swim streaks, Women Who Swim, creator stories
Swim Project starts: ₹8 L, phased, 90-day checkpointBaseline: swimming sales before launchWeekly rhythm: Mon numbers, Wed partners, Fri weekend check, weekend sessions
1. Hiking 22.0%2. Fitness outfit 16.4%3. Running 9.2%4. Kids' cycling, skates 5.9%5. Swimming 5.0%1. Hiking 21.1%2. Fitness outfit 15.9%3. Running 9.5%4. Kids' cycling, skates 6.2%6. Swimming 4.5%1. Hiking 24.9%2. Fitness outfit 15.1%3. Running 9.3%4. Cycling (sport bikes) 4.9%6. Swimming 4.0%November to the 8thDecember: no 2026 data yet
Week 46: 9 Nov to 15 Nov 2026
Winter and travel1 Oct to 31 Dec; 2027 planner
Children's Day 14 Nov14 Nov
Name one Swimming Champion per city and store2 Nov to 29 Nov; Great Indian Swim Project
Beginner kit and starter-wall brief9 Nov to 29 Nov; Great Indian Swim Project
One registration form, consent and referral tracking2 Nov to 29 Nov; Great Indian Swim Project
Map academies and pools; agree trial offer, referral ID, capacity, safety2 Nov to 29 Nov; Great Indian Swim Project
Build the ecosystem2 Nov to 30 Nov; Great Indian Swim Project
Baseline: swimming sales before launch9 Nov to 29 Nov; Great Indian Swim Project
AOPs in November, store by store (53)
5Wakad5Wagholi4SGS Mall4NIBM4Amanora4Motera4Nexus4Dumas4Baroda3Rajkot5Indore4Bhopal3Gwalior
What we can do, Q4 2026
Lock the pools before the peak
Renew Amanora's 7 pool tie-ups that end in December and sign the 28 academies of the Swim Project (Pune 7, Gujarat 12, MP 9) before sessions are advertised.
One owner per city
A named Swimming Champion owns the weekly numbers: registrations, attendance, sales. Not just the event calendar.
Measure from day one
One form, one QR per store, academy and campaign, and a sales baseline in November, so every rupee after launch can be traced.
Adajan gets water from the start
The new Surat store opens on 18 Dec and is not in the Gujarat water plan. Copy the Dumas Road set-up and staff it before 15 Feb.
```

After clicking **STATE All stores + Q4 2026 > W39 21 Sep**:
```text
Week 39: 21 Sep to 27 Sep 2026
★ Store ranges validated (week 39)21 Sep to 27 Sep, Pune and Gujarat; Pune water plan
SS27 offer selection and store mass plans21 Sep to 11 Oct, Pune and Gujarat; Pune water plan
AOPs in September, store by store
September 2026 is outside the AOP plan (Nov 2026 to Oct 2027).
```

After clicking **STATE All stores + Q4 2026 > W40 28 Sep**:
```text
Week 40: 28 Sep to 4 Oct 2026
★ Brand x retail range validation (week 40)28 Sep to 4 Oct, Pune and Gujarat; Pune water plan
```

After clicking **STATE All stores + Q4 2026 > W41 5 Oct**:
```text
Week 41: 5 Oct to 11 Oct 2026
★ Store maps validated (week 41)5 Oct to 11 Oct, Pune and Gujarat; Pune water plan
AOPs in October, store by store
October 2026 is outside the AOP plan (Nov 2026 to Oct 2027).
```

After clicking **STATE All stores + Q4 2026 > W42 12 Oct**:
```text
Week 42: 12 Oct to 18 Oct 2026
```

After clicking **STATE All stores + Q4 2026 > W43 19 Oct**:
```text
Week 43: 19 Oct to 25 Oct 2026
```

After clicking **STATE All stores + Q4 2026 > W44 26 Oct**:
```text
Week 44: 26 Oct to 1 Nov 2026
```

After clicking **STATE All stores + Q4 2026 > W45 2 Nov**:
```text
Week 45: 2 Nov to 8 Nov 2026
Diwali 8 Nov8 Nov
Swim Project starts: ₹8 L, phased, 90-day checkpoint2 Nov to 8 Nov; Great Indian Swim Project
```

After clicking **STATE All stores + Q4 2026 > W47 16 Nov**:
```text
Week 47: 16 Nov to 22 Nov 2026
```

After clicking **STATE All stores + Q4 2026 > W48 23 Nov**:
```text
Week 48: 23 Nov to 29 Nov 2026
```

After clicking **STATE All stores + Q4 2026 > W49 30 Nov**:
```text
Week 49: 30 Nov to 6 Dec 2026
★ Registrations open: Make Your Catchment Swim1 Dec to 6 Dec; Great Indian Swim Project
Amanora: 7 pool tie-ups end in Dec, renew them1 Dec to 31 Dec, Pune; Pune partnerships sheet
Make Your Catchment Swim: beginner sessions, Aqua Zumba pilot per city, first stories1 Dec to 31 Dec; Great Indian Swim Project
```

After clicking **STATE All stores + Q4 2026 > W50 7 Dec**:
```text
Week 50: 7 Dec to 13 Dec 2026
AOPs in December, store by store (61)
6Wakad6Wagholi5SGS Mall5NIBM5Amanora5Motera5Nexus5Dumas4Baroda2Rajkot5Indore5Bhopal3Gwalior
```

After clicking **STATE All stores + Q4 2026 > W51 14 Dec**:
```text
Week 51: 14 Dec to 20 Dec 2026
Surat Adajan store opens, 18 Dec18 Dec to 20 Dec, Gujarat
```

After clicking **STATE All stores + Q4 2026 > W52 21 Dec**:
```text
Week 52: 21 Dec to 27 Dec 2026
Christmas 25 Dec25 Dec
```

After clicking **STATE All stores + Q4 2026 > W53 28 Dec**:
```text
Week 53: 28 Dec to 3 Jan 2027
```

After clicking **STATE All stores + Q2 2027**:
```text
Q2 2027, week by week
April 2027
₹6.81 Cr water, 48 AOPs
May 2027
₹7.46 Cr water, 43 AOPs
June 2027
₹4.13 Cr water, 28 AOPs
W145 Apr
W1512 Apr
W1619 Apr
W1726 Apr
W183 May
W1910 May
W2017 May
W2124 May
W2231 May
W237 Jun
W2414 Jun
W2521 Jun
W2628 Jun
Summer + summer campGudi Padwa 8 AprSchool summer holidays (dates vary by board)Maharashtra Day 1 MayMonsoon and back to schoolYoga Day 21 Jun51st anniversary
★ Peak: April and May are the two biggest water months
Swim kit for every teammate (₹1,999), weekly practice
Golden peg challenge: weekly FCS, growth vs country, caps and goggle cases per goggle (ABQ)GujaratFamily window: 4 dressed mannequins; entrance: Una, UV top + Fiti 500, kids combi (Motera, Dumas)GujaratStep 1.5 add-ons: goggle case, phone pocket, 3 L and 7 L pouches, mesh bagSS27 women's cover-up swimwear: Jisa Shorty, Rossa full zip, Rossa legging, Una skirtSwim all year: keep the core range (goggles, caps, swimsuits, towels) for regulars
New arrival x Summer collection on the store home pageLocal paid digital, geo-targeted (₹1 L, Dec to Apr)WhatsApp push 3 (Apr, week 2)WhatsApp push 4 (May, week 1)
PuneInstagram influencers, 3 months (₹12 L) + ad-boost reels (₹50,000)PuneSummer + summer camp: 50 influencers, ₹5 L (all sports; 2026: summer reels at ₹0.33 a view)Creators and community voices (₹45,000)GujaratInstagram influencers, ₹20,000 per store (Nexus, Motera, Dumas, Baroda)
PuneWakad: Bluewater and Proswim tie-ups end in May, renew
48 AOPs Pune 20, Gujarat 19, MP 943 AOPs Pune 17, Gujarat 17, MP 928 AOPs Pune 13, Gujarat 10, MP 5
Learn swimming with Decathlon x coach: Townscript sign-ups, free goggle with a full set (new customers)Summer Swim Movement: school holidays, 1,000 People milestone, starter kitsSummer Camp (event IP): learn-to-swim week with partner poolsSports Utsav
Quick commerce: stock ahead of demand, in-range cover (RDP), digital LMs for the rest, express delivery messageOnline and quick commerce carry the off-season
Business plan March to June: Pune ₹17.65 Cr (+25%), Gujarat ₹9.00 Cr (+20%)GujaratBiweekly catch-upWeekly rhythm: Mon numbers, Wed partners, Fri weekend check, weekend sessionsSwim Project review: 3,000 sign-ups, 1,500 first swims, 600 repeat, 600 buyers, ₹15 L
1. Hiking 17.1%2. Fitness outfit 15.3%3. Swimming 11.6%4. Running 8.2%1. Hiking 20.9%2. Fitness outfit 15.4%3. Swimming 10.6%4. Running 7.7%1. Hiking 19.8%2. Fitness outfit 16.0%3. Running 8.0%4. Kids' cycling, skates 7.5%5. Swimming 7.0%
Week 14: 5 Apr to 11 Apr 2027
Gudi Padwa 8 Apr8 Apr
★ Peak: April and May are the two biggest water months5 Apr to 30 May; our proposal
WhatsApp push 3 (Apr, week 2)8 Apr to 14 Apr, Pune and Gujarat; Pune water plan
AOPs in April, store by store (48)
5Wakad5Wagholi3SGS Mall4NIBM3Amanora5Motera4Nexus4Dumas4Baroda2Rajkot4Indore3Bhopal2Gwalior
What we can do, Q2 2027
Win April and May
In 2026 April (₹6.81 Cr) and May (₹7.46 Cr) were the two biggest water months in the West, and swimming was 11.6% of all April turnover.
School holidays = learners
Learn-to-swim camps with partner pools as the summer camp; starter kits and family bundles for parents (Priority 2: capture the summer learners).
Never run out
Quick commerce and express delivery for water sports; anticipate demand per store so goggles, caps and kids' swimwear never go out of stock.
Renew before it ends
Wakad's Bluewater and Proswim tie-ups end in May: renew while the season is running.
Count what happened
Close the Swim Project in early May against its targets: 3,000 sign-ups, 1,500 first swims, 600 repeat swimmers, 600 buyers, ₹15 L sales.
```

After clicking **STATE All stores + Q2 2027 > W15 12 Apr**:
```text
Week 15: 12 Apr to 18 Apr 2027
```

After clicking **STATE All stores + Q2 2027 > W16 19 Apr**:
```text
Week 16: 19 Apr to 25 Apr 2027
School summer holidays (dates vary by board)19 Apr to 13 Jun
Summer Camp (event IP): learn-to-swim week with partner pools19 Apr to 2 May; 2027 planner
```

After clicking **STATE All stores + Q2 2027 > W17 26 Apr**:
```text
Week 17: 26 Apr to 2 May 2027
Maharashtra Day 1 May1 May
WhatsApp push 4 (May, week 1)1 May to 7 May, Pune and Gujarat; Pune water plan
Wakad: Bluewater and Proswim tie-ups end in May, renew1 May to 31 May, Pune; Pune partnerships sheet
Sports Utsav1 May to 31 May; 2027 planner
```

After clicking **STATE All stores + Q2 2027 > W18 3 May**:
```text
Week 18: 3 May to 9 May 2027
Swim Project review: 3,000 sign-ups, 1,500 first swims, 600 repeat, 600 buyers, ₹15 L3 May to 9 May; Great Indian Swim Project
AOPs in May, store by store (43)
4Wakad4Wagholi4SGS Mall3NIBM2Amanora4Motera4Nexus4Dumas4Baroda1Rajkot4Indore4Bhopal1Gwalior
```

After clicking **STATE All stores + Q2 2027 > W19 10 May**:
```text
Week 19: 10 May to 16 May 2027
```

After clicking **STATE All stores + Q2 2027 > W20 17 May**:
```text
Week 20: 17 May to 23 May 2027
```

After clicking **STATE All stores + Q2 2027 > W21 24 May**:
```text
Week 21: 24 May to 30 May 2027
```

After clicking **STATE All stores + Q2 2027 > W22 31 May**:
```text
Week 22: 31 May to 6 Jun 2027
Monsoon and back to school1 Jun to 30 Sep; 2027 planner
```

After clicking **STATE All stores + Q2 2027 > W23 7 Jun**:
```text
Week 23: 7 Jun to 13 Jun 2027
AOPs in June, store by store (28)
4Wakad3Wagholi2SGS Mall2NIBM2Amanora2Motera3Nexus2Dumas2Baroda1Rajkot2Indore2Bhopal1Gwalior
```

After clicking **STATE All stores + Q2 2027 > W24 14 Jun**:
```text
Week 24: 14 Jun to 20 Jun 2027
```

After clicking **STATE All stores + Q2 2027 > W25 21 Jun**:
```text
Week 25: 21 Jun to 27 Jun 2027
Yoga Day 21 Jun21 Jun
```

After clicking **STATE All stores + Q2 2027 > W26 28 Jun**:
```text
Week 26: 28 Jun to 4 Jul 2027
51st anniversary1 Jul to 31 Jul; 2027 planner
Swim all year: keep the core range (goggles, caps, swimsuits, towels) for regulars1 Jul to 30 Sep; India swimming plan
Online and quick commerce carry the off-season1 Jul to 30 Sep; our proposal
```

After clicking **STATE All stores + Q3 2027**:
```text
Q3 2027, week by week
July 2027
₹2.90 Cr water, 16 AOPs
August 2027
₹2.58 Cr water, 9 AOPs
September 2027
₹2.23 Cr water, 3 AOPs
W275 Jul
W2812 Jul
W2919 Jul
W3026 Jul
W312 Aug
W329 Aug
W3316 Aug
W3423 Aug
W3530 Aug
W366 Sep
W3713 Sep
W3820 Sep
W3927 Sep
Monsoon and back to school51st anniversaryAshadhi Ekadashi 13 JulClearance saleIndependence Day 15 AugGanesh Chaturthi 3 SepWinter and travel
★ Store ranges for SS28 validated (week 39, as in 2026)
Swim all year: keep the core range (goggles, caps, swimsuits, towels) for regulars
Monsoon + travel campaign: indoor pools, resorts, Goa
Coaches: product training, sales at the pool, keep them affiliated
16 AOPs Pune 7, Gujarat 6, MP 39 AOPs Pune 4, Gujarat 3, MP 23 AOPs Pune 3, Gujarat 0, MP 0
Celebrate everyone who learnt to swim this year (the Kerala model)
Online and quick commerce carry the off-season
Summer review: turnover vs ₹26.65 Cr, families, ABQ, pools, coaches
1. Hiking 22.0%2. Fitness outfit 17.6%3. Running 8.3%4. Kids' cycling, skates 6.0%5. Swimming 4.8%1. Fitness outfit 18.7%2. Hiking 18.0%3. Running 8.8%4. Kids' cycling, skates 6.9%5. Swimming 5.0%1. Hiking 22.0%2. Fitness outfit 16.4%3. Running 9.2%4. Kids' cycling, skates 5.9%5. Swimming 5.0%
Week 27: 5 Jul to 11 Jul 2027
Monsoon + travel campaign: indoor pools, resorts, Goa5 Jul to 26 Sep; India swimming plan
Coaches: product training, sales at the pool, keep them affiliated5 Jul to 26 Sep; India swimming plan
Summer review: turnover vs ₹26.65 Cr, families, ABQ, pools, coaches5 Jul to 18 Jul; our proposal
AOPs in July, store by store (16)
3Wakad2Wagholi1SGS Mall0NIBM1Amanora1Motera2Nexus1Dumas1Baroda1Rajkot1Indore1Bhopal1Gwalior
What we can do, Q3 2027
Swimming is not only for summer
The India Strategic A4 lists 'seen as a seasonal sport' as a weakness while the weather allows swimming all year. Keep the core range and the regulars.
Monsoon and travel
Indoor pools, resorts and beach holidays: India tops 10 Asian markets in searches for hotels with pools.
Keep coaches close
Product training and sales at the pool through the off-season, so they are ready for SS28.
Review and plan SS28
Summer review in July, then the SS28 range validated in week 39, as in 2026.
```

After clicking **STATE All stores + Q3 2027 > W28 12 Jul**:
```text
Week 28: 12 Jul to 18 Jul 2027
Ashadhi Ekadashi 13 Jul13 Jul
```

After clicking **STATE All stores + Q3 2027 > W29 19 Jul**:
```text
Week 29: 19 Jul to 25 Jul 2027
```

After clicking **STATE All stores + Q3 2027 > W30 26 Jul**:
```text
Week 30: 26 Jul to 1 Aug 2027
Clearance sale1 Aug to 31 Aug; 2027 planner
```

After clicking **STATE All stores + Q3 2027 > W31 2 Aug**:
```text
Week 31: 2 Aug to 8 Aug 2027
AOPs in August, store by store (9)
1Wakad1Wagholi1SGS Mall0NIBM1Amanora1Motera0Nexus1Dumas1Baroda0Rajkot1Indore1Bhopal0Gwalior
```

After clicking **STATE All stores + Q3 2027 > W32 9 Aug**:
```text
Week 32: 9 Aug to 15 Aug 2027
Independence Day 15 Aug15 Aug
```

After clicking **STATE All stores + Q3 2027 > W33 16 Aug**:
```text
Week 33: 16 Aug to 22 Aug 2027
```

After clicking **STATE All stores + Q3 2027 > W34 23 Aug**:
```text
Week 34: 23 Aug to 29 Aug 2027
```

After clicking **STATE All stores + Q3 2027 > W35 30 Aug**:
```text
Week 35: 30 Aug to 5 Sep 2027
Ganesh Chaturthi 3 Sep3 Sep
```

After clicking **STATE All stores + Q3 2027 > W36 6 Sep**:
```text
Week 36: 6 Sep to 12 Sep 2027
Celebrate everyone who learnt to swim this year (the Kerala model)6 Sep to 19 Sep; India swimming plan
AOPs in September, store by store (3)
1Wakad1Wagholi0SGS Mall1NIBM0Amanora0Motera0Nexus0Dumas0Baroda0Rajkot0Indore0Bhopal0Gwalior
```

After clicking **STATE All stores + Q3 2027 > W37 13 Sep**:
```text
Week 37: 13 Sep to 19 Sep 2027
```

After clicking **STATE All stores + Q3 2027 > W38 20 Sep**:
```text
Week 38: 20 Sep to 26 Sep 2027
```

After clicking **STATE All stores + Q3 2027 > W39 27 Sep**:
```text
Week 39: 27 Sep to 3 Oct 2027
★ Store ranges for SS28 validated (week 39, as in 2026)27 Sep to 3 Oct, Pune and Gujarat; our proposal
```

After clicking **STATE All stores + Q4 2027**:
```text
Q4 2027, week by week
October 2027
₹2.17 Cr water, 36 AOPs
November 2027
₹52.7 L water (to 8 Nov)
December 2027
water: no data yet
W404 Oct
W4111 Oct
W4218 Oct
W4325 Oct
W441 Nov
W458 Nov
W4615 Nov
W4722 Nov
W4829 Nov
W496 Dec
W5013 Dec
W5120 Dec
W5227 Dec
Winter and travelDussehra 9 OctDiwali 29 OctBlack Friday 26-29 NovChristmas 25 Dec
★ Brand x retail validation (week 40)★ Store maps validated (week 41)
Recruit the SS28 water team
CAD validation for summer 2028 (November)
Winter travel: swimwear for holidays and hotel pools
PuneRenew pool and academy tie-ups for 2028; Wagholi Club 360 starts in Dec
36 AOPs Pune 14, Gujarat 14, MP 8Not in the AOP planNot in the AOP plan
Build the ecosystem for summer 2028 (the Swim Project, round 2)
1. Hiking 21.1%2. Fitness outfit 15.9%3. Running 9.5%4. Kids' cycling, skates 6.2%6. Swimming 4.5%1. Hiking 24.9%2. Fitness outfit 15.1%3. Running 9.3%4. Cycling (sport bikes) 4.9%6. Swimming 4.0%November to the 8thDecember: no 2026 data yet
Week 40: 4 Oct to 10 Oct 2027
Dussehra 9 Oct9 Oct
★ Brand x retail validation (week 40)4 Oct to 10 Oct, Pune and Gujarat; our proposal
Winter travel: swimwear for holidays and hotel pools4 Oct to 26 Dec; India swimming plan
AOPs in October, store by store (36)
3Wakad3Wagholi3SGS Mall2NIBM3Amanora3Motera3Nexus3Dumas3Baroda2Rajkot3Indore3Bhopal2Gwalior
What we can do, Q4 2027
Same cycle, earlier
Weeks 40 and 41 for range and store maps, CAD validation in November, team recruited by early January.
Winter travel swim
Swimwear for holiday pools and trips through Diwali, Black Friday and Christmas.
Round 2 of the Swim Project
Rebuild the academy network for 2028 with what worked in 2027.
```

After clicking **STATE All stores + Q4 2027 > W41 11 Oct**:
```text
Week 41: 11 Oct to 17 Oct 2027
★ Store maps validated (week 41)11 Oct to 17 Oct, Pune and Gujarat; our proposal
```

After clicking **STATE All stores + Q4 2027 > W42 18 Oct**:
```text
Week 42: 18 Oct to 24 Oct 2027
```

After clicking **STATE All stores + Q4 2027 > W43 25 Oct**:
```text
Week 43: 25 Oct to 31 Oct 2027
Diwali 29 Oct29 Oct
```

After clicking **STATE All stores + Q4 2027 > W44 1 Nov**:
```text
Week 44: 1 Nov to 7 Nov 2027
Recruit the SS28 water team1 Nov to 31 Dec; our proposal
CAD validation for summer 2028 (November)1 Nov to 28 Nov; India swimming plan
Renew pool and academy tie-ups for 2028; Wagholi Club 360 starts in Dec1 Nov to 31 Dec, Pune; Pune partnerships sheet
Build the ecosystem for summer 2028 (the Swim Project, round 2)1 Nov to 31 Dec; our proposal
AOPs in November, store by store
November 2027 is outside the AOP plan (Nov 2026 to Oct 2027).
```

After clicking **STATE All stores + Q4 2027 > W45 8 Nov**:
```text
Week 45: 8 Nov to 14 Nov 2027
```

After clicking **STATE All stores + Q4 2027 > W46 15 Nov**:
```text
Week 46: 15 Nov to 21 Nov 2027
```

After clicking **STATE All stores + Q4 2027 > W47 22 Nov**:
```text
Week 47: 22 Nov to 28 Nov 2027
Black Friday 26-29 Nov26 Nov to 29 Nov; 2027 planner
```

After clicking **STATE All stores + Q4 2027 > W48 29 Nov**:
```text
Week 48: 29 Nov to 5 Dec 2027
```

After clicking **STATE All stores + Q4 2027 > W49 6 Dec**:
```text
Week 49: 6 Dec to 12 Dec 2027
AOPs in December, store by store
December 2027 is outside the AOP plan (Nov 2026 to Oct 2027).
```

After clicking **STATE All stores + Q4 2027 > W50 13 Dec**:
```text
Week 50: 13 Dec to 19 Dec 2027
```

After clicking **STATE All stores + Q4 2027 > W51 20 Dec**:
```text
Week 51: 20 Dec to 26 Dec 2027
```

After clicking **STATE All stores + Q4 2027 > W52 27 Dec**:
```text
Week 52: 27 Dec to 2 Jan 2028
```

After clicking **STATE Pune + Q4 2026**:
```text
Q4 2026, week by week, Pune
Weeks start on Monday. Bar: water turnover in the same month of 2026, Pune
₹1.05 Cr water
₹1.15 Cr water
₹24.3 L water (to 8 Nov), 22 AOPs
water: no data yet, 27 AOPs
Winter and travelDiwali 8 NovChildren's Day 14 NovChristmas 25 DecWinter
Academies: Pune 7, Gujarat 12, MP 9 (target 28)Map academies and pools; agree trial offer, referral ID, capacity, safetyAmanora: 7 pool tie-ups end in Dec, renew them
Not in the AOP planNot in the AOP plan22 AOPs Wakad 5, Wagholi 5, SGS Mall 4, NIBM 4, Amanora 427 AOPs Wakad 6, Wagholi 6, SGS Mall 5, NIBM 5, Amanora 5
Turnover share by sport, same month 2026 (Pune)
1. Hiking 20.1%2. Fitness outfit 18.2%3. Running 9.4%4. Kids' cycling, skates 5.9%5. Swimming 5.0%1. Fitness outfit 18.0%2. Hiking 17.9%3. Running 9.2%4. Kids' cycling, skates 7.0%6. Swimming 4.7%1. Hiking 19.2%2. Fitness outfit 17.9%3. Running 8.7%4. Cycling (sport bikes) 6.5%6. Swimming 4.4%November to the 8thDecember: no 2026 data yet
AOPs in November, store by store (22)
5Wakad5Wagholi4SGS Mall4NIBM4Amanora
```

After clicking **STATE Pune + Q4 2026 > W50 7 Dec**:
```text
AOPs in December, store by store (27)
6Wakad6Wagholi5SGS Mall5NIBM5Amanora
```

After clicking **STATE Pune + Q1 2027**:
```text
Q1 2027, week by week, Pune
₹1.02 Cr water, 22 AOPs
₹1.46 Cr water, 23 AOPs
₹3.29 Cr water, 23 AOPs
WinterUttarayan 14 JanRepublic Day 26 JanSummer + summer campWomen's Day 8 MarHoli 22 Mar
★ Water team in place★ In-store live: summer campaign, CAD, golden peg★ Pune: at least 10 swimming academies in every catchment★ Outstore live: hoardings, pools, flyers★ Wagholi: Kavya pool from 1 Apr
Recruit the water team, all in place by 10 Jan (every teammate a swimmer)Swim kit for every teammate (₹1,999), weekly practicePune training 19-20 JanPune training 10-11 FebPune training 2-3 Mar
Water move, checklist, top 15 families to 100% CADGolden peg challenge: weekly FCS, growth vs country, caps and goggle cases per goggle (ABQ)SS27 women's cover-up swimwear: Jisa Shorty, Rossa full zip, Rossa legging, Una skirt
Window wall and store home page, stop rayons, CAB + TGs (₹1.10 L) + in-mall lollipops (₹4.24 L)
11 hoardings live: Wakad 3, Amanora 2, Wagholi 2, city 2, SGS 1, NIBM 1 (₹15.7 L; run length to confirm)Flyers at pools, societies, schools (Pune ₹81,000; Nexus ₹30,000)Test: "The City Needs a Swim" digital hoardings with a QR code
Creators and community voices (₹45,000)Summer + summer camp: 50 influencers, ₹5 L (all sports; 2026: summer reels at ₹0.33 a view)Instagram influencers, 3 months (₹12 L) + ad-boost reels (₹50,000)
Sign 58 pools at ₹25,000: Wagholi 15, Amanora 10, Wakad 10, city 10, NIBM 8, SGS 5Affiliate 80 coaches with a ₹5,000 kit: Wakad 20, Amanora 20, others 10Academies: Pune 7, Gujarat 12, MP 9 (target 28)SGS: Nilu Phule pool tie-up ends 22 Jan, renewNIBM: Varunah and Ganga Dhaam tie-ups end in March, renew before summerWagholi: Raj Swimming Pool from 1 Feb
22 AOPs Wakad 7, Wagholi 5, SGS Mall 3, NIBM 4, Amanora 323 AOPs Wakad 7, Wagholi 5, SGS Mall 4, NIBM 3, Amanora 423 AOPs Wakad 8, Wagholi 5, SGS Mall 3, NIBM 4, Amanora 3
Weekly rhythm: Mon numbers, Wed partners, Fri weekend check, weekend sessions90-day checkpoint (Swim Project)Business plan March to June: Pune ₹17.65 Cr (+25%), Gujarat ₹9.00 Cr (+20%)
1. Hiking 20.5%2. Fitness outfit 17.4%3. Running 8.6%4. Kids' cycling, skates 6.3%6. Swimming 4.0%1. Fitness outfit 18.4%2. Hiking 16.6%3. Running 9.0%4. Swimming 7.2%1. Fitness outfit 18.1%2. Swimming 13.0%3. Hiking 12.9%4. Running 8.3%
AOPs in January, store by store (22)
7Wakad5Wagholi3SGS Mall4NIBM3Amanora
```

After clicking **STATE Pune + Q1 2027 > W5 1 Feb**:
```text
AOPs in February, store by store (23)
7Wakad5Wagholi4SGS Mall3NIBM4Amanora
```

After clicking **STATE Pune + Q1 2027 > W9 1 Mar**:
```text
AOPs in March, store by store (23)
8Wakad5Wagholi3SGS Mall4NIBM3Amanora
```

After clicking **STATE Pune + Q2 2027**:
```text
Q2 2027, week by week, Pune
₹3.61 Cr water, 20 AOPs
₹3.73 Cr water, 17 AOPs
₹1.86 Cr water, 13 AOPs
Golden peg challenge: weekly FCS, growth vs country, caps and goggle cases per goggle (ABQ)SS27 women's cover-up swimwear: Jisa Shorty, Rossa full zip, Rossa legging, Una skirtSwim all year: keep the core range (goggles, caps, swimsuits, towels) for regulars
Instagram influencers, 3 months (₹12 L) + ad-boost reels (₹50,000)Summer + summer camp: 50 influencers, ₹5 L (all sports; 2026: summer reels at ₹0.33 a view)Creators and community voices (₹45,000)
Wakad: Bluewater and Proswim tie-ups end in May, renew
20 AOPs Wakad 5, Wagholi 5, SGS Mall 3, NIBM 4, Amanora 317 AOPs Wakad 4, Wagholi 4, SGS Mall 4, NIBM 3, Amanora 213 AOPs Wakad 4, Wagholi 3, SGS Mall 2, NIBM 2, Amanora 2
Business plan March to June: Pune ₹17.65 Cr (+25%), Gujarat ₹9.00 Cr (+20%)Weekly rhythm: Mon numbers, Wed partners, Fri weekend check, weekend sessionsSwim Project review: 3,000 sign-ups, 1,500 first swims, 600 repeat, 600 buyers, ₹15 L
1. Fitness outfit 16.5%2. Hiking 15.8%3. Swimming 12.7%4. Running 7.9%1. Hiking 19.1%2. Fitness outfit 16.3%3. Swimming 11.2%4. Running 7.6%1. Hiking 20.3%2. Fitness outfit 16.6%3. Kids' cycling, skates 8.2%4. Running 7.7%5. Swimming 6.4%
AOPs in April, store by store (20)
5Wakad5Wagholi3SGS Mall4NIBM3Amanora
```

After clicking **STATE Pune + Q2 2027 > W18 3 May**:
```text
AOPs in May, store by store (17)
4Wakad4Wagholi4SGS Mall3NIBM2Amanora
```

After clicking **STATE Pune + Q2 2027 > W23 7 Jun**:
```text
AOPs in June, store by store (13)
4Wakad3Wagholi2SGS Mall2NIBM2Amanora
```

After clicking **STATE Pune + Q3 2027**:
```text
Q3 2027, week by week, Pune
₹1.20 Cr water, 7 AOPs
₹1.16 Cr water, 4 AOPs
₹1.05 Cr water, 3 AOPs
7 AOPs Wakad 3, Wagholi 2, SGS Mall 1, NIBM 0, Amanora 14 AOPs Wakad 1, Wagholi 1, SGS Mall 1, NIBM 0, Amanora 13 AOPs Wakad 1, Wagholi 1, SGS Mall 0, NIBM 1, Amanora 0
1. Hiking 25.4%2. Fitness outfit 17.7%3. Running 7.5%4. Kids' cycling, skates 5.6%6. Swimming 3.7%1. Fitness outfit 20.0%2. Hiking 19.4%3. Running 8.4%4. Kids' cycling, skates 7.0%6. Swimming 4.4%1. Hiking 20.1%2. Fitness outfit 18.2%3. Running 9.4%4. Kids' cycling, skates 5.9%5. Swimming 5.0%
AOPs in July, store by store (7)
3Wakad2Wagholi1SGS Mall0NIBM1Amanora
```

After clicking **STATE Pune + Q3 2027 > W31 2 Aug**:
```text
AOPs in August, store by store (4)
1Wakad1Wagholi1SGS Mall0NIBM1Amanora
```

After clicking **STATE Pune + Q3 2027 > W36 6 Sep**:
```text
1Wakad1Wagholi0SGS Mall1NIBM0Amanora
```

After clicking **STATE Pune + Q4 2027**:
```text
Q4 2027, week by week, Pune
₹1.15 Cr water, 14 AOPs
₹24.3 L water (to 8 Nov)
Renew pool and academy tie-ups for 2028; Wagholi Club 360 starts in Dec
14 AOPs Wakad 3, Wagholi 3, SGS Mall 3, NIBM 2, Amanora 3Not in the AOP planNot in the AOP plan
1. Fitness outfit 18.0%2. Hiking 17.9%3. Running 9.2%4. Kids' cycling, skates 7.0%6. Swimming 4.7%1. Hiking 19.2%2. Fitness outfit 17.9%3. Running 8.7%4. Cycling (sport bikes) 6.5%6. Swimming 4.4%November to the 8thDecember: no 2026 data yet
AOPs in October, store by store (14)
3Wakad3Wagholi3SGS Mall2NIBM3Amanora
```

After clicking **STATE Gujarat + Q4 2026**:
```text
Q4 2026, week by week, Gujarat
Weeks start on Monday. Bar: water turnover in the same month of 2026, Gujarat
₹87.4 L water
₹75.3 L water
₹24.1 L water (to 8 Nov), 19 AOPs
water: no data yet, 21 AOPs
Winter and travelDiwali 8 NovChildren's Day 14 NovSurat Adajan store opens, 18 DecChristmas 25 DecWinter
Academies: Pune 7, Gujarat 12, MP 9 (target 28)Map academies and pools; agree trial offer, referral ID, capacity, safety
Not in the AOP planNot in the AOP plan19 AOPs Motera 4, Nexus 4, Dumas 4, Baroda 4, Rajkot 321 AOPs Motera 5, Nexus 5, Dumas 5, Baroda 4, Rajkot 2
Turnover share by sport, same month 2026 (Gujarat)
1. Hiking 23.5%2. Fitness outfit 14.6%3. Running 8.9%4. Kids' cycling, skates 6.4%5. Swimming 5.3%1. Hiking 22.2%2. Fitness outfit 14.0%3. Running 10.1%4. Kids' cycling, skates 6.2%6. Swimming 4.6%1. Hiking 26.0%2. Fitness outfit 12.8%3. Running 10.0%4. Swimming 4.7%November to the 8thDecember: no 2026 data yet
AOPs in November, store by store (19)
4Motera4Nexus4Dumas4Baroda3Rajkot
```

After clicking **STATE Gujarat + Q4 2026 > W50 7 Dec**:
```text
AOPs in December, store by store (21)
5Motera5Nexus5Dumas4Baroda2Rajkot
```

After clicking **STATE Gujarat + Q1 2027**:
```text
Q1 2027, week by week, Gujarat
₹52.8 L water, 18 AOPs
₹89.5 L water, 18 AOPs
₹1.91 Cr water, 19 AOPs
WinterUttarayan 14 JanRepublic Day 26 JanBeach Day, SuratSummer + summer campWomen's Day 8 MarHoli 22 Mar
★ Water team in place★ In-store live: summer campaign, CAD, golden peg★ Gujarat coaches onboarded (latest)★ Outstore live: hoardings, pools, flyers
Recruit the water team, all in place by 10 Jan (every teammate a swimmer)Swim kit for every teammate (₹1,999), weekly practiceGujarat training 8-9 FebGujarat training 23-24 FebStore visit (end Feb)
Water move, checklist, top 15 families to 100% CADGolden peg challenge: weekly FCS, growth vs country, caps and goggle cases per goggle (ABQ)Family window: 4 dressed mannequins; entrance: Una, UV top + Fiti 500, kids combi (Motera, Dumas)Step 1.5 add-ons: goggle case, phone pocket, 3 L and 7 L pouches, mesh bagSS27 women's cover-up swimwear: Jisa Shorty, Rossa full zip, Rossa legging, Una skirt
Window wall, stop rayons, CAB + TGs, TV; Nexus in-mall; lollipops at Motera, Dumas, Baroda
3D city hoarding: "Summer fun with water" (budget not set)Flyers at pools, societies, schools (Pune ₹81,000; Nexus ₹30,000)Test: "The City Needs a Swim" digital hoardings with a QR code
Creators and community voices (₹45,000)Instagram influencers, ₹20,000 per store (Nexus, Motera, Dumas, Baroda)
Coaches onboarded (₹2.25 L, 45 coaches at ₹5,000) and pool tie-ups (₹4.5 L)Academies: Pune 7, Gujarat 12, MP 9 (target 28)Coaches seminar 26-28 Feb
18 AOPs Motera 4, Nexus 4, Dumas 4, Baroda 4, Rajkot 218 AOPs Motera 4, Nexus 4, Dumas 4, Baroda 3, Rajkot 319 AOPs Motera 5, Nexus 4, Dumas 4, Baroda 4, Rajkot 2
Weekly rhythm: Mon numbers, Wed partners, Fri weekend check, weekend sessionsBiweekly catch-up90-day checkpoint (Swim Project)Business plan March to June: Pune ₹17.65 Cr (+25%), Gujarat ₹9.00 Cr (+20%)
1. Hiking 22.9%2. Fitness outfit 13.6%3. Running 12.7%4. Kids' cycling, skates 5.7%12. Swimming 2.6%1. Hiking 19.0%2. Fitness outfit 14.7%3. Running 9.7%4. Kids' cycling, skates 7.0%5. Swimming 6.4%1. Fitness outfit 16.2%2. Hiking 13.9%3. Swimming 10.6%4. Running 8.6%
AOPs in January, store by store (18)
4Motera4Nexus4Dumas4Baroda2Rajkot
```

After clicking **STATE Gujarat + Q1 2027 > W5 1 Feb**:
```text
AOPs in February, store by store (18)
4Motera4Nexus4Dumas3Baroda3Rajkot
```

After clicking **STATE Gujarat + Q1 2027 > W9 1 Mar**:
```text
AOPs in March, store by store (19)
5Motera4Nexus4Dumas4Baroda2Rajkot
```

After clicking **STATE Gujarat + Q2 2027**:
```text
Q2 2027, week by week, Gujarat
₹2.33 Cr water, 19 AOPs
₹2.72 Cr water, 17 AOPs
₹1.64 Cr water, 10 AOPs
Golden peg challenge: weekly FCS, growth vs country, caps and goggle cases per goggle (ABQ)Family window: 4 dressed mannequins; entrance: Una, UV top + Fiti 500, kids combi (Motera, Dumas)Step 1.5 add-ons: goggle case, phone pocket, 3 L and 7 L pouches, mesh bagSS27 women's cover-up swimwear: Jisa Shorty, Rossa full zip, Rossa legging, Una skirtSwim all year: keep the core range (goggles, caps, swimsuits, towels) for regulars
19 AOPs Motera 5, Nexus 4, Dumas 4, Baroda 4, Rajkot 217 AOPs Motera 4, Nexus 4, Dumas 4, Baroda 4, Rajkot 110 AOPs Motera 2, Nexus 3, Dumas 2, Baroda 2, Rajkot 1
Business plan March to June: Pune ₹17.65 Cr (+25%), Gujarat ₹9.00 Cr (+20%)Biweekly catch-upWeekly rhythm: Mon numbers, Wed partners, Fri weekend check, weekend sessionsSwim Project review: 3,000 sign-ups, 1,500 first swims, 600 repeat, 600 buyers, ₹15 L
1. Hiking 17.8%2. Fitness outfit 14.3%3. Swimming 10.6%4. Running 8.1%1. Hiking 22.5%2. Fitness outfit 14.6%3. Swimming 9.9%4. Running 7.4%1. Hiking 18.4%2. Fitness outfit 15.5%3. Kids' cycling, skates 8.2%4. Running 8.2%5. Swimming 7.8%
AOPs in April, store by store (19)
```

After clicking **STATE Gujarat + Q2 2027 > W18 3 May**:
```text
4Motera4Nexus4Dumas4Baroda1Rajkot
```

After clicking **STATE Gujarat + Q2 2027 > W23 7 Jun**:
```text
AOPs in June, store by store (10)
2Motera3Nexus2Dumas2Baroda1Rajkot
```

After clicking **STATE Gujarat + Q3 2027**:
```text
Q3 2027, week by week, Gujarat
₹1.22 Cr water, 6 AOPs
₹87.4 L water, 0 AOPs
6 AOPs Motera 1, Nexus 2, Dumas 1, Baroda 1, Rajkot 13 AOPs Motera 1, Nexus 0, Dumas 1, Baroda 1, Rajkot 00 AOPs Motera 0, Nexus 0, Dumas 0, Baroda 0, Rajkot 0
1. Hiking 18.1%2. Fitness outfit 17.0%3. Running 9.0%4. Kids' cycling, skates 7.0%5. Swimming 6.2%1. Fitness outfit 17.1%2. Hiking 16.2%3. Running 9.3%4. Kids' cycling, skates 7.4%5. Swimming 5.9%1. Hiking 23.5%2. Fitness outfit 14.6%3. Running 8.9%4. Kids' cycling, skates 6.4%5. Swimming 5.3%
AOPs in July, store by store (6)
1Motera2Nexus1Dumas1Baroda1Rajkot
```

After clicking **STATE Gujarat + Q3 2027 > W31 2 Aug**:
```text
AOPs in August, store by store (3)
1Motera0Nexus1Dumas1Baroda0Rajkot
```

After clicking **STATE Gujarat + Q3 2027 > W36 6 Sep**:
```text
AOPs in September, store by store (0)
0Motera0Nexus0Dumas0Baroda0Rajkot
```

After clicking **STATE Gujarat + Q4 2027**:
```text
Q4 2027, week by week, Gujarat
₹75.3 L water, 14 AOPs
₹24.1 L water (to 8 Nov)
14 AOPs Motera 3, Nexus 3, Dumas 3, Baroda 3, Rajkot 2Not in the AOP planNot in the AOP plan
1. Hiking 22.2%2. Fitness outfit 14.0%3. Running 10.1%4. Kids' cycling, skates 6.2%6. Swimming 4.6%1. Hiking 26.0%2. Fitness outfit 12.8%3. Running 10.0%4. Swimming 4.7%November to the 8thDecember: no 2026 data yet
3Motera3Nexus3Dumas3Baroda2Rajkot
```

After clicking **STATE MP + Q4 2026**:
```text
Q4 2026, week by week, MP
Weeks start on Monday. Bar: water turnover in the same month of 2026, MP
₹31.2 L water
₹27.3 L water
₹4.30 L water (to 8 Nov), 12 AOPs
water: no data yet, 13 AOPs
★ Registrations open: Make Your Catchment Swim
Beginner kit and starter-wall brief
Not in the AOP planNot in the AOP plan12 AOPs Indore 5, Bhopal 4, Gwalior 313 AOPs Indore 5, Bhopal 5, Gwalior 3
Turnover share by sport, same month 2026 (MP)
1. Hiking 24.1%2. Fitness outfit 15.8%3. Running 9.4%4. Fitness equipment 5.0%5. Swimming 4.5%1. Hiking 28.2%2. Fitness outfit 13.9%3. Running 9.4%4. Cycling (sport bikes) 5.0%7. Swimming 3.5%1. Hiking 36.4%2. Fitness outfit 13.9%3. Running 9.1%4. Kids' cycling, skates 3.5%11. Swimming 1.8%November to the 8thDecember: no 2026 data yet
AOPs in November, store by store (12)
5Indore4Bhopal3Gwalior
```

After clicking **STATE MP + Q4 2026 > W39 21 Sep**:
```text
Nothing planned this week for MP.
```

After clicking **STATE MP + Q4 2026 > W50 7 Dec**:
```text
AOPs in December, store by store (13)
5Indore5Bhopal3Gwalior
```

After clicking **STATE MP + Q1 2027**:
```text
Q1 2027, week by week, MP
₹18.8 L water, 9 AOPs
₹31.9 L water, 10 AOPs
₹62.0 L water, 10 AOPs
★ Water team in place
Recruit the water team, all in place by 10 Jan (every teammate a swimmer)Swim kit for every teammate (₹1,999), weekly practiceMP training 16-17 Feb
SS27 women's cover-up swimwear: Jisa Shorty, Rossa full zip, Rossa legging, Una skirt
No in-store water plan in our files
Test: "The City Needs a Swim" digital hoardings with a QR code
Local paid digital, geo-targeted (₹1 L, Dec to Apr)
Academies: Pune 7, Gujarat 12, MP 9 (target 28)
9 AOPs Indore 3, Bhopal 3, Gwalior 310 AOPs Indore 4, Bhopal 4, Gwalior 210 AOPs Indore 4, Bhopal 3, Gwalior 3
30-Day Swim Challenge: swim streaks, Women Who Swim, creator storiesSwim Together: family weekends, societies, corporates, academy referralsDecathlon Swim League: academy vs academy, beginner categories, city finalsWomen Who Swim on Women's Day weekendSummer Swim Movement: school holidays, 1,000 People milestone, starter kits
Weekly rhythm: Mon numbers, Wed partners, Fri weekend check, weekend sessions90-day checkpoint (Swim Project)
1. Hiking 32.1%2. Fitness outfit 14.0%3. Running 9.4%4. Fitness equipment 3.6%12. Swimming 2.0%1. Hiking 17.6%2. Fitness outfit 17.0%3. Running 11.7%4. Swimming 5.6%1. Fitness outfit 17.3%2. Hiking 14.1%3. Running 10.9%4. Swimming 8.7%
AOPs in January, store by store (9)
3Indore3Bhopal3Gwalior
```

After clicking **STATE MP + Q1 2027 > W5 1 Feb**:
```text
AOPs in February, store by store (10)
4Indore4Bhopal2Gwalior
```

After clicking **STATE MP + Q1 2027 > W9 1 Mar**:
```text
AOPs in March, store by store (10)
4Indore3Bhopal3Gwalior
```

After clicking **STATE MP + Q2 2027**:
```text
Q2 2027, week by week, MP
₹87.3 L water, 9 AOPs
₹1.02 Cr water, 9 AOPs
₹63.3 L water, 5 AOPs
SS27 women's cover-up swimwear: Jisa Shorty, Rossa full zip, Rossa legging, Una skirtSwim all year: keep the core range (goggles, caps, swimsuits, towels) for regulars
9 AOPs Indore 4, Bhopal 3, Gwalior 29 AOPs Indore 4, Bhopal 4, Gwalior 15 AOPs Indore 2, Bhopal 2, Gwalior 1
Summer Swim Movement: school holidays, 1,000 People milestone, starter kitsSummer Camp (event IP): learn-to-swim week with partner poolsSports Utsav
Weekly rhythm: Mon numbers, Wed partners, Fri weekend check, weekend sessionsSwim Project review: 3,000 sign-ups, 1,500 first swims, 600 repeat, 600 buyers, ₹15 L
1. Hiking 19.7%2. Fitness outfit 14.2%3. Swimming 10.9%4. Running 9.4%1. Hiking 22.1%2. Fitness outfit 14.9%3. Swimming 10.6%4. Running 8.6%1. Hiking 22.0%2. Fitness outfit 15.4%3. Running 8.3%4. Swimming 7.2%
AOPs in April, store by store (9)
4Indore3Bhopal2Gwalior
```

After clicking **STATE MP + Q2 2027 > W18 3 May**:
```text
AOPs in May, store by store (9)
4Indore4Bhopal1Gwalior
```

After clicking **STATE MP + Q2 2027 > W23 7 Jun**:
```text
AOPs in June, store by store (5)
2Indore2Bhopal1Gwalior
```

After clicking **STATE MP + Q3 2027**:
```text
Q3 2027, week by week, MP
₹48.4 L water, 3 AOPs
₹37.3 L water, 2 AOPs
₹31.2 L water, 0 AOPs
3 AOPs Indore 1, Bhopal 1, Gwalior 12 AOPs Indore 1, Bhopal 1, Gwalior 00 AOPs Indore 0, Bhopal 0, Gwalior 0
1. Fitness outfit 18.5%2. Hiking 18.0%3. Running 9.2%4. Swimming 6.0%1. Fitness outfit 18.2%2. Hiking 17.5%3. Running 9.2%4. Fitness equipment 6.0%6. Swimming 4.9%1. Hiking 24.1%2. Fitness outfit 15.8%3. Running 9.4%4. Fitness equipment 5.0%5. Swimming 4.5%
AOPs in July, store by store (3)
1Indore1Bhopal1Gwalior
```

After clicking **STATE MP + Q3 2027 > W31 2 Aug**:
```text
AOPs in August, store by store (2)
1Indore1Bhopal0Gwalior
```

After clicking **STATE MP + Q3 2027 > W36 6 Sep**:
```text
0Indore0Bhopal0Gwalior
```

After clicking **STATE MP + Q4 2027**:
```text
Q4 2027, week by week, MP
₹27.3 L water, 8 AOPs
₹4.30 L water (to 8 Nov)
8 AOPs Indore 3, Bhopal 3, Gwalior 2Not in the AOP planNot in the AOP plan
1. Hiking 28.2%2. Fitness outfit 13.9%3. Running 9.4%4. Cycling (sport bikes) 5.0%7. Swimming 3.5%1. Hiking 36.4%2. Fitness outfit 13.9%3. Running 9.1%4. Kids' cycling, skates 3.5%11. Swimming 1.8%November to the 8thDecember: no 2026 data yet
AOPs in October, store by store (8)
3Indore3Bhopal2Gwalior
```

#### water2027 › `look`: Be one with water
- img: assets/img/water/water-women-cover.jpg [alt: Women in cover-up swimwear by a pool, shot in India]; assets/img/water/water-women-pool.jpg [alt: Three women in cover-up swimwear sitting at a pool]; assets/img/water/water-snorkel.jpg [alt: Snorkeller with a full-face mask]; assets/img/su/deca-kayak.jpg [alt: Kayakers on a lake from above]; assets/img/water/olga-kids.jpg [alt: Kids' swimsuit]; assets/img/water/goggles-kuwee.jpg [alt: Kids' goggles 100 Kuwee]; assets/img/water/boxer-100.jpg [alt: Boxer swim shorts 100]
- vid:  [poster assets/posters/water-goggles-pool.jpg];  [poster assets/posters/water-armbands.jpg];  [poster assets/posters/water-goggles-spirit.jpg];  [poster assets/posters/water-goggles-bfast.jpg]

```text
Our own Nabaiji and Decathlon swim films and pictures for the summer: goggles that don't fog, armbands for the first swim, cover-up swimwear shot in India. They play on their own, without sound.
Spirit goggles: "Fog is a disruption of that flow"The anti-fog promise in one line. Hoardings and the goggle wall.
Armbands: the first swimParents, Learn to Swim, the starter kit.
Spirit gogglesA product loop for screens in store.
BFAST mirror gogglesVertical: stories and reels.
Cover-up swimwear, shot in India
Women Who Swim
Easybreath: snorkel masks
Beyond the pool: kayak and SUP
Kids' swimsuit
Kids' goggles 100
Boxer 100
What the 2025 water season taught us
60%of water turnover comes in 20 weeks (weeks 9 to 30); be at the front of the store from week 12 to 24
Under 1%of Indians can swim unassisted, against 80% in the US and Europe
18% / 13%towels and goggles: the two biggest families; 10 families make 78% of water turnover
15%of quick commerce water turnover is towels; goggles, caps and floats sell best there in summer
₹499 / ₹799products of the month in 2025: swim shorts in April, boardshorts in May
Local facesIndian models on hero products first, then every packshot, then campaigns
Source: "Water Sports: Strategies and Actions to Win 2025" (shared Drive folder). Films: Decathlon and Nabaiji product films from the same folder (usage rights run to 2029 and 2030; one more goggle film expires on 9 Jan 2027, so we don't use it).
```

#### water2027 › `share`: Which sports make the money, month by month

```text
West, every channel (store and online), 2026: the pattern we plan 2027 on. We sold 45 sports; four of them, hiking, fitness outfit, running and swimming, made 52% of January to October turnover, and the 12 below made 81%. Each cell is the sport's share of that month's turnover; the darker, the bigger. Columns of the quarter you picked are outlined.
| Sport | Jan | Feb | Mar | Apr | May | Jun | Jul | Aug | Sep | Oct | Novto 8th | Dec | Jan to Oct | Turnover
| Hiking | 23.3 | 17.6 | 13.5 | 17.1 | 20.9 | 19.8 | 22.0 | 18.0 | 22.0 | 21.1 | 24.9 | - | 19.6% | ₹91.36 Cr
| Fitness outfit | 15.5 | 16.9 | 17.3 | 15.3 | 15.4 | 16.0 | 17.6 | 18.7 | 16.4 | 15.9 | 15.1 | - | 16.5% | ₹76.70 Cr
| Running | 10.2 | 9.6 | 8.8 | 8.2 | 7.7 | 8.0 | 8.3 | 8.8 | 9.2 | 9.5 | 9.3 | - | 8.7% | ₹40.70 Cr
| Swimming | 3.2 | 6.7 | 11.5 | 11.6 | 10.6 | 7.0 | 4.8 | 5.0 | 5.0 | 4.5 | 4.0 | - | 7.2% | ₹33.44 Cr
| Kids' cycling, skates | 5.5 | 6.3 | 6.1 | 6.9 | 5.0 | 7.5 | 6.0 | 6.9 | 5.9 | 6.2 | 4.6 | - | 6.2% | ₹28.95 Cr
| Fitness equipment | 3.7 | 4.1 | 4.3 | 3.5 | 3.3 | 4.2 | 4.2 | 4.9 | 4.2 | 4.0 | 3.0 | - | 4.0% | ₹18.74 Cr
| Cycling (sport bikes) | 3.7 | 4.1 | 4.1 | 3.6 | 3.2 | 3.8 | 3.1 | 4.2 | 4.0 | 5.1 | 4.9 | - | 3.8% | ₹17.91 Cr
| Trekking, climbing | 3.3 | 2.7 | 2.6 | 3.5 | 4.5 | 3.3 | 3.1 | 2.7 | 3.5 | 3.0 | 3.4 | - | 3.3% | ₹15.35 Cr
| Football | 2.8 | 2.9 | 3.0 | 2.8 | 2.3 | 3.2 | 3.7 | 4.3 | 3.6 | 3.3 | 2.9 | - | 3.2% | ₹14.77 Cr
| Tennis, squash | 2.9 | 3.4 | 3.2 | 2.9 | 2.8 | 3.0 | 3.2 | 3.3 | 3.2 | 3.1 | 2.7 | - | 3.1% | ₹14.30 Cr
| Cricket | 2.6 | 2.7 | 3.6 | 3.6 | 3.3 | 3.0 | 2.4 | 2.7 | 2.3 | 2.4 | 2.3 | - | 2.9% | ₹13.54 Cr
| Nutrition, care | 2.8 | 2.7 | 2.4 | 2.3 | 2.3 | 2.5 | 2.3 | 2.7 | 2.7 | 2.8 | 2.5 | - | 2.5% | ₹11.78 Cr
| All other sports | 20.5 | 20.3 | 19.6 | 18.6 | 18.6 | 18.7 | 19.2 | 17.8 | 17.8 | 19.1 | 20.2 | - | 19.0% | ₹88.45 Cr
| All sports | ₹46.43 Cr | ₹34.62 Cr | ₹43.87 Cr | ₹51.14 Cr | ₹60.86 Cr | ₹52.17 Cr | ₹52.02 Cr | ₹44.99 Cr | ₹38.53 Cr | ₹41.34 Cr | ₹10.86 Cr | - | 100% | ₹465.97 Cr
0%22%+ of the monthDecember: no data yet. November: 1 to 8 Nov only.
```

After clicking **STATE Pune + Q4 2026**:
```text
Pune, every channel (store and online), 2026: the pattern we plan 2027 on. We sold 45 sports; four of them, hiking, fitness outfit, running and swimming, made 52% of January to October turnover, and the 12 below made 81%. Each cell is the sport's share of that month's turnover; the darker, the bigger. Columns of the quarter you picked are outlined.
| Hiking | 20.5 | 16.6 | 12.9 | 15.8 | 19.1 | 20.3 | 25.4 | 19.4 | 20.1 | 17.9 | 19.2 | - | 19.0% | ₹43.29 Cr
| Fitness outfit | 17.4 | 18.4 | 18.1 | 16.5 | 16.3 | 16.6 | 17.7 | 20.0 | 18.2 | 18.0 | 17.9 | - | 17.6% | ₹40.18 Cr
| Running | 8.6 | 9.0 | 8.3 | 7.9 | 7.6 | 7.7 | 7.5 | 8.4 | 9.4 | 9.2 | 8.7 | - | 8.3% | ₹18.84 Cr
| Swimming | 4.0 | 7.2 | 13.0 | 12.7 | 11.2 | 6.4 | 3.7 | 4.4 | 5.0 | 4.7 | 4.4 | - | 7.3% | ₹16.75 Cr
| Kids' cycling, skates | 6.3 | 6.6 | 6.2 | 6.7 | 5.2 | 8.2 | 5.6 | 7.0 | 5.9 | 7.0 | 5.8 | - | 6.5% | ₹14.71 Cr
| Cycling (sport bikes) | 4.2 | 4.3 | 4.5 | 3.9 | 3.7 | 3.9 | 2.9 | 4.2 | 4.0 | 5.3 | 6.5 | - | 4.0% | ₹9.19 Cr
| Fitness equipment | 3.5 | 3.8 | 4.0 | 3.2 | 3.3 | 3.6 | 3.6 | 4.3 | 3.7 | 4.0 | 3.4 | - | 3.7% | ₹8.39 Cr
| Football | 3.1 | 3.0 | 2.9 | 2.9 | 2.4 | 3.3 | 3.7 | 4.4 | 3.9 | 3.7 | 3.6 | - | 3.3% | ₹7.57 Cr
| Trekking, climbing | 3.1 | 2.5 | 2.5 | 3.3 | 4.0 | 3.1 | 3.2 | 2.7 | 3.7 | 2.7 | 3.1 | - | 3.1% | ₹7.14 Cr
| Tennis, squash | 3.1 | 3.5 | 2.8 | 2.6 | 2.6 | 2.8 | 2.7 | 3.0 | 3.2 | 3.1 | 2.8 | - | 2.9% | ₹6.65 Cr
| Cricket | 2.6 | 2.6 | 3.3 | 3.3 | 3.1 | 2.7 | 2.0 | 2.3 | 2.2 | 2.3 | 2.3 | - | 2.7% | ₹6.06 Cr
| Nutrition, care | 2.7 | 2.5 | 2.2 | 2.3 | 2.4 | 2.4 | 2.2 | 2.6 | 2.7 | 2.8 | 2.5 | - | 2.4% | ₹5.57 Cr
| All other sports | 20.8 | 19.9 | 19.1 | 19.0 | 19.0 | 19.0 | 19.7 | 17.4 | 18.1 | 19.3 | 19.8 | - | 19.1% | ₹43.61 Cr
| All sports | ₹21.80 Cr | ₹17.20 Cr | ₹21.97 Cr | ₹24.43 Cr | ₹28.48 Cr | ₹25.62 Cr | ₹27.62 Cr | ₹22.57 Cr | ₹17.98 Cr | ₹20.29 Cr | ₹4.57 Cr | - | 100% | ₹227.95 Cr
```

After clicking **STATE Gujarat + Q4 2026**:
```text
Gujarat, every channel (store and online), 2026: the pattern we plan 2027 on. We sold 45 sports; four of them, hiking, fitness outfit, running and swimming, made 51% of January to October turnover, and the 12 below made 82%. Each cell is the sport's share of that month's turnover; the darker, the bigger. Columns of the quarter you picked are outlined.
| Hiking | 22.9 | 19.0 | 13.9 | 17.8 | 22.5 | 18.4 | 18.1 | 16.2 | 23.5 | 22.2 | 26.0 | - | 19.5% | ₹33.11 Cr
| Fitness outfit | 13.6 | 14.7 | 16.2 | 14.3 | 14.6 | 15.5 | 17.0 | 17.1 | 14.6 | 14.0 | 12.8 | - | 15.2% | ₹25.73 Cr
| Running | 12.7 | 9.7 | 8.6 | 8.1 | 7.4 | 8.2 | 9.0 | 9.3 | 8.9 | 10.1 | 10.0 | - | 9.1% | ₹15.41 Cr
| Swimming | 2.6 | 6.4 | 10.6 | 10.6 | 9.9 | 7.8 | 6.2 | 5.9 | 5.3 | 4.6 | 4.7 | - | 7.2% | ₹12.26 Cr
| Kids' cycling, skates | 5.7 | 7.0 | 6.7 | 7.9 | 5.1 | 8.2 | 7.0 | 7.4 | 6.4 | 6.2 | 3.8 | - | 6.7% | ₹11.44 Cr
| Fitness equipment | 3.9 | 4.3 | 4.4 | 3.6 | 3.2 | 4.7 | 4.9 | 5.3 | 4.6 | 4.0 | 2.9 | - | 4.2% | ₹7.20 Cr
| Cycling (sport bikes) | 3.7 | 4.1 | 4.1 | 3.5 | 3.0 | 4.1 | 3.4 | 4.4 | 4.2 | 4.9 | 4.3 | - | 3.9% | ₹6.56 Cr
| Trekking, climbing | 3.4 | 2.9 | 2.9 | 3.9 | 5.2 | 3.5 | 3.0 | 2.8 | 3.3 | 3.3 | 3.8 | - | 3.5% | ₹6.01 Cr
| Cricket | 2.9 | 2.9 | 4.2 | 4.3 | 3.8 | 3.5 | 3.3 | 3.3 | 2.5 | 2.7 | 2.4 | - | 3.4% | ₹5.78 Cr
| Tennis, squash | 2.8 | 3.1 | 3.4 | 3.1 | 2.8 | 3.4 | 3.5 | 3.7 | 3.2 | 3.0 | 2.9 | - | 3.2% | ₹5.42 Cr
| Football | 2.6 | 2.8 | 3.1 | 2.8 | 2.3 | 3.1 | 3.8 | 4.3 | 3.4 | 3.1 | 2.3 | - | 3.1% | ₹5.25 Cr
| Nutrition, care | 2.9 | 2.8 | 2.5 | 2.4 | 2.4 | 2.6 | 2.5 | 2.8 | 2.7 | 2.7 | 2.6 | - | 2.6% | ₹4.41 Cr
| All other sports | 20.2 | 20.3 | 19.5 | 17.6 | 17.8 | 17.0 | 18.3 | 17.4 | 17.3 | 19.2 | 21.4 | - | 18.4% | ₹31.16 Cr
| All sports | ₹16.72 Cr | ₹12.51 Cr | ₹15.99 Cr | ₹19.44 Cr | ₹24.04 Cr | ₹18.84 Cr | ₹17.35 Cr | ₹16.01 Cr | ₹14.59 Cr | ₹14.24 Cr | ₹4.39 Cr | - | 100% | ₹169.73 Cr
```

After clicking **STATE MP + Q4 2026**:
```text
MP, every channel (store and online), 2026: the pattern we plan 2027 on. We sold 45 sports; four of them, hiking, fitness outfit, running and swimming, made 54% of January to October turnover, and the 12 below made 80%. Each cell is the sport's share of that month's turnover; the darker, the bigger. Columns of the quarter you picked are outlined.
| Hiking | 32.1 | 17.6 | 14.1 | 19.7 | 22.1 | 22.0 | 18.0 | 17.5 | 24.1 | 28.2 | 36.4 | - | 21.9% | ₹14.96 Cr
| Fitness outfit | 14.0 | 17.0 | 17.3 | 14.2 | 14.9 | 15.4 | 18.5 | 18.2 | 15.8 | 13.9 | 13.9 | - | 15.8% | ₹10.79 Cr
| Running | 9.4 | 11.7 | 10.9 | 9.4 | 8.6 | 8.3 | 9.2 | 9.2 | 9.4 | 9.4 | 9.1 | - | 9.4% | ₹6.45 Cr
| Swimming | 2.0 | 5.6 | 8.7 | 10.9 | 10.6 | 7.2 | 6.0 | 4.9 | 4.5 | 3.5 | 1.8 | - | 6.5% | ₹4.42 Cr
| Fitness equipment | 3.6 | 4.6 | 5.3 | 3.9 | 4.0 | 4.9 | 4.8 | 6.0 | 5.0 | 4.4 | 2.3 | - | 4.6% | ₹3.15 Cr
| Kids' cycling, skates | 3.0 | 3.4 | 4.0 | 4.7 | 4.0 | 3.7 | 5.2 | 5.1 | 4.4 | 3.7 | 3.5 | - | 4.1% | ₹2.80 Cr
| Tennis, squash | 2.7 | 3.7 | 3.8 | 3.2 | 3.0 | 2.9 | 3.9 | 3.8 | 3.3 | 2.9 | 2.2 | - | 3.3% | ₹2.23 Cr
| Trekking, climbing | 3.6 | 2.6 | 2.1 | 3.2 | 4.2 | 3.5 | 2.8 | 2.6 | 3.8 | 3.1 | 3.3 | - | 3.2% | ₹2.21 Cr
| Cycling (sport bikes) | 2.4 | 3.7 | 2.9 | 3.1 | 2.0 | 2.7 | 3.2 | 3.7 | 3.3 | 5.0 | 2.7 | - | 3.1% | ₹2.15 Cr
| Football | 2.4 | 2.7 | 3.1 | 2.7 | 2.3 | 2.7 | 3.4 | 3.8 | 3.0 | 2.8 | 2.4 | - | 2.9% | ₹1.95 Cr
| Nutrition, care | 2.6 | 3.1 | 2.6 | 2.3 | 2.2 | 2.5 | 2.7 | 3.1 | 3.0 | 2.7 | 2.4 | - | 2.6% | ₹1.81 Cr
| Cricket | 2.1 | 2.8 | 3.4 | 3.0 | 2.7 | 2.5 | 2.3 | 2.4 | 2.0 | 2.0 | 1.6 | - | 2.5% | ₹1.70 Cr
| All other sports | 20.1 | 21.6 | 21.7 | 19.9 | 19.3 | 21.6 | 19.9 | 19.8 | 18.3 | 18.5 | 18.4 | - | 20.0% | ₹13.68 Cr
| All sports | ₹7.91 Cr | ₹4.91 Cr | ₹5.91 Cr | ₹7.27 Cr | ₹8.35 Cr | ₹7.72 Cr | ₹7.04 Cr | ₹6.41 Cr | ₹5.96 Cr | ₹6.81 Cr | ₹1.90 Cr | - | 100% | ₹68.29 Cr
```

#### water2027 › `stores`: Store by store, Q1 2027

```text
Every store in the West: the water team, the AOPs planned in the quarter (practice places for all sports, from the AOP plan), the pools, coaches and academies for water, what goes up in store, the outstore money and the March to June turnover goal.
| Store | Water teamfull-time, part-time, interns | AOPs, all sportsJan / Feb / Mar | Pools, coaches, academies | In store and mall | Outstore budget | Water turnover, Mar to Jun2026 → 2027 goal
| Pune
| AmanoraPune | 3 / 3 / 3
| 103 / 4 / 3
| 10 pools to sign
20 coaches
Now: 7 pools listed (tie-ups end Dec 2026) | ₹70,000 | ₹9,35,0002 hoardings | ₹1.95 Cr → ₹2.43 Cr2026 = goal / 1.25
| SGS MallPune | 4 / 6 / 2
| 5 pools to sign
10 coaches
Now: 1 pool (Nilu Phule, to 22 Jan 2027) | ₹62,000 | ₹4,95,0001 hoarding | ₹1.84 Cr → ₹2.29 Cr2026 = goal / 1.25
| WagholiPune | 3 / 4 / 2
| 155 / 5 / 5
| 15 pools to sign
Now: 5 pools listed (Raj from Feb, Kavya from Apr 2027) | ₹1,30,000 | ₹10,15,0002 hoardings | ₹1.86 Cr → ₹2.33 Cr2026 = goal / 1.25
| WakadPune | 4 / 4 / 12
| 227 / 7 / 8
Now: 2 academies (Bluewater, Proswim, to May 2027) | ₹40,000 | ₹10,90,000plan says ₹10,70,0003 hoardings | ₹4.07 Cr → ₹5.09 Cr2026 = goal / 1.25
| NIBMPune | 2 / 6 / 1
| 114 / 3 / 4
| 8 pools to sign
Now: 2 pools to Mar 2027 (Varunah, Ganga Dhaam) | ₹2,32,000 | ₹5,66,0001 hoarding | ₹1.14 Cr → ₹1.43 Cr2026 = goal / 1.25
| Pune city and onlinePune | 1 / 0 / 0
| -
Now: B2B and digital (CDMR) | - | ₹6,50,0002 hoardings | ₹3.26 Cr → ₹4.07 Cr2026 = goal / 1.25
| Pune | | 68 | | ₹5,34,000 | ₹47,51,000 | ₹14.12 Cr → ₹17.65 Cr
| Gujarat
| NexusAhmedabad | 2 / 2 / 03 still to hire
| 124 / 4 / 4
| 10 coaches
Academies: Ahmedabad 5 | Window wall, stop rayons, CAB + TGs, TV, in-mall | ₹2,00,000 | ₹2.05 Cr → ₹2.46 Cr
| MoteraAhmedabad | 1 / 2 / 03 still to hire
| 134 / 4 / 5
Academies: Ahmedabad 5 | All + lollipops; family window and entrance display | ₹1,70,000 | ₹1.92 Cr → ₹2.31 Cr
| Dumas RoadSurat | 2 / 2 / 01 still to hire
Academies: Surat 3 | All + lollipops; family window and entrance display | ₹1,70,000 | ₹1.61 Cr → ₹1.94 Cr
| BarodaVadodara | 2 / 0 / 04 still to hire
Academies: Vadodara 2 | All + lollipops | ₹1,70,000 | ₹1.53 Cr → ₹1.83 Cr
| RajkotRajkot | 1 / 1 / 0
| 72 / 3 / 2
| 5 coaches
Academies: Rajkot 2 | Window wall, CAB + TGs | ₹75,000 | ₹38.6 L → ₹46.3 L
| Adajan (new)Surat | Not in the plan
| Academies: Surat 3 (shared) | Opens 18 Dec 2026: not in the water plan yet | None in our files | No goal in our files
| Gujarat | | 55 | | | ₹7,85,000 | ₹7.50 Cr → ₹9.00 Cr
| MP
| IndoreIndore | 2 / 1 / 02 still to hire
| 113 / 4 / 4
| Academies: Indore 4: 1,000 People Mission | No water plan in our files | None in our files | No goal in our files
| BhopalBhopal | 0 / 1 / 03 still to hire
| Academies: Bhopal 3: Family Swim Days | No water plan in our files | None in our files | No goal in our files
| GwaliorGwalior | Not in the plan
| 83 / 2 / 3
| Academies: Gwalior 2: beginner discovery | Not in the human plan | None in our files | No goal in our files
| MP | | 29 | | | - | -
Teams: Pune from the Pune plan's human structure; Gujarat and MP from the Gujarat plan's human planning (full-time includes the department manager; names are not shown). Pools and coaches in Gujarat are budgets: ₹1 L of pool tie-ups per store (₹50,000 in Rajkot) and coaches at ₹5,000 a kit. Academies: the Swim Project's targets per city. Wakad's outstore lines add to ₹10.90 L; the plan says ₹10.70 L.
```

After clicking **STATE All stores + Q4 2026**:
```text
Store by store, Q4 2026
| Store | Water teamfull-time, part-time, interns | AOPs, all sportsSep / Oct / Nov / Dec | Pools, coaches, academies | In store and mall | Outstore budget | Water turnover, Mar to Jun2026 → 2027 goal
| 9- / - / 4 / 5
| 11- / - / 5 / 6
| Pune | | 49 | | ₹5,34,000 | ₹47,51,000 | ₹14.12 Cr → ₹17.65 Cr
| 8- / - / 4 / 4
| 5- / - / 3 / 2
| Gujarat | | 40 | | | ₹7,85,000 | ₹7.50 Cr → ₹9.00 Cr
| 10- / - / 5 / 5
| 6- / - / 3 / 3
| MP | | 25 | | | - | -
```

After clicking **STATE All stores + Q2 2027**:
```text
Store by store, Q2 2027
| Store | Water teamfull-time, part-time, interns | AOPs, all sportsApr / May / Jun | Pools, coaches, academies | In store and mall | Outstore budget | Water turnover, Mar to Jun2026 → 2027 goal
| 73 / 2 / 2
| 93 / 4 / 2
| 125 / 4 / 3
| 135 / 4 / 4
| 94 / 3 / 2
| Pune | | 50 | | ₹5,34,000 | ₹47,51,000 | ₹14.12 Cr → ₹17.65 Cr
| 114 / 4 / 3
| 115 / 4 / 2
| 104 / 4 / 2
| 42 / 1 / 1
| Gujarat | | 46 | | | ₹7,85,000 | ₹7.50 Cr → ₹9.00 Cr
| MP | | 23 | | | - | -
```

After clicking **STATE All stores + Q3 2027**:
```text
Store by store, Q3 2027
| Store | Water teamfull-time, part-time, interns | AOPs, all sportsJul / Aug / Sep | Pools, coaches, academies | In store and mall | Outstore budget | Water turnover, Mar to Jun2026 → 2027 goal
| 21 / 1 / 0
| 53 / 1 / 1
| 10 / 0 / 1
| Pune | | 14 | | ₹5,34,000 | ₹47,51,000 | ₹14.12 Cr → ₹17.65 Cr
| 22 / 0 / 0
| 11 / 0 / 0
| Gujarat | | 9 | | | ₹7,85,000 | ₹7.50 Cr → ₹9.00 Cr
| MP | | 5 | | | - | -
```

After clicking **STATE All stores + Q4 2027**:
```text
Store by store, Q4 2027
| Store | Water teamfull-time, part-time, interns | AOPs, all sportsOct / Nov / Dec | Pools, coaches, academies | In store and mall | Outstore budget | Water turnover, Mar to Jun2026 → 2027 goal
| 33 / - / -
| 22 / - / -
| Gujarat | | 14 | | | ₹7,85,000 | ₹7.50 Cr → ₹9.00 Cr
| MP | | 8 | | | - | -
```

#### water2027 › `money`: The money, line by line

```text
Three budgets carry water sports: the Pune store plan, the Gujarat store plan and the regional Great Indian Swim Project. How they overlap is not written in the files (open question).
Pune store plan
| | Amanora | SGS Mall | Wagholi | Wakad | NIBM | Pune city | Total
| Hoardings | ₹2,70,000 | ₹1,50,000 | ₹2,80,000 | ₹4,20,000 | ₹1,50,000 | ₹3,00,000 | ₹15,70,000
| Pool tie-ups | ₹2,50,000 | ₹1,25,000 | ₹3,75,000 | ₹2,50,000 | ₹2,00,000 | ₹2,50,000 | ₹14,50,000
| Flyers | ₹15,000 | ₹20,000 | ₹10,000 | ₹20,000 | ₹16,000 | - | ₹81,000
| Instagram influencers | ₹3,00,000 | ₹1,50,000 | ₹3,00,000 | ₹3,00,000 | ₹1,50,000 | ₹50,000 | ₹12,50,000
| Coach kits | ₹1,00,000 | ₹50,000 | ₹50,000 | ₹1,00,000 | ₹50,000 | ₹50,000 | ₹4,00,000
| Outstore | ₹9,35,000 | ₹4,95,000 | ₹10,15,000 | ₹10,90,000 | ₹5,66,000 | ₹6,50,000 | ₹47,51,000
| In store and mall | ₹70,000 | ₹62,000 | ₹1,30,000 | ₹40,000 | ₹2,32,000 | - | ₹5,34,000
| Trainings | ₹5,000 | ₹5,000 | ₹5,000 | ₹5,000 | ₹5,000 | ₹5,000 | ₹30,000
Our sums from the plan's lines: outstore ₹47.51 L (the plan says ₹47.31 L, because Wakad is written as ₹10.70 L), in store and mall ₹5.34 L, trainings ₹30,000: ₹53.15 L in all. Plus a ₹1,999 swim kit per teammate.
Gujarat store plan
| | Nexus | Motera | Dumas Road | Baroda | Rajkot | Total
| Pool tie-ups | ₹1,00,000 | ₹1,00,000 | ₹1,00,000 | ₹1,00,000 | ₹50,000 | ₹4,50,000
| Flyers | ₹30,000 | - | - | - | - | ₹30,000
| Instagram influencers | ₹20,000 | ₹20,000 | ₹20,000 | ₹20,000 | - | ₹80,000
| Coach kits | ₹50,000 | ₹50,000 | ₹50,000 | ₹50,000 | ₹25,000 | ₹2,25,000
| Outstore | ₹2,00,000 | ₹1,70,000 | ₹1,70,000 | ₹1,70,000 | ₹75,000 | ₹7,85,000
| Hoardings | 3D city hoarding, "Summer fun with water": no budget in the plan
Gujarat merchandising, Motera and Dumas Road
Family window display (4 mannequins, communication, lighting)₹97,638
Entrance display (3 mannequins, podium, spotlights)₹49,812
Towels: size board₹2,500
Snorkel masks: video screen₹9,000
Phone pocket: acrylic cube₹1,200
UV tops: display and stickers₹1,600
Goggles and headwear, aqua learningno budget
₹1,61,750 in all. The summary table writes the entrance display as ₹49,821; its lines add to ₹49,812, which is what the total uses.
Great Indian Swim Project, ₹8 L, Nov 2026 to Apr 2027
Academy trials and acquisition₹2,40,000
City launch events and community₹1,20,000
Local paid digital₹1,00,000
Videography and content₹90,000
In-store branding, QR stands, POS₹45,000
Creators and ambassadors₹45,000
CRM, tracking, reporting₹25,000
Contingency (released on evidence)₹1,35,000
The same ₹8 L by place
Pune₹2,70,000
Gujarat₹2,90,000
MP₹1,70,000
Regional content, tracking, contingency₹70,000
Two views of one envelope, not added together. Targets: 3,000 sign-ups, 1,500 first swims, 600 repeat swimmers, 1,000 community members, 600 buyers, ₹15 L of sales traced to the programme (1.88x the spend; not ROI).
```

#### water2027 › `range`: The range and the why, from India to the store

```text
Mission: move non-swimmers to swimmers. Families, promises and the national plan behind the store plans.
Pune: top families to 100% CAD by 15 Feb
Swim towels
Goggles, masks
Cover-up swimwear
Swim headwear
Men's swimsuits
Girls' swimwear
Boys' swimsuits
Sun protection
Aqua learning accessories
Swimming material
Men's beach shorts
Caps sold per goggle is the ABQ lever.
Gujarat: families that make 85% of water turnover
Goggles
Caps
Material
Aqua learning
Towels
Women's swimsuits
Baby swimsuits
Girls' swimsuits
ABQ add-ons: goggle case, phone pocket, 3 L and 7 L pouches, mesh bag for station coaching. Goggles: adults first, then kids, with the promises (anti-fog, UV, adjustable).
Three promises, said everywhere
Anti-foggogglesChlorine resistantswimsuitsUV protectioneven when wet
From the India Strategic A4: move from "affordable but basic" to "affordable and technical". Women's cover-up swimwear for SS27: Jisa Shorty without sleeves, Rossa full body zip, Rossa legging, Una skirt full zip.
Where we stand
19.1%Decathlon's share of the Pune swimming market (₹101.9 Cr market, ₹19.33 Cr our 2026 close)
7%our share in India, aiming for 10% by 2030 (₹4,700 Cr market in 2025, 10% a year)
₹33.9 Crwater sports in Pune and Gujarat, 1 Jan to 8 Nov 2026, +15.6%; digital 14.6%, margin 27.8%, basket ₹2,469
₹385 CrIndia swimming turnover goal for 2027 (+15%), on the way from ₹300 Cr (2025) to ₹496 Cr (2029)
65 / 35men / women among swimmers; juniors 24%
10%of accidental deaths in India are drownings; 50% of Indians see swimming as a life skill
India plan, four axes: learn to swim (coaches and community), women, brand perception (technical, local content), supply and commerce (less import dependence, quick commerce and marketplaces). Pune priorities: keep our customers coming back next year, and win the learners who start in summer.
```

#### water2027 › `footer`: Sources: SS 2027 Pune water sports plan; Gujarat water sports plan 2027; The Great Indian 

```text

```
