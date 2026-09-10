# -*- coding: utf-8 -*-
"""Reise, Hotel und Uni auf Norwegisch (Bokmaal), in einer Datei.

Zusammen 85 Saetze - travel_transportation (36), hotel_accommodation (25),
university_studying (24). Aufbau wie `kleine_kategorien_no.py`.

**Nichts ausgelassen.**

Was hier auffaellt und in den Hinweisen steht:

  Studiepoeng           sind die norwegischen Credits (ECTS, 60 im Jahr) -
                        "credits" sagt an der Uni niemand.
  Muenchen              heisst `München` wie bei uns, ohne Falle. Anders als
                        im Italienischen ("Monaco") war hier nichts zu
                        retten.
  Nachtruhe             gibt es als Wort, aber Hostels schreiben eher
                        `ro etter 23` an die Wand - der Satz nennt beides.
  Bahnhof/Zug           Norwegen faehrt weniger Zug als Deutschland; auf
                        vielen Strecken ist der Fernbus (`ekspressbuss`)
                        das eigentliche Verkehrsmittel. Steht am Bahnhof-
                        Satz.

**Kein Sie** - auch nicht am Hotelempfang oder im Uni-Sekretariat. Die
Saetze, die im Italienischen auf `Lei` laufen, stehen hier alle im Du.

**Nicht von Muttersprachlern geprueft.**
"""

KATEGORIEN = ['travel_transportation', 'hotel_accommodation', 'university_studying']

