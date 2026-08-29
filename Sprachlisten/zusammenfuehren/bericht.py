# -*- coding: utf-8 -*-
"""Stellt die Drift zwischen phrasebook_master und chinesisch_phrasebook dar.

Hintergrund (2026-08-27, Simons Frage "auf Deutsch oder Chinesisch basiert
die Uebersetzung?"): die deutschen Saetze in beiden Tabellen sind
auseinandergelaufen - 118 Schluessel weichen ab. Die Spalte `german` ist aber
der Abgleichschluessel fuer JEDE Uebersetzung (schwedisch/spanisch), also
erbt jede neue Sprache die Luecke.

Dieses Skript klassifiziert NICHT automatisch - es stellt die Abweichungen
nur je Szenario nebeneinander, damit ein Mensch entscheiden kann:

  A  Dublette   derselbe Satz, andere deutsche Formulierung
                -> chinesisch_phrasebook.german auf die Master-Fassung ziehen
  B  Neu        gibt es nur auf Chinesisch, echter Inhalt
                -> deutsche Fassung in phrasebook_master nachtragen
  C  Luecke_ZH  gibt es nur auf Deutsch
                -> keine Datenkorrektur, nur eine offene Chinesisch-Uebersetzung

Warum nicht automatisch: die Umformulierungen sind inhaltlich gleich, aber
sprachlich weit auseinander ("Ich wohne im Hotel, ist nicht so praktisch"
gegen "In meinem Hotel geht das nicht") - String-Aehnlichkeit wuerde die
nicht finden und dafuer falsche Paare bilden.

Nutzung: python bericht.py            (alle Kategorien)
         python bericht.py club_nightlife
"""
import json
import os
import sys
import urllib.request

HIER = os.path.dirname(os.path.abspath(__file__))
SPRACHLISTEN = os.path.dirname(HIER)

KATEGORIEN = [
    # ALLE Kategorien der App, auch die noch leeren (siehe
    # src/data/categories.ts) - NICHT nur die mit Inhalt. Genau daran
    # scheiterte es am 2026-08-29: dating_romance fehlte in dieser Liste, und
    # damit rutschten zwei chinesische Saetze durch jede Pruefung, weil ihre
    # Kategorie gar nicht abgefragt wurde. Eine leere Kategorie kostet nichts
    # (sie liefert null Zeilen), eine fehlende kostet Vollstaendigkeit.
    "grundwortschatz", "club_nightlife", "health_emergency", "drinking_dining",
    "travel_transportation", "hotel_accommodation", "moving_settling",
    "shopping_haggling", "university_studying", "culture_immersion",
    "smalltalk_socialising", "dating_romance", "finding_friends",
    "love_relationship", "job_work",
]


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


def main():
    kats = sys.argv[1:] or KATEGORIEN
    url, key = lies_env("SUPABASE_URL"), lies_env("SUPABASE_SERVICE_ROLE_KEY")

    gesamt = {"nur_zh": 0, "nur_de": 0}
    for K in kats:
        de = hole(url, key, f"phrasebook_master?select=id,german,scenario&category=eq.{K}")
        zh = hole(url, key, f"chinesisch_phrasebook?select=id,german,target_text,pinyin,scenario&category=eq.{K}")
        de_set = {r["german"] for r in de}
        zh_set = {r["german"] for r in zh}

        nur_zh = [r for r in zh if r["german"] not in de_set]
        nur_de = [r for r in de if r["german"] not in zh_set]
        if not nur_zh and not nur_de:
            continue

        gesamt["nur_zh"] += len(nur_zh)
        gesamt["nur_de"] += len(nur_de)

        print("=" * 78)
        print(f"{K}   DE {len(de)} | ZH {len(zh)} | nur ZH {len(nur_zh)} | nur DE {len(nur_de)}")
        print("=" * 78)

        szenarien = sorted({r["scenario"] for r in nur_zh} | {r["scenario"] for r in nur_de})
        for sz in szenarien:
            z = [r for r in nur_zh if r["scenario"] == sz]
            d = [r for r in nur_de if r["scenario"] == sz]
            if not z and not d:
                continue
            print(f"\n  --- {sz} ---")
            if z:
                print("   NUR CHINESISCH:")
                for r in z:
                    print(f"     [{r['id']}] {r['german']}")
                    print(f"           {r['target_text']}   ({r['pinyin'] or '-'})")
            if d:
                print("   NUR DEUTSCH:")
                for r in d:
                    print(f"     [{r['id']}] {r['german']}")
        print()

    print("=" * 78)
    print(f"SUMME   nur Chinesisch: {gesamt['nur_zh']}   nur Deutsch: {gesamt['nur_de']}")


if __name__ == "__main__":
    main()
