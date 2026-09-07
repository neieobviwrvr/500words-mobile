# -*- coding: utf-8 -*-
"""Familien bauen und den Saetzen zuordnen.

    python bauen.py bericht  en          nur rechnen, nichts schreiben
    python bauen.py bericht  en --lang   dazu die Saetze, die leer ausgehen
    python bauen.py spiel_ein en         Probelauf
    python bauen.py spiel_ein en --echt  schreibt

Zwei Dinge entstehen hier:

  1. die Zeilen fuer `answer_clusters` (cluster_id + forms)
  2. die Spalte `verb_cluster` je Satz

WIE ZUGEORDNET WIRD
-------------------
Aus dem Satz IN DER ZIELSPRACHE - nie aus dem deutschen Original. Das ist die
Regel, an der vier schwedische Saetze gescheitert sind (siehe familien.py).

Reihenfolge, erste Treffersorte gewinnt:

  1. AUSDRUCK   Steht eine formelhafte Wendung im Satz, IST sie der
                Schluessel. "Vi ses senare!" ist ein Abschied, kein
                Seh-Vorgang - obwohl `ses` auch ein Verb ist.
  2. VERB stark Das inhaltliche Verb. Bei mehreren das erste im Satz.
  3. VERB schwach  Hilfs- und Modalverben. Nur wenn sonst nichts da ist -
                sonst waere das Prinzip von "Jag skulle vilja boka ett bord"
                `wollen` statt `buchen`.

Kein Treffer heisst: keine Familie. Das ist bei "Tack!" die richtige Antwort
und kein Mangel - ein Satz aus einem Wort hat keine Mittelstufe, weil es
zwischen "gesagt" und "nicht gesagt" nichts gibt.

WARUM DAS NIE HAERTER WERTET
----------------------------
Eine Familie kann eine Antwort nur vom Richtig-Niveau auf `ueberlebt`
ziehen, nie auf `nicht_verstanden` (siehe evaluateConcepts.ts). Eine
unglueckliche Zuordnung kostet also hoechstens die Bestnote, sie kann keine
richtige Antwort durchfallen lassen. Deshalb ist grosszuegiges Zuordnen die
sichere Richtung - und deshalb prueft `npm run pruefe:konzepte` danach, dass
jeder Zielsatz weiterhin `richtig` ergibt.
"""
import json
import os
import re
import sys
import urllib.request

if hasattr(sys.stdout, "reconfigure"):
    sys.stdout.reconfigure(encoding="utf-8", errors="replace")
    sys.stderr.reconfigure(encoding="utf-8", errors="replace")

HIER = os.path.dirname(os.path.abspath(__file__))
SPRACHLISTEN = os.path.dirname(HIER)
sys.path.insert(0, HIER)

import familien as F                                    # noqa: E402
from formen import englische_formen, schwedische_formen  # noqa: E402

TABELLE = {
    "sv": "schwedisch_phrasebook",
    "en": "englisch_phrasebook",
    "zh": "chinesisch_phrasebook",
}
VOKABELN = {"sv": "schwedisch_vocab"}

# Chinesisch hat keine Wortgrenzen - dort wird ENTHALTEN geprueft statt
# Wort gegen Wort, genau wie in evaluateConcepts.ts.
OHNE_WORTGRENZEN = {"zh"}


def lies_env(name):
    for zeile in open(os.path.join(SPRACHLISTEN, ".env"), encoding="utf-8"):
        if zeile.startswith(name + "="):
            return zeile.split("=", 1)[1].strip().strip('"')
    raise SystemExit(name + " nicht gefunden")


URL, KEY = lies_env("SUPABASE_URL"), lies_env("SUPABASE_SERVICE_ROLE_KEY")


def rest(pfad, methode="GET", koerper=None, kopfzusatz=None):
    kopf = {"apikey": KEY, "Authorization": "Bearer " + KEY,
            "Content-Type": "application/json", "Prefer": "return=representation"}
    kopf.update(kopfzusatz or {})
    d = json.dumps(koerper, ensure_ascii=False).encode("utf-8") if koerper is not None else None
    r = urllib.request.Request(URL + "/rest/v1/" + pfad, data=d, headers=kopf, method=methode)
    with urllib.request.urlopen(r) as a:
        t = a.read().decode("utf-8")
        return json.loads(t) if t.strip() else []


def alle(pfad, seite=1000):
    aus, off = [], 0
    while True:
        trenn = "&" if "?" in pfad else "?"
        teil = rest(f"{pfad}{trenn}limit={seite}&offset={off}")
        aus += teil
        if len(teil) < seite:
            return aus
        off += seite


