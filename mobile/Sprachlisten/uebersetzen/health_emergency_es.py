# -*- coding: utf-8 -*-
"""health_emergency auf Spanisch: 59 uebertragene + 2 angepasste Saetze.

**Die heikelste Kategorie bisher.** Nicht wegen der Sprache, sondern weil
mehrere Saetze auf das chinesische Gesundheitssystem zugeschnitten sind. Vier
fallen deshalb raus, zwei werden ANGEPASST statt uebersetzt:

  Rufen Sie bitte 120 an.       Die 120 ist der chinesische Rettungsdienst.
                                Woertlich uebersetzt lernte man eine Nummer,
                                die in Spanien niemanden erreicht - im Notfall
                                die gefaehrlichste Art von Fehler, die diese
                                App machen kann. Ersetzt durch "Rufen Sie
                                bitte 112 an." (europaweit, auch Lateinamerika
                                kennt 911/112 je nach Land - siehe Hinweis dort).
  Ich spreche kein Chinesisch.  Wie schon in club_nightlife: die Zielsprache
  Koennen Sie es aufschreiben?  steht im Satz, also gehoert sie angepasst.
                                Ersetzt durch "Ich spreche kein Spanisch. ..."
  Ich moechte westliche Medizin. In China trennen Apotheken und Krankenhaeuser
  Ist das westliche Medizin?     zwischen TCM und westlicher Medizin, und man
                                 muss sagen, was man will. In Spanien gibt es
                                 diese Unterscheidung nicht - der Satz waere
                                 sinnlos bis verwirrend.

**Fuenf Kulturhinweise wurden ERSETZT, nicht uebersetzt.** Die chinesischen
beschreiben ein anderes System; wo Spanien selbst eine Falle stellt, steht
jetzt ein eigener Hinweis. Das ist der Sinn des Feldes, und hier ist es
inhaltlich wichtig, nicht Kosmetik:

  Notruf              112 statt 120 - der wichtigste Hinweis der Kategorie
  Versicherung        Die europaeische Krankenversicherungskarte wird in
                      Spanien tatsaechlich akzeptiert (anders als eine
                      auslaendische Karte in China)
  Vorher bezahlen     In Spanien ist die Notfallbehandlung ueber die
                      Gesundheitskarte gedeckt - man zahlt NICHT vorher
  Termin              In China unueblich, in Spanien die Regel ("cita previa")
  Krankenhaus         In Spanien geht man zuerst ins "centro de salud", nicht
                      direkt ins Krankenhaus - genau umgekehrt zu China

**`lookup_only` bleibt, wie es im Master steht** (wird vom Werkzeug
uebernommen) - die Notfallsaetze sind zum Vorzeigen gedacht, nicht zum
Auswendiglernen.

`verb_cluster` leer, wie im ganzen spanischen Bestand.

**Nicht von Muttersprachlern geprueft** - und hier waere ein Spot-Check
wichtiger als sonst: bei Notfallsaetzen entscheidet Verstaendlichkeit unter
Stress, nicht Eleganz.
"""

