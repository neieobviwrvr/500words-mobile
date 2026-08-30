# -*- coding: utf-8 -*-
"""Hostel-Situation (hotel_accommodation) auf Schwedisch: die 10 neuen Saetze.

Kein Ausschluss. `verb_cluster` leer. **Nicht von Muttersprachlern geprueft.**
"""

KATEGORIEN = ['hotel_accommodation']

SAETZE = [
 dict(kat='hotel_accommodation', de='Ist das ein Mehrbettzimmer?', sv='Är det en sovsal?',
      k=[('mehrbettzimmer', ['sovsal'])]),
 dict(kat='hotel_accommodation', de='Wie viele Betten hat der Schlafsaal?', sv='Hur många sängar har sovsalen?',
      k=[('wie_viele', ['hur många']), ('schlafsaal', ['sovsalen', 'sovsal'])]),
 dict(kat='hotel_accommodation', de='Ich hätte gern das untere Bett.', sv='Jag vill gärna ha den nedre sängen.',
      k=[('unteres_bett', ['nedre sängen', 'nedre'])]),
 dict(kat='hotel_accommodation', de='Gibt es Schließfächer für das Gepäck?', sv='Finns det skåp för bagaget?',
      k=[('schliessfaecher', ['skåp'])]),
 dict(kat='hotel_accommodation', de='Ist Bettwäsche im Preis inbegriffen?', sv='Ingår sänglinne i priset?',
      k=[('bettwaesche', ['sänglinne']), ('inbegriffen', ['ingår'])]),
 dict(kat='hotel_accommodation', de='Kann ich ein Handtuch leihen?', sv='Kan jag låna en handduk?',
      k=[('handtuch', ['handduk']), ('leihen', ['låna'])]),
 dict(kat='hotel_accommodation', de='Gibt es eine Gemeinschaftsküche?', sv='Finns det ett gemensamt kök?',
      k=[('gemeinschaftskueche', ['gemensamt kök'])]),
 dict(kat='hotel_accommodation', de='Gibt es eine Nachtruhe?', sv='Finns det tysta timmar?',
      k=[('nachtruhe', ['tysta timmar'])],
      h='In vielen Hostels gilt ab 22-23 Uhr Zimmerlautstärke, damit alle im '
        'Schlafsaal schlafen können - anders als im Einzelzimmer eines Hotels '
        'ist das keine Formalität, sondern wird von Mitreisenden auch '
        'eingefordert.'),
 dict(kat='hotel_accommodation', de='Habt ihr einen Frauenschlafsaal?', sv='Har ni en sovsal bara för kvinnor?',
      k=[('frauenschlafsaal', ['bara för kvinnor'])]),
 dict(kat='hotel_accommodation', de='Muss ich eine Kaution hinterlegen?', sv='Måste jag lämna en deposition?',
      k=[('kaution', ['deposition']), ('hinterlegen', ['lämna'])]),
]

AUSGELASSEN = []
