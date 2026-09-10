# -*- coding: utf-8 -*-
"""Vokabeln, die die sechs uebersetzten Kategorien neu einfuehren (2026-08-22).

Genau die Woerter, die in den `neu=[...]`-Angaben der Uebersetzungsdateien
stehen - der Pruefer haelt beides zusammen: was hier fehlt, meldet er als
"NICHT DEKLARIERT".

`kat` sagt, zu welchem Paket ein Wort gehoert. Gebraucht wird das fuer die
Wortliste je Kategorie und fuer die spaetere Vertonung, die wissen muss,
welche Woerter gebuendelt aufgenommen werden.

**Jedes Wort steht genau EINMAL hier, auch wenn zwei Kategorien es
einfuehren.** 订, 车, 位子, 衣服, 电梯, 付, 住, 坏 und 算 sind in zwei
Uebersetzungsdateien deklariert - hier bekommen sie trotzdem nur einen
Eintrag, unter der Kategorie, die sie fuer die Vertonung buendeln soll.

Das kostet nichts, weil die Wortliste je Kategorie aus den SAETZEN zerlegt
wird und nicht aus dieser Spalte (siehe `useCategoryVocab.ts`): ein Wort,
das in Travel-Saetzen vorkommt, erscheint in Travels Wortliste, egal welche
`category` in der Datenbank steht. Der Import wuerde einen zweiten Eintrag
ohnehin verwerfen - er gleicht ueber `hanzi` ab.
"""

