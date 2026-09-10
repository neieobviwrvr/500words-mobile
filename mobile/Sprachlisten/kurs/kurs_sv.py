# -*- coding: utf-8 -*-
"""Lehrplan Schwedisch. Aufbau und Begruendung: ENTWURF.md.

Drei schwedische Eigenheiten praegen den Plan:

**1. Verben stehen im Satz als PRAESENS.** Die Vokabelspalte fuehrt den
Infinitiv (`vara`, `ha`, `vilja`), gesagt wird `är`, `har`, `vill`. Deshalb
`neu_im_rahmen=['vara:praesens']`. Schwedisch konjugiert dafuer NICHT nach
Person - `jag är`, `du är`, `han är` sind identisch. Das ist ein echter
Vorteil: Modul 1 kann sofort vier Pronomen tragen, ohne vier Formen zu
lehren.

**2. Genus (en/ett) wird ueber ARTIKELRAHMEN gelehrt, nicht als Regel.**
Es gibt getrennte Rahmen "det är en [Slot]" und "det är ett [Slot]", und
`genus=` laesst den Generator pruefen, dass wirklich nur Nomen des
richtigen Geschlechts hineinkommen. Ein Anfaenger lernt das Genus dadurch
zusammen mit dem Wort, statt es spaeter nachzuruesten.

**3. Bestimmte Formen werden VERMIEDEN.** `stationen`, `huset` sind
Suffixformen, die eine zweite Wortform je Nomen erfordern wuerden. Wo eine
Ortsfrage noetig ist, heisst der Rahmen deshalb `var finns en [Slot]?`
(wo gibt es ein ...) - grammatisch einwandfrei mit der Grundform.
"""
from gemeinsam import baue_module


SPRACHE = "sv"
TABELLE = "schwedisch_vocab"
WORTSPALTE = "swedish"
DATEINAME = "svCourse.ts"
KONSTANTE = "SWEDISH_COURSE"

