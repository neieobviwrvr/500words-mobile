# -*- coding: utf-8 -*-
"""
Schwedische Verb-Cluster, Gegenstueck zu clusters_master.py (Deutsch).
Deckt genau die 25 Cluster ab, die tatsaechlich auf einen der 37
phrasebook_master-Saetze mit verb_cluster referenziert sind (nicht alle 32
deutschen Cluster - die uebrigen 7, z.B. wunsch_bedarf/moegen_lieben/sein/
haben/gehen/fahren/kosten, sind auf keinem der 37 Saetze als PRIMAERER
Cluster gesetzt, siehe evaluateConcepts.ts-Kommentar zur "wunsch_bedarf"-
Zusatzlogik, die separat bei den required-Konzepten laeuft, nicht ueber
verb_cluster - fuer Schwedisch noch NICHT nachgezogen).

WICHTIG - Cluster-IDs sind mit "sv_" praefixt (sv_heissen statt heissen):
answer_clusters.cluster_id ist ein sprachneutraler PRIMARY KEY ueber die
GESAMTE Tabelle (keine language-Spalte). Ohne Praefix wuerden die
schwedischen Wortformen die deutschen unter demselben Cluster-Namen
ueberschreiben und Deutsch kaputt machen. Deutsche Cluster bleiben deshalb
bewusst unpraefixt (kein Migrations-Risiko fuer bestehende Daten), nur die
neuen schwedischen sind praefixt - Asymmetrie in Kauf genommen, siehe
CLAUDE.md.

Schwedische Verbkonjugation ist deutlich einfacher als Deutsch: KEINE
Personendifferenzierung (nur eine Praesens-Form fuer ich/du/er/wir/...),
nur Tempus-Formen. Pro Cluster: Praesens, Preteritum (Vergangenheit),
Supinum (fuer Perfekt mit "har"), Infinitiv. Bei echten Synonym-Verben
(z.B. tala/prata fuer "sprechen", hitta/finna fuer "finden", tappa/foerlora
fuer "verlieren") beide Verbfamilien aufgenommen, weil die schwedische
Uebersetzung selbst schon zwischen beiden wechselt (siehe Saetze 20 vs. 22).

Nicht von Muttersprachlern geprueft - Grammatik/Konjugationsformen sind
nach bestem Wissen korrekt (Schwedisch hat regelmaessige, gut dokumentierte
Konjugationsmuster), aber ein Spot-Check waere sinnvoll, siehe CLAUDE.md
Satz-Auswahl-Methodik-Vorbehalt.
"""

CLUSTERS = {
    "sv_heissen": ["heter", "hette", "hetat", "heta"],
    "sv_kommen": ["kommer", "kom", "kommit", "komma"],
    "sv_sprechen": ["talar", "talade", "talat", "tala", "pratar", "pratade", "pratat", "prata"],
    "sv_verstehen": ["förstår", "förstod", "förstått", "förstå"],
    "sv_wiederholen": ["upprepar", "upprepade", "upprepat", "upprepa"],
    "sv_sagen": ["säger", "sa", "sade", "sagt", "säga"],
    "sv_wohnen": ["bor", "bodde", "bott", "bo"],
    "sv_beginnen": ["börjar", "började", "börjat", "börja"],
    "sv_funktionieren": ["fungerar", "fungerade", "fungerat", "fungera"],
    "sv_verlieren": ["tappar", "tappade", "tappat", "tappa", "förlorar", "förlorade", "förlorat", "förlora"],
    "sv_buchen": ["bokar", "bokade", "bokat", "boka"],
    "sv_empfehlen": ["rekommenderar", "rekommenderade", "rekommenderat", "rekommendera"],
    "sv_bezahlen": ["betalar", "betalade", "betalat", "betala"],
    "sv_bestellen": ["beställer", "beställde", "beställt", "beställa"],
    "sv_reservieren": ["reserverar", "reserverade", "reserverat", "reservera"],
    "sv_suchen": ["söker", "sökte", "sökt", "söka"],
    "sv_schliessen": ["stänger", "stängde", "stängt", "stänga"],
    "sv_helfen": ["hjälper", "hjälpte", "hjälpt", "hjälpa"],
    "sv_kaufen": ["köper", "köpte", "köpt", "köpa"],
    "sv_vergessen": ["glömmer", "glömde", "glömt", "glömma"],
    "sv_finden": ["hittar", "hittade", "hittat", "hitta", "finner", "fann", "funnit", "finna"],
    "sv_ausleihen": ["lånar", "lånade", "lånat", "låna"],
    "sv_interessieren": ["intresserar", "intresserade", "intresserat", "intressera"],
    "sv_oeffnen": ["öppnar", "öppnade", "öppnat", "öppna"],
    "sv_spielen": ["spelar", "spelade", "spelat", "spela"],
}

# Zuordnung: welcher deutsche Cluster-Name (aus clusters_master.py) entspricht
# welchem schwedischen? Nur zur Nachvollziehbarkeit/Wartung, wird von der App
# nicht gelesen.
DE_TO_SV_CLUSTER = {
    "heissen": "sv_heissen",
    "kommen": "sv_kommen",
    "sprechen": "sv_sprechen",
    "verstehen": "sv_verstehen",
    "wiederholen": "sv_wiederholen",
    "sagen": "sv_sagen",
    "wohnen": "sv_wohnen",
    "beginnen": "sv_beginnen",
    "funktionieren": "sv_funktionieren",
    "verlieren": "sv_verlieren",
    "buchen": "sv_buchen",
    "empfehlen": "sv_empfehlen",
    "bezahlen": "sv_bezahlen",
    "bestellen": "sv_bestellen",
    "reservieren": "sv_reservieren",
    "suchen": "sv_suchen",
    "schliessen": "sv_schliessen",
    "helfen": "sv_helfen",
    "kaufen": "sv_kaufen",
    "vergessen": "sv_vergessen",
    "finden": "sv_finden",
    "ausleihen": "sv_ausleihen",
    "interessieren": "sv_interessieren",
    "oeffnen": "sv_oeffnen",
    "spielen": "sv_spielen",
}
