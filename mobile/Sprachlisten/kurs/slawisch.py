# -*- coding: utf-8 -*-
"""Benannte Praesens- und Vergangenheitsformen fuer Russisch und Polnisch.

**Warum das hier NICHT aus bewertung/formen.py kommen kann.** Der dortige
`slawische_formen()` erzeugt absichtlich einen UEBERSCHUSS - beide
Konjugationen an zwei Stammlaengen, mit dem ausdruecklichen Kommentar "die
falsche Haelfte ergibt Silbenfolgen, die kein Wort sind". Zum ABGLEICHEN
einer Nutzerantwort ist das genau richtig und billiger als echte
Morphologie. Einem Lernenden kann man daraus nichts vorlegen: der Menge
sieht man nicht an, welche Haelfte die richtige war.

**Derselbe Aufbau wie romanisch.py**, weil dasselbe Problem vorliegt - die
slawische Unregelmaessigkeit ist groesstenteils regelmaessig, nur
lexikalisch ausgeloest:

    1. Endungsregel      делать -> делаю, делаешь, ...
    2. Orthografie       nach ж/ш/щ/ч steht у/а statt ю/я
    3. Konjugationsklasse welche von zwei (ru) bzw. vier (pl) - lexikalisch
    4. Ganz unregelmaessig быть, идти, хотеть - ausgeschrieben

**Die Vergangenheit ist der eigentliche Gewinn** und in beiden Sprachen
fast vollstaendig regelbar: Infinitiv minus -ть/-ć, plus л/ł mit
Geschlechtsendung. Genau die braucht das A2-Modul "Was hast du gemacht?".

**Sie richtet sich nach dem GESCHLECHT DES SPRECHERS**, nicht nach dem
Objekt - russisch "я делал" (Mann) gegen "я делала" (Frau), polnisch
"robiłem" gegen "robiłam". Das steht schon als Kulturhinweis in den
russischen Saetzen und ist der Grund, warum `preteritum_f` hier ein eigener
Schluessel ist statt einer Fussnote.

**Nicht muttersprachlich geprueft.** Das gilt fuer den ganzen slawischen
Bestand der App und hier doppelt: die Formen sind das, was der Nutzer
SAGT. Vor der Vertonung gehoert das gegengelesen.
"""

# ---------------------------------------------------------------------------
# RUSSISCH
# ---------------------------------------------------------------------------
# Zwei Konjugationen. Welche ein Verb nimmt, sagt meist die Endung:
# -ить -> 2, alles andere -> 1. Die Ausnahmen stehen unten.
RU_ENDUNGEN = {
    1: ["ю", "ешь", "ет", "ем", "ете", "ют"],
    2: ["ю", "ишь", "ит", "им", "ите", "ят"],
}

# Nach Zischlauten wird aus ю ein у und aus я/ят ein а/ат. Keine Ausnahme,
# sondern russische Rechtschreibung.
RU_ZISCHEND = ("ж", "ш", "щ", "ч")

# Konjugation 2, obwohl die Endung nach 1 aussieht. Die klassische
# Merkliste jedes Russischkurses.
RU_KLASSE_2 = [
    "смотреть", "видеть", "слышать", "держать", "дышать", "гнать",
    "терпеть", "вертеть", "обидеть", "зависеть", "ненавидеть", "стоять",
    "спать", "бояться", "сидеть", "лететь", "шуметь",
]

# Konsonantenwechsel in der 1. Person Singular der 2. Konjugation - und NUR
# dort. "видеть" wird zu "вижу", aber "видишь" bleibt.
RU_WECHSEL = [
    ("ст", "щ"), ("д", "ж"), ("т", "ч"), ("с", "ш"), ("з", "ж"),
    ("б", "бл"), ("п", "пл"), ("в", "вл"), ("ф", "фл"), ("м", "мл"),
]

