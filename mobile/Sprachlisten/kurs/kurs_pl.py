# -*- coding: utf-8 -*-
"""Lehrplan Polnisch. Gliederung: gemeinsam (siehe gemeinsam.py, ENTWURF.md).

**Die grosse Einschraenkung: Polnisch DEKLINIERT, die Wortliste
fuehrt den Nominativ.** `chcę kawę` (Akkusativ) statt `chcę kawa`,
`czekam na autobus` (Akkusativ), `nie mam czasu` (Genitiv nach
Verneinung). Ein Rahmen, der einen anderen Fall verlangt, erzeugt mit der
Woerterbuchform einen falschen Satz.

Deshalb sind die Rahmen hier bewusst NOMINATIV-LASTIG gebaut: `to jest
[Slot]`, `[Slot] jest tutaj`, `gdzie jest [Slot]?`, `tutaj jest [Slot]`.
Wo ein anderer Fall unvermeidlich ist (Rahmen 11, 26, 57), steht die
Grundform - **das ist eine bekannte Ungenauigkeit** und der wichtigste
Punkt fuer einen Muttersprachler-Check.

Sauber loesen liesse sich das nur mit Fallformen in der Vokabeltabelle;
die gibt es nicht. Lieber ein sichtbar vereinfachter Kurs als einer, der
so tut, als gaebe es keine Faelle.

**Gesiezt wird mit `pan`/`pani` und der DRITTEN Person**, nicht mit einer
Sie-Form. Der Kurs duzt durchgehend - fuer die Zielgruppe richtig, aber
erwaehnenswert.
"""
from gemeinsam import baue_module

SPRACHE = "pl"
TABELLE = "polnisch_vocab"
WORTSPALTE = "polish"
DATEINAME = "plCourse.ts"
KONSTANTE = "POLISH_COURSE"
SLOTS_DEUTSCH = True
# Konjugiert nach Person - siehe bauplan.py, "Personalkonjugation".
PERSONENKONJUGATION = True

