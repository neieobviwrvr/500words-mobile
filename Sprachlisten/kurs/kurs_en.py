# -*- coding: utf-8 -*-
"""Lehrplan Englisch. Aufbau und Begruendung: ENTWURF.md.

Englisch ist grammatisch die einfachste unserer Sprachen - kein Genus, kaum
Konjugation. Genau zwei Dinge muessen trotzdem sauber gelehrt werden, und
beide praegen den Aufbau:

**1. Die drei Formen von to be.** `I am`, `you/we/they are`, `he/she/it is`.
Ein einziger Rahmen "[P] am [Slot]" wuerde "he am" erzeugen - der haeufigste
Anfaengerfehler ueberhaupt. Deshalb stehen in Modul 1 DREI Rahmen
nebeneinander, einer je Personengruppe. Der Nutzer lernt die Unterscheidung
dadurch als Muster, nicht als Regel.

**2. Das -s der dritten Person.** `I want` gegen `he wants`. Ebenso geloest:
jedes Verbmodul hat einen eigenen he/she/it-Rahmen. Modalverben sind die
Ausnahme - `he can go`, ohne -s und ohne to; das steht als
`grammar_note` an den Vokabeln.

**Nachgetragen am 2026-09-04:** die Liste enthielt KEIN einziges Modalverb
(can, must, should, will, would). Ohne sie ist Modul 7 nicht baubar, und
`can` ist etwa das 40.-haeufigste englische Wort. Siehe kern_ergaenzen.py.
"""
from gemeinsam import baue_module


SPRACHE = "en"
TABELLE = "englisch_vocab"
WORTSPALTE = "english"
DATEINAME = "enCourse.ts"
KONSTANTE = "ENGLISH_COURSE"

