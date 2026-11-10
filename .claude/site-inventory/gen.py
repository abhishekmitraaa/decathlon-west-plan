import json, re, sys, os
D = sys.argv[1]
PAGES = [('index','index.html, main site "Play as One"'),('november','november.html, November and December 2026'),('plan2027','plan2027.html, 2027 sport by sport (Q1 + Q2)'),('water2027','water2027.html, Water sports 2027')]
def undouble(l):
    n=len(l)
    for k in range(2,5):
        if n%k==0 and l[:n//k]*k==l: return l[:n//k]
    return l
def clean(l):
    l=undouble(l.strip())
    l=re.sub(r'\s+',' ',l)
    return l
EXTRA=json.load(open(f'{D}/extra.json')); WQ=json.load(open(f'{D}/wq.json'))
SKIP={'Sound off','Sound on'}
out=[]
out.append('## Appendix B: site content inventory, page by page (rendered 2026-11-10)\n')
out.append('Every visible piece of copy, number, chart label, table row, tab/switch variant and media file on the live site, read from the rendered pages (Chromium at 1440 px, all `<details>` opened, every tab, switch, month, quarter and region button clicked). Generated from the site as of commit 8a84384; refresh it when the site changes. Lines are shown in reading order; "|" separates table cells. "After clicking X" lists only the lines that are new compared with what was already shown above in that section. Sound on/off buttons and duplicate marquee text are left out. Media: `img` = image file, `vid` = video file (poster still in brackets).\n')
for p,label in PAGES:
    meta=json.load(open(f'{D}/{p}.json'))
    ex=json.load(open(f'{D}/{p}.explore.json')) if os.path.exists(f'{D}/{p}.explore.json') else {}
    out.append(f'\n### B.{PAGES.index((p,label))+1} {label}\n')
    out.append(f'- Browser title: "{meta["title"]}". Meta description: "{EXTRA[p]["desc"]}".\n')
    out.append('- Sections in order: '+', '.join(f'`{s["id"] or s["tag"].lower()}`' for s in meta['sections'])+'.\n')
    for o in EXTRA[p]['other']:
        out.append(f'- Outside the sections (`{o["id"] or o["tag"].lower()}`): '+' / '.join(o['text'].split('\n'))+'\n')
    if p=='water2027':
        out.append('- Quarter bar numbers (`#w27QNums`) for every state x quarter:\n'+''.join(f'  - {x}\n' for x in WQ))
    for s in meta['sections']:
        sid=s['id'] or s['tag'].lower()
        m=s['media']
        if s['id'] in ex:
            base=ex[s['id']]['base']; variants=ex[s['id']]['variants']
        else:
            base=s['text'].split('\n'); variants=[]
        lines=[]; seen=set()
        for l in base:
            l=clean(l)
            if not l or l in SKIP or l in seen: continue
            seen.add(l); lines.append(l)
        head = lines[0] if lines else ''
        out.append(f'\n#### {p} › `{sid}`: {head[:90]}\n')
        if m['img']: out.append('- img: '+'; '.join(dict.fromkeys(m['img']))+'\n')
        vids=[v for v in dict.fromkeys(m['vid']) if v.strip()]
        if vids: out.append('- vid: '+'; '.join(vids)+'\n')
        if m['iframe']: out.append('- embeds: '+'; '.join(dict.fromkeys(m['iframe']))+'\n')
        if p=='plan2027' and s['id'] in ('films','playbook'):
            F=json.load(open(f'{D}/films.json'))
            fl=[f.split(' | ') for f in F if f.startswith(s['id']+' |')]
            if fl: out.append('- films (YouTube, play on click): '+'; '.join(f'{a[1]} = youtu.be/{json.loads(a[2])["yt"]}' for a in fl)+'\n')
        if m['links']: out.append('- external links: '+'; '.join(dict.fromkeys(m['links']))+'\n')
        out.append('\n```text\n'+'\n'.join(lines[1:] if lines else [])+'\n```\n')
        for v in variants:
            vl=[]
            for l in v['lines']:
                l=clean(l)
                if not l or l in SKIP or l in seen: continue
                seen.add(l); vl.append(l)
            if vl:
                out.append(f'\nAfter clicking **{v["click"]}**:\n```text\n'+'\n'.join(vl)+'\n```\n')
open(f'{D}/appendixB.md','w').write(''.join(out))
print(len(''.join(out)))
