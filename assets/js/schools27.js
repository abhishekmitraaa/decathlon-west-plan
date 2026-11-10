/* Schools: Back to School 2025 tie-ups per Pune store (Pune_Partnerhsips__Coaches_affiliation_.xlsx, sheet "Schools 2025", "<12 schools done for the city>")
   and the 2027 target (user, 10 Nov 2026): every store ties up with at least 10 schools in its catchment; the schools walk into the store through the
   name-sticker option or the colouring-book option; by Q2 (end of May 2027) 1,000 families from each school walk in = 10,000 families a store,
   50,000 for Pune. Contact numbers in the sheet are left out on purpose.
   Row: [school, B2B onboarding, sticker deal, stickers (qty as written), what we did together] ("" = blank in the sheet). */
window.PUNE_SCHOOLS = {
  y25: {
    Wakad: [["My School Wakad", "Done", "Not done", "", ""], ["Little Millennium, Balewadi", "Done", "Done", "300", ""], ["Little Millennium, Thathawade", "Done", "Done", "300", ""],
      ["Billennium", "Done", "", "45 (25 parents)", ""], ["PICTS", "Done", "Done", "270", ""], ["Orchids, all PCMC branches (3 batches)", "Done", "Done", "470", "School visit"],
      ["Vibgyor, Wakad", "Done", "Done", "540", ""], ["Akshara International School", "Done", "Not done", "", ""], ["Kothari International School, Kharadi", "Done", "Not done", "", ""]],
    Wagholi: [["Narayana e-Techno", "Done", "Done", "7,500", ""], ["Ryan International", "", "", "", ""], ["Euro Kids", "", "", "", ""], ["Kothari International School", "", "", "", ""],
      ["Phoenix World School", "", "", "", ""], ["The Orbis School", "", "", "", ""], ["Orchids The International School, Wadgaon Sheri", "", "", "", ""], ["The Bishop's Co-Ed School", "", "", "", ""],
      ["Oxford World School", "", "", "", ""], ["Podar International School", "", "", "", ""]],
    "SGS Mall": [["S.M. Chouksey", "Not done", "Done", "20,000", "Yoga Day"], ["St Vincent's", "", "", "", ""], ["St Anne's", "Not done", "Done", "14,000", "National Sports Day: Zumba"], ["Orchids", "Not done", "Done", "15,000", "Yoga Day"]],
    Amanora: [["Angel Paradise", "Not done", "Done", "1,000", "Muddy Buddy event (28 Jun); school visit to the store: drawing competition and store tour (30 Aug)"],
      ["Narayana e-Techno", "Done", "Done", "8,000", "Yoga Day (20 Jun)"], ["Pawar Public School", "Done", "Done", "23,000", "Yoga Day (19 Jun); MUN debate competition"],
      ["Global International", "Done", "Done", "15,000", ""], ["Orchid International, Vadgaon Sheri", "Not done", "Done", "6,350", "Store visits (18 Jun and 24 to 26 Jun)"],
      ["Vibgyor", "Not done", "Not done", "", "School visit to the store: cycling and skating (23 Jun)"]],
    NIBM: [["Narayana e-Techno", "Done", "Done", "4,500", "Yoga Day (20 Jun)"], ["Little Millennium Preschool, Undri", "", "", "", ""], ["The Orbis School", "", "", "", ""],
      ["Crimson World School", "", "", "", ""], ["Vibgyor, NIBM", "", "", "", ""], ["RIMS International, NIBM", "", "", "", ""]]
  },
  target: { schools: 10, families: 1000, by: "end of May 2027 (Q2)" },
  // how a school walks in: the two options the user named, then the season (our plan on her brief)
  ways: [
    { h: "Name-sticker option", p: "Every child gets name stickers for books and bottles with the school's and our logo; the sticker sheet carries a store coupon and a QR. 2025 proof: 1,16,230 stickers went out across 15 schools." },
    { h: "Colouring-book option", p: "A Decathlon sports colouring book in class (as on Children's Day, 14 Nov); the finished page is the ticket: bring it to the store for a reward. Every page brought in is a family walk-in we can count." },
    { h: "Back to School, like 2025", p: "Yoga Day at the school (19 to 21 June), school visits to the store (cycling, skating, drawing competition), Muddy Buddy, National Sports Day: the 2025 activations, now with all 10 schools of every store." }
  ],
  steps: [
    ["Jan 2027", "Map 10+ schools in each catchment; keep the 2025 schools first (15 already took stickers)."],
    ["Feb", "Sign: B2B onboarding and the sticker or colouring-book deal, one coupon code per school."],
    ["Mar", "Stickers and colouring books in class before the exams; a school visit to the store for each school."],
    ["Apr to May", "Summer holidays: the walk-ins. Summer camps and learn-to-swim for the same families. Target reached by end of May."],
    ["June", "Back to School: kits, Yoga Day at the schools, store visits, as in 2025."]
  ]
};

