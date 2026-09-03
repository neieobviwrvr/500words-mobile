# -*- coding: utf-8 -*-
"""Grundwortschatz auf Englisch.

Englisch ist die erste Zielsprache, die die meisten Nutzer schon ein
Stueck weit koennen - der Grundwortschatz wirkt dadurch stellenweise
trivial. Er steht trotzdem vollstaendig da, aus zwei Gruenden: der Pfad
setzt ihn als freien Teil voraus, und "kann ich schon" und "sage ich
fluessig" sind zwei verschiedene Dinge.

**DREI SAETZE FALLEN RAUS, alle ersetzt (`neu=True`)** - und zwar
diesmal aus dem umgekehrten Grund als sonst: hier ist die ZIELSPRACHE das
Problem, nicht die Ausgangssprache.

  Sprichst du Englisch?       Einen Englaender zu fragen, ob er Englisch
                              spricht, ist keine Uebung. Ersetzt durch
                              "Sprichst du Deutsch?" - die Frage, die ein
                              Deutscher im Ausland tatsaechlich stellt,
                              wenn er nicht weiterkommt.
  Ich spreche ein bisschen    Zielsprache im Satz, wie in jeder anderen
  Deutsch.                    Sprache auch - ersetzt durch die englische
  Wie sagt man das auf        Fassung.
  Deutsch?

**72 uebersetzt, 3 ausgelassen, 3 neu.**

**Du und Sie gibt es nicht** - "you" deckt beides ab. Die
Hoeflichkeitsstufe steckt stattdessen im Drumherum: "Could you..." statt
"Can you...", ein angehaengtes "please", ein "sorry to bother you".
Deshalb stehen die hoeflichen Formen dort, wo im Deutschen das Sie
staende. Das ist die eine Stelle, an der Englisch fuer Deutsche
schwieriger ist als gedacht - nicht die Grammatik, sondern die Dosierung.

**Britisch, nicht amerikanisch, wo es auseinandergeht** - aber nur, wo es
den Satz wirklich veraendert (`toilet` statt `restroom`, `mobile` statt
`cell phone`). Beides steht als zusaetzliches Synonym in `k`, damit die
Bewertung keine der beiden Varianten abweist.
"""

