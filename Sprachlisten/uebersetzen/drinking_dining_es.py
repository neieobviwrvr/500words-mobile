# -*- coding: utf-8 -*-
"""drinking_dining auf Spanisch: die 73 noch fehlenden Saetze.

**Alle 73 sind uebertragbar - keine Ausnahme.** Das ist der grosse Unterschied
zu club_nightlife (dort fielen 9 von 138 raus): Essensvokabular ist universell,
und die spanische Teil-/Tapas-Kultur passt erstaunlich genau auf das
chinesische Family-Style-Essen. "Iss mehr!", "Nimm doch!", "Das ist fuer alle",
"Heute lade ich ein" sind in Spanien genauso selbstverstaendlich wie in China.

Drei Grenzfaelle, die ich bewusst DRIN gelassen habe:

  Heisses Wasser, bitte.     In China Standardgetraenk, in Spanien ungewoehnlich
                             - aber nicht falsch (zum Tee), und wer danach fragt,
                             bekommt es. Ein Satz, der selten gebraucht wird,
                             schadet nicht; einer, der fehlt, wenn man ihn
                             braucht, schon.
  Schaerfe (8 Saetze)        Wirkt auf Spanien zugeschnitten uebertrieben -
                             fuer Lateinamerika (Mexiko) ist es der wichtigste
                             Block der ganzen Kategorie.
  Schuessel Reis             "Schuessel" gibt es so im spanischen Essen nicht,
                             "plato" traegt es aber vollstaendig.

**Peninsular als Grundform, LatAm-Varianten als Synonyme** - gleiche Linie wie
der Bestand. Betrifft hier vor allem: coger/tomar, camarero/mesero,
zumo/jugo, patatas/papas, caña (nur Spanien, deshalb immer mit "cerveza"
als Zweitform).

`verb_cluster` bleibt leer (es gibt keine spanischen Cluster in
`answer_clusters`, dieselbe Lage wie im ganzen spanischen Bestand).

**Nicht von Muttersprachlern geprueft.**
"""

