# -*- coding: utf-8 -*-
"""Wortarten-Tags automatisch aus den VOKABELTABELLEN ableiten.

Ergaenzt `wortarten_werkzeug.py` (Handarbeit, satzweise) - loest es aber
NICHT ab: was von Hand getaggt ist, bleibt stehen, siehe Vorrangregel
unten.

**Warum ueberhaupt automatisch.** Stand 2026-09-03 war ausser Deutsch
nirgends mehr als der Grundwortschatz getaggt: 67 von 550 Saetzen bei
Schwedisch, Spanisch, Franzoesisch und Chinesisch, 0 von 580 bei
Italienisch, Norwegisch und Russisch. Von Hand waeren das rund 3.700
Saetze und ueber 25.000 Einzelwoerter. Die Wortart steht aber fuer je 500
Woerter je Sprache schon in der Vokabeltabelle - der Abgleich ist
Fleissarbeit fuer eine Maschine, nicht fuer einen Menschen.

**Personalpronomen sind der ausdrueckliche Anlass** (Simons Vorgabe
2026-09-03: "Personalwoerter wie Wo oder Jag ueberall einfaerben, in
lila"). Sie waren selbst im deutschen Master nur sporadisch getaggt -
"Ich" stand in den meisten Saetzen auf `None`, in 13 anderen auf `p`.
Deshalb sind sie die EINZIGE Gruppe, die eine bestehende Angabe
ueberschreibt: sie sind ein geschlossener, eindeutiger Satz von Woertern,
da gibt es nichts zu verwechseln.

**Vorrang, von oben nach unten:**
  1. Personalpronomen (PERSONAL unten)            -> 'p', immer
  2. Vorhandenes Hand-Tag                         -> bleibt unveraendert
  3. Eindeutiger Treffer in der Vokabeltabelle    -> v/n/a/k/p
  4. sonst                                        -> None (ungefaerbt)

**Mehrdeutige Formen bleiben absichtlich ungefaerbt.** Steht ein Wort in
der Vokabeltabelle unter zwei Wortarten (italienisch `la` als Artikel und
als Pronomen), faerbt dieses Werkzeug es NICHT ein. Eine falsche Farbe ist
schlechter als keine - genau die Linie, die `wortarten_werkzeug.py` schon
mit "der Rest bleibt absichtlich neutral statt falsch-praezise zugeordnet"
zieht.

**Gebeugte Formen treffen seit 2026-09-13 auch** (Fehlerbericht Simon:
norwegisch "Når har du tid?" - `har` ungefaerbt, weil in der Liste nur `ha`
steht). Bis dahin traf NUR die Grundform: der Lauf vom 2026-09-03 lag vor
den `forms`-Spalten (Norwegisch 2026-09-04, die uebrigen 2026-09-08/09) und
hat sie nie gesehen. Nachgemessen blieben dadurch rund 2.700 Woerter in
acht Sprachen ungefaerbt, fast alles Verben - dazu schwedische Nomen und
Adjektive, weil `schwedisch_vocab.forms` auch deren Formen fuehrt.
Uebernommen werden nur die Formschluessel, die zur Wortart der Zeile
passen (`FORM_SCHLUESSEL`): `franz_vocab` fuehrt `pouvoir` als Verb UND als
Nomen ("Macht"), und die Nomen-Zeile hat faelschlich Verbformen bekommen.
Russisch taggt die Lautschrift, die Formen sind aber kyrillisch - dort wird
ueber `target_text` nachgeschlagen, Position fuer Position (siehe tagge).
Chinesisch und Vietnamesisch beugen nicht und haben keine `forms`.

**Mehrdeutig heisst: in IRGENDEINER Wortart, auch einer ungefaerbten.**
Bis 2026-09-13 zaehlten nur die fuenf gefaerbten - schwedisch `var` (war)
gilt dann als eindeutiges Verb, obwohl es als Fragewort "wo" in der Liste
steht. "Var ligger stationen?" waere als Verb eingefaerbt worden (34
Stellen), ebenso italienisch `sei` (bist / sechs) und polnisch `może`
(kann / vielleicht). Vorhandene Tags bleiben davon unberuehrt (Regel 2) -
schwedisch `när` steht deshalb weiterhin 13x als Konjunktion, auch in
Fragen.

**Der Zusammenfuege-Test aus wortarten_werkzeug.py gilt weiter:**
`" ".join(t["w"])` muss exakt der Textspalte entsprechen. Hier ist er
durch die Bauart erfuellt - die Token entstehen durch Aufteilen genau
dieser Spalte und werden nie veraendert, nur ihr `c` wird gesetzt.

Nutzung:
  python wortarten_auto.py pruefe    it
  python wortarten_auto.py spiel_ein it          (Probelauf)
  python wortarten_auto.py spiel_ein it --echt
  python wortarten_auto.py spiel_ein alle --echt
"""
import json
import os
import sys
import time
import unicodedata
import urllib.request
from collections import Counter

