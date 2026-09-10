# -*- coding: utf-8 -*-
"""drinking_dining auf Schwedisch: die 73 noch fehlenden Saetze.

**Kein Ausschluss** - wie bei Spanisch und Franzoesisch traegt Essen sich
vollstaendig herueber.

**Fuenf eigene Kulturhinweise.** Zwei davon sind echte Fehlerquellen, bei
denen ein woertlich uebersetzter Satz etwas anderes sagt als gemeint:

  Ich bin satt.   NICHT "jag är full" - "full" heisst auf Schwedisch
                  BETRUNKEN. Richtig ist "jag är mätt". Genau dieselbe Falle
                  wie das franzoesische "je suis plein" (siehe
                  drinking_dining_fr.py), nur mit anderer Peinlichkeit.
  stark           Scharfes Essen heisst auf Schwedisch "starkt", nicht mit
                  einem eigenen Wort fuer scharf. "Stark mat" ist scharfes
                  Essen, nicht kraeftiges.

Die drei uebrigen: kostenloses "kranvatten" (in Schweden immer
selbstverstaendlich), Swish als das Bezahlmittel des Landes, und dass
Trinkgeld nicht erwartet wird.

**Zaehlwoerter beachtet:** "te" und "ögonblick" sind ett-Woerter (ett te,
ett ögonblick), "öl" und "portion" en-Woerter. Wer das vertauscht, wird
verstanden, klingt aber sofort nach Anfaenger.

**`verb_cluster` bleibt leer.** `answer_clusters` enthaelt 25 sv_-Cluster,
die auf 39 der bestehenden Saetze verweisen; welche davon hier passen, ist
ein eigener Arbeitsschritt - genau wie beim Uebertragen von club_nightlife
(siehe club_nightlife/schwedisch.py).

**Nicht von Muttersprachlern geprueft.**
"""

