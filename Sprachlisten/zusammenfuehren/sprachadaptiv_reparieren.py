# -*- coding: utf-8 -*-
"""Repariert vier sprachadaptive Saetze auf Spanisch und Schwedisch.

Gefunden am 2026-08-27 beim Aufsetzen von Franzoesisch.

**Der Fehler.** Zwei Saetze des Grundwortschatzes nennen die ZIELSPRACHE im
Text. Chinesisch und Franzoesisch tragen deshalb ihre eigene deutsche Fassung
("Ich spreche ein bisschen Chinesisch." / "... Franzoesisch.") - das ist die
sprachadaptive Klasse, die entscheidungen.py dokumentiert. Spanisch und
Schwedisch behielten dagegen die deutsche Master-Fassung UND uebersetzten sie
woertlich:

  DE-Gloss "Ich spreche ein bisschen Deutsch."  ES "Hablo un poco de alemán."
  DE-Gloss "Wie sagt man das auf Deutsch?"      ES "¿Cómo se dice eso en alemán?"

Aus Nutzersicht ist das verkehrt herum: wer Spanisch lernt, will sagen, dass
er ein bisschen SPANISCH spricht. Der Screen zeigt die deutsche Zeile als
Aufgabe und erwartet die Zielsprache als Antwort - hier lernte man also, auf
Spanisch ueber Deutsch zu reden.

**Was repariert wird** (je Zeile: deutscher Gloss, Zielsatz UND die
Konzept-Synonyme, die auf "alemán"/"tyska" zeigen):

  es id=21  -> "Ich spreche ein bisschen Spanisch."   "Hablo un poco de español."
  es id=25  -> "Wie sagt man das auf Spanisch?"       "¿Cómo se dice eso en español?"
  sv id=21  -> "Ich spreche ein bisschen Schwedisch." "Jag talar lite svenska."
  sv id=25  -> "Wie sagt man das auf Schwedisch?"     "Hur säger man det på svenska?"

**Was ausdruecklich NICHT angefasst wird:**

  phrasebook_master   Dort sind beide Saetze RICHTIG - fuer jemanden, der
                      Deutsch lernt, ist "Deutsch" die Zielsprache.
  Sprichst du Englisch?   Englisch ist eine neutrale dritte Sprache, in allen
                      Tabellen korrekt.
  Ich komme aus Deutschland.  Der Lernende IST Deutscher, das bleibt.
  Ich unterrichte Chinesisch. (es)  Ein Beruf, keine Aussage ueber die
                      Lernsituation - siehe rest_es.py.

**Der Konzept-Schluessel `bisschen_deutsch` bleibt, wie er ist.** Konzept-
Schluessel sind sprachneutrale interne Bezeichner (siehe build_spanisch.py);
sie umzubenennen wuerde nichts verbessern und den Abgleich mit anderen
Sprachen brechen. Nur die SYNONYME werden angepasst, denn die sind der
tatsaechlich gepruefte Text.

Nutzung:  python sprachadaptiv_reparieren.py          (Probelauf)
          python sprachadaptiv_reparieren.py --echt
"""
import json
import os
import sys
import urllib.request

HIER = os.path.dirname(os.path.abspath(__file__))
SPRACHLISTEN = os.path.dirname(HIER)

# (Tabelle, deutscher Gloss ALT, deutscher Gloss NEU, Zielsatz NEU,
#  {konzept: [synonyme NEU]})
REPARATUREN = [
    ("spanisch_phrasebook",
     "Ich spreche ein bisschen Deutsch.",
     "Ich spreche ein bisschen Spanisch.",
     "Hablo un poco de español.",
     {"bisschen_deutsch": ["un poco de español", "algo de español"]}),
    ("spanisch_phrasebook",
     "Wie sagt man das auf Deutsch?",
     "Wie sagt man das auf Spanisch?",
     "¿Cómo se dice eso en español?",
     {"wie_sagt_man": ["cómo se dice", "en español"]}),
    ("schwedisch_phrasebook",
     "Ich spreche ein bisschen Deutsch.",
     "Ich spreche ein bisschen Schwedisch.",
     "Jag talar lite svenska.",
     {"bisschen_deutsch": ["lite svenska", "svenska"]}),
    ("schwedisch_phrasebook",
     "Wie sagt man das auf Deutsch?",
     "Wie sagt man das auf Schwedisch?",
     "Hur säger man det på svenska?",
     {"wie_sagt_man": ["hur säger man", "på svenska"]}),
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
    url, key = lies_env("SUPABASE_URL"), lies_env("SUPABASE_SERVICE_ROLE_KEY")

    aufgaben, fehler = [], []
    for tab, alt, neu, ziel, syn_neu in REPARATUREN:
        treffer = rest(url, key, f"{tab}?select=id,german,target_text,accepted_concepts"
                                 f"&german=eq.{urllib.parse.quote(alt)}")
        if not treffer:
            # Schon repariert? Dann steht die neue Fassung da.
            fertig = rest(url, key, f"{tab}?select=id&german=eq.{urllib.parse.quote(neu)}")
            if fertig:
                print(f"  schon repariert: {tab} {neu!r}")
                continue
            fehler.append(f"{tab}: weder {alt!r} noch {neu!r} gefunden")
            continue
        if len(treffer) > 1:
            fehler.append(f"{tab}: {alt!r} kommt {len(treffer)}x vor - "
                          f"Reparatur waere mehrdeutig")
            continue
        z = treffer[0]
        ac = z["accepted_concepts"]
        neue_req = []
        for g in ac.get("required", []):
            neue_req.append({"concept": g["concept"],
                             "synonyms": syn_neu.get(g["concept"], g["synonyms"])})
        unbekannt = set(syn_neu) - {g["concept"] for g in ac.get("required", [])}
        if unbekannt:
            fehler.append(f"{tab} id={z['id']}: Konzept(e) {sorted(unbekannt)} gibt es dort nicht")
            continue
        aufgaben.append((tab, z["id"], z["target_text"], ziel, neu,
                         {"german": neu, "target_text": ziel,
                          "accepted_concepts": {"required": neue_req,
                                                "optional": ac.get("optional", [])}}))

    if fehler:
        print(f"{len(fehler)} FEHLER - es wird nichts geschrieben:")
        for f in fehler:
            print("  X " + f)
        sys.exit(1)

    print(f"Zu reparieren: {len(aufgaben)}")
    for tab, zid, alt_ziel, neu_ziel, neu_de, _ in aufgaben:
        print(f"  {tab} id={zid}")
        print(f"    {alt_ziel!r}")
        print(f"    -> {neu_ziel!r}   (Gloss: {neu_de!r})")

    if not aufgaben:
        return
    if not echt:
        print("\nPROBELAUF - nichts geschrieben. Mit --echt reparieren.")
        return

    for tab, zid, _, _, _, koerper in aufgaben:
        rest(url, key, f"{tab}?id=eq.{zid}", "PATCH", koerper)
    print(f"\nFertig. {len(aufgaben)} Zeilen repariert.")


if __name__ == "__main__":
    import urllib.parse
    main()
