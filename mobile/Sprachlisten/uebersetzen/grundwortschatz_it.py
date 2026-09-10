# -*- coding: utf-8 -*-
"""Grundwortschatz auf Italienisch - die ersten Saetze der Sprache ueberhaupt.

Italienisch, Norwegisch und Russisch kamen am 2026-09-03 zusammen dazu
(Simons Auftrag). Das hier ist der Anfang: der freie Teil, den jeder Nutzer
bekommt, unabhaengig davon, was er gekauft hat.

**Vier Saetze fallen raus, alle aus je einem klaren Grund:**

  Guten Morgen!               "Buongiorno" deckt Morgen UND Tag ab, eine
                              eigene Morgenform gibt es nicht ("buon mattino"
                              sagt niemand). Zwei Karten mit demselben Text
                              waeren eine Karteikarte, die sich selbst
                              abfragt - dieselbe Begruendung, aus der
                              Chinesisch "Guten Tag!" auslaesst und
                              Franzoesisch "Guten Morgen!".
  Tschuess!                   Derselbe Zusammenfall am anderen Ende:
                              "Ciao" ist Gruss UND Abschied. Es faellt der
                              Abschied weg, nicht der Gruss - fuers
                              Verabschieden steht "Arrivederci" schon als
                              eigene Karte, fuers Gruessen gaebe es sonst
                              keine lockere Form. Der Hinweis am Satz
                              "Hallo!" sagt, dass es beides kann.
  Ich spreche ein bisschen    Die ZIELSPRACHE steht im Satz. Woertlich
  Deutsch.                    uebersetzt lernte ein Deutscher, auf
  Wie sagt man das auf        Italienisch zu sagen, dass er Deutsch
  Deutsch?                    spricht - nutzlos. Beide durch die
                              italienische Fassung ersetzt (`neu=True`
                              weiter unten), dasselbe Muster wie im
                              franzoesischen Grundwortschatz.

**Du oder Sie ist die Falle dieser Sprache** und faellt anders als im
Deutschen: unter jungen Leuten wird sofort geduzt ("tu"), gegenueber
Personal, Aelteren und in Amtssituationen gilt "Lei" - und "Lei" zieht die
dritte Person nach sich ("scusi" statt "scusa", "puo'" statt "puoi"). Wo es
fuers Verstaendnis zaehlt, steht ein Hinweis am Satz. Grundlinie hier: **tu**
im Gespraech mit Gleichaltrigen (die Zielgruppe sind Zwanziger), **Lei** in
Service-Situationen.

`verb_cluster` bleibt leer - `answer_clusters` hat 32 deutsche und 25
sv_-Cluster, aber keine italienischen (dieselbe Lage wie bei Spanisch und
Franzoesisch). Die Spalte steht bereit, falls sie nachgezogen werden.

**Nicht von Muttersprachlern geprueft.**
"""

