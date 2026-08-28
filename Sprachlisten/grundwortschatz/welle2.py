# -*- coding: utf-8 -*-
"""Grundwortschatz Welle 2: die chinesische Fassung der Alt-Saetze.

Der deutsche Grundwortschatz hatte 36 Saetze, bevor Welle 1 ihn auf 60
brachte. Chinesisch deckte davon nur einen Teil - hier kommt der Rest:
Uhrzeit, Verabredungen, Preise, Toilette.

Anders als Welle 1 sind das KEINE neuen deutschen Saetze. Der deutsche Text
steht schon in phrasebook_master; hier entsteht nur die chinesische Zeile
dazu. `UEBERSETZUNG = True` stellt die Pruefung entsprechend milder.

**Drei Saetze bekommen bewusst einen anderen deutschen Gloss** als in
phrasebook_master - dieselbe Regel, nach der dort schon
"Ich spreche ein bisschen Chinesisch" statt "... Deutsch" steht: wo der
deutsche Satz seine eigene Sprache oder Waehrung nennt, waere die woertliche
Uebersetzung im Zielland sinnlos. `de_alt` haelt fest, aus welchem Satz er
hervorgeht, damit der Abgleich nicht doppelt anlegt.

**"Guten Tag!" fehlt absichtlich.** Chinesisch kennt keine Tageszeit-Form
zwischen 早上好 und 晚上好 - 你好 deckt sie ab und steht schon als "Hallo!"
in der Tabelle. Ein zweiter Eintrag mit demselben Zeichen waere eine
Karteikarte, die sich selbst abfragt.
"""

UEBERSETZUNG = True

GRUNDLAGE = True     # siehe ist_grundlage() im Pruefer

