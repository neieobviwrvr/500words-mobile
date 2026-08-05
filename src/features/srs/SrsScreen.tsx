import { useState } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { router } from 'expo-router';
import { useAppState } from '../../state/AppState';
import { CATEGORIES } from '../../data/categories';
import { getTheme, ACCENT_BLUE } from '../../theme/tokens';

// S5 - SRS-/Wiederholen-Auswahl-Screen. Laut App-Overlay-Spec.md aktuell
// komplett ohne Funktion (reiner Platzhalter) - Dropdown zeigt aber schon
// echt die freigeschalteten Kategorien. "Loslegen" fuehrt zum Uebungs-Screen
// (S4), echtes SRS-Faelligkeits-Filtern kommt erst mit dem SRS-System
// (SM-2/FSRS, siehe CLAUDE.md-Backlog - noch nicht implementiert).

export function SrsScreen() {
  const { darkMode, purchased, srsSelected, setSrsSelected } = useAppState();
  const theme = getTheme(darkMode);
  const [open, setOpen] = useState(false);

  const purchasedCategories = CATEGORIES.filter((c) => purchased[c.id]);
  const options = [{ id: 'alle', label: '– alle –' }, ...purchasedCategories.map((c) => ({ id: c.id, label: `– ${c.name} –` }))];
  const currentLabel = options.find((o) => o.id === srsSelected)?.label ?? '– alle –';

  return (
    <View style={[styles.container, { backgroundColor: theme.pageBg }]}>
      <View style={styles.header}>
        <Pressable onPress={() => router.back()} style={styles.backBtn}>
          <Text style={[styles.backGlyph, { color: theme.text }]}>‹</Text>
        </Pressable>
        <Text style={[styles.title, { color: theme.text }]}>Spaced Repetition</Text>
      </View>

      <View style={[styles.dropdownBox, { borderColor: theme.border }]}>
        <Pressable onPress={() => setOpen((o) => !o)} style={[styles.dropdownHeader, { backgroundColor: theme.cardBg }]}>
          <Text style={[styles.dropdownHeaderText, { color: theme.text }]}>Welche Kategorien willst du üben?</Text>
          <Text style={{ color: theme.sub }}>▾</Text>
        </Pressable>
        {open &&
          options.map((opt) => (
            <Pressable
              key={opt.id}
              onPress={() => {
                setSrsSelected(opt.id);
                setOpen(false);
              }}
              style={[
                styles.optionRow,
                { borderTopColor: theme.border, backgroundColor: srsSelected === opt.id ? theme.modeBg : theme.cardBg },
              ]}
            >
              <Text style={{ color: theme.text, fontWeight: '600', fontSize: 14 }}>{opt.label}</Text>
            </Pressable>
          ))}
      </View>
      {!open && <Text style={[styles.currentSelection, { color: theme.sub }]}>Aktuell: {currentLabel}</Text>}

      <Pressable
        style={styles.startButton}
        onPress={() => router.push({ pathname: '/exercise', params: { mode: 'srs', categoryId: srsSelected } })}
      >
        <Text style={styles.startButtonText}>Loslegen</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 18 },
  header: { flexDirection: 'row', alignItems: 'center', gap: 10, marginBottom: 24 },
  backBtn: { width: 32, height: 32, alignItems: 'center', justifyContent: 'center' },
  backGlyph: { fontSize: 26 },
  title: { fontWeight: '800', fontSize: 22 },
  dropdownBox: { borderWidth: 1.5, borderRadius: 14, overflow: 'hidden' },
  dropdownHeader: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', padding: 16 },
  dropdownHeaderText: { fontWeight: '700', fontSize: 14 },
  optionRow: { padding: 13, borderTopWidth: 1 },
  currentSelection: { marginTop: 8, fontSize: 13 },
  startButton: {
    marginTop: 28, alignSelf: 'center', paddingVertical: 16, paddingHorizontal: 44,
    borderRadius: 100, borderWidth: 2, borderColor: ACCENT_BLUE,
  },
  startButtonText: { color: ACCENT_BLUE, fontWeight: '800', fontSize: 17 },
});
