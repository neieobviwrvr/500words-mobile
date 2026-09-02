import { Pressable, StyleSheet, Text, View } from 'react-native';
import { router } from 'expo-router';
import { Dropdown, OnboardingScaffold, type DropdownOption } from '../../src/components/onboarding';
import { useAppState } from '../../src/state/AppState';
import { useOnboardingState, type SourceLanguageId } from '../../src/state/OnboardingState';
import { LANGUAGES } from '../../src/data/languages';
import { ONBOARDING_TOTAL_STEPS, stepNumber } from '../../src/data/onboardingOptions';
import {
  getTheme,
  ACCENT_ORANGE,
  SPACING,
  RADIUS,
  FONT_SIZE,
  LINE_HEIGHT,
  schrift,
  kachel,
} from '../../src/theme/tokens';

// O1 - Sprachauswahl.
//
// Aufbau von Babbel: zwei Bloecke ("Ich spreche" / "Ich moechte lernen"),
// Zielsprachen als Raster statt als Liste, und Antippen ist bereits die
// Auswahl - kein zusaetzlicher Weiter-Knopf.
//
// Zwei bewusste Abweichungen von der Vorlage:
// - Keine Lernerzahlen auf den Karten ("13,9 Mio."). Die haben wir zum
//   Launch nicht, und erfundene Zahlen kommen nicht in Frage.
//
// "Ich spreche" (sourceLanguageId) wird seit 2026-08-24 zusaetzlich in
// AppState verankert (siehe chooseSource), nicht nur in OnboardingState -
// vorher verschwand die Auswahl beim Verlassen der Onboarding-Strecke
// spurlos, kein anderer Screen konnte sie je lesen. Aendert bewusst NICHTS
// an der Oberflaeche (die ist weiterhin komplett Deutsch), macht den Wert
// nur ueberhaupt erst greifbar fuer spaetere Mehrsprachigkeit.
// - Kompaktere Karten. Bei Babbel bricht "Portugiesisch" mitten im Wort um,
//   weil drei Spalten auf 375px zu schmal sind; zwei Spalten vermeiden das.

// Flaggen als Emoji: fuer Laenderflaggen gibt es in Feather keine
// Entsprechung, und eigene Grafiken waeren fuer vier Sprachen zu viel
// Aufwand. Betrifft nur diesen Screen - alle uebrigen Symbole der Strecke
// sind Linien-Icons.
const FLAGS: Record<string, string> = {
  de: '🇩🇪',
  sv: '🇸🇪',
  es: '🇪🇸',
  fr: '🇫🇷',
};

// Ausgangssprache als Auswahlfeld statt als Liste - so macht es auch die
// Vorlage, und bei spaeter mehr Sprachen waechst die Liste nach unten weg
// statt den Screen zu verlaengern.
const SOURCE_LANGUAGES: DropdownOption[] = [
  { id: 'de', label: 'Deutsch' },
  // Englisch ist strukturell vorgesehen, aber noch ohne Oberflaechen-
  // Uebersetzung und ohne englische Gloss-Texte zu den 189 Saetzen
  // (siehe CLAUDE.md) - deshalb sichtbar, aber nicht waehlbar.
  { id: 'en', label: 'English', disabled: true, note: 'bald verfügbar' },
];