MODULE = [
    # ==================================================================
    dict(nr=1, titel="I am, you are",
         finisher="Say who you are and how you feel.",
         rahmen=[
             dict(muster="I am [Slot]", musterDe="Ich bin [Slot].",
                  pronomen=["I", "me", "my"],
                  neu_im_rahmen=["be"],
                  slots=["tired", "happy", "sad", "angry", "hungry",
                         "thirsty", "ill", "healthy", "ready", "busy"]),
             dict(muster="you are [Slot]", musterDe="Du bist [Slot].",
                  pronomen=["you", "we", "they", "your"],
                  slots=["nice", "kind", "strong", "weak", "funny",
                         "young", "old", "beautiful", "pretty", "ugly"]),
             dict(muster="he is [Slot]", musterDe="Er ist [Slot].",
                  pronomen=["he", "she", "it", "his", "her"],
                  slots=["student", "teacher", "doctor", "friend", "colleague",
                         "man", "woman", "boy", "girl", "child"]),
         ]),
    # ==================================================================
    dict(nr=2, titel="This is, I have",
         finisher="Point at three things and say what they are.",
         rahmen=[
             dict(muster="this is a [Slot]", musterDe="Das ist ein [Slot].",
                  pronomen=["this", "these", "those"],
                  neu_im_rahmen=["a", "the", "that", "this"],
                  slots=["book", "table", "bed", "door", "window",
                         "phone", "bag", "key", "card", "bottle"]),
             dict(muster="this is an [Slot]", musterDe="Das ist ein [Slot].",
                  pronomen=["it"], neu_im_rahmen=["an"],
                  slots=["exam", "answer", "example", "idea", "eye"]),
             dict(muster="I have a [Slot]", musterDe="Ich habe einen [Slot].",
                  pronomen=["I", "we", "they"], neu_im_rahmen=["have"],
                  slots=["family", "house", "flat", "room", "car",
                         "job", "problem", "question", "ticket", "passport"]),
             dict(muster="he has a [Slot]", musterDe="Er hat einen [Slot].",
                  pronomen=["he", "she"],
                  slots=["father", "mother", "brother", "sister", "son",
                         "daughter", "husband", "wife", "dog", "cat"]),
             dict(muster="that is my [Slot]", musterDe="Das ist mein [Slot].",
                  pronomen=["my", "your", "our", "their", "its"],
                  slots=["name", "money", "luggage", "present", "place"]),
         ]),
    # ==================================================================
    dict(nr=3, titel="I want, I need",
         finisher="Order something to eat and to drink.",
         rahmen=[
             dict(muster="I want [Slot]", musterDe="Ich möchte [Slot].",
                  pronomen=["I", "we"], neu_im_rahmen=["want", "need"],
                  slots=["water", "coffee", "tea", "beer", "wine",
                         "milk", "bread", "cheese", "meat", "fish"]),
             dict(muster="he wants [Slot]", musterDe="Er möchte [Slot].",
                  pronomen=["he", "she"],
                  slots=["food", "fruit", "sugar", "salt", "medicine"]),
             dict(muster="I need a [Slot]", musterDe="Ich brauche einen [Slot].",
                  pronomen=["I", "you"],
                  slots=["plate", "glass", "menu", "bill", "doctor"]),
             dict(muster="I would like [Slot], please", musterDe="Ich hätte gern [Slot], bitte.",
                  pronomen=[], neu_im_rahmen=["would", "like"],
                  slots=["breakfast", "lunch", "dinner", "vegetables", "part"]),
         ]),
    # ==================================================================
    dict(nr=4, titel="Not and questions",
         finisher="Ask someone a question and say something is not true.",
         rahmen=[
             dict(muster="I am not [Slot]", musterDe="Ich bin nicht [Slot].",
                  pronomen=["not", "no", "yes"],
                  neu_im_rahmen=["not", "no", "yes"],
                  slots=["free", "full", "empty", "safe", "dangerous"]),
             dict(muster="do you [Slot]?", musterDe="Möchtest du [Slot]?",
                  pronomen=["you", "they"], neu_im_rahmen=["do"],
                  slots=["know", "see", "hear", "understand", "remember"]),
             dict(muster="[Slot] is that?", musterDe="[Slot] ist das?",
                  pronomen=["what", "who", "which"],
                  neu_im_rahmen=["what", "who", "which", "whose"],
                  slots=["something", "anything", "nothing", "everything", "someone"]),
             dict(muster="I do not [Slot] that", musterDe="Ich [Slot] das nicht.",
                  pronomen=[],
                  slots=["think", "believe", "mean", "forget", "remember"]),
         ]),
    # ==================================================================
    dict(nr=5, titel="Where is it?",
         finisher="Ask the way to three places.",
         rahmen=[
             dict(muster="where is the [Slot]?", musterDe="Wo ist der [Slot]?",
                  pronomen=["where", "here", "there"],
                  neu_im_rahmen=["where", "here", "there"],
                  slots=["station", "airport", "hotel", "hospital", "pharmacy",
                         "restaurant", "shop", "market", "bank", "toilet"]),
             dict(muster="it is in the [Slot]", musterDe="Es ist in dem [Slot].",
                  pronomen=["in", "on", "at"],
                  neu_im_rahmen=["in", "on", "at", "to", "from"],
                  slots=["city", "country", "street", "way", "place",
                         "school", "university", "pub", "party", "world"]),
             dict(muster="the shop is [Slot] the hotel", musterDe="Der Laden ist [Slot] dem Hotel.",
                  pronomen=[],
                  neu_im_rahmen=["of", "with", "for", "by", "about"],
                  slots=["behind", "under", "over", "between", "near",
                         "next to", "against", "through", "into", "around"]),
             dict(muster="go [Slot]", musterDe="Geh [Slot].",
                  pronomen=[], neu_im_rahmen=["go"],
                  slots=["straight", "outside", "inside", "home", "again"]),
         ]),
    # ==================================================================
    dict(nr=6, titel="Numbers and prices",
         finisher="Ask what something costs and say a number.",
         rahmen=[
             dict(muster="[Slot]", musterDe="[Slot]", kind="series", pronomen=[],
                  slots=["zero", "one", "two", "three", "four", "five",
                         "six", "seven", "eight", "nine", "ten"]),
             dict(muster="[Slot]", musterDe="[Slot]", kind="series", pronomen=[],
                  slots=["eleven", "twelve", "thirteen", "fourteen", "fifteen",
                         "sixteen", "seventeen", "eighteen", "nineteen", "twenty"]),
             dict(muster="[Slot]", musterDe="[Slot]", kind="series", pronomen=[],
                  slots=["thirty", "forty", "fifty", "sixty", "seventy",
                         "eighty", "ninety", "hundred", "thousand", "million"]),
             dict(muster="how much is the [Slot]?", musterDe="Wie viel kostet der [Slot]?",
                  pronomen=["how much", "how many", "how long"],
                  neu_im_rahmen=["how much", "how many", "how long", "how", "much"],
                  slots=["price", "number", "shift", "lecture", "weekend"]),
             dict(muster="it is too [Slot]", musterDe="Das ist zu [Slot].",
                  pronomen=["too", "very", "enough"],
                  neu_im_rahmen=["too", "very", "enough", "more", "less", "much", "little"],
                  slots=["expensive", "cheap", "big", "small", "long",
                         "short", "high", "low", "heavy", "light"]),
             dict(muster="the [Slot] one", musterDe="Der [Slot].",
                  pronomen=[],
                  slots=["first", "second", "third", "last", "next"]),
         ]),
    # ==================================================================
    dict(nr=7, titel="I can, I must",
         finisher="Say what you can do and what you must do today.",
         rahmen=[
             dict(muster="I can [Slot]", musterDe="Ich kann [Slot].",
                  pronomen=["I", "you", "we"], neu_im_rahmen=["can"],
                  slots=["dance", "drive", "sing", "walk", "wash",
                         "read", "write", "help", "speak", "cook"]),
             dict(muster="he can [Slot]", musterDe="Er kann [Slot].",
                  pronomen=["he", "she"],
                  slots=["work", "play", "run", "walk", "wait"]),
             dict(muster="I must [Slot]", musterDe="Ich muss [Slot].",
                  pronomen=[], neu_im_rahmen=["must", "should"],
                  slots=["pay", "sleep", "eat", "drink", "start"]),
             dict(muster="you should [Slot]", musterDe="Du solltest [Slot].",
                  pronomen=[],
                  slots=["ask", "answer", "try", "call", "look"]),
         ]),
    # ==================================================================
    dict(nr=8, titel="I go, I come",
         finisher="Say where you are going and how.",
         rahmen=[
             dict(muster="I go to the [Slot]", musterDe="Ich gehe zum [Slot].",
                  pronomen=["I", "we", "they"], neu_im_rahmen=["come"],
                  slots=["train", "bus", "car", "airport", "station"]),
             # Waren Verben in einem Rahmen, der einen Ort verlangt -
             # herauskam "he goes move" (2026-09-08). Der Rahmen richtet
             # sich jetzt nach den Slots, nicht umgekehrt; `bring` und
             # `happen` sind weitergezogen, wo sie ein Subjekt finden.
             dict(muster="we can [Slot]", musterDe="Wir können [Slot].",
                  pronomen=["he", "she"],
                  slots=["move", "arrive", "visit"]),
             dict(muster="I [Slot] a lot", musterDe="Ich [Slot] viel.",
                  pronomen=[],
                  slots=["get", "take", "give", "put", "keep",
                         "leave", "turn", "show", "tell", "let", "bring"]),
             dict(muster="we [Slot] together", musterDe="Wir [Slot] zusammen.",
                  pronomen=["together", "also", "just"],
                  neu_im_rahmen=["together", "also", "just", "only"],
                  slots=["travel", "meet", "stay", "live", "sit"]),
         ]),
    # ==================================================================
    dict(nr=9, titel="Time",
         finisher="Make a plan for tomorrow.",
         rahmen=[
             dict(muster="[Slot]", musterDe="[Slot]", kind="series", pronomen=[],
                  neu_im_rahmen=["now", "today", "when"],
                  slots=["now", "today", "yesterday", "tomorrow", "soon",
                         "always", "never", "often", "sometimes", "rarely",
                         "still", "already", "yet", "early", "late"]),
             dict(muster="see you in the [Slot]", musterDe="Bis [Slot].",
                  pronomen=["when", "before", "after"],
                  neu_im_rahmen=["before", "after", "until", "during"],
                  slots=["morning", "afternoon", "evening", "night", "moment"]),
             dict(muster="it takes an [Slot]", musterDe="Es dauert eine [Slot].",
                  pronomen=[],
                  slots=["hour", "minute", "day", "week", "month",
                         "year", "time", "life", "end", "beginning"]),
         ]),
    # ==================================================================
    dict(nr=10, titel="I like, I love",
         finisher="Say what you like and what you do not like.",
         rahmen=[
             dict(muster="I like [Slot]", musterDe="Ich mag [Slot].",
                  pronomen=["I", "we"], neu_im_rahmen=["to love"],
                  slots=["music", "film", "story", "sun", "rain",
                         "snow", "weather", "sea", "mountain", "air"]),
             dict(muster="she loves [Slot]", musterDe="Sie liebt [Slot].",
                  pronomen=["him", "her", "us", "them", "it"],
                  slots=["love", "people", "person", "thing", "reason"]),
             dict(muster="it is [Slot]", musterDe="Es ist [Slot].",
                  pronomen=[],
                  slots=["white", "black", "red", "blue", "green",
                         "yellow", "grey", "brown", "clean", "dirty"]),
             dict(muster="the food is [Slot]", musterDe="Das Essen ist [Slot].",
                  pronomen=[],
                  slots=["sweet", "salty", "spicy", "delicious", "fresh",
                         "hot", "warm", "cold", "good", "bad"]),
             dict(muster="that is [Slot]", musterDe="Das ist [Slot].",
                  pronomen=["really", "maybe", "exactly"],
                  neu_im_rahmen=["really", "maybe", "exactly", "almost", "sure"],
                  slots=["interesting", "boring", "important", "possible", "true",
                         "wrong", "right", "same", "different", "usual"]),
         ]),
    # ==================================================================
    dict(nr=11, titel="Yesterday and tomorrow",
         finisher="Tell what you did yesterday.",
         rahmen=[
             dict(muster="I was [Slot] yesterday", musterDe="Ich war gestern [Slot].",
                  pronomen=["I", "he", "we"],
                  slots=["there", "outside", "well", "badly", "slowly"]),
             dict(muster="I will [Slot] tomorrow", musterDe="Ich werde morgen [Slot].",
                  pronomen=[], neu_im_rahmen=["will"],
                  slots=["buy", "sell", "find", "become", "begin"]),
             # Der Rahmen war am 2026-09-08 stillgelegt, weil er das
             # Partizip verlangte und die Vokabelspalte nur die Grundform
             # hergab - "I have finish it". Seit englisch_vocab.forms
             # gefuellt ist, holt `slotform` die richtige Form, und der
             # Rahmen lehrt wieder das, wofuer er gedacht war.
             dict(muster="I have [Slot] it", musterDe="Ich habe es [Slot].",
                  pronomen=[], slotform="partizip",
                  slots=["finish", "win", "lose", "order", "reserve"]),
             dict(muster="[Slot] it was good", musterDe="[Slot] war es gut.",
                  pronomen=["finally", "probably"],
                  neu_im_rahmen=["finally", "probably", "hopefully", "unfortunately", "even"],
                  slots=["quickly", "again", "only", "little", "much"]),
         ]),
    # ==================================================================
    dict(nr=12, titel="Putting sentences together",
         finisher="Tell something about yourself in three connected sentences.",
         rahmen=[
             dict(muster="I am tired [Slot] I work", musterDe="Ich bin müde, [Slot] ich arbeite.",
                  pronomen=["and", "but", "or"],
                  neu_im_rahmen=["and", "but", "or", "so", "that"],
                  slots=["because", "if", "while", "although", "since"]),
             dict(muster="I want to [Slot] but I cannot", musterDe="Ich will [Slot], aber ich kann nicht.",
                  pronomen=[],
                  slots=["learn", "study", "change", "continue", "hope"]),
             # War "it is [Slot] than that" mit der Grundstufe, also "it is
             # easy than that" (2026-09-08). Der Komparativ braucht eine
             # Form, die es noch nicht gibt - `than`, `as` und die uebrigen
             # Vergleichswoerter bleiben trotzdem eingefuehrt.
             dict(muster="it is very [Slot]", musterDe="Es ist sehr [Slot].",
                  pronomen=["than", "as", "however"],
                  neu_im_rahmen=["than", "as", "however", "therefore", "unless"],
                  slots=["easy", "difficult", "fast", "slow", "tall"]),
             dict(muster="[Slot] of us", musterDe="[Slot] von uns.",
                  pronomen=[],
                  slots=["both", "each", "few", "another", "nobody"]),
         ]),
    # ==================================================================
    dict(nr=13, titel="Body and health",
         finisher="Tell a doctor what hurts.",
         rahmen=[
             dict(muster="my [Slot] hurts", musterDe="Mein [Slot] tut weh.",
                  pronomen=[],
                  slots=["head", "hand", "foot", "eye", "mouth",
                         "arm", "leg", "hair", "body", "pain"]),
             # War "I feel [Slot]" mit Reflexivpronomen, also "I feel
             # yourself" (2026-09-08). `for` traegt alle fuenf Pronomen
             # grammatisch richtig.
             dict(muster="it is for [Slot]", musterDe="Es ist für [Slot].",
                  pronomen=[], neu_im_rahmen=["feel"],
                  slots=["myself", "yourself", "himself", "each other", "everyone"]),
         ]),
    # ==================================================================
    dict(nr=14, titel="Clothes, work and people",
         finisher="Describe what you are wearing and what you do.",
         rahmen=[
             dict(muster="I buy a [Slot]", musterDe="Ich kaufe einen [Slot].",
                  pronomen=[],
                  slots=["shoe", "clothes", "word", "language", "police"]),
             # Die Liste mischte Nomen und Verben - "I work with a teach"
             # (2026-09-08). Jetzt zwei Rahmen, je einer Wortart.
             dict(muster="I know the [Slot]", musterDe="Ich kenne den [Slot].",
                  pronomen=[],
                  slots=["customer", "kitchen", "colleague"]),
             dict(muster="I can [Slot] it", musterDe="Ich kann es [Slot].",
                  pronomen=[],
                  slots=["teach", "send", "wear"]),
             dict(muster="he is [Slot]", musterDe="Er ist [Slot].",
                  pronomen=[],
                  slots=["English", "German", "foreign", "lovely", "half"]),
             dict(muster="we need a [Slot]", musterDe="Wir brauchen ein [Slot].",
                  pronomen=[],
                  slots=["pair", "double", "sign", "rent", "borrow"]),
         ]),
    # ==================================================================
    dict(nr=15, titel="Everyday actions",
         finisher="Describe an ordinary day of yours from start to end.",
         rahmen=[
             dict(muster="I [Slot] to you", musterDe="Ich [Slot] dir.",
                  pronomen=["mine", "yours"],
                  slots=["say", "talk", "listen", "thank", "smile"]),
             dict(muster="I [Slot] the door", musterDe="Ich [Slot] die Tür.",
                  pronomen=[],
                  slots=["open", "close", "use", "make", "choose"]),
             dict(muster="I [Slot] here", musterDe="Ich [Slot] hier.",
                  pronomen=[],
                  slots=["stand", "laugh", "cry", "watch", "enjoy"]),
             # War "[Slot] do you ask?" mit Verben im Fragewort-Slot, also
             # "to be called do you ask?" (2026-09-08). Die fuenf Woerter
             # stehen in drei Formen da - zwei mit `to`, zwei blanke Verben,
             # und `cost` braucht ein sachliches Subjekt. Drei Rahmen also,
             # dafuer keiner falsch. Die Fragewoerter bleiben eingefuehrt.
             dict(muster="I need [Slot]", musterDe="Ich muss [Slot].",
                  pronomen=["why", "whether"],
                  neu_im_rahmen=["why", "whether", "without"],
                  slots=["to be called", "to answer"]),
             dict(muster="I want to [Slot] today", musterDe="Ich will heute [Slot].",
                  pronomen=[],
                  slots=["marry", "tidy"]),
             dict(muster="it can [Slot]", musterDe="Es kann [Slot].",
                  pronomen=[],
                  slots=["cost", "happen"]),
             dict(muster="it is [Slot]", musterDe="Es ist [Slot].",
                  pronomen=[],
                  slots=["new", "finished", "left", "black", "white"]),
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
    ("[P] have [Slot] it", "[P] habe [Slot].", dict(slotform="partizip")),
    ("I have already [Slot]", "Ich habe schon [Slot].", dict(slotform="partizip")),
    ("I have never [Slot]", "Ich habe nie [Slot].", dict(slotform="partizip")),
    ("[P] [Slot]", "[P] [Slot]."),
    ("[P] [Slot]", "[P] [Slot].", dict(slotform="dritte")),
    ("[P] [Slot]", "[P] [Slot]."),
    ("[P] [Slot]", "[P] [Slot]."),
    ("it is more [Slot]", "Das ist mehr [Slot]."),
    ("[P] am as [Slot] as you", "[P] bin so [Slot] wie du."),
    ("[P] feel [Slot]", "[P] fühle mich [Slot]."),
    ("[P] meet [Slot]", "[P] treffen uns [Slot]."),
    ("I stay here [Slot] I am tired", "Ich bleibe hier, [Slot] ich müde bin."),
    ("I think that it is [Slot]", "Ich glaube, dass es [Slot] ist."),
    ("if I have time, I want to [Slot]", "Wenn ich Zeit habe, will ich [Slot]."),
    ("can you [Slot], please?", "Kannst du bitte [Slot]?"),
    ("[P] must [Slot]", "[P] musst [Slot]."),
    ("[P] give the book to [Slot]", "[P] gebe [Slot] das Buch."),
    ("[P] show the city to [Slot]", "[P] zeige [Slot] die Stadt."),
    ("[P] want a glass of [Slot]", "[P] möchte ein Glas [Slot]."),
    ("[P] have enough [Slot]", "[P] haben genug [Slot]."),
    ("[P] have waited for an [Slot]", "[P] warte seit einer [Slot]."),
    ("[Slot] I go home", "[Slot] gehe ich nach Hause."),
    ("[P] would like to [Slot]", "[P] hätte gern [Slot]."),
    ("could you give me [Slot]?", "Könnten Sie mir [Slot] geben?"),
    ("[P] think that is [Slot]", "[P] denke, das ist [Slot]."),
    ("[P] find that very [Slot]", "[P] finde das sehr [Slot]."),
    ("tomorrow I will [Slot]", "Morgen werde ich [Slot]."),
    ("[P] want to [Slot] soon", "[P] will bald [Slot]."),
    ("that is the man who [Slot]", "Das ist der Mann, der [Slot].", dict(slotform="dritte")),
    ("I am looking for a place where you can [Slot]", "Ich suche einen Ort, wo man [Slot] kann."),
    ("yesterday I was at the [Slot]", "Gestern war ich im [Slot]."),
    ("I want to [Slot] because I have time", "Ich möchte [Slot], weil ich Zeit habe."),
]

MODULE = MODULE + baue_module(MUSTER_A2, datei="spine_a2.json")
