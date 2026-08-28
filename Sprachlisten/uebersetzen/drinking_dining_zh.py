# -*- coding: utf-8 -*-
"""drinking_dining auf Chinesisch: die letzten zwei fehlenden Saetze.

Damit ist Chinesisch ueber alle elf Kategorien vollstaendig.

**Beide sind echte Uebersetzungen, keine Dubletten** - anders als die vier
Health-Faelle, die am 2026-08-27 zusammengelegt wurden (siehe
zusammenfuehren/dubletten_health.py). Das sah auf den ersten Blick aehnlich
aus, haelt der Pruefung aber nicht stand:

  "Was empfehlen Sie?"          Chinesisch hat 有什么好吃的？ ("was gibt es
                                Gutschmeckendes?") - das fragt nach dem, was
                                hier gut ist, nicht nach der Empfehlung des
                                Gegenuebers. 推荐 (empfehlen) ist ein eigenes
                                Wort und ein eigener Satz. Spanisch haelt die
                                beiden ebenfalls auseinander
                                ("¿Qué hay bueno para comer?" gegen
                                "¿Qué me recomienda?").

  "Allergie gegen Nüsse."       Chinesisch hat 我对花生过敏 - aber 花生 sind
                                ERDnuesse. Baumnuesse sind 坚果, ein anderes
                                Allergen. Die zusammenzulegen waere der eine
                                Fall, in dem eine Dubletten-Bereinigung
                                gefaehrlich wuerde: wer gegen Baumnuesse
                                allergisch ist, vertraegt Erdnuesse oft
                                problemlos und umgekehrt. Ausserdem liegen sie
                                in verschiedenen Kategorien
                                (essen_unvertraeglich / health_allergie).

**Zur Wortwahl:**

  您推荐什么？  Die hoefliche Anrede 您 statt 你 - der Satz richtet sich an
                Personal. Der Bestand macht das an dieser Stelle schon so
                (您要喝什么？, 您有图片的菜单吗？).
  我对坚果过敏。 Folgt exakt dem Muster, das im Bestand schon fuenfmal steht:
                我对 + Ausloeser + 过敏. Kein neuer Satzbau, nur eine neue
                Vokabel (坚果).

**Nicht von Muttersprachlern geprueft.**
"""

SAETZE = [
 dict(de='Was empfehlen Sie?',
      zh='您推荐什么？', py='nín tuījiàn shénme?',
      k=[('empfehlen', ['推荐']), ('was', ['什么'])]),
 dict(de='Ich habe eine Allergie gegen Nüsse.',
      zh='我对坚果过敏。', py='wǒ duì jiānguǒ guòmǐn.',
      k=[('nuesse', ['坚果']), ('allergie', ['过敏'])],
      h='坚果 sind Baumnüsse (Walnuss, Mandel, Cashew). Erdnüsse heißen 花生 '
        'und gelten in China nicht als 坚果 — wer beides nicht verträgt, muss '
        'beide Wörter nennen.'),
]

AUSGELASSEN = []