export default function LanguageSelectScreen() {
  const { darkMode, targetLanguageId, setTargetLanguageId, setSourceLanguageId: setSourceLanguageIdApp } = useAppState();
  const { sourceLanguageId, setSourceLanguageId } = useOnboardingState();
  const theme = getTheme(darkMode);

  const chooseTarget = (id: string) => {
    setTargetLanguageId(id);
    router.push('/onboarding/o2-ziel');
  };

  // Verankert in AppState, ueberlebt damit einen Neustart - sofort bei der
  // Auswahl, genau wie targetLanguageId oben (nicht erst am Ende der
  // Onboarding-Strecke). OnboardingState bleibt zusaetzlich bestehen, weil
  // dieser Screen selbst nur von dort liest (siehe `sourceLanguageId` oben).
  const chooseSource = (id: SourceLanguageId) => {
    setSourceLanguageId(id);
    setSourceLanguageIdApp(id);
  };

  return (
    <OnboardingScaffold
      step={stepNumber(1)}
      total={ONBOARDING_TOTAL_STEPS}
      dark={darkMode}
      title="Was möchtest du lernen?"
      subtitle="Du kannst jederzeit zu einer anderen Sprache wechseln."
    >
      <Text style={[styles.blockTitle, { color: theme.text }]}>Ich spreche</Text>
      <Dropdown
        options={SOURCE_LANGUAGES}
        selectedId={sourceLanguageId}
        onSelect={(id) => chooseSource(id as SourceLanguageId)}
        dark={darkMode}
        title="Welche Sprache sprichst du?"
        accessibilityLabel="Ich spreche"
      />

      <Text style={[styles.blockTitle, styles.blockTitleSpaced, { color: theme.text }]}>
        Ich möchte lernen
      </Text>
      <View style={styles.grid}>
        {LANGUAGES.map((lang) => {
          const active = targetLanguageId === lang.id;
          const usable = lang.hasContent && lang.table !== null;
          return (
            <Pressable
              key={lang.id}
              onPress={() => usable && chooseTarget(lang.id)}
              disabled={!usable}
              accessibilityRole="button"
              accessibilityLabel={usable ? lang.label : `${lang.label}, bald verfügbar`}
              accessibilityState={{ selected: active, disabled: !usable }}
              style={({ pressed }) => [
                styles.card,
                // Derselbe 3D-Kachel-Look wie auf S1 (2026-09-01). Vorher
                // war der Dropdown darueber die einzige Flaeche mit Tiefe -
                // die Karten darunter blieben flach, was den Screen
                // uneinheitlich aussehen liess.
                kachel(darkMode),
                {
                  backgroundColor: theme.cardBg,
                  // Die gewaehlte Karte behaelt ihr Orange, bekommt die
                  // Tiefe aber genauso: die untere Kante ist bei ihr die
                  // dunklere Rolle der eigenen Farbe, nicht das Grau.
                  ...(active ? { borderColor: ACCENT_ORANGE } : null),
                  opacity: !usable ? 0.45 : pressed ? 0.7 : 1,
                },
              ]}
            >
              <Text style={styles.flag}>{FLAGS[lang.id] ?? '🏳️'}</Text>
              <Text style={[styles.cardLabel, { color: theme.text }]} numberOfLines={2}>
                {lang.label}
              </Text>
              {!usable && <Text style={[styles.cardNote, { color: theme.sub }]}>bald</Text>}
            </Pressable>
          );
        })}
      </View>
    </OnboardingScaffold>
  );
}

const styles = StyleSheet.create({
  blockTitle: {
    fontSize: FONT_SIZE.bodyLg,
    lineHeight: LINE_HEIGHT.bodyLg,
    ...schrift('800'),
    marginBottom: SPACING.md,
  },
  blockTitleSpaced: {
    marginTop: SPACING.xl,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: SPACING.md,
  },
  card: {
    // Zwei Spalten: knapp die halbe Breite, der Rest geht an die Luecke.
    width: '47.5%',
    flexGrow: 1,
    borderRadius: RADIUS.md,
    paddingVertical: SPACING.xl,
    paddingHorizontal: SPACING.md,
    alignItems: 'center',
  },
  flag: {
    fontSize: 34,
    marginBottom: SPACING.sm,
  },
  cardLabel: {
    fontSize: FONT_SIZE.body,
    lineHeight: LINE_HEIGHT.body,
    ...schrift('700'),
    textAlign: 'center',
  },
  cardNote: {
    fontSize: FONT_SIZE.caption,
    marginTop: 2,
  },
});
