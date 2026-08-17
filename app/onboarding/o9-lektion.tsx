import { useEffect, useState } from 'react';
import { ActivityIndicator, Pressable, StyleSheet, Text, View } from 'react-native';
import { router } from 'expo-router';
import { Feather } from '@expo/vector-icons';
import { OnboardingScaffold, OptionRow, PillButton } from '../../src/components/onboarding';
import { useAppState } from '../../src/state/AppState';
import { useSttRecorder } from '../../src/features/stt/useSttRecorder';
import { useSpeechmatics } from '../../src/features/stt/useSpeechmatics';
import { speakSentence, speakText, stopSpeaking } from '../../src/features/tts/speak';
import { loadExerciseSentences, type ExerciseSentence } from '../../src/data/phrasebookContent';
import { getLanguage } from '../../src/data/languages';
import { ONBOARDING_TOTAL_STEPS, stepNumber } from '../../src/data/onboardingOptions';
import { Mascot } from '../../src/features/mascot';
import {
  getTheme,
  ACCENT_ORANGE,
  ACCENT_GREEN,
  RADIUS,
  SPACING,
  FONT_SIZE,
  LINE_HEIGHT,
} from '../../src/theme/tokens';

// O9 - Beispiellektion.
//
// VORLAEUFIG (Nutzer-Entscheidung 2026-08-17): Der Aufbau hier ist ein
// Ausgangspunkt, kein fertiges Konzept - O9 wird in einer eigenen Sitzung
// geplant. Deshalb bewusst als eigener, austauschbarer Screen gebaut: Die
// uebrige Strecke haengt nur an der Route, nicht am Inhalt.
//
// Ein Prinzip sollte aber jede spaetere Fassung behalten: HIER DARF NIEMAND
// SCHEITERN. Die regulaere Uebung bewertet gesprochene Antworten in drei
// Stufen; lautet die allererste Rueckmeldung der App "nicht verstanden"
// (Akzent, Nebengeraeusch, wackeliges Netz), ist der Nutzer weg, bevor er
// verstanden hat, worum es geht. Duolingo startet aus genau diesem Grund mit
// Bild-Mehrfachauswahl statt mit freiem Sprechen.
//
// Drei Schritte: zuhoeren -> wiedererkennen -> einmal sprechen. Der letzte
// Schritt zeigt nur, WAS verstanden wurde, und wertet nichts.

type Phase = 'intro' | 'hoeren' | 'waehlen' | 'sprechen' | 'fertig';

