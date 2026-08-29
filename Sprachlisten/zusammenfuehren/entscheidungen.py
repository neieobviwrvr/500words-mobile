# -*- coding: utf-8 -*-
"""Was mit jeder der 118 abweichenden Zeilen passieren soll.

Entstanden aus Simons Frage (2026-08-27) "basiert Spanisch auf den deutschen
oder den chinesischen Saetzen?" - Antwort: auf den deutschen, ueber die Spalte
`german` als Abgleichschluessel. Die Pruefung dahinter zeigte, dass beide
Bestaende auseinandergelaufen sind, in JEDER Kategorie.

**Alles ueber IDs, nie ueber abgetippten Text.** Die deutschen Saetze stehen
schon in der Datenbank; sie hier noch einmal abzuschreiben waere genau die
Fehlerquelle, die beim Schwedisch-Import zugeschlagen hat (siehe CLAUDE.md,
id-Verschiebungs-Bug). `anwenden.py` loest die Texte selbst auf.

Vier Klassen:

  S  SPRACHADAPTIV - KEINE Drift, sondern Absicht. Der deutsche Text nennt
     die Zielsprache, die Waehrung oder eine Stadt, und der ist je Zielsprache
     verschieden ("zehn Euro" gegen "zehn Yuan", "nach Muenchen" gegen "nach
     Peking"). Diese Paare duerfen NICHT zusammengefuehrt werden - dann
     lernte man in China nach Muenchen zu fahren. Sie stehen hier nur, damit
     der naechste, der die Zahlen nachrechnet, sie nicht fuer einen Fehler
     haelt. Wird nicht angefasst.

  A  UMFORMULIERUNG - derselbe Satz, andere deutsche Fassung. Der chinesische
     Eintrag bekommt die Master-Fassung als `german`. Damit greift der
     Abgleichschluessel wieder; am chinesischen Satz selbst aendert sich
     nichts.

  B  NUR CHINESISCH - echter Inhalt ohne deutsches Gegenstueck. Wandert nach
     phrasebook_master, damit ihn Spanisch/Franzoesisch/Schwedisch ueberhaupt
     erben koennen.

  C  NUR DEUTSCH - kein Datenfehler, nur eine offene Chinesisch-Uebersetzung.
     Keine Aktion; wird von anwenden.py nur gezaehlt.
"""

# ---------------------------------------------------------------- S
# (zh_id, master_id, worin sie sich unterscheiden) - nur Dokumentation.
SPRACHADAPTIV = [
    (217, 21, "Zielsprache: Chinesisch / Deutsch"),
    (220, 25, "Zielsprache: Chinesisch / Deutsch"),
    (283, 45, "Waehrung: Yuan / Euro"),
    (347, 63, "Stadt: Peking / Muenchen"),
    (351, 62, "Stadt: Shanghai / Berlin"),
]

# ---------------------------------------------------------------- A
# (zh_id, master_id) - chinesisch_phrasebook.german wird auf die
# Master-Fassung gezogen.
UMFORMULIERUNG = [
    # grundwortschatz
    (284, 46),    # "Ich moechte zahlen." -> "Ich haette gern die Rechnung."
    # club_nightlife
    (86, 275),    # "Ich wohne im Hotel, ist nicht so praktisch" -> "In meinem Hotel geht das nicht."
    (84, 273),    # "Ich moechte nicht daten..." -> "Ich suche gerade nichts Festes..."
    (83, 272),    # 你很帅 "Du bist sehr gut aussehend." -> "Du bist sehr cool."
    (33, 222),    # "Ich habe kein Interesse, bitte geh weg." -> "Ich habe kein Interesse. Geh bitte weg."
    (37, 226),    # "Bitte helfen Sie mir, die Polizei zu rufen." -> "Bitte rufen Sie die Polizei."
    (108, 297),   # lange Notfall-Bitte, zwei Fassungen
    # culture_immersion
    (237, 176),   # "Heute ist ein sonniger Tag." -> "Die Sonne scheint."
    # health_emergency
    (186, 375),   # "Nehmen Sie Karte?" -> "Nehmen Sie auch Karte?"
    # drinking_dining
    (434, 448),   # "Speisekarte mit Bildern" -> "Karte mit Bildern"
    (457, 471),   # "Lass mich das mal sehen." -> "Zeigen Sie mir das mal."
    (300, 94),    # "Koennen wir getrennt zahlen?" -> "Koennen Sie mir die Rechnung getrennt bringen?"
    (298, 87),    # 慢慢吃 "Lass es dir schmecken!" -> "Guten Appetit!"
    (420, 434),   # "Wasser mit Eis, bitte." -> "Kaltes Wasser, bitte."
    (286, 80),    # "Haben Sie noch einen freien Tisch?" -> "Haben Sie einen Tisch frei?"
    (289, 96),    # "Koennen Sie mir bitte einen Tisch fuer morgen reservieren?" -> "Ich moechte einen Tisch fuer morgen Abend reservieren."
    (428, 442),   # "Darf man draussen sitzen?" -> "Koennen wir draussen sitzen?"
    (288, 97),    # "Ist hier noch frei?" -> "Ist dieser Tisch schon reserviert?"
    (408, 422),   # "Gibt es etwas ohne Chili?" -> "Haben Sie etwas ohne Chili?"
    # hotel_accommodation
    (314, 57),    # "Die Klimaanlage ist kaputt." -> "Die Klimaanlage funktioniert nicht."
    # moving_settling
    (326, 156),   # "Wie melde ich mich bei der Polizei an?" -> "Wie melde ich mich beim Einwohnermeldeamt an?"
    (328, 155),   # "Wie bezahle ich den Strom?" -> "Ich muss den Strom anmelden."
    (322, 158),   # "Kann man hier Waesche waschen?" -> "Gibt es hier einen Waschraum?"
    # shopping_haggling
    (344, 104),   # "Karte geht nicht, nur Handy." -> "Nur Bargeld, bitte."
    (345, 108),   # "Ich brauche eine Tuete." -> "Haben Sie eine Tuete?"
    (333, 111),   # "Kann mir jemand helfen?" -> "Koennen Sie mir helfen?"
    # travel_transportation
    (349, 72),    # "Ich moechte ein Auto mieten." -> "Ich moechte einen Mietwagen buchen."
    # university_studying
    (386, 169),   # "Wie viele Kurse brauche ich?" -> "Wie viele Credits brauche ich?"
]

