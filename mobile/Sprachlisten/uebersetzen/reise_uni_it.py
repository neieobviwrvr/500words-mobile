# -*- coding: utf-8 -*-
"""Reise, Hotel und Uni auf Italienisch, in einer Datei.

Zusammen 85 Saetze - travel_transportation (36), hotel_accommodation (25),
university_studying (24). Aufbau wie `kleine_kategorien_it.py`.

**Nichts ausgelassen.**

Drei Stellen, an denen mehr noetig war als Uebersetzen:

  Muenchen              heisst auf Italienisch `Monaco` - genau wie das
                        Fuerstentum. Wer die Fahrkarte nur mit "Monaco"
                        loest, kann an der Cote d'Azur landen. Richtig ist
                        `Monaco di Baviera`, und der Hinweis am Satz sagt
                        das auch so.
  Credits               sind in Italien `CFU` (crediti formativi
                        universitari) - die Abkuerzung steht auf jedem
                        Studienplan, "credits" versteht an der Uni niemand.
  Hostel-Vokabular      Mehrbettzimmer/Schlafsaal fallen im Italienischen
                        beide auf `camerata`/`dormitorio` zusammen; die
                        beiden Saetze bleiben trotzdem getrennt, weil sie
                        verschiedene Dinge fragen (Zimmertyp vs. Bettenzahl)
                        und dadurch verschiedene Antworten bekommen.

**Du oder Sie:** Bahnhof, Hotel und Auskunft laufen auf `Lei`, die
Uni-Saetze unter Kommilitonen auf `tu`. Das ist keine Willkuer - genau so
faellt die Grenze im Alltag.

**Nicht von Muttersprachlern geprueft.**
"""

KATEGORIEN = ['travel_transportation', 'hotel_accommodation', 'university_studying']

