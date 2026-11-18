"""Build 'Anandita Mitra - Mission 2027.xlsx'. argv[1] = mission.json, argv[2] = output path."""
import json, sys
from openpyxl import Workbook
from openpyxl.styles import Font, PatternFill, Alignment, Border, Side
from openpyxl.utils import get_column_letter as L
from openpyxl.comments import Comment

d = json.load(open(sys.argv[1], encoding='utf-8'))
OUT = sys.argv[2]
F = 'Arial'
INK, BLUE, MINT, GREY, LINE = '101A4F', '3643BA', '2BFF88', '5B6285', 'D5D9EA'
def font(sz=10, b=False, c=INK, i=False): return Font(name=F, size=sz, bold=b, color=c, italic=i)
def fill(c): return PatternFill('solid', start_color=c, end_color=c)
thin = Side(style='thin', color=LINE)
BOX = Border(left=thin, right=thin, top=thin, bottom=thin)
WRAP = Alignment(wrap_text=True, vertical='top', horizontal='left')
WRAPC = Alignment(wrap_text=True, vertical='center', horizontal='left')
CEN = Alignment(wrap_text=True, vertical='center', horizontal='center')
INPUT = font(10, False, '0000FF')      # blue = typed input
LINK = font(10, False, '008000')       # green = link to another sheet
CR = '₹#,##0.00" Cr"'
LK = '₹#,##0.0" L"'
PCT = '0.0%'
NUM = '#,##0'
wb = Workbook()

def title(ws, t, sub, width_to='J'):
    ws.sheet_view.showGridLines = False
    ws['B2'] = t; ws['B2'].font = font(18, True)
    ws['B3'] = sub; ws['B3'].font = font(9.5, False, GREY); ws['B3'].alignment = Alignment(wrap_text=True, vertical='top')
    ws.merge_cells(f'B3:{width_to}3'); ws.row_dimensions[3].height = 30
    ws.column_dimensions['A'].width = 2

def head(ws, r, c0, labels, bg=INK):
    for j, h in enumerate(labels):
        c = ws.cell(r, c0 + j, h); c.font = font(10, True, 'FFFFFF'); c.fill = fill(bg); c.alignment = CEN; c.border = BOX
    ws.row_dimensions[r].height = 30

def cellset(ws, r, c, v, fmt=None, f=None, al=None, bg=None, border=True):
    x = ws.cell(r, c, v)
    if fmt: x.number_format = fmt
    x.font = f or font(10)
    x.alignment = al or WRAPC
    if bg: x.fill = fill(bg)
    if border: x.border = BOX
    return x

# ====================================================== 2026 baseline (data)
bs = wb.active; bs.title = '2026 baseline'
title(bs, '2026 baseline: West cluster, January to October 2026',
      'From the user\'s files "Offline + online YTD 2026" (in-store and out-store channels) and "digital data YTD 2026" (digital channels and stores). '
      'Jan to Oct = complete months; November is partial (to the 17th) and left out. Rest of West = Surat (Dumas), Rajkot, Baroda. Blue = numbers from the files.', 'H')
for col, w in zip('BCDEFGH', [30, 16, 16, 16, 16, 16, 34]): bs.column_dimensions[col].width = w
CITIES = ['Pune', 'Ahmedabad', 'Surat, Rajkot, Baroda', 'MP']
r = 5
bs.cell(r, 2, 'A. Omni turnover by channel (₹ Cr, Jan to Oct 2026)').font = font(12, True); r += 1
head(bs, r, 2, ['Channel'] + CITIES + ['West total', 'What it is']); r += 1
CH = [('InStore|POS', 'In-store: tills (POS)', 'Paid at the till'), ('InStore|SCO', 'In-store: self checkout (SCO)', 'Self checkout'),
      ('InStore|STOREASSISTED', 'In-store: SAS (store assisted)', 'Sold by a teammate on ACE, or on the customer\'s app in the store'),
      ('InStore|Scan and Go', 'In-store: Scan & Go', 'Customer scans and pays on the app'),
      ('OutStore|OUTOFCATCHMENT', 'Out-store: out of catchment (OOC)', 'Online orders from outside the stores\' catchments'),
      ('OutStore|CATCHMENTORDER', 'Out-store: catchment orders', 'Online orders inside a store catchment'),
      ('OutStore|CLICK&COLLECT', 'Out-store: click & collect', 'Order online, pick up in store'),
      ('OutStore|RESERVE&COLLECT', 'Out-store: reserve & collect', 'Reserve online, pay in store'),
      ('OutStore|QC_EXPRESS', 'Out-store: express delivery (QC)', 'Quick commerce / 2-hour express (Pune, Ahmedabad)'),
      ('OutStore|B2B_CORE', 'Out-store: B2B', 'Business orders')]
ROW = {}
first = r
for key, lab, note in CH:
    cellset(bs, r, 2, lab, f=font(10, key.startswith('InStore|STORE') or 'QC' in key))
    for j, c in enumerate(CITIES):
        v = d['omni'].get(key, {}).get(c, {}).get('to', 0) / 1e7
        cellset(bs, r, 3 + j, round(v, 4), '#,##0.00', INPUT)
    cellset(bs, r, 7, f'=SUM(C{r}:F{r})', '#,##0.00', font(10, True))
    cellset(bs, r, 8, note, f=font(9, False, GREY))
    ROW[key] = r; r += 1
last = r - 1
for lab, cond in [('In-store total', 'InStore'), ('Out-store total', 'OutStore')]:
    rows = [ROW[k] for k, _, _ in CH if k.startswith(cond)]
    cellset(bs, r, 2, lab, f=font(10, True), bg='E8EBFF')
    for j in range(5):
        col = L(3 + j); cellset(bs, r, 3 + j, '=' + '+'.join(f'{col}{x}' for x in rows), '#,##0.00', font(10, True), bg='E8EBFF')
    cellset(bs, r, 8, '', bg='E8EBFF'); ROW[lab] = r; r += 1
cellset(bs, r, 2, 'Omni total', f=font(10, True, 'FFFFFF'), bg=INK)
for j in range(5):
    col = L(3 + j); cellset(bs, r, 3 + j, f'={col}{ROW["In-store total"]}+{col}{ROW["Out-store total"]}', '#,##0.00', font(10, True, 'FFFFFF'), bg=INK)
cellset(bs, r, 8, '', bg=INK); ROW['Omni'] = r; r += 1
cellset(bs, r, 2, 'Digital (out-store + SAS)', f=font(10, True), bg='D9FFE9')
for j in range(5):
    col = L(3 + j); cellset(bs, r, 3 + j, f'={col}{ROW["Out-store total"]}+{col}{ROW["InStore|STOREASSISTED"]}', '#,##0.00', font(10, True), bg='D9FFE9')
cellset(bs, r, 8, 'How this mission counts digital: every out-store channel plus SAS', f=font(9, False, GREY), bg='D9FFE9'); ROW['Digital'] = r; r += 1
cellset(bs, r, 2, 'Digital share of omni', f=font(10, True))
for j in range(5):
    col = L(3 + j); cellset(bs, r, 3 + j, f'=IF({col}{ROW["Omni"]}=0,0,{col}{ROW["Digital"]}/{col}{ROW["Omni"]})', PCT, font(10, True))
cellset(bs, r, 8, ''); ROW['DigShare'] = r; r += 1
cellset(bs, r, 2, 'SAS share of in-store', f=font(10, True))
for j in range(5):
    col = L(3 + j); cellset(bs, r, 3 + j, f'=IF({col}{ROW["In-store total"]}=0,0,{col}{ROW["InStore|STOREASSISTED"]}/{col}{ROW["In-store total"]})', PCT, font(10, True))
cellset(bs, r, 8, ''); ROW['SASShare'] = r; r += 2

# customers
bs.cell(r, 2, 'B. Customers (sum of monthly counts, Jan to Oct 2026)').font = font(12, True); r += 1
head(bs, r, 2, ['Measure'] + CITIES + ['West total', 'Note']); r += 1
def omni_sum(c, field, pref):
    return sum(v.get(c, {}).get(field, 0) for k, v in d['omni'].items() if k.startswith(pref))
for lab, field, pref in [('In-store customers', 'cust', 'InStore'), ('In-store returning customers', 'ret', 'InStore')]:
    cellset(bs, r, 2, lab)
    for j, c in enumerate(CITIES): cellset(bs, r, 3 + j, omni_sum(c, field, pref), NUM, INPUT)
    cellset(bs, r, 7, f'=SUM(C{r}:F{r})', NUM, font(10, True)); cellset(bs, r, 8, 'Monthly counts added up, so a customer can count more than once', f=font(9, False, GREY))
    ROW[lab] = r; r += 1
cellset(bs, r, 2, 'Returning share (in-store)', f=font(10, True))
for j in range(5):
    col = L(3 + j); cellset(bs, r, 3 + j, f'=IF({col}{ROW["In-store customers"]}=0,0,{col}{ROW["In-store returning customers"]}/{col}{ROW["In-store customers"]})', PCT, font(10, True))
cellset(bs, r, 8, ''); ROW['RetShare'] = r; r += 1
for lab, ch, field in [('New digital customers (app + web + ACE)', ['App', 'Web', 'ACE'], 'new'), ('Returning digital customers (app + web + ACE)', ['App', 'Web', 'ACE'], 'ret')]:
    cellset(bs, r, 2, lab)
    for j, c in enumerate(CITIES): cellset(bs, r, 3 + j, sum(d['dig'][x].get(c, {}).get(field, 0) for x in ch), NUM, INPUT)
    cellset(bs, r, 7, f'=SUM(C{r}:F{r})', NUM, font(10, True)); cellset(bs, r, 8, 'From the digital file', f=font(9, False, GREY))
    ROW[lab] = r; r += 1
r += 1
# digital channels
bs.cell(r, 2, 'C. Digital turnover by channel (₹ Cr, Jan to Oct 2026, digital file)').font = font(12, True); r += 1
head(bs, r, 2, ['Digital channel'] + CITIES + ['West total', 'Note']); r += 1
DN = {'App': 'App', 'Web': 'Web', 'ACE': 'ACE (teammate app, part of SAS)', 'MarketPlace': 'Marketplaces', 'B2B': 'B2B e-commerce', 'Null': 'Unassigned'}
d0 = r
for ch in ['App', 'Web', 'ACE', 'MarketPlace', 'B2B', 'Null']:
    cellset(bs, r, 2, DN[ch])
    for j, c in enumerate(CITIES): cellset(bs, r, 3 + j, round(d['dig'][ch].get(c, {}).get('to', 0) / 1e7, 4), '#,##0.00', INPUT)
    cellset(bs, r, 7, f'=SUM(C{r}:F{r})', '#,##0.00', font(10, True)); cellset(bs, r, 8, '', f=font(9, False, GREY)); r += 1
