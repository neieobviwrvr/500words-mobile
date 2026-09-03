# -*- coding: utf-8 -*-
"""Pruefen und Einspielen von Uebersetzungen - fuer JEDE Kategorie und Sprache.

Loest die kategoriespezifischen Skripte ab (club_nightlife/pruefe_spanisch.py
und import_spanisch.py, die dort bleiben, weil sie laufen und getestet sind).
Ab drinking_dining laeuft alles hierueber - sonst gaebe es die gleiche Datei
elfmal, und ein Fehler waere elfmal zu beheben.

Inhaltsdateien heissen `<kategorie>_<sprachkuerzel>.py` und liefern:
  SAETZE       [dict(de=..., es=..., k=[(konzept, [synonyme])], h=None, neu=False)]
  AUSGELASSEN  [deutscher Satz, ...]  - bewusst nicht uebersetzt, mit Begruendung
                                        im Kopfkommentar der Datei
Das Zielsprachen-Feld heisst wie das Kuerzel ('es', 'fr', 'sv').

Nutzung:
  python werkzeug.py pruefe   drinking_dining es
  python werkzeug.py spiel_ein drinking_dining es          (Probelauf)
  python werkzeug.py spiel_ein drinking_dining es --echt
"""
import importlib.util
import json
import os
import sys
import urllib.request

# Windows-Konsole faellt sonst auf cp1252 zurueck und stuerzt beim ERSTEN
# kyrillischen Zeichen ab (2026-09-03, real passiert): eine Fehlermeldung
# ueber einen russischen Satz liess das Skript mit UnicodeEncodeError enden,
# statt den Fehler zu zeigen - also genau dann, wenn man sie braucht.
# Betrifft jede Sprache mit eigener Schrift, Chinesisch eingeschlossen.
if hasattr(sys.stdout, "reconfigure"):
    sys.stdout.reconfigure(encoding="utf-8", errors="replace")
    sys.stderr.reconfigure(encoding="utf-8", errors="replace")

HIER = os.path.dirname(os.path.abspath(__file__))
SPRACHLISTEN = os.path.dirname(HIER)

TABELLE = {
    "es": "spanisch_phrasebook",
    "sv": "schwedisch_phrasebook",
    "fr": "franz_phrasebook",
    "zh": "chinesisch_phrasebook",
    "it": "italienisch_phrasebook",
    "no": "norwegisch_phrasebook",
    "ru": "russisch_phrasebook",
}
MASTER = "phrasebook_master"

