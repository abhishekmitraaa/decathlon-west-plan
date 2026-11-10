/* Download the page you are on, complete, as a PDF or as an animated GIF that scrolls through it.
   The libraries load only when a button is pressed. Each top-level block is captured on its own,
   so long pages stay under the browser's canvas size limit. */
(() => {
  const bar = document.getElementById("expBar");
  if (!bar) return;
  const $ = (s, r = document) => r.querySelector(s);
  const LIB = {
    h2c: ["https://cdnjs.cloudflare.com/ajax/libs/html2canvas/1.4.1/html2canvas.min.js", "sha384-ZZ1pncU3bQe8y31yfZdMFdSpttDoPmOZg2wguVK9almUodir1PghgT0eY7Mrty8H"],
    pdf: ["https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js", "sha384-JcnsjUPPylna1s1fvi1u12X5qjY5OL56iySh75FdtrwhO/SWXgMjoVqcKyIIWOLk"],
    gif: ["https://cdnjs.cloudflare.com/ajax/libs/gif.js/0.2.0/gif.js", "sha384-4RMW82CWFobXY+HRHXe5go/V5acBhiIVGCT+2k7TEoxi7AiWKw8WoWb9qMU+FAFu"],
    gifw: ["https://cdnjs.cloudflare.com/ajax/libs/gif.js/0.2.0/gif.worker.js", "sha384-uL0SwIQSos1DfQU2KzlDbPuSz7Jwo+hmNPIhe86VJ+MWwyj0DvjngnAgWrkNi9eQ"],
    ppt: ["https://cdn.jsdelivr.net/npm/pptxgenjs@3.12.0/dist/pptxgen.bundle.js", "sha384-Cck14aA9cifjYolcnjebXRfWGkz5ltHMBiG4px/j8GS+xQcb7OhNQWZYyWjQ+UwQ"]
  };
  const loaded = {};
  const load = k => loaded[k] || (loaded[k] = new Promise((ok, no) => {
    const s = document.createElement("script");
    s.src = LIB[k][0]; s.integrity = LIB[k][1]; s.crossOrigin = "anonymous";
    s.onload = ok; s.onerror = () => no(new Error("Could not load " + k));
    document.head.append(s);
  }));
  const status = $("#expStatus"), btns = [...bar.querySelectorAll("button")];
  const say = t => { status.textContent = t; };
  const busy = on => btns.forEach(b => { b.disabled = on; });
  const stamp = () => { const d = new Date(), z = n => String(n).padStart(2, "0"); return `${d.getFullYear()}-${z(d.getMonth() + 1)}-${z(d.getDate())}`; };
  const name = ext => `${document.title.replace(/[^A-Za-z0-9]+/g, "-").replace(/^-|-$/g, "")}-${stamp()}.${ext}`;
  const save = (blob, file) => { const a = document.createElement("a"); a.href = URL.createObjectURL(blob); a.download = file; document.body.append(a); a.click(); setTimeout(() => { URL.revokeObjectURL(a.href); a.remove(); }, 4000); };

  // the blocks of the page, top to bottom, without the fixed bar, the skip link and this footer
  const blocks = () => [...document.body.children].filter(el => !/^(SCRIPT|STYLE|LINK|TEMPLATE)$/.test(el.tagName) && !el.matches(".topbar, .skip, .tip, .hud, #expBar, [hidden]") && el.offsetHeight > 0);

  // make sure every picture has loaded before capturing
  const settle = async () => {
    document.querySelectorAll("img[loading='lazy']").forEach(i => { i.loading = "eager"; });
    const imgs = [...document.images].filter(i => !i.complete);
    await Promise.race([Promise.all(imgs.map(i => new Promise(r => { i.onload = i.onerror = r; }))), new Promise(r => setTimeout(r, 6000))]);
    if (document.fonts && document.fonts.ready) await document.fonts.ready;
  };

  // in the copy that gets drawn: videos become their poster, dropdowns open, motion stops, animated charts show their end state
  // (it waits for the posters, because html2canvas skips a picture that has not loaded yet)
  const onclone = async doc => {
    const st = doc.createElement("style");
    st.textContent = "*,*::before,*::after{animation:none!important;transition:none!important}.dg-col>b{opacity:1!important}.display{line-height:1.18!important;padding-bottom:.06em}.sec-head .sec-lede{margin-top:.5em}";
    doc.head.append(st);
    const waits = [];
    // html2canvas turns each video into a bare canvas of its current frame (blank before it plays): swap it for the poster,
    // which tagVideos() left on the video's parent
    doc.querySelectorAll("[data-exp-poster]").forEach(box => {
      const v = [...box.children].find(c => c.tagName === "VIDEO" || (c.tagName === "CANVAS" && !c.className));
      const src = box.getAttribute("data-exp-poster");
      if (!v || !src) return;
      const img = doc.createElement("img");
      img.style.cssText = "width:100%;height:100%;object-fit:cover;display:block";
      waits.push(new Promise(r => { img.onload = img.onerror = r; }));
      img.src = src;
      v.replaceWith(img);
    });
    doc.querySelectorAll("img[loading='lazy']").forEach(i => { i.loading = "eager"; if (!i.complete) waits.push(new Promise(r => { i.onload = i.onerror = r; })); });
    doc.querySelectorAll("details").forEach(d => { d.open = true; });
    // html2canvas cannot parse colours written as color(srgb ...) (what color-mix() computes to): rewrite them as rgba() inline
    const fix = v => v.replace(/color\(srgb ([\d.e-]+) ([\d.e-]+) ([\d.e-]+)(?: \/ ([\d.e-]+))?\)/g, (m, r, g, b, a) => `rgba(${Math.round(r * 255)}, ${Math.round(g * 255)}, ${Math.round(b * 255)}, ${a ?? 1})`);
    const win = doc.defaultView, PROPS = ["backgroundColor", "color", "borderTopColor", "borderRightColor", "borderBottomColor", "borderLeftColor", "outlineColor", "backgroundImage", "boxShadow", "textDecorationColor", "fill", "stroke"];
    doc.querySelectorAll("*").forEach(el => { const cs = win.getComputedStyle(el); PROPS.forEach(k => { const v = cs[k]; if (v && v.includes("color(")) el.style[k] = fix(v); }); });
    doc.querySelectorAll("#sbDigital").forEach(d => d.classList.add("go"));
    await Promise.race([Promise.all(waits), new Promise(r => setTimeout(r, 8000))]);
  };

  const tagVideos = () => document.querySelectorAll("video[poster]").forEach(v => { if (v.parentElement) v.parentElement.setAttribute("data-exp-poster", v.getAttribute("poster")); });

  const pageBg = () => {
    for (const el of [document.body, document.documentElement]) { const c = getComputedStyle(el).backgroundColor; if (c && !/rgba\(0, 0, 0, 0\)|transparent/.test(c)) return c; }
    return "#ffffff";
  };

  // capture every block, remembering where it sits on the page (CSS pixels), so the gaps between blocks stay as they are
  const capture = async (scale, label) => {
    await load("h2c"); await settle(); tagVideos();
    const list = blocks(), out = [], bg = pageBg();
    for (let i = 0; i < list.length; i++) {
      say(`${label}: capturing part ${i + 1} of ${list.length}`);
      const el = list[i], r = el.getBoundingClientRect(), s = Math.min(scale, 30000 / Math.max(el.scrollHeight, 1));
      const c = await window.html2canvas(el, { scale: s, useCORS: true, backgroundColor: bg, logging: false, windowWidth: document.documentElement.clientWidth, onclone });
      out.push({ c, el, top: r.top + scrollY, left: r.left + scrollX, w: r.width, h: r.height });
    }
    const y0 = Math.min(...out.map(o => o.top)), y1 = Math.max(...out.map(o => o.top + o.h));
    out.forEach(o => { o.top -= y0; });
    return { items: out, total: y1 - y0, width: document.documentElement.clientWidth, bg };
  };

  // draw the page band from y to y + h (CSS pixels) into ctx at k canvas pixels per CSS pixel
  const band = (cap, y, h, ctx, k) => {
    ctx.fillStyle = cap.bg; ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    for (const o of cap.items) {
      const a = Math.max(y, o.top), b = Math.min(y + h, o.top + o.h);
      if (b <= a) continue;
      const f = o.c.height / o.h; // canvas pixels per CSS pixel in this part
      ctx.drawImage(o.c, 0, (a - o.top) * f, o.c.width, (b - a) * f, o.left * k, (a - y) * k, o.w * k, (b - a) * k);
    }
  };

  // the PDF is one continuous page shaped like the website: no page breaks, nothing cut in the middle
  async function toPDF() {
    const s = Math.min(2, Math.max(1.5, devicePixelRatio || 1.5));
    const cap = await capture(s, "PDF");
    await load("pdf"); say("PDF: building the page");
    const { jsPDF } = window.jspdf;
    const MAX = 14400; // the largest page side PDF readers accept, in points
    const pt = Math.min(0.75, MAX / cap.total, MAX / cap.width); // points per CSS pixel
    const pw = cap.width * pt, ph = cap.total * pt;
    const pdf = new jsPDF({ orientation: pw > ph ? "landscape" : "portrait", unit: "pt", format: [pw, ph], compress: true });
    const hex = ((cap.bg.match(/\d+/g) || [255, 255, 255]).slice(0, 3)).map(v => (+v).toString(16).padStart(2, "0")).join("");
    pdf.setFillColor("#" + hex); pdf.rect(0, 0, pw, ph, "F");
    // in strips small enough for a canvas; each strip runs 2px into the next, which is drawn over it, so no seam shows
    const STRIP = Math.floor(3000 / s), OV = 2;
    const tmp = document.createElement("canvas"), ctx = tmp.getContext("2d");
    const n = Math.ceil(cap.total / STRIP);
    for (let i = 0; i < n; i++) {
      const y = i * STRIP, h = Math.min(STRIP + OV, cap.total - y);
      tmp.width = Math.round(cap.width * s); tmp.height = Math.max(1, Math.round(h * s));
      band(cap, y, h, ctx, s);
      pdf.addImage(tmp.toDataURL("image/jpeg", 0.9), "JPEG", 0, y * pt, pw, h * pt, undefined, "FAST");
      say(`PDF: part ${i + 1} of ${n}`);
      await new Promise(r => setTimeout(r));
    }
    save(pdf.output("blob"), name("pdf"));
  }

  async function toGIF() {
    const cssW = document.documentElement.clientWidth, outW = Math.min(720, cssW), k = outW / cssW;
    const cap = await capture(k, "GIF");
    await load("gif");
    const res = await fetch(LIB.gifw[0], { integrity: LIB.gifw[1] });
    const workerURL = URL.createObjectURL(new Blob([await res.text()], { type: "application/javascript" }));
    const frameCss = Math.min(innerHeight, cap.total), W = Math.round(cssW * k), H = Math.round(frameCss * k);
    const steps = Math.min(90, Math.max(2, Math.ceil((cap.total - frameCss) / (frameCss * 0.7)) + 1));
    const gif = new window.GIF({ workers: 2, quality: 12, width: W, height: H, workerScript: workerURL, background: "#ffffff" });
    const tmp = document.createElement("canvas"); tmp.width = W; tmp.height = H;
    const ctx = tmp.getContext("2d", { willReadFrequently: true });
    for (let i = 0; i < steps; i++) {
      band(cap, (cap.total - frameCss) * i / (steps - 1), frameCss, ctx, k);
      gif.addFrame(ctx, { copy: true, delay: i === 0 || i === steps - 1 ? 1600 : 650 });
      say(`GIF: frame ${i + 1} of ${steps}`);
      await new Promise(r => setTimeout(r));
    }
    await new Promise((ok, no) => {
      gif.on("progress", p => say(`GIF: encoding ${Math.round(p * 100)}%`));
      gif.on("finished", blob => { save(blob, name("gif")); URL.revokeObjectURL(workerURL); ok(); });
      gif.on("abort", () => no(new Error("GIF stopped")));
      gif.render();
    });
  }

  // PowerPoint: 16:9 slides at 10 x 5.625 in, the Google Slides default size. A title slide, then every block of the page
  // as one or more slides, cut at the gaps between its parts (never through a line of text) and fitted on its own background.
  const cuts = (el, h, t) => {
    const top = el.getBoundingClientRect().top, cand = new Set([h]);
    el.querySelectorAll(":scope > *, :scope > .wrap > *, :scope > .wrap > * > *, :scope > .wrap > * > * > *").forEach(c => {
      const r = c.getBoundingClientRect(); if (r.height > 0) cand.add(Math.min(h, Math.round(r.bottom - top + 10)));
    });
    const cs = [...cand].filter(v => v > 0).sort((a, b) => a - b), out = [0];
    let st = 0;
    while (h - st > t * 1.15) {
      let best = null;
      for (const v of cs) if (v > st + t * 0.45 && v <= st + t * 1.15) best = v;
      st = best ?? Math.min(h, st + t); out.push(st);
    }
    if (out[out.length - 1] !== h) out.push(h);
    return out;
  };
  async function toPPT() {
    const ds = [...document.querySelectorAll("details")], was = ds.map(d => d.open);
    ds.forEach(d => { d.open = true; });
    await new Promise(r => setTimeout(r, 300));
    try {
      const cap = await capture(1.5, "PowerPoint");
      await load("ppt"); say("PowerPoint: building the slides");
      const pptx = new window.PptxGenJS();
      pptx.layout = "LAYOUT_16x9"; // 10 x 5.625 in = Google Slides 16:9
      pptx.title = document.title; pptx.company = "Decathlon";
      const W = 10, H = 5.625, R = H / W;
      const t = pptx.addSlide(); t.background = { color: "3643BA" };
      t.addShape(pptx.ShapeType.rect, { x: 0, y: 4.9, w: W, h: 0.725, fill: { color: "10135A" } });
      t.addText(document.title.replace(/\s*[|·-]\s*Decathlon.*$/i, ""), { x: 0.6, y: 1.55, w: 8.8, h: 1.3, fontFace: "Arial", fontSize: 34, bold: true, color: "FFFFFF", valign: "bottom" });
      t.addText("Decathlon West", { x: 0.6, y: 2.95, w: 8.8, h: 0.5, fontFace: "Arial", fontSize: 18, color: "7AFFA6", bold: true });
      t.addText(new Date().toLocaleDateString("en-IN", { day: "numeric", month: "long", year: "numeric" }), { x: 0.6, y: 5.0, w: 8.8, h: 0.5, fontFace: "Arial", fontSize: 12, color: "D9DEFF" });
      const tmp = document.createElement("canvas"), ctx = tmp.getContext("2d", { willReadFrequently: true });
      const hex = d => [d[0], d[1], d[2]].map(v => v.toString(16).padStart(2, "0")).join("").toUpperCase();
      let n = 0;
      for (const o of cap.items) {
        if (o.h < 80) continue; // thin bars and dividers are not slides
        const br = cuts(o.el, o.h, o.w * R), f = o.c.height / o.h;
        for (let i = 0; i < br.length - 1; i++) {
          const y0 = Math.round(br[i] * f), sh = Math.round((br[i + 1] - br[i]) * f);
          if (sh < 24) continue;
          tmp.width = o.c.width; tmp.height = sh;
          ctx.drawImage(o.c, 0, y0, o.c.width, sh, 0, 0, o.c.width, sh);
          // skip a slice that is one flat colour (empty space at the end of a block)
          const sm = document.createElement("canvas"); sm.width = 48; sm.height = Math.max(8, Math.round(48 * sh / o.c.width));
          const sx = sm.getContext("2d", { willReadFrequently: true }); sx.drawImage(tmp, 0, 0, sm.width, sm.height);
          const px = sx.getImageData(0, 0, sm.width, sm.height).data; let mu = 0, m2 = 0, k = 0;
          for (let q = 0; q < px.length; q += 4) { const l = 0.3 * px[q] + 0.59 * px[q + 1] + 0.11 * px[q + 2]; k++; const dd = l - mu; mu += dd / k; m2 += dd * (l - mu); }
          if (Math.sqrt(m2 / k) < 3) continue;
          const sl = pptx.addSlide(); sl.background = { color: hex(ctx.getImageData(3, 3, 1, 1).data) };
          const ar = sh / o.c.width; let w = W, h = W * ar; if (h > H) { h = H; w = H / ar; }
          sl.addImage({ data: tmp.toDataURL("image/jpeg", 0.9), x: (W - w) / 2, y: (H - h) / 2, w, h });
          sl.slideNumber = { x: 9.35, y: 5.25, w: 0.5, h: 0.3, fontFace: "Arial", fontSize: 9, color: "8A92BC" };
          n++; say(`PowerPoint: slide ${n}`);
          await new Promise(r => setTimeout(r));
        }
      }
      say("PowerPoint: saving");
      save(await pptx.write({ outputType: "blob" }), name("pptx"));
    } finally { ds.forEach((d, i) => { d.open = was[i]; }); }
  }

  const run = fn => async () => {
    busy(true);
    try { await fn(); say("Done. Your download has started."); }
    catch (e) { say("Something went wrong: " + e.message + ". Please try again."); }
    finally { busy(false); }
  };
  $("#expPdf").addEventListener("click", run(toPDF));
  $("#expGif").addEventListener("click", run(toGIF));
  if ($("#expPpt")) $("#expPpt").addEventListener("click", run(toPPT));
})();
