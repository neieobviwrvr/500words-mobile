# -*- coding: utf-8 -*-
"""
Schluessel-Familien fuer die dreistufige Antwort-Bewertung.

WOZU
----
Die App wertet jede freie Antwort in drei Stufen: `richtig` / `ueberlebt` /
`nicht_verstanden`. Die unterste und die oberste Stufe ergeben sich schon aus
den `accepted_concepts` jedes Satzes - die MITTLERE braucht eine zusaetzliche
Angabe, naemlich: welche ANDEREN Woerter meinen ungefaehr dasselbe?

Ohne diese Angabe kennt die Bewertung nur "wortgleich" und "danebenge-
sprochen". Am 2026-09-04 war das der Zustand in neun von elf Sprachen:
`answer_clusters` enthielt 60 Eintraege, 35 deutsche und 25 schwedische, und
selbst von den schwedischen verwiesen nur 39 Saetze ueberhaupt auf einen.

ZWEI ROLLEN, EIN MECHANISMUS
----------------------------
Eine Familie steht in zwei verschiedenen Verhaeltnissen zu ihrem Satz. Welches
davon gilt, entscheidet `istSchluesselFamilie()` in evaluateConcepts.ts
selbstaendig aus den Daten - hier steht es nur, damit klar ist, warum beide
Sorten in derselben Datei liegen:

  VERBEN   das Geruest. "Jag skulle vilja boka ett bord" - die Familie ist
           `buchen`. Wer die Botschaft trifft, aber ein anderes Verb nimmt
           ("Jag tar ett bord"), bekommt `ueberlebt`: verstanden, aber nicht
           das gemeinte Prinzip.

  AUSDRUCK der Schluessel selbst. "Bis spaeter!" hat kein Verb und genau ein
           Pflicht-Konzept. Hier IST die Familie das Schluesselwort, nur
           weiter gefasst - wer "hej da" statt "vi ses senare" sagt, hat sich
           verabschiedet und bekommt `ueberlebt` statt `nicht_verstanden`.

DIE REGEL, DIE AM 2026-09-04 VIER SAETZE KAPUTT GEMACHT HATTE
-------------------------------------------------------------
**Die Familie richtet sich nach dem Satz in der ZIELSPRACHE, nie nach dem
deutschen Original.** Vier schwedische Saetze trugen eine aus dem Deutschen
abgeleitete Familie und wurden dadurch bestraft, obwohl sie richtig waren:

  "Ich moechte einen Tisch reservieren"  -> schwedisch "boka", nicht
                                           "reservera"; die Familie stand
                                           aber auf `reservieren`.
  "Ich suche ein Geschenk"               -> "leta efter", nicht "soeka".
  "Ich moechte einen Mietwagen buchen"   -> "hyra", nicht "boka".

Wer den Satz genau so sagte, wie er dasteht, bekam `ueberlebt` statt
`richtig`. `pruefe-konzepte.mjs` faengt genau das ab und muss nach jeder
Aenderung hier gruen sein.

WOHER DIE FORMEN KOMMEN
-----------------------
  sv   aus `schwedisch_vocab.forms` (Praesens/Preteritum/Supinum) - Daten,
       nicht geraten. Nur was dort fehlt, steht unten in ZUSATZ.
  en   erzeugt aus dem Grundwort (formen.py) plus einer Liste unregelmaessiger
       Verben. Englische Formenbildung ist regelmaessig genug dafuer.
  zh   gar keine Formen - Chinesisch konjugiert nicht. Die Familie ist rein
       die Synonymgruppe, und genau deshalb traegt sie dort am meisten.

Nicht von Muttersprachlern geprueft, wie der uebrige Inhalt auch.
"""

