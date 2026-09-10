# -*- coding: utf-8 -*-
"""Grundwortschatz auf Franzoesisch - die ersten Saetze der Sprache ueberhaupt.

Franzoesisch hatte bis zum 2026-08-27 keinen einzigen Satz (nur `franz_vocab`
mit 515 Einzelwoertern). Das hier ist der Anfang: der freie Teil, den jeder
Nutzer bekommt.

**Drei Saetze fallen raus, alle aus demselben Grund - Zusammenfall:**

  Guten Morgen!               Franzoesisch trennt Morgen und Tag NICHT:
                              "Bonjour" deckt beides ab, "Bonsoir" ist der
                              Abend. Ein zweiter Eintrag mit demselben Text
                              waere eine Karteikarte, die sich selbst abfragt.
                              Genau die Begruendung, aus der Chinesisch
                              "Guten Tag!" auslaesst (siehe CLAUDE.md) - nur
                              faellt hier der andere der beiden weg, weil
                              "Bonjour" naeher an "Guten Tag" liegt.
  Ich spreche ein bisschen    Die ZIELSPRACHE steht im Satz. Woertlich
  Deutsch.                    uebersetzt lernte ein Deutscher, auf
  Wie sagt man das auf        Franzoesisch zu sagen, dass er Deutsch spricht -
  Deutsch?                    nutzlos. Beide durch die franzoesische Fassung
                              ersetzt (`neu=True` weiter unten), dasselbe
                              Muster wie "Ich spreche kein Spanisch" in
                              health_emergency_es.py.

**Gefundener Fehler im spanischen Bestand, NICHT hier behoben:** dieselben
zwei Saetze stehen auf Spanisch woertlich uebersetzt drin ("¿Cómo se dice eso
en alemán?" - wie sagt man das auf DEUTSCH). Das stammt aus den
urspruenglichen 189 und ist aus Nutzersicht verkehrt herum. Gehoert
korrigiert, ist aber eine eigene Entscheidung ueber Bestandsdaten - siehe
Bericht an Simon.

**Du oder Sie ist die eigentliche Falle** dieser Sprache fuer Deutsche, und
sie faellt anders als im Deutschen: unter jungen Leuten wird schnell geduzt,
gegenueber Personal und Fremden bleibt es beim "vous", und die Grenze liegt
enger als bei uns. Wo es fuers Verstaendnis zaehlt, steht ein Hinweis am
Satz. Grundlinie hier: **tu** im Gespraech mit Gleichaltrigen (die Zielgruppe
sind Zwanziger), **vous** in Service-Situationen.

`verb_cluster` bleibt leer - `answer_clusters` hat keine franzoesischen
Cluster (dieselbe Lage wie bei Spanisch).

**Nicht von Muttersprachlern geprueft.**
"""

