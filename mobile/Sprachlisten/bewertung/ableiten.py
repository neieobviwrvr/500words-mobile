# -*- coding: utf-8 -*-
"""Familien aus den vorhandenen Daten ABLEITEN statt sie je Sprache zu schreiben.

WARUM
-----
Fuer Schwedisch, Englisch und Chinesisch stehen die Familien von Hand in
familien.py - rund 130 Eintraege je Sprache. Fuer die uebrigen sieben waeren
das noch einmal 900 Zeilen Wortlisten, in Sprachen, die niemand hier
gegenlesen kann.

Es geht auch anders, denn die Zuordnung steckt schon in der Datenbank:

  VERBEN         `spanisch_vocab.german` sagt "querer = wollen, moegen,
                 lieben". Die Familie `wollen` ist also querer - das muss
                 man nicht wissen, das kann man nachschlagen.

  EIGENSCHAFTEN  genauso ueber die deutsche Bedeutung.

  AUSDRUCK       die Floskeln stehen als SAETZE im Phrasebook, mitsamt ihren
                 `accepted_concepts`. Der spanische Satz zu "Danke!" traegt
                 dort die Synonyme, die als Dank gelten - fertige
                 Familienformen, von der Uebersetzungs-Pipeline geprueft.

Damit kostet eine weitere Sprache NULL Wortlisten. Was sie kostet, sind die
Wortformen (siehe formen.py) - und die haengen an der Grammatik, nicht an
der Bedeutung.

WAS DIESE DATEI NICHT KANN
--------------------------
Sie trifft keine Bedeutungsentscheidungen. Ob `leta` und `soeka` dieselbe
Familie sind, steht in familien.py und ist Handarbeit; hier wird nur
uebersetzt, was dort schon entschieden wurde. Eine automatisch abgeleitete
Familie ist deshalb nie besser als die deutsche Vorlage - aber sie ist da,
und das ist der Unterschied zu heute.
"""

# ---------------------------------------------------------------------------
# Familienname -> deutsche Woerter, unter denen die Vokabelliste sie fuehrt.
#
# Der Name selbst ist meist schon der Treffer ("kaufen"), nur mit echten
# Umlauten statt der ASCII-Schreibweise, die fuer Code gilt. Wo eine Sprache
# mehrere deutsche Woerter fuer dieselbe Sache kennt, stehen sie daneben -
# `wollen` findet so auch ein "moechten".
#
# Abgeglichen wird gegen die EINZELNEN Bedeutungen: "gehen, fahren" wird an
# den Kommas zerlegt, und Klammerzusaetze ("sein (Zustand, Ort)") fallen weg.
# Ohne das faende `sein` weder `ser` noch `estar`.
# ---------------------------------------------------------------------------