# ---------------------------------------------------------------------------
# VERB-FAMILIEN - das Geruest des Satzes
#
# Schluessel ist der deutsche Name, damit die drei Sprachen nebeneinander
# lesbar bleiben. Der Cluster heisst spaeter `sv_wollen`, `en_wollen`,
# `zh_wollen` - answer_clusters.cluster_id ist ein Primaerschluessel ueber die
# GANZE Tabelle, ohne Praefix wuerden die Sprachen sich gegenseitig
# ueberschreiben.
#
# Zusammengelegt wird nur, wo die Uebersetzung selbst zwischen den Verben
# wechselt (tala/prata, hitta/leta, gilla/tycka om) - nicht nach Gefuehl.
# ---------------------------------------------------------------------------

VERBEN = {
    "sv": {
        # -- Geruest im engeren Sinn: Hilfs- und Modalverben ---------------
        "sein": ["vara"],
        "haben": ["ha"],
        "werden": ["bli", "ska"],
        "koennen": ["kunna"],
        "muessen": ["måste", "behöva"],
        "duerfen": ["få"],
        "machen": ["göra"],
        # -- Wunsch und Bedarf --------------------------------------------
        "wollen": ["vilja", "önska"],
        "brauchen": ["behöva"],
        "moegen": ["gilla", "tycka", "älska"],
        "hoffen": ["hoppas"],
        # -- Sprechen und Verstehen ---------------------------------------
        "sagen": ["säga"],
        "sprechen": ["tala", "prata"],
        "verstehen": ["förstå"],
        "fragen": ["fråga"],
        "antworten": ["svara"],
        "erklaeren": ["förklara"],
        "heissen": ["heta", "kalla"],
        "wiederholen": ["upprepa"],
        "zeigen": ["visa"],
        "anrufen": ["ringa"],
        "schicken": ["skicka"],
        "bedeuten": ["betyda"],
        # -- Bewegung -----------------------------------------------------
        # `gehen` und `fahren` bleiben getrennt: zu Fuss und mit Fahrzeug
        # sind keine Synonyme. Dieselbe Entscheidung wie im Deutschen
        # (siehe clusters_master.py) und aus demselben Grund.
        "gehen": ["gå"],
        "kommen": ["komma"],
        "fahren": ["köra", "åka"],
        "reisen": ["resa"],
        "fliegen": ["flyga"],
        "laufen": ["springa"],
        "verlassen": ["lämna"],
        "bleiben": ["stanna"],
        "umziehen": ["flytta"],
        "warten": ["vänta"],
        "abholen": ["hämta"],
        "folgen": ["följa"],
        # -- Umgang mit Dingen --------------------------------------------
        "nehmen": ["ta"],
        "geben": ["ge"],
        "bekommen": ["få"],
        "kaufen": ["köpa"],
        "verkaufen": ["sälja"],
        "bezahlen": ["betala"],
        "kosten": ["kosta"],
        "bestellen": ["beställa"],
        "buchen": ["boka", "reservera"],
        "mieten": ["hyra"],
        "ausleihen": ["låna"],
        "benutzen": ["använda"],
        "wechseln": ["byta"],
        "reparieren": ["laga"],
        "waehlen": ["välja", "bestämma"],
        "empfehlen": ["rekommendera"],
        "einladen": ["bjuda"],
        # -- Finden und Verlieren -----------------------------------------
        "suchen": ["leta", "söka"],
        "finden": ["hitta"],
        "verlieren": ["förlora", "tappa"],
        "vergessen": ["glömma"],
        "vermissen": ["sakna"],
        # -- Wahrnehmen und Wissen ----------------------------------------
        "sehen": ["se", "titta"],
        "hoeren": ["höra", "lyssna"],
        "wissen": ["veta"],
        "kennen": ["känna"],
        "glauben": ["tro"],
        "denken": ["tänka"],
        "lernen": ["lära", "studera"],
        "arbeiten": ["arbeta", "jobba"],
        # -- Koerper und Alltag -------------------------------------------
        "essen": ["äta"],
        "trinken": ["dricka"],
        "schlafen": ["sova"],
        "wohnen": ["bo", "leva"],
        "helfen": ["hjälpa"],
        "treffen": ["träffa", "ses"],
        "spielen": ["spela"],
        "tanzen": ["dansa"],
        "singen": ["sjunga"],
        "feiern": ["festa"],
        "sich_fuehlen": ["må"],
        "beginnen": ["börja"],
        "aufhoeren": ["sluta"],
        "fortsetzen": ["fortsätta"],
        "oeffnen": ["öppna"],
        "schliessen": ["stänga"],
        "funktionieren": ["fungera"],
        "geben_es": ["finnas"],
        "enthalten": ["ingå", "räcka"],
        "sitzen": ["sitta"],
        "stehen": ["stå"],
        "liegen": ["ligga"],
        "kuessen": ["kyssa"],
        "lieben": ["älska"],
        "stimmen": ["stämma"],
        # -- Nachgetragen 2026-09-04: alles, was in schwedisch_vocab als Verb
        #    steht oder in einem Satz vorkommt, gehoert in eine Familie.
        #    Gefunden nicht beim Schreiben, sondern durch den Abgleich
        #    Vokabelliste gegen Familienliste - von Hand faellt so etwas
        #    nicht auf.
        "lesen": ["läsa"],
        "schreiben": ["skriva"],
        "unterrichten": ["undervisa"],
        "verdienen": ["tjäna"],
        "schmecken": ["smaka"],
        "vertragen": ["tåla"],
        "anmelden": ["registrera", "anmäla"],
        # `dauern` gibt es hier bewusst NICHT. Schwedisch benutzt dafuer
        # dasselbe Wort wie fuer "sein" (`vara`), nur anders konjugiert:
        # "varar" gegen "aer". Als eigene Familie eingetragen zog es beim
        # ersten Versuch 118 Sein-Saetze zu sich herueber, fuer den EINEN
        # Satz "Hur laenge varar skiftet?". Der bleibt jetzt ohne Familie -
        # der ehrlichere Preis.
        "erreichen": ["hinna"],
        "sterben": ["dö"],
        "schwimmen": ["simma"],
        "gewinnen": ["vinna"],
        "lachen": ["skratta"],
        "weinen": ["gråta"],
        "laecheln": ["le"],
        "aufwachen": ["vakna"],
        "duschen": ["duscha"],
        "waschen": ["tvätta"],
        "aufraeumen": ["städa"],
        "erschaffen": ["skapa", "bygga"],
        "wachsen": ["växa"],
        "veraendern": ["förändra"],
        "stellen": ["sätta"],
    },
    "en": {
        "sein": ["be"],
        "haben": ["have"],
        "werden": ["become"],
        "koennen": ["can", "could", "be able to"],
        "muessen": ["must", "have to", "need to"],
        "duerfen": ["may", "be allowed to"],
        "machen": ["do", "make"],
        "wollen": ["want", "would like"],
        "brauchen": ["need"],
        "moegen": ["like", "enjoy"],
        "hoffen": ["hope"],
        "sagen": ["say", "tell"],
        "sprechen": ["speak", "talk"],
        "verstehen": ["understand"],
        "fragen": ["ask"],
        "antworten": ["answer", "reply"],
        "erklaeren": ["explain"],
        "heissen": ["be called"],
        "wiederholen": ["repeat"],
        "zeigen": ["show"],
        "anrufen": ["call", "ring", "phone"],
        "schicken": ["send"],
        "bedeuten": ["mean"],
        "gehen": ["go", "walk"],
        "kommen": ["come", "arrive"],
        "fahren": ["drive", "ride"],
        "reisen": ["travel"],
        "fliegen": ["fly"],
        "laufen": ["run"],
        "verlassen": ["leave"],
        "bleiben": ["stay"],
        "umziehen": ["move"],
        "warten": ["wait"],
        "abholen": ["pick up", "collect"],
        "folgen": ["follow"],
        "nehmen": ["take"],
        "geben": ["give"],
        "bekommen": ["get", "receive"],
        "kaufen": ["buy"],
        "verkaufen": ["sell"],
        "bezahlen": ["pay"],
        "kosten": ["cost"],
        "bestellen": ["order"],
        "buchen": ["book", "reserve"],
        "mieten": ["rent", "hire"],
        "ausleihen": ["borrow", "lend"],
        "benutzen": ["use"],
        "wechseln": ["change", "swap"],
        "reparieren": ["fix", "repair"],
        "waehlen": ["choose", "pick", "decide"],
        "empfehlen": ["recommend", "suggest"],
        "einladen": ["invite"],
        "suchen": ["look for", "search"],
        "finden": ["find"],
        "verlieren": ["lose"],
        "vergessen": ["forget"],
        "vermissen": ["miss"],
        "sehen": ["see", "watch", "look"],
        "hoeren": ["hear", "listen"],
        "wissen": ["know"],
        "glauben": ["believe", "think"],
        "lernen": ["learn", "study"],
        "arbeiten": ["work"],
        "essen": ["eat"],
        "trinken": ["drink"],
        "schlafen": ["sleep"],
        "wohnen": ["live"],
        "helfen": ["help"],
        "treffen": ["meet"],
        "spielen": ["play"],
        "tanzen": ["dance"],
        "singen": ["sing"],
        "feiern": ["party", "celebrate"],
        "sich_fuehlen": ["feel"],
        "beginnen": ["start", "begin"],
        "aufhoeren": ["stop", "finish"],
        "fortsetzen": ["continue"],
        "oeffnen": ["open"],
        "schliessen": ["close", "shut"],
        "geben_es": ["there is", "there are"],
        "sitzen": ["sit"],
        "stehen": ["stand"],
        "unterschreiben": ["sign"],
        "tragen": ["wear", "carry"],
        "kochen": ["cook"],
        "waschen": ["wash"],
        "lieben": ["love"],
        "heiraten": ["marry"],
        "gewinnen": ["win"],
        "erinnern": ["remember"],
        "unterrichten": ["teach"],
        "lesen": ["read"],
        "schreiben": ["write"],
        "besuchen": ["visit"],
        "aufraeumen": ["tidy", "clean up"],
        "lachen": ["laugh"],
        "weinen": ["cry"],
        "laecheln": ["smile"],
        "drehen": ["turn"],
        "passieren": ["happen"],
        "versuchen": ["try"],
        "behalten": ["keep"],
        "stellen": ["put"],
        "bringen": ["bring"],
        "danken": ["thank"],
        "lassen": ["let"],
        "erwischen": ["catch"],
        "passen": ["suit", "fit"],
        "gefallen": ["fancy"],
        "sollen": ["should"],
        # "would" steht hier bewusst NICHT: in diesem Bestand ist es nie
        # Zukunft, sondern immer "I'd like" - also eine Bitte. Es gehoert
        # zu `wollen` (siehe ZUSATZ unten).
        "werden_zukunft": ["will"],
    },
    # Chinesisch: keine Konjugation, die Familie IST die Synonymgruppe.
    # Deshalb ist sie hier am wertvollsten - und deshalb stehen dort Zeichen,
    # keine Grundformen.
    "zh": {
        "sein": ["是"],
        "sein_ort": ["在"],
        "haben": ["有"],
        "koennen": ["可以", "能", "会"],
        "muessen": ["得", "需要"],
        "machen": ["做", "干"],
        "wollen": ["想", "要", "想要"],
        "brauchen": ["需要"],
        "moegen": ["喜欢", "爱"],
        "sagen": ["说", "讲", "告诉"],
        "verstehen": ["懂", "明白", "听懂"],
        "fragen": ["问"],
        "antworten": ["回答"],
        "heissen": ["叫"],
        "wiederholen": ["再说", "重复"],
        "anrufen": ["打电话"],
        "gehen": ["去", "走"],
        "kommen": ["来", "到"],
        "fahren": ["开", "骑"],
        "verlassen": ["离开"],
        "warten": ["等"],
        "nehmen": ["拿"],
        "geben": ["给"],
        "kaufen": ["买"],
        "verkaufen": ["卖"],
        "bezahlen": ["付", "买单", "结账"],
        "kosten": ["多少钱", "贵"],
        "bestellen": ["点"],
        "buchen": ["订", "预订"],
        "benutzen": ["用", "使用"],
        "wechseln": ["换"],
        "empfehlen": ["推荐"],
        "suchen": ["找"],
        "finden": ["找到"],
        "verlieren": ["丢"],
        "vergessen": ["忘"],
        "sehen": ["看", "看见"],
        "hoeren": ["听", "听见"],
        "wissen": ["知道"],
        "kennen": ["认识"],
        "denken": ["觉得"],
        "lernen": ["学", "学习"],
        "arbeiten": ["工作", "上班"],
        "essen": ["吃"],
        "trinken": ["喝"],
        "schlafen": ["睡", "睡觉"],
        "wohnen": ["住"],
        "helfen": ["帮", "帮忙", "帮助"],
        "treffen": ["见", "见面"],
        "spielen": ["玩"],
        "tanzen": ["跳舞"],
        "singen": ["唱歌", "唱"],
        "beginnen": ["开始"],
        "oeffnen": ["开门"],
        "schliessen": ["关门", "关"],
        "sitzen": ["坐"],
        "lieben": ["爱"],
        "hoeflich_bitten": ["请"],
    },
}

