# -*- coding: utf-8 -*-
"""Dauerhafte Pruefung: sind alle `word_tags` ueber alle Sprachen konsistent?

Laeuft unabhaengig von einzelnen Kategorie-Sessions - liest ALLE Zeilen mit
gesetztem word_tags aus allen 5 Sprachtabellen und prueft:
  - Tags rekonstruiert (mit Leerzeichen verbunden) ergeben exakt den
    Live-Text der Spalte (target_text/german/pinyin) - faengt Drift ab,
    wenn ein Satz nach dem Taggen bearbeitet wurde
  - jede Wortart ist aus dem erlaubten Set {v,n,a,p,k,None}
  - meldet die Abdeckung je Tabelle, damit Fortschritt sichtbar bleibt

Gleiches Prinzip wie pruefe_konzepte.py: reine Lesepruefung, exit 0 wenn
sauber, exit 1 bei Funden. Beliebig oft wiederholbar, waechst mit dem
Content mit statt nur einmal beim Anlegen zu laufen.

Nutzung: python pruefe_wortarten.py
"""
import json
import os
import sys
import urllib.request

HIER = os.path.dirname(os.path.abspath(__file__))
SPRACHLISTEN = os.path.dirname(HIER)

TABELLEN = {
    "phrasebook_master": "german",
    "schwedisch_phrasebook": "target_text",
    "spanisch_phrasebook": "target_text",
    "franz_phrasebook": "target_text",
    "chinesisch_phrasebook": "pinyin",
}
ERLAUBT = {"v", "n", "a", "p", "k", None}


def lies_env(name):
    for zeile in open(os.path.join(SPRACHLISTEN, ".env"), encoding="utf-8"):
        if zeile.startswith(name + "="):
            return zeile.split("=", 1)[1].strip().strip('"')
    raise SystemExit(name + " nicht gefunden")


def rest(url, key, pfad):
    kopf = {"apikey": key, "Authorization": "Bearer " + key}
    r = urllib.request.Request(url + "/rest/v1/" + pfad, headers=kopf)
    with urllib.request.urlopen(r) as a:
        t = a.read().decode("utf-8")
        return json.loads(t) if t.strip() else []


def main():
    url, key = lies_env("SUPABASE_URL"), lies_env("SUPABASE_SERVICE_ROLE_KEY")
    fehler = []
    gesamt_getaggt = 0

    for tab, spalte in TABELLEN.items():
        alle = rest(url, key, f"{tab}?select=id,{spalte},word_tags,category")
        getaggt = [z for z in alle if z["word_tags"]]
        gesamt_getaggt += len(getaggt)

        for z in getaggt:
            tags = z["word_tags"]
            rekonstruiert = " ".join(t["w"] for t in tags)
            if rekonstruiert != z[spalte]:
                fehler.append(f"{tab} id={z['id']}: Tags ergeben {rekonstruiert!r}, "
                              f"Live-Text ist {z[spalte]!r}")
            for t in tags:
                if t.get("c") not in ERLAUBT:
                    fehler.append(f"{tab} id={z['id']}: c={t.get('c')!r} "
                                  f"nicht im erlaubten Set")

        # Abdeckung je Kategorie, nicht nur pro Tabelle - zeigt, wo als
        # naechstes weitergetaggt werden sollte.
        je_kategorie = {}
        for z in alle:
            k = z["category"]
            je_kategorie.setdefault(k, [0, 0])
            je_kategorie[k][1] += 1
            if z["word_tags"]:
                je_kategorie[k][0] += 1
        print(f"{tab}: {len(getaggt)} von {len(alle)} Saetzen getaggt")
        for k, (getan, ges) in sorted(je_kategorie.items()):
            if getan:
                print(f"  {k:26} {getan}/{ges}")

    print()
    if fehler:
        print(f"{len(fehler)} FEHLER:")
        for f in fehler:
            print("  X " + f)
        sys.exit(1)
    print(f"Alles sauber. {gesamt_getaggt} Saetze insgesamt getaggt.")


if __name__ == "__main__":
    main()
