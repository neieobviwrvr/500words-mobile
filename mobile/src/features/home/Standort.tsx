import { useMemo } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { CATEGORIES, GRUNDWORTSCHATZ_ID, GRUNDWORTSCHATZ_NAME } from '../../data/categories';
import { leihName } from '../../data/geliehen';
import { scenarioLabel } from '../../data/scenarios';
import { LEARNING_MODE_LABEL } from '../../state/AppState';
import type { LearningMode } from '../../state/AppState';
import { FONT_SIZE, LINE_HEIGHT, SPACING, getTheme, schrift } from '../../theme/tokens';
import { useCategorySituations } from '../lessons/useCategorySituations';
import { useGuidedCourse } from './useGuidedCourse';
import { useGuidedProgress } from './useGuidedProgress';

// ---------------------------------------------------------------------------
// "Wo bin ich gerade?" - ueber dem Fortschrittsbalken (2026-09-12)
// ---------------------------------------------------------------------------
//
// Der Inhalt ist der des alten "Du bist hier"-Kastens von S1, der mit dem
// Umbau auf die zwei Karten weggefallen ist (Simons Vorgabe am selben Tag).
// Simon wollte die Aussage zurueck, aber ueber dem Balken und ohne Kasten:
// zwei Zeilen, sonst nichts.
//
// ZWEI Zeilen und nicht eine, aus demselben Grund wie im alten Kasten: die
// Stelle allein ("Hotel + Accommodation") sagt nicht, in welchem der beiden
// Lernwege man steht, und der Lernweg allein sagt nicht, wo man ist. Steht
// eine Situation fest, rutscht die Kategorie in die kleine Zeile und die
// Situation wird zur grossen - so nennt die Anzeige beides, ohne eine dritte
// Zeile zu brauchen.

/** Ein Modul, wie `useGuidedCourse` es liefert - nur das, was hier zaehlt. */
type KursModul = {
  id: string;
  label: string;
  niveau: string | null;
  themes: { id: string; label: string }[];
};

export type Standort = {
  /** Kleine Zeile: der Lernweg, bei Bedarf mit Kategorie oder Niveau. */
  klein: string;
  /** Grosse Zeile: die Stelle selbst. */
  gross: string;
};

/**
 * Woher die Stelle kommt - dieselben Quellen, aus denen sich auch der Pfad
 * baut, kein zweites Tracking:
 *
 * - **Speed-Run:** die zuletzt GELERNTE Kategorie (`recentCategoryIds`),
 *   abgeleitet aus den FSRS-Karten. Der Screen soll zeigen, wo man aufgehoert
 *   hat, nicht wo man theoretisch weitermachen sollte.
 * - **Gefuehrter Kurs:** die naechste offene Lektion aus `useGuidedProgress`,
 *   die ebenfalls an den Karten der Lektionen haengt.
 */
