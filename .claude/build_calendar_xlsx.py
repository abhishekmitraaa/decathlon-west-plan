import json, sys, datetime
from openpyxl import Workbook
from openpyxl.styles import Font, PatternFill, Alignment, Border, Side
from openpyxl.utils import get_column_letter as L

S = '/tmp/claude-0/-home-user-decathlon-west-plan/7e019cfd-605c-5149-bcba-126b56e04d8d/scratchpad/'
d = json.load(open(S + 'cal.json', encoding='utf-8'))
PL, PD, SOTM, SP, HOL, EV = d['PL'], d['PD'], d['sotm'], d['spend'], d['hol'], d['ev']
M = PL['months']
MF = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]

F = 'Arial'
def font(sz=10, b=False, c='1B1F3B', i=False): return Font(name=F, size=sz, bold=b, color=c, italic=i)
def fill(c): return PatternFill('solid', start_color=c, end_color=c)
thin = Side(style='thin', color='D5D9EA')
box = Border(left=thin, right=thin, top=thin, bottom=thin)
blue_side = Side(style='medium', color='3643BA')
WRAP = Alignment(wrap_text=True, vertical='center', horizontal='left')
CEN = Alignment(wrap_text=True, vertical='center', horizontal='center')
INK, BLUE = '101A4F', '3643BA'

# lane style per chip kind (same colours as the site's planner)
KIND = {
    'hol': ('FFF1D6', '8A5A00'), 'season': ('101A4F', 'FFFFFF'), 'nat': ('DDE1FA', '1E2A8A'), 'tech': ('FFFFFF', BLUE),
    'eco': ('D5FBE6', '066B3A'), 'evt': ('7DFFB4', '101A4F'), 'sale': ('E3262F', 'FFFFFF'), 'launch': (BLUE, 'FFFFFF'),
    'tbd': ('EEF0F6', '6B7290'), 'local': ('FFE9D6', '8A3B00'), 'ev': ('FFFFFF', '1E2A8A'), 'evset': ('E8EBFF', BLUE)}
QFILL = ['D9FFE9', 'D6F4FF', 'EEF0F6', 'FBE0F2']
QHEAD = ['2BFF88', '5FD3FF', 'A7AEC1', 'E46BC4']

wb = Workbook()

# ---------------- Sheet 1: the calendar ----------------
ws = wb.active; ws.title = 'Calendar 2027'
ws.sheet_view.showGridLines = False
ws.column_dimensions['A'].width = 28
for c in range(2, 14): ws.column_dimensions[L(c)].width = 21
ws.column_dimensions['N'].width = 12

ws['A1'] = '2027, month by month'; ws['A1'].font = font(18, True, INK)
ws['A2'] = ('The full 2027 Marcom calendar from the Decathlon West plan site (planner, Pune Marcom calendar workbook), '
            'with the sports events for Pune, Gujarat and MP at the bottom. Spans across months are merged cells.')
ws['A2'].font = font(9.5, c='5B6285'); ws.merge_cells('A2:N2'); ws['A2'].alignment = Alignment(wrap_text=True, vertical='top')
ws.row_dimensions[2].height = 26

r = 4
ws.cell(r, 1, 'Quarter').font = font(10, True, INK)
for q in range(4):
    c0 = 2 + q * 3
    ws.merge_cells(start_row=r, start_column=c0, end_row=r, end_column=c0 + 2)
    cell = ws.cell(r, c0, f'Q{q + 1}  ({M[q * 3]} to {M[q * 3 + 2]})')
    cell.font = font(10.5, True, INK); cell.fill = fill(QHEAD[q]); cell.alignment = CEN
r += 1
ws.cell(r, 1, 'Month').font = font(10, True, 'FFFFFF'); ws.cell(r, 1).fill = fill(INK)
for i, m in enumerate(M):
    cell = ws.cell(r, 2 + i, f'{m} 2027'); cell.font = font(11, True, 'FFFFFF'); cell.fill = fill(INK); cell.alignment = CEN
