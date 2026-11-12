/* Kolkata (East) 2027 calendar. Data: the user's "Turnover trend" sheet screenshot (12 Nov 2026, 512 x 319 px), read by eye:
   the campaign calendar, campaign days and the growth rows are clear; the Omni TO rows are blurry and marked "check".
   Editable on the live site (user, 12 Nov 2026): Edit -> change any cell -> Save with the edit PIN. Saved for everyone in Supabase
   (project Cosora, table public.west_plan_docs, id "kolkata2027", written only through public.save_west_plan_doc with the PIN).
   If the database cannot be reached, the page shows the data below. */
window.KOL27_DEFAULT = {
  v: 1,
  title: "Kolkata 2027",
  months: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
  sections: [
    { id: "cal", title: "The calendar", sub: "Seasons, the country's commercial campaigns and Kolkata's own moments. Campaign dates as in the sheet; set the 2027 dates in edit mode.",
      rows: [
        { id: "season", label: "Season", kind: "band", cells: ["AW (W40-W8)", "AW (W40-W8)", "Summer (W9-19)", "Summer (W9-19)", "Summer (W9-19)", "Monsoon (W20-33)", "Monsoon (W20-33)", "Monsoon (W20-33)", "Monsoon (W20-33)", "AW (W40-W8)", "AW (W40-W8)", "AW (W40-W8)"] },
        { id: "country", label: "Country commercial campaigns", kind: "camp", cells: ["Republic Day Sale, 23-26 Jan (mandatory)", "", "Summer Festive Sale, 26-30 Mar (mandatory)", "", "Decathlon Sports Utsav, 23-24 May (mandatory)", "World Cup, Second Life bazaar, back to school (mandatory)", "Decathlon Anniversary, 24-26 Jul (mandatory)", "", "Festive Sale, 19-21 Sep", "Diwali, 10-12 Oct (mandatory)", "Black Friday Sale, 26-30 Nov (mandatory)", "Christmas Sale, 17-25 Dec (mandatory)"] },
        { id: "local", label: "Local city campaigns", kind: "local", cells: ["", "", "", "Bengali New Year, 12-15 Apr", "", "", "", "", "Durga Puja (branding)", "", "", ""] },
        { id: "days", label: "Campaign days", kind: "num", cells: ["3", "", "3", "4", "3", "10", "3", "3", "3", "3", "3", "9"] },
        { id: "plan", label: "Kolkata 2027: what we do", kind: "text", cells: ["", "", "", "", "", "", "", "", "", "", "", ""] }
      ] },
    { id: "budget", title: "Budget 2027", sub: "Type the budget in edit mode, in rupees. Totals add up on their own.", money: true, total: true,
      rows: [
        { id: "b_dig", label: "Digital (paid)", kind: "money", cells: Array(12).fill("") },
        { id: "b_ooh", label: "Hoardings and OOH", kind: "money", cells: Array(12).fill("") },
        { id: "b_inf", label: "Influencers", kind: "money", cells: Array(12).fill("") },
        { id: "b_ins", label: "In-store and in-mall comms", kind: "money", cells: Array(12).fill("") },
        { id: "b_evt", label: "Events and AOPs", kind: "money", cells: Array(12).fill("") },
        { id: "b_oth", label: "Other", kind: "money", cells: Array(12).fill("") }
      ] },
    { id: "weeks", title: "Omni turnover, week by week", sub: "₹ Cr a week, 2024, 2025 and 2026 (to week 46, which is still running). Read off the weekly chart shared on 12 Nov 2026, so each value is approximate to about ₹5 lakh; fix any week in edit mode.", check: true, total: true, weekly: true, cols: Array.from({ length: 53 }, (_, i) => "W" + (i + 1)),
      rows: [
        { id: "w26", label: "2026", kind: "cr", cells: ["3.50", "4.05", "2.75", "1.95", "1.50", "1.30", "1.20", "1.22", "1.15", "1.05", "1.15", "1.40", "1.30", "1.48", "1.52", "1.48", "1.23", "1.65", "1.68", "1.97", "1.83", "1.57", "1.38", "1.35", "1.28", "1.40", "1.35", "1.38", "1.12", "1.35", "1.25", "1.28", "1.32", "1.12", "1.18", "1.42", "1.55", "1.55", "1.83", "2.32", "2.38", "2.38", "1.75", "2.17", "2.27", "1.32", "", "", "", "", "", "", ""] },
        { id: "w25", label: "2025", kind: "cr", cells: ["1.85", "2.05", "1.65", "1.60", "1.20", "1.05", "1.00", "1.00", "0.95", "1.10", "0.95", "1.15", "1.10", "1.20", "1.10", "1.00", "0.80", "1.00", "0.90", "0.90", "1.08", "1.30", "1.05", "0.83", "1.10", "0.95", "1.00", "1.10", "1.05", "0.90", "1.05", "1.10", "1.15", "1.00", "1.05", "1.30", "1.20", "1.45", "1.58", "1.10", "1.50", "1.57", "1.20", "1.30", "1.80", "2.63", "2.48", "3.42", "3.30", "3.60", "3.97", "4.95", "3.50"] },
        { id: "w24", label: "2024", kind: "cr", cells: ["1.75", "1.85", "1.95", "1.55", "0.95", "1.00", "0.92", "0.82", "0.95", "1.05", "1.05", "1.20", "0.95", "0.97", "0.98", "0.77", "0.85", "1.10", "1.42", "1.38", "1.25", "1.00", "1.05", "0.97", "1.10", "1.02", "1.25", "1.00", "1.00", "1.05", "1.08", "1.00", "0.95", "0.85", "1.00", "1.02", "1.12", "1.32", "1.40", "1.70", "1.20", "1.40", "1.30", "1.30", "1.40", "1.55", "2.10", "3.15", "3.12", "3.60", "3.75", "2.95", "1.85"] }
      ] },
    { id: "kpi", title: "How 2025 went", sub: "From the sheet. Growth on the year before; omni turnover in the campaign days.",
      rows: [
        { id: "k_m", label: "Monthly growth, 2025", kind: "pct", cells: ["12%", "15%", "10%", "3%", "-1%", "0%", "1%", "5%", "4%", "5%", "24%", "21%"], total: "9.12%", check: "total read as 5.12% in the screenshot; the yearly totals give 9.1%" },
        { id: "k_c", label: "Country omni growth (campaign)", kind: "pct", cells: ["-1%", "", "-6%", "13%", "32%", "", "", "24%", "21%", "22%", "18%", "17%"] },
        { id: "k_e", label: "Omni growth, East (campaign)", kind: "pct", cells: ["11%", "", "34%", "26%", "49%", "", "", "32%", "32%", "77%", "15%", "46%"] },
        { id: "k_t", label: "Omni turnover (campaign)", kind: "num", cells: ["3.9 Cr", "", "4.6 Cr", "5.2 Cr", "5 Cr", "", "", "4.7 Cr", "4.2 Cr", "4.6 Cr", "10.8 Cr", "25.7 Cr"] },
        { id: "k_i", label: "In-store growth (zone, campaign)", kind: "pct", cells: ["8%", "", "26%", "22%", "29%", "", "", "25%", "4%", "44%", "16%", "31%"] }
      ] },
    { id: "to", title: "Omni turnover by month", sub: "₹ Cr, approximate: the screenshot is too small to read every digit. The yearly totals check out (2023 ₹273.3 Cr, 2024 ₹321.1 Cr, 2025 ₹350.4 Cr); fix any month in edit mode.", check: true, total: true, chart: true,
      rows: [
        { id: "t25", label: "2025", kind: "cr", cells: ["29.1", "19.1", "25.9", "25.6", "27.8", "25.8", "26.8", "25.8", "23.5", "25.5", "43.3", "52.4"] },
        { id: "t24", label: "2024", kind: "cr", cells: ["20.1", "16.7", "23.8", "24.9", "28.0", "26.8", "26.3", "29.4", "22.6", "24.3", "34.8", "43.3"] },
        { id: "t23", label: "2023", kind: "cr", cells: ["23.0", "14.9", "20.8", "21.9", "23.4", "22.0", "21.5", "20.1", "19.3", "21.5", "27.9", "37.0"] }
      ] }
  ],
  notes: ""
};