# ---------------------------------------------------------------------------
# EIGENSCHAFTS-FAMILIEN - der Schluessel, wenn es gar kein Verb gibt
#
# Aufgefallen beim chinesischen Bericht: 55 der laengeren Saetze ohne Familie
# waren alle vom selben Bau - "你的眼睛很漂亮" (Deine Augen sind schoen),
# "这个饭馆很好" (Dieses Restaurant ist gut). Chinesisch setzt bei
# Eigenschaften KEIN 是 dazu; das Adjektiv IST das Praedikat. Es gibt also
# kein Verb zu finden, und der Schluessel des Satzes ist das Adjektiv.
#
# Das trifft genau die Kategorie, die am dringendsten eine Mittelstufe
# braucht: Komplimente. Wer 好看 statt 漂亮 sagt, hat dasselbe Kompliment
# gemacht - anderes Wort, richtige Absicht. Ohne Familie waere das
# "Schwachsinn".
#
# Sie zaehlen wie starke Verben (Stelle im Satz entscheidet), NICHT wie
# Ausdruecke: Ausdruecke muessen im Chinesischen den halben Satz ausmachen,
# weil dort die Funktionszeichen vorn stehen (siehe AUSDRUCK_MINDESTANTEIL).
# Ein Adjektiv hat dieses Problem nicht - 漂亮 ist nie zufaellig da.
# ---------------------------------------------------------------------------

