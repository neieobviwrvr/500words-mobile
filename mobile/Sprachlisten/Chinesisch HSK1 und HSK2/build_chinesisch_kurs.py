# -*- coding: utf-8 -*-
"""
Baut aus 'Chinesische Wortliste.xlsx' + dem 12-Modul-Curriculum die
Datendatei fuer die App: mobile/src/data/chineseCourse.ts

Aufruf:  python "build_chinesisch_kurs.py"

Warum ein Generator und keine handgepflegte TS-Datei: die Wortliste ist
Simons Datei und wird sich noch aendern. Pinyin und Bedeutung stehen dann
weiterhin nur an EINER Stelle (der Excel), und ein erneuter Lauf zieht die
App nach. Die Kurs-Struktur (Rahmen, Slots, Modultitel) steht unten im
Klartext - sie kommt aus Simons Vorgabe, nicht aus der Excel.

WICHTIG - keine Zeichen fuers Lernen (Nutzer-Vorgabe 2026-08-20): geuebt
wird ueber Pinyin und Sprache. Hanzi laeuft passiv mit und bleibt deshalb im
Datensatz stehen, ist aber nie der abgefragte Teil.
"""

import json
import re
import unicodedata
from pathlib import Path

import openpyxl

from chinesisch_erweiterung import ZUSATZ_LEKTIONEN, ZUSATZ_WORTLISTE

HIER = Path(__file__).parent
EXCEL = HIER / "Chinesische Wortliste.xlsx"
ZIEL = HIER.parents[1] / "src" / "data" / "chineseCourse.ts"

# ---------------------------------------------------------------------------
# Ergaenzungen zur Wortliste
# ---------------------------------------------------------------------------
# Diese Eintraege braucht das Curriculum, sie fehlen in der Excel. Beim
# naechsten Excel-Stand am besten dort nachtragen, dann kann das hier weg.
#
# - 什么 / 能: echte Einzelwort-Luecken.
# - Die drei Mehrwort-Slots stehen als GANZES in der Lektion und werden
#   deshalb auch als Ganzes gelernt, nicht aus Teilen zusammengesetzt.
#   (杯 und 一 standen hier frueher einzeln, nur damit sich 喝一杯
#   zusammensetzen laesst - unnoetig, die laengste Uebereinstimmung greift
#   direkt auf den ganzen Ausdruck.)
ERGAENZUNGEN = {
    "什么": ("shénme", "was", "HSK 1"),
    "能": ("néng", "können", "HSK 1"),
    "不去": ("bú qù", "nicht gehen", "HSK 1"),
    "今天晚上": ("jīntiān wǎnshang", "heute Abend", "HSK 1"),
    "喝一杯": ("hē yī bēi", "etwas trinken gehen", "HSK 1"),
}

# Die Zahlen stehen in der Excel als SAMMELZELLEN ("一 / 二 / 三 / 四 / 五"),
# sind dadurch nicht einzeln adressierbar und fielen deshalb aus dem
# Curriculum heraus. Sie werden beim Einlesen zerlegt; Hanzi und Pinyin
# kommen aus Simons Datei, nur die deutschen Einzelbedeutungen stehen hier -
# eine Sammelzelle sagt "Zahlen 1-5" und laesst sich nicht aufteilen.
ZAHL_BEDEUTUNG = {
    "一": "eins", "二": "zwei", "三": "drei", "四": "vier", "五": "fünf",
    "六": "sechs", "七": "sieben", "八": "acht", "九": "neun", "十": "zehn",
    "百": "hundert", "千": "tausend",
}

