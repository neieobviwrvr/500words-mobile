# -*- coding: utf-8 -*-
"""Lehrplan Norwegisch. Gliederung: gemeinsam (siehe gemeinsam.py, ENTWURF.md).

**Bokmaal**, wie im ganzen Projekt - rund 85-90% der Schreibenden
und die Norm jedes Sprachkurses. `ttsLocale` steht auf `nb-NO`, damit die
Systemstimme nicht auf Nynorsk ausweicht.

**DREI Geschlechter, aber praktisch zwei.** Bokmaal erlaubt en/ei/et, im
Alltag wird das Femininum (ei) meist wie das Maskulinum behandelt
(en jente statt ei jente). Der Generator setzt trotzdem, was in der
`genus`-Spalte steht - wer es spaeter vereinfachen will, aendert die
Spalte, nicht den Kurs.

**Norwegisch konjugiert nicht nach Person**, genau wie Schwedisch:
`jeg er`, `du er`, `han er`. Ein Rahmen traegt deshalb sofort mehrere
Pronomen.

**Achtung, offene Stelle:** anders als `schwedisch_vocab` hat
`norwegisch_vocab` KEINE `forms`-Spalte. Verben stehen also so im Satz,
wie sie in der Liste stehen. Wo die Liste den Infinitiv fuehrt (`å være`),
muesste eigentlich die Praesensform (`er`) stehen. Vor der Vertonung
pruefen.
"""
from gemeinsam import baue_module

SPRACHE = "no"
TABELLE = "norwegisch_vocab"
WORTSPALTE = "norwegian"
DATEINAME = "noCourse.ts"
KONSTANTE = "NORWEGIAN_COURSE"
SLOTS_DEUTSCH = True

