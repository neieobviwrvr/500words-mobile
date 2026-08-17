import { View, StyleSheet } from 'react-native';
import { getTheme, PROGRESS_FILL, RADIUS } from '../theme/tokens';

// Fortschrittsbalken.
//
// Der einzige Baustein, den wir bewusst von Duolingo statt von Babbel
// uebernehmen: Babbel zeigt ihn nur auf manchen Screens, Duolingo
// durchgehend. Bei zwoelf Onboarding-Schritten ist "das hier hat ein Ende"
// die wichtigere Botschaft.
//
// Fuellfarbe war bis 2026-08-18 unser Orange (wie bei Babbel), ist jetzt
// `PROGRESS_FILL` - siehe tokens.ts fuer die Begruendung. Gilt fuer JEDEN
// Balken in der App, also auch fuer die Onboarding-Strecke.
//
// Zwei Verwendungen, ein Balken (2026-08-18): das Onboarding zaehlt Schritte
// (`step`/`total`), S1 zeigt einen Anteil (`ratio`). Beides ist derselbe
// Balken, unterscheidet sich aber in dem, was der Screenreader vorlesen soll -
// "Schritt 3 von 12" gegen "31 Prozent". Deshalb `label` als eigener Wert
// statt einer aus den Zahlen geratenen Formulierung.
//
// Mindestbreite der Fuellung (2026-08-18, Nutzer-Entscheidung): der Balken
// zeigt immer ein Stueck Farbe, auch bei 0%. Ein komplett leerer Balken am
// ersten Tag ist der falsche erste Eindruck - dieselbe Ueberlegung wie beim
// Ueberlebensmodus im SRS ("soll nicht schlecht gelaunt machen").
//
// WICHTIG: das ist reine Optik. Der vorgelesene Wert und die Prozentzahl
// daneben bleiben bei 0 - der Balken schmeichelt, die Zahl luegt nicht.
// Umgesetzt als `minWidth` statt als Aufschlag auf den Anteil, damit es
// keinen Sprung gibt: sobald der echte Fortschritt breiter waere als das
// Minimum, gilt wieder allein der echte Wert.
const MIN_FILL_WIDTH = 24;

type Props = {
  dark: boolean;
  /** Anteil 0-1. Alternativ `step`/`total` benutzen. */
  ratio?: number;
  /** 1-basiert: Schritt 1 von total. */
  step?: number;
  total?: number;
  /** Was der Screenreader vorliest. Ohne Angabe "x Prozent". */
  label?: string;
};

export function ProgressBar({ dark, ratio, step, total, label }: Props) {
  const theme = getTheme(dark);

  const raw =
    ratio !== undefined
      ? ratio
      : total !== undefined && total > 0 && step !== undefined
        ? step / total
        : 0;
  // Clamp, damit ein Rechenfehler beim Aufrufer nie einen Balken ueber die
  // Breite hinaus oder eine negative Breite erzeugt.
  const clamped = Math.max(0, Math.min(1, raw));
  const percent = Math.round(clamped * 100);

  return (
    <View
      style={[styles.track, { backgroundColor: theme.subtleFill }]}
      accessibilityRole="progressbar"
      accessibilityValue={{ min: 0, max: 100, now: percent }}
      accessibilityLabel={label ?? `${percent} Prozent`}
    >
      <View style={[styles.fill, { width: `${clamped * 100}%`, minWidth: MIN_FILL_WIDTH }]} />
    </View>
  );
}

const styles = StyleSheet.create({
  track: {
    height: 10,
    borderRadius: RADIUS.pill,
    overflow: 'hidden',
    flex: 1,
  },
  fill: {
    height: '100%',
    borderRadius: RADIUS.pill,
    backgroundColor: PROGRESS_FILL,
  },
});
