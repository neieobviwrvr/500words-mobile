# -*- coding: utf-8 -*-
"""Gesundheit/Notfall und Job auf Vietnamesisch.

Zusammen 118 Master-Saetze - health_emergency (76), job_work (42).

**HIER FALLEN NUR ZWEI SAETZE RAUS, nicht vier** - und das ist der
interessante Unterschied zu allen anderen Sprachen dieser Uebersetzung:

  Ich moechte westliche       **BLEIBEN DRIN.** Vietnam hat eine lebendige
  Medizin.                    eigene Medizintradition: `Dong y` (die
  Ist das westliche Medizin?  sino-vietnamesische Schule) und `thuoc nam`
                              (die heimische Kraeutermedizin) stehen
                              neben `Tay y`, der westlichen Medizin. In
                              Apotheken bekommt man beides, und die Frage
                              danach ist keine exotische Uebung, sondern
                              Alltag. In Italien, Norwegen, Russland,
                              Grossbritannien und Polen mussten dieselben
                              zwei Saetze ersatzlos weichen, weil es dort
                              nichts gibt, wogegen man "westlich"
                              abgrenzen koennte.

  Rufen Sie bitte 120 an.     **120 ist der chinesische Rettungsdienst.**
                              In Vietnam ist es die **115**. Ersetzt
                              (`neu=True`). Ehrlicherweise: der
                              Rettungsdienst ist ausserhalb der grossen
                              Staedte langsam, und im Ernstfall bringen
                              Einheimische Verletzte selbst per Taxi ins
                              Krankenhaus. Steht als Hinweis am Satz.
  Ich spreche kein            Zielsprache im Satz - ersetzt.
  Chinesisch. ...

**118 uebersetzt, 2 ausgelassen, 2 neu.**

**Bezahlt wird im Voraus und bar** - das staatliche System verlangt
Vorkasse, private Kliniken (`phong kham quoc te`) rechnen mit
Auslandsversicherungen ab. Die Bezahl-Saetze aus dem Master sind hier
also besonders praktisch, nicht theoretisch.

**Nicht von Muttersprachlern geprueft.**
"""

KATEGORIEN = ['health_emergency', 'job_work']

