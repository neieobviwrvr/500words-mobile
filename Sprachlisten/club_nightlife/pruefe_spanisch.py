# -*- coding: utf-8 -*-
"""Prueft spanisch.py gegen die echte Quelle, VOR dem Import.

Vier Pruefungen:
  1. Jeder deutsche Schluessel existiert zeichengenau in phrasebook_master
     (ausser den `neu=True`-Saetzen). Ein Tippfehler wuerde sonst still eine
     zweite Zeile anlegen statt die Uebersetzung zuzuordnen - genau der
     Fehler, der beim Schwedisch-Import passiert ist (siehe CLAUDE.md).
  2. SAETZE + AUSGELASSEN deckt die Kategorie vollstaendig ab - kein Satz
     wurde schlicht vergessen.
  3. Keine doppelten deutschen Schluessel.
  4. Konzept-Schluessel stimmen mit schwedisch_phrasebook ueberein, wo es den
     Satz dort gibt. Abweichungen sind nicht automatisch falsch, muessen aber
     bewusst sein - deshalb Warnung statt Fehler.
"""
import importlib.util
import json
import os
import sys
import urllib.request

HIER = os.path.dirname(os.path.abspath(__file__))
SPRACHLISTEN = os.path.dirname(HIER)
KATEGORIE = "club_nightlife"


def lies_env(name):
    for zeile in open(os.path.join(SPRACHLISTEN, ".env"), encoding="utf-8"):
        if zeile.startswith(name + "="):
            return zeile.split("=", 1)[1].strip().strip('"')
    raise SystemExit(name + " nicht gefunden")


def hole(url, key, pfad):
    req = urllib.request.Request(
        url + "/rest/v1/" + pfad,
        headers={"apikey": key, "Authorization": "Bearer " + key})
    with urllib.request.urlopen(req) as a:
        return json.loads(a.read().decode("utf-8"))


def lade_modul():
    spec = importlib.util.spec_from_file_location("es", os.path.join(HIER, "spanisch.py"))
    modul = importlib.util.module_from_spec(spec)
    spec.loader.exec_module(modul)
    return modul


def main():
    es = lade_modul()
    url, key = lies_env("SUPABASE_URL"), lies_env("SUPABASE_SERVICE_ROLE_KEY")

    de = hole(url, key, f"phrasebook_master?select=german&category=eq.{KATEGORIE}")
    de_set = {z["german"] for z in de}
    sv = hole(url, key, f"schwedisch_phrasebook?select=german,accepted_concepts&category=eq.{KATEGORIE}")
    sv_konzepte = {z["german"]: [g["concept"] for g in z["accepted_concepts"].get("required", [])]
                   for z in sv}

    fehler, warnung = [], []

    # 3. Doppelte
    schluessel = [s["de"] for s in es.SAETZE]
    doppelt = {k for k in schluessel if schluessel.count(k) > 1}
    if doppelt:
        fehler.append(f"Doppelte deutsche Schluessel: {sorted(doppelt)}")

    # 1. Schluessel existiert
    neu = {s["de"] for s in es.SAETZE if s.get("neu")}
    for s in es.SAETZE:
        if s.get("neu"):
            if s["de"] in de_set:
                fehler.append(f"Als neu markiert, existiert aber schon: {s['de']!r}")
            continue
        if s["de"] not in de_set:
            fehler.append(f"Kein Treffer in phrasebook_master: {s['de']!r}")

    # 2. Vollstaendigkeit
    abgedeckt = (set(schluessel) - neu) | set(es.AUSGELASSEN)
    vergessen = de_set - abgedeckt
    if vergessen:
        for v in sorted(vergessen):
            fehler.append(f"Weder uebersetzt noch als ausgelassen erklaert: {v!r}")
    geister = set(es.AUSGELASSEN) - de_set
    for g in sorted(geister):
        fehler.append(f"AUSGELASSEN nennt einen Satz, den es nicht gibt: {g!r}")

    # 4. Konzept-Schluessel gegen Schwedisch
    for s in es.SAETZE:
        if s["de"] not in sv_konzepte:
            continue
        eigene = [k for k, _ in s["k"]]
        fremde = sv_konzepte[s["de"]]
        if sorted(eigene) != sorted(fremde):
            warnung.append(f"Konzepte weichen von sv ab: {s['de']!r}\n"
                           f"      es={eigene}  sv={fremde}")

    # Leere Synonyme
    for s in es.SAETZE:
        for k, syn in s["k"]:
            if not syn or any(not x.strip() for x in syn):
                fehler.append(f"Leeres Synonym bei {s['de']!r} / {k}")

    print(f"phrasebook_master ({KATEGORIE}): {len(de_set)} Saetze")
    print(f"spanisch.py:  {len(es.SAETZE)} uebersetzt "
          f"({len(neu)} davon neu), {len(es.AUSGELASSEN)} ausgelassen")
    print(f"Rechnung:     {len(schluessel) - len(neu)} + {len(es.AUSGELASSEN)} = "
          f"{len(schluessel) - len(neu) + len(es.AUSGELASSEN)} (soll: {len(de_set)})")
    print()

    if warnung:
        print(f"{len(warnung)} Hinweis(e) zu Konzept-Schluesseln:")
        for w in warnung:
            print("  - " + w)
        print()

    if fehler:
        print(f"{len(fehler)} FEHLER:")
        for f in fehler:
            print("  X " + f)
        sys.exit(1)

    print("Alles sauber - Import kann laufen.")


if __name__ == "__main__":
    main()
