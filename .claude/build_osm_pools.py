"""Build assets/js/osmpools.js: every swimming pool OpenStreetMap has for Pune, Ahmedabad, Baroda and Surat.

Asked by the user (22 Nov 2026): add all the pools, society and residential pools, private pools, from the map or
satellite images, and highlight them. OpenStreetMap pools are traced by volunteers from satellite imagery
(ODbL, credit "(c) OpenStreetMap contributors"). Google Maps data cannot be reused, so OSM is the source.

Run: python3 .claude/build_osm_pools.py  (needs overpass-api.de reachable)
"""
import json, math, re, sys, time, urllib.parse, urllib.request, datetime, pathlib

ROOT = pathlib.Path(__file__).resolve().parent.parent
OUT = ROOT / "assets/js/osmpools.js"
URL = "https://overpass-api.de/api/interpreter"
# south, west, north, east
CITIES = {
    "Pune": (18.40, 73.68, 18.72, 74.05),        # PMC + PCMC + Hinjewadi, Wagholi, Hadapsar
    "Ahmedabad": (22.92, 72.45, 23.16, 72.72),
    "Baroda": (22.22, 73.09, 22.40, 73.27),
    "Surat": (21.08, 72.70, 21.28, 72.92),
}

PUB = re.compile(r"municipal|corporation|\bpmc\b|\bpcmc\b|\bamc\b|\bvmc\b|\bsmc\b|nagar nigam|mahanagar|government|sports complex|krida|stadium|public", re.I)
CLUB = re.compile(r"club|hotel|resort|inn\b|marriott|hyatt|taj|novotel|westin|courtyard|radisson|ibis|lemon tree|oakwood|gym|fitness|school|college|university|vidyalaya|academy|gymkhana|institute|hospital|army|air force|navy|\bnda\b|cantonment", re.I)
SOC = re.compile(r"society|apartment|residency|residence|towers?\b|heights|enclave|greens|homes|county|villas?\b|township|park\b|nagari|vihar|co-?op|chs\b|phase|wing|block|bungalow", re.I)


def q(bbox):
    s, w, n, e = bbox
    b = f"{s},{w},{n},{e}"
    return f"""[out:json][timeout:180];
(
  way["leisure"="swimming_pool"]({b});
  relation["leisure"="swimming_pool"]({b});
  node["leisure"="swimming_pool"]({b});
  nwr["leisure"="sports_centre"]["sport"~"swimming"]({b});
  nwr["leisure"="water_park"]({b});
);
out geom tags;"""


def fetch(bbox):
    data = urllib.parse.urlencode({"data": q(bbox)}).encode()
    for attempt in range(4):
        try:
            with urllib.request.urlopen(urllib.request.Request(URL, data=data, headers={"User-Agent": "west-plan-pool-map/1.0"}), timeout=240) as r:
                return json.load(r)
        except Exception as ex:  # retry with backoff
            print("  retry", attempt + 1, ex, file=sys.stderr)
            time.sleep(10 * (attempt + 1))
    raise SystemExit("Overpass not reachable")


def area_centroid(geom):
    # equirectangular projection around the first point, shoelace formula; good enough for pools
    if not geom or len(geom) < 3:
        return 0.0, None
    lat0 = math.radians(geom[0]["lat"])
    pts = [(math.radians(p["lon"]) * 6371000 * math.cos(lat0), math.radians(p["lat"]) * 6371000) for p in geom]
    a = cx = cy = 0.0
    for (x1, y1), (x2, y2) in zip(pts, pts[1:] + pts[:1]):
        c = x1 * y2 - x2 * y1
        a += c; cx += (x1 + x2) * c; cy += (y1 + y2) * c
    a /= 2
    if abs(a) < 1e-6:
        return 0.0, None
    cx /= 6 * a; cy /= 6 * a
    return abs(a), (math.degrees(cy / 6371000), math.degrees(cx / (6371000 * math.cos(lat0))))