MODULE = [
    # ==================================================================
    dict(nr=1, titel="Ich bin, du bist",
         finisher="Sag, wer du bist und wie es dir geht.",
         rahmen=[
             dict(muster="[P] är [Slot]", musterDe="[P] bin [Slot].",
                  pronomen=["jag", "du", "han", "hon"],
                  neu_im_rahmen=["vara:praesens"],
                  slots=["trött", "glad", "ledsen", "arg", "nöjd",
                         "hungrig", "törstig", "sjuk", "redo", "lugn"]),
             dict(muster="[P] är [Slot]", musterDe="[P] bin [Slot].",
                  pronomen=["vi", "ni", "de", "man", "det", "den"],
                  slots=["student", "lärare", "turist", "chef", "kollega",
                         "polis", "vän", "man", "fru", "barn"]),
             dict(muster="[P] är väldigt [Slot]", musterDe="[P] ist sehr [Slot].",
                  pronomen=["han", "hon", "de"],
                  neu_im_rahmen=["väldigt"],
                  slots=["snäll", "trevlig", "smart", "dum", "vacker",
                         "rolig", "tråkig", "stark", "svag", "ung",
                         "gammal", "lycklig", "ensam", "nervös", "stressad"]),
         ]),
    # ==================================================================
    dict(nr=2, titel="Das ist, ich habe",
         finisher="Zeig auf drei Dinge und sag, was sie sind.",
         rahmen=[
             dict(muster="det är en [Slot]", musterDe="Das ist ein [Slot].",
                  pronomen=["den", "det"], genus="en",
                  slots=["bok", "penna", "väska", "stol", "säng",
                         "soffa", "nyckel", "lampa", "dörr", "telefon",
                         "dator", "mamma", "pappa", "syster", "bror"]),
             dict(muster="det är ett [Slot]", musterDe="Das ist ein [Slot].",
                  pronomen=["det"], genus="ett",
                  slots=["hus", "rum", "kök", "bord", "fönster",
                         "papper", "glas", "jobb", "kontor", "hotell"]),
             dict(muster="[P] har en [Slot]", musterDe="[P] habe einen [Slot].",
                  pronomen=["jag", "du", "han", "vi"], genus="en",
                  neu_im_rahmen=["ha:praesens"],
                  slots=["familj", "dotter", "son", "lägenhet", "bil",
                         "hand", "arm", "fot", "kropp", "mun"]),
             dict(muster="det är min [Slot]", musterDe="Das ist mein [Slot].",
                  pronomen=["min", "din", "vår"], genus="en",
                  slots=["mor", "far", "fru", "kollega", "chef"]),
             # Schwedische Possessivpronomen richten sich nach GENUS und ZAHL
             # des besessenen Dings: min bok, mitt hus, mina boecker. Sie
             # kommen deshalb direkt hinter dem en/ett-Rahmen, solange das
             # Genus frisch ist.
             dict(muster="det är [Slot] hus", musterDe="Das ist [Slot] Haus.",
                  pronomen=["mitt", "ditt", "vårt"],
                  slots=["mitt", "ditt", "vårt", "sitt", "detta"]),
             dict(muster="det är [Slot] böcker", musterDe="Das sind [Slot] Bücher.",
                  pronomen=["mina", "dina", "våra"],
                  slots=["mina", "dina", "våra", "dessa", "alla"]),
             dict(muster="[Slot] är här", musterDe="[Slot] ist hier.",
                  pronomen=["ingen", "inget"],
                  neu_im_rahmen=["här"],
                  slots=["ingen", "inget", "denna", "sin", "er"]),
         ]),
    # ==================================================================
    dict(nr=3, titel="Ich will, ich brauche",
         finisher="Bestell dir etwas zu essen und zu trinken.",
         rahmen=[
             dict(muster="[P] vill ha [Slot]", musterDe="[P] möchte [Slot].",
                  pronomen=["jag", "du", "vi"],
                  neu_im_rahmen=["vilja:praesens"],
                  slots=["vatten", "kaffe", "te", "öl", "vin",
                         "mat", "bröd", "ost", "mjölk", "socker"]),
             dict(muster="[P] behöver [Slot]", musterDe="[P] brauche [Slot].",
                  pronomen=["jag", "du", "han"],
                  neu_im_rahmen=["behöva:praesens"],
                  slots=["hjälp", "tid", "pengar", "salt", "smör"]),
             dict(muster="[P] vill ha en [Slot], tack", musterDe="[P] möchte einen [Slot], bitte.",
                  pronomen=["jag"], genus="en",
                  slots=["frukost", "lunch", "middag", "soppa", "sallad",
                         "kaka", "glass", "banan", "potatis", "frukt"]),
             dict(muster="[P] äter [Slot]", musterDe="[P] esse [Slot].",
                  pronomen=["jag", "vi"],
                  neu_im_rahmen=["äta:praesens", "dricka:praesens"],
                  slots=["kött", "fisk", "ägg", "äpple", "grönsak"]),
         ]),
    # ==================================================================
    dict(nr=4, titel="Nicht und Frage",
         finisher="Frag jemanden etwas und verneine eine Aussage.",
         rahmen=[
             dict(muster="[P] är inte [Slot]", musterDe="[P] bin nicht [Slot].",
                  pronomen=["jag", "du", "han", "hon"],
                  neu_im_rahmen=["inte", "ja", "nej"],
                  slots=["färdig", "klar", "säker", "rädd", "förvånad"]),
             dict(muster="är [P] [Slot]?", musterDe="Bist [P] [Slot]?",
                  pronomen=["du", "han", "hon", "ni"],
                  slots=["gammal", "ny", "bra", "dålig", "viktig"]),
             dict(muster="[Slot] är det?", musterDe="[Slot] ist das?",
                  pronomen=["vad", "vem", "hur"],
                  neu_im_rahmen=["vad", "vem", "hur", "varför"],
                  slots=["vilken", "vilket", "vilka", "något", "allt"]),
         ]),
    # ==================================================================
    dict(nr=5, titel="Wo ist das?",
         finisher="Frag nach dem Weg zu drei Orten.",
         rahmen=[
             dict(muster="var finns en [Slot]?", musterDe="Wo gibt es einen [Slot]?",
                  pronomen=["var", "vart"], genus="en",
                  neu_im_rahmen=["var"],
                  slots=["bank", "affär", "butik", "restaurang", "toalett",
                         "station", "flygplats", "kyrka", "skola", "gata"]),
             dict(muster="var finns ett [Slot]?", musterDe="Wo gibt es ein [Slot]?",
                  pronomen=["var"], genus="ett",
                  slots=["sjukhus", "bibliotek", "museum", "torg", "universitet"]),
             dict(muster="[Slot] är här", musterDe="[Slot] ist hier.",
                  pronomen=["här", "där"],
                  neu_im_rahmen=["där", "hos"],
                  slots=["stad", "bro", "park", "väg", "hamn",
                         "strand", "skog", "sjö", "natur", "gräns"]),
             dict(muster="det ligger [Slot] huset", musterDe="Es liegt [Slot] dem Haus.",
                  pronomen=["i", "på", "till"],
                  neu_im_rahmen=["i", "på", "till", "från", "med", "om", "av", "efter"],
                  slots=["under", "över", "mellan", "bakom", "framför",
                         "bredvid", "genom", "mot", "vid", "runt"]),
         ]),
    # ==================================================================
    dict(nr=6, titel="Zahlen und Preise",
         finisher="Frag nach dem Preis und nenne eine Zahl.",
         rahmen=[
             dict(muster="[Slot]", musterDe="[Slot]", kind="series", pronomen=[],
                  slots=["noll", "en/ett", "två", "tre", "fyra", "fem",
                         "sex", "sju", "åtta", "nio", "tio"]),
             dict(muster="[Slot]", musterDe="[Slot]", kind="series", pronomen=[],
                  slots=["elva", "tolv", "tretton", "fjorton", "femton",
                         "sexton", "sjutton", "arton", "nitton", "tjugo"]),
             dict(muster="[Slot]", musterDe="[Slot]", kind="series", pronomen=[],
                  slots=["trettio", "fyrtio", "femtio", "sextio", "sjuttio",
                         "åttio", "nittio", "hundra", "tusen"]),
             dict(muster="det är den [Slot] gången", musterDe="Das ist das [Slot] Mal.",
                  pronomen=[],
                  slots=["första", "andra", "tredje"]),
             dict(muster="hur mycket kostar en [Slot]?", musterDe="Wie viel kostet ein [Slot]?",
                  pronomen=["hur mycket", "hur många"], genus="en",
                  neu_im_rahmen=["hur mycket", "hur många", "mycket", "lite"],
                  slots=["biljett", "kurs", "resa", "karta", "resväska"]),
             dict(muster="det är för [Slot]", musterDe="Das ist zu [Slot].",
                  pronomen=[], neu_im_rahmen=["för", "utan"],
                  slots=["dyr", "billig", "stor", "liten", "lång",
                         "kort", "hög", "låg", "tung", "lätt",
                         "bred", "smal", "djup", "tjock", "tunn"]),
         ]),
    # ==================================================================
    dict(nr=7, titel="Ich kann, ich muss",
         finisher="Sag, was du kannst und was du heute musst.",
         rahmen=[
             dict(muster="[P] kan [Slot]", musterDe="[P] kann [Slot].",
                  pronomen=["jag", "du", "vi", "han"],
                  neu_im_rahmen=["kunna:praesens"],
                  slots=["simma", "dansa", "laga", "spela", "köra",
                         "skriva", "läsa", "hjälpa", "visa", "förklara",
                         "göra", "säga", "använda", "bygga", "skapa"]),
             dict(muster="[P] måste [Slot]", musterDe="[P] muss [Slot].",
                  pronomen=["jag", "du", "vi"],
                  neu_im_rahmen=["måste"],
                  slots=["arbeta", "sova", "vänta", "betala", "börja",
                         "sluta", "duscha", "tvätta", "städa", "bestämma"]),
             dict(muster="[P] vill [Slot]", musterDe="[P] will [Slot].",
                  pronomen=["jag", "du", "han", "hon"],
                  slots=["prata", "lyssna", "titta", "träffa", "ringa",
                         "fråga", "svara", "tala", "höra", "se"]),
             dict(muster="[P] får inte [Slot]", musterDe="[P] darf nicht [Slot].",
                  pronomen=["jag", "du"],
                  neu_im_rahmen=["få:praesens"],
                  slots=["glömma", "förlora", "gråta", "skratta", "stanna",
                         "dö", "öppna", "stänga", "lämna", "vinna"]),
         ]),
    # ==================================================================
    dict(nr=8, titel="Ich gehe, ich komme",
         finisher="Sag, wohin du gehst und womit du fährst.",
         rahmen=[
             dict(muster="[P] går till en [Slot]", musterDe="[P] gehe zu einem [Slot].",
                  pronomen=["jag", "du", "vi", "de"], genus="en",
                  neu_im_rahmen=["gå:praesens", "komma:praesens"],
                  slots=["lektion", "klass", "intervju", "kurs", "affär"]),
             dict(muster="[P] åker [Slot]", musterDe="[P] fahre mit [Slot].",
                  pronomen=["jag", "vi"],
                  neu_im_rahmen=["resa:praesens"],
                  slots=["buss", "tåg", "bil", "flygplan", "väg"]),
             # "hem" ist die Richtung, "hemma" der Ort - "jag sitter hem"
             # waere falsch. Die Slot-Liste mischt Bewegungs- und
             # Ruheverben, also muss der Rahmen neutral sein.
             dict(muster="[P] [Slot] nu", musterDe="[P] [Slot] jetzt.",
                  pronomen=["jag", "han", "hon"], slotform="praesens",
                  neu_im_rahmen=["nu"],
                  slots=["springa", "flyga", "sitta", "stå", "ligga",
                         "flytta", "bo", "leva", "vakna", "sätta"]),
         ]),
    # ==================================================================
    dict(nr=9, titel="Zeit",
         finisher="Verabrede dich für morgen.",
         rahmen=[
             dict(muster="[Slot]", musterDe="[Slot]", kind="series", pronomen=[],
                  slots=["idag", "igår", "imorgon", "nu", "snart",
                         "sedan", "alltid", "aldrig", "ofta", "ibland",
                         "redan", "då", "genast", "fortfarande", "tillsammans"]),
             dict(muster="vi ses på [Slot]", musterDe="Wir sehen uns am [Slot].",
                  pronomen=["när"], neu_im_rahmen=["när", "också", "bara"],
                  slots=["morgon", "kväll", "natt", "dag", "vecka"]),
             dict(muster="det tar en [Slot]", musterDe="Es dauert eine [Slot].",
                  pronomen=[], genus="en",
                  slots=["timme", "minut", "sekund", "lektion", "semester"]),
         ]),
    # ==================================================================
    dict(nr=10, titel="Ich mag, mir gefällt",
         finisher="Sag, was du magst und was nicht.",
         rahmen=[
             dict(muster="[P] gillar [Slot]", musterDe="[P] mag [Slot].",
                  pronomen=["jag", "du", "han", "vi"],
                  neu_im_rahmen=["gilla:praesens", "älska:praesens"],
                  slots=["sol", "regn", "snö", "vind", "väder",
                         "blomma", "träd", "berg", "hav", "djur"]),
             dict(muster="[P] tycker om [Slot]", musterDe="[P] mag [Slot].",
                  pronomen=["jag", "hon", "de"],
                  neu_im_rahmen=["tycka:praesens"],
                  slots=["mig", "dig", "honom", "henne", "oss", "dem"]),
             dict(muster="den är [Slot]", musterDe="Sie ist [Slot].",
                  pronomen=[],
                  slots=["röd", "blå", "gul", "grön", "svart",
                         "vit", "brun", "grå", "rosa", "lila", "orange"]),
             dict(muster="det är [Slot] mat", musterDe="Das ist [Slot] Essen.",
                  pronomen=[],
                  slots=["söt", "sur", "varm", "kall", "torr",
                         "våt", "ren", "smutsig", "vanlig", "speciell"]),
         ]),
    # ==================================================================
    dict(nr=11, titel="Gestern und morgen",
         finisher="Erzähl, was du gestern gemacht hast.",
         rahmen=[
             dict(muster="[P] var [Slot] igår", musterDe="[P] war gestern [Slot].",
                  pronomen=["jag", "du", "han", "vi"],
                  slots=["glad", "trött", "sjuk", "ensam", "nöjd"]),
             dict(muster="[P] ska [Slot] imorgon", musterDe="[P] werde morgen [Slot].",
                  pronomen=["jag", "du", "vi"],
                  neu_im_rahmen=["ska"],
                  slots=["köpa", "sälja", "ge", "ta", "hitta"]),
             dict(muster="[P] [Slot] mycket", musterDe="[P] [Slot] viel.",
                  pronomen=["jag", "du"], slotform="praesens",
                  slots=["leta", "veta", "tro", "tänka", "känna"]),
             dict(muster="[P] blir [Slot]", musterDe="[P] werde [Slot].",
                  pronomen=["jag", "det"],
                  neu_im_rahmen=["bli:praesens"],
                  slots=["öppen", "stängd", "klar", "säker", "farlig"]),
         ]),
    # ==================================================================
    dict(nr=12, titel="Sätze verbinden",
         finisher="Erzähl etwas über dich in drei zusammenhängenden Sätzen.",
         rahmen=[
             # Die Liste trug bis 2026-09-08 auch kanske, ganska und
             # förälskad - keins davon verbindet zwei Saetze. Genau diese
             # drei sind die Woerter, die beim Ausreisser-Filter einmal
             # ersatzlos verlorengingen (siehe bauplan.py); sie bleiben
             # deshalb im Kurs und bekommen einen Rahmen, der zu ihnen passt.
             dict(muster="jag är trött [Slot] jag arbetar", musterDe="Ich bin müde, [Slot] ich arbeite.",
                  pronomen=["och", "men", "eller"],
                  neu_im_rahmen=["och", "men", "eller", "så", "att"],
                  slots=["eftersom", "om", "medan", "fastän", "tills",
                         "för att", "innan"]),
             dict(muster="det är [Slot] bra", musterDe="Es ist [Slot] gut.",
                  pronomen=[],
                  slots=["kanske", "ganska"]),
             dict(muster="jag är [Slot]", musterDe="Ich bin [Slot].",
                  pronomen=[],
                  slots=["förälskad"]),
             dict(muster="jag vill [Slot] men jag kan inte", musterDe="Ich will [Slot], aber ich kann nicht.",
                  pronomen=[],
                  slots=["förstå", "lära", "fortsätta", "önska", "hoppas"]),
             dict(muster="det är [Slot] men det går", musterDe="Es ist [Slot], aber es geht.",
                  pronomen=[],
                  slots=["svår", "enkel", "konstig", "intressant", "spännande",
                         "rätt", "fel", "snabb", "långsam", "ful"]),
             dict(muster="jag [Slot] dig", musterDe="Ich [Slot] dich.",
                  pronomen=[], slotform="praesens",
                  slots=["sakna", "kyssa", "välja", "skicka", "byta",
                         "le", "växa", "förändra", "heta", "festa"]),
         ]),
    # ==================================================================
    dict(nr=13, titel="Körper und Gesundheit",
         finisher="Sag einem Arzt, was dir weh tut.",
         rahmen=[
             dict(muster="[Slot] gör ont", musterDe="[Slot] tut weh.",
                  pronomen=["min", "mitt"],
                  slots=["huvud", "hals", "tand", "rygg", "mage",
                         "knä", "hjärta", "öga", "öra", "finger"]),
             dict(muster="jag har ont i [Slot]", musterDe="Ich habe Schmerzen im [Slot].",
                  pronomen=[],
                  slots=["hår", "näsa", "hud", "axel", "ben"]),
         ]),
    # ==================================================================
    dict(nr=14, titel="Zuhause, Kleidung und Arbeit",
         finisher="Beschreib deine Wohnung und was du anhast.",
         rahmen=[
             dict(muster="jag har ett [Slot]", musterDe="Ich habe ein [Slot].",
                  pronomen=[], genus="ett",
                  slots=["badrum", "sovrum", "vardagsrum", "golv", "tak"]),
             dict(muster="det finns en [Slot] här", musterDe="Hier gibt es einen [Slot].",
                  pronomen=[], genus="en",
                  slots=["vägg", "trädgård", "tallrik", "gaffel", "sked"]),
             dict(muster="jag köper en [Slot]", musterDe="Ich kaufe einen [Slot].",
                  pronomen=[], genus="en",
                  slots=["skjorta", "tröja", "jacka", "klänning", "kjol",
                         "sko", "strumpa", "mössa", "handske", "kniv"]),
             dict(muster="jag har [Slot]", musterDe="Ich habe [Slot].",
                  pronomen=[],
                  slots=["kläder", "byxor", "hatt", "pass", "namn"]),
             dict(muster="det är mitt [Slot]", musterDe="Das ist meine [Slot].",
                  pronomen=[], genus="ett",
                  slots=["arbete", "företag", "möte", "projekt", "yrke"]),
             dict(muster="jag väntar på [Slot]", musterDe="Ich warte auf [Slot].",
                  pronomen=[],
                  slots=["lön", "uppgift", "anställning", "svar", "prov"]),
             dict(muster="det blir [Slot] imorgon", musterDe="Morgen gibt es [Slot].",
                  pronomen=[],
                  slots=["moln", "storm", "åska", "is", "himmel"]),
             dict(muster="jag fick ett bra [Slot]", musterDe="Ich habe eine gute [Slot] bekommen.",
                  pronomen=[], genus="ett",
                  slots=["betyg", "barnbarn", "hus", "rum", "bord"]),
         ]),
]

