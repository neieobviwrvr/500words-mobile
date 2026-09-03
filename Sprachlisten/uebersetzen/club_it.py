# -*- coding: utf-8 -*-
"""Club + Nightlife auf Italienisch - die groesste Kategorie (138 Saetze).

Diese Kategorie wurde urspruenglich FUER Chinesisch geschrieben (siehe
CLAUDE.md, "Club + Nightlife begonnen") und ist deshalb die einzige, in der
nennenswert viel nicht mechanisch uebertragbar ist.

**SECHS SAETZE FALLEN RAUS, fuenf davon ersetzt (`neu=True`):**

  Bist du aus China?          Zielland im Satz.
  Mein Chinesisch ist nicht   Zielsprache im Satz.
  so gut.
  Lass uns WeChat             WeChat gibt es hier nicht. Im Club tauscht
  austauschen.                man Instagram - nicht die Telefonnummer, das
                              wirkt schnell zu direkt.
  Ich zahle mit WeChat.       Bezahlt wird mit Karte.
  Soll ich dich scannen?      Der QR-Scan ist eine WeChat-Geste. Das
                              Gegenstueck ist "folge ich dir?" auf
                              Instagram.

  Du hast eine sehr helle     **Ersatzlos ausgelassen, und zwar bewusst.**
  Haut.                       In China ein echtes Kompliment; in Italien
                              waere es keins - dort gilt eher gebraeunte
                              Haut als attraktiv ("sei abbronzata"). Diesen
                              Satz zu uebersetzen hiesse, einem Deutschen
                              ein Kompliment beizubringen, das im Zielland
                              danebengeht. Dasselbe Muster wie bei der
                              Notrufnummer: lieber kein Satz als ein
                              schaedlicher. **Simon sollte das
                              gegenlesen** - im Chinesischen war die
                              Aufnahme dieses Satzes ausdruecklich seine
                              Entscheidung.

**132 uebersetzt, 6 ausgelassen, 5 neu.**

**Was NICHT angepasst wurde, obwohl es chinesisch klingt:** das
KTV-Szenario (Karaoke im Privatzimmer). Karaoke gibt es in Italien, meist
als Bar statt als Zimmer - die Saetze funktionieren dort, sind nur
seltener. Ein Hinweis am Zimmersatz sagt das. Ein Satz, den man selten
braucht, ist kein falscher Satz.

**Geschlechtsvarianten** (`addressing` im Master) kommen automatisch aus
den Metadaten mit - diese Datei setzt sie nicht.

**Nicht von Muttersprachlern geprueft.** Bei einer Kategorie mit
Anmach-Saetzen und Sicherheitssaetzen faellt das besonders ins Gewicht.
"""

KATEGORIEN = ['club_nightlife']

