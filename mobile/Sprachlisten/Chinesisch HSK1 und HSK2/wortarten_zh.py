# -*- coding: utf-8 -*-
"""Echte Wortart-Klassifizierung fuer chinesisch_vocab (statt geraten).

Chinesisch hatte bisher als einzige Sprache keine echte Wortart-Spalte -
wortartAusDeutsch() in vocabContent.ts rät sie aus der deutschen
Uebersetzung und trifft zuverlaessig nur drei Eimer (Nomen/Verb/Sonstiges).
Dieses Skript befuellt die neue `wortart`-Spalte
(Migration 20260829120000_wortart_spalten.sql) mit echter, von Hand
geprueter Klassifizierung ueber alle 5 Kategorien (Nomen/Verb/Adjektiv/
Pronomen/Konjunktion) plus Sonstiges als legitimer 6. "ungefaerbt"-Eimer
fuer Woerter, die grammatisch nicht ins Schema passen (z.B. Masswoerter).

Nach `hanzi` klassifiziert (eindeutiger Schluessel, siehe
import_chinesisch_vocab.py) - Chinesisch flektiert nicht, ein Hanzi hat
immer dieselbe Wortart, unabhaengig davon in welcher Lektion es auftaucht.

Batch-Vorgehen: nach `lesson` priorisiert, fruehe Kurslektionen zuerst, weil
das direkt in die Kurs-Einfaerbung (build_chinesisch_kurs.py) einfliesst.
Diese erste Runde deckt Modul 1+2 ab (58 Woerter). Die restlichen ~470 sind
absichtlich noch offen - siehe Plan "Wortart-Farbcodierung durchgaengig",
Phase 4: Klassifizierung darf der ersten Scheibe nachziehen, unklassifizierte
Zeilen bleiben `null` und fallen auf die bestehende Heuristik zurueck.

Nutzung:
  python wortarten_zh.py pruefe
  python wortarten_zh.py spiel_ein          (Probelauf)
  python wortarten_zh.py spiel_ein --echt
"""
import json
import os
import sys
import urllib.parse
import urllib.request

HIER = os.path.dirname(os.path.abspath(__file__))
SPRACHLISTEN = os.path.dirname(HIER)
TABELLE = "chinesisch_vocab"
ERLAUBT = {"Nomen", "Verb", "Adjektiv", "Pronomen", "Konjunktion", "Sonstiges"}

# Modul 1 "Identität, Pronomen & Personen" + Modul 2 "Wünsche, Fragen & Bitten"
# (2026-08-29). Adjektiv/Pronomen sauber getrennt, wo die deutsche
# Uebersetzung allein sie nicht auseinanderhalten koennte (z.B. "getrennt"
# vs. "vermischt" waere hier egal - es geht um Chinesisch-Grammatik, nicht
# um die deutsche Endung).
WORTARTEN = {
    # ---- Modul 1 ----
    "学生": "Nomen",       # Student / Schüler
    "老师": "Nomen",       # Lehrer
    "单身": "Adjektiv",    # single (Zustand)
    "同事": "Nomen",       # Kollege
    "朋友": "Nomen",       # Freund
    "有趣": "Adjektiv",    # interessant
    "高": "Adjektiv",      # groß (Körpergröße)
    "帅": "Adjektiv",      # cool / gutaussehend
    "漂亮": "Adjektiv",    # schön / hübsch
    "女朋友": "Nomen",     # feste Freundin
    "男朋友": "Nomen",     # fester Freund
    "微信": "Nomen",       # WeChat (Eigenname)
    "爸爸": "Nomen",       # Vater
    "妈妈": "Nomen",       # Mutter
    "哥哥": "Nomen",       # älterer Bruder
    "姐姐": "Nomen",       # ältere Schwester
    "弟弟": "Nomen",       # jüngerer Bruder
    "妹妹": "Nomen",       # jüngere Schwester
    "儿子": "Nomen",       # Sohn
    "女儿": "Nomen",       # Tochter
    "名字": "Nomen",       # Name
    "岁": "Nomen",         # Jahre (alt) - Zaehlwort fuers Alter, im Satz ein Nomen
    "谁": "Pronomen",      # wer (Frage-Pronomen)
    "先生": "Nomen",       # Herr
    "小姐": "Nomen",       # Frau (Anrede)
    # ---- Modul 2 ----
    "喝": "Verb",          # trinken
    "买": "Verb",          # kaufen
    "休息": "Verb",        # ausruhen
    "吃": "Verb",          # essen
    "看": "Verb",          # sehen / schauen
    "说话": "Verb",        # sprechen / reden
    "坐": "Verb",          # sitzen
    "进": "Verb",          # eintreten
    "帮助": "Verb",        # helfen
    "等": "Verb",          # warten
    "叫": "Verb",          # rufen / heißen
    "说": "Verb",          # sagen / sprechen
    "写": "Verb",          # schreiben
    "读": "Verb",          # lesen
    "听": "Verb",          # hören
    "问": "Verb",          # fragen
    "做": "Verb",          # machen / tun
    "开": "Verb",          # öffnen / fahren
    "关": "Verb",          # schließen
    "用": "Verb",          # benutzen
    "送": "Verb",          # bringen / schenken
    "回答": "Verb",        # antworten
    "告诉": "Verb",        # mitteilen / sagen
    "知道": "Verb",        # wissen
    "觉得": "Verb",        # finden / meinen
    "懂": "Verb",          # verstehen
    "问题": "Nomen",       # Frage / Problem
    "意思": "Nomen",       # Bedeutung / Sinn
    "错": "Adjektiv",      # falsch
    "穿": "Verb",          # anziehen / tragen
    "洗": "Verb",          # waschen
    "完": "Adjektiv",      # fertig / zu Ende (Zustand)
    "让": "Verb",          # lassen
}


