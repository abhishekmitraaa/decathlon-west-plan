/* 2027 Q1 and Q2 sport plan.
   tov: online (digital) turnover by month, Jan-Oct 2026, in rupees, per business unit, from Digital_ytd_2026_data_.xlsx
   (the only turnover by sport we have; store sales by sport to come). Mountain = hiking + trekking and climbing + camping;
   cycling = cycling sports + mobility + maintenance and repair; fitness = fitness equipment + fitness outfit;
   pickleball = the sheet's padel, pickleball and beach tennis line. Gujarat = Ahmedabad + rest of West. */
window.SPORT_TOV_2026 = {"swimming": {"Pune": [441143, 565912, 1191808, 1315491, 1497093, 1012026, 793100, 699935, 622509, 556869], "Gujarat": [257287, 357826, 646988, 927914, 956484, 817826, 774016, 624692, 511222, 434638], "MP": [123278, 143781, 309638, 487390, 558456, 423029, 406333, 266271, 251024, 188453]}, "mountain": {"Pune": [5033543, 3374701, 3390538, 4617668, 5885461, 5597214, 8925977, 5711323, 4427080, 3471711], "Gujarat": [5089297, 2702172, 2897392, 5181992, 6065140, 3776984, 4444065, 3753768, 3466060, 2923057], "MP": [4479144, 1874488, 1863887, 3002701, 3521759, 2512692, 2697358, 2362492, 2836899, 2763756]}, "running": {"Pune": [1623054, 1168705, 1287463, 1219325, 1135708, 1340552, 1681562, 1476613, 1265801, 1095055], "Gujarat": [2921913, 1396281, 1427695, 1494728, 1294544, 1170236, 1467677, 1515010, 1224932, 1193254], "MP": [1627266, 1138783, 992809, 862614, 830244, 731576, 929958, 926317, 737402, 763200]}, "cycling": {"Pune": [2548992, 2306280, 2611730, 2723739, 2853781, 2784281, 2816269, 3990113, 2110823, 2837147], "Gujarat": [1319380, 956920, 1017393, 1386384, 1447317, 1578430, 1645408, 1442033, 1469321, 1503131], "MP": [652364, 458482, 465761, 638027, 481466, 871512, 1105893, 1087097, 845131, 1264976]}, "cricket": {"Pune": [276751, 191862, 242866, 280757, 235528, 272576, 253892, 200060, 177508, 165933], "Gujarat": [245043, 205734, 365206, 269658, 263681, 211677, 217609, 198319, 150903, 205249], "MP": [94448, 82317, 159024, 106211, 124890, 118270, 122840, 96812, 98997, 81865]}, "pickleball": {"Pune": [54986, 43547, 35083, 34976, 72121, 89629, 78279, 87407, 42578, 47284], "Gujarat": [65958, 7030, 26332, 94595, 36232, 53848, 23792, 94008, 93909, 84407], "MP": [31985, 24252, 59042, 4894, 30493, 23042, 74378, 8897, 49514, -14773]}, "fitness": {"Pune": [3635310, 3047306, 4275008, 3655213, 3945338, 4626210, 6066825, 5327350, 3227176, 3307314], "Gujarat": [3224888, 2697408, 3100979, 2788458, 3064677, 3845891, 3694422, 2964615, 2769361, 2367575], "MP": [2024394, 1522438, 1950826, 1690065, 1938160, 2314762, 1973151, 2605090, 2017130, 1676709]}};

/* The plan, sport by sport, January to June 2027.
   budget: proposed share of each state's 2027 ad budget for the quarter (ultimate_data_sheet_1.xlsx, DATA.spend.*.y27).
   aop: proposed split of each state's AOPs for the quarter (AOP_PLAN, months Jan-Mar and Apr-Jun 2027).
   growth: proposed online turnover growth on the same quarter of 2026. All three are proposals, to confirm. */
