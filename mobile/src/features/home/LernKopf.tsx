import { useMemo } from 'react';
import { StyleSheet, View } from 'react-native';
import { Dropdown, ProgressBar, ProgressProzent } from '../../components';
import type { DropdownOption } from '../../components';
import { CATEGORIES, GRUNDWORTSCHATZ_ID } from '../../data/categories';
import { LANGUAGES, getLanguage } from '../../data/languages';
import { useAppState } from '../../state/AppState';
import type { LearningMode } from '../../state/AppState';
import { PROGRESS_SEITE, SPACING } from '../../theme/tokens';
import type { CategorySituations } from '../lessons/useCategorySituations';
import { standortAus, Standortzeile, type Standort } from './Standort';
import { useGuidedCourse } from './useGuidedCourse';
import { useGuidedProgress } from './useGuidedProgress';
import { useUnlockedProgress } from './useUnlockedProgress';

// ---------------------------------------------------------------------------
// Der Kopf der Lern-Tabs (2026-09-13)
// ---------------------------------------------------------------------------
//
// Simon: "Koennen wir jetzt auf Start und Lektionen die Top-Bar so machen wie
// bei Freunde?" - Freunde hat seit dem 2026-09-12 keine Kopfleiste mehr,
// oben stehen nur zwei Dinge: WO man steht (Standortzeile) und WIE WEIT
// (Balken, links die Flagge als Sprachauswahl, rechts die Prozentzahl). Das
// ist jetzt der Kopf von Start und Lektionen. (Freunde selbst ist seit dem
// 2026-09-14 wieder eine Freunde-Seite, siehe FreundeScreen.tsx.)
//
// Vorher stand der Aufbau zweimal fast gleich in PathScreen und auf dem
// Freunde-Testscreen, mit eigenem Abstand je Kopie - ein dritter Screen haette
// die dritte Kopie bedeutet. Jetzt EIN Baustein, der Abstand gehoert dazu.
//
// Mit der Kopfleiste ist auf Start und Lektionen auch das Drei-Punkte-Menue
// bzw. die Coins-Pille weg - dasselbe wie auf Freunde. Das Geschenk sitzt auf
// S1 inzwischen auf der Sprachkarte.

/** Der Anteil im Balken: im Kurs der Kurs, im Speed-Run das Freigeschaltete. */
export function fortschrittsAnteil(
  learningMode: LearningMode,
  kurs: { fertig: number; gesamt: number },
  speedRunAnteil: number
): number {
  if (learningMode === 'gefuehrt') return kurs.gesamt > 0 ? kurs.fertig / kurs.gesamt : 0;
  return speedRunAnteil;
}

/**
 * Standort und Anteil fuer Screens, die NICHT den ganzen Lernpfad laden
 * (Lektionen). S1 bekommt beides aus `useLernpfad`.
 *
 * `situationen` kommt vom Aufrufer: Lektionen laedt sie ohnehin, und ein
 * zweiter `useCategorySituations` hier liese saemtliche Saetze und
 * Lernkarten doppelt laden - fuer zwei Zeilen Text.
 */
export function useLernKopf(situationen: CategorySituations): { standort: Standort; anteil: number } {
  const { purchased, targetLanguageId, learningMode } = useAppState();
  const kurs = useGuidedCourse(targetLanguageId);
  const kursFortschritt = useGuidedProgress(targetLanguageId);
  const freigeschaltet = useMemo(
    () => [GRUNDWORTSCHATZ_ID, ...CATEGORIES.filter((c) => purchased[c.id]).map((c) => c.id)],
    [purchased]
  );
  const speedRun = useUnlockedProgress(targetLanguageId, freigeschaltet);

  const standort = useMemo(
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

  return { standort, anteil: fortschrittsAnteil(learningMode, kursFortschritt, speedRun.ratio) };
}

export function LernKopf({
  dark,
  standort,
  anteil,
}: {
  dark: boolean;
  standort: Standort;
  anteil: number;
}) {
  const { targetLanguageId, setTargetLanguageId, learningMode } = useAppState();

  const sprachen: DropdownOption[] = LANGUAGES.map((l) => ({
    id: l.id,
    label: l.label,
    disabled: !l.hasContent,
    note: l.hasContent ? undefined : 'bald',
  }));

  return (
    <>
      <View style={styles.standortReihe}>
        <Standortzeile dark={dark} standort={standort} />
      </View>

      <View style={styles.progressRow}>
        {/* Links die Flagge der Lernsprache - sie IST die Sprachauswahl, seit
            die Kopfleiste mit dem Sprach-Dropdown weg ist. Zugleich das
            Gegengewicht zur Prozentzahl rechts: der Balken bleibt mittig. */}
        <View style={styles.progressSeite}>
          <Dropdown
            compact
            symbol={getLanguage(targetLanguageId).flagge}
            options={sprachen}
            selectedId={targetLanguageId}
            onSelect={setTargetLanguageId}
            dark={dark}
            title="Welche Sprache lernst du?"
            accessibilityLabel="Sprache"
            rahmen="ohne"
          />
        </View>
        {/* Der Balken in einer eigenen Huelle, damit er MITTIG in der Zeile
            sitzt (2026-09-13): die Spur traegt `alignSelf: 'stretch'`, was
            sie in einer Zeile nach oben setzt. Die Huelle wird mittig gesetzt
            und laesst die Spur darin ihre Breite fuellen. */}
        <View style={styles.balkenPlatz}>
          <ProgressBar
            dark={dark}
            ratio={anteil}
            label={`${Math.round(anteil * 100)} Prozent ${
              learningMode === 'gefuehrt' ? 'des Kurses geschafft' : 'deiner freigeschalteten Inhalte geübt'
            }`}
          />
        </View>
        <View style={styles.progressSeite}>
          <ProgressProzent dark={dark} ratio={anteil} />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  standortReihe: {
    // Direkt unter der Statusleiste: die -8 nehmen die Polsterung zurueck,
    // die `Screen` oben gibt (auf Freunde am 2026-09-12/13 in zwei Schritten
    // so eingestellt, Simon: "immer noch zu viel weisse Flaeche gaanz oben").
    // Weiter geht es nicht, ohne unter Uhrzeit und Notch zu rutschen.
    marginTop: -SPACING.sm,
  },
  progressRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: SPACING.md,
    marginTop: SPACING.lg,
  },
  balkenPlatz: {
    flex: 1,
  },
  progressSeite: {
    width: PROGRESS_SEITE,
    // Rechtsbuendig, damit die Zahl am Balken klebt statt am Rand.
    alignItems: 'flex-end',
  },
});
