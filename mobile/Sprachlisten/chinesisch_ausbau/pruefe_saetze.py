# -*- coding: utf-8 -*-
"""Prueft eine Satz-Welle auf Baubarkeit, Einfachheit, Wiederverwendung und Loesbarkeit.

ACHTUNG, DREI KOPIEN: dieselbe Datei liegt in club_nightlife/,
grundwortschatz/ und hier, und sie sind AUSEINANDERGELAUFEN - die
Grundwortschatz-Fassung kennt den `GRUNDLAGE`-Schalter, die Club-Fassung
nicht, und die vierte Regel ("loesbar") gibt es vorerst nur hier. Wer eine
davon aendert, sollte die anderen mitziehen oder die Datei endlich an EINE
Stelle legen.

Nutzer-Vorgabe 2026-08-21 (Simon):
  "dass die Saetze im grossen Umfang durch Woerter aus unserer Wortliste
   baubar sind, dass wir nicht zu viele komplexe Saetze haben und man mit
   jedem Satz was fuer andere Saetze dazulernt"

Daraus drei messbare Regeln:

  1. BAUBAR    >= 90% aller Wortvorkommen stammen aus bereits bekanntem
               Wortschatz (Kurs + was fruehere Wellen eingefuehrt haben).

  2. EINFACH   Keine harte Wortgrenze, sondern eine VERTEILUNG
               (Nutzer-Praezisierung 2026-08-21: "Das mit den sechs Woertern
               muss auch nicht eine komplette Regel sein. Aber es waer gut,
               wenn nicht alle Saetze komplex und lang werden").

               Die Nutzer sind echte Anfaenger. Deshalb: mindestens 70% der
               zu uebenden Saetze hoechstens 5 Woerter, und keiner ueber 8.
               Einzelne laengere sind ausdruecklich erlaubt - alle lang zu
               machen ist das Problem, nicht ein einzelner.

               Nachschlage-Saetze sind ausgenommen: sie werden vorgezeigt,
               nicht gesprochen. In Welle 1 sind die vier laengsten Saetze
               der Kategorie genau solche - die Komplexitaet sitzt also
               dort, wo sie niemanden ueberfordert.

  3. RENTABEL  Jedes NEU eingefuehrte Wort kommt in mindestens 2 Saetzen vor.
               Genau das ist "man lernt was fuer andere Saetze": ein Wort,
               das nur einmal auftaucht, ist eine Vokabel zum Auswendiglernen
               statt ein Baustein. Ausnahme: Ein-Wort-Saetze wie 干杯 - dort
               IST das Wort der ganze Satz, es gibt nichts zu uebertragen.

Nachschlage-Saetze (lookup=True) sind von allen drei Regeln ausgenommen: sie
werden gezeigt, nicht geuebt, und duerfen deshalb beliebig komplex sein.

Aufruf:  python pruefe_saetze.py welle1.py [welle2.py ...]
Mehrere Wellen nacheinander: was Welle 1 einfuehrt, gilt in Welle 2 als
bekannt - der Wortschatz waechst mit.
"""
import importlib.util
import io
import json
import os
import sys

HIER = os.path.dirname(os.path.abspath(__file__))
SATZZEICHEN = set("。，！？、：；“”（）")

# Ziele
ANTEIL_BEKANNT = 0.90
KURZ_BIS = 5              # was als "kurz" gilt
ANTEIL_KURZ = 0.70        # so viele muessen kurz sein
LAENGE_MAX = 8            # Obergrenze fuer zu uebende Saetze
MINDEST_WIEDERHOLUNG = 2


def lade_kurswoerter():
    """Die 350 Woerter des gefuehrten Kurses als Ausgangs-Wortschatz."""
    pfad = os.path.join(HIER, "kurswoerter.json")
    if os.path.exists(pfad):
        return set(json.load(io.open(pfad, encoding="utf-8")))
    raise SystemExit(
        "kurswoerter.json fehlt. Einmal erzeugen mit dem Ausschnitt aus\n"
        "build_chinesisch_kurs.py bzw. per node aus chineseCourse.ts."
    )


def zerlege(text, bekannt):
    """Laengster Treffer. Gibt (Treffer, unbekannte Einzelzeichen) zurueck."""
    maxlen = max((len(w) for w in bekannt), default=1)
    treffer, unbekannt = [], []
    i = 0
    while i < len(text):
        if text[i] in SATZZEICHEN or text[i].isspace():
            i += 1
            continue
        for laenge in range(min(maxlen, len(text) - i), 0, -1):
            teil = text[i:i + laenge]
            if teil in bekannt:
                treffer.append(teil)
                i += laenge
                break
        else:
            unbekannt.append(text[i])
            i += 1
    return treffer, unbekannt


