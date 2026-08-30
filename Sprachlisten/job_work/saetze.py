# -*- coding: utf-8 -*-
"""Job + Arbeit: die 42 deutschen Saetze der 14. Kategorie.

Erste Kategorie dieser Sitzung, die geschrieben statt uebersetzt wird - der
deutsche Bestand ist hier die Quelle, nicht das Ziel.

**Zuschnitt nach CLAUDE.md, nicht nach CEFR.** Die Lehrbuch-Variante des
Themas (Start-ups, New Work, Fuehrungsstile) ist B1/B2 und passt weder zum
Versprechen "nach zwei Monaten Alltagsgespraeche" noch zu den beiden
Personas. Gezielt fuer **Work & Travel, Saison- und Nebenjob**: Dienstplan
absprechen, mit Kolleg:innen reden, Kundschaft bedienen, sich krankmelden,
ein Vorstellungsgespraech ueberstehen. Deshalb auch "Job + Arbeit" statt
"Beruf und Karriere" - Karriere klingt nach Ue30 im Buero.

**Sieben Situationen**, die scenarios.ts schon kennt:

  job_suchen     6   Nach Arbeit fragen
  job_gespraech  6   Vorstellungsgespraech
  job_schicht    7   Dienstplan und Schichten
  job_kollegen   7   Mit Kolleg:innen
  job_kunden     7   Kundschaft bedienen
  job_abwesend   5   Krankmelden
  job_lohn       4   Bezahlung

**Zwei Entwuerfe wurden ersetzt, um Dubletten zu vermeiden:** "Bis morgen!"
steht schon in club_nightlife, "Einen Moment, bitte." in drinking_dining.
Statt den Bestand um zwei Karteikarten mit identischem Text zu erweitern,
stehen hier "Ich bin neu hier." und "Der Nächste, bitte!" - beide arbeitsnaeher
und eigenstaendig.

**Die Saetze tragen echte accepted_concepts**, anders als der
club_nightlife-Bestand im Master (der ist dort leer). Deutsch ist eine
lernbare Zielsprache der App; ohne Konzepte waere die Kategorie fuer
Deutschlernende nicht bewertbar.

**`lookup_only` nur bei der Arbeitserlaubnis** - ein Satz, den man im
Zweifel vorzeigt statt auswendig aufzusagen, und der Vokabeln benutzt, die
sonst nirgends vorkommen.

Nutzung: python import_deutsch.py [--echt]
"""

