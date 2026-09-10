# -*- coding: utf-8 -*-
"""Prueft die ERZEUGTEN Kurse auf lehrtechnische Auffaelligkeiten.

`bauplan.py` prueft beim Bauen, ob der Lehrplan in sich stimmt. Dieses
Skript schaut auf das Ergebnis und fragt, ob es sich auch unterrichten
laesst: Sind die Lektionen gleichmaessig? Ist ein Modul zu lang? Bekommt
eine Lektion mehr neue Woerter, als ein Anfaenger verkraftet? Steht
irgendwo ein leerer Rahmen?

Aufruf:  python audit.py
"""
import io
import json
import os
import re
import sys

if hasattr(sys.stdout, "reconfigure"):
    sys.stdout.reconfigure(encoding="utf-8", errors="replace")

HIER = os.path.dirname(os.path.abspath(__file__))
KURSE = os.path.join(os.path.dirname(os.path.dirname(HIER)), "src", "data", "courses")

MAX_NEU = 5
MAX_LEKTIONEN_JE_MODUL = 20   # darueber wird die Pille im Pfad unbrauchbar
MIN_LEKTIONEN_JE_MODUL = 2    # ein Modul aus nur einem Finisher ist keins


def lade(datei):
    roh = io.open(os.path.join(KURSE, datei), encoding="utf-8").read()
    return json.loads(roh[roh.index("=\n") + 2:].rstrip().rstrip(";"))


def pruefe(code, datei):
    module = lade(datei)
    befunde = []
    lektionen = [l for m in module for l in m["lessons"]]
    uebung = [l for l in lektionen if l["kind"] != "finisher"]

    # --- Neue Woerter je Lektion --------------------------------------
    zuviel = [(l["id"], l["newCount"]) for l in uebung
              if l["kind"] != "series" and l["newCount"] > MAX_NEU]
    if zuviel:
        befunde.append(f"{len(zuviel)} Lektionen mit mehr als {MAX_NEU} neuen Woertern: "
                       f"{zuviel[:5]}")

    # --- Leere Lektionen ----------------------------------------------
    leer = [l["id"] for l in uebung if not any(l["slotGroups"])]
    if leer:
        befunde.append(f"{len(leer)} Lektionen ohne Slot-Woerter: {leer[:5]}")

    # --- Rahmen ohne Platzhalter --------------------------------------
    ohne_slot = [l["id"] for l in uebung if "[Slot]" not in l["frame"]["schrift"]]
    if ohne_slot:
        befunde.append(f"{len(ohne_slot)} Rahmen ohne [Slot]: {ohne_slot[:5]}")

    # --- Uebriggebliebene Platzhalter ---------------------------------
    reste = [l["id"] for l in lektionen
             if re.search(r"\[(P|Art)\]", l["frame"]["schrift"] + (l["frameDe"] or ""))]
    if reste:
        befunde.append(f"{len(reste)} Rahmen mit nicht aufgeloestem [P]/[Art]: {reste[:5]}")

    # --- Modulgroesse --------------------------------------------------
    zu_lang = [(m["number"], len(m["lessons"])) for m in module
               if len(m["lessons"]) > MAX_LEKTIONEN_JE_MODUL]
    if zu_lang:
        befunde.append(f"Module ueber {MAX_LEKTIONEN_JE_MODUL} Lektionen: {zu_lang}")
    zu_kurz = [(m["number"], len(m["lessons"])) for m in module
               if len(m["lessons"]) < MIN_LEKTIONEN_JE_MODUL]
    if zu_kurz:
        befunde.append(f"Module unter {MIN_LEKTIONEN_JE_MODUL} Lektionen: {zu_kurz}")

    # --- Finisher je Modul ---------------------------------------------
    ohne_finisher = [m["number"] for m in module
                     if not any(l["kind"] == "finisher" for l in m["lessons"])]
    if ohne_finisher:
        befunde.append(f"Module ohne Finisher: {ohne_finisher}")

    # --- Doppelte Lektions-IDs -----------------------------------------
    ids = [l["id"] for l in lektionen]
    doppelt = {i for i in ids if ids.count(i) > 1}
    if doppelt:
        befunde.append(f"Doppelte Lektions-IDs: {sorted(doppelt)[:5]}")

    # --- Woerter ohne deutsche Bedeutung -------------------------------
    ohne_de = [w["schrift"] for l in lektionen for g in l["slotGroups"] for w in g
               if not w["de"] or w["de"].startswith("??")]
    if ohne_de:
        befunde.append(f"{len(ohne_de)} Woerter ohne Bedeutung: {sorted(set(ohne_de))[:5]}")

    # --- Lerntext leer (bei Lautschrift-Sprachen toedlich) --------------
    ohne_lern = [w["schrift"] for l in lektionen for g in l["slotGroups"] for w in g
                 if not w["lerntext"].strip()]
    if ohne_lern:
        befunde.append(f"{len(ohne_lern)} Woerter ohne Lerntext: {sorted(set(ohne_lern))[:5]}")

    schnitt = sum(l["newCount"] for l in uebung) / max(len(uebung), 1)
    dauer = len(uebung) * 3.2 / 60
    print(f"  {code}  {len(module):2} Module, {len(lektionen):4} Lektionen "
          f"({len(uebung)} Uebung + {len(lektionen)-len(uebung)} Finisher), "
          f"{schnitt:.1f} neue Woerter je Lektion, ~{dauer:.1f} h")
    for b in befunde:
        print(f"        X {b}")
    return len(befunde)


def main():
    dateien = sorted(f for f in os.listdir(KURSE) if f.endswith("Course.ts"))
    print(f"{len(dateien)} Kurse:\n")
    fehler = 0
    for f in dateien:
        fehler += pruefe(f[:2], f)
    print()
    print("Alles unauffaellig." if fehler == 0 else f"{fehler} Auffaelligkeiten.")
    sys.exit(0 if fehler == 0 else 1)


if __name__ == "__main__":
    main()
