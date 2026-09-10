# -*- coding: utf-8 -*-
"""Lehrplan Italienisch. Gliederung: gemeinsam (siehe gemeinsam.py, ENTWURF.md).

**Alter und Befinden laufen ueber `avere`**, nicht ueber `essere`:
`ho fame` (ich habe Hunger), `ho vent'anni` (ich bin zwanzig). Deshalb
steht in Rahmen 12 `ho bisogno di` statt einer Konstruktion mit `sono` -
das ist der haeufigste Fehler deutscher Anfaenger.

**Artikel nach Genus** (un/una) setzt der Generator aus der `genus`-Spalte.
Der BESTIMMTE Artikel (il/lo/la) haengt zusaetzlich vom Anlaut ab
(lo studente, l'amico) und wird bewusst NICHT automatisch gesetzt - dafuer
reicht die Datenlage nicht, und ein falscher bestimmter Artikel waere
schlimmer als gar keiner.
"""
from gemeinsam import baue_module

SPRACHE = "it"
TABELLE = "italienisch_vocab"
WORTSPALTE = "italian"
DATEINAME = "itCourse.ts"
KONSTANTE = "ITALIAN_COURSE"
SLOTS_DEUTSCH = True
# Konjugiert nach Person - siehe bauplan.py, "Personalkonjugation".
PERSONENKONJUGATION = True

