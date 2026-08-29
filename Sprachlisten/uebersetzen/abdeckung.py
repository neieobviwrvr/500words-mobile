# -*- coding: utf-8 -*-
"""Wie vollstaendig ist jede Sprache? - die verlaessliche Antwort.

Warum ein eigenes Skript und nicht einfach zwei Zeilen zaehlen: ein blosser
Vergleich "Master gegen Zielsprache" liefert falsche Luecken. Zwei Klassen von
Saetzen stehen absichtlich NICHT unter demselben deutschen Schluessel:

  ANPASSUNGEN   Der Satz nennt die Zielsprache, also traegt jede Sprache ihre
                eigene deutsche Fassung ("Ich spreche ein bisschen
                Franzoesisch." statt "... Deutsch."). Chinesisch macht das seit
                jeher, Franzoesisch von Anfang an, Spanisch und Schwedisch seit
                der Reparatur vom 2026-08-27 (siehe
                zusammenfuehren/sprachadaptiv_reparieren.py). Ein Vergleich
                ueber `german` zaehlt den Master-Satz sonst als fehlend UND den
                angepassten als ueberzaehlig.

  AUSSCHLUESSE  Bewusst nicht uebersetzt, weil es kein Gegenstueck gibt
                (WeChat, Notruf 120, TCM-Medizin, 哪里哪里 ...). Stehen mit
                Begruendung in den Inhaltsdateien; hier nur gezaehlt.

Das Skript liest die AUSGELASSEN-Listen selbst aus den Inhaltsdateien, statt
sie ein zweites Mal zu fuehren - so kann es keine zwei Wahrheiten geben.

Nutzung:  python abdeckung.py            (alle Sprachen)
          python abdeckung.py es fr
"""
import importlib.util
import json
import os
import re
import sys
import urllib.request

HIER = os.path.dirname(os.path.abspath(__file__))
SPRACHLISTEN = os.path.dirname(HIER)
MASTER = "phrasebook_master"
TABELLE = {"es": "spanisch_phrasebook", "sv": "schwedisch_phrasebook",
           "fr": "franz_phrasebook", "zh": "chinesisch_phrasebook"}

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

# Master-Saetze, die je Zielsprache eine EIGENE deutsche Fassung tragen.
# Sie gelten als abgedeckt, sobald die angepasste Fassung in der Zieltabelle
# steht - deshalb hier das Paar, nicht nur der Master-Satz.
#
# **Nur die SPRACHnamen stehen hier.** Die uebrigen sprachadaptiven Paare
# (Waehrung, Staedte) liegen laengst in
# zusammenfuehren/entscheidungen.py als ID-Paare und werden von
# `anpassungen_aus_entscheidungen()` weiter unten dazugeladen, statt sie hier
# ein zweites Mal zu fuehren. Als ich sie beim ersten Wurf doch dupliziert
# (naemlich weggelassen) hatte, meldete dieses Skript prompt vier Luecken,
# die keine waren - genau die zwei Wahrheiten, die der Kopfkommentar
# ausschliessen will.
ANPASSUNGEN = {
    "Ich spreche ein bisschen Deutsch.": {
        "es": "Ich spreche ein bisschen Spanisch.",
        "sv": "Ich spreche ein bisschen Schwedisch.",
        "fr": "Ich spreche ein bisschen Französisch.",
        "zh": "Ich spreche ein bisschen Chinesisch.",
    },
    "Wie sagt man das auf Deutsch?": {
        "es": "Wie sagt man das auf Spanisch?",
        "sv": "Wie sagt man das auf Schwedisch?",
        "fr": "Wie sagt man das auf Französisch?",
        "zh": "Wie sagt man das auf Chinesisch?",
    },
    "Ich spreche kein Chinesisch. Können Sie es aufschreiben?": {
        "es": "Ich spreche kein Spanisch. Können Sie es aufschreiben?",
    },
    "Mein Chinesisch ist nicht so gut.": {
        "es": "Mein Spanisch ist nicht so gut.",
        "sv": "Mein Schwedisch ist nicht so gut.",
    },
}


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


