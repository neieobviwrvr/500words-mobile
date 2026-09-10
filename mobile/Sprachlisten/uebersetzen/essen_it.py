# -*- coding: utf-8 -*-
"""Essen und Trinken auf Italienisch - 92 Saetze (drinking_dining).

**Nichts ausgelassen.**

Die Kategorie stammt zu grossen Teilen aus dem chinesischen Ausbau und
traegt das an einigen Stellen sichtbar: Schuesseln Reis, Strassenessen,
Schaerfe-Verhandlung. Alle Saetze funktionieren trotzdem in Italien, sie
sind nur unterschiedlich haeufig - "Ist das scharf?" fragt man in China
staendig und in Italien selten. Uebersetzt sind sie deshalb vollstaendig
und woertlich; wo die PRAXIS deutlich abweicht, steht ein Hinweis am Satz
statt einer stillen Anpassung.

Das betrifft vor allem:

  Rechnung teilen        In Italien teilt man "alla romana" - die Summe
                         durch die Koepfe, nicht nach Bestellung. Getrennte
                         Rechnungen sind moeglich, aber unueblich und in
                         vollen Lokalen unbeliebt.
  Coperto                Auf fast jeder Rechnung steht ein Gedeckpreis pro
                         Person. Das ist kein Trick und kein Trinkgeld,
                         sondern ausgewiesen und normal.
  Heisses Wasser         In China Standardgetraenk, in Italien eine sehr
                         ungewoehnliche Bestellung.
  Cappuccino             gilt nach dem Essen als Verdauungsfehler - nach
                         11 Uhr trinkt man Espresso.

**Du oder Sie:** durchgehend `Lei` gegenueber dem Personal, `tu` in den
Saetzen unter Freunden am Tisch ("Iss mehr!", "Bist du satt?").

**Nicht von Muttersprachlern geprueft.**
"""

KATEGORIEN = ['drinking_dining']

