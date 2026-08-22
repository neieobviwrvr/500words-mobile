import { useState } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { router } from 'expo-router';
import { Screen } from '../../components/Screen';
import { PillButton } from '../../components/PillButton';
import { OptionRow } from '../../components/onboarding';
import { useAppState } from '../../state/AppState';
import { useOnboardingState, type Addressing, type Gender } from '../../state/OnboardingState';
import { ADDRESSING_OPTIONS, GENDERS } from '../../data/onboardingOptions';
import { CATEGORY_BY_ID } from '../../data/categories';
import { getTheme, SPACING, FONT_SIZE, LINE_HEIGHT } from '../../theme/tokens';

// Geschlecht und Ansprache - die frueheren Onboarding-Screens O5 und O6,
// zusammengelegt und an die Stelle verschoben, an der sie etwas bewirken
// (2026-08-22, Nutzer-Entscheidung: im Onboarding "einen Tick zu
// aufdringlich"). Wann der Screen erscheint, regelt data/anrede.ts.
//
// EIN Screen statt zwei: nach einem Kauf will niemand eine Strecke
// durchlaufen. Der Fortschrittsbalken faellt damit ebenfalls weg - er
// gehoert ins Onboarding, nicht hierher.
//
// Die Reihenfolge bleibt wie in O5/O6, weil die zweite Frage von der ersten
// abhaengt: wer beim Geschlecht "Sag ich lieber nicht" waehlt, bekommt die
// Ansprache-Frage gar nicht erst zu sehen. Die ist die intimere von beiden -
// wer gerade keine Auskunft geben wollte, direkt danach zu fragen, wen er
// anflirten moechte, wirkt als haette die App nicht zugehoert.

export function AnredeScreen({ categoryId }: { categoryId?: string }) {
  const { darkMode } = useAppState();
  const { gender, addressing, setGender, setAddressing } = useOnboardingState();
  const theme = getTheme(darkMode);

  // Lokal sammeln und erst am Ende schreiben: sonst gilt eine halbe Antwort
  // schon als gegeben und der Screen kaeme nie wieder.
  const [gewaehltesGeschlecht, setGewaehltesGeschlecht] = useState<Gender | null>(gender);
  const [gewaehlteAnsprache, setGewaehlteAnsprache] = useState<Addressing | null>(addressing);

  const verschwiegen = gewaehltesGeschlecht === 'keine_angabe';
  const fertig = !!gewaehltesGeschlecht && (verschwiegen || !!gewaehlteAnsprache);

  const kategorieName = categoryId ? CATEGORY_BY_ID[categoryId]?.name : undefined;

  function speichern() {
    if (gewaehltesGeschlecht) setGender(gewaehltesGeschlecht);
    // Bei "Sag ich lieber nicht" wird auch die zweite Frage als beantwortet
    // vermerkt ('alle'), sonst fragte der naechste Kauf sofort wieder.
    const ansprache = verschwiegen ? 'alle' : gewaehlteAnsprache;
    if (ansprache) setAddressing(ansprache);
    schliessen();
  }

  function schliessen() {
    // `back()` statt `replace('/')`: der Screen liegt ueber dem Pfad, und der
    // haelt so seine Scroll-Position - dieselbe Ueberlegung wie beim Kauf.
    if (router.canGoBack()) router.back();
    else router.replace('/');
  }

  return (
    <Screen dark={darkMode}>
      <ScrollView contentContainerStyle={styles.inhalt} showsVerticalScrollIndicator={false}>
        <Text style={[styles.titel, { color: theme.text }]}>Zwei Fragen, dann passt es</Text>
        <Text style={[styles.text, { color: theme.sub }]}>
          {kategorieName
            ? `In „${kategorieName}“ gibt es Sätze, die je nach Gegenüber anders lauten. Damit du die richtigen bekommst:`
            : 'Manche Sätze lauten je nach Gegenüber anders. Damit du die richtigen bekommst:'}
        </Text>

        <Text style={[styles.frage, { color: theme.text }]}>Zu welchem Geschlecht zählst du dich?</Text>
        {GENDERS.map((g) => (
          <OptionRow
            key={g.id}
            label={g.label}
            dark={darkMode}
            selected={gewaehltesGeschlecht === g.id}
            onPress={() => setGewaehltesGeschlecht(g.id as Gender)}
          />
        ))}

        {verschwiegen ? (
          <Text style={[styles.hinweis, { color: theme.sub }]}>
            Alles gut – dann zeigen wir dir beide Varianten.
          </Text>
        ) : (
          <>
            <Text style={[styles.frage, { color: theme.text }]}>Wen willst du ansprechen können?</Text>
            {ADDRESSING_OPTIONS.map((a) => (
              <OptionRow
                key={a.id}
                label={a.label}
                icon={a.icon}
                dark={darkMode}
                selected={gewaehlteAnsprache === a.id}
                onPress={() => setGewaehlteAnsprache(a.id as Addressing)}
              />
            ))}
          </>
        )}

        <Text style={[styles.fussnote, { color: theme.sub }]}>
          Bleibt auf deinem Gerät und lässt sich im Profil jederzeit ändern.
        </Text>
      </ScrollView>

      <View style={styles.fuss}>
        <PillButton label="Passt" dark={darkMode} disabled={!fertig} onPress={speichern} />
        <Text
          onPress={schliessen}
          accessibilityRole="button"
          accessibilityLabel="Überspringen"
          accessibilityHint="Du wirst später noch einmal gefragt"
          style={[styles.spaeter, { color: theme.sub }]}
        >
          Später
        </Text>
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  inhalt: { paddingBottom: SPACING.xl, gap: SPACING.sm },
  titel: { fontSize: FONT_SIZE.title, lineHeight: LINE_HEIGHT.title, fontWeight: '800' },
  text: { fontSize: FONT_SIZE.body, lineHeight: LINE_HEIGHT.body },
  frage: { fontSize: FONT_SIZE.body, fontWeight: '800', marginTop: SPACING.lg },
  hinweis: { fontSize: FONT_SIZE.caption, lineHeight: LINE_HEIGHT.caption, marginTop: SPACING.md },
  fussnote: { fontSize: FONT_SIZE.caption, lineHeight: LINE_HEIGHT.caption, marginTop: SPACING.lg },
  fuss: { gap: SPACING.sm, paddingTop: SPACING.md },
  spaeter: { textAlign: 'center', fontWeight: '700', fontSize: FONT_SIZE.caption, padding: SPACING.sm },
});