EIGENSCHAFTEN = {
    "sv": {
        "schoen": ["vacker", "snygg", "fin", "söt", "stilig", "vackra", "snygga", "fina"],
        "gut": ["bra", "toppen", "utmärkt"],
        "schlecht": ["dålig", "hemsk", "dåligt"],
        "lecker": ["god", "utsökt", "gott"],
        "teuer": ["dyr", "dyrt"],
        "billig": ["billig", "billigt"],
        "gross": ["stor", "stort", "stora"],
        "klein": ["liten", "litet", "små"],
        "kalt": ["kall", "kallt"],
        "warm": ["varm", "varmt", "het"],
        "laut": ["högljudd", "högt", "högljutt"],
        "krank": ["sjuk", "sjukt"],
        "muede": ["trött", "trötta"],
        "weit": ["långt", "långt bort"],
        "nah": ["nära"],
    },
    "en": {
        "schoen": ["beautiful", "pretty", "lovely", "gorgeous", "handsome", "cute"],
        "gut": ["good", "great", "nice", "excellent"],
        "schlecht": ["bad", "terrible", "awful"],
        "lecker": ["delicious", "tasty", "yummy"],
        "teuer": ["expensive", "pricey"],
        "billig": ["cheap"],
        "gross": ["big", "large"],
        "klein": ["small", "little"],
        "kalt": ["cold"],
        "warm": ["warm", "hot"],
        "laut": ["loud", "noisy"],
        "krank": ["ill", "sick", "unwell"],
        "muede": ["tired"],
        "weit": ["far"],
        "nah": ["close", "near", "nearby"],
        "allergisch": ["allergic"],
        "verheiratet": ["married"],
    },
    "zh": {
        "schoen": ["漂亮", "好看", "美", "帅", "可爱", "甜"],
        "gut": ["好", "不错", "棒"],
        "lecker": ["好吃", "美味", "好喝"],
        "teuer": ["贵"],
        "billig": ["便宜"],
        "gross": ["大"],
        "klein": ["小"],
        "kalt": ["冷"],
        "warm": ["热", "暖"],
        "laut": ["吵"],
        "krank": ["不舒服", "难受", "生病"],
        "muede": ["累"],
        "weit": ["远"],
        "nah": ["近"],
        "allergisch": ["过敏"],
        "verheiratet": ["结婚"],
        "alt_jahre": ["岁"],
        "wetter": ["天气"],
        "wochentag": ["星期"],
        "pause": ["休息"],
        "pruefung": ["考试"],
    },
}