HIER = os.path.dirname(os.path.abspath(__file__))
SPRACHLISTEN = os.path.dirname(HIER)

if hasattr(sys.stdout, "reconfigure"):
    sys.stdout.reconfigure(encoding="utf-8", errors="replace")
    sys.stderr.reconfigure(encoding="utf-8", errors="replace")

# Sprache -> (Satztabelle, Textspalte, Vokabeltabelle, Wortspalte, Wortartspalte)
#
# ACHTUNG bei der Wortartspalte: sie heisst fast ueberall `category`, bei
# `chinesisch_vocab` aber `wortart` - dort meint `category` seit 2026-08-21
# die LERNKATEGORIE (club_nightlife). Wer sie verwechselt, taggt jedes
# chinesische Wort mit einem Kategorienamen.
# Die Textspalte ist der LERNTEXT: bei Sprachen mit eigener Schrift die
# Lautschrift, nicht die Schrift selbst - die Tags decken das ab, was der
# Nutzer liest.
SPRACHEN = {
    "de": ("phrasebook_master",      "german",      None,                None,          None),
    "sv": ("schwedisch_phrasebook",  "target_text", "schwedisch_vocab",  "swedish",     "category"),
    "es": ("spanisch_phrasebook",    "target_text", "spanisch_vocab",    "spanish",     "category"),
    "fr": ("franz_phrasebook",       "target_text", "franz_vocab",       "french",      "category"),
    "zh": ("chinesisch_phrasebook",  "pinyin",      "chinesisch_vocab",  "pinyin",      "wortart"),
    "it": ("italienisch_phrasebook", "target_text", "italienisch_vocab", "italian",     "category"),
    "no": ("norwegisch_phrasebook",  "target_text", "norwegisch_vocab",  "norwegian",   "category"),
    "ru": ("russisch_phrasebook",    "lautschrift", "russisch_vocab",    "lautschrift", "category"),
    "vi": ("vietnamesisch_phrasebook", "target_text", "vietnamesisch_vocab", "vietnamese", "category"),
    "pl": ("polnisch_phrasebook",      "target_text", "polnisch_vocab",      "polish",     "category"),
    "en": ("englisch_phrasebook",      "target_text", "englisch_vocab",      "english",    "category"),
}

# Wortart aus der Vokabeltabelle -> Tag-Buchstabe. Die App faerbt nur diese
# fuenf; Adverb, Praeposition, Artikel, Zahlwort und Fragewort bleiben
# bewusst ohne Farbe (siehe WORD_COLORS in tokens.ts).
NACH_TAG = {
    "Nomen": "n",
    "Verb": "v",
    "Adjektiv": "a",
    "Pronomen": "p",
    "Konjunktion": "k",
}

