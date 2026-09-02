import { Pressable, StyleSheet, Text, View } from 'react-native';
import { router } from 'expo-router';
import { OnboardingScaffold, PillButton } from '../../src/components/onboarding';
import { Mascot, ONBOARDING_TOTAL_STEPS, MASCOT_STEP } from '../../src/features/mascot';
import { useAppState } from '../../src/state/AppState';
import { useOnboardingState } from '../../src/state/OnboardingState';
import { MASCOTS } from '../../src/data/mascots';
import {
  getTheme,
  RADIUS,
  SPACING,
  FONT_SIZE,
  LINE_HEIGHT, schrift,
  kachel,
} from '../../src/theme/tokens';

// Auswahl der Begleitfigur.
//
// Sitzt bewusst VOR der Namensfrage: Ab dort spricht die App in der
// Ich-Form ("wie darf ich dich nennen?"), und dieses Ich soll ein Gesicht
// haben, bevor es zu reden anfaengt.
//
// Antippen waehlt nur aus, weitergehen muss man selbst - anders als bei der
// Sprachauswahl. Hier lohnt der Moment: Wer alle drei Beschreibungen liest,
// entscheidet sich bewusster, und eine bewusste Wahl traegt spaeter den
// Lager-Gedanken (siehe Plan).

export default function CompanionScreen() {
  const { darkMode } = useAppState();
  const { mascotId, setMascotId } = useOnboardingState();
  const theme = getTheme(darkMode);

  return (
    <OnboardingScaffold
      step={MASCOT_STEP}
      total={ONBOARDING_TOTAL_STEPS}
      dark={darkMode}
      title="Wer soll dich begleiten?"
      subtitle="Deine Begleitung bleibt bei dir — beim Üben, beim Feiern und wenn du mal länger weg warst."
      onBack={() => router.back()}
      footer={
        <PillButton
          label="Weiter"
          dark={darkMode}
          disabled={!mascotId}
          onPress={() => router.push('/onboarding/o4-name')}
        />
      }
    >
      {MASCOTS.map((m) => {
        const selected = mascotId === m.id;
        return (
          <Pressable
            key={m.id}
            onPress={() => setMascotId(m.id)}
            accessibilityRole="radio"
            accessibilityState={{ checked: selected }}
            accessibilityLabel={`${m.name}. ${m.blurb}`}
            style={({ pressed }) => [
              styles.card,
              kachel(darkMode),
              {
                backgroundColor: theme.cardBg,
                // Die gewaehlte Karte traegt die Tiefe in IHRER Farbe -
                // ein oranger Rahmen mit grauem Fuss saehe aus wie ein
                // Fehler (gleiche Regel wie bei den Sprachkarten auf O1).
                ...(selected ? { borderColor: m.accentColor } : null),
                padding: SPACING.lg,
                opacity: pressed ? 0.7 : 1,
              },
            ]}
          >
            <Mascot mascot={m} state={selected ? 'freut_sich' : 'neutral'} size="mittel" />

            <View style={styles.textBlock}>
              <Text style={[styles.name, { color: theme.text }]}>{m.name}</Text>
              <Text style={[styles.blurb, { color: theme.sub }]}>{m.blurb}</Text>
            </View>
          </Pressable>
        );
      })}
    </OnboardingScaffold>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: SPACING.lg,
    borderRadius: RADIUS.md,
    marginBottom: SPACING.md,
  },
  textBlock: {
    flex: 1,
  },
  name: {
    fontSize: FONT_SIZE.bodyLg,
    lineHeight: LINE_HEIGHT.bodyLg,
    ...schrift('800'),
  },
  blurb: {
    fontSize: FONT_SIZE.small,
    lineHeight: LINE_HEIGHT.small,
    marginTop: 2,
  },
});
