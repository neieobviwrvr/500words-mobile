import { useCallback, useEffect, useMemo, useState } from 'react';
import { ActivityIndicator, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { router, useFocusEffect } from 'expo-router';
import { useAppState } from '../../state/AppState';
import { getLanguage } from '../../data/languages';
import { loadVocabWords, VocabWord } from '../../data/vocabContent';
import { UI_WORT_TEMPLATES } from '../../data/uiWortTemplates';
import { ladeSituationsAufgaben, SituationsAufgabe, VokabelOption } from '../../data/situationsAufgaben';
import { normalisiereHanzi } from '../course/lessonEvaluation';
import { useSttRecorder } from '../stt/useSttRecorder';
import { useSpeechmatics } from '../stt/useSpeechmatics';
import { speakText } from '../tts/speak';
import { Screen, PillButton, ProgressBar } from '../../components';
import {
  getTheme,
  SPACING,
  RADIUS,
  FONT_SIZE,
  FONT_FAMILY,
  LINE_HEIGHT,
  WORD_COLORS,
  ACCENT_GREEN,
  ACCENT_ERROR,
  ACCENT_ORANGE,
} from '../../theme/tokens';

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
};

/** Immer sichtbare Haupt-Chips, in dieser Reihenfolge - siehe Verwendung. */
const GROSSE_DREI = ['Nomen', 'Verb', 'Adjektiv'];

const RUNDENGROESSE = 6;

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

type Rundentyp = 'zuordnung' | 'pronomen' | 'situation';

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
type Kachel = { wordId: number; text: string; sprich: string };
type FalschBlitz = { linksId: number; rechtsId: number } | null;

/** Die Verbform, die im Frame steht - siehe presentForm-Kommentar oben. */
function frameForm(w: VocabWord): string {
  return w.presentForm ?? w.word;
}