RU_UNREGELMAESSIG = {
    "быть":    ["буду", "будешь", "будет", "будем", "будете", "будут"],
    "есть":    ["ем", "ешь", "ест", "едим", "едите", "едят"],
    "идти":    ["иду", "идёшь", "идёт", "идём", "идёте", "идут"],
    "ехать":   ["еду", "едешь", "едет", "едем", "едете", "едут"],
    "хотеть":  ["хочу", "хочешь", "хочет", "хотим", "хотите", "хотят"],
    "мочь":    ["могу", "можешь", "может", "можем", "можете", "могут"],
    "жить":    ["живу", "живёшь", "живёт", "живём", "живёте", "живут"],
    "пить":    ["пью", "пьёшь", "пьёт", "пьём", "пьёте", "пьют"],
    "петь":    ["пою", "поёшь", "поёт", "поём", "поёте", "поют"],
    "мыть":    ["мою", "моешь", "моет", "моем", "моете", "моют"],
    "брать":   ["беру", "берёшь", "берёт", "берём", "берёте", "берут"],
    "звать":   ["зову", "зовёшь", "зовёт", "зовём", "зовёте", "зовут"],
    "ждать":   ["жду", "ждёшь", "ждёт", "ждём", "ждёте", "ждут"],
    "давать":  ["даю", "даёшь", "даёт", "даём", "даёте", "дают"],
    "преподавать": ["преподаю", "преподаёшь", "преподаёт",
                    "преподаём", "преподаёте", "преподают"],
    "оставаться": ["остаюсь", "остаёшься", "остаётся",
                   "остаёмся", "остаётесь", "остаются"],
    "класть":  ["кладу", "кладёшь", "кладёт", "кладём", "кладёте", "кладут"],
    "писать":  ["пишу", "пишешь", "пишет", "пишем", "пишете", "пишут"],
    "искать":  ["ищу", "ищешь", "ищет", "ищем", "ищете", "ищут"],
    "плакать": ["плачу", "плачешь", "плачет", "плачем", "плачете", "плачут"],
    "сказать": ["скажу", "скажешь", "скажет", "скажем", "скажете", "скажут"],
    "казаться": ["кажусь", "кажешься", "кажется",
                 "кажемся", "кажетесь", "кажутся"],
    "смеяться": ["смеюсь", "смеёшься", "смеётся",
                 "смеёмся", "смеётесь", "смеются"],
    # -яться verliert das я: надеюсь, nicht надеяюсь.
    "надеяться": ["надеюсь", "надеешься", "надеется",
                  "надеемся", "надеетесь", "надеются"],
    # Das "ова" gehoert hier zum Stamm, nicht zum -овать-Suffix - die Regel
    # machte daraus sonst "здоруюсь" (2026-09-09).
    "здороваться": ["здороваюсь", "здороваешься", "здоровается",
                    "здороваемся", "здороваетесь", "здороваются"],
    # Nur unpersoenlich gebraucht.
    "стоить":  [None, None, "стоит", None, None, "стоят"],
    "случаться": [None, None, "случается", None, None, "случаются"],
    "нравиться": [None, None, "нравится", None, None, "нравятся"],
}

# Vergangenheit: Infinitiv minus -ть plus л/ла/ли. Wo das nicht traegt,
# stehen alle drei Formen ausgeschrieben - ein Stamm-Schema hatte hier
# "могл" statt "мог" erzeugt (2026-09-09), weil bei мочь die maennliche
# Form gar kein л traegt.
RU_VERGANGEN = {
    "идти":   ("шёл", "шла", "шли"),
    "мочь":   ("мог", "могла", "могли"),
    "есть":   ("ел", "ела", "ели"),
    "класть": ("клал", "клала", "клали"),
}

# ---------------------------------------------------------------------------
# POLNISCH
# ---------------------------------------------------------------------------
# Vier Konjugationen. Die Endung entscheidet meist:
#   -ować/-ywać/-iwać -> I mit -uj-      pracować -> pracuję
#   -ić/-yć           -> II              mówić    -> mówię
#   -ać               -> III             czytać   -> czytam
#   -eć               -> II oder IV      widzieć  -> widzę, rozumieć -> rozumiem
# Klasse I und III sind gleichmaessig, Klasse II ist der Sonderfall - und
# der Grund, warum ein einziger Endungssatz hier nicht reicht.
PL_ENDUNGEN = {
    1: ["ę", "esz", "e", "emy", "ecie", "ą"],
    3: ["am", "asz", "a", "amy", "acie", "ają"],
    4: ["em", "esz", "e", "emy", "ecie", "eją"],
}

# **Klasse II hat DREI Stellen mit eigener Logik**, und das ist keine
# Schludrigkeit der Sprache, sondern Palatalisierung:
#
#   1. Person Sg und 3. Person Pl teilen sich einen oft GEWECHSELTEN Stamm
#      (musieć -> muszę / muszą, aber musisz)
#   die Mitte bleibt beim ungewechselten Stamm (musisz, musi, musimy)
#
# Ein einziger Endungssatz auf einem Stamm erzeugte deshalb "mówę" statt
# "mówię" und "widzysz" statt "widzisz" (2026-09-09).

