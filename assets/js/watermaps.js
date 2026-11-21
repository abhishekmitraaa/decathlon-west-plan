/* Water sports 2027: city maps for Pune, Ahmedabad, Baroda (Vadodara) and Surat, with where to put the water hoardings and why.
   Asked by the user on 21 Nov 2026: whole-city maps with hotspots, crowds, our stores, residential belts, pools and academies,
   counts like the Surat Adajan plan, and hoarding suggestions based on all our data.
   Sources: our stores and boards (DATA.stores, HOARDINGS), Pune AOP partners (Pune partnerships file via aopnames.js, 18 pools),
   PUNE_HOT city counts, the Surat Adajan workbook (window.ADAJAN), the Ahmedabad catchment master, the water plans (SS 2027 Pune,
   Gujarat water plan, Great Indian Swim Project), Tableau water sports YTD 2026, and web checks on 21 Nov 2026 (AMC 21 pools open,
   May 2026; PMC 35 and PCMC pools; VMC and SMC pools named in listings). Pool, hotspot and housing pins outside our own files are
   placed by area, so they are approximate (about 0.5-1 km). Hoarding picks are our proposals, sized to each plan's board count. */
window.WATER_MAPS = {
  criteria: [
    ["Who passes", "Parents of school-age children, young professionals and women: swimming's buyers (men 65%, women 35%, juniors 24% of the category). Families first for learn-to-swim."],
    ["On the way to our store", "Inside the store's 10-15 minute drive and on traffic heading towards it, so the board ends in a walk-in, not just a view."],
    ["Pools around it", "At least two or three pools or academies within about 2.5 km, so \"learn to swim near you\" is true; ideally our partner pools, named on the board or the QR page."],
    ["Homes around it", "High-rise societies and new townships with their own pools: the families who buy a full kit."],
    ["Time to read it", "Signals and junctions (30-45 seconds of read time), lit at night for evening traffic; not a flyover at speed or a cluttered wall."],
    ["Not a repeat", "No two boards on the same route; cover each catchment's main entry once. Keep the live boards that already pass these tests."],
    ["Relevant reach, not raw reach", "A full road is not enough: mobile vans, fairs and pandals only if the crowd is our customer (IDM, Nov 2026)."],
    ["Timing and measure", "Book by February, live Mon 15 Mar to 31 May (summer holidays April-May). A QR and code per board, and the walk-in question at the till."]
  ],
  cities: {
    Pune: {
      name: "Pune", center: [18.54, 73.86], zoom: 11,
      lede: "Five stores and seven live boards. Water is Pune's biggest summer sport: ₹19.76 Cr of water sports from 1 Jan to 8 Nov 2026 (+15.3%), 58% of the West outside MP. The water plan funds 11 boards: Wakad 3, Wagholi 2, Amanora 2, NIBM 1, SGS 1 and 2 out of catchment.",
      facts: [
        ["48", "Municipal pools", "PMC runs 35 (11 shut, Mar 2026), PCMC 13 to 14"],
        ["18", "Pools and academies tied up", "Our AOP partners; the plan signs 58 pools and 80 coaches"],
        ["20,655", "Housing societies", "Registered, 2023; many more not registered"],
        ["111", "Practice places (AOPs)", "Pools 18, racket 32, turfs 34, gyms and yoga 26"],
        ["₹19.76 Cr", "Water sports 2026", "1 Jan to 8 Nov, +15.3%"],
        ["11", "Water boards in the plan", "7 live today (Winter & Travel)"]
      ],
      hot: [
        ["Hinjewadi IT Park, Phase 1", 18.591, 73.738, "Pune's biggest IT hub: commuters twice a day"],
        ["Balewadi High Street", 18.570, 73.776, "Young, high-income evening crowd; Balewadi sports complex next door"],
        ["Baner Road", 18.559, 73.787, "Cafes, offices, new towers"],
        ["Kalewadi Phata, Pimple Saudagar", 18.604, 73.787, "Busy PCMC junction between societies and Wakad"],
        ["Phoenix Marketcity, Viman Nagar", 18.562, 73.917, "Pune's busiest mall, next to the airport"],
        ["EON IT Park, Kharadi", 18.552, 73.944, "IT hub with new townships around it"],
        ["Magarpatta City", 18.515, 73.927, "Offices by day, families by evening"],
        ["Hadapsar Gadital", 18.502, 73.938, "Solapur Road junction into Manjri"],
        ["FC Road and JM Road", 18.522, 73.841, "Students and colleges"],
        ["Koregaon Park", 18.536, 73.893, "Cafes, studios, gyms"],
        ["Swargate", 18.501, 73.862, "Bus depot and old-city traffic"],
        ["Kothrud, Karve Road", 18.507, 73.815, "Dense family belt with no store"]
      ],
      homes: [
        ["Wakad-Hinjewadi high-rises", 18.596, 73.755], ["Pimple Saudagar-Rahatani", 18.600, 73.796], ["Baner-Balewadi", 18.566, 73.780],
        ["Kharadi-Wagholi townships", 18.572, 73.962], ["Amanora Park Town-Magarpatta", 18.517, 73.932], ["Manjri-Hadapsar new towers", 18.507, 73.968],
        ["Undri-Mohammadwadi-Handewadi", 18.460, 73.915], ["Kothrud", 18.505, 73.815]
      ],
      pools: [
        ["AKV Swimming Pool", "partner", 18.5112, 73.9797, "Amanora AOP (ends 2026: renew)"], ["Infinity swimming pool", "partner", 18.5021, 73.9222, "Amanora AOP (renew)"],
        ["Core Fitness", "partner", 18.5177, 73.975, "Amanora AOP (renew)"], ["Legacy Sports", "partner", 18.5172, 73.9357, "Amanora AOP (renew)"],
        ["Rabs Sports complex", "partner", 18.4782, 73.9637, "Amanora AOP"], ["Fitlife swimming pool", "partner", 18.5099, 73.9721, "Amanora AOP"],
        ["Champions swimming pool", "partner", 18.5032, 73.9317, "Amanora AOP"], ["Nilu Phule pool", "partner", 18.5, 73.8653, "SGS AOP, to 22 Jan 2027"],
        ["Bluewater Academy", "partner", 18.5752, 73.7807, "Wakad AOP, to May 2027"], ["Proswim Academy", "partner", 18.5942, 73.7747, "Wakad AOP, to May 2027"],
        ["Varunah Aquatics", "partner", 18.4563, 73.9385, "NIBM AOP, to Mar 2027"], ["Ganga Dhaam Society Pool", "partner", 18.4772, 73.8837, "NIBM AOP, to Mar 2027"],
        ["Ileseum", "partner", 18.4607, 73.908, "NIBM AOP (renew)"], ["Shree Swimming Pool", "partner", 18.5661, 73.916, "Wagholi AOP"],
        ["Kothari International", "partner", 18.5497, 73.9425, "Wagholi AOP"], ["Raj Swimming Pool", "partner", 18.5819, 73.9821, "Wagholi AOP from Feb 2027"],
        ["Club 360", "partner", 18.5484, 73.9349, "Wagholi AOP from Dec 2027"], ["Kavya Swimming Pool", "partner", 18.5581, 73.9432, "Wagholi AOP from Apr 2027"],
        ["Balewadi sports complex pool", "venue", 18.5775, 73.7735, "Shiv Chhatrapati Sports Complex"],
        ["PCMC pool, Pimple Gurav", "municipal", 18.5895, 73.8150, "PCMC list (2023)"], ["PCMC pool, Sangvi", "municipal", 18.5780, 73.8180, "PCMC list (2023)"],
        ["PCMC pool, Thergaon", "municipal", 18.6080, 73.7720, "PCMC list (2023)"], ["PCMC pool, Kasarwadi", "municipal", 18.6050, 73.8200, "PCMC list (2023)"],
        ["PCMC pool, Nehrunagar", "municipal", 18.6260, 73.8230, "PCMC list (2023)"], ["PCMC pool, Bhosari", "municipal", 18.6290, 73.8450, "PCMC list (2023)"]
      ],
      picks: [
        ["1", "Bhumkar Bridge, Wakad", 18.604, 73.752, "Wakad", "keep", "Where Hinjewadi traffic leaves the highway for Wakad. Proswim Academy 2 km away; IT parents pass it twice a day."],
        ["2", "EuroKids, Wakad", 18.5995, 73.7625, "Wakad", "keep", "On the school run, 300 m from the store: parents of the kids who learn to swim in April and May."],
        ["3", "Kalewadi Phata, Pimple Saudagar", 18.604, 73.787, "Wakad", "new", "Dense PCMC societies and the Thergaon, Pimple Gurav and Sangvi pools around it; 3 km to Wakad. No board covers this side today."],
        ["4", "Kesnand Phata, Wagholi", 18.5814, 73.9865, "Wagholi", "keep", "First board on the way in from Nagar and the new townships; Raj Swimming Pool (from Feb 2027) next door."],
        ["5", "EON IT Park junction, Kharadi", 18.552, 73.944, "Wagholi", "new", "Three partner pools within 1.5 km (Kothari, Kavya, Club 360) and the EON IT crowd. Could replace the Hyundai board on Nagar Road."],
        ["6", "Amanora Road", 18.5185, 73.9375, "Amanora", "keep", "Seven partner pools in the Amanora catchment; office and mall traffic heading past the store."],
        ["7", "Solapur Road at Manjri", 18.506, 73.965, "Amanora", "new", "AKV, Core Fitness and Fitlife pools within 1 km and the new Manjri towers: the densest pool cluster we have."],
        ["8", "Sanvidhan Chowk, NIBM", 18.474, 73.899, "NIBM", "keep", "Main NIBM-Undri junction; Ganga Dhaam, Ileseum and Varunah pools within 4 km."],
        ["9", "Swargate", 18.501, 73.862, "SGS Mall", "new", "Old-city traffic and the bus depot; the Nilu Phule pool partner is here. 2 km to SGS."],
        ["10", "Baner Road", 18.56, 73.787, "Out of catchment", "keep", "Young, high-income belt with Bluewater Academy and the Balewadi pool; no store of its own, pulls to Wakad and online."],
        ["11", "Kothrud, Karve Road", 18.507, 73.815, "Out of catchment", "new", "The family belt of our Kothrud persona study, with no store: drives online orders and SGS. We have no pool partner there yet: sign 2 or 3 Kothrud pools before this board goes up."]
      ],
      note: "Pune counts: our partnerships file and PUNE_HOT (PMC and PCMC pools: Punekar News, Free Press Journal, 2025-26; societies: co-operative department, 2023). PCMC pool pins by area (2023 list)."
    },
    Ahmedabad: {
      name: "Ahmedabad", center: [23.05, 72.55], zoom: 11,
      lede: "Two stores, Motera in the north and Nexus in the west, 7 km apart, in a city of 8.4 million. ₹7.44 Cr of water sports from 1 Jan to 8 Nov 2026 (+11.9%). Ahmedabad hosted the Senior National Aquatic Championships in June 2026, and its civic pools drew 15,000 swimmers a day in May.",
      facts: [
        ["8.4 M", "People", "Metro 9.6 M (Ahmedabad master)"],
        ["21", "AMC pools open", "May 2026; 15,000 swimmers a day in summer"],
        ["₹7.44 Cr", "Water sports 2026", "1 Jan to 8 Nov, +11.9%"],
        ["75", "AOPs in the 2027 plan", "Nexus 37, Motera 38; Motera signed 10 in Nov 2026"],
        ["5", "Academies in the Swim Project", "Plus 45 coaches for Gujarat"],
        ["3", "Water boards (our proposal)", "2 Ahmedabad boards today, site to be confirmed"]
      ],
      hot: [
        ["SG Highway, Iscon to Thaltej", 23.030, 72.507, "The city's main west corridor: offices, malls, showrooms"],
        ["Sindhu Bhavan Road", 23.043, 72.497, "Young evening crowd, cafes"],
        ["Sabarmati Riverfront", 23.025, 72.573, "Walkers, runners, events"],
        ["Kankaria Lake", 22.999, 72.601, "Family outings in the east"],
        ["CG Road", 23.030, 72.560, "Shopping street"],
        ["Vastrapur Lake and Ahmedabad One", 23.038, 72.530, "Mall and lake beside Nexus"],
        ["Prahlad Nagar", 23.012, 72.511, "Offices and young families"],
        ["Science City", 23.078, 72.493, "8 lakh visitors a year (travel guide)"],
        ["Narendra Modi Stadium, Motera", 23.092, 72.597, "Match days: Gujarat Titans, India games"],
        ["Visat Circle, Chandkheda", 23.100, 72.583, "North junction towards Gandhinagar"],
        ["Bopal-South Bopal", 23.030, 72.465, "Fast-growing family suburb"],
        ["Maninagar", 22.996, 72.603, "Dense east-side families"]
      ],
      homes: [
        ["Chandkheda-Motera", 23.110, 72.585], ["Gota-Vandematram", 23.103, 72.540], ["Thaltej-Bodakdev", 23.045, 72.510], ["Satellite-Jodhpur", 23.020, 72.520],
        ["Bopal-South Bopal-Shela", 23.025, 72.465], ["Naranpura-Navrangpura", 23.050, 72.555], ["Maninagar-Isanpur", 22.990, 72.605]
      ],
      pools: [
        ["Sardar Patel Municipal Pool, Stadium Circle", "municipal", 23.0370, 72.5590, "AMC, Navrangpura"],
        ["Vinu Mankad Municipal Pool, Ranip", "municipal", 23.0820, 72.5680, "AMC"],
        ["Vasna Municipal Pool", "municipal", 23.0010, 72.5480, "AMC"],
        ["Veer Savarkar Sports Complex, aquatics", "venue", 23.0120, 72.5640, "Senior Nationals, 16-21 Jun 2026; CWG 2030 venue"],
        ["Eklavya Swimming Pool, Thaltej", "academy", 23.0500, 72.5010, "Classes for beginners and women's batches"]
      ],
      picks: [
        ["1", "Visat Circle, Chandkheda", 23.100, 72.583, "Motera", "new", "North junction 1.5 km from Motera: Chandkheda and Motera families and Gandhinagar traffic. The nearest civic pool (Vinu Mankad, Ranip) is about 3 km away."],
        ["2", "Thaltej crossroads, Sindhu Bhavan Road", 23.046, 72.505, "Nexus", "new", "Young, high-income west with the Eklavya pool next to it; 3 km to Nexus."],
        ["3", "Shivranjani, Satellite", 23.026, 72.530, "Nexus", "new", "Satellite and Jodhpur families and Prahlad Nagar offices, 2 km south of Nexus, on the way to the store. No pool on our list nearby: pair it with the Swim Project academies."]
      ],
      note: "AMC pools: AMC via Lokmat Times and Punjab Kesari (May 2026); pool names from listings, placed by area. Hotspots and housing belts by area. Water sports: Tableau, 1 Jan to 8 Nov 2026."
    },
    Baroda: {
      name: "Baroda (Vadodara)", center: [22.31, 73.17], zoom: 12,
      lede: "One store in Alkapuri and four live boards (Kiprun now, Winter from December). Water sports for Surat, Rajkot and Baroda together: ₹6.72 Cr from 1 Jan to 8 Nov 2026 (+21.1%), the fastest growth in the West. Baroda's store did ₹22.32 Cr in Jan to Jul 2026 (+25.3%).",
      facts: [
        ["1.67 M", "People", "2011 census; about 2.4 M estimated for 2025"],
        ["4+", "Municipal pools named", "Sardar Baug, Lal Baug, Karelibaug, Waghodia Road"],
        ["2", "Swim classes listed", "Baroda Swim Front (Gotri), Sama Indoor Sports Complex"],
        ["6 → 34", "AOPs: live → 2027 plan", ""],
        ["4", "Boards live", "Akota, Fatehgunj, Gotri, Subhanpura"],
        ["3", "Water boards (our proposal)", "Switch 2 live boards to water, add Vasna-Bhayli"]
      ],
      hot: [
        ["Alkapuri and RC Dutt Road", 22.310, 73.168, "The city's main business and shopping street"],
        ["Race Course Circle", 22.316, 73.168, "Central circle, all-day traffic"],
        ["Akota and Old Padra Road", 22.297, 73.166, "Retail strip with high footfall"],
        ["Fatehgunj and MS University", 22.320, 73.184, "Students"],
        ["Sayaji Baug (Kamati Baug)", 22.313, 73.191, "Family park and zoo"],
        ["Inorbit Mall, Gorwa", 22.323, 73.160, "Biggest mall"],
        ["Gotri and Natubhai Circle", 22.312, 73.144, "Growing west, evening traffic"],
        ["Vasna-Bhayli Road", 22.292, 73.133, "New gated communities and villas"],
        ["Sama-Savli Road", 22.345, 73.190, "North-east residential growth"],
        ["Manjalpur", 22.273, 73.193, "South family belt"]
      ],
      homes: [
        ["Gotri-Sevasi", 22.315, 73.135], ["Vasna-Bhayli", 22.290, 73.128], ["Subhanpura", 22.320, 73.155], ["Akota", 22.298, 73.165],
        ["Manjalpur", 22.275, 73.195], ["Sama", 22.345, 73.195], ["Karelibaug", 22.322, 73.205]
      ],
      pools: [
        ["Sardar Baug pool", "municipal", 22.3080, 73.1720, "Public pool, Vadiwadi"], ["Lal Baug pool", "municipal", 22.2780, 73.1950, "VMC, Manjalpur (baby pool 2016)"],
        ["VMSS pool, Karelibaug", "municipal", 22.3220, 73.2050, "VMC"], ["Rajiv Gandhi pool, Waghodia Road", "municipal", 22.2950, 73.2350, "VMC (listing)"],
        ["Sama Indoor Sports Complex", "venue", 22.3430, 73.1880, "Swim classes for all ages"], ["Baroda Swim Front, Gotri", "academy", 22.3140, 73.1390, "One-to-one classes"],
        ["Alkapuri Club", "academy", 22.3090, 73.1690, "Club pool"]
      ],
      picks: [
        ["1", "Gotri Bridge, towards Natubhai Circle", 22.312, 73.144, "Baroda", "keep", "Live board in the growing west, 1 km from Baroda Swim Front: switch it to water from 15 Mar."],
        ["2", "Akota, DMart parking terrace", 22.2968, 73.1663, "Baroda", "keep", "Families on their weekly shop, 2 km from the store: switch to water and the family kit offer."],
        ["3", "Vasna-Bhayli Road", 22.292, 73.133, "Baroda", "new", "New gated communities with club pools and young families; 4 km to the store. No board here today."]
      ],
      note: "Pools named in VMC and listing pages (not complete), placed by area. Fatehgunj and Subhanpura stay on running and students; Gotri and Akota go to water (our proposal)."
    },
    Surat: {
      name: "Surat", center: [21.18, 72.80], zoom: 12,
      lede: "Dumas Road today and Adajan from 27 Dec 2026. 5.64 lakh people (1.34 lakh households) live within 15 minutes of Adajan, Surat's #1 living area by sports spend (₹235 Cr). Distance decides: 64% of Vesu and Athwa homes shop at Dumas, only 3% of Adajan.",
      facts: [
        ["5.64 lakh", "People within 15 min of Adajan", "1.34 lakh households, median age about 30"],
        ["11", "SMC pools named", "Including Pal and Vir Savarkar in Adajan"],
        ["85", "Housing and society sites mapped", "Near Adajan: 31 societies, 54 housing"],
        ["77", "Sports places mapped", "37 clubs and academies, 25 turfs, pools and grounds"],
        ["10 + 36", "AOPs", "10 at Adajan; Dumas 36 in the 2027 plan"],
        ["3", "Water boards (our proposal)", "Adajan 2, Vesu 1"]
      ],
      hot: "adajan",
      homes: "adajan",
      pools: [
        ["SMC Pal Swimming Pool", "municipal", 21.18598, 72.78152, "Adajan Gam"], ["SMC Vir Savarkar Swimming Pool", "municipal", 21.20252, 72.79225, "Honey Park Road"],
        ["Rustampura swimming pool", "municipal", 21.18555, 72.82945, "SMC"], ["SMC pool, Katargam", "municipal", 21.2280, 72.8250, "SMC (listing)"],
        ["SMC pool, Varachha (Taran Kund)", "municipal", 21.2100, 72.8500, "SMC (listing)"], ["SMC pool, Althan", "municipal", 21.1500, 72.8100, "SMC (listing)"],
        ["SMC pool, Dindoli", "municipal", 21.1500, 72.8650, "SMC (listing)"], ["SMC pool, Dumbhal (Udhna)", "municipal", 21.1950, 72.8700, "SMC (listing)"],
        ["SMC pool, Dabholi", "municipal", 21.2350, 72.8150, "SMC (listing)"], ["SMC pool, Lakkad Khod (Begampura)", "municipal", 21.1950, 72.8300, "SMC (listing)"],
        ["SMC ladies pool, Athwa Gate", "municipal", 21.1850, 72.8150, "SMC (listing)"], ["SMC Swimming Pool (east)", "municipal", 21.22476, 72.88385, "OpenStreetMap"],
        ["SMC Swimming Pool (south)", "municipal", 21.15095, 72.80092, "OpenStreetMap"]
      ],
      picks: [
        ["1", "Pal Umra Bridge, towards SVNIT", 21.169, 72.788, "Adajan", "keep", "The planned year-long anchor between Adajan, Piplod and Vesu; Pal and Vir Savarkar pools within 3 km. Water creative from 15 Mar."],
        ["2", "Madhuvan Circle, facing TGB", 21.1911, 72.7884, "Adajan", "new", "Best-scoring site in the Adajan plan (86): store junction with 8 IT, 8 sports and 7 housing sites within 500 m; SMC Pal pool 1 km."],
        ["3", "VIP Road, Vesu-Althan", 21.152, 72.792, "Dumas", "new", "Premium Vesu homes with society pools and the SMC Althan pool; 64% of these homes already shop at Dumas, 6 km away."]
      ],
      note: "Surat data: Adajan catchment and opening-plan workbook (Oct 2026), hotspots, housing and sites already on this site. SMC pools from listings, placed by area; four from the workbook and OpenStreetMap."
    }
  }
};

