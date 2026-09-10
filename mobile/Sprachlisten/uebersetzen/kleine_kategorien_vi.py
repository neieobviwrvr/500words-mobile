# -*- coding: utf-8 -*-
"""Die sechs kleinsten Kategorien auf Vietnamesisch, in einer Datei.

Zusammen 76 Saetze - culture_immersion (20), moving_settling (18),
shopping_haggling (16), smalltalk_socialising (12), love_relationship (8),
dating_romance (2). Aufbau wie `kleine_kategorien_it.py`.

**Nichts ausgelassen.**

Das Anredesystem (kein neutrales du/ich, Verwandtschaftswoerter nach Alter
und Geschlecht) steht ausfuehrlich im Kopf von `grundwortschatz_vi.py` und
wird hier nicht wiederholt. Grundlinie bleibt: **toi** fuer sich selbst,
**ban** fuer Gleichaltrige.

Was in Vietnam anders laeuft und deshalb am Satz kommentiert ist:

  Handeln       Auf Maerkten Pflicht, nicht Option - der erste genannte
                Preis fuer Auslaender liegt regelmaessig beim Doppelten
                bis Dreifachen. Im Supermarkt und Laden mit Preisschild
                dagegen gar nicht.
  Wohnen        Vermietet wird fast immer moebliert und monatlich im
                Voraus, Kaution ein Monat. Strom rechnet der Vermieter
                oft selbst ab, zu eigenen Saetzen - danach zu fragen
                lohnt.
  Meldeamt      Auslaender werden vom VERMIETER bei der lokalen Polizei
                (`công an phường`) angemeldet, nicht von sich selbst.
                Deshalb ist der Meldesatz hier anders gebaut als in den
                europaeischen Sprachen.
  Kosenamen     Laufen ueber dieselben Verwandtschaftswoerter wie die
                Anrede - `anh`/`em` ist zwischen Paaren die normale
                gegenseitige Anrede und zugleich zaertlich. Ein eigenes
                Kosewort-System wie im Polnischen gibt es nicht.

**Nicht von Muttersprachlern geprueft.** Bei einer Tonsprache faellt das
schwerer ins Gewicht.
"""

KATEGORIEN = [
    'culture_immersion',
    'dating_romance',
    'love_relationship',
    'moving_settling',
    'shopping_haggling',
    'smalltalk_socialising',
]

