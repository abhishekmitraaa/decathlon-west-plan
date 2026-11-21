/* Water sports 2027: city maps for Pune, Ahmedabad, Baroda (Vadodara) and Surat, with where to put the water hoardings and why.
   Asked by the user on 21 Nov 2026: whole-city maps with hotspots, crowds, our stores, residential belts, pools and academies,
   counts like the Surat Adajan plan, and hoarding suggestions based on all our data.
   Sources: our stores and boards (DATA.stores, HOARDINGS), Pune AOP partners (Pune partnerships file via aopnames.js, 18 pools),
   PUNE_HOT city counts, the Surat Adajan workbook (window.ADAJAN), the Ahmedabad catchment master, the water plans (SS 2027 Pune,
   Gujarat water plan, Great Indian Swim Project), Tableau water sports YTD 2026, and web checks on 21 Nov 2026 (AMC 21 pools open,
   May 2026; PMC 35 and PCMC pools; VMC and SMC pools named in listings). Pool, hotspot and housing pins outside our own files are
   placed by area, so they are approximate (about 0.5-1 km). Hoarding picks are our proposals, sized to each plan's board count. */
window.WATER_MAPS = {
  formats: [
    ["3D cut-out", "A swimmer, a splash or a pair of goggles breaking out of the frame. Stops people at junctions and gets photographed and shared. Best at the store's own junction and at the slow, jammed crossings where people wait 30 seconds or more. One creative for the whole run; production on top of the site rent.", "Store junctions and slow crossings"],
    ["Digital screen (DOOH)", "Shared screens on the busiest corridors (SG Highway, Koregaon Park, Hinjewadi, Ring Road). Several creatives and times of day: learn-to-swim offers in the morning school run, family kit in the evening, a new message every month at no reprint cost; a QR code works on it. Paid by the slot or the day.", "Busy corridors and malls"]
  ],
  criteria: [
    ["Format first", "3D cut-outs or digital screens only this summer, no plain box boards: they are ignored at the traffic speed we pay for (user, 21 Nov 2026)."],
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
      lede: "Five stores and seven live boards. Water is Pune's biggest summer sport: ₹19.76 Cr of water sports from 1 Jan to 8 Nov 2026 (+15.3%), 58% of the West outside MP. The water budget sheet funds 4 boards in February and June and 6 from March to May (₹6 L and ₹9 L a month).",
      facts: [
        ["48", "Municipal pools", "PMC runs 35 (11 shut, Mar 2026), PCMC 13 to 14"],
        ["30", "Pool partnerships (sheet)", "By February: Amanora 5, SGS 5, Wagholi 6, Wakad 6, NIBM 5, Kothrud / Baner 3"],
        ["20,655", "Housing societies", "Registered, 2023; many more not registered"],
        ["111", "Practice places tied up today", "All sports: pools 18, racket 32, turfs 34, gyms and yoga 26"],
        ["₹19.76 Cr", "Water sports 2026", "1 Jan to 8 Nov, +15.3%"],
        ["4 → 6", "Water boards (sheet)", "Feb and Jun 4, Mar-May 6; 7 box boards live today"]
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
        ["Undri-Mohammadwadi-Handewadi", 18.460, 73.915], ["Kothrud", 18.505, 73.815], ["Kalyani Nagar-Koregaon Park", 18.545, 73.902], ["Viman Nagar", 18.567, 73.913], ["Deccan-Shivajinagar", 18.520, 73.843]
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
        ["Deccan Gymkhana club pool", "venue", 18.5160, 73.8380, "Club pool, Deccan"],
        ["PCMC pool, Pimple Gurav", "municipal", 18.5895, 73.8150, "PCMC list (2023)"], ["PCMC pool, Sangvi", "municipal", 18.5780, 73.8180, "PCMC list (2023)"],
        ["PCMC pool, Thergaon", "municipal", 18.6080, 73.7720, "PCMC list (2023)"], ["PCMC pool, Kasarwadi", "municipal", 18.6050, 73.8200, "PCMC list (2023)"],
        ["PCMC pool, Nehrunagar", "municipal", 18.6260, 73.8230, "PCMC list (2023)"], ["PCMC pool, Bhosari", "municipal", 18.6290, 73.8450, "PCMC list (2023)"]
      ],
      jams: [["Kalyani Nagar junction", 18.548, 73.903, "High-income homes, cafes and offices", "jam"], ["Mundhwa Chowk", 18.533, 73.931, "Traffic Police top 5 hotspot (Nov 2025)", "jam"], ["ABC Farms Chowk", 18.54, 73.918, "Traffic Police top 5 hotspot", "jam"], ["Sancheti Bridge", 18.53, 73.85, "Traffic Police top 5 hotspot", "jam"], ["Navale Bridge", 18.458, 73.826, "Traffic Police top 5 hotspot", "jam"], ["Goodluck Chowk, Deccan", 18.5175, 73.8405, "Shivaji and Tilak Road: most congested (ATMS, Oct 2025)", "jam"], ["Katraj junction", 18.452, 73.858, "One of Pune's busiest junctions", "jam"]],
      picks: [
        ["1", "Koregaon Park and Kalyani Nagar, North Main Road", 18.546, 73.900, "Out of catchment (Amanora, Wagholi)", "new", "Pune's cafe and nightlife belt and its richest families. Digital screens are already sold here (Koregaon Park is a listed DOOH corridor). Shree Swimming Pool and club pools nearby; drives online, express delivery and Amanora.", "Digital screen", "Feb-Jun"],
        ["2", "Viman Nagar, Phoenix Marketcity on Nagar Road", 18.562, 73.917, "Wagholi", "new", "Pune's busiest mall beside the airport road; Shree Swimming Pool (our Wagholi partner) is 200 m away; 7 km to Wagholi.", "Digital screen", "Feb-Jun"],
        ["3", "Hinjewadi entry, Bhumkar Chowk", 18.604, 73.752, "Wakad", "keep", "Where Hinjewadi's IT traffic leaves the highway for Wakad, twice a day. Turn today's box board into a 3D cut-out (a swimmer coming out of the frame). Proswim Academy 2 km.", "3D cut-out", "Feb-Jun"],
        ["4", "Mundhwa Chowk", 18.533, 73.931, "Amanora", "new", "One of the Traffic Police's top 5 congestion hotspots (Nov 2025): the junction of Kharadi, Koregaon Park and Magarpatta. Amanora's partner pools are 2 to 5 km away.", "3D cut-out", "Feb-Jun"],
        ["5", "Goodluck Chowk, Deccan (FC Road)", 18.5175, 73.8405, "SGS Mall", "new", "Busiest junction on Pune's most congested roads, Shivaji and Tilak Road (ATMS report, Oct 2025); students and old-city families; Deccan Gymkhana has digital screens. 4 km to SGS.", "Digital screen", "Mar-May"],
        ["6", "Baner Road at Balewadi High Street", 18.56, 73.787, "Kothrud / Baner (sheet)", "keep", "Young, high-income belt with Bluewater Academy and the Balewadi pool; no store of its own. Turn the live Baner board into a 3D cut-out for the peak.", "3D cut-out", "Mar-May"]
      ],
      also: "Also weighed: Sancheti Bridge, ABC Farms Chowk, Navale Bridge (all Traffic Police top 5), Katraj junction, Kalewadi Phata, EON Kharadi, Hadapsar Gadital, Sanvidhan Chowk (NIBM, live board).",
      note: "Pune counts: our partnerships file and PUNE_HOT (PMC and PCMC pools: Punekar News, Free Press Journal, 2025-26; societies: co-operative department, 2023). PCMC pool pins by area (2023 list)."
    },
    Ahmedabad: {
      name: "Ahmedabad", center: [23.05, 72.55], zoom: 11,
      lede: "Two stores, Motera in the north and Nexus in the west, 7 km apart, in a city of 8.4 million. ₹7.44 Cr of water sports from 1 Jan to 8 Nov 2026 (+11.9%). Ahmedabad hosted the Senior National Aquatic Championships in June 2026, and its civic pools drew 15,000 swimmers a day in May.",
      facts: [
        ["8.4 M", "People", "Metro 9.6 M (Ahmedabad master)"],
        ["21", "AMC pools open", "May 2026; 15,000 swimmers a day in summer"],
        ["₹7.44 Cr", "Water sports 2026", "1 Jan to 8 Nov, +11.9%"],
        ["11", "Pool partnerships (sheet)", "Nexus 5, Motera 6, by February"],
        ["₹2,500", "Kit for every partner-pool coach", "Plus an 8% affiliate link (sheet)"],
        ["2 → 3", "Water boards (sheet)", "₹3.5 L to ₹4.5 L a month"]
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
      jams: [["Iskcon Cross Road, SG Highway", 23.0255, 72.507, "SG Highway: 130+ jams in a week (Jul 2024)", "jam"], ["Shivranjani Cross Road", 23.0255, 72.5295, "CRRI 2026 flyover list", "jam"], ["Shyamal Cross Road", 23.013, 72.528, "Third most congested of 25 junctions", "jam"], ["Memco", 23.051, 72.64, "Most congested of 25 junctions", "jam"], ["Victoria Garden, Ellisbridge", 23.022, 72.567, "Second most congested", "jam"], ["Helmet Circle", 23.044, 72.545, "Busy Memnagar crossing", "jam"]],
      picks: [
        ["1", "SG Highway at Iskcon Cross Road", 23.0255, 72.507, "Nexus", "new", "SG Highway is the city's most jammed road (130+ jams in one week, Ahmedabad Mirror, Jul 2024), with big digital screens along it; offices and malls; 4 km to Nexus.", "Digital screen", "Feb-Jun"],
        ["2", "Shivranjani Cross Road, Satellite", 23.0255, 72.5295, "Nexus", "new", "On the CRRI 2026 list of junctions needing flyovers and among the city's busiest crossings; Satellite and Jodhpur families; 2 km south of Nexus.", "3D cut-out", "Feb-Jun"],
        ["3", "Visat Circle, Chandkheda", 23.1, 72.583, "Motera", "new", "North junction 1.5 km from Motera on the Gandhinagar road; Chandkheda and Motera families; stadium traffic on match days.", "3D cut-out", "Mar-May"]
      ],
      also: "Also weighed: Shyamal Cross Road and Memco (the two most congested junctions in a 25-junction study; Memco is far east of our stores), Victoria Garden at Ellisbridge (near the Veer Savarkar pool), Helmet Circle, Vastrapur.",
      note: "AMC pools: AMC via Lokmat Times and Punjab Kesari (May 2026); pool names from listings, placed by area. Hotspots and housing belts by area. Water sports: Tableau, 1 Jan to 8 Nov 2026."
    },
    Baroda: {
      name: "Baroda (Vadodara)", center: [22.31, 73.17], zoom: 12,
      lede: "One store in Alkapuri and four live boards (Kiprun now, Winter from December). Water sports for Surat, Rajkot and Baroda together: ₹6.72 Cr from 1 Jan to 8 Nov 2026 (+21.1%), the fastest growth in the West. Baroda's store did ₹22.32 Cr in Jan to Jul 2026 (+25.3%).",
      facts: [
        ["1.67 M", "People", "2011 census; about 2.4 M estimated for 2025"],
        ["4+", "Municipal pools named", "Sardar Baug, Lal Baug, Karelibaug, Waghodia Road"],
        ["2", "Swim classes listed", "Baroda Swim Front (Gotri), Sama Indoor Sports Complex"],
        ["6", "Pool partnerships (sheet)", "₹25,000 each, by February"],
        ["4", "Boards live", "Akota, Fatehgunj, Gotri, Subhanpura"],
        ["4", "Water boards (sheet)", "₹1.5 L a month for all 4"]
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
      jams: [["Genda Circle", 22.3105, 73.1645, "Long morning and evening queues", "jam"], ["Chakli Circle", 22.3135, 73.153, "Jams under the overbridge", "jam"], ["Yoga Circle", 22.299, 73.143, "180-second signal wait", "jam"], ["Golden Chowkdi", 22.333, 73.214, "Heavy 7-10 am and 4-9 pm", "jam"]],
      picks: [
        ["1", "Genda Circle, Alkapuri", 22.3105, 73.1645, "Baroda", "new", "Long queues every morning and evening (DeshGujarat, Jun 2024); 0.5 km from our store; Sardar Baug pool 1 km.", "3D cut-out", "Feb-Jun"],
        ["2", "Chakli Circle, Race Course road", 22.3135, 73.153, "Baroda", "new", "Jams under the overbridge raised at the VMC budget meeting; between Gotri, Subhanpura and Alkapuri families.", "Digital screen", "Feb-Jun"],
        ["3", "Gotri Bridge, towards Natubhai Circle", 22.312, 73.144, "Baroda", "keep", "Live board in the growing west, 1 km from Baroda Swim Front: add a 3D cut-out for water from 15 Mar.", "3D cut-out", "Feb-Jun"],
        ["4", "Akota, Old Padra Road", 22.2968, 73.1663, "Baroda", "keep", "Families on their weekly shop above the DMart car park, 2 km from the store; switch to water with a cut-out extension.", "3D cut-out", "Feb-Jun"]
      ],
      also: "Also weighed: Yoga Circle (180-second signal), Golden Chowkdi (heavy 7-10 am and 4-9 pm traffic), Fatehgunj and Subhanpura (live boards, stay on running). Budget check: the sheet gives ₹1.5 L a month for 4 boards (₹37,500 each), tight for 3D or digital: 2 hero boards (Genda and Chakli) may do more than 4.",
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
        ["11", "Pool partnerships (sheet)", "Dumas 6, Adajan 5, by February"],
        ["4", "Water boards (sheet)", "₹6 L a month"]
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
      jams: [["SVNIT Circle", 21.1665, 72.785, "Busiest in Athwa zone (SMC, Jan 2026)", "jam"], ["Kargil Chowk, Piplod", 21.163, 72.795, "Busiest in Athwa zone (SMC, Jan 2026)", "jam"], ["Athwa Lines to Maan Darwaja, Ring Road", 21.18, 72.815, "Full jam, metro works (Oct 2026)", "jam"], ["Hirabag junction", 21.214, 72.861, "Peak-hour congestion (SMC ramp plan)", "jam"], ["Nilgiri Circle", 21.196, 72.877, "Schools and trucks", "jam"]],
      picks: [
        ["1", "SVNIT Circle, Piplod", 21.1665, 72.785, "Adajan and Dumas", "new", "Among the busiest junctions in Athwa zone (SMC flyover plan, Jan 2026): the traffic of the Pal-Umra and cable bridges; Piplod and Vesu families. Pal and Vir Savarkar pools within 3 km.", "3D cut-out", "Feb-Jun"],
        ["2", "Madhuvan Circle, Adajan", 21.1911, 72.7884, "Adajan", "new", "Best-scoring site in the Adajan plan (86): the store's own junction, with 8 IT, 8 sports and 7 housing sites within 500 m; SMC Pal pool 1 km.", "3D cut-out", "Feb-Jun"],
        ["3", "Athwa Lines to Majura Gate, Ring Road", 21.18, 72.815, "Dumas", "new", "The Ring Road jam from Athwa Lines to Maan Darwaja (Patrika, Oct 2026): textile-market commuters and the city centre; SMC ladies pool at Athwa Gate.", "Digital screen", "Feb-Jun"],
        ["4", "VIP Road, Vesu-Althan", 21.152, 72.792, "Dumas", "new", "Premium Vesu homes with society pools and the SMC Althan pool; 64% of these homes already shop at Dumas, 6 km away.", "Digital screen", "Feb-Jun"]
      ],
      also: "Also weighed: Kargil Chowk (busy, but 1 km from SVNIT Circle: same route), Hirabag and Varachha (far east), Nilgiri Circle, Pal-Umra Bridge (planned box board: replaced by SVNIT Circle).",
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
    const hot = (c.hot === "adajan" ? (A.cityHot || []).map(h => [h[1], h[2], h[3], `Crowd score ${h[4]}; ${h[5]} km from Adajan`]) : c.hot).concat(c.jams || []);
    const homes = c.homes === "adajan" ? (A.city || []).filter(x => x[1] === "live").map(x => [x[0], x[2], x[3], x[4]]) : c.homes;
    const boards = (window.HOARDINGS || []).filter(h => h.city === BOARD_CITY[k] && h.lat).map(h => [h.loc, h.lat, h.lon, h.status, h.why]);
    const current = (window.HOARDINGS || []).filter(h => h.city === BOARD_CITY[k]).map((h, i) => ({ ...h, tag: String.fromCharCode(65 + i) }));
    const osmAll = (((window.OSM_POOLS || {}).cities || {})[k] || {}).pools || [];
    const osm = osmAll.filter(o => !c.pools.some(x => KM([o[0], o[1]], [x[2], x[3]]) < 0.08)).map(o => o[2] === "club" ? [o[0], o[1], "pub", o[3], o[4]] : o);
    return { ...c, stores, hot, homes, boards, current, osm };
  };
  // pool types: our named pools, then OpenStreetMap's
  const PT = {
    partner: ["Our partner pool (AOP)", "#00C2FF", "our partner pools (AOPs)"],
    pub: ["Public, club, hotel or school pool", "#2a78d6", "public, club, hotel or school pools"], soc: ["Society or residential pool", "#e87ba4", "society or residential pools"],
    home: ["Private home pool", "#eda100", "private home pools"], oth: ["Pool, type not tagged", "#1baf7a", "pools with no type tagged"]
  };
  const OSMT = ["soc", "pub", "home", "oth"];
  // what each pick has around it, measured from the pins on the map
  const around = (c, p) => {
    const pt = [p[2], p[3]];
    const pools = c.pools.filter(x => KM(pt, [x[2], x[3]]) <= 2.5).length + (c.osm || []).filter(x => KM(pt, [x[0], x[1]]) <= 2.5).length;
    const homes = c.homes.filter(x => KM(pt, [x[1], x[2]]) <= 3).length;
    const hot = c.hot.filter(x => KM(pt, [x[1], x[2]]) <= 2.5).length, jam = c.hot.filter(x => x[4] === "jam" && KM(pt, [x[1], x[2]]) <= 1.5).length;
    const st = c.stores.map(s => [s[0], KM(pt, [s[1], s[2]])]).sort((a, b) => a[1] - b[1])[0];
    return { pools, homes, hot, jam, st };
  };

  const KEYS = Object.keys(W.cities);
  const LK = n => n < 1e5 ? "₹" + +(n / 1e3).toFixed(1) + "K" : "₹" + (n / 1e5).toLocaleString("en-IN", { maximumFractionDigits: 2 }) + " L";
  const STATUS = { live: "Live", nov: "Booked: goes live in November", plan: "Planned, not booked" };
  box.innerHTML = `<div class="wm-formats"><h4>This summer: 3D cut-outs or digital screens, no plain box boards</h4><div class="wm-fmt">${(W.formats || []).map(([n, t, w], i) => `<article class="${i ? "dg" : "td"}"><b>${esc(n)}</b><p>${esc(t)}</p><small>Use it for: ${esc(w)}</small></article>`).join("")}</div></div>
    <div class="seg wm-seg" role="group" aria-label="Choose city">${KEYS.map((k, i) => `<button type="button" data-k="${k}" aria-pressed="${i === 0}">${esc(W.cities[k].name)}</button>`).join("")}</div>
    <div class="wm-body"></div>
    <details class="panel pm-d wm-crit"><summary><b>What we check before we suggest a hoarding</b><span>${W.criteria.length} tests, applied to every pick</span><i class="nd-chev" aria-hidden="true"></i></summary>
      <ol class="wm-crit-l">${W.criteria.map(([h, t]) => `<li><b>${esc(h)}</b><span>${esc(t)}</span></li>`).join("")}</ol></details>`;
  const body = box.querySelector(".wm-body");
  let map = null;

  const show = k => {
    box.querySelectorAll(".wm-seg button").forEach(b => b.setAttribute("aria-pressed", b.dataset.k === k));
    const c = city(k);
    const picks = c.picks.map(p => ({ p, a: around(c, p) }));
    body.innerHTML = `<p class="wm-lede">${esc(c.lede)}</p>
      ${c.osm.length ? (() => { const n = t => c.osm.filter(o => o[2] === t).length; return `<div class="wm-poolsum"><b>${c.osm.length + c.pools.length}</b><span>pools on the map of ${esc(c.name)}</span><ul>${[["partner", c.pools.filter(x => x[1] === "partner").length], ["soc", n("soc")], ["pub", n("pub") + c.pools.filter(x => x[1] !== "partner").length], ["home", n("home")], ["oth", n("oth")]].filter(x => x[1]).map(([t, v]) => `<li><i style="background:${PT[t][1]}"></i><b>${v}</b> ${PT[t][2]}</li>`).join("")}</ul><small>OpenStreetMap, where volunteers trace pools from satellite images: these are the pools we can see, not every pool in the city (rooftop and indoor pools are often missing).</small></div>`; })() : ""}
      <div class="wm-facts">${c.facts.map(([v, l, n]) => `<div><b>${esc(v)}</b><span>${esc(l)}</span>${n ? `<small>${esc(n)}</small>` : ""}</div>`).join("")}</div>
      <div class="wm-grid"><div class="wm-mapwrap"><div class="wm-map" id="wmMap" role="img" aria-label="Map of ${esc(c.name)}: stores, boards, pools, crowd hotspots, housing and suggested hoardings"></div>
        <p class="wm-key"><span><i class="k-st"></i>Our stores</span><span><i class="k-pick"></i>Suggested board</span><span><i class="k-live"></i>Current hoarding (click for the photo)</span><span><i class="k-pool"></i>Partner pool (AOP)</span><span><i class="k-mun"></i>Public pool, club or academy we know (big pin)</span>${c.osm.length ? OSMT.filter(t => c.osm.some(o => o[2] === t)).map(t => `<span><i class="k-osm" style="background:${PT[t][1]}"></i>${PT[t][0]}</span>`).join("") : ""}<span><i class="k-hot"></i>Crowd hotspot</span><span><i class="k-jam"></i>Busy junction (traffic data)</span><span><i class="k-home"></i>Housing belt</span></p></div>
        <div class="wm-picks"><h4>Where we put the water boards, and why</h4>
          ${picks.map(({ p, a }) => `<article class="wm-pick" data-i="${esc(p[0])}"><div class="wm-ph"><b class="wm-n">${esc(p[0])}</b><div><b>${esc(p[1])}</b><small>${esc(p[4])} · ${p[5] === "keep" ? "keep the live or planned board" : "new site"}</small></div><span class="wm-tag ${p[5]}">${p[5] === "keep" ? "Keep site" : "New"}</span></div>
            <div class="wm-fmt-row"><span class="wm-f ${/3D/.test(p[7] || "") ? "td" : "dg"}">${esc(p[7] || "")}</span><span class="wm-mo">${esc(p[8] || "")}</span></div>
            <p>${esc(p[6])}</p>
            <ul class="wm-chips"><li><b>${a.pools}</b> pools within 2.5 km</li><li><b>${a.homes}</b> housing belts within 3 km</li><li><b>${a.hot}</b> crowd spots within 2.5 km</li>${a.jam ? `<li class="jam"><b>${a.jam}</b> busy junction${a.jam > 1 ? "s" : ""} (traffic data) within 1.5 km</li>` : ""}${a.st ? `<li><b>${a.st[1].toFixed(1)} km</b> to ${esc(a.st[0])}</li>` : ""}</ul></article>`).join("")}
          ${c.also ? `<p class="wm-also">${esc(c.also)}</p>` : ""}
        </div></div>
      <details class="panel pm-d wm-cur"><summary><b>Current hoardings in ${esc(c.name)}</b><span>${c.current.length ? `${c.current.length} board${c.current.length > 1 ? "s" : ""} · ${LK(c.current.reduce((a, h) => a + (h.cost || 0), 0))} a month` : "none booked yet"} · photos, size, cost and what the water plan does with each</span><i class="nd-chev" aria-hidden="true"></i></summary>
        ${c.current.length ? `<div class="wm-cur-grid">${c.current.map(h => { const pk = h.lat ? c.picks.find(p => p[5] === "keep" && KM([h.lat, h.lon], [p[2], p[3]]) < 0.6) : null;
          return `<article class="wm-cc" data-t="${h.tag}"><div class="wm-cc-img">${h.img ? `<img src="assets/img/${esc(h.img)}" alt="Hoarding: ${esc(h.loc)}" loading="lazy">` : `<span class="wm-cc-noimg">Site and photo to be confirmed</span>`}<b class="wm-cc-tag">${h.tag}</b><span class="wm-cc-st ${esc(h.status)}">${STATUS[h.status] || esc(h.status)}</span></div>
            <div class="wm-cc-b"><b>${esc(h.loc)}</b><small>${esc(h.size)} · ${esc(h.dur || "")} · <strong>${LK(h.cost || 0)} a month</strong></small><p>${esc(h.why || "")}</p>
            <span class="wm-cc-plan ${pk ? "keep" : "free"}">${pk ? `Water plan: keep it, board ${esc(pk[0])}` : h.lat ? "Water plan: not on the water shortlist (free for other campaigns)" : "Water plan: place it once the site is known"}</span>${h.lat && !h.exact ? '<em>Pin approximate</em>' : ""}</div></article>`; }).join("")}</div>` : ""}</details>
      <details class="panel pm-d wm-list"><summary><b>Every pool, academy, hotspot and busy junction on the map</b><span>${c.pools.length} pools and academies · ${c.hot.length} crowd hotspots · ${c.homes.length} housing belts</span><i class="nd-chev" aria-hidden="true"></i></summary>
        <div class="wm-cols"><div><h5>Pools and academies</h5><ul>${c.pools.map(x => `<li><i class="${x[1] === "partner" ? "k-pool" : "k-mun"}"></i><b>${esc(x[0])}</b><small>${esc(x[4])}</small></li>`).join("")}</ul></div>
          <div><h5>Crowd hotspots</h5><ul>${c.hot.map(x => `<li><i class="${x[4] === "jam" ? "k-jam" : "k-hot"}"></i><b>${esc(x[0])}</b><small>${esc(x[3] || "")}</small></li>`).join("")}</ul>
          <h5>Housing belts</h5><ul>${c.homes.map(x => `<li><i class="k-home"></i><b>${esc(x[0])}</b>${x[3] ? `<small>${esc(x[3])}</small>` : ""}</li>`).join("")}</ul></div></div>
        <p class="wm-note">${esc(c.note)}</p></details>
      ${c.osm.length ? `<details class="panel pm-d wm-near" open><summary><b>Pools near each store</b><span>Every pool on the map within 2.5 km and 5 km of the store, by type</span><i class="nd-chev" aria-hidden="true"></i></summary>
        <div class="sb-wrap"><table class="wm-nt"><thead><tr><th>Store</th><th>Within 2.5 km</th><th>Within 5 km</th>${["partner", ...OSMT].map(t => `<th><i style="background:${PT[t][1]}"></i>${PT[t][0].replace(" (AOP)", "")}<small>within 5 km</small></th>`).join("")}</tr></thead><tbody>
        ${c.stores.map(st => { const ll = [st[1], st[2]], all = [...c.pools.map(x => [x[2], x[3], x[1] === "partner" ? "partner" : "pub"]), ...c.osm]; const w = r => all.filter(x => KM(ll, [x[0], x[1]]) <= r);
          return `<tr><th>${esc(st[0])}</th><td><b>${w(2.5).length}</b></td><td><b>${w(5).length}</b></td>${["partner", ...OSMT].map(t => `<td>${w(5).filter(x => x[2] === t).length || "-"}</td>`).join("")}</tr>`; }).join("")}</tbody></table></div>
        <p class="wm-note">Pools from OpenStreetMap (fetched ${esc((window.OSM_POOLS || {}).fetched || "")}) plus the partner, municipal and club pools we name. Society = tagged private (60 m² or more) or named as a society; public, club, hotel or school = open to the public or to members; private home = private and under 60 m²; not tagged = the map does not say who uses it. © OpenStreetMap contributors.</p></details>` : ""}`;
    if (map) { map.remove(); map = null; }
    if (!window.L) { body.querySelector("#wmMap").innerHTML = '<p class="wm-nomap">The map needs an internet connection to load.</p>'; return; }
    map = L.map("wmMap", { scrollWheelZoom: false }).setView(c.center, c.zoom);
    L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", { maxZoom: 18, attribution: "&copy; OpenStreetMap contributors" }).addTo(map);
    const dot = (ll, col, r, tip, extra = {}) => L.circleMarker(ll, { radius: r, color: "#fff", weight: 1.5, fillColor: col, fillOpacity: 0.92, ...extra }).bindTooltip(tip);
    const homes = L.layerGroup(c.homes.map(h => L.circle([h[1], h[2]], { radius: 1100, color: "#1BAA5E", weight: 1, fillColor: "#1BAA5E", fillOpacity: 0.12 }).bindTooltip(`<b>${esc(h[0])}</b>${h[3] ? "<br>" + esc(h[3]) : ""}`)));
    const hot = L.layerGroup(c.hot.map(h => dot([h[1], h[2]], h[4] === "jam" ? "#D92D20" : "#F28C28", h[4] === "jam" ? 7 : 6, `<b>${esc(h[0])}</b><br>${esc(h[3] || "")}${h[4] === "jam" ? "<br><i>Busy junction, traffic data</i>" : ""}`)));
    const pools = L.layerGroup(c.pools.map(p => L.marker([p[2], p[3]], { icon: L.divIcon({ className: "wm-pool-ic " + (p[1] === "partner" ? "pt" : "nm"), html: p[1] === "partner" ? "P" : "", iconSize: p[1] === "partner" ? [22, 22] : [16, 16], iconAnchor: p[1] === "partner" ? [11, 11] : [8, 8] }), zIndexOffset: p[1] === "partner" ? 800 : 600 }).bindTooltip(`<b>${esc(p[0])}</b><br>${esc(p[4])}`)));
    const cv = L.canvas({ padding: 0.3 });
    const osmL = L.layerGroup(c.osm.map(o => L.circleMarker([o[0], o[1]], { renderer: cv, radius: o[2] === "soc" ? 6.5 : o[2] === "pub" ? 5.5 : 4.5, color: "#0B1F3A", weight: 1.4, fillColor: PT[o[2]][1], fillOpacity: 1 }).bindTooltip(`<b>${esc(o[4] || PT[o[2]][0])}</b><br>${PT[o[2]][0]}${o[3] ? `, about ${o[3]} m²` : ""}<br><small>OpenStreetMap</small>`)));
    const rings = L.layerGroup(c.stores.flatMap(s => [5, 10].map(r => L.circle([s[1], s[2]], { radius: r * 1000, color: "#3643BA", weight: 1, dashArray: "5 6", fill: false, interactive: false }))));
    const stores = L.layerGroup(c.stores.map(s => L.marker([s[1], s[2]], { icon: L.divIcon({ className: "wm-st-ic", html: "D", iconSize: [26, 26], iconAnchor: [13, 13] }), zIndexOffset: 900 }).bindTooltip(`<b>Decathlon ${esc(s[0])}</b>`, { permanent: true, direction: "top", offset: [0, -12], className: "wm-st-tip" })));
    const curM = {};
    const live = L.layerGroup(c.current.filter(h => h.lat).map(h => (curM[h.tag] = L.marker([h.lat, h.lon], { icon: L.divIcon({ className: "map-board wm-cur-ic", html: `<i>${h.tag}</i>`, iconSize: [20, 20], iconAnchor: [24, 24], popupAnchor: [-14, -24] }), zIndexOffset: 1100 })
      .bindPopup(`${h.img ? `<img src="assets/img/${esc(h.img)}" alt="" style="width:220px;border-radius:6px;display:block;margin-bottom:6px">` : ""}<b>${h.tag}. ${esc(h.loc)}</b><br>${esc(h.size)}, ${LK(h.cost || 0)} a month<br>${STATUS[h.status] || esc(h.status)}${h.dur ? ", " + esc(h.dur) : ""}${h.exact ? "" : "<br><small>Pin is approximate</small>"}`))));
    const pk = L.layerGroup(c.picks.map(p => L.marker([p[2], p[3]], { icon: L.divIcon({ className: "wm-pick-ic " + p[5], html: esc(p[0]), iconSize: [24, 24], iconAnchor: [12, 12] }), zIndexOffset: 1200 }).bindTooltip(`<b>${esc(p[0])}. ${esc(p[1])}</b><br>${esc(p[7] || "")}, ${esc(p[8] || "")}<br>${esc(p[6])}`)));
    [homes, rings, hot, osmL, pools, live, stores, pk].forEach(g => g.addTo(map));
    L.control.layers(null, { "Suggested boards": pk, "Current hoardings": live, "Our partner and known pools": pools, "Every pool on the map (OpenStreetMap)": osmL, "Crowd hotspots and busy junctions": hot, "Housing belts": homes, "Store rings, 5 and 10 km": rings, "Stores": stores }, { collapsed: true }).addTo(map);
    const all = [...c.stores.map(s => [s[1], s[2]]), ...c.picks.map(p => [p[2], p[3]]), ...c.pools.map(p => [p[2], p[3]])];
    map.fitBounds(L.latLngBounds(all), { padding: [24, 24], maxZoom: 13 });
    body.querySelectorAll(".wm-cc").forEach(el => el.addEventListener("click", () => {
      const m = curM[el.dataset.t]; if (!m) return; map.setView(m.getLatLng(), 14); m.openPopup(); body.querySelector("#wmMap").scrollIntoView({ behavior: "smooth", block: "center" });
    }));
    body.querySelectorAll(".wm-pick").forEach(el => el.addEventListener("click", () => {
      const p = c.picks.find(x => x[0] === el.dataset.i); if (p) map.setView([p[2], p[3]], 14);
    }));
  };
  box.querySelectorAll(".wm-seg button").forEach(b => b.addEventListener("click", () => show(b.dataset.k)));
  const ST_CITIES = { all: KEYS, Pune: ["Pune"], Gujarat: ["Ahmedabad", "Baroda", "Surat"], MP: [] };
  const follow = () => {
    const st = (window.W27_VIEW || {}).state || "all", ok = ST_CITIES[st] || KEYS;
    box.querySelectorAll(".wm-seg button").forEach(b => { b.hidden = !ok.includes(b.dataset.k); });
    const none = box.querySelector(".wm-none");
    if (!ok.length) { body.hidden = true; if (!none) box.querySelector(".wm-seg").insertAdjacentHTML("afterend", '<p class="wm-none">No water hoardings for MP in the water sports sheet. MP\'s water money goes to influencers, Meta, boosts, events and pools (see the budget above).</p>'); return; }
    body.hidden = false; if (none) none.remove();
    const cur = box.querySelector('.wm-seg button[aria-pressed="true"]');
    if (!cur || !ok.includes(cur.dataset.k)) show(ok[0]);
  };
  window.addEventListener("w27:view", follow);
  show(KEYS[0]); follow();
})();
