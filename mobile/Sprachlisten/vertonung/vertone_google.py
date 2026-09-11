# -*- coding: utf-8 -*-
"""
Vertont ALLE Saetze und Vokabeln aller Sprachen ueber Google Cloud
Text-to-Speech und laedt die MP3s in den Supabase-Bucket `vocab_audio`.

Aufbau und Befehle sind bewusst dieselben wie in vertone_azure.py - wer das
eine bedienen kann, kann auch das andere. Was sich unterscheidet, steht
jeweils als Kommentar an Ort und Stelle.

Aufrufe
-------
    python vertone_google.py stimmen         # welche Stimmen gibt es? (live)
    python vertone_google.py plan            # Trockenlauf, verbraucht nichts
    python vertone_google.py los             # vertont wirklich

    --sprache de,sv     nur diese Sprachen
    --nur saetze        oder: woerter
    --limit 50          hoechstens N Dateien (zum Antesten)
    --budget 20000      hoechstens N Zeichen in diesem Lauf
    --klasse Wavenet    filtert die Ausgabe von 'stimmen'
    --erneut            auch schon von Google vertonte Eintraege neu machen

Zugangsdaten
------------
Aus `Sprachlisten/.env` (eine Ebene ueber dieser Datei, per .gitignore
ausgeschlossen), oder aus der Umgebung - die schlaegt die Datei:

    SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY, GOOGLE_TTS_API_KEY

Anders als vertone.py und vertone_azure.py traegt dieses Skript KEINEN
Schluessel im Klartext. Deshalb darf es im Git liegen - die beiden anderen
liegen genau deswegen ausserhalb.

Der Schluessel geht als Kopfzeile `X-Goog-Api-Key` mit, NICHT als `?key=`
in der URL. Beides erlaubt Google, aber URLs landen in Proxy- und
Serverprotokollen, Kopfzeilen nicht.
"""

import argparse
import base64
import hashlib
import json
import os
import sys
import time
import unicodedata

import requests


# Die Windows-Konsole laeuft standardmaessig auf cp1252 und kann Hanzi,
# Kyrillisch und vietnamesische Tonzeichen nicht darstellen. Das ist kein
# Schoenheitsfehler: die Fortschrittszeile unten druckt den Satztext mit,
# und ein UnicodeEncodeError dort haette den ganzen Lauf mitten in der
# chinesischen Tabelle abgebrochen - nach Stunden und mitten im Bestand.
# `errors="replace"` macht daraus im schlimmsten Fall ein Fragezeichen auf
# dem Schirm; in die Datenbank und ins MP3 geht ohnehin der echte Text.
try:
    sys.stdout.reconfigure(encoding="utf-8", errors="replace")
    sys.stderr.reconfigure(encoding="utf-8", errors="replace")
except (AttributeError, OSError):
    pass


