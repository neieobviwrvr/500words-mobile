# -*- coding: utf-8 -*-
"""Traegt die Verbformen in `norwegisch_vocab.forms` ein.

Braucht die Spalte aus Migration 20260904120000_norwegisch_verbformen.sql.

**Bokmaal.** Die Formen folgen der Standardnorm; wo Bokmaal zwei Varianten
erlaubt (snakket/snakka, boka/boken), steht die konservative -et/-en-Form.
Das ist die Form, die in Lehrbuechern und Untertiteln steht, und die
Sprachausgabe kommt damit zuverlaessiger klar.

**Die vier Klassen, zur Orientierung beim Nachtragen:**

    1  -et      snakke  -> snakker, snakket, snakket
    2  -te/-de  spise   -> spiser,  spiste,  spist
                leve    -> lever,   levde,   levd
    3  -dde     bo      -> bor,     bodde,   bodd     (einsilbig, Vokalende)
    stark       drikke  -> drikker, drakk,   drukket  (Vokalwechsel)

**Die neun Verben, an denen jede Regel scheitert** - und zugleich die
haeufigsten der Sprache: være/er, kunne/kan, ville/vil, skulle/skal,
måtte/må, vite/vet, gjøre/gjør, si/sier, spørre/spør. Sie sind der Grund,
warum diese Liste von Hand steht.

Aufruf:  python norwegisch_verbformen.py
         python norwegisch_verbformen.py --echt
"""
import json
import os
import sys
import urllib.error
import urllib.request

if hasattr(sys.stdout, "reconfigure"):
    sys.stdout.reconfigure(encoding="utf-8", errors="replace")

HIER = os.path.dirname(os.path.abspath(__file__))
SPRACHLISTEN = os.path.dirname(HIER)


def lies_env(name):
    for zeile in open(os.path.join(SPRACHLISTEN, ".env"), encoding="utf-8"):
        if zeile.startswith(name + "="):
            return zeile.split("=", 1)[1].strip().strip('"')
    raise SystemExit(name + " nicht gefunden")


URL, KEY = lies_env("SUPABASE_URL"), lies_env("SUPABASE_SERVICE_ROLE_KEY")
KOPF = {"apikey": KEY, "Authorization": "Bearer " + KEY,
        "Content-Type": "application/json"}

# Infinitiv -> (Praesens, Praeteritum, Perfektum)
FORMEN = {
    # --- unregelmaessig, und ausgerechnet die haeufigsten --------------
    "være": ("er", "var", "vært"),
    "ha": ("har", "hadde", "hatt"),
    "bli": ("blir", "ble", "blitt"),
    "gjøre": ("gjør", "gjorde", "gjort"),
    "si": ("sier", "sa", "sagt"),
    "ville": ("vil", "ville", "villet"),
    "skulle": ("skal", "skulle", "skullet"),
    "kunne": ("kan", "kunne", "kunnet"),
    "måtte": ("må", "måtte", "måttet"),
    "vite": ("vet", "visste", "visst"),
    "spørre": ("spør", "spurte", "spurt"),

    # --- stark (Vokalwechsel) -----------------------------------------
    "gå": ("går", "gikk", "gått"),
    "komme": ("kommer", "kom", "kommet"),
    "se": ("ser", "så", "sett"),
    "gi": ("gir", "ga", "gitt"),
    "ta": ("tar", "tok", "tatt"),
    "finne": ("finner", "fant", "funnet"),
    "legge": ("legger", "la", "lagt"),
    "sette": ("setter", "satte", "satt"),
    "drikke": ("drikker", "drakk", "drukket"),
    "sove": ("sover", "sov", "sovet"),
    "ankomme": ("ankommer", "ankom", "ankommet"),
    "dra": ("drar", "dro", "dratt"),
    "hjelpe": ("hjelper", "hjalp", "hjulpet"),
    "skrive": ("skriver", "skrev", "skrevet"),
    "vinne": ("vinner", "vant", "vunnet"),
    "synge": ("synger", "sang", "sunget"),
    "løpe": ("løper", "løp", "løpt"),
    "få": ("får", "fikk", "fått"),
    "holde": ("holder", "holdt", "holdt"),
    "følge": ("følger", "fulgte", "fulgt"),
    "sitte": ("sitter", "satt", "sittet"),
    "stå": ("står", "sto", "stått"),
    "fortelle": ("forteller", "fortalte", "fortalt"),
    "fortsette": ("fortsetter", "fortsatte", "fortsatt"),
    "forstå": ("forstår", "forsto", "forstått"),
    "bringe": ("bringer", "brakte", "brakt"),
    "le": ("ler", "lo", "ledd"),
    "gråte": ("gråter", "gråt", "grått"),
    "hete": ("heter", "het", "hett"),

    # --- Klasse 3: einsilbig, Vokalende, -dde -------------------------
    "bo": ("bor", "bodde", "bodd"),
    "tro": ("tror", "trodde", "trodd"),
    "dø": ("dør", "døde", "dødd"),
    "skje": ("skjer", "skjedde", "skjedd"),

    # --- Klasse 2: -te / -de ------------------------------------------
    "tenke": ("tenker", "tenkte", "tenkt"),
    "svare": ("svarer", "svarte", "svart"),
    "spise": ("spiser", "spiste", "spist"),
    "leve": ("lever", "levde", "levd"),
    "kjøpe": ("kjøper", "kjøpte", "kjøpt"),
    "betale": ("betaler", "betalte", "betalt"),
    "reise": ("reiser", "reiste", "reist"),
    "høre": ("hører", "hørte", "hørt"),
    "stenge": ("stenger", "stengte", "stengt"),
    "lete": ("leter", "lette", "lett"),
    "bruke": ("bruker", "brukte", "brukt"),
    "kjenne": ("kjenner", "kjente", "kjent"),
    "studere": ("studerer", "studerte", "studert"),
    "lære": ("lærer", "lærte", "lært"),
    "undervise": ("underviser", "underviste", "undervist"),
    "lese": ("leser", "leste", "lest"),
    "glemme": ("glemmer", "glemte", "glemt"),
    "begynne": ("begynner", "begynte", "begynt"),
    "prøve": ("prøver", "prøvde", "prøvd"),
    "klare": ("klarer", "klarte", "klart"),
    "spille": ("spiller", "spilte", "spilt"),
    "kjøre": ("kjører", "kjørte", "kjørt"),
    "besøke": ("besøker", "besøkte", "besøkt"),
    "møte": ("møter", "møtte", "møtt"),
    "trenge": ("trenger", "trengte", "trengt"),
    "bestille": ("bestiller", "bestilte", "bestilt"),
    "leie": ("leier", "leide", "leid"),
    "signere": ("signerer", "signerte", "signert"),
    "ringe": ("ringer", "ringte", "ringt"),
    "vise": ("viser", "viste", "vist"),
    "like": ("liker", "likte", "likt"),
    "hilse": ("hilser", "hilste", "hilst"),

    # --- Klasse 1: -et -------------------------------------------------
    "snakke": ("snakker", "snakket", "snakket"),
    "jobbe": ("jobber", "jobbet", "jobbet"),
    "koste": ("koster", "kostet", "kostet"),
    "åpne": ("åpner", "åpnet", "åpnet"),
    "vente": ("venter", "ventet", "ventet"),
    "elske": ("elsker", "elsket", "elsket"),
    "huske": ("husker", "husket", "husket"),
    "miste": ("mister", "mistet", "mistet"),
    "danse": ("danser", "danset", "danset"),
    "gifte": ("gifter", "giftet", "giftet"),
    "bytte": ("bytter", "byttet", "byttet"),
    "virke": ("virker", "virket", "virket"),
    "håpe": ("håper", "håpet", "håpet"),
    "vaske": ("vasker", "vasket", "vasket"),
    "lage": ("lager", "laget", "laget"),
    "beklage": ("beklager", "beklaget", "beklaget"),
    "takke": ("takker", "takket", "takket"),
    "stoppe": ("stopper", "stoppet", "stoppet"),
    "flytte": ("flytter", "flyttet", "flyttet"),
    "slutte": ("slutter", "sluttet", "sluttet"),
    "endre": ("endrer", "endret", "endret"),
    "rydde": ("rydder", "ryddet", "ryddet"),

    # --- Sonderfall ----------------------------------------------------
    # `fødes` ist ein s-Passiv und hat keine aktive Grundform. Es steht so
    # in der Liste, wie man es sagt ("jeg ble født" = ich wurde geboren);
    # die Praesensform ist mit dem Infinitiv identisch.
    "fødes": ("fødes", "føtes", "født"),
}


