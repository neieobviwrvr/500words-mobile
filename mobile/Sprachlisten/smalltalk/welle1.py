# -*- coding: utf-8 -*-
"""Smalltalk und was er leiht - auf Chinesisch.

Die 44 deutschen Saetze aus Grundwortschatz, Smalltalk und Kultur, geprueft
und uebersetzt. Anders als bei Club und Health gibt es diese Saetze auf
Deutsch, Schwedisch und Spanisch schon - hier kommt nur die chinesische
Spalte dazu.

Weil die Saetze aus DREI Kategorien stammen, traegt jeder Eintrag seine
eigene (`kat`), nicht das Skript.

WAS NICHT UEBERTRAGEN WURDE:

  "Guten Tag!"  Chinesisch kennt keinen eigenen Mittagsgruss. 下午好 gibt es
                formal, gesprochen sagt jeder 你好 - der Satz wuerde also
                nur 你好 verdoppeln. Als einziger von 44 faellt er weg.

WAS IN CHINA ANDERS IST:

  Alter fragen   你多大？ ist normale Hoeflichkeit, keine Grenzueberschreitung -
                 anders als bei uns. Oft eine der ersten Fragen ueberhaupt.
  Verheiratet    Ebenso: 你结婚了吗？ kommt frueh und ohne Umschweife.
  Wie geht's     你好吗？ steht im Lehrbuch, wird aber selten gesagt. Unter
                 Bekannten fragt man 吃了吗？("schon gegessen?").
"""

# Diese Welle ist eine UEBERSETZUNG, keine Neuschoepfung: die deutschen
# Saetze stehen fest, ich kann keinen zweiten erfinden, damit 足球 zweimal
# vorkommt. Die Rentabel-Regel gilt fuers Schreiben, nicht fuers Uebersetzen -
# pruefe_saetze.py laesst sie deshalb hier aus und meldet die neuen Woerter
# nur zur Kenntnis.
UEBERSETZUNG = True

