# -*- coding: utf-8 -*-
"""Pruefen und Einspielen von VOKABELLISTEN - fuer jede Sprache.

Gegenstueck zu werkzeug.py (das macht dasselbe fuer SAETZE). Getrennt, weil
die Datenlage grundsaetzlich anders ist:

  Saetze    haben einen gemeinsamen deutschen Master (phrasebook_master),
            aus dem uebersetzt wird - der deutsche Satz ist der Schluessel.
  Woerter   haben KEINEN gemeinsamen Master, und zwar aus einem sachlichen
            Grund: die 500 haeufigsten Woerter des Italienischen sind nicht
            die Uebersetzungen der 500 haeufigsten deutschen. Jede Sprache
            hat ihre eigene Haeufigkeitsliste. Gezaehlt am 2026-09-03:
            zwischen spanisch_vocab und franz_vocab ueberlappen im
            deutschen Feld nur 185 von rund 500 Eintraegen.

Inhaltsdateien heissen vokabeln_SPRACHE.py und liefern:
  WOERTER = [dict(w='essere', de='sein', k='Verb', rang=1), ...]
    w     Wort in der Zielsprache (Importschluessel, eindeutig)
    de    deutsche Bedeutung
    k     WORTART - landet in category, das bei den Vokabeltabellen die
          Wortart meint, NICHT die Lernkategorie (gewachsene Eigenheit,
          siehe Migration 20260903180000)
    rang  Haeufigkeitsrang
    g     Genus bei Nomen (m/f/n), sonst weglassen
    py    Lautschrift - PFLICHT bei Sprachen mit eigener Schrift (ru)
    hin   Grammatik-Hinweis (grammar_note)
    ok    zusaetzlich akzeptierte deutsche Antworten (accepted_answers)

Nutzung:
  python vokabel_werkzeug.py pruefe    it
  python vokabel_werkzeug.py spiel_ein it            (Probelauf)
  python vokabel_werkzeug.py spiel_ein it --echt
"""
import importlib.util
import json
import os
import sys
import urllib.request
from collections import Counter

HIER = os.path.dirname(os.path.abspath(__file__))
SPRACHLISTEN = os.path.dirname(HIER)

# Windows-Konsole faellt sonst auf cp1252 zurueck und stuerzt beim ersten
# kyrillischen Zeichen ab - siehe denselben Block in werkzeug.py.
if hasattr(sys.stdout, "reconfigure"):
    sys.stdout.reconfigure(encoding="utf-8", errors="replace")
    sys.stderr.reconfigure(encoding="utf-8", errors="replace")

# Sprache -> (Tabelle, Spalte mit dem Zielsprachen-Wort)
TABELLE = {
    "it": ("italienisch_vocab", "italian"),
    "no": ("norwegisch_vocab", "norwegian"),
    "ru": ("russisch_vocab", "russian"),
    "vi": ("vietnamesisch_vocab", "vietnamese"),
    "pl": ("polnisch_vocab", "polish"),
    "en": ("englisch_vocab", "english"),
}
# Sprachen mit eigener Schrift: py ist Pflicht und landet in dieser Spalte.
LAUTSCHRIFT_SPALTE = {"ru": "lautschrift"}

# Sprachen, deren Nomen ein grammatisches Geschlecht tragen - nur dort ist
# `g` Pflicht. Englisch und Vietnamesisch haben KEINS: "the table" und "cái
# bàn" sind geschlechtslos, ein erfundenes Genus waere dort schlicht falsch.
MIT_GENUS = {"it", "no", "ru", "pl"}

