import { useEffect, useState } from 'react';
import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native';
import { router } from 'expo-router';
import { Feather } from '@expo/vector-icons';
import { OnboardingScaffold, PillButton } from '../../src/components/onboarding';
import { useAppState } from '../../src/state/AppState';
import { useOnboardingState } from '../../src/state/OnboardingState';
import { useSttRecorder } from '../../src/features/stt/useSttRecorder';
import { useSpeechmatics } from '../../src/features/stt/useSpeechmatics';
import { speakText, stopSpeaking } from '../../src/features/tts/speak';
import { ONBOARDING_TOTAL_STEPS, stepNumber } from '../../src/data/onboardingOptions';
import { Mascot } from '../../src/features/mascot';
import {
  getTheme,
  ACCENT_ORANGE,
  ACCENT_ERROR,
  RADIUS,
  SPACING,
  FONT_SIZE,
  LINE_HEIGHT,
} from '../../src/theme/tokens';

// O4 - Name.
//
// Der erste Screen, auf dem die App wirklich spricht und zuhoert. Das ist
// Absicht: Duolingo und Babbel fragen den Namen per Tastatur ab, hier ist es
// der Moment, in dem klar wird, dass diese App ueber Sprache laeuft.
//
// Der Text wird IMMER auch in ein Feld geschrieben, das der Nutzer aendern
// kann. Namen sind der schlechteste Fall fuer Spracherkennung ("Nils" wird
// schnell zu "Niels"), und ein falsch verstandener Name begleitet den Nutzer
// danach durch die ganze App. Die Sprache ist die Abkuerzung, das Feld die
// Absicherung.
//
// Die Frage wird auf Deutsch gestellt und auch auf Deutsch transkribiert -
// hier geht es um die Ausgangssprache des Nutzers, nicht um die Zielsprache.

const QUESTION = 'Hey, wie darf ich dich denn nennen?';