# (scenario, deutsch, [(konzept, [synonyme])], lookup_only, culture_note)
SAETZE = [

# ---------------------------------------------------------------- Arbeit suchen
 dict(sz='job_suchen', de='Ich suche Arbeit.',
      k=[('suchen', ['suche', 'suchen']), ('arbeit', ['arbeit', 'job'])]),
 dict(sz='job_suchen', de='Suchen Sie noch Leute?',
      k=[('suchen', ['suchen', 'sucht']), ('leute', ['leute', 'personal', 'jemanden'])]),
 dict(sz='job_suchen', de='Haben Sie eine Stelle frei?',
      k=[('stelle', ['stelle', 'job', 'arbeit']), ('frei', ['frei', 'offen'])]),
 dict(sz='job_suchen', de='Brauchen Sie Hilfe in der Küche?',
      k=[('brauchen', ['brauchen', 'braucht']), ('hilfe', ['hilfe']),
         ('kueche', ['küche'])]),
 dict(sz='job_suchen', de='Ich kann sofort anfangen.',
      k=[('koennen', ['kann']), ('sofort', ['sofort', 'gleich']),
         ('anfangen', ['anfangen', 'beginnen', 'starten'])]),
 dict(sz='job_suchen', de='Ich bin für drei Monate hier.',
      k=[('drei_monate', ['drei monate', 'monate']), ('hier', ['hier'])]),

# ---------------------------------------------------------------- Vorstellungsgespräch
 dict(sz='job_gespraech', de='Ich habe schon in einem Restaurant gearbeitet.',
      k=[('gearbeitet', ['gearbeitet', 'arbeiten']), ('restaurant', ['restaurant'])]),
 dict(sz='job_gespraech', de='Ich habe keine Erfahrung.',
      k=[('keine', ['keine', 'nicht']), ('erfahrung', ['erfahrung'])]),
 dict(sz='job_gespraech', de='Ich lerne schnell.',
      k=[('lernen', ['lerne', 'lernen']), ('schnell', ['schnell'])]),
 dict(sz='job_gespraech', de='Ich kann am Wochenende arbeiten.',
      k=[('koennen', ['kann']), ('wochenende', ['wochenende']),
         ('arbeiten', ['arbeiten'])]),
 dict(sz='job_gespraech', de='Wann kann ich anfangen?',
      k=[('wann', ['wann']), ('anfangen', ['anfangen', 'beginnen', 'starten'])]),
 dict(sz='job_gespraech', de='Brauche ich eine Arbeitserlaubnis?',
      lookup=True,
      k=[('brauchen', ['brauche', 'brauchen']),
         ('arbeitserlaubnis', ['arbeitserlaubnis', 'erlaubnis', 'visum'])],
      h='In der EU dürfen EU-Bürger:innen ohne Erlaubnis arbeiten. Außerhalb '
        'braucht es fast immer ein Arbeitsvisum — die Frage vorher zu stellen '
        'erspart Ärger, den man hinterher nicht mehr repariert.'),

# ---------------------------------------------------------------- Dienstplan
 dict(sz='job_schicht', de='Wann fange ich an?',
      # Trennbares Verb: "anfangen" wird zu "fange ICH an" - ein
      # zusammenhaengendes Synonym trifft nicht. Nur der Stamm traegt es.
      # (2026-08-29, von der Loesbarkeitspruefung in import_deutsch.py gefunden.)
      k=[('wann', ['wann']), ('anfangen', ['fange', 'anfangen', 'beginne'])]),
 dict(sz='job_schicht', de='Wann habe ich frei?',
      k=[('wann', ['wann']), ('frei', ['frei'])]),
 dict(sz='job_schicht', de='Wie lange dauert die Schicht?',
      k=[('wie_lange', ['wie lange']), ('schicht', ['schicht'])]),
 dict(sz='job_schicht', de='Kann ich am Montag frei haben?',
      k=[('montag', ['montag']), ('frei', ['frei'])]),
 dict(sz='job_schicht', de='Kann ich die Schicht tauschen?',
      k=[('schicht', ['schicht']), ('tauschen', ['tauschen', 'wechseln'])]),
 dict(sz='job_schicht', de='Ich komme morgen früher.',
      k=[('morgen', ['morgen']), ('frueher', ['früher'])]),
 dict(sz='job_schicht', de='Wo ist der Dienstplan?',
      k=[('wo', ['wo']), ('dienstplan', ['dienstplan', 'plan'])]),

# ---------------------------------------------------------------- Kolleg:innen
 dict(sz='job_kollegen', de='Ich bin neu hier.',
      k=[('neu', ['neu']), ('hier', ['hier'])]),
 dict(sz='job_kollegen', de='Kannst du mir kurz helfen?',
      k=[('koennen', ['kannst', 'kann']), ('helfen', ['helfen', 'hilfe'])]),
 dict(sz='job_kollegen', de='Wie macht man das?',
      k=[('wie', ['wie']), ('machen', ['macht man', 'machen'])]),
 dict(sz='job_kollegen', de='Das habe ich noch nie gemacht.',
      k=[('nie', ['noch nie', 'nie']), ('gemacht', ['gemacht', 'machen'])]),
 dict(sz='job_kollegen', de='Wo finde ich das?',
      k=[('wo', ['wo']), ('finden', ['finde', 'finden'])]),
 dict(sz='job_kollegen', de='Ich mache Pause.',
      k=[('pause', ['pause'])]),
 dict(sz='job_kollegen', de='Danke für deine Hilfe.',
      k=[('danke', ['danke']), ('hilfe', ['hilfe'])]),

# ---------------------------------------------------------------- Kundschaft
 dict(sz='job_kunden', de='Kann ich Ihnen helfen?',
      k=[('koennen', ['kann']), ('helfen', ['helfen'])]),
 dict(sz='job_kunden', de='Der Nächste, bitte!',
      k=[('naechste', ['nächste', 'der nächste'])]),
 dict(sz='job_kunden', de='Möchten Sie noch etwas?',
      k=[('moechten', ['möchten']), ('noch_etwas', ['noch etwas', 'etwas'])]),
 dict(sz='job_kunden', de='Zahlen Sie bar oder mit Karte?',
      k=[('bar', ['bar', 'bargeld']), ('karte', ['karte'])]),
 dict(sz='job_kunden', de='Tut mir leid, das haben wir nicht.',
      k=[('leid', ['tut mir leid', 'leid']), ('nicht_haben', ['haben wir nicht', 'nicht'])]),
 dict(sz='job_kunden', de='Ich hole meinen Kollegen.',
      k=[('holen', ['hole', 'holen']), ('kollege', ['kollegen', 'kollege'])]),
 dict(sz='job_kunden', de='Kommen Sie gerne wieder!',
      k=[('wiederkommen', ['wieder', 'kommen sie wieder'])]),

# ---------------------------------------------------------------- Krankmelden
 dict(sz='job_abwesend', de='Ich kann heute nicht kommen.',
      k=[('nicht_koennen', ['kann nicht', 'nicht']), ('heute', ['heute']),
         ('kommen', ['kommen'])]),
 dict(sz='job_abwesend', de='Ich bin krank und bleibe zu Hause.',
      k=[('krank', ['krank']), ('zu_hause', ['zu hause', 'hause'])]),
 dict(sz='job_abwesend', de='Ich komme später.',
      k=[('kommen', ['komme', 'kommen']), ('spaeter', ['später'])]),
 dict(sz='job_abwesend', de='Ich brauche einen Tag frei.',
      k=[('brauchen', ['brauche', 'brauchen']), ('tag_frei', ['tag frei', 'frei'])]),
 dict(sz='job_abwesend', de='Ich habe einen Arzttermin.',
      k=[('arzttermin', ['arzttermin', 'termin', 'arzt'])]),

# ---------------------------------------------------------------- Bezahlung
 dict(sz='job_lohn', de='Wie viel verdiene ich pro Stunde?',
      k=[('verdienen', ['verdiene', 'verdienen']), ('stunde', ['stunde', 'pro stunde'])]),
 dict(sz='job_lohn', de='Wann bekomme ich mein Geld?',
      k=[('wann', ['wann']), ('geld', ['geld', 'lohn'])]),
 dict(sz='job_lohn', de='Werde ich bar bezahlt?',
      k=[('bar', ['bar', 'bargeld']), ('bezahlt', ['bezahlt', 'bezahlen'])]),
 dict(sz='job_lohn', de='Ich habe zehn Stunden gearbeitet.',
      k=[('zehn', ['zehn', '10']), ('stunden', ['stunden']),
         ('gearbeitet', ['gearbeitet', 'arbeiten'])]),
]
