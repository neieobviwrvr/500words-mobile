# -*- coding: utf-8 -*-
"""Club + Nightlife auf Norwegisch (Bokmaal) - 138 Saetze.

Diese Kategorie wurde urspruenglich FUER Chinesisch geschrieben und ist
deshalb die einzige, in der viel nicht mechanisch uebertragbar ist.

**SECHS SAETZE FALLEN RAUS, fuenf davon ersetzt (`neu=True`):**

  Bist du aus China?          Zielland im Satz.
  Mein Chinesisch ist nicht   Zielsprache im Satz.
  so gut.
  Lass uns WeChat             In Norwegen laeuft alles ueber Snapchat -
  austauschen.                unter Zwanzigjaehrigen mehr als ueber
                              Instagram, und deutlich mehr als ueber die
                              Telefonnummer.
  Soll ich dich scannen?      Snapchat hat mit dem Snapcode dasselbe
                              Scannen - hier passt es also wirklich, nur
                              anders formuliert ("adde ich dich?").
  Ich zahle mit WeChat.       Bezahlt wird mit Vipps.

  Du hast eine sehr helle     **Ersatzlos ausgelassen.** In China ein
  Haut.                       Kompliment; in Norwegen sind helle Haut und
                              blonde Haare der Normalfall und damit kein
                              Lob, sondern eine Feststellung. Dasselbe
                              Prinzip wie bei der Notrufnummer: lieber kein
                              Satz als ein danebengehender. **Simon sollte
                              das gegenlesen.**

**132 uebersetzt, 6 ausgelassen, 5 neu.**

**Was auffaellt und in den Hinweisen steht:** Norwegische Clubs haben eine
hoehere Altersgrenze als deutsche (oft 20, manche 23) und kontrollieren
streng. Alkohol ist teuer, weshalb viele vorglühen ("vorspiel") und erst
spaet losziehen. Und die viel beschriebene norwegische Zurueckhaltung
kippt im Ausgehkontext deutlich - nuechtern angesprochen zu werden ist
seltener als im Sueden Europas, betrunken deutlich haeufiger.

**Kein Sie**, auch nicht am Einlass oder an der Bar.

**Nicht von Muttersprachlern geprueft.** Bei Anmach- und
Sicherheitssaetzen faellt das besonders ins Gewicht.
"""

KATEGORIEN = ['club_nightlife']

