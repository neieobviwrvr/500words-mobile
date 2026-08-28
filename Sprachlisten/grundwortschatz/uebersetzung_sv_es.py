# -*- coding: utf-8 -*-
"""Die 24 neuen Grundwortschatz-Saetze auf Schwedisch und Spanisch.

Deutsch steht seit dem 2026-08-22 bei 62 Saetzen, Schwedisch und Spanisch bei
38 - die 24 aus `welle1.py` fehlten. Hier sind sie.

Der deutsche Text ist der Schluessel (Spalte `german`), er muss ZEICHENGENAU
mit phrasebook_master uebereinstimmen, sonst legt der Import eine zweite
Zeile an statt der Uebersetzung.

**Was nicht mit uebersetzt wird: die Kulturhinweise.** Die aus welle1 sind
china-spezifisch (不客气 wehrt Dank ab, 两 statt 二 vor Zaehlwoertern) und
gelten in Schweden und Spanien nicht. Wo die Zielsprache selbst eine Falle
stellt, steht hier ein EIGENER Hinweis - das ist der Sinn des Feldes, nicht
eine Uebersetzung des chinesischen.

**`verb_cluster` nur auf Schwedisch.** `answer_clusters` enthaelt 25
sv_-Cluster und keinen einzigen spanischen; Spanisch bleibt deshalb wie die
uebrigen 189 spanischen Saetze bei `null`.

**`addressing` bleibt ueberall None.** Die Spalte meint die
GESCHLECHTSVARIANTE ('frauen'/'maenner'), nicht die Anrede du/Sie - ein
Wert darin blendet den Satz fuer alle anderen aus.
"""

