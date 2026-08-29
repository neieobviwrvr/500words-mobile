# -*- coding: utf-8 -*-
"""Repariert Konzepte, die im eigenen Zielsatz gar nicht vorkommen.

Gefunden am 2026-08-29 durch eine neue Pruefung (siehe
uebersetzen/pruefe_konzepte.py): fuer jeden Satz muss von jedem
PFLICHT-Konzept mindestens ein Synonym im Zielsatz stehen. Sonst ist der Satz
UNLOESBAR - wer die Musterantwort exakt sagt, faellt trotzdem durch, weil
`evaluateConcepts` alle required-Gruppen verlangt.

Es waren 14 Faelle in vier Sprachen. Zwei Ursachen:

  Mehrwort-Synonyme  "autobús al aeropuerto" gegen den echten Satz
                     "¿Qué autobús va al aeropuerto?" - das "va" dazwischen
                     bricht den Treffer. Betrifft es und sv.
  Falsche Vokabel    Der chinesische Satz sagt etwas anderes, als die
                     Konzepte behaupten: 请帮我报警 (zur Polizei melden)
                     gegen die Konzepte 叫 + 警察 (rufen + Polizei).

**Diese Fehler sind aelter als die Zusammenfuehrung vom 2026-08-27.** Das
Umschluesseln der deutschen Glosse dort hat sie nur sichtbar gemacht, nicht
verursacht - Konzepte und Zieltext gehoerten von Anfang an nicht zusammen.

Ausserdem zwei ECHTE DUBLETTEN in chinesisch_phrasebook: identischer Satz,
identischer Text, zwei Zeilen. Sie stammen aus der Migration
20260825150000_teil3_neue_saetze.sql, die Saetze eingespielt hat, die es
schon gab. Behalten wird jeweils die Zeile, deren Konzepte zum Text passen.

Nutzung:  python konzepte_reparieren.py          (Probelauf)
          python konzepte_reparieren.py --echt
"""
import json
import os
import sys
import urllib.request

HIER = os.path.dirname(os.path.abspath(__file__))
SPRACHLISTEN = os.path.dirname(HIER)

# (Tabelle, Zeilen-ID, {konzept: [neue synonyme]})
KORREKTUREN = [
    # --- Spanisch: Mehrwort-Synonyme, die im Satz auseinandergerissen sind
    ("spanisch_phrasebook", "Welcher Bus fährt zum Flughafen?",
     {"bus_flughafen": ["autobús", "qué autobús"]}),
    ("spanisch_phrasebook", "Ich habe morgen eine Prüfung.",
     {"pruefung_morgen": ["examen", "mañana"]}),
    # --- Schwedisch: dito, je ein Wort steht dazwischen
    ("schwedisch_phrasebook", "Ich habe meinen Schlüssel verloren.",
     {"schluessel_verloren": ["tappat bort", "tappat", "nyckel"]}),
    ("schwedisch_phrasebook", "Das Essen schmeckt sehr gut.",
     {"schmeckt_gut": ["smakar", "gott", "bra"]}),
    ("schwedisch_phrasebook", "Wo kann ich mein Gepäck aufgeben?",
     {"gepaeck_aufgeben": ["checka in", "bagage"]}),
    # --- Chinesisch: die Konzepte beschreiben einen anderen Satz als den
    #     gespeicherten. Ersetzt durch das, was wirklich dasteht.
    ("chinesisch_phrasebook", "Bitte rufen Sie die Polizei.",
     {"rufen": ["报警", "帮"], "polizei": ["报警", "警"]}),
    ("chinesisch_phrasebook", "In meinem Hotel geht das nicht.",
     {"nicht_koennen": ["不太方便", "不方便", "方便"]}),
    ("chinesisch_phrasebook", "Meine Freunde kommen später.",
     {"spaeter": ["晚点", "晚"]}),
    ("chinesisch_phrasebook", "Sind deine Haare neu?",
     {"haare": ["发型"], "neu": ["换"]}),
    ("chinesisch_phrasebook", "Ich suche ein Geschenk für meine Mutter.",
     {"suchen": ["买", "想"]}),
]