export function standortAus({
  learningMode,
  lektionen,
  aktuellesModul,
  aktuelleLektion,
  recentCategoryIds,
  recentSituations,
}: {
  learningMode: LearningMode;
  /** Die Module des gefuehrten Kurses (`useGuidedCourse().lessons`). */
  lektionen: KursModul[];
  aktuellesModul: string | null;
  aktuelleLektion: string | null;
  recentCategoryIds: string[];
  recentSituations: { categoryId: string; scenario: string }[];
}): Standort {
  {
    const kurs = { lessons: lektionen };
    const kursFortschritt = { aktuellesModul, aktuelleLektion };
    const situationen = { recentCategoryIds, recentSituations };
    if (learningMode === 'gefuehrt') {
      const modul =
        kurs.lessons.find((m) => m.id === kursFortschritt.aktuellesModul) ?? kurs.lessons[0];
      if (!modul) return { klein: LEARNING_MODE_LABEL.gefuehrt, gross: 'Noch kein Kurs' };

      const lektion = modul.themes.find((t) => t.id === kursFortschritt.aktuelleLektion);
      // Steht die Lektion fest, wandert das Modul in die kleine Zeile -
      // dasselbe Muster wie Kategorie/Situation im Speed-Run.
      return {
        klein: lektion
          ? `${LEARNING_MODE_LABEL.gefuehrt} · ${modul.label}`
          : modul.niveau
            ? `${LEARNING_MODE_LABEL.gefuehrt} · ${modul.niveau}`
            : LEARNING_MODE_LABEL.gefuehrt,
        gross: lektion?.label ?? modul.label,
      };
    }

    const zuletzt = situationen.recentCategoryIds[0] ?? GRUNDWORTSCHATZ_ID;
    // Der Grundwortschatz steht in `CATEGORIES` nicht drin: er ist keine
    // Kaufkategorie, sondern der freie Teil. Im PFAD ist er die Sprach-Pille
    // und traegt dort den Sprachnamen - hier heisst er beim Namen
    // (2026-09-12, Simon): "Chinesisch" stuende sonst zweimal untereinander,
    // einmal im Dropdown und einmal als Stelle.
    const name = CATEGORIES.find((c) => c.id === zuletzt)?.name ?? GRUNDWORTSCHATZ_NAME;
    const situation = situationen.recentSituations.find((s) => s.categoryId === zuletzt);

    return {
      klein: situation ? `${LEARNING_MODE_LABEL.speedrun} · ${name}` : LEARNING_MODE_LABEL.speedrun,
      gross: situation
        ? // Leih-Namen hier aufloesen: die aufnehmende Kategorie ist genau
          // hier bekannt (siehe data/geliehen.ts).
          (leihName(situation.categoryId, situation.scenario) ?? scenarioLabel(situation.scenario))
        : name,
    };
  }
}

/**
 * Bequemer Weg fuer Screens, die die drei Quellen NICHT ohnehin lesen - auf
 * dem Testscreen ist das so. S1 ruft `standortAus` direkt mit den Daten, die
 * dort schon geladen sind: `useCategorySituations` holt saemtliche Saetze und
 * alle Lernkarten, und das ein zweites Mal zu tun waere auf dem Startscreen
 * eine doppelte Ladung fuer dieselbe Zeile.
 */
export function useStandort(languageId: string, learningMode: LearningMode): Standort {
  const situationen = useCategorySituations(languageId);
  const kurs = useGuidedCourse(languageId);
  const kursFortschritt = useGuidedProgress(languageId);

  return useMemo(
    () =>
      standortAus({
        learningMode,
        lektionen: kurs.lessons,
        aktuellesModul: kursFortschritt.aktuellesModul,
        aktuelleLektion: kursFortschritt.aktuelleLektion,
        recentCategoryIds: situationen.recentCategoryIds,
        recentSituations: situationen.recentSituations,
      }),
    [
      learningMode,
      kurs.lessons,
      kursFortschritt.aktuellesModul,
      kursFortschritt.aktuelleLektion,
      situationen.recentCategoryIds,
      situationen.recentSituations,
    ]
  );
}

/**
 * Die Anzeige dazu. Ohne Rahmen und ohne Flaeche - der Kasten, den das
 * frueher war, ist beim Umbau bewusst weggefallen; hier steht nur noch der
 * Text, mittig ueber dem Balken.
 */
export function Standortzeile({ dark, standort }: { dark: boolean; standort: Standort }) {
  const theme = getTheme(dark);

  return (
    // Als EIN Element fuer die Sprachausgabe: "Speed-Run, Hotel und
    // Accommodation" in einem Zug statt zweier Bruchstuecke.
    <View
      style={styles.zeile}
      accessible
      accessibilityLabel={`Du bist hier: ${standort.klein}, ${standort.gross}`}
    >
      <Text style={[styles.klein, { color: theme.sub }]} numberOfLines={1}>
        {standort.klein}
      </Text>
      <Text style={[styles.gross, { color: theme.text }]} numberOfLines={1}>
        {standort.gross}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  zeile: {
    alignItems: 'center',
    paddingHorizontal: SPACING.lg,
  },
  klein: {
    fontSize: FONT_SIZE.caption - 1,
    ...schrift('700'),
    textTransform: 'uppercase',
    letterSpacing: 0.6,
  },
  gross: {
    fontSize: FONT_SIZE.bodyLg,
    lineHeight: LINE_HEIGHT.bodyLg,
    ...schrift('800'),
  },
});
