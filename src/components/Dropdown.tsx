import { useState } from 'react';
import { Modal, Pressable, StyleSheet, Text, View } from 'react-native';
import { Feather } from '@expo/vector-icons';
import {
  getTheme,
  ACCENT_ORANGE,
  RADIUS,
  SPACING,
  FONT_SIZE,
  FONT_FAMILY,
  LINE_HEIGHT,
} from '../theme/tokens';

// Auswahlfeld im Babbel-Stil: eine ruhige Zeile mit Pfeil, die eine Liste
// von unten hereinschiebt.
//
// React Native hat kein natives Auswahlfeld - deshalb selbst gebaut statt
// ein weiteres Paket dafuer aufzunehmen. Der Aufbau entspricht dem
// Referenzbild (`Screenplanung/S1 - Sprachauswahl/Babbel_Sprache.jpeg`):
// dort ist "Ich spreche" ebenfalls eine Zeile mit Chevron, kein Radioknopf.

export type DropdownOption = {
  id: string;
  label: string;
  /** Nicht waehlbar - z.B. Sprachen, die es noch nicht gibt. */
  disabled?: boolean;
  /** Kleiner Zusatz rechts, z.B. "bald verfuegbar". */
  note?: string;
};

type Props = {
  options: DropdownOption[];
  selectedId: string;
  onSelect: (id: string) => void;
  dark: boolean;
  /** Ueberschrift der aufgeklappten Liste. */
  title: string;
  /** Barrierefreier Name des Feldes, z.B. "Ich spreche". */
  accessibilityLabel: string;
  /**
   * Schmale Fassung fuer Kopfzeilen (S1). Dieselbe Liste, nur ein kleineres
   * Feld: im Onboarding fuellt das Feld die Seitenbreite, in einer Kopfzeile
   * steht es neben anderen Knoepfen. Bleibt bei 44pt Hoehe - das ist das
   * kleinste sinnvolle Tippziel, darunter faengt das Danebentippen an.
   */
  compact?: boolean;
};

export function Dropdown({
  options,
  selectedId,
  onSelect,
  dark,
  title,
  accessibilityLabel,
  compact = false,
}: Props) {
  const theme = getTheme(dark);
  const [open, setOpen] = useState(false);
  const selected = options.find((o) => o.id === selectedId);

  return (
    <>
      <Pressable
        onPress={() => setOpen(true)}
        accessibilityRole="button"
        accessibilityLabel={`${accessibilityLabel}: ${selected?.label ?? 'nicht gewählt'}`}
        accessibilityHint="Öffnet die Auswahl"
        style={({ pressed }) => [
          styles.field,
          compact && styles.fieldCompact,
          {
            backgroundColor: theme.cardBg,
            borderColor: theme.border,
            opacity: pressed ? 0.7 : 1,
          },
        ]}
      >
        <Text style={[compact ? styles.fieldValueCompact : styles.fieldValue, { color: theme.text }]}>
          {selected?.label ?? '—'}
        </Text>
        <Feather name="chevron-down" size={compact ? 18 : 22} color={theme.sub} />
      </Pressable>

      <Modal
        visible={open}
        transparent
        animationType="slide"
        onRequestClose={() => setOpen(false)}
      >
        {/* Tippen neben die Liste schliesst sie - erwartetes Verhalten bei
            einem von unten hereingeschobenen Blatt. */}
        <Pressable
          style={styles.backdrop}
          accessibilityRole="button"
          accessibilityLabel="Auswahl schließen"
          onPress={() => setOpen(false)}
        />

        <View style={[styles.sheet, { backgroundColor: theme.pageBg, borderTopColor: theme.border }]}>
          <Text style={[styles.sheetTitle, { color: theme.text }]}>{title}</Text>

          {options.map((o) => {
            const active = o.id === selectedId;
            return (
              <Pressable
                key={o.id}
                disabled={o.disabled}
                onPress={() => {
                  onSelect(o.id);
                  setOpen(false);
                }}
                accessibilityRole="radio"
                accessibilityState={{ checked: active, disabled: o.disabled }}
                accessibilityLabel={o.note ? `${o.label}, ${o.note}` : o.label}
                style={({ pressed }) => [
                  styles.option,
                  {
                    borderColor: theme.border,
                    opacity: o.disabled ? 0.45 : pressed ? 0.7 : 1,
                  },
                ]}
              >
                <Text style={[styles.optionLabel, { color: theme.text }]}>{o.label}</Text>
                {o.note && <Text style={[styles.optionNote, { color: theme.sub }]}>{o.note}</Text>}
                {active && <Feather name="check" size={20} color={ACCENT_ORANGE} />}
              </Pressable>
            );
          })}
        </View>
      </Modal>
    </>
  );
}

const styles = StyleSheet.create({
  field: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderWidth: 1,
    borderRadius: RADIUS.md,
    paddingHorizontal: SPACING.lg,
    minHeight: 62,
  },
  fieldCompact: {
    minHeight: 44,
    paddingHorizontal: SPACING.md,
    gap: SPACING.xs,
  },
  fieldValue: {
    fontSize: FONT_SIZE.bodyLg,
    lineHeight: LINE_HEIGHT.bodyLg,
    fontWeight: '700',
  },
  fieldValueCompact: {
    fontSize: FONT_SIZE.body,
    lineHeight: LINE_HEIGHT.body,
    fontWeight: '700',
  },
  backdrop: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.35)',
  },
  sheet: {
    borderTopLeftRadius: RADIUS.lg,
    borderTopRightRadius: RADIUS.lg,
    borderTopWidth: 1,
    paddingHorizontal: SPACING.xl,
    paddingTop: SPACING.xl,
    paddingBottom: SPACING.xxxl,
  },
  sheetTitle: {
    fontFamily: FONT_FAMILY.serif,
    fontSize: FONT_SIZE.h2,
    lineHeight: LINE_HEIGHT.h2,
    marginBottom: SPACING.lg,
  },
  option: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: SPACING.md,
    paddingVertical: SPACING.lg,
    borderTopWidth: StyleSheet.hairlineWidth,
  },
  optionLabel: {
    flex: 1,
    fontSize: FONT_SIZE.bodyLg,
    lineHeight: LINE_HEIGHT.bodyLg,
    fontWeight: '700',
  },
  optionNote: {
    fontSize: FONT_SIZE.caption,
  },
});
