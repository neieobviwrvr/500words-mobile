# -*- coding: utf-8 -*-
"""Essen und Trinken auf Polnisch - 92 Saetze (drinking_dining).

**Nichts ausgelassen.**

Die Kategorie stammt aus dem chinesischen Ausbau. Uebersetzt ist
vollstaendig und woertlich; wo die PRAXIS abweicht, steht ein Hinweis am
Satz.

Was in Polen anders laeuft:

  Bestellen      `Poproszę` ist die Allzweckformel - poproszę kawę,
                 poproszę rachunek. Ein "ich haette gern" braucht es
                 nicht.
  Trinkgeld      Rund 10%, und ACHTUNG: sagt man beim Bezahlen
                 "dziękuję", heisst das oft "stimmt so" - der Kellner
                 behaelt den Rest. Wer Wechselgeld will, sagt nichts
                 oder nennt den Betrag.
  Leitungswasser Wird selten getrunken und noch seltener angeboten;
                 bestellt wird Flaschenwasser, `gazowana` (mit) oder
                 `niegazowana` (ohne).
  Milchbar       `bar mleczny` ist die guenstige Kantinen-Tradition aus
                 sozialistischer Zeit - fuer Backpacker die
                 preiswerteste warme Mahlzeit im Land.

**Nicht von Muttersprachlern geprueft.**
"""

KATEGORIEN = ['drinking_dining']

