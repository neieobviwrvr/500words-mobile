# -*- coding: utf-8 -*-
"""Club + Nightlife auf Spanisch: die uebertragbaren Saetze.

123 der 131 deutschen Saetze lassen sich uebernehmen, plus ein angepasster
Satz (siehe unten) - macht 124.

**Die Eignungspruefung faellt anders aus als bei Schwedisch.** schwedisch.py
liess 24 Saetze draussen, hier sind es nur 8. Der Unterschied liegt nicht an
Nachlaessigkeit, sondern an der Sprache selbst:

  Geschlecht      Spanisch beugt Adjektive (guapa/guapo, mona/mono), Schwedisch
                  nicht. Die `addressing`-Varianten (frauen/maenner), die dort
                  zusammenfielen und deshalb wegfielen, funktionieren hier.
  Trinkkultur     "¡Salud!" ist ein echtes Gegenstueck zum Anstossen, und
                  "Yo invito" (ich lade dich ein) ist in Spanien so
                  selbstverstaendlich wie 我请客 in China. Schwedisch hat beides
                  ausgelassen; fuer Spanisch waere das eine Luecke.
  Komplimente     "Tienes mucha clase" traegt 气质 erstaunlich genau - Klasse
                  im Sinn von Ausstrahlung, nicht Aussehen.

**Die 8, die draussen bleiben, und warum:**

  Bist du aus China?             China-Kontext, in Spanien sinnlos
  Lass uns WeChat austauschen.   WeChat gibt es hier nicht (waere WhatsApp -
                                 aber das ist ein NEUER Satz, keine Uebersetzung)
  Ich zahle mit WeChat.          dito
  Mein Chinesisch ist nicht gut. ersetzt durch die spanische Fassung, siehe unten
  Du bist schlank.               In China ein Kompliment (瘦), im spanischen
                                 Sprachraum ein Griff ins Klo - Koerperkommentare
                                 zu Gewicht sind heikel, nicht schmeichelhaft
  Du hast eine sehr helle Haut.  Hautton zu loben ist hier kein Kompliment,
                                 sondern ein Fettnaepfchen. Simon hatte 白 schon
                                 fuer Chinesisch bewusst zurueckgestellt
  Ach wo! (auf ein Lob)          哪里哪里 - Spanisch nimmt Lob mit "gracias" an,
  Nein, nein. (auf ein Lob)      bescheidenes Abwehren wirkt hier befremdlich

**Ein angepasster Satz.** "Mein Chinesisch ist nicht so gut." wird zu
"Mein Spanisch ist nicht so gut." - derselbe Kniff, den schwedisch.py mit
"Mein Schwedisch ist nicht so gut." gemacht hat. Der Satz hat damit KEIN
Gegenstueck in phrasebook_master und steht nur in dieser Tabelle; der Import
legt ihn als eigene Zeile an.

**Kulturhinweise werden NICHT uebersetzt.** Die vorhandenen sind
china-spezifisch (KTV-Privatraum, Pass am Clubeingang, 可爱 positiver als
"suess"). Wo Spanisch selbst eine Falle stellt, steht hier ein EIGENER
Hinweis - das ist der Sinn des Feldes.

**Peninsular-Spanisch als Grundform, LatAm-Varianten als Synonyme.** Gleiche
Linie wie die bestehenden 189 Saetze (dort "billete"/"boleto",
"coche", "baño"/"servicio"/"aseo"). Im Nachtleben betrifft das vor allem
movil/celular, guay/chevere, copa/trago.

**`verb_cluster` bleibt leer.** `answer_clusters` enthaelt 25 sv_-Cluster und
keinen einzigen spanischen - dieselbe Lage wie bei den uebrigen 189 spanischen
Saetzen.

**Nicht von Muttersprachlern geprueft.** Nach bestem Wissen umgangssprachlich
gehalten, aber vor der Vertonung gehoert ein Spot-Check darueber - besonders
ueber die Abweis-Saetze in club_sicherheit, wo der Ton entscheidet, und ueber
die Anmach-Saetze, wo zu woertlich uebersetztes Deutsch schnell steif klingt.

Konzept-SCHLUESSEL sind aus schwedisch.py uebernommen, wo es den Satz dort
gibt - sie sind sprachneutrale interne Bezeichner (gleiche Praxis wie in
build_spanisch.py). Nur die Synonyme sind spanisch.
"""

