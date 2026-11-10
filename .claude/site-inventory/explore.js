const { chromium } = require('playwright');
const fs = require('fs');
const out = process.argv[2];
(async () => {
  const b = await chromium.launch();
  const GLOB={index:[[]],november:[[]],plan2027:[[]],water2027:[[]]};
  for(const r of ['Pune','West','MP','Gujarat'])for(const q of ['q1','q2','h1'])GLOB.plan2027.push([`#y27Reg button[data-r="${r}"]`,`#y27Seg button[data-q="${q}"]`]);
  for(const st of ['all','Pune','Gujarat','MP'])for(const q of ['q426','q1','q2','q3','q4'])GLOB.water2027.push([`#w27St button[data-s="${st}"]`,`#w27Seg button[data-q="${q}"]`]);
  const only=process.argv[3]?process.argv[3].split(','):Object.keys(GLOB);
  for (const p of only) {
    const pg = await b.newPage({ viewport: { width: 1440, height: 900 } });
    await pg.goto(`http://127.0.0.1:8777/${p}.html`, { waitUntil: 'networkidle' });
    await pg.evaluate(async () => { for (let y=0; y<document.body.scrollHeight; y+=700){ window.scrollTo(0,y); await new Promise(r=>setTimeout(r,30)); } });
    await pg.waitForTimeout(600);
    await pg.evaluate(() => {
      window.__lines = el => { const norm=s=>s.replace(/[ \t ]+/g,' ').trim(); let s=''; const walk=n=>{ if(n.nodeType===3){s+=n.textContent;return;} if(n.nodeType!==1)return; const t=n.tagName; if(['SCRIPT','STYLE'].includes(t))return; const blk=/^(DIV|P|H[1-6]|LI|TR|SECTION|ARTICLE|HEADER|FOOTER|FIGURE|FIGCAPTION|TABLE|UL|OL|DT|DD|BR|BUTTON|LABEL|SUMMARY|DETAILS|NAV|ASIDE|BLOCKQUOTE|text|g)$/i.test(t); if(t==='TD'||t==='TH')s+=' | '; if(blk)s+='\n'; for(const k of n.childNodes)walk(k); if(blk)s+='\n'; }; walk(el); return s.split('\n').map(norm).filter(Boolean); };
      document.querySelectorAll('details').forEach(d=>d.open=true);
    });
    const secIds = await pg.evaluate(() => [...document.querySelectorAll('section[id]')].map(s=>s.id));
    const res = {}; const SEEN={};
    for (const g of GLOB[p]) {
    for (const sel of g) { await pg.evaluate(sel=>document.querySelector(sel)?.click(), sel); await pg.waitForTimeout(150); }
    const gl = g.length? 'STATE '+(await pg.evaluate(g=>g.map(s=>document.querySelector(s)?.innerText.trim()).join(' + '), g)) : '';
    for (const id of secIds) {
      const base = await pg.evaluate(id => window.__lines(document.getElementById(id)), id);
      const seen = SEEN[id] || (SEEN[id]=new Set()); const baseFresh = base.filter(l=>!seen.has(l)); baseFresh.forEach(l=>seen.add(l));
      res[id] = res[id] || {base:[],variants:[]}; if(!g.length) res[id].base=baseFresh; else if(baseFresh.length) res[id].variants.push({click:gl, lines:baseFresh});
      const variants = res[id].variants;
      const n = await pg.evaluate(id => { const s=document.getElementById(id); const bs=[...s.querySelectorAll('button,[role=tab],select')].filter(x=>{const t=(x.innerText||'').trim(); return x.offsetParent && !/sound|download|present|play film|mute|unmute|^▶|^❚|copy/i.test(t)}); bs.forEach((x,i)=>x.dataset.__ix=i); return bs.length; }, id);
      for (let i=0;i<n && i<400;i++) {
        await pg.evaluate(id => { const s=document.getElementById(id); [...s.querySelectorAll('button,[role=tab],select')].filter(x=>{const t=(x.innerText||'').trim(); return x.offsetParent && !/sound|download|present|play film|mute|unmute|^▶|^❚|copy/i.test(t)}).forEach((x,i)=>{ x.dataset.__ix=i; }); }, id);
        const info = await pg.evaluate(([id,i]) => { const x=document.querySelector(`#${id} [data-__ix="${i}"]`); if(!x||!x.isConnected) return null; if(x.tagName==='SELECT') return {label:'select', sel:true, opts:[...x.options].map(o=>o.value)}; return {label:(x.innerText||x.getAttribute('aria-label')||'').trim().replace(/\s+/g,' ').slice(0,60)}; }, [id,i]);
        if (!info) continue;
        const actions = info.sel ? info.opts.map(v=>({v,label:'select '+v})) : [{label:info.label}];
        for (const a of actions) {
          try {
            await pg.evaluate(([id,i,v]) => { const x=document.querySelector(`#${id} [data-__ix="${i}"]`); if(!x) return; if(v!=null){x.value=v;x.dispatchEvent(new Event('change',{bubbles:true}));x.dispatchEvent(new Event('input',{bubbles:true}));} else x.click(); }, [id,i,a.v]);
            await pg.waitForTimeout(120);
            const lines = await pg.evaluate(id => { document.querySelectorAll('details').forEach(d=>d.open=true); return window.__lines(document.getElementById(id)); }, id);
            const fresh = lines.filter(l=>!seen.has(l)); fresh.forEach(l=>seen.add(l));
            if (fresh.length) variants.push({ click: (gl?gl+' > ':'')+a.label, lines: fresh });
          } catch(e) {}
        }
        // re-index after rerender
        await pg.evaluate(id => { const s=document.getElementById(id); [...s.querySelectorAll('button,[role=tab],select')].filter(x=>{const t=(x.innerText||'').trim(); return x.offsetParent && !/sound|download|present|play film|mute|unmute|^▶|^❚|copy/i.test(t)}).forEach((x,i)=>{ if(x.dataset.__ix===undefined) x.dataset.__ix='n'+i; }); }, id);
      }
      console.log(p, gl, id, variants.length);
    }
    }
    fs.writeFileSync(`${out}/${p}.explore.json`, JSON.stringify(res, null, 1));
    await pg.close();
  }
  await b.close();
})();