# Sprachen mit eigener Schrift: die Lautschrift ist der LERNTEXT, die Schrift
# laeuft passiv mit (TTS braucht sie, STT gibt sie zurueck). Der Wert ist der
# Spaltenname, der Schluessel im Satz-dict ist immer `py`.
#
# Chinesisch heisst die Spalte historisch `pinyin`, Russisch `lautschrift` -
# "Pinyin" ist ein chinesisches Eigenwort und waere fuer Kyrillisch falsch.
LAUTSCHRIFT_SPALTE = {
    "zh": "pinyin",
    "ru": "lautschrift",
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


def lade_inhalt(kategorie, sprache):
    pfad = os.path.join(HIER, f"{kategorie}_{sprache}.py")
    if not os.path.exists(pfad):
        raise SystemExit(f"Keine Inhaltsdatei: {pfad}")
    spec = importlib.util.spec_from_file_location("inhalt", pfad)
    modul = importlib.util.module_from_spec(spec)
    spec.loader.exec_module(modul)
    return modul


def kategorien_von(inhalt, kategorie):
    """
    Welche Kategorien diese Inhaltsdatei abdeckt.

    Normalfall: genau die eine aus dem Dateinamen. Eine Datei darf aber auch
    `KATEGORIEN = [...]` setzen und dann je Satz ein `kat=` tragen - gedacht
    fuer Aufraeum-Dateien, die pro Kategorie nur ein bis fuenf Saetze
    nachliefern (sonst gaebe es acht Dateien mit je zwei Zeilen).
    """
    return list(getattr(inhalt, "KATEGORIEN", None) or [kategorie])


def sammle(kategorien, sprache):
    """Gemeinsame Datenbasis fuer beide Befehle, ueber alle genannten Kategorien."""
    url, key = lies_env("SUPABASE_URL"), lies_env("SUPABASE_SERVICE_ROLE_KEY")
    tab = TABELLE.get(sprache)
    if not tab:
        raise SystemExit(f"Unbekannte Sprache {sprache!r} - bekannt: {sorted(TABELLE)}")
    filt = "in.(" + ",".join(kategorien) + ")"
    master = rest(url, key, f"{MASTER}?select=german,scenario,tense,difficulty,"
                            f"lookup_only,addressing,category&category={filt}")
    schon_da = {z["german"] for z in rest(url, key, f"{tab}?select=german&category={filt}")}
    return url, key, tab, {z["german"]: z for z in master}, schon_da


def pruefe(kategorie, sprache):
    inhalt = lade_inhalt(kategorie, sprache)
    kategorien = kategorien_von(inhalt, kategorie)
    url, key, tab, master, schon_da = sammle(kategorien, sprache)
    fehler = []

    # Bei kategorieuebergreifenden Dateien muss jeder Satz sagen, wohin er
    # gehoert - sonst landet er still in der falschen Kategorie.
    if len(kategorien) > 1:
        for s in inhalt.SAETZE:
            if not s.get("kat"):
                fehler.append(f"Kein kat= bei {s['de']!r} (Datei deckt mehrere Kategorien ab)")
            elif s["kat"] not in kategorien:
                fehler.append(f"kat={s['kat']!r} steht nicht in KATEGORIEN: {s['de']!r}")
            elif s["de"] in master and master[s["de"]]["category"] != s["kat"]:
                fehler.append(f"kat={s['kat']!r}, im Master aber "
                              f"{master[s['de']]['category']!r}: {s['de']!r}")

    schluessel = [s["de"] for s in inhalt.SAETZE]
    doppelt = {k for k in schluessel if schluessel.count(k) > 1}
    if doppelt:
        fehler.append(f"Doppelte deutsche Schluessel: {sorted(doppelt)}")

    neu = {s["de"] for s in inhalt.SAETZE if s.get("neu")}
    for s in inhalt.SAETZE:
        if s.get("neu"):
            if s["de"] in master:
                fehler.append(f"Als neu markiert, existiert aber: {s['de']!r}")
            continue
        if s["de"] not in master:
            fehler.append(f"Kein Treffer in {MASTER}: {s['de']!r}")
        if sprache not in s or not s[sprache].strip():
            fehler.append(f"Keine Uebersetzung ({sprache}) fuer {s['de']!r}")
        # Bei zh/ru ist die Lautschrift der Lerntext, nicht die Schrift - ein
        # Satz ohne `py` waere in der App nur als Hanzi/Kyrillisch sichtbar.
        if sprache in LAUTSCHRIFT_SPALTE and not (s.get("py") or "").strip():
            fehler.append(f"Keine Lautschrift (py) fuer {s['de']!r}")
        for k, syn in s["k"]:
            if not syn or any(not x.strip() for x in syn):
                fehler.append(f"Leeres Synonym bei {s['de']!r} / {k}")

    # Deckt (uebersetzt + ausgelassen + schon_da) den ganzen Master ab?
    #
    # `& set(master)` ist wichtig (2026-08-27): `schon_da` enthaelt auch die
    # sprachadaptiven Saetze, deren deutscher Gloss bewusst vom Master
    # abweicht ("Ich spreche ein bisschen Franzoesisch." statt "... Deutsch.").
    # Ohne den Schnitt zaehlte die Rechnung die doppelt und meldete "69 von 67" -
    # eine Zahl, die niemand nachvollziehen kann.
    abgedeckt = ((set(schluessel) - neu) | set(inhalt.AUSGELASSEN) | schon_da) & set(master)
    for v in sorted(set(master) - abgedeckt):
        fehler.append(f"Weder uebersetzt noch als ausgelassen erklaert: {v!r}")
    for g in sorted(set(inhalt.AUSGELASSEN) - set(master)):
        fehler.append(f"AUSGELASSEN nennt einen Satz, den es nicht gibt: {g!r}")

    umfang = kategorie if len(kategorien) == 1 else f"{len(kategorien)} Kategorien"
    print(f"{MASTER}/{umfang}: {len(master)} Saetze")
    print(f"{tab}/{umfang}: {len(schon_da)} schon vorhanden")
    print(f"{kategorie}_{sprache}.py: {len(inhalt.SAETZE)} uebersetzt "
          f"({len(neu)} neu), {len(inhalt.AUSGELASSEN)} ausgelassen")
    print(f"Rechnung: {len(schluessel) - len(neu)} neu uebersetzt + {len(schon_da)} vorhanden "
          f"+ {len(inhalt.AUSGELASSEN)} ausgelassen "
          f"= {len(abgedeckt)} von {len(master)}")
    print()
    if fehler:
        print(f"{len(fehler)} FEHLER:")
        for f in fehler:
            print("  X " + f)
        sys.exit(1)
    print("Alles sauber.")


def spiel_ein(kategorie, sprache, echt):
    inhalt = lade_inhalt(kategorie, sprache)
    kategorien = kategorien_von(inhalt, kategorie)
    url, key, tab, master, schon_da = sammle(kategorien, sprache)

    # Rueckfall-Kategorie fuer Saetze OHNE Master-Eintrag (`neu=True`) und
    # ohne eigenes `kat=`.
    #
    # 2026-09-03 real passiert: `club_it.py` deklariert
    # KATEGORIEN = ['club_nightlife'], heisst aber `club_*`, und wurde als
    # `spiel_ein club it` aufgerufen. Die fuenf neuen Saetze landeten
    # dadurch unter der Kategorie "club" - einem Slug, den es nirgends gibt,
    # also unsichtbar fuer die App. Der DATEINAME darf nicht bestimmen, wo
    # Inhalt landet; wenn die Datei genau eine Kategorie deklariert, ist das
    # die Antwort.
    vorgabe = kategorien[0] if len(kategorien) == 1 else kategorie

    zeilen = []
    for s in inhalt.SAETZE:
        if s["de"] in schon_da:
            continue
        meta = master.get(s["de"])
        if meta is None:
            if not s.get("neu"):
                raise SystemExit(f"Keine Metadaten fuer {s['de']!r} - erst pruefen.")
            meta = s.get("meta") or {}
        zeilen.append({
            "target_text": s[sprache],
            "german": s["de"],
            "scenario": meta.get("scenario") or s.get("sz"),
            "tense": meta.get("tense") or "present",
            "difficulty": meta.get("difficulty") or "A1",
            "category": meta.get("category") or s.get("kat") or vorgabe,
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
        # Sprachen mit eigener Schrift (zh, ru) tragen die Lautschrift in einer
        # eigenen Spalte, und DIE ist der eigentliche Lerntext (die Schrift
        # laeuft passiv mit, siehe CLAUDE.md "Gelernt wird ueber PINYIN").
        # Ohne sie zeigte die App fuer neue Saetze nur Hanzi bzw. Kyrillisch -
        # genau das, was vermieden werden soll.
        if sprache in LAUTSCHRIFT_SPALTE:
            zeilen[-1][LAUTSCHRIFT_SPALTE[sprache]] = s.get("py")

    if schon_da:
        print(f"{len(schon_da)} Saetze sind schon da - werden uebersprungen.")
    print(f"Einzuspielen: {len(zeilen)}")
    if not zeilen:
        return
    if not echt:
        print("\nPROBELAUF - nichts geschrieben. Mit --echt einspielen.\n")
        for z in zeilen[:5]:
            print(f"  {z['scenario']:22} {z['german']}")
            print(f"  {'':22} -> {z['target_text']}")
        if len(zeilen) > 5:
            print(f"  ... und {len(zeilen) - 5} weitere")
        return

    for i in range(0, len(zeilen), 40):
        rest(url, key, tab, "POST", zeilen[i:i + 40])
        print(f"  {min(i + 40, len(zeilen))}/{len(zeilen)}")
    # Ueber die WIRKLICH betroffenen Kategorien zaehlen, nicht ueber den
    # Dateinamen - bei einer kategorieuebergreifenden Datei (KATEGORIEN) gibt
    # es gar keine Kategorie namens "rest", die Schlussmeldung haette sonst
    # stur 0 gemeldet, obwohl der Import lief.
    filt = "in.(" + ",".join(kategorien) + ")"
    endstand = rest(url, key, f"{tab}?select=german&category={filt}")
    umfang = kategorie if len(kategorien) == 1 else f"{len(kategorien)} Kategorien"
    print(f"Fertig. {tab}/{umfang} steht jetzt bei {len(endstand)} Saetzen.")


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
