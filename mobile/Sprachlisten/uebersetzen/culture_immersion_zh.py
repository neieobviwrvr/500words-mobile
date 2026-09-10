# -*- coding: utf-8 -*-
"""culture_immersion auf Chinesisch: die fehlende Situation `kultur_ausgehen`.

**Eine ganze Situation fehlte**, nicht einzelne Saetze: `kultur_ausgehen`
hatte auf Chinesisch NULL Eintraege, waehrend Deutsch, Spanisch und
Schwedisch alle vier haben. Im Lektionen-Screen war die Culture-Reihe fuer
Chinesisch dadurch eine Karte kuerzer, ohne dass es jemandem auffiel.

Gefunden am 2026-08-27 beim Nachrechnen der Abdeckung (abdeckung.py).

**Zur Wortwahl:**

  音乐会  ist das Konzert im Sinn von klassischem Konzert/Veranstaltung. Fuer
          ein Rock-/Pop-Konzert sagt man eher 演唱会 - hier bewusst 音乐会,
          weil der deutsche Satz neutral ist und 音乐会 der Oberbegriff.
  门票    Eintrittskarte/Eintritt. 票 allein waere auch verstanden, 门票 ist
          aber genau "Eintritt" und steht schon im Kategoriewortschatz-Umfeld.
  开门    woertlich "die Tuer oeffnen" - so fragt man auf Chinesisch nach
          Oeffnungszeiten, nicht mit einem Wort fuer "oeffnen" im Sinne von
          aufschliessen.
  很棒    umgangssprachliches Lob ("richtig gut"), passt zum Ton der App
          besser als das neutralere 很好.

Alle vier bleiben im schon vorhandenen Wortschatz, bis auf 音乐会, 博物馆,
门票 und 棒 - die vier fuehrt die Kategorie neu ein, was fuer eine
Kaufkategorie ausdruecklich erlaubt ist ("200 Woerter + Saetze" laut Konzept).

**Nicht von Muttersprachlern geprueft.**
"""

SAETZE = [
 dict(de='Wo findet das Konzert statt?',
      zh='音乐会在哪里？', py='yīnyuèhuì zài nǎli?',
      k=[('konzert', ['音乐会']), ('wo', ['在哪里', '哪里'])]),
 dict(de='Wann öffnet das Museum?',
      zh='博物馆几点开门？', py='bówùguǎn jǐ diǎn kāimén?',
      k=[('museum', ['博物馆']), ('oeffnen', ['开门', '几点开门'])]),
 dict(de='Wie viel kostet der Eintritt?',
      zh='门票多少钱？', py='ménpiào duōshao qián?',
      k=[('eintritt', ['门票']), ('kosten', ['多少钱', '多少'])]),
 dict(de='Das war ein tolles Konzert.',
      zh='这个音乐会很棒。', py='zhège yīnyuèhuì hěn bàng.',
      k=[('konzert', ['音乐会']), ('toll', ['很棒', '棒'])]),
]

AUSGELASSEN = []