# ---------------------------------------------------------------------------
# HIER STIMMEN EINTRAGEN  <-- das ist das Feld fuer Simon
# ---------------------------------------------------------------------------
# Die Namen unten sind am 2026-09-11 LIVE aus der API geholt und mit einer
# echten Synthese geprueft, nicht geraten. Mit
#     python vertone_google.py stimmen --klasse Chirp3-HD
# siehst du alle, die es je Sprache gibt. `None` heisst: Sprache auslassen.
#
# DIE STIMME WURDE JE SPRACHE GEHOERT UND GEWAEHLT, nicht abgeleitet
# (Simon, 2026-09-11). ALLE ELF sind entschieden, jeweils nach einer
# Hoerprobe aus ECHTEN Saetzen des Bestands - nicht nach Beschreibung, nicht
# nach Namen:
#   de, es, zh, vi -> Aoede
#   sv, no, en     -> Achernar
#   ru, pl         -> Zephyr
#   fr             -> Autonoe
#   it             -> Leda
#
# Dass vier auf Aoede stehen, ist NICHT der Ueberrest der Vorgabe: fuer
# jede der vier lagen fuenf Stimmen zur Auswahl vor (Aoede, Achernar,
# Zephyr, Autonoe, Leda, je am selben Text), und Aoede hat gewonnen. Wer
# hier etwas aendert, ueberstimmt also eine Entscheidung.
#
# Zwei Beobachtungen, die beim Hoeren herauskamen und beim naechsten Mal
# Zeit sparen:
#   * Die Paare fielen auf die Sprachfamilien, ohne dass darauf hin
#     entschieden wurde: beide SLAWISCHEN bekamen Zephyr, beide mit
#     TONAKZENT (sv/no) Achernar. Kommt eine zwoelfte Sprache dazu, hoert
#     man sie also am besten gegen die verwandte, nicht gegen die Vorgabe.
#   * Ein Name sagt NICHTS ueber eine andere Sprache. Dieselbe Stimmfamilie
#     ist je Sprache eigens trainiert; dass Zephyr im Russischen ueberzeugt,
#     heisst nichts fuer franzoesische Nasale. Deshalb wurde jede Sprache
#     einzeln gehoert, auch wenn das nach Wiederholung aussieht.
#
# Die Proben waren je Sprache auf deren SCHWACHSTELLE zugeschnitten, nicht
# auf beliebige Saetze - nur so pruefen sie etwas:
#   pl  Zischlautreihen   (`Czy szukacie jeszcze ludzi?` = cz, sz und szcz)
#   it  Doppelkonsonanten (bedeutungsunterscheidend: capelli/cappelli)
#   fr  Nasale + Liaison  (`les etudiants en echange`)
#   sv, no  Tonakzent     en  th-Laute     ru  Vokalreduktion
# Wer eine Stimme spaeter wechselt, prueft sie an denselben Saetzen.
#
# Zur Schnittmenge, falls sie jemand wieder aufbringt: nur acht der 30
# Chirp3-HD-Stimmen gibt es in ALLEN elf Sprachen (Aoede, Charon, Fenrir,
# Kore, Leda, Orus, Puck, Zephyr), weil Russisch als einziges nur diese
# acht fuehrt. Das zaehlte, solange EINE Stimme fuer alle gelten sollte -
# seit je Sprache gewaehlt wird, ist es unerheblich. Achernar und Autonoe
# liegen ausserhalb und sind trotzdem richtig.
#
# Zur Klasse: von acht Stimmklassen fuehrt Google nur drei in allen elf
# Sprachen - Standard, Wavenet und Chirp3-HD. Neural2 fehlt bei
# sv/zh/no/ru/pl, Studio fast ueberall. Chirp3-HD ist die neueste und beste;
# Wavenet waere die guenstigere Alternative, gleiche Namensystematik
# (z.B. de-DE-Wavenet-G).
STIMMEN = {
    "de": "de-DE-Chirp3-HD-Aoede",
    "sv": "sv-SE-Chirp3-HD-Achernar",
    "es": "es-ES-Chirp3-HD-Aoede",
    "zh": "cmn-CN-Chirp3-HD-Aoede",
    "fr": "fr-FR-Chirp3-HD-Autonoe",
    "it": "it-IT-Chirp3-HD-Leda",
    "no": "nb-NO-Chirp3-HD-Achernar",
    "ru": "ru-RU-Chirp3-HD-Zephyr",
    "vi": "vi-VN-Chirp3-HD-Aoede",
    "pl": "pl-PL-Chirp3-HD-Zephyr",
    "en": "en-GB-Chirp3-HD-Achernar",
}

# Sprechtempo/Lautstaerke. Leer heisst Normalwert. Fuer eine Lern-App waere
# etwas langsamer denkbar: PROSODIE = {"speakingRate": 0.9}
#
# ACHTUNG bei Chirp3-HD: diese Stimmen nehmen kein SSML und unterstuetzen
# `pitch` nicht. `speakingRate` und `volumeGainDb` gehen. Wenn du hier etwas
# eintraegst, das die Stimme nicht kann, antwortet Google mit 400 - und das
# Skript bricht bei diesem Eintrag ab, statt es stillschweigend zu ignorieren.
PROSODIE = {}

# MP3, 24 kHz - derselbe Kompromiss wie beim Azure-Skript, damit die Dateien
# im Bucket nebeneinander gleich klingen.
AUDIOFORMAT = "MP3"
ABTASTRATE = 24000


# ---------------------------------------------------------------------------
# Gratiskontingent
# ---------------------------------------------------------------------------
# ACHTUNG, ANDERS ALS BEI AZURE: Google rechnet das Freikontingent JE
# STIMMKLASSE ab, nicht als eine Gesamtzahl. Wer Chirp3-HD und Standard
# mischt, hat zwei getrennte Toepfe. Deshalb zaehlt dieses Skript ebenfalls
# je Klasse.
#
# Die Zahlen unten sind ein Stand, der sich aendern kann - PRUEFE SIE gegen
# die aktuelle Preisseite, bevor du dich darauf verlaesst. Sie dienen hier
# nur der Warnung im Plan. Der verlaessliche harte Stopp ist `--budget` und
# das Tageskontingent, das du in der Cloud Console setzt.
KONTINGENT = {
    "Standard": 4_000_000,
    "Wavenet": 1_000_000,
    "Neural2": 1_000_000,
    "Polyglot": 1_000_000,
    "News": 1_000_000,
    "Chirp-HD": 1_000_000,
    "Chirp3-HD": 1_000_000,
    "Studio": 100_000,
}
RESERVE = 5_000

