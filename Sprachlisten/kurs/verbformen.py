# -*- coding: utf-8 -*-
"""Benannte Verbformen fuer die `forms`-Spalte der Vokabeltabellen.

**Warum es das ueberhaupt gibt.** Der Kurs steht bis heute im Praesens der
ersten Person, weil die Vokabeltabellen nur die Grundform fuehren. Wo
trotzdem eine andere Form noetig war, hat der Lehrplan sie umgangen (Modal
plus Infinitiv) - oder er hat es nicht gemerkt: `kurs_en.py` baute bis zum
2026-09-08 "I have finish it", weil der Rahmen ein Partizip verlangte und
die Spalte nur "finish" hergab. Ohne benannte Formen ist ein A2-Modul
"Was hast du gemacht?" nicht baubar.

**Warum nicht einfach `bewertung/formen.py` benutzen.** Das erzeugt
dieselben Formen, aber fuer einen anderen Zweck: dort werden sie GEGEN eine
Nutzerantwort gehalten, hier werden sie dem Nutzer GEZEIGT. Der Unterschied
ist groesser, als er klingt.

    Sprache  | in formen.py                        | hier brauchbar
    ---------|-------------------------------------|----------------
    en       | benanntes Tripel + Regeln           | JA, unveraendert
    es/fr/it | Regel benannt, Unregelmaessige flach| Regel ja, Rest neu
    ru/pl    | beide Konjugationen an zwei Staemmen| NEIN

Der slawische Generator erzeugt ausdruecklich einen UEBERSCHUSS - sein
eigener Kommentar sagt "die falsche Haelfte ergibt Silbenfolgen, die kein
Wort sind". Zum Abgleichen ist das genau richtig und billiger als echte
Morphologie. Einem Lernenden kann man daraus nichts vorlegen, weil sich der
Menge nicht ansehen laesst, welche Haelfte die richtige war.

Deshalb faengt diese Datei bei Englisch an, wo nichts neu erfunden werden
muss, und waechst von dort - jede Sprache erst dann, wenn ihre Formen
benannt vorliegen und nicht geraten sind.

Aufruf:
    python verbformen.py en            # Vorschlag anzeigen
    python verbformen.py en --schreib  # Vorschlag als JSON ablegen
"""
import io
import json
import os
import sys

if hasattr(sys.stdout, "reconfigure"):
    sys.stdout.reconfigure(encoding="utf-8", errors="replace")

HIER = os.path.dirname(os.path.abspath(__file__))
SPRACHLISTEN = os.path.dirname(HIER)
sys.path.insert(0, os.path.join(SPRACHLISTEN, "bewertung"))
sys.path.insert(0, HIER)

import formen as F  # noqa: E402  - liegt in bewertung/, siehe sys.path oben


# ---------------------------------------------------------------------------
# Englisch
# ---------------------------------------------------------------------------
def englisch(lemma):
    """Vier benannte Formen zu einem englischen Verb.

    `bewertung/formen.py` fuehrt die Unregelmaessigen bereits als Tripel
    (dritte Person, Praeteritum, Partizip) - das ist genau die Beschriftung,
    die hier fehlt, und sie wird uebernommen statt nachgebaut. Die
    regelmaessigen entstehen aus denselben drei Regelfunktionen.

    Mehrwortiges ("look for", "be called") wird ueber das ERSTE Wort
    gebeugt und behaelt den Rest - dieselbe Regel wie dort.
    """
    if lemma in F.UNVERAENDERLICH:
        return None

    # Ein fuehrendes "to " ist der Infinitivmarker, kein Verb. Die Regel
    # "beuge das ERSTE Wort" ist fuer "look for" richtig und fuer
    # "to answer" falsch - sie erzeugte "toes answer", "toed be called",
    # "toing love" (2026-09-08). Der Marker faellt vor dem Beugen weg und
    # bleibt nur in der Grundform stehen, wie ihn die Vokabelspalte fuehrt.
    stamm = lemma[3:] if lemma.startswith("to ") else lemma
    teile = stamm.split(" ", 1)
    kopf, rest = teile[0], (" " + teile[1] if len(teile) > 1 else "")
    if kopf in F.UNVERAENDERLICH:
        return None

    # `be` ist das einzige englische Verb mit mehr als einer Praesensform.
    # `formen.py` behandelt es an eigener Stelle; das Tripel dort nennt nur
    # "is", und die Regel machte aus "be" ausserdem "bing".
    if kopf == "be":
        return {"present": lemma, "present_1": "am" + rest, "present_3": "is" + rest,
                "present_pl": "are" + rest, "preteritum": "was" + rest,
                "preteritum_pl": "were" + rest,
                "supinum": "been" + rest, "verlaufsform": "being" + rest,
                "quelle": "liste"}

    if kopf in F.UNREGELMAESSIG:
        dritte, praet, partizip = F.UNREGELMAESSIG[kopf]
        unregelmaessig = True
    else:
        dritte = F._dritte_person(kopf)
        praet = F._praeteritum(kopf)
        partizip = praet          # regelmaessig fallen beide zusammen
        unregelmaessig = False

    # Schluesselnamen wie bei schwedisch_vocab, wo die Rolle dieselbe ist -
    # `supinum` heisst im Englischen eigentlich past participle. Der
    # gemeinsame Name spart bauplan.py einen Sonderfall je Sprache; dieselbe
    # Abwaegung steht schon in der norwegischen Migration.
    return {
        "present": lemma,
        "present_3": dritte + rest,
        "present_pl": stamm,
        "preteritum": praet + rest,
        "supinum": partizip + rest,
        "verlaufsform": F._verlaufsform(kopf) + rest,
        # Wer die Liste durchsieht, soll sofort sehen, wo geraten wurde und
        # wo nicht. Die regelmaessigen sind die, bei denen ein Fehler am
        # ehesten durchrutscht, weil sie plausibel aussehen.
        "quelle": "liste" if unregelmaessig else "regel",
    }