SAETZE = [

# ---------------------------------------------------------------- Bestellen
 dict(de='Einen Moment, bitte.', es='Un momento, por favor.',
      k=[('moment', ['un momento', 'momento'])]),
 dict(de='Das ist alles, danke.', es='Eso es todo, gracias.',
      k=[('alles', ['eso es todo', 'todo']), ('danke', ['gracias'])]),
 dict(de='Was ist in diesem Gericht?', es='¿Qué lleva este plato?',
      k=[('was', ['qué']), ('gericht', ['plato', 'este plato'])]),
 dict(de='Haben Sie eine Karte mit Bildern?', es='¿Tienen una carta con fotos?',
      k=[('karte', ['carta', 'menú']), ('bilder', ['fotos', 'imágenes'])]),
 dict(de='Ich möchte etwas Warmes.', es='Quiero algo caliente.',
      k=[('moechten', ['quiero', 'quisiera']), ('warm', ['caliente'])]),
 dict(de='Zeigen Sie mir das mal.', es='Enséñemelo, por favor.',
      k=[('zeigen', ['enséñemelo', 'enseñar', 'muéstreme'])]),
 dict(de='Diese hier, bitte.', es='Este, por favor.',
      k=[('dieses', ['este', 'esta', 'esto'])]),
 dict(de='Wie lange dauert es?', es='¿Cuánto tarda?',
      k=[('wie_lange', ['cuánto']), ('dauern', ['tarda', 'tardar'])]),
 dict(de='Gibt es davon ein Bild?', es='¿Hay una foto de eso?',
      k=[('bild', ['foto', 'imagen'])]),
 dict(de='Was gibt es gutes zu Essen?', es='¿Qué hay bueno para comer?',
      k=[('was_gutes', ['qué hay bueno', 'algo bueno']), ('essen', ['comer', 'para comer'])]),

# ---------------------------------------------------------------- Bezahlen
 dict(de='Zusammen, bitte.', es='Todo junto, por favor.',
      k=[('zusammen', ['todo junto', 'junto'])]),
 dict(de='Kann ich mit dem Handy bezahlen?', es='¿Puedo pagar con el móvil?',
      k=[('koennen', ['puedo']), ('handy', ['móvil', 'celular', 'teléfono']),
         ('bezahlen', ['pagar'])]),
 dict(de='Stimmt so.', es='Quédese con el cambio.',
      k=[('stimmt_so', ['quédese con el cambio', 'el cambio', 'está bien así'])],
      h='In Spanien wird deutlich weniger Trinkgeld gegeben als in Deutschland — '
        'oft rundet man nur auf oder lässt die Münzen liegen.'),
 dict(de='Wie viel macht das?', es='¿Cuánto es?',
      k=[('wieviel', ['cuánto es', 'cuánto'])]),
 dict(de='Können wir das einpacken?', es='¿Nos lo puede poner para llevar?',
      k=[('einpacken', ['para llevar', 'envolver', 'poner para llevar'])]),

# ---------------------------------------------------------------- Geschmack
 dict(de='Das mag ich sehr.', es='Esto me gusta mucho.',
      k=[('moegen', ['me gusta']), ('sehr', ['mucho'])]),
 dict(de='Das mag ich nicht.', es='Esto no me gusta.',
      k=[('nicht_moegen', ['no me gusta'])]),
 dict(de='Was ist das für ein Fleisch?', es='¿Qué carne es esta?',
      k=[('fleisch', ['carne']), ('was', ['qué'])]),
 dict(de='Das ist mir zu salzig.', es='Está demasiado salado para mí.',
      k=[('salzig', ['salado', 'sal']), ('zu', ['demasiado', 'muy'])]),
 dict(de='Nicht zu salzig, bitte.', es='No muy salado, por favor.',
      k=[('nicht_zu', ['no muy', 'poco']), ('salzig', ['salado', 'sal'])]),
 dict(de='Dieses Restaurant ist sehr gut.', es='Este restaurante es muy bueno.',
      k=[('restaurant', ['restaurante']), ('gut', ['muy bueno', 'bueno'])]),

# ---------------------------------------------------------------- Getränke
 dict(de='Was haben Sie zu trinken?', es='¿Qué tienen para beber?',
      k=[('haben', ['tienen', 'tiene']), ('trinken', ['beber', 'tomar'])]),
 dict(de='Kaltes Wasser, bitte.', es='Agua fría, por favor.',
      k=[('wasser', ['agua']), ('kalt', ['fría', 'frío'])]),
 dict(de='Heißes Wasser, bitte.', es='Agua caliente, por favor.',
      k=[('wasser', ['agua']), ('heiss', ['caliente'])]),
 dict(de='Ohne Eis, bitte.', es='Sin hielo, por favor.',
      k=[('ohne', ['sin']), ('eis', ['hielo'])]),
 dict(de='Ein Bier, bitte.', es='Una cerveza, por favor.',
      k=[('bier', ['cerveza', 'caña'])]),
 dict(de='Einen Tee, bitte.', es='Un té, por favor.',
      k=[('tee', ['té'])]),
 dict(de='Ohne Zucker, bitte.', es='Sin azúcar, por favor.',
      k=[('ohne', ['sin']), ('zucker', ['azúcar'])]),
 dict(de='Noch eins, bitte.', es='Otro, por favor.',
      k=[('noch', ['otro', 'otra', 'uno más'])]),
 dict(de='Zwei Flaschen, bitte.', es='Dos botellas, por favor.',
      k=[('zwei', ['dos']), ('flasche', ['botellas', 'botella'])]),
 dict(de='Mit Eis, bitte.', es='Con hielo, por favor.',
      k=[('mit', ['con']), ('eis', ['hielo'])]),
 dict(de='Ein bisschen Zucker, bitte.', es='Un poco de azúcar, por favor.',
      k=[('ein_bisschen', ['un poco', 'poco']), ('zucker', ['azúcar'])]),
 dict(de='Trinkst du Kaffee oder Tee?', es='¿Bebes café o té?',
      k=[('kaffee', ['café']), ('tee', ['té']), ('oder', ['o'])]),

# ---------------------------------------------------------------- Platz
 dict(de='Für wie viele Personen?', es='¿Para cuántas personas?',
      k=[('wieviele', ['cuántas', 'cuántos']), ('person', ['personas'])]),
 dict(de='Können wir draußen sitzen?', es='¿Podemos sentarnos fuera?',
      k=[('koennen', ['podemos']), ('draussen', ['fuera', 'afuera', 'terraza']),
         ('sitzen', ['sentarnos', 'sentar'])]),
 dict(de='Wir warten.', es='Esperamos.',
      k=[('warten', ['esperamos', 'esperar'])]),
 dict(de='Wie lange müssen wir warten?', es='¿Cuánto tenemos que esperar?',
      k=[('wie_lange', ['cuánto']), ('warten', ['esperar'])]),
 dict(de='Zwei Personen.', es='Dos personas.',
      k=[('zwei', ['dos']), ('person', ['personas'])]),

# ---------------------------------------------------------------- Schärfe
 dict(de='Ist das scharf?', es='¿Es picante?',
      k=[('scharf', ['picante', 'pica'])]),
 dict(de='Nicht scharf, bitte.', es='No picante, por favor.',
      k=[('nicht', ['no', 'sin']), ('scharf', ['picante'])]),
 dict(de='Ein bisschen scharf ist okay.', es='Un poco picante está bien.',
      k=[('ein_bisschen', ['un poco', 'poco']), ('scharf', ['picante'])]),
 dict(de='Ich kann nicht scharf essen.', es='No puedo comer picante.',
      k=[('nicht_koennen', ['no puedo']), ('scharf', ['picante'])]),
 dict(de='Das ist zu scharf!', es='¡Está demasiado picante!',
      k=[('zu', ['demasiado', 'muy']), ('scharf', ['picante'])]),
 dict(de='Haben Sie etwas ohne Chili?', es='¿Tienen algo sin chile?',
      k=[('ohne', ['sin']), ('chili', ['chile', 'picante', 'guindilla'])]),
 dict(de='Wasser, schnell!', es='¡Agua, rápido!',
      k=[('wasser', ['agua']), ('schnell', ['rápido', 'deprisa'])]),
 dict(de='Kannst du scharf essen?', es='¿Puedes comer picante?',
      k=[('koennen', ['puedes']), ('scharf', ['picante'])]),

# ---------------------------------------------------------------- Straßenessen
 dict(de='Was ist das?', es='¿Qué es esto?',
      k=[('was', ['qué es', 'qué'])]),
 dict(de='Ich nehme das.', es='Me llevo esto.',
      k=[('nehmen', ['me llevo', 'quiero', 'tomo'])]),
 dict(de='Eine Portion, bitte.', es='Una ración, por favor.',
      k=[('portion', ['ración', 'porción'])]),
 dict(de='Zwei davon, bitte.', es='Dos de estos, por favor.',
      k=[('zwei', ['dos']), ('davon', ['de estos', 'de esos'])]),
 dict(de='Wie viel kostet eine Portion?', es='¿Cuánto cuesta una ración?',
      k=[('kosten', ['cuesta', 'vale']), ('portion', ['ración', 'porción'])]),
 dict(de='Zum Mitnehmen, bitte.', es='Para llevar, por favor.',
      k=[('mitnehmen', ['para llevar', 'llevar'])]),
 dict(de='Ich esse hier.', es='Como aquí.',
      k=[('essen', ['como', 'comer']), ('hier', ['aquí'])]),
 dict(de='Ist das frisch?', es='¿Está fresco?',
      k=[('frisch', ['fresco', 'fresca'])]),
 dict(de='Was essen die anderen?', es='¿Qué comen los otros?',
      k=[('essen', ['comen', 'comer']), ('andere', ['los otros', 'los demás'])]),
 dict(de='Das Gleiche, bitte.', es='Lo mismo, por favor.',
      k=[('gleiche', ['lo mismo', 'mismo'])]),
 dict(de='Zwei Portionen, bitte.', es='Dos raciones, por favor.',
      k=[('zwei', ['dos']), ('portion', ['raciones', 'ración'])]),
 dict(de='Das ist sehr frisch.', es='Está muy fresco.',
      k=[('frisch', ['fresco', 'fresca']), ('sehr', ['muy'])]),
 dict(de='Ich möchte das Gleiche.', es='Quiero lo mismo.',
      k=[('moechten', ['quiero', 'quisiera']), ('gleiche', ['lo mismo', 'mismo'])]),

# ---------------------------------------------------------------- Teilen
 dict(de='Wir essen zusammen.', es='Comemos juntos.',
      k=[('essen', ['comemos', 'comer']), ('zusammen', ['juntos', 'juntas'])]),
 dict(de='Noch eine Schüssel Reis, bitte.', es='Otro plato de arroz, por favor.',
      k=[('noch', ['otro', 'otra', 'más']), ('reis', ['arroz'])]),
 dict(de='Iss mehr!', es='¡Come más!',
      k=[('essen', ['come', 'comer']), ('mehr', ['más'])]),
 dict(de='Ich bin satt.', es='Estoy lleno.',
      k=[('satt', ['lleno', 'llena', 'estoy lleno'])]),
 dict(de='Nimm doch!', es='¡Sírvete!',
      k=[('nehmen', ['sírvete', 'coge', 'toma'])]),
 dict(de='Sollen wir noch etwas bestellen?', es='¿Pedimos algo más?',
      k=[('bestellen', ['pedimos', 'pedir']), ('noch_etwas', ['algo más', 'más'])]),
 dict(de='Ich lade dich ein.', es='Yo invito.',
      k=[('einladen', ['yo invito', 'invito', 'te invito'])]),
 dict(de='Danke fürs Einladen!', es='¡Gracias por invitar!',
      k=[('danke', ['gracias']), ('einladen', ['invitar', 'la invitación'])]),
 dict(de='Das ist für alle.', es='Esto es para todos.',
      k=[('fuer_alle', ['para todos', 'todos'])]),
 dict(de='Bist du satt?', es='¿Estás lleno?',
      k=[('satt', ['lleno', 'llena'])]),
 dict(de='Noch eine Schüssel, bitte.', es='Otro plato, por favor.',
      k=[('noch', ['otro', 'otra', 'más']), ('schuessel', ['plato', 'bol'])]),
 dict(de='Heute lade ich ein.', es='Hoy invito yo.',
      k=[('heute', ['hoy']), ('einladen', ['invito yo', 'invito'])]),
 dict(de='Alle zusammen!', es='¡Todos juntos!',
      k=[('alle', ['todos']), ('zusammen', ['juntos', 'juntas'])]),
 dict(de='Die anderen essen schon.', es='Los otros ya están comiendo.',
      k=[('andere', ['los otros', 'los demás']), ('essen', ['comiendo', 'comen'])]),
]

# Nichts ausgelassen - siehe Kopfkommentar.
AUSGELASSEN = []
