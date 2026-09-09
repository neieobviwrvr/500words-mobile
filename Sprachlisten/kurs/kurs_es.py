# -*- coding: utf-8 -*-
"""Lehrplan Spanisch. Gliederung: gemeinsam (siehe gemeinsam.py, ENTWURF.md).

**ser gegen estar** ist die Entscheidung, die diesen Lehrplan praegt.
Spanisch hat zwei Verben fuer "sein", und ein Anfaenger, der sie
verwechselt, sagt etwas Falsches - nicht nur etwas Ungeschicktes:

    estoy cansado   ich bin muede      voruebergehender ZUSTAND -> estar
    soy estudiante  ich bin Student    dauerhafte EIGENSCHAFT   -> ser

Deshalb sind Rahmen 1 und 2 zwei verschiedene Verben, obwohl im Deutschen
beide "ich bin" heissen. Der Nutzer lernt die Unterscheidung als Muster,
bevor sie ihm je als Regel begegnet.

**Artikel nach Genus** setzt der Generator selbst: `artikel={"m": "un",
"f": "una"}` sortiert die Slots nach ihrem Genus und baut je Gruppe eigene
Lektionen. So hoert der Nutzer "una casa" und "un libro" immer zusammen
mit dem Wort.

**Spanien, nicht Lateinamerika** - passend zu ttsLocale es-ES.
"""
from gemeinsam import baue_module

SPRACHE = "es"
TABELLE = "spanisch_vocab"
WORTSPALTE = "spanish"
DATEINAME = "esCourse.ts"
KONSTANTE = "SPANISH_COURSE"
SLOTS_DEUTSCH = True
# Konjugiert nach Person - siehe bauplan.py, "Personalkonjugation".
PERSONENKONJUGATION = True

