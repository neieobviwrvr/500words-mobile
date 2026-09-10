# -*- coding: utf-8 -*-
"""drinking_dining auf Franzoesisch: alle 92 Saetze.

**Kein einziger Ausschluss** - dasselbe Bild wie bei Spanisch: Essen ist
universell, und die franzoesische Tischkultur (teilen, einladen, lange
sitzen) deckt sich gut mit der chinesischen Vorlage.

**Sechs eigene Kulturhinweise**, weil FRANZOESISCH hier Fallen stellt, die es
im Deutschen nicht gibt. Zwei davon sind echte Fehlerquellen:

  la carte / le menu   Der klassische Fallstrick. "Le menu" ist in Frankreich
                       das FESTE Angebot zum Pauschalpreis, nicht die
                       Speisekarte. Wer "le menu" verlangt, bekommt das
                       Tagesangebot statt der Auswahl. Die Karte heisst
                       "la carte".
  Ich bin satt.        NICHT "je suis plein" - das heisst je nach Gegend
                       betrunken oder schwanger. Richtig ist "j'ai assez
                       mangé" oder "je n'ai plus faim". Ein Satz, den
                       Deutsche zuverlaessig falsch bilden, weil er woertlich
                       so nahe liegt.

Die uebrigen vier: die kostenlose "carafe d'eau" (Leitungswasser, das man
verlangen darf), "service compris" (Trinkgeld ist in Frankreich optional und
klein), "sur place ou à emporter" (die Standardfrage an jedem Tresen) und
"fruits à coque" als der Begriff fuer Baumnuesse in der Allergenkennzeichnung.

**Nuesse, wie schon bei Chinesisch:** "fruits à coque" sind Baumnuesse
(Walnuss, Mandel, Cashew) - das ist der Begriff, der auf franzoesischen
Zutatenlisten steht. "Noix" allein heisst genau Walnuss. Wer "allergique aux
noix" sagt, benennt also nur eine einzige Nussart; bei einer Allergie ist das
der Unterschied, auf den es ankommt.

**Du oder Sie:** durchgehend "vous" gegenueber Personal, "tu" nur da, wo der
deutsche Satz erkennbar Freunde anspricht (Iss mehr!, Nimm doch!, Trinkst du
Kaffee oder Tee?). Dieselbe Linie wie in grundwortschatz_fr.py.

`verb_cluster` leer - es gibt keine franzoesischen Cluster in
`answer_clusters`.

**Nicht von Muttersprachlern geprueft.**
"""