# Aus der Cloud Console abgelesen (2026-09-11), nicht geschaetzt:
# "Count of requests for Chirp3-HD voices per minute" = 200. Es gilt die
# STRENGSTE zutreffende Grenze, nicht die allgemeine - "All requests per
# minute" steht auf 1.000, aber die stimmklassen-eigene Grenze schlaegt sie.
# Andere Klassen haben andere Werte (Neural2 und Polyglot 1.000, Studio 500,
# Journey 30); wer STIMMEN oben auf eine andere Klasse umstellt, schaut hier
# nach und passt den Wert an.
#
# KEINE dieser elf Grenzen ist anpassbar ("Anpassbar: Nein" in der Konsole),
# und es gibt bei Text-to-Speech auch kein Zeichen- oder Tageskontingent.
# Die einzige harte Bremse gegen Verbrauch ist deshalb `--budget` in diesem
# Skript - aussen herum gibt es keine.
#
# 180 statt 200: etwas Luft, damit ein Wiederholungsversuch nach einem 429
# nicht selbst in die naechste Drosselung laeuft. Der Unterschied kostet
# bei 11.400 Dateien rund sechs Minuten.
ANFRAGEN_PRO_FENSTER = 180
FENSTER_SEKUNDEN = 60

# Tatsaechlicher Durchsatz, am 2026-09-11 ueber eine Minute gegen die
# Datenbank gemessen (241 -> 337 Saetze). Steht hier nur fuer die
# Laufzeit-Schaetzung im Plan und bremst nichts.
DURCHSATZ = 93


# ---------------------------------------------------------------------------
# Zugangsdaten
# ---------------------------------------------------------------------------
HIER = os.path.dirname(os.path.abspath(__file__))
ENV_DATEI = os.path.join(os.path.dirname(HIER), ".env")


def lies_env(name, pflicht=True):
    """Umgebung schlaegt Datei - so laesst sich ein Lauf einmalig mit einem
    anderen Schluessel fahren, ohne die .env anzufassen."""
    if os.environ.get(name):
        return os.environ[name]
    try:
        for zeile in open(ENV_DATEI, encoding="utf-8"):
            if zeile.startswith(name + "="):
                return zeile.split("=", 1)[1].strip().strip('"')
    except OSError:
        pass
    if pflicht:
        print("%s fehlt - weder in der Umgebung noch in %s" % (name, ENV_DATEI))
        sys.exit(1)
    return None


BUCKET = "vocab_audio"

# Der Anbieter steht IM SPEICHERPFAD (vocab_audio/<tabelle>/<anbieter>/...).
# Daran haengt die Frage "was ist noch offen?": eine Zeile, deren URL kein
# "/google/" enthaelt, gilt als nicht vertont und wird gemacht. Der Wechsel
# von ElevenLabs oder Azure zu Google braucht deshalb KEIN Zuruecksetzen von
# Hand - und die alten Dateien bleiben liegen, falls der Wechsel ein Fehler
# war.
ANBIETER = "google"

ZUSTANDSDATEI = os.path.join(HIER, ".vertone_google_stand.json")


# ---------------------------------------------------------------------------
# Was es zu vertonen gibt
# ---------------------------------------------------------------------------
# `textspalte`  Spalte mit dem TATSAECHLICH GESPROCHENEN Text. Bei Chinesisch
#               und Russisch ist das die Schrift (Hanzi/Kyrillisch), NICHT
#               Pinyin oder Lautschrift - die sind lateinischer Text und
#               wuerden falsch vorgelesen. Siehe CLAUDE.md, "Die Zeichen sind
#               die Infrastruktur, nicht der Lernstoff".
# `locale`      GOOGLES Sprachcode, nicht Azures. Der Unterschied ist keine
#               Kosmetik: Mandarin heisst bei Google `cmn-CN`, nicht `zh-CN`.
#               Wer die Azure-Tabelle uebernimmt, bekommt fuer Chinesisch
#               einen Fehler statt Audio. Alle elf Codes sind live gegen die
#               API geprueft.
# `ziel`        'url'  -> Spalte audio_url  (Text)
#               'urls' -> Spalte audio_urls (JSON-Array aus {url, text})
SAETZE = [
    ("de", "phrasebook_master",        "german",      "de-DE",  "url"),
    ("sv", "schwedisch_phrasebook",    "target_text", "sv-SE",  "url"),
    ("es", "spanisch_phrasebook",      "target_text", "es-ES",  "url"),
    ("zh", "chinesisch_phrasebook",    "target_text", "cmn-CN", "url"),
    ("fr", "franz_phrasebook",         "target_text", "fr-FR",  "url"),
    ("it", "italienisch_phrasebook",   "target_text", "it-IT",  "url"),
    ("no", "norwegisch_phrasebook",    "target_text", "nb-NO",  "url"),
    ("ru", "russisch_phrasebook",      "target_text", "ru-RU",  "url"),
    ("vi", "vietnamesisch_phrasebook", "target_text", "vi-VN",  "url"),
    ("pl", "polnisch_phrasebook",      "target_text", "pl-PL",  "url"),
    ("en", "englisch_phrasebook",      "target_text", "en-GB",  "url"),
]