MUSTER = [
    ('[P] er [Slot]', '[P] bin [Slot].'),
    ('[P] er [Slot]', '[P] sind [Slot].'),
    ('[P] er veldig [Slot]', '[P] ist sehr [Slot].'),
    ('det er [Art] [Slot]', 'Das ist ein [Slot].', dict(artikel={"m": "en", "f": "ei", "n": "et"})),
    ('her er [Art] [Slot]', 'Hier ist ein [Slot].', dict(artikel={"m": "en", "f": "ei", "n": "et"})),
    ('[P] har [Art] [Slot]', '[P] habe einen [Slot].', dict(artikel={"m": "en", "f": "ei", "n": "et"})),
    ('det er min [Slot]', 'Das ist mein [Slot].'),
    ('det er [Slot] hus', 'Das ist [Slot] Haus.'),
    ('det er [Slot] bøker', 'Das sind [Slot] Bücher.'),
    ('[Slot] er her', '[Slot] ist hier.'),
    ('[P] vil ha [Slot]', '[P] möchte [Slot].'),
    ('[P] trenger [Slot]', '[P] brauche [Slot].'),
    ('[P] vil ha [Art] [Slot]', '[P] möchte einen [Slot], bitte.', dict(artikel={"m": "en", "f": "ei", "n": "et"})),
    ('[P] spiser [Slot]', '[P] esse [Slot].'),
    ('[P] er ikke [Slot]', '[P] bin nicht [Slot].'),
    ('er du [Slot]?', 'Bist [P] [Slot]?'),
    ('[Slot] er det?', '[Slot] ist das?'),
    ('hvor finnes [Art] [Slot]?', 'Wo gibt es einen [Slot]?', dict(artikel={"m": "en", "f": "ei", "n": "et"})),
    ('finnes det [Art] [Slot] her?', 'Gibt es hier ein [Slot]?', dict(artikel={"m": "en", "f": "ei", "n": "et"})),
    ('[Slot] er her', '[Slot] ist hier.'),
    ('det ligger [Slot] huset', 'Es liegt [Slot] dem Haus.'),
    ('[Slot]', '[Slot]'),
    ('[Slot]', '[Slot]'),
    ('[Slot]', '[Slot]'),
    ('det er [Slot] gang', 'Das ist das [Slot] Mal.'),
    ('hva koster [Art] [Slot]?', 'Wie viel kostet ein [Slot]?', dict(artikel={"m": "en", "f": "ei", "n": "et"})),
    ('det er for [Slot]', 'Das ist zu [Slot].'),
    ('[P] kan [Slot]', '[P] kann [Slot].'),
    ('[P] må [Slot]', '[P] muss [Slot].'),
    ('[P] vil [Slot]', '[P] will [Slot].'),
    ('[P] kan ikke [Slot]', '[P] darf nicht [Slot].'),
    ('[P] går til [Art] [Slot]', '[P] gehe zu einem [Slot].', dict(artikel={"m": "en", "f": "ei", "n": "et"})),
    ('[P] reiser med [Slot]', '[P] fahre mit [Slot].'),
    ('[P] [Slot] nå', '[P] [Slot] jetzt.', dict(slotform="praesens")),
    ('[Slot]', '[Slot]'),
    ('vi ses på [Slot]', 'Wir sehen uns am [Slot].'),
    ('det tar [Art] [Slot]', 'Es dauert eine [Slot].', dict(artikel={"m": "en", "f": "ei", "n": "et"})),
    ('[P] liker [Slot]', '[P] mag [Slot].'),
    ('[P] ser [Slot]', '[P] sehe [Slot].'),
    ('den er [Slot]', 'Sie ist [Slot].'),
    ('maten er [Slot]', 'Das Essen ist [Slot].'),
    ('[P] var [Slot] i går', '[P] war gestern [Slot].'),
    ('[P] skal [Slot] i morgen', '[P] werde morgen [Slot].'),
    ('[P] [Slot] mye', '[P] [Slot] viel.', dict(slotform="praesens")),
    ('[P] blir [Slot]', '[P] werde [Slot].'),
    ('jeg er trøtt [Slot] jeg jobber', 'Ich bin müde, [Slot] ich arbeite.'),
    ('jeg vil [Slot] men jeg kan ikke', 'Ich will [Slot], aber ich kann nicht.'),
    ('det er [Slot] men det går', 'Es ist [Slot], aber es geht.'),
    ('jeg [Slot] deg', 'Ich [Slot] dich.', dict(slotform="praesens")),
    ('[Art] [Slot] gjør vondt', '[Slot] tut weh.', dict(artikel={"m": "en", "f": "ei", "n": "et"})),
    ('jeg har vondt i [Art] [Slot]', 'Ich habe Schmerzen im [Slot].', dict(artikel={"m": "en", "f": "ei", "n": "et"})),
    ('jeg har [Art] [Slot]', 'Ich habe ein [Slot].', dict(artikel={"m": "en", "f": "ei", "n": "et"})),
    ('her er [Art] [Slot]', 'Hier gibt es einen [Slot].', dict(artikel={"m": "en", "f": "ei", "n": "et"})),
    ('jeg kjøper [Art] [Slot]', 'Ich kaufe einen [Slot].', dict(artikel={"m": "en", "f": "ei", "n": "et"})),
    ('jeg har [Slot]', 'Ich habe [Slot].'),
    ('det er min [Slot]', 'Das ist meine [Slot].'),
    ('jeg venter på [Art] [Slot]', 'Ich warte auf [Slot].', dict(artikel={"m": "en", "f": "ei", "n": "et"})),
    ('i morgen blir det [Slot]', 'Morgen gibt es [Slot].'),
    ('jeg fikk [Art] god [Slot]', 'Ich habe eine gute [Slot] bekommen.', dict(artikel={"m": "en", "f": "ei", "n": "et"})),
]

# Auffangrahmen fuer den Rest der Wortliste - nach Wortart,
# generisch. Siehe bauplan.py, "Auffangmodul".
REST_RAHMEN = {
    "Nomen": ('her er [Slot]', 'Hier ist der [Slot].'),
    "Verb": ('jeg vil [Slot]', 'Ich will [Slot].'),
    "Adjektiv": ('det er veldig [Slot]', 'Es ist sehr [Slot].'),
    "Adverb": ('jeg gjør det [Slot]', 'Ich mache es [Slot].'),
    "Pronomen": ('det er for [Slot]', 'Es ist für [Slot].'),
    "Praeposition": ('det er [Slot] huset', 'Es ist [Slot] dem Haus.'),
    "Konjunktion": ('jeg kommer [Slot] jeg kan', 'Ich komme, [Slot] ich kann.'),
    "Fragewort": ('[Slot] er det?', '[Slot] ist es?'),
    "Zahlwort": ('[Slot]', '[Slot]'),
    "Artikel": ('[Slot] hus', '[Slot] Haus.'),
    "_sonst": ('[Slot]', '[Slot]'),
}

