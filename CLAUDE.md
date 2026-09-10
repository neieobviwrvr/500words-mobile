# Projekt: Sprachlern-App

## Konzept
App zum Sprachenlernen auf Basis der 500 meistgenutzten Woerter einer Sprache
(ca. 80% der Alltagssprache). Ziel: Nutzer sollen nach ca. 2 Monaten taeglichem
Lernen einfache Alltagsgespraeche im Zielland fuehren koennen (Hotel, Small Talk,
Ausgehen, Uni-Alltag etc.).

**Kernprinzip: primaeres Ziel ist Sprechen lernen, nicht Lesen/Schreiben.**
Lesen und Schreiben sollen langfristig NICHT trainiert werden - die
eigentliche Uebung soll ueber Text-to-Speech (TTS) und Speech-to-Text (STT)
laufen. Fuer den Start/MVP ist normale Text-Eingabe als Fallback erlaubt,
solange die Spracherkennung (STT) noch nicht zuverlaessig eingebunden ist.
Konkret: Uebungs-Screens sollten von Anfang an TTS nutzen (Ausgangssatz
vorlesen), STT wo technisch machbar, und normale Text-Eingabe als
Uebergangsloesung/Fallback, bis STT vollstaendig funktioniert - NICHT als
dauerhafte Kernfunktion gedacht.

**Erledigt (2026-08-12): STT ist eingebunden und laeuft ueber Speechmatics
(Cloud), nicht mehr on-device** - siehe Tech-Stack-Abschnitt unten fuer die
Begruendung. Die urspruengliche Vorgabe "pruefe zuerst, ob ein
On-Device-STT-Modell integrierbar ist, bevor eine andere Loesung als final
gilt" wurde genau so abgearbeitet: whisper.rn wurde ueber mehrere
Modellgroessen (`tiny`/`base`/`small`) real getestet und wegen zu hoher
Fehlerquote bei akzentbehafteter Aussprache verworfen. Die Frage ist damit
beantwortet, nicht offen - bei neuen STT-Entscheidungen also nicht erneut
von vorn "geht das nicht on-device?" aufrollen.

## Zielgruppe
- Backpacker in den Zwanzigern: wollen im Ausland Leute kennenlernen, Dates,
  Nightlife/Club-Kontexte meistern
- Austauschstudenten in den Zwanzigern: brauchen Grundwortschatz fuers
  Auslandssemester (Uni-Alltag, WG-Suche, Behoerden)

## Geschlechtsspezifische Content-Varianten (2026-08-07, noch nicht gebaut)
Beim Onboarding soll spaeter nach dem Geschlecht der Person gefragt werden,
die die App nutzt. Darauf basierend sollen bestimmte Kategorien - vor allem
alles rund um Leute-kennenlernen/Club/Dating - unterschiedliche
Satz-/Anmach-Varianten je nach Geschlecht zeigen, weil das reale Vorgehen
sich unterscheidet (Beispiel des Nutzers: ein Mann lobt im Club eher die
Haare einer Frau, eine Frau eher die Muskeln eines Mannes - unterschiedliche
Anmachsprueche/Komplimente, nicht nur eine neutrale Variante fuer alle).
Betrifft primaer die Kategorien Club + Nightlife, Dating + Romance,
Finding Friends, Smalltalk + Socialising - genau die 4 Kategorien, die laut
Backlog unten ohnehin noch 0 cross-referenzierte Saetze haben. Wenn die
Cross-Referenzierung fuer diese Kategorien beginnt, gleich mit
geschlechtsspezifischen Satz-Varianten planen statt nachtraeglich
draufzusetzen. Datenmodell/Onboarding-Screen dafuer: noch offen.

## Content-Struktur

### Grundwortschatz (free-to-play)
- 500 meistgenutzte Woerter + dazu passende Alltagssaetze pro Sprache
- Datenhaltung in Supabase

**Umgebaut 2026-08-22: acht Situationen, 62 Saetze** (Chinesisch 61,
Schwedisch/Spanisch 38 - die uebersetzen noch nach). Vorher waren es 36 Saetze
in sieben Situationen, drei davon mit weniger als vier Saetzen.

| Box | Saetze |
|---|---|
| Zahlen und Preise | 10 |
| Begruessen und Verabschieden | 9 |
| Sich vorstellen | 9 |
| Hoeflich sein | 9 |
| Sich verstaendigen | 8 |
| Sich verabreden | 6 |
| Wenn's drauf ankommt | 6 |
| Zeit sagen | 5 |

**Das Aufnahmekriterium** (Nutzer-Entscheidung): ein Satz gehoert hierher,
wenn man ihn braucht, **egal was man gekauft hat**. Strenger als "nuetzlich" -
"Wie viel kostet die Nacht?" braucht nur, wer im Hotel steht; "Danke" braucht
jeder am ersten Tag. Danach fielen drei Luecken auf:
- **"Danke", "Bitte", "Entschuldigung", "Ja", "Nein" gab es gar nicht** als
  eigene Saetze. "Danke" kam nur eingebettet vor ("Mir geht es gut, danke"),
  "Entschuldigung" nur in einer Kaufkategorie. Daraus wurde `hoeflichkeit`.
- **"Hilfe!" lag in health_emergency, "Wo ist die Toilette?" in
  drinking_dining** - beide hinter der Bezahlschranke. Beide sind zurueck im
  freien Teil (`notlage`).
- **`zahlen` enthielt Preisfragen, aber keine Zahl.** Jetzt beides.

**Keine Box unter fuenf Saetzen.** Darunter tippt der Nutzer sich durch drei
Karten und steht wieder am Anfang. Deshalb ging `abschied` (3 Saetze) in
`begruessung` auf - Gruss und Abschied sind die zwei Enden desselben
Gespraechs, kein eigenes Thema. Der Wert `abschied` existiert in keiner
Tabelle mehr.

**Chinesisch fehlt genau ein Satz, und zwar absichtlich:** "Guten Tag!".
Chinesisch kennt keine Tageszeit-Form zwischen 早上好 und 晚上好 - 你好 deckt
sie ab und steht schon als "Hallo!". Ein zweiter Eintrag mit demselben
Zeichen waere eine Karteikarte, die sich selbst abfragt.

**Quellen:** `Sprachlisten/grundwortschatz/welle1.py` (24 neue deutsche
Saetze mit chinesischer Fassung), `welle2.py` (15 rein chinesische
Uebersetzungen des Altbestands), `umbauen.py` (Zusammenlegen, Zurueckholen,
Einspielen - idempotent).

### Zusatzkategorien (kostenpflichtig, je Sprache einzeln freizuschalten)
14 Kategorien, dargestellt als Knoten in einem "Skilltree" (Shop-Ansicht).
13 davon sind gebaut, die 14. ist beschlossen aber noch nicht existent
(siehe Unterabschnitt "14. Kategorie" weiter unten):
Hotel + Accommodation, Travel + Transportation, Health + Emergency,
Moving + Settling, Finding Friends, Love + Relationship, Dating + Romance,
Smalltalk + Socialising, Club + Nightlife, Shopping + Haggling,
Drinking + Dining, Culture + Immersion, University + Studying,
Job + Arbeit (vorgemerkt)

- Ein Paket enthaelt: 200 Woerter + Saetze + 3 Lernmodi
- Wie lange eine Freischaltung gilt, regelt das Preismodell unten. **Stand
  2026-08-20 ist es wieder ein Abo** (1/3/6/12 Monate, Kategorien abwaehlbar).
  Dazwischen galt vom 2026-08-07 bis 2026-08-19 ein Einmalkauf ohne Abo, den
  Simon damals ausdruecklich als final bezeichnet hatte - diese Festlegung ist
  aufgehoben. Wer hier eine aeltere Aussage findet, zieht den
  Preismodell-Abschnitt vor.
- Ueberlegt: thematische Buendel aus 2-3 zusammenpassenden Kategorien
  (z.B. Club + Dating + Smalltalk fuer Nightlife-Reisende)

#### 14. Kategorie "Job + Arbeit" (2026-08-17, beschlossen, noch nicht gebaut)
Nutzer-Entscheidung: es kommt eine 14. Zusatzkategorie **Job + Arbeit** dazu.
Ausloeser war ein Abgleich der 13 bestehenden Kategorien gegen eine
CEFR-Themenliste (A1 bis B2), in der "Arbeitswelt, Bewerbung & Karriere" und
"Wirtschaft, Arbeitsmarkt" als eigene Themenbloecke auftauchen - bei uns bisher
von keiner Kategorie abgedeckt.

**Was die Kategorie koennen soll** (Formulierung fuer Nutzer-Sicht:
"Im Job zurechtkommen"): Dienstplan und Schichten absprechen, mit
Kolleg:innen reden, Kund:innen bedienen, sich krankmelden, ein
Vorstellungsgespraech ueberstehen.

**Bewusster Zuschnitt - NICHT die CEFR-Version.** Die Lehrbuch-Variante des
Themas (Start-ups, Globalisierung, New Work, Fachkraeftemangel,
Fuehrungsstile) ist B1/B2 und passt weder zum Kernversprechen "nach ca. 2
Monaten einfache Alltagsgespraeche" noch zu den beiden Personas. Unsere
Variante zielt auf **Work & Travel, Saison- und Nebenjob** - deshalb auch
die Wortwahl "Job + Arbeit" statt Babbels "Beruf und Karriere": "Karriere"
klingt nach Ue30 im Buero und trifft die Zwanziger-Zielgruppe nicht.

**Content-Basis:** anders als bei Dating/Club/Smalltalk/Finding-Friends gibt
es hier eine Lehrbuch-Grundlage (CEFR-Themenblock), die Cross-Referenzierung
ueber Reiseforen ist also nicht zwingend - der A1/A2-taugliche Teil davon
muss aber erst herausgeschnitten werden.

**Stand:** 0 Saetze, kein `category`-Slug vergeben, nicht in `categories.ts`,
nicht im Skilltree, nicht im Shop, nicht im Pfad. Slug-Vorschlag zur
Konsistenz mit den anderen: `job_work`.

**Zur Zahl 13 vs. 14 in dieser Datei (wichtig beim Lesen):** beide Zahlen
stehen absichtlich nebeneinander und widersprechen sich NICHT.
- **14** steht ueberall, wo das Konzept/Zielbild gemeint ist: Skilltree,
  Fruehnutzer-Bonus (2 von 14), Komplettkauf, radiales Ziel-Layout.
- **13** steht ueberall, wo der tatsaechlich gebaute Stand oder ein
  DB-Fakt gemeint ist: `categories.ts`, das Shop-Grid, die `category`-Spalte
  in Supabase, die Satz-Abdeckung (9 von 13 befuellt).
Wer "13" findet, muss also erst pruefen, welche der beiden Bedeutungen
gemeint ist, bevor er sie hochzaehlt. Sobald `job_work` in `categories.ts`
und in Supabase existiert, wird aus jedem verbliebenen 13 ein 14 und dieser
Absatz kann weg.

