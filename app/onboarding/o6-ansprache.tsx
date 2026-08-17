import { StyleSheet, Text } from 'react-native';
import { router } from 'expo-router';
import { OnboardingScaffold, OptionRow, PillButton } from '../../src/components/onboarding';
import { useAppState } from '../../src/state/AppState';
import { useOnboardingState, type Addressing } from '../../src/state/OnboardingState';
import { ADDRESSING_OPTIONS, ONBOARDING_TOTAL_STEPS, stepNumber } from '../../src/data/onboardingOptions';
import { getTheme, SPACING, FONT_SIZE, LINE_HEIGHT } from '../../src/theme/tokens';

// O6 - Ansprache.
//
// Ergaenzt O5 statt es zu ersetzen (Nutzer-Entscheidung: beides fragen).
// Waehrend das Geschlecht sagt, wer der Nutzer ist, sagt diese Frage, WEN er
// ansprechen will - und genau daran haengen die Anmach-/Komplimentvarianten
// in Club, Dating, Smalltalk und Finding Friends. Ein Mann, der Maenner
// anspricht, bekommt mit dieser Frage die passenden Saetze; mit der
// Geschlechtsfrage allein bekaeme er die falschen.
//
// "Sag ich später" ist ein vollwertiger Ausgang: Wer hier nichts angibt,
// wird spaeter beim ersten Oeffnen einer Dating- oder Club-Kategorie
// gefragt, wo der Nutzen unmittelbar sichtbar ist.

export default function AddressingScreen() {
  const { darkMode } = useAppState();
  const { addressing, setAddressing } = useOnboardingState();
  const theme = getTheme(darkMode);

  return (
    <OnboardingScaffold
      step={stepNumber(6)}
      total={ONBOARDING_TOTAL_STEPS}
      dark={darkMode}
      title="Wen willst du ansprechen können?"
      subtitle="Danach richten sich deine Sätze fürs Flirten und Kennenlernen."
      onBack={() => router.back()}
      footer={
        <PillButton
          label="Weiter"
          dark={darkMode}
          disabled={!addressing}
          onPress={() => router.push('/onboarding/o7-alter')}
        />
      }
    >
      {ADDRESSING_OPTIONS.map((a) => (
        <OptionRow
          key={a.id}
          label={a.label}
          icon={a.icon}
          dark={darkMode}
          selected={addressing === a.id}
          onPress={() => setAddressing(a.id as Addressing)}
        />
      ))}

      <Text style={[styles.note, { color: theme.sub }]}>
        Du kannst das jederzeit ändern.
      </Text>
    </OnboardingScaffold>
  );
}

const styles = StyleSheet.create({
  note: {
    fontSize: FONT_SIZE.small,
    lineHeight: LINE_HEIGHT.small,
    textAlign: 'center',
    marginTop: SPACING.lg,
  },
});
