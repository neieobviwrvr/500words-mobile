# -*- coding: utf-8 -*-
"""Lehrplan Chinesisch. Aufbau und Begruendung: ENTWURF.md.

Chinesisch ist grammatisch die EINFACHSTE unserer Sprachen: keine
Konjugation, kein Genus, keine Faelle, kein Plural, keine Artikel. Ein
Wort bleibt in jedem Satz gleich. Dafuer gibt es vier Stellen, an denen ein
falsch gebauter Rahmen dem Nutzer etwas Falsches beibringt:

**1. 是 steht vor NOMEN, 很 vor ADJEKTIVEN.**
    我是学生   ich bin Student     (Nomen -> 是)
    我很累     ich bin muede       (Adjektiv -> 很, NICHT 是)
"我是累" ist der klassische Anfaengerfehler. Deshalb sind es zwei getrennte
Rahmen, und die Slots sind sauber nach Wortart getrennt. 很 heisst hier
NICHT "sehr" - es ist bei Adjektivsaetzen schlicht Pflicht.

**2. Verneint wird mit 不, aber 有 mit 没.**
    我不去      ich gehe nicht
    我没有钱    ich habe kein Geld   (nie 不有)

**3. Vor Zaehlwoertern steht 两, nicht 二.**
    两个人 (zwei Personen), aber 二 beim blossen Zaehlen.
Beide stehen in der Wortliste, der Kurs fuehrt sie getrennt ein.

**4. Zeitangaben stehen VOR dem Verb.**
    我今天去   ich gehe heute      (nie 我去今天)
Deshalb traegt Modul 9 eigene Rahmen mit der Zeit an der richtigen Stelle.

**Gelernt wird ueber PINYIN**, die Zeichen laufen passiv mit - sie tragen
Vertonung und Spracherkennung. Jeder Rahmen liefert deshalb `muster`
(Zeichen) UND `musterLaut` (Pinyin); der Generator besteht darauf.
"""
from gemeinsam import baue_module


SPRACHE = "zh"
TABELLE = "chinesisch_vocab"
WORTSPALTE = "hanzi"
LAUTSCHRIFT_SPALTE = "pinyin"
DATEINAME = "zhCourse.ts"
KONSTANTE = "CHINESE_COURSE_V2"

