# -*- coding: utf-8 -*-
"""Baut den gefuehrten Kurs aus einer Lehrplan-Datei und der Vokabeltabelle.

Eine Lehrplan-Datei (`kurs_sv.py`, `kurs_en.py`, `kurs_zh.py`) beschreibt nur
das, was ein Mensch entscheiden muss: welche Module es gibt, welche
Satzrahmen darin vorkommen und welche Woerter in die Slots sollen. Alles
Uebrige - Aufteilen in Lektionen, Wiederverwendung alter Woerter, Pruefen,
Nummerieren, TypeScript schreiben - macht dieses Skript.

Die Begruendung fuer jede Regel steht in ENTWURF.md daneben. Kurz:

  R2  hoechstens 5 neue Woerter je Lektion (Cognitive Load)
  R3  ab Modul 2 mindestens 2 WIEDERVERWENDETE Woerter je Lektion, damit
      jedes Wort auf die ~18 Begegnungen kommt, die produktives Koennen
      braucht - drei reichen nachweislich nicht
  R5  kein unbekanntes Wort an fester Rahmenstelle
  R7  jedes Modul endet mit einer freien Aufgabe ohne neue Vokabeln

Aufruf:
    python bauplan.py sv          # pruefen, nichts schreiben
    python bauplan.py sv --schreib
    python bauplan.py alle --schreib
"""
import importlib.util
from collections import Counter
from deutsch_genus import GENUS, ARTIKEL, SORTE, AKKUSATIV_ZEICHEN
import json
import os
import re
import sys
import unicodedata
import urllib.request

if hasattr(sys.stdout, "reconfigure"):
    sys.stdout.reconfigure(encoding="utf-8", errors="replace")
    sys.stderr.reconfigure(encoding="utf-8", errors="replace")

HIER = os.path.dirname(os.path.abspath(__file__))
SPRACHLISTEN = os.path.dirname(HIER)
ZIEL = os.path.join(os.path.dirname(SPRACHLISTEN), "src", "data", "courses")

MAX_NEU = 5          # R2
MIN_RECYCLING = 10   # R3, ab Modul 2 - siehe pruefe() fuer die Begruendung
# Wie oft ein Wort im KURS vorkommen soll, bevor FSRS uebernimmt.
# Einfuehrung bringt 4 (Teaser, Nachsprechen, Abrufen, Satz), jede
# Wiederholung 1 - also zwei Wiederholungslektionen. Siehe pruefe().
MIN_BEGEGNUNGEN = 6
# Ab welchem Anteil eine Wortart als "gehoert in diesen Rahmen" gilt.
# 25% laesst echte Mischrahmen wie "ich moechte [Slot]" (Nomen UND Verben)
# unangetastet und wirft nur einzelne Ausreisser heraus.
ANTEIL_RAHMENART = 0.25
ZIEL_BEGEGNUNGEN = 18  # R3, Laufer & Rozovski-Roitblat 2015
# Wie in audit.py: darueber wird die Modul-Pille im Pfad unbrauchbar. Die
# Wiederholungs-Lektionen richten sich danach - lieber ein Wort weniger
# nachgeuebt als ein Modul, durch das niemand scrollt.
MAX_LEKTIONEN_JE_MODUL = 20


# ---------------------------------------------------------------------------
def lies_env(name):
    for zeile in open(os.path.join(SPRACHLISTEN, ".env"), encoding="utf-8"):
        if zeile.startswith(name + "="):
            return zeile.split("=", 1)[1].strip().strip('"')
    raise SystemExit(name + " nicht gefunden")


def hole(tabelle):
    url, key = lies_env("SUPABASE_URL"), lies_env("SUPABASE_SERVICE_ROLE_KEY")
    out, off = [], 0
    while True:
        r = urllib.request.Request(
            f"{url}/rest/v1/{tabelle}?select=*&limit=1000&offset={off}",
            headers={"apikey": key, "Authorization": "Bearer " + key})
        with urllib.request.urlopen(r, timeout=60) as a:
            teil = json.load(a)
        out += teil
        if len(teil) < 1000:
            return out
        off += 1000


def lade_lehrplan(sprache):
    pfad = os.path.join(HIER, f"kurs_{sprache}.py")
    if not os.path.exists(pfad):
        raise SystemExit(f"Kein Lehrplan: {pfad}")
    spec = importlib.util.spec_from_file_location(f"kurs_{sprache}", pfad)
    modul = importlib.util.module_from_spec(spec)
    spec.loader.exec_module(modul)
    return modul


ARTIKEL_VOR_SLOT = re.compile(
    r"\b(der|die|das|den|dem|ein|eine|einen|einem|einer)(\s+\[Slot\])")


def artikel_im_deutschen(musterDe):
    """Steht im deutschen Rahmen ein Artikel vor [Slot]? -> (Sorte, Fall).

    `None`, wenn keiner dasteht - dann ist nichts zu tun.

    Der Fall ergibt sich meist aus dem Artikel selbst (`einen` ist Akkusativ,
    `einem` Dativ). Nur `ein`/`eine` sagen ihn nicht: im Deutschen sind
    Nominativ und Akkusativ dort ausschliesslich beim Maskulinum verschieden
    (ein/einen). Fuer diese Faelle entscheidet das Verb im Satz - die Liste
    dazu steht in deutsch_genus.py und ist ueber die 28 vorhandenen Rahmen
    einzeln nachgeprueft.
    """
    if not musterDe:
        return None
    treffer = ARTIKEL_VOR_SLOT.search(musterDe)
    if not treffer:
        return None
    # Gehoert der Artikel ueberhaupt zum Slot?
    #
    # In "Das ist das [Slot] Mal." gehoert er zu "Mal", und der Slot ist ein
    # Adjektiv dazwischen. Wuerde man ihn nach dem Slot-Wort biegen, kaeme
    # "Das ist die erste Mal" heraus - schlechter als vorher.
    #
    # Erkennbar daran, dass hinter dem Slot noch ein grossgeschriebenes Wort
    # steht: im Deutschen ist das ein Nomen, und der Artikel gehoert ihm.
    dahinter = musterDe[treffer.end():].lstrip()
    if dahinter[:1].isupper():
        return None
    sorte, kasus = SORTE[treffer.group(1)]
    if kasus is None:
        klein = musterDe.lower()
        kasus = "akk" if any(z in klein for z in AKKUSATIV_ZEICHEN) else "nom"
    return (sorte, kasus)


def setze_artikel(musterDe, genus):
    """Den Artikel im deutschen Rahmen durch den passenden ersetzen.

    Ohne bekanntes Genus bleibt der Rahmen, wie er ist - lieber der alte
    Artikel als ein geratener. `pruefe()` meldet solche Woerter, damit die
    Liste vervollstaendigt werden kann.
    """
    art = artikel_im_deutschen(musterDe)
    if not art or not genus:
        return musterDe
    sorte, kasus = art
    neu = ARTIKEL[sorte][kasus][genus]
    # Mehrzahl ohne unbestimmten Artikel: "Hier sind Leute", nicht
    # "Hier sind  Leute" - das Leerzeichen muss mit weg.
    return ARTIKEL_VOR_SLOT.sub(lambda t: (neu + t.group(2)) if neu
                                else t.group(2).lstrip(), musterDe, count=1)


def kurzbedeutung(text):
    """Nur die ERSTE deutsche Bedeutung - der Rest gehoert nicht in einen Satz.

    Die Vokabelspalte fuehrt oft mehrere Uebersetzungen: "Weg / Straße",
    "Papier, Rolle", "ihm/ihr, ihnen (indirektes Objekt)". Fuer ein
    Woerterbuch ist das richtig, fuer die AUFGABENSTELLUNG nicht - der
    Generator setzt die Bedeutung in einen deutschen Satz ein, und dann stand
    dort "Das ist Weg / Straße Buch." oder "ich habe einen Papier, Rolle."

    Klammerzusaetze bleiben stehen. Sie sind keine zweite Bedeutung, sondern
    die Unterscheidung zur ersten - ohne sie waeren "Bank (Institut)" und
    "Bank (Sitzbank)" in der Aufgabe nicht mehr auseinanderzuhalten.

    Getrennt wird nur AUSSERHALB der Klammern, sonst zerschnitte
    "ihm/ihr, ihnen (indirektes Objekt)" an seinem eigenen Zusatz.
    """
    roh = (text or "").strip()
    if not roh:
        return ""
    tiefe, erste = 0, []
    for zeichen in roh:
        if zeichen == "(":
            tiefe += 1
        elif zeichen == ")":
            tiefe = max(0, tiefe - 1)
        elif tiefe == 0 and zeichen in ",;/":
            break
        erste.append(zeichen)
    return "".join(erste).strip() or roh