# ---------------------------------------------------------------------------
# Situationsbeschreibungen fuer die Finisher
# ---------------------------------------------------------------------------
# Der Finisher ist die Beweis-Lektion: KEINE Hilfe auf dem Schirm, nur die
# Situation auf Deutsch. Wer sie loest, hat wirklich etwas gelernt - das
# unterscheidet uns von Uebungen, bei denen die Antwortteile schon dastehen
# und man sich durchtippt.
#
# Bewusst als SITUATION formuliert, nicht als Uebersetzungsauftrag: nicht
# "Sage: Das ist mein Freund", sondern "Stell deinen Freund vor". Sonst
# uebersetzt der Nutzer, statt zu sprechen.
FINISHER_AUFGABE = {
    1:  "Stell dich vor, zeig auf jemanden neben dir und sag, wie er ist.",
    2:  "Sag, was du möchtest, und bitte jemanden um etwas.",
    3:  "Sag, wie viele du davon hast — und was du vom Preis hältst.",
    4:  "Frag, wann jemand Zeit hat, und sag, wann ihr losgeht.",
    5:  "Frag, wo jemand steckt, und wie ihr dorthin kommt.",
    6:  "Sag, dass es euch schmeckt, und bestell etwas dazu.",
    7:  "Mach jemandem ein Kompliment und vergleich es mit deinem.",
    8:  "Erklär, was ihr gerade tut und warum ihr deshalb nicht könnt.",
    9:  "Sag, dass du etwas noch nie gemacht hast, und bitte um Hilfe.",
    10: "Sag, was jemandem fehlt und wo es wehtut.",
    11: "Sag, dass ihr euch hier noch nicht auskennt, und frag nach den Wochenendplänen.",
    12: "Frag nach dem Kontakt und schlag etwas Gemeinsames vor.",
}

