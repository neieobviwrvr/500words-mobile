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
import ableiten                                          # noqa: E402
from formen import (englische_formen, schwedische_formen,  # noqa: E402
                    romanische_formen, slawische_formen, ohne_beugung)

# Je Sprache: Satztabelle, Vokabeltabelle, Wortspalte, wie die Formen
# entstehen.
#
# `formen` ist die eigentliche Aussage dieser Tabelle - sie sagt, WORAN die
# Wortformen haengen:
#   daten      aus der `forms`-Spalte der Vokabeltabelle (sv, no)
#   englisch   Regel plus Liste der Unregelmaessigen
#   romanisch  Konjugationsendungen plus Liste der Unregelmaessigen
#   keine      die Sprache beugt nicht (zh, vi)
#   slawisch   beide Praesens-Konjugationen grosszuegig erzeugt, dazu
#              eine Liste der Stammwechsler (ru, pl)
SPRACHEN = {
    # Deutsch ist die Ausgangssprache und hat KEINE Vokabeltabelle - seine
    # Familien stehen seit jeher von Hand in clusters_master.py, und zwar
    # schon als fertige Formenlisten. Deshalb `fertig`.
    "de": ("phrasebook_master", None, "german", "fertig"),
    "sv": ("schwedisch_phrasebook", "schwedisch_vocab", "swedish", "daten"),
    "en": ("englisch_phrasebook", "englisch_vocab", "english", "englisch"),
    "zh": ("chinesisch_phrasebook", "chinesisch_vocab", "hanzi", "keine"),
    "es": ("spanisch_phrasebook", "spanisch_vocab", "spanish", "romanisch"),
    "fr": ("franz_phrasebook", "franz_vocab", "french", "romanisch"),
    "it": ("italienisch_phrasebook", "italienisch_vocab", "italian", "romanisch"),
    "no": ("norwegisch_phrasebook", "norwegisch_vocab", "norwegian", "daten"),
    "ru": ("russisch_phrasebook", "russisch_vocab", "russian", "slawisch"),
    "vi": ("vietnamesisch_phrasebook", "vietnamesisch_vocab", "vietnamese", "keine"),
    "pl": ("polnisch_phrasebook", "polnisch_vocab", "polish", "slawisch"),
}
TABELLE = {k: v[0] for k, v in SPRACHEN.items()}

# Chinesisch hat keine Wortgrenzen - dort wird ENTHALTEN geprueft statt
# Wort gegen Wort, genau wie in evaluateConcepts.ts. Vietnamesisch beugt zwar
# auch nicht, schreibt aber mit Leerzeichen und gehoert deshalb NICHT hierher.
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


def clusterId(sprache, name):
    """Deutsch bleibt UNPRAEFIXT, alle anderen tragen ihr Sprachkuerzel.

    `answer_clusters.cluster_id` ist ein Primaerschluessel ueber die ganze
    Tabelle. Die deutschen Cluster heissen seit jeher `sein`, `kosten`, ... und
    60 Master-Saetze verweisen darauf. Ein Praefix wuerde sie nicht umbenennen,
    sondern verdoppeln - und die 60 Verweise zeigten ins Leere.
    """
    return name if sprache == "de" else f"{sprache}_{name}"


# --------------------------------------------------------------------------
# Familien -> Formen
# --------------------------------------------------------------------------

def _wortlisten(sprache, vokabeln, saetze):
    """Die drei Familienarten - von Hand, wo vorhanden, sonst abgeleitet.

    Fuer Schwedisch, Englisch und Chinesisch stehen sie in familien.py und
    sind dort ueber mehrere Durchgaenge nachgeschaerft worden (siehe die
    Kommentare zu `inte`, `tack` und den chinesischen Funktionszeichen). Die
    behalten Vorrang.

    Fuer alle anderen leitet ableiten.py sie aus der deutschen
    Bedeutungsspalte und den Floskel-Saetzen ab. Das ist schwaecher als
    Handarbeit - aber es ist da, und der Unterschied zu "keine Familien" ist
    der zwischen drei Stufen und zwei.
    """
    _, _, wortspalte, _ = SPRACHEN[sprache]
    if sprache == "de":
        # Deutsch hat keine Vokabeltabelle, aber seit jeher handgepflegte
        # Cluster - und die stehen dort schon als Formenlisten.
        import importlib.util
        pfad = os.path.join(SPRACHLISTEN, "clusters_master.py")
        spec = importlib.util.spec_from_file_location("clusters_master", pfad)
        modul = importlib.util.module_from_spec(spec)
        spec.loader.exec_module(modul)
        return modul.CLUSTERS, {}, ableiten.ausdruecke_aus_saetzen(saetze), True
    handVerben = F.VERBEN.get(sprache)
    handEigen = F.EIGENSCHAFTEN.get(sprache)
    handAusdruck = F.AUSDRUCK.get(sprache)

    verben = handVerben or ableiten.verben_aus_vokabeln(vokabeln, wortspalte)
    eigen = handEigen or ableiten.verben_aus_vokabeln(
        vokabeln, wortspalte, wortart="Adjektiv", trigger=ableiten.TRIGGER_EIGENSCHAFT)
    ausdruck = handAusdruck or ableiten.ausdruecke_aus_saetzen(saetze)
    return verben, eigen, ausdruck, (handVerben is not None)