# ---------------------------------------------------------------------------
class Wortschatz:
    """Nachschlagewerk ueber die Vokabeltabelle einer Sprache.

    Kapselt die drei Unterschiede zwischen den Sprachen, damit der Generator
    selbst sprachneutral bleibt:
      - wie die Wortspalte heisst (`swedish` / `english` / `hanzi`)
      - ob es eine getrennte Lautschrift gibt (Chinesisch: `pinyin`)
      - welche OBERFLAECHENFORM in einen Satz gehoert (Schwedisch: Praesens
        statt Infinitiv - `vara` heisst im Satz `är`)
    """

    def __init__(self, lehrplan):
        self.sprache = lehrplan.SPRACHE
        self.spalte = lehrplan.WORTSPALTE
        self.lautschrift = getattr(lehrplan, "LAUTSCHRIFT_SPALTE", None)
        self.zeilen = hole(lehrplan.TABELLE)
        self.fehlend = set()
        # Zwei Toepfe, weil zwei verschiedene Schweregrade: fehlt die Form
        # im SATZ, steht dort etwas Falsches ("I have finish it") - Fehler.
        # Fehlt sie auf der VOKABELKARTE, steht dort die Woerterbuchform,
        # und das ist vertretbar - Hinweis.
        self.fehlende_formen = set()
        self.fehlende_formen_karte = set()
        # Beugt die Sprache ueberhaupt? Chinesisch und Vietnamesisch tun es
        # nicht - dort ist eine Formanforderung nicht unerfuellt, sondern
        # GEGENSTANDSLOS. Ohne diese Unterscheidung meldete der Generator
        # fuer Vietnamesisch zwoelf fehlende Praesensformen, die es in der
        # Sprache gar nicht gibt (2026-09-09).
        self.beugt = any(z.get("forms") for z in self.zeilen)
        self.unbekannte_begriffe = set()
        self.nach_wort = {}
        for z in self.zeilen:
            w = (z.get(self.spalte) or "").strip()
            if w and w not in self.nach_wort:
                self.nach_wort[w] = z
        self.deutsch_index = self._baue_deutsch_index()

    def _baue_deutsch_index(self):
        """Deutsche Bedeutung -> Eintrag.

        Die Bruecke zwischen elf unabhaengig zusammengestellten Wortlisten.
        Ohne sie muesste jeder Lehrplan die Zielwoerter einzeln nennen -
        siebenmal dieselbe Arbeit, siebenmal dieselben Tippfehler.

        Die Tabellen schreiben dasselbe Konzept unterschiedlich ("sie (Sg.)",
        "mögen / wollen", "Essen (allgemein)"), deshalb wird ueber
        kleingeschriebene Einzelteile ohne Klammerzusatz verglichen. Der
        ERSTE Treffer gewinnt: die Listen sind grob nach Wichtigkeit
        sortiert, das haeufigere Wort steht vorn.

        Gespeichert werden aber ALLE Treffer, nicht nur der erste
        (2026-09-08). Deutsch ist an entscheidender Stelle mehrdeutig:
        "sein" ist das Verb UND das Possessivpronomen, und `norwegisch_vocab`
        fuehrt beide mit demselben german-Wert. Der erste Treffer war `hans`,
        also lehrte Modul 1 - das allererste - das falsche Wort. Wer eine
        Verbform verlangt, bekommt jetzt ein Verb.
        """
        import re as _re
        idx = {}
        for z in self.zeilen:
            roh = (z.get("german") or "").lower().strip()
            roh = _re.sub(r"\([^)]*\)", " ", roh)
            for teil in _re.split(r"[/,;]| oder ", roh):
                teil = teil.strip().strip(".")
                if teil:
                    idx.setdefault(teil, []).append(z)
        return idx

    def nach_deutsch(self, begriff, bevorzugt=None):
        """Findet das Zielwort zu einer deutschen Bedeutung, oder None.

        `bevorzugt` nennt eine Wortart, die bei Mehrdeutigkeit gewinnt.
        Ohne sie bleibt es beim ersten Treffer wie bisher.
        """
        import re as _re
        roh = begriff.lower().strip()
        roh = _re.sub(r"\([^)]*\)", " ", roh)
        for teil in _re.split(r"[/,;]| oder ", roh):
            teil = teil.strip().strip(".")
            treffer = self.deutsch_index.get(teil)
            if not treffer:
                continue
            z = treffer[0]
            if bevorzugt:
                passend = [x for x in treffer
                           if (x.get("category") or "").strip().lower()
                           .startswith(bevorzugt.lower())]
                if passend:
                    z = passend[0]
            return (z.get(self.spalte) or "").strip()
        return None

    def eintrag(self, schluessel):
        z = self.nach_wort.get(schluessel)
        if z is None:
            # NICHT abbrechen, sondern sammeln: beim Schreiben eines
            # Lehrplans sind Tippfehler und erfundene Woerter der haeufigste
            # Fehler, und man will sie ALLE auf einmal sehen statt einen pro
            # Lauf. Der Lauf endet trotzdem mit Fehler, siehe pruefe().
            self.fehlend.add(schluessel)
            return {"german": f"?? {schluessel}", "forms": None}
        return z

    # Welchen Schluessel der forms-Spalte ein `slotform` meint.
    #
    # Die Namen links sind die des Lehrplans (deutsch, weil dort Deutsch
    # gesprochen wird), die rechts die der Datenbank. `partizip` heisst
    # dort `supinum`, weil schwedisch_vocab es so nennt und ein
    # gemeinsamer Name dem Generator einen Sonderfall je Sprache spart -
    # dieselbe Abwaegung steht in der norwegischen Migration.
    FORM_SPALTE = {
        "praesens": "present",
        # Die sechs Personen einzeln - romanisch und slawisch fuehren sie
        # als praesens_1..6, Englisch nur present_3 und present_pl. Wer eine
        # Form verlangt, die eine Sprache nicht hat, bekommt einen Fehler
        # statt der stillen Grundform; ein A2-Rahmen kann sie deshalb je
        # Sprache ueberspringen (Muster `None`).
        "praesens_1": "praesens_1", "praesens_2": "praesens_2",
        "praesens_3": "praesens_3", "praesens_4": "praesens_4",
        "praesens_5": "praesens_5", "praesens_6": "praesens_6",
        "dritte": "present_3",
        "plural": "present_pl",
        "praeteritum": "preteritum",
        "partizip": "supinum",
        "verlaufsform": "verlaufsform",
    }

    def wort(self, schluessel, form="grund", streng=True):
        """Liefert (schrift, lerntext, deutsch) - genau das, was eine
        CourseWord braucht."""
        z = self.eintrag(schluessel)
        schrift = schluessel
        # Sprachen mit eigener Schrift bekommen KEINE gebeugte Form
        # (2026-09-09). Die Lautschrift-Spalte traegt die Umschrift der
        # GRUNDFORM; setzte man die gebeugte Schrift ein, stuende auf dem
        # Schirm "byt", vorgelesen wuerde aber "буду". Schrift und Lerntext
        # duerfen nie auseinanderlaufen - lieber die Grundform auf beiden
        # Seiten. Betrifft heute genau ein russisches Wort; ein A2-Rahmen
        # mit Vergangenheit traefe sonst jedes.
        if form != "grund" and self.lautschrift:
            self.fehlende_formen_karte.add((schluessel, form))
        elif form != "grund" and self.beugt:
            spalte = self.FORM_SPALTE.get(form)
            formen = z.get("forms") or {}
            if spalte and isinstance(formen, dict) and formen.get(spalte):
                schrift = formen[spalte]
            elif spalte:
                # Fehlt die Form, stuende die GRUNDFORM im Satz - und genau
                # so entstand "I have finish it". Lieber melden als still
                # das Falsche lehren.
                topf = (self.fehlende_formen if streng
                        else self.fehlende_formen_karte)
                topf.add((schluessel, form))
        lern = schrift
        if self.lautschrift:
            lern = (z.get(self.lautschrift) or schrift).strip()
        return {"schrift": schrift, "lerntext": lern, "de": kurzbedeutung(z.get("german"))}

    def wortart(self, schluessel):
        """Wortart eines Slot-Worts - fuer die Wiederverwendung (R3).

        Ein Rahmen passt nur zu EINER Wortart: "Es ist [Slot], aber es geht"
        vertraegt Adjektive, keine Verben. Ohne diese Auskunft mischt die
        Wiederverwendung, was gerade am wenigsten geuebt wurde, und es
        entsteht "Es ist schauen, aber es geht."

        Chinesisch ist der Sonderfall: dort meint die `category`-Spalte seit
        2026-08-21 die LERNKATEGORIE (club_nightlife, ...), nicht die
        Wortart. Die wird deshalb aus der deutschen Bedeutung abgeleitet -
        dieselbe Heuristik wie `wortartAusDeutsch()` in vocabContent.ts:
        Grossschreibung ist im Deutschen ein verlaessliches Nomen-Zeichen,
        eine Endung auf -en/-n ein Infinitiv-Verdacht. Adjektive und
        Pronomen lassen sich so NICHT trennen und fallen gemeinsam in
        "Sonstiges" - fuer die Frage "passt das in denselben Rahmen?" reicht
        das, denn es trennt die drei Gruppen, die sich wirklich beissen.
        """
        z = self.eintrag(schluessel)
        if self.sprache != "zh":
            return (z.get("category") or "").strip() or "?"
        art = (z.get("wortart") or "").strip()
        if art:
            return art
        de = (z.get("german") or "").strip()
        if not de:
            return "?"
        if de[:1].isupper():
            return "Nomen"
        return "Verb" if de.endswith(("en", "n")) else "Sonstiges"

    def alle_schluessel(self):
        return list(self.nach_wort.keys())