# ---------------------------------------------------------------------------
# Das Curriculum (Simons Vorgabe, 12 Module x 3 Lektionen)
# ---------------------------------------------------------------------------
# Aufbau je Lektion: (id, art, Rahmen, Pronomen, Slot-Gruppen)
#   frame     Satzrahmen mit 4-5 neuen Slots
#   series    geschlossene Reihe (Zahlen) - bewusst mehr als 5 auf einmal
#   finisher  KEINE neuen Vokabeln, kombiniert die Rahmen des Moduls
#
# ABWEICHUNG von der 3-Lektionen-Regel (Nutzer-Entscheidung 2026-08-20):
# Module 1, 3 und 4 haben VIER Lektionen. Grund: dort lagen zwei Slot-Gruppen
# in einer Lektion, was 7 bzw. 8 neue Vokabeln ergab und damit das eigene
# Limit von 5 riss. Statt die Woerter zu streichen bekommt das Modul eine
# Lektion mehr, und jede Lektion variiert nur EINE Gruppe, waehrend die
# andere auf einem schon gelernten Wert festliegt. Der Rahmen bleibt damit
# vollstaendig, die Last halbiert sich.
#
# Reihenfolge dabei bewusst gedreht: erst die Gruppe, die ohne Vorwissen
# funktioniert, dann die, die auf sie zurueckgreift. Sonst muesste die
# festgehaltene Stelle mit einem Wort besetzt werden, das der Nutzer noch
# nicht kennt.
#
# DREI STELLEN sind gegenueber Simons Vorlage berichtigt - dort standen
# offenkundige Uebertragungsfehler:
#   6.1  "知识/我们" -> 我们.  知识 heisst "Wissen" und ergibt als Pronomen
#        keinen Sinn.
#   11.2 "网络/我们" -> 我们.  网络 heisst "Netzwerk", gleicher Fall.
#   1.2 und 1.3: das englische "my" im chinesischen Rahmen -> 我的.
# Ausserdem in 10.3 "很疼" zu "很 疼" getrennt, damit die Zerlegung sauber
# zwei Woerter erkennt statt eines unbekannten Klumpens.
MODULE = [
    (1, "Identität, Pronomen & Personen", [
        ("1.1", "frame", "我 / 他 / 她 是 [Slot]", "Ich bin [Slot].", ["我", "他", "她"],
         [["学生", "单身", "朋友", "同事", "老师"]]),
        # Erst die Eigenschaften allein - sie brauchen kein Vorwissen.
        ("1.2", "frame", "他 / 她 很 [Slot]", "Er ist sehr [Slot].", ["他", "她"],
         [["帅", "漂亮", "高", "有趣"]]),
        # Jetzt der volle Rahmen; die zweite Stelle steht fest auf 帅 aus 1.2.
        ("1.3", "frame", "这是 我的 [Slot]，他 / 她 很 帅", "Das ist mein [Slot], er sieht gut aus.", ["他", "她"],
         [["朋友", "男朋友", "女朋友", "微信"]]),
        ("1.4", "finisher", "我是 [Name]，这是 我的 [Slot 1]，他 / 她 很 [Slot 2]", [], []),
    ]),
    (2, "Wünsche, Fragen & Bitten", [
        ("2.1", "frame", "我 想 / 要 [Slot]", "Ich möchte [Slot].", ["我"], [["吃", "喝", "买", "看", "休息"]]),
        ("2.2", "frame", "你 可以 [Slot] 吗？", "Kannst du [Slot]?", ["你"], [["坐", "进", "帮助", "等", "叫"]]),
        ("2.3", "finisher", "我 想 [Slot 1]，你 可以 [Slot 2] 吗？", [], []),
    ]),
    (3, "Mengen, Besitz & Shopping", [
        ("3.1", "frame", "我 / 我们 有 [Slot]", "Ich habe [Slot].", ["我", "我们"],
         [["苹果", "电脑", "手机", "衣服", "票"]]),
        # Zahlen als geschlossene Reihe am Stueck (Nutzer-Entscheidung):
        # sie werden als Abfolge gelernt wie das Alphabet, nicht als einzelne
        # Vokabeln. Das Objekt steht fest auf 苹果 aus 3.1.
        ("3.2", "series", "我 / 我们 有 [Zahl] 个 苹果", "Ich habe [Zahl] Äpfel.", ["我", "我们"],
         [["零", "一", "二", "两", "三", "四", "五", "六", "七", "八", "九", "十",
           "百", "千"]]),
        ("3.3", "frame", "这个 太 [Slot] 了", "Das ist zu [Slot].", [], [["贵", "便宜", "大", "小", "新"]]),
        ("3.4", "finisher", "我们 有 [Zahl] 个，这个 太 [Slot] 了", [], []),
    ]),
    (4, "Zeit, Pläne & Abläufe", [
        # Erst die Taetigkeit, dann die Zeitangabe davor - so steht in 4.2
        # eine bereits bekannte Taetigkeit fest.
        ("4.1", "frame", "我们 去 [Aktion]", "Wir gehen [Aktion].", ["我们"],
         [["吃饭", "睡觉", "工作", "旅游"]]),
        ("4.2", "frame", "我们 [Zeit] 去 吃饭", "Wir gehen [Zeit] essen.", ["我们"],
         [["今天", "明天", "现在", "晚上"]]),
        ("4.3", "frame", "你 什么时候 [Slot]？", "Wann [Slot] du?", ["你"],
         [["开始", "休息", "回家", "考试", "工作"]]),
        ("4.4", "finisher", "你 什么时候 [Slot 1]？我们 [Zeit] 去", [], []),
    ]),
    (5, "Orte, Orientierung & Treffpunkte", [
        ("5.1", "frame", "你 在 哪里？ / [Slot] 在 哪里？", "Wo ist [Slot]?", ["你"],
         [["洗手间", "饭店", "商店", "医院", "地铁站"]]),
        ("5.2", "frame", "我们 怎么 去 [Slot]？", "Wie kommen wir zu [Slot]?", ["我们"],
         [["机场", "火车站", "这里", "那里", "酒店"]]),
        ("5.3", "finisher", "你 在 哪里？我们 怎么 去 [Slot]？", [], []),
    ]),
    (6, "Essen, Trinken & Bestellen", [
        ("6.1", "frame", "请 给 我 / 我们 [Slot]", "Bitte geben Sie mir [Slot].", ["我", "我们"],
         [["水", "啤酒", "咖啡", "茶", "菜单"]]),
        ("6.2", "frame", "你 喜欢 这个 [Slot 1] 吗？ / 这个 非常 [Slot 2]", "Magst du [Slot 1]?", ["你"],
         [["菜", "咖啡", "啤酒"], ["好吃", "好喝", "甜", "棒"]]),
        ("6.3", "finisher", "我们 喜欢 这个 [Slot 1]，请 给 我们 [Slot 2]", [], []),
    ]),
    (7, "Beschreibungen, Vergleiche & Komplimente", [
        ("7.1", "frame", "他 / 她 比 我 更 [Slot]", "Er ist [Slot] als ich.", ["他", "她", "我"],
         [["高", "帅", "忙", "快", "好"]]),
        ("7.2", "frame", "你 的 [Slot 1] 很 [Slot 2]", "Dein [Slot 1] ist sehr [Slot 2].", ["你"],
         [["衣服", "手机", "微信"], ["漂亮", "新", "棒"]]),
        ("7.3", "finisher", "你 的 [Slot 1] 很 [Slot 2]，比 我的 更 [Slot 3]", [], []),
    ]),
    (8, "Logik, Begründung & Aktivitäten", [
        ("8.1", "frame", "因为 我 / 他 [Slot 1]，所以 [Slot 2]", "Weil ich [Slot 1] bin, [Slot 2] ich.", ["我", "他"],
         [["生病", "忙", "累"], ["不去", "休息", "睡觉"]]),
        ("8.2", "frame", "我们 / 他 正在 [Slot]", "Wir sind gerade am [Slot].", ["我们", "他"],
         [["工作", "学习", "准备", "吃饭", "打电话"]]),
        ("8.3", "finisher", "因为 我们 正在 [Slot 1]，所以 不能 [Slot 2]", [], []),
    ]),
    (9, "Erfahrungen & Hilfegesuche", [
        ("9.1", "frame", "我 / 他 [Slot 1] 过 [Slot 2]", "Ich habe [Slot 1] [Slot 2].", ["我", "他"],
         [["去", "吃", "看"], ["中国", "北京", "羊肉"]]),
        ("9.2", "frame", "你 可以 帮助 我 [Slot] 吗？", "Kannst du mir helfen, [Slot]?", ["你", "我"],
         [["找", "翻译", "叫", "拿", "解释"]]),
        ("9.3", "finisher", "我 没 [Slot 1] 过，你 可以 帮助 我 [Slot 2] 吗？", [], []),
    ]),
    (10, "Gesundheit & Notfälle", [
        ("10.1", "frame", "我 / 他 [Slot] 了", "Ich bin [Slot].", ["我", "他"],
         [["感冒", "发烧", "生病", "难受", "累"]]),
        ("10.2", "frame", "我 / 他 的 [Slot 1] 很 [Slot 2]", "Mein [Slot 1] ist sehr [Slot 2].", ["我", "他"],
         [["头", "肚子", "腿"], ["疼", "难受", "冷"]]),
        ("10.3", "finisher", "他 [Slot 1] 了，他 的 [Slot 2] 很 疼", [], []),
    ]),
    (11, "Smalltalk, Pläne & Austausch", [
        ("11.1", "frame", "你 [Zeit] 有 什么 [Plan]？", "Was hast du [Zeit] für [Plan]?", ["你"],
         [["周末", "今天晚上"], ["打算", "安排", "兴趣"]]),
        ("11.2", "frame", "我们 还 不 太 [Slot] 这里", "Wir sind hier noch nicht so [Slot].", ["我们"],
         [["习惯", "了解", "认识", "清楚"]]),
        ("11.3", "finisher", "我们 还 不 太 [Slot 1]，你 周末 有 什么 [Slot 2]？", [], []),
    ]),
    (12, "Socialising & Freundschaften", [
        ("12.1", "frame", "我们 一起 去 [Slot] 吧", "Lass uns zusammen [Slot].", ["我们"],
         [["聊天", "跳舞", "玩", "喝一杯", "逛街"]]),
        ("12.2", "frame", "你 可以 [Slot 1] 我 [Slot 2] 吗？", "Kannst du mich [Slot 1] [Slot 2]?", ["你"],
         [["介绍", "帮忙", "照顾", "加"], ["微信", "朋友"]]),
        ("12.3", "finisher", "你 可以 加 我 [Slot 1] 吗？我们 一起 去 [Slot 2] 吧", [], []),
    ]),
]