WOERTER = [
    ("sv", "schwedisch_vocab",    "swedish",    "sv-SE",  "urls"),
    ("es", "spanisch_vocab",      "spanish",    "es-ES",  "urls"),
    ("zh", "chinesisch_vocab",    "hanzi",      "cmn-CN", "urls"),
    ("fr", "franz_vocab",         "french",     "fr-FR",  "urls"),
    ("it", "italienisch_vocab",   "italian",    "it-IT",  "urls"),
    ("no", "norwegisch_vocab",    "norwegian",  "nb-NO",  "urls"),
    ("ru", "russisch_vocab",      "russian",    "ru-RU",  "urls"),
    ("vi", "vietnamesisch_vocab", "vietnamese", "vi-VN",  "urls"),
    ("pl", "polnisch_vocab",      "polish",     "pl-PL",  "urls"),
    ("en", "englisch_vocab",      "english",    "en-GB",  "urls"),
]


# ---------------------------------------------------------------------------
# Zeichen zaehlen
# ---------------------------------------------------------------------------
def abrechenbare_zeichen(text):
    """Google zaehlt die Zeichen des EINGABETEXTES.

    Zwei Unterschiede zu Azure, beide zu unseren Gunsten:
      * Ein chinesisches Zeichen zaehlt EINFACH, nicht doppelt. Chinesisch
        ist dadurch mit Abstand die billigste Sprache im Bestand.
      * Wir schicken reinen Text, kein SSML. Bei SSML zaehlen die Tags mit -
        das ist der Grund, warum dieses Skript die PROSODIE ueber audioConfig
        setzt statt ueber <prosody>.
    """
    return len(text)


def klasse_von_stimme(name):
    """'de-DE-Wavenet-G' -> 'Wavenet', 'de-DE-Chirp3-HD-Aoede' ->
    'Chirp3-HD'. Gebraucht, weil das Freikontingent je Klasse zaehlt."""
    teile = name.split("-")
    if len(teile) <= 3:
        return teile[2] if len(teile) > 2 else "?"
    return "-".join(teile[2:-1])


# ---------------------------------------------------------------------------
# Ratenbegrenzung
# ---------------------------------------------------------------------------
class Ratenbremse:
    """Gleitendes Fenster statt starrem sleep - sonst zaehlen die
    Wiederholungsversuche nach einem 429 nicht mit und wir laufen genau in
    die naechste Drosselung hinein."""

    def __init__(self, anzahl=ANFRAGEN_PRO_FENSTER, fenster=FENSTER_SEKUNDEN):
        self.anzahl = anzahl
        self.fenster = fenster
        self.zeitpunkte = []

    def warte(self):
        jetzt = time.monotonic()
        self.zeitpunkte = [t for t in self.zeitpunkte if jetzt - t < self.fenster]
        if len(self.zeitpunkte) >= self.anzahl:
            pause = self.fenster - (jetzt - self.zeitpunkte[0]) + 0.25
            if pause > 0:
                time.sleep(pause)
            jetzt = time.monotonic()
            self.zeitpunkte = [t for t in self.zeitpunkte if jetzt - t < self.fenster]
        self.zeitpunkte.append(time.monotonic())

    def merke_fremdversuch(self):
        """Auch ein fehlgeschlagener Versuch zaehlt gegen das Fenster."""
        self.zeitpunkte.append(time.monotonic())


class Kontingentende(Exception):
    """Weiterlaufen waere sinnlos - sauber abbrechen und Stand sichern."""