# ---------------------------------------------------------------------------
def rahmenwoerter(muster):
    """Die festen Woerter eines Rahmens - alles ausser den Platzhaltern.

    Braucht R5: jedes davon muss vorher gelehrt worden sein, sonst steht in
    der Lektion ein Wort, das der Nutzer nie gesehen hat, ausgerechnet an
    der Stelle, die ihm Halt geben soll."""
    ohne = re.sub(r"\[[^\]]+\]", " ", muster)
    roh = re.split(r"[\s,.!?;:，。！？、]+", ohne)
    return [w for w in roh if w.strip()]


def zerlege_cjk(text, bekannt):
    """Laengster-Treffer-Zerlegung fuer Sprachen ohne Leerzeichen."""
    i, out = 0, []
    while i < len(text):
        for laenge in range(min(4, len(text) - i), 0, -1):
            stueck = text[i:i + laenge]
            if stueck in bekannt:
                out.append(stueck)
                i += laenge
                break
        else:
            out.append(text[i])
            i += 1
    return out


# ---------------------------------------------------------------------------
def uebersetze_lehrplan(lehrplan, wortschatz):
    """Deutsche Slot-Begriffe in Zielwoerter aufloesen.

    Nur fuer Lehrplaene mit `SLOTS_DEUTSCH = True`. Der gemeinsame Lehrplan
    nennt Slots und Pronomen auf DEUTSCH ("müde", "ich"), damit dieselbe
    Gliederung fuer alle Sprachen gilt; hier werden daraus die tatsaechlichen
    Woerter der Zielsprache.

    Was die Sprache nicht hat, faellt heraus und wird gemeldet - besser eine
    Lektion mit vier statt fuenf Slots als eine mit einem erfundenen Wort.
    """
    # Das Flag gilt seit dem 2026-09-09 auch JE RAHMEN. Die
    # handgeschriebenen Lehrplaene (sv/en/zh) nennen ihre A1-Slots
    # zielsprachlich, ihre A2-Module kommen aber aus der gemeinsamen
    # Gliederung und nennen sie deutsch - beides in einer Datei.
    datei_flag = getattr(lehrplan, "SLOTS_DEUTSCH", False)
    if not datei_flag and not any(r.get("slots_deutsch")
                                  for m in lehrplan.MODULE for r in m["rahmen"]):
        return lehrplan.MODULE

    module = []
    for m in lehrplan.MODULE:
        rahmen_neu = []
        for r in m["rahmen"]:
            r2 = dict(r)
            if not r.get("slots_deutsch", datei_flag):
                rahmen_neu.append(r2)
                continue
            for feld in ("slots", "pronomen"):
                raus = []
                for begriff in r.get(feld, []):
                    ziel = wortschatz.nach_deutsch(begriff)
                    if ziel is None:
                        wortschatz.unbekannte_begriffe.add(begriff)
                    elif ziel not in raus:
                        raus.append(ziel)
                r2[feld] = raus
            neu_r = []
            for eintrag in r.get("neu_im_rahmen", []):
                # Ein fuehrendes "=" heisst: das steht schon in der
                # ZIELSPRACHE, nicht uebersetzen. Gebraucht fuer die
                # Funktionswoerter der Satzmuster (spanisch `esto`, `aquí`) -
                # die haben kein deutsches Gegenstueck im gemeinsamen
                # Aufbau, muessen aber gelehrt werden, weil sie fest im
                # Rahmen stehen (R5).
                if eintrag.startswith("="):
                    neu_r.append(eintrag[1:])
                    continue
                begriff, _, form = eintrag.partition(":")
                # Steht eine Verbform dran ("sein:praesens"), ist ein VERB
                # gemeint - und nur so trifft es bei mehrdeutigen deutschen
                # Woertern das richtige. Siehe nach_deutsch().
                ziel = wortschatz.nach_deutsch(begriff, "Verb" if form else None)
                if ziel is None:
                    wortschatz.unbekannte_begriffe.add(begriff)
                else:
                    neu_r.append(f"{ziel}:{form}" if form else ziel)
            r2["neu_im_rahmen"] = neu_r
            if r2["slots"]:
                rahmen_neu.append(r2)
        if rahmen_neu:
            module.append(dict(m, rahmen=rahmen_neu))
    return module


