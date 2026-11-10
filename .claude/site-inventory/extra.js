const { chromium } = require('playwright'); const fs=require('fs');
(async()=>{ const b=await chromium.launch(); const res={};
for (const p of ['index','november','plan2027','water2027']) { const pg=await b.newPage({viewport:{width:1440,height:900}});
 await pg.goto(`http://127.0.0.1:8777/${p}.html`,{waitUntil:'networkidle'}); await pg.waitForTimeout(500);
 res[p]=await pg.evaluate(()=>{ const norm=s=>s.replace(/[ \t ]+/g,' ').replace(/\n\s*\n+/g,'\n').trim();
  const cap=[...document.querySelectorAll('body > header, section, body > footer, .chapter')];
  const els=[...document.querySelectorAll('body *')].filter(e=>!cap.some(c=>c.contains(e)||e.contains(c)) && !['SCRIPT','STYLE','NOSCRIPT','LINK'].includes(e.tagName) && (!e.parentElement || e.parentElement===document.body || cap.some(c=>e.parentElement.contains(c))));
  return { desc: document.querySelector('meta[name=description]')?.content, other: els.map(e=>({tag:e.tagName,id:e.id,cls:String(e.className).slice(0,40),text:norm(e.innerText||'')})).filter(x=>x.text) };});
 await pg.close(); }
fs.writeFileSync(process.argv[2]+'/extra.json',JSON.stringify(res,null,1)); await b.close(); })();