def lies_env(name):
    for zeile in open(os.path.join(SPRACHLISTEN, ".env"), encoding="utf-8"):
        if zeile.startswith(name + "="):
            return zeile.split("=", 1)[1].strip().strip('"')
    raise SystemExit(name + " nicht gefunden")


def rest(url, key, pfad, methode="GET", koerper=None):
    kopf = {"apikey": key, "Authorization": "Bearer " + key,
            "Content-Type": "application/json", "Prefer": "return=representation"}
    d = json.dumps(koerper, ensure_ascii=False).encode("utf-8") if koerper is not None else None
    r = urllib.request.Request(url + "/rest/v1/" + pfad, data=d, headers=kopf, method=methode)
    with urllib.request.urlopen(r) as a:
        t = a.read().decode("utf-8")
        return json.loads(t) if t.strip() else []


def bestand(url, key):
    return rest(url, key, f"{TABELLE}?select=hanzi,wortart")


def pruefe():
    url, key = lies_env("SUPABASE_URL"), lies_env("SUPABASE_SERVICE_ROLE_KEY")
    zeilen = bestand(url, key)
    bekannte_hanzi = {r["hanzi"] for r in zeilen}
    schon = {r["hanzi"] for r in zeilen if r["wortart"]}

    fehler = []
    for hanzi, wortart in WORTARTEN.items():
        if hanzi not in bekannte_hanzi:
            fehler.append(f"{hanzi!r} steht nicht in {TABELLE}")
        if wortart not in ERLAUBT:
            fehler.append(f"{hanzi!r}: Wortart {wortart!r} nicht im erlaubten Set {ERLAUBT}")

    if fehler:
        print(f"{len(fehler)} FEHLER:")
        for f in fehler:
            print("  X " + f)
        sys.exit(1)

    neu = len(WORTARTEN.keys() - schon)
    print(f"WORTARTEN: {len(WORTARTEN)} Eintraege, davon {neu} neu einzuspielen.")
    print(f"Gesamtabdeckung nach Einspielen: {len(schon | WORTARTEN.keys())} von {len(bekannte_hanzi)}.")


def spiel_ein(echt):
    url, key = lies_env("SUPABASE_URL"), lies_env("SUPABASE_SERVICE_ROLE_KEY")
    zeilen = bestand(url, key)
    bekannte_hanzi = {r["hanzi"] for r in zeilen}
    fehlend = [h for h in WORTARTEN if h not in bekannte_hanzi]
    if fehlend:
        print("FEHLER, nichts geschrieben:", fehlend)
        sys.exit(1)

    if not echt:
        print(f"PROBELAUF - {len(WORTARTEN)} Woerter wuerden geschrieben. Mit --echt einspielen.")
        return

    for hanzi, wortart in WORTARTEN.items():
        rest(url, key, f"{TABELLE}?hanzi=eq.{urllib.parse.quote(hanzi)}", "PATCH",
             {"wortart": wortart})
    endstand = rest(url, key, f"{TABELLE}?select=hanzi&wortart=not.is.null")
    print(f"Fertig. {TABELLE}.wortart steht jetzt bei {len(endstand)} klassifizierten Woertern.")


if __name__ == "__main__":
    if len(sys.argv) < 2 or sys.argv[1] not in ("pruefe", "spiel_ein"):
        print(__doc__)
        sys.exit(1)
    if sys.argv[1] == "pruefe":
        pruefe()
    else:
        spiel_ein("--echt" in sys.argv)
