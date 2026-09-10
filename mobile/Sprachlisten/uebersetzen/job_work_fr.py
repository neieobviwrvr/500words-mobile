# -*- coding: utf-8 -*-
"""job_work auf Französisch: alle 42 Saetze.

**Kein Ausschluss** - Arbeit im Nebenjob funktioniert ueberall gleich.

**Zwei eigene Kulturhinweise:**

  Arbeitserlaubnis  Fuer EU-Buerger:innen faellt die Frage in Frankreich
                    weg - man darf ohne Erlaubnis arbeiten. Ausserhalb der
                    EU ist sie die wichtigste ueberhaupt.
  Bar bezahlt       "Travail au black" (Schwarzarbeit) ist im franzoesischen
                    Saisonjob ebenso verbreitet wie in Spanien und klingt
                    genauso harmloser, als es ist: ohne Vertrag keine
                    Absicherung.

Die Anrede folgt derselben Linie wie bei Spanisch: **vous** in job_kunden
und job_gespraech (Vorgesetzte, Kundschaft), **tu** in job_kollegen.

`verb_cluster` leer. **Nicht von Muttersprachlern geprueft.**
"""

SAETZE = [

# ---------------------------------------------------------------- Arbeit suchen
 dict(de='Ich suche Arbeit.', fr='Je cherche du travail.',
      k=[('suchen', ['cherche']), ('arbeit', ['travail'])]),
 dict(de='Suchen Sie noch Leute?', fr='Vous cherchez encore du monde ?',
      k=[('suchen', ['cherchez']), ('leute', ['du monde', 'monde'])]),
 dict(de='Haben Sie eine Stelle frei?', fr='Avez-vous un poste à pourvoir ?',
      k=[('stelle', ['poste']), ('frei', ['à pourvoir', 'pourvoir'])]),
 dict(de='Brauchen Sie Hilfe in der Küche?', fr="Avez-vous besoin d'aide en cuisine ?",
      k=[('brauchen', ['besoin']), ('hilfe', ['aide']), ('kueche', ['cuisine'])]),
 dict(de='Ich kann sofort anfangen.', fr='Je peux commencer tout de suite.',
      k=[('koennen', ['peux']), ('sofort', ['tout de suite']), ('anfangen', ['commencer'])]),
 dict(de='Ich bin für drei Monate hier.', fr='Je suis ici pour trois mois.',
      k=[('drei_monate', ['trois mois']), ('hier', ['ici'])]),

# ---------------------------------------------------------------- Vorstellungsgespräch
 dict(de='Ich habe schon in einem Restaurant gearbeitet.',
      fr='J\'ai déjà travaillé dans un restaurant.',
      k=[('gearbeitet', ['travaillé']), ('restaurant', ['restaurant'])]),
 dict(de='Ich habe keine Erfahrung.', fr="Je n'ai pas d'expérience.",
      k=[('keine', ["n'ai pas", 'pas']), ('erfahrung', ['expérience'])]),
 dict(de='Ich lerne schnell.', fr="J'apprends vite.",
      k=[('lernen', ['apprends']), ('schnell', ['vite'])]),
 dict(de='Ich kann am Wochenende arbeiten.', fr='Je peux travailler le week-end.',
      k=[('koennen', ['peux']), ('wochenende', ['week-end']), ('arbeiten', ['travailler'])]),
 dict(de='Wann kann ich anfangen?', fr='Quand est-ce que je peux commencer ?',
      k=[('wann', ['quand']), ('anfangen', ['commencer'])]),
 dict(de='Brauche ich eine Arbeitserlaubnis?', fr="Ai-je besoin d'un permis de travail ?",
      k=[('brauchen', ['besoin']), ('arbeitserlaubnis', ['permis de travail', 'permis'])],
      h='Für EU-Bürger:innen entfällt die Frage in Frankreich — man darf ohne '
        'Erlaubnis arbeiten. Von außerhalb der EU ist sie die wichtigste '
        'überhaupt, und die Antwort kommt vor dem ersten Arbeitstag.'),

# ---------------------------------------------------------------- Dienstplan
 dict(de='Wann fange ich an?', fr='Quand est-ce que je commence ?',
      k=[('wann', ['quand']), ('anfangen', ['commence'])]),
 dict(de='Wann habe ich frei?', fr='Quand est-ce que je suis libre ?',
      k=[('wann', ['quand']), ('frei', ['libre'])]),
 dict(de='Wie lange dauert die Schicht?', fr='Combien de temps dure le service ?',
      k=[('wie_lange', ['combien de temps']), ('schicht', ['service'])]),
 dict(de='Kann ich am Montag frei haben?', fr='Puis-je être libre lundi ?',
      k=[('montag', ['lundi']), ('frei', ['libre'])]),
 dict(de='Kann ich die Schicht tauschen?', fr='Puis-je échanger mon service ?',
      k=[('schicht', ['service']), ('tauschen', ['échanger'])]),
 dict(de='Ich komme morgen früher.', fr='Je viens plus tôt demain.',
      k=[('morgen', ['demain']), ('frueher', ['plus tôt'])]),
 dict(de='Wo ist der Dienstplan?', fr='Où est le planning ?',
      k=[('wo', ['où']), ('dienstplan', ['planning'])]),

# ---------------------------------------------------------------- Kolleg:innen
 dict(de='Ich bin neu hier.', fr='Je suis nouveau ici.',
      k=[('neu', ['nouveau', 'nouvelle']), ('hier', ['ici'])]),
 dict(de='Kannst du mir kurz helfen?', fr="Tu peux m'aider un instant ?",
      k=[('koennen', ['peux']), ('helfen', ["m'aider", 'aider'])]),
 dict(de='Wie macht man das?', fr='Comment on fait ça ?',
      k=[('wie', ['comment']), ('machen', ['fait'])]),
 dict(de='Das habe ich noch nie gemacht.', fr='Je n\'ai jamais fait ça.',
      k=[('nie', ['jamais']), ('gemacht', ['fait'])]),
 dict(de='Wo finde ich das?', fr="Où est-ce que je trouve ça ?",
      k=[('wo', ['où']), ('finden', ['trouve'])]),
 dict(de='Ich mache Pause.', fr='Je fais une pause.',
      k=[('pause', ['pause'])]),
 dict(de='Danke für deine Hilfe.', fr='Merci pour ton aide.',
      k=[('danke', ['merci']), ('hilfe', ['aide'])]),

# ---------------------------------------------------------------- Kundschaft
 dict(de='Kann ich Ihnen helfen?', fr='Je peux vous aider ?',
      k=[('koennen', ['peux']), ('helfen', ['aider'])],
      h='Gegenüber Kundschaft und Vorgesetzten „vous", im Team „tu" - die '
        'Grenze ist im Arbeitsleben schärfer als sonst im französischen Alltag.'),
 dict(de='Der Nächste, bitte!', fr="Au suivant, s'il vous plaît !",
      k=[('naechste', ['suivant'])]),
 dict(de='Möchten Sie noch etwas?', fr='Voulez-vous autre chose ?',
      k=[('moechten', ['voulez']), ('noch_etwas', ['autre chose'])]),
 dict(de='Zahlen Sie bar oder mit Karte?', fr='Vous payez en espèces ou par carte ?',
      k=[('bar', ['espèces']), ('karte', ['carte'])]),
 dict(de='Tut mir leid, das haben wir nicht.', fr="Désolé, nous n'avons pas ça.",
      k=[('leid', ['désolé']), ('nicht_haben', ["n'avons pas"])]),
 dict(de='Ich hole meinen Kollegen.', fr='Je vais chercher mon collègue.',
      k=[('holen', ['vais chercher', 'chercher']), ('kollege', ['collègue'])]),
 dict(de='Kommen Sie gerne wieder!', fr='Revenez quand vous voulez !',
      k=[('wiederkommen', ['revenez'])]),

# ---------------------------------------------------------------- Krankmelden
 dict(de='Ich kann heute nicht kommen.', fr='Je ne peux pas venir aujourd\'hui.',
      k=[('nicht_koennen', ['ne peux pas']), ('heute', ["aujourd'hui"]), ('kommen', ['venir'])]),
 dict(de='Ich bin krank und bleibe zu Hause.', fr='Je suis malade et je reste à la maison.',
      k=[('krank', ['malade']), ('zu_hause', ['à la maison', 'maison'])]),
 dict(de='Ich komme später.', fr="J'arrive plus tard.",
      k=[('kommen', ['arrive']), ('spaeter', ['plus tard'])]),
 dict(de='Ich brauche einen Tag frei.', fr="J'ai besoin d'un jour de congé.",
      k=[('brauchen', ['besoin']), ('tag_frei', ['jour de congé', 'congé'])]),
 dict(de='Ich habe einen Arzttermin.', fr="J'ai un rendez-vous chez le médecin.",
      k=[('arzttermin', ['rendez-vous chez le médecin', 'rendez-vous'])]),

# ---------------------------------------------------------------- Bezahlung
 dict(de='Wie viel verdiene ich pro Stunde?', fr="Combien je gagne de l'heure ?",
      k=[('verdienen', ['gagne']), ('stunde', ["de l'heure", 'heure'])]),
 dict(de='Wann bekomme ich mein Geld?', fr='Quand est-ce que je reçois mon argent ?',
      k=[('wann', ['quand']), ('geld', ['argent'])]),
 dict(de='Werde ich bar bezahlt?', fr='Est-ce que je suis payé en espèces ?',
      k=[('bar', ['espèces']), ('bezahlt', ['payé'])],
      h='„Travail au black" (Schwarzarbeit) ist im französischen Saisonjob '
        'ebenso verbreitet wie in Spanien und klingt genauso harmloser, als '
        'es ist: ohne Vertrag keine Absicherung, wenn etwas passiert.'),
 dict(de='Ich habe zehn Stunden gearbeitet.', fr='J\'ai travaillé dix heures.',
      k=[('zehn', ['dix']), ('stunden', ['heures']), ('gearbeitet', ['travaillé'])]),
]

AUSGELASSEN = []
