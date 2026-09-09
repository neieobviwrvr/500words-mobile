# -*- coding: utf-8 -*-
"""Schreibt die Lehrplan-Dateien fuer fr, it, no, ru, vi, pl.

Einmalig benutzt. Die erzeugten `kurs_<code>.py` sind ab dann die Quelle -
wer etwas aendern will, aendert die, nicht dieses Skript.
"""
import io

KOPF = '''# -*- coding: utf-8 -*-
"""Lehrplan {label}. Gliederung: gemeinsam (siehe gemeinsam.py, ENTWURF.md).

{hinweis}
"""
from gemeinsam import baue_module

SPRACHE = "{code}"
TABELLE = "{tabelle}"
WORTSPALTE = "{spalte}"
{extra}DATEINAME = "{code}Course.ts"
KONSTANTE = "{konst}"
SLOTS_DEUTSCH = True

MUSTER = [
{muster}]

{rest}

# Funktionswoerter, die genau diese Satzmuster brauchen und sonst
# ungelehrt im Rahmen staenden (R5). "=" heisst: steht schon in der
# Zielsprache, nicht uebersetzen.
ZUSATZ = {zusatz}

MODULE = baue_module(MUSTER, zusatz_neu=ZUSATZ)
'''


def schreib(code, label, tabelle, spalte, konst, hinweis, muster, rest,
            zusatz="{}", extra=""):
    z = "".join("    " + m + ",\n" for m in muster)
    zeilen = "".join('    "%s": %s,\n' % (k, v) for k, v in rest)
    rest_txt = ("# Auffangrahmen fuer den Rest der Wortliste - nach Wortart,\n"
                "# generisch. Siehe bauplan.py, \"Auffangmodul\".\n"
                "REST_RAHMEN = {\n" + zeilen + "}")
    io.open("kurs_%s.py" % code, "w", encoding="utf-8").write(KOPF.format(
        label=label, code=code, tabelle=tabelle, spalte=spalte, konst=konst,
        hinweis=hinweis, muster=z, rest=rest_txt, zusatz=zusatz, extra=extra))
    print("kurs_%s.py geschrieben (%d Muster)" % (code, len(muster)))


def M(ziel, de, zusatz=None, laut=None):
    """Ein Muster als Quelltextzeile."""
    teile = [repr(ziel), repr(de)]
    if zusatz:
        teile.append(zusatz)
    if laut:
        if not zusatz:
            teile.append("None")
        teile.append(repr(laut))
    return "(" + ", ".join(teile) + ")"


