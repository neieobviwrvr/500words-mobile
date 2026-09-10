# -*- coding: utf-8 -*-
"""
Erweiterung des Curriculums auf den vollen HSK-1+2-Wortschatz (HSK 2.0,
150 + 150 = 300 Woerter).

HINTERGRUND (2026-08-20): Simons Excel-Wortliste deckte nur rund 130 der 300
Woerter ab, und die Modul-/Lektionsvorlage war genau darauf zugeschnitten.
Diese Datei ergaenzt die fehlenden Woerter UND die Lektionen, die sie
aufnehmen - nach denselben Regeln wie bisher:

  * hoechstens 4-5 NEUE Vokabeln je Lektion
  * jede Lektion variiert genau EINE Slot-Gruppe
  * am Modulende ein Finisher ohne neue Vokabeln
  * die zwoelf Module bleiben, sie bekommen nur mehr Lektionen
    (Nutzer-Entscheidung: "selbst wenn wir dann pro Modul einfach mehr
    Lektionen haben muessten")

ABGEGLICHEN (2026-08-20): gegen zwei unabhaengige Neuveroeffentlichungen der
HSK-2.0-Liste geprueft, siehe merge_wortliste.py. Eintraege mit der Stufe
"nicht in HSK 1+2" sind dort NICHT belegt - meist HSK 3 (老 statt 老师,
手 statt 手机) oder in der Liste nur als laengeres Wort (说话 statt 说). Sie
bleiben bewusst drin, tragen aber keine falsche Stufe mehr.

WICHTIG ZUR HERKUNFT: Hanzi, Pinyin und Bedeutung der ERGAENZTEN Woerter
stammen nicht aus Simons Excel, sondern sind hier nach dem standardisierten
HSK-1/2-Wortschatz zusammengestellt. Sie sind nach bestem Wissen korrekt,
aber NICHT gegen eine offizielle Liste abgeglichen - ein Spot-Check durch
jemanden mit Chinesisch-Kenntnissen ist sinnvoll, bevor daraus Audio
erzeugt wird. Die Woerter aus der Excel bleiben unangetastet.

Die Toene sind der fehleranfaellige Teil: 妈 (mā) und 马 (mǎ) sind
verschiedene Woerter. Wer hier etwas aendert, aendert die Aussprache.
"""

