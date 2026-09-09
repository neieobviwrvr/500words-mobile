# -*- coding: utf-8 -*-
"""Aus einem Grundwort alle Formen machen, die in einem Satz stehen koennen.

Je Sprache ein anderer Weg, und der Unterschied ist kein Zufall:

  sv   NICHTS wird erzeugt. Die Formen stehen in `schwedisch_vocab.forms`
       (Praesens/Preteritum/Supinum) und werden von dort geholt. Was dort
       fehlt, steht von Hand in familien.ZUSATZ. Raten waere hier falsch:
       schwedische Verben verteilen sich auf vier Konjugationen, und die
       vierte ist unregelmaessig.

  en   erzeugt. Englische Formenbildung ist regelmaessig genug, dass eine
       Regel plus eine Liste der Unregelmaessigen reicht - 108 Verben von
       Hand zu beugen waere Arbeit ohne Erkenntnisgewinn.

  zh   entfaellt. Chinesisch konjugiert nicht.

**Eine Form zu viel schadet fast nichts, eine zu wenig schon.** Eine
ueberfluessige Form liegt nur ungenutzt in der Familie herum. Eine fehlende
dagegen wertet eine richtige Antwort ab: wer "I booked a table" sagt und
"booked" steht nicht in der Familie, verliert das Richtig-Niveau. Im Zweifel
also grosszuegig.
"""

# Unregelmaessige englische Verben: Grundform -> (3. Person, Praeteritum,
# Partizip). Bewusst nur die, die in den Familien wirklich vorkommen - eine
# vollstaendige Liste waere Ballast.
UNREGELMAESSIG = {
    "be": ("is", "was", "been"),
    "have": ("has", "had", "had"),
    "do": ("does", "did", "done"),
    "say": ("says", "said", "said"),
    # Partizip ungleich Praeteritum - die Regel machte daraus "showed"
    # (nachgetragen 2026-09-08). "I have shown", nicht "I have showed".
    "show": ("shows", "showed", "shown"),
    "go": ("goes", "went", "gone"),
    "get": ("gets", "got", "gotten"),
    "make": ("makes", "made", "made"),
    "know": ("knows", "knew", "known"),
    "think": ("thinks", "thought", "thought"),
    "take": ("takes", "took", "taken"),
    "see": ("sees", "saw", "seen"),
    "come": ("comes", "came", "come"),
    "find": ("finds", "found", "found"),
    "give": ("gives", "gave", "given"),
    "tell": ("tells", "told", "told"),
    "become": ("becomes", "became", "become"),
    "leave": ("leaves", "left", "left"),
    "put": ("puts", "put", "put"),
    "mean": ("means", "meant", "meant"),
    "keep": ("keeps", "kept", "kept"),
    "begin": ("begins", "began", "begun"),
    "speak": ("speaks", "spoke", "spoken"),
    "run": ("runs", "ran", "run"),
    "bring": ("brings", "brought", "brought"),
    "write": ("writes", "wrote", "written"),
    "sit": ("sits", "sat", "sat"),
    "stand": ("stands", "stood", "stood"),
    "lose": ("loses", "lost", "lost"),
    "pay": ("pays", "paid", "paid"),
    "meet": ("meets", "met", "met"),
    "understand": ("understands", "understood", "understood"),
    "eat": ("eats", "ate", "eaten"),
    "drink": ("drinks", "drank", "drunk"),
    "sleep": ("sleeps", "slept", "slept"),
    "buy": ("buys", "bought", "bought"),
    "sell": ("sells", "sold", "sold"),
    "cost": ("costs", "cost", "cost"),
    "forget": ("forgets", "forgot", "forgotten"),
    "read": ("reads", "read", "read"),
    "teach": ("teaches", "taught", "taught"),
    "send": ("sends", "sent", "sent"),
    "wear": ("wears", "wore", "worn"),
    "sing": ("sings", "sang", "sung"),
    "hear": ("hears", "heard", "heard"),
    "choose": ("chooses", "chose", "chosen"),
    "feel": ("feels", "felt", "felt"),
    "drive": ("drives", "drove", "driven"),
    "fly": ("flies", "flew", "flown"),
    "win": ("wins", "won", "won"),
    "lend": ("lends", "lent", "lent"),
    "ride": ("rides", "rode", "ridden"),
    "let": ("lets", "let", "let"),
    "catch": ("catches", "caught", "caught"),
}

