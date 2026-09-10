# -*- coding: utf-8 -*-
"""Die letzten 23 spanischen Saetze - Reste aus acht Kategorien.

Fast alle stammen aus der Zusammenfuehrung vom 2026-08-27
(Sprachlisten/zusammenfuehren/): sie standen bis dahin nur auf Chinesisch,
wanderten dann ins Deutsche und fehlten dadurch in JEDER anderen Sprache.

**Eine Datei statt acht** - deshalb `KATEGORIEN` plus `kat=` je Satz. Bei ein
bis fuenf Saetzen je Kategorie waeren acht Dateien mit je zwei Zeilen mehr
Verwaltung als Inhalt. Das Werkzeug prueft dafuer zusaetzlich, dass jedes
`kat=` auch wirklich zur Kategorie im Master passt.

**club_nightlife fehlt hier absichtlich.** Die neun dort noch offenen Saetze
sind die bewusst ausgeschlossenen (WeChat, helle Haut, 哪里哪里) - siehe
club_nightlife/spanisch.py. Sie bleiben draussen, die Kategorie ist fertig.

**Zwei Saetze, ueber die man stolpert:**

  Er ist gesprungen.        Kommt aus dem Chinesisch-Kurs, wo er die
                            Vergangenheitspartikel 了 zeigt. Als Alltagssatz
                            wirkt er zusammenhanglos - er ist aber im
                            deutschen Bestand, also bekommt er seine
                            Uebersetzung. Kein Grund, ihn hier zu bewerten.
  Ich unterrichte Chinesisch. Bewusst NICHT auf "Spanisch" umgebogen, anders
                            als "Ich spreche kein Chinesisch" in
                            health_emergency. Dort steht die Zielsprache im
                            Satz, weil es um die Lernsituation geht; hier ist
                            es ein Beruf, und wer Spanisch lernt, kann sehr
                            wohl Chinesisch unterrichten.

`verb_cluster` leer, wie im ganzen spanischen Bestand.
**Nicht von Muttersprachlern geprueft.**
"""

KATEGORIEN = [
    "grundwortschatz", "culture_immersion", "hotel_accommodation",
    "moving_settling", "shopping_haggling", "smalltalk_socialising",
    "travel_transportation", "university_studying",
]