SAETZE = [

# --------------------------------------------------------- club_ansprechen
 dict(de='Wie heißt du?', it='Come ti chiami?',
      k=[('wie_heisst', ['come ti chiami', 'il tuo nome'])]),
 dict(de='Gefällt es dir hier auch?', it='Ti piace qui?',
      k=[('gefaellt', ['ti piace qui', 'ti piace'])]),
 dict(de='Ich sehe dir gern beim Tanzen zu.', it='Mi piace guardarti ballare.',
      k=[('tanzen_zusehen', ['guardarti ballare', 'ballare'])]),
 dict(de='Du bist sehr hübsch.', it='Sei molto carina.',
      k=[('huebsch', ['molto carina', 'carina', 'bella'])]),
 dict(de='Du siehst gut aus.', it='Stai molto bene.',
      k=[('gut_aussehen', ['stai bene', 'stai molto bene', 'bello'])]),
 dict(de='Bist du Single?', it='Sei single?',
      k=[('single', ['single'])]),
 dict(de='Ist dein Freund auch hier?', it='C\'è anche il tuo ragazzo?',
      k=[('freund_hier', ['il tuo ragazzo', 'ragazzo'])]),
 dict(de='Ist deine Freundin auch hier?', it='C\'è anche la tua ragazza?',
      k=[('freundin_hier', ['la tua ragazza', 'ragazza'])]),
 dict(de='Wollen wir zusammen tanzen?', it='Balliamo insieme?',
      k=[('tanzen', ['balliamo', 'ballare', 'insieme'])]),
 dict(de='Hier ist es zu laut. Gehen wir nach draußen?', it='Qui c\'è troppo rumore. Usciamo un attimo?',
      k=[('zu_laut', ['troppo rumore', 'rumore']),
         ('nach_draussen', ['usciamo', 'fuori'])]),
 dict(de='Die Musik hier ist gut, oder?', it='Bella musica, vero?',
      k=[('musik_gut', ['bella musica', 'musica'])]),
 dict(de='Kommst du oft hierher?', it='Vieni spesso qui?',
      k=[('oft_hier', ['vieni spesso', 'spesso'])]),
 dict(de='Bist du von hier?', it='Sei di qui?',
      k=[('von_hier', ['sei di qui', 'di qui'])]),
 dict(de='Bist du aus Italien?', it='Sei italiana?',
      neu=True, sz='club_ansprechen',
      k=[('aus_land', ['italiana', 'italiano', 'italia'])]),
 dict(de='Mein Italienisch ist nicht so gut.', it='Il mio italiano non è molto buono.',
      neu=True, sz='club_ansprechen',
      k=[('sprache_nicht_gut', ['il mio italiano', 'non è molto buono', 'italiano'])]),
 dict(de='Lass uns Instagram austauschen.', it='Ci scambiamo Instagram?',
      neu=True, sz='club_ansprechen',
      k=[('kontakt_tauschen', ['instagram', 'ci scambiamo'])],
      h='Im Club tauscht man Instagram, nicht die Telefonnummer — nach der '
        'Nummer zu fragen wirkt schnell zu direkt. WhatsApp kommt später, '
        'wenn man sich kennt.'),
 dict(de='Soll ich dir folgen?', it='Ti seguo?',
      neu=True, sz='club_ansprechen',
      k=[('folgen', ['ti seguo', 'seguire', 'seguo'])]),

# ---------------------------------------------------------------- club_bar
 dict(de='Zwei Bier, bitte.', it='Due birre, per favore.',
      k=[('zwei_bier', ['due birre', 'birre', 'birra'])]),
 dict(de='Hier ist es zu laut.', it='Qui c\'è troppo rumore.',
      k=[('zu_laut', ['troppo rumore', 'rumore'])]),
 dict(de='Es ist laut, sag es bitte nochmal.', it='C\'è rumore, puoi ripetere?',
      k=[('nochmal', ['ripetere', 'ripeti'])]),
 dict(de='Was möchtest du trinken?', it='Cosa vuoi bere?',
      k=[('trinken_frage', ['cosa vuoi bere', 'bere'])]),
 dict(de='Haben Sie Wasser?', it='Avete acqua?',
      k=[('wasser', ['acqua'])]),
 dict(de='Das ist zu teuer.', it='È troppo caro.',
      k=[('zu_teuer', ['troppo caro'])]),
 dict(de='Noch eins, bitte.', it='Un altro, per favore.',
      k=[('noch_eins', ['un altro', 'ancora uno'])]),
 dict(de='Das bezahle ich.', it='Offro io.',
      k=[('ich_zahle', ['offro io', 'offro', 'pago io'])]),
 dict(de='Wo kann ich bezahlen?', it='Dove posso pagare?',
      k=[('wo_bezahlen', ['dove posso pagare', 'pagare'])]),
 dict(de='Ich nehme das Gleiche.', it='Prendo lo stesso.',
      k=[('gleiche', ['lo stesso', 'stesso'])]),
 dict(de='Was möchten Sie?', it='Cosa desidera?',
      k=[('was_moechten', ['cosa desidera', 'desidera'])]),
 dict(de='Ich zahle mit Karte.', it='Pago con la carta.',
      neu=True, sz='club_bar',
      k=[('karte_zahlen', ['con la carta', 'carta'])]),

# ------------------------------------------------------------ club_einlass
 dict(de='Was kostet der Eintritt?', it='Quanto costa l\'ingresso?',
      k=[('eintritt', ['ingresso'])]),
 dict(de='Ich möchte ein Ticket kaufen.', it='Vorrei comprare un biglietto.',
      k=[('ticket', ['biglietto'])]),
 dict(de='Wir sind zu zweit.', it='Siamo in due.',
      k=[('zu_zweit', ['siamo in due', 'in due', 'due'])]),
 dict(de='Das ist mein Pass.', it='Questo è il mio passaporto.',
      k=[('pass', ['passaporto'])],
      h='Am Einlass reicht meist der Ausweis zum Altersnachweis. Manche '
        'Clubs verlangen eine Mitgliedskarte („tessera") — das ist eine '
        'rechtliche Konstruktion, kein Abweisen.'),
 dict(de='Habt ihr heute offen?', it='Siete aperti stasera?',
      k=[('offen', ['aperti', 'aperto'])]),
 dict(de='Bis wann habt ihr heute offen?', it='Fino a che ora siete aperti?',
      k=[('bis_wann', ['fino a che ora', 'fino a quando'])]),
 dict(de='Ich bin mit Freunden hier.', it='Sono qui con degli amici.',
      k=[('mit_freunden', ['con degli amici', 'con amici', 'amici'])]),
 dict(de='Kann ich hier bezahlen?', it='Posso pagare qui?',
      k=[('hier_bezahlen', ['posso pagare qui', 'pagare qui'])]),
 dict(de='Wo ist die Toilette?', it='Dov\'è il bagno?',
      k=[('toilette', ['bagno', 'toilette'])]),
 dict(de='Meine Freunde kommen später.', it='I miei amici arrivano più tardi.',
      k=[('freunde_spaeter', ['arrivano più tardi', 'più tardi', 'amici'])]),
 dict(de='Ich bin nicht von hier.', it='Non sono di qui.',
      k=[('nicht_von_hier', ['non sono di qui', 'non di qui'])]),

# -------------------------------------------------------- club_komplimente
 dict(de='Du siehst heute toll aus.', it='Stai benissimo stasera.',
      k=[('toll_aussehen', ['stai benissimo', 'benissimo', 'stai bene'])]),
 dict(de='Dein Outfit gefällt mir.', it='Mi piace come sei vestita.',
      k=[('outfit', ['come sei vestita', 'vestita', 'outfit'])]),
 dict(de='Deine Haare sind schön.', it='Hai dei bei capelli.',
      k=[('haare', ['bei capelli', 'capelli'])]),
 dict(de='Sind deine Haare neu?', it='Hai cambiato i capelli?',
      k=[('haare_neu', ['cambiato i capelli', 'capelli'])],
      h='In Italien fällt so etwas eher unter Freunden — einer Fremden im '
        'Club zu sagen, dass ihr die Haare stehen, ist okay; zu bemerken, '
        'dass sie NEU sind, setzt voraus, dass man sie vorher kannte.'),
 dict(de='Du bist sehr süß.', it='Sei molto dolce.',
      k=[('suess', ['molto dolce', 'dolce', 'carina'])],
      h='„Dolce" lobt das Wesen, „carina" das Aussehen. Beides ist '
        'freundlich, „carina" aber deutlicher als Anmache lesbar.'),
 dict(de='Du bist groß.', it='Sei alto.',
      k=[('gross', ['alto'])]),
 dict(de='Du bist schlank.', it='Sei snella.',
      k=[('schlank', ['snella', 'snello'])],
      h='In China ein Standardkompliment. In Italien ist es zwar positiv '
        'gemeint, aber Bemerkungen über den Körper einer Fremden gelten '
        'schnell als übergriffig — „stai benissimo" ist die sichere '
        'Variante.'),
 dict(de='Deine Augen sind schön.', it='Hai degli occhi bellissimi.',
      k=[('augen', ['occhi', 'begli occhi'])]),
 dict(de='Du hast Klasse.', it='Hai molto stile.',
      k=[('klasse', ['molto stile', 'stile', 'classe'])],
      h='„Stile" ist in Italien ein hohes Lob und bezieht sich nicht nur '
        'auf Kleidung, sondern auf Auftreten insgesamt — und es ist das '
        'sicherste Kompliment, weil es nicht den Körper meint.'),
 dict(de='Deine Freundin hat Klasse.', it='La tua amica ha molto stile.',
      k=[('freundin_klasse', ['la tua amica', 'stile'])]),
 dict(de='Ich mag deine Stimme.', it='Mi piace la tua voce.',
      k=[('stimme', ['la tua voce', 'voce'])]),
 dict(de='Deine Stimme ist sehr schön.', it='Hai una voce bellissima.',
      k=[('stimme_schoen', ['voce bellissima', 'voce'])]),
 dict(de='Du tanzt wirklich gut.', it='Balli davvero bene.',
      k=[('tanzt_gut', ['balli bene', 'balli davvero bene', 'balli'])]),
 dict(de='Ach wo! (bescheidene Antwort auf ein Lob)', it='Ma va\'!',
      k=[('bescheiden', ['ma va', 'figurati', 'macché'])],
      h='Anders als im Chinesischen wird ein Kompliment in Italien '
        'meistens ANGENOMMEN — „grazie" ist die normale Antwort. „Ma va\'!" '
        'ist die spielerische Abwehr unter Freunden, keine Pflicht.'),
 dict(de='Nein, nein. (auf ein Lob)', it='No, dai!',
      k=[('abwehr', ['no dai', 'ma no', 'dai'])]),
 dict(de='Danke, du aber auch.', it='Grazie, anche tu.',
      k=[('danke_auch', ['grazie anche tu', 'anche tu'])]),
 dict(de='Du hast ein süßes Lächeln.', it='Hai un bel sorriso.',
      k=[('laecheln', ['bel sorriso', 'sorriso'])]),
 dict(de='Deine Frisur ist sehr schön.', it='Ti sta benissimo questo taglio.',
      k=[('frisur', ['questo taglio', 'taglio', 'pettinatura'])]),

# ---------------------------------------------------------------- club_ktv
 dict(de='Wollen wir Karaoke singen?', it='Andiamo a fare karaoke?',
      k=[('karaoke', ['karaoke'])],
      h='Karaoke ist in Italien eher eine Bar-Sache als ein eigenes '
        'Privatzimmer — man singt vor allen, nicht im geschlossenen Raum '
        'wie im chinesischen KTV.'),
 dict(de='Ich kann nicht singen.', it='Non so cantare.',
      k=[('nicht_singen', ['non so cantare', 'cantare'])]),
 dict(de='Sing du zuerst.', it='Canta tu per primo.',
      k=[('du_zuerst', ['canta tu', 'per primo', 'prima tu'])]),
 dict(de='Welches Lied singst du?', it='Che canzone canti?',
      k=[('welches_lied', ['che canzone', 'canzone'])]),
 dict(de='Dieses Lied kenne ich!', it='Questa canzone la conosco!',
      k=[('kenne_lied', ['la conosco', 'conosco', 'canzone'])]),
 dict(de='Ein Zimmer für vier Personen.', it='Una sala per quattro persone.',
      k=[('zimmer_vier', ['sala per quattro', 'per quattro', 'quattro'])],
      h='Private Karaoke-Räume gibt es in Italien nur vereinzelt — in '
        'großen Städten und meist in asiatisch geprägten Lokalen.'),
 dict(de='Wie viel kostet das Zimmer?', it='Quanto costa la sala?',
      k=[('zimmer_preis', ['quanto costa la sala', 'sala'])]),
 dict(de='Wir bleiben zwei Stunden.', it='Restiamo due ore.',
      k=[('zwei_stunden', ['due ore', 'restiamo due ore'])]),
 dict(de='Du singst sehr gut!', it='Canti benissimo!',
      k=[('singst_gut', ['canti benissimo', 'canti bene', 'canti'])]),
 dict(de='Wir singen zusammen.', it='Cantiamo insieme.',
      k=[('zusammen_singen', ['cantiamo insieme', 'insieme'])]),
 dict(de='Sing noch eins!', it='Cantane un\'altra!',
      k=[('noch_eins', ['un\'altra', 'ancora una'])]),

# ------------------------------------------------------- club_nachtlogistik
 dict(de='Können wir zu dir?', it='Possiamo andare da te?',
      k=[('zu_dir', ['da te', 'andare da te'])]),
 dict(de='In meinem Hotel geht das nicht.', it='Nel mio hotel non si può.',
      k=[('hotel_nicht', ['non si può', 'nel mio hotel', 'hotel'])],
      h='Italienische Hotels müssen alle Übernachtungsgäste mit Ausweis '
        'melden — jemanden unangemeldet mit aufs Zimmer zu nehmen, ist '
        'deshalb oft nicht erlaubt.'),
 dict(de='Nehmen wir ein Zimmer.', it='Prendiamo una stanza.',
      k=[('zimmer_nehmen', ['prendiamo una stanza', 'stanza', 'camera'])]),
 dict(de='Das Zimmer bezahle ich.', it='La stanza la pago io.',
      k=[('zimmer_zahlen', ['la pago io', 'pago io', 'stanza'])]),
 dict(de='Das Hotel will meinen Pass sehen.', it='L\'hotel vuole vedere il passaporto.',
      k=[('pass_hotel', ['vuole vedere il passaporto', 'passaporto'])]),
 dict(de='Ich rufe ein Taxi.', it='Chiamo un taxi.',
      k=[('taxi', ['taxi'])]),
 dict(de='Zuerst zu dir, dann zu mir.', it='Prima da te, poi da me.',
      k=[('zuerst_dann', ['prima da te', 'poi da me'])]),
 dict(de='Wo wohnst du?', it='Dove abiti?',
      k=[('wo_wohnst', ['dove abiti', 'dove vivi'])]),
 dict(de='Ist das weit?', it='È lontano?',
      k=[('weit', ['lontano'])]),
 dict(de='Mein Hotel ist nicht weit.', it='Il mio hotel non è lontano.',
      k=[('hotel_nah', ['non è lontano', 'hotel'])]),
 dict(de='Ich fahre nach Hause.', it='Vado a casa.',
      k=[('nach_hause', ['vado a casa', 'a casa'])]),

# ------------------------------------------------------- club_naeherkommen
 dict(de='Ich finde dich sehr nett.', it='Mi sei molto simpatica.',
      k=[('nett_finden', ['mi sei simpatica', 'simpatica', 'simpatico'])]),
 dict(de='Ich mag dich.', it='Mi piaci.',
      k=[('mag_dich', ['mi piaci'])],
      h='„Mi piaci" ist deutlich mehr als „du bist mir sympathisch" — es '
        'heißt, dass du an ihr oder ihm interessiert bist. „Mi sei '
        'simpatica" ist die harmlose Variante.'),
 dict(de='Ist das okay für dich?', it='Per te va bene?',
      k=[('okay', ['va bene', 'per te va bene'])]),
 dict(de='Gehen wir woanders hin?', it='Andiamo da un\'altra parte?',
      k=[('woanders', ['da un\'altra parte', 'altrove'])]),
 dict(de='Ich kenne einen guten Ort.', it='Conosco un bel posto.',
      k=[('guter_ort', ['un bel posto', 'posto'])]),
 dict(de='Zu dir oder zu mir?', it='Da te o da me?',
      k=[('zu_dir_zu_mir', ['da te o da me', 'da te', 'da me'])]),
 dict(de='Bier oder Wasser?', it='Birra o acqua?',
      k=[('bier_wasser', ['birra', 'acqua'])]),
 dict(de='Ich reise morgen weiter.', it='Domani riparto.',
      k=[('weiterreisen', ['domani riparto', 'riparto', 'parto'])]),
 dict(de='Gehen wir kurz nach draußen.', it='Usciamo un attimo.',
      k=[('nach_draussen', ['usciamo', 'fuori', 'un attimo'])]),
 dict(de='Du gefällst mir sehr.', it='Mi piaci molto.',
      k=[('gefaellst_mir', ['mi piaci molto', 'mi piaci'])]),
 dict(de='Du bist sehr cool.', it='Sei forte.',
      k=[('cool', ['sei forte', 'forte', 'figo'])]),
 dict(de='Ich suche gerade nichts Festes — ich reise bald weiter.',
      it='Non cerco niente di serio, riparto presto.',
      k=[('nichts_festes', ['niente di serio', 'non cerco niente']),
         ('weiterreisen', ['riparto presto', 'riparto'])]),
 dict(de='Darf ich mich hierhin setzen?', it='Posso sedermi qui?',
      k=[('setzen', ['posso sedermi', 'sedermi'])]),
 dict(de='Deine Hände sind ganz kalt.', it='Hai le mani freddissime.',
      k=[('haende_kalt', ['mani freddissime', 'mani fredde', 'mani'])]),
 dict(de='Ich bringe dich nach Hause.', it='Ti accompagno a casa.',
      k=[('nach_hause_bringen', ['ti accompagno', 'accompagno a casa'])],
      h='„Accompagnare" heißt begleiten und ist die höfliche Form. Wichtig '
        'ist die FRAGE (nächster Satz) statt der Ansage — ungefragt '
        'mitzugehen wirkt schnell bedrängend.'),
 dict(de='Soll ich dich nach Hause bringen?', it='Ti accompagno a casa?',
      k=[('nach_hause_frage', ['ti accompagno a casa', 'ti accompagno'])]),
 dict(de='Wir lassen es langsam angehen.', it='Andiamoci piano.',
      k=[('langsam', ['andiamoci piano', 'piano', 'con calma'])]),
 dict(de='Ich finde dich sehr attraktiv.', it='Ti trovo molto attraente.',
      k=[('attraktiv', ['molto attraente', 'attraente'])]),
 dict(de='Mit dir zu reden macht Spaß.', it='Mi diverto a parlare con te.',
      k=[('reden_spass', ['mi diverto a parlare', 'parlare con te'])]),

# -------------------------------------------------------- club_sicherheit
 dict(de='Ich gehe jetzt.', it='Adesso vado.',
      k=[('gehe_jetzt', ['adesso vado', 'vado'])]),
 dict(de='Mir geht es nicht gut.', it='Non mi sento bene.',
      k=[('nicht_gut', ['non mi sento bene', 'non sto bene'])]),
 dict(de='Ich möchte nach Hause.', it='Voglio andare a casa.',
      k=[('nach_hause', ['andare a casa', 'a casa'])]),
 dict(de='Kannst du mir helfen?', it='Mi puoi aiutare?',
      k=[('helfen', ['mi puoi aiutare', 'aiutare', 'aiutami'])]),
 dict(de='Mein Freund wartet draußen auf mich.', it='Il mio ragazzo mi aspetta fuori.',
      k=[('freund_wartet', ['il mio ragazzo', 'mi aspetta fuori', 'aspetta'])]),
 dict(de='Meine Freundin wartet draußen auf mich.', it='La mia ragazza mi aspetta fuori.',
      k=[('freundin_wartet', ['la mia ragazza', 'mi aspetta fuori', 'aspetta'])]),
 dict(de='Lass mich in Ruhe.', it='Lasciami in pace.',
      k=[('in_ruhe', ['lasciami in pace', 'in pace'])]),
 dict(de='Ich habe kein Interesse. Geh bitte weg.', it='Non mi interessa. Vattene, per favore.',
      k=[('kein_interesse', ['non mi interessa', 'non interessa']),
         ('weggehen', ['vattene', 'vai via'])]),
 dict(de='Die Person dort lässt mich nicht in Ruhe.', it='Quella persona non mi lascia in pace.',
      k=[('person_stoert', ['non mi lascia in pace', 'quella persona', 'mi dà fastidio'])],
      h='In vielen italienischen Clubs gibt es geschultes Personal für '
        'genau solche Situationen — die Bar ist die richtige Anlaufstelle, '
        'nicht der Ausgang.'),
 dict(de='Bitte tu so, als würden wir uns kennen.', it='Fai finta che ci conosciamo, per favore.',
      k=[('so_tun', ['fai finta', 'finta']),
         ('kennen', ['ci conosciamo', 'conosciamo'])]),
 dict(de='Bitte pass kurz auf mein Glas auf.', it='Mi tieni d\'occhio il bicchiere?',
      k=[('glas_aufpassen', ['tieni d\'occhio', 'il bicchiere', 'bicchiere'])]),
 dict(de='Bitte rufen Sie die Polizei.', it='Chiami la polizia, per favore.',
      k=[('polizei', ['polizia'])]),
 dict(de='Entschuldigung, ich wusste nicht, dass ihr zusammen seid.',
      it='Scusa, non sapevo che steste insieme.',
      k=[('nicht_gewusst', ['non sapevo', 'scusa']),
         ('zusammen', ['insieme', 'steste insieme'])]),

# ------------------------------------------------------- club_trinkkultur
 dict(de='Prost!', it='Cin cin!',
      k=[('prost', ['cin cin', 'salute'])],
      h='„Cin cin" beim Anstoßen, „salute" etwas förmlicher. Und: beim '
        'Anstoßen schaut man sich in die Augen.'),
 dict(de='Immer mit der Ruhe - trink so viel du magst.', it='Con calma, bevi quanto vuoi.',
      k=[('ruhe', ['con calma', 'calma']),
         ('so_viel', ['quanto vuoi', 'quanto ti va'])]),
 dict(de='Ich trinke langsam.', it='Bevo piano.',
      k=[('langsam_trinken', ['bevo piano', 'piano'])]),
 dict(de='Ich kann nicht mehr trinken.', it='Non posso più bere.',
      k=[('nicht_mehr', ['non posso più bere', 'non posso più'])]),
 dict(de='Ich muss morgen arbeiten.', it='Domani devo lavorare.',
      k=[('morgen_arbeiten', ['domani devo lavorare', 'devo lavorare'])]),
 dict(de='Ich trinke nur ein bisschen.', it='Bevo solo un po\'.',
      k=[('nur_bisschen', ['solo un po\'', 'un po\''])]),
 dict(de='Was trinkst du?', it='Cosa bevi?',
      k=[('was_trinkst', ['cosa bevi', 'bevi'])]),
 dict(de='Ich möchte noch ein Bier.', it='Vorrei un\'altra birra.',
      k=[('noch_bier', ['un\'altra birra', 'birra'])]),
 dict(de='Trinken wir zusammen!', it='Beviamo insieme!',
      k=[('zusammen_trinken', ['beviamo insieme', 'insieme'])]),
 dict(de='Ich trinke keinen Alkohol.', it='Non bevo alcolici.',
      k=[('kein_alkohol', ['non bevo alcolici', 'non bevo', 'alcolici'])]),
 dict(de='Was kostet das?', it='Quanto costa?',
      k=[('kosten', ['quanto costa'])]),
 dict(de='Ich lade dich ein.', it='Offro io.',
      k=[('einladen', ['offro io', 'offro'])]),

# ---------------------------------------------------------- club_verloren
 dict(de='Ich finde meine Freunde nicht.', it='Non trovo i miei amici.',
      k=[('freunde_weg', ['non trovo i miei amici', 'non trovo', 'amici'])]),
 dict(de='Hast du meinen Freund gesehen?', it='Hai visto il mio amico?',
      k=[('gesehen', ['hai visto', 'il mio amico'])]),
 dict(de='Wo bist du?', it='Dove sei?',
      k=[('wo_bist', ['dove sei'])]),
 dict(de='Ich warte hier auf dich.', it='Ti aspetto qui.',
      k=[('warte_hier', ['ti aspetto qui', 'ti aspetto'])]),
 dict(de='Mein Handy hat keinen Strom mehr.', it='Il telefono è scarico.',
      k=[('handy_leer', ['il telefono è scarico', 'scarico', 'telefono'])]),
 dict(de='Wo kann ich mein Handy laden?', it='Dove posso caricare il telefono?',
      k=[('handy_laden', ['caricare il telefono', 'caricare', 'telefono'])]),
 dict(de='Ich muss mein Handy laden.', it='Devo caricare il telefono.',
      k=[('handy_laden', ['devo caricare', 'caricare il telefono'])]),
 dict(de='Kann ich dein Handy benutzen?', it='Posso usare il tuo telefono?',
      k=[('handy_benutzen', ['usare il tuo telefono', 'il tuo telefono'])]),
 dict(de='Ich rufe dich an.', it='Ti chiamo.',
      k=[('anrufen', ['ti chiamo', 'chiamo'])]),
 dict(de='Wir treffen uns draußen.', it='Ci vediamo fuori.',
      k=[('treffen_draussen', ['ci vediamo fuori', 'fuori'])]),
 dict(de='Bis morgen!', it='A domani!',
      k=[('bis_morgen', ['a domani', 'domani'])]),
 dict(de='Ich nehme ein Taxi nach Hause.', it='Prendo un taxi per tornare a casa.',
      k=[('taxi_heim', ['prendo un taxi', 'taxi', 'a casa'])]),
 dict(de='Entschuldigung, ich habe meine Freunde verloren und mein Handy ist leer. Können Sie mir helfen?',
      it='Scusi, ho perso i miei amici e il telefono è scarico. Può aiutarmi?',
      k=[('freunde_verloren', ['ho perso i miei amici', 'perso gli amici']),
         ('handy_leer', ['telefono è scarico', 'scarico']),
         ('helfen', ['può aiutarmi', 'aiutarmi'])]),
]

AUSGELASSEN = [
    # Zielland bzw. Zielsprache steht im Satz - ersetzt durch die
    # italienischen Fassungen (neu=True oben).
    'Bist du aus China?',
    'Mein Chinesisch ist nicht so gut.',
    # WeChat gibt es in Italien nicht - ersetzt durch Instagram bzw. Karte.
    'Lass uns WeChat austauschen.',
    'Ich zahle mit WeChat.',
    'Soll ich dich scannen?',
    # ERSATZLOS ausgelassen: helle Haut ist in China ein Kompliment, in
    # Italien nicht - dort gilt eher Braeune als attraktiv. Den Satz zu
    # uebersetzen hiesse, ein Kompliment beizubringen, das danebengeht.
    # Siehe Kopfkommentar; Simon sollte das gegenlesen.
    'Du hast eine sehr helle Haut.',
]
