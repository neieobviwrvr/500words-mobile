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
VERDOPPELN = {"stop", "plan", "shop", "chat", "travel", "prefer"}


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
