// builds assets/kml/pune-aops.kml and pune-catchments.kml from the site data (same points as the page map)
const fs = require('fs'), R = '/home/user/decathlon-west-plan/';
global.window = {}; global.document = { readyState: 'loading', addEventListener() {}, getElementById() { return null; } };
require(R + 'assets/js/aopnames.js'); require(R + 'assets/js/punehot.js');
const pts = window.puneAopPoints(), ST = window.PUNE_STORES_AT;
const x = s => String(s ?? '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
const abgr = (hex, a = 'ff') => { const h = hex.replace('#', ''); return a + h.slice(4, 6) + h.slice(2, 4) + h.slice(0, 2); };
const TYPES = [['pool', 'Swimming pools', '#0096C7'], ['gym', 'Gyms, yoga, fitness', '#E0A100'], ['racket', 'Racket: badminton, pickleball, padel', '#6B4FBB'], ['team', 'Turfs and team sports', '#12A150'], ['other', 'Other', '#9AA2C8']];
let k = `<?xml version="1.0" encoding="UTF-8"?>\n<kml xmlns="http://www.opengis.net/kml/2.2">\n<Document>\n  <name>Decathlon Pune: AOPs (practice places)</name>\n  <description>From the Pune partnerships file. Pins sit at the centre of their area, so they are approximate. ${pts.length} places; ${pts.filter(p => p.status === 'new').length} start in 2027.</description>\n`;
TYPES.forEach(([id, , c]) => { k += `  <Style id="${id}"><IconStyle><color>${abgr(c)}</color><scale>1.0</scale><Icon><href>https://maps.google.com/mapfiles/kml/paddle/wht-blank.png</href></Icon></IconStyle></Style>\n  <Style id="${id}-new"><IconStyle><color>${abgr(c, '88')}</color><scale>0.8</scale><Icon><href>https://maps.google.com/mapfiles/kml/paddle/wht-blank.png</href></Icon></IconStyle></Style>\n`; });
TYPES.forEach(([id, name]) => { const list = pts.filter(p => p.cat === id); if (!list.length) return;
  k += `  <Folder><name>${x(name)} (${list.length})</name>\n` + list.map(p => `    <Placemark><name>${x(p.name)}</name><description>${x(p.sport)}${p.area ? ', ' + x(p.area) : ''}. Store: ${x(p.store)}. ${x(p.statusText)}${p.when ? ' (' + x(p.when) + ')' : ''}.</description><styleUrl>#${id}${p.status === 'new' ? '-new' : ''}</styleUrl><ExtendedData><Data name="Store"><value>${x(p.store)}</value></Data><Data name="Sport"><value>${x(p.sport)}</value></Data><Data name="Type"><value>${x(name)}</value></Data><Data name="Status"><value>${x(p.statusText)}</value></Data></ExtendedData><Point><coordinates>${p.lon},${p.lat},0</coordinates></Point></Placemark>`).join('\n') + `\n  </Folder>\n`; });
k += `</Document>\n</kml>\n`;
fs.writeFileSync(R + 'assets/kml/pune-aops.kml', k);
// catchments: stores + 5, 10, 15 km circles (64-point polygons)
const circle = ([lat, lon], km) => { const out = []; for (let i = 0; i <= 64; i++) { const t = i / 64 * 2 * Math.PI, dLat = km / 111.32 * Math.sin(t), dLon = km / (111.32 * Math.cos(lat * Math.PI / 180)) * Math.cos(t); out.push(`${(lon + dLon).toFixed(5)},${(lat + dLat).toFixed(5)},0`); } return out.join(' '); };
const RINGS = [[5, '#3643BA', '22'], [10, '#6B4FBB', '14'], [15, '#9AA2C8', '0c']];
let c = `<?xml version="1.0" encoding="UTF-8"?>\n<kml xmlns="http://www.opengis.net/kml/2.2">\n<Document>\n  <name>Decathlon Pune: stores and 5, 10, 15 km catchments</name>\n  <Style id="store"><IconStyle><scale>1.2</scale><Icon><href>https://decathlon-west-plan.vercel.app/assets/img/deca-pin.png</href></Icon></IconStyle></Style>\n`;
RINGS.forEach(([km, col, a]) => { c += `  <Style id="r${km}"><LineStyle><color>${abgr(col)}</color><width>2</width></LineStyle><PolyStyle><color>${abgr(col, a)}</color></PolyStyle></Style>\n`; });
c += `  <Folder><name>Decathlon stores</name>\n` + Object.entries(ST).map(([n, p]) => `    <Placemark><name>Decathlon ${x(n)}</name><styleUrl>#store</styleUrl><Point><coordinates>${p[1]},${p[0]},0</coordinates></Point></Placemark>`).join('\n') + `\n  </Folder>\n`;
RINGS.forEach(([km]) => { c += `  <Folder><name>${km} km catchment</name>\n` + Object.entries(ST).map(([n, p]) => `    <Placemark><name>${x(n)}: ${km} km</name><styleUrl>#r${km}</styleUrl><Polygon><outerBoundaryIs><LinearRing><coordinates>${circle(p, km)}</coordinates></LinearRing></outerBoundaryIs></Polygon></Placemark>`).join('\n') + `\n  </Folder>\n`; });
c += `</Document>\n</kml>\n`;
fs.writeFileSync(R + 'assets/kml/pune-catchments.kml', c);
console.log('aops', pts.length, 'bytes', k.length, '| catchments bytes', c.length);