MODULE = [
    # ==================================================================
    dict(nr=1, titel="Ich bin, du bist",
         finisher="Sag, wer du bist und wie es dir geht.",
         rahmen=[
             dict(muster="[P] 是 [Slot]", musterLaut="[P] shì [Slot]",
                  musterDe="[P] bin [Slot].",
                  pronomen=["我", "你", "他", "她"],
                  neu_im_rahmen=["是"],
                  slots=["学生", "老师", "朋友", "医生", "服务员",
                         "男人", "孩子", "先生", "小姐", "人"]),
             dict(muster="[P] 很 [Slot]", musterLaut="[P] hěn [Slot]",
                  musterDe="[P] bin [Slot].",
                  pronomen=["我", "你", "他", "我们"],
                  neu_im_rahmen=["很"],
                  slots=["累", "高兴", "忙", "难过", "生气",
                         "好", "大", "小", "高", "长"]),
             dict(muster="[P] 是 我的 [Slot]", musterLaut="[P] shì wǒ de [Slot]",
                  musterDe="[P] ist mein [Slot].",
                  pronomen=["的", "您", "谁"],
                  neu_im_rahmen=["的"],
                  slots=["爸爸", "妈妈", "儿子", "女儿", "哥哥",
                         "姐姐", "弟弟", "妹妹", "男朋友", "女朋友"]),
         ]),
    # ==================================================================
    dict(nr=2, titel="Das ist, ich habe",
         finisher="Zeig auf drei Dinge und sag, was sie sind.",
         rahmen=[
             dict(muster="这 是 [Slot]", musterLaut="zhè shì [Slot]",
                  musterDe="Das ist [Slot].",
                  pronomen=["这", "那", "哪"],
                  neu_im_rahmen=["这", "那"],
                  slots=["书", "桌子", "椅子", "杯子", "手机",
                         "电脑", "衣服", "东西", "报纸", "包"]),
             dict(muster="[P] 有 [Slot]", musterLaut="[P] yǒu [Slot]",
                  musterDe="[P] habe [Slot].",
                  pronomen=["我", "你", "他", "我们"],
                  neu_im_rahmen=["有"],
                  slots=["钱", "时间", "问题", "家", "房间",
                         "工作", "公司", "生日", "名字", "颜色"]),
             dict(muster="这 是 [Slot] 的 书", musterLaut="zhè shì [Slot] de shū",
                  musterDe="Das ist [Slot] Buch.",
                  pronomen=[],
                  slots=["猫", "狗", "票", "门", "路"]),
         ]),
    # ==================================================================
    dict(nr=3, titel="Ich will, ich brauche",
         finisher="Bestell dir etwas zu essen und zu trinken.",
         rahmen=[
             dict(muster="[P] 想 [Slot]", musterLaut="[P] xiǎng [Slot]",
                  musterDe="[P] möchte [Slot].",
                  pronomen=["我", "你", "我们"],
                  neu_im_rahmen=["想", "要"],
                  slots=["吃", "喝", "买", "看", "坐",
                         "去", "来", "走", "问", "找"]),
             dict(muster="[P] 要 [Slot]", musterLaut="[P] yào [Slot]",
                  musterDe="[P] möchte [Slot].",
                  pronomen=["我", "他"],
                  slots=["水", "茶", "咖啡", "啤酒", "牛奶",
                         "米饭", "菜", "水果", "苹果", "鸡蛋"]),
             dict(muster="请 给 我 [Slot]", musterLaut="qǐng gěi wǒ [Slot]",
                  musterDe="Bitte gib mir [Slot].",
                  pronomen=["请", "给"],
                  neu_im_rahmen=["请", "给"],
                  slots=["药", "鱼", "羊肉", "西瓜", "钱"]),
         ]),
    # ==================================================================
    dict(nr=4, titel="Nicht und Frage",
         finisher="Frag jemanden etwas und verneine eine Aussage.",
         rahmen=[
             dict(muster="[P] 不 [Slot]", musterLaut="[P] bù [Slot]",
                  musterDe="[P] [Slot] nicht.",
                  pronomen=["不", "没", "别"],
                  neu_im_rahmen=["不", "没", "别"],
                  slots=["知道", "认识", "懂", "喜欢", "会", "错"]),
             dict(muster="[P] [Slot] 吗?", musterLaut="[P] [Slot] ma?",
                  musterDe="[Slot] [P]?",
                  pronomen=["你", "他", "她"],
                  neu_im_rahmen=["吗"],
                  slots=["学习", "工作", "休息", "回", "住"]),
             # War "这 是 [Slot]?" mit fuenf Floskeln im Slot - 这是谢谢?
             # (2026-09-08). 对不起 / 没关系 / 谢谢 sind Ausrufe und stehen
             # jetzt im Ausruf-Rahmen von Modul 12, 错 im Negationsrahmen
             # darueber (我不错 = "mir geht es gut"). Der Rahmen fuehrt 什么
             # selbst ein - damit wird er zur haeufigsten Frage ueberhaupt,
             # die ein Anfaenger in China braucht.
             dict(muster="这 是 什么 [Slot]?", musterLaut="zhè shì shénme [Slot]?",
                  musterDe="Was für [Slot] ist das?",
                  pronomen=["什么", "谁", "为什么"],
                  neu_im_rahmen=["什么", "谁", "为什么", "呢", "吧"],
                  slots=["意思"]),
         ]),
    # ==================================================================
    dict(nr=5, titel="Wo ist das?",
         finisher="Frag nach dem Weg zu drei Orten.",
         rahmen=[
             dict(muster="[Slot] 在 哪里?", musterLaut="[Slot] zài nǎli?",
                  musterDe="Wo ist [Slot]?",
                  pronomen=["在", "哪里"],
                  neu_im_rahmen=["在", "哪里"],
                  slots=["洗手间", "医院", "银行", "饭店", "商店",
                         "学校", "机场", "火车站", "酒店", "教室"]),
             dict(muster="在 [Slot]", musterLaut="zài [Slot]",
                  musterDe="Es ist [Slot].",
                  pronomen=["这里", "那里"],
                  neu_im_rahmen=["这里", "那里"],
                  slots=["前面", "后面", "旁边", "左边", "右边",
                         "里", "上", "下", "外", "城市"]),
             dict(muster="[Slot] 吗?", musterLaut="[Slot] ma?",
                  musterDe="Ist es [Slot]?",
                  pronomen=["怎么", "怎么样"],
                  neu_im_rahmen=["怎么", "怎么样"],
                  slots=["远", "近", "快", "慢", "新"]),
         ]),
    # ==================================================================
    dict(nr=6, titel="Zahlen und Preise",
         finisher="Frag nach dem Preis und nenne eine Zahl.",
         rahmen=[
             dict(muster="[Slot]", musterLaut="[Slot]", musterDe="[Slot]",
                  kind="series", pronomen=[],
                  slots=["零", "一", "二", "三", "四", "五",
                         "六", "七", "八", "九", "十", "百", "千"]),
             dict(muster="[Slot] 个 人", musterLaut="[Slot] ge rén",
                  musterDe="[Slot] Personen.",
                  pronomen=["个", "两"],
                  neu_im_rahmen=["个", "两"],
                  slots=["几", "多少", "多", "少", "些"]),
             dict(muster="这个 [Slot] 钱?", musterLaut="zhège [Slot] qián?",
                  musterDe="Wie viel kostet das?",
                  pronomen=[],
                  slots=["块", "元", "贵", "便宜", "票"]),
             dict(muster="太 [Slot] 了", musterLaut="tài [Slot] le",
                  musterDe="Das ist zu [Slot].",
                  pronomen=["太", "了"],
                  neu_im_rahmen=["太", "了", "非常", "最", "更"],
                  slots=["热", "冷", "暖和", "难", "容易"]),
         ]),
    # ==================================================================
    dict(nr=7, titel="Ich kann, ich muss",
         finisher="Sag, was du kannst und was du heute musst.",
         rahmen=[
             dict(muster="[P] 会 [Slot]", musterLaut="[P] huì [Slot]",
                  musterDe="[P] kann [Slot].",
                  pronomen=["我", "你", "他"],
                  neu_im_rahmen=["会", "能", "可以"],
                  slots=["说话", "写", "读", "听", "做",
                         "游泳", "跳舞", "唱歌", "跑步", "运动"]),
             dict(muster="[P] 必须 [Slot]", musterLaut="[P] bìxū [Slot]",
                  musterDe="[P] muss [Slot].",
                  pronomen=["我", "你"],
                  neu_im_rahmen=["必须"],
                  slots=["等", "准备", "开始", "起床", "洗"]),
             dict(muster="[P] 可以 [Slot] 吗?", musterLaut="[P] kěyǐ [Slot] ma?",
                  musterDe="Darf [P] [Slot]?",
                  pronomen=["我", "我们"],
                  slots=["进", "开", "帮助", "打电话", "穿"]),
         ]),
    # ==================================================================
    dict(nr=8, titel="Ich gehe, ich komme",
         finisher="Sag, wohin du gehst und womit du fährst.",
         rahmen=[
             dict(muster="[P] 去 [Slot]", musterLaut="[P] qù [Slot]",
                  musterDe="[P] gehe nach [Slot].",
                  pronomen=["我", "我们", "他"],
                  slots=["中国", "北京", "回家", "旅游", "考试"]),
             dict(muster="[P] 坐 [Slot]", musterLaut="[P] zuò [Slot]",
                  musterDe="[P] fahre mit [Slot].",
                  pronomen=["我", "你"],
                  slots=["出租车", "飞机", "公共汽车"]),
             # 到 und 从 sind Praepositionen und ergaben 坐到 / 坐从.
             dict(muster="[Slot] 家", musterLaut="[Slot] jiā",
                  musterDe="[Slot] Hause.",
                  pronomen=[],
                  slots=["到", "从"]),
             dict(muster="[P] 在 [Slot]", musterLaut="[P] zài [Slot]",
                  musterDe="[P] bin am [Slot].",
                  pronomen=["正在", "已经"],
                  neu_im_rahmen=["正在", "已经", "还", "就", "再"],
                  slots=["吃饭", "睡觉", "玩", "看", "拿"]),
         ]),
    # ==================================================================
    dict(nr=9, titel="Zeit",
         finisher="Verabrede dich für morgen.",
         rahmen=[
             dict(muster="[Slot]", musterLaut="[Slot]", musterDe="[Slot]",
                  kind="series", pronomen=[],
                  neu_im_rahmen=["今天"],
                  slots=["今天", "明天", "昨天", "现在", "早上",
                         "上午", "中午", "下午", "晚上", "夜里"]),
             # Zeitangaben stehen VOR dem Verb - deshalb ein eigener Rahmen
             # mit der Zeit an genau dieser Stelle. "我去今天" waere falsch.
             dict(muster="我 [Slot] 去", musterLaut="wǒ [Slot] qù",
                  musterDe="Ich gehe [Slot].",
                  pronomen=["什么时候", "时候"],
                  neu_im_rahmen=["什么时候", "时候"],
                  slots=["总是", "从不", "也", "都", "一起"]),
             dict(muster="要 [Slot]", musterLaut="yào [Slot]",
                  musterDe="Es dauert [Slot].",
                  pronomen=[],
                  slots=["分钟", "小时", "年", "月", "星期",
                         "号", "点", "过"]),
             # 次 zaehlt Male, 完 heisst "fertig" - in "要 [Slot]" ergab
             # beides Unsinn.
             dict(muster="一 [Slot]", musterLaut="yī [Slot]",
                  musterDe="Ein [Slot].",
                  pronomen=[],
                  slots=["次"]),
             dict(muster="我 吃 [Slot]", musterLaut="wǒ chī [Slot]",
                  musterDe="Ich esse [Slot].",
                  pronomen=[],
                  slots=["完"]),
         ]),
    # ==================================================================
    dict(nr=10, titel="Ich mag, ich liebe",
         finisher="Sag, was du magst und was nicht.",
         rahmen=[
             dict(muster="[P] 喜欢 [Slot]", musterLaut="[P] xǐhuan [Slot]",
                  musterDe="[P] mag [Slot].",
                  pronomen=["我", "他", "她"],
                  neu_im_rahmen=["喜欢", "爱"],
                  slots=["电影", "天气", "猫", "狗", "眼睛",
                         "身体", "头", "肚子", "腿", "微信"]),
             dict(muster="这个 很 [Slot]", musterLaut="zhège hěn [Slot]",
                  musterDe="Das ist sehr [Slot].",
                  pronomen=[],
                  slots=["好吃", "好喝", "甜", "棒", "漂亮"]),
             dict(muster="[Slot] 的 衣服", musterLaut="[Slot] de yīfu",
                  musterDe="[Slot] Kleidung.",
                  pronomen=[],
                  slots=["白", "黑", "红", "快乐", "清楚"]),
         ]),
    # ==================================================================
    dict(nr=11, titel="Gestern und morgen",
         finisher="Erzähl, was du gestern gemacht hast.",
         rahmen=[
             dict(muster="我 昨天 [Slot] 了", musterLaut="wǒ zuótiān [Slot] le",
                  musterDe="Ich habe gestern [Slot].",
                  pronomen=[],
                  slots=["买", "卖", "看", "做", "学习"]),
             dict(muster="我 [Slot] 过", musterLaut="wǒ [Slot] guo",
                  musterDe="Ich habe schon mal [Slot].",
                  pronomen=[],
                  slots=["去", "吃", "喝", "玩", "住"]),
             dict(muster="他 [Slot] 我", musterLaut="tā [Slot] wǒ",
                  musterDe="Er [Slot] mir.",
                  pronomen=[],
                  slots=["告诉", "回答", "送", "让", "帮助"]),
             dict(muster="我 [Slot] 了", musterLaut="wǒ [Slot] le",
                  musterDe="Ich bin [Slot].",
                  pronomen=[],
                  slots=["生病", "准备好", "觉得", "认识", "下雨"]),
         ]),
    # ==================================================================
    dict(nr=12, titel="Sätze verbinden",
         finisher="Erzähl etwas über dich in drei zusammenhängenden Sätzen.",
         rahmen=[
             # Der Konjunktionsrahmen trug bis 2026-09-08 auch 比, 真 und
             # 可能 - herauskam 我很累比我工作. Nur 因为 und 所以 verbinden
             # wirklich zwei Saetze; die uebrigen drei sind weitergezogen.
             dict(muster="我 很 累 [Slot] 我 工作", musterLaut="wǒ hěn lèi [Slot] wǒ gōngzuò",
                  musterDe="Ich bin müde, [Slot] ich arbeite.",
                  pronomen=["和", "但是"],
                  neu_im_rahmen=["和", "但是"],
                  slots=["因为", "所以"]),
             dict(muster="我 [Slot] 累", musterLaut="wǒ [Slot] lèi",
                  musterDe="Ich bin [Slot] müde.",
                  pronomen=[],
                  slots=["真", "可能"]),
             dict(muster="我 [Slot] 你 高", musterLaut="wǒ [Slot] nǐ gāo",
                  musterDe="Ich bin größer als du.",
                  pronomen=[],
                  slots=["比"]),
             # Dieser Rahmen verlangte ebenfalls eine Konjunktion und bekam
             # eine Zeitangabe, zwei Verbphrasen, einen Gruss und eine
             # Sprache: 我想去汉语我没有时间. Vier Rahmen statt einem.
             dict(muster="我 [Slot] 有 时间", musterLaut="wǒ [Slot] yǒu shíjiān",
                  musterDe="Ich habe [Slot] Zeit.",
                  pronomen=["没有"],
                  neu_im_rahmen=["没有"],
                  slots=["今天晚上"]),
             dict(muster="今天 我 [Slot]", musterLaut="jīntiān wǒ [Slot]",
                  musterDe="Heute [Slot] ich.",
                  pronomen=[],
                  slots=["喝一杯", "不去"]),
             dict(muster="我 喜欢 [Slot]", musterLaut="wǒ xǐhuan [Slot]",
                  musterDe="Ich mag [Slot].",
                  pronomen=[],
                  slots=["汉语"]),
             dict(muster="[Slot]!", musterLaut="[Slot]!", musterDe="[Slot]!",
                  pronomen=[],
                  slots=["再见", "不客气", "喂", "加", "欢迎",
                         "对不起", "没关系", "谢谢"]),
             # 岁 zaehlt Lebensjahre und war als Ausruf "岁!" sinnlos.
             dict(muster="我 十 [Slot]", musterLaut="wǒ shí [Slot]",
                  musterDe="Ich bin zehn [Slot] alt.",
                  pronomen=[],
                  slots=["岁"]),
         ]),
    # ==================================================================
    dict(nr=13, titel="Körper und Gesundheit",
         finisher="Sag einem Arzt, was dir fehlt.",
         rahmen=[
             dict(muster="我的 [Slot] 疼", musterLaut="wǒ de [Slot] téng",
                  musterDe="Mein [Slot] tut weh.",
                  pronomen=[], neu_im_rahmen=["疼"],
                  slots=["手", "耳朵", "鼻子", "嘴", "头"]),
             dict(muster="我 很 [Slot]", musterLaut="wǒ hěn [Slot]",
                  musterDe="Ich bin [Slot].",
                  pronomen=[],
                  slots=["饿", "渴", "难受", "舒服"]),
             dict(muster="我 [Slot] 了", musterLaut="wǒ [Slot] le",
                  musterDe="Ich habe [Slot].",
                  pronomen=[],
                  slots=["感冒", "发烧", "报警", "退房", "支付", "吃饱"]),
         ]),
    # ==================================================================
    dict(nr=14, titel="Menschen beschreiben",
         finisher="Beschreib jemanden, den du kennst.",
         rahmen=[
             dict(muster="他 很 [Slot]", musterLaut="tā hěn [Slot]",
                  musterDe="Er ist sehr [Slot].",
                  pronomen=[],
                  slots=["帅", "胖", "瘦", "老", "年轻",
                         "聪明", "可爱", "有趣", "方便", "短"]),
             dict(muster="他 是 我的 [Slot]", musterLaut="tā shì wǒ de [Slot]",
                  musterDe="Er ist mein [Slot].",
                  pronomen=["们"], neu_im_rahmen=["们"],
                  slots=["同事", "朋友", "老师", "医生", "学生"]),
             dict(muster="我 是 [Slot]", musterLaut="wǒ shì [Slot]",
                  musterDe="Ich bin [Slot].",
                  pronomen=[],
                  slots=["单身", "德国", "中国", "国家", "上海"]),
             dict(muster="这个 是 [Slot] 的", musterLaut="zhège shì [Slot] de",
                  musterDe="Das ist [Slot].",
                  pronomen=[],
                  slots=["蓝", "白", "黑", "红", "颜色"]),
         ]),
    # ==================================================================
    dict(nr=15, titel="Alltag und Freizeit",
         finisher="Erzähl, was du am Wochenende machst.",
         rahmen=[
             dict(muster="我 喜欢 [Slot]", musterLaut="wǒ xǐhuan [Slot]",
                  musterDe="Ich mag [Slot].",
                  pronomen=[],
                  slots=["音乐", "爱好", "兴趣", "旅行", "礼物",
                         "看书", "上网", "聊天", "逛街", "跳"]),
             dict(muster="我 [Slot] 一下", musterLaut="wǒ [Slot] yíxià",
                  musterDe="Ich [Slot] kurz.",
                  pronomen=["一下"], neu_im_rahmen=["一下"],
                  slots=["说", "用", "关", "帮", "打",
                         "叫", "待", "介绍", "解释", "翻译"]),
             dict(muster="我 [Slot] 去", musterLaut="wǒ [Slot] qù",
                  musterDe="Ich gehe [Slot].",
                  pronomen=["以前", "以后"], neu_im_rahmen=["以前", "以后"],
                  slots=["周末", "第一次", "遍", "打算", "安排"]),
             dict(muster="在 [Slot]", musterLaut="zài [Slot]",
                  musterDe="Es ist [Slot].",
                  pronomen=[],
                  slots=["里面", "外面", "上面", "下面", "地铁站"]),
             dict(muster="我 要 [Slot]", musterLaut="wǒ yào [Slot]",
                  musterDe="Ich möchte [Slot].",
                  pronomen=[],
                  slots=["面条", "面包", "菜单", "英语", "分"]),
             dict(muster="今天 [Slot]", musterLaut="jīntiān [Slot]",
                  musterDe="Heute [Slot].",
                  pronomen=["你好"], neu_im_rahmen=["你好"],
                  slots=["下雪", "晴天", "阴天", "习惯", "了解"]),
             dict(muster="我 想 [Slot]", musterLaut="wǒ xiǎng [Slot]",
                  musterDe="Ich möchte [Slot].",
                  pronomen=["应该"], neu_im_rahmen=["应该"],
                  slots=["谈恋爱", "帮忙", "照顾", "发型", "帅"]),
         ]),
]

