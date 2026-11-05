/* November 2026 marketing update: Diwali, city pages, influencers, in-store comms, Black Friday (user brief, 5 Nov 2026). */
(() => {
  const $ = (s, r = document) => r.querySelector(s), $$ = (s, r = document) => [...r.querySelectorAll(s)];
  const esc = s => String(s).replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
  const L$ = n => "₹" + (n / 1e5).toFixed(n % 1e5 ? 2 : 1).replace(/\.0$/, "") + " L";

  // Diwali 2026 as observed in India
  const DAYS = [["Fri 6 Nov", "Dhanteras"], ["Sat 7 Nov", "Choti Diwali"], ["Sun 8 Nov", "Diwali, Lakshmi Puja"], ["Tue 10 Nov", "Govardhan Puja and Gujarati New Year"], ["Wed 11 Nov", "Bhai Dooj"]];
  $("#novDays").innerHTML = DAYS.map(([d, n], i) => `<div class="${i === 2 ? "main" : ""}"><b>${d}</b><span>${n}</span></div>`).join("");
  const LIVE = [
    ["No sale", "No Diwali sale in the stores this year: we celebrate with Gift a Sport instead of discounts"],
    ["In store", "Gift a Sport comms: light boxes, wall headers, rangoli of balls and frisbees, garlands at the welcome desk. Live in Bhopal and Motera, other stores to follow"],
    ["Influencers", "23 so far: Gujarat 13 (₹1.3 L, with Akshat), Indore 4 on barter, Bhopal 4, Gwalior 2 with a gift card each. The 10 reels below have about 1.9 lakh views"],
    ["City pages", "Diwali reels on all 8 Let's Play pages, e.g. Gwalior's “why gift mithai? When you have Decathlon”"],
    ["Recycling", "Gujarat content reused in MP, the best of MP reused in Gujarat, the same with Pune"],
    ["On the road", "7 hoardings live in Pune; 114 practice-place AOPs live in 6 stores"],
    ["Next", "Black Friday influencers finalised by Mon 9 Nov (Pune by Tue 10 Nov)"]
  ];
  $("#novLive").innerHTML = LIVE.map(([w, t]) => `<li><b>${w}</b>${esc(t)}</li>`).join("");

  // reel tiles: v = video id (assets/videos/ig), p = photo post (assets/posters/ig); views from the page's public Reels tab
  const VW = window.IG_VIEWS || {};
  const short = n => n >= 1e5 ? (n / 1e5).toFixed(n >= 1e6 ? 0 : 2).replace(/\.?0+$/, "") + " lakh" : n >= 1e3 ? (n / 1e3).toFixed(1).replace(/\.0$/, "") + "K" : String(n);
  const pill = id => VW[id] ? `<span class="nov-views"><svg viewBox="0 0 24 24" width="12" height="12" aria-hidden="true"><path fill="currentColor" d="M8 5v14l11-7z"/></svg>${short(VW[id])} views</span>` : "";
  const tile = (id, kind, by) => kind === "v"
    ? `<div class="oct-ig-item"><div class="sm-video ig-reel"><video muted loop playsinline preload="none" poster="assets/posters/ig/${id}.jpg" data-src="assets/videos/ig/${id}.mp4" aria-label="Reel by @${esc(by)}"></video><button type="button" class="snd-btn" aria-pressed="false" aria-label="Play with sound"><svg viewBox="0 0 24 24" width="14" height="14" aria-hidden="true"><path fill="currentColor" d="M12 3v10.55A4 4 0 1 0 14 17V7h4V3h-6z"/></svg><span>Sound off</span></button></div>${pill(id)}<a class="nov-ig-link" href="https://www.instagram.com/reel/${id}/" target="_blank" rel="noopener">@${esc(by)} on Instagram</a></div>`
    : `<div class="oct-ig-item"><a class="ig-still" href="https://www.instagram.com/p/${id}/" target="_blank" rel="noopener"><img src="assets/posters/ig/${id}.jpg" alt="Post by @${esc(by)}" loading="lazy"><span>Watch on Instagram</span></a>${pill(id)}</div>`;

  // city pages, 5 Nov 2026 (public profile counts)
  // city pages, 5 Nov 2026 (public profile counts); reels = the latest posts on each page's grid, collabs included
  const CITIES = [
    ["Gujarat", "Ahmedabad", "letsplay_ahmedabad", 7203, 266, [["DfWmPyARQTi", "v"], ["DfTvKjJMMEv", "v"], ["DfR5JF9xhnU", "p"], ["DfARs-kRF7G", "v"], ["De4J7EvhdBz", "p"], ["DezBlWXjO_i", "p"]]],
    ["Gujarat", "Surat", "letsplaysurat", 10600, 342, [["DfH4ZLHtzTY", "v"], ["DfFUtI_tj0d", "v"], ["DewQ1znDYeS", "p"], ["DeosStPNuxE", "p"], ["DehJUqQtsej", "v"], ["Dd8J7lzNngs", "v"]]],
    ["Gujarat", "Baroda", "lets_play_baroda", 4178, 360, [["DfErMzJoxFv", "v"], ["DewTiKNIDpW", "v"], ["DfWmPyARQTi", "v"], ["DfTvKjJMMEv", "v"], ["DfR5JF9xhnU", "p"], ["DfARs-kRF7G", "v"]]],
    ["Gujarat", "Rajkot", "play_rajkot", 3676, 187, [["DfT8OR-ML-9", "v"], ["Deq8s6ms1G5", "v"], ["DfTvKjJMMEv", "v"], ["DfR5JF9xhnU", "p"], ["DfH4ZLHtzTY", "v"], ["DfErMzJoxFv", "v"]]],
    ["Pune", "Pune", "letsplaypune", 3653, 264, [["DfWc3lrALwl", "p"], ["DfUg1stSYDY", "p"], ["DfRwSCQMThb", "p"], ["DfQCQKltWXg", "v"], ["DfPckVPtYok", "p"], ["DfOjP_Ega2u", "p"]]],
    ["MP", "Indore", "lets_playindore", 4339, 99, [["DfU25F5ADdQ", "p"], ["DfUWa1cAFwo", "p"], ["DfSWm7UAH3K", "p"], ["DfRxzv1zGEc", "v"], ["DfPoeqygHml", "p"], ["DfMvGGDTaaV", "v"]]],
    ["MP", "Bhopal", "letsplaybhopal", 259, 46, [["DfXLqoETY1p", "v"], ["DfRyd7KTa0b", "p"], ["DfPVVJkI_wa", "v"], ["DfM09PzqoXZ", "p"], ["DfMvv1cuhKa", "v"], ["DfG-yANhDpg", "p"]]],
    ["MP", "Gwalior", "letsplayygwalior", 24, 3, [["DfXGxBSNynn", "v"], ["DfUWnpNtb7g", "v"], ["DfPRG2rNlj2", "p"]]]
  ];
  const BY = {"DfWc3lrALwl": "___sportsarena___", "DfUg1stSYDY": "doctor.who.runs", "DfRwSCQMThb": "doctor.who.runs", "DfQCQKltWXg": "fitness_after_fifty", "DfPckVPtYok": "satishdubey07", "DfOjP_Ega2u": "___sportsarena___", "DfH4ZLHtzTY": "letsplaysurat", "DfFUtI_tj0d": "letsplaysurat", "DewQ1znDYeS": "letsplaysurat", "DeosStPNuxE": "letsplaysurat", "DehJUqQtsej": "letsplaysurat", "Dd8J7lzNngs": "letsplaysurat", "DfWmPyARQTi": "letsplay_ahmedabad", "DfTvKjJMMEv": "letsplay_ahmedabad", "DfR5JF9xhnU": "letsplay_ahmedabad", "DfARs-kRF7G": "letsplay_ahmedabad", "De4J7EvhdBz": "letsplay_ahmedabad", "DezBlWXjO_i": "letsplay_ahmedabad", "DfErMzJoxFv": "lets_play_baroda", "DewTiKNIDpW": "lets_play_baroda", "DfT8OR-ML-9": "play_rajkot", "Deq8s6ms1G5": "play_rajkot", "DfU25F5ADdQ": "lets_playindore", "DfUWa1cAFwo": "lets_playindore", "DfSWm7UAH3K": "lets_playindore", "DfRxzv1zGEc": "lets_playindore", "DfPoeqygHml": "lets_playindore", "DfMvGGDTaaV": "lets_playindore", "DfXLqoETY1p": "letsplaybhopal", "DfRyd7KTa0b": "bhopal.sb", "DfPVVJkI_wa": "__.bhavya", "DfM09PzqoXZ": "tinyshuttlestar", "DfMvv1cuhKa": "bhopal_events_update", "DfG-yANhDpg": "yakshitdairies_10", "DfXGxBSNynn": "letsplayygwalior", "DfUWnpNtb7g": "letsplayygwalior", "DfPRG2rNlj2": "letsplayygwalior"};
  const num = n => n >= 10000 ? (n / 1000).toFixed(1) + "K" : n.toLocaleString("en-IN");
  const live = CITIES.filter(c => c[2]), F = live.reduce((a, c) => a + c[3], 0), P = live.reduce((a, c) => a + c[4], 0);
  $("#novSocialKpis").innerHTML = `<div style="--c:var(--blue)"><b>${live.length} of 8</b><span>city pages live</span></div><div style="--c:var(--guj)"><b>${num(F)}</b><span>followers across them</span></div><div style="--c:var(--mp)"><b>${P.toLocaleString("en-IN")}</b><span>posts so far</span></div><div class="tot"><b>Surat</b><span>biggest page, ${num(10600)} followers</span></div>`;
  const BU = { Gujarat: "var(--guj)", Pune: "var(--pune)", MP: "var(--mp)" };
  $("#novSocial").innerHTML = CITIES.map(([bu, city, h, f, p, reels]) => `<article class="oct-row oct-social nov-city" style="--c:${BU[bu]}">
      <div class="oct-text"><span class="oct-when">${bu === "MP" ? "Madhya Pradesh" : bu}</span><h3>${city}</h3>
        ${h ? `<p><a href="https://www.instagram.com/${h}/" target="_blank" rel="noopener">@${h}</a>: <b>${num(f)}</b> followers, <b>${p}</b> posts.${reels.length ? ` The latest ${reels.length} on the page below.` : " Open the page to see what is live."}</p>` : `<p>No page yet.</p>`}</div>
      ${reels.length ? `<div class="oct-ig-row">${reels.map(([id, k]) => tile(id, k, BY[id] || h)).join("")}</div>` : ""}
    </article>`).join("");

  // influencers done so far
  const INFL = [
    ["Gujarat", 13, "₹1.3 L, with Akshat"],
    ["Indore", 4, "Barter"],
    ["Bhopal", 4, ""],
    ["Gwalior", 2, "A gift card each"]
  ];
  $("#novInflKpis").innerHTML = INFL.map(([c, n, how], i) => `<div style="--c:${["var(--guj)", "var(--mp)", "var(--mp)", "var(--mp)"][i]}"><b>${n}</b><span>${c}${how ? ", " + how : ""}</span></div>`).join("") + `<div class="tot"><b>${INFL.reduce((a, x) => a + x[1], 0)}</b><span>influencers so far</span></div>`;
  const IR = [["Gujarat", "Ahmedabad and Baroda", [["DfHm1Z2vrbd", "v", "hetansh_shahh"], ["DfHJeAntkw4", "v", "aishwaryaradhani"], ["DfG0V96gt7T", "v", "ayushithakkarrr"], ["DfG2BaXNPLH", "v", "monikacreatescontent"], ["DfHEdoasy0O", "v", "kashii__w"], ["DfG8IBLiePI", "p", "vadodara_foodiesisters"]]],
    ["Madhya Pradesh", "Bhopal", [["DfMvv1cuhKa", "v", "bhopal_events_update"], ["DerYOikTLww", "v", "jasminethakurr"], ["DfPVVJkI_wa", "v", "__.bhavya"], ["DfPFRE0KFpO", "v", "wassup_bhopal"]]],
    ["Madhya Pradesh", "Indore", [["DfXGo04OAM4", "v", "taste_budds"]]]];
  $("#novInfl").innerHTML = IR.map(([bu, where, list]) => { const t = list.reduce((a, [id]) => a + (VW[id] || 0), 0);
    return `<div class="oct-row oct-social nov-city" style="--c:${bu === "Gujarat" ? "var(--guj)" : "var(--mp)"}"><div class="oct-text"><span class="oct-when">${bu}</span><h3>${where}: ${list.length} reel${list.length > 1 ? "s" : ""} live</h3><p>About <b>${short(t)} views</b> so far on the reels below.</p></div>
    <div class="oct-ig-row">${list.map(([id, k, by]) => tile(id, k, by)).join("")}</div></div>`; }).join("");

  // in-store comms: all 13 stores, photos to come
  const STORES = [["Pune", ["Wakad", "Wagholi", "SGS Mall", "NIBM", "Amanora"]], ["Gujarat", ["Motera", "Nexus Ahmedabad", "Surat, Dumas Road", "Baroda", "Rajkot"]], ["MP", ["Indore", "Bhopal", "Gwalior"]]];
  const DONE = { Bhopal: 5, Motera: 5 };
  $("#novStores").innerHTML = STORES.map(([bu, list]) => `<div><h4>${bu === "MP" ? "Madhya Pradesh" : bu}</h4><ul>${list.map(s => `<li class="${DONE[s] ? "done" : ""}" style="--c:${BU[bu]}"><b>${s}</b><span>${DONE[s] ? "Diwali comms live" : "Not up yet"}</span></li>`).join("")}</ul></div>`).join("");
  const SHOTS = { Bhopal: ["Diwali entrance: diyas, garlands and blue and gold balloons", "Gift a Sport rangoli of balls, frisbees and shuttles", "Welcome desk with marigold garlands and Happy Diwali bunting", "The team with the Gift a Sport display", "Gift a Sport corner by camping"], Motera: ["Gift a Sport light box outside the store", "The Gift a Sport light box", "Gift a Sport headers on the ball wall, from ₹399", "Gift a Sport gondola with the ₹899 cricket combo", "Gift a Sport headers on the archery and darts wall"] };
  $("#novStorePhotos").innerHTML = Object.entries(SHOTS).map(([st, caps]) => `<h4 class="dw-store">${st}</h4><div class="dw-shots">${caps.map((c, i) => `<figure><img src="assets/img/nov/${st.toLowerCase()}-instore-${i + 1}.jpg" alt="${esc(st)}: ${esc(c)}" loading="lazy"><figcaption>${esc(c)}</figcaption></figure>`).join("")}</div>`).join("");

  // Black Friday influencer plan; nothing finalised yet
  const BF = [
    ["Gujarat", "Surat", 25, null, "To be finalised by Monday 9 Nov"], ["Gujarat", "Ahmedabad", 30, null, "To be finalised by Monday 9 Nov"], ["Gujarat", "Rajkot", 12, null, "To be finalised by Monday 9 Nov"], ["Gujarat", "Baroda", null, null, "To be finalised by Monday 9 Nov"],
    ["Pune", "Pune", 40, 400000, "Cross-checking with the vendor; likely done by Tuesday 10 Nov"],
    ["MP", "Indore", 15, null, "To be finalised by Monday 9 Nov"], ["MP", "Bhopal", 15, null, "To be finalised by Monday 9 Nov"], ["MP", "Gwalior", 10, null, "To be finalised by Monday 9 Nov"]
  ];
  const tot = bu => BF.filter(r => r[0] === bu).reduce((a, r) => a + (r[2] || 0), 0);
  const all = BF.reduce((a, r) => a + (r[2] || 0), 0);
  $("#novBfKpis").innerHTML = `<div style="--c:var(--guj)"><b>${tot("Gujarat")}+</b><span>Gujarat influencers, ₹7.4 L</span></div><div style="--c:var(--pune)"><b>${tot("Pune")}</b><span>Pune influencers, ₹4 L</span></div><div style="--c:var(--mp)"><b>${tot("MP")}</b><span>MP influencers</span></div><div class="tot"><b>${all}+</b><span>influencers for Black Friday</span></div>`;
  $("#novBf").innerHTML = `<table class="sb-table"><thead><tr><th scope="col">City</th><th scope="col">Influencers</th><th scope="col">Budget</th><th scope="col">Status</th></tr></thead><tbody>
    ${["Gujarat", "Pune", "MP"].map(bu => BF.filter(r => r[0] === bu).map(r => `<tr><th scope="row">${r[1]}</th><td>${r[2] ?? "-"}</td><td>${r[3] ? L$(r[3]) : "-"}</td><td style="text-align:left">${r[4]}</td></tr>`).join("") +
      `<tr class="sb-total"><th scope="row">${bu === "MP" ? "Madhya Pradesh" : bu} total</th><td>${tot(bu)}${bu === "Gujarat" ? "+" : ""}</td><td>${bu === "Gujarat" ? "₹7.4 L" : bu === "Pune" ? "₹4 L" : "-"}</td><td></td></tr>`).join("")}
    <tr class="sb-total"><th scope="row">All Black Friday</th><td>${all}+</td><td>₹11.4 L so far</td><td style="text-align:left">MP budget to come</td></tr></tbody></table>`;

  // walk-in partner events on Black Friday morning (suggestion)
  const W = [["Baroda", 30000], ["Indore", 30000], ["Wakad", 30000], ["Amanora", 30000], ["Wagholi", 30000], ["SGS Mall", 30000], ["NIBM", 20000]];
  const wt = W.reduce((a, w) => a + w[1], 0);
  $("#novWalk").innerHTML = `<table class="sb-table"><thead><tr><th scope="col">Store</th><th scope="col">Partner budget</th><th scope="col">Walk-ins asked</th></tr></thead><tbody>
    ${W.map(([s, b]) => `<tr><th scope="row">${s}</th><td>₹${b.toLocaleString("en-IN")}</td><td>1,000+</td></tr>`).join("")}
    <tr class="sb-total"><th scope="row">${W.length} stores</th><td>${L$(wt)}</td><td>${(W.length * 1000).toLocaleString("en-IN")}+</td></tr></tbody></table>`;

  // Diwali string lights: bulbs placed along the garland curve, twinkling one after another
  $$(".dw-bulbs").forEach(box => {
    const N = innerWidth < 700 ? 14 : 26;
    box.innerHTML = Array.from({ length: N }, (_, i) => { const t = (i + 0.5) / N, half = t < 0.5 ? t * 2 : (t - 0.5) * 2, y = 8 + 110 * 2 * half * (1 - half) * 0.85;
      return `<i style="left:${t * 100}%;top:${y}px;--d:${(i % 6) * 0.35}s"></i>`; }).join("");
  });

  // section jump links
  $("#novJump").innerHTML = $$(".nav a").map(a => `<a href="${a.getAttribute("href")}">${a.textContent}</a>`).join("");

  // videos: play the few most in view, one sound at a time
  const ratio = new Map(), CAP = innerWidth < 700 ? 2 : 3;
  const pick = () => {
    const vis = [...ratio].filter(([, r]) => r >= 0.3).sort((a, b) => b[1] - a[1]).map(([v]) => v);
    const loud = vis.filter(v => !v.muted), play = new Set(loud.length ? loud : vis.slice(0, CAP));
    for (const v of ratio.keys()) {
      if (play.has(v)) { if (!v.getAttribute("src")) v.src = v.dataset.src; if (v.paused) v.play().catch(() => {}); }
      else if (!v.paused) v.pause();
    }
  };
  const io = new IntersectionObserver(es => { es.forEach(e => ratio.set(e.target, e.isIntersecting ? e.intersectionRatio : 0)); pick(); }, { threshold: [0, 0.3, 0.6, 1] });
  $$(".sm-video video").forEach(v => { v.muted = true; io.observe(v); });
  document.addEventListener("click", e => {
    const t = e.target.closest(".sm-video"); if (!t) return;
    const v = $("video", t), btn = $(".snd-btn", t), on = v.muted;
    $$(".sm-video").forEach(o => { const ov = $("video", o); ov.muted = true; const b = $(".snd-btn", o); b.setAttribute("aria-pressed", "false"); $("span", b).textContent = "Sound off"; });
    if (on) { if (!v.getAttribute("src")) v.src = v.dataset.src; v.muted = false; btn.setAttribute("aria-pressed", "true"); $("span", btn).textContent = "Sound on"; v.play().catch(() => { v.muted = true; }); }
    pick();
  });

  // highlight the section in view
  const links = $$(".nav a");
  const so = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) links.forEach(a => a.classList.toggle("on", a.getAttribute("href") === "#" + e.target.id)); }), { rootMargin: "-45% 0px -50% 0px" });
  $$("section[id]").forEach(s => so.observe(s));
})();