def _formen_von(wort, sprache, art, vocab_forms, zusatz, warnungen, cid):
    """Ein Grundwort -> alle Formen, je nach dem, woran die Sprache haengt."""
    if art == "daten":
        f = schwedische_formen(wort, vocab_forms, zusatz)
        if wort not in vocab_forms and wort not in zusatz:
            warnungen.append(f"{cid}: keine Formen zu {wort!r} - weder in der "
                             f"Vokabeltabelle noch in ZUSATZ")
        return f
    if art == "englisch":
        return englische_formen(wort) + zusatz.get(wort, [])
    if art == "romanisch":
        return romanische_formen(wort, sprache) + zusatz.get(wort, [])
    if art == "slawisch":
        return slawische_formen(wort, sprache) + zusatz.get(wort, [])
    if art == "fertig":
        # Schon eine Form, keine Grundform - nichts zu erzeugen.
        return [wort]
    # "keine" und "grundform" sehen im Code gleich aus, meinen aber
    # Verschiedenes: bei zh/vi GIBT es keine weiteren Formen, bei ru/pl gibt
    # es sie und wir erzeugen sie nur nicht. Der Bericht sagt das offen.
    return ohne_beugung(wort) + zusatz.get(wort, [])


def baue_familien(sprache, vokabeln=None, saetze=None):
    """{cluster_id: [formen]} plus {cluster_id: 'ausdruck'|'stark'|'schwach'}."""
    formen, rang, warnungen = {}, {}, []
    satzTabelle, vokabelTabelle, wortspalte, art = SPRACHEN[sprache]

    if vokabeln is None:
        vokabeln = alle(f"{vokabelTabelle}?select=*") if vokabelTabelle else []
    if saetze is None:
        _, saetze = lade_saetze(sprache)

    vocab_forms = {}
    if art == "daten":
        for z in vokabeln:
            if z.get("category") == "Verb":
                vocab_forms[z[wortspalte]] = z.get("forms") or {}
    zusatz = F.ZUSATZ.get(sprache, {})

    verbFamilien, eigenFamilien, ausdruckFamilien, vonHand = _wortlisten(
        sprache, vokabeln, saetze)
    if not vonHand:
        warnungen.append(f"{sprache}: Familien ABGELEITET (ableiten.py), nicht "
                         f"von Hand - siehe dort, was das bedeutet")

    for name, woerter in verbFamilien.items():
        cid = clusterId(sprache, name)
        gesammelt = []
        for w in woerter:
            # Eine einzige Form ist bei "daten" kein Fehler: schwedisch
            # `maaste` heisst in jeder Zeit `maaste`, die Vergangenheit wird
            # umschrieben ("var tvungen att") und ist keine Verbform.
            gesammelt += _formen_von(w, sprache, art, vocab_forms, zusatz, warnungen, cid)
        gesperrt = set(F.MEHRDEUTIG.get(sprache, {}).get(name, []))
        formen[cid] = sorted(set(gesammelt) - gesperrt)
        if name in F.NICHT_ZUORDNEN.get(sprache, set()):
            rang[cid] = "gesperrt"      # existiert, wird aber nie verteilt
        else:
            rang[cid] = "schwach" if name in F.SCHWACH else "stark"

    # Eigenschaften stehen im selben Rang wie starke Verben - sie sind
    # Inhaltswoerter, nur eben keine Verben. Ein Satz, der beides enthaelt,
    # entscheidet nach der Stelle: "Maten smakar mycket bra" gehoert zu
    # `schmecken`, nicht zu `gut`.
    for name, woerter in eigenFamilien.items():
        cid = clusterId(sprache, name)
        formen[cid] = sorted(set(formen.get(cid, [])) | set(woerter))
        rang.setdefault(cid, "stark")

    for name, wendungen in ausdruckFamilien.items():
        cid = clusterId(sprache, name)
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
    treffer = {"ausdruck": [], "stark": [], "schwach": [], "gesperrt": []}
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
    """Satzzeilen mit einheitlichen Feldern - egal welche Tabelle.

    `phrasebook_master` weicht zweifach ab: der Satztext steht in `german`
    (Deutsch IST dort die Zielsprache), und der Cluster liegt verschachtelt
    in `accepted_concepts` statt in einer eigenen Spalte. Beides hier
    eingeebnet, damit der Rest der Datei nur einen Fall kennt.
    """
    tab = TABELLE[sprache]
    if sprache == "de":
        roh = alle(f"{tab}?select=id,german,accepted_concepts")
        return tab, [dict(z, target_text=z["german"],
                          verb_cluster=(z.get("accepted_concepts") or {}).get("verb_cluster"))
                     for z in roh]
    return tab, alle(f"{tab}?select=id,german,target_text,accepted_concepts,verb_cluster")


