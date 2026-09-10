# -*- coding: utf-8 -*-
"""Reise, Hotel und Uni auf Vietnamesisch.

Zusammen 85 Saetze - travel_transportation (36), hotel_accommodation (25),
university_studying (24).

**Nichts ausgelassen.**

Das Anredesystem steht im Kopf von `grundwortschatz_vi.py`. Grundlinie
bleibt **toi** fuer sich selbst, **ban** fuer Gleichaltrige - im
Hotel- und Amtskontext ist `anh`/`chi` gegenueber dem Personal die
freundlichere Wahl.

Was in Vietnam anders laeuft und deshalb am Satz kommentiert ist:

  Fortbewegung   Der Alltag laeuft auf dem Motorrad, nicht im Auto oder
                 Bus. `xe om` (Motorradtaxi) und die Apps Grab und Be
                 sind das, was man wirklich nimmt - der Mietwagen aus
                 dem Master-Satz ist die Ausnahme, nicht die Regel.
  Zug            Es gibt genau EINE Hauptstrecke (Hanoi - Saigon, rund
                 33 Stunden). Fuer alles andere nimmt man den
                 Nachtbus oder das Flugzeug.
  Hotel          Der Pass wird beim Einchecken einbehalten oder kopiert -
                 das ist Vorschrift, kein schlechtes Zeichen.
  Uni            Credits heissen `tin chi`, das Studienjahr `nam`.
                 Lehrende redet man mit `thay` (m) / `co` (f) an -
                 woertlich Lehrer/Lehrerin, und das ist Pflicht, nicht
                 Hoeflichkeitsgeste.

**Nicht von Muttersprachlern geprueft.**
"""

KATEGORIEN = ['travel_transportation', 'hotel_accommodation', 'university_studying']

