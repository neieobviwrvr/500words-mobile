# -*- coding: utf-8 -*-
"""Essen und Trinken auf Norwegisch (Bokmaal) - 92 Saetze (drinking_dining).

**Nichts ausgelassen.**

Die Kategorie stammt zu grossen Teilen aus dem chinesischen Ausbau. Alle
Saetze funktionieren auch in Norwegen, sie sind nur unterschiedlich
haeufig - die Schaerfe-Verhandlung braucht dort praktisch niemand.
Uebersetzt ist trotzdem vollstaendig und woertlich; wo die PRAXIS deutlich
abweicht, steht ein Hinweis am Satz statt einer stillen Anpassung.

Was in Norwegen anders laeuft und deshalb kommentiert ist:

  Rechnung teilen        Der Normalfall, nicht die Ausnahme: jeder zahlt
                         seins, notfalls per Vipps im Nachhinein. Die
                         italienische Frage nach getrennten Rechnungen
                         waere hier ueberfluessig.
  Trinkgeld              Kein Muss. Aufrunden reicht, Service ist im Preis.
  Leitungswasser         Kostenlos, hervorragend und wird selbstverstaend-
                         lich gebracht - anders als in Italien.
  Bier                   Teuer und streng reguliert: nach 20 Uhr (samstags
                         18 Uhr) gibt es im Laden kein Bier mehr, Wein und
                         Spirituosen nur im staatlichen `Vinmonopolet`.
  Strassenessen          Kaum vorhanden ausser der Wuerstchenbude
                         (`pølse i lompe`) am Kiosk.

**Kein Sie**, auch nicht zum Kellner.

**Nicht von Muttersprachlern geprueft.**
"""

KATEGORIEN = ['drinking_dining']