def baue(lehrplan, wortschatz):
    """Aus Modulen und Rahmen werden nummerierte Lektionen."""
    module_aus = []
    bekannt = set()                 # schon eingefuehrte Slot-Schluessel
    begegnungen = {}                # Schluessel -> geplante Begegnungen
    fehler = []
    ohne_genus = []
    ohne_de_genus = []
    aus_dem_rahmen = []
    # Wie aus_dem_rahmen, aber fuer Sprachen OHNE Auffangmodul: dort darf
    # nichts herausgenommen werden, gemeldet gehoert es trotzdem.
    nicht_zur_wortart = []
    cjk = lehrplan.SPRACHE == "zh"

    def buche(schluessel, anzahl):
        begegnungen[schluessel] = begegnungen.get(schluessel, 0) + anzahl

    # Alle Woerter, die IRGENDWO fest in einem Rahmen stehen.
    #
    # Sie duerfen nicht als Ausreisser aus ihrem Slot fliegen: der Rahmen
    # braucht sie spaeter als bekannt (R5). Beim ersten Versuch fiel
    # chinesisch `过` aus Modul 9 heraus und Modul 11 meldete es prompt als
    # nie eingefuehrt - der Generator hat seinen eigenen Fehler gefangen.
    hat_auffang = bool(getattr(lehrplan, "REST_RAHMEN", None))
    module_liste = uebersetze_lehrplan(lehrplan, wortschatz)
    feste_ueberall = set()
    for m in module_liste:
        for rahmen in m["rahmen"]:
            teile = rahmenwoerter(rahmen["muster"])
            if cjk:
                zerlegt = []
                for stueck in teile:
                    zerlegt += zerlege_cjk(stueck, wortschatz.nach_wort)
                teile = zerlegt
            feste_ueberall.update(teile)

    for m in module_liste:
        lektionen = []
        pool = []
        for rahmen in m["rahmen"]:
            muster = rahmen["muster"]
            form = rahmen.get("slotform", "grund")

            # Pronomen-Chips sind GELEHRTER Wortschatz, nicht Dekoration:
            # der Nutzer tippt sie an und spricht sie mit. Sie gelten
            # deshalb ab hier als bekannt - sonst meldet R5 sie im naechsten
            # Rahmen faelschlich als nie eingefuehrt.
            for p in rahmen.get("pronomen", []):
                if p in wortschatz.nach_wort:
                    bekannt.add(p)
                    buche(p, 2)

            if wortschatz.lautschrift and not rahmen.get("musterLaut"):
                fehler.append(
                    f"M{m['nr']} Rahmen {muster!r}: `musterLaut` fehlt. "
                    f"{lehrplan.SPRACHE} lernt ueber die Lautschrift - ohne sie "
                    f"stuende auf dem Bildschirm die Schrift, die der Kurs gar "
                    f"nicht lehrt.")

            # --- R5: feste Rahmenwoerter muessen bekannt sein --------------
            # Der Formzusatz ("vara:praesens") faellt fuer den Vergleich weg.
            neu_hier = [e.partition(":")[0] for e in rahmen.get("neu_im_rahmen", [])]
            feste = rahmenwoerter(muster)
            if cjk:
                zerlegt = []
                for stueck in feste:
                    zerlegt += zerlege_cjk(stueck, wortschatz.nach_wort)
                feste = zerlegt
            for w in feste:
                if w in wortschatz.nach_wort and w not in bekannt and w not in neu_hier:
                    fehler.append(
                        f"M{m['nr']} Rahmen {muster!r}: {w!r} steht fest im Rahmen, "
                        f"wurde aber nie eingefuehrt (R5)")
            # Gebucht wird ERST NACH den Lektionen dieses Rahmens - ein
            # Wort, das fest im Satzmuster steht, wird in JEDER seiner
            # Lektionen mitgesprochen, nicht einmal. Die alte Buchung von 1
            # liess die haeufigsten Woerter des Kurses ("är", "det", "inte")
            # als nie wiederholt erscheinen.
            feste_hier = [w for w in feste if w in wortschatz.nach_wort]

            # Woerter, die der Rahmen selbst neu einfuehrt.
            #
            # Schreibweise "vara:praesens" erzwingt die Oberflaechenform.
            # Noetig, weil die schwedische Vokabelspalte den INFINITIV
            # fuehrt (`vara`), im Satz aber das Praesens steht (`är`) -
            # ohne das lernt der Nutzer das Wort in einer Form, die er nie
            # sagt. Betrifft alle 96 schwedischen Verben.
            neu_rahmen = []
            neu_rahmen_schluessel = []
            for eintrag in rahmen.get("neu_im_rahmen", []):
                schluessel, _, wunschform = eintrag.partition(":")
                neu_rahmen.append(
                    wortschatz.wort(schluessel, wunschform or "grund", streng=False))
                neu_rahmen_schluessel.append(schluessel)
                bekannt.add(schluessel)

            # --- Slots in Lektionen aufteilen (R2) ------------------------
            vor_diesem_rahmen = len(lektionen)

            # Ein Wort, das FEST im Rahmen steht, darf nicht zusaetzlich in
            # dessen Luecke stehen (2026-09-07, beim Durchspielen gefunden):
            # "wǒ xiǎng [Slot]" mit xiǎng im Slot ergibt "wǒ xiǎng xiǎng",
            # englisch "I do not do that", norwegisch "er ikke ikke".
            # Betraf 47 Slots ueber alle zehn Sprachen.
            #
            # Verloren geht dadurch nichts: das Wort wird ja von genau
            # diesem Rahmen eingefuehrt und geuebt.
            # Auch die Pronomen-Chips zaehlen dazu - sie stehen im
            # Rahmentext ("jeg / hun ser [Slot]"), und `hun` im Slot ergibt
            # "jeg ser hun".
            im_rahmen = (set(feste_hier) | set(neu_hier)
                         | set(rahmen.get("pronomen", [])))

            # Und einmal auf der Ebene, die der Nutzer WIRKLICH sieht: der
            # Lerntext. Chinesisch 8.5 hatte 坐 im Rahmen und 做 im Slot -
            # zwei verschiedene Zeichen, aber beide "zuò". Auf dem Schirm
            # stand "wǒ zuò zuò". Der Vergleich ueber den Schluessel kann
            # das nicht sehen, weil die Schluessel verschieden sind.
            rahmen_laut = (rahmen.get("musterLaut") or muster).replace("[Slot]", " ")
            laut_im_rahmen = set(rahmen_laut.replace("/", " ").split())
            slots = [sl for sl in rahmen["slots"] if sl not in im_rahmen]
            reihe = rahmen.get("kind") == "series"
            groesse = len(slots) if reihe else MAX_NEU

            # Welche Wortarten vertraegt dieser Rahmen? Genau die, die in
            # seinen EIGENEN Slots vorkommen.
            #
            # Erst als eine einzige Wortart versucht (die haeufigste). Das
            # liess aber jeden Rahmen ungefiltert, dessen Slot-Liste selbst
            # gemischt ist - und "ich moechte [Slot]" ist zu Recht gemischt,
            # es vertraegt "Wasser" wie "essen". Ungefiltert stand dort dann
            # "ich moechte tonto" (dumm).
            #
            # Als MENGE ist es richtig: der Rahmen erlaubt, was seine eigene
            # Gliederung ihm gibt, und nichts darueber hinaus. Nomen und Verb
            # ja, Adjektiv nein.
            arten_zaehlung = Counter(wortschatz.wortart(s) for s in slots)
            arten_zaehlung.pop("?", None)
            gesamt_arten = sum(arten_zaehlung.values())
            rahmen_arten = {a for a, n in arten_zaehlung.items()
                            if n >= max(2, gesamt_arten * ANTEIL_RAHMENART)}

            # AUSREISSER FALLEN AUS DEM RAHMEN.
            #
            # Manche Slot-Liste ist selbst gemischt - der chinesische
            # Lehrplan ist von Hand geschrieben und hat in "ich habe [Slot]"
            # neben zehn Nomen auch `工作` (arbeiten) stehen. Herauskommt
            # "ich habe arbeiten".
            #
            # Fruehere Fassung nahm die Slot-Liste als gegeben und liess nur
            # die Wiederverwendung filtern; damit blieb der Fehler in den
            # eigenen Slots stehen. Jetzt fliegt raus, was nicht passt.
            #
            # Das Wort ist damit nicht verloren: es bleibt `unbekannt` und
            # wird vom Auffangmodul eingesammelt, das nach Wortart sortiert
            # ist und einen passenden Rahmen mitbringt. Aus einem falschen
            # Satz wird also ein richtiger, nicht eine Luecke.
            # NUR wo es ein Auffangmodul gibt.
            #
            # Schwedisch, Englisch und Chinesisch haben handgeschriebene
            # Lehrplaene ohne `REST_RAHMEN` - dort deckt die Gliederung die
            # ganze Wortliste selbst ab, und ein herausgenommenes Wort faellt
            # ersatzlos aus dem Kurs. Beim ersten Versuch verlor Schwedisch
            # so vier Woerter (foeraelskad, ganska, innan, kanske).
            #
            # Ein holpriger Satz ist besser als ein ungelehrtes Wort: ohne
            # Auffangnetz bleibt die Slot-Liste, wie sie ist.
            if rahmen_arten and not reihe and hat_auffang:
                passend = [s for s in slots
                           if wortschatz.wortart(s) in rahmen_arten
                           or wortschatz.wortart(s) == "?"
                           or s in feste_ueberall]
                verworfen = [s for s in slots if s not in passend]
                if verworfen:
                    aus_dem_rahmen.append((m["nr"], muster, verworfen))
                slots = passend
            elif rahmen_arten and not reihe:
                # OHNE Auffangmodul wird nichts herausgenommen (siehe oben) -
                # bis zum 2026-09-08 wurde deshalb auch nichts GEMELDET, und
                # englisch "he goes move", chinesisch 我很累比我工作 und drei
                # schwedische Nicht-Konjunktionen standen jahrelang im Kurs,
                # ohne dass eine Pruefung anschlug. Gefunden wurden sie durch
                # Lesen. Das hier ist die Pruefung, die es haette tun sollen.
                fremd = [s for s in slots
                         if wortschatz.wortart(s) not in rahmen_arten
                         and wortschatz.wortart(s) != "?"
                         and s not in feste_ueberall]
                if fremd:
                    nicht_zur_wortart.append((m["nr"], muster, fremd))

            # OHNE Auffangnetz wird nicht geworfen, sondern SORTIERT
            # (2026-09-07).
            #
            # Schwedisch, Englisch und Chinesisch duerfen kein Wort
            # verlieren. Statt die gemischte Slot-Liste hinzunehmen, kommen
            # ihre Wortarten in getrennte Lektionen DESSELBEN Rahmens: der
            # Rahmen vertraegt beide (er ist ja dafuer geschrieben), nur
            # nebeneinander in einer Lektion stiften sie Verwirrung -
            # "wǒ xiǎng [Slot]" zeigte Nomen und Verben gemischt.
            #
            # Kein Wort geht verloren, kein Satz wird falscher; es entstehen
            # nur mehr, kuerzere Lektionen. Bei Chinesisch sank der Anteil
            # gemischter Gruppen dadurch von 52% auf einen Bruchteil.
            sortiere_nach_wortart = not hat_auffang and not reihe

            # --- Artikel nach Genus, automatisch --------------------------
            #
            # Statt je Geschlecht einen Rahmen von Hand zu schreiben (bei
            # sieben Sprachen 59 mal 2-3 Muster) traegt der Rahmen eine
            # Zuordnung Genus -> Artikel, und die Slots werden danach
            # GRUPPIERT. Jede Gruppe wird zu eigenen Lektionen mit dem
            # richtigen Artikel im Platzhalter [Art].
            #
            # Das ist der Punkt, an dem der Kurs das Genus tatsaechlich
            # lehrt: der Nutzer hoert "una casa" und "un libro" immer
            # zusammen mit dem Wort, nie als nachgereichte Regel. Woerter
            # ohne Genus-Angabe kaemen sonst mit falschem Artikel heraus -
            # sie fallen deshalb heraus und werden gemeldet.
            artikel = rahmen.get("artikel")
            gruppen = []
            if artikel and not reihe:
                nach_genus = {}
                for sl in slots:
                    g = (wortschatz.eintrag(sl).get("genus") or "").strip()
                    if g in artikel:
                        nach_genus.setdefault(g, []).append(sl)
                    else:
                        ohne_genus.append((m["nr"], sl))
                for g in sorted(nach_genus):
                    gruppen.append((nach_genus[g], artikel[g]))
            else:
                gruppen = [(slots, None)]

            # --- Deutscher Artikel: nach DEUTSCHEM Genus gruppieren -------
            #
            # "Hier ist der [Slot]." traegt einen festen deutschen Artikel,
            # und der passte bisher zu einem der Woerter und zu den anderen
            # nicht: "Hier ist der Ehefrau", "ich habe einen Hotel".
            #
            # Das deutsche Genus steht in KEINER Vokabeltabelle - die
            # `genus`-Spalte meint die Zielsprache. Es kommt deshalb aus
            # deutsch_genus.py.
            #
            # Geloest wie beim zielsprachlichen Artikel eine Ebene hoeher:
            # nicht den Artikel biegen, sondern die Woerter GRUPPIEREN. Eine
            # Lektion zeigt dann nur Woerter eines Geschlechts, und der
            # Artikel im Satz stimmt fuer alle. Nebeneffekt, der zum Kurs
            # passt: der Lernende sieht "der Mann, der Tisch, der Bahnhof"
            # beieinander.
            if sortiere_nach_wortart:
                geteilt = []
                for teil, ziel_art in gruppen:
                    nach_art = {}
                    for sl in teil:
                        nach_art.setdefault(wortschatz.wortart(sl) or "?", []).append(sl)
                    for art_name in sorted(nach_art):
                        geteilt.append((nach_art[art_name], ziel_art))
                gruppen = geteilt

            de_artikel = artikel_im_deutschen(rahmen["musterDe"])
            if de_artikel and not reihe:
                geteilt = []
                for teil, ziel_art in gruppen:
                    nach_de = {}
                    for sl in teil:
                        g = GENUS.get(wortschatz.wort(sl)["de"])
                        if g is None:
                            ohne_de_genus.append((m["nr"], wortschatz.wort(sl)["de"]))
                        nach_de.setdefault(g, []).append(sl)
                    for g in sorted(nach_de, key=lambda x: (x is None, str(x))):
                        geteilt.append((nach_de[g], ziel_art, g))
                gruppen = geteilt
            else:
                gruppen = [(t, a, None) for t, a in gruppen]

            # Erst jetzt in Lektionsgroesse zerteilen - sonst zerschnitte die
            # Aufteilung die Genus-Gruppen wieder.
            gruppen = [(teil[i:i + groesse], a, g)
                       for teil, a, g in gruppen
                       for i in range(0, len(teil), groesse)]

            for paket, art, de_genus in gruppen:
                neue = [s for s in paket if s not in bekannt]
                # --- R3: alte Woerter dazumischen -------------------------
                #
                # Aber NUR solche, die in diesen Rahmen passen (2026-09-07).
                #
                # Vorher nahm die Wiederverwendung stur die am seltensten
                # geuebten bekannten Woerter - egal welcher Wortart. In einem
                # Adjektiv-Rahmen landeten dadurch Verben, und der Nutzer las
                # als Aufgabe "Es ist schauen, aber es geht." (russische
                # Lektion 12.4). Betroffen waren 2.150 der 7.927 Slots, also
                # gut ein Viertel des ganzen Kurses.
                #
                # Der Rahmen sagt selbst, was er vertraegt: seine eigenen
                # Slots kommen aus der gemeinsamen Gliederung und sind dort
                # nach Wortart sortiert. Deren haeufigste Wortart ist also
                # die, die der Satz grammatisch traegt.
                #
                # Findet sich nicht genug derselben Wortart, gibt es eben
                # WENIGER Wiederverwendung. Das kostet Begegnungen (R3 wird
                # berichtet, nicht erzwungen) - ein sinnloser Satz kostet
                # mehr. Wer die Zahl sehen will: pruefe() nennt sie.
                recycling = []
                if m["nr"] >= 2 and not reihe:
                    handverlesen = rahmen.get("recycling")
                    if handverlesen:
                        kandidaten = handverlesen
                    else:
                        # ZUERST die eigenen frueheren Slots dieses Rahmens.
                        #
                        # Die Wortart allein reicht nicht: "Es dauert eine
                        # [Slot]." meint Zeitspannen, und mit irgendeinem
                        # Nomen kam "Es dauert einen Flughafen." heraus.
                        # Woerter, die schon einmal IN DIESEM Rahmen standen,
                        # passen dagegen per Bau - sie sind ja dafuer
                        # ausgesucht worden.
                        #
                        # Erst wenn die nicht reichen, kommen andere Woerter
                        # derselben Wortart dazu. Sonst faellt die
                        # Wiederverwendung dort auf null, wo ein Rahmen nur
                        # wenige Slots hat.
                        # Erst die Wortart DIESER Lektion, dann die des
                        # Rahmens (2026-09-07). Ein Mischrahmen wie
                        # "ich moechte [Slot]" vertraegt Nomen UND Verben -
                        # eine einzelne LEKTION daraus soll aber nicht
                        # beides durcheinanderwerfen, sonst steht neben
                        # "Wasser" ein "essen". Der Rahmen bleibt die
                        # Rueckfallebene, damit kein Wort ganz leer ausgeht.
                        paket_arten = {wortschatz.wortart(k) for k in paket
                                       if wortschatz.wortart(k)}

                        def genus_passt(k):
                            return (de_genus is None
                                    or GENUS.get(wortschatz.wort(k)["de"]) == de_genus)

                        def hat_form(k):
                            # Verlangt der Rahmen eine bestimmte Form, muss
                            # das wiederverwendete Wort sie auch haben
                            # (2026-09-08). Sonst zieht die Wiederverwendung
                            # ein Modalverb in den Partizip-Rahmen, und
                            # "I have will it" waere zurueck.
                            if form == "grund":
                                return True
                            spalte = wortschatz.FORM_SPALTE.get(form)
                            formen = wortschatz.eintrag(k).get("forms") or {}
                            return bool(spalte and isinstance(formen, dict)
                                        and formen.get(spalte))

                        def passt(k, arten=None):
                            arten = rahmen_arten if arten is None else arten
                            return ((not arten or wortschatz.wortart(k) in arten)
                                    and genus_passt(k) and hat_form(k))

                        # Auch die eigenen Slots muessen durch den
                        # Genus-Filter: sonst stuende in einer Lektion mit
                        # weiblichem Artikel wieder ein Maskulinum, und der
                        # gerade behobene Fehler waere zurueck.
                        #
                        # Innerhalb beider Gruppen entscheidet, wer am
                        # wenigsten geuebt wurde - sonst kaemen immer
                        # dieselben zwei Woerter des Rahmens wieder.
                        nach_bedarf = lambda k: begegnungen.get(k, 0)

                        def reihe_fuer(arten):
                            eigen = sorted((k for k in slots
                                            if k in bekannt and passt(k, arten)),
                                           key=nach_bedarf)
                            rest = [k for k in sorted(bekannt, key=nach_bedarf)
                                    if k not in slots and passt(k, arten)]
                            return eigen + rest

                        # KEIN Rueckfall auf die weitere Rahmen-Wortart.
                        # Gemessen brachte er keine einzige zusaetzliche
                        # Begegnung (die Woerter kamen ohnehin an anderer
                        # Stelle dran) und kostete 1,1 Punkte mehr gemischte
                        # Gruppen. Ist `paket_arten` leer, weil die Wortart
                        # fehlt, laesst `passt` ohnehin alles durch.
                        kandidaten = reihe_fuer(paket_arten)
                    for k in kandidaten:
                        if len(recycling) >= MIN_RECYCLING:
                            break
                        if (k in bekannt and k not in paket and k not in recycling
                                and k not in im_rahmen
                                and wortschatz.wort(k, form)["lerntext"]
                                not in laut_im_rahmen):
                            recycling.append(k)

                # --- Genus-Reinheit (Schwedisch/Norwegisch) ---------------
                # Ein Rahmen mit Artikel ("det är en [Slot]") vertraegt nur
                # Nomen DIESES Genus. Ohne die Pruefung entstuenden Saetze
                # wie "det är en hus" - grammatisch falsch, und der Nutzer
                # lernt das Genus dann falsch mit. Deshalb pruefen statt
                # hoffen: die Spalte `genus` steht in der Tabelle.
                verlangt = rahmen.get("genus")
                if verlangt:
                    for s in paket:
                        g = (wortschatz.eintrag(s).get("genus") or "").strip()
                        if g and g != verlangt:
                            fehler.append(
                                f"M{m['nr']} Rahmen {muster!r}: {s!r} ist "
                                f"'{g}', der Rahmen verlangt '{verlangt}'")

                # `wieder` sagt dem Uebungs-Screen, dass er dieses Wort
                # nicht noch einmal einfuehren muss (siehe courseTypes.ts).
                gruppe = [wortschatz.wort(s, form) for s in paket]
                gruppe += [dict(wortschatz.wort(s, form), wieder=True)
                           for s in recycling]

                # Was der Uebungs-Screen daraus wirklich macht (2026-09-07):
                # ein NEUES Wort bekommt Teaser-Satz, Nachsprechen, Abrufen
                # und Satz, ein WIEDERHOLTES nur den Satz. Vorher stand hier
                # 3 gegen 1 - der Screen spielte damals aber fuer beide
                # dieselben vier Schritte, die Rechnung passte also in
                # BEIDE Richtungen nicht zur Anzeige.
                for s in paket:
                    bekannt.add(s)
                    buche(s, 4)
                for s in recycling:
                    buche(s, 1)

                # Der Rahmen wird IMMER als Paar geschrieben: `schrift` ist,
                # was vorgelesen wird, `lerntext` was auf dem Bildschirm
                # steht. Bei Sprachen in lateinischer Schrift ist beides
                # dasselbe; bei Chinesisch und Russisch traegt `schrift`
                # die Zeichen (TTS braucht sie) und `lerntext` die
                # Lautschrift (gelernt wird ueber sie).
                # [P] wird AUFGELOEST, nicht durchgereicht.
                #
                # Der Uebungs-Screen kennt genau einen Platzhalter und nimmt
                # bei Mehrfachformen die erste Variante ("jag / du / han" ->
                # "jag", siehe ersteVariante() in lessonEvaluation.ts). Ein
                # stehengebliebenes [P] wuerde deshalb als DER Platzhalter
                # gefuellt - im ersten Test stand tatsaechlich "trött är
                # [Slot]" auf dem Schirm. Die Pronomen kommen also
                # schraegstrich-getrennt in den Rahmentext; als Chips stehen
                # sie zusaetzlich in `pronouns`.
                pron = rahmen.get("pronomen", [])

                # --- Personalkonjugation ---------------------------------
                #
                # Schwedisch, Norwegisch, Chinesisch und Vietnamesisch
                # konjugieren NICHT nach Person: `jag är`, `du är`, `han är`.
                # Dort darf ein Rahmen mehrere Pronomen-Chips tragen, und
                # das ist ein Gewinn - der Nutzer sieht sofort, dass die
                # Form gleich bleibt.
                #
                # Spanisch, Franzoesisch, Italienisch, Russisch und Polnisch
                # konjugieren sehr wohl. Ein Rahmen "quiero [Slot]" mit den
                # Chips yo/tú/nosotros behauptet, "tú quiero" sei richtig -
                # es heisst aber "tú quieres". Deshalb bleibt dort nur das
                # Pronomen stehen, zu dem die Verbform im Rahmen passt: das
                # erste.
                #
                # Englisch loest dasselbe Problem anders (drei getrennte
                # Rahmen fuer am/are/is) - das geht dort, weil es nur drei
                # Formen sind. Bei sechs romanischen Formen waere es das
                # Sechsfache an Rahmen.
                if getattr(lehrplan, "PERSONENKONJUGATION", False):
                    pron = pron[:1]

                def loese_p(text, werte):
                    return text.replace("[P]", " / ".join(werte)) if werte else                         text.replace("[P] ", "").replace("[P]", "")

                pron_laut = [wortschatz.wort(x, "grund")["lerntext"] for x in pron]
                pron_de = [wortschatz.wort(x, "grund")["de"] for x in pron]

                lektionen.append({
                    "kind": "series" if reihe else "frame",
                    "frame": {
                        "schrift": loese_p(muster, pron).replace("[Art]", art or "").replace("  ", " ").strip(),
                        "lerntext": loese_p(rahmen.get("musterLaut") or muster, pron_laut)
                                    .replace("[Art]", art or "").replace("  ", " ").strip(),
                    },
                    "frameDe": loese_p(setze_artikel(rahmen["musterDe"], de_genus), pron_de),
                    "pronouns": [wortschatz.wort(p, "grund") for p in rahmen.get("pronomen", [])],
                    "slotGroups": [gruppe],
                    "newCount": len(neue),
                    "task": None,
                    "newFrameWords": neu_rahmen,
                })
                # Welche Woerter in welcher Lektion standen - Grundlage der
                # Wiederholungs-Lektion am Modulende.
                pool.append((lektionen[-1], list(zip(paket + recycling, gruppe))))
                neu_rahmen = []   # nur die erste Lektion des Rahmens fuehrt sie ein

                if not reihe and len(neue) > MAX_NEU:
                    fehler.append(
                        f"M{m['nr']} Rahmen {muster!r}: {len(neue)} neue Woerter "
                        f"in einer Lektion, erlaubt sind {MAX_NEU} (R2)")

            # --- Was der Rahmen selbst einbringt ---------------------------
            # Jede Lektion dieses Rahmens spricht seinen Wortlaut einmal
            # ganz aus (Teaser und Satz-Schritt). Ein festes Rahmenwort
            # bekommt also so viele Begegnungen, wie der Rahmen Lektionen
            # hat; ein hier eingefuehrtes zusaetzlich seine Einfuehrung
            # (Teaser, Nachsprechen, Abrufen).
            anzahl = max(len(lektionen) - vor_diesem_rahmen, 1)
            for w in feste_hier:
                buche(w, anzahl)
            for k in neu_rahmen_schluessel:
                buche(k, 3 + max(anzahl - 1, 0))

        # --- Wiederholung vor dem Abschluss -------------------------------
        # Der Finisher kommt noch, deshalb eine Lektion Luft lassen.
        lektionen += wiederholungs_lektionen(
            pool, begegnungen, buche,
            hoechstens=MAX_LEKTIONEN_JE_MODUL - 1 - len(lektionen))

        # --- R7: Finisher ohne neue Vokabeln ------------------------------
        lektionen.append({
            "kind": "finisher", "frame": {"schrift": "", "lerntext": ""},
            "frameDe": None, "pronouns": [],
            "slotGroups": [], "newCount": 0, "task": m["finisher"], "newFrameWords": [],
        })

        for i, l in enumerate(lektionen, 1):
            l["id"] = f"{m['nr']}.{i}"
        module_aus.append({"number": m["nr"], "title": m["titel"],
                           "niveau": m.get("niveau"), "lessons": lektionen})

    # --- Auffangmodul: der Rest der Wortliste --------------------------
    #
    # Der gemeinsame Aufbau ist aus dem schwedischen Wortschatz abgeleitet.
    # Die elf Listen sind aber unabhaengig nach Haeufigkeit der jeweiligen
    # Sprache entstanden und ueberschneiden sich nur teilweise - bei
    # Spanisch fehlen 185 der gemeinsamen Begriffe, und umgekehrt bleiben
    # rund 200 spanische Woerter unbenutzt.
    #
    # Diese Woerter einfach liegen zu lassen waere falsch: es sind die
    # haeufigsten Woerter GENAU DIESER Sprache. Sie hier nachzudichten waere
    # ebenso falsch - dann stuenden erfundene Woerter im Kurs.
    #
    # Also: ein Schlussmodul, das den Rest nach WORTART in einfache Rahmen
    # sortiert, die die Sprache selbst mitbringt (`REST_RAHMEN`). Das ist
    # schwaecher als ein von Hand gebauter Rahmen - der Satz ist generisch -
    # aber deutlich besser, als 40% des Wortschatzes ungelehrt zu lassen.
    rest_rahmen = getattr(lehrplan, "REST_RAHMEN", None)
    if rest_rahmen:
        offen = [k for k in wortschatz.alle_schluessel() if k not in bekannt]
        # Kategoriewoerter gehoeren zu Kaufkategorien, nicht in den Kurs.
        offen = [k for k in offen if not (wortschatz.eintrag(k).get("category") or "")
                 .startswith(("club_", "drinking_", "health_", "hotel_", "travel_",
                              "moving_", "shopping_", "culture_", "university_",
                              "smalltalk_", "grundwortschatz", "job_", "love_",
                              "dating_", "finding_"))]
        nach_art = {}
        for k in offen:
            art = (wortschatz.eintrag(k).get("category") or "").strip()
            ziel = art if art in rest_rahmen else "_sonst"
            if ziel in rest_rahmen:
                nach_art.setdefault(ziel, []).append(k)
        # JE WORTART EIN MODUL, nicht alles in eines.
        #
        # Der Rest umfasst je nach Sprache 200 bis 260 Woerter, also 44 bis
        # 52 Lektionen. Unter EINER Pfad-Pille waere das eine Liste, durch
        # die niemand scrollt, und ein Fortschritt, der sich nie bewegt.
        # Nach Wortart getrennt sind es Module von 8 bis 30 Lektionen mit
        # einem erkennbaren Thema ("Weitere Nomen") - und jedes hat ein
        # Ende, das man erreichen kann.
        TITEL = {
            "Nomen": "Weitere Nomen", "Verb": "Weitere Verben",
            "Adjektiv": "Weitere Adjektive", "Adverb": "Weitere Adverbien",
            "Pronomen": "Weitere Pronomen", "Zahlwort": "Weitere Zahlen",
            "Praeposition": "Weitere Präpositionen",
            "Präposition": "Weitere Präpositionen",
            "Konjunktion": "Weitere Bindewörter", "Fragewort": "Weitere Fragewörter",
            "Artikel": "Artikel", "Zahlwort/Zeit": "Zahlen und Zeit",
            "Zusatz": "Weitere Wörter", "_sonst": "Weitere Wörter",
        }
        nr = (module_aus[-1]["number"] if module_aus else 0)
        # Grosse Gruppen zuerst - die tragen den meisten Wortschatz.
        for art in sorted(nach_art, key=lambda a: -len(nach_art[a])):
            muster, musterDe = rest_rahmen[art][:2]
            laut = rest_rahmen[art][2] if len(rest_rahmen[art]) > 2 else None
            liste = nach_art[art]
            lektionen = []
            pool = []
            # R3 gilt auch hier (2026-09-07).
            #
            # Die Auffangmodule fuehrten 200 bis 260 Woerter ein und
            # wiederholten KEINES davon - jedes kam auf genau drei
            # Begegnungen und war danach nie wieder zu sehen. Das ist der
            # Grund, warum die erzeugten Sprachen bei 39-48% ohne jede
            # Wiederverwendung lagen, waehrend das handgeschriebene
            # Schwedisch bei 15% steht: nicht die Gliederung war schlechter,
            # sondern der Rest bekam gar keine.
            #
            # Hier ist die Wiederverwendung ausserdem gratis richtig: das
            # Modul ist nach Wortart sortiert, alle bisherigen Woerter
            # passen also per Bau in denselben Rahmen.
            # Auch hier nach deutschem Genus gruppieren, wenn der Rahmen
            # einen Artikel traegt (2026-09-07).
            #
            # Beim ersten Anlauf war nur der Spine-Pfad umgestellt, und die
            # Auffangmodule zeigten weiter "Hier ist der Ehefrau" - sie
            # bauen ihre Lektionen an eigener Stelle. Gefunden beim
            # Nachsehen der erzeugten Lektionen, nicht im Code.
            if artikel_im_deutschen(musterDe):
                nach_de = {}
                for k in liste:
                    g = GENUS.get(wortschatz.wort(k)["de"])
                    if g is None:
                        ohne_de_genus.append((nr + 1, wortschatz.wort(k)["de"]))
                    nach_de.setdefault(g, []).append(k)
                bloecke = [(nach_de[g], g)
                           for g in sorted(nach_de, key=lambda x: (x is None, str(x)))]
            else:
                bloecke = [(liste, None)]

            for block, de_genus in bloecke:
                # Wiederverwendung nur innerhalb des Blocks: sonst stuende in
                # einer Lektion mit weiblichem Artikel wieder ein Maskulinum.
                schon_im_block = []
                for i in range(0, len(block), MAX_NEU):
                    paket = block[i:i + MAX_NEU]
                    wieder = sorted(schon_im_block,
                                    key=lambda k: begegnungen.get(k, 0))[:MIN_RECYCLING]
                    for k in paket:
                        bekannt.add(k)
                        buche(k, 4)
                    for k in wieder:
                        buche(k, 1)
                    lektionen.append({
                        "kind": "frame",
                        "frame": {"schrift": muster, "lerntext": laut or muster},
                        "frameDe": setze_artikel(musterDe, de_genus),
                        "pronouns": [],
                        "slotGroups": [[wortschatz.wort(k) for k in paket]
                                       + [dict(wortschatz.wort(k), wieder=True)
                                          for k in wieder]],
                        "newCount": len(paket), "task": None, "newFrameWords": [],
                    })
                    pool.append((lektionen[-1],
                                 [(k, wortschatz.wort(k)) for k in paket + wieder]))
                    schon_im_block += paket
            if not lektionen:
                continue
            lektionen += wiederholungs_lektionen(
                pool, begegnungen, buche,
                hoechstens=MAX_LEKTIONEN_JE_MODUL - 1 - len(lektionen))
            lektionen.append({
                "kind": "finisher",
                "frame": {"schrift": "", "lerntext": ""}, "frameDe": None,
                "pronouns": [], "slotGroups": [], "newCount": 0,
                "task": "Benutze fünf Wörter aus diesem Modul in eigenen Sätzen.",
                "newFrameWords": [],
            })
            nr += 1
            for i, l in enumerate(lektionen, 1):
                l["id"] = f"{nr}.{i}"
            module_aus.append({"number": nr,
                               "title": TITEL.get(art, f"Weitere Wörter ({art})"),
                               # Restwortschatz ist A1-Niveau, keine neue
                               # Stufe - nur Woerter, die nicht in die
                               # gemeinsame Gliederung passten.
                               "niveau": None,
                               "lessons": lektionen})

    if aus_dem_rahmen:
        anzahl = sum(len(w) for _, _, w in aus_dem_rahmen)
        print(f"  {anzahl} Slot-Woerter passten nicht zur Wortart ihres Rahmens "
              f"und wurden herausgenommen - das Auffangmodul sammelt sie ein.")
        for nr, muster, woerter in aus_dem_rahmen[:5]:
            print(f"     M{nr} {muster!r}: {', '.join(woerter)}")

    if nicht_zur_wortart:
        anzahl = sum(len(w) for _, _, w in nicht_zur_wortart)
        print(f"  {anzahl} Slot-Woerter passen nicht zur Wortart ihres Rahmens. "
              f"{lehrplan.SPRACHE} hat kein Auffangmodul, sie bleiben deshalb "
              f"stehen - der Satz ist aber vermutlich falsch:")
        for nr, muster, woerter in nicht_zur_wortart[:8]:
            print(f"     M{nr} {muster!r}: {', '.join(woerter)}")

    if ohne_de_genus:
        # KEIN Fehler: ohne bekanntes Genus behaelt der Rahmen seinen
        # urspruenglichen Artikel, der Satz bleibt also hoechstens so falsch
        # wie vorher. Es ist die Liste, mit der sich deutsch_genus.py
        # vervollstaendigen laesst - und zugleich die Stelle, an der man
        # sieht, dass ein Nicht-Nomen im Artikel-Rahmen gelandet ist.
        namen = sorted({w for _, w in ohne_de_genus})
        print(f"  {len(namen)} Woerter ohne deutsches Genus - dort bleibt der "
              f"Artikel des Rahmens stehen:")
        print("     " + ", ".join(namen[:25]) + (" ..." if len(namen) > 25 else ""))

    if ohne_genus:
        # KEIN Fehler, sondern ein Hinweis: das Wort faellt aus dem
        # Artikel-Rahmen heraus (lieber kein Slot als "un casa") und wird
        # vom Auffangmodul weiter unten wieder eingesammelt. Die Abdeckung
        # bleibt also vollstaendig.
        namen = sorted({w for _, w in ohne_genus})
        print(f"  {len(namen)} Woerter ohne Genus-Angabe - aus dem Artikel-Rahmen "
              f"genommen, vom Auffangmodul uebernommen: {namen[:10]}")
    # --- Reihenfolge: A1, dann Auffangmodule, dann A2 ------------------
    #
    # Die Auffangmodule sammeln den RESTWORTSCHATZ ein - Kernwoerter auf
    # A1-Niveau, die nur nicht in die gemeinsame Gliederung passten. Die
    # A2-Stufe uebt dagegen Struktur auf bekanntem Wortschatz. Erst das
    # Vokabular, dann die Grammatik darauf.
    #
    # Nebeneffekt, der zaehlt: die Auffangmodule behalten dadurch die
    # Nummern, die sie vor der A2-Stufe hatten - und mit ihnen die
    # Lektions-IDs, an denen die FSRS-Karten und damit der Fortschritt
    # jedes Nutzers haengen (`sv:course-rahmen:15.3`).
    module_aus.sort(key=lambda m: m.get("niveau") == "A2")
    for neue_nr, m in enumerate(module_aus, 1):
        m["number"] = neue_nr
        for i, l in enumerate(m["lessons"], 1):
            l["id"] = f"{neue_nr}.{i}"

    return module_aus, bekannt, begegnungen, fehler