def hole():
    out, off = [], 0
    while True:
        r = urllib.request.Request(
            f"{URL}/rest/v1/norwegisch_vocab?select=id,norwegian,category,forms"
            f"&limit=1000&offset={off}", headers=KOPF)
        with urllib.request.urlopen(r, timeout=60) as a:
            teil = json.load(a)
        out += teil
        if len(teil) < 1000:
            return out
        off += 1000


def main():
    echt = "--echt" in sys.argv
    zeilen = hole()
    verben = [z for z in zeilen if z.get("category") == "Verb"]

    ohne = [z["norwegian"] for z in verben if z["norwegian"] not in FORMEN]
    ueberzaehlig = [w for w in FORMEN if w not in {z["norwegian"] for z in verben}]

    print(f"{len(verben)} Verben in der Tabelle, {len(FORMEN)} Formen hier.")
    if ohne:
        print(f"  OHNE FORMEN ({len(ohne)}): {ohne}")
    if ueberzaehlig:
        print(f"  Formen ohne Verb in der Tabelle: {ueberzaehlig}")
    if ohne or ueberzaehlig:
        raise SystemExit("Erst angleichen, dann schreiben.")

    print("  Alle Verben abgedeckt.")
    print("  Beispiele:")
    for w in ["være", "kunne", "ville", "måtte", "vite", "snakke", "bo", "drikke"]:
        p, pr, su = FORMEN[w]
        print(f"    {w:10} -> {p:10} {pr:10} {su}")

    if not echt:
        print("\nPROBELAUF - nichts geschrieben. Mit --echt eintragen.")
        return

    gut = 0
    for z in verben:
        p, pr, su = FORMEN[z["norwegian"]]
        koerper = {"forms": {"present": p, "preteritum": pr, "supinum": su}}
        r = urllib.request.Request(
            f"{URL}/rest/v1/norwegisch_vocab?id=eq.{z['id']}",
            data=json.dumps(koerper, ensure_ascii=False).encode("utf-8"),
            headers={**KOPF, "Prefer": "return=minimal"}, method="PATCH")
        try:
            urllib.request.urlopen(r, timeout=30).read()
            gut += 1
        except urllib.error.HTTPError as fehler:
            print(f"  ! {z['norwegian']}: {fehler.code} {fehler.read().decode()[:150]}")
        if gut % 25 == 0:
            print(f"  geschrieben {gut}/{len(verben)}")
    print(f"\nFertig: {gut} von {len(verben)} Verben.")


if __name__ == "__main__":
    main()