# ---------------------------------------------------------------------------
# SCHWACHE FAMILIEN - Geruest, das nur zaehlt, wenn sonst nichts da ist
#
# "Jag skulle vilja boka ett bord" enthaelt drei Verben. Das PRINZIP des
# Satzes ist `buchen`, nicht `wollen` und schon gar nicht `werden` - "skulle
# vilja" ist die hoefliche Verpackung. Steht ein Satz dagegen nur auf einem
# Hilfsverb ("Jag vill ha en oel"), dann IST das Hilfsverb das Prinzip.
#
# Deshalb zwei Raenge statt einer Liste: die Zuordnung nimmt eine schwache
# Familie erst, wenn keine starke im Satz vorkommt.
#
# `sehen`/`nehmen`/`gehen`/`kommen` stehen hier, weil sie in allen drei
# Sprachen als Allerweltsverb auftreten ("take a taxi", "go shopping",
# "看医生") und dort fast nie das Prinzip tragen.
# ---------------------------------------------------------------------------

SCHWACH = {
    "sein", "sein_ort", "haben", "werden", "koennen", "muessen", "duerfen",
    "machen", "geben_es", "nehmen", "bekommen", "gehen", "kommen", "sehen",
    "hoeflich_bitten", "sollen", "werden_zukunft", "lassen", "wollen",
}

