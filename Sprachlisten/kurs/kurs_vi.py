# -*- coding: utf-8 -*-
"""Lehrplan Vietnamesisch. Gliederung: gemeinsam (siehe gemeinsam.py, ENTWURF.md).

**Vietnamesisch flektiert ueberhaupt nicht** - kein Genus, keine
Faelle, keine Konjugation, kein Plural. Ein Wort bleibt in jedem Satz
dasselbe. Deshalb gibt es hier KEINE Artikelrahmen: `artikel` bleibt
ueberall leer, und die Genus-Rahmen des gemeinsamen Aufbaus werden zu
schlichten Saetzen ohne Artikel.

**Die Tonzeichen sind bedeutungstragend.** `ma`, `má`, `mà`, `mả`, `mã`,
`mạ` sind sechs verschiedene Woerter. Fuer die Bewertung heisst das: NICHT
diakritikaneutral vergleichen - siehe `sprachEval` in
`features/course/lessonEvaluation.ts`.

**`là` steht nur vor NOMEN, nicht vor Adjektiven.** `tôi là sinh viên`
(ich bin Student), aber `tôi mệt` (ich bin muede) ohne `là`. Dieselbe
Unterscheidung wie chinesisch 是/很, und derselbe Anfaengerfehler.
Rahmen 1 und 2 sind deshalb getrennt.

**Die Anrede richtet sich nach dem ALTER** des Gegenuebers (anh/chị/em).
`tôi`/`bạn` sind die neutrale Notloesung, die immer geht - mehr kann ein
Anfaengerkurs nicht leisten, ohne das Alter des Gegenuebers zu kennen.
"""
from gemeinsam import baue_module

SPRACHE = "vi"
TABELLE = "vietnamesisch_vocab"
WORTSPALTE = "vietnamese"
DATEINAME = "viCourse.ts"
KONSTANTE = "VIETNAMESE_COURSE"
SLOTS_DEUTSCH = True