SAETZE = [

# ---------------------------------------------------------------- Allergie
 dict(de='Ich habe eine Allergie.', es='Tengo una alergia.',
      k=[('allergie', ['alergia', 'una alergia'])]),
 dict(de='Ich bin allergisch gegen dieses Medikament.',
      es='Soy alérgico a este medicamento.',
      k=[('allergisch', ['alérgico', 'alérgica']),
         ('medikament', ['medicamento', 'medicina'])]),
 dict(de='Ich bin allergisch gegen Erdnüsse.', es='Soy alérgico a los cacahuetes.',
      k=[('allergisch', ['alérgico', 'alérgica']),
         ('erdnuss', ['cacahuetes', 'cacahuete', 'maní'])]),
 dict(de='Ich kann keine Erdnüsse essen.', es='No puedo comer cacahuetes.',
      k=[('nicht_koennen', ['no puedo']),
         ('erdnuss', ['cacahuetes', 'cacahuete', 'maní'])]),
 dict(de='Sind da Erdnüsse drin?', es='¿Lleva cacahuetes?',
      k=[('erdnuss', ['cacahuetes', 'cacahuete', 'maní']),
         ('drin', ['lleva', 'tiene'])]),
 dict(de='Bitte ohne Erdnüsse.', es='Sin cacahuetes, por favor.',
      k=[('ohne', ['sin']), ('erdnuss', ['cacahuetes', 'cacahuete', 'maní'])]),
 dict(de='Bitte ohne Milch.', es='Sin leche, por favor.',
      k=[('ohne', ['sin']), ('milch', ['leche'])]),
 dict(de='Ich vertrage keine Milch.', es='No tolero la leche.',
      k=[('nicht_vertragen', ['no tolero', 'me sienta mal']), ('milch', ['leche'])]),
 dict(de='Was ist da drin?', es='¿Qué lleva?',
      k=[('was', ['qué']), ('drin', ['lleva', 'tiene'])]),
 dict(de='Ich habe mein Allergiemedikament dabei.',
      es='Llevo mi medicamento para la alergia.',
      k=[('dabei', ['llevo', 'tengo']),
         ('allergiemedikament', ['medicamento para la alergia', 'medicamento'])]),
 dict(de='Das ist für mich sehr gefährlich.', es='Para mí es muy peligroso.',
      k=[('gefaehrlich', ['peligroso', 'muy peligroso'])]),
 dict(de='Ist das gefährlich?', es='¿Es peligroso?',
      k=[('gefaehrlich', ['peligroso'])]),

# ---------------------------------------------------------------- Bezahlen
 dict(de='Wie viel kostet das?', es='¿Cuánto cuesta?',
      k=[('kosten', ['cuesta', 'vale'])]),
 dict(de='Ich habe eine Versicherung.', es='Tengo un seguro.',
      k=[('versicherung', ['seguro', 'un seguro'])]),
 dict(de='Nehmen Sie meine Versicherung?', es='¿Aceptan mi seguro?',
      k=[('nehmen', ['aceptan', 'acepta']), ('versicherung', ['seguro', 'mi seguro'])],
      h='Anders als in China wird die Europäische Krankenversicherungskarte '
        '(tarjeta sanitaria europea) in Spanien im öffentlichen System '
        'tatsächlich akzeptiert — mitnehmen lohnt sich.'),
 dict(de='Muss ich vorher bezahlen?', es='¿Tengo que pagar antes?',
      k=[('muessen', ['tengo que']), ('vorher', ['antes']), ('bezahlen', ['pagar'])],
      h='Im öffentlichen spanischen System wird die Notfallbehandlung über die '
        'Gesundheitskarte gedeckt — vorher zahlen muss man dort nicht. In '
        'Privatkliniken schon.'),
 dict(de='Bitte geben Sie mir eine Quittung.', es='Deme un recibo, por favor.',
      k=[('quittung', ['recibo', 'factura'])]),
 dict(de='Ich brauche die Quittung für meine Versicherung.',
      es='Necesito el recibo para mi seguro.',
      k=[('brauchen', ['necesito']), ('quittung', ['recibo', 'factura']),
         ('versicherung', ['seguro'])]),
 dict(de='Kann ich mit dem Handy bezahlen?', es='¿Puedo pagar con el móvil?',
      k=[('koennen', ['puedo']), ('handy', ['móvil', 'celular']),
         ('bezahlen', ['pagar'])]),
 dict(de='Nehmen Sie auch Karte?', es='¿Aceptan tarjeta?',
      k=[('nehmen', ['aceptan', 'acepta']), ('karte', ['tarjeta'])]),
 dict(de='Hier ist meine Karte.', es='Aquí tiene mi tarjeta.',
      k=[('karte', ['tarjeta', 'mi tarjeta'])]),
 dict(de='Zuerst anmelden, dann bezahlen?', es='¿Primero registrarse y luego pagar?',
      k=[('zuerst', ['primero']), ('anmelden', ['registrarse', 'registrar']),
         ('bezahlen', ['pagar'])]),
 dict(de='Wo bekomme ich die Quittung?', es='¿Dónde me dan el recibo?',
      k=[('wo', ['dónde']), ('quittung', ['recibo', 'factura'])]),
 dict(de='Wo kann ich bezahlen?', es='¿Dónde puedo pagar?',
      k=[('wo', ['dónde']), ('bezahlen', ['pagar'])]),
 dict(de='Das ist zu teuer.', es='Es demasiado caro.',
      k=[('teuer', ['caro', 'demasiado caro'])]),
 dict(de='Ich habe nicht genug Geld dabei.', es='No llevo suficiente dinero.',
      k=[('nicht_genug', ['no llevo suficiente', 'no tengo suficiente']),
         ('geld', ['dinero'])]),
 dict(de='Reicht das?', es='¿Es suficiente?',
      k=[('reichen', ['suficiente', 'basta'])]),

# ---------------------------------------------------------------- Krankenhaus
 dict(de='Wo ist das Krankenhaus?', es='¿Dónde está el hospital?',
      k=[('wo', ['dónde']), ('krankenhaus', ['hospital'])],
      h='In Spanien geht man bei nicht dringenden Sachen zuerst ins '
        '„centro de salud" zum Hausarzt, nicht direkt ins Krankenhaus — '
        'genau umgekehrt zu China.'),
 dict(de='Ich möchte zum Arzt.', es='Quiero ir al médico.',
      k=[('moechten', ['quiero', 'quisiera']), ('arzt', ['médico', 'doctor'])]),
 dict(de='Wo melde ich mich an?', es='¿Dónde me registro?',
      k=[('wo', ['dónde']), ('anmelden', ['me registro', 'registrarse', 'admisión'])]),
 dict(de='Ich möchte mich anmelden.', es='Quiero registrarme.',
      k=[('moechten', ['quiero']), ('anmelden', ['registrarme', 'registrar'])]),
 dict(de='Ich habe keinen Termin.', es='No tengo cita.',
      k=[('kein_termin', ['no tengo cita', 'sin cita'])],
      h='In Spanien läuft fast alles über „cita previa" (Voranmeldung) — '
        'ohne Termin wartet man lange oder wird weggeschickt. Anders als in '
        'China, wo man einfach hingeht.'),
 dict(de='Kann ich einen Termin bekommen?', es='¿Puedo pedir cita?',
      k=[('koennen', ['puedo']), ('termin', ['cita', 'pedir cita'])]),
 dict(de='Wie lange muss ich warten?', es='¿Cuánto tengo que esperar?',
      k=[('wie_lange', ['cuánto']), ('warten', ['esperar'])]),
 dict(de='Wie lange dauert das?', es='¿Cuánto tarda?',
      k=[('wie_lange', ['cuánto']), ('dauern', ['tarda', 'tardar'])]),
 dict(de='Bitte geben Sie mir ein Medikament.', es='Deme un medicamento, por favor.',
      k=[('medikament', ['medicamento', 'medicina'])]),
 dict(de='Wie nehme ich das Medikament?', es='¿Cómo tomo el medicamento?',
      k=[('wie', ['cómo']), ('nehmen', ['tomo', 'tomar']),
         ('medikament', ['medicamento', 'medicina'])]),
 dict(de='Wie komme ich dorthin?', es='¿Cómo llego allí?',
      k=[('wie', ['cómo']), ('kommen', ['llego', 'llegar'])]),
 dict(de='Ich spreche kein Spanisch. Können Sie es aufschreiben?',
      es='No hablo español. ¿Me lo puede escribir?',
      neu=True, sz='health_krankenhaus',
      k=[('sprache', ['no hablo español', 'español']),
         ('aufschreiben', ['escribir', 'me lo puede escribir'])]),

# ---------------------------------------------------------------- Notfall
 dict(de='Bitte helfen Sie mir!', es='¡Ayúdeme, por favor!',
      k=[('helfen', ['ayúdeme', 'ayuda', 'ayudar'])]),
 dict(de='Bitte rufen Sie einen Krankenwagen!', es='¡Llame a una ambulancia, por favor!',
      k=[('rufen', ['llame', 'llamar']), ('krankenwagen', ['ambulancia'])],
      h='Der Notruf ist in Spanien und in ganz Europa die 112 — nicht die 120 '
        'wie in China.'),
 dict(de='Ist der Krankenwagen schon unterwegs?', es='¿Viene ya la ambulancia?',
      k=[('krankenwagen', ['ambulancia']), ('unterwegs', ['viene', 'ya viene', 'en camino'])]),
 dict(de='Rufen Sie bitte 112 an.', es='Llame al 112, por favor.',
      neu=True, sz='health_notfall',
      k=[('rufen', ['llame', 'llamar']), ('notrufnummer', ['112', 'al 112'])],
      h='112 gilt in ganz Europa für Rettung, Polizei und Feuerwehr zugleich. '
        'In Lateinamerika ist es je nach Land anders — in Mexiko und Argentinien '
        'die 911.'),
 dict(de='Jemand ist verletzt.', es='Hay alguien herido.',
      k=[('jemand', ['alguien']), ('verletzt', ['herido', 'herida'])]),
 dict(de='Ich bin verletzt.', es='Estoy herido.',
      k=[('verletzt', ['herido', 'herida'])]),
 dict(de='Schnell, bitte!', es='¡Rápido, por favor!',
      k=[('schnell', ['rápido', 'deprisa'])]),
 dict(de='Ich brauche etwas aus der Apotheke.', es='Necesito algo de la farmacia.',
      k=[('brauchen', ['necesito']), ('apotheke', ['farmacia'])]),
 dict(de='Ich bin allein hier.', es='Estoy solo aquí.',
      k=[('allein', ['solo', 'sola'])]),
 dict(de='Bitte rufen Sie meinen Freund an.', es='Llame a mi amigo, por favor.',
      k=[('rufen', ['llame', 'llamar']), ('freund', ['amigo', 'mi amigo'])]),
 dict(de='Bitte rufen Sie die Polizei!', es='¡Llame a la policía, por favor!',
      k=[('rufen', ['llame', 'llamar']), ('polizei', ['policía'])]),
 dict(de='Ich möchte die Polizei rufen.', es='Quiero llamar a la policía.',
      k=[('moechten', ['quiero']), ('polizei', ['policía'])]),

# ---------------------------------------------------------------- Symptome
 dict(de='Ich bin krank.', es='Estoy enfermo.',
      k=[('krank', ['enfermo', 'enferma'])]),
 dict(de='Ich bin erkältet.', es='Estoy resfriado.',
      k=[('erkaeltet', ['resfriado', 'resfriada', 'constipado'])]),
 dict(de='Ich habe Bauchschmerzen.', es='Me duele el estómago.',
      k=[('bauchschmerzen', ['me duele el estómago', 'dolor de estómago', 'barriga'])]),
 dict(de='Mein Bein tut weh.', es='Me duele la pierna.',
      k=[('bein', ['pierna']), ('weh', ['me duele', 'duele'])]),
 dict(de='Hier tut es weh.', es='Me duele aquí.',
      k=[('hier', ['aquí']), ('weh', ['me duele', 'duele'])]),
 dict(de='Mir geht es sehr schlecht.', es='Me encuentro muy mal.',
      k=[('schlecht', ['muy mal', 'mal', 'me encuentro mal'])]),
 dict(de='Ich bin sehr müde.', es='Estoy muy cansado.',
      k=[('muede', ['cansado', 'cansada'])]),
 dict(de='Mir ist kalt.', es='Tengo frío.',
      k=[('kalt', ['frío', 'tengo frío'])]),
 dict(de='Seit gestern.', es='Desde ayer.',
      k=[('seit', ['desde']), ('gestern', ['ayer'])]),
 dict(de='Seit heute Morgen.', es='Desde esta mañana.',
      k=[('seit', ['desde']), ('heute_morgen', ['esta mañana'])]),
]

AUSGELASSEN = [
    # Chinesische Notrufnummer - ersetzt durch die 112-Fassung oben.
    'Rufen Sie bitte 120 an.',
    # Zielsprache steht im Satz - ersetzt durch die spanische Fassung oben.
    'Ich spreche kein Chinesisch. Können Sie es aufschreiben?',
    # TCM/westliche Medizin ist eine chinesische Unterscheidung, in Spanien
    # gibt es sie nicht.
    'Ich möchte westliche Medizin.',
    'Ist das westliche Medizin?',
]
