"""Turn the recalculated Mission 2027 workbook into assets/js/mission27.js for mission2027.html.
Run: python3 -I .claude/build_mission_js.py "<Mission 2027.xlsx>" assets/js/mission27.js
The workbook is built by .claude/mission_build.py (numbers live as formulas; recalculate it first)."""
import sys, json, re, openpyxl

src, out = sys.argv[1], sys.argv[2]
wb = openpyxl.load_workbook(src, data_only=True)

def fmtv(c):
    v, f = c.value, c.number_format or ''
    if v is None or v == '': return ''
    if isinstance(v, str): return v
    if 'Cr' in f: return f'₹{v:,.2f} Cr'
    if '" L"' in f: return f'₹{v:,.1f} L'
    if 'Mn' in f: return f'{v / 1e6:,.0f} Mn'
    if f.startswith('+0.0%'): return f'{v * 100:+.1f} pts'
    if '+0%' in f: return f'{v:+.0%}'
    if '%' in f: return f'{v:.1%}' if '0.0' in f else f'{v:.0%}' if '0.00' not in f else f'{v:.2%}'
    if f.startswith('₹'): return f'₹{v / 1e5:,.0f} L' if v >= 1e5 else f'₹{v:,.0f}'
    if f in ('#,##0', '0'): return f'{round(v):,}'
    if isinstance(v, float) and not v.is_integer(): return f'{v:,.2f}'
    return f'{int(v):,}'

ms = wb['Mission 2027']
tiles = []
for r0 in (8, 12):
    for c0 in (2, 4, 6, 7):
        t, val, sub = ms.cell(r0, c0), ms.cell(r0 + 1, c0), ms.cell(r0 + 2, c0)
        if t.value: tiles.append({'t': t.value, 'v': fmtv(val), 's': sub.value or ''})
sections, cur = [], None
for r in range(16, ms.max_row + 1):
    b, c = ms.cell(r, 2).value, ms.cell(r, 3).value
    if isinstance(b, str) and '·' in b and c is None and ms.cell(r, 2).font.sz >= 12:
        name, sub = [x.strip() for x in b.split('·', 1)]
        cur = {'name': re.sub(r'^\d+\s+', '', name), 'n': name.split()[0], 'sub': sub, 'rows': []}; sections.append(cur); continue
    if cur and isinstance(b, str) and re.match(r'^\d\.\d$', b):
        cur['rows'].append({'n': b, 'obj': c, 'kr': ms.cell(r, 4).value or '', 'prio': ms.cell(r, 5).value, 'how': ms.cell(r, 6).value, 'who': ms.cell(r, 7).value})

ks = wb['KPIs 2027']
kpis, ksec = [], None
for r in range(8, ks.max_row + 1):
    b, c = ks.cell(r, 2).value, ks.cell(r, 3).value
    if isinstance(b, str) and c is None and b.strip() and not b.startswith('Colours'):
        ksec = {'name': b, 'rows': []}; kpis.append(ksec); continue
    if ksec and isinstance(b, str) and re.match(r'^\d\.\d+$', b):
        ksec['rows'].append({'n': b, 'k': c, 'base': fmtv(ks.cell(r, 4)), 'fy': fmtv(ks.cell(r, 5)), 'g': fmtv(ks.cell(r, 6)), 'tgt': fmtv(ks.cell(r, 7)),
                             'st': fmtv(ks.cell(r, 9)), 'prio': ks.cell(r, 10).value, 'how': ks.cell(r, 11).value})

ts = wb['Training plan 2027']
kick, plan, themes = [], [], []
mode = None
for r in range(5, ts.max_row + 1):
    b = ts.cell(r, 2).value
    if isinstance(b, str) and b.startswith(('A. ', 'B. ', 'C. ', 'D. ')): mode = b[0]; continue
    if b in ('Stores', 'Store', 'Quarter', 'When', 'Total', 'Physical sessions') or b is None: continue
    if mode == 'A': kick.append({'s': b, 'c': ts.cell(r, 3).value, 'w': ts.cell(r, 4).value, 'm': ts.cell(r, 5).value, 't': ts.cell(r, 6).value, 'st': ts.cell(r, 10).value})
    elif mode == 'B': plan.append({'s': b, 'c': ts.cell(r, 3).value, 'q': [ts.cell(r, 4 + i).value for i in range(4)]})
    elif mode == 'C': themes.append({'q': b, 'th': ts.cell(r, 3).value, 'tp': ts.cell(r, 4).value, 'chk': ts.cell(r, 7).value, 'kpi': ts.cell(r, 10).value})

ss = wb['Stores 2027']
stores = []
for r in range(8, 22):
    n = ss.cell(r, 2).value
    if not n or n.startswith(('West', 'Focus')): continue
    stores.append({'s': n, 'st': ss.cell(r, 3).value, 'f': ss.cell(r, 4).value == 'Yes', 'sas26': fmtv(ss.cell(r, 5)), 'g': fmtv(ss.cell(r, 7)) if False else f'{ss.cell(r, 7).value:.0%}',
                   'tgt': fmtv(ss.cell(r, 8)), 'aopl': ss.cell(r, 9).value, 'aopp': ss.cell(r, 10).value, 'how': ss.cell(r, 12).value})

sc = wb['Store scorecard']
crit = [sc.cell(7, c).value for c in range(3, 9)]
legend = []
for r in range(20, 40):
    a, b = sc.cell(r, 2).value, sc.cell(r, 3).value
    if a and b and (str(a).isdigit() or a == 'Follow-ups'): legend.append([str(a), b])

qs = wb['Quarter plan']
quarters = [{'w': qs.cell(r, 2).value, 'a': qs.cell(r, 3).value, 'm': qs.cell(r, 4).value, 'k': qs.cell(r, 5).value} for r in range(6, qs.max_row + 1) if qs.cell(r, 2).value]

data = {'tiles': tiles, 'sections': sections, 'kpis': kpis, 'kick': kick, 'plan': plan, 'themes': themes, 'stores': stores, 'crit': crit, 'legend': legend, 'quarters': quarters}
with open(out, 'w', encoding='utf-8') as fh:
    fh.write('/* Mission 2027 for Anandita Mitra (CDMR, West), generated from "Anandita Mitra - Mission 2027.xlsx" by .claude/build_mission_js.py.\n'
             '   Numbers come from the workbook formulas (2026 baseline = West, Jan-Oct 2026, from the YTD files). Do not edit by hand: rebuild. */\n')
    fh.write('window.MISSION27 = ' + json.dumps(data, ensure_ascii=False, indent=1) + ';\n')
print('ok', len(tiles), [len(s['rows']) for s in sections], [len(k['rows']) for k in kpis], len(kick), len(plan), len(themes), len(stores), len(legend), len(quarters))
