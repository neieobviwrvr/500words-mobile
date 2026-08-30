import { useState } from 'react';
import { StyleSheet, Text } from 'react-native';
import { router } from 'expo-router';
import { OnboardingScaffold, OptionRow, PillButton } from '../../src/components/onboarding';
import { useAppState } from '../../src/state/AppState';
import { useOnboardingState, MAX_OCCASIONS } from '../../src/state/OnboardingState';
import { getLanguage } from '../../src/data/languages';
import { GOALS, GOAL_SEITEN_UNTERTITEL, OCCASIONS, ONBOARDING_TOTAL_STEPS, stepNumber } from '../../src/data/onboardingOptions';
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
  // Drei Stufen seit 2026-08-30: die zwoelf Ziele stehen auf zwei Seiten
  // (Simons Wunsch). Der Fortschrittsbalken bleibt fuer alle drei auf
  // Schritt 2 - Simons Nummerierung zaehlt O2 als EINEN Schritt, daran
  // aendert eine weitere Innenseite nichts.
  const [stage, setStage] = useState<'anlass' | 'ziele1' | 'ziele2'>('anlass');

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
              onPress={() => setStage('ziele1')}
            />
            <Text style={[styles.skip, { color: theme.sub }]} onPress={() => setStage('ziele1')}>
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

  // Beide Ziel-Seiten sind derselbe Bildschirm mit anderem Ausschnitt -
  // deshalb EINE Fassung statt zweier fast gleicher Bloecke.
  const seite: 1 | 2 = stage === 'ziele1' ? 1 : 2;
  const zieleDieserSeite = GOALS.filter((g) => g.seite === seite);

  return (
    <OnboardingScaffold
      step={2}
      total={ONBOARDING_TOTAL_STEPS}
      dark={darkMode}
      title="Was willst du auf "
      titleAccent={language.label}
      titleAfter=" können?"
      subtitle={`${GOAL_SEITEN_UNTERTITEL[seite]} Wähle so viele aus, wie du willst. (${seite} von 2)`}
      onBack={() => setStage(seite === 1 ? 'anlass' : 'ziele1')}
      footer={
        <>
          <PillButton
            // Auf Seite 1 fuehrt "Weiter" nur zur zweiten Seite und ist
            // deshalb IMMER bedienbar: wer hier nichts findet, waehlt
            // vielleicht drueben - ihn davor zu sperren waere eine
            // Sackgasse. Erst am Ende gilt die Bedingung.
            label={goals.length > 0 ? `Weiter (${goals.length})` : 'Weiter'}
            dark={darkMode}
            disabled={seite === 2 && goals.length === 0}
            onPress={() => (seite === 1 ? setStage('ziele2') : goNext())}
          />
          <Text
            style={[styles.skip, { color: theme.sub }]}
            onPress={() => (seite === 1 ? setStage('ziele2') : goNext())}
          >
            Überspringen
          </Text>
        </>
      }
    >
      {zieleDieserSeite.map((g) => (
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