ws.cell(r, 14, 'Year').font = font(10, True, 'FFFFFF'); ws.cell(r, 14).fill = fill(INK); ws.cell(r, 14).alignment = CEN
ws.row_dimensions[r].height = 22
HEAD_ROW = r
ws.freeze_panes = ws.cell(r + 1, 2)

def label(row, text, rows=1, bg='F5F6FB', color=INK, bold=True):
    if rows > 1: ws.merge_cells(start_row=row, start_column=1, end_row=row + rows - 1, end_column=1)
    c = ws.cell(row, 1, text); c.font = font(10, bold, color); c.fill = fill(bg); c.alignment = WRAP
    for k in range(rows): ws.cell(row + k, 1).border = box

def grid(row, rows=1):
    for k in range(rows):
        for i in range(12):
            c = ws.cell(row + k, 2 + i); c.border = box
            if c.fill is None or c.fill.fgColor.rgb in (None, '00000000'): c.fill = fill(QFILL[i // 3] if False else 'FFFFFF')

def simple_row(row, name, vals, bg=None, fc='3D4466', bold=False, h=None):
    label(row, name)
    for i, v in enumerate(vals):
        c = ws.cell(row, 2 + i, v); c.font = font(9.5, bold, fc); c.alignment = WRAP; c.border = box
        c.fill = fill(bg or QFILL[i // 3])
    if h: ws.row_dimensions[row].height = h

def lines(t): return max(1, str(t).count('\n') + 1 + len(str(t)) // 24)

def stack(items):
    """Same as the site: put each item in the first sub-row whose last item ended before it starts."""
    rows, out = [], []
    for it in sorted(items, key=lambda x: x['a']):
        k = next((j for j, end in enumerate(rows) if end < it['a']), None)
        if k is None: rows.append(-1); k = len(rows) - 1
        rows[k] = it['b']; out.append((k, it))
    return len(rows), out

def lane(row, name, items, text_of, kind_of, label_bg='F5F6FB'):
    n, placed = stack(items)
    label(row, name, n, label_bg)
    grid(row, n)
    heights = [15] * n
    for k, it in placed:
        a, b = it['a'], it['b']
        if b > a: ws.merge_cells(start_row=row + k, start_column=2 + a, end_row=row + k, end_column=2 + b)
        c = ws.cell(row + k, 2 + a, text_of(it))
        bg, fc = KIND[kind_of(it)]
        c.fill = fill(bg); c.font = font(9.5, True, fc); c.alignment = WRAP if b == a else CEN
        if kind_of(it) == 'tech': c.border = Border(left=blue_side, right=blue_side, top=blue_side, bottom=blue_side)
        width_chars = 22 * (b - a + 1)
        nl = sum(max(1, -(-len(part) // width_chars)) for part in str(text_of(it)).split('\n'))
        heights[k] = max(heights[k], 13.5 * nl + 6)
    for k in range(n): ws.row_dimensions[row + k].height = heights[k]
    return row + n

r += 1
simple_row(r, 'Seasonality (Pune)', [s.title() for s in PD['seasonality']], bold=True, fc=INK); r += 1
simple_row(r, 'Weather (Pune)', PD['weather'], h=30); r += 1
for ln in PL['lanes']:
    r = lane(r, ln['name'], ln['items'], lambda it: ('★ ' if it.get('star') else '') + it['t'], lambda it: it['k'])
simple_row(r, 'Sport of the month (Pune)', SOTM, bg='EEF0FF', fc=BLUE, bold=True); r += 1
simple_row(r, 'Website banner (Pune)', PD['banner'], h=42); r += 1

# ad spend rows with formulas
r += 1
label(r, 'Advertisement budget 2027 (₹ lakh)', 1, INK, 'FFFFFF')
for i in range(12): ws.cell(r, 2 + i).fill = fill(INK)
ws.cell(r, 14).fill = fill(INK)
r += 1
sp_rows = []
for mk in ['Pune', 'Gujarat', 'MP']:
    label(r, mk)
    for i, v in enumerate(SP[mk]['y27']):
        c = ws.cell(r, 2 + i, v); c.font = font(10, False, '0000FF'); c.number_format = '#,##0.00'; c.border = box; c.alignment = CEN
    t = ws.cell(r, 14, f'=SUM(B{r}:M{r})'); t.font = font(10, True); t.number_format = '#,##0.00'; t.border = box; t.alignment = CEN
    sp_rows.append(r); r += 1
label(r, 'West total')
for i in range(13):
    col = L(2 + i)
    c = ws.cell(r, 2 + i, f'=SUM({col}{sp_rows[0]}:{col}{sp_rows[-1]})'); c.font = font(10, True, INK); c.number_format = '#,##0.00'
    c.fill = fill('E8EBFF'); c.border = box; c.alignment = CEN
SPEND_TOTAL_ROW = r
r += 1
ws.cell(r, 1, 'Blue numbers: inputs from the site (DATA.spend, 2027 plan, in lakh). Totals are formulas.').font = font(8.5, c='6B7290', i=True)
ws.merge_cells(start_row=r, start_column=1, end_row=r, end_column=14)
r += 2

# sports events by market
label(r, 'Sports events 2027', 1, INK, 'FFFFFF')
ws.cell(r, 2, 'Bold blue = the 2027 date is out (≈ = to confirm). "Last:" = the latest date found, 2027 not announced yet. Detail in the "Sports events" sheet.').font = font(9, False, 'FFFFFF')
ws.merge_cells(start_row=r, start_column=2, end_row=r, end_column=14)
for i in range(13): ws.cell(r, 2 + i).fill = fill(INK)
r += 1
def ev_date(t):
    import re
    return re.split(r'[,;(:]', str(t or ''))[0].strip()
def ev_text(mk):
    def f(e):
        city = '' if mk == 'Pune' else e['c'].split('(')[0].split(',')[0].strip().upper() + '\n'
        when = (('≈ ' if e.get('approx') else '') + '2027: ' + ev_date(e['d27'])) if e['d27'] else 'Last: ' + (e.get('cd') or ev_date(e['d26']))
        return f"{city}{e.get('short') or e['n']}\n{when}"
    return f
EV_LABEL = {'Pune': 'Pune', 'Gujarat': 'Gujarat\n(Baroda, Surat, Ahmedabad, Rajkot)', 'MP': 'MP\n(Bhopal, Indore, Gwalior)'}
for mk in ['Pune', 'Gujarat', 'MP']:
    r = lane(r, EV_LABEL[mk], EV[mk], ev_text(mk), lambda e: 'evset' if e['d27'] else 'ev', 'E8EBFF')
ws.print_title_rows = f'{HEAD_ROW - 1}:{HEAD_ROW}'
ws.page_setup.orientation = 'landscape'; ws.page_setup.fitToWidth = 1; ws.page_setup.fitToHeight = 0
ws.sheet_properties.pageSetUpPr.fitToPage = True

# ---------------- Sheet 2: sports events in detail ----------------
es = wb.create_sheet('Sports events')
es.sheet_view.showGridLines = False
es['A1'] = 'Sports events 2027: Pune, Gujarat, MP'; es['A1'].font = font(16, True, INK)
es['A2'] = ('Web-checked 13 Nov 2026. Where the 2027 date is not announced, "Last time" gives the 2026 date (or the latest found), '
            'with participants as reported. "To confirm" = a race listing or the usual pattern, not yet from the organiser.')
es['A2'].font = font(9.5, c='5B6285'); es.merge_cells('A2:K2'); es['A2'].alignment = Alignment(wrap_text=True, vertical='top'); es.row_dimensions[2].height = 28
H = ['Market', 'City', 'Month', 'Event', 'Sport', '2027 date', '2027 status', 'Last time (2026, or latest found)', 'Participants', 'Why it matters to us', 'Source']
W = [10, 24, 10, 34, 14, 26, 14, 44, 32, 36, 34]
hr = 4
for j, (h, w) in enumerate(zip(H, W)):
    c = es.cell(hr, 1 + j, h); c.font = font(10, True, 'FFFFFF'); c.fill = fill(INK); c.alignment = WRAP; c.border = box
    es.column_dimensions[L(1 + j)].width = w
er = hr + 1
for mk in ['Pune', 'Gujarat', 'MP']:
    for e in sorted(EV[mk], key=lambda x: x['a']):
        status = ('To confirm' if e.get('approx') else 'Confirmed') if e['d27'] else 'Not announced'
        mo = M[e['a']] + ('-' + M[e['b']] if e['b'] > e['a'] else '')
        vals = [mk, e['c'], mo, e['n'], e['s'], e['d27'] or '', status, e['d26'], e['p'], e['w'], e['src']]
        for j, v in enumerate(vals):
            c = es.cell(er, 1 + j, v); c.font = font(9.5, j in (3,), INK if j in (0, 3) else '3D4466'); c.alignment = Alignment(wrap_text=True, vertical='top'); c.border = box
            if (er - hr) % 2 == 0: c.fill = fill('FAFBFE')
        sc = es.cell(er, 7)
        sc.fill = fill({'Confirmed': 'D5FBE6', 'To confirm': 'FFF1D6', 'Not announced': 'EEF0F6'}[status])
        sc.font = font(9.5, True, {'Confirmed': '066B3A', 'To confirm': '8A5A00', 'Not announced': '6B7290'}[status])
        if e['d27']: es.cell(er, 6).font = font(9.5, True, BLUE)
        er += 1
last = er - 1
es.freeze_panes = es.cell(hr + 1, 3)
es.auto_filter.ref = f'A{hr}:K{last}'
# summary with formulas
sr = last + 3
es.cell(sr, 1, 'Summary').font = font(12, True, INK)
sr += 1
for j, h in enumerate(['Market', 'Events', 'Date out', 'To confirm', 'Not announced']):
    c = es.cell(sr, 1 + j, h); c.font = font(10, True, 'FFFFFF'); c.fill = fill(INK); c.border = box; c.alignment = CEN
rng = lambda col: f'${col}${hr + 1}:${col}${last}'
first_sum = sr + 1
for mk in ['Pune', 'Gujarat', 'MP']:
    sr += 1
    es.cell(sr, 1, mk).font = font(10, True, INK)
    es.cell(sr, 2, f'=COUNTIF({rng("A")},A{sr})')
    es.cell(sr, 3, f'=COUNTIFS({rng("A")},A{sr},{rng("G")},"Confirmed")')
    es.cell(sr, 4, f'=COUNTIFS({rng("A")},A{sr},{rng("G")},"To confirm")')
    es.cell(sr, 5, f'=COUNTIFS({rng("A")},A{sr},{rng("G")},"Not announced")')
    for j in range(5): es.cell(sr, 1 + j).border = box; es.cell(sr, 1 + j).alignment = CEN
sr += 1
es.cell(sr, 1, 'Total').font = font(10, True, INK)
for j in range(1, 5):
    col = L(1 + j)
    c = es.cell(sr, 1 + j, f'=SUM({col}{first_sum}:{col}{sr - 1})'); c.font = font(10, True, INK)
for j in range(5): es.cell(sr, 1 + j).border = box; es.cell(sr, 1 + j).alignment = CEN; es.cell(sr, 1 + j).fill = fill('E8EBFF')

# ---------------- Sheet 3: each month in full (Pune Marcom calendar) ----------------
ms = wb.create_sheet('Month by month')
ms.sheet_view.showGridLines = False
ms['A1'] = 'Each month in full: what competitors do, how Pune answers, what goes live on the ground'; ms['A1'].font = font(14, True, INK)
ms['A2'] = 'From the Pune MARCOM CALENDAR workbook (PLAN_DETAIL on the site).'; ms['A2'].font = font(9.5, c='5B6285')
ms.column_dimensions['A'].width = 26
for i in range(12): ms.column_dimensions[L(2 + i)].width = 30
FIELDS = [('Seasonality', 'seasonality'), ('Weather', 'weather'), ('Website banner', 'banner'), None,
          ('WHAT COMPETITORS DO', None), ('Their campaign', 'compCampaign'), ('Who is pushing what', 'compPresence'), ('Products they push', 'compProduct'),
          ('Offers', 'compOffer'), ('Online', 'compDigital'), ('In store', 'compPhysical'), ('Events and community', 'compEvent'), ('What they do well', 'theyDoWell'),
          ('HOW PUNE ANSWERS', None), ('Our opportunity', 'opportunity'), ('Our response', 'response'), ('Who we are talking to', 'target'), ('Marketing channels', 'channels'),
          ('Community events booked', 'communityEvents'), ('Influencers', 'influencers'), ('Partnerships', 'partnerships'),
          ('ON THE GROUND', None), ('Hoardings, OOH, HIPOP and AOP', 'ooh'), ('Store activation', 'storeActivation'), ('Academies', 'academy'), ('Gyms', 'gym'),
          ('Schools and colleges', 'school'), ('Corporates', 'corporate'), ('Residential societies', 'society'), ('Sports community events', 'sportsEvent'),
          ('Flyers', 'flyers'), ('Free products', 'freeProducts')]
rr = 4
for i in range(12):
    c = ms.cell(rr, 2 + i, f'{MF[i]} 2027'); c.font = font(11, True, 'FFFFFF'); c.fill = fill(INK); c.alignment = CEN
ms.cell(rr, 1, 'Q1 to Q4').font = font(10, True, 'FFFFFF'); ms.cell(rr, 1).fill = fill(INK)
ms.freeze_panes = ms.cell(rr + 1, 2)
rr += 1
for f in FIELDS:
    if f is None: rr += 1; continue
    name, key = f
    if key is None:
        c = ms.cell(rr, 1, name); c.font = font(10, True, 'FFFFFF'); c.fill = fill(BLUE)
        for i in range(12): ms.cell(rr, 2 + i).fill = fill(BLUE)
        rr += 1; continue
    if key not in PD: continue
    ms.cell(rr, 1, name).font = font(9.5, True, INK); ms.cell(rr, 1).alignment = WRAP; ms.cell(rr, 1).border = box
    mx = 1
    for i, v in enumerate(PD[key]):
        c = ms.cell(rr, 2 + i, v if v is not None else ''); c.font = font(9, False, '3D4466'); c.alignment = Alignment(wrap_text=True, vertical='top'); c.border = box
        c.fill = fill(QFILL[i // 3])
        mx = max(mx, -(-len(str(v or '')) // 34) + str(v or '').count('\n'))
    ms.row_dimensions[rr].height = min(409, max(15, 12.5 * mx + 4))
    rr += 1

# ---------------- Sheet 4: Q1 holidays and moments by market ----------------
hs = wb.create_sheet('Q1 holidays by market')
hs.sheet_view.showGridLines = False
hs['A1'] = 'Holidays and moments, January to March 2027, by market'; hs['A1'].font = font(14, True, INK)
hs['A2'] = 'From the site (DATA.holidaysQ1): 2027 calendars (Drik Panchang, state lists) and event organisers. State lists for 2027 are provisional.'; hs['A2'].font = font(9.5, c='5B6285')
TYPE = {'holiday': 'Holiday', 'festival': 'Festival', 'sport': 'Sports event', 'moment': 'Moment', 'exams': 'Exams'}
HH = ['From', 'To', 'Name', 'Pune', 'Gujarat', 'MP', 'Type', 'Date approx.', 'How we use it']
for j, (h, w) in enumerate(zip(HH, [12, 12, 36, 8, 9, 7, 13, 12, 60])):
    c = hs.cell(4, 1 + j, h); c.font = font(10, True, 'FFFFFF'); c.fill = fill(INK); c.alignment = CEN; c.border = box
    hs.column_dimensions[L(1 + j)].width = w
hr2 = 5
for h in HOL:
    vals = [datetime.date.fromisoformat(h['d']), datetime.date.fromisoformat(h['e']) if h.get('e') else None, h['name'],
            '●' if 'Pune' in h['r'] else '', '●' if 'Gujarat' in h['r'] else '', '●' if 'MP' in h['r'] else '',
            TYPE.get(h['t'], h['t']), 'Yes' if h.get('approx') else '', h.get('use', '')]
    for j, v in enumerate(vals):
        c = hs.cell(hr2, 1 + j, v); c.font = font(9.5, j == 2, INK if j == 2 else '3D4466'); c.border = box
        c.alignment = CEN if j in (0, 1, 3, 4, 5, 7) else Alignment(wrap_text=True, vertical='top')
        if j in (0, 1): c.number_format = 'ddd d mmm yyyy'
    hr2 += 1
hs.freeze_panes = 'A5'; hs.auto_filter.ref = f'A4:I{hr2 - 1}'

# ---------------- Sheet 5: notes ----------------
ns = wb.create_sheet('Notes and sources')
ns.sheet_view.showGridLines = False
ns.column_dimensions['A'].width = 120
notes = [
    ('Decathlon West: 2027 calendar workbook', True),
    ('Made 13 Nov 2026 from the Decathlon West plan site (decathlon-west-plan.vercel.app): the 2027 planner, the Pune Marcom calendar (month by month), the 2027 ad budget and the sports events row.', False),
    ('', False),
    ('How to read the calendar', True),
    ('Each row is a lane of the planner. An item that spans months is one merged cell. Where items overlap in a lane, the lane takes extra rows.', False),
    ('Colours: holidays (cream), season (navy), country campaigns (light blue), hero ranges (blue outline), sport ecosystem (light green), event IP (mint), commercial (red), product launch (blue), Pune cultural moments (peach).', False),
    ('★ = key moment. Sports events: bold blue box = 2027 date out; ≈ = to confirm; "Last:" = latest date found, 2027 not announced yet.', False),
    ('', False),
    ('Open points', True),
    ('Indore Marathon 2027: race listings (marathons.com, finishers.com) say Sun 14 Feb 2027; the Q1 plan on the site still says about 7 Feb (first Sunday). The 2026 date also conflicts (1 vs 15 Feb). Confirm with the organiser.', False),
    ('Maharashtra Premier League: 2026 dates not found; 2025 dates shown. Vijay Merchant U-16 (Gwalior): the report does not give the year.', False),
    ('Khelo MP Youth Games: sources say 11 or 28 sports. Gudi Padwa: most lists say 7 Apr, the planner says 8 Apr. Maha Shivaratri 5 or 6 Mar; Eid 9 or 10 Mar (moon).', False),
    ('', False),
    ('Sources for the sports events', True),
]
srcs = sorted({e['src'] for mk in EV for e in EV[mk]})
for i, (t, b) in enumerate(notes + [(s, False) for s in srcs]):
    c = ns.cell(1 + i, 1, t); c.font = font(14 if i == 0 else (11 if b else 10), b, INK if b else '3D4466'); c.alignment = Alignment(wrap_text=True, vertical='top')

out = sys.argv[1]
wb.save(out)
print('saved', out, 'calendar rows', r, 'events', last - hr)