MUSTER = [
    ("[P] estoy [Slot]", "[P] bin [Slot]."),
    ("[P] somos [Slot]", "[P] sind [Slot]."),
    ("[P] es muy [Slot]", "[P] ist sehr [Slot]."),
    ("esto es [Art] [Slot]", "Das ist ein [Slot].", dict(artikel={"m": "un", "f": "una"})),
    ("aquí hay [Art] [Slot]", "Hier ist ein [Slot].", dict(artikel={"m": "un", "f": "una"})),
    ("[P] tengo [Art] [Slot]", "[P] habe einen [Slot].", dict(artikel={"m": "un", "f": "una"})),
    ("esta es mi [Slot]", "Das ist mein [Slot]."),
    ("esta es [Slot] casa", "Das ist [Slot] Haus."),
    ("estos son [Slot] libros", "Das sind [Slot] Bücher."),
    ("[Slot] está aquí", "[Slot] ist hier."),
    ("[P] quiero [Slot]", "[P] möchte [Slot]."),
    ("[P] necesito [Slot]", "[P] brauche [Slot]."),
    ("[P] quiero [Art] [Slot], por favor", "[P] möchte einen [Slot], bitte.", dict(artikel={"m": "un", "f": "una"})),
    ("[P] como [Slot]", "[P] esse [Slot]."),
    ("[P] no estoy [Slot]", "[P] bin nicht [Slot]."),
    ("¿eres [P] [Slot]?", "Bist [P] [Slot]?"),
    ("¿[Slot] es esto?", "[Slot] ist das?"),
    ("¿dónde hay [Art] [Slot]?", "Wo gibt es einen [Slot]?", dict(artikel={"m": "un", "f": "una"})),
    ("¿hay [Art] [Slot] cerca?", "Gibt es hier ein [Slot]?", dict(artikel={"m": "un", "f": "una"})),
    ("[Slot] está aquí", "[Slot] ist hier."),
    ("está [Slot] la casa", "Es liegt [Slot] dem Haus."),
    ("[Slot]", "[Slot]"),
    ("[Slot]", "[Slot]"),
    ("[Slot]", "[Slot]"),
    ("es la [Slot] vez", "Das ist das [Slot] Mal."),
    ("¿cuánto cuesta [Art] [Slot]?", "Wie viel kostet ein [Slot]?", dict(artikel={"m": "un", "f": "una"})),
    ("es demasiado [Slot]", "Das ist zu [Slot]."),
    ("[P] puedo [Slot]", "[P] kann [Slot]."),
    ("[P] tengo que [Slot]", "[P] muss [Slot]."),
    ("[P] quiero [Slot]", "[P] will [Slot]."),
    ("[P] no puedo [Slot]", "[P] darf nicht [Slot]."),
    ("[P] voy a [Art] [Slot]", "[P] gehe zu einem [Slot].", dict(artikel={"m": "un", "f": "una"})),
    ("[P] viajo en [Slot]", "[P] fahre mit [Slot]."),
    ("[P] quiero [Slot] ahora", "[P] will jetzt [Slot]."),
    ("[Slot]", "[Slot]"),
    ("nos vemos por la [Slot]", "Wir sehen uns am [Slot]."),
    ("dura [Art] [Slot]", "Es dauert eine [Slot].", dict(artikel={"m": "un", "f": "una"})),
    ("[P] amo [Slot]", "[P] mag [Slot]."),
    ("[P] veo a [Slot]", "[P] sehe [Slot]."),
    ("es [Slot]", "Sie ist [Slot]."),
    ("la comida está [Slot]", "Das Essen ist [Slot]."),
    ("[P] estaba [Slot] ayer", "[P] war gestern [Slot]."),
    ("[P] voy a [Slot] mañana", "[P] werde morgen [Slot]."),
    ("[P] quiero [Slot] mucho", "[P] [Slot] viel."),
    ("[P] me pongo [Slot]", "[P] werde [Slot]."),
    ("estoy cansado [Slot] trabajo", "Ich bin müde, [Slot] ich arbeite."),
    ("quiero [Slot] pero no puedo", "Ich will [Slot], aber ich kann nicht."),
    ("es [Slot] pero funciona", "Es ist [Slot], aber es geht."),
    ("quiero [Slot]", "Ich will dich [Slot]."),
    ("me duele [Art] [Slot]", "[Slot] tut weh.", dict(artikel={"m": "un", "f": "una"})),
    ("tengo dolor en [Art] [Slot]", "Ich habe Schmerzen im [Slot].", dict(artikel={"m": "un", "f": "una"})),
    ("tengo [Art] [Slot]", "Ich habe ein [Slot].", dict(artikel={"m": "un", "f": "una"})),
    ("aquí hay [Art] [Slot]", "Hier gibt es einen [Slot].", dict(artikel={"m": "un", "f": "una"})),
    ("compro [Art] [Slot]", "Ich kaufe einen [Slot].", dict(artikel={"m": "un", "f": "una"})),
    ("tengo [Slot]", "Ich habe [Slot]."),
    ("este es mi [Slot]", "Das ist meine [Slot]."),
    ("espero [Art] [Slot]", "Ich warte auf [Slot].", dict(artikel={"m": "un", "f": "una"})),
    ("mañana hay [Slot]", "Morgen gibt es [Slot]."),
    ("he sacado [Art] buen [Slot]", "Ich habe eine gute [Slot] bekommen.", dict(artikel={"m": "un", "f": "una"})),
]

# Funktionswoerter, die genau diese Satzmuster brauchen. Sie werden dort
# ordentlich eingefuehrt statt stillschweigend vorausgesetzt - siehe
# gemeinsam.py, `zusatz_neu`.
ZUSATZ = {
    4: ["=esto"],
    5: ["=aquí"],
    25: ["=vez"],
    27: ["=demasiado"],
    29: ["=que"],
    34: ["=ahora"],
    36: ["=nos"],
    41: ["=comida"],
    46: ["=trabajo"],
    51: ["=dolor"],
}

