# -*- coding: utf-8 -*-
"""Essen und Trinken auf Vietnamesisch - 92 Saetze (drinking_dining).

**Nichts ausgelassen.**

**Diese Kategorie passt auf Vietnamesisch besser als auf jede andere
Sprache dieser Uebersetzung.** Sie wurde fuer Chinesisch geschrieben und
traegt das sichtbar - Strassenessen, Schuesseln Reis, Schaerfe-
Verhandlung, gemeinsames Essen am Tisch. In Norwegen musste dazu
angemerkt werden, dass es Strassenessen kaum gibt; in Vietnam ist es der
Normalfall. Die Saetze sitzen hier also, wo sie anderswo Fussnoten
brauchten.

Was trotzdem eigene Wirklichkeit ist:

  Sitzen        Gegessen wird auf Plastikhockern am Strassenrand
                (`quan via he`), nicht am gedeckten Tisch. "Draussen
                sitzen" ist die Vorgabe, nicht die Sonderwahl.
  Bestellen     Man ruft `em oi!` oder `chi oi!` durch den Raum - das
                ist normal und nicht unhoeflich. Stilles Warten auf den
                Kellner fuehrt zu nichts.
  Trinkgeld     Unueblich und wird oft zurueckgegeben. In
                Touristenlokalen inzwischen erwartet, sonst nicht.
  Kraeuter      Zu fast jedem Gericht kommt ein Teller `rau song` (rohe
                Kraeuter) - die gehoeren ins Essen, nicht daneben.
  Schaerfe      Wird meist SELBST zugegeben (Chili am Tisch), nicht beim
                Kochen entschieden. Die Frage "ist das scharf?" ist
                deshalb seltener noetig als in China.

**Nicht von Muttersprachlern geprueft.**
"""

KATEGORIEN = ['drinking_dining']

