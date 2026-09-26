import { Pressable, StyleSheet, Text, View } from 'react-native';
import { Feather, Ionicons } from '@expo/vector-icons';
import { Dropdown } from '../../components';
import type { DropdownOption } from '../../components';
import { LANGUAGES, getLanguage } from '../../data/languages';
import { E, SEITE, s } from './entwurfStil';

// Der Kopf des Entwurfs (2026-09-26, nach Simons Vorlage): Statuszeile,
// Niveau mit Balken, darunter die zwei Nachschlage-Knoepfe.

// ---------------------------------------------------------------------------
// Statuszeile
// ---------------------------------------------------------------------------
// Vier Anzeigen rechts. **Nur eine davon hat heute Daten**, und das steht so
// da, statt eine Zahl zu erfinden: die Vorlage zeigt "2" an der Flamme und
// "1" an der Glocke, aber die App zaehlt weder eine Streak noch
// Benachrichtigungen (siehe CLAUDE.md, Coins-Abschnitt: "es gibt bisher
// ueberhaupt keine Streak-Zaehlung"). Beide zeigen deshalb "-" und sagen es
// beim Antippen.
//
// Der Stern zaehlt ECHT: die heute bewerteten Antworten aus dem Lern-Tagebuch.
// Die Zahl daneben ist ein angenommenes Tagesziel - eine Einstellung dafuer
// gibt es noch nicht.

export function StatusReihe({
  sprachId,
  onSprache,
  heute,
  tagesziel,
  onHinweis,
}: {
  sprachId: string;
  onSprache: (id: string) => void;
  heute: number;
  tagesziel: number;
  onHinweis: (text: string) => void;
}) {
  const sprachen: DropdownOption[] = LANGUAGES.map((l) => ({
    id: l.id,
    label: l.label,
    disabled: !l.hasContent,
    note: l.hasContent ? undefined : 'bald',
  }));

  return (
    <View style={styles.statusReihe}>
      <View style={styles.sprachBlock}>
        <View style={styles.flaggenKreis}>
          <Dropdown
            compact
            rahmen="ohne"
            symbol={getLanguage(sprachId).flagge}
            options={sprachen}
            selectedId={sprachId}
            onSelect={onSprache}
            dark={false}
            title="Welche Sprache lernst du?"
            accessibilityLabel="Sprache"
          />
        </View>
        {/* Nur Zierde - der Pfeil gehoert optisch zur Flagge, das Tippziel
            ist die Flagge selbst. Ohne `pointerEvents` finge er den Tipp ab
            und nichts passierte. */}
        <View pointerEvents="none">
          <Feather name="chevron-down" size={16} color={E.neben} />
        </View>
      </View>

      <View style={styles.statusRechts}>
        <StatusWert
          icon="flame"
          farbe="#F97316"
          text="-"
          label="Tage am Stück"
          onPress={() => onHinweis('Eine Streak zählt die App noch nicht mit.')}
        />
        <StatusWert
          icon="star"
          farbe="#F59E0B"
          text={heute + ' / ' + tagesziel}
          label="Heute beantwortet"
          onPress={() =>
            onHinweis(
              heute > 0
                ? heute + ' Antworten heute. Ein Tagesziel lässt sich noch nicht einstellen.'
                : 'Heute noch nichts geübt.'
            )
          }
        />
        <StatusWert
          icon="chatbubble-ellipses"
          farbe={E.blau}
          label="Nachrichten"
          onPress={() => onHinweis('Nachrichten gibt es noch nicht.')}
        />
        <StatusWert
          icon="notifications"
          farbe={E.neben}
          label="Mitteilungen"
          onPress={() => onHinweis('Mitteilungen gibt es noch nicht.')}
        />
      </View>
    </View>
  );
}

function StatusWert({
  icon,
  farbe,
  text,
  label,
  onPress,
}: {
  icon: keyof typeof Ionicons.glyphMap;
  farbe: string;
  text?: string;
  label: string;
  onPress: () => void;
}) {
  return (
    <Pressable
      onPress={onPress}
      hitSlop={8}
      accessibilityRole="button"
      accessibilityLabel={text ? label + ': ' + text : label}
      style={({ pressed }) => [styles.statusWert, pressed && styles.gedrueckt]}
    >
      <Ionicons name={icon} size={17} color={farbe} />
      {text ? <Text style={styles.statusZahl}>{text}</Text> : null}
    </Pressable>
  );
}

