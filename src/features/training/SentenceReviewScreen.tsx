import { useCallback, useEffect, useState } from 'react';
import { ActivityIndicator, Pressable, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { router, useFocusEffect, useLocalSearchParams } from 'expo-router';
import { useAppState } from '../../state/AppState';
import { useOnboardingState } from '../../state/OnboardingState';
import { getLanguage } from '../../data/languages';
import { CATEGORY_BY_ID } from '../../data/categories';
import { leihgeberVon, leihName, saetzeFuer } from '../../data/geliehen';
import { passtZurAnsprache } from '../../data/anrede';
import { ExerciseSentence, loadAnswerClusters, loadExerciseSentences } from '../../data/phrasebookContent';
import { toPhrase, phraseId } from '../../data/cheatsheetContent';
import { scenarioLabel } from '../../data/scenarios';
import { evaluateConcepts, EvaluationResult } from '../evaluation/evaluateConcepts';
import { useSttRecorder } from '../stt/useSttRecorder';
import { useSpeechmatics } from '../stt/useSpeechmatics';
import { speakSentence, stopSpeaking } from '../tts/speak';
import { newCard, reviewCard } from '../srs/fsrsEngine';
import { cardKey, saveCard } from '../srs/srsStorage';
import { merkeBesuch } from '../home/zuletztBesucht';
import { ladeZaehler, aendereZaehler, setzeZaehler, ladeJeErreicht, markiereJeErreicht, aktiverBatchPool } from './batchLeiter';
import { Screen, PillButton, ProgressBar, SchreibenFeld, UebungsMenu, SatzChip, SatzChipReihe, SatzAnzeige, SatzRahmen } from '../../components';
import { TaggedTokens } from '../../components/ColoredTokens';
import { getTheme, elevation, SPACING, RADIUS, FONT_SIZE, LINE_HEIGHT, ACCENT_GREEN, ACCENT_ERROR, ACCENT_ORANGE, WordType, schrift } from '../../theme/tokens';

// "Sätze-Wiederholung" (2026-08-26) - der zweite der drei Trainingsmodi aus
// trainingModes.ts, der einen echten Screen bekommt. Simons Stufen-Leiter
// (drei Mockups, siehe Plan): Nachsprechen -> Zuordnung -> Freie
// Übersetzung, mit derselben Batch-Mechanik wie Wörter-Wiederholung
// (`batchLeiter.ts`, hier mit BATCH_GROESSE=20 statt 50 - ein Satz kostet
// mehr Aufmerksamkeit als ein Wort-Tile).
//
// WICHTIGER UNTERSCHIED zu den Wörtern: Stufe 3 schreibt auf dieselbe
// FSRS-Karte wie Speed-Run (`ExerciseScreen.tsx`, gleicher `cardKey`) -
// Simons ausdrückliche Entscheidung, die Fragmentierung zu vermeiden, die
// bei den Wörtern (bewusst) bestehen blieb. Stufe 1+2 bleiben reine
// Ladder-Fortschaltung ohne FSRS (dort geht es um Zugang zu einer
// schwereren Übungsform, nicht um ein Erinnerungsintervall).
//
// Bewusst NICHT auf Chinesisch beschränkt (anders als die
// Wörter-Graduierungsleiter) - die Mechanik hing von Anfang an an nichts
// Chinesisch-Spezifischem (`pinyin` ist ohnehin `null` fürs Anzeigen bei
// anderen Sprachen, `text` trägt dann direkt den Satz). Einzige Anpassung
// nachträglich nötig (2026-08-26, Simons Nachfrage): die drei
// Überschriften nannten fest "chinesisch" statt `language.label`/
// `sprachAdjektiv()`, und Deutsch als Zielsprache (Stufe 2/3 würden sich
// sonst selbst übersetzen) fehlte die `kannAbfragen`-Ausnahme, die
// `ExerciseScreen.tsx` dafür schon hat - beides jetzt behoben.
//
// BEWUSST VEREINFACHT gegenüber ExerciseScreen.tsx: kein Sprach-Mismatch-
// Schutz, kein Papagei-/Kauderwelsch-Verdacht, kein Merken-Knopf, kein
// Motivations-Einschub. Das Kernprinzip (STT zuerst, Text-Fallback,
// Hilfe kostet das Richtig-Niveau, evaluateConcepts+FSRS) ist 1:1
// übernommen; die Zusatz-Diagnosen von ExerciseScreen könnten bei Bedarf
// denselben Weg hierher finden.

const STUFE1_PRAEFIX = 'satz_stufe1_v1:';
const STUFE2_PRAEFIX = 'satz_stufe2_v1:';
const JE_STUFE3_PRAEFIX = 'satz_je_stufe3_v1:';
// Kategorie/Situation (2026-08-27, Simons Wunsch: "alles aus Kategorie/
// Situation soll auch durch die drei Stufen laufen koennen, unabhaengig von
// Saetze-Wiederholung") - EIGENE Praefixe statt der SATZ_*-Praefixe oben, ein
// Satz traegt dadurch ZWEI unabhaengige Fortschritte: einen fuer die globale
// Saetze-Wiederholung, einen fuer sein Auftreten in Kategorie/Situation.
// Keine weitere Verschachtelung noetig (z.B. nach categoryId), weil jeder
// Satz genau EINER Kategorie/Situation gehoert - der Schluessel bleibt die
// Satz-ID, es gibt also keine Kollisionsgefahr zwischen Kategorien.
const KAT_STUFE1_PRAEFIX = 'kat_stufe1_v1:';
const KAT_STUFE2_PRAEFIX = 'kat_stufe2_v1:';
const KAT_JE_STUFE3_PRAEFIX = 'kat_je_stufe3_v1:';
const STUFE1_SCHWELLE = 1;
const STUFE2_SCHWELLE = 3;

const BATCH_GROESSE = 20;
const BATCH_FREISCHALT_ANTEIL = 0.9;
const SATZ_KEY = (s: ExerciseSentence) => String(s.id);

const SESSION_RUNDEN = 6;

type Stufe = 1 | 2 | 3;

// Fuer die Ueberschriften "Sprich diesen ___ Satz nach" / "Ordne diesen
// ___ Satz..." (2026-08-26, Nachtrag) - `language.label` allein passt
// grammatisch nicht ("diesen Schwedisch Satz"), es braucht die deklinierte
// Adjektivform. Reine Anzeige-Kosmetik, deshalb eine kleine feste Liste
// statt einer echten Deklinationsregel - die Sprachenliste waechst selten.
const SPRACH_ADJEKTIV: Record<string, string> = {
  de: 'deutschen',
  sv: 'schwedischen',
  es: 'spanischen',
  zh: 'chinesischen',
  fr: 'französischen',
};
function sprachAdjektiv(languageId: string): string {
  return SPRACH_ADJEKTIV[languageId] ?? languageId;
}

/**
 * Hat dieser Satz eine EIGENE Schrift neben der Lautschrift? (2026-08-30)
 *
 * Entscheidet, ob der Chip "Zeichen an/aus" ueberhaupt erscheint. Bewusst
 * aus den DATEN abgeleitet und NICHT aus einer Liste von Sprach-IDs: heute
 * trifft es nur Chinesisch zu, aber Japanisch, Koreanisch, Russisch,
 * Arabisch, Thai, Griechisch usw. bringen dieselbe Konstellation mit
 * (Schriftbild != Lautschrift), sobald sie Inhalte bekommen. Wer eine
 * solche Sprache ergaenzt, muss hier nichts anfassen - es reicht, dass die
 * Lautschrift-Spalte belegt ist.
 *
 * Die Ungleichheits-Pruefung faengt den Fall ab, dass eine Sprache mit
 * lateinischer Schrift ihre Lautschrift-Spalte mit demselben Text belegt -
 * dann waere ein Umschalter sinnlos, weil beide Zustaende gleich aussehen.
 */
function hatEigeneSchrift(satz: ExerciseSentence): boolean {
  return !!satz.pinyin && satz.pinyin !== satz.text;
}

/**
 * `kannAbfragen`: Stufe 2 (eigene Sprache waehlen) und Stufe 3 (aus dem
 * Deutschen uebersetzen) ergeben nur Sinn, wenn die Zielsprache NICHT
 * Deutsch ist - `germanGloss` ist sonst fuer jeden Satz `null` (siehe
 * `ExerciseSentence`-Typ, dieselbe Ausnahme wie `ExerciseScreen.tsx`s
 * `kannAbfragen`). Ohne diese Bedingung bliebe Deutsch-als-Zielsprache bei
 * Stufe 1 haengen, statt zwei Stufen zu zeigen, die sich selbst uebersetzen.
 */
function stufeVon(
  satz: ExerciseSentence,
  stufe1: Record<string, number>,
  stufe2: Record<string, number>,
  kannAbfragen: boolean
): Stufe {
  if (!kannAbfragen) return 1;
  if ((stufe1[SATZ_KEY(satz)] ?? 0) < STUFE1_SCHWELLE) return 1;
  if ((stufe2[SATZ_KEY(satz)] ?? 0) < STUFE2_SCHWELLE) return 2;
  return 3;
}

function mischen<T>(arr: T[]): T[] {
  const kopie = [...arr];
  for (let i = kopie.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [kopie[i], kopie[j]] = [kopie[j], kopie[i]];
  }
  return kopie;
}

/**
 * Wie viel der Loesung die Hilfe zeigt (Simon, 2026-08-30: "knapp 40%").
 *
 * **Der Anteil allein reicht dafuer nicht - es haengt an der Rundung.**
 * `hilfeText()` in phrasebookContent.ts rundet AUF; bei drei Woertern kaeme
 * damit auch aus 0.4 noch `ceil(1.2) = 2` heraus, also 67% statt der
 * gewuenschten Groessenordnung. Deshalb rechnet dieser Screen die Wortzahl
 * selbst und rundet KAUFMAENNISCH. `hilfeText()` bleibt unveraendert -
 * ExerciseScreen.tsx haengt daran und soll sich nicht mitaendern.
 *
 * Ergebnis (Anteil des Satzes, der sichtbar wird):
 *   2 Woerter -> 1 (50%)   5 -> 2 (40%)   8 -> 3 (38%)
 *   3 Woerter -> 1 (33%)   6 -> 2 (33%)
 *   4 Woerter -> 2 (50%)   7 -> 3 (43%)
 * "Talar du engelska?" zeigt damit "Talar" statt "Talar du".
 *
 * Mindestens EIN Wort, sonst waere die Hilfe bei kurzen Saetzen leer und
 * der Chip liefe ins Nichts.
 */
const HILFE_ANTEIL = 0.4;

function hilfeWortzahl(gesamt: number): number {
  return Math.max(1, Math.round(gesamt * HILFE_ANTEIL));
}

function hilfeWoerter(satz: ExerciseSentence): string[] {
  return (satz.pinyin ?? satz.text).trim().split(/\s+/).filter(Boolean);
}

function hilfeTextFuerSatz(satz: ExerciseSentence): string {
  const woerter = hilfeWoerter(satz);
  return woerter.slice(0, hilfeWortzahl(woerter.length)).join(' ');
}

/**
 * Derselbe Ausschnitt, aber als Wortart-Tokens statt als Text - damit der
 * "Farben an"-Chip auch auf der Hilfe-Zeile wirkt.
 *
 * Die Kuerzung darf hier genau so gerechnet werden wie oben, weil
 * `wordTags` gegen exakt denselben Text getaggt ist, der dort zerlegt wird:
 * bei Chinesisch das Pinyin, sonst der Zielsatz.
 */
function hilfeTokensFuerSatz(satz: ExerciseSentence): { t: string; c: WordType | null }[] {
  const roh = satz.wordTags ?? hilfeWoerter(satz).map((w) => ({ w, c: null }));
  return roh.slice(0, hilfeWortzahl(roh.length)).map((t) => ({ t: t.w, c: t.c }));
}

export function SentenceReviewScreen() {
  const { darkMode, targetLanguageId, sourceLanguageId, saved, toggleSaved, uebersprungen, wortartenFarben } = useAppState();
  const { addressing: ansprache } = useOnboardingState();
  const theme = getTheme(darkMode);
  const language = getLanguage(targetLanguageId);
  // Siehe Kommentar bei stufeVon() - Deutsch als Zielsprache hat keine
  // deutsche Uebersetzung zu sich selbst.
  const kannAbfragen = targetLanguageId !== 'de';
  const stt = useSpeechmatics();
  const recorder = useSttRecorder();

  // Kategorie/Situation-Modus (2026-08-27) - derselbe Screen, aber auf EINE
  // Kategorie (und optional eine einzelne Situation darin) eingeschraenkt,
  // aufgerufen von LessonsScreen.tsx statt von der globalen "Saetze-
  // Wiederholung"-Kachel. Ohne `categoryId` bleibt alles exakt wie bisher.
  const { categoryId, scenario } = useLocalSearchParams<{ categoryId?: string; scenario?: string }>();
  const kategorieModus = !!categoryId;
  // Eigene Zaehler-Praefixe im Kategorie-Modus (siehe Konstanten oben) - der
  // Fortschritt hier ist ausdruecklich NICHT derselbe wie in der globalen
  // Saetze-Wiederholung.
  const stufe1Praefix = kategorieModus ? KAT_STUFE1_PRAEFIX : STUFE1_PRAEFIX;
  const stufe2Praefix = kategorieModus ? KAT_STUFE2_PRAEFIX : STUFE2_PRAEFIX;
  const jeStufe3Praefix = kategorieModus ? KAT_JE_STUFE3_PRAEFIX : JE_STUFE3_PRAEFIX;
  const katName =
    categoryId === 'grundwortschatz' ? 'Grundwortschatz' : (categoryId ? CATEGORY_BY_ID[categoryId]?.name ?? categoryId : '');
  // Geliehene Situationen heissen je AUFNEHMENDER Kategorie anders (siehe
  // data/geliehen.ts): dieselbe Situation `verstaendigen` steht bei Health
  // als "Wenn es schnell gehen muss" im Pfad. Ohne diese Aufloesung stand
  // hier der Ursprungsname - man tippte "Wenn es schnell gehen muss" an und
  // landete bei "Sich verständigen". Pfad und Lektionen-Screen loesen ihn
  // laengst auf, dieser Screen war die letzte Stelle ohne.
  const anzeigeName = scenario
    ? (categoryId ? leihName(categoryId, scenario) : null) ?? scenarioLabel(scenario)
    : katName;

  const [loading, setLoading] = useState(true);
  const [loadError, setLoadError] = useState<string | null>(null);
  const [sentences, setSentences] = useState<ExerciseSentence[]>([]);
  const [clusters, setClusters] = useState<Record<string, string[]>>({});
  const [offline, setOffline] = useState(false);

  const [stufe1, setStufe1] = useState<Record<string, number>>({});
  const [stufe2, setStufe2] = useState<Record<string, number>>({});
  const [jeStufe3, setJeStufe3] = useState<Set<string>>(new Set());

  const [phase, setPhase] = useState<'auswahl' | 'runde' | 'ergebnis'>('auswahl');
  const [rundeNr, setRundeNr] = useState(1);
  const [sessionRichtig, setSessionRichtig] = useState(0);
  const [sessionGesamt, setSessionGesamt] = useState(0);

  const [aktuellerSatz, setAktuellerSatz] = useState<ExerciseSentence | null>(null);
  const [stufe2Optionen, setStufe2Optionen] = useState<ExerciseSentence[]>([]);
  const [stufe2Gewaehlt, setStufe2Gewaehlt] = useState<ExerciseSentence | null>(null);
  const [stufe2Ausgewertet, setStufe2Ausgewertet] = useState<'richtig' | 'falsch' | null>(null);
  /**
   * Hilfe auf Stufe 2 (2026-08-30): schliesst EINE falsche Antwort aus,
   * statt wie auf Stufe 1 eine Textzeile zu zeigen. Ein Satzausschnitt
   * waere hier sinnlos - der Satz steht ja gross auf dem Bildschirm, gesucht
   * ist seine Bedeutung. Der Ausschluss ist die einzige Hilfe, die zur
   * Aufgabe passt, und sie kommt ohne neuen Inhalt aus.
   *
   * Die Option wird AUSGEGRAUT, nicht entfernt - Entfernen wuerde die Liste
   * kuerzen und alles darunter verschieben (Simons Punkt 4).
   */
  const [stufe2Ausgeschlossen, setStufe2Ausgeschlossen] = useState<number | null>(null);

  const [input, setInput] = useState('');
  const [transcript, setTranscript] = useState('');
  const [schreibenOffen, setSchreibenOffen] = useState(false);
  const [aufgedeckt, setAufgedeckt] = useState(false);
  // Hilfe ein-/ausklappbar (2026-08-30, Simons Punkt 2: "klicke ich auf Hilfe
  // hätte ich gerne dass dieser Button auch bleibt und ich die Hilfe wieder
  // verschwinden lassen kann").
  //
  // BEWUSST ZWEI Zustaende, die nicht dasselbe bedeuten:
  //   `aufgedeckt`    - hat der Nutzer die Hilfe JE gesehen? Deckelt die
  //                     Bewertung auf "ueberlebt" (siehe loesen()) und wird
  //                     NIE wieder false innerhalb derselben Runde. Sonst
  //                     koennte man die Hilfe kurz aufklappen, wieder
  //                     zuklappen und sich die Deckelung wegklicken.
  //   `hilfeSichtbar` - reiner Anzeige-Zustand des Chips.
  const [hilfeSichtbar, setHilfeSichtbar] = useState(false);
  // Uebersetzung anzeigen/ausblenden auf Stufe 1 (2026-08-26, Simons Wunsch:
  // "bei jedem Nachsprechesatz die Uebersetzung sehen koennen"). Nur fuer
  // Stufe 1 gedacht - bei Stufe 2 (Bedeutung zuordnen) waere ein Reveal die
  // Aufgabe selbst, bei Stufe 3 (freie Uebersetzung) die Lösung.
  const [uebersetzungSichtbar, setUebersetzungSichtbar] = useState(false);
  // Wortarten-Farben "nur diesmal" (2026-08-30) - unabhaengig vom globalen
  // Schalter (AppState.wortartenFarben) zeigt der Hilfe-Knopf die Farben fuer
  // GENAU diesen Satz. Bewusst lokaler State statt AppState: eine "nur
  // diesmal"-Ausnahme darf keinen Neustart ueberleben und ist auch nicht mit
  // anderen Geraeten abzugleichen. Wird bei jeder neuen Runde zurueckgesetzt
  // (siehe naechsteRundeVorbereiten) - sonst bliebe sie ab dem ersten Tipp
  // fuer die ganze Sitzung an.
  const [farbenEinmalig, setFarbenEinmalig] = useState(false);
  // Zeichen an/aus (2026-08-30, Simons Stufe-1-Template) - nur sichtbar bei
  // Sprachen mit eigener Schrift neben der Lautschrift (siehe
  // hatEigeneSchrift). Startet AUS: gelernt wird ueber die Lautschrift, die
  // Zeichen sind Zugabe (CLAUDE.md, "Gelernt wird ueber PINYIN, nicht ueber
  // Zeichen"). Bleibt bewusst ueber die Runden hinweg stehen und wird NICHT
  // in naechsteRundeVorbereiten zurueckgesetzt - anders als
  // `farbenEinmalig`, das ausdruecklich eine "nur diesmal"-Geste ist. Wer
  // die Zeichen sehen will, will sie fuer die ganze Sitzung sehen.
  const [zeichenAn, setZeichenAn] = useState(false);
  const [isRecording, setIsRecording] = useState(false);
  const [isTranscribing, setIsTranscribing] = useState(false);
  const [recordError, setRecordError] = useState<string | null>(null);
  const [feedback, setFeedback] = useState<EvaluationResult | null>(null);

  useFocusEffect(
    useCallback(() => {
      setPhase('auswahl');
    }, [])
  );

  useEffect(() => {
    let cancelled = false;
    (async () => {
      setLoading(true);
      setLoadError(null);
      try {
        // Im Kategorie-Modus dieselbe Filter-Pipeline wie ExerciseScreen.tsx
        // (source='category'/'srs-kategorie'): eigene + geliehene Situationen
        // dieser Kategorie, optional auf EINE Situation eingeschraenkt,
        // Geschlechtsvarianten und dauerhaft uebersprungene Saetze raus. Ohne
        // `categoryId` bleibt es beim bisherigen "alles laden" (`[]`).
        const categoryIds = kategorieModus ? [categoryId as string, ...leihgeberVon([categoryId as string])] : [];
        const [sentencesResult, clusterData, s1, s2, je3] = await Promise.all([
          loadExerciseSentences(targetLanguageId, categoryIds),
          loadAnswerClusters(),
          ladeZaehler(stufe1Praefix, targetLanguageId),
          ladeZaehler(stufe2Praefix, targetLanguageId),
          ladeJeErreicht(jeStufe3Praefix, targetLanguageId),
        ]);
        if (cancelled) return;
        let geladen = kategorieModus
          ? saetzeFuer(categoryId as string, sentencesResult.sentences)
          : sentencesResult.sentences;
        if (kategorieModus && scenario) geladen = geladen.filter((s) => s.scenario === scenario);
        if (kategorieModus) {
          geladen = geladen.filter(
            (s) =>
              passtZurAnsprache(s.addressing, ansprache) &&
              !uebersprungen[phraseId(targetLanguageId, language.table ?? '', s.id)],
          );
        }
        setSentences(geladen);
        setOffline(sentencesResult.fromCache);
        setClusters(clusterData);
        setStufe1(s1);
        setStufe2(s2);
        setJeStufe3(je3);
      } catch (e) {
        if (!cancelled) setLoadError(e instanceof Error ? e.message : String(e));
      } finally {
        if (!cancelled) setLoading(false);
      }
    })();
    return () => {
      cancelled = true;
    };
    // `uebersprungen` bewusst NICHT in den Abhaengigkeiten - dieselbe
    // Begruendung wie in ExerciseScreen.tsx: ein Ueberspringen MITTEN in der
    // Sitzung soll die laufende Runde nicht neu laden. Gelesen wird ueber den
    // aktuellen Wert beim Sessionstart.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [targetLanguageId, kategorieModus, categoryId, scenario, stufe1Praefix, stufe2Praefix, jeStufe3Praefix, ansprache]);

  /**
   * Die vier Auswahlmoeglichkeiten fuer Stufe 2: der richtige Satz plus drei
   * Ablenker, bevorzugt aus derselben Kategorie (aehnlicher Kontext macht die
   * Aufgabe zu einer echten Unterscheidung statt zu einem Ratespiel).
   *
   * **Steht seit 2026-08-30 an EINER Stelle.** Vorher war diese Berechnung
   * doppelt vorhanden - einmal hier, einmal im `debugStufe`-Effekt - und die
   * beiden Fassungen liefen auseinander: die eine entschied anhand der
   * TATSAECHLICHEN Stufe, die andere anhand der gewuenschten. Ergebnis war
   * ein Stufe-2-Bildschirm ganz ohne Auswahl, aus dem es keinen Weg heraus
   * gab ("Lösen" bleibt ohne Auswahl gesperrt).
   */
  function stufe2OptionenFuer(satz: ExerciseSentence): ExerciseSentence[] {
    const selbeKategorie = sentences.filter((x) => x.id !== satz.id && x.category === satz.category);
    const pool = selbeKategorie.length >= 3 ? selbeKategorie : sentences.filter((x) => x.id !== satz.id);
    return mischen([satz, ...mischen(pool).slice(0, 3)]);
  }

  function naechsteRundeVorbereiten(
    s1: Record<string, number> = stufe1,
    s2: Record<string, number> = stufe2,
    je3: Set<string> = jeStufe3
  ) {
    const batch = aktiverBatchPool(sentences, SATZ_KEY, je3, BATCH_GROESSE, BATCH_FREISCHALT_ANTEIL);
    const nichtFertig = batch.filter((s) => stufeVon(s, s1, s2, kannAbfragen) !== 3);
    const kandidaten = nichtFertig.length > 0 ? nichtFertig : batch;
    const satz = mischen(kandidaten)[0];
    setAktuellerSatz(satz);
    setInput('');
    setTranscript('');
    setFeedback(null);
    setAufgedeckt(false);
    setHilfeSichtbar(false);
    setUebersetzungSichtbar(false);
    setFarbenEinmalig(false);
    setStufe2Gewaehlt(null);
    setStufe2Ausgewertet(null);
    setStufe2Ausgeschlossen(null);
    setStufe2Optionen(satz && stufeVon(satz, s1, s2, kannAbfragen) === 2 ? stufe2OptionenFuer(satz) : []);
  }

  /**
   * Testbereich-Sprungmarke (2026-08-26, Simons Wunsch: "einfach zu jeder
   * Stufe ein Beispiel zeigen"). Nur aktiv, wenn `debugStufe` als Query-Param
   * ankommt (von `/dev-tools/testbereich.tsx` aus). Faelscht `stufe1`/
   * `stufe2` NUR im Component-State (kein `aendereZaehler`/`setzeZaehler`,
   * also kein AsyncStorage-Schreiben - verschwindet mit dem Verlassen des
   * Screens) fuer GENAU einen festen Beispielsatz, damit die Stufe
   * unabhaengig vom echten Lernstand des Testgeraets zuverlaessig zu sehen
   * ist. Die Stufe-2-Optionen kommen aus `stufe2OptionenFuer()`, derselben
   * Quelle wie im echten Rundenaufbau - siehe dort, warum das keine zweite
   * Fassung mehr sein darf.
   *
   * **Erzwingt seit 2026-08-30 in BEIDE Richtungen.** Vorher hob der Sprung
   * die Zaehler nur an (`zielStufe >= 2 ? ... : stufe1` liess sie sonst
   * unberuehrt). Wer den Satz auf dem Geraet schon geuebt hatte, landete mit
   * `debugStufe=1` deshalb trotzdem auf Stufe 2 - und weil die Optionen am
   * gewuenschten statt am tatsaechlichen Wert haengen, ohne jede Auswahl.
   * "Unabhaengig vom echten Lernstand" hiess also nur "nach oben".
   */
  const { debugStufe } = useLocalSearchParams<{ debugStufe?: string }>();
  useEffect(() => {
    const zielStufe = Number(debugStufe) as Stufe;
    if (!debugStufe || sentences.length === 0 || ![1, 2, 3].includes(zielStufe)) return;
    const satz = [...sentences].sort((a, b) => a.id - b.id)[0];
    const key = SATZ_KEY(satz);
    const neuStufe1 = { ...stufe1, [key]: zielStufe >= 2 ? STUFE1_SCHWELLE : 0 };
    const neuStufe2 = { ...stufe2, [key]: zielStufe >= 3 ? STUFE2_SCHWELLE : 0 };
    setStufe1(neuStufe1);
    setStufe2(neuStufe2);
    setAktuellerSatz(satz);
    setInput('');
    setTranscript('');
    setFeedback(null);
    setAufgedeckt(false);
    setHilfeSichtbar(false);
    setUebersetzungSichtbar(false);
    setFarbenEinmalig(false);
    setStufe2Gewaehlt(null);
    setStufe2Ausgewertet(null);
    setStufe2Ausgeschlossen(null);
    // Aus der TATSAECHLICHEN Stufe abgeleitet, nicht aus `zielStufe` - die
    // beiden koennen auseinanderfallen (siehe Kommentarblock oben).
    if (stufeVon(satz, neuStufe1, neuStufe2, kannAbfragen) === 2) {
      setStufe2Optionen(stufe2OptionenFuer(satz));
    } else {
      setStufe2Optionen([]);
    }
    setRundeNr(1);
    setSessionRichtig(0);
    setSessionGesamt(0);
    setPhase('runde');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [debugStufe, sentences]);

  /**
   * Den fremdsprachigen Satz vorlesen (2026-08-30, Simons Vorgabe).
   *
   * `speakSentence` statt `speakText`: es nimmt die vorgerenderte Datei aus
   * Supabase, wenn es eine gibt, und faellt sonst auf die Systemstimme
   * zurueck. Der Screen rief bisher direkt `speakText` und haette damit jede
   * kuenftige Audiodatei ignoriert - heute faellt das nicht auf, weil noch
   * keine Sprache vertont ist (`audio_url` ist ueberall leer).
   *
   * Gesprochen wird IMMER `text`, nie die Lautschrift: bei Chinesisch ist
   * `text` das Hanzi, und nur damit spricht die Stimme Mandarin - Pinyin
   * waere fuer sie lateinischer Text (derselbe Grund wie im gefuehrten Kurs).
   */
  /** Lautschrift-Tokens des Satzes; ohne Wortart-Tags ein einzelnes Token. */
  function satzTokens(satz: ExerciseSentence) {
    return (satz.wordTags ?? [{ w: satz.pinyin ?? satz.text, c: null }]).map((t) => ({ t: t.w, c: t.c }));
  }

  function satzVorlesen(satz: ExerciseSentence) {
    speakSentence({ text: satz.text, audioUrl: satz.audioUrl }, { languageId: targetLanguageId });
  }

  /**
   * Automatisch einmal vorlesen, sobald ein neuer Satz erscheint (Simons
   * Vorgabe 2026-08-30, Duolingo-Muster) - kein eigener Vorlese-Knopf mehr.
   * Erneut hoeren geht durch Antippen des Satzes.
   *
   * **Stufe 3 ist ausgenommen, und zwar zwingend:** dort steht der DEUTSCHE
   * Satz auf dem Bildschirm und der fremdsprachige ist die gesuchte Antwort.
   * Ihn vorzulesen waere die Loesung vorzusagen.
   *
   * `rundeNr` gehoert in die Abhaengigkeiten, nicht nur die Satz-ID: sonst
   * bliebe es stumm, wenn zweimal hintereinander derselbe Satz gezogen wird.
   * `stufe` steht bewusst NICHT drin - der Wert aendert sich nach dem Loesen
   * noch einmal, was ein zweites Vorlesen mitten in der Rueckmeldung
   * ausloesen wuerde; gelesen wird er trotzdem aktuell, weil der Effekt nach
   * dem Rendern laeuft.
   */
  useEffect(() => {
    if (phase !== 'runde' || !aktuellerSatz || stufe === 3) return;
    satzVorlesen(aktuellerSatz);
    // Beim Verlassen bzw. beim naechsten Satz abbrechen, damit nicht zwei
    // Saetze uebereinander reden.
    return () => stopSpeaking();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [aktuellerSatz?.id, rundeNr, phase]);

  function rundeStarten() {
    setRundeNr(1);
    setSessionRichtig(0);
    setSessionGesamt(0);
    setPhase('runde');
    naechsteRundeVorbereiten();
  }

  /**
   * `overrides` (2026-08-26, Bugfix): `naechsteRundeVorbereiten()` faellt
   * ohne Angabe auf die `stufe1`/`stufe2`/`jeStufe3`-States aus DIESEM
   * Render zurueck - die sind aber genau dann veraltet, wenn dieselbe
   * Antwort SELBST gerade einen Zaehler ueber die Schwelle gehoben hat
   * (`aendereZaehler()` liefert den neuen Stand erst async zurueck, der
   * hier geplante `setTimeout` haelt aber schon eine FESTE Referenz auf
   * DIESE `rundeAbschliessen`-Instanz - eine spaetere `setStufe1()` erzeugt
   * zwar einen neuen Render mit neuer Instanz, aendert aber nichts mehr an
   * der bereits geplanten). Sichtbar wurde das beim allerersten Uebergang
   * Stufe 1 -> 2 eines Satzes: die Ueberschrift zeigte schon "Stufe 2"
   * (die wird frisch beim Rendern berechnet), die vier Optionen blieben
   * aber leer, weil `naechsteRundeVorbereiten()` mit dem alten `stufe1`
   * rechnete. Die Aufrufer unten kennen den neuen Stand bereits synchron
   * (aus der Antwort des Zaehler-Aufrufs) und reichen ihn hier durch -
   * kein zweiter Ladevorgang, nur die richtigen Werte zur richtigen Zeit.
   */
  function rundeAbschliessen(
    richtigDieseRunde: number,
    gesamtDieseRunde: number,
    overrides?: { s1?: Record<string, number>; s2?: Record<string, number>; je3?: Set<string> }
  ) {
    setSessionRichtig((r) => r + richtigDieseRunde);
    setSessionGesamt((g) => g + gesamtDieseRunde);
    if (rundeNr >= SESSION_RUNDEN) {
      setPhase('ergebnis');
    } else {
      setRundeNr((n) => n + 1);
      naechsteRundeVorbereiten(overrides?.s1, overrides?.s2, overrides?.je3);
    }
  }

  async function handleMicPress() {
    setRecordError(null);
    if (!isRecording) {
      try {
        await recorder.start();
        setIsRecording(true);
      } catch (e) {
        setRecordError(e instanceof Error ? e.message : String(e));
      }
      return;
    }
    setIsRecording(false);
    const uri = await recorder.stop();
    if (!uri) {
      setRecordError('Keine Aufnahme-Datei erhalten.');
      return;
    }
    setIsTranscribing(true);
    setTranscript('');
    try {
      const { text } = await stt.transcribe(uri, language.sttLanguage, aktuellerSatz?.text ?? language.sttPrompt);
      setTranscript(text);
      loesen(text);
    } catch (e) {
      setRecordError(e instanceof Error ? e.message : String(e));
    } finally {
      setIsTranscribing(false);
    }
  }

  /**
   * Wegmarkierung fuer den Kasten auf S1 (2026-08-31, Simons Wunsch: nach
   * JEDER beantworteten Karte, nicht erst am Sitzungsende).
   *
   * Bewusst nach der Bewertung und unabhaengig vom Ergebnis: auch eine
   * falsche Antwort heisst, dass man dort war. Und bewusst getrennt von
   * FSRS - siehe zuletztBesucht.ts.
   *
   * Die Kategorie kommt aus dem Aufruf, wenn es einen gibt; in der globalen
   * Saetze-Wiederholung aus dem Satz selbst.
   */
  function besuchMerken(satz: ExerciseSentence) {
    void merkeBesuch({
      languageId: targetLanguageId,
      categoryId: categoryId ?? satz.category,
      scenario: satz.scenario ?? null,
    });
  }

  /** Stufe 1 (Nachsprechen) und Stufe 3 (Freie Übersetzung) - beide über evaluateConcepts. */
  function loesen(antwort: string) {
    if (!aktuellerSatz) return;
    const roh = evaluateConcepts(antwort.trim(), aktuellerSatz.accepted_concepts, clusters, aktuellerSatz.text);
    // Hilfe genutzt -> gedeckelt auf "überlebt", exakt die Regel aus
    // ExerciseScreen.tsx ("Lösung zeigen").
    const evaluation: EvaluationResult = aufgedeckt && roh.tier === 'richtig' ? { ...roh, tier: 'ueberlebt' } : roh;
    setFeedback(evaluation);
    besuchMerken(aktuellerSatz);

    const stufe = stufeVon(aktuellerSatz, stufe1, stufe2, kannAbfragen);
    const key = SATZ_KEY(aktuellerSatz);

    if (stufe === 1) {
      // Stufe 1: Schwelle 1 reicht schon, jede Antwort außer "nicht
      // verstanden" zählt als bestanden (reine Exposition).
      //
      // `setTimeout` bewusst ERST NACH der Zaehler-Aktualisierung geplant
      // (statt parallel dazu) und mit explizitem `s1`-Override - siehe
      // Kommentar bei `rundeAbschliessen()`. Der Async-Umweg kostet auf
      // AsyncStorage/Web (localStorage darunter) praktisch nichts gegen
      // die ohnehin schon 1400ms Wartezeit fuers Feedback.
      const nichtVerstanden = evaluation.tier === 'nicht_verstanden';
      const schreiben = nichtVerstanden
        ? Promise.resolve(stufe1[key] ?? 0)
        : aendereZaehler(stufe1Praefix, targetLanguageId, key, 1, STUFE1_SCHWELLE, stufe1);
      void schreiben.then((neu) => {
        const neuStufe1 = nichtVerstanden ? stufe1 : { ...stufe1, [key]: neu };
        if (!nichtVerstanden) setStufe1(neuStufe1);
        setTimeout(() => rundeAbschliessen(nichtVerstanden ? 0 : 1, 1, { s1: neuStufe1 }), 1400);
      });
      return;
    }

    // Stufe 3: FSRS-Schreibung auf dieselbe Karte wie Speed-Run - NUR in der
    // globalen Saetze-Wiederholung (Simons Entscheidung, siehe Kommentar am
    // Dateianfang). Im Kategorie-Modus bewusst NICHT (2026-08-27, Simons
    // Wunsch: "komplett unabhaengig") - dieser Durchlauf berührt weder die
    // Faelligkeit fuer "Taegliches Wiederholen" noch die von
    // "srs-kategorie"/ExerciseScreen.tsx.
    if (language.table && !kategorieModus) {
      const fsrsKey = cardKey(targetLanguageId, language.table, aktuellerSatz.id);
      const bisherige = newCard();
      const aktualisiert = reviewCard(bisherige, evaluation.tier);
      void saveCard(fsrsKey, aktualisiert);
    }

    if (evaluation.tier === 'nicht_verstanden') {
      // Ruecksprung von Stufe 3: in der globalen Saetze-Wiederholung sanft
      // (Schwelle-1, ein Schritt zurueck). Im Kategorie-Modus haerter -
      // ganz auf 0, die komplette Stufe-2-Leiter muss neu erklommen werden
      // (2026-08-27, Simons ausdruecklicher Wunsch: "haerterer Set-Back
      // zwischen Stufe 2 und 3, aber NICHT zurueck auf Stufe 1") - Stufe 1
      // bleibt unberuehrt (`stufe1` wird hier nicht angefasst), `stufeVon()`
      // liefert also weiterhin mindestens 2, nie wieder 1.
      const neuerStand = kategorieModus ? 0 : STUFE2_SCHWELLE - 1;
      void setzeZaehler(stufe2Praefix, targetLanguageId, key, neuerStand);
      const neuStufe2 = { ...stufe2, [key]: neuerStand };
      setStufe2(neuStufe2);
      setTimeout(() => rundeAbschliessen(0, 1, { s2: neuStufe2 }), 1400);
    } else {
      setTimeout(() => rundeAbschliessen(1, 1), 1400);
    }
  }

  function stufe2OptionTippen(option: ExerciseSentence) {
    if (stufe2Ausgewertet) return;
    setStufe2Gewaehlt(option);
  }

  function stufe2Loesen() {
    if (!stufe2Gewaehlt || stufe2Ausgewertet || !aktuellerSatz) return;
    const stimmt = stufe2Gewaehlt.id === aktuellerSatz.id;
    setStufe2Ausgewertet(stimmt ? 'richtig' : 'falsch');
    besuchMerken(aktuellerSatz);
    const key = SATZ_KEY(aktuellerSatz);
    if (stimmt) {
      // Gleicher Umbau wie in loesen() (Stufe 1) - setTimeout NACH der
      // Zaehler-Aktualisierung geplant, mit explizitem Override statt
      // veralteter Closure-Defaults. Hier zusaetzlich betroffen: `jeStufe3`,
      // weil genau dieser Aufruf die Schwelle erreichen kann.
      void aendereZaehler(stufe2Praefix, targetLanguageId, key, 1, STUFE2_SCHWELLE, stufe2).then(async (neu) => {
        const neuStufe2 = { ...stufe2, [key]: neu };
        setStufe2(neuStufe2);
        let neueJe3 = jeStufe3;
        if (neu >= STUFE2_SCHWELLE && !jeStufe3.has(key)) {
          neueJe3 = new Set(jeStufe3).add(key);
          setJeStufe3(neueJe3);
          await markiereJeErreicht(jeStufe3Praefix, targetLanguageId, key);
        }
        setTimeout(() => rundeAbschliessen(1, 1, { s2: neuStufe2, je3: neueJe3 }), 900);
      });
    } else {
      setTimeout(() => rundeAbschliessen(0, 1), 900);
    }
  }

  /**
   * Stufe 3: die Hilfe fuellt einen Teil der Loesung ins Schreibfeld und
   * klappt es auf - dort IST das Tippen die Aufgabe.
   *
   * Stufe 1 (2026-08-30, Simons Punkt 3): das Schreibfeld darf sich NUR
   * ueber "Kein Sprechen möglich?" oeffnen, nie von selbst. Die Hilfe
   * schreibt deshalb nichts ins Feld und klappt es nicht auf, sondern zeigt
   * ihren Text als eigene Zeile ueber dem Satz - dieselbe Form wie die
   * Übersetzung daneben. Beide Chips verhalten sich dadurch gleich: Chip an,
   * Zeile erscheint; Chip aus, Zeile weg.
   */
  function hilfeTippen() {
    if (!aktuellerSatz) return;
    if (stufe === 2) {
      // Umschalter wie auf Stufe 1: erneutes Tippen nimmt den Ausschluss
      // zurueck. `aufgedeckt` bleibt gesetzt - gesehen ist gesehen.
      if (stufe2Ausgeschlossen !== null) {
        setStufe2Ausgeschlossen(null);
        setHilfeSichtbar(false);
        return;
      }
      const falsche = stufe2Optionen.filter((o) => o.id !== aktuellerSatz.id);
      if (falsche.length === 0) return;
      setStufe2Ausgeschlossen(mischen(falsche)[0].id);
      setHilfeSichtbar(true);
      setAufgedeckt(true);
      return;
    }
    // Stufe 1 UND 3: die Hilfe ist eine eigene Zeile im Layout, kein
    // vorgefuelltes Schreibfeld mehr (2026-08-30, Simons Punkt 3 - das Feld
    // darf sich nur ueber "Kein Sprechen möglich?" oeffnen).
    //
    // `aufgedeckt` bleibt gesetzt, auch wenn gleich wieder zugeklappt wird -
    // gesehen ist gesehen (siehe Kommentar bei der State-Deklaration). Auf
    // Stufe 3 deckelt das die Bewertung auf "ueberlebt".
    if (!hilfeSichtbar) setAufgedeckt(true);
    setHilfeSichtbar((v) => !v);
  }

  function checkAnswer() {
    loesen(input.trim() || transcript);
  }

  const stufe = aktuellerSatz ? stufeVon(aktuellerSatz, stufe1, stufe2, kannAbfragen) : 1;
  const sessionFortschritt = (rundeNr - 1) / SESSION_RUNDEN;

  // Speichern mitten in der Uebung (Simons Wunsch 2026-08-26) - exakt das
  // Muster aus ExerciseScreen.tsx: derselbe Schluessel (sprache:tabelle:id),
  // also derselbe Eintrag wie im Survival, kein zweiter. `toPhrase()` baut
  // die Standard-Karte (Lernsprache, Lautschrift/Pinyin, Uebersetzung,
  // TTS-faehig) - kein eigenes Format fuer Saetze-Wiederholung.
  const merkPhrase = aktuellerSatz && language.table ? toPhrase(targetLanguageId, language.table, scenarioLabel(aktuellerSatz.scenario), aktuellerSatz) : null;
  const istGemerkt = merkPhrase ? !!saved[merkPhrase.id] : false;

  const batchZeile = (() => {
    if (sentences.length === 0) return null;
    const sortiert = [...sentences].sort((a, b) => a.id - b.id);
    let batchIndex = 0;
    for (; (batchIndex + 1) * BATCH_GROESSE < sortiert.length; batchIndex++) {
      const batch = sortiert.slice(batchIndex * BATCH_GROESSE, (batchIndex + 1) * BATCH_GROESSE);
      const erreicht = batch.filter((s) => jeStufe3.has(SATZ_KEY(s))).length;
      if (erreicht < Math.ceil(batch.length * BATCH_FREISCHALT_ANTEIL)) break;
    }
    const inBatch = sortiert.slice(batchIndex * BATCH_GROESSE, (batchIndex + 1) * BATCH_GROESSE);
    const fertigImBatch = inBatch.filter((s) => stufeVon(s, stufe1, stufe2, kannAbfragen) === 3).length;
    const batchesGesamt = Math.ceil(sortiert.length / BATCH_GROESSE);
    return `Satz-Häppchen ${batchIndex + 1} von ${batchesGesamt} · ${fertigImBatch}/${inBatch.length} auf Stufe 3`;
  })();

  function zurueckTippen() {
    if (phase !== 'auswahl') {
      setPhase('auswahl');
      return;
    }
    router.back();
  }

  return (
    <Screen dark={darkMode}>
      <View style={styles.header}>
        <Pressable onPress={zurueckTippen} style={styles.backBtn} accessibilityRole="button" accessibilityLabel="Zurück">
          <Text style={[styles.backGlyph, { color: theme.text }]}>‹</Text>
        </Pressable>
        <Text style={[styles.title, { color: theme.text }]} numberOfLines={1}>
          {kategorieModus ? anzeigeName : 'Sätze-Wiederholung'}
        </Text>
        <UebungsMenu dark={darkMode} meldenLabel="Satz melden" />
      </View>

      {/* Sitzungs-Fortschritt (2026-08-30, Simons Punkt 1): nur der Balken,
          keine "Runde X von Y"-Zeile mehr. Der Balken sagt dasselbe, ohne
          dass man zaehlen muss - und er stand vorher ohnehin unsichtbar da:
          `ProgressBar`s Spur hat `flex: 1` und kollabiert in einem
          SPALTEN-Container auf Hoehe 0. Der Wrapper muss eine ZEILE sein,
          genau wie in PathScreen.tsx (`progressRow`).
          Die Rundenzahl bleibt fuer Screenreader als `label` erhalten - dort
          waere "17 Prozent" die schlechtere Ansage. */}
      {phase === 'runde' ? (
        <View style={styles.progressSlot}>
          <ProgressBar
            dark={darkMode}
            ratio={sessionFortschritt}
            label={`Runde ${rundeNr} von ${SESSION_RUNDEN}`}
          />
        </View>
      ) : null}

      {loading && (
        <View style={styles.center}>
          <ActivityIndicator color={theme.text} />
        </View>
      )}

      {!loading && loadError && (
        <View style={styles.center}>
          <Text style={{ color: theme.sub, textAlign: 'center' }}>{loadError}</Text>
        </View>
      )}

      {!loading && !loadError && !language.table && (
        <View style={styles.center}>
          <Text style={{ color: theme.sub, textAlign: 'center', fontSize: FONT_SIZE.body }}>
            Für {language.label} gibt es noch keine Sätze.
          </Text>
        </View>
      )}

      {!loading && !loadError && language.table && phase === 'auswahl' && (
        <ScrollView contentContainerStyle={styles.auswahlScroll}>
          {offline ? <Text style={[styles.offline, { color: theme.sub }]}>📴 Offline — letzter gespeicherter Stand</Text> : null}
          <Text style={[styles.frage, { color: theme.text }]}>
            {kategorieModus ? `Bereit für ${anzeigeName}?` : 'Bereit für ein paar Sätze?'}
          </Text>
          <View style={styles.startBox}>
            <Text style={[styles.anzahlText, { color: theme.sub }]}>{sentences.length} Sätze insgesamt</Text>
            {!kategorieModus && batchZeile ? (
              <Text style={{ color: theme.sub, fontSize: FONT_SIZE.caption, marginTop: SPACING.xs }}>{batchZeile}</Text>
            ) : null}
            {sentences.length < 1 ? (
              <Text style={{ color: theme.sub, fontSize: FONT_SIZE.caption, marginTop: SPACING.xs }}>
                {kategorieModus ? 'Für diese Auswahl gibt es noch keine Sätze.' : `Für ${language.label} sind noch keine Sätze da.`}
              </Text>
            ) : (
              <PillButton dark={darkMode} label="Los geht's" onPress={rundeStarten} />
            )}
          </View>
        </ScrollView>
      )}

      {/* ------------------------------------------------------------------
          STUFE-1-TEMPLATE (2026-08-30, Simons Vorlage - VERBINDLICH)

          Gilt als universelles Layout fuer Stufe 1 in ALLEN Sprachen, mit
          besonderem Augenmerk auf solche, die eine eigene Schrift UND eine
          Lautschrift haben (Chinesisch heute; Japanisch, Koreanisch,
          Russisch, Arabisch, Thai, Griechisch, ... sobald sie Inhalte
          bekommen - siehe hatEigeneSchrift()).

          Reihenfolge von oben nach unten, so und nicht anders:
            1. Frage ("Sprich diesen X Satz nach"), linksbuendig
            2. Chip-Reihe, umbrechend, linksbuendig:
               Übersetzung · Hilfe · Speichern · Zeichen an/aus · Farben an/aus
            3. aufgeklappte Übersetzung (nur wenn der Chip aktiv ist)
            4. der Satz, gross und mittig - bei "Zeichen an" die Schrift
               oben, die Lautschrift darunter; bei "Zeichen aus" nur die
               Lautschrift. Eingefaerbt wird IMMER NUR die Lautschrift,
               nie die Schriftzeichen (Simons Vorgabe, gilt appweit).
            5. grosses rundes Mikrofon, mittig - die Hauptaktion
            6. leise Pille "Kein Sprechen möglich?" als Ausweg zum Tippen
            7. "Weiter" unten rechts

          Chips ersetzen die frueher untereinander gestapelten Knoepfe -
          dadurch steht der Satz im Blickfeld statt unter einer Knopfleiste.
          ------------------------------------------------------------------ */}
      {phase === 'runde' && aktuellerSatz && stufe === 1 && (
        <ScrollView contentContainerStyle={styles.rundenBereich} showsVerticalScrollIndicator={false}>
          <Text style={[styles.frage, { color: theme.text }]}>Sprich diesen {sprachAdjektiv(targetLanguageId)} Satz nach</Text>

          <SatzChipReihe>
            {/* Übersetzung - nur wenn es ueberhaupt eine gibt (kein
                Ziel-ist-Deutsch-Fall, siehe kannAbfragen/germanGloss oben).
                Nur auf Stufe 1: bei Stufe 2 waere das Zeigen der Bedeutung
                die Aufgabe selbst, bei Stufe 3 die Lösung. */}
            {aktuellerSatz.germanGloss
              ? renderChip({
                  label: 'Übersetzung',
                  aktiv: uebersetzungSichtbar,
                  onPress: () => setUebersetzungSichtbar((v) => !v),
                  a11y: uebersetzungSichtbar ? 'Übersetzung ausblenden' : 'Übersetzung anzeigen',
                  expanded: uebersetzungSichtbar,
                })
              : null}
            {/* Hilfe - fuellt einen Teil des Satzes ins Schreibfeld und
                klappt es auf. Auf Stufe 1 ist der Satz zwar ohnehin
                sichtbar, aber der Chip hilft beim TIPPEN der Antwort, nicht
                beim Erraten des Satzes.
                UMSCHALTER seit 2026-08-30 (Simons Punkt 2): der Chip bleibt
                stehen und nimmt die Hilfe auf erneutes Tippen wieder weg.
                Die Bewertungs-Deckelung bleibt davon unberuehrt. */}
            {renderChip({
              label: 'Hilfe',
              aktiv: hilfeSichtbar,
              onPress: hilfeTippen,
              a11y: hilfeSichtbar ? 'Hilfe ausblenden' : 'Hilfe anzeigen',
              hint: 'Füllt einen Teil des Satzes ins Schreibfeld',
              expanded: hilfeSichtbar,
            })}
            {renderChip({
              label: istGemerkt ? 'Gemerkt' : 'Speichern',
              aktiv: istGemerkt,
              aktivFarbe: ACCENT_GREEN,
              icon: istGemerkt ? 'bookmark' : 'bookmark-outline',
              onPress: () => {
                if (merkPhrase) toggleSaved(merkPhrase.id, merkPhrase);
              },
              a11y: istGemerkt ? 'Gemerkt' : 'Speichern',
              hint: istGemerkt ? 'Aus den gespeicherten Sätzen entfernen' : 'Zu den gespeicherten Sätzen im Survival hinzufügen',
              selected: istGemerkt,
            })}
            {/* Zeichen an/aus - nur bei Sprachen mit eigener Schrift. Die
                Beschriftung nennt die AKTION, nicht den Zustand ("Zeichen
                an" = sie sind gerade aus), gleiche Regel wie im Survival. */}
            {hatEigeneSchrift(aktuellerSatz)
              ? renderChip({
                  label: zeichenAn ? 'Zeichen aus' : 'Zeichen an',
                  aktiv: zeichenAn,
                  onPress: () => setZeichenAn((v) => !v),
                  a11y: zeichenAn ? 'Schriftzeichen ausblenden' : 'Schriftzeichen anzeigen',
                  expanded: zeichenAn,
                })
              : null}
            {/* Farben an/aus - "nur diesmal", unabhaengig vom globalen
                Schalter im Profil. Entfaellt, wenn der globale Schalter
                ohnehin an ist oder der Satz keine Wortart-Tags hat. */}
            {!wortartenFarben && aktuellerSatz.wordTags
              ? renderChip({
                  label: farbenEinmalig ? 'Farben aus' : 'Farben an',
                  aktiv: farbenEinmalig,
                  onPress: () => setFarbenEinmalig((v) => !v),
                  a11y: farbenEinmalig ? 'Wortarten-Farben ausblenden' : 'Wortarten-Farben zeigen',
                  expanded: farbenEinmalig,
                })
              : null}
          </SatzChipReihe>

          {/* Fester Platz fuer Übersetzung und Hilfe (2026-08-30, Simons
              Punkt 4: "alles soll statisch bleiben").
              Beide Zeilen sind IMMER im Layout und werden nur ueber die
              Deckkraft sichtbar - haengte man sie ein und aus, ruckte alles
              darunter (Satz, Mikrofon, Knoepfe) bei jedem Tipp nach oben
              oder unten. Der Platz kostet Leerraum, aber der Screen steht
              dafuer still.
              Fuer Screenreader sind die unsichtbaren Zeilen ausgeblendet -
              reservierter Platz ist kein Inhalt. */}

          {/* Der Satz. Antippen liest ihn vor - das ersetzt den frueheren
              eigenen "▶ Vorlesen"-Knopf, den die Vorlage nicht mehr zeigt.
              TTS bleibt damit erreichbar (CLAUDE.md-Kernprinzip: Uebungs-
              Screens lesen den Ausgangssatz vor), ohne ein Bedienelement
              einzufuehren, das in Simons Layout nicht vorkommt. */}
          {/* Rahmen um Satz, Mikrofon und Schreiben-Ausweg (Simons Vorlage
              2026-08-31) - siehe SatzRahmen, warum Chips und Loesen-Knopf
              bewusst draussen bleiben. */}
          <SatzRahmen dark={darkMode}>
            <View style={styles.infoSlot}>
              {aktuellerSatz.germanGloss ? (
                <Text
                  style={[styles.uebersetzung, { color: theme.sub, opacity: uebersetzungSichtbar ? 1 : 0 }]}
                  accessibilityElementsHidden={!uebersetzungSichtbar}
                  importantForAccessibility={uebersetzungSichtbar ? 'auto' : 'no-hide-descendants'}
                >
                  {aktuellerSatz.germanGloss}
                </Text>
              ) : null}
              <Text
                style={[styles.hilfeZeile, { color: theme.sub, opacity: hilfeSichtbar ? 1 : 0 }]}
                accessibilityElementsHidden={!hilfeSichtbar}
                importantForAccessibility={hilfeSichtbar ? 'auto' : 'no-hide-descendants'}
              >
                {hilfeTextFuerSatz(aktuellerSatz)}
              </Text>
            </View>
            <SatzAnzeige
              dark={darkMode}
              schriftzeichen={hatEigeneSchrift(aktuellerSatz) ? aktuellerSatz.text : null}
              zeichenSichtbar={zeichenAn}
              tokens={satzTokens(aktuellerSatz)}
              farbenAn={wortartenFarben || farbenEinmalig}
              onPress={() => satzVorlesen(aktuellerSatz)}
              a11y={`Vorlesen: ${aktuellerSatz.text}`}
            />
            {renderEingabe(true)}
          </SatzRahmen>
          {renderFeedback(true)}

          <View style={styles.weiterZeile}>
            <Pressable
              onPress={checkAnswer}
              disabled={(!input.trim() && !transcript) || !!feedback}
              accessibilityRole="button"
              accessibilityLabel="Weiter"
              accessibilityState={{ disabled: (!input.trim() && !transcript) || !!feedback }}
              style={({ pressed }) => {
                const gesperrt = (!input.trim() && !transcript) || !!feedback;
                return [
                  styles.weiterKnopf,
                  // Gesperrt liegt der Knopf FLACH auf der Seite - ein
                  // schwebender Knopf, der nichts tut, ist ein Widerspruch.
                  // Die Erhebung kommt erst, wenn er bedienbar wird.
                  gesperrt ? null : elevation(darkMode, 'chip'),
                  {
                    borderColor: 'transparent',
                    backgroundColor: theme.subtleFill,
                    opacity: gesperrt ? 0.4 : pressed ? 0.75 : 1,
                    transform: [{ translateY: !gesperrt && pressed ? 1 : 0 }],
                  },
                ];
              }}
            >
              <Text style={{ color: theme.text, ...schrift('700'), fontSize: FONT_SIZE.caption }}>▶ Weiter</Text>
            </Pressable>
          </View>
        </ScrollView>
      )}

      {phase === 'runde' && aktuellerSatz && stufe === 2 && (
        <ScrollView contentContainerStyle={styles.rundenBereich} showsVerticalScrollIndicator={false}>
          <Text style={[styles.frage, { color: theme.text }]}>Ordne diesen {sprachAdjektiv(targetLanguageId)} Satz seiner Bedeutung zu</Text>

          {/* Chip-Reihe wie auf Stufe 1 (2026-08-30, Simons zweite Vorlage) -
              dieselben Bausteine, dieselbe mittige Anordnung, dieselben
              Beschriftungs-Regeln.
              ZWEI Unterschiede, beide zwingend aus der Aufgabe:
              - KEIN "Übersetzung"-Chip. Die Bedeutung zu finden IST hier die
                Aufgabe; sie anzuzeigen waere die Loesung.
              - "Hilfe" schliesst eine falsche Antwort aus, statt eine
                Textzeile zu zeigen (siehe stufe2Ausgeschlossen). */}
          <SatzChipReihe>
            {hatEigeneSchrift(aktuellerSatz)
              ? renderChip({
                  label: zeichenAn ? 'Zeichen aus' : 'Zeichen an',
                  aktiv: zeichenAn,
                  onPress: () => setZeichenAn((v) => !v),
                  a11y: zeichenAn ? 'Schriftzeichen ausblenden' : 'Schriftzeichen anzeigen',
                  expanded: zeichenAn,
                })
              : null}
            {!wortartenFarben && aktuellerSatz.wordTags
              ? renderChip({
                  label: farbenEinmalig ? 'Farben aus' : 'Farben an',
                  aktiv: farbenEinmalig,
                  onPress: () => setFarbenEinmalig((v) => !v),
                  a11y: farbenEinmalig ? 'Wortarten-Farben ausblenden' : 'Wortarten-Farben zeigen',
                  expanded: farbenEinmalig,
                })
              : null}
            {renderChip({
              label: 'Hilfe',
              aktiv: stufe2Ausgeschlossen !== null,
              // Nach dem Auswerten nuetzt der Ausschluss nichts mehr.
              onPress: stufe2Ausgewertet ? () => {} : hilfeTippen,
              a11y: stufe2Ausgeschlossen !== null ? 'Hilfe zurücknehmen' : 'Hilfe anzeigen',
              hint: 'Schließt eine falsche Antwort aus',
              expanded: stufe2Ausgeschlossen !== null,
            })}
            {renderChip({
              label: istGemerkt ? 'Gemerkt' : 'Speichern',
              aktiv: istGemerkt,
              aktivFarbe: ACCENT_GREEN,
              icon: istGemerkt ? 'bookmark' : 'bookmark-outline',
              onPress: () => {
                if (merkPhrase) toggleSaved(merkPhrase.id, merkPhrase);
              },
              a11y: istGemerkt ? 'Gemerkt' : 'Speichern',
              hint: istGemerkt ? 'Aus den gespeicherten Sätzen entfernen' : 'Zu den gespeicherten Sätzen im Survival hinzufügen',
              selected: istGemerkt,
            })}
          </SatzChipReihe>

          {/* Der Satz - gleicher Aufbau wie Stufe 1: Schriftzeichen oben
              (immer im Layout, nur durchsichtig geschaltet, damit "Zeichen
              an/aus" nichts verschiebt), Lautschrift darunter in konstanter
              Groesse. Schriftzeichen werden nie eingefaerbt. */}
          <SatzAnzeige
            dark={darkMode}
            schriftzeichen={hatEigeneSchrift(aktuellerSatz) ? aktuellerSatz.text : null}
            zeichenSichtbar={zeichenAn}
            tokens={satzTokens(aktuellerSatz)}
            farbenAn={wortartenFarben || farbenEinmalig}
            onPress={() => satzVorlesen(aktuellerSatz)}
            a11y={`Vorlesen: ${aktuellerSatz.text}`}
          />

          <View style={styles.optionenSpalte}>
            {stufe2Optionen.map((o) => {
              const gewaehltHier = stufe2Gewaehlt?.id === o.id;
              const zeigeRichtig = stufe2Ausgewertet && o.id === aktuellerSatz.id;
              const zeigeFalsch = stufe2Ausgewertet === 'falsch' && gewaehltHier && !zeigeRichtig;
              // Per Hilfe ausgeschlossen: bleibt STEHEN und wird nur blass
              // und untippbar. Herausnehmen wuerde die Liste kuerzen und
              // alles darunter verschieben (Simons Punkt 4).
              const ausgeschlossen = stufe2Ausgeschlossen === o.id && !stufe2Ausgewertet;
              return (
                <Pressable
                  key={o.id}
                  disabled={!!stufe2Ausgewertet || ausgeschlossen}
                  onPress={() => stufe2OptionTippen(o)}
                  accessibilityRole="button"
                  accessibilityState={{ disabled: ausgeschlossen, selected: gewaehltHier }}
                  accessibilityHint={ausgeschlossen ? 'Durch die Hilfe ausgeschlossen' : undefined}
                  style={[
                    styles.optionChip,
                    {
                      borderColor: zeigeRichtig ? ACCENT_GREEN : zeigeFalsch ? ACCENT_ERROR : gewaehltHier ? theme.text : theme.border,
                      backgroundColor: zeigeRichtig ? ACCENT_GREEN : zeigeFalsch ? ACCENT_ERROR : theme.subtleFill,
                      opacity: ausgeschlossen ? 0.35 : 1,
                    },
                  ]}
                >
                  <Text
                    style={{
                      color: zeigeRichtig || zeigeFalsch ? '#FFFFFF' : theme.text,
                      ...schrift('600'),
                      textDecorationLine: ausgeschlossen ? 'line-through' : 'none',
                    }}
                  >
                    {o.germanGloss ?? o.text}
                  </Text>
                </Pressable>
              );
            })}
          </View>
          {/* Notausgang (2026-08-30): ohne Auswahlmoeglichkeiten bleibt
              "Lösen" dauerhaft gesperrt - der Bildschirm waere eine
              Sackgasse, aus der nur der Zurueck-Pfeil fuehrt. Die Ursache
              dafuer ist behoben (siehe stufe2OptionenFuer), aber ein
              Bildschirm, den man nicht verlassen kann, ist ein zu teurer
              Fehler, um sich allein auf die Ursache zu verlassen. */}
          {stufe2Optionen.length === 0 ? (
            <PillButton dark={darkMode} label="Weiter" onPress={() => rundeAbschliessen(0, 0)} />
          ) : (
            <PillButton dark={darkMode} label="Lösen" disabled={!stufe2Gewaehlt || !!stufe2Ausgewertet} onPress={stufe2Loesen} />
          )}
        </ScrollView>
      )}

      {phase === 'runde' && aktuellerSatz && stufe === 3 && (
        <ScrollView contentContainerStyle={styles.rundenBereich} showsVerticalScrollIndicator={false}>
          {/* Stufe-3-Template (2026-08-30, Simons Vorlage). Gilt AUSDRUECKLICH
              fuer alle Sprachen gleich - anders als Stufe 1 und 2 gibt es
              hier keine zweite Fassung fuer Schriftsprachen, weil der
              angezeigte Satz die AUSGANGSSPRACHE ist. Es gibt also nichts
              umzuschalten und entsprechend keinen "Zeichen"-Chip. */}
          <Text style={[styles.frage, { color: theme.text }]}>
            Übersetze und sprich diesen {sprachAdjektiv(sourceLanguageId)} Satz auf {language.label} aus
          </Text>

          <SatzChipReihe>
            {/* "Farben an" faerbt hier die HILFE-Zeile, nicht den Satz: der
                angezeigte Satz ist die Ausgangssprache und hat keine
                Wortart-Daten (`word_tags` gehoert immer zum Zielsatz). Der
                Chip steht trotzdem immer da - ihn nur mit der Hilfe
                einzublenden wuerde das Layout verschieben. */}
            {!wortartenFarben && aktuellerSatz.wordTags
              ? renderChip({
                  label: farbenEinmalig ? 'Farben aus' : 'Farben an',
                  aktiv: farbenEinmalig,
                  onPress: () => setFarbenEinmalig((v) => !v),
                  a11y: farbenEinmalig ? 'Wortarten-Farben ausblenden' : 'Wortarten-Farben zeigen',
                  expanded: farbenEinmalig,
                })
              : null}
            {renderChip({
              label: 'Hilfe',
              aktiv: hilfeSichtbar,
              onPress: hilfeTippen,
              a11y: hilfeSichtbar ? 'Hilfe ausblenden' : 'Hilfe anzeigen',
              hint: 'Zeigt die halbe Lösung, zählt danach höchstens als Überlebensmodus',
              expanded: hilfeSichtbar,
            })}
            {renderChip({
              label: istGemerkt ? 'Gemerkt' : 'Speichern',
              aktiv: istGemerkt,
              aktivFarbe: ACCENT_GREEN,
              icon: istGemerkt ? 'bookmark' : 'bookmark-outline',
              onPress: () => {
                if (merkPhrase) toggleSaved(merkPhrase.id, merkPhrase);
              },
              a11y: istGemerkt ? 'Gemerkt' : 'Speichern',
              hint: istGemerkt ? 'Aus den gespeicherten Sätzen entfernen' : 'Zu den gespeicherten Sätzen im Survival hinzufügen',
              selected: istGemerkt,
            })}
          </SatzChipReihe>

          {/* Reservierte Hilfe-Zeile - immer im Layout, nur durchsichtig
              geschaltet (Simons Punkt 4). */}

          {/* Der Ausgangssatz - gross und mittig wie der Zielsatz auf Stufe 1
              und 2, aber NICHT antippbar: Vorlesen wuerde hier entweder die
              Ausgangssprache wiederholen (nutzlos) oder die Loesung
              verraten. */}
          {/* Kein `schriftzeichen` und nicht antippbar: hier steht die
              AUSGANGSsprache, es gibt nichts umzuschalten und nichts
              vorzulesen, was nicht die Loesung verriete. */}
          <SatzRahmen dark={darkMode}>
            <View style={styles.infoSlot}>
              <View
                style={{ opacity: hilfeSichtbar ? 1 : 0 }}
                accessibilityElementsHidden={!hilfeSichtbar}
                importantForAccessibility={hilfeSichtbar ? 'auto' : 'no-hide-descendants'}
              >
                <TaggedTokens
                  style={styles.hilfeZeile}
                  textColor={theme.sub}
                  showColors={wortartenFarben || farbenEinmalig}
                  tokens={hilfeTokensFuerSatz(aktuellerSatz)}
                />
              </View>
            </View>
            <SatzAnzeige
              dark={darkMode}
              tokens={[{ t: aktuellerSatz.germanGloss ?? aktuellerSatz.text, c: null }]}
              farbenAn={false}
            />
            {renderEingabe(true)}
          </SatzRahmen>
          {renderFeedback(true)}

          <View style={styles.weiterZeile}>
            <Pressable
              onPress={checkAnswer}
              disabled={(!input.trim() && !transcript) || !!feedback}
              accessibilityRole="button"
              accessibilityLabel="Lösen"
              accessibilityState={{ disabled: (!input.trim() && !transcript) || !!feedback }}
              style={({ pressed }) => {
                const gesperrt = (!input.trim() && !transcript) || !!feedback;
                return [
                  styles.weiterKnopf,
                  gesperrt ? null : elevation(darkMode, 'chip'),
                  {
                    borderColor: 'transparent',
                    backgroundColor: theme.subtleFill,
                    opacity: gesperrt ? 0.4 : pressed ? 0.75 : 1,
                    transform: [{ translateY: !gesperrt && pressed ? 1 : 0 }],
                  },
                ];
              }}
            >
              <Text style={{ color: theme.text, ...schrift('700'), fontSize: FONT_SIZE.caption }}>› Lösen</Text>
            </Pressable>
          </View>
        </ScrollView>
      )}

      {phase === 'ergebnis' && (
        <View style={styles.center}>
          <Text style={[styles.ergebnisTitel, { color: theme.text }]}>Sätze geschafft! 🎉</Text>
          <Text style={[styles.ergebnisText, { color: theme.sub }]}>
            {SESSION_RUNDEN} Runden · {sessionRichtig} von {sessionGesamt} richtig
          </Text>
          <View style={styles.ergebnisKnoepfe}>
            <PillButton dark={darkMode} label="Nochmal" onPress={rundeStarten} />
            <PillButton dark={darkMode} variant="secondary" label="Andere Auswahl" onPress={() => setPhase('auswahl')} />
          </View>
        </View>
      )}
    </Screen>
  );

  /**
   * Ein Chip der Stufe-1-Knopfreihe (2026-08-30, Simons Template). Alle
   * Chips sehen gleich aus und unterscheiden sich nur in Beschriftung,
   * Symbol und "aktiv"-Zustand - deshalb EIN Helfer statt fuenf fast
   * gleicher Pressables.
   */
  /**
   * Duenne Huelle um `SatzChip` (components/SatzTemplate.tsx) - reicht nur
   * `darkMode` durch, damit die rund zwoelf Aufrufer im Screen kurz bleiben.
   * Das Aussehen liegt seit 2026-08-31 in der geteilten Komponente, weil der
   * gefuehrte Kurs dieselben Chips braucht.
   */
  function renderChip(p: {
    label: string;
    aktiv: boolean;
    onPress: () => void;
    a11y: string;
    hint?: string;
    icon?: 'bookmark' | 'bookmark-outline';
    aktivFarbe?: string;
    expanded?: boolean;
    selected?: boolean;
  }) {
    return <SatzChip key={p.label} dark={darkMode} {...p} />;
  }

  /**
   * Eingabe-Block. Auf Stufe 1 (Simons Template 2026-08-30) ist das
   * Mikrofon ein GROSSER RUNDER Knopf in der Mitte und das Schreibfeld
   * eine leise Pille darunter; auf Stufe 3 bleibt es bei der bisherigen
   * schmalen Pillen-Zeile samt "Schreiben"-Balken. Beide Wege teilen sich
   * denselben Aufnahme- und Auswertungs-Code - nur die Form unterscheidet
   * sich, nicht das Verhalten.
   */
  function renderEingabe(gross = false) {
    return (
      <View>
        {gross ? (
          <View style={styles.micGrossZeile}>
            {stt.status === 'ready' ? (
              <Pressable
                onPress={handleMicPress}
                accessibilityRole="button"
                accessibilityLabel={isRecording ? 'Aufnahme stoppen' : isTranscribing ? 'Wird ausgewertet' : 'Antwort einsprechen'}
                accessibilityState={{ busy: isTranscribing, disabled: isTranscribing }}
                style={({ pressed }) => [
                  styles.micGross,
                  {
                    backgroundColor: isRecording ? ACCENT_ERROR : theme.subtleFill,
                    borderColor: isRecording ? ACCENT_ERROR : theme.border,
                    opacity: pressed ? 0.7 : 1,
                  },
                ]}
              >
                {isTranscribing ? (
                  <ActivityIndicator color={theme.text} />
                ) : (
                  <Ionicons name="mic" size={30} color={isRecording ? '#FFFFFF' : theme.text} />
                )}
              </Pressable>
            ) : (
              <Text style={{ color: theme.sub, fontSize: FONT_SIZE.caption, textAlign: 'center' }}>
                Spracherkennung nicht verfügbar - bitte Text eingeben.
              </Text>
            )}
          </View>
        ) : (
          <View style={styles.sttRow}>
            {stt.status === 'ready' ? (
              <Pressable
                onPress={handleMicPress}
                accessibilityRole="button"
                accessibilityLabel={isRecording ? 'Aufnahme stoppen' : isTranscribing ? 'Wird ausgewertet' : 'Antwort einsprechen'}
                accessibilityState={{ busy: isTranscribing, disabled: isTranscribing }}
                style={[styles.micButton, { backgroundColor: isRecording ? ACCENT_ERROR : ACCENT_ORANGE }]}
              >
                <Text style={styles.micButtonText}>
                  {isRecording ? '● Aufnahme stoppen' : isTranscribing ? '…' : '🎙 Antwort einsprechen'}
                </Text>
              </Pressable>
            ) : (
              <Text style={{ color: theme.sub, fontSize: 12 }}>Spracherkennung nicht verfügbar - bitte Text eingeben.</Text>
            )}
            {isTranscribing && <ActivityIndicator color={theme.text} style={{ marginLeft: 8 }} />}
          </View>
        )}
        {/* Im grossen Template haelt die Erkannt-Zeile ihren Platz frei
            (Simons Punkt 4), sonst springt beim Auswerten alles darunter.
            `numberOfLines={1}` haelt die reservierte Hoehe konstant, auch
            wenn ein langes Transkript zurueckkommt. */}
        {gross ? (
          <Text
            numberOfLines={1}
            style={[styles.transcript, { color: transcript ? theme.text : 'transparent' }]}
            accessibilityElementsHidden={!transcript}
            importantForAccessibility={transcript ? 'auto' : 'no-hide-descendants'}
          >
            {transcript ? `Erkannt: „${transcript}"` : ' '}
          </Text>
        ) : (
          !!transcript && <Text style={[styles.transcript, { color: theme.text }]}>Erkannt: „{transcript}"</Text>
        )}
        {!!recordError && <Text style={{ color: ACCENT_ERROR, fontSize: 12 }}>{recordError}</Text>}
        <SchreibenFeld
          dark={darkMode}
          offen={schreibenOffen}
          onToggle={() => setSchreibenOffen(true)}
          label={gross ? 'Kein Sprechen möglich?' : 'Schreiben'}
          variant={gross ? 'pille' : 'balken'}
        >
          <TextInput
            value={input}
            onChangeText={setInput}
            placeholder="Deine Antwort"
            placeholderTextColor={theme.sub}
            multiline
            style={[styles.input, { color: theme.text, borderColor: theme.border, backgroundColor: theme.cardBg }]}
          />
        </SchreibenFeld>
      </View>
    );
  }

  /**
   * `platzHalten` (2026-08-30, Simons Punkt 4): im Stufe-1-Template steht
   * die Zeile immer im Layout und wird nur durchsichtig, damit der
   * "Weiter"-Knopf beim Auswerten nicht nach unten springt. Die anderen
   * Stufen haengen sie weiterhin ein und aus - dort sitzt der Knopf am Ende
   * einer ohnehin waschsenden Liste, ein reservierter Streifen waere dort
   * nur Leerraum.
   */
  function renderFeedback(platzHalten = false) {
    if (!feedback && !platzHalten) return null;
    const map: Record<EvaluationResult['tier'], { msg: string; color: string }> = {
      richtig: { msg: '✅ Richtig-Niveau', color: ACCENT_GREEN },
      ueberlebt: { msg: '🟡 Überlebensmodus-Niveau', color: ACCENT_ORANGE },
      nicht_verstanden: { msg: '❌ Nicht verstanden', color: ACCENT_ERROR },
    };
    const eintrag = feedback ? map[feedback.tier] : null;
    return (
      <Text
        style={{
          color: eintrag?.color ?? 'transparent',
          ...schrift('700'),
          marginTop: SPACING.sm,
          textAlign: 'center',
        }}
        accessibilityElementsHidden={!eintrag}
        importantForAccessibility={eintrag ? 'auto' : 'no-hide-descendants'}
      >
        {/* Ohne Urteil ein Platzhalter in derselben Zeilenhoehe - der Text
            ist durchsichtig, die Zeile aber vorhanden. */}
        {eintrag?.msg ?? ' '}
      </Text>
    );
  }
}

const styles = StyleSheet.create({
  header: { flexDirection: 'row', alignItems: 'center', gap: 10, paddingBottom: SPACING.sm },
  backBtn: { width: 32, height: 32, alignItems: 'center', justifyContent: 'center' },
  backGlyph: { fontSize: 26 },
  // `flex: 1` neu (2026-08-26, fuers "..."-Menue) - drueckt das Menue an
  // den rechten Rand der Kopfzeile.
  title: { ...schrift('800'), fontSize: FONT_SIZE.title, flex: 1 },
  // ZEILE, nicht Spalte - siehe Kommentar an der Verwendung: `ProgressBar`
  // traegt `flex: 1` und braeuchte in einer Spalte freien Platz, den es hier
  // nicht gibt.
  progressSlot: { flexDirection: 'row', alignItems: 'center', paddingVertical: SPACING.sm },
  center: { flex: 1, alignItems: 'center', justifyContent: 'center', gap: SPACING.md, paddingHorizontal: SPACING.xl },
  offline: { fontSize: FONT_SIZE.caption, marginBottom: SPACING.sm },
  auswahlScroll: { paddingBottom: SPACING.xxl },
  // Bold statt Serife (2026-09-01): die Aufgabenfrage ist ein voller Satz
  // ("Sprich diesen ... Satz nach") - ExtraBold waere fuer eine ganze Zeile
  // Fliesstext lauter, als eine Frage sein sollte. Dieselbe Gewichtung wie
  // der Zielsatz selbst (`SatzAnzeige` in `SatzTemplate.tsx`, ebenfalls 700).
  frage: { ...schrift('700'), fontSize: FONT_SIZE.h2, lineHeight: LINE_HEIGHT.h2, marginTop: SPACING.md },
  hinweis: { fontSize: FONT_SIZE.bodyLg, ...schrift('700'), marginTop: SPACING.md, textAlign: 'center' },
  // `farbenHilfe`/`farbenHilfeText` sind mit dem Chip-Umbau von Stufe 1 und 2
  // (2026-08-30) weggefallen - der Textlink "Wortarten-Farben zeigen" ist
  // jetzt ein Chip wie die anderen.
  // --- Template Stufe 1 UND 2 (2026-08-30, Simons Vorlagen) ----------------
  // Chip-Reihe: umbrechend und MITTIG (2026-08-30, Simons Vorlage).
  //
  // Mit fuenf Chips (Chinesisch) ist der Umbruch der Normalfall, nicht die
  // Ausnahme - und eine angebrochene zweite Reihe sah linksbuendig aus wie
  // ein Rest, der uebrig geblieben ist. Zentriert bilden die ein bis zwei
  // uebrigen Chips eine eigene, bewusst gesetzte Zeile.
  //
  // Die Zentrierung gilt technisch fuer JEDE Reihe; bei einer vollen ersten
  // Reihe sieht man davon nichts, weil sie die Breite ohnehin ausfuellt.
  // Deshalb braucht es keine Sonderbehandlung fuer "letzte Reihe" - die es
  // in Flexbox ohne eigenes Nachmessen auch gar nicht gaebe.
  //
  // Passt ausserdem zum Rest des Templates: Satz, Mikrofon und Schreib-Pille
  // stehen ebenfalls mittig. Nur die Frage darueber bleibt linksbuendig.
  // Eigener Container OHNE `gap` - `rundenBereich` setzt eins, das sonst
  // auch zwischen den beiden reservierten Zeilen laege und den Leerraum
  // verdoppelte.
  //
  // `marginTop` zusaetzlich zum gap der Elternliste (2026-08-30, Simons
  // Wunsch: die Übersetzung stand zu dicht unter den Chips). Wirkt IMMER,
  // nicht nur wenn die Zeile sichtbar ist - der Slot ist ja dauerhaft im
  // Layout (siehe Punkt 4), der Abstand bleibt dadurch konstant und
  // verschiebt beim Umschalten weiterhin nichts.
  infoSlot: { alignItems: 'center', marginTop: SPACING.md },
  uebersetzung: { fontSize: FONT_SIZE.body, lineHeight: LINE_HEIGHT.body, textAlign: 'center' },
  hilfeZeile: { fontSize: FONT_SIZE.body, lineHeight: LINE_HEIGHT.body, textAlign: 'center', fontStyle: 'italic' },
  // Der Satz ist das Herzstueck der Seite und bekommt deshalb die
  // Ueberschriften-Groesse, nicht die Fliesstext-Groesse wie vorher.
  // Schriftzeichen-Zeile: GLEICHE Groesse wie die Lautschrift darunter.
  // Eine kleinere Lautschrift bei "Zeichen an" haette den Satz beim
  // Umschalten die Hoehe wechseln lassen (Simons Punkt 4).
  micGrossZeile: { alignItems: 'center', marginBottom: SPACING.md },
  micGross: {
    width: 76,
    height: 76,
    borderRadius: 38,
    borderWidth: 1.5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  weiterZeile: { flexDirection: 'row', justifyContent: 'flex-end' },
  weiterKnopf: {
    borderWidth: 1.5,
    borderRadius: RADIUS.pill,
    paddingVertical: SPACING.sm,
    paddingHorizontal: SPACING.lg,
  },
  // ------------------------------------------------------------------------
  startBox: { marginTop: SPACING.xxl, gap: SPACING.sm },
  anzahlText: { fontSize: FONT_SIZE.body },
  rundenBereich: { flexGrow: 1, paddingTop: SPACING.xl, paddingBottom: SPACING.xxl, gap: SPACING.lg },
  // `ttsButton`, `hilfeButton` und `merken` sind mit den drei Vorlagen vom
  // 2026-08-30 weggefallen: Vorlesen laeuft ueber den Satz selbst, Hilfe und
  // Speichern sind Chips wie alles andere.
  optionenSpalte: { gap: SPACING.sm },
  optionChip: { borderWidth: 1.5, borderRadius: RADIUS.md, paddingVertical: SPACING.md, paddingHorizontal: SPACING.md },
  sttRow: { flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginTop: SPACING.md },
  micButton: { borderRadius: RADIUS.pill, paddingVertical: SPACING.sm, paddingHorizontal: SPACING.lg },
  micButtonText: { color: '#FFFFFF', ...schrift('700') },
  transcript: { textAlign: 'center', fontSize: FONT_SIZE.caption, marginTop: SPACING.xs },
  input: { borderWidth: 1.5, borderRadius: RADIUS.md, padding: SPACING.md, minHeight: 48, fontSize: FONT_SIZE.body },
  // ExtraBold statt Serife: "Sätze geschafft! 🎉" ist eine Feier-Ueberschrift.
  ergebnisTitel: { ...schrift('800'), fontSize: FONT_SIZE.h2, lineHeight: LINE_HEIGHT.h2, textAlign: 'center' },
  ergebnisText: { fontSize: FONT_SIZE.body, textAlign: 'center' },
  ergebnisKnoepfe: { gap: SPACING.sm, marginTop: SPACING.lg, width: '100%' },
});
