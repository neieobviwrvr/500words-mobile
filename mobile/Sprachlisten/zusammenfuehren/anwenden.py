# -*- coding: utf-8 -*-
"""Fuehrt phrasebook_master und chinesisch_phrasebook zusammen.

Liest entscheidungen.py und wendet an:

  A  chinesisch_phrasebook.german := die Master-Fassung (Schluessel angleichen)
  B  neue Zeile in phrasebook_master, aus der chinesischen uebernommen
  S  nichts (sprachadaptiv, siehe entscheidungen.py)

Prueft VOR dem Schreiben, dass die Entscheidungen zur Wirklichkeit passen:
jede ID existiert, jedes A-Paar liegt in derselben Kategorie, jedes B ist
wirklich ohne deutsches Gegenstueck, und die Rechnung geht auf (S+A+B deckt
alle nur-chinesischen Zeilen ab). Bei Abweichung: Abbruch ohne Schreiben.

Idempotent: A-Zeilen, die schon angeglichen sind, und B-Saetze, die schon im
Master stehen, werden uebersprungen.

Nutzung:  python anwenden.py          (Probelauf)
          python anwenden.py --echt   (schreibt wirklich)
"""
import importlib.util
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


def rest(url, key, pfad, methode="GET", koerper=None):
    kopf = {"apikey": key, "Authorization": "Bearer " + key,
            "Content-Type": "application/json", "Prefer": "return=representation"}
    d = json.dumps(koerper, ensure_ascii=False).encode("utf-8") if koerper is not None else None
    r = urllib.request.Request(url + "/rest/v1/" + pfad, data=d, headers=kopf, method=methode)
    with urllib.request.urlopen(r) as a:
        t = a.read().decode("utf-8")
        return json.loads(t) if t.strip() else []


