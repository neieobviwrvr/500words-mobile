# -*- coding: utf-8 -*-
"""Wortart fuer die restlichen chinesischen Vokabeln (2026-09-07).

`wortarten_zh.py` deckte Modul 1+2 ab, 58 von 548 Woertern; der Rest fiel in
der App auf `wortartAusDeutsch()` zurueck - eine Heuristik, die nur drei
Eimer trifft (Nomen / Verb / Sonstiges). Adjektive und Pronomen landeten
gemeinsam in "Sonstiges" und galten damit als gleichartig.

**Warum das mehr als Kosmetik ist:** der Kurs-Generator entscheidet ueber
dieselbe Wortart, welche Woerter er in einen Satzrahmen wiederverwenden darf
(siehe bauplan.py, R3). Solange Adjektive als "Sonstiges" gelten, kommt
"ich habe wuetend" durch.

VORGEHEN
--------
Vorgeschlagen aus der deutschen Bedeutung (Grossschreibung -> Nomen,
Infinitivendung -> Verb, Wortlisten fuer Funktionswoerter), dann Zeile fuer
Zeile durchgesehen. Die Durchsicht war noetig - der Vorschlag hatte `是`
(sein) als Pronomen, `好吃` (lecker) als Sonstiges und `发烧` (Fieber haben)
als Nomen.

SECHS KLASSEN, wie in wortarten_zh.py: Nomen, Verb, Adjektiv, Pronomen,
Konjunktion, Sonstiges. "Sonstiges" ist kein Restmuell, sondern der
ungefaerbte Eimer fuer alles, was das Vierfarben-Schema nicht kennt -
Adverbien, Praepositionen, Zahlen, Zaehlwoerter, Partikeln und feste
Wendungen.

Nicht von Muttersprachlern geprueft. Die Klassifizierung folgt der DEUTSCHEN
Bedeutung; wo Chinesisch anders schneidet (`好看` ist im Chinesischen ein
Adjektiv, deutsch "schoen anzusehen" klingt nach Verb), ist die chinesische
Sicht massgeblich.
"""

# Nur die Korrekturen am regelbasierten Vorschlag - alles andere ergibt sich
# aus der Regel (siehe `klasse()` unten). So bleibt sichtbar, wo die Regel
# danebenliegt, statt 490 Zeilen ohne Begruendung zu fuehren.
KORREKTUR = {
    # --- Regel hielt sie fuer Nomen (Grossschreibung), sind es aber nicht --
    "过": "Sonstiges",        # Erfahrungspartikel
    "得": "Sonstiges",        # Partikel nach dem Verb
    "们": "Sonstiges",        # Pluralpartikel
    "次": "Sonstiges",        # Zaehlwort "Mal"
    "张": "Sonstiges",        # Zaehlwort fuer Flaches
    "本": "Sonstiges",        # Zaehlwort fuer Buecher
    "位": "Sonstiges",        # Zaehlwort fuer Personen
    "杯": "Sonstiges",        # Zaehlwort "Glas"
    "对不起": "Sonstiges",    # Entschuldigung - feste Wendung
    "干杯": "Sonstiges",      # Prost - feste Wendung
    "救命": "Sonstiges",      # Hilfe! - Ausruf
    "发烧": "Verb",           # Fieber haben
    "运动": "Verb",           # Sport treiben
    "上课": "Verb",           # Unterricht haben
    "晚点": "Verb",           # Verspaetung haben

    # --- Regel hielt sie fuer Verben (Endung -en/-n) ----------------------
    "旁边": "Sonstiges",      # daneben - Ortswort
    "就": "Sonstiges",        # dann
    "最": "Sonstiges",        # am meisten
    "最近": "Sonstiges",      # kuerzlich
    "再见": "Sonstiges",      # auf Wiedersehen
    "不客气": "Sonstiges",    # gern geschehen
    "男女朋友": "Nomen",      # fester Freund oder feste Freundin
    "西药": "Nomen",          # westliche Medizin
    "好看": "Adjektiv",       # schoen anzusehen
    "别人": "Pronomen",       # die anderen

    # --- Regel hielt sie fuer Pronomen ------------------------------------
    "是": "Verb",             # sein - das wichtigste Verb ueberhaupt
    "在": "Verb",             # sein (Ort) / sich befinden
    "都": "Sonstiges",        # alle - steht adverbial vor dem Verb

    # --- Regel hielt sie fuer Adjektive -----------------------------------
    "非常": "Sonstiges",      # ausserordentlich - Gradadverb
    "一下": "Sonstiges",      # kurz mal - verbales Zaehlwort

    # --- Regel liess sie in "Sonstiges", sind aber Adjektive --------------
    "好吃": "Adjektiv",       # lecker (zu essen)
    "好喝": "Adjektiv",       # lecker (zu trinken)
    "棒": "Adjektiv",         # toll
    "忙": "Adjektiv",         # beschaeftigt
    "难受": "Adjektiv",       # unwohl
    "清楚": "Adjektiv",       # klar
    "舒服": "Adjektiv",       # wohl
    "坏": "Adjektiv",         # kaputt
    "不错": "Adjektiv",       # ganz gut
    "够": "Adjektiv",         # genug

    # --- Regel liess sie in "Sonstiges", sind aber Nomen oder Verben ------
    "晴天": "Nomen",          # sonniger Tag
    "阴天": "Nomen",          # bewoelkter Tag
    "发票": "Nomen",          # offizielle Quittung
    "假装": "Verb",           # so tun als ob
    "分开": "Verb",           # sich trennen
}