SAETZE = [

# ========================================================= culture_immersion
 dict(kat='culture_immersion', de='Wo findet das Konzert statt?', vi='Buổi hòa nhạc ở đâu?',
      k=[('konzert', ['buổi hòa nhạc', 'hòa nhạc'])]),
 dict(kat='culture_immersion', de='Wie viel kostet der Eintritt?', vi='Vé vào bao nhiêu tiền?',
      k=[('eintritt', ['vé vào', 'vé'])]),
 dict(kat='culture_immersion', de='Wann öffnet das Museum?', vi='Bảo tàng mở cửa lúc mấy giờ?',
      k=[('museum_oeffnet', ['bảo tàng', 'mở cửa'])]),
 dict(kat='culture_immersion', de='Das war ein tolles Konzert.', vi='Buổi hòa nhạc rất tuyệt.',
      k=[('tolles_konzert', ['rất tuyệt', 'tuyệt', 'hòa nhạc'])]),
 dict(kat='culture_immersion', de='Ich gehe gerne ins Kino.', vi='Tôi thích đi xem phim.',
      k=[('kino', ['xem phim', 'rạp phim'])]),
 dict(kat='culture_immersion', de='Ich interessiere mich für Geschichte.', vi='Tôi quan tâm đến lịch sử.',
      k=[('interessiere_geschichte', ['quan tâm đến lịch sử', 'lịch sử'])]),
 dict(kat='culture_immersion', de='Treibst du Sport?', vi='Bạn có chơi thể thao không?',
      k=[('sport_frage', ['chơi thể thao', 'thể thao'])]),
 dict(kat='culture_immersion', de='Ich spiele gerne Fußball.', vi='Tôi thích đá bóng.',
      k=[('fussball', ['đá bóng', 'bóng đá'])],
      h='„Đá bóng" heißt wörtlich Ball treten (Fußball spielen), „bóng đá" '
        'ist der Sport als Sache. Beides hört man ständig.'),
 dict(kat='culture_immersion', de='Berlin ist sehr schön.', vi='Berlin rất đẹp.',
      k=[('berlin_schoen', ['berlin', 'rất đẹp', 'đẹp'])]),
 dict(kat='culture_immersion', de='Wir spielen Fußball.', vi='Chúng tôi đá bóng.',
      k=[('spielen_fussball', ['đá bóng', 'bóng đá'])]),
 dict(kat='culture_immersion', de='Wo ist die Kirche?', vi='Nhà thờ ở đâu?',
      k=[('kirche', ['nhà thờ'])]),
 dict(kat='culture_immersion', de='Er ist gesprungen.', vi='Anh ấy đã nhảy.',
      k=[('gesprungen', ['đã nhảy', 'nhảy'])],
      h='„Đã" markiert die Vergangenheit — das Verb selbst bleibt '
        'unverändert. Vietnamesisch konjugiert gar nicht.'),
 dict(kat='culture_immersion', de='Wie ist das Wetter heute?', vi='Hôm nay thời tiết thế nào?',
      k=[('wetter_frage', ['thời tiết thế nào', 'thời tiết'])]),
 dict(kat='culture_immersion', de='Es regnet.', vi='Trời đang mưa.',
      k=[('regnet', ['trời đang mưa', 'mưa'])]),
 dict(kat='culture_immersion', de='Die Sonne scheint.', vi='Trời nắng.',
      k=[('sonne_scheint', ['trời nắng', 'nắng'])]),
 dict(kat='culture_immersion', de='Es ist sehr kalt heute.', vi='Hôm nay trời rất lạnh.',
      k=[('kalt', ['rất lạnh', 'lạnh'])],
      h='Im Süden wird es praktisch nie kalt — dieser Satz gehört nach '
        'Hanoi und in die Berge, wo der Winter durchaus frisch ist.'),
 dict(kat='culture_immersion', de='Was machst du am Wochenende?', vi='Cuối tuần bạn làm gì?',
      k=[('wochenende_frage', ['cuối tuần', 'làm gì'])]),
 dict(kat='culture_immersion', de='Möchtest du mitkommen?', vi='Bạn có muốn đi cùng không?',
      k=[('mitkommen', ['đi cùng', 'muốn đi cùng'])]),
 dict(kat='culture_immersion', de='Letztes Wochenende war ich am Strand.', vi='Cuối tuần trước tôi đi biển.',
      k=[('strand', ['đi biển', 'biển'])]),
 dict(kat='culture_immersion', de='Nächstes Wochenende gehe ich wandern.', vi='Cuối tuần sau tôi đi leo núi.',
      k=[('wandern', ['leo núi', 'đi bộ đường dài'])],
      h='„Leo núi" ist wörtlich Berge klettern — Sapa und Đà Lạt sind die '
        'klassischen Ziele.'),

# ============================================================ dating_romance
 dict(kat='dating_romance', de='Hast du einen festen Freund oder eine feste Freundin?',
      vi='Bạn có người yêu chưa?',
      k=[('fester_partner', ['người yêu', 'bạn trai', 'bạn gái'])],
      h='„Người yêu" ist geschlechtsneutral — wörtlich „geliebte Person". Die '
        'Frage endet mit „chưa" (schon?), nicht mit einem Oder — im '
        'Vietnamesischen fragt man, OB schon, nicht welches von beidem.'),
 dict(kat='dating_romance', de='Wir sind gerade zusammen.', vi='Chúng tôi đang yêu nhau.',
      k=[('zusammen_sein', ['đang yêu nhau', 'yêu nhau'])]),

# ========================================================== love_relationship
 dict(kat='love_relationship', de='Wie soll ich dich nennen?', vi='Anh nên gọi em là gì?',
      k=[('wie', ['gì', 'là gì']),
         ('nennen', ['gọi', 'gọi em'])],
      h='Diese Frage ist in Vietnam praktisch die erste überhaupt: ohne zu '
        'wissen, wer älter ist, weiß keiner, welches Anredewort gilt.'),
 dict(kat='love_relationship', de='Ich nenne dich Schatz.', vi='Anh gọi em là cưng.',
      k=[('nennen', ['anh gọi em', 'gọi']),
         ('schatz', ['cưng', 'em yêu'])],
      h='„Cưng" ist Schatz oder Liebling, „em yêu" wörtlich „geliebte(r) '
        'Jüngere(r)" — das gängigste Kosewort zwischen Paaren.'),
 dict(kat='love_relationship', de='Kann ich dich Schatzi nennen?', vi='Anh gọi em là bé được không?',
      k=[('koennen', ['được không']),
         ('schatzi', ['bé', 'bé yêu'])]),
 dict(kat='love_relationship', de='Er nennt mich Bärchen.', vi='Anh ấy gọi em là gấu.',
      k=[('nennen', ['gọi em là', 'gọi']),
         ('baerchen', ['gấu'])],
      h='„Gấu" heißt Bär und ist unter jungen Leuten das Slangwort für den '
        'Partner überhaupt — „có gấu chưa?" heißt „hast du schon jemanden?".'),
 dict(kat='love_relationship', de='Sie nennt mich Süße.', vi='Cô ấy gọi anh là cục cưng.',
      k=[('nennen', ['gọi anh là', 'gọi']),
         ('suesse', ['cục cưng', 'cưng'])]),
 dict(kat='love_relationship', de='Das ist mein Kosename für dich.', vi='Đó là tên gọi thân mật của anh dành cho em.',
      k=[('kosename', ['tên gọi thân mật', 'thân mật'])]),
 dict(kat='love_relationship', de='Ich mag diesen Spitznamen nicht so gern.', vi='Em không thích biệt danh đó lắm.',
      k=[('nicht_gern', ['không thích', 'không thích lắm']),
         ('spitzname', ['biệt danh'])]),
 dict(kat='love_relationship', de='Nenn mich bitte nicht so!', vi='Đừng gọi em như thế!',
      k=[('nennen', ['đừng gọi', 'gọi']),
         ('nicht_so', ['như thế', 'như vậy'])]),

# ============================================================ moving_settling
 dict(kat='moving_settling', de='Wo finde ich einen Handwerker?', vi='Tôi tìm thợ sửa ở đâu?',
      k=[('handwerker', ['thợ sửa', 'thợ'])],
      h='„Thợ" plus Tätigkeit: thợ điện (Elektriker), thợ nước (Klempner). '
        'Ein Sammelwort wie „Handwerker" gibt es nicht.'),
 dict(kat='moving_settling', de='Die Heizung funktioniert nicht.', vi='Máy sưởi không hoạt động.',
      k=[('heizung_kaputt', ['máy sưởi', 'không hoạt động'])],
      h='Heizungen sind in Vietnam die Ausnahme — gefragt wird praktisch '
        'immer nach der Klimaanlage („máy lạnh"), und die ist derselbe Satz '
        'mit einem anderen Wort.'),
 dict(kat='moving_settling', de='Meine Nachbarn sind sehr nett.', vi='Hàng xóm của tôi rất tốt.',
      k=[('nachbarn_nett', ['hàng xóm', 'rất tốt'])]),
 dict(kat='moving_settling', de='Das Buch liegt auf dem Tisch.', vi='Quyển sách ở trên bàn.',
      k=[('buch_tisch', ['quyển sách', 'trên bàn', 'sách'])]),
 dict(kat='moving_settling', de='Hier ist es sehr praktisch.', vi='Ở đây rất tiện.',
      k=[('praktisch', ['rất tiện', 'tiện'])]),
 dict(kat='moving_settling', de='Ich muss den Strom anmelden.', vi='Tôi cần đăng ký điện.',
      k=[('strom_anmelden', ['đăng ký điện', 'điện'])],
      h='Meist läuft der Strom über den Vermieter, der zu eigenen Sätzen '
        'abrechnet — oft deutlich über dem staatlichen Tarif. Vorher nach '
        'dem Preis pro kWh zu fragen, spart Ärger.'),
 dict(kat='moving_settling', de='Wie melde ich mich beim Einwohnermeldeamt an?', vi='Tôi đăng ký tạm trú như thế nào?',
      k=[('einwohnermeldeamt', ['đăng ký tạm trú', 'tạm trú'])],
      h='„Tạm trú" ist die vorübergehende Anmeldung bei der lokalen Polizei. '
        'Anders als in Europa macht das der VERMIETER für dich — er ist dazu '
        'verpflichtet. Wenn er es nicht tut, ist das sein Problem, kann aber '
        'deins werden.'),
 dict(kat='moving_settling', de='Ich brauche eine Bestätigung meiner Adresse.', vi='Tôi cần giấy xác nhận địa chỉ.',
      k=[('adressbestaetigung', ['giấy xác nhận', 'xác nhận địa chỉ', 'địa chỉ'])]),
 dict(kat='moving_settling', de='Das kann ich erledigen.', vi='Tôi có thể lo việc đó.',
      k=[('erledigen', ['lo việc đó', 'có thể lo', 'làm được'])]),
 dict(kat='moving_settling', de='Ich bezahle mit dem Handy.', vi='Tôi trả bằng điện thoại.',
      k=[('handy_bezahlen', ['bằng điện thoại', 'điện thoại', 'momo'])],
      h='„MoMo" ist die verbreitetste Bezahl-App und wird wie ein Verb '
        'benutzt — vergleichbar mit Vipps in Norwegen.'),
 dict(kat='moving_settling', de='Ich suche eine Wohnung.', vi='Tôi đang tìm phòng trọ.',
      k=[('wohnung_suchen', ['tìm phòng trọ', 'phòng trọ', 'căn hộ'])],
      h='„Phòng trọ" ist das Mietzimmer, „căn hộ" die richtige Wohnung. Für '
        'Langzeitreisende ist meist Ersteres gemeint.'),
 dict(kat='moving_settling', de='Wie hoch ist die Miete?', vi='Tiền thuê bao nhiêu?',
      k=[('miete', ['tiền thuê', 'thuê'])]),
 dict(kat='moving_settling', de='Ist die Kaution im Preis enthalten?', vi='Tiền cọc có tính trong giá không?',
      k=[('kaution', ['tiền cọc', 'cọc'])],
      h='Üblich ist eine Monatsmiete als „tiền cọc", gezahlt wird meist '
        'monatlich im Voraus und bar.'),
 dict(kat='moving_settling', de='Wann kann ich einziehen?', vi='Khi nào tôi có thể dọn vào?',
      k=[('einziehen', ['dọn vào', 'chuyển vào'])]),
 dict(kat='moving_settling', de='Gibt es einen Aufzug im Haus?', vi='Tòa nhà có thang máy không?',
      k=[('aufzug', ['thang máy'])]),
 dict(kat='moving_settling', de='Gibt es hier einen Waschraum?', vi='Ở đây có chỗ giặt không?',
      k=[('waschraum', ['chỗ giặt', 'máy giặt', 'giặt'])]),
 dict(kat='moving_settling', de='Ich möchte den Mietvertrag unterschreiben.', vi='Tôi muốn ký hợp đồng thuê nhà.',
      k=[('mietvertrag', ['hợp đồng thuê nhà', 'hợp đồng']),
         ('unterschreiben', ['ký'])]),
 dict(kat='moving_settling', de='Ich bin letzte Woche umgezogen.', vi='Tuần trước tôi đã chuyển nhà.',
      k=[('umgezogen', ['đã chuyển nhà', 'chuyển nhà'])]),

# ========================================================== shopping_haggling
 dict(kat='shopping_haggling', de='Kann ich das anprobieren?', vi='Tôi mặc thử được không?',
      k=[('anprobieren', ['mặc thử', 'thử'])]),
 dict(kat='shopping_haggling', de='Wo ist die Umkleidekabine?', vi='Phòng thử đồ ở đâu?',
      k=[('umkleidekabine', ['phòng thử đồ', 'phòng thử'])]),
 dict(kat='shopping_haggling', de='Haben Sie das auch in Größe M?', vi='Có size M không?',
      k=[('groesse', ['size', 'cỡ'])],
      h='Vietnamesische Größen fallen deutlich kleiner aus als europäische — '
        'ein deutsches M ist dort oft L oder XL.'),
 dict(kat='shopping_haggling', de='Haben Sie das in einer anderen Farbe?', vi='Có màu khác không?',
      k=[('andere_farbe', ['màu khác', 'màu'])]),
 dict(kat='shopping_haggling', de='Kann ich mit Karte bezahlen?', vi='Tôi trả bằng thẻ được không?',
      k=[('karte_zahlen', ['bằng thẻ', 'thẻ'])]),
 dict(kat='shopping_haggling', de='Nur Bargeld, bitte.', vi='Chỉ tiền mặt thôi.',
      k=[('bargeld', ['tiền mặt'])],
      h='Auf Märkten und bei Straßenständen gilt das fast überall — Karte '
        'nehmen nur größere Läden.'),
 dict(kat='shopping_haggling', de='Das ist zu teuer.', vi='Đắt quá.',
      k=[('zu_teuer', ['đắt quá', 'đắt', 'mắc quá'])],
      h='„Đắt quá" im Norden, „mắc quá" im Süden. Der Satz ist auf dem Markt '
        'kein Vorwurf, sondern der Eröffnungszug beim Handeln.'),
 dict(kat='shopping_haggling', de='Gibt es einen Rabatt?', vi='Bớt được không?',
      k=[('rabatt', ['bớt được không', 'bớt', 'giảm giá'])],
      h='Auf Märkten ist Handeln Pflicht, nicht Option: der erste Preis für '
        'Ausländer liegt regelmäßig beim Doppelten bis Dreifachen. Im Laden '
        'mit Preisschild dagegen gar nicht.'),
 dict(kat='shopping_haggling', de='Haben Sie eine Tüte?', vi='Có túi không?',
      k=[('tuete', ['túi'])]),
 dict(kat='shopping_haggling', de='Das gilt nicht als teuer.', vi='Cái đó không được coi là đắt.',
      k=[('nicht_teuer', ['không đắt', 'không được coi là đắt'])]),
 dict(kat='shopping_haggling', de='Ich möchte das zurückgeben.', vi='Tôi muốn trả lại cái này.',
      k=[('zurueckgeben', ['trả lại'])]),
 dict(kat='shopping_haggling', de='Ich suche ein Geschenk für meine Mutter.', vi='Tôi tìm quà cho mẹ.',
      k=[('geschenk', ['quà'])]),
 dict(kat='shopping_haggling', de='Wann schließt das Geschäft?', vi='Cửa hàng đóng cửa lúc mấy giờ?',
      k=[('schliesst', ['đóng cửa', 'cửa hàng'])]),
 dict(kat='shopping_haggling', de='Ich schaue mich nur um.', vi='Tôi chỉ xem thôi.',
      k=[('nur_umschauen', ['chỉ xem thôi', 'chỉ xem'])]),
 dict(kat='shopping_haggling', de='Können Sie mir helfen?', vi='Bạn giúp tôi được không?',
      k=[('helfen', ['giúp tôi', 'giúp'])]),
 dict(kat='shopping_haggling', de='Ich habe gestern ein neues Kleid gekauft.', vi='Hôm qua tôi đã mua một chiếc váy mới.',
      k=[('gekauft', ['đã mua', 'mua']),
         ('kleid', ['váy', 'chiếc váy'])]),

# ===================================================== smalltalk_socialising
 dict(kat='smalltalk_socialising', de='Bist du verheiratet?', vi='Bạn kết hôn chưa?',
      k=[('verheiratet', ['kết hôn', 'lập gia đình'])],
      h='Die Frage kommt in Vietnam früh und gilt nicht als indiskret — '
        'zusammen mit dem Alter ist sie Teil des normalen Kennenlernens.'),
 dict(kat='smalltalk_socialising', de='Hast du Geschwister?', vi='Bạn có anh chị em không?',
      k=[('geschwister', ['anh chị em'])],
      h='Wörtlich „älterer Bruder, ältere Schwester, jüngeres Geschwister" — '
        'die drei Anredewörter zusammen ergeben das Wort für Geschwister.'),
 dict(kat='smalltalk_socialising', de='Ich habe eine Schwester.', vi='Tôi có một chị gái.',
      k=[('schwester', ['chị gái', 'em gái', 'chị'])],
      h='„Chị gái" ist die ÄLTERE Schwester, „em gái" die jüngere. Ein '
        'neutrales Wort für Schwester gibt es nicht.'),
 dict(kat='smalltalk_socialising', de='Noch nicht.', vi='Chưa.',
      k=[('noch_nicht', ['chưa'])],
      h='„Chưa" heißt „noch nicht" und ist zugleich das Fragewort für „schon?" '
        '— dieselbe Silbe fragt und antwortet.'),
 dict(kat='smalltalk_socialising', de='Was sind deine Hobbys?', vi='Sở thích của bạn là gì?',
      k=[('hobbys_frage', ['sở thích', 'sở thích của bạn'])]),
 dict(kat='smalltalk_socialising', de='Ich lese gerne Bücher.', vi='Tôi thích đọc sách.',
      k=[('lesen', ['đọc sách', 'đọc'])]),
 dict(kat='smalltalk_socialising', de='Mein Hobby ist Sport.', vi='Sở thích của tôi là thể thao.',
      k=[('hobby_sport', ['thể thao'])]),
 dict(kat='smalltalk_socialising', de='Was machst du beruflich?', vi='Bạn làm nghề gì?',
      k=[('beruf_frage', ['làm nghề gì', 'nghề gì', 'làm gì'])]),
 dict(kat='smalltalk_socialising', de='Ich bin Student.', vi='Tôi là sinh viên.',
      k=[('student', ['sinh viên'])]),
 dict(kat='smalltalk_socialising', de='Ich arbeite als Lehrer.', vi='Tôi làm giáo viên.',
      k=[('beruf', ['giáo viên'])],
      h='Lehrer haben in Vietnam hohes Ansehen — die Antwort erntet oft '
        'sichtbaren Respekt.'),
 dict(kat='smalltalk_socialising', de='Wo wohnst du?', vi='Bạn sống ở đâu?',
      k=[('wo_wohnst', ['sống ở đâu', 'ở đâu'])]),
 dict(kat='smalltalk_socialising', de='Ich wohne in Berlin.', vi='Tôi sống ở Berlin.',
      k=[('wohne_in', ['sống ở berlin', 'berlin'])]),
]

AUSGELASSEN = []
