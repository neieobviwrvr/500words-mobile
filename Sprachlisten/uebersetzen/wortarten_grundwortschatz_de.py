# -*- coding: utf-8 -*-
"""Wort-fuer-Wort-Tagging fuer phrasebook_master/grundwortschatz (Deutsch).

Erste komplett getaggte Kategorie (2026-08-29) - beweist die Kette
Schema->Autoren->Validierung->Render einmal end-to-end, siehe Plan
"Wortart-Farbcodierung durchgaengig". Erzeugt aus
_erzeuge_grundwortschatz_de.py (Einmal-Helfer, nicht Teil des staendigen
Werkzeugs) - die Woerter selbst kommen direkt aus den Live-Saetzen, nur die
Tag-Codes sind von Hand klassifiziert. Keine Konjunktion im Bestand -
Grundwortschatz-Saetze sind zu kurz fuer echte Verbindungswoerter, kein
erzwungener Fehltreffer.
"""

TAGS = [
    {"id": 1, "tags": [{"w": 'Hallo!', "c": 'n'}]},  # Hallo!
    {"id": 2, "tags": [{"w": 'Guten', "c": 'a'}, {"w": 'Morgen!', "c": 'n'}]},  # Guten Morgen!
    {"id": 3, "tags": [{"w": 'Guten', "c": 'a'}, {"w": 'Tag!', "c": 'n'}]},  # Guten Tag!
    {"id": 4, "tags": [{"w": 'Guten', "c": 'a'}, {"w": 'Abend!', "c": 'n'}]},  # Guten Abend!
    {"id": 5, "tags": [{"w": 'Wie', "c": None}, {"w": 'geht', "c": 'v'}, {"w": 'es', "c": 'p'}, {"w": 'dir?', "c": 'p'}]},  # Wie geht es dir?
    {"id": 6, "tags": [{"w": 'Mir', "c": 'p'}, {"w": 'geht', "c": 'v'}, {"w": 'es', "c": 'p'}, {"w": 'gut,', "c": 'a'}, {"w": 'danke.', "c": 'v'}]},  # Mir geht es gut, danke.
    {"id": 7, "tags": [{"w": 'Wie', "c": None}, {"w": 'heißt', "c": 'v'}, {"w": 'du?', "c": 'p'}]},  # Wie heißt du?
    {"id": 8, "tags": [{"w": 'Ich', "c": 'p'}, {"w": 'heiße', "c": 'v'}, {"w": 'Anna.', "c": 'n'}]},  # Ich heiße Anna.
    {"id": 9, "tags": [{"w": 'Woher', "c": None}, {"w": 'kommst', "c": 'v'}, {"w": 'du?', "c": 'p'}]},  # Woher kommst du?
    {"id": 10, "tags": [{"w": 'Ich', "c": 'p'}, {"w": 'komme', "c": 'v'}, {"w": 'aus', "c": None}, {"w": 'Deutschland.', "c": 'n'}]},  # Ich komme aus Deutschland.
    {"id": 11, "tags": [{"w": 'Wie', "c": None}, {"w": 'alt', "c": 'a'}, {"w": 'bist', "c": 'v'}, {"w": 'du?', "c": 'p'}]},  # Wie alt bist du?
    {"id": 12, "tags": [{"w": 'Ich', "c": 'p'}, {"w": 'bin', "c": 'v'}, {"w": '25', "c": None}, {"w": 'Jahre', "c": 'n'}, {"w": 'alt.', "c": 'a'}]},  # Ich bin 25 Jahre alt.
    {"id": 13, "tags": [{"w": 'Freut', "c": 'v'}, {"w": 'mich,', "c": 'p'}, {"w": 'dich', "c": 'p'}, {"w": 'kennenzulernen.', "c": 'v'}]},  # Freut mich, dich kennenzulernen.
    {"id": 14, "tags": [{"w": 'Auf', "c": None}, {"w": 'Wiedersehen!', "c": 'n'}]},  # Auf Wiedersehen!
    {"id": 15, "tags": [{"w": 'Bis', "c": None}, {"w": 'später!', "c": None}]},  # Bis später!
    {"id": 16, "tags": [{"w": 'Tschüss!', "c": None}]},  # Tschüss!
    {"id": 20, "tags": [{"w": 'Sprichst', "c": 'v'}, {"w": 'du', "c": 'p'}, {"w": 'Englisch?', "c": 'n'}]},  # Sprichst du Englisch?
    {"id": 21, "tags": [{"w": 'Ich', "c": 'p'}, {"w": 'spreche', "c": 'v'}, {"w": 'ein', "c": None}, {"w": 'bisschen', "c": None}, {"w": 'Deutsch.', "c": 'n'}]},  # Ich spreche ein bisschen Deutsch.
    {"id": 22, "tags": [{"w": 'Kannst', "c": 'v'}, {"w": 'du', "c": 'p'}, {"w": 'bitte', "c": None}, {"w": 'langsamer', "c": 'a'}, {"w": 'sprechen?', "c": 'v'}]},  # Kannst du bitte langsamer sprechen?
    {"id": 23, "tags": [{"w": 'Ich', "c": 'p'}, {"w": 'verstehe', "c": 'v'}, {"w": 'das', "c": 'p'}, {"w": 'nicht.', "c": None}]},  # Ich verstehe das nicht.
    {"id": 24, "tags": [{"w": 'Kannst', "c": 'v'}, {"w": 'du', "c": 'p'}, {"w": 'das', "c": 'p'}, {"w": 'bitte', "c": None}, {"w": 'wiederholen?', "c": 'v'}]},  # Kannst du das bitte wiederholen?
    {"id": 25, "tags": [{"w": 'Wie', "c": None}, {"w": 'sagt', "c": 'v'}, {"w": 'man', "c": 'p'}, {"w": 'das', "c": 'p'}, {"w": 'auf', "c": None}, {"w": 'Deutsch?', "c": 'n'}]},  # Wie sagt man das auf Deutsch?
    {"id": 33, "tags": [{"w": 'Wie', "c": None}, {"w": 'spät', "c": 'a'}, {"w": 'ist', "c": 'v'}, {"w": 'es?', "c": 'p'}]},  # Wie spät ist es?
    {"id": 34, "tags": [{"w": 'Es', "c": 'p'}, {"w": 'ist', "c": 'v'}, {"w": 'drei', "c": None}, {"w": 'Uhr.', "c": 'n'}]},  # Es ist drei Uhr.
    {"id": 35, "tags": [{"w": 'Um', "c": None}, {"w": 'wie', "c": None}, {"w": 'viel', "c": None}, {"w": 'Uhr', "c": 'n'}, {"w": 'beginnt', "c": 'v'}, {"w": 'der', "c": None}, {"w": 'Film?', "c": 'n'}]},  # Um wie viel Uhr beginnt der Film?
    {"id": 36, "tags": [{"w": 'Wann', "c": None}, {"w": 'hast', "c": 'v'}, {"w": 'du', "c": 'p'}, {"w": 'Zeit?', "c": 'n'}]},  # Wann hast du Zeit?
    {"id": 37, "tags": [{"w": 'Ich', "c": 'p'}, {"w": 'habe', "c": 'v'}, {"w": 'morgen', "c": None}, {"w": 'keine', "c": None}, {"w": 'Zeit.', "c": 'n'}]},  # Ich habe morgen keine Zeit.
    {"id": 38, "tags": [{"w": 'Können', "c": 'v'}, {"w": 'wir', "c": 'p'}, {"w": 'uns', "c": 'p'}, {"w": 'nächste', "c": 'a'}, {"w": 'Woche', "c": 'n'}, {"w": 'treffen?', "c": 'v'}]},  # Können wir uns nächste Woche treffen?
    {"id": 39, "tags": [{"w": 'Ich', "c": 'p'}, {"w": 'habe', "c": 'v'}, {"w": 'einen', "c": None}, {"w": 'Termin', "c": 'n'}, {"w": 'um', "c": None}, {"w": '10', "c": None}, {"w": 'Uhr.', "c": 'n'}]},  # Ich habe einen Termin um 10 Uhr.
    {"id": 40, "tags": [{"w": 'Welcher', "c": 'p'}, {"w": 'Tag', "c": 'n'}, {"w": 'ist', "c": 'v'}, {"w": 'heute?', "c": None}]},  # Welcher Tag ist heute?
    {"id": 41, "tags": [{"w": 'Heute', "c": None}, {"w": 'ist', "c": 'v'}, {"w": 'Montag.', "c": 'n'}]},  # Heute ist Montag.
    {"id": 42, "tags": [{"w": 'Wann', "c": None}, {"w": 'hast', "c": 'v'}, {"w": 'du', "c": 'p'}, {"w": 'Geburtstag?', "c": 'n'}]},  # Wann hast du Geburtstag?
    {"id": 43, "tags": [{"w": 'Mein', "c": None}, {"w": 'Geburtstag', "c": 'n'}, {"w": 'ist', "c": 'v'}, {"w": 'im', "c": None}, {"w": 'März.', "c": 'n'}]},  # Mein Geburtstag ist im März.
    {"id": 44, "tags": [{"w": 'Wie', "c": None}, {"w": 'viel', "c": None}, {"w": 'kostet', "c": 'v'}, {"w": 'das?', "c": 'p'}]},  # Wie viel kostet das?
    {"id": 45, "tags": [{"w": 'Das', "c": 'p'}, {"w": 'kostet', "c": 'v'}, {"w": 'zehn', "c": None}, {"w": 'Euro.', "c": 'n'}]},  # Das kostet zehn Euro.
    {"id": 46, "tags": [{"w": 'Ich', "c": 'p'}, {"w": 'hätte', "c": 'v'}, {"w": 'gern', "c": None}, {"w": 'die', "c": None}, {"w": 'Rechnung.', "c": 'n'}]},  # Ich hätte gern die Rechnung.
    {"id": 92, "tags": [{"w": 'Wo', "c": None}, {"w": 'ist', "c": 'v'}, {"w": 'die', "c": None}, {"w": 'Toilette?', "c": 'n'}]},  # Wo ist die Toilette?
    {"id": 136, "tags": [{"w": 'Hilfe!', "c": 'n'}]},  # Hilfe!
    {"id": 383, "tags": [{"w": 'Danke!', "c": 'v'}]},  # Danke!
    {"id": 384, "tags": [{"w": 'Vielen', "c": 'a'}, {"w": 'Dank!', "c": 'n'}]},  # Vielen Dank!
    {"id": 385, "tags": [{"w": 'Gern', "c": None}, {"w": 'geschehen.', "c": 'v'}]},  # Gern geschehen.
    {"id": 386, "tags": [{"w": 'Entschuldigung!', "c": 'n'}]},  # Entschuldigung!
    {"id": 387, "tags": [{"w": 'Es', "c": 'p'}, {"w": 'tut', "c": 'v'}, {"w": 'mir', "c": 'p'}, {"w": 'leid.', "c": 'a'}]},  # Es tut mir leid.
    {"id": 388, "tags": [{"w": 'Kein', "c": None}, {"w": 'Problem.', "c": 'n'}]},  # Kein Problem.
    {"id": 389, "tags": [{"w": 'Ja.', "c": None}]},  # Ja.
    {"id": 390, "tags": [{"w": 'Nein.', "c": None}]},  # Nein.
    {"id": 391, "tags": [{"w": 'Ich', "c": 'p'}, {"w": 'weiß', "c": 'v'}, {"w": 'nicht.', "c": None}]},  # Ich weiß nicht.
    {"id": 392, "tags": [{"w": 'Eins,', "c": None}, {"w": 'zwei,', "c": None}, {"w": 'drei.', "c": None}]},  # Eins, zwei, drei.
    {"id": 393, "tags": [{"w": 'Wie', "c": None}, {"w": 'viele?', "c": None}]},  # Wie viele?
    {"id": 394, "tags": [{"w": 'Zwei', "c": None}, {"w": 'Stück,', "c": 'n'}, {"w": 'bitte.', "c": None}]},  # Zwei Stück, bitte.
    {"id": 395, "tags": [{"w": 'Nur', "c": None}, {"w": 'eins,', "c": None}, {"w": 'bitte.', "c": None}]},  # Nur eins, bitte.
    {"id": 396, "tags": [{"w": 'Das', "c": 'p'}, {"w": 'ist', "c": 'v'}, {"w": 'genug.', "c": 'a'}]},  # Das ist genug.
    {"id": 397, "tags": [{"w": 'Wie', "c": None}, {"w": 'viel', "c": None}, {"w": 'ist', "c": 'v'}, {"w": 'das', "c": 'p'}, {"w": 'zusammen?', "c": None}]},  # Wie viel ist das zusammen?
    {"id": 398, "tags": [{"w": 'Ich', "c": 'p'}, {"w": 'brauche', "c": 'v'}, {"w": 'Hilfe.', "c": 'n'}]},  # Ich brauche Hilfe.
    {"id": 399, "tags": [{"w": 'Wo', "c": None}, {"w": 'ist', "c": 'v'}, {"w": 'der', "c": None}, {"w": 'Ausgang?', "c": 'n'}]},  # Wo ist der Ausgang?
    {"id": 400, "tags": [{"w": 'Ich', "c": 'p'}, {"w": 'habe', "c": 'v'}, {"w": 'mein', "c": None}, {"w": 'Handy', "c": 'n'}, {"w": 'verloren.', "c": 'v'}]},  # Ich habe mein Handy verloren.
    {"id": 401, "tags": [{"w": 'Das', "c": 'p'}, {"w": 'ist', "c": 'v'}, {"w": 'mein', "c": None}, {"w": 'Freund.', "c": 'n'}]},  # Das ist mein Freund.
    {"id": 402, "tags": [{"w": 'Ich', "c": 'p'}, {"w": 'bin', "c": 'v'}, {"w": 'zum', "c": None}, {"w": 'ersten', "c": 'a'}, {"w": 'Mal', "c": 'n'}, {"w": 'hier.', "c": None}]},  # Ich bin zum ersten Mal hier.
    {"id": 403, "tags": [{"w": 'Was', "c": 'p'}, {"w": 'heißt', "c": 'v'}, {"w": 'das?', "c": 'p'}]},  # Was heißt das?
    {"id": 404, "tags": [{"w": 'Können', "c": 'v'}, {"w": 'Sie', "c": 'p'}, {"w": 'das', "c": 'p'}, {"w": 'bitte', "c": None}, {"w": 'aufschreiben?', "c": 'v'}]},  # Können Sie das bitte aufschreiben?
    {"id": 405, "tags": [{"w": 'Wir', "c": 'p'}, {"w": 'sind', "c": 'v'}, {"w": 'vier', "c": None}, {"w": 'Personen.', "c": 'n'}]},  # Wir sind vier Personen.
    {"id": 406, "tags": [{"w": 'Ich', "c": 'p'}, {"w": 'habe', "c": 'v'}, {"w": 'meinen', "c": None}, {"w": 'Pass', "c": 'n'}, {"w": 'verloren.', "c": 'v'}]},  # Ich habe meinen Pass verloren.
    {"id": 477, "tags": [{"w": 'Entschuldigung,', "c": 'n'}, {"w": 'wo', "c": None}, {"w": 'ist', "c": 'v'}, {"w": 'die', "c": None}, {"w": 'Toilette?', "c": 'n'}]},  # Entschuldigung, wo ist die Toilette?
    {"id": 478, "tags": [{"w": 'Wir', "c": 'p'}, {"w": 'bleiben', "c": 'v'}, {"w": 'fünf', "c": None}, {"w": 'Minuten.', "c": 'n'}]},  # Wir bleiben fünf Minuten.
    {"id": 479, "tags": [{"w": 'Bitte', "c": None}, {"w": 'sag', "c": 'v'}, {"w": 'es', "c": 'p'}, {"w": 'noch', "c": None}, {"w": 'einmal.', "c": None}]},  # Bitte sag es noch einmal.
    {"id": 480, "tags": [{"w": 'Seid', "c": 'v'}, {"w": 'ihr', "c": 'p'}, {"w": 'Studenten?', "c": 'n'}]},  # Seid ihr Studenten?
    {"id": 481, "tags": [{"w": 'Ich', "c": 'p'}, {"w": 'habe', "c": 'v'}, {"w": 'nur', "c": None}, {"w": 'eins.', "c": None}]},  # Ich habe nur eins.
    # Nachtrag (2026-08-30): 8 "Kommentarsätze"-Saetze, die beim ersten
    # Durchgang noch nicht existierten.
    {"id": 566, "tags": [{"w": "Wirklich?", "c": None}]},  # Wirklich?
    {"id": 567, "tags": [{"w": "Cool!", "c": "a"}]},  # Cool!
    {"id": 568, "tags": [{"w": "Macht", "c": "v"}, {"w": "nichts.", "c": None}]},  # Macht nichts.
    {"id": 569, "tags": [{"w": "Genau!", "c": None}]},  # Genau!
    {"id": 570, "tags": [{"w": "Stimmt.", "c": "v"}]},  # Stimmt.
    {"id": 571, "tags": [{"w": "Schade!", "c": "a"}]},  # Schade!
    {"id": 572, "tags": [{"w": "Na", "c": None}, {"w": "klar!", "c": "a"}]},  # Na klar!
    {"id": 573, "tags": [{"w": "Auf", "c": None}, {"w": "keinen", "c": None}, {"w": "Fall!", "c": "n"}]},  # Auf keinen Fall!
]
