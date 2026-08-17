import { StyleSheet, Text, View } from 'react-native';
import { router } from 'expo-router';
import { OnboardingScaffold, PillButton } from '../../src/components/onboarding';
import { useAppState } from '../../src/state/AppState';
import { useOnboardingState } from '../../src/state/OnboardingState';
import { getLanguage } from '../../src/data/languages';
import { ONBOARDING_TOTAL_STEPS, stepNumber } from '../../src/data/onboardingOptions';
import { Mascot } from '../../src/features/mascot';
import {
  getTheme,
  RADIUS,
  SPACING,
  FONT_SIZE,
  FONT_FAMILY,
  LINE_HEIGHT,
} from '../../src/theme/tokens';

// O12 - Begruessung der Gruender.
//
// Letzter Screen der Strecke. Hier wird das Onboarding als erledigt
// markiert - erst ab jetzt laesst das Auth-Gate in app/index.tsx direkt
// durch.
//
// Bewusst in Wir-Form und von BEIDEN gezeichnet: Das Projekt hat zwei
// Gruender, und die etablierte Stimme nach aussen ist "wir", nicht ein
// CEO im Singular.

export default function WelcomeScreen() {
  const { darkMode, targetLanguageId } = useAppState();
  const { name, completeOnboarding } = useOnboardingState();
  const theme = getTheme(darkMode);
  const language = getLanguage(targetLanguageId);

  const finish = () => {
    completeOnboarding();
    // replace statt push: Die Strecke ist zu Ende, ein Zurueck-Wisch soll
    // nicht wieder in die Fragen hineinfuehren.
    router.replace('/');
  };

  return (
    <OnboardingScaffold
      step={stepNumber(13)}
      total={ONBOARDING_TOTAL_STEPS}
      dark={darkMode}
      title={name ? `Willkommen, ${name}` : 'Willkommen'}
      footer={<PillButton label="Los geht's" dark={darkMode} onPress={finish} />}
    >
      <View style={styles.mascotRow}>
        <Mascot state="feiert" size="gross" />
      </View>

      <View style={[styles.card, { backgroundColor: theme.cardBg, borderColor: theme.border }]}>
        <Text style={[styles.letter, { color: theme.text }]}>
          Wir haben diese App gebaut, weil uns im Ausland immer dasselbe gefehlt
          hat: nicht perfekte Grammatik, sondern die Sätze, die man abends um elf
          wirklich braucht.
        </Text>
        <Text style={[styles.letter, { color: theme.text }]}>
          Deshalb sprichst du hier von Anfang an, statt Vokabeln abzuhaken. Gib
          uns ein paar Wochen — dann führst du dein erstes echtes Gespräch auf
          {` ${language.label}`}.
        </Text>
        <Text style={[styles.signature, { color: theme.sub }]}>~ Simon &amp; Nils</Text>
      </View>
    </OnboardingScaffold>
  );
}

const styles = StyleSheet.create({
  mascotRow: {
    alignItems: 'center',
    marginBottom: SPACING.xl,
  },
  card: {
    borderWidth: 1,
    borderRadius: RADIUS.lg,
    padding: SPACING.xl,
  },
  letter: {
    fontFamily: FONT_FAMILY.serif,
    fontSize: FONT_SIZE.bodyLg,
    lineHeight: 26,
    marginBottom: SPACING.lg,
  },
  signature: {
    fontFamily: FONT_FAMILY.serif,
    fontSize: FONT_SIZE.body,
    lineHeight: LINE_HEIGHT.body,
    fontStyle: 'italic',
    textAlign: 'right',
  },
});
