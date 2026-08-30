# -*- coding: utf-8 -*-
"""job_work auf Spanisch: alle 42 Saetze.

**Kein Ausschluss** - Arbeit im Nebenjob funktioniert ueberall gleich.

**Drei eigene Kulturhinweise:**

  Arbeitserlaubnis  Fuer EU-Buerger:innen faellt die Frage in Spanien weg -
                    man darf ohne Erlaubnis arbeiten. Ausserhalb der EU ist
                    sie die wichtigste ueberhaupt.
  Bar bezahlt       "En negro" (schwarz) ist im spanischen Saisonjob
                    verbreitet und klingt harmloser, als es ist: ohne Vertrag
                    gibt es keine Absicherung, wenn etwas passiert.
  usted / tú        Gegenueber Kundschaft "usted", im Team "tú". Die Grenze
                    ist im Arbeitsleben schaerfer als sonst im Alltag.

Die Anrede folgt dieser Linie: **usted** in job_kunden und job_gespraech
(Vorgesetzte, Kundschaft), **tú** in job_kollegen.

`verb_cluster` leer. **Nicht von Muttersprachlern geprueft.**
"""

SAETZE = [

# ---------------------------------------------------------------- Arbeit suchen
 dict(de='Ich suche Arbeit.', es='Busco trabajo.',
      k=[('suchen', ['busco', 'buscar']), ('arbeit', ['trabajo'])]),
 dict(de='Suchen Sie noch Leute?', es='¿Buscan todavía gente?',
      k=[('suchen', ['buscan', 'buscar']), ('leute', ['gente', 'personal'])]),
 dict(de='Haben Sie eine Stelle frei?', es='¿Tienen un puesto libre?',
      k=[('stelle', ['puesto', 'trabajo']), ('frei', ['libre'])]),
 dict(de='Brauchen Sie Hilfe in der Küche?', es='¿Necesitan ayuda en la cocina?',
      k=[('brauchen', ['necesitan', 'necesitar']), ('hilfe', ['ayuda']),
         ('kueche', ['cocina'])]),
 dict(de='Ich kann sofort anfangen.', es='Puedo empezar ya.',
      k=[('koennen', ['puedo']), ('sofort', ['ya', 'ahora mismo']),
         ('anfangen', ['empezar'])]),
 dict(de='Ich bin für drei Monate hier.', es='Estoy aquí tres meses.',
      k=[('drei_monate', ['tres meses', 'meses']), ('hier', ['aquí'])]),

# ---------------------------------------------------------------- Vorstellungsgespräch
 dict(de='Ich habe schon in einem Restaurant gearbeitet.',
      es='Ya he trabajado en un restaurante.',
      k=[('gearbeitet', ['he trabajado', 'trabajado']), ('restaurant', ['restaurante'])]),
 dict(de='Ich habe keine Erfahrung.', es='No tengo experiencia.',
      k=[('keine', ['no tengo', 'no']), ('erfahrung', ['experiencia'])]),
 dict(de='Ich lerne schnell.', es='Aprendo rápido.',
      k=[('lernen', ['aprendo', 'aprender']), ('schnell', ['rápido'])]),
 dict(de='Ich kann am Wochenende arbeiten.', es='Puedo trabajar los fines de semana.',
      k=[('koennen', ['puedo']), ('wochenende', ['fines de semana', 'fin de semana']),
         ('arbeiten', ['trabajar'])]),
 dict(de='Wann kann ich anfangen?', es='¿Cuándo puedo empezar?',
      k=[('wann', ['cuándo']), ('anfangen', ['empezar'])]),
 dict(de='Brauche ich eine Arbeitserlaubnis?', es='¿Necesito un permiso de trabajo?',
      k=[('brauchen', ['necesito', 'necesitar']),
         ('arbeitserlaubnis', ['permiso de trabajo', 'permiso'])],
      h='Für EU-Bürger:innen entfällt die Frage in Spanien — man darf ohne '
        'Erlaubnis arbeiten. Von außerhalb der EU ist sie die wichtigste '
        'überhaupt, und die Antwort kommt vor dem ersten Arbeitstag.'),

# ---------------------------------------------------------------- Dienstplan
 dict(de='Wann fange ich an?', es='¿Cuándo empiezo?',
      k=[('wann', ['cuándo']), ('anfangen', ['empiezo', 'empezar'])]),
 dict(de='Wann habe ich frei?', es='¿Cuándo tengo libre?',
      k=[('wann', ['cuándo']), ('frei', ['libre'])]),
 dict(de='Wie lange dauert die Schicht?', es='¿Cuánto dura el turno?',
      k=[('wie_lange', ['cuánto']), ('schicht', ['turno'])]),
 dict(de='Kann ich am Montag frei haben?', es='¿Puedo tener libre el lunes?',
      k=[('montag', ['lunes']), ('frei', ['libre'])]),
 dict(de='Kann ich die Schicht tauschen?', es='¿Puedo cambiar el turno?',
      k=[('schicht', ['turno']), ('tauschen', ['cambiar'])]),
 dict(de='Ich komme morgen früher.', es='Mañana vengo antes.',
      k=[('morgen', ['mañana']), ('frueher', ['antes', 'más temprano'])]),
 dict(de='Wo ist der Dienstplan?', es='¿Dónde está el horario?',
      k=[('wo', ['dónde']), ('dienstplan', ['horario', 'turnos'])]),

# ---------------------------------------------------------------- Kolleg:innen
 dict(de='Ich bin neu hier.', es='Soy nuevo aquí.',
      k=[('neu', ['nuevo', 'nueva']), ('hier', ['aquí'])]),
 dict(de='Kannst du mir kurz helfen?', es='¿Me puedes ayudar un momento?',
      k=[('koennen', ['puedes']), ('helfen', ['ayudar', 'me puedes ayudar'])]),
 dict(de='Wie macht man das?', es='¿Cómo se hace esto?',
      k=[('wie', ['cómo']), ('machen', ['se hace', 'hacer'])]),
 dict(de='Das habe ich noch nie gemacht.', es='Nunca lo he hecho.',
      k=[('nie', ['nunca']), ('gemacht', ['he hecho', 'hecho'])]),
 dict(de='Wo finde ich das?', es='¿Dónde encuentro esto?',
      k=[('wo', ['dónde']), ('finden', ['encuentro', 'encontrar'])]),
 dict(de='Ich mache Pause.', es='Hago una pausa.',
      k=[('pause', ['pausa', 'descanso'])]),
 dict(de='Danke für deine Hilfe.', es='Gracias por tu ayuda.',
      k=[('danke', ['gracias']), ('hilfe', ['ayuda'])]),

# ---------------------------------------------------------------- Kundschaft
 dict(de='Kann ich Ihnen helfen?', es='¿Puedo ayudarle?',
      k=[('koennen', ['puedo']), ('helfen', ['ayudarle', 'ayudar'])],
      h='Gegenüber Kundschaft „usted", im Team „tú" — die Grenze ist im '
        'Arbeitsleben schärfer als sonst im spanischen Alltag.'),
 dict(de='Der Nächste, bitte!', es='¡El siguiente, por favor!',
      k=[('naechste', ['el siguiente', 'siguiente'])]),
 dict(de='Möchten Sie noch etwas?', es='¿Desea algo más?',
      k=[('moechten', ['desea', 'quiere']), ('noch_etwas', ['algo más', 'más'])]),
 dict(de='Zahlen Sie bar oder mit Karte?', es='¿Paga en efectivo o con tarjeta?',
      k=[('bar', ['efectivo']), ('karte', ['tarjeta'])]),
 dict(de='Tut mir leid, das haben wir nicht.', es='Lo siento, eso no lo tenemos.',
      k=[('leid', ['lo siento']), ('nicht_haben', ['no lo tenemos', 'no tenemos'])]),
 dict(de='Ich hole meinen Kollegen.', es='Voy a buscar a mi compañero.',
      k=[('holen', ['voy a buscar', 'buscar']), ('kollege', ['compañero'])]),
 dict(de='Kommen Sie gerne wieder!', es='¡Vuelva cuando quiera!',
      k=[('wiederkommen', ['vuelva', 'volver'])]),

# ---------------------------------------------------------------- Krankmelden
 dict(de='Ich kann heute nicht kommen.', es='Hoy no puedo ir.',
      k=[('nicht_koennen', ['no puedo']), ('heute', ['hoy']), ('kommen', ['ir'])]),
 dict(de='Ich bin krank und bleibe zu Hause.', es='Estoy enfermo y me quedo en casa.',
      k=[('krank', ['enfermo', 'enferma']), ('zu_hause', ['en casa', 'casa'])]),
 dict(de='Ich komme später.', es='Llego más tarde.',
      k=[('kommen', ['llego', 'llegar']), ('spaeter', ['más tarde', 'tarde'])]),
 dict(de='Ich brauche einen Tag frei.', es='Necesito un día libre.',
      k=[('brauchen', ['necesito']), ('tag_frei', ['día libre', 'libre'])]),
 dict(de='Ich habe einen Arzttermin.', es='Tengo cita con el médico.',
      k=[('arzttermin', ['cita', 'médico', 'cita con el médico'])]),

# ---------------------------------------------------------------- Bezahlung
 dict(de='Wie viel verdiene ich pro Stunde?', es='¿Cuánto gano por hora?',
      k=[('verdienen', ['gano', 'ganar']), ('stunde', ['por hora', 'hora'])]),
 dict(de='Wann bekomme ich mein Geld?', es='¿Cuándo cobro?',
      k=[('wann', ['cuándo']), ('geld', ['cobro', 'cobrar', 'dinero'])]),
 dict(de='Werde ich bar bezahlt?', es='¿Me pagan en efectivo?',
      k=[('bar', ['efectivo']), ('bezahlt', ['pagan', 'pagar'])],
      h='„En negro" — schwarz, ohne Vertrag — ist im spanischen Saisonjob '
        'verbreitet und klingt harmloser, als es ist: ohne Vertrag gibt es '
        'keine Absicherung, wenn etwas passiert.'),
 dict(de='Ich habe zehn Stunden gearbeitet.', es='He trabajado diez horas.',
      k=[('zehn', ['diez']), ('stunden', ['horas']),
         ('gearbeitet', ['he trabajado', 'trabajado'])]),
]

AUSGELASSEN = []