def lade_wortliste():
    """Excel einlesen und die beiden bekannten Datenfehler heilen."""
    wb = openpyxl.load_workbook(EXCEL, data_only=True)
    lex, hinweise = {}, []
    for nr, r in enumerate(wb["Tabelle1"].iter_rows(min_row=2, values_only=True), start=2):
        if not r[0]:
            continue
        hanzi, pinyin, bedeutung, hsk = r[0], r[1], r[2], r[3]
        # Zeile 37: Pinyin und Bedeutung stecken mit Semikolon in EINER Zelle,
        # dadurch ist ALLES dahinter um eine Spalte verrutscht - auch HSK.
        # Nicht auf ein leeres Bedeutungsfeld pruefen: dort steht durch das
        # Verrutschen schon der HSK-Wert.
        if pinyin and ";" in str(pinyin):
            pinyin, bedeutung = str(pinyin).split(";", 1)
            hsk = r[2]
            hinweise.append(f"Zeile {nr}: verrutschte Spalten geheilt ({hanzi})")
        # Sammelzellen in Einzeleintraege aufloesen, damit die Zahlen als
        # Slots verwendbar sind (Nutzer-Entscheidung 2026-08-20).
        if " / " in str(hanzi):
            teile = [t.strip() for t in str(hanzi).split("/")]
            pin = [t.strip() for t in str(pinyin).split("/")]
            if len(teile) == len(pin):
                for t, pi in zip(teile, pin):
                    lex[t] = {"hanzi": t, "pinyin": pi,
                              "de": ZAHL_BEDEUTUNG.get(t, str(bedeutung).strip()),
                              "hsk": str(hsk).strip()}
                hinweise.append(f"Zeile {nr}: Sammelzelle in {len(teile)} Eintraege zerlegt")
                continue
            hinweise.append(f"Zeile {nr}: Sammelzelle NICHT zerlegbar ({hanzi})")
        lex[hanzi] = {
            "hanzi": hanzi,
            "pinyin": str(pinyin).strip(),
            "de": str(bedeutung).strip(),
            "hsk": str(hsk).strip(),
        }
    # Erweiterung auf den vollen HSK-1+2-Wortschatz. Kommt NACH der Excel,
    # damit Simons Datei immer gewinnt, falls ein Wort doppelt auftaucht.
    for hanzi, (pinyin, de, hsk) in ZUSATZ_WORTLISTE.items():
        if hanzi in lex:
            hinweise.append(f"Erweiterung uebersprungen, steht schon in der Excel: {hanzi}")
            continue
        lex[hanzi] = {"hanzi": hanzi, "pinyin": pinyin, "de": de, "hsk": hsk}

    for hanzi, (pinyin, de, hsk) in ERGAENZUNGEN.items():
        if hanzi not in lex:
            lex[hanzi] = {"hanzi": hanzi, "pinyin": pinyin, "de": de, "hsk": hsk}
            hinweise.append(f"ergaenzt (fehlte in der Excel): {hanzi} = {pinyin}")
    return lex, hinweise