# ---------------------------------------------------------------------------
# A2-Stufe (Module 15-28), Gliederung in spine_a2.json - dieselbe fuer ALLE
# zehn Sprachen.
#
# **Diese Datei schreibt ihre A1-Module von Hand, ihre A2-Module nicht.**
# Fuer A1 gab es die drei Lehrplaene vor der gemeinsamen Gliederung; fuer
# A2 waere ein eigener nur dreimal dieselbe Arbeit. Die Slots stehen hier
# deshalb auf DEUTSCH und werden ueber die german-Spalte aufgeloest -
# `baue_module` setzt dafuer `slots_deutsch` je Rahmen, damit beides in
# einer Datei nebeneinander stehen kann.
MUSTER_A2 = [
    ("我 [Slot] 了", "Ich habe [Slot].", None, "wǒ [Slot] le"),
    ("昨天 我 [Slot] 了", "Gestern habe ich [Slot].", None, "zuótiān wǒ [Slot] le"),
    ("我 已经 [Slot] 过", "Ich habe schon [Slot].", None, "wǒ yǐjīng [Slot] guo"),
    ("[P] [Slot]", "[P] [Slot].", None, "[P] [Slot]"),
    ("[P] [Slot]", "[P] [Slot].", None, "[P] [Slot]"),
    ("[P] [Slot]", "[P] [Slot].", None, "[P] [Slot]"),
    ("[P] [Slot]", "[P] [Slot].", None, "[P] [Slot]"),
    ("这个 更 [Slot]", "Das ist mehr [Slot].", None, "zhège gèng [Slot]"),
    ("我 跟 你 一样 [Slot]", "Ich bin so [Slot] wie du.", None, "wǒ gēn nǐ yīyàng [Slot]"),
    ("我 觉得 [Slot]", "Ich fühle mich [Slot].", None, "wǒ juéde [Slot]"),
    ("我们 [Slot] 见面", "Wir treffen uns [Slot].", None, "wǒmen [Slot] jiànmiàn"),
    ("我 在 这里 [Slot] 我 很 累", "Ich bleibe hier, [Slot] ich müde bin.", None, "wǒ zài zhèlǐ [Slot] wǒ hěn lèi"),
    ("我 想 这 是 [Slot]", "Ich glaube, dass es [Slot] ist.", None, "wǒ xiǎng zhè shì [Slot]"),
    ("有 时间 我 想 [Slot]", "Wenn ich Zeit habe, will ich [Slot].", None, "yǒu shíjiān wǒ xiǎng [Slot]"),
    ("你 可以 [Slot] 吗?", "Kannst du bitte [Slot]?", None, "nǐ kěyǐ [Slot] ma?"),
    ("你 必须 [Slot]", "Du musst [Slot].", None, "nǐ bìxū [Slot]"),
    ("我 给 [Slot] 书", "Ich gebe [Slot] das Buch.", None, "wǒ gěi [Slot] shū"),
    ("我 给 [Slot] 看 城市", "Ich zeige [Slot] die Stadt.", None, "wǒ gěi [Slot] kàn chéngshì"),
    ("我 想 要 一 杯 [Slot]", "Ich möchte ein Glas [Slot].", None, "wǒ xiǎng yào yī bēi [Slot]"),
    ("我们 有 很多 [Slot]", "Wir haben genug [Slot].", None, "wǒmen yǒu hěnduō [Slot]"),
    ("我 等 了 一 [Slot]", "Ich warte seit einer [Slot].", None, "wǒ děng le yī [Slot]"),
    ("[Slot] 我 回家", "[Slot] gehe ich nach Hause.", None, "[Slot] wǒ huí jiā"),
    ("我 想 [Slot]", "Ich hätte gern [Slot].", None, "wǒ xiǎng [Slot]"),
    ("你 可以 给 我 [Slot] 吗?", "Könnten Sie mir [Slot] geben?", None, "nǐ kěyǐ gěi wǒ [Slot] ma?"),
    ("我 觉得 这 很 [Slot]", "Ich denke, das ist [Slot].", None, "wǒ juéde zhè hěn [Slot]"),
    ("我 觉得 这 非常 [Slot]", "Ich finde das sehr [Slot].", None, "wǒ juéde zhè fēicháng [Slot]"),
    ("明天 我 要 [Slot]", "Morgen werde ich [Slot].", None, "míngtiān wǒ yào [Slot]"),
    ("我 想 快 [Slot]", "Ich will bald [Slot].", None, "wǒ xiǎng kuài [Slot]"),
    ("这 是 [Slot] 的 人", "Das ist der Mann, der [Slot].", None, "zhè shì [Slot] de rén"),
    ("我 找 可以 [Slot] 的 地方", "Ich suche einen Ort, wo man [Slot] kann.", None, "wǒ zhǎo kěyǐ [Slot] de dìfang"),
    ("昨天 我 在 [Slot]", "Gestern war ich im [Slot].", None, "zuótiān wǒ zài [Slot]"),
    ("我 想 [Slot] 因为 我 有 时间", "Ich möchte [Slot], weil ich Zeit habe.", None, "wǒ xiǎng [Slot] yīnwèi wǒ yǒu shíjiān"),
]

# Funktionswoerter, die genau diese A2-Rahmen fest enthalten - ohne
# sie meldet R5 sie als nie eingefuehrt.
ZUSATZ_A2 = {
    9: ["=一样"],
    11: ["=见"],
    19: ["=杯"],
    30: ["=地方"],
}

MODULE = MODULE + baue_module(MUSTER_A2, zusatz_neu=ZUSATZ_A2,
                              datei="spine_a2.json")
