import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { router } from 'expo-router';
import { Feather } from '@expo/vector-icons';
import { OnboardingScaffold, PillButton } from '../../src/components/onboarding';
import { useAppState } from '../../src/state/AppState';
import { useAuthState } from '../../src/state/AuthState';
import { useOnboardingState } from '../../src/state/OnboardingState';
import { ONBOARDING_TOTAL_STEPS, stepNumber } from '../../src/data/onboardingOptions';
import {
  getTheme,
  ACCENT_ERROR,
  SPACING,
  FONT_SIZE,
  LINE_HEIGHT,
} from '../../src/theme/tokens';

// O10 - Konto sichern.
//
// Steht bewusst NACH der Beispiellektion: Jetzt gibt es Fortschritt, den man
// verlieren kann. Genau das Argument nutzt auch Duolingo ("Verlier deine
// Fortschritte nicht!").
//
// Reihenfolge der Wege von Simon festgelegt: Apple, Google, E-Mail,
// Ueberspringen. Apple steht oben und ist absichtlich schon gestaltet,
// obwohl es noch nicht funktioniert - Apple verlangt "Mit Apple anmelden",
// sobald andere Fremdanbieter-Logins angeboten werden. Ohne den Knopf
// riskiert ein iOS-Release eine Ablehnung im Review, der Platz muss also
// von Anfang an stimmen.
//
// "Ueberspringen" ist kein Sonderweg, sondern der schon vorhandene
// Gastmodus - die Lektion in O9 lief ohnehin ohne Konto.

export default function AccountScreen() {
  const { darkMode } = useAppState();
  const { signInWithGoogle, continueAsGuest } = useAuthState();
  // completeOnboarding() steht bewusst erst auf O12: Wer hier abbricht,
  // soll die Strecke beim naechsten Start fortsetzen koennen.
  const { name } = useOnboardingState();
  const theme = getTheme(darkMode);

  const [busy, setBusy] = useState<'google' | 'skip' | null>(null);
  const [error, setError] = useState<string | null>(null);

  const goNext = () => router.push('/onboarding/o11-benachrichtigungen');

  const withGoogle = async () => {
    setBusy('google');
    setError(null);
    try {
      await signInWithGoogle();
      goNext();
    } catch (e) {
      setError(e instanceof Error ? e.message : String(e));
    } finally {
      setBusy(null);
    }
  };

  const skip = async () => {
    setBusy('skip');
    setError(null);
    try {
      await continueAsGuest();
      goNext();
    } catch (e) {
      setError(e instanceof Error ? e.message : String(e));
    } finally {
      setBusy(null);
    }
  };

  return (
    <OnboardingScaffold
      step={stepNumber(11)}
      total={ONBOARDING_TOTAL_STEPS}
      dark={darkMode}
      title={name ? `Fast geschafft, ${name}` : 'Fast geschafft'}
      subtitle="Sichere deinen Fortschritt, damit er nicht verloren geht."
      onBack={() => router.back()}
      footer={
        <>
          <View style={styles.buttonGap}>
            <PillButton
              label="Mit Apple anmelden"
              variant="secondary"
              dark={darkMode}
              disabled
              onPress={() => {}}
            />
          </View>
          <View style={styles.buttonGap}>
            <PillButton
              label="Mit Google anmelden"
              dark={darkMode}
              busy={busy === 'google'}
              disabled={busy !== null}
              onPress={withGoogle}
            />
          </View>
          <View style={styles.buttonGap}>
            <PillButton
              label="Mit E-Mail anmelden"
              variant="secondary"
              dark={darkMode}
              disabled
              onPress={() => {}}
            />
          </View>
          <PillButton
            label="Überspringen"
            variant="ghost"
            dark={darkMode}
            busy={busy === 'skip'}
            disabled={busy !== null}
            onPress={skip}
            hint="Weiter ohne Konto, dein Fortschritt bleibt nur auf diesem Gerät"
          />
          {error && <Text style={[styles.error, { color: ACCENT_ERROR }]}>{error}</Text>}
        </>
      }
    >
      <Text style={[styles.body, { color: theme.sub }]}>
        Ohne Konto bleibt alles nur auf diesem Gerät. Geht das Handy verloren
        oder wechselst du es, fängst du von vorn an.
      </Text>
      <Text style={[styles.smallNote, { color: theme.sub }]}>
        Apple und E-Mail sind noch nicht freigeschaltet — bis dahin geht es über
        Google oder ohne Konto weiter.
      </Text>
    </OnboardingScaffold>
  );
}

const styles = StyleSheet.create({
  body: {
    fontSize: FONT_SIZE.body,
    lineHeight: LINE_HEIGHT.body,
    textAlign: 'center',
  },
  smallNote: {
    fontSize: FONT_SIZE.caption,
    lineHeight: LINE_HEIGHT.caption,
    textAlign: 'center',
    marginTop: SPACING.lg,
  },
  buttonGap: {
    marginBottom: SPACING.sm,
  },
  error: {
    fontSize: FONT_SIZE.small,
    textAlign: 'center',
    marginTop: SPACING.sm,
  },
});