SAETZE = [

# ======================================================== hotel_accommodation
 dict(kat='hotel_accommodation', de='Ich möchte auschecken.', no='Jeg vil gjerne sjekke ut.',
      k=[('checkout', ['sjekke ut', 'utsjekk'])]),
 dict(kat='hotel_accommodation', de='Können Sie mir ein Taxi rufen?', no='Kan du bestille en taxi til meg?',
      k=[('taxi', ['taxi', 'drosje'])]),
 dict(kat='hotel_accommodation', de='Ich habe eine Reservierung.', no='Jeg har en reservasjon.',
      k=[('reservierung', ['reservasjon', 'bestilling'])]),
 dict(kat='hotel_accommodation', de='Haben Sie noch ein Zimmer frei?', no='Har dere et ledig rom?',
      k=[('zimmer_frage', ['ledig rom', 'rom'])]),
 dict(kat='hotel_accommodation', de='Ich möchte ein Einzelzimmer, bitte.', no='Jeg vil gjerne ha et enkeltrom.',
      k=[('einzelzimmer', ['enkeltrom'])]),
 dict(kat='hotel_accommodation', de='Wie viel kostet die Nacht?', no='Hva koster det per natt?',
      k=[('preis_nacht', ['per natt', 'natt'])]),
 dict(kat='hotel_accommodation', de='Wann ist der Check-in?', no='Når er innsjekkingen?',
      k=[('checkin', ['innsjekking', 'innsjekk', 'sjekke inn'])]),
 dict(kat='hotel_accommodation', de='Ist das ein Mehrbettzimmer?', no='Er dette et flersengsrom?',
      k=[('mehrbettzimmer', ['flersengsrom', 'sovesal', 'delt rom'])]),
 dict(kat='hotel_accommodation', de='Wie viele Betten hat der Schlafsaal?', no='Hvor mange senger er det på sovesalen?',
      k=[('wie_viele', ['hvor mange']),
         ('schlafsaal', ['sovesalen', 'sovesal'])]),
 dict(kat='hotel_accommodation', de='Ich hätte gern das untere Bett.', no='Jeg vil gjerne ha den nederste senga.',
      k=[('unteres_bett', ['nederste senga', 'nederste', 'under'])]),
 dict(kat='hotel_accommodation', de='Gibt es Schließfächer für das Gepäck?', no='Er det skap til bagasjen?',
      k=[('schliessfaecher', ['skap', 'oppbevaringsskap'])]),
 dict(kat='hotel_accommodation', de='Ist Bettwäsche im Preis inbegriffen?', no='Er sengetøy inkludert i prisen?',
      k=[('bettwaesche', ['sengetøy']),
         ('inbegriffen', ['inkludert'])]),
 dict(kat='hotel_accommodation', de='Kann ich ein Handtuch leihen?', no='Kan jeg låne et håndkle?',
      k=[('handtuch', ['håndkle']),
         ('leihen', ['låne'])]),
 dict(kat='hotel_accommodation', de='Gibt es eine Gemeinschaftsküche?', no='Er det et felleskjøkken?',
      k=[('gemeinschaftskueche', ['felleskjøkken', 'kjøkken'])],
      h='In Norwegen ist die Gemeinschaftsküche kein Nebenschauplatz, '
        'sondern Überlebensstrategie: Essengehen ist teuer, und fast alle '
        'im Hostel kochen selbst.'),
 dict(kat='hotel_accommodation', de='Gibt es eine Nachtruhe?', no='Er det ro etter et bestemt klokkeslett?',
      k=[('nachtruhe', ['ro', 'stille', 'ro etter'])],
      h='In Hostels hängt meist ein Schild „ro etter 23" — ab 23 Uhr Ruhe. '
        'Ein einzelnes Wort wie „Nachtruhe" gibt es nicht, man nennt die '
        'Uhrzeit.'),
 dict(kat='hotel_accommodation', de='Habt ihr einen Frauenschlafsaal?', no='Har dere en sovesal bare for kvinner?',
      k=[('frauenschlafsaal', ['bare for kvinner', 'kvinner', 'jenter'])]),
 dict(kat='hotel_accommodation', de='Muss ich eine Kaution hinterlegen?', no='Må jeg betale depositum?',
      k=[('kaution', ['depositum']),
         ('hinterlegen', ['betale', 'må jeg betale'])]),
 dict(kat='hotel_accommodation', de='Mein Zimmer ist nicht sauber.', no='Rommet mitt er ikke rent.',
      k=[('nicht_sauber', ['ikke rent', 'skittent'])]),
 dict(kat='hotel_accommodation', de='Die Klimaanlage funktioniert nicht.', no='Klimaanlegget virker ikke.',
      k=[('klimaanlage_kaputt', ['klimaanlegget', 'virker ikke'])]),
 dict(kat='hotel_accommodation', de='Ich habe meinen Schlüssel verloren.', no='Jeg har mistet nøkkelen.',
      k=[('schluessel_verloren', ['mistet nøkkelen', 'nøkkelen', 'mistet'])]),
 dict(kat='hotel_accommodation', de='Ist das Frühstück inklusive?', no='Er frokosten inkludert?',
      k=[('fruehstueck', ['frokost', 'frokosten'])],
      h='Das norwegische Hotelfrühstück ist üppig und enthält fast immer '
        'Lachs, Eier und braunen Käse („brunost") — und viele nutzen es, um '
        'sich gleich ein Pausenbrot („matpakke") zu schmieren.'),
 dict(kat='hotel_accommodation', de='Gibt es hier WLAN?', no='Har dere wifi her?',
      k=[('wlan', ['wifi', 'trådløst'])]),
 dict(kat='hotel_accommodation', de='Wie ist das Passwort für das WLAN?', no='Hva er passordet til wifien?',
      k=[('wlan_passwort', ['passordet', 'passord', 'wifi'])]),
 dict(kat='hotel_accommodation', de='Wo ist der Aufzug?', no='Hvor er heisen?',
      k=[('aufzug', ['heisen', 'heis'])]),
 dict(kat='hotel_accommodation', de='Das Zimmer ist sehr sauber.', no='Rommet er veldig rent.',
      k=[('zimmer_sauber', ['rommet', 'rent'])]),

# ===================================================== travel_transportation
 dict(kat='travel_transportation', de='Wo ist die Bushaltestelle?', no='Hvor er busstoppet?',
      k=[('bushaltestelle', ['busstoppet', 'busstopp', 'holdeplassen'])]),
 dict(kat='travel_transportation', de='Welcher Bus fährt zum Flughafen?', no='Hvilken buss går til flyplassen?',
      k=[('bus_flughafen', ['hvilken buss', 'buss']),
         ('flughafen', ['flyplassen', 'flyplass'])]),
 dict(kat='travel_transportation', de='Wir haben den Bus erwischt.', no='Vi rakk bussen.',
      k=[('bus_erwischt', ['vi rakk bussen', 'rakk', 'bussen'])]),
 dict(kat='travel_transportation', de='Ich habe meinen Flug verpasst.', no='Jeg mistet flyet.',
      k=[('flug_verpasst', ['mistet flyet', 'flyet', 'rakk ikke flyet'])]),
 dict(kat='travel_transportation', de='Wo ist der Check-in-Schalter?', no='Hvor er innsjekkingsskranken?',
      k=[('checkin_schalter', ['innsjekkingsskranken', 'innsjekking', 'skranken'])]),
 dict(kat='travel_transportation', de='Wo kann ich mein Gepäck aufgeben?', no='Hvor kan jeg sjekke inn bagasjen?',
      k=[('gepaeck_aufgeben', ['sjekke inn bagasjen', 'bagasjen', 'bagasje'])]),
 dict(kat='travel_transportation', de='Mein Gepäck ist nicht angekommen.', no='Bagasjen min har ikke kommet.',
      k=[('gepaeck_fehlt', ['bagasjen', 'har ikke kommet', 'ikke kommet'])]),
 dict(kat='travel_transportation', de='Wie komme ich zum Hafen?', no='Hvordan kommer jeg til havna?',
      k=[('hafen', ['havna', 'havn'])]),
 dict(kat='travel_transportation', de='Ich war letztes Jahr in Frankreich.', no='I fjor var jeg i Frankrike.',
      k=[('frankreich', ['frankrike'])]),
 dict(kat='travel_transportation', de='Nächstes Jahr fahre ich nach Italien.', no='Neste år skal jeg til Italia.',
      k=[('italien', ['italia'])]),
 dict(kat='travel_transportation', de='Wo wollt ihr hin?', no='Hvor skal dere?',
      k=[('wohin', ['hvor skal dere', 'hvor skal'])]),
 dict(kat='travel_transportation', de='Warte an der Kreuzung auf mich.', no='Vent på meg i krysset.',
      k=[('kreuzung', ['krysset', 'kryss']),
         ('warten', ['vent på meg', 'vent'])]),
 dict(kat='travel_transportation', de='Ich möchte eine Fahrkarte nach München, bitte.',
      no='Jeg vil gjerne ha en billett til München.',
      k=[('fahrkarte', ['billett']),
         ('muenchen', ['münchen', 'munchen'])]),
 dict(kat='travel_transportation', de='Ich möchte einen Mietwagen buchen.', no='Jeg vil gjerne leie en bil.',
      k=[('mietwagen', ['leie en bil', 'leiebil', 'bil'])]),
 dict(kat='travel_transportation', de='Wie viel kostet die Fahrt zum Flughafen?', no='Hva koster turen til flyplassen?',
      k=[('fahrt_kosten', ['hva koster turen', 'turen', 'hva koster']),
         ('flughafen', ['flyplassen', 'flyplass'])]),
 dict(kat='travel_transportation', de='Ich möchte ein Ticket.', no='Jeg vil gjerne ha en billett.',
      k=[('ticket', ['billett'])]),
 dict(kat='travel_transportation', de='Wo ist der Bahnhof?', no='Hvor er togstasjonen?',
      k=[('bahnhof', ['togstasjonen', 'stasjonen', 'jernbanestasjonen'])],
      h='Norwegen hat weniger Bahnstrecken, als man denkt — auf vielen '
        'Verbindungen ist der Fernbus („ekspressbuss") das eigentliche '
        'Verkehrsmittel, entlang der Küste die Fähre.'),
 dict(kat='travel_transportation', de='Wann fährt der nächste Zug nach Berlin?', no='Når går neste tog til Berlin?',
      k=[('naechster_zug', ['neste tog', 'tog']),
         ('berlin', ['berlin'])]),
 dict(kat='travel_transportation', de='Ist dieser Platz frei?', no='Er denne plassen ledig?',
      k=[('platz_frei', ['plassen ledig', 'ledig'])]),
 dict(kat='travel_transportation', de='Muss ich umsteigen?', no='Må jeg bytte?',
      k=[('umsteigen', ['bytte', 'må jeg bytte'])]),
 dict(kat='travel_transportation', de='Von welchem Gleis fährt der Zug ab?', no='Fra hvilket spor går toget?',
      k=[('gleis', ['spor', 'hvilket spor'])]),
 dict(kat='travel_transportation', de='Der Zug hat Verspätung.', no='Toget er forsinket.',
      k=[('verspaetung', ['forsinket', 'forsinkelse'])]),
 dict(kat='travel_transportation', de='Gehen Sie geradeaus.', no='Gå rett fram.',
      k=[('geradeaus', ['rett fram', 'rett frem'])]),
 dict(kat='travel_transportation', de='Biegen Sie links ab.', no='Ta til venstre.',
      k=[('links', ['til venstre', 'venstre'])]),
 dict(kat='travel_transportation', de='Biegen Sie rechts ab.', no='Ta til høyre.',
      k=[('rechts', ['til høyre', 'høyre'])]),
 dict(kat='travel_transportation', de='Es ist gleich um die Ecke.', no='Det er rett rundt hjørnet.',
      k=[('um_die_ecke', ['rundt hjørnet', 'hjørnet'])]),
 dict(kat='travel_transportation', de='Nehmen Sie die zweite Straße rechts.', no='Ta den andre gata til høyre.',
      k=[('zweite_strasse', ['andre gata', 'andre gate'])]),
 dict(kat='travel_transportation', de='Das Museum liegt gegenüber der Kirche.', no='Museet ligger rett overfor kirken.',
      k=[('museum', ['museet', 'museum']),
         ('kirche', ['kirken', 'kirke'])]),
 dict(kat='travel_transportation', de='Entschuldigung, wie komme ich zum Bahnhof?', no='Unnskyld, hvordan kommer jeg til togstasjonen?',
      k=[('bahnhof', ['togstasjonen', 'stasjonen'])]),
 dict(kat='travel_transportation', de='Ist das weit von hier?', no='Er det langt herfra?',
      k=[('weit', ['langt', 'langt herfra'])]),
 dict(kat='travel_transportation', de='Können Sie mir das auf der Karte zeigen?', no='Kan du vise meg det på kartet?',
      k=[('auf_karte', ['på kartet', 'kartet', 'kart'])]),
 dict(kat='travel_transportation', de='Ich habe mich verlaufen.', no='Jeg har gått meg bort.',
      k=[('verlaufen', ['gått meg bort', 'gått meg vill', 'bort'])]),
 dict(kat='travel_transportation', de='Wie weit ist es zu Fuß?', no='Hvor langt er det å gå?',
      k=[('zu_fuss', ['å gå', 'til fots'])]),
 dict(kat='travel_transportation', de='Wo ist der nächste Supermarkt?', no='Hvor er nærmeste matbutikk?',
      k=[('supermarkt', ['matbutikk', 'butikk', 'dagligvarebutikk'])],
      h='Der Supermarkt heißt im Alltag „matbutikk" (Essensladen); die '
        'Ketten sprechen sich als Wort — „Rema", „Kiwi", „Coop".'),
 dict(kat='travel_transportation', de='Ist das in der Nähe?', no='Er det i nærheten?',
      k=[('in_der_naehe', ['i nærheten', 'nærheten'])]),
 dict(kat='travel_transportation', de='Können Sie mir den Weg zeigen?', no='Kan du vise meg veien?',
      k=[('weg_zeigen', ['vise meg veien', 'veien'])]),

# ======================================================== university_studying
 dict(kat='university_studying', de='Ich habe drei Bücher.', no='Jeg har tre bøker.',
      k=[('drei_buecher', ['tre bøker', 'bøker'])]),
 dict(kat='university_studying', de='Ist hier noch ein Platz frei?', no='Er denne plassen ledig?',
      k=[('platz_frei', ['plassen ledig', 'ledig'])]),
 dict(kat='university_studying', de='Darf ich mich dazusetzen?', no='Kan jeg sette meg her?',
      k=[('dazusetzen', ['sette meg', 'kan jeg sette meg'])]),
 dict(kat='university_studying', de='Bist du auch neu hier?', no='Er du ny her også?',
      k=[('neu', ['ny']),
         ('hier', ['her', 'her også'])]),
 dict(kat='university_studying', de='Ich bin auch im ersten Semester.', no='Jeg går også første semester.',
      k=[('erstes_semester', ['første semester', 'første året'])]),
 dict(kat='university_studying', de='Was studierst du?', no='Hva studerer du?',
      k=[('studieren', ['hva studerer du', 'studerer'])]),
 dict(kat='university_studying', de='Gehst du auch zur nächsten Vorlesung?', no='Skal du på neste forelesning også?',
      k=[('vorlesung', ['forelesning', 'neste forelesning'])]),
 dict(kat='university_studying', de='Wollen wir uns nach der Vorlesung treffen?', no='Skal vi møtes etter forelesningen?',
      k=[('treffen', ['møtes', 'møte']),
         ('nach_vorlesung', ['etter forelesningen', 'forelesningen'])]),
 dict(kat='university_studying', de='Gibt es hier eine Gruppe für Austauschstudierende?',
      no='Finnes det en gruppe for utvekslingsstudenter her?',
      k=[('austauschstudierende', ['utvekslingsstudenter', 'erasmus', 'utveksling'])]),
 dict(kat='university_studying', de='Ich studiere Informatik.', no='Jeg studerer informatikk.',
      k=[('studiere', ['jeg studerer', 'studerer']),
         ('informatik', ['informatikk'])]),
 dict(kat='university_studying', de='In welchem Semester bist du?', no='Hvilket semester går du?',
      k=[('semester_frage', ['hvilket semester', 'semester'])]),
 dict(kat='university_studying', de='Wann ist die Anmeldefrist?', no='Når er søknadsfristen?',
      k=[('anmeldefrist', ['søknadsfristen', 'frist', 'søknadsfrist'])]),
 dict(kat='university_studying', de='Wie viele Credits brauche ich?', no='Hvor mange studiepoeng trenger jeg?',
      k=[('credits', ['studiepoeng', 'poeng'])],
      h='Credits heißen „studiepoeng" — 60 pro Studienjahr, deckungsgleich '
        'mit ECTS. Das englische „credits" benutzt an der Uni niemand.'),
 dict(kat='university_studying', de='Wo ist der Hörsaal?', no='Hvor er auditoriet?',
      k=[('hoersaal', ['auditoriet', 'auditorium'])]),
 dict(kat='university_studying', de='Wann beginnt die Vorlesung?', no='Når begynner forelesningen?',
      k=[('vorlesung_beginn', ['når begynner', 'forelesningen'])]),
 dict(kat='university_studying', de='Wo finde ich die Bibliothek?', no='Hvor finner jeg biblioteket?',
      k=[('bibliothek', ['biblioteket', 'bibliotek'])]),
 dict(kat='university_studying', de='Wer ist der Dozent für diesen Kurs?', no='Hvem er foreleseren i dette emnet?',
      k=[('dozent', ['foreleseren', 'foreleser', 'professoren'])],
      h='An norwegischen Unis redet man Dozenten mit dem VORNAMEN an — auch '
        'Professorinnen. Titel zu benutzen wirkt distanziert bis komisch.'),
 dict(kat='university_studying', de='Ich habe die Prüfung bestanden.', no='Jeg besto eksamen.',
      k=[('pruefung_bestanden', ['besto eksamen', 'bestått', 'eksamen'])]),
 dict(kat='university_studying', de='Ich habe morgen eine Prüfung.', no='Jeg har eksamen i morgen.',
      k=[('pruefung_morgen', ['eksamen i morgen', 'eksamen'])]),
 dict(kat='university_studying', de='Ich habe die Hausaufgabe vergessen.', no='Jeg glemte leksene.',
      k=[('hausaufgabe_vergessen', ['glemte leksene', 'leksene', 'glemte'])]),
 dict(kat='university_studying', de='Ich brauche mehr Zeit für die Hausarbeit.', no='Jeg trenger mer tid til oppgaven.',
      k=[('mehr_zeit_hausarbeit', ['mer tid', 'oppgaven', 'oppgave'])]),
 dict(kat='university_studying', de='Kann ich dieses Buch ausleihen?', no='Kan jeg låne denne boka?',
      k=[('ausleihen', ['låne', 'kan jeg låne'])]),
 dict(kat='university_studying', de='Können wir zusammen lernen?', no='Skal vi lese sammen?',
      k=[('zusammen_lernen', ['lese sammen', 'sammen', 'studere sammen'])],
      h='„Lese" heißt hier lernen, nicht lesen — „å lese til eksamen" ist '
        'das norwegische Wort fürs Pauken.'),
 dict(kat='university_studying', de='Ich unterrichte Chinesisch.', no='Jeg underviser i kinesisk.',
      k=[('unterrichte_chinesisch', ['underviser i kinesisk', 'kinesisk'])]),
]

AUSGELASSEN = []