SAETZE = [

# ---------------------------------------------------------------- Bestellen
 dict(de='Die Speisekarte, bitte.', fr='La carte, s\'il vous plaît.',
      k=[('speisekarte', ['la carte', 'carte'])],
      h='Achtung, falscher Freund: „le menu" ist in Frankreich das FESTE '
        'Angebot zum Pauschalpreis. Die Speisekarte heißt „la carte" — wer '
        '„le menu" verlangt, bekommt das Tagesangebot statt der Auswahl.'),
 dict(de='Ich möchte etwas bestellen.', fr='Je voudrais commander.',
      k=[('bestellen', ['commander', 'je voudrais commander'])]),
 dict(de='Was empfehlen Sie?', fr='Qu\'est-ce que vous recommandez ?',
      k=[('empfehlen', ['recommandez', 'recommander', 'conseillez'])]),
 dict(de='Was gibt es gutes zu Essen?', fr='Qu\'est-ce qui est bon ici ?',
      k=[('was_gutes', ['qu\'est-ce qui est bon', 'bon']), ('hier', ['ici'])]),
 dict(de='Was ist in diesem Gericht?', fr='Qu\'est-ce qu\'il y a dans ce plat ?',
      k=[('was', ['qu\'est-ce']), ('gericht', ['plat', 'ce plat'])]),
 dict(de='Haben Sie eine Karte mit Bildern?',
      fr='Vous avez une carte avec des photos ?',
      k=[('karte', ['carte']), ('bilder', ['photos', 'des photos'])]),
 dict(de='Gibt es davon ein Bild?', fr='Il y a une photo ?',
      k=[('bild', ['photo', 'une photo'])]),
 dict(de='Zeigen Sie mir das mal.', fr='Montrez-moi ça, s\'il vous plaît.',
      k=[('zeigen', ['montrez-moi', 'montrer'])]),
 dict(de='Diese hier, bitte.', fr='Celui-ci, s\'il vous plaît.',
      k=[('dieses', ['celui-ci', 'celle-ci', 'ça'])]),
 dict(de='Ich möchte etwas Warmes.', fr='Je voudrais quelque chose de chaud.',
      k=[('moechten', ['je voudrais', 'voudrais']), ('warm', ['chaud'])]),
 dict(de='Ich hätte gern ein Wasser, bitte.',
      fr='Je voudrais une eau, s\'il vous plaît.',
      k=[('moechten', ['je voudrais', 'voudrais']), ('wasser', ['eau', 'une eau'])]),
 dict(de='Was möchten Sie trinken?', fr='Qu\'est-ce que vous voulez boire ?',
      k=[('moechten', ['vous voulez', 'voulez']), ('trinken', ['boire'])]),
 dict(de='Wie lange dauert es?', fr='Ça prend combien de temps ?',
      k=[('wie_lange', ['combien de temps']), ('dauern', ['ça prend', 'prend'])]),
 dict(de='Einen Moment, bitte.', fr='Un moment, s\'il vous plaît.',
      k=[('moment', ['un moment', 'moment'])]),
 dict(de='Das ist alles, danke.', fr='C\'est tout, merci.',
      k=[('alles', ['c\'est tout', 'tout']), ('danke', ['merci'])]),

# ---------------------------------------------------------------- Bezahlen
 dict(de='Können wir bitte zahlen?', fr='On peut payer, s\'il vous plaît ?',
      k=[('koennen', ['on peut', 'peut']), ('bezahlen', ['payer'])]),
 dict(de='Wie viel macht das?', fr='Ça fait combien ?',
      k=[('wieviel', ['ça fait combien', 'combien'])]),
 dict(de='Zusammen, bitte.', fr='Tout ensemble, s\'il vous plaît.',
      k=[('zusammen', ['tout ensemble', 'ensemble'])]),
 dict(de='Können Sie mir die Rechnung getrennt bringen?',
      fr='Vous pouvez faire des additions séparées ?',
      k=[('rechnung', ['additions', 'addition']),
         ('getrennt', ['séparées', 'séparément'])]),
 dict(de='Stimmt so.', fr='Gardez la monnaie.',
      k=[('stimmt_so', ['gardez la monnaie', 'la monnaie', 'c\'est bon'])],
      h='In Frankreich ist der Service in der Rechnung enthalten („service '
        'compris"). Trinkgeld ist freiwillig und klein — man rundet auf oder '
        'lässt ein paar Münzen liegen, mehr wird nicht erwartet.'),
 dict(de='Ist das im Preis inbegriffen?', fr='C\'est compris dans le prix ?',
      k=[('inbegriffen', ['compris', 'inclus']), ('preis', ['prix'])]),
 dict(de='Das habe ich nicht bestellt.', fr='Je n\'ai pas commandé ça.',
      k=[('nicht_bestellt', ['je n\'ai pas commandé', 'pas commandé'])]),
 dict(de='Können wir das einpacken?', fr='On peut emporter ça ?',
      k=[('einpacken', ['emporter', 'à emporter'])]),
 dict(de='Kann ich mit dem Handy bezahlen?',
      fr='Je peux payer avec le téléphone ?',
      k=[('koennen', ['je peux', 'peux']), ('handy', ['téléphone', 'portable']),
         ('bezahlen', ['payer'])]),

# ---------------------------------------------------------------- Geschmack
 dict(de='Guten Appetit!', fr='Bon appétit !',
      k=[('guten_appetit', ['bon appétit'])]),
 dict(de='Das Essen schmeckt sehr gut.', fr='C\'est très bon.',
      k=[('schmeckt_gut', ['très bon', 'c\'est bon', 'délicieux'])]),
 dict(de='Das war sehr lecker.', fr='C\'était délicieux.',
      k=[('war_lecker', ['c\'était délicieux', 'délicieux', 'très bon'])]),
 dict(de='Das mag ich sehr.', fr='J\'aime beaucoup ça.',
      k=[('moegen', ['j\'aime', 'aime']), ('sehr', ['beaucoup'])]),
 dict(de='Das mag ich nicht.', fr='Je n\'aime pas ça.',
      k=[('nicht_moegen', ['je n\'aime pas', 'aime pas'])]),
 dict(de='Das ist mir zu salzig.', fr='C\'est trop salé pour moi.',
      k=[('salzig', ['salé']), ('zu', ['trop'])]),
 dict(de='Nicht zu salzig, bitte.', fr='Pas trop salé, s\'il vous plaît.',
      k=[('nicht_zu', ['pas trop', 'pas']), ('salzig', ['salé'])]),
 dict(de='Was ist das für ein Fleisch?', fr='C\'est quelle viande ?',
      k=[('fleisch', ['viande']), ('welche', ['quelle'])]),
 dict(de='Dieses Restaurant ist sehr gut.', fr='Ce restaurant est très bon.',
      k=[('restaurant', ['restaurant']), ('gut', ['très bon', 'bon'])]),
 dict(de='Gestern habe ich in einem Restaurant gegessen.',
      fr='Hier, j\'ai mangé au restaurant.',
      k=[('gestern', ['hier']), ('restaurant', ['restaurant', 'au restaurant'])]),

# ---------------------------------------------------------------- Getränke
 dict(de='Was haben Sie zu trinken?', fr='Qu\'est-ce que vous avez à boire ?',
      k=[('haben', ['vous avez', 'avez']), ('trinken', ['à boire', 'boire'])]),
 dict(de='Ein Bier, bitte.', fr='Une bière, s\'il vous plaît.',
      k=[('bier', ['bière', 'une bière'])]),
 dict(de='Einen Tee, bitte.', fr='Un thé, s\'il vous plaît.',
      k=[('tee', ['thé', 'un thé'])]),
 dict(de='Kaltes Wasser, bitte.', fr='De l\'eau fraîche, s\'il vous plaît.',
      k=[('wasser', ['eau', 'de l\'eau']), ('kalt', ['fraîche', 'froide'])],
      h='Leitungswasser ist in französischen Lokalen kostenlos und darf '
        'verlangt werden: „une carafe d\'eau, s\'il vous plaît". Sonst bekommt '
        'man Flaschenwasser auf die Rechnung.'),
 dict(de='Heißes Wasser, bitte.', fr='De l\'eau chaude, s\'il vous plaît.',
      k=[('wasser', ['eau', 'de l\'eau']), ('heiss', ['chaude'])]),
 dict(de='Mit Eis, bitte.', fr='Avec des glaçons, s\'il vous plaît.',
      k=[('mit', ['avec']), ('eis', ['glaçons', 'glace'])]),
 dict(de='Ohne Eis, bitte.', fr='Sans glaçons, s\'il vous plaît.',
      k=[('ohne', ['sans']), ('eis', ['glaçons', 'glace'])]),
 dict(de='Ohne Zucker, bitte.', fr='Sans sucre, s\'il vous plaît.',
      k=[('ohne', ['sans']), ('zucker', ['sucre'])]),
 dict(de='Ein bisschen Zucker, bitte.', fr='Un peu de sucre, s\'il vous plaît.',
      k=[('ein_bisschen', ['un peu']), ('zucker', ['sucre'])]),
 dict(de='Noch eins, bitte.', fr='Encore un, s\'il vous plaît.',
      k=[('noch', ['encore un', 'encore'])]),
 dict(de='Zwei Flaschen, bitte.', fr='Deux bouteilles, s\'il vous plaît.',
      k=[('zwei', ['deux']), ('flasche', ['bouteilles', 'bouteille'])]),
 dict(de='Trinkst du Kaffee oder Tee?', fr='Tu bois du café ou du thé ?',
      k=[('kaffee', ['café']), ('tee', ['thé']), ('oder', ['ou'])]),

# ---------------------------------------------------------------- Platz
 dict(de='Haben Sie einen Tisch frei?', fr='Vous avez une table de libre ?',
      k=[('tisch', ['table']), ('frei', ['libre', 'de libre'])]),
 dict(de='Ich hätte gern einen Tisch für zwei Personen.',
      fr='Je voudrais une table pour deux.',
      k=[('tisch', ['table']), ('zwei', ['deux'])]),
 dict(de='Für wie viele Personen?', fr='Pour combien de personnes ?',
      k=[('wieviele', ['combien']), ('person', ['personnes'])]),
 dict(de='Zwei Personen.', fr='Deux personnes.',
      k=[('zwei', ['deux']), ('person', ['personnes'])]),
 dict(de='Können wir draußen sitzen?', fr='On peut s\'asseoir en terrasse ?',
      k=[('koennen', ['on peut', 'peut']),
         ('draussen', ['en terrasse', 'terrasse', 'dehors']),
         ('sitzen', ['s\'asseoir', 'asseoir'])]),
 dict(de='Ist dieser Tisch schon reserviert?', fr='Cette table est réservée ?',
      k=[('tisch', ['table', 'cette table']), ('reserviert', ['réservée'])]),
 dict(de='Ich möchte einen Tisch für morgen Abend reservieren.',
      fr='Je voudrais réserver une table pour demain soir.',
      k=[('reservieren', ['réserver']), ('morgen_abend', ['demain soir'])]),
 dict(de='Wir warten.', fr='On attend.',
      k=[('warten', ['on attend', 'attendre'])]),
 dict(de='Wie lange müssen wir warten?',
      fr='Il faut attendre combien de temps ?',
      k=[('wie_lange', ['combien de temps']), ('warten', ['attendre'])]),

# ---------------------------------------------------------------- Schärfe
 dict(de='Ist das scharf?', fr='C\'est épicé ?',
      k=[('scharf', ['épicé', 'pimenté'])]),
 dict(de='Das ist zu scharf!', fr='C\'est trop épicé !',
      k=[('zu', ['trop']), ('scharf', ['épicé', 'pimenté'])]),
 dict(de='Nicht scharf, bitte.', fr='Pas épicé, s\'il vous plaît.',
      k=[('nicht', ['pas', 'sans']), ('scharf', ['épicé', 'pimenté'])]),
 dict(de='Ein bisschen scharf ist okay.', fr='Un peu épicé, ça va.',
      k=[('ein_bisschen', ['un peu']), ('scharf', ['épicé', 'pimenté'])]),
 dict(de='Ich kann nicht scharf essen.', fr='Je ne supporte pas le piment.',
      k=[('nicht_koennen', ['je ne supporte pas', 'supporte pas']),
         ('scharf', ['piment', 'épicé'])]),
 dict(de='Kannst du scharf essen?', fr='Tu supportes le piment ?',
      k=[('koennen', ['tu supportes', 'supportes']),
         ('scharf', ['piment', 'épicé'])]),
 dict(de='Haben Sie etwas ohne Chili?',
      fr='Vous avez quelque chose sans piment ?',
      k=[('ohne', ['sans']), ('chili', ['piment'])]),
 dict(de='Wasser, schnell!', fr='De l\'eau, vite !',
      k=[('wasser', ['eau', 'de l\'eau']), ('schnell', ['vite'])]),

# ---------------------------------------------------------------- Straßenessen
 dict(de='Was ist das?', fr='Qu\'est-ce que c\'est ?',
      k=[('was', ['qu\'est-ce que c\'est', 'qu\'est-ce'])]),
 dict(de='Ich nehme das.', fr='Je prends ça.',
      k=[('nehmen', ['je prends', 'prends'])]),
 dict(de='Eine Portion, bitte.', fr='Une portion, s\'il vous plaît.',
      k=[('portion', ['portion', 'une portion'])]),
 dict(de='Zwei Portionen, bitte.', fr='Deux portions, s\'il vous plaît.',
      k=[('zwei', ['deux']), ('portion', ['portions', 'portion'])]),
 dict(de='Zwei davon, bitte.', fr='Deux de ceux-là, s\'il vous plaît.',
      k=[('zwei', ['deux']), ('davon', ['de ceux-là', 'ceux-là'])]),
 dict(de='Wie viel kostet eine Portion?', fr='Combien coûte une portion ?',
      k=[('kosten', ['combien coûte', 'coûte']), ('portion', ['portion'])]),
 dict(de='Zum Mitnehmen, bitte.', fr='À emporter, s\'il vous plaît.',
      k=[('mitnehmen', ['à emporter', 'emporter'])]),
 dict(de='Ich esse hier.', fr='Je mange sur place.',
      k=[('essen', ['je mange', 'mange']), ('hier', ['sur place', 'place'])],
      h='„Sur place ou à emporter ?" — hier essen oder mitnehmen — ist die '
        'Standardfrage an jedem französischen Tresen. Beide Antworten lohnt '
        'es sich zu können.'),
 dict(de='Ist das frisch?', fr='C\'est frais ?',
      k=[('frisch', ['frais', 'fraîche'])]),
 dict(de='Das ist sehr frisch.', fr='C\'est très frais.',
      k=[('frisch', ['frais', 'fraîche']), ('sehr', ['très'])]),
 dict(de='Was essen die anderen?', fr='Qu\'est-ce que les autres mangent ?',
      k=[('andere', ['les autres', 'autres']), ('essen', ['mangent', 'manger'])]),
 dict(de='Das Gleiche, bitte.', fr='La même chose, s\'il vous plaît.',
      k=[('gleiche', ['la même chose', 'même chose'])]),
 dict(de='Ich möchte das Gleiche.', fr='Je voudrais la même chose.',
      k=[('moechten', ['je voudrais', 'voudrais']),
         ('gleiche', ['la même chose', 'même chose'])]),

# ---------------------------------------------------------------- Teilen
 dict(de='Wir essen zusammen.', fr='On mange ensemble.',
      k=[('essen', ['on mange', 'manger']), ('zusammen', ['ensemble'])]),
 dict(de='Alle zusammen!', fr='Tous ensemble !',
      k=[('alle', ['tous']), ('zusammen', ['ensemble'])]),
 dict(de='Das ist für alle.', fr='C\'est pour tout le monde.',
      k=[('fuer_alle', ['pour tout le monde', 'tout le monde'])]),
 dict(de='Nimm doch!', fr='Sers-toi !',
      k=[('nehmen', ['sers-toi', 'prends'])]),
 dict(de='Iss mehr!', fr='Mange encore !',
      k=[('essen', ['mange', 'manger']), ('mehr', ['encore', 'plus'])]),
 dict(de='Ich bin satt.', fr='J\'ai assez mangé.',
      k=[('satt', ['j\'ai assez mangé', 'assez mangé', 'je n\'ai plus faim'])],
      h='NICHT „je suis plein" — das heißt je nach Gegend betrunken oder '
        'schwanger. Richtig ist „j\'ai assez mangé" oder „je n\'ai plus faim".'),
 dict(de='Bist du satt?', fr='Tu as assez mangé ?',
      k=[('satt', ['assez mangé', 'tu as assez mangé'])]),
 dict(de='Sollen wir noch etwas bestellen?',
      fr='On commande encore quelque chose ?',
      k=[('bestellen', ['on commande', 'commander']),
         ('noch_etwas', ['encore quelque chose', 'encore'])]),
 dict(de='Noch eine Schüssel, bitte.', fr='Encore un bol, s\'il vous plaît.',
      k=[('noch', ['encore']), ('schuessel', ['bol', 'un bol'])]),
 dict(de='Noch eine Schüssel Reis, bitte.',
      fr='Encore un bol de riz, s\'il vous plaît.',
      k=[('noch', ['encore']), ('reis', ['riz'])]),
 dict(de='Ich lade dich ein.', fr='C\'est moi qui invite.',
      k=[('einladen', ['c\'est moi qui invite', 'j\'invite', 'invite'])]),
 dict(de='Heute lade ich ein.', fr='Aujourd\'hui, c\'est moi qui invite.',
      k=[('heute', ['aujourd\'hui']),
         ('einladen', ['c\'est moi qui invite', 'j\'invite', 'invite'])]),
 dict(de='Danke fürs Einladen!', fr='Merci pour l\'invitation !',
      k=[('danke', ['merci']), ('einladen', ['l\'invitation', 'invitation'])]),
 dict(de='Die anderen essen schon.', fr='Les autres mangent déjà.',
      k=[('andere', ['les autres', 'autres']), ('essen', ['mangent', 'manger'])]),

# ---------------------------------------------------------------- Unverträglich
 dict(de='Ich bin Vegetarier.', fr='Je suis végétarien.',
      k=[('vegetarier', ['végétarien', 'végétarienne'])]),
 dict(de='Ich habe eine Allergie gegen Nüsse.',
      fr='Je suis allergique aux fruits à coque.',
      k=[('allergie', ['allergique', 'allergie']),
         ('nuesse', ['fruits à coque', 'noix'])],
      h='„Fruits à coque" ist der Begriff, der auf französischen Zutatenlisten '
        'steht und alle Baumnüsse meint. „Noix" allein heißt genau Walnuss — '
        'bei einer Allergie ist das der Unterschied, auf den es ankommt.'),
]

AUSGELASSEN = []
