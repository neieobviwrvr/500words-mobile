import { ScrollView, StyleSheet, Text } from 'react-native';
import { Screen } from '../../components';
import { useAppState } from '../../state/AppState';
import { FONT_SIZE, getTheme, LINE_HEIGHT, SPACING } from '../../theme/tokens';
import { Herausforderungen } from './Herausforderungen';
import { DetailKopf, gruppenGrund } from './ListenBausteine';

// Detailansicht "Herausforderungen" (2026-09-11, Teil des Profil-Umbaus im
// iOS-Stil). Auf dem Profil steht davon nur noch eine Zeile mit "x offen" und
// einem Abzeichen, wenn Coins abzuholen sind - die volle Liste mit Balken
// war der laengste Block der Seite und hat alles darunter weit nach unten
// gedrueckt.
export function HerausforderungenScreen() {
  const { darkMode } = useAppState();
  const theme = getTheme(darkMode);
  return (
    <Screen dark={darkMode} padHorizontal={false} style={{ backgroundColor: gruppenGrund(darkMode) }}>
      <DetailKopf dark={darkMode} titel="Herausforderungen" />
      <ScrollView contentContainerStyle={styles.seite} showsVerticalScrollIndicator={false}>
        <Text style={[styles.intro, { color: theme.sub }]}>
          Schaffst du eine Herausforderung, holst du dir hier die Coins dafür ab.
        </Text>
        <Herausforderungen ohneUeberschrift />
      </ScrollView>
    </Screen>
  );
}

const styles = StyleSheet.create({
  seite: {
    paddingBottom: SPACING.xxxl,
  },
  intro: {
    fontSize: FONT_SIZE.body,
    lineHeight: LINE_HEIGHT.body,
    marginHorizontal: SPACING.xl,
    marginTop: SPACING.sm,
    marginBottom: SPACING.lg,
  },
});