cellset(bs, r, 2, 'Digital file total', f=font(10, True), bg='E8EBFF')
for j in range(5):
    col = L(3 + j); cellset(bs, r, 3 + j, f'=SUM({col}{d0}:{col}{r - 1})', '#,##0.00', font(10, True), bg='E8EBFF')
cellset(bs, r, 8, 'Matches out-store + ACE from table A (check)', f=font(9, False, GREY), bg='E8EBFF'); r += 2

# monthly trend
bs.cell(r, 2, 'D. Month by month, West (₹ L)').font = font(12, True); r += 1
head(bs, r, 2, ['Month', 'SAS', 'Express (QC)', 'Out of catchment', 'Scan & Go', 'In-store total', 'Out-store total']); r += 1
MN = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct']
m0 = r
for i, mn in enumerate(MN, start=1):
    cellset(bs, r, 2, mn + ' 2026')
    for j, ch in enumerate(['STOREASSISTED', 'QC_EXPRESS', 'OUTOFCATCHMENT', 'Scan and Go']):
        cellset(bs, r, 3 + j, round(d['monthly'].get(ch, {}).get(str(i), 0) / 1e5, 2), '#,##0.0', INPUT)
    for j, t in enumerate(['InStore', 'OutStore']):
        cellset(bs, r, 7 + j, round(d['monthly_type'][t].get(str(i), 0) / 1e5, 2), '#,##0.0', INPUT)
    r += 1
cellset(bs, r, 2, 'Total Jan to Oct', f=font(10, True), bg='E8EBFF')
for j in range(6):
    col = L(3 + j); cellset(bs, r, 3 + j, f'=SUM({col}{m0}:{col}{r - 1})', '#,##0.0', font(10, True), bg='E8EBFF')
r += 1
bs.cell(r, 2, 'Watch: Scan & Go fell from ₹86.5 L in January to ₹19.2 L in October; express delivery peaked in July (₹25.2 L).').font = font(9.5, True, 'B3261E')
bs.merge_cells(start_row=r, start_column=2, end_row=r, end_column=8)
bs.freeze_panes = 'C5'
B = "'2026 baseline'!"

# ====================================================== Stores 2027
ss = wb.create_sheet('Stores 2027')
title(ss, 'Stores 2027: SAS and AOPs, store by store',
      'SAS by store = digital-file sales booked at the store (ACE + app + web orders placed in store), Jan to Oct 2026. AOPs 2027 = the AOP plan on the West plan site; live now = AOPs signed so far. '
      'Focus stores (IDM, Nov 2026): Indore, Amanora, Wagholi, Surat, Rajkot, Baroda. Blue cells can be changed.', 'L')
for col, w in zip('BCDEFGHIJKL', [16, 10, 9, 14, 15, 11, 15, 12, 12, 12, 30]): ss.column_dimensions[col].width = w
ss['B5'] = 'Full-year factor'; ss['B5'].font = font(10, True)
ss['C5'] = "='KPIs 2027'!$D$5"; ss['C5'].font = LINK; ss['C5'].number_format = '0.00'
ss['D5'] = 'from the KPIs sheet'; ss['D5'].font = font(9, False, GREY)
r = 7
head(ss, r, 2, ['Store', 'State', 'Focus store', 'SAS Jan-Oct 2026', 'SAS 2026 full-year (est.)', 'SAS growth 2027', 'SAS 2027 target', 'AOPs live now', 'AOPs 2027 plan', 'Store page done', 'How we grow it'])
r += 1
AOP = {'Wakad': (58, 54), 'Wagholi': (19, 45), 'SGS Mall': (6, 33), 'NIBM': (None, 32), 'Amanora': (22, 31), 'Motera': (None, 38), 'Nexus': (None, 37),
       'Dumas (Surat)': (None, 36), 'Baroda': (6, 34), 'Rajkot': (None, 19), 'Indore': (None, 36), 'Bhopal': (7, 33), 'Gwalior': (None, 21)}
PAGE = {'Wakad': 0.9565, 'Wagholi': 1.0, 'SGS Mall': 0.9565, 'NIBM': 0.92, 'Amanora': 0.9565, 'Motera': 1.0, 'Nexus': 0.84, 'Dumas (Surat)': 0.96,
        'Baroda': 0.84, 'Rajkot': 1.0, 'Indore': 0.9565, 'Bhopal': 1.0, 'Gwalior': 0.8261}
FOCUS = {'Indore', 'Amanora', 'Wagholi', 'Dumas (Surat)', 'Rajkot', 'Baroda'}
HOW = {'Wakad': 'Keep the lead: ACE in every department, weekly SAS board', 'Wagholi': 'Digital journey test store (Nov-Dec); express + ACE',
       'SGS Mall': 'In-mall traffic to ACE; more AOPs (6 live)', 'NIBM': 'Sign the first AOPs; ACE at checkout', 'Amanora': 'Playground + township; SAS on big tickets',
       'Motera': 'AOPs signed Nov 2026 (gyms, yoga, tennis) into affiliates', 'Nexus': 'Fitness coaches already listed: turn them into affiliates',
       'Dumas (Surat)': 'Surat cluster with Adajan: catchment AOPs, events', 'Baroda': 'Vadodara Marathon, cricket and hoardings into SAS',
       'Rajkot': 'Pickleball and cricket clubs; SAS training', 'Indore': 'Highest SAS in MP: replicate in Bhopal and Gwalior',
       'Bhopal': 'Water sports on the Upper Lake; AOPs', 'Gwalior': 'Smallest SAS: basics first, winter campaign'}
s0 = r
order = ['Wakad', 'Wagholi', 'Amanora', 'SGS Mall', 'NIBM', 'Nexus', 'Motera', 'Dumas (Surat)', 'Baroda', 'Rajkot', 'Indore', 'Bhopal', 'Gwalior']
for n in order:
    st = d['stores'][n]
    foc = n in FOCUS
    bg = 'FFF8E1' if foc else None
    cellset(ss, r, 2, n, f=font(10, True), bg=bg)
    cellset(ss, r, 3, st['state'], bg=bg)
    cellset(ss, r, 4, 'Yes' if foc else '', al=CEN, f=font(10, True, 'B26A00'), bg=bg)
    cellset(ss, r, 5, round(st['sas'] / 1e5, 2), LK, INPUT, bg=bg)
    cellset(ss, r, 6, f'=E{r}*$C$5', LK, bg=bg)
    cellset(ss, r, 7, 0.25 if foc else 0.18, '0%', INPUT, CEN, bg=bg)
    cellset(ss, r, 8, f'=F{r}*(1+G{r})', LK, font(10, True), bg=bg)
    live, plan = AOP[n]
    cellset(ss, r, 9, live if live is not None else 0, NUM, INPUT, CEN, bg=bg)
    cellset(ss, r, 10, plan, NUM, INPUT, CEN, bg=bg)
    cellset(ss, r, 11, PAGE[n], '0%', INPUT, CEN, bg=bg)
    cellset(ss, r, 12, HOW[n], f=font(9, False, GREY), al=WRAP, bg=bg)
    ss.row_dimensions[r].height = 28
    r += 1
s1 = r - 1
cellset(ss, r, 2, 'West total', f=font(10, True, 'FFFFFF'), bg=INK)
for c in (3, 4): cellset(ss, r, c, '', bg=INK)
for c, fmt in [(5, LK), (6, LK), (8, LK), (9, NUM), (10, NUM)]:
    cellset(ss, r, c, f'=SUM({L(c)}{s0}:{L(c)}{s1})', fmt, font(10, True, 'FFFFFF'), CEN if c >= 9 else None, bg=INK)
cellset(ss, r, 7, f'=IF(F{r}=0,0,H{r}/F{r}-1)', '0.0%', font(10, True, 'FFFFFF'), CEN, bg=INK)
cellset(ss, r, 11, f'=AVERAGE(K{s0}:K{s1})', '0%', font(10, True, 'FFFFFF'), CEN, bg=INK)
cellset(ss, r, 12, '', bg=INK)
STOT = r; r += 1
cellset(ss, r, 2, 'Focus stores (6)', f=font(10, True), bg='FFF8E1')
for c in (3, 4): cellset(ss, r, c, '', bg='FFF8E1')
for c, fmt in [(5, LK), (6, LK), (8, LK), (9, NUM), (10, NUM)]:
    cellset(ss, r, c, f'=SUMIF($D${s0}:$D${s1},"Yes",{L(c)}{s0}:{L(c)}{s1})', fmt, font(10, True), CEN if c >= 9 else None, bg='FFF8E1')
cellset(ss, r, 7, f'=IF(F{r}=0,0,H{r}/F{r}-1)', '0.0%', font(10, True), CEN, bg='FFF8E1')
for c in (11, 12): cellset(ss, r, c, '', bg='FFF8E1')
r += 2
notes = ['Check: SAS by store adds up to the SAS channel in the omni file (₹10.74 Cr), so the two files agree.',
         'Growth: focus stores 25%, the others 18% (our proposal; change the blue cells). Surat Adajan opens 27 Dec 2026: add it as a 14th store in January with its own target.',
         'AOPs 2027 plan = AOP_PLAN on the West plan site (449 for the year). Live now: Pune from the site (Wakad 58, Wagholi 19, Amanora 22, SGS 6); Baroda 6 and Bhopal 7; other stores to update. Motera signed 10 more in Nov 2026 (Digital Bible).',
         'Store page done = "My store page" dashboard in the Digital Bible (Nov 2026). Biggest gaps across stores: express delivery info, coaching, playground, events.']
for t in notes:
    ss.cell(r, 2, t).font = font(9.5, False, GREY); ss.merge_cells(start_row=r, start_column=2, end_row=r, end_column=12)
    ss.cell(r, 2).alignment = Alignment(wrap_text=True, vertical='top'); ss.row_dimensions[r].height = 26; r += 1
ss.freeze_panes = 'C8'
S = "'Stores 2027'!"

# ====================================================== Training plan 2027
ts = wb.create_sheet('Training plan 2027')
title(ts, 'Training plan 2027: digital trainings, store by store',
      'Part of my job (user, 18 Nov 2026): digital trainings for every store and for the cluster. JD minimum: one session per store per quarter. '
      'Physical where possible, video call (VC) to top up (manager, IDM 4 Nov 2026). Blue = plan, change it freely; sessions count themselves.', 'J')
