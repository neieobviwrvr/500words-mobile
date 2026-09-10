# -*- coding: utf-8 -*-
"""Ermittelt, welche Rahmenwoerter ein Lehrplan noch einfuehren muss.

R5 verlangt: kein Wort steht fest im Satzrahmen, ohne vorher gelehrt zu
sein. Ein natuerlicher Satz enthaelt aber Funktionswoerter, die der
gemeinsame Aufbau nicht als Slot fuehrt - franzoesisch `il y a`,
italienisch `questo`, polnisch `czy`.

Die von Hand nachzutragen waere stumpfe Arbeit mit hoher Fehlerquote:
sieben Sprachen mal ein paar Dutzend Woerter, und jede Aenderung an einem
Satzmuster verschiebt die Liste. Also ausrechnen.

Das Skript baut den Kurs, sammelt die R5-Verstoesse und schreibt den
`ZUSATZ`-Block direkt in die Lehrplan-Datei zurueck. Die Woerter stehen
ALLE in der Vokabelliste der Sprache - genau deshalb meldet R5 sie; ein
Wort, das die Liste nicht kennt, wird gar nicht geprueft.

Aufruf:  python zusatz_ermitteln.py fr it no vi pl
         python zusatz_ermitteln.py fr --schreib
"""
import importlib.util
import io
import os
import re
import sys

if hasattr(sys.stdout, "reconfigure"):
    sys.stdout.reconfigure(encoding="utf-8", errors="replace")

HIER = os.path.dirname(os.path.abspath(__file__))
sys.path.insert(0, HIER)

spec = importlib.util.spec_from_file_location("bauplan", os.path.join(HIER, "bauplan.py"))
bp = importlib.util.module_from_spec(spec)
spec.loader.exec_module(bp)


def sammle(sprache):
    """Rahmennummer -> Woerter, die dort eingefuehrt werden muessen.

    Die Rahmennummer ist die laufende Nummer in `spine.json` (1-basiert),
    dieselbe, die `gemeinsam.baue_module` benutzt. Um sie zu bekommen,
    wird der Lehrplan zweimal gelesen: einmal fuer die Zuordnung
    Muster -> Nummer, einmal fuer die Verstoesse.
    """
    lehrplan = bp.lade_lehrplan(sprache)
    wortschatz = bp.Wortschatz(lehrplan)

    # Muster -> Rahmennummer. Ein Muster kann mehrfach vorkommen; dann
    # zaehlt das erste Vorkommen, denn dort wird das Wort zuerst gebraucht.
    # Gezaehlt wird ueber die SPINE, nicht ueber den gefilterten Plan:
    # `uebersetze_lehrplan` laesst Rahmen weg, deren Slots die Sprache gar
    # nicht hat (italienisch fehlen die Ordnungszahlen). Zaehlt man danach,
    # verschieben sich alle folgenden Nummern - das Wort landet dann in
    # einem Rahmen, den es gar nicht gibt, und R5 meldet es weiter.
    # (Real passiert bei it/`troppo` und vi/`về`.)
    import gemeinsam
    nummer = {}
    for i, ziel in enumerate((m[0] for m in lehrplan.MUSTER), start=1):
        if ziel:
            nummer.setdefault(ziel, i)

    _, _, _, fehler = bp.baue(lehrplan, wortschatz)
    raus = {}
    for f in fehler:
        treffer = re.search(r"Rahmen ['\"](.+?)['\"]: ['\"](.+?)['\"] steht fest", f)
        if not treffer:
            continue
        muster, wort = treffer.group(1), treffer.group(2)
        nr = nummer.get(muster)
        if nr:
            raus.setdefault(nr, [])
            if wort not in raus[nr]:
                raus[nr].append(wort)
    return raus


def schreibe_zurueck(sprache, zusatz):
    """ERGAENZT den ZUSATZ-Block, ersetzt ihn nicht.

    Wichtig: ein zweiter Lauf findet nur noch die Woerter, die NACH dem
    ersten noch fehlen - die schon eingetragenen gelten ja jetzt als
    gelehrt. Wer den Block dann ueberschreibt, wirft den ersten Durchgang
    weg und faengt von vorn an. (Erster Versuch, real passiert: it und vi
    fielen dadurch von 1 auf 12 bzw. 24 Verstoesse zurueck.)
    """
    pfad = os.path.join(HIER, f"kurs_{sprache}.py")
    quelle = io.open(pfad, encoding="utf-8").read()

    alt = {}
    block = re.search(r"ZUSATZ = \{([^}]*)\}", quelle)
    if block:
        for nr, inhalt in re.findall(r"(\d+):\s*\[([^\]]*)\]", block.group(1)):
            alt[int(nr)] = [w.strip().strip('"').lstrip("=")
                            for w in inhalt.split(",") if w.strip()]
    for nr, woerter in zusatz.items():
        vorhanden = alt.setdefault(nr, [])
        for w in woerter:
            if w not in vorhanden:
                vorhanden.append(w)
    zusatz = alt
    zeilen = "".join(
        "    %d: [%s],\n" % (nr, ", ".join('"=%s"' % w for w in zusatz[nr]))
        for nr in sorted(zusatz))
    neu = "ZUSATZ = {\n" + zeilen + "}"
    ersetzt, anzahl = re.subn(r"ZUSATZ = \{[^}]*\}", neu, quelle, count=1)
    if not anzahl:
        raise SystemExit(f"Kein ZUSATZ-Block in kurs_{sprache}.py")
    io.open(pfad, "w", encoding="utf-8").write(ersetzt)


def main():
    sprachen = [a for a in sys.argv[1:] if not a.startswith("--")]
    schreiben = "--schreib" in sys.argv
    for s in sprachen:
        zusatz = sammle(s)
        gesamt = sum(len(v) for v in zusatz.values())
        print(f"{s}: {gesamt} Woerter in {len(zusatz)} Rahmen")
        for nr in sorted(zusatz):
            print(f"    {nr}: {zusatz[nr]}")
        if schreiben and zusatz:
            schreibe_zurueck(s, zusatz)
            print(f"    -> in kurs_{s}.py geschrieben")


if __name__ == "__main__":
    main()
