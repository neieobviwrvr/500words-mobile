# -*- coding: utf-8 -*-
"""Love + Relationship: neue Situation "Spitznamen/Rufwörter" (2026-08-29,
Simons Auftrag).

ERSTER Content ueberhaupt fuer love_relationship - die Kategorie stand
bisher bei 0 Saetzen (eine der vier Kategorien ohne Lehrbuch-Basis laut
CLAUDE.md, Cross-Referenzierung noch nicht begonnen). Diese Situation ist
bewusst schmal und alltagstauglich gehalten (Kosenamen fragen/verwenden/
ablehnen), keine tiefergehenden Beziehungsthemen - die bleiben fuer eine
spaetere Welle.
"""

KATEGORIE = 'love_relationship'
SZENARIO = 'liebe_spitznamen'

SAETZE = [
    dict(de='Wie soll ich dich nennen?',
         k=[('wie', ['wie']), ('nennen', ['nennen'])]),
    dict(de='Ich nenne dich Schatz.',
         k=[('nennen', ['nenne']), ('schatz', ['schatz'])]),
    dict(de='Kann ich dich Schatzi nennen?',
         k=[('koennen', ['kann']), ('schatzi', ['schatzi'])]),
    dict(de='Er nennt mich Bärchen.',
         k=[('nennen', ['nennt']), ('baerchen', ['bärchen'])]),
    dict(de='Sie nennt mich Süße.',
         k=[('nennen', ['nennt']), ('suesse', ['süße'])]),
    dict(de='Das ist mein Kosename für dich.',
         k=[('kosename', ['kosename'])]),
    dict(de='Ich mag diesen Spitznamen nicht so gern.',
         k=[('nicht_gern', ['nicht so gern', 'nicht']), ('spitzname', ['spitznamen'])]),
    dict(de='Nenn mich bitte nicht so!',
         k=[('nennen', ['nenn']), ('nicht_so', ['nicht so'])]),
]

ERLAUBTE_DUBLETTEN = set()