for col, w in zip('BCDEFGHIJ', [18, 12, 20, 20, 20, 20, 10, 22, 14]): ts.column_dimensions[col].width = w
r = 5
ts.cell(r, 2, 'A. Kick-off, November and December 2026').font = font(12, True); r += 1
head(ts, r, 2, ['Stores', 'City', 'When', 'Mode', 'Topics', '', '', 'Source', 'Status']); ts.merge_cells(start_row=r, start_column=6, end_row=r, end_column=8); r += 1
KICK = [('Nexus, Motera', 'Ahmedabad', 'November 2026', 'Physical', 'SAS on ACE, express delivery, My Store Page', 'IDM notes', 'To confirm'),
        ('Baroda', 'Vadodara', 'November 2026', 'Physical', 'SAS on ACE, My Store Page, affiliation', 'IDM notes', 'To confirm'),
        ('Wakad, Wagholi, Amanora, SGS Mall, NIBM', 'Pune', '1 Dec; cluster trainings 7-10 Dec 2026', 'Physical', 'SAS, express, digital journey (Wagholi test)', 'IDM notes, Work Done T-35', 'Planned'),
        ('Indore, Bhopal, Gwalior', 'MP', 'December 2026 (next)', 'Physical (MP travel)', 'SAS on ACE, express info, My Store Page, affiliation, AOP registration', 'IDM notes', 'Next'),
        ('Dumas (Surat), Rajkot', 'Surat, Rajkot', 'December 2026', 'VC (top-up)', 'SAS on ACE, My Store Page; Adajan team before opening', 'Our proposal', 'To plan')]
k0 = r
for row in KICK:
    for j, v in enumerate(row[:4]): cellset(ts, r, 2 + j, v, f=font(10, j == 0) if j else font(10, True), al=WRAP)
    ts.merge_cells(start_row=r, start_column=6, end_row=r, end_column=8); cellset(ts, r, 6, row[4], al=WRAP)
    for c in (7, 8): ts.cell(r, c).border = BOX
    cellset(ts, r, 9, row[5], f=font(9, False, GREY), al=WRAP)
    cellset(ts, r, 10, row[6], al=CEN, f=font(9.5, True, 'B26A00' if row[6] == 'Next' else GREY), bg='FFF3D6' if row[6] == 'Next' else None)
    ts.row_dimensions[r].height = 32; r += 1
r += 1
ts.cell(r, 2, 'B. 2027: one session per store per quarter').font = font(12, True); r += 1
head(ts, r, 2, ['Store', 'City', 'Q1 (Jan-Mar)', 'Q2 (Apr-Jun)', 'Q3 (Jul-Sep)', 'Q4 (Oct-Dec)', 'Sessions', 'Digital champion (name)', 'Status']); r += 1
TS = [('Wakad', 'Pune'), ('Wagholi', 'Pune'), ('Amanora', 'Pune'), ('SGS Mall', 'Pune'), ('NIBM', 'Pune'), ('Nexus', 'Ahmedabad'), ('Motera', 'Ahmedabad'),
      ('Dumas', 'Surat'), ('Adajan (opens 27 Dec)', 'Surat'), ('Baroda', 'Vadodara'), ('Rajkot', 'Rajkot'), ('Indore', 'MP'), ('Bhopal', 'MP'), ('Gwalior', 'MP')]
MON = {'Pune': ['Physical · Jan', 'Physical · Apr', 'Physical · Jul', 'Physical · Oct'],
       'Ahmedabad': ['Physical · Feb', 'VC · May', 'Physical · Aug', 'VC · Oct'],
       'Surat': ['Physical · Feb', 'VC · May', 'Physical · Aug', 'VC · Oct'],
       'Vadodara': ['Physical · Feb', 'VC · May', 'Physical · Aug', 'VC · Oct'],
       'Rajkot': ['VC · Feb', 'Physical · May', 'VC · Aug', 'Physical · Nov'],
       'MP': ['VC · Mar', 'Physical · Jun', 'VC · Sep', 'Physical · Nov']}
t0 = r
for n, c in TS:
    foc = n in ('Wagholi', 'Amanora', 'Dumas', 'Baroda', 'Rajkot', 'Indore')
    bg = 'FFF8E1' if foc else None
    cellset(ts, r, 2, n, f=font(10, True), bg=bg); cellset(ts, r, 3, c, bg=bg)
    for q in range(4):
        v = MON[c][q]
        cellset(ts, r, 4 + q, v, f=font(10, False, '0000FF'), al=CEN, bg=('E8F5E9' if v.startswith('Physical') else 'EEF0FF'))
    cellset(ts, r, 8, f'=COUNTA(D{r}:G{r})', NUM, font(10, True), CEN, bg=bg)
    cellset(ts, r, 9, '', bg=bg); cellset(ts, r, 10, 'Planned', al=CEN, f=font(9, False, GREY), bg=bg)
    r += 1
t1 = r - 1
cellset(ts, r, 2, 'Total', f=font(10, True, 'FFFFFF'), bg=INK); cellset(ts, r, 3, '', bg=INK)
for q in range(4):
    col = L(4 + q); cellset(ts, r, 4 + q, f'=COUNTA({col}{t0}:{col}{t1})', NUM, font(10, True, 'FFFFFF'), CEN, bg=INK)
cellset(ts, r, 8, f'=SUM(H{t0}:H{t1})', NUM, font(11, True, MINT), CEN, bg=INK)
cellset(ts, r, 9, f'=COUNTA(I{t0}:I{t1})&" of 14 named"', None, font(10, True, 'FFFFFF'), CEN, bg=INK); cellset(ts, r, 10, '', bg=INK)
TTOT = r; r += 1
cellset(ts, r, 2, 'Physical sessions', f=font(10, True)); cellset(ts, r, 3, '')
cellset(ts, r, 4, f'=COUNTIF(D{t0}:G{t1},"Physical*")', NUM, font(10, True), CEN)
cellset(ts, r, 5, 'Video call sessions', f=font(10, True)); cellset(ts, r, 6, f'=COUNTIF(D{t0}:G{t1},"VC*")', NUM, font(10, True), CEN)
r += 2
ts.cell(r, 2, 'C. What we teach, quarter by quarter, and how we check it worked').font = font(12, True); r += 1
head(ts, r, 2, ['Quarter', 'Theme', 'Topics', '', '', 'We check, the month after', '', '', 'KPI']); ts.merge_cells(start_row=r, start_column=4, end_row=r, end_column=6); ts.merge_cells(start_row=r, start_column=7, end_row=r, end_column=9); r += 1
TOP = [('Q1', 'Sell digital in store', 'SAS on ACE and on the customer\'s app; express delivery (where it runs); app downloads and Scan & Go', 'SAS per store vs target; express orders; Scan & Go back up', '1.2, 1.3'),
       ('Q2', 'Grow the ecosystem', 'Affiliation links for coaches and influencers; AOP registration form; My Store Page and Google profile (offers, reviews)', 'Affiliates live per store; AOPs registered; store page 100%', '1.4, 1.11, 2.4'),
       ('Q3', 'Read the data', 'Weekly dashboard; conversion, traffic, out-of-catchment; digital journey in and out of the store; click & collect, ship from store', 'Store leaders use the dashboard weekly; C&C orders', '1.1, 1.6, 4.1'),
       ('Q4', 'Peak season ready', 'Black Friday and Christmas digital offers; express and SFS lead time; returns and cancellations', 'Lead time and on-time delivery; SAS in peak weeks', '1.2, 4.3')]
for q, th, tp, chk, kpi in TOP:
    cellset(ts, r, 2, q, f=font(11, True, BLUE), al=CEN); cellset(ts, r, 3, th, f=font(10, True), al=WRAP)
    ts.merge_cells(start_row=r, start_column=4, end_row=r, end_column=6); cellset(ts, r, 4, tp, al=WRAP)
    ts.merge_cells(start_row=r, start_column=7, end_row=r, end_column=9); cellset(ts, r, 7, chk, al=WRAP)
    for c in (5, 6, 8, 9): ts.cell(r, c).border = BOX
    cellset(ts, r, 10, kpi, al=CEN, f=font(9.5, True, BLUE))
    ts.row_dimensions[r].height = 44; r += 1
r += 1
ts.cell(r, 2, 'D. Cluster sessions (store leaders + CSMs, video call, once a quarter)').font = font(12, True); r += 1
head(ts, r, 2, ['When', 'With', 'Agenda', '', '', '', '', '', 'Status']); ts.merge_cells(start_row=r, start_column=4, end_row=r, end_column=9); r += 1
c0 = r
for q, mth in [('Q1', 'January'), ('Q2', 'April'), ('Q3', 'July'), ('Q4', 'October')]:
    cellset(ts, r, 2, f'{q} · {mth}', f=font(10, True)); cellset(ts, r, 3, 'Store leaders, CSMs, digital champions', al=WRAP)
    ts.merge_cells(start_row=r, start_column=4, end_row=r, end_column=9)
    cellset(ts, r, 4, 'Last quarter\'s numbers (dashboard), what worked in the focus stores, this quarter\'s training theme and campaign calendar', al=WRAP)
    for c in range(5, 10): ts.cell(r, c).border = BOX
    cellset(ts, r, 10, 'Planned', al=CEN, f=font(9, False, GREY)); ts.row_dimensions[r].height = 30; r += 1
CTOT = r - 1
r += 1
for t in ['Training material in the Digital Bible: SFS (ship from store) training, My Store Page training, affiliation coach deck and registration steps, AOP registration form.',
          'Attendance goes in the upskill dashboard. Physical for Pune every quarter; Gujarat and MP physical twice a year with VC in between (our proposal: move months freely).']:
    ts.cell(r, 2, t).font = font(9.5, False, GREY); ts.merge_cells(start_row=r, start_column=2, end_row=r, end_column=10)
    ts.cell(r, 2).alignment = Alignment(wrap_text=True, vertical='top'); ts.row_dimensions[r].height = 26; r += 1
ts.freeze_panes = 'C5'
TR = "'Training plan 2027'!"

# ====================================================== Store scorecard (two-way feedback)
sc = wb.create_sheet('Store scorecard')
title(sc, 'Store scorecard: two-way feedback, every month',
      'Store leaders give feedback on me through the survey; this is the other direction: how each store works with me on the project. '
      'Score 1 to 5 each month (blue cells), count the follow-ups one action needed, and share it with the store leaders and regional directors.', 'M')
