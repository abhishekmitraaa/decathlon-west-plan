const { chromium } = require('playwright');
const fs = require('fs');
const out = process.argv[2];
(async () => {
  const b = await chromium.launch();
  for (const p of ['index','november','plan2027','water2027']) {
    const pg = await b.newPage({ viewport: { width: 1440, height: 900 } });
    const errs = [];
    pg.on('pageerror', e => errs.push(String(e)));
    pg.on('console', m => { if (m.type()==='error') errs.push(m.text()); });
    await pg.goto(`http://127.0.0.1:8777/${p}.html`, { waitUntil: 'networkidle' });
    // scroll to trigger lazy renders
    await pg.evaluate(async () => { for (let y=0; y<document.body.scrollHeight; y+=700){ window.scrollTo(0,y); await new Promise(r=>setTimeout(r,40)); } window.scrollTo(0,0); });
    await pg.waitForTimeout(800);
    const data = await pg.evaluate(() => {
      const norm = s => s.replace(/[ \t ]+/g,' ').replace(/\n\s*\n+/g,'\n').trim();
      const txt = el => { // textContent with block breaks
        const c = el.cloneNode(true);
        c.querySelectorAll('script,style,svg title').forEach(n=>n.remove());
        c.querySelectorAll('*').forEach(n => { const d = getComputedStyle; });
        let s=''; const walk=n=>{ if(n.nodeType===3){s+=n.textContent;return;} if(n.nodeType!==1)return; const t=n.tagName; if(['SCRIPT','STYLE'].includes(t))return; const blk=/^(DIV|P|H[1-6]|LI|TR|SECTION|ARTICLE|HEADER|FOOTER|FIGURE|FIGCAPTION|TABLE|UL|OL|DT|DD|BR|BUTTON|LABEL|SUMMARY|DETAILS|NAV|ASIDE|BLOCKQUOTE|TEXT|G)$/.test(t); if(t==='TD'||t==='TH'){s+=' | ';} if(blk)s+='\n'; for(const k of n.childNodes)walk(k); if(blk)s+='\n'; }; walk(el); return norm(s); };
      const secs = [...document.querySelectorAll('body > header, body > nav, section, body > footer, main > section, .chapter, [data-chapter]')].filter((el,i,a)=>!a.some(o=>o!==el && o.contains(el)));
      const media = el => ({
        img: [...el.querySelectorAll('img')].map(i=>(i.getAttribute('src')||'')+(i.alt?` [alt: ${i.alt}]`:'')),
        vid: [...el.querySelectorAll('video')].map(v=>(v.getAttribute('src')||v.querySelector('source')?.getAttribute('src')||'')+(v.poster?` [poster ${v.getAttribute('poster')}]`:'')),
        iframe: [...el.querySelectorAll('iframe')].map(f=>f.src),
        links: [...el.querySelectorAll('a[href]')].map(a=>a.getAttribute('href')).filter(h=>/^http/.test(h)),
        bg: [...el.querySelectorAll('[style*="url("]')].map(e=>(e.getAttribute('style').match(/url\(([^)]+)\)/)||[])[1]),
      });
      return { title: document.title, sections: secs.map(el => ({ tag: el.tagName, id: el.id, cls: el.className, text: txt(el), media: media(el) })) };
    });
    data.errors = errs;
    fs.writeFileSync(`${out}/${p}.json`, JSON.stringify(data, null, 1));
    console.log(p, data.sections.length, 'sections', errs.length, 'errors', data.sections.reduce((a,s)=>a+s.text.length,0), 'chars');
    await pg.close();
  }
  await b.close();
})();