SAETZE = [

# ---------------------------------------------------------- essen_bestellen
 dict(de='Die Speisekarte, bitte.', pl='Poproszę menu.',
      k=[('speisekarte', ['menu', 'kartę'])]),
 dict(de='Was empfehlen Sie?', pl='Co pan poleca?',
      k=[('empfehlung', ['co pan poleca', 'poleca', 'polecacie'])]),
 dict(de='Ich hätte gern ein Wasser, bitte.', pl='Poproszę wodę.',
      k=[('wasser', ['wodę', 'woda'])],
      h='Es folgt fast immer die Rückfrage „gazowana czy niegazowana?" — mit '
        'oder ohne Kohlensäure. Leitungswasser wird selten angeboten.'),
 dict(de='Was möchten Sie trinken?', pl='Czego się pan napije?',
      k=[('trinken_frage', ['czego się napije', 'do picia', 'napije'])]),
 dict(de='Ich möchte etwas bestellen.', pl='Chciałbym coś zamówić.',
      k=[('bestellen', ['zamówić', 'zamawiam'])]),
 dict(de='Einen Moment, bitte.', pl='Chwileczkę.',
      k=[('moment', ['chwileczkę', 'chwilę', 'moment'])]),
 dict(de='Das ist alles, danke.', pl='To wszystko, dziękuję.',
      k=[('alles', ['to wszystko', 'wszystko'])]),
 dict(de='Was ist in diesem Gericht?', pl='Co jest w tym daniu?',
      k=[('was_drin', ['co jest w tym daniu', 'w tym daniu', 'danie'])]),
 dict(de='Haben Sie eine Karte mit Bildern?', pl='Czy jest menu ze zdjęciami?',
      k=[('bilder', ['ze zdjęciami', 'zdjęciami', 'zdjęcia'])]),
 dict(de='Ich möchte etwas Warmes.', pl='Chciałbym coś ciepłego.',
      k=[('warm', ['coś ciepłego', 'ciepłego'])]),
 dict(de='Zeigen Sie mir das mal.', pl='Proszę mi to pokazać.',
      k=[('zeigen', ['pokazać', 'proszę pokazać'])]),
 dict(de='Diese hier, bitte.', pl='Poproszę to.',
      k=[('diese', ['poproszę to', 'to'])]),
 dict(de='Wie lange dauert es?', pl='Jak długo to potrwa?',
      k=[('wie_lange', ['jak długo', 'potrwa'])]),
 dict(de='Gibt es davon ein Bild?', pl='Czy jest zdjęcie tego dania?',
      k=[('bild', ['zdjęcie'])]),
 dict(de='Was gibt es gutes zu Essen?', pl='Co tu jest dobrego do jedzenia?',
      k=[('gutes_essen', ['co dobrego', 'dobrego', 'do jedzenia'])]),

# ----------------------------------------------------------- essen_bezahlen
 dict(de='Können wir bitte zahlen?', pl='Poprosimy rachunek.',
      k=[('zahlen', ['rachunek', 'zapłacić'])]),
 dict(de='Ist das im Preis inbegriffen?', pl='Czy to jest wliczone w cenę?',
      k=[('im_preis', ['wliczone w cenę', 'wliczone'])]),
 dict(de='Das habe ich nicht bestellt.', pl='Tego nie zamawiałem.',
      k=[('nicht_bestellt', ['nie zamawiałem', 'nie zamawiałam'])]),
 dict(de='Können Sie mir die Rechnung getrennt bringen?', pl='Czy możemy zapłacić osobno?',
      k=[('rechnung_getrennt', ['zapłacić osobno', 'osobno'])],
      h='Getrennt zahlen ist in Polen üblich und kein Problem — anders als in '
        'Italien.'),
 dict(de='Zusammen, bitte.', pl='Razem, proszę.',
      k=[('zusammen', ['razem'])]),
 dict(de='Kann ich mit dem Handy bezahlen?', pl='Czy mogę zapłacić telefonem?',
      k=[('handy', ['telefonem', 'blikiem', 'telefon']),
         ('bezahlen', ['zapłacić'])]),
 dict(de='Stimmt so.', pl='Reszty nie trzeba.',
      k=[('stimmt_so', ['reszty nie trzeba', 'bez reszty', 'dziękuję'])],
      h='ACHTUNG: sagt man beim Übergeben des Geldes „dziękuję", versteht der '
        'Kellner das als „stimmt so" und behält den Rest. Wer Wechselgeld '
        'will, sagt besser nichts oder nennt den Betrag.'),
 dict(de='Wie viel macht das?', pl='Ile płacę?',
      k=[('wieviel', ['ile płacę', 'ile'])]),
 dict(de='Können wir das einpacken?', pl='Czy można to zapakować na wynos?',
      k=[('einpacken', ['zapakować', 'na wynos'])]),

# ---------------------------------------------------------- essen_geschmack
 dict(de='Guten Appetit!', pl='Smacznego!',
      k=[('guten_appetit', ['smacznego'])],
      h='„Smacznego" sagt man in Polen wirklich bei jeder Mahlzeit — auch zu '
        'Fremden am Nachbartisch.'),
 dict(de='Das Essen schmeckt sehr gut.', pl='Jedzenie jest bardzo dobre.',
      k=[('schmeckt_gut', ['bardzo dobre', 'dobre', 'smaczne'])]),
 dict(de='Gestern habe ich in einem Restaurant gegessen.', pl='Wczoraj jadłem w restauracji.',
      k=[('restaurant', ['restauracji', 'restauracja'])]),
 dict(de='Das war sehr lecker.', pl='To było bardzo smaczne.',
      k=[('war_lecker', ['bardzo smaczne', 'smaczne', 'pyszne'])]),
 dict(de='Das mag ich sehr.', pl='Bardzo mi to smakuje.',
      k=[('moegen', ['bardzo mi smakuje', 'smakuje', 'lubię'])]),
 dict(de='Das mag ich nicht.', pl='Tego nie lubię.',
      k=[('nicht_moegen', ['nie lubię', 'nie smakuje'])]),
 dict(de='Was ist das für ein Fleisch?', pl='Jakie to mięso?',
      k=[('fleisch', ['mięso'])]),
 dict(de='Das ist mir zu salzig.', pl='To jest dla mnie za słone.',
      k=[('salzig', ['za słone', 'słone'])]),
 dict(de='Nicht zu salzig, bitte.', pl='Nie za słone, proszę.',
      k=[('salzig', ['nie za słone', 'słone'])]),
 dict(de='Dieses Restaurant ist sehr gut.', pl='Ta restauracja jest bardzo dobra.',
      k=[('restaurant_gut', ['restauracja', 'bardzo dobra'])]),

# ---------------------------------------------------------- essen_getraenke
 dict(de='Was haben Sie zu trinken?', pl='Co macie do picia?',
      k=[('trinken', ['do picia', 'picia'])]),
 dict(de='Kaltes Wasser, bitte.', pl='Poproszę zimną wodę.',
      k=[('kalt', ['zimną', 'zimna']),
         ('wasser', ['wodę', 'woda'])]),
 dict(de='Heißes Wasser, bitte.', pl='Poproszę gorącą wodę.',
      k=[('heiss', ['gorącą', 'gorąca']),
         ('wasser', ['wodę', 'woda'])]),
 dict(de='Ohne Eis, bitte.', pl='Bez lodu, proszę.',
      k=[('ohne_eis', ['bez lodu', 'lodu'])]),
 dict(de='Ein Bier, bitte.', pl='Poproszę piwo.',
      k=[('bier', ['piwo'])],
      h='Bier ist in Polen billig und allgegenwärtig — „małe" (0,3) oder '
        '„duże" (0,5) wird gefragt. Trinken auf der Straße ist verboten und '
        'wird auch geahndet.'),
 dict(de='Einen Tee, bitte.', pl='Poproszę herbatę.',
      k=[('tee', ['herbatę', 'herbata'])],
      h='Tee kommt in Polen oft mit Zitrone statt Milch — „herbata z '
        'cytryną" ist der Klassiker.'),
 dict(de='Ohne Zucker, bitte.', pl='Bez cukru, proszę.',
      k=[('ohne_zucker', ['bez cukru', 'cukru'])]),
 dict(de='Noch eins, bitte.', pl='Jeszcze jedno, proszę.',
      k=[('noch_eins', ['jeszcze jedno', 'jeszcze'])]),
 dict(de='Zwei Flaschen, bitte.', pl='Poproszę dwie butelki.',
      k=[('zwei', ['dwie', 'dwa']),
         ('flaschen', ['butelki', 'butelka'])]),
 dict(de='Mit Eis, bitte.', pl='Z lodem, proszę.',
      k=[('eis', ['z lodem', 'lodem', 'lód'])]),
 dict(de='Ein bisschen Zucker, bitte.', pl='Trochę cukru, proszę.',
      k=[('zucker', ['cukru', 'cukier']),
         ('bisschen', ['trochę'])]),
 dict(de='Trinkst du Kaffee oder Tee?', pl='Pijesz kawę czy herbatę?',
      k=[('kaffee_tee', ['kawę', 'herbatę'])]),

# -------------------------------------------------------------- essen_platz
 dict(de='Ich hätte gern einen Tisch für zwei Personen.', pl='Poproszę stolik dla dwóch osób.',
      k=[('tisch', ['stolik', 'stół']),
         ('anzahl_zwei', ['dla dwóch osób', 'dwie osoby', 'dwóch'])]),
 dict(de='Haben Sie einen Tisch frei?', pl='Czy jest wolny stolik?',
      k=[('tisch_frei', ['wolny stolik', 'stolik'])]),
 dict(de='Ich möchte einen Tisch für morgen Abend reservieren.', pl='Chciałbym zarezerwować stolik na jutro wieczorem.',
      k=[('reservieren', ['zarezerwować', 'rezerwacja']),
         ('morgen_abend', ['jutro wieczorem', 'jutro'])]),
 dict(de='Ist dieser Tisch schon reserviert?', pl='Czy ten stolik jest zarezerwowany?',
      k=[('schon_reserviert', ['zarezerwowany', 'zajęty'])]),
 dict(de='Für wie viele Personen?', pl='Dla ilu osób?',
      k=[('wie_viele', ['dla ilu osób', 'ilu osób'])]),
 dict(de='Können wir draußen sitzen?', pl='Czy możemy usiąść na zewnątrz?',
      k=[('draussen', ['na zewnątrz', 'ogródek'])]),
 dict(de='Wir warten.', pl='Poczekamy.',
      k=[('warten', ['poczekamy', 'czekamy'])]),
 dict(de='Wie lange müssen wir warten?', pl='Jak długo musimy czekać?',
      k=[('wie_lange', ['jak długo']),
         ('warten', ['czekać', 'musimy czekać'])]),
 dict(de='Zwei Personen.', pl='Dwie osoby.',
      k=[('zwei', ['dwie', 'dwa']),
         ('personen', ['osoby', 'osób'])]),

# ----------------------------------------------------------- essen_schaerfe
 dict(de='Ist das scharf?', pl='Czy to jest ostre?',
      k=[('scharf', ['ostre', 'ostry'])]),
 dict(de='Nicht scharf, bitte.', pl='Nie ostre, proszę.',
      k=[('nicht_scharf', ['nie ostre', 'ostre'])]),
 dict(de='Ein bisschen scharf ist okay.', pl='Trochę ostre może być.',
      k=[('bisschen', ['trochę'])]),
 dict(de='Ich kann nicht scharf essen.', pl='Nie mogę jeść ostrych rzeczy.',
      k=[('nicht_koennen', ['nie mogę jeść', 'nie mogę']),
         ('scharf', ['ostrych', 'ostre'])]),
 dict(de='Das ist zu scharf!', pl='To jest za ostre!',
      k=[('zu_scharf', ['za ostre', 'ostre'])]),
 dict(de='Haben Sie etwas ohne Chili?', pl='Czy jest coś bez ostrej papryki?',
      k=[('ohne_scharf', ['bez ostrej papryki', 'bez papryki', 'nie ostre'])],
      h='Die polnische Küche ist traditionell mild — diese Frage brauchst du '
        'eher im asiatischen Restaurant als beim Pierogi-Essen.'),
 dict(de='Wasser, schnell!', pl='Wody, szybko!',
      k=[('wasser', ['wody', 'woda'])]),
 dict(de='Kannst du scharf essen?', pl='Lubisz ostre jedzenie?',
      k=[('koennen', ['lubisz', 'możesz']),
         ('scharf', ['ostre jedzenie', 'ostre'])]),

# ------------------------------------------------------ essen_strassenessen
 dict(de='Was ist das?', pl='Co to jest?',
      k=[('was', ['co to jest', 'co to'])]),
 dict(de='Ich nehme das.', pl='Wezmę to.',
      k=[('nehmen', ['wezmę', 'biorę'])]),
 dict(de='Eine Portion, bitte.', pl='Poproszę jedną porcję.',
      k=[('portion', ['porcję', 'porcja'])]),
 dict(de='Zwei davon, bitte.', pl='Poproszę dwie sztuki.',
      k=[('zwei', ['dwie', 'dwa'])]),
 dict(de='Wie viel kostet eine Portion?', pl='Ile kosztuje jedna porcja?',
      k=[('wieviel', ['ile kosztuje', 'ile'])]),
 dict(de='Zum Mitnehmen, bitte.', pl='Na wynos, proszę.',
      k=[('mitnehmen', ['na wynos', 'wynos'])]),
 dict(de='Ich esse hier.', pl='Zjem tutaj.',
      k=[('hier', ['tutaj', 'na miejscu']),
         ('essen', ['zjem', 'jem'])],
      h='Die Frage im Laden lautet „na miejscu czy na wynos?" — hier essen '
        'oder mitnehmen.'),
 dict(de='Ist das frisch?', pl='Czy to jest świeże?',
      k=[('frisch', ['świeże', 'świeży'])]),
 dict(de='Was essen die anderen?', pl='Co jedzą inni?',
      k=[('andere', ['inni', 'pozostali'])]),
 dict(de='Das Gleiche, bitte.', pl='To samo, proszę.',
      k=[('gleiche', ['to samo', 'samo'])]),
 dict(de='Zwei Portionen, bitte.', pl='Poproszę dwie porcje.',
      k=[('zwei', ['dwie', 'dwa']),
         ('portionen', ['porcje', 'porcji'])]),
 dict(de='Das ist sehr frisch.', pl='To jest bardzo świeże.',
      k=[('frisch', ['bardzo świeże', 'świeże'])]),
 dict(de='Ich möchte das Gleiche.', pl='Chciałbym to samo.',
      k=[('gleiche', ['to samo', 'samo'])]),

# ------------------------------------------------------------- essen_teilen
 dict(de='Wir essen zusammen.', pl='Jemy razem.',
      k=[('zusammen', ['razem', 'jemy razem'])]),
 dict(de='Noch eine Schüssel Reis, bitte.', pl='Poproszę jeszcze porcję ryżu.',
      k=[('reis', ['ryżu', 'ryż']),
         ('noch', ['jeszcze'])]),
 dict(de='Iss mehr!', pl='Jedz więcej!',
      k=[('mehr_essen', ['jedz więcej', 'więcej'])],
      h='In Polen wird beim Essen nachgelegt, ob man will oder nicht — '
        'einmal abzulehnen gilt als Höflichkeit, nicht als Nein.'),
 dict(de='Ich bin satt.', pl='Jestem najedzony.',
      k=[('satt', ['najedzony', 'najedzona', 'syty'])]),
 dict(de='Nimm doch!', pl='Częstuj się!',
      k=[('nimm', ['częstuj się', 'bierz'])]),
 dict(de='Sollen wir noch etwas bestellen?', pl='Zamówimy jeszcze coś?',
      k=[('bestellen', ['zamówimy', 'zamówić']),
         ('noch', ['jeszcze coś', 'jeszcze'])]),
 dict(de='Ich lade dich ein.', pl='Ja stawiam.',
      k=[('einladen', ['ja stawiam', 'stawiam', 'ja płacę'])],
      h='„Ja stawiam" ist die feste Wendung fürs Einladen — wörtlich „ich '
        'stelle hin".'),
 dict(de='Danke fürs Einladen!', pl='Dzięki za poczęstunek!',
      k=[('danke', ['dzięki', 'dziękuję'])]),
 dict(de='Das ist für alle.', pl='To jest dla wszystkich.',
      k=[('alle', ['dla wszystkich', 'wszystkich'])]),
 dict(de='Bist du satt?', pl='Najadłeś się?',
      k=[('satt', ['najadłeś się', 'najedzony', 'syty'])]),
 dict(de='Noch eine Schüssel, bitte.', pl='Poproszę jeszcze jedną miskę.',
      k=[('schuessel', ['miskę', 'miska', 'porcję']),
         ('noch', ['jeszcze'])]),
 dict(de='Heute lade ich ein.', pl='Dzisiaj ja stawiam.',
      k=[('heute', ['dzisiaj', 'dziś']),
         ('einladen', ['ja stawiam', 'stawiam'])]),
 dict(de='Alle zusammen!', pl='Wszyscy razem!',
      k=[('alle', ['wszyscy']),
         ('zusammen', ['razem'])]),
 dict(de='Die anderen essen schon.', pl='Inni już jedzą.',
      k=[('andere', ['inni']),
         ('essen', ['jedzą'])]),

# ------------------------------------------------------ essen_unvertraeglich
 dict(de='Ich bin Vegetarier.', pl='Jestem wegetarianinem.',
      k=[('vegetarier', ['wegetarianinem', 'wegetarianką', 'wegetarianin'])],
      h='Als Frau: „wegetarianką". Fleischlos zu essen ist in Polen '
        'inzwischen leicht — in jeder größeren Stadt gibt es viele '
        'vegetarische Lokale.'),
 dict(de='Ich habe eine Allergie gegen Nüsse.', pl='Mam alergię na orzechy.',
      k=[('allergie', ['alergię', 'alergia']),
         ('nuesse', ['orzechy'])]),
]

AUSGELASSEN = []
