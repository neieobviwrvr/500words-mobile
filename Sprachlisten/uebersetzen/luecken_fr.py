# -*- coding: utf-8 -*-
"""Franzoesisch: die 24 Saetze, die seit den spaeteren Master-Wellen fehlten.

Gleiche Luecke und gleiche Begruendung wie bei luecken_sv.py - dort steht
die ausfuehrliche Fassung. Gefunden am 2026-09-03 mit abdeckung.py, vor der
Vertonung.

**Typografie: Leerzeichen vor ! und ?** - franzoesische Regel, und in
franz_phrasebook ausnahmslos so gehalten (243 von 243 Saetzen mit
Schlusszeichen). Wer hier ein "Cool!" ohne Leerzeichen einfuegt, bricht die
Reihe.

**Kosenamen sind ersetzt, nicht uebersetzt.** Franzoesisch hat dabei die
Kosenamen, die uebersetzt am schraegsten klingen und trotzdem voellig
alltaeglich sind - ma puce ist woertlich "mein Floh". Genau deshalb steht
ein Hinweis dran: ohne ihn traut sich das niemand zu sagen.

**Zwei Saetze bewusst anders formuliert**, weil der Master zwei
Beinahe-Dubletten hat, die franzoesisch identisch geworden waeren ("Ist
dieser Platz frei?" und "Darf ich mich hierhin setzen?" stehen schon in der
Tabelle) - siehe luecken_sv.py.

**Nicht von Muttersprachlern geprueft.**
"""

KATEGORIEN = ['grundwortschatz', 'university_studying', 'love_relationship']