def bericht(sprache, zeige_lang=False):
    formen, rang, warnungen = baue_familien(sprache)
    tab, saetze = lade_saetze(sprache)

    for w in warnungen:
        print("  ! " + w)

    zugeordnet, ohne = {}, []
    for s in saetze:
        # Eine BESTEHENDE Zuordnung wird nie ueberschrieben.
        #
        # Fuer Deutsch ist das entscheidend: die 60 Master-Saetze mit Cluster
        # sind einzeln durchgegangen worden, und drei der Cluster
        # (`fahren_reisen`, `gehen_wegbeschreibung`, `gehen_freizeitweg`)
        # gelten ausdruecklich nur fuer bestimmte Saetze - "kein pauschales
        # 'alle Bewegungsverben sind synonym'", siehe CLAUDE.md. Ein
        # automatischer Lauf wuerde genau diese Feinheit einebnen.
        #
        # Fuer die anderen Sprachen aendert die Regel nichts, solange der
        # Lauf wiederholbar ist: er ordnet ohnehin dasselbe zu. Wer eine
        # Zuordnung wirklich neu berechnen will, leert die Spalte vorher.
        if s.get("verb_cluster"):
            zugeordnet[s["id"]] = s["verb_cluster"]
            continue
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
        # Den Vorschlag als Datei ablegen, damit
        # `npm run pruefe:konzepte -- --vorschlag` ihn gegen den ECHTEN
        # Bewerter halten kann, BEVOR etwas in die Datenbank geht. Ohne
        # diesen Zwischenschritt bliebe nur "einspielen und hoffen" - und die
        # Datenbank ist live: die App laedt `answer_clusters` bei jedem
        # Start neu, ein Schreibvorgang aendert also sofort, wie eine
        # bereits ausgelieferte App bewertet.
        ziel = os.path.join(HIER, "vorschlag")
        os.makedirs(ziel, exist_ok=True)
        datei = os.path.join(ziel, f"{sprache}.json")
        with open(datei, "w", encoding="utf-8") as f:
            json.dump({"cluster": {c: formen[c] for c in sorted(gebraucht)},
                       "zuordnung": {str(k): v for k, v in zugeordnet.items()}},
                      f, ensure_ascii=False, indent=1)
        print(f"\n  Probelauf - nichts geschrieben. Vorschlag: {datei}")
        print("  Pruefen mit: npm run pruefe:konzepte -- --vorschlag")
        return

    rest("answer_clusters?on_conflict=cluster_id", "POST", cluster_zeilen,
         {"Prefer": "resolution=merge-duplicates,return=minimal"})
    print("  answer_clusters geschrieben.")

    # WOHIN der Cluster geschrieben wird, ist je Tabelle verschieden.
    #
    # `phrasebook_master` hat gar keine `verb_cluster`-Spalte - dort steckt er
    # verschachtelt in `accepted_concepts`, und genau von dort liest ihn auch
    # die App (siehe phrasebookContent.ts, `lang.id !== 'de'`). Ein PATCH auf
    # eine Spalte, die es nicht gibt, haette nichts bewirkt.
    konzepteVon = {s["id"]: (s.get("accepted_concepts") or {}) for s in saetze}
    for i, (sid, cid) in enumerate(aenderungen, 1):
        if sprache == "de":
            ac = dict(konzepteVon.get(sid, {}))
            ac["verb_cluster"] = cid
            koerper = {"accepted_concepts": ac}
        else:
            koerper = {"verb_cluster": cid}
        rest(f"{tab}?id=eq.{sid}", "PATCH", koerper, {"Prefer": "return=minimal"})
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