# Formen, die gar keine Beugung kennen - Modalverben und feste Wendungen.
# Ohne diese Liste wuerde "can" zu "cans"/"canned" und "must" zu "musted".
UNVERAENDERLICH = {
    "can", "could", "must", "may", "might", "should", "would", "will",
    "shall", "there is", "there are",
}

# Zusammenziehungen - im Englischen die REGEL, nicht die Ausnahme.
#
# 176 der 581 englischen Saetze enthalten einen Apostroph, und in fast allen
# steckt darin genau das Verb, um das es geht: "That's very dangerous",
# "I'm allergic to nuts", "It's too loud in here". Ohne diese Liste findet
# weder die Zuordnung noch die Bewertung darin ein `be` - "im" und "am"
# liegen fuer die Tippfehler-Toleranz zu weit auseinander (bei zwei Zeichen
# gilt gar keine Toleranz, mit Absicht).
#
# Deshalb stehen die Zusammenziehungen als eigene FORMEN in der Familie. Das
# ist keine Kruecke, sondern der Sinn einer Formenliste: sie sammelt, wie das
# Wort im Satz wirklich dasteht. `normalize()` in evaluateConcepts.ts wirft
# den Apostroph ohnehin weg, "that's" und "thats" treffen also beide.
ZUSAMMENZIEHUNG = {
    "be": ["i'm", "you're", "we're", "they're", "he's", "she's", "it's",
           "that's", "there's", "here's", "what's", "where's", "how's",
           "who's", "isn't", "aren't", "wasn't", "weren't"],
    "have": ["i've", "you've", "we've", "they've", "he's", "she's",
             "haven't", "hasn't", "hadn't"],
    "will": ["i'll", "you'll", "we'll", "they'll", "he'll", "she'll",
             "it'll", "won't"],
    "would": ["i'd", "you'd", "we'd", "they'd", "he'd", "she'd", "wouldn't"],
    "can": ["can't", "cannot"],
    "could": ["couldn't"],
    "do": ["don't", "doesn't", "didn't"],
    "must": ["mustn't"],
    "should": ["shouldn't"],
}

# Kurze Verben mit Konsonant-Vokal-Konsonant verdoppeln den Endkonsonanten:
# stop -> stopped. Als Liste statt als Regel, weil die Regel am Wortakzent
# haengt ("visit" -> visited, NICHT visitted) und den kennt der Code nicht.
# "book" gehoert ausdruecklich NICHT dazu (langer Vokal): booked, nicht
# bookked.
VERDOPPELN = {
    "chat", "plan", "prefer", "shop", "stop", "travel",
    # Nachgetragen 2026-09-08: die Verlaufsform dieser acht war
    # falsch ("geting", "siting", "begining"). Aufgefallen erst,
    # als verbformen.py dieselben Regeln fuer die ANZEIGE benutzte -
    # beim blossen Abgleichen faellt eine zu wenig erzeugte Form
    # nicht auf, sie kostet dort nur einen Treffer.
    # Nicht dabei: happen, listen, open, order, remember, visit -
    # die betonen die vorletzte Silbe und verdoppeln nicht.
    "begin", "forget", "get", "let", "put", "run", "sit", "win",
}


def _dritte_person(wort: str) -> str:
    if wort.endswith(("s", "sh", "ch", "x", "z", "o")):
        return wort + "es"
    if wort.endswith("y") and wort[-2:-1] not in "aeiou":
        return wort[:-1] + "ies"
    return wort + "s"


def _praeteritum(wort: str) -> str:
    if wort.endswith("e"):
        return wort + "d"
    if wort.endswith("y") and wort[-2:-1] not in "aeiou":
        return wort[:-1] + "ied"
    if wort in VERDOPPELN:
        return wort + wort[-1] + "ed"
    return wort + "ed"


def _verlaufsform(wort: str) -> str:
    if wort.endswith("ie"):
        return wort[:-2] + "ying"
    if wort.endswith("e") and not wort.endswith("ee"):
        return wort[:-1] + "ing"
    if wort in VERDOPPELN:
        return wort + wort[-1] + "ing"
    return wort + "ing"


