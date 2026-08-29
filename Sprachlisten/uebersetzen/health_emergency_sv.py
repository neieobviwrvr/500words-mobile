# -*- coding: utf-8 -*-
"""health_emergency auf Schwedisch: 55 uebertragene + 2 angepasste Saetze.

Dieselben vier Ausschluesse wie in der spanischen und franzoesischen Fassung:

  Rufen Sie bitte 120 an.       Die 120 ist der chinesische Rettungsdienst.
                                In Schweden ist es die 112 - dieselbe Nummer
                                wie in ganz Europa. Ersetzt.
  Ich spreche kein Chinesisch.  Zielsprache steht im Satz - ersetzt durch die
  Koennen Sie es aufschreiben?  schwedische Fassung.
  Ich moechte westliche Medizin. Die TCM/Westmedizin-Trennung gibt es in
  Ist das westliche Medizin?     schwedischen Apotheken nicht.

**Fuenf eigene Kulturhinweise**, und einer davon ist etwas, das es nur in
Schweden gibt:

  1177        Die landesweite Beratungsnummer fuer alles Medizinische. Man
              ruft dort an, BEVOR man irgendwo hingeht, und bekommt gesagt,
              wohin - oft der schnellste Weg ueberhaupt. Ohne diesen Hinweis
              sucht ein Deutscher vergeblich nach einem Bereitschaftsdienst.
  vårdcentral Erste Anlaufstelle ist die Gesundheitszentrale, nicht das
              Krankenhaus - wie in Frankreich und Spanien, umgekehrt zu China.
  Termin      Laeuft ueber "boka tid". Ohne gebuchte Zeit wird man auf 1177
              verwiesen.
  Versicherung Die Europaeische Krankenversicherungskarte gilt in Schweden;
              man zahlt nur die kleine "patientavgift" wie Einheimische.
  ha ont i    Schmerz wird mit "ha ont i" gebildet - Schmerz HABEN in etwas.
              Das Muster traegt jeden Koerperteil.

**Nicht von Muttersprachlern geprueft** - bei Notfallsaetzen entscheidet
Verstaendlichkeit unter Stress. Vor der Vertonung ein Spot-Check.

`verb_cluster` bleibt leer (siehe drinking_dining_sv.py).
"""

