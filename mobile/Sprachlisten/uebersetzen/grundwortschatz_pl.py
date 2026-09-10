# -*- coding: utf-8 -*-
"""Grundwortschatz auf Polnisch.

**KEINE Lautschrift-Spalte** - siehe Migration 20260903210000. Polnisch
schreibt lateinisch, mit neun Sonderzeichen (ą ć ę ł ń ó ś ź ż). Die
Schrift IST der Lerntext, anders als bei Chinesisch und Russisch.

**Die Aussprache ist trotzdem die Huerde dieser Sprache**, und zwar eine
andere als erwartet: nicht die Sonderzeichen, sondern die
Konsonantenketten und ein paar Buchstaben, die anders klingen, als ein
Deutscher vermutet. Wo ein Satz daran scheitert, steht es im Hinweis. Die
Grundregeln, damit sie nicht an jedem Satz wiederholt werden muessen:

  w  = deutsches w        (Warszawa = Warschawa)
  ł  = englisches w       (mały = maUy)
  sz = sch                cz = tsch        rz/ż = wie franzoesisches j
  ś/ć/ź = weiche sch/tsch/j-Laute, die es im Deutschen nicht gibt
  c  = z                  ch = ch wie in "ach"
  y  = kurzes, dumpfes i

**ZWEI SAETZE FALLEN RAUS, beide ersetzt** - die ueblichen zwei mit der
Zielsprache im Satz. Der Gruss-Zusammenfall, der Italienisch Saetze
kostet, faellt hier NICHT an: dzień dobry (Tag), dobry wieczór (Abend) und
cześć (hallo/tschuess) sind getrennt.

**Du und Sie ist strenger als im Deutschen.** Gesiezt wird mit `pan`
(Herr) / `pani` (Frau) plus dritter Person - "Czy pan mówi po niemiecku?"
heisst woertlich "Spricht der Herr Deutsch?". Unter jungen Leuten wird
schnell geduzt, gegenueber Fremden, Personal und allen Aelteren bleibt es
beim pan/pani. Grundlinie hier wie in den anderen Sprachen: **ty** unter
Gleichaltrigen, **pan/pani** in Service-Situationen.

**Nicht von Muttersprachlern geprueft.**
"""

