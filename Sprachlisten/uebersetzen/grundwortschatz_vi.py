# -*- coding: utf-8 -*-
"""Grundwortschatz auf Vietnamesisch.

**KEINE Lautschrift-Spalte** - siehe Migration 20260903210000.
Vietnamesisch schreibt `quoc ngu`, das LATEINISCHE Alphabet mit Ton- und
Vokalzeichen. Die Schrift IST der Lerntext; eine "vereinfachte" Zeile
daneben gaebe es in der Wirklichkeit nirgends, und sie wegzulassen hiesse,
die Toene wegzulassen - und die tragen die Bedeutung.

**Sechs Toene, und sie sind nicht dekorativ.** `ma` heisst je nach Zeichen
Geist, Mutter, aber, Grab, Pferd oder Reissaemling. Wer die Zeichen
ignoriert, sagt etwas anderes, nicht nur etwas mit Akzent. Das ist der
Grund, warum die Toene hier mitgeschrieben werden, auch wenn es das
Tippen erschwert.

**DIE GROESSTE BESONDERHEIT: es gibt kein neutrales "du" und kein
neutrales "ich".** Vietnamesisch redet mit VERWANDTSCHAFTSWOERTERN an,
gestaffelt nach Alter und Geschlecht:

  toi        ich, neutral und etwas distanziert - die sichere Wahl fuer
             Auslaender
  ban        du, unter Gleichaltrigen
  anh        du zu einem Mann, der aelter ist als du (auch: ich, wenn DU
             der aeltere Mann bist)
  chi        du zu einer Frau, die aelter ist
  em         du zu einer juengeren Person - und ich, wenn du der juengere
             bist
  ong / ba   du zu einem deutlich aelteren Mann / einer aelteren Frau

Dasselbe Wort ist also je nach Sprecher ich ODER du. Wer das nicht
mitmacht, klingt nicht unhoeflich, sondern unverstaendlich. Praktische
Grundlinie fuer die Zielgruppe: **toi** fuer sich selbst, **ban** fuer
Gleichaltrige, **anh/chi** wenn das Gegenueber sichtbar aelter ist. Die
Saetze hier stehen in dieser Grundlinie; wo eine Alternative
gebraeuchlicher ist, steht sie als zusaetzliches Synonym in `k`.

**DREI SAETZE SIND ANGEPASST, keiner ausgelassen:**
die ueblichen zwei mit der Zielsprache im Satz (`neu=True`), dazu die
Tageszeit-Gruesse - die gibt es zwar woertlich, sagt aber kaum jemand;
der Hinweis am Satz sagt das, statt sie zu streichen.

**Nicht von Muttersprachlern geprueft.** Bei einer Tonsprache faellt das
schwerer ins Gewicht als bei den lateinschriftlichen Sprachen ohne Toene.
"""

