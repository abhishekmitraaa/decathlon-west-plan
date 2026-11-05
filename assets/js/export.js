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
    gifw: ["https://cdnjs.cloudflare.com/ajax/libs/gif.js/0.2.0/gif.worker.js", "sha384-uL0SwIQSos1DfQU2KzlDbPuSz7Jwo+hmNPIhe86VJ+MWwyj0DvjngnAgWrkNi9eQ"]
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
    st.textContent = "*,*::before,*::after{animation:none!important;transition:none!important}.dg-col>b{opacity:1!important}";
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
    doc.querySelectorAll("#sbDigital").forEach(d => d.classList.add("go"));
    await Promise.race([Promise.all(waits), new Promise(r => setTimeout(r, 8000))]);
  };

  const tagVideos = () => document.querySelectorAll("video[poster]").forEach(v => { if (v.parentElement) v.parentElement.setAttribute("data-exp-poster", v.getAttribute("poster")); });

  const capture = async (scale, label) => {
    await load("h2c"); await settle(); tagVideos();
    const list = blocks(), out = [];
    for (let i = 0; i < list.length; i++) {
      say(`${label}: capturing part ${i + 1} of ${list.length}`);
      const el = list[i], h = el.scrollHeight, s = Math.min(scale, 30000 / Math.max(h, 1));
      out.push(await window.html2canvas(el, { scale: s, useCORS: true, backgroundColor: getComputedStyle(document.body).backgroundColor || "#fff", logging: false, windowWidth: document.documentElement.clientWidth, onclone }));
    }
    // same width for every part
    const W = Math.min(...out.map(c => c.width));
    return out.map(c => { if (c.width === W) return c; const r = document.createElement("canvas"); r.width = W; r.height = Math.round(c.height * W / c.width); r.getContext("2d").drawImage(c, 0, 0, r.width, r.height); return r; });
  };

  // draw any horizontal band of the stacked parts into a context
  const band = (parts, y, h, ctx, W, outW, outH) => {
    let top = 0;
    for (const c of parts) {
      const a = Math.max(y, top), b = Math.min(y + h, top + c.height);
      if (b > a) ctx.drawImage(c, 0, a - top, W, b - a, 0, (a - y) * outW / W, outW, (b - a) * outW / W);
      top += c.height;
    }
  };

  async function toPDF() {
    const parts = await capture(Math.min(2, devicePixelRatio || 1.5) || 1.5, "PDF");
    await load("pdf"); say("PDF: laying out pages");
    const { jsPDF } = window.jspdf, W = parts[0].width;
    const pdf = new jsPDF({ orientation: "portrait", unit: "mm", format: "a4", compress: true });
    const pw = 210, ph = 297, pagePx = Math.round(W * ph / pw);
    const total = parts.reduce((a, c) => a + c.height, 0), pages = Math.ceil(total / pagePx);
    const tmp = document.createElement("canvas"), ctx = tmp.getContext("2d");
    for (let p = 0; p < pages; p++) {
      const y = p * pagePx, h = Math.min(pagePx, total - y);
      tmp.width = W; tmp.height = h; ctx.fillStyle = "#fff"; ctx.fillRect(0, 0, W, h);
      band(parts, y, h, ctx, W, W, h);
      if (p) pdf.addPage();
      pdf.addImage(tmp.toDataURL("image/jpeg", 0.86), "JPEG", 0, 0, pw, h * pw / W);
      say(`PDF: page ${p + 1} of ${pages}`);
      await new Promise(r => setTimeout(r));
    }
    save(pdf.output("blob"), name("pdf"));
  }

  async function toGIF() {
    const outW = Math.min(720, document.documentElement.clientWidth);
    const parts = await capture(outW / document.documentElement.clientWidth, "GIF");
    await load("gif");
    const res = await fetch(LIB.gifw[0], { integrity: LIB.gifw[1] });
    const workerURL = URL.createObjectURL(new Blob([await res.text()], { type: "application/javascript" }));
    const W = parts[0].width, frameH = Math.round(W * (innerHeight / document.documentElement.clientWidth));
    const total = parts.reduce((a, c) => a + c.height, 0);
    const steps = Math.min(90, Math.max(2, Math.ceil((total - frameH) / (frameH * 0.7)) + 1));
    const gif = new window.GIF({ workers: 2, quality: 12, width: W, height: frameH, workerScript: workerURL, background: "#ffffff" });
    const tmp = document.createElement("canvas"); tmp.width = W; tmp.height = frameH;
    const ctx = tmp.getContext("2d", { willReadFrequently: true });
    for (let i = 0; i < steps; i++) {
      const y = Math.round((total - frameH) * i / (steps - 1));
      ctx.fillStyle = "#fff"; ctx.fillRect(0, 0, W, frameH);
      band(parts, y, frameH, ctx, W, W, frameH);
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

  const run = fn => async () => {
    busy(true);
    try { await fn(); say("Done. Your download has started."); }
    catch (e) { say("Something went wrong: " + e.message + ". Please try again."); }
    finally { busy(false); }
  };
  $("#expPdf").addEventListener("click", run(toPDF));
  $("#expGif").addEventListener("click", run(toGIF));
})();
