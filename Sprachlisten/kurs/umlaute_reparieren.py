# -*- coding: utf-8 -*-
"""Stellt echte Umlaute in den deutschen Bedeutungen der Vokabeltabellen her.

**Der Fehler.** Sechs Vokabeltabellen (it, no, ru, vi, pl, en - die sechs
Sprachen der September-Wellen) fuehren die deutschen Bedeutungen in
ASCII-Ersatzschreibung: `fuer`, `ueber`, `waehrend`, `fuenf`, `zwoelf`,
`maennlich`, `heisst`. Keine einzige echte Umlautzeile. Die vier aelteren
Tabellen (sv, es, fr, zh) haben es richtig.

Das ist kein Schoenheitsfehler: die Spalte ist NUTZERTEXT. In der
Woerter-Wiederholung und im Sperrbildschirm-Widget steht dann "fuer" als
deutsche Bedeutung von `for`. Ausserdem laesst sich gegen so eine Spalte
kein sprachuebergreifender Lehrplan bauen - der Abgleich ueber die deutsche
Bedeutung ist die einzige Bruecke zwischen elf unabhaengigen Wortlisten.

**Warum kein blindes Ersetzen.** `ue -> ü` macht aus "aktuell" ein
"aktüll", aus "Museum" Unsinn, aus "Michael" "Michäl". Und `ss -> ß` ist
nach neuer Rechtschreibung nur nach langem Vokal oder Diphthong richtig:
"gross" wird "groß", aber "dass", "essen", "Wasser", "muessen" behalten ss.

Deshalb zwei Listen statt einer Regel:
  SCHUTZ    Zeichenfolgen, die NICHT angefasst werden (aktuell, Museum ...)
  SS_ZU_SZ  die vollstaendige Liste der Woerter, die wirklich ein ß tragen

Alles andere wird nach `ae/oe/ue -> ä/ö/ü` umgesetzt. Jede Aenderung wird
vor dem Schreiben angezeigt.

Aufruf:  python umlaute_reparieren.py            (Probelauf)
         python umlaute_reparieren.py --echt
"""
import json
import os
import re
import sys
import urllib.request

if hasattr(sys.stdout, "reconfigure"):
    sys.stdout.reconfigure(encoding="utf-8", errors="replace")

HIER = os.path.dirname(os.path.abspath(__file__))
SPRACHLISTEN = os.path.dirname(HIER)

TABELLEN = ["italienisch_vocab", "norwegisch_vocab", "russisch_vocab",
            "vietnamesisch_vocab", "polnisch_vocab", "englisch_vocab"]

# Woerter, in denen ae/oe/ue KEIN Umlaut ist. Kleingeschrieben verglichen.
SCHUTZ = [
    "aktuell", "eventuell", "individuell", "manuell", "sexuell", "visuell",
    "museum", "duett", "duell", "statue", "queue", "jubilaeum",  # jubilaeum -> siehe unten
    "michael", "raphael", "israel", "poesie", "poet", "koexistenz",
    "influencer", "queen", "quer",  # 'que' enthaelt kein ue-Digraph im Sinn
]

# Woerter mit echtem ß (neue Rechtschreibung: nach langem Vokal/Diphthong).
# Alles, was hier NICHT steht, behaelt ss.
SS_ZU_SZ = {
    "gross": "groß", "groesser": "größer", "groesste": "größte",
    "größer": "größer", "größte": "größte", "größe": "größe",
    "heiss": "heiß", "heisst": "heißt", "heissen": "heißen",
    "weiss": "weiß", "weisse": "weiße", "weisser": "weißer",
    "ausser": "außer", "ausserdem": "außerdem", "ausserhalb": "außerhalb",
    "draussen": "draußen", "fuss": "fuß", "füsse": "füße",
    "strasse": "straße", "strassen": "straßen", "spass": "spaß",
    "schliessen": "schließen", "schliesslich": "schließlich",
    "geniessen": "genießen", "giessen": "gießen", "reissen": "reißen",
    "schiessen": "schießen", "fliessen": "fließen", "beissen": "beißen",
    "süss": "süß", "süsse": "süße", "grüssen": "grüßen", "gruss": "gruß",
    "begrüssung": "begrüßung", "massig": "mäßig",
}