# --- Die Regel selbst ------------------------------------------------------
#
# Klassifiziert ueber die deutsche Bedeutung. Sie traegt rund neun Zehntel;
# die Ausnahmen stehen oben.

PRONOMEN = {
    "ich", "du", "er", "sie", "es", "wir", "ihr", "man", "mein", "dein",
    "dies", "diese", "dieser", "dieses", "jene", "jener", "welche", "welcher",
    "wer", "was", "jeder", "jede", "alles", "etwas", "nichts", "jemand",
    "niemand", "ihn", "ihm", "uns", "euch",
}
KONJUNKTION = {
    "und", "aber", "oder", "denn", "weil", "dass", "wenn", "obwohl", "damit",
    "waehrend", "während", "sondern", "deshalb", "trotzdem", "falls", "ob",
}
BESCHREIBUNG = {
    "Fragepartikel", "Zustandspartikel", "Vorschlagspartikel",
    "Genitiv- / Attributpartikel", "Zählmarke (allgemein)",
}
ADJEKTIV = {
    "groß", "klein", "gut", "schlecht", "neu", "alt", "jung", "teuer",
    "billig", "günstig", "schön", "hübsch", "hässlich", "lang", "kurz",
    "hoch", "niedrig", "weit", "nah", "schnell", "langsam", "warm", "kalt",
    "heiß", "voll", "leer", "schwer", "leicht", "stark", "schwach", "dick",
    "dünn", "sauber", "schmutzig", "laut", "leise", "hell", "dunkel", "süß",
    "sauer", "salzig", "scharf", "frisch", "müde", "krank", "gesund",
    "glücklich", "traurig", "wütend", "froh", "fröhlich", "satt", "hungrig",
    "durstig", "richtig", "falsch", "wichtig", "einfach", "schwierig",
    "interessant", "langweilig", "bequem", "praktisch", "sicher",
    "gefährlich", "möglich", "fertig", "bereit", "frei", "offen",
    "geschlossen", "rot", "blau", "gelb", "grün", "schwarz", "weiß", "grau",
    "braun", "nett", "freundlich", "klug", "dumm", "lustig", "ruhig",
    "verheiratet", "schlank", "niedlich", "toll",
}
SONSTIGES = {
    "sehr", "zu", "auch", "schon", "noch", "immer", "nie", "oft", "manchmal",
    "selten", "jetzt", "heute", "morgen", "gestern", "abends", "morgens",
    "vormittags", "mittags", "nachmittags", "hier", "dort", "oben", "unten",
    "vorne", "hinten", "links", "rechts", "drinnen", "draußen", "außen",
    "zusammen", "allein", "wieder", "nochmal", "vielleicht", "wirklich",
    "bestimmt", "natürlich", "leider", "besonders", "ziemlich", "genug",
    "fast", "nur", "in", "auf", "unter", "über", "vor", "hinter", "neben",
    "zwischen", "an", "bei", "mit", "ohne", "für", "gegen", "von", "aus",
    "nach", "seit", "bis", "durch", "um", "wo", "wann", "wie", "warum",
    "nicht", "kein", "keine", "ja", "nein", "doch", "bitte", "danke",
    "eins", "zwei", "drei", "vier", "fünf", "sechs", "sieben", "acht",
    "neun", "zehn", "elf", "zwölf", "hundert", "tausend", "null", "beide",
    "viel", "viele", "wenig", "wenige", "mehr", "weniger", "halb", "ganz",
    "erste", "zweite", "dritte", "gegenüber", "gleich", "einige", "andere",
}
ADJ_SUFFIX = ("ig", "lich", "isch", "sam", "bar", "haft", "los", "voll")