for col, w in zip('BCDEFGHIJKLM', [20, 12, 12, 12, 12, 12, 12, 12, 12, 11, 16, 30]): sc.column_dimensions[col].width = w
sc['B5'] = 'Month'; sc['B5'].font = font(10, True)
sc['C5'] = 'January 2027'; sc['C5'].font = font(10, True, '0000FF'); sc['C5'].fill = fill('FFF59D'); sc['C5'].border = BOX
sc.merge_cells('C5:D5')
r = 7
CRIT = ['Reactivity', 'Actions done on time', 'Data and photos shared', 'Trainings attended', 'Events and AOPs pushed', 'Campaign set-up in store']
head(sc, r, 2, ['Store'] + CRIT + ['Follow-ups for one action', 'Score (out of 5)', 'Status', 'Comment for the store leader'])
sc.row_dimensions[r].height = 44; r += 1
SC = ['Wakad', 'Wagholi', 'Amanora', 'SGS Mall', 'NIBM', 'Nexus', 'Motera', 'Dumas (Surat)', 'Adajan (Surat)', 'Baroda', 'Rajkot', 'Indore', 'Bhopal', 'Gwalior']
c0r = r
for n in SC:
    cellset(sc, r, 2, n, f=font(10, True))
    for j in range(6): cellset(sc, r, 3 + j, None, '0', font(10, True, '0000FF'), CEN, bg='FFFDE7')
    cellset(sc, r, 9, None, '0', font(10, False, '0000FF'), CEN, bg='FFFDE7')
    cellset(sc, r, 10, f'=IF(COUNT(C{r}:H{r})=0,"",ROUND(AVERAGE(C{r}:H{r}),1))', '0.0', font(11, True), CEN)
    cellset(sc, r, 11, f'=IF(J{r}="","",IF(J{r}>=4,"Strong partner",IF(J{r}>=3,"On track","Needs support")))', None, font(9.5, True), CEN)
    cellset(sc, r, 12, '', al=WRAP)
    r += 1
c1r = r - 1
cellset(sc, r, 2, 'West average', f=font(10, True, 'FFFFFF'), bg=INK)
for j in range(7):
    col = L(3 + j)
    cellset(sc, r, 3 + j, f'=IF(COUNT({col}{c0r}:{col}{c1r})=0,"",ROUND(AVERAGE({col}{c0r}:{col}{c1r}),1))', '0.0', font(10, True, 'FFFFFF'), CEN, bg=INK)
cellset(sc, r, 10, f'=IF(COUNT(J{c0r}:J{c1r})=0,"",ROUND(AVERAGE(J{c0r}:J{c1r}),1))', '0.0', font(11, True, MINT), CEN, bg=INK)
cellset(sc, r, 11, f'=COUNTIF(K{c0r}:K{c1r},"Needs support")&" need support"', None, font(9.5, True, 'FFFFFF'), CEN, bg=INK)
cellset(sc, r, 12, '', bg=INK)
r += 2
LEG = [('5', 'Moves on the first message, owns the action, shares results without being asked'),
       ('4', 'Moves after one reminder; actions done on time'),
       ('3', 'Moves after a few reminders; most actions done'),
       ('2', 'Needs follow-ups at several levels; actions late'),
       ('1', 'No response or action, even after escalation'),
       ('Follow-ups', 'How many messages, calls or escalations one action needed. Today it is often about 6 for the same information.')]
sc.cell(r, 2, 'How to score').font = font(11, True, BLUE); r += 1
for a, b in LEG:
    cellset(sc, r, 2, a, f=font(10, True), al=CEN); sc.merge_cells(start_row=r, start_column=3, end_row=r, end_column=12); cellset(sc, r, 3, b)
    for c in range(4, 13): sc.cell(r, c).border = BOX
    r += 1
r += 1
for t in ['Share it each month with the store leaders and the regional directors, and bring it to their IDMs as well as mine, so traffic and digital results are discussed together with how the store worked on the actions.',
          'Copy this sheet for each month (or keep one column of scores per month). Status: 4 or more = strong partner, 3 to 3.9 = on track, under 3 = needs support.']:
    sc.cell(r, 2, t).font = font(9.5, False, GREY); sc.merge_cells(start_row=r, start_column=2, end_row=r, end_column=12)
    sc.cell(r, 2).alignment = Alignment(wrap_text=True, vertical='top'); sc.row_dimensions[r].height = 28; r += 1
sc.freeze_panes = 'C8'

# ====================================================== KPIs 2027
ks = wb.create_sheet('KPIs 2027', 0)
title(ks, 'KPIs 2027: from the 2026 baseline to the 2027 target',
      'Each money KPI starts from the West\'s Jan to Oct 2026 actual (2026 baseline sheet), turned into a full-year 2026 estimate, then grows by the % in the blue cell. '
      'Change any blue cell and every target, and the mission page, update. Replace the full-year factor (or the baselines) with the real December 2026 close in January.', 'L')
for col, w in zip('BCDEFGHIJKL', [8, 40, 15, 16, 12, 16, 12, 16, 14, 52, 2]): ks.column_dimensions[col].width = w
ks['B5'] = 'Full-year factor'; ks['B5'].font = font(10, True); ks.merge_cells('B5:C5')
ks['D5'] = '=12/10'; ks['D5'].font = INPUT; ks['D5'].number_format = '0.00'; ks['D5'].fill = fill('FFF59D'); ks['D5'].border = BOX
ks['E5'] = 'Jan to Oct = 10 months, so ×12/10. A simple estimate: November and December are usually bigger months (Black Friday, Christmas, winter), so the real 2026 close should come in higher.'
ks['E5'].font = font(9, False, GREY); ks.merge_cells('E5:J5'); ks['E5'].alignment = Alignment(wrap_text=True, vertical='center'); ks.row_dimensions[5].height = 28
ks['D5'].comment = Comment('Assumption: full-year 2026 = Jan-Oct × 12/10. Replace with the real December close.', 'Mission 2027')
r = 7
head(ks, r, 2, ['#', 'KPI', '2026 Jan to Oct (actual)', '2026 full year (estimate)', '2027 growth', '2027 target', 'Stretch growth', 'Stretch target', 'Priority', 'How we measure it / source'])
r += 1
K = {}
def section(name, color):
    global r
    for c in range(2, 12):
        x = ks.cell(r, c); x.fill = fill(color)
    ks.cell(r, 2, name).font = font(11, True, 'FFFFFF' if color in (INK, BLUE) else INK)
    ks.row_dimensions[r].height = 20; r += 1

def money(key, num, kpi, base_formula, g, sg, prio, how, fmt=CR):
    """A money KPI from the baseline: base in ₹ Cr (link), full year = base × factor, target = full year × (1 + growth)."""
    global r
    cellset(ks, r, 2, num, al=CEN, f=font(10, True, BLUE))
    cellset(ks, r, 3, kpi, f=font(10, True))
    cellset(ks, r, 4, base_formula, fmt, LINK)
    cellset(ks, r, 5, f'=D{r}*$D$5', fmt)
    cellset(ks, r, 6, g, '0%', INPUT, CEN, bg='FFFDE7')
    cellset(ks, r, 7, f'=E{r}*(1+F{r})', fmt, font(10, True), bg='E8EBFF')
    cellset(ks, r, 8, sg, '0%', INPUT, CEN, bg='FFFDE7')
    cellset(ks, r, 9, f'=E{r}*(1+H{r})', fmt, font(10, False, GREY))
    cellset(ks, r, 10, prio, al=CEN, f=font(9.5, True, {'Must win': 'B3261E', 'Important': 'B26A00', 'Complementary': GREY}[prio]))
    cellset(ks, r, 11, how, f=font(9, False, GREY), al=WRAP)
    ks.row_dimensions[r].height = 30
    K[key] = r; r += 1

def ratio(key, num, kpi, base_formula, target_formula, prio, how):
    global r
    cellset(ks, r, 2, num, al=CEN, f=font(10, True, BLUE))
    cellset(ks, r, 3, kpi, f=font(10, True))
    cellset(ks, r, 4, base_formula, PCT, LINK)
    cellset(ks, r, 5, f'=D{r}', PCT)
    cellset(ks, r, 6, f'=G{r}-E{r}', '+0.0%;-0.0%', font(10, False, GREY), CEN)
    cellset(ks, r, 7, target_formula, PCT, font(10, True), bg='E8EBFF')
    cellset(ks, r, 8, '', bg=None); cellset(ks, r, 9, '')
    cellset(ks, r, 10, prio, al=CEN, f=font(9.5, True, {'Must win': 'B3261E', 'Important': 'B26A00', 'Complementary': GREY}[prio]))
    cellset(ks, r, 11, how, f=font(9, False, GREY), al=WRAP)
    ks.row_dimensions[r].height = 30
    K[key] = r; r += 1

def count(key, num, kpi, base, target, stretch, prio, how, fmt=NUM, base_is_formula=False):
    global r
    cellset(ks, r, 2, num, al=CEN, f=font(10, True, BLUE))
    cellset(ks, r, 3, kpi, f=font(10, True))
    cellset(ks, r, 4, base, fmt, LINK if base_is_formula else INPUT)
    cellset(ks, r, 5, '', fmt)
    cellset(ks, r, 6, f'=IF(OR(D{r}="",D{r}=0),"new",G{r}/D{r}-1)' if base not in ('', None) else 'new', '+0%;-0%', font(10, False, GREY), CEN)
    cellset(ks, r, 7, target, fmt, INPUT if not str(target).startswith('=') else font(10, True), bg='E8EBFF')
    ks.cell(r, 7).font = font(10, True, '0000FF') if not str(target).startswith('=') else font(10, True)
    cellset(ks, r, 8, '', bg=None)
    cellset(ks, r, 9, stretch, fmt, font(10, False, '0000FF') if not str(stretch).startswith('=') else font(10, False, GREY))
    cellset(ks, r, 10, prio, al=CEN, f=font(9.5, True, {'Must win': 'B3261E', 'Important': 'B26A00', 'Complementary': GREY}[prio]))
    cellset(ks, r, 11, how, f=font(9, False, GREY), al=WRAP)
    ks.row_dimensions[r].height = 30
    K[key] = r; r += 1