# de = deutscher Satz, ZEICHENGENAU wie in phrasebook_master (Abgleichschluessel)
# es = spanische Fassung
# k  = Konzepte [(schluessel, [synonyme])] - alle required
# h  = eigener spanischer Kulturhinweis (selten), sonst nicht gesetzt
# neu = True: hat kein Gegenstueck in phrasebook_master (siehe Kopfkommentar)
SAETZE = [

# ---------------------------------------------------------------- Trinkkultur
 dict(de='Prost!', es='¡Salud!',
      k=[('prost', ['salud', 'chinchín'])]),
 dict(de='Immer mit der Ruhe - trink so viel du magst.',
      es='Tranquilo, bebe lo que quieras.',
      k=[('ruhig', ['tranquilo', 'tranquila', 'sin prisa']),
         ('trinken', ['bebe', 'beber', 'toma'])]),
 dict(de='Ich trinke langsam.', es='Bebo despacio.',
      k=[('langsam', ['despacio', 'lento']), ('trinken', ['bebo', 'beber'])]),
 dict(de='Ich kann nicht mehr trinken.', es='No puedo beber más.',
      k=[('nicht_koennen', ['no puedo']), ('trinken', ['beber', 'tomar'])]),
 dict(de='Ich muss morgen arbeiten.', es='Mañana tengo que trabajar.',
      k=[('morgen', ['mañana']), ('arbeit', ['trabajar', 'trabajo'])]),
 dict(de='Ich trinke nur ein bisschen.', es='Bebo solo un poco.',
      k=[('trinken', ['bebo', 'beber']), ('ein_bisschen', ['un poco', 'poco'])]),
 dict(de='Was trinkst du?', es='¿Qué bebes?',
      k=[('trinken', ['bebes', 'tomas', 'beber']), ('was', ['qué'])]),
 dict(de='Ich möchte noch ein Bier.', es='Quiero otra cerveza.',
      k=[('noch', ['otra', 'otra más']), ('bier', ['cerveza', 'caña'])]),
 dict(de='Trinken wir zusammen!', es='¡Bebamos juntos!',
      k=[('zusammen', ['juntos', 'juntas']), ('trinken', ['bebamos', 'beber'])]),
 dict(de='Ich trinke keinen Alkohol.', es='No bebo alcohol.',
      k=[('nicht', ['no']), ('alkohol', ['alcohol'])]),
 dict(de='Was kostet das?', es='¿Cuánto cuesta?',
      k=[('kosten', ['cuesta', 'vale']), ('was', ['cuánto'])]),
 dict(de='Ich lade dich ein.', es='Yo invito.',
      k=[('einladen', ['yo invito', 'invito', 'te invito'])],
      h='„Yo invito" ist in Spanien die normale Art, eine Runde zu übernehmen — '
        'man sagt es beiläufig, nicht als große Geste.'),

# ---------------------------------------------------------------- Ansprechen
 dict(de='Wie heißt du?', es='¿Cómo te llamas?',
      k=[('heissen', ['cómo te llamas', 'tu nombre'])]),
 dict(de='Gefällt es dir hier auch?', es='¿A ti también te gusta esto?',
      k=[('auch', ['también']), ('moegen', ['te gusta', 'gusta'])]),
 dict(de='Ich sehe dir gern beim Tanzen zu.', es='Me gusta verte bailar.',
      k=[('moegen', ['me gusta']), ('tanzen', ['bailar', 'bailas'])]),
 dict(de='Du bist sehr hübsch.', es='Eres muy guapa.',
      k=[('huebsch', ['guapa', 'muy guapa', 'preciosa'])]),
 dict(de='Du siehst gut aus.', es='Estás muy guapo.',
      k=[('gut_aussehen', ['guapo', 'muy guapo', 'estás guapo'])]),
 dict(de='Bist du Single?', es='¿Estás soltero?',
      k=[('single', ['soltero', 'soltera'])]),
 dict(de='Ist dein Freund auch hier?', es='¿Tu novio también está aquí?',
      k=[('fester_freund', ['novio', 'tu novio'])]),
 dict(de='Ist deine Freundin auch hier?', es='¿Tu novia también está aquí?',
      k=[('feste_freundin', ['novia', 'tu novia'])]),
 dict(de='Wollen wir zusammen tanzen?', es='¿Bailamos juntos?',
      k=[('zusammen', ['juntos', 'juntas']), ('tanzen', ['bailamos', 'bailar'])]),
 dict(de='Hier ist es zu laut. Gehen wir nach draußen?',
      es='Aquí hay mucho ruido. ¿Salimos fuera?',
      k=[('laut', ['mucho ruido', 'ruido']),
         ('rausgehen', ['salimos', 'salir fuera', 'fuera'])]),
 dict(de='Mein Spanisch ist nicht so gut.', es='Mi español no es muy bueno.',
      neu=True,
      k=[('sprache', ['español', 'mi español']),
         ('nicht_gut', ['no es muy bueno', 'no muy bueno', 'no es bueno'])]),
 # Nachtrag 2026-08-27: kamen erst mit der Zusammenfuehrung ins Deutsche
 # (siehe Sprachlisten/zusammenfuehren/) - sie standen vorher nur auf
 # Chinesisch und fehlten deshalb in JEDER anderen Sprache.
 dict(de='Die Musik hier ist gut, oder?', es='La música está muy bien, ¿no?',
      k=[('musik', ['música']), ('gut', ['muy bien', 'bien', 'buena'])]),
 dict(de='Kommst du oft hierher?', es='¿Vienes mucho por aquí?',
      k=[('kommen', ['vienes', 'venir']), ('oft', ['mucho', 'a menudo'])]),
 dict(de='Bist du von hier?', es='¿Eres de aquí?',
      k=[('von_hier', ['de aquí'])]),

# ---------------------------------------------------------------- Einlass
 dict(de='Was kostet der Eintritt?', es='¿Cuánto cuesta la entrada?',
      k=[('eintritt', ['entrada']), ('kosten', ['cuesta', 'vale'])]),
 dict(de='Ich möchte ein Ticket kaufen.', es='Quiero comprar una entrada.',
      k=[('moechten', ['quiero', 'quisiera']), ('kaufen', ['comprar']),
         ('ticket', ['entrada'])]),
 dict(de='Wir sind zu zweit.', es='Somos dos.',
      k=[('wir', ['somos']), ('zwei', ['dos'])]),
 dict(de='Das ist mein Pass.', es='Este es mi pasaporte.',
      k=[('pass', ['pasaporte', 'mi pasaporte'])]),
 dict(de='Habt ihr heute offen?', es='¿Abrís hoy?',
      k=[('heute', ['hoy']), ('offen', ['abrís', 'abren', 'abierto'])]),
 dict(de='Bis wann habt ihr heute offen?', es='¿Hasta qué hora abrís hoy?',
      k=[('bis_wann', ['hasta qué hora', 'hasta cuándo']),
         ('offen', ['abrís', 'abren', 'abierto'])]),
 dict(de='Ich bin mit Freunden hier.', es='Estoy aquí con amigos.',
      k=[('freund', ['amigos', 'amigas']), ('hier', ['aquí'])]),
 dict(de='Kann ich hier bezahlen?', es='¿Puedo pagar aquí?',
      k=[('koennen', ['puedo']), ('bezahlen', ['pagar'])]),
 dict(de='Wo ist die Toilette?', es='¿Dónde está el baño?',
      k=[('toilette', ['baño', 'servicio', 'aseo']), ('wo', ['dónde'])]),
 dict(de='Meine Freunde kommen später.', es='Mis amigos vienen más tarde.',
      k=[('freund', ['amigos', 'amigas']), ('spaeter', ['más tarde', 'luego'])]),
 dict(de='Ich bin nicht von hier.', es='No soy de aquí.',
      k=[('nicht', ['no']), ('von_hier', ['de aquí'])]),

# ---------------------------------------------------------------- Bar
 dict(de='Zwei Bier, bitte.', es='Dos cervezas, por favor.',
      k=[('zwei', ['dos']), ('bier', ['cervezas', 'cerveza', 'cañas'])]),
 dict(de='Hier ist es zu laut.', es='Aquí hay mucho ruido.',
      k=[('hier', ['aquí']), ('laut', ['mucho ruido', 'ruido'])]),
 dict(de='Es ist laut, sag es bitte nochmal.',
      es='Hay mucho ruido, repítelo por favor.',
      k=[('laut', ['mucho ruido', 'ruido']),
         ('nochmal', ['repítelo', 'otra vez', 'de nuevo']),
         ('sagen', ['repítelo', 'repetir', 'dilo'])]),
 dict(de='Was möchtest du trinken?', es='¿Qué quieres tomar?',
      k=[('moechten', ['quieres']), ('trinken', ['tomar', 'beber'])]),
 dict(de='Haben Sie Wasser?', es='¿Tiene agua?',
      k=[('haben', ['tiene', 'tienen']), ('wasser', ['agua'])]),
 dict(de='Das ist zu teuer.', es='Es demasiado caro.',
      k=[('teuer', ['caro', 'demasiado caro', 'muy caro'])]),
 dict(de='Noch eins, bitte.', es='Otro, por favor.',
      k=[('noch', ['otro', 'otra', 'uno más'])]),
 dict(de='Das bezahle ich.', es='Esto lo pago yo.',
      k=[('bezahlen', ['lo pago yo', 'pago yo', 'invito'])]),
 dict(de='Wo kann ich bezahlen?', es='¿Dónde puedo pagar?',
      k=[('wo', ['dónde']), ('bezahlen', ['pagar'])]),
 dict(de='Ich nehme das Gleiche.', es='Tomo lo mismo.',
      k=[('nehmen', ['tomo', 'quiero']), ('gleiche', ['lo mismo', 'mismo'])]),
 dict(de='Was möchten Sie?', es='¿Qué desea?',
      k=[('moechten', ['desea', 'quiere']), ('was', ['qué'])]),

# ---------------------------------------------------------------- KTV / Karaoke
 dict(de='Wollen wir Karaoke singen?', es='¿Cantamos karaoke?',
      k=[('karaoke', ['karaoke']), ('singen', ['cantamos', 'cantar'])]),
 dict(de='Ich kann nicht singen.', es='No sé cantar.',
      k=[('nicht_koennen', ['no sé', 'no puedo']), ('singen', ['cantar'])]),
 dict(de='Sing du zuerst.', es='Canta tú primero.',
      k=[('zuerst', ['primero']), ('singen', ['canta', 'cantar'])]),
 dict(de='Welches Lied singst du?', es='¿Qué canción cantas?',
      k=[('singen', ['cantas', 'cantar']), ('lied', ['canción'])]),
 dict(de='Dieses Lied kenne ich!', es='¡Esta canción la conozco!',
      k=[('lied', ['canción']), ('kennen', ['conozco', 'la conozco'])]),
 dict(de='Wie viel kostet das Zimmer?', es='¿Cuánto cuesta la sala?',
      k=[('zimmer', ['sala', 'reservado']), ('kosten', ['cuesta', 'vale'])]),
 dict(de='Ein Zimmer für vier Personen.', es='Una sala para cuatro personas.',
      k=[('zimmer', ['sala', 'reservado']), ('vier', ['cuatro'])]),
 dict(de='Wir bleiben zwei Stunden.', es='Nos quedamos dos horas.',
      k=[('zwei', ['dos']), ('stunde', ['horas', 'hora'])]),
 dict(de='Du singst sehr gut!', es='¡Cantas muy bien!',
      k=[('singen', ['cantas', 'cantar']), ('gut', ['muy bien', 'bien'])]),
 dict(de='Wir singen zusammen.', es='Cantamos juntos.',
      k=[('zusammen', ['juntos', 'juntas']), ('singen', ['cantamos', 'cantar'])]),
 dict(de='Sing noch eins!', es='¡Canta otra!',
      k=[('noch', ['otra', 'otra más']), ('singen', ['canta', 'cantar'])]),

# ---------------------------------------------------------------- Näher kommen
 dict(de='Ich finde dich sehr nett.', es='Me caes muy bien.',
      k=[('finden', ['me caes', 'te encuentro']), ('nett', ['muy bien', 'simpático', 'simpática'])]),
 dict(de='Ich mag dich.', es='Me gustas.',
      k=[('moegen', ['me gustas', 'me caes bien'])]),
 dict(de='Ist das okay für dich?', es='¿Te parece bien?',
      k=[('okay', ['te parece bien', 'está bien', 'vale'])]),
 dict(de='Gehen wir woanders hin?', es='¿Vamos a otro sitio?',
      k=[('gehen', ['vamos', 'ir']), ('woanders', ['otro sitio', 'otro lado', 'otra parte'])]),
 dict(de='Ich kenne einen guten Ort.', es='Conozco un sitio bueno.',
      k=[('wissen', ['conozco', 'sé']), ('ort', ['sitio', 'lugar'])]),
 dict(de='Zu dir oder zu mir?', es='¿A tu casa o a la mía?',
      k=[('oder', ['o'])]),
 dict(de='Bier oder Wasser?', es='¿Cerveza o agua?',
      k=[('bier', ['cerveza']), ('oder', ['o'])]),
 dict(de='Ich reise morgen weiter.', es='Mañana sigo viaje.',
      k=[('morgen', ['mañana']), ('reisen', ['sigo viaje', 'me voy', 'viajo'])]),
 dict(de='Gehen wir kurz nach draußen.', es='Salimos un momento fuera.',
      k=[('gehen', ['salimos', 'salir']), ('draussen', ['fuera', 'afuera'])]),
 dict(de='Du gefällst mir sehr.', es='Me gustas mucho.',
      k=[('sehr', ['mucho']), ('moegen', ['me gustas'])]),
 dict(de='Ich suche gerade nichts Festes — ich reise bald weiter.',
      es='No busco nada serio, me voy pronto de viaje.',
      k=[('nichts_ernstes', ['nada serio', 'no busco nada serio']),
         ('reisen', ['me voy', 'de viaje', 'viaje'])]),
 dict(de='Darf ich mich hierhin setzen?', es='¿Puedo sentarme aquí?',
      k=[('duerfen', ['puedo']), ('sitzen', ['sentarme', 'sentar'])]),
 dict(de='Deine Hände sind ganz kalt.', es='Tienes las manos muy frías.',
      k=[('hand', ['manos', 'mano']), ('kalt', ['frías', 'frío'])]),
 dict(de='Ich bringe dich nach Hause.', es='Te llevo a casa.',
      k=[('bringen', ['te llevo', 'llevar']), ('nach_hause', ['a casa', 'casa'])]),
 dict(de='Soll ich dich nach Hause bringen?', es='¿Te llevo a casa?',
      k=[('bringen', ['te llevo', 'llevar']), ('nach_hause', ['a casa', 'casa'])]),
 dict(de='Wir lassen es langsam angehen.', es='Vamos despacio.',
      k=[('langsam', ['despacio', 'sin prisa', 'poco a poco'])]),
 dict(de='Ich finde dich sehr attraktiv.', es='Me pareces muy atractivo.',
      k=[('finden', ['me pareces', 'te encuentro']),
         ('attraktiv', ['atractivo', 'atractiva', 'guapo', 'guapa'])]),
 # Nachtrag 2026-08-27, siehe oben.
 dict(de='Mit dir zu reden macht Spaß.', es='Me lo paso bien hablando contigo.',
      k=[('reden', ['hablando', 'hablar']), ('spass', ['me lo paso bien', 'bien', 'a gusto'])]),
 dict(de='Du bist sehr cool.', es='Eres muy guay.',
      k=[('cool', ['guay', 'chévere', 'genial'])],
      h='„Guay" ist spanisches Alltagswort für cool. In Lateinamerika sagt man '
        'eher „chévere" (Karibik/Anden) oder „genial".'),

# ---------------------------------------------------------------- Nachtlogistik
 dict(de='Können wir zu dir?', es='¿Podemos ir a tu casa?',
      k=[('koennen', ['podemos']), ('zu_dir', ['a tu casa', 'tu casa'])]),
 dict(de='Nehmen wir ein Zimmer.', es='Cogemos una habitación.',
      k=[('zimmer', ['habitación']), ('nehmen', ['cogemos', 'tomamos'])]),
 dict(de='Das Zimmer bezahle ich.', es='La habitación la pago yo.',
      k=[('zimmer', ['habitación']), ('bezahlen', ['la pago yo', 'pago yo', 'pago'])]),
 dict(de='Ich rufe ein Taxi.', es='Llamo a un taxi.',
      k=[('rufen', ['llamo', 'llamar']), ('taxi', ['taxi'])]),
 dict(de='Ist das weit?', es='¿Está lejos?',
      k=[('weit', ['lejos'])]),
 dict(de='Mein Hotel ist nicht weit.', es='Mi hotel no está lejos.',
      k=[('hotel', ['hotel']), ('weit', ['lejos', 'no está lejos'])]),
 dict(de='Ich fahre nach Hause.', es='Me voy a casa.',
      k=[('nach_hause', ['a casa', 'me voy a casa'])]),
 dict(de='Wo wohnst du?', es='¿Dónde vives?',
      k=[('wohnen', ['vives', 'vivir']), ('wo', ['dónde'])]),
 dict(de='In meinem Hotel geht das nicht.', es='En mi hotel no se puede.',
      k=[('hotel', ['hotel', 'mi hotel']), ('nicht_moeglich', ['no se puede', 'no puede ser'])]),
 dict(de='Das Hotel will meinen Pass sehen.', es='El hotel quiere ver mi pasaporte.',
      k=[('hotel', ['hotel']), ('pass', ['pasaporte'])],
      h='Auch in Spanien müssen Hotels beim Check-in Ausweis oder Pass '
        'registrieren — das ist gesetzlich vorgeschrieben, kein Misstrauen.'),
 dict(de='Zuerst zu dir, dann zu mir.', es='Primero a tu casa, luego a la mía.',
      k=[('zuerst', ['primero']), ('dann', ['luego', 'después'])]),

# ---------------------------------------------------------------- Komplimente
 dict(de='Du siehst heute toll aus.', es='Hoy estás genial.',
      k=[('heute', ['hoy']), ('gut_aussehen', ['genial', 'estupendo', 'muy bien'])]),
 dict(de='Dein Outfit gefällt mir.', es='Me gusta tu ropa.',
      k=[('kleidung', ['ropa', 'outfit']), ('moegen', ['me gusta'])]),
 dict(de='Deine Haare sind schön.', es='Tienes un pelo precioso.',
      k=[('haare', ['pelo', 'cabello']), ('schoen', ['precioso', 'bonito', 'guapo'])]),
 dict(de='Sind deine Haare neu?', es='¿Te has cambiado el pelo?',
      k=[('haare', ['pelo', 'cabello'])]),
 dict(de='Deine Augen sind schön.', es='Tienes unos ojos preciosos.',
      k=[('auge', ['ojos']), ('schoen', ['preciosos', 'bonitos'])]),
 dict(de='Ich mag deine Stimme.', es='Me gusta tu voz.',
      k=[('moegen', ['me gusta']), ('stimme', ['voz'])]),
 dict(de='Deine Stimme ist sehr schön.', es='Tienes una voz muy bonita.',
      k=[('stimme', ['voz']), ('schoen', ['bonita', 'preciosa'])]),
 dict(de='Du tanzt wirklich gut.', es='Bailas muy bien.',
      k=[('tanzen', ['bailas', 'bailar']), ('gut', ['muy bien', 'bien'])]),
 dict(de='Danke, du aber auch.', es='Gracias, tú también.',
      k=[('danke', ['gracias']), ('auch', ['también'])]),
 dict(de='Du bist sehr süß.', es='Eres muy mona.',
      k=[('suess', ['mona', 'muy mona', 'linda'])],
      h='„Mona" ist in Spanien das übliche Wort dafür; in Lateinamerika sagt '
        'man eher „linda". „Mono/mona" gilt für Menschen als Kompliment, nicht '
        'als Tiervergleich.'),
 dict(de='Du bist groß.', es='Eres muy alto.',
      k=[('gross', ['alto', 'muy alto'])]),
 dict(de='Du hast Klasse.', es='Tienes mucha clase.',
      k=[('klasse', ['clase', 'mucha clase'])]),
 dict(de='Deine Freundin hat Klasse.', es='Tu amiga tiene mucha clase.',
      k=[('freundin', ['amiga', 'tu amiga']), ('klasse', ['clase', 'mucha clase'])]),
 # Nachtrag 2026-08-27, siehe oben.
 dict(de='Du hast ein süßes Lächeln.', es='Tienes una sonrisa preciosa.',
      k=[('laecheln', ['sonrisa']), ('suess', ['preciosa', 'bonita', 'muy bonita'])]),
 dict(de='Deine Frisur ist sehr schön.', es='Me gusta mucho tu peinado.',
      k=[('frisur', ['peinado', 'corte']), ('schoen', ['me gusta', 'muy bonito', 'precioso'])]),

# ---------------------------------------------------------------- Sicherheit
 dict(de='Ich gehe jetzt.', es='Me voy ya.',
      k=[('gehen', ['me voy', 'ya me voy'])]),
 dict(de='Ich möchte nach Hause.', es='Quiero irme a casa.',
      k=[('moechten', ['quiero']), ('nach_hause', ['a casa', 'irme a casa'])]),
 dict(de='Kannst du mir helfen?', es='¿Me puedes ayudar?',
      k=[('koennen', ['puedes']), ('helfen', ['ayudar', 'me puedes ayudar'])]),
 dict(de='Mein Freund wartet draußen auf mich.', es='Mi novio me espera fuera.',
      k=[('fester_freund', ['novio', 'mi novio']), ('warten', ['espera', 'esperando'])]),
 dict(de='Meine Freundin wartet draußen auf mich.', es='Mi novia me espera fuera.',
      k=[('feste_freundin', ['novia', 'mi novia']), ('warten', ['espera', 'esperando'])]),
 dict(de='Lass mich in Ruhe.', es='Déjame en paz.',
      k=[('in_ruhe', ['déjame en paz', 'en paz', 'déjame'])]),
 dict(de='Ich habe kein Interesse. Geh bitte weg.',
      es='No me interesa. Vete, por favor.',
      k=[('kein_interesse', ['no me interesa', 'no tengo interés']),
         ('weggehen', ['vete', 'márchate'])]),
 dict(de='Die Person dort lässt mich nicht in Ruhe.',
      es='Esa persona no me deja en paz.',
      k=[('person', ['persona', 'esa persona']),
         ('in_ruhe', ['no me deja en paz', 'en paz'])]),
 dict(de='Bitte tu so, als würden wir uns kennen.',
      es='Haz como si nos conociéramos, por favor.',
      k=[('so_tun', ['haz como si', 'finge']),
         ('kennen', ['nos conociéramos', 'conocernos'])]),
 dict(de='Bitte pass kurz auf mein Glas auf.',
      es='¿Me vigilas la copa un momento?',
      k=[('aufpassen', ['vigilas', 'vigila', 'cuidas']),
         ('glas', ['copa', 'vaso'])]),
 dict(de='Bitte rufen Sie die Polizei.', es='Llame a la policía, por favor.',
      k=[('rufen', ['llame', 'llamar']), ('polizei', ['policía'])]),
 dict(de='Entschuldigung, ich wusste nicht, dass ihr zusammen seid.',
      es='Perdona, no sabía que estabais juntos.',
      k=[('entschuldigung', ['perdona', 'perdón', 'disculpa']),
         ('wissen', ['no sabía', 'sabía'])]),
 dict(de='Mir geht es nicht gut.', es='No me encuentro bien.',
      k=[('nicht', ['no']), ('wohl', ['me encuentro bien', 'bien', 'me siento bien'])]),

# ---------------------------------------------------------------- Verloren
 dict(de='Ich finde meine Freunde nicht.', es='No encuentro a mis amigos.',
      k=[('finden', ['no encuentro', 'encontrar']), ('freund', ['amigos', 'amigas'])]),
 dict(de='Hast du meinen Freund gesehen?', es='¿Has visto a mi amigo?',
      k=[('sehen', ['has visto', 'visto']), ('freund', ['amigo', 'mi amigo'])]),
 dict(de='Wo bist du?', es='¿Dónde estás?',
      k=[('wo', ['dónde'])]),
 dict(de='Ich warte hier auf dich.', es='Te espero aquí.',
      k=[('hier', ['aquí']), ('warten', ['te espero', 'esperar'])]),
 dict(de='Mein Handy hat keinen Strom mehr.', es='Mi móvil se ha quedado sin batería.',
      k=[('handy', ['móvil', 'celular', 'teléfono']),
         ('leer', ['sin batería', 'batería', 'se ha apagado'])]),
 dict(de='Wo kann ich mein Handy laden?', es='¿Dónde puedo cargar el móvil?',
      k=[('wo', ['dónde']), ('laden', ['cargar'])]),
 dict(de='Ich muss mein Handy laden.', es='Tengo que cargar el móvil.',
      k=[('muessen', ['tengo que']), ('laden', ['cargar'])]),
 dict(de='Kann ich dein Handy benutzen?', es='¿Puedo usar tu móvil?',
      k=[('benutzen', ['usar', 'utilizar']),
         ('handy', ['móvil', 'celular', 'teléfono'])]),
 dict(de='Ich rufe dich an.', es='Te llamo.',
      k=[('telefonieren', ['te llamo', 'llamar'])]),
 dict(de='Wir treffen uns draußen.', es='Nos vemos fuera.',
      k=[('draussen', ['fuera', 'afuera']), ('treffen', ['nos vemos', 'vernos'])]),
 dict(de='Bis morgen!', es='¡Hasta mañana!',
      k=[('morgen', ['mañana']), ('treffen', ['hasta mañana', 'hasta'])]),
 dict(de='Ich nehme ein Taxi nach Hause.', es='Cojo un taxi a casa.',
      k=[('taxi', ['taxi']), ('nach_hause', ['a casa', 'casa'])]),
 dict(de='Entschuldigung, ich habe meine Freunde verloren und mein Handy ist leer. Können Sie mir helfen?',
      es='Perdone, he perdido a mis amigos y mi móvil no tiene batería. ¿Me puede ayudar?',
      k=[('verloren', ['he perdido', 'perdido']),
         ('helfen', ['ayudar', 'me puede ayudar'])]),
]

# Die 8 bewusst ausgelassenen deutschen Saetze - als Liste, damit der Import
# pruefen kann, dass wirklich nur diese fehlen (statt dass eine Uebersetzung
# schlicht vergessen wurde).
AUSGELASSEN = [
    'Bist du aus China?',
    'Lass uns WeChat austauschen.',
    'Mein Chinesisch ist nicht so gut.',
    'Ich zahle mit WeChat.',
    'Du bist schlank.',
    'Du hast eine sehr helle Haut.',
    'Ach wo! (bescheidene Antwort auf ein Lob)',
    'Nein, nein. (auf ein Lob)',
    # Nachtrag 2026-08-27: kam mit der Zusammenfuehrung ins Deutsche, bleibt
    # aber aus demselben Grund draussen wie die beiden WeChat-Saetze - der
    # QR-Code-Scan ist chinesische Alltagsinfrastruktur ohne Gegenstueck.
    'Soll ich dich scannen?',
]
