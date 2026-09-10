import { Pressable, StyleSheet, Text, View } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { Card } from '../../components';
import { ProgressBar } from '../../components/ProgressBar';
import { useAppState } from '../../state/AppState';
import {
  HERAUSFORDERUNGEN,
  sortiere,
  standVon,
  type Herausforderung,
} from '../../data/herausforderungen';
import {
  getTheme,
  ACCENT_GREEN,
  ACCENT_ORANGE,
  FONT_SIZE,
  LINE_HEIGHT,
  SPACING, schrift } from '../../theme/tokens';

// Herausforderungen auf dem Profil (2026-08-22, Nutzer-Wunsch).
//
// Coins werden ABGEHOLT, nicht automatisch gutgeschrieben. Zwei Gruende:
// der Nutzer soll sehen, dass er etwas erreicht hat (eine still hochzaehlende
// Zahl in der Kopfzeile bemerkt niemand), und `grantCoins` vergibt ohnehin
// genau einmal pro Schluessel - der Knopf passt also exakt auf die vorhandene
// Mechanik, ohne dass es einen zweiten Merkzettel braucht.

export function Herausforderungen() {
  const { darkMode, fortschritt, coinGrants, grantCoins, hydrated } = useAppState();
  const theme = getTheme(darkMode);

  const liste = sortiere(HERAUSFORDERUNGEN, fortschritt, coinGrants);
  const offen = liste.filter((h) => h.quelle && standVon(h, fortschritt) < h.ziel).length;

  return (
    <>
      <Text style={[styles.sectionLabel, { color: theme.sub }]}>
        {`HERAUSFORDERUNGEN${offen ? ` · ${offen} offen` : ''}`}
      </Text>

      <Card dark={darkMode} style={styles.card}>
        {liste.map((h, i) => (
          <Zeile
            key={h.id}
            h={h}
            stand={standVon(h, fortschritt)}
            abgeholt={!!coinGrants[h.id]}
            dark={darkMode}
            erste={i === 0}
            // Vor `hydrated` steht der Default-Zustand da, nicht der
            // gespeicherte - ein Abholen jetzt liefe gegen leere Zaehler.
            onAbholen={hydrated ? () => grantCoins(h.id, h.coins) : undefined}
          />
        ))}
      </Card>
    </>
  );
}

function Zeile({
  h,
  stand,
  abgeholt,
  dark,
  erste,
  onAbholen,
}: {
  h: Herausforderung;
  stand: number;
  abgeholt: boolean;
  dark: boolean;
  erste: boolean;
  onAbholen?: () => void;
}) {
  const theme = getTheme(dark);
  const geschafft = h.quelle !== null && stand >= h.ziel;
  const abzuholen = geschafft && !abgeholt;

  return (
    <View style={[styles.zeile, !erste && { borderTopWidth: 1, borderTopColor: theme.border }]}>
      <View style={styles.kopf}>
        <Feather
          name={abgeholt ? 'check-circle' : h.quelle === null ? 'lock' : 'target'}
          size={16}
          color={abgeholt ? ACCENT_GREEN : abzuholen ? ACCENT_ORANGE : theme.sub}
        />
        <Text style={[styles.titel, { color: theme.text }]}>{h.titel}</Text>
        <Text style={[styles.lohn, { color: abzuholen ? ACCENT_ORANGE : theme.sub }]}>
          {`+${h.coins}`}
        </Text>
      </View>

      <Text style={[styles.text, { color: theme.sub }]}>{h.text}</Text>

      {h.quelle === null ? (
        <Text style={[styles.gesperrt, { color: theme.sub }]}>{h.gesperrt}</Text>
      ) : (
        <View style={styles.balkenZeile}>
          <View style={styles.balken}>
            <ProgressBar
              // Gedeckelt: nach dem Abholen laeuft der Zaehler weiter, der
              // Balken soll aber nicht ueber das Ziel hinausschiessen.
              ratio={Math.min(stand / h.ziel, 1)}
              dark={dark}
            />
          </View>
          <Text style={[styles.stand, { color: theme.sub }]}>
            {`${Math.min(stand, h.ziel)}/${h.ziel}`}
          </Text>
        </View>
      )}

      {abzuholen && onAbholen ? (
        <Pressable
          onPress={onAbholen}
          accessibilityRole="button"
          accessibilityLabel={`${h.coins} Coins abholen für ${h.titel}`}
          style={({ pressed }) => [styles.abholen, { opacity: pressed ? 0.7 : 1 }]}
        >
          <Text style={styles.abholenText}>{`${h.coins} Coins abholen`}</Text>
        </Pressable>
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  sectionLabel: {
    fontSize: FONT_SIZE.caption,
    ...schrift('800'),
    letterSpacing: 0.8,
    marginHorizontal: SPACING.lg,
    marginTop: SPACING.xl,
    marginBottom: SPACING.sm,
  },
  card: { marginHorizontal: SPACING.lg, gap: 0 },
  zeile: { paddingVertical: SPACING.md, gap: SPACING.xs },
  kopf: { flexDirection: 'row', alignItems: 'center', gap: SPACING.sm },
  titel: { flex: 1, fontSize: FONT_SIZE.body, ...schrift('800') },
  lohn: { fontSize: FONT_SIZE.caption, ...schrift('800') },
  text: { fontSize: FONT_SIZE.caption, lineHeight: LINE_HEIGHT.caption },
  gesperrt: { fontSize: FONT_SIZE.caption, ...schrift('700'), fontStyle: 'italic' },
  balkenZeile: { flexDirection: 'row', alignItems: 'center', gap: SPACING.sm },
  balken: { flex: 1 },
  stand: { fontSize: FONT_SIZE.caption, ...schrift('700'), minWidth: 44, textAlign: 'right' },
  abholen: {
    alignSelf: 'flex-start',
    backgroundColor: ACCENT_ORANGE,
    paddingVertical: SPACING.sm,
    paddingHorizontal: SPACING.lg,
    borderRadius: 999,
    marginTop: SPACING.xs,
  },
  abholenText: { color: '#FFFFFF', ...schrift('800'), fontSize: FONT_SIZE.caption },
});