# ---------------------------------------------------------------------------
# Google Cloud Text-to-Speech
# ---------------------------------------------------------------------------
class Google:
    BASIS = "https://texttospeech.googleapis.com/v1"

    def __init__(self, key):
        self.kopf = {"X-Goog-Api-Key": key}
        self.sitzung = requests.Session()
        self._stimmen = None

    def stimmen(self):
        if self._stimmen is None:
            r = self.sitzung.get(self.BASIS + "/voices", headers=self.kopf, timeout=30)
            r.raise_for_status()
            self._stimmen = r.json().get("voices", [])
        return self._stimmen

    def pruefe_stimmen(self, gebraucht):
        """Stimmen VOR dem Lauf gegen die Live-Liste halten.

        Ein Tippfehler im Namen ergibt sonst je Eintrag einen 400er - der
        Lauf liefe stundenlang und produzierte nichts. Einmal frueh scheitern
        ist besser als tausendfach spaet."""
        vorhanden = {s["name"] for s in self.stimmen()}
        falsch = sorted(set(gebraucht) - vorhanden)
        if not falsch:
            return
        print("Diese Stimmen gibt es nicht:")
        for name in falsch:
            lc = "-".join(name.split("-")[:2])
            passend = sorted(
                s["name"] for s in self.stimmen() if lc in s.get("languageCodes", [])
            )
            print("  %s" % name)
            print("      stattdessen z.B.: %s" % (", ".join(passend[:6]) or "(keine)"))
        print()
        print("Eintragen in STIMMEN oben in dieser Datei.")
        sys.exit(1)

    def sprich(self, text, locale, stimme, bremse=None, versuche=5):
        """Gibt die MP3-Bytes zurueck. Wirft bei endgueltigem Fehlschlag."""
        audio = {"audioEncoding": AUDIOFORMAT, "sampleRateHertz": ABTASTRATE}
        audio.update(PROSODIE)
        koerper = {
            "input": {"text": text},
            "voice": {"languageCode": locale, "name": stimme},
            "audioConfig": audio,
        }
        wartezeit = 2.0
        letzter = None

        for _ in range(versuche):
            r = self.sitzung.post(
                self.BASIS + "/text:synthesize",
                json=koerper,
                headers=dict(self.kopf, **{"Content-Type": "application/json"}),
                timeout=60,
            )
            if r.status_code == 200:
                inhalt = r.json().get("audioContent")
                if inhalt:
                    return base64.b64decode(inhalt)
                letzter = "200, aber ohne audioContent"
            else:
                letzter = "%s %s" % (r.status_code, r.text[:200])

            if r.status_code == 429:
                pause = wartezeit
                try:
                    pause = float(r.headers.get("Retry-After", wartezeit))
                except (TypeError, ValueError):
                    pass
                print("      gedrosselt (429), warte %.0fs ..." % pause)
                time.sleep(pause)
                wartezeit = min(wartezeit * 2, 120)
                if bremse:
                    bremse.merke_fremdversuch()
                continue

            if r.status_code in (500, 502, 503, 504):
                print("      Serverfehler %s, warte %.0fs ..." % (r.status_code, wartezeit))
                time.sleep(wartezeit)
                wartezeit = min(wartezeit * 2, 120)
                if bremse:
                    bremse.merke_fremdversuch()
                continue

            if r.status_code in (401, 403):
                # Bei Google heisst 403 oft nicht "Schluessel falsch", sondern
                # "API nicht aktiviert" oder "Schluessel auf andere APIs
                # eingeschraenkt". Deshalb der ausfuehrliche Hinweis - sonst
                # sucht man am falschen Ende.
                raise Kontingentende(
                    "Zugang abgelehnt (%s). Pruefen: ist die Cloud Text-to-Speech "
                    "API im Projekt aktiviert, und erlaubt die API-Einschraenkung "
                    "des Schluessels genau diese API? %s" % (r.status_code, r.text[:300])
                )

            # 400 und Aehnliches: an diesem Text oder dieser Stimme liegt es,
            # Wiederholen hilft nicht.
            raise RuntimeError(letzter)

        raise RuntimeError("nach %d Versuchen aufgegeben: %s" % (versuche, letzter))


# ---------------------------------------------------------------------------
# Supabase (ueber die REST-API, ohne Zusatzabhaengigkeit)
# ---------------------------------------------------------------------------
class Supa:
    def __init__(self, url, key):
        self.url = url.rstrip("/")
        self.kopf = {"apikey": key, "Authorization": "Bearer %s" % key}
        self.sitzung = requests.Session()

    def hole_alle(self, tabelle, spalten):
        zeilen, offset = [], 0
        while True:
            r = self.sitzung.get(
                "%s/rest/v1/%s" % (self.url, tabelle),
                params={"select": spalten, "limit": 1000, "offset": offset},
                headers=self.kopf,
                timeout=60,
            )
            r.raise_for_status()
            teil = r.json()
            zeilen += teil
            if len(teil) < 1000:
                return zeilen
            offset += 1000

    def hat_spalte(self, tabelle, spalte):
        r = self.sitzung.get(
            "%s/rest/v1/%s" % (self.url, tabelle),
            params={"select": spalte, "limit": 1},
            headers=self.kopf,
            timeout=30,
        )
        return r.status_code == 200

    def lade_hoch(self, pfad, daten):
        r = self.sitzung.post(
            "%s/storage/v1/object/%s/%s" % (self.url, BUCKET, pfad),
            data=daten,
            headers=dict(self.kopf, **{"Content-Type": "audio/mpeg", "x-upsert": "true"}),
            timeout=120,
        )
        if r.status_code not in (200, 201):
            raise RuntimeError("Upload fehlgeschlagen: %s %s" % (r.status_code, r.text[:200]))
        return "%s/storage/v1/object/public/%s/%s" % (self.url, BUCKET, pfad)

    def schreibe(self, tabelle, zeilen_id, feld, wert):
        r = self.sitzung.patch(
            "%s/rest/v1/%s" % (self.url, tabelle),
            params={"id": "eq.%s" % zeilen_id},
            json={feld: wert},
            headers=dict(
                self.kopf,
                **{"Content-Type": "application/json", "Prefer": "return=minimal"}
            ),
            timeout=30,
        )
        if r.status_code not in (200, 204):
            raise RuntimeError("DB-Update fehlgeschlagen: %s %s" % (r.status_code, r.text[:200]))


