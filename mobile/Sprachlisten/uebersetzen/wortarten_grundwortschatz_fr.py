# -*- coding: utf-8 -*-
"""Wort-fuer-Wort-Tagging fuer franz_phrasebook/grundwortschatz.

Nomen/Verb/Adjektiv/Konjunktion, wie fuer die anderen Sprachen.
Erzeugt aus _erzeuge_grundwortschatz_fr.py (Einmal-Helfer).

**Franzoesische Typografie**: Leerzeichen vor schliessenden Satzzeichen
(! ? ; :) macht sie zu eigenen Tokens - z.B. "Bonjour !" sind ZWEI Woerter
beim Leerzeichen-Split, nicht eins. `TaggedTokens` fuegt beim Rendern wieder
mit Leerzeichen zusammen, das Satzbild bleibt unveraendert.

**Keine Konjunktion im Bestand** - wie in den anderen Sprachen.
"""

TAGS = [
    {"id": 1, "tags": [{"w": 'Bonjour', "c": None}, {"w": '!', "c": None}]},  # Bonjour !
    {"id": 2, "tags": [{"w": 'Bonsoir', "c": None}, {"w": '!', "c": None}]},  # Bonsoir !
    {"id": 3, "tags": [{"w": 'Salut', "c": None}, {"w": '!', "c": None}]},  # Salut !
    {"id": 4, "tags": [{"w": 'Au', "c": None}, {"w": 'revoir', "c": 'v'}, {"w": '!', "c": None}]},  # Au revoir !
    {"id": 5, "tags": [{"w": 'Ciao', "c": None}, {"w": '!', "c": None}]},  # Ciao !
    {"id": 6, "tags": [{"w": 'À', "c": None}, {"w": 'plus', "c": None}, {"w": 'tard', "c": None}, {"w": '!', "c": None}]},  # À plus tard !
    {"id": 7, "tags": [{"w": 'Comment', "c": None}, {"w": 'ça', "c": None}, {"w": 'va', "c": 'v'}, {"w": '?', "c": None}]},  # Comment ça va ?
    {"id": 8, "tags": [{"w": 'Ça', "c": None}, {"w": 'va', "c": 'v'}, {"w": 'bien,', "c": 'a'}, {"w": 'merci.', "c": None}]},  # Ça va bien, merci.
    {"id": 9, "tags": [{"w": 'Merci', "c": None}, {"w": '!', "c": None}]},  # Merci !
    {"id": 10, "tags": [{"w": 'Merci', "c": None}, {"w": 'beaucoup', "c": None}, {"w": '!', "c": None}]},  # Merci beaucoup !
    {"id": 11, "tags": [{"w": 'De', "c": None}, {"w": 'rien.', "c": None}]},  # De rien.
    {"id": 12, "tags": [{"w": 'Pardon', "c": 'n'}, {"w": '!', "c": None}]},  # Pardon !
    {"id": 13, "tags": [{"w": 'Je', "c": None}, {"w": 'suis', "c": 'v'}, {"w": 'désolé.', "c": 'a'}]},  # Je suis désolé.
    {"id": 14, "tags": [{"w": 'Pas', "c": None}, {"w": 'de', "c": None}, {"w": 'problème.', "c": 'n'}]},  # Pas de problème.
    {"id": 15, "tags": [{"w": 'Oui.', "c": None}]},  # Oui.
    {"id": 16, "tags": [{"w": 'Non.', "c": None}]},  # Non.
    {"id": 17, "tags": [{"w": 'Je', "c": None}, {"w": 'ne', "c": None}, {"w": 'sais', "c": 'v'}, {"w": 'pas.', "c": None}]},  # Je ne sais pas.
    {"id": 18, "tags": [{"w": 'Au', "c": None}, {"w": 'secours', "c": 'n'}, {"w": '!', "c": None}]},  # Au secours !
    {"id": 19, "tags": [{"w": "J'ai", "c": 'v'}, {"w": 'besoin', "c": 'n'}, {"w": "d'aide.", "c": 'n'}]},  # J'ai besoin d'aide.
    {"id": 20, "tags": [{"w": 'Où', "c": None}, {"w": 'est', "c": 'v'}, {"w": 'la', "c": None}, {"w": 'sortie', "c": 'n'}, {"w": '?', "c": None}]},  # Où est la sortie ?
    {"id": 21, "tags": [{"w": 'Où', "c": None}, {"w": 'sont', "c": 'v'}, {"w": 'les', "c": None}, {"w": 'toilettes', "c": 'n'}, {"w": '?', "c": None}]},  # Où sont les toilettes ?
    {"id": 22, "tags": [{"w": 'Pardon,', "c": 'n'}, {"w": 'où', "c": None}, {"w": 'sont', "c": 'v'}, {"w": 'les', "c": None}, {"w": 'toilettes', "c": 'n'}, {"w": '?', "c": None}]},  # Pardon, où sont les toilettes ?
    {"id": 23, "tags": [{"w": "J'ai", "c": 'v'}, {"w": 'perdu', "c": 'v'}, {"w": 'mon', "c": None}, {"w": 'portable.', "c": 'n'}]},  # J'ai perdu mon portable.
    {"id": 24, "tags": [{"w": "J'ai", "c": 'v'}, {"w": 'perdu', "c": 'v'}, {"w": 'mon', "c": None}, {"w": 'passeport.', "c": 'n'}]},  # J'ai perdu mon passeport.
    {"id": 25, "tags": [{"w": 'Quand', "c": None}, {"w": 'est-ce', "c": 'v'}, {"w": 'que', "c": None}, {"w": 'tu', "c": None}, {"w": 'es', "c": 'v'}, {"w": 'libre', "c": 'a'}, {"w": '?', "c": None}]},  # Quand est-ce que tu es libre ?
    {"id": 26, "tags": [{"w": 'Demain', "c": None}, {"w": 'je', "c": None}, {"w": 'ne', "c": None}, {"w": 'suis', "c": 'v'}, {"w": 'pas', "c": None}, {"w": 'libre.', "c": 'a'}]},  # Demain je ne suis pas libre.
    {"id": 27, "tags": [{"w": 'On', "c": None}, {"w": 'peut', "c": 'v'}, {"w": 'se', "c": None}, {"w": 'voir', "c": 'v'}, {"w": 'la', "c": None}, {"w": 'semaine', "c": 'n'}, {"w": 'prochaine', "c": 'a'}, {"w": '?', "c": None}]},  # On peut se voir la semaine prochaine ?
    {"id": 28, "tags": [{"w": "J'ai", "c": 'v'}, {"w": 'rendez-vous', "c": 'n'}, {"w": 'à', "c": None}, {"w": 'dix', "c": None}, {"w": 'heures.', "c": 'n'}]},  # J'ai rendez-vous à dix heures.
    {"id": 29, "tags": [{"w": "C'est", "c": 'v'}, {"w": 'quand', "c": None}, {"w": 'ton', "c": None}, {"w": 'anniversaire', "c": 'n'}, {"w": '?', "c": None}]},  # C'est quand ton anniversaire ?
    {"id": 30, "tags": [{"w": 'Mon', "c": None}, {"w": 'anniversaire', "c": 'n'}, {"w": 'est', "c": 'v'}, {"w": 'en', "c": None}, {"w": 'mars.', "c": 'n'}]},  # Mon anniversaire est en mars.
    {"id": 31, "tags": [{"w": 'Quelle', "c": None}, {"w": 'heure', "c": 'n'}, {"w": 'est-il', "c": 'v'}, {"w": '?', "c": None}]},  # Quelle heure est-il ?
    {"id": 32, "tags": [{"w": 'Il', "c": None}, {"w": 'est', "c": 'v'}, {"w": 'trois', "c": None}, {"w": 'heures.', "c": 'n'}]},  # Il est trois heures.
    {"id": 33, "tags": [{"w": 'On', "c": None}, {"w": 'est', "c": 'v'}, {"w": 'quel', "c": None}, {"w": 'jour', "c": 'n'}, {"w": "aujourd'hui", "c": None}, {"w": '?', "c": None}]},  # On est quel jour aujourd'hui ?
    {"id": 34, "tags": [{"w": "Aujourd'hui,", "c": None}, {"w": "c'est", "c": 'v'}, {"w": 'lundi.', "c": 'n'}]},  # Aujourd'hui, c'est lundi.
    {"id": 35, "tags": [{"w": 'Le', "c": None}, {"w": 'film', "c": 'n'}, {"w": 'commence', "c": 'v'}, {"w": 'à', "c": None}, {"w": 'quelle', "c": None}, {"w": 'heure', "c": 'n'}, {"w": '?', "c": None}]},  # Le film commence à quelle heure ?
    {"id": 36, "tags": [{"w": 'On', "c": None}, {"w": 'reste', "c": 'v'}, {"w": 'cinq', "c": None}, {"w": 'minutes.', "c": 'n'}]},  # On reste cinq minutes.
    {"id": 37, "tags": [{"w": 'Je', "c": None}, {"w": 'ne', "c": None}, {"w": 'comprends', "c": 'v'}, {"w": 'pas.', "c": None}]},  # Je ne comprends pas.
    {"id": 38, "tags": [{"w": 'Tu', "c": None}, {"w": 'peux', "c": 'v'}, {"w": 'parler', "c": 'v'}, {"w": 'plus', "c": None}, {"w": 'lentement,', "c": 'a'}, {"w": "s'il", "c": None}, {"w": 'te', "c": None}, {"w": 'plaît', "c": 'v'}, {"w": '?', "c": None}]},  # Tu peux parler plus lentement, s'il te plaît ?
    {"id": 39, "tags": [{"w": 'Tu', "c": None}, {"w": 'peux', "c": 'v'}, {"w": 'répéter,', "c": 'v'}, {"w": "s'il", "c": None}, {"w": 'te', "c": None}, {"w": 'plaît', "c": 'v'}, {"w": '?', "c": None}]},  # Tu peux répéter, s'il te plaît ?
    {"id": 40, "tags": [{"w": 'Répète,', "c": 'v'}, {"w": "s'il", "c": None}, {"w": 'te', "c": None}, {"w": 'plaît.', "c": 'v'}]},  # Répète, s'il te plaît.
    {"id": 41, "tags": [{"w": "Qu'est-ce", "c": 'v'}, {"w": 'que', "c": None}, {"w": 'ça', "c": None}, {"w": 'veut', "c": 'v'}, {"w": 'dire', "c": 'v'}, {"w": '?', "c": None}]},  # Qu'est-ce que ça veut dire ?
    {"id": 42, "tags": [{"w": 'Tu', "c": None}, {"w": 'parles', "c": 'v'}, {"w": 'anglais', "c": 'n'}, {"w": '?', "c": None}]},  # Tu parles anglais ?
    {"id": 43, "tags": [{"w": 'Vous', "c": None}, {"w": 'pouvez', "c": 'v'}, {"w": "l'écrire,", "c": 'v'}, {"w": "s'il", "c": None}, {"w": 'vous', "c": None}, {"w": 'plaît', "c": 'v'}, {"w": '?', "c": None}]},  # Vous pouvez l'écrire, s'il vous plaît ?
    {"id": 44, "tags": [{"w": 'Je', "c": None}, {"w": 'parle', "c": 'v'}, {"w": 'un', "c": None}, {"w": 'peu', "c": None}, {"w": 'français.', "c": 'n'}]},  # Je parle un peu français.
    {"id": 45, "tags": [{"w": 'Comment', "c": None}, {"w": 'on', "c": None}, {"w": 'dit', "c": 'v'}, {"w": 'ça', "c": None}, {"w": 'en', "c": None}, {"w": 'français', "c": 'n'}, {"w": '?', "c": None}]},  # Comment on dit ça en français ?
    {"id": 46, "tags": [{"w": 'Comment', "c": None}, {"w": 'tu', "c": None}, {"w": "t'appelles", "c": 'v'}, {"w": '?', "c": None}]},  # Comment tu t'appelles ?
    {"id": 47, "tags": [{"w": 'Je', "c": None}, {"w": "m'appelle", "c": 'v'}, {"w": 'Anna.', "c": 'n'}]},  # Je m'appelle Anna.
    {"id": 48, "tags": [{"w": 'Tu', "c": None}, {"w": 'viens', "c": 'v'}, {"w": "d'où", "c": None}, {"w": '?', "c": None}]},  # Tu viens d'où ?
    {"id": 49, "tags": [{"w": 'Je', "c": None}, {"w": 'viens', "c": 'v'}, {"w": "d'Allemagne.", "c": 'n'}]},  # Je viens d'Allemagne.
    {"id": 50, "tags": [{"w": 'Tu', "c": None}, {"w": 'as', "c": 'v'}, {"w": 'quel', "c": None}, {"w": 'âge', "c": 'n'}, {"w": '?', "c": None}]},  # Tu as quel âge ?
    {"id": 51, "tags": [{"w": "J'ai", "c": 'v'}, {"w": 'vingt-cinq', "c": None}, {"w": 'ans.', "c": 'n'}]},  # J'ai vingt-cinq ans.
    {"id": 52, "tags": [{"w": 'Enchanté.', "c": 'a'}]},  # Enchanté.
    {"id": 53, "tags": [{"w": "C'est", "c": 'v'}, {"w": 'mon', "c": None}, {"w": 'ami.', "c": 'n'}]},  # C'est mon ami.
    {"id": 54, "tags": [{"w": "C'est", "c": 'v'}, {"w": 'la', "c": None}, {"w": 'première', "c": None}, {"w": 'fois', "c": 'n'}, {"w": 'que', "c": None}, {"w": 'je', "c": None}, {"w": 'viens.', "c": 'v'}]},  # C'est la première fois que je viens.
    {"id": 55, "tags": [{"w": 'Vous', "c": None}, {"w": 'êtes', "c": 'v'}, {"w": 'étudiants', "c": 'n'}, {"w": '?', "c": None}]},  # Vous êtes étudiants ?
    {"id": 56, "tags": [{"w": 'Un,', "c": None}, {"w": 'deux,', "c": None}, {"w": 'trois.', "c": None}]},  # Un, deux, trois.
    {"id": 57, "tags": [{"w": 'Combien', "c": None}, {"w": '?', "c": None}]},  # Combien ?
    {"id": 58, "tags": [{"w": 'Ça', "c": None}, {"w": 'coûte', "c": 'v'}, {"w": 'combien', "c": None}, {"w": '?', "c": None}]},  # Ça coûte combien ?
    {"id": 59, "tags": [{"w": 'Ça', "c": None}, {"w": 'coûte', "c": 'v'}, {"w": 'dix', "c": None}, {"w": 'euros.', "c": 'n'}]},  # Ça coûte dix euros.
    {"id": 60, "tags": [{"w": 'Ça', "c": None}, {"w": 'fait', "c": 'v'}, {"w": 'combien', "c": None}, {"w": 'en', "c": None}, {"w": 'tout', "c": None}, {"w": '?', "c": None}]},  # Ça fait combien en tout ?
    {"id": 61, "tags": [{"w": "L'addition,", "c": 'n'}, {"w": "s'il", "c": None}, {"w": 'vous', "c": None}, {"w": 'plaît.', "c": 'v'}]},  # L'addition, s'il vous plaît.
    {"id": 62, "tags": [{"w": 'Un', "c": None}, {"w": 'seul,', "c": 'a'}, {"w": "s'il", "c": None}, {"w": 'vous', "c": None}, {"w": 'plaît.', "c": 'v'}]},  # Un seul, s'il vous plaît.
    {"id": 63, "tags": [{"w": "J'en", "c": None}, {"w": 'ai', "c": 'v'}, {"w": 'seulement', "c": None}, {"w": 'un.', "c": None}]},  # J'en ai seulement un.
    {"id": 64, "tags": [{"w": 'Deux,', "c": None}, {"w": "s'il", "c": None}, {"w": 'vous', "c": None}, {"w": 'plaît.', "c": 'v'}]},  # Deux, s'il vous plaît.
    {"id": 65, "tags": [{"w": 'Nous', "c": None}, {"w": 'sommes', "c": 'v'}, {"w": 'quatre.', "c": None}]},  # Nous sommes quatre.
    {"id": 66, "tags": [{"w": 'Ça', "c": None}, {"w": 'suffit.', "c": 'v'}]},  # Ça suffit.
]