def lies_env(name):
    for zeile in open(os.path.join(SPRACHLISTEN, ".env"), encoding="utf-8"):
        if zeile.startswith(name + "="):
            return zeile.split("=", 1)[1].strip().strip('"')
    raise SystemExit(name + " nicht gefunden")


URL, KEY = lies_env("SUPABASE_URL"), lies_env("SUPABASE_SERVICE_ROLE_KEY")
KOPF = {"apikey": KEY, "Authorization": "Bearer " + KEY,
        "Content-Type": "application/json"}


def hole(tabelle):
    out, off = [], 0
    while True:
        r = urllib.request.Request(
            f"{URL}/rest/v1/{tabelle}?select=id,german&limit=1000&offset={off}",
            headers=KOPF)
        with urllib.request.urlopen(r, timeout=60) as a:
            teil = json.load(a)
        out += teil
        if len(teil) < 1000:
            return out
        off += 1000


def wort_umsetzen(w):
    """Ein einzelnes Wort umsetzen. Gross-/Kleinschreibung bleibt erhalten.

    Reihenfolge zaehlt: erst Umlaute, DANN die ss-Entscheidung. Andersherum
    kaeme "muessen" nie bei "müssen" an, weil es schon in der ss-Liste
    haengenbliebe (erster Testlauf, real passiert)."""
    if any(s in w.lower() for s in SCHUTZ):
        return w

    # Umlaute folgen im Deutschen NIE auf einen Vokal. Steht vor dem
    # Digraph ein Vokal, ist es keiner: euer, teuer, neue, Dauer, Frauen -
    # die wuerden sonst zu eür, teür, neü, Daür, Fraün.
    # (Erster Testlauf hat genau das produziert.)
    #
    # `vorher and` ist noetig, nicht Zierde: am Wortanfang ist `vorher` der
    # leere String, und `"" in "aeiou"` ist in Python WAHR - ohne die
    # Abfrage blieben "ueber" und "aelterer" unveraendert.
    vokal = "aeiouäöüAEIOU"

    def ersetze(m):
        vorher = w[m.start() - 1] if m.start() > 0 else ""
        if vorher and vorher in vokal:
            return m.group(0)
        return {"ae": "ä", "oe": "ö", "ue": "ü",
                "Ae": "Ä", "Oe": "Ö", "Ue": "Ü"}[m.group(0)]

    neu = re.sub(r"ae|oe|ue|Ae|Oe|Ue", ersetze, w)

    # ss -> ß nur nach ausdruecklicher Liste, auf der Form NACH der
    # Umlautumsetzung nachgeschlagen.
    ziel = SS_ZU_SZ.get(neu.lower())
    if ziel:
        neu = ziel[0].upper() + ziel[1:] if neu[:1].isupper() else ziel
    return neu


def umsetzen(text):
    if not text:
        return text
    # Woerter einzeln, Satzzeichen und Leerraum unveraendert lassen
    return re.sub(r"[A-Za-zÄÖÜäöüß]+", lambda m: wort_umsetzen(m.group(0)), text)


def main():
    echt = "--echt" in sys.argv
    gesamt = 0
    for tabelle in TABELLEN:
        zeilen = hole(tabelle)
        aenderungen = []
        for z in zeilen:
            alt = z.get("german") or ""
            neu = umsetzen(alt)
            if neu != alt:
                aenderungen.append((z["id"], alt, neu))
        print(f"=== {tabelle}: {len(aenderungen)} von {len(zeilen)} ===")
        for _, alt, neu in aenderungen[:8]:
            print(f"    {alt!r} -> {neu!r}")
        if len(aenderungen) > 8:
            print(f"    ... und {len(aenderungen) - 8} weitere")
        gesamt += len(aenderungen)

        if echt:
            for i, (zid, _, neu) in enumerate(aenderungen, 1):
                r = urllib.request.Request(
                    f"{URL}/rest/v1/{tabelle}?id=eq.{zid}",
                    data=json.dumps({"german": neu}).encode("utf-8"),
                    headers={**KOPF, "Prefer": "return=minimal"}, method="PATCH")
                urllib.request.urlopen(r, timeout=30).read()
                if i % 25 == 0 or i == len(aenderungen):
                    print(f"    geschrieben {i}/{len(aenderungen)}")
        print()

    print(f"GESAMT: {gesamt} Bedeutungen")
    if not echt:
        print("PROBELAUF - nichts geschrieben. Mit --echt anwenden.")


if __name__ == "__main__":
    main()
