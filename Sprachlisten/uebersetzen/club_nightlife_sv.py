# -*- coding: utf-8 -*-
"""club_nightlife auf Schwedisch: die 22 noch fehlenden Saetze.

Ergaenzt club_nightlife/schwedisch.py (108 Saetze von 2026-08-21). Der
Rueckstand entstand teils dort, teils durch die Zusammenfuehrung vom
2026-08-27, die sieben Saetze neu ins Deutsche gebracht hat.

**ACHTUNG - hier wird eine fruehere Entscheidung revidiert.**
club_nightlife/schwedisch.py liess die Komplimente aus, mit der Begruendung,
Schwedisch habe "nicht zwei Woerter" fuer 漂亮 (Frauen) und 帅 (Maenner), die
Ansprache-Varianten fielen also zusammen. Das stimmt fuer eine woertliche
Uebersetzung, uebersieht aber, dass Schwedisch DREI brauchbare Woerter hat,
die sich klar unterscheiden:

  fin    huebsch, gepflegt      -> "Du bist sehr huebsch."
  snygg  gut aussehend          -> "Du siehst gut aus."
  söt    suess, niedlich        -> "Du bist sehr suess."

Damit entstehen drei verschiedene Karten statt dreimal derselben. Die
Ausschluss-Begruendung dort ist fuer diese Saetze also ueberholt; wer sie
liest, findet hier die Fortsetzung.

**Neun Saetze bleiben draussen** - dieselben wie bei Spanisch und
Franzoesisch:

  Bist du aus China? / WeChat austauschen / Ich zahle mit WeChat /
  Soll ich dich scannen?      chinesische Infrastruktur bzw. China-Kontext
  Mein Chinesisch ist nicht   schwedisch_phrasebook traegt dafuer laengst
  so gut.                     "Mein Schwedisch ist nicht so gut."
  Du bist schlank.            Koerperkommentar zum Gewicht - in China ein
                              Kompliment (瘦), in Schweden ein Fettnaepfchen
  Du hast eine sehr helle     Hautton zu loben ist hier kein Kompliment
  Haut.
  Ach wo! / Nein, nein.       哪里哪里 - Schwedisch nimmt Lob mit "tack" an

**"Das ist mein Pass." kommt dagegen NEU dazu**, obwohl schwedisch.py es als
China-Infrastruktur ausgeschlossen hatte: in Schweden wird am Clubeingang
sehr wohl Ausweis verlangt (Altersgrenze 18 bzw. 20), "legitimation" ist
Alltag. Der Satz ist hier also nuetzlicher als dort angenommen.

`verb_cluster` bleibt leer (siehe drinking_dining_sv.py).

**Nicht von Muttersprachlern geprueft** - besonders die Komplimente gehoeren
gegengelesen, dort entscheidet der Ton.
"""