# Nach diesen Auslauten steht in der 1. Sg / 3. Pl ę/ą OHNE i - płacę,
# nicht płacię.
PL_OHNE_I = ("c", "dz", "cz", "sz", "ż", "rz", "l", "j", "ń")

# Nach diesen steht in der MITTE y statt i - tańczysz, nicht tańczisz.
PL_HART_Y = ("cz", "sz", "ż", "rz")

# Wo der Stamm sich nicht durch Abschneiden ergibt.
PL_STAMM = {
    "pisać": "pisz", "płakać": "płacz", "myć": "myj", "pić": "pij",
    "żyć": "żyj", "spać": "śp", "stać": "stoj", "bać": "boj",
    # -ywać bildet das Praesens MAL auf -uję und mal auf -am, und das ist
    # lexikalisch: podpisywać -> podpisuję, aber nazywać -> nazywam
    # (2026-09-09, die Regel machte daraus "nazuję"). Die -uj-Faelle stehen
    # hier, alles andere geht als -ać nach Klasse III.
    "podpisywać": "podpisuj", "pokazywać": "pokazuj",
}

# Der gewechselte Stamm der 1. Sg und 3. Pl (Klasse II).
PL_WECHSEL_1 = {
    "musieć": "musz", "nosić": "nosz",
}

# Klasse, wo die Endung sie nicht verraet.
PL_KLASSE = {
    "rozumieć": 4, "umieć": 4,
    "podpisywać": 1, "pokazywać": 1,
    "pisać": 1, "płakać": 1, "myć": 1, "pić": 1, "żyć": 1, "bić": 1,
    # Enden auf -ać, gehen aber nach Klasse II: śpię, stoję.
    "spać": 2, "stać": 2, "bać": 2,
}

PL_UNREGELMAESSIG = {
    "być":     ["jestem", "jesteś", "jest", "jesteśmy", "jesteście", "są"],
    "mieć":    ["mam", "masz", "ma", "mamy", "macie", "mają"],
    "chcieć":  ["chcę", "chcesz", "chce", "chcemy", "chcecie", "chcą"],
    "móc":     ["mogę", "możesz", "może", "możemy", "możecie", "mogą"],
    "iść":     ["idę", "idziesz", "idzie", "idziemy", "idziecie", "idą"],
    "przyjść": ["przyjdę", "przyjdziesz", "przyjdzie",
                "przyjdziemy", "przyjdziecie", "przyjdą"],
    "jechać":  ["jadę", "jedziesz", "jedzie", "jedziemy", "jedziecie", "jadą"],
    "jeść":    ["jem", "jesz", "je", "jemy", "jecie", "jedzą"],
    "wiedzieć": ["wiem", "wiesz", "wie", "wiemy", "wiecie", "wiedzą"],
    "powiedzieć": ["powiem", "powiesz", "powie",
                   "powiemy", "powiecie", "powiedzą"],
    "dać":     ["dam", "dasz", "da", "damy", "dacie", "dadzą"],
    "brać":    ["biorę", "bierzesz", "bierze", "bierzemy", "bierzecie", "biorą"],
    "kłaść":   ["kładę", "kładziesz", "kładzie",
                "kładziemy", "kładziecie", "kładą"],
    "znaleźć": ["znajdę", "znajdziesz", "znajdzie",
                "znajdziemy", "znajdziecie", "znajdą"],
    "dostawać": ["dostaję", "dostajesz", "dostaje",
                 "dostajemy", "dostajecie", "dostają"],
    "poznawać": ["poznaję", "poznajesz", "poznaje",
                 "poznajemy", "poznajecie", "poznają"],
    "zostawać": ["zostaję", "zostajesz", "zostaje",
                 "zostajemy", "zostajecie", "zostają"],
    "stawać":  ["staję", "stajesz", "staje", "stajemy", "stajecie", "stają"],
    "wydawać": ["wydaję", "wydajesz", "wydaje",
                "wydajemy", "wydajecie", "wydają"],
    "śmiać":   ["śmieję", "śmiejesz", "śmieje",
                "śmiejemy", "śmiejecie", "śmieją"],
    # Nur unpersoenlich.
    "kosztować": [None, None, "kosztuje", None, None, "kosztują"],
    "zdarzać": [None, None, "zdarza", None, None, "zdarzają"],
}

