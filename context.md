# context.md: Decathlon West plan site (Pune, Gujarat, MP · Q4 2026 + Q1 2027)

Single source of truth for this project. Read it before any work. Update it at the end of every task
(see CLAUDE.md): add every new number, file, decision, preference and open question. Never delete
history; mark superseded facts as superseded.

Last updated: 2026-10-29

---

## 1. What this project is

- A presentation website for a **shareholder presentation of the Decathlon West cluster** (Pune city, Gujarat, Madhya Pradesh), covering **Q4 2026 and Q1 2027 / 2027**. Built for Anandita Mitra (Decathlon; files come from anandita.mitra@decathlon.com and ananditawork1@gmail.com), working through Abhishek Mitra's machine and accounts.
- Not a slide deck: a "crazy marketing planning website", Decathlon look (The Blue Voice), interactive, data-first.
- **Live site:** https://decathlon-west-plan.vercel.app (public URL; the GitHub repo is private).
- **Repo:** https://github.com/abhishekmitraaa/decathlon-west-plan (private, branch `main`). Vercel project `decathlon-west-plan` in team `abhishekmitraaas-projects`, connected to the repo: every push to `main` deploys to production.
- **Local folder:** `C:\Users\Abhishek Mitra\OneDrive\Desktop\anandita website`. Local preview: `python -m http.server 8765 --bind 127.0.0.1` from the folder.

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
- `.vercelignore` keeps context.md, CLAUDE.md and `.claude/` off the public site.

### Page order (current)
Hero → People ("Who we sell to": Pune, Gujarat, MP state stories with films) → Why the West (166.6M headline + penetration chart: our 2025 share of each store city's sports market, market 2025 and 2030; pulse cards: who plays, pickleball, big external events; map; people per store) → Shoppers (personas: Ahmedabad, Pune) → **Chapter 01 Q4 2026 campaigns** band → Scoreboard (Q4 only: topline panel = 178.77 Cr challenge, +24.15%, month growth bars, by-state and by-channel bars; then line summary in L and % of budget) → Q4 runway + spotlights → October so far (#october: Ahmedabad IG reel, Kiprun launch 18 Oct with 5 video slots, Pune hoardings, Pune influencer shoot IG reel) → **Chapter 02 Strategies** → Strategy (budget, 2026 recap→Q4→2027 for schools and Yoga Day, shoppers 70/30, toolkit, channel audiences, Kantar, AOP with video) → Marketing playbook ("On the road" hoarding wall, then channel switchboard) → Content calendar (rules, pillars, months, reels band, influencers, credits) → **Chapter 03 Surat opening plan** → Surat → **Chapter 04 Q1 2027 and the year ahead** → Q1 2027 (incl. advertising spend month by month 2026 vs 2027 with the 2027 line split, moved here from the Scoreboard) → 2027 planner → Horizon (CWG 2030).

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

### Content calendar
- 97 posts, 26 Oct 2026 – 31 Mar 2027; 17 creator videos; 6 hero films; pillars Emotional 20% target, Fun 20%, Learn 15%, Community 25%, Product 20% (plan delivers 23 / 19 / 11 / 32 / 15). Formats: 67 reels, 15 carousels, 7 statics, 7 story series, 1 live.

---

## 5. Discrepancies and open questions (flag to the user, don't silently fix)

- Deck channel growth: wholesale +691% stated vs +297% from its own numbers; in-store +17% vs +19%; total 24.15% vs 23.6% (144 → 178).
- Slide 6 weekdays wrong: 31 Oct 2026 is Saturday (not Fri); 30 Nov is Monday; 18 and 25 Dec are Fridays. Christmas sale 19–31 Dec (calendar) vs EOY 18–25 Dec (deck).
- Surat opening date: workbook 18 Dec; posters 20 Dec; expansion retroplan 27 Dec; new-store slide says Q1/April 2027. Site uses the 18–20 Dec weekend.
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
- 2026-10-25: No new data. Local preview server (port 8765) stopped; restart with `python -m http.server 8765 --bind 127.0.0.1` when needed.

---

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