SAETZE = [

# ---------------------------------------------------------------- Trinkkultur
 dict(de='Prost!', sv='Skål!',
      k=[('prost', ['skål'])],
      h='„Skål" ist in Schweden mehr als ein Wort: man hebt das Glas, schaut '
        'reihum jedem in die Augen, trinkt und schaut noch einmal, bevor man '
        'absetzt. Wer das auslässt, wirkt unhöflich.'),
 dict(de='Immer mit der Ruhe - trink so viel du magst.',
      sv='Ta det lugnt, drick så mycket du vill.',
      k=[('ruhig', ['ta det lugnt', 'lugnt']), ('trinken', ['drick', 'dricka'])]),
 dict(de='Ich lade dich ein.', sv='Jag bjuder.',
      k=[('einladen', ['jag bjuder', 'bjuder'])]),

# ---------------------------------------------------------------- Ansprechen
 dict(de='Kommst du oft hierher?', sv='Kommer du hit ofta?',
      k=[('kommen', ['kommer', 'komma']), ('oft', ['ofta'])]),
 dict(de='Die Musik hier ist gut, oder?', sv='Musiken är bra, va?',
      k=[('musik', ['musiken', 'musik']), ('gut', ['bra'])]),
 dict(de='Bist du von hier?', sv='Är du härifrån?',
      k=[('von_hier', ['härifrån', 'här'])]),
 dict(de='Du bist sehr hübsch.', sv='Du är jättefin.',
      k=[('huebsch', ['jättefin', 'fin'])]),
 dict(de='Du siehst gut aus.', sv='Du är snygg.',
      k=[('gut_aussehen', ['snygg'])]),

# ---------------------------------------------------------------- Einlass
 dict(de='Das ist mein Pass.', sv='Det här är mitt pass.',
      k=[('pass', ['pass', 'mitt pass'])],
      h='Am Clubeingang wird in Schweden fast immer „legitimation" verlangt — '
        'die Altersgrenze liegt je nach Lokal bei 18 oder 20. Ohne Ausweis '
        'kommt man nicht rein, auch nicht sichtbar erwachsen.'),

# ---------------------------------------------------------------- KTV / Karaoke
 dict(de='Wollen wir Karaoke singen?', sv='Ska vi sjunga karaoke?',
      k=[('karaoke', ['karaoke']), ('singen', ['sjunga'])]),
 dict(de='Ein Zimmer für vier Personen.', sv='Ett rum för fyra personer.',
      k=[('zimmer', ['rum', 'ett rum']), ('vier', ['fyra'])]),

# ---------------------------------------------------------------- Näher kommen
 dict(de='Du bist sehr cool.', sv='Du är cool.',
      k=[('cool', ['cool'])]),
 dict(de='Mit dir zu reden macht Spaß.', sv='Det är kul att prata med dig.',
      k=[('reden', ['prata']), ('spass', ['kul', 'roligt'])]),

# ---------------------------------------------------------------- Nachtlogistik
 dict(de='Zuerst zu dir, dann zu mir.', sv='Först till dig, sedan till mig.',
      k=[('zuerst', ['först']), ('dann', ['sedan'])]),
 dict(de='In meinem Hotel geht das nicht.', sv='På mitt hotell går det inte.',
      k=[('hotel', ['hotell', 'mitt hotell']),
         ('nicht_moeglich', ['går det inte', 'går inte'])]),
 dict(de='Das Hotel will meinen Pass sehen.', sv='Hotellet vill se mitt pass.',
      k=[('hotel', ['hotellet', 'hotell']), ('pass', ['pass', 'mitt pass'])]),

# ---------------------------------------------------------------- Komplimente
 dict(de='Du bist sehr süß.', sv='Du är söt.',
      k=[('suess', ['söt'])]),
 dict(de='Du bist groß.', sv='Du är lång.',
      k=[('gross', ['lång'])]),
 dict(de='Du hast Klasse.', sv='Du har stil.',
      k=[('klasse', ['stil', 'har stil'])]),
 dict(de='Deine Freundin hat Klasse.', sv='Din kompis har stil.',
      k=[('freundin', ['kompis', 'din kompis']), ('klasse', ['stil'])]),
 dict(de='Du hast ein süßes Lächeln.', sv='Du har ett fint leende.',
      k=[('laecheln', ['leende', 'ett leende']), ('suess', ['fint', 'fin'])]),
 dict(de='Deine Frisur ist sehr schön.', sv='Jag gillar din frisyr.',
      k=[('frisur', ['frisyr', 'din frisyr']), ('schoen', ['gillar', 'fin'])]),
]

AUSGELASSEN = [
    'Bist du aus China?',
    'Lass uns WeChat austauschen.',
    'Mein Chinesisch ist nicht so gut.',
    'Ich zahle mit WeChat.',
    'Soll ich dich scannen?',
    'Du bist schlank.',
    'Du hast eine sehr helle Haut.',
    'Ach wo! (bescheidene Antwort auf ein Lob)',
    'Nein, nein. (auf ein Lob)',
]
