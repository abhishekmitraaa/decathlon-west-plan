"""Write the 'least liked' points into the IDM sheet (B8, above the existing Bigger Picture text) by editing the sheet XML only,
so charts, images, comments and tables in the workbook stay untouched. argv[1] = original xlsx, argv[2] = output xlsx."""
import sys, zipfile, re, html

src, out = sys.argv[1], sys.argv[2]
NEW = """WHAT I HAVE LEAST LIKED SINCE OUR LAST MEETING

1. Accountability only goes one way with the stores
Store leaders will soon give feedback on me through a survey. I welcome it, and I believe feedback should go both ways: I should also be able to give store leaders feedback on their reactivity to the topics we share, and to score each store on how we work together on the project.
Today, getting one action done in a store often takes me about six times the effort: the same information sent again and again, to several people, at several levels, in several places. I understand I am in a functional role and that the project can look small next to daily business. But a store project should be teamwork, with all of us moving it together, not one person pushing.
My concern: if traffic falls short in a store leader's IDM, the conversation could stop at my name, without looking at how the store itself worked on the actions. I am here to serve the stores; the stores are also here in the service of the project.
What I propose: a simple monthly store scorecard (reactivity, actions done on time, data shared, trainings and events), shared with the store leaders and regional directors, and discussed in their IDMs as well as mine.

2. Some of our systems no longer give us results (example: influencer marketing)
This is not to put anyone down; it is about systems that cannot continue as they are.
I am not satisfied with the influencer lists we receive from our registered agencies: the profiles do not match our sports, our cities or our customers. If this continues, our campaigns will not bring the traffic we need. This is one reason we keep falling short: we have a good budget, and part of it is not being used well.
What I propose: I am shortlisting profiles myself and preparing a vendor team that works with me every day in Pune, Gujarat and MP, so influencers, content and events are chosen for relevance and measured on walk-ins and turnover.

----------------------------------------

"""

zin = zipfile.ZipFile(src)
sheet = zin.read('xl/worksheets/sheet1.xml').decode('utf-8')
ss = zin.read('xl/sharedStrings.xml').decode('utf-8')

# the existing B8 text (shared string 63)
m = re.search(r'<c r="B8" s="(\d+)" t="s"><v>(\d+)</v></c>', sheet)
assert m, 'B8 not found'
style, idx = m.group(1), int(m.group(2))
items = re.findall(r'<si>(.*?)</si>', ss, flags=re.S)
old = ''.join(html.unescape(t) for t in re.findall(r'<t[^>]*>(.*?)</t>', items[idx], flags=re.S))
assert old.startswith('THE BIGGER PICTURE'), old[:40]
text = NEW + old
esc = html.escape(text, quote=False)
new_cell = f'<c r="B8" s="{style}" t="inlineStr"><is><t xml:space="preserve">{esc}</t></is></c>'
sheet = sheet[:m.start()] + new_cell + sheet[m.end():]
# taller row so the text shows
sheet = sheet.replace('<row r="8" ht="625.5" customHeight="1">', '<row r="8" ht="1250" customHeight="1">', 1)
assert 'ht="1250"' in sheet

zout = zipfile.ZipFile(out, 'w', zipfile.ZIP_DEFLATED)
for item in zin.infolist():
    data = zin.read(item.filename)
    if item.filename == 'xl/worksheets/sheet1.xml':
        data = sheet.encode('utf-8')
    zout.writestr(item, data)
zout.close()
print('ok', len(text), 'chars')
