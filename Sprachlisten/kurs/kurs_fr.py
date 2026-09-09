# -*- coding: utf-8 -*-
"""Lehrplan Franzoesisch. Gliederung: gemeinsam (siehe gemeinsam.py, ENTWURF.md).

**Typografie: Leerzeichen vor ! ? :** - franzoesische Regel, im
Phrasebook ausnahmslos so gehalten (243 von 243 Saetzen). Die Satzmuster
hier folgen ihr.

**Verneinung ist zweiteilig**: `ne ... pas` umklammert das Verb. Rahmen 15
und 31 zeigen das als Muster, lange bevor es als Regel erklaert wird.

**Artikel nach Genus** (un/une) setzt der Generator aus der `genus`-Spalte.
So hoert der Nutzer "une maison" und "un livre" immer zusammen mit dem
Wort, statt das Geschlecht spaeter nachzulernen.
"""
from gemeinsam import baue_module

SPRACHE = "fr"
TABELLE = "franz_vocab"
WORTSPALTE = "french"
DATEINAME = "frCourse.ts"
KONSTANTE = "FRENCH_COURSE"
SLOTS_DEUTSCH = True
# Konjugiert nach Person - siehe bauplan.py, "Personalkonjugation".
PERSONENKONJUGATION = True

MUSTER = [
    ('[P] suis [Slot]', '[P] bin [Slot].'),
    ("[P] sommes [Slot]", "[P] sind [Slot]."),
    ('[P] est très [Slot]', '[P] ist sehr [Slot].'),
    ("c'est [Art] [Slot]", 'Das ist ein [Slot].', dict(artikel={"m": "un", "f": "une"})),
    ('il y a [Art] [Slot]', 'Hier ist ein [Slot].', dict(artikel={"m": "un", "f": "une"})),
    ('[P] ai [Art] [Slot]', '[P] habe einen [Slot].', dict(artikel={"m": "un", "f": "une"})),
    ("c'est mon [Slot]", 'Das ist mein [Slot].'),
    ("c'est [Slot] maison", 'Das ist [Slot] Haus.'),
    ('ce sont [Slot] livres', 'Das sind [Slot] Bücher.'),
    ('[Slot] est ici', '[Slot] ist hier.'),
    ('[P] veux [Slot]', '[P] möchte [Slot].'),
    ('[P] ai besoin de [Slot]', '[P] brauche [Slot].'),
    ('[P] voudrais [Art] [Slot]', '[P] möchte einen [Slot], bitte.', dict(artikel={"m": "un", "f": "une"})),
    ('[P] mange [Slot]', '[P] esse [Slot].'),
    ('[P] ne suis pas [Slot]', '[P] bin nicht [Slot].'),
    ('es-tu [Slot] ?', 'Bist [P] [Slot]?'),
    ('[Slot] est-ce ?', '[Slot] ist das?'),
    ('où y a-t-il [Art] [Slot] ?', 'Wo gibt es einen [Slot]?', dict(artikel={"m": "un", "f": "une"})),
    ('il y a [Art] [Slot] ici ?', 'Gibt es hier ein [Slot]?', dict(artikel={"m": "un", "f": "une"})),
    ('[Slot] est ici', '[Slot] ist hier.'),
    ("c'est [Slot] la maison", 'Es liegt [Slot] dem Haus.'),
    ('[Slot]', '[Slot]'),
    ('[Slot]', '[Slot]'),
    ('[Slot]', '[Slot]'),
    ("c'est la [Slot] fois", 'Das ist das [Slot] Mal.'),
    ('combien coûte [Art] [Slot] ?', 'Wie viel kostet ein [Slot]?', dict(artikel={"m": "un", "f": "une"})),
    ("c'est trop [Slot]", 'Das ist zu [Slot].'),
    ('[P] peux [Slot]', '[P] kann [Slot].'),
    ('[P] dois [Slot]', '[P] muss [Slot].'),
    ('[P] veux [Slot]', '[P] will [Slot].'),
    ('[P] ne peux pas [Slot]', '[P] darf nicht [Slot].'),
    ('[P] vais à [Art] [Slot]', '[P] gehe zu einem [Slot].', dict(artikel={"m": "un", "f": "une"})),
    ('[P] voyage en [Slot]', '[P] fahre mit [Slot].'),
    ('[P] veux [Slot] maintenant', '[P] will jetzt [Slot].'),
    ('[Slot]', '[Slot]'),
    ('on se voit le [Slot]', 'Wir sehen uns am [Slot].'),
    ('ça dure [Art] [Slot]', 'Es dauert eine [Slot].', dict(artikel={"m": "un", "f": "une"})),
    ('[P] aime [Slot]', '[P] mag [Slot].'),
    ('[P] vois [Slot]', '[P] sehe [Slot].'),
    ("c'est [Slot]", 'Sie ist [Slot].'),
    ('le repas est [Slot]', 'Das Essen ist [Slot].'),
    ('[P] étais [Slot] hier', '[P] war gestern [Slot].'),
    ('[P] vais [Slot] demain', '[P] werde morgen [Slot].'),
    ('[P] veux [Slot] beaucoup', '[P] will viel [Slot].'),
    ('[P] deviens [Slot]', '[P] werde [Slot].'),
    ('je suis fatigué [Slot] je travaille', 'Ich bin müde, [Slot] ich arbeite.'),
    ('je veux [Slot] mais je ne peux pas', 'Ich will [Slot], aber ich kann nicht.'),
    ("c'est [Slot] mais ça va", 'Es ist [Slot], aber es geht.'),
    ('je veux te [Slot]', 'Ich will dich [Slot].'),
    ('[Art] [Slot] me fait mal', '[Slot] tut weh.', dict(artikel={"m": "un", "f": "une"})),
    ("j'ai mal à [Art] [Slot]", 'Ich habe Schmerzen im [Slot].', dict(artikel={"m": "un", "f": "une"})),
    ("j'ai [Art] [Slot]", 'Ich habe ein [Slot].', dict(artikel={"m": "un", "f": "une"})),
    ('ici il y a [Art] [Slot]', 'Hier gibt es einen [Slot].', dict(artikel={"m": "un", "f": "une"})),
    ("j'achète [Art] [Slot]", 'Ich kaufe einen [Slot].', dict(artikel={"m": "un", "f": "une"})),
    ("j'ai [Slot]", 'Ich habe [Slot].'),
    ("c'est mon [Slot]", 'Das ist meine [Slot].'),
    ("j'attends [Art] [Slot]", 'Ich warte auf [Slot].', dict(artikel={"m": "un", "f": "une"})),
    ('demain il y a [Slot]', 'Morgen gibt es [Slot].'),
    ("j'ai eu [Art] bon [Slot]", 'Ich habe eine gute [Slot] bekommen.', dict(artikel={"m": "un", "f": "une"})),
]

