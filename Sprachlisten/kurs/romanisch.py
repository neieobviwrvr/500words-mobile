# -*- coding: utf-8 -*-
"""Benannte Praesensformen und Partizipien fuer Spanisch, Franzoesisch,
Italienisch.

**Warum nicht einfach abtippen.** Es sind rund 100 Verben je Sprache, und
etwa die Haelfte weicht von der Grundregel ab. Alle sechs Personen plus
Partizip von Hand einzutragen waeren ueber 2.000 Formen in drei Sprachen,
die hier niemand gegenlesen kann - und ein Tippfehler saehe genauso aus wie
eine richtige Form.

**Deshalb: Muster als Regel, Liste nur fuer das Unvorhersehbare.** Die
romanische Unregelmaessigkeit ist naemlich zum groessten Teil regelmaessig,
sie ist nur LEXIKALISCH ausgeloest - man muss wissen, DASS `pensar` den
Stamm wechselt, aber nicht, WIE: es ist immer e->ie, und immer in genau den
Personen 1, 2, 3 und 6 (dort liegt die Betonung auf dem Stamm). Damit
schrumpft der Eintrag von sieben Formen auf einen Listenplatz.

Vier Ebenen, von allgemein nach speziell - die spaetere gewinnt:

    1. Endungsregel        hablar -> hablo, hablas, ...      (ROMANISCH)
    2. Orthografie         buscar -> busco (nicht buscar+o)
    3. Stammwechsel        pensar -> pienso                  (lexikalisch)
    4. Ganz unregelmaessig ser -> soy, eres, es, ...         (ausgeschrieben)

Dazu Partizipien, die nicht der Regel folgen (abierto, escrito, hecho) -
die sind reine Liste, da hilft kein Muster.

**Was hier NICHT steht und bewusst fehlt:** Praeteritum und Imperfekt. Fuer
A2 traegt das PERFEKT ("he comido", "j'ai mangé", "ho mangiato"), und das
baut sich aus Hilfsverb plus Partizip - beides ist da. Die einfache
Vergangenheit kommt, wenn ein Modul sie braucht, nicht auf Vorrat.
"""