SAETZE = [

# ---------------------------------------------------------------- Allergie
 dict(de='Ich habe eine Allergie.', sv='Jag har en allergi.',
      k=[('allergie', ['allergi', 'en allergi'])]),
 dict(de='Ich bin allergisch gegen dieses Medikament.',
      sv='Jag är allergisk mot den här medicinen.',
      k=[('allergisch', ['allergisk']), ('medikament', ['medicinen', 'medicin'])]),
 dict(de='Ich bin allergisch gegen Erdnüsse.', sv='Jag är allergisk mot jordnötter.',
      k=[('allergisch', ['allergisk']), ('erdnuss', ['jordnötter', 'jordnöt'])]),
 dict(de='Ich kann keine Erdnüsse essen.', sv='Jag kan inte äta jordnötter.',
      k=[('nicht_koennen', ['kan inte']), ('erdnuss', ['jordnötter', 'jordnöt'])]),
 dict(de='Sind da Erdnüsse drin?', sv='Finns det jordnötter i?',
      k=[('erdnuss', ['jordnötter', 'jordnöt']), ('drin', ['finns det', 'i'])]),
 dict(de='Bitte ohne Erdnüsse.', sv='Utan jordnötter, tack.',
      k=[('ohne', ['utan']), ('erdnuss', ['jordnötter', 'jordnöt'])]),
 dict(de='Bitte ohne Milch.', sv='Utan mjölk, tack.',
      k=[('ohne', ['utan']), ('milch', ['mjölk'])]),
 dict(de='Ich vertrage keine Milch.', sv='Jag tål inte mjölk.',
      k=[('nicht_vertragen', ['tål inte']), ('milch', ['mjölk'])]),
 dict(de='Was ist da drin?', sv='Vad är det i?',
      k=[('was', ['vad']), ('drin', ['det i', 'i'])]),
 dict(de='Ich habe mein Allergiemedikament dabei.',
      sv='Jag har min allergimedicin med mig.',
      k=[('dabei', ['med mig', 'har']),
         ('allergiemedikament', ['allergimedicin', 'medicin'])]),
 dict(de='Das ist für mich sehr gefährlich.', sv='Det är mycket farligt för mig.',
      k=[('gefaehrlich', ['farligt', 'farlig'])]),
 dict(de='Ist das gefährlich?', sv='Är det farligt?',
      k=[('gefaehrlich', ['farligt', 'farlig'])]),

# ---------------------------------------------------------------- Bezahlen
 dict(de='Wie viel kostet das?', sv='Vad kostar det?',
      k=[('kosten', ['kostar', 'vad kostar'])]),
 dict(de='Ich habe eine Versicherung.', sv='Jag har en försäkring.',
      k=[('versicherung', ['försäkring', 'en försäkring'])]),
 dict(de='Nehmen Sie meine Versicherung?', sv='Tar ni min försäkring?',
      k=[('nehmen', ['tar ni', 'tar']), ('versicherung', ['försäkring'])],
      h='Anders als in China gilt die Europäische Krankenversicherungskarte in '
        'Schweden. Man zahlt dann nur die kleine „patientavgift" wie '
        'Einheimische, nicht die volle Rechnung.'),
 dict(de='Muss ich vorher bezahlen?', sv='Måste jag betala i förväg?',
      k=[('muessen', ['måste jag', 'måste']), ('vorher', ['i förväg', 'förväg']),
         ('bezahlen', ['betala'])]),
 dict(de='Bitte geben Sie mir eine Quittung.', sv='Kan jag få ett kvitto?',
      k=[('quittung', ['kvitto', 'ett kvitto'])]),
 dict(de='Ich brauche die Quittung für meine Versicherung.',
      sv='Jag behöver kvittot till min försäkring.',
      k=[('brauchen', ['behöver']), ('quittung', ['kvittot', 'kvitto']),
         ('versicherung', ['försäkring'])]),
 dict(de='Kann ich mit dem Handy bezahlen?', sv='Kan jag betala med mobilen?',
      k=[('koennen', ['kan jag', 'kan']), ('handy', ['mobilen', 'mobil']),
         ('bezahlen', ['betala'])]),
 dict(de='Nehmen Sie auch Karte?', sv='Tar ni kort?',
      k=[('nehmen', ['tar ni', 'tar']), ('karte', ['kort'])]),
 dict(de='Hier ist meine Karte.', sv='Här är mitt kort.',
      k=[('karte', ['kort', 'mitt kort'])]),
 dict(de='Zuerst anmelden, dann bezahlen?', sv='Först anmäla sig, sedan betala?',
      k=[('zuerst', ['först']), ('anmelden', ['anmäla', 'anmäla sig']),
         ('bezahlen', ['betala'])]),
 dict(de='Wo bekomme ich die Quittung?', sv='Var får jag kvittot?',
      k=[('wo', ['var']), ('quittung', ['kvittot', 'kvitto'])]),
 dict(de='Wo kann ich bezahlen?', sv='Var kan jag betala?',
      k=[('wo', ['var']), ('bezahlen', ['betala'])]),
 dict(de='Das ist zu teuer.', sv='Det är för dyrt.',
      k=[('teuer', ['dyrt', 'dyr'])]),
 dict(de='Ich habe nicht genug Geld dabei.',
      sv='Jag har inte tillräckligt med pengar.',
      k=[('nicht_genug', ['inte tillräckligt', 'tillräckligt']),
         ('geld', ['pengar'])]),
 dict(de='Reicht das?', sv='Räcker det?',
      k=[('reichen', ['räcker'])]),

# ---------------------------------------------------------------- Krankenhaus
 dict(de='Wo ist das Krankenhaus?', sv='Var ligger sjukhuset?',
      k=[('wo', ['var']), ('krankenhaus', ['sjukhuset', 'sjukhus'])],
      h='Erste Anlaufstelle ist in Schweden die „vårdcentral" '
        '(Gesundheitszentrale), nicht das Krankenhaus — genau umgekehrt zu '
        'China. Ins Krankenhaus geht man nur mit Überweisung oder im Notfall.'),
 dict(de='Ich möchte zum Arzt.', sv='Jag vill träffa en läkare.',
      k=[('moechten', ['jag vill', 'vill']), ('arzt', ['läkare', 'en läkare'])]),
 dict(de='Wo melde ich mich an?', sv='Var anmäler jag mig?',
      k=[('wo', ['var']), ('anmelden', ['anmäler', 'anmäla'])]),
 dict(de='Ich möchte mich anmelden.', sv='Jag vill anmäla mig.',
      k=[('moechten', ['jag vill', 'vill']), ('anmelden', ['anmäla', 'anmäla mig'])]),
 dict(de='Ich habe keinen Termin.', sv='Jag har ingen tid bokad.',
      k=[('kein_termin', ['ingen tid', 'inte bokad', 'tid bokad'])],
      h='Termine heißen „boka tid". Ohne gebuchte Zeit wird man an 1177 '
        'verwiesen — die landesweite Beratungsnummer, bei der man anruft, '
        'BEVOR man irgendwo hingeht. Dort wird gesagt, wohin.'),
 dict(de='Wie lange muss ich warten?', sv='Hur länge måste jag vänta?',
      k=[('wie_lange', ['hur länge']), ('warten', ['vänta'])]),
 dict(de='Wie lange dauert das?', sv='Hur lång tid tar det?',
      k=[('wie_lange', ['hur lång tid', 'hur länge']), ('dauern', ['tar det', 'tar'])]),
 dict(de='Bitte geben Sie mir ein Medikament.', sv='Kan jag få en medicin?',
      k=[('medikament', ['medicin', 'en medicin'])]),
 dict(de='Wie nehme ich das Medikament?', sv='Hur ska jag ta medicinen?',
      k=[('wie', ['hur']), ('nehmen', ['ta']), ('medikament', ['medicinen', 'medicin'])]),
 dict(de='Wie komme ich dorthin?', sv='Hur kommer jag dit?',
      k=[('wie', ['hur']), ('kommen', ['kommer', 'komma'])]),
 dict(de='Ich spreche kein Schwedisch. Können Sie es aufschreiben?',
      sv='Jag talar inte svenska. Kan du skriva ner det?',
      neu=True, sz='health_krankenhaus',
      k=[('sprache', ['talar inte svenska', 'svenska']),
         ('aufschreiben', ['skriva ner', 'skriva'])]),

# ---------------------------------------------------------------- Notfall
 dict(de='Bitte helfen Sie mir!', sv='Snälla hjälp mig!',
      k=[('helfen', ['hjälp', 'hjälpa', 'hjälp mig'])]),
 dict(de='Ist der Krankenwagen schon unterwegs?', sv='Är ambulansen på väg?',
      k=[('krankenwagen', ['ambulansen', 'ambulans']), ('unterwegs', ['på väg', 'väg'])]),
 dict(de='Rufen Sie bitte 112 an.', sv='Ring 112.',
      neu=True, sz='health_notfall',
      k=[('rufen', ['ring', 'ringa']), ('notrufnummer', ['112'])],
      h='112 ist der Notruf in Schweden wie in ganz Europa — nicht die 120 wie '
        'in China. Für alles Medizinische, das kein Notfall ist, ruft man 1177 '
        'an und wird beraten.'),
 dict(de='Jemand ist verletzt.', sv='Någon är skadad.',
      k=[('jemand', ['någon']), ('verletzt', ['skadad'])]),
 dict(de='Ich bin verletzt.', sv='Jag är skadad.',
      k=[('verletzt', ['skadad'])]),
 dict(de='Schnell, bitte!', sv='Snabbt, tack!',
      k=[('schnell', ['snabbt', 'fort'])]),
 dict(de='Ich brauche etwas aus der Apotheke.', sv='Jag behöver något från apoteket.',
      k=[('brauchen', ['behöver']), ('apotheke', ['apoteket', 'apotek'])]),
 dict(de='Ich bin allein hier.', sv='Jag är ensam här.',
      k=[('allein', ['ensam'])]),
 dict(de='Bitte rufen Sie meinen Freund an.', sv='Kan du ringa min vän?',
      k=[('rufen', ['ringa', 'ring']), ('freund', ['vän', 'min vän'])]),
 dict(de='Bitte rufen Sie die Polizei!', sv='Ring polisen!',
      k=[('rufen', ['ring', 'ringa']), ('polizei', ['polisen', 'polis'])]),
 dict(de='Ich möchte die Polizei rufen.', sv='Jag vill ringa polisen.',
      k=[('moechten', ['jag vill', 'vill']), ('polizei', ['polisen', 'polis'])]),

# ---------------------------------------------------------------- Symptome
 dict(de='Ich bin krank.', sv='Jag är sjuk.',
      k=[('krank', ['sjuk'])]),
 dict(de='Ich habe Bauchschmerzen.', sv='Jag har ont i magen.',
      k=[('bauchschmerzen', ['ont i magen', 'magen'])],
      h='Schmerz wird im Schwedischen mit „ha ont i" gebildet — Schmerz haben '
        'IN etwas. Das Muster trägt jeden Körperteil: ont i magen, ont i '
        'benet, ont i huvudet.'),
 dict(de='Mein Bein tut weh.', sv='Jag har ont i benet.',
      k=[('bein', ['benet', 'ben']), ('weh', ['ont', 'har ont'])]),
 dict(de='Mir geht es sehr schlecht.', sv='Jag mår mycket dåligt.',
      k=[('schlecht', ['dåligt', 'mår dåligt'])]),
 dict(de='Ich bin sehr müde.', sv='Jag är mycket trött.',
      k=[('muede', ['trött'])]),
 dict(de='Mir ist kalt.', sv='Jag fryser.',
      k=[('kalt', ['fryser', 'kallt'])]),
 dict(de='Seit gestern.', sv='Sedan igår.',
      k=[('seit', ['sedan']), ('gestern', ['igår'])]),
 dict(de='Seit heute Morgen.', sv='Sedan i morse.',
      k=[('seit', ['sedan']), ('heute_morgen', ['i morse', 'morse'])]),
]

AUSGELASSEN = [
    # Chinesische Notrufnummer - ersetzt durch die 112-Fassung oben.
    'Rufen Sie bitte 120 an.',
    # Zielsprache steht im Satz - ersetzt durch die schwedische Fassung.
    'Ich spreche kein Chinesisch. Können Sie es aufschreiben?',
    # TCM/westliche Medizin ist eine chinesische Unterscheidung.
    'Ich möchte westliche Medizin.',
    'Ist das westliche Medizin?',
]
