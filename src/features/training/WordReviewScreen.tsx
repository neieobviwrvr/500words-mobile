import { useEffect, useMemo, useState } from 'react';
import { ActivityIndicator, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { router } from 'expo-router';
import { useAppState } from '../../state/AppState';
import { getLanguage } from '../../data/languages';
import { loadVocabWords, VocabWord } from '../../data/vocabContent';
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
const PERSONEN = ['Ich', 'Du', 'Er/Sie', 'Wir'] as const;
type Person = (typeof PERSONEN)[number];
const PRONOMEN_RUNDENGROESSE = 5;

type Rundentyp = 'zuordnung' | 'pronomen';

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

  // Wortarten nach Haeufigkeit - die "grossen drei" stehen dadurch von
  // selbst vorn, ohne dass sie hart eingetragen werden muessen. Faellt eine
  // Sprache mit anderen Wortarten dazu (z.B. Franzoesisch "Artikel"), taucht
  // sie automatisch mit auf.
  const wortartenNachHaeufigkeit = useMemo(() => {
    const zaehler = new Map<string, number>();
    for (const w of words) zaehler.set(w.wordClass, (zaehler.get(w.wordClass) ?? 0) + 1);
    return [...zaehler.entries()].sort((a, b) => b[1] - a[1]);
  }, [words]);

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

  function rundeStarten() {
    // "Mische es zu" (Simons Vorgabe): halb-halb, wenn Verben zur Auswahl
    // gehoeren - sonst bleibt es beim Zuordnungsspiel.
    const typ: Rundentyp = pronomenVerfuegbar && Math.random() < 0.5 ? 'pronomen' : 'zuordnung';
    setRundentyp(typ);

    if (typ === 'pronomen') {
      const auswahl = mischen(verbPool).slice(0, Math.min(PRONOMEN_RUNDENGROESSE, verbPool.length));
      setPronomenVerben(auswahl);
      setPronomenIndex(0);
      setPronomenGewaehlt(null);
      setPhase('runde');
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

  const filterZeile = aktiveWortarten.size === 0 ? 'Alle Wortarten' : [...aktiveWortarten].join(', ');
  const pronomenVerb = pronomenVerben[pronomenIndex];
  const pronomenFortschritt = pronomenVerben.length > 0 ? pronomenIndex / pronomenVerben.length : 0;
  const zuordnungFortschritt = links.length > 0 ? gematcht.size / links.length : 0;

  return (
    <Screen dark={darkMode}>
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
          Wörter-Wiederholung{phase === 'runde' && rundentyp === 'pronomen' ? ' (Verben)' : ''}
        </Text>
      </View>

      {phase === 'runde' ? (
        <View style={styles.progressSlot}>
          <ProgressBar
            dark={darkMode}
            ratio={rundentyp === 'pronomen' ? pronomenFortschritt : zuordnungFortschritt}
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
            {wortartenNachHaeufigkeit.map(([wortart, anzahl]) => {
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
            })}
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
});
