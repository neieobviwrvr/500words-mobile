# -*- coding: utf-8 -*-
"""Entwurf Welle 1: club_trinkkultur, club_ansprechen, club_sicherheit.

Noch NICHT in der Datenbank - Simon liest gegen.

Felder je Satz:
  sz         scenario-Slug
  de         deutscher Satz (Quelle, wie phrasebook_master)
  zh         chinesischer Satz
  py         Pinyin
  lookup     True = nur Survival zum Nachschlagen/Vorzeigen, nie im Lernpfad
  ansprache  None = fuer alle | 'frauen' | 'maenner'
  konzepte   Pflicht-Konzepte fuer die Bewertung (chinesisch)
  neu        Vokabeln, die DIESER Satz erstmals einfuehrt. Leer = der Satz
             kommt komplett mit bekanntem Wortschatz aus. Wird von
             pruefe_saetze.py gegen den tatsaechlichen Text abgeglichen -
             eine falsche Angabe faellt dort auf.

Wo der Kurs schon eine Form kennt, wird SIE benutzt (想 statt 要,
汉语 statt 中文). Wo ein Wort wirklich zur Kategorie gehoert - 干杯,
随意, 警察 - steht es bewusst drin: ein Kategorie-Paket bringt laut
Konzept "200 Woerter + Saetze" mit, es muss nicht mit den 349 Kurswoertern
auskommen.
"""

