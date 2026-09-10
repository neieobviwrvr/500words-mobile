# -*- coding: utf-8 -*-
"""Der gemeinsame Lehrplan-Aufbau fuer alle Sprachen ausser sv/en/zh.

**Warum gemeinsam.** Die Gliederung - welche 14 Module, welcher Rahmen
welche Woerter aufnimmt, in welcher Reihenfolge - ist eine PEDAGOGISCHE
Entscheidung und in jeder Sprache dieselbe. Nur die Satzmuster
unterscheiden sich, weil Wortstellung, Artikel und Partikeln sich
unterscheiden.

Deshalb steht die Gliederung einmal in `spine.json` (59 Rahmen, Slots als
deutsche Begriffe, aus dem geprueften schwedischen Lehrplan abgeleitet) und
jede Sprache liefert nur noch ihre 59 Satzmuster. Sieben Sprachen von Hand
durchzuschreiben waere siebenmal dieselbe Arbeit und siebenmal dieselben
Fluechtigkeitsfehler.

`datei` waehlt die Gliederung: `spine.json` ist die A1-Stufe (Module 1-14),
`spine_a2.json` die A2-Stufe (15-28). Beide haben denselben Aufbau; eine
Sprache setzt ihre `MODULE` aus beiden zusammen.

**Ein Muster besteht aus zwei bis vier Teilen:**

    (zielsatz, deutscher_satz)
    (zielsatz, deutscher_satz, dict(artikel={"m": "un", "f": "una"}))
    (zielsatz, deutscher_satz, dict(...), lautschrift_satz)

Platzhalter im Zielsatz:
    [P]     wird durch die Pronomen-Chips ersetzt (schraegstrich-getrennt)
    [Slot]  das wechselnde Wort
    [Art]   der Artikel, den `artikel` zum Genus des Slots liefert

Wer `artikel` setzt, ueberlaesst dem Generator die Genus-Sortierung: die
Slots werden nach ihrem Genus gruppiert und jede Gruppe bekommt eigene
Lektionen mit dem richtigen Artikel. Woerter ohne Genus-Angabe fallen
heraus und werden gemeldet - lieber ein Slot weniger als "un casa".
"""
import io
import json
import os

HIER = os.path.dirname(os.path.abspath(__file__))


def spine(datei="spine.json"):
    return json.load(io.open(os.path.join(HIER, datei), encoding="utf-8"))


def baue_module(muster, ueberspringen=(), zusatz_neu=None, datei="spine.json"):
    """Setzt die 59 Satzmuster auf die gemeinsame Gliederung.

    `ueberspringen` nennt Rahmennummern (1-basiert), die diese Sprache
    nicht braucht - etwa die Genus-Rahmen bei Vietnamesisch, das kein
    grammatisches Geschlecht kennt.

    `zusatz_neu` fuehrt je Rahmennummer weitere Woerter ein, die genau
    dieses Satzmuster braucht. Noetig, weil ein natuerlicher Satz
    Funktionswoerter enthaelt, die im gemeinsamen Aufbau nicht vorkommen -
    spanisch "esto es un libro" braucht `esto`. Die Alternative waere,
    R5 aufzuweichen und ungelehrte Woerter im Rahmen zu dulden; dann
    stuende in der Lektion etwas, das der Nutzer nie gelernt hat,
    ausgerechnet an der Stelle, die ihm Halt geben soll. Stattdessen
    werden sie hier ordentlich eingefuehrt und zaehlen als das, was sie
    sind: neue Vokabeln.
    """
    zusatz_neu = zusatz_neu or {}
    daten = spine(datei)
    gesamt = sum(len(m["rahmen"]) for m in daten)
    if len(muster) != gesamt:
        raise SystemExit(f"{len(muster)} Muster, aber {gesamt} Rahmen in spine.json")

    module, i = [], 0
    for m in daten:
        rahmen = []
        for sr in m["rahmen"]:
            i += 1
            eintrag = muster[i - 1]
            ziel, deutsch = eintrag[0], eintrag[1]
            zusatz = eintrag[2] if len(eintrag) > 2 and isinstance(eintrag[2], dict) else {}
            laut = eintrag[3] if len(eintrag) > 3 else None
            if i in ueberspringen or ziel is None:
                continue
            # `slots_deutsch` je RAHMEN, nicht je Sprache (2026-09-09).
            # sv/en/zh haben handgeschriebene A1-Lehrplaene mit
            # zielsprachlichen Slots und tragen deshalb kein
            # SLOTS_DEUTSCH-Flag. Ihre A2-Module kommen aber aus derselben
            # Gliederung wie bei allen anderen und nennen die Slots auf
            # DEUTSCH. Ohne die Unterscheidung je Rahmen muesste man sich
            # pro Datei fuer eines von beidem entscheiden.
            r = dict(muster=ziel, musterDe=deutsch, slots_deutsch=True,
                     slots=sr["slots"], pronomen=sr["pronomen"],
                     neu_im_rahmen=list(sr["neu"]) + list(zusatz_neu.get(i, [])))
            if sr["kind"]:
                r["kind"] = sr["kind"]
            if laut:
                r["musterLaut"] = laut
            r.update(zusatz)
            rahmen.append(r)
        if rahmen:
            # `niveau` merkt sich, aus welcher Gliederung ein Modul stammt.
            # bauplan.py sortiert danach: die Auffangmodule (Restwortschatz
            # auf A1-Niveau) gehoeren VOR die A2-Stufe, nicht dahinter.
            eintrag = dict(nr=m["nr"], titel=m["titel"],
                           finisher=m["finisher"], rahmen=rahmen)
            if datei != "spine.json":
                eintrag["niveau"] = "A2"
            module.append(eintrag)
    return module