# Personalpronomen inklusive Possessiv- und Reflexivformen. Geschlossener
# Satz je Sprache, klein genug zum Aufzaehlen und eindeutig genug, um ein
# bestehendes Tag zu ueberschreiben.
#
# Deutsch steht hier als EINZIGE Sprache vollstaendig von Hand - es hat
# keine Vokabeltabelle (nur Saetze), also gibt es nichts abzuleiten.
#
# Chinesisch steht in Pinyin MIT Tonzeichen, wird beim Abgleich aber
# tonlos verglichen (siehe normalisiere) - im Satz steht mal "wǒ", mal
# "wo".
PERSONAL = {
    "de": """ich du er sie es wir ihr mich dich ihn uns euch sich mir dir ihm
             ihnen mein meine meinen meinem meiner meines dein deine deinen
             deinem deiner sein seine seinen seinem ihre ihren ihrem unser
             unsere unseren euer eure euren""".split(),
    "sv": """jag du han hon den det vi ni de mig dig honom henne oss er dem sig
             min mitt mina din ditt dina hans hennes vår vårt våra ert era
             deras""".split(),
    "es": """yo tú él ella usted nosotros nosotras vosotros vosotras ellos ellas
             ustedes me te se nos os mí ti conmigo contigo mi tu su mis tus sus
             nuestro nuestra vuestro vuestra mío tuyo suyo""".split(),
    "fr": """je tu il elle on nous vous ils elles me te se moi toi lui leur mon
             ma mes ton ta tes son sa ses notre nos votre vos leurs
             m' t' s' j'""".split(),
    "zh": """wǒ nǐ tā wǒmen nǐmen tāmen zìjǐ nín""".split(),
    "it": """io tu lui lei noi voi loro mi ti ci vi si me te mio mia miei mie
             tuo tua tuoi tue suo sua suoi sue nostro nostra vostro vostra""".split(),
    "no": """jeg du han hun vi dere de meg deg ham henne oss seg min mitt mine
             din ditt dine hans hennes vår vårt våre deres""".split(),
    "ru": """ja ty on aná anó my wy aní menjá mnje tjebjá tjebjé jewó jejó nas
             was im sebjá moj majá majó twoj twajá nasch nascha wasch swoj
             ka mnje""".split(),
    # Vietnamesisch hat KEINE neutralen Personalpronomen im europaeischen
    # Sinn: man redet sich mit Verwandtschaftswoertern an, gestaffelt nach
    # Alter und Geschlecht (toi = ich neutral, anh = du zu einem aelteren
    # Mann, em = du zu einer juengeren Person). Alle gehoeren hierher, weil
    # sie im Satz die Rolle des Pronomens spielen.
    "vi": """tôi mình tớ ta chúng tôi chúng ta bạn anh chị em ông bà cháu
             con nó họ mày tao""".split(),
    "pl": """ja ty on ona ono my wy oni one mnie mi cię ci go jej nas wam ich
             się siebie mój moja moje twój twoja twoje nasz nasza wasz""".split(),
    "en": """i you he she it we they me him her us them myself yourself himself
             herself itself ourselves themselves my your his its our their
             mine yours hers ours theirs""".split(),
}


def lies_env(name):
    for zeile in open(os.path.join(SPRACHLISTEN, ".env"), encoding="utf-8"):
        if zeile.startswith(name + "="):
            return zeile.split("=", 1)[1].strip().strip('"')
    raise SystemExit(name + " nicht gefunden")


def rest(url, key, pfad, methode="GET", koerper=None, versuche=5):
    """Eine REST-Anfrage, mit Wiederholung bei Verbindungsabbruch.

    Ein voller Tagging-Lauf schickt EINE PATCH-Anfrage je Satz - bei elf
    Sprachen sind das ueber 4.500 kurz hintereinander. Supabase kappt die
    Verbindung dann irgendwann ("WinError 10054, Verbindung vom Remotehost
    geschlossen"), und ohne Wiederholung bricht der ganze Lauf mitten drin
    ab: am 2026-09-03 real passiert, Polnisch stand danach bei 508 von 581
    Saetzen und Vietnamesisch bei null.

    Weil das Schreiben je Satz unabhaengig und wiederholbar ist (dieselbe
    Eingabe erzeugt dieselben Tags), ist ein erneuter Versuch hier
    gefahrlos - es gibt nichts doppelt zu zaehlen.
    """
    kopf = {"apikey": key, "Authorization": "Bearer " + key,
            "Content-Type": "application/json", "Prefer": "return=representation"}
    d = json.dumps(koerper, ensure_ascii=False).encode("utf-8") if koerper is not None else None
    for versuch in range(versuche):
        try:
            r = urllib.request.Request(url + "/rest/v1/" + pfad, data=d,
                                       headers=kopf, method=methode)
            with urllib.request.urlopen(r, timeout=60) as a:
                t = a.read().decode("utf-8")
                return json.loads(t) if t.strip() else []
        except (urllib.error.URLError, TimeoutError, ConnectionError) as e:
            if versuch == versuche - 1:
                raise
            # Wachsende Pause: 1, 2, 4, 8 Sekunden. Gibt der Gegenseite Zeit,
            # sich zu fangen, statt sofort nachzusetzen.
            time.sleep(2 ** versuch)


