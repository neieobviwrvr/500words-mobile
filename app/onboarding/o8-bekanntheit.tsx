import { router } from 'expo-router';
import { OnboardingScaffold, OptionRow, PillButton } from '../../src/components/onboarding';
import { useAppState } from '../../src/state/AppState';
import { useOnboardingState } from '../../src/state/OnboardingState';
import { REFERRAL_SOURCES, ONBOARDING_TOTAL_STEPS, stepNumber } from '../../src/data/onboardingOptions';

// O8 - Wie bist du auf uns gekommen?
//
// Die einzige Frage der Strecke, die ausschliesslich uns nutzt und dem
// Nutzer nichts gibt. Deshalb bewusst ueberspringbar - und als Hinweis fuer
// spaeter: App Store Connect und die Play Console liefern die Herkunftsquelle
// ohnehin als Statistik. Was dieser Screen zusaetzlich bringt, ist die
// Zuordnung auf einzelne Nutzer.

export default function ReferralScreen() {
  const { darkMode } = useAppState();
  const { referralSource, setReferralSource } = useOnboardingState();

  const goNext = () => router.push('/onboarding/o9-lektion');

  return (
    <OnboardingScaffold
      step={stepNumber(6)}
      total={ONBOARDING_TOTAL_STEPS}
      dark={darkMode}
      title="Wie hast du von uns erfahren?"
      subtitle="Hilft uns, die Richtigen zu erreichen."
      onBack={() => router.back()}
      footer={
        <>
          <PillButton
            label="Weiter"
            dark={darkMode}
            disabled={!referralSource}
            onPress={goNext}
          />
          <PillButton label="Überspringen" variant="ghost" dark={darkMode} onPress={goNext} />
        </>
      }
    >
      {REFERRAL_SOURCES.map((s) => (
        <OptionRow
          key={s.id}
          label={s.label}
          icon={s.icon}
          dark={darkMode}
          selected={referralSource === s.id}
          onPress={() => setReferralSource(s.id)}
        />
      ))}
    </OnboardingScaffold>
  );
}