TRIGGER = {
    "sein": ["sein"],
    "haben": ["haben"],
    "werden": ["werden"],
    "koennen": ["können"],
    "muessen": ["müssen"],
    "duerfen": ["dürfen"],
    "machen": ["machen", "tun"],
    "wollen": ["wollen", "möchten"],
    "brauchen": ["brauchen", "benötigen"],
    "moegen": ["mögen", "gefallen", "gernhaben"],
    "hoffen": ["hoffen"],
    "sagen": ["sagen"],
    "sprechen": ["sprechen", "reden"],
    "verstehen": ["verstehen"],
    "fragen": ["fragen"],
    "antworten": ["antworten"],
    "erklaeren": ["erklären"],
    "heissen": ["heißen", "heissen"],
    "wiederholen": ["wiederholen"],
    "zeigen": ["zeigen"],
    "anrufen": ["anrufen", "telefonieren"],
    "schicken": ["schicken", "senden"],
    "bedeuten": ["bedeuten"],
    "gehen": ["gehen"],
    "kommen": ["kommen", "ankommen"],
    "fahren": ["fahren"],
    "reisen": ["reisen"],
    "fliegen": ["fliegen"],
    "laufen": ["laufen", "rennen"],
    "verlassen": ["verlassen"],
    "bleiben": ["bleiben"],
    "umziehen": ["umziehen"],
    "warten": ["warten"],
    "abholen": ["abholen"],
    "folgen": ["folgen"],
    "nehmen": ["nehmen"],
    "geben": ["geben"],
    "bekommen": ["bekommen", "erhalten"],
    "kaufen": ["kaufen"],
    "verkaufen": ["verkaufen"],
    "bezahlen": ["bezahlen", "zahlen"],
    "kosten": ["kosten"],
    "bestellen": ["bestellen"],
    "buchen": ["buchen", "reservieren"],
    "mieten": ["mieten"],
    "ausleihen": ["ausleihen", "leihen"],
    "benutzen": ["benutzen", "verwenden"],
    "wechseln": ["wechseln", "tauschen", "ändern"],
    "reparieren": ["reparieren"],
    "waehlen": ["wählen", "entscheiden"],
    "empfehlen": ["empfehlen"],
    "einladen": ["einladen"],
    "suchen": ["suchen"],
    "finden": ["finden"],
    "verlieren": ["verlieren"],
    "vergessen": ["vergessen"],
    "vermissen": ["vermissen"],
    "sehen": ["sehen", "schauen"],
    "hoeren": ["hören", "zuhören"],
    "wissen": ["wissen"],
    "kennen": ["kennen"],
    "glauben": ["glauben"],
    "denken": ["denken"],
    "lernen": ["lernen", "studieren"],
    "arbeiten": ["arbeiten"],
    "essen": ["essen"],
    "trinken": ["trinken"],
    "schlafen": ["schlafen"],
    "wohnen": ["wohnen", "leben"],
    "helfen": ["helfen"],
    "treffen": ["treffen"],
    "spielen": ["spielen"],
    "tanzen": ["tanzen"],
    "singen": ["singen"],
    "feiern": ["feiern"],
    "sich_fuehlen": ["fühlen", "sich fühlen"],
    "beginnen": ["beginnen", "anfangen"],
    "aufhoeren": ["aufhören"],
    "fortsetzen": ["fortsetzen"],
    "oeffnen": ["öffnen"],
    "schliessen": ["schließen", "schliessen"],
    "funktionieren": ["funktionieren"],
    "sitzen": ["sitzen"],
    "stehen": ["stehen"],
    "liegen": ["liegen"],
    "kuessen": ["küssen"],
    "lieben": ["lieben"],
    "lesen": ["lesen"],
    "schreiben": ["schreiben"],
    "unterrichten": ["unterrichten", "lehren"],
    "verdienen": ["verdienen"],
    "schmecken": ["schmecken"],
    "sterben": ["sterben"],
    "schwimmen": ["schwimmen"],
    "gewinnen": ["gewinnen"],
    "lachen": ["lachen"],
    "weinen": ["weinen"],
    "laecheln": ["lächeln"],
    "aufwachen": ["aufwachen"],
    "duschen": ["duschen"],
    "waschen": ["waschen"],
    "aufraeumen": ["aufräumen", "putzen"],
    "erschaffen": ["erschaffen", "bauen"],
    "wachsen": ["wachsen"],
    "veraendern": ["verändern"],
    "stellen": ["stellen", "setzen", "legen"],
    "tragen": ["tragen"],
    "kochen": ["kochen"],
    "heiraten": ["heiraten"],
    "erinnern": ["erinnern"],
    "besuchen": ["besuchen"],
    "unterschreiben": ["unterschreiben"],
}

# Eigenschaften - dieselbe Mechanik, nur Adjektive. Sie sind der Schluessel
# von Saetzen ohne Verb ("Deine Augen sind schoen"), siehe familien.py.
TRIGGER_EIGENSCHAFT = {
    "schoen": ["schön", "hübsch", "gutaussehend"],
    "gut": ["gut"],
    "schlecht": ["schlecht"],
    "lecker": ["lecker", "köstlich"],
    "teuer": ["teuer"],
    "billig": ["billig", "günstig"],
    "gross": ["groß", "gross"],
    "klein": ["klein"],
    "kalt": ["kalt"],
    "warm": ["warm", "heiß", "heiss"],
    "laut": ["laut"],
    "krank": ["krank"],
    "muede": ["müde"],
    "weit": ["weit", "fern"],
    "nah": ["nah", "nahe"],
}