section('THE BUSINESS (shared with the store leaders)', INK)
money('instore', '0.1', 'In-store turnover, West', f'={B}G{ROW["In-store total"]}', 0.14, 0.18, 'Must win', 'Omni file: POS + SCO + SAS + Scan & Go. Weekly review with the store leaders.')
money('outstore', '0.2', 'Out-store turnover, West (online, express, B2B)', f'={B}G{ROW["Out-store total"]}', 0.25, 0.30, 'Must win', 'Omni file: OOC, catchment, click & collect, reserve & collect, express, B2B.')
cellset(ks, r, 2, '0.3', al=CEN, f=font(10, True, BLUE)); cellset(ks, r, 3, 'Omni turnover, West (the "₹650 Cr business")', f=font(10, True, 'FFFFFF'), bg=INK)
cellset(ks, r, 4, f'=D{K["instore"]}+D{K["outstore"]}', CR, font(10, True, 'FFFFFF'), bg=INK)
cellset(ks, r, 5, f'=E{K["instore"]}+E{K["outstore"]}', CR, font(10, True, 'FFFFFF'), bg=INK)
cellset(ks, r, 6, f'=IF(E{r}=0,0,G{r}/E{r}-1)', '0.0%', font(10, True, 'FFFFFF'), CEN, bg=INK)
cellset(ks, r, 7, f'=G{K["instore"]}+G{K["outstore"]}', CR, font(11, True, MINT), bg=INK)
cellset(ks, r, 8, f'=IF(E{r}=0,0,I{r}/E{r}-1)', '0.0%', font(10, False, 'FFFFFF'), CEN, bg=INK)
cellset(ks, r, 9, f'=I{K["instore"]}+I{K["outstore"]}', CR, font(10, False, 'FFFFFF'), bg=INK)
cellset(ks, r, 10, 'Must win', al=CEN, f=font(9.5, True, MINT), bg=INK)
cellset(ks, r, 11, 'In-store + out-store. Lands close to the ₹650+ Cr in the IDM (Nov 2026).', f=font(9, False, 'FFFFFF'), al=WRAP, bg=INK)
ks.row_dimensions[r].height = 30; K['omni'] = r; r += 1

section('1. DIGITAL', BLUE)
cellset(ks, r, 2, '1.1', al=CEN, f=font(10, True, BLUE)); cellset(ks, r, 3, 'Digital turnover (out-store + SAS)', f=font(10, True))
cellset(ks, r, 4, f'={B}G{ROW["Digital"]}', CR, LINK); cellset(ks, r, 5, f'=D{r}*$D$5', CR)
K['dig'] = r
cellset(ks, r, 6, f'=IF(E{r}=0,0,G{r}/E{r}-1)', '0.0%', font(10, False, GREY), CEN)
cellset(ks, r, 7, f'=G{K["outstore"]}+G{r + 1}', CR, font(10, True), bg='E8EBFF')
cellset(ks, r, 8, f'=IF(E{r}=0,0,I{r}/E{r}-1)', '0.0%', font(10, False, GREY), CEN)
cellset(ks, r, 9, f'=I{K["outstore"]}+I{r + 1}', CR, font(10, False, GREY))
cellset(ks, r, 10, 'Must win', al=CEN, f=font(9.5, True, 'B3261E'))
cellset(ks, r, 11, 'Out-store + SAS. 2026 mission said digital growth > 25%; this follows from 0.2 and 1.2.', f=font(9, False, GREY), al=WRAP)
ks.row_dimensions[r].height = 30; r += 1
money('sas', '1.2', 'SAS: store assisted sales (ACE + customer app in store)', f'={B}G{ROW["InStore|STOREASSISTED"]}', 0.20, 0.30, 'Must win',
      '2026 mission target was ₹9.2 Cr; the West did ₹10.74 Cr by October. Store targets on the Stores sheet.')
ks.cell(K['sas'], 7).value = f"={S}H{STOT}/100"
ks.cell(K['sas'], 6).value = f"=IF(E{K['sas']}=0,0,G{K['sas']}/E{K['sas']}-1)"; ks.cell(K['sas'], 6).font = font(10, False, GREY); ks.cell(K['sas'], 6).fill = PatternFill(fill_type=None)
ks.cell(K['sas'], 6).number_format = '0.0%'
ks.cell(K['sas'], 11).value = '2026 mission target was ₹9.2 Cr; the West did ₹10.74 Cr by October. 2027 target = the sum of the store targets (Stores sheet: focus stores +25%, others +18%).'
ratio('sasshare', '1.3', 'SAS share of in-store turnover', f'={B}G{ROW["SASShare"]}', f'=IF(G{K["instore"]}=0,0,G{K["sas"]}/G{K["instore"]})', 'Important', 'SAS ÷ in-store turnover.')
money('qc', '1.4', 'Express delivery turnover (2-hour / quick commerce)', f'={B}G{ROW["OutStore|QC_EXPRESS"]}', 0.60, 1.25, 'Must win',
      '2026 target ₹2.1 Cr (challenge ₹3.5 Cr) was not reached: ₹1.29 Cr to Oct. Today Pune (₹1.19 Cr) and Ahmedabad only. Stretch = the ₹3.5 Cr challenge.')
money('ooc', '1.5', 'Out-of-catchment online turnover', f'={B}G{ROW["OutStore|OUTOFCATCHMENT"]}', 0.20, 0.25, 'Important', 'OOC P&L tracking, pincode-level investment mapping.')
cellset(ks, r, 2, '1.6', al=CEN, f=font(10, True, BLUE)); cellset(ks, r, 3, 'Click & collect + reserve & collect', f=font(10, True))
cellset(ks, r, 4, f'={B}G{ROW["OutStore|CLICK&COLLECT"]}+{B}G{ROW["OutStore|RESERVE&COLLECT"]}', CR, LINK)
cellset(ks, r, 5, f'=D{r}*$D$5', CR); cellset(ks, r, 6, 0.20, '0%', INPUT, CEN, bg='FFFDE7'); cellset(ks, r, 7, f'=E{r}*(1+F{r})', CR, font(10, True), bg='E8EBFF')
cellset(ks, r, 8, 0.30, '0%', INPUT, CEN, bg='FFFDE7'); cellset(ks, r, 9, f'=E{r}*(1+H{r})', CR, font(10, False, GREY))
cellset(ks, r, 10, 'Important', al=CEN, f=font(9.5, True, 'B26A00')); cellset(ks, r, 11, 'Brings online customers into the store (walk-ins + extra basket).', f=font(9, False, GREY), al=WRAP)
ks.row_dimensions[r].height = 30; K['cc'] = r; r += 1
ratio('digshare', '1.7', 'Digital share of omni turnover', f'={B}G{ROW["DigShare"]}', f'=IF(G{K["omni"]}=0,0,G{K["dig"]}/G{K["omni"]})', 'Important', 'Digital ÷ omni.')
money('newdig', '1.8', 'New digital customers (app + web + ACE)', f'={B}G{ROW["New digital customers (app + web + ACE)"]}', 0.20, 0.30, 'Important',
      'Digital file, new customers, monthly counts added up.', fmt=NUM)
count('aff_n', '1.9', 'Affiliation: coaches and influencers with a live link', 2, 150, 200, 'Important',
      'Digital Bible: 32 partners listed, 10 MoU yes, 2 affiliations done (Nov 2026). Target ≈ 1 a store a month.')
ks.cell(K['aff_n'], 6).value = 'launch year'
count('aff_to', '1.10', 'Affiliation turnover (₹)', 5000, 1000000, 2500000, 'Important', 'IDM DATA sheet: affiliation revenue about ₹5,000 so far. Tableau affiliation revenue, monthly.', fmt='₹#,##0')
ks.cell(K['aff_to'], 6).value = 'launch year'
count('page', '1.11', 'My Store Page and Google profile complete (all stores)', f"={S}K{STOT}", 1, 1, 'Complementary',
      'My store page dashboard (Nov 2026). Gaps: express delivery, coaching, playground, events. GMB offers updated monthly.', fmt='0%', base_is_formula=True)

section('2. MARKETING', MINT)
count('walk', '2.1', 'Walk-ins, West (growth on 2026)', '', '=0.1', '=0.15', 'Must win',
      'Store footfall counters: put the 2026 walk-ins in column D in January. 2026 mission: +9% walk-ins.', fmt='+0%')
ks.cell(K['walk'], 7).value = 0.10; ks.cell(K['walk'], 7).font = font(10, True, '0000FF'); ks.cell(K['walk'], 9).value = 0.15; ks.cell(K['walk'], 9).font = font(10, False, '0000FF')
ks.cell(K['walk'], 6).value = ''
count('camp', '2.2', 'Campaign days turnover (growth on 2026)', '', 0.10, 0.15, 'Must win', 'Country campaigns + local adaptations (Republic Day, summer, anniversary, Diwali, Black Friday). 2026 mission: +10%.', fmt='+0%')
ks.cell(K['camp'], 6).value = ''
ratio('ret', '2.3', 'Returning customers share (in-store)', f'={B}G{ROW["RetShare"]}', f'=D{r}+0.02', 'Important', 'Omni file: returning ÷ customers. Target +2 points (events, AOPs, WhatsApp).')
count('aop', '2.4', 'AOPs (areas of practice) signed in 2027', f"={S}I{STOT}", f"={S}J{STOT}", 500, 'Must win',
      'AOP plan on the West plan site (449). Each AOP: banner, QR code, coach on affiliation. Live now from the site and the Digital Bible.', base_is_formula=True)
count('evt', '2.5', 'Community events (at least 1 a store a month)', 24, 168, 200, 'Must win', 'Digital Bible events tracker: 24 events in 2026 (11 done). 14 stores × 12 months = 168.')
count('evp', '2.6', 'Event participants', 1829, 20000, 25000, 'Important', 'Events tracker: 1,829 attendees so far. Movement for All alone plans 7,500. Count walk-ins from events too.')
count('inf', '2.7', 'Influencers activated (tracked links)', '', 476, 520, 'Important', 'Influencer plan 2027: 476 influencers, ₹49.83 L. Every influencer gets a tracked link (affiliation).')
count('views', '2.8', 'Social views (local reels, influencers, store pages)', 40000000, 50000000, 60000000, 'Important', '2026 mission KR: 40 Mn views.', fmt='#,##0,,"  Mn"')
count('budget', '2.9', 'Marketing budget managed (₹ Cr)', '', 7.6, 7.6, 'Must win', 'IDM: ₹7.6 Cr in 2027 (the West plan site\'s budget lines add up to ₹7.46 Cr: to align). Every campaign gets an ROI report.', fmt='₹0.00" Cr"')
cellset(ks, r, 2, '2.10', al=CEN, f=font(10, True, BLUE)); cellset(ks, r, 3, 'Marketing spend as a share of omni turnover', f=font(10, True))
cellset(ks, r, 4, ''); cellset(ks, r, 5, ''); cellset(ks, r, 6, '')
cellset(ks, r, 7, f'=IF(G{K["omni"]}=0,0,G{K["budget"]}/G{K["omni"]})', '0.00%', font(10, True), bg='E8EBFF'); cellset(ks, r, 8, ''); cellset(ks, r, 9, '')
cellset(ks, r, 10, 'Important', al=CEN, f=font(9.5, True, 'B26A00')); cellset(ks, r, 11, '₹7.6 Cr on this West target is about 1.2%. The IDM says about 0.6% of the relevant top line: check which top line that used. Lean budget: every rupee to show walk-ins or turnover.', f=font(9, False, GREY), al=WRAP)
ks.row_dimensions[r].height = 30; K['spend'] = r; r += 1

