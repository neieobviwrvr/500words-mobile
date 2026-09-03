# -*- coding: utf-8 -*-
"""Reise, Hotel und Uni auf Polnisch.

Zusammen 85 Saetze - travel_transportation (36), hotel_accommodation (25),
university_studying (24).

**Nichts ausgelassen.**

Aussprache-Grundregeln stehen im Kopf von `grundwortschatz_pl.py`.

Was in Polen anders laeuft und deshalb am Satz kommentiert ist:

  Muenchen        heisst `Monachium` - eine der polnischen
                  Stadt-Eigenformen, die man am Schalter braucht:
                  Kolonia (Koeln), Lipsk (Leipzig), Wiedeń (Wien),
                  Drezno (Dresden).
  Credits         heissen `punkty ECTS`, im Studentenmund nur `ECTS`.
  Dozent          `wykładowca`; angeredet wird aber mit `pani doktor` /
                  `panie profesorze` - Titel zaehlen an polnischen Unis
                  deutlich mehr als in Norwegen oder Grossbritannien.
  Studienjahr     `rok`, nicht Semester - wie im Russischen zaehlt man in
                  Jahren.
  Zug             Fernzuege sind `PKP Intercity`, Nahverkehr `Koleje
                  Regionalne`. Fernbusse (`FlixBus`) sind auf vielen
                  Strecken schneller und billiger.

**Nicht von Muttersprachlern geprueft.**
"""

KATEGORIEN = ['travel_transportation', 'hotel_accommodation', 'university_studying']