# Satzzeichen, die an einem Token kleben duerfen, ohne dass es ein anderes
# Wort waere. Der Token selbst bleibt unangetastet - normalisiert wird nur
# fuer den NACHSCHLAG.
RAND = " \t.,!?;:…\"'„“”«»()[]—-¿¡"


# Sprachen, in denen Akzente NUR Betonung bzw. Ton anzeigen und deshalb
# beim Abgleich wegfallen duerfen: die russische Lautschrift setzt das
# Betonungszeichen je nach Form auf eine andere Silbe (menjá / menja), und
# Pinyin steht mal mit, mal ohne Tonzeichen.
#
# UEBERALL SONST BLEIBEN AKZENTE STEHEN, und das ist kein Detail: im
# Italienischen unterscheidet genau der Akzent `è` (ist) von `e` (und).
# Der erste Durchgang am 2026-09-03 hat ohne diese Trennung Verben als
# Konjunktion eingefaerbt - eine falsche Farbe ist schlechter als keine.
# Spanisch (él/el, tú/tu, mí/mi) und Franzoesisch (à/a, où/ou) haben
# dieselbe Falle.
AKZENTE_EGAL = {"ru", "zh"}


def normalisiere(wort, akzente_egal=False):
    """Vergleichsform: ohne Randzeichen, klein - Akzente nur wo erlaubt."""
    w = wort.strip(RAND).lower()
    if not akzente_egal:
        return w
    zerlegt = unicodedata.normalize("NFD", w)
    return "".join(c for c in zerlegt if unicodedata.category(c) != "Mn")


# Funktionswoerter, die in derselben Sprache ECHT zwei Rollen haben und
# deshalb nie automatisch eingefaerbt werden - auch dann nicht, wenn die
# Vokabeltabelle nur eine davon kennt. Italienisch `che` ist Relativpronomen
# UND Fragewort, `si` Reflexivpronomen UND "ja".
NICHT_TAGGEN = {
    "it": {"che", "si", "la", "lo", "le", "ne", "e"},
    "es": {"que", "la", "lo", "le", "se", "como"},
    "fr": {"que", "le", "la", "les", "en", "y", "des"},
    "no": {"de", "det", "den", "som", "for", "da"},
    "sv": {"det", "den", "de", "som", "for", "att"},
    "de": {"sie", "der", "die", "das", "dem", "den"},
    # Vietnamesisch: die Personenwoerter sind zugleich Verwandtschafts-
    # NOMEN (anh = aelterer Bruder UND du zu einem jungen Mann). Sie stehen
    # deshalb nur in PERSONAL, nicht als Nomen im Lexikon.
    "vi": {"co", "cô", "chi", "chị", "ba", "bà", "the", "thế"},
    "pl": {"to", "co", "za", "no", "a", "i"},
    # Chinesisch (2026-09-13, Simons Entscheidung): Frage- und Hinweiswoerter
    # bleiben ungefaerbt wie in allen anderen Sprachen ("vad", "this"), obwohl
    # `chinesisch_vocab.wortart` sie seit 2026-09-07 als Pronomen fuehrt:
    # 什么 shenme, 谁 shei, 哪/那 na, 这 zhe, 这些 zhexie. Tonlos notiert,
    # weil der Abgleich tonlos ist. Personalpronomen stehen in PERSONAL.
    "zh": {"shenme", "shei", "na", "zhe", "zhexie"},
    "en": {"that", "this", "will", "can", "like", "one", "s", "as", "so", "back", "well", "there"},
}