section('3. TRAINING (digital upskilling for the stores and the cluster)', 'FFE9C2')
count('kick', '3.1', 'Stores trained in the Nov-Dec 2026 kick-off', '', 13, 14, 'Must win', 'Ahmedabad + Baroda (Nov), Pune (1 Dec, 7-10 Dec), MP physical (Dec), Surat + Rajkot by VC. Training plan sheet, part A.')
count('trn', '3.2', 'Store training sessions in 2027 (1 per store per quarter)', '', f"={TR}H{TTOT}", f"={TR}H{TTOT}", 'Must win', 'Counted from the Training plan sheet (14 stores incl. Adajan × 4 quarters). Physical where possible, VC to top up.')
count('trp', '3.3', 'Teammates trained', '', 0.9, 1, 'Must win', '2026 mission: > 90% team trained. Attendance in the upskill dashboard.', fmt='0%')
count('champ', '3.4', 'Digital champions (one per store)', '', 14, 14, 'Important', 'One teammate per store who trains the others between sessions. Names on the Training plan sheet.')
count('clus', '3.5', 'Cluster sessions with store leaders and CSMs', '', f"=COUNTA({TR}B{c0}:B{CTOT})", 4, 'Important', 'Once a quarter, video call: numbers, what worked, next theme.')

section('4. PEOPLE AND WAY OF WORKING', 'D9FFE9')
count('dash', '4.1', 'Weekly marketing + digital dashboard (country, cluster, store)', '', 1, 1, 'Must win', 'Asked at the Nov 2026 IDM. 1 = live and shared every Monday.', fmt='0')
count('foc', '4.2', 'Focus stores beating the cluster growth', '', 6, 6, 'Must win', 'Indore, Amanora, Wagholi, Surat, Rajkot, Baroda: grow faster, document what works, replicate.')
count('lm', '4.3', 'Last mile: orders delivered on time (L2L)', '', 0.9, 0.95, 'Important', '2026 mission: 90% L2L fulfilment. Shared with logistics; one owner per recurring SFS issue.', fmt='0%')
count('score', '4.4', 'Monthly store scorecard shared (two-way feedback)', '', 12, 12, 'Must win', 'Store scorecard sheet: reactivity, actions on time, data, trainings, events, campaign set-up; follow-ups per action. Shared with store leaders and regional directors.')
count('fup', '4.5', 'Follow-ups needed to get one action done in a store', 6, 2, 1, 'Important', 'Today about 6 (user, Nov 2026): same information sent to several people, levels and places. Average from the scorecard.')
r += 1
ks.cell(r, 2, 'Colours: blue text = typed input (change it); green = taken from another sheet; black = formula; yellow cells = growth levers.').font = font(9, True, GREY)
ks.merge_cells(start_row=r, start_column=2, end_row=r, end_column=11)
ks.freeze_panes = 'D8'
KP = "'KPIs 2027'!"

# ====================================================== Mission 2027 (the one-page mission)
ms = wb.create_sheet('Mission 2027', 0)
ms.sheet_view.showGridLines = False
ms.column_dimensions['A'].width = 2
for col, w in zip('BCDEFGHI', [6, 34, 30, 12, 46, 24, 13, 13]): ms.column_dimensions[col].width = w
ms.merge_cells('B2:I2'); ms['B2'] = 'Anandita Mitra  ·  Mission 2027'; ms['B2'].font = font(22, True, 'FFFFFF'); ms['B2'].fill = fill(INK)
ms['B2'].alignment = Alignment(vertical='center', indent=1); ms.row_dimensions[2].height = 40
ms.merge_cells('B3:I3'); ms['B3'] = 'Regional Marketing Manager (CDMR)  ·  West: Pune, Gujarat, MP  ·  13 stores + Surat Adajan from 27 Dec 2026'
ms['B3'].font = font(10.5, True, MINT); ms['B3'].fill = fill(INK); ms['B3'].alignment = Alignment(vertical='center', indent=1); ms.row_dimensions[3].height = 22
ms.merge_cells('B4:I4')
ms['B4'] = ('My mission: make every rupee of the ₹7.6 Cr marketing budget, every event and every customer interaction count towards growing the West\'s '
            '₹650+ Cr business, through two engines: DIGITAL (affiliation, SAS, express delivery, online) and MARKETING (campaigns, events, AOPs, walk-ins).')
ms['B4'].font = font(10.5, False, INK, True); ms['B4'].alignment = Alignment(wrap_text=True, vertical='center', indent=1); ms['B4'].fill = fill('F5F6FF'); ms.row_dimensions[4].height = 36
ms.merge_cells('B5:I5'); ms['B5'] = 'Mission co-opted by my manager: ____ / ____        Mission co-opted by my functional manager: ____ / ____'
ms['B5'].font = font(9, False, GREY); ms['B5'].alignment = Alignment(vertical='center', indent=1)

# KPI tiles: 2 rows of 4
TILES = [('Omni turnover', f'={KP}G{K["omni"]}', CR, f'="+"&TEXT({KP}F{K["omni"]},"0%")&" on 2026"'),
         ('Digital turnover', f'={KP}G{K["dig"]}', CR, f'="+"&TEXT({KP}F{K["dig"]},"0%")&"  ·  "&TEXT({KP}G{K["digshare"]},"0.0%")&" of omni"'),
         ('SAS', f'={KP}G{K["sas"]}', CR, f'="+"&TEXT({KP}F{K["sas"]},"0%")&"  ·  2026: "&TEXT({KP}D{K["sas"]},"0.00")&" Cr to Oct"'),
         ('Express delivery', f'={KP}G{K["qc"]}', CR, f'="+"&TEXT({KP}F{K["qc"]},"0%")&"  ·  stretch "&TEXT({KP}I{K["qc"]},"0.0")&" Cr"'),
         ('AOPs signed', f'={KP}G{K["aop"]}', NUM, f'="live now: "&TEXT({KP}D{K["aop"]},"0")'),
         ('Community events', f'={KP}G{K["evt"]}', NUM, f'=TEXT({KP}G{K["evp"]},"#,##0")&" participants · walk-ins "&TEXT({KP}G{K["walk"]},"+0%")'),
         ('Affiliates live', f'={KP}G{K["aff_n"]}', NUM, f'="₹"&TEXT({KP}G{K["aff_to"]}/100000,"0")&" L affiliation turnover"'),
         ('Store trainings', f'={KP}G{K["trn"]}', NUM, f'=TEXT({KP}G{K["trp"]},"0%")&" teammates trained · "&TEXT({KP}G{K["champ"]},"0")&" champions"')]
r = 7
ms.merge_cells(start_row=r, start_column=2, end_row=r, end_column=9)
ms.cell(r, 2, 'MAIN KPIs 2027  (live from the KPIs sheet)').font = font(11, True, BLUE); r += 1
cols = [(2, 3), (4, 5), (6, 6), (7, 9)]
for row_i in range(2):
    for k in range(4):
        t, val, fmt, sub = TILES[row_i * 4 + k]
        c0, c1 = cols[k]
        for rr, v, f_, h in [(r, t, font(9, True, GREY), 16), (r + 1, val, font(17, True, INK), 28), (r + 2, sub, font(8.5, False, GREY), 16)]:
            if c1 > c0: ms.merge_cells(start_row=rr, start_column=c0, end_row=rr, end_column=c1)
            x = ms.cell(rr, c0, v); x.font = f_; x.alignment = Alignment(horizontal='left', vertical='center', indent=1, wrap_text=True)
            if rr == r + 1: x.number_format = fmt
            for cc in range(c0, c1 + 1):
                ms.cell(rr, cc).fill = fill('EEF0FF' if row_i == 0 else 'E9FFF2')
            ms.row_dimensions[rr].height = h
        for cc in range(c0, c1 + 1):
            ms.cell(r, cc).border = Border(top=Side(style='medium', color=BLUE if row_i == 0 else '1BAA5E'))
    r += 4
r += 0
HEAD = ['#', 'Objective  (I + verb + what + when)', 'Key result 2027', 'Priority', 'How  (actions with direct impact)', 'With whom', 'H1 check', 'H2 check']

def mhead():
    global r
    for j, h in enumerate(HEAD):
        c = ms.cell(r, 2 + j, h); c.font = font(9.5, True, 'FFFFFF'); c.fill = fill(INK); c.alignment = CEN; c.border = BOX
    ms.row_dimensions[r].height = 22; r += 1

def msection(name, sub, color, ink='FFFFFF'):
    global r
    ms.merge_cells(start_row=r, start_column=2, end_row=r, end_column=9)
    x = ms.cell(r, 2, f'{name}   ·   {sub}'); x.font = font(12, True, ink); x.fill = fill(color); x.alignment = Alignment(vertical='center', indent=1)
    ms.row_dimensions[r].height = 26; r += 1