# ---------------------------------------------------------------- B
# zh_id - wandert mit seiner deutschen Fassung nach phrasebook_master.
# scenario/category/lookup_only/addressing/culture_note kommen aus der
# chinesischen Zeile, tense/difficulty auf present/A1 (wie der Bestand).
NUR_CHINESISCH = [
    # grundwortschatz
    485,  # Entschuldigung, wo ist die Toilette?
    491,  # Wir bleiben fuenf Minuten.
    492,  # Bitte sag es noch einmal.
    471,  # Seid ihr Studenten?
    480,  # Ich habe nur eins.
    # club_nightlife - die 7 fehlenden Anmach-/Kompliment-Saetze
    463,  # Die Musik hier ist gut, oder?
    464,  # Kommst du oft hierher?
    465,  # Bist du von hier?
    468,  # Soll ich dich scannen?          (WeChat-QR, bleibt china-spezifisch)
    466,  # Du hast ein suesses Laecheln.
    495,  # Deine Frisur ist sehr schoen.
    467,  # Mit dir zu reden macht Spass.
    # smalltalk_socialising
    231,  # Noch nicht.
    234,  # Mein Hobby ist Sport.
    # culture_immersion
    475,  # Berlin ist sehr schoen.
    476,  # Wir spielen Fussball.
    487,  # Wo ist die Kirche?
    496,  # Er ist gesprungen.
    # health_emergency
    469,  # Bitte rufen Sie die Polizei!
    470,  # Ich moechte die Polizei rufen.
    # drinking_dining
    292,  # Was gibt es gutes zu Essen?
    477,  # Dieses Restaurant ist sehr gut.
    474,  # Trinkst du Kaffee oder Tee?
    # travel_transportation
    484,  # Wir haben den Bus erwischt.
    490,  # Wo wollt ihr hin?
    486,  # Warte an der Kreuzung auf mich.
    481,  # Ich moechte ein Ticket.
    # hotel_accommodation
    479,  # Das Zimmer ist sehr sauber.
    # moving_settling
    473,  # Das Buch liegt auf dem Tisch.
    498,  # Hier ist es sehr praktisch.
    483,  # Das kann ich erledigen.
    493,  # Ich bezahle mit dem Handy.
    # shopping_haggling
    478,  # Das gilt nicht als teuer.
    # university_studying
    489,  # Ich habe drei Buecher.
    488,  # Ich unterrichte Chinesisch.     (sprachadaptiv, aber ohne Gegenstueck)
    # dating_romance - NACHTRAG 2026-08-29 (Simons Entscheidung: ins Deutsche
    # nachtragen statt loeschen). Diese beiden rutschten beim ersten Durchgang
    # durch, weil dating_romance in der KATEGORIEN-Liste von anwenden.py fehlte
    # - die Liste enthielt nur Kategorien, die damals Inhalt hatten. Die Liste
    # deckt jetzt alle Kategorien der App ab, auch die leeren.
    #
    # Es sind damit die ERSTEN beiden Saetze der Kategorie ueberhaupt. Die
    # uebrigen Sprachen erben sie noch nicht - dating_romance bleibt eine der
    # vier Kategorien ohne echten Content (siehe CLAUDE.md).
    472,  # Hast du einen festen Freund oder eine feste Freundin?
    494,  # Wir sind gerade zusammen.
]