// ---------------------------------------------------------------------------
// Niveau mit Balken
// ---------------------------------------------------------------------------

export function Niveaublock({
  titel,
  anteil,
  onPress,
}: {
  titel: string;
  anteil: number;
  onPress: () => void;
}) {
  const prozent = Math.round(anteil * 100);
  return (
    <View style={styles.niveau}>
      <Text style={styles.niveauTitel}>{titel}</Text>
      <Pressable
        onPress={onPress}
        accessibilityRole="button"
        accessibilityLabel={'Statistik, ' + prozent + ' Prozent geschafft'}
        hitSlop={10}
        style={({ pressed }) => [styles.balkenReihe, pressed && styles.gedrueckt]}
      >
        <View style={styles.spur}>
          {/* Mindestbreite wie im echten Balken (`MIN_FILL_WIDTH` in
              ProgressBar.tsx): bei 0% soll Farbe zu sehen sein - die ZAHL
              daneben bleibt trotzdem bei 0. */}
          <View style={[styles.fuellung, { width: `${Math.max(prozent, 3)}%` as const }]} />
        </View>
        <View style={styles.prozentPille}>
          <Text style={styles.prozentText}>{prozent}%</Text>
        </View>
      </Pressable>
    </View>
  );
}

// ---------------------------------------------------------------------------
// Satzliste / Wortliste
// ---------------------------------------------------------------------------

export function ListenKnoepfe({
  onSatzliste,
  onWortliste,
}: {
  onSatzliste: () => void;
  onWortliste: () => void;
}) {
  return (
    <View style={styles.listenReihe}>
      <ListenKnopf icon="list" label="Satzliste" onPress={onSatzliste} />
      <ListenKnopf icon="book-open" label="Wortliste" onPress={onWortliste} />
    </View>
  );
}

function ListenKnopf({
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
      style={({ pressed }) => [styles.listenKnopf, pressed && styles.gedrueckt]}
    >
      <Feather name={icon} size={17} color={E.blau} />
      <Text style={styles.listenLabel}>{label}</Text>
      <View style={styles.listenPfeil}>
        <Feather name="chevron-right" size={17} color={E.grau} />
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  gedrueckt: { opacity: 0.55 },

  statusReihe: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: SEITE,
    minHeight: 44,
  },
  sprachBlock: { flexDirection: 'row', alignItems: 'center', gap: 2 },
  flaggenKreis: {
    width: 34,
    height: 34,
    borderRadius: 17,
    backgroundColor: E.grauHell,
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
  },
  statusRechts: { flexDirection: 'row', alignItems: 'center', gap: 16 },
  statusWert: { flexDirection: 'row', alignItems: 'center', gap: 5 },
  statusZahl: { ...s('700'), fontSize: 13, color: E.text },

  niveau: { paddingHorizontal: SEITE, paddingTop: 14, gap: 10 },
  niveauTitel: { ...s('800'), fontSize: 21, color: E.text },
  balkenReihe: { flexDirection: 'row', alignItems: 'center', gap: 10 },
  spur: {
    flex: 1,
    height: 9,
    borderRadius: 5,
    backgroundColor: E.grauHell,
    overflow: 'hidden',
  },
  fuellung: { height: '100%', borderRadius: 5, backgroundColor: E.gruen },
  prozentPille: {
    backgroundColor: E.gruen,
    borderRadius: 100,
    paddingHorizontal: 9,
    paddingVertical: 3,
  },
  // Dunkle Schrift auf der Pille, seit das Gruen hell ist (2026-09-26):
  // Weiss auf #22C55E kaeme auf 2,3:1 und waere bei 12 Punkt kaum lesbar,
  // Dunkel darauf auf 7,8:1. Nebeneffekt, der zum Wunsch passt - die helle
  // Flaeche mit dunkler Schrift knallt staerker als weisse Schrift.
  prozentText: { ...s('800'), fontSize: 12, color: E.text },

  listenReihe: {
    flexDirection: 'row',
    gap: 12,
    paddingHorizontal: SEITE,
    paddingTop: 18,
  },
  listenKnopf: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 9,
    paddingVertical: 13,
    paddingHorizontal: 14,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: E.linie,
    backgroundColor: E.grund,
  },
  listenLabel: { ...s('700'), fontSize: 14, color: E.text },
  listenPfeil: { marginLeft: 'auto' },
});
