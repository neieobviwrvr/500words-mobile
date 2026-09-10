# -*- coding: utf-8 -*-
"""Vokabeln, die Health + Emergency selbst mitbringt.

Die Kurswoerter stehen schon in `chinesisch_vocab` (category = null). Diese
hier tauchen erst in den Kategorie-Saetzen auf und werden sonst nirgends
erklaert - ohne Eintrag stuende in der Wortliste ein Wort ohne Bedeutung.

Gleiches Format wie club_nightlife/kategoriewoerter.py, `hanzi` ist der
Abgleichschluessel beim Import.
"""

WOERTER = [
    # --- Im Krankenhaus
    dict(hanzi='挂号',   pinyin='guàhào',    de='sich anmelden (am Schalter im Krankenhaus)'),
    dict(hanzi='预约',   pinyin='yùyuē',     de='Termin, Reservierung'),
    dict(hanzi='西药',   pinyin='xīyào',     de='westliche Medizin'),
    dict(hanzi='药店',   pinyin='yàodiàn',   de='Apotheke'),
    dict(hanzi='多久',   pinyin='duōjiǔ',    de='wie lange'),

    # --- Notfall
    dict(hanzi='救命',   pinyin='jiùmìng',   de='Hilfe! (Notruf, wenn Leben in Gefahr ist)'),
    dict(hanzi='救护车', pinyin='jiùhùchē',  de='Krankenwagen'),
    dict(hanzi='受伤',   pinyin='shòushāng', de='sich verletzen, verletzt sein'),
    dict(hanzi='危险',   pinyin='wēixiǎn',   de='gefährlich'),
    dict(hanzi='最近',   pinyin='zuìjìn',    de='am nächsten (örtlich)'),

    # --- Allergien
    dict(hanzi='过敏',   pinyin='guòmǐn',    de='Allergie, allergisch sein'),
    dict(hanzi='花生',   pinyin='huāshēng',  de='Erdnuss'),
    dict(hanzi='青霉素', pinyin='qīngméisù', de='Penizillin'),
    dict(hanzi='对',     pinyin='duì',       de='gegenüber, gegen (z. B. allergisch gegen)'),
    dict(hanzi='放',     pinyin='fàng',      de='hineintun, hinzugeben'),

    # --- Versicherung und Bezahlen
    dict(hanzi='保险',   pinyin='bǎoxiǎn',   de='Versicherung'),
    dict(hanzi='发票',   pinyin='fāpiào',    de='offizielle Quittung (für die Erstattung)'),
    dict(hanzi='收',     pinyin='shōu',      de='annehmen, entgegennehmen'),
    dict(hanzi='卡',     pinyin='kǎ',        de='Karte (Bank-, Kreditkarte)'),
    dict(hanzi='够',     pinyin='gòu',       de='genug'),
]