# Woerter, die in einer bestimmten Umgebung NICHT ihre Familie bedeuten.
#
# Englisch "like" ist normalerweise `moegen` ("I like beer") - in "I'd like"
# aber die hoefliche Bitte, also `wollen`. Ohne diese Sperre bekam
# "I'd like to hire a car." die Familie `moegen`: das Verb der Hoeflichkeit
# stand weiter vorn als das Verb der Sache.
#
# Warum keine allgemeine Regel: es sind genau solche Einzelfaelle. Eine Regel
# "Modalverb + Verb" gaebe es im Chinesischen gar nicht, und im Schwedischen
# loest der schwache Rang von `wollen` dasselbe Problem schon.
NICHT_NACH = {
    "en": {"like": ["would", "'d", "d"]},
}

# ---------------------------------------------------------------------------
# AUSDRUCKS-FAMILIEN - der Schluessel selbst
#
# Formelhafte Saetze haben kein Verb, an dem eine Familie haengen koennte, und
# genau EIN Pflicht-Konzept. Ohne diese Familien bleibt ihre Bewertung
# zweiwertig: entweder wortgleich oder Schwachsinn. "Hej da" statt "Vi ses
# senare" ist aber kein Schwachsinn, sondern ein Abschied.
#
# Die Formen sind hier fertige Wendungen, keine Grundformen - es gibt nichts
# zu konjugieren. Sie muessen die Synonyme des Pflicht-Konzepts MIT ENTHALTEN,
# sonst erkennt evaluateConcepts.ts die Familie nicht als Schluessel (siehe
# `istSchluesselFamilie`) und die Mittelstufe bleibt zu.
# ---------------------------------------------------------------------------

