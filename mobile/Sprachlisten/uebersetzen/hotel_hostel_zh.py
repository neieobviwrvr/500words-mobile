# -*- coding: utf-8 -*-
"""Hostel-Situation (hotel_accommodation) auf Chinesisch: die 10 neuen Saetze.

Kein Ausschluss. Konzepte sind Hanzi-Teilstrings (exakt, wie bei den
uebrigen zh-Dateien - siehe CLAUDE.md "Chinesisch-Weiche" in
evaluateConcepts.ts). `verb_cluster` leer.
**Nicht von Muttersprachlern geprueft.**
"""

KATEGORIEN = ['hotel_accommodation']

SAETZE = [
 dict(kat='hotel_accommodation', de='Ist das ein Mehrbettzimmer?', zh='这是宿舍吗？', py='zhè shì sùshè ma?',
      k=[('mehrbettzimmer', ['宿舍'])]),
 dict(kat='hotel_accommodation', de='Wie viele Betten hat der Schlafsaal?', zh='宿舍有几张床？', py='sùshè yǒu jǐ zhāng chuáng?',
      k=[('wie_viele', ['几']), ('schlafsaal', ['宿舍'])]),
 dict(kat='hotel_accommodation', de='Ich hätte gern das untere Bett.', zh='我要下铺。', py='wǒ yào xiàpù.',
      k=[('unteres_bett', ['下铺'])]),
 dict(kat='hotel_accommodation', de='Gibt es Schließfächer für das Gepäck?', zh='有存包柜吗？', py='yǒu cún bāo guì ma?',
      k=[('schliessfaecher', ['柜'])]),
 dict(kat='hotel_accommodation', de='Ist Bettwäsche im Preis inbegriffen?', zh='床上用品包括在价格里吗？',
      py='chuángshàng yòngpǐn bāokuò zài jiàgé lǐ ma?',
      k=[('bettwaesche', ['床上用品']), ('inbegriffen', ['包括'])]),
 dict(kat='hotel_accommodation', de='Kann ich ein Handtuch leihen?', zh='我可以借一条毛巾吗？', py='wǒ kěyǐ jiè yì tiáo máojīn ma?',
      k=[('handtuch', ['毛巾']), ('leihen', ['借'])]),
 dict(kat='hotel_accommodation', de='Gibt es eine Gemeinschaftsküche?', zh='有公共厨房吗？', py='yǒu gōnggòng chúfáng ma?',
      k=[('gemeinschaftskueche', ['厨房'])]),
 dict(kat='hotel_accommodation', de='Gibt es eine Nachtruhe?', zh='有安静时间吗？', py='yǒu ānjìng shíjiān ma?',
      k=[('nachtruhe', ['安静'])],
      h='In vielen Hostels gilt ab 22-23 Uhr Zimmerlautstärke, damit alle im '
        'Schlafsaal schlafen können - anders als im Einzelzimmer eines Hotels '
        'ist das keine Formalität, sondern wird von Mitreisenden auch '
        'eingefordert.'),
 dict(kat='hotel_accommodation', de='Habt ihr einen Frauenschlafsaal?', zh='你们有女生宿舍吗？', py='nǐmen yǒu nǚshēng sùshè ma?',
      k=[('frauenschlafsaal', ['女生宿舍'])]),
 dict(kat='hotel_accommodation', de='Muss ich eine Kaution hinterlegen?', zh='我需要交押金吗？', py='wǒ xūyào jiāo yājīn ma?',
      k=[('kaution', ['押金']), ('hinterlegen', ['交'])]),
]

AUSGELASSEN = []
