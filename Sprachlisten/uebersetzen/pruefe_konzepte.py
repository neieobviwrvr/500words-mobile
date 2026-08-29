# -*- coding: utf-8 -*-
"""Findet Saetze, die NIEMAND loesen kann.

`evaluateConcepts` verlangt, dass von JEDER required-Gruppe mindestens ein
Synonym in der Antwort vorkommt. Steht in einer Gruppe kein Synonym, das
ueberhaupt im eigenen Zielsatz auftaucht, ist der Satz unloesbar: wer die
Musterantwort woertlich sagt, faellt trotzdem durch.

Gefunden hat das am 2026-08-29 vierzehn Faelle in vier Sprachen (repariert in
zusammenfuehren/konzepte_reparieren.py). Zwei Ursachen, beide wiederholbar:

  Mehrwort-Synonyme  "autobús al aeropuerto" trifft "¿Qué autobús VA al
                     aeropuerto?" nicht - ein Wort dazwischen genuegt.
  Falsche Vokabel    Die Konzepte beschreiben einen anderen Satz als den
                     gespeicherten (请帮我报警 mit den Konzepten 叫 + 警察).

Dazu meldet das Skript exakte Dubletten (gleicher deutscher Satz, gleiche
Kategorie).

**Naeherung, keine Wahrheit.** Geprueft wird auf Teilzeichenkette, waehrend
`evaluateConcepts` fuer lateinische Schrift auf Wort-Token mit
Levenshtein-Toleranz arbeitet. Ein Treffer hier heisst also "loesbar", ein
Fehltreffer heisst "sehr wahrscheinlich unloesbar - ansehen". Falschmeldungen
sind moeglich, Uebersehen ist unwahrscheinlich.

Nutzung:  python pruefe_konzepte.py           (alle Sprachen)
          python pruefe_konzepte.py fr es
"""
import json
import os
import sys
import urllib.request

HIER = os.path.dirname(os.path.abspath(__file__))
SPRACHLISTEN = os.path.dirname(HIER)
TABELLE = {"es": "spanisch_phrasebook", "sv": "schwedisch_phrasebook",
           "fr": "franz_phrasebook", "zh": "chinesisch_phrasebook",
           "de": "phrasebook_master"}


def lies_env(name):
    for zeile in open(os.path.join(SPRACHLISTEN, ".env"), encoding="utf-8"):
        if zeile.startswith(name + "="):
            return zeile.split("=", 1)[1].strip().strip('"')
    raise SystemExit(name + " nicht gefunden")


def hole(url, key, pfad):
    req = urllib.request.Request(url + "/rest/v1/" + pfad,
                                 headers={"apikey": key, "Authorization": "Bearer " + key})
    with urllib.request.urlopen(req) as a:
        return json.loads(a.read().decode("utf-8"))


def main():
    sprachen = sys.argv[1:] or ["fr", "es", "sv", "zh"]
    url, key = lies_env("SUPABASE_URL"), lies_env("SUPABASE_SERVICE_ROLE_KEY")
    gesamt = 0

    for sp in sprachen:
        tab = TABELLE[sp]
        spalte = "german" if sp == "de" else "target_text"
        rows = hole(url, key, f"{tab}?select=german,{spalte},category,accepted_concepts")

        unloesbar = []
        for r in rows:
            ziel = (r.get(spalte) or "").lower()
            for g in r["accepted_concepts"].get("required", []):
                if not any(s.lower() in ziel for s in g["synonyms"]):
                    unloesbar.append((r["category"], r["german"], g["concept"],
                                      g["synonyms"], r.get(spalte)))

        paare = [(r["german"], r["category"]) for r in rows]
        dubletten = sorted({p for p in paare if paare.count(p) > 1})

        gesamt += len(unloesbar) + len(dubletten)
        print(f"=== {sp} ({tab}): {len(rows)} Saetze ===")
        print(f"  unloesbare Konzepte: {len(unloesbar)}")
        for u in unloesbar[:15]:
            print(f"    [{u[0][:18]:20}] {u[1][:34]:36} {u[2]:18} {u[3]} -> {u[4]}")
        if len(unloesbar) > 15:
            print(f"    ... und {len(unloesbar) - 15} weitere")
        print(f"  Dubletten (german, category): {len(dubletten)}")
        for d in dubletten:
            print(f"    {d[0]!r} in {d[1]}")
        print()

    print("SAUBER." if gesamt == 0 else f"{gesamt} Befund(e) - siehe oben.")
    sys.exit(0 if gesamt == 0 else 1)


if __name__ == "__main__":
    main()