SAETZE = [

# ======================================================== hotel_accommodation
 dict(kat='hotel_accommodation', de='Ich möchte auschecken.', it='Vorrei fare il check-out.',
      k=[('checkout', ['check-out', 'checkout', 'lasciare la camera'])]),
 dict(kat='hotel_accommodation', de='Können Sie mir ein Taxi rufen?', it='Può chiamarmi un taxi?',
      k=[('taxi', ['taxi'])]),
 dict(kat='hotel_accommodation', de='Ich habe eine Reservierung.', it='Ho una prenotazione.',
      k=[('reservierung', ['prenotazione'])]),
 dict(kat='hotel_accommodation', de='Haben Sie noch ein Zimmer frei?', it='Avete una camera libera?',
      k=[('zimmer_frage', ['camera libera', 'camera'])]),
 dict(kat='hotel_accommodation', de='Ich möchte ein Einzelzimmer, bitte.', it='Vorrei una camera singola, per favore.',
      k=[('einzelzimmer', ['camera singola', 'singola'])]),
 dict(kat='hotel_accommodation', de='Wie viel kostet die Nacht?', it='Quanto costa a notte?',
      k=[('preis_nacht', ['a notte', 'quanto costa a notte', 'notte'])]),
 dict(kat='hotel_accommodation', de='Wann ist der Check-in?', it='A che ora è il check-in?',
      k=[('checkin', ['check-in', 'checkin'])]),
 dict(kat='hotel_accommodation', de='Ist das ein Mehrbettzimmer?', it='È una camera condivisa?',
      k=[('mehrbettzimmer', ['camera condivisa', 'camerata', 'dormitorio'])]),
 dict(kat='hotel_accommodation', de='Wie viele Betten hat der Schlafsaal?', it='Quanti letti ci sono nella camerata?',
      k=[('wie_viele', ['quanti']),
         ('schlafsaal', ['camerata', 'dormitorio'])]),
 dict(kat='hotel_accommodation', de='Ich hätte gern das untere Bett.', it='Vorrei il letto di sotto.',
      k=[('unteres_bett', ['letto di sotto', 'letto basso', 'sotto'])]),
 dict(kat='hotel_accommodation', de='Gibt es Schließfächer für das Gepäck?', it='Ci sono armadietti per i bagagli?',
      k=[('schliessfaecher', ['armadietti', 'armadietto'])]),
 dict(kat='hotel_accommodation', de='Ist Bettwäsche im Preis inbegriffen?', it='Le lenzuola sono incluse nel prezzo?',
      k=[('bettwaesche', ['lenzuola']),
         ('inbegriffen', ['incluse', 'incluso', 'compreso'])]),
 dict(kat='hotel_accommodation', de='Kann ich ein Handtuch leihen?', it='Posso noleggiare un asciugamano?',
      k=[('handtuch', ['asciugamano']),
         ('leihen', ['noleggiare', 'prendere in prestito', 'avere'])],
      h='Handtücher sind im Hostel fast nie inklusive und kosten meist ein '
        'paar Euro Leihgebühr — anders als im Hotel.'),
 dict(kat='hotel_accommodation', de='Gibt es eine Gemeinschaftsküche?', it='C\'è una cucina comune?',
      k=[('gemeinschaftskueche', ['cucina comune', 'cucina condivisa', 'cucina'])]),
 dict(kat='hotel_accommodation', de='Gibt es eine Nachtruhe?', it='C\'è un orario di silenzio?',
      k=[('nachtruhe', ['orario di silenzio', 'silenzio', 'coprifuoco'])]),
 dict(kat='hotel_accommodation', de='Habt ihr einen Frauenschlafsaal?', it='Avete una camerata femminile?',
      k=[('frauenschlafsaal', ['camerata femminile', 'femminile', 'solo donne'])]),
 dict(kat='hotel_accommodation', de='Muss ich eine Kaution hinterlegen?', it='Devo lasciare una cauzione?',
      k=[('kaution', ['cauzione', 'deposito']),
         ('hinterlegen', ['lasciare', 'devo lasciare'])]),
 dict(kat='hotel_accommodation', de='Mein Zimmer ist nicht sauber.', it='La mia camera non è pulita.',
      k=[('nicht_sauber', ['non è pulita', 'sporca'])]),
 dict(kat='hotel_accommodation', de='Die Klimaanlage funktioniert nicht.', it='L\'aria condizionata non funziona.',
      k=[('klimaanlage_kaputt', ['aria condizionata', 'non funziona'])]),
 dict(kat='hotel_accommodation', de='Ich habe meinen Schlüssel verloren.', it='Ho perso la chiave.',
      k=[('schluessel_verloren', ['ho perso la chiave', 'chiave', 'perso'])]),
 dict(kat='hotel_accommodation', de='Ist das Frühstück inklusive?', it='La colazione è inclusa?',
      k=[('fruehstueck', ['colazione'])],
      h='Das italienische Frühstück ist klein: Cappuccino und ein süßes '
        'Cornetto. Wer Rührei und Aufschnitt erwartet, wird im normalen '
        'Hotel enttäuscht.'),
 dict(kat='hotel_accommodation', de='Gibt es hier WLAN?', it='C\'è il wi-fi qui?',
      k=[('wlan', ['wi-fi', 'wifi'])],
      h='„WLAN" versteht außerhalb des deutschen Sprachraums fast niemand — '
        'international heißt es wi-fi, in Italien gesprochen „uai-fai".'),
 dict(kat='hotel_accommodation', de='Wie ist das Passwort für das WLAN?', it='Qual è la password del wi-fi?',
      k=[('wlan_passwort', ['password del wi-fi', 'password', 'wi-fi'])]),
 dict(kat='hotel_accommodation', de='Wo ist der Aufzug?', it='Dov\'è l\'ascensore?',
      k=[('aufzug', ['ascensore'])]),
 dict(kat='hotel_accommodation', de='Das Zimmer ist sehr sauber.', it='La camera è molto pulita.',
      k=[('zimmer_sauber', ['camera', 'pulita'])]),

# ===================================================== travel_transportation
 dict(kat='travel_transportation', de='Wo ist die Bushaltestelle?', it='Dov\'è la fermata dell\'autobus?',
      k=[('bushaltestelle', ['fermata dell\'autobus', 'fermata'])]),
 dict(kat='travel_transportation', de='Welcher Bus fährt zum Flughafen?', it='Quale autobus va all\'aeroporto?',
      k=[('bus_flughafen', ['quale autobus', 'autobus']),
         ('flughafen', ['aeroporto'])]),
 dict(kat='travel_transportation', de='Wir haben den Bus erwischt.', it='Abbiamo preso l\'autobus.',
      k=[('bus_erwischt', ['abbiamo preso', 'preso l\'autobus', 'autobus'])]),
 dict(kat='travel_transportation', de='Ich habe meinen Flug verpasst.', it='Ho perso il volo.',
      k=[('flug_verpasst', ['ho perso il volo', 'perso il volo', 'volo'])]),
 dict(kat='travel_transportation', de='Wo ist der Check-in-Schalter?', it='Dov\'è il banco del check-in?',
      k=[('checkin_schalter', ['banco del check-in', 'check-in', 'accettazione'])]),
 dict(kat='travel_transportation', de='Wo kann ich mein Gepäck aufgeben?', it='Dove posso imbarcare i bagagli?',
      k=[('gepaeck_aufgeben', ['imbarcare i bagagli', 'bagagli', 'consegnare'])]),
 dict(kat='travel_transportation', de='Mein Gepäck ist nicht angekommen.', it='Il mio bagaglio non è arrivato.',
      k=[('gepaeck_fehlt', ['bagaglio non è arrivato', 'bagaglio', 'non è arrivato'])]),
 dict(kat='travel_transportation', de='Wie komme ich zum Hafen?', it='Come arrivo al porto?',
      k=[('hafen', ['porto'])]),
 dict(kat='travel_transportation', de='Ich war letztes Jahr in Frankreich.', it='L\'anno scorso sono stato in Francia.',
      k=[('frankreich', ['francia'])]),
 dict(kat='travel_transportation', de='Nächstes Jahr fahre ich nach Italien.', it='L\'anno prossimo vado in Italia.',
      k=[('italien', ['italia'])]),
 dict(kat='travel_transportation', de='Wo wollt ihr hin?', it='Dove volete andare?',
      k=[('wohin', ['dove volete andare', 'dove andate'])]),
 dict(kat='travel_transportation', de='Warte an der Kreuzung auf mich.', it='Aspettami all\'incrocio.',
      k=[('kreuzung', ['incrocio']),
         ('warten', ['aspettami', 'aspetta'])]),
 dict(kat='travel_transportation', de='Ich möchte eine Fahrkarte nach München, bitte.',
      it='Vorrei un biglietto per Monaco di Baviera, per favore.',
      k=[('fahrkarte', ['biglietto']),
         ('muenchen', ['monaco di baviera', 'monaco'])],
      h='München heißt auf Italienisch „Monaco" — genau wie das Fürstentum '
        'an der Riviera. Wer nur „Monaco" sagt, riskiert das falsche '
        'Ticket; richtig ist „Monaco di Baviera".'),
 dict(kat='travel_transportation', de='Ich möchte einen Mietwagen buchen.', it='Vorrei noleggiare una macchina.',
      k=[('mietwagen', ['noleggiare una macchina', 'macchina a noleggio', 'noleggio'])]),
 dict(kat='travel_transportation', de='Wie viel kostet die Fahrt zum Flughafen?', it='Quanto costa la corsa fino all\'aeroporto?',
      k=[('fahrt_kosten', ['quanto costa la corsa', 'corsa', 'quanto costa']),
         ('flughafen', ['aeroporto'])]),
 dict(kat='travel_transportation', de='Ich möchte ein Ticket.', it='Vorrei un biglietto.',
      k=[('ticket', ['biglietto'])]),
 dict(kat='travel_transportation', de='Wo ist der Bahnhof?', it='Dov\'è la stazione?',
      k=[('bahnhof', ['stazione'])]),
 dict(kat='travel_transportation', de='Wann fährt der nächste Zug nach Berlin?', it='Quando parte il prossimo treno per Berlino?',
      k=[('naechster_zug', ['prossimo treno', 'treno']),
         ('berlin', ['berlino'])]),
 dict(kat='travel_transportation', de='Ist dieser Platz frei?', it='È libero questo posto?',
      k=[('platz_frei', ['è libero', 'posto libero', 'libero'])]),
 dict(kat='travel_transportation', de='Muss ich umsteigen?', it='Devo cambiare?',
      k=[('umsteigen', ['cambiare', 'devo cambiare'])]),
 dict(kat='travel_transportation', de='Von welchem Gleis fährt der Zug ab?', it='Da quale binario parte il treno?',
      k=[('gleis', ['binario'])]),
 dict(kat='travel_transportation', de='Der Zug hat Verspätung.', it='Il treno è in ritardo.',
      k=[('verspaetung', ['in ritardo', 'ritardo'])]),
 dict(kat='travel_transportation', de='Gehen Sie geradeaus.', it='Vada dritto.',
      k=[('geradeaus', ['dritto', 'sempre dritto'])]),
 dict(kat='travel_transportation', de='Biegen Sie links ab.', it='Giri a sinistra.',
      k=[('links', ['a sinistra', 'sinistra'])]),
 dict(kat='travel_transportation', de='Biegen Sie rechts ab.', it='Giri a destra.',
      k=[('rechts', ['a destra', 'destra'])]),
 dict(kat='travel_transportation', de='Es ist gleich um die Ecke.', it='È dietro l\'angolo.',
      k=[('um_die_ecke', ['dietro l\'angolo', 'angolo'])]),
 dict(kat='travel_transportation', de='Nehmen Sie die zweite Straße rechts.', it='Prenda la seconda strada a destra.',
      k=[('zweite_strasse', ['seconda strada', 'seconda'])]),
 dict(kat='travel_transportation', de='Das Museum liegt gegenüber der Kirche.', it='Il museo è di fronte alla chiesa.',
      k=[('museum', ['museo']),
         ('kirche', ['chiesa'])]),
 dict(kat='travel_transportation', de='Entschuldigung, wie komme ich zum Bahnhof?', it='Scusi, come arrivo alla stazione?',
      k=[('bahnhof', ['stazione'])]),
 dict(kat='travel_transportation', de='Ist das weit von hier?', it='È lontano da qui?',
      k=[('weit', ['lontano'])]),
 dict(kat='travel_transportation', de='Können Sie mir das auf der Karte zeigen?', it='Può mostrarmelo sulla mappa?',
      k=[('auf_karte', ['sulla mappa', 'mappa', 'cartina'])]),
 dict(kat='travel_transportation', de='Ich habe mich verlaufen.', it='Mi sono perso.',
      k=[('verlaufen', ['mi sono perso', 'mi sono persa', 'perso'])]),
 dict(kat='travel_transportation', de='Wie weit ist es zu Fuß?', it='Quanto è lontano a piedi?',
      k=[('zu_fuss', ['a piedi'])]),
 dict(kat='travel_transportation', de='Wo ist der nächste Supermarkt?', it='Dov\'è il supermercato più vicino?',
      k=[('supermarkt', ['supermercato'])]),
 dict(kat='travel_transportation', de='Ist das in der Nähe?', it='È qui vicino?',
      k=[('in_der_naehe', ['qui vicino', 'vicino'])]),
 dict(kat='travel_transportation', de='Können Sie mir den Weg zeigen?', it='Può indicarmi la strada?',
      k=[('weg_zeigen', ['indicarmi la strada', 'la strada', 'mostrarmi'])]),

# ======================================================== university_studying
 dict(kat='university_studying', de='Ich habe drei Bücher.', it='Ho tre libri.',
      k=[('drei_buecher', ['tre libri', 'libri'])]),
 dict(kat='university_studying', de='Ist hier noch ein Platz frei?', it='È libero questo posto?',
      k=[('platz_frei', ['è libero', 'posto libero', 'libero'])]),
 dict(kat='university_studying', de='Darf ich mich dazusetzen?', it='Posso sedermi qui?',
      k=[('dazusetzen', ['posso sedermi', 'sedermi'])]),
 dict(kat='university_studying', de='Bist du auch neu hier?', it='Sei nuovo anche tu?',
      k=[('neu', ['nuovo', 'nuova']),
         ('hier', ['qui', 'anche tu'])]),
 dict(kat='university_studying', de='Ich bin auch im ersten Semester.', it='Anch\'io sono al primo semestre.',
      k=[('erstes_semester', ['primo semestre', 'primo anno'])]),
 dict(kat='university_studying', de='Was studierst du?', it='Cosa studi?',
      k=[('studieren', ['cosa studi', 'studi'])]),
 dict(kat='university_studying', de='Gehst du auch zur nächsten Vorlesung?', it='Vai anche tu alla prossima lezione?',
      k=[('vorlesung', ['lezione', 'prossima lezione'])],
      h='„Lezione" ist die Vorlesung — „lettura" wäre das Lesen und hier '
        'falsch. Der große Hörsaal heißt „aula".'),
 dict(kat='university_studying', de='Wollen wir uns nach der Vorlesung treffen?', it='Ci vediamo dopo la lezione?',
      k=[('treffen', ['ci vediamo', 'vediamoci']),
         ('nach_vorlesung', ['dopo la lezione', 'lezione'])]),
 dict(kat='university_studying', de='Gibt es hier eine Gruppe für Austauschstudierende?',
      it='C\'è un gruppo per gli studenti Erasmus?',
      k=[('austauschstudierende', ['studenti erasmus', 'erasmus', 'studenti di scambio'])],
      h='In Europa heißt der Austauschstudent schlicht „Erasmus" — als '
        'Substantiv, für Person und Programm gleichermaßen. „Sono un '
        'Erasmus" versteht an jeder italienischen Uni sofort jeder.'),
 dict(kat='university_studying', de='Ich studiere Informatik.', it='Studio informatica.',
      k=[('studiere', ['studio']),
         ('informatik', ['informatica'])]),
 dict(kat='university_studying', de='In welchem Semester bist du?', it='A che semestre sei?',
      k=[('semester_frage', ['a che semestre', 'semestre', 'che anno'])]),
 dict(kat='university_studying', de='Wann ist die Anmeldefrist?', it='Qual è la scadenza per l\'iscrizione?',
      k=[('anmeldefrist', ['scadenza', 'scadenza per l\'iscrizione', 'iscrizione'])]),
 dict(kat='university_studying', de='Wie viele Credits brauche ich?', it='Quanti CFU mi servono?',
      k=[('credits', ['cfu', 'crediti'])],
      h='Credits heißen in Italien „CFU" (crediti formativi universitari) '
        'und werden buchstabiert: „ci-effe-u". Das englische „credits" '
        'versteht an der Uni kaum jemand.'),
 dict(kat='university_studying', de='Wo ist der Hörsaal?', it='Dov\'è l\'aula?',
      k=[('hoersaal', ['aula'])]),
 dict(kat='university_studying', de='Wann beginnt die Vorlesung?', it='Quando inizia la lezione?',
      k=[('vorlesung_beginn', ['quando inizia', 'inizia la lezione', 'lezione'])]),
 dict(kat='university_studying', de='Wo finde ich die Bibliothek?', it='Dove trovo la biblioteca?',
      k=[('bibliothek', ['biblioteca'])]),
 dict(kat='university_studying', de='Wer ist der Dozent für diesen Kurs?', it='Chi è il professore di questo corso?',
      k=[('dozent', ['professore', 'docente'])]),
 dict(kat='university_studying', de='Ich habe die Prüfung bestanden.', it='Ho passato l\'esame.',
      k=[('pruefung_bestanden', ['ho passato l\'esame', 'passato', 'superato'])],
      h='Italienische Prüfungen sind oft mündlich und werden in Dreißigsteln '
        'benotet: 18 ist bestanden, 30 die Bestnote, „30 e lode" die '
        'Auszeichnung.'),
 dict(kat='university_studying', de='Ich habe morgen eine Prüfung.', it='Domani ho un esame.',
      k=[('pruefung_morgen', ['domani ho un esame', 'esame'])]),
 dict(kat='university_studying', de='Ich habe die Hausaufgabe vergessen.', it='Ho dimenticato i compiti.',
      k=[('hausaufgabe_vergessen', ['ho dimenticato i compiti', 'compiti', 'dimenticato'])]),
 dict(kat='university_studying', de='Ich brauche mehr Zeit für die Hausarbeit.', it='Mi serve più tempo per la tesina.',
      k=[('mehr_zeit_hausarbeit', ['più tempo', 'tesina', 'elaborato'])]),
 dict(kat='university_studying', de='Kann ich dieses Buch ausleihen?', it='Posso prendere in prestito questo libro?',
      k=[('ausleihen', ['prendere in prestito', 'prestito'])]),
 dict(kat='university_studying', de='Können wir zusammen lernen?', it='Possiamo studiare insieme?',
      k=[('zusammen_lernen', ['studiare insieme', 'insieme'])]),
 dict(kat='university_studying', de='Ich unterrichte Chinesisch.', it='Insegno cinese.',
      k=[('unterrichte_chinesisch', ['insegno cinese', 'cinese'])]),
]

AUSGELASSEN = []