window.SPORTS27 = {
  sports: [
    { id: "running", name: "Running", color: "#3643BA", ink: "#fff", where: ["Pune", "Gujarat", "MP"],
      idea: "Race season is ours: a Decathlon desk at every start line, and the shoe they run in.",
      growth: { q1: 0.18, q2: 0.10 },
      budget: { q1: { Pune: 0.16, Gujarat: 0.14, MP: 0.16 }, q2: { Pune: 0.06, Gujarat: 0.04, MP: 0.06 } },
      aop: { q1: { Pune: 14, Gujarat: 8, MP: 7 }, q2: { Pune: 5, Gujarat: 3, MP: 3 } }, aopKind: "run clubs, tracks and race organisers",
      months: [["Run clubs restart: New Year, New Moves", "Vadodara Marathon, Sun 31 Jan: bib expo desk"], ["Indore Marathon, first Sunday of February (date to confirm)", "5K and 10K training blocks"], ["Women's Day pink run, Sat 6 - Sun 7 Mar", "Kiprun Challenger ₹9,999 launches"], ["Summer run clubs at 5:30 AM", "Kiprun Challenger try-on runs"], ["Heat and hydration kit for runners", "Kiprun Challenger push"], ["Global Running Day, Wed 2 Jun", "Monsoon-ready running shoes"]],
      moves: { q1: ["Bib collection at 30 races, in our stores: 20,000 walk-ins (Q1 plan)", "Community meetup with 500 runners inside our stores (Q1 plan)", "A run club in every store, Saturday 6 AM, with shoe fitting after the run", "Footwear is the 2027 focus: new-arrival shoes at every start line"],
               q2: ["Kiprun Challenger at ₹9,999 (March to May): try-on runs from every store", "Summer run clubs move to 5:30 AM, with hydration packs at the finish", "Global Running Day, 2 June: one route per city that finishes at the store"] } },
    { id: "fitness", name: "Fitness", color: "#E0A100", ink: "#10135A", where: ["Pune", "Gujarat", "MP"],
      idea: "People start in January. Be in the room when they do.",
      growth: { q1: 0.15, q2: 0.15 },
      budget: { q1: { Pune: 0.16, Gujarat: 0.13, MP: 0.16 }, q2: { Pune: 0.12, Gujarat: 0.10, MP: 0.14 } },
      aop: { q1: { Pune: 20, Gujarat: 12, MP: 9 }, q2: { Pune: 12, Gujarat: 8, MP: 6 } }, aopKind: "gyms, yoga and pilates studios",
      months: [["Movement for All, all 13 stores", "Pune sport of the month: fitness"], ["Home gym and strength: new arrivals", "Valentine's: train together"], ["Women's Day weekend, 6-7 Mar: women-only pilates and yoga mornings"], ["6 AM summer workouts at partner gyms", "World Health Day, Wed 7 Apr"], ["Sports Utsav: fitness zones in every store"], ["Yoga Day build-up from 1 Jun", "Yoga Day, Mon 21 Jun"]],
      moves: { q1: ["Move Your Way: 3,500 registrations, fit sessions and in-store challenges (Q1 plan)", "Movement for All in all 13 stores in January", "Women's Day weekend: a women-only session, a sport to try, then shopping with the day's offer", "Gym tie-ups: member offers at partner gyms, their members train in our kit"],
               q2: ["Yoga Day: 21 days of yoga from 1 June in stores and partner studios, ending Monday 21 June", "Summer 6 AM workouts at partner gyms and on store playgrounds", "Sports Utsav in May with a fitness zone in every store"] } },
    { id: "cycling", name: "Cycling", color: "#E8590C", ink: "#fff", where: ["Pune", "Gujarat", "MP"],
      idea: "Pune hosts India's biggest cycle race in January. Ride with it.",
      growth: { q1: 0.20, q2: 0.15 },
      budget: { q1: { Pune: 0.14, Gujarat: 0.07, MP: 0.09 }, q2: { Pune: 0.10, Gujarat: 0.05, MP: 0.09 } },
      aop: { q1: { Pune: 10, Gujarat: 4, MP: 4 }, q2: { Pune: 7, Gujarat: 3, MP: 3 } }, aopKind: "cycling clubs and bike-friendly societies",
      months: [["Bajaj Pune Grand Tour, 26-31 Jan (UCI 2.1, 6 stages)", "Fan rides to the stages"], ["Workshop Mela in apartments: service and buyback"], ["Workshop Mela: 10 apartments in Q1", "Commuter bikes for summer"], ["Learn-to-ride camps for kids"], ["Summer holidays: kids' bikes and family rides"], ["World Bicycle Day, Thu 3 Jun: ride to work", "Service before the monsoon"]],
      moves: { q1: ["Bajaj Pune Grand Tour, 26-31 January: fan rides from all 5 Pune stores to the stage routes (about 2.5 million watched in 2026)", "Workshop Mela in 10 apartments: 250 bikes serviced, 25 buybacks (Q1 plan)", "Gujarat and MP: Sunday group rides from every store"],
               q2: ["Learn-to-ride camps for kids in April and May, with a first-bike offer", "World Bicycle Day, 3 June: ride-to-work mornings from every store", "A service desk in every store before the monsoon"] } },
    { id: "mountain", name: "Mountain", color: "#2E7D32", ink: "#fff", where: ["Pune", "Gujarat", "MP"],
      idea: "Our biggest online sport: winter treks first, then the Himalayan summer.",
      growth: { q1: 0.12, q2: 0.12 },
      budget: { q1: { Pune: 0.10, Gujarat: 0.08, MP: 0.12 }, q2: { Pune: 0.12, Gujarat: 0.10, MP: 0.13 } },
      aop: { q1: { Pune: 8, Gujarat: 4, MP: 4 }, q2: { Pune: 8, Gujarat: 4, MP: 4 } }, aopKind: "trek organisers and travel agencies",
      months: [["Winter treks: Sahyadri sunrise treks, Saputara, Pachmarhi"], ["Camping weekends: Pune sport of the month"], ["Himalayan summer prep: gear lists with trek organisers"], ["Himalayan trek season opens"], ["Peak travel: summer holidays and Himalayan treks"], ["Monsoon treks from late June: rainwear and trek shoes"]],
      moves: { q1: ["Winter weekend treks with organisers in every city; their gear list opens in our app", "Camping in February, Pune's sport of the month: weekend camps in our tents", "Keep the 50 travel-agency affiliates from the Q4 winter campaign working"],
               q2: ["Himalayan summer: trek organisers share their gear list, customers shop it in one tap", "Summer holiday travel: luggage, backpacks and kids' outdoor kit", "Sahyadri monsoon treks open in June: rainwear and trek shoes up front"] } },
    { id: "swimming", name: "Swimming", color: "#0096C7", ink: "#fff", where: ["Pune", "Gujarat", "MP"],
      idea: "Summer is short. Sign them up before it starts.",
      growth: { q1: 0.15, q2: 0.25 },
      budget: { q1: { Pune: 0.03, Gujarat: 0.03, MP: 0.04 }, q2: { Pune: 0.14, Gujarat: 0.13, MP: 0.16 } },
      aop: { q1: { Pune: 6, Gujarat: 7, MP: 5 }, q2: { Pune: 14, Gujarat: 10, MP: 7 } }, aopKind: "swimming pools and swim academies",
      months: [["Pool tie-ups for the summer"], ["Pool partners onboarded", "Learn to Swim batches announced"], ["Learn to Swim registrations open"], ["Learn to Swim summer batches start", "Summer Camp"], ["Peak swim camps", "Pune sport of the month: swimming"], ["Swim galas at partner pools before schools reopen"]],
      moves: { q1: ["Sign pool partners in January and February, so the summer batches are ours", "Learn to Swim registrations open in March, in store and in the app", "Swim kit (goggles, caps, costumes) on the shop floor from March"],
               q2: ["Learn to Swim summer batches at partner pools, April to June, kids first", "May is Pune's swimming month", "Swim galas in June: every child who finishes collects a certificate in store"] } },
    { id: "cricket", name: "Cricket", color: "#C2185B", ink: "#fff", where: ["Gujarat"],
      idea: "Our Motera store sits next to the world's biggest cricket stadium. Use it.",
      growth: { q1: 0.25, q2: 0.25 },
      budget: { q1: { Gujarat: 0.10 }, q2: { Gujarat: 0.12 } },
      aop: { q1: { Gujarat: 10 }, q2: { Gujarat: 10 } }, aopKind: "cricket academies and box-cricket arenas",
      months: [["Box cricket night league, Surat (to 16 Jan)"], ["Society and corporate box-cricket leagues"], ["IPL starts Sun 14 Mar: gully cricket gear check"], ["IPL match days at Motera", "Summer cricket camps with academies"], ["IPL final, Sun 30 May", "Summer camp finals"], ["Academy kit for the new season", "Indoor nets for the monsoon"]],
      moves: { q1: ["Box cricket night league in Surat, from the Adajan opening to 16 January", "Society and corporate box-cricket leagues in Ahmedabad, Surat, Baroda and Rajkot", "IPL from 14 March: gully cricket gear in every Gujarat store, with creator reels"],
               q2: ["Gujarat Titans match days at Motera, next to the stadium: a fan zone and a kit desk", "Summer cricket camps with academies: the camp kit list is shopped in store", "IPL final, 30 May: a watch party on the Motera playground"] } },
    { id: "pickleball", name: "Pickleball", color: "#12A150", ink: "#fff", where: ["Gujarat", "Pune"],
      idea: "The fastest-growing sport in our Gujarat stores: Rajkot +900%, Motera +175%.",
      growth: { q1: 0.60, q2: 0.60 },
      budget: { q1: { Pune: 0.04, Gujarat: 0.08 }, q2: { Pune: 0.03, Gujarat: 0.08 } },
      aop: { q1: { Pune: 10, Gujarat: 10 }, q2: { Pune: 4, Gujarat: 8 } }, aopKind: "pickleball courts and clubs",
      months: [["Pickle Premier League, Surat (to 16 Jan)"], ["Society pickleball leagues, Ahmedabad"], ["Pune sport of the month: pickleball", "Court tie-ups"], ["Inter-store pickleball cup, Gujarat"], ["Summer evening leagues", "Kids' coaching"], ["Cup finals at the Motera playground"]],
      moves: { q1: ["Pickle Premier League in Surat, from the Adajan opening to 16 January", "Society leagues in Ahmedabad: we bring the nets, paddles and balls", "March is Pune's pickleball month: paddle demo days at Pune courts"],
               q2: ["Inter-store pickleball cup across the 5 Gujarat stores, April to June", "Evening leagues and kids' coaching at partner courts", "Finals on the Motera playground in June"] } }
  ],
  // the month by month strategy at the bottom of the page
  months: [
    { title: "Start the year with them", moves: ["Movement for All in all 13 stores, and New Year, New Moves", "Clearance sale, animated in every store", "Bajaj Pune Grand Tour, 26-31 Jan; Vadodara Marathon, 31 Jan", "Surat Adajan's first month: Ramat chalu rahe to 16 Jan", "Pool and gym partners signed for the summer"] },
    { title: "Clubs, camps and leagues", moves: ["Beach Day, Surat (10,000 national footfall goal)", "Camping weekends, Pune's sport of the month", "Society leagues: box cricket and pickleball in Gujarat", "Workshop Mela in apartments: bike service and buyback", "New arrivals: shoes, phase 1"] },
    { title: "Women's Day and the IPL", moves: ["Women's Day weekend, Sat 6 and Sun 7 Mar, all 13 stores", "IPL from Sun 14 Mar: cricket in every Gujarat store", "Kiprun Challenger ₹9,999 launches", "Learn to Swim registrations open", "Holi, Mon 22 Mar; Good Friday long weekend from 26 Mar"] },
    { title: "Summer starts: sign the kids up", moves: ["Summer Camp (April to June)", "Learn to Swim batches, cricket camps and learn-to-ride camps begin", "Himalayan trek season opens", "Gudi Padwa, Thu 8 Apr; shoes, phase 2", "IPL match days at Motera"] },
    { title: "Peak summer", moves: ["Sports Utsav (200,000 national footfall goal)", "Swimming is Pune's sport of the month", "Summer holidays: travel, kids' bikes, family sport", "IPL final, Sun 30 May: watch party at Motera", "Maharashtra Day, Sat 1 May"] },
    { title: "Yoga, rides and the monsoon", moves: ["Yoga Day, Mon 21 Jun, after 21 days of yoga (10,000 national goal)", "Global Running Day, Wed 2 Jun; World Bicycle Day, Thu 3 Jun", "Monsoon treks and rainwear; back to school", "Circular Bazaar", "Swim galas and pickleball cup finals"] }
  ]
};
