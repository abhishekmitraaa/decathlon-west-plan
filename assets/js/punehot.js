/* Pune hotspots: store catchments, and the pools, gyms, travel agencies and societies in them (user ask, 10 Nov 2026: "normal data, not very in depth").
   City numbers: public sources, web-checked 10 Nov 2026 (see src). Catchment areas and hotspots: our general knowledge of Pune, to check with the store teams.
   Tied up: computed from AOP_NAMES (Pune_Partnerhsips__Coaches_affiliation_.xlsx, sheet Partnerships). Targets: the Pune spend plan ("at least 10 swimming
   academies in each catchment by 20 Feb 2027") and the Q4 deck (Winter + Travel: 50 travel agencies as affiliates). No per-store counts of gyms, pools,
   agencies or societies exist in our files: we do not invent them. */
window.PUNE_HOT = {
  city: [
    { k: "pool", n: "Swimming pools", v: "35 + 13", s: "PMC runs 35 pools (11 shut for repairs or a dispute, Mar 2026); PCMC runs 13 to 14. Private academies, club and society pools come on top.", src: "Punekar News, Free Press Journal (2025-2026)" },
    { k: "gym", n: "Gyms", v: "1,200+", s: "Gyms and fitness centres across PMC and Pimpri-Chinchwad (directory count, approximate).", src: "Gym Navigator directory" },
    { k: "soc", n: "Housing societies", v: "20,655", s: "Registered co-operative housing societies in Pune (March 2023, official data); many more buildings are not registered.", src: "Co-operative department figure via Indian Cooperative / Punekar News" },
    { k: "trav", n: "Travel agencies", v: "about 889", s: "Tour agencies listed in Pune (business directory, Aug 2025; an upper bound with duplicates).", src: "poidata.io directory" }
  ],
  tap: {
    pool: "Learn to swim with Decathlon: coach and academy tie-ups, a kit wall with a QR at the pool, a free goggle with a full set (water plan). Target: at least 10 swimming academies in every catchment by 20 Feb 2027.",
    gym: "Movement for All in January: partner gym, Zumba and yoga sessions (₹1.5 L, 500 walk-ins in the Pune plan); member offers and AOP branding at the gym.",
    trav: "Affiliates for Winter & Travel and summer treks: an agency code, our packing list in every booking, a trek kit edit. The Q4 deck's target is 50 agencies for the city, about 10 a store.",
    soc: "Weekend society events (Workshop Mela in 10 apartments in the Q1 plan), society WhatsApp groups, and learn-to-swim in society pools: NIBM's Ganga Dhaam Society Pool is already a partner."
  },
  // travel agencies as AOPs: who they are, what they have, what we offer, what we get (our exploration, user ask 10 Nov 2026)
  travel: {
    kinds: [
      { h: "Trek and adventure organisers", w: "Weekend Sahyadri treks, night treks, Himalayan departures", have: "Groups every weekend, a fixed gear list sent before every trek, trek leaders people trust" },
      { h: "Holiday and tour agencies", w: "Family holidays, snow trips to Kashmir, Manali, Sikkim in winter", have: "Customers who have booked and still need jackets, thermals and shoes" },
      { h: "Corporate offsite organisers", w: "IT teams in Hinjewadi, Kharadi, Magarpatta", have: "Team outings with a budget: T-shirts, bags, team kits (B2B)" },
      { h: "School and college trip operators", w: "Study tours and camps", have: "Students and parents with a packing list: links to the schools plan" }
    ],
    give: ["Their gear list on our page, with a QR to the kit in store or online", "A code for their customers (and a commission or kit credit for the agency)", "A pre-trek briefing or meetup at the store, with a try-on", "Their leaders as ambassadors: kit, content on our city pages"],
    get: ["Customers at the moment they buy: days before the trip", "Groups, not one-by-one: one agency, many buyers", "Repeat every season: winter, summer, monsoon treks", "Content: real trips in our kit for Winter, Trek & Travel and summer"],
    ask: "Start with 2 agencies per store in December (Winter, Trek & Travel, 1 to 15 Dec), then 10 per store by the summer: the Q4 deck's target is 50 for the city."
  },
  stores: [
    { s: "Wakad", areas: ["Wakad", "Hinjewadi", "Baner", "Balewadi", "Pimple Saudagar", "Ravet", "Punawale", "Tathawade"],
      hot: ["Hinjewadi IT Park, Phases 1 to 3: Pune's biggest IT hub", "Balewadi sports complex", "High-rise societies on the Wakad-Hinjewadi road", "Pimpri-Chinchwad: the PCMC pools"],
      angle: "IT professionals and young families: before-work runs, gym, weekend treks to Mulshi and Lonavala." },
    { s: "Wagholi", areas: ["Wagholi", "Kharadi", "Viman Nagar", "Lohegaon", "Keshav Nagar", "Chandan Nagar"],
      hot: ["EON IT Park and WTC Kharadi", "Pune airport, Lohegaon: travel agencies around Viman Nagar", "New township societies in Wagholi and Kharadi"],
      angle: "New homes, new families, new joiners in IT: the fastest-growing catchment. Travel sits next door to the airport." },
    { s: "SGS Mall", areas: ["Camp", "Koregaon Park", "Swargate", "Shivajinagar", "Deccan", "Pune station"],
      hot: ["Old city and Camp: schools, colleges, clubs", "Koregaon Park: cafes, studios, gyms", "Swargate: Nilu Phule pool already a partner"],
      angle: "The old city: students, clubs and families who have shopped here for years. Team sports and turfs lead." },
    { s: "Amanora", areas: ["Hadapsar", "Magarpatta", "Amanora Park Town", "Manjri", "Mundhwa", "Keshav Nagar"],
      hot: ["Magarpatta City and SP Infocity: IT", "Amanora Park Town township", "Mundhwa and Manjri: new turfs, courts and pools"],
      angle: "Townships with their own clubhouses and pools: the most pools already tied up (7)." },
    { s: "NIBM", areas: ["NIBM Road", "Kondhwa", "Undri", "Wanowrie", "Mohammedwadi", "Salunke Vihar"],
      hot: ["Gated societies on NIBM Road and Undri", "Wanowrie and Mohammedwadi: a gym cluster", "Society pools (Ganga Dhaam)"],
      angle: "Gated societies and gyms: the most gyms already tied up (13). Families, seniors, weekend sport." }
  ]
};

