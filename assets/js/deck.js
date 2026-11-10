/* Native PowerPoint deck for the Nov & Dec 2026 page (user, 10 Nov 2026: the screenshot slides looked "bad" in Google Slides).
   Real text, tables and charts, 16:9 at 10 x 5.625 in (the Google Slides size), editable after import. Built from the same data
   the page shows: PUNE_PLAN (puneplan.js), ND_DECK (nd26.js), AOP_PLAN, HOARDINGS, NOV_GOALS, MKT_PYRAMID. export.js calls it. */
window.buildNativeDeck = async function (pptx) {
  const P = window.PUNE_PLAN, N = window.ND_DECK, G = window.NOV_GOALS || [], M = window.MKT_PYRAMID;
  if (!P || !N) return false;
  const F = "Inter", INK = "10135A", BLUE = "3643BA", MINT = "7AFFA6", GREY = "5A6080", LINE = "E3E6EF", MIST = "F2F4FA";
  const inr = v => "₹" + Math.round(v).toLocaleString("en-IN"), pc = (v, t) => (v / t * 100).toFixed(1) + "%";
  const hx = c => String(c).replace("#", "").toUpperCase();
  const W = 10, H = 5.625;
  pptx.layout = "LAYOUT_16x9"; pptx.title = "Pune: November and December 2026"; pptx.company = "Decathlon";
  let num = 0;
  const base = (title, sub, opt = {}) => {
    const s = pptx.addSlide(); num++;
    s.background = { color: opt.bg || "FFFFFF" };
    const dark = !!opt.dark;
    if (opt.band) s.addShape(pptx.ShapeType.rect, { x: 0, y: 0, w: W, h: 0.09, fill: { color: hx(opt.band) }, line: { color: hx(opt.band) } });
    s.addText(title, { x: 0.45, y: 0.22, w: 9.1, h: 0.55, fontFace: F, fontSize: 24, bold: true, color: dark ? "FFFFFF" : INK, margin: 0 });
    if (sub) s.addText(sub, { x: 0.45, y: 0.76, w: 9.1, h: 0.35, fontFace: F, fontSize: 12, color: dark ? "C9D2FF" : GREY, margin: 0 });
    s.addText(`Decathlon West · Pune · November and December 2026   ${num}`, { x: 0.45, y: 5.28, w: 9.1, h: 0.25, fontFace: F, fontSize: 8, color: dark ? "8A92BC" : "9AA2C8", align: "right", margin: 0 });
    return s;
  };
  const kpis = (s, items, y, opt = {}) => { // [[big, small, colour]]
    const gap = 0.15, w = (9.1 - gap * (items.length - 1)) / items.length;
    items.forEach(([b, t, c], i) => {
      const x = 0.45 + i * (w + gap), dark = c === "dark";
      s.addShape(pptx.ShapeType.rect, { x, y, w, h: opt.h || 0.85, fill: { color: dark ? INK : (opt.fill || MIST) }, line: { color: dark ? INK : (opt.fill || MIST) } });
      if (c && !dark) s.addShape(pptx.ShapeType.rect, { x, y, w: 0.06, h: opt.h || 0.85, fill: { color: hx(c) }, line: { color: hx(c) } });
      s.addText(b, { x: x + 0.15, y: y + 0.08, w: w - 0.2, h: 0.42, fontFace: F, fontSize: opt.big || 19, bold: true, color: dark ? "FFFFFF" : (opt.ink || INK), margin: 0 });
      s.addText(t, { x: x + 0.15, y: y + 0.48, w: w - 0.2, h: (opt.h || 0.85) - 0.52, fontFace: F, fontSize: 9.5, color: dark ? "D9DEFF" : (opt.sub || GREY), margin: 0, valign: "top" });
    });
  };
  const cell = (text, o = {}) => ({ text: String(text), options: Object.assign({ fontFace: F, fontSize: 10, color: INK, valign: "middle", margin: [2, 5, 2, 5] }, o) });
  const table = (s, head, rows, o) => {
    const hdr = head.map((h, i) => cell(h, { bold: true, fontSize: 9, color: o.headColor || GREY, fill: { color: o.headFill || MIST }, align: o.align?.[i] || "left" }));
    const body = rows.map(r => r.map((v, i) => (v && typeof v === "object" && v.text !== undefined) ? v : cell(v, { align: o.align?.[i] || "left", color: o.color || INK, fill: o.fill ? { color: o.fill } : undefined })));
    s.addTable([hdr, ...body], { x: o.x ?? 0.45, y: o.y, w: o.w ?? 9.1, colW: o.colW, rowH: o.rowH || 0.3, border: { type: "solid", pt: 0.5, color: o.border || LINE }, fontFace: F, autoPage: false });
  };
  const CH = P.channels;
  const chColors = ks => ks.map(k => hx(CH[k][1]));
  const byCh = m => Object.keys(CH).map(k => [k, P.lines.filter(x => m.includes(x.m) && x.ch === k).reduce((a, x) => a + x.v, 0)]).filter(x => x[1]).sort((a, b) => b[1] - a[1]);
  const FR = N.FR.filter(f => f.v), ALW = N.ALW, PT = N.PT, PL = N.PL;
  const COL = { bf: "111111", winter: "2E7D32", xmas: "C8102E" };

  // 1. title
  { const s = pptx.addSlide(); num++; s.background = { color: BLUE };
    s.addShape(pptx.ShapeType.rect, { x: 0, y: 4.85, w: W, h: 0.775, fill: { color: INK }, line: { color: INK } });
    s.addText("Pune", { x: 0.6, y: 1.05, w: 8.8, h: 0.5, fontFace: F, fontSize: 18, bold: true, color: MINT, margin: 0 });
    s.addText("November and December 2026", { x: 0.6, y: 1.55, w: 8.8, h: 0.9, fontFace: F, fontSize: 38, bold: true, color: "FFFFFF", margin: 0 });
    s.addText("Black Friday · Winter, Trek & Travel · Christmas · Always on", { x: 0.6, y: 2.5, w: 8.8, h: 0.4, fontFace: F, fontSize: 15, color: "D9DEFF", margin: 0 });
    s.addText(`${inr(P.totals[0])} in November · ${inr(P.totals[1])} in December · all of it planned`, { x: 0.6, y: 3.1, w: 8.8, h: 0.4, fontFace: F, fontSize: 13, color: "FFFFFF", margin: 0 });
    s.addText("Decathlon West marketing plan · " + new Date().toLocaleDateString("en-IN", { day: "numeric", month: "long", year: "numeric" }), { x: 0.6, y: 5.0, w: 8.8, h: 0.45, fontFace: F, fontSize: 11, color: "C9D2FF", margin: 0 }); }

  // 2. the plan on one page
  { const s = base("Two months, three campaigns and the always-on base", "Pune's total advertising and marketing budget, campaign by campaign", { band: BLUE });
    kpis(s, [[inr(P.totals[0]), "November, all planned", "dark"], [inr(P.totals[1]), "December, all planned", "dark"], [inr(PT), "November + December", "dark"]], 1.2);
    const cards = [...FR, ALW];
    const gap = 0.15, w = (9.1 - gap * 3) / 4;
    cards.forEach((f, i) => { const x = 0.45 + i * (w + gap), c = hx(f.col || "9AA2C8");
      s.addShape(pptx.ShapeType.rect, { x, y: 2.3, w, h: 2.6, fill: { color: "FFFFFF" }, line: { color: LINE, width: 1 } });
      s.addShape(pptx.ShapeType.rect, { x, y: 2.3, w, h: 0.09, fill: { color: c }, line: { color: c } });
      s.addText(f.n.replace(": AOPs and Kiprun events", ""), { x: x + 0.15, y: 2.5, w: w - 0.3, h: 0.55, fontFace: F, fontSize: 13, bold: true, color: INK, margin: 0, valign: "top" });
      s.addText(f.d || "November and December", { x: x + 0.15, y: 3.05, w: w - 0.3, h: 0.4, fontFace: F, fontSize: 9.5, color: GREY, margin: 0, valign: "top" });
      s.addText(inr(f.v), { x: x + 0.15, y: 3.55, w: w - 0.3, h: 0.45, fontFace: F, fontSize: 20, bold: true, color: INK, margin: 0 });
      s.addText(`${Math.round(f.v / PL * 100)}% of Pune's Nov + Dec`, { x: x + 0.15, y: 4.05, w: w - 0.3, h: 0.3, fontFace: F, fontSize: 9.5, color: GREY, margin: 0 }); }); }

  // 3. money by channel: two doughnuts
  { const s = base("Pune's money, by channel", "Where every rupee goes, month by month", { band: BLUE });
    [[0, "November"], [1, "December"]].forEach(([m, n], i) => { const d = byCh([m]), x = 0.45 + i * 4.7;
      s.addText(`${n}: ${inr(P.totals[m])}`, { x, y: 1.2, w: 4.4, h: 0.35, fontFace: F, fontSize: 14, bold: true, color: INK, margin: 0 });
      s.addChart(pptx.ChartType.doughnut, [{ name: n, labels: d.map(([k]) => CH[k][0]), values: d.map(([, v]) => v) }],
        { x, y: 1.55, w: 4.4, h: 3.6, holeSize: 55, chartColors: chColors(d.map(([k]) => k)), showLegend: true, legendPos: "r", legendFontFace: F, legendFontSize: 9, legendColor: INK,
          showPercent: true, showValue: false, dataLabelColor: "FFFFFF", dataLabelFontSize: 8, dataLabelFontFace: F }); }); }

  // 4. by campaign + AOP cost
  { const s = base("November and December, by campaign", "And the AOPs the money pays for", { band: BLUE });
    const camps = [...FR, ALW];
    s.addChart(pptx.ChartType.doughnut, [{ name: "Nov + Dec", labels: camps.map(f => f.n.split(":")[0]), values: camps.map(f => f.v) }],
      { x: 0.45, y: 1.2, w: 4.9, h: 3.9, holeSize: 55, chartColors: camps.map(f => hx(f.col || "9AA2C8")), showLegend: true, legendPos: "b", legendFontFace: F, legendFontSize: 9, legendColor: INK,
        showPercent: true, dataLabelColor: "FFFFFF", dataLabelFontSize: 9, dataLabelFontFace: F });
    const aopV = m => P.lines.filter(x => x.m === m && x.ch === "aop").reduce((a, x) => a + x.v, 0);
    const aopN = m => (window.AOP_PLAN || []).filter(a => a.state === "Pune").reduce((t, a) => t + (a.months[m] || 0), 0);
    s.addText("AOP cost", { x: 5.6, y: 1.2, w: 3.95, h: 0.35, fontFace: F, fontSize: 14, bold: true, color: INK, margin: 0 });
    [[inr(aopV(0)), `November: ${aopN(0)} AOPs`], [inr(aopV(1)), `December: ${aopN(1)} AOPs`], [inr(aopV(0) + aopV(1)), `November + December: ${aopN(0) + aopN(1)} AOPs, ${Math.round((aopV(0) + aopV(1)) / PT * 100)}% of the money`]].forEach(([b, t], i) => {
      const y = 1.65 + i * 1.1, dark = i === 2;
      s.addShape(pptx.ShapeType.rect, { x: 5.6, y, w: 3.95, h: 0.95, fill: { color: dark ? INK : MIST }, line: { color: dark ? INK : MIST } });
      s.addText(b, { x: 5.78, y: y + 0.08, w: 3.6, h: 0.45, fontFace: F, fontSize: 20, bold: true, color: dark ? "FFFFFF" : INK, margin: 0 });
      s.addText(t, { x: 5.78, y: y + 0.52, w: 3.6, h: 0.38, fontFace: F, fontSize: 10, color: dark ? "D9DEFF" : GREY, margin: 0 }); }); }

  // AOPs store by store, right after the money
  { const s = base("AOPs, November and December, store by store", "How many practice places each store adds, and what they cost (Pune spend plan)", { band: "12A150" });
    const A = (window.AOP_PLAN || []).filter(a => a.state === "Pune"), Mny = Object.fromEntries(P.aopStores.rows.map(r => [r[0], [r[1], r[2]]]));
    const rows = A.map(a => { const v = Mny[a.store] || [0, 0]; return [a.store, a.months[0], inr(v[0]), a.months[1], inr(v[1]), inr(v[0] + v[1])]; });
    const sv = i => A.reduce((t, a) => t + (Mny[a.store] || [0, 0])[i], 0), sn = i => A.reduce((t, a) => t + a.months[i], 0);
    rows.push(["Pune", sn(0), inr(sv(0)), sn(1), inr(sv(1)), inr(sv(0) + sv(1))].map((v, i) => cell(v, { bold: true, align: i ? "right" : "left" })));
    table(s, ["Store", "AOPs to add, Nov", "Nov cost", "AOPs to add, Dec", "Dec cost", "Nov + Dec cost"], rows, { y: 1.35, colW: [2.3, 1.2, 1.5, 1.2, 1.5, 1.4], rowH: 0.42, align: ["left", "right", "right", "right", "right", "right"] }); }

  // 5-6. key dates (the runway, as a list)
  { const fd = s => { const [y, m, d] = s.split("-").map(Number); return `${d} ${["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"][m - 1]}`; };
    const lane = Object.fromEntries(N.LANES);
    const its = N.ITEMS.filter(x => x.l !== "moments").slice().sort((a, b) => a.s.localeCompare(b.s));
    const rows = its.map(x => [x.s === x.e ? fd(x.s) : `${fd(x.s)} to ${fd(x.e)}`, (x.go ? "★ " : "") + x.t, lane[x.l]]);
    const per = 9;
    for (let i = 0; i < rows.length; i += per) {
      const s = base(i ? "Pune runway, continued" : "Pune runway: November and December", "Everything Pune runs, by date. ★ = goes live", { band: BLUE });
      table(s, ["When", "What", "Lane"], rows.slice(i, i + per), { y: 1.2, colW: [1.6, 5.3, 2.2], rowH: 0.36 });
    } }

  // 7-9. one slide per campaign, line by line
  const campSlide = f => {
    const dark = f.id === "bf", c = COL[f.id] || BLUE;
    const s = base(f.n, `${f.d}. ${f.what}`, dark ? { bg: "000000", dark: true } : { band: c });
    if (dark) { s.addShape(pptx.ShapeType.rect, { x: -1, y: 2.35, w: 12, h: 0.9, fill: { color: "2E5BFF", transparency: 55 }, line: { color: "2E5BFF", transparency: 100 }, rotate: -6 });
      s.addShape(pptx.ShapeType.rect, { x: 0, y: 0, w: W, h: 0.09, fill: { color: "2E5BFF" }, line: { color: "2E5BFF" } }); }
    const rows = f.ls.map(x => [x.t + (x.q ? ` (${x.q})` : ""), [P.months[x.m], x.d].filter(Boolean).join(", "), inr(x.v), pc(x.v, f.v)]);
    rows.push([cell("Pune total", { bold: true, color: dark ? "FFFFFF" : INK }), cell(`${Math.round(f.v / PL * 100)}% of Pune's Nov + Dec`, { color: dark ? "C9D2FF" : GREY }), cell(inr(f.v), { bold: true, align: "right", color: dark ? "FFFFFF" : INK }), cell("100%", { align: "right", color: dark ? "FFFFFF" : INK })]);
    table(s, ["Line", "When", "₹", "Share of the campaign"], rows, { y: 1.35, w: 6.4, colW: [2.85, 1.55, 1.0, 1.0], rowH: 0.36, align: ["left", "left", "right", "right"],
      color: dark ? "FFFFFF" : INK, headFill: dark ? "1A1A1A" : MIST, headColor: dark ? "9DB4FF" : GREY, fill: dark ? "0A0A0A" : undefined, border: dark ? "333333" : LINE });
    const side = [[inr(f.v), "Pune budget for the campaign"], [`${Math.round(f.v / PL * 100)}%`, "of Pune's November + December"]];
    if (f.brings && f.brings !== "-") side.push([f.brings.split(":")[0].replace("Turnover goal ", ""), "turnover goal, West"]);
    side.forEach(([b, t], i) => { const y = 1.35 + i * 1.0, big = b.length > 12 ? 13 : 17;
      s.addShape(pptx.ShapeType.rect, { x: 7.05, y, w: 2.5, h: 0.85, fill: { color: dark ? "2E5BFF" : (i ? MIST : INK) }, line: { color: dark ? "2E5BFF" : (i ? MIST : INK) } });
      s.addText(b, { x: 7.18, y: y + 0.06, w: 2.3, h: 0.45, fontFace: F, fontSize: big, bold: true, color: dark || !i ? "FFFFFF" : INK, margin: 0 });
      s.addText(t, { x: 7.18, y: y + 0.48, w: 2.3, h: 0.33, fontFace: F, fontSize: 9, color: dark || !i ? "E1E6FF" : GREY, margin: 0 }); });
    if (f.inf) s.addText("Influencers: " + f.inf.split(/; (?=Gujarat|MP)/)[0], { x: 7.05, y: 1.35 + side.length * 1.0, w: 2.5, h: 1.2, fontFace: F, fontSize: 9, color: dark ? "C9D2FF" : GREY, margin: 0, valign: "top" });
    if (dark) s.addText("We are not allowed to say “deals up to 40% off” or any flat percentage off.", { x: 0.45, y: 4.75, w: 6.4, h: 0.35, fontFace: F, fontSize: 10, bold: true, color: "FFD24D", margin: 0 });
  };
  FR.forEach(campSlide);

  // 11. influencers
  { const s = base("Influencers, November and December", "Pune's paid creators, campaign by campaign", { band: "C2185B" });
    const fd = s => { const [, m, d] = s.split("-").map(Number); return `${d} ${["", "", "", "", "", "", "", "", "", "", "Nov", "Dec"][m - 1] || ""}`; };
    const rs = P.influencers.filter(r => r.s <= "2026-12-31" && r.e >= "2026-11-01");
    const rows = rs.map(r => [r.t, `${fd(r.s)} to ${fd(r.e)}`, r.n + (r.x ? ` ${r.x}` : ""), inr(r.v), inr(r.v / r.n)]);
    rows.push(["All", "", String(rs.reduce((a, r) => a + r.n, 0)), inr(rs.reduce((a, r) => a + r.v, 0)), ""].map((v, i) => cell(v, { bold: true, align: i > 1 ? "right" : "left" })));
    table(s, ["Campaign", "Dates", "Influencers", "₹", "Per influencer"], rows, { y: 1.35, colW: [3.4, 1.8, 1.3, 1.3, 1.3], rowH: 0.42, align: ["left", "left", "right", "right", "right"] }); }

  // 12. hoardings
  { const s = base("Hoardings: Pune, 7 boards", "Winter comms up by 15 November at the latest", { band: "10263F" });
    const pu = (window.HOARDINGS || []).filter(h => h.city === "Pune");
    const rows = pu.map((h, i) => [String(i + 1), h.loc, h.size, inr(h.cost)]);
    rows.push(["", cell("All 7 boards, a month", { bold: true }), "", cell(inr(pu.reduce((a, h) => a + h.cost, 0)), { bold: true, align: "right" })]);
    table(s, ["#", "Location", "Size", "₹ a month"], rows, { y: 1.35, colW: [0.45, 5.6, 1.5, 1.55], rowH: 0.38, align: ["center", "left", "left", "right"] }); }

  // 13. the marketing pyramid
  if (M) { const s = base("How we do marketing, from the ground up", "The basics carry everything; only then reach; only then one idea that makes noise", { band: BLUE });
    const tiers = [[M.top.h, M.top.s, "C0392B", 1.2, 2.2], [M.mid.h, M.mid.items.join(" + "), "4F5BD5", 2.15, 3.2], [M.base.h, M.base.items.join(" + "), "2920AD", 3.1, 4.2]];
    tiers.forEach(([h, t, c, y, w]) => { const x = 0.45 + (4.2 - w) / 2;
      s.addShape(pptx.ShapeType.rect, { x, y, w, h: 0.85, fill: { color: c }, line: { color: c } });
      s.addText([{ text: h, options: { bold: true, fontSize: 14, breakLine: true } }, { text: t, options: { fontSize: 9 } }], { x, y, w, h: 0.85, fontFace: F, color: "FFFFFF", align: "center", valign: "middle", margin: 4 }); });
    s.addShape(pptx.ShapeType.rect, { x: 0.45, y: 4.05, w: 4.2, h: 0.35, fill: { color: INK }, line: { color: INK } });
    s.addText(M.circle.core, { x: 0.45, y: 4.05, w: 4.2, h: 0.35, fontFace: F, fontSize: 10, bold: true, color: MINT, align: "center", margin: 0 });
    const txt = [
      { text: `3  ${M.top.h}: ${M.top.s.toLowerCase()}`, options: { bold: true, color: "C0392B", fontSize: 12, breakLine: true } }, { text: M.top.p, options: { fontSize: 10, breakLine: true } },
      ...M.top.ideas.map(x => ({ text: "• " + x, options: { fontSize: 10, breakLine: true } })), { text: " ", options: { fontSize: 6, breakLine: true } },
      { text: `2  ${M.mid.h}: ${M.mid.items.join(", ").toLowerCase()}`, options: { bold: true, color: "4F5BD5", fontSize: 12, breakLine: true } }, { text: M.mid.p, options: { fontSize: 10, breakLine: true } }, { text: " ", options: { fontSize: 6, breakLine: true } },
      { text: `1  ${M.base.h}: ${M.base.s.toLowerCase()}`, options: { bold: true, color: "2920AD", fontSize: 12, breakLine: true } }, { text: M.base.p, options: { fontSize: 10 } }];
    s.addText(txt, { x: 5.0, y: 1.2, w: 4.55, h: 3.9, fontFace: F, color: INK, valign: "top", margin: 0 }); }

  // 14. November budget, line by line (bar chart)
  { const s = base("November budget, Pune, line by line", `${inr(P.totals[0])}: every rupee is a line in the plan`, { band: BLUE });
    const ls = P.lines.filter(x => x.m === 0).slice().sort((a, b) => a.v - b.v);
    s.addChart(pptx.ChartType.bar, [{ name: "November", labels: ls.map(x => `${x.t.replace("Coupon cards after billing: basket over ₹2,799 gets a product free", "Coupon cards")} (${x.camp === "Winter & Travel" ? "Winter" : x.camp})`), values: ls.map(x => +(x.v / 1e5).toFixed(2)) }],
      { x: 0.45, y: 1.2, w: 9.1, h: 3.95, barDir: "bar", chartColors: [BLUE], catAxisLabelFontFace: F, catAxisLabelFontSize: 9, catAxisLabelColor: INK, valAxisHidden: true, valGridLine: { style: "none" },
        showValue: true, dataLabelFormatCode: '"₹"0.00" L"', dataLabelFontFace: F, dataLabelFontSize: 9, dataLabelColor: INK, dataLabelPosition: "outEnd", barGapWidthPct: 45 }); }

  // 15. Q4 goals, Pune stores
  if (G.length) { const s = base("Q4 turnover goals: Black Friday and Christmas", "Pune stores, 2025 against the 2026 goal (₹ Cr, SD piloting sheet)", { band: "111111" });
    const cr = v => v == null ? "-" : v.toFixed(2);
    const pu = G.filter(g => g[1] === "Pune");
    const rows = pu.map(g => [g[0], cr(g[2]), cr(g[4]), cr(g[5]), cr(g[6]), cr(g[7])]);
    const sm = i => pu.reduce((a, g) => a + (g[i] || 0), 0);
    rows.push(["Pune", cr(sm(2)), cr(sm(4)), cr(sm(5)), cr(sm(6)), cr(sm(7))].map((v, i) => cell(v, { bold: true, align: i ? "right" : "left" })));
    table(s, ["Store", "Q4 challenge", "Black Friday 2025", "Black Friday 2026 goal", "Christmas 2025", "Christmas 2026 goal"], rows, { y: 1.35, colW: [1.9, 1.4, 1.45, 1.55, 1.35, 1.45], rowH: 0.42, align: ["left", "right", "right", "right", "right", "right"] }); }

  // 16. summary
  { const s = base("November and December in one view", "Pune", { band: BLUE });
    const rows = [...FR, ALW].map(f => [f.n.split(":")[0], f.d || "Nov and Dec", inr(f.v), `${Math.round(f.v / PL * 100)}%`, (f.inf || "-").replace(/;.*$/, "")]);
    rows.push(["Pune", "", inr(PL), "100%", "95 paid + 7 on barter"].map((v, i) => cell(v, { bold: true, align: i === 2 || i === 3 ? "right" : "left" })));
    table(s, ["Campaign", "When", "Pune ₹", "Share", "Influencers"], rows, { y: 1.35, colW: [2.0, 2.2, 1.4, 0.8, 2.7], rowH: 0.5, align: ["left", "left", "right", "right", "left"] }); }
  return true;
};