def normiere(eintrag):
    """
    Ein rohes Lektions-Tupel auf feste Form bringen: (art, rahmen,
    rahmen_de, pron, gruppen). Frame- UND series-Tupel tragen seit
    2026-08-25 ein deutsches Rahmen-Template als 3. Element (fuer die
    Situations-Auswahl in der App, siehe
    mobile/src/data/situationsAufgaben.ts) - finisher nicht, der hat schon
    FINISHER_AUFGABE. `rahmen_de` bleibt bei finisher `None`, damit die
    Tupel-Laenge trotzdem einheitlich ist.
    """
    if eintrag[0] in ("frame", "series"):
        art, rahmen, rahmen_de, pron, gruppen = eintrag
    else:
        art, rahmen, pron, gruppen = eintrag
        rahmen_de = None
    return art, rahmen, rahmen_de, pron, gruppen


def module_mit_erweiterung():
    """
    Basis-Curriculum plus Erweiterung, Lektionen lueckenlos durchnummeriert.

    Die zusaetzlichen Lektionen haengen VOR dem Finisher - der bleibt immer
    die letzte Lektion eines Moduls, weil er die vorherigen kombiniert.
    Die Nummern werden hier neu vergeben statt in den Datendateien
    festgeschrieben: sonst muesste beim Einschieben einer Lektion jede
    folgende von Hand nachgezogen werden.
    """
    zusammen = []
    for nummer, titel, lektionen in MODULE:
        basis = [normiere(l[1:]) for l in lektionen if l[1] != "finisher"]
        finisher = [normiere(l[1:]) for l in lektionen if l[1] == "finisher"]
        extra = [normiere(e) for e in ZUSATZ_LEKTIONEN.get(nummer, [])]
        alle = basis + extra + finisher
        zusammen.append((
            nummer, titel,
            [(f"{nummer}.{i}", art, rahmen, rahmen_de, pron, gruppen)
             for i, (art, rahmen, rahmen_de, pron, gruppen) in enumerate(alle, start=1)],
        ))
    return zusammen


def segmentiere(text, lex):
    """
    Rahmen in Pinyin uebersetzen. Laengster Treffer zuerst, damit aus
    '什么时候' nicht '什么' + '时候' wird.

    Alles, was kein Hanzi ist - Platzhalter, Schraegstriche, Satzzeichen -
    bleibt unveraendert stehen.
    """
    laengste = max(len(k) for k in lex)
    out, i, unbekannt = [], 0, []
    vorher_pinyin = False
    while i < len(text):
        z = text[i]
        if not ("一" <= z <= "鿿"):
            out.append(z)
            vorher_pinyin = False
            i += 1
            continue
        # Zwei direkt benachbarte Woerter stehen im Chinesischen ohne
        # Leerzeichen ("这是"), im Pinyin gehoert aber eins dazwischen -
        # sonst wird aus "zhe shi" ein "zheshi".
        if vorher_pinyin:
            out.append(" ")
        for n in range(min(laengste, len(text) - i), 0, -1):
            stueck = text[i:i + n]
            if stueck in lex:
                out.append(lex[stueck]["pinyin"])
                i += n
                break
        else:
            unbekannt.append(z)
            out.append(z)
            i += 1
        vorher_pinyin = True
    # Doppelte Leerzeichen aus dem Zusammensetzen wegraeumen, aber die
    # Abstaende um Satzzeichen erhalten.
    roh = "".join(out)
    return re.sub(r" {2,}", " ", roh).strip(), unbekannt


