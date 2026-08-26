import { useCallback, useEffect, useState } from 'react';
import { ActivityIndicator, Pressable, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { router, useFocusEffect, useLocalSearchParams } from 'expo-router';
import { useAppState } from '../../state/AppState';
import { useOnboardingState } from '../../state/OnboardingState';
import { getLanguage } from '../../data/languages';
import { CATEGORY_BY_ID } from '../../data/categories';
import { leihgeberVon, saetzeFuer } from '../../data/geliehen';
import { passtZurAnsprache } from '../../data/anrede';
import { ExerciseSentence, loadAnswerClusters, loadExerciseSentences, hilfeText } from '../../data/phrasebookContent';
import { toPhrase, phraseId } from '../../data/cheatsheetContent';
import { scenarioLabel } from '../../data/scenarios';
import { evaluateConcepts, EvaluationResult } from '../evaluation/evaluateConcepts';
import { useSttRecorder } from '../stt/useSttRecorder';
import { useSpeechmatics } from '../stt/useSpeechmatics';
import { speakText } from '../tts/speak';
import { newCard, reviewCard } from '../srs/fsrsEngine';
import { cardKey, saveCard } from '../srs/srsStorage';
import { ladeZaehler, aendereZaehler, setzeZaehler, ladeJeErreicht, markiereJeErreicht, aktiverBatchPool } from './batchLeiter';
import { Screen, PillButton, ProgressBar, SchreibenFeld, UebungsMenu } from '../../components';
import { getTheme, SPACING, RADIUS, FONT_SIZE, FONT_FAMILY, LINE_HEIGHT, ACCENT_GREEN, ACCENT_ERROR, ACCENT_ORANGE } from '../../theme/tokens';

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

// hilfeText() ist seit 2026-08-26 domaenenneutral in phrasebookContent.ts
// (ExerciseScreen.tsx nutzt sie inzwischen auch, mit anderem Anteil) -
// hier weiterhin fest 0.4 (Simons urspruengliche Vorgabe fuer Stufe 3).
function hilfeTextFuerSatz(satz: ExerciseSentence): string {
  return hilfeText(satz.pinyin ?? satz.text, 0.4);
}

export function SentenceReviewScreen() {
  const { darkMode, targetLanguageId, saved, toggleSaved, uebersprungen } = useAppState();
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
  const anzeigeName = scenario ? scenarioLabel(scenario) : katName;

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

  const [input, setInput] = useState('');
  const [transcript, setTranscript] = useState('');
  const [schreibenOffen, setSchreibenOffen] = useState(false);
  const [aufgedeckt, setAufgedeckt] = useState(false);
  // Uebersetzung anzeigen/ausblenden auf Stufe 1 (2026-08-26, Simons Wunsch:
  // "bei jedem Nachsprechesatz die Uebersetzung sehen koennen"). Nur fuer
  // Stufe 1 gedacht - bei Stufe 2 (Bedeutung zuordnen) waere ein Reveal die
  // Aufgabe selbst, bei Stufe 3 (freie Uebersetzung) die Lösung.
  const [uebersetzungSichtbar, setUebersetzungSichtbar] = useState(false);
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
    setUebersetzungSichtbar(false);
    setStufe2Gewaehlt(null);
    setStufe2Ausgewertet(null);
    if (satz && stufeVon(satz, s1, s2, kannAbfragen) === 2) {
      const selbeKategorie = sentences.filter((x) => x.id !== satz.id && x.category === satz.category);
      const pool = selbeKategorie.length >= 3 ? selbeKategorie : sentences.filter((x) => x.id !== satz.id);
      setStufe2Optionen(mischen([satz, ...mischen(pool).slice(0, 3)]));
    } else {
      setStufe2Optionen([]);
    }
  }

  /**
   * Testbereich-Sprungmarke (2026-08-26, Simons Wunsch: "einfach zu jeder
   * Stufe ein Beispiel zeigen"). Nur aktiv, wenn `debugStufe` als Query-Param
   * ankommt (von `/dev-tools/testbereich.tsx` aus). Faelscht `stufe1`/
   * `stufe2` NUR im Component-State (kein `aendereZaehler`/`setzeZaehler`,
   * also kein AsyncStorage-Schreiben - verschwindet mit dem Verlassen des
   * Screens) fuer GENAU einen festen Beispielsatz, damit die Stufe
   * unabhaengig vom echten Lernstand des Testgeraets zuverlaessig zu sehen
   * ist. Baut die Stufe-2-Optionen mit derselben Logik wie
   * `naechsteRundeVorbereiten` nach, statt sie zu duplizieren zu vermeiden -
   * hier bewusst inline, weil es nur eine feste Stufe statt einer echten
   * Zufallsauswahl braucht.
   */
  const { debugStufe } = useLocalSearchParams<{ debugStufe?: string }>();
  useEffect(() => {
    const zielStufe = Number(debugStufe) as Stufe;
    if (!debugStufe || sentences.length === 0 || ![1, 2, 3].includes(zielStufe)) return;
    const satz = [...sentences].sort((a, b) => a.id - b.id)[0];
    const key = SATZ_KEY(satz);
    const neuStufe1 = zielStufe >= 2 ? { ...stufe1, [key]: STUFE1_SCHWELLE } : stufe1;
    const neuStufe2 = zielStufe >= 3 ? { ...stufe2, [key]: STUFE2_SCHWELLE } : stufe2;
    setStufe1(neuStufe1);
    setStufe2(neuStufe2);
    setAktuellerSatz(satz);
    setInput('');
    setTranscript('');
    setFeedback(null);
    setAufgedeckt(false);
    setUebersetzungSichtbar(false);
    setStufe2Gewaehlt(null);
    setStufe2Ausgewertet(null);
    if (zielStufe === 2) {
      const selbeKategorie = sentences.filter((x) => x.id !== satz.id && x.category === satz.category);
      const pool = selbeKategorie.length >= 3 ? selbeKategorie : sentences.filter((x) => x.id !== satz.id);
      setStufe2Optionen(mischen([satz, ...mischen(pool).slice(0, 3)]));
    } else {
      setStufe2Optionen([]);
    }
    setRundeNr(1);
    setSessionRichtig(0);
    setSessionGesamt(0);
    setPhase('runde');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [debugStufe, sentences]);

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

  /** Stufe 1 (Nachsprechen) und Stufe 3 (Freie Übersetzung) - beide über evaluateConcepts. */
  function loesen(antwort: string) {
    if (!aktuellerSatz) return;
    const roh = evaluateConcepts(antwort.trim(), aktuellerSatz.accepted_concepts, clusters, aktuellerSatz.text);
    // Hilfe genutzt -> gedeckelt auf "überlebt", exakt die Regel aus
    // ExerciseScreen.tsx ("Lösung zeigen").
    const evaluation: EvaluationResult = aufgedeckt && roh.tier === 'richtig' ? { ...roh, tier: 'ueberlebt' } : roh;
    setFeedback(evaluation);

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

  function hilfeTippen() {
    if (!aktuellerSatz) return;
    setAufgedeckt(true);
    setSchreibenOffen(true);
    setInput(hilfeTextFuerSatz(aktuellerSatz));
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

      {phase === 'runde' ? (
        <View style={styles.progressSlot}>
          <ProgressBar dark={darkMode} ratio={sessionFortschritt} />
          <Text style={[styles.rundenZaehler, { color: theme.sub }]}>Runde {rundeNr} von {SESSION_RUNDEN}</Text>
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

      {phase === 'runde' && aktuellerSatz && stufe === 1 && (
        <ScrollView contentContainerStyle={styles.rundenBereich} showsVerticalScrollIndicator={false}>
          <Text style={[styles.frage, { color: theme.text }]}>Sprich diesen {sprachAdjektiv(targetLanguageId)} Satz nach</Text>
          <Text style={[styles.hinweis, { color: theme.sub }]}>{aktuellerSatz.pinyin ?? aktuellerSatz.text}</Text>
          {renderSpeichern()}
          <Pressable
            onPress={() => speakText(aktuellerSatz.text, { languageId: targetLanguageId })}
            accessibilityRole="button"
            accessibilityLabel="Vorlesen"
            style={[styles.ttsButton, { borderColor: theme.border }]}
          >
            <Text style={{ color: theme.text, fontWeight: '700', fontSize: 12 }}>▶ Vorlesen</Text>
          </Pressable>
          {/* Uebersetzung anzeigen (2026-08-26, Simons Wunsch) - nur wenn es
              ueberhaupt eine gibt (kein Ziel-ist-Deutsch-Fall, siehe
              kannAbfragen/germanGloss-Kommentar oben). Nur auf Stufe 1: bei
              Stufe 2 waere das Zeigen der Bedeutung die Aufgabe selbst, bei
              Stufe 3 die Lösung. */}
          {aktuellerSatz.germanGloss ? (
            <Pressable
              onPress={() => setUebersetzungSichtbar((v) => !v)}
              accessibilityRole="button"
              accessibilityLabel={uebersetzungSichtbar ? 'Übersetzung ausblenden' : 'Übersetzung anzeigen'}
              accessibilityState={{ expanded: uebersetzungSichtbar }}
              style={[styles.ttsButton, { borderColor: theme.border }]}
            >
              <Text style={{ color: theme.text, fontWeight: '700', fontSize: 12 }}>
                {uebersetzungSichtbar ? 'Übersetzung ausblenden' : 'Übersetzung anzeigen'}
              </Text>
            </Pressable>
          ) : null}
          {uebersetzungSichtbar && aktuellerSatz.germanGloss ? (
            <Text style={[styles.hinweis, { color: theme.sub }]}>{aktuellerSatz.germanGloss}</Text>
          ) : null}
          {renderEingabe()}
          {renderFeedback()}
          <PillButton dark={darkMode} label="Lösen" disabled={!input.trim() && !transcript || !!feedback} onPress={checkAnswer} />
        </ScrollView>
      )}

      {phase === 'runde' && aktuellerSatz && stufe === 2 && (
        <ScrollView contentContainerStyle={styles.rundenBereich} showsVerticalScrollIndicator={false}>
          <Text style={[styles.frage, { color: theme.text }]}>Ordne diesen {sprachAdjektiv(targetLanguageId)} Satz seiner Bedeutung zu</Text>
          <Text style={[styles.hinweis, { color: theme.sub }]}>{aktuellerSatz.pinyin ?? aktuellerSatz.text}</Text>
          {renderSpeichern()}
          <View style={styles.optionenSpalte}>
            {stufe2Optionen.map((o) => {
              const gewaehltHier = stufe2Gewaehlt?.id === o.id;
              const zeigeRichtig = stufe2Ausgewertet && o.id === aktuellerSatz.id;
              const zeigeFalsch = stufe2Ausgewertet === 'falsch' && gewaehltHier && !zeigeRichtig;
              return (
                <Pressable
                  key={o.id}
                  disabled={!!stufe2Ausgewertet}
                  onPress={() => stufe2OptionTippen(o)}
                  accessibilityRole="button"
                  style={[
                    styles.optionChip,
                    {
                      borderColor: zeigeRichtig ? ACCENT_GREEN : zeigeFalsch ? ACCENT_ERROR : gewaehltHier ? theme.text : theme.border,
                      backgroundColor: zeigeRichtig ? ACCENT_GREEN : zeigeFalsch ? ACCENT_ERROR : theme.subtleFill,
                    },
                  ]}
                >
                  <Text style={{ color: zeigeRichtig || zeigeFalsch ? '#FFFFFF' : theme.text, fontWeight: '600' }}>
                    {o.germanGloss ?? o.text}
                  </Text>
                </Pressable>
              );
            })}
          </View>
          <PillButton dark={darkMode} label="Lösen" disabled={!stufe2Gewaehlt || !!stufe2Ausgewertet} onPress={stufe2Loesen} />
        </ScrollView>
      )}

      {phase === 'runde' && aktuellerSatz && stufe === 3 && (
        <ScrollView contentContainerStyle={styles.rundenBereich} showsVerticalScrollIndicator={false}>
          <Text style={[styles.frage, { color: theme.text }]}>Übersetze den Satz auf {language.label}</Text>
          <Text style={[styles.hinweis, { color: theme.sub }]}>{aktuellerSatz.germanGloss ?? aktuellerSatz.text}</Text>
          {renderSpeichern()}
          {renderEingabe()}
          {!aufgedeckt ? (
            <Pressable
              onPress={hilfeTippen}
              accessibilityRole="button"
              accessibilityLabel="Hilfe"
              accessibilityHint="Zeigt einen Teil des Satzes, zählt danach höchstens als Überlebensmodus"
              style={[styles.hilfeButton, { borderColor: theme.border }]}
            >
              <Text style={{ color: theme.sub, fontWeight: '700', fontSize: 12 }}>Hilfe…</Text>
            </Pressable>
          ) : null}
          {renderFeedback()}
          <PillButton dark={darkMode} label="Lösen" disabled={(!input.trim() && !transcript) || !!feedback} onPress={checkAnswer} />
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

  function renderEingabe() {
    return (
      <View>
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
        {!!transcript && <Text style={[styles.transcript, { color: theme.text }]}>Erkannt: „{transcript}"</Text>}
        {!!recordError && <Text style={{ color: ACCENT_ERROR, fontSize: 12 }}>{recordError}</Text>}
        <SchreibenFeld dark={darkMode} offen={schreibenOffen} onToggle={() => setSchreibenOffen(true)}>
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

  function renderSpeichern() {
    return (
      <Pressable
        onPress={() => {
          if (merkPhrase) toggleSaved(merkPhrase.id, merkPhrase);
        }}
        accessibilityRole="button"
        accessibilityLabel={istGemerkt ? 'Gemerkt' : 'Speichern'}
        accessibilityHint={istGemerkt ? 'Aus den gespeicherten Sätzen entfernen' : 'Zu den gespeicherten Sätzen im Survival hinzufügen'}
        accessibilityState={{ selected: istGemerkt }}
        style={({ pressed }) => [
          styles.merken,
          { borderColor: istGemerkt ? ACCENT_GREEN : theme.border, opacity: pressed ? 0.6 : 1 },
        ]}
      >
        <Ionicons name={istGemerkt ? 'bookmark' : 'bookmark-outline'} size={16} color={istGemerkt ? ACCENT_GREEN : theme.sub} />
        <Text style={{ color: istGemerkt ? ACCENT_GREEN : theme.sub, fontWeight: '700', fontSize: 12 }}>
          {istGemerkt ? 'Gemerkt' : 'Speichern'}
        </Text>
      </Pressable>
    );
  }

  function renderFeedback() {
    if (!feedback) return null;
    const map: Record<EvaluationResult['tier'], { msg: string; color: string }> = {
      richtig: { msg: '✅ Richtig-Niveau', color: ACCENT_GREEN },
      ueberlebt: { msg: '🟡 Überlebensmodus-Niveau', color: ACCENT_ORANGE },
      nicht_verstanden: { msg: '❌ Nicht verstanden', color: ACCENT_ERROR },
    };
    return <Text style={{ color: map[feedback.tier].color, fontWeight: '700', marginTop: SPACING.sm }}>{map[feedback.tier].msg}</Text>;
  }
}

const styles = StyleSheet.create({
  header: { flexDirection: 'row', alignItems: 'center', gap: 10, paddingBottom: SPACING.sm },
  backBtn: { width: 32, height: 32, alignItems: 'center', justifyContent: 'center' },
  backGlyph: { fontSize: 26 },
  // `flex: 1` neu (2026-08-26, fuers "..."-Menue) - drueckt das Menue an
  // den rechten Rand der Kopfzeile.
  title: { fontWeight: '800', fontSize: FONT_SIZE.title, flex: 1 },
  progressSlot: { paddingVertical: SPACING.sm },
  rundenZaehler: { fontSize: FONT_SIZE.caption, textAlign: 'center', marginTop: SPACING.xs },
  center: { flex: 1, alignItems: 'center', justifyContent: 'center', gap: SPACING.md, paddingHorizontal: SPACING.xl },
  offline: { fontSize: FONT_SIZE.caption, marginBottom: SPACING.sm },
  auswahlScroll: { paddingBottom: SPACING.xxl },
  frage: { fontFamily: FONT_FAMILY.serif, fontSize: FONT_SIZE.h2, lineHeight: LINE_HEIGHT.h2, marginTop: SPACING.md },
  hinweis: { fontSize: FONT_SIZE.bodyLg, fontWeight: '700', marginTop: SPACING.md, textAlign: 'center' },
  startBox: { marginTop: SPACING.xxl, gap: SPACING.sm },
  anzahlText: { fontSize: FONT_SIZE.body },
  rundenBereich: { flexGrow: 1, paddingTop: SPACING.xl, paddingBottom: SPACING.xxl, gap: SPACING.lg },
  ttsButton: {
    alignSelf: 'center',
    borderWidth: 1.5,
    borderRadius: RADIUS.md,
    paddingVertical: SPACING.sm,
    paddingHorizontal: SPACING.lg,
  },
  hilfeButton: {
    alignSelf: 'center',
    borderWidth: 1.5,
    borderRadius: RADIUS.md,
    paddingVertical: SPACING.xs,
    paddingHorizontal: SPACING.md,
  },
  merken: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
    gap: 6,
    paddingVertical: 8,
    paddingHorizontal: 14,
    borderRadius: RADIUS.pill,
    borderWidth: 1.5,
  },
  optionenSpalte: { gap: SPACING.sm },
  optionChip: { borderWidth: 1.5, borderRadius: RADIUS.md, paddingVertical: SPACING.md, paddingHorizontal: SPACING.md },
  sttRow: { flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginTop: SPACING.md },
  micButton: { borderRadius: RADIUS.pill, paddingVertical: SPACING.sm, paddingHorizontal: SPACING.lg },
  micButtonText: { color: '#FFFFFF', fontWeight: '700' },
  transcript: { textAlign: 'center', fontSize: FONT_SIZE.caption, marginTop: SPACING.xs },
  input: { borderWidth: 1.5, borderRadius: RADIUS.md, padding: SPACING.md, minHeight: 48, fontSize: FONT_SIZE.body },
  ergebnisTitel: { fontFamily: FONT_FAMILY.serif, fontSize: FONT_SIZE.h2, lineHeight: LINE_HEIGHT.h2, textAlign: 'center' },
  ergebnisText: { fontSize: FONT_SIZE.body, textAlign: 'center' },
  ergebnisKnoepfe: { gap: SPACING.sm, marginTop: SPACING.lg, width: '100%' },
});
