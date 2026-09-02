# -*- coding: utf-8 -*-
"""Grundwortschatz auf Norwegisch (Bokmaal) - die ersten Saetze der Sprache.

Italienisch, Norwegisch und Russisch kamen am 2026-09-03 zusammen dazu
(Simons Auftrag). Das hier ist der freie Teil, den jeder Nutzer bekommt.

**BOKMAAL, nicht Nynorsk.** Norwegen hat zwei gleichberechtigte
Schriftnormen; Bokmaal schreiben rund 85-90%, es ist die Norm jedes
Sprachkurses und das, was die Zielgruppe in Oslo oder Bergen liest. Nynorsk
ist im Westen und in Teilen der Verwaltung verbreitet - fuer eine App, die
Alltagsgespraeche in zwei Monaten verspricht, waere die zweite Norm
Ballast. Steht auch im Kopf der Migration.

**Zwei Saetze fallen raus, beide aus demselben Grund:**

  Ich spreche ein bisschen    Die ZIELSPRACHE steht im Satz. Woertlich
  Deutsch.                    uebersetzt lernte ein Deutscher, auf
  Wie sagt man das auf        Norwegisch zu sagen, dass er Deutsch spricht -
  Deutsch?                    nutzlos. Beide durch die norwegische Fassung
                              ersetzt (`neu=True` weiter unten), dasselbe
                              Muster wie in den anderen Sprachen.

**Der Gruss-Zusammenfall, der Italienisch und Franzoesisch Saetze kostet,
faellt hier NICHT an:** "god morgen", "god dag" und "god kveld" sind drei
verschiedene Woerter, "ha det" ist der Abschied, "hei" der Gruss. Alle 75
Master-Saetze lassen sich also eins zu eins abbilden.

**Die eigentliche Ueberraschung fuer Deutsche ist das Gegenteil einer
Falle: Norwegen siezt praktisch nicht.** "De" ist so gut wie ausgestorben
und klingt heute steif bis unhoeflich-distanziert. Geduzt wird jeder -
Professorin, Chef, Polizist. Wer aus dem Deutschen kommt und hoeflich sein
will, macht es hier falsch herum. Steht als Hinweis am Vorstellungssatz.

`verb_cluster` bleibt leer - `answer_clusters` hat keine norwegischen
Cluster (gleiche Lage wie Spanisch, Franzoesisch, Italienisch).

**Nicht von Muttersprachlern geprueft.**
"""

