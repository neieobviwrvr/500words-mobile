# -*- coding: utf-8 -*-
"""club_nightlife auf Franzoesisch: 129 uebertragene + 1 angepasster Satz.

Die letzte offene Kategorie - damit ist Franzoesisch vollstaendig.

**Dieselben neun Ausschluesse wie in der spanischen Fassung**, aus denselben
Gruenden (siehe club_nightlife/spanisch.py fuer die ausfuehrliche Begruendung):

  Bist du aus China?             China-Kontext
  Lass uns WeChat austauschen.   WeChat gibt es hier nicht
  Ich zahle mit WeChat.          dito
  Soll ich dich scannen?         QR-Code-Tausch ist chinesische Alltagstechnik
  Mein Chinesisch ist nicht gut. ersetzt durch die franzoesische Fassung
  Du bist schlank.               In China ein Kompliment (瘦), in Frankreich
                                 ein Koerperkommentar, der schnell danebengeht
  Du hast eine sehr helle Haut.  Hautton zu loben ist hier ein Fettnaepfchen
  Ach wo! / Nein, nein.          哪里哪里 - Franzoesisch nimmt Lob mit "merci"
                                 an, bescheidenes Abwehren wirkt befremdlich

**Die Anrede-Varianten funktionieren**, wie bei Spanisch und anders als bei
Schwedisch: Franzoesisch beugt Adjektive (belle/beau, mignonne/mignon), die
frauen/maenner-Fassungen fallen also nicht zusammen.

**Vier eigene Kulturhinweise**, wo Frankreich eigene Regeln hat:

  Santé !          Beim Anstossen schaut man sich in die Augen - das gilt als
                   verbindlich, nicht als Spielerei.
  Tu me plais.     Deutlich direkter als "ich mag dich"; es heisst
                   unmissverstaendlich romantisches Interesse. "Je t'aime
                   bien" ist die freundschaftliche Variante.
  raccompagner     "Jemanden nach Hause bringen" heisst "raccompagner" -
                   begleiten, nicht hinbringen. Der Satz klingt dadurch
                   aufmerksam statt aufdringlich.
  Laisse-moi       Die klare, noch hoefliche Abweisung. Wird sie ignoriert,
  tranquille.      ist "fous-moi la paix" die naechste Stufe - deutlich
                   grober, aber unmissverstaendlich.

**Nicht von Muttersprachlern geprueft** - besonders die Saetze in
club_sicherheit gehoeren vor der Vertonung gegengelesen, dort entscheidet
der Ton.
"""