# Funktionswoerter, die genau diese Satzmuster brauchen und sonst
# ungelehrt im Rahmen staenden (R5). "=" heisst: steht schon in der
# Zielsprache, nicht uebersetzen.
ZUSATZ = {
    4: ["=det"],
    5: ["=her"],
    7: ["=det"],
    8: ["=det"],
    9: ["=det"],
    17: ["=det"],
    19: ["=det"],
    21: ["=det"],
    25: ["=det"],
    32: ["=hjem"],
    34: ["=nå"],
    35: ["=det"],
    38: ["=den"],
    41: ["=morgen"],
    42: ["=mye"],
    46: ["=det"],
    54: ["=god"],
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
    ("[P] har [Slot]", "[P] habe [Slot].", dict(slotform="partizip")),
    ("i går har jeg [Slot]", "Gestern habe ich [Slot].", dict(slotform="partizip")),
    ("jeg har allerede [Slot]", "Ich habe schon [Slot].", dict(slotform="partizip")),
    ("[P] [Slot]", "[P] [Slot].", dict(slotform="praesens")),
    ("[P] [Slot]", "[P] [Slot].", dict(slotform="praesens")),
    ("[P] [Slot]", "[P] [Slot].", dict(slotform="praesens")),
    ("[P] [Slot]", "[P] [Slot].", dict(slotform="praesens")),
    ("det er mer [Slot]", "Das ist mehr [Slot]."),
    ("[P] er like [Slot] som deg", "[P] bin so [Slot] wie du."),
    ("[P] føler meg [Slot]", "[P] fühle mich [Slot]."),
    ("[P] møtes [Slot]", "[P] treffen uns [Slot]."),
    ("jeg blir her [Slot] jeg er trøtt", "Ich bleibe hier, [Slot] ich müde bin."),
    ("jeg tror at det er [Slot]", "Ich glaube, dass es [Slot] ist."),
    ("hvis jeg har tid, vil jeg [Slot]", "Wenn ich Zeit habe, will ich [Slot]."),
    ("kan du [Slot], er du snill?", "Kannst du bitte [Slot]?"),
    ("[P] må [Slot]", "[P] musst [Slot]."),
    ("[P] gir boken til [Slot]", "[P] gebe [Slot] das Buch."),
    ("[P] viser byen til [Slot]", "[P] zeige [Slot] die Stadt."),
    ("[P] vil ha et glass [Slot]", "[P] möchte ein Glas [Slot]."),
    ("[P] har nok [Slot]", "[P] haben genug [Slot]."),
    ("[P] har ventet i en [Slot]", "[P] warte seit einer [Slot]."),
    ("[Slot] går jeg hjem", "[Slot] gehe ich nach Hause."),
    ("[P] vil gjerne [Slot]", "[P] hätte gern [Slot]."),
    ("kan du gi meg [Slot]?", "Könnten Sie mir [Slot] geben?"),
    ("[P] tror at det er [Slot]", "[P] denke, das ist [Slot]."),
    ("[P] synes det er veldig [Slot]", "[P] finde das sehr [Slot]."),
    ("i morgen skal jeg [Slot]", "Morgen werde ich [Slot]."),
    ("[P] vil snart [Slot]", "[P] will bald [Slot]."),
    ("det er mannen som [Slot]", "Das ist der Mann, der [Slot].", dict(slotform="praesens")),
    ("jeg leter etter et sted hvor man kan [Slot]", "Ich suche einen Ort, wo man [Slot] kann."),
    ("i går var jeg på [Slot]", "Gestern war ich im [Slot]."),
    ("jeg vil [Slot] fordi jeg har tid", "Ich möchte [Slot], weil ich Zeit habe."),
]

# Funktionswoerter, die genau diese A2-Rahmen fest enthalten - ohne
# sie meldet R5 sie als nie eingefuehrt.
ZUSATZ_A2 = {
    9: ['=som'],
    15: ['=snill'],
    19: ['=et'],
    21: ['=en'],
    23: ['=gjerne'],
    30: ['=etter', '=sted'],
}

MODULE = (baue_module(MUSTER, zusatz_neu=ZUSATZ)
          + baue_module(MUSTER_A2, zusatz_neu=ZUSATZ_A2,
                        datei="spine_a2.json"))
