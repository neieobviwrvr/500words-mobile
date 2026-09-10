# -*- coding: utf-8 -*-
"""Ergaenzt fehlende Kernbegriffe in den Vokabeltabellen.

**Warum das noetig ist.** Die elf Wortlisten sind unabhaengig nach
Haeufigkeit der jeweiligen Sprache zusammengestellt. Das ist fuer sich
richtig, macht sie aber als KURSGRUNDLAGE unbrauchbar, solange
Grundbegriffe fehlen, die jeder Anfaenger am ersten Tag braucht. Gemessen
mit `luecken_bericht.py` gegen `kernbegriffe.py`.

Die drei auffaelligsten Befunde vom 2026-09-04:

  * **Englisch hatte KEIN einziges Modalverb** - can, must, should, will
    fehlten alle. `can` ist rund das 40.-haeufigste englische Wort. Ohne
    Modalverben laesst sich Modul 7 ("Ich kann, ich muss") gar nicht bauen.
  * **hungrig und durstig** fehlten in acht von zehn Sprachen - in einer
    App fuer Reisende.
  * **heissen** fehlte in sieben. "Ich heisse ..." ist Lektion 1.

**Was hier NICHT ergaenzt wird:** Begriffe, die in der Zielsprache
schlicht anders realisiert werden. Italienisch und Spanisch haben kein
Adjektiv fuer "hungrig", sondern sagen `ho fame` / `tengo hambre` (ich habe
Hunger) - das Substantiv steht laengst in der Liste und ist die richtige
Lerneinheit. Ebenso deckt chinesisch 我 sowohl "ich" als auch "mich" ab.
Solche Faelle sind in `kernbegriffe.py` als `alt=` hinterlegt, nicht hier
als Dublette eingefuegt.

Aufruf:  python kern_ergaenzen.py sv en zh
         python kern_ergaenzen.py sv en zh --echt
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

# ---------------------------------------------------------------------------
# SCHWEDISCH - 14 Luecken.
# `forms` wird mitgegeben, weil der Kurs die Praesensform in den Satz setzt
# (`vara` -> `är`); ohne sie stuende im Satz der Infinitiv.
# `genus` (en/ett) ist bei Nomen Pflicht: der Kurs baut genusreine
# Artikel-Rahmen ("det är en [Slot]" gegen "det är ett [Slot]") und kann das
# nur pruefen, wenn die Angabe da ist.
SV = [
    dict(swedish="svara", german="antworten", category="Verb",
         forms={"present": "svarar", "preteritum": "svarade", "supinum": "svarat"}),
    dict(swedish="ja", german="ja", category="Adverb"),
    dict(swedish="nej", german="nein", category="Adverb"),
    dict(swedish="hungrig", german="hungrig", category="Adjektiv"),
    dict(swedish="törstig", german="durstig", category="Adjektiv"),
    dict(swedish="sjuk", german="krank", category="Adjektiv"),
    dict(swedish="redo", german="bereit", category="Adjektiv"),
    dict(swedish="ung", german="jung", category="Adjektiv"),
    dict(swedish="vän", german="Freund", category="Nomen", genus="en", plural_form="vänner"),
    dict(swedish="namn", german="Name", category="Nomen", genus="ett", plural_form="namn"),
    dict(swedish="pengar", german="Geld", category="Nomen", genus="en", plural_form="pengar",
         grammar_note="Steht immer im Plural - ein Singular existiert nicht."),
    dict(swedish="tid", german="Zeit", category="Nomen", genus="en", plural_form="tider"),
    dict(swedish="hjälp", german="Hilfe", category="Nomen", genus="en", plural_form="hjälper"),
    dict(swedish="toalett", german="Toilette", category="Nomen", genus="en", plural_form="toaletter"),
]

# ---------------------------------------------------------------------------
# ENGLISCH - die Modalverben plus 8 weitere.
# `frequency_rank` wird NICHT gesetzt: die Spalte nummeriert in dieser
# Tabelle nach Wortart-Bloecken durch (Artikel 1-3, Pronomen 4-43, ...) und
# ist keine echte Frequenzliste. Ein Nachtrag mittendrin wuerde die
# Blockordnung zerschiessen; der Kurs liest sie ohnehin nicht.
EN = [
    dict(english="can", german="können", category="Verb",
         grammar_note="Modalverb - danach steht der Infinitiv ohne to: I can swim."),
    dict(english="must", german="müssen", category="Verb",
         grammar_note="Modalverb - danach der Infinitiv ohne to: I must go."),
    dict(english="should", german="sollen", category="Verb",
         grammar_note="Modalverb für Ratschläge: You should sleep."),
    dict(english="will", german="werden (Zukunft)", category="Verb",
         grammar_note="Bildet die Zukunft: I will come."),
    dict(english="would", german="würde", category="Verb"),
    dict(english="to love", german="lieben", category="Verb"),
    dict(english="to be called", german="heißen", category="Verb",
         grammar_note="Meist sagt man einfacher: My name is ..."),
    dict(english="to answer", german="antworten", category="Verb"),
    dict(english="hungry", german="hungrig", category="Adjektiv"),
    dict(english="thirsty", german="durstig", category="Adjektiv"),
    dict(english="finished", german="fertig", category="Adjektiv"),
    dict(english="teacher", german="Lehrer", category="Nomen"),
    dict(english="bank", german="Bank (Geldinstitut)", category="Nomen"),
]

# ---------------------------------------------------------------------------
# CHINESISCH - 20 echte Luecken.
# Nicht ergaenzt werden mich/dich/mein/dein: 我 und 你 decken Subjekt und
# Objekt ab (Chinesisch beugt Pronomen nicht), der Besitz laeuft ueber das
# vorhandene 的 (我的 = mein). Das sind keine Woerter, sondern Grammatik -
# der Kurs lehrt sie als Rahmen, nicht als Vokabel.
ZH = [
    dict(hanzi="必须", pinyin="bìxū", german="müssen", hsk_level="HSK 2"),
    dict(hanzi="爱", pinyin="ài", german="lieben", hsk_level="HSK 1"),
    dict(hanzi="觉得", pinyin="juéde", german="denken / finden", hsk_level="HSK 2"),
    dict(hanzi="为什么", pinyin="wèishénme", german="warum", hsk_level="HSK 1"),
    dict(hanzi="对", pinyin="duì", german="ja / richtig", hsk_level="HSK 1"),
    dict(hanzi="不", pinyin="bù", german="nein / nicht", hsk_level="HSK 1"),
    dict(hanzi="总是", pinyin="zǒngshì", german="immer", hsk_level="HSK 2"),
    dict(hanzi="从不", pinyin="cóngbù", german="nie", hsk_level="HSK 2"),
    dict(hanzi="和", pinyin="hé", german="und / mit", hsk_level="HSK 1"),
    dict(hanzi="给", pinyin="gěi", german="für / geben", hsk_level="HSK 2"),
    dict(hanzi="没有", pinyin="méiyǒu", german="ohne / nicht haben", hsk_level="HSK 1"),
    dict(hanzi="生病", pinyin="shēngbìng", german="krank", hsk_level="HSK 2"),
    dict(hanzi="难过", pinyin="nánguò", german="traurig", hsk_level="HSK 2"),
    dict(hanzi="生气", pinyin="shēngqì", german="wütend", hsk_level="HSK 2"),
    dict(hanzi="准备好", pinyin="zhǔnbèi hǎo", german="bereit", hsk_level="HSK 2"),
    dict(hanzi="暖和", pinyin="nuǎnhuo", german="warm", hsk_level="HSK 2"),
    dict(hanzi="难", pinyin="nán", german="schwierig", hsk_level="HSK 2"),
    dict(hanzi="容易", pinyin="róngyì", german="einfach", hsk_level="HSK 2"),
    dict(hanzi="男人", pinyin="nánrén", german="Mann", hsk_level="HSK 1"),
    dict(hanzi="孩子", pinyin="háizi", german="Kind", hsk_level="HSK 1"),
    dict(hanzi="包", pinyin="bāo", german="Tasche", hsk_level="HSK 2"),
    dict(hanzi="帮助", pinyin="bāngzhù", german="Hilfe / helfen", hsk_level="HSK 2"),
    dict(hanzi="城市", pinyin="chéngshì", german="Stadt", hsk_level="HSK 2"),
    dict(hanzi="银行", pinyin="yínháng", german="Bank (Geldinstitut)", hsk_level="HSK 2"),
    dict(hanzi="夜里", pinyin="yèli", german="Nacht", hsk_level="HSK 2"),
]

PLAN = {
    "sv": ("schwedisch_vocab", "swedish", SV),
    "en": ("englisch_vocab", "english", EN),
    "zh": ("chinesisch_vocab", "hanzi", ZH),
}


def hole_schluessel(tabelle, spalte):
    out, off = [], 0
    while True:
        r = urllib.request.Request(
            f"{URL}/rest/v1/{tabelle}?select={spalte}&limit=1000&offset={off}",
            headers=KOPF)
        with urllib.request.urlopen(r, timeout=60) as a:
            teil = json.load(a)
        out += teil
        if len(teil) < 1000:
            return {(z.get(spalte) or "").strip() for z in out}
        off += 1000


def main():
    echt = "--echt" in sys.argv
    sprachen = [a for a in sys.argv[1:] if not a.startswith("--")] or list(PLAN)
    for s in sprachen:
        tabelle, spalte, eintraege = PLAN[s]
        da = hole_schluessel(tabelle, spalte)
        neu = [e for e in eintraege if e[spalte] not in da]
        schon = len(eintraege) - len(neu)
        print(f"=== {s} ({tabelle}) ===")
        print(f"    {len(eintraege)} geplant, {schon} schon vorhanden, {len(neu)} neu")
        for e in neu:
            print(f"      + {e[spalte]:12} = {e['german']}")
        if echt and neu:
            koerper = [dict(e, status="Neu") for e in neu]
            # Einzeln statt als Block: sonst kippt EIN unpassendes Feld den
            # ganzen Schwung, und man sieht nicht, welcher Eintrag schuld war.
            gut = 0
            for e in koerper:
                r = urllib.request.Request(
                    f"{URL}/rest/v1/{tabelle}",
                    data=json.dumps([e], ensure_ascii=False).encode("utf-8"),
                    headers={**KOPF, "Prefer": "return=minimal"}, method="POST")
                try:
                    urllib.request.urlopen(r, timeout=60).read()
                    gut += 1
                except urllib.error.HTTPError as fehler:
                    print(f"      ! {e[spalte]}: {fehler.code} "
                          f"{fehler.read().decode()[:200]}")
            print(f"    -> {gut} von {len(koerper)} eingefuegt.")
        print()
    if not echt:
        print("PROBELAUF - nichts geschrieben. Mit --echt einfuegen.")


if __name__ == "__main__":
    main()
