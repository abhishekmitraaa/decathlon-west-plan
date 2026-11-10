const { chromium } = require('playwright');
(async () => { const b = await chromium.launch(); const pg = await b.newPage({viewport:{width:1440,height:900}});
await pg.goto(`http://127.0.0.1:8777/plan2027.html`,{waitUntil:'networkidle'});
console.log(JSON.stringify(await pg.evaluate(()=>[...document.querySelectorAll('.yt27')].map(x=>(x.closest('section')?.id)+' | '+x.innerText.trim().replace(/\n/g,' / ')+' | '+JSON.stringify(x.dataset)))));
await b.close();})();