# --------------------------------------------------------------------------
# Familien -> Formen
# --------------------------------------------------------------------------

def baue_familien(sprache):
    """{cluster_id: [formen]} plus {cluster_id: 'ausdruck'|'stark'|'schwach'}."""
    formen, rang, warnungen = {}, {}, []

    vocab_forms = {}
    if sprache in VOKABELN:
        for z in alle(f"{VOKABELN[sprache]}?select=swedish,category,forms"):
            if z["category"] == "Verb":
                vocab_forms[z["swedish"]] = z["forms"] or {}
    zusatz = F.ZUSATZ.get(sprache, {})

    for name, woerter in F.VERBEN.get(sprache, {}).items():
        cid = f"{sprache}_{name}"
        gesammelt = []
        for w in woerter:
            if sprache == "sv":
                f = schwedische_formen(w, vocab_forms, zusatz)
                # Nur melden, wenn ueberhaupt keine Quelle gefragt werden
                # konnte. Eine einzige Form ist kein Fehler: `maaste` heisst
                # in jeder Zeit `maaste`, die Vergangenheit wird umschrieben
                # ("var tvungen att") und ist keine Verbform.
                if w not in vocab_forms and w not in zusatz:
                    warnungen.append(f"{cid}: keine Formen zu {w!r} - weder in "
                                     f"{VOKABELN[sprache]} noch in ZUSATZ")
            elif sprache == "en":
                # ZUSATZ traegt hier feste Wendungen bei, die sich nicht aus
                # dem Grundwort beugen lassen ("i'd like").
                f = englische_formen(w) + zusatz.get(w, [])
            else:
                f = [w] + zusatz.get(w, [])
            gesammelt += f
        formen[cid] = sorted(set(gesammelt))
        rang[cid] = "schwach" if name in F.SCHWACH else "stark"

    # Eigenschaften stehen im selben Rang wie starke Verben - sie sind
    # Inhaltswoerter, nur eben keine Verben. Ein Satz, der beides enthaelt,
    # entscheidet nach der Stelle: "Maten smakar mycket bra" gehoert zu
    # `schmecken`, nicht zu `gut`.
    for name, woerter in F.EIGENSCHAFTEN.get(sprache, {}).items():
        cid = f"{sprache}_{name}"
        formen[cid] = sorted(set(formen.get(cid, [])) | set(woerter))
        rang.setdefault(cid, "stark")

    for name, wendungen in F.AUSDRUCK.get(sprache, {}).items():
        cid = f"{sprache}_{name}"
        # Eine Ausdrucks-Familie darf denselben Namen tragen wie eine
        # Verb-Familie (`sv_ja` gibt es nur einmal). Wo doch, gewinnt der
        # Ausdruck - er ist die speziellere Angabe.
        formen[cid] = sorted(set(formen.get(cid, []) + wendungen))
        rang[cid] = "ausdruck"

    return formen, rang, warnungen


# --------------------------------------------------------------------------
# Zuordnung
# --------------------------------------------------------------------------

def _stelle(satztext, form, sprache):
    """Wo im Satz steht die Form? -1, wenn gar nicht."""
    if sprache in OHNE_WORTGRENZEN:
        return satztext.find(form)
    klein = satztext.lower()
    gesperrt = F.NICHT_NACH.get(sprache, {}).get(form.lower(), [])
    for m in re.finditer(r"(?<![\w])" + re.escape(form.lower()) + r"(?![\w])", klein):
        if gesperrt:
            davor = klein[:m.start()].rstrip()
            # Das Wort davor, Apostroph eingeschlossen: "I'd" endet auf "'d".
            if any(davor.endswith(w) for w in gesperrt):
                continue
        return m.start()
    return -1