def erste_bedeutung(text):
    """Erste Bedeutung ohne Klammerzusatz - wie kurzbedeutung() im Generator."""
    roh = (text or "").strip()
    tiefe, aus = 0, []
    for z in roh:
        if z == "(":
            tiefe += 1
        elif z == ")":
            tiefe = max(0, tiefe - 1)
        elif tiefe == 0 and z in ",;/":
            break
        elif tiefe == 0:
            aus.append(z)
    return "".join(aus).strip()


def klasse(hanzi, german):
    """Wortart eines chinesischen Worts - Ausnahme schlaegt Regel."""
    if hanzi in KORREKTUR:
        return KORREKTUR[hanzi]
    ganz = (german or "").strip()
    if ganz in BESCHREIBUNG:
        return "Sonstiges"
    w = erste_bedeutung(ganz)
    if not w:
        return "Sonstiges"
    k = w.lower()
    if k in PRONOMEN:
        return "Pronomen"
    if k in KONJUNKTION:
        return "Konjunktion"
    if k in ADJEKTIV:
        return "Adjektiv"
    if k in SONSTIGES:
        return "Sonstiges"
    if w[:1].isupper():
        return "Nomen"
    if k.endswith(ADJ_SUFFIX):
        return "Adjektiv"
    if k.endswith(("en", "n")) and len(k) > 2:
        return "Verb"
    return "Sonstiges"


# ---------------------------------------------------------------------------
# Einspielen - dieselbe Mechanik wie wortarten_zh.py, nur fuer den Rest.
#
#   python wortarten_zh_rest.py pruefe
#   python wortarten_zh_rest.py spiel_ein          (Probelauf)
#   python wortarten_zh_rest.py spiel_ein --echt
#
# Es wird NUR geschrieben, wo die Spalte noch leer ist: die 58 von Hand
# klassifizierten Woerter aus wortarten_zh.py bleiben unangetastet.
# ---------------------------------------------------------------------------
if __name__ == "__main__":
    import json
    import os
    import sys
    import urllib.parse
    import urllib.request
    from collections import Counter

    if hasattr(sys.stdout, "reconfigure"):
        sys.stdout.reconfigure(encoding="utf-8", errors="replace")

    HIER = os.path.dirname(os.path.abspath(__file__))
    SPRACHLISTEN = os.path.dirname(HIER)
    TABELLE = "chinesisch_vocab"

    def lies_env(name):
        for zeile in open(os.path.join(SPRACHLISTEN, ".env"), encoding="utf-8"):
            if zeile.startswith(name + "="):
                return zeile.split("=", 1)[1].strip().strip('"')
        raise SystemExit(name + " nicht gefunden")

    URL, KEY = lies_env("SUPABASE_URL"), lies_env("SUPABASE_SERVICE_ROLE_KEY")

    def rest(pfad, methode="GET", koerper=None):
        kopf = {"apikey": KEY, "Authorization": "Bearer " + KEY,
                "Content-Type": "application/json", "Prefer": "return=minimal"}
        d = json.dumps(koerper, ensure_ascii=False).encode("utf-8") if koerper else None
        r = urllib.request.Request(URL + "/rest/v1/" + pfad, data=d,
                                   headers=kopf, method=methode)
        with urllib.request.urlopen(r) as a:
            t = a.read().decode("utf-8")
            return json.loads(t) if t.strip() else []

    zeilen, off = [], 0
    while True:
        teil = rest(f"{TABELLE}?select=hanzi,german,wortart&limit=1000&offset={off}")
        zeilen += teil
        if len(teil) < 1000:
            break
        off += 1000

    offen = [z for z in zeilen if not z.get("wortart") and z.get("hanzi")]
    plan = [(z["hanzi"], klasse(z["hanzi"], z["german"])) for z in offen]
    print(f"{len(zeilen)} Zeilen, {len(zeilen) - len(offen)} schon klassifiziert, "
          f"{len(offen)} offen")
    print("  Vorschlag:", dict(Counter(k for _, k in plan).most_common()))

    befehl = sys.argv[1] if len(sys.argv) > 1 else "pruefe"
    if befehl != "spiel_ein":
        raise SystemExit(0)
    if "--echt" not in sys.argv:
        print("\n  Probelauf - nichts geschrieben. Mit --echt wiederholen.")
        raise SystemExit(0)

    for i, (hanzi, wortart) in enumerate(plan, 1):
        rest(f"{TABELLE}?hanzi=eq.{urllib.parse.quote(hanzi)}", "PATCH",
             {"wortart": wortart})
        if i % 100 == 0:
            print(f"    {i}/{len(plan)}")
    print(f"  {len(plan)} Zeilen geschrieben.")