SAETZE = [

# ---------------------------------------------------------------- Begrüßung
 dict(de='Hallo!', vi='Xin chào!',
      k=[('hallo', ['xin chào', 'chào'])],
      h='„Xin chào" ist die neutrale Allzweckbegrüßung. Unter Bekannten hängt '
        'man das Anredewort an: „chào anh" (zu einem älteren Mann), „chào '
        'chị" (zu einer älteren Frau), „chào bạn" (zu Gleichaltrigen).'),
 dict(de='Guten Morgen!', vi='Chào buổi sáng!',
      k=[('morgen_gruss', ['chào buổi sáng', 'buổi sáng'])],
      h='Gibt es wörtlich, sagt aber kaum jemand — Vietnamesen grüßen zu '
        'jeder Tageszeit mit „chào" plus Anredewort. Der Satz steht hier, '
        'weil er verstanden wird, nicht weil er üblich ist.'),
 dict(de='Guten Tag!', vi='Chào buổi trưa!',
      k=[('tag_gruss', ['chào buổi trưa', 'buổi trưa', 'xin chào'])]),
 dict(de='Guten Abend!', vi='Chào buổi tối!',
      k=[('abend_gruss', ['chào buổi tối', 'buổi tối'])]),
 dict(de='Wie geht es dir?', vi='Bạn khỏe không?',
      k=[('wie_gehts', ['bạn khỏe không', 'khỏe không', 'có khỏe không'])],
      h='Wörtlich „bist du gesund?". Das angehängte „không" macht aus jeder '
        'Aussage eine Frage — ein eigenes Fragewort braucht es nicht.'),
 dict(de='Mir geht es gut, danke.', vi='Tôi khỏe, cảm ơn.',
      k=[('gut_danke', ['tôi khỏe', 'khỏe', 'bình thường'])]),
 dict(de='Auf Wiedersehen!', vi='Tạm biệt!',
      k=[('wiedersehen', ['tạm biệt'])]),
 dict(de='Bis später!', vi='Hẹn gặp lại!',
      k=[('bis_spaeter', ['hẹn gặp lại', 'gặp lại'])]),
 dict(de='Tschüss!', vi='Chào nhé!',
      k=[('tschuess', ['chào nhé', 'chào', 'bye'])]),

# --------------------------------------------------------------- Höflichkeit
 dict(de='Danke!', vi='Cảm ơn!',
      k=[('danke', ['cảm ơn', 'cám ơn'])]),
 dict(de='Vielen Dank!', vi='Cảm ơn nhiều!',
      k=[('danke', ['cảm ơn nhiều', 'cảm ơn rất nhiều'])]),
 dict(de='Gern geschehen.', vi='Không có gì.',
      k=[('gern_geschehen', ['không có gì', 'không sao'])],
      h='Wörtlich „es ist nichts" — die übliche Antwort auf danke.'),
 dict(de='Entschuldigung!', vi='Xin lỗi!',
      k=[('entschuldigung', ['xin lỗi'])],
      h='Deckt Entschuldigung UND Anrede ab — auch wenn man jemanden auf der '
        'Straße ansprechen will.'),
 dict(de='Es tut mir leid.', vi='Tôi xin lỗi.',
      k=[('leid', ['tôi xin lỗi', 'xin lỗi'])]),
 dict(de='Kein Problem.', vi='Không sao.',
      k=[('kein_problem', ['không sao', 'không vấn đề gì'])]),
 dict(de='Ja.', vi='Vâng.',
      k=[('ja', ['vâng', 'dạ', 'ừ'])],
      h='„Vâng" im Norden, „dạ" im Süden — beides höflich. „Ừ" ist das '
        'lockere Ja unter Freunden.'),
 dict(de='Nein.', vi='Không.',
      k=[('nein', ['không'])]),
 dict(de='Ich weiß nicht.', vi='Tôi không biết.',
      k=[('nicht_wissen', ['tôi không biết', 'không biết'])]),

# ------------------------------------------------------------------ Kommentar
 dict(de='Wirklich?', vi='Thật không?',
      k=[('wirklich', ['thật không', 'thật à', 'thật'])]),
 dict(de='Cool!', vi='Tuyệt vời!',
      k=[('cool', ['tuyệt vời', 'tuyệt', 'hay quá'])]),
 dict(de='Macht nichts.', vi='Không sao đâu.',
      k=[('macht_nichts', ['không sao đâu', 'không sao'])]),
 dict(de='Genau!', vi='Đúng rồi!',
      k=[('genau', ['đúng rồi', 'chính xác'])]),
 dict(de='Stimmt.', vi='Đúng vậy.',
      k=[('stimmt', ['đúng vậy', 'đúng'])]),
 dict(de='Schade!', vi='Tiếc quá!',
      k=[('schade', ['tiếc quá', 'tiếc'])]),
 dict(de='Na klar!', vi='Tất nhiên rồi!',
      k=[('na_klar', ['tất nhiên', 'đương nhiên'])]),
 dict(de='Auf keinen Fall!', vi='Không đời nào!',
      k=[('auf_keinen_fall', ['không đời nào', 'không bao giờ'])]),

# -------------------------------------------------------------------- Notlage
 dict(de='Wo ist die Toilette?', vi='Nhà vệ sinh ở đâu?',
      k=[('toilette', ['nhà vệ sinh', 'toilet'])]),
 dict(de='Hilfe!', vi='Cứu tôi!',
      k=[('hilfe', ['cứu tôi', 'cứu'])]),
 dict(de='Ich brauche Hilfe.', vi='Tôi cần giúp đỡ.',
      k=[('brauchen', ['tôi cần', 'cần']),
         ('hilfe', ['giúp đỡ', 'giúp'])]),
 dict(de='Wo ist der Ausgang?', vi='Lối ra ở đâu?',
      k=[('ausgang', ['lối ra']),
         ('wo', ['ở đâu', 'đâu'])],
      h='Das Fragewort steht HINTEN: „ở đâu" (wo) kommt ans Satzende, nicht '
        'an den Anfang.'),
 dict(de='Ich habe mein Handy verloren.', vi='Tôi bị mất điện thoại.',
      k=[('handy', ['điện thoại']),
         ('verloren', ['bị mất', 'mất'])]),
 dict(de='Ich habe meinen Pass verloren.', vi='Tôi bị mất hộ chiếu.',
      k=[('pass', ['hộ chiếu']),
         ('verloren', ['bị mất', 'mất'])]),
 dict(de='Entschuldigung, wo ist die Toilette?', vi='Xin lỗi, nhà vệ sinh ở đâu?',
      k=[('entschuldigung', ['xin lỗi']),
         ('toilette', ['nhà vệ sinh'])]),

# --------------------------------------------------------------------- Termin
 dict(de='Wann hast du Zeit?', vi='Khi nào bạn rảnh?',
      k=[('wann_zeit', ['khi nào bạn rảnh', 'khi nào rảnh', 'rảnh'])]),
 dict(de='Ich habe morgen keine Zeit.', vi='Ngày mai tôi bận.',
      k=[('keine_zeit', ['tôi bận', 'bận', 'không rảnh'])]),
 dict(de='Können wir uns nächste Woche treffen?', vi='Tuần sau mình gặp nhau được không?',
      k=[('treffen', ['gặp nhau', 'gặp'])]),
 dict(de='Ich habe einen Termin um 10 Uhr.', vi='Tôi có hẹn lúc mười giờ.',
      k=[('termin', ['có hẹn', 'hẹn']),
         ('zehn_uhr', ['mười giờ', 'lúc mười giờ'])]),
 dict(de='Wann hast du Geburtstag?', vi='Sinh nhật bạn khi nào?',
      k=[('geburtstag_frage', ['sinh nhật bạn khi nào', 'sinh nhật khi nào'])]),
 dict(de='Mein Geburtstag ist im März.', vi='Sinh nhật tôi vào tháng ba.',
      k=[('geburtstag', ['sinh nhật']),
         ('maerz', ['tháng ba'])],
      h='Die Monate heißen einfach „Monat eins" bis „Monat zwölf" — „tháng '
        'ba" ist der dritte Monat. Eigene Monatsnamen gibt es nicht.'),

# -------------------------------------------------------------------- Uhrzeit
 dict(de='Wie spät ist es?', vi='Mấy giờ rồi?',
      k=[('wie_spaet', ['mấy giờ rồi', 'mấy giờ'])]),
 dict(de='Es ist drei Uhr.', vi='Ba giờ rồi.',
      k=[('uhrzeit', ['ba giờ'])]),
 dict(de='Um wie viel Uhr beginnt der Film?', vi='Mấy giờ phim bắt đầu?',
      k=[('beginn_frage', ['mấy giờ', 'bắt đầu']),
         ('film', ['phim'])]),
 dict(de='Welcher Tag ist heute?', vi='Hôm nay là thứ mấy?',
      k=[('welcher_tag', ['hôm nay là thứ mấy', 'thứ mấy'])]),
 dict(de='Heute ist Montag.', vi='Hôm nay là thứ hai.',
      k=[('tag', ['thứ hai'])],
      h='Auch die Wochentage sind durchnummeriert: „thứ hai" (der zweite) ist '
        'Montag, „thứ ba" Dienstag. Nur Sonntag hat einen eigenen Namen '
        '(„chủ nhật").'),
 dict(de='Wir bleiben fünf Minuten.', vi='Chúng tôi ở lại năm phút.',
      k=[('bleiben', ['ở lại']),
         ('fuenf_minuten', ['năm phút'])]),

# --------------------------------------------------------------- Verständigen
 dict(de='Sprichst du Englisch?', vi='Bạn có nói tiếng Anh không?',
      k=[('sprache_frage', ['nói tiếng anh', 'tiếng anh'])],
      h='Sprachen heißen „tiếng" plus Land: tiếng Anh (englisch), tiếng Đức '
        '(deutsch), tiếng Việt (vietnamesisch).'),
 dict(de='Kannst du bitte langsamer sprechen?', vi='Bạn nói chậm hơn được không?',
      k=[('langsamer', ['chậm hơn', 'nói chậm'])]),
 dict(de='Ich verstehe das nicht.', vi='Tôi không hiểu.',
      k=[('nicht_verstehen', ['tôi không hiểu', 'không hiểu'])]),
 dict(de='Kannst du das bitte wiederholen?', vi='Bạn nhắc lại được không?',
      k=[('wiederholen', ['nhắc lại', 'nói lại'])]),
 dict(de='Was heißt das?', vi='Cái đó nghĩa là gì?',
      k=[('heissen', ['nghĩa là gì', 'nghĩa là'])]),
 dict(de='Können Sie das bitte aufschreiben?', vi='Bạn viết ra được không?',
      k=[('aufschreiben', ['viết ra', 'viết'])]),
 dict(de='Bitte sag es noch einmal.', vi='Nói lại một lần nữa nhé.',
      k=[('noch_einmal', ['một lần nữa', 'nói lại'])]),
 dict(de='Ich spreche ein bisschen Vietnamesisch.', vi='Tôi nói tiếng Việt một chút.',
      neu=True, sz='verstaendigen',
      k=[('bisschen_sprache', ['tiếng việt một chút', 'một chút', 'tiếng việt'])]),
 dict(de='Wie sagt man das auf Vietnamesisch?', vi='Cái này tiếng Việt nói thế nào?',
      neu=True, sz='verstaendigen',
      k=[('wie_sagt_man', ['nói thế nào', 'thế nào']),
         ('sprache', ['tiếng việt'])]),

# ---------------------------------------------------------------- Vorstellung
 dict(de='Wie heißt du?', vi='Bạn tên là gì?',
      k=[('wie_heisst', ['bạn tên là gì', 'tên là gì', 'tên gì'])]),
 dict(de='Ich heiße Anna.', vi='Tôi tên là Anna.',
      k=[('heisse_x', ['tôi tên là', 'tên là'])]),
 dict(de='Woher kommst du?', vi='Bạn từ đâu đến?',
      k=[('woher', ['từ đâu đến', 'từ đâu'])]),
 dict(de='Ich komme aus Deutschland.', vi='Tôi đến từ Đức.',
      k=[('komme_aus', ['đến từ đức', 'từ đức', 'người đức'])]),
 dict(de='Wie alt bist du?', vi='Bạn bao nhiêu tuổi?',
      k=[('wie_alt', ['bao nhiêu tuổi', 'mấy tuổi'])],
      h='Diese Frage ist in Vietnam kein Tabu, sondern nötig: ohne das Alter '
        'weiß dein Gegenüber nicht, welches Anredewort es benutzen soll.'),
 dict(de='Ich bin 25 Jahre alt.', vi='Tôi hai mươi lăm tuổi.',
      k=[('alter', ['hai mươi lăm tuổi', 'hai lăm tuổi', '25 tuổi'])]),
 dict(de='Freut mich, dich kennenzulernen.', vi='Rất vui được gặp bạn.',
      k=[('freut_mich', ['rất vui được gặp', 'rất vui'])]),
 dict(de='Das ist mein Freund.', vi='Đây là bạn tôi.',
      k=[('freund', ['bạn tôi', 'bạn'])],
      h='„Bạn" ist der Kumpel. Der feste Freund heißt „bạn trai", die feste '
        'Freundin „bạn gái" — wörtlich Junge-Freund und Mädchen-Freund.'),
 dict(de='Ich bin zum ersten Mal hier.', vi='Đây là lần đầu tiên tôi đến đây.',
      k=[('erstes_mal', ['lần đầu tiên', 'lần đầu'])]),
 dict(de='Seid ihr Studenten?', vi='Các bạn là sinh viên à?',
      k=[('studenten_frage', ['là sinh viên', 'sinh viên'])]),

# ---------------------------------------------------------------------- Zahlen
 dict(de='Wie viel kostet das?', vi='Cái này bao nhiêu tiền?',
      k=[('kosten_frage', ['bao nhiêu tiền', 'bao nhiêu'])]),
 dict(de='Das kostet zehn Euro.', vi='Cái này mười euro.',
      k=[('preis', ['mười euro'])],
      h='Gezahlt wird in Đồng, und die Zahlen sind groß — ein Kaffee kostet '
        'schnell 30.000. Im Alltag lässt man die Tausender weg und sagt '
        '„ba mươi" (dreißig) für 30.000.'),
 dict(de='Ich hätte gern die Rechnung.', vi='Cho tôi tính tiền.',
      k=[('rechnung', ['tính tiền', 'hóa đơn'])]),
 dict(de='Eins, zwei, drei.', vi='Một, hai, ba.',
      k=[('zaehlen', ['một hai ba', 'một', 'hai', 'ba'])]),
 dict(de='Wie viele?', vi='Bao nhiêu?',
      k=[('wie_viele', ['bao nhiêu', 'mấy'])]),
 dict(de='Zwei Stück, bitte.', vi='Cho tôi hai cái.',
      k=[('zwei', ['hai']),
         ('bitte', ['cho tôi'])],
      h='„Cái" ist das Zählwort für Dinge und muss zwischen Zahl und '
        'Gegenstand stehen — wie im Chinesischen. Man sagt nie nur „hai".'),
 dict(de='Nur eins, bitte.', vi='Chỉ một cái thôi.',
      k=[('eins', ['một cái', 'chỉ một'])]),
 dict(de='Das ist genug.', vi='Đủ rồi.',
      k=[('genug', ['đủ rồi', 'đủ'])]),
 dict(de='Wie viel ist das zusammen?', vi='Tất cả bao nhiêu?',
      k=[('zusammen', ['tất cả']),
         ('wieviel', ['bao nhiêu'])]),
 dict(de='Wir sind vier Personen.', vi='Chúng tôi có bốn người.',
      k=[('vier', ['bốn']),
         ('personen', ['bốn người', 'người'])]),
 dict(de='Ich habe nur eins.', vi='Tôi chỉ có một cái.',
      k=[('nur_eins', ['chỉ có một', 'một cái'])]),
]

AUSGELASSEN = [
    # Zielsprache steht im Satz - ersetzt durch die vietnamesischen Fassungen.
    'Ich spreche ein bisschen Deutsch.',
    'Wie sagt man das auf Deutsch?',
]