SAETZE = [

# ---------------------------------------------------------------- Begrüßung
 dict(de='Guten Tag!', fr='Bonjour !',
      k=[('tag_gruss', ['bonjour'])],
      h='„Bonjour" gilt von morgens bis zum frühen Abend — eine eigene Form '
        'für „Guten Morgen" gibt es nicht. Ab etwa 18 Uhr sagt man „bonsoir".'),
 dict(de='Guten Abend!', fr='Bonsoir !',
      k=[('abend_gruss', ['bonsoir'])]),
 dict(de='Hallo!', fr='Salut !',
      k=[('hallo', ['salut', 'coucou'])],
      h='„Salut" ist die lockere Form unter Freunden und funktioniert zur '
        'Begrüßung UND zum Abschied. Fremde oder Personal grüßt man mit '
        '„bonjour" — „salut" wirkt dort zu vertraulich.'),
 dict(de='Auf Wiedersehen!', fr='Au revoir !',
      k=[('wiedersehen', ['au revoir'])]),
 dict(de='Tschüss!', fr='Ciao !',
      k=[('tschuess', ['ciao', 'salut', 'à plus'])]),
 dict(de='Bis später!', fr='À plus tard !',
      k=[('bis_spaeter', ['à plus tard', 'à plus', 'à tout à l\'heure'])]),
 dict(de='Wie geht es dir?', fr='Comment ça va ?',
      k=[('wie_gehts', ['comment ça va', 'ça va', 'comment vas-tu'])]),
 dict(de='Mir geht es gut, danke.', fr='Ça va bien, merci.',
      k=[('gut_danke', ['ça va bien', 'ça va', 'bien merci'])]),

# ---------------------------------------------------------------- Höflichkeit
 dict(de='Danke!', fr='Merci !',
      k=[('danke', ['merci'])]),
 dict(de='Vielen Dank!', fr='Merci beaucoup !',
      k=[('danke', ['merci beaucoup', 'merci'])]),
 dict(de='Gern geschehen.', fr='De rien.',
      k=[('gern_geschehen', ['de rien', 'je vous en prie', 'avec plaisir'])],
      h='„De rien" ist die alltägliche Antwort. „Je vous en prie" ist '
        'förmlicher und passt gegenüber Personal oder Fremden.'),
 dict(de='Entschuldigung!', fr='Pardon !',
      k=[('entschuldigung', ['pardon', 'excusez-moi', 'excuse-moi'])],
      h='„Pardon" und „excusez-moi" bitten um Aufmerksamkeit oder Durchlass. '
        'Für eine echte Entschuldigung sagt man „je suis désolé" — vertauscht '
        'klingt beides schief.'),
 dict(de='Es tut mir leid.', fr='Je suis désolé.',
      k=[('leid', ['désolé', 'désolée', 'je suis désolé'])]),
 dict(de='Kein Problem.', fr='Pas de problème.',
      k=[('kein_problem', ['pas de problème', 'aucun problème'])]),
 dict(de='Ja.', fr='Oui.',
      k=[('ja', ['oui'])]),
 dict(de='Nein.', fr='Non.',
      k=[('nein', ['non'])]),
 dict(de='Ich weiß nicht.', fr='Je ne sais pas.',
      k=[('weiss_nicht', ['je ne sais pas', 'sais pas', 'je sais pas'])]),

# ---------------------------------------------------------------- Notlage
 dict(de='Hilfe!', fr='Au secours !',
      k=[('hilfe', ['au secours', 'à l\'aide'])]),
 dict(de='Ich brauche Hilfe.', fr='J\'ai besoin d\'aide.',
      k=[('brauchen', ['j\'ai besoin', 'besoin']), ('hilfe', ['aide', 'd\'aide'])]),
 dict(de='Wo ist der Ausgang?', fr='Où est la sortie ?',
      k=[('wo', ['où']), ('ausgang', ['sortie', 'la sortie'])]),
 dict(de='Wo ist die Toilette?', fr='Où sont les toilettes ?',
      k=[('wo', ['où']), ('toilette', ['toilettes', 'les toilettes'])]),
 dict(de='Entschuldigung, wo ist die Toilette?',
      fr='Pardon, où sont les toilettes ?',
      k=[('entschuldigung', ['pardon', 'excusez-moi']),
         ('toilette', ['toilettes', 'les toilettes']), ('wo', ['où'])]),
 dict(de='Ich habe mein Handy verloren.', fr='J\'ai perdu mon portable.',
      k=[('verloren', ['j\'ai perdu', 'perdu']),
         ('handy', ['portable', 'téléphone', 'mon portable'])]),
 dict(de='Ich habe meinen Pass verloren.', fr='J\'ai perdu mon passeport.',
      k=[('verloren', ['j\'ai perdu', 'perdu']), ('pass', ['passeport'])]),

# ---------------------------------------------------------------- Termin
 dict(de='Wann hast du Zeit?', fr='Quand est-ce que tu es libre ?',
      k=[('wann', ['quand']), ('zeit_haben', ['libre', 'tu es libre'])]),
 dict(de='Ich habe morgen keine Zeit.', fr='Demain je ne suis pas libre.',
      k=[('morgen', ['demain']), ('keine_zeit', ['pas libre', 'je ne suis pas libre'])]),
 dict(de='Können wir uns nächste Woche treffen?',
      fr='On peut se voir la semaine prochaine ?',
      k=[('treffen', ['se voir', 'se rencontrer']),
         ('naechste_woche', ['la semaine prochaine', 'semaine prochaine'])]),
 dict(de='Ich habe einen Termin um 10 Uhr.', fr='J\'ai rendez-vous à dix heures.',
      k=[('termin', ['rendez-vous']), ('zehn_uhr', ['dix heures', 'à dix heures'])]),
 dict(de='Wann hast du Geburtstag?', fr='C\'est quand ton anniversaire ?',
      k=[('wann', ['quand']), ('geburtstag', ['anniversaire', 'ton anniversaire'])]),
 dict(de='Mein Geburtstag ist im März.', fr='Mon anniversaire est en mars.',
      k=[('geburtstag', ['anniversaire']), ('maerz', ['mars', 'en mars'])]),

# ---------------------------------------------------------------- Uhrzeit
 dict(de='Wie spät ist es?', fr='Quelle heure est-il ?',
      k=[('wie_spaet', ['quelle heure', 'quelle heure est-il'])]),
 dict(de='Es ist drei Uhr.', fr='Il est trois heures.',
      k=[('uhrzeit', ['trois heures', 'il est trois heures'])]),
 dict(de='Welcher Tag ist heute?', fr='On est quel jour aujourd\'hui ?',
      k=[('welcher_tag', ['quel jour']), ('heute', ['aujourd\'hui'])]),
 dict(de='Heute ist Montag.', fr='Aujourd\'hui, c\'est lundi.',
      k=[('tag', ['lundi']), ('heute', ['aujourd\'hui'])]),
 dict(de='Um wie viel Uhr beginnt der Film?',
      fr='Le film commence à quelle heure ?',
      k=[('beginn_frage', ['à quelle heure', 'quelle heure']),
         ('film', ['film', 'le film'])]),
 dict(de='Wir bleiben fünf Minuten.', fr='On reste cinq minutes.',
      k=[('bleiben', ['on reste', 'rester']),
         ('fuenf_minuten', ['cinq minutes', 'cinq'])]),

# ---------------------------------------------------------------- Verständigen
 dict(de='Ich verstehe das nicht.', fr='Je ne comprends pas.',
      k=[('nicht_verstehen', ['je ne comprends pas', 'comprends pas', 'je comprends pas'])]),
 dict(de='Kannst du bitte langsamer sprechen?',
      fr='Tu peux parler plus lentement, s\'il te plaît ?',
      k=[('langsamer', ['plus lentement', 'lentement']),
         ('sprechen', ['parler', 'tu peux parler'])]),
 dict(de='Kannst du das bitte wiederholen?',
      fr='Tu peux répéter, s\'il te plaît ?',
      k=[('wiederholen', ['répéter', 'tu peux répéter'])]),
 dict(de='Bitte sag es noch einmal.', fr='Répète, s\'il te plaît.',
      k=[('nochmal', ['répète', 'encore une fois', 'répéter'])]),
 dict(de='Was heißt das?', fr='Qu\'est-ce que ça veut dire ?',
      k=[('was_heisst', ['qu\'est-ce que ça veut dire', 'ça veut dire', 'ça signifie'])]),
 dict(de='Sprichst du Englisch?', fr='Tu parles anglais ?',
      k=[('sprache_frage', ['tu parles anglais', 'anglais'])]),
 dict(de='Können Sie das bitte aufschreiben?',
      fr='Vous pouvez l\'écrire, s\'il vous plaît ?',
      k=[('aufschreiben', ['écrire', 'vous pouvez l\'écrire', 'noter'])]),
 dict(de='Ich spreche ein bisschen Französisch.', fr='Je parle un peu français.',
      neu=True, sz='verstaendigen',
      k=[('bisschen_sprache', ['un peu français', 'un peu de français', 'un peu'])]),
 dict(de='Wie sagt man das auf Französisch?', fr='Comment on dit ça en français ?',
      neu=True, sz='verstaendigen',
      k=[('wie_sagt_man', ['comment on dit', 'comment dit-on']),
         ('sprache', ['en français', 'français'])]),

# ---------------------------------------------------------------- Vorstellung
 dict(de='Wie heißt du?', fr='Comment tu t\'appelles ?',
      k=[('wie_heisst', ['comment tu t\'appelles', 'ton nom', 'tu t\'appelles comment'])]),
 dict(de='Ich heiße Anna.', fr='Je m\'appelle Anna.',
      k=[('heisse_x', ['je m\'appelle', 'moi c\'est'])]),
 dict(de='Woher kommst du?', fr='Tu viens d\'où ?',
      k=[('woher', ['tu viens d\'où', 'd\'où viens-tu', 'd\'où'])]),
 dict(de='Ich komme aus Deutschland.', fr='Je viens d\'Allemagne.',
      k=[('komme_aus', ['je viens d\'allemagne', 'd\'allemagne', 'allemagne'])]),
 dict(de='Wie alt bist du?', fr='Tu as quel âge ?',
      k=[('wie_alt', ['quel âge', 'tu as quel âge'])]),
 dict(de='Ich bin 25 Jahre alt.', fr='J\'ai vingt-cinq ans.',
      k=[('alter', ['vingt-cinq ans', '25 ans', 'vingt-cinq'])],
      h='Das Alter steht im Französischen bei „avoir" (haben), nicht bei '
        '„être" (sein): „j\'ai 25 ans" — wörtlich „ich habe 25 Jahre".'),
 dict(de='Freut mich, dich kennenzulernen.', fr='Enchanté.',
      k=[('freut_mich', ['enchanté', 'enchantée', 'ravi de te rencontrer'])]),
 dict(de='Das ist mein Freund.', fr='C\'est mon ami.',
      k=[('mein_freund', ['mon ami', 'mon copain', 'c\'est mon ami'])],
      h='„Mon ami" heißt Freund im normalen Sinn. Wer den PARTNER meint, sagt '
        '„mon copain" bzw. „ma copine" — das ist die geläufige Form dafür.'),
 dict(de='Ich bin zum ersten Mal hier.', fr='C\'est la première fois que je viens.',
      k=[('erstes_mal', ['la première fois', 'première fois'])]),
 dict(de='Seid ihr Studenten?', fr='Vous êtes étudiants ?',
      k=[('student', ['étudiants', 'étudiant', 'étudiantes'])]),

# ---------------------------------------------------------------- Zahlen
 dict(de='Eins, zwei, drei.', fr='Un, deux, trois.',
      k=[('zahlen', ['un deux trois', 'un', 'deux', 'trois'])]),
 dict(de='Wie viele?', fr='Combien ?',
      k=[('wieviele', ['combien'])]),
 dict(de='Wie viel kostet das?', fr='Ça coûte combien ?',
      k=[('kosten_frage', ['ça coûte combien', 'combien ça coûte', 'combien'])]),
 dict(de='Das kostet zehn Euro.', fr='Ça coûte dix euros.',
      k=[('preis', ['dix', 'dix euros', '10'])]),
 dict(de='Wie viel ist das zusammen?', fr='Ça fait combien en tout ?',
      k=[('zusammen', ['en tout', 'au total']), ('wieviel', ['combien', 'ça fait combien'])]),
 dict(de='Ich hätte gern die Rechnung.', fr='L\'addition, s\'il vous plaît.',
      k=[('rechnung', ['l\'addition', 'addition'])]),
 dict(de='Nur eins, bitte.', fr='Un seul, s\'il vous plaît.',
      k=[('nur_eins', ['un seul', 'un seulement', 'juste un'])]),
 dict(de='Ich habe nur eins.', fr='J\'en ai seulement un.',
      k=[('nur', ['seulement', 'juste']), ('eins', ['un', 'j\'en ai un'])]),
 dict(de='Zwei Stück, bitte.', fr='Deux, s\'il vous plaît.',
      k=[('zwei', ['deux'])]),
 dict(de='Wir sind vier Personen.', fr='Nous sommes quatre.',
      k=[('vier', ['quatre']), ('personen', ['nous sommes', 'personnes'])]),
 dict(de='Das ist genug.', fr='Ça suffit.',
      k=[('genug', ['ça suffit', 'suffit', 'assez'])]),
]

AUSGELASSEN = [
    # "Bonjour" deckt Morgen UND Tag ab - zwei Karten mit demselben Text
    # waeren eine Karteikarte, die sich selbst abfragt. Siehe Kopfkommentar.
    'Guten Morgen!',
    # Zielsprache steht im Satz - ersetzt durch die franzoesischen Fassungen.
    'Ich spreche ein bisschen Deutsch.',
    'Wie sagt man das auf Deutsch?',
]