**Code-Hinweis:** die App zaehlt nirgends hart auf 13 - `SrsScreen.tsx` und
`ShopScreen.tsx` leiten alles aus `CATEGORIES.length` ab. Ein Eintrag in
`mobile/src/data/categories.ts` reicht also, damit die UI-Zahlen ("x/13
Kategorien lernbar") von selbst mitwandern. Nur die Kommentare in
`categories.ts` und `SrsScreen.tsx` nennen die 13 im Klartext.

**Satz-Auswahl-Methodik (wichtig fuer Content-Pipeline):** Es gibt keine
objektive Frequenzliste fuer Saetze wie bei Woertern. Saetze werden nach
Cross-Referenzierung ausgewaehlt (2+ unabhaengige Quellen bestaetigen eine
Situation als alltagsrelevant) statt aus dem Bauchgefuehl. CEFR-A1/A2-Standard-
Funktionen dienen als Grundlage fuer "gut abgedeckte" Kategorien (Hotel, Travel,
Health, Moving, Shopping, Dining, Culture, University); fuer Dating/Club/
Smalltalk/Finding-Friends gibt es keine Lehrbuch-Basis, dort ist Cross-
Referenzierung ueber Reiseforen/Blogs zwingend noetig.

## Preismodell (Stand: 2026-08-20)
**Das Modell hat sich zweimal gedreht - die Reihenfolge zaehlt:**
1. Urspruenglich: Freischaltung auf Zeit mit Verlaengerung.
2. 2026-08-07: Einmalkauf ohne Abo, damals ausdruecklich als final erklaert.
3. **2026-08-20 (gueltig): Abo mit 1/3/6/12 Monaten, bei dem der Nutzer
   Kategorien abwaehlen kann, um seinen Preis zu senken.**

Die Abschnitte "Launch-Phase" und "Ab Monat 7" darunter stammen aus Stufe 2
und sind noch nicht auf das Abo umgeschrieben - besonders die Aussage, die
500 Woerter blieben Fruehnutzern "dauerhaft gratis", passt nicht
selbstverstaendlich zu einem Abo. Beim naechsten Durchgang klaeren.

### Launch-Phase (erste 6 Monate nach Launch)
- App komplett kostenlos fuer alle Nutzer, alle 500 Grundwoerter im vollen
  Umfang
- Nutzer, die in dieser Phase einsteigen, behalten die 500 Woerter
  DAUERHAFT gratis (auch nach Ende der Launch-Phase)
- Fruehnutzer-Bonus: duerfen sich EINMALIG 2 der 14 Extra-Kategorien
  aussuchen, die sie dann fuer immer kostenlos behalten

### Ab Monat 7 (neue Nutzer)
- Teaser-Modell statt voller 500 Woerter: nur 2-3 Grundlagen-Kategorien mit
  je 10 Beispielsaetzen kostenlos
- Zusaetzlich ein kleiner Vorgeschmack auf eine weitere Kategorie (2 Themen,
  je 10 Saetze)
- Alle 14 Kategorien bleiben im scrollbaren Skilltree sichtbar, aber
  unterhalb einer gestrichelten Linie ausgegraut + mit Schloss-Symbol
  markiert

### Kaufmodell (ueberarbeitet 2026-08-20 - ERSETZT den Einmalkauf)
**Achtung beim Lesen: das ist eine Kehrtwende.** Bis zum 2026-08-19 stand hier
"KEIN Abo als Hauptmodell", Einzelkauf 2,29 Euro je Kategorie, Komplettkauf
ca. 18 Euro - und ausdruecklich, Simon habe das bewusst und final so gewollt.
Diese Entscheidung ist zurueckgenommen. Wer anderswo noch Reste des alten
Modells findet, liest einen ueberholten Stand.

**Abo mit vier Laufzeiten:** 1, 3, 6 und 12 Monate zu unterschiedlichen
Preisen (Hoehe noch offen). Laengere Laufzeit, guenstigerer Monatspreis.

**Der eigentliche Einfall: Kategorien abwaehlen senkt den Preis.** Der Nutzer
kann Kategorien, mit denen er nichts anfangen kann, aus seinem Abo entfernen
und zahlt entsprechend weniger. Begruendung von Simon: wer zum Feiern und
Leutekennenlernen unterwegs ist, will nichts ueber Uni-Alltag oder Einkaufen
wissen - und kauft eher, wenn er nur bezahlt, was er nutzt.

**Technischer Vorbehalt, VOR der Preisfestlegung zu klaeren:** Apple und
Google verlangen fuer In-App-Kaeufe **vorab angelegte Preispunkte**. Ein frei
gerechneter Preis ("9 von 14 Kategorien mal x") ist ueber die Stores nicht
abbildbar. Machbar ist eine feste Staffel, z.B. drei Groessen (klein / mittel /
voll) mal vier Laufzeiten = 12 Produkte im Store; WELCHE Kategorien in der
gewaehlten Groesse stecken, entscheidet dann die App. Wer das Modell
ausarbeitet, faengt am besten mit dieser Einschraenkung an, nicht mit dem
Preis.

**Notiz, NICHT priorisiert:** ein 3-Monats-Abo mit Belohnungsmechanismus wurde
frueher durchdacht - wer im Abo-Zeitraum ALLE Kategorien durcharbeitet,
behielte dauerhaften Cheat-Sheet-Zugriff, auch nach Ablauf.

### Coins (ueberarbeitet 2026-08-20)
**Coins kaufen einzelne THEMEN frei, nicht ganze Kategorien.** Auch das ist
eine Aenderung: bis zum 2026-08-19 galt "3 Coins = 1 Gratiskategorie". Die
kleinere Einheit macht Coins zum Reinschnuppern in eine gesperrte Kategorie,
statt zur Umgehung des Abos.

**"Thema" heisst hier SITUATION** (Praezisierung 2026-08-20) - also die
`scenario`-Ebene, die der Lektionen-Screen schon als Karten zeigt. Heute hat
der Content dort noch zu wenig Koernung: 9 von 10 befuellten Kategorien haben
genau EIN Szenario, ein Thema freikaufen waere dort dasselbe wie die ganze
Kategorie freikaufen. **Die fehlenden Situationen werden vor dem Launch
ergaenzt** - Nutzer-Zusage, also eingeplante Content-Arbeit und kein offener
Punkt. Das Coin-Modell haengt aber daran: ohne mehrere Situationen pro
Kategorie hat es keine Ware.

**Vier Quellen, Coins zu verdienen** (verdient, nie gekauft):
1. **Taegliche Zufallsbox** hinter dem Geschenk-Knopf - fuers blosse
   Erscheinen. **Nicht gebaut**, der Knopf sagt das beim Antippen.
2. **Streak von 5-7 Tagen** am Stueck. **Nicht gebaut** - es gibt bisher
   ueberhaupt keine Streak-Zaehlung in der App.
3. **Referral**, wenn 3 geworbene Nutzer ein Konto anlegen. **Nicht gebaut.**
4. **Drei verschiedene Lektionen mit 98% oder besser.** **Nicht gebaut** - und
   hier steckt eine Luecke: die Bewertung liefert heute drei Stufen
   (nicht_verstanden / ueberlebt / richtig), keinen Prozentwert. Fuer eine
   98%-Schwelle braucht es erst eine Punktzahl pro Lektion.

**Was heute existiert:** `coins` und `coinGrants` liegen persistiert in
`mobile/src/state/AppState.tsx`; `grantCoins(grantId, amount)` vergibt ein
Geschenk genau einmal pro Schluessel und darf erst laufen, wenn `hydrated`
true ist. Vergeben wird bisher genau ein Coin - nach der Beispiellektion im
Onboarding (`mobile/app/onboarding/o9b-coin.tsx`), damit auf S1 beim
Coins-Knopf von Anfang an eine echte Zahl steht. **Ausgeben kann man Coins
nicht**, weil es die Themen-Ebene noch nicht gibt.

**Kein Widerspruch zum Boost-Verbot** weiter unten: das verbietet *gekaufte*
Vorteile beim Lernen. Coins werden verdient und schalten Inhalt frei, nicht
Lerntempo.

### Cheat-Sheet als Offline-Notfallhandbuch (Preismodell-Anforderung)
Zeigt immer ALLE bisher freigeschalteten Saetze (egal ob kostenlos oder
gekauft), dauerhaft und offline abrufbar - passt zur bereits umgesetzten
Offline-Cache-Architektur (siehe Persistenz-Abschnitt oben), ist aktuell
aber noch NICHT an echte Kauf-/Freischaltungslogik gekoppelt (Supabase
Auth + serverseitiger Kaufstatus existieren noch nicht, siehe Backlog).

### Weiterhin gueltig aus dem vorherigen Entwurf
- Weitere Sprache (z.B. Franzoesisch zusaetzlich zu Spanisch): 5 Euro
- KEIN Streak-Freeze/Boost-Kaeufe (widerspricht dem Ziel "schneller lernen
  als Duolingo")
- Ueberlegt: B2B-Verkauf an Ober-/Realschulen pro Schueler
- Konversationsmodus (siehe unten) verursacht laufende KI-Kosten pro Nutzung
  -> vermutlich als Premium-Feature/Kontingent zu behandeln, noch offen

### Freunde-Bereich (2026-08-20, Konzept - ZURUECKGESTELLT)
**Prioritaet:** Gruppen und Ranglisten sind auf Nutzer-Entscheidung
zurueckgestellt (2026-08-20). Hier steht das Zielbild, damit es nicht
verlorengeht - es ist ausdruecklich NICHT der naechste Schritt. Was vom Tab
zuerst kommt, ist allein das Einladen von Freunden, weil es dieselbe Mechanik
wie das Referral-Programm nutzt.

Der Tab "Freunde" bekommt spaeter drei Dinge:
- **Freunde einladen** (Referral, siehe unten - dieselbe Mechanik)
- **Gruppe gruenden**, um gemeinsam auf einen Trip hin zu lernen
- **Gruppen-Streak** und **Rangliste**, wer am meisten gelernt hat

**Der Grund fuer die Zurueckstellung, der auch spaeter gilt: das ist die
erste Funktion der App, die zwingend einen Server braucht.**
Bisher laeuft alles ohne: die App liest nur zwei Supabase-Tabellen (die
Phrasebook-Tabelle der Sprache und `answer_clusters`), beide reiner Content,
und der gesamte Nutzerzustand - Fortschritt, FSRS-Karten, Kaeufe, Favoriten -
liegt lokal in AsyncStorage. Fuer Gruppen und Ranglisten reicht das nicht:
mehrere Geraete muessen dieselben Daten sehen.

**Abhaengigkeitskette, in dieser Reihenfolge:**
1. **Konten.** Ohne Identitaet gibt es keine Freunde. Der Google-Login ist
   codeseitig fertig, braucht aber zwei externe Schritte, die nur Simon machen
   kann (OAuth-Client in der Google Cloud Console, Client-ID/-Secret in
   Supabase eintragen - siehe Backlog). Der Gastmodus bleibt fuer alle, die
   ohne Konto lernen wollen; die haben dann keinen Freunde-Bereich.
2. **Nutzerdaten serverseitig.** Neue Tabellen fuer Profil, Gruppe,
   Mitgliedschaft und Lernaktivitaet - es existiert bisher KEINE einzige
   Tabelle mit Nutzerdaten.
3. **Lernaktivitaet synchronisieren.** Die Rangliste braucht eine Zahl pro
   Nutzer. Naheliegend aus vorhandenen Daten: bewertete Karten pro Zeitraum,
   die FSRS ohnehin mitschreibt. Was genau "am meisten gelernt" heisst, ist
   noch offen - Kartenzahl, Zeit, oder Treffer nach Stufe.
4. **Streak.** Gibt es auch einzeln noch nicht (siehe Coins). Eine
   GRUPPEN-Streak wirft zusaetzlich die Frage auf, wann sie reisst: wenn
   einer aussetzt, oder erst wenn alle aussetzen. Ungeklaert.

**Der Trip-Bezug ist der interessante Teil** und sollte beim Ausarbeiten nicht
verlorengehen: eine Gruppe hat ein gemeinsames Ziel und ein Datum. Das
unterscheidet sie von einer reinen Bestenliste und passt zu den beiden
Personas (Backpacker, Austauschstudenten), die ohnehin zu mehreren reisen.

### Achievement-System (2026-08-07, neu, noch nicht ausgearbeitet)
Nutzer will ein Achievement-System einfuehren (Motivations-/Gamification-
Baustein, passt thematisch zum "SRS soll nicht schlecht gelaunt machen"-
Prinzip oben). Noch komplett offen: welche Achievements, wie sie angezeigt
werden, ob sie mit dem Referral-/Belohnungs-Screen (`RewardsScreen.tsx`)
zusammenhaengen oder eigenstaendig sind. Bei Gelegenheit nachfragen statt
selbst auszudenken, wenn's konkret wird.

### Referral-/Bewertungs-/Feedback-Programm (2026-08-06, noch nicht gebaut)
Ueber einen Randleisten-Button auf S1 erreichbare eigene Seite mit drei
Bereichen (nur Platzhalter-UI bisher, siehe `mobile/src/features/rewards/RewardsScreen.tsx`):
- **Referral:** wirbt ein Nutzer 3 neue Nutzer ueber seinen Link, die sich
  registrieren UND die App tatsaechlich aktiv nutzen (Aktivitaets-Schwelle
  noch offen), schaltet er automatisch eine Zusatzkategorie seiner Wahl frei.
  **Ueberarbeitet 2026-08-20:** die Belohnung sind Coins, und die Schwelle
  sind **3 geworbene Nutzer, die ein Konto anlegen** - nicht mehr eine
  Aktivitaets-Schwelle. Coins schalten damit Themen frei, keine ganzen
  Kategorien (siehe Coins-Abschnitt oben).
- **Bewertung:** oeffnet den echten App-Store-/Play-Store-Bewertungsdialog.
  **Technische Einschraenkung:** Apple/Google erlauben ueber ihre offiziellen
  APIs (`AppStore.requestReview()` / Play In-App Review) NUR ein natives
  Sterne-only-Popup - kein Kommentarfeld, kein Entwickler-Zugriff auf den
  Inhalt. Ein eigenes Sterne+Kommentar-Popup kann also niemals direkt eine
  echte oeffentliche Store-Bewertung mit Text absenden. Uebliches
  funktionierendes Muster: eigenes Vor-Popup nur mit Sternen (ohne
  Store-Anbindung) -> bei 4-5 Sternen den echten nativen Store-Prompt
  ausloesen -> bei 1-3 Sternen stattdessen ein Textfeld zeigen, das an den
  eigenen Support-Kanal geht statt an den Store. Vorsicht: zu offensichtliches
  Filtern nach Sternewert vor dem echten Prompt verstoesst gegen Apples
  Review-Gating-Richtlinien.
- **Feedback:** Freitext, geht an den eigenen Support-Kanal, nicht an den
  Store. Aktuell keine Belohnung dafuer vorgesehen (nur Referral hat eine
  definierte Belohnung).

## Lernmodi
1. **Woerter lernen**: Karteikarten, TTS + STT
2. **Saetze lernen**: Karteikarten, TTS, richtig/falsch-Feedback, Auswertung
   am Ende der Session
3. **Konversationsmodus / Sprachbooster** (in Arbeit, schwierigste Stufe):
   App stellt Rueckfragen in wechselnden Saetzen, um den Nutzer aus dem
   Konzept zu bringen und echtes freies Sprechen zu trainieren. Vermutlich
   Premium/kostenpflichtig wegen laufender KI-Kosten.
4. **Grundlagen-Modus**: kurze Einfuehrung in Grammatik/Sprachregeln, muss vor
   den anderen Modi durchgearbeitet werden

### Wörter-Wiederholung (gebaut 2026-08-24)

Der erste der drei Trainingsmodi vom Lektionen-Screen mit echtem Screen
(`mobile/src/features/training/WordReviewScreen.tsx`, Route
`/training/woerter` - eigene Datei statt des generischen `[mode].tsx`-
Platzhalters, siehe Kommentar dort). Simons Auftrag: eine Auswahl nach
**Wortart** (Verben, Nomen, Adjektive, "was sonst noch uebrig ist"), der
Uebungs-Mechanismus selbst war ihm ueberlassen ("ueberrasche mich").

- **Zuordnungsspiel**, passend zur bestehenden Beschreibung "Ordne Wörtern
  ihre Bedeutung zu": Wort-Spalte gegen Bedeutungs-Spalte, antippen und
  zuordnen, falsche Paare blitzen kurz rot auf statt zu sperren.
- **Wortart-Filter kommt direkt aus den Vokabeltabellen** (`category`-Spalte
  bei `schwedisch_vocab`/`franz_vocab` ist dort die Wortart, siehe Warnung in
  `vocabContent.ts`) - keine feste Liste im Code, die Chips ergeben sich aus
  den tatsaechlich vorhandenen Wortarten je Sprache, sortiert nach
  Haeufigkeit. Mehrfachauswahl moeglich, leere Auswahl heisst "alle".
  Nutzt endlich die Wortarten-Farben aus tokens.ts (`WORD_COLORS`), die
  bis dahin nirgends live gerendert wurden.
- **Nur Deutsch bleibt aussen vor** - keine Vokabeltabelle vorhanden, zeigt
  ehrlich "Für Deutsch gibt es noch keine Wortliste."
- **Chinesisch nachgezogen (2026-08-24, noch am selben Tag):** erster
  Stand liess Chinesisch aussen vor, weil `chinesisch_vocab` keine
  Wortart-Spalte hat (die `category`-Spalte dort meint seit 2026-08-21 die
  LERNKATEGORIE, nicht die Wortart - anderes Schema als bei Schwedisch/
  Franzoesisch) - Simons Reaktion darauf zu Recht: die Woerter SIND ja da.
  Die Wortart wird jetzt aus der deutschen Bedeutung abgeleitet
  (`wortartAusDeutsch()` in `vocabContent.ts`): Grossschreibung = Nomen
  (verlaessliche deutsche Regel), Infinitiv-Verdacht auf "-en"/"-n" = Verb
  (dieselbe Heuristik samt bekannter Schwaeche wie in `useCategoryVocab.ts`
  - "schön" faengt sich faelschlich als Verb). Adjektive/Pronomen/Zahlwoerter
  liessen sich daraus NICHT verlaesslich auseinanderhalten und fallen
  deshalb ehrlich zusammen in "Sonstiges" statt falsch als "Adjektiv" zu
  erscheinen. Angezeigt wird das Pinyin, gesprochen wird bei Chinesisch aber
  das HANZI (`VocabWord.hanzi`) - Sprachausgabe fuer Mandarin braucht echte
  Zeichen, Pinyin-Text wuerde falsch/gar nicht ausgesprochen (derselbe Grund
  wie beim gefuehrten Kurs, siehe "Die Zeichen sind die Infrastruktur"
  weiter oben). `languages.ts` zeigte fuer `zh` bis dahin faelschlich
  `vocabTable: null` - war seit der Kategorie-Wortliste vom 2026-08-21
  ueberholt, jetzt korrigiert.
- **Bewusst NICHT dabei:** ein Filter nach Lernkategorie (Simon war sich
  selbst nicht sicher, ob er den will - Architektur traegt einen zweiten
  Filter locker mit, falls die Entscheidung faellt) und jede FSRS-Anbindung
  (was eine Zuordnungsrunde als Again/Hard/Good bedeuten wuerde, ist eine
  eigene, hier bewusst nicht mitgetroffene Entscheidung).

**Zweiter Rundentyp "Personen-Zuordnung" (2026-08-24, Simons Vorlage,
fuer den Core-Pfad gedacht).** Mischt sich zufaellig (~50%) unter die
Zuordnungsrunden, wenn Verben zur aktuellen Wortart-Auswahl gehoeren.
Vier feste Pronomen-Chips (Ich/Du/Er,Sie/Wir, IMMER Deutsch, nie
uebersetzt), antippen ordnet das Pronomen dem angezeigten Verb im Frame zu
("habe (haben)"-Muster: Verbform gross, deutsche Bedeutung in Klammern).

**Ehrliche Einschraenkung, nicht uebersehen:** keine der aktuell lernbaren
Sprachen hat Daten fuer echte PERSONEN-Konjugation. Schwedisch konjugiert
grammatisch gar nicht nach Person (nur nach Zeit - `forms.present` in
`schwedisch_vocab` gilt fuer alle vier Pronomen gleichermassen), Chinesisch
konjugiert ueberhaupt nicht, Franzoesisch hat keine `forms`-Spalte. Es gibt
also (noch) kein "richtiges" Pronomen zu einer Verbform zu erraten - jeder
Tipp zaehlt als richtig. Die Runde testet damit heute Satzbau/Personen-
Wortschatz, keine Konjugation. Wird zur echten Konjugations-Pruefung, sobald
eine Sprache echte Pro-Person-Formen bekommt (`presentForm` in
`vocabContent.ts` durch eine personenabhaengige Form ersetzen, die
"immer richtig"-Logik in `WordReviewScreen.tsx` durch einen echten
Soll/Ist-Vergleich tauschen - dieselben Bausteine tragen das schon mit).

**UI-Wort-Vorlagen, generisch (2026-08-24, Simons Auftrag, dann auf
Nachfrage generalisiert) - Name: `UI_WORT_TEMPLATES` in
`mobile/src/data/uiWortTemplates.ts`.** Erst als `PERSONALPRONOMEN_TEMPLATE`
gebaut und nur fuer Pronomen benannt; Simons Nachfrage "koennen wir das
nicht auch fuer Verben umfunktionieren?" zeigte, dass der Name zu eng war.
Klargestellt und umbenannt: Verben brauchen KEIN Uebersetzungs-Template -
es gibt hunderte davon, und sie stehen bereits mit deutscher Bedeutung in
den Vokabeltabellen. Was ihnen fehlt (echte Uebersetzungen ins Englische/
Franzoesische/Spanische) ist eine andere, viel groessere Aufgabe, bewusst
zurueckgestellt (Simon: "Jetzt Option 1 [Struktur generalisieren] und zu
einem anderen Zeitpunkt kuemmern wir uns um die Uebersetzung"). `UI_WORT_
TEMPLATES` ist deshalb ein Objekt aus NAMEN kleiner, fester Wortsaetze -
`personalpronomen` (de/en/fr/es, Ich/Du/Er,Sie/Wir) ist der erste Eintrag,
weitere Uebungs-Vorlagen mit eigenem kleinem Wortbestand (z.B. Fragewoerter)
tragen sich als weiterer Schluessel ein.

Noch NICHT live verdrahtet - die Pronomen-Runde zeigt weiterhin
`UI_WORT_TEMPLATES.personalpronomen.de`. Aber: **`sourceLanguageId` (O1,
"Ich spreche...") ist seit 2026-08-24 in `AppState` verankert**
(`mobile/src/state/AppState.tsx`, wie `targetLanguageId` behandelt -
persistiert, im Geraeteabgleich mitgefuehrt, in O1 sofort bei Auswahl
gesetzt). Vorher lebte der Wert nur kurz in `OnboardingState` und
verschwand nach dem Verlassen der Onboarding-Strecke spurlos - kein
anderer Screen konnte ihn je lesen. Aendert bewusst NICHTS an der
Oberflaeche (die bleibt komplett Deutsch, `en` ist bei O1 weiterhin
deaktiviert), macht den Wert nur ueberhaupt erst greifbar.

**Dritter Rundentyp "Situations-Auswahl" (2026-08-24, Simons zweite
Vorlage).** Eine Alltagssituation als Frage ("Wie sagst du: ...?"), vier
Wortoptionen zur Auswahl (Pinyin + Hanzi), "Lösen" wertet aus und fuellt
die Luecke im angezeigten Satz-Rahmen. GENERISCH nach Wortart umgesetzt
(`ladeSituationsAufgaben(languageId, wordClass)` in
`mobile/src/data/situationsAufgaben.ts`) - funktioniert fuer Nomen/
Sonstiges genauso wie fuer Verben, ohne Zusatzcode, geprueft im Browser.

- **Kein neu geschriebener Content** (Simons ausdrueckliche Vorgabe:
  "ausschliesslich auf den Saetzen die wir ohnehin gespeichert haben") -
  Frage, Luecken-Satz und alle vier Optionen sind aus vorhandenen Daten
  ABGELEITET: die Frage ist die deutsche Satzbedeutung in einem generischen
  Rahmen, das richtige Wort UND die drei Ablenker kommen aus
  `chinesisch_vocab`, der Luecken-Satz aus
  `chinesisch_phrasebook.accepted_concepts` (dieselbe "welcher Satz braucht
  welches Wort"-Zuordnung, die urspruenglich fuer die Sprachbewertung
  gebaut wurde, siehe evaluateConcepts.ts).
- **Nur Chinesisch heute** - `accepted_concepts.synonyms` sind dort
  einzelne Hanzi, exakt matchbar. Schwedisch/Franzoesisch haben oft
  mehrwortige Phrasen in Kleinschreibung, dieselbe Idee ist uebertragbar,
  aber noch nicht gebaut.
- **Reale Abdeckung, vor dem Bauen geprueft:** 739 baubare Aufgaben ueber
  alle Wortarten - 94 verschiedene Verben, 135 Nomen, 91 "Sonstiges", je
  mit mindestens einem echten Satz. 26 Saetze scheitern am Luecken-
  Zuschnitt (Pinyin des Worts nicht identisch im Satz-Pinyin auffindbar)
  und werden uebersprungen statt falsch angezeigt.

**Situations-Auswahl hat ein Mikrofon (2026-08-25, Simons zweite
Vorlage).** "Sprich das richtige Wort ein oder tippe es an" - zweiter
Eingabeweg neben dem Antippen, passend zum Kernprinzip TTS/STT vor Text.
Gleiches Aufnahme-Muster wie `aufnehmen()` in `LessonScreen.tsx`
(Speechmatics), ausgewertet aber nur gegen die vier angezeigten
Wortoptionen mit `normalisiereHanzi()` (inkl. der 8 Homophon-Paare aus
`lessonEvaluation.ts`) - `bewerteAntwort()` dort ist fuer eine ganze
Satzstruktur gebaut und hier ueberdimensioniert, es geht ja nur um EIN
Wort. Trifft die Erkennung keine der vier Optionen, bleibt die Aufgabe per
Antippen loesbar - das Mikrofon ist ein zusaetzlicher Weg, keine Sackgasse.
Layout jetzt: Frage -> Hinweiszeile -> Luecken-Satz -> Wortoptionen ->
Mikrofon -> "Lösen".

**Zurueck-Knopf faehrt zweistufig (2026-08-24, Nutzer-Korrektur).** Alle
drei Rundentypen teilen sich denselben Kopf - der Zurueck-Pfeil ging vorher
immer direkt `router.back()`, verliess also mitten in einer Runde gleich
den ganzen Screen (zurueck zu Lektionen). Jetzt fuehrt er WAEHREND einer
Runde oder auf dem Ergebnis-Screen erst zur Wortarten-Auswahl zurueck (wie
der "Andere Auswahl"-Knopf dort) - erst von der Auswahl selbst aus geht es
wirklich hinaus.

**Wortart-Fehlklassifizierung behoben (2026-08-25, Fehlerbericht: "十
(zehn)" erschien als Verb).** `wortartAusDeutsch()` (siehe `vocabContent.ts`)
ordnete Chinesisch-Vokabeln bis dahin allein ueber den Infinitiv-Verdacht
("-en"/"-n"-Endung) ein - traf neben echten Verben auch Zahlwoerter
(sieben/neun/zehn), Adjektive und Orts-/Zeitwoerter, die zufaellig auch auf
"n" enden ("morgen", "drinnen", "auf Wiedersehen"), sowie ein paar
kleingeschriebene Nomen-Phrasen ("feste Freundin" - "feste" ist ein
Adjektiv vor dem Nomen, die Grossschreibungs-Regel greift dort nicht).
Gegen den GESAMTEN `chinesisch_vocab`-Bestand geprueft (nicht nur
stichprobenartig) und als `WORTART_AUSNAHMEN`-Liste korrigiert, nach
demselben Muster wie `useCategoryVocab.ts`s `AUSNAHMEN`. Verb-Eimer:
162 -> 131 Woerter, Nomen: 198 -> 202.

### Uebersetzungsuebungen ohne laufende KI-Kosten
Wichtige Design-Entscheidung: Freitextuebungen sollen KEINE exakte
Wort-fuer-Wort-Uebersetzung verlangen, sondern grobes/sinngemaesses Verstehen
pruefen - ohne dafuer bei jeder Abfrage eine Live-KI zu bezahlen. Loesung:
- Pro Satz mehrere akzeptierte Antwortvarianten vorab generieren (einmaliger
  Content-Erstellungsschritt, z.B. per LLM-Batch, KEINE Laufzeitkosten)
- Fuzzy-Matching zur Laufzeit (Tippfehler-Toleranz, Gross-/Kleinschreibung
  ignorieren) ueber lokale Bibliotheken, keine externe API
- Optional: Keyword-basierte Teilbewertung (Kern-Inhaltswoerter muessen
  vorkommen, Rest ist tolerant)
- Datenmodell-Idee: pro Satz `accepted_answers: string[]` und optional
  `required_keywords: string[]` in Supabase

### Die mittlere Stufe war in fast allen Sprachen unerreichbar (2026-09-04)

Ausloeser war ein Befund aus einem anderen Chat: `answer_clusters` hatte 60
Eintraege, 35 deutsche und 25 schwedische, sonst nichts. Nachgemessen war es
schlimmer als gemeldet - von den 25 schwedischen verwies ueberhaupt nur auf
39 Saetze einer, und in `englisch_phrasebook` und `chinesisch_phrasebook`
stand die Spalte `verb_cluster` auf null. **Die Dreistufigkeit gab es also
im Code, aber nicht in den Daten.**

**Warum das nicht nur eine fehlende Feinheit war:** ohne Familie ist ein
Satz mit genau EINEM Pflicht-Konzept zweiwertig - entweder wortgleich oder
"nicht verstanden", nichts dazwischen. Das betraf 470 der 581 englischen
Saetze (81%), 261 der schwedischen, 173 der chinesischen. Ausgerechnet die
Stufe, die "Botschaft angekommen, aber anders gesagt" bedeutet, konnte gar
nicht vorkommen.

| | zweiwertig vorher | nachher | Saetze mit Familie |
|---|---|---|---|
| Englisch | 470 von 581 | **37** | 534 |
| Schwedisch | 261 von 574 | **34** | 517 |
| Chinesisch | 173 von 584 | **37** | 514 |

Was uebrig bleibt, ist ehrlich zweiwertig: "Ja.", "Danke!", 干杯 - bei einem
Wort gibt es zwischen gesagt und nicht gesagt nichts.

**Die Familien** liegen in `Sprachlisten/bewertung/` und sind ERZEUGT, nicht
handgepflegt: `familien.py` (was zusammengehoert), `formen.py` (wie daraus
Wortformen werden), `bauen.py` (Zuordnung + Einspielen, idempotent). Eine
weitere Sprache kostet einen Eintrag in `familien.py`.

- **sv** holt die Formen aus `schwedisch_vocab.forms` - Daten, nicht geraten.
  Den Imperativ leitet es ab (`ringa` -> `ring`), der fehlt in der Spalte und
  kommt in einem Sprachfuehrer staendig vor.
- **en** erzeugt die Formen aus dem Grundwort plus einer Liste der
  Unregelmaessigen. **Zusammenziehungen sind dort Pflicht, keine Kuer:** 176
  der 581 Saetze tragen einen Apostroph, und darin steckt fast immer genau
  das Verb ("That's", "I'm", "I'd like").
- **zh** hat keine Formen - dort IST die Familie die Synonymgruppe, und
  gerade deshalb traegt sie am meisten.

**Zwei Rollen, eine Mechanik.** Eine Familie ist entweder das Geruest des
Satzes (`buchen` bei "Jag skulle vilja boka ett bord") oder der Schluessel
selbst (`abschied` bei "Bis spaeter!"). Welches gilt, rechnet
`istSchluesselFamilie()` in `evaluateConcepts.ts` aus den Daten aus - beim
Schluessel-Fall stehen die Synonyme des Pflicht-Konzepts selbst in der
Familie. Eine zusaetzliche Spalte kann man beim naechsten Satz vergessen,
diese Pruefung nicht.

**Die Regel, an der vier schwedische Saetze gescheitert waren: die Familie
richtet sich nach dem Satz in der ZIELSPRACHE, nie nach dem deutschen
Original.** "Ich moechte einen Tisch reservieren" heisst schwedisch `boka`,
nicht `reservera`; "Ich suche" ist `leta efter`, nicht `soeka`. Die vier
trugen die aus dem Deutschen abgeleitete Familie und wurden dadurch
abgewertet, obwohl sie richtig waren. Ein fuenfter Fund derselben Art:
"Are you still hiring?" verlangte ein Konzept `leute` (staff/people), das
die englische Fassung gar nicht enthaelt.

**`npm run pruefe:konzepte`** (`scripts/pruefe-konzepte.mjs`) laeuft gegen
die echte Datenbank und den echten Bewerter - kein Nachbau, der stillschwei-
gend auseinanderlaufen koennte. Er prueft dreierlei:
1. **Jeder Zielsatz muss `richtig` ergeben.** Die wichtigste Zusicherung
   ueberhaupt: wer den Satz genau so sagt, wie er dasteht, darf nie
   abgewertet werden. Genau hier fielen die fuenf Fehler oben auf.
2. Ist die Mittelstufe ueberhaupt erreichbar (die Zahlen oben)?
3. Stichproben mit echten Antworten - "cheers" auf "Thank you!" muss
   `ueberlebt` ergeben, "where is the station" auf einen Mietwagen-Satz
   `nicht_verstanden`.

**Drei Fehler im Bewerter selbst** kamen dabei heraus und sind behoben:

1. `clusterMatches()` verglich jede Familienform nur mit EINZELNEN
   Nutzer-Woertern - mehrwortige Formen ("would like", "look for",
   "check in") konnten nie treffen, also der halbe englische Bestand.
2. Die Mittelstufe war nur von OBEN erreichbar (alle Konzepte da, Familie
   verfehlt); jetzt auch von unten, wenn die Familie der Schluessel ist.
3. **Elision und Bindestrich wurden verschluckt.** `normalize()` loeschte den
   Apostroph ersatzlos - aus "all'aeroporto" wurde "allaeroporto", und das
   Pflicht-Konzept "aeroporto" fand darin nichts. Fuenf italienische und ein
   franzoesischer Satz wurden dadurch abgewertet, obwohl sie richtig waren.
   Dasselbe beim Bindestrich: "Voulez-vous" gegen das Konzept "voulez".

   **Nicht jeder Apostroph darf trennen** - im Englischen steht er
   andersherum ("I'm" waere sonst "i m", und wer "im fine" tippt, traefe
   nichts mehr). Unterschieden wird am Bau: romanische Elision hat ein
   kurzes Woertchen VOR dem Apostroph und ein volles Wort dahinter, die
   englische Zusammenziehung eine Endung von hoechstens zwei Buchstaben.
   Getrennt wird also nur, wenn dahinter mindestens drei stehen.

### Der Kurs stellt keine unsinnigen Fragen mehr (2026-09-07)

Hier stand als offener Punkt: 2.150 der 7.927 Slots (27%) stuenden in
Slot-Gruppen mit gemischten Wortarten, russische Lektion 12.4 ergebe
"Es ist schauen, aber es geht.", und das gehoere in `bauplan.py` behoben.
Erledigt - **27% -> 5%**, und der Ausgangsfall zeigt jetzt nur noch
Adjektive ("Es ist schwierig, aber es geht.").

**Die Ursache war die Wiederverwendung, nicht die Gliederung.** R3 mischt in
jede Lektion ein paar schon gelernte Woerter - das ist der Kern des
Aufbaus, weil produktives Koennen ~18 Begegnungen braucht. Ausgewaehlt wurden
sie aber nach EINEM Kriterium: am seltensten geuebt. Die Wortart spielte
keine Rolle, also landeten Verben im Adjektiv-Rahmen.

Jetzt sagt der Rahmen selbst, was er vertraegt: **die Wortarten seiner
eigenen Slots**, als MENGE. Erst als eine einzige Wortart versucht - das
liess aber jeden Rahmen ungefiltert, dessen Slot-Liste selbst gemischt ist,
und "ich moechte [Slot]" ist zu Recht gemischt (Wasser wie essen).
Ungefiltert stand dort "ich moechte tonto" (dumm). Als Menge stimmt es:
Nomen und Verb ja, Adjektiv nein.

**Nebenbefund, der mehr wert war als die eigentliche Aufgabe:** die
Auffangmodule fuehrten 200-260 Woerter ein und wiederholten KEINES davon -
jedes kam auf genau drei Begegnungen. Deshalb lagen die erzeugten Sprachen
bei 39-48% "ohne jede Wiederverwendung", waehrend das handgeschriebene
Schwedisch bei 15% steht; nicht die Gliederung war schlechter, der Rest
bekam gar keine Wiederholung. Jetzt wiederholen auch sie - und weil diese
Module nach Wortart sortiert sind, passt die Wiederverwendung dort per Bau.

| | ohne Wiederverwendung vorher | nachher |
|---|---|---|
| Spanisch | 44% | **13%** |
| Russisch | 39% | **14%** |
| Franzoesisch, Italienisch, Polnisch | ~40% | **13-15%** |
| Schwedisch (handgeschrieben) | 15% | 16% |

Der Kurs hat dadurch 9.169 statt 7.927 Slots - dieselben Woerter, aber
oefter geuebt.

### Jedes Wort kommt jetzt mindestens sechsmal vor (2026-09-07)

Die Zahlen im Abschnitt darueber ("13-15% ohne Wiederverwendung") waren
gegen ein Modell gemessen, das nicht zur App passte - und sie sind
ueberholt. **1-3% ist der neue Stand, im Schnitt 6,1 bis 7,4
Kurs-Begegnungen je Wort.**

**Der Ausloeser war ein Widerspruch zwischen Generator und Screen.**
`bauplan.py` buchte ein wiederverwendetes Wort als EINEN Auftritt.
`LessonScreen.tsx` spielte fuer JEDES Slot-Wort vier Schritte ab - Teaser,
Nachsprechen, Abrufen, Satz - und unterschied neu und bekannt gar nicht.
Zwei Folgen: die Lektionen waren mit 33-41 Schritten doppelt so lang wie in
ENTWURF.md geplant (~19), und weil Wiederholung so teuer war, passte kaum
welche hinein.

**Ein wiederholtes Wort bekommt nur noch den Satz-Schritt.** `CourseWord`
traegt dafuer `wieder?: boolean` (siehe `courseTypes.ts`). Das ist kein
Sparzwang, sondern die richtige Aufgabe: das Wort ist eingefuehrt, was ihm
fehlt, ist ein ZWEITER Zusammenhang - und der ist der Satz. Median jetzt
16-20 Schritte, 2,5-3,3 Minuten je Lektion.

**Mehr Plaetze allein reichten nicht.** MIN_RECYCLING von 5 auf 14 zu
ziehen half dem Mittelfeld und liess den Rand unberuehrt: ein Wort aus den
letzten Lektionen eines Moduls hat schlicht keine spaetere Lektion mehr.
Bei jedem Wert blieben 4-15% ohne Wiederholung. Deshalb endet jedes Modul
jetzt mit bis zu vier **Wiederholungs-Lektionen** (`newCount: 0`), die
gezielt die schwaechsten Woerter nehmen und in einen Rahmen setzen, in dem
sie schon einmal standen - das haelt den Satz grammatisch, statt neue Paare
zu wuerfeln. Sie zaehlen gegen die 20-Lektionen-Grenze je Modul, damit die
Pille im Pfad scrollbar bleibt, und werden so gemischt, dass nicht zweimal
derselbe Rahmen aufeinanderfolgt.

**Rahmenwoerter wurden einmal gezaehlt statt einmal je Lektion.** Ein Wort,
das fest im Satzmuster steht, wird in JEDER Lektion dieses Rahmens
mitgesprochen - "är", "det", "inte" galten dadurch als nie wiederholt,
obwohl sie die haeufigsten Woerter des Kurses sind.

| | unter 6 Begegnungen | ohne jede Wiederverwendung | Median Schritte |
|---|---|---|---|
| Schwedisch | 8% | 1% | 20 |
| Englisch | 7% | 3% | 20 |
| Chinesisch | 2% | 1% | 16 |
| Spanisch | 8% | 2% | 16 |
| Franzoesisch | 8% | 1% | 16 |
| Italienisch | 7% | 1% | 16 |
| Norwegisch | 11% | 1% | 16 |
| Russisch | 8% | 1% | 19 |
| Vietnamesisch | 12% | 1% | 17 |
| Polnisch | 10% | 2% | 16 |

**Die 6 ist eine Untergrenze fuer den KURS, nicht das Lernziel.**
Produktives Koennen braucht ~18 Begegnungen (Laufer & Rozovski-Roitblat
2015), aber verteiltes Ueben schlaegt geballtes deutlich - 18 an einem Tag
waeren das Gegenteil. Der Kurs liefert die Einfuehrung (4) plus zwei
Wiederholungslektionen, FSRS den Rest ueber Tage und Wochen. Weniger als
das heisst, ein Wort stammt aus einem einzigen Tag; dagegen kommt auch FSRS
nicht an, es kann nur wiederholen, was ueberhaupt sitzt.

**Ein Wort, das fest im Rahmen steht, kommt nicht mehr zusaetzlich in
dessen Luecke.** Beim Durchspielen von Lektion 3.1 gefunden: "wǒ xiǎng
[Slot]" hatte xiǎng im Slot, auf dem Schirm stand "wǒ xiǎng xiǎng". Betraf
47 Slots ueber alle zehn Sprachen ("I do not do that", "jeg er ikke ikke").
Geprueft wird auf drei Ebenen - feste Rahmenwoerter, Pronomen-Chips, und
der LERNTEXT: chinesisch 8.5 trug 坐 im Rahmen und 做 im Slot, verschiedene
Zeichen, aber beide "zuò". Uebrig ist ein Fall (vietnamesisch "các bạn" im
Rahmen, "bạn" im Slot), und der ist inhaltlich richtig.

**Ohne Auffangmodul wird nicht geworfen, sondern SORTIERT.** Schwedisch,
Englisch und Chinesisch haben handgeschriebene Lehrplaene ohne
`REST_RAHMEN` - ein herausgenommenes Wort waere dort fuer immer weg,
weshalb der Ausreisser-Filter fuer sie abgeschaltet ist. Statt die
gemischte Slot-Liste hinzunehmen, kommen ihre Wortarten jetzt in getrennte
Lektionen DESSELBEN Rahmens. Chinesisch fiel dadurch von 52% auf 25%
gemischte Gruppen, ueber alle Sprachen liegt der Wert bei 7,5%.

**Achtung beim Vergleichen: die 5% aus dem Abschnitt darueber und die 7,5%
hier sind nicht dieselbe Messung.** Die 5% entstanden, als
`chinesisch_vocab.wortart` noch aus der deutschen Bedeutung GERATEN wurde;
seit die Spalte gefuellt ist, sieht die Messung Adjektive und Pronomen, die
vorher gemeinsam in "Sonstiges" lagen und dadurch als gleichartig galten.
Gegen den heutigen Datenstand gerechnet lag der alte Zustand bei 5,6%.

**Der verbliebene chinesische Rest ist Lehrplan-Inhalt, kein Generatorfehler:**
`kurs_zh.py` fuehrt in "wǒ xiǎng [Slot]" Nomen und Verben in derselben
Slot-Liste. Das gehoert dort behoben, nicht in der Anzeige.

**Die deutschen Aufgabentexte tragen nur noch die ERSTE Bedeutung.** Die
Vokabelspalte fuehrt oft mehrere ("Weg / Straße", "Papier, Rolle"), und der
Generator setzte alle in den Satz: "Das ist Weg / Straße Buch." Klammer-
zusaetze bleiben stehen, sie unterscheiden ja gerade ("Bank (Institut)").

**Deutsche Artikel stimmen jetzt** (2026-09-07, zweiter Durchgang). Hier
stand, "Hier ist der Ehefrau" sei eine Unschoenheit und nur mit einer
deutschen Genusliste zu beheben. Die Liste gibt es jetzt:
`Sprachlisten/kurs/deutsch_genus.py`, 358 Woerter - genau die, die in einem
Artikel-Rahmen landen.

Geloest nicht durch Biegen des Artikels, sondern wie beim zielsprachlichen
Artikel eine Ebene hoeher: **die Woerter werden nach deutschem Genus
GRUPPIERT**. Eine Lektion zeigt nur Woerter eines Geschlechts, und der
Artikel stimmt fuer alle. Nebeneffekt, der zum Kurs passt - man sieht "der
Mann, der Tisch, der Bahnhof" beieinander.

Der Fall ergibt sich aus dem Artikel, der schon dasteht (`einen` ist
Akkusativ, `einem` Dativ). Nur `ein`/`eine` sagen ihn nicht; dort entscheidet
das Verb im Satz, ueber alle 28 vorhandenen Rahmen einzeln nachgeprueft.

**Eine Falle dabei:** in "Das ist das [Slot] Mal." gehoert der Artikel zu
"Mal", nicht zum Slot. Erkennbar daran, dass hinter dem Slot noch ein
grossgeschriebenes Wort steht - dann bleibt der Rahmen unberuehrt.

**Chinesisch hat jetzt echte Wortarten** (2026-09-07). `chinesisch_vocab.
wortart` war in 58 von 548 Zeilen belegt, der Rest fiel auf eine Heuristik
zurueck, die nur drei Eimer trifft. Die restlichen 490 sind klassifiziert
(`Chinesisch HSK1 und HSK2/wortarten_zh_rest.py`): 175 Nomen, 123 Sonstiges,
117 Verben, 56 Adjektive, 13 Pronomen, 6 Konjunktionen.

Vorgeschlagen aus der deutschen Bedeutung, dann durchgesehen - die
Durchsicht war noetig, der Vorschlag hatte `是` (sein) als Pronomen, `好吃`
(lecker) als Sonstiges und `发烧` (Fieber haben) als Nomen. Sowohl der
Generator als auch die App lesen die Spalte vorrangig; ein Schreibvorgang
behebt beides ohne Codeaenderung.

**Ausreisser fliegen aus dem Rahmen** - wo eine Slot-Liste selbst gemischt
ist (der handgeschriebene chinesische Lehrplan hat neben zehn Nomen auch
`工作` "arbeiten" in "ich habe [Slot]"), faellt das unpassende Wort heraus
und wird vom Auffangmodul eingesammelt, das nach Wortart sortiert ist. Aus
einem falschen Satz wird so ein richtiger, keine Luecke.

**Zwei Grenzen, die der Generator selbst gefunden hat:**
* Ein Wort, das spaeter FEST in einem Rahmen steht, darf nie herausfallen -
  `过` tat es, und Modul 11 meldete es prompt als nie eingefuehrt (R5).
* Sprachen ohne Auffangmodul (sv, en, zh - handgeschriebene Lehrplaene)
  duerfen gar nichts verlieren: Schwedisch verlor beim ersten Versuch vier
  Woerter ersatzlos. Dort bleibt die Slot-Liste unangetastet - ein holpriger
  Satz ist besser als ein ungelehrtes Wort.

**Stand nach beidem: 27,1% -> 5,4%.** Chinesisch bleibt mit 15% der
Ausreisser, weil dort die Ausreisser-Regel mangels Auffangmodul nicht
greifen darf; die verbleibenden Faelle stecken in `kurs_zh.py`s
Slot-Listen und waeren dort von Hand zu sortieren.

**Was weiterhin BLEIBT:**
* **Adjektiv-Deklination**: "Ich habe eine gute Zimmer bekommen" - steht ein
  Adjektiv zwischen Artikel und Slot, greift die Artikelregel nicht (sie
  verlangt den Artikel unmittelbar vor `[Slot]`), und die Endung des
  Adjektivs muesste ohnehin mitgebeugt werden.
* **Possessivbegleiter**: "Das ist mein Wohnung" - dieselbe Frage, andere
  Wortart.
* **Semantische Passung**: "Es ist sehr gleich", "Wo gibt es ein Geld?" -
  grammatisch richtig, inhaltlich schief. Der Rahmen weiss, welche WORTART
  er vertraegt, nicht welche Bedeutung.

### Verbformen: der Kurs kann jetzt Vergangenheit (2026-09-08)

Vorarbeit fuer die A2-Stufe, die hinter die bestehenden 14 Module kommt.
`englisch_vocab.forms` ist gefuellt (103 von 108 Verben; die fuenf ohne sind
Modalverben, die sich nicht beugen), die Spalte existiert ausserdem leer in
spanisch/franz/italienisch/russisch/polnisch_vocab
(Migration `20260908120000`).

**Schluesselnamen wie bei schwedisch_vocab**, damit `bauplan.py` alle
Sprachen ohne Sonderfall liest: `present`, `preteritum`, `supinum`
(= Partizip - der gemeinsame Name wiegt schwerer als die Terminologie,
dieselbe Abwaegung steht schon in der norwegischen Migration). Englisch
ergaenzt `present_3`, `present_pl`, `verlaufsform`, bei `be` auch
`present_1` und `preteritum_pl`.

**`slotform` nimmt jetzt jede Form**, nicht nur `praesens` -
`Wortschatz.FORM_SPALTE` bildet den Lehrplan-Namen auf den Datenbank-
Schluessel ab. Damit ist `dict(muster="I have [Slot] it",
slotform="partizip")` baubar, und der Rahmen, der bis dahin "I have finish
it" erzeugte, lehrt wieder das, wofuer er gedacht war.

**Fehlt die verlangte Form, ist das ein FEHLER, kein stiller Rueckfall.**
Genau der Rueckfall auf die Grundform hatte "I have finish it" jahrelang
unbemerkt gehalten. Zwei Schweregrade, weil zwei verschiedene Dinge:
* im SATZ (Slot) -> Fehler, der Lauf bricht ab
* auf der VOKABELKARTE (`neu_im_rahmen`) -> Hinweis, dort ist die
  Woerterbuchform vertretbar

**Die Wiederverwendung prueft die Form mit.** Ohne das zog R3 ein
Modalverb in den Partizip-Rahmen, und "I have will it" waere zurueck.

**Erzeugt von `Sprachlisten/kurs/verbformen.py`**, Probelauf und
`spiel_ein --echt` wie bei `bewertung/bauen.py`. Der Probelauf hat sich
sofort bezahlt gemacht - er zeigte vier Fehler, von denen drei auch in
`bewertung/formen.py` steckten und dort mitkorrigiert sind:

| Fehler | war | ist |
|---|---|---|
| Verdopplungsliste hatte 6 Eintraege | `geting`, `siting`, `begining` | +begin, forget, get, let, put, run, sit, win |
| `be` fiel durch die Regel | `bing` | eigenes Paradigma (am/is/are/was/were/been/being) |
| Partizip ungleich Praeteritum | `I have showed` | `shown` |
| "to " ist der Infinitivmarker, kein Verb | `toes answer`, `toed be called` | Marker faellt vor dem Beugen weg |

**Spanisch, Franzoesisch und Italienisch sind ebenfalls gefuellt** (99/88/99
Verben, alle) - `Sprachlisten/kurs/romanisch.py`. Aus `bewertung/formen.py`
uebernehmbar war nur die Endungsregel: die rund 30 unregelmaessigen Verben je
Sprache liegen dort als flache, DEDUPLIZIERTE Listen, aus denen sich nicht
ablesen laesst, welche Form welche ist.

**Muster als Regel, Liste nur fuer das Unvorhersehbare.** Rund 100 Verben je
Sprache mal sechs Personen plus Partizip waeren ueber 2.000 handgetippte
Formen in drei Sprachen, die hier niemand gegenliest - und ein Tippfehler
saehe aus wie eine richtige Form. Die romanische Unregelmaessigkeit ist aber
groesstenteils regelmaessig, nur LEXIKALISCH ausgeloest: man muss wissen,
DASS `pensar` den Stamm wechselt, nicht WIE (immer e->ie, immer in den
Personen 1/2/3/6, wo die Betonung auf dem Stamm liegt). Vier Ebenen, die
spaetere gewinnt: Endungsregel, Orthografie (buscar->busco, giocare->giochi,
mangiare->mangi), Stammwechsel (lexikalische Liste), ganz unregelmaessig
(ausgeschrieben). Dazu die Partizipien, die keinem Muster folgen
(abierto, escrito, fatto, vécu).

**Fuenf Fehler, die der Durchgang gefunden hat** - alle, bevor etwas
geschrieben wurde:

| war | ist |
|---|---|
| `vestirse` -> "me vesto" | Stammwechsel griff nicht gegen die reflexive Form |
| `seguir` -> "siguo" | -guir verliert das stumme u vor o/a |
| `riuscire` -> "riuscisco" | geht wie `uscire` (riesco), stand faelschlich in IT_ISC |
| `ringraziare` -> "ringrazii" | Doppel-i faellt jetzt allgemein weg, nicht nur bei -ciare/-giare |
| `enviar` -> "envio" | -iar mit betontem i ist lexikalisch: envío, aber estudio |

**Ruecklaeufig sichtbar im Kurs:** die Vokabelkarte zeigt jetzt `soy`,
`tengo`, `quiero` statt `ser`, `tener`, `querer` - also die Form, die im
Satz danebensteht. Genau die Begruendung, die fuer Schwedisch schon galt
("ohne das lernt der Nutzer das Wort in einer Form, die er nie sagt").

**Russisch und Polnisch sind seit dem 2026-09-09 ebenfalls gefuellt**
(98 von 99 bzw. 100 von 100) - `Sprachlisten/kurs/slawisch.py`. Aus
`bewertung/formen.py` war hier NICHTS uebernehmbar: der slawische Generator
erzeugt absichtlich beide Konjugationen an zwei Stammlaengen ("die falsche
Haelfte ergibt Silbenfolgen, die kein Wort sind"). Zum Abgleichen richtig,
zum ANZEIGEN unbrauchbar, weil der Menge nicht anzusehen ist, welche Haelfte
die richtige war.

Derselbe vierstufige Aufbau wie bei den romanischen Sprachen. Zwei Stellen
brauchten mehr als eine Endungstabelle:

* **Polnische Klasse II hat DREI Stellen mit eigener Logik**, und das ist
  Palatalisierung, keine Schludrigkeit: 1. Person Singular und 3. Person
  Plural teilen sich einen oft gewechselten Stamm (musieć -> muszę / muszą),
  die Mitte bleibt beim ungewechselten (musisz, musi, musimy). Ein einziger
  Endungssatz erzeugte "mówę" statt "mówię" und "widzysz" statt "widzisz".
* **Die Vergangenheit ist der eigentliche Gewinn** und fast vollstaendig
  regelbar: Infinitiv minus -ть/-ć plus л/ł. Polnische -eć-Verben bilden sie
  auf **-ał**, nicht -eł (mieć -> miał, widzieć -> widział), der Plural
  dagegen auf -eli.

**Sie richtet sich nach dem GESCHLECHT DES SPRECHERS**, nicht nach dem
Objekt - "я делал" gegen "я делала", "robiłem" gegen "robiłam". Das stand
schon als Kulturhinweis bei den russischen Saetzen; `preteritum_f` ist
deshalb ein eigener Schluessel. **Slawische Verben haben kein Partizip fuer
ein Perfekt** - die l-Form IST die Vergangenheit. Ein A2-Rahmen nimmt dort
`slotform="praeteritum"`, nicht `"partizip"`.

**Zehn Fehler, alle im Durchgang gefunden, bevor etwas geschrieben wurde:**

| war | ist |
|---|---|
| `мочь` -> "могл" | maennliche Form traegt gar kein л - Vergangenheit jetzt als volles Tripel |
| `кажусься`, `остаюсься` | doppeltes Reflexiv: die Liste trug -ся schon |
| `здоруюсь` | "ова" gehoert bei здороваться zum Stamm, nicht zum -овать-Suffix |
| `надеяюсь` | -яться verliert das я |
| `сидею` | сидеть geht nach Konjugation 2 (сижу) |
| `mówę`, `widzysz` | polnische Klasse II, siehe oben |
| `mieł` | -eć bildet die Vergangenheit auf -ał |
| `śpam`, `stojam` | spać und stać enden auf -ać, gehen aber nach Klasse II |
| `rozumem` | Klasse IV behaelt das i: rozumi-em |
| `nazuję` | -ywać bildet mal -uję, mal -am - lexikalisch, nicht ableitbar |

**Eine Sprache mit eigener Schrift bekommt KEINE gebeugte Form.** Die
`lautschrift`-Spalte traegt die Umschrift der GRUNDFORM; setzte man die
gebeugte Schrift ein, stuende auf dem Schirm "byt" und vorgelesen wuerde
"буду". Schrift und Lerntext duerfen nie auseinanderlaufen - lieber die
Grundform auf beiden Seiten. Betraf genau ein russisches Wort; ein A2-Rahmen
mit Vergangenheit traefe sonst jedes. Der Generator meldet die 13 Faelle.

**Chinesisch und Vietnamesisch beugen gar nicht** - dort ist eine
Formanforderung nicht unerfuellt, sondern gegenstandslos. `Wortschatz.beugt`
unterscheidet das; ohne die Unterscheidung meldete der Generator fuer
Vietnamesisch zwoelf fehlende Praesensformen, die es in der Sprache nicht
gibt.

**NICHT muttersprachlich geprueft** - das gilt fuer den ganzen slawischen
Bestand und hier doppelt, weil die Formen das sind, was der Nutzer SAGT.
Vor der Vertonung gehoert das gegengelesen.

**Ein Rahmen je konjugierender Sprache war in der falschen Person.**
Modul 1 Rahmen 2 traegt im Spine die Pronomenliste "wir/ihr/sie/man/er",
`PERSONENKONJUGATION` laesst davon nur das erste stehen - das Satzmuster
kodierte aber die 1. Person Singular. Auf dem Schirm stand **"nosotros soy
jefe"**, "noi sono", "ja jestem" mit `my`. Behoben in es/fr/it/pl (ru hat im
Praesens keine Kopula, dort stimmte nur das Deutsche nicht). Alle uebrigen
Rahmen beginnen korrekt mit yo/je/io/я/ja - geprueft ueber alle fuenf
Sprachen, es ist genau dieser eine.

**Mehrdeutiges Deutsch traf jahrelang das falsche Wort.** `nach_deutsch()`
nahm den ERSTEN Treffer, und "sein" ist im Deutschen das Verb UND das
Possessivpronomen. Norwegisch fuehrte beide mit `german = 'sein'`, `hans`
stand weiter oben - **Modul 1, die allererste Lektion, fuehrte `hans`
statt `være` ein.** Russisch dasselbe mit `его` statt `быть`. Der Index
haelt jetzt ALLE Treffer, und wer eine Verbform verlangt
(`sein:praesens`), bekommt ein Verb.

**Der Vokabel-Index kennt jetzt alle Formen.** `vocabContent.ts` traegt
`alleFormen`, `situationsAufgaben.ts` und `wortaufgaben.py` nehmen sie in
den Index auf. Ohne das fielen 25 Wort-Aufgaben aus, weil "finished" und
"begun" keine Woerterbucheintraege sind.

### Die A2-Stufe haengt hinter dem bestehenden Pfad (2026-09-09)

Simons Auftrag: nicht Kategorien dazwischenschieben, sondern den Pfad
chronologisch weiterlaufen lassen. **14 neue Module in allen zehn Sprachen**,
Gliederung in `Sprachlisten/kurs/spine_a2.json` - 32 Rahmen, Slots als
deutsche Begriffe, dieselbe Datei fuer alle.

| | Module | Lektionen | Kurs |
|---|---|---|---|
| vorher | 14-24 | 1.937 | 8,7-10,9 h |
| jetzt | 28-38 | **2.720** | **10,9-13,2 h** |

Wort-Aufgaben: 17.138 -> **25.620** Slots, weiterhin 100% aufgeloest.

**A2 bringt nicht mehr Woerter, sondern mehr STRUKTUR.** Die Slots sind
fast alle schon bekannt, und das ist Absicht: die Kern-500 waren nach der
A1-Stufe vollstaendig verbraucht. Die neuen Module ueben Perfekt, alle
Personen, Vergleich, Nebensatz, Konditional, Mengen, Zeitangaben,
Relativsatz - auf demselben Wortschatz, der dadurch nebenbei weitere
Begegnungen bekommt.

**Die Reihenfolge ist A1, dann AUFFANGMODULE, dann A2.** Der Restwortschatz
ist A1-Niveau (Kernwoerter, die nur nicht in die gemeinsame Gliederung
passten) - erst das Vokabular, dann die Grammatik darauf. Nebeneffekt, der
zaehlt: die Auffangmodule behalten die Nummern, die sie vor der A2-Stufe
hatten, und mit ihnen die Lektions-IDs, an denen die FSRS-Karten und damit
der Fortschritt jedes Nutzers haengen.

**`slots_deutsch` gilt jetzt je RAHMEN, nicht je Sprache.** sv/en/zh haben
handgeschriebene A1-Lehrplaene mit zielsprachlichen Slots und tragen
deshalb kein `SLOTS_DEUTSCH`-Flag. Ihre A2-Module kommen aber aus derselben
Gliederung wie bei allen anderen und nennen die Slots deutsch - beides in
einer Datei. Ohne die Unterscheidung je Rahmen muesste man sich pro Datei
fuer eines von beidem entscheiden, und die drei braeuchten je ein eigenes
A2-Curriculum.

**Wer eine Form verlangt, die eine Sprache nicht hat, bekommt einen
Fehler** - `FORM_SPALTE` kennt jetzt `praesens_1..6`. Das hat drei Faelle
sauber getrennt:

* **es/fr/it/pl** koennen alle sechs Personen und das Perfekt.
* **en** hat nur `present_3`; die uebrigen Personen nehmen die Grundform.
* **sv/no** konjugieren nicht nach Person - dieselbe Form fuer alle vier
  Rahmen, und genau das ist der Lernstoff.
* **zh/vi** beugen gar nicht, `Wortschatz.beugt` faengt das ab.

**Russisch traegt Zeit und Person im RAHMEN, nicht im Slot.** Die
Lautschrift-Spalte fuehrt die Umschrift der Grundform; eine gebeugte Form
haette dort keine, und Schrift und Lerntext liefen auseinander. Nach einem
Modalverb steht ohnehin der Infinitiv - der Lernende sieht die Person
trotzdem, sie steckt in "можешь / может / можем / могут".

**`ZUSATZ_A2` je Sprache** fuehrt die Funktionswoerter ein, die genau diese
Rahmen fest enthalten (spanisch `desde`, norwegisch `som`, chinesisch
`一样`). Ohne sie meldet R5 sie als nie eingefuehrt - 44 Faelle ueber alle
zehn Sprachen, alle beim ersten Bauen aufgefallen.

**Der Pfad nennt die Stufe.** `CourseModuleData.niveau` traegt `"A2"` oder
`null`; der Abschnitts-Kopf auf S1 zeigt "GEFÜHRTES LERNEN · A2", sobald
das aktuelle Modul dort liegt. Ohne das saehe der Nutzer nach Modul 24
einfach weitere Pillen in einer flachen Liste aus 38.

**Ein Begriff musste raus:** "Essen (allgemein)" loest im Italienischen zum
NOMEN `cibo` auf, in den anderen Sprachen zum Verb - in einem Verbrahmen
mit Partizip war das ein Fehler. Solche Faelle findet nur der Generator;
die A2-Slots stammen sonst aus den 269 Begriffen, die in mindestens acht
der zehn Wortlisten aufloesen.

**Was die A2-Stufe NICHT bringt** (aus der Bestandsaufnahme vom 2026-09-08,
unveraendert offen): kein Hoerverstehen, kein Konversationsmodus, keine
Tonunterweisung fuer Chinesisch, kein aufgenommenes Audio. Sie macht den
Pfad laenger und grammatisch vollstaendiger - sie ersetzt keinen der drei
fehlenden Straenge. Und der Wortschatz bleibt bei 500: fuer echtes
CEFR-A2 werden 1.500-2.500 angesetzt.

### Acht Rahmen bauten falsche Saetze (2026-09-08)

Gefunden beim Vorbereiten der A2-Stufe, durch LESEN der erzeugten Saetze -
keine Pruefung schlug an. Alle acht sind behoben, kein Wort ging verloren
(sv 508/508, en 513/513, zh 380 Kernwoerter).

| war | ist |
|---|---|
| `I have [Slot] it` mit Grundformen -> "I have **finish** it" | Partizip aus der forms-Spalte |
| `it is [Slot] than that` mit Grundstufe -> "it is **easy** than that" | `it is very [Slot]`, bis es Komparative gibt |
| `I feel [Slot]` mit Reflexivpronomen -> "I feel **yourself**" | `it is for [Slot]` |
| `he goes [Slot]` mit Verben -> "he goes **move**" | `we can [Slot]` |
| `I work with a [Slot]` mit Nomen UND Verben | zwei Rahmen, je einer Wortart |
| `[Slot] do you ask?` mit Verben | drei Rahmen nach Form getrennt |
| `我 很 累 [Slot] 我 工作` mit 比/真/可能 | nur 因为/所以; die anderen drei eigene Rahmen |
| `这 是 [Slot]?` mit fuenf Floskeln -> 这是**谢谢**? | wurde zu 这是**什么**意思? |
| `jag är trött [Slot]` mit kanske/ganska/förälskad | eigene Rahmen - genau die Woerter, die schon einmal verlorengingen |

**Die Pruefung, die das haette finden muessen, gibt es jetzt.** Der
Ausreisser-Filter ist fuer sv/en/zh abgeschaltet (kein Auffangmodul, ein
herausgenommenes Wort waere fuer immer weg) - und weil er abgeschaltet war,
MELDETE er auch nichts. Jetzt meldet er, ohne zu werfen. Chinesisch fiel
damit von 17 auf 10 Treffer; die restlichen sind ueberwiegend Fehlalarme
bei doppeldeutigen Woertern (我不错, 在城市, 我准备好了 sind korrekt, nur
die Wortart-Spalte sagt etwas anderes). Deshalb warnt sie, statt
abzubrechen.

### Der gefuehrte Pfad steht jetzt in ZEHN Sprachen (2026-09-07)

Die Kurse gab es seit dem 2026-09-04 fuer zehn Sprachen, und
`data/courses/index.ts` traegt ausdruecklich den Vermerk "Welche Sprachen
einen gefuehrten Kurs haben - EINE Stelle". Genau diese Stelle umging der
Pfad: `useGuidedCourse.ts` fuehrte eine eigene, kuerzere Liste.

**Alles andere fragte laengst `courseFor()`** - Uebungs-Screen, Wiederholung,
Fortschritt, Wort-Aufgaben, alle zehn Sprachen. Nur der PFAD kannte drei.
Fuer sieben Sprachen existierte der Kurs vollstaendig, die Uebung haette ihn
abspielen koennen, und es fuehrte kein Weg hin. Im committeten Stand war es
sogar nur Chinesisch - die Umstellung auf sv/en/zh lag uncommitted.

Behoben: `useGuidedCourse` benutzt jetzt `courseFor()`. Eine weitere Sprache
kostet damit einen Lehrplan und eine Zeile in `courses/index.ts`, sonst
nichts. Der Hinweistext unterscheidet ausserdem die zwei moeglichen Gruende -
"gibt es noch nicht" gegen "das ist deine Ausgangssprache" (nur Deutsch, es
hat keine Wortliste).

**Dabei fiel ein zweiter Fehler auf, den nur das Durchspielen zeigt.**
Spanisch fuehrt Genus-Paare als EINEN Vokabeleintrag: "cansado / cansada",
"jefe / jefa". Der Bewerter verglich gegen die ganze Zeichenkette - wer "yo
estoy cansado" sagte, also richtiges Spanisch, bekam "cansado / cansada kam
nicht vor". Betraf **151 der 822 spanischen Slots (18%)**, also fast jede
fuenfte Aufgabe, dazu zwei schwedische Artikelpaare ("en/ett").

`bewerteAntwort()` prueft jetzt gegen JEDE Variante und nimmt die beste
Bewertung - dasselbe Vorgehen wie `bewerteFinisher`, wo es ebenfalls mehrere
gleich richtige Antworten gibt. Der erwartete Satz wird mitgezogen, sonst
passte die Variante zum Slot, aber nicht mehr zum Satz drumherum. Die
Anzeige behaelt das Paar - dass "cansado" und "cansada" zusammengehoeren,
ist ja der Lernstoff.

### Familien: gebaut 2026-09-07, EINGESPIELT erst 2026-09-10

Hier stand: "Diese drei Sprachen sind gemacht, acht sind es nicht." Jetzt
haben zehn Sprachen Familien in der Datenbank - Deutsch ist der Rest.

**Die Lehre dieses Abschnitts steht vor seinen Zahlen: GEBAUT ist nicht
EINGESPIELT.** Die Tabelle unten stand ab dem 2026-09-07 hier als erledigt.
In der Datenbank lagen aber weiterhin nur de/en/sv/zh. Der Schreibvorgang
war seinerzeit von "erst wenn ich es dir sage" gehalten worden und wurde
danach nie nachgeholt; die geprueften Vorschlaege lagen die ganze Zeit
fertig in `vorschlag/`, und niemand hat gemerkt, dass sie dort liegen
blieben - weil diese Datei etwas anderes behauptete.

Praktisch hiess das drei Tage lang: **in sieben Sprachen gab es die
Mittelstufe ueberhaupt nicht, 4.053 Saetze waren zweiwertig.** Also genau
der Zustand, den der Abschnitt "Die mittlere Stufe war in fast allen
Sprachen unerreichbar" beschreibt und fuer behoben erklaerte. Gefunden am
2026-09-10, und zwar durch NACHMESSEN gegen die Datenbank statt durch Lesen
dieser Datei.

**Wer hier eine Zahl liest, prueft sie gegen die Datenbank.** Fuer die
Familien geht das in zwei Zeilen: `python bauen.py bericht <sprache>`
rechnet den Sollstand, die Spalte `verb_cluster` der Sprachtabelle traegt
den Ist-Stand. Weichen sie ab, fehlt ein `spiel_ein --echt`.

| | zweiwertig vorher | nachher | mit Familie | in der DB seit |
|---|---|---|---|---|
| Deutsch | 441 | **194** | 343 | **NEIN** - nur die 60 handverknuepften |
| Schwedisch | 261 | 34 | 517 | 2026-09-04 |
| Englisch | 470 | 37 | 534 | 2026-09-04 |
| Chinesisch | 173 | 37 | 514 | 2026-09-04 |
| Spanisch | 290 | **77** | 423 | 2026-09-10 |
| Franzoesisch | 220 | **55** | 445 | 2026-09-10 |
| Italienisch | 468 | **100** | 449 | 2026-09-10 |
| Norwegisch | 470 | **73** | 483 | 2026-09-10 |
| Russisch | 470 | **301** | 210 | 2026-09-10 |
| Vietnamesisch | 473 | **195** | 355 | 2026-09-10 |
| Polnisch | 470 | **197** | 332 | 2026-09-10 |

**Deutsch ist bewusst offen geblieben** und der Sollwert oben gilt dort
nicht: in `phrasebook_master` tragen weiterhin nur die **60
handverknuepften** Saetze vom 2026-08-08 einen Cluster. Der abgeleitete
Vorschlag haette 343 - er wuerde die Handarbeit zwar nicht ueberschreiben
(`ableiten.py` laesst bestehende Zuordnungen stehen), ist aber nie
freigegeben worden. Deutsch ist ausserdem die AUSGANGSsprache; die
Mittelstufe zaehlt dort nur, wenn jemand Deutsch als Ziel lernt.

**Die Familien werden ABGELEITET, nicht geschrieben** (`ableiten.py`). Sieben
Sprachen von Hand haetten rund 900 Zeilen Wortlisten gekostet, in Sprachen,
die hier niemand gegenlesen kann. Die Zuordnung steckt aber schon in der
Datenbank:

* **Verben und Eigenschaften** ueber die deutsche Bedeutungsspalte der
  Vokabeltabelle - "querer = wollen, moegen, lieben" sagt selbst, in welche
  Familie es gehoert.
* **Floskeln** ueber die Saetze: der spanische Satz zu "Danke!" traegt in
  `accepted_concepts` bereits die Wendungen, die als Dank gelten. Fertige
  Familienformen, von der Uebersetzungs-Pipeline gegengelesen.

Eine weitere Sprache kostet damit NULL Wortlisten. Was sie kostet, sind die
Wortformen - und die haengen an der Grammatik:

| | Formen kommen aus |
|---|---|
| sv, no | der `forms`-Spalte der Vokabeltabelle - Daten, nicht geraten |
| en | Regel plus Liste der Unregelmaessigen |
| es, fr, it | Konjugationsendungen plus Liste der Unregelmaessigen |
| ru, pl | beide Praesens-Konjugationen grosszuegig erzeugt |
| zh, vi | entfaellt, die Sprachen beugen nicht |
| de | schon fertig in `clusters_master.py` |

**Russisch und Polnisch bleiben die schwaechsten** (301 bzw. 197 zweiwertig).
Slawische Konjugation hat Aspektpaare und Stammwechsel; erzeugt werden beide
Praesens-Reihen an zwei Stammlaengen, dazu die 16 haeufigsten Stammwechsler
von Hand. Das brachte Polnisch von 16% auf 57% und Russisch von 18% auf 36% -
mehr ist ohne echte Morphologie nicht drin.

**Vier Fehler, die nur das Messen gezeigt hat:**

1. **`es_lieben` zog 25 Saetze an sich**, darunter "Ich haette gern einen
   Kaffee". Spanisch hat kein eigenes Wort fuer "lieben", also fiel die
   Familie auf `querer` zurueck - und schlug als starkes Inhaltsverb das
   schwache `wollen`. Jetzt entscheidet die ERSTE Bedeutung, und eine
   Familie ohne eigenes Wort bleibt leer.
2. **`ru_essen` war die haeufigste russische Familie**, mit 38 Saetzen, von
   denen keiner vom Essen handelte: `есть` heisst "essen" UND "es gibt"
   ("У меня есть сестра"). Steht jetzt in `MEHRDEUTIG`.
3. **Teilstuecke in den Floskel-Familien.** Die Pipeline listet neben
   "ni hablar" auch das nackte "hablar" als Rueckfall - als Familienform
   haette das jeden spanischen Satz angezogen, in dem jemand spricht.
4. **Deutsch reproduzierte genau die Fehler, die die Handarbeit vermieden
   hatte.** `wunsch_bedarf` und `moegen_lieben` sind seit 2026-08-08
   ausdruecklich unverknuepft, und die drei engen Kontext-Cluster
   (`fahren_reisen`, `gehen_wegbeschreibung`, `gehen_freizeitweg`) gelten nur
   fuer bestimmte Saetze. Alle fuenf stehen jetzt in `NICHT_ZUORDNEN`.
   Ausserdem: **eine bestehende Zuordnung wird nie ueberschrieben**, die 60
   handverknuepften Master-Saetze bleiben unangetastet.

**Deutsch schreibt woandershin.** `phrasebook_master` hat gar keine
`verb_cluster`-Spalte - dort steckt der Cluster in `accepted_concepts`, und
genau von dort liest ihn die App. Ein PATCH auf die Spalte haette
stillschweigend nichts bewirkt.

**Zwei Fehler im Bewerter, vom Vorab-Test gefunden:** italienisch "C'è il
wi-fi qui?" und "Dov'è l'ascensore?" haben hinter dem Apostroph genau EINEN
Buchstaben - und der ist das Verb. Die Elisionsregel verlangte drei und
wertete 35 italienische und einen franzoesischen Satz ab. Jetzt trennt
zusaetzlich eine Liste kurzer Elisionspartikel, aus den Daten gezaehlt: vor
einem Apostroph stehen romanisch nur j/s/c/l/d/m/n/t/qu/dov/..., englisch
dagegen ausschliesslich volle Woerter (don, that, it, isn) plus "i" und "o".
Die Mengen ueberschneiden sich nicht, "I'm" bleibt unangetastet.

**`bauen.py spiel_ein <sprache>` schreibt im Probelauf einen Vorschlag** nach
`Sprachlisten/bewertung/vorschlag/`, und `npm run pruefe:konzepte --
--vorschlag` haelt ihn gegen den echten Bewerter, BEVOR etwas in die
Datenbank geht. Das ist kein Luxus: `answer_clusters` ist live, eine bereits
ausgelieferte App laedt die Tabelle bei jedem Start neu. Genau dieser Schritt
hat die 36 Elisionsfaelle oben gefangen.

**`spiel_ein --echt` braucht Zeit, es haengt nicht.** Der `verb_cluster`
wird je Satz EINZELN geschrieben (ein PATCH pro Zeile, alle 100 eine
Fortschrittsmeldung) - fuer die sieben Sprachen am 2026-09-10 waren das
2.697 Anfragen und rund eine Viertelstunde. Einzeln ist es richtig so:
`answer_clusters` ist live, und ein abgebrochener Sammel-Schreibvorgang
liesse einen Teil der Saetze auf Familien zeigen, die noch nicht existieren.
Wer den Lauf fuer haengengeblieben haelt und abbricht, hinterlaesst genau
den halben Zustand, den die Einzelschritte vermeiden.

**Bekannt und nicht behoben:** franzoesisch "Salut !" und polnisch "Cześć!"
heissen Hallo UND Tschuess und landen deshalb in der Abschieds-Familie, auch
wenn der Satz ein Gruss ist. Das kostet nur die Zuordnung der MITTELSTUFE -
die Bestnote haengt am Pflicht-Konzept und bleibt richtig.

### Woerter-Stufe 3 wertet nach denselben drei Stufen (2026-09-04)

`situationStufe3Auswerten` in `WordReviewScreen.tsx` kannte nur `richtig`
und `falsch` - ein Wort aus derselben Bedeutungsgruppe fiel genauso hart
durch wie ein voellig falsches. Jetzt entscheidet `bewerteWort()`
(`features/evaluation/evaluateWord.ts`) mit **denselben Familien**, kein
zweiter Datenbestand:

- **richtig** das gemeinte Wort, Homophone eingeschlossen (做 fuer 坐)
- **ueberlebt** ein anderes Wort derselben Familie - 上班 statt 工作. Die
  Rueckmeldung nennt es beim Namen: "≈ Fast — „上班" heißt so ähnlich."
- **nicht_verstanden** irgendein anderes Wort

**Zurueckgestuft wird nur beim echten Fehlgriff.** "Ueberlebt" wirft
`stufe2` nicht zurueck - dieselbe Entscheidung wie beim FSRS-Mapping
("soll nicht wie ein Fehler behandelt werden").

**Gebeugte Formen desselben Worts zaehlen voll**, wenn der Aufrufer sie
mitgibt (`zielFormen`) - "Konjugation egal" ist die alte Regel des Projekts.
Ohne sie landet "bought" fuer "buy" in der Mittelstufe; das ist die milde
Richtung und kein Fehler, aber wer eine Sprache mit Formen anbindet, sollte
sie mitgeben. Fuer Chinesisch ist die Frage gegenstandslos.

**Bewusst NICHT angefasst:** Stufe 2 bleibt zweiwertig. Dort stehen vier
Optionen da, und wer danebentippt, hat nicht "ungefaehr" getroffen, sondern
eine andere Karte gewaehlt. Die Mittelstufe entsteht erst, wo frei
geantwortet wird.

### Wort-Aufgaben gibt es jetzt in ZEHN Sprachen (2026-09-07)

Hier stand bis zum 2026-09-07: "die Wort-Aufgaben gibt es ueberhaupt nur fuer
Chinesisch, die Bewertung steht fuer alle drei Sprachen bereit, die Aufgaben
gibt es nur fuer eine". Das ist erledigt.

**Die Sperre war nie inhaltlich, sondern eine Zerlegungsfrage.**
`ladeSituationsAufgaben()` begann mit `if (languageId !== 'zh') return []`,
weil der Tokenisierer Wortgrenzen ueber Laengster-Treffer gegen die
Vokabelliste RIET - noetig fuer Chinesisch, sinnlos fuer jede Sprache, die
ihre Wortgrenzen mitliefert. Findet er nichts, verwirft er die Aufgabe
(`sauber: false`), damit kein rohes Hanzi ohne Lautschrift erscheint. Genau
diese Strenge ist chinesisch-spezifisch: **bei Leerzeichen kann die
Zerlegung gar nicht misslingen**, das Wort steht schon als Wort da.

| | Lektionen | Slots | aufgeloest |
|---|---|---|---|
| Schwedisch | 174 | 1776 | 100% |
| Englisch | 168 | 1665 | 100% |
| Chinesisch | 159 | 1525 | 100% |
| Spanisch | 211 | 1760 | 100% |
| Franzoesisch | 210 | 1815 | 100% |
| Italienisch | 211 | 1795 | 100% |
| Norwegisch | 210 | 1755 | 100% |
| Russisch | 197 | 1680 | 100% |
| Vietnamesisch | 199 | 1696 | 100% |
| Polnisch | 198 | 1673 | 100% |
| **gesamt** | **1.937** | **17.140** | |

**Quelle sind die Kurs-Rahmen** (`data/courses/`, seit 2026-09-04 generisch
fuer zehn Sprachen). Ein Rahmen IST bereits, was eine Luecken-Aufgabe
braucht: Satz mit markierter Stelle plus die Woerter, die dort hineinpassen.
Dazu kommen weiterhin die Phrasebook-Saetze, deren Pflicht-Konzepte auf eine
einzelne Vokabel zeigen.

**ZWEI ACHSEN, die man nicht verwechseln darf** - der Fehler, der beim ersten
Anlauf zuschlug:

|  | eigene Schrift | Wortgrenzen |
|---|---|---|
| Chinesisch | ja | nein |
| Russisch | ja | **ja** |
| Schwedisch | nein | ja |

Die Zuordnung fragte "ist es Chinesisch?", wo sie "hat es eine eigene
Schrift?" haette fragen muessen. Fuer Russisch wurde dadurch die UMSCHRIFT
gegen die kyrillische Vokabelspalte gehalten: **0 von 777 Slots trafen**, die
Sprache haette stillschweigend gar keine Wort-Aufgaben bekommen - kein
Fehler, keine Meldung, nur eine Uebung, die nie erscheint. Gefunden von
`Sprachlisten/bewertung/wortaufgaben.py`, das genau diese Aufloesung
nachrechnet und nach jeder Aenderung an Kurs oder Vokabelliste laufen
sollte.

**Die Satzform gewinnt, nicht der Woerterbucheintrag.** Zweiter Fund, und
nur im Live-Test sichtbar: die Loesung wurde aus der Vokabelzeile gebaut, also
"tycka" statt "tycker" - die Luecke fuellte sich zu "Det tycka jag mycket om",
falsches Schwedisch. Bei Chinesisch konnte das nie auffallen, weil dort
nichts gebeugt wird. Jetzt liefert der Rahmen die Form, und die Ablenker
nehmen `presentForm ?? word`, damit alle vier Optionen im selben Register
stehen.

**Feldnamen tragen jetzt Rollen, keine Schriften** - `schrift`/`lerntext`
statt `hanzi`/`pinyin`, dieselbe Umbenennung und derselbe Grund wie bei
`CourseWord` (siehe courseTypes.ts): `hanzi: "jag"` erzaehlt die falsche
Geschichte.

**Erledigt (2026-09-07):** hier stand als offener Inhaltsfehler, 2.150 der
7.927 Slots (27%) stuenden in einer Slot-Gruppe mit unterschiedlichen
Wortarten - russische Lektion 12.4 ergab "Es ist schauen, aber es geht."
Behoben im Generator, wie es dort gefordert war; die Zahlen stehen im
Abschnitt "Der Kurs stellt keine unsinnigen Fragen mehr" weiter oben. Es
sind inzwischen 17.140 Slots (die Wiederholungs-Lektionen kamen dazu), und
alle loesen sich zu 100% auf.

## Spaced Repetition (SRS)
- EIN gemeinsamer Wiederholungs-Pool fuer Woerter UND Saetze, ueber ALLE
  freigeschalteten Kategorien hinweg (nicht mehrere getrennte SRS-Systeme)
- Jede Karte (Wort oder Satz) hat eigene SRS-Werte (Intervall, Faelligkeits-
  datum, Ease-Faktor) plus Metadaten-Tags `type` (word/sentence) und
  `category`
- Nutzer kann den Wiederholungs-Modus per Kategorie-Dropdown filtern
  ("nur Club + Nightlife wiederholen"), Filter laeuft als Query auf denselben
  Pool, kein zweites System
- Empfohlene Algorithmen: SM-2 (einfach) oder FSRS (moderner, aus der
  Anki-Community, quelloffen)
- Todo: Fallback-Logik wenn bei gefilterter Kategorie aktuell keine Karten
  faellig sind (z.B. Karten vorziehen anbieten)

**Erledigt (2026-08-07): FSRS implementiert** (Entscheidung fuer FSRS statt
SM-2 aus Nutzer-Gespraech: robuster gegen einzelne Zufallstreffer, weil die
GESAMTE Review-Historie pro Karte gewichtet wird statt nur die letzte
Antwort). Nutzt die etablierte `ts-fsrs`-Bibliothek (MIT-lizenziert, keine
Laufzeitkosten, komplett on-device) statt den Algorithmus selbst
nachzubauen - siehe `mobile/src/features/srs/fsrsEngine.ts`.
- **Speicherort:** lokal via AsyncStorage (`mobile/src/features/srs/srsStorage.ts`),
  NICHT Supabase - Supabase Auth existiert noch nicht, passt aber zur
  bereits entschiedenen Architektur ("Gast-Modus = nur lokale Speicherung").
  Kann spaeter 1:1 als Sync-Quelle fuer registrierte Nutzer dienen. Card-Key
  kodiert Sprache+Tabelle+Satz-ID (`sv:schwedisch_phrasebook:47`), damit
  z.B. deutsche und schwedische Version desselben Satzes nicht kollidieren.
- **Tier-zu-Grade-Mapping:** "nicht_verstanden" -> Again (harter Reset),
  "ueberlebt" -> Hard (milder Erfolg, KEIN Reset - Nutzer-Entscheidung: soll
  nicht wie ein Fehler behandelt werden), "richtig" -> Good.
- **Ziel-Erinnerungsquote bewusst auf 85%** statt FSRS-Standard 90% -
  etwas grosszuegigeres Tempo zugunsten weniger Drucks (siehe "SRS soll
  nicht schlecht gelaunt machen" unten).
- **Wo es greift:** JEDE ausgewertete Antwort aktualisiert den FSRS-Zustand
  der jeweiligen Karte, unabhaengig davon ob die Session von S2 (Kategorie,
  ungefiltert - bewusstes Ueben unabhaengig von Faelligkeit) oder S5 (SRS,
  filtert auf tatsaechlich faellige Karten) gestartet wurde - "ein
  gemeinsamer Pool" bedeutet auch gemeinsames Update, nicht nur gemeinsame
  Auswahl.
- **Fallback-Todo umgesetzt:** wenn bei S5 nichts faellig ist, werden statt
  einer leeren Session ein paar Karten vorgezogen (mit Hinweis-Text).
- **Bekannte Einschraenkung:** kein Nachladen innerhalb einer Session - eine
  als "Again" bewertete Karte kann laut FSRS oft schon Minuten spaeter
  wieder faellig sein, taucht aber erst in der naechsten Session erneut auf
  (die Kartenliste wird nur einmal beim Sessionstart geladen). Anki macht
  das aufwendiger mit Re-Queueing innerhalb der Session - fuer den Anfang
  bewusst nicht nachgebaut.
- **Kein hartes Session-Limit** (Nutzer-Entscheidung 2026-08-07:
  "widerspricht dem Ziel schneller lernen als Duolingo") - stattdessen alle
  10 Karten ein kurzer, automatisch weiterlaufender Motivations-Einschub
  ohne Ja/Nein-Entscheidungspunkt, siehe naechster Abschnitt.

## SRS soll nicht schlecht gelaunt machen (2026-08-07)
Bewusste Design-Entscheidung: der Algorithmus darf an den Raendern
zugunsten des Nutzergefuehls kalibriert werden, auch wenn das ein bisschen
reine Lern-Effizienz kostet - ein frustrierter Nutzer, der aufhoert, lernt
gar nichts mehr. Umgesetzt: 85%-Ziel-Erinnerungsquote statt 90% (siehe
oben), "Ueberlebensmodus" zaehlt als milder statt gar keinem Erfolg,
Motivations-Einschub alle 10 Karten statt eines Stopp-Punkts.

**Gilt auch fuer die Anzeige (2026-08-18):** der Fortschrittsbalken auf S1
zeigt immer ein Stueck Farbe, auch bei 0% - ein komplett leerer Balken am
ersten Tag ist der falsche erste Eindruck. Umgesetzt als Mindestbreite der
Fuellung (`MIN_FILL_WIDTH` in `mobile/src/components/ProgressBar.tsx`), nicht
als Aufschlag auf den Wert: **die vorgelesene Ansage und die Prozentzahl
daneben bleiben bei 0**. Der Balken schmeichelt, die Zahl luegt nicht - und
sobald der echte Fortschritt breiter ist als das Minimum, gilt wieder allein
der echte Wert, ohne Sprung. Noch NICHT
umgesetzt (spaetere Idee, kein Blocker): schwierige und bekannte Karten in
einer Session mischen statt Ausreisser zu bloecken, Ergebnis-Screen noch
positiver formulieren.

## UI-Struktur: Screen-Inventar und Navigation (verbindlich)

Prinzip: Der lineare Pfad (Duolingo-Stil) ist die EINE Haupt-**Lern**navigation.
Der radiale Skilltree existiert nur noch als Kategorie-Katalog innerhalb des
Shop-Screens. Jeder Screen unten hat genau definierte Eingaenge (von wo kommt
man her) und Ausgaenge (wohin fuehrt jede Aktion).

**Geaendert 2026-08-18:** hier stand frueher "Es gibt keine zweite parallele
Navigationsebene". Das gilt nicht mehr - es gibt jetzt eine **Tab-Leiste mit
fuenf Einstiegen** (Start, Lektionen, Survival, Freunde, Profil), siehe
`mobile/app/(tabs)/_layout.tsx`. Der Satz bleibt aber fuer das *Lernen*
richtig: der Pfad ist weiterhin der einzige Weg in eine Lernsession. Die
Tab-Leiste fuehrt zu Nachschlagewerk, Uebersicht und Konto, nicht zu einem
zweiten Weg ins selbe Ziel.

**Geaendert 2026-08-20: die Leiste ist jetzt UEBERALL sichtbar.** Vorher lagen
Uebung, Shop, Kategorie-Detail, SRS und die Cheat-Sheet-Unterseiten als
Stack-Screens darueber und verdeckten sie - mit der Begruendung "waehrend
einer Uebung soll kein Weg danebenfuehren". Auf Nutzer-Wunsch liegen sie jetzt
alle in der Gruppe `(tabs)` und tragen `href: null`, sind also im Navigator,
aber nicht in der Leiste. Ausserhalb bleiben nur Onboarding und Dev-Tools.

**Damit ist der Abbruch mitten in einer Uebung moeglich** - das war vorher
bewusst verbaut. Falls sich das im Test als stoerend erweist, reicht es,
`exercise.tsx` wieder eine Ebene hoeher zu legen; alles andere kann bleiben.

### S1 - Startscreen (Pfad)
**Zweck:** zentrale Lernnavigation, Startpunkt jeder Session
**Layout (wichtig, zwei getrennte Ebenen):**
- Der Pfad liegt INNERHALB einer eigenen Box mit fester Hoehe und sichtbarem
  Rahmen/grauem Hintergrund (wie eine Card) - NUR dieser Bereich ist
  vertikal scrollbar, der restliche Screen scrollt nicht mit
- Die beiden Knoepfe liegen AUSSERHALB dieser Scroll-Box, als feste Elemente
  direkt darunter - sie bewegen sich NICHT mit, wenn im Pfad gescrollt wird
  (klassisches "Sticky Footer"/"Fixed Bottom Button ueber scrollbarem
  Content"-Pattern, kein gemeinsamer Scrollcontainer fuer Pfad-Box und
  Knoepfe). Ebenso Kopfzeile und Fortschrittsbalken darueber.
- Auch der Kopf der Pfad-Box (Abschnittsname + Schatzkarte) scrollt NICHT
  mit - er ist ein Geschwister-Element der inneren ScrollView, kein Teil
  ihres Inhalts. Dadurch sieht der Nutzer immer nur EINEN Abschnittsnamen,
  egal wie lang der Pfad darunter ist.
- Technisch: Pfad-Box = eigener ScrollView/scrollbarer Container mit fixer
  Hoehe; Knoepfe = Sibling-Elemente ausserhalb dieses ScrollViews, feste
  Position im aeusseren Layout
**Aufbau (Stand 2026-08-18, gebaut nach Simons Vorlage
`Screenplanung/UI - Rest/Homepage/Homescreen grobe Themenuebersicht.png`):**
1. Kopfzeile: Sprach-Dropdown links, **Geschenk** und **Coins** rechts
2. Fortschrittsbalken 0-100%
3. Pfad-Box mit festem Kopf (Abschnittsname + Schatzkarte) und scrollendem Pfad
4. Zwei Knoepfe darunter: "Weiter durchstarten", "Taegliches Wiederholen"
5. Tab-Leiste (gehoert zur Gruppe, nicht zum Screen)

**Die Pfad-Box ist ein Akkordeon (gebaut 2026-08-20).** Oben die Sprach-Pille
(die zugleich der Grundwortschatz ist), darunter die freigeschalteten
Kategorien, danach die gesperrten.

- Der **Wechsel-Knopf** oben rechts (frueher die Schatzkarte) schaltet seit
  dem 2026-08-20 zwischen den beiden **Lernwegen** um - siehe eigener
  Abschnitt darunter. Bis dahin faecherte er ALLE Kategorien auf einmal auf;
  dieses globale Auffaechern ist ersatzlos weggefallen (Nutzer-Entscheidung:
  der Tipp auf eine einzelne Pille reicht).
- Ein **Tipp auf eine Pille** faechert nur deren eigene Situationen auf. Die
  Pille fuehrt damit NICHT mehr nach S2 - dorthin fuehren jetzt die
  Situationen darunter.
- **Auch gesperrte Kategorien fachern auf** - der Pfad soll zeigen, was es zu
  holen gibt. Ihre Situationen fuehren in den Shop.
- Situationen sind **kleinere, graue Pillen** (Nutzer-Wunsch: sie sollen sich
  nicht mit dem Blau des Grundwortschatzes und dem Orange der Kaufkategorien
  beissen). Abgeschlossene bleiben gruen - Gruen ist nach dem Stil-Rezept die
  eine Farbe fuer Erfolg und schlaegt auch hier.
- Sie **materialisieren von oben** (kurzes Herabsinken plus Einblenden,
  420 ms), nicht seitlich - so wirken sie als Teil ihrer Kategorie.
- Technisch sind es ganz normale Knoten in derselben Liste. Deshalb rutschen
  die folgenden Kategorien von selbst nach unten, ohne Sonderfall im Layout.
  Die Zeilenhoehe laeuft mit, statt aus `Index x Zeilenhoehe` zu kommen -
  Situations-Zeilen sind niedriger als Kategorie-Zeilen.

**Zwei Lernwege, umgeschaltet ueber den Wechsel-Knopf (2026-08-20).** Der
Zustand `learningMode` liegt persistiert in `AppState.tsx`, Vorgabe
`speedrun`; die Beschriftungen stehen an EINER Stelle in
`LEARNING_MODE_LABEL`, damit Knopf-Ansage und Kasten nie auseinanderlaufen.

- **Speed-Run** (`speedrun`): der oben beschriebene Pfad - Sprach-Pille,
  Satz-Kategorien, Situationen mit fertigen Saetzen. Der Weg, der heute
  echten Inhalt hat.
- **Geführtes Lernen** (`gefuehrt`): ein gefuehrter Kurs durch die
  Grundwoerter, in eigene Lektionen und Themen gegliedert, mit Satzmustern,
  Uebersetzung und Nachsprechen - damit der Nutzer die Woerter von Anfang an
  richtig lernt.
- **Neu gebaut am 2026-09-04: den Kurs gibt es jetzt fuer ALLE ZEHN
  Zielsprachen**, nach einem neu entworfenen, wissenschaftlich begruendeten
  Lehrplan. Quelle und Begruendung: `Sprachlisten/kurs/ENTWURF.md`. Alles
  darunter beschreibt den ALTEN Chinesisch-Kurs (`chineseCourse.ts`) - der
  liegt noch da und speist weiterhin die Wortliste und die
  Situations-Aufgaben, ist aber nicht mehr der Kurs im Pfad.

  **Deutsch hat als einzige Zielsprache keinen Kurs**, und das bleibt so:
  es ist die Ausgangssprache und hat keine Vokabeltabelle. Ohne Wortliste
  gibt es nichts, woraus sich ein Kurs bauen liesse.

  | Sprache | Module | Lektionen | Woerter |
  |---|---|---|---|
  | Schwedisch | 14 | 174 | 508 von 508 |
  | Englisch | 15 | 168 | 513 von 513 |
  | Chinesisch | 15 | 159 | 380 Kernwoerter |
  | Spanisch | 24 | 211 | 500 von 500 |
  | Franzoesisch | 24 | 210 | 510 von 510 |
  | Italienisch | 24 | 211 | 500 von 500 |
  | Norwegisch | 24 | 210 | 500 von 500 |
  | Russisch | 23 | 197 | 500 von 500 |
  | Vietnamesisch | 23 | 199 | 500 von 500 |
  | Polnisch | 23 | 198 | 500 von 500 |
  | **gesamt** | | **1.937** | **4.911** |

  Die Lektionszahlen sind seit dem 2026-09-07 hoeher (vorher 1.320) - nicht
  weil Stoff dazugekommen waere, sondern weil jedes Modul mit
  Wiederholungs-Lektionen endet und weil Rahmen mit gemischten Wortarten in
  getrennte Lektionen aufgeteilt werden. Die einzelne Lektion ist dafuer
  kuerzer geworden.

  Geprueft mit `python Sprachlisten/kurs/audit.py` - das schaut auf das
  ERGEBNIS statt auf den Lehrplan: neue Woerter je Lektion, leere Rahmen,
  uebriggebliebene Platzhalter, Modulgroesse, Woerter ohne Bedeutung.

  **Die Gliederung steht EINMAL, die Satzmuster je Sprache.** Welche 14-15
  Module es gibt und welcher Rahmen welche Woerter aufnimmt, ist eine
  paedagogische Entscheidung und in jeder Sprache dieselbe - sie liegt in
  `Sprachlisten/kurs/spine.json` (59 Rahmen, Slots als DEUTSCHE Begriffe,
  aus dem geprueften schwedischen Lehrplan abgeleitet). Jede Sprache
  liefert nur ihre 59 Satzmuster; der Generator loest die deutschen
  Begriffe ueber die `german`-Spalte in Zielwoerter auf. sv/en/zh haben
  aus historischen Gruenden noch eigene, ausformulierte Lehrplaene.

  **Artikel setzt der Generator nach GENUS.** Ein Rahmen deklariert
  `artikel={"m": "un", "f": "una"}`, die Slots werden nach ihrer
  `genus`-Spalte gruppiert, und jede Gruppe bekommt eigene Lektionen mit
  dem richtigen Artikel. So hoert der Nutzer "una casa" und "un libro"
  immer zusammen mit dem Wort, statt das Geschlecht spaeter nachzulernen.
  Woerter ohne Genus-Angabe fallen aus dem Artikel-Rahmen heraus (lieber
  kein Slot als "un casa") und werden vom Auffangmodul eingesammelt.

  **Das Auffangmodul ist Absicht, kein Notnagel.** Die elf Wortlisten sind
  unabhaengig nach Haeufigkeit der jeweiligen Sprache entstanden und
  ueberschneiden sich nur teilweise: von den gemeinsamen Begriffen fehlen
  im Spanischen 185, und umgekehrt bleiben rund 200 spanische Woerter
  ausserhalb der gemeinsamen Gliederung. Die liegen zu lassen waere falsch
  (es sind die haeufigsten Woerter GENAU DIESER Sprache), sie
  nachzudichten auch. Also sortiert ein Schlussmodul sie nach Wortart in
  einfache Rahmen, die die Sprache selbst mitbringt (`REST_RAHMEN`).
  Schwaecher als ein handgebauter Rahmen, aber deutlich besser als 40%
  ungelehrter Wortschatz.

  **Erzeugt, nicht handgepflegt:** `Sprachlisten/kurs/bauplan.py` liest je
  Sprache einen Lehrplan (`kurs_sv.py`, `kurs_en.py`, `kurs_zh.py`) und
  schreibt `src/data/courses/*.ts`. Eine weitere Sprache kostet einen
  Lehrplan und eine Zeile in `src/data/courses/index.ts`.

  **Sieben Regeln, die der Generator ERZWINGT** (Abbruch, keine Warnung) -
  hoechstens 5 neue Woerter je Lektion, ab Modul 2 mindestens 5
  wiederverwendete, kein unbekanntes Wort an fester Rahmenstelle,
  genusreine Artikelrahmen, Verben in der Satzform statt im Infinitiv,
  Lautschrift-Pflicht bei eigener Schrift, jedes Modul endet ohne neue
  Vokabeln. Die Begruendung je Regel steht in ENTWURF.md.

  **Die zentrale Aenderung gegenueber dem alten Kurs ist Wiederverwendung.**
  Produktives Koennen braucht rund 18 Begegnungen mit einem Wort (Laufer &
  Rozovski-Roitblat 2015); der alte Aufbau lieferte drei und ueberliess den
  Rest dem Zufall. Jetzt fuellt jede Lektion einen Teil ihrer Slots mit
  BEREITS gelernten Woertern - kostenlos, weil sie bekannt sind. Damit
  sinkt der Anteil der Woerter, die nach ihrer Einfuehrung nie
  wiederkehren, von 59% auf 10-20%. Die restlichen Begegnungen liefert
  FSRS, und das ist richtig so: verteiltes Ueben schlaegt geballtes.

  **Der Pfad zeigt jetzt Fortschritt (2026-09-04)** -
  `features/home/useGuidedProgress.ts`. Bis dahin stand im gefuehrten
  Zweig von `PathScreen` jeder Knoten fest auf `state: 'open'` und
  `currentIndex: 0`: keine erledigten Lektionen, keine aktuelle, kein
  Auto-Scroll, und "Du bist hier" zeigte immer das erste Modul. Der
  Speed-Run konnte das laengst.

  Jetzt gilt dieselbe Mechanik wie dort: erledigte Lektionen werden gruen
  mit Haken, die naechste offene ist die aktuelle (dickerer Rand), der Pfad
  scrollt beim Betreten dorthin, und der Balken oben zaehlt im gefuehrten
  Modus den KURS statt der freigeschalteten Kategorien.

  **Woran der Fortschritt haengt: an den FSRS-Karten**, die die Lektion
  ohnehin schreibt - kein zweites Tracking. Der Schritt `satz` legt je
  Lektion eine Rahmenkarte an (`sv:course-rahmen:1.1`); existiert sie, gilt
  die Lektion als gemacht.

  **Bewusst NICHT an der Bewertung festgemacht.** Eine Lektion zaehlt, wenn
  man sie gemacht hat, nicht wenn man sie gut gemacht hat - wer dreimal
  "ueberlebt" bekommt, geht weiter. Alles andere widerspraeche dem
  Grundsatz "SRS soll nicht schlecht gelaunt machen"; die Qualitaet regelt
  FSRS ueber die Wiederholung, nicht der Pfad ueber eine Sperre.
  **Es wird auch nichts gesperrt** - alle Lektionen bleiben offen
  (Nutzer-Entscheidung 2026-08-20), anders als bei Duolingo. Der Pfad zeigt
  den Stand, er erzwingt keine Reihenfolge.

  **Auffangmodule sind nach Wortart getrennt.** Erster Entwurf packte den
  ganzen Rest in EIN Modul - bei Franzoesisch 52 Lektionen unter einer
  Pille, durch die niemand scrollt und deren Fortschritt sich nie bewegt.
  Jetzt gibt es "Weitere Nomen", "Weitere Verben" und so fort: Module von
  8 bis 30 Lektionen mit erkennbarem Thema und erreichbarem Ende.

  **Verbformen im Satz - drei Wege, ein Ziel (2026-09-04).** Ein Kurs, der
  den Woerterbucheintrag in den Satz stellt, lehrt "jag springa hem" oder
  "yo correr a casa". Je nach Datenlage anders geloest:

  * **Schwedisch und Norwegisch** haben eine `forms`-Spalte; der Rahmen
    setzt `slotform="praesens"` und der Generator nimmt `forms.present`.
    Norwegisch bekam sie am 2026-09-04 nachgetragen (Migration
    `20260904120000`, alle 99 Verben, `Sprachlisten/kurs/norwegisch_verbformen.py`).
    **Von Hand, nicht per Regel:** "Infinitiv + r" trifft die
    regelmaessigen, aber genau die haeufigsten sind unregelmaessig -
    være/er, kunne/kan, ville/vil, skulle/skal, måtte/må, vite/vet,
    gjøre/gjør, si/sier, spørre/spør. Neun Verben, die in fast jedem Satz
    vorkommen.
  * **Spanisch, Franzoesisch, Italienisch, Russisch, Polnisch** haben keine
    Formen. Dort sind die betroffenen Rahmen auf eine MODALKONSTRUKTION
    umgebaut ("[P] quiero [Slot] ahora"): nach einem Modalverb steht in all
    diesen Sprachen der Infinitiv - genau die Form, die in der Liste steht.
    Billiger und richtiger, als 99 Verben mal fuenf Sprachen zu konjugieren.
  * **Chinesisch und Vietnamesisch** konjugieren nicht. Nichts zu tun.

  **Personalkonjugation begrenzt die Pronomen-Chips.** Schwedisch,
  Norwegisch, Chinesisch und Vietnamesisch konjugieren NICHT nach Person -
  dort traegt ein Rahmen mehrere Chips (`jag / du / han / hon är`), und das
  ist ein Gewinn: man sieht sofort, dass die Form gleich bleibt. Spanisch,
  Franzoesisch, Italienisch, Russisch und Polnisch konjugieren sehr wohl;
  ein Rahmen "quiero [Slot]" mit den Chips yo/tú/nosotros wuerde behaupten,
  "tú quiero" sei richtig. Dort bleibt deshalb nur das erste Pronomen
  stehen (`PERSONENKONJUGATION = True` im Lehrplan). Englisch loest
  dasselbe anders - drei getrennte Rahmen fuer am/are/is, was bei nur drei
  Formen geht.

  **Richtung gegen Ort:** der Rahmen "nach Hause" passte zu Bewegungsverben
  (gehen, laufen), nicht zu ruhenden (sitzen, wohnen) - Norwegisch und
  Schwedisch unterscheiden das sogar im Wort (`hjem`/`hjemme`,
  `hem`/`hemma`). Da die Slot-Liste beide Verbarten mischt, heisst der
  Rahmen jetzt ueberall "jetzt" statt "nach Hause"; das passt zu jedem Verb.

  **Die Bewertung ist seit 2026-09-04 SPRACHABHAENGIG**
  (`features/course/sprachProfil.ts`). Vorher war sie fuer Chinesisch
  geschrieben und wurde auf alles angewendet - mit drei echten Fehlern:

  * `[^a-z]` filtern loeschte KYRILLISCH restlos. Jede getippte russische
    Antwort war leer und damit "nicht verstanden".
  * Diakritika abstreifen machte aus schwedisch `här` ein `har` und aus
    vietnamesisch `mà` ein `ma`. Das sind keine Verzierungen, sondern
    eigene Buchstaben bzw. eigene Woerter.
  * Zeichenweiser Vergleich passt zu Chinesisch (keine Leerzeichen),
    zerlegte aber jedes lateinische Wort in Buchstaben - Reihenfolge- und
    Fremdmaterial-Pruefung urteilten ueber Buchstabensalat.

  Ein Profil je Sprache regelt jetzt vier Dinge: zeichen- oder wortweiser
  Vergleich, ob Diakritika beim TIPPEN fehlen duerfen (beim Sprechen nie),
  welche Zeichen als gleichklingend gelten (die acht chinesischen
  Homophonpaare) und ob die Wortstellung verhandelbar ist. Letzteres ist
  bei **Russisch und Polnisch `false`**: die markieren ihre Satzglieder
  ueber Faelle, `я тебя люблю` und `я люблю тебя` sind beide richtig - wer
  das anstreicht, bestraft korrektes Russisch.

  **Auch die Oberflaeche des Tippfelds haengt am Profil** (2026-09-04,
  Simons Fund): ueber jedem Tippfeld stand fest "TIPPEN (PINYIN, OHNE
  TÖNE)", auch bei Schwedisch. Jetzt nennt der Hinweis, was die Sprache
  wirklich verlangt - `TIPPEN (PINYIN, OHNE TÖNE)` bei Chinesisch,
  `TIPPEN (UMSCHRIFT)` bei Russisch, `TIPPEN (MIT SONDERZEICHEN)` bei
  sv/no/pl/vi (dort zaehlen die Zeichen, siehe oben), sonst schlicht
  `TIPPEN`.

  Derselbe Fehler steckte im PLATZHALTER: `text.replace(/[^a-zA-Z ]/g, '')`
  strich die Pinyin-Toene weg (richtig fuer Chinesisch) und mit ihnen
  alles andere - aus `trött` wurde `trtt`, Kyrillisch verschwand ganz.

  Geprueft mit `npm run pruefe:bewertung` (30 Faelle, jeder ein Verhalten,
  das die Bewertung oder die Oberflaeche haben MUSS).

  **Bekannte Ungenauigkeit bei Russisch und Polnisch:** beide DEKLINIEREN,
  die Vokabeltabellen fuehren den Nominativ. `chcę kawę` (Akkusativ) statt
  `kawa`. Die Rahmen sind deshalb bewusst nominativlastig gebaut, aber wo
  ein anderer Fall noetig waere, steht die Grundform. Sauber loesen liesse
  sich das nur mit Fallformen in der Vokabeltabelle. Wichtigster Punkt fuer
  einen Muttersprachler-Check.

  **`CourseWord` heisst nicht mehr hanzi/pinyin, sondern schrift/lerntext**
  (`src/data/courseTypes.ts`). Die zwei Felder tragen Rollen, keine
  Schriften: `schrift` wird vorgelesen, `lerntext` steht auf dem Schirm.
  Bei lateinischer Schrift sind beide gleich - genau deshalb spielt
  derselbe Uebungs-Screen alle drei Sprachen ab.

- **Der Kurs steht seit dem 2026-08-20 fuer CHINESISCH** (Simons Testsprache),
  `mobile/src/data/chineseCourse.ts`: 12 Module, 113 Lektionen, 312
  Slot-Vokabeln aus 351 Wortlisten-Eintraegen. Aufbau nach Simons "In-Context Micro-Batching"-Vorgabe -
  Satzrahmen mit je 4-5 Slots, am Modulende ein Finisher OHNE neue Vokabeln,
  der die Rahmen kombiniert.
- **Die Module haben 6 bis 14 Lektionen, nicht drei** (Nutzer-Entscheidung
  2026-08-20). Die Lektionszahl richtet sich nach dem Wortschatz, nicht
  umgekehrt: Statt Woerter zu streichen oder Lektionen zu ueberladen bekommt
  ein Modul so viele Lektionen, wie es fuer hoechstens 5 neue Vokabeln je
  Lektion braucht. Die Nummern vergibt `module_mit_erweiterung()` neu -
  in den Datendateien steht nur die Reihenfolge, damit beim Einschieben
  einer Lektion nicht alles Folgende von Hand nachzuziehen ist. Der Finisher
  bleibt immer die letzte Lektion eines Moduls. Jede Lektion
  variiert nur EINE Gruppe und haelt die andere auf einem schon gelernten
  Wert fest - der Rahmen bleibt vollstaendig, die Last halbiert sich. Die
  Reihenfolge ist dabei gedreht: erst die Gruppe, die ohne Vorwissen
  funktioniert. Wer hier umsortiert, muss darauf achten, dass die
  festgehaltene Stelle nie ein noch unbekanntes Wort traegt.
- **Die Zahlen sind die eine bewusste Ausnahme vom 5er-Limit** (Lektion 3.2,
  `kind: 'series'`): 1-10 plus 百/千 am Stueck, weil eine geschlossene Reihe
  als Abfolge gelernt wird und nicht als einzelne Vokabeln. Der Generator
  meldet Limit-Verstoesse, nimmt `series` aber aus.
  In Simons Excel stehen die Zahlen als SAMMELZELLEN ("一 / 二 / 三 / 四 / 五")
  und waren dadurch nicht einzeln adressierbar - der Generator zerlegt sie
  beim Einlesen. Ergebnis: **keine einzige Vokabel der Liste bleibt ohne
  Lektion**, geprueft.
  **Im Pfad wird ein Modul zur Pille, seine Lektionen sind die
  auffaecherbare Ebene** - dieselbe Mechanik wie Kategorie/Situation im
  Speed-Run, deshalb musste die Pfad-Box dafuer nicht angefasst werden.
- **Im gefuehrten Kurs stehen alle Lektionen von Anfang an offen**
  (Nutzer-Wunsch 2026-08-20) - der Kurs ist eine Strecke, die man
  ueberblicken soll, keine Sammlung, in die man hineinsieht. Zuklappen bleibt
  jederzeit moeglich, es ist nur nicht der Ausgangszustand. Der Speed-Run
  startet weiterhin zugeklappt.
  Gesetzt wird das von einem Effekt in `PathScreen.tsx`, NICHT im
  Umschalt-Handler - nur so greift es auch beim ersten Aufbau und beim
  Sprachwechsel. `expandedIds` darf dabei NICHT in den Abhaengigkeiten
  stehen, sonst springt eine gerade zugeklappte Pille sofort wieder auf.
  Damit das ueberhaupt funktioniert, gibt `useGuidedCourse` sein Ergebnis
  durch `useMemo` - ohne stabile Referenz liefe der Effekt endlos.
- **Simons Excel deckte nur rund 130 der 300 HSK-1+2-Woerter ab**, und die
  Modul-/Lektionsvorlage war genau darauf zugeschnitten (2026-08-20). Der
  fehlende Rest steckt in
  `Sprachlisten/Chinesisch HSK1 und HSK2/chinesisch_erweiterung.py` -
  Vokabeln UND die Lektionen, die sie aufnehmen. **Herkunft beachten:** die
  Woerter der Excel sind Simons, die ergaenzten sind nach dem
  standardisierten HSK-1/2-Wortschatz zusammengestellt und NICHT gegen eine
  offizielle Liste abgeglichen - vor der Vertonung ist ein Spot-Check
  sinnvoll. Bei Namensgleichheit gewinnt immer die Excel.
- **HSK 2.0, nicht 3.0.** "300 Woerter fuer HSK 1+2" ist die alte Zaehlung
  (150 + 150). HSK 3.0 haette fuer dieselben Stufen 600 - bewusst nicht
  gewaehlt, weil 300 zum Versprechen "nach 2 Monaten Alltagsgespraeche"
  passt.
- **`chineseCourse.ts` ist ERZEUGT, nicht handgepflegt.** Quelle ist
  `build_chinesisch_kurs.py`, das Simons Excel, die Erweiterung und die
  Kurs-Struktur zusammenfuehrt. Aendert sich die Excel, einmal neu laufen lassen statt die
  TS-Datei anzufassen. Das Skript setzt die Pinyin-Rahmen ueber
  Laengster-Treffer-Zerlegung aus der Wortliste zusammen und meldet, wenn ein
  Zeichen darin fehlt.
- **Gelernt wird ueber PINYIN, nicht ueber Zeichen** (Nutzer-Vorgabe
  2026-08-20: "fuer das Lernen brauchen wir keine Zeichen"). Hanzi laeuft
  passiv im Datensatz mit und ist nie der abgefragte Teil - passt zum
  Kernprinzip, dass Lesen und Schreiben nicht trainiert werden. Angenehmer
  Nebeneffekt: das Schriftproblem entfaellt, denn `FONT_FAMILY.serif` ist auf
  iOS `Georgia` und traegt kein Chinesisch - Pinyin dagegen ist lateinisch.
- **Chinesisch in `languages.ts` hat `table: null` und `hasContent: true`.**
  Das ist Absicht und sieht nur widerspruechlich aus: es gibt kein
  Phrasebook, aber `hasContent: false` haette die Sprache in der Auswahl
  ausgegraut und den Kurs unerreichbar gemacht. Das Onboarding schliesst sie
  ueber die zusaetzliche Bedingung `table !== null` weiterhin aus. Im
  Speed-Run zeigt der Pfad fuer Chinesisch deshalb ehrlich, dass es dort
  keine Saetze gibt, statt Kategorien ohne Inhalt.
- **Keine `chinesisch_vocab`-Tabelle in Supabase** - die 149 Woerter stecken
  in der erzeugten TS-Datei. Wer sie spaeter nach Supabase holt, braucht
  **eine Pinyin-Spalte**; dafuer hat keine bestehende Vokabeltabelle ein
  Gegenstueck. Bis dahin bleibt `vocabTable: null`, das
  Sperrbildschirm-Widget sagt fuer Chinesisch entsprechend ehrlich, dass es
  keine Wortliste gibt.
**Aussprache-Bewertung im gefuehrten Kurs (2026-08-20, entschieden - noch
nicht gebaut).** Gilt fuer den Uebungs-Screen, sobald er entsteht.

- **Die Zeichen sind die Infrastruktur, nicht der Lernstoff.** Sie tauchen
  nie in der Oberflaeche auf, tragen aber beides: TTS braucht Hanzi, um
  ueberhaupt Chinesisch auszusprechen (Pinyin waere lateinischer Text), und
  Speechmatics gibt fuer Mandarin ZEICHEN zurueck, nicht Pinyin. Der
  Vergleich der zurueckgegebenen Zeichen gegen unser hinterlegtes Hanzi ist
  damit die Tonpruefung - ohne dass eine gebaut werden musste. Wer die
  Hanzi-Spalte fuer ueberfluessig haelt, weil "wir keine Zeichen lehren",
  nimmt der App Vertonung UND Bewertung weg.
- **Exakter Zeichenvergleich, KEINE Toleranzschraube.** Die Nachsicht bei
  falschen Toenen entsteht eine Ebene hoeher: die Spracherkennung korrigiert
  im Satzkontext still mit, weil sie weiss, welcher Satz plausibel ist. Das
  ist erwuenscht und entspricht dem Ueberlebensmodus - ein Kellner versteht
  "shui" auch mit falschem Ton. Verlaesslich ist die Tonpruefung deshalb nur
  beim EINZELNEN Wort, wo kein Kontext rettet; der Satz-Schritt zaehlt als
  Fluessigkeit, nicht als Tonkontrolle.
- **Acht echte Homophone muessen beidseitig gelten.** Gleiches Pinyin
  INKLUSIVE Ton - da hilft auch perfekte Aussprache nicht, gesprochenes
  Chinesisch unterscheidet sie schlicht nicht:
  他/她 (tā), 要/药 (yào), 在/再 (zài), 坐/做 (zuò), 玩/完 (wán),
  快/块 (kuài), 进/近 (jìn), 加/家 (jiā).
  Gibt die Erkennung 做 zurueck, wo 坐 erwartet war, war die Aussprache
  RICHTIG - nur der Kontext hat anders entschieden. Eine kleine
  Ausnahmeliste, kein Mechanismus.
- **Ton-Minimalpaare innerhalb einer Lektion gibt es nicht mehr** - geprueft
  ueber alle 113 Lektionen, gegen Slot-Gruppen UND Rahmenwoerter. Zwei
  Faelle waren zu beheben: 哪/那 lagen in einer Slot-Gruppe und sind jetzt
  nach FUNKTION getrennt (哪 als Fragewort in Modul 5, 那 als Hinweiswort in
  Modul 3 neben dem bekannten 这个); die Lektion "我 要 药" hiess gesprochen
  "wǒ yào yào" und lautet jetzt "我 找 药". **Wer neue Slots einfuegt, muss
  diese Pruefung wiederholen** - der Generator macht sie noch nicht von
  selbst.
- **Speechmatics kann Mandarin - am 2026-08-21 auf dem iPhone bestaetigt.**
  Simon: "Chinesisch funktioniert und ist in einem akzeptablen Level streng
  mit der Aussprache." `sttLanguage: 'cmn'` ist damit belegt, nicht mehr nur
  vermutet. Der frueher hier notierte Vorbehalt ist erledigt.
- **Vorgeschlagener Lektionsablauf** (vier Schritte, von Rezeption zu
  Produktion): Muster hoeren (nur TTS, kostenlos) - Vokabeln nachsprechen
  (hier sitzt die Tonpruefung) - Substitutionsdrill, Rahmen steht, Slot
  rotiert (der Kern) - Finisher als Mini-Dialog. **Nur Schritt 2 und 3
  rufen Speechmatics**, grob eine Minute Audio je Lektion, also rund zwei
  Stunden je Nutzer fuer den ganzen Kurs.
- **Audio-Produktion:** nicht alle Rahmen x Slot-Kombinationen vertonen
  (mehrere Tausend Dateien), sondern nur jedes Vokabel einzeln plus EINEN
  Mustersatz je Lektion - rund 430 Dateien. Zusammenschneiden aus
  Einzelwoertern scheidet aus, das zerstoert Tonsandhi und Satzmelodie.
**Uebungs-Screen des Kurses (2026-08-21, gebaut)**,
`mobile/src/features/course/LessonScreen.tsx`. Eine Lektion ist eine **flache
Schrittliste** (`UebungsSchritt`), kein verschachtelter Ablauf - dadurch kann
derselbe Screen auch eine Wiederholungs-Sitzung abspielen, indem er die Liste
von aussen bekommt (`schritteVon`).

Sieben Schrittarten, in dieser Reihenfolge je neuem Wort:
`teaser` (ganzer Satz zum Mitsprechen) - `auszeichnung` ("du hast 2 neue
Woerter") - `nachsprechen` (TTS hoeren, nachsprechen) - `abrufen` (Deutsch ->
Chinesisch aus dem Kopf, mit Pinyin-Hilfeknopf) - `satz` (Rahmen mit einem
Wort fuellen) - `finisher` - `ergebnis`.

- **Vor JEDEM neuen Wort steht ein Satz** (Nutzer-Vorgabe 2026-08-20): kein
  Wort soll leer im Raum stehen. Deshalb `teaser` je Wort, nicht je Lektion.
  **Der Teaser hat seit dem 2026-08-21 ein Mikrofon.** Vorher stand dort nur
  ein Knopf "Gesagt" - eine reine Selbstauskunft. In einer App, deren
  Kernprinzip Sprechen ist, war ausgerechnet der erste Schritt jeder Lektion
  der einzige ohne Spracheingabe. Er wird jetzt bewertet wie ein Satz-Schritt
  (das neue Wort ist der Slot), **schreibt aber weiterhin KEINE Karte**.
- **Eine Seite, ein Wort.** Der erste Entwurf zeigte alle Vokabeln der
  Lektion auf einer Seite - das war ein Glossar zum Ueberfliegen, keine
  Uebung.
- **Tippen ist versteckt** (Duolingo-Muster): erst der Knopf "Ich kann gerade
  nicht sprechen" blendet das Eingabefeld ein, dann fuer die ganze Lektion
  (`tippenErlaubt`). Getipptes wird hoechstens als "ueberlebt" gewertet - es
  beweist keine Aussprache.
- **Bewertung** in `lessonEvaluation.ts`: exakter Zeichenvergleich plus die
  acht Homophon-Paare von oben, dazu eine Pruefung auf **fremdes Material**
  und auf die **Reihenfolge**. Ausloeser war ein echter Fehlfall: "wo jiao
  xuesheng" galt als richtig, weil die erwarteten Zeichen enthalten waren.
- **Zweiter Anlauf nach misslungener Antwort** (2026-08-21): die Rueckmeldung
  traegt einen Knopf "Nochmal sprechen", solange das Urteil nicht "richtig"
  ist. **Gewertet wird nur der ERSTE Versuch** - fuer die FSRS-Karte UND fuer
  die Auswertung am Lektionsende (`versuchtRef` in `LessonScreen.tsx`). Sonst
  koennte man sich zu einem besseren Ergebnis klicken, und dieselbe Karte
  bekaeme mehrere Bewertungen im Minutenabstand. Der zweite Versuch aendert
  nur, was auf dem Bildschirm steht - er ist Uebung, kein Nachweis. Anki macht
  es genauso. Geprueft: die Karte bleibt nach falschem Erstversuch und
  richtigem Zweitversuch bei genau einer zusaetzlichen Bewertung.
- **"Weiter" ist immer sichtbar, aber gesperrt, bis eine Antwort da ist**
  (Nutzer-Wunsch 2026-08-21). Vorher erschien der Knopf erst mit dem Urteil -
  man sah nicht, wohin es geht. Sichtbar-aber-gesperrt ist auch Duolingos
  Muster.
- **Ueberholt (2026-09-04): alle Lektionen aller drei Sprachen sind offen.**
  Hier stand: nur drei Lektionen (`LEKTIONEN_MIT_UEBUNG = ['1.1','1.2','1.8']`)
  - zum Testen des Ablaufs, bevor er auf 113 Lektionen ausgerollt wird. Alle
  anderen Pillen sagen das beim Antippen.
- **Zeitbedarf (nachgemessen 2026-09-07):** Median 16-20 Schritte je
  Lektion, also 2,5 bis 3,3 Minuten; ein ganzer Kurs 8,7 bis 10,9 Stunden.
  Hier stand "rund 6 Stunden" - das war gegen den geplanten Ablauf
  gerechnet, nicht gegen den gebauten. Tatsaechlich war es zwischenzeitlich
  MEHR, weil wiederholte Woerter dieselben vier Schritte bekamen wie neue;
  siehe "Jedes Wort kommt jetzt mindestens sechsmal vor" weiter oben.
- **Der Fortschrittsbalken zaehlt JEDEN Schritt** (berichtigt 2026-08-21).
  Vorher zaehlte er nur die Schritte mit Antwort - in Lektion 1.1 also 19
  statt 25 - und stand auf jedem Teaser und jeder Auszeichnung still, gut ein
  Viertel der Lektion. Ein Balken, der sich beim Weitertippen nicht ruehrt,
  sieht kaputt aus. Der Ergebnis-Schritt zaehlt bewusst nicht mit: er IST das
  Ende, kein Weg dorthin - sonst haette die letzte Aufgabe nie 100%.

**Wiederholung: der Kurs haengt jetzt am FSRS (2026-08-21, gebaut).** Der
frueher hier notierte "offene Anschlusspunkt" ist damit erledigt.
`cardKey(languageId, table, id)` nimmt als dritten Teil auch Text; der
`table`-Platz traegt fuer den Kurs einen Namensraum:

| Karte | Schluessel | Anzahl | bewertet von |
|---|---|---|---|
| Wort | `zh:course-wort:学生` | 349 | Schritt `abrufen` |
| Rahmen | `zh:course-rahmen:1.1` | 101 | Schritt `satz` |

- **Bestehende Schluessel verschieben sich nicht** - Zahlen bleiben Zahlen
  (`sv:schwedisch_phrasebook:47`), der Speed-Run merkt nichts davon.
- **Jede Kartenart wird von genau EINEM Schritt bewertet.** (Praezisiert
  2026-09-07: bei einem WIEDERHOLTEN Wort ist dieser eine Schritt der SATZ,
  weil es keinen Abrufen-Schritt mehr hat - der Satz schreibt dann auf
  Rahmen- UND Wortkarte. Kein Widerspruch, sondern dieselbe Regel unter
  geaenderten Schritten; ohne das bekaeme ein wiederholtes Wort Uebung, aber
  keine Bewertung mehr.) Sonst bekaeme
  dasselbe Wort zwei Bewertungen im Abstand von Minuten - damit rechnet FSRS
  nicht. Nicht bewertet: `nachsprechen` (das Wort steht sichtbar da und
  beweist nichts - Nutzer-Entscheidung), `teaser` (der Satz steht sichtbar
  da, UND der Schritt kommt mehrfach je Lektion - er wuerde dieselbe
  Rahmenkarte vier- bis fuenfmal im Minutenabstand beschreiben) und
  `finisher` (mehrere gueltige Antworten, keiner einzelnen Karte zuzuordnen -
  er bleibt ein Meilenstein).
- **Schluessel ist das Hanzi, nicht die Supabase-ID.** `chineseCourse.ts`
  traegt keine IDs, und der Kurs soll offline laufen; Hanzi ist in unseren
  Daten eindeutig (der Import nutzt es als `on_conflict`-Schluessel).
- **Als "schon gesehen" gilt, wozu eine Karte existiert**
  (`useFaelligeKarten.ts`). Ohne diese Einschraenkung waere sofort der ganze
  Kurs faellig, denn neue Karten gelten per Definition als faellig.
- **Weg dorthin:** S1 "Tägliches Wiederholen" fuehrt **direkt** in die
  gemischte Sitzung - `/wiederholen` fuer Chinesisch, sonst `/exercise` mit
  `mode: 'spam'`. Ueber S5 ist die Sitzung zusaetzlich auf eine Kartenart
  einschraenkbar (`/wiederholen?modus=woerter|saetze`). **Erst filtern, dann
  ueber das Vorziehen entscheiden** - sonst zieht ein leerer Wort-Modus
  Satzkarten vor, die er gar nicht zeigen darf.
- **`CourseReviewScreen.tsx` ist bewusst eine duenne Huelle** um
  `LessonScreen`: eine Wiederholung ist inhaltlich exakt eine Lektion. Waere
  sie nachgebaut, wuerden beide mit der Zeit auseinanderlaufen.
- **Fuer Chinesisch liegen hinter "Sätze lernen" die Rahmenkarten des
  Kurses**, weil es kein `chinesisch_phrasebook` gibt; Deutsch und Schwedisch
  gehen dort unveraendert ueber `/exercise`. Simon dazu (2026-08-21): die
  Speed-Run-Saetze kommen noch, und die Lernmodi werden spaeter auf eigene
  Lern-Templates gefuehrt - der Doppelweg ist ein Zwischenstand, kein
  Zielbild.
- **Noch nicht gebaut:** die Animation der Woerter in den
  Wiederholen-Knopf (jetzt waere sie ehrlich, weil wirklich Karten
  entstehen). Von den drei Kaesten auf dem Lektionen-Screen fuehren
  "Saetze" und "Konversation" weiterhin auf einen Platzhalter -
  **"Woerter" hat seit 2026-08-24 einen echten Screen**, siehe eigener
  Abschnitt "Wörter-Wiederholung" weiter unten.

- **Der Kasten "Du bist hier" nennt den Lernweg.** Die kleine Zeile traegt
  den Modus, die grosse bleibt die Stelle im Pfad ("SPEED-RUN" ueber
  "Hotel + Accommodation"). Kein neues Bauteil, keine zusaetzliche Hoehe.
- **Noch offen, haengt am Schema:** auf dem Lektionen-Screen deckt die Box
  "Satz-Wiederholung" vor allem Rezeption und Produktion ab,
  "Konversationstraining" vor allem Konversation und Situation. Die
  Beschreibungen in `data/trainingModes.ts` erst nachziehen, wenn diese vier
  Begriffe aus der Vorlage belegt sind.

- **Knotenanzahl ist variabel, NICHT fix.** Sie ergibt sich aus dem echten
  Content, nicht aus einer festen Zahl. Aktuell ist das trivial erfuellt (eine
  Pille pro Kategorie); beim Auffaechern gilt es wieder voll. Mehr Content
  darf nie eine UI-Aenderung erfordern, nur mehr Knoten.
  **Achtung, haeufiger Irrtum:** `scenario` taugt NICHT als Chunking-Achse -
  9 der 10 befuellten Kategorien haben genau ein Szenario (siehe
  `Sprachlisten/assign_categories.sql`). Die Unterthemen sind echte, noch
  nicht begonnene Content-Arbeit.
- **Knoten-Zustaende, aus echten Daten:** gruen + Haken = jeder Satz der
  Kategorie mindestens einmal bewertet; orange mit dickerem Rand = aktuell
  (erste nicht fertige freigeschaltete Kategorie); orange = freigeschaltet;
  grau + Schloss = nicht gekauft. Blau bleibt dem Grundwortschatz vorbehalten,
  Gruen schlaegt alles (Stil-Rezept: Gruen nur fuer Erfolg). Jeder Zustand
  steht zusaetzlich im `accessibilityLabel` - Farbe und Symbol allein reichen
  fuer VoiceOver nicht.
- **Fortschrittsbalken:** bezieht sich auf die **freigeschalteten** Inhalte
  (Grundwortschatz + gekaufte Kategorien), nicht auf die ganze Sprache.
  Berechnet aus vorhandenen Daten - Anteil der Saetze mit FSRS-Zustand
  (`mobile/src/features/home/useUnlockedProgress.ts`), kein neues Tracking.
  Bewusster Nebeneffekt: ein Kauf vergroessert den Nenner, der Prozentwert
  faellt also nach einem Kauf. Das ist bei dieser Bezugsgroesse richtig.
- **Rahmenlos (Nutzer-Wunsch 2026-08-18).** Die Box hat keinen sichtbaren
  Rahmen (`borderColor: 'transparent'`), keine gestrichelte Trennlinie
  zwischen frei und gesperrt und keine Linie unter dem Abschnitts-Kopf. Der
  Pfad soll frei auf der Seite stehen statt in einem Kasten. Im Hellmodus
  verschwindet die Box dadurch komplett, weil ihre Fuellung ebenfalls weiss
  ist - das ist so gewollt.
  **Was die Trennung frei/gesperrt jetzt traegt:** allein Farbe und
  Schloss-Symbol der Pillen. Fuer Screenreader unveraendert eindeutig, weil
  "gesperrt" im `accessibilityLabel` steht.
- **Hintergrund: nur die Pergament-Textur**
  (`mobile/src/features/home/PathBackdrop.tsx`). Bis zum 2026-08-21 lagen
  darueber zwei Kartenecken als eigene Bilder, die gelegentlich wackelten;
  auf Nutzer-Wunsch sind beide raus - und mit ihnen die Wackel-Animation und
  die "Bewegung reduzieren"-Abfrage, die es nur ihretwegen gab. Die Dateien
  `assets/bg-ecke-oben.png` und `bg-ecke-unten.png` liegen noch da, werden
  aber nirgends mehr eingebunden und landen dadurch auch nicht im Bundle.
- **Auto-Scroll** zum zuletzt gelernten Knoten bei JEDEM Betreten des Screens
  (nicht nur beim ersten Aufbau), damit man nach einer Uebung dort wieder
  einsteigt, wo man aufgehoert hat. "Du bist hier" zeigt dieselbe Stelle -
  ermittelt aus dem juengsten `last_review` aller FSRS-Karten.
  **Quelle ist `useCategorySituations`, NICHT `useUnlockedProgress`**
  (korrigiert 2026-08-20): der Fortschritts-Hook laedt bewusst nur die
  freigeschalteten Kategorien, weshalb dort jede andere nie gewinnen konnte -
  "Du bist hier" blieb dann sichtbar auf dem Grundwortschatz stehen, obwohl
  anderswo gelernt wurde. Der Hook liefert deshalb `recentCategoryIds`
  (juengste zuerst) statt nur der einen juengsten: gesperrte Kategorien
  scheiden aus, weil sich dort nicht weiterlernen laesst, und S1 faellt dann
  auf die naechstjuengere freigeschaltete zurueck statt an den Anfang. Der
  Fall ist nicht theoretisch - im Abo lassen sich Kategorien abwaehlen.
- **Coins** zeigt den echten Kontostand aus `AppState` und fuehrt zu
  `/rewards` (dort liegen Freunde werben, Bewertung, Feedback). Nach dem
  Onboarding steht dort **1**, nicht 0. **Geschenk** ist noch ohne Funktion.
  Beides siehe Coins-Abschnitt im Preismodell oben.
- Weggefallen: die Wortschatz-Kaesten ("Ueberlebens-/Maximalwortschatz",
  Platzhalter ohne Funktion) und die untere Knopfzeile - Cheat-Sheet-Survival
  ist jetzt der Tab "Survival", die Extras haengen am Coins-Knopf.

**Aktionen -> Ziele:**
- Tap auf freigeschaltete Pille -> **S2 Kategorie-Detail-Screen**
- Tap auf gesperrte Pille (Schloss) -> **S3 Shop-Screen**
- Tap "Taegliches Wiederholen" -> **direkt in EINE gemischte Sitzung**,
  und zwar in die des aktuellen LERNWEGS (Nutzer-Wunsch 2026-08-21):
  `gefuehrt` -> `/wiederholen` (Kurs-Woerter und -Rahmen), `speedrun` ->
  `/exercise` (Phrasebook-Saetze). Vorher entschied die SPRACHE - Chinesisch
  landete immer beim Kurs, selbst wenn man im Speed-Run stand. Das ging
  durch, solange Chinesisch keine Speed-Run-Saetze hatte; seit
  `chinesisch_phrasebook` existiert, waere es der falsche Stoff.
  Fuehrte bis zum 2026-08-21 auf S5; siehe dort, warum der Zwischenschritt
  weg ist
- Tap "Weiter durchstarten" -> **S2** der aktuellen Kategorie
- Tap Schatzkarte -> noch ohne Funktion (Auffaechern, siehe oben)

### S2 - Kategorie-Detail-Screen (z.B. "Club + Nightlife")
**Zweck:** Einstieg in die Lernmodi einer einzelnen, bereits
freigeschalteten Kategorie
**Elemente:**
- Kategorie-Name als Titel
- Fortschrittsanzeige in % ("Progression 70%: vollstaendig gelernt")
- Vier Optionen/Buttons: "komplette Kategorie durchspammen" (alle Inhalte
  am Stueck), "Woerter lernen", "Saetze lernen",
  "Konversationsmodus/Sprachbooster" (mit Hinweis auf moegliche
  Premium-Kennzeichnung wegen KI-Token-Kosten)
**Aktionen -> Ziele:**
- Tap "Woerter lernen" -> **S4 Uebungs-Screen** (Modus: Woerter)
- Tap "Saetze lernen" -> **S4 Uebungs-Screen** (Modus: Saetze)
- Tap "Konversationsmodus/Sprachbooster" -> **S4 Uebungs-Screen**
  (Modus: Konversation) bzw. Paywall, falls nicht freigeschaltet
- Tap "komplette Kategorie durchspammen" -> **S4 Uebungs-Screen**, gemischt
  aus allen Inhalten der Kategorie
- Zurueck-Navigation -> **S1 Startscreen**

### S3 - Shop-Screen ("Pakete + Shop")
**Zweck:** Kategorien/Sprachen kaufen; Katalog-Darstellung, nicht Lernnavigation
**Layout-Entscheidung (2026-08-05, vorlaeufig):** aktuell ein 2-spaltiges
Grid aus Kategorie-Karten (Kuerzel-Avatar, Schloss/AKTIV/IM-WARENKORB-Badge),
so wie im importierten Claude-Design-Prototyp - Nutzer-Entscheidung: "fuer's
erste passt die Grid-Liste, aber ich will es spaeter gerne wie einen
Skilltree haben". Der urspruengliche radiale Skilltree (Sprache im Zentrum,
14 Knoten drumherum) bleibt also das Ziel-Layout, ist aber bewusst noch nicht
umgesetzt - Grid ist Zwischenstand, kein finales Layout.
**Elemente:**
- Grid aus 13 Kategorie-Karten, freigeschaltet = orange/"AKTIV", im
  Warenkorb = blau, gesperrt = grau mit Schloss-Icon (nur visuelle
  Kennzeichnung, kein eigenes Tap-Ziel - Klick auf die ganze Karte toggelt
  den Warenkorb)
- Info-Box: zeigt bei Auswahl eines Knotens, was das Paket enthaelt
  (aktuell Fliesstext "beinhalten" + "befaehigt dich zu" aus EINEM
  Datenbank-Eintrag pro Paket, siehe App-Overlay-Spec.md - genaue
  DB-Feldnamen fuer Woerter-/Satzanzahl, Lernmodi, Freischaltungsdauer noch offen)
- Warenkorb-/Preisuebersicht mit Summe
- Button "Kaufen"
**Aktionen -> Ziele:**
- Tap auf Info-Icon eines Knotens -> zeigt Paketinhalt (kein Screenwechsel)
- Tap auf Kategorie-Knoten -> Paket in Warenkorb legen/entfernen (Toggle)
- Tap "Kaufen" -> Kaufabwicklung, danach zurueck zu **S1 Startscreen**
  (gekaufte Kategorie erscheint dort jetzt als neuer, orange markierter
  Abschnitt am Pfad)
- Zurueck-Navigation -> **S1 Startscreen**

### S4 - Uebungs-Screen (generisch fuer Woerter/Saetze/Konversation)
**Zweck:** eigentliche Lern-/Abfrage-Interaktion, wird von S2 (gezielt) UND
von S5 (SRS-Wiederholung) aus aufgerufen - EIN Screen-Typ, unterschiedliche
Datenquellen/Filter je nach Herkunft
**Elemente (Beispiel Uebersetzungsuebung):**
- Ausgangssatz sichtbar als Text + TTS-Wiedergabe-Button
- Eingabefeld/Mikrofon fuer Antwort (Text oder STT)
- Bewertung nach Eingabe: richtig/falsch-Feedback (siehe Abschnitt
  "Uebersetzungsuebungen ohne laufende KI-Kosten" fuer die Bewertungslogik)
- Fortschrittsanzeige innerhalb der Session (Karte X von Y)
**Aktionen -> Ziele:**
- Nach letzter Karte -> Ergebnis-Zusammenfassung (richtig/falsch-Quote),
  danach zurueck zu **S2** (falls von dort gestartet) oder **S1** (falls von
  S5/SRS gestartet)
- Abbrechen -> zurueck zum aufrufenden Screen (S2 oder S5)

### S5 - SRS-/Wiederholen-Auswahl-Screen
**Seit 2026-08-21 NICHT mehr auf dem Hauptweg.** "Tägliches Wiederholen" auf
S1 springt direkt in die gemischte Sitzung. Grund (Simons Frage): das
taegliche Wiederholen IST der gemeinsame Pool aus Woertern und Saetzen - wer
davor erst zwischen "Wörter lernen" und "Sätze lernen" waehlen muss, uebt
zwangslaeufig nur die Haelfte. Das widersprach dem Grundsatz "EIN gemeinsamer
Wiederholungs-Pool" ganz oben und der urspruenglichen Beschreibung dieses
Screens ("befuellt mit allen aktuell faelligen SRS-Karten (Woerter + Saetze
gemischt)").
Der Screen bleibt bestehen und ist ueber `/srs` erreichbar, hat aber **keinen
Einstieg mehr in der UI**. Er ist der natuerliche Ort fuer den
Kategorie-Filter, den dieser Abschnitt unten ohnehin beschreibt und den es
seit dem Umbau vom 2026-08-06 nicht mehr gibt. Wer ihn wiederbelebt, gibt ihm
diese Aufgabe - nicht die Aufteilung nach Kartenart.
**Zweck:** Einstieg in die kategorieuebergreifende Spaced-Repetition-Wieder-
holung, mit optionalem Kategorie-Filter
**Elemente:**
- Dropdown/Liste "Welche Kategorien willst du ueben?" mit Optionen: "alle"
  + jede einzelne freigeschaltete Kategorie (z.B. Club + Nightlife, Dating,
  Smalltalk, Health + Emergency)
- Button "Loslegen"
**Aktionen -> Ziele:**
- Tap "Loslegen" -> **S4 Uebungs-Screen**, befuellt mit allen aktuell
  faelligen SRS-Karten (Woerter + Saetze gemischt) aus der gewaehlten
  Kategorie-Auswahl
- Zurueck-Navigation -> **S1 Startscreen**

### S6 - Cheat-Sheet-Survival (neu, 2026-08-05 aus Claude-Design-Import)
**Zweck:** schnelles Nachschlagen einzelner Saetze nach Situation, unabhaengig
vom linearen Lernpfad - kein Lernmodus, sondern ein Nachschlagewerk. War
bisher nicht im Screen-Inventar, stammt aus dem importierten Claude-Design-
Projekt "Speech app mobile prototype" + `App-Overlay-Spec.md`.
**Elemente (Uebersicht):**
- Suchfeld "Wo brauchst du gerade Hilfe?" + runder Such-Button (aktuell ohne
  Funktion)
- Link "Favoriten (Anzahl X)"
- Themen-Gruppen (z.B. Grundwortschatz, Club + Nightlife, Health + Emergency),
  je Gruppe ein Grid aus antippbaren Themen-Boxen - Auswahl zaehlt +1 im
  Favoriten-Zaehler (laut Spec bestaetigt), Gruppentitel selbst fuehrt in die
  volle Kategorie-Liste
- Eckiger Button "Suchen (Anzahl ausgewaehlter Themen)" unten
**Unterscreens:**
- Cheat-Sheet-Kategorie: alle Saetze einer Themengruppe am Stueck (Vorlesen +
  Speichern pro Satz), zusaetzlich Darkmode-Umschalter + "Teilen + Drucken"
  (aktuell ohne Funktion)
- Suchergebnisse: nach Themen-Auswahl gruppierte Satzliste
- Favoriten: alle gespeicherten Saetze
**Content-Stand:** nur 1 echter Beispielsatz + Platzhalter pro Thema - die 4
Kategorien ohne Lehrbuch-Basis (Dating/Club/Smalltalk/Finding-Friends) haben
laut Backlog weiterhin 0 cross-referenzierte Saetze, das Cheat-Sheet zeigt das
ehrlich als "(Platzhalter)" statt Fake-Content.

**Umgebaut 2026-08-21 (Nutzer-Vorgabe):**
- **Grundwortschatz steht immer ganz oben**, darunter die freigeschalteten
  Kategorien - das Nachschlagewerk soll mit dem beginnen, was jeder hat.
- **Alle Situationen einer Kategorie sind antippbare Label**, nicht mehr nur
  die bei Kategorien mit mehreren Szenarien. Die Auswahl fuettert die Suche.
- **Das Lesezeichen-Symbol fuellt sich**, sobald mindestens ein Satz
  gespeichert ist (`bookmark` statt `bookmark-outline`) - vorher sah ein
  voller Favoritenspeicher aus wie ein leerer.
- **Eine Karte fuer alle drei Nachschlag-Screens** (`PhraseCard.tsx`,
  berichtigt 2026-08-21). Der Kategorie-Screen zeichnete seine Saetze bis
  dahin selbst und kannte nur Satz und Uebersetzung - Pinyin und
  Kulturhinweis fielen unter den Tisch, obwohl die Daten da waren. Er
  filterte zusaetzlich die Nachschlage-Saetze weg, ausgerechnet er.
  Aufbau der Karte: Zeichen, Pinyin, Deutsch, Hinweis. Die Zeichen stehen
  oben, weil man im Notfall jemandem den Bildschirm hinhaelt - lesen tut sie
  der Nutzer nie selbst, dafuer ist das Pinyin da.
- **Saetze zeigen Pinyin und darunter die deutsche Uebersetzung**, und das
  Audio ist die Datei aus der Supabase-Tabelle, nicht deutsches TTS. Der
  Fehler davor: `speakSentence({text})` bekam keine `languageId` und las
  darum alles auf Deutsch vor - jetzt wird sie aus der Satz-ID abgeleitet
  (`phraseLanguageId()`).
- **Merken mitten in der Uebung (2026-08-21).** Jede Satz-Lernkarte traegt
  ein Lesezeichen; es fuellt sich beim Antippen und legt den Satz sofort
  unter "Gespeicherte Saetze" ab. Derselbe Schluessel wie im Survival
  (`sprache:tabelle:id`), also derselbe Eintrag und kein zweiter.
  **`Phrase` traegt seit dem auch `scenario` und `category`.** Ohne diese
  Merkmale waere ein waehrend einer Lektion gemerkter Satz spaeter nicht
  ueber seine Situation auffindbar: die Favoriten leben allein aus
  `savedMeta` und werden nie neu geladen, und die Suche gleicht genau gegen
  Situation und Kategorie ab. Der Kulturhinweis erscheint jetzt ebenfalls
  auf der Lernkarte, nicht nur im Nachschlagewerk.
  **Offen:** `searchCheatsheetSentences()` liest weiterhin frisch aus
  Supabase, nicht aus `savedMeta`. Wird eine Kategorie im Abo abgewaehlt,
  faellt ein gemerkter Satz aus der SUCHE, bleibt aber unter "Gespeicherte
  Saetze" sichtbar - das widerspricht der Vorgabe "Cheat-Sheet zeigt immer
  alle bisher freigeschalteten Saetze, dauerhaft". Die Merkmale dafuer
  liegen jetzt bereit.
- **Noch keine Satz-Audios vorhanden**, in keiner Sprache: `phrasebook_master`
  hat gar keine Spalte dafuer, `schwedisch_phrasebook.audio_url` ist 0 von
  189 belegt. Der Weg steht, die Dateien fehlen.

### S7 - Tab-Leiste (2026-08-18, neu)
Fuenf Einstiege am unteren Rand, `mobile/app/(tabs)/_layout.tsx`. Nach den
Apple-Richtlinien: zwei bis fuenf Ziele (fuenf ist das Maximum),
Ein-Wort-Beschriftungen - deshalb "Survival" statt "Cheat-Sheet-Survival".

**Schwebende Leiste (Nutzer-Vorgabe 2026-08-18):** sie sitzt nicht am
Bildschirmrand, sondern als abgerundete Kapsel darueber - 36 Radius, 16 Rand
zu den Seiten, 64 hoch, Schatten Y5/Blur25, 1-px-Kontur. Der milchige
Untergrund ist Apples `systemThinMaterial` ueber `expo-blur`, mit einem
duennen Farbschleier darueber; die geforderte leichte Undurchsichtigkeit
entsteht aus beidem zusammen und NICHT aus einem flachen `opacity`-Wert -
der haette Symbole und Beschriftungen mit ausgeblichen.

Drei Fallen, die beim Bauen zugeschlagen haben und beim Aendern wieder
zuschlagen werden:
- **Abstand nach unten** ist `Math.max(insets.bottom, 14)`. Auf Geraeten mit
  Home-Indikator ist der Sicherheitsrand schon groesser als der gewuenschte
  Schwebeabstand, auf aelteren Geraeten greift die 14.
- **Der Inhalt muss den Platz selbst freihalten.** Eine absolut positionierte
  Leiste reserviert keinen Platz mehr im Layout - `sceneStyle.paddingBottom`
  ersetzt ihn, sonst verschwindet der unterste Knopf darunter.
- **`borderTopWidth` gesondert setzen.** React Navigation setzt fuer die
  angedockte Leiste eine eigene Trennlinie oben; diese Einzelangabe schlaegt
  die Sammelangabe `borderWidth`, die Kapsel haette sonst oben keine Kontur.

**Zweite Kapsel daneben (2026-08-18, Nutzer-Vorlage):** rechts neben der
Leiste sitzt ein abgesetzter runder Knopf (64x64, gleiches Material, gleicher
Schatten, 8 Abstand). Die Leiste endet vor ihm, statt darunter durchzulaufen -
ihr rechter Rand ist deshalb `SPACING.lg + ACTION_SIZE + ACTION_GAP`.

Bewusst **kein fuenfter Tab**: der Knopf zeigt keinen aktiven Zustand an und
steht nicht in der Navigations-Reihenfolge - deshalb liegt er ausserhalb des
`<Tabs>`-Navigators als Geschwister. **Er hat noch keine Funktion** (Nutzer-
Entscheidung: erst die Form) und sagt das beim Antippen, statt still nichts zu
tun.

Die weisse Kontur (14% Weiss) gilt nur im Darkmode - auf hellem Grund waere
weiss auf weiss unsichtbar, dort uebernimmt eine ebenso dezente dunkle Linie
(8% Schwarz) dieselbe Aufgabe.

| Tab | Ziel | Stand |
|---|---|---|
| Start | S1 Pfad | gebaut |
| Lektionen | Kategorie-Katalog | **gebaut** 2026-08-18, siehe unten |
| Survival | S6 Cheat-Sheet | gebaut |
| Profil | Einstellungen | **gebaut** 2026-08-20, siehe unten |

**Vier Tabs, nicht fuenf (2026-08-18):** "Freunde" lag urspruenglich in der
Leiste und ist auf Nutzer-Wunsch hinter das **Drei-Punkte-Menue** der
Kopfzeile gewandert (`mobile/src/components/HeaderMenu.tsx`). Dort liegen auch
Geschenk und Coins; beim Antippen fahren die drei Knoepfe nach links aus.
Das Menue steht auf **allen** Tab-Screens - sonst waere `/freunde` nach dem
Umzug nur noch vom Startscreen aus erreichbar. `app/freunde.tsx` ist seitdem
ein Stack-Screen ueber der Leiste, kein Tab mehr.

**Lektionen-Screen (gebaut 2026-08-18)**,
`mobile/src/features/lessons/LessonsScreen.tsx`. Aufbau nach Simons Vorlage
(Drops-Screenshot): **eine Kategorie pro Abschnitt**, darunter eine waagerecht
scrollende Reihe mit ihren **Situationen**. Nutzer-Entscheidung: Struktur aus
der Vorlage, Farben aus unserem Rezept - ein dunkelvioletter Screen haette
ausgesehen wie eine andere App als S1 und das Onboarding.

- **Karte = Situation = `scenario`-Wert aus der Datenbank.** Lesbare Namen
  dafuer in `mobile/src/data/scenarios.ts` (16 Eintraege); unbekannte
  Szenarien fallen auf den Rohwert zurueck statt leer zu bleiben.
- **Die Reihen sind heute kurz, und das ist die Aussage des Screens.**
  Gemessen am Content: `grundwortschatz` hat 6 Situationen,
  `travel_transportation` 2, acht Kategorien genau 1, und vier
  (dating_romance, club_nightlife, finding_friends, love_relationship) gar
  keine Saetze - die zeigen ehrlich "Noch keine Saetze in dieser Kategorie".
  Der Screen ist damit zugleich das Arbeitsblatt fuer die noch ausstehende
  Situations-Arbeit: sobald pro Kategorie echte Situationen existieren,
  fuellen sich die Reihen von selbst, ohne Code-Aenderung.
- **Gesperrte Kategorien zeigen ihre Situationen trotzdem** - der Katalog
  soll bewerben, nicht verstecken, genau wie in der Vorlage. Dafuer laedt
  `useCategorySituations` ALLE Kategorien, waehrend `useUnlockedProgress`
  (S1) bewusst nur die freigeschalteten laedt.
- **`WORLD_TINTS` in tokens.ts sind DEKORATIV** und werden reihum an die
  Kategorien vergeben. Sie bedeuten nichts; der Zustand laeuft ueber Rahmen,
  Symbol und `accessibilityLabel`.
- **Gesperrte Karten behalten ihre Farbe** und bekommen nur einen Schleier in
  Seitenhintergrund-Farbe darueber. Bewusste Abweichung von der strengeren
  Pfad-Regel "grau = gesperrt": im Katalog ueberwiegt, dass man sieht, was es
  zu holen gibt. Ein flacher `opacity`-Wert waere falsch - er haette Text und
  Schloss mit ausgeblichen.
- **Erledigt (2026-08-21): eine Situations-Karte oeffnet GENAU ihre Saetze.**
  `ExerciseScreen` nimmt jetzt einen `scenario`-Parameter und filtert darauf;
  Pfad und Lektionen-Screen geben ihn mit. Vorher landete man auf S2 und
  damit bei den vier Modus-Knoepfen - man hatte "Naeher kommen" angetippt
  und bekam "Komplette Kategorie durchspammen". Das fiel nicht auf, solange
  neun von zehn Kategorien genau EINE Situation hatten (der Umweg fuehrte
  zufaellig zum selben Ergebnis); mit zehn Situationen in Club + Nightlife
  ist es der Unterschied zwischen 17 und 121 Saetzen. Gesperrte Karten
  fuehren weiterhin in den Shop.
- **Schloss fuehrt in den Shop (2026-08-21).** Ein Tipp auf eine gesperrte
  Karte oeffnet S3, statt wie bisher ins Leere zu laufen - dieselbe Regel wie
  auf dem Pfad.

**Profil-Screen (gebaut 2026-08-20)**,
`mobile/src/features/profile/ProfileScreen.tsx`. Bisher der einzige Inhalt:
die Einstellung fuers **Sperrbildschirm-Widget** (Nutzer-Wunsch 2026-08-20) -
alle 5 Stunden ein neues **Wort** oder ein neuer **Satz**. Konto, Darkmode,
Sprache und Erinnerungen sollen ebenfalls hierher, der Screen sagt das am
Ende selbst.

- **Kein Aus-Schalter.** Ob das Widget erscheint, entscheidet der Nutzer in
  iOS, indem er es auf den Sperrbildschirm legt. Ein zweiter Schalter in der
  App koennte dem nur widersprechen.
- **Das Widget selbst gibt es noch NICHT** und es ist auch nicht nebenbei
  nachzuruesten: eine WidgetKit-Extension ist SwiftUI (kein React Native),
  braucht ein Config-Plugin (`@bacons/apple-targets`, weil kein `ios/`-Ordner
  im Repo liegt und die CI bei jedem Build `expo prebuild` frisch aufruft) -
  und vor allem die **App-Group**-Berechtigung, um ueberhaupt an App-Daten zu
  kommen. Die gibt es nur mit **bezahltem Apple-Entwicklerkonto**; der heutige
  Weg (unsignierter CI-Build + Sideloadly + kostenlose Apple-ID) traegt sie
  nicht. Der Screen sagt das ehrlich, statt eine tote Einstellung zu zeigen.
- **Die Rechnung dafuer steht aber schon** und ist geprueft:
  `mobile/src/features/widget/lockscreenRotation.ts`. Bewusst reine Funktionen
  ohne Laden/React, weil das Widget spaeter GENAU DIESELBE Rechnung benutzen
  muss - sonst zeigen Vorschau und Sperrbildschirm verschiedene Dinge.
  `buildTimeline()` liefert bereits die Form, die WidgetKit erwartet.
  Der Zeitraster laeuft an der Unix-Epoche entlang, es gibt also keinen
  Startzeitpunkt zu speichern.
- **Eine feste gemischte Reihenfolge, NICHT pro Durchgang neu gemischt.** Der
  erste Entwurf mischte pro Durchgang und hatte dadurch einen Fehler (von
  einem Test gefunden): an der Nahtstelle zweier Durchgaenge konnte derselbe
  Eintrag zweimal im Abstand von 5 Stunden kommen. Mit fester Reihenfolge ist
  der Mindestabstand garantiert ein voller Durchgang - bei 501 Woertern gut
  100 Tage. Wer hier wieder "frischer mischen" will, faellt in denselben
  Fehler zurueck.
- **WICHTIG - "aus allen freigeschalteten Kategorien" gilt nur fuer SAETZE.**
  Die Vokabeltabellen haben zwar eine `category`-Spalte, die meint aber die
  **Wortart** (Nomen, Verb, Adjektiv, ...), nicht die Lernkategorie. Ein Wort
  laesst sich deshalb gar nicht auf `hotel_accommodation` filtern. Inhaltlich
  ist das kein Widerspruch: die 500 Woerter SIND der Grundwortschatz und damit
  ohnehin fuer jeden freigeschaltet. Wer nach Lernkategorien filtern will,
  braucht zuerst eine neue Spalte.
- **Neue Datenquelle:** `mobile/src/data/vocabContent.ts` laedt erstmals
  Einzelwoerter (vorher kannte die App nur Saetze). Belegt sind
  `schwedisch_vocab` (501) und `franz_vocab` (515); **Deutsch hat KEINE
  Wortliste**, `spanisch_vocab` existiert nicht. Deutsch ist zugleich die
  Vorgabesprache - deshalb ist `saetze` die Vorgabe-Einstellung, und die
  Wort-Auswahl sagt bei fehlender Liste ehrlich, dass es sie fuer diese
  Sprache noch nicht gibt.

Das Auth-/Onboarding-Gate liegt im Tab-Layout, nicht im Startscreen: haengt
es am Screen, blitzt die Leiste beim Weiterleiten ins Onboarding kurz auf.

### Navigationsprinzipien (fuer Implementierung verbindlich)
- S4 ist ein einziger wiederverwendbarer Screen-Typ, kein separater Screen
  pro Modus - die Datenquelle (Kategorie-spezifisch vs. SRS-faellig,
  Woerter/Saetze/Konversation) wird als Parameter uebergeben
- Es gibt keinen direkten Weg von S3 (Shop) zu S4 (Uebung) - nach einem Kauf
  geht es immer zurueck zu S1, von dort aus startet der Nutzer bewusst das
  Lernen
- S2 existiert nur fuer bereits freigeschaltete Kategorien; fuer gesperrte
  Kategorien gibt es keinen S2-Zugriff, nur den Weg ueber S3
- Fast alle Routen liegen in der Gruppe `(tabs)`, damit die Leiste ueberall
  sichtbar bleibt; die nicht-Tab-Routen tragen `href: null`. Die Gruppe taucht
  NICHT in der URL auf - `/shop` bleibt `/shop`, kein Navigationsaufruf musste
  angefasst werden
- **Zurueck-Verhalten:** der Navigator laeuft mit `backBehavior="history"`,
  jedes Zurueck fuehrt also dorthin, wo man hergekommen ist. **Ausnahme: die
  Tab-Screens selbst.** Deren Zurueck-Pfeil fuehrt zum Startscreen (Nutzer-
  Entscheidung 2026-08-20) - ein Tab ist ein Einstieg, kein aufgerufener
  Unterscreen. Betrifft heute nur Survival, weil nur der einen Pfeil hat

## UI-Fundament: Tokens und Bausteine
Vor dem Bauen eines Screens lesen - sonst driften die Masse wieder
auseinander, wie vor dem Aufraeumen am 2026-08-16/18.

- **Tokens:** `mobile/src/theme/tokens.ts` haelt Farben, `SPACING`, `RADIUS`,
  `FONT_SIZE`, `LINE_HEIGHT`, `FONT_FAMILY`. Wer einen Zwischenwert braucht,
  nimmt den naechsten Schritt der Skala und erfindet keine neue Zahl.
- **Bausteine:** `mobile/src/components/` - `Screen` (Seitengeruest mit
  Safe-Area), `Card` (umrandete Flaeche), `PillButton` (Knopf mit der
  Duolingo-Druckkante, `PRESS_DEPTH`), `ProgressBar` (Schritte ODER Anteil),
  `Dropdown` (auch als `compact` fuer Kopfzeilen). `components/onboarding/`
  enthaelt nur noch, was wirklich onboarding-eigen ist (`OnboardingScaffold`,
  `OptionRow`), und reicht die uebrigen weiter, damit die zwoelf
  Onboarding-Screens ihre Importe behalten.
- **Navigations-Theme:** `app/_layout.tsx` gibt React Navigation unsere
  Farben. Ohne das liegt hinter jedem Screen der Standard-Untergrund
  (#F2F2F2), der im Darkmode hellgrau aufblitzt.

## Nutzerdaten serverseitig (2026-08-22, gebaut)

Bis zum 2026-08-22 lag JEDER Nutzerzustand ausschliesslich lokal in
AsyncStorage; Supabase hielt nur Content und wurde nur gelesen. Auf
Nutzer-Vorgabe (Simon) gibt es jetzt neun Tabellen mit RLS - `profil`,
`nutzer_zustand`, `freischaltung`, `abo`, `lernkarte`, `lernaktivitaet`,
`freundschaft`, `gruppe`, `gruppen_mitglied` (Migration
`20260822120000_nutzerdaten.sql`, `gemerkt`-Spalte in
`20260822180000_gemerkte_saetze.sql`).

**Lokal bleibt die Wahrheit waehrend des Lernens.** Die App laeuft offline
weiter - die Abgleich-Schicht (`mobile/src/lib/sync.ts`) ist kein
Arbeitsspeicher. Faellt sie aus, merkt der Nutzer nichts ausser dem
fehlenden Abgleich; sie wirft nie.

**Ein Durchgang ist Ziehen, Verschmelzen, Schieben** - nie nur eins davon.
Angestossen im Tab-Layout, erst wenn Sitzung UND geladener lokaler Stand da
sind. **Drei Anlaesse** (Nutzer-Entscheidung 2026-08-22, Variante
"Wegschalten + Rueckkehr"):
- beim Start
- wenn die App in den **Hintergrund** geht - immer, ohne Drossel. Da ist das
  gerade Gelernte am laengsten ungesichert. Bewusst NUR `background` und
  nicht `inactive`: letzteres feuert auf iOS bei jedem Banner, beim
  Kontrollzentrum und bei Anrufen, und beim echten Wegschalten kommt ohnehin
  active -> inactive -> background.
- beim **Zurueckkehren**, hoechstens einmal pro Minute
  (`ZURUECK_DROSSEL_MS`) - holt, was ein anderes Geraet getan hat, ohne bei
  App-Wechseln im Sekundentakt zu feuern.

**Kein Timer waehrend des Lernens**, bewusst: die Zielgruppe sitzt im Ausland
an einem wackeligen Datentarif. Der Preis ist bekannt und angenommen - wer
die App sofort per Wischen killt, schiebt erst beim naechsten Start hoch.
Verloren ist nichts, das zweite Geraet ist nur bis dahin veraltet.

`laeuftRef` verhindert zwei gleichzeitige Durchgaenge: beide laesen sonst
denselben Serverstand, verschmelzen dagegen, und der zweite ueberschreibt das
Ergebnis des ersten.

**Es gibt bewusst NICHT eine Regel fuer alles** (`mobile/src/lib/merge.ts`,
14 Pruefaelle ueber `npm run pruefe:merge`):

| Art | Regel | warum |
|---|---|---|
| Zaehler | Maximum | wer auf dem Handy 40 schaffte und auf dem iPad 5, hat 40 |
| Marken (Geschenke, Kaeufe) | Vereinigung | fehlend heisst "war offline", nicht "zurueckgenommen" |
| Coins, Einstellungen | juengerer gewinnt | sobald man Coins ausgeben kann, machte "Maximum" jede Ausgabe rueckgaengig |
| FSRS-Karten | juengere Bewertung | eine Karte verdichtet ihre ganze Historie, die spaetere kennt alles |

**Der Fehler, der beim ersten Test zuschlug** - und der Grund, warum
`geaendertAm` mitgespeichert wird: stand er auf einem frisch eingerichteten
Geraet auf "jetzt", schlug der leere Vorgabezustand jeden Serverwert. Die App
holte ihre Daten und ueberschrieb sie im selben Atemzug - Coins kamen als 0
zurueck, die Zielsprache als Deutsch. Ein falscher Merge zeigt nicht nur
Falsches an, er **verbreitet** es: der Server war danach ebenfalls leer.
Fehlt der Wert, gilt 0; dann verliert das Geraet jeden Vergleich, was
richtig ist - es hat nichts beizutragen.

**`karten_schluessel` ist GENAU der lokale Schluessel** aus `srsStorage`
(`zh:course-wort:学生`). Die Abbildung lokal<->Server ist die Identitaet.

**`freischaltung` ist Anzeige-Wahrheit, nicht Kaufbeleg.** Verbindlich bleibt
die Quittung von Apple/Google.

**Noch offen:** Entfernen setzt sich nicht ueber Geraete durch (gemerkte
Saetze werden vereinigt) - dafuer braeuchte es Grabsteine. Lieber ein Satz zu
viel in der Liste als ein verlorener.

## Konto noetig, Demo fuer Gaeste (2026-08-22)

Nutzer-Entscheidung: **ohne Konto nur eine Demo-Version** - kein Kauf, keine
Freunde, kein Gruppenfortschritt, kein Abgleich. Damit hat sich die Bedeutung
des Gastmodus umgedreht: bis dahin war der Unterschied rein technisch (nur
lokale Speicherung), jetzt ist er inhaltlich.

**Nicht verwechseln, es sind ZWEI Achsen:** Konto entscheidet ueber den
Demo-Umfang (`mobile/src/data/demo.ts`), Launch-Phase ueber das Teaser-Modell
(Preismodell oben). Wer sie vermischt, baut eine Demo, die sich nach sechs
Monaten heimlich aendert.

**Berichtigt 2026-08-23: Kategorien werden nicht mehr aus Pfad/Lektionen
gefiltert.** Simon testete mit Chinesisch und sah nur 4 von 14 Kategorien -
der Rest war spurlos weg, nicht einmal als gesperrter Knoten. Das
widersprach dem AELTEREN, weiterhin gueltigen Grundsatz weiter unten ("Auch
gesperrte Kategorien faechern auf... der Katalog soll bewerben, nicht
verstecken"). Kategorien ausblenden ist das Gegenteil von bewerben.

Die Demo-Grenze wirkt seitdem nur noch auf **Situationen**, und zwar nur
innerhalb EINER Kategorie (`club_nightlife`, `DEMO_KATEGORIEN` in
`mobile/src/data/demo.ts`) - jede andere gesperrte Kategorie zeigt weiterhin
alle ihre Situationen als Werbung. Der Grundwortschatz ist explizit
ausgenommen: er ist keine Kaufkategorie, sondern laut Konzept oben
"dauerhaft gratis" - ihn zu kappen waere keine Kostprobe, sondern eine
Kuerzung von etwas, das jedem gehoert.

**Der genaue Umfang bleibt offen** - ob es ueberhaupt noch eine
Situations-Kostprobe braucht, jetzt wo Kategorien wieder voll sichtbar sind,
ist Teil des "sprechen wir nochmal durch". Weiterhin ungeklaert: **darf ein
Gast den gefuehrten Kurs sehen?** Der haengt an keiner Kategorie und ist
derzeit komplett offen - das groesste Loch in der Grenze.

**Die Grenze nimmt niemandem etwas weg:** wer eine Kategorie besitzt, sieht
sie immer ungekuerzt. Der erste Entwurf filterte Kategorien stur und liess
gekaufte verschwinden - dieser Fehler ist behoben, unabhaengig von der
Berichtigung oben.

**E-Mail-Anmeldung gebaut** (`mobile/src/features/auth/KontoScreen.tsx`) -
ohne sie waere ueberhaupt kein Konto erreichbar, weil Google einen
OAuth-Client in der Cloud Console braucht und Apple ein bezahltes
Developer-Programm.

**!!! VOR DEM LAUNCH !!!** `mailer_autoconfirm` ist am 2026-08-22 auf Simons
Bitte zum Testen ABGESCHALTET. Zurueckdrehen - und zwar zusammen mit einem
eigenen SMTP-Anbieter, weil Supabases eingebauter Versand nur wenige Mails je
Stunde schickt. Punkt eins ohne Punkt zwei sperrt alle Nutzer aus. Ebenfalls
offen: `site_url` steht auf `http://localhost:3000` und gehoert auf die echte
Domain, sobald es eine gibt. `uri_allow_list` ist gesetzt
(`words500://**,http://localhost:8081/**`).

## Persistenz & Offline (2026-08-07, erledigt)
Wichtig fuer die Zielgruppe (Backpacker/Austauschstudenten mit oft
wackeligem Auslandsdatentarif) - zwei getrennte Bausteine, beide OHNE
Supabase Auth (die noch nicht existiert), beide lokal auf dem Geraet:

- **App-Zustand ueberlebt einen Neustart:** `mobile/src/state/AppState.tsx`
  speichert `darkMode`/`targetLanguageId`/`purchased`/`saved`/`savedMeta`
  jetzt via AsyncStorage (laedt einmal beim Start, schreibt bei jeder
  Aenderung zurueck). `cart` und `selectedThemes` bleiben bewusst NICHT
  persistiert - transiente "gerade dabei"-Zustaende, kein Grund die zu
  retten. FSRS-Kartenzustaende (siehe Spaced-Repetition-Abschnitt) laufen
  separat ueber denselben AsyncStorage-Mechanismus.
- **Offline-Cache fuer Supabase-Inhalte:** `mobile/src/lib/offlineCache.ts`
  ist eine generische "Netzwerk zuerst, bei Fehler letzter gespeicherter
  Stand"-Schicht. `loadExerciseSentences()`/`loadAnswerClusters()` nutzen
  sie bereits - einmal geladene Saetze bleiben offline nutzbar, der Screen
  zeigt ehrlich ein "📴 Offline"-Badge, wenn gerade der Cache statt frischer
  Daten verwendet wird. **Erledigt (2026-08-07): Cheat-Sheet-Survival (S6)
  nutzt jetzt denselben Mechanismus** - S6 wurde komplett auf echten
  Content aus allen gekauften Kategorien + Grundwortschatz umgestellt
  (siehe Backlog unten fuer Details), das Nachschlagewerk ist dadurch
  genauso offline nutzbar wie der Uebungs-Screen.

## Tech-Stack
- Backend: Supabase
- Frontend/Mobile-Framework: **entschieden (2026-08-03): Expo (React Native,
  TypeScript)**. Code liegt in `mobile/`, eigenes privates GitHub-Repo unter
  https://github.com/neieobviwrvr/500words-mobile (Git-Root ist `mobile/`
  selbst, nicht der "500 words"-Ordner - haelt die Klartext-Secrets aus
  Notizen.txt/vertone.py automatisch aus der Versionierung raus).
  **STT laeuft seit 2026-08-12 ueber Speechmatics** (Cloud-Dienst, Batch-API),
  angebunden ueber die Supabase Edge Function `speechmatics-transcribe`
  (`mobile/supabase/functions/speechmatics-transcribe/index.ts`): die haelt
  den `SPEECHMATICS_API_KEY` serverseitig, das Handy schickt nur die
  WAV-Aufnahme hin und bekommt Text zurueck. App-Seite:
  `mobile/src/features/stt/useSpeechmatics.ts`, bewusst mit derselben groben
  Form, die der geloeschte `useWhisper()` hatte (`status` + `transcribe()`) -
  urspruenglich, damit der Anbieter ohne grossen Umbau wechselbar bleibt;
  das Muster lohnt sich weiterhin, falls ein dritter Anbieter dazukommt. Grund fuer den Wechsel weg von
  On-Device-Whisper: bei akzentbehaftetem Schwedisch lag Whisper bei ~40-45%
  Abweichung, Speechmatics traf denselben Satz im ersten echten Test exakt
  (laut Anbieter explizit auf Akzente trainiert).
  **Zwei bewusste Brueche mit frueheren Festlegungen:** STT verursacht jetzt
  laufende Kosten pro Nutzung und braucht Internet (kein Offline-STT mehr) -
  Nutzer-Entscheidung, dass die Erkennungsqualitaet das wert ist. Relevant
  fuer den Konversationsmodus-Kostenpunkt weiter oben, der bisher als
  einziger laufende Kosten hatte.
  **`whisper.rn` ist seit 2026-08-16 vollstaendig entfernt** (Nutzer-
  Entscheidung): `useWhisper.ts` geloescht, das npm-Paket deinstalliert, der
  Modell-Download-Code weg, `app/dev-tools.tsx` auf Speechmatics umgestellt.
  Es gibt damit **keinen On-Device-Rueckfallweg mehr** - faellt Speechmatics
  aus oder werden die Kosten zu hoch, ist das ein echter Neuaufbau, kein
  Umschalten. Bewusst so entschieden.
  Historie nur noch zur Nachvollziehbarkeit: Modellverlauf `tiny` -> `base`
  (2026-08-04) -> `small` (2026-08-08, weil `base` sauber ausgesprochenes
  Schwedisch/Spanisch wiederholt als andere Sprache erkannte); die frueher
  hier notierte Festlegung "Modellwahl `base` ist final" war damit doppelt
  ueberholt.
  **Umbenennungen im selben Zug** (die alten Namen erzaehlten die falsche
  Geschichte): `useWhisperRecorder` -> `useSttRecorder`, Variable `whisper`
  -> `stt`, `languages.ts`-Felder `whisperLanguage`/`whisperPrompt` ->
  `sttLanguage`/`sttPrompt`. Die reine Textheuristik
  `looksLikeGarbageTranscript()` liegt jetzt anbieterunabhaengig in
  `mobile/src/features/stt/transcriptQuality.ts`.
  **Zwei Verhaltensaenderungen als Nebenwirkung, dokumentiert im Code:** der
  automatische Zweitversuch bei Kauderwelsch-Transkripten entfaellt
  (steckte in `useWhisper()`, Speechmatics hat kein Gegenstueck) - die
  Pruefung in `ExerciseScreen.tsx` ist damit die einzige Absicherung statt
  nur der Rueckfall. Und der Sprach-Mismatch-Schutz ist praktisch tot, weil
  Speechmatics `detectedLanguage` immer als die angeforderte Sprache
  zurueckgibt; der Zweig bleibt bewusst stehen, falls der Anbieter spaeter
  ein echtes Sprachfeld liefert.
  TTS ueber `expo-audio` zum Abspielen vorgerenderter Supabase-Audiodateien -
  das bleibt ohne laufende Kosten und offline nutzbar,
  siehe `mobile/README`/Git-Historie fuer Details. iOS-Tests laufen ohne
  eigenen Mac ueber einen GitHub-Actions-Cloud-Build (unsigniert) + lokales
  Sideloadly-Signing mit kostenloser Apple-ID (kein bezahltes Apple Developer
  Program noetig). Downloadete Test-IPAs landen in `Ipa-Datei/` (nicht
  `mobile/dist/`).
- Meilenstein (2026-08-03): End-to-End-Machbarkeit auf echtem iPhone 12
  bestaetigt - TTS-Wiedergabe + Transkription funktionieren (damals noch
  on-device Whisper, seit 2026-08-12 Speechmatics, siehe oben).
  Offener Punkt unveraendert: Android-WAV-Aufnahme noch nicht verifiziert
  (Android hat keine native WAV-Unterstuetzung in MediaRecorder). Der
  Anbieterwechsel loest das NICHT - `useSttRecorder.ts` (bis 2026-08-16
  `useWhisperRecorder.ts`) nimmt weiterhin 16-bit PCM WAV @ 16kHz mono auf,
  jetzt eben fuer den Speechmatics-Upload. Gleiche Ursache, gleicher naechster Schritt
  (PCM-Stream-Adapter statt datei-basierter Aufnahme).
- Bewertungslogik (Stand 2026-08-04): `mobile/src/features/evaluation/evaluateConcepts.ts`
  prueft transkribierten Text gegen `accepted_concepts` (Pflicht-/Optional-
  Konzeptgruppen mit Synonymen) aus der DB, statt exaktem Satzvergleich -
  Wort-Token-Matching (nicht Substring), Unicode-NFC-Normalisierung,
  laengenabhaengige Levenshtein-Toleranz pro Wort. 189 A1/A2-Referenzsaetze
  (nur Deutsch) liegen in Supabase `phrasebook_master`, siehe
  `Sprachlisten/phrasebook_master.py`.
  **Nachgeschaerft 2026-08-08** (die drei Stufen selbst sind unveraendert,
  nur die Wege dorthin): Wortgrenzen-Verschmelzung bei mehrwortigen
  Synonymen abgefangen, kurze Woerter toleranter behandelt, Zielsatz wird
  als Prompt mitgegeben (Duolingo-Prinzip) inkl. Papagei-Schutz, und eine
  **Rausch-Pruefung gegen Zufallstreffer**: sind mehr als 50% der erkannten
  Woerter ohne jeden Bezug zum Zielsatz, wird "richtig" auf "ueberlebt"
  abgestuft (nie strenger - die Konzept-Pruefung bleibt die Grundlage).
  Echter Ausloeser war ein Fall, in dem Kauderwelsch die Pflicht-Konzepte
  rein technisch erfuellte. Nur aktiv, wenn `targetText` uebergeben wird.
  **Chinesisch-Weiche (2026-08-21):** die ganze Datei zerlegte Text an
  LEERZEICHEN - Chinesisch hat keine, ein erkanntes 我要一杯水 waere ein
  einziges Token gewesen und JEDE chinesische Antwort "nicht verstanden".
  Fuer CJK-Synonyme gilt jetzt ENTHALTEN statt Wort-fuer-Wort, und zwar
  **exakt, ohne Levenshtein-Toleranz**: in lateinischer Schrift ist ein
  abweichender Buchstabe meist ein Verhoerer, in chinesischer Schrift ein
  anderes Wort - 学校 darf nicht als 学生 durchgehen. Die Rausch-Pruefung
  zaehlt fuer CJK Zeichen statt Woerter. Geprueft: 9 chinesische Faelle
  greifen wie erwartet, und alte gegen neue Fassung ueber alle 567
  vorhandenen Saetze (deutsch/schwedisch/spanisch) ergaben **null
  Abweichungen**.

## Backlog: Geplant, aber noch nicht gebaut (Stand 2026-08-04)

Referenzierte Dateien, die es trotz Erwaehnung in Doku/Prompts noch NICHT
gibt (nicht verwechseln mit bereits existierenden Dateien):
- `clusters.json` - sprachneutrale Konzept-/Verb-Cluster (z.B. alle
  Konjugationen + Synonyme von "moegen/lieben" an einer Stelle statt pro
  Satz einzeln) - Grundlage fuer Punkt "Verb-Toleranz" unten
- `generate-forms-audio.js` - Vertonung aller Wortformen (nur
  `generate-audio.js` fuer Grundformen existiert bisher)
- `franz_phrasebook_data.py`, `sentence-engine.js`, `answer-evaluation.js`,
  `SPRACHFORMEN_UEBERSICHT.md` - referenziert, nicht vorhanden

Bewertungslogik (Weiterentwicklung von `evaluateConcepts.ts`):
- **Erledigt (2026-08-04):** Verb-Toleranz + Zwei-Stufen-Bewertung gebaut.
  `clusters_master.py` (-> Supabase-Tabelle `answer_clusters`) sammelt
  Konjugationsformen + Synonym-Verben pro Verbfamilie (32 Cluster, z.B.
  "moegen_lieben", "wunsch_bedarf"). `evaluateConcepts()` gibt jetzt eine
  von drei Stufen zurueck: "nicht_verstanden" / "ueberlebt" (Kernbotschaft
  verstanden, egal welches Verb) / "richtig" (zusaetzlich passende
  Verbfamilie erkannt, Konjugation egal). 37 von 189 Phrasebook-Saetzen
  haben ein `verb_cluster`-Feld; bei "etwas erwerben wollen"-Saetzen
  (bestellen, reservieren, buchen, ausleihen, suchen, kaufen) zaehlt
  zusaetzlich der generische "wunsch_bedarf"-Cluster (haben/wollen/
  moechte/brauchen) schon fuer Ueberlebensmodus - **das ist bewusst nur
  auf diese 6 Saetze angewendet, nicht auf alle 189** (macht nur bei
  Erwerbs-/Anfrage-Saetzen kommunikativ Sinn, nicht z.B. bei "wiederholen"
  oder "wohnst du"). Falls mehr Saetze diesen Fallback brauchen sollen,
  ist das der naechste Ausbauschritt.
- **Erledigt (2026-08-08):** die 7 bisher unverknuepften deutschen Cluster
  (`fahren`, `gehen`, `sein`, `haben`, `kosten`, `moegen_lieben`,
  `wunsch_bedarf` - in `clusters_master.py`/`answer_clusters` vorhanden,
  aber auf keinem der 189 Saetze als `verb_cluster` gesetzt) satzspezifisch
  durchgegangen statt pauschal zugeordnet, **23 zusaetzliche Saetze**
  bekamen ein `verb_cluster` (60 von 189 insgesamt jetzt). Wichtige
  Nutzer-Entscheidung dabei: **kein pauschales "alle Bewegungsverben sind
  synonym"** - `fahren` und `gehen` bleiben als Basis-Cluster getrennt
  (zu Fuss vs. Fahrzeug sind keine echten Synonyme), stattdessen 3 neue,
  bewusst enge Zusatz-Cluster nur fuer Saetze, wo es im Kontext wirklich
  passt: `fahren_reisen` (fahren+reisen fuer "Ich fahre nach Italien"),
  `gehen_wegbeschreibung` (gehen+fahren+laufen fuer "Gehen Sie geradeaus" -
  Nutzer-Entscheidung: fahren zaehlt hier trotz nicht 100% Deckungsgleichheit
  mit), `gehen_freizeitweg` (gehen+fahren fuer "Ich gehe gerne ins Kino" -
  Verkehrsmittel ist bei dieser Aussage egal). `sein`/`haben`/`kosten` wurden
  nur auf Saetze angewendet, wo die Verbwahl inhaltlich pruefbar ist (z.B.
  "Ich bin Student.", "Ich habe Kopfschmerzen.", "Wie viel kostet das?"),
  NICHT auf die vielen grammatisch fixen "Wo ist X?"-Fragen (dort gibt's
  keine sinnvolle Alternative zu "ist", ein Cluster wuerde nur unnoetig
  haerter werten ohne Lerneffekt - widerspraeche dem "nicht zu hart
  bestrafen"-Prinzip). `moegen_lieben` bleibt bewusst unverknuepft: keiner
  der 189 Saetze nutzt "moegen"/"lieben" tatsaechlich als Verb (die
  "gerne + Verb"-Saetze wie "Ich lese gerne Buecher" sind grammatisch eine
  andere Konstruktion, kein echter Cluster-Kandidat). `wunsch_bedarf` bleibt
  ebenfalls ohne eigenes `verb_cluster`-Feld - deckt seine Saetze (siehe
  oben) schon ueber direkt in den Pflicht-Konzepten eingebettete Synonym-
  Formen ab, keine Doppelverknuepfung noetig. **Noch nicht auf Schwedisch
  oder Spanisch uebertragen** - beide haben aktuell noch keine Entsprechung
  fuer diese 23 neu verknuepften Saetze.
- **Erledigt (2026-08-06):** Verb-Cluster-System auf Schwedisch uebertragen
  (war vorher nur die Basis-Konzept-Toleranz ohne Richtig-/Ueberlebt-
  Unterscheidung). `Sprachlisten/schwedisch_clusters_master.py` deckt genau
  die 25 tatsaechlich referenzierten Cluster ab (nicht alle 32 deutschen -
  die uebrigen sind nur bei "wunsch_bedarf"-Zusatzlogik relevant, siehe
  oben, die fuer Schwedisch NICHT nachgezogen wurde). Cluster-IDs sind
  bewusst `sv_`-praefixt (z.B. `sv_sprechen`), weil `answer_clusters.cluster_id`
  ein sprachneutraler Primary Key ueber die GESAMTE Tabelle ist - ohne
  Praefix haetten die schwedischen Wortformen die deutschen unter
  demselben Namen ueberschrieben. Schwedische Verbkonjugation ist deutlich
  einfacher als Deutsch (keine Personendifferenzierung, nur Praesens/
  Preteritum/Supinum) - je 4-8 Formen pro Cluster statt der laengeren
  deutschen Listen. Bei echten Synonym-Verbpaaren (tala/prata fuer
  "sprechen", hitta/finna fuer "finden", tappa/foerlora fuer "verlieren")
  beide Verbfamilien in einem Cluster vereint, weil die Uebersetzung selbst
  zwischen beiden wechselt. **Nicht von Muttersprachlern geprueft** - nach
  bestem Wissen korrekt, aber ein Spot-Check waere sinnvoll (siehe
  Satz-Auswahl-Methodik-Vorbehalt oben).
  **Nebenfund beim Zuordnen:** `schwedisch_phrasebook` hatte einen
  Datenfehler - ab `id`=30 war die gesamte Tabelle um eine Position gegen
  `phrasebook_master` verschoben (Satz 30 "Ich lese gerne Buecher" landete
  faelschlich ganz am Ende bei id=189, alles dazwischen rueckte eins vor).
  **Kein funktionaler Bug** - jede Zeile ist in sich konsistent
  (target_text/german-Gloss/accepted_concepts passen zueinander), die App
  fragt nie ueber `id` zwischen den Sprachtabellen ab, nur ueber `category`.
  Cluster wurden ueber Inhalts-Abgleich (deutscher Gloss-Text) korrekt
  zugeordnet, nicht ueber die (unzuverlaessige) `id`-Nummer. Die
  `id`-Neuordnung selbst ist ein optionaler Aufraeum-Punkt fuer spaeter,
  kein dringendes Problem - wer spaeter zwischen den Tabellen matchen
  will, sollte ueber den `german`-Gloss-Text gehen, nicht ueber `id`.
- Statistik/Fortschritts-Tracking ueber beide Stufen, inkl. Kategorie-
  Uebersicht mit Symbolen pro Satz - **Architektur entschieden (2026-08-04):**
  Gast-Modus = nur lokale Geraete-Speicherung (kein Login); registrierte
  Nutzer = Supabase Auth (Email, Google, Apple-ID) mit serverseitiger
  Persistenz. Onboarding soll beide Wege anbieten.
  **Google-Login + Onboarding-Screen erledigt (2026-08-07):**
  `mobile/src/state/AuthState.tsx` (Session-Handling, Gast-Flag lokal via
  AsyncStorage) + `mobile/app/onboarding.tsx` (Gast/Google-Wahl) + Auth-Gate
  in `app/index.tsx` (kein Session/Gast-Flag -> Redirect zu Onboarding).
  OAuth-Flow ueber `expo-web-browser` + Supabase `signInWithOAuth()`,
  Redirect-URI `words500://auth-callback` (nutzt das schon vorhandene
  `scheme` aus app.json). **Braucht noch 2 externe, Account-gebundene
  Schritte, die nur der Nutzer machen kann** (siehe Chat-Anleitung): OAuth-
  Client in der Google Cloud Console anlegen, Client-ID/-Secret in Supabase
  (Dashboard -> Authentication -> Providers -> Google) eintragen - erst
  danach funktioniert der Google-Button wirklich. E-Mail-Login ist
  serverseitig aktiv, hat aber noch kein eigenes Formular in der App.
  Apple-Login bewusst nicht gebaut, solange kein bezahltes Apple-Developer-
  Konto existiert. Kaufstatus/Fortschritt serverseitig fuer registrierte
  Nutzer synchronisieren: weiterhin nicht gebaut (naechster Schritt danach).

UI-Design-Entscheidung (2026-08-04/05, `mobile/src/components/ColoredTokens.tsx`
existiert und wurde 2026-08-05 kurz in S4/S6 auf Demo-Content gezeigt -
**seit der Umstellung von S4 und S6 auf echten Supabase-Content (2026-08-05
bzw. 2026-08-07) wird die Komponente aktuell NIRGENDS mehr live gerendert**,
weil echte phrasebook_master/schwedisch_phrasebook-Saetze noch keine
Wort-Tags haben (nur Satz-Ebene, kein Tagging pro Einzelwort). Die
Komponente bleibt als fertige Infrastruktur bestehen, wartet nur auf
Wortart-Tagging als Content-Arbeit): Wortarten farblich kennzeichnen, damit
Nutzer sich in einer neuen Sprache leichter orientieren. Kein
internationaler Standard existiert (recherchiert - variiert je nach
Schule/Verlag). Festgelegt: **Nomen = blau, Verben = rot, Adjektive =
gelb, Pronomen = violett** (erste 3 aus Nutzer-Schulerinnerung, zufaellig
farbenblind-sicher da kein Rot/Gruen-Paar; Pronomen-Violett angelehnt an
das international gebraeuchlichere Montessori-Grammatiksymbol-System).
Soll auch WORTWEISE INNERHALB ganzer Saetze angewendet werden (nicht nur
auf einzelne Karteikarten-Woerter) - andere Wortarten (Adverb, Praeposition,
Konjunktion etc.) bleiben bewusst unfarbig, nur diese 4 Kategorien werden
hervorgehoben. Reine Anzeige-Logik (Farbzuordnung nach `category`-Spalte
im App-Code), keine DB-Aenderung noetig - erfordert aber Wortart-Tagging
auf Wortebene INNERHALB von Saetzen (aktuell nur auf Satzebene vorhanden,
nicht pro Einzelwort im Satz). Einbauen, sobald der Woerter-lernen-Screen
bzw. die Satz-Anzeige mit Wort-Hervorhebung gebaut wird.

Aus Claude Design uebernommen (2026-08-05/06, vom Nutzer per Chat
weitergegeben, NICHT automatisch synchronisiert - siehe
[[claude-design-project]]). Anders als zunaechst angenommen liegen diese
Notizen tatsaechlich in einer von Design selbst gepflegten `CLAUDE.md` im
Projekt-ROOT (nicht der veralteten `uploads/CLAUDE.md`-Kopie) - Designs
eigene Erklaerung dazu war also korrekt, siehe [[claude-design-project]]:
- **S6 Cheat-Sheet-Survival-Suchfeld - erledigt (2026-08-07):** echte
  Freitextsuche eingebaut (z.B. "Arzt suchen" findet "Ich brauche einen
  Arzt."), OHNE dafuer eine neue DB-Spalte/Such-Tag pro Satz zu brauchen -
  MVP-Loesung tokenisiert die Eingabe und matched jedes Wort einzeln (ODER-
  verknuepft, nach Trefferzahl sortiert) gegen Satztext + deutsche Gloss +
  `scenario` + `category`, siehe `mobile/src/data/cheatsheetContent.ts`
  `searchCheatsheetSentences()`. Kein Server/KI noetig, laeuft rein lokal.
  Ein dedizierter Such-Tag pro Satz (der urspruengliche Plan) bleibt eine
  moegliche spaetere Verbesserung, ist aber kein Blocker mehr.
- **S6 auf echten Content umgestellt (2026-08-07):** kompletter Umbau von
  S6 (Uebersicht + Kategorie-Liste + Suchergebnisse) weg von den alten
  Platzhaltern (1 Fake-Satz + 5 Dummy-Karten pro Thema) hin zu echtem
  Supabase-Content aus allen gekauften Kategorien + Grundwortschatz -
  offline-cachefaehig ueber `loadExerciseSentences()` (siehe
  Persistenz-Abschnitt oben). Themen-Boxen sind jetzt echte `scenario`-Werte
  statt hartcodierter Namen, nur bei Kategorien mit mehreren
  unterschiedlichen Szenarien gezeigt (aktuell nur `grundwortschatz` und
  `travel_transportation` - der Rest hat genau 1 Szenario pro Kategorie).
  Kategorien mit weiterhin 0 Saetzen (die 4 ohne Lehrbuch-Basis) zeigen
  ehrlich "(Platzhalter)" statt Fake-Content. Favoriten-Speichern
  funktioniert dadurch automatisch auch offline (reine lokale AppState-
  Aenderung, kein Netzwerk noetig, siehe Persistenz-Abschnitt).
- **Homescreen-Pfad-Box-Position nach Kauf - erledigt (2026-08-06):** nach
  einem Kauf im Shop landet der Nutzer beim Zurueckspringen zu S1 wieder an
  der Stelle in der Pfad-Box, von der aus er in den Shop gewechselt ist.
  Geloest nicht wie im Web-Prototyp ueber manuelles Scroll-Speichern/
  -Wiederherstellen, sondern RN-idiomatisch: `ShopScreen.tsx` macht nach dem
  Kauf `router.back()` statt `router.replace('/')` - S1 bleibt dadurch im
  Navigations-Stack gemountet und die native ScrollView haelt ihre
  Scroll-Position von selbst. **Konfetti-Explosions-Animation nach "Kaufen"
  weiterhin nicht implementiert** (im Design-Prototyp selbst laut eigener
  Notiz ebenfalls noch nicht gebaut - reiner Reminder fuer spaeter).
- **SRS-Screen umgebaut - erledigt (2026-08-06):** kein Dropdown mit
  "alle"/Einzelkategorie-Filter mehr, stattdessen wie S2 drei direkte
  Modus-Buttons (Woerter/Saetze/Konversation), je mit "x/13 Kategorien
  lernbar"-Unterzeile. Konversationsmodus zeigt wie auf S2 nur einen
  Premium-Hinweis, navigiert nicht weiter. Zahlenbasis dynamisch aus
  dem lokalen Kaufstatus berechnet (User bestaetigte damals: 13 ist korrekt,
  nicht 15 - Zahlendreher beim Weitergeben. **Das galt der Korrektur 15->13,
  ist KEINE Festlegung auf 13 als Endzahl** - siehe "14. Kategorie"-Abschnitt
  oben; die Unterzeile zaehlt ohnehin `CATEGORIES.length` und wird von selbst
  zu "x/14", sobald `job_work` eingetragen ist). Muss spaeter auf echte
  User-/Kaufdaten aus Supabase umgestellt werden, sobald der Shop wirklich
  an die Datenbank angebunden ist (aktuell laeuft `purchased` nur im
  lokalen `AppState`-Context ohne Persistenz, siehe unten).
- **SRS-Auswahl soll echten Spaced-Repetition-Algorithmus nutzen (neu,
  2026-08-06, noch nicht implementiert):** fuer ALLE Lernmodi auf S5
  (Woerter lernen, Saetze lernen, Konversationsmodus, "alle zufaellig",
  einzelne Kategorie, Grundwortschatz) sollen die angezeigten Woerter/Saetze
  ueber einen echten SRS-Algorithmus ausgewaehlt werden (SM-2/FSRS, siehe
  Spaced-Repetition-Abschnitt oben), nicht zufaellig/statisch wie aktuell.
  Zusaetzlich: das Kategorie-Pop-Up bei "Woerter lernen"/"Saetze lernen"
  soll auch "Grundwortschatz" als Auswahloption zeigen. Deckt sich mit dem
  bereits bekannten Backlog-Punkt "SRS-System (SM-2/FSRS): nicht
  implementiert" (siehe App-Struktur unten), praezisiert ihn aber.
- **Kategorie-Detail-Progression soll echten Fortschritt zeigen (neu,
  2026-08-06, noch nicht implementiert):** "Progression X% vollstaendig
  gelernt" ist aktuell ueberall ein fixer 40%-Platzhalter (siehe
  `CategoryDetailScreen.tsx`). Soll durch echten Nutzerfortschritt in der
  jeweiligen Kategorie ersetzt werden (z.B. Anteil gelernter Woerter/Saetze
  aus der DB) und sich live aktualisieren, sobald echte Fortschrittsdaten
  existieren.

App-Struktur:
- **S1-Pfad auf Zickzack-Layout umgebaut (2026-08-06):** aus aktualisiertem
  Design-Prototyp uebernommen (Duolingo-Stil statt flacher Liste) -
  Pillen-Knoten absolut positioniert (abwechselnd links/rechts, zentrierte
  Sprach-/Kategorie-Knoten dazwischen), verbunden durch rotierte Linien
  zwischen den Mittelpunkten, Layout-Algorithmus 1:1 aus der Design-JS-Logik
  portiert (`mobile/src/features/home/PathScreen.tsx`). Zeigt jetzt ALLE
  gesperrten Kategorien im Pfad (vorher nur die ersten 2), matched Designs
  aktuellen Stand. Tippen auf einen Thema-Knoten uebergibt den Thema-Namen
  als Untertitel an S2 (`categoryDetailTheme`, rein informativ, filtert noch
  nichts). RN-Hinweis: `transformOrigin` als Style-Property fuer die
  rotierten Verbindungslinien setzt RN >=0.71 voraus (hier 0.86.2, passt).
- **Navigation eingerichtet (2026-08-05):** `expo-router` installiert,
  `app/`-Ordner mit echten Routen. `npm ci`-ERESOLVE-Konflikt (expo-router
  zieht ueber `@expo/ui` einen Web-only-Zweig mit `react-dom@19.2.8`
  gegen unser gepinntes `react@19.2.3`) gefixt via `overrides` in
  `package.json` (`react-dom` auf `react`-Version gepinnt).
- **Claude-Design-Projekt importiert + S1-S6 als echte Screens gebaut
  (2026-08-05):** Projekt "Speech app mobile prototype"
  (claude.ai/design/p/d167bf4e-b2be-4736-a1b8-994ab6ed55c2) via
  DesignSync-Tool gelesen (`Sprachlern-App.dc.html` + `App-Overlay-Spec.md`
  + `uploads/CLAUDE.md`), 1:1 als RN/TypeScript in `mobile/src/features/`
  nachgebaut (kein Auto-Sync - Design-Aenderungen muessen manuell erneut
  eingelesen werden, siehe Ablauf oben). Neu:
  `mobile/src/theme/tokens.ts` (Farb-Tokens inkl. Wortarten-Farben),
  `mobile/src/state/AppState.tsx` (globaler Context: Warenkorb,
  freigeschaltete Kategorien, Favoriten, Cheat-Sheet-Auswahl, Darkmode -
  noch ohne Persistenz), `mobile/src/data/categories.ts`,
  `mobile/src/data/cheatsheetContent.ts`, `mobile/src/data/mockExercise.ts`
  (Platzhalter-Uebungssaetze, noch nicht an echten Supabase-Content
  angebunden). Routen: `/` (S1), `/shop` (S3, Grid-Layout, siehe oben),
  `/srs` (S5), `/category/[id]` (S2), `/exercise` (S4, generisch ueber
  `mode`+`categoryId`-Query-Parameter), `/cheatsheet` + `/cheatsheet/[groupId]`
  + `/cheatsheet/search-results` + `/cheatsheet/favorites` (S6, neu).
  Alle Screens zeichnen ihren eigenen Header statt des nativen
  expo-router-Headers. Liquid-Glass-Blur-Optik aus dem iOS-Frame-Mockup
  des Prototyps bewusst NICHT uebernommen (reine Web-Praesentation des
  Device-Rahmens, keine Design-Entscheidung fuer die App selbst).
  Lokal mit `npx expo export` gegen Bundling-Fehler geprueft.
- **S4 an echten Supabase-Content angebunden (2026-08-05):** keine
  Platzhalter-Spanisch-Saetze mehr. `mobile/src/data/phrasebookContent.ts`
  laedt echte Saetze aus `phrasebook_master` (Deutsch) bzw.
  `schwedisch_phrasebook` (Schwedisch) je nach gewaehlter Zielsprache,
  inkl. `answer_clusters` fuer die Verb-Cluster-Bewertung; `evaluateConcepts()`
  liefert echte drei Stufen (richtig/ueberlebt/nicht_verstanden). Echtes STT
  ist jetzt der primaere Eingabeweg auf S4 (seit 2026-08-12 ueber
  Speechmatics statt whisper.rn, siehe Tech-Stack), Text-Eingabe bleibt
  Fallback - genau das in CLAUDE.md festgelegte Kernprinzip. Hinweis fuers
  Lesen des Codes: die Variable in `ExerciseScreen.tsx` heisst aus
  Migrationsgruenden weiterhin `whisper`, haelt aber `useSpeechmatics()`.
  TTS-Button ist bewusst deaktiviert
  ("noch kein Audio") statt es vorzutaeuschen, da Phrasebook-Saetze noch
  keine vorgerenderten Audiodateien haben. Leere Kategorien (0 Saetze,
  z.B. `club_nightlife`) zeigen eine ehrliche Fehlermeldung.
  `mobile/src/data/languages.ts` regelt, welche Zielsprache welche Tabelle/
  Spalte/Whisper-Sprachcode nutzt (`de`->`phrasebook_master.german`,
  `sv`->`schwedisch_phrasebook.target_text`); `es`/`fr` bleiben "(bald)".
  **Nebenbei gefixt:** S1s Sprachauswahl hatte "Spanisch" hart codiert
  als aktive Sprache, obwohl dafuer 0 Saetze existieren - jetzt ist
  Deutsch/Schwedisch echt umschaltbar (sonst waere Schwedisch-Content in
  der App gar nicht erreichbar gewesen), Spanisch/Franzoesisch zeigen
  korrekt "(bald)".
- "Woerter lernen"-Modus nutzt mangels echter Vokabel-Karteikarten-Tabelle
  weiterhin dieselben Satz-Inhalte wie "Saetze lernen" (Lernmodus 1 als
  eigene Wortkarten-Erfahrung ist weiterhin nicht gebaut)
- Fortschritts-/fertig-Zustaende der Pfad-Knoten (S1) und der
  Kategorie-Progression (S2) sind noch simple Platzhalter-Logik, kein
  echtes Tracking
- **SRS-System: FSRS erledigt (2026-08-07)** - siehe eigener Abschnitt
  "Spaced Repetition (SRS)" oben fuer Details. S5 filtert jetzt echt auf
  faellige Karten (lokal via AsyncStorage, siehe `mobile/src/features/srs/`)

Content:
- **Schwedisch-Uebersetzung erledigt (2026-08-05):** alle 189 Phrasebook-
  Saetze inkl. accepted_concepts nach Schwedisch uebersetzt und in
  `schwedisch_phrasebook` importiert (`Sprachlisten/schwedisch_phrasebook.py`,
  Import-Skript `Sprachlisten/import_schwedisch_phrasebook.py`). Gleiche
  schlanke Pflicht-Konzept-Logik wie Deutsch (z.B. "tåg"+"berlin" reicht bei
  der Zugfrage). **Verb-Cluster (Richtig-Niveau vs. Ueberlebensmodus) seit
  2026-08-06 auf Schwedisch uebertragen** (25 Cluster, siehe Backlog-Punkt
  oben) - vorher nur die Basis-Konzept-Toleranz.
  **Spanisch ist ebenfalls uebersetzt** (berichtigt 2026-08-21): 189 Saetze
  liegen in `spanisch_phrasebook`, Quelle `Sprachlisten/spanisch_phrasebook.py`.
  Diese Datei behauptete an mehreren Stellen, nur Schwedisch sei fertig -
  das stimmte nicht. Warum Spanisch in der Sprachauswahl trotzdem als
  "(bald)" ausgegraut ist, ist ein eigener offener Punkt.
  Franzoesisch hat weiterhin keine Uebersetzung.
- **Kategorisierung erledigt (2026-08-04):** neue Spalte `category` ordnet
  jeden Satz einer der 13 Zusatzkategorien zu (Slug-Form, z.B.
  `hotel_accommodation`, `drinking_dining`) oder `grundwortschatz` (30
  allgemeine Saetze: Begruessung, Vorstellung, Abschied, Uhrzeit, Termine,
  Zahlen - gehoeren zum freien 500-Woerter-Tier, nicht zu einem Paket).
  `scenario` bleibt zusaetzlich als feingranulares Situations-Tag bestehen.
  9 der 13 gebauten Kategorien haben jetzt Saetze; **finding_friends,
  love_relationship, dating_romance, club_nightlife haben weiterhin 0**
  (siehe naechster Punkt). Gemessen am Zielbild von 14 Kategorien sind es
  9 von 14 - `job_work` existiert als Slug noch gar nicht.
  Nachgezaehlt am 2026-08-17 in `Sprachlisten/phrasebook_master.py`:
  travel_transportation 32, grundwortschatz 30, drinking_dining 20,
  health_emergency 18, smalltalk_socialising 16, culture_immersion 16,
  shopping_haggling 15, university_studying 14, moving_settling 14,
  hotel_accommodation 14.
- **Club + Nightlife begonnen (2026-08-21).** Erste der vier Kategorien ohne
  Lehrbuch-Basis, die ueberhaupt Saetze bekommt. **38 Saetze** in
  `phrasebook_master` (deutsch) und der neuen Tabelle
  `chinesisch_phrasebook` (Zeichen + Pinyin), Quelle
  `Sprachlisten/club_nightlife/welle1.py`, Import ueber
  `import_club_nightlife.py` (idempotent).
  - **Drei von neun geplanten Situationen:** `club_trinkkultur` (12),
    `club_ansprechen` (13), `club_sicherheit` (13). Es fehlen
    `club_einlass`, `club_bar`, `club_ktv`, `club_naeherkommen`,
    `club_nachtlogistik`, `club_verloren` - Anzeigenamen fuer alle neun
    stehen schon in `scenarios.ts`. Bei gleicher Dichte landet die Kategorie
    bei rund 110 Saetzen.
  - **Die drei sind bewusst gewaehlt:** sie spielen alle Sonderfaelle auf
    einmal durch - China-Eigenheit (干杯/随意), geschlechtsspezifische
    Varianten (漂亮/帅) und Nachschlage-Saetze. Faellt das Muster durch,
    merkt man es nach 38 statt nach 110 Saetzen.
  - **Grenze zu Dating (Nutzer-Entscheidung):** `club_nightlife` besitzt die
    ganze Nacht einschliesslich Hotel-Logistik; `dating_romance` beginnt
    NACHDEM WeChat getauscht, ein Treffen verabredet oder die erste Nacht
    vorbei ist.
  - **Ein Kategorie-Paket bringt eigene Vokabeln mit** ("200 Woerter +
    Saetze" laut Konzept oben) - die Saetze muessen also NICHT mit den 349
    Kurswoertern auskommen. 27 tun es, 4 fuehren ein Kategoriewort ein
    (干杯, 随意, 酒, 吵), 7 sind Nachschlage-Saetze. Wo der Kurs schon eine
    Form kennt, wird sie benutzt (想 statt 要, 汉语 statt 中文).
  - **Nicht von Muttersprachlern geprueft.** Vor der Vertonung Spot-Check,
    besonders 随意 als Antwort auf 干杯 - verbreitetes Erfahrungswissen,
    keine belegte Quelle.
  - **Fertig (2026-08-21): alle zehn Situationen, 130 Saetze.** Nach Welle 1
    kamen Welle 2 (die sechs uebrigen Situationen) und Welle 3 (Komplimente
    als ZEHNTE Situation plus Ausbau von `club_naeherkommen`). Damit ist es
    die groesste Kategorie der App - alle zehn frueher befuellten zusammen
    haben 189.
  - **Drei messbare Regeln statt Bauchgefuehl**
    (`Sprachlisten/club_nightlife/pruefe_saetze.py`, vor jedem Import
    laufen lassen). Nutzer-Vorgabe: die Saetze sollen aus unserem
    Wortschatz baubar sein, nicht alle lang und komplex werden, und mit
    jedem Satz soll man etwas fuer andere Saetze lernen.
    * **baubar** >= 90% der Wortvorkommen aus bekanntem Wortschatz
      (Kurs + was fruehere Wellen einfuehrten). Erreicht: 95-97%.
    * **einfach** >= 70% der zu uebenden Saetze hoechstens 5 Woerter,
      keiner ueber 8. Erreicht: 75-91%. **Keine harte Wortgrenze** -
      Nutzer-Praezisierung: einzelne laengere sind erlaubt, alle lang zu
      machen ist das Problem. Nachschlage-Saetze sind ausgenommen; die
      laengsten Saetze der Kategorie sind genau solche, die Komplexitaet
      sitzt also dort, wo sie niemanden ueberfordert.
    * **rentabel** jedes neu eingefuehrte Wort in mindestens ZWEI Saetzen -
      sonst ist es eine Vokabel zum Auswendiglernen statt ein Baustein.
      Ausnahme: Ein-Wort-Aeusserungen wie 干杯, dort IST das Wort der Satz.
      Gilt ueber die ganze Kategorie, nicht je Welle.
    Jeder Satz **deklariert selbst**, welche Vokabel er einfuehrt
    (`neu=['干杯']`); die Pruefung gleicht das gegen den Text ab. Ohne diese
    Angabe zerlegt der Segmentierer ein unbekanntes Zweizeichenwort in zwei
    Luecken und meldet Unsinn.
    **Zwei Schalter nehmen einzelne Regeln zurueck**, wo sie in die falsche
    Richtung messen - beide melden ihre Zahl weiterhin, werten sie nur nicht
    mehr als Verstoss:
    * `UEBERSETZUNG = True` bei Wellen, die einen festen Bestand uebersetzen:
      man kann den Quellsatz nicht umschreiben, damit weniger neue Woerter
      noetig sind.
    * `GRUNDLAGE = True` beim Grundwortschatz. **baubar** misst gegen die 350
      Kurswoerter - der Grundwortschatz kommt aber VOR dem Kurs, im Speed-Run
      ist er das Erste, was der Nutzer sieht, und er muss den Kurs nie
      anfassen. **rentabel** setzt thematisch enge Saetze voraus; 62 Saetze
      ueber acht unverwandte Situationen teilen sich naturgemaess kein Wort,
      "Wo ist der Ausgang?" und "Danke" nun einmal nicht. Woerter wie 出口
      oder 丢 stehen dort nicht, weil ein Satz sie brauchte, sondern weil man
      sie am ersten Tag braucht. Verbindlich bleiben **einfach** und die
      vollstaendige Deklaration.
  - **Nachschlage-Saetze kommen UEBERALL mit** (Nutzer-Entscheidung
    2026-08-21, kurz nach der gegenteiligen). Zuerst filterte
    `loadExerciseSentences` sie aus jeder Uebung - ein Satz wie "Bitte rufen
    Sie die Polizei" muss niemand auswendig koennen. Simons Einwand schlaegt
    das: wer einen Satz beim Lernen NIE sieht, kann ihn auch nicht merken,
    und genau das soll man spaeter koennen (markieren -> landet in
    "Gespeicherte Saetze"). `lookup_only` behaelt zwei Aufgaben: es macht
    Sicherheitssaetze im Survival auch bei GESPERRTER Kategorie sichtbar,
    und es kennzeichnet Saetze, die bewusst Vokabeln ausserhalb des
    gelehrten Wortschatzes benutzen duerfen.
    **Offener Vorbehalt:** genau diese Saetze enthalten 警察, 假装, 烦,
    走开 - ein Anfaenger trifft sie beim Sprechen nicht und bekommt
    "nicht verstanden", was FSRS hart zurueckwirft. Falls das im Test
    stoert, waere die schmalere Loesung, sie zu zeigen, aber keine Karte
    dafuer zu schreiben.
  - **Wortliste je Kategorie (2026-08-21)**, erreichbar ueber einen kleinen
    Knopf rechts in der Kategorie-Ueberschrift auf dem Lektionen-Screen
    (`Alle 131 · Wortliste`). **Zum Nachschlagen, nicht zum Durcharbeiten**:
    keine Karten, keine Wiederholung, keine zusaetzliche Lernzeit. Als
    Lernblock waeren es 141 Karten allein fuer Club, und es taete dasselbe
    nochmal, was die Saetze schon leisten.
    * **ALLE Woerter, nicht nur die neuen** - wir wissen nicht, ob jemand
      den gefuehrten Kurs ueberhaupt angefasst hat oder direkt in die Saetze
      gesprungen ist (Nutzer-Vorgabe). Je Wort: Pinyin gross, Zeichen
      daneben, Bedeutung darunter, Lautsprecher rechts.
    * **Nicht nach Haeufigkeit filtern.** 干杯 ist das praegendste Wort der
      Kategorie und steht in genau EINEM Satz - weil es selbst ein Satz ist.
      Haeufigkeit misst, wie oft ein Wort als Baustein dient, nicht wie
      wichtig es ist. INNERHALB einer Gruppe sortiert sie dagegen gut.
    * **Reihenfolge nach Wichtigkeit** (Nutzer-Vorgabe): Personen, Verben,
      weitere Woerter, Grammatik - so, wie ein Satz entsteht.
    * **Die Wortart steht nirgends in den Daten.** Sie wird aus der
      deutschen Bedeutung abgeleitet (Infinitiv auf "-n"), was jedes Wort
      auf -n faengt: "schoen", "duenn", "morgen", "zusammen", "draussen".
      Deshalb die Ausnahmeliste `AUSNAHMEN` in `useCategoryVocab.ts` - wer
      etwas falsch einsortiert findet, traegt es dort ein.
    * **Nur fuer Chinesisch.** Die Zerlegung braucht eine Wortliste zum
      Abgleichen; bei Sprachen mit Leerzeichen kaemen nur gebeugte Formen
      heraus ("brauche", "einen").
  - **Kategorie-Vokabeln jetzt auch in Supabase.** Neue Spalte
    `chinesisch_vocab.category`; die 25 club-eigenen Woerter stehen dort mit
    `category = 'club_nightlife'`, die 350 Kurswoerter behalten `null`.
    Bisher hatte KEINE Vokabeltabelle eine Lernkategorie - die vorhandene
    `category` in schwedisch_vocab meint die WORTART. Gebraucht fuer die
    Wortliste und fuer die spaetere Vertonung, die wissen muss, welche
    Woerter zu welchem Paket gehoeren.
    **Nebenbefund:** 5 der Kategoriewoerter (用, 要, 就, 酒店, 远) standen
    schon in `chinesisch_vocab`, werden aber in KEINER Lektion gelehrt -
    sie gehoeren zur Wortliste, nicht zum Kurs. Sie behalten `null`.
  - **Kulturhinweis je Satz** (`culture_note`, 25 von 130 belegt). EIN Feld
    fuer zwei Zwecke, deshalb kein zusaetzliches Kennzeichen
    "china-spezifisch": wo ein Hinweis steht, IST der Satz es. (1) Wer die
    Kategorie spaeter uebersetzt, sieht sofort, was sich nicht mechanisch
    uebertragen laesst - 哪里哪里 hat kein deutsches Gegenstueck. (2) Der
    Nutzer erfaehrt, dass 瘦 ("schlank") und grosse Augen in China gaengige
    Komplimente sind; ohne den Hinweis traut er sich den Satz nicht.
    **Achtung beim Schreiben:** das sind NUTZERTEXTE, also echte Umlaute -
    nicht die ASCII-Ersatzschreibweise, die fuer Code-Kommentare gilt.
  - **Was in China anders gelobt wird** (der Grund fuer eigene Saetze statt
    uebersetzter): 瘦 ist ein Kompliment, kein Fettnaepfchen. 高 ist bei
    Maennern das Lob schlechthin. 可爱 ist positiver als "suess". 气质
    (Klasse/Haltung/Ausstrahlung) hat kein deutsches Gegenstueck, gilt als
    hoechstes Kompliment und ist zugleich das sicherste, weil es nicht den
    Koerper meint. **Und man nimmt Komplimente nicht mit "danke" an**,
    sondern wehrt mit 哪里哪里 bescheiden ab - als sichtbarer Auslaender
    braucht man das oefter als das Loben selbst.
  - **白 ("helle Haut") bewusst NICHT aufgenommen.** In China ein echtes
    Kompliment, das Wort steht sogar im Kurswortschatz. Einem Deutschen
    beizubringen, Hautton zu loben, war aber keine Entscheidung, die ich
    allein treffen wollte - liegt bei Simon.
- **Satzbestand am 2026-09-03** (gezaehlt, nicht geschaetzt). 584 deutsche
  Saetze in 14 Kategorien und 79 Situationen, in **elf Sprachen**:

  | Kategorie | Sit. | de | sv | es | fr | zh | it | no | ru | vi | pl | en |
  |---|---|---|---|---|---|---|---|---|---|---|---|---|
  | club_nightlife | 10 | 138 | 130 | 130 | 130 | 138 | 137 | 137 | 137 | 138 | 137 | 137 |
  | drinking_dining | 9 | 92 | 92 | 92 | 92 | 92 | 92 | 92 | 92 | 92 | 92 | 92 |
  | health_emergency | 5 | 76 | 74 | 74 | 74 | 76 | 74 | 74 | 74 | 76 | 74 | 74 |
  | grundwortschatz | 9 | 75 | 75 | 75 | 74 | 75 | 73 | 75 | 75 | 75 | 75 | 75 |
  | job_work | 7 | 42 | 42 | 42 | 42 | 42 | 42 | 42 | 42 | 42 | 42 | 42 |
  | travel_transportation | 8 | 36 | 36 | 36 | 36 | 36 | 36 | 36 | 36 | 36 | 36 | 36 |
  | hotel_accommodation | 5 | 25 | 25 | 25 | 25 | 25 | 25 | 25 | 25 | 25 | 25 | 25 |
  | university_studying | 7 | 24 | 24 | 24 | 24 | 24 | 24 | 24 | 24 | 24 | 24 | 24 |
  | culture_immersion | 4 | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 20 |
  | moving_settling | 5 | 18 | 18 | 18 | 18 | 18 | 18 | 18 | 18 | 18 | 18 | 18 |
  | shopping_haggling | 5 | 16 | 16 | 16 | 16 | 16 | 16 | 16 | 16 | 16 | 16 | 16 |
  | smalltalk_socialising | 3 | 12 | 12 | 12 | 12 | 12 | 12 | 12 | 12 | 12 | 12 | 12 |
  | love_relationship | 1 | 8 | 8 | 8 | 8 | 8 | 8 | 8 | 8 | 8 | 8 | 8 |
  | dating_romance | 1 | 2 | 2 | 2 | 2 | 2 | 2 | 2 | 2 | 2 | 2 | 2 |
  | **gesamt** | **79** | **584** | **574** | **574** | **573** | **584** | **579** | **581** | **581** | **584** | **581** | **581** |

  **Erledigt (2026-09-03): der Rueckstand von sv/es/fr/zh ist aufgeholt.**
  Hier stand, die sechs neueren Sprachen seien stellenweise vollstaendiger
  als die vier aelteren - `love_relationship` war dort komplett leer, dazu
  fehlten acht Saetze in `university_studying` und die Kommentar-Saetze im
  Grundwortschatz. Ursache: die vier wurden uebersetzt, bevor diese
  Master-Saetze entstanden. **97 Saetze nachgezogen** (je 24, Chinesisch
  25), Quellen `Sprachlisten/uebersetzen/luecken_{sv,es,fr,zh}.py`.
  Gemacht VOR der Vertonung - was jetzt fehlte, waere sonst stumm geblieben
  und haette einen zweiten Vertonungslauf gekostet.

  **`abdeckung.py` meldet fuer alle vier 0 offen.** Das ist die
  verlaessliche Zahl, nicht der rohe Tabellenvergleich: sie rechnet
  sprachadaptive Saetze (eigene deutsche Fassung je Sprache) und bewusste
  Auslassungen heraus. Wer die Tabelle oben liest, sieht deshalb weiterhin
  Unterschiede - **alle verbliebenen sind Absicht** und stehen in den
  AUSGELASSEN-Listen der Inhaltsdateien: westliche Medizin und helle Haut
  (fehlen ausserhalb zh/vi), Franzoesisch ohne eigenen Morgengruss
  (Bonjour deckt Morgen und Tag ab), Italienisch mit Buongiorno/Ciao.

  **Vietnamesisch und Chinesisch haben 584** - den vollen deutschen
  Bestand. Bei Vietnamesisch, weil die drei Saetze, die es anderswo nicht
  gibt (westliche Medizin, helle Haut), dort inhaltlich richtig sind; bei
  Chinesisch, weil sein einziger fehlender Satz ("Guten Tag!") durch einen
  eigenen ersetzt ist.

  **Drei Uebersetzungen weichen bewusst vom Naheliegenden ab**, weil das
  Naheliegende schon als anderer Satz in der Tabelle stand - sonst waeren
  Karteikarten entstanden, die sich selbst abfragen: chinesisch "Stimmt."
  ist 确实。 statt 对。 (= "Korrekt.") und "Macht nichts." ist 没事。 statt
  没关系。 (= "Kein Problem."). Ebenso tragen "Ist hier noch ein Platz
  frei?" und "Darf ich mich dazusetzen?" in allen vier Sprachen bewusst
  eine andere Wendung als die schon vorhandenen Beinahe-Dubletten "Ist
  dieser Platz frei?" und "Darf ich mich hierhin setzen?". **Wer neue
  Saetze ergaenzt, prueft vorher gegen den Bestand** - der Master selbst
  enthaelt solche Paare.

  **Nur `finding_friends` hat in KEINER Sprache eigene Saetze** - es zeigt
  im Katalog seine geliehenen Situationen (siehe naechster Punkt).

- **Vokabeln: 500 Woerter je Sprache** (Stand 2026-09-03), in allen zehn
  Nicht-Deutsch-Sprachen. sv 501, fr 515, zh 530 sind historisch gewachsen,
  die sechs neuen liegen bei glatt 500. **Deutsch hat als einziges KEINE
  Vokabeltabelle** - es ist die Ausgangssprache, nicht das Lernziel.

  **Vokabellisten sind Zusammenstellungen, keine Uebersetzungen.**
  Haeufigkeitslisten sind sprachgebunden: `spanisch_vocab` und `franz_vocab`
  ueberschneiden sich im deutschen Feld nur bei 185 von rund 500 Woertern.
  Wer eine neue Sprache anlegt, uebersetzt also NICHT die schwedische Liste,
  sondern stellt die haeufigsten Woerter dieser Sprache zusammen.

- **Deutsche Bedeutungen: 381 Umlaute repariert (2026-09-04).** Sechs
  Vokabeltabellen (it, no, ru, vi, pl, en - die sechs September-Sprachen)
  fuehrten die deutsche Spalte in ASCII-Ersatzschreibung: `fuer`, `ueber`,
  `waehrend`, `fuenf`, `zwoelf`, `maennlich`, `heisst`. **Keine einzige
  echte Umlautzeile.** Das ist NUTZERTEXT - in der Woerter-Wiederholung
  stand "fuer" als Bedeutung von `for`. Repariert mit
  `Sprachlisten/kurs/umlaute_reparieren.py`.

  **Kein blindes Ersetzen:** `ue -> ü` macht aus "euer" ein "eür" (im
  ersten Lauf real passiert). Umlaute folgen im Deutschen nie auf einen
  Vokal - daraus die Regel. `ss -> ß` laeuft ueber eine ausdrueckliche
  Liste, weil "dass", "essen", "Wasser", "muessen" ss behalten und nur
  "gross", "heisst", "ausser", "draussen" ein ß tragen.

- **Kernwortschatz: 45 fehlende Grundbegriffe ergaenzt (2026-09-04).** Die
  elf Wortlisten sind unabhaengig nach Haeufigkeit der jeweiligen Sprache
  entstanden - richtig fuer sich, aber als KURSGRUNDLAGE unbrauchbar,
  solange Grundbegriffe fehlen. Gemessen mit
  `Sprachlisten/kurs/luecken_bericht.py` gegen `kernbegriffe.py`.
  * **Englisch hatte KEIN einziges Modalverb** - can, must, should, will,
    would fehlten alle. `can` ist rund das 40.-haeufigste englische Wort.
  * **hungrig und durstig** fehlten in acht von zehn Sprachen - in einer
    App fuer Reisende.
  * **heissen** fehlte in sieben. "Ich heisse ..." ist Lektion 1.
  Ergaenzt fuer sv/en/zh (`kern_ergaenzen.py`). **Fuer die uebrigen sieben
  Sprachen steht das noch aus** - der Bericht nennt sie beim Namen.

- **Wortart-Tags (`word_tags`) sind vollstaendig** (2026-09-03): alle
  6.760 Saetze in allen elf Sprachen haben Tags. Vorher war ausser Deutsch
  nirgends mehr als der Grundwortschatz getaggt, das Texteinfaerben lief
  damit fast ueberall ins Leere.

  **Erzeugt von `Sprachlisten/uebersetzen/wortarten_auto.py`**, nicht von
  Hand - 25.000 Woerter waeren sonst Wochenarbeit. Vier Regeln, in dieser
  Reihenfolge:
  1. **Personalpronomen immer** (Simons Zusatzauftrag 2026-09-03: "auch die
     Personalwoerter (wie Wo oder Jag) ueberall einfaerben, allerdings in
     lila") - feste Liste je Sprache, schlaegt alles andere.
  2. **Handarbeit gewinnt** - ein vorhandenes Tag wird nie ueberschrieben.
  3. **Eindeutiger Treffer in der Vokabeltabelle** liefert die Wortart.
  4. **Sonst gar kein Tag.** Eine falsche Farbe ist schlechter als keine.

  **Die Abdeckung schwankt stark, und das ist Sprachtypologie, kein Fehler:**
  vi 46%, en 37%, sv 33%, no/ru 30%, fr 28%, zh 26%, es 25%, it 20%,
  **pl 14%** (de 65%, weil dort auch die Master-Saetze getaggt sind).
  Der Tagger kennt nur GRUNDFORMEN. Vietnamesisch flektiert gar nicht, dort
  ist die Woerterbuchform die Satzform; Polnisch hat sieben Faelle und drei
  Geschlechter, da steht im Satz fast nie die Grundform. Mehr Abdeckung
  braucht dort einen Stemmer oder gebeugte Formen in der Vokabeltabelle -
  nicht mehr Vokabeln.

  **Zwei Fallen, beide real zugeschlagen:**
  - **Akzente NICHT abstreifen bei lateinischer Schrift.** Der erste Lauf
    tat es und machte aus italienischem `è` ("ist") das `e` ("und") - ein
    Verb als Konjunktion eingefaerbt, in jedem zweiten Satz.
    `AKZENTE_EGAL` gilt seitdem nur fuer ru und zh.
  - **Doppelrollen-Woerter sperren.** `NICHT_TAGGEN` je Sprache haelt
    Woerter heraus, die je nach Satz etwas anderes sind (it `che`/`si`,
    de `sie`, en `that`). Lieber ungefaerbt als falsch.
### Italienisch, Norwegisch, Russisch (2026-09-03, gebaut)
Auf Simons Auftrag "alles Chinesische zu Italienisch, Norwegisch und
Russisch uebersetzen" - drei Sprachen auf einen Schlag, alle 14 Kategorien.
Tabellen aus Migration `20260903120000_drei_neue_sprachen.sql`, Inhalte
ueber die vorhandene Pipeline (`Sprachlisten/uebersetzen/werkzeug.py`).

**Der Pivot ist Deutsch, nicht Chinesisch.** Die Pipeline uebersetzt immer
aus `phrasebook_master`; "alles Chinesische" hiess praktisch "der volle
Satzbestand".

**Norwegisch ist BOKMAAL** (rund 85-90% der Schreibenden, Norm jedes
Sprachkurses). `ttsLocale` sagt ausdruecklich `nb-NO`, damit die
Systemstimme nicht auf Nynorsk ausweicht.

**Russisch hat eine Lautschrift-Spalte** (`russisch_phrasebook.lautschrift`,
Simons Entscheidung) - dieselbe Rolle wie `pinyin` bei Chinesisch:
Kyrillisch ist Infrastruktur (TTS braucht es, Speechmatics gibt es
zurueck), GELERNT wird ueber die Umschrift. Sie heisst bewusst nicht
"pinyin", das ist ein chinesisches Eigenwort.
- **Deutsch gelesen, nicht wissenschaftlich**: ш=sch, ч=tsch, ж=sh, х=ch,
  в=w, з=s, ц=z, ы=y. Kein ISO 9, kein englisches BGN/PCGN.
- **Mit Betonung** (spassíba) und **mitgeschriebener Vokalreduktion** -
  unbetontes о klingt wie a, deshalb "spassíba" statt "spassibo". Wer die
  reine Buchstabenumschrift liest, klingt nach Lehrbuch.
- Ein paar Woerter schreiben sich anders, als sie klingen: что=schto,
  конечно=kanjéschna, сегодня=sewódnja, ничего=nitschewó.

**`Language.lautschriftSpalte` ersetzt das harte `lang.id === 'zh'`** in
`phrasebookContent.ts`. Eine vierte Sprache mit eigener Schrift kostet
dadurch einen Eintrag in `languages.ts`, keinen Code-Zweig. Der "Zeichen
an/aus"-Schalter und `PhraseCard` funktionieren fuer Russisch ohne eigene
Aenderung - im Browser geprueft.

**Wo Uebersetzen NICHT gereicht hat** (die Stellen, an denen eine
mechanische Uebertragung falsch bis gefaehrlich gewesen waere):
- **Notrufnummer.** "Rufen Sie bitte 120 an" traegt den CHINESISCHEN
  Rettungsdienst. Jede Sprache hat ihre eigene: **112** (Italien,
  europaeischer Notruf), **113** (Norwegen - dort gibt es KEINE
  einheitliche Nummer: 113 Rettung, 112 Polizei, 110 Feuerwehr), **103**
  (Russland, vom Handy; 112 uebergreifend). Der eine Satz im ganzen
  Bestand, bei dem eine schlampige Uebersetzung jemanden in Gefahr
  braechte.
- **"Du hast eine sehr helle Haut." ist in allen drei Sprachen ERSATZLOS
  ausgelassen.** In China ein echtes Kompliment; in Italien gilt eher
  Braeune, in Norwegen ist helle Haut der Normalfall und damit kein Lob,
  in Russland nicht gebraeuchlich. **Simon sollte das gegenlesen** - im
  Chinesischen war die Aufnahme dieses Satzes ausdruecklich seine
  Entscheidung (siehe "白 bewusst NICHT aufgenommen" weiter oben).
- **"Ich moechte westliche Medizin." / "Ist das westliche Medizin?"** -
  der Gegensatz zur TCM existiert in keinem der drei Laender, ersatzlos
  ausgelassen.
- **WeChat** gibt es nirgends: Instagram (it), Snapchat (no - unter
  Zwanzigjaehrigen mehr als Instagram), Telegram (ru). Bezahlt wird mit
  Karte, Vipps bzw. SBP.
- **Zielsprache/Zielland im Satz** ("Ich spreche ein bisschen Deutsch",
  "Bist du aus China?") - wie bei Franzoesisch durch die jeweilige
  Fassung ersetzt (`neu=True`).
- **Gruss-Zusammenfaelle** kosten nur Italienisch Saetze: "Buongiorno"
  deckt Morgen und Tag ab, "Ciao" Gruss und Abschied. Norwegisch und
  Russisch trennen beides sauber.

**Kulturhinweise sind bewusst da, wo sie dem Nutzer etwas sparen**, nicht
flaechendeckend: Norwegen siezt praktisch nicht (auch nicht zum Kunden),
russische Vergangenheitsformen richten sich nach dem Geschlecht des
SPRECHERS, italienisches Alter und Befinden laufen ueber "avere",
russisches Befinden ueber den Dativ. Dazu Praktisches: Cappuccino nach
11 Uhr, norwegisches Bier nach 20 Uhr nicht mehr im Laden, "за здоровье"
ist NICHT der uebliche russische Trinkspruch.

**Alle drei sind NICHT von Muttersprachlern geprueft** - bei Russisch
faellt das doppelt ins Gewicht, weil die Lautschrift eine zusaetzliche
Fehlerquelle ist, die niemand gegengelesen hat. Vor der Vertonung ist ein
Spot-Check sinnvoll, besonders bei den Notfall- und Sicherheitssaetzen.

**Vokabeln und Wortart-Tags sind seit dem 2026-09-03 nachgezogen** (je 500
Woerter, Tags vollstaendig - siehe die beiden Punkte am Ende des
Satzbestand-Abschnitts oben). Hier stand vorher, beides fehle; das ist
ueberholt.

**Noch NICHT gebaut fuer die drei:** die Vertonung. (Die
`answer_clusters` standen hier bis zum 2026-09-10 ebenfalls als offen -
seitdem sind sie eingespielt, siehe "Familien: gebaut 2026-09-07,
EINGESPIELT erst 2026-09-10". Der gefuehrte Kurs steht seit dem 2026-09-04
und traegt seit dem 2026-09-09 auch die A2-Stufe.) Simon hat "alles inkl. gefuehrtem Kurs"
gewaehlt - der ist der naechste grosse Brocken und ist ausdruecklich KEINE
Uebersetzung: `chineseCourse.ts` haengt an HSK-Wortschatz und daran, dass
Chinesisch nicht konjugiert. Fuer die neuen Sprachen ist das ein
Curriculum-Neuentwurf, kein Uebersetzungsauftrag.

### Vietnamesisch, Polnisch, Englisch (2026-09-03, gebaut)
Dritte Welle, direkt im Anschluss und nach demselben Muster: Tabellen aus
Migration `20260903210000_vietnamesisch_polnisch_englisch.sql`, Inhalte
ueber `Sprachlisten/uebersetzen/werkzeug.py`, Pivot wieder Deutsch.
Damit stehen **elf Sprachen** mit allen 14 Kategorien.

**KEINE Lautschrift-Spalte fuer Vietnamesisch und Polnisch**, obwohl Simon
sie ausdruecklich angeboten hat ("vietnamesisch und wenn vorhanden
polnisch koennen auch Schriftzeichen bekommen wie Chinesisch oder
Russisch"). Beide schreiben LATEINISCH: Vietnamesisch mit `quoc ngu`
(lateinische Buchstaben plus Ton- und Vokalzeichen), Polnisch mit neun
Sonderzeichen. Es gibt dort keine zweite Schrift zu verbergen - anders als
bei Hanzi und Kyrillisch, die ein Anfaenger gar nicht lesen kann. Eine
Lautschrift waere hier nicht abgebildet, sondern **erfunden**, und der
Nutzer wuerde eine Schreibweise lernen, die auf keinem Schild steht.

**Englisch ist BRITISCH**, wo es auseinandergeht (toilet/mobile/bill statt
restroom/cell phone/check), deshalb `ttsLocale: 'en-GB'`. Beide Varianten
stehen aber in den `accepted_concepts` - die Bewertung weist einen
Amerikaner nie ab.

**Englisch ist auch der ehrliche Sonderfall der ganzen App:** die
Zielgruppe spricht es meist schon. Es ist hier weniger Lernsprache als
Referenz - und der einzige Bestand, bei dem ein Muttersprachler-Check
faktisch entfaellt.

**Wo Uebersetzen nicht gereicht hat:**
- **Notrufnummer.** **113** (Vietnam - dort ebenfalls dreigeteilt: 113
  Polizei, 114 Feuerwehr, 115 Rettung), **112** (Polen und Grossbritannien,
  in GB zusaetzlich das historische 999).
- **"Ich moechte westliche Medizin." / "Ist das westliche Medizin?" und
  "Du hast eine sehr helle Haut." bleiben in VIETNAMESISCH drin** - und das
  ist der Unterschied zu it/no/ru. Vietnam kennt den Gegensatz zur
  traditionellen Medizin (`thuoc tay` gegen `thuoc nam`) genauso wie China,
  und helle Haut gilt dort ebenso als Kompliment. In Polen und
  Grossbritannien beides ersatzlos ausgelassen. Deshalb hat Vietnamesisch
  als einzige Sprache alle 584 Saetze.
- **WeChat** wird zu Zalo (vi - die vietnamesische Alltags-App, nicht
  WhatsApp), Messenger (pl - Facebook ist dort noch Standard),
  WhatsApp (en). Bezahlt wird mit Karte, BLIK bzw. kontaktlos.
- **Zielsprache/Zielland im Satz** wie gehabt durch die jeweilige Fassung
  ersetzt (`neu=True`).

**Kulturhinweise nur da, wo sie etwas sparen:** vietnamesische Anreden
richten sich nach dem ALTER des Gegenuebers (anh/chi/em statt einem
neutralen "du") - der wichtigste Hinweis der Sprache, weil man ihn nicht
umgehen kann; polnisches Siezen laeuft ueber `pan`/`pani` mit der dritten
Person, nicht ueber eine Sie-Form.

**Vietnamesisch und Polnisch sind NICHT von Muttersprachlern geprueft.**
Bei Vietnamesisch faellt das doppelt ins Gewicht: die Tonzeichen sind
bedeutungstragend, ein falsches Zeichen ist ein anderes Wort. Vor der
Vertonung Spot-Check, besonders bei den Notfallsaetzen.

- **Ausleih-System (2026-08-21/22), `mobile/src/data/geliehen.ts`.** Eine
  Kategorie zeigt zusaetzlich Situationen aus dem Grundwortschatz - weil
  niemand garantiert, dass der Nutzer den je angesehen hat. Wer direkt in
  Smalltalk springt, soll Gruessen und Bedanken dort vorfinden
  (Nutzer-Vorgabe).
  - **`verstaendigen` geht an alle elf**: ohne "Kannst du das wiederholen?"
    bricht jedes Gespraech beim ersten Missverstaendnis ab.
  - **`hoeflichkeit` nur an Smalltalk und Finding Friends** - "Danke" wird
    zwar ueberall gebraucht, steht aber eben deshalb im freien
    Grundwortschatz, den jeder hat. In dreizehn Reihen dieselben neun Saetze
    zu zeigen, machte den Katalog unleserlich.
  - **`notlage` wird gar nicht verliehen**, Health deckt Notfaelle selbst ab.
  - **Club + Nightlife leiht bewusst nichts** - die Kategorie bringt fuer
    Reinkommen, Bezahlen und Ansprechen eigene Saetze mit.
  - **Geliehene Situationen heissen je Kategorie anders** (`LEIH_NAMEN`),
    sonst begaenne jede Kategorie mit derselben Karte: aus "Sich
    verstaendigen" wird bei Health "Wenn es schnell gehen muss", bei
    Finding Friends "Wenn du etwas nicht verstehst". Nutzer-Wunsch - und
    **vor dem Kauf ist ein Hinweis vorgesehen, dass Situationen sich mit
    anderen Kategorien ueberschneiden** (noch nicht gebaut).
- Cross-Referenzierung fuer Dating/Smalltalk/Finding-Friends laut
  "Satz-Auswahl-Methodik" oben: noch nicht begonnen
- ElevenLabs-Vertonung fuer Schwedisch-Vokabular UND Phrasebook-Saetze:
  bewusst zurueckgestellt (`audio_urls`/`forms_audio` = null)
- `vertone.py` Bucket-Namens-Bug (`vocab-audio` vs. tatsaechlich
  `vocab_audio`) noch nicht gefixt

Sonstiges:
- Android-Aufnahme (siehe oben) noch nicht auf echtem Geraet verifiziert -
  betrifft das WAV-Format der Aufnahme, nicht den STT-Anbieter, gilt also
  nach dem Wechsel zu Speechmatics unveraendert weiter
- Preismodell, Buendel-Kategorien, B2B-Verkauf: alles noch offen (siehe
  Preismodell-Abschnitt)

## Wichtiger Hinweis fuer Claude Code
Vieles hier ist noch in Diskussion (Preismodell, finaler Tech-Stack,
Konversationsmodus-Kosten-Modell). Bei Unklarheiten oder wenn eine
Implementierungsentscheidung von einer dieser offenen Fragen abhaengt,
lieber nachfragen statt anzunehmen.