# Die App faerbt nur fuenf Wortarten ein (WORD_COLORS in tokens.ts), der
# Wortart-Filter der Woerter-Wiederholung zeigt aber ALLE, die in der Spalte
# stehen. Diese Liste haelt die Schreibweise einheitlich - ohne sie stuenden
# "Nomen" und "Substantiv" als zwei getrennte Filter-Chips nebeneinander.
WORTARTEN = {
    "Nomen", "Verb", "Adjektiv", "Adverb", "Pronomen",
    "Praeposition", "Konjunktion", "Artikel", "Zahlwort", "Fragewort",
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


def lade_inhalt(sprache):
    pfad = os.path.join(HIER, "vokabeln_" + sprache + ".py")
    if not os.path.exists(pfad):
        raise SystemExit("Keine Inhaltsdatei: " + pfad)
    spec = importlib.util.spec_from_file_location("inhalt", pfad)
    modul = importlib.util.module_from_spec(spec)
    spec.loader.exec_module(modul)
    return modul


def sammle(sprache):
    if sprache not in TABELLE:
        raise SystemExit("Unbekannte Sprache " + repr(sprache))
    url, key = lies_env("SUPABASE_URL"), lies_env("SUPABASE_SERVICE_ROLE_KEY")
    tab, spalte = TABELLE[sprache]
    schon_da = {z[spalte] for z in rest(url, key, tab + "?select=" + spalte)}
    return url, key, tab, spalte, schon_da


def pruefe(sprache):
    inhalt = lade_inhalt(sprache)
    url, key, tab, spalte, schon_da = sammle(sprache)
    fehler = []

    woerter = [w["w"] for w in inhalt.WOERTER]
    doppelt = sorted({x for x in woerter if woerter.count(x) > 1})
    if doppelt:
        # Ein doppeltes Wort ist kein Schoenheitsfehler: die Tabelle hat einen
        # unique-Index darauf, der Import braeche mittendrin ab.
        fehler.append("Doppelte Zielwoerter: " + str(doppelt))

    raenge = [w.get("rang") for w in inhalt.WOERTER if w.get("rang")]
    doppelrang = sorted({r for r in raenge if raenge.count(r) > 1})
    if doppelrang:
        fehler.append("Doppelte Haeufigkeitsraenge: " + str(doppelrang[:10]))

    for w in inhalt.WOERTER:
        if not w.get("w", "").strip():
            fehler.append("Leeres Zielwort bei " + repr(w))
        if not w.get("de", "").strip():
            fehler.append("Keine deutsche Bedeutung fuer " + repr(w.get("w")))
        if w.get("k") not in WORTARTEN:
            fehler.append("Unbekannte Wortart " + repr(w.get("k")) + " bei " + repr(w.get("w")))
        if sprache in MIT_GENUS and w.get("k") == "Nomen" and not w.get("g"):
            # Ohne Genus ist ein Nomen halb gelernt - "casa" nuetzt wenig,
            # wenn man nicht weiss, dass es "la casa" heisst. Gilt nur fuer
            # Sprachen, die ueberhaupt eins haben (siehe MIT_GENUS).
            fehler.append("Nomen ohne Genus: " + repr(w.get("w")))
        if sprache not in MIT_GENUS and w.get("g"):
            fehler.append("Genus bei einer Sprache ohne Genus: " + repr(w.get("w")))
        if sprache in LAUTSCHRIFT_SPALTE and not (w.get("py") or "").strip():
            fehler.append("Keine Lautschrift (py) fuer " + repr(w.get("w")))

    print(tab + ": " + str(len(schon_da)) + " schon vorhanden")
    print("vokabeln_" + sprache + ".py: " + str(len(inhalt.WOERTER)) + " Woerter, "
          + str(len(set(woerter) - schon_da)) + " davon neu")
    c = Counter(w.get("k") for w in inhalt.WOERTER)
    print("  " + ", ".join(str(k) + " " + str(v) for k, v in c.most_common()))
    print()
    if fehler:
        print(str(len(fehler)) + " FEHLER:")
        for f in fehler[:40]:
            print("  X " + f)
        if len(fehler) > 40:
            print("  ... und " + str(len(fehler) - 40) + " weitere")
        sys.exit(1)
    print("Alles sauber.")


def spiel_ein(sprache, echt):
    inhalt = lade_inhalt(sprache)
    url, key, tab, spalte, schon_da = sammle(sprache)

    zeilen = []
    for w in inhalt.WOERTER:
        if w["w"] in schon_da:
            continue
        zeile = {
            spalte: w["w"],
            "german": w["de"],
            "category": w["k"],
            "genus": w.get("g"),
            "frequency_rank": w.get("rang"),
            "accepted_answers": w.get("ok"),
            "grammar_note": w.get("hin"),
            "status": "Neu",
        }
        if sprache in LAUTSCHRIFT_SPALTE:
            zeile[LAUTSCHRIFT_SPALTE[sprache]] = w.get("py")
        zeilen.append(zeile)

    if schon_da:
        print(str(len(schon_da)) + " Woerter sind schon da - werden uebersprungen.")
    print("Einzuspielen: " + str(len(zeilen)))
    if not zeilen:
        return
    if not echt:
        print()
        print("PROBELAUF - nichts geschrieben. Mit --echt einspielen.")
        for z in zeilen[:5]:
            print("  " + z[spalte].ljust(20) + z["german"].ljust(24) + str(z["category"]))
        if len(zeilen) > 5:
            print("  ... und " + str(len(zeilen) - 5) + " weitere")
        return

    for i in range(0, len(zeilen), 100):
        rest(url, key, tab, "POST", zeilen[i:i + 100])
        print("  " + str(min(i + 100, len(zeilen))) + "/" + str(len(zeilen)))
    endstand = rest(url, key, tab + "?select=" + spalte)
    print("Fertig. " + tab + " steht jetzt bei " + str(len(endstand)) + " Woertern.")


def main():
    if len(sys.argv) < 3:
        raise SystemExit(__doc__)
    befehl, sprache = sys.argv[1], sys.argv[2]
    if befehl == "pruefe":
        pruefe(sprache)
    elif befehl == "spiel_ein":
        spiel_ein(sprache, "--echt" in sys.argv)
    else:
        raise SystemExit("Unbekannter Befehl " + repr(befehl) + " - pruefe | spiel_ein")


if __name__ == "__main__":
    main()
