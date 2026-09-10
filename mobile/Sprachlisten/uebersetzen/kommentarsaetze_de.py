# -*- coding: utf-8 -*-
"""Grundwortschatz: neue Situation "Kommentarsätze" (2026-08-29, Simons Auftrag).

Kurze reaktive Aeusserungen, die ein Gespraech am Laufen halten, ohne einen
vollen Satz zu brauchen - "Wirklich?", "Stimmt.", "Schade!". Bewusst
GETRENNT von den bestehenden Grundwortschatz-Situationen:
  - `hoeflichkeit` deckt Danke/Bitte/Entschuldigung/Ja/Nein/Kein Problem ab -
    Hoeflichkeitsformeln, keine Kommentare.
  - `verstaendigen` deckt "Kannst du das wiederholen?" ab - Reparatur eines
    Missverstaendnisses, kein spontaner Kommentar.
Keine Ueberschneidung mit vorhandenen Saetzen geprueft (siehe
ERLAUBTE_DUBLETTEN, hier leer).
"""

KATEGORIE = 'grundwortschatz'
SZENARIO = 'kommentar'

SAETZE = [
    dict(de='Wirklich?', k=[('wirklich', ['wirklich'])]),
    dict(de='Cool!', k=[('cool', ['cool'])]),
    dict(de='Macht nichts.', k=[('macht_nichts', ['macht nichts'])]),
    dict(de='Genau!', k=[('genau', ['genau'])]),
    dict(de='Stimmt.', k=[('stimmt', ['stimmt'])]),
    dict(de='Schade!', k=[('schade', ['schade'])]),
    dict(de='Na klar!', k=[('na_klar', ['na klar', 'klar'])]),
    dict(de='Auf keinen Fall!', k=[('auf_keinen_fall', ['auf keinen fall', 'keinen fall'])]),
]

ERLAUBTE_DUBLETTEN = set()
