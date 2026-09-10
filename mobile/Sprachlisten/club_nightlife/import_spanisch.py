# -*- coding: utf-8 -*-
"""Spielt Club + Nightlife auf Spanisch nach spanisch_phrasebook.

Quelle: spanisch.py - 123 uebertragene Saetze plus 1 angepasster
("Mein Spanisch ist nicht so gut."). Die 8 uebrigen bleiben draussen, siehe
Kopfkommentar dort.

**scenario/tense/difficulty/lookup_only/addressing kommen aus
phrasebook_master**, nicht aus spanisch.py - dieselbe Vorsichtsmassnahme wie
in build_spanisch.py: was schon in der Datenbank steht, wird nicht ein
zweites Mal von Hand abgeschrieben. spanisch.py traegt nur, was wirklich neu
ist (Text, Konzepte, eigener Kulturhinweis).

**Kulturhinweise werden NICHT uebernommen**, sondern nur die in spanisch.py
selbst gesetzten - die chinesischen sind china-spezifisch.

Der deutsche Satz ist der Abgleichschluessel: er ist innerhalb der Kategorie
eindeutig, das Skript laesst sich also gefahrlos mehrfach laufen.

phrasebook_master bekommt hier NICHTS. Die deutschen Saetze stehen dort schon.

Nutzung:  python import_spanisch.py          (Probelauf, schreibt nicht)
          python import_spanisch.py --echt   (schreibt wirklich)
"""
import importlib.util
import json
import os
import sys
import urllib.request

HIER = os.path.dirname(os.path.abspath(__file__))
SPRACHLISTEN = os.path.dirname(HIER)
KATEGORIE = "club_nightlife"
TABELLE = "spanisch_phrasebook"

# Fuer die `neu=True`-Saetze, die kein Gegenstueck in phrasebook_master haben.
NEU_VORGABE = {
    "Mein Spanisch ist nicht so gut.": dict(
        scenario="club_ansprechen", tense="present", difficulty="A1",
        lookup_only=False, addressing=None),
}


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

    spec = importlib.util.spec_from_file_location("es", os.path.join(HIER, "spanisch.py"))
    modul = importlib.util.module_from_spec(spec)
    spec.loader.exec_module(modul)

    url = lies_env("SUPABASE_URL")
    key = lies_env("SUPABASE_SERVICE_ROLE_KEY")

    quelle = {z["german"]: z for z in rest(
        url, key,
        f"phrasebook_master?select=german,scenario,tense,difficulty,lookup_only,addressing"
        f"&category=eq.{KATEGORIE}")}
    vorhanden = {z["german"] for z in rest(
        url, key, f"{TABELLE}?select=german&category=eq.{KATEGORIE}")}

    if vorhanden:
        print(f"{len(vorhanden)} Saetze dieser Kategorie sind schon da - werden uebersprungen.")

    zeilen = []
    for s in modul.SAETZE:
        if s["de"] in vorhanden:
            continue
        meta = NEU_VORGABE.get(s["de"]) if s.get("neu") else quelle.get(s["de"])
        if meta is None:
            raise SystemExit(f"Keine Metadaten fuer {s['de']!r} - erst pruefe_spanisch.py laufen lassen.")
        zeilen.append({
            "target_text": s["es"],
            "german": s["de"],
            "scenario": meta["scenario"],
            "tense": meta.get("tense") or "present",
            "difficulty": meta.get("difficulty") or "A1",
            "category": KATEGORIE,
            "accepted_concepts": {
                "required": [{"concept": k, "synonyms": syn} for k, syn in s["k"]],
                "optional": [],
            },
            "verb_cluster": None,
            "lookup_only": bool(meta.get("lookup_only")),
            "addressing": meta.get("addressing"),
            "culture_note": s.get("h"),
            "status": "Neu",
        })

    print(f"Einzuspielen: {len(zeilen)} Saetze")
    if not zeilen:
        print("Nichts zu tun.")
        return

    if not echt:
        print("\nPROBELAUF - es wird nichts geschrieben. Mit --echt wirklich einspielen.\n")
        for z in zeilen[:5]:
            print(f"  {z['scenario']:20} {z['german']}")
            print(f"  {'':20} -> {z['target_text']}")
        print(f"  ... und {len(zeilen) - 5} weitere")
        return

    # In Bloecken, damit eine einzelne zu grosse Anfrage nicht scheitert.
    geschrieben = 0
    for i in range(0, len(zeilen), 40):
        block = zeilen[i:i + 40]
        rest(url, key, TABELLE, "POST", block)
        geschrieben += len(block)
        print(f"  {geschrieben}/{len(zeilen)}")

    endstand = rest(url, key, f"{TABELLE}?select=german&category=eq.{KATEGORIE}")
    print(f"Fertig. {TABELLE}/{KATEGORIE} steht jetzt bei {len(endstand)} Saetzen.")


if __name__ == "__main__":
    main()