def main():
    echt = "--echt" in sys.argv

    spec = importlib.util.spec_from_file_location("e", os.path.join(HIER, "entscheidungen.py"))
    E = importlib.util.module_from_spec(spec)
    spec.loader.exec_module(E)

    url, key = lies_env("SUPABASE_URL"), lies_env("SUPABASE_SERVICE_ROLE_KEY")
    kat_filter = "in.(" + ",".join(KATEGORIEN) + ")"

    de = rest(url, key, f"phrasebook_master?select=id,german,scenario,category&category={kat_filter}")
    zh = rest(url, key, f"chinesisch_phrasebook?select=id,german,target_text,scenario,category,"
                        f"lookup_only,addressing,culture_note&category={kat_filter}")
    de_nach_id = {r["id"]: r for r in de}
    zh_nach_id = {r["id"]: r for r in zh}
    de_texte = {r["german"] for r in de}

    fehler = []

    # --- Vorpruefung -------------------------------------------------------
    for zid, mid, _ in E.SPRACHADAPTIV:
        if zid not in zh_nach_id:
            fehler.append(f"S: chinesische id {zid} gibt es nicht")
        if mid not in de_nach_id:
            fehler.append(f"S: Master-id {mid} gibt es nicht")

    for zid, mid in E.UMFORMULIERUNG:
        z, m = zh_nach_id.get(zid), de_nach_id.get(mid)
        if z is None:
            fehler.append(f"A: chinesische id {zid} gibt es nicht")
            continue
        if m is None:
            fehler.append(f"A: Master-id {mid} gibt es nicht")
            continue
        if z["category"] != m["category"]:
            fehler.append(f"A: {zid}/{mid} liegen in verschiedenen Kategorien "
                          f"({z['category']} vs {m['category']})")

    schon_uebertragen = set()
    for zid in E.NUR_CHINESISCH:
        z = zh_nach_id.get(zid)
        if z is None:
            fehler.append(f"B: chinesische id {zid} gibt es nicht")
            continue
        # Schon eingespielt -> ueberspringen, nicht abbrechen (2026-08-29).
        # Vorher war das ein Fehler, wodurch ein zweiter Lauf unmoeglich war:
        # sobald ein B-Satz einmal im Master stand, brach das ganze Skript ab
        # und auch die noch offenen Saetze kamen nicht durch. Ein
        # Reparaturskript, das nur genau einmal laufen darf, ist keins.
        if z["german"] in de_texte:
            schon_uebertragen.add(zid)

    # Rechnung: deckt S+A+B alle nur-chinesischen Zeilen ab?
    behandelt = ({z for z, _, _ in E.SPRACHADAPTIV} | {z for z, _ in E.UMFORMULIERUNG}
                 | set(E.NUR_CHINESISCH))
    offen = [r for r in zh if r["german"] not in de_texte and r["id"] not in behandelt]
    for r in offen:
        fehler.append(f"Unbehandelt: [{r['id']}] {r['german']!r} ({r['category']})")

    doppelt = [i for i in behandelt if
               sum(1 for x in list(behandelt) if x == i) > 1]
    alle_ids = ([z for z, _, _ in E.SPRACHADAPTIV] + [z for z, _ in E.UMFORMULIERUNG]
                + list(E.NUR_CHINESISCH))
    mehrfach = {i for i in alle_ids if alle_ids.count(i) > 1}
    if mehrfach:
        fehler.append(f"IDs mehrfach klassifiziert: {sorted(mehrfach)}")

    nur_de = [r for r in de if r["german"] not in {x["german"] for x in zh}]
    gepaart_de = {m for _, m in E.UMFORMULIERUNG} | {m for _, m, _ in E.SPRACHADAPTIV}
    nur_de_offen = [r for r in nur_de if r["id"] not in gepaart_de]

    print(f"phrasebook_master {len(de)}  |  chinesisch_phrasebook {len(zh)}")
    print(f"S sprachadaptiv (nichts tun): {len(E.SPRACHADAPTIV)}")
    print(f"A Umformulierung (Schluessel angleichen): {len(E.UMFORMULIERUNG)}")
    print(f"B nur Chinesisch (in Master nachtragen): {len(E.NUR_CHINESISCH)}"
          f"   davon schon uebertragen: {len(schon_uebertragen)}")
    print(f"C nur Deutsch (offene zh-Uebersetzung, keine Aktion): {len(nur_de_offen)}")
    print()

    if fehler:
        print(f"{len(fehler)} FEHLER - es wird nichts geschrieben:")
        for f in fehler:
            print("  X " + f)
        sys.exit(1)

    # --- A: Schluessel angleichen -----------------------------------------
    a_todo = []
    for zid, mid in E.UMFORMULIERUNG:
        z, m = zh_nach_id[zid], de_nach_id[mid]
        if z["german"] != m["german"]:
            a_todo.append((zid, z["german"], m["german"]))

    # --- B: neue Master-Zeilen --------------------------------------------
    b_todo = []
    for zid in E.NUR_CHINESISCH:
        if zid in schon_uebertragen:
            continue
        z = zh_nach_id[zid]
        b_todo.append({
            "german": z["german"],
            "scenario": z["scenario"],
            "category": z["category"],
            "tense": "present",
            "difficulty": "A1",
            "accepted_concepts": {"required": [], "optional": []},
            "lookup_only": bool(z["lookup_only"]),
            "addressing": z["addressing"],
            "culture_note": z["culture_note"],
        })

    print(f"Zu tun: {len(a_todo)} Angleichungen, {len(b_todo)} neue Master-Saetze")

    if not echt:
        print("\nPROBELAUF - es wird nichts geschrieben. Mit --echt anwenden.\n")
        print("A (chinesisch_phrasebook.german wird ersetzt):")
        for zid, alt, neu in a_todo[:6]:
            print(f"  [{zid}] {alt!r}\n        -> {neu!r}")
        if len(a_todo) > 6:
            print(f"  ... und {len(a_todo) - 6} weitere")
        print("\nB (neu in phrasebook_master):")
        for z in b_todo[:6]:
            print(f"  {z['category']:22} {z['german']}")
        if len(b_todo) > 6:
            print(f"  ... und {len(b_todo) - 6} weitere")
        return

    for zid, _, neu in a_todo:
        rest(url, key, f"chinesisch_phrasebook?id=eq.{zid}", "PATCH", {"german": neu})
    print(f"  {len(a_todo)} Angleichungen geschrieben")

    for i in range(0, len(b_todo), 40):
        rest(url, key, "phrasebook_master", "POST", b_todo[i:i + 40])
    print(f"  {len(b_todo)} neue Master-Saetze geschrieben")

    de2 = rest(url, key, f"phrasebook_master?select=id&category={kat_filter}")
    print(f"\nFertig. phrasebook_master steht jetzt bei {len(de2)} Saetzen "
          f"(vorher {len(de)}).")


if __name__ == "__main__":
    main()