(() => {
  const SB = { url: "https://vxdhhgdfubqedfpwfyrb.supabase.co", key: "sb_publishable_5DJXCUF-gyul7S71vHAHQQ_oSYZHZmP", id: "kolkata2027" }; // Supabase project Cosora (hybrid-flow did not answer on 12 Nov)
  const $ = (s, r = document) => r.querySelector(s), $$ = (s, r = document) => [...r.querySelectorAll(s)];
  const esc = s => String(s ?? "").replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
  const clone = o => JSON.parse(JSON.stringify(o));
  const num = s => { const n = parseFloat(String(s ?? "").replace(/[₹,\s]|Cr|L/gi, "")); return isFinite(n) ? n : null; };
  const inr = v => "₹" + Math.round(v).toLocaleString("en-IN");
  let doc = clone(window.KOL27_DEFAULT), editing = false, savedAt = null;
  const status = t => { const el = $("#kolStatus"); if (el) el.textContent = t; };

  const cellView = (row, v) => {
    if (row.kind === "money") { const n = num(v); return n == null ? "" : inr(n); }
    if (row.kind === "pct" && /^-/.test(String(v).trim())) return `<span class="neg">${esc(v)}</span>`;
    return esc(v);
  };
  function table(sec) {
    const M = sec.cols || doc.months, N = M.length, tot = sec.total;
    const rowsHtml = sec.rows.map(r => {
      let tds = "";
      if (!editing && r.kind === "band") { // merge equal neighbours into one band
        for (let i = 0; i < N;) { let j = i; while (j + 1 < N && r.cells[j + 1] === r.cells[i]) j++;
          const t = r.cells[i], cls = /monsoon/i.test(t) ? "mon" : /summer/i.test(t) ? "sum" : /aw|winter/i.test(t) ? "aw" : "";
          tds += `<td colspan="${j - i + 1}" class="band ${cls}">${esc(t)}</td>`; i = j + 1; }
      } else {
        tds = r.cells.map((v, i) => `<td class="${r.kind} ${v === "" ? "kblank" : ""}" data-r="${r.id}" data-i="${i}" ${editing ? 'contenteditable="true"' : ""}>${editing ? esc(v) : cellView(r, v)}</td>`).join("");
      }
      let t = "";
      if (tot) { const s = r.cells.reduce((a, v) => a + (num(v) || 0), 0); t = `<td class="tot">${r.total ? esc(r.total) : r.kind === "money" ? (s ? inr(s) : "") : r.kind === "cr" ? (s ? "₹" + s.toFixed(1) + " Cr" : "") : ""}</td>`; }
      return `<tr><th scope="row" ${editing ? `contenteditable="true" data-lab="${r.id}"` : ""}>${esc(r.label)}${r.check && !editing ? `<small title="${esc(r.check)}">check</small>` : ""}</th>${tds}${t}</tr>`;
    }).join("");
    let foot = "";
    if (sec.money) { const ms = M.map((_, i) => sec.rows.reduce((a, r) => a + (num(r.cells[i]) || 0), 0)), all = ms.reduce((a, b) => a + b, 0);
      foot = `<tr class="sum"><th scope="row">Total budget</th>${ms.map(v => `<td>${v ? inr(v) : "-"}</td>`).join("")}<td class="tot">${all ? inr(all) : "-"}</td></tr>`; }
    return `<div class="sb-wrap"><table class="kol-t ${sec.id}${sec.cols ? " wide" : ""}"><thead><tr><th></th>${M.map(m => `<th>${m}</th>`).join("")}${tot ? '<th class="yr">Year</th>' : ""}</tr></thead><tbody>${rowsHtml}${foot}</tbody></table></div>`;
  }
  function chart(sec) {
    const C = ["#3643BA", "#E0A100", "#9AA2C8"], W = 1000, H = 220, P = 30;
    const vals = sec.rows.map(r => r.cells.map(num)), all = vals.flat().filter(v => v != null), max = Math.max(...all, 1), min = Math.min(...all, 0) * 0.9;
    const x = i => P + i * (W - 2 * P) / 11, y = v => H - P - (v - min) / (max - min) * (H - 2 * P);
    return `<div class="kol-chart"><svg viewBox="0 0 ${W} ${H}" role="img" aria-label="Omni turnover by month, ${sec.rows.map(r => r.label).join(", ")}">
      ${doc.months.map((m, i) => `<text x="${x(i)}" y="${H - 6}" text-anchor="middle" class="ax">${m}</text>`).join("")}
      ${vals.map((vs, k) => `<polyline fill="none" stroke="${C[k]}" stroke-width="${k ? 2 : 3}" points="${vs.map((v, i) => v == null ? "" : `${x(i)},${y(v)}`).join(" ")}"/>${vs.map((v, i) => v == null ? "" : `<circle cx="${x(i)}" cy="${y(v)}" r="${k ? 3 : 4}" fill="${C[k]}"/>${k ? "" : `<text x="${x(i)}" y="${y(v) - 9}" text-anchor="middle" class="lb">${v}</text>`}`).join("")}`).join("")}
    </svg><p class="kol-key">${sec.rows.map((r, k) => `<span><i style="background:${C[k]}"></i>${esc(r.label)}</span>`).join("")}</p></div>`;
  }
  function weekChart(sec) {
    const C = { "2026": "#3643BA", "2025": "#F28C28", "2024": "#A7AEC1" }, W = 1200, H = 360, PL = 56, PR = 16, PT = 18, PB = 44, N = 53;
    const vals = sec.rows.map(r => r.cells.map(num)), max = Math.ceil(Math.max(...vals.flat().filter(v => v != null), 1));
    const x = i => PL + i * (W - PL - PR) / (N - 1), y = v => PT + (1 - v / max) * (H - PT - PB);
    const grid = Array.from({ length: max + 1 }, (_, k) => `<line x1="${PL}" x2="${W - PR}" y1="${y(k)}" y2="${y(k)}" class="gl"/><text x="${PL - 8}" y="${y(k) + 4}" text-anchor="end" class="ax">₹${k} Cr</text>`).join("");
    const ticks = Array.from({ length: N }, (_, i) => i).filter(i => i % 4 === 0 || i === N - 1).map(i => `<text x="${x(i)}" y="${H - PB + 18}" text-anchor="middle" class="ax">W${i + 1}</text>`).join("");
    const QB = [[0, 12, "Q1"], [13, 25, "Q2"], [26, 38, "Q3"], [39, 52, "Q4"]].map(([a, b, q], k) => `<rect x="${x(a) - 4}" y="${PT}" width="${x(b) - x(a) + 8}" height="${H - PT - PB}" class="${k % 2 ? "qb2" : "qb"}"/><text x="${(x(a) + x(b)) / 2}" y="${H - 8}" text-anchor="middle" class="qt">${q}</text>`).join("");
    const lines = sec.rows.map((r, k) => { const c = C[r.label] || ["#3643BA", "#F28C28", "#A7AEC1"][k], vs = vals[k];
      const pts = vs.map((v, i) => v == null ? null : `${x(i).toFixed(1)},${y(v).toFixed(1)}`).filter(Boolean).join(" ");
      return `<polyline points="${pts}" fill="none" stroke="${c}" stroke-width="${k ? 2.2 : 3.2}" stroke-linejoin="round" stroke-linecap="round"/>` +
        vs.map((v, i) => v == null ? "" : `<circle cx="${x(i)}" cy="${y(v)}" r="${k ? 2.6 : 3.4}" fill="#fff" stroke="${c}" stroke-width="2"><title>${esc(r.label)}, week ${i + 1}: ₹${v.toFixed(2)} Cr</title></circle>`).join(""); }).reverse().join("");
    // peaks and the latest 2026 week, labelled
    const mark = (k, i, txt, dy) => { const v = vals[k][i]; return v == null ? "" : `<text x="${x(i) > W - 140 ? x(i) - 8 : x(i) < PL + 80 ? x(i) + 4 : x(i)}" y="${y(v) + dy}" text-anchor="${x(i) > W - 140 ? "end" : x(i) < PL + 80 ? "start" : "middle"}" class="pk" style="fill:${C[sec.rows[k].label] || "#3643BA"}">${txt}</text>`; };
    const k26 = sec.rows.findIndex(r => r.label === "2026"), k25 = sec.rows.findIndex(r => r.label === "2025");
    const last26 = k26 < 0 ? -1 : vals[k26].reduce((a, v, i) => v != null ? i : a, -1);
    const pk = (k) => vals[k].reduce((b, v, i) => v != null && v > vals[k][b] ? i : b, 0);
    let marks = "";
    if (k26 >= 0) marks += mark(k26, pk(k26), `W${pk(k26) + 1}: ₹${vals[k26][pk(k26)].toFixed(2)} Cr`, -12);
    if (k25 >= 0) marks += mark(k25, pk(k25), `W${pk(k25) + 1}: ₹${vals[k25][pk(k25)].toFixed(2)} Cr`, -12);
    // year-on-year: 2026 against 2025 over the same full weeks (the running week left out)
    let yoy = "";
    if (k26 >= 0 && k25 >= 0 && last26 > 0) { const n = last26, a = vals[k26].slice(0, n).reduce((s, v) => s + (v || 0), 0), b = vals[k25].slice(0, n).reduce((s, v) => s + (v || 0), 0);
      const q4a = vals[k26].slice(39, n).reduce((s, v) => s + (v || 0), 0), q4b = vals[k25].slice(39, n).reduce((s, v) => s + (v || 0), 0);
      yoy = `<div class="kol-wk-kpi"><div class="t"><b>₹${a.toFixed(1)} Cr</b><span>2026, weeks 1 to ${n}</span></div><div><b>₹${b.toFixed(1)} Cr</b><span>2025, the same weeks</span></div>
        <div class="${a >= b ? "up" : "dn"}"><b>${a >= b ? "+" : ""}${((a / b - 1) * 100).toFixed(1)}%</b><span>2026 against 2025, weeks 1 to ${n}</span></div>
        ${n > 39 ? `<div class="${q4a >= q4b ? "up" : "dn"}"><b>${q4a >= q4b ? "+" : ""}${((q4a / q4b - 1) * 100).toFixed(1)}%</b><span>Q4 so far, weeks 40 to ${n}</span></div>` : ""}
        <div><b>₹${vals[k25].slice(n).reduce((s, v) => s + (v || 0), 0).toFixed(1)} Cr</b><span>what 2025 did from week ${n + 1} to 53: the bar for the rest of 2026</span></div></div>`; }
    return `${yoy}<div class="kol-chart kol-wk"><svg viewBox="0 0 ${W} ${H}" role="img" aria-label="Omni turnover by week, 2024 to 2026">${QB}${grid}${ticks}${lines}${marks}</svg>
      <p class="kol-key">${sec.rows.map((r, k) => `<span><i style="background:${C[r.label] || "#3643BA"}"></i>${esc(r.label)}</span>`).join("")}<span class="note">Shaded bands are the quarters; hover a dot for its week.</span></p></div>`;
  }
  function render() {
    const el = $("#kolBody"); if (!el) return;
    document.body.classList.toggle("kol-editing", editing);
    el.innerHTML = doc.sections.map(sec => `<section class="kol-sec" id="k-${sec.id}"><h2 class="display-s">${esc(sec.title)}</h2>${sec.sub ? `<p class="kol-sub">${esc(sec.sub)}</p>` : ""}
        ${sec.weekly && !editing ? weekChart(sec) : sec.chart && !editing ? chart(sec) : ""}${sec.weekly && !editing ? `<details class="panel pm-d kol-wk-d"><summary><b>Every week, as a table</b><span>53 weeks a year; edit any week in edit mode</span><i class="nd-chev" aria-hidden="true"></i></summary><div class="kol-panel">${table(sec)}</div></details>` : `<div class="panel kol-panel">${table(sec)}</div>`}</section>`).join("") +
      `<section class="kol-sec" id="k-notes"><h2 class="display-s">Notes</h2><div class="panel kol-notes" ${editing ? 'contenteditable="true"' : ""} id="kolNotes">${esc(doc.notes) || (editing ? "" : '<span class="kblank-note">No notes yet. Click Edit to add some.</span>')}</div></section>`;
    $("#kolEdit").hidden = editing; $("#kolSave").hidden = !editing; $("#kolCancel").hidden = !editing; $("#kolPinWrap").hidden = !editing;
  }
  function collect() {
    const d = clone(doc);
    $$("#kolBody td[data-r]").forEach(td => { const r = d.sections.flatMap(s => s.rows).find(x => x.id === td.dataset.r); if (r) r.cells[+td.dataset.i] = td.innerText.trim(); });
    $$("#kolBody th[data-lab]").forEach(th => { const r = d.sections.flatMap(s => s.rows).find(x => x.id === th.dataset.lab); if (r) r.label = th.innerText.trim() || r.label; });
    const n = $("#kolNotes"); if (n) d.notes = n.innerText.trim();
    return d;
  }
  async function load() {
    try {
      const r = await fetch(`${SB.url}/rest/v1/west_plan_docs?id=eq.${SB.id}&select=data,updated_at`, { headers: { apikey: SB.key } });
      if (!r.ok) throw new Error(r.status);
      const j = await r.json();
      if (j[0] && j[0].data && j[0].data.sections) { doc = j[0].data;
        window.KOL27_DEFAULT.sections.forEach((d, k) => { if (!doc.sections.some(x => x.id === d.id)) doc.sections.splice(Math.min(k, doc.sections.length), 0, clone(d)); }); savedAt = j[0].updated_at; status(`Last saved ${new Date(savedAt).toLocaleString("en-IN", { day: "numeric", month: "short", hour: "2-digit", minute: "2-digit" })}`); }
      else status("Showing the data from the sheet. Nothing saved yet.");
    } catch (e) { status("Showing the data from the sheet (the saved version could not be loaded)."); }
    render();
  }
  async function save() {
    const pin = $("#kolPin").value.trim();
    if (!pin) { status("Enter the edit PIN to save."); $("#kolPin").focus(); return; }
    const d = collect();
    status("Saving...");
    try {
      const r = await fetch(`${SB.url}/rest/v1/rpc/save_west_plan_doc`, { method: "POST", headers: { apikey: SB.key, "Content-Type": "application/json" }, body: JSON.stringify({ p_id: SB.id, p_pin: pin, p_data: d }) });
      if (!r.ok) { const t = await r.text(); throw new Error(/PIN/i.test(t) ? "wrong PIN" : "the database said no (" + r.status + ")"); }
      doc = d; editing = false; try { sessionStorage.setItem("kolPin", pin); } catch (e) {}
      status(`Saved for everyone at ${new Date().toLocaleTimeString("en-IN", { hour: "2-digit", minute: "2-digit" })}.`); render();
    } catch (e) { status("Not saved: " + e.message + ". Your changes are still on screen."); }
  }
  function backup() {
    const a = document.createElement("a"); a.href = URL.createObjectURL(new Blob([JSON.stringify(editing ? collect() : doc, null, 2)], { type: "application/json" }));
    a.download = "kolkata-2027.json"; document.body.append(a); a.click(); setTimeout(() => { URL.revokeObjectURL(a.href); a.remove(); }, 1000);
  }
  document.addEventListener("DOMContentLoaded", () => {
    $("#kolEdit").addEventListener("click", () => { editing = true; render(); try { const p = sessionStorage.getItem("kolPin"); if (p) $("#kolPin").value = p; } catch (e) {} status("Editing: click any cell and type. Then Save."); });
    $("#kolCancel").addEventListener("click", () => { editing = false; render(); status("Changes discarded."); });
    $("#kolSave").addEventListener("click", save);
    $("#kolBackup").addEventListener("click", backup);
    $("#kolBody").addEventListener("keydown", e => { if (e.key === "Enter" && !e.shiftKey && e.target.matches("td, th")) { e.preventDefault(); e.target.blur(); } });
    render(); load();
  });
})();