# ---------------------------------------------------------------------------
# Ergaenzte Vokabeln: hanzi -> (pinyin, deutsch, hsk)
# ---------------------------------------------------------------------------
ZUSATZ_WORTLISTE = {
    # --- Modul 1: Familie und Personendaten ---
    "爸爸": ("bàba", "Vater", "HSK 1"),
    "妈妈": ("māma", "Mutter", "HSK 1"),
    "哥哥": ("gēge", "älterer Bruder", "HSK 2"),
    "姐姐": ("jiějie", "ältere Schwester", "HSK 2"),
    "弟弟": ("dìdi", "jüngerer Bruder", "HSK 2"),
    "妹妹": ("mèimei", "jüngere Schwester", "HSK 2"),
    "儿子": ("érzi", "Sohn", "HSK 1"),
    "女儿": ("nǚ'ér", "Tochter", "HSK 1"),
    "名字": ("míngzi", "Name", "HSK 1"),
    "岁": ("suì", "Jahre (alt)", "HSK 1"),
    "谁": ("shéi", "wer", "HSK 1"),
    "家": ("jiā", "Zuhause / Familie", "HSK 1"),
    "先生": ("xiānsheng", "Herr", "HSK 1"),
    "小姐": ("xiǎojiě", "Frau (Anrede)", "HSK 1"),

    # --- Modul 2: Handeln und Mitteilen ---
    "说": ("shuō", "sagen / sprechen", "nicht in HSK 1+2"),
    "写": ("xiě", "schreiben", "HSK 1"),
    "读": ("dú", "lesen", "HSK 1"),
    "听": ("tīng", "hören", "HSK 1"),
    "问": ("wèn", "fragen", "HSK 2"),
    "做": ("zuò", "machen / tun", "HSK 1"),
    "开": ("kāi", "öffnen / fahren", "HSK 1"),
    "关": ("guān", "schließen", "nicht in HSK 1+2"),
    "用": ("yòng", "benutzen", "nicht in HSK 1+2"),
    "送": ("sòng", "bringen / schenken", "HSK 2"),
    "告诉": ("gàosu", "mitteilen / sagen", "HSK 2"),
    "回答": ("huídá", "antworten", "HSK 2"),
    "知道": ("zhīdào", "wissen", "HSK 2"),
    "觉得": ("juéde", "finden / meinen", "HSK 2"),

    # --- Modul 3: Geld, Dinge, Mengen ---
    "钱": ("qián", "Geld", "HSK 1"),
    "块": ("kuài", "Yuan (Geldeinheit)", "HSK 1"),
    "多少": ("duōshao", "wie viel", "HSK 1"),
    "几": ("jǐ", "wie viele", "HSK 1"),
    "东西": ("dōngxi", "Ding / Sache", "HSK 1"),
    "书": ("shū", "Buch", "HSK 1"),
    "报纸": ("bàozhǐ", "Zeitung", "HSK 2"),
    "桌子": ("zhuōzi", "Tisch", "HSK 1"),
    "椅子": ("yǐzi", "Stuhl", "HSK 1"),
    "杯子": ("bēizi", "Becher / Glas", "HSK 1"),
    "卖": ("mài", "verkaufen", "HSK 2"),
    "多": ("duō", "viel", "HSK 1"),
    "少": ("shǎo", "wenig", "HSK 1"),
    "长": ("cháng", "lang", "HSK 2"),
    "短": ("duǎn", "kurz", "nicht in HSK 1+2"),

    # --- Modul 4: Uhrzeit und Datum ---
    "昨天": ("zuótiān", "gestern", "HSK 1"),
    "早上": ("zǎoshang", "morgens", "HSK 2"),
    "上午": ("shàngwǔ", "vormittags", "HSK 1"),
    "中午": ("zhōngwǔ", "mittags", "HSK 2"),
    "下午": ("xiàwǔ", "nachmittags", "HSK 1"),
    "年": ("nián", "Jahr", "HSK 1"),
    "月": ("yuè", "Monat", "HSK 1"),
    "号": ("hào", "Tag (Datum)", "HSK 1"),
    "星期": ("xīngqī", "Woche", "HSK 1"),
    "点": ("diǎn", "Uhr (Zeitangabe)", "HSK 1"),
    "分": ("fēn", "Minute", "nicht in HSK 1+2"),
    "时候": ("shíhou", "Zeitpunkt", "HSK 1"),
    "生日": ("shēngrì", "Geburtstag", "HSK 2"),
    "起床": ("qǐchuáng", "aufstehen", "HSK 2"),

    # --- Modul 5: Orte und Richtungen ---
    "学校": ("xuéxiào", "Schule", "HSK 1"),
    "教室": ("jiàoshì", "Klassenzimmer", "HSK 1"),
    "公司": ("gōngsī", "Firma", "HSK 2"),
    "房间": ("fángjiān", "Zimmer", "HSK 2"),
    "前面": ("qiánmiàn", "vorne", "HSK 1"),
    "后面": ("hòumiàn", "hinten", "HSK 1"),
    "里面": ("lǐmiàn", "drinnen", "nicht in HSK 1+2"),
    "外面": ("wàimiàn", "draußen", "nicht in HSK 1+2"),
    "上面": ("shàngmiàn", "oben", "nicht in HSK 1+2"),
    "下面": ("xiàmiàn", "unten", "nicht in HSK 1+2"),
    "旁边": ("pángbiān", "daneben", "HSK 2"),
    "左边": ("zuǒbiān", "links", "HSK 2"),
    "右边": ("yòubiān", "rechts", "HSK 2"),
    "远": ("yuǎn", "weit", "HSK 2"),
    "近": ("jìn", "nah", "HSK 2"),
    "走": ("zǒu", "gehen / laufen", "HSK 2"),
    "到": ("dào", "ankommen", "HSK 2"),
    "回": ("huí", "zurückkehren", "HSK 1"),

    # --- Modul 6: Speisen und Getränke ---
    "米饭": ("mǐfàn", "Reis", "HSK 1"),
    "面条": ("miàntiáo", "Nudeln", "nicht in HSK 1+2"),
    "鸡蛋": ("jīdàn", "Ei", "HSK 2"),
    "牛奶": ("niúnǎi", "Milch", "HSK 2"),
    "面包": ("miànbāo", "Brot", "nicht in HSK 1+2"),
    "水果": ("shuǐguǒ", "Obst", "HSK 1"),
    "西瓜": ("xīguā", "Wassermelone", "HSK 2"),
    "鱼": ("yú", "Fisch", "HSK 2"),
    "服务员": ("fúwùyuán", "Kellner / Bedienung", "HSK 2"),
    "饿": ("è", "hungrig", "nicht in HSK 1+2"),
    "渴": ("kě", "durstig", "nicht in HSK 1+2"),
    "吃饱": ("chībǎo", "satt sein", "nicht in HSK 1+2"),

    # --- Modul 7: Eigenschaften und Farben ---
    "慢": ("màn", "langsam", "HSK 2"),
    "胖": ("pàng", "dick", "nicht in HSK 1+2"),
    "瘦": ("shòu", "dünn", "nicht in HSK 1+2"),
    "老": ("lǎo", "alt", "nicht in HSK 1+2"),
    "年轻": ("niánqīng", "jung", "nicht in HSK 1+2"),
    "聪明": ("cōngming", "klug", "nicht in HSK 1+2"),
    "可爱": ("kě'ài", "niedlich", "nicht in HSK 1+2"),
    "高兴": ("gāoxìng", "froh", "HSK 1"),
    "快乐": ("kuàilè", "fröhlich", "HSK 2"),
    "颜色": ("yánsè", "Farbe", "HSK 2"),
    "白": ("bái", "weiß", "HSK 2"),
    "黑": ("hēi", "schwarz", "HSK 2"),
    "红": ("hóng", "rot", "HSK 2"),
    "蓝": ("lán", "blau", "nicht in HSK 1+2"),

    # --- Modul 8: Verknüpfen und Freizeit ---
    "但是": ("dànshì", "aber", "HSK 2"),
    "也": ("yě", "auch", "HSK 2"),
    "就": ("jiù", "dann / gleich", "HSK 2"),
    "已经": ("yǐjīng", "schon / bereits", "HSK 2"),
    "会": ("huì", "können (erlernt)", "HSK 1"),
    "可能": ("kěnéng", "vielleicht", "HSK 2"),
    "应该": ("yīnggāi", "sollen", "nicht in HSK 1+2"),
    "看书": ("kànshū", "lesen (Buch)", "nicht in HSK 1+2"),
    # Berichtigt 2026-08-26 (Simons Fehlerbericht): "im Internet sein" passt
    # als Vokabelglosse fuer sich genommen, ergab aber im "Wir sind gerade
    # am [Slot]."-Rahmen (Modul 8, siehe ZUSATZ_LEKTIONEN unten) den kaputten
    # Satz "Wir sind gerade am im Internet sein." - doppeltes Praepositions-
    # Nesting. "surfen" ist die uebliche deutsche Umgangssprache fuer
    # Internet-Nutzung, nominalisiert sich genau wie "joggen" (gleiche
    # Wortgruppe) sauber zu "am Surfen"/"am surfen".
    "上网": ("shàngwǎng", "surfen", "nicht in HSK 1+2"),
    "运动": ("yùndòng", "Sport treiben", "HSK 2"),
    "跑步": ("pǎobù", "joggen", "HSK 2"),
    "游泳": ("yóuyǒng", "schwimmen", "HSK 2"),
    "唱歌": ("chànggē", "singen", "HSK 2"),
    "音乐": ("yīnyuè", "Musik", "nicht in HSK 1+2"),

    # --- Modul 9: Sprachen, Länder, Zeitbezug ---
    "汉语": ("Hànyǔ", "Chinesisch (Sprache)", "HSK 1"),
    "英语": ("Yīngyǔ", "Englisch", "nicht in HSK 1+2"),
    "国家": ("guójiā", "Land / Staat", "nicht in HSK 1+2"),
    "上海": ("Shànghǎi", "Shanghai", "nicht in HSK 1+2"),
    "德国": ("Déguó", "Deutschland", "nicht in HSK 1+2"),
    "以前": ("yǐqián", "früher", "nicht in HSK 1+2"),
    "以后": ("yǐhòu", "später", "nicht in HSK 1+2"),
    "从": ("cóng", "von / ab", "HSK 2"),
    "来": ("lái", "kommen", "HSK 1"),
    "第一次": ("dì-yī cì", "zum ersten Mal", "nicht in HSK 1+2"),

    # --- Modul 10: Körper und Befinden ---
    "医生": ("yīshēng", "Arzt", "HSK 1"),
    "药": ("yào", "Medizin", "HSK 2"),
    "手": ("shǒu", "Hand", "nicht in HSK 1+2"),
    "眼睛": ("yǎnjing", "Auge", "HSK 2"),
    "耳朵": ("ěrduo", "Ohr", "nicht in HSK 1+2"),
    "鼻子": ("bízi", "Nase", "nicht in HSK 1+2"),
    "嘴": ("zuǐ", "Mund", "nicht in HSK 1+2"),
    "身体": ("shēntǐ", "Körper", "HSK 2"),
    "热": ("rè", "heiß", "HSK 1"),
    "舒服": ("shūfu", "wohl / angenehm", "nicht in HSK 1+2"),

    # --- Modul 11: Wetter und Vorlieben ---
    "天气": ("tiānqì", "Wetter", "HSK 1"),
    "下雨": ("xiàyǔ", "regnen", "HSK 1"),
    "下雪": ("xiàxuě", "schneien", "nicht in HSK 1+2"),
    "晴天": ("qíngtiān", "sonniger Tag", "nicht in HSK 1+2"),
    "阴天": ("yīntiān", "bewölkter Tag", "nicht in HSK 1+2"),
    "电影": ("diànyǐng", "Film", "HSK 1"),
    "爱好": ("àihào", "Hobby", "nicht in HSK 1+2"),
    "猫": ("māo", "Katze", "HSK 1"),
    "狗": ("gǒu", "Hund", "HSK 1"),
    "旅行": ("lǚxíng", "reisen", "nicht in HSK 1+2"),

    # --- Modul 12: Höflichkeit und Kontakt ---
    "你好": ("nǐhǎo", "hallo", "nicht in HSK 1+2"),
    "再见": ("zàijiàn", "auf Wiedersehen", "HSK 1"),
    "谢谢": ("xièxie", "danke", "HSK 1"),
    "不客气": ("bú kèqi", "gern geschehen", "HSK 1"),
    "对不起": ("duìbuqǐ", "Entschuldigung", "HSK 1"),
    "没关系": ("méi guānxi", "macht nichts", "HSK 1"),
    "欢迎": ("huānyíng", "willkommen", "HSK 2"),
    "礼物": ("lǐwù", "Geschenk", "nicht in HSK 1+2"),
    "一下": ("yíxià", "kurz / mal", "nicht in HSK 1+2"),
    "帮": ("bāng", "helfen", "nicht in HSK 1+2"),

    # --- Nachtrag 2026-08-20: die 40 als "aufnehmen" eingestuften
    #     HSK-1+2-Woerter aus dem Quellen-Abgleich (siehe merge_wortliste.py).
    #     Alle in beiden Quellen belegt - anders als der Rest dieser Datei
    #     brauchen sie keinen Stufen-Vorbehalt.
    "和": ("hé", "und", "HSK 1"),
    "都": ("dōu", "alle / beide", "HSK 1"),
    "些": ("xiē", "einige", "HSK 1"),
    "两": ("liǎng", "zwei (vor Zählwort)", "HSK 2"),
    "零": ("líng", "null", "HSK 1"),
    "别": ("bié", "nicht (Aufforderung)", "HSK 2"),
    "真": ("zhēn", "wirklich", "HSK 2"),
    "再": ("zài", "nochmal / wieder", "HSK 2"),
    "最": ("zuì", "am meisten", "HSK 2"),
    "完": ("wán", "fertig / zu Ende", "HSK 2"),
    "次": ("cì", "Mal (Zählwort)", "HSK 2"),
    "让": ("ràng", "lassen", "HSK 2"),
    "人": ("rén", "Mensch / Person", "HSK 1"),
    "呢": ("ne", "und du? (Rückfragepartikel)", "HSK 1"),
    "哪": ("nǎ", "welche(r)", "HSK 1"),
    "那": ("nà", "jene(r) / das da", "HSK 1"),
    "里": ("lǐ", "in / drinnen", "HSK 1"),
    "上": ("shàng", "auf / oben", "HSK 1"),
    "下": ("xià", "unter / unten", "HSK 1"),
    "外": ("wài", "außen", "HSK 2"),
    "懂": ("dǒng", "verstehen", "HSK 2"),
    "说话": ("shuōhuà", "sprechen / reden", "HSK 1"),
    "怎么样": ("zěnmeyàng", "wie ist es?", "HSK 1"),
    "问题": ("wèntí", "Frage / Problem", "HSK 2"),
    "意思": ("yìsi", "Bedeutung / Sinn", "HSK 2"),
    "错": ("cuò", "falsch", "HSK 2"),
    "住": ("zhù", "wohnen", "HSK 1"),
    "穿": ("chuān", "anziehen / tragen", "HSK 2"),
    "洗": ("xǐ", "waschen", "HSK 2"),
    "出租车": ("chūzūchē", "Taxi", "HSK 1"),
    "飞机": ("fēijī", "Flugzeug", "HSK 1"),
    "公共汽车": ("gōnggòng qìchē", "Bus", "HSK 2"),
    "路": ("lù", "Weg / Straße", "HSK 2"),
    "门": ("mén", "Tür", "HSK 2"),
    "元": ("yuán", "Yuan (Währung)", "HSK 2"),
    "分钟": ("fēnzhōng", "Minute", "HSK 1"),
    "小时": ("xiǎoshí", "Stunde", "HSK 2"),
    "时间": ("shíjiān", "Zeit", "HSK 2"),
    "您": ("nín", "Sie (höflich)", "HSK 2"),
    "喂": ("wéi", "hallo (am Telefon)", "HSK 1"),
}

