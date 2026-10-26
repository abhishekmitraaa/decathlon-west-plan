/* Social content calendar for Decathlon Pune, Gujarat and MP pages: 26 Oct 2026 to 31 Mar 2027.
   Every post is tied to a date, campaign or sport from the Q4 plan, the Surat opening plan,
   the Pune Marcom calendar or the regional holiday list. It is a proposed plan: hooks and
   creator briefs are suggestions for the content team.
   Entry: [day, format, pillar, title, campaign, sport, region, hook, why, creator]
   Pillars: E emotional, F fun & engagement, L learn, C community & events, P product & offers. */
window.CONTENT = {
  pillars: {
    E: { name: "Emotional", feel: "Pride, nostalgia, belonging", target: 20, col: "#C03F9C" },
    F: { name: "Fun & engagement", feel: "Laughter, play, sharing", target: 20, col: "#2BFF88" },
    L: { name: "Learn", feel: "Confidence, trust", target: 15, col: "#00C4E1" },
    C: { name: "Community & events", feel: "Belonging, FOMO", target: 25, col: "#6C3DB1" },
    P: { name: "Product & offers", feel: "Desire, urgency", target: 20, col: "#1932C1" }
  },
  months: [
    { y: 2026, m: 9, label: "October", from: 26, theme: "Diwali sale and Kids Festival", sport: "Running",
      cta: "Bring the family this weekend",
      posts: [
        [27, "Reel", "P", "Diwali sale teaser: 4 days to go", "Diwali sale (31 Oct - 1 Nov)", "Multi-sport", "All", "Wishlist now. Thank us on the 31st.", "Diwali sale target is 5.5 Cr, up 17% on last year. A short teaser builds the wishlist before the weekend."],
        [29, "Reel", "C", "Kids Festival invite", "Kids Festival (31 Oct - 2 Nov)", "Kids", "All", "No screens this weekend. Only play.", "Kids Festival runs three days; the invite goes out two days before so families can plan.", "Parent creator in each state"],
        [30, "Story", "F", "Poll: which sport should your kid try first?", "Kids Festival", "Kids", "All", "Skating, football or swimming? Vote.", "A low-effort poll that primes parents for the weekend and tells us which zones to staff."],
        [31, "Reel", "C", "Sports Utsav Junior: skating workshop live", "Sports Utsav Junior", "Skating", "All", "First wobble. First glide. Same morning.", "The skating workshop runs 11 AM - 2 PM on 31 Oct. Real kids on skates is the most shareable content of the weekend."],
        [31, "Carousel", "P", "Diwali sale is live", "Diwali sale", "Multi-sport", "All", "Best value for sport, two days only.", "Opens the 31 Oct - 1 Nov sale with the top gifts and price points."]
      ] },
    { y: 2026, m: 10, label: "November", theme: "Gift a Sport, chase the mountains", sport: "Climbing and trekking",
      cta: "Gift a sport this Diwali",
      posts: [
        [1, "Reel", "C", "Kids Festival recap", "Kids Festival", "Kids", "All", "This is what a weekend without screens looks like.", "Recap on the busiest day of the festival pulls families in for day 3."],
        [2, "Carousel", "L", "Your first winter trek: 10 things to pack", "Winter Travel (15 Oct - 30 Jan)", "Trekking", "All", "Save this before you book.", "November's sport is climbing and trekking, and 48% of winter turnover lands in Q4."],
        [4, "Reel", "C", "Trek route video: Sinhagad at sunrise", "Winter Travel", "Trekking", "Pune", "One fort. One bag. Back before breakfast.", "Part of the 20 trek route videos in the winter plan (1.5 Mn views target).", "Pune trek creator"],
        [5, "Carousel", "P", "Gift a Sport: gifts under ₹999", "Diwali: Gift a Sport", "Multi-sport", "All", "Sorted your Diwali gifts? We did.", "Gifting edits drive the November turnover; under ₹999 is the easiest yes."],
        [6, "Reel", "E", "The first cycle you ever got", "Diwali: Gift a Sport", "Cycling", "All", "Remember who gave you your first cycle?", "Gifting works on emotion, not price. Surat goes quiet from 6 Nov for Diwali, so this is a brand post, not a sale."],
        [7, "Story", "F", "This or that: which gift would you rather get?", "Diwali: Gift a Sport", "Multi-sport", "All", "Tap to pick.", "Easy engagement on a festive Saturday; answers shape the next gifting reel."],
        [8, "Static", "E", "Happy Diwali from 13 stores", "Diwali (8 Nov)", "-", "All", "From all of us in blue, to all of you.", "Diwali day: no hard sell, just the team."],
        [10, "Reel", "C", "30 days in my trek shoes", "Winter Travel", "Trekking", "Gujarat", "I wore them up Saputara. Here's what happened.", "One of 10 footwear UGC videos in the winter plan (1 Mn views target).", "Gujarat creator (footwear UGC)"],
        [12, "Reel", "L", "How to layer for a Himalayan trek", "Winter Travel", "Trekking", "All", "Three layers. Zero shivering.", "Teaches the base, mid and shell layer system; leads straight to the winter window in store."],
        [14, "Reel", "C", "Children's Day: colouring books are in", "Back to school (14 Nov)", "Kids", "All", "Colour it. Bring it. Win it.", "The back-to-school activation: kids bring the finished colouring page to a store for a reward. Every page is a family walk-in."],
        [15, "Reel", "F", "Kids vs parents: obstacle course race", "Children's Day", "Kids", "Pune", "Who's faster? The comments decide.", "Fun, family and shareable; keeps the Children's Day story going over the weekend."],
        [17, "Reel", "E", "Sport for every kid: our CSR work", "Decathlon CSR initiatives (Nov)", "Kids", "All", "Some kids get their first ball from us.", "November is CSR month in the campaign calendar; purpose content earns trust."],
        [18, "Reel", "C", "Saputara weekend kit", "Winter Travel · MH500 backpack (Nov)", "Trekking", "Gujarat", "Everything for Saputara fits in one bag.", "The MH500 backpack focus is in November; Gujarat's trekking season is October to February.", "Gujarat creator wave"],
        [19, "Carousel", "L", "Packing the MH500: one bag, one weekend", "MH500 backpack (Nov)", "Trekking", "All", "Packing hack you'll actually use.", "Product education for the month's hero backpack."],
        [20, "Story", "F", "Guess the trek from the emoji", "Winter Travel", "Trekking", "All", "🏰⛰️🌅 = ?", "Light engagement that keeps trekking top of mind between bigger posts."],
        [23, "Reel", "C", "Adajan, the date is out: 27 December", "Surat opening: events and community (23 Nov - 26 Dec)", "Multi-sport", "Surat", "Chalo Ramiye, Adajan! 27 December.", "Surat is back from Diwali by 23 Nov, which is why the plan holds the reveal until then."],
        [25, "Reel", "P", "Black Friday countdown: 2 days", "Black Friday (27-30 Nov)", "Multi-sport", "All", "Make the list. We'll handle the prices.", "Black Friday is a 12 Cr weekend target, up 22% on last year."],
        [26, "Reel", "P", "Black Friday haul preview", "Black Friday", "Multi-sport", "MP", "Here's what's going in my cart on Friday.", "Creator previews make the sale feel personal; MP's 40 influencers carry it.", "MP creator wave"],
        [27, "Carousel", "P", "Black Friday is live: best value for sport", "Black Friday", "Multi-sport", "All", "It's on. Best value for sport.", "Launch post for the biggest Q4 weekend after the year-end sale; stories every few hours after it."],
        [28, "Reel", "C", "HYROX weekend: train like a racer", "HYROX (27-29 Nov)", "Fitness", "All", "8 stations. 8 km. Are you in?", "HYROX lands on Black Friday weekend; fitness racers are high-intent shoppers."],
        [29, "Reel", "E", "Adani Marathon: finisher stories", "Adani Marathon (29 Nov)", "Running", "Gujarat", "You inspired me to start.", "Ahmedabad's marathon. Finisher stories are the line we want people to say back to us."],
        [30, "Story", "P", "Black Friday: last day", "Black Friday", "Multi-sport", "All", "Last call. Midnight.", "Urgency on the final day of the 12 Cr weekend."]
      ] },
    { y: 2026, m: 11, label: "December", theme: "Trek, travel and a new home in Surat", sport: "Trekking",
      cta: "Chalo Ramiye, Adajan!",
      posts: [
        [1, "Carousel", "L", "Manali kit vs Europe kit", "Winter Travel", "Trekking", "All", "Two trips. Two kits. One checklist.", "Matches the Manali and Europe kit bundles in the Surat plan; December is the winter-trip shopping month."],
        [3, "Reel", "C", "Trek route video: winter sunrise", "Winter Travel", "Trekking", "MP", "Sunrise from the top. Worth the 5 AM alarm.", "Continues the trek route series in MP.", "MP trek creator"],
        [5, "Reel", "F", "Pack with me: winter trek edition", "Winter Travel", "Trekking", "All", "Packing for 3 days in 30 seconds.", "A trend format that turns the winter checklist into entertainment."],
        [16, "Reel", "E", "Adajan, meet your team", "Surat opening", "Multi-sport", "Surat", "These are the people who'll help you play.", "Humanises the new store before the countdown starts."],
        [17, "Story", "C", "10 Divas, 10 Ramat: countdown begins", "Surat countdown (17-26 Dec)", "Multi-sport", "Surat", "10 days. 10 sports.", "Phase 3 of the opening plan: one sport a day until opening."],
        [10, "Carousel", "P", "Christmas gifts for runners and footballers", "Christmas: Gift a Sport", "Running · Football", "All", "Gifts they'll actually use.", "Christmas gifting edit; sets up the 19-31 Dec Christmas sale."],
        [19, "Reel", "F", "Surat treasure hunt: the first clue", "Surat treasure hunt", "Multi-sport", "Surat", "Find the clues. Win the city.", "600 players, final clue in the store on opening day."],
        [20, "Reel", "C", "Happy Streets on LP Savani", "Happy Streets #1", "Multi-sport", "Surat", "A street. No cars. All play.", "Car-free Sunday morning next to the store, a week before the launch."],
        [24, "Reel", "C", "Creators' preview of the Adajan store", "Surat countdown", "Multi-sport", "Surat", "First look inside. You're not ready.", "Creator preview is part of phase 3 of the opening plan.", "Surat city creators"],
        [26, "Reel", "E", "Surat is famous for its food. Now Adajan for its play.", "Surat opening", "Multi-sport", "Surat", "Surat nu jaman, have Adajan ni ramat.", "The opening theme line, one day before doors open."],
        [27, "Live", "C", "Pehli Ramat: Adajan grand launch", "Surat grand launch (27 Dec)", "Multi-sport", "Surat", "Doors open. Shoes on.", "Launch day: inauguration with Surat athletes and the sports carnival."],
        [28, "Reel", "C", "Adajan Night Carnival", "Surat launch week", "Multi-sport", "Surat", "Box cricket under lights. Come.", "Night carnival the day after launch; Surat loves going out at night."],
        [19, "Carousel", "P", "Christmas sale is on", "Christmas sale (19-31 Dec)", "Multi-sport", "All", "Gift a sport. Save on the season.", "Opens the 19-31 Dec Christmas sale across the cluster."],
        [27, "Reel", "C", "Tapi Sunrise Run + sports carnival", "Surat grand launch (27 Dec)", "Running · Yoga", "Surat", "600 runners. One sunrise.", "Sunday sunrise run with yoga, then a 15-zone carnival on the forecourt."],
        [22, "Carousel", "L", "Last-minute gift guide by sport", "Christmas: Gift a Sport", "Multi-sport", "All", "Still shopping? Find their sport.", "Helps late shoppers in the last Christmas week."],
        [31, "Reel", "C", "New Year's Eve run from Adajan", "Surat: Ramat chalu rahe", "Running", "Surat", "Last run of 2026 starts at the new store.", "The New Year run in the Surat plan keeps launch week busy."],
        [25, "Static", "E", "Merry Christmas: Gift a Sport", "Christmas", "-", "All", "The best gifts get used.", "Christmas day: warm brand moment."],
        [27, "Reel", "E", "My 2026 in sport", "Year end", "Multi-sport", "Pune", "This year I said yes to every sport.", "Pune's lead creator closes the year with a personal story.", "Pune lead creator"],
        [29, "Reel", "F", "Your 2026 sport, wrapped", "Year end", "Multi-sport", "All", "Comment your sport of 2026.", "A wrapped-style engagement post that people share."],
        [31, "Reel", "E", "13 stores. One West. Thank you.", "Year end", "Multi-sport", "All", "From Wakad to Gwalior: thank you.", "Year-in-review reel to end on gratitude."]
      ] },
    { y: 2027, m: 0, label: "January", theme: "New Year, New Moves", sport: "Fitness",
      cta: "Start your sport",
      posts: [
        [1, "Reel", "E", "New Year, New Moves: what will you start?", "New Year, New Moves", "Fitness", "All", "This is your sign to start.", "January's Pune banner is 'Start your sport'; Fitness: Movement for All is the national theme."],
        [2, "Story", "F", "Pick your 2027 sport", "New Year, New Moves", "Multi-sport", "All", "One sport. Twelve months. Pick it.", "A resolution poll that feeds the starter-kit post."],
        [10, "Reel", "C", "Happy Streets #2, Adajan", "Surat: Happy Streets #2", "Multi-sport", "Surat", "Round two. Bigger street.", "Second car-free Sunday keeps the new store in the habit."],
        [5, "Carousel", "L", "Starter kits: run, gym, yoga with a 30-day plan", "New Year starter kits", "Fitness · Running · Yoga", "All", "Day 1 to day 30, sorted.", "Starter kits with a plan card are the bridge from resolution to purchase."],
        [7, "Reel", "C", "30 days of New Moves: day 1", "New Year, New Moves", "Fitness", "Pune", "Day 1. Follow along.", "A creator series that runs all month and pulls people into the run clubs.", "Pune fitness creator"],
        [9, "Reel", "C", "SGS football event", "Pune community events", "Football", "Pune", "Saturday football at SGS. Bring a friend.", "On the Pune calendar for 9 Jan."],
        [10, "Reel", "C", "Wakad badminton event", "Pune community events", "Badminton", "Pune", "Smash your Sunday.", "On the Pune calendar for 10 Jan."],
        [11, "Reel", "P", "Kai Po Che! terrace kit", "Uttarayan (14-15 Jan)", "Kite season", "Gujarat", "Caps, shades, chairs. Terrace ready.", "Gujarat shops for the terrace before Uttarayan; the Surat plan runs terrace-kit days 11-13 Jan."],
        [12, "Reel", "C", "SGS running event", "Pune community events", "Running", "Pune", "Run Pune. Start at SGS.", "On the Pune calendar for 12 Jan."],
        [13, "Reel", "F", "Uttarayan: who holds the kite longest?", "Uttarayan", "Kite season", "Gujarat", "Kai po che! Tag your terrace team.", "Fun, festive and very Gujarat."],
        [14, "Static", "E", "Happy Uttarayan and Makar Sankranti", "Uttarayan", "-", "All", "Higher every year.", "Festival greeting; the city is on its terraces, so no selling."],
        [24, "Reel", "C", "Adajan Bumper Draw: Rockrider winner", "Surat: Bumper Draw (24 Jan)", "Cycling", "Surat", "Your bill. Our gift.", "Grand-prize draw closes the first 30 days after the 27 Dec launch."],
        [18, "Reel", "C", "Movement for All in Indore", "Fitness: Movement for All", "Fitness", "MP", "Indore moves. Do you?", "MP creator wave on the national fitness theme.", "MP creator wave"],
        [20, "Carousel", "P", "Republic Day sale starts: Made in India picks", "Republic Day sale (20-26 Jan)", "Multi-sport", "All", "Made in India. Played everywhere.", "Opens the Republic Day sale with Made in India products."],
        [22, "Reel", "L", "Where your gear is made", "Republic Day: Made in India", "Multi-sport", "All", "This ball was made closer than you think.", "Builds trust in the Made in India range during the sale."],
        [24, "Reel", "F", "Tricolour challenge", "Republic Day", "Multi-sport", "All", "Saffron, white, green: show us your kit.", "A UGC challenge for the Republic Day weekend."],
        [26, "Reel", "E", "Republic Day: we play for India", "Republic Day", "Multi-sport", "All", "Every game is a little bit patriotic.", "Republic Day emotional moment."],
        [28, "Reel", "E", "Why I started running", "Lead-in to Women's Sport Month", "Running", "Pune", "I ran 1 km and cried. Now I run 10.", "Sets up February's women-in-sport month.", "Pune women creator"],
        [30, "Reel", "C", "January in numbers: New Moves", "New Year, New Moves", "Fitness", "All", "You moved. Here's proof.", "Community recap to close the month."]
      ] },
    { y: 2027, m: 1, label: "February", theme: "Move Together", sport: "Camping",
      cta: "Move together",
      posts: [
        [1, "Reel", "P", "New arrivals: shoes drop 1", "New arrivals: shoes 1 (Feb)", "Running", "All", "New shoes. Same old you, but faster.", "February starts the first shoe drop of 2027."],
        [3, "Carousel", "L", "Your first camping trip checklist", "Camping, sport of the month", "Camping", "All", "Night one, sorted.", "February is camping month on the Pune calendar."],
        [5, "Reel", "F", "Camping date night", "Valentine's week (7-14 Feb)", "Camping", "Gujarat", "Forget dinner. Pitch a tent.", "Couple creators make camping a Valentine's plan.", "Gujarat couple creators"],
        [7, "Reel", "F", "Who's your sport partner?", "Valentine's week", "Multi-sport", "All", "Tag the one who never skips leg day with you.", "A tag-a-friend post that spreads organically."],
        [9, "Reel", "E", "Move Together: women who play", "Women's Sport Month (Pune)", "Multi-sport", "Pune", "She didn't wait for permission.", "February's Pune banner is 'Move together, women's sport month'. Women's business is growing 11%."],
        [11, "Reel", "C", "Women's fitness session at NIBM", "Women's Sport Month", "Fitness", "Pune", "Your first class is on us.", "NIBM's February gym partner focus is women's fitness."],
        [13, "Story", "F", "Rate the date: trek or beach?", "Valentine's week", "Trekking · Beach", "All", "Vote and send it to them.", "Light weekend engagement."],
        [14, "Static", "E", "Love what you play", "Valentine's Day", "-", "All", "Some loves last longer.", "Valentine's Day brand moment."],
        [16, "Reel", "E", "She plays: MP's women athletes", "Women's Sport Month", "Multi-sport", "MP", "Gwalior to Indore, she's playing.", "Women creators across MP keep the theme going outside Pune.", "MP women creators"],
        [19, "Reel", "E", "Shivaji Maharaj Jayanti: the fort trek", "Shivaji Maharaj Jayanti (19 Feb)", "Trekking", "Pune", "Climb where history walked.", "Pune long weekend; fort treks are Pune's pride."],
        [21, "Reel", "C", "Beach Fest, Surat", "Beach Day · Beach Fest (Q1, date to confirm)", "Beach sports", "Surat", "Sand, sun and 5,000 players.", "Beach Fest targets 5,000 participants in Q1; Beach Day is February's event IP."],
        [22, "Reel", "L", "Pitch a tent in 2 seconds", "Camping, sport of the month", "Camping", "All", "Blink and it's up.", "Product demo that's also a how-to."],
        [24, "Carousel", "P", "February sale: best of the month", "Sale campaign (Feb)", "Multi-sport", "All", "Best value for sport, this week only.", "February's sale campaign from the Q1 calendar."],
        [26, "Reel", "C", "New shoes, first 5K", "New arrivals: shoes 1", "Running", "Gujarat", "Out of the box, onto the road.", "Footwear UGC for the new drop.", "Gujarat runner creator"],
        [28, "Reel", "F", "February bloopers from our stores", "Brand", "-", "All", "We tried. We fell. We laughed.", "Teammate bloopers humanise the stores."]
      ] },
    { y: 2027, m: 2, label: "March", theme: "Find Your Sport", sport: "Pickleball",
      cta: "Find your sport",
      posts: [
        [1, "Reel", "E", "Her first race", "Women's Day (1-8 Mar)", "Running", "All", "She almost didn't sign up.", "Women's Day week opens with a first-timer's story."],
        [3, "Reel", "E", "Women's Day: why we play", "Women's Day", "Multi-sport", "All", "Ask her why she plays.", "Women creators across all three states.", "Women creators, all states"],
        [5, "Carousel", "L", "Pickleball 101", "Pickleball, sport of the month", "Pickleball", "All", "Easiest sport you'll ever start.", "Pickleball is growing fastest in Gujarat: +175% at Motera, +108% at Dumas."],
        [6, "Reel", "C", "Pickleball open play at Amanora", "Pickleball, sport of the month", "Pickleball", "Pune", "Paddles provided. Bring a friend.", "Amanora's March academy focus is pickleball."],
        [8, "Static", "E", "Happy Women's Day", "Women's Day", "-", "All", "Here's to every woman who plays.", "Women's Day greeting."],
        [10, "Static", "E", "Eid Mubarak", "Id-ul-Fitr (10 Mar)", "-", "All", "Wishing you joy, together.", "Festival greeting across all three states."],
        [12, "Reel", "P", "Kiprun Challenger launch, ₹9,999", "Kiprun Challenger launch (Mar-May)", "Running", "All", "Built for your next PB.", "The quarter's product launch."],
        [14, "Reel", "F", "IPL is here: gully cricket gear check", "IPL 2027 (from 14 Mar)", "Cricket", "All", "Gully ready? Show us your kit.", "IPL starts 14 Mar; cricket fever across the cluster."],
        [16, "Reel", "C", "Box cricket night league", "IPL season", "Cricket", "Gujarat", "Lights on. Bat up.", "Night leagues ride the IPL wave.", "Gujarat cricket creator"],
        [18, "Reel", "L", "Holi-proof your shoes", "Holi (15-22 Mar)", "Running", "All", "Colours off in 2 minutes.", "Useful and seasonal; Holi week is coming."],
        [20, "Reel", "F", "Holi colour run", "Holi", "Running", "All", "Run. Get colourful. Repeat.", "Festive fun the weekend before Holi."],
        [22, "Static", "E", "Happy Holi", "Holi (22 Mar)", "-", "All", "Play with colour. Play with us.", "Holi greeting; long weekend in all three states."],
        [24, "Carousel", "P", "Clearance sale", "Clearance (Mar)", "Multi-sport", "All", "Last pieces. Lowest prices.", "March clearance from the Q1 calendar."],
        [26, "Reel", "C", "Summer launch: long weekend at the stores", "Summer launch", "Swimming · Cricket", "All", "Summer starts now.", "Good Friday long weekend; summer season begins 1 March."],
        [29, "Reel", "C", "Summer camp sign-ups", "Summer camp (Apr-May)", "Kids", "All", "Book their summer before it books itself.", "Parent creators open summer camp sign-ups.", "Parent creators"],
        [31, "Reel", "F", "Q1 wrapped", "Brand", "Multi-sport", "All", "Three months. Here's what you played.", "Fun recap to close Q1."]
      ] }
  ]
};