MUSTER = [
    ('[P] rất [Slot]', '[P] bin [Slot].'),
    ('[P] là [Slot]', '[P] sind [Slot].'),
    ('[P] rất [Slot]', '[P] ist sehr [Slot].'),
    ('đây là [Slot]', 'Das ist ein [Slot].'),
    ('ở đây có [Slot]', 'Hier ist ein [Slot].'),
    ('[P] có [Slot]', '[P] habe einen [Slot].'),
    ('đây là [Slot] của tôi', 'Das ist mein [Slot].'),
    ('đây là nhà của [Slot]', 'Das ist [Slot] Haus.'),
    ('đây là sách của [Slot]', 'Das sind [Slot] Bücher.'),
    ('[Slot] ở đây', '[Slot] ist hier.'),
    ('[P] muốn [Slot]', '[P] möchte [Slot].'),
    ('[P] cần [Slot]', '[P] brauche [Slot].'),
    ('[P] muốn [Slot]', '[P] möchte einen [Slot], bitte.'),
    ('[P] ăn [Slot]', '[P] esse [Slot].'),
    ('[P] không [Slot]', '[P] bin nicht [Slot].'),
    ('bạn [Slot] không?', 'Bist [P] [Slot]?'),
    ('[Slot] đây?', '[Slot] ist das?'),
    ('[Slot] ở đâu?', 'Wo gibt es einen [Slot]?'),
    ('ở đây có [Slot] không?', 'Gibt es hier ein [Slot]?'),
    ('[Slot] ở đây', '[Slot] ist hier.'),
    ('nó ở [Slot] nhà', 'Es liegt [Slot] dem Haus.'),
    ('[Slot]', '[Slot]'),
    ('[Slot]', '[Slot]'),
    ('[Slot]', '[Slot]'),
    ('đây là lần [Slot]', 'Das ist das [Slot] Mal.'),
    ('[Slot] bao nhiêu tiền?', 'Wie viel kostet ein [Slot]?'),
    ('cái này quá [Slot]', 'Das ist zu [Slot].'),
    ('[P] có thể [Slot]', '[P] kann [Slot].'),
    ('[P] phải [Slot]', '[P] muss [Slot].'),
    ('[P] muốn [Slot]', '[P] will [Slot].'),
    ('[P] không thể [Slot]', '[P] darf nicht [Slot].'),
    ('[P] đi đến [Slot]', '[P] gehe zu einem [Slot].'),
    ('[P] đi bằng [Slot]', '[P] fahre mit [Slot].'),
    ('[P] [Slot] bây giờ', '[P] [Slot] jetzt.'),
    ('[Slot]', '[Slot]'),
    ('hẹn gặp lại vào [Slot]', 'Wir sehen uns am [Slot].'),
    ('mất một [Slot]', 'Es dauert eine [Slot].'),
    ('[P] thích [Slot]', '[P] mag [Slot].'),
    ('[P] thấy [Slot]', '[P] sehe [Slot].'),
    ('nó màu [Slot]', 'Sie ist [Slot].'),
    ('món ăn rất [Slot]', 'Das Essen ist [Slot].'),
    ('hôm qua [P] [Slot]', '[P] war gestern [Slot].'),
    ('ngày mai [P] sẽ [Slot]', '[P] werde morgen [Slot].'),
    ('[P] [Slot] nhiều', '[P] [Slot] viel.'),
    ('[P] trở nên [Slot]', '[P] werde [Slot].'),
    ('tôi mệt [Slot] tôi làm việc', 'Ich bin müde, [Slot] ich arbeite.'),
    ('tôi muốn [Slot] nhưng không thể', 'Ich will [Slot], aber ich kann nicht.'),
    ('nó [Slot] nhưng được', 'Es ist [Slot], aber es geht.'),
    ('tôi [Slot] bạn', 'Ich [Slot] dich.'),
    ('[Slot] của tôi đau', '[Slot] tut weh.'),
    ('tôi đau [Slot]', 'Ich habe Schmerzen im [Slot].'),
    ('tôi có [Slot]', 'Ich habe ein [Slot].'),
    ('ở đây có [Slot]', 'Hier gibt es einen [Slot].'),
    ('tôi mua [Slot]', 'Ich kaufe einen [Slot].'),
    ('tôi có [Slot]', 'Ich habe [Slot].'),
    ('đây là [Slot] của tôi', 'Das ist meine [Slot].'),
    ('tôi đợi [Slot]', 'Ich warte auf [Slot].'),
    ('ngày mai có [Slot]', 'Morgen gibt es [Slot].'),
    ('tôi được [Slot] tốt', 'Ich habe eine gute [Slot] bekommen.'),
]

# Auffangrahmen fuer den Rest der Wortliste - nach Wortart,
# generisch. Siehe bauplan.py, "Auffangmodul".
REST_RAHMEN = {
    "Nomen": ('đây là [Slot]', 'Hier ist der [Slot].'),
    "Verb": ('tôi muốn [Slot]', 'Ich will [Slot].'),
    "Adjektiv": ('nó rất [Slot]', 'Es ist sehr [Slot].'),
    "Adverb": ('tôi làm [Slot]', 'Ich mache es [Slot].'),
    "Pronomen": ('cái này cho [Slot]', 'Es ist für [Slot].'),
    "Praeposition": ('nó ở [Slot] nhà', 'Es ist [Slot] dem Haus.'),
    "Konjunktion": ('tôi đến [Slot] tôi có thể', 'Ich komme, [Slot] ich kann.'),
    "Fragewort": ('[Slot] vậy?', '[Slot] ist es?'),
    "Zahlwort": ('[Slot]', '[Slot]'),
    "_sonst": ('[Slot]', '[Slot]'),
}

# Funktionswoerter, die genau diese Satzmuster brauchen und sonst
# ungelehrt im Rahmen staenden (R5). "=" heisst: steht schon in der
# Zielsprache, nicht uebersetzen.
ZUSATZ = {
    1: ["=rất"],
    4: ["=đây"],
    5: ["=ở", "=đây", "=có"],
    7: ["=đây", "=của"],
    8: ["=đây", "=của"],
    9: ["=đây", "=của"],
    10: ["=ở"],
    18: ["=ở"],
    19: ["=ở"],
    26: ["=cái"],
    31: ["=bằng"],
    32: ["=về"],
    34: ["=về", "=lại", "=vào", "=giờ"],
    41: ["=sẽ"],
    42: ["=nhiều"],
    43: ["=nên"],
    44: ["=việc"],
    55: ["=tốt"],
}