# =====================================================================  FR
A_FR = 'dict(artikel={"m": "un", "f": "une"})'
FR = [
    M("[P] suis [Slot]", "[P] bin [Slot]."),
    M("[P] suis [Slot]", "[P] bin [Slot]."),
    M("[P] est très [Slot]", "[P] ist sehr [Slot]."),
    M("c'est [Art] [Slot]", "Das ist ein [Slot].", A_FR),
    M("il y a [Art] [Slot]", "Hier ist ein [Slot].", A_FR),
    M("[P] ai [Art] [Slot]", "[P] habe einen [Slot].", A_FR),
    M("c'est mon [Slot]", "Das ist mein [Slot]."),
    M("c'est [Slot] maison", "Das ist [Slot] Haus."),
    M("ce sont [Slot] livres", "Das sind [Slot] Bücher."),
    M("[Slot] est ici", "[Slot] ist hier."),
    M("[P] veux [Slot]", "[P] möchte [Slot]."),
    M("[P] ai besoin de [Slot]", "[P] brauche [Slot]."),
    M("[P] voudrais [Art] [Slot]", "[P] möchte einen [Slot], bitte.", A_FR),
    M("[P] mange [Slot]", "[P] esse [Slot]."),
    M("[P] ne suis pas [Slot]", "[P] bin nicht [Slot]."),
    M("es-tu [Slot] ?", "Bist [P] [Slot]?"),
    M("[Slot] est-ce ?", "[Slot] ist das?"),
    M("où y a-t-il [Art] [Slot] ?", "Wo gibt es einen [Slot]?", A_FR),
    M("il y a [Art] [Slot] ici ?", "Gibt es hier ein [Slot]?", A_FR),
    M("[Slot] est ici", "[Slot] ist hier."),
    M("c'est [Slot] la maison", "Es liegt [Slot] dem Haus."),
    M("[Slot]", "[Slot]"), M("[Slot]", "[Slot]"), M("[Slot]", "[Slot]"),
    M("c'est la [Slot] fois", "Das ist das [Slot] Mal."),
    M("combien coûte [Art] [Slot] ?", "Wie viel kostet ein [Slot]?", A_FR),
    M("c'est trop [Slot]", "Das ist zu [Slot]."),
    M("[P] peux [Slot]", "[P] kann [Slot]."),
    M("[P] dois [Slot]", "[P] muss [Slot]."),
    M("[P] veux [Slot]", "[P] will [Slot]."),
    M("[P] ne peux pas [Slot]", "[P] darf nicht [Slot]."),
    M("[P] vais à [Art] [Slot]", "[P] gehe zu einem [Slot].", A_FR),
    M("[P] voyage en [Slot]", "[P] fahre mit [Slot]."),
    M("[P] [Slot] à la maison", "[P] [Slot] nach Hause."),
    M("[Slot]", "[Slot]"),
    M("on se voit le [Slot]", "Wir sehen uns am [Slot]."),
    M("ça dure [Art] [Slot]", "Es dauert eine [Slot].", A_FR),
    M("[P] aime [Slot]", "[P] mag [Slot]."),
    M("[P] vois [Slot]", "[P] sehe [Slot]."),
    M("c'est [Slot]", "Sie ist [Slot]."),
    M("le repas est [Slot]", "Das Essen ist [Slot]."),
    M("[P] étais [Slot] hier", "[P] war gestern [Slot]."),
    M("[P] vais [Slot] demain", "[P] werde morgen [Slot]."),
    M("[P] [Slot] beaucoup", "[P] [Slot] viel."),
    M("[P] deviens [Slot]", "[P] werde [Slot]."),
    M("je suis fatigué [Slot] je travaille", "Ich bin müde, [Slot] ich arbeite."),
    M("je veux [Slot] mais je ne peux pas", "Ich will [Slot], aber ich kann nicht."),
    M("c'est [Slot] mais ça va", "Es ist [Slot], aber es geht."),
    M("je te [Slot]", "Ich [Slot] dich."),
    M("[Art] [Slot] me fait mal", "[Slot] tut weh.", A_FR),
    M("j'ai mal à [Art] [Slot]", "Ich habe Schmerzen im [Slot].", A_FR),
    M("j'ai [Art] [Slot]", "Ich habe ein [Slot].", A_FR),
    M("ici il y a [Art] [Slot]", "Hier gibt es einen [Slot].", A_FR),
    M("j'achète [Art] [Slot]", "Ich kaufe einen [Slot].", A_FR),
    M("j'ai [Slot]", "Ich habe [Slot]."),
    M("c'est mon [Slot]", "Das ist meine [Slot]."),
    M("j'attends [Art] [Slot]", "Ich warte auf [Slot].", A_FR),
    M("demain il y a [Slot]", "Morgen gibt es [Slot]."),
    M("j'ai eu [Art] bon [Slot]", "Ich habe eine gute [Slot] bekommen.", A_FR),
]
schreib("fr", "Franzoesisch", "franz_vocab", "french", "FRENCH_COURSE",
        """**Typografie: Leerzeichen vor ! ? :** - franzoesische Regel, im
Phrasebook ausnahmslos so gehalten (243 von 243 Saetzen). Die Satzmuster
hier folgen ihr.

**Verneinung ist zweiteilig**: `ne ... pas` umklammert das Verb. Rahmen 15
und 31 zeigen das als Muster, lange bevor es als Regel erklaert wird.

**Artikel nach Genus** (un/une) setzt der Generator aus der `genus`-Spalte.
So hoert der Nutzer "une maison" und "un livre" immer zusammen mit dem
Wort, statt das Geschlecht spaeter nachzulernen.""",
        FR, [
            ("Nomen", "('voici le [Slot]', 'Hier ist der [Slot].')"),
            ("Verb", "('je veux [Slot]', 'Ich will [Slot].')"),
            ("Adjektiv", "(\"c'est très [Slot]\", 'Es ist sehr [Slot].')"),
            ("Adverb", "('je le fais [Slot]', 'Ich mache es [Slot].')"),
            ("Pronomen", "(\"c'est pour [Slot]\", 'Es ist für [Slot].')"),
            ("Präposition", "(\"c'est [Slot] la maison\", 'Es ist [Slot] dem Haus.')"),
            ("Konjunktion", "('je viens [Slot] je peux', 'Ich komme, [Slot] ich kann.')"),
            ("Zahlwort", "('[Slot]', '[Slot]')"),
            ("Zahlwort/Zeit", "('[Slot]', '[Slot]')"),
            ("Artikel", "('[Slot] livre', '[Slot] Buch.')"),
            ("Zusatz", "('[Slot]', '[Slot]')"),
            ("_sonst", "('[Slot]', '[Slot]')"),
        ])

