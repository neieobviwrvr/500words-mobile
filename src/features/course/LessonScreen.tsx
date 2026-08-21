import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { ActivityIndicator, Pressable, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
import { router, useFocusEffect } from 'expo-router';
import { Feather } from '@expo/vector-icons';
import { Card, PillButton, ProgressBar, Screen } from '../../components';
import { useAppState } from '../../state/AppState';
import { CHINESE_COURSE, CourseWord } from '../../data/chineseCourse';
import { hasVoiceFor, speakText } from '../tts/speak';
import { useSttRecorder } from '../stt/useSttRecorder';
import { useSpeechmatics } from '../stt/useSpeechmatics';
import { getLanguage } from '../../data/languages';
import { newCard, reviewCard } from '../srs/fsrsEngine';
import { cardKey, KURS_RAHMEN, KURS_WORT, loadAllCards, saveCard } from '../srs/srsStorage';
import { bewerteAntwort, bewerteFinisher, fuelleRahmen, ersteVariante, Tier } from './lessonEvaluation';
import {
  ACCENT_ERROR,
  ACCENT_GREEN,
  ACCENT_ORANGE,
  FONT_FAMILY,
  FONT_SIZE,
  getTheme,
  LINE_HEIGHT,
  RADIUS,
  SPACING,
} from '../../theme/tokens';

// Uebungs-Screen des gefuehrten Kurses (2026-08-20, erster Testaufbau).
//
// Vier Schritte, von Rezeption zu Produktion - so, wie in CLAUDE.md unter
// "Aussprache-Bewertung" vorgeschlagen:
//
//   1 Muster hoeren     nur zuhoeren, keine Aufgabe. Kostet nichts.
//   2 Vokabeln          jedes neue Wort einzeln, hoeren und nachsprechen.
//   3 Substitutionsdrill der Rahmen steht, der Slot rotiert. Der Kern.
//   4 Ergebnis
//
// ALLE 113 LEKTIONEN sind freigeschaltet (2026-08-21). Bis dahin lief die
// Uebung nur fuer 1.1, 1.2 und 1.8, solange der Ablauf noch zweimal
// grundlegend umgebaut wurde; er hat sich seitdem gehalten, und das Muster
// ist fuer jede Lektion dasselbe - sie unterscheiden sich nur in Satzrahmen
// und Slotwoertern aus derselben erzeugten Datei.
//
// ZWEI DINGE, DIE DER TEST ERST BEANTWORTET:
//   * Kann Speechmatics ueberhaupt Mandarin? `sttLanguage: 'cmn'` ist nur
//     der uebliche Code, nicht geprueft. Deshalb steht die Texteingabe
//     gleichberechtigt daneben - faellt die Erkennung aus, bleibt der
//     Ablauf pruefbar.
//   * Hat das Geraet eine chinesische Stimme? Es gibt keine vorgerenderten
//     Audiodateien fuer Chinesisch, `speakText` faellt also auf die
//     Systemstimme zurueck. Ohne zh-CN-Stimme bleibt es still.

/**
 * Zurueck aus der Lektion.
 *
 * NICHT einfach `router.back()`: gibt es nichts, wohin zurueckgesprungen
 * werden kann, quittiert der Navigator das mit "The action 'GO_BACK' was not
 * handled" und der Nutzer sitzt fest (echter Fall 2026-08-20). Das passiert
 * immer dann, wenn die Lektion ohne App-Historie geoeffnet wurde - etwa nach
 * einem Neustart direkt auf der Route.
 *
 * Der Pfad ist der einzig sinnvolle Rueckfall: von dort kommt man immer in
 * die Lektion.
 *
 * Dieselbe Absicherung fehlt auch den uebrigen Zurueck-Pfeilen der App
 * (Shop, Kategorie, Uebung, Cheat-Sheet, Belohnungen) - dort ist sie bisher
 * nur nicht aufgefallen.
 */
function zurueckZumPfad() {
  if (router.canGoBack()) router.back();
  else router.replace('/');
}

type Schritt = 'muster' | 'uebung' | 'finisher' | 'ergebnis';

/**
 * Innerhalb einer Wiederholung: erst das nackte Wort, dann derselbe Satz.
 *
 * Bewusst direkt hintereinander und nicht als zwei getrennte Durchgaenge
 * (Nutzer-Entscheidung 2026-08-21). Vorher wurden erst alle Woerter geuebt
 * und die Saetze danach - dazwischen lag ein Seitenwechsel, und das Wort war
 * beim Satz schon wieder kalt. So verschweisst beides, solange es frisch ist.
 *
 * Warum das Wort trotzdem einmal ALLEIN steht: im Satz verschleifen sich die
 * Toene, und die Spracherkennung raet sich aus dem Kontext das Passende
 * zusammen. Nur beim Einzelwort ist die Tonpruefung ueberhaupt aussagekraeftig.
 */
type Teil = 'wort' | 'satz';

type Ergebnis = { tier: Tier; art: Teil };

type DrillPunkt = {
  wort: CourseWord;
  satzHanzi: string;
  satzPinyin: string;
};

/**
 * Ein Schritt der Uebung. Die Liste wird entweder aus einer Lektion gebaut
 * (Normalfall) oder von aussen uebergeben - so laeuft die Wiederholung durch
 * denselben Ablauf, ohne dass irgendetwas doppelt existiert.
 */
export type UebungsSchritt =
  | { art: 'teaser'; hanzi: string; pinyin: string; woerter: CourseWord[] }
  | { art: 'auszeichnung'; woerter: CourseWord[] }
  | { art: 'nachsprechen'; wort: CourseWord }
  | { art: 'abrufen'; wort: CourseWord }
  | {
      art: 'satz';
      wort: CourseWord;
      hanzi: string;
      pinyin: string;
      /** Fuer die Rahmenkarte im Wiederholungs-Rhythmus. */
      lektionId: string;
      /** Das Muster ueber der Aufgabe - der Schritt braucht dafuer keine Lektion. */
      rahmenPinyin: string;
    }
  | { art: 'finisher'; aufgabe: string }
  | { art: 'ergebnis' };

type Props = {
  /** Normalfall: eine Lektion des Kurses. */
  lessonId?: string;
  /**
   * Wiederholung: eine fertig gebaute Schrittliste von aussen.
   *
   * Damit laeuft die Wiederholungs-Sitzung durch exakt denselben Ablauf wie
   * eine Lektion - gleiche Bewertung, gleiche Rueckmeldung, gleiche
   * Kartenschreibung. Waere das dupliziert, wuerden die beiden mit der Zeit
   * auseinanderlaufen.
   */
  schritteVon?: UebungsSchritt[];
  /** Ueberschrift, wenn die Schritte von aussen kommen. */
  titel?: string;
  untertitel?: string;
};

export function LessonScreen({ lessonId, schritteVon, titel, untertitel }: Props) {
  const { darkMode } = useAppState();
  const theme = getTheme(darkMode);
  const sprache = getLanguage('zh');

  const recorder = useSttRecorder();
  const stt = useSpeechmatics();

  const [pos, setPos] = useState(0);
  const [eingabe, setEingabe] = useState('');
  const [nimmtAuf, setNimmtAuf] = useState(false);
  const [prueft, setPrueft] = useState(false);
  const [urteil, setUrteil] = useState<Tier | null>(null);
  const [grund, setGrund] = useState<string | null>(null);
  const [gehoert, setGehoert] = useState<string | null>(null);
  const [hilfe, setHilfe] = useState(false);
  const [ergebnisse, setErgebnisse] = useState<Tier[]>([]);
  const [sttFehler, setSttFehler] = useState<string | null>(null);
  const [hatStimme, setHatStimme] = useState<boolean | null>(null);
  /**
   * Hat der Nutzer das Tippen freigeschaltet?
   *
   * Sprechen ist die Voreinstellung, Tippen die bewusste Ausnahme - genau
   * das ist ja das Kernprinzip der App. Wer das Eingabefeld sofort sieht,
   * benutzt es, und dann hat er die ganze Lektion lang den Mund nicht
   * aufgemacht.
   *
   * Gilt fuer die GANZE Lektion: wer einmal nicht sprechen kann (Bus, Buero,
   * schlafendes Kind), kann es meist auch beim naechsten Wort nicht. Ihn
   * dafuer jedes Mal erneut klicken zu lassen waere Schikane.
   */
  const [tippenErlaubt, setTippenErlaubt] = useState(false);

  /**
   * Wurde der AKTUELLE Schritt schon einmal beantwortet?
   *
   * Nach einer falschen Aussprache darf man es nochmal versuchen
   * (Nutzer-Wunsch 2026-08-21). Gewertet wird aber nur der ERSTE Versuch -
   * fuer die Wiederholungs-Karte und fuer die Auswertung am Lektionsende.
   * Sonst koennte man sich durch Wiederholen zu einem besseren Ergebnis
   * klicken, und dieselbe FSRS-Karte bekaeme mehrere Bewertungen im
   * Minutenabstand, womit der Algorithmus nicht rechnet. Der zweite Versuch
   * aendert also nur, was auf dem Bildschirm steht - er ist Uebung, kein
   * Nachweis. Anki macht es genauso: die erste Antwort zaehlt.
   */
  const versuchtRef = useRef(false);
  /** Wie viele Karten diese Lektion aufgefrischt hat - fuer die Auswertung. */
  const [karten, setKarten] = useState(0);

  /**
   * Die gespeicherten FSRS-Zustaende, einmal beim Betreten geladen.
   *
   * Als Ref und nicht als State: sie werden beim Bewerten sofort gebraucht
   * und duerfen nicht auf den naechsten Render warten - sonst bekaeme ein
   * Wort, das zweimal drankommt, beim zweiten Mal wieder den alten Stand.
   * Dasselbe Muster wie im Uebungs-Screen des Speed-Runs.
   */
  const kartenRef = useRef<Record<string, ReturnType<typeof newCard>>>({});

  useEffect(() => {
    let aktiv = true;
    hasVoiceFor('zh').then((da) => {
      if (aktiv) setHatStimme(da);
    });
    return () => {
      aktiv = false;
    };
  }, []);

  const lektion = useMemo(() => {
    if (!lessonId) return null;
    for (const modul of CHINESE_COURSE) {
      const treffer = modul.lessons.find((l) => l.id === lessonId);
      if (treffer) return { modul, lektion: treffer };
    }
    return null;
  }, [lessonId]);

  /**
   * Der ganze Lektionsablauf als flache Liste - ein Schritt je Seite.
   *
   * Aufbau nach Simons Vorgabe (2026-08-21): erst ein ganzer Satz zum
   * Nachsprechen, dann die Aufloesung "das waren N Woerter", dann jedes Wort
   * einzeln. Die Belohnung kommt also VOR der Arbeit - der Nutzer sagt in der
   * ersten Minute einen echten Satz und erfaehrt erst danach, woraus er
   * bestand. Umgekehrt (erst Vokabelliste, dann Satz) fuehlt es sich nach
   * Hausaufgabe an.
   *
   * Je Wort zwei Schritte:
   *   nachsprechen  hoeren und wiederholen - reines Nachmachen. Hier sitzt
   *                 die Tonpruefung; im Satz waere sie wertlos, weil die
   *                 Spracherkennung sich aus dem Kontext das Passende
   *                 zusammenreimt (siehe CLAUDE.md).
   *   abrufen       nur die deutsche Bedeutung steht da, das Chinesische muss
   *                 aus dem Kopf kommen. Das Pinyin gibt es auf Wunsch ueber
   *                 den Hilfe-Knopf - wer ihn braucht, nimmt ihn, wer nicht,
   *                 uebt echten Abruf.
   *
   * Als flache Liste statt verschachtelter Zustaende: bei sieben Schrittarten
   * waere jedes zusaetzliche Flag eine neue Fehlerquelle.
   */
  const schritte = useMemo<UebungsSchritt[]>(() => {
    // Von aussen gereichte Schritte gewinnen - das ist die Wiederholung.
    if (schritteVon) return [...schritteVon, { art: 'ergebnis' as const }];
    if (!lektion) return [];
    const l = lektion.lektion;

    if (l.kind === 'finisher') {
      return [
        { art: 'finisher', aufgabe: l.task ?? 'Sag etwas aus diesem Modul.' },
        { art: 'ergebnis' },
      ];
    }

    const slots = l.slotGroups.flat();
    if (slots.length === 0) return [{ art: 'ergebnis' }];

    const erstes = slots[0];
    const teaserWoerter = [...l.newFrameWords, erstes];

    const liste: UebungsSchritt[] = [
      {
        art: 'teaser',
        hanzi: fuelleRahmen(l.frame.hanzi, erstes.hanzi),
        pinyin: fuelleRahmen(l.frame.pinyin, erstes.pinyin),
        woerter: teaserWoerter,
      },
      { art: 'auszeichnung', woerter: teaserWoerter },
    ];

    for (const w of teaserWoerter) {
      liste.push({ art: 'nachsprechen', wort: w });
      liste.push({ art: 'abrufen', wort: w });
    }

    // Auch das erste Slot-Wort schliesst mit dem selbst gebildeten Satz ab -
    // sonst waere es als einziges nie produziert worden. Seinen Zusammenhang
    // hatte es schon im Teaser oben.
    liste.push({
      art: 'satz',
      wort: erstes,
      hanzi: fuelleRahmen(l.frame.hanzi, erstes.hanzi),
      pinyin: fuelleRahmen(l.frame.pinyin, erstes.pinyin),
      lektionId: l.id,
      rahmenPinyin: l.frame.pinyin,
    });

    // Die uebrigen Slot-Woerter bekommen JEDES einen eigenen Teaser-Satz
    // (Nutzer-Entscheidung 2026-08-21): "damit Woerter nicht einfach leer im
    // Raum stehen". Vorher kam der Satz erst NACH dem Wort - das neue Wort
    // stand also zuerst ohne jeden Zusammenhang da.
    //
    // Reihenfolge je Wort, vom Zusammenhang zur eigenen Leistung:
    //   Satz nachmachen  -> das Wort im Zusammenhang hoeren, ohne es schon
    //                       verstehen zu muessen
    //   Wort nachsprechen-> isoliert, hier greift die Tonpruefung
    //   Wort abrufen     -> nur Deutsch, das Chinesische aus dem Kopf
    //   Satz bilden      -> dasselbe Wort selbst in den Rahmen setzen
    for (const w of slots.slice(1)) {
      const satzHanzi = fuelleRahmen(l.frame.hanzi, w.hanzi);
      const satzPinyin = fuelleRahmen(l.frame.pinyin, w.pinyin);
      liste.push({ art: 'teaser', hanzi: satzHanzi, pinyin: satzPinyin, woerter: [w] });
      liste.push({ art: 'nachsprechen', wort: w });
      liste.push({ art: 'abrufen', wort: w });
      liste.push({
        art: 'satz',
        wort: w,
        hanzi: satzHanzi,
        pinyin: satzPinyin,
        lektionId: l.id,
        rahmenPinyin: l.frame.pinyin,
      });
    }

    liste.push({ art: 'ergebnis' });
    return liste;
  }, [lektion, schritteVon]);

  const loesungen = useMemo(() => {
    if (!lektion || lektion.lektion.kind !== 'finisher') return [];
    return lektion.modul.lessons
      .filter((l) => l.kind !== 'finisher')
      .flatMap((l) =>
        l.slotGroups.flat().map((w) => ({
          hanzi: fuelleRahmen(l.frame.hanzi, w.hanzi),
          pinyin: fuelleRahmen(l.frame.pinyin, w.pinyin),
          slotHanzi: w.hanzi,
          slotPinyin: w.pinyin,
        }))
      );
  }, [lektion]);

  const sprich = useCallback((text: string) => {
    speakText(text, { languageId: 'zh' });
  }, []);

  const zuruecksetzen = useCallback(() => {
    versuchtRef.current = false;
    setEingabe('');
    setUrteil(null);
    setGrund(null);
    setGehoert(null);
    setHilfe(false);
    setSttFehler(null);
  }, []);

  // Jede Lektion faengt beim naechsten Betreten von vorn an (Nutzer-Wunsch
  // 2026-08-20). Der Screen liegt in der Tab-Gruppe und bleibt gemountet,
  // behielte seinen Stand also ueber das Weggehen hinweg.
  useFocusEffect(
    useCallback(() => {
      setPos(0);
      setErgebnisse([]);
      zuruecksetzen();
      setNimmtAuf(false);
      setTippenErlaubt(false);
      setKarten(0);
      loadAllCards()
        .then((alle) => {
          kartenRef.current = alle;
        })
        .catch(() => {
          // Kein gespeicherter Stand: dann faengt jede Karte bei null an.
          // Kein Grund, die Lektion scheitern zu lassen.
          kartenRef.current = {};
        });
      return () => {
        recorder.stop().catch(() => {});
      };
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [lessonId])
  );

  if (!schritteVon && !lektion) {
    return (
      <Screen dark={darkMode} padBottom>
        <Kopf dark={darkMode} titel="Lektion" />
        <Text style={[styles.text, { color: theme.sub }]}>Diese Lektion gibt es nicht.</Text>
      </Screen>
    );
  }

  const schritt = schritte[pos];

  function merke(tier: Tier, neuerGrund: string | null, ersterVersuch: boolean) {
    setUrteil(tier);
    setGrund(neuerGrund);
    // Nur der erste Versuch geht in die Auswertung am Lektionsende ein.
    if (ersterVersuch) setErgebnisse((e) => [...e, tier]);
  }

  /**
   * Eine Bewertung in den Wiederholungs-Rhythmus schreiben.
   *
   * JEDE Kartenart wird von genau EINEM Schritt bewertet
   * (Nutzer-Entscheidung 2026-08-21):
   *
   *   Wortkarte   <- Schritt "abrufen"      Deutsch -> Chinesisch aus dem Kopf
   *   Rahmenkarte <- Schritt "satz"         Muster mit einem Wort fuellen
   *
   * Nicht bewertet wird "nachsprechen": dort steht das Wort sichtbar da, das
   * Nachmachen beweist nichts ueber das Gedaechtnis und wuerde den Rhythmus
   * mit Scheinerfolgen fuellen. Ebenso wenig der Teaser (reine Mimikry) und
   * der Finisher (mehrere gueltige Antworten, keiner Karte zuzuordnen).
   *
   * Wuerden Abrufen UND Satz dieselbe Wortkarte bewerten, bekaeme sie zwei
   * Bewertungen im Abstand von Minuten - damit rechnet FSRS nicht.
   */
  function schreibeKarte(namensraum: string, id: string, tier: Tier) {
    const key = cardKey('zh', namensraum, id);
    const aktualisiert = reviewCard(kartenRef.current[key] ?? newCard(), tier);
    kartenRef.current = { ...kartenRef.current, [key]: aktualisiert };
    setKarten((n) => n + 1);
    saveCard(key, aktualisiert).catch(() => {
      // Best effort - ein Speicherfehler soll die laufende Lektion nicht
      // unterbrechen.
    });
  }

  function pruefe(antwort: string, quelle: 'sprache' | 'text') {
    // `lektion` ist hier nie null (weiter oben wird sonst schon abgebrochen),
    // aber TypeScript kann das ueber die Funktionsgrenze nicht sehen.
    // Bei der Wiederholung gibt es keine Lektion - die Schritte tragen alles
    // Noetige selbst.
    if (!schritt) return;

    const ersterVersuch = !versuchtRef.current;
    versuchtRef.current = true;

    if (schritt.art === 'finisher') {
      const b = bewerteFinisher(antwort, loesungen, quelle);
      merke(b.tier, b.grund, ersterVersuch);
      return;
    }

    // Einzelwort bei nachsprechen/abrufen, ganzer Satz beim Teaser und beim
    // Satz-Schritt. Der Slot ist beim Teaser das neue Wort, das er einfuehrt -
    // es steht immer an letzter Stelle in `woerter` (siehe Schrittbau oben).
    const ziel =
      schritt.art === 'satz'
        ? { hanzi: schritt.hanzi, pinyin: schritt.pinyin, wort: schritt.wort }
        : schritt.art === 'teaser'
          ? {
              hanzi: schritt.hanzi,
              pinyin: schritt.pinyin,
              wort: schritt.woerter[schritt.woerter.length - 1],
            }
          : schritt.art === 'nachsprechen' || schritt.art === 'abrufen'
            ? { hanzi: schritt.wort.hanzi, pinyin: schritt.wort.pinyin, wort: schritt.wort }
            : null;
    if (!ziel) return;

    const b = bewerteAntwort({
      antwort,
      erwartetHanzi: ziel.hanzi,
      erwartetPinyin: ziel.pinyin,
      slotHanzi: ziel.wort.hanzi,
      slotPinyin: ziel.wort.pinyin,
      quelle,
    });
    merke(b.tier, b.grund, ersterVersuch);

    // Nur der erste Versuch schreibt - ein zweiter Anlauf ist Uebung, kein
    // Nachweis (siehe versuchtRef).
    if (!ersterVersuch) return;

    // Der TEASER schreibt bewusst KEINE Karte, obwohl er jetzt bewertet wird
    // (2026-08-21). Zwei Gruende: der Satz steht sichtbar da, das Nachsprechen
    // beweist also nichts ueber das Abrufen - und er kommt MEHRFACH je Lektion
    // (einmal vor jedem neuen Wort). Wuerde er auf die Rahmenkarte schreiben,
    // bekaeme dieselbe Karte vier bis fuenf Bewertungen im Minutenabstand,
    // womit FSRS nicht rechnet. Jede Kartenart wird von genau EINEM Schritt
    // bewertet - siehe CLAUDE.md.
    if (schritt.art === 'abrufen') {
      schreibeKarte(KURS_WORT, schritt.wort.hanzi, b.tier);
    } else if (schritt.art === 'satz') {
      schreibeKarte(KURS_RAHMEN, schritt.lektionId, b.tier);
    }
  }

  async function aufnehmen() {
    setSttFehler(null);
    if (!nimmtAuf) {
      setNimmtAuf(true);
      try {
        await recorder.start();
      } catch {
        setNimmtAuf(false);
        setSttFehler('Das Mikrofon ließ sich nicht starten.');
      }
      return;
    }
    setNimmtAuf(false);
    setPrueft(true);
    try {
      const uri = await recorder.stop();
      if (!uri) throw new Error('keine Aufnahme');
      const { text } = await stt.transcribe(uri, sprache.sttLanguage);
      setGehoert(text);
      pruefe(text, 'sprache');
    } catch {
      setSttFehler('Die Spracherkennung hat nicht geantwortet. Tippe die Antwort stattdessen ein.');
    } finally {
      setPrueft(false);
    }
  }

  /**
   * Nochmal sprechen nach einer misslungenen Antwort.
   *
   * Raeumt nur die Rueckmeldung weg, damit das Mikrofon wieder erscheint.
   * `versuchtRef` bleibt bewusst stehen - siehe dort.
   */
  function nochmal() {
    setUrteil(null);
    setGrund(null);
    setGehoert(null);
    setSttFehler(null);
    setEingabe('');
  }

  function weiter() {
    setPos((p) => Math.min(p + 1, schritte.length - 1));
    zuruecksetzen();
  }

  // Der Balken zaehlt JEDEN Schritt, nicht nur die mit Antwort
  // (Nutzer-Wunsch 2026-08-21: "damit der User weiss wie lange die Lektion
  // noch geht").
  //
  // Vorher zaehlte er nur `nachsprechen`/`abrufen`/`satz`/`finisher`. Dadurch
  // stand er auf jedem Teaser und jeder Auszeichnung still - in Lektion 1.1
  // auf 7 von 26 Seiten, also gut einem Viertel. Ein Balken, der sich beim
  // Weitertippen nicht ruehrt, sieht kaputt aus und beantwortet die Frage
  // "wie lange noch" gerade nicht.
  //
  // Der Ergebnis-Schritt zaehlt nicht mit: er IST das Ende, kein Weg dorthin.
  // Sonst haette die letzte Aufgabe nie 100%.
  const gesamtSchritte = schritte.filter((x) => x.art !== 'ergebnis').length;
  const bisher = Math.min(pos + 1, gesamtSchritte);

  return (
    <Screen dark={darkMode} padBottom>
      <Kopf
        dark={darkMode}
        titel={titel ?? `Lektion ${lessonId}`}
        untertitel={untertitel ?? lektion?.modul.title}
      />

      {hatStimme === false ? (
        <Text style={[styles.hinweis, { color: ACCENT_ERROR, marginTop: SPACING.sm }]}>
          Auf diesem Gerät ist keine chinesische Stimme installiert — „Anhören" bleibt stumm.
          Nachladen: Einstellungen › Bedienungshilfen › Gesprochene Inhalte › Stimmen.
        </Text>
      ) : null}

      {schritt && schritt.art !== 'ergebnis' && gesamtSchritte > 0 ? (
        <View style={styles.fortschritt}>
          <ProgressBar
            dark={darkMode}
            step={bisher}
            total={gesamtSchritte}
            label={`Schritt ${bisher} von ${gesamtSchritte}`}
          />
        </View>
      ) : null}

      <ScrollView contentContainerStyle={styles.inhalt} showsVerticalScrollIndicator={false}>
        {/* ---- Teaser: ein ganzer Satz, nur nachmachen ---- */}
        {schritt?.art === 'teaser' ? (
          <>
            <Text style={[styles.schrittLabel, { color: theme.sub }]}>SPRICH DAS NACH</Text>
            <Card dark={darkMode} style={styles.karte}>
              <Text style={[styles.gross, { color: theme.text }]}>{schritt.pinyin}</Text>
              {/* Bewusst OHNE deutsche Uebersetzung: was der Satz heisst,
                  loest sich gleich ueber die Einzelwoerter auf. Vorher
                  verraten waere die Pointe weg. */}
              <Text style={[styles.text, { color: theme.sub }]}>
                Noch nicht verstehen — einfach nachsprechen.
              </Text>
              <HoerKnopf dark={darkMode} onPress={() => sprich(schritt.hanzi)} />
            </Card>
            {/* Bis 2026-08-21 stand hier nur ein Knopf "Gesagt" - eine reine
                Selbstauskunft. In einer App, deren Kernprinzip Sprechen ist,
                war ausgerechnet der erste Schritt jeder Lektion der einzige
                ohne Mikrofon. */}
            {urteil ? (
              <Rueckmeldung
                dark={darkMode}
                urteil={urteil}
                loesung={schritt.pinyin}
                grund={grund}
                gehoert={gehoert}
                onNochmal={nochmal}
                onHoeren={() => sprich(schritt.hanzi)}
              />
            ) : (
              <AntwortBlock
                dark={darkMode}
                nimmtAuf={nimmtAuf}
                prueft={prueft}
                sttFehler={sttFehler}
                eingabe={eingabe}
                setEingabe={setEingabe}
                platzhalter={schritt.pinyin.replace(/[^a-zA-Z ]/g, '')}
                tippenErlaubt={tippenErlaubt}
                onTippen={() => setTippenErlaubt(true)}
                onMikro={aufnehmen}
                onPruefen={() => pruefe(eingabe, 'text')}
              />
            )}
            <PillButton dark={darkMode} label="Weiter" onPress={weiter} disabled={!urteil} />
          </>
        ) : null}

        {/* ---- Aufloesung: das waren N Woerter ---- */}
        {schritt?.art === 'auszeichnung' ? (
          <>
            <View style={styles.feier}>
              <Feather name="award" size={40} color={ACCENT_GREEN} />
              <Text style={[styles.feierTitel, { color: theme.text }]}>
                {schritt.woerter.length === 1
                  ? 'Das war ein neues Wort'
                  : `Das waren ${schritt.woerter.length} neue Wörter`}
              </Text>
            </View>
            <Card dark={darkMode} style={styles.karte}>
              {schritt.woerter.map((w) => (
                <View key={w.hanzi} style={styles.zeile}>
                  <View style={styles.zeileText}>
                    <Text style={[styles.mittel, { color: theme.text }]}>{w.pinyin}</Text>
                    <Text style={[styles.text, { color: theme.sub }]}>{w.de}</Text>
                  </View>
                  <HoerKnopf dark={darkMode} onPress={() => sprich(w.hanzi)} klein />
                </View>
              ))}
            </Card>
            <PillButton dark={darkMode} label="Wörter üben" onPress={weiter} />
          </>
        ) : null}

        {/* ---- Nachsprechen: hoeren und wiederholen ---- */}
        {schritt?.art === 'nachsprechen' ? (
          <>
            <Text style={[styles.schrittLabel, { color: theme.sub }]}>SPRICH ES NACH</Text>
            <Card dark={darkMode} style={styles.karte}>
              <Text style={[styles.gross, { color: theme.text }]}>{schritt.wort.pinyin}</Text>
              <Text style={[styles.text, { color: theme.sub }]}>{schritt.wort.de}</Text>
              <HoerKnopf dark={darkMode} onPress={() => sprich(schritt.wort.hanzi)} />
            </Card>
            {urteil ? (
              <Rueckmeldung
                dark={darkMode}
                urteil={urteil}
                loesung={schritt.wort.pinyin}
                grund={grund}
                gehoert={gehoert}
                onNochmal={nochmal}
                onHoeren={() => sprich(schritt.wort.hanzi)}
              />
            ) : (
              <AntwortBlock
                dark={darkMode}
                nimmtAuf={nimmtAuf}
                prueft={prueft}
                sttFehler={sttFehler}
                eingabe={eingabe}
                setEingabe={setEingabe}
                platzhalter={schritt.wort.pinyin.replace(/[^a-zA-Z ]/g, '')}
                tippenErlaubt={tippenErlaubt}
                onTippen={() => setTippenErlaubt(true)}
                onMikro={aufnehmen}
                onPruefen={() => pruefe(eingabe, 'text')}
              />
            )}
            <PillButton dark={darkMode} label="Weiter" onPress={weiter} disabled={!urteil} />
          </>
        ) : null}

        {/* ---- Abrufen: nur Deutsch, Chinesisch aus dem Kopf ---- */}
        {schritt?.art === 'abrufen' ? (
          <>
            <Text style={[styles.schrittLabel, { color: theme.sub }]}>WIE HEISST DAS?</Text>
            <Card dark={darkMode} style={styles.karte}>
              <Text style={[styles.gross, { color: ACCENT_ORANGE }]}>{schritt.wort.de}</Text>
              {/* Hilfe auf Wunsch: wer das Pinyin braucht, bekommt es - wer
                  nicht, uebt echten Abruf. Ohne den Knopf waere die Huerde
                  fuer Anfaenger zu hoch und sie wuerden nur raten. */}
              {hilfe ? (
                <Text style={[styles.mittel, { color: theme.sub }]}>{schritt.wort.pinyin}</Text>
              ) : (
                <Pressable
                  onPress={() => setHilfe(true)}
                  accessibilityRole="button"
                  accessibilityLabel="Pinyin einblenden"
                  style={({ pressed }) => [
                    styles.hoeren,
                    {
                      borderColor: theme.border,
                      backgroundColor: theme.subtleFill,
                      opacity: pressed ? 0.6 : 1,
                    },
                  ]}
                >
                  <Feather name="help-circle" size={18} color={theme.text} />
                  <Text style={[styles.hoerenText, { color: theme.text }]}>Pinyin zeigen</Text>
                </Pressable>
              )}
            </Card>
            {urteil ? (
              <Rueckmeldung
                dark={darkMode}
                urteil={urteil}
                loesung={schritt.wort.pinyin}
                grund={grund}
                gehoert={gehoert}
                onNochmal={nochmal}
                onHoeren={() => sprich(schritt.wort.hanzi)}
              />
            ) : (
              <AntwortBlock
                dark={darkMode}
                nimmtAuf={nimmtAuf}
                prueft={prueft}
                sttFehler={sttFehler}
                eingabe={eingabe}
                setEingabe={setEingabe}
                platzhalter="auf Chinesisch"
                tippenErlaubt={tippenErlaubt}
                onTippen={() => setTippenErlaubt(true)}
                onMikro={aufnehmen}
                onPruefen={() => pruefe(eingabe, 'text')}
              />
            )}
            <PillButton dark={darkMode} label="Weiter" onPress={weiter} disabled={!urteil} />
          </>
        ) : null}

        {/* ---- Satz: dasselbe Wort im Rahmen ---- */}
        {schritt?.art === 'satz' ? (
          <>
            <Text style={[styles.schrittLabel, { color: theme.sub }]}>JETZT IM GANZEN SATZ</Text>
            <Card dark={darkMode} style={styles.karte}>
              <Text style={[styles.rahmen, { color: theme.sub }]}>
                {ersteVariante(schritt.rahmenPinyin)}
              </Text>
              <Text style={[styles.gross, { color: ACCENT_ORANGE }]}>{schritt.wort.de}</Text>
              <HoerKnopf dark={darkMode} onPress={() => sprich(schritt.hanzi)} />
            </Card>
            {urteil ? (
              <Rueckmeldung
                dark={darkMode}
                urteil={urteil}
                loesung={schritt.pinyin}
                grund={grund}
                gehoert={gehoert}
                onNochmal={nochmal}
                onHoeren={() => sprich(schritt.hanzi)}
              />
            ) : (
              <AntwortBlock
                dark={darkMode}
                nimmtAuf={nimmtAuf}
                prueft={prueft}
                sttFehler={sttFehler}
                eingabe={eingabe}
                setEingabe={setEingabe}
                platzhalter={schritt.pinyin.replace(/[^a-zA-Z ]/g, '')}
                tippenErlaubt={tippenErlaubt}
                onTippen={() => setTippenErlaubt(true)}
                onMikro={aufnehmen}
                onPruefen={() => pruefe(eingabe, 'text')}
              />
            )}
            <PillButton dark={darkMode} label="Weiter" onPress={weiter} disabled={!urteil} />
          </>
        ) : null}

        {/* ---- Finisher: keine Hilfe auf dem Schirm ---- */}
        {schritt?.art === 'finisher' ? (
          <>
            <Text style={[styles.schrittLabel, { color: theme.sub }]}>ZEIG, WAS DU KANNST</Text>
            <Card dark={darkMode} style={styles.karte}>
              <Text style={[styles.gross, { color: theme.text }]}>{schritt.aufgabe}</Text>
              <Text style={[styles.text, { color: theme.sub }]}>
                Auf Chinesisch — ohne Vorlage. Es gibt mehrere richtige Antworten.
              </Text>
            </Card>
            {urteil ? (
              <Rueckmeldung
                dark={darkMode}
                urteil={urteil}
                loesung={loesungen[0]?.pinyin ?? ''}
                grund={grund}
                gehoert={gehoert}
                onNochmal={nochmal}
                onHoeren={() => sprich(loesungen[0]?.hanzi ?? '')}
              />
            ) : (
              <AntwortBlock
                dark={darkMode}
                nimmtAuf={nimmtAuf}
                prueft={prueft}
                sttFehler={sttFehler}
                eingabe={eingabe}
                setEingabe={setEingabe}
                platzhalter="frei sprechen"
                tippenErlaubt={tippenErlaubt}
                onTippen={() => setTippenErlaubt(true)}
                onMikro={aufnehmen}
                onPruefen={() => pruefe(eingabe, 'text')}
              />
            )}
            {urteil ? <PillButton dark={darkMode} label="Auswertung" onPress={weiter} /> : null}
          </>
        ) : null}

        {/* ---- Ergebnis ---- */}
        {schritt?.art === 'ergebnis' ? (
          <>
            <Text style={[styles.schrittLabel, { color: theme.sub }]}>AUSWERTUNG</Text>
            <Card dark={darkMode} style={styles.karte}>
              {(['richtig', 'ueberlebt', 'nicht_verstanden'] as Tier[]).map((t) => (
                <View key={t} style={styles.zeile}>
                  <Text style={[styles.text, { color: farbeFuer(t) }]}>{textFuer(t)}</Text>
                  <Text style={[styles.text, { color: theme.text, fontWeight: '800' }]}>
                    {ergebnisse.filter((e) => e === t).length}
                  </Text>
                </View>
              ))}
            </Card>
            <Text style={[styles.hinweis, { color: theme.sub }]}>
              {karten === 0
                ? 'Noch nichts für die Wiederholung — dafür zählen nur die Abruf- und Satzschritte.'
                : `${karten} ${karten === 1 ? 'Karte' : 'Karten'} für die Wiederholung aufgefrischt.`}
            </Text>
            <PillButton dark={darkMode} label="Fertig" onPress={zurueckZumPfad} />
          </>
        ) : null}
      </ScrollView>
    </Screen>
  );
}

// ---------------------------------------------------------------------------

function farbeFuer(t: Tier) {
  if (t === 'richtig') return ACCENT_GREEN;
  if (t === 'ueberlebt') return ACCENT_ORANGE;
  return ACCENT_ERROR;
}

function textFuer(t: Tier) {
  if (t === 'richtig') return 'Richtig';
  if (t === 'ueberlebt') return 'Verstanden — Rahmen holpert';
  return 'Noch nicht';
}

/** Mikrofon plus Texteingabe - beide Schritte benutzen dasselbe. */
function AntwortBlock({
  dark, nimmtAuf, prueft, sttFehler, eingabe, setEingabe, platzhalter,
  tippenErlaubt, onTippen, onMikro, onPruefen,
}: {
  dark: boolean; nimmtAuf: boolean; prueft: boolean; sttFehler: string | null;
  eingabe: string; setEingabe: (v: string) => void; platzhalter: string;
  tippenErlaubt: boolean; onTippen: () => void;
  onMikro: () => void; onPruefen: () => void;
}) {
  const theme = getTheme(dark);
  return (
    <>
      <Pressable
        onPress={onMikro}
        disabled={prueft}
        accessibilityRole="button"
        accessibilityLabel={nimmtAuf ? 'Aufnahme beenden' : 'Antwort sprechen'}
        style={({ pressed }) => [
          styles.mikro,
          { backgroundColor: nimmtAuf ? ACCENT_ERROR : ACCENT_ORANGE, opacity: pressed || prueft ? 0.7 : 1 },
        ]}
      >
        {prueft ? <ActivityIndicator color="#FFFFFF" />
                : <Feather name={nimmtAuf ? 'square' : 'mic'} size={26} color="#FFFFFF" />}
      </Pressable>
      <Text style={[styles.hinweis, { color: theme.sub }]}>
        {nimmtAuf ? 'Sprich jetzt — nochmal tippen zum Beenden.' : 'Antippen und sprechen'}
      </Text>
      {sttFehler ? <Text style={[styles.hinweis, { color: ACCENT_ERROR }]}>{sttFehler}</Text> : null}

      {/* Die Texteingabe liegt hinter einem Knopf und ist NICHT von Anfang an
          sichtbar (Nutzer-Entscheidung 2026-08-21). Wer das Feld sieht,
          benutzt es - und hat die Lektion durch, ohne einmal gesprochen zu
          haben. Einmal aufgedeckt bleibt es fuer die ganze Lektion offen. */}
      {tippenErlaubt ? (
        <>
          <Text style={[styles.schrittLabel, { color: theme.sub, marginTop: SPACING.lg }]}>
            TIPPEN (PINYIN, OHNE TÖNE)
          </Text>
          <TextInput
            value={eingabe}
            onChangeText={setEingabe}
            placeholder={platzhalter}
            placeholderTextColor={theme.sub}
            autoCapitalize="none"
            autoCorrect={false}
            onSubmitEditing={() => eingabe.trim() && onPruefen()}
            style={[styles.feld, { borderColor: theme.border, color: theme.text, backgroundColor: theme.cardBg }]}
          />
          <PillButton dark={dark} label="Prüfen" disabled={!eingabe.trim()} onPress={onPruefen} />
        </>
      ) : (
        <Pressable
          onPress={onTippen}
          accessibilityRole="button"
          accessibilityLabel="Ich kann gerade nicht sprechen — Eingabefeld einblenden"
          style={({ pressed }) => [styles.leiser, { opacity: pressed ? 0.6 : 1 }]}
        >
          <Text style={[styles.leiserText, { color: theme.sub }]}>
            Ich kann gerade nicht sprechen
          </Text>
        </Pressable>
      )}
    </>
  );
}

/** Urteil plus Loesung - beide Schritte benutzen dasselbe. */
function Rueckmeldung({
  dark, urteil, loesung, grund, gehoert, onHoeren, onNochmal,
}: {
  dark: boolean; urteil: Tier; loesung: string; grund: string | null;
  gehoert: string | null; onHoeren: () => void;
  /** Fehlt beim Finisher - dort gibt es keinen zweiten Anlauf. */
  onNochmal?: () => void;
}) {
  const theme = getTheme(dark);
  return (
    <Card dark={dark} style={styles.karte}>
      <Text style={[styles.urteil, { color: farbeFuer(urteil) }]}>{textFuer(urteil)}</Text>
      {/* Sagt, WAS schiefging - ein blosses Urteil lehrt nichts. */}
      {grund ? <Text style={[styles.text, { color: theme.sub }]}>{grund}</Text> : null}
      <Text style={[styles.gross, { color: theme.text }]}>{loesung}</Text>
      {gehoert ? (
        <Text style={[styles.text, { color: theme.sub }]}>{`Verstanden: ${gehoert}`}</Text>
      ) : null}
      <View style={styles.rueckKnoepfe}>
        <HoerKnopf dark={dark} onPress={onHoeren} />
        {/* Zweiter Anlauf nur, wenn es etwas zu verbessern gibt
            (Nutzer-Wunsch 2026-08-21). Bei "richtig" waere der Knopf eine
            Einladung, an einer schon gelungenen Antwort herumzufeilen. */}
        {onNochmal && urteil !== 'richtig' ? (
          <Pressable
            onPress={onNochmal}
            accessibilityRole="button"
            accessibilityLabel="Nochmal sprechen"
            style={({ pressed }) => [
              styles.nochmal,
              { borderColor: theme.border, opacity: pressed ? 0.6 : 1 },
            ]}
          >
            <Feather name="rotate-ccw" size={15} color={theme.text} />
            <Text style={[styles.nochmalText, { color: theme.text }]}>Nochmal sprechen</Text>
          </Pressable>
        ) : null}
      </View>
    </Card>
  );
}

function Kopf({ dark, titel, untertitel }: { dark: boolean; titel: string; untertitel?: string }) {
  const theme = getTheme(dark);
  return (
    <View style={styles.kopf}>
      <Pressable
        onPress={zurueckZumPfad}
        accessibilityRole="button"
        accessibilityLabel="Zurück"
        style={({ pressed }) => [styles.zurueck, { opacity: pressed ? 0.6 : 1 }]}
      >
        <Feather name="chevron-left" size={26} color={theme.text} />
      </Pressable>
      <View style={styles.kopfText}>
        <Text style={[styles.kopfTitel, { color: theme.text }]}>{titel}</Text>
        {untertitel ? (
          <Text style={[styles.kopfUnter, { color: theme.sub }]} numberOfLines={1}>
            {untertitel}
          </Text>
        ) : null}
      </View>
    </View>
  );
}

function HoerKnopf({ dark, onPress, klein }: { dark: boolean; onPress: () => void; klein?: boolean }) {
  const theme = getTheme(dark);
  return (
    <Pressable
      onPress={onPress}
      accessibilityRole="button"
      accessibilityLabel="Vorlesen"
      style={({ pressed }) => [
        styles.hoeren,
        {
          borderColor: theme.border,
          backgroundColor: theme.subtleFill,
          opacity: pressed ? 0.6 : 1,
          alignSelf: klein ? 'center' : 'flex-start',
        },
      ]}
    >
      <Feather name="volume-2" size={18} color={theme.text} />
      {klein ? null : <Text style={[styles.hoerenText, { color: theme.text }]}>Anhören</Text>}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  kopf: { flexDirection: 'row', alignItems: 'center', gap: SPACING.sm },
  zurueck: { padding: SPACING.xs },
  kopfText: { flex: 1 },
  kopfTitel: {
    fontFamily: FONT_FAMILY.serif,
    fontSize: FONT_SIZE.title,
    lineHeight: LINE_HEIGHT.title,
  },
  kopfUnter: { fontSize: FONT_SIZE.caption, lineHeight: LINE_HEIGHT.caption },
  fortschritt: { marginTop: SPACING.md },
  rueckKnoepfe: { flexDirection: 'row', alignItems: 'center', gap: SPACING.sm, flexWrap: 'wrap' },
  nochmal: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: SPACING.xs,
    borderWidth: 1,
    borderRadius: RADIUS.pill,
    paddingVertical: SPACING.xs,
    paddingHorizontal: SPACING.md,
  },
  nochmalText: { fontSize: FONT_SIZE.small, fontWeight: '700' },
  inhalt: { paddingTop: SPACING.lg, paddingBottom: SPACING.xxxl, gap: SPACING.md },
  schrittLabel: {
    fontSize: FONT_SIZE.small,
    fontWeight: '800',
    letterSpacing: 0.8,
  },
  karte: { gap: SPACING.sm },
  gross: {
    // BEWUSST OHNE FONT_FAMILY.serif - hier steht Pinyin.
    //
    // Georgia (das ist unsere Serifenschrift auf iOS) hat die
    // Hatschek-Vokale des DRITTEN Tons nicht: ǎ (U+01CE) und ǒ (U+01D2).
    // Fehlt der Glyph, zerlegt der Renderer das Zeichen und setzt Buchstabe
    // und Akzent nebeneinander - aus "lǎoshī" wird sichtbar "la ˇ oshī"
    // (im Browser nachgemessen: 40 px statt 20 px Zeichenbreite). Die
    // Makron-Vokale des ersten Tons (ā ī ū) hat Georgia, deshalb faellt es
    // nur beim dritten Ton auf - also ausgerechnet regelmaessig.
    //
    // Die Systemschrift deckt beide vollstaendig ab. Wer hier wieder eine
    // Serifenschrift einsetzt, muss sie vorher gegen ǎ und ǒ pruefen.
    fontSize: FONT_SIZE.h2,
    lineHeight: LINE_HEIGHT.h2,
    fontWeight: '600',
  },
  rahmen: { fontSize: FONT_SIZE.bodyLg, lineHeight: LINE_HEIGHT.bodyLg },
  text: { fontSize: FONT_SIZE.body, lineHeight: LINE_HEIGHT.body },
  urteil: { fontSize: FONT_SIZE.body, fontWeight: '800' },
  hinweis: { fontSize: FONT_SIZE.caption, lineHeight: LINE_HEIGHT.caption, textAlign: 'center' },
  zeile: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', gap: SPACING.md },
  zeileText: { flex: 1, gap: 2 },
  mitte: { flex: 1, alignItems: 'center', justifyContent: 'center', gap: SPACING.md },
  mittel: {
    fontSize: FONT_SIZE.title,
    lineHeight: LINE_HEIGHT.title,
    fontWeight: '700',
  },
  leiser: { alignSelf: 'center', paddingVertical: SPACING.md, paddingHorizontal: SPACING.lg },
  leiserText: {
    fontSize: FONT_SIZE.caption,
    // Bewusst unauffaellig: eine Rueckfallebene, kein gleichrangiger Weg.
    textDecorationLine: 'underline',
  },
  feier: { alignItems: 'center', gap: SPACING.sm, paddingVertical: SPACING.lg },
  feierTitel: {
    fontFamily: FONT_FAMILY.serif,
    fontSize: FONT_SIZE.h2,
    lineHeight: LINE_HEIGHT.h2,
    textAlign: 'center',
  },
  hoeren: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: SPACING.sm,
    borderWidth: 1,
    borderRadius: RADIUS.pill,
    paddingVertical: SPACING.sm,
    paddingHorizontal: SPACING.md,
  },
  hoerenText: { fontSize: FONT_SIZE.caption, fontWeight: '700' },
  mikro: {
    width: 72,
    height: 72,
    borderRadius: 36,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: SPACING.sm,
  },
  feld: {
    borderWidth: 1.5,
    borderRadius: RADIUS.md,
    padding: SPACING.md,
    fontSize: FONT_SIZE.bodyLg,
  },
});