# Auffangrahmen fuer den Rest der Wortliste - nach Wortart,
# generisch. Siehe bauplan.py, "Auffangmodul".
REST_RAHMEN = {
    "Nomen": ('voici le [Slot]', 'Hier ist der [Slot].'),
    "Verb": ('je veux [Slot]', 'Ich will [Slot].'),
    "Adjektiv": ("c'est très [Slot]", 'Es ist sehr [Slot].'),
    "Adverb": ('je le fais [Slot]', 'Ich mache es [Slot].'),
    "Pronomen": ("c'est pour [Slot]", 'Es ist für [Slot].'),
    "Präposition": ("c'est [Slot] la maison", 'Es ist [Slot] dem Haus.'),
    "Konjunktion": ('je viens [Slot] je peux', 'Ich komme, [Slot] ich kann.'),
    "Zahlwort": ('[Slot]', '[Slot]'),
    "Zahlwort/Zeit": ('[Slot]', '[Slot]'),
    "Artikel": ('[Slot] livre', '[Slot] Buch.'),
    "Zusatz": ('[Slot]', '[Slot]'),
    "_sonst": ('[Slot]', '[Slot]'),
}

# Funktionswoerter, die genau diese Satzmuster brauchen und sonst
# ungelehrt im Rahmen staenden (R5). "=" heisst: steht schon in der
# Zielsprache, nicht uebersetzen.
ZUSATZ = {
    5: ["=y"],
    9: ["=ce"],
    12: ["=besoin", "=de"],
    18: ["=y"],
    19: ["=y"],
    21: ["=la"],
    25: ["=la"],
    34: ["=la", "=maintenant"],
    36: ["=se", "=le"],
    41: ["=le", "=repas"],
    43: ["=demain"],
    44: ["=beaucoup"],
    50: ["=fait"],
    52: ["=y"],
}



