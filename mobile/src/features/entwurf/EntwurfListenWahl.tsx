import { Modal, Pressable, StyleSheet, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Feather } from '@expo/vector-icons';
import { E, SEITE, s } from './entwurfStil';

// Die Auswahl hinter dem Symbol an jeder Abschnitts-Ueberschrift
// (2026-09-26, Simon: "bei Klick soll sich ein Pop-Up öffnen bei dem der
// User auswählen kann zwischen 'Satzlisten' und 'Wortlisten'").
//
// **Es ist die Kategorie-Fassung der zwei Knoepfe ganz oben.** Die dort
// fuehren in den Grundwortschatz; hier kommt man in die Listen GENAU der
// Kategorie, neben deren Ueberschrift man getippt hat. Deshalb steht der
// Name auch ueber der Auswahl - sonst weiss man nach dem Tippen nicht mehr,
// zu welchem Abschnitt die Listen gehoeren.
//
// Ein Blatt von unten statt eines mittigen Kastens: der Daumen kommt
// naeher heran, und die Seite darunter bleibt sichtbar.

export function EntwurfListenWahl({
  kategorie,
  onSatzliste,
  onWortliste,
  onSchliessen,
}: {
  /** Name der Kategorie, oder `null` wenn nichts offen ist. */
  kategorie: string | null;
  onSatzliste: () => void;
  onWortliste: () => void;
  onSchliessen: () => void;
}) {
  const insets = useSafeAreaInsets();

  return (
    <Modal
      visible={kategorie !== null}
      transparent
      animationType="slide"
      onRequestClose={onSchliessen}
    >
      {/* Der Schleier schliesst beim Antippen - erwartetes Verhalten bei
          einem Blatt, und ohne ihn gaebe es ausser dem Abbrechen-Knopf
          keinen Weg zurueck. */}
      <Pressable style={styles.schleier} onPress={onSchliessen} accessibilityLabel="Schließen" />

      <View style={[styles.blatt, { paddingBottom: Math.max(insets.bottom, SEITE) }]}>
        <View style={styles.griff} />
        <Text style={styles.titel} numberOfLines={1}>
          {kategorie}
        </Text>

        <Wahl
          icon="list"
          label="Satzliste"
          hinweis="Alle Sätze dieser Kategorie zum Nachschlagen"
          onPress={onSatzliste}
        />
        <Wahl
          icon="book-open"
          label="Wortliste"
          hinweis="Die Wörter aus diesen Sätzen, nach Wortart sortiert"
          onPress={onWortliste}
        />

        <Pressable
          onPress={onSchliessen}
          accessibilityRole="button"
          style={({ pressed }) => [styles.abbrechen, pressed && styles.gedrueckt]}
        >
          <Text style={styles.abbrechenText}>Abbrechen</Text>
        </Pressable>
      </View>
    </Modal>
  );
}

function Wahl({
  icon,
  label,
  hinweis,
  onPress,
}: {
  icon: keyof typeof Feather.glyphMap;
  label: string;
  hinweis: string;
  onPress: () => void;
}) {
  return (
    <Pressable
      onPress={onPress}
      accessibilityRole="button"
      accessibilityLabel={label}
      accessibilityHint={hinweis}
      style={({ pressed }) => [styles.wahl, pressed && styles.gedrueckt]}
    >
      <View style={styles.wahlSymbol}>
        <Feather name={icon} size={19} color={E.blau} />
      </View>
      <View style={styles.wahlText}>
        <Text style={styles.wahlLabel}>{label}</Text>
        <Text style={styles.wahlHinweis} numberOfLines={2}>
          {hinweis}
        </Text>
      </View>
      <Feather name="chevron-right" size={19} color={E.grau} />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  gedrueckt: { opacity: 0.55 },

  schleier: { flex: 1, backgroundColor: 'rgba(15,23,42,0.35)' },
  blatt: {
    backgroundColor: E.grund,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingHorizontal: SEITE,
    paddingTop: 10,
    gap: 10,
  },
  griff: {
    alignSelf: 'center',
    width: 38,
    height: 4,
    borderRadius: 2,
    backgroundColor: E.linie,
    marginBottom: 6,
  },
  titel: { ...s('800'), fontSize: 18, color: E.text, paddingBottom: 4 },

  wahl: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 14,
    paddingVertical: 12,
    paddingHorizontal: 14,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: E.linie,
  },
  wahlSymbol: {
    width: 38,
    height: 38,
    borderRadius: 19,
    backgroundColor: E.blauHell,
    alignItems: 'center',
    justifyContent: 'center',
  },
  wahlText: { flex: 1, gap: 2 },
  wahlLabel: { ...s('700'), fontSize: 15, color: E.text },
  wahlHinweis: { ...s('500'), fontSize: 12, color: E.neben },

  abbrechen: { alignItems: 'center', paddingVertical: 12, marginTop: 2 },
  abbrechenText: { ...s('700'), fontSize: 14, color: E.neben },
});
