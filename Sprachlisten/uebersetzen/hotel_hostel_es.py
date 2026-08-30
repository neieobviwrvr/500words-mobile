# -*- coding: utf-8 -*-
"""Hostel-Situation (hotel_accommodation) auf Spanisch: die 10 neuen Saetze.

Kein Ausschluss - Backpacker-Hostel-Themen (Mehrbettzimmer, Schliessfaecher,
Nachtruhe) funktionieren in Spanien genauso. `verb_cluster` leer.
**Nicht von Muttersprachlern geprueft.**
"""

KATEGORIEN = ['hotel_accommodation']

SAETZE = [
 dict(kat='hotel_accommodation', de='Ist das ein Mehrbettzimmer?', es='¿Es un dormitorio compartido?',
      k=[('mehrbettzimmer', ['dormitorio compartido'])]),
 dict(kat='hotel_accommodation', de='Wie viele Betten hat der Schlafsaal?', es='¿Cuántas camas tiene el dormitorio?',
      k=[('wie_viele', ['cuántas']), ('schlafsaal', ['dormitorio'])]),
 dict(kat='hotel_accommodation', de='Ich hätte gern das untere Bett.', es='Quisiera la cama de abajo.',
      k=[('unteres_bett', ['cama de abajo', 'abajo'])]),
 dict(kat='hotel_accommodation', de='Gibt es Schließfächer für das Gepäck?', es='¿Hay taquillas para el equipaje?',
      k=[('schliessfaecher', ['taquillas', 'casilleros'])]),
 dict(kat='hotel_accommodation', de='Ist Bettwäsche im Preis inbegriffen?', es='¿La ropa de cama está incluida en el precio?',
      k=[('bettwaesche', ['ropa de cama']), ('inbegriffen', ['incluida', 'incluido'])]),
 dict(kat='hotel_accommodation', de='Kann ich ein Handtuch leihen?', es='¿Puedo alquilar una toalla?',
      k=[('handtuch', ['toalla']), ('leihen', ['alquilar'])]),
 dict(kat='hotel_accommodation', de='Gibt es eine Gemeinschaftsküche?', es='¿Hay una cocina compartida?',
      k=[('gemeinschaftskueche', ['cocina compartida'])]),
 dict(kat='hotel_accommodation', de='Gibt es eine Nachtruhe?', es='¿Hay horario de silencio?',
      k=[('nachtruhe', ['horario de silencio', 'silencio'])],
      h='In vielen Hostels gilt ab 22-23 Uhr Zimmerlautstärke, damit alle im '
        'Schlafsaal schlafen können - anders als im Einzelzimmer eines Hotels '
        'ist das keine Formalität, sondern wird von Mitreisenden auch '
        'eingefordert.'),
 dict(kat='hotel_accommodation', de='Habt ihr einen Frauenschlafsaal?', es='¿Tenéis un dormitorio solo para mujeres?',
      k=[('frauenschlafsaal', ['solo para mujeres'])]),
 dict(kat='hotel_accommodation', de='Muss ich eine Kaution hinterlegen?', es='¿Tengo que dejar un depósito?',
      k=[('kaution', ['depósito']), ('hinterlegen', ['dejar'])]),
]

AUSGELASSEN = []