# ---------------------------------------------------------------------------
# A2-Stufe (Module 15-28), Gliederung in spine_a2.json - dieselbe fuer ALLE
# zehn Sprachen. Anders als bei A1 gibt es hier keine handgeschriebenen
# Ausnahmen mehr.
#
# **Die Slots sind fast alle schon bekannt.** Das ist Absicht: A2 bringt
# nicht mehr Woerter, sondern mehr STRUKTUR - Perfekt, alle Personen,
# Vergleich, Nebensatz, Konditional. Die 500 Kernwoerter bekommen dadurch
# nebenbei weitere Begegnungen, ohne dass dafuer etwas gebaut werden muss.
#
# `slotform` sagt, welche Form der Rahmen verlangt. Wo eine Sprache sie
# nicht hat, steht die naechstbeste - Chinesisch und Vietnamesisch beugen
# gar nicht und nehmen ueberall die Grundform.
MUSTER_A2 = [
    ("[P] ai [Slot]", "[P] habe [Slot].", dict(slotform="partizip")),
    ("hier j'ai [Slot]", "Gestern habe ich [Slot].", dict(slotform="partizip")),
    ("j'ai déjà [Slot]", "Ich habe schon [Slot].", dict(slotform="partizip")),
    ("[P] [Slot]", "[P] [Slot].", dict(slotform="praesens_2")),
    ("[P] [Slot]", "[P] [Slot].", dict(slotform="praesens_3")),
    ("[P] [Slot]", "[P] [Slot].", dict(slotform="praesens_4")),
    ("[P] [Slot]", "[P] [Slot].", dict(slotform="praesens_6")),
    ("c'est plus [Slot]", "Das ist mehr [Slot]."),
    ("[P] suis aussi [Slot] que toi", "[P] bin so [Slot] wie du."),
    ("[P] me sens [Slot]", "[P] fühle mich [Slot]."),
    ("[P] nous voyons [Slot]", "[P] treffen uns [Slot]."),
    ("je reste ici [Slot] je suis fatigué", "Ich bleibe hier, [Slot] ich müde bin."),
    ("je crois que c'est [Slot]", "Ich glaube, dass es [Slot] ist."),
    ("si j'ai le temps, je veux [Slot]", "Wenn ich Zeit habe, will ich [Slot]."),
    ("peux-tu [Slot], je te prie ?", "Kannst du bitte [Slot]?"),
    ("[P] dois [Slot]", "[P] musst [Slot]."),
    ("[P] donne le livre à [Slot]", "[P] gebe [Slot] das Buch."),
    ("[P] montre la ville à [Slot]", "[P] zeige [Slot] die Stadt."),
    ("[P] veux un verre de [Slot]", "[P] möchte ein Glas [Slot]."),
    ("[P] avons assez de [Slot]", "[P] haben genug [Slot]."),
    ("[P] attends depuis une [Slot]", "[P] warte seit einer [Slot]."),
    ("[Slot] je vais à la maison", "[Slot] gehe ich nach Hause."),
    ("[P] voudrais [Slot]", "[P] hätte gern [Slot]."),
    ("pourriez-vous me donner [Slot] ?", "Könnten Sie mir [Slot] geben?"),
    ("[P] pense que c'est [Slot]", "[P] denke, das ist [Slot]."),
    ("[P] trouve ça très [Slot]", "[P] finde das sehr [Slot]."),
    ("demain je vais [Slot]", "Morgen werde ich [Slot]."),
    ("[P] veux [Slot] bientôt", "[P] will bald [Slot]."),
    ("c'est l'homme qui [Slot]", "Das ist der Mann, der [Slot].", dict(slotform="praesens_3")),
    ("je cherche un endroit où on peut [Slot]", "Ich suche einen Ort, wo man [Slot] kann."),
    ("hier j'étais à [Slot]", "Gestern war ich im [Slot]."),
    ("je veux [Slot] parce que j'ai le temps", "Ich möchte [Slot], weil ich Zeit habe."),
]

# Funktionswoerter, die genau diese A2-Rahmen fest enthalten - ohne
# sie meldet R5 sie als nie eingefuehrt.
ZUSATZ_A2 = {
    10: ['=sens'],
    21: ['=depuis', '=une'],
    30: ['=endroit'],
}

MODULE = (baue_module(MUSTER, zusatz_neu=ZUSATZ)
          + baue_module(MUSTER_A2, zusatz_neu=ZUSATZ_A2,
                        datei="spine_a2.json"))