SAETZE = [

# ---------------------------------------------------------------- Bestellen
 dict(de='Einen Moment, bitte.', sv='Ett ögonblick, tack.',
      k=[('moment', ['ett ögonblick', 'ögonblick'])]),
 dict(de='Das ist alles, danke.', sv='Det var allt, tack.',
      k=[('alles', ['det var allt', 'allt']), ('danke', ['tack'])]),
 dict(de='Was ist in diesem Gericht?', sv='Vad är det i den här rätten?',
      k=[('was', ['vad']), ('gericht', ['rätten', 'rätt'])]),
 dict(de='Haben Sie eine Karte mit Bildern?', sv='Har ni en meny med bilder?',
      k=[('karte', ['meny']), ('bilder', ['bilder', 'bild'])]),
 dict(de='Ich möchte etwas Warmes.', sv='Jag vill ha något varmt.',
      k=[('moechten', ['vill ha', 'jag vill']), ('warm', ['varmt', 'varm'])]),
 dict(de='Zeigen Sie mir das mal.', sv='Kan du visa mig det?',
      k=[('zeigen', ['visa', 'visa mig'])]),
 dict(de='Diese hier, bitte.', sv='Den här, tack.',
      k=[('dieses', ['den här', 'det här'])]),
 dict(de='Wie lange dauert es?', sv='Hur lång tid tar det?',
      k=[('wie_lange', ['hur lång tid', 'hur länge']), ('dauern', ['tar det', 'tar'])]),
 dict(de='Gibt es davon ein Bild?', sv='Finns det en bild på det?',
      k=[('bild', ['bild', 'en bild'])]),
 dict(de='Was gibt es gutes zu Essen?', sv='Vad är gott här?',
      k=[('was_gutes', ['vad är gott', 'gott']), ('hier', ['här'])]),

# ---------------------------------------------------------------- Bezahlen
 dict(de='Zusammen, bitte.', sv='Allt tillsammans, tack.',
      k=[('zusammen', ['tillsammans', 'allt tillsammans'])]),
 dict(de='Wie viel macht das?', sv='Hur mycket blir det?',
      k=[('wieviel', ['hur mycket', 'blir det'])]),
 dict(de='Stimmt so.', sv='Behåll växeln.',
      k=[('stimmt_so', ['behåll växeln', 'växeln', 'det är bra'])],
      h='Trinkgeld wird in Schweden nicht erwartet — der Service ist im Preis. '
        'Man rundet höchstens auf, und auch das nur im Restaurant, nie im Café.'),
 dict(de='Können wir das einpacken?', sv='Kan vi ta med det här?',
      k=[('einpacken', ['ta med', 'ta med det'])]),
 dict(de='Kann ich mit dem Handy bezahlen?', sv='Kan jag betala med mobilen?',
      k=[('koennen', ['kan jag', 'kan']), ('handy', ['mobilen', 'mobil']),
         ('bezahlen', ['betala'])],
      h='Schweden ist fast bargeldlos. Bezahlt wird mit Karte oder mit „Swish" '
        '— einer App, die praktisch jeder hat. Nach Bargeld zu fragen bringt '
        'einen oft in Verlegenheit, nicht umgekehrt.'),

# ---------------------------------------------------------------- Geschmack
 dict(de='Das mag ich sehr.', sv='Det tycker jag mycket om.',
      # 'tycker om' ist im Satz durch 'mycket' getrennt (tycker jag MYCKET om),
      # ein zusammenhaengendes Synonym trifft also nicht. 'tycker' allein
      # traegt es (2026-08-29, von pruefe_konzepte.py gefunden).
      k=[('moegen', ['tycker', 'tycker om']), ('sehr', ['mycket'])]),
 dict(de='Das mag ich nicht.', sv='Det tycker jag inte om.',
      k=[('nicht_moegen', ['tycker inte om', 'inte om'])]),
 dict(de='Was ist das für ein Fleisch?', sv='Vad är det för kött?',
      k=[('fleisch', ['kött']), ('was', ['vad'])]),
 dict(de='Das ist mir zu salzig.', sv='Det är för salt för mig.',
      k=[('salzig', ['salt']), ('zu', ['för'])]),
 dict(de='Nicht zu salzig, bitte.', sv='Inte för salt, tack.',
      k=[('nicht_zu', ['inte för', 'inte']), ('salzig', ['salt'])]),
 dict(de='Dieses Restaurant ist sehr gut.', sv='Den här restaurangen är mycket bra.',
      k=[('restaurant', ['restaurangen', 'restaurang']), ('gut', ['mycket bra', 'bra'])]),

# ---------------------------------------------------------------- Getränke
 dict(de='Was haben Sie zu trinken?', sv='Vad har ni att dricka?',
      k=[('haben', ['har ni', 'har']), ('trinken', ['dricka'])]),
 dict(de='Kaltes Wasser, bitte.', sv='Kallt vatten, tack.',
      k=[('wasser', ['vatten']), ('kalt', ['kallt', 'kall'])],
      h='Leitungswasser („kranvatten") ist in Schweden überall kostenlos und '
        'wird oft ungefragt hingestellt — man muss es nicht extra bestellen.'),
 dict(de='Heißes Wasser, bitte.', sv='Varmt vatten, tack.',
      k=[('wasser', ['vatten']), ('heiss', ['varmt', 'varm'])]),
 dict(de='Ohne Eis, bitte.', sv='Utan is, tack.',
      k=[('ohne', ['utan']), ('eis', ['is'])]),
 dict(de='Mit Eis, bitte.', sv='Med is, tack.',
      k=[('mit', ['med']), ('eis', ['is'])]),
 dict(de='Ein Bier, bitte.', sv='En öl, tack.',
      k=[('bier', ['öl', 'en öl'])]),
 dict(de='Einen Tee, bitte.', sv='Ett te, tack.',
      k=[('tee', ['te', 'ett te'])]),
 dict(de='Ohne Zucker, bitte.', sv='Utan socker, tack.',
      k=[('ohne', ['utan']), ('zucker', ['socker'])]),
 dict(de='Ein bisschen Zucker, bitte.', sv='Lite socker, tack.',
      k=[('ein_bisschen', ['lite']), ('zucker', ['socker'])]),
 dict(de='Noch eins, bitte.', sv='En till, tack.',
      k=[('noch', ['en till', 'till'])]),
 dict(de='Zwei Flaschen, bitte.', sv='Två flaskor, tack.',
      k=[('zwei', ['två']), ('flasche', ['flaskor', 'flaska'])]),
 dict(de='Trinkst du Kaffee oder Tee?', sv='Dricker du kaffe eller te?',
      k=[('kaffee', ['kaffe']), ('tee', ['te']), ('oder', ['eller'])]),

# ---------------------------------------------------------------- Platz
 dict(de='Für wie viele Personen?', sv='Hur många personer?',
      k=[('wieviele', ['hur många']), ('person', ['personer'])]),
 dict(de='Zwei Personen.', sv='Två personer.',
      k=[('zwei', ['två']), ('person', ['personer'])]),
 dict(de='Können wir draußen sitzen?', sv='Kan vi sitta ute?',
      k=[('koennen', ['kan vi', 'kan']), ('draussen', ['ute', 'utomhus']),
         ('sitzen', ['sitta'])]),
 dict(de='Wir warten.', sv='Vi väntar.',
      k=[('warten', ['väntar', 'vänta'])]),
 dict(de='Wie lange müssen wir warten?', sv='Hur länge måste vi vänta?',
      k=[('wie_lange', ['hur länge']), ('warten', ['vänta'])]),

# ---------------------------------------------------------------- Schärfe
 dict(de='Ist das scharf?', sv='Är det starkt?',
      k=[('scharf', ['starkt', 'stark'])],
      h='Scharfes Essen heißt auf Schwedisch „starkt" — ein eigenes Wort für '
        'scharf gibt es nicht. „Stark mat" ist also scharfes Essen, nicht '
        'kräftiges.'),
 dict(de='Das ist zu scharf!', sv='Det är för starkt!',
      k=[('zu', ['för']), ('scharf', ['starkt', 'stark'])]),
 dict(de='Nicht scharf, bitte.', sv='Inte starkt, tack.',
      k=[('nicht', ['inte']), ('scharf', ['starkt', 'stark'])]),
 dict(de='Ein bisschen scharf ist okay.', sv='Lite starkt går bra.',
      k=[('ein_bisschen', ['lite']), ('scharf', ['starkt', 'stark'])]),
 dict(de='Ich kann nicht scharf essen.', sv='Jag tål inte stark mat.',
      k=[('nicht_koennen', ['tål inte', 'kan inte']), ('scharf', ['stark', 'starkt'])]),
 dict(de='Kannst du scharf essen?', sv='Tål du stark mat?',
      k=[('koennen', ['tål du', 'tål']), ('scharf', ['stark', 'starkt'])]),
 dict(de='Haben Sie etwas ohne Chili?', sv='Har ni något utan chili?',
      k=[('ohne', ['utan']), ('chili', ['chili'])]),
 dict(de='Wasser, schnell!', sv='Vatten, snabbt!',
      k=[('wasser', ['vatten']), ('schnell', ['snabbt', 'fort'])]),

# ---------------------------------------------------------------- Straßenessen
 dict(de='Was ist das?', sv='Vad är det här?',
      k=[('was', ['vad är det', 'vad'])]),
 dict(de='Ich nehme das.', sv='Jag tar det här.',
      k=[('nehmen', ['jag tar', 'tar'])]),
 dict(de='Eine Portion, bitte.', sv='En portion, tack.',
      k=[('portion', ['portion', 'en portion'])]),
 dict(de='Zwei Portionen, bitte.', sv='Två portioner, tack.',
      k=[('zwei', ['två']), ('portion', ['portioner', 'portion'])]),
 dict(de='Zwei davon, bitte.', sv='Två av dem, tack.',
      k=[('zwei', ['två']), ('davon', ['av dem', 'dem'])]),
 dict(de='Wie viel kostet eine Portion?', sv='Vad kostar en portion?',
      k=[('kosten', ['kostar']), ('portion', ['portion'])]),
 dict(de='Zum Mitnehmen, bitte.', sv='Att ta med, tack.',
      k=[('mitnehmen', ['ta med', 'att ta med'])]),
 dict(de='Ich esse hier.', sv='Jag äter här.',
      k=[('essen', ['äter', 'äta']), ('hier', ['här'])]),
 dict(de='Ist das frisch?', sv='Är det färskt?',
      k=[('frisch', ['färskt', 'färsk'])]),
 dict(de='Das ist sehr frisch.', sv='Det är mycket färskt.',
      k=[('frisch', ['färskt', 'färsk']), ('sehr', ['mycket'])]),
 dict(de='Was essen die anderen?', sv='Vad äter de andra?',
      k=[('essen', ['äter', 'äta']), ('andere', ['de andra', 'andra'])]),
 dict(de='Das Gleiche, bitte.', sv='Samma sak, tack.',
      k=[('gleiche', ['samma sak', 'samma'])]),
 dict(de='Ich möchte das Gleiche.', sv='Jag vill ha samma sak.',
      k=[('moechten', ['vill ha', 'jag vill']), ('gleiche', ['samma sak', 'samma'])]),

# ---------------------------------------------------------------- Teilen
 dict(de='Wir essen zusammen.', sv='Vi äter tillsammans.',
      k=[('essen', ['äter', 'äta']), ('zusammen', ['tillsammans'])]),
 dict(de='Alle zusammen!', sv='Alla tillsammans!',
      k=[('alle', ['alla']), ('zusammen', ['tillsammans'])]),
 dict(de='Das ist für alle.', sv='Det här är till alla.',
      k=[('fuer_alle', ['till alla', 'alla'])]),
 dict(de='Nimm doch!', sv='Ta för dig!',
      k=[('nehmen', ['ta för dig', 'ta'])]),
 dict(de='Iss mehr!', sv='Ät mer!',
      k=[('essen', ['ät', 'äta']), ('mehr', ['mer'])]),
 dict(de='Ich bin satt.', sv='Jag är mätt.',
      k=[('satt', ['mätt', 'jag är mätt'])],
      h='NICHT „jag är full" — „full" heißt auf Schwedisch betrunken. Satt ist '
        '„mätt".'),
 dict(de='Bist du satt?', sv='Är du mätt?',
      k=[('satt', ['mätt', 'är du mätt'])]),
 dict(de='Sollen wir noch etwas bestellen?', sv='Ska vi beställa något mer?',
      k=[('bestellen', ['beställa']), ('noch_etwas', ['något mer', 'mer'])]),
 dict(de='Noch eine Schüssel, bitte.', sv='En skål till, tack.',
      k=[('noch', ['till', 'en till']), ('schuessel', ['skål'])]),
 dict(de='Noch eine Schüssel Reis, bitte.', sv='En skål ris till, tack.',
      k=[('noch', ['till', 'en till']), ('reis', ['ris'])]),
 dict(de='Ich lade dich ein.', sv='Jag bjuder.',
      k=[('einladen', ['jag bjuder', 'bjuder'])]),
 dict(de='Heute lade ich ein.', sv='Idag bjuder jag.',
      k=[('heute', ['idag']), ('einladen', ['bjuder', 'bjuder jag'])]),
 dict(de='Danke fürs Einladen!', sv='Tack för att du bjöd!',
      k=[('danke', ['tack']), ('einladen', ['bjöd', 'bjuda'])]),
 dict(de='Die anderen essen schon.', sv='De andra äter redan.',
      k=[('andere', ['de andra', 'andra']), ('essen', ['äter', 'äta'])]),
]

AUSGELASSEN = []
