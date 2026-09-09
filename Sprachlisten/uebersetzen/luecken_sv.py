# -*- coding: utf-8 -*-
"""Schwedisch: die 24 Saetze, die seit den spaeteren Master-Wellen fehlten.

Schwedisch, Spanisch, Franzoesisch und Chinesisch wurden uebersetzt, BEVOR
drei Satzgruppen in den Master kamen - und sind nie nachgezogen worden. Die
sechs juengeren Sprachen (it, no, ru, vi, pl, en) haben sie alle. Gefunden
am 2026-09-03 mit abdeckung.py, vor der geplanten Vertonung: was jetzt
fehlt, waere sonst stumm vertont und braeuchte einen zweiten Durchgang.

Drei Gruppen, in allen vier Sprachen dieselben:
  kommentar          8  kurze Gespraechsreaktionen (Cool!, Stimmt., Schade!)
  liebe_spitznamen   8  Kosenamen - die Kategorie love_relationship war
                        auf Schwedisch komplett leer
  uni_freunde        8  jemanden im Hoersaal ansprechen

**Kosenamen sind wie Komplimente nicht uebersetzbar, sondern zu ersetzen.**
Dieselbe Ueberlegung wie bei club_komplimente: eine woertliche Uebertragung
von Schatzi/Baerchen ergibt schwedisch nichts. Genommen wurde, was in
Schweden tatsaechlich gesagt wird - gumman, sötnos, nalle - mit
Kulturhinweis dort, wo die woertliche Bedeutung sonst irritiert.

**Zwei Saetze bewusst anders formuliert als naheliegend.** Der Master hat
zwei Beinahe-Dubletten, die schwedisch identisch geworden waeren:
  "Ist hier noch ein Platz frei?"  gegen  "Ist dieser Platz frei?"
  "Darf ich mich dazusetzen?"     gegen  "Darf ich mich hierhin setzen?"
Beide zweiten Fassungen stehen schon in der Tabelle. Statt zweimal
denselben Satz zu erzeugen, tragen die neuen den Unterschied, den auch das
Deutsche meint: nach VERFUEGBARKEIT fragen (plats kvar) und sich zu
JEMANDEM setzen (hos er) statt an einen Ort.

**Nicht von Muttersprachlern geprueft.**
"""

KATEGORIEN = ['grundwortschatz', 'university_studying', 'love_relationship']