MUSTER = [
    ('[P] sono [Slot]', '[P] bin [Slot].'),
    ("[P] siamo [Slot]", "[P] sind [Slot]."),
    ('[P] è molto [Slot]', '[P] ist sehr [Slot].'),
    ('questo è [Art] [Slot]', 'Das ist ein [Slot].', dict(artikel={"m": "un", "f": "una"})),
    ("qui c'è [Art] [Slot]", 'Hier ist ein [Slot].', dict(artikel={"m": "un", "f": "una"})),
    ('[P] ho [Art] [Slot]', '[P] habe einen [Slot].', dict(artikel={"m": "un", "f": "una"})),
    ('questa è mia [Slot]', 'Das ist mein [Slot].'),
    ('questa è [Slot] casa', 'Das ist [Slot] Haus.'),
    ('questi sono [Slot] libri', 'Das sind [Slot] Bücher.'),
    ('[Slot] è qui', '[Slot] ist hier.'),
    ('[P] voglio [Slot]', '[P] möchte [Slot].'),
    ('[P] ho bisogno di [Slot]', '[P] brauche [Slot].'),
    ('[P] vorrei [Art] [Slot]', '[P] möchte einen [Slot], bitte.', dict(artikel={"m": "un", "f": "una"})),
    ('[P] mangio [Slot]', '[P] esse [Slot].'),
    ('[P] non sono [Slot]', '[P] bin nicht [Slot].'),
    ('sei [Slot]?', 'Bist [P] [Slot]?'),
    ('[Slot] è questo?', '[Slot] ist das?'),
    ("dove c'è [Art] [Slot]?", 'Wo gibt es einen [Slot]?', dict(artikel={"m": "un", "f": "una"})),
    ("c'è [Art] [Slot] qui?", 'Gibt es hier ein [Slot]?', dict(artikel={"m": "un", "f": "una"})),
    ('[Slot] è qui', '[Slot] ist hier.'),
    ('è [Slot] la casa', 'Es liegt [Slot] dem Haus.'),
    ('[Slot]', '[Slot]'),
    ('[Slot]', '[Slot]'),
    ('[Slot]', '[Slot]'),
    ('è la [Slot] volta', 'Das ist das [Slot] Mal.'),
    ('quanto costa [Art] [Slot]?', 'Wie viel kostet ein [Slot]?', dict(artikel={"m": "un", "f": "una"})),
    ('è troppo [Slot]', 'Das ist zu [Slot].'),
    ('[P] posso [Slot]', '[P] kann [Slot].'),
    ('[P] devo [Slot]', '[P] muss [Slot].'),
    ('[P] voglio [Slot]', '[P] will [Slot].'),
    ('[P] non posso [Slot]', '[P] darf nicht [Slot].'),
    ('[P] vado a [Art] [Slot]', '[P] gehe zu einem [Slot].', dict(artikel={"m": "un", "f": "una"})),
    ('[P] viaggio in [Slot]', '[P] fahre mit [Slot].'),
    ('[P] voglio [Slot] adesso', '[P] will jetzt [Slot].'),
    ('[Slot]', '[Slot]'),
    ('ci vediamo la [Slot]', 'Wir sehen uns am [Slot].'),
    ('dura [Art] [Slot]', 'Es dauert eine [Slot].', dict(artikel={"m": "un", "f": "una"})),
    ('[P] amo [Slot]', '[P] mag [Slot].'),
    ('[P] vedo [Slot]', '[P] sehe [Slot].'),
    ('è [Slot]', 'Sie ist [Slot].'),
    ('il cibo è [Slot]', 'Das Essen ist [Slot].'),
    ('[P] ero [Slot] ieri', '[P] war gestern [Slot].'),
    ('[P] [Slot] domani', '[P] werde morgen [Slot].'),
    ('[P] voglio [Slot] molto', '[P] will viel [Slot].'),
    ('[P] divento [Slot]', '[P] werde [Slot].'),
    ('sono stanco [Slot] lavoro', 'Ich bin müde, [Slot] ich arbeite.'),
    ('voglio [Slot] ma non posso', 'Ich will [Slot], aber ich kann nicht.'),
    ('è [Slot] ma va bene', 'Es ist [Slot], aber es geht.'),
    ('voglio [Slot]', 'Ich will dich [Slot].'),
    ('[Art] [Slot] mi fa male', '[Slot] tut weh.', dict(artikel={"m": "un", "f": "una"})),
    ('ho male a [Art] [Slot]', 'Ich habe Schmerzen im [Slot].', dict(artikel={"m": "un", "f": "una"})),
    ('ho [Art] [Slot]', 'Ich habe ein [Slot].', dict(artikel={"m": "un", "f": "una"})),
    ("qui c'è [Art] [Slot]", 'Hier gibt es einen [Slot].', dict(artikel={"m": "un", "f": "una"})),
    ('compro [Art] [Slot]', 'Ich kaufe einen [Slot].', dict(artikel={"m": "un", "f": "una"})),
    ('ho [Slot]', 'Ich habe [Slot].'),
    ('questo è il mio [Slot]', 'Das ist meine [Slot].'),
    ('aspetto [Art] [Slot]', 'Ich warte auf [Slot].', dict(artikel={"m": "un", "f": "una"})),
    ("domani c'è [Slot]", 'Morgen gibt es [Slot].'),
    ('ho preso [Art] buon [Slot]', 'Ich habe eine gute [Slot] bekommen.', dict(artikel={"m": "un", "f": "una"})),
]

# Auffangrahmen fuer den Rest der Wortliste - nach Wortart,
# generisch. Siehe bauplan.py, "Auffangmodul".
REST_RAHMEN = {
    "Nomen": ('ecco il [Slot]', 'Hier ist der [Slot].'),
    "Verb": ('voglio [Slot]', 'Ich will [Slot].'),
    "Adjektiv": ('è molto [Slot]', 'Es ist sehr [Slot].'),
    "Adverb": ('lo faccio [Slot]', 'Ich mache es [Slot].'),
    "Pronomen": ('è per [Slot]', 'Es ist für [Slot].'),
    "Praeposition": ('è [Slot] la casa', 'Es ist [Slot] dem Haus.'),
    "Konjunktion": ('vengo [Slot] posso', 'Ich komme, [Slot] ich kann.'),
    "Fragewort": ('[Slot] è?', '[Slot] ist es?'),
    "Zahlwort": ('[Slot]', '[Slot]'),
    "Artikel": ('[Slot] libro', '[Slot] Buch.'),
    "_sonst": ('[Slot]', '[Slot]'),
}

