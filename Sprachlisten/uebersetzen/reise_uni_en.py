# -*- coding: utf-8 -*-
"""Reise, Hotel und Uni auf Englisch.

Zusammen 85 Saetze - travel_transportation (36), hotel_accommodation (25),
university_studying (24).

**Nichts ausgelassen.**

**Britisch, wo es auseinandergeht** - `underground`/`tube`, `single
room`, `queue`, `term`, `lecturer`. Die amerikanische Form steht jeweils
als Synonym in `k`.

**Uni-Vokabular ist die Stelle mit den meisten falschen Freunden**, und
zwar in beide Richtungen:
  Credits heissen in Grossbritannien `credits`, in den USA ebenso - das
  ist die eine Sprache, in der das englische Wort auch wirklich passt.
  `Semester` gibt es, gebraeuchlicher ist aber `term` (drei pro Jahr in
  England).
  Der `Dozent` ist `lecturer`, nicht `professor` - `professor` ist in
  Grossbritannien ein Titel fuer wenige, in den USA dagegen die normale
  Anrede fuer Lehrende. Steht als Hinweis am Satz.
  `Hausarbeit` ist `essay` oder `assignment`, nie `housework` - das
  waere die Hausarbeit im Haushalt.
"""

KATEGORIEN = ['travel_transportation', 'hotel_accommodation', 'university_studying']