# Spanisch, Franzoesisch, Italienisch liegen in romanisch.py - Muster als
# Regel, Liste nur fuer das Unvorhersehbare. Siehe Kopf jener Datei.
import romanisch as ROM  # noqa: E402


def romanisch(code):
    return lambda lemma: ROM.formen(lemma, code)


# Russisch und Polnisch liegen in slawisch.py - derselbe vierstufige
# Aufbau, aber NICHTS davon aus bewertung/formen.py uebernehmbar (siehe
# Kopf jener Datei).
import slawisch as SLAW  # noqa: E402


def slawisch(code):
    return lambda lemma: SLAW.formen(lemma, code)


BAUER = {"en": englisch, "es": romanisch("es"),
         "fr": romanisch("fr"), "it": romanisch("it"),
         "ru": slawisch("ru"), "pl": slawisch("pl")}


# ---------------------------------------------------------------------------
def lies_env(name):
    for zeile in io.open(os.path.join(SPRACHLISTEN, ".env"), encoding="utf-8"):
        if zeile.startswith(name + "="):
            return zeile.split("=", 1)[1].strip().strip('"')
    raise SystemExit(name + " nicht gefunden")


def hole(pfad):
    import urllib.request
    url, key = lies_env("SUPABASE_URL"), lies_env("SUPABASE_SERVICE_ROLE_KEY")
    aus, von = [], 0
    while True:
        r = urllib.request.Request(
            f"{url}/rest/v1/{pfad}&offset={von}&limit=1000",
            headers={"apikey": key, "Authorization": "Bearer " + key})
        teil = json.load(urllib.request.urlopen(r))
        aus += teil
        if len(teil) < 1000:
            return aus
        von += 1000


TABELLE = {
    "en": ("englisch_vocab", "english"),
    "es": ("spanisch_vocab", "spanish"),
    "fr": ("franz_vocab", "french"),
    "it": ("italienisch_vocab", "italian"),
    "ru": ("russisch_vocab", "russian"),
    "pl": ("polnisch_vocab", "polish"),
}


def baue(code):
    if code not in BAUER:
        raise SystemExit(
            f"Fuer {code} gibt es noch keinen benannten Formenbau. "
            f"Vorhanden: {', '.join(sorted(BAUER))}. Siehe Kopf dieser Datei - "
            f"die Formen aus bewertung/formen.py lassen sich fuer ru/pl NICHT "
            f"uebernehmen, sie sind dort bewusst ein Ueberschuss.")
    tabelle, spalte = TABELLE[code]
    zeilen = hole(f"{tabelle}?select={spalte},german,category")
    verben = [z for z in zeilen
              if (z.get("category") or "").strip().lower().startswith("verb")]

    aus, uebersprungen = {}, []
    for z in verben:
        lemma = (z[spalte] or "").strip()
        gebaut = BAUER[code](lemma)
        if gebaut is None:
            uebersprungen.append(lemma)
            continue
        gebaut["de"] = z.get("german")
        aus[lemma] = gebaut
    return aus, uebersprungen, len(verben)


