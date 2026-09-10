# -*- coding: utf-8 -*-
"""Lehrplan Russisch. Gliederung: gemeinsam (siehe gemeinsam.py, ENTWURF.md).

**Russisch hat im Praesens KEIN "sein".**
    я студент     ich Student      = ich bin Student
    я устал       ich muede        = ich bin muede
Das Verb fehlt schlicht. Deutsche Anfaenger setzen aus Gewohnheit `есть`
ein, was falsch ist. Die Rahmen 1-3 zeigen die Leerstelle deshalb von
Anfang an - der Nutzer lernt sie als Muster, nicht als Ausnahme.

**Gelernt wird ueber die LAUTSCHRIFT**, das Kyrillische laeuft passiv mit
(es traegt Vertonung und Spracherkennung). Jeder Rahmen liefert deshalb
`muster` (Kyrillisch) UND `musterLaut` (Umschrift). Die Umschrift ist
deutsch gelesen und mit Betonung, wie im Phrasebook: ш=sch, ч=tsch,
в=w, з=s, unbetontes о wie a.

**Die grosse Einschraenkung: Russisch DEKLINIERT, die Wortliste fuehrt den
Nominativ.** `я хочу воду` (Akkusativ) statt `вода`, `нет времени`
(Genitiv). Die Rahmen sind deshalb bewusst nominativlastig gebaut - `это
[Slot]`, `[Slot] здесь`, `где [Slot]?`. Wo ein anderer Fall noetig waere
(Rahmen 11, 12, 26), steht die Grundform. **Das ist eine bekannte
Ungenauigkeit** und der wichtigste Punkt fuer einen Muttersprachler-Check.
Sauber loesen liesse sich das nur mit Fallformen in der Vokabeltabelle;
die gibt es nicht.
"""
from gemeinsam import baue_module

SPRACHE = "ru"
TABELLE = "russisch_vocab"
WORTSPALTE = "russian"
LAUTSCHRIFT_SPALTE = "lautschrift"
DATEINAME = "ruCourse.ts"
KONSTANTE = "RUSSIAN_COURSE"
SLOTS_DEUTSCH = True
# Konjugiert nach Person - siehe bauplan.py, "Personalkonjugation".
PERSONENKONJUGATION = True