def englische_formen(eintrag: str) -> list[str]:
    """Alle Formen zu einem englischen Eintrag - auch zu mehrwortigen.

    "look for" wird ueber das ERSTE Wort gebeugt und behaelt den Rest:
    looks for, looked for, looking for. Genau deshalb muss
    `clusterMatches()` in evaluateConcepts.ts mehrwortige Formen koennen -
    bis zum 2026-09-04 konnte es das nicht, und die halbe englische Liste
    waere still wirkungslos geblieben.
    """
    if eintrag in UNVERAENDERLICH:
        return sorted({eintrag} | set(ZUSAMMENZIEHUNG.get(eintrag, [])))
    teile = eintrag.split(" ", 1)
    kopf, rest = teile[0], (" " + teile[1] if len(teile) > 1 else "")
    if kopf in UNVERAENDERLICH:
        return [eintrag]

    if kopf in UNREGELMAESSIG:
        dritte, praet, partizip = UNREGELMAESSIG[kopf]
        formen = [kopf, dritte, praet, partizip, _verlaufsform(kopf)]
        if kopf == "be":
            formen += ["am", "are", "were", "being"]
    else:
        formen = [kopf, _dritte_person(kopf), _praeteritum(kopf), _verlaufsform(kopf)]

    gebeugt = {f + rest for f in formen}
    # Zusammenziehungen nur beim einfachen Verb, nicht bei "be able to" -
    # "i'm able to" waere richtig, "i'm called" bei "be called" aber schon
    # eine andere Aussage. Die paar Faelle sind den Aufwand nicht wert.
    if not rest:
        gebeugt |= set(ZUSAMMENZIEHUNG.get(kopf, []))
    return sorted(gebeugt)


def schwedischer_imperativ(grundform: str, praesens: str | None) -> str | None:
    """Die Befehlsform - abgeleitet, nicht nachgeschlagen.

    Sie fehlt in `schwedisch_vocab.forms` (dort stehen nur Praesens,
    Preteritum und Supinum), kommt in einem Sprachfuehrer aber staendig vor:
    "Ring en ambulans!", "Saeg det en gaang till.", "Kom hit."

    Am 2026-09-04 fielen genau solche Saetze durch die Zuordnung - `ringa`
    hatte die Formen ringer/ringde/ringt/ringa, und "Ring" war keine davon.

    Die Regel haengt am Praesens und ist damit aus den Daten ableitbar:
      -ar  (1. Konjugation)  Imperativ = Infinitiv    jobba  -> jobba
      -er  (2. Konjugation)  Infinitiv ohne -a        ringa  -> ring
      sonst (kurze Verben)   Infinitiv                gaa    -> gaa
    """
    if not praesens:
        return None
    if praesens.endswith("ar"):
        return grundform
    if praesens.endswith("er"):
        return grundform[:-1] if grundform.endswith("a") else grundform
    return grundform


def schwedische_formen(grundform: str, aus_vocab: dict, zusatz: dict) -> list[str]:
    """Formen aus den Daten, nicht aus einer Regel.

    `aus_vocab` ist die `forms`-Spalte von schwedisch_vocab (Praesens,
    Preteritum, Supinum), `zusatz` die Handliste aus familien.py fuer Verben
    ausserhalb der 500 Grundwoerter. Fehlt beides, gibt es nur die
    Grundform - und der Aufrufer meldet das, statt es zu verschweigen.
    """
    formen = {grundform}
    eintrag = aus_vocab.get(grundform) or {}
    praesens = eintrag.get("present")
    for schluessel in ("present", "preteritum", "supinum"):
        wert = eintrag.get(schluessel)
        # Mehrwortige Umschreibungen wie "var tvungen att" bei `maaste`
        # sind keine Verbform, sondern eine Erklaerung - die wuerde als
        # Familienform nur Rauschen erzeugen.
        if wert and " " not in wert:
            formen.add(wert)

    handformen = zusatz.get(grundform, [])
    formen.update(handformen)
    if not praesens and handformen:
        praesens = handformen[0]   # ZUSATZ beginnt mit dem Praesens

    imperativ = schwedischer_imperativ(grundform, praesens)
    if imperativ:
        formen.add(imperativ)
    return sorted(formen)


# ---------------------------------------------------------------------------
# Romanische Konjugation
#
# Erzeugt werden Infinitiv, alle sechs Praesensformen und das Partizip. Das
# reicht fuer einen Sprachfuehrer: die Saetze stehen in der 1. Person ("Ich
# haette gern..."), der 2. ("Hast du...?"), der 3. ("Wie viel kostet das?")
# oder im Infinitiv nach einem Modalverb.
#
# Vergangenheitszeiten fehlen mit Absicht - sie kaemen in diesen Saetzen kaum
# vor, und jede zusaetzlich erzeugte Form ist eine weitere Gelegenheit, etwas
# Falsches zu erzeugen.
# ---------------------------------------------------------------------------