# ---------------------------------------------------------------------------
# Ausdrucks-Familien: ueber die deutschen MASTER-SAETZE.
#
# Die Floskeln stehen als Saetze im Phrasebook. Ihre `accepted_concepts`
# tragen genau die Wendungen, die als diese Floskel gelten - in jeder Sprache
# schon uebersetzt und gegengelesen. Statt sie abzuschreiben, werden sie
# eingesammelt.
#
# Ein Satz darf in mehreren Gruppen stehen; "Danke, gleichfalls." gehoert zum
# Dank UND zur Erwiderung. Die Familien duerfen sich ueberschneiden (siehe
# "cheers" in familien.py).
# ---------------------------------------------------------------------------

AUSDRUCK_SAETZE = {
    "gruss": ["Hallo!", "Guten Morgen!", "Guten Tag!", "Guten Abend!"],
    "abschied": ["Auf Wiedersehen!", "Tschüss!", "Bis später!", "Bis morgen!",
                 "Gute Nacht!", "Bis bald!"],
    "dank": ["Danke!", "Vielen Dank!", "Danke schön!"],
    "entschuldigung": ["Entschuldigung!", "Es tut mir leid.", "Verzeihung!"],
    "bitte_hoeflich": ["Bitte.", "Gern geschehen.", "Bitte schön!"],
    "ja": ["Ja.", "Na klar!", "Gerne!"],
    "nein": ["Nein.", "Auf keinen Fall!"],
    "zustimmung": ["Stimmt.", "Korrekt.", "Genau!"],
    "kein_problem": ["Kein Problem.", "Macht nichts."],
    "freut_mich": ["Freut mich, dich kennenzulernen."],
    "wie_gehts": ["Wie geht es dir?", "Wie geht's?"],
    "mir_gut": ["Mir geht es gut, danke."],
    "prost": ["Prost!"],
    "hilfe": ["Hilfe!"],
}


def _bedeutungen(text, geordnet=False):
    """"sein (Zustand, Ort)" -> ["sein"];  "gehen, fahren" -> ["gehen","fahren"].

    Klammerzusaetze sind Erlaeuterungen, keine zweite Bedeutung - ohne das
    Wegschneiden faende `sein` weder `ser` noch `estar`, weil beide einen
    Zusatz tragen.

    `geordnet` behaelt die Reihenfolge, weil die ERSTE Bedeutung die
    Hauptbedeutung ist (siehe verben_aus_vokabeln).
    """
    ohneKlammer = []
    tiefe = 0
    for z in text:
        if z == "(":
            tiefe += 1
        elif z == ")":
            tiefe = max(0, tiefe - 1)
        elif tiefe == 0:
            ohneKlammer.append(z)
    roh = "".join(ohneKlammer)
    for trenner in [";", "/"]:
        roh = roh.replace(trenner, ",")
    teile, gesehen = [], set()
    for t in roh.split(","):
        t = t.strip().lower()
        if t and t not in gesehen:
            gesehen.add(t)
            teile.append(t)
    return teile if geordnet else set(teile)


def verben_aus_vokabeln(zeilen, wortspalte, wortart="Verb", trigger=None):
    """{Familienname: [Zielwoerter]} - aus der deutschen Bedeutungsspalte.

    **Die ERSTE Bedeutung entscheidet.** Spanisch `querer` steht als "wollen,
    moegen, lieben" - alle drei stimmen, aber das Wort ist zuallererst
    "wollen". Ohne diese Rangfolge landete es gleichberechtigt in drei
    Familien, und `lieben` (ein starkes Inhaltsverb) schlug bei der Zuordnung
    das schwache `wollen`: 25 spanische Saetze galten als Liebeserklaerung,
    darunter "Ich haette gern einen Kaffee".

    **Nur** die erste. Ein erster Versuch liess die weiteren Bedeutungen noch
    Familien fuellen, die sonst leer blieben - und richtete genau den Schaden
    an, den die Rangfolge verhindern sollte: Spanisch hat kein eigenes Wort
    fuer "lieben", also holte sich `es_lieben` das `querer`, und als starkes
    Inhaltsverb schlug es bei der Zuordnung weiterhin das schwache `wollen`.

    Hat eine Sprache fuer eine Familie kein eigenes Wort, bleibt die Familie
    jetzt LEER. Der Satz verliert dadurch nichts - er bekommt die Familie
    seiner Hauptbedeutung, und die ist die richtige.
    """
    trigger = trigger or TRIGGER
    klein = {name: {w.lower() for w in woerter} for name, woerter in trigger.items()}

    haupt = {}
    for zeile in zeilen:
        if zeile.get("category") != wortart:
            continue
        wort = (zeile.get(wortspalte) or "").strip()
        if not wort:
            continue
        bedeutungen = _bedeutungen(zeile.get("german") or "", geordnet=True)
        if not bedeutungen:
            continue
        erste = bedeutungen[0]
        for name, woerter in klein.items():
            if erste not in woerter:
                continue
            haupt.setdefault(name, [])
            if wort not in haupt[name]:
                haupt[name].append(wort)
    return haupt