# ---------------------------------------------------------------------------
def wiederholungs_lektionen(pool, begegnungen, buche, hoechstens=4):
    # `hoechstens` ist ein BUDGET, kein Wunsch: das Modul darf zusammen mit
    # dem Finisher MAX_LEKTIONEN_JE_MODUL nicht ueberschreiten. Vier ist die
    # Obergrenze, ab der es gemessen nichts mehr bringt.
    """Lektionen ohne neue Vokabeln, die gezielt die schwaechsten Woerter des
    Moduls noch einmal in einen Rahmen setzen (2026-09-07).

    Mehr Wiederverwendung je Lektion hilft dem Mittelfeld, nicht dem Rand:
    ein Wort aus den letzten Lektionen eines Moduls hat schlicht keine
    spaetere Lektion mehr, in der es vorkommen koennte. Gemessen blieben
    dadurch 4-15% der Woerter bei ihrer Einfuehrung stehen, egal wie hoch
    MIN_RECYCLING stand.

    Also eine Lektion, die NUR wiederholt - am Modulende, vor dem Finisher.
    Sie nimmt die Woerter mit den wenigsten Begegnungen und setzt sie in
    einen Rahmen, in dem sie schon einmal standen. Das ist die Zusicherung,
    die den Satz grammatisch haelt: kein neu zusammengewuerfeltes Paar,
    sondern dieselbe Stelle wie beim ersten Mal.

    Gesammelt wird je RAHMEN, nicht je Quell-Lektion. Andernfalls entstanden
    vier halbe Lektionen hintereinander mit demselben Satzmuster (1.7 bis
    1.10 waren alle "wǒ shì [Slot]") - viermal dasselbe am Stueck ist genau
    das geballte Ueben, das hier vermieden werden soll.

    R7 bleibt unberuehrt - eine Wiederholung fuehrt keine Vokabeln ein.
    """
    nach_rahmen = {}
    for lek, paare in pool:
        # Der Finisher hat keinen Rahmen, in den sich etwas einsetzen liesse.
        # Zahlenreihen dagegen zaehlen mit: sie nehmen selbst keine
        # Wiederverwendung auf (eine geschlossene Reihe wird als Abfolge
        # gelernt), waren dadurch aber die groesste Gruppe der nie
        # wiederholten Woerter - bei Norwegisch 21 von 31.
        if lek["kind"] == "finisher":
            continue
        schl = (lek["frame"]["schrift"], lek["frame"]["lerntext"], lek["frameDe"])
        eintrag = nach_rahmen.setdefault(schl, (lek, {}))
        for schluessel, wort in paare:
            eintrag[1].setdefault(schluessel, wort)

    aus = []
    for _ in range(max(min(hoechstens, 4), 0)):
        beste, bestes = None, []
        for lek, woerter in nach_rahmen.values():
            bedarf = [(k, w) for k, w in woerter.items()
                      if begegnungen.get(k, 0) < MIN_BEGEGNUNGEN]
            bedarf.sort(key=lambda kw: begegnungen.get(kw[0], 0))
            bedarf = bedarf[:MIN_RECYCLING]
            if len(bedarf) > len(bestes):
                beste, bestes = lek, bedarf
        # Unter drei Woertern lohnt keine eigene Lektion - der Nutzer tippt
        # sich durch zwei Karten und steht wieder am Anfang.
        if beste is None or len(bestes) < 3:
            break
        # Kein Ausschluss ueber mehrere Wiederholungs-Lektionen hinweg:
        # `buche` zaehlt sofort hoch, die Sortierung nach Bedarf schiebt ein
        # gerade geuebtes Wort also von selbst nach hinten. Zweimal in
        # verschiedenen Rahmen ist zudem genau das, was fehlt.
        for schluessel, _ in bestes:
            buche(schluessel, 1)
        aus.append({
            "kind": "frame",
            "frame": beste["frame"],
            "frameDe": beste["frameDe"],
            "pronouns": beste["pronouns"],
            "slotGroups": [[dict(w, wieder=True) for _, w in bestes]],
            "newCount": 0, "task": None, "newFrameWords": [],
        })

    # Zwei Wiederholungen mit demselben Satzmuster nicht hintereinander -
    # ein Rahmen mit vielen offenen Woertern kommt zwangslaeufig mehrfach
    # dran, aber direkt nacheinander liest es sich wie ein Fehler.
    gemischt, warteschlange = [], list(aus)
    while warteschlange:
        vorige = gemischt[-1]["frame"]["lerntext"] if gemischt else None
        naechste = next((i for i, l in enumerate(warteschlange)
                         if l["frame"]["lerntext"] != vorige), 0)
        gemischt.append(warteschlange.pop(naechste))
    return gemischt