# ---------------------------------------------------------------------------
# A2-Stufe (Module 15-28), Gliederung in spine_a2.json - dieselbe fuer ALLE
# zehn Sprachen.
#
# **Diese Datei schreibt ihre A1-Module von Hand, ihre A2-Module nicht.**
# Fuer A1 gab es die drei Lehrplaene vor der gemeinsamen Gliederung; fuer
# A2 waere ein eigener nur dreimal dieselbe Arbeit. Die Slots stehen hier
# deshalb auf DEUTSCH und werden ueber die german-Spalte aufgeloest -
# `baue_module` setzt dafuer `slots_deutsch` je Rahmen, damit beides in
# einer Datei nebeneinander stehen kann.
MUSTER_A2 = [
    ("[P] har [Slot]", "[P] habe [Slot].", dict(slotform="partizip")),
    ("igår har jag [Slot]", "Gestern habe ich [Slot].", dict(slotform="partizip")),
    ("jag har redan [Slot]", "Ich habe schon [Slot].", dict(slotform="partizip")),
    ("[P] [Slot]", "[P] [Slot].", dict(slotform="praesens")),
    ("[P] [Slot]", "[P] [Slot].", dict(slotform="praesens")),
    ("[P] [Slot]", "[P] [Slot].", dict(slotform="praesens")),
    ("[P] [Slot]", "[P] [Slot].", dict(slotform="praesens")),
    ("det är mer [Slot]", "Das ist mehr [Slot]."),
    ("[P] är lika [Slot] som du", "[P] bin so [Slot] wie du."),
    ("[P] känner mig [Slot]", "[P] fühle mich [Slot]."),
    ("[P] träffas [Slot]", "[P] treffen uns [Slot]."),
    ("jag stannar här [Slot] jag är trött", "Ich bleibe hier, [Slot] ich müde bin."),
    ("jag tror att det är [Slot]", "Ich glaube, dass es [Slot] ist."),
    ("om jag har tid, vill jag [Slot]", "Wenn ich Zeit habe, will ich [Slot]."),
    ("kan du [Slot], tack?", "Kannst du bitte [Slot]?"),
    ("[P] måste [Slot]", "[P] musst [Slot]."),
    ("[P] ger boken till [Slot]", "[P] gebe [Slot] das Buch."),
    ("[P] visar staden för [Slot]", "[P] zeige [Slot] die Stadt."),
    ("[P] vill ha ett glas [Slot]", "[P] möchte ein Glas [Slot]."),
    ("[P] har tillräckligt [Slot]", "[P] haben genug [Slot]."),
    ("[P] har väntat i en [Slot]", "[P] warte seit einer [Slot]."),
    ("[Slot] går jag hem", "[Slot] gehe ich nach Hause."),
    ("[P] skulle vilja [Slot]", "[P] hätte gern [Slot]."),
    ("kan du ge mig [Slot]?", "Könnten Sie mir [Slot] geben?"),
    ("[P] tror att det är [Slot]", "[P] denke, das ist [Slot]."),
    ("[P] tycker det är väldigt [Slot]", "[P] finde das sehr [Slot]."),
    ("imorgon ska jag [Slot]", "Morgen werde ich [Slot]."),
    ("[P] vill snart [Slot]", "[P] will bald [Slot]."),
    ("det är mannen som [Slot]", "Das ist der Mann, der [Slot].", dict(slotform="praesens")),
    ("jag letar efter ett ställe där man kan [Slot]", "Ich suche einen Ort, wo man [Slot] kann."),
    ("igår var jag på [Slot]", "Gestern war ich im [Slot]."),
    ("jag vill [Slot] för att jag har tid", "Ich möchte [Slot], weil ich Zeit habe."),
]

MODULE = MODULE + baue_module(MUSTER_A2, datei="spine_a2.json")