# Echte Dubletten: (Tabelle, ID die WEGFAELLT, ID die BLEIBT, Begruendung)
DUBLETTEN = [
    ("chinesisch_phrasebook", 316, 497,
     "beide 我要退房。 - 316 traegt gehen=走, was im Text gar nicht vorkommt; "
     "497 traegt auschecken=退房 und passt"),
    ("chinesisch_phrasebook", 482, 356,
     "beide 公交车站在哪里？ - 356 traegt zwei passende Konzepte "
     "(bus + wo), 482 nur eins"),
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


def q(s):
    return urllib.parse.quote(s, safe="")


def main():
    echt = "--echt" in sys.argv
    url, key = lies_env("SUPABASE_URL"), lies_env("SUPABASE_SERVICE_ROLE_KEY")

    fehler, plan = [], []
    for tab, deutsch, neu_syn in KORREKTUREN:
        zeilen = rest(url, key, f"{tab}?select=id,target_text,accepted_concepts"
                                f"&german=eq.{q(deutsch)}")
        if not zeilen:
            fehler.append(f"{tab}: {deutsch!r} nicht gefunden")
            continue
        for z in zeilen:
            ac = z["accepted_concepts"]
            req = ac.get("required", [])
            unbekannt = set(neu_syn) - {g["concept"] for g in req}
            if unbekannt:
                fehler.append(f"{tab} id={z['id']}: Konzept(e) {sorted(unbekannt)} gibt es dort nicht")
                continue
            neu_req = [{"concept": g["concept"],
                        "synonyms": neu_syn.get(g["concept"], g["synonyms"])} for g in req]
            t = (z["target_text"] or "").lower()
            offen = [g["concept"] for g in neu_req
                     if not any(s.lower() in t for s in g["synonyms"])]
            if offen:
                fehler.append(f"{tab} id={z['id']}: nach der Korrektur passt {offen} "
                              f"immer noch nicht zu {z['target_text']!r}")
                continue
            if neu_req != req:
                plan.append((tab, z["id"], z["target_text"], req, neu_req))

    dub_plan = []
    for tab, weg, bleibt, grund in DUBLETTEN:
        w = rest(url, key, f"{tab}?select=id,german,target_text&id=eq.{weg}")
        b = rest(url, key, f"{tab}?select=id&id=eq.{bleibt}")
        if not w and b:
            print(f"  schon bereinigt: {tab} id={weg}")
            continue
        if not w or not b:
            fehler.append(f"{tab}: id {weg} oder {bleibt} nicht gefunden")
            continue
        dub_plan.append((tab, weg, w[0]["german"], w[0]["target_text"], grund))

    if fehler:
        print(f"{len(fehler)} FEHLER - es wird nichts geschrieben:")
        for f in fehler:
            print("  X " + f)
        sys.exit(1)

    print(f"Konzept-Korrekturen: {len(plan)}   Dubletten zu loeschen: {len(dub_plan)}")
    print()
    for tab, zid, text, alt, neu in plan:
        print(f"  {tab} id={zid}  {text}")
        for a, n in zip(alt, neu):
            if a != n:
                print(f"     {a['concept']}: {a['synonyms']} -> {n['synonyms']}")
    print()
    for tab, zid, deutsch, text, grund in dub_plan:
        print(f"  LOESCHEN {tab} id={zid}  {deutsch!r} / {text}")
        print(f"     {grund}")

    if not echt:
        print("\nPROBELAUF - nichts geschrieben. Mit --echt anwenden.")
        return

    for tab, zid, _, _, neu in plan:
        rest(url, key, f"{tab}?id=eq.{zid}", "PATCH",
             {"accepted_concepts": {"required": neu, "optional": []}})
    for tab, zid, _, _, _ in dub_plan:
        rest(url, key, f"{tab}?id=eq.{zid}", "DELETE")
    print(f"\nFertig. {len(plan)} Zeilen korrigiert, {len(dub_plan)} Dubletten geloescht.")


if __name__ == "__main__":
    import urllib.parse
    main()
