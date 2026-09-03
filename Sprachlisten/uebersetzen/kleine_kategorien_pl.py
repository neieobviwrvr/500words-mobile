# -*- coding: utf-8 -*-
"""Die sechs kleinsten Kategorien auf Polnisch, in einer Datei.

Zusammen 76 Saetze - culture_immersion (20), moving_settling (18),
shopping_haggling (16), smalltalk_socialising (12), love_relationship (8),
dating_romance (2). Aufbau wie `kleine_kategorien_it.py`.

**Nichts ausgelassen.**

Aussprache-Grundregeln stehen im Kopf von `grundwortschatz_pl.py` und
werden hier nicht wiederholt.

Was in Polen anders laeuft und deshalb am Satz kommentiert ist:

  Meldeamt          `zameldowanie` ist die Anmeldung beim `urząd gminy`
                    (Gemeindeamt). Anders als in Grossbritannien gibt es
                    sie wirklich, aehnlich wie in Deutschland - und fuer
                    laengeren Aufenthalt ist sie Pflicht.
  Kaution           Ueblich sind ein bis zwei Monatsmieten (`kaucja`), und
                    die Nebenkosten (`czynsz`) laufen oft getrennt an die
                    Hausverwaltung - der genannte Mietpreis ist also
                    selten alles.
  Kosenamen         Polnisch verkleinert so reichlich wie Russisch, und
                    zwar mit -ek/-ka/-uś. Aus `kot` (Katze) wird `kotek`,
                    aus `Anna` wird `Ania` und daraus `Anusia`. Woertliche
                    Uebersetzungen aus dem Deutschen sagt niemand.
  Handeln           Im Laden unueblich, auf Basaren (`targ`) und
                    Flohmaerkten erwartet.

**Vergangenheitsformen richten sich nach dem Geschlecht des SPRECHERS**
(zgubiłem / zgubiłam) - dieselbe Falle wie im Russischen. Wo ein Satz in
der Vergangenheit steht, nennt der Hinweis beide Formen.

**Nicht von Muttersprachlern geprueft.**
"""

KATEGORIEN = [
    'culture_immersion',
    'dating_romance',
    'love_relationship',
    'moving_settling',
    'shopping_haggling',
    'smalltalk_socialising',
]

