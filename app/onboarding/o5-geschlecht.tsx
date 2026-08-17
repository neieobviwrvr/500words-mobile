import { useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { router } from 'expo-router';
import { OnboardingScaffold, OptionRow, PillButton } from '../../src/components/onboarding';
import { useAppState } from '../../src/state/AppState';
import { useOnboardingState, type Gender } from '../../src/state/OnboardingState';
import { speakText, stopSpeaking } from '../../src/features/tts/speak';
import { GENDERS, ONBOARDING_TOTAL_STEPS, stepNumber } from '../../src/data/onboardingOptions';
import { Mascot } from '../../src/features/mascot';
import { getTheme, SPACING, FONT_SIZE, LINE_HEIGHT } from '../../src/theme/tokens';

// O5 - Geschlecht.
//
// Gesprochene Zeile beginnt bewusst mit "Hey, eine Frage noch" und NICHT mit
// dem Namen (Nutzer-Entscheidung): Der Name wird angezeigt, aber nicht
// ausgesprochen - eine Systemstimme betont ungewoehnliche Namen oft falsch.
//
// Der Begruendungssatz nennt bewusst nur das, was das Geschlecht wirklich
// steuert (Kennenlernen und Flirten), nicht "deinen ganzen Lernplan". Die
// geschlechtsspezifischen Varianten betreffen vier Kategorien, nicht alle.

// Die drei Bausteine des Screens stehen einmal hier und speisen sowohl die
// Anzeige als auch die Sprachausgabe - so koennen gesprochener und
// geschriebener Text nicht auseinanderlaufen (gleiches Muster wie auf O4).
const OPENER = 'eine Frage noch..';
const QUESTION_LINE = 'Darf ich dich fragen, zu welchem Geschlecht du dich am ehesten zuordnest?';
const REASON_LINE =
  'Das bleibt alles unter uns, aber davon hängt ab, wie wir deinen Lernplan perfekt für dich zusammenstellen.';

const SPOKEN = `Hey, ${OPENER} ${QUESTION_LINE} ${REASON_LINE}`;

export default function GenderScreen() {
  const { darkMode } = useAppState();
  const { name, gender, setGender } = useOnboardingState();
  const theme = getTheme(darkMode);

  useEffect(() => {
    speakText(SPOKEN, { languageId: 'de' });
    return () => stopSpeaking();
  }, []);

  // Wer beim Geschlecht "Sag ich lieber nicht" waehlt, ueberspringt O6.
  // Begruendung: Die Ansprache-Frage ist die intimere von beiden - wer
  // gerade keine Auskunft geben wollte, direkt danach zu fragen, wen er
  // anflirten moechte, wirkt als haette die App nicht zugehoert.
  //
  // Es geht dabei nichts verloren: Ohne Angabe wird die Ansprache spaeter
  // erfragt, sobald der Nutzer erstmals eine Dating- oder Club-Kategorie
  // oeffnet - dort ist ihr Nutzen ohnehin sichtbarer als hier.
  const goNext = () => {
    const skipAddressing = gender === 'keine_angabe';
    router.push(skipAddressing ? '/onboarding/o7-alter' : '/onboarding/o6-ansprache');
  };

  return (
    <OnboardingScaffold
      step={stepNumber(5)}
      total={ONBOARDING_TOTAL_STEPS}
      dark={darkMode}
      title={name ? `Hey ${name}, ${OPENER}` : `Hey, ${OPENER}`}
      subtitle={QUESTION_LINE}
      onBack={() => router.back()}
      footer={
        <PillButton label="Weiter" dark={darkMode} disabled={!gender} onPress={goNext} />
      }
    >
      <View style={styles.mascotRow}>
        <Mascot state="neutral" size="mittel" />
      </View>

      <Text style={[styles.reason, { color: theme.sub }]}>{REASON_LINE}</Text>

      {GENDERS.map((g) => (
        <OptionRow
          key={g.id}
          label={g.label}
          dark={darkMode}
          selected={gender === g.id}
          onPress={() => setGender(g.id as Gender)}
        />
      ))}
    </OnboardingScaffold>
  );
}

const styles = StyleSheet.create({
  mascotRow: {
    alignItems: 'center',
    marginBottom: SPACING.lg,
  },
  reason: {
    fontSize: FONT_SIZE.body,
    lineHeight: LINE_HEIGHT.body,
    marginBottom: SPACING.xl,
  },
});