# Pronomen, die als "/"-Alternative in einem Rahmen auftauchen koennen
# (2026-08-26, siehe Kommentar bei rahmen_neu) - dieselbe kleine, stabile
# Menge wie PERSONEN in useCategoryVocab.ts auf der App-Seite. Bleiben
# bewusst von der "versteckte Alternative nachtraeglich registrieren"-Regel
# ausgenommen: sie werden im Teaser nie gesprochen, sie einzufuehren waere
# gelogen - der urspruengliche Grund fuer erste_variante() weiter unten.
PRONOMEN_ALTERNATIVEN = {"我", "你", "他", "她", "我们", "你们", "他们"}


def erste_variante(rahmen):
    """"我 / 他 / 她 是 X" -> "我 是 X" - was der Nutzer tatsaechlich spricht."""
    # Ersetzung als FUNKTION statt als Rueckreferenz: eine Rueckreferenz
    # haelt beim Schreiben durch Hilfsskripte nicht zuverlaessig durch -
    # hier wurde daraus schon einmal ein Steuerzeichen, wodurch die erste
    # Variante ganz VERSCHWAND statt erhalten zu bleiben:
    # "我 / 他 / 她 是 X" ergab "是 X". Mit einer Funktion gibt es nichts
    # zu escapen.
    return re.sub(r"(\S+)(?:\s*/\s*\S+)+", lambda m: m.group(1), rahmen)


def rahmen_woerter(text, lex):
    """
    Welche Woerter stecken im Satzrahmen?
    
    Gebraucht fuer den Teaser-Satz: der Nutzer spricht ihn nach und erfaehrt
    danach, aus welchen Woertern er bestand. Genau diese Rahmenwoerter
    (我, 是, 很, 吗 ...) wurden bisher NIRGENDS unterrichtet - sie standen nur
    stumm in den Saetzen herum.

    Platzhalter werden uebersprungen, Reihenfolge bleibt, Dubletten fliegen
    raus.
    """
    ohne_platzhalter = re.sub(r"\[[^\]]*\]", " ", text)
    laengste = max(len(k) for k in lex)
    treffer, i = [], 0
    while i < len(ohne_platzhalter):
        z = ohne_platzhalter[i]
        if not ("一" <= z <= "鿿"):
            i += 1
            continue
        for n in range(min(laengste, len(ohne_platzhalter) - i), 0, -1):
            stueck = ohne_platzhalter[i:i + n]
            if stueck in lex:
                if stueck not in treffer:
                    treffer.append(stueck)
                i += n
                break
        else:
            i += 1
    return treffer


def wort(hanzi, lex):
    e = lex.get(hanzi)
    if not e:
        raise KeyError(f"'{hanzi}' fehlt in der Wortliste")
    return {"hanzi": e["hanzi"], "pinyin": e["pinyin"], "de": e["de"]}