PL_VERGANGEN = {
    "iść":     ("szedł", "szła", "szli"),
    "przyjść": ("przyszedł", "przyszła", "przyszli"),
    "móc":     ("mógł", "mogła", "mogli"),
    "jeść":    ("jadł", "jadła", "jedli"),
    "znaleźć": ("znalazł", "znalazła", "znaleźli"),
    "kłaść":   ("kładł", "kładła", "kładli"),
    "dać":     ("dał", "dała", "dali"),
    "być":     ("był", "była", "byli"),
    # -eć bildet die Vergangenheit sonst auf -ał; patrzeć ist die Ausnahme.
    "patrzeć": ("patrzył", "patrzyła", "patrzyli"),
}


# ---------------------------------------------------------------------------
def _ru_stamm_wechsel(stamm):
    """Konsonantenwechsel der 1. Person Singular, 2. Konjugation."""
    for von, nach in RU_WECHSEL:
        if stamm.endswith(von):
            return stamm[: -len(von)] + nach
    return stamm


def _russisch(lemma):
    reflexiv = lemma.endswith(("ся", "сь"))
    kern = lemma[:-2] if reflexiv else lemma

    # Wird die Form ueber das VOLLE Lemma gefunden, traegt sie das
    # Reflexivpronomen bereits - sonst entstand "кажусься", "остаюсься"
    # (2026-09-09).
    unregelmaessig = RU_UNREGELMAESSIG.get(lemma)
    schon_reflexiv = unregelmaessig is not None
    if unregelmaessig is None:
        unregelmaessig = RU_UNREGELMAESSIG.get(kern)
    quelle = "liste" if unregelmaessig else "regel"

    if unregelmaessig:
        praesens = list(unregelmaessig)
    else:
        if not kern.endswith("ть") or len(kern) < 4:
            return None
        klasse = 2 if (kern.endswith("ить") or kern in RU_KLASSE_2) else 1
        stamm = kern[:-3] if klasse == 2 else kern[:-2]

        # -овать/-евать bilden das Praesens auf -у-/-ю-: рисовать -> рисую.
        if kern.endswith(("овать", "евать")):
            stamm, klasse = kern[:-5] + ("у" if kern.endswith("овать") else "у"), 1

        praesens = []
        for i, endung in enumerate(RU_ENDUNGEN[klasse]):
            s = _ru_stamm_wechsel(stamm) if (klasse == 2 and i == 0) else stamm
            e = endung
            if s.endswith(RU_ZISCHEND):
                e = e.replace("ю", "у").replace("я", "а")
            praesens.append(s + e)

    if reflexiv and not schon_reflexiv:
        # -сь nach Vokal, -ся nach Konsonant.
        praesens = [None if f is None else
                    f + ("сь" if f[-1] in "аеёиоуыэюя" else "ся")
                    for f in praesens]

    # --- Vergangenheit ---------------------------------------------------
    sonder = RU_VERGANGEN.get(kern)
    if sonder:
        vergangen = list(sonder)
    elif kern.endswith("ть"):
        s = kern[:-2]
        vergangen = [s + "л", s + "ла", s + "ли"]
    else:
        vergangen = [None, None, None]
    if reflexiv and vergangen[0]:
        vergangen = [vergangen[0] + "ся", vergangen[1] + "сь", vergangen[2] + "сь"]

    return praesens, vergangen, quelle


def _pl_stamm(kern):
    """Praesensstamm. -ieć verliert drei Zeichen, alles andere zwei."""
    if kern in PL_STAMM:
        return PL_STAMM[kern]
    if kern.endswith("ować"):
        return kern[:-4] + "uj"
    # Klasse IV behaelt das i: rozumieć -> rozumi-em, nicht rozum-em.
    if kern.endswith("ieć") and PL_KLASSE.get(kern) == 4:
        return kern[:-2]
    if kern.endswith("ieć"):
        return kern[:-3]
    return kern[:-2]


def _pl_klasse(kern):
    if kern in PL_KLASSE:
        return PL_KLASSE[kern]
    if kern.endswith("ować"):
        return 1
    if kern.endswith(("ić", "yć", "eć")):
        return 2
    return 3


