import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { router } from 'expo-router';
import { Feather } from '@expo/vector-icons';
import { requestRecordingPermissionsAsync } from 'expo-audio';
import { OnboardingScaffold, PillButton } from '../../src/components/onboarding';
import { useAppState } from '../../src/state/AppState';
import { ONBOARDING_TOTAL_STEPS, stepNumber } from '../../src/data/onboardingOptions';
import { MASCOT_ENABLED } from '../../src/features/mascot';
import {
  getTheme,
  ACCENT_ORANGE,
  SPACING,
  FONT_SIZE,
  LINE_HEIGHT,
} from '../../src/theme/tokens';

// O3 - Mikrofonfreigabe.
//
// Vorschalt-Screen vor dem System-Dialog, und zwar aus einem sehr konkreten
// Grund: iOS zeigt die Mikrofon-Abfrage genau EINMAL. Ein Nein ist dauerhaft
// und nur ueber die Systemeinstellungen umkehrbar - und ohne Mikrofon ist die
// Kernfunktion dieser App tot, nicht bloss unbequem. Deshalb erst erklaeren,
// warum wir fragen, dann fragen.
//
// Wer ablehnt, kommt trotzdem weiter: Tippen bleibt als Rueckfallweg, so wie
// in CLAUDE.md als Uebergangsloesung vorgesehen. Keine Sackgasse.

export default function MicrophoneScreen() {
  const { darkMode } = useAppState();
  const theme = getTheme(darkMode);
  const [busy, setBusy] = useState(false);

  // Ist das Maskottchen abgeschaltet, entfaellt der Auswahl-Screen und es
  // geht direkt zur Namensfrage - die Strecke bleibt lueckenlos.
  const goNext = () =>
    router.push(MASCOT_ENABLED ? '/onboarding/begleiter' : '/onboarding/o4-name');

  const askForMicrophone = async () => {
    setBusy(true);
    try {
      await requestRecordingPermissionsAsync();
    } catch {
      // Auch ein Fehler beim Anfragen darf nicht blockieren - die App
      // funktioniert mit Tippen weiter.
    } finally {
      setBusy(false);
      goNext();
    }
  };

  return (
    <OnboardingScaffold
      step={stepNumber(3)}
      total={ONBOARDING_TOTAL_STEPS}
      dark={darkMode}
      title="Wir lernen mit dir per Sprache"
      subtitle="Dafür brauchen wir dein Mikrofon."
      onBack={() => router.back()}
      footer={
        <>
          <PillButton
            label="Mikrofon erlauben"
            dark={darkMode}
            busy={busy}
            onPress={askForMicrophone}
            hint="Öffnet die Abfrage deines Geräts"
          />
          <View style={styles.skipWrap}>
            <PillButton
              label="Später entscheiden"
              variant="ghost"
              dark={darkMode}
              onPress={goNext}
            />
          </View>
        </>
      }
    >
      <View style={[styles.iconCircle, { backgroundColor: theme.subtleFill }]}>
        <Feather name="mic" size={40} color={ACCENT_ORANGE} />
      </View>

      <Text style={[styles.body, { color: theme.sub }]}>
        In dieser App sprichst du — du tippst nicht. Wir lesen dir Sätze vor und
        hören zu, wenn du antwortest.
      </Text>
      <Text style={[styles.body, { color: theme.sub }]}>
        Ohne Mikrofon kannst du weitermachen und deine Antworten tippen. Du kannst
        die Freigabe jederzeit in den Einstellungen deines Geräts ändern.
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
  skipWrap: {
    marginTop: SPACING.sm,
  },
});
