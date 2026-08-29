# -*- coding: utf-8 -*-
"""health_emergency auf Franzoesisch: 72 uebertragene + 2 angepasste Saetze.

Dieselben vier Ausschluesse wie in der spanischen Fassung, aus denselben
Gruenden - die Kategorie ist auf das chinesische Gesundheitssystem
zugeschnitten:

  Rufen Sie bitte 120 an.       Die 120 ist der chinesische Rettungsdienst und
                                erreicht in Frankreich niemanden. Ersetzt durch
                                "Rufen Sie bitte 112 an." Im Notfall ist das
                                der gefaehrlichste Fehler, den diese App
                                machen koennte.
  Ich spreche kein Chinesisch.  Zielsprache steht im Satz - ersetzt durch die
  Koennen Sie es aufschreiben?  franzoesische Fassung.
  Ich moechte westliche Medizin. Die Trennung zwischen TCM und westlicher
  Ist das westliche Medizin?     Medizin gibt es in franzoesischen Apotheken
                                 nicht; die Saetze waeren sinnlos.

**Fuenf eigene Kulturhinweise.** Wie bei Spanisch sagen sie teils das
GEGENTEIL der chinesischen:

  Notruf         112 europaweit. In Frankreich gibt es zusaetzlich 15 (SAMU,
                 medizinisch), 17 (Polizei) und 18 (Feuerwehr) - die 112
                 verbindet weiter und ist die sichere Wahl, wenn man die
                 Aufteilung nicht kennt.
  Versicherung   Die Europaeische Krankenversicherungskarte gilt in Frankreich
                 wirklich (in China nuetzt eine auslaendische Karte nichts).
  Vorher zahlen  In Frankreich zahlt man beim Arzt zunaechst selbst und bekommt
                 erstattet - das ist NICHT dasselbe wie Chinas Vorkasse vor der
                 Behandlung, fuehlt sich fuer Deutsche aber aehnlich fremd.
  Apotheke       Die "pharmacie" mit dem gruenen Kreuz beraet bei Kleinigkeiten
                 und gibt vieles ohne Rezept - oft der schnellere Weg als der
                 Arzt.
  Schmerzen      Franzoesisch bildet Schmerz mit "avoir mal à" (Schmerz HABEN
                 an), nicht mit einem eigenen Wort je Koerperteil. Wer das
                 Muster einmal hat, kann jeden Koerperteil einsetzen.

**Nicht von Muttersprachlern geprueft** - bei Notfallsaetzen entscheidet
Verstaendlichkeit unter Stress, nicht Eleganz. Vor der Vertonung ein
Spot-Check.
"""

