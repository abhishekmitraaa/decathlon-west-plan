"""Extract the 2026 baseline for the West cluster (Pune, Ahmedabad, Rest of West = Surat/Rajkot/Baroda, MP) from the YTD files.
Run with python3 -I; argv[1] = input folder, argv[2] = output json."""
import pandas as pd, sys, glob, json
D, OUT = sys.argv[1], sys.argv[2]
W = ['PUNE', 'AHMEDABAD', 'REST OF WEST', 'MADHYA PRADESH']
CITY = {'PUNE': 'Pune', 'AHMEDABAD': 'Ahmedabad', 'REST OF WEST': 'Surat, Rajkot, Baroda', 'MADHYA PRADESH': 'MP'}

o = pd.read_excel(glob.glob(D + '/*Offiline*')[0]); o.columns = [c.strip().lower() for c in o.columns]
o = o[o['city'] != 'Grand Total']; o[['city', 'type', 'channel']] = o[['city', 'type', 'channel']].ffill(); o = o.dropna(subset=['month'])
o['m'] = pd.to_datetime(o['month'], format='%B %Y').dt.month
ow = o[o.city.isin(W) & (o.m <= 10)]
omni = {}
for (t, ch, c), g in ow.groupby(['type', 'channel', 'city']):
    omni.setdefault(f'{t}|{ch}', {})[CITY[c]] = {'to': float(g.turnover.sum()), 'cust': float(g.customers.sum()), 'ret': float(g['returning customers'].sum())}
monthly = {}
for (m, ch), g in o[o.city.isin(W)].groupby(['m', 'channel']):
    monthly.setdefault(ch, {})[int(m)] = float(g.turnover.sum())
monthly_type = {}
for (m, t), g in o[o.city.isin(W)].groupby(['m', 'type']):
    monthly_type.setdefault(t, {})[int(m)] = float(g.turnover.sum())

d = pd.read_excel(glob.glob(D + '/*digital_data*')[0]); d.columns = [c.strip().lower() for c in d.columns]
d[['city', 'digital channel', 'stores']] = d[['city', 'digital channel', 'stores']].ffill()
dw = d[d.city.isin(W) & (d.month <= 10)]
dig = {}
for (ch, c), g in dw.groupby(['digital channel', 'city']):
    dig.setdefault(ch, {})[CITY[c]] = {'to': float(g.turnover.sum()), 'cust': float(g.customers.sum()), 'new': float(g['new customers'].sum()), 'ret': float(g['returning customers'].sum())}
STORE = {'DSI WAKAD': ('Wakad', 'Pune'), 'DSI WAGHOLI': ('Wagholi', 'Pune'), 'DSI SGS MALL': ('SGS Mall', 'Pune'), 'DSI NIBM': ('NIBM', 'Pune'),
         'DSI AMANORA': ('Amanora', 'Pune'), 'DSI MOTERA': ('Motera', 'Gujarat'), 'DSI NEXUS AHMEDABAD': ('Nexus', 'Gujarat'),
         'DSI DUMAS ROAD': ('Dumas (Surat)', 'Gujarat'), 'DSI BARODA': ('Baroda', 'Gujarat'), 'DSI RAJKOT': ('Rajkot', 'Gujarat'),
         'DSI INDORE': ('Indore', 'MP'), 'DSI BHOPAL DB MALL': ('Bhopal', 'MP'), 'DSI GWALIOR': ('Gwalior', 'MP')}
stores = {}
for st, g in dw[dw.stores.isin(STORE)].groupby('stores'):
    n, s = STORE[st]
    stores[n] = {'state': s, 'sas': float(g.turnover.sum()), 'ace': float(g[g['digital channel'] == 'ACE'].turnover.sum())}
json.dump({'omni': omni, 'monthly': monthly, 'monthly_type': monthly_type, 'dig': dig, 'stores': stores}, open(OUT, 'w'), indent=1)
print('ok', {k: round(v['sas'] / 1e5, 1) for k, v in stores.items()})
