import { Pressable, StyleSheet, View } from 'react-native';
import { router } from 'expo-router';
import { Dropdown, ProgressBar, ProgressProzent } from '../../components';
import type { DropdownOption } from '../../components';
import { LANGUAGES, getLanguage } from '../../data/languages';
import { useAppState } from '../../state/AppState';
import type { LearningMode } from '../../state/AppState';
import { PROGRESS_SEITE, SPACING } from '../../theme/tokens';
import { Standortzeile, type Standort } from './Standort';

// ---------------------------------------------------------------------------
// Der Kopf der Lern-Tabs (2026-09-13)
// ---------------------------------------------------------------------------
//
// Simon: "Koennen wir jetzt auf Start und Lektionen die Top-Bar so machen wie
// bei Freunde?" - Freunde hat seit dem 2026-09-12 keine Kopfleiste mehr,
// oben stehen nur zwei Dinge: WO man steht (Standortzeile) und WIE WEIT
// (Balken, links die Flagge als Sprachauswahl, rechts die Prozentzahl). Das
// ist jetzt der Kopf von Start. (Lektionen trug ihn einen Tag lang und ist
// seit dem 2026-09-14 wieder ohne Kopf; Freunde ist wieder eine
// Freunde-Seite, siehe FreundeScreen.tsx.)
//
// Vorher stand der Aufbau zweimal fast gleich in PathScreen und auf dem
// Freunde-Testscreen, mit eigenem Abstand je Kopie - ein dritter Screen haette
// die dritte Kopie bedeutet. Jetzt EIN Baustein, der Abstand gehoert dazu.
//
// Mit der Kopfleiste ist auf Start auch das Drei-Punkte-Menue weg. Das
// Geschenk sitzt dort inzwischen auf der Sprachkarte.

/** Der Anteil im Balken: im Kurs der Kurs, im Speed-Run das Freigeschaltete. */
export function fortschrittsAnteil(
  learningMode: LearningMode,
  kurs: { fertig: number; gesamt: number },
  speedRunAnteil: number
): number {
  if (learningMode === 'gefuehrt') return kurs.gesamt > 0 ? kurs.fertig / kurs.gesamt : 0;
  return speedRunAnteil;
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
  const oeffneStatistik = () =>
    router.push({ pathname: '/statistik', params: { weg: learningMode, von: 'start' } });

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
        {/* Balken und Zahl oeffnen die Statistik (2026-09-14) - der Balken ist
            die Kurzfassung, die Seite die Langfassung, und zwar fuer den
            Lernweg, der gerade vorne liegt. EIN Knopf fuer den Screenreader:
            die Zahl daneben ist ausgeblendet, sonst kaeme dasselbe Ziel
            zweimal hintereinander. */}
        <Pressable
          style={({ pressed }) => [styles.balkenPlatz, pressed && styles.gedrueckt]}
          onPress={oeffneStatistik}
          hitSlop={{ top: SPACING.md, bottom: SPACING.md }}
          accessibilityRole="button"
          accessibilityLabel={`Statistik, ${Math.round(anteil * 100)} Prozent ${
            learningMode === 'gefuehrt' ? 'des Kurses geschafft' : 'deiner freigeschalteten Inhalte geübt'
          }`}
          accessibilityHint="Zeigt, was schon sitzt und wie viel du gelernt hast"
        >
          <ProgressBar
            dark={dark}
            ratio={anteil}
            label={`${Math.round(anteil * 100)} Prozent ${
              learningMode === 'gefuehrt' ? 'des Kurses geschafft' : 'deiner freigeschalteten Inhalte geübt'
            }`}
          />
        </Pressable>
        <Pressable
          style={({ pressed }) => [styles.progressSeite, pressed && styles.gedrueckt]}
          onPress={oeffneStatistik}
          hitSlop={SPACING.md}
          accessibilityElementsHidden
          importantForAccessibility="no-hide-descendants"
        >
          <ProgressProzent dark={dark} ratio={anteil} />
        </Pressable>
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
  gedrueckt: {
    opacity: 0.7,
  },
});
