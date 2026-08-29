# -*- coding: utf-8 -*-
"""Die letzten 23 schwedischen Saetze - Reste aus acht Kategorien.

Fast alle stammen aus der Zusammenfuehrung vom 2026-08-27
(zusammenfuehren/): sie standen bis dahin nur auf Chinesisch, wanderten dann
ins Deutsche und fehlten dadurch in jeder anderen Sprache.

Damit ist Schwedisch vollstaendig - als letzte der vier Sprachen.

**Zwei Master-Saetze bleiben ohne eigene Zeile**, weil Schwedisch sie in
angepasster Form laengst traegt (siehe
zusammenfuehren/sprachadaptiv_reparieren.py):

  Ich spreche ein bisschen Deutsch.  ->  "... Schwedisch." steht schon drin
  Wie sagt man das auf Deutsch?      ->  "... auf Schwedisch?" steht schon drin

Sie stehen unten in AUSGELASSEN, damit die Rechnung aufgeht und niemand sie
spaeter fuer vergessen haelt.

**Ein eigener Kulturhinweis**, weil Deutsche hier zuverlaessig danebengreifen:
Schwedisch trennt "var" (wo, Ort) von "vart" (wohin, Richtung). Im Deutschen
faellt beides auf "wo" zusammen, weshalb "Var ska ni?" statt "Vart ska ni?"
ein klassischer Anfaengerfehler ist.

`verb_cluster` bleibt leer (siehe drinking_dining_sv.py).

**Nicht von Muttersprachlern geprueft.**
"""

KATEGORIEN = [
    "grundwortschatz", "culture_immersion", "moving_settling",
    "travel_transportation", "university_studying", "smalltalk_socialising",
    "hotel_accommodation", "shopping_haggling",
]

SAETZE = [

# ---------------------------------------------------------------- Grundwortschatz
 dict(kat='grundwortschatz', de='Entschuldigung, wo ist die Toilette?',
      sv='Ursäkta, var är toaletten?',
      k=[('entschuldigung', ['ursäkta', 'förlåt']),
         ('toilette', ['toaletten', 'toalett']), ('wo', ['var'])]),
 dict(kat='grundwortschatz', de='Wir bleiben fünf Minuten.', sv='Vi stannar fem minuter.',
      k=[('bleiben', ['stannar', 'stanna']),
         ('fuenf_minuten', ['fem minuter', 'fem'])]),
 dict(kat='grundwortschatz', de='Bitte sag es noch einmal.', sv='Säg det en gång till.',
      k=[('sagen', ['säg', 'säga']), ('nochmal', ['en gång till', 'gång till'])]),
 dict(kat='grundwortschatz', de='Seid ihr Studenten?', sv='Är ni studenter?',
      k=[('student', ['studenter', 'student'])]),
 dict(kat='grundwortschatz', de='Ich habe nur eins.', sv='Jag har bara en.',
      k=[('nur', ['bara']), ('eins', ['en', 'ett'])]),

# ---------------------------------------------------------------- Culture
 dict(kat='culture_immersion', de='Berlin ist sehr schön.', sv='Berlin är mycket vackert.',
      k=[('berlin', ['berlin']), ('schoen', ['vackert', 'vacker', 'fint'])]),
 dict(kat='culture_immersion', de='Wir spielen Fußball.', sv='Vi spelar fotboll.',
      k=[('spielen', ['spelar', 'spela']), ('fussball', ['fotboll'])]),
 dict(kat='culture_immersion', de='Wo ist die Kirche?', sv='Var ligger kyrkan?',
      k=[('wo', ['var']), ('kirche', ['kyrkan', 'kyrka'])]),
 dict(kat='culture_immersion', de='Er ist gesprungen.', sv='Han hoppade.',
      k=[('springen', ['hoppade', 'hoppa'])]),

# ---------------------------------------------------------------- Hotel
 dict(kat='hotel_accommodation', de='Das Zimmer ist sehr sauber.',
      sv='Rummet är mycket rent.',
      k=[('zimmer', ['rummet', 'rum']), ('sauber', ['rent', 'ren'])]),

# ---------------------------------------------------------------- Moving
 dict(kat='moving_settling', de='Das Buch liegt auf dem Tisch.',
      sv='Boken ligger på bordet.',
      k=[('buch', ['boken', 'bok']), ('tisch', ['bordet', 'bord'])]),
 dict(kat='moving_settling', de='Hier ist es sehr praktisch.',
      sv='Här är det mycket praktiskt.',
      k=[('hier', ['här']), ('praktisch', ['praktiskt', 'praktisk'])]),
 dict(kat='moving_settling', de='Das kann ich erledigen.', sv='Det kan jag fixa.',
      k=[('koennen', ['kan jag', 'kan']), ('erledigen', ['fixa', 'ordna'])]),
 dict(kat='moving_settling', de='Ich bezahle mit dem Handy.',
      sv='Jag betalar med mobilen.',
      k=[('bezahlen', ['betalar', 'betala']), ('handy', ['mobilen', 'mobil'])]),

# ---------------------------------------------------------------- Shopping
 dict(kat='shopping_haggling', de='Das gilt nicht als teuer.', sv='Det är inte så dyrt.',
      k=[('nicht_teuer', ['inte så dyrt', 'inte dyrt'])]),

# ---------------------------------------------------------------- Smalltalk
 dict(kat='smalltalk_socialising', de='Noch nicht.', sv='Inte än.',
      k=[('noch_nicht', ['inte än', 'inte ännu'])]),
 dict(kat='smalltalk_socialising', de='Mein Hobby ist Sport.', sv='Min hobby är sport.',
      k=[('hobby', ['hobby', 'min hobby']), ('sport', ['sport', 'idrott'])]),

# ---------------------------------------------------------------- Travel
 dict(kat='travel_transportation', de='Wir haben den Bus erwischt.',
      sv='Vi hann med bussen.',
      k=[('erwischen', ['hann med', 'hann']), ('bus', ['bussen', 'buss'])]),
 dict(kat='travel_transportation', de='Wo wollt ihr hin?', sv='Vart ska ni?',
      k=[('wohin', ['vart'])],
      h='Schwedisch trennt „var" (wo — Ort) von „vart" (wohin — Richtung). Im '
        'Deutschen fällt beides auf „wo" zusammen, deshalb ist „Var ska ni?" '
        'statt „Vart ska ni?" ein klassischer Anfängerfehler.'),
 dict(kat='travel_transportation', de='Warte an der Kreuzung auf mich.',
      sv='Vänta på mig vid korsningen.',
      k=[('warten', ['vänta']), ('kreuzung', ['korsningen', 'korsning'])]),
 dict(kat='travel_transportation', de='Ich möchte ein Ticket.', sv='Jag vill ha en biljett.',
      k=[('moechten', ['vill ha', 'jag vill']), ('ticket', ['biljett', 'en biljett'])]),

# ---------------------------------------------------------------- Uni
 dict(kat='university_studying', de='Ich habe drei Bücher.', sv='Jag har tre böcker.',
      k=[('drei', ['tre']), ('buch', ['böcker', 'bok'])]),
 dict(kat='university_studying', de='Ich unterrichte Chinesisch.',
      sv='Jag undervisar i kinesiska.',
      k=[('unterrichten', ['undervisar', 'undervisa']), ('chinesisch', ['kinesiska'])]),
]

AUSGELASSEN = [
    # Beide traegt schwedisch_phrasebook laengst in angepasster Form
    # ("... Schwedisch"), siehe Kopfkommentar.
    'Ich spreche ein bisschen Deutsch.',
    'Wie sagt man das auf Deutsch?',
]