# (deutscher Schluessel, schwedisch, sv-Konzepte, sv-Hinweis, sv-Cluster,
#  spanisch, es-Konzepte, es-Hinweis)
SAETZE = [
# ---------------------------------------------------------- Höflich sein
 dict(de='Danke!',
      sv='Tack!', sv_k=[('danke', ['tack'])], sv_h=None, sv_c=None,
      es='¡Gracias!', es_k=[('danke', ['gracias'])], es_h=None),

 dict(de='Vielen Dank!',
      sv='Tack så mycket!', sv_k=[('danke', ['tack så mycket', 'tusen tack', 'tack'])],
      sv_h=None, sv_c=None,
      es='¡Muchas gracias!', es_k=[('danke', ['muchas gracias', 'gracias'])], es_h=None),

 dict(de='Gern geschehen.',
      sv='Varsågod.', sv_k=[('gern_geschehen', ['varsågod', 'ingen orsak', 'det var så lite'])],
      sv_h='Schwedisch hat kein Wort, das „bitte" in allen Lagen abdeckt: '
           '„varsågod" reicht etwas hin oder antwortet auf Dank, „tack" '
           'steht dagegen auch für die Bitte selbst („kaffe, tack").',
      sv_c=None,
      es='De nada.', es_k=[('gern_geschehen', ['de nada', 'no hay de qué'])], es_h=None),

 dict(de='Entschuldigung!',
      sv='Ursäkta!', sv_k=[('entschuldigung', ['ursäkta', 'förlåt'])],
      sv_h=None, sv_c=None,
      es='¡Perdón!', es_k=[('entschuldigung', ['perdón', 'disculpe', 'disculpa'])],
      es_h=None),

 dict(de='Es tut mir leid.',
      sv='Förlåt.', sv_k=[('leid', ['förlåt', 'jag är ledsen', 'ledsen'])],
      sv_h='Zwei Wörter, zwei Anlässe: „ursäkta" bittet um Aufmerksamkeit '
           'oder um Durchlass, „förlåt" entschuldigt sich für etwas '
           'Geschehenes. Vertauscht klingt beides schief.',
      sv_c=None,
      es='Lo siento.', es_k=[('leid', ['lo siento', 'perdón'])], es_h=None),

 dict(de='Kein Problem.',
      sv='Inga problem.', sv_k=[('kein_problem', ['inga problem', 'ingen fara', 'det gör inget'])],
      sv_h=None, sv_c=None,
      es='No hay problema.', es_k=[('kein_problem', ['no hay problema', 'no pasa nada'])],
      es_h=None),

 dict(de='Ja.',
      sv='Ja.', sv_k=[('ja', ['ja', 'jo'])],
      sv_h='„Jo" statt „ja" antwortet auf eine VERNEINTE Frage: '
           '„Har du inte tid?" — „Jo." heißt „doch, habe ich".',
      sv_c=None,
      es='Sí.', es_k=[('ja', ['sí'])], es_h=None),

 dict(de='Nein.',
      sv='Nej.', sv_k=[('nein', ['nej'])], sv_h=None, sv_c=None,
      es='No.', es_k=[('nein', ['no'])], es_h=None),

 dict(de='Ich weiß nicht.',
      sv='Jag vet inte.', sv_k=[('nicht_wissen', ['vet inte', 'ingen aning'])],
      sv_h=None, sv_c=None,
      es='No lo sé.', es_k=[('nicht_wissen', ['no lo sé', 'no sé', 'ni idea'])], es_h=None),

# ---------------------------------------------------------- Zahlen und Preise
 dict(de='Eins, zwei, drei.',
      sv='Ett, två, tre.', sv_k=[('zaehlen', ['ett två tre', 'ett'])],
      sv_h=None, sv_c=None,
      es='Uno, dos, tres.', es_k=[('zaehlen', ['uno dos tres', 'uno'])], es_h=None),

 dict(de='Wie viele?',
      sv='Hur många?', sv_k=[('wie_viele', ['hur många'])], sv_h=None, sv_c=None,
      es='¿Cuántos?', es_k=[('wie_viele', ['cuántos', 'cuántas'])], es_h=None),

 dict(de='Zwei Stück, bitte.',
      sv='Två stycken, tack.', sv_k=[('zwei', ['två']), ('bitte', ['tack'])],
      sv_h=None, sv_c=None,
      es='Dos, por favor.', es_k=[('zwei', ['dos']), ('bitte', ['por favor'])], es_h=None),

 dict(de='Nur eins, bitte.',
      sv='Bara en, tack.', sv_k=[('eins', ['bara en', 'bara ett', 'en', 'ett'])],
      sv_h='Schwedisch hat zwei Geschlechter, und die Eins wechselt mit: '
           '„en kaffe", aber „ett glas". Wer unsicher ist, nimmt „en" — '
           'rund drei Viertel aller Wörter sind en-Wörter.',
      sv_c=None,
      es='Solo uno, por favor.', es_k=[('eins', ['solo uno', 'uno'])], es_h=None),

 dict(de='Das ist genug.',
      sv='Det räcker.', sv_k=[('genug', ['det räcker', 'räcker'])], sv_h=None, sv_c=None,
      es='Es suficiente.', es_k=[('genug', ['suficiente', 'ya está', 'basta'])], es_h=None),

 dict(de='Wie viel ist das zusammen?',
      sv='Hur mycket blir det totalt?',
      sv_k=[('zusammen', ['totalt', 'tillsammans', 'sammanlagt']), ('wieviel', ['hur mycket'])],
      sv_h=None, sv_c=None,
      es='¿Cuánto es en total?',
      es_k=[('zusammen', ['en total', 'total']), ('wieviel', ['cuánto'])], es_h=None),

 dict(de='Wir sind vier Personen.',
      sv='Vi är fyra personer.', sv_k=[('vier', ['fyra']), ('personen', ['personer', 'stycken'])],
      sv_h=None, sv_c=None,
      es='Somos cuatro personas.',
      es_k=[('vier', ['cuatro']), ('personen', ['personas'])],
      es_h='Das „wir" steckt schon in „somos" — Spanisch lässt das '
           'Subjektpronomen weg, wo die Verbform es ohnehin verrät. '
           '„Nosotros somos" ist nicht falsch, klingt aber betont.'),

# ---------------------------------------------------------- Wenn's drauf ankommt
 dict(de='Ich brauche Hilfe.',
      sv='Jag behöver hjälp.', sv_k=[('brauchen', ['behöver']), ('hilfe', ['hjälp'])],
      sv_h=None, sv_c=None,
      es='Necesito ayuda.', es_k=[('brauchen', ['necesito']), ('hilfe', ['ayuda'])], es_h=None),

 dict(de='Wo ist der Ausgang?',
      sv='Var är utgången?', sv_k=[('ausgang', ['utgången', 'utgång']), ('wo', ['var'])],
      sv_h=None, sv_c=None,
      es='¿Dónde está la salida?',
      es_k=[('ausgang', ['salida']), ('wo', ['dónde'])], es_h=None),

 dict(de='Ich habe mein Handy verloren.',
      sv='Jag har tappat min mobil.',
      sv_k=[('handy', ['mobil', 'telefon']), ('verloren', ['tappat', 'förlorat'])],
      sv_h=None, sv_c='sv_verlieren',
      es='He perdido mi móvil.',
      es_k=[('handy', ['móvil', 'celular', 'teléfono']), ('verloren', ['perdido'])],
      es_h='„Móvil" gilt in Spanien, „celular" in Lateinamerika — '
           'verstanden wird beides überall.'),

 dict(de='Ich habe meinen Pass verloren.',
      sv='Jag har tappat mitt pass.',
      sv_k=[('pass', ['pass']), ('verloren', ['tappat', 'förlorat'])],
      sv_h=None, sv_c='sv_verlieren',
      es='He perdido mi pasaporte.',
      es_k=[('pass', ['pasaporte']), ('verloren', ['perdido'])], es_h=None),

# ---------------------------------------------------------- Sich vorstellen
 dict(de='Das ist mein Freund.',
      sv='Det här är min vän.', sv_k=[('freund', ['vän', 'kompis'])],
      sv_h='„Vän" und „kompis" sind Freunde ohne Hintergedanken. Wer '
           '„pojkvän" oder „flickvän" sagt, meint eine Beziehung — '
           'die deutsche Doppeldeutigkeit gibt es hier nicht.',
      sv_c=None,
      es='Este es mi amigo.', es_k=[('freund', ['amigo', 'amiga'])],
      es_h='„Mi amigo" ist der Freund, „mi novio" der Partner. Anders als '
           'im Deutschen ist der Unterschied hörbar.'),

 dict(de='Ich bin zum ersten Mal hier.',
      sv='Det är första gången jag är här.',
      sv_k=[('erstes_mal', ['första gången'])], sv_h=None, sv_c=None,
      es='Es mi primera vez aquí.', es_k=[('erstes_mal', ['primera vez'])], es_h=None),

# ---------------------------------------------------------- Sich verständigen
 dict(de='Was heißt das?',
      sv='Vad betyder det?', sv_k=[('heissen', ['betyder', 'betyda'])],
      sv_h=None, sv_c=None,
      es='¿Qué significa eso?', es_k=[('heissen', ['significa', 'quiere decir'])], es_h=None),

 dict(de='Können Sie das bitte aufschreiben?',
      sv='Kan du skriva ner det?',
      sv_k=[('aufschreiben', ['skriva ner', 'skriva'])],
      sv_h='Schweden duzen alle — Fremde, Vorgesetzte, Behörden. „Ni" '
           'wirkt altmodisch oder herablassend, nicht höflich. Die '
           'deutsche Sie-Form hat hier kein Gegenstück.',
      sv_c=None,
      es='¿Puede escribirlo, por favor?',
      es_k=[('aufschreiben', ['escribir', 'escribirlo', 'apuntar'])],
      es_h='„Puede" ist die Sie-Form (usted). Unter jungen Leuten und in '
           'Spanien duzt man schnell — „¿Puedes escribirlo?" ist dort '
           'meist die passendere Form.'),
]