# =====================================================================  IT
A_IT = 'dict(artikel={"m": "un", "f": "una"})'
IT = [
    M("[P] sono [Slot]", "[P] bin [Slot]."),
    M("[P] sono [Slot]", "[P] bin [Slot]."),
    M("[P] è molto [Slot]", "[P] ist sehr [Slot]."),
    M("questo è [Art] [Slot]", "Das ist ein [Slot].", A_IT),
    M("qui c'è [Art] [Slot]", "Hier ist ein [Slot].", A_IT),
    M("[P] ho [Art] [Slot]", "[P] habe einen [Slot].", A_IT),
    M("questa è mia [Slot]", "Das ist mein [Slot]."),
    M("questa è [Slot] casa", "Das ist [Slot] Haus."),
    M("questi sono [Slot] libri", "Das sind [Slot] Bücher."),
    M("[Slot] è qui", "[Slot] ist hier."),
    M("[P] voglio [Slot]", "[P] möchte [Slot]."),
    M("[P] ho bisogno di [Slot]", "[P] brauche [Slot]."),
    M("[P] vorrei [Art] [Slot]", "[P] möchte einen [Slot], bitte.", A_IT),
    M("[P] mangio [Slot]", "[P] esse [Slot]."),
    M("[P] non sono [Slot]", "[P] bin nicht [Slot]."),
    M("sei [Slot]?", "Bist [P] [Slot]?"),
    M("[Slot] è questo?", "[Slot] ist das?"),
    M("dove c'è [Art] [Slot]?", "Wo gibt es einen [Slot]?", A_IT),
    M("c'è [Art] [Slot] qui?", "Gibt es hier ein [Slot]?", A_IT),
    M("[Slot] è qui", "[Slot] ist hier."),
    M("è [Slot] la casa", "Es liegt [Slot] dem Haus."),
    M("[Slot]", "[Slot]"), M("[Slot]", "[Slot]"), M("[Slot]", "[Slot]"),
    M("è la [Slot] volta", "Das ist das [Slot] Mal."),
    M("quanto costa [Art] [Slot]?", "Wie viel kostet ein [Slot]?", A_IT),
    M("è troppo [Slot]", "Das ist zu [Slot]."),
    M("[P] posso [Slot]", "[P] kann [Slot]."),
    M("[P] devo [Slot]", "[P] muss [Slot]."),
    M("[P] voglio [Slot]", "[P] will [Slot]."),
    M("[P] non posso [Slot]", "[P] darf nicht [Slot]."),
    M("[P] vado a [Art] [Slot]", "[P] gehe zu einem [Slot].", A_IT),
    M("[P] viaggio in [Slot]", "[P] fahre mit [Slot]."),
    M("[P] [Slot] a casa", "[P] [Slot] nach Hause."),
    M("[Slot]", "[Slot]"),
    M("ci vediamo la [Slot]", "Wir sehen uns am [Slot]."),
    M("dura [Art] [Slot]", "Es dauert eine [Slot].", A_IT),
    M("[P] amo [Slot]", "[P] mag [Slot]."),
    M("[P] vedo [Slot]", "[P] sehe [Slot]."),
    M("è [Slot]", "Sie ist [Slot]."),
    M("il cibo è [Slot]", "Das Essen ist [Slot]."),
    M("[P] ero [Slot] ieri", "[P] war gestern [Slot]."),
    M("[P] [Slot] domani", "[P] werde morgen [Slot]."),
    M("[P] [Slot] molto", "[P] [Slot] viel."),
    M("[P] divento [Slot]", "[P] werde [Slot]."),
    M("sono stanco [Slot] lavoro", "Ich bin müde, [Slot] ich arbeite."),
    M("voglio [Slot] ma non posso", "Ich will [Slot], aber ich kann nicht."),
    M("è [Slot] ma va bene", "Es ist [Slot], aber es geht."),
    M("ti [Slot]", "Ich [Slot] dich."),
    M("[Art] [Slot] mi fa male", "[Slot] tut weh.", A_IT),
    M("ho male a [Art] [Slot]", "Ich habe Schmerzen im [Slot].", A_IT),
    M("ho [Art] [Slot]", "Ich habe ein [Slot].", A_IT),
    M("qui c'è [Art] [Slot]", "Hier gibt es einen [Slot].", A_IT),
    M("compro [Art] [Slot]", "Ich kaufe einen [Slot].", A_IT),
    M("ho [Slot]", "Ich habe [Slot]."),
    M("questo è il mio [Slot]", "Das ist meine [Slot]."),
    M("aspetto [Art] [Slot]", "Ich warte auf [Slot].", A_IT),
    M("domani c'è [Slot]", "Morgen gibt es [Slot]."),
    M("ho preso [Art] buon [Slot]", "Ich habe eine gute [Slot] bekommen.", A_IT),
]
schreib("it", "Italienisch", "italienisch_vocab", "italian", "ITALIAN_COURSE",
        """**Alter und Befinden laufen ueber `avere`**, nicht ueber `essere`:
`ho fame` (ich habe Hunger), `ho vent'anni` (ich bin zwanzig). Deshalb
steht in Rahmen 12 `ho bisogno di` statt einer Konstruktion mit `sono` -
das ist der haeufigste Fehler deutscher Anfaenger.

**Artikel nach Genus** (un/una) setzt der Generator aus der `genus`-Spalte.
Der BESTIMMTE Artikel (il/lo/la) haengt zusaetzlich vom Anlaut ab
(lo studente, l'amico) und wird bewusst NICHT automatisch gesetzt - dafuer
reicht die Datenlage nicht, und ein falscher bestimmter Artikel waere
schlimmer als gar keiner.""",
        IT, [
            ("Nomen", "('ecco il [Slot]', 'Hier ist der [Slot].')"),
            ("Verb", "('voglio [Slot]', 'Ich will [Slot].')"),
            ("Adjektiv", "('è molto [Slot]', 'Es ist sehr [Slot].')"),
            ("Adverb", "('lo faccio [Slot]', 'Ich mache es [Slot].')"),
            ("Pronomen", "('è per [Slot]', 'Es ist für [Slot].')"),
            ("Praeposition", "('è [Slot] la casa', 'Es ist [Slot] dem Haus.')"),
            ("Konjunktion", "('vengo [Slot] posso', 'Ich komme, [Slot] ich kann.')"),
            ("Fragewort", "('[Slot] è?', '[Slot] ist es?')"),
            ("Zahlwort", "('[Slot]', '[Slot]')"),
            ("Artikel", "('[Slot] libro', '[Slot] Buch.')"),
            ("_sonst", "('[Slot]', '[Slot]')"),
        ])

