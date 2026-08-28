# -*- coding: utf-8 -*-
"""
Sprachneutrale Verb-/Konzept-Cluster (das clusters.json aus
SPRACHTEMPLATE_MASTER.md, hier als Python-Quelle). Jeder Cluster sammelt
alle relevanten Konjugationsformen UND sinnverwandte Verben an einer
zentralen Stelle, damit accepted_concepts in phrasebook_master nicht pro
Satz eigene Formlisten pflegen muss.

Verwendung: ein Satz referenziert einen Cluster ueber
accepted_concepts.verb_cluster (z.B. "moegen_lieben") statt die Formen
selbst aufzulisten. Die App laedt CLUSTERS einmal und nutzt sie fuer die
"Richtig-Niveau"-Pruefung (richtiges Verb erkannt, Konjugation egal).

Prioritaet lag auf unregelmaessigen Verben und echten Synonym-Familien
(mögen/lieben, wollen/moechten/brauchen/haben-als-Wunsch) - dort bringt ein
Cluster den groessten Mehrwert, weil einfache Tippfehler-Toleranz die
Konjugationsspruenge nicht abdeckt. Regelmaessige Verben sind trotzdem mit
aufgenommen, schadet nicht und deckt Personalformen ab, die die Toleranz
allein nicht immer abdeckt.
"""

CLUSTERS = {
    # --- Wunsch/Bedarf: "ich das haben/wollen/brauchen" gilt alles als
    #     "ich moechte das" - genau der vom Nutzer beschriebene Fall ---
    "wunsch_bedarf": [
        "möchte", "möchtest", "möchten", "will", "willst", "wollen", "wollt",
        "brauche", "brauchst", "braucht", "brauchen", "hätte", "hättest", "hätten",
        "habe", "hast", "hat", "haben",
    ],
    "moegen_lieben": [
        "mag", "magst", "mögt", "mögen", "möchte", "möchtest", "möchten",
        "liebe", "liebst", "liebt", "lieben", "gefällt", "gefallen",
    ],
    "sein": ["bin", "bist", "ist", "sind", "seid", "war", "warst", "waren"],
    "haben": ["habe", "hast", "hat", "haben", "habt", "hatte", "hattest", "hatten"],
    "kommen": ["komme", "kommst", "kommt", "kommen", "kam", "kamst", "kamen", "gekommen"],
    "heissen": ["heiße", "heisse", "heißt", "heisst", "heißen", "heissen"],
    "sprechen": ["spreche", "sprichst", "spricht", "sprechen", "sprach"],
    "verstehen": ["verstehe", "verstehst", "versteht", "verstehen", "verstand"],
    "wiederholen": ["wiederhole", "wiederholst", "wiederholt", "wiederholen"],
    "sagen": ["sage", "sagst", "sagt", "sagen", "gesagt"],
    "wohnen": ["wohne", "wohnst", "wohnt", "wohnen"],
    "gehen": ["gehe", "gehst", "geht", "gehen", "ging", "gegangen"],
    "fahren": ["fahre", "fährst", "fährt", "fahren", "fuhr", "gefahren"],
    "kaufen": ["kaufe", "kaufst", "kauft", "kaufen", "gekauft"],
    "bestellen": ["bestelle", "bestellst", "bestellt", "bestellen", "bestellt"],
    "reservieren": ["reserviere", "reservierst", "reserviert", "reservieren"],
    "kosten": ["kostet", "kosten", "kostete"],
    "suchen": ["suche", "suchst", "sucht", "suchen", "gesucht"],
    "finden": ["finde", "findest", "findet", "finden", "gefunden"],
    "helfen": ["helfe", "hilfst", "hilft", "helfen", "geholfen"],
    "funktionieren": ["funktioniert", "funktionieren"],
    "schliessen": ["schließe", "schließt", "schliesst", "schließen", "schliessen", "zu"],
    "oeffnen": ["öffne", "öffnest", "öffnet", "öffnen", "offen"],
    "beginnen": ["beginne", "beginnst", "beginnt", "beginnen", "begann"],
    "vergessen": ["vergesse", "vergisst", "vergessen", "vergaß"],
    "verlieren": ["verliere", "verlierst", "verliert", "verlieren", "verloren"],
    "buchen": ["buche", "buchst", "bucht", "buchen", "gebucht"],
    "bezahlen": ["bezahle", "bezahlst", "bezahlt", "bezahlen", "zahle", "zahlst", "zahlt", "zahlen"],
    "ausleihen": ["leihe", "leihst", "leiht", "ausleihen", "leihe aus"],
    "empfehlen": ["empfehle", "empfiehlst", "empfiehlt", "empfehlen"],
    "spielen": ["spiele", "spielst", "spielt", "spielen"],
    "interessieren": ["interessiere", "interessiert", "interessieren"],

    # --- Neu (2026-08-08): satzspezifische Zusammenlegungen statt einer
    #     pauschalen "Bewegungsverben"-Gruppe. "fahren" und "gehen" bleiben
    #     als eigene Cluster bestehen (oben), weil sie NICHT generell
    #     synonym sind (zu Fuss vs. mit Fahrzeug) - diese drei zusaetzlichen
    #     Cluster gelten nur fuer die konkreten Saetze, wo die Verben im
    #     Kontext tatsaechlich austauschbar sind, siehe wire_verb_clusters.sql
    #     fuer die genaue Zuordnung. ---
    "fahren_reisen": ["fahre", "fährst", "fährt", "fahren", "fuhr", "gefahren",
                       "reise", "reist", "reisen", "reiste", "gereist"],
    "gehen_wegbeschreibung": ["gehe", "gehst", "geht", "gehen", "ging", "gegangen",
                              "fahre", "fährst", "fährt", "fahren", "fuhr", "gefahren",
                              "laufe", "läufst", "läuft", "laufen", "lief", "gelaufen"],
    "gehen_freizeitweg": ["gehe", "gehst", "geht", "gehen", "ging", "gegangen",
                          "fahre", "fährst", "fährt", "fahren", "fuhr", "gefahren"],
}
