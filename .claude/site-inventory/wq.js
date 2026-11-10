const { chromium } = require('playwright'); const fs=require('fs');
(async()=>{ const b=await chromium.launch(); const pg=await b.newPage({viewport:{width:1440,height:900}}); const r=[];
await pg.goto('http://127.0.0.1:8777/water2027.html',{waitUntil:'networkidle'});
for(const st of ['all','Pune','Gujarat','MP'])for(const q of ['q426','q1','q2','q3','q4']){ await pg.click(`#w27St button[data-s="${st}"]`); await pg.click(`#w27Seg button[data-q="${q}"]`); await pg.waitForTimeout(120);
 r.push(`${st} ${q}: `+(await pg.evaluate(()=>document.getElementById('w27QNums').innerText.replace(/\n(?=[^₹\d])/g,' ').replace(/\n/g,' · '))));}
fs.writeFileSync(process.argv[2]+'/wq.json',JSON.stringify(r)); console.log(r.join('\n')); await b.close();})();