SAETZE = [

# ---------------------------------------------------------- essen_bestellen
 dict(de='Die Speisekarte, bitte.', it='Il menù, per favore.',
      k=[('speisekarte', ['menù', 'menu', 'carta'])]),
 dict(de='Was empfehlen Sie?', it='Cosa mi consiglia?',
      k=[('empfehlung', ['cosa mi consiglia', 'consiglia', 'consiglio'])]),
 dict(de='Ich hätte gern ein Wasser, bitte.', it='Vorrei dell\'acqua, per favore.',
      k=[('wasser', ['acqua'])],
      h='Im Lokal wird gefragt: „naturale o frizzante?" — still oder mit '
        'Kohlensäure. Leitungswasser („acqua del rubinetto") gibt es, wird '
        'aber selten von selbst angeboten.'),
 dict(de='Was möchten Sie trinken?', it='Cosa desidera da bere?',
      k=[('trinken_frage', ['da bere', 'bere', 'cosa desidera'])]),
 dict(de='Ich möchte etwas bestellen.', it='Vorrei ordinare.',
      k=[('bestellen', ['ordinare'])]),
 dict(de='Einen Moment, bitte.', it='Un attimo, per favore.',
      k=[('moment', ['un attimo', 'un momento'])]),
 dict(de='Das ist alles, danke.', it='È tutto, grazie.',
      k=[('alles', ['è tutto', 'tutto'])]),
 dict(de='Was ist in diesem Gericht?', it='Cosa c\'è in questo piatto?',
      k=[('was_drin', ['cosa c\'è', 'in questo piatto', 'piatto'])]),
 dict(de='Haben Sie eine Karte mit Bildern?', it='Avete un menù con le foto?',
      k=[('bilder', ['con le foto', 'foto', 'immagini'])]),
 dict(de='Ich möchte etwas Warmes.', it='Vorrei qualcosa di caldo.',
      k=[('warm', ['qualcosa di caldo', 'caldo'])]),
 dict(de='Zeigen Sie mir das mal.', it='Me lo faccia vedere.',
      k=[('zeigen', ['me lo faccia vedere', 'faccia vedere', 'mostrare'])]),
 dict(de='Diese hier, bitte.', it='Questo qui, per favore.',
      k=[('diese', ['questo qui', 'questo'])]),
 dict(de='Wie lange dauert es?', it='Quanto tempo ci vuole?',
      k=[('wie_lange', ['quanto tempo', 'ci vuole'])]),
 dict(de='Gibt es davon ein Bild?', it='C\'è una foto di questo?',
      k=[('bild', ['foto', 'immagine'])]),
 dict(de='Was gibt es gutes zu Essen?', it='Cosa c\'è di buono da mangiare?',
      k=[('gutes_essen', ['di buono', 'da mangiare', 'buono'])]),

# ----------------------------------------------------------- essen_bezahlen
 dict(de='Können wir bitte zahlen?', it='Possiamo pagare, per favore?',
      k=[('zahlen', ['pagare', 'il conto'])],
      h='Die Rechnung kommt in Italien nie von selbst — man muss sie '
        'holen. Ein Handzeichen zum Kellner reicht.'),
 dict(de='Ist das im Preis inbegriffen?', it='È incluso nel prezzo?',
      k=[('im_preis', ['incluso nel prezzo', 'incluso', 'compreso'])],
      h='Auf fast jeder Rechnung steht ein „coperto" — ein Gedeckpreis pro '
        'Person, meist ein bis drei Euro. Er ist ausgewiesen und völlig '
        'normal, kein Trick und kein Trinkgeld.'),
 dict(de='Das habe ich nicht bestellt.', it='Questo non l\'ho ordinato.',
      k=[('nicht_bestellt', ['non l\'ho ordinato', 'non ho ordinato'])]),
 dict(de='Können Sie mir die Rechnung getrennt bringen?', it='Può farci conti separati?',
      k=[('rechnung_getrennt', ['conti separati', 'separati', 'separato'])],
      h='Üblich ist stattdessen „alla romana": die Summe wird durch die '
        'Köpfe geteilt, egal wer was hatte. Getrennte Rechnungen sind '
        'möglich, in vollen Lokalen aber unbeliebt.'),
 dict(de='Zusammen, bitte.', it='Tutto insieme, per favore.',
      k=[('zusammen', ['tutto insieme', 'insieme'])]),
 dict(de='Kann ich mit dem Handy bezahlen?', it='Posso pagare con il telefono?',
      k=[('handy', ['telefono', 'cellulare']),
         ('bezahlen', ['pagare'])]),
 dict(de='Stimmt so.', it='Tenga il resto.',
      k=[('stimmt_so', ['tenga il resto', 'il resto', 'va bene così'])],
      h='Trinkgeld ist in Italien kein Muss — der „coperto" deckt den '
        'Service ab. Aufrunden ist eine nette Geste, mehr nicht.'),
 dict(de='Wie viel macht das?', it='Quant\'è?',
      k=[('wieviel', ['quant\'è', 'quanto'])]),
 dict(de='Können wir das einpacken?', it='Possiamo portarlo via?',
      k=[('einpacken', ['portarlo via', 'da asporto', 'portare via'])]),

# ---------------------------------------------------------- essen_geschmack
 dict(de='Guten Appetit!', it='Buon appetito!',
      k=[('guten_appetit', ['buon appetito'])]),
 dict(de='Das Essen schmeckt sehr gut.', it='Il cibo è molto buono.',
      k=[('schmeckt_gut', ['molto buono', 'buonissimo', 'buono'])]),
 dict(de='Gestern habe ich in einem Restaurant gegessen.', it='Ieri ho mangiato al ristorante.',
      k=[('restaurant', ['ristorante'])]),
 dict(de='Das war sehr lecker.', it='Era buonissimo.',
      k=[('war_lecker', ['era buonissimo', 'buonissimo', 'squisito'])]),
 dict(de='Das mag ich sehr.', it='Mi piace molto.',
      k=[('moegen', ['mi piace molto', 'mi piace'])]),
 dict(de='Das mag ich nicht.', it='Non mi piace.',
      k=[('nicht_moegen', ['non mi piace'])]),
 dict(de='Was ist das für ein Fleisch?', it='Che carne è?',
      k=[('fleisch', ['carne'])]),
 dict(de='Das ist mir zu salzig.', it='È troppo salato per me.',
      k=[('salzig', ['troppo salato', 'salato'])]),
 dict(de='Nicht zu salzig, bitte.', it='Non troppo salato, per favore.',
      k=[('salzig', ['non troppo salato', 'salato'])]),
 dict(de='Dieses Restaurant ist sehr gut.', it='Questo ristorante è molto buono.',
      k=[('restaurant_gut', ['ristorante', 'molto buono'])]),

# ---------------------------------------------------------- essen_getraenke
 dict(de='Was haben Sie zu trinken?', it='Cosa avete da bere?',
      k=[('trinken', ['da bere', 'bere'])]),
 dict(de='Kaltes Wasser, bitte.', it='Acqua fredda, per favore.',
      k=[('kalt', ['fredda']),
         ('wasser', ['acqua'])]),
 dict(de='Heißes Wasser, bitte.', it='Acqua calda, per favore.',
      k=[('heiss', ['calda']),
         ('wasser', ['acqua'])],
      h='Heißes Wasser als Getränk ist in Italien höchst ungewöhnlich — in '
        'China ist es der Normalfall. Erwarte Nachfragen.'),
 dict(de='Ohne Eis, bitte.', it='Senza ghiaccio, per favore.',
      k=[('ohne_eis', ['senza ghiaccio', 'ghiaccio'])]),
 dict(de='Ein Bier, bitte.', it='Una birra, per favore.',
      k=[('bier', ['birra'])]),
 dict(de='Einen Tee, bitte.', it='Un tè, per favore.',
      k=[('tee', ['tè', 'te'])]),
 dict(de='Ohne Zucker, bitte.', it='Senza zucchero, per favore.',
      k=[('ohne_zucker', ['senza zucchero', 'zucchero'])]),
 dict(de='Noch eins, bitte.', it='Un altro, per favore.',
      k=[('noch_eins', ['un altro', 'ancora uno'])]),
 dict(de='Zwei Flaschen, bitte.', it='Due bottiglie, per favore.',
      k=[('zwei', ['due']),
         ('flaschen', ['bottiglie'])]),
 dict(de='Mit Eis, bitte.', it='Con ghiaccio, per favore.',
      k=[('eis', ['ghiaccio'])]),
 dict(de='Ein bisschen Zucker, bitte.', it='Un po\' di zucchero, per favore.',
      k=[('zucker', ['zucchero']),
         ('bisschen', ['un po\'', 'poco'])]),
 dict(de='Trinkst du Kaffee oder Tee?', it='Bevi caffè o tè?',
      k=[('kaffee_tee', ['caffè', 'tè'])],
      h='„Un caffè" ist immer ein Espresso. Cappuccino gilt nach dem Essen '
        'als Verdauungsfehler — nach etwa 11 Uhr bestellt man ihn nicht '
        'mehr.'),

# -------------------------------------------------------------- essen_platz
 dict(de='Ich hätte gern einen Tisch für zwei Personen.', it='Vorrei un tavolo per due.',
      k=[('tisch', ['tavolo']),
         ('anzahl_zwei', ['per due', 'due'])]),
 dict(de='Haben Sie einen Tisch frei?', it='Avete un tavolo libero?',
      k=[('tisch_frei', ['tavolo libero', 'libero', 'tavolo'])]),
 dict(de='Ich möchte einen Tisch für morgen Abend reservieren.', it='Vorrei prenotare un tavolo per domani sera.',
      k=[('reservieren', ['prenotare', 'prenotazione']),
         ('morgen_abend', ['domani sera'])]),
 dict(de='Ist dieser Tisch schon reserviert?', it='Questo tavolo è già prenotato?',
      k=[('schon_reserviert', ['già prenotato', 'prenotato'])]),
 dict(de='Für wie viele Personen?', it='Per quante persone?',
      k=[('wie_viele', ['quante persone', 'quante'])]),
 dict(de='Können wir draußen sitzen?', it='Possiamo sederci fuori?',
      k=[('draussen', ['fuori', 'sederci fuori'])]),
 dict(de='Wir warten.', it='Aspettiamo.',
      k=[('warten', ['aspettiamo', 'aspettare'])]),
 dict(de='Wie lange müssen wir warten?', it='Quanto dobbiamo aspettare?',
      k=[('wie_lange', ['quanto']),
         ('warten', ['aspettare', 'dobbiamo aspettare'])]),
 dict(de='Zwei Personen.', it='Due persone.',
      k=[('zwei', ['due']),
         ('personen', ['persone'])]),

# ----------------------------------------------------------- essen_schaerfe
 dict(de='Ist das scharf?', it='È piccante?',
      k=[('scharf', ['piccante'])]),
 dict(de='Nicht scharf, bitte.', it='Non piccante, per favore.',
      k=[('nicht_scharf', ['non piccante', 'piccante'])]),
 dict(de='Ein bisschen scharf ist okay.', it='Un po\' piccante va bene.',
      k=[('bisschen', ['un po\'', 'poco'])]),
 dict(de='Ich kann nicht scharf essen.', it='Non riesco a mangiare piccante.',
      k=[('nicht_koennen', ['non riesco', 'non posso']),
         ('scharf', ['piccante'])]),
 dict(de='Das ist zu scharf!', it='È troppo piccante!',
      k=[('zu_scharf', ['troppo piccante', 'piccante'])]),
 dict(de='Haben Sie etwas ohne Chili?', it='Avete qualcosa senza peperoncino?',
      k=[('ohne_scharf', ['senza peperoncino', 'peperoncino', 'senza piccante'])],
      h='Scharf ist in Italien die Ausnahme — nur der Süden, vor allem '
        'Kalabrien, arbeitet stark mit „peperoncino". Nördlich davon musst '
        'du eher danach fragen als davor warnen.'),
 dict(de='Wasser, schnell!', it='Acqua, presto!',
      k=[('wasser', ['acqua'])]),
 dict(de='Kannst du scharf essen?', it='Riesci a mangiare piccante?',
      k=[('koennen', ['riesci', 'puoi']),
         ('scharf', ['piccante'])]),

# ------------------------------------------------------ essen_strassenessen
 dict(de='Was ist das?', it='Cos\'è questo?',
      k=[('was', ['cos\'è', 'che cos\'è'])]),
 dict(de='Ich nehme das.', it='Prendo questo.',
      k=[('nehmen', ['prendo', 'prendere'])]),
 dict(de='Eine Portion, bitte.', it='Una porzione, per favore.',
      k=[('portion', ['porzione'])]),
 dict(de='Zwei davon, bitte.', it='Due di questi, per favore.',
      k=[('zwei', ['due'])]),
 dict(de='Wie viel kostet eine Portion?', it='Quanto costa una porzione?',
      k=[('wieviel', ['quanto costa', 'quanto'])]),
 dict(de='Zum Mitnehmen, bitte.', it='Da portare via, per favore.',
      k=[('mitnehmen', ['da portare via', 'da asporto', 'portare via'])]),
 dict(de='Ich esse hier.', it='Mangio qui.',
      k=[('hier', ['qui']),
         ('essen', ['mangio', 'mangiare'])],
      h='An der Theke („al banco") ist der Espresso billiger als am Tisch '
        '(„al tavolo") — der Aufschlag fürs Sitzen ist normal und steht '
        'meist ausgeschrieben.'),
 dict(de='Ist das frisch?', it='È fresco?',
      k=[('frisch', ['fresco'])]),
 dict(de='Was essen die anderen?', it='Cosa mangiano gli altri?',
      k=[('andere', ['gli altri', 'altri'])]),
 dict(de='Das Gleiche, bitte.', it='Lo stesso, per favore.',
      k=[('gleiche', ['lo stesso', 'stesso'])]),
 dict(de='Zwei Portionen, bitte.', it='Due porzioni, per favore.',
      k=[('zwei', ['due']),
         ('portionen', ['porzioni'])]),
 dict(de='Das ist sehr frisch.', it='È molto fresco.',
      k=[('frisch', ['fresco', 'molto fresco'])]),
 dict(de='Ich möchte das Gleiche.', it='Vorrei lo stesso.',
      k=[('gleiche', ['lo stesso', 'stesso'])]),

# ------------------------------------------------------------- essen_teilen
 dict(de='Wir essen zusammen.', it='Mangiamo insieme.',
      k=[('zusammen', ['insieme', 'mangiamo insieme'])]),
 dict(de='Noch eine Schüssel Reis, bitte.', it='Ancora una porzione di riso, per favore.',
      k=[('reis', ['riso']),
         ('noch', ['ancora', 'un\'altra'])]),
 dict(de='Iss mehr!', it='Mangia ancora!',
      k=[('mehr_essen', ['mangia ancora', 'mangia', 'ancora'])]),
 dict(de='Ich bin satt.', it='Sono sazio.',
      k=[('satt', ['sazio', 'sazia', 'pieno'])]),
 dict(de='Nimm doch!', it='Serviti!',
      k=[('nimm', ['serviti', 'prendi'])]),
 dict(de='Sollen wir noch etwas bestellen?', it='Ordiniamo ancora qualcosa?',
      k=[('bestellen', ['ordiniamo', 'ordinare']),
         ('noch', ['ancora', 'qualcos\'altro'])]),
 dict(de='Ich lade dich ein.', it='Offro io.',
      k=[('einladen', ['offro io', 'offro', 'ti invito'])],
      h='„Offro io" (ich gebe aus) ist die Standardformel. In Italien wird '
        'darum durchaus gerungen — einmal höflich ablehnen gehört dazu, '
        'bevor man annimmt.'),
 dict(de='Danke fürs Einladen!', it='Grazie per l\'invito!',
      k=[('danke', ['grazie', 'grazie per l\'invito'])]),
 dict(de='Das ist für alle.', it='Questo è per tutti.',
      k=[('alle', ['per tutti', 'tutti'])]),
 dict(de='Bist du satt?', it='Sei sazio?',
      k=[('satt', ['sazio', 'sazia', 'pieno'])]),
 dict(de='Noch eine Schüssel, bitte.', it='Un\'altra porzione, per favore.',
      k=[('schuessel', ['porzione', 'ciotola']),
         ('noch', ['un\'altra', 'ancora'])]),
 dict(de='Heute lade ich ein.', it='Oggi offro io.',
      k=[('heute', ['oggi']),
         ('einladen', ['offro io', 'offro'])]),
 dict(de='Alle zusammen!', it='Tutti insieme!',
      k=[('alle', ['tutti']),
         ('zusammen', ['insieme'])]),
 dict(de='Die anderen essen schon.', it='Gli altri stanno già mangiando.',
      k=[('andere', ['gli altri', 'altri']),
         ('essen', ['mangiando', 'mangiano'])]),

# ------------------------------------------------------ essen_unvertraeglich
 dict(de='Ich bin Vegetarier.', it='Sono vegetariano.',
      k=[('vegetarier', ['vegetariano', 'vegetariana'])]),
 dict(de='Ich habe eine Allergie gegen Nüsse.', it='Sono allergico alla frutta secca.',
      k=[('allergie', ['allergico', 'allergica', 'allergia']),
         ('nuesse', ['frutta secca', 'noci'])],
      h='„Frutta secca" ist der Sammelbegriff für Nüsse und Trockenobst — '
        'er steht auf Speisekarten als Allergenhinweis. „Noci" allein wären '
        'nur Walnüsse.'),
]

AUSGELASSEN = []
