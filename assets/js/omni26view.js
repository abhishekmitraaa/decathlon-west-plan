/* Omni and digital 2026 by market (window.OMNI26 from omni26.js). Renders into every element with [data-omni26]:
   index.html (Q4 scoreboard dropdown) and mission2027.html (2026 by market). */
(() => {
  const O = window.OMNI26;
  if (!O) return;
  const esc = s => String(s ?? "").replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
  const Cr = n => "₹" + (n / 1e7).toFixed(2) + " Cr", L = n => "₹" + (n / 1e5).toFixed(1) + " L", pc = (a, b) => b ? (a / b * 100).toFixed(1) + "%" : "–";
  const MK = [["Pune", "Pune", "var(--pune)"], ["Gujarat", "Gujarat", "var(--guj)"], ["MP", "Madhya Pradesh", "var(--mp)"]];
  const MON = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov"];
  const CHN = [["POS", "Tills (POS)", "in"], ["SCO", "Self checkout", "in"], ["STOREASSISTED", "SAS (store assisted)", "dig"], ["Scan and Go", "Scan & Go", "in"],
    ["OUTOFCATCHMENT", "Out of catchment", "out"], ["B2B_CORE", "B2B", "out"], ["CATCHMENTORDER", "Catchment orders", "out"],
    ["RESERVE&COLLECT", "Reserve & collect", "out"], ["CLICK&COLLECT", "Click & collect", "out"], ["QC_EXPRESS", "Express delivery", "out"]];

  const all = () => {
    const rows = [["Pune", O.bu.Pune, "var(--pune)"], ["Ahmedabad", O.cl.Ahmedabad, "var(--guj)", 1], ["Surat, Rajkot, Baroda", O.cl["Surat, Rajkot, Baroda"], "var(--guj)", 1],
      ["Gujarat", O.bu.Gujarat, "var(--guj)"], ["Madhya Pradesh", O.bu.MP, "var(--mp)"]];
    const W = O.west, mx = Math.max(...MK.map(([k]) => O.bu[k].omni));
    return `<div class="cq-kpis om-kpis">${MK.map(([k, n, c]) => `<div style="--c:${c}"><b>${Cr(O.bu[k].omni)}</b><span>${n} omni · digital ${Cr(O.bu[k].dig)} (${pc(O.bu[k].dig, O.bu[k].omni)})</span></div>`).join("")}
        <div class="tot"><b>${Cr(W.omni)}</b><span>West omni · digital ${Cr(W.dig)} (${pc(W.dig, W.omni)})</span></div></div>
      <div class="om-bars">${MK.map(([k, n, c]) => { const b = O.bu[k]; return `<div class="om-bar"><span>${n}</span><div class="om-track" style="--w:${b.omni / mx * 100}%"><i class="in" style="flex:${b.in - b.ch.STOREASSISTED} 1 0" title="In-store (without SAS): ${Cr(b.in - b.ch.STOREASSISTED)}"></i><i class="dg" style="flex:${b.dig} 1 0;background:${c}" title="Digital: ${Cr(b.dig)}"></i></div><b>${pc(b.dig, b.omni)} digital</b></div>`; }).join("")}
        <p class="om-key"><span><i class="in"></i>In-store (tills, self checkout, Scan & Go)</span><span><i class="dg"></i>Digital (out-store + SAS)</span></p></div>
      <div class="sb-wrap"><table class="om-t"><thead><tr><th>Market</th><th>Omni</th><th>In-store</th><th>Out-store</th><th>Digital</th><th>Digital share</th><th>SAS</th><th>Express</th><th>Out of catchment</th><th>Returning (in-store)</th></tr></thead><tbody>
        ${rows.map(([n, b, c, sub]) => `<tr class="${sub ? "sub" : ""}"><td><i style="background:${c}"></i>${esc(n)}</td><td><b>${Cr(b.omni)}</b></td><td>${Cr(b.in)}</td><td>${Cr(b.out)}</td><td><b>${Cr(b.dig)}</b></td><td>${pc(b.dig, b.omni)}</td><td>${Cr(b.ch.STOREASSISTED)}</td><td>${b.ch.QC_EXPRESS >= 1e4 ? L(b.ch.QC_EXPRESS) : "–"}</td><td>${Cr(b.ch.OUTOFCATCHMENT)}</td><td>${b.ret}%</td></tr>`).join("")}
        <tr class="tot"><td>West</td><td>${Cr(W.omni)}</td><td>${Cr(W.in)}</td><td>${Cr(W.out)}</td><td>${Cr(W.dig)}</td><td>${pc(W.dig, W.omni)}</td><td>${Cr(W.ch.STOREASSISTED)}</td><td>${L(W.ch.QC_EXPRESS)}</td><td>${Cr(W.ch.OUTOFCATCHMENT)}</td><td>${W.ret}%</td></tr>
      </tbody></table></div>`;
  };

  const one = k => {
    const b = O.bu[k], [, n, c] = MK.find(m => m[0] === k), mx = Math.max(...b.mOmni.slice(0, 10)), chMax = Math.max(...CHN.map(([x]) => b.ch[x]));
    const dc = O.digCh[k], dcT = Object.values(dc).reduce((a, v) => a + v, 0), cu = O.digCust[k];
    const st = O.stores.filter(s => s[1] === k), stMax = st.length ? st[0][2] : 1;
    return `<div class="cq-kpis om-kpis" style="--c:${c}">
        <div style="--c:${c}"><b>${Cr(b.omni)}</b><span>${n} omni, Jan to Oct</span></div>
        <div style="--c:${c}"><b>${Cr(b.in)}</b><span>In-store (${pc(b.in, b.omni)})</span></div>
        <div style="--c:${c}"><b>${Cr(b.dig)}</b><span>Digital: out-store + SAS (${pc(b.dig, b.omni)})</span></div>
        <div class="tot"><b>${Cr(b.ch.STOREASSISTED)}</b><span>SAS, ${pc(b.ch.STOREASSISTED, b.in)} of in-store</span></div></div>
      <div class="om-two">
        <div class="om-block"><h4 class="dg-h">Month by month (₹ Cr)</h4>
          <div class="om-cols">${b.mOmni.map((v, i) => `<div class="om-col ${i === 10 ? "mtd" : ""}" title="${MON[i]} 2026${i === 10 ? ", to about the 17th" : ""}: omni ${Cr(v)}, digital ${Cr(b.mDig[i])}"><b>${(v / 1e7).toFixed(1)}</b><div class="om-stack" style="--h:${Math.min(v / mx, 1) * 100}%"><i class="dg" style="height:${v ? b.mDig[i] / v * 100 : 0}%;background:${c}"></i></div><span>${MON[i]}</span></div>`).join("")}</div>
          <p class="dg-cap">Full bar = omni; coloured part = digital. November is to about the 17th.</p></div>
        <div class="om-block"><h4 class="dg-h">By channel, Jan to Oct</h4>
          ${CHN.map(([x, lab, t]) => `<div class="om-ch"><span>${lab}</span><div><i class="${t}" style="--w:${b.ch[x] / chMax * 100}%;${t !== "in" ? `background:${c}` : ""}"></i></div><b>${b.ch[x] >= 1e7 ? Cr(b.ch[x]) : b.ch[x] >= 1e4 ? L(b.ch[x]) : "–"}</b></div>`).join("")}</div>
      </div>
      <div class="om-two">
        <div class="om-block"><h4 class="dg-h">Digital by channel (digital file)</h4>
          <div class="om-split">${[["App", "App"], ["Web", "Web"], ["ACE", "ACE (in store)"], ["MarketPlace", "Marketplaces"], ["B2B", "B2B"]].map(([x, lab], i) => `<i style="flex:${Math.max(dc[x], 0)} 1 0;opacity:${1 - i * 0.16};background:${c}" title="${lab}: ${Cr(dc[x])}"></i>`).join("")}</div>
          <ul class="om-ul">${[["App", "App"], ["Web", "Web"], ["ACE", "ACE (in store)"], ["MarketPlace", "Marketplaces"], ["B2B", "B2B"]].map(([x, lab]) => `<li><span>${lab}</span><b>${Cr(dc[x])}</b><small>${pc(dc[x], dcT)}</small></li>`).join("")}</ul>
          <p class="dg-cap">App + web + ACE customers, Jan to Oct (monthly counts added up): ${cu["new customers"].toLocaleString("en-IN")} new, ${cu["returning customers"].toLocaleString("en-IN")} returning.</p></div>
        <div class="om-block"><h4 class="dg-h">Digital sales booked at each store (ACE + app in store)</h4>
          ${st.map(([s, , v]) => `<div class="om-ch"><span>${esc(s)}</span><div><i style="--w:${v / stMax * 100}%;background:${c}"></i></div><b>${L(v)}</b></div>`).join("")}</div>
      </div>`;
  };

  document.querySelectorAll("[data-omni26]").forEach(box => {
    const tabs = [["All", "All markets"], ...MK.map(([k, n]) => [k, n])];
    box.innerHTML = `<div class="seg persona-seg om-seg" role="group" aria-label="Choose market">${tabs.map(([k, n], i) => `<button type="button" data-k="${k}" aria-pressed="${i === 0}">${n}</button>`).join("")}</div><div class="om-view"></div>
      <p class="dg-cap om-src">Source: Offline + online YTD 2026 and digital data YTD 2026 (shared 18 Nov 2026). January to October 2026; Gujarat = Ahmedabad + Surat, Rajkot, Baroda. Digital = every out-store channel plus SAS.</p>`;
    const view = box.querySelector(".om-view");
    const show = k => { view.innerHTML = k === "All" ? all() : one(k); box.querySelectorAll(".om-seg button").forEach(b => b.setAttribute("aria-pressed", b.dataset.k === k)); };
    box.querySelectorAll(".om-seg button").forEach(b => b.addEventListener("click", () => show(b.dataset.k)));
    show(box.dataset.omni26 || "All");
  });
})();
