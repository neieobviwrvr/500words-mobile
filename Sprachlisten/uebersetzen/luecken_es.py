# -*- coding: utf-8 -*-
"""Spanisch: die 24 Saetze, die seit den spaeteren Master-Wellen fehlten.

Gleiche Luecke und gleiche Begruendung wie bei luecken_sv.py - dort steht
die ausfuehrliche Fassung. Kurz: Schwedisch, Spanisch, Franzoesisch und
Chinesisch wurden uebersetzt, bevor kommentar, liebe_spitznamen und
uni_freunde in den Master kamen, und nie nachgezogen. Gefunden am
2026-09-03 mit abdeckung.py, vor der Vertonung.

**Spanien, nicht Lateinamerika** - passend zu ttsLocale es-ES. Das faellt
an drei Stellen ins Gewicht:
  guay        rein spanisch fuer "cool"; in Lateinamerika sagt man chevere,
              padre oder bacano, je nach Land
  vosotros    "¿Puedo sentarme con vosotros?" - lateinamerikanisch waere
              ustedes
  sitio       in Spanien der Platz zum Sitzen; anderswo eher lugar/puesto

**Kosenamen sind ersetzt, nicht uebersetzt** - dieselbe Ueberlegung wie bei
club_komplimente. Woertliche Uebertragungen von Schatzi und Baerchen ergeben
spanisch nichts.

**Zwei Saetze bewusst anders formuliert**, weil der Master zwei
Beinahe-Dubletten hat, die spanisch identisch geworden waeren ("Ist dieser
Platz frei?" und "Darf ich mich hierhin setzen?" stehen schon in der
Tabelle) - siehe luecken_sv.py.

**Nicht von Muttersprachlern geprueft.**
"""

KATEGORIEN = ['grundwortschatz', 'university_studying', 'love_relationship']