def km(a, b):
    dlat = math.radians(b[0] - a[0]); dlon = math.radians(b[1] - a[1])
    h = math.sin(dlat / 2) ** 2 + math.cos(math.radians(a[0])) * math.cos(math.radians(b[0])) * math.sin(dlon / 2) ** 2
    return 2 * 6371 * math.asin(math.sqrt(h))


def classify(t, area):
    name = " ".join(t.get(k, "") for k in ("name", "operator", "name:en"))
    acc = (t.get("access") or "").lower()
    if t.get("leisure") == "water_park":
        return "club"
    if acc in ("yes", "public", "permissive") or PUB.search(name):
        return "pub"
    if acc in ("customers", "members", "permit", "fee", "destination") or CLUB.search(name) or t.get("tourism") or t.get("amenity") in ("school", "college", "university"):
        return "club"
    if acc in ("private", "residents", "no"):
        return "home" if area and area < 60 else "soc"
    if SOC.search(name):
        return "soc"
    if area and area < 45:
        return "home"
    return "oth"


def build_city(name, bbox):
    js = fetch(bbox)
    pools, centres = [], []
    for el in js.get("elements", []):
        t = el.get("tags", {})
        if el["type"] == "node":
            ll, area = (el["lat"], el["lon"]), 0.0
        elif el["type"] == "way":
            area, ll = area_centroid(el.get("geometry") or [])
            if ll is None:
                g = el.get("geometry") or []
                if not g:
                    continue
                ll = (sum(p["lat"] for p in g) / len(g), sum(p["lon"] for p in g) / len(g))
        else:  # relation: use its bounds centre
            bb = el.get("bounds")
            if not bb:
                continue
            ll, area = ((bb["minlat"] + bb["maxlat"]) / 2, (bb["minlon"] + bb["maxlon"]) / 2), 0.0
        if t.get("leisure") == "sports_centre":
            centres.append((ll, t))
            continue
        if t.get("leisure") == "swimming_pool" and area and area < 8:
            continue  # hot tubs and tiny water features
        pools.append([round(ll[0], 5), round(ll[1], 5), classify(t, area), round(area), (t.get("name") or "")[:60]])
    # swimming complexes without a traced pool inside them
    for ll, t in centres:
        if not any(km(ll, (p[0], p[1])) < 0.12 for p in pools):
            pools.append([round(ll[0], 5), round(ll[1], 5), classify(t, 0) if classify(t, 0) != "oth" else "pub", 0, (t.get("name") or "Swimming complex")[:60]])
    # the same pool drawn twice (a node and a way)
    out = []
    for p in sorted(pools, key=lambda p: -p[3]):
        if any(km((p[0], p[1]), (o[0], o[1])) < 0.015 for o in out):
            continue
        out.append(p)
    return out


def main():
    res = {}
    for name, bbox in CITIES.items():
        print("fetching", name, file=sys.stderr)
        res[name] = {"bbox": bbox, "pools": build_city(name, bbox)}
        time.sleep(5)
    counts = {k: {c: sum(1 for p in v["pools"] if p[2] == c) for c in ("pub", "club", "soc", "home", "oth")} for k, v in res.items()}
    head = ("/* Every swimming pool OpenStreetMap has for our water cities (built by .claude/build_osm_pools.py on "
            f"{datetime.date.today().isoformat()}). Data (c) OpenStreetMap contributors, ODbL. Pools are traced by volunteers from satellite imagery;\n"
            "   coverage is not complete, so these are the pools we can see, not every pool that exists. pools: [lat, lon, type, area m2, name]; type:\n"
            "   pub = public or municipal, club = club, hotel, gym, school or water park, soc = society or residential (access private, or the name says so),\n"
            "   home = private home pool (private and under 60 m2), oth = pool with no access tag (type not known). */\n")
    OUT.write_text(head + "window.OSM_POOLS = " + json.dumps({"fetched": datetime.date.today().isoformat(), "counts": counts, "cities": res}, separators=(",", ":")) + ";\n", encoding="utf-8")
    print(json.dumps(counts, indent=1))


if __name__ == "__main__":
    main()
