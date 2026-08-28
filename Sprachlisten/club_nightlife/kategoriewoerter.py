# -*- coding: utf-8 -*-
"""Die Vokabeln, die Club + Nightlife selbst mitbringt.

Die 350 Woerter des gefuehrten Kurses stehen in `chinesisch_vocab` mit Pinyin
und Bedeutung. Diese 22 hier fuehren die Club-Saetze zusaetzlich ein - in den
Wellen-Dateien steht bisher nur das Zeichen (`neu=['干杯']`), was fuer die
Pruefung reicht, fuer eine Wortliste aber nicht.

Nutzer-Vorgabe 2026-08-21: die Wortliste zeigt ALLE Woerter einer Kategorie
mit Pinyin, Ton und Uebersetzung - "weil wir ja nicht wissen, ob jeder User
Woerter schon gelernt hat im richtigen Pfad oder ob sie direkt Saetze lernen
wollen". Ein Speed-Run-Nutzer hat auch die Kurswoerter nie gesehen.

`hanzi` ist zugleich der Schluessel, ueber den beim Import abgeglichen wird -
gleiches Verfahren wie bei chinesisch_vocab.
"""

WOERTER = [
    # --- Trinken und Anstossen
    dict(hanzi='干杯',   pinyin='gānbēi',    de='Prost (wörtlich: Glas leeren)'),
    dict(hanzi='随意',   pinyin='suíyì',     de='wie du magst (Antwort auf 干杯)'),
    dict(hanzi='酒',     pinyin='jiǔ',       de='Alkohol'),

    # --- An der Bar / Einlass
    dict(hanzi='吵',     pinyin='chǎo',      de='laut'),
    dict(hanzi='用',     pinyin='yòng',      de='benutzen'),
    dict(hanzi='要',     pinyin='yào',       de='wollen, brauchen'),
    dict(hanzi='护照',   pinyin='hùzhào',    de='Pass'),

    # --- Karaoke
    dict(hanzi='唱',     pinyin='chàng',     de='singen'),
    dict(hanzi='歌',     pinyin='gē',        de='Lied'),
    dict(hanzi='先',     pinyin='xiān',      de='zuerst'),
    dict(hanzi='得',     pinyin='de',        de='Partikel nach dem Verb: „…und zwar wie"'),

    # --- Näher kommen
    dict(hanzi='地方',   pinyin='dìfang',    de='Ort, Platz'),
    dict(hanzi='还是',   pinyin='háishi',    de='oder (in Fragen)'),
    dict(hanzi='就',     pinyin='jiù',       de='schon, gleich'),

    # --- Wo schlafen wir
    dict(hanzi='酒店',   pinyin='jiǔdiàn',   de='Hotel'),
    dict(hanzi='远',     pinyin='yuǎn',      de='weit'),

    # --- Freunde verloren
    dict(hanzi='电',     pinyin='diàn',      de='Strom, Akku'),
    dict(hanzi='充电',   pinyin='chōngdiàn', de='aufladen'),
    dict(hanzi='见',     pinyin='jiàn',      de='sich treffen, sehen'),

    # --- Aus den Nachschlage-Saetzen
    #
    # Diese sechs deklariert keine Welle als `neu`: die Pruefung in
    # pruefe_saetze.py nimmt Nachschlage-Saetze aus, weil sie bewusst
    # Vokabeln ausserhalb des gelehrten Wortschatzes benutzen duerfen.
    # Fuer die WORTLISTE brauchen sie trotzdem einen Eintrag - sonst steht
    # in "Bitte rufen Sie die Polizei" ein Wort, das nirgends erklaert wird.
    dict(hanzi='警察',     pinyin='jǐngchá',   de='Polizei'),
    dict(hanzi='烦',       pinyin='fán',       de='nerven, stören'),
    dict(hanzi='一直',     pinyin='yìzhí',     de='die ganze Zeit'),
    dict(hanzi='假装',     pinyin='jiǎzhuāng', de='so tun als ob'),
    dict(hanzi='走开',     pinyin='zǒukāi',    de='weggehen'),
    dict(hanzi='你们',     pinyin='nǐmen',     de='ihr'),
    dict(hanzi='男女朋友', pinyin='nán nǚ péngyou', de='fester Freund oder feste Freundin'),

    # --- Komplimente
    dict(hanzi='好看',   pinyin='hǎokàn',    de='schön anzusehen'),
    dict(hanzi='头发',   pinyin='tóufa',     de='Haare'),
    dict(hanzi='声音',   pinyin='shēngyīn',  de='Stimme'),
    dict(hanzi='气质',   pinyin='qìzhì',     de='Klasse, Haltung, Ausstrahlung'),
]