AUSDRUCK = {
    "sv": {
        "gruss": ["hej", "hejsan", "tja", "tjena", "hallå",
                  "god morgon", "god dag", "god kväll", "goddag"],
        "abschied": ["hej då", "adjö", "vi ses", "vi ses senare", "ha det bra",
                     "vi hörs", "god natt", "sov gott"],
        "dank": ["tack", "tack så mycket", "tusen tack", "tack ska du ha"],
        "entschuldigung": ["ursäkta", "förlåt", "ursäkta mig", "tyvärr"],
        "bitte_hoeflich": ["snälla", "varsågod", "vänligen"],
        "ja": ["ja", "javisst", "jo", "visst", "okej"],
        "nein": ["nej", "nej tack", "tyvärr inte"],
        "zustimmung": ["det stämmer", "precis", "exakt", "just det", "sant", "stämmer"],
        "kein_problem": ["ingen fara", "inga problem", "det gör inget", "det är okej",
                         "det gjorde inget"],
        "freut_mich": ["trevligt att träffas", "trevligt", "kul att träffas",
                       "roligt att träffas"],
        "wie_gehts": ["hur mår du", "hur är det", "läget", "hur står det till"],
        "mir_gut": ["jag mår bra", "bra", "det är bra", "fint", "bara bra"],
        "prost": ["skål"],
        "hilfe": ["hjälp"],
    },
    "en": {
        "gruss": ["hello", "hi", "hey", "good morning", "good afternoon",
                  "good evening", "good day"],
        "abschied": ["goodbye", "good bye", "bye", "bye bye", "see you",
                     "see you later", "take care", "good night", "later",
                     "see you soon"],
        # "cheers" steht mit Absicht in ZWEI Familien: im britischen Englisch
        # heisst es "danke" UND "tschuess" (und beim Anstossen "prost"). Die
        # Familien duerfen sich ueberschneiden - sie sind Bedeutungsgruppen,
        # keine Einteilung des Wortschatzes.
        "dank": ["thank you", "thanks", "thanks a lot", "many thanks", "ta",
                 "thank you very much", "much appreciated", "cheers"],
        "entschuldigung": ["excuse me", "sorry", "pardon", "my apologies",
                           "i am sorry", "i'm sorry"],
        "bitte_hoeflich": ["please", "you're welcome", "youre welcome", "my pleasure"],
        "ja": ["yes", "yeah", "yep", "sure", "of course", "okay", "ok"],
        "nein": ["no", "nope", "no thanks", "afraid not", "not really"],
        "zustimmung": ["that's right", "thats right", "exactly", "true", "correct",
                       "indeed", "right"],
        "kein_problem": ["no problem", "no worries", "that's fine", "thats fine",
                         "it's fine", "never mind", "it's okay"],
        "freut_mich": ["nice to meet you", "pleased to meet you", "good to meet you",
                       "lovely to meet you"],
        "wie_gehts": ["how are you", "how's it going", "hows it going", "you alright",
                      "how are things", "how do you do"],
        "mir_gut": ["i'm fine", "im fine", "fine thanks", "i'm good", "im good",
                    "i'm well", "not bad", "all good"],
        "prost": ["cheers"],
        "hilfe": ["help"],
    },
    "zh": {
        "gruss": ["你好", "您好", "早上好", "晚上好", "嗨", "早"],
        "abschied": ["再见", "拜拜", "回头见", "明天见", "晚安"],
        "dank": ["谢谢", "多谢", "感谢"],
        "entschuldigung": ["对不起", "不好意思", "抱歉", "打扰了"],
        "bitte_hoeflich": ["请", "不客气", "别客气"],
        "ja": ["对", "好", "行", "嗯", "是的"],
        "nein": ["不", "不是", "不行", "没有"],
        "zustimmung": ["对", "没错", "确实", "是的"],
        "kein_problem": ["没关系", "没事", "不要紧"],
        "freut_mich": ["很高兴认识你", "幸会"],
        "wie_gehts": ["你好吗", "最近怎么样", "怎么样"],
        "mir_gut": ["很好", "还行", "不错", "挺好"],
        "prost": ["干杯", "随意"],
        "hilfe": ["救命", "帮忙", "帮我"],
    },
}