SAETZE = [

# ---------------------------------------------------------------- Trinkkultur
 dict(de='Prost!', fr='Santé !',
      k=[('prost', ['santé', 'tchin-tchin', 'tchin'])],
      h='Beim Anstoßen schaut man sich in Frankreich in die Augen — das gilt '
        'als verbindlich. „Tchin-tchin" ist die lockere Variante unter '
        'Freunden.'),
 dict(de='Immer mit der Ruhe - trink so viel du magst.',
      fr='Tranquille, bois ce que tu veux.',
      k=[('ruhig', ['tranquille', 'doucement']), ('trinken', ['bois', 'boire'])]),
 dict(de='Ich trinke langsam.', fr='Je bois doucement.',
      k=[('langsam', ['doucement', 'lentement']), ('trinken', ['je bois', 'boire'])]),
 dict(de='Ich kann nicht mehr trinken.', fr='Je ne peux plus boire.',
      k=[('nicht_koennen', ['je ne peux plus', 'peux plus']), ('trinken', ['boire'])]),
 dict(de='Ich muss morgen arbeiten.', fr='Je travaille demain.',
      k=[('morgen', ['demain']), ('arbeit', ['je travaille', 'travailler'])]),
 dict(de='Ich trinke nur ein bisschen.', fr='Je bois juste un peu.',
      k=[('trinken', ['je bois', 'boire']), ('ein_bisschen', ['juste un peu', 'un peu'])]),
 dict(de='Was trinkst du?', fr='Tu bois quoi ?',
      k=[('trinken', ['tu bois', 'boire']), ('was', ['quoi'])]),
 dict(de='Ich möchte noch ein Bier.', fr='Je voudrais encore une bière.',
      k=[('noch', ['encore']), ('bier', ['bière', 'une bière'])]),
 dict(de='Trinken wir zusammen!', fr='On boit ensemble !',
      k=[('zusammen', ['ensemble']), ('trinken', ['on boit', 'boire'])]),
 dict(de='Ich trinke keinen Alkohol.', fr='Je ne bois pas d\'alcool.',
      k=[('nicht', ['ne bois pas', 'pas']), ('alkohol', ['alcool'])]),
 dict(de='Was kostet das?', fr='Ça coûte combien ?',
      k=[('kosten', ['ça coûte', 'coûte']), ('was', ['combien'])]),
 dict(de='Ich lade dich ein.', fr='C\'est moi qui invite.',
      k=[('einladen', ['c\'est moi qui invite', 'j\'invite', 'invite'])]),

# ---------------------------------------------------------------- Ansprechen
 dict(de='Wie heißt du?', fr='Comment tu t\'appelles ?',
      k=[('heissen', ['comment tu t\'appelles', 'tu t\'appelles'])]),
 dict(de='Bist du von hier?', fr='Tu es d\'ici ?',
      k=[('von_hier', ['d\'ici', 'tu es d\'ici'])]),
 dict(de='Kommst du oft hierher?', fr='Tu viens souvent ici ?',
      k=[('kommen', ['tu viens', 'venir']), ('oft', ['souvent'])]),
 dict(de='Die Musik hier ist gut, oder?', fr='La musique est bien, non ?',
      k=[('musik', ['musique', 'la musique']), ('gut', ['bien', 'bonne'])]),
 dict(de='Gefällt es dir hier auch?', fr='Ça te plaît aussi ici ?',
      k=[('auch', ['aussi']), ('moegen', ['ça te plaît', 'te plaît'])]),
 dict(de='Ich sehe dir gern beim Tanzen zu.', fr='J\'aime te regarder danser.',
      k=[('moegen', ['j\'aime', 'aime']), ('tanzen', ['danser'])]),
 dict(de='Du bist sehr hübsch.', fr='Tu es très belle.',
      k=[('huebsch', ['belle', 'très belle', 'jolie'])]),
 dict(de='Du siehst gut aus.', fr='Tu es très beau.',
      k=[('gut_aussehen', ['beau', 'très beau'])]),
 dict(de='Bist du Single?', fr='Tu es célibataire ?',
      k=[('single', ['célibataire'])]),
 dict(de='Ist dein Freund auch hier?', fr='Ton copain est là aussi ?',
      k=[('fester_freund', ['copain', 'ton copain'])]),
 dict(de='Ist deine Freundin auch hier?', fr='Ta copine est là aussi ?',
      k=[('feste_freundin', ['copine', 'ta copine'])]),
 dict(de='Wollen wir zusammen tanzen?', fr='On danse ensemble ?',
      k=[('zusammen', ['ensemble']), ('tanzen', ['on danse', 'danser'])]),
 dict(de='Hier ist es zu laut. Gehen wir nach draußen?',
      fr='Il y a trop de bruit ici. On sort ?',
      k=[('laut', ['trop de bruit', 'bruit']), ('rausgehen', ['on sort', 'sortir'])]),
 dict(de='Mein Französisch ist nicht so gut.', fr='Mon français n\'est pas très bon.',
      neu=True, sz='club_ansprechen',
      k=[('sprache', ['français', 'mon français']),
         ('nicht_gut', ['pas très bon', 'pas bon'])]),

# ---------------------------------------------------------------- Einlass
 dict(de='Was kostet der Eintritt?', fr='Combien coûte l\'entrée ?',
      k=[('eintritt', ['entrée', 'l\'entrée']), ('kosten', ['combien coûte', 'coûte'])]),
 dict(de='Ich möchte ein Ticket kaufen.', fr='Je voudrais acheter une entrée.',
      k=[('moechten', ['je voudrais', 'voudrais']), ('kaufen', ['acheter']),
         ('ticket', ['entrée', 'une entrée'])]),
 dict(de='Wir sind zu zweit.', fr='On est deux.',
      k=[('wir', ['on est']), ('zwei', ['deux'])]),
 dict(de='Das ist mein Pass.', fr='Voici mon passeport.',
      k=[('pass', ['passeport', 'mon passeport'])]),
 dict(de='Habt ihr heute offen?', fr='Vous êtes ouverts ce soir ?',
      k=[('heute', ['ce soir', 'aujourd\'hui']), ('offen', ['ouverts', 'ouvert'])]),
 dict(de='Bis wann habt ihr heute offen?', fr='Vous fermez à quelle heure ?',
      k=[('bis_wann', ['à quelle heure', 'quelle heure']), ('offen', ['fermez', 'ouvert'])]),
 dict(de='Ich bin mit Freunden hier.', fr='Je suis avec des amis.',
      k=[('freund', ['amis', 'des amis'])]),
 dict(de='Kann ich hier bezahlen?', fr='Je peux payer ici ?',
      k=[('koennen', ['je peux', 'peux']), ('bezahlen', ['payer'])]),
 dict(de='Wo ist die Toilette?', fr='Où sont les toilettes ?',
      k=[('toilette', ['toilettes', 'les toilettes']), ('wo', ['où'])]),
 dict(de='Meine Freunde kommen später.', fr='Mes amis arrivent plus tard.',
      k=[('freund', ['amis', 'mes amis']), ('spaeter', ['plus tard'])]),
 dict(de='Ich bin nicht von hier.', fr='Je ne suis pas d\'ici.',
      k=[('nicht', ['ne suis pas', 'pas']), ('von_hier', ['d\'ici'])]),

# ---------------------------------------------------------------- Bar
 dict(de='Zwei Bier, bitte.', fr='Deux bières, s\'il vous plaît.',
      k=[('zwei', ['deux']), ('bier', ['bières', 'bière'])]),
 dict(de='Hier ist es zu laut.', fr='Il y a trop de bruit ici.',
      k=[('hier', ['ici']), ('laut', ['trop de bruit', 'bruit'])]),
 dict(de='Es ist laut, sag es bitte nochmal.',
      fr='Il y a du bruit, répète s\'il te plaît.',
      k=[('laut', ['du bruit', 'bruit']), ('nochmal', ['répète', 'encore']),
         ('sagen', ['répète', 'répéter'])]),
 dict(de='Was möchtest du trinken?', fr='Tu veux boire quoi ?',
      k=[('moechten', ['tu veux', 'veux']), ('trinken', ['boire'])]),
 dict(de='Haben Sie Wasser?', fr='Vous avez de l\'eau ?',
      k=[('haben', ['vous avez', 'avez']), ('wasser', ['eau', 'de l\'eau'])]),
 dict(de='Das ist zu teuer.', fr='C\'est trop cher.',
      k=[('teuer', ['cher', 'trop cher'])]),
 dict(de='Noch eins, bitte.', fr='Encore un, s\'il vous plaît.',
      k=[('noch', ['encore un', 'encore'])]),
 dict(de='Das bezahle ich.', fr='C\'est moi qui paie.',
      k=[('bezahlen', ['c\'est moi qui paie', 'je paie', 'j\'invite'])]),
 dict(de='Wo kann ich bezahlen?', fr='Où est-ce que je peux payer ?',
      k=[('wo', ['où']), ('bezahlen', ['payer'])]),
 dict(de='Ich nehme das Gleiche.', fr='Je prends la même chose.',
      k=[('nehmen', ['je prends', 'prends']), ('gleiche', ['la même chose', 'même chose'])]),
 dict(de='Was möchten Sie?', fr='Vous désirez ?',
      k=[('moechten', ['vous désirez', 'désirez', 'vous voulez'])]),

# ---------------------------------------------------------------- KTV / Karaoke
 dict(de='Wollen wir Karaoke singen?', fr='On fait un karaoké ?',
      k=[('karaoke', ['karaoké']), ('singen', ['on fait', 'chanter'])]),
 dict(de='Ich kann nicht singen.', fr='Je ne sais pas chanter.',
      k=[('nicht_koennen', ['je ne sais pas', 'sais pas']), ('singen', ['chanter'])]),
 dict(de='Sing du zuerst.', fr='Chante en premier.',
      k=[('zuerst', ['en premier', 'premier']), ('singen', ['chante', 'chanter'])]),
 dict(de='Welches Lied singst du?', fr='Tu chantes quelle chanson ?',
      k=[('singen', ['tu chantes', 'chanter']), ('lied', ['chanson'])]),
 dict(de='Dieses Lied kenne ich!', fr='Cette chanson, je la connais !',
      k=[('lied', ['chanson', 'cette chanson']), ('kennen', ['je la connais', 'connais'])]),
 dict(de='Wie viel kostet das Zimmer?', fr='Combien coûte la salle ?',
      k=[('zimmer', ['salle', 'la salle']), ('kosten', ['combien coûte', 'coûte'])]),
 dict(de='Ein Zimmer für vier Personen.', fr='Une salle pour quatre personnes.',
      k=[('zimmer', ['salle', 'une salle']), ('vier', ['quatre'])]),
 dict(de='Wir bleiben zwei Stunden.', fr='On reste deux heures.',
      k=[('zwei', ['deux']), ('stunde', ['heures', 'heure'])]),
 dict(de='Du singst sehr gut!', fr='Tu chantes très bien !',
      k=[('singen', ['tu chantes', 'chanter']), ('gut', ['très bien', 'bien'])]),
 dict(de='Wir singen zusammen.', fr='On chante ensemble.',
      k=[('zusammen', ['ensemble']), ('singen', ['on chante', 'chanter'])]),
 dict(de='Sing noch eins!', fr='Chante encore une !',
      k=[('noch', ['encore']), ('singen', ['chante', 'chanter'])]),

# ---------------------------------------------------------------- Näher kommen
 dict(de='Ich finde dich sehr nett.', fr='Je te trouve très sympa.',
      k=[('finden', ['je te trouve', 'trouve']), ('nett', ['sympa', 'très sympa'])]),
 dict(de='Ich mag dich.', fr='Tu me plais.',
      k=[('moegen', ['tu me plais', 'me plais'])],
      h='„Tu me plais" ist deutlich direkter als das deutsche „ich mag dich" — '
        'es heißt unmissverständlich romantisches Interesse. Die '
        'freundschaftliche Variante ist „je t\'aime bien".'),
 dict(de='Du gefällst mir sehr.', fr='Tu me plais beaucoup.',
      k=[('sehr', ['beaucoup']), ('moegen', ['tu me plais', 'me plais'])]),
 dict(de='Ich finde dich sehr attraktiv.', fr='Je te trouve très attirant.',
      k=[('finden', ['je te trouve', 'trouve']),
         ('attraktiv', ['attirant', 'attirante', 'beau', 'belle'])]),
 dict(de='Du bist sehr cool.', fr='Tu es super cool.',
      k=[('cool', ['cool', 'super cool'])]),
 dict(de='Mit dir zu reden macht Spaß.', fr='J\'aime bien parler avec toi.',
      k=[('reden', ['parler']), ('spass', ['j\'aime bien', 'aime bien'])]),
 dict(de='Ist das okay für dich?', fr='Ça te va ?',
      k=[('okay', ['ça te va', 'te va', 'd\'accord'])]),
 dict(de='Darf ich mich hierhin setzen?', fr='Je peux m\'asseoir ici ?',
      k=[('duerfen', ['je peux', 'peux']), ('sitzen', ['m\'asseoir', 'asseoir'])]),
 dict(de='Gehen wir woanders hin?', fr='On va ailleurs ?',
      k=[('gehen', ['on va', 'aller']), ('woanders', ['ailleurs'])]),
 dict(de='Ich kenne einen guten Ort.', fr='Je connais un bon endroit.',
      k=[('wissen', ['je connais', 'connais']), ('ort', ['endroit', 'un bon endroit'])]),
 dict(de='Gehen wir kurz nach draußen.', fr='On sort un moment ?',
      # 'draussen' waere hier ein zweites Konzept ohne eigenes Wort: 'sortir'
      # heisst schon hinausgehen, der Zielsatz nennt kein Gegenstueck zu
      # 'draussen'. Stattdessen 'kurz' - das steht wirklich drin (2026-08-29,
      # gefunden von der Synonym-Pruefung).
      k=[('gehen', ['on sort', 'sortir']), ('kurz', ['un moment', 'moment'])]),
 dict(de='Zu dir oder zu mir?', fr='Chez toi ou chez moi ?',
      k=[('oder', ['ou'])]),
 dict(de='Bier oder Wasser?', fr='Bière ou eau ?',
      k=[('bier', ['bière']), ('oder', ['ou'])]),
 dict(de='Deine Hände sind ganz kalt.', fr='Tu as les mains toutes froides.',
      k=[('hand', ['mains', 'les mains']), ('kalt', ['froides', 'froid'])]),
 dict(de='Ich bringe dich nach Hause.', fr='Je te raccompagne.',
      k=[('bringen', ['je te raccompagne', 'raccompagne'])],
      h='„Raccompagner" heißt begleiten, nicht hinbringen — der Satz klingt '
        'dadurch aufmerksam statt aufdringlich.'),
 dict(de='Soll ich dich nach Hause bringen?', fr='Je te raccompagne ?',
      k=[('bringen', ['je te raccompagne', 'raccompagne'])]),
 dict(de='Wir lassen es langsam angehen.', fr='On y va doucement.',
      k=[('langsam', ['doucement', 'on y va doucement'])]),
 dict(de='Ich reise morgen weiter.', fr='Je repars demain.',
      k=[('morgen', ['demain']), ('reisen', ['je repars', 'repars', 'pars'])]),
 dict(de='Ich suche gerade nichts Festes — ich reise bald weiter.',
      fr='Je ne cherche rien de sérieux, je repars bientôt.',
      k=[('nichts_ernstes', ['rien de sérieux', 'pas sérieux']),
         ('reisen', ['je repars', 'repars', 'bientôt'])]),

# ---------------------------------------------------------------- Nachtlogistik
 dict(de='Können wir zu dir?', fr='On peut aller chez toi ?',
      k=[('koennen', ['on peut', 'peut']), ('zu_dir', ['chez toi'])]),
 dict(de='Nehmen wir ein Zimmer.', fr='On prend une chambre.',
      k=[('zimmer', ['chambre', 'une chambre']), ('nehmen', ['on prend', 'prendre'])]),
 dict(de='Das Zimmer bezahle ich.', fr='La chambre, c\'est moi qui paie.',
      k=[('zimmer', ['chambre', 'la chambre']),
         ('bezahlen', ['c\'est moi qui paie', 'je paie'])]),
 dict(de='Ich rufe ein Taxi.', fr='J\'appelle un taxi.',
      k=[('rufen', ['j\'appelle', 'appeler']), ('taxi', ['taxi', 'un taxi'])]),
 dict(de='Ist das weit?', fr='C\'est loin ?',
      k=[('weit', ['loin'])]),
 dict(de='Mein Hotel ist nicht weit.', fr='Mon hôtel n\'est pas loin.',
      k=[('hotel', ['hôtel', 'mon hôtel']), ('weit', ['loin', 'pas loin'])]),
 dict(de='Ich fahre nach Hause.', fr='Je rentre chez moi.',
      k=[('nach_hause', ['je rentre', 'chez moi', 'rentrer'])]),
 dict(de='Wo wohnst du?', fr='Tu habites où ?',
      k=[('wohnen', ['tu habites', 'habites']), ('wo', ['où'])]),
 dict(de='In meinem Hotel geht das nicht.', fr='Dans mon hôtel, ce n\'est pas possible.',
      k=[('hotel', ['hôtel', 'mon hôtel']),
         ('nicht_moeglich', ['pas possible', 'ce n\'est pas possible'])]),
 dict(de='Das Hotel will meinen Pass sehen.', fr='L\'hôtel veut voir mon passeport.',
      k=[('hotel', ['hôtel', 'l\'hôtel']), ('pass', ['passeport', 'mon passeport'])]),
 dict(de='Zuerst zu dir, dann zu mir.', fr='D\'abord chez toi, puis chez moi.',
      k=[('zuerst', ['d\'abord']), ('dann', ['puis', 'ensuite'])]),

# ---------------------------------------------------------------- Komplimente
 dict(de='Du siehst heute toll aus.', fr='Tu es superbe ce soir.',
      k=[('heute', ['ce soir', 'aujourd\'hui']),
         ('gut_aussehen', ['superbe', 'magnifique', 'très bien'])]),
 dict(de='Dein Outfit gefällt mir.', fr='J\'aime bien ta tenue.',
      k=[('kleidung', ['tenue', 'ta tenue']), ('moegen', ['j\'aime bien', 'aime'])]),
 dict(de='Deine Haare sind schön.', fr='Tu as de beaux cheveux.',
      k=[('haare', ['cheveux']), ('schoen', ['beaux', 'de beaux cheveux'])]),
 dict(de='Sind deine Haare neu?', fr='Tu as changé de coiffure ?',
      k=[('haare', ['coiffure', 'cheveux'])]),
 dict(de='Deine Frisur ist sehr schön.', fr='J\'aime beaucoup ta coiffure.',
      k=[('frisur', ['coiffure', 'ta coiffure']), ('schoen', ['j\'aime beaucoup', 'belle'])]),
 dict(de='Deine Augen sind schön.', fr='Tu as de beaux yeux.',
      k=[('auge', ['yeux']), ('schoen', ['beaux', 'de beaux yeux'])]),
 dict(de='Du hast ein süßes Lächeln.', fr='Tu as un joli sourire.',
      k=[('laecheln', ['sourire', 'un sourire']), ('suess', ['joli', 'beau'])]),
 dict(de='Ich mag deine Stimme.', fr='J\'aime ta voix.',
      k=[('moegen', ['j\'aime', 'aime']), ('stimme', ['voix', 'ta voix'])]),
 dict(de='Deine Stimme ist sehr schön.', fr='Tu as une très belle voix.',
      k=[('stimme', ['voix']), ('schoen', ['belle', 'très belle'])]),
 dict(de='Du tanzt wirklich gut.', fr='Tu danses vraiment bien.',
      k=[('tanzen', ['tu danses', 'danser']), ('gut', ['vraiment bien', 'bien'])]),
 dict(de='Du bist sehr süß.', fr='Tu es très mignonne.',
      k=[('suess', ['mignonne', 'mignon', 'très mignonne'])]),
 dict(de='Du bist groß.', fr='Tu es grand.',
      k=[('gross', ['grand', 'grande'])]),
 dict(de='Du hast Klasse.', fr='Tu as de la classe.',
      k=[('klasse', ['classe', 'de la classe'])]),
 dict(de='Deine Freundin hat Klasse.', fr='Ton amie a de la classe.',
      k=[('freundin', ['amie', 'ton amie']), ('klasse', ['classe', 'de la classe'])]),
 dict(de='Danke, du aber auch.', fr='Merci, toi aussi.',
      k=[('danke', ['merci']), ('auch', ['toi aussi', 'aussi'])]),

# ---------------------------------------------------------------- Sicherheit
 dict(de='Ich gehe jetzt.', fr='Je m\'en vais.',
      k=[('gehen', ['je m\'en vais', 'm\'en vais'])]),
 dict(de='Ich möchte nach Hause.', fr='Je veux rentrer.',
      k=[('moechten', ['je veux', 'veux']), ('nach_hause', ['rentrer', 'chez moi'])]),
 dict(de='Kannst du mir helfen?', fr='Tu peux m\'aider ?',
      k=[('koennen', ['tu peux', 'peux']), ('helfen', ['m\'aider', 'aider'])]),
 dict(de='Mein Freund wartet draußen auf mich.', fr='Mon copain m\'attend dehors.',
      k=[('fester_freund', ['copain', 'mon copain']), ('warten', ['m\'attend', 'attend'])]),
 dict(de='Meine Freundin wartet draußen auf mich.', fr='Ma copine m\'attend dehors.',
      k=[('feste_freundin', ['copine', 'ma copine']), ('warten', ['m\'attend', 'attend'])]),
 dict(de='Lass mich in Ruhe.', fr='Laisse-moi tranquille.',
      k=[('in_ruhe', ['laisse-moi tranquille', 'tranquille'])],
      h='Die klare, noch höfliche Abweisung. Wird sie ignoriert, ist '
        '„fous-moi la paix" die nächste Stufe — deutlich grober, aber '
        'unmissverständlich.'),
 dict(de='Ich habe kein Interesse. Geh bitte weg.',
      fr='Ça ne m\'intéresse pas. Va-t\'en.',
      k=[('kein_interesse', ['ça ne m\'intéresse pas', 'pas intéressé']),
         ('weggehen', ['va-t\'en', 'partez'])]),
 dict(de='Die Person dort lässt mich nicht in Ruhe.',
      fr='Cette personne ne me laisse pas tranquille.',
      k=[('person', ['personne', 'cette personne']),
         ('in_ruhe', ['pas tranquille', 'tranquille'])]),
 dict(de='Bitte tu so, als würden wir uns kennen.',
      fr='Fais comme si on se connaissait, s\'il te plaît.',
      k=[('so_tun', ['fais comme si', 'comme si']),
         ('kennen', ['on se connaissait', 'connaître'])]),
 dict(de='Bitte pass kurz auf mein Glas auf.', fr='Tu peux surveiller mon verre ?',
      k=[('aufpassen', ['surveiller']), ('glas', ['verre', 'mon verre'])]),
 dict(de='Bitte rufen Sie die Polizei.', fr='Appelez la police, s\'il vous plaît.',
      k=[('rufen', ['appelez', 'appeler']), ('polizei', ['police'])]),
 dict(de='Entschuldigung, ich wusste nicht, dass ihr zusammen seid.',
      fr='Désolé, je ne savais pas que vous étiez ensemble.',
      k=[('entschuldigung', ['désolé', 'pardon']),
         ('wissen', ['je ne savais pas', 'savais pas'])]),
 dict(de='Mir geht es nicht gut.', fr='Je ne me sens pas bien.',
      k=[('nicht', ['ne', 'pas']), ('wohl', ['je ne me sens pas bien', 'pas bien'])]),

# ---------------------------------------------------------------- Verloren
 dict(de='Ich finde meine Freunde nicht.', fr='Je ne trouve pas mes amis.',
      k=[('finden', ['je ne trouve pas', 'trouve pas']), ('freund', ['amis', 'mes amis'])]),
 dict(de='Hast du meinen Freund gesehen?', fr='Tu as vu mon ami ?',
      k=[('sehen', ['tu as vu', 'vu']), ('freund', ['ami', 'mon ami'])]),
 dict(de='Wo bist du?', fr='Tu es où ?',
      k=[('wo', ['où', 'tu es où'])]),
 dict(de='Ich warte hier auf dich.', fr='Je t\'attends ici.',
      k=[('hier', ['ici']), ('warten', ['je t\'attends', 'attends'])]),
 dict(de='Mein Handy hat keinen Strom mehr.', fr='Mon téléphone n\'a plus de batterie.',
      k=[('handy', ['téléphone', 'mon téléphone', 'portable']),
         ('leer', ['plus de batterie', 'batterie'])]),
 dict(de='Wo kann ich mein Handy laden?',
      fr='Où est-ce que je peux recharger mon téléphone ?',
      k=[('wo', ['où']), ('laden', ['recharger', 'charger'])]),
 dict(de='Ich muss mein Handy laden.', fr='Je dois recharger mon téléphone.',
      k=[('muessen', ['je dois', 'dois']), ('laden', ['recharger', 'charger'])]),
 dict(de='Kann ich dein Handy benutzen?', fr='Je peux utiliser ton téléphone ?',
      k=[('benutzen', ['utiliser']), ('handy', ['téléphone', 'ton téléphone'])]),
 dict(de='Ich rufe dich an.', fr='Je t\'appelle.',
      k=[('telefonieren', ['je t\'appelle', 'appeler'])]),
 dict(de='Wir treffen uns draußen.', fr='On se retrouve dehors.',
      k=[('draussen', ['dehors']), ('treffen', ['on se retrouve', 'retrouver'])]),
 dict(de='Bis morgen!', fr='À demain !',
      k=[('morgen', ['demain']), ('treffen', ['à demain'])]),
 dict(de='Ich nehme ein Taxi nach Hause.', fr='Je prends un taxi pour rentrer.',
      k=[('taxi', ['taxi', 'un taxi']), ('nach_hause', ['rentrer', 'chez moi'])]),
 dict(de='Entschuldigung, ich habe meine Freunde verloren und mein Handy ist leer. Können Sie mir helfen?',
      fr='Pardon, j\'ai perdu mes amis et mon téléphone n\'a plus de batterie. Vous pouvez m\'aider ?',
      k=[('verloren', ['j\'ai perdu', 'perdu']), ('helfen', ['m\'aider', 'aider'])]),
]

AUSGELASSEN = [
    'Bist du aus China?',
    'Lass uns WeChat austauschen.',
    'Mein Chinesisch ist nicht so gut.',
    'Ich zahle mit WeChat.',
    'Soll ich dich scannen?',
    'Du bist schlank.',
    'Du hast eine sehr helle Haut.',
    'Ach wo! (bescheidene Antwort auf ein Lob)',
    'Nein, nein. (auf ein Lob)',
]
