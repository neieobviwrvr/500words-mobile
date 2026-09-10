import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { router } from 'expo-router';
import { Feather } from '@expo/vector-icons';
import * as Notifications from 'expo-notifications';
import { OnboardingScaffold, PillButton } from '../../src/components/onboarding';
import { useAppState } from '../../src/state/AppState';
import { useOnboardingState } from '../../src/state/OnboardingState';
import { ONBOARDING_TOTAL_STEPS, stepNumber } from '../../src/data/onboardingOptions';
import {
  getTheme,
  ACCENT_ORANGE,
  SPACING,
  FONT_SIZE,
  LINE_HEIGHT,
} from '../../src/theme/tokens';

// O11 - Benachrichtigungen.
//
// Babbels Form, nicht Duolingos: eine ruhige Seite mit Glocke, ehrlicher
// Begruendung und zwei Knoepfen. Duolingo bildet an dieser Stelle den
// iOS-Systemdialog nach und zeigt mit einem Pfeil auf "Erlauben" - das ist
// grenzwertig und passt nicht zum angestrebten Bild.
//
// VERBINDLICH: Der echte Systemdialog wird NUR bei "Ja, gerne" ausgeloest.
// iOS zeigt ihn genau einmal; wer ihn bei "Jetzt nicht" verbraucht, kann
// spaeter nur noch ueber die Systemeinstellungen zurueck.
//
// Steht bewusst nach der Lektion: Jetzt gibt es einen Fortschritt, an den
// erinnert werden kann.

export default function NotificationsScreen() {
  const { darkMode } = useAppState();
  const { goals } = useOnboardingState();
  const theme = getTheme(darkMode);
  const [busy, setBusy] = useState(false);

  const goNext = () => router.push('/onboarding/o12-willkommen');

  const allow = async () => {
    setBusy(true);
    try {
      await Notifications.requestPermissionsAsync();
    } catch {
      // Auch ein Fehler darf die Strecke nicht anhalten.
    } finally {
      setBusy(false);
      goNext();
    }
  };

  return (
    <OnboardingScaffold
      step={stepNumber(10)}
      total={ONBOARDING_TOTAL_STEPS}
      dark={darkMode}
      title="Sollen wir dich erinnern?"
      onBack={() => router.back()}
      footer={
        <>
          <View style={styles.buttonGap}>
            <PillButton label="Ja, gerne" dark={darkMode} busy={busy} onPress={allow} />
          </View>
          <PillButton
            label="Jetzt nicht"
            variant="secondary"
            dark={darkMode}
            disabled={busy}
            onPress={goNext}
          />
        </>
      }
    >
      <View style={[styles.iconCircle, { backgroundColor: theme.subtleFill }]}>
        <Feather name="bell" size={40} color={ACCENT_ORANGE} />
      </View>

      <Text style={[styles.body, { color: theme.sub }]}>
        {goals.length > 0
          ? 'Wir stupsen dich an, wenn du ein paar Tage nichts geübt hast — passend zu dem, was du dir vorgenommen hast.'
          : 'Wir stupsen dich an, wenn du ein paar Tage nichts geübt hast.'}
      </Text>
      <Text style={[styles.body, { color: theme.sub }]}>
        Du kannst das jederzeit in den Einstellungen wieder ausschalten.
      </Text>
    </OnboardingScaffold>
  );
}

const styles = StyleSheet.create({
  iconCircle: {
    width: 96,
    height: 96,
    borderRadius: 48,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: SPACING.xl,
  },
  body: {
    fontSize: FONT_SIZE.body,
    lineHeight: LINE_HEIGHT.body,
    textAlign: 'center',
    marginBottom: SPACING.lg,
  },
  buttonGap: {
    marginBottom: SPACING.sm,
  },
});