# ---------------------------------------------------------------------------
# Dateinamen
# ---------------------------------------------------------------------------
def dateiname(zeilen_id, text):
    """`{id}_{lesbar}.mp3`, wie bei den bisherigen Vertonungen. Bei Schriften
    ohne lateinische Entsprechung (Chinesisch, Russisch) bleibt nach dem
    Abstreifen nichts uebrig - dann haengt ein kurzer Hash an, damit die
    Datei nicht `123_.mp3` heisst und mit anderen kollidiert."""
    zerlegt = unicodedata.normalize("NFKD", text)
    lesbar = "".join(c for c in zerlegt if not unicodedata.combining(c))
    lesbar = "".join(c if (c.isalnum() and c.isascii()) else "_" for c in lesbar)
    lesbar = "_".join(t for t in lesbar.split("_") if t).lower()[:40]
    if not lesbar:
        lesbar = hashlib.sha1(text.encode("utf-8")).hexdigest()[:10]
    return "%s_%s.mp3" % (zeilen_id, lesbar)


def speicherpfad(tabelle, zeilen_id, text):
    return "%s/%s/%s" % (tabelle, ANBIETER, dateiname(zeilen_id, text))


def schon_vertont(wert):
    """Ist dieser Eintrag von DIESEM Anbieter vertont? Ein Eintrag von einem
    anderen Anbieter zaehlt bewusst als offen - siehe ANBIETER oben."""
    if not wert:
        return False
    marke = "/%s/" % ANBIETER
    if isinstance(wert, str):
        return marke in wert
    if isinstance(wert, list):
        return any(marke in (e.get("url") or "") for e in wert if isinstance(e, dict))
    return False


# ---------------------------------------------------------------------------
# Stand ueber Laeufe hinweg (nur Statistik - die Wahrheit steht in der DB)
# ---------------------------------------------------------------------------
def lade_stand():
    monat = time.strftime("%Y-%m")
    try:
        with open(ZUSTANDSDATEI, encoding="utf-8") as f:
            s = json.load(f)
        if s.get("monat") == monat:
            s.setdefault("klassen", {})
            s.setdefault("dateien", 0)
            return s
    except Exception:
        pass
    # Neuer Monat: Google setzt das Freikontingent zurueck, wir also auch.
    return {"monat": monat, "klassen": {}, "dateien": 0}


def sichere_stand(stand):
    with open(ZUSTANDSDATEI, "w", encoding="utf-8") as f:
        json.dump(stand, f, ensure_ascii=False, indent=1)


def verbraucht(stand, klasse):
    return stand["klassen"].get(klasse, 0)


def bucht(stand, klasse, zeichen):
    stand["klassen"][klasse] = verbraucht(stand, klasse) + zeichen


# ---------------------------------------------------------------------------
# Arbeitsvorrat zusammenstellen
# ---------------------------------------------------------------------------
def sammle(supa, aufgaben, sprachen, erneut):
    """Liefert je Aufgabe die noch offenen Zeilen. Was schon eine
    Google-Audio-URL hat, faellt raus - DAS ist die Wiederaufnahme nach
    einem Abbruch."""
    vorrat = []
    for sprache, tabelle, textspalte, locale, ziel in aufgaben:
        if sprachen and sprache not in sprachen:
            continue

        stimme = STIMMEN.get(sprache)
        if not stimme:
            print("  %-28s uebersprungen - keine Stimme fuer '%s' eingetragen"
                  % (tabelle, sprache))
            continue

        zielspalte = "audio_url" if ziel == "url" else "audio_urls"
        if not supa.hat_spalte(tabelle, zielspalte):
            print("  %-28s UEBERSPRUNGEN - Spalte '%s' fehlt in dieser Tabelle"
                  % (tabelle, zielspalte))
            continue

        zeilen = supa.hole_alle(tabelle, "id,%s,%s" % (textspalte, zielspalte))
        offen = []
        for z in zeilen:
            text = (z.get(textspalte) or "").strip()
            if not text:
                continue
            if not erneut and schon_vertont(z.get(zielspalte)):
                continue
            offen.append({"id": z["id"], "text": text})

        vorrat.append({
            "sprache": sprache,
            "tabelle": tabelle,
            "locale": locale,
            "stimme": stimme,
            "klasse": klasse_von_stimme(stimme),
            "ziel": ziel,
            "zielspalte": zielspalte,
            "gesamt": len(zeilen),
            "offen": offen,
            "zeichen": sum(abrechenbare_zeichen(o["text"]) for o in offen),
        })
    return vorrat