SAETZE = [

# ---------------------------------------------------------------- Begrüßung
 dict(de='Hallo!', pl='Cześć!',
      k=[('hallo', ['cześć', 'hej'])],
      h='„Cześć" (gesprochen tscheschtsch) ist Gruß UND Abschied unter '
        'Gleichaltrigen. Gegenüber Fremden und Älteren sagt man „dzień '
        'dobry".'),
 dict(de='Guten Morgen!', pl='Dzień dobry!',
      k=[('morgen_gruss', ['dzień dobry'])],
      h='Polnisch trennt Morgen und Tag nicht: „dzień dobry" (gesprochen '
        'dschen dobry) gilt von früh bis zum Abend.'),
 dict(de='Guten Tag!', pl='Dobry dzień!',
      k=[('tag_gruss', ['dobry dzień', 'dzień dobry'])]),
 dict(de='Guten Abend!', pl='Dobry wieczór!',
      k=[('abend_gruss', ['dobry wieczór'])]),
 dict(de='Wie geht es dir?', pl='Jak się masz?',
      k=[('wie_gehts', ['jak się masz', 'co słychać', 'jak leci'])]),
 dict(de='Mir geht es gut, danke.', pl='Dobrze, dziękuję.',
      k=[('gut_danke', ['dobrze', 'dobrze dziękuję', 'w porządku'])]),
 dict(de='Auf Wiedersehen!', pl='Do widzenia!',
      k=[('wiedersehen', ['do widzenia'])]),
 dict(de='Bis später!', pl='Do zobaczenia!',
      k=[('bis_spaeter', ['do zobaczenia', 'na razie'])]),
 dict(de='Tschüss!', pl='Na razie!',
      k=[('tschuess', ['na razie', 'cześć', 'pa'])]),

# --------------------------------------------------------------- Höflichkeit
 dict(de='Danke!', pl='Dziękuję!',
      k=[('danke', ['dziękuję', 'dzięki'])],
      h='Gesprochen „dschenkuje". Unter Freunden reicht das kürzere '
        '„dzięki".'),
 dict(de='Vielen Dank!', pl='Dziękuję bardzo!',
      k=[('danke', ['dziękuję bardzo', 'wielkie dzięki'])]),
 dict(de='Gern geschehen.', pl='Proszę bardzo.',
      k=[('gern_geschehen', ['proszę bardzo', 'nie ma za co', 'proszę'])],
      h='„Proszę" ist das polnische Allzweckwort: bitte (beim Bitten), bitte '
        'sehr (beim Reichen) und gern geschehen (als Antwort auf danke).'),
 dict(de='Entschuldigung!', pl='Przepraszam!',
      k=[('entschuldigung', ['przepraszam'])],
      h='Gesprochen „pscheprascham". Deckt Entschuldigung UND Anrede ab - '
        'auch wenn man jemanden ansprechen will.'),
 dict(de='Es tut mir leid.', pl='Przykro mi.',
      k=[('leid', ['przykro mi', 'przepraszam'])]),
 dict(de='Kein Problem.', pl='Nie ma problemu.',
      k=[('kein_problem', ['nie ma problemu', 'nie ma sprawy', 'spoko'])]),
 dict(de='Ja.', pl='Tak.',
      k=[('ja', ['tak'])]),
 dict(de='Nein.', pl='Nie.',
      k=[('nein', ['nie'])]),
 dict(de='Ich weiß nicht.', pl='Nie wiem.',
      k=[('nicht_wissen', ['nie wiem'])]),

# ------------------------------------------------------------------ Kommentar
 dict(de='Wirklich?', pl='Naprawdę?',
      k=[('wirklich', ['naprawdę', 'serio'])]),
 dict(de='Cool!', pl='Super!',
      k=[('cool', ['super', 'spoko', 'fajnie'])],
      h='„Fajnie" und „spoko" sind die alltäglichen Wörter für gut und '
        'entspannt - beide hört man ständig.'),
 dict(de='Macht nichts.', pl='Nic nie szkodzi.',
      k=[('macht_nichts', ['nic nie szkodzi', 'nieważne', 'nic się nie stało'])]),
 dict(de='Genau!', pl='Właśnie!',
      k=[('genau', ['właśnie', 'dokładnie'])]),
 dict(de='Stimmt.', pl='To prawda.',
      k=[('stimmt', ['to prawda', 'prawda', 'racja'])]),
 dict(de='Schade!', pl='Szkoda!',
      k=[('schade', ['szkoda'])]),
 dict(de='Na klar!', pl='Jasne!',
      k=[('na_klar', ['jasne', 'oczywiście', 'pewnie'])]),
 dict(de='Auf keinen Fall!', pl='W żadnym wypadku!',
      k=[('auf_keinen_fall', ['w żadnym wypadku', 'nie ma mowy'])]),

# -------------------------------------------------------------------- Notlage
 dict(de='Wo ist die Toilette?', pl='Gdzie jest toaleta?',
      k=[('toilette', ['toaleta', 'łazienka'])]),
 dict(de='Hilfe!', pl='Pomocy!',
      k=[('hilfe', ['pomocy', 'pomoc'])]),
 dict(de='Ich brauche Hilfe.', pl='Potrzebuję pomocy.',
      k=[('brauchen', ['potrzebuję']),
         ('hilfe', ['pomocy', 'pomoc'])]),
 dict(de='Wo ist der Ausgang?', pl='Gdzie jest wyjście?',
      k=[('ausgang', ['wyjście']),
         ('wo', ['gdzie jest', 'gdzie'])]),
 dict(de='Ich habe mein Handy verloren.', pl='Zgubiłem telefon.',
      k=[('handy', ['telefon', 'komórkę']),
         ('verloren', ['zgubiłem', 'zgubiłam'])],
      h='Als Frau: „zgubiłam". Die Vergangenheitsform richtet sich im '
        'Polnischen nach dem Geschlecht des Sprechers - wie im Russischen.'),
 dict(de='Ich habe meinen Pass verloren.', pl='Zgubiłem paszport.',
      k=[('pass', ['paszport']),
         ('verloren', ['zgubiłem', 'zgubiłam'])]),
 dict(de='Entschuldigung, wo ist die Toilette?', pl='Przepraszam, gdzie jest toaleta?',
      k=[('entschuldigung', ['przepraszam']),
         ('toilette', ['toaleta'])]),

# --------------------------------------------------------------------- Termin
 dict(de='Wann hast du Zeit?', pl='Kiedy masz czas?',
      k=[('wann_zeit', ['kiedy masz czas', 'kiedy możesz'])]),
 dict(de='Ich habe morgen keine Zeit.', pl='Jutro nie mam czasu.',
      k=[('keine_zeit', ['nie mam czasu', 'nie mogę'])]),
 dict(de='Können wir uns nächste Woche treffen?', pl='Możemy się spotkać w przyszłym tygodniu?',
      k=[('treffen', ['spotkać', 'spotkamy się'])]),
 dict(de='Ich habe einen Termin um 10 Uhr.', pl='Mam spotkanie o dziesiątej.',
      k=[('termin', ['spotkanie', 'wizytę']),
         ('zehn_uhr', ['o dziesiątej', 'dziesiątej'])]),
 dict(de='Wann hast du Geburtstag?', pl='Kiedy masz urodziny?',
      k=[('geburtstag_frage', ['kiedy masz urodziny', 'urodziny'])]),
 dict(de='Mein Geburtstag ist im März.', pl='Moje urodziny są w marcu.',
      k=[('geburtstag', ['urodziny']),
         ('maerz', ['w marcu', 'marzec'])]),

# -------------------------------------------------------------------- Uhrzeit
 dict(de='Wie spät ist es?', pl='Która godzina?',
      k=[('wie_spaet', ['która godzina', 'która jest godzina'])],
      h='Wörtlich „welche Stunde" - ein „wie spät" gibt es nicht.'),
 dict(de='Es ist drei Uhr.', pl='Jest trzecia.',
      k=[('uhrzeit', ['trzecia', 'jest trzecia'])]),
 dict(de='Um wie viel Uhr beginnt der Film?', pl='O której zaczyna się film?',
      k=[('beginn_frage', ['o której', 'zaczyna się']),
         ('film', ['film'])]),
 dict(de='Welcher Tag ist heute?', pl='Jaki dziś jest dzień?',
      k=[('welcher_tag', ['jaki dziś jest dzień', 'jaki dzień'])]),
 dict(de='Heute ist Montag.', pl='Dziś jest poniedziałek.',
      k=[('tag', ['poniedziałek'])]),
 dict(de='Wir bleiben fünf Minuten.', pl='Zostaniemy pięć minut.',
      k=[('bleiben', ['zostaniemy', 'zostajemy']),
         ('fuenf_minuten', ['pięć minut'])]),

# --------------------------------------------------------------- Verständigen
 dict(de='Sprichst du Englisch?', pl='Mówisz po angielsku?',
      k=[('sprache_frage', ['mówisz po angielsku', 'po angielsku'])],
      h='Sprachen stehen mit „po": po angielsku, po polsku, po niemiecku. '
        'Gesiezt: „Czy pan mówi po angielsku?"'),
 dict(de='Kannst du bitte langsamer sprechen?', pl='Czy możesz mówić wolniej?',
      k=[('langsamer', ['wolniej', 'mówić wolniej'])]),
 dict(de='Ich verstehe das nicht.', pl='Nie rozumiem.',
      k=[('nicht_verstehen', ['nie rozumiem'])]),
 dict(de='Kannst du das bitte wiederholen?', pl='Czy możesz powtórzyć?',
      k=[('wiederholen', ['powtórzyć', 'powtórz', 'jeszcze raz'])]),
 dict(de='Was heißt das?', pl='Co to znaczy?',
      k=[('heissen', ['co to znaczy', 'znaczy'])]),
 dict(de='Können Sie das bitte aufschreiben?', pl='Czy może pan to zapisać?',
      k=[('aufschreiben', ['zapisać', 'napisać'])],
      h='„Czy może pan..." ist die Sie-Form: wörtlich „kann der Herr...". Zu '
        'einer Frau: „czy może pani".'),
 dict(de='Bitte sag es noch einmal.', pl='Powiedz to jeszcze raz.',
      k=[('noch_einmal', ['jeszcze raz', 'powiedz jeszcze raz'])]),
 dict(de='Ich spreche ein bisschen Polnisch.', pl='Mówię trochę po polsku.',
      neu=True, sz='verstaendigen',
      k=[('bisschen_sprache', ['trochę po polsku', 'trochę', 'po polsku'])]),
 dict(de='Wie sagt man das auf Polnisch?', pl='Jak to się mówi po polsku?',
      neu=True, sz='verstaendigen',
      k=[('wie_sagt_man', ['jak to się mówi', 'jak się mówi']),
         ('sprache', ['po polsku', 'polsku'])]),

# ---------------------------------------------------------------- Vorstellung
 dict(de='Wie heißt du?', pl='Jak masz na imię?',
      k=[('wie_heisst', ['jak masz na imię', 'jak się nazywasz'])],
      h='„Jak masz na imię" fragt nach dem Vornamen, „jak się nazywasz" nach '
        'dem vollen Namen - beim Kennenlernen nimmt man das erste.'),
 dict(de='Ich heiße Anna.', pl='Mam na imię Anna.',
      k=[('heisse_x', ['mam na imię', 'nazywam się', 'jestem'])]),
 dict(de='Woher kommst du?', pl='Skąd jesteś?',
      k=[('woher', ['skąd jesteś', 'skąd'])]),
 dict(de='Ich komme aus Deutschland.', pl='Jestem z Niemiec.',
      k=[('komme_aus', ['z niemiec', 'jestem z niemiec'])]),
 dict(de='Wie alt bist du?', pl='Ile masz lat?',
      k=[('wie_alt', ['ile masz lat', 'ile lat'])]),
 dict(de='Ich bin 25 Jahre alt.', pl='Mam dwadzieścia pięć lat.',
      k=[('alter', ['dwadzieścia pięć lat', '25 lat'])],
      h='Wörtlich „ich habe 25 Jahre" - das Alter läuft über haben, nicht '
        'über sein.'),
 dict(de='Freut mich, dich kennenzulernen.', pl='Miło mi cię poznać.',
      k=[('freut_mich', ['miło mi', 'miło mi cię poznać'])]),
 dict(de='Das ist mein Freund.', pl='To jest mój kolega.',
      k=[('freund', ['mój kolega', 'kolega', 'przyjaciel'])],
      h='„Kolega" ist der Kumpel, „przyjaciel" der enge Freund, „chłopak" der '
        'feste Freund. Drei Stufen, wo das Deutsche eine hat.'),
 dict(de='Ich bin zum ersten Mal hier.', pl='Jestem tu pierwszy raz.',
      k=[('erstes_mal', ['pierwszy raz'])]),
 dict(de='Seid ihr Studenten?', pl='Jesteście studentami?',
      k=[('studenten_frage', ['jesteście studentami', 'studentami', 'studenci'])]),

# ---------------------------------------------------------------------- Zahlen
 dict(de='Wie viel kostet das?', pl='Ile to kosztuje?',
      k=[('kosten_frage', ['ile to kosztuje', 'ile kosztuje'])]),
 dict(de='Das kostet zehn Euro.', pl='To kosztuje dziesięć euro.',
      k=[('preis', ['dziesięć euro'])],
      h='Gezahlt wird in Złoty (zł), nicht in Euro - Polen ist in der EU, '
        'aber nicht im Euroraum.'),
 dict(de='Ich hätte gern die Rechnung.', pl='Poproszę rachunek.',
      k=[('rechnung', ['rachunek'])],
      h='„Poproszę" ist die höfliche Bestellformel für alles: poproszę '
        'rachunek, poproszę wodę.'),
 dict(de='Eins, zwei, drei.', pl='Jeden, dwa, trzy.',
      k=[('zaehlen', ['jeden dwa trzy', 'jeden', 'dwa', 'trzy'])]),
 dict(de='Wie viele?', pl='Ile?',
      k=[('wie_viele', ['ile'])]),
 dict(de='Zwei Stück, bitte.', pl='Poproszę dwa.',
      k=[('zwei', ['dwa']),
         ('bitte', ['poproszę', 'proszę'])]),
 dict(de='Nur eins, bitte.', pl='Tylko jeden, poproszę.',
      k=[('eins', ['tylko jeden', 'jeden'])]),
 dict(de='Das ist genug.', pl='Wystarczy.',
      k=[('genug', ['wystarczy', 'dosyć'])]),
 dict(de='Wie viel ist das zusammen?', pl='Ile razem?',
      k=[('zusammen', ['razem', 'w sumie']),
         ('wieviel', ['ile'])]),
 dict(de='Wir sind vier Personen.', pl='Jest nas czworo.',
      k=[('vier', ['czworo', 'cztery']),
         ('personen', ['jest nas czworo', 'nas', 'osoby'])]),
 dict(de='Ich habe nur eins.', pl='Mam tylko jeden.',
      k=[('nur_eins', ['tylko jeden', 'jeden'])]),
]

AUSGELASSEN = [
    # Zielsprache steht im Satz - ersetzt durch die polnischen Fassungen.
    'Ich spreche ein bisschen Deutsch.',
    'Wie sagt man das auf Deutsch?',
]
