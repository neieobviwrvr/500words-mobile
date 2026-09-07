# -*- coding: utf-8 -*-
"""Loesen sich die Kurs-Woerter gegen die Vokabeltabelle auf?

    python wortaufgaben.py            alle Sprachen
    python wortaufgaben.py ru         nur diese

WOZU
----
Die Wort-Luecken-Aufgaben (Woerter-Wiederholung, Stufe 2 und 3) entstehen aus
den Rahmen des gefuehrten Kurses: ein Slot wird zur Luecke, das Slot-Wort zur
Loesung. Damit das geht, muss jedes Slot-Wort in der Vokabeltabelle
WIEDERGEFUNDEN werden - dort stehen Wortart (fuer den Filter und die
Ablenker) und Bedeutung.

Diese Zuordnung ist stiller, als sie aussieht: findet sie nichts, gibt es
keinen Fehler, sondern einfach keine Aufgaben. Genau das ist am 2026-09-07
passiert - Russisch kam auf 0 von 777 Slots, weil die UMSCHRIFT gegen die
kyrillische Spalte gehalten wurde. In der App haette man nur gesehen, dass
die Wort-Uebung fuer Russisch nie eine Situations-Runde zeigt.

DIE REGEL, DIE HIER GEPRUEFT WIRD
---------------------------------
Sprachen mit eigener Schrift (Chinesisch, Russisch) werden ueber die SCHRIFT
nachgeschlagen, alle anderen ueber das Wort selbst - plus die Praesensform,
weil die Rahmen Verben in der Satzform einsetzen ("jag har", nicht "jag ha").
Dieselbe Regel steht in `situationsAufgaben.ts`; laufen die beiden
auseinander, faellt es hier auf.
"""
import json
import os
import sys
import urllib.request
from collections import Counter

if hasattr(sys.stdout, "reconfigure"):
    sys.stdout.reconfigure(encoding="utf-8", errors="replace")

HIER = os.path.dirname(os.path.abspath(__file__))
SPRACHLISTEN = os.path.dirname(HIER)
KURSE = os.path.join(os.path.dirname(SPRACHLISTEN), "src", "data", "courses")

# (Vokabeltabelle, Wortspalte, Lautschrift-Spalte)
# Die Lautschrift-Spalte ist zugleich das Kennzeichen "eigene Schrift".
SPRACHEN = {
    "sv": ("schwedisch_vocab", "swedish", None),
    "en": ("englisch_vocab", "english", None),
    "zh": ("chinesisch_vocab", "hanzi", "pinyin"),
    "es": ("spanisch_vocab", "spanish", None),
    "fr": ("franz_vocab", "french", None),
    "it": ("italienisch_vocab", "italian", None),
    "no": ("norwegisch_vocab", "norwegian", None),
    "ru": ("russisch_vocab", "russian", "lautschrift"),
    "vi": ("vietnamesisch_vocab", "vietnamese", None),
    "pl": ("polnisch_vocab", "polish", None),
}


def lies_env(name):
    for zeile in open(os.path.join(SPRACHLISTEN, ".env"), encoding="utf-8"):
        if zeile.startswith(name + "="):
            return zeile.split("=", 1)[1].strip().strip('"')
    raise SystemExit(name + " nicht gefunden")


URL, KEY = lies_env("SUPABASE_URL"), lies_env("SUPABASE_SERVICE_ROLE_KEY")


def alle(pfad, seite=1000):
    aus, off = [], 0
    while True:
        r = urllib.request.Request(
            f"{URL}/rest/v1/{pfad}{'&' if '?' in pfad else '?'}limit={seite}&offset={off}",
            headers={"apikey": KEY, "Authorization": "Bearer " + KEY})
        with urllib.request.urlopen(r) as a:
            teil = json.loads(a.read().decode("utf-8"))
        aus += teil
        if len(teil) < seite:
            return aus
        off += seite


def lies_kurs(code):
    """Die erzeugten Kursdateien sind reine Datenliterale - als JSON lesbar.

    Absichtlich KEIN TypeScript-Parser: die Dateien kommen aus bauplan.py und
    enthalten nichts als ein Array. Bricht das, ist der Generator kaputt, und
    das soll auffallen.
    """
    pfad = os.path.join(KURSE, code + "Course.ts")
    t = open(pfad, encoding="utf-8").read()
    return json.loads(t[t.index("=\n[") + 2: t.rindex("]") + 1])


def wortart(zeile, code):
    # Chinesisch fuehrt keine Wortart-Spalte - sie wird aus der deutschen
    # Bedeutung abgeleitet, dieselbe Heuristik wie in vocabContent.ts.
    if code == "zh":
        g = (zeile.get("german") or "").strip()
        return "Nomen" if g[:1].isupper() else ("Verb" if g.endswith(("en", "n")) else "Sonstiges")
    return zeile.get("category") or "?"


def pruefe(code):
    tabelle, spalte, laut = SPRACHEN[code]
    kurs = lies_kurs(code)
    zeilen = alle(f"{tabelle}?select=*")

    index = {}
    for z in zeilen:
        if laut:                                  # eigene Schrift
            if z.get(spalte):
                index[z[spalte].lower()] = z
        else:
            index[z[spalte].lower()] = z
            f = z.get("forms") or {}
            if isinstance(f, dict) and f.get("present"):
                index[f["present"].lower()] = z

    slots = treffer = 0
    fehlend, proWortart = [], Counter()
    for modul in kurs:
        for lek in modul["lessons"]:
            if lek["kind"] not in ("frame", "series") or not lek.get("frameDe"):
                continue
            for gruppe in lek["slotGroups"]:
                for w in gruppe:
                    slots += 1
                    z = index.get((w["schrift"] if laut else w["lerntext"]).lower())
                    if z:
                        treffer += 1
                        proWortart[wortart(z, code)] += 1
                    else:
                        fehlend.append(f"{lek['id']}: {w['lerntext']} ({w['de']})")

    lektionen = sum(len(m["lessons"]) for m in kurs)
    quote = treffer / slots if slots else 0
    print(f"{code:4} {lektionen:5} Lekt. {slots:5} Slots {treffer:5} Treffer {quote:6.0%}  "
          + ", ".join(f"{k}={n}" for k, n in proWortart.most_common(4)))
    for f in fehlend[:8]:
        print(f"     fehlt: {f}")
    if len(fehlend) > 8:
        print(f"     ... und {len(fehlend) - 8} weitere")
    return treffer, slots, len(fehlend)


if __name__ == "__main__":
    gewuenscht = [a for a in sys.argv[1:] if not a.startswith("-")] or list(SPRACHEN)
    gesamtT = gesamtS = gesamtF = 0
    for code in gewuenscht:
        if code not in SPRACHEN:
            print(f"?? {code} unbekannt - bekannt: {', '.join(SPRACHEN)}")
            continue
        t, s, f = pruefe(code)
        gesamtT += t
        gesamtS += s
        gesamtF += f
    print(f"\n{gesamtT} von {gesamtS} Slots aufgeloest - so viele Wort-Luecken sind baubar.")
    sys.exit(1 if gesamtF else 0)