SAETZE = [
    # --- kommentar: kurze Reaktionen -------------------------------------
    dict(de='Cool!', es='¡Qué guay!', kat='grundwortschatz',
         k=[('guay', ['guay'])],
         h='Guay ist typisch spanisch. In Lateinamerika sagt man je nach Land chévere, padre oder bacano.'),
    dict(de='Macht nichts.', es='No pasa nada.', kat='grundwortschatz',
         k=[('no_pasa_nada', ['no pasa nada', 'nada'])],
         h='Einer der meistgesagten Sätze Spaniens - deckt macht nichts, kein Problem und keine Sorge zugleich ab.'),
    dict(de='Genau!', es='¡Exacto!', kat='grundwortschatz',
         k=[('exacto', ['exacto'])]),
    dict(de='Schade!', es='¡Qué pena!', kat='grundwortschatz',
         k=[('pena', ['pena'])]),
    dict(de='Na klar!', es='¡Claro!', kat='grundwortschatz',
         k=[('claro', ['claro'])]),
    dict(de='Wirklich?', es='¿En serio?', kat='grundwortschatz',
         k=[('en_serio', ['en serio', 'serio'])]),
    dict(de='Stimmt.', es='Es verdad.', kat='grundwortschatz',
         k=[('verdad', ['verdad'])]),
    dict(de='Auf keinen Fall!', es='¡Ni hablar!', kat='grundwortschatz',
         k=[('ni_hablar', ['ni hablar', 'hablar'])]),

    # --- liebe_spitznamen: Kosenamen -------------------------------------
    dict(de='Ich nenne dich Schatz.', es='Te llamo cariño.',
         kat='love_relationship',
         k=[('llamar', ['llamo']), ('carino', ['cariño'])],
         h='Cariño ist der spanische Standard-Kosename und gilt für alle Geschlechter.'),
    dict(de='Kann ich dich Schatzi nennen?', es='¿Puedo llamarte cari?',
         kat='love_relationship',
         k=[('llamar', ['llamarte', 'llamar']), ('cari', ['cari'])],
         h='Cari ist die Kurzform von cariño und klingt vertrauter - so wie Schatzi zu Schatz.'),
    dict(de='Sie nennt mich Süße.', es='Ella me llama guapa.',
         kat='love_relationship',
         k=[('llamar', ['llama']), ('guapa', ['guapa'])],
         h='Guapa sagt in Spanien auch die Verkäuferin zur Kundin. Unter Verliebten ist es ein Kosename, sonst schlicht freundlich.'),
    dict(de='Er nennt mich Bärchen.', es='Él me llama osito.',
         kat='love_relationship',
         k=[('llamar', ['llama']), ('osito', ['osito'])],
         h='Osito heißt Bärchen. Ebenso verbreitet ist gordi, von gordo - dick. In Spanien liebevoll gemeint, kein Angriff.'),
    dict(de='Das ist mein Kosename für dich.', es='Es mi apodo cariñoso para ti.',
         kat='love_relationship',
         k=[('apodo', ['apodo'])]),
    dict(de='Nenn mich bitte nicht so!', es='¡No me llames así, por favor!',
         kat='love_relationship',
         k=[('llamar', ['llames']), ('asi', ['así'])]),
    dict(de='Wie soll ich dich nennen?', es='¿Cómo quieres que te llame?',
         kat='love_relationship',
         k=[('como', ['cómo']), ('llamar', ['llame'])]),
    dict(de='Ich mag diesen Spitznamen nicht so gern.',
         es='No me gusta mucho ese apodo.',
         kat='love_relationship',
         k=[('no_gusta', ['no me gusta', 'gusta']), ('apodo', ['apodo'])]),

    # --- uni_freunde: im Hoersaal ansprechen ------------------------------
    dict(de='Bist du auch neu hier?', es='¿Tú también eres nuevo aquí?',
         kat='university_studying',
         k=[('nuevo', ['nuevo', 'nueva']), ('aqui', ['aquí'])]),
    dict(de='Ist hier noch ein Platz frei?', es='¿Queda algún sitio libre?',
         kat='university_studying',
         k=[('sitio', ['sitio']), ('libre', ['libre'])]),
    dict(de='Was studierst du?', es='¿Qué estudias?',
         kat='university_studying',
         k=[('estudiar', ['estudias'])]),
    dict(de='Gehst du auch zur nächsten Vorlesung?',
         es='¿Vas también a la próxima clase?',
         kat='university_studying',
         k=[('clase', ['clase'])],
         h='An spanischen Unis heißt die Vorlesung schlicht clase. Conferencia wäre ein einzelner Vortrag, keine reguläre Veranstaltung.'),
    dict(de='Gibt es hier eine Gruppe für Austauschstudierende?',
         es='¿Hay aquí un grupo para estudiantes de intercambio?',
         kat='university_studying',
         k=[('intercambio', ['intercambio'])]),
    dict(de='Darf ich mich dazusetzen?', es='¿Puedo sentarme con vosotros?',
         kat='university_studying',
         k=[('sentarse', ['sentarme']), ('con_vosotros', ['con vosotros', 'vosotros'])]),
    dict(de='Ich bin auch im ersten Semester.', es='Yo también estoy en primer semestre.',
         kat='university_studying',
         k=[('primer_semestre', ['primer semestre', 'semestre'])]),
    dict(de='Wollen wir uns nach der Vorlesung treffen?',
         es='¿Nos vemos después de clase?',
         kat='university_studying',
         k=[('vernos', ['nos vemos', 'vemos']),
            ('despues_de_clase', ['después de clase', 'después'])]),
]

# Nicht fehlend, sondern SPRACHADAPTIV: beide Saetze nennen die Zielsprache,
# tragen deshalb je Sprache eine eigene deutsche Fassung und stehen laengst
# in spanisch_phrasebook - als "Ich spreche ein bisschen Spanisch." und
# "Wie sagt man das auf Spanisch?".
AUSGELASSEN = [
    'Ich spreche ein bisschen Deutsch.',
    'Wie sagt man das auf Deutsch?',
]
