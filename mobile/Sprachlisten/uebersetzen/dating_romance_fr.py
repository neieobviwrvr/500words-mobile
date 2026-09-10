# -*- coding: utf-8 -*-
"""dating_romance auf Französisch: die ersten zwei Saetze der Kategorie.

Sie standen bis zum 2026-08-29 nur auf Chinesisch und wanderten dann ins
Deutsche (Simons Entscheidung: nachtragen statt loeschen, siehe
zusammenfuehren/entscheidungen.py). Damit fehlten sie hier.

**dating_romance bleibt trotzdem eine der vier Kategorien ohne echten
Content** (neben finding_friends, love_relationship und job_work) - zwei
Saetze sind kein Bestand, sondern ein Anfang. Fuer diese Kategorien fehlt
laut CLAUDE.md die Cross-Referenzierung ueber Reiseforen.

**Chinesisch kommt hier mit einem Wort aus**, wo europaeische Sprachen zwei
brauchen: 男女朋友 deckt Freund UND Freundin ab. Die Uebersetzungen muessen
beide nennen.

`verb_cluster` leer. **Nicht von Muttersprachlern geprueft.**
"""

SAETZE = [
 dict(de='Hast du einen festen Freund oder eine feste Freundin?', fr='Tu as un copain ou une copine ?',
      k=[('fester_partner', ['copain', 'copine'])]),
 dict(de='Wir sind gerade zusammen.', fr='On est ensemble.',
      k=[('daten', ['ensemble', 'on est ensemble'])]),
]

AUSGELASSEN = []