# Funktionswoerter, die genau diese Satzmuster brauchen und sonst
# ungelehrt im Rahmen staenden (R5). "=" heisst: steht schon in der
# Zielsprache, nicht uebersetzen.
ZUSATZ = {
    4: ["=questo"],
    5: ["=qui"],
    11: ["=di"],
    15: ["=sei"],
    20: ["=la"],
    27: ["=troppo"],
    34: ["=ci", "=la", "=adesso"],
    39: ["=il", "=cibo"],
    44: ["=lavoro"],
    53: ["=il"],
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
    ("[P] ho [Slot]", "[P] habe [Slot].", dict(slotform="partizip")),
    ("ieri ho [Slot]", "Gestern habe ich [Slot].", dict(slotform="partizip")),
    ("ho già [Slot]", "Ich habe schon [Slot].", dict(slotform="partizip")),
    ("[P] [Slot]", "[P] [Slot].", dict(slotform="praesens_2")),
    ("[P] [Slot]", "[P] [Slot].", dict(slotform="praesens_3")),
    ("[P] [Slot]", "[P] [Slot].", dict(slotform="praesens_4")),
    ("[P] [Slot]", "[P] [Slot].", dict(slotform="praesens_6")),
    ("è più [Slot]", "Das ist mehr [Slot]."),
    ("[P] sono [Slot] come te", "[P] bin so [Slot] wie du."),
    ("[P] mi sento [Slot]", "[P] fühle mich [Slot]."),
    ("[P] ci vediamo [Slot]", "[P] treffen uns [Slot]."),
    ("resto qui [Slot] sono stanco", "Ich bleibe hier, [Slot] ich müde bin."),
    ("credo che sia [Slot]", "Ich glaube, dass es [Slot] ist."),
    ("se ho tempo, voglio [Slot]", "Wenn ich Zeit habe, will ich [Slot]."),
    ("puoi [Slot], per favore?", "Kannst du bitte [Slot]?"),
    ("[P] devi [Slot]", "[P] musst [Slot]."),
    ("[P] do il libro a [Slot]", "[P] gebe [Slot] das Buch."),
    ("[P] mostro la città a [Slot]", "[P] zeige [Slot] die Stadt."),
    ("[P] voglio un bicchiere di [Slot]", "[P] möchte ein Glas [Slot]."),
    ("[P] abbiamo abbastanza [Slot]", "[P] haben genug [Slot]."),
    ("[P] aspetto da una [Slot]", "[P] warte seit einer [Slot]."),
    ("[Slot] vado a casa", "[Slot] gehe ich nach Hause."),
    ("[P] vorrei [Slot]", "[P] hätte gern [Slot]."),
    ("potrebbe darmi [Slot]?", "Könnten Sie mir [Slot] geben?"),
    ("[P] penso che sia [Slot]", "[P] denke, das ist [Slot]."),
    ("[P] lo trovo molto [Slot]", "[P] finde das sehr [Slot]."),
    ("domani [Slot]", "Morgen werde ich [Slot]."),
    ("[P] voglio [Slot] presto", "[P] will bald [Slot]."),
    ("questo è l'uomo che [Slot]", "Das ist der Mann, der [Slot].", dict(slotform="praesens_3")),
    ("cerco un posto dove si può [Slot]", "Ich suche einen Ort, wo man [Slot] kann."),
    ("ieri ero a [Slot]", "Gestern war ich im [Slot]."),
    ("voglio [Slot] perché ho tempo", "Ich möchte [Slot], weil ich Zeit habe."),
]

# Funktionswoerter, die genau diese A2-Rahmen fest enthalten - ohne
# sie meldet R5 sie als nie eingefuehrt.
ZUSATZ_A2 = {
    13: ['=che'],
    19: ['=un'],
    21: ['=da', '=una'],
    26: ['=lo'],
    30: ['=posto'],
}

MODULE = (baue_module(MUSTER, zusatz_neu=ZUSATZ)
          + baue_module(MUSTER_A2, zusatz_neu=ZUSATZ_A2,
                        datei="spine_a2.json"))