SAETZE = [

# ======================================================== hotel_accommodation
 dict(kat='hotel_accommodation', de='Ich möchte auschecken.', en="I'd like to check out.",
      k=[('checkout', ['check out', 'checking out'])]),
 dict(kat='hotel_accommodation', de='Können Sie mir ein Taxi rufen?', en='Could you call me a taxi?',
      k=[('taxi', ['taxi', 'cab'])]),
 dict(kat='hotel_accommodation', de='Ich habe eine Reservierung.', en='I have a reservation.',
      k=[('reservierung', ['reservation', 'booking'])]),
 dict(kat='hotel_accommodation', de='Haben Sie noch ein Zimmer frei?', en='Do you have a room available?',
      k=[('zimmer_frage', ['room available', 'a room', 'free room'])]),
 dict(kat='hotel_accommodation', de='Ich möchte ein Einzelzimmer, bitte.', en="I'd like a single room, please.",
      k=[('einzelzimmer', ['single room', 'single'])]),
 dict(kat='hotel_accommodation', de='Wie viel kostet die Nacht?', en='How much is it per night?',
      k=[('preis_nacht', ['per night', 'a night', 'night'])]),
 dict(kat='hotel_accommodation', de='Wann ist der Check-in?', en='What time is check-in?',
      k=[('checkin', ['check-in', 'checkin', 'check in'])]),
 dict(kat='hotel_accommodation', de='Ist das ein Mehrbettzimmer?', en='Is this a shared room?',
      k=[('mehrbettzimmer', ['shared room', 'dorm', 'dormitory'])]),
 dict(kat='hotel_accommodation', de='Wie viele Betten hat der Schlafsaal?', en='How many beds are in the dorm?',
      k=[('wie_viele', ['how many']),
         ('schlafsaal', ['dorm', 'dormitory'])]),
 dict(kat='hotel_accommodation', de='Ich hätte gern das untere Bett.', en="I'd like the bottom bunk.",
      k=[('unteres_bett', ['bottom bunk', 'bottom bed', 'lower bunk'])],
      h='„Bunk" ist das Etagenbett — „top bunk" und „bottom bunk" sind die '
        'Wörter, die im Hostel wirklich fallen.'),
 dict(kat='hotel_accommodation', de='Gibt es Schließfächer für das Gepäck?', en='Are there lockers for luggage?',
      k=[('schliessfaecher', ['lockers', 'locker'])]),
 dict(kat='hotel_accommodation', de='Ist Bettwäsche im Preis inbegriffen?', en='Is bedding included in the price?',
      k=[('bettwaesche', ['bedding', 'linen', 'sheets']),
         ('inbegriffen', ['included'])]),
 dict(kat='hotel_accommodation', de='Kann ich ein Handtuch leihen?', en='Can I hire a towel?',
      k=[('handtuch', ['towel']),
         ('leihen', ['hire', 'rent', 'borrow'])],
      h='„Hire" ist britisch, „rent" amerikanisch. Handtücher kosten im '
        'Hostel fast immer extra.'),
 dict(kat='hotel_accommodation', de='Gibt es eine Gemeinschaftsküche?', en='Is there a shared kitchen?',
      k=[('gemeinschaftskueche', ['shared kitchen', 'kitchen', 'communal kitchen'])]),
 dict(kat='hotel_accommodation', de='Gibt es eine Nachtruhe?', en='Is there a quiet time at night?',
      k=[('nachtruhe', ['quiet time', 'quiet hours', 'curfew'])]),
 dict(kat='hotel_accommodation', de='Habt ihr einen Frauenschlafsaal?', en='Do you have a female-only dorm?',
      k=[('frauenschlafsaal', ['female-only dorm', 'female dorm', 'women only'])]),
 dict(kat='hotel_accommodation', de='Muss ich eine Kaution hinterlegen?', en='Do I need to leave a deposit?',
      k=[('kaution', ['deposit']),
         ('hinterlegen', ['leave', 'pay'])]),
 dict(kat='hotel_accommodation', de='Mein Zimmer ist nicht sauber.', en='My room is not clean.',
      k=[('nicht_sauber', ['not clean', 'dirty'])]),
 dict(kat='hotel_accommodation', de='Die Klimaanlage funktioniert nicht.', en="The air conditioning isn't working.",
      k=[('klimaanlage_kaputt', ['air conditioning', 'aircon', "isn't working"])]),
 dict(kat='hotel_accommodation', de='Ich habe meinen Schlüssel verloren.', en="I've lost my key.",
      k=[('schluessel_verloren', ["lost my key", 'key', 'lost'])]),
 dict(kat='hotel_accommodation', de='Ist das Frühstück inklusive?', en='Is breakfast included?',
      k=[('fruehstueck', ['breakfast'])],
      h='Das „full English" ist ein warmes Frühstück mit Eiern, Speck, Bohnen '
        'und Toast — deutlich üppiger als das kontinentale, das man in '
        'Hostels eher bekommt.'),
 dict(kat='hotel_accommodation', de='Gibt es hier WLAN?', en='Do you have wifi here?',
      k=[('wlan', ['wifi', 'wi-fi'])],
      h='„WLAN" versteht außerhalb des deutschen Sprachraums niemand — es '
        'heißt überall wifi.'),
 dict(kat='hotel_accommodation', de='Wie ist das Passwort für das WLAN?', en="What's the wifi password?",
      k=[('wlan_passwort', ['wifi password', 'password'])]),
 dict(kat='hotel_accommodation', de='Wo ist der Aufzug?', en='Where is the lift?',
      k=[('aufzug', ['lift', 'elevator'])]),
 dict(kat='hotel_accommodation', de='Das Zimmer ist sehr sauber.', en='The room is very clean.',
      k=[('zimmer_sauber', ['room', 'very clean', 'clean'])]),

# ===================================================== travel_transportation
 dict(kat='travel_transportation', de='Wo ist die Bushaltestelle?', en='Where is the bus stop?',
      k=[('bushaltestelle', ['bus stop'])]),
 dict(kat='travel_transportation', de='Welcher Bus fährt zum Flughafen?', en='Which bus goes to the airport?',
      k=[('bus_flughafen', ['which bus', 'bus']),
         ('flughafen', ['airport'])]),
 dict(kat='travel_transportation', de='Wir haben den Bus erwischt.', en='We caught the bus.',
      k=[('bus_erwischt', ['caught the bus', 'caught', 'bus'])]),
 dict(kat='travel_transportation', de='Ich habe meinen Flug verpasst.', en="I've missed my flight.",
      k=[('flug_verpasst', ['missed my flight', 'missed', 'flight'])]),
 dict(kat='travel_transportation', de='Wo ist der Check-in-Schalter?', en='Where is the check-in desk?',
      k=[('checkin_schalter', ['check-in desk', 'check-in', 'desk'])]),
 dict(kat='travel_transportation', de='Wo kann ich mein Gepäck aufgeben?', en='Where can I drop off my luggage?',
      k=[('gepaeck_aufgeben', ['drop off my luggage', 'bag drop', 'luggage'])]),
 dict(kat='travel_transportation', de='Mein Gepäck ist nicht angekommen.', en="My luggage hasn't arrived.",
      k=[('gepaeck_fehlt', ["luggage hasn't arrived", 'luggage', 'baggage'])]),
 dict(kat='travel_transportation', de='Wie komme ich zum Hafen?', en='How do I get to the harbour?',
      k=[('hafen', ['harbour', 'harbor', 'port'])]),
 dict(kat='travel_transportation', de='Ich war letztes Jahr in Frankreich.', en='I was in France last year.',
      k=[('frankreich', ['france'])]),
 dict(kat='travel_transportation', de='Nächstes Jahr fahre ich nach Italien.', en="Next year I'm going to Italy.",
      k=[('italien', ['italy'])]),
 dict(kat='travel_transportation', de='Wo wollt ihr hin?', en='Where are you going?',
      k=[('wohin', ['where are you going', 'where to'])]),
 dict(kat='travel_transportation', de='Warte an der Kreuzung auf mich.', en='Wait for me at the crossroads.',
      k=[('kreuzung', ['crossroads', 'junction', 'intersection']),
         ('warten', ['wait for me', 'wait'])]),
 dict(kat='travel_transportation', de='Ich möchte eine Fahrkarte nach München, bitte.',
      en="I'd like a ticket to Munich, please.",
      k=[('fahrkarte', ['ticket']),
         ('muenchen', ['munich'])],
      h='München heißt auf Englisch „Munich" — die deutsche Schreibweise '
        'versteht am Schalter niemand.'),
 dict(kat='travel_transportation', de='Ich möchte einen Mietwagen buchen.', en="I'd like to hire a car.",
      k=[('mietwagen', ['hire a car', 'rent a car', 'car hire'])]),
 dict(kat='travel_transportation', de='Wie viel kostet die Fahrt zum Flughafen?', en='How much is the fare to the airport?',
      k=[('fahrt_kosten', ['fare', 'how much is the fare', 'how much']),
         ('flughafen', ['airport'])]),
 dict(kat='travel_transportation', de='Ich möchte ein Ticket.', en="I'd like a ticket.",
      k=[('ticket', ['ticket'])]),
 dict(kat='travel_transportation', de='Wo ist der Bahnhof?', en='Where is the train station?',
      k=[('bahnhof', ['train station', 'station', 'railway station'])]),
 dict(kat='travel_transportation', de='Wann fährt der nächste Zug nach Berlin?', en='When is the next train to Berlin?',
      k=[('naechster_zug', ['next train', 'train']),
         ('berlin', ['berlin'])]),
 dict(kat='travel_transportation', de='Ist dieser Platz frei?', en='Is this seat taken?',
      k=[('platz_frei', ['is this seat taken', 'seat taken', 'free'])],
      h='Englisch fragt umgekehrt: „is this seat taken?" (ist er BESETZT), '
        'nicht ob er frei ist. Die Antwort „no" heißt also, dass du dich '
        'setzen kannst.'),
 dict(kat='travel_transportation', de='Muss ich umsteigen?', en='Do I have to change?',
      k=[('umsteigen', ['change', 'change trains'])]),
 dict(kat='travel_transportation', de='Von welchem Gleis fährt der Zug ab?', en='Which platform does the train leave from?',
      k=[('gleis', ['platform', 'track'])]),
 dict(kat='travel_transportation', de='Der Zug hat Verspätung.', en='The train is delayed.',
      k=[('verspaetung', ['delayed', 'delay', 'late'])]),
 dict(kat='travel_transportation', de='Gehen Sie geradeaus.', en='Go straight ahead.',
      k=[('geradeaus', ['straight ahead', 'straight on', 'straight'])]),
 dict(kat='travel_transportation', de='Biegen Sie links ab.', en='Turn left.',
      k=[('links', ['turn left', 'left'])]),
 dict(kat='travel_transportation', de='Biegen Sie rechts ab.', en='Turn right.',
      k=[('rechts', ['turn right', 'right'])]),
 dict(kat='travel_transportation', de='Es ist gleich um die Ecke.', en="It's just around the corner.",
      k=[('um_die_ecke', ['around the corner', 'round the corner', 'corner'])]),
 dict(kat='travel_transportation', de='Nehmen Sie die zweite Straße rechts.', en='Take the second street on the right.',
      k=[('zweite_strasse', ['second street', 'second road', 'second'])]),
 dict(kat='travel_transportation', de='Das Museum liegt gegenüber der Kirche.', en='The museum is opposite the church.',
      k=[('museum', ['museum']),
         ('kirche', ['church'])]),
 dict(kat='travel_transportation', de='Entschuldigung, wie komme ich zum Bahnhof?', en='Excuse me, how do I get to the station?',
      k=[('bahnhof', ['station', 'train station'])]),
 dict(kat='travel_transportation', de='Ist das weit von hier?', en='Is it far from here?',
      k=[('weit', ['far', 'far from here'])]),
 dict(kat='travel_transportation', de='Können Sie mir das auf der Karte zeigen?', en='Could you show me on the map?',
      k=[('auf_karte', ['on the map', 'map'])]),
 dict(kat='travel_transportation', de='Ich habe mich verlaufen.', en="I'm lost.",
      k=[('verlaufen', ["i'm lost", 'lost'])]),
 dict(kat='travel_transportation', de='Wie weit ist es zu Fuß?', en='How far is it on foot?',
      k=[('zu_fuss', ['on foot', 'walking', 'walk'])]),
 dict(kat='travel_transportation', de='Wo ist der nächste Supermarkt?', en='Where is the nearest supermarket?',
      k=[('supermarkt', ['supermarket'])]),
 dict(kat='travel_transportation', de='Ist das in der Nähe?', en='Is it nearby?',
      k=[('in_der_naehe', ['nearby', 'near here', 'close'])]),
 dict(kat='travel_transportation', de='Können Sie mir den Weg zeigen?', en='Could you show me the way?',
      k=[('weg_zeigen', ['show me the way', 'the way'])]),

# ======================================================== university_studying
 dict(kat='university_studying', de='Ich habe drei Bücher.', en='I have three books.',
      k=[('drei_buecher', ['three books', 'books'])]),
 dict(kat='university_studying', de='Ist hier noch ein Platz frei?', en='Is this seat free?',
      k=[('platz_frei', ['seat free', 'is this seat taken', 'free'])]),
 dict(kat='university_studying', de='Darf ich mich dazusetzen?', en='Can I sit here?',
      k=[('dazusetzen', ['can i sit here', 'sit here', 'join you'])]),
 dict(kat='university_studying', de='Bist du auch neu hier?', en='Are you new here too?',
      k=[('neu', ['new']),
         ('hier', ['here', 'too'])]),
 dict(kat='university_studying', de='Ich bin auch im ersten Semester.', en="I'm in my first year too.",
      k=[('erstes_semester', ['first year', 'first semester', 'fresher'])],
      h='In Großbritannien zählt man in Studienjahren, nicht in Semestern — '
        'und Erstsemester heißen „freshers".'),
 dict(kat='university_studying', de='Was studierst du?', en='What are you studying?',
      k=[('studieren', ['what are you studying', 'studying'])]),
 dict(kat='university_studying', de='Gehst du auch zur nächsten Vorlesung?', en='Are you going to the next lecture too?',
      k=[('vorlesung', ['lecture', 'next lecture'])]),
 dict(kat='university_studying', de='Wollen wir uns nach der Vorlesung treffen?', en='Shall we meet after the lecture?',
      k=[('treffen', ['shall we meet', 'meet']),
         ('nach_vorlesung', ['after the lecture', 'lecture'])]),
 dict(kat='university_studying', de='Gibt es hier eine Gruppe für Austauschstudierende?',
      en='Is there a group for exchange students here?',
      k=[('austauschstudierende', ['exchange students', 'erasmus', 'international students'])]),
 dict(kat='university_studying', de='Ich studiere Informatik.', en='I study computer science.',
      k=[('studiere', ['i study', 'studying']),
         ('informatik', ['computer science'])],
      h='„Informatics" gibt es als Wort, meint aber etwas anderes — das Fach '
        'heißt „computer science".'),
 dict(kat='university_studying', de='In welchem Semester bist du?', en='What year are you in?',
      k=[('semester_frage', ['what year', 'which year', 'semester'])]),
 dict(kat='university_studying', de='Wann ist die Anmeldefrist?', en="When is the application deadline?",
      k=[('anmeldefrist', ['application deadline', 'deadline'])]),
 dict(kat='university_studying', de='Wie viele Credits brauche ich?', en='How many credits do I need?',
      k=[('credits', ['credits'])],
      h='Die eine Sprache, in der „credits" auch wirklich das Wort ist — in '
        'Italien heißen sie CFU, in Norwegen studiepoeng, in Russland '
        'зачётные единицы.'),
 dict(kat='university_studying', de='Wo ist der Hörsaal?', en='Where is the lecture hall?',
      k=[('hoersaal', ['lecture hall', 'lecture theatre', 'theatre'])]),
 dict(kat='university_studying', de='Wann beginnt die Vorlesung?', en='When does the lecture start?',
      k=[('vorlesung_beginn', ['when does the lecture start', 'lecture', 'start'])]),
 dict(kat='university_studying', de='Wo finde ich die Bibliothek?', en='Where can I find the library?',
      k=[('bibliothek', ['library'])]),
 dict(kat='university_studying', de='Wer ist der Dozent für diesen Kurs?', en='Who is the lecturer for this course?',
      k=[('dozent', ['lecturer', 'tutor', 'professor'])],
      h='In Großbritannien ist „professor" ein Titel für wenige — Lehrende '
        'heißen „lecturer" oder „tutor". In den USA ist „professor" dagegen '
        'die normale Anrede.'),
 dict(kat='university_studying', de='Ich habe die Prüfung bestanden.', en="I've passed the exam.",
      k=[('pruefung_bestanden', ['passed the exam', 'passed'])]),
 dict(kat='university_studying', de='Ich habe morgen eine Prüfung.', en='I have an exam tomorrow.',
      k=[('pruefung_morgen', ['exam tomorrow', 'exam'])]),
 dict(kat='university_studying', de='Ich habe die Hausaufgabe vergessen.', en="I've forgotten my homework.",
      k=[('hausaufgabe_vergessen', ['forgotten my homework', 'homework', 'forgot'])]),
 dict(kat='university_studying', de='Ich brauche mehr Zeit für die Hausarbeit.', en='I need more time for the essay.',
      k=[('mehr_zeit_hausarbeit', ['more time', 'essay', 'assignment'])],
      h='„Hausarbeit" im Uni-Sinn ist „essay" oder „assignment" — „housework" '
        'wäre das Putzen zu Hause.'),
 dict(kat='university_studying', de='Kann ich dieses Buch ausleihen?', en='Can I borrow this book?',
      k=[('ausleihen', ['borrow'])],
      h='„Borrow" heißt sich leihen, „lend" heißt verleihen — Deutsche '
        'verwechseln die beiden ständig, weil „leihen" für beides steht.'),
 dict(kat='university_studying', de='Können wir zusammen lernen?', en='Shall we study together?',
      k=[('zusammen_lernen', ['study together', 'together'])]),
 dict(kat='university_studying', de='Ich unterrichte Chinesisch.', en='I teach Chinese.',
      k=[('unterrichte_chinesisch', ['i teach chinese', 'chinese', 'teach'])]),
]

AUSGELASSEN = []