def baue():
    lex, hinweise = lade_wortliste()
    for h in hinweise:
        print("  Hinweis:", h)

    module, unbekannt_gesamt, gesehen, ueberlimit = [], [], set(), []
    for nummer, titel, lektionen in module_mit_erweiterung():
        lekt_out = []
        for lid, art, rahmen, rahmen_de, pronomen, gruppen in lektionen:
            rahmen_pinyin, unbek = segmentiere(rahmen, lex)
            unbekannt_gesamt += [(lid, z) for z in unbek]

            # Rahmenwoerter, die noch nie vorkamen - die fuehrt der Teaser ein.
            # Aus der ERSTEN Variante: "我 / 他 / 她 ist X" wird als "我 ist X"
            # gesprochen. 他/她 stehen nur als Alternative da und werden im
            # Teaser gar nicht gesagt - sie hier einzufuehren waere gelogen.
            #
            # Berichtigt 2026-08-26 (Fehlerbericht: Wortlisten mancher
            # Kategorien fuehrten nicht alle Verben auf). Grund: "要" in "我
            # 想 / 要 X" (Lektion 2.1) ist KEIN Pronomen, sondern ein echtes,
            # eigenstaendiges Verb - wurde aber durch erste_variante() genauso
            # weggeschnitten wie ein Pronomen-Alternativ und war dadurch in
            # KEINER Lektion registriert (weder Pronomen noch Slot-Wort),
            # obwohl es in hunderten Saetzen vorkommt. Fix: Woerter aus ALLEN
            # Varianten einsammeln, aber nur die NEUEN (gegenueber der ersten
            # Variante) behalten, und davon wiederum Pronomen ausschliessen -
            # die bleiben absichtlich stumm wie zuvor. Fuer alle bisherigen
            # Rahmen (16 von 17 "/"-Faellen sind reine Pronomen-Alternativen)
            # aendert das nichts, weil deren "versteckte" Woerter ausnahmslos
            # Pronomen sind und damit weiterhin herausgefiltert werden.
            erste = erste_variante(rahmen)
            woerter_erste_variante = set(rahmen_woerter(erste, lex))
            versteckte_alternativen = [
                h for h in rahmen_woerter(rahmen, lex)
                if h not in woerter_erste_variante and h not in PRONOMEN_ALTERNATIVEN
            ]
            rahmen_neu = [h for h in rahmen_woerter(erste, lex) + versteckte_alternativen
                          if h not in gesehen]
            gesehen.update(rahmen_neu)

            slots = [[wort(h, lex) for h in g] for g in gruppen]
            flach = [h for g in gruppen for h in g]
            neu = [h for h in flach if h not in gesehen]
            gesehen.update(flach)
            # Die Zahlen-Lektion ist die eine bewusste Ausnahme.
            if len(neu) > 5 and art != "series":
                ueberlimit.append((lid, len(neu), neu))

            lekt_out.append({
                "id": lid,
                "kind": art,
                "frame": {"pinyin": rahmen_pinyin, "hanzi": rahmen},
                # Nur bei "frame" gesetzt (siehe normiere()) - fuers
                # "Wie sagst du: ...?" der Situations-Auswahl in der App.
                "frameDe": rahmen_de,
                "pronouns": [wort(h, lex) for h in pronomen],
                "slotGroups": slots,
                "newCount": len(neu),
                # Nur beim Finisher gesetzt: die Situation, die der Nutzer
                # ohne jede Hilfe auf dem Schirm loesen soll.
                "task": FINISHER_AUFGABE.get(nummer) if art == "finisher" else None,
                # Woerter des Satzrahmens, die HIER zum ersten Mal auftauchen.
                # Der Teaser-Satz fuehrt sie ein: erst nachsprechen, dann
                # aufloesen, woraus er bestand.
                "newFrameWords": [wort(h, lex) for h in rahmen_neu],
            })
        module.append({"number": nummer, "title": titel, "lessons": lekt_out})

    return module, lex, gesehen, unbekannt_gesamt, ueberlimit