def zeige_plan(vorrat, stand):
    print()
    print("%-30s %-30s %7s %9s" % ("Tabelle", "Stimme", "offen", "Zeichen"))
    print("-" * 80)
    z_summe = d_summe = 0
    je_klasse = {}
    for v in vorrat:
        print("%-30s %-30s %7d %9s"
              % (v["tabelle"], v["stimme"], len(v["offen"]),
                 "{:,}".format(v["zeichen"])))
        z_summe += v["zeichen"]
        d_summe += len(v["offen"])
        je_klasse[v["klasse"]] = je_klasse.get(v["klasse"], 0) + v["zeichen"]
    print("-" * 80)
    print("%-30s %-30s %7d %9s" % ("GESAMT", "", d_summe, "{:,}".format(z_summe)))
    print()

    # Je Klasse, weil Google das Freikontingent so abrechnet.
    print("  Freikontingent je Stimmklasse (Zahlen aus dem Skriptkopf - PRUEFEN):")
    knapp = False
    for kl in sorted(je_klasse):
        grenze = KONTINGENT.get(kl)
        schon = verbraucht(stand, kl)
        brauch = je_klasse[kl]
        if grenze:
            rest = grenze - schon
            print("    %-11s Lauf %9s | Monat bisher %9s | frei %9s von %9s"
                  % (kl, "{:,}".format(brauch), "{:,}".format(schon),
                     "{:,}".format(rest), "{:,}".format(grenze)))
            if brauch > rest - RESERVE:
                knapp = True
        else:
            print("    %-11s Lauf %9s | Kontingent unbekannt"
                  % (kl, "{:,}".format(brauch)))

    # GEMESSEN, nicht aus dem Ratenlimit gerechnet (2026-09-11): der erste
    # grosse Lauf schaffte 93 Dateien/Minute, obwohl 180 erlaubt waeren. Das
    # Ratenlimit ist gar nicht der Engpass - je Datei laufen DREI
    # Netzwerkrunden nacheinander (Synthese bei Google, Upload zu Supabase,
    # DB-Eintrag), und deren Summe bremst staerker. Wer hier wieder mit
    # ANFRAGEN_PRO_FENSTER rechnet, verspricht die Haelfte der echten Zeit.
    stunden = d_summe / DURCHSATZ / 60.0
    print()
    print("  Laufzeit bei gemessenen %d Dateien/Minute: %.1f Stunden (%s Dateien)"
          % (DURCHSATZ, stunden, "{:,}".format(d_summe)))
    print("  (Das Ratenlimit von %d/Minute wird dabei nie erreicht.)"
          % ANFRAGEN_PRO_FENSTER)
    if knapp:
        print()
        print("  ACHTUNG: mindestens eine Stimmklasse passt so nicht mehr ins")
        print("  Freikontingent dieses Monats. Das Skript stoppt von selbst,")
        print("  bevor es die Wand trifft, und laeuft spaeter mit 'los' weiter.")
    print()


# ---------------------------------------------------------------------------
# Der eigentliche Lauf
# ---------------------------------------------------------------------------
def vertone(supa, google, vorrat, stand, limit, budget):
    bremse = Ratenbremse()
    fertig = fehler = 0
    verbraucht_im_lauf = 0
    begonnen = time.time()

    try:
        for v in vorrat:
            if not v["offen"]:
                continue
            print()
            print("=== %s (%s) - %d offen ==="
                  % (v["tabelle"], v["stimme"], len(v["offen"])))

            for i, eintrag in enumerate(v["offen"], 1):
                if limit and fertig >= limit:
                    raise Kontingentende("--limit %d erreicht" % limit)

                kosten = abrechenbare_zeichen(eintrag["text"])
                grenze = KONTINGENT.get(v["klasse"])
                if grenze and verbraucht(stand, v["klasse"]) + kosten > grenze - RESERVE:
                    raise Kontingentende(
                        "Freikontingent der Klasse %s fast aufgebraucht (%s von %s Zeichen)"
                        % (v["klasse"], "{:,}".format(verbraucht(stand, v["klasse"])),
                           "{:,}".format(grenze)))
                if budget and verbraucht_im_lauf + kosten > budget:
                    raise Kontingentende("--budget %s Zeichen erreicht" % "{:,}".format(budget))

                bremse.warte()
                try:
                    audio = google.sprich(eintrag["text"], v["locale"], v["stimme"], bremse)
                except Kontingentende:
                    raise
                except Exception as e:
                    fehler += 1
                    print("  [%d/%d] FEHLER bei %s %r: %s"
                          % (i, len(v["offen"]), eintrag["id"], eintrag["text"][:30], e))
                    continue

                # Erst hochladen, DANN die DB setzen. Andersherum stuende in
                # der Datenbank eine URL auf eine Datei, die es nicht gibt -
                # und der naechste Lauf wuerde die Zeile als erledigt
                # ueberspringen. Ein verwaistes MP3 ohne DB-Eintrag ist
                # dagegen harmlos: der naechste Lauf ueberschreibt es.
                pfad = speicherpfad(v["tabelle"], eintrag["id"], eintrag["text"])
                try:
                    url = supa.lade_hoch(pfad, audio)
                    wert = url if v["ziel"] == "url" else [{"url": url, "text": eintrag["text"]}]
                    supa.schreibe(v["tabelle"], eintrag["id"], v["zielspalte"], wert)
                except Exception as e:
                    fehler += 1
                    print("  [%d/%d] Upload/DB-Fehler bei %s: %s"
                          % (i, len(v["offen"]), eintrag["id"], e))
                    # Die Zeichen sind trotzdem weg - Google rechnet die
                    # Synthese ab, nicht unseren Upload.
                    bucht(stand, v["klasse"], kosten)
                    verbraucht_im_lauf += kosten
                    continue

                bucht(stand, v["klasse"], kosten)
                stand["dateien"] += 1
                verbraucht_im_lauf += kosten
                fertig += 1

                if fertig % 25 == 0:
                    sichere_stand(stand)
                    minuten = (time.time() - begonnen) / 60.0
                    print("  [%d/%d] %r | %d fertig, %s Zeichen (%s), %.0f Min"
                          % (i, len(v["offen"]), eintrag["text"][:34], fertig,
                             "{:,}".format(verbraucht(stand, v["klasse"])),
                             v["klasse"], minuten))

    except Kontingentende as e:
        print()
        print("### Sauber gestoppt: %s" % e)
    except KeyboardInterrupt:
        print()
        print("### Abgebrochen (Strg+C).")
    finally:
        sichere_stand(stand)

    dauer = (time.time() - begonnen) / 60.0
    print()
    print("Fertig: %d Dateien in %.0f Minuten, %d Fehler." % (fertig, dauer, fehler))
    for kl in sorted(stand["klassen"]):
        grenze = KONTINGENT.get(kl)
        anteil = ((" (%.1f%% des Freikontingents)"
                   % (stand["klassen"][kl] / float(grenze) * 100)) if grenze else "")
        print("  %-11s diesen Monat %s Zeichen%s"
              % (kl, "{:,}".format(stand["klassen"][kl]), anteil))
    if fertig:
        print("Erneut 'los' aufrufen setzt genau hier fort - was eine Google-URL")
        print("hat, wird nicht noch einmal vertont.")