MUSTER = [
    ("[P] [Slot]", "[P] bin [Slot].", None, "[P] [Slot]"),
    ("[P] [Slot]", "[P] sind [Slot].", None, "[P] [Slot]"),
    ("[P] очень [Slot]", "[P] ist sehr [Slot].", None, "[P] ótschen [Slot]"),
    ("это [Slot]", "Das ist ein [Slot].", None, "eto [Slot]"),
    ("здесь [Slot]", "Hier ist ein [Slot].", None, "sdes [Slot]"),
    ("у меня есть [Slot]", "[P] habe einen [Slot].", None, "u menjá jest [Slot]"),
    ("это моя [Slot]", "Das ist mein [Slot].", None, "eto majá [Slot]"),
    ("это [Slot] дом", "Das ist [Slot] Haus.", None, "eto [Slot] dom"),
    ("это [Slot] книги", "Das sind [Slot] Bücher.", None, "eto [Slot] knígi"),
    ("[Slot] здесь", "[Slot] ist hier.", None, "[Slot] sdes"),
    ("[P] хочу [Slot]", "[P] möchte [Slot].", None, "[P] chatschú [Slot]"),
    ("мне нужен [Slot]", "[P] brauche [Slot].", None, "mnje núshen [Slot]"),
    ("[P] хочу [Slot], пожалуйста", "[P] möchte einen [Slot], bitte.", None,
     "[P] chatschú [Slot], pashálusta"),
    ("[P] ем [Slot]", "[P] esse [Slot].", None, "[P] jem [Slot]"),
    ("[P] не [Slot]", "[P] bin nicht [Slot].", None, "[P] nje [Slot]"),
    ("ты [Slot]?", "Bist [P] [Slot]?", None, "ty [Slot]?"),
    ("[Slot] это?", "[Slot] ist das?", None, "[Slot] eto?"),
    ("где [Slot]?", "Wo gibt es einen [Slot]?", None, "gdje [Slot]?"),
    ("здесь есть [Slot]?", "Gibt es hier ein [Slot]?", None, "sdes jest [Slot]?"),
    ("[Slot] здесь", "[Slot] ist hier.", None, "[Slot] sdes"),
    ("это [Slot] дома", "Es liegt [Slot] dem Haus.", None, "eto [Slot] dóma"),
    ("[Slot]", "[Slot]", None, "[Slot]"),
    ("[Slot]", "[Slot]", None, "[Slot]"),
    ("[Slot]", "[Slot]", None, "[Slot]"),
    ("это [Slot] раз", "Das ist das [Slot] Mal.", None, "eto [Slot] ras"),
    ("сколько стоит [Slot]?", "Wie viel kostet ein [Slot]?", None,
     "skólka stóit [Slot]?"),
    ("это слишком [Slot]", "Das ist zu [Slot].", None, "eto slíschkam [Slot]"),
    ("[P] могу [Slot]", "[P] kann [Slot].", None, "[P] magú [Slot]"),
    ("[P] должен [Slot]", "[P] muss [Slot].", None, "[P] dólshen [Slot]"),
    ("[P] хочу [Slot]", "[P] will [Slot].", None, "[P] chatschú [Slot]"),
    ("[P] не могу [Slot]", "[P] darf nicht [Slot].", None, "[P] nje magú [Slot]"),
    ("[P] иду в [Slot]", "[P] gehe zu einem [Slot].", None, "[P] idú w [Slot]"),
    ("[P] еду на [Slot]", "[P] fahre mit [Slot].", None, "[P] jédu na [Slot]"),
    ("[P] хочу [Slot] сейчас", "[P] will jetzt [Slot].", None, "[P] chatschú [Slot] sitschás"),
    ("[Slot]", "[Slot]", None, "[Slot]"),
    ("увидимся [Slot]", "Wir sehen uns am [Slot].", None, "uwídimsja [Slot]"),
    ("это займёт [Slot]", "Es dauert eine [Slot].", None, "eto sajmjót [Slot]"),
    ("[P] люблю [Slot]", "[P] mag [Slot].", None, "[P] ljubljú [Slot]"),
    ("[P] вижу [Slot]", "[P] sehe [Slot].", None, "[P] wíshu [Slot]"),
    ("это [Slot]", "Sie ist [Slot].", None, "eto [Slot]"),
    ("еда [Slot]", "Das Essen ist [Slot].", None, "jedá [Slot]"),
    ("вчера [P] был [Slot]", "[P] war gestern [Slot].", None, "wtscherá [P] byl [Slot]"),
    ("завтра [P] буду [Slot]", "[P] werde morgen [Slot].", None,
     "sáwtra [P] búdu [Slot]"),
    ("[P] хочу много [Slot]", "[P] will viel [Slot].", None, "[P] chatschú mnóga [Slot]"),
    ("[P] становлюсь [Slot]", "[P] werde [Slot].", None, "[P] stanawljús [Slot]"),
    ("я устал [Slot] работаю", "Ich bin müde, [Slot] ich arbeite.", None,
     "ja ustál [Slot] rabótaju"),
    ("хочу [Slot] но не могу", "Ich will [Slot], aber ich kann nicht.", None,
     "chatschú [Slot] no nje magú"),
    ("это [Slot] но ничего", "Es ist [Slot], aber es geht.", None,
     "eto [Slot] no nitschewó"),
    ("я хочу тебя [Slot]", "Ich will dich [Slot].", None, "ja chatschú tebjá [Slot]"),
    ("у меня болит [Slot]", "[Slot] tut weh.", None, "u menjá balít [Slot]"),
    ("у меня боль в [Slot]", "Ich habe Schmerzen im [Slot].", None,
     "u menjá bol w [Slot]"),
    ("у меня есть [Slot]", "Ich habe ein [Slot].", None, "u menjá jest [Slot]"),
    ("здесь есть [Slot]", "Hier gibt es einen [Slot].", None, "sdes jest [Slot]"),
    ("я покупаю [Slot]", "Ich kaufe einen [Slot].", None, "ja pakupáju [Slot]"),
    ("у меня есть [Slot]", "Ich habe [Slot].", None, "u menjá jest [Slot]"),
    ("это моя [Slot]", "Das ist meine [Slot].", None, "eto majá [Slot]"),
    ("я жду [Slot]", "Ich warte auf [Slot].", None, "ja shdu [Slot]"),
    ("завтра будет [Slot]", "Morgen gibt es [Slot].", None, "sáwtra búdet [Slot]"),
    ("я получил хороший [Slot]", "Ich habe eine gute [Slot] bekommen.", None,
     "ja palutschíl charóschi [Slot]"),
]