/* How we write: three rules borrowed from Piyush Pandey's work (Fevicol, Cadbury, Asian Paints). */
window.CONTENT.rules = [
  { n: "Prove it. Never explain it.",
    lift: "Fevicol never said 'strong glue'. It showed an egg a hammer couldn't break.",
    us: "We never say 'durable' or 'great value'. We show a tent going up in two seconds while a baraat dances past, or a shoe still running after a year of Pune potholes. Stage the impossible; let the benefit become obvious." },
  { n: "Never manufacture emotion. Borrow the occasion.",
    lift: "Cadbury rode the cricket win India was already crazy about. Asian Paints rode Diwali homecomings.",
    us: "Our feelings are already on the calendar: Diwali homecoming, Uttarayan terraces, Shivaji Maharaj Jayanti treks, IPL in every gully, Holi, a kid's first race. We plug the story into a feeling people already have." },
  { n: "The brand resolves the story. It doesn't narrate it.",
    lift: "In Asian Paints ads the family is the hero. Fevicol shows up in the last five seconds.",
    us: "The kid, the mother, the gully team are the protagonists. Decathlon arrives at the end as the thing that made it possible: a bib, a ball, a store door opening. Never a product monologue." }
];

/* One hero film per month, written to the three rules. */
window.CONTENT.heroes = {
  October: { name: "The quietest Diwali holiday", occasion: "Diwali holidays and the Kids Festival",
    story: "A grandmother complains that the grandkids have been glued to phones all Diwali break.",
    proof: "The whole society's Wi-Fi goes down on Saturday. Not one kid notices: they're all at the Kids Festival on skates, scooters and a football pitch.",
    resolve: "Last five seconds: the Decathlon playground at dusk. “No screens this weekend. Only play.”" },
  November: { name: "Pehli cycle", occasion: "Diwali homecoming",
    story: "A father in Ahmedabad still keeps the rusty cycle his own father gave him, polished every Diwali. His son comes home with a long box.",
    proof: "Three generations, one bell. The old cycle still rings.",
    resolve: "The box opens to a new Rockrider with a bow, for the grandson. Card: “Gift a Sport.”" },
  December: { name: "Surat nu jaman, Adajan ni ramat", occasion: "Surat's love of food, and a new store",
    story: "A Surti family plans a whole Sunday around food: locho at 9, undhiyu at 1, ghari for dessert.",
    proof: "By evening nobody can stand up. Grandpa, 72, challenges all of them to the Tapi Sunrise Run, and beats them.",
    resolve: "Final shot: the Adajan store doors opening. “Surat is famous for its food. Now Adajan for its play.”" },
  January: { name: "The terrace war", occasion: "Uttarayan",
    story: "Two neighbouring terraces, a decade-long kite rivalry, and one aunty who has never lost.",
    proof: "Wind, sun and a 9-hour sky battle: her cap never flies off, her shades never slip, her chair never wobbles.",
    resolve: "She cuts the last kite and calmly opens her cooler bag. Five-second end card: the Kai Po Che! terrace kit." },
  February: { name: "She ran for the bus", occasion: "Women's Sport Month",
    story: "Every morning a Pune mother sprints to catch her daughter's school bus with the tiffin.",
    proof: "The neighbourhood starts timing her. She's faster every week.",
    resolve: "The daughter hands her a race bib. Last frame: both at the start line, “Move together.”" },
  March: { name: "Sharma aunty's window", occasion: "IPL season",
    story: "One gully team has broken the same window for ten years. Sharma aunty has a drawer full of confiscated balls.",
    proof: "This season the ball is smashed so far it clears the whole building. For once, the window survives.",
    resolve: "Aunty walks out with a bat and asks to bat first. End card: “Gully ready? Kit up.”" }
};