PRIO = {'Must win': ('FDE7E7', 'B3261E'), 'Important': ('FFF3D6', '8A5A00'), 'Complementary': ('EEF0F6', GREY)}
def mrow(num, obj, kr, prio, how, who):
    global r
    cellset(ms, r, 2, num, al=CEN, f=font(11, True, BLUE))
    cellset(ms, r, 3, obj, f=font(10, True), al=WRAP)
    cellset(ms, r, 4, kr, f=font(10, True, BLUE), al=WRAP, bg='F5F6FF')
    bg, fc = PRIO[prio]; cellset(ms, r, 5, prio, al=CEN, f=font(9.5, True, fc), bg=bg)
    cellset(ms, r, 6, how, f=font(9.5, False, '2D3350'), al=WRAP)
    cellset(ms, r, 7, who, f=font(9, False, GREY), al=WRAP)
    for c in (8, 9): cellset(ms, r, c, 'Not started', al=CEN, f=font(9, False, GREY))
    lines = max(sum(max(1, -(-len(x) // 60)) for x in how.split('\n')), -(-len(obj) // 34), 3)
    ms.row_dimensions[r].height = max(48, 12.5 * lines + 12)
    r += 1

def T(cell, fmt): return f'TEXT({KP}{cell},"{fmt}")'
msection('1  DIGITAL', 'affiliation, SAS, express delivery, online', BLUE)
mhead()
mrow('1.1', 'I grow the West\'s digital business (out-store + SAS) with every store, every month, in 2027',
     f'="₹"&{T("G"+str(K["dig"]),"0.0")}&" Cr digital ("&{T("F"+str(K["dig"]),"+0%")}&")"&CHAR(10)&{T("G"+str(K["digshare"]),"0.0%")}&" of omni turnover"',
     'Must win', '1/ Weekly digital review per store: turnover, conversion, traffic, basket\n2/ Out-of-catchment pincode map: where to invest\n3/ Local campaign adaptations on app and web\n4/ Digital journey outside and inside the store (Wagholi test, Nov-Dec)', 'Regional managers, store leaders, digital team')
mrow('1.2', 'I make SAS a daily habit in all 13 stores: every big-ticket sale offered on ACE or the customer\'s app, from Q1 2027',
     f'="₹"&{T("G"+str(K["sas"]),"0.0")}&" Cr SAS ("&{T("F"+str(K["sas"]),"+0%")}&")"&CHAR(10)&{T("G"+str(K["sasshare"]),"0.0%")}&" of in-store (2026: "&{T("D"+str(K["sasshare"]),"0.0%")}&")"',
     'Must win', '1/ Store targets (Stores sheet), focus stores +25%\n2/ Quarterly SAS challenge between stores\n3/ ACE trained teammates in every department\n4/ Out-of-range (OOR) communication tested in store', 'Store leaders, store teams, digital team')
mrow('1.3', 'I scale express delivery where it runs (Pune, Ahmedabad) and prepare the next city by Q3 2027',
     f'="₹"&{T("G"+str(K["qc"]),"0.0")}&" Cr express ("&{T("F"+str(K["qc"]),"+0%")}&")"&CHAR(10)&"Stretch ₹"&{T("I"+str(K["qc"]),"0.0")}&" Cr (2026 challenge)"',
     'Must win', '1/ In-store express communication + paired influencer activations\n2/ Express info on every My Store Page\n3/ Track 2-hour lead time weekly with last mile\n4/ Business case for Surat or Baroda', 'Logistics, last mile, store teams')
mrow('1.4', 'I launch coach and influencer affiliation as a West project: every partner with a unique link, from January 2027',
     f'={T("G"+str(K["aff_n"]),"0")}&" affiliates live"&CHAR(10)&"₹"&{T("G"+str(K["aff_to"])+"/100000","0")}&" L affiliation turnover"',
     'Important', '1/ Every AOP coach and every influencer gets a link (onboarding deck + registration)\n2/ 1 new affiliate per store per month\n3/ Monthly Tableau revenue check, top partners rewarded', 'Store teams, CSMs, OSA')
mrow('1.5', 'I bring more online customers into the stores and keep them coming back',
     f'="Click & collect + reserve: ₹"&{T("G"+str(K["cc"]),"0.0")}&" Cr"&CHAR(10)&"New digital customers "&{T("F"+str(K["newdig"]),"+0%")}',
     'Important', '1/ Click & collect and reserve & collect pushed in campaigns\n2/ Google profile: offers updated monthly, reviews asked at checkout\n3/ My Store Page 100% (express, coaching, playground, events)', 'Store teams, digital, MarCom')
r += 1
msection('2  MARKETING', 'campaigns, events, AOPs, walk-ins', MINT, INK)
mhead()
mrow('2.1', 'I turn every campaign into store traffic: country campaigns adapted to each city\'s moments, all of 2027',
     f'="Walk-ins "&{T("G"+str(K["walk"]),"+0%")}&CHAR(10)&"Campaign days turnover "&{T("G"+str(K["camp"]),"+0%")}',
     'Must win', '1/ One city marketing calendar (West plan site), shared each quarter\n2/ Local adaptations: festivals, sports events, gifting, new arrivals\n3/ In-mall investments where traffic is\n4/ Real-time animation during campaigns', 'MarCom, store leaders, regional managers')
mrow('2.2', 'I build the sport ecosystem around every store: AOPs signed, branded and turned into customers, every quarter',
     f'={T("G"+str(K["aop"]),"0")}&" AOPs signed (live now "&{T("D"+str(K["aop"]),"0")}&")"&CHAR(10)&"Every AOP with a banner, QR and coach link"',
     'Must win', '1/ AOP plan store by store (Stores sheet), registration form for every place\n2/ Practice places and clubs mapped per catchment\n3/ AOP coaches into affiliation (1.4)\n4/ Quarterly AOP report: footfall and turnover', 'Store leaders, store teams, CSMs')
mrow('2.3', 'I run at least one community event per store per month and measure what it brings to the store',
     f'={T("G"+str(K["evt"]),"0")}&" events · "&{T("G"+str(K["evp"]),"#,##0")}&" participants"&CHAR(10)&"Returning share "&{T("G"+str(K["ret"]),"0.0%")}',
     'Must win', '1/ One flagship event a month (Movement for All, Women\'s Day, summer camp, Sports Utsav...)\n2/ Event journey: plan, brand, film, testimonials, bring participants to the store\n3/ Event report shared with the store team', 'Store teams, CSMs, D-Play, event partners')
mrow('2.4', 'I grow our local voice on social with influencers and teammate content, every month',
     f'={T("G"+str(K["views"]),"#,##0,,")}&" Mn views"&CHAR(10)&{T("G"+str(K["inf"]),"0")}&" influencers with tracked links"',
     'Important', '1/ Profiles shortlisted by me and the vendor team, not only from agency lists: sport, city and customer fit\n2/ Local influencer calendar by sport and event (476 in the 2027 plan)\n3/ Every influencer measured on walk-ins and sales (tracked link)\n4/ Teammate videos and store pages', 'MarCom, store leaders, agencies')
mrow('2.5', 'I spend the ₹7.6 Cr budget like my own money: every campaign with a measured return, from Q1 2027',
     f'="₹"&{T("G"+str(K["budget"]),"0.0")}&" Cr budget · "&{T("G"+str(K["spend"]),"0.00%")}&" of omni"&CHAR(10)&"100% campaigns with an ROI report"',
     'Must win', '1/ Relevant visibility first: who sees it, where (question mobile hoardings and fairs)\n2/ Negotiate influencers and vendors directly\n3/ Quarterly business review: spend vs walk-ins and turnover', 'Regional managers, MarCom, finance')
r += 1
msection('3  TRAINING', 'digital trainings for every store and for the cluster', 'FFE9C2', INK)
mhead()
mrow('3.1', 'I train every store in digital, one session per store per quarter, starting with the MP trainings in December 2026',
     f'={T("G"+str(K["kick"]),"0")}&" stores trained by Dec 2026"&CHAR(10)&{T("G"+str(K["trn"]),"0")}&" sessions in 2027 · "&{T("G"+str(K["trp"]),"0%")}&" trained"',
     'Must win', '1/ Kick-off: Ahmedabad + Baroda (Nov), Pune (1 Dec, 7-10 Dec), MP in person (Dec)\n2/ 2027 training planner signed off by December (Training plan sheet)\n3/ Physical where possible, video call to top up\n4/ Attendance in the upskill dashboard', 'Store leaders, store teams, training team')
mrow('3.2', 'I teach what moves the numbers: one theme a quarter, checked in the KPIs the month after',
     '="Q1 SAS + express · Q2 affiliation, AOPs, store page"&CHAR(10)&"Q3 data + journey · Q4 peak season"', 'Must win',
     '1/ Q1: SAS on ACE and the customer app, express delivery\n2/ Q2: affiliation links, AOP registration, My Store Page\n3/ Q3: weekly dashboard, conversion, digital journey\n4/ Q4: peak offers, SFS lead time, returns\n5/ Refresher where a store\'s numbers did not move', 'Store leaders, digital team')
mrow('3.3', 'I build a digital champion in every store and a quarterly cluster session, so learning continues between my visits',
     f'={T("G"+str(K["champ"]),"0")}&" digital champions"&CHAR(10)&{T("G"+str(K["clus"]),"0")}&" cluster sessions (store leaders + CSMs)"', 'Important',
     '1/ One champion per store, named in Q1\n2/ Champions run 15-minute refreshers in team briefings\n3/ Quarterly video call: numbers, what worked, next theme', 'Store leaders, CSMs, champions')
r += 1
msection('4  PEOPLE AND WAY OF WORKING', 'a system that runs without me chasing it', 'D9FFE9', INK)
mhead()
mrow('4.1', 'I share one weekly dashboard for marketing and digital (country, cluster, store) from January 2027',
     '="Live every Monday"&CHAR(10)&"Store leaders act on it"', 'Must win',
     '1/ Build it before the next IDM\n2/ Same KPIs as this mission\n3/ Store-level view for the weekly review', 'Regional managers, store leaders, digital')
mrow('4.2', 'I prove the model in 6 focus stores first, then replicate it in the other stores from H2 2027',
     '="Indore, Amanora, Wagholi,"&CHAR(10)&"Surat, Rajkot, Baroda beat cluster growth"', 'Must win',
     '1/ Focus store targets +25% SAS (Stores sheet)\n2/ Document what works each quarter\n3/ Regional directors to set the importance at store level', 'Regional directors, store leaders')
mrow('4.3', 'I set up a vendor team working with me every day in Pune, Gujarat and MP, so influencers, events and content run every week',
     '="Vendor proposal validated in Q1"&CHAR(10)&"Events run without me chasing"', 'Important',
     '1/ A4 vendor proposal to my manager (profiles being shortlisted)\n2/ Daily team in Pune, Gujarat and MP: influencers, content, events\n3/ CSMs trained where marketing is part of the role\n4/ Clear owner for each event and campaign', 'My manager, vendor, CSMs')
mrow('4.4', 'I bring structure to ship-from-store and last-mile issues: one owner per recurring problem',
     f'={T("G"+str(K["lm"]),"0%")}&" orders delivered on time"&CHAR(10)&"Digital offers decided weekly"', 'Important',
     '1/ Cross-functional SFS meeting each month\n2/ Returns, last mile and CX: one process\n3/ Structure for digital offers (supply)', 'Last mile, supply, CX, store leaders')
mrow('4.5', 'I set up two-way feedback with the stores: a monthly store scorecard shared with store leaders and regional directors, from January 2027',
     f'={T("G"+str(K["score"]),"0")}&" monthly scorecards"&CHAR(10)&"Follow-ups per action: "&{T("D"+str(K["fup"]),"0")}&" today, "&{T("G"+str(K["fup"]),"0")}&" by end 2027"', 'Must win',
     '1/ Score each store monthly: reactivity, actions on time, data, trainings, events, campaign set-up\n2/ Count the follow-ups one action needs\n3/ Discussed in store leaders\' IDMs as well as mine\n4/ Celebrate the strongest partner store each quarter', 'Store leaders, regional directors, my manager')
r += 1
msection('5  ADDITIONAL ROLE  (< 20% of my time)', 'only once the main mission runs on its own', 'EEF0F6', INK)
mhead()
mrow('5.1', 'I support the Surat cluster launch (Adajan, 27 Dec 2026) and the 2030 Commonwealth Games build-up in Ahmedabad',
     '="Adajan: ₹2.5 Cr in 30 days"&CHAR(10)&"(launch plan on the site)"', 'Complementary',
     '1/ Adajan AOPs, hoardings and events\n2/ Commonwealth: support the Gujarat team', 'Gujarat team')
mrow('5.2', 'I grow my management skills in marketing', '="Trainings and mentoring"&CHAR(10)&"through 2027"', 'Complementary',
     '1/ Trainings and mentoring\n2/ Learn from other CDMRs (team set-ups)', 'My manager')
r += 1
ms.merge_cells(start_row=r, start_column=2, end_row=r, end_column=9)
ms.cell(r, 2, 'Key results are live formulas from the KPIs sheet: change a growth % there and this page updates. '
              'Baselines: West, Jan to Oct 2026, from the YTD files. Mission draft for the next IDM (asked on 4 Nov 2026).').font = font(8.5, False, GREY, True)
ms.cell(r, 2).alignment = Alignment(wrap_text=True); ms.row_dimensions[r].height = 26
r += 1
ms.merge_cells(start_row=r, start_column=2, end_row=r, end_column=9)
ms.cell(r, 2, 'Decathlon • Individual Mission • CONFIDENTIAL, NO REPRODUCTION ALLOWED NOR EXTERNAL COMMUNICATION').font = font(8, False, GREY)
ms.page_setup.orientation = 'landscape'; ms.page_setup.fitToWidth = 1; ms.page_setup.fitToHeight = 0; ms.sheet_properties.pageSetUpPr.fitToPage = True
ks.page_setup.orientation = 'landscape'; ks.page_setup.fitToWidth = 1; ks.page_setup.fitToHeight = 0; ks.sheet_properties.pageSetUpPr.fitToPage = True

# ====================================================== Quarter plan
qs = wb.create_sheet('Quarter plan')
title(qs, '2027, quarter by quarter', 'The milestones that move the KPIs. Status column for the IDMs.', 'F')
for col, w in zip('BCDEF', [14, 22, 62, 22, 14]): qs.column_dimensions[col].width = w
r = 5
head(qs, r, 2, ['When', 'Area', 'Milestone', 'KPI it moves', 'Status']); r += 1
Q = [('Nov 2026', 'Training', 'Ahmedabad (Nexus, Motera) and Baroda trainings, in person', '3.1'),
     ('Dec 2026', 'Training', 'Pune: 1 Dec, cluster digital trainings 7-10 Dec; MP in person (Indore, Bhopal, Gwalior) next; Surat + Rajkot by video call', '3.1'),
     ('Dec 2026', 'Training', '2027 training planner signed off (Training plan sheet); digital champions chosen', '3.2, 3.4'),
     ('Nov-Dec 2026', 'Digital', 'Digital journey outside and inside the store at Wagholi, validated in Nov and Dec', '1.1, 1.2'),
     ('Nov-Dec 2026', 'People', 'Mission 2027 presented at the next IDM; weekly dashboard drafted; vendor A4 proposal sent', '4.1'),
     ('Q1 2027', 'Training', 'Theme: SAS on ACE and the customer app, express delivery; cluster session in January', '3.2, 3.5'),
     ('Q2 2027', 'Training', 'Theme: affiliation links, AOP registration, My Store Page; cluster session in April', '3.2, 3.5'),
     ('Q3 2027', 'Training', 'Theme: weekly dashboard, conversion, digital journey; cluster session in July', '3.2, 3.5'),
     ('Q4 2027', 'Training', 'Theme: peak season offers, SFS lead time, returns; cluster session in October', '3.2, 3.5'),
     ('Q1 2027', 'Digital', 'Store SAS targets shared; quarterly SAS challenge starts; affiliation onboarding for every AOP coach', '1.2, 1.4'),
     ('Q1 2027', 'Marketing', 'Movement for All (Jan), clearance sale, Women\'s Day (Mar), summer and water sports from March; 152 AOPs in Q1', '2.1, 2.2, 2.3'),
     ('Q1 2027', 'Digital', 'Express delivery communication in store + influencers in Pune and Ahmedabad; My Store Page 100%', '1.3, 1.11'),
     ('Q2 2027', 'Marketing', 'Summer camps, Sports Utsav (May), Yoga Day (June); 119 AOPs in Q2; event reports to the stores', '2.2, 2.3'),
     ('Q2 2027', 'Digital', 'H1 review: SAS and digital vs target; express business case for a third city', '1.1, 1.3'),
     ('Q3 2027', 'People', 'Replicate the focus-store model in the other 7 stores', '4.2'),
     ('Q3 2027', 'Marketing', 'Anniversary, back to school, monsoon; Mountain Days; Khel Mahakumbh (Gujarat)', '2.1, 2.3'),
     ('Q4 2027', 'Marketing', 'Navratri, Diwali, Black Friday, Christmas, winter and travel; marathon season (Ahmedabad, Pune)', '2.1, 2.5'),
     ('Q4 2027', 'Digital', 'Year close: digital, SAS, express, affiliation vs target; 2028 mission draft', 'All')]
for w_, a, m, k in Q:
    cellset(qs, r, 2, w_, f=font(10, True)); cellset(qs, r, 3, a, f=font(10, True, BLUE if a == 'Digital' else '066B3A' if a == 'Marketing' else 'B26A00' if a == 'Training' else INK))
    cellset(qs, r, 4, m, al=WRAP); cellset(qs, r, 5, k, al=CEN); cellset(qs, r, 6, 'Not started', al=CEN, f=font(9, False, GREY))
    qs.row_dimensions[r].height = 32; r += 1

# ====================================================== Definitions and sources
ds = wb.create_sheet('Definitions')
title(ds, 'Definitions, sources and open points', '', 'C')
ds.column_dimensions['B'].width = 34; ds.column_dimensions['C'].width = 110
rows = [('DEFINITIONS', None),
        ('SAS (store assisted sales)', 'A sale made in the store with digital help: a teammate sells on the ACE application, or the customer orders on the Decathlon app they downloaded, in the store. Counted in-store, and in this mission also under digital.'),
        ('In-store', 'POS (tills), SCO (self checkout), SAS, Scan & Go.'),
        ('Out-store', 'Out of catchment (OOC), catchment orders, click & collect, reserve & collect, express delivery (QC), B2B.'),
        ('Digital (this mission)', 'Out-store + SAS. It matches the digital file (app, web, ACE, marketplaces, B2B).'),
        ('Express delivery', 'QC_EXPRESS channel: 2-hour / quick-commerce orders delivered from the store (Pune and Ahmedabad today).'),
        ('Affiliation', 'Coaches, influencers and community leaders get a unique link; when people shop with it, the store gets the turnover.'),
        ('AOP (area of practice)', 'A place where people play: a football ground, a badminton academy, a pool, a school, a gym. We sign a tie-up and put up our banners.'),
        ('Digital training', 'Part of my job: digital trainings for every store and for the cluster (store leaders, CSMs). JD minimum: one session per store per quarter. Physical where possible, video call to top up.'),
        ('West', 'Pune (Wakad, Wagholi, Amanora, SGS Mall, NIBM), Ahmedabad (Nexus, Motera), Rest of West in the files = Surat (Dumas), Rajkot, Baroda, MP (Indore, Bhopal, Gwalior). Surat Adajan opens 27 Dec 2026.'),
        ('', None),
        ('SOURCES', None),
        ('Offline + online YTD 2026', 'City, in-store / out-store, channel, month: turnover, quantity, customers, basket, returning customers. Jan to Oct used (November is partial).'),
        ('Digital data YTD 2026', 'City, digital channel, store, month: turnover, customers, new and returning customers. Store SAS = ACE + app + web orders booked at each store.'),
        ('IDM Anandita (Nov 2026)', '2026 mission (the example), notes, the bigger picture (₹7.6 Cr budget, ₹650+ Cr business, 6 focus stores, team, SFS), manager comments of 4 Nov 2026.'),
        ('The Digital Bible', 'CDMR responsibilities and roles tree, affiliation tracker (32 partners), events tracker (24 events, 1,829 attendees), AOP lists, My Store Page dashboard.'),
        ('Training dates', 'IDM notes: Pune 1 Dec; Gujarat: Ahmedabad + Baroda in November; MP travel in December. Work Done T-35: digital trainings 7-10 December.'),
        ('Mission Deepak 2026, Rishabh 2026', 'Format references (main KPIs band; objective, key result, priority, how).'),
        ('West plan site', 'AOP plan 2027 (449), influencer plan 2027 (476 influencers, ₹49.83 L), 2027 calendar and budget.'),
        ('', None),
        ('ASSUMPTIONS AND OPEN POINTS', None),
        ('Full-year 2026', 'Estimated as Jan to Oct × 12/10. Replace with the real December close in January; every target updates.'),
        ('No 2025 data', 'The files only hold 2026, so growth is planned on the 2026 run-rate, not measured against 2025.'),
        ('Growth % are proposals', 'In-store +14%, out-store +25%, SAS +20% (focus stores +25%), express +60%, OOC +20%. Change the blue cells.'),
        ('Budget', 'IDM says ₹7.6 Cr; the West plan site\'s 2027 budget lines add up to ₹7.46 Cr. To align.'),
        ('Walk-ins and campaign days', 'Not in the files: targets are growth % until the 2026 store counts are added.'),
        ('Scan & Go', 'Fell from ₹86.5 L (Jan) to ₹19.2 L (Oct). Worth asking why before 2027 (Scan & Pay is planned for 2028 in the roles tree).'),
        ('Affiliation', 'Baseline is tiny (about ₹5,000 and 2 affiliations done), so 2027 is a launch year; targets are a choice, not a trend.')]
r = 5
for a, b in rows:
    if b is None:
        ds.cell(r, 2, a).font = font(12, True, BLUE) if a else font(10)
    else:
        cellset(ds, r, 2, a, f=font(10, True), al=WRAP); cellset(ds, r, 3, b, al=WRAP)
        ds.row_dimensions[r].height = 30 if len(b) > 110 else 18
    r += 1

wb.move_sheet('KPIs 2027', offset=-(wb.sheetnames.index('KPIs 2027') - 1))
wb.active = 0
wb.save(OUT)
print('saved', OUT, wb.sheetnames)
