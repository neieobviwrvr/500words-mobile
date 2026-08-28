# -*- coding: utf-8 -*-
"""Vokabeln, die beim Uebersetzen von Smalltalk und Umfeld dazukamen.

Diese Welle war eine Uebersetzung fester deutscher Saetze - die neuen Woerter
sind also nicht gewaehlt, sondern noetig gewesen: ohne 结婚 kein "Bist du
verheiratet?", ohne 足球 kein "Ich spiele gern Fussball".

Sie verteilen sich auf drei Kategorien (grundwortschatz, smalltalk_socialising,
culture_immersion) - deshalb traegt jeder Eintrag seine eigene in `kat`.
"""

WOERTER = [
    # --- Grundwortschatz
    dict(kat='grundwortschatz', hanzi='国',     pinyin='guó',     de='Land, Staat'),
    dict(kat='grundwortschatz', hanzi='多大',   pinyin='duō dà',  de='wie alt'),
    dict(kat='grundwortschatz', hanzi='高兴',   pinyin='gāoxìng', de='sich freuen, erfreut'),
    dict(kat='grundwortschatz', hanzi='拜拜',   pinyin='báibái',  de='tschüss (vom englischen bye-bye)'),
    dict(kat='grundwortschatz', hanzi='一会儿', pinyin='yíhuìr',  de='gleich, in Kürze'),
    dict(kat='grundwortschatz', hanzi='安娜',   pinyin='Ānnà',    de='Anna (Vorname, Beispiel)'),

    # --- Smalltalk
    dict(kat='smalltalk_socialising', hanzi='结婚', pinyin='jiéhūn',  de='heiraten, verheiratet sein'),
    dict(kat='smalltalk_socialising', hanzi='或者', pinyin='huòzhě',  de='oder'),
    dict(kat='smalltalk_socialising', hanzi='柏林', pinyin='Bólín',   de='Berlin'),

    # --- Kultur
    dict(kat='culture_immersion', hanzi='历史', pinyin='lìshǐ',   de='Geschichte'),
    dict(kat='culture_immersion', hanzi='足球', pinyin='zúqiú',   de='Fußball'),
    dict(kat='culture_immersion', hanzi='踢',   pinyin='tī',      de='treten, kicken (Fußball spielen)'),
    dict(kat='culture_immersion', hanzi='爬山', pinyin='páshān',  de='wandern, bergsteigen'),
    dict(kat='culture_immersion', hanzi='海边', pinyin='hǎibiān', de='Strand, Meeresküste'),
]
