import { useState } from 'react';
import { StyleSheet, Text } from 'react-native';
import { router } from 'expo-router';
import { OnboardingScaffold, OptionRow, PillButton } from '../../src/components/onboarding';
import { useAppState } from '../../src/state/AppState';
import { useOnboardingState, MAX_OCCASIONS } from '../../src/state/OnboardingState';
import { getLanguage } from '../../src/data/languages';
import { GOALS, OCCASIONS, ONBOARDING_TOTAL_STEPS, stepNumber } from '../../src/data/onboardingOptions';
import { getTheme, SPACING, FONT_SIZE, LINE_HEIGHT } from '../../src/theme/tokens';

// O2 - Warum lernst du?
//
// Simons Vorlage sind ZWEI Auswahlbilder, seine Screen-Nummerierung zaehlt
// sie aber als einen Schritt. Deshalb eine Route mit zwei Stufen: erst der
// grobe Anlass, dann die konkreten Ziele. Der Fortschrittsbalken bleibt auf
// Schritt 2, der Zurueck-Pfeil geht von Stufe 2 auf Stufe 1 zurueck.
//
// Von Babbel uebernommen: die Auswahlregel steht als Klartext im Untertitel,
// und unten gibt es einen Ausstieg ("Überspringen") statt eines Zwangs.

export default function GoalScreen() {
  const { darkMode, targetLanguageId } = useAppState();
  const { occasions, toggleOccasion, goals, toggleGoal } = useOnboardingState();
  const theme = getTheme(darkMode);
  const [stage, setStage] = useState<'anlass' | 'ziele'>('anlass');

  const language = getLanguage(targetLanguageId);
  const goNext = () => router.push('/onboarding/o3-mikrofon');

  if (stage === 'anlass') {
    const atLimit = occasions.length >= MAX_OCCASIONS;

    return (
      <OnboardingScaffold
        step={stepNumber(2)}
        total={ONBOARDING_TOTAL_STEPS}
        dark={darkMode}
        title="Was führt dich hin?"
        subtitle={`Wähle bis zu ${MAX_OCCASIONS} aus.`}
        onBack={() => router.back()}
        footer={
          <>
            <PillButton
              label={occasions.length > 0 ? `Weiter (${occasions.length})` : 'Weiter'}
              dark={darkMode}
              disabled={occasions.length === 0}
              onPress={() => setStage('ziele')}
            />
            <Text style={[styles.skip, { color: theme.sub }]} onPress={() => setStage('ziele')}>
              Überspringen
            </Text>
          </>
        }
      >
        {OCCASIONS.map((o) => {
          const selected = occasions.includes(o.id);
          return (
            <OptionRow
              key={o.id}
              label={o.label}
              icon={o.icon}
              dark={darkMode}
              multi
              selected={selected}
              // Bei erreichter Obergrenze bleiben nur die bereits
              // gewaehlten Zeilen bedienbar (zum Abwaehlen). Die uebrigen
              // werden sichtbar blass, statt beim Antippen wortlos nichts
              // zu tun.
              disabled={atLimit && !selected}
              onPress={() => toggleOccasion(o.id)}
            />
          );
        })}

        {atLimit && (
          <Text style={[styles.limitNote, { color: theme.sub }]}>
            Mehr als {MAX_OCCASIONS} geht nicht — wähl eins ab, um zu tauschen.
          </Text>
        )}
      </OnboardingScaffold>
    );
  }

  return (
    <OnboardingScaffold
      step={2}
      total={ONBOARDING_TOTAL_STEPS}
      dark={darkMode}
      title="Was willst du auf "
      titleAccent={language.label}
      titleAfter=" können?"
      subtitle="Wähle so viele Ziele aus, wie du willst."
      onBack={() => setStage('anlass')}
      footer={
        <>
          <PillButton
            label={goals.length > 0 ? `Weiter (${goals.length})` : 'Weiter'}
            dark={darkMode}
            disabled={goals.length === 0}
            onPress={goNext}
          />
          <Text style={[styles.skip, { color: theme.sub }]} onPress={goNext}>
            Überspringen
          </Text>
        </>
      }
    >
      {GOALS.map((g) => (
        <OptionRow
          key={g.id}
          label={g.label}
          icon={g.icon}
          dark={darkMode}
          multi
          selected={goals.includes(g.id)}
          onPress={() => toggleGoal(g.id)}
        />
      ))}
    </OnboardingScaffold>
  );
}

const styles = StyleSheet.create({
  skip: {
    fontSize: FONT_SIZE.body,
    lineHeight: LINE_HEIGHT.body,
    fontWeight: '700',
    textAlign: 'center',
    marginTop: SPACING.md,
  },
  limitNote: {
    fontSize: FONT_SIZE.small,
    lineHeight: LINE_HEIGHT.small,
    textAlign: 'center',
    marginTop: SPACING.sm,
  },
});
