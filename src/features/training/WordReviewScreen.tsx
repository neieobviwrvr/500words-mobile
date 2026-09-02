import { useCallback, useEffect, useMemo, useState } from 'react';
import { ActivityIndicator, Pressable, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
import { Feather, Ionicons } from '@expo/vector-icons';
import { router, useFocusEffect, useLocalSearchParams } from 'expo-router';
import { useAppState } from '../../state/AppState';
import { getLanguage } from '../../data/languages';
import { loadVocabWords, VocabWord } from '../../data/vocabContent';
import { UI_WORT_TEMPLATES } from '../../data/uiWortTemplates';
import { ladeSituationsAufgaben, SituationsAufgabe, VokabelOption, FrameWort } from '../../data/situationsAufgaben';
import { toPhrase, type Phrase } from '../../data/cheatsheetContent';
import { scenarioLabel } from '../../data/scenarios';
import {
  ladeZaehler,
  aendereZaehler,
  ladeJeErreicht,
  markiereJeErreicht,
  aktiverBatchIndex as aktiverBatchIndexGeneric,
  aktiverBatchPool as aktiverBatchPoolGeneric,
} from './batchLeiter';
import { normalisiereHanzi } from '../course/lessonEvaluation';
import { useSttRecorder } from '../stt/useSttRecorder';
import { useSpeechmatics } from '../stt/useSpeechmatics';
import { speakText } from '../tts/speak';
import { Screen, PillButton, ProgressBar, SchreibenFeld, UebungsMenu } from '../../components';
import {
  getTheme,
  SPACING,
  RADIUS,
  FONT_SIZE,
  LINE_HEIGHT,
  WORD_COLORS,
  ACCENT_GREEN,
  ACCENT_ERROR,
  ACCENT_ORANGE, schrift } from '../../theme/tokens';

// "Wörter-Wiederholung" (2026-08-24) - der erste der drei Trainingsmodi aus
// trainingModes.ts, der einen echten Screen bekommt (siehe Kommentar dort
// zum Warum "eigene Datei faellt aus dem Platzhalter heraus").
//
// Simons Auftrag: eine Auswahl nach WORTART (Verben, Nomen, Adjektive, "was
// sonst noch uebrig ist"), keine feste Vorgabe fuer den Uebungs-Mechanismus
// selbst ("ueberrasche mich"). Umgesetzt als klassisches Zuordnungsspiel -
// passt zur Beschreibung in trainingModes.ts ("Ordne Wörtern ihre Bedeutung
// zu") woertlich.
//
// BEWUSST NOCH NICHT gebaut, eigene spaetere Entscheidungen:
// - Lernkategorie-Filter (hotel_accommodation etc.) - Simon selbst war sich
//   nicht sicher, ob er das ueberhaupt will. Die Wortart-Filter-Architektur
//   unten (Set aus aktiven Werten) traegt einen zweiten, unabhaengigen
//   Filter locker mit, wenn die Entscheidung faellt.
// - FSRS-Anbindung: eine Zuordnungsrunde ist keine einzelne Bewertung wie
//   ein Satz - was daraus als Again/Hard/Good werden wuerde, ist eine eigene
//   Entscheidung, die das Projekt bisher nirgends leichtfertig getroffen hat
//   (siehe "Wiederholung: der Kurs haengt jetzt am FSRS" in CLAUDE.md - dort
//   war das ein eigener, dokumentierter Schritt).
//
// Wortart-Farben (Nomen=blau, Verben=rot, Adjektive=gelb, Pronomen=violett)
// aus tokens.ts wiederverwendet - die bisher NIRGENDS live gerendert wurden
// (siehe CLAUDE.md-Backlog "ColoredTokens... wird aktuell nirgends mehr live
// gerendert"). Hier ist endlich eine Stelle dafuer.

const WORTART_FARBE: Record<string, string> = {
  Verb: WORD_COLORS.v,
  Nomen: WORD_COLORS.n,
  Adjektiv: WORD_COLORS.a,
  Pronomen: WORD_COLORS.p,
  Konjunktion: WORD_COLORS.k,
};

/** Immer sichtbare Haupt-Chips, in dieser Reihenfolge - siehe Verwendung. */
const GROSSE_DREI = ['Nomen', 'Verb', 'Adjektiv'];

// 5 statt urspruenglich 6 Paare je Seite (2026-08-25, Simons Vorgabe) -
// zehn Kacheln insgesamt sind auf einem Handy-Bildschirm bequemer zu
// ueberblicken als zwoelf.
const RUNDENGROESSE = 5;

// 50er-Batches fuer die Graduierungs-Leiter (2026-08-25, Simons Vorgabe).
//
// Ohne das: `zuordnungAuswahl` unten mischt bei "Alle Wortarten" den
// KOMPLETTEN nicht-graduierten Pool (bis zu 530 Woerter) und nimmt die
// ersten 5. Bei RUNDENGROESSE=5 heisst das im Schnitt ~530/5 = 106 Runden
// zwischen zwei Begegnungen desselben Worts - fuer die noetigen drei
// richtigen Zuordnungen also grob 300+ Runden, ~1500-1800 Interaktionen,
// BEVOR ein einziges Wort ueberhaupt graduiert (Simons Rechnung, bestaetigt).
// Mit einem 50er-Batch sind es nur noch ~50/5=10 Runden zwischen
// Begegnungen, ~30 Runden/~150 Interaktionen bis zur Graduierung - fast
// eine Zehnerpotenz schneller.
const BATCH_GROESSE = 50;

// Weiche statt harte Freischalt-Schwelle (2026-08-25, Simons Einwand: eine
// feste 100%-Grenze haette ein einzelnes hartnaeckiges Wort auf unbestimmte
// Zeit blockieren koennen - "was, wenn der Nutzer Monate an einem Wort
// haengt"). 45 von 50 reichen; die restlichen 5 duerfen dauerhaft
// hartnaeckig bleiben, ohne den Rest des Wortschatzes aufzuhalten.
const BATCH_FREISCHALT_ANTEIL = 0.9;

// Drei-Stufen-System (2026-08-26, Simons Vorgabe - ersetzt die bisherige
// zweistufige Graduierungs-Leiter Zuordnung->Situations-Auswahl):
//   Stufe 1: Zuordnung, bei konjugierbaren Sprachen zusaetzlich
//            Personen-Zuordnung - GEMEINSAMER Zaehler (Simons Entscheidung:
//            jede Runde aus beiden Templates zaehlt auf denselben
//            Stufe-1-Fortschritt ein, kein UND-Gate zwischen beiden).
//   Stufe 2: Situations-Auswahl mit vier anklickbaren Optionen (bestehendes
//            Template, jetzt als mittlere statt letzte Stufe).
//   Stufe 3: Dasselbe Satzmaterial wie Stufe 2, aber ohne Optionen - das
//            Wort wird frei aus dem Kopf per STT eingesprochen (neu).
// Storage-Praefixe fuer Stufe 1 UNVERAENDERT gegenueber der frueheren
// graduierung.ts (keine Migration noetig, bestehende Zaehler bleiben
// lesbar) - nur der JS-Name ist jetzt `stufe1` statt `graduierung`. Stufe 2
// ist ein neuer, eigener Zaehler. Die generische Batch-/Zaehler-Logik liegt
// seit 2026-08-26 in `batchLeiter.ts` (wiederverwendet von
// SentenceReviewScreen.tsx fuer die Saetze-Leiter) - hier nur noch duenne,
// wortspezifische Wrapper drumherum.
const STUFE1_PRAEFIX = 'graduierung_v1:';
const STUFE2_PRAEFIX = 'wort_stufe2_v1:';
const JE_STUFE3_PRAEFIX = 'je_graduiert_v1:';
const STUFE1_SCHWELLE = 3;
const STUFE2_SCHWELLE = 3;
// `w.hanzi ?? String(w.id)` statt vorher nur `w.hanzi ?? ''` - der leere
// String haette fuer JEDES Wort ohne Hanzi (also jedes Nicht-Chinesisch-Wort)
// denselben Schluessel ergeben und alle Zaehler dieser Sprache in einem
// einzigen Eintrag zusammengefasst. Faellt fuer Chinesisch nicht auf
// (Hanzi bleibt der Schluessel, unveraendert gegenueber vorher), war aber
// eine Falle fuer die Verallgemeinerung auf andere Sprachen (2026-08-26,
// Simons Wunsch "Dieses System soll uebernehmbar fuer alle Sprachen sein").
const WORT_KEY = (w: VocabWord) => w.hanzi ?? String(w.id);

function loadStufe1(languageId: string): Promise<Record<string, number>> {
  return ladeZaehler(STUFE1_PRAEFIX, languageId);
}
function aendereStufe1(
  languageId: string,
  key: string,
  delta: number,
  bisher: Record<string, number>
): Promise<number> {
  return aendereZaehler(STUFE1_PRAEFIX, languageId, key, delta, STUFE1_SCHWELLE, bisher);
}
function loadStufe2(languageId: string): Promise<Record<string, number>> {
  return ladeZaehler(STUFE2_PRAEFIX, languageId);
}
function aendereStufe2(
  languageId: string,
  key: string,
  delta: number,
  bisher: Record<string, number>
): Promise<number> {
  return aendereZaehler(STUFE2_PRAEFIX, languageId, key, delta, STUFE2_SCHWELLE, bisher);
}
function loadJeStufe3(languageId: string): Promise<Set<string>> {
  return ladeJeErreicht(JE_STUFE3_PRAEFIX, languageId);
}
function markiereJeStufe3(languageId: string, key: string): Promise<void> {
  return markiereJeErreicht(JE_STUFE3_PRAEFIX, languageId, key);
}
function aktiverBatchIndex(sortiert: VocabWord[], jeStufe3Set: Set<string>): number {
  return aktiverBatchIndexGeneric(sortiert, WORT_KEY, jeStufe3Set, BATCH_GROESSE, BATCH_FREISCHALT_ANTEIL);
}
function aktiverBatchPool(pool: VocabWord[], jeStufe3Set: Set<string>): VocabWord[] {
  return aktiverBatchPoolGeneric(pool, WORT_KEY, jeStufe3Set, BATCH_GROESSE, BATCH_FREISCHALT_ANTEIL);
}

/**
 * Welche Stufe ist ein Wort gerade? Direkte Entsprechung zu `stufeVon()` in
 * SentenceReviewScreen.tsx, hier fuer Woerter statt Saetze. `kannKonjugieren`
 * hat hier keinen Einfluss auf die Stufen-ZAHL (anders als man vermuten
 * koennte) - der Unterschied bei konjugierbaren Sprachen liegt allein
 * darin, WELCHE Templates Stufe 1 speist (siehe `pronomenVerfuegbar`),
 * nicht in einer zusaetzlichen Stufe.
 */
function stufeVon(key: string, stufe1: Record<string, number>, stufe2: Record<string, number>): 1 | 2 | 3 {
  if ((stufe1[key] ?? 0) < STUFE1_SCHWELLE) return 1;
  if ((stufe2[key] ?? 0) < STUFE2_SCHWELLE) return 2;
  return 3;
}

// Eine Sitzung besteht aus mehreren Runden hintereinander, nicht nur einer
// (2026-08-25, Simons Vorgabe) - der Fortschrittsbalken unter der
// Ueberschrift zeigt, wie viele davon schon geschafft sind.
//
// VORERST FEST auf 6 (Simons Entscheidung, als Zwischenschritt): die
// eigentliche Vorgabe war 5-8 Runden, abhaengig davon, wie viele Woerter der
// gewaehlten Wortarten laut Spaced-Repetition gerade faellig waeren - dafuer
// muesste Woerter-Wiederholung aber erstmal an FSRS angebunden werden (siehe
// CLAUDE.md, "Bewusst NICHT dabei: jede FSRS-Anbindung"). Das ist eine
// eigene, groessere Entscheidung und bewusst nicht Teil dieser Aenderung.
const SESSION_RUNDEN = 6;

// ---------------------------------------------------------------------------
// Zweiter Rundentyp (2026-08-24, Simons Vorlage): "Ordne die Personen dem
// Verb zu" - Personalpronomen antippen, das dann vor die Verbform ins
// Frame wandert. Fuer den CORE-PFAD gedacht, hier schon als Baustein in
// die Wiederholungs-Mischung aufgenommen ("mische es zu").
//
// EHRLICHE EINSCHRAENKUNG, weil sie den Mechanismus praegt: keine der
// aktuell lernbaren Sprachen hat Daten fuer eine ECHTE Personenkonjugation.
// Schwedisch konjugiert grammatisch gar nicht nach Person (nur nach Zeit -
// `forms.present` gilt fuer "ich/du/er/wir" gleichermassen), Chinesisch
// konjugiert ueberhaupt nicht, Franzoesisch hat keine Formen-Spalte. Es gibt
// also nirgends ein "richtiges" Pronomen zu einer bestimmten Verbform, das
// erraten werden muesste - jedes der vier Pronomen ist fuer die heute
// verfuegbaren Sprachen tatsaechlich grammatisch richtig. Die Runde testet
// deshalb (noch) nicht Konjugation, sondern Satzbau/Personen-Wortschatz:
// jeder Tipp gilt als richtig und vervollstaendigt den Satz. Sobald eine
// Sprache mit echten Pro-Person-Formen dazukommt (z.B. Franzoesisch mit
// neuen Daten), wird daraus mit denselben Bausteinen eine echte
// Konjugations-Pruefung - dafuer bloss `presentForm` durch eine
// personenabhaengige Form ersetzen und die Immer-richtig-Logik unten durch
// einen echten Soll/Ist-Vergleich tauschen.
//
// Woher die vier Woerter kommen: aus UI_WORT_TEMPLATES.personalpronomen
// (siehe data/uiWortTemplates.ts), fest auf `de` - das Template deckt
// bereits Englisch/Franzoesisch/Spanisch mit ab, ist aber erst dann live
// verdrahtbar, wenn die Oberflaeche wirklich mehrsprachig ist (siehe
// Kommentar dort; `sourceLanguageId` selbst liegt seit 2026-08-24 in
// AppState bereit).
const PERSONEN = UI_WORT_TEMPLATES.personalpronomen.de;
type Person = (typeof PERSONEN)[number];
const PRONOMEN_RUNDENGROESSE = 5;

// ---------------------------------------------------------------------------
// Dritter Rundentyp (2026-08-24, Simons zweite Vorlage): "Situations-
// Auswahl" - eine Aufgabe aus einem echten Satz, vier Wortoptionen zur
// Auswahl, "Lösen" wertet aus. Herleitung/Grenzen siehe
// data/situationsAufgaben.ts (bewusst NICHTS davon neu getextet, nur aus
// vorhandenen Saetzen abgeleitet). GENERISCH nach Wortart, deshalb ohne
// Aenderung fuer Nomen/Sonstiges nutzbar - Simons zweiter Auftrag
// ("auch fuer Nomen und die anderen Wortkategorien").
const SITUATION_RUNDENGROESSE = 5;

// 'situation' (Stufe 2, mit Optionen) und 'situation-stt' (Stufe 3, freie
// Eingabe per STT) - vorher gab es nur EIN 'situation', das war zugleich
// die letzte Stufe der alten zweistufigen Leiter.
type Rundentyp = 'zuordnung' | 'pronomen' | 'situation' | 'situation-stt';

function mischen<T>(arr: T[]): T[] {
  const kopie = [...arr];
  for (let i = kopie.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [kopie[i], kopie[j]] = [kopie[j], kopie[i]];
  }
  return kopie;
}

type Phase = 'auswahl' | 'runde' | 'ergebnis';
// `sprich` ist meist gleich `text`, bei Chinesisch aber das Hanzi (siehe
// VocabWord.hanzi) - Sprachausgabe fuer Mandarin braucht echte Zeichen,
// das angezeigte Pinyin wuerde falsch oder gar nicht ausgesprochen.
// `hanzi` nur bei den Wort-Kacheln (links) gesetzt - die Bedeutungs-Kacheln
// (rechts) haben keins. Steuert die "Zeichen ein/aus"-Anzeige (2026-08-25).
// `wordClass` nur bei Links-Kacheln (Wort) mit Bedeutung gefuellt - bei
// Rechts-Kacheln (deutsche Bedeutung) bleibt sie leer, siehe Rendering
// weiter unten (2026-08-29, Wortarten-Farben jetzt auch auf den Kacheln
// selbst, vorher nur auf den Filter-Chips).
type Kachel = { wordId: number; text: string; sprich: string; hanzi: string | null; wordClass?: string };
type FalschBlitz = { linksId: number; rechtsId: number } | null;

/** Die Verbform, die im Frame steht - siehe presentForm-Kommentar oben. */
function frameForm(w: VocabWord): string {
  return w.presentForm ?? w.word;
}

export function WordReviewScreen() {
  const { darkMode, targetLanguageId, saved, toggleSaved } = useAppState();
  const theme = getTheme(darkMode);
  const language = getLanguage(targetLanguageId);
  // Fuer die Situations-Runde (2026-08-25, Simons zweite Vorlage dazu):
  // "sprich das richtige Wort ein ODER tippe es an" - dasselbe Mikrofon-
  // Muster wie im gefuehrten Kurs (siehe AntwortBlock in LessonScreen.tsx),
  // hier nur fuer EIN Wort statt eines ganzen Satzes.
  const stt = useSpeechmatics();
  const recorder = useSttRecorder();

  const [loading, setLoading] = useState(true);
  const [loadError, setLoadError] = useState<string | null>(null);
  const [words, setWords] = useState<VocabWord[]>([]);
  const [offline, setOffline] = useState(false);
  // Drei-Stufen-System (2026-08-26, siehe Kommentar bei `stufeVon` oben).
  // `stufe1` traegt weiterhin den Namen/Storage-Praefix der frueheren
  // `graduierung` (keine Migration noetig). `stufe2` ist neu.
  const [stufe1, setStufe1] = useState<Record<string, number>>({});
  const [stufe2, setStufe2] = useState<Record<string, number>>({});
  // Einweg-Markierung fuer die Batch-Freischaltung, jetzt "je Stufe 3
  // erreicht" statt "je graduiert" - Storage-Praefix unveraendert.
  const [jeStufe3, setJeStufe3] = useState<Set<string>>(new Set());

  const [aktiveWortarten, setAktiveWortarten] = useState<Set<string>>(new Set());
  const [phase, setPhase] = useState<Phase>('auswahl');
  const [rundentyp, setRundentyp] = useState<Rundentyp>('zuordnung');
  // Sitzung ueber mehrere Runden (siehe SESSION_RUNDEN oben). `rundeNr` ist
  // 1-indexiert - "Runde 1 von 6" beim allerersten Antippen von "Los geht's".
  const [rundeNr, setRundeNr] = useState(1);
  const [sessionRichtig, setSessionRichtig] = useState(0);
  const [sessionGesamt, setSessionGesamt] = useState(0);
  // Vorlagen-Wahl (2026-08-25, Simons Wunsch "einfach fuer mich als
  // Sortierung"): reines Test-/Sortierwerkzeug, damit man gezielt eine der
  // Vorlagen aus den Mockups oeffnen kann, statt auf den Zufall bei
  // "Mische es zu" zu warten. 'gemischt' ist die Vorgabe und aendert am
  // bisherigen Verhalten nichts. 'zuordnung' kam nachtraeglich dazu -
  // vorher war die Zuordnungsrunde nur der Fallback, kein eigener Menuepunkt.
  const [rundentypWahl, setRundentypWahl] = useState<'gemischt' | Rundentyp>('gemischt');

  const [links, setLinks] = useState<Kachel[]>([]);
  const [rechts, setRechts] = useState<Kachel[]>([]);
  const [gematcht, setGematcht] = useState<Set<number>>(new Set());
  const [gewaehlt, setGewaehlt] = useState<{ seite: 'links' | 'rechts'; id: number } | null>(null);
  const [falschBlitz, setFalschBlitz] = useState<FalschBlitz>(null);
  const [richtig, setRichtig] = useState(0);
  const [falsch, setFalsch] = useState(0);

  // Pronomen-Runde (siehe Kommentar bei PERSONEN oben).
  const [pronomenVerben, setPronomenVerben] = useState<VocabWord[]>([]);
  const [pronomenIndex, setPronomenIndex] = useState(0);
  const [pronomenGewaehlt, setPronomenGewaehlt] = useState<Person | null>(null);

  // Situations-Runde (siehe Kommentar bei SITUATION_RUNDENGROESSE oben).
  const [situationLadeFehler, setSituationLadeFehler] = useState<string | null>(null);
  const [situationAufgaben, setSituationAufgaben] = useState<SituationsAufgabe[]>([]);
  const [situationIndex, setSituationIndex] = useState(0);
  const [situationWortart, setSituationWortart] = useState('');
  const [situationGewaehlt, setSituationGewaehlt] = useState<VokabelOption | null>(null);
  const [situationAusgewertet, setSituationAusgewertet] = useState<'richtig' | 'falsch' | null>(null);
  const [situationRichtig, setSituationRichtig] = useState(0);
  const [situationNimmtAuf, setSituationNimmtAuf] = useState(false);
  const [situationPrueft, setSituationPrueft] = useState(false);
  const [situationSttFehler, setSituationSttFehler] = useState<string | null>(null);
  // Nur fuer Stufe 3 (freie Eingabe) - Stufe 2 hat die vier Optionen, dort
  // gibt es kein Tippen-statt-Sprechen. Gleiches Fallback-Muster wie
  // `SchreibenFeld` bei den Saetzen: Text ist der Not-Weg, nicht der
  // Hauptweg (Kernprinzip TTS/STT vor Text, siehe CLAUDE.md).
  const [situationInput, setSituationInput] = useState('');
  const [situationSchreibenOffen, setSituationSchreibenOffen] = useState(false);
  // Duolingo-Vorbild: auf ein Wort im vorgegebenen Rahmensatz tippen zeigt
  // seine Bedeutung. Schluessel statt Text, damit gleiche Woerter an
  // verschiedenen Stellen unabhaengig voneinander aufklappen.
  const [offenesRahmenwort, setOffenesRahmenwort] = useState<string | null>(null);

  // Zwei Anzeige-Umschalter (2026-08-25, Simons Vorgabe). `zeichenEin`
  // blendet seit demselben Tag bereits echt das Hanzi in Zuordnungs-Kacheln
  // (`k.hanzi`) und Situations-Rahmenwoertern (`rahmenwortChip`) aus -
  // NICHT mehr Platzhalter, der alte Kommentar dazu war ueberholt.
  //
  // Berichtigt 2026-08-26 (Simons Fehlerbericht "Zeichen an/aus tut
  // nichts"): der Umschalter war fuer Chinesisch schon laenger korrekt -
  // was fehlte, war eine Sprachgrenze. Fuer Schwedisch/Franzoesisch (kein
  // `hanzi`-Feld in der Vokabeltabelle) hatte der Knopf nie etwas zum
  // Aus-/Einblenden, wirkte deshalb kaputt, obwohl er technisch tat, was er
  // sollte. `hatSchriftzeichen` (unten) blendet ihn jetzt dort komplett aus,
  // statt einen wirkungslosen Knopf stehen zu lassen.
  // Vorgabe seit 2026-08-26 (Simons Wunsch) AUS statt AN - beim ersten
  // Betreten sieht man nur Pinyin, Hanzi ist ein bewusstes Dazuschalten
  // statt eines Wegschaltens. Passt besser zum Kernprinzip "gelernt wird
  // ueber Pinyin, Hanzi ist reine Zusatzinfo" (siehe CLAUDE.md).
  const [zeichenEin, setZeichenEin] = useState(false);
  const [uebersetzungEin, setUebersetzungEin] = useState(true);
  // "Übersetzung an/aus" darf nur dort bedient werden, wo die Uebung nicht
  // SELBST die Uebersetzung abfragt - im Zuordnungsspiel IST das Zuordnen
  // von Wort zu Bedeutung die Aufgabe, ausblenden wuerde die Uebung
  // unloesbar machen. Pronomen- und Situations-Runde fragen etwas anderes
  // ab (Person-zu-Verb bzw. welches Wort passt) und zeigen die Bedeutung
  // nur als Kontext dazu - dort darf sie optional weg.
  // Berichtigt 2026-08-26 (Simons Wunsch): im Zuordnungsspiel war der Knopf
  // bisher nur DEAKTIVIERT (ausgegraut, aber sichtbar) statt weg - dort
  // steht "Übersetzung" nie zur Debatte (siehe Kommentar oben), ein grau
  // angezeigter, nie bedienbarer Knopf ist reine Verwirrung. Heisst jetzt
  // auch "sichtbar" statt "aktiv", weil er beides in einem ist - entweder
  // ganz da und bedienbar, oder ganz weg.
  const uebersetzungKnopfAktiv = rundentyp !== 'zuordnung';
  // "Schriftzeichen" heisst hier konkret: gibt es ueberhaupt ein `hanzi`-Feld
  // in der aktuell geladenen Wortliste? Aus den echten Daten abgeleitet
  // statt hart auf `targetLanguageId === 'zh'` geprueft (heute dasselbe,
  // bleibt aber automatisch richtig, sollte je eine weitere Sprache mit
  // eigener Schrift dazukommen).
  const hatSchriftzeichen = useMemo(() => words.some((w) => !!w.hanzi), [words]);

  useEffect(() => {
    setOffenesRahmenwort(null);
  }, [situationIndex]);

  useEffect(() => {
    let cancelled = false;
    (async () => {
      setLoading(true);
      setLoadError(null);
      try {
        const [result, s1Stand, s2Stand, jeStand] = await Promise.all([
          loadVocabWords(targetLanguageId),
          loadStufe1(targetLanguageId),
          loadStufe2(targetLanguageId),
          loadJeStufe3(targetLanguageId),
        ]);
        if (cancelled) return;
        setWords(result.words);
        setOffline(result.fromCache);
        setStufe1(s1Stand);
        setStufe2(s2Stand);
        setJeStufe3(jeStand);
      } catch (e) {
        if (!cancelled) setLoadError(e instanceof Error ? e.message : String(e));
      } finally {
        if (!cancelled) setLoading(false);
      }
    })();
    return () => {
      cancelled = true;
    };
  }, [targetLanguageId]);

  // Bei jedem Betreten zurueck zur Wortarten-Auswahl (Nutzer-Wunsch
  // 2026-08-25) - derselbe Fall wie bei LessonScreen.tsx: der Screen liegt
  // in der Tab-Gruppe und bleibt gemountet, behielte seinen Stand (mitten
  // in einer Runde) also ueber das Weggehen via Tab-Leiste hinweg. Reicht,
  // NUR die Phase zurueckzusetzen - die Runden-Daten selbst sind beim
  // naechsten "Los geht's" ohnehin neu aufgebaut, solange sie nicht
  // gerendert werden, schaden veraltete Reste nicht.
  useFocusEffect(
    useCallback(() => {
      setPhase('auswahl');
    }, [])
  );

  // Wortarten nach Haeufigkeit - Grundlage fuer beide Chip-Reihen unten.
  const wortartenNachHaeufigkeit = useMemo(() => {
    const zaehler = new Map<string, number>();
    for (const w of words) zaehler.set(w.wordClass, (zaehler.get(w.wordClass) ?? 0) + 1);
    return [...zaehler.entries()].sort((a, b) => b[1] - a[1]);
  }, [words]);

  // Nomen/Verb/Adjektiv immer sichtbar und in DIESER Reihenfolge (Nutzer-
  // Wunsch 2026-08-25) - der Rest faechert erst hinter "···" auf, damit die
  // Auswahl nicht mit bis zu neun Chips ueberladen startet. Nur Wortarten,
  // die es fuer die aktuelle Sprache tatsaechlich gibt (Chinesisch hat kein
  // "Adjektiv" - siehe wortartAusDeutsch), sonst stuende dort ein Chip mit
  // "· 0" oder gar keine Zahl.
  const hauptWortarten = useMemo(
    () =>
      GROSSE_DREI.map((w) => wortartenNachHaeufigkeit.find(([name]) => name === w)).filter(
        (x): x is [string, number] => !!x
      ),
    [wortartenNachHaeufigkeit]
  );
  const weitereWortarten = useMemo(
    () => wortartenNachHaeufigkeit.filter(([w]) => !GROSSE_DREI.includes(w)),
    [wortartenNachHaeufigkeit]
  );
  const [weitereOffen, setWeitereOffen] = useState(false);

  const gefiltert = useMemo(() => {
    if (aktiveWortarten.size === 0) return words;
    return words.filter((w) => aktiveWortarten.has(w.wordClass));
  }, [words, aktiveWortarten]);

  // Fuer die Pronomen-Runde: unabhaengig vom Wortart-Filter IMMER aus allen
  // Verben schoepfen, aber die Runde nur anbieten, wenn Verben ueberhaupt
  // zur aktuellen Auswahl gehoeren (leer = alle, oder Verb ist mit dabei) -
  // sonst bekaeme, wer bewusst nur Nomen geuebt hat, ploetzlich ein Verb.
  //
  // NICHT fuer Chinesisch (2026-08-25, Simons Vorgabe): Chinesisch
  // konjugiert ueberhaupt nicht nach Person - die Runde haette dort nie
  // etwas zu pruefen, jeder Tipp waere per Definition richtig (siehe
  // CLAUDE.md, Abschnitt "Personen-Zuordnung"). Fuer die europaeischen
  // Sprachen mit Verbkonjugation (Schwedisch, Franzoesisch) bleibt sie an -
  // auch dort gibt es noch keine echten Pro-Person-Formen, aber zumindest
  // das grammatische KONZEPT existiert, anders als im Chinesischen.
  const verbPool = useMemo(() => words.filter((w) => w.wordClass === 'Verb'), [words]);
  const pronomenVerfuegbar =
    targetLanguageId !== 'zh' &&
    verbPool.length >= 1 &&
    (aktiveWortarten.size === 0 || aktiveWortarten.has('Verb'));

  function wortartUmschalten(wortart: string) {
    setAktiveWortarten((prev) => {
      const next = new Set(prev);
      if (next.has(wortart)) next.delete(wortart);
      else next.add(wortart);
      return next;
    });
  }

  /**
   * Setzt genau EINE Runde auf (Rundentyp waehlen, deren Daten laden) - wird
   * sowohl beim allerersten "Los geht's" als auch bei jeder folgenden Runde
   * innerhalb derselben Sitzung aufgerufen (siehe `rundeStarten` und
   * `rundeAbschliessen` unten). Setzt bewusst NICHT `rundeNr`/die
   * Sitzungs-Summe zurueck - das ist Sache der beiden Aufrufer.
   */
  async function rundeAufsetzen(
    stufe1Override?: Record<string, number>,
    stufe2Override?: Record<string, number>,
    jeStufe3Override?: Set<string>,
    // Nur fuer den Testbereich (2026-08-26) - siehe Kommentar beim
    // `debugTyp`-Effekt weiter unten: `setRundentypWahl()` VOR diesem Aufruf
    // reicht allein NICHT, weil dieser Funktionsaufruf noch den
    // `rundentypWahl`-Stand VON DIESEM Render liest (State-Updates gelten
    // erst ab dem naechsten) - exakt derselbe Fehler, der eben schon bei
    // SentenceReviewScreen.tsx gefixt wurde. `erzwingeTyp` umgeht die
    // Verfuegbarkeits-Kandidatenliste bewusst KOMPLETT (auch `pronomen`
    // ohne echte Verbauswahl waere hier moeglich) - der Testbereich stellt
    // die Voraussetzungen selbst schon sicher, kein zweiter Check noetig.
    erzwingeTyp?: Rundentyp,
    // Gleicher Grund wie `erzwingeTyp`: `aktiveWortarten` (Zeile unten bei
    // `typ === 'situation'`) haette dieselbe Stale-Closure-Falle, wenn der
    // Testbereich `setAktiveWortarten()` erst Millisekunden vorher aufgerufen
    // hat.
    erzwingeWortart?: string
  ) {
    // Frisch berechneter Stand hat Vorrang vor dem Component-State - siehe
    // Kommentar bei rundeAbschliessen: wird diese Funktion aus einem
    // Rundenabschluss heraus aufgerufen, ist `stufe1`/`stufe2` (State) zu
    // diesem Zeitpunkt noch der Stand VOR der letzten Bewertung. Gleiches
    // Problem, gleiche Loesung fuer die Einweg-Markierung.
    const s1 = stufe1Override ?? stufe1;
    const s2 = stufe2Override ?? stufe2;
    const jeStufe3Stand = jeStufe3Override ?? jeStufe3;

    // Drei-Stufen-System (2026-08-26): welche Woerter aus der aktuellen
    // Wortart-Auswahl stehen gerade auf welcher Stufe? Diese drei Pools
    // entscheiden, welche Templates diese Runde ueberhaupt etwas zu zeigen
    // haetten - Stufe 2/3 nur dann Kandidat, wenn tatsaechlich ein Wort dort
    // steht, sonst wuerde ein leeres Template gezogen.
    const stufe1Pool = gefiltert.filter((w) => stufeVon(WORT_KEY(w), s1, s2) === 1);
    const stufe2Pool = gefiltert.filter((w) => stufeVon(WORT_KEY(w), s1, s2) === 2);
    const stufe3Pool = gefiltert.filter((w) => stufeVon(WORT_KEY(w), s1, s2) === 3);

    // "Mische es zu" (Simons Vorgabe): zufaellig unter den verfuegbaren
    // Rundentypen. 'zuordnung' bleibt der unbedingte Grundkandidat (auch bei
    // leerem stufe1Pool faellt `zuordnungAuswahl` unten auf bereits weiter
    // fortgeschrittene Woerter zurueck statt eine leere Runde zu zeigen -
    // sichtbarer Rueckfall, kein Absturz). 'situation'/'situation-stt' nur
    // fuer Chinesisch (siehe situationsAufgaben.ts) UND nur, wenn ihr Pool
    // wirklich etwas enthaelt.
    //
    // Ausnahme: `rundentypWahl` erzwingt eine bestimmte Vorlage (siehe
    // Kommentar dort) - nur wenn sie fuer die aktuelle Sprache/Auswahl auch
    // wirklich verfuegbar ist, sonst faellt es ehrlich auf "gemischt"
    // zurueck statt eine Vorlage zu zeigen, die gar nicht bedienbar waere.
    const kandidaten: Rundentyp[] = ['zuordnung'];
    if (pronomenVerfuegbar) kandidaten.push('pronomen');
    if (targetLanguageId === 'zh' && stufe2Pool.length > 0) kandidaten.push('situation');
    if (targetLanguageId === 'zh' && stufe3Pool.length > 0) kandidaten.push('situation-stt');

    // Erzwingen, wenn Stufe 1 fuer die aktuelle Auswahl nichts mehr Neues
    // haette (alle Woerter schon auf Stufe 2 oder 3) - sonst wuerde
    // 'zuordnung' trotzdem manchmal gezogen und nur schon Bekanntes zeigen.
    // Vorrang fuer Stufe 2 vor Stufe 3, wenn beide etwas haetten - Stufe 2
    // ist der naechste faellige Schritt fuer mehr Woerter im Batch.
    let erzwungenerTyp: Rundentyp | null = null;
    if (stufe1Pool.length === 0) {
      if (stufe2Pool.length > 0) erzwungenerTyp = 'situation';
      else if (stufe3Pool.length > 0) erzwungenerTyp = 'situation-stt';
    }

    const typ =
      erzwingeTyp ??
      erzwungenerTyp ??
      (rundentypWahl !== 'gemischt' && kandidaten.includes(rundentypWahl)
        ? rundentypWahl
        : mischen(kandidaten)[0]);
    setRundentyp(typ);

    if (typ === 'pronomen') {
      const auswahl = mischen(verbPool).slice(0, Math.min(PRONOMEN_RUNDENGROESSE, verbPool.length));
      setPronomenVerben(auswahl);
      setPronomenIndex(0);
      setPronomenGewaehlt(null);
      setPhase('runde');
      return;
    }

    if (typ === 'situation' || typ === 'situation-stt') {
      const zielStufe = typ === 'situation' ? 2 : 3;
      // Wortart: die eine aktive Auswahl, sonst zufaellig unter den drei
      // Chinesisch-Eimern (siehe wortartAusDeutsch - nur diese drei gibt es
      // dort ueberhaupt).
      const wortart =
        erzwingeWortart ??
        (aktiveWortarten.size === 1
          ? [...aktiveWortarten][0]
          : mischen(['Verb', 'Nomen', 'Sonstiges'])[0]);
      setSituationWortart(wortart);
      setSituationLadeFehler(null);
      setPhase('runde'); // sofort umschalten, Ladezustand zeigt das Aufgaben-Array leer
      setSituationInput('');
      setSituationSchreibenOffen(false);
      try {
        const { aufgaben } = await ladeSituationsAufgaben(targetLanguageId, wortart);
        // Nur Woerter auf GENAU der gefragten Stufe (Drei-Stufen-System,
        // 2026-08-26) - ein Wort, das noch nicht durch Stufe 1 ist, soll bei
        // Stufe 2 nicht auftauchen, ein Wort, das Stufe 2 noch nicht
        // bestanden hat, nicht bei Stufe 3.
        const passendeAufgaben = aufgaben.filter((a) => stufeVon(a.richtig.hanzi, s1, s2) === zielStufe);
        const auswahl = mischen(passendeAufgaben).slice(
          0,
          Math.min(SITUATION_RUNDENGROESSE, passendeAufgaben.length)
        );
        if (auswahl.length === 0) {
          // Fuer diese Wortart kam nichts zusammen - lieber sofort das
          // Zuordnungsspiel aufsetzen als eine leere Runde zeigen oder
          // per Rekursion nochmal zufaellig zu ziehen.
          setRundentyp('zuordnung');
          const ersatz = zuordnungAuswahl(gefiltert, s1, s2, jeStufe3Stand);
          setLinks(mischen(ersatz.map((w) => ({ wordId: w.id, text: w.word, sprich: w.hanzi ?? w.word, hanzi: w.hanzi, wordClass: w.wordClass }))));
          setRechts(mischen(ersatz.map((w) => ({ wordId: w.id, text: w.german, sprich: w.german, hanzi: null }))));
          setGematcht(new Set());
          setGewaehlt(null);
          setFalschBlitz(null);
          setRichtig(0);
          setFalsch(0);
          return;
        }
        setSituationAufgaben(auswahl);
        setSituationIndex(0);
        setSituationGewaehlt(null);
        setSituationAusgewertet(null);
        setSituationRichtig(0);
      } catch (e) {
        setSituationLadeFehler(e instanceof Error ? e.message : String(e));
      }
      return;
    }

    const auswahl = zuordnungAuswahl(gefiltert, s1, s2, jeStufe3Stand);
    setLinks(mischen(auswahl.map((w) => ({ wordId: w.id, text: w.word, sprich: w.hanzi ?? w.word, hanzi: w.hanzi, wordClass: w.wordClass }))));
    setRechts(mischen(auswahl.map((w) => ({ wordId: w.id, text: w.german, sprich: w.german, hanzi: null }))));
    setGematcht(new Set());
    setGewaehlt(null);
    setFalschBlitz(null);
    setRichtig(0);
    setFalsch(0);
    setPhase('runde');
  }

  /**
   * Testbereich-Sprungmarke (2026-08-26, Simons Wunsch: "einfach zu jeder
   * Stufe ein Beispiel zeigen"). Nur aktiv, wenn `debugTyp` als Query-Param
   * ankommt (von `/dev-tools/testbereich.tsx` aus) - fuer alle anderen
   * Aufrufer unveraendert, weil der Parameter dort nie gesetzt wird.
   *
   * Zuordnung/Pronomen laufen 1:1 ueber den bestehenden `rundentypWahl`-
   * Mechanismus (siehe Kommentar dort) - der reicht fuer diese beiden schon,
   * KEIN Sonderfall noetig. Situations-Auswahl dagegen braucht echte
   * Graduierung (siehe `rundeAufsetzen`: ohne mindestens ein graduiertes
   * Wort steht sie gar nicht erst zur Wahl) - auf einem frischen Testkonto
   * gibt es die nie. Deshalb hier ein synthetischer, NUR im Component-State
   * lebender Graduierungs-Stand (kein AsyncStorage-Schreiben, verschwindet
   * mit dem Verlassen des Screens) fuer GENAU die Woerter, die die geladenen
   * Situations-Aufgaben auch wirklich brauchen - echte Aufgaben aus echten
   * Saetzen, nur die Fortschritts-Huerde ist uebersprungen.
   */
  const { debugTyp } = useLocalSearchParams<{ debugTyp?: string }>();
  useEffect(() => {
    if (!debugTyp || words.length === 0) return;
    (async () => {
      const erzwingeTyp: Rundentyp =
        debugTyp === 'pronomen' || debugTyp === 'situation' || debugTyp === 'situation-stt' ? debugTyp : 'zuordnung';
      setRundentypWahl(erzwingeTyp);
      setRundeNr(1);
      setSessionRichtig(0);
      setSessionGesamt(0);
      if (erzwingeTyp === 'situation' || erzwingeTyp === 'situation-stt') {
        setAktiveWortarten(new Set(['Verb']));
        const { aufgaben } = await ladeSituationsAufgaben(targetLanguageId, 'Verb');
        // Stufe 1 (und fuer Stufe 3 zusaetzlich Stufe 2) synthetisch auf die
        // Schwelle gesetzt fuer GENAU die Woerter, die die geladenen
        // Aufgaben brauchen - echte Aufgaben, nur die Fortschritts-Huerde
        // ist uebersprungen (siehe Kommentar oben).
        const s1Override: Record<string, number> = {};
        const s2Override: Record<string, number> = {};
        for (const a of aufgaben) {
          s1Override[a.richtig.hanzi] = STUFE1_SCHWELLE;
          if (erzwingeTyp === 'situation-stt') s2Override[a.richtig.hanzi] = STUFE2_SCHWELLE;
        }
        setStufe1(s1Override);
        setStufe2(s2Override);
        await rundeAufsetzen(s1Override, s2Override, undefined, erzwingeTyp, 'Verb');
        return;
      }
      if (erzwingeTyp === 'pronomen') setAktiveWortarten(new Set(['Verb']));
      await rundeAufsetzen(undefined, undefined, undefined, erzwingeTyp);
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [debugTyp, words, targetLanguageId]);

  /**
   * Woerter fuer eine Zuordnungsrunde ziehen. Fuer Chinesisch bevorzugt
   * NICHT graduierte Woerter (Zaehler < GRADUIERUNGSSCHWELLE) - graduierte
   * Woerter gehoeren eigentlich in die Situations-Auswahl und sollen eine
   * Zuordnungsrunde nur noch fuellen, wenn sonst nicht genug Woerter da
   * sind (z.B. weil fuer sie keine Situations-Aufgabe existiert, siehe
   * data/situationsAufgaben.ts - "keine Aufgabe" ist KEIN Grund, ein Wort
   * dauerhaft die Haelfte jeder Runde stellen zu lassen).
   */
  function zuordnungAuswahl(
    pool: VocabWord[],
    s1Stand: Record<string, number>,
    s2Stand: Record<string, number>,
    jeStufe3Set: Set<string>
  ): VocabWord[] {
    // Nur der aktive Batch (siehe BATCH_GROESSE oben) - sonst verduennt sich
    // die Trefferchance auf ein bestimmtes Wort mit jedem weiteren
    // freigeschalteten Wort immer weiter. Die Batch-Grenze nutzt die
    // Einweg-Markierung (`jeStufe3Set`), NICHT den aktuellen Zaehler -
    // welches Wort gerade in Zuordnung vs. spaeteren Stufen auftaucht,
    // entscheidet weiterhin `s1Stand`/`s2Stand` (der aktuelle Stand) direkt
    // danach. Gilt jetzt fuer ALLE Sprachen (2026-08-26, "uebernehmbar fuer
    // alle Sprachen") - vorher nur fuer Chinesisch, weil `WORT_KEY` frueher
    // fuer jedes Wort ohne Hanzi denselben leeren Schluessel ergab (siehe
    // Kommentar dort) und die Batch-Logik dadurch fuer andere Sprachen
    // sinnlos gewesen waere.
    const batch = aktiverBatchPool(pool, jeStufe3Set);
    const stufe1 = batch.filter((w) => stufeVon(WORT_KEY(w), s1Stand, s2Stand) === 1);
    const weiter = batch.filter((w) => stufeVon(WORT_KEY(w), s1Stand, s2Stand) !== 1);
    const priorisiert = [...mischen(stufe1), ...mischen(weiter)];
    return priorisiert.slice(0, Math.min(RUNDENGROESSE, priorisiert.length));
  }

  /** Startet eine komplett NEUE Sitzung aus SESSION_RUNDEN Runden. */
  async function rundeStarten() {
    setRundeNr(1);
    setSessionRichtig(0);
    setSessionGesamt(0);
    await rundeAufsetzen();
  }

  /**
   * Eine Runde ist fertig - Sitzungs-Summe fortschreiben, dann entweder die
   * naechste Runde aufsetzen oder (nach SESSION_RUNDEN Runden) zum
   * Ergebnis-Screen. `richtigDieseRunde`/`gesamtDieseRunde` kommen als feste
   * Zahlen vom Aufrufer statt aus Component-State gelesen zu werden - die
   * Aufrufer stehen alle in `setTimeout`-Callbacks, und Component-State waere
   * dort je nach Timing noch der alte Wert von vor dem letzten Tipp.
   */
  function rundeAbschliessen(
    richtigDieseRunde: number,
    gesamtDieseRunde: number,
    stufe1Override?: Record<string, number>,
    stufe2Override?: Record<string, number>,
    jeStufe3Override?: Set<string>
  ) {
    setSessionRichtig((r) => r + richtigDieseRunde);
    setSessionGesamt((g) => g + gesamtDieseRunde);
    if (rundeNr >= SESSION_RUNDEN) {
      setPhase('ergebnis');
    } else {
      setRundeNr((n) => n + 1);
      rundeAufsetzen(stufe1Override, stufe2Override, jeStufe3Override);
    }
  }

  function situationOptionTippen(o: VokabelOption) {
    if (situationAusgewertet) return;
    setSituationGewaehlt(o);
    // Gleich vorlesen, unabhaengig davon ob die Wahl am Ende stimmt -
    // dieselbe kostenlose Aussprachehilfe bei jedem Antippen wie in der
    // Zuordnungsrunde (2026-08-25, Simons Vorgabe), nicht erst nach "Lösen".
    speakText(o.hanzi, { languageId: targetLanguageId });
  }

  /**
   * Stufe 2 (Situations-Auswahl mit Optionen). Berichtigt 2026-08-26 fuers
   * Drei-Stufen-System: eine RICHTIGE Antwort zaehlt jetzt auf `stufe2`
   * (vorher: "aendert nichts, das Wort steht schon auf der Schwelle" - galt
   * nur, weil Situations-Auswahl frueher die LETZTE Stufe war). Eine FALSCHE
   * Antwort wirft weiterhin `stufe1` einen Schritt zurueck (sanft, nicht auf
   * 0 - Simons Entscheidung, unveraendert) - zurueck Richtung Zuordnung
   * statt nur innerhalb von Stufe 2 zu regredieren, weil eine falsche
   * Auswahl hier heisst, dass die Grundbedeutung noch nicht sicher sitzt.
   */
  function situationLoesen() {
    if (!situationGewaehlt || situationAusgewertet) return;
    const aufgabe = situationAufgaben[situationIndex];
    const stimmt = situationGewaehlt.hanzi === aufgabe.richtig.hanzi;
    setSituationAusgewertet(stimmt ? 'richtig' : 'falsch');
    // Feste Zahl statt spaeter aus State gelesen - siehe Kommentar bei
    // rundeAbschliessen.
    const richtigJetzt = situationRichtig + (stimmt ? 1 : 0);
    if (stimmt) setSituationRichtig(richtigJetzt);
    const gefragtesWort = aufgabe.richtig.hanzi;
    let neueStufe1 = stufe1;
    let neueStufe2 = stufe2;
    let neueJeStufe3 = jeStufe3;
    if (stimmt) {
      const neuerStand = Math.min(STUFE2_SCHWELLE, (stufe2[gefragtesWort] ?? 0) + 1);
      neueStufe2 = { ...stufe2, [gefragtesWort]: neuerStand };
      setStufe2(neueStufe2);
      void aendereStufe2(targetLanguageId, gefragtesWort, 1, stufe2);
      if (neuerStand >= STUFE2_SCHWELLE && !jeStufe3.has(gefragtesWort)) {
        neueJeStufe3 = new Set(jeStufe3).add(gefragtesWort);
        setJeStufe3(neueJeStufe3);
        void markiereJeStufe3(targetLanguageId, gefragtesWort);
      }
    } else {
      neueStufe1 = { ...stufe1, [gefragtesWort]: Math.max(0, (stufe1[gefragtesWort] ?? 0) - 1) };
      setStufe1(neueStufe1);
      void aendereStufe1(targetLanguageId, gefragtesWort, -1, stufe1);
    }
    setTimeout(() => {
      setSituationGewaehlt(null);
      setSituationAusgewertet(null);
      if (situationIndex + 1 >= situationAufgaben.length) {
        rundeAbschliessen(richtigJetzt, situationAufgaben.length, neueStufe1, neueStufe2, neueJeStufe3);
      } else {
        setSituationIndex((i) => i + 1);
      }
    }, 1400);
  }

  /**
   * Mikrofon fuer die Situations-Runde - "sprich das richtige Wort ein
   * ODER tippe es an" (Simons Vorlage 2026-08-25). Start/Stopp/Transkription
   * genau wie `aufnehmen()` in LessonScreen.tsx, aber ausgewertet wird nur
   * EIN Wort gegen die vier angezeigten Optionen, nicht ein ganzer Satz -
   * `bewerteAntwort()` dort ist fuer Satzstruktur gebaut, hier reicht der
   * Homophon-Abgleich aus `normalisiereHanzi()` allein.
   *
   * Trifft die Erkennung KEINE der vier Optionen, wird nichts ausgewaehlt -
   * die Aufgabe bleibt loesbar per Antippen, das Mikrofon ist eine
   * zusaetzliche Eingabeart, keine Sackgasse.
   */
  async function situationMikroTippen() {
    setSituationSttFehler(null);
    if (!situationNimmtAuf) {
      setSituationNimmtAuf(true);
      try {
        await recorder.start();
      } catch {
        setSituationNimmtAuf(false);
        setSituationSttFehler('Das Mikrofon ließ sich nicht starten.');
      }
      return;
    }
    setSituationNimmtAuf(false);
    setSituationPrueft(true);
    try {
      const uri = await recorder.stop();
      if (!uri) throw new Error('keine Aufnahme');
      // Berichtigt 2026-08-26: `targetLanguageId` ('zh') statt
      // `language.sttLanguage` ('cmn') an Speechmatics zu geben war ein
      // Fehler - der Sprachcode fuer die Erkennung ist nicht derselbe wie
      // unsere interne Sprach-ID (siehe languages.ts). Fiel bisher nicht
      // auf, weil `normalisiereHanzi()`-Toleranz vieles auffing.
      const { text } = await stt.transcribe(uri, language.sttLanguage);
      const gesagt = normalisiereHanzi(text);
      const aufgabe = situationAufgaben[situationIndex];
      const treffer = aufgabe?.optionen.find((o) => gesagt.includes(normalisiereHanzi(o.hanzi)));
      if (treffer) {
        setSituationGewaehlt(treffer);
      } else {
        setSituationSttFehler('Nicht verstanden — tippe eine Option an oder versuch’s nochmal.');
      }
    } catch {
      setSituationSttFehler('Die Spracherkennung hat nicht geantwortet. Tippe eine Option an.');
    } finally {
      setSituationPrueft(false);
    }
  }

  /**
   * Stufe 3 (2026-08-26, neu) - dasselbe Satzmaterial wie Stufe 2, aber ohne
   * anklickbare Optionen: das Wort muss frei aus dem Kopf kommen, per STT
   * ODER per Text-Fallback (`situationSchreibenOffen`, gleiches Muster wie
   * `SchreibenFeld` bei den Saetzen). Wertet NUR gegen das eine richtige
   * Wort aus (anders als `situationMikroTippen` bei Stufe 2, das gegen alle
   * vier angezeigten Optionen prueft - hier gibt es keine Optionen).
   */
  function situationStufe3Auswerten(gesagtRoh: string) {
    const aufgabe = situationAufgaben[situationIndex];
    if (!aufgabe || situationAusgewertet || !gesagtRoh.trim()) return;
    const gesagt = normalisiereHanzi(gesagtRoh);
    const stimmt = gesagt.includes(normalisiereHanzi(aufgabe.richtig.hanzi));
    setSituationAusgewertet(stimmt ? 'richtig' : 'falsch');
    // Fuellt die Luecke im Rahmen mit der richtigen Antwort (unabhaengig
    // vom Ergebnis) - derselbe Mechanismus, den Stufe 2 schon fuer die
    // ANGETIPPTE Option nutzt (`renderSituationsKopf` prueft nur, ob
    // `situationGewaehlt` gesetzt ist). Ohne das bliebe die Luecke bei
    // Stufe 3 fuer immer "...", weil hier nie etwas angetippt wird.
    setSituationGewaehlt(aufgabe.richtig);
    const richtigJetzt = situationRichtig + (stimmt ? 1 : 0);
    if (stimmt) setSituationRichtig(richtigJetzt);
    // Stufe 3 ist die letzte Stufe - eine richtige Antwort erhoeht keinen
    // Zaehler mehr (das Wort steht schon auf der Schwelle, "je Stufe 3"
    // wurde beim Erreichen der Stufe-2-Schwelle gesetzt, siehe
    // situationLoesen). Eine FALSCHE Antwort wirft `stufe2` sanft zurueck
    // (dasselbe Prinzip wie ueberall sonst hier: nicht auf 0, ein Schritt).
    const gefragtesWort = aufgabe.richtig.hanzi;
    let neueStufe2 = stufe2;
    if (!stimmt) {
      neueStufe2 = { ...stufe2, [gefragtesWort]: Math.max(0, (stufe2[gefragtesWort] ?? 0) - 1) };
      setStufe2(neueStufe2);
      void aendereStufe2(targetLanguageId, gefragtesWort, -1, stufe2);
    }
    setTimeout(() => {
      setSituationGewaehlt(null);
      setSituationAusgewertet(null);
      setSituationInput('');
      if (situationIndex + 1 >= situationAufgaben.length) {
        rundeAbschliessen(richtigJetzt, situationAufgaben.length, undefined, neueStufe2);
      } else {
        setSituationIndex((i) => i + 1);
      }
    }, 1400);
  }

  async function situationSttStufe3Mikro() {
    setSituationSttFehler(null);
    if (!situationNimmtAuf) {
      setSituationNimmtAuf(true);
      try {
        await recorder.start();
      } catch {
        setSituationNimmtAuf(false);
        setSituationSttFehler('Das Mikrofon ließ sich nicht starten.');
      }
      return;
    }
    setSituationNimmtAuf(false);
    setSituationPrueft(true);
    try {
      const uri = await recorder.stop();
      if (!uri) throw new Error('keine Aufnahme');
      const { text } = await stt.transcribe(uri, language.sttLanguage);
      situationStufe3Auswerten(text);
    } catch {
      setSituationSttFehler('Die Spracherkennung hat nicht geantwortet. Tippe es stattdessen ein.');
    } finally {
      setSituationPrueft(false);
    }
  }

  function personTippen(person: Person) {
    if (pronomenGewaehlt) return; // schon dabei, weiterzuschalten
    // Jedes Pronomen gilt als richtig (siehe Kommentar bei PERSONEN oben) -
    // Vorlesen macht daraus trotzdem ein Ausspracheerlebnis, kein reines
    // Abnicken.
    const verb = pronomenVerben[pronomenIndex];
    if (verb) {
      speakText(`${verb.hanzi ?? frameForm(verb)}`, { languageId: targetLanguageId });
    }
    setPronomenGewaehlt(person);
    // Stufe 1, GEMEINSAMER Zaehler mit der Zuordnung (2026-08-26, Simons
    // Entscheidung: "auf Stufe 1 sollen Verben sowohl bei der Zuordnung als
    // auch bei der Personenzuordnung zu finden sein" - EIN Fortschritt, egal
    // aus welchem der beiden Templates er kommt). "Jeder Tipp gilt als
    // richtig" (siehe Kommentar oben) heisst hier: reine Exposition zaehlt,
    // kein Korrektheits-Gate - genau wie Stufe 1 bei Saetze-Wiederholung
    // (Nachsprechen) auch nur Exposition prueft.
    let neueStufe1 = stufe1;
    if (verb) {
      const key = WORT_KEY(verb);
      const neuerStand = Math.min(STUFE1_SCHWELLE, (stufe1[key] ?? 0) + 1);
      neueStufe1 = { ...stufe1, [key]: neuerStand };
      setStufe1(neueStufe1);
      void aendereStufe1(targetLanguageId, key, 1, stufe1);
    }
    setTimeout(() => {
      setPronomenGewaehlt(null);
      if (pronomenIndex + 1 >= pronomenVerben.length) {
        // Jeder Tipp zaehlt als richtig (siehe Kommentar oben) - die ganze
        // Runde geht deshalb voll in die Sitzungs-Summe ein.
        rundeAbschliessen(pronomenVerben.length, pronomenVerben.length, neueStufe1);
      } else {
        setPronomenIndex((i) => i + 1);
      }
    }, 700);
  }

  function kachelTippen(seite: 'links' | 'rechts', id: number) {
    if (gematcht.has(id) || falschBlitz) return;

    if (seite === 'links') {
      // Gleich vorlesen, unabhaengig vom Ergebnis - kostenlose Aussprache-
      // hilfe bei jedem Antippen, kein Extra-Lautsprecher-Symbol noetig, das
      // in den kleinen Kacheln kaum Platz haette.
      speakText(links.find((k) => k.wordId === id)?.sprich ?? '', { languageId: targetLanguageId });
    }

    if (!gewaehlt) {
      setGewaehlt({ seite, id });
      return;
    }
    if (gewaehlt.seite === seite) {
      // Zweite Wahl auf derselben Seite - Auswahl einfach wechseln.
      setGewaehlt({ seite, id });
      return;
    }
    // Ein Wort- und ein Bedeutungs-Tipp liegen vor - pruefen.
    if (gewaehlt.id === id) {
      const neu = new Set(gematcht);
      neu.add(id);
      setGematcht(neu);
      setGewaehlt(null);
      setRichtig((r) => r + 1);
      // Stufe 1, GEMEINSAMER Zaehler mit der Personen-Zuordnung (siehe
      // Kommentar bei `personTippen`). Jetzt fuer ALLE Sprachen (2026-08-26,
      // "uebernehmbar fuer alle Sprachen") statt nur Chinesisch - `k.hanzi ??
      // String(k.wordId)` statt nur `k.hanzi` matcht `WORT_KEY()`s
      // Konvention, damit Zuordnung und Personen-Zuordnung garantiert
      // denselben Schluessel fuer dasselbe Wort verwenden.
      //
      // KEINE Einweg-Markierung mehr hier (anders als vor dem
      // Drei-Stufen-Umbau): das Erreichen der Stufe-1-Schwelle ist jetzt nur
      // der Uebergang zu Stufe 2, nicht das Ende der Leiter - `jeStufe3`
      // wird erst gesetzt, wenn Stufe 2 (siehe `situationLoesen`) ihre
      // eigene Schwelle erreicht.
      const kachel = links.find((k) => k.wordId === id);
      const matchKey = kachel ? (kachel.hanzi ?? String(kachel.wordId)) : null;
      let neueStufe1 = stufe1;
      if (matchKey) {
        const neuerStand = Math.min(STUFE1_SCHWELLE, (stufe1[matchKey] ?? 0) + 1);
        neueStufe1 = { ...stufe1, [matchKey]: neuerStand };
        setStufe1(neueStufe1);
        void aendereStufe1(targetLanguageId, matchKey, 1, stufe1);
      }
      if (neu.size === links.length) {
        // richtig+1 statt aus State gelesen - siehe Kommentar bei
        // rundeAbschliessen. Dieser Treffer IST der letzte fehlende, also
        // ist "bisher richtig plus dieser eine" die korrekte Endzahl.
        const richtigJetzt = richtig + 1;
        setTimeout(() => rundeAbschliessen(richtigJetzt, links.length, neueStufe1), 350);
      }
    } else {
      setFalsch((f) => f + 1);
      const linksId = seite === 'links' ? id : gewaehlt.id;
      const rechtsId = seite === 'rechts' ? id : gewaehlt.id;
      setFalschBlitz({ linksId, rechtsId });
      setTimeout(() => {
        setFalschBlitz(null);
        setGewaehlt(null);
      }, 500);
    }
  }

  // Zurueck fuehrt WAEHREND einer Runde (egal welcher der drei Rundentypen)
  // erst zur Wortarten-Auswahl zurueck, nicht gleich aus dem ganzen Screen
  // hinaus (Nutzer-Wunsch 2026-08-24) - der "Los geht's"-Screen ist die
  // eigentliche vorherige Seite aus Nutzersicht, auch wenn technisch alles
  // derselbe Screen ist. Erst AUF der Auswahl fuehrt Zurueck wirklich aus
  // Woerter-Wiederholung heraus.
  function zurueckTippen() {
    if (phase !== 'auswahl') {
      setPhase('auswahl');
      return;
    }
    router.back();
  }

  /** Ein Wortart-Chip - fuer die Haupt- UND die aufgeklappte Reihe gleich. */
  function wortartChip(wortart: string, anzahl: number) {
    const aktiv = aktiveWortarten.has(wortart);
    const farbe = WORTART_FARBE[wortart] ?? theme.sub;
    return (
      <Pressable
        key={wortart}
        onPress={() => wortartUmschalten(wortart)}
        accessibilityRole="button"
        accessibilityState={{ selected: aktiv }}
        style={[
          styles.chip,
          { borderColor: aktiv ? farbe : theme.border, backgroundColor: aktiv ? farbe : 'transparent' },
        ]}
      >
        <Text style={[styles.chipText, { color: aktiv ? '#FFFFFF' : theme.text }]}>
          {wortart} · {anzahl}
        </Text>
      </Pressable>
    );
  }

  // Duolingo-Vorbild: auf ein Wort im Rahmensatz tippen zeigt seine
  // Bedeutung darunter. Nur aktiv, wenn der Uebersetzung-Umschalter an UND
  // fuer die Runde ueberhaupt freigegeben ist (siehe uebersetzungKnopfAktiv
  // oben) - sonst wuerde ein Tipp die Antwort verraten, wo das nicht
  // gewollt ist. Woerter ohne bekannte Bedeutung (einzelne Satzzeichen)
  // bleiben antippbar, zeigen aber ehrlich nichts statt zu raten - echte
  // Mehrdeutigkeit gibt es hier nicht mehr, weil die Zerlegung ueber Hanzi
  // laeuft (siehe situationsAufgaben.ts).
  //
  // `zeichenEin` blendet das Hanzi ÜBER dem Pinyin ein - genau der von
  // Simon gewuenschte Umschalter (2026-08-25). Pinyin bleibt die primaere
  // Zeile (Kernprinzip: gelernt wird ueber Pinyin), Hanzi ist reine
  // Zusatzinfo obendrueber, keine Textersetzung.
  function rahmenwortChip(key: string, wort: FrameWort) {
    const tippbar = uebersetzungEin && uebersetzungKnopfAktiv && !!wort.german;
    const aktiv = offenesRahmenwort === key;
    return (
      <Pressable
        key={key}
        disabled={!tippbar}
        onPress={() => setOffenesRahmenwort((cur) => (cur === key ? null : key))}
        accessibilityRole={tippbar ? 'button' : undefined}
        accessibilityLabel={tippbar ? `${wort.pinyin}: Bedeutung anzeigen` : undefined}
        style={styles.frameWortSpalte}
      >
        {/* Zeile bleibt IMMER gemountet, nur die Sichtbarkeit wechselt
            (Simons Wunsch 2026-08-26: "Zeichen an/aus" darf den Rest des
            Screens nicht verschieben) - `wort.hanzi` ist bei jedem Wort
            gesetzt (auch bei Satzzeichen, siehe tokenisiereHanzi), die
            Zeilenhoehe ist dadurch fuer JEDES Chip in der Reihe gleich,
            egal ob `zeichenEin` gerade an ist. */}
        <Text
          style={[styles.frameHanziText, { color: theme.sub, opacity: zeichenEin && wort.german !== null ? 1 : 0 }]}
        >
          {wort.hanzi}
        </Text>
        <Text
          style={[
            styles.frameText,
            { color: theme.text },
            aktiv ? { textDecorationLine: 'underline', textDecorationColor: ACCENT_ORANGE } : null,
          ]}
        >
          {wort.pinyin}
        </Text>
      </Pressable>
    );
  }

  /**
   * Gemeinsamer Kopf fuer Stufe 2 (Situations-Auswahl mit Optionen) UND
   * Stufe 3 (freie Eingabe, 2026-08-26 neu) - Frage, Speichern-Knopf,
   * Luecken-Satz mit Rahmenwoertern. Beide Stufen zeigen exakt dasselbe hier,
   * der Unterschied faengt erst danach an (vier Optionen vs. Mikro/Text-
   * Eingabe ohne Optionen) - EINE Funktion statt zweier fast identischer
   * Kopien.
   */
  function renderSituationsKopf(aufgabe: SituationsAufgabe) {
    return (
      <>
        <Text style={[styles.frage, { color: theme.text, fontSize: FONT_SIZE.title, lineHeight: LINE_HEIGHT.title }]}>
          {aufgabe.frage}
        </Text>
        {/* Speichern nach Survival (2026-08-26, Simons Wunsch: "auf jedem
            Satztemplate fuer egal welche Stufe ein Speicherbutton") -
            gleiche Position/Optik wie in SentenceReviewScreen.tsx, direkt
            unter der Frage. */}
        <Pressable
          onPress={() => {
            if (situationPhrase) toggleSaved(situationPhrase.id, situationPhrase);
          }}
          accessibilityRole="button"
          accessibilityLabel={istSituationGemerkt ? 'Gemerkt' : 'Speichern'}
          accessibilityHint={
            istSituationGemerkt ? 'Aus den gespeicherten Sätzen entfernen' : 'Zu den gespeicherten Sätzen im Survival hinzufügen'
          }
          accessibilityState={{ selected: istSituationGemerkt }}
          style={({ pressed }) => [
            styles.merken,
            { borderColor: istSituationGemerkt ? ACCENT_GREEN : theme.border, opacity: pressed ? 0.6 : 1 },
          ]}
        >
          <Ionicons
            name={istSituationGemerkt ? 'bookmark' : 'bookmark-outline'}
            size={16}
            color={istSituationGemerkt ? ACCENT_GREEN : theme.sub}
          />
          <Text style={{ color: istSituationGemerkt ? ACCENT_GREEN : theme.sub, ...schrift('700'), fontSize: 12 }}>
            {istSituationGemerkt ? 'Gemerkt' : 'Speichern'}
          </Text>
        </Pressable>
        <Text style={[styles.spielHinweis, { color: theme.sub, textAlign: 'left', marginBottom: 0 }]}>
          Sprich das richtige Wort ein oder tippe es an
        </Text>

        <View style={[styles.frameBox, { borderColor: theme.border, backgroundColor: theme.cardBg }]}>
          <View style={styles.frameWoerterReihe}>
            {aufgabe.frameVorherWoerter.map((w, i) => rahmenwortChip(`v${i}`, w))}
            {situationGewaehlt ? (
              rahmenwortChip('slot', {
                hanzi: situationGewaehlt.hanzi,
                pinyin: situationGewaehlt.pinyin,
                german: situationGewaehlt.german,
              })
            ) : (
              <Text style={[styles.frameText, { color: theme.sub }]}>...</Text>
            )}
            {aufgabe.frameNachherWoerter.map((w, i) => rahmenwortChip(`n${i}`, w))}
          </View>
          {/* Immer gemountet, nur ausgeblendet (Simons Wunsch 2026-08-26) -
              sonst waechst/schrumpft die Box beim Anzeigen dieser Zeile und
              alles darunter ruckt mit. Platzhalter " " haelt die
              Zeilenhoehe auch, solange noch kein Wort angetippt ist. */}
          <Text
            style={[
              styles.rahmenUebersetzung,
              { color: theme.sub, opacity: uebersetzungEin && uebersetzungKnopfAktiv && offeneRahmenUebersetzung ? 1 : 0 },
            ]}
          >
            {offeneRahmenUebersetzung ?? ' '}
          </Text>
        </View>
        {/* Gleicher Grund wie oben - immer gemountet, nur ausgeblendet. */}
        <Text
          style={[
            styles.spielHinweis,
            {
              color: theme.sub,
              textAlign: 'left',
              marginBottom: 0,
              marginTop: -SPACING.md,
              opacity: uebersetzungEin && uebersetzungKnopfAktiv ? 1 : 0,
            },
          ]}
        >
          Tipp auf ein Wort im Satz zeigt seine Bedeutung
        </Text>
      </>
    );
  }

  const filterZeile = aktiveWortarten.size === 0 ? 'Alle Wortarten' : [...aktiveWortarten].join(', ');
  // Batch-Anzeige (2026-08-25) - macht die 50er-Haeppchen aus BATCH_GROESSE
  // sichtbar, statt eine reine Backend-Optimierung zu bleiben. Anzeige nur
  // fuer Chinesisch (einzige Sprache mit Stufe-2/3-Inhalt, siehe
  // situationsAufgaben.ts) - der Batch-MECHANISMUS selbst laeuft seit dem
  // Drei-Stufen-Umbau (2026-08-26) fuer alle Sprachen.
  const batchZeile =
    targetLanguageId === 'zh' && gefiltert.length > 0
      ? (() => {
          const sortiert = [...gefiltert].sort((a, b) => a.id - b.id);
          // Grenze ueber die Einweg-Markierung (monoton), die angezeigte
          // Zahl ueber den AKTUELLEN Zaehler (ehrlicher Live-Stand) - siehe
          // Kommentar bei zuordnungAuswahl. "Fertig" heisst jetzt Stufe 3
          // erreicht (frueher: Stufe-1-Schwelle, das war vor dem
          // Drei-Stufen-Umbau die letzte Stufe).
          const batchIndex = aktiverBatchIndex(sortiert, jeStufe3);
          const inBatch = sortiert.slice(batchIndex * BATCH_GROESSE, (batchIndex + 1) * BATCH_GROESSE);
          const fertigImBatch = inBatch.filter((w) => stufeVon(WORT_KEY(w), stufe1, stufe2) === 3).length;
          const batchesGesamt = Math.ceil(sortiert.length / BATCH_GROESSE);
          return `Wortschatz-Häppchen ${batchIndex + 1} von ${batchesGesamt} · ${fertigImBatch}/${inBatch.length} auf Stufe 3`;
        })()
      : null;
  const pronomenVerb = pronomenVerben[pronomenIndex];
  const situationAufgabe = situationAufgaben[situationIndex];
  /**
   * Speichern nach Survival (2026-08-26, Simons Wunsch: "auf jedem
   * Satztemplate fuer egal welche Stufe ein Speicherbutton"). Zwei
   * Herkuenfte, zwei `Phrase.id`-Strategien:
   * - Echte Phrasebook-Zeile (`sourceId` gesetzt): EXAKT derselbe
   *   Schluessel wie `toPhrase()` fuer dieselbe Zeile liefern wuerde -
   *   `toPhrase()` selbst passt nicht direkt (die verlangt ein volles
   *   `ExerciseSentence`, `SituationsAufgabe` traegt weniger Felder), der
   *   Schluessel muss aber trotzdem UEBEREINSTIMMEN, sonst legt Speed-Run
   *   fuer dieselbe Zeile einen zweiten Eintrag an.
   * - Kurs-Rahmen (`sourceId` null): eigener `course-situation`-Namensraum,
   *   analog zu `course-wort`/`course-rahmen` beim FSRS-Kartenschluessel.
   */
  const situationPhrase: Phrase | null = situationAufgabe
    ? {
        id:
          situationAufgabe.sourceId !== null && situationAufgabe.sourceTable
            ? `${targetLanguageId}:${situationAufgabe.sourceTable}:${situationAufgabe.sourceId}`
            : `${targetLanguageId}:course-situation:${situationAufgabe.id}`,
        context: scenarioLabel(situationAufgabe.scenario),
        text: situationAufgabe.satzHanzi,
        gloss: situationAufgabe.germanGloss,
        placeholder: false,
        phonetic: situationAufgabe.satzPinyin,
        cultureNote: situationAufgabe.cultureNote,
        scenario: situationAufgabe.scenario,
        category: situationAufgabe.category,
      }
    : null;
  const istSituationGemerkt = situationPhrase ? !!saved[situationPhrase.id] : false;
  const offeneRahmenUebersetzung = situationAufgabe
    ? offenesRahmenwort === 'slot'
      ? (situationGewaehlt?.german ?? null)
      : (situationAufgabe.frameVorherWoerter.find((_, i) => `v${i}` === offenesRahmenwort)?.german ??
          situationAufgabe.frameNachherWoerter.find((_, i) => `n${i}` === offenesRahmenwort)?.german ??
          null)
    : null;
  // Fortschritt der ganzen SITZUNG (wie viele der SESSION_RUNDEN Runden
  // schon geschafft sind), nicht mehr nur der einzelnen Runde - der Balken
  // steht direkt unter der Ueberschrift und soll zeigen "wie lange der
  // Modus/die Lektion noch geht" (Simons Vorgabe 2026-08-25). `rundeNr - 1`,
  // weil die LAUFENDE Runde noch nicht geschafft ist.
  const sessionFortschritt = (rundeNr - 1) / SESSION_RUNDEN;
  const titelZusatz =
    phase === 'runde'
      ? rundentyp === 'pronomen'
        ? ' (Verben)'
        : rundentyp === 'situation' || rundentyp === 'situation-stt'
          ? ` (${situationWortart})`
          : ''
      : '';

  return (
    <Screen dark={darkMode}>
      <View style={styles.header}>
        <Pressable
          onPress={zurueckTippen}
          style={styles.backBtn}
          accessibilityRole="button"
          accessibilityLabel="Zurück"
        >
          <Text style={[styles.backGlyph, { color: theme.text }]}>‹</Text>
        </Pressable>
        <Text style={[styles.title, { color: theme.text }]}>Wörter-Wiederholung{titelZusatz}</Text>
        <UebungsMenu dark={darkMode} meldenLabel="Wort melden" />
      </View>

      {phase === 'runde' ? (
        <View style={styles.progressSlot}>
          <ProgressBar dark={darkMode} ratio={sessionFortschritt} />
          <Text style={[styles.rundenZaehler, { color: theme.sub }]}>
            Runde {rundeNr} von {SESSION_RUNDEN}
          </Text>
        </View>
      ) : null}

      {phase === 'runde' && hatSchriftzeichen ? (
        <View style={styles.umschalterReihe}>
          <Pressable
            onPress={() => setZeichenEin((z) => !z)}
            accessibilityRole="button"
            accessibilityLabel={zeichenEin ? 'Zeichen ausschalten' : 'Zeichen einschalten'}
            accessibilityState={{ selected: zeichenEin }}
            style={[styles.umschalter, { borderColor: theme.border, backgroundColor: theme.subtleFill }]}
          >
            <Text style={[styles.umschalterText, { color: theme.text }]}>
              {/* Beschriftung bewusst umgekehrt zu `zeichenEin` (Simons
                  Vorgabe 2026-08-25): Hanzi ist NUR sichtbar, wenn hier
                  "Zeichen aus" steht. */}
              Zeichen {zeichenEin ? 'aus' : 'ein'}
            </Text>
          </Pressable>
          {uebersetzungKnopfAktiv ? (
            <Pressable
              onPress={() => setUebersetzungEin((u) => !u)}
              accessibilityRole="button"
              accessibilityLabel={uebersetzungEin ? 'Übersetzung ausschalten' : 'Übersetzung einschalten'}
              accessibilityState={{ selected: uebersetzungEin }}
              style={[styles.umschalter, { borderColor: theme.border, backgroundColor: theme.subtleFill }]}
            >
              <Text style={[styles.umschalterText, { color: theme.text }]}>
                Übersetzung {uebersetzungEin ? 'an' : 'aus'}
              </Text>
            </Pressable>
          ) : null}
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

      {!loading && !loadError && !language.vocabTable && (
        <View style={styles.center}>
          <Text style={{ color: theme.sub, textAlign: 'center', fontSize: FONT_SIZE.body }}>
            Für {language.label} gibt es noch keine Wortliste.
          </Text>
        </View>
      )}

      {!loading && !loadError && language.vocabTable && phase === 'auswahl' && (
        <ScrollView contentContainerStyle={styles.auswahlScroll}>
          {offline ? (
            <Text style={[styles.offline, { color: theme.sub }]}>📴 Offline — letzter gespeicherter Stand</Text>
          ) : null}

          {/* Vorlagen-Wahl (siehe Kommentar bei rundentypWahl oben) - reine
              Sortierhilfe, kein Nutzer-Feature. */}
          <Text style={[styles.unterzeile, { color: theme.sub, marginBottom: SPACING.xs }]}>Vorlage</Text>
          <View style={styles.chipReihe}>
            {(
              [
                ['gemischt', 'Gemischt'],
                ['zuordnung', 'Stufe 1: Zuordnung'],
                ['pronomen', 'Stufe 1: Personen-Zuordnung'],
                ['situation', 'Stufe 2: Auswahl'],
                ['situation-stt', 'Stufe 3: Freie Eingabe'],
              ] as const
            ).map(([wert, label]) => {
              const aktiv = rundentypWahl === wert;
              return (
                <Pressable
                  key={wert}
                  onPress={() => setRundentypWahl(wert)}
                  accessibilityRole="button"
                  accessibilityState={{ selected: aktiv }}
                  style={[
                    styles.chip,
                    { borderColor: aktiv ? theme.text : theme.border, backgroundColor: aktiv ? theme.text : 'transparent' },
                  ]}
                >
                  <Text style={[styles.chipText, { color: aktiv ? theme.pageBg : theme.text }]}>{label}</Text>
                </Pressable>
              );
            })}
          </View>

          <Text style={[styles.frage, { color: theme.text }]}>Welche Wörter willst du üben?</Text>
          <Text style={[styles.unterzeile, { color: theme.sub }]}>
            Nichts ausgewählt heißt: alle Wortarten gemischt.
          </Text>
          <View style={styles.chipReihe}>
            <Pressable
              onPress={() => setAktiveWortarten(new Set())}
              accessibilityRole="button"
              accessibilityState={{ selected: aktiveWortarten.size === 0 }}
              style={[
                styles.chip,
                {
                  borderColor: aktiveWortarten.size === 0 ? theme.text : theme.border,
                  backgroundColor: aktiveWortarten.size === 0 ? theme.text : 'transparent',
                },
              ]}
            >
              <Text
                style={[
                  styles.chipText,
                  { color: aktiveWortarten.size === 0 ? theme.pageBg : theme.text },
                ]}
              >
                Alle
              </Text>
            </Pressable>
            {hauptWortarten.map(([wortart, anzahl]) => wortartChip(wortart, anzahl))}
            {weitereWortarten.length > 0 && !weitereOffen ? (
              <Pressable
                onPress={() => setWeitereOffen(true)}
                accessibilityRole="button"
                accessibilityLabel="Weitere Wortarten anzeigen"
                style={[styles.chip, { borderColor: theme.border, backgroundColor: 'transparent' }]}
              >
                <Text style={[styles.chipText, { color: theme.sub }]}>···</Text>
              </Pressable>
            ) : null}
            {weitereOffen ? weitereWortarten.map(([wortart, anzahl]) => wortartChip(wortart, anzahl)) : null}
          </View>

          <View style={styles.startBox}>
            <Text style={[styles.anzahlText, { color: theme.sub }]}>
              {gefiltert.length} {gefiltert.length === 1 ? 'Wort' : 'Wörter'} in der Auswahl
            </Text>
            {batchZeile ? (
              <Text style={{ color: theme.sub, fontSize: FONT_SIZE.caption, marginTop: SPACING.xs }}>
                {batchZeile}
              </Text>
            ) : null}
            {gefiltert.length < 2 ? (
              <Text style={{ color: theme.sub, fontSize: FONT_SIZE.caption, marginTop: SPACING.xs }}>
                Zu wenige Wörter für eine Runde - wähl eine breitere Auswahl.
              </Text>
            ) : (
              <PillButton dark={darkMode} label="Los geht's" onPress={rundeStarten} />
            )}
          </View>
        </ScrollView>
      )}

      {phase === 'runde' && rundentyp === 'situation' && (
        <ScrollView style={styles.pronomenScroll} contentContainerStyle={styles.pronomenBereich} showsVerticalScrollIndicator={false}>
          {situationLadeFehler ? (
            <Text style={{ color: theme.sub, textAlign: 'center' }}>{situationLadeFehler}</Text>
          ) : !situationAufgabe ? (
            <ActivityIndicator color={theme.text} />
          ) : (
            <>
              {renderSituationsKopf(situationAufgabe)}

              <View style={styles.personReihe}>
                {situationAufgabe.optionen.map((o) => {
                  const gewaehltHier = situationGewaehlt?.hanzi === o.hanzi;
                  const zeigeRichtig = situationAusgewertet && o.hanzi === situationAufgabe.richtig.hanzi;
                  const zeigeFalsch = situationAusgewertet === 'falsch' && gewaehltHier && !zeigeRichtig;
                  return (
                    <Pressable
                      key={o.hanzi}
                      disabled={!!situationAusgewertet}
                      onPress={() => situationOptionTippen(o)}
                      accessibilityRole="button"
                      accessibilityLabel={`${o.pinyin} (${o.hanzi})`}
                      style={[
                        styles.personChip,
                        {
                          borderColor: zeigeRichtig ? ACCENT_GREEN : zeigeFalsch ? ACCENT_ERROR : gewaehltHier ? theme.text : theme.border,
                          backgroundColor: zeigeRichtig ? ACCENT_GREEN : zeigeFalsch ? ACCENT_ERROR : gewaehltHier ? theme.subtleFill : theme.subtleFill,
                        },
                      ]}
                    >
                      <Text style={{ color: zeigeRichtig || zeigeFalsch ? '#FFFFFF' : theme.text, ...schrift('700') }}>
                        {/* Klammer+Zeichen haengen jetzt am selben "Zeichen
                            an/aus"-Schalter wie die Kacheln/Rahmenwoerter
                            (Simons Fehlerbericht 2026-08-26: diese Stelle
                            hing bisher NICHT dran, zeigte das Hanzi immer) -
                            beide zusammen weg, nicht nur das Zeichen ohne
                            die leere Klammer dahinter. */}
                        {o.pinyin}
                        {zeichenEin ? ` (${o.hanzi})` : ''}
                      </Text>
                    </Pressable>
                  );
                })}
              </View>

              <Pressable
                onPress={situationMikroTippen}
                disabled={situationPrueft || !!situationAusgewertet}
                accessibilityRole="button"
                accessibilityLabel={situationNimmtAuf ? 'Aufnahme beenden' : 'Wort sprechen'}
                style={({ pressed }) => [
                  styles.mikro,
                  {
                    backgroundColor: situationNimmtAuf ? ACCENT_ERROR : ACCENT_ORANGE,
                    opacity: pressed || situationPrueft || situationAusgewertet ? 0.7 : 1,
                  },
                ]}
              >
                {situationPrueft ? (
                  <ActivityIndicator color="#FFFFFF" />
                ) : (
                  <Feather name={situationNimmtAuf ? 'square' : 'mic'} size={26} color="#FFFFFF" />
                )}
              </Pressable>
              {situationSttFehler ? (
                <Text style={{ color: ACCENT_ERROR, fontSize: FONT_SIZE.caption, textAlign: 'center' }}>
                  {situationSttFehler}
                </Text>
              ) : null}

              <PillButton dark={darkMode} label="Lösen" disabled={!situationGewaehlt || !!situationAusgewertet} onPress={situationLoesen} />
            </>
          )}
        </ScrollView>
      )}

      {/* Stufe 3 (2026-08-26, neu) - derselbe Kopf wie Stufe 2
          (`renderSituationsKopf`), aber KEINE Optionen: das Wort muss frei
          per STT oder Text-Fallback kommen. */}
      {phase === 'runde' && rundentyp === 'situation-stt' && (
        <ScrollView style={styles.pronomenScroll} contentContainerStyle={styles.pronomenBereich} showsVerticalScrollIndicator={false}>
          {situationLadeFehler ? (
            <Text style={{ color: theme.sub, textAlign: 'center' }}>{situationLadeFehler}</Text>
          ) : !situationAufgabe ? (
            <ActivityIndicator color={theme.text} />
          ) : (
            <>
              {renderSituationsKopf(situationAufgabe)}

              {/* Feedback erst nach dem Loesen - die Luecke im Rahmen oben
                  fuellt sich dann bereits mit der richtigen Antwort (siehe
                  `situationStufe3Auswerten`), das hier ist nur die
                  Kurzmeldung dazu. */}
              {situationAusgewertet ? (
                <Text
                  style={{
                    color: situationAusgewertet === 'richtig' ? ACCENT_GREEN : ACCENT_ERROR,
                    ...schrift('700'),
                    textAlign: 'center',
                  }}
                >
                  {situationAusgewertet === 'richtig' ? '✓ Richtig!' : '✗ Leider nicht - die richtige Antwort steht jetzt oben.'}
                </Text>
              ) : null}

              <Pressable
                onPress={situationSttStufe3Mikro}
                disabled={situationPrueft || !!situationAusgewertet}
                accessibilityRole="button"
                accessibilityLabel={situationNimmtAuf ? 'Aufnahme beenden' : 'Wort sprechen'}
                style={({ pressed }) => [
                  styles.mikro,
                  {
                    backgroundColor: situationNimmtAuf ? ACCENT_ERROR : ACCENT_ORANGE,
                    opacity: pressed || situationPrueft || situationAusgewertet ? 0.7 : 1,
                  },
                ]}
              >
                {situationPrueft ? (
                  <ActivityIndicator color="#FFFFFF" />
                ) : (
                  <Feather name={situationNimmtAuf ? 'square' : 'mic'} size={26} color="#FFFFFF" />
                )}
              </Pressable>
              {situationSttFehler ? (
                <Text style={{ color: ACCENT_ERROR, fontSize: FONT_SIZE.caption, textAlign: 'center' }}>
                  {situationSttFehler}
                </Text>
              ) : null}

              {/* Text-Fallback, gleiches Muster wie `SchreibenFeld` bei den
                  Saetzen (siehe SentenceReviewScreen.tsx) - Text ist der
                  Not-Weg, nicht der Hauptweg (Kernprinzip TTS/STT vor Text,
                  siehe CLAUDE.md). */}
              <SchreibenFeld dark={darkMode} offen={situationSchreibenOffen} onToggle={() => setSituationSchreibenOffen(true)}>
                <TextInput
                  value={situationInput}
                  onChangeText={setSituationInput}
                  placeholder="Deine Antwort"
                  placeholderTextColor={theme.sub}
                  style={[styles.input, { color: theme.text, borderColor: theme.border, backgroundColor: theme.cardBg }]}
                />
              </SchreibenFeld>

              <PillButton
                dark={darkMode}
                label="Lösen"
                disabled={!situationInput.trim() || !!situationAusgewertet}
                onPress={() => situationStufe3Auswerten(situationInput)}
              />
            </>
          )}
        </ScrollView>
      )}

      {phase === 'runde' && rundentyp === 'pronomen' && pronomenVerb && (
        <ScrollView style={styles.pronomenScroll} contentContainerStyle={styles.pronomenBereich} showsVerticalScrollIndicator={false}>
          <Text style={[styles.frage, { color: theme.text, fontSize: FONT_SIZE.title, lineHeight: LINE_HEIGHT.title }]}>
            Ordne die Personen richtig dem Verb zu
          </Text>
          <View style={styles.personReihe}>
            {PERSONEN.map((p) => {
              const aktiv = pronomenGewaehlt === p;
              return (
                <Pressable
                  key={p}
                  disabled={!!pronomenGewaehlt}
                  onPress={() => personTippen(p)}
                  accessibilityRole="button"
                  accessibilityLabel={p}
                  style={[
                    styles.personChip,
                    {
                      borderColor: aktiv ? ACCENT_GREEN : theme.border,
                      backgroundColor: aktiv ? ACCENT_GREEN : theme.subtleFill,
                      opacity: pronomenGewaehlt && !aktiv ? 0.5 : 1,
                    },
                  ]}
                >
                  <Text style={{ color: aktiv ? '#FFFFFF' : theme.text, ...schrift('700') }}>{p}</Text>
                </Pressable>
              );
            })}
          </View>

          <View style={[styles.frameBox, { borderColor: theme.border, backgroundColor: theme.cardBg }]}>
            <Text style={[styles.frameText, { color: theme.text }]}>
              {pronomenGewaehlt ? `${pronomenGewaehlt} ` : ''}
              {frameForm(pronomenVerb)} ({pronomenVerb.german})
            </Text>
          </View>
        </ScrollView>
      )}

      {phase === 'runde' && rundentyp === 'zuordnung' && (
        <View style={styles.spielBereich}>
          <Text style={[styles.spielHinweis, { color: theme.sub }]}>{filterZeile} · Tippe ein Wort, dann seine Bedeutung</Text>
          <View style={styles.spalten}>
            <View style={styles.spalte}>
              {links.map((k) => {
                const fertig = gematcht.has(k.wordId);
                const gewaehltHier = gewaehlt?.seite === 'links' && gewaehlt.id === k.wordId;
                const falschHier = falschBlitz?.linksId === k.wordId;
                return (
                  <Pressable
                    key={k.wordId}
                    disabled={fertig}
                    onPress={() => kachelTippen('links', k.wordId)}
                    accessibilityRole="button"
                    accessibilityLabel={k.text}
                    accessibilityState={{ disabled: fertig, selected: gewaehltHier }}
                    style={[
                      styles.kachel,
                      {
                        borderColor: falschHier ? ACCENT_ERROR : gewaehltHier ? theme.text : theme.border,
                        backgroundColor: fertig
                          ? theme.subtleFill
                          : falschHier
                            ? '#FBE4E2'
                            : gewaehltHier
                              ? theme.subtleFill
                              : theme.cardBg,
                        opacity: fertig ? 0.4 : 1,
                      },
                    ]}
                  >
                    {/* Zeichen jetzt HINTER dem Wort in Klammern statt
                        darueber (Simons Korrektur 2026-08-26) - eine Zeile
                        statt zwei gestapelter Texte, gleiches Muster wie die
                        Situations-Optionen (siehe dort). `rechts`-Kacheln
                        haben nie ein `hanzi` (siehe Kachel-Aufbau oben),
                        dort bleibt das ein stiller No-Op. Farbe nur hier
                        links (Wort), nicht rechts (deutsche Bedeutung) -
                        die Bedeutung traegt keine eigene, verlaessliche
                        Wortart-Zuordnung (2026-08-29). */}
                    <Text
                      style={[
                        styles.kachelText,
                        { color: (k.wordClass && WORTART_FARBE[k.wordClass]) || theme.text },
                      ]}
                    >
                      {k.text}
                      {zeichenEin && k.hanzi ? ` (${k.hanzi})` : ''}
                    </Text>
                  </Pressable>
                );
              })}
            </View>
            <View style={styles.spalte}>
              {rechts.map((k) => {
                const fertig = gematcht.has(k.wordId);
                const gewaehltHier = gewaehlt?.seite === 'rechts' && gewaehlt.id === k.wordId;
                const falschHier = falschBlitz?.rechtsId === k.wordId;
                return (
                  <Pressable
                    key={k.wordId}
                    disabled={fertig}
                    onPress={() => kachelTippen('rechts', k.wordId)}
                    accessibilityRole="button"
                    accessibilityLabel={k.text}
                    accessibilityState={{ disabled: fertig, selected: gewaehltHier }}
                    style={[
                      styles.kachel,
                      {
                        borderColor: falschHier ? ACCENT_ERROR : gewaehltHier ? theme.text : theme.border,
                        backgroundColor: fertig
                          ? theme.subtleFill
                          : falschHier
                            ? '#FBE4E2'
                            : gewaehltHier
                              ? theme.subtleFill
                              : theme.cardBg,
                        opacity: fertig ? 0.4 : 1,
                      },
                    ]}
                  >
                    {/* Zeichen jetzt HINTER dem Wort in Klammern statt
                        darueber (Simons Korrektur 2026-08-26) - eine Zeile
                        statt zwei gestapelter Texte, gleiches Muster wie die
                        Situations-Optionen (siehe dort). `rechts`-Kacheln
                        haben nie ein `hanzi` (siehe Kachel-Aufbau oben),
                        dort bleibt das ein stiller No-Op. */}
                    <Text style={[styles.kachelText, { color: theme.text }]}>
                      {k.text}
                      {zeichenEin && k.hanzi ? ` (${k.hanzi})` : ''}
                    </Text>
                  </Pressable>
                );
              })}
            </View>
          </View>
        </View>
      )}

      {phase === 'ergebnis' && (
        <View style={styles.center}>
          <Text style={[styles.ergebnisTitel, { color: theme.text }]}>Lektion geschafft! 🎉</Text>
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
}

const styles = StyleSheet.create({
  // 1:1 aus SentenceReviewScreen.tsx (dort das Original) - derselbe
  // Speichern-Knopf, gleiche Optik ueber beide Wiederholungs-Screens.
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
  // 1:1 aus SentenceReviewScreen.tsx - Text-Fallback-Feld fuer Stufe 3.
  input: { borderWidth: 1.5, borderRadius: RADIUS.md, padding: SPACING.md, minHeight: 48, fontSize: FONT_SIZE.body },
  header: { flexDirection: 'row', alignItems: 'center', gap: 10, paddingBottom: SPACING.sm },
  backBtn: { width: 32, height: 32, alignItems: 'center', justifyContent: 'center' },
  backGlyph: { fontSize: 26 },
  // `flex: 1` neu (2026-08-26, fuers "..."-Menue) - drueckt das Menue an
  // den rechten Rand der Kopfzeile, ohne dass der Titel selbst zentriert
  // oder umgebrochen wird.
  title: { ...schrift('800'), fontSize: FONT_SIZE.title, flex: 1 },
  center: { flex: 1, alignItems: 'center', justifyContent: 'center', gap: SPACING.md, paddingHorizontal: SPACING.xl },
  offline: { fontSize: FONT_SIZE.caption, marginBottom: SPACING.sm },
  auswahlScroll: { paddingBottom: SPACING.xxl },
  frage: {
    // Bold statt Serife (2026-09-01): volle Aufgabenfrage, siehe gleiche
    // Begruendung bei `SentenceReviewScreen.tsx`.
    ...schrift('700'),
    fontSize: FONT_SIZE.h2,
    lineHeight: LINE_HEIGHT.h2,
    marginTop: SPACING.md,
  },
  unterzeile: { fontSize: FONT_SIZE.small, lineHeight: LINE_HEIGHT.small, marginTop: SPACING.xs, marginBottom: SPACING.lg },
  chipReihe: { flexDirection: 'row', flexWrap: 'wrap', gap: SPACING.sm },
  chip: {
    paddingVertical: SPACING.sm,
    paddingHorizontal: SPACING.md,
    borderRadius: RADIUS.pill,
    borderWidth: 1.5,
  },
  chipText: { ...schrift('700'), fontSize: FONT_SIZE.small },
  startBox: { marginTop: SPACING.xxl, gap: SPACING.sm },
  anzahlText: { fontSize: FONT_SIZE.small, ...schrift('600') },
  spielBereich: { flex: 1, paddingTop: SPACING.sm },
  spielHinweis: { fontSize: FONT_SIZE.caption, marginBottom: SPACING.md, textAlign: 'center' },
  spalten: { flex: 1, flexDirection: 'row', gap: SPACING.md },
  spalte: { flex: 1, gap: SPACING.sm },
  kachel: {
    borderWidth: 1.5,
    borderRadius: RADIUS.md,
    paddingVertical: SPACING.md,
    paddingHorizontal: SPACING.sm,
    minHeight: 56,
    alignItems: 'center',
    justifyContent: 'center',
  },
  kachelText: { fontSize: FONT_SIZE.small, ...schrift('700'), textAlign: 'center' },
  ergebnisTitel: {
    // ExtraBold statt Serife: Feier-Ueberschrift am Ende der Runde.
    ...schrift('800'),
    fontSize: FONT_SIZE.h2,
    lineHeight: LINE_HEIGHT.h2,
    textAlign: 'center',
  },
  ergebnisText: { fontSize: FONT_SIZE.body, textAlign: 'center' },
  ergebnisKnoepfe: { width: '100%', gap: SPACING.sm, marginTop: SPACING.md },
  progressSlot: { paddingVertical: SPACING.sm },
  rundenZaehler: { fontSize: FONT_SIZE.caption, textAlign: 'center', marginTop: SPACING.xs },
  umschalterReihe: { flexDirection: 'row', gap: SPACING.sm, paddingBottom: SPACING.sm },
  umschalter: {
    paddingVertical: SPACING.sm,
    paddingHorizontal: SPACING.md,
    borderRadius: RADIUS.pill,
    borderWidth: 1.5,
  },
  umschalterText: { ...schrift('700'), fontSize: FONT_SIZE.small },
  pronomenScroll: { flex: 1 },
  pronomenBereich: { flexGrow: 1, paddingTop: SPACING.xl, paddingBottom: SPACING.xxl, gap: SPACING.xxl },
  personReihe: { flexDirection: 'row', flexWrap: 'wrap', gap: SPACING.sm },
  personChip: {
    paddingVertical: SPACING.md,
    paddingHorizontal: SPACING.lg,
    borderRadius: RADIUS.pill,
    borderWidth: 1.5,
  },
  frameBox: {
    borderWidth: 1.5,
    borderRadius: RADIUS.md,
    paddingVertical: SPACING.lg,
    paddingHorizontal: SPACING.lg,
    alignItems: 'center',
  },
  frameText: { fontSize: FONT_SIZE.bodyLg, ...schrift('700') },
  frameWoerterReihe: { flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'flex-end', columnGap: SPACING.xs, rowGap: SPACING.xs },
  frameWortSpalte: { alignItems: 'center' },
  frameHanziText: { fontSize: FONT_SIZE.caption },
  rahmenUebersetzung: { marginTop: SPACING.sm, fontSize: FONT_SIZE.caption, textAlign: 'center' },
  mikro: {
    width: 72,
    height: 72,
    borderRadius: 36,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