# Endung -> (die sechs Praesensformen, Partizip).
ROMANISCH = {
    "es": {
        "ar": (["o", "as", "a", "amos", "áis", "an"], "ado"),
        "er": (["o", "es", "e", "emos", "éis", "en"], "ido"),
        "ir": (["o", "es", "e", "imos", "ís", "en"], "ido"),
    },
    "it": {
        "are": (["o", "i", "a", "iamo", "ate", "ano"], "ato"),
        "ere": (["o", "i", "e", "iamo", "ete", "ono"], "uto"),
        "ire": (["o", "i", "e", "iamo", "ite", "ono"], "ito"),
    },
    "fr": {
        "er": (["e", "es", "e", "ons", "ez", "ent"], "é"),
        "ir": (["is", "is", "it", "issons", "issez", "issent"], "i"),
        "re": (["s", "s", "", "ons", "ez", "ent"], "u"),
    },
}

# Die Unregelmaessigen - in diesen Sprachen zugleich die haeufigsten Verben.
# Ausgeschrieben statt geraten: eine erfundene Form waere hier schlimmer als
# eine fehlende, weil sie ein echtes anderes Wort treffen kann.
ROMANISCH_UNREGELMAESSIG = {
    "es": {
        "ser": ["soy", "eres", "es", "somos", "sois", "son", "sido", "era", "fue"],
        "estar": ["estoy", "estás", "está", "estamos", "estáis", "están", "estado"],
        "tener": ["tengo", "tienes", "tiene", "tenemos", "tenéis", "tienen", "tenido"],
        "hacer": ["hago", "haces", "hace", "hacemos", "hacéis", "hacen", "hecho"],
        "poder": ["puedo", "puedes", "puede", "podemos", "podéis", "pueden", "podido"],
        "decir": ["digo", "dices", "dice", "decimos", "decís", "dicen", "dicho"],
        "ir": ["voy", "vas", "va", "vamos", "vais", "van", "ido"],
        "ver": ["veo", "ves", "ve", "vemos", "veis", "ven", "visto"],
        "dar": ["doy", "das", "da", "damos", "dais", "dan", "dado"],
        "saber": ["sé", "sabes", "sabe", "sabemos", "sabéis", "saben", "sabido"],
        "querer": ["quiero", "quieres", "quiere", "queremos", "queréis", "quieren",
                   "querido", "quisiera"],
        "venir": ["vengo", "vienes", "viene", "venimos", "venís", "vienen", "venido"],
        "salir": ["salgo", "sales", "sale", "salimos", "salís", "salen", "salido"],
        "poner": ["pongo", "pones", "pone", "ponemos", "ponéis", "ponen", "puesto"],
        "pedir": ["pido", "pides", "pide", "pedimos", "pedís", "piden", "pedido"],
        "costar": ["cuesta", "cuestan", "costado"],
        "dormir": ["duermo", "duermes", "duerme", "dormimos", "duermen", "dormido"],
        "empezar": ["empiezo", "empiezas", "empieza", "empezamos", "empiezan"],
        "entender": ["entiendo", "entiendes", "entiende", "entendemos", "entienden"],
        "perder": ["pierdo", "pierdes", "pierde", "perdemos", "pierden", "perdido"],
        "encontrar": ["encuentro", "encuentras", "encuentra", "encontramos", "encuentran"],
        "volver": ["vuelvo", "vuelves", "vuelve", "volvemos", "vuelven", "vuelto"],
        "jugar": ["juego", "juegas", "juega", "jugamos", "juegan"],
    },
    "it": {
        "essere": ["sono", "sei", "è", "siamo", "siete", "stato"],
        "avere": ["ho", "hai", "ha", "abbiamo", "avete", "hanno", "avuto"],
        "fare": ["faccio", "fai", "fa", "facciamo", "fate", "fanno", "fatto"],
        "dire": ["dico", "dici", "dice", "diciamo", "dite", "dicono", "detto"],
        "volere": ["voglio", "vuoi", "vuole", "vogliamo", "volete", "vogliono",
                   "voluto", "vorrei"],
        "andare": ["vado", "vai", "va", "andiamo", "andate", "vanno", "andato"],
        "venire": ["vengo", "vieni", "viene", "veniamo", "venite", "vengono", "venuto"],
        "vedere": ["vedo", "vedi", "vede", "vediamo", "vedete", "vedono", "visto"],
        "potere": ["posso", "puoi", "può", "possiamo", "potete", "possono", "potuto"],
        "dovere": ["devo", "devi", "deve", "dobbiamo", "dovete", "devono", "dovuto"],
        "sapere": ["so", "sai", "sa", "sappiamo", "sapete", "sanno", "saputo"],
        "dare": ["do", "dai", "dà", "diamo", "date", "danno", "dato"],
        "stare": ["sto", "stai", "sta", "stiamo", "state", "stanno", "stato"],
        "bere": ["bevo", "bevi", "beve", "beviamo", "bevete", "bevono", "bevuto"],
        "uscire": ["esco", "esci", "esce", "usciamo", "uscite", "escono", "uscito"],
        "prendere": ["prendo", "prendi", "prende", "prendiamo", "prendono", "preso"],
        "costare": ["costa", "costano", "costato"],
        "piacere": ["piace", "piacciono", "piaciuto"],
        "rimanere": ["rimango", "rimani", "rimane", "rimaniamo", "rimangono", "rimasto"],
    },
    "fr": {
        "être": ["suis", "es", "est", "sommes", "êtes", "sont", "été"],
        "avoir": ["ai", "as", "a", "avons", "avez", "ont", "eu"],
        "aller": ["vais", "vas", "va", "allons", "allez", "vont", "allé"],
        "faire": ["fais", "fait", "faisons", "faites", "font"],
        "pouvoir": ["peux", "peut", "pouvons", "pouvez", "peuvent", "pu"],
        "vouloir": ["veux", "veut", "voulons", "voulez", "veulent", "voulu",
                    "voudrais", "voudrait"],
        "devoir": ["dois", "doit", "devons", "devez", "doivent", "dû"],
        "venir": ["viens", "vient", "venons", "venez", "viennent", "venu"],
        "prendre": ["prends", "prend", "prenons", "prenez", "prennent", "pris"],
        "savoir": ["sais", "sait", "savons", "savez", "savent", "su"],
        "voir": ["vois", "voit", "voyons", "voyez", "voient", "vu"],
        "dire": ["dis", "dit", "disons", "dites", "disent"],
        "mettre": ["mets", "met", "mettons", "mettez", "mettent", "mis"],
        "boire": ["bois", "boit", "buvons", "buvez", "boivent", "bu"],
        "écrire": ["écris", "écrit", "écrivons", "écrivez", "écrivent"],
        "lire": ["lis", "lit", "lisons", "lisez", "lisent", "lu"],
        "partir": ["pars", "part", "partons", "partez", "partent", "parti"],
        "sortir": ["sors", "sort", "sortons", "sortez", "sortent", "sorti"],
        "dormir": ["dors", "dort", "dormons", "dormez", "dorment", "dormi"],
        "attendre": ["attends", "attend", "attendons", "attendez", "attendent", "attendu"],
        "comprendre": ["comprends", "comprend", "comprenons", "comprennent", "compris"],
        "connaître": ["connais", "connaît", "connaissons", "connaissent", "connu"],
        "recevoir": ["reçois", "reçoit", "recevons", "reçoivent", "reçu"],
        "ouvrir": ["ouvre", "ouvres", "ouvrons", "ouvrez", "ouvrent", "ouvert"],
    },
}