MUSTER = [
    ('[P] jestem [Slot]', '[P] bin [Slot].'),
    ("[P] jesteśmy [Slot]", "[P] sind [Slot]."),
    ('[P] jest bardzo [Slot]', '[P] ist sehr [Slot].'),
    ('to jest [Slot]', 'Das ist ein [Slot].'),
    ('tutaj jest [Slot]', 'Hier ist ein [Slot].'),
    ('[P] mam [Slot]', '[P] habe einen [Slot].'),
    ('to jest moja [Slot]', 'Das ist mein [Slot].'),
    ('to jest [Slot] dom', 'Das ist [Slot] Haus.'),
    ('to są [Slot] książki', 'Das sind [Slot] Bücher.'),
    ('[Slot] jest tutaj', '[Slot] ist hier.'),
    ('[P] chcę [Slot]', '[P] möchte [Slot].'),
    ('[P] potrzebuję [Slot]', '[P] brauche [Slot].'),
    ('[P] poproszę [Slot]', '[P] möchte einen [Slot], bitte.'),
    ('[P] jem [Slot]', '[P] esse [Slot].'),
    ('[P] nie jestem [Slot]', '[P] bin nicht [Slot].'),
    ('czy jesteś [Slot]?', 'Bist [P] [Slot]?'),
    ('[Slot] to jest?', '[Slot] ist das?'),
    ('gdzie jest [Slot]?', 'Wo gibt es einen [Slot]?'),
    ('czy tutaj jest [Slot]?', 'Gibt es hier ein [Slot]?'),
    ('[Slot] jest tutaj', '[Slot] ist hier.'),
    ('to jest [Slot] domem', 'Es liegt [Slot] dem Haus.'),
    ('[Slot]', '[Slot]'),
    ('[Slot]', '[Slot]'),
    ('[Slot]', '[Slot]'),
    ('to [Slot] raz', 'Das ist das [Slot] Mal.'),
    ('ile kosztuje [Slot]?', 'Wie viel kostet ein [Slot]?'),
    ('to za [Slot]', 'Das ist zu [Slot].'),
    ('[P] mogę [Slot]', '[P] kann [Slot].'),
    ('[P] muszę [Slot]', '[P] muss [Slot].'),
    ('[P] chcę [Slot]', '[P] will [Slot].'),
    ('[P] nie mogę [Slot]', '[P] darf nicht [Slot].'),
    ('[P] idę do [Slot]', '[P] gehe zu einem [Slot].'),
    ('[P] jadę [Slot]', '[P] fahre mit [Slot].'),
    ('[P] chcę [Slot] teraz', '[P] will jetzt [Slot].'),
    ('[Slot]', '[Slot]'),
    ('do zobaczenia w [Slot]', 'Wir sehen uns am [Slot].'),
    ('to trwa [Slot]', 'Es dauert eine [Slot].'),
    ('[P] lubię [Slot]', '[P] mag [Slot].'),
    ('[P] widzę [Slot]', '[P] sehe [Slot].'),
    ('to jest [Slot]', 'Sie ist [Slot].'),
    ('jedzenie jest [Slot]', 'Das Essen ist [Slot].'),
    ('wczoraj [P] byłem [Slot]', '[P] war gestern [Slot].'),
    ('jutro będę [Slot]', '[P] werde morgen [Slot].'),
    ('[P] chcę dużo [Slot]', '[P] will viel [Slot].'),
    ('[P] staję się [Slot]', '[P] werde [Slot].'),
    ('jestem zmęczony [Slot] pracuję', 'Ich bin müde, [Slot] ich arbeite.'),
    ('chcę [Slot] ale nie mogę', 'Ich will [Slot], aber ich kann nicht.'),
    ('to [Slot] ale da się', 'Es ist [Slot], aber es geht.'),
    ('chcę cię [Slot]', 'Ich will dich [Slot].'),
    ('boli mnie [Slot]', '[Slot] tut weh.'),
    ('mam ból [Slot]', 'Ich habe Schmerzen im [Slot].'),
    ('mam [Slot]', 'Ich habe ein [Slot].'),
    ('tutaj jest [Slot]', 'Hier gibt es einen [Slot].'),
    ('kupuję [Slot]', 'Ich kaufe einen [Slot].'),
    ('mam [Slot]', 'Ich habe [Slot].'),
    ('to jest moja [Slot]', 'Das ist meine [Slot].'),
    ('czekam na [Slot]', 'Ich warte auf [Slot].'),
    ('jutro będzie [Slot]', 'Morgen gibt es [Slot].'),
    ('dostałem dobrą [Slot]', 'Ich habe eine gute [Slot] bekommen.'),
]

# Auffangrahmen fuer den Rest der Wortliste - nach Wortart,
# generisch. Siehe bauplan.py, "Auffangmodul".
REST_RAHMEN = {
    "Nomen": ('tutaj jest [Slot]', 'Hier ist der [Slot].'),
    "Verb": ('chcę [Slot]', 'Ich will [Slot].'),
    "Adjektiv": ('to bardzo [Slot]', 'Es ist sehr [Slot].'),
    "Adverb": ('robię to [Slot]', 'Ich mache es [Slot].'),
    "Pronomen": ('to dla [Slot]', 'Es ist für [Slot].'),
    "Praeposition": ('to jest [Slot] domem', 'Es ist [Slot] dem Haus.'),
    "Konjunktion": ('przyjdę [Slot] mogę', 'Ich komme, [Slot] ich kann.'),
    "Fragewort": ('[Slot] to jest?', '[Slot] ist es?'),
    "Zahlwort": ('[Slot]', '[Slot]'),
    "_sonst": ('[Slot]', '[Slot]'),
}