(() => {
  const H = window.PUNE_HOT, AN = window.AOP_NAMES || {};
  const esc = s => String(s).replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
  const cat = s => /swim/i.test(s) ? "pool" : /gym|fit|yoga|zumba|physio|phyiso|cross|rehab/i.test(s) ? "gym" : /badm|batmi|pickle|padel|paddle|tennis|racket/i.test(s) ? "racket" : /foot|cricket|turf|basket/i.test(s) ? "team" : "other";
  // partnership status from the timeline as written in the sheet
  const status = t => {
    t = String(t || "");
    if (!t.trim()) return ["nd", "no date in the sheet"];
    if (/pending/i.test(t)) return ["pend", "MOU pending"];
    if (/^from/i.test(t)) return ["new", t.replace(/^from/i, "starts")];
    if (/in loop/i.test(t)) return ["pend", "in the loop"];
    if (/eoy 2025|mid 2026/i.test(t)) return ["live", "live since " + t.toLowerCase()];
    const end = t.split(/\s-\s|-|\bto\b/i).pop(), y4 = end.match(/20\d\d/), y2 = end.match(/\b(\d\d)\s*$/);
    const y = y4 ? +y4[0] : y2 ? 2000 + +y2[1] : 0;
    if (y >= 2027) return ["live", "live into 2027"];
    return ["renew", "ends in 2026: renew for Q1"];
  };
  // locality centres (approximate, our general knowledge of Pune): AOP pins sit at their area, not at the exact gate
  const AREA = [[/ghorpadi/i, 18.5300, 73.9150], [/mundhwa/i, 18.5330, 73.9310], [/godbole|manj/i, 18.5130, 73.9780], [/bhekrai/i, 18.4800, 73.9620], [/tukai/i, 18.4880, 73.9450],
    [/phursungi/i, 18.4720, 73.9690], [/dp road , hadapsar/i, 18.5050, 73.9300], [/hadapsar/i, 18.5018, 73.9257], [/keshav/i, 18.5440, 73.9480], [/upper kharadi/i, 18.5600, 73.9550],
    [/kharadi/i, 18.5515, 73.9408], [/amanora/i, 18.5190, 73.9350], [/eradwane|erandwane/i, 18.5080, 73.8330], [/narayan peth/i, 18.5140, 73.8510], [/law c/i, 18.5150, 73.8290],
    [/swargate/i, 18.5018, 73.8636], [/^dp road$/i, 18.5030, 73.8250], [/balewadi/i, 18.5770, 73.7790], [/kaspate/i, 18.5960, 73.7730], [/hinjewadi/i, 18.5913, 73.7389],
    [/dehu/i, 18.6800, 73.7300], [/punawale/i, 18.6300, 73.7350], [/pimpri|chinchwad/i, 18.6298, 73.7997], [/baner/i, 18.5590, 73.7868], [/ravet/i, 18.6460, 73.7440],
    [/walekarwadi/i, 18.6170, 73.7800], [/mahalunge/i, 18.5790, 73.7470], [/pashan/i, 18.5375, 73.7950], [/wakad/i, 18.5975, 73.7700], [/sainik/i, 18.4880, 73.8990],
    [/wanwadi|wanawadi|wanowrie|salunke/i, 18.4930, 73.9000], [/handewadi/i, 18.4560, 73.9420], [/undri/i, 18.4560, 73.9110], [/moham/i, 18.4730, 73.9220],
    [/kondhwa/i, 18.4630, 73.8870], [/nibm/i, 18.4710, 73.9010], [/ganga/i, 18.4790, 73.8820], [/viman/i, 18.5679, 73.9143], [/loh|loah/i, 18.5940, 73.9190], [/wagholi/i, 18.5793, 73.9787]];
  const STORE_AT = { Wakad: [18.598, 73.763], Wagholi: [18.58, 73.986], "SGS Mall": [18.518, 73.877], NIBM: [18.475, 73.902], Amanora: [18.519, 73.934] }; // = DATA.stores (approximate)
  const MYMAP = "18_xYhuA0Ko2KhXAZF9IsmEGSownW8yk"; // the user's Google My Map (10 Nov 2026)
  const RINGS = [[5, "#3643BA"], [10, "#6B4FBB"], [15, "#9AA2C8"]];
  // every AOP with its (approximate) map point: the page map and the KML files for Google My Maps use the same points
  window.puneAopPoints = () => { const seen = {}; return Object.entries(AN).flatMap(([st, l]) => l.map(r => {
    const p = where(r[2], st), key = p.join(), j = seen[key] = (seen[key] || 0) + 1, ang = j * 2.4, rad = 0.0025 * Math.sqrt(j), k = cat(r[1]);
    return { name: r[0], sport: r[1], area: r[2], when: r[3], store: st, cat: k, catName: KC[k][0], color: KC[k][1], status: status(r[3])[0], statusText: status(r[3])[1], lat: +(p[0] + rad * Math.cos(ang)).toFixed(5), lon: +(p[1] + rad * Math.sin(ang)).toFixed(5) }; })); };
  window.PUNE_STORES_AT = STORE_AT;
  const where = (area, store) => { const a = String(area || "").trim(); const hit = a && AREA.find(([re]) => re.test(a)); return hit ? [hit[1], hit[2]] : STORE_AT[store]; };
  const KC = { pool: ["Swimming pools", "#0096C7"], gym: ["Gyms, yoga, fitness", "#E0A100"], racket: ["Racket: badminton, pickleball, padel", "#6B4FBB"], team: ["Turfs and team sports", "#12A150"], other: ["Other", "#9AA2C8"] };
  function aopMap() {
    const m = document.getElementById("phMap"); if (!m) return;
    const rows = Object.entries(AN).flatMap(([st, l]) => l.map(r => ({ st, r, k: cat(r[1]), s: status(r[3])[0] })));
    if (!window.L) { m.innerHTML = `<p class="nd-hu-nomap">The map needs an internet connection: the counts are above and every place is listed in the store cards below.</p>`; return; }
    const map = L.map(m, { scrollWheelZoom: false });
    L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", { maxZoom: 18, attribution: "&copy; OpenStreetMap contributors" }).addTo(map);
    const pts = [], rings = {};
    Object.entries(STORE_AT).forEach(([st, p]) => { L.marker(p, { icon: L.icon({ iconUrl: "assets/img/deca-pin.png", iconSize: [26, 26], iconAnchor: [13, 13], className: "map-store" }), zIndexOffset: 2000 }).addTo(map).bindTooltip("Decathlon " + st, { permanent: true, direction: st === "SGS Mall" || st === "NIBM" ? "left" : "right", offset: [st === "SGS Mall" || st === "NIBM" ? -14 : 14, 0], className: "map-tip map-tip-store" }); pts.push(p); });
    RINGS.forEach(([km, c]) => { rings[km] = L.layerGroup(Object.values(STORE_AT).map(p => L.circle(p, { radius: km * 1000, color: c, weight: 1.5, dashArray: "6 6", fill: km === 5, fillColor: c, fillOpacity: 0.05, interactive: false }))); });
    window.puneAopPoints().forEach(a => {
      const ll = [a.lat, a.lon];
      L.circleMarker(ll, { radius: a.cat === "pool" || a.cat === "gym" ? 7 : 5, color: "#fff", weight: 1.5, fillColor: a.color, fillOpacity: a.status === "new" ? 0.35 : 0.95 }).addTo(map)
        .bindPopup(`<b>${esc(a.name)}</b><br>${esc(a.sport)}${a.area ? ", " + esc(a.area) : ""}<br>Store: ${esc(a.store)}<br>${esc(a.statusText)}`);
      pts.push(ll);
    });
    document.querySelectorAll(".ph-ring input").forEach(cb => cb.addEventListener("change", () => { const g = rings[+cb.value]; if (cb.checked) g.addTo(map); else map.removeLayer(g); }));
    map.fitBounds(pts, { padding: [20, 20] });
    rings[5].addTo(map); rings[10].addTo(map); // after the map has a view
    document.addEventListener("y27region", () => setTimeout(() => map.invalidateSize(), 60));
  }
  window.renderPuneHot = el => {
    if (!el) return;
    const allRows = Object.values(AN).flat(), isLive = r => status(r[3])[0] !== "new";
    const cnt = k => allRows.filter(r => cat(r[1]) === k && isLive(r)).length, soonN = allRows.filter(r => !isLive(r)).length;
    const mapBlock = `<div class="ph-mapb"><div class="ph-mapk"><div class="t"><b>${allRows.filter(isLive).length}</b><span>AOPs tied up so far, Pune${soonN ? ` (+${soonN} signed to start in 2027)` : ""}</span></div>
        ${["pool", "gym", "racket", "team"].map(k => `<div style="--c:${KC[k][1]}"><b>${cnt(k)}</b><span>${KC[k][0]}</span></div>`).join("")}</div>
      <div class="ph-mtabs"><div class="seg" role="group" aria-label="Map"><button type="button" data-mt="ours" aria-pressed="true">AOP map</button><button type="button" data-mt="mymap" aria-pressed="false">Google My Maps</button></div>
        <div class="ph-rings" aria-label="Store catchments">${RINGS.map(([km, c]) => `<label class="ph-ring" style="--c:${c}"><input type="checkbox" value="${km}" ${km < 15 ? "checked" : ""}> ${km} km</label>`).join("")}</div></div>
      <div class="ph-map" id="phMap" role="img" aria-label="Map of the AOPs Pune has tied up, by type, with 5, 10 and 15 km store catchments"></div>
      <div class="ph-mymap" id="phMyMap" hidden><iframe title="Pune AOPs on Google My Maps" data-src="https://www.google.com/maps/d/embed?mid=${MYMAP}" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe></div>
      <p class="ph-mapn">Every practice place in the Pune partnerships file, coloured by type; faded dots start in 2027; dashed rings are 5, 10 and 15 km around each store. Pins sit at the centre of their area (the file has addresses, not map points), so they are approximate.</p>
      <div class="ph-kml"><b>For Google My Maps</b><a href="assets/kml/pune-aops.kml" download>AOPs, by type (KML)</a><a href="assets/kml/pune-catchments.kml" download>Stores and 5, 10, 15 km catchments (KML)</a><a href="https://www.google.com/maps/d/edit?mid=${MYMAP}" target="_blank" rel="noopener">Open our My Map</a>
        <span>In the My Map: Add layer, then Import, and choose a file; do it once for each file. The Google My Maps tab shows the map once it is shared as "anyone with the link can view".</span></div></div>`;
    const city = `<div class="ph-city">${H.city.map(c => `<div class="ph-c ${c.k}"><b>${c.v}</b><span>${c.n}, Pune</span><p>${esc(c.s)}</p><small>${esc(c.src)}</small></div>`).join("")}</div>
      <div class="ph-tap">${[["pool", "Swimming pools"], ["gym", "Gyms"], ["trav", "Travel agencies"], ["soc", "Societies"]].map(([k, n]) => `<div class="${k}"><h4>How we tap: ${n.toLowerCase()}</h4><p>${esc(H.tap[k])}</p></div>`).join("")}</div>`;
    const cards = H.stores.map(st => {
      const list = AN[st.s] || [], by = k => list.filter(r => cat(r[1]) === k);
      const pools = by("pool"), gyms = by("gym"), rk = by("racket").length, tm = by("team").length;
      const now = a => a.filter(r => status(r[3])[0] !== "new").length, soon = a => a.filter(r => status(r[3])[0] === "new").length;
      const pl = (r) => { const [c, t] = status(r[3]); return `<li><b>${esc(r[0])}</b><span>${esc(r[2] || "")}</span><em class="${c}">${esc(t)}</em></li>`; };
      return `<article class="ph-st"><header><h3>${st.s}</h3><span>${list.length} AOPs tied up</span></header>
        <p class="ph-areas"><b>Catchment</b>${st.areas.map(esc).join(" · ")}</p>
        <ul class="ph-hot">${st.hot.map(h => `<li>${esc(h)}</li>`).join("")}</ul>
        <p class="ph-angle">${esc(st.angle)}</p>
        <div class="ph-nums">
          <div class="pool"><b>${now(pools)}<small>/10</small></b><span>pools tied up${soon(pools) ? `, +${soon(pools)} from 2027` : ""}; target 10 by 20 Feb</span><i style="--w:${Math.min(100, now(pools) * 10)}%"></i></div>
          <div class="gym"><b>${now(gyms)}</b><span>gyms, yoga and fitness${soon(gyms) ? `, +${soon(gyms)} from 2027` : ""}</span></div>
          <div class="trav"><b>0<small>/10</small></b><span>travel agencies (none in our files)</span></div>
          <div class="soc"><b>${st.s === "NIBM" ? 1 : 0}</b><span>society tie-ups${st.s === "NIBM" ? " (Ganga Dhaam pool)" : ""}</span></div>
        </div>
        <p class="ph-also">Also tied up: ${rk} racket (badminton, pickleball, padel), ${tm} turfs and team sports.</p>
        <details class="ph-d"><summary>Pools and gyms already with us (${pools.length + gyms.length})</summary>
          ${pools.length ? `<h5>Swimming</h5><ul class="ph-l">${pools.map(pl).join("")}</ul>` : ""}
          ${gyms.length ? `<h5>Gyms, yoga, fitness</h5><ul class="ph-l">${gyms.map(pl).join("")}</ul>` : ""}</details></article>`;
    }).join("");
    const all = H.stores.map(st => AN[st.s] || []).flat();
    const live = r => status(r[3])[0] !== "new";
    const tp = all.filter(r => cat(r[1]) === "pool" && live(r)).length, tg = all.filter(r => cat(r[1]) === "gym" && live(r)).length;
    const renew = all.filter(r => ["pool", "gym"].includes(cat(r[1])) && status(r[3])[0] === "renew").length;
    el.innerHTML = mapBlock + city + `<div class="ph-sum"><div><b>${tp}<small>/50</small></b><span>pools tied up across the 5 stores (target 10 a store by 20 Feb; Wagholi has 3 more signed from 2027)</span></div><div><b>${tg}</b><span>gyms, yoga and fitness tied up</span></div><div><b>${renew}</b><span>pool and gym tie-ups that end in 2026: renew before Movement for All</span></div><div><b>0<small>/50</small></b><span>travel agency affiliates in our files (deck target 50)</span></div></div>
      <div class="ph-grid">${cards}</div>
      <div class="ph-trav"><h3 class="display-s">Travel agencies<span class="lt">: a new kind of AOP</span></h3>
        <div class="ph-tk">${H.travel.kinds.map(k => `<div><h4>${esc(k.h)}</h4><p>${esc(k.w)}</p><small>${esc(k.have)}</small></div>`).join("")}</div>
        <div class="ph-tg"><div><h4>What we give them</h4><ul>${H.travel.give.map(x => `<li>${esc(x)}</li>`).join("")}</ul></div><div><h4>What we get</h4><ul>${H.travel.get.map(x => `<li>${esc(x)}</li>`).join("")}</ul></div></div>
        <p class="ph-ask">${esc(H.travel.ask)}</p></div>
      <p class="w27-note">Tied up: Pune partnerships sheet (practice place, sport, area, timeline; contacts left out). Status from the timeline as written: "ends in 2026" means the sheet's end date is in 2026. City numbers: public reports and directories (approximate, checked 10 Nov 2026). Catchment areas and hotspots: our reading of each store's surroundings, to confirm with the store teams. Store-level counts of gyms, pools, agencies and societies are not in our files.</p>`;
  };
  const go = () => { window.renderPuneHot(document.getElementById("puneHot")); aopMap();
    document.querySelectorAll(".ph-mtabs .seg button").forEach(b => b.addEventListener("click", () => {
      const my = b.dataset.mt === "mymap", f = document.querySelector("#phMyMap iframe");
      document.querySelectorAll(".ph-mtabs .seg button").forEach(x => x.setAttribute("aria-pressed", String(x === b)));
      document.getElementById("phMap").hidden = my; document.getElementById("phMyMap").hidden = !my; document.querySelector(".ph-rings").style.visibility = my ? "hidden" : "visible";
      if (my && f && !f.src) f.src = f.dataset.src; })); };
  if (document.readyState !== "loading") go(); else document.addEventListener("DOMContentLoaded", go);
})();
