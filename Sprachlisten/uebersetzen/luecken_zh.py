# -*- coding: utf-8 -*-
"""Chinesisch: die 25 Saetze, die seit den spaeteren Master-Wellen fehlten.

Gleiche Luecke und gleiche Begruendung wie bei luecken_sv.py - dort steht
die ausfuehrliche Fassung. Chinesisch hat einen Satz mehr als die anderen
drei: "Ja." fehlt hier zusaetzlich.

**Drei Uebersetzungen weichen vom Naheliegenden ab, weil das Naheliegende
schon vergeben ist.** Vor dem Schreiben gegen den ganzen Bestand geprueft -
sonst waeren Karteikarten entstanden, die sich selbst abfragen:

  Stimmt.        NICHT 对。      - steht schon als "Korrekt."      -> 确实。
  Macht nichts.  NICHT 没关系。  - steht schon als "Kein Problem." -> 没事。
  Ja.            NICHT 对。      - siehe oben                      -> 是的。

Bei "Ja." kommt dazu, dass Chinesisch ueberhaupt kein allgemeines Ja hat:
normalerweise wiederholt man das Verb der Frage. 是的 ist die neutrale Form,
die immer durchgeht, und bildet mit dem vorhandenen 不是。("Nein.") ein
sauberes Paar.

**Kosenamen sind ersetzt, nicht uebersetzt** - dieselbe Ueberlegung wie bei
club_komplimente. 小猪 (kleines Schweinchen) ist dabei der Fall, der ohne
Hinweis nach hinten losgeht: in China ein gaengiger Kosename, im Deutschen
eine Beleidigung.

**Ein Satz bewusst anders formuliert**, weil der Master zwei
Beinahe-Dubletten hat: "Darf ich mich hierhin setzen?" steht schon als
我可以坐这里吗？, deshalb traegt "Darf ich mich dazusetzen?" hier das
Dazu - 坐你旁边 (neben dich).

**Nicht von Muttersprachlern geprueft.**
"""

KATEGORIEN = ['grundwortschatz', 'university_studying', 'love_relationship']