export default function LessonScreen() {
  const { darkMode, targetLanguageId } = useAppState();
  const theme = getTheme(darkMode);
  const language = getLanguage(targetLanguageId);

  const recorder = useSttRecorder();
  const stt = useSpeechmatics();

  const [phase, setPhase] = useState<Phase>('intro');
  const [loading, setLoading] = useState(true);
  const [sentence, setSentence] = useState<ExerciseSentence | null>(null);
  const [choices, setChoices] = useState<string[]>([]);
  const [picked, setPicked] = useState<string | null>(null);
  const [recording, setRecording] = useState(false);
  const [working, setWorking] = useState(false);
  const [heard, setHeard] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;
    (async () => {
      try {
        const { sentences } = await loadExerciseSentences(targetLanguageId, ['grundwortschatz']);
        if (cancelled) return;
        // Kurze Saetze zuerst - der erste Kontakt soll leicht sein.
        const usable = sentences.filter((s) => s.text.length > 0).sort((a, b) => a.text.length - b.text.length);
        const chosen = usable[0] ?? null;
        setSentence(chosen);
        if (chosen?.germanGloss) {
          const distractors = usable
            .filter((s) => s.id !== chosen.id && s.germanGloss)
            .slice(0, 3)
            .map((s) => s.germanGloss as string);
          setChoices(shuffle([chosen.germanGloss, ...distractors]));
        }
      } catch {
        // Ohne Satz laeuft die Lektion nicht - dann ueberspringen wir sie
        // lieber, statt den Nutzer in einer Fehlermeldung festzuhalten.
      } finally {
        if (!cancelled) setLoading(false);
      }
    })();
    return () => {
      cancelled = true;
      stopSpeaking();
    };
  }, [targetLanguageId]);

  // Seit 2026-08-18 nicht mehr direkt zur Kontofrage: dazwischen liegt der
  // Coin fuer die bestandene Lektion (o9b), damit O10 sich auf etwas
  // Greifbares beziehen kann, das man verlieren koennte.
  const goNext = () => router.push('/onboarding/o9b-coin');

  const playSentence = () => {
    if (!sentence) return;
    speakSentence({ text: sentence.text }, { languageId: targetLanguageId });
  };

  const startRecording = async () => {
    stopSpeaking();
    try {
      await recorder.start();
      setRecording(true);
    } catch {
      // Kein Mikrofon - der Schritt ist trotzdem geschafft.
      setPhase('fertig');
    }
  };

  const stopRecording = async () => {
    setRecording(false);
    setWorking(true);
    try {
      const uri = await recorder.stop();
      if (uri) {
        const { text } = await stt.transcribe(uri, language.sttLanguage, sentence?.text);
        setHeard(text);
      }
    } catch {
      // Bewusst ohne Fehlermeldung: In dieser Lektion gibt es kein
      // Scheitern. Wer nicht verstanden wurde, geht trotzdem weiter.
    } finally {
      setWorking(false);
      setPhase('fertig');
    }
  };

  if (loading) {
    return (
      <OnboardingScaffold
        step={stepNumber(9)}
        total={ONBOARDING_TOTAL_STEPS}
        dark={darkMode}
        title="Einen Moment"
        onBack={() => router.back()}
      >
        <ActivityIndicator color={ACCENT_ORANGE} />
      </OnboardingScaffold>
    );
  }

  // Ohne Content keine Lektion - ehrlich weiterleiten statt eine leere
  // Uebung zu zeigen.
  if (!sentence) {
    return (
      <OnboardingScaffold
        step={stepNumber(9)}
        total={ONBOARDING_TOTAL_STEPS}
        dark={darkMode}
        title="Gleich geht's los"
        subtitle={`Für ${language.label} haben wir die erste Lektion noch nicht fertig.`}
        onBack={() => router.back()}
        footer={<PillButton label="Weiter" dark={darkMode} onPress={goNext} />}
      >
        <View />
      </OnboardingScaffold>
    );
  }

  if (phase === 'intro') {
    return (
      <OnboardingScaffold
        step={stepNumber(9)}
        total={ONBOARDING_TOTAL_STEPS}
        dark={darkMode}
        title="Deine erste Lektion dauert "
        titleAccent="2 Minuten"
        titleAfter="."
        subtitle="Zuhören, wiedererkennen, einmal selbst sagen. Mehr nicht."
        onBack={() => router.back()}
        footer={
          <PillButton
            label="Los geht's"
            dark={darkMode}
            onPress={() => {
              setPhase('hoeren');
              setTimeout(playSentence, 250);
            }}
          />
        }
      >
        <View style={[styles.iconCircle, { backgroundColor: theme.subtleFill }]}>
          <Feather name="play" size={38} color={ACCENT_ORANGE} />
        </View>
      </OnboardingScaffold>
    );
  }

  if (phase === 'hoeren') {
    return (
      <OnboardingScaffold
        step={stepNumber(9)}
        total={ONBOARDING_TOTAL_STEPS}
        dark={darkMode}
        title="Hör dir das an"
        onBack={() => setPhase('intro')}
        footer={
          <PillButton
            label="Weiter"
            dark={darkMode}
            onPress={() => setPhase(sentence.germanGloss && choices.length > 1 ? 'waehlen' : 'sprechen')}
          />
        }
      >
        <Pressable
          onPress={playSentence}
          accessibilityRole="button"
          accessibilityLabel="Satz noch einmal anhören"
          style={[styles.sentenceCard, { backgroundColor: theme.cardBg, borderColor: theme.border }]}
        >
          <Feather name="volume-2" size={26} color={ACCENT_ORANGE} />
          <Text style={[styles.sentence, { color: theme.text }]}>{sentence.text}</Text>
        </Pressable>
        <Text style={[styles.hint, { color: theme.sub }]}>Antippen, um es noch einmal zu hören.</Text>
      </OnboardingScaffold>
    );
  }

  if (phase === 'waehlen') {
    return (
      <OnboardingScaffold
        step={stepNumber(9)}
        total={ONBOARDING_TOTAL_STEPS}
        dark={darkMode}
        title="Was heißt das?"
        subtitle={sentence.text}
        onBack={() => setPhase('hoeren')}
        footer={
          <PillButton
            label="Weiter"
            dark={darkMode}
            disabled={!picked}
            onPress={() => setPhase('sprechen')}
          />
        }
      >
        {choices.map((c) => (
          <OptionRow
            key={c}
            label={c}
            dark={darkMode}
            selected={picked === c}
            onPress={() => setPicked(c)}
          />
        ))}
        {picked && (
          <Text style={[styles.solution, { color: ACCENT_GREEN }]}>
            {picked === sentence.germanGloss
              ? 'Genau das heißt es.'
              : `Es heißt: „${sentence.germanGloss}" — merk es dir einfach.`}
          </Text>
        )}
      </OnboardingScaffold>
    );
  }

  if (phase === 'sprechen') {
    return (
      <OnboardingScaffold
        step={stepNumber(9)}
        total={ONBOARDING_TOTAL_STEPS}
        dark={darkMode}
        title="Jetzt du"
        subtitle={sentence.text}
        onBack={() => setPhase('hoeren')}
        footer={
          <PillButton
            label="Überspringen"
            variant="ghost"
            dark={darkMode}
            onPress={() => setPhase('fertig')}
          />
        }
      >
        <Pressable
          onPress={recording ? stopRecording : startRecording}
          disabled={working}
          accessibilityRole="button"
          accessibilityLabel={recording ? 'Aufnahme beenden' : 'Satz nachsprechen'}
          style={({ pressed }) => [
            styles.micButton,
            {
              backgroundColor: recording ? ACCENT_ORANGE : theme.subtleFill,
              opacity: working ? 0.5 : pressed ? 0.8 : 1,
            },
          ]}
        >
          <Feather name={recording ? 'square' : 'mic'} size={38} color={recording ? '#FFFFFF' : ACCENT_ORANGE} />
        </Pressable>
        <Text style={[styles.hint, { color: theme.sub }]}>
          {working ? 'Einen Moment…' : recording ? 'Ich höre zu.' : 'Antippen und den Satz sagen'}
        </Text>
      </OnboardingScaffold>
    );
  }

  return (
    <OnboardingScaffold
      step={9}
      total={ONBOARDING_TOTAL_STEPS}
      dark={darkMode}
      title="Das war deine erste Lektion."
      subtitle="Genau so läuft es — nur mit mehr Sätzen."
      footer={<PillButton label="Weiter" dark={darkMode} onPress={goNext} />}
    >
      {/* Die Figur feiert mit. Ohne Maskottchen bleibt der Haken allein
          stehen - der Screen funktioniert in beiden Fassungen. */}
      <View style={styles.mascotRow}>
        <Mascot state="feiert" size="gross" />
      </View>
      <View style={[styles.iconCircle, { backgroundColor: theme.subtleFill }]}>
        <Feather name="check" size={40} color={ACCENT_GREEN} />
      </View>
      {heard && (
        <Text style={[styles.hint, { color: theme.sub }]}>Verstanden habe ich: „{heard}"</Text>
      )}
    </OnboardingScaffold>
  );
}

function shuffle<T>(items: T[]): T[] {
  const copy = [...items];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

const styles = StyleSheet.create({
  mascotRow: {
    alignItems: 'center',
    marginBottom: SPACING.lg,
  },
  iconCircle: {
    width: 96,
    height: 96,
    borderRadius: 48,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: SPACING.xl,
  },
  sentenceCard: {
    borderWidth: 1,
    borderRadius: RADIUS.md,
    padding: SPACING.xl,
    alignItems: 'center',
    gap: SPACING.md,
  },
  sentence: {
    fontSize: FONT_SIZE.title,
    lineHeight: LINE_HEIGHT.title,
    fontWeight: '700',
    textAlign: 'center',
  },
  micButton: {
    width: 104,
    height: 104,
    borderRadius: 52,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  hint: {
    fontSize: FONT_SIZE.small,
    lineHeight: LINE_HEIGHT.small,
    textAlign: 'center',
    marginTop: SPACING.md,
  },
  solution: {
    fontSize: FONT_SIZE.body,
    lineHeight: LINE_HEIGHT.body,
    fontWeight: '700',
    textAlign: 'center',
    marginTop: SPACING.md,
  },
});
