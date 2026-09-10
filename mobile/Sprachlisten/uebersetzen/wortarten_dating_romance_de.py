# -*- coding: utf-8 -*-
"""Wort-fuer-Wort-Tagging fuer phrasebook_master/dating_romance (Deutsch).

Nur 2 Saetze - die Kategorie hat sonst nichts (siehe CLAUDE.md). Erste
Konjunktion im Bestand: "oder" in Satz 512.
"""

TAGS = [
    {"id": 512, "tags": [
        {"w": "Hast", "c": "v"}, {"w": "du", "c": None}, {"w": "einen", "c": None},
        {"w": "festen", "c": "a"}, {"w": "Freund", "c": "n"}, {"w": "oder", "c": "k"},
        {"w": "eine", "c": None}, {"w": "feste", "c": "a"}, {"w": "Freundin?", "c": "n"},
    ]},  # Hast du einen festen Freund oder eine feste Freundin?
    {"id": 513, "tags": [
        {"w": "Wir", "c": None}, {"w": "sind", "c": "v"}, {"w": "gerade", "c": None}, {"w": "zusammen.", "c": None},
    ]},  # Wir sind gerade zusammen.
]
