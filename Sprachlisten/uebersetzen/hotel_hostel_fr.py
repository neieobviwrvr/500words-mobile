# -*- coding: utf-8 -*-
"""Hostel-Situation (hotel_accommodation) auf Franzoesisch: die 10 neuen Saetze.

Kein Ausschluss. `verb_cluster` leer. **Nicht von Muttersprachlern geprueft.**
"""

KATEGORIEN = ['hotel_accommodation']

SAETZE = [
 dict(kat='hotel_accommodation', de='Ist das ein Mehrbettzimmer?', fr='Est-ce un dortoir ?',
      k=[('mehrbettzimmer', ['dortoir'])]),
 dict(kat='hotel_accommodation', de='Wie viele Betten hat der Schlafsaal?', fr='Combien de lits y a-t-il dans le dortoir ?',
      k=[('wie_viele', ['combien']), ('schlafsaal', ['dortoir'])]),
 dict(kat='hotel_accommodation', de='Ich hätte gern das untere Bett.', fr='Je voudrais le lit du bas.',
      k=[('unteres_bett', ['lit du bas'])]),
 dict(kat='hotel_accommodation', de='Gibt es Schließfächer für das Gepäck?', fr='Y a-t-il des casiers pour les bagages ?',
      k=[('schliessfaecher', ['casiers'])]),
 dict(kat='hotel_accommodation', de='Ist Bettwäsche im Preis inbegriffen?', fr='La literie est-elle incluse dans le prix ?',
      k=[('bettwaesche', ['literie']), ('inbegriffen', ['incluse'])]),
 dict(kat='hotel_accommodation', de='Kann ich ein Handtuch leihen?', fr='Puis-je louer une serviette ?',
      k=[('handtuch', ['serviette']), ('leihen', ['louer'])]),
 dict(kat='hotel_accommodation', de='Gibt es eine Gemeinschaftsküche?', fr='Y a-t-il une cuisine commune ?',
      k=[('gemeinschaftskueche', ['cuisine commune'])]),
 dict(kat='hotel_accommodation', de='Gibt es eine Nachtruhe?', fr='Y a-t-il des heures de silence ?',
      k=[('nachtruhe', ['heures de silence'])],
      h='In vielen Hostels gilt ab 22-23 Uhr Zimmerlautstärke, damit alle im '
        'Schlafsaal schlafen können - anders als im Einzelzimmer eines Hotels '
        'ist das keine Formalität, sondern wird von Mitreisenden auch '
        'eingefordert.'),
 dict(kat='hotel_accommodation', de='Habt ihr einen Frauenschlafsaal?', fr='Avez-vous un dortoir réservé aux femmes ?',
      k=[('frauenschlafsaal', ['réservé aux femmes'])]),
 dict(kat='hotel_accommodation', de='Muss ich eine Kaution hinterlegen?', fr='Dois-je laisser une caution ?',
      k=[('kaution', ['caution']), ('hinterlegen', ['laisser'])]),
]

AUSGELASSEN = []