# ---------------------------------------------------------------------------
# Zusaetzliche Lektionen, je Modul VOR dem Finisher eingehaengt
# ---------------------------------------------------------------------------
# Aufbau wie im Hauptskript: (id-Suffix, art, Rahmen, Pronomen, Slot-Gruppen).
# Die endgueltige Lektionsnummer vergibt der Generator, damit sie luecken-
# los bleibt - deshalb steht hier nur die Reihenfolge, keine feste Zahl.
ZUSATZ_LEKTIONEN = {
    1: [
        ("frame", "这是 我的 [Slot]", "Das ist mein [Slot].", ["他", "她"], [["爸爸", "妈妈", "哥哥", "姐姐"]]),
        ("frame", "这是 我的 [Slot]", "Das ist mein [Slot].", ["他", "她"], [["弟弟", "妹妹", "儿子", "女儿"]]),
        ("frame", "你 叫 什么 [Slot 1]？我 [Zahl] [Slot 2]", "Wie ist dein [Slot 1]? Ich bin [Zahl] [Slot 2] alt.", ["我", "你"],
         [["名字"], ["岁"]]),
        ("frame", "[Slot] 是 你的 朋友？", "Ist [Slot] dein Freund?", ["你"], [["谁", "先生", "小姐"]]),
    ],
    2: [
        ("frame", "我 想 [Slot]", "Ich möchte [Slot].", ["我"], [["说", "写", "读", "听"]]),
        ("frame", "你 可以 [Slot] 吗？", "Kannst du [Slot]?", ["你"], [["问", "做", "开", "关"]]),
        ("frame", "我 想 [Slot] 这个", "Ich möchte das [Slot].", ["我"], [["用", "送", "回答"]]),
        # 告诉 braucht ein Gegenueber, 知道/觉得 einen Inhalt - deshalb zwei
        # Gruppen in einem Rahmen statt einer gemeinsamen Liste.
        ("frame", "我 [Slot 1] 你，我 [Slot 2] 这个 很 好", "Ich [Slot 1] dir, ich [Slot 2] das gut.", ["我"],
         [["告诉"], ["知道", "觉得"]]),
        # --- Nachtrag: Grundverben und Verstaendigung ---
        ("frame", "我 不 [Slot 1] 这个 [Slot 2]", "Ich [Slot 1] [Slot 2] nicht.", ["我"], [["懂"], ["意思", "问题"]]),
        ("frame", "我 想 [Slot 1] 衣服，这个 是 [Slot 2] 的", "Ich möchte die Kleidung [Slot 1]. Die ist [Slot 2].", ["我"], [["洗", "穿"], ["错"]]),
        ("frame", "请 [Slot 1] 我 进，我 吃 [Slot 2] 了", "Bitte [Slot 1] mich rein, ich bin [Slot 2] mit dem Essen.", ["我"], [["让"], ["完"]]),
        ("frame", "我 想 [Slot]", "Ich möchte [Slot].", ["我"], [["说话"]]),
    ],
    3: [
        ("frame", "我 有 [Slot]", "Ich habe [Slot].", ["我", "我们"], [["书", "报纸", "东西", "杯子"]]),
        ("frame", "这个 多少 [Slot 1]？我 有 [Zahl] [Slot 2]", "Wie viel [Slot 1] kostet das? Ich habe [Zahl] [Slot 2].", ["我"],
         [["钱"], ["块"]]),
        ("frame", "你 有 [Slot] 个 苹果？", "[Slot] Äpfel hast du?", ["你"], [["几", "多少"]]),
        ("frame", "这个 太 [Slot] 了", "Das ist zu [Slot].", [], [["多", "少", "长", "短"]]),
        ("frame", "我 想 [Slot 1] 这个 [Slot 2]", "Ich möchte diesen [Slot 2] [Slot 1].", ["我"], [["卖"], ["桌子", "椅子"]]),
        # --- Nachtrag: Menge, Geld, Verknuepfung ---
        ("frame", "我 想 买 [Slot 1] 东西，这个 [Zahl] [Slot 2]", "Ich möchte [Slot 1] Dinge kaufen, das kostet [Zahl] [Slot 2].", ["我"], [["些"], ["元"]]),
        ("frame", "我们 [Slot 1] 喜欢 这个，这个 [Slot 2] 贵", "Wir [Slot 1] mögen das, das ist [Slot 2] teuer.", ["我们"], [["都"], ["最"]]),
        ("frame", "我 买 苹果 [Slot] 茶", "Ich kaufe Äpfel [Slot] Tee.", ["我"], [["和"]]),
        ("frame", "我 去 过 一 [Slot]", "Ich war ein [Slot] dort.", ["我"], [["次"]]),
        ("frame", "[Slot] 个 是 我的", "[Slot] gehört mir.", ["我"], [["那"]]),
    ],
    4: [
        ("frame", "我们 [Zeit] 去 吃饭", "Wir gehen [Zeit] essen.", ["我们"],
         [["昨天", "早上", "上午", "中午", "下午"]]),
        ("frame", "今天 是 [Zahl] [Slot]", "Heute ist [Zahl] [Slot].", [], [["年", "月", "号", "星期"]]),
        ("frame", "现在 [Zahl] [Slot]", "Jetzt ist es [Zahl] [Slot].", [], [["点", "分"]]),
        ("frame", "我 早上 [Slot 1]，我的 [Slot 2] 是 五 月", "Ich [Slot 1] morgens, mein [Slot 2] ist im Mai.", ["我"],
         [["起床"], ["生日"]]),
        ("frame", "这个 [Slot] 我 在 学校", "Zu dieser [Slot] war ich in der Schule.", ["我"], [["时候"]]),
        # --- Nachtrag: Dauer ---
        ("frame", "还 有 [Zahl] [Slot]", "Es sind noch [Zahl] [Slot].", [], [["分钟", "小时"]]),
        ("frame", "我 没 有 [Slot 1]，我们 [Slot 2] 去", "Ich habe keine [Slot 1], wir gehen [Slot 2].", ["我", "我们"], [["时间"], ["再"]]),
    ],
    5: [
        # 家 gehoert hierher und nicht zu den Personen - es ist ein Ort.
        ("frame", "[Slot] 在 哪里？", "Wo ist [Slot]?", ["你"], [["学校", "教室", "公司", "房间", "家"]]),
        ("frame", "我 在 [Slot]", "Ich bin [Slot].", ["我"], [["前面", "后面", "里面", "外面"]]),
        ("frame", "我 在 [Slot]", "Ich bin [Slot].", ["我"], [["上面", "下面", "旁边", "左边", "右边"]]),
        # Berichtigt 2026-08-26 (Simons Fehlerbericht): "Wie [Slot] wir?"
        # ging schief, sobald ein trennbares Verb im Slot landete - 到
        # ("ankommen") ergab "Wie ankommen wir?" statt "Wie kommen wir an?".
        # Deutsche Grammatik kann ein trennbares Verb nicht in EINE Luecke
        # packen (Vorsilbe "an" gehoert ans Satzende). "Wie können wir
        # [Slot]?" nimmt jeden Infinitiv unveraendert auf - 走/到/回 werden
        # alle drei korrekt: "gehen / laufen", "ankommen", "zurückkehren".
        ("frame", "我们 怎么 [Slot]？", "Wie können wir [Slot]?", ["我们"], [["走", "到", "回"]]),
        ("frame", "这里 太 [Slot] 了", "Hier ist es zu [Slot].", [], [["远", "近"]]),
        # --- Nachtrag: Lagewoerter und Verkehrsmittel ---
        ("frame", "在 桌子 [Slot]", "[Slot] dem Tisch.", [], [["上", "下", "里", "外"]]),
        ("frame", "我们 坐 [Slot] 去 机场", "Wir fahren mit [Slot] zum Flughafen.", ["我们"], [["出租车", "飞机", "公共汽车"]]),
        ("frame", "[Slot] 在 哪里？", "Wo ist [Slot]?", [], [["路", "门"]]),
        # 哪 und 那 lagen hier zusammen in einer Slot-Gruppe - beide "na",
        # nur der Ton trennt sie. Die Uebung haette den Unterschied also
        # abgefragt, ohne ihn zuverlaessig pruefen zu koennen (siehe
        # Homophon-Abschnitt in CLAUDE.md). Jetzt getrennt: 哪 als FRAGEwort
        # hier, 那 als Hinweiswort in Modul 3 neben dem schon bekannten 这个.
        # Verschiedene Module, verschiedene Funktionen, keine Nachbarschaft.
        ("frame", "[Slot] 个 是 你的？", "[Slot] gehört dir?", ["你"], [["哪"]]),
        # Berichtigt 2026-08-26 (gleicher Fund wie bei "Wie [Slot] wir?"
        # oben): "wohnen" ist Infinitiv, "Ich wohnen hier." ist kein
        # Deutsch. "Ich möchte hier [Slot]." nimmt den Infinitiv wieder
        # unveraendert auf.
        ("frame", "我 [Slot] 在 这里", "Ich möchte hier [Slot].", ["我"], [["住"]]),
    ],
    6: [
        ("frame", "请 给 我们 [Slot]", "Bitte geben Sie uns [Slot].", ["我", "我们"], [["米饭", "面条", "鸡蛋", "牛奶"]]),
        ("frame", "请 给 我们 [Slot]", "Bitte geben Sie uns [Slot].", ["我", "我们"], [["面包", "水果", "西瓜", "鱼"]]),
        ("frame", "我 很 [Slot]", "Ich bin sehr [Slot].", ["我"], [["饿", "渴"]]),
        ("frame", "[Slot 1]，请 给 我们 菜单。我 [Slot 2] 了", "[Slot 1], bitte geben Sie uns die Speisekarte. Ich bin [Slot 2].", ["我", "我们"],
         [["服务员"], ["吃饱"]]),
    ],
    7: [
        ("frame", "他 / 她 比 我 更 [Slot]", "Er ist [Slot] als ich.", ["他", "她", "我"],
         [["慢", "胖", "瘦", "老", "年轻"]]),
        ("frame", "我 很 [Slot]", "Ich bin sehr [Slot].", ["我"], [["高兴", "快乐", "聪明", "可爱"]]),
        ("frame", "你 的 衣服 是 [Slot] 的", "Deine Kleidung ist [Slot].", ["你"], [["白", "黑", "红", "蓝"]]),
        ("frame", "这个 [Slot] 很 漂亮", "Diese [Slot] ist sehr schön.", [], [["颜色"]]),
        ("frame", "你 [Slot] 漂亮", "Du bist [Slot] hübsch.", ["你"], [["真"]]),
    ],
    8: [
        ("frame", "我们 正在 [Slot]", "Wir sind gerade am [Slot].", ["我们", "他"], [["看书", "上网", "运动", "跑步"]]),
        ("frame", "我们 正在 [Slot]", "Wir sind gerade am [Slot].", ["我们", "他"], [["游泳", "唱歌"]]),
        ("frame", "我们 正在 听 [Slot]", "Wir hören gerade [Slot].", ["我们"], [["音乐"]]),
        ("frame", "我 [Slot] 去", "Ich gehe [Slot].", ["我"], [["也", "就", "已经"]]),
        # 但是 verbindet zwei Saetze - als Slot in einem Einzelsatz waere es
        # sinnlos, deshalb steht der Gegensatz schon im Rahmen.
        ("frame", "我 想 去，[Slot] 我 很 忙", "Ich möchte gehen, [Slot] ich bin sehr beschäftigt.", ["我"], [["但是"]]),
        ("frame", "我 [Slot] 去", "Ich [Slot] gehen.", ["我"], [["会", "可能", "应该"]]),
    ],
    9: [
        ("frame", "我 说 [Slot]", "Ich spreche [Slot].", ["我", "他"], [["汉语", "英语"]]),
        ("frame", "我 去 过 [Slot 1]，中国 是 一 个 [Slot 2]", "Ich war schon in [Slot 1], China ist ein [Slot 2].", ["我", "他"],
         [["上海", "德国"], ["国家"]]),
        ("frame", "我 [Slot 1] 去 中国，这 是 我的 [Slot 2]", "Ich gehe [Slot 1] nach China, das ist mein [Slot 2].", ["我"],
         [["以前", "以后"], ["第一次"]]),
        ("frame", "我 [Slot] 德国 来", "Ich komme [Slot] Deutschland.", ["我"], [["从"]]),
        ("frame", "我 是 德国 [Slot]", "Ich bin ein deutscher [Slot].", ["我"], [["人"]]),
    ],
    10: [
        ("frame", "我 / 他 的 [Slot] 很 疼", "Mein [Slot] tut sehr weh.", ["我", "他"],
         [["手", "眼睛", "耳朵", "鼻子"]]),
        ("frame", "我 / 他 的 [Slot 1] 很 [Slot 2]", "Mein [Slot 1] ist sehr [Slot 2].", ["我", "他"],
         [["嘴", "身体"], ["热", "舒服"]]),
        # NICHT "我 要 药": das waere "wǒ yào yào" - 要 und 药 sind exakte
        # Homophone, der Satz kollidiert mit sich selbst. 找 ist aus Modul 9
        # bekannt und passt fuer beide Slots ("einen Arzt suchen",
        # "Medizin suchen").
        ("frame", "我 找 [Slot]", "Ich suche [Slot].", ["我"], [["医生", "药"]]),
    ],
    11: [
        ("frame", "今天 [Slot]", "Heute [Slot].", [], [["下雨", "下雪", "晴天", "阴天"]]),
        ("frame", "今天 [Slot] 很 好", "Heute ist das [Slot] sehr gut.", [], [["天气"]]),
        ("frame", "我 喜欢 [Slot 1]，我的 [Slot 2] 是 旅行", "Ich mag [Slot 1], mein [Slot 2] ist Reisen.", ["我", "你"],
         [["电影"], ["爱好"]]),
        ("frame", "我 有 一 个 [Slot]", "Ich habe einen [Slot].", ["我"], [["猫", "狗"]]),
        ("frame", "我们 一起 去 [Slot] 吧", "Lass uns zusammen [Slot].", ["我们"], [["旅行"]]),
        ("frame", "今天 天气 [Slot 1]？我 很 好，你 [Slot 2]？", "Wie ist das Wetter heute, [Slot 1]? Mir geht's gut, dir [Slot 2]?", ["你"], [["怎么样"], ["呢"]]),
    ],
    12: [
        ("frame", "[Slot]！", "[Slot]!", ["你"], [["你好", "再见", "谢谢", "对不起"]]),
        ("frame", "[Slot]！", "[Slot]!", ["你"], [["不客气", "没关系", "欢迎"]]),
        ("frame", "你 可以 [Slot 1] 我 [Slot 2] 吗？", "Kannst du mir [Slot 1] [Slot 2]?", ["你"], [["帮"], ["一下"]]),
        ("frame", "这 是 你的 [Slot]", "Das ist dein [Slot].", ["你"], [["礼物"]]),
        ("frame", "[Slot] 好！", "[Slot], hallo!", ["你"], [["您"]]),
        ("frame", "[Slot 1]？你 好！[Slot 2] 走！", "[Slot 1]? Hallo! [Slot 2] weggehen!", ["你"], [["喂"], ["别"]]),
    ],
}