def romanische_formen(lemma: str, sprache: str) -> list[str]:
    """Infinitiv, Praesens und Partizip - aus der Liste oder nach Regel."""
    formen = {lemma}
    unregelmaessig = ROMANISCH_UNREGELMAESSIG.get(sprache, {}).get(lemma)
    if unregelmaessig:
        formen.update(unregelmaessig)
        return sorted(formen)

    for endung, (praesens, partizip) in ROMANISCH.get(sprache, {}).items():
        if lemma.endswith(endung) and len(lemma) > len(endung):
            stamm = lemma[: -len(endung)]
            formen.update(stamm + p for p in praesens)
            formen.add(stamm + partizip)
            break
    return sorted(f for f in formen if f)


def ohne_beugung(lemma: str) -> list[str]:
    """Vietnamesisch und Chinesisch - das Wort ist die einzige Form."""
    return [lemma]


# ---------------------------------------------------------------------------
# Slawische Konjugation - grosszuegig statt genau
#
# Russisch und Polnisch haben zwei Praesens-Konjugationen, und welche ein Verb
# nimmt, sieht man dem Infinitiv nicht sicher an. Statt zu raten werden BEIDE
# erzeugt. Die falsche liefert Silbenfolgen, die kein Wort sind - sie liegen
# ungenutzt in der Familie und koennen nichts kaputt machen. Die richtige
# liefert die Formen, die im Satz stehen.
#
# Das ist genau die Abwaegung aus dem Modulkopf: eine Form zu viel schadet
# fast nichts, eine zu wenig wertet eine richtige Antwort ab.
#
# **Was das NICHT kann:** Stammwechsel. Russisch хотеть wird zu хочу, nicht zu
# хотю; мочь zu могу. Solche Verben stehen unten von Hand - es sind wenige,
# aber es sind die haeufigsten. Aspektpaare (делать/сделать) behandeln wir gar
# nicht; sie stehen in der Vokabelliste ohnehin meist nur einfach.
#
# Nicht von Muttersprachlern geprueft.
# ---------------------------------------------------------------------------