# =====================================================================  NO
A_NO = 'dict(artikel={"m": "en", "f": "ei", "n": "et"})'
NO = [
    M("[P] er [Slot]", "[P] bin [Slot]."),
    M("[P] er [Slot]", "[P] bin [Slot]."),
    M("[P] er veldig [Slot]", "[P] ist sehr [Slot]."),
    M("det er [Art] [Slot]", "Das ist ein [Slot].", A_NO),
    M("her er [Art] [Slot]", "Hier ist ein [Slot].", A_NO),
    M("[P] har [Art] [Slot]", "[P] habe einen [Slot].", A_NO),
    M("det er min [Slot]", "Das ist mein [Slot]."),
    M("det er [Slot] hus", "Das ist [Slot] Haus."),
    M("det er [Slot] bøker", "Das sind [Slot] Bücher."),
    M("[Slot] er her", "[Slot] ist hier."),
    M("[P] vil ha [Slot]", "[P] möchte [Slot]."),
    M("[P] trenger [Slot]", "[P] brauche [Slot]."),
    M("[P] vil ha [Art] [Slot]", "[P] möchte einen [Slot], bitte.", A_NO),
    M("[P] spiser [Slot]", "[P] esse [Slot]."),
    M("[P] er ikke [Slot]", "[P] bin nicht [Slot]."),
    M("er du [Slot]?", "Bist [P] [Slot]?"),
    M("[Slot] er det?", "[Slot] ist das?"),
    M("hvor finnes [Art] [Slot]?", "Wo gibt es einen [Slot]?", A_NO),
    M("finnes det [Art] [Slot] her?", "Gibt es hier ein [Slot]?", A_NO),
    M("[Slot] er her", "[Slot] ist hier."),
    M("det ligger [Slot] huset", "Es liegt [Slot] dem Haus."),
    M("[Slot]", "[Slot]"), M("[Slot]", "[Slot]"), M("[Slot]", "[Slot]"),
    M("det er [Slot] gang", "Das ist das [Slot] Mal."),
    M("hva koster [Art] [Slot]?", "Wie viel kostet ein [Slot]?", A_NO),
    M("det er for [Slot]", "Das ist zu [Slot]."),
    M("[P] kan [Slot]", "[P] kann [Slot]."),
    M("[P] må [Slot]", "[P] muss [Slot]."),
    M("[P] vil [Slot]", "[P] will [Slot]."),
    M("[P] kan ikke [Slot]", "[P] darf nicht [Slot]."),
    M("[P] går til [Art] [Slot]", "[P] gehe zu einem [Slot].", A_NO),
    M("[P] reiser med [Slot]", "[P] fahre mit [Slot]."),
    M("[P] [Slot] hjem", "[P] [Slot] nach Hause."),
    M("[Slot]", "[Slot]"),
    M("vi ses på [Slot]", "Wir sehen uns am [Slot]."),
    M("det tar [Art] [Slot]", "Es dauert eine [Slot].", A_NO),
    M("[P] liker [Slot]", "[P] mag [Slot]."),
    M("[P] ser [Slot]", "[P] sehe [Slot]."),
    M("den er [Slot]", "Sie ist [Slot]."),
    M("maten er [Slot]", "Das Essen ist [Slot]."),
    M("[P] var [Slot] i går", "[P] war gestern [Slot]."),
    M("[P] skal [Slot] i morgen", "[P] werde morgen [Slot]."),
    M("[P] [Slot] mye", "[P] [Slot] viel."),
    M("[P] blir [Slot]", "[P] werde [Slot]."),
    M("jeg er trøtt [Slot] jeg jobber", "Ich bin müde, [Slot] ich arbeite."),
    M("jeg vil [Slot] men jeg kan ikke", "Ich will [Slot], aber ich kann nicht."),
    M("det er [Slot] men det går", "Es ist [Slot], aber es geht."),
    M("jeg [Slot] deg", "Ich [Slot] dich."),
    M("[Art] [Slot] gjør vondt", "[Slot] tut weh.", A_NO),
    M("jeg har vondt i [Art] [Slot]", "Ich habe Schmerzen im [Slot].", A_NO),
    M("jeg har [Art] [Slot]", "Ich habe ein [Slot].", A_NO),
    M("her er [Art] [Slot]", "Hier gibt es einen [Slot].", A_NO),
    M("jeg kjøper [Art] [Slot]", "Ich kaufe einen [Slot].", A_NO),
    M("jeg har [Slot]", "Ich habe [Slot]."),
    M("det er min [Slot]", "Das ist meine [Slot]."),
    M("jeg venter på [Art] [Slot]", "Ich warte auf [Slot].", A_NO),
    M("i morgen blir det [Slot]", "Morgen gibt es [Slot]."),
    M("jeg fikk [Art] god [Slot]", "Ich habe eine gute [Slot] bekommen.", A_NO),
]
schreib("no", "Norwegisch", "norwegisch_vocab", "norwegian", "NORWEGIAN_COURSE",
        """**Bokmaal**, wie im ganzen Projekt - rund 85-90% der Schreibenden
und die Norm jedes Sprachkurses. `ttsLocale` steht auf `nb-NO`, damit die
Systemstimme nicht auf Nynorsk ausweicht.

**DREI Geschlechter, aber praktisch zwei.** Bokmaal erlaubt en/ei/et, im
Alltag wird das Femininum (ei) meist wie das Maskulinum behandelt
(en jente statt ei jente). Der Generator setzt trotzdem, was in der
`genus`-Spalte steht - wer es spaeter vereinfachen will, aendert die
Spalte, nicht den Kurs.

**Norwegisch konjugiert nicht nach Person**, genau wie Schwedisch:
`jeg er`, `du er`, `han er`. Ein Rahmen traegt deshalb sofort mehrere
Pronomen.

**Achtung, offene Stelle:** anders als `schwedisch_vocab` hat
`norwegisch_vocab` KEINE `forms`-Spalte. Verben stehen also so im Satz,
wie sie in der Liste stehen. Wo die Liste den Infinitiv fuehrt (`å være`),
muesste eigentlich die Praesensform (`er`) stehen. Vor der Vertonung
pruefen.""",
        NO, [
            ("Nomen", "('her er [Slot]', 'Hier ist der [Slot].')"),
            ("Verb", "('jeg vil [Slot]', 'Ich will [Slot].')"),
            ("Adjektiv", "('det er veldig [Slot]', 'Es ist sehr [Slot].')"),
            ("Adverb", "('jeg gjør det [Slot]', 'Ich mache es [Slot].')"),
            ("Pronomen", "('det er for [Slot]', 'Es ist für [Slot].')"),
            ("Praeposition", "('det er [Slot] huset', 'Es ist [Slot] dem Haus.')"),
            ("Konjunktion", "('jeg kommer [Slot] jeg kan', 'Ich komme, [Slot] ich kann.')"),
            ("Fragewort", "('[Slot] er det?', '[Slot] ist es?')"),
            ("Zahlwort", "('[Slot]', '[Slot]')"),
            ("Artikel", "('[Slot] hus', '[Slot] Haus.')"),
            ("_sonst", "('[Slot]', '[Slot]')"),
        ])