WOERTER = [
    # ---------------------------------------------------------- Drinking + Dining
    dict(kat='drinking_dining', hanzi='位子',   pinyin='wèizi',    de='Platz, Sitzplatz'),
    dict(kat='drinking_dining', hanzi='订',     pinyin='dìng',     de='reservieren, bestellen'),
    dict(kat='drinking_dining', hanzi='菜单',   pinyin='càidān',   de='Speisekarte'),
    dict(kat='drinking_dining', hanzi='菜',     pinyin='cài',      de='Gericht, Gemüse'),
    dict(kat='drinking_dining', hanzi='点菜',   pinyin='diǎn cài', de='bestellen'),
    dict(kat='drinking_dining', hanzi='好吃',   pinyin='hǎochī',   de='lecker'),
    dict(kat='drinking_dining', hanzi='杯',     pinyin='bēi',      de='Glas, Tasse (Zählwort)'),
    dict(kat='drinking_dining', hanzi='饭馆',   pinyin='fànguǎn',  de='Restaurant'),
    dict(kat='drinking_dining', hanzi='慢',     pinyin='màn',      de='langsam'),
    dict(kat='drinking_dining', hanzi='分开',   pinyin='fēnkāi',   de='getrennt, trennen'),
    dict(kat='drinking_dining', hanzi='付',     pinyin='fù',       de='bezahlen'),
    dict(kat='drinking_dining', hanzi='算',     pinyin='suàn',     de='rechnen, zählen als'),
    dict(kat='drinking_dining', hanzi='肉',     pinyin='ròu',      de='Fleisch'),

    # --- Ausbau-Welle 2 (2026-08-22): Garkueche, Schaerfe, Teilen, Getraenke
    dict(kat='drinking_dining', hanzi='一下', pinyin='yíxià', de='kurz, mal'),
    dict(kat='drinking_dining', hanzi='一样', pinyin='yíyàng', de='gleich, dasselbe'),
    dict(kat='drinking_dining', hanzi='份', pinyin='fèn', de='Portion (Zählwort)'),
    dict(kat='drinking_dining', hanzi='位', pinyin='wèi', de='Person (höfliches Zählwort)'),
    dict(kat='drinking_dining', hanzi='冰', pinyin='bīng', de='Eis; kalt'),
    dict(kat='drinking_dining', hanzi='别人', pinyin='biérén', de='die anderen, andere Leute'),
    dict(kat='drinking_dining', hanzi='咸', pinyin='xián', de='salzig'),
    dict(kat='drinking_dining', hanzi='图片', pinyin='túpiàn', de='Bild, Foto'),
    dict(kat='drinking_dining', hanzi='多久', pinyin='duōjiǔ', de='wie lange'),
    dict(kat='drinking_dining', hanzi='大家', pinyin='dàjiā', de='alle, jeder'),
    dict(kat='drinking_dining', hanzi='打包', pinyin='dǎbāo', de='einpacken, mitnehmen'),
    dict(kat='drinking_dining', hanzi='新鲜', pinyin='xīnxiān', de='frisch'),
    dict(kat='drinking_dining', hanzi='瓶', pinyin='píng', de='Flasche (Zählwort)'),
    dict(kat='drinking_dining', hanzi='碗', pinyin='wǎn', de='Schüssel (Zählwort)'),
    dict(kat='drinking_dining', hanzi='糖', pinyin='táng', de='Zucker'),
    dict(kat='drinking_dining', hanzi='能', pinyin='néng', de='können'),
    dict(kat='drinking_dining', hanzi='请客', pinyin='qǐngkè', de='einladen (und zahlen)'),
    dict(kat='drinking_dining', hanzi='辣', pinyin='là', de='scharf'),
    dict(kat='drinking_dining', hanzi='这些', pinyin='zhèxiē', de='diese (Plural)'),
    dict(kat='drinking_dining', hanzi='饱', pinyin='bǎo', de='satt'),

    # ---------------------------------------------------------- Hotel + Accommodation
    dict(kat='hotel_accommodation', hanzi='房间', pinyin='fángjiān', de='Zimmer'),
    dict(kat='hotel_accommodation', hanzi='天',   pinyin='tiān',     de='Tag'),
    dict(kat='hotel_accommodation', hanzi='住',   pinyin='zhù',      de='wohnen, übernachten'),
    dict(kat='hotel_accommodation', hanzi='早饭', pinyin='zǎofàn',   de='Frühstück'),
    dict(kat='hotel_accommodation', hanzi='网',   pinyin='wǎng',     de='Netz, WLAN'),
    dict(kat='hotel_accommodation', hanzi='密码', pinyin='mìmǎ',     de='Passwort'),
    dict(kat='hotel_accommodation', hanzi='电梯', pinyin='diàntī',   de='Aufzug'),
    dict(kat='hotel_accommodation', hanzi='干净', pinyin='gānjìng',  de='sauber'),
    dict(kat='hotel_accommodation', hanzi='空调', pinyin='kōngtiáo', de='Klimaanlage'),
    dict(kat='hotel_accommodation', hanzi='坏',   pinyin='huài',     de='kaputt, schlecht'),
    dict(kat='hotel_accommodation', hanzi='钥匙', pinyin='yàoshi',   de='Schlüssel'),
    dict(kat='hotel_accommodation', hanzi='车',   pinyin='chē',      de='Auto, Fahrzeug'),

    # ---------------------------------------------------------- Moving + Settling
    dict(kat='moving_settling', hanzi='房子',   pinyin='fángzi',    de='Haus, Wohnung'),
    dict(kat='moving_settling', hanzi='房租',   pinyin='fángzū',    de='Miete'),
    dict(kat='moving_settling', hanzi='洗',     pinyin='xǐ',        de='waschen'),
    dict(kat='moving_settling', hanzi='衣服',   pinyin='yīfu',      de='Kleidung'),
    dict(kat='moving_settling', hanzi='押金',   pinyin='yājīn',     de='Kaution'),
    dict(kat='moving_settling', hanzi='签',     pinyin='qiān',      de='unterschreiben'),
    dict(kat='moving_settling', hanzi='合同',   pinyin='hétong',    de='Vertrag'),
    dict(kat='moving_settling', hanzi='上星期', pinyin='shàng xīngqī', de='letzte Woche'),
    dict(kat='moving_settling', hanzi='搬家',   pinyin='bānjiā',    de='umziehen'),
    dict(kat='moving_settling', hanzi='派出所', pinyin='pàichūsuǒ', de='Polizeiposten (im Viertel)'),
    dict(kat='moving_settling', hanzi='登记',   pinyin='dēngjì',    de='sich anmelden, registrieren'),
    dict(kat='moving_settling', hanzi='住址',   pinyin='zhùzhǐ',    de='Adresse'),
    dict(kat='moving_settling', hanzi='证明',   pinyin='zhèngmíng', de='Bestätigung, Nachweis'),
    dict(kat='moving_settling', hanzi='电费',   pinyin='diànfèi',   de='Stromkosten'),
    dict(kat='moving_settling', hanzi='邻居',   pinyin='línjū',     de='Nachbar'),
    dict(kat='moving_settling', hanzi='暖气',   pinyin='nuǎnqì',    de='Heizung'),
    dict(kat='moving_settling', hanzi='师傅',   pinyin='shīfu',     de='Meister (Anrede für Handwerker)'),

    # ---------------------------------------------------------- Shopping + Haggling
    dict(kat='shopping_haggling', hanzi='礼物', pinyin='lǐwù',     de='Geschenk'),
    dict(kat='shopping_haggling', hanzi='关门', pinyin='guānmén',  de='schließen (Laden)'),
    dict(kat='shopping_haggling', hanzi='试',   pinyin='shì',      de='probieren, versuchen'),
    dict(kat='shopping_haggling', hanzi='中号', pinyin='zhōng hào', de='Größe M'),
    dict(kat='shopping_haggling', hanzi='别的', pinyin='bié de',   de='andere, ein anderes'),
    dict(kat='shopping_haggling', hanzi='颜色', pinyin='yánsè',    de='Farbe'),
    dict(kat='shopping_haggling', hanzi='贵',   pinyin='guì',      de='teuer'),
    dict(kat='shopping_haggling', hanzi='便宜', pinyin='piányi',   de='billig'),
    dict(kat='shopping_haggling', hanzi='卡',   pinyin='kǎ',       de='Karte'),
    dict(kat='shopping_haggling', hanzi='能',   pinyin='néng',     de='können'),
    dict(kat='shopping_haggling', hanzi='只',   pinyin='zhǐ',      de='nur'),
    dict(kat='shopping_haggling', hanzi='袋子', pinyin='dàizi',    de='Tüte, Beutel'),
    dict(kat='shopping_haggling', hanzi='退',   pinyin='tuì',      de='zurückgeben, erstatten'),

    # ---------------------------------------------------------- Travel + Transportation
    dict(kat='travel_transportation', hanzi='张',     pinyin='zhāng',   de='Zählwort für Flaches (Tickets, Blätter)'),
    dict(kat='travel_transportation', hanzi='票',     pinyin='piào',    de='Fahrkarte, Ticket'),
    dict(kat='travel_transportation', hanzi='北京',   pinyin='Běijīng', de='Peking'),
    dict(kat='travel_transportation', hanzi='上海',   pinyin='Shànghǎi', de='Shanghai'),
    dict(kat='travel_transportation', hanzi='机场',   pinyin='jīchǎng', de='Flughafen'),
    dict(kat='travel_transportation', hanzi='租',     pinyin='zū',      de='mieten'),
    dict(kat='travel_transportation', hanzi='火车站', pinyin='huǒchēzhàn', de='Bahnhof'),
    dict(kat='travel_transportation', hanzi='晚点',   pinyin='wǎndiǎn', de='Verspätung haben'),
    dict(kat='travel_transportation', hanzi='站台',   pinyin='zhàntái', de='Bahnsteig, Gleis'),
    dict(kat='travel_transportation', hanzi='换',     pinyin='huàn',    de='wechseln, tauschen'),
    dict(kat='travel_transportation', hanzi='公交车站', pinyin='gōngjiāochēzhàn', de='Bushaltestelle'),
    dict(kat='travel_transportation', hanzi='路',     pinyin='lù',      de='Weg; Buslinie'),
    dict(kat='travel_transportation', hanzi='办',     pinyin='bàn',     de='erledigen, abwickeln'),
    dict(kat='travel_transportation', hanzi='登机',   pinyin='dēngjī',  de='einchecken (Flug)'),
    dict(kat='travel_transportation', hanzi='行李',   pinyin='xíngli',  de='Gepäck'),
    dict(kat='travel_transportation', hanzi='放',     pinyin='fàng',    de='legen, abstellen'),
    dict(kat='travel_transportation', hanzi='到',     pinyin='dào',     de='ankommen, bis'),
    dict(kat='travel_transportation', hanzi='赶上',   pinyin='gǎnshàng', de='erwischen, rechtzeitig erreichen'),
    dict(kat='travel_transportation', hanzi='飞机',   pinyin='fēijī',   de='Flugzeug'),
    dict(kat='travel_transportation', hanzi='明年',   pinyin='míngnián', de='nächstes Jahr'),
    dict(kat='travel_transportation', hanzi='去年',   pinyin='qùnián',  de='letztes Jahr'),
    dict(kat='travel_transportation', hanzi='意大利', pinyin='Yìdàlì',  de='Italien'),
    dict(kat='travel_transportation', hanzi='法国',   pinyin='Fǎguó',   de='Frankreich'),
    dict(kat='travel_transportation', hanzi='码头',   pinyin='mǎtóu',   de='Hafen, Anlegestelle'),
    dict(kat='travel_transportation', hanzi='请问',   pinyin='qǐngwèn', de='darf ich fragen'),
    dict(kat='travel_transportation', hanzi='迷路',   pinyin='mílù',    de='sich verlaufen'),
    dict(kat='travel_transportation', hanzi='走路',   pinyin='zǒulù',   de='zu Fuß gehen'),
    dict(kat='travel_transportation', hanzi='多久',   pinyin='duōjiǔ',  de='wie lange'),
    dict(kat='travel_transportation', hanzi='超市',   pinyin='chāoshì', de='Supermarkt'),
    dict(kat='travel_transportation', hanzi='地图',   pinyin='dìtú',    de='Karte, Stadtplan'),
    dict(kat='travel_transportation', hanzi='指',     pinyin='zhǐ',     de='zeigen, deuten'),
    dict(kat='travel_transportation', hanzi='带',     pinyin='dài',     de='mitnehmen, hinbringen'),
    dict(kat='travel_transportation', hanzi='一直',   pinyin='yìzhí',   de='geradeaus, die ganze Zeit'),
    dict(kat='travel_transportation', hanzi='左',     pinyin='zuǒ',     de='links'),
    dict(kat='travel_transportation', hanzi='右',     pinyin='yòu',     de='rechts'),
    dict(kat='travel_transportation', hanzi='转',     pinyin='zhuǎn',   de='abbiegen, drehen'),
    dict(kat='travel_transportation', hanzi='第二',   pinyin='dì èr',   de='zweite(r)'),
    dict(kat='travel_transportation', hanzi='路口',   pinyin='lùkǒu',   de='Kreuzung, Straßenecke'),
    dict(kat='travel_transportation', hanzi='前面',   pinyin='qiánmiàn', de='vorne, davor'),
    dict(kat='travel_transportation', hanzi='对面',   pinyin='duìmiàn', de='gegenüber'),
    dict(kat='travel_transportation', hanzi='博物馆', pinyin='bówùguǎn', de='Museum'),
    dict(kat='travel_transportation', hanzi='教堂',   pinyin='jiàotáng', de='Kirche'),

    # ---------------------------------------------------------- University + Studying
    dict(kat='university_studying', hanzi='教室',   pinyin='jiàoshì',  de='Klassenraum, Hörsaal'),
    dict(kat='university_studying', hanzi='图书馆', pinyin='túshūguǎn', de='Bibliothek'),
    dict(kat='university_studying', hanzi='上课',   pinyin='shàngkè',  de='Unterricht haben'),
    dict(kat='university_studying', hanzi='课',     pinyin='kè',       de='Kurs, Unterrichtsstunde'),
    dict(kat='university_studying', hanzi='教',     pinyin='jiāo',     de='unterrichten'),
    dict(kat='university_studying', hanzi='学',     pinyin='xué',      de='lernen, studieren'),
    dict(kat='university_studying', hanzi='电脑',   pinyin='diànnǎo',  de='Computer'),
    dict(kat='university_studying', hanzi='年级',   pinyin='niánjí',   de='Studienjahr, Klassenstufe'),
    dict(kat='university_studying', hanzi='以前',   pinyin='yǐqián',   de='vor, früher'),
    dict(kat='university_studying', hanzi='报名',   pinyin='bàomíng',  de='sich anmelden'),
    dict(kat='university_studying', hanzi='考试',   pinyin='kǎoshì',   de='Prüfung'),
    dict(kat='university_studying', hanzi='过',     pinyin='guò',      de='bestehen; vorbei'),
    dict(kat='university_studying', hanzi='忘',     pinyin='wàng',     de='vergessen'),
    dict(kat='university_studying', hanzi='作业',   pinyin='zuòyè',    de='Hausaufgabe'),
    dict(kat='university_studying', hanzi='本',     pinyin='běn',      de='Zählwort für Bücher'),
    dict(kat='university_studying', hanzi='借',     pinyin='jiè',      de='ausleihen'),
]