SAETZE = [
    # --- kommentar: kurze Reaktionen -------------------------------------
    dict(de='Cool!', zh='太棒了！', py='tài bàng le!', kat='grundwortschatz',
         k=[('bang', ['太棒了', '棒'])]),
    dict(de='Macht nichts.', zh='没事。', py='méi shì.', kat='grundwortschatz',
         k=[('mei_shi', ['没事'])],
         h='Méi shì ist die knappste Entwarnung. 没关系 heißt fast dasselbe und geht genauso.'),
    dict(de='Genau!', zh='没错！', py='méi cuò!', kat='grundwortschatz',
         k=[('mei_cuo', ['没错'])]),
    dict(de='Schade!', zh='太可惜了！', py='tài kěxī le!', kat='grundwortschatz',
         k=[('kexi', ['可惜'])]),
    dict(de='Na klar!', zh='当然！', py='dāngrán!', kat='grundwortschatz',
         k=[('dangran', ['当然'])]),
    dict(de='Wirklich?', zh='真的吗？', py='zhēn de ma?', kat='grundwortschatz',
         k=[('zhende', ['真的'])]),
    dict(de='Stimmt.', zh='确实。', py='quèshí.', kat='grundwortschatz',
         k=[('queshi', ['确实'])],
         h='Quèshí bestätigt eine Aussage nachdrücklich, etwa: ja, tatsächlich.'),
    dict(de='Auf keinen Fall!', zh='绝对不行！', py='juéduì bù xíng!',
         kat='grundwortschatz',
         k=[('bu_xing', ['绝对不行', '不行'])]),
    dict(de='Ja.', zh='是的。', py='shì de.', kat='grundwortschatz',
         k=[('shide', ['是的', '是'])],
         h='Chinesisch hat kein allgemeines Ja - meist wiederholt man einfach das Verb der Frage. 是的 ist die neutrale Form, die immer passt.'),

    # --- liebe_spitznamen: Kosenamen -------------------------------------
    dict(de='Ich nenne dich Schatz.', zh='我叫你亲爱的。', py="wǒ jiào nǐ qīn'ài de.",
         kat='love_relationship',
         k=[('jiao', ['叫']), ('qinaide', ['亲爱的'])],
         h='Qīn ài de entspricht dem deutschen Schatz. In Briefen und Mails ist es zugleich die Anrede Liebe oder Lieber.'),
    dict(de='Kann ich dich Schatzi nennen?', zh='我可以叫你宝贝吗？',
         py='wǒ kěyǐ jiào nǐ bǎobèi ma?', kat='love_relationship',
         k=[('jiao', ['叫']), ('baobei', ['宝贝'])],
         h='Bǎobèi heißt Schatz oder Baby und ist der häufigste chinesische Kosename.'),
    dict(de='Sie nennt mich Süße.', zh='她叫我小可爱。', py='tā jiào wǒ xiǎo kě ài.',
         kat='love_relationship',
         k=[('jiao', ['叫']), ('keai', ['小可爱', '可爱'])]),
    dict(de='Er nennt mich Bärchen.', zh='他叫我小猪。', py='tā jiào wǒ xiǎo zhū.',
         kat='love_relationship',
         k=[('jiao', ['叫']), ('xiaozhu', ['小猪'])],
         h='Kleines Schweinchen ist in China ein verbreiteter Kosename unter Paaren - liebevoll gemeint, anders als im Deutschen.'),
    dict(de='Das ist mein Kosename für dich.', zh='这是我给你的昵称。',
         py='zhè shì wǒ gěi nǐ de nìchēng.', kat='love_relationship',
         k=[('nicheng', ['昵称'])]),
    dict(de='Nenn mich bitte nicht so!', zh='请别这样叫我！',
         py='qǐng bié zhèyàng jiào wǒ!', kat='love_relationship',
         k=[('bie', ['别']), ('jiao', ['叫'])]),
    dict(de='Wie soll ich dich nennen?', zh='我该怎么叫你？',
         py='wǒ gāi zěnme jiào nǐ?', kat='love_relationship',
         k=[('zenme', ['怎么']), ('jiao', ['叫'])]),
    dict(de='Ich mag diesen Spitznamen nicht so gern.', zh='我不太喜欢这个昵称。',
         py='wǒ bú tài xǐhuan zhège nìchēng.', kat='love_relationship',
         k=[('bu_xihuan', ['不太喜欢', '不喜欢']), ('nicheng', ['昵称'])]),

    # --- uni_freunde: im Hoersaal ansprechen ------------------------------
    dict(de='Bist du auch neu hier?', zh='你也是新来的吗？',
         py='nǐ yě shì xīn lái de ma?', kat='university_studying',
         k=[('xin_lai', ['新来', '新'])]),
    dict(de='Ist hier noch ein Platz frei?', zh='这里还有空位吗？',
         py='zhèlǐ hái yǒu kòngwèi ma?', kat='university_studying',
         k=[('kongwei', ['空位']), ('hai_you', ['还有'])]),
    dict(de='Was studierst du?', zh='你学什么专业？',
         py='nǐ xué shénme zhuānyè?', kat='university_studying',
         k=[('xue', ['学']), ('zhuanye', ['专业'])],
         h='Zhuānyè ist das Studienfach. Wörtlich fragt man: welches Fach lernst du.'),
    dict(de='Gehst du auch zur nächsten Vorlesung?', zh='你也去下一节课吗？',
         py='nǐ yě qù xià yī jié kè ma?', kat='university_studying',
         k=[('xia_jie_ke', ['下一节课', '下节课']), ('qu', ['去'])]),
    dict(de='Gibt es hier eine Gruppe für Austauschstudierende?',
         zh='这里有交换生的社团吗？', py='zhèlǐ yǒu jiāohuànshēng de shètuán ma?',
         kat='university_studying',
         k=[('jiaohuansheng', ['交换生']), ('shetuan', ['社团'])],
         h='Shètuán ist die studentische Gruppe oder AG - an chinesischen Unis ein zentraler Weg, Leute kennenzulernen.'),
    dict(de='Darf ich mich dazusetzen?', zh='我可以坐你旁边吗？',
         py='wǒ kěyǐ zuò nǐ pángbiān ma?', kat='university_studying',
         k=[('zuo', ['坐']), ('pangbian', ['旁边'])]),
    dict(de='Ich bin auch im ersten Semester.', zh='我也是大一的。',
         py='wǒ yě shì dà yī de.', kat='university_studying',
         k=[('dayi', ['大一'])],
         h='Dà yī heißt erstes Studienjahr. China zählt in Jahren - 大一 bis 大四 - nicht in Semestern.'),
    dict(de='Wollen wir uns nach der Vorlesung treffen?', zh='下课后我们见面吧。',
         py='xià kè hòu wǒmen jiànmiàn ba.', kat='university_studying',
         k=[('xiake', ['下课']), ('jianmian', ['见面'])]),
]

# Drei Klassen von Auslassungen, alle drei bewusst:
#
# SPRACHADAPTIV  Der Satz nennt die Zielsprache oder die Waehrung und traegt
#                deshalb je Sprache eine eigene deutsche Fassung. Alle drei
#                stehen laengst in chinesisch_phrasebook - als "Ich spreche
#                ein bisschen Chinesisch.", "Wie sagt man das auf
#                Chinesisch?" und "Das kostet zehn Yuan." (这个十块钱。).
#
# KEIN GEGENSTUECK  "Guten Tag!" - Chinesisch kennt keine Tageszeit-Form
#                zwischen 早上好 und 晚上好. 你好 deckt sie ab und steht
#                schon als "Hallo!". Seit dem Grundwortschatz-Umbau vom
#                2026-08-22 so festgelegt, siehe CLAUDE.md.
AUSGELASSEN = [
    'Ich spreche ein bisschen Deutsch.',
    'Wie sagt man das auf Deutsch?',
    'Das kostet zehn Euro.',
    'Guten Tag!',
]