SAETZE = [

# --------------------------------------------------------- club_ansprechen
 dict(de='Wie heißt du?', no='Hva heter du?',
      k=[('wie_heisst', ['hva heter du', 'navnet ditt'])]),
 dict(de='Gefällt es dir hier auch?', no='Liker du deg her?',
      k=[('gefaellt', ['liker du deg her', 'liker du deg'])]),
 dict(de='Ich sehe dir gern beim Tanzen zu.', no='Jeg liker å se deg danse.',
      k=[('tanzen_zusehen', ['se deg danse', 'danse'])]),
 dict(de='Du bist sehr hübsch.', no='Du er veldig pen.',
      k=[('huebsch', ['veldig pen', 'pen', 'nydelig'])]),
 dict(de='Du siehst gut aus.', no='Du ser bra ut.',
      k=[('gut_aussehen', ['ser bra ut', 'bra ut', 'kjekk'])]),
 dict(de='Bist du Single?', no='Er du singel?',
      k=[('single', ['singel'])]),
 dict(de='Ist dein Freund auch hier?', no='Er kjæresten din her også?',
      k=[('freund_hier', ['kjæresten din', 'kjæresten'])],
      h='„Kjæreste" ist geschlechtsneutral — dieselbe Frage funktioniert '
        'unverändert, egal wen du fragst. Die deutsche Aufspaltung in '
        'Freund und Freundin gibt es hier nicht.'),
 dict(de='Ist deine Freundin auch hier?', no='Er dama di her også?',
      k=[('freundin_hier', ['dama di', 'kjæresten din', 'dama'])]),
 dict(de='Wollen wir zusammen tanzen?', no='Skal vi danse?',
      k=[('tanzen', ['skal vi danse', 'danse'])]),
 dict(de='Hier ist es zu laut. Gehen wir nach draußen?', no='Det er for høyt her. Skal vi gå ut?',
      k=[('zu_laut', ['for høyt', 'høyt']),
         ('nach_draussen', ['gå ut', 'ut'])]),
 dict(de='Die Musik hier ist gut, oder?', no='Bra musikk her, ikke sant?',
      k=[('musik_gut', ['bra musikk', 'musikk'])]),
 dict(de='Kommst du oft hierher?', no='Er du ofte her?',
      k=[('oft_hier', ['ofte her', 'ofte'])]),
 dict(de='Bist du von hier?', no='Er du herfra?',
      k=[('von_hier', ['herfra', 'er du herfra'])]),
 dict(de='Bist du aus Norwegen?', no='Er du norsk?',
      neu=True, sz='club_ansprechen',
      k=[('aus_land', ['norsk', 'fra norge', 'norge'])]),
 dict(de='Mein Norwegisch ist nicht so gut.', no='Norsken min er ikke så god.',
      neu=True, sz='club_ansprechen',
      k=[('sprache_nicht_gut', ['norsken min', 'ikke så god', 'norsk'])],
      h='Fast jeder wechselt sofort auf Englisch, wenn du das sagst. Wer '
        'Norwegisch üben will, sollte lieber weiterreden, als sich zu '
        'entschuldigen.'),
 dict(de='Lass uns Snapchat austauschen.', no='Skal vi bytte snap?',
      neu=True, sz='club_ansprechen',
      k=[('kontakt_tauschen', ['bytte snap', 'snap', 'snapchat'])],
      h='Snapchat ist in Norwegen unter Zwanzigjährigen der Standardkanal — '
        'mehr als Instagram und viel mehr als die Telefonnummer. „Snap" '
        'wird dabei als Substantiv UND als Verb benutzt.'),
 dict(de='Soll ich dich adden?', no='Skal jeg adde deg?',
      neu=True, sz='club_ansprechen',
      k=[('adden', ['adde deg', 'adde', 'legge deg til'])]),

# ---------------------------------------------------------------- club_bar
 dict(de='Zwei Bier, bitte.', no='To øl, takk.',
      k=[('zwei_bier', ['to øl', 'øl'])],
      h='Bier im Club kostet in Norwegen leicht 100 Kronen und mehr — '
        'deshalb wird fast immer vorgeglüht („vorspiel") und erst gegen '
        'Mitternacht losgezogen.'),
 dict(de='Hier ist es zu laut.', no='Det er for høyt her.',
      k=[('zu_laut', ['for høyt', 'høyt'])]),
 dict(de='Es ist laut, sag es bitte nochmal.', no='Det er høyt, kan du si det igjen?',
      k=[('nochmal', ['si det igjen', 'igjen', 'gjenta'])]),
 dict(de='Was möchtest du trinken?', no='Hva vil du drikke?',
      k=[('trinken_frage', ['hva vil du drikke', 'drikke'])]),
 dict(de='Haben Sie Wasser?', no='Har dere vann?',
      k=[('wasser', ['vann'])]),
 dict(de='Das ist zu teuer.', no='Det er for dyrt.',
      k=[('zu_teuer', ['for dyrt', 'dyrt'])]),
 dict(de='Noch eins, bitte.', no='En til, takk.',
      k=[('noch_eins', ['en til', 'til'])]),
 dict(de='Das bezahle ich.', no='Jeg spanderer.',
      k=[('ich_zahle', ['jeg spanderer', 'spanderer', 'jeg tar den'])]),
 dict(de='Wo kann ich bezahlen?', no='Hvor kan jeg betale?',
      k=[('wo_bezahlen', ['hvor kan jeg betale', 'betale'])]),
 dict(de='Ich nehme das Gleiche.', no='Jeg tar det samme.',
      k=[('gleiche', ['det samme', 'samme'])]),
 dict(de='Was möchten Sie?', no='Hva skal det være?',
      k=[('was_moechten', ['hva skal det være', 'hva vil du ha'])]),
 dict(de='Ich zahle mit Vipps.', no='Jeg betaler med Vipps.',
      neu=True, sz='club_bar',
      k=[('vipps_zahlen', ['vipps', 'med vipps'])],
      h='„Vipps" ist in Norwegen so selbstverständlich, dass es als Verb '
        'benutzt wird: „kan du vippse meg?" — kannst du mir das '
        'überweisen?'),

# ------------------------------------------------------------ club_einlass
 dict(de='Was kostet der Eintritt?', no='Hva koster inngangen?',
      k=[('eintritt', ['inngangen', 'inngang'])]),
 dict(de='Ich möchte ein Ticket kaufen.', no='Jeg vil gjerne kjøpe billett.',
      k=[('ticket', ['billett'])]),
 dict(de='Wir sind zu zweit.', no='Vi er to.',
      k=[('zu_zweit', ['vi er to', 'to'])]),
 dict(de='Das ist mein Pass.', no='Dette er passet mitt.',
      k=[('pass', ['passet', 'pass'])],
      h='Norwegische Clubs kontrollieren streng und haben oft eine höhere '
        'Altersgrenze als in Deutschland — 20 ist üblich, manche verlangen '
        '23. Ohne Ausweis kommst du nicht rein.'),
 dict(de='Habt ihr heute offen?', no='Har dere åpent i dag?',
      k=[('offen', ['åpent', 'åpen'])]),
 dict(de='Bis wann habt ihr heute offen?', no='Hvor lenge har dere åpent?',
      k=[('bis_wann', ['hvor lenge', 'åpent til'])]),
 dict(de='Ich bin mit Freunden hier.', no='Jeg er her med venner.',
      k=[('mit_freunden', ['med venner', 'venner'])]),
 dict(de='Kann ich hier bezahlen?', no='Kan jeg betale her?',
      k=[('hier_bezahlen', ['betale her', 'kan jeg betale'])]),
 dict(de='Wo ist die Toilette?', no='Hvor er toalettet?',
      k=[('toilette', ['toalettet', 'do'])]),
 dict(de='Meine Freunde kommen später.', no='Vennene mine kommer senere.',
      k=[('freunde_spaeter', ['kommer senere', 'senere', 'vennene'])]),
 dict(de='Ich bin nicht von hier.', no='Jeg er ikke herfra.',
      k=[('nicht_von_hier', ['ikke herfra', 'herfra'])]),

# -------------------------------------------------------- club_komplimente
 dict(de='Du siehst heute toll aus.', no='Du ser kjempebra ut i kveld.',
      k=[('toll_aussehen', ['kjempebra ut', 'ser bra ut', 'bra ut'])]),
 dict(de='Dein Outfit gefällt mir.', no='Jeg liker antrekket ditt.',
      k=[('outfit', ['antrekket', 'antrekk'])]),
 dict(de='Deine Haare sind schön.', no='Du har fint hår.',
      k=[('haare', ['fint hår', 'hår'])]),
 dict(de='Sind deine Haare neu?', no='Har du gjort noe med håret?',
      k=[('haare_neu', ['gjort noe med håret', 'håret'])]),
 dict(de='Du bist sehr süß.', no='Du er veldig søt.',
      k=[('suess', ['veldig søt', 'søt'])]),
 dict(de='Du bist groß.', no='Du er høy.',
      k=[('gross', ['høy'])]),
 dict(de='Du bist schlank.', no='Du er slank.',
      k=[('schlank', ['slank'])],
      h='In China ein Standardkompliment. In Norwegen sind Bemerkungen über '
        'den Körper einer fremden Person heikel — deutlich heikler als in '
        'Italien. „Du ser bra ut" ist die sichere Variante.'),
 dict(de='Deine Augen sind schön.', no='Du har fine øyne.',
      k=[('augen', ['fine øyne', 'øyne'])]),
 dict(de='Du hast Klasse.', no='Du har stil.',
      k=[('klasse', ['stil', 'har stil'])]),
 dict(de='Deine Freundin hat Klasse.', no='Venninna di har stil.',
      k=[('freundin_klasse', ['venninna di', 'stil'])]),
 dict(de='Ich mag deine Stimme.', no='Jeg liker stemmen din.',
      k=[('stimme', ['stemmen din', 'stemmen'])]),
 dict(de='Deine Stimme ist sehr schön.', no='Du har en veldig fin stemme.',
      k=[('stimme_schoen', ['fin stemme', 'stemme'])]),
 dict(de='Du tanzt wirklich gut.', no='Du danser skikkelig bra.',
      k=[('tanzt_gut', ['danser bra', 'danser skikkelig bra', 'danser'])]),
 dict(de='Ach wo! (bescheidene Antwort auf ein Lob)', no='Å, gi deg!',
      k=[('bescheiden', ['gi deg', 'å gi deg', 'tull'])],
      h='Norweger nehmen Komplimente meist einfach an („takk"), wehren sie '
        'aber gern mit einem lockeren „gi deg" ab — das ist Understatement, '
        'keine Ablehnung. „Janteloven", die ungeschriebene Regel, sich '
        'nicht über andere zu stellen, wirkt hier nach.'),
 dict(de='Nein, nein. (auf ein Lob)', no='Nei, da!',
      k=[('abwehr', ['nei da', 'nei'])]),
 dict(de='Danke, du aber auch.', no='Takk, det samme til deg.',
      k=[('danke_auch', ['takk det samme', 'det samme', 'du også'])]),
 dict(de='Du hast ein süßes Lächeln.', no='Du har et fint smil.',
      k=[('laecheln', ['fint smil', 'smil'])]),
 dict(de='Deine Frisur ist sehr schön.', no='Den frisyren kler deg.',
      k=[('frisur', ['frisyren', 'frisyre'])]),

# ---------------------------------------------------------------- club_ktv
 dict(de='Wollen wir Karaoke singen?', no='Skal vi synge karaoke?',
      k=[('karaoke', ['karaoke'])]),
 dict(de='Ich kann nicht singen.', no='Jeg kan ikke synge.',
      k=[('nicht_singen', ['kan ikke synge', 'synge'])]),
 dict(de='Sing du zuerst.', no='Du synger først.',
      k=[('du_zuerst', ['du synger først', 'først'])]),
 dict(de='Welches Lied singst du?', no='Hvilken sang synger du?',
      k=[('welches_lied', ['hvilken sang', 'sang'])]),
 dict(de='Dieses Lied kenne ich!', no='Denne sangen kan jeg!',
      k=[('kenne_lied', ['denne sangen kan jeg', 'kan jeg', 'sangen'])]),
 dict(de='Ein Zimmer für vier Personen.', no='Et rom for fire personer.',
      k=[('zimmer_vier', ['rom for fire', 'fire personer', 'fire'])],
      h='Private Karaoke-Räume sind in Norwegen selten — Karaoke läuft '
        'meist offen in der Bar, vor allen.'),
 dict(de='Wie viel kostet das Zimmer?', no='Hva koster rommet?',
      k=[('zimmer_preis', ['hva koster rommet', 'rommet'])]),
 dict(de='Wir bleiben zwei Stunden.', no='Vi blir to timer.',
      k=[('zwei_stunden', ['to timer', 'vi blir to timer'])]),
 dict(de='Du singst sehr gut!', no='Du synger kjempebra!',
      k=[('singst_gut', ['synger kjempebra', 'synger bra', 'synger'])]),
 dict(de='Wir singen zusammen.', no='Vi synger sammen.',
      k=[('zusammen_singen', ['synger sammen', 'sammen'])]),
 dict(de='Sing noch eins!', no='Syng en til!',
      k=[('noch_eins', ['syng en til', 'en til'])]),

# ------------------------------------------------------- club_nachtlogistik
 dict(de='Können wir zu dir?', no='Kan vi dra hjem til deg?',
      k=[('zu_dir', ['hjem til deg', 'til deg'])]),
 dict(de='In meinem Hotel geht das nicht.', no='Det går ikke på hotellet mitt.',
      k=[('hotel_nicht', ['går ikke', 'hotellet mitt', 'hotellet'])]),
 dict(de='Nehmen wir ein Zimmer.', no='Vi tar et rom.',
      k=[('zimmer_nehmen', ['tar et rom', 'rom'])]),
 dict(de='Das Zimmer bezahle ich.', no='Jeg betaler for rommet.',
      k=[('zimmer_zahlen', ['jeg betaler', 'rommet'])]),
 dict(de='Das Hotel will meinen Pass sehen.', no='Hotellet vil se passet mitt.',
      k=[('pass_hotel', ['vil se passet', 'passet'])]),
 dict(de='Ich rufe ein Taxi.', no='Jeg bestiller en taxi.',
      k=[('taxi', ['taxi', 'drosje'])],
      h='Taxis sind in Norwegen sehr teuer. Nachts fahren in den Städten '
        'aber „nattbuss" und in Oslo die T-bane am Wochenende lange — beides '
        'ist ein Bruchteil des Preises.'),
 dict(de='Zuerst zu dir, dann zu mir.', no='Først til deg, så til meg.',
      k=[('zuerst_dann', ['først til deg', 'så til meg'])]),
 dict(de='Wo wohnst du?', no='Hvor bor du?',
      k=[('wo_wohnst', ['hvor bor du', 'bor du'])]),
 dict(de='Ist das weit?', no='Er det langt?',
      k=[('weit', ['langt'])]),
 dict(de='Mein Hotel ist nicht weit.', no='Hotellet mitt er ikke langt unna.',
      k=[('hotel_nah', ['ikke langt unna', 'ikke langt', 'hotellet'])]),
 dict(de='Ich fahre nach Hause.', no='Jeg drar hjem.',
      k=[('nach_hause', ['drar hjem', 'hjem'])]),

# ------------------------------------------------------- club_naeherkommen
 dict(de='Ich finde dich sehr nett.', no='Jeg synes du er veldig hyggelig.',
      k=[('nett_finden', ['veldig hyggelig', 'hyggelig'])]),
 dict(de='Ich mag dich.', no='Jeg liker deg.',
      k=[('mag_dich', ['jeg liker deg', 'liker deg'])]),
 dict(de='Ist das okay für dich?', no='Er det greit for deg?',
      k=[('okay', ['greit for deg', 'greit'])]),
 dict(de='Gehen wir woanders hin?', no='Skal vi dra et annet sted?',
      k=[('woanders', ['et annet sted', 'annet sted'])]),
 dict(de='Ich kenne einen guten Ort.', no='Jeg vet om et bra sted.',
      k=[('guter_ort', ['et bra sted', 'bra sted'])]),
 dict(de='Zu dir oder zu mir?', no='Til deg eller til meg?',
      k=[('zu_dir_zu_mir', ['til deg eller til meg', 'til deg', 'til meg'])]),
 dict(de='Bier oder Wasser?', no='Øl eller vann?',
      k=[('bier_wasser', ['øl', 'vann'])]),
 dict(de='Ich reise morgen weiter.', no='Jeg reiser videre i morgen.',
      k=[('weiterreisen', ['reiser videre', 'videre i morgen'])]),
 dict(de='Gehen wir kurz nach draußen.', no='Skal vi gå ut litt?',
      k=[('nach_draussen', ['gå ut', 'ut litt'])]),
 dict(de='Du gefällst mir sehr.', no='Jeg liker deg veldig godt.',
      k=[('gefaellst_mir', ['liker deg veldig godt', 'liker deg'])]),
 dict(de='Du bist sehr cool.', no='Du er skikkelig kul.',
      k=[('cool', ['skikkelig kul', 'kul'])]),
 dict(de='Ich suche gerade nichts Festes — ich reise bald weiter.',
      no='Jeg ser ikke etter noe seriøst, jeg reiser snart videre.',
      k=[('nichts_festes', ['ikke noe seriøst', 'noe seriøst']),
         ('weiterreisen', ['reiser snart videre', 'reiser videre'])]),
 dict(de='Darf ich mich hierhin setzen?', no='Kan jeg sette meg her?',
      k=[('setzen', ['sette meg her', 'sette meg'])]),
 dict(de='Deine Hände sind ganz kalt.', no='Hendene dine er iskalde.',
      k=[('haende_kalt', ['hendene dine', 'iskalde', 'kalde hender'])]),
 dict(de='Ich bringe dich nach Hause.', no='Jeg følger deg hjem.',
      k=[('nach_hause_bringen', ['følger deg hjem', 'følge deg hjem'])],
      h='„Følge noen hjem" ist die normale Formel. Entscheidend ist die '
        'FRAGE (nächster Satz), nicht die Ansage — ungefragt mitzugehen '
        'wirkt bedrängend.'),
 dict(de='Soll ich dich nach Hause bringen?', no='Skal jeg følge deg hjem?',
      k=[('nach_hause_frage', ['skal jeg følge deg hjem', 'følge deg hjem'])]),
 dict(de='Wir lassen es langsam angehen.', no='Vi tar det rolig.',
      k=[('langsam', ['tar det rolig', 'rolig'])]),
 dict(de='Ich finde dich sehr attraktiv.', no='Jeg synes du er veldig attraktiv.',
      k=[('attraktiv', ['veldig attraktiv', 'attraktiv'])]),
 dict(de='Mit dir zu reden macht Spaß.', no='Det er gøy å snakke med deg.',
      k=[('reden_spass', ['gøy å snakke med deg', 'snakke med deg'])]),

# -------------------------------------------------------- club_sicherheit
 dict(de='Ich gehe jetzt.', no='Jeg går nå.',
      k=[('gehe_jetzt', ['jeg går nå', 'går nå'])]),
 dict(de='Mir geht es nicht gut.', no='Jeg føler meg ikke bra.',
      k=[('nicht_gut', ['føler meg ikke bra', 'ikke bra'])]),
 dict(de='Ich möchte nach Hause.', no='Jeg vil hjem.',
      k=[('nach_hause', ['jeg vil hjem', 'hjem'])]),
 dict(de='Kannst du mir helfen?', no='Kan du hjelpe meg?',
      k=[('helfen', ['hjelpe meg', 'hjelp'])]),
 dict(de='Mein Freund wartet draußen auf mich.', no='Kjæresten min venter ute.',
      k=[('freund_wartet', ['kjæresten min', 'venter ute'])]),
 dict(de='Meine Freundin wartet draußen auf mich.', no='Dama mi venter ute.',
      k=[('freundin_wartet', ['dama mi', 'kjæresten min', 'venter ute'])]),
 dict(de='Lass mich in Ruhe.', no='La meg være i fred.',
      k=[('in_ruhe', ['la meg være i fred', 'i fred'])]),
 dict(de='Ich habe kein Interesse. Geh bitte weg.', no='Jeg er ikke interessert. Gå vekk.',
      k=[('kein_interesse', ['ikke interessert', 'interessert']),
         ('weggehen', ['gå vekk', 'gå'])]),
 dict(de='Die Person dort lässt mich nicht in Ruhe.', no='Den personen der lar meg ikke være i fred.',
      k=[('person_stoert', ['lar meg ikke være i fred', 'den personen', 'plager meg'])],
      h='Norwegische Clubs haben Türsteher („vakt") auch im Inneren — sie '
        'anzusprechen ist der übliche und erwartete Weg, nicht die '
        'Eskalation.'),
 dict(de='Bitte tu so, als würden wir uns kennen.', no='Kan du late som vi kjenner hverandre?',
      k=[('so_tun', ['late som', 'lat som']),
         ('kennen', ['kjenner hverandre', 'kjenner'])]),
 dict(de='Bitte pass kurz auf mein Glas auf.', no='Kan du passe på glasset mitt?',
      k=[('glas_aufpassen', ['passe på glasset', 'glasset mitt', 'glasset'])]),
 dict(de='Bitte rufen Sie die Polizei.', no='Ring politiet.',
      k=[('polizei', ['politiet', 'politi'])]),
 dict(de='Entschuldigung, ich wusste nicht, dass ihr zusammen seid.',
      no='Beklager, jeg visste ikke at dere var sammen.',
      k=[('nicht_gewusst', ['visste ikke', 'beklager']),
         ('zusammen', ['sammen', 'var sammen'])]),

# ------------------------------------------------------- club_trinkkultur
 dict(de='Prost!', no='Skål!',
      k=[('prost', ['skål'])],
      h='Beim „skål" schaut man sich in die Augen — vor dem Trinken und '
        'noch einmal danach. Das gilt in ganz Skandinavien als gute Form.'),
 dict(de='Immer mit der Ruhe - trink so viel du magst.', no='Ta det med ro — drikk så mye du vil.',
      k=[('ruhe', ['ta det med ro', 'med ro']),
         ('so_viel', ['så mye du vil', 'så mye'])]),
 dict(de='Ich trinke langsam.', no='Jeg drikker sakte.',
      k=[('langsam_trinken', ['drikker sakte', 'sakte'])]),
 dict(de='Ich kann nicht mehr trinken.', no='Jeg klarer ikke drikke mer.',
      k=[('nicht_mehr', ['klarer ikke drikke mer', 'ikke mer'])]),
 dict(de='Ich muss morgen arbeiten.', no='Jeg må jobbe i morgen.',
      k=[('morgen_arbeiten', ['må jobbe i morgen', 'jobbe i morgen'])]),
 dict(de='Ich trinke nur ein bisschen.', no='Jeg drikker bare litt.',
      k=[('nur_bisschen', ['bare litt', 'litt'])]),
 dict(de='Was trinkst du?', no='Hva drikker du?',
      k=[('was_trinkst', ['hva drikker du', 'drikker du'])]),
 dict(de='Ich möchte noch ein Bier.', no='Jeg vil ha en øl til.',
      k=[('noch_bier', ['en øl til', 'øl til', 'øl'])]),
 dict(de='Trinken wir zusammen!', no='Vi drikker sammen!',
      k=[('zusammen_trinken', ['drikker sammen', 'sammen'])]),
 dict(de='Ich trinke keinen Alkohol.', no='Jeg drikker ikke alkohol.',
      k=[('kein_alkohol', ['drikker ikke alkohol', 'ikke alkohol'])]),
 dict(de='Was kostet das?', no='Hva koster det?',
      k=[('kosten', ['hva koster det'])]),
 dict(de='Ich lade dich ein.', no='Jeg spanderer.',
      k=[('einladen', ['jeg spanderer', 'spanderer'])]),

# ---------------------------------------------------------- club_verloren
 dict(de='Ich finde meine Freunde nicht.', no='Jeg finner ikke vennene mine.',
      k=[('freunde_weg', ['finner ikke vennene', 'vennene mine', 'finner ikke'])]),
 dict(de='Hast du meinen Freund gesehen?', no='Har du sett vennen min?',
      k=[('gesehen', ['har du sett', 'vennen min'])]),
 dict(de='Wo bist du?', no='Hvor er du?',
      k=[('wo_bist', ['hvor er du'])]),
 dict(de='Ich warte hier auf dich.', no='Jeg venter på deg her.',
      k=[('warte_hier', ['venter på deg', 'venter her'])]),
 dict(de='Mein Handy hat keinen Strom mehr.', no='Mobilen min er tom for strøm.',
      k=[('handy_leer', ['tom for strøm', 'mobilen min', 'tomt batteri'])]),
 dict(de='Wo kann ich mein Handy laden?', no='Hvor kan jeg lade mobilen?',
      k=[('handy_laden', ['lade mobilen', 'lade'])]),
 dict(de='Ich muss mein Handy laden.', no='Jeg må lade mobilen.',
      k=[('handy_laden', ['må lade', 'lade mobilen'])]),
 dict(de='Kann ich dein Handy benutzen?', no='Kan jeg låne mobilen din?',
      k=[('handy_benutzen', ['låne mobilen', 'mobilen din'])]),
 dict(de='Ich rufe dich an.', no='Jeg ringer deg.',
      k=[('anrufen', ['jeg ringer deg', 'ringer deg'])]),
 dict(de='Wir treffen uns draußen.', no='Vi møtes ute.',
      k=[('treffen_draussen', ['møtes ute', 'ute'])]),
 dict(de='Bis morgen!', no='Vi ses i morgen!',
      k=[('bis_morgen', ['vi ses i morgen', 'i morgen'])]),
 dict(de='Ich nehme ein Taxi nach Hause.', no='Jeg tar taxi hjem.',
      k=[('taxi_heim', ['tar taxi hjem', 'taxi hjem', 'taxi'])]),
 dict(de='Entschuldigung, ich habe meine Freunde verloren und mein Handy ist leer. Können Sie mir helfen?',
      no='Unnskyld, jeg har mistet vennene mine og mobilen er tom. Kan du hjelpe meg?',
      k=[('freunde_verloren', ['mistet vennene mine', 'mistet vennene']),
         ('handy_leer', ['mobilen er tom', 'tom']),
         ('helfen', ['kan du hjelpe meg', 'hjelpe meg'])]),
]

AUSGELASSEN = [
    # Zielland bzw. Zielsprache steht im Satz - ersetzt durch die
    # norwegischen Fassungen (neu=True oben).
    'Bist du aus China?',
    'Mein Chinesisch ist nicht so gut.',
    # WeChat gibt es in Norwegen nicht - ersetzt durch Snapchat bzw. Vipps.
    'Lass uns WeChat austauschen.',
    'Ich zahle mit WeChat.',
    'Soll ich dich scannen?',
    # ERSATZLOS ausgelassen: helle Haut ist in China ein Kompliment, in
    # Norwegen der Normalfall und damit keins. Siehe Kopfkommentar; Simon
    # sollte das gegenlesen.
    'Du hast eine sehr helle Haut.',
]