def schreibe_ts(module, lex, gesehen):
    kopf = f'''// ERZEUGT - nicht von Hand aendern.
// Quelle: Sprachlisten/Chinesisch HSK1 und HSK2/build_chinesisch_kurs.py
// Neu bauen: python "build_chinesisch_kurs.py"
//
// Das 12-Modul-Curriculum fuer Chinesisch (HSK1/HSK2) nach Simons Vorgabe
// vom 2026-08-20. Aufbau je Modul: drei Lektionen.
//   Satzrahmen mit je 4-5 Vokabel-Slots, am Modulende ein Finisher ohne
//   neue Vokabeln. Module 1, 3 und 4 haben deshalb VIER Lektionen statt
//   drei - siehe Generator-Skript fuer die Begruendung.
//
// Geuebt wird ueber PINYIN und Sprache, nicht ueber Zeichen (Nutzer-Vorgabe:
// "fuer das Lernen brauchen wir keine Zeichen"). `hanzi` laeuft passiv mit
// und ist nie der abgefragte Teil - passt zum Kernprinzip der App, dass
// Lesen und Schreiben nicht trainiert werden.
//
// Umfang: {len(module)} Module, {sum(len(m["lessons"]) for m in module)} Lektionen, {len(gesehen)} Slot-Vokabeln
// (Wortliste insgesamt: {len(lex)} Eintraege - der Rest sind Rahmen- und
// Funktionswoerter, die in den Satzmustern stecken statt in Slots).

export type CourseWord = {{
  /** Laeuft passiv mit - wird nie abgefragt. */
  hanzi: string;
  /** Der eigentliche Lerntext. */
  pinyin: string;
  /** Bedeutung in der Sprache des Nutzers. */
  de: string;
}};

export type CourseLessonData = {{
  /** "1.1", "1.2", "1.3" ... */
  id: string;
  /**
   * `frame`    Satzrahmen mit 4-5 neuen Slots.
   * `series`   geschlossene Reihe (Zahlen) - bewusst mehr als 5 auf einmal,
   *            weil sie als Abfolge gelernt wird und nicht als Einzelwoerter.
   * `finisher` fuehrt KEINE neuen Vokabeln ein, sondern kombiniert die
   *            Rahmen des Moduls.
   */
  kind: 'frame' | 'series' | 'finisher';
  /** Satzmuster mit Platzhaltern, in Pinyin und passiv in Zeichen. */
  frame: {{ pinyin: string; hanzi: string }};
  /**
   * Deutsches Rahmen-Template mit denselben [Slot]/[Zahl]-Platzhaltern wie
   * `frame.hanzi` (2026-08-25) - bei `kind: 'frame'` und `'series'`
   * gesetzt, bei `'finisher'` `null` (der hat schon sein eigenes `task`).
   * Fuers "Wie sagst du: ...?" der Situations-Auswahl in der
   * Wörter-Wiederholung, siehe data/situationsAufgaben.ts.
   */
  frameDe: string | null;
  /** Welche Pronomen diese Lektion traegt. */
  pronouns: CourseWord[];
  /** Eine Gruppe je Platzhalter im Rahmen. */
  slotGroups: CourseWord[][];
  /** Wie viele der Slots in dieser Lektion zum ersten Mal vorkommen. */
  newCount: number;
  /**
   * Nur beim Finisher: die Situation auf Deutsch. Der Uebungs-Screen zeigt
   * dann NICHTS ausser diesem Satz - kein Satzmuster, keine Woerter. Das ist
   * der Moment, in dem sich zeigt, ob wirklich etwas haengengeblieben ist.
   */
  task: string | null;
  /**
   * Woerter des Satzrahmens, die in dieser Lektion zum ersten Mal vorkommen.
   *
   * Der Teaser-Satz am Lektionsanfang fuehrt sie ein - vorher wurden sie
   * ueberhaupt nicht unterrichtet, sie standen nur stumm in den Saetzen.
   */
  newFrameWords: CourseWord[];
}};

export type CourseModuleData = {{
  number: number;
  title: string;
  lessons: CourseLessonData[];
}};

export const CHINESE_COURSE: CourseModuleData[] =
'''
    körper = json.dumps(module, ensure_ascii=False, indent=2)
    # NUR die Schluessel entquoten. Die Werte behalten ihre doppelten
    # Anfuehrungszeichen - ein pauschales Umschreiben auf einfache zerlegte
    # die Datei, weil Pinyin Apostrophe enthaelt: nǚ'ér, kě'ài. In JSON folgt
    # ein Doppelpunkt nur auf einen Schluessel, der Ausdruck trifft also
    # keine Werte.
    körper = re.sub(r'"(\w+)":', r"\1:", körper)
    ZIEL.write_text(kopf + körper + ";\n", encoding="utf-8", newline="\n")


if __name__ == "__main__":
    module, lex, gesehen, unbekannt, ueberlimit = baue()

    if unbekannt:
        print("\n  WARNUNG - Zeichen im Rahmen ohne Wortlisten-Eintrag:")
        for lid, z in unbekannt:
            print(f"    {lid}: {z}")

    if ueberlimit:
        print("\n  WARNUNG - ueber dem eigenen Limit von 5 neuen Vokabeln:")
        for lid, n, neu in ueberlimit:
            print(f"    {lid}: {n} neu -> {' '.join(neu)}")

    schreibe_ts(module, lex, gesehen)
    print(f"\n  Geschrieben: {ZIEL}")
    print(f"  {len(module)} Module, {sum(len(m['lessons']) for m in module)} Lektionen, "
          f"{len(gesehen)} Slot-Vokabeln, {len(lex)} Wortlisten-Eintraege")