SAETZE = [
# ---------------------------------------------------------------- Trinkkultur
 dict(sz='club_trinkkultur', de='Prost!', zh='干杯！', hinweis='Heißt wörtlich „Glas leeren". Wer 干杯 sagt, trinkt aus — und erwartet das auch von dir.', neu=['干杯'], py='gānbēi!',
      lookup=False, ansprache=None, konzepte=[('prost', ['干杯'])]),
 dict(sz='club_trinkkultur', de='Immer mit der Ruhe - trink so viel du magst.', zh='随意！', hinweis='Die höfliche Gegenbewegung zu 干杯: Du stößt mit an, trinkst aber nur einen Schluck. So lehnst du das Glas ab, nicht die Person.', neu=['随意'], py='suíyì!',
      lookup=False, ansprache=None, konzepte=[('nach_belieben', ['随意'])]),
 dict(sz='club_trinkkultur', de='Ich trinke langsam.', zh='我慢慢喝。', hinweis=None, neu=[], py='wǒ mànman hē.',
      lookup=False, ansprache=None, konzepte=[('langsam', ['慢']), ('trinken', ['喝'])]),
 dict(sz='club_trinkkultur', de='Ich kann nicht mehr trinken.', zh='我不能再喝了。', hinweis=None, neu=[], py='wǒ bù néng zài hē le.',
      lookup=False, ansprache=None, konzepte=[('nicht_koennen', ['不能']), ('trinken', ['喝'])]),
 dict(sz='club_trinkkultur', de='Ich muss morgen arbeiten.', zh='我明天有工作。', hinweis='Ein Grund, der nichts mit dem Gegenüber zu tun hat, wahrt das Gesicht besser als ein bloßes Nein.', neu=[], py='wǒ míngtiān yǒu gōngzuò.',
      lookup=False, ansprache=None, konzepte=[('morgen', ['明天']), ('arbeit', ['工作'])]),
 dict(sz='club_trinkkultur', de='Ich trinke nur ein bisschen.', zh='我喝一点。', hinweis=None, neu=[], py='wǒ hē yìdiǎn.',
      lookup=False, ansprache=None, konzepte=[('trinken', ['喝']), ('ein_bisschen', ['一点'])]),
 dict(sz='club_trinkkultur', de='Was trinkst du?', zh='你喝什么？', hinweis=None, neu=[], py='nǐ hē shénme?',
      lookup=False, ansprache=None, konzepte=[('du', ['你']), ('trinken', ['喝']), ('was', ['什么'])]),
 dict(sz='club_trinkkultur', de='Ich möchte noch ein Bier.', zh='我还想喝啤酒。', hinweis=None, neu=[], py='wǒ hái xiǎng hē píjiǔ.',
      lookup=False, ansprache=None, konzepte=[('noch', ['还']), ('bier', ['啤酒'])]),
 dict(sz='club_trinkkultur', de='Ich lade dich ein.', zh='我请你。', hinweis=None, py='wǒ qǐng nǐ.',
      neu=[], lookup=False, ansprache=None,
      konzepte=[('einladen', ['请']), ('du', ['你'])]),
 dict(sz='club_trinkkultur', de='Trinken wir zusammen!', zh='我们一起喝！', hinweis=None, neu=[], py='wǒmen yìqǐ hē!',
      lookup=False, ansprache=None, konzepte=[('zusammen', ['一起']), ('trinken', ['喝'])]),
 dict(sz='club_trinkkultur', de='Ich trinke keinen Alkohol.', zh='我不喝酒。', hinweis=None, neu=['酒'], py='wǒ bù hē jiǔ.',
      lookup=False, ansprache=None, konzepte=[('nicht', ['不']), ('alkohol', ['酒'])]),
 dict(sz='club_trinkkultur', de='Was kostet das?', zh='这个多少钱？', hinweis=None, neu=[], py='zhège duōshao qián?',
      lookup=False, ansprache=None, konzepte=[('wieviel', ['多少']), ('geld', ['钱'])]),

# ---------------------------------------------------------------- Ansprechen
 dict(sz='club_ansprechen', de='Wie heißt du?', zh='你叫什么名字？', hinweis=None, neu=[], py='nǐ jiào shénme míngzi?',
      lookup=False, ansprache=None, konzepte=[('heissen', ['叫']), ('name', ['名字'])]),
 dict(sz='club_ansprechen', de='Bist du aus China?', zh='你是中国人吗？', hinweis=None, neu=[], py='nǐ shì Zhōngguó rén ma?',
      lookup=False, ansprache=None, konzepte=[('china', ['中国']), ('person', ['人'])]),
 dict(sz='club_ansprechen', de='Gefällt es dir hier auch?', zh='你也喜欢这里吗？', hinweis=None, neu=[], py='nǐ yě xǐhuan zhèlǐ ma?',
      lookup=False, ansprache=None, konzepte=[('auch', ['也']), ('moegen', ['喜欢'])]),
 dict(sz='club_ansprechen', de='Ich sehe dir gern beim Tanzen zu.', zh='我喜欢看你跳舞。', hinweis=None, neu=[], py='wǒ xǐhuan kàn nǐ tiàowǔ.',
      lookup=False, ansprache=None, konzepte=[('moegen', ['喜欢']), ('tanzen', ['跳舞'])]),
 dict(sz='club_ansprechen', de='Du bist sehr hübsch.', zh='你很漂亮。', hinweis='Im Chinesischen zwei verschiedene Wörter: 漂亮 sagt man zu Frauen, 帅 zu Männern. Es ist keine Übersetzungsfrage.', neu=[], py='nǐ hěn piàoliang.',
      lookup=False, ansprache='frauen', konzepte=[('huebsch', ['漂亮'])]),
 dict(sz='club_ansprechen', de='Du siehst gut aus.', zh='你很帅。', hinweis='Im Chinesischen zwei verschiedene Wörter: 帅 sagt man zu Männern, 漂亮 zu Frauen.', neu=[], py='nǐ hěn shuài.',
      lookup=False, ansprache='maenner', konzepte=[('gutaussehend', ['帅'])]),
 dict(sz='club_ansprechen', de='Bist du Single?', zh='你是单身吗？', hinweis=None, neu=[], py='nǐ shì dānshēn ma?',
      lookup=False, ansprache=None, konzepte=[('single', ['单身'])]),
 dict(sz='club_ansprechen', de='Ist dein Freund auch hier?', zh='你男朋友也来了吗？', hinweis=None, neu=[], py='nǐ nán péngyou yě lái le ma?',
      lookup=False, ansprache='frauen', konzepte=[('fester_freund', ['男朋友'])]),
 dict(sz='club_ansprechen', de='Ist deine Freundin auch hier?', zh='你女朋友也来了吗？', hinweis=None, neu=[], py='nǐ nǚ péngyou yě lái le ma?',
      lookup=False, ansprache='maenner', konzepte=[('feste_freundin', ['女朋友'])]),
 dict(sz='club_ansprechen', de='Wollen wir zusammen tanzen?', zh='我们一起跳舞吧？', hinweis=None, neu=[], py='wǒmen yìqǐ tiàowǔ ba?',
      lookup=False, ansprache=None, konzepte=[('zusammen', ['一起']), ('tanzen', ['跳舞'])]),
 dict(sz='club_ansprechen', de='Hier ist es zu laut. Gehen wir nach draußen?', zh='这里太吵了，我们去外面吧？', hinweis=None, neu=['吵'], py='zhèlǐ tài chǎo le, wǒmen qù wàimiàn ba?',
      lookup=False, ansprache=None, konzepte=[('laut', ['吵']), ('draussen', ['外面'])]),
 dict(sz='club_ansprechen', de='Lass uns WeChat austauschen.', zh='加个微信吧。', hinweis='In China tauscht man WeChat, keine Telefonnummern. Ohne WeChat gibt es kein Wiedersehen.', neu=[], py='jiā ge wēixìn ba.',
      lookup=False, ansprache=None, konzepte=[('hinzufuegen', ['加']), ('wechat', ['微信'])]),
 dict(sz='club_ansprechen', de='Mein Chinesisch ist nicht so gut.', zh='我的汉语不太好。', hinweis='Bescheidenheit kommt gut an. Wer sein Chinesisch klein redet, bekommt fast immer Hilfe statt Ungeduld.', neu=[], py='wǒ de Hànyǔ bú tài hǎo.',
      lookup=False, ansprache=None, konzepte=[('chinesisch', ['汉语']), ('nicht_gut', ['不太好', '不好'])]),

# ---------------------------------------------------------------- Sicherheit
 dict(sz='club_sicherheit', de='Ich gehe jetzt.', zh='我想走了。', hinweis=None, neu=[], py='wǒ xiǎng zǒu le.',
      lookup=False, ansprache=None, konzepte=[('gehen', ['走'])]),
 dict(sz='club_sicherheit', de='Mir geht es nicht gut.', zh='我不太舒服。', hinweis=None, neu=[], py='wǒ bú tài shūfu.',
      lookup=False, ansprache=None, konzepte=[('nicht', ['不']), ('wohl', ['舒服'])]),
 dict(sz='club_sicherheit', de='Ich möchte nach Hause.', zh='我想回家。', hinweis=None, neu=[], py='wǒ xiǎng huí jiā.',
      lookup=False, ansprache=None, konzepte=[('moechten', ['想']), ('nach_hause', ['回家'])]),
 dict(sz='club_sicherheit', de='Kannst du mir helfen?', zh='你能帮我吗？', hinweis=None, neu=[], py='nǐ néng bāng wǒ ma?',
      lookup=False, ansprache=None, konzepte=[('koennen', ['能']), ('helfen', ['帮'])]),
 dict(sz='club_sicherheit', de='Mein Freund wartet draußen auf mich.', zh='我男朋友在外面等我。', hinweis=None, neu=[], py='wǒ nán péngyou zài wàimiàn děng wǒ.',
      lookup=False, ansprache='frauen', konzepte=[('fester_freund', ['男朋友']), ('warten', ['等'])]),
 dict(sz='club_sicherheit', de='Meine Freundin wartet draußen auf mich.', zh='我女朋友在外面等我。', hinweis=None, neu=[], py='wǒ nǚ péngyou zài wàimiàn děng wǒ.',
      lookup=False, ansprache='maenner', konzepte=[('feste_freundin', ['女朋友']), ('warten', ['等'])]),
 dict(sz='club_sicherheit', de='Lass mich in Ruhe.', zh='别烦我。', hinweis=None, neu=[], py='bié fán wǒ.',
      lookup=True, ansprache=None, konzepte=[('nicht_tun', ['别']), ('stoeren', ['烦'])]),
 dict(sz='club_sicherheit', de='Ich habe kein Interesse, bitte geh weg.', zh='我对你没兴趣，请走开。', hinweis=None, neu=[], py='wǒ duì nǐ méi xìngqù, qǐng zǒukāi.',
      lookup=True, ansprache=None, konzepte=[('kein_interesse', ['没兴趣']), ('weggehen', ['走开'])]),
 dict(sz='club_sicherheit', de='Die Person dort lässt mich nicht in Ruhe.', zh='那个人一直烦我。', hinweis=None, neu=[], py='nàge rén yìzhí fán wǒ.',
      lookup=True, ansprache=None, konzepte=[('person', ['人']), ('stoeren', ['烦'])]),
 dict(sz='club_sicherheit', de='Bitte tu so, als würden wir uns kennen.', zh='请你假装认识我。', hinweis=None, neu=[], py='qǐng nǐ jiǎzhuāng rènshi wǒ.',
      lookup=True, ansprache=None, konzepte=[('so_tun', ['假装']), ('kennen', ['认识'])]),
 dict(sz='club_sicherheit', de='Bitte pass kurz auf mein Glas auf.', zh='请帮我看一下我的杯子。', hinweis=None, neu=[], py='qǐng bāng wǒ kàn yíxià wǒ de bēizi.',
      lookup=True, ansprache=None, konzepte=[('helfen', ['帮']), ('schauen', ['看']), ('glas', ['杯子'])]),
 dict(sz='club_sicherheit', de='Bitte helfen Sie mir, die Polizei zu rufen.', zh='请帮我报警。', hinweis=None, neu=[], py='qǐng bāng wǒ bàojǐng.',
      lookup=True, ansprache=None, konzepte=[('rufen', ['叫']), ('polizei', ['警察'])]),
 dict(sz='club_sicherheit', de='Entschuldigung, ich wusste nicht, dass ihr zusammen seid.', zh='对不起，我不知道你们是一起的。', hinweis=None, neu=[], py='duìbuqǐ, wǒ bù zhīdào nǐmen shì yìqǐ de.',
      lookup=True, ansprache=None, konzepte=[('entschuldigung', ['对不起']), ('wissen', ['知道'])]),
]