SAETZE = [

# ======================================================== hotel_accommodation
 dict(kat='hotel_accommodation', de='Ich möchte auschecken.', vi='Tôi muốn trả phòng.',
      k=[('checkout', ['trả phòng'])],
      h='Wörtlich „das Zimmer zurückgeben".'),
 dict(kat='hotel_accommodation', de='Können Sie mir ein Taxi rufen?', vi='Bạn gọi taxi cho tôi được không?',
      k=[('taxi', ['taxi', 'xe'])]),
 dict(kat='hotel_accommodation', de='Ich habe eine Reservierung.', vi='Tôi đã đặt phòng.',
      k=[('reservierung', ['đã đặt phòng', 'đặt phòng'])]),
 dict(kat='hotel_accommodation', de='Haben Sie noch ein Zimmer frei?', vi='Còn phòng trống không?',
      k=[('zimmer_frage', ['phòng trống', 'còn phòng', 'phòng'])]),
 dict(kat='hotel_accommodation', de='Ich möchte ein Einzelzimmer, bitte.', vi='Tôi muốn một phòng đơn.',
      k=[('einzelzimmer', ['phòng đơn', 'đơn'])]),
 dict(kat='hotel_accommodation', de='Wie viel kostet die Nacht?', vi='Một đêm bao nhiêu tiền?',
      k=[('preis_nacht', ['một đêm', 'đêm'])]),
 dict(kat='hotel_accommodation', de='Wann ist der Check-in?', vi='Mấy giờ được nhận phòng?',
      k=[('checkin', ['nhận phòng', 'check in'])]),
 dict(kat='hotel_accommodation', de='Ist das ein Mehrbettzimmer?', vi='Đây là phòng tập thể à?',
      k=[('mehrbettzimmer', ['phòng tập thể', 'dorm', 'tập thể'])]),
 dict(kat='hotel_accommodation', de='Wie viele Betten hat der Schlafsaal?', vi='Phòng tập thể có mấy giường?',
      k=[('wie_viele', ['mấy', 'bao nhiêu']),
         ('schlafsaal', ['phòng tập thể', 'giường', 'dorm'])]),
 dict(kat='hotel_accommodation', de='Ich hätte gern das untere Bett.', vi='Tôi muốn giường dưới.',
      k=[('unteres_bett', ['giường dưới', 'dưới'])]),
 dict(kat='hotel_accommodation', de='Gibt es Schließfächer für das Gepäck?', vi='Có tủ khóa để hành lý không?',
      k=[('schliessfaecher', ['tủ khóa', 'tủ'])]),
 dict(kat='hotel_accommodation', de='Ist Bettwäsche im Preis inbegriffen?', vi='Ga giường có tính trong giá không?',
      k=[('bettwaesche', ['ga giường', 'ga']),
         ('inbegriffen', ['tính trong giá', 'bao gồm'])]),
 dict(kat='hotel_accommodation', de='Kann ich ein Handtuch leihen?', vi='Tôi mượn khăn tắm được không?',
      k=[('handtuch', ['khăn tắm', 'khăn']),
         ('leihen', ['mượn', 'thuê'])]),
 dict(kat='hotel_accommodation', de='Gibt es eine Gemeinschaftsküche?', vi='Có bếp chung không?',
      k=[('gemeinschaftskueche', ['bếp chung', 'bếp'])]),
 dict(kat='hotel_accommodation', de='Gibt es eine Nachtruhe?', vi='Có giờ giới nghiêm không?',
      k=[('nachtruhe', ['giờ giới nghiêm', 'giới nghiêm', 'giờ yên tĩnh'])],
      h='Viele günstige Unterkünfte schließen nachts wirklich ab — wer spät '
        'zurückkommt, sollte vorher fragen.'),
 dict(kat='hotel_accommodation', de='Habt ihr einen Frauenschlafsaal?', vi='Có phòng riêng cho nữ không?',
      k=[('frauenschlafsaal', ['phòng riêng cho nữ', 'cho nữ', 'nữ'])]),
 dict(kat='hotel_accommodation', de='Muss ich eine Kaution hinterlegen?', vi='Tôi có phải đặt cọc không?',
      k=[('kaution', ['đặt cọc', 'cọc']),
         ('hinterlegen', ['đặt', 'phải đặt'])]),
 dict(kat='hotel_accommodation', de='Mein Zimmer ist nicht sauber.', vi='Phòng của tôi không sạch.',
      k=[('nicht_sauber', ['không sạch', 'bẩn'])]),
 dict(kat='hotel_accommodation', de='Die Klimaanlage funktioniert nicht.', vi='Máy lạnh không hoạt động.',
      k=[('klimaanlage_kaputt', ['máy lạnh', 'điều hòa', 'không hoạt động'])],
      h='„Máy lạnh" im Süden, „điều hòa" im Norden — beides meint die '
        'Klimaanlage, und die ist der wichtigste Punkt bei der '
        'Zimmerbesichtigung.'),
 dict(kat='hotel_accommodation', de='Ich habe meinen Schlüssel verloren.', vi='Tôi bị mất chìa khóa.',
      k=[('schluessel_verloren', ['bị mất chìa khóa', 'chìa khóa', 'mất'])]),
 dict(kat='hotel_accommodation', de='Ist das Frühstück inklusive?', vi='Có bao gồm bữa sáng không?',
      k=[('fruehstueck', ['bữa sáng', 'ăn sáng'])],
      h='Frühstück ist in Vietnam warm und herzhaft — Phở oder Bánh mì, nicht '
        'Brötchen mit Marmelade.'),
 dict(kat='hotel_accommodation', de='Gibt es hier WLAN?', vi='Ở đây có wifi không?',
      k=[('wlan', ['wifi'])]),
 dict(kat='hotel_accommodation', de='Wie ist das Passwort für das WLAN?', vi='Mật khẩu wifi là gì?',
      k=[('wlan_passwort', ['mật khẩu wifi', 'mật khẩu'])]),
 dict(kat='hotel_accommodation', de='Wo ist der Aufzug?', vi='Thang máy ở đâu?',
      k=[('aufzug', ['thang máy'])]),
 dict(kat='hotel_accommodation', de='Das Zimmer ist sehr sauber.', vi='Phòng rất sạch sẽ.',
      k=[('zimmer_sauber', ['phòng', 'sạch sẽ', 'sạch'])]),

# ===================================================== travel_transportation
 dict(kat='travel_transportation', de='Wo ist die Bushaltestelle?', vi='Trạm xe buýt ở đâu?',
      k=[('bushaltestelle', ['trạm xe buýt', 'xe buýt'])]),
 dict(kat='travel_transportation', de='Welcher Bus fährt zum Flughafen?', vi='Xe buýt nào đi sân bay?',
      k=[('bus_flughafen', ['xe buýt nào', 'xe buýt']),
         ('flughafen', ['sân bay'])]),
 dict(kat='travel_transportation', de='Wir haben den Bus erwischt.', vi='Chúng tôi kịp chuyến xe buýt.',
      k=[('bus_erwischt', ['kịp chuyến', 'kịp', 'xe buýt'])]),
 dict(kat='travel_transportation', de='Ich habe meinen Flug verpasst.', vi='Tôi bị lỡ chuyến bay.',
      k=[('flug_verpasst', ['bị lỡ chuyến bay', 'lỡ chuyến bay', 'chuyến bay'])]),
 dict(kat='travel_transportation', de='Wo ist der Check-in-Schalter?', vi='Quầy làm thủ tục ở đâu?',
      k=[('checkin_schalter', ['quầy làm thủ tục', 'làm thủ tục', 'quầy'])]),
 dict(kat='travel_transportation', de='Wo kann ich mein Gepäck aufgeben?', vi='Tôi gửi hành lý ở đâu?',
      k=[('gepaeck_aufgeben', ['gửi hành lý', 'hành lý'])]),
 dict(kat='travel_transportation', de='Mein Gepäck ist nicht angekommen.', vi='Hành lý của tôi chưa đến.',
      k=[('gepaeck_fehlt', ['hành lý chưa đến', 'hành lý', 'chưa đến'])]),
 dict(kat='travel_transportation', de='Wie komme ich zum Hafen?', vi='Làm sao để đến cảng?',
      k=[('hafen', ['cảng'])]),
 dict(kat='travel_transportation', de='Ich war letztes Jahr in Frankreich.', vi='Năm ngoái tôi đã ở Pháp.',
      k=[('frankreich', ['pháp'])]),
 dict(kat='travel_transportation', de='Nächstes Jahr fahre ich nach Italien.', vi='Năm sau tôi sẽ đi Ý.',
      k=[('italien', ['ý'])],
      h='Ländernamen sind kurz und oft nicht erkennbar: Pháp (Frankreich), Ý '
        '(Italien), Đức (Deutschland), Anh (England), Mỹ (USA).'),
 dict(kat='travel_transportation', de='Wo wollt ihr hin?', vi='Các bạn đi đâu?',
      k=[('wohin', ['đi đâu', 'đâu'])]),
 dict(kat='travel_transportation', de='Warte an der Kreuzung auf mich.', vi='Đợi tôi ở ngã tư.',
      k=[('kreuzung', ['ngã tư']),
         ('warten', ['đợi tôi', 'đợi'])],
      h='„Ngã tư" ist wörtlich die Vier-Wege-Kreuzung, „ngã ba" die '
        'Dreier-Gabelung — die Zahl steckt im Wort.'),
 dict(kat='travel_transportation', de='Ich möchte eine Fahrkarte nach München, bitte.',
      vi='Cho tôi một vé đi Munich.',
      k=[('fahrkarte', ['vé']),
         ('muenchen', ['munich'])]),
 dict(kat='travel_transportation', de='Ich möchte einen Mietwagen buchen.', vi='Tôi muốn thuê ô tô.',
      k=[('mietwagen', ['thuê ô tô', 'ô tô', 'thuê xe'])],
      h='Autos mietet in Vietnam fast niemand — üblich ist der Motorroller '
        '(„thuê xe máy"), und für längere Strecken der Fahrer dazu.'),
 dict(kat='travel_transportation', de='Wie viel kostet die Fahrt zum Flughafen?', vi='Đi sân bay bao nhiêu tiền?',
      k=[('fahrt_kosten', ['bao nhiêu tiền', 'bao nhiêu']),
         ('flughafen', ['sân bay'])],
      h='Am besten vorher über Grab oder Be buchen — dort steht der Preis '
        'fest, beim Straßentaxi wird er verhandelt.'),
 dict(kat='travel_transportation', de='Ich möchte ein Ticket.', vi='Cho tôi một vé.',
      k=[('ticket', ['vé'])]),
 dict(kat='travel_transportation', de='Wo ist der Bahnhof?', vi='Ga tàu ở đâu?',
      k=[('bahnhof', ['ga tàu', 'ga'])],
      h='Es gibt praktisch eine einzige Hauptstrecke, Hanoi nach Saigon, rund '
        '33 Stunden. Für alles andere nimmt man Nachtbus oder Flugzeug.'),
 dict(kat='travel_transportation', de='Wann fährt der nächste Zug nach Berlin?', vi='Mấy giờ có tàu tiếp theo đi Berlin?',
      k=[('naechster_zug', ['tàu tiếp theo', 'tàu']),
         ('berlin', ['berlin'])]),
 dict(kat='travel_transportation', de='Ist dieser Platz frei?', vi='Chỗ này còn trống không?',
      k=[('platz_frei', ['chỗ này còn trống', 'còn trống', 'trống'])]),
 dict(kat='travel_transportation', de='Muss ich umsteigen?', vi='Tôi có phải đổi xe không?',
      k=[('umsteigen', ['đổi xe', 'đổi'])]),
 dict(kat='travel_transportation', de='Von welchem Gleis fährt der Zug ab?', vi='Tàu đi từ đường ray nào?',
      k=[('gleis', ['đường ray', 'ke ga'])]),
 dict(kat='travel_transportation', de='Der Zug hat Verspätung.', vi='Tàu bị trễ.',
      k=[('verspaetung', ['bị trễ', 'trễ', 'muộn'])]),
 dict(kat='travel_transportation', de='Gehen Sie geradeaus.', vi='Đi thẳng.',
      k=[('geradeaus', ['đi thẳng', 'thẳng'])]),
 dict(kat='travel_transportation', de='Biegen Sie links ab.', vi='Rẽ trái.',
      k=[('links', ['rẽ trái', 'trái', 'quẹo trái'])],
      h='„Rẽ" im Norden, „quẹo" im Süden — beides heißt abbiegen.'),
 dict(kat='travel_transportation', de='Biegen Sie rechts ab.', vi='Rẽ phải.',
      k=[('rechts', ['rẽ phải', 'phải', 'quẹo phải'])]),
 dict(kat='travel_transportation', de='Es ist gleich um die Ecke.', vi='Ngay góc đường thôi.',
      k=[('um_die_ecke', ['góc đường', 'ngay góc'])]),
 dict(kat='travel_transportation', de='Nehmen Sie die zweite Straße rechts.', vi='Rẽ vào đường thứ hai bên phải.',
      k=[('zweite_strasse', ['đường thứ hai', 'thứ hai'])]),
 dict(kat='travel_transportation', de='Das Museum liegt gegenüber der Kirche.', vi='Bảo tàng đối diện nhà thờ.',
      k=[('museum', ['bảo tàng']),
         ('kirche', ['nhà thờ'])]),
 dict(kat='travel_transportation', de='Entschuldigung, wie komme ich zum Bahnhof?', vi='Xin lỗi, làm sao đến ga tàu?',
      k=[('bahnhof', ['ga tàu', 'ga'])]),
 dict(kat='travel_transportation', de='Ist das weit von hier?', vi='Có xa đây không?',
      k=[('weit', ['xa'])]),
 dict(kat='travel_transportation', de='Können Sie mir das auf der Karte zeigen?', vi='Bạn chỉ trên bản đồ được không?',
      k=[('auf_karte', ['trên bản đồ', 'bản đồ'])]),
 dict(kat='travel_transportation', de='Ich habe mich verlaufen.', vi='Tôi bị lạc đường.',
      k=[('verlaufen', ['bị lạc đường', 'lạc đường', 'lạc'])]),
 dict(kat='travel_transportation', de='Wie weit ist es zu Fuß?', vi='Đi bộ bao xa?',
      k=[('zu_fuss', ['đi bộ'])],
      h='Zu Fuß gehen ist in vietnamesischen Städten oft unangenehm — Gehwege '
        'sind mit Motorrädern und Garküchen belegt, man läuft auf der '
        'Straße.'),
 dict(kat='travel_transportation', de='Wo ist der nächste Supermarkt?', vi='Siêu thị gần nhất ở đâu?',
      k=[('supermarkt', ['siêu thị'])]),
 dict(kat='travel_transportation', de='Ist das in der Nähe?', vi='Có gần đây không?',
      k=[('in_der_naehe', ['gần đây', 'gần'])]),
 dict(kat='travel_transportation', de='Können Sie mir den Weg zeigen?', vi='Bạn chỉ đường cho tôi được không?',
      k=[('weg_zeigen', ['chỉ đường', 'đường'])]),

# ======================================================== university_studying
 dict(kat='university_studying', de='Ich habe drei Bücher.', vi='Tôi có ba quyển sách.',
      k=[('drei_buecher', ['ba quyển sách', 'ba quyển', 'sách'])],
      h='„Quyển" ist das Zählwort für Bücher — zwischen Zahl und Nomen muss '
        'immer eines stehen.'),
 dict(kat='university_studying', de='Ist hier noch ein Platz frei?', vi='Chỗ này còn trống không?',
      k=[('platz_frei', ['còn trống', 'trống'])]),
 dict(kat='university_studying', de='Darf ich mich dazusetzen?', vi='Tôi ngồi đây được không?',
      k=[('dazusetzen', ['ngồi đây', 'ngồi'])]),
 dict(kat='university_studying', de='Bist du auch neu hier?', vi='Bạn cũng mới ở đây à?',
      k=[('neu', ['mới']),
         ('hier', ['ở đây', 'cũng'])]),
 dict(kat='university_studying', de='Ich bin auch im ersten Semester.', vi='Tôi cũng là sinh viên năm nhất.',
      k=[('erstes_semester', ['năm nhất', 'năm thứ nhất'])],
      h='„Năm nhất" ist das erste Studienjahr — gezählt wird in Jahren, nicht '
        'in Semestern.'),
 dict(kat='university_studying', de='Was studierst du?', vi='Bạn học ngành gì?',
      k=[('studieren', ['học ngành gì', 'ngành gì', 'học gì'])]),
 dict(kat='university_studying', de='Gehst du auch zur nächsten Vorlesung?', vi='Bạn có đi học tiết sau không?',
      k=[('vorlesung', ['tiết sau', 'tiết học', 'buổi học'])]),
 dict(kat='university_studying', de='Wollen wir uns nach der Vorlesung treffen?', vi='Sau giờ học mình gặp nhau nhé?',
      k=[('treffen', ['gặp nhau', 'gặp']),
         ('nach_vorlesung', ['sau giờ học', 'giờ học'])]),
 dict(kat='university_studying', de='Gibt es hier eine Gruppe für Austauschstudierende?',
      vi='Ở đây có nhóm cho sinh viên trao đổi không?',
      k=[('austauschstudierende', ['sinh viên trao đổi', 'trao đổi'])]),
 dict(kat='university_studying', de='Ich studiere Informatik.', vi='Tôi học công nghệ thông tin.',
      k=[('studiere', ['tôi học', 'học']),
         ('informatik', ['công nghệ thông tin', 'tin học'])],
      h='Im Alltag kürzt man auf „CNTT" ab — die Buchstaben werden einzeln '
        'gesprochen.'),
 dict(kat='university_studying', de='In welchem Semester bist du?', vi='Bạn học năm mấy?',
      k=[('semester_frage', ['học năm mấy', 'năm mấy'])]),
 dict(kat='university_studying', de='Wann ist die Anmeldefrist?', vi='Hạn đăng ký là khi nào?',
      k=[('anmeldefrist', ['hạn đăng ký', 'đăng ký', 'hạn'])]),
 dict(kat='university_studying', de='Wie viele Credits brauche ich?', vi='Tôi cần bao nhiêu tín chỉ?',
      k=[('credits', ['tín chỉ'])],
      h='„Tín chỉ" ist das vietnamesische Credit — das englische „credits" '
        'hilft an der Uni nicht.'),
 dict(kat='university_studying', de='Wo ist der Hörsaal?', vi='Giảng đường ở đâu?',
      k=[('hoersaal', ['giảng đường', 'phòng học'])]),
 dict(kat='university_studying', de='Wann beginnt die Vorlesung?', vi='Mấy giờ bắt đầu học?',
      k=[('vorlesung_beginn', ['bắt đầu học', 'bắt đầu', 'mấy giờ'])]),
 dict(kat='university_studying', de='Wo finde ich die Bibliothek?', vi='Thư viện ở đâu?',
      k=[('bibliothek', ['thư viện'])]),
 dict(kat='university_studying', de='Wer ist der Dozent für diesen Kurs?', vi='Ai dạy môn này?',
      k=[('dozent', ['ai dạy', 'giảng viên', 'thầy'])],
      h='Angeredet werden Lehrende mit „thầy" (männlich) oder „cô" (weiblich) '
        '— wörtlich Lehrer und Lehrerin. Das ist Pflicht, nicht Höflichkeit; '
        'ein Name allein wäre respektlos.'),
 dict(kat='university_studying', de='Ich habe die Prüfung bestanden.', vi='Tôi đã đậu kỳ thi.',
      k=[('pruefung_bestanden', ['đậu kỳ thi', 'đậu', 'qua môn'])],
      h='„Đậu" im Süden, „đỗ" im Norden — beides heißt bestanden. „Qua môn" '
        'ist die Studentensprache dafür.'),
 dict(kat='university_studying', de='Ich habe morgen eine Prüfung.', vi='Ngày mai tôi có bài thi.',
      k=[('pruefung_morgen', ['ngày mai có bài thi', 'bài thi', 'kỳ thi'])]),
 dict(kat='university_studying', de='Ich habe die Hausaufgabe vergessen.', vi='Tôi quên làm bài tập.',
      k=[('hausaufgabe_vergessen', ['quên làm bài tập', 'bài tập', 'quên'])]),
 dict(kat='university_studying', de='Ich brauche mehr Zeit für die Hausarbeit.', vi='Tôi cần thêm thời gian cho bài luận.',
      k=[('mehr_zeit_hausarbeit', ['thêm thời gian', 'bài luận', 'thời gian'])]),
 dict(kat='university_studying', de='Kann ich dieses Buch ausleihen?', vi='Tôi mượn quyển sách này được không?',
      k=[('ausleihen', ['mượn'])]),
 dict(kat='university_studying', de='Können wir zusammen lernen?', vi='Mình học chung được không?',
      k=[('zusammen_lernen', ['học chung', 'chung', 'cùng học'])]),
 dict(kat='university_studying', de='Ich unterrichte Chinesisch.', vi='Tôi dạy tiếng Trung.',
      k=[('unterrichte_chinesisch', ['dạy tiếng trung', 'tiếng trung'])]),
]

AUSGELASSEN = []
