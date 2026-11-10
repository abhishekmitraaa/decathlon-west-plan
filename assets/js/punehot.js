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
  window.renderPuneHot = el => {
    if (!el) return;
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
    el.innerHTML = city + `<div class="ph-sum"><div><b>${tp}<small>/50</small></b><span>pools tied up across the 5 stores (target 10 a store by 20 Feb; Wagholi has 3 more signed from 2027)</span></div><div><b>${tg}</b><span>gyms, yoga and fitness tied up</span></div><div><b>${renew}</b><span>pool and gym tie-ups that end in 2026: renew before Movement for All</span></div><div><b>0<small>/50</small></b><span>travel agency affiliates in our files (deck target 50)</span></div></div>
      <div class="ph-grid">${cards}</div>
      <p class="w27-note">Tied up: Pune partnerships sheet (practice place, sport, area, timeline; contacts left out). Status from the timeline as written: "ends in 2026" means the sheet's end date is in 2026. City numbers: public reports and directories (approximate, checked 10 Nov 2026). Catchment areas and hotspots: our reading of each store's surroundings, to confirm with the store teams. Store-level counts of gyms, pools, agencies and societies are not in our files.</p>`;
  };
  if (document.readyState !== "loading") window.renderPuneHot(document.getElementById("puneHot"));
  else document.addEventListener("DOMContentLoaded", () => window.renderPuneHot(document.getElementById("puneHot")));
})();
