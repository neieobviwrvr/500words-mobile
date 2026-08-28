# -*- coding: utf-8 -*-
"""Welle 4: sechs Saetze aus einer externen KI-Vorschlagsliste (Qwen).

Simon hatte Qwen um Anmach-/Kennenlern-Saetze fuers Nachtleben gebeten (21
Vorschlaege). Gegen den bestehenden Bestand abgeglichen (club_ansprechen,
club_komplimente, club_naeherkommen, smalltalk_person/hobbys, club_ktv,
vorstellung) - die meisten waren Dubletten von bereits vorhandenen Saetzen
(z.B. "加个微信吧" gab es schon, "我送你回家好吗？" ebenso). Sechs waren
echt neu und wurden von Simon ausgewaehlt (2026-08-24):

  3.  这里的音乐不错，对吧？   Die Musik hier ist gut, oder?
  4.  你常来这里吗？          Kommst du oft hierher?
  5.  你是本地人吗？          Bist du von hier?
  9.  你的笑容很甜。          Du hast ein süßes Lächeln.
  11. 和你聊天很开心。        Mit dir zu reden macht Spaß.
  18. 我扫你吧？              Soll ich dich scannen? (QR-Code, WeChat)

ABWEICHUNG vom sonstigen Ablauf: diese sechs Zeilen sind bereits per API
direkt in Supabase eingetragen (`chinesisch_phrasebook` id 463-468,
`chinesisch_vocab` id 515-520) - dieses Skript ist die schriftliche
Doku/Quelle dafuer, kein Import-Schritt mehr auszufuehren. Wer die Zeilen
aendern will, aendert sie HIER UND in Supabase (kein automatischer Abgleich).

NICHT durch `pruefe_saetze.py` (baubar/einfach/rentabel) gelaufen: alle
sechs neu eingefuehrten Woerter (不错, 常, 本地人, 笑容, 开心, 扫) stehen
bisher nur in JE EINEM Satz - verstoesst gegen die "rentabel"-Regel
(mindestens zwei Saetze je neuem Wort). Bewusst so uebernommen, weil Simon
genau diese sechs ausgewaehlt hat; falls die Regel durchgesetzt werden soll,
braucht jedes der sechs Woerter noch einen zweiten Satz.

Felder wie in welle1-3: sz=scenario-Slug, de=deutscher Satz, zh=chinesischer
Satz, py=Pinyin, neu=neu eingefuehrte Vokabeln, konzepte=Pflicht-Konzepte.
"""

SAETZE = [
 dict(sz='club_ansprechen', de='Die Musik hier ist gut, oder?', zh='这里的音乐不错，对吧？', hinweis=None, neu=['不错'], py='zhèlǐ de yīnyuè búcuò, duì ba?',
      lookup=False, ansprache=None, konzepte=[('musik', ['音乐']), ('gut', ['不错'])]),
 dict(sz='club_ansprechen', de='Kommst du oft hierher?', zh='你常来这里吗？', hinweis=None, neu=['常'], py='nǐ cháng lái zhèlǐ ma?',
      lookup=False, ansprache=None, konzepte=[('oft', ['常']), ('hierher', ['这里'])]),
 dict(sz='club_ansprechen', de='Bist du von hier?', zh='你是本地人吗？', hinweis=None, neu=['本地人'], py='nǐ shì běndì rén ma?',
      lookup=False, ansprache=None, konzepte=[('lokal', ['本地人'])]),
 dict(sz='club_komplimente', de='Du hast ein süßes Lächeln.', zh='你的笑容很甜。', hinweis=None, neu=['笑容'], py='nǐ de xiàoróng hěn tián.',
      lookup=False, ansprache=None, konzepte=[('laecheln', ['笑容'])]),
 dict(sz='club_naeherkommen', de='Mit dir zu reden macht Spaß.', zh='和你聊天很开心。', hinweis=None, neu=['开心'], py='hé nǐ liáotiān hěn kāixīn.',
      lookup=False, ansprache=None, konzepte=[('reden', ['聊天']), ('froh', ['开心'])]),
 dict(sz='club_ansprechen', de='Soll ich dich scannen?', zh='我扫你吧？',
      hinweis='WeChat tauscht man per QR-Code, nicht per Nummer: einer zeigt sein Profil mit QR-Code, der andere scannt es mit der Kamera-Funktion in der App. „Ich scanne dich" ist die aktive Art, das direkt zu erledigen, statt nur vorzuschlagen, WeChat auszutauschen.',
      neu=['扫'], py='wǒ sǎo nǐ ba?',
      lookup=False, ansprache=None, konzepte=[('scannen', ['扫'])]),
]

VOKABELN = [
    dict(hanzi='不错', pinyin='búcuò', de='ganz gut, nicht schlecht'),
    dict(hanzi='常', pinyin='cháng', de='oft'),
    dict(hanzi='本地人', pinyin='běndì rén', de='Ortsansässige(r)'),
    dict(hanzi='笑容', pinyin='xiàoróng', de='Lächeln'),
    dict(hanzi='开心', pinyin='kāixīn', de='froh, fröhlich'),
    dict(hanzi='扫', pinyin='sǎo', de='scannen (mit dem Handy)'),
]