SAETZE = [
    # --- kommentar: kurze Reaktionen -------------------------------------
    dict(de='Cool!', sv='Coolt!', kat='grundwortschatz',
         k=[('cool', ['coolt', 'cool'])]),
    dict(de='Macht nichts.', sv='Det gör inget.', kat='grundwortschatz',
         k=[('gor_inget', ['gör inget', 'inget'])]),
    dict(de='Genau!', sv='Precis!', kat='grundwortschatz',
         k=[('precis', ['precis'])]),
    dict(de='Schade!', sv='Vad synd!', kat='grundwortschatz',
         k=[('synd', ['synd'])]),
    dict(de='Na klar!', sv='Javisst!', kat='grundwortschatz',
         k=[('javisst', ['javisst', 'visst'])]),
    dict(de='Wirklich?', sv='Verkligen?', kat='grundwortschatz',
         k=[('verkligen', ['verkligen'])]),
    dict(de='Stimmt.', sv='Det stämmer.', kat='grundwortschatz',
         k=[('stammer', ['stämmer'])]),
    dict(de='Auf keinen Fall!', sv='Absolut inte!', kat='grundwortschatz',
         k=[('absolut_inte', ['absolut inte', 'inte'])]),

    # --- liebe_spitznamen: Kosenamen -------------------------------------
    dict(de='Ich nenne dich Schatz.', sv='Jag kallar dig älskling.',
         kat='love_relationship',
         k=[('kalla', ['kallar']), ('alskling', ['älskling'])],
         h='Älskling ist der schwedische Standard-Kosename und geht für alle Geschlechter.'),
    dict(de='Kann ich dich Schatzi nennen?', sv='Får jag kalla dig gumman?',
         kat='love_relationship',
         k=[('kalla', ['kalla']), ('gumman', ['gumman'])],
         h='Gumman heißt wörtlich altes Weibchen, ist aber ein ganz normaler Kosename für die Partnerin. Für Männer sagt man gubben.'),
    dict(de='Sie nennt mich Süße.', sv='Hon kallar mig sötnos.',
         kat='love_relationship',
         k=[('kalla', ['kallar']), ('sotnos', ['sötnos'])],
         h='Sötnos heißt wörtlich Süßnase.'),
    dict(de='Er nennt mich Bärchen.', sv='Han kallar mig nallen.',
         kat='love_relationship',
         k=[('kalla', ['kallar']), ('nalle', ['nallen', 'nalle'])],
         h='Nalle ist der Teddybär - das schwedische Gegenstück zu Bärchen.'),
    dict(de='Das ist mein Kosename für dich.', sv='Det är mitt smeknamn för dig.',
         kat='love_relationship',
         k=[('smeknamn', ['smeknamn'])]),
    dict(de='Nenn mich bitte nicht so!', sv='Kalla mig inte det, tack!',
         kat='love_relationship',
         k=[('kalla', ['kalla']), ('inte', ['inte'])]),
    dict(de='Wie soll ich dich nennen?', sv='Vad ska jag kalla dig?',
         kat='love_relationship',
         k=[('vad', ['vad']), ('kalla', ['kalla'])]),
    dict(de='Ich mag diesen Spitznamen nicht so gern.',
         sv='Jag gillar inte det smeknamnet så mycket.',
         kat='love_relationship',
         k=[('gillar_inte', ['gillar inte', 'inte']),
            ('smeknamn', ['smeknamnet', 'smeknamn'])]),

    # --- uni_freunde: im Hoersaal ansprechen ------------------------------
    dict(de='Bist du auch neu hier?', sv='Är du också ny här?',
         kat='university_studying',
         k=[('ny', ['ny']), ('har', ['här'])]),
    dict(de='Ist hier noch ein Platz frei?', sv='Finns det någon plats kvar här?',
         kat='university_studying',
         k=[('plats', ['plats']), ('kvar', ['kvar'])]),
    dict(de='Was studierst du?', sv='Vad pluggar du?',
         kat='university_studying',
         k=[('plugga', ['pluggar', 'plugga', 'studerar'])],
         h='Plugga ist das Alltagswort für studieren. Studera klingt förmlicher und steht eher im Formular als im Hörsaal.'),
    dict(de='Gehst du auch zur nächsten Vorlesung?',
         sv='Går du också på nästa föreläsning?',
         kat='university_studying',
         k=[('forelasning', ['föreläsning'])]),
    dict(de='Gibt es hier eine Gruppe für Austauschstudierende?',
         sv='Finns det en grupp för utbytesstudenter här?',
         kat='university_studying',
         k=[('utbytesstudenter', ['utbytesstudenter', 'utbytes'])]),
    dict(de='Darf ich mich dazusetzen?', sv='Får jag slå mig ner hos er?',
         kat='university_studying',
         k=[('sla_sig_ner', ['slå mig ner', 'sätta mig'])]),
    dict(de='Ich bin auch im ersten Semester.', sv='Jag går också första terminen.',
         kat='university_studying',
         k=[('forsta_terminen', ['första terminen', 'första'])]),
    dict(de='Wollen wir uns nach der Vorlesung treffen?',
         sv='Ska vi ses efter föreläsningen?',
         kat='university_studying',
         k=[('ses', ['ses', 'träffas']),
            ('efter_forelasning', ['efter föreläsningen', 'efter'])]),
]

# Nicht fehlend, sondern SPRACHADAPTIV: beide Saetze nennen die Zielsprache,
# tragen deshalb je Sprache eine eigene deutsche Fassung und stehen laengst
# in schwedisch_phrasebook - als "Ich spreche ein bisschen Schwedisch." und
# "Wie sagt man das auf Schwedisch?". Wer sie hier uebersetzte, bekaeme
# zweimal denselben schwedischen Satz.
AUSGELASSEN = [
    'Ich spreche ein bisschen Deutsch.',
    'Wie sagt man das auf Deutsch?',
]