# Auffangrahmen fuer den Rest der Wortliste - nach Wortart, generisch.
# Siehe bauplan.py, "Auffangmodul".
REST_RAHMEN = {
    "Nomen": ("вот [Slot]", "Hier ist der [Slot].", "wot [Slot]"),
    "Verb": ("я хочу [Slot]", "Ich will [Slot].", "ja chatschú [Slot]"),
    "Adjektiv": ("это очень [Slot]", "Es ist sehr [Slot].", "eto ótschen [Slot]"),
    "Adverb": ("я делаю это [Slot]", "Ich mache es [Slot].", "ja délaju eto [Slot]"),
    "Pronomen": ("это для [Slot]", "Es ist für [Slot].", "eto dlja [Slot]"),
    "Praeposition": ("это [Slot] дома", "Es ist [Slot] dem Haus.", "eto [Slot] dóma"),
    "Konjunktion": ("я приду [Slot] могу", "Ich komme, [Slot] ich kann.",
                    "ja pridú [Slot] magú"),
    "Fragewort": ("[Slot] это?", "[Slot] ist es?", "[Slot] eto?"),
    "Zahlwort": ("[Slot]", "[Slot]", "[Slot]"),
    "_sonst": ("[Slot]", "[Slot]", "[Slot]"),
}

# Funktionswoerter, die genau diese Satzmuster brauchen und sonst
# ungelehrt im Rahmen staenden (R5). "=" heisst: steht schon in der
# Zielsprache, nicht uebersetzen.
ZUSATZ = {
    4: ["=это"],
    5: ["=здесь"],
    6: ["=у", "=меня", "=есть"],
    7: ["=это"],
    8: ["=это"],
    9: ["=это"],
    12: ["=мне"],
    17: ["=это"],
    21: ["=это", "=дома"],
    27: ["=это"],
    31: ["=не"],
    34: ["=домой", "=сейчас"],
    37: ["=это"],
    41: ["=еда"],
    44: ["=много"],
    47: ["=не"],
    48: ["=это", "=ничего"],
    51: ["=боль"],
    59: ["=хороший"],
}



