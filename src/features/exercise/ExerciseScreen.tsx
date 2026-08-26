import { useEffect, useRef, useState } from 'react';
import { ActivityIndicator, Pressable, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { router } from 'expo-router';
import { File } from 'expo-file-system';
import { State, type Card } from 'ts-fsrs';
import { useAppState } from '../../state/AppState';
import { useOnboardingState } from '../../state/OnboardingState';
import { SchreibenFeld, UebungsMenu } from '../../components';
import { CATEGORIES, CATEGORY_BY_ID } from '../../data/categories';
import { scenarioLabel } from '../../data/scenarios';
import { leihgeberVon, saetzeFuer } from '../../data/geliehen';
import { passtZurAnsprache } from '../../data/anrede';
import { getLanguage } from '../../data/languages';
import { ExerciseSentence, loadAnswerClusters, loadExerciseSentences, shuffle, hilfeText } from '../../data/phrasebookContent';
import { phraseId, toPhrase } from '../../data/cheatsheetContent';
import { evaluateConcepts, EvaluationResult } from '../../features/evaluation/evaluateConcepts';
import { looksLikeGarbageTranscript } from '../../features/stt/transcriptQuality';
import { useSpeechmatics } from '../../features/stt/useSpeechmatics';
import { useSttRecorder } from '../../features/stt/useSttRecorder';
import { newCard, reviewCard, isDue } from '../../features/srs/fsrsEngine';
import { cardKey, loadAllCards, saveCard } from '../../features/srs/srsStorage';
import { getTheme, ACCENT_BLUE, ACCENT_GREEN } from '../../theme/tokens';

// S4 - Uebungs-Screen (generisch fuer Woerter/Saetze/Konversation/SRS).
// Seit 2026-08-05 mit echtem Supabase-Content (phrasebook_master /
// schwedisch_phrasebook, je nach gewaehlter Zielsprache) statt der
// Spanisch-Platzhaltersaetze, plus echtem STT (seit 2026-08-12 Speechmatics,
// davor whisper.rn) als primaerer
// Eingabeweg - Text-Eingabe bleibt Fallback, exakt wie in CLAUDE.md als
// Kernprinzip festgelegt ("TTS/STT ist die eigentliche Uebung, Text-Eingabe
// nur Uebergangsloesung"). "Woerter lernen" nutzt mangels echter
// Vokabel-Karteikarten-Tabelle aktuell dieselben Satz-Inhalte wie "Saetze
// lernen" - Lernmodus 1 (echte Wortkarten) ist laut Backlog noch nicht gebaut.
//
// FSRS (2026-08-07): JEDE Antwort, egal ob die Session von S2 (Kategorie,
// source="category") oder S5 (SRS, source="srs") gestartet wurde,
// aktualisiert den FSRS-Zustand der jeweiligen Karte - "ein gemeinsamer
// Pool" bedeutet auch, dass gezieltes Kategorie-Ueben auf S2 genauso zaehlt
// wie eine S5-Session. Der Unterschied liegt nur in der AUSWAHL: S2 zeigt
// die ganze Kategorie ungefiltert (bewusstes Ueben), S5 filtert auf
// tatsaechlich faellige Karten (algorithmische Auswahl). Kein hartes
// Session-Limit (Nutzer-Entscheidung 2026-08-07: "widerspricht dem
// schnellen Lernen") - stattdessen alle 10 Karten ein kurzer, nicht
// blockierender Motivations-Einschub statt eines Stopp-Punkts.

/** Wie viele Karten vorgezogen werden, wenn nichts faellig ist. */
const VORZIEHEN_MAX = 20;

const MODE_LABELS: Record<string, string> = { spam: 'Alles', woerter: 'Wörter', saetze: 'Sätze', konversation: 'Konversation' };

const FEEDBACK_MAP: Record<EvaluationResult['tier'], { msg: string; bg: string; color: string }> = {
  richtig: { msg: '✅ Richtig-Niveau', bg: '#DFF1E4', color: '#256B3F' },
  ueberlebt: { msg: '🟡 Überlebensmodus-Niveau', bg: '#FBE9D8', color: '#9A5A1E' },
  nicht_verstanden: { msg: '❌ Nicht verstanden. Versuch es nochmal.', bg: '#F1EEE6', color: '#85807D' },
};

const MOTIVATION_INTERVAL = 10;
const MOTIVATION_MESSAGES = [
  '🔥 Stark dabei, weiter im Flow!',
  '💪 Läuft gut, mach weiter!',
  '🌟 Du bleibst dran - genau richtig!',
  '🚀 Nächste Runde, weiter geht\'s!',
];

// Zielsatz-als-Prompt + Papagei-Schutz (2026-08-08, siehe CLAUDE.md/Chat):
// Ab jetzt bekommt die Spracherkennung den TATSAECHLICHEN Zielsatz als `prompt` statt
// eines generischen Platzhalters (Duolingo-Prinzip: die Erkennung kennt den
// erwarteten Satz und wird darauf verankert, statt komplett offen zu
// transkribieren - deutlich robuster gegen Sprachabdrift bei kurzen/
// undeutlichen Aufnahmen). Bekanntes Risiko dabei: die Erkennung kann bei sehr
// kurzem/unklarem Audio den Prompt einfach "nachplappern", egal was
// tatsaechlich gesagt wurde - das wuerde die Uebung sinnlos machen (immer
// "richtig" ohne echte Pruefung). Absicherung hier: wenn die Aufnahme
// (anhand der Dateigrosse, 16kHz/mono/16-bit WAV = 32000 Byte/Sek.) viel zu
// kurz ist, um den Zielsatz realistisch gesprochen zu haben, UND das
// Transkript dem Prompt (fast) 1:1 entspricht, wird das NICHT gewertet -
// gleiche nicht-bestrafende Behandlung wie beim Sprach-Mismatch.
const BYTES_PER_SECOND_16K_MONO_16BIT = 32000;
const MIN_SECONDS_PER_WORD = 0.28; // grosszuegig (~214 Woerter/Min.), auch fuer schnelle Sprecher unrealistisch kurz
const MIN_RECORDING_SECONDS = 0.5; // Untergrenze auch fuer Ein-Wort-Saetze

function estimateAudioSeconds(fileUri: string): number {
  try {
    const bytes = new File(fileUri).size ?? 0;
    return bytes / BYTES_PER_SECOND_16K_MONO_16BIT;
  } catch {
    return 0; // Datei nicht lesbar - konservativ 0, loest im Zweifel die Pruefung aus statt sie zu umgehen
  }
}

function normalizeForCompare(text: string): string {
  return text
    .normalize('NFC')
    .toLowerCase()
    .replace(/[.,!?;:"'`]/g, '')
    .replace(/\s+/g, ' ')
    .trim();
}

function looksLikePromptEcho(transcript: string, prompt: string, recordedSeconds: number): boolean {
  const wordCount = prompt.trim().split(/\s+/).filter(Boolean).length;
  const minPlausibleSeconds = Math.max(MIN_RECORDING_SECONDS, wordCount * MIN_SECONDS_PER_WORD);
  if (recordedSeconds >= minPlausibleSeconds) return false; // genug Zeit fuer echte Sprache - kein Verdacht
  return normalizeForCompare(transcript) === normalizeForCompare(prompt);
}

export function ExerciseScreen({
  mode,
  categoryId,
  source = 'category',
  scenario,
}: {
  mode: string;
  categoryId: string;
  /**
   * Woher die Sitzung kommt - und damit, WELCHE Karten sie zeigt.
   *
   * - `category`      alle Saetze der Kategorie, ohne Ruecksicht auf
   *                   Faelligkeit. Bewusstes Ueben ("ich fliege naechste
   *                   Woche, ich gehe Health einmal komplett durch"). Ein
   *                   Faelligkeitsfilter machte genau das unmoeglich: am Tag
   *                   danach waere die Kategorie leer.
   * - `srs`           faellige Karten ueber ALLE freigeschalteten Kategorien
   *                   ("EIN gemeinsamer Wiederholungs-Pool", siehe CLAUDE.md).
   * - `srs-kategorie` faellige Karten NUR aus `categoryId` (2026-08-22).
   *                   Fuer den Fall, den `category` nicht abdeckt: eine
   *                   einzelne Kategorie gezielt festigen, ohne jedes Mal
   *                   die 60 Saetze mitzunehmen, die laengst sitzen. Stand
   *                   schon im Konzept ("Nutzer kann den Wiederholungs-Modus
   *                   per Kategorie-Dropdown filtern") und war beim Umbau
   *                   vom 2026-08-06 verlorengegangen.
   *
   * Warum ein eigener Wert und nicht "srs plus categoryId": die Route setzt
   * `categoryId` ersatzweise auf 'grundwortschatz', wenn keiner mitkommt -
   * an seiner Anwesenheit laesst sich der Umfang also nicht ablesen.
   */
  source?: 'category' | 'srs' | 'srs-kategorie';
  /**
   * Auf EINE Situation einschraenken (2026-08-21).
   *
   * Ohne das fuehrte ein Tipp auf "Naeher kommen" nur zur Kategorie - man
   * landete bei den vier Modus-Knoepfen statt bei den Saetzen, die man
   * angetippt hatte. Die Situationen sind seit Club + Nightlife die
   * eigentliche Einheit (zehn Stueck je Kategorie), also muessen sie auch
   * einzeln zu oeffnen sein.
   */
  scenario?: string;
}) {
  const { addressing: ansprache } = useOnboardingState();
  const { darkMode, targetLanguageId, purchased, saved, toggleSaved, zaehle, uebersprungen, ueberspringen } =
    useAppState();
  // Spiegel fuer den Sessionaufbau - siehe Kommentar an den Abhaengigkeiten
  // des Lade-Effekts.
  const uebersprungenRef = useRef(uebersprungen);
  uebersprungenRef.current = uebersprungen;
  const theme = getTheme(darkMode);
  // Der native Header ist app-weit aus (app/_layout.tsx), jeder Screen
  // zeichnet seinen eigenen. Ohne diesen Einsatz liegt die Ueberschrift unter
  // der Statusleiste bzw. der Kamera-Insel und wird verdeckt.
  const insets = useSafeAreaInsets();
  const language = getLanguage(targetLanguageId);
  // Speechmatics statt On-Device-Whisper als primaerer STT-Anbieter
  // (2026-08-12) - siehe useSpeechmatics.ts-Kommentar fuer die Begruendung
  // (deutlich robuster gegen Akzent, braucht dafuer Internet).
  const stt = useSpeechmatics();
  const recorder = useSttRecorder();

  const [loading, setLoading] = useState(true);
  const [loadError, setLoadError] = useState<string | null>(null);
  const [sentences, setSentences] = useState<ExerciseSentence[]>([]);
  const [clusters, setClusters] = useState<Record<string, string[]>>({});
  const [usedSrsFallback, setUsedSrsFallback] = useState(false);
  const [offline, setOffline] = useState(false);
  // Texteingabe hinter dem "Schreiben"-Knopf (Nutzer-Wunsch 2026-08-23).
  // Bewusst KEIN Zuruecksetzen zwischen Karten (siehe nextCard()) und
  // absichtlich EINWEG: einmal aufgeklappt bleibt sie fuer die ganze Sitzung
  // offen, dieselbe Regel wie in LessonScreen.tsx seit 2026-08-21 - wer
  // gerade nicht sprechen kann, kann es bei der naechsten Karte meist auch
  // nicht, und erneutes Antippen bei jeder Karte waere Schikane.
  const [schreibenOffen, setSchreibenOffen] = useState(false);
  // Lokaler FSRS-Kartenzustand (AsyncStorage) - als Ref statt State, weil
  // er innerhalb einer Session nur gelesen/geschrieben wird, ohne dass ein
  // Re-Render davon abhaengt.
  const cardsRef = useRef<Record<string, Card>>({});

  const [idx, setIdx] = useState(0);
  const [input, setInput] = useState('');
  const [transcript, setTranscript] = useState('');
  const [isRecording, setIsRecording] = useState(false);
  const [isTranscribing, setIsTranscribing] = useState(false);
  const [recordError, setRecordError] = useState<string | null>(null);
  // Diagnose-State (2026-08-08): Sprachcode, den die Spracherkennung
  // tatsaechlich erkannt hat, wenn er vom angeforderten abweicht. Greift
  // seit dem Wechsel zu Speechmatics praktisch nie - siehe Kommentar an der
  // Auswertungsstelle weiter unten.
  const [languageMismatch, setLanguageMismatch] = useState<string | null>(null);
  // Papagei-Verdacht (2026-08-08): Aufnahme viel zu kurz fuer den Zielsatz,
  // Transkript trotzdem (fast) identisch zum Prompt - siehe looksLikePromptEcho().
  const [promptEchoSuspected, setPromptEchoSuspected] = useState(false);
  // Kauderwelsch-Verdacht (2026-08-08): Transkript ist offensichtlich kein
  // echtes Wort (Wiederholungsschleife wie "oooo..." oder durchgerutschtes
  // Sonderzeichen wie "]") - siehe looksLikeGarbageTranscript() in
  // ../stt/transcriptQuality.ts.
  const [garbageTranscriptSuspected, setGarbageTranscriptSuspected] = useState(false);
  const [feedback, setFeedback] = useState<EvaluationResult | null>(null);
  const [done, setDone] = useState(false);
  const [results, setResults] = useState<EvaluationResult['tier'][]>([]);
  const [showMotivation, setShowMotivation] = useState(false);
  /**
   * Hat der Nutzer die Loesung aufgedeckt, bevor er geantwortet hat?
   *
   * Bis zum 2026-08-22 stand der Zielsatz IMMER oben auf der Karte, die
   * deutsche Uebersetzung darunter - man las also nur vor. Bewertet wird
   * gegen die Zielsprache, also war Vorlesen zuverlaessig "richtig", und die
   * Spracherkennung bekam den Satz zusaetzlich als Prompt. Damit uebte der
   * Screen Aussprache, aber nie Abrufen - Simons Einwand.
   *
   * Der gefuehrte Kurs trennt das laengst: `nachsprechen` zeigt das Wort und
   * wertet NICHT, `abrufen` fragt Deutsch -> Chinesisch aus dem Kopf und
   * wertet. Hier dieselbe Trennung, nur ohne zwei Schritte: neue Karten
   * zeigen den Satz (man kann nicht abrufen, was man nie gesehen hat),
   * bekannte verlangen ihn.
   */
  const [aufgedeckt, setAufgedeckt] = useState(false);

  const catName = categoryId === 'grundwortschatz' || categoryId === 'alle' ? 'Grundwortschatz' : CATEGORY_BY_ID[categoryId]?.name ?? categoryId;
  // Bei einer einzelnen Situation deren Namen zeigen, nicht den der
  // Kategorie - sonst sieht der Screen aus wie der ungefilterte.
  const anzeigeName = scenario ? scenarioLabel(scenario) : catName;
  // Faellt beides zusammen: nur der Umfang unterscheidet sich, die Auswahl
  // nach Faelligkeit ist dieselbe.
  const istWiederholung = source === 'srs' || source === 'srs-kategorie';
  // Aus dem 2026-08-06-Design-Update uebernommen: der Header-Titel
  // unterscheidet, ob die Session von S2 (Kategorie) oder S5 (SRS) aus
  // gestartet wurde, statt "srs" als eigenen mode-Wert zu behandeln.
  const headerTitle =
    source === 'srs-kategorie'
      ? `${anzeigeName} — Wiederholen`
      : `${source === 'srs' ? 'Wiederholen' : anzeigeName} — ${MODE_LABELS[mode] ?? 'Üben'}`;

  useEffect(() => {
    let cancelled = false;
    async function load() {
      setLoading(true);
      setLoadError(null);
      setUsedSrsFallback(false);
      try {
        // S5 (source="srs") uebt ueber ALLE gekauften Kategorien + den
        // immer freien Grundwortschatz hinweg (siehe CLAUDE.md "EIN
        // gemeinsamer Wiederholungs-Pool"); S2 (source="category") bleibt
        // auf die eine angeklickte Kategorie beschraenkt.
        // Nur `srs` greift ueber alle Kategorien - `srs-kategorie` bleibt wie
        // `category` bei der einen, filtert danach aber auf faellig.
        const gewaehlt =
          source === 'srs' ? [...CATEGORIES.filter((c) => purchased[c.id]).map((c) => c.id), 'grundwortschatz'] : [categoryId];
        // Geliehene Situationen mitladen (siehe data/geliehen.ts): Smalltalk
        // zeigt auch Begruessen und Vorstellen aus dem Grundwortschatz, weil
        // niemand garantiert, dass der Nutzer den je angesehen hat.
        const categoryIds = [...gewaehlt, ...leihgeberVon(gewaehlt)];

        const [sentencesResult, clusterData, cardStates] = await Promise.all([
          loadExerciseSentences(targetLanguageId, categoryIds),
          loadAnswerClusters(),
          loadAllCards(),
        ]);
        if (cancelled) return;
        cardsRef.current = cardStates;
        // Beim Leihen kaeme sonst der ganze Grundwortschatz mit - `saetzeFuer`
        // laesst nur die wirklich geliehenen Situationen durch.
        const eigeneUndGeliehene =
          source === 'srs'
            ? sentencesResult.sentences
            : saetzeFuer(categoryId, sentencesResult.sentences);

        const nachSituation = scenario
          ? eigeneUndGeliehene.filter((x) => x.scenario === scenario)
          : eigeneUndGeliehene;
        // Geschlechtsvarianten aussortieren (2026-08-22). 13 Saetze in
        // Club + Nightlife liegen doppelt vor - 你很漂亮 an Frauen, 你很帅 an
        // Maenner. Bis hierhin bekam JEDER beide, die Antwort aus dem
        // Onboarding blieb folgenlos. Ohne Antwort bleiben weiterhin beide
        // stehen, siehe passtZurAnsprache().
        const sentencesData = nachSituation.filter(
          (x) =>
            passtZurAnsprache(x.addressing, ansprache) &&
            // Uebersprungene Saetze kommen gar nicht erst in die Sitzung
            // (2026-08-22). Hier und nicht beim Zeichnen, damit auch die
            // Kartenzahl "Karte 3 von 12" stimmt - sonst zaehlte die Sitzung
            // Karten mit, die nie erscheinen.
            !uebersprungenRef.current[phraseId(targetLanguageId, language.table!, x.id)],
        );
        setOffline(sentencesResult.fromCache);

        if (sentencesData.length === 0) {
          setLoadError('Für diese Auswahl gibt es noch keine Sätze in der Datenbank.');
          setSentences([]);
          setClusters(clusterData);
          return;
        }

        let pool = sentencesData;
        // Nur beim Vorziehen wird gedeckelt - siehe unten, warum sonst nicht.
        let deckeln = false;
        if (istWiederholung) {
          const due = sentencesData.filter((s) => {
            const key = cardKey(targetLanguageId, language.table!, s.id);
            return isDue(cardStates[key]);
          });
          if (due.length > 0) {
            // Faellig ist faellig: wer 80 Karten offen hat, soll sie auch
            // bekommen. Ein stiller Deckel liesse den Rueckstand wachsen,
            // ohne dass jemand merkt, warum er nie aufholt.
            pool = due;
          } else {
            // Todo aus CLAUDE.md umgesetzt: nichts faellig -> ein paar
            // Karten vorziehen statt eine leere Session zu zeigen. NUR HIER
            // wird gedeckelt: vorgezogene Karten sind keine Schuld, die man
            // abarbeiten muss - ein paar reichen.
            pool = sentencesData;
            deckeln = true;
            setUsedSrsFallback(true);
          }
        }

        // KEIN hartes Session-Limit (Nutzer-Entscheidung 2026-08-07:
        // "widerspricht dem Ziel schneller lernen als Duolingo").
        //
        // Bis 2026-08-21 stand hier `.slice(0, 40)` auf JEDER Sitzung - der
        // Knopf "Alle 131" lieferte also 40 Saetze und log damit. Der
        // Kommentar daneben behauptete sogar, es gebe kein Limit mehr.
        // Statt eines Deckels bremst der Motivations-Einschub alle zehn
        // Karten, ohne die Sitzung zu beenden.
        setSentences(deckeln ? shuffle(pool).slice(0, VORZIEHEN_MAX) : shuffle(pool));
        setClusters(clusterData);
        // Zurueck auf Karte 1: sonst startet die neue Situation an der
        // Position, bis zu der man in der vorigen gekommen war - und bei
        // einer kuerzeren Liste sofort am Ende.
        setIdx(0);
      } catch (e) {
        if (!cancelled) setLoadError(e instanceof Error ? e.message : String(e));
      } finally {
        if (!cancelled) setLoading(false);
      }
    }
    load();
    return () => {
      cancelled = true;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
    // `scenario` MUSS hier stehen (2026-08-21): der Screen liegt in der
    // Tab-Gruppe und bleibt gemountet. Wer eine zweite Situation antippt,
    // aendert nur diesen Parameter - ohne ihn in der Liste laeuft der Effekt
    // nicht erneut und es bleiben die Saetze der ERSTEN Situation stehen.
    // Genau so gemeldet: egal welche Situation, immer derselbe erste Satz.
    // `uebersprungen` steht bewusst NICHT in den Abhaengigkeiten: es aendert
    // sich genau dann, wenn der Nutzer mitten in der Sitzung ueberspringt -
    // die Sitzung wuerde dann neu geladen und bei Karte 1 wieder anfangen.
    // Gefiltert wird beim Sessionstart, gelesen ueber den Ref darunter.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [targetLanguageId, categoryId, source, scenario, ansprache]);

  const sentence = sentences[Math.min(idx, sentences.length - 1)];

  // Der Schluessel ist derselbe wie im Survival (sprache:tabelle:id) - ein
  // hier gemerkter Satz ist dort sofort derselbe Eintrag, nicht ein zweiter.
  const merkPhrase = sentence
    ? toPhrase(targetLanguageId, language.table ?? '', anzeigeName, sentence)
    : null;
  const istGemerkt = merkPhrase ? !!saved[merkPhrase.id] : false;

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
    setLanguageMismatch(null);
    setPromptEchoSuspected(false);
    setGarbageTranscriptSuspected(false);
    try {
      // Zielsatz selbst als Prompt (2026-08-08, Duolingo-Prinzip: bekannter
      // Zielsatz statt offener Transkription, siehe CLAUDE.md) - staerkere
      // Sprachverankerung als der vorherige generische Platzhalter-Prompt.
      const targetPrompt = sentence?.text ?? language.sttPrompt;
      const { text, detectedLanguage } = await stt.transcribe(uri, language.sttLanguage, targetPrompt);
      setTranscript(text);
      // Sprach-Mismatch-Schutz. Stammt aus der whisper.rn-Zeit (2026-08-08,
      // echter Nutzerfall, auf iOS reproduziert): Whisper meldete zurueck,
      // welche Sprache es TATSAECHLICH decodiert hatte, und wich das vom
      // angeforderten Code ab, war das eine Halluzination und keine falsche
      // Aussprache - dann NICHT wie eine falsche Antwort werten (kein
      // FSRS-Update, keine "nicht_verstanden"-Wertung), sondern nochmal
      // aufnehmen lassen (siehe CLAUDE.md "SRS soll nicht schlecht gelaunt
      // machen").
      // ACHTUNG (2026-08-16): seit dem Wechsel zu Speechmatics ist dieser
      // Zweig praktisch tot - useSpeechmatics() gibt `detectedLanguage`
      // IMMER als die angeforderte Sprache zurueck, weil der Text-Endpunkt
      // kein eigenes Spracherkennungsfeld liefert (siehe Kommentar dort).
      // Bewusst stehen gelassen statt geloescht: kostet nichts, greift sofort
      // wieder, falls der Anbieter spaeter ein echtes Sprachfeld liefert.
      if (detectedLanguage && detectedLanguage !== language.sttLanguage) {
        setLanguageMismatch(detectedLanguage);
        return;
      }
      // Papagei-Check (2026-08-08): seit der Zielsatz als Prompt mitgegeben
      // wird, besteht das Risiko, dass die Erkennung ihn bei zu kurzem/unklarem
      // Audio einfach zurueckgibt, ohne die Aufnahme wirklich auszuwerten -
      // siehe looksLikePromptEcho()-Kommentar oben. Genau wie beim Sprach-
      // Mismatch: kein FSRS-Update, keine Wertung, einfach nochmal versuchen.
      const recordedSeconds = estimateAudioSeconds(uri);
      if (looksLikePromptEcho(text, targetPrompt, recordedSeconds)) {
        setPromptEchoSuspected(true);
        return;
      }
      // Kauderwelsch-Check (2026-08-08, echte Nutzerfaelle: "]" statt einem
      // echten Satz, oder "oooooo..." als Wiederholungsschleife). Frueher gab
      // es dagegen zusaetzlich einen automatischen Zweitversuch in
      // useWhisper() - der ist mit dem Anbieterwechsel entfallen (2026-08-16),
      // Speechmatics hat kein Gegenstueck dazu. Diese Pruefung ist damit die
      // EINZIGE Absicherung gegen Kauderwelsch, nicht mehr nur der Rueckfall.
      // Gleiche nicht-bestrafende Behandlung wie Sprach-Mismatch/
      // Papagei-Verdacht: kein FSRS-Update, keine Wertung.
      if (looksLikeGarbageTranscript(text)) {
        setGarbageTranscriptSuspected(true);
        return;
      }
      // Direkt nach dem Einsprechen auswerten - kein zusaetzlicher Tap auf
      // "loesen" noetig. Wertet mit dem frisch transkribierten Ergebnis aus
      // (nicht ueber den transcript-State), weil setState() asynchron ist
      // und der neue Wert sonst noch nicht sicher verfuegbar waere.
      evaluateAnswer(text);
    } catch (e) {
      setRecordError(e instanceof Error ? e.message : String(e));
    } finally {
      setIsTranscribing(false);
    }
  }

  function evaluateAnswer(answer: string) {
    if (!sentence || !language.table) return;
    const roh = evaluateConcepts(answer.trim(), sentence.accepted_concepts, clusters, sentence.text);
    // Wer die Loesung gelesen hat, hat sie nicht abgerufen. Gedeckelt auf
    // "ueberlebt" - dieselbe Regel wie beim Tippen im gefuehrten Kurs, und
    // dieselbe Begruendung: die Antwort ist echt, der Nachweis nicht.
    // Nie HOCHgestuft: aus "nicht_verstanden" wird nichts Besseres, nur weil
    // der Satz sichtbar war.
    const evaluation: EvaluationResult =
      aufgedeckt && roh.tier === 'richtig' ? { ...roh, tier: 'ueberlebt' } : roh;
    setFeedback(evaluation);
    setResults((r) => [...r, evaluation.tier]);
    // Zaehler fuer die Herausforderungen (2026-08-22). Nur "richtig" - der
    // Ueberlebensmodus zaehlt bewusst nicht mit, sonst hiesse "ohne Fehler"
    // dasselbe wie "irgendwie verstanden". Aufgedeckte Karten sind schon
    // oben auf "ueberlebt" gedeckelt und fallen damit von selbst raus.
    if (evaluation.tier === 'richtig') zaehle('perfekteSaetze');

    // FSRS-Update - passiert IMMER, egal ob die Session von S2 oder S5
    // gestartet wurde (siehe Kommentar am Dateianfang: gemeinsamer Pool).
    const key = cardKey(targetLanguageId, language.table, sentence.id);
    const previous = cardsRef.current[key] ?? newCard();
    const updated = reviewCard(previous, evaluation.tier);
    cardsRef.current[key] = updated;
    saveCard(key, updated).catch(() => {
      // Best-effort - ein einzelner Speicherfehler soll die Uebung nicht
      // unterbrechen, hoechstens verhindern, dass diese eine Karte korrekt
      // eingeplant wird.
    });
  }

  function checkAnswer() {
    evaluateAnswer(input.trim() || transcript);
  }

  // Hilfe (2026-08-26, ersetzt das reine "Loesung zeigen"): fuellt nur die
  // HALBE Loesung ins Eingabefeld statt sie komplett anzuzeigen - dieselbe
  // Idee wie SentenceReviewScreen.tsx Stufe 3, hier mit 0.5 statt 0.4 (eigene
  // Zahl fuer einen eigenen Kontext, siehe hilfeText() in
  // phrasebookContent.ts). `aufgedeckt` bleibt gesetzt und deckelt die
  // Bewertung weiterhin auf "ueberlebt" (siehe evaluateAnswer oben) -
  // unveraendert, nur WAS aufgedeckt wird ist jetzt kleiner.
  function hilfeTippen() {
    if (!sentence) return;
    setAufgedeckt(true);
    setSchreibenOffen(true);
    setInput(hilfeText(sentence.pinyin ?? sentence.text, 0.5));
  }

  function nextCard() {
    const next = idx + 1;
    if (next >= sentences.length) {
      setDone(true);
      return;
    }
    setIdx(next);
    setInput('');
    setTranscript('');
    setLanguageMismatch(null);
    setPromptEchoSuspected(false);
    setGarbageTranscriptSuspected(false);
    setFeedback(null);
    setAufgedeckt(false);
    // Kein Session-Stopp, nur ein kurzer, automatisch weiterlaufender
    // Motivations-Einschub alle MOTIVATION_INTERVAL Karten (Nutzer-
    // Entscheidung 2026-08-07: kein Ja/Nein-Checkpoint, kein Abbruchpunkt).
    if (next > 0 && next % MOTIVATION_INTERVAL === 0) {
      setShowMotivation(true);
    }
  }

  const richtigN = results.filter((r) => r === 'richtig').length;
  const ueberlebtN = results.filter((r) => r === 'ueberlebt').length;
  const nichtN = results.filter((r) => r === 'nicht_verstanden').length;
  const currentAnswer = input.trim() || transcript;

  // Verdecken geht nur, wenn es ueberhaupt etwas zu uebersetzen GIBT. Bei
  // Deutsch als Zielsprache ist `germanGloss` null - der Satz IST das
  // Deutsche, es bliebe eine leere Karte uebrig. Dort bleibt es beim
  // Vorlesen, was fuer einen deutschen Muttersprachler ohnehin die einzige
  // sinnvolle Uebung an einem deutschen Satz ist.
  const kannAbfragen = !!sentence?.germanGloss;
  const kartenSchluessel =
    sentence && language.table ? cardKey(targetLanguageId, language.table, sentence.id) : null;
  // Eine Karte ohne FSRS-Zustand hat der Nutzer noch nie gesehen - abrufen
  // kann er sie also nicht. Sie wird gezeigt, genau wie der Schritt
  // `nachsprechen` im gefuehrten Kurs.
  const aktuelleKarte = kartenSchluessel ? cardsRef.current[kartenSchluessel] : undefined;
  const istNeueKarte = !!kartenSchluessel && !aktuelleKarte;
  // FSRS-`state` bewusst nutzen statt eines eigenen Zaehlers (2026-08-26,
  // Simons Entscheidung) - liegt schon geladen in `cardsRef.current`, wurde
  // bisher nirgends gelesen. Learning (frisch, noch in den ersten
  // Wiederholungen) und Relearning (nach einem Rueckfall aus Review) sind
  // die beiden Zustaende, in denen "sofort volle blinde Produktion"
  // unfair waere - Review (eingespielt) bleibt unveraendert bei voller
  // Produktion, New laeuft weiterhin ueber `istNeueKarte` oben.
  const brauchtUnterstuetzung =
    !!aktuelleKarte && (aktuelleKarte.state === State.Learning || aktuelleKarte.state === State.Relearning);
  // Nachschlage-Saetze bleiben IMMER sichtbar. Sie sind zum Vorzeigen
  // gedacht, nicht zum Abrufen ("Bitte rufen Sie die Polizei") und benutzen
  // ausdruecklich Vokabeln, die der Kurs nicht lehrt - 警察, 假装, 烦. Sie zu
  // verdecken hiesse, einen Anfaenger nach Woertern zu fragen, die er nie
  // gelernt hat; das Ergebnis waere "nicht verstanden" und ein harter
  // FSRS-Ruecksetzer. Genau der Vorbehalt steht schon in CLAUDE.md.
  //
  // `aufgedeckt` bewusst NICHT mehr Teil dieser Bedingung (2026-08-26): der
  // Hilfe-Knopf zeigt seitdem nur noch die HALBE Loesung im Eingabefeld
  // (siehe `hilfeTippen()`), nicht mehr den vollen Satz hier oben - beides
  // gleichzeitig waere keine Hilfe mehr, sondern die Antwort. Nach dem
  // Abschicken (`feedback` gesetzt) greift die volle Anzeige weiterhin wie
  // gehabt, das ist die normale Nachbesprechung, keine Vorab-Erleichterung.
  const zeigeLoesung = !kannAbfragen || sentence?.lookupOnly === true || istNeueKarte || !!feedback;

  // Motivations-Einschub verschwindet nach kurzer Zeit von selbst, kann
  // aber auch per Tap sofort weggetippt werden (siehe Render unten).
  useEffect(() => {
    if (!showMotivation) return;
    const t = setTimeout(() => setShowMotivation(false), 1400);
    return () => clearTimeout(t);
  }, [showMotivation]);

  const motivationMsg = MOTIVATION_MESSAGES[Math.floor(idx / MOTIVATION_INTERVAL) % MOTIVATION_MESSAGES.length];

  return (
    <ScrollView contentContainerStyle={[styles.container, { backgroundColor: theme.pageBg, paddingTop: insets.top + CONTAINER_PADDING }]}>
      <View style={styles.header}>
        <Pressable
          onPress={() => router.back()}
          style={styles.backBtn}
          accessibilityRole="button"
          accessibilityLabel="Zurück"
        >
          <Text style={[styles.backGlyph, { color: theme.text }]}>‹</Text>
        </Pressable>
        <Text style={[styles.title, { color: theme.text }]}>
          {headerTitle} ({language.label})
        </Text>
        {offline && <Text style={styles.offlineBadge}>📴 Offline</Text>}
        <UebungsMenu dark={darkMode} meldenLabel="Satz melden" />
      </View>

      {loading && (
        <View style={styles.centerBox}>
          <ActivityIndicator color={ACCENT_BLUE} />
          <Text style={{ color: theme.sub, marginTop: 8 }}>Sätze werden geladen…</Text>
        </View>
      )}

      {!loading && loadError && (
        <View style={styles.centerBox}>
          <Text style={{ color: theme.sub, textAlign: 'center' }}>{loadError}</Text>
        </View>
      )}

      {!loading && !loadError && sentence && !done && showMotivation && (
        <Pressable
          style={styles.centerBox}
          onPress={() => setShowMotivation(false)}
          accessibilityRole="button"
          accessibilityLabel={`${motivationMsg} ${idx} geschafft`}
          accessibilityHint="Weiter zur nächsten Karte"
        >
          <Text style={[styles.motivationText, { color: theme.text }]}>{motivationMsg}</Text>
          <Text style={{ color: theme.sub, fontSize: 12, marginTop: 6 }}>{idx} geschafft</Text>
        </Pressable>
      )}

      {!loading && !loadError && sentence && !done && !showMotivation && (
        <>
          <Text style={[styles.cardLabel, { color: theme.sub }]}>
            Karte {idx + 1} von {sentences.length}
          </Text>
          {usedSrsFallback && idx === 0 && (
            <Text style={[styles.fallbackHint, { color: theme.sub }]}>
              Aktuell nichts fällig - hier ein paar Karten zum Auffrischen vorgezogen.
            </Text>
          )}

          <View style={[styles.sentenceCard, { borderColor: theme.border, backgroundColor: theme.cardBg }]}>
            {/* Oben steht die AUFGABE, nicht die Loesung (2026-08-22).
                Bis dahin stand der Zielsatz gross oben und die deutsche
                Uebersetzung klein darunter - man las also ab, und weil gegen
                die Zielsprache bewertet wird, war Vorlesen zuverlaessig
                "richtig". Jetzt fuehrt das Deutsche, und die Zielsprache ist
                das, was der Nutzer produzieren soll. */}
            <Text style={[styles.sentenceText, { color: theme.text }]}>
              {sentence.germanGloss ?? sentence.pinyin ?? sentence.text}
            </Text>

            {zeigeLoesung ? (
              kannAbfragen ? (
                <>
                  {istNeueKarte && !feedback ? (
                    <Text style={[styles.neuHinweis, { color: theme.sub }]}>
                      Neu – sprich es einmal nach.
                    </Text>
                  ) : null}
                  {/* Pinyin schlaegt Zeichen, wo es eins gibt (2026-08-21).
                      `sentence.text` traegt fuer Chinesisch die Hanzi - die
                      braucht TTS und die Bewertung, aber NICHT der Lernende:
                      "fuer das Lernen brauchen wir keine Zeichen"
                      (CLAUDE.md). */}
                  <Text style={[styles.loesung, { color: ACCENT_BLUE }]}>
                    {sentence.pinyin ?? sentence.text}
                  </Text>
                </>
              ) : null
            ) : !aufgedeckt ? (
              // Aufdecken ist erlaubt, kostet aber das "Richtig"-Niveau -
              // dieselbe Regel wie das Tippen im gefuehrten Kurs. Die
              // Alternative waere, den Nutzer festhaengen zu lassen.
              //
              // Prominenter bei Learning/Relearning (2026-08-26, Simons
              // Vorgabe): gefuellter statt nur umrandeter Knopf, wenn FSRS
              // sagt, dass dieser Satz noch nicht sicher sitzt - bei Review
              // bleibt er dezent wie bisher, der Nutzer muss ihn dort
              // bewusst suchen statt zu ihm hingefuehrt zu werden.
              <Pressable
                onPress={hilfeTippen}
                accessibilityRole="button"
                accessibilityLabel="Hilfe"
                accessibilityHint="Füllt die halbe Lösung ein, zählt danach höchstens als Überlebensmodus"
                style={({ pressed }) => [
                  styles.zeigen,
                  brauchtUnterstuetzung
                    ? { backgroundColor: ACCENT_BLUE, borderColor: ACCENT_BLUE, opacity: pressed ? 0.7 : 1 }
                    : { borderColor: theme.border, opacity: pressed ? 0.6 : 1 },
                ]}
              >
                <Text
                  style={{
                    color: brauchtUnterstuetzung ? '#FFFFFF' : theme.sub,
                    fontWeight: '700',
                    fontSize: 12,
                  }}
                >
                  Hilfe…
                </Text>
              </Pressable>
            ) : null}

            {/* Der Kulturhinweis kann die Loesung verraten ("哪里哪里 hat kein
                deutsches Gegenstueck") - er erscheint deshalb mit ihr. */}
            {sentence.cultureNote && zeigeLoesung ? (
              <View style={[styles.hinweis, { borderLeftColor: ACCENT_BLUE }]}>
                <Text style={[styles.hinweisText, { color: theme.sub }]}>{sentence.cultureNote}</Text>
              </View>
            ) : null}
            <View style={styles.kartenAktionen}>
            {/* Kurzer Text (2026-08-24, vorher "Vorlesen (noch kein Audio)")
                - der lange Text zwang den Speichern-Knopf bei schmalen
                Bildschirmen in die naechste Zeile, weil kartenAktionen
                umbricht (flexWrap). Der Hinweis "noch keine Audioaufnahme"
                steht weiterhin im accessibilityHint, geht also fuer
                Screenreader nicht verloren - nur die sichtbare Karte wird
                kuerzer, damit beide Knoepfe nebeneinander passen. */}
            <Pressable
              disabled
              accessibilityRole="button"
              accessibilityLabel="Vorlesen"
              accessibilityHint="Für diesen Satz gibt es noch keine Audioaufnahme"
              accessibilityState={{ disabled: true }}
              style={[styles.ttsButton, { borderColor: theme.border }]}
            >
              <Text style={{ color: theme.sub, fontWeight: '700', fontSize: 12 }}>▶ Vorlesen</Text>
            </Pressable>
            {/* Merken mitten in der Uebung (Nutzer-Wunsch 2026-08-21): der
                Satz landet sofort unter "Gespeicherte Saetze" im Survival.
                Gefuelltes Lesezeichen heisst gemerkt - dieselbe Sprache wie
                auf der Survival-Karte und am Favoriten-Knopf.
                Beschriftung "Speichern" (Nutzer-Wunsch 2026-08-24, loest
                die Zwischenstation "Survival" vom 2026-08-23 ab) - "Survival"
                benannte das Ziel, "Speichern" die Aktion selbst; neben dem
                kuerzeren "Vorlesen" passt das jetzt auch in eine Zeile.
                "Gemerkt" bleibt fuer den gespeicherten Zustand unveraendert. */}
            <Pressable
              onPress={() => {
                if (merkPhrase) toggleSaved(merkPhrase.id, merkPhrase);
              }}
              accessibilityRole="button"
              accessibilityLabel={istGemerkt ? 'Gemerkt' : 'Speichern'}
              accessibilityHint={
                istGemerkt
                  ? 'Aus den gespeicherten Sätzen entfernen'
                  : 'Zu den gespeicherten Sätzen im Survival hinzufügen'
              }
              accessibilityState={{ selected: istGemerkt }}
              style={({ pressed }) => [
                styles.merken,
                { borderColor: istGemerkt ? ACCENT_GREEN : theme.border, opacity: pressed ? 0.6 : 1 },
              ]}
            >
              <Ionicons
                name={istGemerkt ? 'bookmark' : 'bookmark-outline'}
                size={16}
                color={istGemerkt ? ACCENT_GREEN : theme.sub}
              />
              <Text style={{ color: istGemerkt ? ACCENT_GREEN : theme.sub, fontWeight: '700', fontSize: 12 }}>
                {istGemerkt ? 'Gemerkt' : 'Speichern'}
              </Text>
            </Pressable>
            </View>
          </View>

          <View style={styles.sttRow}>
            {stt.status === 'ready' ? (
              <Pressable
                onPress={handleMicPress}
                // Der zentrale Knopf der App. Ohne Label liest VoiceOver im
                // Ruhezustand das Mikrofon-Emoji und waehrend der
                // Transkription nur "…" vor - beides unbrauchbar. Der
                // Aufnahme-/Wartezustand steckt sonst allein in der
                // Hintergrundfarbe (blau vs. rot).
                accessibilityRole="button"
                accessibilityLabel={
                  isRecording
                    ? 'Aufnahme stoppen'
                    : isTranscribing
                      ? 'Wird ausgewertet'
                      : 'Antwort einsprechen'
                }
                accessibilityHint={isRecording || isTranscribing ? undefined : 'Nimmt deine gesprochene Antwort auf'}
                accessibilityState={{ busy: isTranscribing, disabled: isTranscribing }}
                style={[styles.micButton, { backgroundColor: isRecording ? '#D9564F' : ACCENT_BLUE }]}
              >
                <Text style={styles.micButtonText}>
                  {isRecording ? '● Aufnahme stoppen' : isTranscribing ? '…' : '🎙 Antwort einsprechen'}
                </Text>
              </Pressable>
            ) : (
              <Text style={{ color: theme.sub, fontSize: 12 }}>
                Spracherkennung nicht verfügbar ({stt.error ?? 'lädt…'}) - bitte Text eingeben.
              </Text>
            )}
            {isTranscribing && <ActivityIndicator color={ACCENT_BLUE} style={{ marginLeft: 8 }} />}
          </View>
          {!!transcript && <Text style={[styles.transcript, { color: theme.text }]}>Erkannt: „{transcript}"</Text>}
          {!!languageMismatch && (
            <Text style={{ color: '#D9564F', fontSize: 12, fontWeight: '700', marginBottom: 4 }}>
              ⚠️ Die Spracherkennung hat das als „{languageMismatch}" statt „{language.sttLanguage}" erkannt - das zählt nicht als
              Versuch. Bitte nochmal einsprechen (oder Antwort tippen).
            </Text>
          )}
          {promptEchoSuspected && (
            <Text style={{ color: '#D9564F', fontSize: 12, fontWeight: '700', marginBottom: 4 }}>
              ⚠️ Die Aufnahme war zu kurz, um wirklich ausgewertet zu werden - das zählt nicht als Versuch. Bitte nochmal
              einsprechen (etwas deutlicher/länger) oder Antwort tippen.
            </Text>
          )}
          {garbageTranscriptSuspected && (
            <Text style={{ color: '#D9564F', fontSize: 12, fontWeight: '700', marginBottom: 4 }}>
              ⚠️ Das hat technisch nicht sauber geklappt - das zählt nicht als Versuch. Bitte nochmal einsprechen oder
              Antwort tippen.
            </Text>
          )}
          {!!recordError && <Text style={{ color: '#D9564F', fontSize: 12 }}>{recordError}</Text>}

          {/* Hinter einem Knopf statt von Anfang an sichtbar (Nutzer-Wunsch
              2026-08-23): wer das Feld sofort sieht, tippt - und hat die
              Karte durch, ohne einmal gesprochen zu haben. Dieselbe Regel
              wie im gefuehrten Kurs, jetzt an einer gemeinsamen Stelle
              (SchreibenFeld.tsx). */}
          <SchreibenFeld
            dark={darkMode}
            offen={schreibenOffen}
            onToggle={() => setSchreibenOffen(true)}
          >
            <View style={[styles.inputCard, { borderColor: theme.border, backgroundColor: theme.cardBg }]}>
              <TextInput
                value={input}
                onChangeText={setInput}
                placeholder="Antwort tippen"
                placeholderTextColor={theme.sub}
                multiline
                autoFocus
                style={[styles.input, { color: theme.text }]}
              />
            </View>
          </SchreibenFeld>

          {feedback && (
            <View style={[styles.feedback, { backgroundColor: FEEDBACK_MAP[feedback.tier].bg }]}>
              <Text style={{ color: FEEDBACK_MAP[feedback.tier].color, fontWeight: '700', fontSize: 13 }}>
                {FEEDBACK_MAP[feedback.tier].msg}
              </Text>
              {feedback.missed.length > 0 && (
                <Text style={{ color: FEEDBACK_MAP[feedback.tier].color, fontSize: 12, marginTop: 4 }}>
                  Gefehlt: {feedback.missed.join(', ')}
                </Text>
              )}
            </View>
          )}

          {!feedback ? (
            (() => {
              const solveDisabled =
                !currentAnswer || ((!!languageMismatch || promptEchoSuspected || garbageTranscriptSuspected) && !input.trim());
              return (
                <View style={styles.loesenReihe}>
                  {/* Ueberspringen (Nutzer-Wunsch 2026-08-22, umbenannt und
                      neben "loesen" gezogen 2026-08-23 - vorher stand es oben
                      bei Vorlesen/Survival, jetzt bei den Aktionen zur Karte
                      selbst).

                      Dauerhaft, nicht nur fuer diese Sitzung - das Anliegen
                      ist "betrifft mich nicht", nicht "gerade keine Lust".
                      Bewusst OHNE Bewertung: der Satz bekommt keine
                      FSRS-Karte und zaehlt nicht in die Auswertung. Ein
                      Ueberspringen ist keine falsche Antwort. Nur VOR der
                      Bewertung sinnvoll - danach ist "Weiter" der Weg. */}
                  <Pressable
                    onPress={() => {
                      if (!sentence || !language.table) return;
                      // Derselbe Schluessel wie beim Merken
                      // (`sprache:tabelle:id`), NICHT der FSRS-
                      // Speicherschluessel: sonst gaebe es zwei
                      // Schluesselraeume fuer denselben Satz.
                      ueberspringen(phraseId(targetLanguageId, language.table, sentence.id));
                      nextCard();
                    }}
                    accessibilityRole="button"
                    accessibilityLabel="Überspringen"
                    accessibilityHint="Dieser Satz taucht nicht mehr auf. Im Profil lässt sich das zurücknehmen."
                    style={({ pressed }) => [
                      styles.uebespringenButton,
                      { borderColor: theme.border, opacity: pressed ? 0.6 : 1 },
                    ]}
                  >
                    <Ionicons name="close-circle-outline" size={16} color={theme.sub} />
                    <Text style={{ color: theme.sub, fontWeight: '700', fontSize: 13 }}>Überspringen</Text>
                  </Pressable>

                  <Pressable
                    disabled={solveDisabled}
                    accessibilityRole="button"
                    accessibilityLabel="Lösen"
                    // Der Deaktiviert-Zustand wird sonst nur ueber opacity 0.5
                    // gezeigt - fuer VoiceOver nicht wahrnehmbar.
                    accessibilityState={{ disabled: solveDisabled }}
                    accessibilityHint={solveDisabled ? 'Erst antworten, dann auswerten' : 'Wertet deine Antwort aus'}
                    style={[styles.solveButton, { opacity: solveDisabled ? 0.5 : 1 }]}
                    onPress={checkAnswer}
                  >
                    <Text style={styles.solveButtonText}>lösen ▶</Text>
                  </Pressable>
                </View>
              );
            })()
          ) : (
            <Pressable
              style={styles.nextButton}
              onPress={nextCard}
              accessibilityRole="button"
              accessibilityLabel="Weiter"
              accessibilityHint="Zur nächsten Karte"
            >
              <Text style={styles.nextButtonText}>Weiter ▶</Text>
            </Pressable>
          )}
        </>
      )}

      {!loading && !loadError && done && (
        <View style={styles.doneWrap}>
          <Text style={[styles.doneTitle, { color: theme.text }]}>Session beendet</Text>
          <Text style={[styles.doneSummary, { color: theme.sub }]}>
            {richtigN}× richtig · {ueberlebtN}× überlebt · {nichtN}× nicht verstanden
          </Text>
          <Pressable
            style={styles.finishButton}
            onPress={() => router.back()}
            accessibilityRole="button"
            accessibilityLabel="Fertig"
            accessibilityHint="Schließt die Session"
          >
            <Text style={styles.finishButtonText}>Fertig</Text>
          </Pressable>
        </View>
      )}
    </ScrollView>
  );
}

// Innenabstand des Wurzel-Elements. Steht als Konstante da, weil die
// Ueberschrift ihn zum Sicherheitsrand DAZUrechnen muss - die
// Einzelangabe `paddingTop` wuerde das `padding` unten sonst schlagen
// und der Kopf klebte oben ohne Luft an der Statusleiste.
const CONTAINER_PADDING = 18;

const styles = StyleSheet.create({
  container: { flexGrow: 1, padding: CONTAINER_PADDING },
  header: { flexDirection: 'row', alignItems: 'center', gap: 10, marginBottom: 6 },
  backBtn: { width: 32, height: 32, alignItems: 'center', justifyContent: 'center' },
  backGlyph: { fontSize: 26 },
  title: { fontWeight: '800', fontSize: 16, flex: 1 },
  offlineBadge: { fontSize: 11, fontWeight: '700', color: '#9A5A1E' },
  centerBox: { alignItems: 'center', justifyContent: 'center', paddingVertical: 60 },
  motivationText: { fontSize: 20, fontWeight: '800', textAlign: 'center' },
  fallbackHint: { fontSize: 12, fontStyle: 'italic', marginBottom: 10 },
  cardLabel: { fontWeight: '700', fontSize: 12, marginBottom: 16 },
  sentenceCard: { borderWidth: 1.5, borderRadius: 16, padding: 18, marginBottom: 14, gap: 10 },
  kartenAktionen: { flexDirection: 'row', alignItems: 'center', gap: 8, flexWrap: 'wrap' },
  merken: {
    flexDirection: 'row', alignItems: 'center', gap: 6,
    paddingVertical: 8, paddingHorizontal: 14, borderRadius: 100, borderWidth: 1.5,
  },
  hinweis: { borderLeftWidth: 2, paddingLeft: 10 },
  hinweisText: { fontSize: 12, lineHeight: 17, fontStyle: 'italic' },
  sentenceText: { fontSize: 19, fontWeight: '700', lineHeight: 26 },
  // `gloss` traegt seit dem 2026-08-22 nichts mehr - die deutsche Zeile ist
  // zur Aufgabe aufgestiegen und nutzt `sentenceText`. Bleibt stehen, falls
  // die Karte spaeter wieder eine Nebenzeile bekommt (etwa die Zeichen unter
  // dem Pinyin).
  gloss: { fontSize: 13, fontStyle: 'italic' },
  /** Die Loesung: gross wie die Aufgabe, aber farbig abgesetzt. */
  loesung: { fontSize: 20, fontWeight: '700', marginTop: 6 },
  neuHinweis: { fontSize: 12, fontWeight: '700', marginTop: 8 },
  zeigen: {
    alignSelf: 'flex-start',
    marginTop: 10,
    paddingVertical: 6,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderRadius: 8,
  },
  ttsButton: { paddingVertical: 8, paddingHorizontal: 14, borderRadius: 100, borderWidth: 1.5 },
  sttRow: { flexDirection: 'row', alignItems: 'center', marginBottom: 8 },
  micButton: { flex: 1, paddingVertical: 14, borderRadius: 100, alignItems: 'center' },
  micButtonText: { color: '#fff', fontWeight: '800', fontSize: 15 },
  transcript: { fontSize: 14, fontWeight: '600', marginBottom: 8 },
  inputCard: { borderWidth: 1.5, borderRadius: 16, padding: 14, marginBottom: 16, minHeight: 60 },
  input: { fontSize: 15, flex: 1, textAlignVertical: 'top' },
  feedback: { padding: 12, borderRadius: 12, marginBottom: 14 },
  // Ueberspringen und Loesen nebeneinander (Nutzer-Wunsch 2026-08-23) - vorher
  // stand "loesen" allein und zentriert, Ueberspringen lag oben bei der Karte.
  loesenReihe: {
    flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: 12,
  },
  uebespringenButton: {
    flexDirection: 'row', alignItems: 'center', gap: 6,
    paddingVertical: 12, paddingHorizontal: 16, borderRadius: 100, borderWidth: 1.5,
  },
  solveButton: {
    paddingVertical: 16, paddingHorizontal: 36, borderRadius: 100,
    borderWidth: 2, borderColor: ACCENT_GREEN,
  },
  solveButtonText: { color: ACCENT_GREEN, fontWeight: '800', fontSize: 16 },
  nextButton: { alignSelf: 'center', paddingVertical: 16, paddingHorizontal: 36, borderRadius: 100, backgroundColor: ACCENT_BLUE },
  nextButtonText: { color: '#fff', fontWeight: '800', fontSize: 16 },
  doneWrap: { flex: 1, alignItems: 'center', justifyContent: 'center', gap: 8, paddingVertical: 60 },
  doneTitle: { fontWeight: '800', fontSize: 22, marginBottom: 6 },
  doneSummary: { fontWeight: '600', fontSize: 15, marginBottom: 24 },
  finishButton: { paddingVertical: 15, paddingHorizontal: 38, borderRadius: 100, backgroundColor: ACCENT_BLUE },
  finishButtonText: { color: '#fff', fontWeight: '800', fontSize: 16 },
});