(() => {
  const W = window.WATER_MAPS, box = document.getElementById("wmApp");
  if (!W || !box) return;
  const esc = s => String(s ?? "").replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
  const KM = (a, b) => { const R = 6371, t = x => x * Math.PI / 180, dLa = t(b[0] - a[0]), dLo = t(b[1] - a[1]); const h = Math.sin(dLa / 2) ** 2 + Math.cos(t(a[0])) * Math.cos(t(b[0])) * Math.sin(dLo / 2) ** 2; return 2 * R * Math.asin(Math.sqrt(h)); };
  const A = window.ADAJAN || {};
  const STORE_CITY = { Pune: ["Pune"], Ahmedabad: ["Ahmedabad"], Baroda: ["Vadodara"], Surat: ["Surat"] };
  const BOARD_CITY = { Pune: "Pune", Ahmedabad: "Ahmedabad", Baroda: "Baroda", Surat: "Surat" };
  const city = k => {
    const c = W.cities[k];
    const stores = (window.DATA?.stores || []).filter(s => STORE_CITY[k].includes(s.city)).map(s => [s.name === "Surat" ? "Dumas Road" : s.name, s.lat, s.lon]);
    if (k === "Surat" && A.store) stores.push(["Adajan (opens 27 Dec)", A.store[0], A.store[1]]);
    const hot = c.hot === "adajan" ? (A.cityHot || []).map(h => [h[1], h[2], h[3], `Crowd score ${h[4]}; ${h[5]} km from Adajan`]) : c.hot;
    const homes = c.homes === "adajan" ? (A.city || []).filter(x => x[1] === "live").map(x => [x[0], x[2], x[3], x[4]]) : c.homes;
    const boards = (window.HOARDINGS || []).filter(h => h.city === BOARD_CITY[k] && h.lat).map(h => [h.loc, h.lat, h.lon, h.status, h.why]);
    return { ...c, stores, hot, homes, boards };
  };
  // what each pick has around it, measured from the pins on the map
  const around = (c, p) => {
    const pt = [p[2], p[3]];
    const pools = c.pools.filter(x => KM(pt, [x[2], x[3]]) <= 2.5).length;
    const homes = c.homes.filter(x => KM(pt, [x[1], x[2]]) <= 3).length;
    const hot = c.hot.filter(x => KM(pt, [x[1], x[2]]) <= 2.5).length;
    const st = c.stores.map(s => [s[0], KM(pt, [s[1], s[2]])]).sort((a, b) => a[1] - b[1])[0];
    return { pools, homes, hot, st };
  };

  const KEYS = Object.keys(W.cities);
  box.innerHTML = `<div class="seg wm-seg" role="group" aria-label="Choose city">${KEYS.map((k, i) => `<button type="button" data-k="${k}" aria-pressed="${i === 0}">${esc(W.cities[k].name)}</button>`).join("")}</div>
    <div class="wm-body"></div>
    <details class="panel pm-d wm-crit"><summary><b>What we check before we suggest a hoarding</b><span>8 tests, applied to every pick</span><i class="nd-chev" aria-hidden="true"></i></summary>
      <ol class="wm-crit-l">${W.criteria.map(([h, t]) => `<li><b>${esc(h)}</b><span>${esc(t)}</span></li>`).join("")}</ol></details>`;
  const body = box.querySelector(".wm-body");
  let map = null;

  const show = k => {
    box.querySelectorAll(".wm-seg button").forEach(b => b.setAttribute("aria-pressed", b.dataset.k === k));
    const c = city(k);
    const picks = c.picks.map(p => ({ p, a: around(c, p) }));
    body.innerHTML = `<p class="wm-lede">${esc(c.lede)}</p>
      <div class="wm-facts">${c.facts.map(([v, l, n]) => `<div><b>${esc(v)}</b><span>${esc(l)}</span>${n ? `<small>${esc(n)}</small>` : ""}</div>`).join("")}</div>
      <div class="wm-grid"><div class="wm-mapwrap"><div class="wm-map" id="wmMap" role="img" aria-label="Map of ${esc(c.name)}: stores, boards, pools, crowd hotspots, housing and suggested hoardings"></div>
        <p class="wm-key"><span><i class="k-st"></i>Our stores</span><span><i class="k-pick"></i>Suggested board</span><span><i class="k-live"></i>Live or planned board</span><span><i class="k-pool"></i>Partner pool</span><span><i class="k-mun"></i>Municipal or other pool, academy</span><span><i class="k-hot"></i>Crowd hotspot</span><span><i class="k-home"></i>Housing belt</span></p></div>
        <div class="wm-picks"><h4>Where we put the water boards, and why</h4>
          ${picks.map(({ p, a }) => `<article class="wm-pick" data-i="${esc(p[0])}"><div class="wm-ph"><b class="wm-n">${esc(p[0])}</b><div><b>${esc(p[1])}</b><small>${esc(p[4])} · ${p[5] === "keep" ? "keep the live or planned board" : "new site"}</small></div><span class="wm-tag ${p[5]}">${p[5] === "keep" ? "Keep" : "New"}</span></div>
            <p>${esc(p[6])}</p>
            <ul class="wm-chips"><li><b>${a.pools}</b> pools within 2.5 km</li><li><b>${a.homes}</b> housing belts within 3 km</li><li><b>${a.hot}</b> crowd spots within 2.5 km</li>${a.st ? `<li><b>${a.st[1].toFixed(1)} km</b> to ${esc(a.st[0])}</li>` : ""}</ul></article>`).join("")}
        </div></div>
      <details class="panel pm-d wm-list"><summary><b>Every pool, academy and hotspot on the map</b><span>${c.pools.length} pools and academies · ${c.hot.length} crowd hotspots · ${c.homes.length} housing belts</span><i class="nd-chev" aria-hidden="true"></i></summary>
        <div class="wm-cols"><div><h5>Pools and academies</h5><ul>${c.pools.map(x => `<li><i class="${x[1] === "partner" ? "k-pool" : "k-mun"}"></i><b>${esc(x[0])}</b><small>${esc(x[4])}</small></li>`).join("")}</ul></div>
          <div><h5>Crowd hotspots</h5><ul>${c.hot.map(x => `<li><i class="k-hot"></i><b>${esc(x[0])}</b><small>${esc(x[3] || "")}</small></li>`).join("")}</ul>
          <h5>Housing belts</h5><ul>${c.homes.map(x => `<li><i class="k-home"></i><b>${esc(x[0])}</b>${x[3] ? `<small>${esc(x[3])}</small>` : ""}</li>`).join("")}</ul></div></div>
        <p class="wm-note">${esc(c.note)}</p></details>`;
    if (map) { map.remove(); map = null; }
    if (!window.L) { body.querySelector("#wmMap").innerHTML = '<p class="wm-nomap">The map needs an internet connection to load.</p>'; return; }
    map = L.map("wmMap", { scrollWheelZoom: false }).setView(c.center, c.zoom);
    L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", { maxZoom: 18, attribution: "&copy; OpenStreetMap contributors" }).addTo(map);
    const dot = (ll, col, r, tip, extra = {}) => L.circleMarker(ll, { radius: r, color: "#fff", weight: 1.5, fillColor: col, fillOpacity: 0.92, ...extra }).bindTooltip(tip);
    const homes = L.layerGroup(c.homes.map(h => L.circle([h[1], h[2]], { radius: 1100, color: "#1BAA5E", weight: 1, fillColor: "#1BAA5E", fillOpacity: 0.12 }).bindTooltip(`<b>${esc(h[0])}</b>${h[3] ? "<br>" + esc(h[3]) : ""}`)));
    const hot = L.layerGroup(c.hot.map(h => dot([h[1], h[2]], "#F28C28", 6, `<b>${esc(h[0])}</b><br>${esc(h[3] || "")}`)));
    const pools = L.layerGroup(c.pools.map(p => dot([p[2], p[3]], p[1] === "partner" ? "#0096C7" : "#7FB9D6", p[1] === "partner" ? 6 : 5, `<b>${esc(p[0])}</b><br>${esc(p[4])}`)));
    const rings = L.layerGroup(c.stores.flatMap(s => [5, 10].map(r => L.circle([s[1], s[2]], { radius: r * 1000, color: "#3643BA", weight: 1, dashArray: "5 6", fill: false, interactive: false }))));
    const stores = L.layerGroup(c.stores.map(s => L.marker([s[1], s[2]], { icon: L.divIcon({ className: "wm-st-ic", html: "D", iconSize: [26, 26], iconAnchor: [13, 13] }), zIndexOffset: 900 }).bindTooltip(`<b>Decathlon ${esc(s[0])}</b>`, { permanent: true, direction: "top", offset: [0, -12], className: "wm-st-tip" })));
    const live = L.layerGroup(c.boards.map(b => L.marker([b[1], b[2]], { icon: L.divIcon({ className: "wm-live-ic", html: "", iconSize: [14, 14], iconAnchor: [7, 7] }) }).bindTooltip(`<b>${esc(b[0])}</b><br>${b[3] === "plan" ? "Planned, not booked" : "Live board"}<br>${esc(b[4] || "")}`)));
    const pk = L.layerGroup(c.picks.map(p => L.marker([p[2], p[3]], { icon: L.divIcon({ className: "wm-pick-ic " + p[5], html: esc(p[0]), iconSize: [24, 24], iconAnchor: [12, 12] }), zIndexOffset: 1200 }).bindTooltip(`<b>${esc(p[0])}. ${esc(p[1])}</b><br>${esc(p[6])}`)));
    [homes, rings, hot, pools, live, stores, pk].forEach(g => g.addTo(map));
    L.control.layers(null, { "Suggested boards": pk, "Live and planned boards": live, "Pools and academies": pools, "Crowd hotspots": hot, "Housing belts": homes, "Store rings, 5 and 10 km": rings, "Stores": stores }, { collapsed: true }).addTo(map);
    const all = [...c.stores.map(s => [s[1], s[2]]), ...c.picks.map(p => [p[2], p[3]]), ...c.pools.map(p => [p[2], p[3]])];
    map.fitBounds(L.latLngBounds(all), { padding: [24, 24], maxZoom: 13 });
    body.querySelectorAll(".wm-pick").forEach(el => el.addEventListener("click", () => {
      const p = c.picks.find(x => x[0] === el.dataset.i); if (p) map.setView([p[2], p[3]], 14);
    }));
  };
  box.querySelectorAll(".wm-seg button").forEach(b => b.addEventListener("click", () => show(b.dataset.k)));
  show(KEYS[0]);
})();