def anpassungen_aus_entscheidungen(url, key):
    """
    Die sprachadaptiven zh-Paare aus zusammenfuehren/entscheidungen.py.

    Dort stehen sie als (zh_id, master_id, Begruendung) - Waehrung Euro/Yuan,
    Staedte Muenchen/Peking und Berlin/Shanghai. Hier werden die IDs zu Text
    aufgeloest und in dieselbe Form gebracht wie ANPASSUNGEN oben. Ohne das
    zaehlte dieses Skript sie als fehlende chinesische Uebersetzungen, obwohl
    die chinesische Fassung existiert und bewusst anders lautet.
    """
    pfad = os.path.join(SPRACHLISTEN, "zusammenfuehren", "entscheidungen.py")
    if not os.path.exists(pfad):
        return {}
    spec = importlib.util.spec_from_file_location("ent", pfad)
    E = importlib.util.module_from_spec(spec)
    spec.loader.exec_module(E)

    zh_ids = [z for z, _, _ in E.SPRACHADAPTIV]
    m_ids = [m for _, m, _ in E.SPRACHADAPTIV]
    zh_txt = {r["id"]: r["german"] for r in hole(
        url, key, "chinesisch_phrasebook?select=id,german&id=in.("
        + ",".join(map(str, zh_ids)) + ")")}
    m_txt = {r["id"]: r["german"] for r in hole(
        url, key, "phrasebook_master?select=id,german&id=in.("
        + ",".join(map(str, m_ids)) + ")")}

    raus = {}
    for zid, mid, _ in E.SPRACHADAPTIV:
        if zid in zh_txt and mid in m_txt:
            raus.setdefault(m_txt[mid], {})["zh"] = zh_txt[zid]
    return raus


def ausgelassen_fuer(sprache):
    """Alle AUSGELASSEN-Eintraege aus den Inhaltsdateien dieser Sprache."""
    raus = set()
    for datei in os.listdir(HIER):
        if not datei.endswith(f"_{sprache}.py"):
            continue
        spec = importlib.util.spec_from_file_location("x", os.path.join(HIER, datei))
        m = importlib.util.module_from_spec(spec)
        try:
            spec.loader.exec_module(m)
        except Exception as e:
            print(f"  (Datei {datei} nicht lesbar: {e})")
            continue
        raus |= set(getattr(m, "AUSGELASSEN", []))
    # club_nightlife/spanisch.py liegt noch am alten Ort (eigene Skripte,
    # bewusst nicht umgezogen - sie laufen und sind getestet).
    alt = os.path.join(SPRACHLISTEN, "club_nightlife", f"{'spanisch' if sprache=='es' else sprache}.py")
    if os.path.exists(alt):
        spec = importlib.util.spec_from_file_location("y", alt)
        m = importlib.util.module_from_spec(spec)
        try:
            spec.loader.exec_module(m)
            raus |= set(getattr(m, "AUSGELASSEN", []))
        except Exception:
            pass
    return raus


def main():
    sprachen = sys.argv[1:] or ["es", "sv", "fr", "zh"]
    url, key = lies_env("SUPABASE_URL"), lies_env("SUPABASE_SERVICE_ROLE_KEY")
    filt = "in.(" + ",".join(KATEGORIEN) + ")"
    master = hole(url, key, f"{MASTER}?select=german,category&category={filt}")
    master_paare = {(r["german"], r["category"]) for r in master}

    # Feste Liste oben plus die ID-Paare aus entscheidungen.py (siehe dort).
    anpassungen = {g: dict(v) for g, v in ANPASSUNGEN.items()}
    for g, v in anpassungen_aus_entscheidungen(url, key).items():
        anpassungen.setdefault(g, {}).update(v)

    # "Guten Tag!" fehlt auf Chinesisch ABSICHTLICH: 你好 deckt es ab und steht
    # schon als "Hallo!" - ein zweiter Eintrag mit demselben Zeichen waere eine
    # Karteikarte, die sich selbst abfragt. Steht so in CLAUDE.md; hier
    # nachgezogen, damit die Zahl unten nicht ewig eine Luecke behauptet.
    BEWUSST_OHNE = {"zh": {"Guten Tag!"}}

    for sp in sprachen:
        tab = TABELLE[sp]
        ziel = hole(url, key, f"{tab}?select=german,category&category={filt}")
        ziel_paare = {(r["german"], r["category"]) for r in ziel}
        raus = ausgelassen_fuer(sp) | BEWUSST_OHNE.get(sp, set())

        offen, angepasst, ausgelassen_n = [], 0, 0
        for g, kat in sorted(master_paare):
            if (g, kat) in ziel_paare:
                continue
            ersatz = anpassungen.get(g, {}).get(sp)
            if ersatz and (ersatz, kat) in ziel_paare:
                angepasst += 1
                continue
            if g in raus:
                ausgelassen_n += 1
                continue
            offen.append((kat, g))

        abgedeckt = len(master_paare) - len(offen) - ausgelassen_n
        print(f"=== {sp} ({tab}) ===")
        print(f"  Master: {len(master_paare)}  |  in der Tabelle: {len(ziel_paare)}")
        print(f"  uebersetzt: {abgedeckt - angepasst}  + angepasst: {angepasst}"
              f"  + bewusst ausgelassen: {ausgelassen_n}")
        print(f"  WIRKLICH OFFEN: {len(offen)}")
        if offen:
            nach_kat = {}
            for kat, g in offen:
                nach_kat.setdefault(kat, []).append(g)
            for kat in sorted(nach_kat, key=lambda k: -len(nach_kat[k])):
                print(f"    {kat:24} {len(nach_kat[kat])}")
        print()


if __name__ == "__main__":
    main()