def lade_welle(datei):
    return lade_modul(datei).SAETZE


def lade_modul(datei):
    spec = importlib.util.spec_from_file_location(
        os.path.splitext(os.path.basename(datei))[0], os.path.join(HIER, datei))
    modul = importlib.util.module_from_spec(spec)
    spec.loader.exec_module(modul)
    return modul


def ist_uebersetzung(datei):
    """Uebersetzt diese Welle einen festen Satzbestand?

    Dann gilt die Rentabel-Regel nicht: die Quellsaetze stehen fest, man kann
    keinen zweiten erfinden, damit ein Wort zweimal vorkommt. Die Regel ist
    fuers Schreiben gedacht, nicht fuers Uebersetzen.
    """
    return getattr(lade_modul(datei), "UEBERSETZUNG", False)


def pruefe(dateien):
    bekannt = lade_kurswoerter()
    print(f"Ausgangs-Wortschatz: {len(bekannt)} Woerter aus dem Kurs\n")
    alles_gut = True

    # "Rentabel" gilt ueber die GANZE Kategorie, nicht je Welle: ein Wort,
    # das Welle 1 einfuehrt und Welle 2 wieder aufgreift, ist ein Baustein -
    # auch wenn es in Welle 1 fuer sich allein einmalig aussah. Deshalb erst
    # alle Wellen einsammeln, dann urteilen.
    # ALLE Saetze, auch die Nachschlage-Saetze. Sie sind zwar von den drei
    # Regeln ausgenommen, zaehlen aber mit, wenn es darum geht, WO ein Wort
    # vorkommt und WER es einfuehrt - sonst gilt ein Wort als undeklariert,
    # obwohl es einen Satz weiter oben steht.
    alle_saetze = []
    for datei in dateien:
        alle_saetze += lade_welle(datei)

    for datei in dateien:
        saetze = [s for s in lade_welle(datei) if not s["lookup"]]
        nachschlage = len(lade_welle(datei)) - len(saetze)

        vorkommen_gesamt = 0
        vorkommen_bekannt = 0
        laengen = []
        zu_lang = []
        falsch_deklariert = []

        # Erst ALLE deklarierten Neuwoerter einsammeln - sonst zerlegt der
        # Segmentierer ein zweizeichiges Neuwort wie 干杯 in 干 + 杯 und
        # meldet zwei Luecken statt einer.
        deklariert = set()
        for s in alle_saetze:
            deklariert |= set(s.get("neu", []))
        zerlegung_mit = bekannt | deklariert

        # Fuer die Rentabel-Regel zaehlt nur, was DIESE Welle einfuehrt.
        #
        # `deklariert` sammelt absichtlich ueber alle Wellen ein - sonst
        # zerlegte der Segmentierer ein frueher eingefuehrtes Wort wieder in
        # Einzelzeichen. Fuer "kommt das Wort in zwei Saetzen vor?" ist das
        # aber falsch: eine Uebersetzungswelle ist von der Regel BEFREIT
        # (man kann den Quellsatz nicht umschreiben), ihre Woerter wuerden
        # sonst der naechsten Welle angelastet, die nichts dafuer kann.
        deklariert_hier = set()
        for s in lade_welle(datei):
            deklariert_hier |= set(s.get("neu", []))

        for s in saetze:
            treffer, unbekannt = zerlege(s["zh"], zerlegung_mit)
            if unbekannt:
                falsch_deklariert.append((s["de"], "".join(unbekannt)))
            eigene_neu = set(s.get("neu", []))
            n = len(treffer) + len(unbekannt)
            laengen.append(n)
            vorkommen_gesamt += n
            # Als "bekannt" zaehlt, was NICHT dieser Satz erst einfuehrt.
            vorkommen_bekannt += sum(1 for t in treffer if t not in eigene_neu)
            if n > LAENGE_MAX:
                zu_lang.append((n, s["de"]))

        # In wie vielen Saetzen kommt jedes neue Wort insgesamt vor?
        neue = {}
        neue_einwort = set()
        for w in deklariert_hier:
            treffer_saetze = [x for x in alle_saetze if w in x["zh"]]
            neue[w] = len(treffer_saetze)
            # Ein-Wort-Aeusserung: der Satz IST das Wort, es gibt nichts auf
            # andere Saetze zu uebertragen. 干杯 ist kein Baustein, sondern
            # ein Ausruf.
            if any(len(zerlege(x["zh"], zerlegung_mit)[0]) == 1 for x in treffer_saetze):
                neue_einwort.add(w)

        # Was diese Welle einfuehrt, gilt ab jetzt als bekannt.
        bekannt |= deklariert

        anteil = vorkommen_bekannt / vorkommen_gesamt if vorkommen_gesamt else 1
        kurz = sum(1 for n in laengen if n <= KURZ_BIS)
        anteil_kurz = kurz / len(laengen) if laengen else 1
        # Woerter, die NUR in Nachschlage-Saetzen vorkommen, sind von der
        # Rentabel-Regel ausgenommen - genau wie diese Saetze selbst. 青霉素
        # ("Penizillin") muss kein Baustein sein; man zeigt den Satz vor.
        nur_nachschlag = {
            w for w in neue
            if all(x["lookup"] for x in alle_saetze if w in x["zh"])
        }
        einmalig = {w: n for w, n in neue.items()
                    if n < MINDEST_WIEDERHOLUNG
                    and w not in neue_einwort
                    and w not in nur_nachschlag}

        # 4. LOESBAR: jedes Pflicht-Konzept muss im Satz auch vorkommen.
        #
        # Kein Stilkriterium, sondern Korrektheit: die Bewertung verlangt
        # ALLE Pflicht-Konzepte. Steht eines nicht im Satz, kann der Nutzer
        # ihn nie richtig beantworten - egal was er sagt. Faellt sonst
        # niemandem auf, weil die Datei fuer sich gelesen stimmig aussieht.
        #
        # Ausloeser: beim Kuerzen eines Satzes blieb das Konzept 明天晚上
        # stehen, im Satz stand nur noch 明天.
        unloesbar = []
        for s in alle_saetze:
            for konzept, synonyme in s.get("konzepte", []):
                if not any(x in s["zh"] for x in synonyme):
                    unloesbar.append((s["de"], konzept, synonyme))

        uebersetzt = ist_uebersetzung(datei)
        print(f"--- {datei}  ({len(saetze)} zu uebende Saetze, {nachschlage} nur Nachschlagen)"
              + ("   [Uebersetzung]" if uebersetzt else ""))

        # Bei einer Uebersetzung ist "baubar" eine MESSUNG, kein Urteil: der
        # Quellsatz steht fest, man kann ihn nicht umschreiben, damit weniger
        # neue Woerter noetig sind. Verbindlich bleiben nur die Satzlaenge
        # (die man beim Uebersetzen sehr wohl steuert) und die vollstaendige
        # Deklaration.
        ok1 = uebersetzt or anteil >= ANTEIL_BEKANNT
        ok2 = anteil_kurz >= ANTEIL_KURZ and not zu_lang
        ok3 = not falsch_deklariert and (uebersetzt or not einmalig)
        ok4 = not unloesbar
        alles_gut = alles_gut and ok1 and ok2 and ok3 and ok4

        print(f"  {'OK ' if ok1 else 'X  '} baubar    {anteil:.0%} der Wortvorkommen aus bekanntem Wortschatz  (Ziel {ANTEIL_BEKANNT:.0%})")
        verteilung = " ".join(
            f"{gruppe}:{sum(1 for n in laengen if unten <= n <= oben)}"
            for gruppe, unten, oben in [("1-3", 1, 3), ("4-5", 4, 5), ("6-8", 6, 8), ("9+", 9, 99)])
        print(f"  {'OK ' if ok2 else 'X  '} einfach   {anteil_kurz:.0%} hoechstens {KURZ_BIS} Woerter  (Ziel {ANTEIL_KURZ:.0%})   [{verteilung}]")
        for n, de in zu_lang:
            print(f"        zu lang ({n}): {de}")
        print(f"  {'OK ' if ok3 else 'X  '} rentabel  {len(neue)} neue Woerter, davon {len(einmalig)} nur in einem Satz")
        for w in ([] if uebersetzt else einmalig):
            beispiel = next(x["de"] for x in alle_saetze if w in x["zh"])
            print(f"        {w} kommt nur einmal vor: {beispiel}")
        for de, fehlend in falsch_deklariert:
            print(f"        NICHT DEKLARIERT: {fehlend} in \"{de}\"")
        print(f"  {'OK ' if ok4 else 'X  '} loesbar   jedes Pflicht-Konzept kommt im Satz vor")
        for de, konzept, synonyme in unloesbar:
            print(f"        \"{de}\": keins von {synonyme} steht im Satz ({konzept})")
        if neue:
            print(f"        eingefuehrt: {' '.join(sorted(neue, key=lambda w: -neue[w]))}")
        print()

    print("ALLE REGELN ERFUELLT" if alles_gut else "REGELN VERLETZT - siehe oben")
    return 0 if alles_gut else 1


if __name__ == "__main__":
    dateien = sys.argv[1:] or ["welle1.py"]
    sys.exit(pruefe(dateien))
