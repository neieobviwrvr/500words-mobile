# -*- coding: utf-8 -*-
"""University + Studying: neue Situation "Freunde finden" (2026-08-29, Simons
Auftrag - stand bereits als geplante Situation, sich dazusetzen, sich
vorstellen usw.).

Bewusst GETRENNT von `uni_zusammen` ("Zusammen lernen") - das ist die
akademische Seite (gemeinsam lernen, Buch ausleihen), hier geht es um den
rein sozialen Einstieg: sich dazusetzen, fragen ob jemand auch neu ist,
sich verabreden. Passt zur Austauschstudenten-Persona (CLAUDE.md).
"""

KATEGORIE = 'university_studying'
SZENARIO = 'uni_freunde'

SAETZE = [
    dict(de='Ist hier noch ein Platz frei?',
         k=[('platz_frei', ['platz frei', 'frei'])]),
    dict(de='Darf ich mich dazusetzen?',
         k=[('dazusetzen', ['dazusetzen', 'setzen'])]),
    dict(de='Bist du auch neu hier?',
         k=[('neu', ['neu']), ('hier', ['hier'])]),
    dict(de='Ich bin auch im ersten Semester.',
         k=[('erstes_semester', ['ersten semester', 'erstes semester'])]),
    dict(de='Was studierst du?',
         k=[('studieren', ['studierst'])]),
    dict(de='Gehst du auch zur nächsten Vorlesung?',
         k=[('vorlesung', ['vorlesung'])]),
    dict(de='Wollen wir uns nach der Vorlesung treffen?',
         k=[('treffen', ['treffen']), ('nach_vorlesung', ['nach der vorlesung'])]),
    dict(de='Gibt es hier eine Gruppe für Austauschstudierende?',
         k=[('austauschstudierende', ['austauschstudierende', 'austausch'])]),
]

ERLAUBTE_DUBLETTEN = set()