SAETZE = [

# ---------------------------------------------------------------- Allergie
 dict(de='Ich habe eine Allergie.', fr='J\'ai une allergie.',
      k=[('allergie', ['allergie', 'une allergie'])]),
 dict(de='Ich bin allergisch gegen dieses Medikament.',
      fr='Je suis allergique à ce médicament.',
      k=[('allergisch', ['allergique']), ('medikament', ['médicament'])]),
 dict(de='Ich bin allergisch gegen Erdnüsse.',
      fr='Je suis allergique aux arachides.',
      k=[('allergisch', ['allergique']), ('erdnuss', ['arachides', 'cacahuètes'])]),
 dict(de='Ich bin allergisch gegen Penizillin.',
      fr='Je suis allergique à la pénicilline.',
      k=[('allergisch', ['allergique']), ('penizillin', ['pénicilline'])]),
 dict(de='Ich kann keine Erdnüsse essen.', fr='Je ne peux pas manger d\'arachides.',
      k=[('nicht_koennen', ['je ne peux pas', 'peux pas']),
         ('erdnuss', ['arachides', 'cacahuètes'])]),
 dict(de='Sind da Erdnüsse drin?', fr='Il y a des arachides dedans ?',
      k=[('erdnuss', ['arachides', 'cacahuètes']), ('drin', ['dedans'])]),
 dict(de='Bitte ohne Erdnüsse.', fr='Sans arachides, s\'il vous plaît.',
      k=[('ohne', ['sans']), ('erdnuss', ['arachides', 'cacahuètes'])]),
 dict(de='Bitte ohne Milch.', fr='Sans lait, s\'il vous plaît.',
      k=[('ohne', ['sans']), ('milch', ['lait'])]),
 dict(de='Ich vertrage keine Milch.', fr='Je ne supporte pas le lait.',
      k=[('nicht_vertragen', ['je ne supporte pas', 'supporte pas']),
         ('milch', ['lait'])]),
 dict(de='Was ist da drin?', fr='Qu\'est-ce qu\'il y a dedans ?',
      k=[('was', ['qu\'est-ce']), ('drin', ['dedans'])]),
 dict(de='Ich habe mein Allergiemedikament dabei.',
      fr='J\'ai mon médicament contre l\'allergie.',
      k=[('dabei', ['j\'ai', 'sur moi']),
         ('allergiemedikament', ['médicament contre l\'allergie', 'médicament'])]),
 dict(de='Das ist für mich sehr gefährlich.', fr='C\'est très dangereux pour moi.',
      k=[('gefaehrlich', ['dangereux', 'très dangereux'])]),
 dict(de='Ist das gefährlich?', fr='C\'est dangereux ?',
      k=[('gefaehrlich', ['dangereux'])]),

# ---------------------------------------------------------------- Bezahlen
 dict(de='Wie viel kostet das?', fr='Ça coûte combien ?',
      k=[('kosten', ['ça coûte combien', 'coûte', 'combien'])]),
 dict(de='Ich habe eine Versicherung.', fr='J\'ai une assurance.',
      k=[('versicherung', ['assurance', 'une assurance'])]),
 dict(de='Nehmen Sie meine Versicherung?', fr='Vous acceptez mon assurance ?',
      k=[('nehmen', ['vous acceptez', 'acceptez']), ('versicherung', ['assurance'])],
      h='Anders als in China gilt die Europäische Krankenversicherungskarte in '
        'Frankreich wirklich — mitnehmen lohnt sich. Franzosen selbst zeigen '
        'ihre „carte Vitale".'),
 dict(de='Muss ich vorher bezahlen?', fr='Je dois payer avant ?',
      k=[('muessen', ['je dois', 'dois']), ('vorher', ['avant']),
         ('bezahlen', ['payer'])],
      h='In Frankreich zahlt man beim Arzt in der Regel selbst und bekommt das '
        'Geld später erstattet. Das ist nicht Chinas Vorkasse vor der '
        'Behandlung, fühlt sich für Deutsche aber ähnlich ungewohnt an.'),
 dict(de='Bitte geben Sie mir eine Quittung.',
      fr='Donnez-moi un reçu, s\'il vous plaît.',
      k=[('quittung', ['reçu', 'un reçu'])]),
 dict(de='Ich brauche die Quittung für meine Versicherung.',
      fr='J\'ai besoin du reçu pour mon assurance.',
      k=[('brauchen', ['j\'ai besoin', 'besoin']), ('quittung', ['reçu']),
         ('versicherung', ['assurance'])]),
 dict(de='Kann ich mit dem Handy bezahlen?',
      fr='Je peux payer avec le téléphone ?',
      k=[('koennen', ['je peux', 'peux']), ('handy', ['téléphone', 'portable']),
         ('bezahlen', ['payer'])]),
 dict(de='Nehmen Sie auch Karte?', fr='Vous prenez la carte ?',
      k=[('nehmen', ['vous prenez', 'prenez', 'acceptez']), ('karte', ['carte'])]),
 dict(de='Hier ist meine Karte.', fr='Voici ma carte.',
      k=[('karte', ['carte', 'ma carte'])]),
 dict(de='Ich habe meine Versicherungskarte vergessen.',
      fr='J\'ai oublié ma carte d\'assurance.',
      k=[('vergessen', ['j\'ai oublié', 'oublié']),
         ('versicherungskarte', ['carte d\'assurance', 'carte'])]),
 dict(de='Zuerst anmelden, dann bezahlen?',
      fr='D\'abord s\'enregistrer, puis payer ?',
      k=[('zuerst', ['d\'abord']), ('anmelden', ['s\'enregistrer', 'enregistrer']),
         ('bezahlen', ['payer'])]),
 dict(de='Wo bekomme ich die Quittung?', fr='Où est-ce que je reçois le reçu ?',
      k=[('wo', ['où']), ('quittung', ['reçu'])]),
 dict(de='Wo kann ich bezahlen?', fr='Où est-ce que je peux payer ?',
      k=[('wo', ['où']), ('bezahlen', ['payer'])]),
 dict(de='Das ist zu teuer.', fr='C\'est trop cher.',
      k=[('teuer', ['cher', 'trop cher'])]),
 dict(de='Ich habe nicht genug Geld dabei.',
      fr='Je n\'ai pas assez d\'argent sur moi.',
      k=[('nicht_genug', ['pas assez']), ('geld', ['argent'])]),
 dict(de='Reicht das?', fr='Ça suffit ?',
      k=[('reichen', ['ça suffit', 'suffit'])]),

# ---------------------------------------------------------------- Krankenhaus
 dict(de='Wo ist das Krankenhaus?', fr='Où est l\'hôpital ?',
      k=[('wo', ['où']), ('krankenhaus', ['hôpital', 'l\'hôpital'])],
      h='Bei nicht dringenden Sachen geht man in Frankreich zuerst zum '
        '„médecin généraliste" (Hausarzt) oder in die Apotheke — nicht direkt '
        'ins Krankenhaus. Genau umgekehrt zu China.'),
 dict(de='Ich möchte zum Arzt.', fr='Je voudrais voir un médecin.',
      k=[('moechten', ['je voudrais', 'voudrais']), ('arzt', ['médecin'])]),
 dict(de='Wo melde ich mich an?', fr='Où est-ce que je m\'enregistre ?',
      k=[('wo', ['où']), ('anmelden', ['m\'enregistre', 'enregistrer', 'accueil'])]),
 dict(de='Ich möchte mich anmelden.', fr='Je voudrais m\'enregistrer.',
      k=[('moechten', ['je voudrais', 'voudrais']),
         ('anmelden', ['m\'enregistrer', 'enregistrer'])]),
 dict(de='Ich habe keinen Termin.', fr='Je n\'ai pas de rendez-vous.',
      k=[('kein_termin', ['pas de rendez-vous', 'sans rendez-vous'])],
      h='In Frankreich läuft fast alles über „rendez-vous" — ohne Termin '
        'wartet man lange oder wird weggeschickt. Anders als in China, wo man '
        'einfach hingeht.'),
 dict(de='Kann ich einen Termin bekommen?', fr='Je peux avoir un rendez-vous ?',
      k=[('koennen', ['je peux', 'peux']), ('termin', ['rendez-vous'])]),
 dict(de='Wie lange muss ich warten?',
      fr='Je dois attendre combien de temps ?',
      k=[('wie_lange', ['combien de temps']), ('warten', ['attendre'])]),
 dict(de='Wie lange dauert das?', fr='Ça prend combien de temps ?',
      k=[('wie_lange', ['combien de temps']), ('dauern', ['ça prend', 'prend'])]),
 dict(de='Bitte geben Sie mir ein Medikament.',
      fr='Donnez-moi un médicament, s\'il vous plaît.',
      k=[('medikament', ['médicament', 'un médicament'])]),
 dict(de='Wie nehme ich das Medikament?',
      fr='Comment je prends ce médicament ?',
      k=[('wie', ['comment']), ('nehmen', ['je prends', 'prends']),
         ('medikament', ['médicament'])]),
 dict(de='Wie oft muss ich das Medikament nehmen?',
      fr='Je dois prendre ce médicament combien de fois par jour ?',
      k=[('medikament', ['médicament']),
         ('wie_oft', ['combien de fois', 'combien de fois par jour'])]),
 dict(de='Ich habe meine Tabletten vergessen.', fr='J\'ai oublié mes médicaments.',
      k=[('vergessen', ['j\'ai oublié', 'oublié']),
         ('tabletten', ['médicaments', 'cachets'])]),
 dict(de='Wie komme ich dorthin?', fr='Comment j\'y vais ?',
      k=[('wie', ['comment']), ('kommen', ['j\'y vais', 'aller'])]),
 dict(de='Ich spreche kein Französisch. Können Sie es aufschreiben?',
      fr='Je ne parle pas français. Vous pouvez l\'écrire ?',
      neu=True, sz='health_krankenhaus',
      k=[('sprache', ['je ne parle pas français', 'français']),
         ('aufschreiben', ['écrire', 'l\'écrire', 'noter'])]),

# ---------------------------------------------------------------- Notfall
 dict(de='Bitte helfen Sie mir!', fr='Aidez-moi, s\'il vous plaît !',
      k=[('helfen', ['aidez-moi', 'aider', 'aide'])]),
 dict(de='Bitte rufen Sie einen Krankenwagen!',
      fr='Appelez une ambulance, s\'il vous plaît !',
      k=[('rufen', ['appelez', 'appeler']), ('krankenwagen', ['ambulance'])],
      h='Der Notruf ist in Frankreich und europaweit die 112 — nicht die 120 '
        'wie in China. Daneben gibt es 15 (SAMU, medizinisch), 17 (Polizei) '
        'und 18 (Feuerwehr); die 112 verbindet weiter.'),
 dict(de='Ist der Krankenwagen schon unterwegs?', fr='L\'ambulance arrive ?',
      k=[('krankenwagen', ['ambulance']), ('unterwegs', ['arrive', 'en route'])]),
 dict(de='Rufen Sie bitte 112 an.', fr='Appelez le 112, s\'il vous plaît.',
      neu=True, sz='health_notfall',
      k=[('rufen', ['appelez', 'appeler']), ('notrufnummer', ['112', 'le 112'])],
      h='112 gilt in ganz Europa und verbindet zum richtigen Dienst. Wer die '
        'französische Aufteilung kennt, kann direkter wählen: 15 für den '
        'Rettungsdienst, 17 Polizei, 18 Feuerwehr.'),
 dict(de='Jemand ist verletzt.', fr='Quelqu\'un est blessé.',
      k=[('jemand', ['quelqu\'un']), ('verletzt', ['blessé', 'blessée'])]),
 dict(de='Ich bin verletzt.', fr='Je suis blessé.',
      k=[('verletzt', ['blessé', 'blessée'])]),
 dict(de='Schnell, bitte!', fr='Vite, s\'il vous plaît !',
      k=[('schnell', ['vite'])]),
 dict(de='Ich brauche einen Arzt.', fr='J\'ai besoin d\'un médecin.',
      k=[('brauchen', ['j\'ai besoin', 'besoin']), ('arzt', ['médecin'])]),
 dict(de='Ich brauche dringend Hilfe.', fr='J\'ai besoin d\'aide, c\'est urgent.',
      k=[('brauchen', ['j\'ai besoin', 'besoin']), ('hilfe', ['aide']),
         ('dringend', ['urgent', 'c\'est urgent'])]),
 dict(de='Ich brauche etwas aus der Apotheke.',
      fr='J\'ai besoin de quelque chose à la pharmacie.',
      k=[('brauchen', ['j\'ai besoin', 'besoin']), ('apotheke', ['pharmacie'])]),
 dict(de='Wo ist die nächste Apotheke?',
      fr='Où est la pharmacie la plus proche ?',
      k=[('wo', ['où']), ('apotheke', ['pharmacie']),
         ('naechste', ['la plus proche', 'proche'])],
      h='Die „pharmacie" mit dem grünen Kreuz berät bei Kleinigkeiten und gibt '
        'vieles ohne Rezept heraus — oft der schnellere Weg als der Arzt.'),
 dict(de='Wo ist das nächste Krankenhaus?',
      fr='Où est l\'hôpital le plus proche ?',
      k=[('wo', ['où']), ('krankenhaus', ['hôpital']),
         ('naechste', ['le plus proche', 'proche'])]),
 dict(de='Ich bin allein hier.', fr='Je suis seul ici.',
      k=[('allein', ['seul', 'seule'])]),
 dict(de='Bitte rufen Sie meinen Freund an.',
      fr='Appelez mon ami, s\'il vous plaît.',
      k=[('rufen', ['appelez', 'appeler']), ('freund', ['ami', 'mon ami'])]),
 dict(de='Bitte rufen Sie die Polizei!', fr='Appelez la police, s\'il vous plaît !',
      k=[('rufen', ['appelez', 'appeler']), ('polizei', ['police'])]),
 dict(de='Ich möchte die Polizei rufen.', fr='Je voudrais appeler la police.',
      k=[('moechten', ['je voudrais', 'voudrais']), ('polizei', ['police'])]),

# ---------------------------------------------------------------- Symptome
 dict(de='Ich bin krank.', fr='Je suis malade.',
      k=[('krank', ['malade'])]),
 dict(de='Ich bin erkältet.', fr='J\'ai un rhume.',
      k=[('erkaeltet', ['rhume', 'un rhume', 'enrhumé'])]),
 dict(de='Ich habe Fieber.', fr='J\'ai de la fièvre.',
      k=[('fieber', ['fièvre', 'de la fièvre'])]),
 dict(de='Ich habe Kopfschmerzen.', fr='J\'ai mal à la tête.',
      k=[('kopfschmerzen', ['mal à la tête', 'tête'])],
      h='Schmerz wird im Französischen mit „avoir mal à" gebildet — wörtlich '
        '„Schmerz haben an". Das Muster trägt jeden Körperteil: à la tête, '
        'au ventre, à la jambe.'),
 dict(de='Ich habe Bauchschmerzen.', fr='J\'ai mal au ventre.',
      k=[('bauchschmerzen', ['mal au ventre', 'ventre'])]),
 dict(de='Mein Bein tut weh.', fr='J\'ai mal à la jambe.',
      k=[('bein', ['jambe']), ('weh', ['mal', 'j\'ai mal'])]),
 dict(de='Hier tut es weh.', fr='J\'ai mal ici.',
      k=[('hier', ['ici']), ('weh', ['mal', 'j\'ai mal'])]),
 dict(de='Ich habe mir den Fuß verletzt.', fr='Je me suis blessé au pied.',
      k=[('fuss', ['pied']), ('verletzt', ['blessé', 'je me suis blessé'])]),
 dict(de='Ich fühle mich schwindelig.', fr='J\'ai des vertiges.',
      k=[('schwindel', ['vertiges', 'des vertiges'])]),
 dict(de='Mir geht es nicht gut.', fr='Je ne me sens pas bien.',
      k=[('nicht_gut', ['je ne me sens pas bien', 'pas bien'])]),
 dict(de='Mir geht es sehr schlecht.', fr='Je me sens très mal.',
      k=[('schlecht', ['très mal', 'mal'])]),
 dict(de='Ich bin sehr müde.', fr='Je suis très fatigué.',
      k=[('muede', ['fatigué', 'fatiguée'])]),
 dict(de='Mir ist kalt.', fr='J\'ai froid.',
      k=[('kalt', ['froid', 'j\'ai froid'])]),
 dict(de='Seit gestern.', fr='Depuis hier.',
      k=[('seit', ['depuis']), ('gestern', ['hier'])]),
 dict(de='Seit heute Morgen.', fr='Depuis ce matin.',
      k=[('seit', ['depuis']), ('heute_morgen', ['ce matin'])]),
]

AUSGELASSEN = [
    # Chinesische Notrufnummer - ersetzt durch die 112-Fassung oben.
    'Rufen Sie bitte 120 an.',
    # Zielsprache steht im Satz - ersetzt durch die franzoesische Fassung.
    'Ich spreche kein Chinesisch. Können Sie es aufschreiben?',
    # TCM/westliche Medizin ist eine chinesische Unterscheidung.
    'Ich möchte westliche Medizin.',
    'Ist das westliche Medizin?',
]