SAETZE = [

# ---------------------------------------------------------------- Begrüßung
 dict(de='Hallo!', no='Hei!',
      k=[('hallo', ['hei', 'hallo'])],
      h='„Hei" ist der Normalfall und passt überall — im Laden, an der Uni, '
        'gegenüber Fremden. Ein förmlicheres Wort braucht man kaum.'),
 dict(de='Guten Morgen!', no='God morgen!',
      k=[('morgen_gruss', ['god morgen'])]),
 dict(de='Guten Tag!', no='God dag!',
      k=[('tag_gruss', ['god dag'])],
      h='„God dag" ist korrekt, aber deutlich förmlicher als das deutsche '
        '„Guten Tag" — im Alltag sagt fast jeder einfach „hei".'),
 dict(de='Guten Abend!', no='God kveld!',
      k=[('abend_gruss', ['god kveld'])]),
 dict(de='Wie geht es dir?', no='Hvordan går det?',
      k=[('wie_gehts', ['hvordan går det', 'går det bra', 'hvordan har du det'])]),
 dict(de='Mir geht es gut, danke.', no='Det går bra, takk.',
      k=[('gut_danke', ['det går bra', 'bra takk', 'alt bra'])]),
 dict(de='Auf Wiedersehen!', no='Ha det bra!',
      k=[('wiedersehen', ['ha det bra', 'ha det'])]),
 dict(de='Bis später!', no='Vi ses senere!',
      k=[('bis_spaeter', ['vi ses senere', 'vi ses', 'ses senere'])]),
 dict(de='Tschüss!', no='Ha det!',
      k=[('tschuess', ['ha det', 'ses'])]),

# --------------------------------------------------------------- Höflichkeit
 dict(de='Danke!', no='Takk!',
      k=[('danke', ['takk'])]),
 dict(de='Vielen Dank!', no='Tusen takk!',
      k=[('danke', ['tusen takk', 'mange takk'])],
      h='Wörtlich „tausend Dank" — und das ist die normale Form, nicht die '
        'übertriebene. Ein blankes „takk" wirkt knapper als das deutsche '
        '„danke".'),
 dict(de='Gern geschehen.', no='Bare hyggelig.',
      k=[('gern_geschehen', ['bare hyggelig', 'ingen årsak'])]),
 dict(de='Entschuldigung!', no='Unnskyld!',
      k=[('entschuldigung', ['unnskyld', 'beklager'])],
      h='„Unnskyld" ist die Anrede („Entschuldigung, dürfte ich..."), '
        '„beklager" das Bedauern („tut mir leid"). Wer sich durchdrängelt, '
        'sagt „unnskyld".'),
 dict(de='Es tut mir leid.', no='Jeg beklager.',
      k=[('leid', ['jeg beklager', 'beklager', 'det var leit'])]),
 dict(de='Kein Problem.', no='Ikke noe problem.',
      k=[('kein_problem', ['ikke noe problem', 'det går bra', 'null stress'])]),
 dict(de='Ja.', no='Ja.',
      k=[('ja', ['ja'])]),
 dict(de='Nein.', no='Nei.',
      k=[('nein', ['nei'])]),
 dict(de='Ich weiß nicht.', no='Jeg vet ikke.',
      k=[('nicht_wissen', ['jeg vet ikke', 'vet ikke'])]),

# ------------------------------------------------------------------ Kommentar
 dict(de='Wirklich?', no='Virkelig?',
      k=[('wirklich', ['virkelig', 'seriøst', 'er det sant'])]),
 dict(de='Cool!', no='Kult!',
      k=[('cool', ['kult', 'kult da', 'digg'])]),
 dict(de='Macht nichts.', no='Det gjør ingenting.',
      k=[('macht_nichts', ['det gjør ingenting', 'går bra', 'samme det'])]),
 dict(de='Genau!', no='Nettopp!',
      k=[('genau', ['nettopp', 'akkurat'])]),
 dict(de='Stimmt.', no='Det stemmer.',
      k=[('stimmt', ['det stemmer', 'stemmer', 'sant'])]),
 dict(de='Schade!', no='Så synd!',
      k=[('schade', ['så synd', 'synd'])]),
 dict(de='Na klar!', no='Selvfølgelig!',
      k=[('na_klar', ['selvfølgelig', 'klart det', 'absolutt'])]),
 dict(de='Auf keinen Fall!', no='Absolutt ikke!',
      k=[('auf_keinen_fall', ['absolutt ikke', 'aldri i livet', 'ikke tale om'])]),

# -------------------------------------------------------------------- Notlage
 dict(de='Wo ist die Toilette?', no='Hvor er toalettet?',
      k=[('toilette', ['toalettet', 'toalett', 'do'])]),
 dict(de='Hilfe!', no='Hjelp!',
      k=[('hilfe', ['hjelp'])]),
 dict(de='Ich brauche Hilfe.', no='Jeg trenger hjelp.',
      k=[('brauchen', ['jeg trenger', 'trenger']),
         ('hilfe', ['hjelp'])]),
 dict(de='Wo ist der Ausgang?', no='Hvor er utgangen?',
      k=[('ausgang', ['utgangen', 'utgang']),
         ('wo', ['hvor er', 'hvor'])]),
 dict(de='Ich habe mein Handy verloren.', no='Jeg har mistet mobilen.',
      k=[('handy', ['mobilen', 'mobil', 'telefonen']),
         ('verloren', ['har mistet', 'mistet'])]),
 dict(de='Ich habe meinen Pass verloren.', no='Jeg har mistet passet.',
      k=[('pass', ['passet', 'pass']),
         ('verloren', ['har mistet', 'mistet'])]),
 dict(de='Entschuldigung, wo ist die Toilette?', no='Unnskyld, hvor er toalettet?',
      k=[('entschuldigung', ['unnskyld']),
         ('toilette', ['toalettet', 'toalett'])]),

# --------------------------------------------------------------------- Termin
 dict(de='Wann hast du Zeit?', no='Når har du tid?',
      k=[('wann_zeit', ['når har du tid', 'når passer det', 'når kan du'])]),
 dict(de='Ich habe morgen keine Zeit.', no='Jeg har ikke tid i morgen.',
      k=[('keine_zeit', ['har ikke tid', 'ikke tid'])]),
 dict(de='Können wir uns nächste Woche treffen?', no='Kan vi møtes neste uke?',
      k=[('treffen', ['møtes', 'møte', 'treffes'])]),
 dict(de='Ich habe einen Termin um 10 Uhr.', no='Jeg har en avtale klokka ti.',
      k=[('termin', ['avtale']),
         ('zehn_uhr', ['klokka ti', 'ti'])]),
 dict(de='Wann hast du Geburtstag?', no='Når har du bursdag?',
      k=[('geburtstag_frage', ['når har du bursdag', 'når er bursdagen din'])]),
 dict(de='Mein Geburtstag ist im März.', no='Bursdagen min er i mars.',
      k=[('geburtstag', ['bursdag', 'bursdagen']),
         ('maerz', ['mars'])]),

# -------------------------------------------------------------------- Uhrzeit
 dict(de='Wie spät ist es?', no='Hva er klokka?',
      k=[('wie_spaet', ['hva er klokka', 'hvor mye er klokka'])]),
 dict(de='Es ist drei Uhr.', no='Klokka er tre.',
      k=[('uhrzeit', ['klokka er tre', 'tre'])]),
 dict(de='Um wie viel Uhr beginnt der Film?', no='Når begynner filmen?',
      k=[('beginn_frage', ['når begynner', 'når starter']),
         ('film', ['filmen', 'film'])]),
 dict(de='Welcher Tag ist heute?', no='Hvilken dag er det i dag?',
      k=[('welcher_tag', ['hvilken dag', 'hvilken dag er det'])]),
 dict(de='Heute ist Montag.', no='I dag er det mandag.',
      k=[('tag', ['mandag'])]),
 dict(de='Wir bleiben fünf Minuten.', no='Vi blir fem minutter.',
      k=[('bleiben', ['vi blir', 'blir']),
         ('fuenf_minuten', ['fem minutter'])]),

# --------------------------------------------------------------- Verständigen
 dict(de='Sprichst du Englisch?', no='Snakker du engelsk?',
      k=[('sprache_frage', ['snakker du engelsk', 'engelsk'])],
      h='Fast jeder in Norwegen spricht sehr gut Englisch — und wechselt '
        'sofort dorthin, sobald du zögerst. Wer Norwegisch üben will, muss '
        'freundlich dabeibleiben, sonst läuft das Gespräch auf Englisch '
        'weiter.'),
 dict(de='Kannst du bitte langsamer sprechen?', no='Kan du snakke litt saktere?',
      k=[('langsamer', ['saktere', 'litt saktere', 'langsommere'])]),
 dict(de='Ich verstehe das nicht.', no='Jeg forstår ikke.',
      k=[('nicht_verstehen', ['jeg forstår ikke', 'forstår ikke', 'skjønner ikke'])]),
 dict(de='Kannst du das bitte wiederholen?', no='Kan du gjenta det?',
      k=[('wiederholen', ['gjenta', 'si det igjen', 'en gang til'])]),
 dict(de='Was heißt das?', no='Hva betyr det?',
      k=[('heissen', ['hva betyr det', 'betyr'])]),
 dict(de='Können Sie das bitte aufschreiben?', no='Kan du skrive det ned?',
      k=[('aufschreiben', ['skrive det ned', 'skrive ned', 'skrive'])]),
 dict(de='Bitte sag es noch einmal.', no='Si det en gang til, er du snill.',
      k=[('noch_einmal', ['en gang til', 'si det igjen'])]),
 dict(de='Ich spreche ein bisschen Norwegisch.', no='Jeg snakker litt norsk.',
      neu=True, sz='verstaendigen',
      k=[('bisschen_sprache', ['litt norsk', 'snakker litt', 'litt'])]),
 dict(de='Wie sagt man das auf Norwegisch?', no='Hva heter det på norsk?',
      neu=True, sz='verstaendigen',
      k=[('wie_sagt_man', ['hva heter det', 'hvordan sier man']),
         ('sprache', ['på norsk', 'norsk'])]),

# ---------------------------------------------------------------- Vorstellung
 dict(de='Wie heißt du?', no='Hva heter du?',
      k=[('wie_heisst', ['hva heter du', 'navnet ditt'])],
      h='Norwegen siezt praktisch nicht — „De" ist ausgestorben und klingt '
        'heute steif. Geduzt wird jeder: Professorin, Chef, Polizist. Wer aus '
        'dem Deutschen kommt und höflich sein will, macht es hier genau '
        'falsch herum.'),
 dict(de='Ich heiße Anna.', no='Jeg heter Anna.',
      k=[('heisse_x', ['jeg heter', 'heter'])]),
 dict(de='Woher kommst du?', no='Hvor kommer du fra?',
      k=[('woher', ['hvor kommer du fra', 'hvor er du fra'])]),
 dict(de='Ich komme aus Deutschland.', no='Jeg kommer fra Tyskland.',
      k=[('komme_aus', ['fra tyskland', 'kommer fra tyskland', 'jeg er tysk'])]),
 dict(de='Wie alt bist du?', no='Hvor gammel er du?',
      k=[('wie_alt', ['hvor gammel er du', 'hvor gammel'])]),
 dict(de='Ich bin 25 Jahre alt.', no='Jeg er tjuefem år gammel.',
      k=[('alter', ['tjuefem år', '25 år'])]),
 dict(de='Freut mich, dich kennenzulernen.', no='Hyggelig å møte deg.',
      k=[('freut_mich', ['hyggelig å møte deg', 'hyggelig'])],
      h='Ein blankes „hyggelig" reicht völlig — es ist die Standardformel beim '
        'Vorstellen.'),
 dict(de='Das ist mein Freund.', no='Dette er vennen min.',
      k=[('freund', ['vennen min', 'venn'])],
      h='„Vennen min" ist der Kumpel, „kjæresten min" der feste Freund oder '
        'die feste Freundin — „kjæreste" ist geschlechtsneutral, anders als im '
        'Deutschen.'),
 dict(de='Ich bin zum ersten Mal hier.', no='Det er første gang jeg er her.',
      k=[('erstes_mal', ['første gang'])]),
 dict(de='Seid ihr Studenten?', no='Er dere studenter?',
      k=[('studenten_frage', ['er dere studenter', 'studenter'])]),

# ---------------------------------------------------------------------- Zahlen
 dict(de='Wie viel kostet das?', no='Hva koster det?',
      k=[('kosten_frage', ['hva koster det', 'hvor mye koster'])]),
 dict(de='Das kostet zehn Euro.', no='Det koster ti euro.',
      k=[('preis', ['ti euro'])],
      h='Norwegen zahlt in Kronen, nicht in Euro — im Alltag heißt es '
        '„ti kroner". Und praktisch alles läuft bargeldlos, oft nicht einmal '
        'mit Karte, sondern per Handy-App.'),
 dict(de='Ich hätte gern die Rechnung.', no='Kan jeg få regningen?',
      k=[('rechnung', ['regningen', 'regning'])]),
 dict(de='Eins, zwei, drei.', no='Én, to, tre.',
      k=[('zaehlen', ['én to tre', 'en', 'to', 'tre'])]),
 dict(de='Wie viele?', no='Hvor mange?',
      k=[('wie_viele', ['hvor mange'])]),
 dict(de='Zwei Stück, bitte.', no='To, takk.',
      k=[('zwei', ['to']),
         ('bitte', ['takk'])],
      h='Norwegisch hat kein eigenes Wort für „bitte" beim Bestellen — man '
        'hängt „takk" (danke) an. „Vær så snill" gibt es, klingt aber '
        'bittend und passt nicht an die Theke.'),
 dict(de='Nur eins, bitte.', no='Bare én, takk.',
      k=[('eins', ['bare én', 'én', 'en'])]),
 dict(de='Das ist genug.', no='Det holder.',
      k=[('genug', ['det holder', 'holder', 'nok'])]),
 dict(de='Wie viel ist das zusammen?', no='Hvor mye blir det til sammen?',
      k=[('zusammen', ['til sammen', 'totalt']),
         ('wieviel', ['hvor mye', 'hva blir det'])]),
 dict(de='Wir sind vier Personen.', no='Vi er fire personer.',
      k=[('vier', ['fire']),
         ('personen', ['personer', 'stykker', 'vi er fire'])]),
 dict(de='Ich habe nur eins.', no='Jeg har bare én.',
      k=[('nur_eins', ['bare én', 'bare en', 'kun én'])]),
]

AUSGELASSEN = [
    # Zielsprache steht im Satz - ersetzt durch die norwegischen Fassungen.
    'Ich spreche ein bisschen Deutsch.',
    'Wie sagt man das auf Deutsch?',
]