SAETZE = [
    # --- kommentar: kurze Reaktionen -------------------------------------
    dict(de='Cool!', fr='Cool !', kat='grundwortschatz',
         k=[('cool', ['cool'])],
         h='Aus dem Englischen übernommen und im Alltag völlig geläufig. Génial geht genauso.'),
    dict(de='Macht nichts.', fr="C'est pas grave.", kat='grundwortschatz',
         k=[('pas_grave', ['pas grave', 'grave'])],
         h='Gesprochen fällt das ne weg. Ausgeschrieben hieße es ce n est pas grave - das sagt so aber niemand.'),
    dict(de='Genau!', fr='Exactement !', kat='grundwortschatz',
         k=[('exactement', ['exactement'])]),
    dict(de='Schade!', fr='Dommage !', kat='grundwortschatz',
         k=[('dommage', ['dommage'])]),
    dict(de='Na klar!', fr='Bien sûr !', kat='grundwortschatz',
         k=[('bien_sur', ['bien sûr', 'sûr'])]),
    dict(de='Wirklich?', fr='Vraiment ?', kat='grundwortschatz',
         k=[('vraiment', ['vraiment'])]),
    dict(de='Stimmt.', fr="C'est vrai.", kat='grundwortschatz',
         k=[('vrai', ['vrai'])]),
    dict(de='Auf keinen Fall!', fr='Pas question !', kat='grundwortschatz',
         k=[('pas_question', ['pas question', 'question'])]),

    # --- liebe_spitznamen: Kosenamen -------------------------------------
    dict(de='Ich nenne dich Schatz.', fr="Je t'appelle mon chéri.",
         kat='love_relationship',
         k=[('appeler', ["t'appelle", 'appelle']), ('cheri', ['chéri'])],
         h='Für eine Frau heißt es ma chérie. Mon trésor - mein Schatz - geht ebenso.'),
    dict(de='Kann ich dich Schatzi nennen?', fr="Je peux t'appeler ma puce ?",
         kat='love_relationship',
         k=[('appeler', ["t'appeler", 'appeler']), ('puce', ['puce'])],
         h='Ma puce heißt wörtlich mein Floh und ist einer der häufigsten französischen Kosenamen, vor allem für Frauen und Kinder.'),
    dict(de='Sie nennt mich Süße.', fr="Elle m'appelle ma belle.",
         kat='love_relationship',
         k=[('appeler', ["m'appelle", 'appelle']), ('belle', ['belle'])]),
    dict(de='Er nennt mich Bärchen.', fr="Il m'appelle mon nounours.",
         kat='love_relationship',
         k=[('appeler', ["m'appelle", 'appelle']), ('nounours', ['nounours'])],
         h='Nounours ist der Teddybär - das französische Gegenstück zu Bärchen.'),
    dict(de='Das ist mein Kosename für dich.', fr="C'est mon petit nom pour toi.",
         kat='love_relationship',
         k=[('petit_nom', ['petit nom'])],
         h='Petit nom, wörtlich kleiner Name, ist das französische Wort für Kosename.'),
    dict(de='Nenn mich bitte nicht so!', fr="Ne m'appelle pas comme ça, s'il te plaît !",
         kat='love_relationship',
         k=[('appeler', ["m'appelle", 'appelle']), ('comme_ca', ['comme ça'])]),
    dict(de='Wie soll ich dich nennen?', fr="Comment je dois t'appeler ?",
         kat='love_relationship',
         k=[('comment', ['comment']), ('appeler', ["t'appeler", 'appeler'])]),
    dict(de='Ich mag diesen Spitznamen nicht so gern.',
         fr="Je n'aime pas trop ce surnom.",
         kat='love_relationship',
         k=[('aime_pas', ["n'aime pas", 'aime pas', 'pas']), ('surnom', ['surnom'])]),

    # --- uni_freunde: im Hoersaal ansprechen ------------------------------
    dict(de='Bist du auch neu hier?', fr='Tu es nouveau ici aussi ?',
         kat='university_studying',
         k=[('nouveau', ['nouveau', 'nouvelle']), ('ici', ['ici'])]),
    dict(de='Ist hier noch ein Platz frei?', fr='Il reste une place ici ?',
         kat='university_studying',
         k=[('reste', ['reste']), ('place', ['place'])]),
    dict(de='Was studierst du?', fr="Qu'est-ce que tu étudies ?",
         kat='university_studying',
         k=[('etudier', ['étudies', 'étudier'])]),
    dict(de='Gehst du auch zur nächsten Vorlesung?',
         fr='Tu vas aussi au prochain cours ?',
         kat='university_studying',
         k=[('cours', ['cours'])],
         h='An französischen Unis heißt die Vorlesung cours oder cours magistral, kurz CM.'),
    dict(de='Gibt es hier eine Gruppe für Austauschstudierende?',
         fr='Il y a un groupe pour les étudiants en échange ici ?',
         kat='university_studying',
         k=[('echange', ['échange'])]),
    dict(de='Darf ich mich dazusetzen?', fr='Je peux me joindre à vous ?',
         kat='university_studying',
         k=[('joindre', ['joindre']), ('vous', ['vous'])]),
    dict(de='Ich bin auch im ersten Semester.', fr='Je suis aussi en premier semestre.',
         kat='university_studying',
         k=[('premier_semestre', ['premier semestre', 'semestre'])]),
    dict(de='Wollen wir uns nach der Vorlesung treffen?',
         fr='On se voit après le cours ?',
         kat='university_studying',
         k=[('se_voir', ['se voit', 'voit']),
            ('apres_le_cours', ['après le cours', 'après'])]),
]

# Nicht fehlend, sondern SPRACHADAPTIV: beide Saetze nennen die Zielsprache,
# tragen deshalb je Sprache eine eigene deutsche Fassung und stehen laengst
# in franz_phrasebook - als "Ich spreche ein bisschen Franzoesisch." und
# "Wie sagt man das auf Franzoesisch?".
#
# "Guten Morgen!" faellt aus einem anderen Grund weg: Franzoesisch kennt
# keinen eigenen Morgengruss. Bonjour deckt Morgen und Tag ab und steht
# schon als "Guten Tag!" in der Tabelle - ein zweiter Eintrag waere eine
# Karteikarte, die sich selbst abfragt. Italienisch macht es mit Buongiorno
# genauso (dort fehlt derselbe Satz, ebenfalls absichtlich).
AUSGELASSEN = [
    'Ich spreche ein bisschen Deutsch.',
    'Wie sagt man das auf Deutsch?',
    'Guten Morgen!',
]
