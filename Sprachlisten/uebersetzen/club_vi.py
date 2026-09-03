# -*- coding: utf-8 -*-
"""Club + Nightlife auf Vietnamesisch - die groesste Kategorie (138 Saetze).

**HIER FALLEN NUR ZWEI SAETZE RAUS, nicht sechs** - Vietnamesisch ist
kulturell naeher am chinesischen Original als jede andere Sprache dieser
Uebersetzung. Zum Vergleich: Italienisch, Norwegisch, Russisch, Englisch
und Polnisch mussten je sechs Saetze ersetzen oder streichen.

  Bist du aus China?          Zielland im Satz - ersetzt.
  Mein Chinesisch ist nicht   Zielsprache im Satz - ersetzt.
  so gut.

**Was hier BLEIBT, obwohl es anderswo weichen musste:**

  Lass uns WeChat             `Zalo` ist das vietnamesische Gegenstueck
  austauschen.                und spielt dieselbe Rolle: praktisch jeder
                              hat es, und man tauscht es statt der
                              Nummer. Nur der Name aendert sich.
  Soll ich dich scannen?      Zalo hat einen QR-Code, genau wie WeChat -
                              die GESTE existiert also wirklich. In
                              Europa musste dieser Satz ueberall weichen.
  Ich zahle mit WeChat.       MoMo und QR-Zahlung sind auch an
                              Strassenstaenden ueblich.
  Du hast eine sehr helle     **BLEIBT DRIN.** Helle Haut ist in Vietnam
  Haut.                       wie in China ein echtes
                              Schoenheitsideal - Sonnenschutz,
                              Gesichtsmasken und lange Aermel bei
                              35 Grad sind Alltag, und das Kompliment
                              ist verbreitet. In Italien, Norwegen,
                              Russland, Grossbritannien und Polen wurde
                              derselbe Satz ersatzlos ausgelassen, weil
                              er dort danebengeht. **Simon sollte auch
                              das gegenlesen** - die Aufnahme war im
                              Chinesischen ausdruecklich seine
                              Entscheidung.

**138 uebersetzt, 2 ausgelassen, 2 neu.** Die vollstaendigste Fassung
dieser Kategorie ausser dem chinesischen Original.

**Das Anredesystem** steht im Kopf von `grundwortschatz_vi.py`. Im Club
ist `ban` (Gleichaltrige) die Grundlinie, `anh`/`em` das, was zwischen
Flirtenden schnell benutzt wird - `anh` fuer den Mann, `em` fuer die
juengere Frau, unabhaengig vom echten Alter.

**Nicht von Muttersprachlern geprueft.** Bei Anmach- und
Sicherheitssaetzen faellt das besonders ins Gewicht.
"""

KATEGORIEN = ['club_nightlife']