# ---------------------------------------------------------------------------
# ZUSATZ - Formen, die nicht aus den Daten kommen
#
# Nur fuer schwedische Verben, die in den Saetzen vorkommen, aber nicht in den
# 500 Grundwoertern stehen (`schwedisch_vocab` hat dann keine `forms`-Spalte,
# aus der sich die Konjugation holen liesse). Reihenfolge: Praesens,
# Preteritum, Supinum.
#
# Englisch braucht das nicht - formen.py erzeugt die Formen. Chinesisch auch
# nicht - dort gibt es keine.
# ---------------------------------------------------------------------------

ZUSATZ = {
    "sv": {
        "kosta": ["kostar", "kostade", "kostat"],
        "finnas": ["finns", "fanns", "funnits"],
        "må": ["mår", "mådde", "mått"],
        "ingå": ["ingår", "ingick", "ingått"],
        "sjunga": ["sjunger", "sjöng", "sjungit"],
        "ses": ["ses", "sågs", "setts"],
        "kalla": ["kallar", "kallade", "kallat"],
        "bjuda": ["bjuder", "bjöd", "bjudit"],
        "jobba": ["jobbar", "jobbade", "jobbat"],
        "åka": ["åker", "åkte", "åkt"],
        "räcka": ["räcker", "räckte", "räckt"],
        "fungera": ["fungerar", "fungerade", "fungerat"],
        "söka": ["söker", "sökte", "sökt"],
        "hämta": ["hämtar", "hämtade", "hämtat"],
        "följa": ["följer", "följde", "följt"],
        "betyda": ["betyder", "betydde", "betytt"],
        "träna": ["tränar", "tränade", "tränat"],
        "tjäna": ["tjänar", "tjänade", "tjänat"],
        "hyra": ["hyr", "hyrde", "hyrt"],
        "boka": ["bokar", "bokade", "bokat"],
        "reservera": ["reserverar", "reserverade", "reserverat"],
        "beställa": ["beställer", "beställde", "beställt"],
        "rekommendera": ["rekommenderar", "rekommenderade", "rekommenderat"],
        "upprepa": ["upprepar", "upprepade", "upprepat"],
        "studera": ["studerar", "studerade", "studerat"],
        "tappa": ["tappar", "tappade", "tappat"],
        "låna": ["lånar", "lånade", "lånat"],
        "stämma": ["stämmer", "stämde", "stämt"],
        "träffas": ["träffas", "träffades", "träffats"],
        "smaka": ["smakar", "smakade", "smakat"],
        "tåla": ["tål", "tålde", "tålt"],
        "undervisa": ["undervisar", "undervisade", "undervisat"],
        "registrera": ["registrerar", "registrerade", "registrerat"],
        "anmäla": ["anmäler", "anmälde", "anmält"],
        "hinna": ["hinner", "hann", "hunnit"],
    },
    # Englisch braucht ZUSATZ nur fuer feste Wendungen, die keine Beugung
    # eines Grundworts sind. "I'd like" ist im Bestand die haeufigste Art,
    # etwas zu verlangen - und ohne diesen Eintrag lag sie bei `werden`.
    "en": {
        "want": ["i'd like", "we'd like", "he'd like", "she'd like",
                 "'d like", "would like to", "i would like"],
    },
}
