# -*- coding: utf-8 -*-
"""job_work auf Schwedisch: alle 42 Saetze.

**Kein Ausschluss** - Arbeit im Nebenjob funktioniert ueberall gleich.

**Zwei eigene Kulturhinweise:**

  Arbeitserlaubnis  Fuer EU-/EWR-Buerger:innen faellt die Frage in Schweden
                    weg - man darf ohne Erlaubnis arbeiten. Ausserhalb der
                    EU/EWR ist sie die wichtigste ueberhaupt.
  Bar bezahlt       Umgekehrter Fall als in Spanien: Schweden ist eines der
                    bargeldlosesten Laender der Welt, Lohn kommt praktisch
                    immer per Ueberweisung. Bargeld angeboten zu bekommen
                    ist eher ein Warnsignal als Normalfall.

**Keine usted/tú-Unterscheidung noetig** - Schweden nutzt seit der
sogenannten "du-reformen" (1960er) durchgehend "du", auch gegenueber
Vorgesetzten und Kundschaft. Alle Saetze unten sind deshalb einheitlich
informell, anders als bei Spanisch/Franzoesisch.

`verb_cluster` leer. **Nicht von Muttersprachlern geprueft.**
"""

SAETZE = [

# ---------------------------------------------------------------- Arbeit suchen
 dict(de='Ich suche Arbeit.', sv='Jag söker jobb.',
      k=[('suchen', ['söker']), ('arbeit', ['jobb'])]),
 dict(de='Suchen Sie noch Leute?', sv='Söker ni fortfarande folk?',
      k=[('suchen', ['söker']), ('leute', ['folk'])]),
 dict(de='Haben Sie eine Stelle frei?', sv='Har ni en ledig plats?',
      k=[('stelle', ['plats']), ('frei', ['ledig'])]),
 dict(de='Brauchen Sie Hilfe in der Küche?', sv='Behöver ni hjälp i köket?',
      k=[('brauchen', ['behöver']), ('hilfe', ['hjälp']), ('kueche', ['köket', 'kök'])]),
 dict(de='Ich kann sofort anfangen.', sv='Jag kan börja direkt.',
      k=[('koennen', ['kan']), ('sofort', ['direkt']), ('anfangen', ['börja'])]),
 dict(de='Ich bin für drei Monate hier.', sv='Jag är här i tre månader.',
      k=[('drei_monate', ['tre månader']), ('hier', ['här'])]),

# ---------------------------------------------------------------- Vorstellungsgespräch
 dict(de='Ich habe schon in einem Restaurant gearbeitet.',
      sv='Jag har redan jobbat på en restaurang.',
      k=[('gearbeitet', ['jobbat']), ('restaurant', ['restaurang'])]),
 dict(de='Ich habe keine Erfahrung.', sv='Jag har ingen erfarenhet.',
      k=[('keine', ['ingen']), ('erfahrung', ['erfarenhet'])]),
 dict(de='Ich lerne schnell.', sv='Jag lär mig snabbt.',
      k=[('lernen', ['lär mig', 'lära']), ('schnell', ['snabbt'])]),
 dict(de='Ich kann am Wochenende arbeiten.', sv='Jag kan jobba på helgen.',
      k=[('koennen', ['kan']), ('wochenende', ['helgen', 'helg']), ('arbeiten', ['jobba'])]),
 dict(de='Wann kann ich anfangen?', sv='När kan jag börja?',
      k=[('wann', ['när']), ('anfangen', ['börja'])]),
 dict(de='Brauche ich eine Arbeitserlaubnis?', sv='Behöver jag arbetstillstånd?',
      k=[('brauchen', ['behöver']), ('arbeitserlaubnis', ['arbetstillstånd'])],
      h='Für EU-/EWR-Bürger:innen entfällt die Frage in Schweden — man darf '
        'ohne Erlaubnis arbeiten. Von außerhalb der EU/EWR ist sie die '
        'wichtigste überhaupt, und die Antwort kommt vor dem ersten Arbeitstag.'),

# ---------------------------------------------------------------- Dienstplan
 dict(de='Wann fange ich an?', sv='När börjar jag?',
      k=[('wann', ['när']), ('anfangen', ['börjar'])]),
 dict(de='Wann habe ich frei?', sv='När har jag ledigt?',
      k=[('wann', ['när']), ('frei', ['ledigt'])]),
 dict(de='Wie lange dauert die Schicht?', sv='Hur länge varar skiftet?',
      k=[('wie_lange', ['hur länge']), ('schicht', ['skiftet', 'skift'])]),
 dict(de='Kann ich am Montag frei haben?', sv='Kan jag vara ledig på måndag?',
      k=[('montag', ['måndag']), ('frei', ['ledig'])]),
 dict(de='Kann ich die Schicht tauschen?', sv='Kan jag byta skift?',
      k=[('schicht', ['skift']), ('tauschen', ['byta'])]),
 dict(de='Ich komme morgen früher.', sv='Jag kommer tidigare imorgon.',
      k=[('morgen', ['imorgon']), ('frueher', ['tidigare'])]),
 dict(de='Wo ist der Dienstplan?', sv='Var är schemat?',
      k=[('wo', ['var']), ('dienstplan', ['schemat', 'schema'])]),

# ---------------------------------------------------------------- Kolleg:innen
 dict(de='Ich bin neu hier.', sv='Jag är ny här.',
      k=[('neu', ['ny']), ('hier', ['här'])]),
 dict(de='Kannst du mir kurz helfen?', sv='Kan du hjälpa mig en stund?',
      k=[('koennen', ['kan']), ('helfen', ['hjälpa'])]),
 dict(de='Wie macht man das?', sv='Hur gör man det?',
      k=[('wie', ['hur']), ('machen', ['gör'])]),
 dict(de='Das habe ich noch nie gemacht.', sv='Det har jag aldrig gjort.',
      k=[('nie', ['aldrig']), ('gemacht', ['gjort'])]),
 dict(de='Wo finde ich das?', sv='Var hittar jag det?',
      k=[('wo', ['var']), ('finden', ['hittar'])]),
 dict(de='Ich mache Pause.', sv='Jag tar paus.',
      k=[('pause', ['paus'])]),
 dict(de='Danke für deine Hilfe.', sv='Tack för din hjälp.',
      k=[('danke', ['tack']), ('hilfe', ['hjälp'])]),

# ---------------------------------------------------------------- Kundschaft
 dict(de='Kann ich Ihnen helfen?', sv='Kan jag hjälpa dig?',
      k=[('koennen', ['kan']), ('helfen', ['hjälpa'])],
      h='Anders als Deutsch/Spanisch/Französisch kennt Schwedisch seit der '
        '"du-reformen" der 1960er keine Sie-Form mehr im Alltag - "du" gilt '
        'genauso gegenüber Kundschaft wie unter Kolleg:innen.'),
 dict(de='Der Nächste, bitte!', sv='Nästa, tack!',
      k=[('naechste', ['nästa'])]),
 dict(de='Möchten Sie noch etwas?', sv='Vill du ha något mer?',
      # "vill ha" als Synonym traf nicht - "du" trennt die beiden Woerter im
      # Satz. Nur der Verbstamm "vill" traegt (2026-08-29, gefunden von
      # pruefe_konzepte.py).
      k=[('moechten', ['vill']), ('noch_etwas', ['något mer'])]),
 dict(de='Zahlen Sie bar oder mit Karte?', sv='Betalar du kontant eller med kort?',
      k=[('bar', ['kontant']), ('karte', ['kort'])]),
 dict(de='Tut mir leid, das haben wir nicht.', sv='Tyvärr har vi inte det.',
      k=[('leid', ['tyvärr']), ('nicht_haben', ['har vi inte'])]),
 dict(de='Ich hole meinen Kollegen.', sv='Jag hämtar min kollega.',
      k=[('holen', ['hämtar']), ('kollege', ['kollega'])]),
 dict(de='Kommen Sie gerne wieder!', sv='Välkommen tillbaka!',
      k=[('wiederkommen', ['välkommen tillbaka', 'tillbaka'])]),

# ---------------------------------------------------------------- Krankmelden
 dict(de='Ich kann heute nicht kommen.', sv='Jag kan inte komma idag.',
      k=[('nicht_koennen', ['kan inte']), ('heute', ['idag']), ('kommen', ['komma'])]),
 dict(de='Ich bin krank und bleibe zu Hause.', sv='Jag är sjuk och stannar hemma.',
      k=[('krank', ['sjuk']), ('zu_hause', ['hemma'])]),
 dict(de='Ich komme später.', sv='Jag kommer senare.',
      k=[('kommen', ['kommer']), ('spaeter', ['senare'])]),
 dict(de='Ich brauche einen Tag frei.', sv='Jag behöver en dag ledigt.',
      k=[('brauchen', ['behöver']), ('tag_frei', ['dag ledigt', 'ledigt'])]),
 dict(de='Ich habe einen Arzttermin.', sv='Jag har en läkartid.',
      k=[('arzttermin', ['läkartid'])]),

# ---------------------------------------------------------------- Bezahlung
 dict(de='Wie viel verdiene ich pro Stunde?', sv='Hur mycket tjänar jag i timmen?',
      k=[('verdienen', ['tjänar']), ('stunde', ['i timmen', 'timmen'])]),
 dict(de='Wann bekomme ich mein Geld?', sv='När får jag min lön?',
      k=[('wann', ['när']), ('geld', ['lön'])]),
 dict(de='Werde ich bar bezahlt?', sv='Får jag betalt kontant?',
      k=[('bar', ['kontant']), ('bezahlt', ['betalt'])],
      h='Umgekehrter Fall als in Spanien: Schweden ist eines der '
        'bargeldlosesten Länder der Welt, Lohn kommt praktisch immer per '
        'Überweisung. Bargeld angeboten zu bekommen ist eher ein '
        'Warnsignal als Normalfall.'),
 dict(de='Ich habe zehn Stunden gearbeitet.', sv='Jag har jobbat tio timmar.',
      k=[('zehn', ['tio']), ('stunden', ['timmar']), ('gearbeitet', ['jobbat'])]),
]

AUSGELASSEN = []
