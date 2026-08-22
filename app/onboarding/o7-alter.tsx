import { StyleSheet, Text } from 'react-native';
import { router } from 'expo-router';
import { OnboardingScaffold, OptionRow, PillButton } from '../../src/components/onboarding';
import { useAppState } from '../../src/state/AppState';
import { useOnboardingState, type AgeBracket } from '../../src/state/OnboardingState';
import { AGE_BRACKETS, ONBOARDING_TOTAL_STEPS, stepNumber } from '../../src/data/onboardingOptions';
import { getTheme, SPACING, FONT_SIZE, LINE_HEIGHT } from '../../src/theme/tokens';

// O7 - Alter, gekoppelt mit der Zustimmung zu AGB und Datenschutzerklaerung.
//
// Duolingo macht das genauso - dort ist die Altersfrage der rechtliche
// Einwilligungsmoment, nicht bloss Statistik. Ein Unterschied zu deren
// Umsetzung: Wir nehmen Altersgruppen zum Antippen statt einer
// Zifferneingabe. Im Referenzbild verdeckt der Ziffernblock genau den
// Rechtstext, den der Nutzer bestaetigen soll. Ohne Tastatur bleibt er
// sichtbar.
//
// Offen und vor dem Launch zu klaeren (kein Rechtsrat): Wer "Unter 18"
// waehlt, faellt unter strengere Datenschutzanforderungen. Und alles, was
// nach DSGVO eine AKTIVE Einwilligung braucht (Tracking, Analyse), ist mit
// einer Zustimmung per Weiter-Klick nicht abgedeckt.

export default function AgeScreen() {
  const { darkMode } = useAppState();
  const { ageBracket, setAgeBracket } = useOnboardingState();
  const theme = getTheme(darkMode);

  return (
    <OnboardingScaffold
      step={stepNumber(5)}
      total={ONBOARDING_TOTAL_STEPS}
      dark={darkMode}
      title="Wie alt bist du?"
      subtitle="Grobe Angabe reicht."
      onBack={() => router.back()}
      footer={
        <>
          <PillButton
            label="Weiter"
            dark={darkMode}
            disabled={!ageBracket}
            onPress={() => router.push('/onboarding/o8-bekanntheit')}
          />
          <Text style={[styles.legal, { color: theme.sub }]}>
            Mit „Weiter" bestätigst du unsere AGB und die Datenschutzerklärung.
          </Text>
        </>
      }
    >
      {AGE_BRACKETS.map((a) => (
        <OptionRow
          key={a.id}
          label={a.label}
          dark={darkMode}
          selected={ageBracket === a.id}
          onPress={() => setAgeBracket(a.id as AgeBracket)}
        />
      ))}
    </OnboardingScaffold>
  );
}

const styles = StyleSheet.create({
  legal: {
    fontSize: FONT_SIZE.caption,
    lineHeight: LINE_HEIGHT.caption,
    textAlign: 'center',
    marginTop: SPACING.md,
  },
});