# ---------------------------------------------------------------------------
def main():
    p = argparse.ArgumentParser(description="Google-Vertonung fuer alle Sprachen")
    p.add_argument("befehl", choices=["stimmen", "plan", "los"])
    p.add_argument("--sprache", help="z.B. de,sv,zh - Vorgabe: alle")
    p.add_argument("--nur", choices=["saetze", "woerter"], help="Vorgabe: beides")
    p.add_argument("--limit", type=int, help="hoechstens N Dateien in diesem Lauf")
    p.add_argument("--budget", type=int, help="hoechstens N Zeichen in diesem Lauf")
    p.add_argument("--klasse", help="Stimmklasse fuer 'stimmen', z.B. Chirp3-HD")
    p.add_argument("--erneut", action="store_true",
                   help="auch die von Google schon vertonten Eintraege neu machen "
                        "(kostet volles Kontingent!). Fuer einen Anbieterwechsel "
                        "NICHT noetig - Dateien eines anderen Anbieters gelten "
                        "ohnehin als offen.")
    a = p.parse_args()

    # 'plan' redet nie mit Google - der Trockenlauf muss also auch ohne
    # Schluessel funktionieren, sonst kann man vor dem Anlegen des Schluessels
    # nicht nachsehen, worauf man sich einlaesst.
    key = lies_env("GOOGLE_TTS_API_KEY", pflicht=(a.befehl != "plan"))
    google = Google(key) if key else None

    if a.befehl == "stimmen":
        gesucht = sorted(set(t[3] for t in SAETZE) | set(t[3] for t in WOERTER))
        try:
            alle = google.stimmen()
        except Exception as e:
            print("Stimmenliste nicht abrufbar: %s" % e)
            sys.exit(1)
        print("Stimmen fuer unsere elf Sprachen%s:"
              % (" (Klasse %s)" % a.klasse if a.klasse else ""))
        print()
        for locale in gesucht:
            passend = [s for s in alle if locale in s.get("languageCodes", [])]
            if a.klasse:
                passend = [s for s in passend if a.klasse.lower() in s["name"].lower()]
            print("  %s" % locale)
            for s in sorted(passend, key=lambda x: (x.get("ssmlGender", ""), x["name"])):
                print("      %-36s %-8s %s Hz"
                      % (s["name"], s.get("ssmlGender", ""),
                         s.get("naturalSampleRateHertz", "")))
            if not passend:
                print("      (keine gefunden)")
            print()
        print("Eintragen in STIMMEN oben in dieser Datei.")
        return

    supa = Supa(lies_env("SUPABASE_URL"), lies_env("SUPABASE_SERVICE_ROLE_KEY"))
    sprachen = set(a.sprache.split(",")) if a.sprache else None

    aufgaben = []
    if a.nur != "woerter":
        aufgaben += SAETZE
    if a.nur != "saetze":
        aufgaben += WOERTER

    print("Lese Datenbank ...")
    vorrat = sammle(supa, aufgaben, sprachen, a.erneut)
    stand = lade_stand()
    zeige_plan(vorrat, stand)

    if a.befehl == "plan":
        print("Trockenlauf - es wurde nichts vertont und nichts verbraucht.")
        return

    if not sum(len(v["offen"]) for v in vorrat):
        print("Nichts zu tun - alles schon vertont.")
        return

    # Erst hier, damit 'plan' ohne Schluessel durchlaeuft.
    google.pruefe_stimmen([v["stimme"] for v in vorrat if v["offen"]])
    vertone(supa, google, vorrat, stand, a.limit, a.budget)


if __name__ == "__main__":
    main()
