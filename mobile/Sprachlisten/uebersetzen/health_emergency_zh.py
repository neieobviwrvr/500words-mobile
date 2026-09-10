# -*- coding: utf-8 -*-
"""health_emergency auf Chinesisch: die sechs wirklich fehlenden Saetze.

Aus den urspruenglich "10 fehlenden" wurden sechs, nachdem vier davon sich
als Dubletten im deutschen Master herausstellten (zusammenfuehren/
dubletten_health.py, 2026-08-27) - dieselbe Aussage stand dort zweimal in
zwei Formulierungen, Chinesisch hatte jeweils eine davon laengst.

Diese sechs fehlten wirklich. Sie stammen alle aus den urspruenglichen 189
Saetzen; als Chinesisch aufgebaut wurde, hat man diese Ecke nicht
mitgenommen. Aergerlich war das vor allem bei den Symptomen: "Ich fuehle mich
schwindelig" und "Ich habe mir den Fuss verletzt" fehlten ausgerechnet in der
Kategorie, in der man Saetze am dringendsten braucht.

**Zur Wortwahl:**

  忘了带    "vergessen mitzunehmen" - im Deutschen steht nur "vergessen", aber
            auf Chinesisch braucht es das 带 (mitnehmen), sonst hiesse es, man
            haette die Existenz der Tabletten vergessen.
  一天几次  "wie viele Male pro Tag" - die uebliche Art, nach der Dosierung zu
            fragen. Eine woertliche Uebersetzung von "wie oft" (多久一次)
            ginge auch, ist aber im Arztkontext unueblicher.
  头晕      Schwindel. Ein Wort, kein Satzbau - deshalb steht es allein.
  受伤      verletzt sein. Steht schon im Bestand ("Ich bin verletzt" 我受伤了),
            hier mit 脚 (Fuss) davor.
  急        dringend/eilig. 我很急 ist die natuerliche Art, Dringlichkeit
            auszudruecken - 紧急 waere Behoerdendeutsch.

  **保险卡** (Versicherungskarte) fuehrt die Kategorie neu ein. Der Hinweis am
  Satz bleibt der chinesischen Wirklichkeit treu: eine auslaendische
  Versicherungskarte nuetzt dort praktisch nichts, man zahlt selbst und reicht
  die Quittung zu Hause ein - genau deshalb ist der Satz trotzdem nuetzlich
  ("ich habe sie vergessen" ist die ehrliche Auskunft an der Anmeldung).

**Nicht von Muttersprachlern geprueft** - und hier gilt derselbe Vorbehalt wie
bei der spanischen Fassung: bei Notfallsaetzen entscheidet Verstaendlichkeit
unter Stress, nicht Eleganz. Vor der Vertonung ein Spot-Check.
"""

SAETZE = [
# ---------------------------------------------------------------- Symptome
 dict(de='Ich fühle mich schwindelig.',
      zh='我头晕。', py='wǒ tóuyūn.',
      k=[('schwindel', ['头晕', '晕'])]),
 dict(de='Ich habe mir den Fuß verletzt.',
      zh='我的脚受伤了。', py='wǒ de jiǎo shòushāng le.',
      k=[('fuss', ['脚']), ('verletzt', ['受伤'])]),

# ---------------------------------------------------------------- Notfall
 dict(de='Ich brauche dringend Hilfe.',
      zh='我很急，需要帮助。', py='wǒ hěn jí, xūyào bāngzhù.',
      k=[('dringend', ['很急', '急']), ('hilfe', ['帮助', '需要帮助'])]),

# ---------------------------------------------------------------- Krankenhaus
 dict(de='Ich habe meine Tabletten vergessen.',
      zh='我忘了带药。', py='wǒ wàng le dài yào.',
      k=[('vergessen', ['忘了', '忘']), ('medikament', ['药'])]),
 dict(de='Wie oft muss ich das Medikament nehmen?',
      zh='这个药一天吃几次？', py='zhège yào yì tiān chī jǐ cì?',
      k=[('medikament', ['药']), ('wie_oft', ['一天几次', '几次'])]),

# ---------------------------------------------------------------- Bezahlen
 dict(de='Ich habe meine Versicherungskarte vergessen.',
      zh='我忘了带保险卡。', py='wǒ wàng le dài bǎoxiǎnkǎ.',
      k=[('vergessen', ['忘了', '忘']), ('versicherungskarte', ['保险卡', '保险'])],
      h='Eine ausländische Versicherungskarte hilft in China ohnehin selten — '
        'man zahlt selbst und reicht die Quittung (发票) zu Hause ein. Der Satz '
        'ist trotzdem nützlich: an der Anmeldung wird danach gefragt.'),
]

AUSGELASSEN = []