SAETZE = [

# --------------------------------------------------------- club_ansprechen
 dict(de='Wie heißt du?', vi='Bạn tên gì?',
      k=[('wie_heisst', ['bạn tên gì', 'tên gì'])]),
 dict(de='Gefällt es dir hier auch?', vi='Bạn thấy ở đây thế nào?',
      k=[('gefaellt', ['thấy thế nào', 'ở đây thế nào'])]),
 dict(de='Ich sehe dir gern beim Tanzen zu.', vi='Tôi thích nhìn bạn nhảy.',
      k=[('tanzen_zusehen', ['nhìn bạn nhảy', 'bạn nhảy', 'nhảy'])]),
 dict(de='Du bist sehr hübsch.', vi='Em rất xinh.',
      k=[('huebsch', ['rất xinh', 'xinh', 'đẹp'])],
      h='„Xinh" ist hübsch (für Frauen), „đẹp" schön allgemein. Zwischen '
        'Flirtenden wird „em" statt „bạn" benutzt — das ist vertrauter.'),
 dict(de='Du siehst gut aus.', vi='Anh trông đẹp trai.',
      k=[('gut_aussehen', ['đẹp trai', 'trông đẹp'])],
      h='„Đẹp trai" ist gutaussehend für Männer — wörtlich „schöner Junge".'),
 dict(de='Bist du Single?', vi='Bạn độc thân à?',
      k=[('single', ['độc thân', 'chưa có ai'])]),
 dict(de='Ist dein Freund auch hier?', vi='Bạn trai em cũng ở đây à?',
      k=[('freund_hier', ['bạn trai', 'người yêu'])]),
 dict(de='Ist deine Freundin auch hier?', vi='Bạn gái anh cũng ở đây à?',
      k=[('freundin_hier', ['bạn gái', 'người yêu'])]),
 dict(de='Wollen wir zusammen tanzen?', vi='Mình nhảy cùng nhau nhé?',
      k=[('tanzen', ['nhảy cùng nhau', 'nhảy'])]),
 dict(de='Hier ist es zu laut. Gehen wir nach draußen?', vi='Ở đây ồn quá. Ra ngoài nhé?',
      k=[('zu_laut', ['ồn quá', 'ồn']),
         ('nach_draussen', ['ra ngoài', 'ngoài'])]),
 dict(de='Die Musik hier ist gut, oder?', vi='Nhạc ở đây hay nhỉ?',
      k=[('musik_gut', ['nhạc hay', 'nhạc'])]),
 dict(de='Kommst du oft hierher?', vi='Bạn hay đến đây không?',
      k=[('oft_hier', ['hay đến đây', 'hay đến'])]),
 dict(de='Bist du von hier?', vi='Bạn ở đây à?',
      k=[('von_hier', ['ở đây', 'người ở đây'])]),
 dict(de='Bist du aus Vietnam?', vi='Bạn là người Việt à?',
      neu=True, sz='club_ansprechen',
      k=[('aus_land', ['người việt', 'việt nam'])]),
 dict(de='Mein Vietnamesisch ist nicht so gut.', vi='Tiếng Việt của tôi không tốt lắm.',
      neu=True, sz='club_ansprechen',
      k=[('sprache_nicht_gut', ['tiếng việt của tôi', 'không tốt lắm', 'tiếng việt'])]),
 dict(de='Lass uns WeChat austauschen.', vi='Mình kết bạn Zalo nhé?',
      k=[('kontakt_tauschen', ['kết bạn zalo', 'zalo'])],
      h='„Zalo" ist das vietnamesische WeChat: praktisch jeder hat es, und '
        'man tauscht es statt der Telefonnummer. Facebook Messenger ist die '
        'zweite verbreitete Wahl.'),
 dict(de='Soll ich dich scannen?', vi='Tôi quét mã của bạn nhé?',
      k=[('scannen', ['quét mã', 'quét'])],
      h='Zalo hat einen QR-Code wie WeChat — die Geste des Scannens '
        'existiert hier also wirklich. In Europa musste dieser Satz überall '
        'weichen.'),

# ---------------------------------------------------------------- club_bar
 dict(de='Zwei Bier, bitte.', vi='Cho hai chai bia.',
      k=[('zwei_bier', ['hai chai bia', 'hai bia', 'bia'])],
      h='„Một, hai, ba, dô!" ist der Trinkspruch — eins, zwei, drei, los. '
        'Wird laut und oft gerufen.'),
 dict(de='Hier ist es zu laut.', vi='Ở đây ồn quá.',
      k=[('zu_laut', ['ồn quá', 'ồn'])]),
 dict(de='Es ist laut, sag es bitte nochmal.', vi='Ồn quá, bạn nói lại đi.',
      k=[('nochmal', ['nói lại', 'lại'])]),
 dict(de='Was möchtest du trinken?', vi='Bạn uống gì?',
      k=[('trinken_frage', ['uống gì'])]),
 dict(de='Haben Sie Wasser?', vi='Có nước không?',
      k=[('wasser', ['nước'])]),
 dict(de='Das ist zu teuer.', vi='Đắt quá.',
      k=[('zu_teuer', ['đắt quá', 'đắt', 'mắc quá'])]),
 dict(de='Noch eins, bitte.', vi='Cho thêm một cái nữa.',
      k=[('noch_eins', ['thêm một cái', 'thêm'])]),
 dict(de='Das bezahle ich.', vi='Để tôi trả.',
      k=[('ich_zahle', ['để tôi trả', 'tôi trả', 'tôi mời'])]),
 dict(de='Wo kann ich bezahlen?', vi='Tôi trả tiền ở đâu?',
      k=[('wo_bezahlen', ['trả tiền ở đâu', 'trả tiền'])]),
 dict(de='Ich nehme das Gleiche.', vi='Cho tôi giống vậy.',
      k=[('gleiche', ['giống vậy', 'giống'])]),
 dict(de='Was möchten Sie?', vi='Anh chị dùng gì ạ?',
      k=[('was_moechten', ['dùng gì', 'uống gì'])]),
 dict(de='Ich zahle mit WeChat.', vi='Tôi trả bằng MoMo.',
      k=[('app_zahlen', ['momo', 'quét mã', 'chuyển khoản'])],
      h='„MoMo" ist die verbreitetste Bezahl-App; bezahlt wird per QR-Code, '
        'auch an Straßenständen. Bargeld geht überall, Karte oft nicht.'),

# ------------------------------------------------------------ club_einlass
 dict(de='Was kostet der Eintritt?', vi='Vé vào cửa bao nhiêu?',
      k=[('eintritt', ['vé vào cửa', 'vé vào', 'vé'])]),
 dict(de='Ich möchte ein Ticket kaufen.', vi='Tôi muốn mua vé.',
      k=[('ticket', ['mua vé', 'vé'])]),
 dict(de='Wir sind zu zweit.', vi='Chúng tôi có hai người.',
      k=[('zu_zweit', ['hai người', 'hai'])]),
 dict(de='Das ist mein Pass.', vi='Đây là hộ chiếu của tôi.',
      k=[('pass', ['hộ chiếu'])]),
 dict(de='Habt ihr heute offen?', vi='Hôm nay có mở cửa không?',
      k=[('offen', ['mở cửa', 'mở'])]),
 dict(de='Bis wann habt ihr heute offen?', vi='Hôm nay mở đến mấy giờ?',
      k=[('bis_wann', ['đến mấy giờ', 'mấy giờ'])],
      h='Offiziell schließen Clubs in Vietnam um Mitternacht — praktisch wird '
        'das unterschiedlich streng gehandhabt, in Saigon lockerer als in '
        'Hanoi.'),
 dict(de='Ich bin mit Freunden hier.', vi='Tôi đi cùng bạn bè.',
      k=[('mit_freunden', ['cùng bạn bè', 'bạn bè'])]),
 dict(de='Kann ich hier bezahlen?', vi='Tôi trả ở đây được không?',
      k=[('hier_bezahlen', ['trả ở đây', 'trả'])]),
 dict(de='Wo ist die Toilette?', vi='Nhà vệ sinh ở đâu?',
      k=[('toilette', ['nhà vệ sinh', 'toilet'])]),
 dict(de='Meine Freunde kommen später.', vi='Bạn tôi đến sau.',
      k=[('freunde_spaeter', ['đến sau', 'bạn tôi'])]),
 dict(de='Ich bin nicht von hier.', vi='Tôi không phải người ở đây.',
      k=[('nicht_von_hier', ['không phải người ở đây', 'không phải'])]),

# -------------------------------------------------------- club_komplimente
 dict(de='Du siehst heute toll aus.', vi='Hôm nay em trông tuyệt lắm.',
      k=[('toll_aussehen', ['trông tuyệt', 'tuyệt lắm', 'đẹp'])]),
 dict(de='Dein Outfit gefällt mir.', vi='Tôi thích bộ đồ của bạn.',
      k=[('outfit', ['bộ đồ', 'đồ'])]),
 dict(de='Deine Haare sind schön.', vi='Tóc em đẹp lắm.',
      k=[('haare', ['tóc đẹp', 'tóc'])]),
 dict(de='Sind deine Haare neu?', vi='Em mới làm tóc à?',
      k=[('haare_neu', ['mới làm tóc', 'làm tóc', 'tóc'])]),
 dict(de='Du bist sehr süß.', vi='Em dễ thương lắm.',
      k=[('suess', ['dễ thương', 'dễ thương lắm'])],
      h='„Dễ thương" ist das meistgebrauchte Kompliment unter jungen '
        'Vietnamesen — wörtlich „leicht zu mögen".'),
 dict(de='Du bist groß.', vi='Anh cao ghê.',
      k=[('gross', ['cao', 'cao ghê'])],
      h='Größe gilt in Vietnam als deutlicher Vorteil, besonders bei Männern '
        '— Europäer bekommen diesen Kommentar oft.'),
 dict(de='Du bist schlank.', vi='Em dáng đẹp quá.',
      k=[('schlank', ['dáng đẹp', 'thon thả', 'dáng'])],
      h='„Dáng đẹp" lobt die Figur und ist wie in China ein normales '
        'Kompliment — direkter als es in Europa ankäme.'),
 dict(de='Deine Augen sind schön.', vi='Mắt em đẹp lắm.',
      k=[('augen', ['mắt đẹp', 'mắt'])]),
 dict(de='Du hast Klasse.', vi='Em rất có gu.',
      k=[('klasse', ['có gu', 'rất có gu', 'phong cách'])],
      h='„Có gu" (vom französischen „goût") heißt Geschmack haben — das '
        'sicherste Kompliment, weil es nicht den Körper meint.'),
 dict(de='Deine Freundin hat Klasse.', vi='Bạn của em rất có gu.',
      k=[('freundin_klasse', ['bạn của em', 'có gu'])]),
 dict(de='Ich mag deine Stimme.', vi='Tôi thích giọng của bạn.',
      k=[('stimme', ['giọng của bạn', 'giọng'])]),
 dict(de='Deine Stimme ist sehr schön.', vi='Giọng em hay lắm.',
      k=[('stimme_schoen', ['giọng hay', 'giọng'])]),
 dict(de='Du tanzt wirklich gut.', vi='Em nhảy đẹp thật.',
      k=[('tanzt_gut', ['nhảy đẹp', 'nhảy giỏi', 'nhảy'])]),
 dict(de='Ach wo! (bescheidene Antwort auf ein Lob)', vi='Đâu có!',
      k=[('bescheiden', ['đâu có', 'làm gì có'])],
      h='Wie im Chinesischen wehrt man Komplimente ab, statt sie anzunehmen — '
        '„đâu có" heißt wörtlich „wo denn". Ein glattes „cảm ơn" wirkt fast '
        'selbstgefällig.'),
 dict(de='Nein, nein. (auf ein Lob)', vi='Không có đâu.',
      k=[('abwehr', ['không có đâu', 'không đâu'])]),
 dict(de='Danke, du aber auch.', vi='Cảm ơn, bạn cũng vậy.',
      k=[('danke_auch', ['bạn cũng vậy', 'cũng vậy'])]),
 dict(de='Du hast eine sehr helle Haut.', vi='Da em trắng quá.',
      k=[('helle_haut', ['da trắng', 'trắng'])],
      h='Helle Haut ist in Vietnam wie in China ein echtes Schönheitsideal — '
        'Sonnenschutz, Gesichtsmasken und lange Ärmel bei 35 Grad gehören '
        'zum Alltag, und das Kompliment ist verbreitet. In Europa geht '
        'derselbe Satz daneben und wurde dort ausgelassen.'),
 dict(de='Du hast ein süßes Lächeln.', vi='Nụ cười em dễ thương lắm.',
      k=[('laecheln', ['nụ cười', 'cười'])]),
 dict(de='Deine Frisur ist sehr schön.', vi='Kiểu tóc này hợp với em lắm.',
      k=[('frisur', ['kiểu tóc', 'hợp với em', 'tóc'])]),

# ---------------------------------------------------------------- club_ktv
 dict(de='Wollen wir Karaoke singen?', vi='Mình đi hát karaoke nhé?',
      k=[('karaoke', ['karaoke', 'hát karaoke'])],
      h='Karaoke ist in Vietnam riesig — mit Privatzimmern, wie im '
        'chinesischen KTV. Diese Sätze passen hier eins zu eins, anders als '
        'in Europa.'),
 dict(de='Ich kann nicht singen.', vi='Tôi hát dở lắm.',
      k=[('nicht_singen', ['hát dở', 'không biết hát', 'hát'])]),
 dict(de='Sing du zuerst.', vi='Bạn hát trước đi.',
      k=[('du_zuerst', ['hát trước', 'trước'])]),
 dict(de='Welches Lied singst du?', vi='Bạn hát bài gì?',
      k=[('welches_lied', ['hát bài gì', 'bài gì'])]),
 dict(de='Dieses Lied kenne ich!', vi='Bài này tôi biết!',
      k=[('kenne_lied', ['bài này tôi biết', 'tôi biết', 'bài này'])]),
 dict(de='Ein Zimmer für vier Personen.', vi='Cho phòng bốn người.',
      k=[('zimmer_vier', ['phòng bốn người', 'bốn người', 'phòng'])]),
 dict(de='Wie viel kostet das Zimmer?', vi='Phòng bao nhiêu tiền?',
      k=[('zimmer_preis', ['phòng bao nhiêu', 'bao nhiêu'])]),
 dict(de='Wir bleiben zwei Stunden.', vi='Chúng tôi hát hai tiếng.',
      k=[('zwei_stunden', ['hai tiếng', 'hai giờ'])]),
 dict(de='Du singst sehr gut!', vi='Em hát hay quá!',
      k=[('singst_gut', ['hát hay', 'hay quá'])]),
 dict(de='Wir singen zusammen.', vi='Mình hát chung nhé.',
      k=[('zusammen_singen', ['hát chung', 'chung'])]),
 dict(de='Sing noch eins!', vi='Hát thêm bài nữa đi!',
      k=[('noch_eins', ['thêm bài nữa', 'thêm bài'])]),

# ------------------------------------------------------- club_nachtlogistik
 dict(de='Können wir zu dir?', vi='Mình về chỗ em được không?',
      k=[('zu_dir', ['về chỗ em', 'chỗ em'])]),
 dict(de='In meinem Hotel geht das nicht.', vi='Khách sạn của anh không cho.',
      k=[('hotel_nicht', ['không cho', 'khách sạn'])],
      h='Hotels müssen alle Übernachtungsgäste bei der Polizei melden — '
        'jemanden unangemeldet mitzunehmen ist deshalb oft nicht möglich.'),
 dict(de='Nehmen wir ein Zimmer.', vi='Mình thuê phòng nhé.',
      k=[('zimmer_nehmen', ['thuê phòng', 'phòng'])]),
 dict(de='Das Zimmer bezahle ich.', vi='Tiền phòng anh trả.',
      k=[('zimmer_zahlen', ['tiền phòng', 'anh trả'])]),
 dict(de='Das Hotel will meinen Pass sehen.', vi='Khách sạn muốn xem hộ chiếu.',
      k=[('pass_hotel', ['xem hộ chiếu', 'hộ chiếu'])]),
 dict(de='Ich rufe ein Taxi.', vi='Anh gọi xe nhé.',
      k=[('taxi', ['gọi xe', 'taxi', 'grab'])],
      h='„Grab" wird als Verb benutzt — „grab về" heißt mit Grab nach Hause '
        'fahren. Das Motorradtaxi („xe ôm") ist nachts die billigste Option.'),
 dict(de='Zuerst zu dir, dann zu mir.', vi='Về chỗ em trước, rồi chỗ anh.',
      k=[('zuerst_dann', ['chỗ em trước', 'rồi chỗ anh'])]),
 dict(de='Wo wohnst du?', vi='Em ở đâu?',
      k=[('wo_wohnst', ['ở đâu'])]),
 dict(de='Ist das weit?', vi='Có xa không?',
      k=[('weit', ['xa'])]),
 dict(de='Mein Hotel ist nicht weit.', vi='Khách sạn anh gần đây thôi.',
      k=[('hotel_nah', ['gần đây', 'không xa', 'khách sạn'])]),
 dict(de='Ich fahre nach Hause.', vi='Anh về nhà đây.',
      k=[('nach_hause', ['về nhà', 'về'])]),

# ------------------------------------------------------- club_naeherkommen
 dict(de='Ich finde dich sehr nett.', vi='Anh thấy em rất dễ mến.',
      k=[('nett_finden', ['dễ mến', 'dễ thương'])]),
 dict(de='Ich mag dich.', vi='Anh thích em.',
      k=[('mag_dich', ['anh thích em', 'thích em'])]),
 dict(de='Ist das okay für dich?', vi='Em thấy được không?',
      k=[('okay', ['thấy được không', 'được không', 'ổn không'])]),
 dict(de='Gehen wir woanders hin?', vi='Mình đi chỗ khác nhé?',
      k=[('woanders', ['chỗ khác', 'đi chỗ khác'])]),
 dict(de='Ich kenne einen guten Ort.', vi='Anh biết một chỗ hay lắm.',
      k=[('guter_ort', ['chỗ hay', 'một chỗ'])]),
 dict(de='Zu dir oder zu mir?', vi='Về chỗ em hay chỗ anh?',
      k=[('zu_dir_zu_mir', ['chỗ em hay chỗ anh', 'chỗ em', 'chỗ anh'])]),
 dict(de='Bier oder Wasser?', vi='Bia hay nước?',
      k=[('bier_wasser', ['bia', 'nước'])]),
 dict(de='Ich reise morgen weiter.', vi='Mai anh đi tiếp rồi.',
      k=[('weiterreisen', ['đi tiếp', 'mai đi'])]),
 dict(de='Gehen wir kurz nach draußen.', vi='Mình ra ngoài một chút nhé.',
      k=[('nach_draussen', ['ra ngoài', 'ngoài'])]),
 dict(de='Du gefällst mir sehr.', vi='Anh thích em lắm.',
      k=[('gefaellst_mir', ['thích em lắm', 'thích em'])]),
 dict(de='Du bist sehr cool.', vi='Em ngầu ghê.',
      k=[('cool', ['ngầu', 'ngầu ghê', 'chất'])]),
 dict(de='Ich suche gerade nichts Festes — ich reise bald weiter.',
      vi='Anh không tìm gì nghiêm túc đâu, sắp đi tiếp rồi.',
      k=[('nichts_festes', ['không tìm gì nghiêm túc', 'nghiêm túc']),
         ('weiterreisen', ['sắp đi tiếp', 'đi tiếp'])]),
 dict(de='Darf ich mich hierhin setzen?', vi='Anh ngồi đây được không?',
      k=[('setzen', ['ngồi đây', 'ngồi'])]),
 dict(de='Deine Hände sind ganz kalt.', vi='Tay em lạnh quá.',
      k=[('haende_kalt', ['tay lạnh', 'tay'])]),
 dict(de='Ich bringe dich nach Hause.', vi='Anh đưa em về nhé.',
      k=[('nach_hause_bringen', ['đưa em về', 'đưa về'])],
      h='„Đưa về" (nach Hause bringen) ist eine normale Höflichkeit, '
        'besonders nachts. Entscheidend bleibt die FRAGE (nächster Satz).'),
 dict(de='Soll ich dich nach Hause bringen?', vi='Anh đưa em về được không?',
      k=[('nach_hause_frage', ['đưa em về được không', 'đưa em về'])]),
 dict(de='Wir lassen es langsam angehen.', vi='Mình từ từ thôi.',
      k=[('langsam', ['từ từ thôi', 'từ từ'])]),
 dict(de='Ich finde dich sehr attraktiv.', vi='Anh thấy em rất cuốn hút.',
      k=[('attraktiv', ['cuốn hút', 'hấp dẫn'])]),
 dict(de='Mit dir zu reden macht Spaß.', vi='Nói chuyện với em vui lắm.',
      k=[('reden_spass', ['nói chuyện với em vui', 'nói chuyện vui'])]),

# -------------------------------------------------------- club_sicherheit
 dict(de='Ich gehe jetzt.', vi='Tôi đi đây.',
      k=[('gehe_jetzt', ['tôi đi đây', 'đi đây'])]),
 dict(de='Mir geht es nicht gut.', vi='Tôi thấy không khỏe.',
      k=[('nicht_gut', ['không khỏe', 'mệt'])]),
 dict(de='Ich möchte nach Hause.', vi='Tôi muốn về nhà.',
      k=[('nach_hause', ['muốn về nhà', 'về nhà'])]),
 dict(de='Kannst du mir helfen?', vi='Bạn giúp tôi được không?',
      k=[('helfen', ['giúp tôi', 'giúp'])]),
 dict(de='Mein Freund wartet draußen auf mich.', vi='Bạn trai tôi đang đợi ở ngoài.',
      k=[('freund_wartet', ['bạn trai', 'đợi ở ngoài', 'đang đợi'])]),
 dict(de='Meine Freundin wartet draußen auf mich.', vi='Bạn gái tôi đang đợi ở ngoài.',
      k=[('freundin_wartet', ['bạn gái', 'đợi ở ngoài', 'đang đợi'])]),
 dict(de='Lass mich in Ruhe.', vi='Để tôi yên.',
      k=[('in_ruhe', ['để tôi yên', 'yên'])]),
 dict(de='Ich habe kein Interesse. Geh bitte weg.', vi='Tôi không quan tâm. Đi đi.',
      k=[('kein_interesse', ['không quan tâm', 'không thích']),
         ('weggehen', ['đi đi', 'tránh ra'])]),
 dict(de='Die Person dort lässt mich nicht in Ruhe.', vi='Người kia cứ làm phiền tôi.',
      k=[('person_stoert', ['làm phiền', 'người kia', 'quấy rối'])],
      h='„Làm phiền" heißt belästigen und wird vom Personal sofort '
        'verstanden. In größeren Clubs gibt es „bảo vệ" (Security).'),
 dict(de='Bitte tu so, als würden wir uns kennen.', vi='Làm ơn giả vờ như mình quen nhau.',
      k=[('so_tun', ['giả vờ']),
         ('kennen', ['quen nhau', 'quen'])]),
 dict(de='Bitte pass kurz auf mein Glas auf.', vi='Trông giúp tôi ly nước nhé.',
      k=[('glas_aufpassen', ['trông giúp ly', 'ly nước', 'ly'])]),
 dict(de='Bitte rufen Sie die Polizei.', vi='Làm ơn gọi công an.',
      k=[('polizei', ['công an', 'cảnh sát'])]),
 dict(de='Entschuldigung, ich wusste nicht, dass ihr zusammen seid.',
      vi='Xin lỗi, tôi không biết hai người đang yêu nhau.',
      k=[('nicht_gewusst', ['không biết', 'xin lỗi']),
         ('zusammen', ['đang yêu nhau', 'yêu nhau'])]),

# ------------------------------------------------------- club_trinkkultur
 dict(de='Prost!', vi='Dô!',
      k=[('prost', ['dô', 'một hai ba dô', 'zô'])],
      h='„Một, hai, ba, dô!" — eins, zwei, drei, los. Wird laut im Chor '
        'gerufen und oft wiederholt; „dô" allein reicht auch.'),
 dict(de='Immer mit der Ruhe - trink so viel du magst.', vi='Từ từ thôi, uống bao nhiêu tùy bạn.',
      k=[('ruhe', ['từ từ', 'từ từ thôi']),
         ('so_viel', ['bao nhiêu tùy bạn', 'tùy bạn'])]),
 dict(de='Ich trinke langsam.', vi='Tôi uống từ từ.',
      k=[('langsam_trinken', ['uống từ từ', 'từ từ'])]),
 dict(de='Ich kann nicht mehr trinken.', vi='Tôi không uống nổi nữa.',
      k=[('nicht_mehr', ['không uống nổi', 'không uống được nữa'])],
      h='Zum Weitertrinken wird in Vietnam deutlich gedrängt („một trăm '
        'phần trăm" heißt: das Glas leeren). Ein klarer Satz hilft.'),
 dict(de='Ich muss morgen arbeiten.', vi='Mai tôi phải đi làm.',
      k=[('morgen_arbeiten', ['mai phải đi làm', 'đi làm'])]),
 dict(de='Ich trinke nur ein bisschen.', vi='Tôi chỉ uống một chút thôi.',
      k=[('nur_bisschen', ['chỉ uống một chút', 'một chút'])]),
 dict(de='Was trinkst du?', vi='Bạn uống gì?',
      k=[('was_trinkst', ['uống gì'])]),
 dict(de='Ich möchte noch ein Bier.', vi='Cho thêm một chai bia.',
      k=[('noch_bier', ['thêm một chai bia', 'thêm bia', 'bia'])]),
 dict(de='Trinken wir zusammen!', vi='Mình uống cùng nhau!',
      k=[('zusammen_trinken', ['uống cùng nhau', 'cùng nhau'])]),
 dict(de='Ich trinke keinen Alkohol.', vi='Tôi không uống rượu bia.',
      k=[('kein_alkohol', ['không uống rượu bia', 'không uống rượu'])]),
 dict(de='Was kostet das?', vi='Cái này bao nhiêu?',
      k=[('kosten', ['bao nhiêu'])]),
 dict(de='Ich lade dich ein.', vi='Để tôi mời.',
      k=[('einladen', ['để tôi mời', 'tôi mời'])]),

# ---------------------------------------------------------- club_verloren
 dict(de='Ich finde meine Freunde nicht.', vi='Tôi không tìm thấy bạn tôi.',
      k=[('freunde_weg', ['không tìm thấy bạn', 'không tìm thấy', 'bạn tôi'])]),
 dict(de='Hast du meinen Freund gesehen?', vi='Bạn có thấy bạn tôi không?',
      k=[('gesehen', ['có thấy', 'thấy bạn tôi'])]),
 dict(de='Wo bist du?', vi='Bạn ở đâu?',
      k=[('wo_bist', ['ở đâu'])]),
 dict(de='Ich warte hier auf dich.', vi='Tôi đợi bạn ở đây.',
      k=[('warte_hier', ['đợi bạn ở đây', 'đợi ở đây'])]),
 dict(de='Mein Handy hat keinen Strom mehr.', vi='Điện thoại tôi hết pin.',
      k=[('handy_leer', ['hết pin', 'điện thoại hết pin'])]),
 dict(de='Wo kann ich mein Handy laden?', vi='Tôi sạc điện thoại ở đâu được?',
      k=[('handy_laden', ['sạc điện thoại', 'sạc'])]),
 dict(de='Ich muss mein Handy laden.', vi='Tôi cần sạc điện thoại.',
      k=[('handy_laden', ['cần sạc', 'sạc điện thoại'])]),
 dict(de='Kann ich dein Handy benutzen?', vi='Tôi mượn điện thoại được không?',
      k=[('handy_benutzen', ['mượn điện thoại', 'mượn'])]),
 dict(de='Ich rufe dich an.', vi='Tôi sẽ gọi cho bạn.',
      k=[('anrufen', ['gọi cho bạn', 'sẽ gọi'])]),
 dict(de='Wir treffen uns draußen.', vi='Mình gặp nhau ở ngoài.',
      k=[('treffen_draussen', ['gặp nhau ở ngoài', 'ở ngoài'])]),
 dict(de='Bis morgen!', vi='Hẹn mai gặp lại!',
      k=[('bis_morgen', ['hẹn mai gặp lại', 'mai gặp'])]),
 dict(de='Ich nehme ein Taxi nach Hause.', vi='Tôi đi taxi về nhà.',
      k=[('taxi_heim', ['taxi về nhà', 'taxi', 'grab về'])]),
 dict(de='Entschuldigung, ich habe meine Freunde verloren und mein Handy ist leer. Können Sie mir helfen?',
      vi='Xin lỗi, tôi lạc mất bạn và điện thoại hết pin. Bạn giúp tôi được không?',
      k=[('freunde_verloren', ['lạc mất bạn', 'lạc bạn']),
         ('handy_leer', ['hết pin']),
         ('helfen', ['giúp tôi được không', 'giúp tôi'])]),
]

AUSGELASSEN = [
    # Zielland bzw. Zielsprache steht im Satz - ersetzt (neu=True oben).
    # Das sind die EINZIGEN zwei Ausfaelle dieser Kategorie auf
    # Vietnamesisch; in allen europaeischen Sprachen waren es sechs.
    'Bist du aus China?',
    'Mein Chinesisch ist nicht so gut.',
]