/* Creative Commons photo credits (Wikimedia Commons and Flickr via Openverse). */
window.CONTENT.credits = {
 "holi": {
  "title": "Holi - The festival of Colours",
  "creator": "Sundarhum",
  "license": "CC BY-SA 4.0",
  "link": "https://commons.wikimedia.org/wiki/File:Holi_-_The_festival_of_Colours.jpg"
 },
 "diwali": {
  "title": "Diwali Diya 4",
  "creator": "Slyronit",
  "license": "CC BY-SA 4.0",
  "link": "https://commons.wikimedia.org/wiki/File:Diwali_Diya_4.jpg"
 },
 "kids": {
  "title": "Football in India",
  "creator": "Qirille",
  "license": "CC BY-SA 4.0",
  "link": "https://commons.wikimedia.org/wiki/File:Football_in_India.jpg"
 },
 "kite": {
  "title": "Kite Festival Uttarayan in Gujarat",
  "creator": "Gopalkhetani",
  "license": "CC BY-SA 4.0",
  "link": "https://commons.wikimedia.org/wiki/File:Kite_Festival_Uttarayan_in_Gujarat.jpg"
 },
 "marathon": {
  "title": "2008 Pune Marathon runners",
  "creator": "Kushal Das from Pune, India",
  "license": "CC BY 2.0",
  "link": "https://commons.wikimedia.org/wiki/File:2008_Pune_Marathon_runners.jpg"
 },
 "newyear": {
  "title": "2025 New Year Fireworks in Tamsui, New Taipei (54238509582)",
  "creator": "Artemas Liu",
  "license": "CC BY-SA 2.0",
  "link": "https://commons.wikimedia.org/wiki/File:2025_New_Year_Fireworks_in_Tamsui,_New_Taipei_(54238509582).jpg"
 },
 "pickleball": {
  "title": "Pickleball Paddle 2025",
  "creator": "Fakhar Saeed",
  "license": "CC0",
  "link": "https://commons.wikimedia.org/wiki/File:Pickleball_Paddle_2025.jpg"
 },
 "fitness": {
  "title": "92nd Military Police Company Crossfit Competition (8770089)",
  "creator": "U.S. Army photo by Spc. Samuel Signor",
  "license": "Public domain",
  "link": "https://commons.wikimedia.org/wiki/File:92nd_Military_Police_Company_Crossfit_Competition_(8770089).jpg"
 },
 "cycling": {
  "title": "CH.ZH.Affoltern-am-Albis 2024-03-30 road-bike-racing",
  "creator": "Roy Egloff",
  "license": "CC BY-SA 4.0",
  "link": "https://commons.wikimedia.org/wiki/File:CH.ZH.Affoltern-am-Albis_2024-03-30_road-bike-racing.jpg"
 },
 "christmas": {
  "title": "Oxford Street Christmas Lights - geograph.org.uk - 1661010",
  "creator": "Christine Matthews",
  "license": "CC BY-SA 2.0",
  "link": "https://commons.wikimedia.org/wiki/File:Oxford_Street_Christmas_Lights_-_geograph.org.uk_-_1661010.jpg"
 },
 "beach": {
  "title": "USMC-111007-M-UV915-234",
  "creator": "Unknown",
  "license": "Public domain",
  "link": "https://commons.wikimedia.org/wiki/File:USMC-111007-M-UV915-234.jpg"
 },
 "badminton": {
  "title": "UKM BADMINTON UM",
  "creator": "UNIVERSITAS MULIA",
  "license": "CC BY-SA 4.0",
  "link": "https://commons.wikimedia.org/wiki/File:UKM_BADMINTON_UM.jpg"
 },
 "flag": {
  "title": "The waving Indian flag",
  "creator": "Sisheer Philip",
  "license": "CC BY-SA 4.0",
  "link": "https://commons.wikimedia.org/wiki/File:The_waving_Indian_flag.jpg"
 },
 "cricket": {
  "title": "Sachin in action",
  "creator": "Privatemusings",
  "license": "CC BY-SA 4.0",
  "link": "https://commons.wikimedia.org/wiki/File:Sachin_in_action.jpg"
 },
 "trek-snow": {
  "title": "SarPass...",
  "creator": "Chandramohan Burly V",
  "license": "CC BY-SA 2.0",
  "link": "https://www.flickr.com/photos/66001271@N00/3856252950"
 },
 "trek-green": {
  "title": "Kudremukh, Shola Grasslands.",
  "creator": "wildxplorer",
  "license": "CC BY 2.0",
  "link": "https://www.flickr.com/photos/21932201@N04/2635903608"
 },
 "shoes": {
  "title": "Shoes for sale",
  "creator": "kewl",
  "license": "CC BY 2.0",
  "link": "https://www.flickr.com/photos/58411470@N00/13902057323"
 },
 "camping": {
  "title": "Stars Over Everest 2",
  "creator": "SamHawleywood",
  "license": "CC BY 2.0",
  "link": "https://www.flickr.com/photos/73216620@N08/6615779401"
 },
 "football": {
  "title": "Kids Playing 1",
  "creator": "LabyrinthX-2",
  "license": "CC BY-SA 2.0",
  "link": "https://www.flickr.com/photos/58317401@N04/8044813365"
 }
};