SAETZE = [

# ---------------------------------------------------------------- Begrüßung
 dict(de='Hallo!', en='Hello!',
      k=[('hallo', ['hello', 'hi', 'hey'])]),
 dict(de='Guten Morgen!', en='Good morning!',
      k=[('morgen_gruss', ['good morning', 'morning'])]),
 dict(de='Guten Tag!', en='Good afternoon!',
      k=[('tag_gruss', ['good afternoon', 'good day'])],
      h='„Good afternoon" gilt ab Mittag. Ein neutrales „Guten Tag" für den '
        'ganzen Tag gibt es nicht — im Alltag sagt fast jeder einfach „hi".'),
 dict(de='Guten Abend!', en='Good evening!',
      k=[('abend_gruss', ['good evening'])]),
 dict(de='Wie geht es dir?', en='How are you?',
      k=[('wie_gehts', ['how are you', 'how are you doing', "how's it going"])],
      h='Meist eine Grußformel, keine echte Frage — die erwartete Antwort ist '
        '„fine, thanks" und eine Gegenfrage, nicht ein Bericht.'),
 dict(de='Mir geht es gut, danke.', en="I'm fine, thanks.",
      k=[('gut_danke', ["i'm fine", 'fine thanks', "i'm good"])]),
 dict(de='Auf Wiedersehen!', en='Goodbye!',
      k=[('wiedersehen', ['goodbye', 'good bye'])]),
 dict(de='Bis später!', en='See you later!',
      k=[('bis_spaeter', ['see you later', 'see you', 'later'])]),
 dict(de='Tschüss!', en='Bye!',
      k=[('tschuess', ['bye', 'bye bye', 'cheers'])],
      h='In Großbritannien heißt „cheers" auch tschüss und danke — nicht nur '
        'prost.'),

# --------------------------------------------------------------- Höflichkeit
 dict(de='Danke!', en='Thank you!',
      k=[('danke', ['thank you', 'thanks', 'ta'])]),
 dict(de='Vielen Dank!', en='Thank you very much!',
      k=[('danke', ['thank you very much', 'thanks a lot', 'many thanks'])]),
 dict(de='Gern geschehen.', en="You're welcome.",
      k=[('gern_geschehen', ["you're welcome", 'no worries', 'my pleasure'])],
      h='In Großbritannien und Australien hört man „no worries" öfter als '
        '„you’re welcome" — das klingt dort fast förmlich.'),
 dict(de='Entschuldigung!', en='Excuse me!',
      k=[('entschuldigung', ['excuse me', 'sorry'])],
      h='„Excuse me" spricht an oder bittet vorbei, „sorry" entschuldigt sich '
        'für etwas Geschehenes. Wer sich durch eine Menge schiebt, sagt '
        'trotzdem oft „sorry" — das ist die britische Dauerformel.'),
 dict(de='Es tut mir leid.', en="I'm sorry.",
      k=[('leid', ["i'm sorry", 'sorry'])]),
 dict(de='Kein Problem.', en='No problem.',
      k=[('kein_problem', ['no problem', 'no worries', "that's fine"])]),
 dict(de='Ja.', en='Yes.',
      k=[('ja', ['yes', 'yeah'])]),
 dict(de='Nein.', en='No.',
      k=[('nein', ['no'])]),
 dict(de='Ich weiß nicht.', en="I don't know.",
      k=[('nicht_wissen', ["i don't know", 'no idea'])]),

# ------------------------------------------------------------------ Kommentar
 dict(de='Wirklich?', en='Really?',
      k=[('wirklich', ['really', 'seriously', 'for real'])]),
 dict(de='Cool!', en='Cool!',
      k=[('cool', ['cool', 'nice', 'awesome'])]),
 dict(de='Macht nichts.', en='Never mind.',
      k=[('macht_nichts', ['never mind', "it doesn't matter", 'no matter'])]),
 dict(de='Genau!', en='Exactly!',
      k=[('genau', ['exactly', 'precisely'])]),
 dict(de='Stimmt.', en="That's true.",
      k=[('stimmt', ["that's true", 'true', 'right'])]),
 dict(de='Schade!', en="That's a shame!",
      k=[('schade', ["that's a shame", 'what a shame', 'that’s a pity'])]),
 dict(de='Na klar!', en='Of course!',
      k=[('na_klar', ['of course', 'sure', 'definitely'])]),
 dict(de='Auf keinen Fall!', en='No way!',
      k=[('auf_keinen_fall', ['no way', 'absolutely not', 'not a chance'])]),

# -------------------------------------------------------------------- Notlage
 dict(de='Wo ist die Toilette?', en='Where is the toilet?',
      k=[('toilette', ['toilet', 'restroom', 'bathroom', 'loo'])],
      h='„Toilet" ist britisch, „restroom" oder „bathroom" amerikanisch. In '
        'den USA klingt „toilet" für das Zimmer unfein — dort meint das Wort '
        'die Schüssel selbst.'),
 dict(de='Hilfe!', en='Help!',
      k=[('hilfe', ['help'])]),
 dict(de='Ich brauche Hilfe.', en='I need help.',
      k=[('brauchen', ['i need', 'need']),
         ('hilfe', ['help'])]),
 dict(de='Wo ist der Ausgang?', en='Where is the exit?',
      k=[('ausgang', ['exit', 'way out']),
         ('wo', ['where is', 'where'])]),
 dict(de='Ich habe mein Handy verloren.', en="I've lost my phone.",
      k=[('handy', ['phone', 'mobile', 'cell phone']),
         ('verloren', ["i've lost", 'lost'])]),
 dict(de='Ich habe meinen Pass verloren.', en="I've lost my passport.",
      k=[('pass', ['passport']),
         ('verloren', ["i've lost", 'lost'])]),
 dict(de='Entschuldigung, wo ist die Toilette?', en='Excuse me, where is the toilet?',
      k=[('entschuldigung', ['excuse me', 'sorry']),
         ('toilette', ['toilet', 'restroom', 'bathroom'])]),

# --------------------------------------------------------------------- Termin
 dict(de='Wann hast du Zeit?', en='When are you free?',
      k=[('wann_zeit', ['when are you free', 'when do you have time'])]),
 dict(de='Ich habe morgen keine Zeit.', en="I'm busy tomorrow.",
      k=[('keine_zeit', ["i'm busy", 'busy', "i don't have time"])]),
 dict(de='Können wir uns nächste Woche treffen?', en='Can we meet next week?',
      k=[('treffen', ['can we meet', 'meet', 'meet up'])]),
 dict(de='Ich habe einen Termin um 10 Uhr.', en='I have an appointment at ten.',
      k=[('termin', ['appointment']),
         ('zehn_uhr', ['at ten', 'ten o’clock', '10'])]),
 dict(de='Wann hast du Geburtstag?', en='When is your birthday?',
      k=[('geburtstag_frage', ['when is your birthday', 'your birthday'])]),
 dict(de='Mein Geburtstag ist im März.', en='My birthday is in March.',
      k=[('geburtstag', ['birthday']),
         ('maerz', ['march'])]),

# -------------------------------------------------------------------- Uhrzeit
 dict(de='Wie spät ist es?', en='What time is it?',
      k=[('wie_spaet', ['what time is it', "what's the time"])]),
 dict(de='Es ist drei Uhr.', en="It's three o'clock.",
      k=[('uhrzeit', ["three o'clock", "it's three", 'three'])]),
 dict(de='Um wie viel Uhr beginnt der Film?', en='What time does the film start?',
      k=[('beginn_frage', ['what time does', 'when does it start', 'start']),
         ('film', ['film', 'movie'])],
      h='„Film" ist britisch, „movie" amerikanisch — beides wird überall '
        'verstanden.'),
 dict(de='Welcher Tag ist heute?', en='What day is it today?',
      k=[('welcher_tag', ['what day is it', 'what day'])]),
 dict(de='Heute ist Montag.', en="Today is Monday.",
      k=[('tag', ['monday'])]),
 dict(de='Wir bleiben fünf Minuten.', en="We'll stay five minutes.",
      k=[('bleiben', ["we'll stay", 'stay']),
         ('fuenf_minuten', ['five minutes'])]),

# --------------------------------------------------------------- Verständigen
 dict(de='Kannst du bitte langsamer sprechen?', en='Could you speak more slowly, please?',
      k=[('langsamer', ['more slowly', 'slower', 'slow down'])],
      h='„Could you" statt „can you" ist die höfliche Stufe — im Englischen '
        'ersetzt sie das deutsche Sie, das es als Wort nicht gibt.'),
 dict(de='Ich verstehe das nicht.', en="I don't understand.",
      k=[('nicht_verstehen', ["i don't understand", "don't understand"])]),
 dict(de='Kannst du das bitte wiederholen?', en='Could you repeat that, please?',
      k=[('wiederholen', ['repeat', 'say that again', 'come again'])]),
 dict(de='Was heißt das?', en='What does that mean?',
      k=[('heissen', ['what does that mean', 'what does it mean'])]),
 dict(de='Können Sie das bitte aufschreiben?', en='Could you write it down, please?',
      k=[('aufschreiben', ['write it down', 'write that down', 'write'])]),
 dict(de='Bitte sag es noch einmal.', en='Please say it again.',
      k=[('noch_einmal', ['say it again', 'once more', 'again'])]),
 dict(de='Sprichst du Deutsch?', en='Do you speak German?',
      neu=True, sz='verstaendigen',
      k=[('sprache_frage', ['do you speak german', 'german'])]),
 dict(de='Ich spreche ein bisschen Englisch.', en='I speak a little English.',
      neu=True, sz='verstaendigen',
      k=[('bisschen_sprache', ['a little english', 'a bit of english', 'a little'])]),
 dict(de='Wie sagt man das auf Englisch?', en='How do you say this in English?',
      neu=True, sz='verstaendigen',
      k=[('wie_sagt_man', ['how do you say', 'how do you call']),
         ('sprache', ['in english', 'english'])]),

# ---------------------------------------------------------------- Vorstellung
 dict(de='Wie heißt du?', en="What's your name?",
      k=[('wie_heisst', ["what's your name", 'your name'])]),
 dict(de='Ich heiße Anna.', en="I'm Anna.",
      k=[('heisse_x', ["i'm", 'my name is'])]),
 dict(de='Woher kommst du?', en='Where are you from?',
      k=[('woher', ['where are you from', 'where from'])]),
 dict(de='Ich komme aus Deutschland.', en="I'm from Germany.",
      k=[('komme_aus', ["i'm from germany", 'from germany', 'germany'])]),
 dict(de='Wie alt bist du?', en='How old are you?',
      k=[('wie_alt', ['how old are you', 'how old'])]),
 dict(de='Ich bin 25 Jahre alt.', en="I'm twenty-five.",
      k=[('alter', ['twenty-five', '25', 'twenty five'])],
      h='Das Alter steht ohne „years old" — „I’m 25" reicht völlig, alles '
        'andere klingt nach Schulbuch.'),
 dict(de='Freut mich, dich kennenzulernen.', en='Nice to meet you.',
      k=[('freut_mich', ['nice to meet you', 'pleased to meet you'])]),
 dict(de='Das ist mein Freund.', en='This is my friend.',
      k=[('freund', ['my friend', 'friend'])],
      h='„My friend" ist der Kumpel, „my boyfriend" der feste Freund — anders '
        'als im Deutschen ist das immer eindeutig.'),
 dict(de='Ich bin zum ersten Mal hier.', en="It's my first time here.",
      k=[('erstes_mal', ['first time'])]),
 dict(de='Seid ihr Studenten?', en='Are you students?',
      k=[('studenten_frage', ['are you students', 'students'])]),

# ---------------------------------------------------------------------- Zahlen
 dict(de='Wie viel kostet das?', en='How much is it?',
      k=[('kosten_frage', ['how much is it', 'how much', 'how much does it cost'])]),
 dict(de='Das kostet zehn Euro.', en="It's ten euros.",
      k=[('preis', ['ten euros', 'ten euro'])]),
 dict(de='Ich hätte gern die Rechnung.', en='Could I have the bill, please?',
      k=[('rechnung', ['the bill', 'bill', 'check'])],
      h='„Bill" in Großbritannien, „check" in den USA — dieselbe Sache, zwei '
        'Wörter.'),
 dict(de='Eins, zwei, drei.', en='One, two, three.',
      k=[('zaehlen', ['one two three', 'one', 'two', 'three'])]),
 dict(de='Wie viele?', en='How many?',
      k=[('wie_viele', ['how many'])]),
 dict(de='Zwei Stück, bitte.', en='Two, please.',
      k=[('zwei', ['two']),
         ('bitte', ['please'])]),
 dict(de='Nur eins, bitte.', en='Just one, please.',
      k=[('eins', ['just one', 'one'])]),
 dict(de='Das ist genug.', en="That's enough.",
      k=[('genug', ["that's enough", 'enough'])]),
 dict(de='Wie viel ist das zusammen?', en='How much is that altogether?',
      k=[('zusammen', ['altogether', 'in total', 'all together']),
         ('wieviel', ['how much'])]),
 dict(de='Wir sind vier Personen.', en="There are four of us.",
      k=[('vier', ['four']),
         ('personen', ['four of us', 'people', 'of us'])]),
 dict(de='Ich habe nur eins.', en='I only have one.',
      k=[('nur_eins', ['only have one', 'only one', 'just one'])]),
]

AUSGELASSEN = [
    # Einen Englaender zu fragen, ob er Englisch spricht, ist keine Uebung -
    # ersetzt durch "Sprichst du Deutsch?" (neu=True oben).
    'Sprichst du Englisch?',
    # Zielsprache steht im Satz - ersetzt durch die englischen Fassungen.
    'Ich spreche ein bisschen Deutsch.',
    'Wie sagt man das auf Deutsch?',
]