# Welche `forms`-Schluessel zu welcher Wortart gehoeren. Andere Schluessel
# einer Zeile werden ignoriert - siehe `pouvoir` im Modulkopf.
FORM_SCHLUESSEL = {
    "Verb": {"present", "present_1", "present_3", "present_pl", "verlaufsform",
             "praesens_1", "praesens_2", "praesens_3", "praesens_4", "praesens_5",
             "praesens_6", "preteritum", "preteritum_f", "preteritum_pl", "supinum"},
    "Nomen": {"indef_sg", "indef_pl", "def_sg", "def_pl"},
    "Adjektiv": {"en_form", "ett_form", "plural_bestimmt"},
}

# Sprachen, deren Formen in einer ANDEREN Schrift stehen als der getaggte
# Lerntext -> Spalte mit der Grundform in dieser Schrift, und die Satzspalte,
# ueber die nachgeschlagen wird.
FREMDSCHRIFT = {"ru": ("russian", "target_text")}

# Vokabeltabellen OHNE `forms`-Spalte - die Sprachen beugen nicht. Ein
# Select auf die Spalte scheitert dort.
OHNE_FORMEN = {"zh", "vi"}

# Platzhalter fuer Wortarten, die die App NICHT faerbt (Adverb, Fragewort,
# Praeposition ...). Sie zaehlen fuer die Mehrdeutigkeit, ergeben aber nie
# ein Tag.
UNGEFAERBT = "x"


def baue_lexikon(url, key, sprache):
    """surface -> Tag, aus Grundformen UND gebeugten Formen der
    Vokabeltabelle. Mehrdeutiges faellt raus - auch gegen ungefaerbte
    Wortarten."""
    tabelle, textspalte, vokab, wortspalte, katspalte = SPRACHEN[sprache]
    egal = sprache in AKZENTE_EGAL
    if not vokab:
        return {}
    fremd = FREMDSCHRIFT.get(sprache)
    spalten = ([wortspalte, katspalte] + ([] if sprache in OHNE_FORMEN else ["forms"])
               + ([fremd[0]] if fremd else []))
    zeilen = rest(url, key, vokab + "?select=" + ",".join(spalten))
    kandidaten = {}

    def merke(text, tag, akzente_egal):
        # "otro / otra" und aehnliche Doppelformen aufteilen - beide Formen
        # kommen im Satz vor, der Schraegstrich nie.
        for teil in str(text).split("/"):
            schluessel = normalisiere(teil, akzente_egal)
            if schluessel:
                kandidaten.setdefault(schluessel, set()).add(tag)

    for z in zeilen:
        wort, kat = z.get(wortspalte), z.get(katspalte)
        if not wort:
            continue
        tag = NACH_TAG.get(kat, UNGEFAERBT)
        merke(wort, tag, egal)
        # Formen in der Fremdschrift werden nie akzentbereinigt - die
        # AKZENTE_EGAL-Regel gilt fuer die Lautschrift, nicht fuers Kyrillische.
        if fremd and z.get(fremd[0]):
            merke(z[fremd[0]], tag, False)
        erlaubt = FORM_SCHLUESSEL.get(kat, set())
        for schluessel, form in (z.get("forms") or {}).items():
            if schluessel in erlaubt and form:
                merke(form, tag, egal and not fremd)
    # Nur Eindeutiges uebernehmen, nichts Ungefaerbtes, nichts aus der Sperrliste.
    gesperrt = NICHT_TAGGEN.get(sprache, set())
    return {k: next(iter(v)) for k, v in kandidaten.items()
            if len(v) == 1 and UNGEFAERBT not in v and k not in gesperrt}