# ---------------------------------------------------------------------------
# 1. Endungen - dieselbe Tabelle wie in bewertung/formen.py, hier aber
#    benannt statt als Menge. Reihenfolge: ich, du, er, wir, ihr, sie.
# ---------------------------------------------------------------------------
ENDUNGEN = {
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

# ---------------------------------------------------------------------------
# 2. Orthografie - keine Ausnahme, sondern dieselbe Aussprache anders
#    geschrieben. Spanisch `buscar` klaenge als "busco" richtig, aber
#    "busqué" braucht das qu; italienisch `giocare` braucht das h, damit das
#    c hart bleibt (gioco, giochi); `mangiare` verliert das i vor i
#    (mangi, nicht mangii).
# ---------------------------------------------------------------------------
def _orthografie(code, lemma, stamm, endung):
    if code == "it":
        # -care/-gare: h einschieben, wo eine helle Endung folgt.
        if lemma.endswith(("care", "gare")) and endung.startswith(("i", "e")):
            return stamm + "h" + endung
        # Kein doppeltes i: endet der Stamm auf i und die Endung faengt mit
        # i an, faellt das Stamm-i weg - mangiare -> mangi, ringraziare ->
        # ringrazi, cominciare -> cominci. Erst nur fuer -ciare/-giare/
        # -sciare geschrieben, dabei fiel `ringraziare` durch (2026-09-08).
        if stamm.endswith("i") and endung.startswith("i"):
            return stamm[:-1] + endung
    if code == "es":
        # -guir verliert das stumme u vor o/a: sigo, nicht siguo.
        if stamm.endswith("gu") and endung.startswith(("o", "a")):
            return stamm[:-1] + endung
        if lemma.endswith("car") and endung.startswith("e"):
            return stamm[:-1] + "qu" + endung
        if lemma.endswith("gar") and endung.startswith("e"):
            return stamm + "u" + endung
        if lemma.endswith("zar") and endung.startswith("e"):
            return stamm[:-1] + "c" + endung
    if code == "fr":
        # -ger/-cer: weiches g/c vor a/o halten (nous mangeons, commençons).
        if lemma.endswith("ger") and endung.startswith("o"):
            return stamm + "e" + endung
        if lemma.endswith("cer") and endung.startswith("o"):
            return stamm[:-1] + "ç" + endung
        # -yer: y wird zu i, ausser vor stummer Endung.
        if lemma.endswith(("ayer", "oyer", "uyer")) and endung in ("e", "es", "ent"):
            return stamm[:-1] + "i" + endung
    return stamm + endung


# ---------------------------------------------------------------------------
# 3. Stammwechsel - lexikalisch ausgeloest, in der Form aber voraussagbar.
#    Er trifft die Personen 1, 2, 3 und 6, weil dort die Betonung auf dem
#    Stamm liegt; 4 und 5 (wir/ihr) bleiben unberuehrt. Genau das macht ihn
#    zur Regel statt zur Ausnahme.
# ---------------------------------------------------------------------------
STAMMWECHSEL = {
    "es": [
        ("e", "ie", ["cerrar", "comenzar", "empezar", "entender", "pensar",
                     "perder", "querer", "sentir", "preferir"]),
        ("o", "ue", ["contar", "encontrar", "dormir", "morir", "poder",
                     "recordar", "volver", "acostarse", "costar"]),
        ("u", "ue", ["jugar"]),
        ("e", "i", ["pedir", "seguir", "conseguir", "servir", "vestirse",
                    "repetir"]),
    ],
    "fr": [
        # e -> è vor stummer Endung: acheter -> j'achète, lever -> je lève.
        ("e", "è", ["acheter", "lever", "amener", "emmener", "peser"]),
    ],
    "it": [],
}

# Franzoesisch verdoppelt statt zu akzentuieren: appeler -> j'appelle.
FR_VERDOPPELN = ["appeler", "jeter", "rappeler"]

# Italienisch: die -isc-Verben. Kein Stammwechsel, sondern ein Einschub
# zwischen Stamm und Endung - dieselben vier Personen wie oben.
IT_ISC = ["capire", "finire", "preferire", "pulire", "spedire",
          "costruire", "unire", "sostituire", "guarire", "chiarire"]

# ---------------------------------------------------------------------------
# 4. Ganz unregelmaessig - hier hilft kein Muster, also ausgeschrieben.
#    Reihenfolge immer: ich, du, er, wir, ihr, sie.
# ---------------------------------------------------------------------------
UNREGELMAESSIG = {
    "es": {
        "ser":    ["soy", "eres", "es", "somos", "sois", "son"],
        "estar":  ["estoy", "estás", "está", "estamos", "estáis", "están"],
        "ir":     ["voy", "vas", "va", "vamos", "vais", "van"],
        "haber":  ["he", "has", "ha", "hemos", "habéis", "han"],
        "tener":  ["tengo", "tienes", "tiene", "tenemos", "tenéis", "tienen"],
        "venir":  ["vengo", "vienes", "viene", "venimos", "venís", "vienen"],
        "decir":  ["digo", "dices", "dice", "decimos", "decís", "dicen"],
        "hacer":  ["hago", "haces", "hace", "hacemos", "hacéis", "hacen"],
        "poner":  ["pongo", "pones", "pone", "ponemos", "ponéis", "ponen"],
        "salir":  ["salgo", "sales", "sale", "salimos", "salís", "salen"],
        "traer":  ["traigo", "traes", "trae", "traemos", "traéis", "traen"],
        "caer":   ["caigo", "caes", "cae", "caemos", "caéis", "caen"],
        "oír":    ["oigo", "oyes", "oye", "oímos", "oís", "oyen"],
        "reír":   ["río", "ríes", "ríe", "reímos", "reís", "ríen"],
        "ver":    ["veo", "ves", "ve", "vemos", "veis", "ven"],
        "dar":    ["doy", "das", "da", "damos", "dais", "dan"],
        "saber":  ["sé", "sabes", "sabe", "sabemos", "sabéis", "saben"],
        # -iar mit BETONTEM i. Ob ein -iar-Verb das tut, ist lexikalisch:
        # enviar -> envío, aber estudiar -> estudio. Nicht ableitbar, also
        # ausgeschrieben (2026-09-08).
        "enviar": ["envío", "envías", "envía", "enviamos", "enviáis", "envían"],
        # -zco in der 1. Person, sonst regelmaessig.
        "conocer":  ["conozco", "conoces", "conoce", "conocemos", "conocéis", "conocen"],
        "nacer":    ["nazco", "naces", "nace", "nacemos", "nacéis", "nacen"],
        "parecer":  ["parezco", "pareces", "parece", "parecemos", "parecéis", "parecen"],
        "conducir": ["conduzco", "conduces", "conduce", "conducimos", "conducís", "conducen"],
    },
    "fr": {
        "être":    ["suis", "es", "est", "sommes", "êtes", "sont"],
        "avoir":   ["ai", "as", "a", "avons", "avez", "ont"],
        "aller":   ["vais", "vas", "va", "allons", "allez", "vont"],
        "faire":   ["fais", "fais", "fait", "faisons", "faites", "font"],
        "pouvoir": ["peux", "peux", "peut", "pouvons", "pouvez", "peuvent"],
        "vouloir": ["veux", "veux", "veut", "voulons", "voulez", "veulent"],
        "devoir":  ["dois", "dois", "doit", "devons", "devez", "doivent"],
        "savoir":  ["sais", "sais", "sait", "savons", "savez", "savent"],
        "voir":    ["vois", "vois", "voit", "voyons", "voyez", "voient"],
        "croire":  ["crois", "crois", "croit", "croyons", "croyez", "croient"],
        "boire":   ["bois", "bois", "boit", "buvons", "buvez", "boivent"],
        "dire":    ["dis", "dis", "dit", "disons", "dites", "disent"],
        "écrire":  ["écris", "écris", "écrit", "écrivons", "écrivez", "écrivent"],
        "lire":    ["lis", "lis", "lit", "lisons", "lisez", "lisent"],
        "rire":    ["ris", "ris", "rit", "rions", "riez", "rient"],
        "mettre":  ["mets", "mets", "met", "mettons", "mettez", "mettent"],
        "permettre": ["permets", "permets", "permet", "permettons", "permettez", "permettent"],
        "prendre": ["prends", "prends", "prend", "prenons", "prenez", "prennent"],
        "apprendre": ["apprends", "apprends", "apprend", "apprenons", "apprenez", "apprennent"],
        "comprendre": ["comprends", "comprends", "comprend", "comprenons", "comprenez", "comprennent"],
        "reprendre": ["reprends", "reprends", "reprend", "reprenons", "reprenez", "reprennent"],
        "venir":   ["viens", "viens", "vient", "venons", "venez", "viennent"],
        "devenir": ["deviens", "deviens", "devient", "devenons", "devenez", "deviennent"],
        "revenir": ["reviens", "reviens", "revient", "revenons", "revenez", "reviennent"],
        "tenir":   ["tiens", "tiens", "tient", "tenons", "tenez", "tiennent"],
        "recevoir": ["reçois", "reçois", "reçoit", "recevons", "recevez", "reçoivent"],
        "apercevoir": ["aperçois", "aperçois", "aperçoit", "apercevons", "apercevez", "aperçoivent"],
        "connaître": ["connais", "connais", "connaît", "connaissons", "connaissez", "connaissent"],
        "paraître": ["parais", "parais", "paraît", "paraissons", "paraissez", "paraissent"],
        "ouvrir":  ["ouvre", "ouvres", "ouvre", "ouvrons", "ouvrez", "ouvrent"],
        "offrir":  ["offre", "offres", "offre", "offrons", "offrez", "offrent"],
        "souffrir": ["souffre", "souffres", "souffre", "souffrons", "souffrez", "souffrent"],
        # -ir OHNE -iss-: partir, sortir, dormir, sentir, servir, mentir.
        "partir":  ["pars", "pars", "part", "partons", "partez", "partent"],
        "sortir":  ["sors", "sors", "sort", "sortons", "sortez", "sortent"],
        "dormir":  ["dors", "dors", "dort", "dormons", "dormez", "dorment"],
        "sentir":  ["sens", "sens", "sent", "sentons", "sentez", "sentent"],
        "servir":  ["sers", "sers", "sert", "servons", "servez", "servent"],
        "mourir":  ["meurs", "meurs", "meurt", "mourons", "mourez", "meurent"],
        "suivre":  ["suis", "suis", "suit", "suivons", "suivez", "suivent"],
        "vivre":   ["vis", "vis", "vit", "vivons", "vivez", "vivent"],
        "asseoir": ["assieds", "assieds", "assied", "asseyons", "asseyez", "asseyent"],
        # Unpersoenlich - nur die 3. Person existiert.
        "falloir": [None, None, "faut", None, None, None],
    },
    "it": {
        "essere":  ["sono", "sei", "è", "siamo", "siete", "sono"],
        "avere":   ["ho", "hai", "ha", "abbiamo", "avete", "hanno"],
        "andare":  ["vado", "vai", "va", "andiamo", "andate", "vanno"],
        "fare":    ["faccio", "fai", "fa", "facciamo", "fate", "fanno"],
        "dare":    ["do", "dai", "dà", "diamo", "date", "danno"],
        "stare":   ["sto", "stai", "sta", "stiamo", "state", "stanno"],
        "dire":    ["dico", "dici", "dice", "diciamo", "dite", "dicono"],
        "potere":  ["posso", "puoi", "può", "possiamo", "potete", "possono"],
        "volere":  ["voglio", "vuoi", "vuole", "vogliamo", "volete", "vogliono"],
        "dovere":  ["devo", "devi", "deve", "dobbiamo", "dovete", "devono"],
        "sapere":  ["so", "sai", "sa", "sappiamo", "sapete", "sanno"],
        "venire":  ["vengo", "vieni", "viene", "veniamo", "venite", "vengono"],
        "uscire":  ["esco", "esci", "esce", "usciamo", "uscite", "escono"],
        # Geht wie uscire, NICHT wie capire - stand faelschlich in IT_ISC
        # und wurde zu "riuscisco" (2026-09-08).
        "riuscire": ["riesco", "riesci", "riesce", "riusciamo", "riuscite", "riescono"],
        "bere":    ["bevo", "bevi", "beve", "beviamo", "bevete", "bevono"],
        "morire":  ["muoio", "muori", "muore", "moriamo", "morite", "muoiono"],
        "rimanere": ["rimango", "rimani", "rimane", "rimaniamo", "rimanete", "rimangono"],
        "scegliere": ["scelgo", "scegli", "sceglie", "scegliamo", "scegliete", "scelgono"],
        # Nur 3. Person gebraeuchlich.
        "piacere":  [None, None, "piace", None, None, "piacciono"],
        "dispiacere": [None, None, "dispiace", None, None, "dispiacciono"],
        "bisognare": [None, None, "bisogna", None, None, None],
        "succedere": [None, None, "succede", None, None, "succedono"],
        "costare":  [None, None, "costa", None, None, "costano"],
    },
}

# ---------------------------------------------------------------------------
# Partizipien, die nicht der Endungsregel folgen. Reine Liste - hier gibt es
# kein Muster, das traegt.
# ---------------------------------------------------------------------------
PARTIZIP = {
    "es": {
        "abrir": "abierto", "escribir": "escrito", "hacer": "hecho",
        "decir": "dicho", "poner": "puesto", "ver": "visto",
        "volver": "vuelto", "morir": "muerto", "romper": "roto",
        "cubrir": "cubierto", "leer": "leído", "creer": "creído",
        "caer": "caído", "traer": "traído", "oír": "oído", "reír": "reído",
        "ir": "ido", "ser": "sido",
    },
    "fr": {
        "être": "été", "avoir": "eu", "faire": "fait", "dire": "dit",
        "écrire": "écrit", "lire": "lu", "boire": "bu", "voir": "vu",
        "savoir": "su", "pouvoir": "pu", "vouloir": "voulu", "devoir": "dû",
        "prendre": "pris", "apprendre": "appris", "comprendre": "compris",
        "reprendre": "repris", "mettre": "mis", "permettre": "permis",
        "venir": "venu", "devenir": "devenu", "revenir": "revenu",
        "tenir": "tenu", "recevoir": "reçu", "apercevoir": "aperçu",
        "connaître": "connu", "paraître": "paru", "ouvrir": "ouvert",
        "offrir": "offert", "souffrir": "souffert", "mourir": "mort",
        "suivre": "suivi", "vivre": "vécu", "rire": "ri", "croire": "cru",
        "falloir": "fallu", "asseoir": "assis", "partir": "parti",
        "sortir": "sorti", "dormir": "dormi", "sentir": "senti",
        "servir": "servi", "aller": "allé",
    },
    "it": {
        "essere": "stato", "avere": "avuto", "fare": "fatto", "dire": "detto",
        "bere": "bevuto", "vedere": "visto", "venire": "venuto",
        "prendere": "preso", "mettere": "messo", "scrivere": "scritto",
        "leggere": "letto", "chiedere": "chiesto", "chiudere": "chiuso",
        "aprire": "aperto", "rispondere": "risposto", "vincere": "vinto",
        "perdere": "perso", "correre": "corso", "nascere": "nato",
        "morire": "morto", "vivere": "vissuto", "piangere": "pianto",
        "ridere": "riso", "succedere": "successo", "conoscere": "conosciuto",
        "rimanere": "rimasto", "scegliere": "scelto", "offrire": "offerto",
        "spegnere": "spento", "rompere": "rotto", "stare": "stato",
        "piacere": "piaciuto", "dispiacere": "dispiaciuto",
    },
}

# Reflexivpronomen - `ducharse` heisst "me ducho", nicht "duchome".
REFLEXIV = {
    "es": (["me", "te", "se", "nos", "os", "se"], ("se",)),
    "it": (["mi", "ti", "si", "ci", "vi", "si"], ("si",)),
    "fr": (["me", "te", "se", "nous", "vous", "se"], ()),
}


def _stamm_mit_wechsel(code, lemma, stamm, person):
    """Wendet den Stammwechsel an - nur in den Personen 1, 2, 3 und 6."""
    if person in (3, 4):                      # wir / ihr bleiben unberuehrt
        return stamm
    for von, nach, verben in STAMMWECHSEL.get(code, []):
        # Auch die reflexive Schreibweise treffen: die Liste fuehrt
        # `vestirse`, hier kommt aber schon der abgetrennte Kern `vestir` an
        # (2026-09-08 - sonst hiess es "me vesto" statt "me visto").
        if not any(lemma == v or v.rstrip("se") == lemma or v == lemma + "se"
                   for v in verben):
            continue
        # Der LETZTE passende Vokal im Stamm wechselt - "encontrar" wird zu
        # "encuentr", nicht zu "encuentr" mit dem ersten o.
        stelle = stamm.rfind(von)
        if stelle >= 0:
            return stamm[:stelle] + nach + stamm[stelle + len(von):]
    if code == "fr" and lemma in FR_VERDOPPELN and person in (0, 1, 2, 5):
        return stamm + stamm[-1]
    return stamm


def formen(lemma, code):
    """Benannte Formen zu einem romanischen Verb, oder None.

    Rueckgabe: {"present": ..., "praesens_1".."praesens_6", "supinum", "quelle"}
    `present` ist die 1. Person Singular - das ist die Form, die der Kurs in
    seinen Rahmen benutzt (PERSONENKONJUGATION laesst nur das erste Pronomen
    stehen, und das ist "yo" / "je" / "io").
    """
    pron, reflexiv_endungen = REFLEXIV.get(code, ([], ()))
    reflexiv = bool(reflexiv_endungen) and lemma.endswith(reflexiv_endungen)
    kern = lemma[:-len(reflexiv_endungen[0])] if reflexiv else lemma
    # Italienisch haengt das Pronomen an den VERKUERZTEN Infinitiv:
    # conoscere -> conoscersi, lavarsi. Nach dem Abtrennen von "si" bleibt
    # "conoscer" stehen, was auf keine Endung passt - das r gehoert zum
    # weggefallenen "-re" (2026-09-08, `conoscersi` fiel sonst ganz aus).
    if code == "it" and reflexiv and kern.endswith("r"):
        kern = kern + "e"
    if code == "fr" and lemma.startswith("se "):
        reflexiv, kern = True, lemma[3:]

    unregelmaessig = UNREGELMAESSIG.get(code, {}).get(kern)
    quelle = "liste" if unregelmaessig else "regel"

    if unregelmaessig:
        praesens = list(unregelmaessig)
    else:
        treffer = None
        for endung, (endungen, _p) in ENDUNGEN.get(code, {}).items():
            if kern.endswith(endung) and len(kern) > len(endung):
                treffer = (endung, endungen)
                break
        if not treffer:
            return None
        endung, endungen = treffer
        stamm = kern[: -len(endung)]
        praesens = []
        for i, e in enumerate(endungen):
            s = _stamm_mit_wechsel(code, kern, stamm, i)
            if code == "it" and kern in IT_ISC and i not in (3, 4):
                s = s + "isc"
            praesens.append(_orthografie(code, kern, s, e))
            if code == "it" and kern in IT_ISC:
                quelle = "regel-isc"

    partizip = PARTIZIP.get(code, {}).get(kern)
    if not partizip:
        for endung, (_e, p) in ENDUNGEN.get(code, {}).items():
            if kern.endswith(endung) and len(kern) > len(endung):
                partizip = kern[: -len(endung)] + p
                break
    if reflexiv and pron:
        praesens = [f"{pron[i]} {f}" if f else None
                    for i, f in enumerate(praesens)]

    aus = {"present": praesens[0], "supinum": partizip, "quelle": quelle}
    for i, f in enumerate(praesens, 1):
        if f:
            aus[f"praesens_{i}"] = f
    if aus["present"] is None:
        # Unpersoenliche Verben (falloir, piacere) haben keine 1. Person.
        # `present` traegt dann die 3., damit der Kurs ueberhaupt etwas
        # anzeigen kann - "es gefaellt" ist die Form, die man lernt.
        aus["present"] = praesens[2] or lemma
    return aus