# Infinitiv-Endungen, die abgeschnitten werden, laengste zuerst.
SLAWISCH_INFINITIV = {
    "ru": ["ться", "ть", "ти", "чь"],
    "pl": ["się", "ć"],
}

# Praesens-Endungen beider Konjugationen plus Vergangenheit.
SLAWISCH_ENDUNGEN = {
    "ru": ["ю", "у", "ешь", "ет", "ем", "ете", "ют", "ут",
           "ишь", "ит", "им", "ите", "ят", "ат",
           "л", "ла", "ло", "ли"],
    "pl": ["ę", "isz", "i", "imy", "icie", "ą",
           "am", "asz", "a", "amy", "acie", "ają",
           "ł", "ła", "ło", "li", "ły"],
}

# Stammwechsler und Unregelmaessige - die haeufigsten Verben ueberhaupt.
SLAWISCH_UNREGELMAESSIG = {
    "ru": {
        "быть": ["есть", "был", "была", "было", "были", "буду", "будет", "будем", "будут"],
        "хотеть": ["хочу", "хочешь", "хочет", "хотим", "хотите", "хотят", "хотел", "хотела"],
        "мочь": ["могу", "можешь", "может", "можем", "можете", "могут", "мог", "могла"],
        "идти": ["иду", "идёшь", "идет", "идёт", "идем", "идём", "идут", "шёл", "шла"],
        "ехать": ["еду", "едешь", "едет", "едем", "едете", "едут", "ехал", "ехала"],
        "есть": ["ем", "ешь", "ест", "едим", "едите", "едят", "ел", "ела"],
        "пить": ["пью", "пьёшь", "пьет", "пьёт", "пьем", "пьём", "пьют", "пил", "пила"],
        "дать": ["дам", "дашь", "даст", "дадим", "дадите", "дадут", "дал", "дала"],
        "взять": ["возьму", "возьмешь", "возьмёшь", "возьмет", "возьмёт", "взял", "взяла"],
        "жить": ["живу", "живешь", "живёшь", "живет", "живёт", "живем", "живут", "жил", "жила"],
        "писать": ["пишу", "пишешь", "пишет", "пишем", "пишут", "писал", "писала"],
        "сказать": ["скажу", "скажешь", "скажет", "скажем", "скажут", "сказал", "сказала"],
        "спать": ["сплю", "спишь", "спит", "спим", "спите", "спят", "спал", "спала"],
        "искать": ["ищу", "ищешь", "ищет", "ищем", "ищут", "искал", "искала"],
        "платить": ["плачу", "платишь", "платит", "платим", "платят", "платил"],
        "помочь": ["помогу", "поможешь", "поможет", "помогут", "помог", "помогла"],
    },
    "pl": {
        "być": ["jestem", "jesteś", "jest", "jesteśmy", "jesteście", "są",
                "był", "była", "było", "byli", "będę", "będzie", "będą"],
        "mieć": ["mam", "masz", "ma", "mamy", "macie", "mają", "miał", "miała"],
        "chcieć": ["chcę", "chcesz", "chce", "chcemy", "chcecie", "chcą", "chciał", "chciała"],
        "iść": ["idę", "idziesz", "idzie", "idziemy", "idą", "szedł", "szła"],
        "jechać": ["jadę", "jedziesz", "jedzie", "jedziemy", "jadą", "jechał", "jechała"],
        "móc": ["mogę", "możesz", "może", "możemy", "możecie", "mogą", "mógł", "mogła"],
        "wiedzieć": ["wiem", "wiesz", "wie", "wiemy", "wiecie", "wiedzą", "wiedział"],
        "jeść": ["jem", "jesz", "je", "jemy", "jecie", "jedzą", "jadł", "jadła"],
        "pić": ["piję", "pijesz", "pije", "pijemy", "piją", "pił", "piła"],
        "dać": ["dam", "dasz", "da", "damy", "dacie", "dadzą", "dał", "dała"],
        "wziąć": ["wezmę", "weźmiesz", "weźmie", "wezmą", "wziął", "wzięła"],
        "pisać": ["piszę", "piszesz", "pisze", "piszemy", "piszą", "pisał", "pisała"],
        "powiedzieć": ["powiem", "powiesz", "powie", "powiemy", "powiedzą", "powiedział"],
        "spać": ["śpię", "śpisz", "śpi", "śpimy", "śpią", "spał", "spała"],
        "szukać": ["szukam", "szukasz", "szuka", "szukamy", "szukają", "szukał"],
        "płacić": ["płacę", "płacisz", "płaci", "płacimy", "płacą", "płacił"],
    },
}