# ---------------------------------------------------------------------------
def pruefe(lehrplan, wortschatz, module, bekannt, begegnungen, fehler):
    print(f"=== {lehrplan.SPRACHE} ===")
    lektionen = sum(len(m["lessons"]) for m in module)
    print(f"  {len(module)} Module, {lektionen} Lektionen, {len(bekannt)} Slot-Woerter")

    # R3 - und was der Kurs davon leisten KANN.
    #
    # Produktives Koennen braucht ~18 Begegnungen (Laufer &
    # Rozovski-Roitblat 2015). Die gehoeren aber ausdruecklich NICHT alle in
    # den Kurs: verteiltes Ueben schlaegt geballtes deutlich, 18 Wiederholungen
    # in einer Lektion waeren genau das Gegenteil davon. Der Kurs liefert die
    # ersten Begegnungen (Einfuehrung + mindestens eine Wiederverwendung),
    # FSRS die restlichen ueber Tage und Wochen.
    #
    # Gemessen wird deshalb das, was der Kurs zusichern kann: bekommt JEDES
    # Wort nach seiner Einfuehrung noch mindestens einen Auftritt in einer
    # SPAETEREN Lektion? Ein Wort mit genau 3 Begegnungen ist eingefuehrt
    # und nie wiedergesehen - das ist die Luecke, die FSRS nicht schliessen
    # kann, weil die Karte dann von einem einzigen Tag stammt.
    #
    # MIN_BEGEGNUNGEN ist die Untergrenze, die der Kurs zusichern soll:
    # Einfuehrung (4) plus zwei Wiederholungslektionen. Weniger als das
    # heisst, das Wort stammt aus ein oder zwei Tagen - dagegen kommt auch
    # FSRS nicht an, es kann nur wiederholen, was ueberhaupt sitzt.
    ohne_wiederholung = [k for k in bekannt if begegnungen.get(k, 0) <= 4]
    unter_ziel = [k for k in bekannt if begegnungen.get(k, 0) < MIN_BEGEGNUNGEN]
    schnitt = sum(begegnungen[k] for k in bekannt) / max(len(bekannt), 1)
    anteil = lambda xs: len(xs) / max(len(bekannt), 1) * 100
    print(f"  Kurs-Begegnungen je Wort: Schnitt {schnitt:.1f} "
          f"(Einfuehrung = 4, jede Wiederverwendung +1)")
    print(f"  Unter {MIN_BEGEGNUNGEN}: {len(unter_ziel)} von {len(bekannt)}"
          f"  ({anteil(unter_ziel):.0f}%)")
    print(f"  Ohne jede Wiederverwendung: {len(ohne_wiederholung)} von {len(bekannt)}"
          f"  ({anteil(ohne_wiederholung):.0f}%)")
    print(f"  Zum Ziel von {ZIEL_BEGEGNUNGEN} steuert FSRS den Rest bei - "
          f"verteilt, nicht geballt.")

    if wortschatz.unbekannte_begriffe:
        fehlt = sorted(wortschatz.unbekannte_begriffe)
        print(f"  {len(fehlt)} Begriffe hat diese Sprache nicht - Slots entfallen:")
        print("     " + ", ".join(fehlt[:30]) + (" ..." if len(fehlt) > 30 else ""))

    if wortschatz.fehlende_formen_karte:
        fehlt = sorted(wortschatz.fehlende_formen_karte)
        print(f"  {len(fehlt)} eingefuehrte Woerter stehen als Woerterbuchform "
              f"auf der Karte, weil die forms-Spalte die verlangte Form nicht "
              f"hat: {[w for w, _ in fehlt[:8]]}")

    if wortschatz.fehlende_formen:
        # FEHLER, nicht Hinweis: ein Rahmen, der eine Form verlangt, die es
        # nicht gibt, setzt stillschweigend die Grundform ein. Genau so
        # entstand "I have finish it" und stand jahrelang im Kurs.
        fehlt = sorted(wortschatz.fehlende_formen)
        fehler.append(
            f"{len(fehlt)} Woerter haben die verlangte Form nicht in der "
            f"forms-Spalte: {fehlt[:8]}")

    if wortschatz.fehlend:
        fehler.append(f"{len(wortschatz.fehlend)} Slot-Woerter stehen nicht in der "
                      f"Vokabeltabelle: {sorted(wortschatz.fehlend)}")

    # Abdeckung der Wortliste
    alle = set(wortschatz.alle_schluessel())
    ohne = alle - bekannt
    print(f"  Wortliste: {len(alle)} Eintraege, {len(bekannt)} im Kurs, {len(ohne)} ohne Lektion")

    if fehler:
        print(f"  {len(fehler)} FEHLER:")
        for f in fehler[:25]:
            print("    X " + f)
        if len(fehler) > 25:
            print(f"    ... und {len(fehler) - 25} weitere")
        return False
    print("  Alles sauber.")
    return True


