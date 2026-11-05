/* November 2026 marketing update: Diwali, city pages, influencers, in-store comms, Black Friday (user brief, 5 Nov 2026). */
(() => {
  const $ = (s, r = document) => r.querySelector(s), $$ = (s, r = document) => [...r.querySelectorAll(s)];
  const esc = s => String(s).replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
  const L$ = n => "₹" + (n / 1e5).toFixed(n % 1e5 ? 2 : 1).replace(/\.0$/, "") + " L";

  // Diwali 2026 as observed in India
  const DAYS = [["Fri 6 Nov", "Dhanteras"], ["Sat 7 Nov", "Choti Diwali"], ["Sun 8 Nov", "Diwali, Lakshmi Puja"], ["Tue 10 Nov", "Govardhan Puja and Gujarati New Year"], ["Wed 11 Nov", "Bhai Dooj"]];
  $("#novDays").innerHTML = DAYS.map(([d, n], i) => `<div class="${i === 2 ? "main" : ""}"><b>${d}</b><span>${n}</span></div>`).join("");
  const LIVE = [
    ["31 Oct - 1 Nov", "Diwali sale in the stores, ₹5.5 Cr target (₹4.7 Cr last year)"],
    ["1 - 30 Nov", "Gift a Sport: Diwali gifting in store and on the city pages"],
    ["Oct - Nov", "Diwali campaigns: Gujarat ₹3.63 L (24 - 26 Oct, Gift a Sport); MP ₹2.87 L (Diwali + Dussehra)"],
    ["Since 10 Oct", "7 hoardings live in Pune"],
    ["Now", "114 practice-place AOPs live in 6 stores; 114 more open in November and December"],
    ["This week", "Diwali reels on the city pages, e.g. Gwalior's “why gift mithai? When you have Decathlon”"]
  ];
  $("#novLive").innerHTML = LIVE.map(([w, t]) => `<li><b>${w}</b>${esc(t)}</li>`).join("");

  // reel tiles: v = video id (assets/videos/ig), p = photo post (assets/posters/ig)
  const tile = (id, kind, by) => kind === "v"
    ? `<div class="oct-ig-item"><div class="sm-video ig-reel"><video muted loop playsinline preload="none" poster="assets/posters/ig/${id}.jpg" data-src="assets/videos/ig/${id}.mp4" aria-label="Reel by @${esc(by)}"></video><button type="button" class="snd-btn" aria-pressed="false" aria-label="Play with sound"><svg viewBox="0 0 24 24" width="14" height="14" aria-hidden="true"><path fill="currentColor" d="M12 3v10.55A4 4 0 1 0 14 17V7h4V3h-6z"/></svg><span>Sound off</span></button></div><a class="nov-ig-link" href="https://www.instagram.com/reel/${id}/" target="_blank" rel="noopener">@${esc(by)} on Instagram</a></div>`
    : `<div class="oct-ig-item"><a class="ig-still" href="https://www.instagram.com/p/${id}/" target="_blank" rel="noopener"><img src="assets/posters/ig/${id}.jpg" alt="Post by @${esc(by)}" loading="lazy"><span>Watch on Instagram</span></a></div>`;

  // city pages, 5 Nov 2026 (public profile counts)
  const CITIES = [
    ["Gujarat", "Ahmedabad", "letsplay_ahmedabad", 7203, 266, [["DeHTVs1MlIq", "v"], ["DerNs9uMOzh", "v"], ["DejcABnxu21", "p"]]],
    ["Gujarat", "Surat", "letsplaysurat", 10600, 342, [["Dd8J7lzNngs", "v"], ["DehJUqQtsej", "v"], ["DewQ1znDYeS", "p"]]],
    ["Gujarat", "Baroda", "lets_play_baroda", 4178, 360, []],
    ["Gujarat", "Rajkot", null, null, null, []],
    ["Pune", "Pune", "letsplaypune", 3653, 264, [["De8wddSJ_Md", "v"], ["DeogOh8ueLw", "v"]]],
    ["MP", "Indore", "lets_playindore", 4339, 99, [["DfU25F5ADdQ", "p"]]],
    ["MP", "Bhopal", "letsplaybhopal", 259, 46, []],
    ["MP", "Gwalior", "letsplayygwalior", 24, 3, [["DfXGxBSNynn", "v"], ["DfUWnpNtb7g", "v"], ["DfPRG2rNlj2", "p"]]]
  ];
  const num = n => n >= 10000 ? (n / 1000).toFixed(1) + "K" : n.toLocaleString("en-IN");
  const live = CITIES.filter(c => c[2]), F = live.reduce((a, c) => a + c[3], 0), P = live.reduce((a, c) => a + c[4], 0);
  $("#novSocialKpis").innerHTML = `<div style="--c:var(--blue)"><b>${live.length} of 8</b><span>city pages live</span></div><div style="--c:var(--guj)"><b>${num(F)}</b><span>followers across them</span></div><div style="--c:var(--mp)"><b>${P.toLocaleString("en-IN")}</b><span>posts so far</span></div><div class="tot"><b>Surat</b><span>biggest page, ${num(10600)} followers</span></div>`;
  const BU = { Gujarat: "var(--guj)", Pune: "var(--pune)", MP: "var(--mp)" };
  $("#novSocial").innerHTML = CITIES.map(([bu, city, h, f, p, reels]) => `<article class="oct-row oct-social nov-city" style="--c:${BU[bu]}">
      <div class="oct-text"><span class="oct-when">${bu === "MP" ? "Madhya Pradesh" : bu}</span><h3>${city}</h3>
        ${h ? `<p><a href="https://www.instagram.com/${h}/" target="_blank" rel="noopener">@${h}</a>: <b>${num(f)}</b> followers, <b>${p}</b> posts.${reels.length ? ` ${reels.length} of the latest below.` : " Open the page to see what is live."}</p>` : `<p>No Let's Play page found for Rajkot yet. Share the handle and it goes here.</p>`}</div>
      ${reels.length ? `<div class="oct-ig-row">${reels.map(([id, k]) => tile(id, k, h)).join("")}</div>` : ""}
    </article>`).join("");

  // influencers done so far
  const INFL = [
    ["Gujarat", 13, "₹1.3 L, with Akshat"],
    ["Indore", 4, "Barter"],
    ["Bhopal", 4, ""],
    ["Gwalior", 2, "A gift card each"]
  ];
  $("#novInflKpis").innerHTML = INFL.map(([c, n, how], i) => `<div style="--c:${["var(--guj)", "var(--mp)", "var(--mp)", "var(--mp)"][i]}"><b>${n}</b><span>${c}${how ? ", " + how : ""}</span></div>`).join("") + `<div class="tot"><b>${INFL.reduce((a, x) => a + x[1], 0)}</b><span>influencers so far</span></div>`;
  $("#novInfl").innerHTML = `<div class="oct-row oct-social"><div class="oct-text"><span class="oct-when">Diwali</span><h3>Celebrate Diwali, the Decathlon way</h3><p>A creator reel live now: gifts and everyday sports essentials for Diwali. The rest of the influencer videos will be added as they come in.</p></div>
    <div class="oct-ig-row">${tile("DfPVVJkI_wa", "v", "__.bhavya")}</div></div>`;

  // in-store comms: all 13 stores, photos to come
  const STORES = [["Pune", ["Wakad", "Wagholi", "SGS Mall", "NIBM", "Amanora"]], ["Gujarat", ["Motera", "Nexus Ahmedabad", "Surat, Dumas Road", "Baroda", "Rajkot"]], ["MP", ["Indore", "Bhopal", "Gwalior"]]];
  $("#novStores").innerHTML = STORES.map(([bu, list]) => `<div><h4>${bu === "MP" ? "Madhya Pradesh" : bu}</h4><ul>${list.map(s => `<li style="--c:${BU[bu]}"><b>${s}</b><span>Photos to come</span></li>`).join("")}</ul></div>`).join("");

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