# =====================================================================  VI
VI = [
    M("[P] rất [Slot]", "[P] bin [Slot]."),
    M("[P] là [Slot]", "[P] bin [Slot]."),
    M("[P] rất [Slot]", "[P] ist sehr [Slot]."),
    M("đây là [Slot]", "Das ist ein [Slot]."),
    M("ở đây có [Slot]", "Hier ist ein [Slot]."),
    M("[P] có [Slot]", "[P] habe einen [Slot]."),
    M("đây là [Slot] của tôi", "Das ist mein [Slot]."),
    M("đây là nhà của [Slot]", "Das ist [Slot] Haus."),
    M("đây là sách của [Slot]", "Das sind [Slot] Bücher."),
    M("[Slot] ở đây", "[Slot] ist hier."),
    M("[P] muốn [Slot]", "[P] möchte [Slot]."),
    M("[P] cần [Slot]", "[P] brauche [Slot]."),
    M("[P] muốn [Slot]", "[P] möchte einen [Slot], bitte."),
    M("[P] ăn [Slot]", "[P] esse [Slot]."),
    M("[P] không [Slot]", "[P] bin nicht [Slot]."),
    M("bạn [Slot] không?", "Bist [P] [Slot]?"),
    M("[Slot] đây?", "[Slot] ist das?"),
    M("[Slot] ở đâu?", "Wo gibt es einen [Slot]?"),
    M("ở đây có [Slot] không?", "Gibt es hier ein [Slot]?"),
    M("[Slot] ở đây", "[Slot] ist hier."),
    M("nó ở [Slot] nhà", "Es liegt [Slot] dem Haus."),
    M("[Slot]", "[Slot]"), M("[Slot]", "[Slot]"), M("[Slot]", "[Slot]"),
    M("đây là lần [Slot]", "Das ist das [Slot] Mal."),
    M("[Slot] bao nhiêu tiền?", "Wie viel kostet ein [Slot]?"),
    M("cái này quá [Slot]", "Das ist zu [Slot]."),
    M("[P] có thể [Slot]", "[P] kann [Slot]."),
    M("[P] phải [Slot]", "[P] muss [Slot]."),
    M("[P] muốn [Slot]", "[P] will [Slot]."),
    M("[P] không thể [Slot]", "[P] darf nicht [Slot]."),
    M("[P] đi đến [Slot]", "[P] gehe zu einem [Slot]."),
    M("[P] đi bằng [Slot]", "[P] fahre mit [Slot]."),
    M("[P] [Slot] về nhà", "[P] [Slot] nach Hause."),
    M("[Slot]", "[Slot]"),
    M("hẹn gặp lại vào [Slot]", "Wir sehen uns am [Slot]."),
    M("mất một [Slot]", "Es dauert eine [Slot]."),
    M("[P] thích [Slot]", "[P] mag [Slot]."),
    M("[P] thấy [Slot]", "[P] sehe [Slot]."),
    M("nó màu [Slot]", "Sie ist [Slot]."),
    M("món ăn rất [Slot]", "Das Essen ist [Slot]."),
    M("hôm qua [P] [Slot]", "[P] war gestern [Slot]."),
    M("ngày mai [P] sẽ [Slot]", "[P] werde morgen [Slot]."),
    M("[P] [Slot] nhiều", "[P] [Slot] viel."),
    M("[P] trở nên [Slot]", "[P] werde [Slot]."),
    M("tôi mệt [Slot] tôi làm việc", "Ich bin müde, [Slot] ich arbeite."),
    M("tôi muốn [Slot] nhưng không thể", "Ich will [Slot], aber ich kann nicht."),
    M("nó [Slot] nhưng được", "Es ist [Slot], aber es geht."),
    M("tôi [Slot] bạn", "Ich [Slot] dich."),
    M("[Slot] của tôi đau", "[Slot] tut weh."),
    M("tôi đau [Slot]", "Ich habe Schmerzen im [Slot]."),
    M("tôi có [Slot]", "Ich habe ein [Slot]."),
    M("ở đây có [Slot]", "Hier gibt es einen [Slot]."),
    M("tôi mua [Slot]", "Ich kaufe einen [Slot]."),
    M("tôi có [Slot]", "Ich habe [Slot]."),
    M("đây là [Slot] của tôi", "Das ist meine [Slot]."),
    M("tôi đợi [Slot]", "Ich warte auf [Slot]."),
    M("ngày mai có [Slot]", "Morgen gibt es [Slot]."),
    M("tôi được [Slot] tốt", "Ich habe eine gute [Slot] bekommen."),
]
schreib("vi", "Vietnamesisch", "vietnamesisch_vocab", "vietnamese", "VIETNAMESE_COURSE",
        """**Vietnamesisch flektiert ueberhaupt nicht** - kein Genus, keine
Faelle, keine Konjugation, kein Plural. Ein Wort bleibt in jedem Satz
dasselbe. Deshalb gibt es hier KEINE Artikelrahmen: `artikel` bleibt
ueberall leer, und die Genus-Rahmen des gemeinsamen Aufbaus werden zu
schlichten Saetzen ohne Artikel.

**Die Tonzeichen sind bedeutungstragend.** `ma`, `má`, `mà`, `mả`, `mã`,
`mạ` sind sechs verschiedene Woerter. Fuer die Bewertung heisst das: NICHT
diakritikaneutral vergleichen - siehe `sprachEval` in
`features/course/lessonEvaluation.ts`.

**`là` steht nur vor NOMEN, nicht vor Adjektiven.** `tôi là sinh viên`
(ich bin Student), aber `tôi mệt` (ich bin muede) ohne `là`. Dieselbe
Unterscheidung wie chinesisch 是/很, und derselbe Anfaengerfehler.
Rahmen 1 und 2 sind deshalb getrennt.

**Die Anrede richtet sich nach dem ALTER** des Gegenuebers (anh/chị/em).
`tôi`/`bạn` sind die neutrale Notloesung, die immer geht - mehr kann ein
Anfaengerkurs nicht leisten, ohne das Alter des Gegenuebers zu kennen.""",
        VI, [
            ("Nomen", "('đây là [Slot]', 'Hier ist der [Slot].')"),
            ("Verb", "('tôi muốn [Slot]', 'Ich will [Slot].')"),
            ("Adjektiv", "('nó rất [Slot]', 'Es ist sehr [Slot].')"),
            ("Adverb", "('tôi làm [Slot]', 'Ich mache es [Slot].')"),
            ("Pronomen", "('cái này cho [Slot]', 'Es ist für [Slot].')"),
            ("Praeposition", "('nó ở [Slot] nhà', 'Es ist [Slot] dem Haus.')"),
            ("Konjunktion", "('tôi đến [Slot] tôi có thể', 'Ich komme, [Slot] ich kann.')"),
            ("Fragewort", "('[Slot] vậy?', '[Slot] ist es?')"),
            ("Zahlwort", "('[Slot]', '[Slot]')"),
            ("_sonst", "('[Slot]', '[Slot]')"),
        ])