SAETZE = [

# ---------------------------------------------------------------- Grundwortschatz
 dict(kat='grundwortschatz', de='Entschuldigung, wo ist die Toilette?',
      es='Perdone, ¿dónde está el baño?',
      k=[('entschuldigung', ['perdone', 'perdón', 'disculpe']),
         ('toilette', ['baño', 'servicio', 'aseo']), ('wo', ['dónde'])]),
 dict(kat='grundwortschatz', de='Wir bleiben fünf Minuten.',
      es='Nos quedamos cinco minutos.',
      k=[('bleiben', ['nos quedamos', 'quedarse']),
         ('fuenf_minuten', ['cinco minutos', 'cinco'])]),
 dict(kat='grundwortschatz', de='Bitte sag es noch einmal.',
      es='Dilo otra vez, por favor.',
      k=[('sagen', ['dilo', 'decir', 'di']),
         ('nochmal', ['otra vez', 'de nuevo', 'repite'])]),
 dict(kat='grundwortschatz', de='Seid ihr Studenten?', es='¿Sois estudiantes?',
      k=[('student', ['estudiantes', 'estudiante'])]),
 dict(kat='grundwortschatz', de='Ich habe nur eins.', es='Solo tengo uno.',
      k=[('nur', ['solo', 'sólo']), ('eins', ['uno', 'una'])]),

# ---------------------------------------------------------------- Culture
 dict(kat='culture_immersion', de='Berlin ist sehr schön.', es='Berlín es muy bonita.',
      k=[('berlin', ['berlín']), ('schoen', ['bonita', 'muy bonita', 'preciosa'])]),
 dict(kat='culture_immersion', de='Wir spielen Fußball.', es='Jugamos al fútbol.',
      k=[('spielen', ['jugamos', 'jugar']), ('fussball', ['fútbol'])]),
 dict(kat='culture_immersion', de='Wo ist die Kirche?', es='¿Dónde está la iglesia?',
      k=[('wo', ['dónde']), ('kirche', ['iglesia'])]),
 dict(kat='culture_immersion', de='Er ist gesprungen.', es='Ha saltado.',
      k=[('springen', ['ha saltado', 'saltó', 'saltar'])]),

# ---------------------------------------------------------------- Hotel
 dict(kat='hotel_accommodation', de='Das Zimmer ist sehr sauber.',
      es='La habitación está muy limpia.',
      k=[('zimmer', ['habitación']), ('sauber', ['limpia', 'muy limpia'])]),

# ---------------------------------------------------------------- Moving
 dict(kat='moving_settling', de='Das Buch liegt auf dem Tisch.',
      es='El libro está sobre la mesa.',
      k=[('buch', ['libro']), ('tisch', ['mesa'])]),
 dict(kat='moving_settling', de='Hier ist es sehr praktisch.', es='Aquí es muy práctico.',
      k=[('hier', ['aquí']), ('praktisch', ['práctico', 'muy práctico', 'cómodo'])]),
 dict(kat='moving_settling', de='Das kann ich erledigen.', es='Eso lo puedo hacer yo.',
      k=[('koennen', ['puedo']), ('erledigen', ['hacer', 'lo puedo hacer', 'encargarme'])]),
 dict(kat='moving_settling', de='Ich bezahle mit dem Handy.', es='Pago con el móvil.',
      k=[('bezahlen', ['pago', 'pagar']), ('handy', ['móvil', 'celular', 'teléfono'])]),

# ---------------------------------------------------------------- Shopping
 dict(kat='shopping_haggling', de='Das gilt nicht als teuer.', es='Eso no es tan caro.',
      k=[('nicht_teuer', ['no es tan caro', 'no es caro', 'no tan caro'])]),

# ---------------------------------------------------------------- Smalltalk
 dict(kat='smalltalk_socialising', de='Noch nicht.', es='Todavía no.',
      k=[('noch_nicht', ['todavía no', 'aún no'])]),
 dict(kat='smalltalk_socialising', de='Mein Hobby ist Sport.', es='Mi afición es el deporte.',
      k=[('hobby', ['afición', 'hobby']), ('sport', ['deporte'])]),

# ---------------------------------------------------------------- Travel
 dict(kat='travel_transportation', de='Wir haben den Bus erwischt.',
      es='Hemos cogido el autobús.',
      k=[('erwischen', ['hemos cogido', 'cogimos', 'alcanzamos']),
         ('bus', ['autobús', 'bus', 'camión'])]),
 dict(kat='travel_transportation', de='Wo wollt ihr hin?', es='¿Adónde vais?',
      k=[('wohin', ['adónde', 'dónde']), ('gehen', ['vais', 'van', 'ir'])]),
 dict(kat='travel_transportation', de='Warte an der Kreuzung auf mich.',
      es='Espérame en el cruce.',
      k=[('warten', ['espérame', 'esperar']), ('kreuzung', ['cruce', 'esquina'])]),
 dict(kat='travel_transportation', de='Ich möchte ein Ticket.', es='Quiero un billete.',
      k=[('moechten', ['quiero', 'quisiera']), ('ticket', ['billete', 'boleto'])]),

# ---------------------------------------------------------------- Uni
 dict(kat='university_studying', de='Ich habe drei Bücher.', es='Tengo tres libros.',
      k=[('drei', ['tres']), ('buch', ['libros', 'libro'])]),
 dict(kat='university_studying', de='Ich unterrichte Chinesisch.', es='Enseño chino.',
      k=[('unterrichten', ['enseño', 'enseñar', 'doy clases']), ('chinesisch', ['chino'])]),
]

AUSGELASSEN = []