# Wann gilt eine Ausdrucks-Wendung als der Schluessel des Satzes?
#
# Zwei Sprachbauarten, zwei Antworten - und beide sind aus je einem echten
# Fehlgriff entstanden.
#
# MIT WORTGRENZEN: es zaehlt die STELLE. "Tvaa oel, tack." wurde als
# Dank-Satz eingestuft, dabei bestellt er Bier - schwedisch `tack` heisst
# "danke" UND "bitte". Eine Hoeflichkeitsfloskel am ENDE ist Verpackung, am
# ANFANG ist sie die Aussage. Drei Zeichen Spielraum, damit "Ja, tack" und
# "Nej, tack" durchgehen, aber nichts mit einem echten Satzteil davor.
#
# OHNE WORTGRENZEN: es zaehlt der ANTEIL. Die Stelle hilft im Chinesischen
# nicht, weil dort genau die Allerweltszeichen vorn stehen: 请 (bitte), 不
# (nicht), 对 (richtig/gegenueber). "请帮我报警。" (Bitte rufen Sie die
# Polizei) galt als Hoeflichkeitsfloskel, "我不懂。" (Ich verstehe nicht) als
# Verneinung, "我对花生过敏。" (allergisch gegen Erdnuesse) als Zustimmung -
# alle drei, weil ein einzelnes Zeichen vorn stand.
#
# Ein Ausdruck ist im Chinesischen erst dann der Satz, wenn er den halben
# Satz ausmacht: 你好吗 (3 von 3) ja, 不 in 我不懂 (1 von 3) nein. 绝对不行
# (不行, 2 von 4) faellt genau auf die Grenze und ist als Absage richtig
# eingeordnet.
AUSDRUCK_SPIELRAUM = 3
AUSDRUCK_MINDESTANTEIL = 0.5


def zuordnen(satztext, formen, rang, sprache):
    """Welche Familie traegt diesen Satz? Reihenfolge siehe Modulkopf."""
    treffer = {"ausdruck": [], "stark": [], "schwach": []}
    for cid, fs in formen.items():
        stellen = [(_stelle(satztext, f, sprache), len(f)) for f in fs]
        stellen = [t for t in stellen if t[0] >= 0]
        if not stellen:
            continue
        # Position im Satz, damit bei mehreren starken Verben das erste
        # gewinnt - das ist in allen drei Sprachen das Verb des Hauptsatzes.
        pos, laenge = min(stellen)
        if rang[cid] == "ausdruck":
            if sprache in OHNE_WORTGRENZEN:
                kern = re.sub(r"[\s，。？！、,.?!]", "", satztext)
                laengste = max(l for _, l in stellen)
                if not kern or laengste / len(kern) < AUSDRUCK_MINDESTANTEIL:
                    continue
            elif pos > AUSDRUCK_SPIELRAUM:
                continue
        treffer[rang[cid]].append((pos, -laenge, cid))
    for stufe in ("ausdruck", "stark", "schwach"):
        if treffer[stufe]:
            # Bei gleicher Position die LAENGERE Wendung: "god natt" schlaegt
            # "natt", "look for" schlaegt "look".
            treffer[stufe].sort()
            return treffer[stufe][0][2]
    return None


# --------------------------------------------------------------------------
# Befehle
# --------------------------------------------------------------------------

def lade_saetze(sprache):
    tab = TABELLE[sprache]
    return tab, alle(f"{tab}?select=id,german,target_text,accepted_concepts,verb_cluster")


def bericht(sprache, zeige_lang=False):
    formen, rang, warnungen = baue_familien(sprache)
    tab, saetze = lade_saetze(sprache)

    for w in warnungen:
        print("  ! " + w)

    zugeordnet, ohne = {}, []
    for s in saetze:
        cid = zuordnen(s["target_text"], formen, rang, sprache)
        if cid:
            zugeordnet[s["id"]] = cid
        else:
            ohne.append(s)

    # Wo hilft die Familie WIRKLICH? Nur da, wo es ohne sie keine
    # Mittelstufe gaebe: ein einziges Pflicht-Konzept.
    einkonzept = [s for s in saetze
                  if len((s["accepted_concepts"] or {}).get("required") or []) < 2]
    gerettet = [s for s in einkonzept if s["id"] in zugeordnet]

    print(f"\n=== {sprache} ({tab}) - {len(saetze)} Saetze")
    print(f"  Familien gebaut               {len(formen)}"
          f"  ({sum(1 for r in rang.values() if r == 'ausdruck')} Ausdruck,"
          f" {sum(1 for r in rang.values() if r == 'stark')} stark,"
          f" {sum(1 for r in rang.values() if r == 'schwach')} schwach)")
    print(f"  Formen insgesamt              {sum(len(v) for v in formen.values())}")
    print(f"  Saetze mit Familie            {len(zugeordnet)}  ({len(zugeordnet)/len(saetze):.0%})")
    print(f"  davon mit nur EINEM Konzept   {len(gerettet)} von {len(einkonzept)}"
          f"  <- hier entsteht die Mittelstufe neu")
    print(f"  ohne Familie                  {len(ohne)}")

    genutzt = {}
    for cid in zugeordnet.values():
        genutzt[cid] = genutzt.get(cid, 0) + 1
    stumm = [c for c in formen if c not in genutzt]
    print(f"  Familien ohne einen Satz      {len(stumm)}"
          + (f"  ({', '.join(sorted(stumm)[:10])}{' ...' if len(stumm) > 10 else ''})" if stumm else ""))
    print("  haeufigste: " + ", ".join(f"{c}={n}" for c, n in
                                       sorted(genutzt.items(), key=lambda x: -x[1])[:8]))

    if zeige_lang:
        def lang(s):
            t = s["target_text"]
            return (len([z for z in re.sub(r"[\s，。？！、]", "", t)]) >= 5 if sprache in OHNE_WORTGRENZEN
                    else len(t.split()) >= 4)
        langOhne = [s for s in ohne if lang(s)]
        print(f"\n  {len(langOhne)} laengere Saetze ohne Familie:")
        for s in langOhne[:40]:
            print(f"    [{s['id']}] {s['target_text']}   ({s['german']})")

    return formen, rang, zugeordnet, saetze