# =====================================================================  PL
PL = [
    M("[P] jestem [Slot]", "[P] bin [Slot]."),
    M("[P] jestem [Slot]", "[P] bin [Slot]."),
    M("[P] jest bardzo [Slot]", "[P] ist sehr [Slot]."),
    M("to jest [Slot]", "Das ist ein [Slot]."),
    M("tutaj jest [Slot]", "Hier ist ein [Slot]."),
    M("[P] mam [Slot]", "[P] habe einen [Slot]."),
    M("to jest moja [Slot]", "Das ist mein [Slot]."),
    M("to jest [Slot] dom", "Das ist [Slot] Haus."),
    M("to są [Slot] książki", "Das sind [Slot] Bücher."),
    M("[Slot] jest tutaj", "[Slot] ist hier."),
    M("[P] chcę [Slot]", "[P] möchte [Slot]."),
    M("[P] potrzebuję [Slot]", "[P] brauche [Slot]."),
    M("[P] poproszę [Slot]", "[P] möchte einen [Slot], bitte."),
    M("[P] jem [Slot]", "[P] esse [Slot]."),
    M("[P] nie jestem [Slot]", "[P] bin nicht [Slot]."),
    M("czy jesteś [Slot]?", "Bist [P] [Slot]?"),
    M("[Slot] to jest?", "[Slot] ist das?"),
    M("gdzie jest [Slot]?", "Wo gibt es einen [Slot]?"),
    M("czy tutaj jest [Slot]?", "Gibt es hier ein [Slot]?"),
    M("[Slot] jest tutaj", "[Slot] ist hier."),
    M("to jest [Slot] domem", "Es liegt [Slot] dem Haus."),
    M("[Slot]", "[Slot]"), M("[Slot]", "[Slot]"), M("[Slot]", "[Slot]"),
    M("to [Slot] raz", "Das ist das [Slot] Mal."),
    M("ile kosztuje [Slot]?", "Wie viel kostet ein [Slot]?"),
    M("to za [Slot]", "Das ist zu [Slot]."),
    M("[P] mogę [Slot]", "[P] kann [Slot]."),
    M("[P] muszę [Slot]", "[P] muss [Slot]."),
    M("[P] chcę [Slot]", "[P] will [Slot]."),
    M("[P] nie mogę [Slot]", "[P] darf nicht [Slot]."),
    M("[P] idę do [Slot]", "[P] gehe zu einem [Slot]."),
    M("[P] jadę [Slot]", "[P] fahre mit [Slot]."),
    M("[P] [Slot] do domu", "[P] [Slot] nach Hause."),
    M("[Slot]", "[Slot]"),
    M("do zobaczenia w [Slot]", "Wir sehen uns am [Slot]."),
    M("to trwa [Slot]", "Es dauert eine [Slot]."),
    M("[P] lubię [Slot]", "[P] mag [Slot]."),
    M("[P] widzę [Slot]", "[P] sehe [Slot]."),
    M("to jest [Slot]", "Sie ist [Slot]."),
    M("jedzenie jest [Slot]", "Das Essen ist [Slot]."),
    M("wczoraj [P] byłem [Slot]", "[P] war gestern [Slot]."),
    M("jutro będę [Slot]", "[P] werde morgen [Slot]."),
    M("[P] [Slot] dużo", "[P] [Slot] viel."),
    M("[P] staję się [Slot]", "[P] werde [Slot]."),
    M("jestem zmęczony [Slot] pracuję", "Ich bin müde, [Slot] ich arbeite."),
    M("chcę [Slot] ale nie mogę", "Ich will [Slot], aber ich kann nicht."),
    M("to [Slot] ale da się", "Es ist [Slot], aber es geht."),
    M("[Slot] cię", "Ich [Slot] dich."),
    M("boli mnie [Slot]", "[Slot] tut weh."),
    M("mam ból [Slot]", "Ich habe Schmerzen im [Slot]."),
    M("mam [Slot]", "Ich habe ein [Slot]."),
    M("tutaj jest [Slot]", "Hier gibt es einen [Slot]."),
    M("kupuję [Slot]", "Ich kaufe einen [Slot]."),
    M("mam [Slot]", "Ich habe [Slot]."),
    M("to jest moja [Slot]", "Das ist meine [Slot]."),
    M("czekam na [Slot]", "Ich warte auf [Slot]."),
    M("jutro będzie [Slot]", "Morgen gibt es [Slot]."),
    M("dostałem dobrą [Slot]", "Ich habe eine gute [Slot] bekommen."),
]
schreib("pl", "Polnisch", "polnisch_vocab", "polish", "POLISH_COURSE",
        """**Die grosse Einschraenkung: Polnisch DEKLINIERT, die Wortliste
fuehrt den Nominativ.** `chcę kawę` (Akkusativ) statt `chcę kawa`,
`czekam na autobus` (Akkusativ), `nie mam czasu` (Genitiv nach
Verneinung). Ein Rahmen, der einen anderen Fall verlangt, erzeugt mit der
Woerterbuchform einen falschen Satz.

Deshalb sind die Rahmen hier bewusst NOMINATIV-LASTIG gebaut: `to jest
[Slot]`, `[Slot] jest tutaj`, `gdzie jest [Slot]?`, `tutaj jest [Slot]`.
Wo ein anderer Fall unvermeidlich ist (Rahmen 11, 26, 57), steht die
Grundform - **das ist eine bekannte Ungenauigkeit** und der wichtigste
Punkt fuer einen Muttersprachler-Check.

Sauber loesen liesse sich das nur mit Fallformen in der Vokabeltabelle;
die gibt es nicht. Lieber ein sichtbar vereinfachter Kurs als einer, der
so tut, als gaebe es keine Faelle.

**Gesiezt wird mit `pan`/`pani` und der DRITTEN Person**, nicht mit einer
Sie-Form. Der Kurs duzt durchgehend - fuer die Zielgruppe richtig, aber
erwaehnenswert.""",
        PL, [
            ("Nomen", "('tutaj jest [Slot]', 'Hier ist der [Slot].')"),
            ("Verb", "('chcę [Slot]', 'Ich will [Slot].')"),
            ("Adjektiv", "('to bardzo [Slot]', 'Es ist sehr [Slot].')"),
            ("Adverb", "('robię to [Slot]', 'Ich mache es [Slot].')"),
            ("Pronomen", "('to dla [Slot]', 'Es ist für [Slot].')"),
            ("Praeposition", "('to jest [Slot] domem', 'Es ist [Slot] dem Haus.')"),
            ("Konjunktion", "('przyjdę [Slot] mogę', 'Ich komme, [Slot] ich kann.')"),
            ("Fragewort", "('[Slot] to jest?', '[Slot] ist es?')"),
            ("Zahlwort", "('[Slot]', '[Slot]')"),
            ("_sonst", "('[Slot]', '[Slot]')"),
        ])

print("fertig")