export function WordReviewScreen() {
  const { darkMode, targetLanguageId } = useAppState();
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

  const [aktiveWortarten, setAktiveWortarten] = useState<Set<string>>(new Set());
  const [phase, setPhase] = useState<Phase>('auswahl');
  const [rundentyp, setRundentyp] = useState<Rundentyp>('zuordnung');

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

  // Zwei Anzeige-Umschalter (2026-08-25, Simons Vorgabe) - BEWUSST NOCH
  // PLATZHALTER, beide schalten nur ihr eigenes Label um, ohne (noch)
  // etwas an der Karte selbst auszublenden. Was sie spaeter genau
  // ausblenden sollen (Hanzi bei Chinesisch? welches Feld bei "Zeichen"?),
  // ist noch nicht entschieden - hier steht nur das Geruest.
  const [zeichenEin, setZeichenEin] = useState(true);
  const [uebersetzungEin, setUebersetzungEin] = useState(true);
  // "Übersetzung an/aus" darf nur dort bedient werden, wo die Uebung nicht
  // SELBST die Uebersetzung abfragt - im Zuordnungsspiel IST das Zuordnen
  // von Wort zu Bedeutung die Aufgabe, ausblenden wuerde die Uebung
  // unloesbar machen. Pronomen- und Situations-Runde fragen etwas anderes
  // ab (Person-zu-Verb bzw. welches Wort passt) und zeigen die Bedeutung
  // nur als Kontext dazu - dort darf sie optional weg.
  const uebersetzungKnopfAktiv = rundentyp !== 'zuordnung';

  useEffect(() => {
    let cancelled = false;
    (async () => {
      setLoading(true);
      setLoadError(null);
      try {
        const result = await loadVocabWords(targetLanguageId);
        if (cancelled) return;
        setWords(result.words);
        setOffline(result.fromCache);
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
  const verbPool = useMemo(() => words.filter((w) => w.wordClass === 'Verb'), [words]);
  const pronomenVerfuegbar =
    verbPool.length >= 1 && (aktiveWortarten.size === 0 || aktiveWortarten.has('Verb'));

  function wortartUmschalten(wortart: string) {
    setAktiveWortarten((prev) => {
      const next = new Set(prev);
      if (next.has(wortart)) next.delete(wortart);
      else next.add(wortart);
      return next;
    });
  }

  async function rundeStarten() {
    // "Mische es zu" (Simons Vorgabe): zufaellig unter den verfuegbaren
    // Rundentypen - Situations-Auswahl nur fuer Chinesisch (siehe
    // situationsAufgaben.ts), Pronomen-Runde nur wenn Verben zur Auswahl
    // gehoeren, Zuordnung geht immer.
    const kandidaten: Rundentyp[] = ['zuordnung'];
    if (pronomenVerfuegbar) kandidaten.push('pronomen');
    if (targetLanguageId === 'zh') kandidaten.push('situation');
    const typ = mischen(kandidaten)[0];
    setRundentyp(typ);

    if (typ === 'pronomen') {
      const auswahl = mischen(verbPool).slice(0, Math.min(PRONOMEN_RUNDENGROESSE, verbPool.length));
      setPronomenVerben(auswahl);
      setPronomenIndex(0);
      setPronomenGewaehlt(null);
      setPhase('runde');
      return;
    }

    if (typ === 'situation') {
      // Wortart: die eine aktive Auswahl, sonst zufaellig unter den drei
      // Chinesisch-Eimern (siehe wortartAusDeutsch - nur diese drei gibt es
      // dort ueberhaupt).
      const wortart =
        aktiveWortarten.size === 1
          ? [...aktiveWortarten][0]
          : mischen(['Verb', 'Nomen', 'Sonstiges'])[0];
      setSituationWortart(wortart);
      setSituationLadeFehler(null);
      setPhase('runde'); // sofort umschalten, Ladezustand zeigt das Aufgaben-Array leer
      try {
        const { aufgaben } = await ladeSituationsAufgaben(targetLanguageId, wortart);
        const auswahl = mischen(aufgaben).slice(0, Math.min(SITUATION_RUNDENGROESSE, aufgaben.length));
        if (auswahl.length === 0) {
          // Fuer diese Wortart kam nichts zusammen - lieber sofort das
          // Zuordnungsspiel aufsetzen als eine leere Runde zeigen oder
          // per Rekursion nochmal zufaellig 'situation' zu ziehen.
          setRundentyp('zuordnung');
          const ersatz = mischen(gefiltert).slice(0, Math.min(RUNDENGROESSE, gefiltert.length));
          setLinks(mischen(ersatz.map((w) => ({ wordId: w.id, text: w.word, sprich: w.hanzi ?? w.word }))));
          setRechts(mischen(ersatz.map((w) => ({ wordId: w.id, text: w.german, sprich: w.german }))));
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

    const auswahl = mischen(gefiltert).slice(0, Math.min(RUNDENGROESSE, gefiltert.length));
    setLinks(mischen(auswahl.map((w) => ({ wordId: w.id, text: w.word, sprich: w.hanzi ?? w.word }))));
    setRechts(mischen(auswahl.map((w) => ({ wordId: w.id, text: w.german, sprich: w.german }))));
    setGematcht(new Set());
    setGewaehlt(null);
    setFalschBlitz(null);
    setRichtig(0);
    setFalsch(0);
    setPhase('runde');
  }

  function situationOptionTippen(o: VokabelOption) {
    if (situationAusgewertet) return;
    setSituationGewaehlt(o);
  }

  function situationLoesen() {
    if (!situationGewaehlt || situationAusgewertet) return;
    const aufgabe = situationAufgaben[situationIndex];
    const stimmt = situationGewaehlt.hanzi === aufgabe.richtig.hanzi;
    setSituationAusgewertet(stimmt ? 'richtig' : 'falsch');
    speakText(aufgabe.richtig.hanzi, { languageId: targetLanguageId });
    if (stimmt) setSituationRichtig((r) => r + 1);
    setTimeout(() => {
      setSituationGewaehlt(null);
      setSituationAusgewertet(null);
      if (situationIndex + 1 >= situationAufgaben.length) {
        setPhase('ergebnis');
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
      const { text } = await stt.transcribe(uri, targetLanguageId);
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
    setTimeout(() => {
      setPronomenGewaehlt(null);
      if (pronomenIndex + 1 >= pronomenVerben.length) {
        setPhase('ergebnis');
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
      if (neu.size === links.length) {
        setTimeout(() => setPhase('ergebnis'), 350);
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

  const filterZeile = aktiveWortarten.size === 0 ? 'Alle Wortarten' : [...aktiveWortarten].join(', ');
  const pronomenVerb = pronomenVerben[pronomenIndex];
  const pronomenFortschritt = pronomenVerben.length > 0 ? pronomenIndex / pronomenVerben.length : 0;
  const zuordnungFortschritt = links.length > 0 ? gematcht.size / links.length : 0;
  const situationAufgabe = situationAufgaben[situationIndex];
  const situationFortschritt = situationAufgaben.length > 0 ? situationIndex / situationAufgaben.length : 0;
  const rundeFortschritt =
    rundentyp === 'pronomen' ? pronomenFortschritt : rundentyp === 'situation' ? situationFortschritt : zuordnungFortschritt;
  const titelZusatz =
    phase === 'runde'
      ? rundentyp === 'pronomen'
        ? ' (Verben)'
        : rundentyp === 'situation'
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
      </View>

      {phase === 'runde' ? (
        <View style={styles.progressSlot}>
          <ProgressBar dark={darkMode} ratio={rundeFortschritt} />
        </View>
      ) : null}

      {phase === 'runde' ? (
        <View style={styles.umschalterReihe}>
          <Pressable
            onPress={() => setZeichenEin((z) => !z)}
            accessibilityRole="button"
            accessibilityLabel={zeichenEin ? 'Zeichen ausschalten' : 'Zeichen einschalten'}
            accessibilityState={{ selected: zeichenEin }}
            style={[styles.umschalter, { borderColor: theme.border, backgroundColor: theme.subtleFill }]}
          >
            <Text style={[styles.umschalterText, { color: theme.text }]}>
              Zeichen {zeichenEin ? 'ein' : 'aus'}
            </Text>
          </Pressable>
          <Pressable
            onPress={() => setUebersetzungEin((u) => !u)}
            disabled={!uebersetzungKnopfAktiv}
            accessibilityRole="button"
            accessibilityLabel={uebersetzungEin ? 'Übersetzung ausschalten' : 'Übersetzung einschalten'}
            accessibilityState={{ selected: uebersetzungEin, disabled: !uebersetzungKnopfAktiv }}
            style={[
              styles.umschalter,
              {
                borderColor: theme.border,
                backgroundColor: theme.subtleFill,
                opacity: uebersetzungKnopfAktiv ? 1 : 0.4,
              },
            ]}
          >
            <Text style={[styles.umschalterText, { color: theme.text }]}>
              Übersetzung {uebersetzungEin ? 'an' : 'aus'}
            </Text>
          </Pressable>
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
        <View style={styles.pronomenBereich}>
          {situationLadeFehler ? (
            <Text style={{ color: theme.sub, textAlign: 'center' }}>{situationLadeFehler}</Text>
          ) : !situationAufgabe ? (
            <ActivityIndicator color={theme.text} />
          ) : (
            <>
              <Text style={[styles.frage, { color: theme.text, fontSize: FONT_SIZE.title, lineHeight: LINE_HEIGHT.title }]}>
                {situationAufgabe.frage}
              </Text>
              <Text style={[styles.spielHinweis, { color: theme.sub, textAlign: 'left', marginBottom: 0 }]}>
                Sprich das richtige Wort ein oder tippe es an
              </Text>

              <View style={[styles.frameBox, { borderColor: theme.border, backgroundColor: theme.cardBg }]}>
                <Text style={[styles.frameText, { color: theme.text }]}>
                  {situationAufgabe.frameVorher}{' '}
                  {situationGewaehlt ? situationGewaehlt.pinyin : '...'} {situationAufgabe.frameNachher}
                </Text>
              </View>

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
                      <Text style={{ color: zeigeRichtig || zeigeFalsch ? '#FFFFFF' : theme.text, fontWeight: '700' }}>
                        {o.pinyin} ({o.hanzi})
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
        </View>
      )}

      {phase === 'runde' && rundentyp === 'pronomen' && pronomenVerb && (
        <View style={styles.pronomenBereich}>
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
                  <Text style={{ color: aktiv ? '#FFFFFF' : theme.text, fontWeight: '700' }}>{p}</Text>
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
        </View>
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
                    <Text style={[styles.kachelText, { color: theme.text }]}>{k.text}</Text>
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
                    <Text style={[styles.kachelText, { color: theme.text }]}>{k.text}</Text>
                  </Pressable>
                );
              })}
            </View>
          </View>
        </View>
      )}

      {phase === 'ergebnis' && (
        <View style={styles.center}>
          <Text style={[styles.ergebnisTitel, { color: theme.text }]}>Runde geschafft! 🎉</Text>
          <Text style={[styles.ergebnisText, { color: theme.sub }]}>
            {rundentyp === 'pronomen'
              ? `${pronomenVerben.length} ${pronomenVerben.length === 1 ? 'Verb' : 'Verben'} geübt`
              : rundentyp === 'situation'
                ? `${situationRichtig} von ${situationAufgaben.length} richtig`
                : `${richtig} von ${links.length} beim ersten Versuch${falsch > 0 ? ` · ${falsch} Fehlversuche` : ''}`}
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
  header: { flexDirection: 'row', alignItems: 'center', gap: 10, paddingBottom: SPACING.sm },
  backBtn: { width: 32, height: 32, alignItems: 'center', justifyContent: 'center' },
  backGlyph: { fontSize: 26 },
  title: { fontWeight: '800', fontSize: FONT_SIZE.title },
  center: { flex: 1, alignItems: 'center', justifyContent: 'center', gap: SPACING.md, paddingHorizontal: SPACING.xl },
  offline: { fontSize: FONT_SIZE.caption, marginBottom: SPACING.sm },
  auswahlScroll: { paddingBottom: SPACING.xxl },
  frage: {
    fontFamily: FONT_FAMILY.serif,
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
  chipText: { fontWeight: '700', fontSize: FONT_SIZE.small },
  startBox: { marginTop: SPACING.xxl, gap: SPACING.sm },
  anzahlText: { fontSize: FONT_SIZE.small, fontWeight: '600' },
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
  kachelText: { fontSize: FONT_SIZE.small, fontWeight: '700', textAlign: 'center' },
  ergebnisTitel: {
    fontFamily: FONT_FAMILY.serif,
    fontSize: FONT_SIZE.h2,
    lineHeight: LINE_HEIGHT.h2,
    textAlign: 'center',
  },
  ergebnisText: { fontSize: FONT_SIZE.body, textAlign: 'center' },
  ergebnisKnoepfe: { width: '100%', gap: SPACING.sm, marginTop: SPACING.md },
  progressSlot: { paddingVertical: SPACING.sm },
  umschalterReihe: { flexDirection: 'row', gap: SPACING.sm, paddingBottom: SPACING.sm },
  umschalter: {
    paddingVertical: SPACING.sm,
    paddingHorizontal: SPACING.md,
    borderRadius: RADIUS.pill,
    borderWidth: 1.5,
  },
  umschalterText: { fontWeight: '700', fontSize: FONT_SIZE.small },
  pronomenBereich: { flex: 1, paddingTop: SPACING.xl, gap: SPACING.xxl },
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
  frameText: { fontSize: FONT_SIZE.bodyLg, fontWeight: '700' },
  mikro: {
    width: 72,
    height: 72,
    borderRadius: 36,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