SAETZE = [
# ============================================================ Zeit sagen
 dict(sz='uhrzeit', de='Wie spät ist es?', zh='现在几点？', py='xiànzài jǐ diǎn?',
      hinweis=None, neu=[], lookup=False, ansprache=None,
      konzepte=[('jetzt', ['现在']), ('wie_viel_uhr', ['几点'])]),
 dict(sz='uhrzeit', de='Es ist drei Uhr.', zh='现在三点。', py='xiànzài sān diǎn.',
      hinweis=None, neu=[], lookup=False, ansprache=None,
      konzepte=[('drei_uhr', ['三点'])]),
 dict(sz='uhrzeit', de='Um wie viel Uhr beginnt der Film?', zh='电影几点开始？',
      py='diànyǐng jǐ diǎn kāishǐ?',
      hinweis='Die Zeitangabe steht im Chinesischen vor dem Verb, nie dahinter — erst wann, dann was.',
      neu=[], lookup=False, ansprache=None,
      konzepte=[('film', ['电影']), ('wie_viel_uhr', ['几点']), ('beginnen', ['开始'])]),
 dict(sz='uhrzeit', de='Welcher Tag ist heute?', zh='今天星期几？', py='jīntiān xīngqī jǐ?',
      hinweis=None, neu=[], lookup=False, ansprache=None,
      konzepte=[('heute', ['今天']), ('wochentag', ['星期几', '星期'])]),
 dict(sz='uhrzeit', de='Heute ist Montag.', zh='今天星期一。', py='jīntiān xīngqī yī.',
      hinweis='Die Wochentage sind durchnummeriert: 星期一 ist der „Wochen-Erste", also Montag — bis 星期六. Nur der Sonntag heißt anders (星期天).',
      neu=[], lookup=False, ansprache=None,
      konzepte=[('heute', ['今天']), ('montag', ['星期一'])]),

# ============================================================ Sich verabreden
 dict(sz='termin', de='Wann hast du Zeit?', zh='你什么时候有时间？',
      py='nǐ shénme shíhou yǒu shíjiān?',
      hinweis=None, neu=[], lookup=False, ansprache=None,
      konzepte=[('wann', ['什么时候']), ('zeit_haben', ['有时间', '时间'])]),
 dict(sz='termin', de='Können wir uns nächste Woche treffen?', zh='我们下星期见，好吗？',
      py='wǒmen xià xīngqī jiàn, hǎo ma?',
      hinweis='„…，好吗？" hängt man an eine Aussage, um daraus einen Vorschlag zu machen — wörtlich „ist das gut?". Höflicher als eine direkte Frage.',
      neu=['见'], lookup=False, ansprache=None,
      konzepte=[('naechste_woche', ['下星期']), ('treffen', ['见'])]),
 dict(sz='termin', de='Wann hast du Geburtstag?', zh='你的生日是什么时候？',
      py='nǐ de shēngrì shì shénme shíhou?',
      hinweis=None, neu=[], lookup=False, ansprache=None,
      konzepte=[('geburtstag', ['生日']), ('wann', ['什么时候'])]),
 dict(sz='termin', de='Mein Geburtstag ist im März.', zh='我的生日在三月。',
      py='wǒ de shēngrì zài sānyuè.',
      hinweis='Die Monate sind wie die Wochentage nummeriert: 三月 ist schlicht der „dritte Monat". Wer bis zwölf zählen kann, kennt alle Monatsnamen.',
      neu=[], lookup=False, ansprache=None,
      konzepte=[('geburtstag', ['生日']), ('maerz', ['三月'])]),
 dict(sz='termin', de='Ich habe morgen keine Zeit.', zh='我明天没有时间。',
      py='wǒ míngtiān méiyǒu shíjiān.',
      hinweis=None, neu=[], lookup=False, ansprache=None,
      konzepte=[('morgen', ['明天']), ('keine_zeit', ['没有时间', '没有'])]),
 dict(sz='termin', de='Ich habe einen Termin um 10 Uhr.', zh='我十点有事。',
      py='wǒ shí diǎn yǒu shì.',
      hinweis='有事 („etwas vorhaben") ist die übliche Absage. Es nennt bewusst nicht, was man vorhat — nachzufragen gilt als unhöflich.',
      neu=['事'], lookup=False, ansprache=None,
      konzepte=[('zehn_uhr', ['十点']), ('termin', ['有事', '事'])]),

# ============================================================ Zahlen und Preise
 dict(sz='zahlen', de='Wie viel kostet das?', zh='这个多少钱？', py='zhège duōshao qián?',
      hinweis=None, neu=[], lookup=False, ansprache=None,
      konzepte=[('das', ['这个']), ('wieviel', ['多少']), ('geld', ['钱'])]),
 dict(sz='zahlen', de='Das kostet zehn Yuan.', de_alt='Das kostet zehn Euro.',
      zh='这个十块钱。', py='zhège shí kuài qián.',
      hinweis='Gesprochen zählt man in 块, geschrieben steht 元 — dieselbe Währung, zwei Wörter. Wer 元 sagt, klingt wie ein Preisschild.',
      neu=[], lookup=False, ansprache=None,
      konzepte=[('zehn', ['十']), ('geld', ['块', '钱'])]),
 dict(sz='zahlen', de='Ich möchte zahlen.', de_alt='Ich hätte gern die Rechnung.',
      zh='买单！', py='mǎidān!',
      hinweis='Man ruft es quer durch das Lokal, oft mit erhobener Hand — das ist normal und nicht unhöflich. Eine Rechnung an den Tisch gebracht zu bekommen, ist unüblich.',
      neu=['买单'], lookup=False, ansprache=None,
      konzepte=[('zahlen', ['买单', '买'])]),

# ============================================================ Wenn's drauf ankommt
 dict(sz='notlage', de='Wo ist die Toilette?', zh='洗手间在哪里？', py='xǐshǒujiān zài nǎli?',
      hinweis=None, neu=[], lookup=False, ansprache=None,
      konzepte=[('toilette', ['洗手间']), ('wo', ['哪里'])]),
]