# Auffangrahmen fuer den Rest der Wortliste - nach Wortart, generisch.
# Siehe bauplan.py, "Auffangmodul".
REST_RAHMEN = {
    "Nomen": ("aquí está el [Slot]", "Hier ist der [Slot]."),
    "Verb": ("quiero [Slot]", "Ich will [Slot]."),
    "Adjektiv": ("es muy [Slot]", "Es ist sehr [Slot]."),
    "Adverb": ("lo hago [Slot]", "Ich mache es [Slot]."),
    "Pronomen": ("es para [Slot]", "Es ist für [Slot]."),
    "Präposition": ("está [Slot] la casa", "Es ist [Slot] dem Haus."),
    "Konjunktion": ("vengo [Slot] puedo", "Ich komme, [Slot] ich kann."),
    "Fragewort": ("¿[Slot] es?", "[Slot] ist es?"),
    "Zahlwort": ("[Slot]", "[Slot]"),
    "Artikel": ("[Slot] libro", "[Slot] Buch."),
    "_sonst": ("[Slot]", "[Slot]"),
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
    ("[P] he [Slot]", "[P] habe [Slot].", dict(slotform="partizip")),
    ("ayer he [Slot]", "Gestern habe ich [Slot].", dict(slotform="partizip")),
    ("ya he [Slot]", "Ich habe schon [Slot].", dict(slotform="partizip")),
    ("[P] [Slot]", "[P] [Slot].", dict(slotform="praesens_2")),
    ("[P] [Slot]", "[P] [Slot].", dict(slotform="praesens_3")),
    ("[P] [Slot]", "[P] [Slot].", dict(slotform="praesens_4")),
    ("[P] [Slot]", "[P] [Slot].", dict(slotform="praesens_6")),
    ("es más [Slot]", "Das ist mehr [Slot]."),
    ("[P] soy tan [Slot] como tú", "[P] bin so [Slot] wie du."),
    ("[P] me siento [Slot]", "[P] fühle mich [Slot]."),
    ("[P] nos vemos [Slot]", "[P] treffen uns [Slot]."),
    ("me quedo aquí [Slot] estoy cansado", "Ich bleibe hier, [Slot] ich müde bin."),
    ("creo que es [Slot]", "Ich glaube, dass es [Slot] ist."),
    ("si tengo tiempo, quiero [Slot]", "Wenn ich Zeit habe, will ich [Slot]."),
    ("¿puedes [Slot], por favor?", "Kannst du bitte [Slot]?"),
    ("[P] tienes que [Slot]", "[P] musst [Slot]."),
    ("[P] doy el libro a [Slot]", "[P] gebe [Slot] das Buch."),
    ("[P] enseño la ciudad a [Slot]", "[P] zeige [Slot] die Stadt."),
    ("[P] quiero un vaso de [Slot]", "[P] möchte ein Glas [Slot]."),
    ("[P] tenemos suficiente [Slot]", "[P] haben genug [Slot]."),
    ("[P] espero desde hace una [Slot]", "[P] warte seit einer [Slot]."),
    ("[Slot] voy a casa", "[Slot] gehe ich nach Hause."),
    ("[P] me gustaría [Slot]", "[P] hätte gern [Slot]."),
    ("¿podría darme [Slot]?", "Könnten Sie mir [Slot] geben?"),
    ("[P] pienso que es [Slot]", "[P] denke, das ist [Slot]."),
    ("[P] lo encuentro muy [Slot]", "[P] finde das sehr [Slot]."),
    ("mañana voy a [Slot]", "Morgen werde ich [Slot]."),
    ("[P] quiero [Slot] pronto", "[P] will bald [Slot]."),
    ("este es el hombre que [Slot]", "Das ist der Mann, der [Slot].", dict(slotform="praesens_3")),
    ("busco un sitio donde se puede [Slot]", "Ich suche einen Ort, wo man [Slot] kann."),
    ("ayer estuve en [Slot]", "Gestern war ich im [Slot]."),
    ("quiero [Slot] porque tengo tiempo", "Ich möchte [Slot], weil ich Zeit habe."),
]

# Funktionswoerter, die genau diese A2-Rahmen fest enthalten - ohne
# sie meldet R5 sie als nie eingefuehrt.
ZUSATZ_A2 = {
    21: ['=desde'],
    26: ['=lo'],
    29: ['=hombre'],
    30: ['=se'],
}

MODULE = (baue_module(MUSTER, zusatz_neu=ZUSATZ)
          + baue_module(MUSTER_A2, zusatz_neu=ZUSATZ_A2,
                        datei="spine_a2.json"))