(() => {
  const S = window.PUNE_SCHOOLS;
  const esc = s => String(s).replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
  const num = q => parseInt(String(q).split(" ")[0].replace(/,/g, ""), 10) || 0;
  const engaged = r => r[1] === "Done" || r[2] === "Done" || !!r[4];
  window.renderSchools = el => {
    if (!el) return;
    const stores = ["Wakad", "Wagholi", "SGS Mall", "Amanora", "NIBM"], T = S.target;
    const rows = stores.map(st => { const l = S.y25[st]; return { st, l, n: l.length, eng: l.filter(engaged).length, stk: l.reduce((a, r) => a + (r[2] === "Done" ? num(r[3]) : 0), 0) }; });
    const totEng = rows.reduce((a, r) => a + r.eng, 0), totStk = rows.reduce((a, r) => a + r.stk, 0), stkSchools = rows.reduce((a, r) => a + r.l.filter(x => x[2] === "Done").length, 0);
    const fam = T.schools * T.families;
    el.innerHTML = `<div class="sc-kpis">
        <div class="t"><b>${T.schools}+</b><span>schools tied up per store, in its catchment</span></div>
        <div class="t"><b>${T.families.toLocaleString("en-IN")}</b><span>families walking in from each school by ${T.by}</span></div>
        <div class="t"><b>${fam.toLocaleString("en-IN")}</b><span>families per store; ${(fam * 5).toLocaleString("en-IN")} for Pune's 5 stores</span></div>
        <div><b>${totEng}</b><span>schools we worked with in 2025 (target 2027: ${T.schools * 5})</span></div>
        <div><b>${totStk.toLocaleString("en-IN")}</b><span>name stickers given in 2025, ${stkSchools} schools</span></div></div>
      <div class="sc-ways">${S.ways.map(w => `<div><h4>${esc(w.h)}</h4><p>${esc(w.p)}</p></div>`).join("")}</div>
      <ol class="sc-steps">${S.steps.map(([w, t]) => `<li><b>${esc(w)}</b><span>${esc(t)}</span></li>`).join("")}</ol>
      <div class="sc-grid">${rows.map(r => `<article class="sc-st"><header><h3>${r.st}</h3><span>${r.eng} of ${T.schools} in 2025</span></header>
          <div class="sc-bar"><i style="--w:${Math.min(100, r.eng / T.schools * 100)}%"></i></div>
          <p class="sc-need">${r.eng >= T.schools ? "10 reached: keep them and add more" : `${T.schools - r.eng} more to sign`} · target ${fam.toLocaleString("en-IN")} families by May</p>
          <details><summary>Back to School 2025: ${r.n} schools listed, ${r.stk.toLocaleString("en-IN")} stickers</summary><ul class="sc-l">${r.l.map(x => `<li class="${engaged(x) ? "on" : ""}"><b>${esc(x[0])}</b><span>${x[1] ? "Onboarding " + esc(x[1]).toLowerCase() : "Not started"}${x[2] ? ", sticker deal " + esc(x[2]).toLowerCase() : ""}${x[3] ? ", " + esc(x[3]) + " stickers" : ""}${x[4] ? ". " + esc(x[4]) : ""}</span></li>`).join("")}</ul></details></article>`).join("")}</div>
      <p class="w27-note">2025: the "Schools 2025" sheet of the Pune partnerships file ("&lt;12 schools done for the city&gt;"); "worked with" = onboarding done, a sticker deal done, or an activation together. Contacts left out. 2027 target: the user's brief of 10 Nov 2026. There is no school budget line in the Pune spend plan yet.</p>`;
  };
  const go = () => window.renderSchools(document.getElementById("schools27"));
  if (document.readyState !== "loading") go(); else document.addEventListener("DOMContentLoaded", go);
})();
