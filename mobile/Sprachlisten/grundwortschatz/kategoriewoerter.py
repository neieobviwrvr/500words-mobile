# -*- coding: utf-8 -*-
"""Vokabeln, die der Grundwortschatz auf Chinesisch neu einfuehrt.

Sieben Woerter, die der Kurs nicht lehrt, aber fuer die Grundlagen noetig sind.
`kat` ist immer grundwortschatz - die Woerter gehoeren zum freien Teil, nicht
zu einer Kaufkategorie.
"""

WOERTER = [
    dict(kat='grundwortschatz', hanzi='一共',   pinyin='yígòng',   de='zusammen, insgesamt'),
    dict(kat='grundwortschatz', hanzi='出口',   pinyin='chūkǒu',   de='Ausgang'),
    dict(kat='grundwortschatz', hanzi='丢',     pinyin='diū',      de='verlieren, verloren gehen'),
    dict(kat='grundwortschatz', hanzi='第一次', pinyin='dì yī cì', de='zum ersten Mal'),
    dict(kat='grundwortschatz', hanzi='意思',   pinyin='yìsi',     de='Bedeutung, Sinn'),
]

# Welle 2: fuer die Uhrzeit-/Preis-Saetze
WOERTER += [
    dict(kat='grundwortschatz', hanzi='事',   pinyin='shì',    de='Sache, etwas vorhaben'),
    dict(kat='grundwortschatz', hanzi='买单', pinyin='mǎidān', de='zahlen, die Rechnung bitte'),
]