# ---------------------------------------------------------------------------
# A2-Stufe (Module 15-28), Gliederung in spine_a2.json - dieselbe fuer ALLE
# zehn Sprachen.
#
# **Die Slots sind fast alle schon bekannt.** Das ist Absicht: A2 bringt
# nicht mehr Woerter, sondern mehr STRUKTUR - Vergangenheit, alle Personen,
# Vergleich, Nebensatz, Konditional. Die 500 Kernwoerter bekommen dadurch
# nebenbei weitere Begegnungen.
MUSTER_A2 = [
    ("[P] đã [Slot]", "[P] habe [Slot]."),
    ("hôm qua tôi đã [Slot]", "Gestern habe ich [Slot]."),
    ("tôi đã [Slot] rồi", "Ich habe schon [Slot]."),
    ("[P] [Slot]", "[P] [Slot]."),
    ("[P] [Slot]", "[P] [Slot]."),
    ("[P] [Slot]", "[P] [Slot]."),
    ("[P] [Slot]", "[P] [Slot]."),
    ("cái này [Slot] hơn", "Das ist mehr [Slot]."),
    ("[P] [Slot] như bạn", "[P] bin so [Slot] wie du."),
    ("[P] cảm thấy [Slot]", "[P] fühle mich [Slot]."),
    ("[P] gặp nhau [Slot]", "[P] treffen uns [Slot]."),
    ("tôi ở lại đây [Slot] tôi mệt", "Ich bleibe hier, [Slot] ich müde bin."),
    ("tôi nghĩ rằng nó [Slot]", "Ich glaube, dass es [Slot] ist."),
    ("nếu có thời gian, tôi muốn [Slot]", "Wenn ich Zeit habe, will ich [Slot]."),
    ("bạn có thể [Slot] không?", "Kannst du bitte [Slot]?"),
    ("[P] phải [Slot]", "[P] musst [Slot]."),
    ("[P] đưa sách cho [Slot]", "[P] gebe [Slot] das Buch."),
    ("[P] chỉ thành phố cho [Slot]", "[P] zeige [Slot] die Stadt."),
    ("[P] muốn một ly [Slot]", "[P] möchte ein Glas [Slot]."),
    ("[P] có đủ [Slot]", "[P] haben genug [Slot]."),
    ("[P] đợi một [Slot] rồi", "[P] warte seit einer [Slot]."),
    ("[Slot] tôi về nhà", "[Slot] gehe ich nach Hause."),
    ("[P] muốn [Slot]", "[P] hätte gern [Slot]."),
    ("bạn cho tôi [Slot] được không?", "Könnten Sie mir [Slot] geben?"),
    ("[P] nghĩ cái này [Slot]", "[P] denke, das ist [Slot]."),
    ("[P] thấy cái này rất [Slot]", "[P] finde das sehr [Slot]."),
    ("ngày mai tôi sẽ [Slot]", "Morgen werde ich [Slot]."),
    ("[P] muốn [Slot] sớm", "[P] will bald [Slot]."),
    ("đây là người [Slot]", "Das ist der Mann, der [Slot]."),
    ("tôi tìm chỗ có thể [Slot]", "Ich suche einen Ort, wo man [Slot] kann."),
    ("hôm qua tôi ở [Slot]", "Gestern war ich im [Slot]."),
    ("tôi muốn [Slot] vì tôi có thời gian", "Ich möchte [Slot], weil ich Zeit habe."),
]

# Funktionswoerter, die genau diese A2-Rahmen fest enthalten - ohne
# sie meldet R5 sie als nie eingefuehrt.
ZUSATZ_A2 = {
    1: ['=đã'],
    11: ['=nhau'],
    17: ['=đưa'],
    29: ['=người'],
    30: ['=chỗ'],
}

MODULE = (baue_module(MUSTER, zusatz_neu=ZUSATZ)
          + baue_module(MUSTER_A2, zusatz_neu=ZUSATZ_A2,
                        datei="spine_a2.json"))
