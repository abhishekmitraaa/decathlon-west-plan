# context.md: Decathlon West plan site (Pune, Gujarat, MP · Q4 2026 + Q1 2027)

Single source of truth for this project. Read it before any work. Update it at the end of every task
(see CLAUDE.md): add every new number, file, decision, preference and open question. Never delete
history; mark superseded facts as superseded.

Last updated: 2026-10-26

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
- External event dates for Pune International Marathon, Bajaj Pune Marathon, Khelo MP Youth Games and Indore Marathon 2026–27 are not confirmed; Indore 2026 date conflicts (1 vs 15 Feb).
- Deck p9 hoarding photos are partly not from this cluster: the "Bhopal" photo shows UP32 number plates, Drishti IAS and a Lucknow blood bank sign, and the board reads "Visit Decathlon Vibhuti Khand & Lulu Mall" (Lucknow stores); the "Ahmedabad + Baroda" night board appears to be the same Lucknow creative. The Surat photo is the booked site still carrying another brand's ad. The "2026 update" text (PIN codes 2260xx, Hazratganj) is Lucknow's. Site captions describe the creative and site without claiming the photo location; ask the user for real Bhopal / Ahmedabad / Baroda photos.
- AOP "20 total" vs per-store numbers adding to 90.
- Regional slide "~86M people" vs 166.6M sum. Nexus persona targets sum to 112%.
- Gujarat and MP line items add to more than their stated monthly totals (Oct Gujarat 21.97 vs 19.95 L; MP 7.93 vs 6.80 L). Pune campaign split table doesn't match its own totals.
- Old Marcom per-store budgets were a formula error (removed). Deck "Digital acceleration to 2030" (4.7 Cr e-com) doesn't match this cluster (removed). Tamil Nadu / Lucknow / Delhi NCR slides are leftovers.
- General-knowledge facts on the site to verify: 1976 Lille / 2009 India (history block since removed), Rajgad, Surat diamonds share, Gwalior UNESCO City of Music, Indore cleanest city, Sanchi UNESCO.
- Brand safety: team photos show PUMA kit (run club), Agassi paddle, "Bloom/Glow" jerseys; Tansen image is an Amar Chitra Katha cover. Fine internally, swap before public Decathlon use.
- The site URL is public even though the repo is private; Vercel password protection needs a paid plan.

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
