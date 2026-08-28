# -*- coding: utf-8 -*-
"""University + Studying auf Chinesisch (2026-08-22).

Uebersetzung der 14 vorhandenen deutschen Saetze. Chinesisch hatte NULL.

Die kleinste der sechs Kategorien - sie bedient nur eine der beiden Personas
(den Austauschstudenten), und bleibt deshalb auch beim Ausbau bewusst duenn:
Zieltiefe rund 35 Saetze statt der 80-100 bei Travel oder Drinking.

**Ein Satz bekommt einen angepassten Gloss:** Credits. Das chinesische
Hochschulsystem rechnet in 学分, aber die Zahl, nach der ein
Austauschstudent tatsaechlich fragt, ist die der Kurse - deshalb hier die
praktischere Formulierung.
"""

UEBERSETZUNG = True

SAETZE = [
# ---------------------------------------------------------- Sich zurechtfinden
 dict(sz='uni_orientierung', de='Wo ist der Hörsaal?', zh='教室在哪里？',
      py='jiàoshì zài nǎli?',
      hinweis=None, neu=['教室'], lookup=False, ansprache=None,
      konzepte=[('hoersaal', ['教室']), ('wo', ['哪里'])]),
 dict(sz='uni_orientierung', de='Wo finde ich die Bibliothek?', zh='图书馆在哪里？',
      py='túshūguǎn zài nǎli?',
      hinweis=None, neu=['图书馆'], lookup=False, ansprache=None,
      konzepte=[('bibliothek', ['图书馆']), ('wo', ['哪里'])]),
 dict(sz='uni_orientierung', de='Wann beginnt die Vorlesung?', zh='几点上课？',
      py='jǐ diǎn shàngkè?',
      hinweis='上课 heißt sowohl „Unterricht haben" als auch „der Unterricht beginnt". Das Gegenstück ist 下课.',
      neu=['上课'], lookup=False, ansprache=None,
      konzepte=[('wann', ['几点']), ('unterricht', ['上课'])]),
 dict(sz='uni_orientierung', de='Wer ist der Dozent für diesen Kurs?', zh='这个课谁教？',
      py='zhège kè shéi jiāo?',
      hinweis=None, neu=['课', '教'], lookup=False, ansprache=None,
      konzepte=[('kurs', ['课']), ('wer', ['谁'])]),

# ---------------------------------------------------------- Studium organisieren
 dict(sz='uni_organisation', de='Ich studiere Informatik.', zh='我学电脑。',
      py='wǒ xué diànnǎo.',
      hinweis='Wörtlich „ich lerne Computer". 计算机科学 wäre die Fachbezeichnung — im Gespräch sagt das kaum jemand.',
      neu=['电脑', '学'], lookup=False, ansprache=None,
      konzepte=[('lernen', ['学']), ('computer', ['电脑'])]),
 dict(sz='uni_organisation', de='In welchem Semester bist du?', zh='你几年级？',
      py='nǐ jǐ niánjí?',
      hinweis='Gefragt wird nach dem Studienjahr, nicht nach dem Semester — 一年级 bis 四年级.',
      neu=['年级'], lookup=False, ansprache=None,
      konzepte=[('studienjahr', ['年级'])]),
 dict(sz='uni_organisation', de='Wann ist die Anmeldefrist?', zh='几号以前要报名？',
      py='jǐ hào yǐqián yào bàomíng?',
      hinweis=None, neu=['以前', '报名'], lookup=False, ansprache=None,
      konzepte=[('anmelden', ['报名']), ('wann', ['几号'])]),
 dict(sz='uni_organisation', de='Wie viele Kurse brauche ich?', de_alt='Wie viele Credits brauche ich?',
      zh='我要上几个课？', py='wǒ yào shàng jǐ ge kè?',
      hinweis='Gerechnet wird zwar in 学分 („Credits"), gefragt wird aber nach der Zahl der Kurse — das ist die Angabe, mit der man planen kann.',
      neu=[], lookup=False, ansprache=None,
      konzepte=[('wie_viele', ['几个']), ('kurs', ['课'])]),

# ---------------------------------------------------------- Prüfungen
 dict(sz='uni_pruefung', de='Ich habe morgen eine Prüfung.', zh='我明天考试。',
      py='wǒ míngtiān kǎoshì.',
      hinweis=None, neu=['考试'], lookup=False, ansprache=None,
      konzepte=[('morgen', ['明天']), ('pruefung', ['考试'])]),
 dict(sz='uni_pruefung', de='Ich habe die Prüfung bestanden.', zh='我考试过了。',
      py='wǒ kǎoshì guò le.',
      hinweis=None, neu=['过'], lookup=False, ansprache=None,
      konzepte=[('pruefung', ['考试']), ('bestanden', ['过'])]),
 dict(sz='uni_pruefung', de='Ich habe die Hausaufgabe vergessen.', zh='我忘了作业。',
      py='wǒ wàng le zuòyè.',
      hinweis=None, neu=['忘', '作业'], lookup=False, ansprache=None,
      konzepte=[('vergessen', ['忘']), ('hausaufgabe', ['作业'])]),
 dict(sz='uni_pruefung', de='Ich brauche mehr Zeit für die Hausarbeit.', zh='我要多一点时间。',
      py='wǒ yào duō yìdiǎn shíjiān.',
      hinweis=None, neu=[], lookup=False, ansprache=None,
      konzepte=[('mehr', ['多']), ('zeit', ['时间'])]),

# ---------------------------------------------------------- Zusammen lernen
 dict(sz='uni_zusammen', de='Können wir zusammen lernen?', zh='我们一起学，好吗？',
      py='wǒmen yìqǐ xué, hǎo ma?',
      hinweis=None, neu=[], lookup=False, ansprache=None,
      konzepte=[('zusammen', ['一起']), ('lernen', ['学'])]),
 dict(sz='uni_zusammen', de='Kann ich dieses Buch ausleihen?', zh='这本书可以借吗？',
      py='zhè běn shū kěyǐ jiè ma?',
      hinweis=None, neu=['本', '借'], lookup=False, ansprache=None,
      konzepte=[('buch', ['书']), ('ausleihen', ['借'])]),
]
