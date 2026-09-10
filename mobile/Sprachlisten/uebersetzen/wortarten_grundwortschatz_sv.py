# -*- coding: utf-8 -*-
"""Wort-fuer-Wort-Tagging fuer schwedisch_phrasebook/grundwortschatz.

Simons Auftrag (2026-08-30): Nomen/Verb/Adjektiv/Konjunktion taggen,
alles andere bleibt ungefaerbt. Erzeugt aus _erzeuge_grundwortschatz_sv.py
(Einmal-Helfer) - die Woerter kommen direkt aus den Live-Saetzen, nur die
Tag-Codes sind von Hand klassifiziert.

**Keine Konjunktion im Bestand** - wie schon im deutschen Grundwortschatz:
die Saetze sind zu kurz/einfach fuer echte Satzverbindungen (und/aber/weil),
kein erzwungener Fehltreffer. Erste Konjunktionen sind eher in laengeren
Kategorien (Club, Job, Hotel) zu erwarten.
"""

TAGS = [
    {"id": 1, "tags": [{"w": 'Hej!', "c": None}]},  # Hej!
    {"id": 2, "tags": [{"w": 'God', "c": 'a'}, {"w": 'morgon!', "c": 'n'}]},  # God morgon!
    {"id": 3, "tags": [{"w": 'God', "c": 'a'}, {"w": 'dag!', "c": 'n'}]},  # God dag!
    {"id": 4, "tags": [{"w": 'God', "c": 'a'}, {"w": 'kväll!', "c": 'n'}]},  # God kväll!
    {"id": 5, "tags": [{"w": 'Hur', "c": None}, {"w": 'mår', "c": 'v'}, {"w": 'du?', "c": None}]},  # Hur mår du?
    {"id": 6, "tags": [{"w": 'Jag', "c": None}, {"w": 'mår', "c": 'v'}, {"w": 'bra,', "c": 'a'}, {"w": 'tack.', "c": None}]},  # Jag mår bra, tack.
    {"id": 7, "tags": [{"w": 'Vad', "c": None}, {"w": 'heter', "c": 'v'}, {"w": 'du?', "c": None}]},  # Vad heter du?
    {"id": 8, "tags": [{"w": 'Jag', "c": None}, {"w": 'heter', "c": 'v'}, {"w": 'Anna.', "c": 'n'}]},  # Jag heter Anna.
    {"id": 9, "tags": [{"w": 'Varifrån', "c": None}, {"w": 'kommer', "c": 'v'}, {"w": 'du?', "c": None}]},  # Varifrån kommer du?
    {"id": 10, "tags": [{"w": 'Jag', "c": None}, {"w": 'kommer', "c": 'v'}, {"w": 'från', "c": None}, {"w": 'Tyskland.', "c": 'n'}]},  # Jag kommer från Tyskland.
    {"id": 11, "tags": [{"w": 'Hur', "c": None}, {"w": 'gammal', "c": 'a'}, {"w": 'är', "c": 'v'}, {"w": 'du?', "c": None}]},  # Hur gammal är du?
    {"id": 12, "tags": [{"w": 'Jag', "c": None}, {"w": 'är', "c": 'v'}, {"w": '25', "c": None}, {"w": 'år', "c": 'n'}, {"w": 'gammal.', "c": 'a'}]},  # Jag är 25 år gammal.
    {"id": 13, "tags": [{"w": 'Trevligt', "c": 'a'}, {"w": 'att', "c": None}, {"w": 'träffas.', "c": 'v'}]},  # Trevligt att träffas.
    {"id": 14, "tags": [{"w": 'Adjö!', "c": None}]},  # Adjö!
    {"id": 15, "tags": [{"w": 'Vi', "c": None}, {"w": 'ses', "c": 'v'}, {"w": 'senare!', "c": None}]},  # Vi ses senare!
    {"id": 16, "tags": [{"w": 'Hej', "c": None}, {"w": 'då!', "c": None}]},  # Hej då!
    {"id": 20, "tags": [{"w": 'Talar', "c": 'v'}, {"w": 'du', "c": None}, {"w": 'engelska?', "c": 'n'}]},  # Talar du engelska?
    {"id": 21, "tags": [{"w": 'Jag', "c": None}, {"w": 'talar', "c": 'v'}, {"w": 'lite', "c": None}, {"w": 'svenska.', "c": 'n'}]},  # Jag talar lite svenska.
    {"id": 22, "tags": [{"w": 'Kan', "c": 'v'}, {"w": 'du', "c": None}, {"w": 'prata', "c": 'v'}, {"w": 'långsammare?', "c": 'a'}]},  # Kan du prata långsammare?
    {"id": 23, "tags": [{"w": 'Jag', "c": None}, {"w": 'förstår', "c": 'v'}, {"w": 'inte.', "c": None}]},  # Jag förstår inte.
    {"id": 24, "tags": [{"w": 'Kan', "c": 'v'}, {"w": 'du', "c": None}, {"w": 'upprepa', "c": 'v'}, {"w": 'det?', "c": None}]},  # Kan du upprepa det?
    {"id": 25, "tags": [{"w": 'Hur', "c": None}, {"w": 'säger', "c": 'v'}, {"w": 'man', "c": None}, {"w": 'det', "c": None}, {"w": 'på', "c": None}, {"w": 'svenska?', "c": 'n'}]},  # Hur säger man det på svenska?
    {"id": 32, "tags": [{"w": 'Vad', "c": None}, {"w": 'är', "c": 'v'}, {"w": 'klockan?', "c": 'n'}]},  # Vad är klockan?
    {"id": 33, "tags": [{"w": 'Klockan', "c": 'n'}, {"w": 'är', "c": 'v'}, {"w": 'tre.', "c": None}]},  # Klockan är tre.
    {"id": 34, "tags": [{"w": 'Hur', "c": None}, {"w": 'dags', "c": None}, {"w": 'börjar', "c": 'v'}, {"w": 'filmen?', "c": 'n'}]},  # Hur dags börjar filmen?
    {"id": 35, "tags": [{"w": 'När', "c": None}, {"w": 'har', "c": 'v'}, {"w": 'du', "c": None}, {"w": 'tid?', "c": 'n'}]},  # När har du tid?
    {"id": 36, "tags": [{"w": 'Jag', "c": None}, {"w": 'har', "c": 'v'}, {"w": 'inte', "c": None}, {"w": 'tid', "c": 'n'}, {"w": 'imorgon.', "c": None}]},  # Jag har inte tid imorgon.
    {"id": 37, "tags": [{"w": 'Kan', "c": 'v'}, {"w": 'vi', "c": None}, {"w": 'träffas', "c": 'v'}, {"w": 'nästa', "c": 'a'}, {"w": 'vecka?', "c": 'n'}]},  # Kan vi träffas nästa vecka?
    {"id": 38, "tags": [{"w": 'Jag', "c": None}, {"w": 'har', "c": 'v'}, {"w": 'en', "c": None}, {"w": 'tid', "c": 'n'}, {"w": 'klockan', "c": 'n'}, {"w": '10.', "c": None}]},  # Jag har en tid klockan 10.
    {"id": 39, "tags": [{"w": 'Vilken', "c": None}, {"w": 'dag', "c": 'n'}, {"w": 'är', "c": 'v'}, {"w": 'det', "c": None}, {"w": 'idag?', "c": None}]},  # Vilken dag är det idag?
    {"id": 40, "tags": [{"w": 'Idag', "c": None}, {"w": 'är', "c": 'v'}, {"w": 'det', "c": None}, {"w": 'måndag.', "c": 'n'}]},  # Idag är det måndag.
    {"id": 41, "tags": [{"w": 'När', "c": None}, {"w": 'har', "c": 'v'}, {"w": 'du', "c": None}, {"w": 'födelsedag?', "c": 'n'}]},  # När har du födelsedag?
    {"id": 42, "tags": [{"w": 'Min', "c": None}, {"w": 'födelsedag', "c": 'n'}, {"w": 'är', "c": 'v'}, {"w": 'i', "c": None}, {"w": 'mars.', "c": 'n'}]},  # Min födelsedag är i mars.
    {"id": 43, "tags": [{"w": 'Hur', "c": None}, {"w": 'mycket', "c": None}, {"w": 'kostar', "c": 'v'}, {"w": 'det?', "c": None}]},  # Hur mycket kostar det?
    {"id": 44, "tags": [{"w": 'Det', "c": None}, {"w": 'kostar', "c": 'v'}, {"w": 'tio', "c": None}, {"w": 'euro.', "c": 'n'}]},  # Det kostar tio euro.
    {"id": 45, "tags": [{"w": 'Jag', "c": None}, {"w": 'skulle', "c": 'v'}, {"w": 'vilja', "c": 'v'}, {"w": 'ha', "c": 'v'}, {"w": 'notan.', "c": 'n'}]},  # Jag skulle vilja ha notan.
    {"id": 91, "tags": [{"w": 'Var', "c": None}, {"w": 'är', "c": 'v'}, {"w": 'toaletten?', "c": 'n'}]},  # Var är toaletten?
    {"id": 135, "tags": [{"w": 'Hjälp!', "c": 'n'}]},  # Hjälp!
    {"id": 299, "tags": [{"w": 'Tack!', "c": 'n'}]},  # Tack!
    {"id": 300, "tags": [{"w": 'Tack', "c": 'n'}, {"w": 'så', "c": None}, {"w": 'mycket!', "c": None}]},  # Tack så mycket!
    {"id": 301, "tags": [{"w": 'Varsågod.', "c": None}]},  # Varsågod.
    {"id": 302, "tags": [{"w": 'Ursäkta!', "c": 'v'}]},  # Ursäkta!
    {"id": 303, "tags": [{"w": 'Förlåt.', "c": 'v'}]},  # Förlåt.
    {"id": 304, "tags": [{"w": 'Inga', "c": None}, {"w": 'problem.', "c": 'n'}]},  # Inga problem.
    {"id": 305, "tags": [{"w": 'Ja.', "c": None}]},  # Ja.
    {"id": 306, "tags": [{"w": 'Nej.', "c": None}]},  # Nej.
    {"id": 307, "tags": [{"w": 'Jag', "c": None}, {"w": 'vet', "c": 'v'}, {"w": 'inte.', "c": None}]},  # Jag vet inte.
    {"id": 308, "tags": [{"w": 'Ett,', "c": None}, {"w": 'två,', "c": None}, {"w": 'tre.', "c": None}]},  # Ett, två, tre.
    {"id": 309, "tags": [{"w": 'Hur', "c": None}, {"w": 'många?', "c": None}]},  # Hur många?
    {"id": 310, "tags": [{"w": 'Två', "c": None}, {"w": 'stycken,', "c": 'n'}, {"w": 'tack.', "c": 'n'}]},  # Två stycken, tack.
    {"id": 311, "tags": [{"w": 'Bara', "c": None}, {"w": 'en,', "c": None}, {"w": 'tack.', "c": 'n'}]},  # Bara en, tack.
    {"id": 312, "tags": [{"w": 'Det', "c": None}, {"w": 'räcker.', "c": 'v'}]},  # Det räcker.
    {"id": 313, "tags": [{"w": 'Hur', "c": None}, {"w": 'mycket', "c": None}, {"w": 'blir', "c": 'v'}, {"w": 'det', "c": None}, {"w": 'totalt?', "c": None}]},  # Hur mycket blir det totalt?
    {"id": 314, "tags": [{"w": 'Vi', "c": None}, {"w": 'är', "c": 'v'}, {"w": 'fyra', "c": None}, {"w": 'personer.', "c": 'n'}]},  # Vi är fyra personer.
    {"id": 315, "tags": [{"w": 'Jag', "c": None}, {"w": 'behöver', "c": 'v'}, {"w": 'hjälp.', "c": 'n'}]},  # Jag behöver hjälp.
    {"id": 316, "tags": [{"w": 'Var', "c": None}, {"w": 'är', "c": 'v'}, {"w": 'utgången?', "c": 'n'}]},  # Var är utgången?
    {"id": 317, "tags": [{"w": 'Jag', "c": None}, {"w": 'har', "c": 'v'}, {"w": 'tappat', "c": 'v'}, {"w": 'min', "c": None}, {"w": 'mobil.', "c": 'n'}]},  # Jag har tappat min mobil.
    {"id": 318, "tags": [{"w": 'Jag', "c": None}, {"w": 'har', "c": 'v'}, {"w": 'tappat', "c": 'v'}, {"w": 'mitt', "c": None}, {"w": 'pass.', "c": 'n'}]},  # Jag har tappat mitt pass.
    {"id": 319, "tags": [{"w": 'Det', "c": None}, {"w": 'här', "c": None}, {"w": 'är', "c": 'v'}, {"w": 'min', "c": None}, {"w": 'vän.', "c": 'n'}]},  # Det här är min vän.
    {"id": 320, "tags": [{"w": 'Det', "c": None}, {"w": 'är', "c": 'v'}, {"w": 'första', "c": None}, {"w": 'gången', "c": 'n'}, {"w": 'jag', "c": None}, {"w": 'är', "c": 'v'}, {"w": 'här.', "c": None}]},  # Det är första gången jag är här.
    {"id": 321, "tags": [{"w": 'Vad', "c": None}, {"w": 'betyder', "c": 'v'}, {"w": 'det?', "c": None}]},  # Vad betyder det?
    {"id": 322, "tags": [{"w": 'Kan', "c": 'v'}, {"w": 'du', "c": None}, {"w": 'skriva', "c": 'v'}, {"w": 'ner', "c": None}, {"w": 'det?', "c": None}]},  # Kan du skriva ner det?
    {"id": 475, "tags": [{"w": 'Ursäkta,', "c": 'v'}, {"w": 'var', "c": None}, {"w": 'är', "c": 'v'}, {"w": 'toaletten?', "c": 'n'}]},  # Ursäkta, var är toaletten?
    {"id": 476, "tags": [{"w": 'Vi', "c": None}, {"w": 'stannar', "c": 'v'}, {"w": 'fem', "c": None}, {"w": 'minuter.', "c": 'n'}]},  # Vi stannar fem minuter.
    {"id": 477, "tags": [{"w": 'Säg', "c": 'v'}, {"w": 'det', "c": None}, {"w": 'en', "c": None}, {"w": 'gång', "c": 'n'}, {"w": 'till.', "c": None}]},  # Säg det en gång till.
    {"id": 478, "tags": [{"w": 'Är', "c": 'v'}, {"w": 'ni', "c": None}, {"w": 'studenter?', "c": 'n'}]},  # Är ni studenter?
    {"id": 479, "tags": [{"w": 'Jag', "c": None}, {"w": 'har', "c": 'v'}, {"w": 'bara', "c": None}, {"w": 'en.', "c": None}]},  # Jag har bara en.
]
