# -*- coding: utf-8 -*-
"""Spielt deutsche Saetze fuer EINE neue Situation nach phrasebook_master.

Generisches Werkzeug (2026-08-29) statt einer eigenen Kopie pro Situation -
job_work/import_deutsch.py und hotel_hostel/import_deutsch.py waren beide
fast identisch, das hier loest beide ab (die alten Ordner bleiben stehen,
sie laufen und sind getestet - aber der naechste Fall geht hierueber).

Erwartet eine Inhaltsdatei `<situation>_de.py` im selben Ordner mit:
  KATEGORIE = 'love_relationship'
  SZENARIO  = 'liebe_spitznamen'
  SAETZE = [dict(de=..., k=[(konzept, [synonyme])], h=None, lookup=False), ...]

Prueft: keine Dubletten in der Datei, keine Kollision mit einer ANDEREN
Kategorie (ausser ERLAUBTE_DUBLETTEN in der Inhaltsdatei), jedes Konzept hat
ein Synonym, das im Satz selbst vorkommt (sonst waere der Satz unloesbar).

Nutzung:  python situation_import.py <situation>          (Probelauf)
          python situation_import.py <situation> --echt
"""
import importlib.util
import json
import os
import sys
import urllib.request

HIER = os.path.dirname(os.path.abspath(__file__))
SPRACHLISTEN = os.path.dirname(HIER)
TABELLE = "phrasebook_master"


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
    if len(sys.argv) < 2:
        raise SystemExit(__doc__)
    situation = sys.argv[1]
    echt = "--echt" in sys.argv

    pfad = os.path.join(HIER, f"{situation}_de.py")
    if not os.path.exists(pfad):
        raise SystemExit(f"Keine Inhaltsdatei: {pfad}")
    spec = importlib.util.spec_from_file_location("s", pfad)
    M = importlib.util.module_from_spec(spec)
    spec.loader.exec_module(M)

    kategorie, szenario = M.KATEGORIE, M.SZENARIO
    erlaubte_dubletten = getattr(M, "ERLAUBTE_DUBLETTEN", set())

    url, key = lies_env("SUPABASE_URL"), lies_env("SUPABASE_SERVICE_ROLE_KEY")
    bestand = {}
    for r in rest(url, key, f"{TABELLE}?select=german,category"):
        bestand.setdefault(r["german"], []).append(r["category"])

    fehler, zeilen, schon_da = [], [], 0

    schluessel = [s["de"] for s in M.SAETZE]
    doppelt = {x for x in schluessel if schluessel.count(x) > 1}
    if doppelt:
        fehler.append(f"Doppelte Saetze in {situation}_de.py: {sorted(doppelt)}")

    for s in M.SAETZE:
        kats = bestand.get(s["de"], [])
        if kategorie in kats:
            schon_da += 1
            continue
        fremd = [k for k in kats if k != kategorie]
        if fremd and s["de"] not in erlaubte_dubletten:
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
            "scenario": szenario,
            "category": kategorie,
            "tense": "present",
            "difficulty": "A1",
            "accepted_concepts": {
                "required": [{"concept": kon, "synonyms": syn} for kon, syn in s["k"]],
                "optional": [],
            },
            "lookup_only": bool(s.get("lookup")),
            "addressing": s.get("addressing"),
            "culture_note": s.get("h"),
        })

    print(f"{situation}_de.py: {len(M.SAETZE)} Saetze  |  schon im Master: {schon_da}  "
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
    endstand = rest(url, key, f"{TABELLE}?select=german&scenario=eq.{szenario}")
    print(f"Fertig. {TABELLE}/{szenario} steht jetzt bei {len(endstand)} Saetzen.")


if __name__ == "__main__":
    main()
