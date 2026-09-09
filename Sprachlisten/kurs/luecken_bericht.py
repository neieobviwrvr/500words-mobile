# -*- coding: utf-8 -*-
"""Welche Kernbegriffe fehlen in welcher Vokabelliste?

Der Bericht, der vor jeder Kursarbeit steht. Ohne ihn schreibt man einen
Lehrplan gegen Woerter, die es in der Zielsprache gar nicht gibt - genau das
ist beim ersten schwedischen Versuch passiert (45 erfundene Slot-Woerter).

Aufruf:  python luecken_bericht.py
         python luecken_bericht.py sv en zh
"""
import json
import os
import re
import sys
import unicodedata
import urllib.request

if hasattr(sys.stdout, "reconfigure"):
    sys.stdout.reconfigure(encoding="utf-8", errors="replace")

HIER = os.path.dirname(os.path.abspath(__file__))
SPRACHLISTEN = os.path.dirname(HIER)
sys.path.insert(0, HIER)
from kernbegriffe import KERN  # noqa: E402

TABELLEN = {
    "sv": ("schwedisch_vocab", "swedish"),
    "es": ("spanisch_vocab", "spanish"),
    "fr": ("franz_vocab", "french"),
    "zh": ("chinesisch_vocab", "hanzi"),
    "it": ("italienisch_vocab", "italian"),
    "no": ("norwegisch_vocab", "norwegian"),
    "ru": ("russisch_vocab", "russian"),
    "vi": ("vietnamesisch_vocab", "vietnamese"),
    "pl": ("polnisch_vocab", "polish"),
    "en": ("englisch_vocab", "english"),
}


def lies_env(name):
    for zeile in open(os.path.join(SPRACHLISTEN, ".env"), encoding="utf-8"):
        if zeile.startswith(name + "="):
            return zeile.split("=", 1)[1].strip().strip('"')
    raise SystemExit(name + " nicht gefunden")


def hole(tabelle):
    url, key = lies_env("SUPABASE_URL"), lies_env("SUPABASE_SERVICE_ROLE_KEY")
    out, off = [], 0
    while True:
        r = urllib.request.Request(
            f"{url}/rest/v1/{tabelle}?select=*&limit=1000&offset={off}",
            headers={"apikey": key, "Authorization": "Bearer " + key})
        with urllib.request.urlopen(r, timeout=60) as a:
            teil = json.load(a)
        out += teil
        if len(teil) < 1000:
            return out
        off += 1000


def normiere(s):
    """Deutsche Bedeutung auf eine vergleichbare Form bringen.

    Die Tabellen schreiben dasselbe Konzept unterschiedlich: "sie (Sg.)",
    "mögen / wollen", "Essen (allgemein)". Verglichen wird deshalb ueber
    kleingeschriebene Einzelteile ohne Klammerzusatz."""
    s = (s or "").lower().strip()
    s = re.sub(r"\([^)]*\)", " ", s)                 # Klammern raus
    teile = re.split(r"[/,;]| oder ", s)
    raus = set()
    for t in teile:
        t = t.strip().strip(".")
        t = unicodedata.normalize("NFC", t)
        if t:
            raus.add(t)
    return raus


def index(zeilen):
    idx = {}
    for z in zeilen:
        for form in normiere(z.get("german")):
            idx.setdefault(form, z)
    return idx


def suche(idx, begriff):
    kandidaten = [begriff["de"]] + begriff["alt"]
    for k in kandidaten:
        for form in normiere(k):
            if form in idx:
                return idx[form]
    return None


def main():
    ziel = sys.argv[1:] or sorted(TABELLEN)
    gesamt = {}
    for sprache in ziel:
        tab, spalte = TABELLEN[sprache]
        zeilen = hole(tab)
        idx = index(zeilen)
        fehlt = [b for b in KERN if suche(idx, b) is None]
        gesamt[sprache] = fehlt
        print(f"=== {sprache} ({tab}, {len(zeilen)} Woerter) ===")
        print(f"    Kernbegriffe: {len(KERN)}, davon fehlen {len(fehlt)}")
        if fehlt:
            nach_rolle = {}
            for b in fehlt:
                nach_rolle.setdefault(b["rolle"], []).append(b["de"])
            for rolle in sorted(nach_rolle):
                print(f"      {rolle:12} {', '.join(nach_rolle[rolle])}")
        print()

    print("=" * 70)
    print("ZUSAMMENFASSUNG - wie viele Kernbegriffe fehlen je Sprache")
    for s in sorted(gesamt, key=lambda x: -len(gesamt[x])):
        print(f"   {s}: {len(gesamt[s]):3} von {len(KERN)}")

    # Welche Begriffe fehlen in VIELEN Sprachen? Die sind am dringendsten.
    zaehler = {}
    for s, fehlt in gesamt.items():
        for b in fehlt:
            zaehler.setdefault(b["de"], []).append(s)
    print()
    print("Begriffe, die in 3+ Sprachen fehlen:")
    for de, sprachen in sorted(zaehler.items(), key=lambda x: -len(x[1])):
        if len(sprachen) >= 3:
            print(f"   {de:16} fehlt in {' '.join(sorted(sprachen))}")


if __name__ == "__main__":
    main()