SAETZE = [

# ---------------------------------------------------------- essen_bestellen
 dict(de='Die Speisekarte, bitte.', vi='Cho tôi xem thực đơn.',
      k=[('speisekarte', ['thực đơn', 'menu'])]),
 dict(de='Was empfehlen Sie?', vi='Bạn gợi ý món gì?',
      k=[('empfehlung', ['gợi ý món gì', 'gợi ý', 'món gì ngon'])]),
 dict(de='Ich hätte gern ein Wasser, bitte.', vi='Cho tôi một chai nước.',
      k=[('wasser', ['nước', 'chai nước'])],
      h='„Nước" heißt Wasser UND Land — „nước Đức" ist Deutschland. Der '
        'Kontext entscheidet.'),
 dict(de='Was möchten Sie trinken?', vi='Bạn muốn uống gì?',
      k=[('trinken_frage', ['muốn uống gì', 'uống gì'])]),
 dict(de='Ich möchte etwas bestellen.', vi='Tôi muốn gọi món.',
      k=[('bestellen', ['gọi món', 'gọi'])],
      h='„Gọi món" ist wörtlich „ein Gericht rufen" — und gerufen wird auch '
        'wirklich: „em ơi!" quer durch den Raum ist normal, nicht unhöflich.'),
 dict(de='Einen Moment, bitte.', vi='Đợi một chút nhé.',
      k=[('moment', ['đợi một chút', 'một chút', 'chờ chút'])]),
 dict(de='Das ist alles, danke.', vi='Vậy thôi, cảm ơn.',
      k=[('alles', ['vậy thôi', 'thế thôi'])]),
 dict(de='Was ist in diesem Gericht?', vi='Món này có gì trong đó?',
      k=[('was_drin', ['có gì trong đó', 'món này có gì'])]),
 dict(de='Haben Sie eine Karte mit Bildern?', vi='Có thực đơn có hình không?',
      k=[('bilder', ['có hình', 'hình', 'ảnh'])],
      h='Bildkarten sind an Touristenorten üblich — auf dem Markt zeigt man '
        'einfach auf den Topf.'),
 dict(de='Ich möchte etwas Warmes.', vi='Tôi muốn ăn gì đó nóng.',
      k=[('warm', ['gì đó nóng', 'nóng'])]),
 dict(de='Zeigen Sie mir das mal.', vi='Cho tôi xem cái đó.',
      k=[('zeigen', ['cho tôi xem', 'xem'])]),
 dict(de='Diese hier, bitte.', vi='Cho tôi cái này.',
      k=[('diese', ['cái này'])]),
 dict(de='Wie lange dauert es?', vi='Mất bao lâu?',
      k=[('wie_lange', ['mất bao lâu', 'bao lâu'])]),
 dict(de='Gibt es davon ein Bild?', vi='Có hình món đó không?',
      k=[('bild', ['hình', 'ảnh'])]),
 dict(de='Was gibt es gutes zu Essen?', vi='Ở đây có món gì ngon?',
      k=[('gutes_essen', ['món gì ngon', 'ngon'])]),

# ----------------------------------------------------------- essen_bezahlen
 dict(de='Können wir bitte zahlen?', vi='Cho tôi tính tiền.',
      k=[('zahlen', ['tính tiền', 'thanh toán'])],
      h='„Tính tiền" ist die Standardformel — man ruft sie quer durch den '
        'Raum, wie beim Bestellen.'),
 dict(de='Ist das im Preis inbegriffen?', vi='Cái đó có tính trong giá không?',
      k=[('im_preis', ['tính trong giá', 'trong giá', 'bao gồm'])]),
 dict(de='Das habe ich nicht bestellt.', vi='Tôi không gọi món này.',
      k=[('nicht_bestellt', ['không gọi món này', 'không gọi'])]),
 dict(de='Können Sie mir die Rechnung getrennt bringen?', vi='Chúng tôi trả riêng được không?',
      k=[('rechnung_getrennt', ['trả riêng', 'riêng'])],
      h='Getrennt zahlen ist unüblich — meist zahlt einer und die anderen '
        'überweisen ihm hinterher, oder man wechselt sich ab.'),
 dict(de='Zusammen, bitte.', vi='Tính chung nhé.',
      k=[('zusammen', ['tính chung', 'chung'])]),
 dict(de='Kann ich mit dem Handy bezahlen?', vi='Tôi trả bằng điện thoại được không?',
      k=[('handy', ['điện thoại', 'momo']),
         ('bezahlen', ['trả', 'thanh toán'])],
      h='QR-Code-Zahlung ist in Vietnam selbst an Straßenständen verbreitet — '
        'MoMo und die Bank-Apps hängen als Zettel am Stand.'),
 dict(de='Stimmt so.', vi='Khỏi thối lại.',
      k=[('stimmt_so', ['khỏi thối lại', 'không cần thối', 'giữ lại'])],
      h='Trinkgeld ist unüblich und wird oft zurückgegeben — nur in '
        'Touristenlokalen inzwischen erwartet.'),
 dict(de='Wie viel macht das?', vi='Tất cả bao nhiêu?',
      k=[('wieviel', ['tất cả bao nhiêu', 'bao nhiêu'])]),
 dict(de='Können wir das einpacken?', vi='Gói mang về được không?',
      k=[('einpacken', ['gói mang về', 'mang về'])]),

# ---------------------------------------------------------- essen_geschmack
 dict(de='Guten Appetit!', vi='Chúc ngon miệng!',
      k=[('guten_appetit', ['chúc ngon miệng', 'ngon miệng'])],
      h='Im Familienkreis sagt man stattdessen „mời" plus Anredewort — man '
        'lädt die Älteren ausdrücklich zum Essen ein, bevor man selbst '
        'anfängt. Das gilt als Pflicht, nicht als Höflichkeitsgeste.'),
 dict(de='Das Essen schmeckt sehr gut.', vi='Món này ngon lắm.',
      k=[('schmeckt_gut', ['ngon lắm', 'rất ngon', 'ngon'])]),
 dict(de='Gestern habe ich in einem Restaurant gegessen.', vi='Hôm qua tôi ăn ở nhà hàng.',
      k=[('restaurant', ['nhà hàng', 'quán'])]),
 dict(de='Das war sehr lecker.', vi='Rất ngon.',
      k=[('war_lecker', ['rất ngon', 'ngon'])]),
 dict(de='Das mag ich sehr.', vi='Tôi rất thích món này.',
      k=[('moegen', ['rất thích', 'thích'])]),
 dict(de='Das mag ich nicht.', vi='Tôi không thích món này.',
      k=[('nicht_moegen', ['không thích'])]),
 dict(de='Was ist das für ein Fleisch?', vi='Đây là thịt gì?',
      k=[('fleisch', ['thịt'])]),
 dict(de='Das ist mir zu salzig.', vi='Món này mặn quá.',
      k=[('salzig', ['mặn quá', 'mặn'])]),
 dict(de='Nicht zu salzig, bitte.', vi='Đừng mặn quá nhé.',
      k=[('salzig', ['đừng mặn', 'mặn'])]),
 dict(de='Dieses Restaurant ist sehr gut.', vi='Quán này rất ngon.',
      k=[('restaurant_gut', ['quán này', 'quán', 'rất ngon'])],
      h='„Quán" ist die kleine Garküche, „nhà hàng" das richtige Restaurant. '
        'Das Beste isst man meistens im „quán".'),

# ---------------------------------------------------------- essen_getraenke
 dict(de='Was haben Sie zu trinken?', vi='Ở đây có gì uống?',
      k=[('trinken', ['có gì uống', 'uống'])]),
 dict(de='Kaltes Wasser, bitte.', vi='Cho tôi nước lạnh.',
      k=[('kalt', ['lạnh']),
         ('wasser', ['nước'])]),
 dict(de='Heißes Wasser, bitte.', vi='Cho tôi nước nóng.',
      k=[('heiss', ['nóng']),
         ('wasser', ['nước'])],
      h='Heißes Wasser bekommt man in Vietnam problemlos — anders als in '
        'Europa ist die Bitte nicht ungewöhnlich.'),
 dict(de='Ohne Eis, bitte.', vi='Không đá nhé.',
      k=[('ohne_eis', ['không đá', 'đá'])],
      h='„Đá" ist Eis. Bei allem Kalten wird gefragt — und in Vietnam kommt '
        'praktisch jedes Getränk mit Eis, wenn man nichts sagt.'),
 dict(de='Ein Bier, bitte.', vi='Cho tôi một chai bia.',
      k=[('bier', ['bia', 'chai bia'])],
      h='„Bia hơi" ist das frisch gezapfte Fassbier, das an Straßenecken '
        'ausgeschenkt wird — extrem billig und die soziale Institution des '
        'Nordens.'),
 dict(de='Einen Tee, bitte.', vi='Cho tôi một ly trà.',
      k=[('tee', ['trà', 'ly trà'])],
      h='„Trà đá" (Eistee) steht in vielen Lokalen kostenlos auf dem Tisch.'),
 dict(de='Ohne Zucker, bitte.', vi='Không đường nhé.',
      k=[('ohne_zucker', ['không đường', 'đường'])]),
 dict(de='Noch eins, bitte.', vi='Cho thêm một cái nữa.',
      k=[('noch_eins', ['thêm một cái', 'thêm', 'một cái nữa'])]),
 dict(de='Zwei Flaschen, bitte.', vi='Cho tôi hai chai.',
      k=[('zwei', ['hai']),
         ('flaschen', ['chai'])]),
 dict(de='Mit Eis, bitte.', vi='Cho đá nhé.',
      k=[('eis', ['đá', 'cho đá'])]),
 dict(de='Ein bisschen Zucker, bitte.', vi='Cho ít đường thôi.',
      k=[('zucker', ['đường']),
         ('bisschen', ['ít', 'một chút'])]),
 dict(de='Trinkst du Kaffee oder Tee?', vi='Bạn uống cà phê hay trà?',
      k=[('kaffee_tee', ['cà phê', 'trà'])],
      h='Vietnam ist der zweitgrößte Kaffeeproduzent der Welt. „Cà phê sữa '
        'đá" (mit gesüßter Kondensmilch und Eis) ist das Nationalgetränk.'),

# -------------------------------------------------------------- essen_platz
 dict(de='Ich hätte gern einen Tisch für zwei Personen.', vi='Cho tôi bàn cho hai người.',
      k=[('tisch', ['bàn']),
         ('anzahl_zwei', ['hai người', 'hai'])]),
 dict(de='Haben Sie einen Tisch frei?', vi='Còn bàn trống không?',
      k=[('tisch_frei', ['bàn trống', 'còn bàn', 'bàn'])]),
 dict(de='Ich möchte einen Tisch für morgen Abend reservieren.', vi='Tôi muốn đặt bàn tối mai.',
      k=[('reservieren', ['đặt bàn', 'đặt']),
         ('morgen_abend', ['tối mai', 'mai'])]),
 dict(de='Ist dieser Tisch schon reserviert?', vi='Bàn này có ai đặt chưa?',
      k=[('schon_reserviert', ['có ai đặt', 'đặt chưa', 'đã đặt'])]),
 dict(de='Für wie viele Personen?', vi='Mấy người ạ?',
      k=[('wie_viele', ['mấy người', 'bao nhiêu người'])]),
 dict(de='Können wir draußen sitzen?', vi='Mình ngồi ngoài được không?',
      k=[('draussen', ['ngồi ngoài', 'ngoài'])],
      h='Draußen sitzen ist in Vietnam die Regel, nicht die Ausnahme — auf '
        'Plastikhockern am Straßenrand („quán vỉa hè").'),
 dict(de='Wir warten.', vi='Chúng tôi đợi.',
      k=[('warten', ['đợi', 'chờ'])]),
 dict(de='Wie lange müssen wir warten?', vi='Phải đợi bao lâu?',
      k=[('wie_lange', ['bao lâu']),
         ('warten', ['đợi', 'chờ'])]),
 dict(de='Zwei Personen.', vi='Hai người.',
      k=[('zwei', ['hai']),
         ('personen', ['người'])]),

# ----------------------------------------------------------- essen_schaerfe
 dict(de='Ist das scharf?', vi='Món này có cay không?',
      k=[('scharf', ['cay'])],
      h='Schärfe wird in Vietnam meist SELBST zugegeben — Chili und Sauce '
        'stehen am Tisch. Die Frage ist deshalb seltener nötig als in China.'),
 dict(de='Nicht scharf, bitte.', vi='Không cay nhé.',
      k=[('nicht_scharf', ['không cay', 'cay'])]),
 dict(de='Ein bisschen scharf ist okay.', vi='Cay một chút cũng được.',
      k=[('bisschen', ['một chút', 'ít'])]),
 dict(de='Ich kann nicht scharf essen.', vi='Tôi không ăn cay được.',
      k=[('nicht_koennen', ['không ăn được', 'không được']),
         ('scharf', ['cay'])]),
 dict(de='Das ist zu scharf!', vi='Cay quá!',
      k=[('zu_scharf', ['cay quá', 'cay'])]),
 dict(de='Haben Sie etwas ohne Chili?', vi='Có món nào không ớt không?',
      k=[('ohne_scharf', ['không ớt', 'ớt', 'không cay'])]),
 dict(de='Wasser, schnell!', vi='Nước, nhanh lên!',
      k=[('wasser', ['nước'])]),
 dict(de='Kannst du scharf essen?', vi='Bạn ăn cay được không?',
      k=[('koennen', ['ăn được', 'được không']),
         ('scharf', ['cay'])]),

# ------------------------------------------------------ essen_strassenessen
 dict(de='Was ist das?', vi='Cái này là gì?',
      k=[('was', ['cái này là gì', 'là gì'])]),
 dict(de='Ich nehme das.', vi='Tôi lấy cái này.',
      k=[('nehmen', ['tôi lấy', 'lấy'])]),
 dict(de='Eine Portion, bitte.', vi='Cho tôi một phần.',
      k=[('portion', ['một phần', 'phần', 'tô'])]),
 dict(de='Zwei davon, bitte.', vi='Cho tôi hai cái.',
      k=[('zwei', ['hai'])]),
 dict(de='Wie viel kostet eine Portion?', vi='Một phần bao nhiêu tiền?',
      k=[('wieviel', ['bao nhiêu tiền', 'bao nhiêu'])]),
 dict(de='Zum Mitnehmen, bitte.', vi='Mang về nhé.',
      k=[('mitnehmen', ['mang về', 'mang đi'])]),
 dict(de='Ich esse hier.', vi='Tôi ăn ở đây.',
      k=[('hier', ['ở đây']),
         ('essen', ['ăn'])]),
 dict(de='Ist das frisch?', vi='Cái này có tươi không?',
      k=[('frisch', ['tươi'])]),
 dict(de='Was essen die anderen?', vi='Mọi người đang ăn gì?',
      k=[('andere', ['mọi người', 'người khác'])],
      h='Der beste Trick beim Straßenessen: schauen, was alle essen, und '
        'dasselbe bestellen. Ein voller Stand ist immer ein gutes Zeichen.'),
 dict(de='Das Gleiche, bitte.', vi='Cho tôi giống vậy.',
      k=[('gleiche', ['giống vậy', 'giống', 'như vậy'])]),
 dict(de='Zwei Portionen, bitte.', vi='Cho tôi hai phần.',
      k=[('zwei', ['hai']),
         ('portionen', ['phần', 'tô'])]),
 dict(de='Das ist sehr frisch.', vi='Cái này rất tươi.',
      k=[('frisch', ['rất tươi', 'tươi'])]),
 dict(de='Ich möchte das Gleiche.', vi='Tôi muốn món giống vậy.',
      k=[('gleiche', ['giống vậy', 'giống'])]),

# ------------------------------------------------------------- essen_teilen
 dict(de='Wir essen zusammen.', vi='Chúng ta ăn chung.',
      k=[('zusammen', ['ăn chung', 'chung'])],
      h='Gegessen wird gemeinsam aus der Mitte, jeder hat nur eine Reisschale '
        'vor sich — eigene Portionen wie in Europa gibt es nicht.'),
 dict(de='Noch eine Schüssel Reis, bitte.', vi='Cho thêm một bát cơm.',
      k=[('reis', ['cơm']),
         ('noch', ['thêm', 'một bát nữa'])],
      h='„Bát" im Norden, „chén" im Süden — beides ist die Reisschale. „Cơm" '
        'heißt Reis UND Mahlzeit.'),
 dict(de='Iss mehr!', vi='Ăn thêm đi!',
      k=[('mehr_essen', ['ăn thêm', 'thêm'])]),
 dict(de='Ich bin satt.', vi='Tôi no rồi.',
      k=[('satt', ['no rồi', 'no'])]),
 dict(de='Nimm doch!', vi='Ăn tự nhiên đi!',
      k=[('nimm', ['ăn tự nhiên', 'tự nhiên', 'mời'])]),
 dict(de='Sollen wir noch etwas bestellen?', vi='Gọi thêm món nữa nhé?',
      k=[('bestellen', ['gọi thêm', 'gọi']),
         ('noch', ['thêm', 'nữa'])]),
 dict(de='Ich lade dich ein.', vi='Để tôi mời.',
      k=[('einladen', ['để tôi mời', 'tôi mời', 'tôi trả'])],
      h='Wer einlädt, ist meist der Ältere oder der, der mehr verdient — das '
        'wird nicht lange verhandelt.'),
 dict(de='Danke fürs Einladen!', vi='Cảm ơn đã mời!',
      k=[('danke', ['cảm ơn', 'cảm ơn đã mời'])]),
 dict(de='Das ist für alle.', vi='Cái này cho mọi người.',
      k=[('alle', ['cho mọi người', 'mọi người'])]),
 dict(de='Bist du satt?', vi='Bạn no chưa?',
      k=[('satt', ['no chưa', 'no'])]),
 dict(de='Noch eine Schüssel, bitte.', vi='Cho thêm một bát nữa.',
      k=[('schuessel', ['bát', 'chén', 'tô']),
         ('noch', ['thêm', 'nữa'])]),
 dict(de='Heute lade ich ein.', vi='Hôm nay tôi mời.',
      k=[('heute', ['hôm nay']),
         ('einladen', ['tôi mời', 'mời'])]),
 dict(de='Alle zusammen!', vi='Tất cả cùng nhau!',
      k=[('alle', ['tất cả']),
         ('zusammen', ['cùng nhau', 'chung'])],
      h='Beim Anstoßen ruft man „một, hai, ba, dô!" — eins, zwei, drei, los. '
        'Das ist der vietnamesische Trinkspruch schlechthin.'),
 dict(de='Die anderen essen schon.', vi='Mọi người đang ăn rồi.',
      k=[('andere', ['mọi người']),
         ('essen', ['đang ăn', 'ăn'])]),

# ------------------------------------------------------ essen_unvertraeglich
 dict(de='Ich bin Vegetarier.', vi='Tôi ăn chay.',
      k=[('vegetarier', ['ăn chay', 'chay'])],
      h='„Ăn chay" ist buddhistisch geprägt und gut verstanden — „quán chay" '
        'sind rein vegetarische Lokale, und an bestimmten Mondtagen essen '
        'viele Vietnamesen selbst fleischlos. Achtung: Fischsauce („nước '
        'mắm") steckt trotzdem in fast allem.'),
 dict(de='Ich habe eine Allergie gegen Nüsse.', vi='Tôi bị dị ứng với các loại hạt.',
      k=[('allergie', ['bị dị ứng', 'dị ứng']),
         ('nuesse', ['các loại hạt', 'hạt', 'đậu phộng'])]),
]

AUSGELASSEN = []
