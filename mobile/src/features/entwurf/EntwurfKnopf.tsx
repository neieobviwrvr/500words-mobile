import { Pressable, StyleSheet, Text, View } from 'react-native';
import { router } from 'expo-router';
import { Feather } from '@expo/vector-icons';
import { getTheme, FONT_SIZE, KACHEL_RAND_LIGHT, RADIUS, SPACING, schrift } from '../../theme/tokens';

// Der Weg zur leeren Seite (2026-09-26, Simons Auftrag: "Bau mir auf S1 ganz
// oben einen einfachen Button als Test der auf einen neuen Screen fuehrt").
//
// **Warum er hier liegt und nicht in PathScreen.tsx:** alles Neue steckt in
// diesem einen Ordner. Faellt der Entwurf weg, loescht man `features/entwurf/`
// plus zwei Zeilen in PathScreen - der Startscreen selbst behaelt keinen Rest.
//
// **Bewusst schmal**, kein `PillButton`: der traegt 54 Punkte plus 6 Punkte
// Druckkante, und S1 ist oben schon dicht (Standortzeile, Balken, Sprachkarte,
// Pfad-Box, zwei Knoepfe). Ein voller Pillen-Knopf haette den ganzen Pfad
// nach unten geschoben.
//
// **!!! VOR DEM LAUNCH !!!** Dieser Knopf ist ein Testeinstieg und gehoert
// weg, sobald aus dem Entwurf etwas Echtes geworden ist - oder mit ihm.

export function EntwurfKnopf({ dark }: { dark: boolean }) {
  const theme = getTheme(dark);
  const rand = dark ? theme.border : KACHEL_RAND_LIGHT;

  return (
    <View style={styles.reihe}>
      <Pressable
        onPress={() => router.push('/entwurf')}
        accessibilityRole="button"
        accessibilityLabel="Entwurf"
        accessibilityHint="Öffnet eine leere Seite zum Ausprobieren"
        hitSlop={8}
        style={({ pressed }) => [
          styles.knopf,
          { backgroundColor: theme.cardBg, borderColor: rand },
          pressed && styles.gedrueckt,
        ]}
      >
        <Feather name="edit-3" size={14} color={theme.sub} />
        <Text style={[styles.label, { color: theme.text }]}>Entwurf</Text>
        <Feather name="chevron-right" size={16} color={theme.sub} />
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  reihe: {
    alignItems: 'flex-start',
    marginBottom: SPACING.sm,
  },
  knopf: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: SPACING.sm,
    paddingVertical: 7,
    paddingLeft: SPACING.md,
    paddingRight: SPACING.sm,
    borderRadius: RADIUS.pill,
    borderWidth: 1.5,
  },
  gedrueckt: {
    opacity: 0.6,
  },
  label: {
    ...schrift('700'),
    fontSize: FONT_SIZE.small,
  },
});