SAETZE = [

# ========================================================== health_emergency
 dict(kat='health_emergency', de='Ich bin allergisch gegen Penizillin.', vi='Tôi bị dị ứng với penicillin.',
      k=[('allergisch', ['bị dị ứng', 'dị ứng']),
         ('penizillin', ['penicillin'])]),
 dict(kat='health_emergency', de='Ich habe eine Allergie.', vi='Tôi bị dị ứng.',
      k=[('allergie', ['dị ứng'])]),
 dict(kat='health_emergency', de='Ich bin allergisch gegen dieses Medikament.', vi='Tôi bị dị ứng với thuốc này.',
      k=[('allergisch', ['bị dị ứng', 'dị ứng']),
         ('medikament', ['thuốc'])]),
 dict(kat='health_emergency', de='Ich bin allergisch gegen Erdnüsse.', vi='Tôi bị dị ứng với đậu phộng.',
      k=[('allergisch', ['bị dị ứng', 'dị ứng']),
         ('erdnuesse', ['đậu phộng', 'lạc'])],
      h='„Đậu phộng" im Süden, „lạc" im Norden — beides sind Erdnüsse, und '
        'sie stecken in sehr vielen Gerichten.'),
 dict(kat='health_emergency', de='Ich kann keine Erdnüsse essen.', vi='Tôi không ăn được đậu phộng.',
      k=[('nicht_essen', ['không ăn được', 'không ăn']),
         ('erdnuesse', ['đậu phộng', 'lạc'])]),
 dict(kat='health_emergency', de='Sind da Erdnüsse drin?', vi='Trong này có đậu phộng không?',
      k=[('erdnuesse', ['đậu phộng', 'lạc'])]),
 dict(kat='health_emergency', de='Bitte ohne Erdnüsse.', vi='Không cho đậu phộng nhé.',
      k=[('ohne', ['không cho', 'không']),
         ('erdnuesse', ['đậu phộng', 'lạc'])]),
 dict(kat='health_emergency', de='Bitte ohne Milch.', vi='Không cho sữa nhé.',
      k=[('ohne', ['không cho', 'không']),
         ('milch', ['sữa'])]),
 dict(kat='health_emergency', de='Ich vertrage keine Milch.', vi='Tôi không uống được sữa.',
      k=[('milch_vertragen', ['không uống được sữa', 'không uống được', 'sữa'])]),
 dict(kat='health_emergency', de='Was ist da drin?', vi='Trong này có gì?',
      k=[('was_drin', ['trong này có gì', 'có gì'])]),
 dict(kat='health_emergency', de='Ich habe mein Allergiemedikament dabei.', vi='Tôi có mang thuốc dị ứng.',
      k=[('allergiemedikament', ['thuốc dị ứng', 'thuốc'])]),
 dict(kat='health_emergency', de='Das ist für mich sehr gefährlich.', vi='Cái đó rất nguy hiểm với tôi.',
      k=[('gefaehrlich', ['rất nguy hiểm', 'nguy hiểm'])]),
 dict(kat='health_emergency', de='Ist das gefährlich?', vi='Cái đó có nguy hiểm không?',
      k=[('gefaehrlich', ['nguy hiểm'])]),
 dict(kat='health_emergency', de='Ich habe meine Versicherungskarte vergessen.', vi='Tôi quên thẻ bảo hiểm.',
      k=[('versicherungskarte', ['thẻ bảo hiểm', 'bảo hiểm'])]),
 dict(kat='health_emergency', de='Wie viel kostet das?', vi='Cái này bao nhiêu tiền?',
      k=[('kosten', ['bao nhiêu tiền', 'bao nhiêu'])]),
 dict(kat='health_emergency', de='Ich habe eine Versicherung.', vi='Tôi có bảo hiểm.',
      k=[('versicherung', ['bảo hiểm'])]),
 dict(kat='health_emergency', de='Nehmen Sie meine Versicherung?', vi='Ở đây có nhận bảo hiểm của tôi không?',
      k=[('versicherung_akzeptiert', ['nhận bảo hiểm', 'bảo hiểm'])],
      h='Staatliche Krankenhäuser rechnen mit ausländischen Versicherungen '
        'meist nicht ab — private Kliniken („phòng khám quốc tế") schon.'),
 dict(kat='health_emergency', de='Muss ich vorher bezahlen?', vi='Tôi phải trả tiền trước không?',
      k=[('vorher_bezahlen', ['trả tiền trước', 'trước'])],
      h='Im staatlichen System ist Vorkasse die Regel — meist bar, bevor '
        'überhaupt untersucht wird.'),
 dict(kat='health_emergency', de='Bitte geben Sie mir eine Quittung.', vi='Cho tôi hóa đơn nhé.',
      k=[('quittung', ['hóa đơn', 'biên lai'])]),
 dict(kat='health_emergency', de='Ich brauche die Quittung für meine Versicherung.', vi='Tôi cần hóa đơn cho bảo hiểm.',
      k=[('quittung', ['hóa đơn', 'biên lai']),
         ('versicherung', ['bảo hiểm'])]),
 dict(kat='health_emergency', de='Kann ich mit dem Handy bezahlen?', vi='Tôi trả bằng điện thoại được không?',
      k=[('handy_bezahlen', ['bằng điện thoại', 'điện thoại', 'momo'])]),
 dict(kat='health_emergency', de='Nehmen Sie auch Karte?', vi='Có nhận thẻ không?',
      k=[('karte', ['thẻ'])]),
 dict(kat='health_emergency', de='Hier ist meine Karte.', vi='Đây là thẻ của tôi.',
      k=[('meine_karte', ['thẻ của tôi', 'thẻ'])]),
 dict(kat='health_emergency', de='Zuerst anmelden, dann bezahlen?', vi='Đăng ký trước rồi trả tiền à?',
      k=[('anmelden', ['đăng ký']),
         ('bezahlen', ['trả tiền'])]),
 dict(kat='health_emergency', de='Wo bekomme ich die Quittung?', vi='Tôi lấy hóa đơn ở đâu?',
      k=[('quittung', ['hóa đơn', 'biên lai'])]),
 dict(kat='health_emergency', de='Wo kann ich bezahlen?', vi='Tôi trả tiền ở đâu?',
      k=[('wo_bezahlen', ['trả tiền ở đâu', 'trả tiền'])]),
 dict(kat='health_emergency', de='Das ist zu teuer.', vi='Đắt quá.',
      k=[('zu_teuer', ['đắt quá', 'đắt', 'mắc quá'])]),
 dict(kat='health_emergency', de='Ich habe nicht genug Geld dabei.', vi='Tôi không mang đủ tiền.',
      k=[('nicht_genug_geld', ['không mang đủ tiền', 'không đủ tiền', 'tiền'])]),
 dict(kat='health_emergency', de='Reicht das?', vi='Vậy đủ chưa?',
      k=[('reicht', ['đủ chưa', 'đủ'])]),
 dict(kat='health_emergency', de='Ich habe meine Tabletten vergessen.', vi='Tôi quên thuốc rồi.',
      k=[('tabletten_vergessen', ['quên thuốc', 'thuốc'])]),
 dict(kat='health_emergency', de='Wie oft muss ich das Medikament nehmen?', vi='Tôi phải uống thuốc mấy lần một ngày?',
      k=[('medikament_haeufigkeit', ['mấy lần', 'uống thuốc', 'thuốc'])],
      h='Medikamente werden „getrunken" („uống thuốc"), nicht genommen — auch '
        'Tabletten.'),
 dict(kat='health_emergency', de='Wo ist das Krankenhaus?', vi='Bệnh viện ở đâu?',
      k=[('krankenhaus', ['bệnh viện'])]),
 dict(kat='health_emergency', de='Ich möchte zum Arzt.', vi='Tôi muốn đi khám bác sĩ.',
      k=[('arzt', ['bác sĩ', 'đi khám'])]),
 dict(kat='health_emergency', de='Wo melde ich mich an?', vi='Tôi đăng ký ở đâu?',
      k=[('anmelden', ['đăng ký', 'quầy đăng ký'])]),
 dict(kat='health_emergency', de='Ich möchte mich anmelden.', vi='Tôi muốn đăng ký khám.',
      k=[('anmelden', ['đăng ký khám', 'đăng ký'])]),
 dict(kat='health_emergency', de='Ich habe keinen Termin.', vi='Tôi chưa đặt lịch hẹn.',
      k=[('kein_termin', ['chưa đặt lịch hẹn', 'lịch hẹn', 'chưa đặt'])]),
 dict(kat='health_emergency', de='Kann ich einen Termin bekommen?', vi='Tôi đặt lịch hẹn được không?',
      k=[('termin', ['lịch hẹn', 'đặt lịch'])]),
 dict(kat='health_emergency', de='Wie lange muss ich warten?', vi='Tôi phải đợi bao lâu?',
      k=[('warten', ['đợi bao lâu', 'đợi'])]),
 dict(kat='health_emergency', de='Wie lange dauert das?', vi='Cái này mất bao lâu?',
      k=[('dauer', ['mất bao lâu', 'bao lâu'])]),
 dict(kat='health_emergency', de='Bitte geben Sie mir ein Medikament.', vi='Cho tôi thuốc nhé.',
      k=[('medikament', ['thuốc'])]),
 dict(kat='health_emergency', de='Ich möchte westliche Medizin.', vi='Tôi muốn thuốc tây.',
      k=[('westliche_medizin', ['thuốc tây', 'tây y'])],
      h='„Thuốc tây" ist wörtlich westliche Medizin und steht dem „thuốc nam" '
        '(heimische Kräutermedizin) und „Đông y" (sino-vietnamesische '
        'Schule) gegenüber. Diese Unterscheidung ist in Vietnam Alltag — in '
        'Europa hat derselbe Satz keinen Gegenpol und wurde dort '
        'ausgelassen.'),
 dict(kat='health_emergency', de='Ist das westliche Medizin?', vi='Đây là thuốc tây phải không?',
      k=[('westliche_medizin', ['thuốc tây', 'tây y'])]),
 dict(kat='health_emergency', de='Wie nehme ich das Medikament?', vi='Thuốc này uống thế nào?',
      k=[('medikament_einnahme', ['uống thế nào', 'uống', 'thuốc'])]),
 dict(kat='health_emergency', de='Wie komme ich dorthin?', vi='Làm sao để đến đó?',
      k=[('wie_dorthin', ['làm sao để đến', 'đến đó'])]),
 dict(kat='health_emergency', de='Ich brauche einen Arzt.', vi='Tôi cần bác sĩ.',
      k=[('arzt', ['bác sĩ'])]),
 dict(kat='health_emergency', de='Wo ist die nächste Apotheke?', vi='Nhà thuốc gần nhất ở đâu?',
      k=[('apotheke', ['nhà thuốc', 'hiệu thuốc'])],
      h='Vietnamesische Apotheken geben vieles ohne Rezept ab, das bei uns '
        'verschreibungspflichtig wäre — auch Antibiotika. Das ist bequem und '
        'zugleich ein Grund, vorsichtig zu sein.'),
 dict(kat='health_emergency', de='Ich brauche dringend Hilfe.', vi='Tôi cần giúp gấp.',
      k=[('dringend_hilfe', ['cần giúp gấp', 'gấp', 'giúp'])]),
 dict(kat='health_emergency', de='Wo ist das nächste Krankenhaus?', vi='Bệnh viện gần nhất ở đâu?',
      k=[('krankenhaus', ['bệnh viện'])]),
 dict(kat='health_emergency', de='Bitte helfen Sie mir!', vi='Làm ơn giúp tôi!',
      k=[('helfen', ['giúp tôi', 'làm ơn giúp', 'giúp'])]),
 dict(kat='health_emergency', de='Bitte rufen Sie einen Krankenwagen!', vi='Làm ơn gọi xe cứu thương!',
      k=[('krankenwagen', ['xe cứu thương', 'cứu thương'])]),
 dict(kat='health_emergency', de='Ist der Krankenwagen schon unterwegs?', vi='Xe cứu thương đang đến chưa?',
      k=[('krankenwagen', ['xe cứu thương', 'cứu thương']),
         ('unterwegs', ['đang đến', 'đến chưa'])]),
 dict(kat='health_emergency', de='Jemand ist verletzt.', vi='Có người bị thương.',
      k=[('verletzt', ['bị thương', 'người bị thương'])]),
 dict(kat='health_emergency', de='Ich bin verletzt.', vi='Tôi bị thương.',
      k=[('verletzt', ['bị thương'])]),
 dict(kat='health_emergency', de='Schnell, bitte!', vi='Nhanh lên!',
      k=[('schnell', ['nhanh lên', 'nhanh'])]),
 dict(kat='health_emergency', de='Ich brauche etwas aus der Apotheke.', vi='Tôi cần mua thuốc ở nhà thuốc.',
      k=[('apotheke', ['nhà thuốc', 'hiệu thuốc'])]),
 dict(kat='health_emergency', de='Ich bin allein hier.', vi='Tôi ở đây một mình.',
      k=[('allein', ['một mình'])]),
 dict(kat='health_emergency', de='Bitte rufen Sie meinen Freund an.', vi='Làm ơn gọi cho bạn tôi.',
      k=[('anrufen', ['gọi cho', 'gọi']),
         ('freund', ['bạn tôi', 'bạn'])]),
 dict(kat='health_emergency', de='Bitte rufen Sie die Polizei!', vi='Làm ơn gọi công an!',
      k=[('polizei', ['công an', 'cảnh sát'])],
      h='„Công an" ist die vietnamesische Polizei; „cảnh sát" wird ebenfalls '
        'verstanden, ist aber der formellere Begriff.'),
 dict(kat='health_emergency', de='Ich möchte die Polizei rufen.', vi='Tôi muốn gọi công an.',
      k=[('polizei', ['công an', 'cảnh sát'])]),
 dict(kat='health_emergency', de='Mir geht es nicht gut.', vi='Tôi thấy không khỏe.',
      k=[('nicht_gut', ['không khỏe', 'thấy không khỏe', 'mệt'])]),
 dict(kat='health_emergency', de='Ich habe Kopfschmerzen.', vi='Tôi bị đau đầu.',
      k=[('kopfschmerzen', ['đau đầu'])],
      h='Schmerzen laufen über „đau" plus Körperteil: đau đầu (Kopf), đau '
        'bụng (Bauch), đau họng (Hals). Ein Muster für alle Fälle.'),
 dict(kat='health_emergency', de='Ich habe Fieber.', vi='Tôi bị sốt.',
      k=[('fieber', ['sốt', 'bị sốt'])]),
 dict(kat='health_emergency', de='Ich habe mir den Fuß verletzt.', vi='Tôi bị đau chân.',
      k=[('fuss_verletzt', ['đau chân', 'chân'])],
      h='„Chân" meint Bein UND Fuß — Vietnamesisch trennt die beiden nicht, '
        'genauso wenig wie Russisch.'),
 dict(kat='health_emergency', de='Ich fühle mich schwindelig.', vi='Tôi bị chóng mặt.',
      k=[('schwindelig', ['chóng mặt'])]),
 dict(kat='health_emergency', de='Ich bin krank.', vi='Tôi bị ốm.',
      k=[('krank', ['bị ốm', 'ốm', 'bệnh'])]),
 dict(kat='health_emergency', de='Ich bin erkältet.', vi='Tôi bị cảm.',
      k=[('erkaeltet', ['bị cảm', 'cảm'])]),
 dict(kat='health_emergency', de='Ich habe Bauchschmerzen.', vi='Tôi bị đau bụng.',
      k=[('bauchschmerzen', ['đau bụng', 'bụng'])]),
 dict(kat='health_emergency', de='Mein Bein tut weh.', vi='Chân tôi bị đau.',
      k=[('bein_weh', ['chân bị đau', 'chân', 'đau'])]),
 dict(kat='health_emergency', de='Hier tut es weh.', vi='Chỗ này đau.',
      k=[('hier_weh', ['chỗ này đau', 'đau'])]),
 dict(kat='health_emergency', de='Mir geht es sehr schlecht.', vi='Tôi thấy rất mệt.',
      k=[('sehr_schlecht', ['rất mệt', 'mệt lắm', 'mệt'])]),
 dict(kat='health_emergency', de='Ich bin sehr müde.', vi='Tôi rất mệt.',
      k=[('muede', ['rất mệt', 'mệt'])]),
 dict(kat='health_emergency', de='Mir ist kalt.', vi='Tôi thấy lạnh.',
      k=[('kalt', ['thấy lạnh', 'lạnh'])]),
 dict(kat='health_emergency', de='Seit gestern.', vi='Từ hôm qua.',
      k=[('seit_gestern', ['từ hôm qua', 'hôm qua'])]),
 dict(kat='health_emergency', de='Seit heute Morgen.', vi='Từ sáng nay.',
      k=[('seit_heute_morgen', ['từ sáng nay', 'sáng nay'])]),
 dict(kat='health_emergency', de='Rufen Sie bitte 115 an.', vi='Làm ơn gọi 115.',
      neu=True, sz='health_notfall',
      k=[('notruf', ['115', 'một một năm'])],
      h='115 ist der Rettungsdienst, 113 die Polizei, 114 die Feuerwehr. '
        'Ehrlich gesagt: außerhalb der großen Städte ist der Rettungsdienst '
        'langsam — im Ernstfall bringen Einheimische Verletzte selbst per '
        'Taxi ins Krankenhaus, und das ist oft die schnellere Wahl.'),
 dict(kat='health_emergency', de='Ich spreche kein Vietnamesisch. Können Sie es aufschreiben?',
      vi='Tôi không nói được tiếng Việt. Bạn viết ra được không?',
      neu=True, sz='health_krankenhaus',
      k=[('kein_vietnamesisch', ['không nói được tiếng việt', 'không nói được']),
         ('aufschreiben', ['viết ra', 'viết'])]),

# ================================================================== job_work
 dict(kat='job_work', de='Ich kann heute nicht kommen.', vi='Hôm nay tôi không đến được.',
      k=[('nicht_koennen', ['không đến được', 'không được']),
         ('heute', ['hôm nay']),
         ('kommen', ['đến'])]),
 dict(kat='job_work', de='Ich bin krank und bleibe zu Hause.', vi='Tôi bị ốm nên ở nhà.',
      k=[('krank', ['bị ốm', 'ốm']),
         ('zu_hause', ['ở nhà', 'nhà'])]),
 dict(kat='job_work', de='Ich komme später.', vi='Tôi sẽ đến muộn.',
      k=[('kommen', ['sẽ đến', 'đến']),
         ('spaeter', ['muộn', 'trễ'])]),
 dict(kat='job_work', de='Ich brauche einen Tag frei.', vi='Tôi cần nghỉ một ngày.',
      k=[('brauchen', ['tôi cần', 'cần']),
         ('tag_frei', ['nghỉ một ngày', 'nghỉ'])]),
 dict(kat='job_work', de='Ich habe einen Arzttermin.', vi='Tôi có hẹn với bác sĩ.',
      k=[('arzttermin', ['hẹn với bác sĩ', 'bác sĩ', 'hẹn'])]),
 dict(kat='job_work', de='Ich habe schon in einem Restaurant gearbeitet.', vi='Tôi đã từng làm ở nhà hàng.',
      k=[('gearbeitet', ['đã từng làm', 'làm']),
         ('restaurant', ['nhà hàng'])]),
 dict(kat='job_work', de='Ich habe keine Erfahrung.', vi='Tôi chưa có kinh nghiệm.',
      k=[('keine', ['chưa có', 'không có']),
         ('erfahrung', ['kinh nghiệm'])]),
 dict(kat='job_work', de='Ich lerne schnell.', vi='Tôi học nhanh.',
      k=[('lernen', ['học']),
         ('schnell', ['nhanh'])]),
 dict(kat='job_work', de='Ich kann am Wochenende arbeiten.', vi='Tôi có thể làm việc cuối tuần.',
      k=[('koennen', ['có thể']),
         ('wochenende', ['cuối tuần']),
         ('arbeiten', ['làm việc', 'làm'])]),
 dict(kat='job_work', de='Wann kann ich anfangen?', vi='Khi nào tôi bắt đầu được?',
      k=[('wann', ['khi nào']),
         ('anfangen', ['bắt đầu'])]),
 dict(kat='job_work', de='Brauche ich eine Arbeitserlaubnis?', vi='Tôi có cần giấy phép lao động không?',
      k=[('brauchen', ['có cần', 'cần']),
         ('arbeitserlaubnis', ['giấy phép lao động', 'giấy phép'])],
      h='Für Vietnam brauchen Deutsche ein Arbeitsvisum und eine '
        'Arbeitserlaubnis („giấy phép lao động") — anders als in der EU gibt '
        'es keine Freizügigkeit. Englischunterricht ist der häufigste '
        'legale Weg.'),
 dict(kat='job_work', de='Ich bin neu hier.', vi='Tôi mới đến đây.',
      k=[('neu', ['mới']),
         ('hier', ['đây', 'ở đây'])]),
 dict(kat='job_work', de='Kannst du mir kurz helfen?', vi='Bạn giúp tôi một chút được không?',
      k=[('koennen', ['được không']),
         ('helfen', ['giúp tôi', 'giúp'])]),
 dict(kat='job_work', de='Wie macht man das?', vi='Cái này làm thế nào?',
      k=[('wie', ['thế nào', 'làm sao']),
         ('machen', ['làm'])]),
 dict(kat='job_work', de='Das habe ich noch nie gemacht.', vi='Tôi chưa bao giờ làm việc này.',
      k=[('nie', ['chưa bao giờ']),
         ('gemacht', ['làm việc này', 'làm'])]),
 dict(kat='job_work', de='Wo finde ich das?', vi='Cái đó ở đâu?',
      k=[('wo', ['ở đâu', 'đâu']),
         ('finden', ['tìm', 'ở đâu'])]),
 dict(kat='job_work', de='Ich mache Pause.', vi='Tôi nghỉ một chút.',
      k=[('pause', ['nghỉ', 'nghỉ một chút'])]),
 dict(kat='job_work', de='Danke für deine Hilfe.', vi='Cảm ơn bạn đã giúp.',
      k=[('danke', ['cảm ơn']),
         ('hilfe', ['đã giúp', 'giúp'])]),
 dict(kat='job_work', de='Kann ich Ihnen helfen?', vi='Tôi giúp gì được cho anh?',
      k=[('koennen', ['được', 'giúp gì được']),
         ('helfen', ['giúp'])],
      h='Zum Kunden nimmt man das Anredewort nach Alter und Geschlecht: '
        '„anh" zu einem Mann, „chị" zu einer Frau, „em" zu jemand Jüngerem. '
        'Ein neutrales „Sie" gibt es nicht.'),
 dict(kat='job_work', de='Der Nächste, bitte!', vi='Mời người tiếp theo!',
      k=[('naechste', ['người tiếp theo', 'tiếp theo'])]),
 dict(kat='job_work', de='Möchten Sie noch etwas?', vi='Anh có muốn gì nữa không?',
      k=[('moechten', ['có muốn', 'muốn']),
         ('noch_etwas', ['gì nữa', 'nữa'])]),
 dict(kat='job_work', de='Zahlen Sie bar oder mit Karte?', vi='Anh trả tiền mặt hay thẻ?',
      k=[('bar', ['tiền mặt']),
         ('karte', ['thẻ'])]),
 dict(kat='job_work', de='Tut mir leid, das haben wir nicht.', vi='Xin lỗi, chỗ tôi không có.',
      k=[('leid', ['xin lỗi']),
         ('nicht_haben', ['không có'])]),
 dict(kat='job_work', de='Ich hole meinen Kollegen.', vi='Để tôi gọi đồng nghiệp.',
      k=[('holen', ['gọi', 'để tôi gọi']),
         ('kollege', ['đồng nghiệp'])]),
 dict(kat='job_work', de='Kommen Sie gerne wieder!', vi='Hẹn gặp lại anh!',
      k=[('wiederkommen', ['hẹn gặp lại', 'gặp lại'])]),
 dict(kat='job_work', de='Wie viel verdiene ich pro Stunde?', vi='Một giờ tôi được bao nhiêu?',
      k=[('verdienen', ['được bao nhiêu', 'lương']),
         ('stunde', ['một giờ', 'giờ'])]),
 dict(kat='job_work', de='Wann bekomme ich mein Geld?', vi='Khi nào tôi được trả lương?',
      k=[('wann', ['khi nào']),
         ('geld', ['trả lương', 'lương', 'tiền'])]),
 dict(kat='job_work', de='Werde ich bar bezahlt?', vi='Tôi được trả bằng tiền mặt à?',
      k=[('bar', ['tiền mặt']),
         ('bezahlt', ['được trả', 'trả'])],
      h='Barzahlung ist bei Gelegenheitsjobs die Regel — Kontoüberweisungen '
        'sind eher die Ausnahme.'),
 dict(kat='job_work', de='Ich habe zehn Stunden gearbeitet.', vi='Tôi đã làm mười tiếng.',
      k=[('zehn', ['mười']),
         ('stunden', ['tiếng', 'giờ']),
         ('gearbeitet', ['đã làm', 'làm'])],
      h='„Tiếng" ist die Stunde als Dauer, „giờ" die Uhrzeit — „mười tiếng" '
        'sind zehn Stunden lang, „mười giờ" ist zehn Uhr.'),
 dict(kat='job_work', de='Wann fange ich an?', vi='Khi nào tôi bắt đầu?',
      k=[('wann', ['khi nào']),
         ('anfangen', ['bắt đầu'])]),
 dict(kat='job_work', de='Wann habe ich frei?', vi='Khi nào tôi được nghỉ?',
      k=[('wann', ['khi nào']),
         ('frei', ['được nghỉ', 'nghỉ'])]),
 dict(kat='job_work', de='Wie lange dauert die Schicht?', vi='Ca làm dài bao lâu?',
      k=[('wie_lange', ['bao lâu', 'dài bao lâu']),
         ('schicht', ['ca làm', 'ca'])]),
 dict(kat='job_work', de='Kann ich am Montag frei haben?', vi='Thứ hai tôi nghỉ được không?',
      k=[('montag', ['thứ hai']),
         ('frei', ['nghỉ'])]),
 dict(kat='job_work', de='Kann ich die Schicht tauschen?', vi='Tôi đổi ca được không?',
      k=[('schicht', ['ca', 'ca làm']),
         ('tauschen', ['đổi'])]),
 dict(kat='job_work', de='Ich komme morgen früher.', vi='Ngày mai tôi sẽ đến sớm hơn.',
      k=[('morgen', ['ngày mai']),
         ('frueher', ['sớm hơn', 'sớm'])]),
 dict(kat='job_work', de='Wo ist der Dienstplan?', vi='Lịch làm việc ở đâu?',
      k=[('wo', ['ở đâu']),
         ('dienstplan', ['lịch làm việc', 'lịch làm', 'lịch'])]),
 dict(kat='job_work', de='Ich suche Arbeit.', vi='Tôi đang tìm việc.',
      k=[('suchen', ['đang tìm', 'tìm']),
         ('arbeit', ['việc', 'việc làm'])]),
 dict(kat='job_work', de='Suchen Sie noch Leute?', vi='Chỗ mình còn tuyển người không?',
      k=[('suchen', ['tuyển', 'còn tuyển']),
         ('leute', ['người', 'nhân viên'])]),
 dict(kat='job_work', de='Haben Sie eine Stelle frei?', vi='Có vị trí nào trống không?',
      k=[('stelle', ['vị trí', 'chỗ làm']),
         ('frei', ['trống', 'còn trống'])]),
 dict(kat='job_work', de='Brauchen Sie Hilfe in der Küche?', vi='Bếp có cần người phụ không?',
      k=[('brauchen', ['có cần', 'cần']),
         ('hilfe', ['người phụ', 'phụ giúp']),
         ('kueche', ['bếp'])]),
 dict(kat='job_work', de='Ich kann sofort anfangen.', vi='Tôi có thể bắt đầu ngay.',
      k=[('koennen', ['có thể']),
         ('sofort', ['ngay', 'ngay lập tức']),
         ('anfangen', ['bắt đầu'])]),
 dict(kat='job_work', de='Ich bin für drei Monate hier.', vi='Tôi ở đây ba tháng.',
      k=[('drei_monate', ['ba tháng']),
         ('hier', ['ở đây', 'đây'])]),
]

AUSGELASSEN = [
    # 120 ist der CHINESISCHE Rettungsdienst - in Vietnam die 115. Ersetzt.
    'Rufen Sie bitte 120 an.',
    # Zielsprache steht im Satz - ersetzt durch die vietnamesische Fassung.
    'Ich spreche kein Chinesisch. Können Sie es aufschreiben?',
    # Die beiden Medizin-Saetze bleiben hier DRIN, anders als in allen
    # anderen Sprachen dieser Uebersetzung - siehe Kopfkommentar.
]