# ---------------------------------------------------------------------------
def schreibe_ts(lehrplan, module):
    os.makedirs(ZIEL, exist_ok=True)
    name = lehrplan.DATEINAME
    pfad = os.path.join(ZIEL, name)
    kopf = f"""// ERZEUGT - nicht von Hand aendern.
// Quelle: Sprachlisten/kurs/kurs_{lehrplan.SPRACHE}.py
// Neu bauen: python bauplan.py {lehrplan.SPRACHE} --schreib
//
// Aufbau und Begruendung: Sprachlisten/kurs/ENTWURF.md
// {len(module)} Module, {sum(len(m['lessons']) for m in module)} Lektionen.

import {{ CourseModuleData }} from '../courseTypes';

export const {lehrplan.KONSTANTE}: CourseModuleData[] =
"""
    with open(pfad, "w", encoding="utf-8") as f:
        f.write(kopf)
        f.write(json.dumps(module, ensure_ascii=False, indent=2))
        f.write(";\n")
    print(f"  -> {pfad}")


# ---------------------------------------------------------------------------
def lauf(sprache, schreiben):
    lehrplan = lade_lehrplan(sprache)
    wortschatz = Wortschatz(lehrplan)
    module, bekannt, begegnungen, fehler = baue(lehrplan, wortschatz)
    ok = pruefe(lehrplan, wortschatz, module, bekannt, begegnungen, fehler)
    if ok and schreiben:
        schreibe_ts(lehrplan, module)
    print()
    return ok


def main():
    if len(sys.argv) < 2:
        raise SystemExit(__doc__)
    ziel = sys.argv[1]
    schreiben = "--schreib" in sys.argv
    sprachen = ["sv", "en", "zh", "es", "fr", "it", "no", "ru", "vi", "pl"] if ziel == "alle" else [ziel]
    alles_ok = all([lauf(s, schreiben) for s in sprachen])
    sys.exit(0 if alles_ok else 1)


if __name__ == "__main__":
    main()
