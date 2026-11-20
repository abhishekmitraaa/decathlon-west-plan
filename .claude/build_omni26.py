"""Build assets/js/omni26.js (window.OMNI26): omni and digital turnover 2026 by market (Pune, Gujarat, MP) from the user's
"Offline + online YTD 2026" and "digital data YTD 2026" files (uploaded 18 Nov 2026).
Run: python3 -I .claude/build_omni26.py <offline_plus_online.xlsx> <digital_data.xlsx> assets/js/omni26.js"""
import sys, json
import pandas as pd

OFF, DIG, OUT = sys.argv[1:4]
BU = {'PUNE': 'Pune', 'AHMEDABAD': 'Gujarat', 'REST OF WEST': 'Gujarat', 'MADHYA PRADESH': 'MP'}
CL = {'PUNE': 'Pune', 'AHMEDABAD': 'Ahmedabad', 'REST OF WEST': 'Surat, Rajkot, Baroda', 'MADHYA PRADESH': 'MP'}

o = pd.read_excel(OFF); o.columns = [c.strip().lower() for c in o.columns]
o = o[o['city'] != 'Grand Total']; o[['city', 'type', 'channel']] = o[['city', 'type', 'channel']].ffill(); o = o.dropna(subset=['month'])
o['m'] = pd.to_datetime(o['month'], format='%B %Y').dt.month
o = o[o.city.isin(BU)].copy(); o['bu'] = o.city.map(BU); o['cl'] = o.city.map(CL)

CH = ['POS', 'SCO', 'STOREASSISTED', 'Scan and Go', 'OUTOFCATCHMENT', 'CATCHMENTORDER', 'CLICK&COLLECT', 'RESERVE&COLLECT', 'QC_EXPRESS', 'B2B_CORE']
def block(df):
    f = df[df.m <= 10]
    ch = {c: round(float(f[f.channel == c].turnover.sum())) for c in CH}
    ins = round(float(f[f.type == 'InStore'].turnover.sum())); out = round(float(f[f.type == 'OutStore'].turnover.sum()))
    cust = f[f.type == 'InStore'].customers.sum(); ret = f[f.type == 'InStore']['returning customers'].sum()
    months_omni = [round(float(df[df.m == i].turnover.sum())) for i in range(1, 12)]
    months_dig = [round(float(df[(df.m == i) & ((df.type == 'OutStore') | (df.channel == 'STOREASSISTED'))].turnover.sum())) for i in range(1, 12)]
    return {'omni': ins + out, 'in': ins, 'out': out, 'dig': out + ch['STOREASSISTED'], 'ch': ch,
            'ret': round(float(ret / cust * 100), 1) if cust else None, 'mOmni': months_omni, 'mDig': months_dig}

res = {'bu': {}, 'cl': {}}
for b in ['Pune', 'Gujarat', 'MP']: res['bu'][b] = block(o[o.bu == b])
for c in ['Ahmedabad', 'Surat, Rajkot, Baroda']: res['cl'][c] = block(o[o.cl == c])
res['west'] = block(o)

d = pd.read_excel(DIG); d.columns = [c.strip().lower() for c in d.columns]
d[['city', 'digital channel', 'stores']] = d[['city', 'digital channel', 'stores']].ffill()
d = d[d.city.isin(BU)].copy(); d['bu'] = d.city.map(BU)
STORE = {'DSI WAKAD': 'Wakad', 'DSI WAGHOLI': 'Wagholi', 'DSI SGS MALL': 'SGS Mall', 'DSI NIBM': 'NIBM', 'DSI AMANORA': 'Amanora', 'DSI MOTERA': 'Motera',
         'DSI NEXUS AHMEDABAD': 'Nexus', 'DSI DUMAS ROAD': 'Dumas (Surat)', 'DSI BARODA': 'Baroda', 'DSI RAJKOT': 'Rajkot', 'DSI INDORE': 'Indore',
         'DSI BHOPAL DB MALL': 'Bhopal', 'DSI GWALIOR': 'Gwalior'}
f = d[d.month <= 10]
res['digCh'] = {b: {ch: round(float(f[(f.bu == b) & (f['digital channel'] == ch)].turnover.sum())) for ch in ['App', 'Web', 'ACE', 'MarketPlace', 'B2B']} for b in ['Pune', 'Gujarat', 'MP']}
res['digCust'] = {b: {k: int(f[(f.bu == b) & f['digital channel'].isin(['App', 'Web', 'ACE'])][k].sum()) for k in ['new customers', 'returning customers']} for b in ['Pune', 'Gujarat', 'MP']}
st = f[f.stores.isin(STORE)].groupby(['stores', 'bu']).turnover.sum().reset_index()
res['stores'] = sorted([[STORE[r.stores], r.bu, round(float(r.turnover))] for r in st.itertuples()], key=lambda x: -x[2])
with open(OUT, 'w', encoding='utf-8') as fh:
    fh.write('/* Omni and digital turnover 2026 by market, from the user\'s "Offline + online YTD 2026" and "digital data YTD 2026" files (18 Nov 2026).\n'
             '   Rupees. Totals are January to October (complete months); mOmni / mDig are January to November (November = to about the 17th).\n'
             '   Gujarat = Ahmedabad + Rest of West (Surat, Rajkot, Baroda). Digital = out-store channels + SAS (store assisted, in-store).\n'
             '   ch: POS, SCO, SAS (STOREASSISTED), Scan and Go = in-store; out of catchment, catchment orders, click & collect, reserve & collect, express (QC), B2B = out-store.\n'
             '   stores: [store, market, digital sales booked at the store (ACE + app + web), Jan-Oct]. Built by .claude/build_omni26.py. */\n')
    fh.write('window.OMNI26 = ' + json.dumps(res, ensure_ascii=False) + ';\n')
print({b: (round(v['omni'] / 1e7, 2), round(v['dig'] / 1e7, 2), round(v['dig'] / v['omni'] * 100, 1)) for b, v in res['bu'].items()})