# Unter dieser Stammlaenge wird gar nichts erzeugt.
#
# Aus "жить" bliebe der Stamm "жи" - zwei Zeichen, an die man alles anhaengen
# koennte. Die erzeugten Silben waeren zu kurz, um noch etwas Bestimmtes zu
# treffen, und die Gefahr, versehentlich ein echtes anderes Wort zu bauen,
# steigt mit jeder weggelassenen Silbe. Solche Verben gehoeren in die Liste
# oben oder gar nicht in die Familie.
SLAWISCH_MINDESTSTAMM = 3


def slawische_formen(lemma: str, sprache: str) -> list[str]:
    """Infinitiv plus beide Praesens-Konjugationen plus Vergangenheit."""
    formen = {lemma}
    unregelmaessig = SLAWISCH_UNREGELMAESSIG.get(sprache, {}).get(lemma)
    if unregelmaessig:
        formen.update(unregelmaessig)
        return sorted(formen)

    # ZWEI Staemme, nicht einer - das ist der Kern.
    #
    # Russisch "govorit'" wird zu "govorit", nicht zu "govoriet": bei der
    # 2. Konjugation faellt der Themenvokal mit weg (govor + it), bei der
    # 1. bleibt er stehen (zna + ju). Welche ein Verb nimmt, sieht man dem
    # Infinitiv nicht sicher an. Also beide Staemme, beide Endungssaetze -
    # die falsche Haelfte ergibt Silbenfolgen, die kein Wort sind.
    staemme = set()
    for endung in SLAWISCH_INFINITIV.get(sprache, []):
        if lemma.endswith(endung) and len(lemma) > len(endung):
            kurz = lemma[: -len(endung)].strip()
            staemme.add(kurz)
            # Noch eine Silbe weiter: der Themenvokal davor. Die Liste
            # fuehrt kyrillische UND lateinische Vokale getrennt auf - sie
            # SEHEN gleich aus, sind aber verschiedene Zeichen. Beim ersten
            # Versuch fehlten die lateinischen, und polnisch "mieszkać" kam
            # nie bei "mieszkam" an.
            VOKALE = "аеиоуяыэюё" + "aeiouyąę"
            if len(kurz) > SLAWISCH_MINDESTSTAMM and kurz[-1] in VOKALE:
                staemme.add(kurz[:-1])
            break

    # -ovat'/-ować bilden das Praesens auf -uju/-uję. Ein eigener Stamm,
    # weil er sich nicht durch Abschneiden ergibt: kupować -> kupuj-.
    for schwanz, ersatz in (("овать", "у"), ("ować", "uj")):
        if lemma.endswith(schwanz) and len(lemma) > len(schwanz):
            staemme.add(lemma[: -len(schwanz)] + ersatz)

    for stamm in staemme:
        if len(stamm) < SLAWISCH_MINDESTSTAMM:
            continue
        formen.update(stamm + e for e in SLAWISCH_ENDUNGEN.get(sprache, []))
    return sorted(formen)