def tagge(text, alte_tags, lexikon, personal, egal, gesperrt, parallel=None):
    """Token-Liste fuer EINEN Satz. Die Token stammen aus `text` selbst.

    `parallel`: derselbe Satz in der Schrift der Formen (Russisch:
    kyrillisch). Nur wenn er gleich viele Woerter hat, dient er als zweiter
    Nachschlag fuer ein sonst ungefaerbtes Wort an derselben Position - bei
    abweichender Zerlegung waere die Zuordnung geraten.
    """
    woerter = text.split(" ")
    zweit = parallel.split(" ") if parallel else []
    if len(zweit) != len(woerter):
        zweit = []
    alt = {}
    if alte_tags:
        # Nach Position zuordnen, aber nur wenn die Zerlegung passt - sonst
        # waere ein spaeter bearbeiteter Satz falsch beschriftet.
        if len(alte_tags) == len(woerter) and all(
            a.get("w") == w for a, w in zip(alte_tags, woerter)
        ):
            alt = {i: a.get("c") for i, a in enumerate(alte_tags)}

    neu = []
    for i, w in enumerate(woerter):
        s = normalisiere(w, egal)
        if s in gesperrt:
            c = alt.get(i)           # 0. Doppelrolle - nie automatisch faerben
        elif s in personal:
            c = "p"                      # 1. Personalpronomen, immer
        elif i in alt and alt[i]:
            c = alt[i]                   # 2. Handarbeit bleibt
        else:
            c = lexikon.get(s)           # 3. Vokabeltabelle, sonst None
            if c is None and zweit:
                s2 = normalisiere(zweit[i])
                if s2 not in gesperrt and s2 not in personal:
                    c = lexikon.get(s2)
        neu.append({"w": w, "c": c})
    return neu


def verarbeite(sprache, echt):
    url, key = lies_env("SUPABASE_URL"), lies_env("SUPABASE_SERVICE_ROLE_KEY")
    tabelle, textspalte, vokab, wortspalte, _kat = SPRACHEN[sprache]
    lexikon = baue_lexikon(url, key, sprache)
    egal = sprache in AKZENTE_EGAL
    gesperrt = NICHT_TAGGEN.get(sprache, set())
    personal = {normalisiere(p, egal) for p in PERSONAL.get(sprache, [])} - gesperrt

    fremd = FREMDSCHRIFT.get(sprache)
    satzspalten = "id," + textspalte + ",word_tags" + ("," + fremd[1] if fremd else "")
    zeilen = rest(url, key, tabelle + "?select=" + satzspalten)
    aenderungen, zaehler, gesamt_woerter, gefaerbt = [], Counter(), 0, 0
    for z in zeilen:
        text = z.get(textspalte)
        if not text:
            continue
        tags = tagge(text, z.get("word_tags"), lexikon, personal, egal, gesperrt,
                     z.get(fremd[1]) if fremd else None)
        gesamt_woerter += len(tags)
        gefaerbt += sum(1 for t in tags if t["c"])
        for t in tags:
            zaehler[t["c"]] += 1
        if tags != (z.get("word_tags") or None):
            aenderungen.append({"id": z["id"], "word_tags": tags})

    quote = (100.0 * gefaerbt / gesamt_woerter) if gesamt_woerter else 0
    print(sprache + ": " + str(len(zeilen)) + " Saetze, " + str(len(lexikon))
          + " Woerter im Lexikon, " + str(len(personal)) + " Personalpronomen")
    print("  eingefaerbt: " + str(gefaerbt) + " von " + str(gesamt_woerter)
          + " Woertern (" + ("%.0f" % quote) + "%)")
    print("  " + ", ".join(str(k) + " " + str(v) for k, v in zaehler.most_common()))
    print("  zu schreiben: " + str(len(aenderungen)) + " Saetze")

    if not echt or not aenderungen:
        if not echt:
            print("  PROBELAUF - nichts geschrieben.")
        return

    for i in range(0, len(aenderungen), 50):
        for a in aenderungen[i:i + 50]:
            rest(url, key, tabelle + "?id=eq." + str(a["id"]), "PATCH",
                 {"word_tags": a["word_tags"]})
        print("  " + str(min(i + 50, len(aenderungen))) + "/" + str(len(aenderungen)))
        # Verschnaufpause nach jedem Block - billiger als ein Abbruch bei 90%.
        time.sleep(1)
    print("  fertig.")


def main():
    if len(sys.argv) < 3:
        raise SystemExit(__doc__)
    befehl, sprache = sys.argv[1], sys.argv[2]
    echt = befehl == "spiel_ein" and "--echt" in sys.argv
    if befehl not in ("pruefe", "spiel_ein"):
        raise SystemExit("Unbekannter Befehl " + repr(befehl))
    ziele = list(SPRACHEN) if sprache == "alle" else [sprache]
    for s in ziele:
        if s not in SPRACHEN:
            raise SystemExit("Unbekannte Sprache " + repr(s))
        verarbeite(s, echt)
        print()


if __name__ == "__main__":
    main()