# ---------------------------------------------------------------------------
# A2-Stufe (Module 15-28), Gliederung in spine_a2.json - dieselbe fuer ALLE
# zehn Sprachen.
#
# **Die Slots sind fast alle schon bekannt.** Das ist Absicht: A2 bringt
# nicht mehr Woerter, sondern mehr STRUKTUR - Vergangenheit, alle Personen,
# Vergleich, Nebensatz, Konditional. Die 500 Kernwoerter bekommen dadurch
# nebenbei weitere Begegnungen.
# **Russisch traegt Zeit und Person im RAHMEN, nicht im Slot.** Die
# Lautschrift-Spalte fuehrt die Umschrift der Grundform; eine gebeugte Form
# haette dort keine, und Schrift und Lerntext liefen auseinander ("byt"
# gelesen, "буду" gesprochen). Nach einem Modalverb steht ohnehin der
# Infinitiv - genau die Form, die in der Vokabelliste steht. Der Lernende
# sieht die Person trotzdem, sie steckt in "можешь / может / можем / могут".
MUSTER_A2 = [
    ("[P] хотел [Slot]", "[P] wollte [Slot].", None, "[P] chatjél [Slot]"),
    ("вчера я хотел [Slot]", "Gestern wollte ich [Slot].", None, "wtscherá ja chatjél [Slot]"),
    ("я уже мог [Slot]", "Ich konnte schon [Slot].", None, "ja usché mog [Slot]"),
    ("ты можешь [Slot]", "Du kannst [Slot].", None, "ty móschesch [Slot]"),
    ("он может [Slot]", "Er kann [Slot].", None, "on móschet [Slot]"),
    ("мы можем [Slot]", "Wir können [Slot].", None, "my móschem [Slot]"),
    ("они могут [Slot]", "Sie können [Slot].", None, "aní mógut [Slot]"),
    ("это более [Slot]", "Das ist mehr [Slot].", None, "éta bóleje [Slot]"),
    ("[P] такой же [Slot], как ты", "[P] bin so [Slot] wie du.", None, "[P] takój sche [Slot], kak ty"),
    ("[P] чувствую себя [Slot]", "[P] fühle mich [Slot].", None, "[P] tschúwstwuju sebjá [Slot]"),
    ("[P] встречаемся [Slot]", "[P] treffen uns [Slot].", None, "[P] wstretschájemsja [Slot]"),
    ("я остаюсь здесь, [Slot] я устал", "Ich bleibe hier, [Slot] ich müde bin.", None, "ja astajús sdjes, [Slot] ja ustál"),
    ("я думаю, что это [Slot]", "Ich glaube, dass es [Slot] ist.", None, "ja dúmaju, schto éta [Slot]"),
    ("если есть время, я хочу [Slot]", "Wenn ich Zeit habe, will ich [Slot].", None, "jésli jest wrémja, ja chatschú [Slot]"),
    ("ты можешь [Slot], пожалуйста?", "Kannst du bitte [Slot]?", None, "ty móschesch [Slot], paschálusta?"),
    ("[P] должен [Slot]", "[P] musst [Slot].", None, "[P] dólschen [Slot]"),
    ("[P] даю книгу [Slot]", "[P] gebe [Slot] das Buch.", None, "[P] dajú knígu [Slot]"),
    ("[P] показываю город [Slot]", "[P] zeige [Slot] die Stadt.", None, "[P] pokázywaju górad [Slot]"),
    ("[P] хочу стакан [Slot]", "[P] möchte ein Glas [Slot].", None, "[P] chatschú stakán [Slot]"),
    ("у нас достаточно [Slot]", "[P] haben genug [Slot].", None, "u nas dastátatschna [Slot]"),
    ("[P] жду уже [Slot]", "[P] warte seit einer [Slot].", None, "[P] schdu usché [Slot]"),
    ("[Slot] я иду домой", "[Slot] gehe ich nach Hause.", None, "[Slot] ja idú damój"),
    ("[P] хотел бы [Slot]", "[P] hätte gern [Slot].", None, "[P] chatjél by [Slot]"),
    ("вы можете дать мне [Slot]?", "Könnten Sie mir [Slot] geben?", None, "wy móschete dat mnje [Slot]?"),
    ("[P] думаю, это [Slot]", "[P] denke, das ist [Slot].", None, "[P] dúmaju, éta [Slot]"),
    ("[P] нахожу это очень [Slot]", "[P] finde das sehr [Slot].", None, "[P] nachaschú éta ótschen [Slot]"),
    ("завтра я буду [Slot]", "Morgen werde ich [Slot].", None, "záwtra ja búdu [Slot]"),
    ("[P] хочу скоро [Slot]", "[P] will bald [Slot].", None, "[P] chatschú skóra [Slot]"),
    ("это человек, который хочет [Slot]", "Das ist der Mann, der [Slot] will.", None, "éta tschelawék, katóryj chótschet [Slot]"),
    ("я ищу место, где можно [Slot]", "Ich suche einen Ort, wo man [Slot] kann.", None, "ja ischú mésta, gdje móschna [Slot]"),
    ("вчера я был в [Slot]", "Gestern war ich im [Slot].", None, "wtscherá ja byl w [Slot]"),
    ("я хочу [Slot], потому что есть время", "Ich möchte [Slot], weil ich Zeit habe.", None, "ja chatschú [Slot], patamú schto jest wrémja"),
]

# Funktionswoerter, die genau diese A2-Rahmen fest enthalten - ohne
# sie meldet R5 sie als nie eingefuehrt.
ZUSATZ_A2 = {
    7: ['=они'],
    9: ['=такой'],
    10: ['=себя'],
    29: ['=человек'],
    30: ['=место'],
}

MODULE = (baue_module(MUSTER, zusatz_neu=ZUSATZ)
          + baue_module(MUSTER_A2, zusatz_neu=ZUSATZ_A2,
                        datei="spine_a2.json"))
