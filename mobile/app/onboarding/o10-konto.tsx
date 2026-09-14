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
//
// E-Mail funktioniert seit dem 2026-09-14 auch HIER (vorher nur ueber
// Profil > Konto, hier stand es als "noch nicht freigeschaltet"). Google ist
// dagegen weiterhin nicht eingerichtet (OAuth-Client fehlt) und deshalb wie
// Apple gesperrt - vorher schickte der Knopf jeden in eine Fehlermeldung.
// Die Reihenfolge bleibt Simons.

export default function AccountScreen() {
  const { darkMode } = useAppState();
  const { continueAsGuest, hatKonto } = useAuthState();
  // completeOnboarding() steht bewusst erst auf O12: Wer hier abbricht,
  // soll die Strecke beim naechsten Start fortsetzen koennen.
  const { name } = useOnboardingState();
  const theme = getTheme(darkMode);

  const [busy, setBusy] = useState<'skip' | null>(null);
  const [error, setError] = useState<string | null>(null);

  const goNext = () => router.push('/onboarding/o11-benachrichtigungen');

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

  // Schon angemeldet (etwa ueber "Ich habe schon ein Konto" auf der ersten
  // Seite, mit einem Konto ohne fertiges Onboarding): nichts mehr zu sichern.
  if (hatKonto) {
    return (
      <OnboardingScaffold
        step={stepNumber(9)}
        total={ONBOARDING_TOTAL_STEPS}
        dark={darkMode}
        title="Dein Konto ist verbunden"
        subtitle="Dein Fortschritt wird in deinem Konto gesichert."
        onBack={() => router.back()}
        footer={<PillButton label="Weiter" dark={darkMode} onPress={goNext} />}
      >
        <Text style={[styles.body, { color: theme.sub }]}>
          Meldest du dich auf einem anderen Gerät mit derselben E-Mail an, geht es dort weiter.
        </Text>
      </OnboardingScaffold>
    );
  }

  return (
    <OnboardingScaffold
      step={stepNumber(9)}
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
              variant="secondary"
              dark={darkMode}
              disabled
              onPress={() => {}}
            />
          </View>
          <View style={styles.buttonGap}>
            <PillButton
              label="Mit E-Mail anmelden"
              dark={darkMode}
              disabled={busy !== null}
              onPress={() => router.push('/onboarding/konto')}
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
        Apple und Google sind noch nicht freigeschaltet — bis dahin geht es über
        E-Mail oder ohne Konto weiter.
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