def spiel_ein(sprache, echt=False):
    formen, rang, zugeordnet, saetze = bericht(sprache)
    tab = TABELLE[sprache]

    # NUR Familien schreiben, auf die auch ein Satz zeigt. Eine Familie ohne
    # Satz wird nie nachgeschlagen - sie laege bloss in `answer_clusters`
    # herum und wuerde bei jedem App-Start mitgeladen. Sobald ein neuer Satz
    # sie braucht, entsteht sie beim naechsten Lauf von selbst.
    gebraucht = set(zugeordnet.values())
    cluster_zeilen = [{"cluster_id": c, "forms": formen[c]} for c in sorted(gebraucht)]

    aenderungen = [(s["id"], zugeordnet.get(s["id"])) for s in saetze
                   if s["verb_cluster"] != zugeordnet.get(s["id"])]

    # Verwaiste Familien aus frueheren Laeufen: dieselbe Sprache, kein Satz
    # mehr. Deutsche Cluster (ohne Praefix) bleiben unangetastet - die
    # gehoeren `phrasebook_master` und werden hier nicht verwaltet.
    vorhanden = {z["cluster_id"] for z in alle("answer_clusters?select=cluster_id")}
    verwaist = sorted(c for c in vorhanden
                      if c.startswith(sprache + "_") and c not in gebraucht)

    print(f"\n  answer_clusters: {len(cluster_zeilen)} Zeilen einzuspielen"
          f"  ({len(formen) - len(gebraucht)} ungenutzte ausgelassen)")
    print(f"  {tab}.verb_cluster:  {len(aenderungen)} Aenderungen")
    if verwaist:
        print(f"  verwaist, wird geloescht: {len(verwaist)}  ({', '.join(verwaist[:8])}"
              f"{' ...' if len(verwaist) > 8 else ''})")
    if not echt:
        print("\n  Probelauf - nichts geschrieben. Mit --echt wiederholen.")
        return

    rest("answer_clusters?on_conflict=cluster_id", "POST", cluster_zeilen,
         {"Prefer": "resolution=merge-duplicates,return=minimal"})
    print("  answer_clusters geschrieben.")

    for i, (sid, cid) in enumerate(aenderungen, 1):
        rest(f"{tab}?id=eq.{sid}", "PATCH", {"verb_cluster": cid},
             {"Prefer": "return=minimal"})
        if i % 100 == 0:
            print(f"    {i}/{len(aenderungen)}")
    print(f"  {len(aenderungen)} Saetze aktualisiert.")

    # Erst LOESCHEN, nachdem kein Satz mehr darauf zeigt - sonst zeigt fuer
    # einen Augenblick ein Satz auf eine Familie, die es nicht mehr gibt.
    for c in verwaist:
        rest(f"answer_clusters?cluster_id=eq.{c}", "DELETE", None, {"Prefer": "return=minimal"})
    if verwaist:
        print(f"  {len(verwaist)} verwaiste Familien geloescht.")


if __name__ == "__main__":
    if len(sys.argv) < 3:
        raise SystemExit(__doc__)
    befehl, sprache = sys.argv[1], sys.argv[2]
    if sprache not in TABELLE:
        raise SystemExit(f"Unbekannt: {sprache} - bekannt sind {sorted(TABELLE)}")
    if befehl == "bericht":
        bericht(sprache, "--lang" in sys.argv)
    elif befehl == "spiel_ein":
        spiel_ein(sprache, "--echt" in sys.argv)
    else:
        raise SystemExit(__doc__)
