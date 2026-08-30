# -*- coding: utf-8 -*-
"""Spielt die deutschen Hostel-Saetze nach phrasebook_master.

Gleiches Muster wie job_work/import_deutsch.py: schreibt in den MASTER,
nicht in eine Zielsprache - die Situation wird geschrieben, nicht
uebersetzt. Anders als job_work aber eine bestehende KATEGORIE
(hotel_accommodation), nur ein neues SZENARIO (hotel_hostel) darin.

Nutzung:  python import_deutsch.py          (Probelauf)
          python import_deutsch.py --echt
"""
import importlib.util
import json
import os
import sys
import urllib.request

HIER = os.path.dirname(os.path.abspath(__file__))
SPRACHLISTEN = os.path.dirname(HIER)
KATEGORIE = "hotel_accommodation"
SZENARIO = "hotel_hostel"
TABELLE = "phrasebook_master"

# Kategorieuebergreifende Dubletten, die hier bewusst in Kauf genommen
# wuerden. Leer: der Entwurf braucht keine.
ERLAUBTE_DUBLETTEN = set()


def lies_env(name):
    for zeile in open(os.path.join(SPRACHLISTEN, ".env"), encoding="utf-8"):
        if zeile.startswith(name + "="):
            return zeile.split("=", 1)[1].strip().strip('"')
    raise SystemExit(name + " nicht gefunden")


def rest(url, key, pfad, methode="GET", koerper=None):
    kopf = {"apikey": key, "Authorization": "Bearer " + key,
            "Content-Type": "application/json", "Prefer": "return=representation"}
    d = json.dumps(koerper, ensure_ascii=False).encode("utf-8") if koerper is not None else None
    r = urllib.request.Request(url + "/rest/v1/" + pfad, data=d, headers=kopf, method=methode)
    with urllib.request.urlopen(r) as a:
        t = a.read().decode("utf-8")
        return json.loads(t) if t.strip() else []


def main():
    echt = "--echt" in sys.argv
    spec = importlib.util.spec_from_file_location("s", os.path.join(HIER, "saetze.py"))
    M = importlib.util.module_from_spec(spec)
    spec.loader.exec_module(M)

    url, key = lies_env("SUPABASE_URL"), lies_env("SUPABASE_SERVICE_ROLE_KEY")
    bestand = {}
    for r in rest(url, key, f"{TABELLE}?select=german,category"):
        bestand.setdefault(r["german"], []).append(r["category"])

    fehler, zeilen, schon_da = [], [], 0

    schluessel = [s["de"] for s in M.SAETZE]
    doppelt = {x for x in schluessel if schluessel.count(x) > 1}
    if doppelt:
        fehler.append(f"Doppelte Saetze in saetze.py: {sorted(doppelt)}")

    for s in M.SAETZE:
        kats = bestand.get(s["de"], [])
        if KATEGORIE in kats:
            schon_da += 1
            continue
        fremd = [k for k in kats if k != KATEGORIE]
        if fremd and s["de"] not in ERLAUBTE_DUBLETTEN:
            fehler.append(f"{s['de']!r} steht schon in {fremd} - "
                          f"entweder umformulieren oder in ERLAUBTE_DUBLETTEN aufnehmen")
            continue
        t = s["de"].lower()
        offen = [kon for kon, syn in s["k"] if not any(x.lower() in t for x in syn)]
        if offen:
            fehler.append(f"{s['de']!r}: Konzept(e) {offen} kommen im Satz nicht vor")
            continue
        zeilen.append({
            "german": s["de"],
            "scenario": SZENARIO,
            "category": KATEGORIE,
            "tense": "present",
            "difficulty": "A1",
            "accepted_concepts": {
                "required": [{"concept": kon, "synonyms": syn} for kon, syn in s["k"]],
                "optional": [],
            },
            "lookup_only": bool(s.get("lookup")),
            "addressing": None,
            "culture_note": s.get("h"),
        })

    print(f"saetze.py: {len(M.SAETZE)} Saetze  |  schon im Master: {schon_da}  "
          f"|  einzuspielen: {len(zeilen)}")
    print()

    if fehler:
        print(f"{len(fehler)} FEHLER - es wird nichts geschrieben:")
        for f in fehler:
            print("  X " + f)
        sys.exit(1)
    if not zeilen:
        print("Nichts zu tun.")
        return
    if not echt:
        print("PROBELAUF - nichts geschrieben. Mit --echt einspielen.")
        return

    rest(url, key, TABELLE, "POST", zeilen)
    endstand = rest(url, key, f"{TABELLE}?select=german&scenario=eq.{SZENARIO}")
    print(f"Fertig. {TABELLE}/{SZENARIO} steht jetzt bei {len(endstand)} Saetzen.")


if __name__ == "__main__":
    main()