def ausdruecke_aus_saetzen(saetze):
    """{Familienname: [Wendungen]} - aus den accepted_concepts der Floskeln.

    `saetze` sind Zeilen der Ziel-Phrasebook-Tabelle mit `german`,
    `target_text` und `accepted_concepts`.
    """
    nachGloss = {}
    for z in saetze:
        nachGloss.setdefault((z.get("german") or "").strip(), []).append(z)

    familien = {}
    for name, glosse in AUSDRUCK_SAETZE.items():
        formen, ganzeSaetze = [], set()
        for gloss in glosse:
            for z in nachGloss.get(gloss, []):
                for gruppe in (z.get("accepted_concepts") or {}).get("required", []):
                    for s in _ohne_teilstuecke(gruppe.get("synonyms", [])):
                        if s not in formen:
                            formen.append(s)
                # Der Satz selbst zaehlt auch - ohne Satzzeichen, damit
                # "¡Hola!" als "hola" trifft. Franzoesisch setzt vor "!" ein
                # Leerzeichen, deshalb danach noch einmal strippen - sonst
                # stuenden "merci" und "merci " beide in der Familie.
                text = (z.get("target_text") or "").strip().strip("!?.¡¿。！？").strip().lower()
                if text:
                    ganzeSaetze.add(text)
                    if text not in formen:
                        formen.append(text)
        if formen:
            familien[name] = _ohne_reste(formen, ganzeSaetze)
    return familien


def _ohne_reste(formen, ganzeSaetze):
    """Abgeschnittene Reste aus der ganzen Familie werfen.

    `_ohne_teilstuecke` raeumt innerhalb EINES Satzes auf. Ueber die Familie
    hinweg bleiben trotzdem Bruchstuecke stehen, weil sie aus verschiedenen
    Saetzen stammen: spanisch `hasta` (aus "Hasta luego") und `mañana` (aus
    "Hasta mañana") landeten so in der Abschieds-Familie - und haetten jeden
    Satz mit "morgen" oder "bis" zur Verabschiedung erklaert.

    Die Regel kann nicht einfach "kuerzer faellt weg" heissen: `gracias`
    steckt in `muchas gracias`, ist aber selbst der Dank schlechthin. Der
    Unterschied ist, dass "¡Gracias!" ein eigener SATZ ist und "hasta" nicht.
    Also: ein Teilstueck faellt nur weg, wenn es nirgends allein als Satz
    dasteht.
    """
    return [f for f in formen
            if f in ganzeSaetze
            or not any(f != anderer and f in anderer for anderer in formen)]


def _ohne_teilstuecke(synonyme):
    """Teilstuecke laengerer Synonyme DESSELBEN Satzes weglassen.

    Die Uebersetzungs-Pipeline listet neben der ganzen Wendung oft noch ihr
    Ende als Rueckfall: ["ni hablar", "hablar"], ["pas question", "question"],
    ["bien sûr", "sûr"]. Als Satz-Synonym ist das sinnvoll - als
    FAMILIENFORM ist es gefaehrlich: das nackte "hablar" (sprechen) stuende
    dann in der Nein-Familie und zoege jeden Satz an sich, in dem jemand
    spricht.

    Nur innerhalb EINES Satzes verglichen. "gracias" und "muchas gracias"
    kommen aus verschiedenen Saetzen ("Danke!" und "Vielen Dank!") und
    bleiben deshalb beide erhalten - dort ist das kein Rueckfall, sondern
    zwei eigene Wendungen.
    """
    sauber = [s.strip().lower() for s in synonyme if s and s.strip()]
    return [s for s in sauber
            if not any(s != anderer and s in anderer for anderer in sauber)]
