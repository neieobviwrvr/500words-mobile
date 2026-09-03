# -*- coding: utf-8 -*-
"""Die sechs kleinsten Kategorien auf Englisch, in einer Datei.

Zusammen 76 Saetze - culture_immersion (20), moving_settling (18),
shopping_haggling (16), smalltalk_socialising (12), love_relationship (8),
dating_romance (2). Aufbau wie `kleine_kategorien_it.py`.

**Nichts ausgelassen.**

**Britisch, wo es auseinandergeht** - `flat` statt `apartment`, `lift`
statt `elevator`, `queue` statt `line`. Die amerikanische Form steht
jeweils als zusaetzliches Synonym in `k`, damit die Bewertung sie nicht
abweist; im `target_text` steht die britische, weil die Zielgruppe
(Backpacker, Austauschstudenten) haeufiger in Europa unterwegs ist und
`en-GB` als Stimme eingestellt ist.

**Die Behoerdensaetze meinen Grossbritannien**: `council` statt
Einwohnermeldeamt, `council tax` als das, was einem als Erstes begegnet.
Fuer die USA waeren es andere Begriffe - wo der Unterschied den Satz
unbrauchbar machen wuerde, steht ein Hinweis.

**Kosenamen sind die interessanteste Stelle.** Englisch verkleinert nicht
wie Deutsch oder Russisch, sondern nimmt Suessigkeiten und Tiere:
`honey`, `babe`, `sweetheart`, `pet` (Nordengland). Woertliche
Uebersetzungen ("little treasure") sagt niemand.
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
 dict(kat='culture_immersion', de='Wo findet das Konzert statt?', en='Where is the concert?',
      k=[('konzert', ['concert'])]),
 dict(kat='culture_immersion', de='Wie viel kostet der Eintritt?', en='How much is the entry?',
      k=[('eintritt', ['entry', 'admission', 'ticket'])]),
 dict(kat='culture_immersion', de='Wann öffnet das Museum?', en='When does the museum open?',
      k=[('museum_oeffnet', ['when does the museum open', 'museum', 'open'])]),
 dict(kat='culture_immersion', de='Das war ein tolles Konzert.', en='That was a great concert.',
      k=[('tolles_konzert', ['great concert', 'amazing concert', 'brilliant'])]),
 dict(kat='culture_immersion', de='Ich gehe gerne ins Kino.', en='I like going to the cinema.',
      k=[('kino', ['cinema', 'movies'])],
      h='„Cinema" ist britisch, „the movies" amerikanisch — beides wird '
        'überall verstanden.'),
 dict(kat='culture_immersion', de='Ich interessiere mich für Geschichte.', en="I'm interested in history.",
      k=[('interessiere_geschichte', ['interested in history', 'history'])]),
 dict(kat='culture_immersion', de='Treibst du Sport?', en='Do you do any sport?',
      k=[('sport_frage', ['do you do sport', 'sport', 'sports'])]),
 dict(kat='culture_immersion', de='Ich spiele gerne Fußball.', en='I like playing football.',
      k=[('fussball', ['football', 'soccer'])],
      h='In Großbritannien „football", in den USA „soccer" — dort meint '
        '„football" den American Football.'),
 dict(kat='culture_immersion', de='Berlin ist sehr schön.', en='Berlin is very beautiful.',
      k=[('berlin_schoen', ['berlin', 'beautiful', 'lovely'])]),
 dict(kat='culture_immersion', de='Wir spielen Fußball.', en='We play football.',
      k=[('spielen_fussball', ['we play football', 'football'])]),
 dict(kat='culture_immersion', de='Wo ist die Kirche?', en='Where is the church?',
      k=[('kirche', ['church'])]),
 dict(kat='culture_immersion', de='Er ist gesprungen.', en='He jumped.',
      k=[('gesprungen', ['he jumped', 'jumped'])]),
 dict(kat='culture_immersion', de='Wie ist das Wetter heute?', en="What's the weather like today?",
      k=[('wetter_frage', ["what's the weather like", 'weather'])],
      h='Wetter ist in Großbritannien der Smalltalk schlechthin — die Frage '
        'öffnet fast jedes Gespräch und erwartet keine genaue Antwort.'),
 dict(kat='culture_immersion', de='Es regnet.', en="It's raining.",
      k=[('regnet', ["it's raining", 'raining'])]),
 dict(kat='culture_immersion', de='Die Sonne scheint.', en='The sun is shining.',
      k=[('sonne_scheint', ['sun is shining', 'sunny', 'sun'])]),
 dict(kat='culture_immersion', de='Es ist sehr kalt heute.', en="It's very cold today.",
      k=[('kalt', ['very cold', 'cold', 'freezing'])]),
 dict(kat='culture_immersion', de='Was machst du am Wochenende?', en='What are you doing at the weekend?',
      k=[('wochenende_frage', ['at the weekend', 'on the weekend', 'weekend'])],
      h='„At the weekend" ist britisch, „on the weekend" amerikanisch.'),
 dict(kat='culture_immersion', de='Möchtest du mitkommen?', en='Do you want to come along?',
      k=[('mitkommen', ['come along', 'come with', 'join'])]),
 dict(kat='culture_immersion', de='Letztes Wochenende war ich am Strand.', en='Last weekend I was at the beach.',
      k=[('strand', ['beach', 'seaside'])]),
 dict(kat='culture_immersion', de='Nächstes Wochenende gehe ich wandern.', en="Next weekend I'm going hiking.",
      k=[('wandern', ['hiking', 'walking', 'hike'])]),

# ============================================================ dating_romance
 dict(kat='dating_romance', de='Hast du einen festen Freund oder eine feste Freundin?',
      en='Do you have a boyfriend or a girlfriend?',
      k=[('fester_partner', ['boyfriend', 'girlfriend', 'partner'])],
      h='„Partner" ist die neutrale Form, ohne Geschlecht — und in '
        'Großbritannien völlig üblich, auch bei Unverheirateten.'),
 dict(kat='dating_romance', de='Wir sind gerade zusammen.', en="We're together.",
      k=[('zusammen_sein', ["we're together", 'together', 'seeing each other'])]),

# ========================================================== love_relationship
 dict(kat='love_relationship', de='Wie soll ich dich nennen?', en='What should I call you?',
      k=[('wie', ['what', 'how']),
         ('nennen', ['call you', 'call'])]),
 dict(kat='love_relationship', de='Ich nenne dich Schatz.', en='I call you sweetheart.',
      k=[('nennen', ['i call you', 'call']),
         ('schatz', ['sweetheart', 'darling', 'honey'])],
      h='Englisch verkleinert nicht wie das Deutsche, sondern nimmt '
        'Süßigkeiten: honey, sweetheart, sugar. „Darling" ist britischer und '
        'etwas älter.'),
 dict(kat='love_relationship', de='Kann ich dich Schatzi nennen?', en='Can I call you babe?',
      k=[('koennen', ['can i']),
         ('schatzi', ['babe', 'baby'])]),
 dict(kat='love_relationship', de='Er nennt mich Bärchen.', en='He calls me teddy bear.',
      k=[('nennen', ['he calls me', 'calls me']),
         ('baerchen', ['teddy bear', 'teddy', 'bear'])]),
 dict(kat='love_relationship', de='Sie nennt mich Süße.', en='She calls me sweetie.',
      k=[('nennen', ['she calls me', 'calls me']),
         ('suesse', ['sweetie', 'sweetheart'])]),
 dict(kat='love_relationship', de='Das ist mein Kosename für dich.', en="That's my pet name for you.",
      k=[('kosename', ['pet name', 'nickname'])],
      h='„Pet name" ist genau der Kosename — „nickname" ist neutraler und '
        'meint auch den Spitznamen unter Freunden.'),
 dict(kat='love_relationship', de='Ich mag diesen Spitznamen nicht so gern.', en="I don't really like that nickname.",
      k=[('nicht_gern', ["don't really like", "don't like"]),
         ('spitzname', ['nickname', 'pet name'])]),
 dict(kat='love_relationship', de='Nenn mich bitte nicht so!', en="Please don't call me that!",
      k=[('nennen', ["don't call me", 'call me']),
         ('nicht_so', ['that', 'like that'])]),

# ============================================================ moving_settling
 dict(kat='moving_settling', de='Wo finde ich einen Handwerker?', en='Where can I find a tradesman?',
      k=[('handwerker', ['tradesman', 'handyman', 'plumber'])],
      h='Wie überall ruft man in der Praxis das Gewerk: plumber (Klempner), '
        'electrician, joiner. „Handyman" ist der Allrounder für Kleinkram.'),
 dict(kat='moving_settling', de='Die Heizung funktioniert nicht.', en="The heating isn't working.",
      k=[('heizung_kaputt', ["heating isn't working", 'heating', 'not working'])]),
 dict(kat='moving_settling', de='Meine Nachbarn sind sehr nett.', en='My neighbours are very nice.',
      k=[('nachbarn_nett', ['neighbours', 'neighbors', 'nice'])]),
 dict(kat='moving_settling', de='Das Buch liegt auf dem Tisch.', en='The book is on the table.',
      k=[('buch_tisch', ['book', 'on the table'])]),
 dict(kat='moving_settling', de='Hier ist es sehr praktisch.', en="It's very convenient here.",
      k=[('praktisch', ['convenient', 'practical'])]),
 dict(kat='moving_settling', de='Ich muss den Strom anmelden.', en='I need to set up the electricity.',
      k=[('strom_anmelden', ['set up the electricity', 'electricity', 'set up'])]),
 dict(kat='moving_settling', de='Wie melde ich mich beim Einwohnermeldeamt an?', en='How do I register with the council?',
      k=[('einwohnermeldeamt', ['council', 'register with the council', 'register'])],
      h='Großbritannien hat kein Einwohnermeldeamt — man meldet sich beim '
        '„council" für die „council tax" an, und das ist auch der Nachweis, '
        'den Banken und Vermieter sehen wollen. Eine allgemeine Meldepflicht '
        'wie in Deutschland gibt es nicht.'),
 dict(kat='moving_settling', de='Ich brauche eine Bestätigung meiner Adresse.', en='I need proof of address.',
      k=[('adressbestaetigung', ['proof of address', 'address'])],
      h='„Proof of address" ist der Schlüsselbegriff für alles: Bankkonto, '
        'Handyvertrag, Arztanmeldung. Meist reicht eine Rechnung auf deinen '
        'Namen.'),
 dict(kat='moving_settling', de='Das kann ich erledigen.', en='I can sort that out.',
      k=[('erledigen', ['sort that out', 'sort it out', 'handle it'])]),
 dict(kat='moving_settling', de='Ich bezahle mit dem Handy.', en="I'll pay with my phone.",
      k=[('handy_bezahlen', ['with my phone', 'phone', 'contactless'])]),
 dict(kat='moving_settling', de='Ich suche eine Wohnung.', en="I'm looking for a flat.",
      k=[('wohnung_suchen', ['looking for a flat', 'flat', 'apartment'])],
      h='„Flat" ist britisch, „apartment" amerikanisch.'),
 dict(kat='moving_settling', de='Wie hoch ist die Miete?', en='How much is the rent?',
      k=[('miete', ['rent'])],
      h='Mieten werden in Großbritannien oft pro WOCHE angegeben, nicht pro '
        'Monat — „£250 pcm" heißt per calendar month, „£250 pw" per week. '
        'Der Unterschied ist erheblich.'),
 dict(kat='moving_settling', de='Ist die Kaution im Preis enthalten?', en='Is the deposit included in the price?',
      k=[('kaution', ['deposit'])]),
 dict(kat='moving_settling', de='Wann kann ich einziehen?', en='When can I move in?',
      k=[('einziehen', ['move in'])]),
 dict(kat='moving_settling', de='Gibt es einen Aufzug im Haus?', en='Is there a lift in the building?',
      k=[('aufzug', ['lift', 'elevator'])]),
 dict(kat='moving_settling', de='Gibt es hier einen Waschraum?', en='Is there a laundry room here?',
      k=[('waschraum', ['laundry room', 'laundry', 'washing machine'])]),
 dict(kat='moving_settling', de='Ich möchte den Mietvertrag unterschreiben.', en="I'd like to sign the tenancy agreement.",
      k=[('mietvertrag', ['tenancy agreement', 'lease', 'contract']),
         ('unterschreiben', ['sign'])]),
 dict(kat='moving_settling', de='Ich bin letzte Woche umgezogen.', en='I moved last week.',
      k=[('umgezogen', ['i moved', 'moved'])]),

# ========================================================== shopping_haggling
 dict(kat='shopping_haggling', de='Kann ich das anprobieren?', en='Can I try this on?',
      k=[('anprobieren', ['try this on', 'try on'])]),
 dict(kat='shopping_haggling', de='Wo ist die Umkleidekabine?', en='Where is the fitting room?',
      k=[('umkleidekabine', ['fitting room', 'changing room'])]),
 dict(kat='shopping_haggling', de='Haben Sie das auch in Größe M?', en='Do you have this in a medium?',
      k=[('groesse', ['medium', 'size'])]),
 dict(kat='shopping_haggling', de='Haben Sie das in einer anderen Farbe?', en='Do you have this in another colour?',
      k=[('andere_farbe', ['another colour', 'another color', 'colour'])]),
 dict(kat='shopping_haggling', de='Kann ich mit Karte bezahlen?', en='Can I pay by card?',
      k=[('karte_zahlen', ['by card', 'card'])]),
 dict(kat='shopping_haggling', de='Nur Bargeld, bitte.', en='Cash only, please.',
      k=[('bargeld', ['cash', 'cash only'])]),
 dict(kat='shopping_haggling', de='Das ist zu teuer.', en="That's too expensive.",
      k=[('zu_teuer', ['too expensive', 'too much'])]),
 dict(kat='shopping_haggling', de='Gibt es einen Rabatt?', en='Is there a discount?',
      k=[('rabatt', ['discount'])],
      h='Handeln ist im Laden unüblich — auf Märkten („car boot sale", '
        'Antikmärkte) dagegen erwartet.'),
 dict(kat='shopping_haggling', de='Haben Sie eine Tüte?', en='Do you have a bag?',
      k=[('tuete', ['bag', 'carrier bag'])]),
 dict(kat='shopping_haggling', de='Das gilt nicht als teuer.', en="That's not considered expensive.",
      k=[('nicht_teuer', ['not considered expensive', 'not expensive'])]),
 dict(kat='shopping_haggling', de='Ich möchte das zurückgeben.', en="I'd like to return this.",
      k=[('zurueckgeben', ['return this', 'return', 'refund'])]),
 dict(kat='shopping_haggling', de='Ich suche ein Geschenk für meine Mutter.', en="I'm looking for a present for my mum.",
      k=[('geschenk', ['present', 'gift'])]),
 dict(kat='shopping_haggling', de='Wann schließt das Geschäft?', en='What time does the shop close?',
      k=[('schliesst', ['close', 'closing time'])],
      h='„Shop" ist britisch, „store" amerikanisch. Sonntags schließen '
        'größere Läden in England schon nachmittags.'),
 dict(kat='shopping_haggling', de='Ich schaue mich nur um.', en="I'm just looking, thanks.",
      k=[('nur_umschauen', ['just looking', 'just browsing'])]),
 dict(kat='shopping_haggling', de='Können Sie mir helfen?', en='Could you help me?',
      k=[('helfen', ['help me', 'help'])]),
 dict(kat='shopping_haggling', de='Ich habe gestern ein neues Kleid gekauft.', en='I bought a new dress yesterday.',
      k=[('gekauft', ['i bought', 'bought']),
         ('kleid', ['dress'])]),

# ===================================================== smalltalk_socialising
 dict(kat='smalltalk_socialising', de='Bist du verheiratet?', en='Are you married?',
      k=[('verheiratet', ['married'])]),
 dict(kat='smalltalk_socialising', de='Hast du Geschwister?', en='Do you have any siblings?',
      k=[('geschwister', ['siblings', 'brothers or sisters'])]),
 dict(kat='smalltalk_socialising', de='Ich habe eine Schwester.', en='I have a sister.',
      k=[('schwester', ['sister'])]),
 dict(kat='smalltalk_socialising', de='Noch nicht.', en='Not yet.',
      k=[('noch_nicht', ['not yet'])]),
 dict(kat='smalltalk_socialising', de='Was sind deine Hobbys?', en='What are your hobbies?',
      k=[('hobbys_frage', ['your hobbies', 'hobbies'])]),
 dict(kat='smalltalk_socialising', de='Ich lese gerne Bücher.', en='I like reading books.',
      k=[('lesen', ['reading', 'books', 'read'])]),
 dict(kat='smalltalk_socialising', de='Mein Hobby ist Sport.', en='My hobby is sport.',
      k=[('hobby_sport', ['sport', 'sports'])]),
 dict(kat='smalltalk_socialising', de='Was machst du beruflich?', en='What do you do for a living?',
      k=[('beruf_frage', ['what do you do', 'for a living', 'work'])]),
 dict(kat='smalltalk_socialising', de='Ich bin Student.', en="I'm a student.",
      k=[('student', ['student'])]),
 dict(kat='smalltalk_socialising', de='Ich arbeite als Lehrer.', en='I work as a teacher.',
      k=[('beruf', ['teacher'])],
      h='Berufe stehen im Englischen IMMER mit Artikel: „I am a teacher", nie '
        '„I am teacher". Einer der häufigsten deutschen Fehler.'),
 dict(kat='smalltalk_socialising', de='Wo wohnst du?', en='Where do you live?',
      k=[('wo_wohnst', ['where do you live', 'live'])]),
 dict(kat='smalltalk_socialising', de='Ich wohne in Berlin.', en='I live in Berlin.',
      k=[('wohne_in', ['i live in berlin', 'berlin'])]),
]

AUSGELASSEN = []