SAETZE = [
# ============================================================ Grundwortschatz
# --- Begrüßen
 dict(kat='grundwortschatz', sz='begruessung', de='Hallo!', zh='你好！', py='nǐ hǎo!',
      hinweis=None, neu=[], lookup=False, ansprache=None,
      konzepte=[('hallo', ['你好'])]),
 dict(kat='grundwortschatz', sz='begruessung', de='Guten Morgen!', zh='早上好！', py='zǎoshang hǎo!',
      hinweis=None, neu=[], lookup=False, ansprache=None,
      konzepte=[('morgen_gruss', ['早上好', '早上'])]),
 dict(kat='grundwortschatz', sz='begruessung', de='Guten Abend!', zh='晚上好！', py='wǎnshang hǎo!',
      hinweis=None, neu=[], lookup=False, ansprache=None,
      konzepte=[('abend_gruss', ['晚上好', '晚上'])]),
 dict(kat='grundwortschatz', sz='begruessung', de='Wie geht es dir?', zh='你好吗？', py='nǐ hǎo ma?',
      hinweis='Steht in jedem Lehrbuch, wird aber selten gesagt. Unter Bekannten fragt man eher 吃了吗？ — „schon gegessen?" — das ist die eigentliche Grußformel.',
      neu=[], lookup=False, ansprache=None,
      konzepte=[('wie_geht', ['你好吗', '好吗'])]),
 dict(kat='grundwortschatz', sz='begruessung', de='Mir geht es gut, danke.', zh='我很好，谢谢。', py='wǒ hěn hǎo, xièxie.',
      hinweis=None, neu=[], lookup=False, ansprache=None,
      konzepte=[('gut', ['很好']), ('danke', ['谢谢'])]),

# --- Sich vorstellen
 dict(kat='grundwortschatz', sz='vorstellung', de='Wie heißt du?', zh='你叫什么名字？', py='nǐ jiào shénme míngzi?',
      hinweis=None, neu=[], lookup=False, ansprache=None,
      konzepte=[('heissen', ['叫']), ('name', ['名字'])]),
 dict(kat='grundwortschatz', sz='vorstellung', de='Ich heiße Anna.', zh='我叫安娜。', py='wǒ jiào Ānnà.',
      hinweis=None, neu=['安娜'], lookup=False, ansprache=None,
      konzepte=[('heissen', ['叫'])]),
 dict(kat='grundwortschatz', sz='vorstellung', de='Woher kommst du?', zh='你是哪国人？', py='nǐ shì nǎ guó rén?',
      hinweis=None, neu=['国'], lookup=False, ansprache=None,
      konzepte=[('welches', ['哪']), ('land', ['国'])]),
 dict(kat='grundwortschatz', sz='vorstellung', de='Ich komme aus Deutschland.', zh='我是德国人。', py='wǒ shì Déguó rén.',
      hinweis=None, neu=[], lookup=False, ansprache=None,
      konzepte=[('deutschland', ['德国'])]),
 dict(kat='grundwortschatz', sz='vorstellung', de='Wie alt bist du?', zh='你多大？', py='nǐ duō dà?',
      hinweis='In China eine normale, freundliche Frage — oft eine der ersten überhaupt. Sie gilt nicht als aufdringlich.',
      neu=['多大'], lookup=False, ansprache=None,
      konzepte=[('wie_alt', ['多大'])]),
 dict(kat='grundwortschatz', sz='vorstellung', de='Ich bin 25 Jahre alt.', zh='我二十五岁。', py='wǒ èrshíwǔ suì.',
      hinweis=None, neu=[], lookup=False, ansprache=None,
      konzepte=[('jahre', ['岁'])]),
 dict(kat='grundwortschatz', sz='vorstellung', de='Freut mich, dich kennenzulernen.', zh='认识你很高兴。', py='rènshi nǐ hěn gāoxìng.',
      hinweis=None, neu=['高兴'], lookup=False, ansprache=None,
      konzepte=[('kennen', ['认识']), ('freuen', ['高兴'])]),

# --- Verabschieden
 dict(kat='grundwortschatz', sz='abschied', de='Auf Wiedersehen!', zh='再见！', py='zàijiàn!',
      hinweis=None, neu=[], lookup=False, ansprache=None,
      konzepte=[('tschuess', ['再见'])]),
 dict(kat='grundwortschatz', sz='abschied', de='Tschüss!', zh='拜拜！', py='báibái!',
      hinweis='Vom englischen „bye-bye". Lockerer als 再见 und unter jungen Leuten das Übliche.',
      neu=['拜拜'], lookup=False, ansprache=None,
      konzepte=[('tschuess', ['拜拜', '再见'])]),
 dict(kat='grundwortschatz', sz='abschied', de='Bis später!', zh='一会儿见！', py='yíhuìr jiàn!',
      hinweis=None, neu=['一会儿', '见'], lookup=False, ansprache=None,
      konzepte=[('spaeter', ['一会儿']), ('treffen', ['见'])]),

# --- Sich verständigen
 dict(kat='grundwortschatz', sz='verstaendigen', de='Ich spreche ein bisschen Chinesisch.', zh='我会说一点汉语。', py='wǒ huì shuō yìdiǎn Hànyǔ.',
      hinweis=None, neu=[], lookup=False, ansprache=None,
      konzepte=[('sprechen', ['说']), ('chinesisch', ['汉语'])]),
 dict(kat='grundwortschatz', sz='verstaendigen', de='Kannst du bitte langsamer sprechen?', zh='请你说慢一点。', py='qǐng nǐ shuō màn yìdiǎn.',
      hinweis=None, neu=[], lookup=False, ansprache=None,
      konzepte=[('langsam', ['慢']), ('sprechen', ['说'])]),
 dict(kat='grundwortschatz', sz='verstaendigen', de='Kannst du das bitte wiederholen?', zh='请你再说一次。', py='qǐng nǐ zài shuō yí cì.',
      hinweis=None, neu=[], lookup=False, ansprache=None,
      konzepte=[('nochmal', ['再']), ('sprechen', ['说'])]),
 dict(kat='grundwortschatz', sz='verstaendigen', de='Wie sagt man das auf Chinesisch?', zh='这个汉语怎么说？', py='zhège Hànyǔ zěnme shuō?',
      hinweis=None, neu=[], lookup=False, ansprache=None,
      konzepte=[('chinesisch', ['汉语']), ('wie', ['怎么'])]),
 dict(kat='grundwortschatz', sz='verstaendigen', de='Sprichst du Englisch?', zh='你会说英语吗？', py='nǐ huì shuō Yīngyǔ ma?',
      hinweis=None, neu=[], lookup=False, ansprache=None,
      konzepte=[('koennen', ['会']), ('englisch', ['英语'])]),
 dict(kat='grundwortschatz', sz='verstaendigen', de='Ich verstehe das nicht.', zh='我不懂。', py='wǒ bù dǒng.',
      hinweis=None, neu=[], lookup=False, ansprache=None,
      konzepte=[('nicht', ['不']), ('verstehen', ['懂'])]),

# ============================================================ Smalltalk
 dict(kat='smalltalk_socialising', sz='smalltalk_person', de='Was machst du beruflich?', zh='你做什么工作？', py='nǐ zuò shénme gōngzuò?',
      hinweis=None, neu=['做'], lookup=False, ansprache=None,
      konzepte=[('machen', ['做']), ('arbeit', ['工作'])]),
 dict(kat='smalltalk_socialising', sz='smalltalk_person', de='Ich bin Student.', zh='我是学生。', py='wǒ shì xuésheng.',
      hinweis=None, neu=[], lookup=False, ansprache=None,
      konzepte=[('student', ['学生'])]),
 dict(kat='smalltalk_socialising', sz='smalltalk_person', de='Ich arbeite als Lehrer.', zh='我是老师。', py='wǒ shì lǎoshī.',
      hinweis=None, neu=[], lookup=False, ansprache=None,
      konzepte=[('lehrer', ['老师'])]),
 dict(kat='smalltalk_socialising', sz='smalltalk_person', de='Wo wohnst du?', zh='你住在哪里？', py='nǐ zhù zài nǎli?',
      hinweis=None, neu=[], lookup=False, ansprache=None,
      konzepte=[('wohnen', ['住']), ('wo', ['哪里'])]),
 dict(kat='smalltalk_socialising', sz='smalltalk_person', de='Ich wohne in Berlin.', zh='我住在柏林。', py='wǒ zhù zài Bólín.',
      hinweis=None, neu=['柏林'], lookup=False, ansprache=None,
      konzepte=[('wohnen', ['住'])]),
 dict(kat='smalltalk_socialising', sz='smalltalk_familie', de='Ich habe eine Schwester.', zh='我有一个姐姐。', py='wǒ yǒu yí ge jiějie.',
      hinweis=None, neu=[], lookup=False, ansprache=None,
      konzepte=[('haben', ['有']), ('schwester', ['姐姐'])]),
 dict(kat='smalltalk_socialising', sz='smalltalk_familie', de='Hast du Geschwister?', zh='你有姐姐或者哥哥吗？', py='nǐ yǒu jiějie huòzhě gēge ma?',
      hinweis='Chinesisch hat kein Wort für „Geschwister" — man nennt sie einzeln, und zwar nach älter und jünger getrennt.',
      neu=['或者'], lookup=False, ansprache=None,
      konzepte=[('schwester', ['姐姐']), ('bruder', ['哥哥'])]),
 dict(kat='smalltalk_socialising', sz='smalltalk_familie', de='Bist du verheiratet?', zh='你结婚了吗？', py='nǐ jiéhūn le ma?',
      hinweis='Kommt in China früh und direkt — das ist Interesse, keine Grenzüberschreitung. Wer ausweichen will, sagt einfach 还没有 („noch nicht").',
      neu=['结婚'], lookup=False, ansprache=None,
      konzepte=[('heiraten', ['结婚'])]),
 dict(kat='smalltalk_socialising', sz='smalltalk_familie', de='Noch nicht.', zh='还没有。', py='hái méiyǒu.',
      hinweis='Die höfliche Antwort auf Fragen nach Heirat, Kindern oder Beziehung, wenn man nicht weiter darüber reden will.',
      neu=[], lookup=False, ansprache=None,
      konzepte=[('noch_nicht', ['还没有', '没有'])]),
 dict(kat='smalltalk_socialising', sz='smalltalk_hobbys', de='Was sind deine Hobbys?', zh='你有什么爱好？', py='nǐ yǒu shénme àihào?',
      hinweis=None, neu=['爱好'], lookup=False, ansprache=None,
      konzepte=[('hobby', ['爱好'])]),
 dict(kat='smalltalk_socialising', sz='smalltalk_hobbys', de='Ich lese gerne Bücher.', zh='我喜欢看书。', py='wǒ xǐhuan kàn shū.',
      hinweis=None, neu=[], lookup=False, ansprache=None,
      konzepte=[('moegen', ['喜欢']), ('lesen', ['看书', '书'])]),
 dict(kat='smalltalk_socialising', sz='smalltalk_hobbys', de='Mein Hobby ist Sport.', zh='我的爱好是运动。', py='wǒ de àihào shì yùndòng.',
      hinweis=None, neu=[], lookup=False, ansprache=None,
      konzepte=[('hobby', ['爱好']), ('sport', ['运动'])]),

# ============================================================ Kultur
 dict(kat='culture_immersion', sz='kultur_wetter', de='Wie ist das Wetter heute?', zh='今天天气怎么样？', py='jīntiān tiānqì zěnmeyàng?',
      hinweis=None, neu=['怎么样'], lookup=False, ansprache=None,
      konzepte=[('heute', ['今天']), ('wetter', ['天气'])]),
 dict(kat='culture_immersion', sz='kultur_wetter', de='Es regnet.', zh='下雨了。', py='xià yǔ le.',
      hinweis=None, neu=[], lookup=False, ansprache=None,
      konzepte=[('regnen', ['下雨'])]),
 dict(kat='culture_immersion', sz='kultur_wetter', de='Heute ist ein sonniger Tag.', zh='今天是晴天。', py='jīntiān shì qíngtiān.',
      hinweis=None, neu=[], lookup=False, ansprache=None,
      konzepte=[('sonnig', ['晴天'])]),
 dict(kat='culture_immersion', sz='kultur_wetter', de='Es ist sehr kalt heute.', zh='今天很冷。', py='jīntiān hěn lěng.',
      hinweis=None, neu=[], lookup=False, ansprache=None,
      konzepte=[('heute', ['今天']), ('kalt', ['冷'])]),
 dict(kat='culture_immersion', sz='kultur_freizeit', de='Ich gehe gerne ins Kino.', zh='我喜欢看电影。', py='wǒ xǐhuan kàn diànyǐng.',
      hinweis=None, neu=[], lookup=False, ansprache=None,
      konzepte=[('moegen', ['喜欢']), ('film', ['电影'])]),
 dict(kat='culture_immersion', sz='kultur_freizeit', de='Treibst du Sport?', zh='你运动吗？', py='nǐ yùndòng ma?',
      hinweis=None, neu=[], lookup=False, ansprache=None,
      konzepte=[('sport', ['运动'])]),
 dict(kat='culture_immersion', sz='kultur_freizeit', de='Ich spiele gerne Fußball.', zh='我喜欢踢足球。', py='wǒ xǐhuan tī zúqiú.',
      hinweis=None, neu=['足球', '踢'], lookup=False, ansprache=None,
      konzepte=[('moegen', ['喜欢']), ('fussball', ['足球'])]),
 dict(kat='culture_immersion', sz='kultur_freizeit', de='Ich interessiere mich für Geschichte.', zh='我对历史很有兴趣。', py='wǒ duì lìshǐ hěn yǒu xìngqù.',
      hinweis=None, neu=['历史', '对'], lookup=False, ansprache=None,
      konzepte=[('geschichte', ['历史']), ('interesse', ['兴趣'])]),
 dict(kat='culture_immersion', sz='kultur_wochenende', de='Was machst du am Wochenende?', zh='你周末做什么？', py='nǐ zhōumò zuò shénme?',
      hinweis=None, neu=[], lookup=False, ansprache=None,
      konzepte=[('wochenende', ['周末']), ('machen', ['做'])]),
 dict(kat='culture_immersion', sz='kultur_wochenende', de='Möchtest du mitkommen?', zh='你想一起去吗？', py='nǐ xiǎng yìqǐ qù ma?',
      hinweis=None, neu=[], lookup=False, ansprache=None,
      konzepte=[('moechten', ['想']), ('zusammen', ['一起'])]),
 dict(kat='culture_immersion', sz='kultur_wochenende', de='Nächstes Wochenende gehe ich wandern.', zh='下个周末我去爬山。', py='xià ge zhōumò wǒ qù pá shān.',
      hinweis='爬山 („den Berg hochsteigen") ist in China ein sehr verbreitetes Wochenendvergnügen — meist auf gepflasterten Wegen mit Treppen, nicht im Wald.',
      neu=['爬山'], lookup=False, ansprache=None,
      konzepte=[('wochenende', ['周末']), ('wandern', ['爬山'])]),
 dict(kat='culture_immersion', sz='kultur_wochenende', de='Letztes Wochenende war ich am Strand.', zh='上个周末我去了海边。', py='shàng ge zhōumò wǒ qù le hǎibiān.',
      hinweis=None, neu=['海边'], lookup=False, ansprache=None,
      konzepte=[('wochenende', ['周末']), ('strand', ['海边'])]),
]