SAETZE = [

# ---------------------------------------------------------- essen_bestellen
 dict(de='Die Speisekarte, bitte.', no='Kan jeg få menyen?',
      k=[('speisekarte', ['menyen', 'meny'])]),
 dict(de='Was empfehlen Sie?', no='Hva anbefaler du?',
      k=[('empfehlung', ['hva anbefaler du', 'anbefaler', 'anbefaling'])]),
 dict(de='Ich hätte gern ein Wasser, bitte.', no='Kan jeg få et glass vann?',
      k=[('wasser', ['vann'])],
      h='Leitungswasser ist in Norwegen ausgezeichnet, kostenlos und wird '
        'ohne Nachfrage gebracht — Flaschenwasser zu bestellen wirkt fast '
        'exzentrisch.'),
 dict(de='Was möchten Sie trinken?', no='Hva vil du drikke?',
      k=[('trinken_frage', ['hva vil du drikke', 'drikke'])]),
 dict(de='Ich möchte etwas bestellen.', no='Jeg vil gjerne bestille.',
      k=[('bestellen', ['bestille'])]),
 dict(de='Einen Moment, bitte.', no='Et øyeblikk, takk.',
      k=[('moment', ['et øyeblikk', 'øyeblikk'])]),
 dict(de='Das ist alles, danke.', no='Det var alt, takk.',
      k=[('alles', ['det var alt', 'alt'])]),
 dict(de='Was ist in diesem Gericht?', no='Hva er det i denne retten?',
      k=[('was_drin', ['hva er det i', 'retten', 'rett'])]),
 dict(de='Haben Sie eine Karte mit Bildern?', no='Har dere en meny med bilder?',
      k=[('bilder', ['med bilder', 'bilder'])]),
 dict(de='Ich möchte etwas Warmes.', no='Jeg vil gjerne ha noe varmt.',
      k=[('warm', ['noe varmt', 'varmt'])]),
 dict(de='Zeigen Sie mir das mal.', no='Kan du vise meg det?',
      k=[('zeigen', ['vise meg', 'vise'])]),
 dict(de='Diese hier, bitte.', no='Denne her, takk.',
      k=[('diese', ['denne her', 'denne'])]),
 dict(de='Wie lange dauert es?', no='Hvor lang tid tar det?',
      k=[('wie_lange', ['hvor lang tid', 'tar det'])]),
 dict(de='Gibt es davon ein Bild?', no='Finnes det et bilde av det?',
      k=[('bild', ['bilde'])]),
 dict(de='Was gibt es gutes zu Essen?', no='Hva er godt å spise her?',
      k=[('gutes_essen', ['godt å spise', 'godt', 'spise'])]),

# ----------------------------------------------------------- essen_bezahlen
 dict(de='Können wir bitte zahlen?', no='Kan vi få regningen?',
      k=[('zahlen', ['regningen', 'betale', 'regning'])]),
 dict(de='Ist das im Preis inbegriffen?', no='Er det inkludert i prisen?',
      k=[('im_preis', ['inkludert i prisen', 'inkludert'])]),
 dict(de='Das habe ich nicht bestellt.', no='Dette har jeg ikke bestilt.',
      k=[('nicht_bestellt', ['har jeg ikke bestilt', 'ikke bestilt'])]),
 dict(de='Können Sie mir die Rechnung getrennt bringen?', no='Kan vi betale hver for oss?',
      k=[('rechnung_getrennt', ['hver for oss', 'separat', 'delt'])],
      h='Getrennt zahlen ist in Norwegen der Normalfall — niemand findet '
        'das kleinlich. Oft legt einer aus und die anderen schicken ihren '
        'Anteil hinterher per Vipps.'),
 dict(de='Zusammen, bitte.', no='Alt sammen, takk.',
      k=[('zusammen', ['alt sammen', 'sammen'])]),
 dict(de='Kann ich mit dem Handy bezahlen?', no='Kan jeg betale med mobilen?',
      k=[('handy', ['mobilen', 'mobil', 'vipps']),
         ('bezahlen', ['betale'])]),
 dict(de='Stimmt so.', no='Behold vekslepengene.',
      k=[('stimmt_so', ['behold vekslepengene', 'behold resten', 'det er greit'])],
      h='Trinkgeld ist kein Muss — der Service ist im Preis. Aufrunden ist '
        'eine Geste, mehr erwartet niemand.'),
 dict(de='Wie viel macht das?', no='Hvor mye blir det?',
      k=[('wieviel', ['hvor mye blir det', 'hvor mye'])]),
 dict(de='Können wir das einpacken?', no='Kan vi få det med oss?',
      k=[('einpacken', ['få det med oss', 'ta med', 'pakke'])]),

# ---------------------------------------------------------- essen_geschmack
 dict(de='Guten Appetit!', no='God appetitt!',
      k=[('guten_appetit', ['god appetitt', 'vel bekomme'])]),
 dict(de='Das Essen schmeckt sehr gut.', no='Maten smaker veldig godt.',
      k=[('schmeckt_gut', ['smaker veldig godt', 'smaker godt', 'godt'])]),
 dict(de='Gestern habe ich in einem Restaurant gegessen.', no='I går spiste jeg på restaurant.',
      k=[('restaurant', ['restaurant'])]),
 dict(de='Das war sehr lecker.', no='Det var veldig godt.',
      k=[('war_lecker', ['veldig godt', 'kjempegodt', 'nydelig'])]),
 dict(de='Das mag ich sehr.', no='Det liker jeg godt.',
      k=[('moegen', ['det liker jeg', 'liker godt', 'liker'])]),
 dict(de='Das mag ich nicht.', no='Det liker jeg ikke.',
      k=[('nicht_moegen', ['liker jeg ikke', 'liker ikke'])]),
 dict(de='Was ist das für ein Fleisch?', no='Hva slags kjøtt er dette?',
      k=[('fleisch', ['kjøtt'])]),
 dict(de='Das ist mir zu salzig.', no='Det er for salt for meg.',
      k=[('salzig', ['for salt', 'salt'])]),
 dict(de='Nicht zu salzig, bitte.', no='Ikke for salt, takk.',
      k=[('salzig', ['ikke for salt', 'salt'])]),
 dict(de='Dieses Restaurant ist sehr gut.', no='Denne restauranten er veldig god.',
      k=[('restaurant_gut', ['restauranten', 'veldig god'])]),

# ---------------------------------------------------------- essen_getraenke
 dict(de='Was haben Sie zu trinken?', no='Hva har dere å drikke?',
      k=[('trinken', ['å drikke', 'drikke'])]),
 dict(de='Kaltes Wasser, bitte.', no='Kaldt vann, takk.',
      k=[('kalt', ['kaldt']),
         ('wasser', ['vann'])]),
 dict(de='Heißes Wasser, bitte.', no='Varmt vann, takk.',
      k=[('heiss', ['varmt']),
         ('wasser', ['vann'])]),
 dict(de='Ohne Eis, bitte.', no='Uten is, takk.',
      k=[('ohne_eis', ['uten is', 'is'])]),
 dict(de='Ein Bier, bitte.', no='En øl, takk.',
      k=[('bier', ['øl'])],
      h='Bier ist in Norwegen teuer und streng geregelt: im Laden gibt es '
        'nach 20 Uhr (samstags 18 Uhr) keins mehr, Wein und Spirituosen '
        'nur im staatlichen „Vinmonopolet".'),
 dict(de='Einen Tee, bitte.', no='En te, takk.',
      k=[('tee', ['te'])]),
 dict(de='Ohne Zucker, bitte.', no='Uten sukker, takk.',
      k=[('ohne_zucker', ['uten sukker', 'sukker'])]),
 dict(de='Noch eins, bitte.', no='En til, takk.',
      k=[('noch_eins', ['en til', 'til'])]),
 dict(de='Zwei Flaschen, bitte.', no='To flasker, takk.',
      k=[('zwei', ['to']),
         ('flaschen', ['flasker'])]),
 dict(de='Mit Eis, bitte.', no='Med is, takk.',
      k=[('eis', ['is'])]),
 dict(de='Ein bisschen Zucker, bitte.', no='Litt sukker, takk.',
      k=[('zucker', ['sukker']),
         ('bisschen', ['litt'])]),
 dict(de='Trinkst du Kaffee oder Tee?', no='Drikker du kaffe eller te?',
      k=[('kaffee_tee', ['kaffe', 'te'])],
      h='Norwegen trinkt pro Kopf mit am meisten Kaffee weltweit — meist '
        'schwarzen Filterkaffee, und der steht in Büros und bei Leuten zu '
        'Hause praktisch immer bereit.'),

# -------------------------------------------------------------- essen_platz
 dict(de='Ich hätte gern einen Tisch für zwei Personen.', no='Jeg vil gjerne ha et bord til to.',
      k=[('tisch', ['bord']),
         ('anzahl_zwei', ['til to', 'to'])]),
 dict(de='Haben Sie einen Tisch frei?', no='Har dere et ledig bord?',
      k=[('tisch_frei', ['ledig bord', 'ledig', 'bord'])]),
 dict(de='Ich möchte einen Tisch für morgen Abend reservieren.', no='Jeg vil gjerne bestille bord til i morgen kveld.',
      k=[('reservieren', ['bestille bord', 'bestille', 'reservere']),
         ('morgen_abend', ['i morgen kveld', 'morgen kveld'])]),
 dict(de='Ist dieser Tisch schon reserviert?', no='Er dette bordet reservert?',
      k=[('schon_reserviert', ['reservert', 'bestilt'])]),
 dict(de='Für wie viele Personen?', no='Hvor mange personer?',
      k=[('wie_viele', ['hvor mange personer', 'hvor mange'])]),
 dict(de='Können wir draußen sitzen?', no='Kan vi sitte ute?',
      k=[('draussen', ['ute', 'sitte ute'])]),
 dict(de='Wir warten.', no='Vi venter.',
      k=[('warten', ['vi venter', 'venter'])]),
 dict(de='Wie lange müssen wir warten?', no='Hvor lenge må vi vente?',
      k=[('wie_lange', ['hvor lenge']),
         ('warten', ['vente', 'må vi vente'])]),
 dict(de='Zwei Personen.', no='To personer.',
      k=[('zwei', ['to']),
         ('personen', ['personer'])]),

# ----------------------------------------------------------- essen_schaerfe
 dict(de='Ist das scharf?', no='Er dette sterkt?',
      k=[('scharf', ['sterkt', 'sterk'])],
      h='„Sterk" heißt scharf UND stark — beim Essen immer scharf. Ein '
        'eigenes Wort dafür gibt es nicht.'),
 dict(de='Nicht scharf, bitte.', no='Ikke sterkt, takk.',
      k=[('nicht_scharf', ['ikke sterkt', 'sterkt'])]),
 dict(de='Ein bisschen scharf ist okay.', no='Litt sterkt går bra.',
      k=[('bisschen', ['litt'])]),
 dict(de='Ich kann nicht scharf essen.', no='Jeg tåler ikke sterk mat.',
      k=[('nicht_koennen', ['tåler ikke', 'kan ikke']),
         ('scharf', ['sterk mat', 'sterkt'])]),
 dict(de='Das ist zu scharf!', no='Det er for sterkt!',
      k=[('zu_scharf', ['for sterkt', 'sterkt'])]),
 dict(de='Haben Sie etwas ohne Chili?', no='Har dere noe uten chili?',
      k=[('ohne_scharf', ['uten chili', 'chili', 'uten sterkt'])],
      h='Die norwegische Küche ist traditionell überhaupt nicht scharf — '
        'diese Frage brauchst du eher im Thai- oder Indien-Restaurant als '
        'beim Norweger.'),
 dict(de='Wasser, schnell!', no='Vann, fort!',
      k=[('wasser', ['vann'])]),
 dict(de='Kannst du scharf essen?', no='Tåler du sterk mat?',
      k=[('koennen', ['tåler du', 'kan du']),
         ('scharf', ['sterk mat', 'sterkt'])]),

# ------------------------------------------------------ essen_strassenessen
 dict(de='Was ist das?', no='Hva er dette?',
      k=[('was', ['hva er dette', 'hva er det'])]),
 dict(de='Ich nehme das.', no='Jeg tar denne.',
      k=[('nehmen', ['jeg tar', 'tar'])]),
 dict(de='Eine Portion, bitte.', no='En porsjon, takk.',
      k=[('portion', ['porsjon'])]),
 dict(de='Zwei davon, bitte.', no='To av dem, takk.',
      k=[('zwei', ['to'])]),
 dict(de='Wie viel kostet eine Portion?', no='Hva koster en porsjon?',
      k=[('wieviel', ['hva koster', 'koster'])]),
 dict(de='Zum Mitnehmen, bitte.', no='Take away, takk.',
      k=[('mitnehmen', ['take away', 'ta med', 'med meg'])]),
 dict(de='Ich esse hier.', no='Jeg spiser her.',
      k=[('hier', ['her']),
         ('essen', ['spiser', 'spise'])]),
 dict(de='Ist das frisch?', no='Er dette ferskt?',
      k=[('frisch', ['ferskt', 'fersk'])]),
 dict(de='Was essen die anderen?', no='Hva spiser de andre?',
      k=[('andere', ['de andre', 'andre'])]),
 dict(de='Das Gleiche, bitte.', no='Det samme, takk.',
      k=[('gleiche', ['det samme', 'samme'])]),
 dict(de='Zwei Portionen, bitte.', no='To porsjoner, takk.',
      k=[('zwei', ['to']),
         ('portionen', ['porsjoner'])]),
 dict(de='Das ist sehr frisch.', no='Dette er veldig ferskt.',
      k=[('frisch', ['ferskt', 'fersk'])]),
 dict(de='Ich möchte das Gleiche.', no='Jeg vil ha det samme.',
      k=[('gleiche', ['det samme', 'samme'])],
      h='Straßenessen im chinesischen Sinn gibt es in Norwegen kaum — was '
        'dem am nächsten kommt, ist „pølse i lompe", das Würstchen im '
        'Kartoffelfladen am Kiosk.'),

# ------------------------------------------------------------- essen_teilen
 dict(de='Wir essen zusammen.', no='Vi spiser sammen.',
      k=[('zusammen', ['sammen', 'spiser sammen'])]),
 dict(de='Noch eine Schüssel Reis, bitte.', no='En porsjon ris til, takk.',
      k=[('reis', ['ris']),
         ('noch', ['til', 'en til'])]),
 dict(de='Iss mehr!', no='Spis mer!',
      k=[('mehr_essen', ['spis mer', 'mer'])]),
 dict(de='Ich bin satt.', no='Jeg er mett.',
      k=[('satt', ['mett'])]),
 dict(de='Nimm doch!', no='Forsyn deg!',
      k=[('nimm', ['forsyn deg', 'ta for deg', 'ta'])]),
 dict(de='Sollen wir noch etwas bestellen?', no='Skal vi bestille noe mer?',
      k=[('bestellen', ['bestille']),
         ('noch', ['noe mer', 'mer'])]),
 dict(de='Ich lade dich ein.', no='Jeg spanderer.',
      k=[('einladen', ['jeg spanderer', 'spanderer'])],
      h='„Spandere" ist das Wort fürs Einladen. Es kommt seltener vor als '
        'in Italien oder Russland — Norweger teilen eher, als dass einer '
        'für alle zahlt.'),
 dict(de='Danke fürs Einladen!', no='Takk for at du spanderte!',
      k=[('danke', ['takk', 'takk for'])]),
 dict(de='Das ist für alle.', no='Dette er til alle.',
      k=[('alle', ['til alle', 'alle'])]),
 dict(de='Bist du satt?', no='Er du mett?',
      k=[('satt', ['mett'])]),
 dict(de='Noch eine Schüssel, bitte.', no='En bolle til, takk.',
      k=[('schuessel', ['bolle', 'porsjon']),
         ('noch', ['til'])]),
 dict(de='Heute lade ich ein.', no='I dag spanderer jeg.',
      k=[('heute', ['i dag']),
         ('einladen', ['spanderer', 'spandere'])]),
 dict(de='Alle zusammen!', no='Alle sammen!',
      k=[('alle', ['alle']),
         ('zusammen', ['sammen'])]),
 dict(de='Die anderen essen schon.', no='De andre spiser allerede.',
      k=[('andere', ['de andre', 'andre']),
         ('essen', ['spiser'])]),

# ------------------------------------------------------ essen_unvertraeglich
 dict(de='Ich bin Vegetarier.', no='Jeg er vegetarianer.',
      k=[('vegetarier', ['vegetarianer'])]),
 dict(de='Ich habe eine Allergie gegen Nüsse.', no='Jeg er allergisk mot nøtter.',
      k=[('allergie', ['allergisk', 'allergi']),
         ('nuesse', ['nøtter'])]),
]

AUSGELASSEN = []