SAETZE = [

# ---------------------------------------------------------------- Begrüßung
 dict(de='Hallo!', it='Ciao!',
      k=[('hallo', ['ciao', 'salve'])],
      h='„Ciao" ist die lockere Form unter Freunden und Gleichaltrigen und '
        'funktioniert zur Begrüßung UND zum Abschied. Fremde, Personal oder '
        'ältere Leute grüßt man mit „buongiorno" — „ciao" wirkt dort zu '
        'vertraulich. „Salve" liegt dazwischen.'),
 dict(de='Guten Tag!', it='Buongiorno!',
      k=[('tag_gruss', ['buongiorno'])],
      h='„Buongiorno" gilt von morgens bis zum frühen Nachmittag — eine eigene '
        'Form für „Guten Morgen" gibt es nicht. Ab etwa 16—17 Uhr sagt man '
        '„buonasera".'),
 dict(de='Guten Abend!', it='Buonasera!',
      k=[('abend_gruss', ['buonasera'])]),
 dict(de='Wie geht es dir?', it='Come stai?',
      k=[('wie_gehts', ['come stai', 'come va', 'come sta'])],
      h='„Come stai?" ist das Du, „come sta?" das Sie. „Come va?" umgeht die '
        'Entscheidung und passt immer.'),
 dict(de='Mir geht es gut, danke.', it='Sto bene, grazie.',
      k=[('gut_danke', ['sto bene', 'bene grazie', 'tutto bene'])]),
 dict(de='Auf Wiedersehen!', it='Arrivederci!',
      k=[('wiedersehen', ['arrivederci', 'arrivederla'])]),
 dict(de='Bis später!', it='A dopo!',
      k=[('bis_spaeter', ['a dopo', 'a più tardi', 'ci vediamo dopo'])]),

# --------------------------------------------------------------- Höflichkeit
 dict(de='Danke!', it='Grazie!',
      k=[('danke', ['grazie'])]),
 dict(de='Vielen Dank!', it='Grazie mille!',
      k=[('danke', ['grazie mille', 'molte grazie', 'grazie tante'])]),
 dict(de='Gern geschehen.', it='Prego.',
      k=[('gern_geschehen', ['prego', 'di niente', 'figurati'])],
      h='„Prego" ist die Standardantwort auf „grazie" und passt immer. Unter '
        'Freunden hört man „figurati", förmlich „si figuri".'),
 dict(de='Entschuldigung!', it='Scusi!',
      k=[('entschuldigung', ['scusi', 'scusa', 'mi scusi'])],
      h='„Scusa" zu Gleichaltrigen, „scusi" zu Fremden und Personal. Wer sich '
        'durch eine Menge schiebt, sagt „permesso".'),
 dict(de='Es tut mir leid.', it='Mi dispiace.',
      k=[('leid', ['mi dispiace', 'mi spiace'])]),
 dict(de='Kein Problem.', it='Nessun problema.',
      k=[('kein_problem', ['nessun problema', 'non c\'è problema', 'tranquillo'])]),
 dict(de='Ja.', it='Sì.',
      k=[('ja', ['sì'])]),
 dict(de='Nein.', it='No.',
      k=[('nein', ['no'])]),
 dict(de='Ich weiß nicht.', it='Non lo so.',
      k=[('nicht_wissen', ['non lo so', 'non so'])]),

# ------------------------------------------------------------------ Kommentar
 dict(de='Wirklich?', it='Davvero?',
      k=[('wirklich', ['davvero', 'veramente', 'sul serio'])]),
 dict(de='Cool!', it='Che figo!',
      k=[('cool', ['che figo', 'figo', 'forte'])],
      h='„Figo" ist Jugendsprache und sitzt unter Gleichaltrigen genau richtig, '
        'gegenüber Älteren eher nicht. Neutral geht immer „che bello".'),
 dict(de='Macht nichts.', it='Non fa niente.',
      k=[('macht_nichts', ['non fa niente', 'fa niente', 'non importa'])]),
 dict(de='Genau!', it='Esatto!',
      k=[('genau', ['esatto', 'esattamente', 'proprio così'])]),
 dict(de='Stimmt.', it='È vero.',
      k=[('stimmt', ['è vero', 'giusto', 'vero'])]),
 dict(de='Schade!', it='Che peccato!',
      k=[('schade', ['che peccato', 'peccato'])]),
 dict(de='Na klar!', it='Certo!',
      k=[('na_klar', ['certo', 'certamente', 'ma certo'])]),
 dict(de='Auf keinen Fall!', it='Assolutamente no!',
      k=[('auf_keinen_fall', ['assolutamente no', 'per niente', 'neanche per sogno'])]),

# -------------------------------------------------------------------- Notlage
 dict(de='Wo ist die Toilette?', it='Dov\'è il bagno?',
      k=[('toilette', ['bagno', 'toilette'])],
      h='In Bars und Cafés fragt man einfach „il bagno?" — die Toilette ist '
        'für Gäste, nicht öffentlich. Ein Espresso an der Theke kostet wenig '
        'und macht dich zum Gast.'),
 dict(de='Hilfe!', it='Aiuto!',
      k=[('hilfe', ['aiuto'])]),
 dict(de='Ich brauche Hilfe.', it='Ho bisogno di aiuto.',
      k=[('brauchen', ['ho bisogno', 'mi serve']),
         ('hilfe', ['aiuto'])]),
 dict(de='Wo ist der Ausgang?', it='Dov\'è l\'uscita?',
      k=[('ausgang', ['uscita']),
         ('wo', ['dov\'è', 'dove'])]),
 dict(de='Ich habe mein Handy verloren.', it='Ho perso il cellulare.',
      k=[('handy', ['cellulare', 'telefono']),
         ('verloren', ['ho perso', 'perso'])]),
 dict(de='Ich habe meinen Pass verloren.', it='Ho perso il passaporto.',
      k=[('pass', ['passaporto']),
         ('verloren', ['ho perso', 'perso'])]),
 dict(de='Entschuldigung, wo ist die Toilette?', it='Scusi, dov\'è il bagno?',
      k=[('entschuldigung', ['scusi', 'scusa']),
         ('toilette', ['bagno', 'toilette'])]),

# --------------------------------------------------------------------- Termin
 dict(de='Wann hast du Zeit?', it='Quando hai tempo?',
      k=[('wann_zeit', ['quando hai tempo', 'quando sei libero', 'quando puoi'])]),
 dict(de='Ich habe morgen keine Zeit.', it='Domani non ho tempo.',
      k=[('keine_zeit', ['non ho tempo', 'sono impegnato'])]),
 dict(de='Können wir uns nächste Woche treffen?', it='Possiamo vederci la settimana prossima?',
      k=[('treffen', ['vederci', 'incontrarci', 'vediamoci'])]),
 dict(de='Ich habe einen Termin um 10 Uhr.', it='Ho un appuntamento alle dieci.',
      k=[('termin', ['appuntamento']),
         ('zehn_uhr', ['alle dieci', 'le dieci'])]),
 dict(de='Wann hast du Geburtstag?', it='Quando è il tuo compleanno?',
      k=[('geburtstag_frage', ['quando è il tuo compleanno', 'quando compi gli anni'])]),
 dict(de='Mein Geburtstag ist im März.', it='Il mio compleanno è a marzo.',
      k=[('geburtstag', ['compleanno']),
         ('maerz', ['marzo'])]),

# -------------------------------------------------------------------- Uhrzeit
 dict(de='Wie spät ist es?', it='Che ore sono?',
      k=[('wie_spaet', ['che ore sono', 'che ora è'])]),
 dict(de='Es ist drei Uhr.', it='Sono le tre.',
      k=[('uhrzeit', ['sono le tre', 'le tre'])]),
 dict(de='Um wie viel Uhr beginnt der Film?', it='A che ora inizia il film?',
      k=[('beginn_frage', ['a che ora inizia', 'quando inizia']),
         ('film', ['film'])]),
 dict(de='Welcher Tag ist heute?', it='Che giorno è oggi?',
      k=[('welcher_tag', ['che giorno è', 'che giorno'])]),
 dict(de='Heute ist Montag.', it='Oggi è lunedì.',
      k=[('tag', ['lunedì'])]),
 dict(de='Wir bleiben fünf Minuten.', it='Restiamo cinque minuti.',
      k=[('bleiben', ['restiamo', 'stiamo']),
         ('fuenf_minuten', ['cinque minuti'])]),

# --------------------------------------------------------------- Verständigen
 dict(de='Sprichst du Englisch?', it='Parli inglese?',
      k=[('sprache_frage', ['parli inglese', 'parla inglese'])],
      h='Außerhalb der großen Städte und Touristenorte ist Englisch in Italien '
        'weniger verbreitet, als man erwartet — dieser Satz führt oft ins '
        'Leere. Ein paar Brocken Italienisch bringen dich weiter.'),
 dict(de='Kannst du bitte langsamer sprechen?', it='Puoi parlare più lentamente, per favore?',
      k=[('langsamer', ['più lentamente', 'più piano', 'più adagio'])]),
 dict(de='Ich verstehe das nicht.', it='Non capisco.',
      k=[('nicht_verstehen', ['non capisco', 'non ho capito'])]),
 dict(de='Kannst du das bitte wiederholen?', it='Puoi ripetere, per favore?',
      k=[('wiederholen', ['ripetere', 'ripeti', 'può ripetere'])]),
 dict(de='Was heißt das?', it='Che cosa significa?',
      k=[('heissen', ['cosa significa', 'che significa', 'cosa vuol dire'])]),
 dict(de='Können Sie das bitte aufschreiben?', it='Può scriverlo, per favore?',
      k=[('aufschreiben', ['scriverlo', 'scrivere', 'me lo scrive'])]),
 dict(de='Bitte sag es noch einmal.', it='Dillo ancora una volta, per favore.',
      k=[('noch_einmal', ['ancora una volta', 'di nuovo', 'un\'altra volta'])]),
 dict(de='Ich spreche ein bisschen Italienisch.', it='Parlo un po\' d\'italiano.',
      neu=True, sz='verstaendigen',
      k=[('bisschen_sprache', ['un po\' d\'italiano', 'un po\' italiano', 'un po\''])]),
 dict(de='Wie sagt man das auf Italienisch?', it='Come si dice in italiano?',
      neu=True, sz='verstaendigen',
      k=[('wie_sagt_man', ['come si dice']),
         ('sprache', ['in italiano', 'italiano'])]),

# ---------------------------------------------------------------- Vorstellung
 dict(de='Wie heißt du?', it='Come ti chiami?',
      k=[('wie_heisst', ['come ti chiami', 'come si chiama', 'il tuo nome'])]),
 dict(de='Ich heiße Anna.', it='Mi chiamo Anna.',
      k=[('heisse_x', ['mi chiamo', 'sono'])]),
 dict(de='Woher kommst du?', it='Di dove sei?',
      k=[('woher', ['di dove sei', 'da dove vieni'])]),
 dict(de='Ich komme aus Deutschland.', it='Vengo dalla Germania.',
      k=[('komme_aus', ['vengo dalla germania', 'sono tedesco', 'sono della germania'])]),
 dict(de='Wie alt bist du?', it='Quanti anni hai?',
      k=[('wie_alt', ['quanti anni hai'])]),
 dict(de='Ich bin 25 Jahre alt.', it='Ho venticinque anni.',
      k=[('alter', ['venticinque anni', '25 anni'])],
      h='Das Alter wird auf Italienisch HABEN, nicht sein: „ho 25 anni" — '
        '„sono 25 anni" ist falsch. Gleiche Logik wie bei Hunger und Durst '
        '(„ho fame", „ho sete").'),
 dict(de='Freut mich, dich kennenzulernen.', it='Piacere di conoscerti.',
      k=[('freut_mich', ['piacere', 'piacere di conoscerti'])],
      h='Kurz reicht: ein blankes „piacere" beim Händeschütteln ist die '
        'übliche Form.'),
 dict(de='Das ist mein Freund.', it='Questo è il mio amico.',
      k=[('freund', ['il mio amico', 'mio amico'])],
      h='„Il mio amico" ist der Kumpel, „il mio ragazzo" der feste Freund. '
        'Der Unterschied ist derselbe wie im Deutschen, nur eindeutiger — wer '
        '„ragazzo" sagt, sagt damit, dass sie zusammen sind.'),
 dict(de='Ich bin zum ersten Mal hier.', it='È la prima volta che vengo qui.',
      k=[('erstes_mal', ['prima volta'])]),
 dict(de='Seid ihr Studenten?', it='Siete studenti?',
      k=[('studenten_frage', ['siete studenti', 'studenti'])]),

# ---------------------------------------------------------------------- Zahlen
 dict(de='Wie viel kostet das?', it='Quanto costa?',
      k=[('kosten_frage', ['quanto costa', 'quanto viene'])]),
 dict(de='Das kostet zehn Euro.', it='Costa dieci euro.',
      k=[('preis', ['dieci euro'])]),
 dict(de='Ich hätte gern die Rechnung.', it='Il conto, per favore.',
      k=[('rechnung', ['il conto', 'conto'])],
      h='In Italien kommt die Rechnung nie von selbst — man muss sie holen. '
        '„Il conto, per favore" reicht, ein ganzer Satz ist unnötig.'),
 dict(de='Eins, zwei, drei.', it='Uno, due, tre.',
      k=[('zaehlen', ['uno due tre', 'uno', 'due', 'tre'])]),
 dict(de='Wie viele?', it='Quanti?',
      k=[('wie_viele', ['quanti', 'quante'])]),
 dict(de='Zwei Stück, bitte.', it='Due, per favore.',
      k=[('zwei', ['due']),
         ('bitte', ['per favore'])]),
 dict(de='Nur eins, bitte.', it='Solo uno, per favore.',
      k=[('eins', ['solo uno', 'uno'])]),
 dict(de='Das ist genug.', it='Basta così.',
      k=[('genug', ['basta', 'basta così', 'abbastanza'])]),
 dict(de='Wie viel ist das zusammen?', it='Quant\'è in tutto?',
      k=[('zusammen', ['in tutto', 'in totale']),
         ('wieviel', ['quant\'è', 'quanto'])]),
 dict(de='Wir sind vier Personen.', it='Siamo in quattro.',
      k=[('vier', ['quattro']),
         ('personen', ['siamo in quattro', 'persone', 'siamo'])]),
 dict(de='Ich habe nur eins.', it='Ne ho solo uno.',
      k=[('nur_eins', ['solo uno', 'soltanto uno', 'ne ho uno'])]),
]

AUSGELASSEN = [
    # "Buongiorno" deckt Morgen UND Tag ab - zwei Karten mit demselben Text
    # waeren eine Karteikarte, die sich selbst abfragt. Siehe Kopfkommentar.
    'Guten Morgen!',
    # "Ciao" ist Gruss UND Abschied. Der Abschied faellt weg, weil
    # "Arrivederci" ihn schon abdeckt - der lockere Gruss haette sonst
    # keine Karte.
    'Tschüss!',
    # Zielsprache steht im Satz - ersetzt durch die italienischen Fassungen.
    'Ich spreche ein bisschen Deutsch.',
    'Wie sagt man das auf Deutsch?',
]
