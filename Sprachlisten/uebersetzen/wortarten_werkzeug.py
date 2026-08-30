# -*- coding: utf-8 -*-
"""Wort-fuer-Wort-Tagging fuer Saetze - fuer JEDE Kategorie und Sprache.

Befuellt die `word_tags`-Spalte (Migration 20260829120000_wortart_spalten.sql)
mit einer Wortart pro Wort, in Lesereihenfolge - Grundlage fuer die
durchgehende Wortarten-Farbcodierung (siehe Plan "Wortart-Farbcodierung
durchgaengig"). Gleiches Muster wie werkzeug.py (Uebersetzungen), aber:
  - nach Zeilen-`id` statt deutschem Text (jede Sprache hat eigene
    Wortstellung, der deutsche Schluessel waere hier keine Abkuerzung)
  - inklusive `de` fuer phrasebook_master selbst - Deutsch ist eine lernbare
    Zielsprache und braucht genauso Tags wie jede Uebersetzung

Inhaltsdateien heissen `wortarten_<kategorie>_<sprachkuerzel>.py` und liefern:
  TAGS = [
    {"id": 123, "tags": [{"w": "Ich", "c": "p"}, {"w": "heisst", "c": "v"},
                          {"w": "Anna.", "c": None}]},
    ...
  ]
`c` ist eine von 'v'(Verb)/'n'(Nomen)/'a'(Adjektiv)/'p'(Pronomen)/
'k'(Konjunktion) oder None (bewusst ungefaerbt - z.B. Artikel, Adverb,
Praeposition, Partikel: die App faerbt nur 5 Kategorien ein, der Rest bleibt
absichtlich neutral statt falsch-praezise zugeordnet).

**Kritisch:** `" ".join(t["w"] for t in tags)` muss NACH dem Zusammenfuegen
exakt dem Live-Wert der Textspalte entsprechen (target_text/german bzw.
pinyin bei Chinesisch, wo die Woerter schon leerzeichengetrennt stehen) -
das faengt Drift ab, wenn ein Satz spaeter bearbeitet wird, ohne die Tags
nachzuziehen. `pruefe()` prueft das, nicht nur die Kategorie-Abdeckung.

Nutzung:
  python wortarten_werkzeug.py pruefe    grundwortschatz de
  python wortarten_werkzeug.py spiel_ein grundwortschatz de          (Probelauf)
  python wortarten_werkzeug.py spiel_ein grundwortschatz de --echt
"""
import importlib.util
import json
import os
import sys
import urllib.request

HIER = os.path.dirname(os.path.abspath(__file__))
SPRACHLISTEN = os.path.dirname(HIER)

# (Tabelle, Spalte mit dem eigentlichen Lerntext, den die Tags abdecken)
TABELLE = {
    "de": ("phrasebook_master", "german"),
    "es": ("spanisch_phrasebook", "target_text"),
    "sv": ("schwedisch_phrasebook", "target_text"),
    "fr": ("franz_phrasebook", "target_text"),
    "zh": ("chinesisch_phrasebook", "pinyin"),
}
ERLAUBT = {"v", "n", "a", "p", "k", None}


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


def lade_inhalt(kategorie, sprache):
    pfad = os.path.join(HIER, f"wortarten_{kategorie}_{sprache}.py")
    if not os.path.exists(pfad):
        raise SystemExit(f"Keine Inhaltsdatei: {pfad}")
    spec = importlib.util.spec_from_file_location("inhalt", pfad)
    modul = importlib.util.module_from_spec(spec)
    spec.loader.exec_module(modul)
    return modul


def sammle(kategorie, sprache):
    url, key = lies_env("SUPABASE_URL"), lies_env("SUPABASE_SERVICE_ROLE_KEY")
    if sprache not in TABELLE:
        raise SystemExit(f"Unbekannte Sprache {sprache!r} - bekannt: {sorted(TABELLE)}")
    tab, spalte = TABELLE[sprache]
    zeilen = rest(url, key, f"{tab}?select=id,{spalte},word_tags&category=eq.{kategorie}")
    return url, key, tab, spalte, {z["id"]: z for z in zeilen}


def pruefe(kategorie, sprache):
    inhalt = lade_inhalt(kategorie, sprache)
    url, key, tab, spalte, zeilen = sammle(kategorie, sprache)
    fehler = []

    ids = [t["id"] for t in inhalt.TAGS]
    doppelt = {i for i in ids if ids.count(i) > 1}
    if doppelt:
        fehler.append(f"Doppelte id in TAGS: {sorted(doppelt)}")

    for eintrag in inhalt.TAGS:
        zid = eintrag["id"]
        if zid not in zeilen:
            fehler.append(f"id={zid} nicht in {tab}/{kategorie}")
            continue
        live = zeilen[zid][spalte]
        rekonstruiert = " ".join(t["w"] for t in eintrag["tags"])
        if rekonstruiert != live:
            fehler.append(f"id={zid}: Tags ergeben {rekonstruiert!r}, "
                          f"Live-Text ist {live!r}")
        for t in eintrag["tags"]:
            if t.get("c") not in ERLAUBT:
                fehler.append(f"id={zid}: c={t.get('c')!r} nicht erlaubt "
                              f"({sorted(x for x in ERLAUBT if x)})")

    abgedeckt = len(ids)
    gesamt = len(zeilen)
    print(f"{tab}/{kategorie} ({sprache}): {abgedeckt} von {gesamt} Saetzen getaggt")
    print()
    if fehler:
        print(f"{len(fehler)} FEHLER:")
        for f in fehler:
            print("  X " + f)
        sys.exit(1)
    print("Alles sauber.")


def spiel_ein(kategorie, sprache, echt):
    inhalt = lade_inhalt(kategorie, sprache)
    url, key, tab, spalte, zeilen = sammle(kategorie, sprache)

    zu_schreiben = []
    for eintrag in inhalt.TAGS:
        zid = eintrag["id"]
        if zid not in zeilen:
            raise SystemExit(f"id={zid} nicht in {tab}/{kategorie} - erst pruefen.")
        live = zeilen[zid][spalte]
        rekonstruiert = " ".join(t["w"] for t in eintrag["tags"])
        if rekonstruiert != live:
            raise SystemExit(f"id={zid}: Tags passen nicht zum Live-Text - erst pruefen.")
        zu_schreiben.append((zid, eintrag["tags"]))

    print(f"Einzuspielen: {len(zu_schreiben)}")
    if not zu_schreiben:
        return
    if not echt:
        print("PROBELAUF - nichts geschrieben. Mit --echt einspielen.")
        return

    for zid, tags in zu_schreiben:
        rest(url, key, f"{tab}?id=eq.{zid}", "PATCH", {"word_tags": tags})
    endstand = rest(url, key, f"{tab}?select=id&category=eq.{kategorie}&word_tags=not.is.null")
    print(f"Fertig. {tab}/{kategorie} steht jetzt bei {len(endstand)} getaggten Saetzen.")


def main():
    if len(sys.argv) < 4:
        raise SystemExit(__doc__)
    befehl, kategorie, sprache = sys.argv[1], sys.argv[2], sys.argv[3]
    if befehl == "pruefe":
        pruefe(kategorie, sprache)
    elif befehl == "spiel_ein":
        spiel_ein(kategorie, sprache, "--echt" in sys.argv)
    else:
        raise SystemExit(f"Unbekannter Befehl {befehl!r} - pruefe | spiel_ein")


if __name__ == "__main__":
    main()