SAETZE = [

# ========================================================= culture_immersion
 dict(kat='culture_immersion', de='Wo findet das Konzert statt?', pl='Gdzie jest koncert?',
      k=[('konzert', ['koncert'])]),
 dict(kat='culture_immersion', de='Wie viel kostet der Eintritt?', pl='Ile kosztuje wstęp?',
      k=[('eintritt', ['wstęp', 'bilet'])]),
 dict(kat='culture_immersion', de='Wann öffnet das Museum?', pl='O której otwierają muzeum?',
      k=[('museum_oeffnet', ['otwierają muzeum', 'muzeum', 'otwierają'])]),
 dict(kat='culture_immersion', de='Das war ein tolles Konzert.', pl='To był świetny koncert.',
      k=[('tolles_konzert', ['świetny koncert', 'super koncert', 'koncert'])]),
 dict(kat='culture_immersion', de='Ich gehe gerne ins Kino.', pl='Lubię chodzić do kina.',
      k=[('kino', ['kino', 'do kina'])]),
 dict(kat='culture_immersion', de='Ich interessiere mich für Geschichte.', pl='Interesuję się historią.',
      k=[('interessiere_geschichte', ['interesuję się historią', 'historia', 'historią'])]),
 dict(kat='culture_immersion', de='Treibst du Sport?', pl='Uprawiasz sport?',
      k=[('sport_frage', ['uprawiasz sport', 'sport'])]),
 dict(kat='culture_immersion', de='Ich spiele gerne Fußball.', pl='Lubię grać w piłkę nożną.',
      k=[('fussball', ['piłkę nożną', 'piłka nożna', 'piłkę'])]),
 dict(kat='culture_immersion', de='Berlin ist sehr schön.', pl='Berlin jest bardzo ładny.',
      k=[('berlin_schoen', ['berlin', 'ładny', 'piękny'])]),
 dict(kat='culture_immersion', de='Wir spielen Fußball.', pl='Gramy w piłkę nożną.',
      k=[('spielen_fussball', ['gramy w piłkę', 'piłkę nożną'])]),
 dict(kat='culture_immersion', de='Wo ist die Kirche?', pl='Gdzie jest kościół?',
      k=[('kirche', ['kościół'])]),
 dict(kat='culture_immersion', de='Er ist gesprungen.', pl='On skoczył.',
      k=[('gesprungen', ['on skoczył', 'skoczył'])]),
 dict(kat='culture_immersion', de='Wie ist das Wetter heute?', pl='Jaka jest dziś pogoda?',
      k=[('wetter_frage', ['jaka jest pogoda', 'pogoda'])]),
 dict(kat='culture_immersion', de='Es regnet.', pl='Pada deszcz.',
      k=[('regnet', ['pada deszcz', 'pada', 'deszcz'])]),
 dict(kat='culture_immersion', de='Die Sonne scheint.', pl='Świeci słońce.',
      k=[('sonne_scheint', ['świeci słońce', 'słońce'])]),
 dict(kat='culture_immersion', de='Es ist sehr kalt heute.', pl='Dziś jest bardzo zimno.',
      k=[('kalt', ['bardzo zimno', 'zimno'])]),
 dict(kat='culture_immersion', de='Was machst du am Wochenende?', pl='Co robisz w weekend?',
      k=[('wochenende_frage', ['co robisz w weekend', 'w weekend', 'weekend'])]),
 dict(kat='culture_immersion', de='Möchtest du mitkommen?', pl='Chcesz iść ze mną?',
      k=[('mitkommen', ['chcesz iść', 'ze mną', 'iść'])]),
 dict(kat='culture_immersion', de='Letztes Wochenende war ich am Strand.', pl='W zeszły weekend byłem na plaży.',
      k=[('strand', ['na plaży', 'plaża'])],
      h='Als Frau: „byłam". Die Vergangenheit trägt das Geschlecht des '
        'Sprechers.'),
 dict(kat='culture_immersion', de='Nächstes Wochenende gehe ich wandern.', pl='W przyszły weekend idę w góry.',
      k=[('wandern', ['w góry', 'na wędrówkę', 'góry'])],
      h='„Iść w góry" (in die Berge gehen) ist die übliche Wendung — die '
        'Tatra ist für Polen das Wanderziel schlechthin.'),

# ============================================================ dating_romance
 dict(kat='dating_romance', de='Hast du einen festen Freund oder eine feste Freundin?',
      pl='Masz chłopaka albo dziewczynę?',
      k=[('fester_partner', ['chłopaka', 'dziewczynę', 'chłopak', 'dziewczyna'])],
      h='„Chłopak" heißt Junge UND fester Freund, „dziewczyna" Mädchen UND '
        'feste Freundin — wie im Russischen und Italienischen.'),
 dict(kat='dating_romance', de='Wir sind gerade zusammen.', pl='Jesteśmy razem.',
      k=[('zusammen_sein', ['jesteśmy razem', 'razem'])]),

# ========================================================== love_relationship
 dict(kat='love_relationship', de='Wie soll ich dich nennen?', pl='Jak mam cię nazywać?',
      k=[('wie', ['jak']),
         ('nennen', ['nazywać', 'mówić na ciebie'])]),
 dict(kat='love_relationship', de='Ich nenne dich Schatz.', pl='Nazywam cię skarbie.',
      k=[('nennen', ['nazywam cię', 'nazywam']),
         ('schatz', ['skarbie', 'skarb'])],
      h='„Skarb" ist wörtlich der Schatz — eines der wenigen Kosewörter, das '
        'sich mit dem Deutschen deckt.'),
 dict(kat='love_relationship', de='Kann ich dich Schatzi nennen?', pl='Mogę mówić na ciebie kotku?',
      k=[('koennen', ['mogę']),
         ('schatzi', ['kotku', 'kotek'])],
      h='Polnisch verkleinert reichlich (-ek/-ka/-uś): aus „kot" (Katze) wird '
        '„kotek", das gängigste Kosewort überhaupt.'),
 dict(kat='love_relationship', de='Er nennt mich Bärchen.', pl='On nazywa mnie misiu.',
      k=[('nennen', ['on nazywa mnie', 'nazywa mnie']),
         ('baerchen', ['misiu', 'miś'])]),
 dict(kat='love_relationship', de='Sie nennt mich Süße.', pl='Ona nazywa mnie słodka.',
      k=[('nennen', ['ona nazywa mnie', 'nazywa mnie']),
         ('suesse', ['słodka', 'słodki'])]),
 dict(kat='love_relationship', de='Das ist mein Kosename für dich.', pl='To moje pieszczotliwe imię dla ciebie.',
      k=[('kosename', ['pieszczotliwe imię', 'pieszczotliwe'])]),
 dict(kat='love_relationship', de='Ich mag diesen Spitznamen nicht so gern.', pl='Nie bardzo lubię ten przydomek.',
      k=[('nicht_gern', ['nie lubię', 'nie bardzo lubię']),
         ('spitzname', ['przydomek', 'ksywka'])]),
 dict(kat='love_relationship', de='Nenn mich bitte nicht so!', pl='Proszę, nie nazywaj mnie tak!',
      k=[('nennen', ['nie nazywaj mnie', 'nazywaj']),
         ('nicht_so', ['tak'])]),

# ============================================================ moving_settling
 dict(kat='moving_settling', de='Wo finde ich einen Handwerker?', pl='Gdzie znajdę fachowca?',
      k=[('handwerker', ['fachowca', 'fachowiec', 'hydraulika'])],
      h='„Fachowiec" ist der Fachmann allgemein; konkret ruft man „hydraulik" '
        '(Klempner) oder „elektryk".'),
 dict(kat='moving_settling', de='Die Heizung funktioniert nicht.', pl='Ogrzewanie nie działa.',
      k=[('heizung_kaputt', ['ogrzewanie nie działa', 'ogrzewanie', 'nie działa'])]),
 dict(kat='moving_settling', de='Meine Nachbarn sind sehr nett.', pl='Moi sąsiedzi są bardzo mili.',
      k=[('nachbarn_nett', ['sąsiedzi', 'mili'])]),
 dict(kat='moving_settling', de='Das Buch liegt auf dem Tisch.', pl='Książka leży na stole.',
      k=[('buch_tisch', ['książka', 'na stole'])]),
 dict(kat='moving_settling', de='Hier ist es sehr praktisch.', pl='Tutaj jest bardzo wygodnie.',
      k=[('praktisch', ['wygodnie', 'praktycznie'])]),
 dict(kat='moving_settling', de='Ich muss den Strom anmelden.', pl='Muszę podpisać umowę na prąd.',
      k=[('strom_anmelden', ['umowę na prąd', 'prąd', 'podpisać umowę'])]),
 dict(kat='moving_settling', de='Wie melde ich mich beim Einwohnermeldeamt an?', pl='Jak się zameldować w urzędzie gminy?',
      k=[('einwohnermeldeamt', ['zameldować', 'urząd gminy', 'zameldowanie'])],
      h='Polen hat wie Deutschland eine echte Meldepflicht: „zameldowanie" '
        'beim „urząd gminy". Für längere Aufenthalte ist sie Pflicht und '
        'Voraussetzung für vieles andere.'),
 dict(kat='moving_settling', de='Ich brauche eine Bestätigung meiner Adresse.', pl='Potrzebuję zaświadczenia o zameldowaniu.',
      k=[('adressbestaetigung', ['zaświadczenia o zameldowaniu', 'zaświadczenie', 'zameldowaniu'])]),
 dict(kat='moving_settling', de='Das kann ich erledigen.', pl='Mogę to załatwić.',
      k=[('erledigen', ['mogę to załatwić', 'załatwić'])],
      h='„Załatwić" ist eines der meistgebrauchten polnischen Verben — es '
        'deckt erledigen, organisieren und regeln ab.'),
 dict(kat='moving_settling', de='Ich bezahle mit dem Handy.', pl='Płacę telefonem.',
      k=[('handy_bezahlen', ['telefonem', 'telefon', 'blikiem'])],
      h='„BLIK" ist das polnische Handy-Zahlsystem und praktisch überall '
        'verfügbar — vergleichbar mit Vipps in Norwegen.'),
 dict(kat='moving_settling', de='Ich suche eine Wohnung.', pl='Szukam mieszkania.',
      k=[('wohnung_suchen', ['szukam mieszkania', 'mieszkania', 'mieszkanie'])]),
 dict(kat='moving_settling', de='Wie hoch ist die Miete?', pl='Ile wynosi czynsz?',
      k=[('miete', ['czynsz', 'wynajem'])],
      h='Achtung: „czynsz" meint oft NUR die Nebenkosten an die '
        'Hausverwaltung, die Miete an den Eigentümer heißt „najem". Wer nach '
        'dem Gesamtpreis fragt, sagt besser „ile płacę łącznie?"'),
 dict(kat='moving_settling', de='Ist die Kaution im Preis enthalten?', pl='Czy kaucja jest wliczona w cenę?',
      k=[('kaution', ['kaucja'])]),
 dict(kat='moving_settling', de='Wann kann ich einziehen?', pl='Kiedy mogę się wprowadzić?',
      k=[('einziehen', ['wprowadzić', 'się wprowadzić'])]),
 dict(kat='moving_settling', de='Gibt es einen Aufzug im Haus?', pl='Czy w budynku jest winda?',
      k=[('aufzug', ['winda'])]),
 dict(kat='moving_settling', de='Gibt es hier einen Waschraum?', pl='Czy jest tu pralnia?',
      k=[('waschraum', ['pralnia', 'pralka'])]),
 dict(kat='moving_settling', de='Ich möchte den Mietvertrag unterschreiben.', pl='Chcę podpisać umowę najmu.',
      k=[('mietvertrag', ['umowę najmu', 'umowa najmu', 'umowę']),
         ('unterschreiben', ['podpisać'])]),
 dict(kat='moving_settling', de='Ich bin letzte Woche umgezogen.', pl='Przeprowadziłem się w zeszłym tygodniu.',
      k=[('umgezogen', ['przeprowadziłem się', 'przeprowadziłam się', 'przeprowadziłem'])],
      h='Als Frau: „przeprowadziłam się".'),

# ========================================================== shopping_haggling
 dict(kat='shopping_haggling', de='Kann ich das anprobieren?', pl='Czy mogę to przymierzyć?',
      k=[('anprobieren', ['przymierzyć'])]),
 dict(kat='shopping_haggling', de='Wo ist die Umkleidekabine?', pl='Gdzie jest przymierzalnia?',
      k=[('umkleidekabine', ['przymierzalnia'])]),
 dict(kat='shopping_haggling', de='Haben Sie das auch in Größe M?', pl='Czy jest to w rozmiarze M?',
      k=[('groesse', ['rozmiarze', 'rozmiar'])]),
 dict(kat='shopping_haggling', de='Haben Sie das in einer anderen Farbe?', pl='Czy jest to w innym kolorze?',
      k=[('andere_farbe', ['innym kolorze', 'kolorze', 'kolor'])]),
 dict(kat='shopping_haggling', de='Kann ich mit Karte bezahlen?', pl='Czy mogę zapłacić kartą?',
      k=[('karte_zahlen', ['kartą', 'karta'])]),
 dict(kat='shopping_haggling', de='Nur Bargeld, bitte.', pl='Tylko gotówka, proszę.',
      k=[('bargeld', ['gotówka', 'gotówką'])]),
 dict(kat='shopping_haggling', de='Das ist zu teuer.', pl='To za drogo.',
      k=[('zu_teuer', ['za drogo', 'drogo'])]),
 dict(kat='shopping_haggling', de='Gibt es einen Rabatt?', pl='Czy jest zniżka?',
      k=[('rabatt', ['zniżka', 'rabat'])],
      h='Im Laden unüblich, auf Basaren („targ") und Flohmärkten dagegen '
        'erwartet.'),
 dict(kat='shopping_haggling', de='Haben Sie eine Tüte?', pl='Czy jest reklamówka?',
      k=[('tuete', ['reklamówka', 'torba'])]),
 dict(kat='shopping_haggling', de='Das gilt nicht als teuer.', pl='To nie jest uważane za drogie.',
      k=[('nicht_teuer', ['nie jest drogie', 'nie drogie'])]),
 dict(kat='shopping_haggling', de='Ich möchte das zurückgeben.', pl='Chcę to zwrócić.',
      k=[('zurueckgeben', ['zwrócić', 'zwrot'])]),
 dict(kat='shopping_haggling', de='Ich suche ein Geschenk für meine Mutter.', pl='Szukam prezentu dla mamy.',
      k=[('geschenk', ['prezentu', 'prezent'])]),
 dict(kat='shopping_haggling', de='Wann schließt das Geschäft?', pl='O której zamykają sklep?',
      k=[('schliesst', ['zamykają', 'zamyka'])],
      h='Sonntags haben in Polen die meisten Läden zu — es gilt ein '
        'Handelsverbot mit wenigen Ausnahmen.'),
 dict(kat='shopping_haggling', de='Ich schaue mich nur um.', pl='Tylko się rozglądam.',
      k=[('nur_umschauen', ['tylko się rozglądam', 'rozglądam'])]),
 dict(kat='shopping_haggling', de='Können Sie mir helfen?', pl='Czy może mi pan pomóc?',
      k=[('helfen', ['pomóc', 'pomoc'])],
      h='Zu einer Frau: „czy może mi pani pomóc". Die Sie-Form läuft im '
        'Polnischen über pan/pani plus dritte Person.'),
 dict(kat='shopping_haggling', de='Ich habe gestern ein neues Kleid gekauft.', pl='Wczoraj kupiłam nową sukienkę.',
      k=[('gekauft', ['kupiłam', 'kupiłem']),
         ('kleid', ['sukienkę', 'sukienka'])],
      h='Hier steht die weibliche Form „kupiłam", weil ein Kleid gekauft '
        'wurde — als Mann „kupiłem".'),

# ===================================================== smalltalk_socialising
 dict(kat='smalltalk_socialising', de='Bist du verheiratet?', pl='Jesteś żonaty?',
      k=[('verheiratet', ['żonaty', 'zamężna'])],
      h='Wie im Russischen zwei Wörter: ein Mann ist „żonaty", eine Frau '
        '„zamężna".'),
 dict(kat='smalltalk_socialising', de='Hast du Geschwister?', pl='Masz rodzeństwo?',
      k=[('geschwister', ['rodzeństwo'])],
      h='„Rodzeństwo" ist ein echtes Sammelwort für Geschwister — anders als '
        'im Russischen, wo man beide aufzählen muss.'),
 dict(kat='smalltalk_socialising', de='Ich habe eine Schwester.', pl='Mam siostrę.',
      k=[('schwester', ['siostrę', 'siostra'])]),
 dict(kat='smalltalk_socialising', de='Noch nicht.', pl='Jeszcze nie.',
      k=[('noch_nicht', ['jeszcze nie'])]),
 dict(kat='smalltalk_socialising', de='Was sind deine Hobbys?', pl='Jakie masz hobby?',
      k=[('hobbys_frage', ['jakie masz hobby', 'hobby'])]),
 dict(kat='smalltalk_socialising', de='Ich lese gerne Bücher.', pl='Lubię czytać książki.',
      k=[('lesen', ['czytać', 'książki'])]),
 dict(kat='smalltalk_socialising', de='Mein Hobby ist Sport.', pl='Moje hobby to sport.',
      k=[('hobby_sport', ['sport'])]),
 dict(kat='smalltalk_socialising', de='Was machst du beruflich?', pl='Czym się zajmujesz?',
      k=[('beruf_frage', ['czym się zajmujesz', 'zajmujesz', 'pracujesz'])]),
 dict(kat='smalltalk_socialising', de='Ich bin Student.', pl='Jestem studentem.',
      k=[('student', ['studentem', 'studentką', 'student'])]),
 dict(kat='smalltalk_socialising', de='Ich arbeite als Lehrer.', pl='Pracuję jako nauczyciel.',
      k=[('beruf', ['nauczyciel', 'nauczycielka'])]),
 dict(kat='smalltalk_socialising', de='Wo wohnst du?', pl='Gdzie mieszkasz?',
      k=[('wo_wohnst', ['gdzie mieszkasz', 'mieszkasz'])]),
 dict(kat='smalltalk_socialising', de='Ich wohne in Berlin.', pl='Mieszkam w Berlinie.',
      k=[('wohne_in', ['mieszkam w berlinie', 'berlinie', 'berlin'])]),
]

AUSGELASSEN = []