def _pl_praesens_2(kern, stamm):
    """Klasse II - drei Stellen, drei Regeln. Siehe Kommentar oben."""
    wechsel = PL_WECHSEL_1.get(kern, stamm)
    ohne_i = wechsel.endswith(PL_OHNE_I)
    eins = wechsel + ("ę" if ohne_i else "ię")
    sechs = wechsel + ("ą" if ohne_i else "ią")
    mitte = "y" if stamm.endswith(PL_HART_Y) else "i"
    # Ein Stamm auf j verliert es vor der hellen Endung der Mitte:
    # stoję / stoją, aber stoisz - nicht "stojisz" (2026-09-09).
    rumpf = stamm[:-1] if stamm.endswith("j") else stamm
    return [eins,
            rumpf + mitte + "sz", rumpf + mitte,
            rumpf + mitte + "my", rumpf + mitte + "cie",
            sechs]


def _polnisch(lemma):
    reflexiv = lemma.endswith(" się")
    kern = lemma[:-4] if reflexiv else lemma

    # Mehrwortiges wird ueber den KOPF gebeugt, der Rest bleibt stehen:
    # "mieć nadzieję" -> "mam nadzieję". Dieselbe Regel wie bei den
    # englischen Wendungen ("look for" -> "looks for").
    if " " in kern:
        kopf, rest = kern.split(" ", 1)
        gebaut = _polnisch(kopf)
        if gebaut is None:
            return None
        praesens, vergangen, quelle = gebaut
        anhang = " " + rest
        praesens = [None if f is None else f + anhang for f in praesens]
        vergangen = [None if f is None else f + anhang for f in vergangen]
        if reflexiv:
            praesens = [None if f is None else f + " się" for f in praesens]
            vergangen = [None if f is None else f + " się" for f in vergangen]
        return praesens, vergangen, quelle

    unregelmaessig = PL_UNREGELMAESSIG.get(kern)
    quelle = "liste" if unregelmaessig else "regel"

    if unregelmaessig:
        praesens = list(unregelmaessig)
    else:
        if not kern.endswith("ć") or len(kern) < 3:
            return None
        stamm = _pl_stamm(kern)
        klasse = _pl_klasse(kern)
        praesens = (_pl_praesens_2(kern, stamm) if klasse == 2
                    else [stamm + e for e in PL_ENDUNGEN[klasse]])

    if reflexiv:
        praesens = [None if f is None else f + " się" for f in praesens]

    # --- Vergangenheit ---------------------------------------------------
    #
    # -eć bildet sie auf -ał, nicht auf -eł: mieć -> miał, widzieć ->
    # widział, chcieć -> chciał. Der Plural geht dagegen auf -eli zurueck
    # (mieli, widzieli). Ohne diese Regel stand dort "mieł" (2026-09-09).
    sonder = PL_VERGANGEN.get(kern)
    if sonder:
        vergangen = list(sonder)
    elif kern.endswith("eć"):
        s = kern[:-2]
        vergangen = [s + "ał", s + "ała", s + "eli"]
    elif kern.endswith("ć"):
        s = kern[:-1]
        vergangen = [s + "ł", s + "ła", s + "li"]
    else:
        vergangen = [None, None, None]
    if reflexiv and vergangen[0]:
        vergangen = [f + " się" for f in vergangen]

    return praesens, vergangen, quelle


def formen(lemma, code):
    """Benannte Formen zu einem slawischen Verb, oder None.

    `present` ist die 1. Person Singular - die Form, die der Kurs in seinen
    Rahmen benutzt (PERSONENKONJUGATION laesst nur das erste Pronomen
    stehen, und das ist "я" bzw. "ja").

    `preteritum` ist die MAENNLICHE Form, `preteritum_f` die weibliche. In
    beiden Sprachen richtet sich die Vergangenheit nach dem Geschlecht des
    Sprechers, nicht nach dem Objekt.
    """
    gebaut = _russisch(lemma) if code == "ru" else _polnisch(lemma)
    if gebaut is None:
        return None
    praesens, vergangen, quelle = gebaut

    aus = {"quelle": quelle}
    for i, f in enumerate(praesens, 1):
        if f:
            aus[f"praesens_{i}"] = f
    aus["present"] = praesens[0] or praesens[2] or lemma
    if vergangen[0]:
        aus["preteritum"] = vergangen[0]
        aus["preteritum_f"] = vergangen[1]
        aus["preteritum_pl"] = vergangen[2]
    # Slawische Verben haben kein Partizip, das ein Perfekt bildet - die
    # Vergangenheit IST die l-Form. `supinum` bleibt deshalb leer; wer ein
    # A2-Modul "Was hast du gemacht?" baut, nimmt hier `preteritum`.
    return aus