export default function NameScreen() {
  const { darkMode } = useAppState();
  const { name, setName } = useOnboardingState();
  const theme = getTheme(darkMode);

  const recorder = useSttRecorder();
  const stt = useSpeechmatics();

  const [recording, setRecording] = useState(false);
  const [working, setWorking] = useState(false);
  const [hint, setHint] = useState<string | null>(null);

  // Frage einmal beim Betreten vorlesen. Beim Verlassen abbrechen, damit
  // nicht weitergesprochen wird, waehrend schon der naechste Screen sichtbar
  // ist.
  useEffect(() => {
    speakText(QUESTION, { languageId: 'de' });
    return () => stopSpeaking();
  }, []);

  const startRecording = async () => {
    setHint(null);
    stopSpeaking();
    try {
      await recorder.start();
      setRecording(true);
    } catch {
      setRecording(false);
      setHint('Ohne Mikrofon geht es auch — tipp deinen Namen einfach ein.');
    }
  };

  const stopRecording = async () => {
    setRecording(false);
    setWorking(true);
    try {
      const uri = await recorder.stop();
      if (!uri) throw new Error('Keine Aufnahme');
      const { text } = await stt.transcribe(uri, 'de');
      const cleaned = cleanName(text);
      if (cleaned) setName(cleaned);
      else setHint('Das habe ich nicht verstanden — tipp deinen Namen bitte ein.');
    } catch {
      setHint('Das hat nicht geklappt — tipp deinen Namen bitte ein.');
    } finally {
      setWorking(false);
    }
  };

  const trimmed = name.trim();

  return (
    <OnboardingScaffold
      step={stepNumber(4)}
      total={ONBOARDING_TOTAL_STEPS}
      dark={darkMode}
      title={QUESTION}
      subtitle="Sag es einfach — oder tipp es ein."
      onBack={() => router.back()}
      footer={
        <PillButton
          label="Weiter"
          dark={darkMode}
          disabled={trimmed.length === 0}
          onPress={() => router.push('/onboarding/o7-alter')}
        />
      }
    >
      {/* Die Figur steht ueber der Frage: Ab hier spricht die App in der
          Ich-Form, und dieses Ich soll sichtbar sein. Ist das Maskottchen
          abgeschaltet, rendert die Komponente nichts - der Screen sieht
          dann aus wie zuvor. */}
      <View style={styles.mascotRow}>
        <Mascot state="neutral" size="gross" />
      </View>

      <Pressable
        onPress={recording ? stopRecording : startRecording}
        disabled={working}
        accessibilityRole="button"
        accessibilityLabel={recording ? 'Aufnahme beenden' : 'Namen sprechen'}
        accessibilityState={{ busy: working }}
        style={({ pressed }) => [
          styles.micButton,
          {
            backgroundColor: recording ? ACCENT_ORANGE : theme.subtleFill,
            opacity: working ? 0.5 : pressed ? 0.8 : 1,
          },
        ]}
      >
        <Feather
          name={recording ? 'square' : 'mic'}
          size={38}
          color={recording ? '#FFFFFF' : ACCENT_ORANGE}
        />
      </Pressable>

      <Text style={[styles.micLabel, { color: theme.sub }]}>
        {working
          ? 'Einen Moment…'
          : recording
            ? 'Ich höre zu — nochmal tippen, wenn du fertig bist.'
            : 'Antippen und deinen Namen sagen'}
      </Text>

      <Text style={[styles.fieldLabel, { color: theme.text }]}>
        {trimmed ? 'Hab ich das richtig verstanden?' : 'Oder tipp ihn hier ein'}
      </Text>
      <TextInput
        value={name}
        onChangeText={setName}
        placeholder="Dein Name"
        placeholderTextColor={theme.sub}
        accessibilityLabel="Dein Name"
        style={[
          styles.input,
          { color: theme.text, borderColor: theme.border, backgroundColor: theme.cardBg },
        ]}
      />

      {hint && <Text style={[styles.hint, { color: ACCENT_ERROR }]}>{hint}</Text>}
    </OnboardingScaffold>
  );
}

// Speechmatics liefert ganze Saetze mit Satzzeichen. Aus "Simon." soll
// "Simon" werden, aus "Ich heisse Simon" ebenfalls - mehr Aufwand lohnt
// nicht, weil der Nutzer das Feld ohnehin korrigieren kann.
function cleanName(raw: string): string {
  const withoutPunctuation = raw.replace(/[.,!?;:]/g, ' ').trim();
  if (!withoutPunctuation) return '';
  const lead = /^(ich heiße|ich heisse|mein name ist|ich bin)\s+/i;
  const stripped = withoutPunctuation.replace(lead, '').trim();
  const firstWord = stripped.split(/\s+/)[0] ?? '';
  return firstWord.charAt(0).toUpperCase() + firstWord.slice(1);
}

const styles = StyleSheet.create({
  mascotRow: {
    alignItems: 'center',
    marginBottom: SPACING.xl,
  },
  micButton: {
    width: 104,
    height: 104,
    borderRadius: 52,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  micLabel: {
    fontSize: FONT_SIZE.small,
    lineHeight: LINE_HEIGHT.small,
    textAlign: 'center',
    marginTop: SPACING.md,
    marginBottom: SPACING.xxl,
  },
  fieldLabel: {
    fontSize: FONT_SIZE.body,
    fontWeight: '700',
    marginBottom: SPACING.sm,
  },
  input: {
    borderWidth: 1.5,
    borderRadius: RADIUS.md,
    paddingHorizontal: SPACING.lg,
    paddingVertical: SPACING.lg,
    fontSize: FONT_SIZE.bodyLg,
    fontWeight: '700',
  },
  hint: {
    fontSize: FONT_SIZE.small,
    lineHeight: LINE_HEIGHT.small,
    marginTop: SPACING.md,
  },
});
