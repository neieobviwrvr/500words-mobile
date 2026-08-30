# -*- coding: utf-8 -*-
"""Hotel + Accommodation: die Hostel-Situation (2026-08-29, Simons Auftrag).

`scenario='hotel_hostel'` ("Im Hostel") stand schon als Anzeigename in
scenarios.ts, hatte aber 0 Saetze - eines von fuenf noch leeren
Hotel-Szenarien (neben hotel_gepaeck, hotel_wlan, hotel_waesche,
hotel_registrierung), genau wie club_nightlife vor Welle 1. Passt zur
Backpacker-Persona: Hostel statt Hotel ist der Normalfall dieser
Zielgruppe, generisches Hotel-Vokabular (Check-in, Zimmer, Abreise) deckt
das Mehrbettzimmer-Erlebnis nicht ab.

**Bewusst nicht drin**, weil andere Szenarien das schon abdecken oder
abdecken sollen:
  - WLAN/Strom -> eigenes Szenario `hotel_wlan` (noch offen)
  - Waesche waschen -> eigenes Szenario `hotel_waesche` (noch offen)
  - Gepaeck abstellen -> eigenes Szenario `hotel_gepaeck` (noch offen)
Sonst waere die Trennung zwischen den fuenf offenen Szenarien beim naechsten
Ausbau schon wieder verwischt.

10 Saetze, echte accepted_concepts (wie job_work, nicht die leeren
club_nightlife-Master-Zeilen).

Nutzung: python import_deutsch.py [--echt]
"""

SAETZE = [
    dict(de='Ist das ein Mehrbettzimmer?',
         k=[('mehrbettzimmer', ['mehrbettzimmer', 'schlafsaal', 'dorm'])]),
    dict(de='Wie viele Betten hat der Schlafsaal?',
         k=[('wie_viele', ['wie viele']), ('schlafsaal', ['schlafsaal', 'zimmer'])]),
    dict(de='Ich hätte gern das untere Bett.',
         k=[('unteres_bett', ['untere bett', 'unten'])]),
    dict(de='Gibt es Schließfächer für das Gepäck?',
         k=[('schliessfaecher', ['schließfächer', 'schließfach', 'spind'])]),
    dict(de='Ist Bettwäsche im Preis inbegriffen?',
         k=[('bettwaesche', ['bettwäsche']), ('inbegriffen', ['inbegriffen', 'dabei', 'enthalten'])]),
    dict(de='Kann ich ein Handtuch leihen?',
         k=[('handtuch', ['handtuch']), ('leihen', ['leihen', 'ausleihen', 'mieten'])]),
    dict(de='Gibt es eine Gemeinschaftsküche?',
         k=[('gemeinschaftskueche', ['gemeinschaftsküche', 'küche'])]),
    dict(de='Gibt es eine Nachtruhe?',
         k=[('nachtruhe', ['nachtruhe', 'ruhezeit'])],
         h='In vielen Hostels gilt ab 22-23 Uhr Zimmerlautstärke, damit alle im '
           'Schlafsaal schlafen können - anders als im Einzelzimmer eines Hotels '
           'ist das keine Formalität, sondern wird von Mitreisenden auch '
           'eingefordert.'),
    dict(de='Habt ihr einen Frauenschlafsaal?',
         k=[('frauenschlafsaal', ['frauenschlafsaal', 'frauen'])]),
    dict(de='Muss ich eine Kaution hinterlegen?',
         k=[('kaution', ['kaution']), ('hinterlegen', ['hinterlegen', 'zahlen', 'bezahlen'])]),
]