# Funktionswoerter, die genau diese Satzmuster brauchen und sonst
# ungelehrt im Rahmen staenden (R5). "=" heisst: steht schon in der
# Zielsprache, nicht uebersetzen.
ZUSATZ = {
    5: ["=tutaj"],
    16: ["=czy"],
    19: ["=czy"],
    34: ["=teraz"],
    38: ["=jedzenie"],
    41: ["=dużo"],
    42: ["=się"],
    45: ["=się"],
    47: ["=ból"],
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
    ("[P] [Slot]", "[P] habe [Slot].", dict(slotform="praeteritum")),
    ("wczoraj [Slot]", "Gestern habe ich [Slot].", dict(slotform="praeteritum")),
    ("już [Slot]", "Ich habe schon [Slot].", dict(slotform="praeteritum")),
    ("[P] [Slot]", "[P] [Slot].", dict(slotform="praesens_2")),
    ("[P] [Slot]", "[P] [Slot].", dict(slotform="praesens_3")),
    ("[P] [Slot]", "[P] [Slot].", dict(slotform="praesens_4")),
    ("[P] [Slot]", "[P] [Slot].", dict(slotform="praesens_6")),
    ("to jest bardziej [Slot]", "Das ist mehr [Slot]."),
    ("[P] jestem tak [Slot] jak ty", "[P] bin so [Slot] wie du."),
    ("[P] czuję się [Slot]", "[P] fühle mich [Slot]."),
    ("[P] spotykamy się [Slot]", "[P] treffen uns [Slot]."),
    ("zostaję tutaj, [Slot] jestem zmęczony", "Ich bleibe hier, [Slot] ich müde bin."),
    ("myślę, że to jest [Slot]", "Ich glaube, dass es [Slot] ist."),
    ("jeśli mam czas, chcę [Slot]", "Wenn ich Zeit habe, will ich [Slot]."),
    ("czy możesz [Slot], proszę?", "Kannst du bitte [Slot]?"),
    ("[P] musisz [Slot]", "[P] musst [Slot]."),
    ("[P] daję książkę [Slot]", "[P] gebe [Slot] das Buch."),
    ("[P] pokazuję miasto [Slot]", "[P] zeige [Slot] die Stadt."),
    ("[P] chcę szklankę [Slot]", "[P] möchte ein Glas [Slot]."),
    ("[P] mamy dosyć [Slot]", "[P] haben genug [Slot]."),
    ("[P] czekam od [Slot]", "[P] warte seit einer [Slot]."),
    ("[Slot] idę do domu", "[Slot] gehe ich nach Hause."),
    ("[P] chciałbym [Slot]", "[P] hätte gern [Slot]."),
    ("czy może mi pan dać [Slot]?", "Könnten Sie mir [Slot] geben?"),
    ("[P] myślę, że to [Slot]", "[P] denke, das ist [Slot]."),
    ("[P] uważam to za bardzo [Slot]", "[P] finde das sehr [Slot]."),
    ("jutro będę [Slot]", "Morgen werde ich [Slot]."),
    ("[P] chcę wkrótce [Slot]", "[P] will bald [Slot]."),
    ("to jest człowiek, który [Slot]", "Das ist der Mann, der [Slot].", dict(slotform="praesens_3")),
    ("szukam miejsca, gdzie można [Slot]", "Ich suche einen Ort, wo man [Slot] kann."),
    ("wczoraj byłem w [Slot]", "Gestern war ich im [Slot]."),
    ("chcę [Slot], bo mam czas", "Ich möchte [Slot], weil ich Zeit habe."),
]

# Funktionswoerter, die genau diese A2-Rahmen fest enthalten - ohne
# sie meldet R5 sie als nie eingefuehrt.
ZUSATZ_A2 = {
    29: ['=człowiek'],
}

MODULE = (baue_module(MUSTER, zusatz_neu=ZUSATZ)
          + baue_module(MUSTER_A2, zusatz_neu=ZUSATZ_A2,
                        datei="spine_a2.json"))