SAETZE = [

# ======================================================== hotel_accommodation
 dict(kat='hotel_accommodation', de='Ich möchte auschecken.', pl='Chcę się wymeldować.',
      k=[('checkout', ['wymeldować', 'wymeldowanie'])]),
 dict(kat='hotel_accommodation', de='Können Sie mir ein Taxi rufen?', pl='Czy może pan zamówić mi taksówkę?',
      k=[('taxi', ['taksówkę', 'taksówka'])]),
 dict(kat='hotel_accommodation', de='Ich habe eine Reservierung.', pl='Mam rezerwację.',
      k=[('reservierung', ['rezerwację', 'rezerwacja'])]),
 dict(kat='hotel_accommodation', de='Haben Sie noch ein Zimmer frei?', pl='Czy jest wolny pokój?',
      k=[('zimmer_frage', ['wolny pokój', 'pokój'])]),
 dict(kat='hotel_accommodation', de='Ich möchte ein Einzelzimmer, bitte.', pl='Poproszę pokój jednoosobowy.',
      k=[('einzelzimmer', ['pokój jednoosobowy', 'jednoosobowy'])]),
 dict(kat='hotel_accommodation', de='Wie viel kostet die Nacht?', pl='Ile kosztuje za noc?',
      k=[('preis_nacht', ['za noc', 'noc'])]),
 dict(kat='hotel_accommodation', de='Wann ist der Check-in?', pl='O której jest zameldowanie?',
      k=[('checkin', ['zameldowanie', 'zameldować'])]),
 dict(kat='hotel_accommodation', de='Ist das ein Mehrbettzimmer?', pl='Czy to pokój wieloosobowy?',
      k=[('mehrbettzimmer', ['pokój wieloosobowy', 'wieloosobowy', 'dormitorium'])]),
 dict(kat='hotel_accommodation', de='Wie viele Betten hat der Schlafsaal?', pl='Ile łóżek jest w pokoju?',
      k=[('wie_viele', ['ile']),
         ('schlafsaal', ['łóżek', 'w pokoju', 'pokój'])]),
 dict(kat='hotel_accommodation', de='Ich hätte gern das untere Bett.', pl='Poproszę dolne łóżko.',
      k=[('unteres_bett', ['dolne łóżko', 'dolne'])]),
 dict(kat='hotel_accommodation', de='Gibt es Schließfächer für das Gepäck?', pl='Czy są szafki na bagaż?',
      k=[('schliessfaecher', ['szafki', 'szafka'])]),
 dict(kat='hotel_accommodation', de='Ist Bettwäsche im Preis inbegriffen?', pl='Czy pościel jest wliczona w cenę?',
      k=[('bettwaesche', ['pościel']),
         ('inbegriffen', ['wliczona', 'w cenie'])]),
 dict(kat='hotel_accommodation', de='Kann ich ein Handtuch leihen?', pl='Czy mogę wypożyczyć ręcznik?',
      k=[('handtuch', ['ręcznik']),
         ('leihen', ['wypożyczyć', 'pożyczyć'])]),
 dict(kat='hotel_accommodation', de='Gibt es eine Gemeinschaftsküche?', pl='Czy jest wspólna kuchnia?',
      k=[('gemeinschaftskueche', ['wspólna kuchnia', 'kuchnia'])]),
 dict(kat='hotel_accommodation', de='Gibt es eine Nachtruhe?', pl='Czy jest cisza nocna?',
      k=[('nachtruhe', ['cisza nocna', 'cisza'])],
      h='„Cisza nocna" ist in Polen gesetzlich geregelt — meist von 22 bis 6 '
        'Uhr, und daran hält man sich auch in Wohnhäusern.'),
 dict(kat='hotel_accommodation', de='Habt ihr einen Frauenschlafsaal?', pl='Czy jest pokój tylko dla kobiet?',
      k=[('frauenschlafsaal', ['tylko dla kobiet', 'dla kobiet', 'kobiet'])]),
 dict(kat='hotel_accommodation', de='Muss ich eine Kaution hinterlegen?', pl='Czy muszę wpłacić kaucję?',
      k=[('kaution', ['kaucję', 'kaucja']),
         ('hinterlegen', ['wpłacić', 'zostawić'])]),
 dict(kat='hotel_accommodation', de='Mein Zimmer ist nicht sauber.', pl='Mój pokój nie jest czysty.',
      k=[('nicht_sauber', ['nie jest czysty', 'brudny'])]),
 dict(kat='hotel_accommodation', de='Die Klimaanlage funktioniert nicht.', pl='Klimatyzacja nie działa.',
      k=[('klimaanlage_kaputt', ['klimatyzacja', 'nie działa'])]),
 dict(kat='hotel_accommodation', de='Ich habe meinen Schlüssel verloren.', pl='Zgubiłem klucz.',
      k=[('schluessel_verloren', ['zgubiłem klucz', 'zgubiłam klucz', 'klucz'])]),
 dict(kat='hotel_accommodation', de='Ist das Frühstück inklusive?', pl='Czy śniadanie jest wliczone?',
      k=[('fruehstueck', ['śniadanie'])]),
 dict(kat='hotel_accommodation', de='Gibt es hier WLAN?', pl='Czy jest tu wifi?',
      k=[('wlan', ['wifi', 'internet'])]),
 dict(kat='hotel_accommodation', de='Wie ist das Passwort für das WLAN?', pl='Jakie jest hasło do wifi?',
      k=[('wlan_passwort', ['hasło do wifi', 'hasło'])]),
 dict(kat='hotel_accommodation', de='Wo ist der Aufzug?', pl='Gdzie jest winda?',
      k=[('aufzug', ['winda'])]),
 dict(kat='hotel_accommodation', de='Das Zimmer ist sehr sauber.', pl='Pokój jest bardzo czysty.',
      k=[('zimmer_sauber', ['pokój', 'czysty'])]),

# ===================================================== travel_transportation
 dict(kat='travel_transportation', de='Wo ist die Bushaltestelle?', pl='Gdzie jest przystanek autobusowy?',
      k=[('bushaltestelle', ['przystanek autobusowy', 'przystanek'])]),
 dict(kat='travel_transportation', de='Welcher Bus fährt zum Flughafen?', pl='Który autobus jedzie na lotnisko?',
      k=[('bus_flughafen', ['który autobus', 'autobus']),
         ('flughafen', ['lotnisko'])]),
 dict(kat='travel_transportation', de='Wir haben den Bus erwischt.', pl='Zdążyliśmy na autobus.',
      k=[('bus_erwischt', ['zdążyliśmy', 'na autobus', 'autobus'])]),
 dict(kat='travel_transportation', de='Ich habe meinen Flug verpasst.', pl='Spóźniłem się na samolot.',
      k=[('flug_verpasst', ['spóźniłem się na samolot', 'spóźniłam się', 'samolot'])]),
 dict(kat='travel_transportation', de='Wo ist der Check-in-Schalter?', pl='Gdzie jest stanowisko odprawy?',
      k=[('checkin_schalter', ['stanowisko odprawy', 'odprawa', 'odprawy'])]),
 dict(kat='travel_transportation', de='Wo kann ich mein Gepäck aufgeben?', pl='Gdzie mogę nadać bagaż?',
      k=[('gepaeck_aufgeben', ['nadać bagaż', 'bagaż'])]),
 dict(kat='travel_transportation', de='Mein Gepäck ist nicht angekommen.', pl='Mój bagaż nie dotarł.',
      k=[('gepaeck_fehlt', ['bagaż nie dotarł', 'bagaż', 'nie dotarł'])]),
 dict(kat='travel_transportation', de='Wie komme ich zum Hafen?', pl='Jak dojadę do portu?',
      k=[('hafen', ['portu', 'port'])]),
 dict(kat='travel_transportation', de='Ich war letztes Jahr in Frankreich.', pl='W zeszłym roku byłem we Francji.',
      k=[('frankreich', ['francji', 'francja'])]),
 dict(kat='travel_transportation', de='Nächstes Jahr fahre ich nach Italien.', pl='W przyszłym roku jadę do Włoch.',
      k=[('italien', ['włoch', 'włochy'])],
      h='Italien heißt „Włochy" — eine der polnischen Ländernamen-Eigenformen, '
        'die man nicht erraten kann.'),
 dict(kat='travel_transportation', de='Wo wollt ihr hin?', pl='Dokąd idziecie?',
      k=[('wohin', ['dokąd idziecie', 'dokąd'])]),
 dict(kat='travel_transportation', de='Warte an der Kreuzung auf mich.', pl='Czekaj na mnie na skrzyżowaniu.',
      k=[('kreuzung', ['skrzyżowaniu', 'skrzyżowanie']),
         ('warten', ['czekaj na mnie', 'czekaj'])]),
 dict(kat='travel_transportation', de='Ich möchte eine Fahrkarte nach München, bitte.',
      pl='Poproszę bilet do Monachium.',
      k=[('fahrkarte', ['bilet']),
         ('muenchen', ['monachium'])],
      h='München heißt auf Polnisch „Monachium". Auch Köln (Kolonia), Leipzig '
        '(Lipsk), Wien (Wiedeń) und Dresden (Drezno) haben eigene Formen — am '
        'Schalter hilft die deutsche nicht weiter.'),
 dict(kat='travel_transportation', de='Ich möchte einen Mietwagen buchen.', pl='Chcę wynająć samochód.',
      k=[('mietwagen', ['wynająć samochód', 'samochód'])]),
 dict(kat='travel_transportation', de='Wie viel kostet die Fahrt zum Flughafen?', pl='Ile kosztuje przejazd na lotnisko?',
      k=[('fahrt_kosten', ['przejazd', 'ile kosztuje']),
         ('flughafen', ['lotnisko'])]),
 dict(kat='travel_transportation', de='Ich möchte ein Ticket.', pl='Poproszę bilet.',
      k=[('ticket', ['bilet'])]),
 dict(kat='travel_transportation', de='Wo ist der Bahnhof?', pl='Gdzie jest dworzec?',
      k=[('bahnhof', ['dworzec', 'dworzec kolejowy'])],
      h='„Dworzec" ist der Bahnhof als Gebäude, „stacja" die Haltestelle. Für '
        'Fernstrecken lohnt der Blick auf FlixBus — auf vielen Verbindungen '
        'schneller und billiger als die Bahn.'),
 dict(kat='travel_transportation', de='Wann fährt der nächste Zug nach Berlin?', pl='O której jest następny pociąg do Berlina?',
      k=[('naechster_zug', ['następny pociąg', 'pociąg']),
         ('berlin', ['berlina', 'berlin'])]),
 dict(kat='travel_transportation', de='Ist dieser Platz frei?', pl='Czy to miejsce jest wolne?',
      k=[('platz_frei', ['miejsce jest wolne', 'wolne', 'miejsce'])]),
 dict(kat='travel_transportation', de='Muss ich umsteigen?', pl='Czy muszę się przesiadać?',
      k=[('umsteigen', ['przesiadać', 'przesiadka'])]),
 dict(kat='travel_transportation', de='Von welchem Gleis fährt der Zug ab?', pl='Z którego peronu odjeżdża pociąg?',
      k=[('gleis', ['peronu', 'peron', 'tor'])],
      h='Polnische Bahnhöfe nennen BEIDES: „peron" (Bahnsteig) und „tor" '
        '(Gleis). Auf dem Bahnsteig stehen zwei Gleise — die Ansage nennt '
        'immer beide Zahlen.'),
 dict(kat='travel_transportation', de='Der Zug hat Verspätung.', pl='Pociąg ma opóźnienie.',
      k=[('verspaetung', ['opóźnienie', 'opóźniony'])]),
 dict(kat='travel_transportation', de='Gehen Sie geradeaus.', pl='Proszę iść prosto.',
      k=[('geradeaus', ['prosto', 'iść prosto'])]),
 dict(kat='travel_transportation', de='Biegen Sie links ab.', pl='Proszę skręcić w lewo.',
      k=[('links', ['w lewo', 'lewo'])]),
 dict(kat='travel_transportation', de='Biegen Sie rechts ab.', pl='Proszę skręcić w prawo.',
      k=[('rechts', ['w prawo', 'prawo'])]),
 dict(kat='travel_transportation', de='Es ist gleich um die Ecke.', pl='To jest tuż za rogiem.',
      k=[('um_die_ecke', ['za rogiem', 'rogiem'])]),
 dict(kat='travel_transportation', de='Nehmen Sie die zweite Straße rechts.', pl='Proszę skręcić w drugą ulicę w prawo.',
      k=[('zweite_strasse', ['drugą ulicę', 'druga ulica'])]),
 dict(kat='travel_transportation', de='Das Museum liegt gegenüber der Kirche.', pl='Muzeum jest naprzeciwko kościoła.',
      k=[('museum', ['muzeum']),
         ('kirche', ['kościoła', 'kościół'])]),
 dict(kat='travel_transportation', de='Entschuldigung, wie komme ich zum Bahnhof?', pl='Przepraszam, jak dojść do dworca?',
      k=[('bahnhof', ['dworca', 'dworzec'])]),
 dict(kat='travel_transportation', de='Ist das weit von hier?', pl='Czy to daleko stąd?',
      k=[('weit', ['daleko'])]),
 dict(kat='travel_transportation', de='Können Sie mir das auf der Karte zeigen?', pl='Czy może pan pokazać to na mapie?',
      k=[('auf_karte', ['na mapie', 'mapa', 'mapie'])]),
 dict(kat='travel_transportation', de='Ich habe mich verlaufen.', pl='Zgubiłem się.',
      k=[('verlaufen', ['zgubiłem się', 'zgubiłam się'])]),
 dict(kat='travel_transportation', de='Wie weit ist es zu Fuß?', pl='Jak daleko jest pieszo?',
      k=[('zu_fuss', ['pieszo', 'na piechotę'])]),
 dict(kat='travel_transportation', de='Wo ist der nächste Supermarkt?', pl='Gdzie jest najbliższy sklep?',
      k=[('supermarkt', ['sklep', 'najbliższy sklep', 'supermarket'])]),
 dict(kat='travel_transportation', de='Ist das in der Nähe?', pl='Czy to blisko?',
      k=[('in_der_naehe', ['blisko', 'w pobliżu'])]),
 dict(kat='travel_transportation', de='Können Sie mir den Weg zeigen?', pl='Czy może pan pokazać mi drogę?',
      k=[('weg_zeigen', ['pokazać drogę', 'drogę'])]),

# ======================================================== university_studying
 dict(kat='university_studying', de='Ich habe drei Bücher.', pl='Mam trzy książki.',
      k=[('drei_buecher', ['trzy książki', 'książki'])]),
 dict(kat='university_studying', de='Ist hier noch ein Platz frei?', pl='Czy to miejsce jest wolne?',
      k=[('platz_frei', ['miejsce jest wolne', 'wolne'])]),
 dict(kat='university_studying', de='Darf ich mich dazusetzen?', pl='Czy mogę się dosiąść?',
      k=[('dazusetzen', ['dosiąść', 'usiąść'])]),
 dict(kat='university_studying', de='Bist du auch neu hier?', pl='Ty też jesteś tu nowy?',
      k=[('neu', ['nowy', 'nowa']),
         ('hier', ['tu', 'też'])]),
 dict(kat='university_studying', de='Ich bin auch im ersten Semester.', pl='Ja też jestem na pierwszym roku.',
      k=[('erstes_semester', ['pierwszym roku', 'pierwszy rok'])],
      h='Polnische Studierende zählen in „rok" (Studienjahr), nicht in '
        'Semestern — wie im Russischen.'),
 dict(kat='university_studying', de='Was studierst du?', pl='Co studiujesz?',
      k=[('studieren', ['co studiujesz', 'studiujesz'])]),
 dict(kat='university_studying', de='Gehst du auch zur nächsten Vorlesung?', pl='Idziesz też na następny wykład?',
      k=[('vorlesung', ['wykład', 'następny wykład'])]),
 dict(kat='university_studying', de='Wollen wir uns nach der Vorlesung treffen?', pl='Spotkamy się po wykładzie?',
      k=[('treffen', ['spotkamy się', 'spotkać']),
         ('nach_vorlesung', ['po wykładzie', 'wykładzie'])]),
 dict(kat='university_studying', de='Gibt es hier eine Gruppe für Austauschstudierende?',
      pl='Czy jest tu grupa dla studentów z wymiany?',
      k=[('austauschstudierende', ['studentów z wymiany', 'wymiany', 'erasmus'])]),
 dict(kat='university_studying', de='Ich studiere Informatik.', pl='Studiuję informatykę.',
      k=[('studiere', ['studiuję']),
         ('informatik', ['informatykę', 'informatyka'])]),
 dict(kat='university_studying', de='In welchem Semester bist du?', pl='Na którym jesteś roku?',
      k=[('semester_frage', ['na którym roku', 'roku', 'semestr'])]),
 dict(kat='university_studying', de='Wann ist die Anmeldefrist?', pl='Kiedy jest termin składania podań?',
      k=[('anmeldefrist', ['termin składania podań', 'termin', 'podań'])]),
 dict(kat='university_studying', de='Wie viele Credits brauche ich?', pl='Ile punktów ECTS potrzebuję?',
      k=[('credits', ['punktów ects', 'ects', 'punkty'])],
      h='In Polen heißen sie „punkty ECTS", im Studentenmund nur „ECTS". Das '
        'englische „credits" hilft nicht.'),
 dict(kat='university_studying', de='Wo ist der Hörsaal?', pl='Gdzie jest aula?',
      k=[('hoersaal', ['aula', 'sala wykładowa'])]),
 dict(kat='university_studying', de='Wann beginnt die Vorlesung?', pl='O której zaczyna się wykład?',
      k=[('vorlesung_beginn', ['zaczyna się wykład', 'wykład', 'o której'])]),
 dict(kat='university_studying', de='Wo finde ich die Bibliothek?', pl='Gdzie znajdę bibliotekę?',
      k=[('bibliothek', ['bibliotekę', 'biblioteka'])]),
 dict(kat='university_studying', de='Wer ist der Dozent für diesen Kurs?', pl='Kto prowadzi ten przedmiot?',
      k=[('dozent', ['kto prowadzi', 'wykładowca', 'prowadzący'])],
      h='Titel zählen an polnischen Unis viel: angeredet wird mit „pani '
        'doktor" oder „panie profesorze", nie mit dem Nachnamen allein und '
        'schon gar nicht mit dem Vornamen.'),
 dict(kat='university_studying', de='Ich habe die Prüfung bestanden.', pl='Zdałem egzamin.',
      k=[('pruefung_bestanden', ['zdałem egzamin', 'zdałam', 'zdałem'])],
      h='Als Frau: „zdałam". Polnische Noten laufen von 2 (durchgefallen) bis '
        '5 — die 2 ist also nicht gut, sondern das Gegenteil.'),
 dict(kat='university_studying', de='Ich habe morgen eine Prüfung.', pl='Jutro mam egzamin.',
      k=[('pruefung_morgen', ['jutro mam egzamin', 'egzamin'])]),
 dict(kat='university_studying', de='Ich habe die Hausaufgabe vergessen.', pl='Zapomniałem pracy domowej.',
      k=[('hausaufgabe_vergessen', ['zapomniałem', 'pracy domowej', 'praca domowa'])]),
 dict(kat='university_studying', de='Ich brauche mehr Zeit für die Hausarbeit.', pl='Potrzebuję więcej czasu na pracę.',
      k=[('mehr_zeit_hausarbeit', ['więcej czasu', 'na pracę', 'pracę'])]),
 dict(kat='university_studying', de='Kann ich dieses Buch ausleihen?', pl='Czy mogę wypożyczyć tę książkę?',
      k=[('ausleihen', ['wypożyczyć', 'pożyczyć'])]),
 dict(kat='university_studying', de='Können wir zusammen lernen?', pl='Możemy się razem uczyć?',
      k=[('zusammen_lernen', ['razem uczyć', 'razem'])]),
 dict(kat='university_studying', de='Ich unterrichte Chinesisch.', pl='Uczę chińskiego.',
      k=[('unterrichte_chinesisch', ['uczę chińskiego', 'chińskiego'])]),
]

AUSGELASSEN = []