def schicke(tabelle, zeile_id, formen):
    """Eine Zeile aktualisieren. PATCH, nicht PUT - alles andere bleibt."""
    import urllib.request
    url, key = lies_env("SUPABASE_URL"), lies_env("SUPABASE_SERVICE_ROLE_KEY")
    daten = json.dumps({"forms": formen}).encode("utf-8")
    r = urllib.request.Request(
        f"{url}/rest/v1/{tabelle}?id=eq.{zeile_id}", data=daten, method="PATCH",
        headers={"apikey": key, "Authorization": "Bearer " + key,
                 "Content-Type": "application/json", "Prefer": "return=minimal"})
    urllib.request.urlopen(r).read()


def spiel_ein(code, echt=False):
    """Schreibt die erzeugten Formen in die forms-Spalte.

    Ohne `echt` wird NICHTS geschickt - der Lauf sagt nur, was er taete.
    Dasselbe Vorgehen wie bewertung/bauen.py, und aus demselben Grund: die
    Vokabeltabellen sind live, eine ausgelieferte App liest sie beim Start.

    Eine bereits belegte Zeile wird NICHT ueberschrieben. Wer eine Form von
    Hand berichtigt hat, soll sie beim naechsten Lauf wiederfinden.
    """
    tabelle, spalte = TABELLE[code]
    gebaut, _, _ = baue(code)
    zeilen = hole(f"{tabelle}?select=id,{spalte},forms,category")

    neu, schon_da, ohne = [], [], []
    for z in zeilen:
        lemma = (z[spalte] or "").strip()
        if lemma not in gebaut:
            continue
        if z.get("forms"):
            schon_da.append(lemma)
            continue
        formen = {k: v for k, v in gebaut[lemma].items()
                  if k not in ("quelle", "de")}
        neu.append((z["id"], lemma, formen))

    print(f"{code}: {len(neu)} Zeilen bekaemen Formen, "
          f"{len(schon_da)} haben schon welche")
    for _, lemma, f in neu[:5]:
        print(f"   {lemma:<14} {json.dumps(f, ensure_ascii=False)}")
    if not echt:
        print("Probelauf - nichts geschickt. Mit --echt schreiben.")
        return
    for i, (zid, lemma, formen) in enumerate(neu, 1):
        schicke(tabelle, zid, formen)
        if i % 25 == 0:
            print(f"   {i}/{len(neu)}")
    print(f"   {len(neu)} Zeilen geschrieben.")


def main():
    if len(sys.argv) < 2:
        raise SystemExit(__doc__)
    code = sys.argv[1]
    if "spiel_ein" in sys.argv:
        spiel_ein(code, echt="--echt" in sys.argv)
        return
    aus, uebersprungen, gesamt = baue(code)
    nach_regel = [k for k, v in aus.items() if v["quelle"].startswith("regel")]
    nach_liste = [k for k, v in aus.items() if v["quelle"] == "liste"]

    print(f"{code}: {gesamt} Verben in der Vokabeltabelle")
    print(f"   {len(nach_liste):3} aus der Unregelmaessigen-Liste (verlaesslich)")
    print(f"   {len(nach_regel):3} nach Regel erzeugt (durchsehen!)")
    if uebersprungen:
        print(f"   {len(uebersprungen):3} ohne Formen: {uebersprungen[:8]}")
    print()
    # Anzeige ohne feste Schluesselnamen - Englisch hat andere als die
    # romanischen Sprachen, und die naechste Sprache wieder andere.
    def zeile(marke, lemma):
        v = aus[lemma]
        formen = [v[k] for k in
                  ("praesens_1", "praesens_2", "praesens_3",
                   "praesens_4", "praesens_5", "praesens_6",
                   "present_3", "preteritum", "verlaufsform")
                  if k in v]
        print(f"   [{marke}] {lemma:<14} {' '.join(formen):<58} | "
              f"Part. {v.get('supinum') or '-'}")

    for lemma in sorted(nach_liste)[:5]:
        zeile("Liste", lemma)
    for lemma in sorted(nach_regel)[:10]:
        zeile("Regel", lemma)

    if "--schreib" in sys.argv:
        ordner = os.path.join(HIER, "vorschlag")
        os.makedirs(ordner, exist_ok=True)
        ziel = os.path.join(ordner, f"verbformen_{code}.json")
        io.open(ziel, "w", encoding="utf-8").write(
            json.dumps(aus, ensure_ascii=False, indent=1, sort_keys=True))
        print(f"\nVorschlag geschrieben: {ziel}")
        print("NICHTS ist damit in der Datenbank - das ist Absicht.")


if __name__ == "__main__":
    main()
