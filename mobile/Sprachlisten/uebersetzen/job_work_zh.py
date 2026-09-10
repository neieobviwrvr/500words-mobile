# -*- coding: utf-8 -*-
"""job_work auf Chinesisch: alle 42 Saetze.

**Kein Ausschluss.** Konzepte sind Hanzi-Teilstrings (exakt, wie bei den
uebrigen zh-Dateien - siehe CLAUDE.md "Chinesisch-Weiche" in
evaluateConcepts.ts).

**Zwei eigene Kulturhinweise, beide Gegenstuecke zu den ES/SV/FR-Notizen:**

  Arbeitserlaubnis  Umgekehrter Fall als in der EU: eine Arbeitserlaubnis
                    (Z-Visum) ist in China fuer JEDE auslaendische Person
                    Pflicht, unabhaengig von Herkunft - Arbeiten mit
                    Touristenvisum ist illegal, auch informelle Aushilfsjobs.
  Bar bezahlt       Aehnlich wie in Schweden, nicht wie in Spanien: China ist
                    in Staedten stark bargeldlos (WeChat Pay/Alipay), Lohn
                    bar zu bekommen ist eher unueblich geworden.

`verb_cluster` leer. **Nicht von Muttersprachlern geprueft.**
"""

SAETZE = [

# ---------------------------------------------------------------- Arbeit suchen
 dict(de='Ich suche Arbeit.', zh='我在找工作。', py='wǒ zài zhǎo gōngzuò.',
      k=[('suchen', ['找']), ('arbeit', ['工作'])]),
 dict(de='Suchen Sie noch Leute?', zh='你们还在招人吗？', py='nǐmen hái zài zhāo rén ma?',
      k=[('suchen', ['招']), ('leute', ['人'])]),
 dict(de='Haben Sie eine Stelle frei?', zh='你们有空缺的职位吗？',
      py='nǐmen yǒu kòngquē de zhíwèi ma?',
      k=[('stelle', ['职位']), ('frei', ['空缺'])]),
 dict(de='Brauchen Sie Hilfe in der Küche?', zh='厨房需要帮忙吗？',
      py='chúfáng xūyào bāngmáng ma?',
      k=[('hilfe', ['帮忙']), ('kueche', ['厨房'])]),
 dict(de='Ich kann sofort anfangen.', zh='我可以马上开始。', py='wǒ kěyǐ mǎshàng kāishǐ.',
      k=[('koennen', ['可以']), ('sofort', ['马上']), ('anfangen', ['开始'])]),
 dict(de='Ich bin für drei Monate hier.', zh='我在这里待三个月。',
      py='wǒ zài zhèlǐ dāi sān gè yuè.',
      k=[('drei_monate', ['三个月']), ('hier', ['这里'])]),

# ---------------------------------------------------------------- Vorstellungsgespräch
 dict(de='Ich habe schon in einem Restaurant gearbeitet.', zh='我在餐馆工作过。',
      py='wǒ zài cānguǎn gōngzuò guo.',
      k=[('gearbeitet', ['工作过']), ('restaurant', ['餐馆'])]),
 dict(de='Ich habe keine Erfahrung.', zh='我没有经验。', py='wǒ méiyǒu jīngyàn.',
      k=[('keine', ['没有']), ('erfahrung', ['经验'])]),
 dict(de='Ich lerne schnell.', zh='我学得很快。', py='wǒ xué de hěn kuài.',
      k=[('lernen', ['学']), ('schnell', ['快'])]),
 dict(de='Ich kann am Wochenende arbeiten.', zh='我周末可以工作。',
      py='wǒ zhōumò kěyǐ gōngzuò.',
      k=[('wochenende', ['周末']), ('arbeiten', ['工作'])]),
 dict(de='Wann kann ich anfangen?', zh='我什么时候可以开始？',
      py='wǒ shénme shíhou kěyǐ kāishǐ?',
      k=[('wann', ['什么时候']), ('anfangen', ['开始'])]),
 dict(de='Brauche ich eine Arbeitserlaubnis?', zh='我需要工作许可吗？',
      py='wǒ xūyào gōngzuò xǔkě ma?',
      k=[('brauchen', ['需要']), ('arbeitserlaubnis', ['工作许可'])],
      h='Umgekehrter Fall als in der EU: eine Arbeitserlaubnis (Z-Visum) ist '
        'in China für JEDE ausländische Person Pflicht, unabhängig von der '
        'Herkunft - Arbeiten mit Touristenvisum ist illegal, auch informelle '
        'Aushilfsjobs.'),

# ---------------------------------------------------------------- Dienstplan
 dict(de='Wann fange ich an?', zh='我什么时候开始？', py='wǒ shénme shíhou kāishǐ?',
      k=[('wann', ['什么时候']), ('anfangen', ['开始'])]),
 dict(de='Wann habe ich frei?', zh='我什么时候休息？', py='wǒ shénme shíhou xiūxi?',
      k=[('wann', ['什么时候']), ('frei', ['休息'])]),
 dict(de='Wie lange dauert die Schicht?', zh='这班多长时间？', py='zhè bān duō cháng shíjiān?',
      k=[('wie_lange', ['多长时间']), ('schicht', ['班'])]),
 dict(de='Kann ich am Montag frei haben?', zh='我星期一可以休息吗？',
      py='wǒ xīngqīyī kěyǐ xiūxi ma?',
      k=[('montag', ['星期一']), ('frei', ['休息'])]),
 dict(de='Kann ich die Schicht tauschen?', zh='我可以换班吗？', py='wǒ kěyǐ huàn bān ma?',
      k=[('schicht', ['班']), ('tauschen', ['换'])]),
 dict(de='Ich komme morgen früher.', zh='我明天早点来。', py='wǒ míngtiān zǎodiǎn lái.',
      k=[('morgen', ['明天']), ('frueher', ['早点'])]),
 dict(de='Wo ist der Dienstplan?', zh='排班表在哪里？', py='páibān biǎo zài nǎlǐ?',
      k=[('wo', ['哪里']), ('dienstplan', ['排班表'])]),

# ---------------------------------------------------------------- Kolleg:innen
 dict(de='Ich bin neu hier.', zh='我是新来的。', py='wǒ shì xīn lái de.',
      k=[('neu', ['新'])]),
 dict(de='Kannst du mir kurz helfen?', zh='你能帮我一下吗？', py='nǐ néng bāng wǒ yíxià ma?',
      k=[('koennen', ['能']), ('helfen', ['帮'])]),
 dict(de='Wie macht man das?', zh='这个怎么做？', py='zhège zěnme zuò?',
      k=[('wie', ['怎么']), ('machen', ['做'])]),
 dict(de='Das habe ich noch nie gemacht.', zh='我从来没做过这个。',
      py='wǒ cónglái méi zuò guo zhège.',
      k=[('nie', ['从来没']), ('gemacht', ['做过'])]),
 dict(de='Wo finde ich das?', zh='我在哪里能找到这个？', py='wǒ zài nǎlǐ néng zhǎodào zhège?',
      k=[('wo', ['哪里']), ('finden', ['找到'])]),
 dict(de='Ich mache Pause.', zh='我休息一下。', py='wǒ xiūxi yíxià.',
      k=[('pause', ['休息'])]),
 dict(de='Danke für deine Hilfe.', zh='谢谢你的帮助。', py='xièxie nǐ de bāngzhù.',
      k=[('danke', ['谢谢']), ('hilfe', ['帮助'])]),

# ---------------------------------------------------------------- Kundschaft
 dict(de='Kann ich Ihnen helfen?', zh='我能帮您吗？', py='wǒ néng bāng nín ma?',
      k=[('koennen', ['能']), ('helfen', ['帮'])]),
 dict(de='Der Nächste, bitte!', zh='下一位，请！', py='xià yī wèi, qǐng!',
      k=[('naechste', ['下一位'])]),
 dict(de='Möchten Sie noch etwas?', zh='您还要别的吗？', py='nín hái yào bié de ma?',
      k=[('moechten', ['要']), ('noch_etwas', ['别的'])]),
 dict(de='Zahlen Sie bar oder mit Karte?', zh='您付现金还是刷卡？',
      py='nín fù xiànjīn háishi shuākǎ?',
      k=[('bar', ['现金']), ('karte', ['刷卡'])]),
 dict(de='Tut mir leid, das haben wir nicht.', zh='对不起，我们没有这个。',
      py='duìbuqǐ, wǒmen méiyǒu zhège.',
      k=[('leid', ['对不起']), ('nicht_haben', ['没有'])]),
 dict(de='Ich hole meinen Kollegen.', zh='我去叫我的同事。', py='wǒ qù jiào wǒ de tóngshì.',
      k=[('holen', ['去叫']), ('kollege', ['同事'])]),
 dict(de='Kommen Sie gerne wieder!', zh='欢迎再来！', py='huānyíng zài lái!',
      k=[('wiederkommen', ['再来'])]),

# ---------------------------------------------------------------- Krankmelden
 dict(de='Ich kann heute nicht kommen.', zh='我今天不能来。', py='wǒ jīntiān bùnéng lái.',
      k=[('nicht_koennen', ['不能']), ('heute', ['今天']), ('kommen', ['来'])]),
 dict(de='Ich bin krank und bleibe zu Hause.', zh='我生病了，要待在家里。',
      py='wǒ shēngbìng le, yào dāi zài jiālǐ.',
      k=[('krank', ['生病']), ('zu_hause', ['家里'])]),
 dict(de='Ich komme später.', zh='我晚点来。', py='wǒ wǎndiǎn lái.',
      k=[('kommen', ['来']), ('spaeter', ['晚点'])]),
 dict(de='Ich brauche einen Tag frei.', zh='我需要请一天假。', py='wǒ xūyào qǐng yì tiān jià.',
      k=[('brauchen', ['需要']), ('tag_frei', ['请一天假', '请假'])]),
 dict(de='Ich habe einen Arzttermin.', zh='我有一个医生预约。',
      py='wǒ yǒu yí gè yīshēng yùyuē.',
      k=[('arzttermin', ['预约'])]),

# ---------------------------------------------------------------- Bezahlung
 dict(de='Wie viel verdiene ich pro Stunde?', zh='我每小时挣多少钱？',
      py='wǒ měi xiǎoshí zhèng duōshao qián?',
      k=[('verdienen', ['挣']), ('stunde', ['每小时'])]),
 dict(de='Wann bekomme ich mein Geld?', zh='我什么时候能拿到工资？',
      py='wǒ shénme shíhou néng nádào gōngzī?',
      k=[('wann', ['什么时候']), ('geld', ['工资'])]),
 dict(de='Werde ich bar bezahlt?', zh='是付现金吗？', py='shì fù xiànjīn ma?',
      k=[('bar', ['现金']), ('bezahlt', ['付'])],
      h='Ähnlich wie in Schweden, nicht wie in Spanien: China ist in Städten '
        'stark bargeldlos (WeChat Pay/Alipay), Lohn bar zu bekommen ist eher '
        'unüblich geworden.'),
 dict(de='Ich habe zehn Stunden gearbeitet.', zh='我工作了十个小时。',
      py='wǒ gōngzuò le shí gè xiǎoshí.',
      k=[('zehn', ['十']), ('stunden', ['小时']), ('gearbeitet', ['工作了'])]),
]

AUSGELASSEN = []
