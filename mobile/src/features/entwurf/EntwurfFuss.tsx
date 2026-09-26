import { Pressable, StyleSheet, Text, View } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { E, SEITE, s } from './entwurfStil';

// Der Fuss des Entwurfs (2026-09-26): zwei Knoepfe und darunter die eigene
// Leiste mit dem runden Knopf in der Mitte.
//
// **Warum der Entwurf eine EIGENE Leiste zeichnet:** die Vorlage tauscht
// "Lektionen" gegen einen Plus-Knopf in der Mitte. Die echte Leiste steht in
// `app/(tabs)/_layout.tsx` und gilt fuer die ganze App - die dafuer
// anzufassen hiesse, den Entwurf in den Bestand zu schieben. Deshalb liegt
// die Route seit heute AUSSERHALB der Tab-Gruppe und bringt ihre Leiste
// selbst mit. Eine neue Leiste laesst sich ohnehin nicht beurteilen, wenn
// die alte darunter steht.
//
// **Die Ziele sind echt.** Survival, Freunde und Profil fuehren in die
// richtigen Screens - so ist der Entwurf kein Bild, sondern begehbar, und
// man kommt auch wieder heraus.

export function FussKnoepfe({
  onGespraeche,
  onWiederholung,
}: {
  onGespraeche: () => void;
  onWiederholung: () => void;
}) {
  return (
    <View style={styles.knopfReihe}>
      <FussKnopf icon="message-square" label="Gespräche" onPress={onGespraeche} />
      <FussKnopf icon="refresh-cw" label="Wiederholung" onPress={onWiederholung} />
    </View>
  );
}

function FussKnopf({
  icon,
  label,
  onPress,
}: {
  icon: keyof typeof Feather.glyphMap;
  label: string;
  onPress: () => void;
}) {
  return (
    <Pressable
      onPress={onPress}
      accessibilityRole="button"
      accessibilityLabel={label}
      style={({ pressed }) => [styles.fussKnopf, pressed && styles.gedrueckt]}
    >
      <Feather name={icon} size={16} color={E.blau} />
      <Text style={styles.fussLabel}>{label}</Text>
    </Pressable>
  );
}

// ---------------------------------------------------------------------------
// Die Leiste des Entwurfs
// ---------------------------------------------------------------------------

export type LeistenZiel = {
  icon: keyof typeof Feather.glyphMap;
  label: string;
  onPress: () => void;
  aktiv?: boolean;
  /** Rote Zahl oben rechts am Symbol. */
  zahl?: number;
};

export function EntwurfLeiste({
  links,
  rechts,
  onPlus,
  unten,
}: {
  links: LeistenZiel[];
  rechts: LeistenZiel[];
  onPlus: () => void;
  /** Sicherheitsrand zum Home-Indikator. */
  unten: number;
}) {
  return (
    <View style={[styles.leiste, { paddingBottom: Math.max(unten, 10) }]}>
      {links.map((z) => (
        <LeistenKnopf key={z.label} ziel={z} />
      ))}

      <Pressable
        onPress={onPlus}
        accessibilityRole="button"
        accessibilityLabel="Neu"
        style={({ pressed }) => [styles.plus, pressed && styles.gedrueckt]}
      >
        <Feather name="plus" size={26} color="#FFFFFF" />
      </Pressable>

      {rechts.map((z) => (
        <LeistenKnopf key={z.label} ziel={z} />
      ))}
    </View>
  );
}

function LeistenKnopf({ ziel }: { ziel: LeistenZiel }) {
  const farbe = ziel.aktiv ? E.blau : E.neben;
  return (
    <Pressable
      onPress={ziel.onPress}
      accessibilityRole="button"
      accessibilityLabel={ziel.label}
      accessibilityState={{ selected: !!ziel.aktiv }}
      style={({ pressed }) => [styles.leistenKnopf, pressed && styles.gedrueckt]}
    >
      <View>
        <Feather name={ziel.icon} size={21} color={farbe} />
        {ziel.zahl ? (
          <View style={styles.zahlPunkt}>
            <Text style={styles.zahlText}>{ziel.zahl}</Text>
          </View>
        ) : null}
      </View>
      <Text style={[styles.leistenLabel, { color: farbe }]}>{ziel.label}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  gedrueckt: { opacity: 0.55 },

  knopfReihe: {
    flexDirection: 'row',
    gap: 12,
    paddingHorizontal: SEITE,
    paddingTop: 12,
    paddingBottom: 12,
  },
  fussKnopf: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    paddingVertical: 12,
    borderRadius: 100,
    borderWidth: 1,
    borderColor: E.linie,
    backgroundColor: E.grund,
  },
  fussLabel: { ...s('700'), fontSize: 14, color: E.text },

  leiste: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingTop: 8,
    borderTopWidth: 1,
    borderTopColor: E.linie,
    backgroundColor: E.grund,
  },
  leistenKnopf: { alignItems: 'center', gap: 3, minWidth: 56 },
  leistenLabel: { ...s('600'), fontSize: 11 },
  plus: {
    width: 46,
    height: 46,
    borderRadius: 23,
    backgroundColor: E.blau,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: -14,
  },
  zahlPunkt: {
    position: 'absolute',
    top: -5,
    right: -9,
    minWidth: 16,
    height: 16,
    borderRadius: 8,
    paddingHorizontal: 4,
    backgroundColor: E.rot,
    alignItems: 'center',
    justifyContent: 'center',
  },
  zahlText: { ...s('700'), fontSize: 10, color: '#FFFFFF' },
});
