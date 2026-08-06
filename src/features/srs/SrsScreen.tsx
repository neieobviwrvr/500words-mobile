import { useState } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { router } from 'expo-router';
import { useAppState } from '../../state/AppState';
import { CATEGORIES } from '../../data/categories';
import { getTheme, ACCENT_BLUE, ACCENT_PREMIUM } from '../../theme/tokens';

// S5 - SRS-/Wiederholen-Auswahl-Screen.
// 2026-08-06 aus aktualisiertem Design-Prototyp umgebaut: kein Dropdown mit
// "alle"/Einzelkategorie-Filter mehr, sondern direkt drei Modus-Buttons
// (Woerter/Saetze/Konversation) wie auf S2, jeweils mit "x/13 Kategorien
// lernbar"-Unterzeile aus dem aktuellen Kaufstatus berechnet (Design-
// Backlog-Notiz: spaeter auf echte Supabase-Kaufdaten umstellen, sobald der
// Shop wirklich angebunden ist - aktuell laeuft "purchased" nur lokal im
// AppState, siehe CLAUDE.md). Konversationsmodus zeigt wie auf S2 nur einen
// Premium-Hinweis, navigiert (noch) nicht weiter.
// Echtes SRS-Faelligkeits-Filtern kommt erst mit dem SRS-System (SM-2/FSRS,
// siehe CLAUDE.md-Backlog - noch nicht implementiert) - aktuell startet
// jeder Button einfach eine Uebung ueber alle gekauften Kategorien.

export function SrsScreen() {
  const { darkMode, purchased } = useAppState();
  const theme = getTheme(darkMode);
  const [premiumNoticeOpen, setPremiumNoticeOpen] = useState(false);

  const purchasedCount = CATEGORIES.filter((c) => purchased[c.id]).length;
  const totalCategoryCount = CATEGORIES.length;

  const startMode = (mode: 'woerter' | 'saetze') => {
    router.push({ pathname: '/exercise', params: { mode, categoryId: 'alle', source: 'srs' } });
  };

  return (
    <View style={[styles.container, { backgroundColor: theme.pageBg }]}>
      <View style={styles.header}>
        <Pressable onPress={() => router.back()} style={styles.backBtn}>
          <Text style={[styles.backGlyph, { color: theme.text }]}>‹</Text>
        </Pressable>
        <Text style={[styles.title, { color: theme.text }]}>Spaced Repetition</Text>
      </View>

      <View style={styles.modeList}>
        <Pressable onPress={() => startMode('woerter')} style={[styles.modeButton, { backgroundColor: theme.modeBg }]}>
          <Text style={styles.modeButtonText}>Wörter lernen</Text>
          <Text style={[styles.modeSubtext, { color: theme.sub }]}>
            {purchasedCount}/{totalCategoryCount} Kategorien lernbar
          </Text>
        </Pressable>
        <Pressable onPress={() => startMode('saetze')} style={[styles.modeButton, { backgroundColor: theme.modeBg }]}>
          <Text style={styles.modeButtonText}>Sätze lernen</Text>
          <Text style={[styles.modeSubtext, { color: theme.sub }]}>
            {purchasedCount}/{totalCategoryCount} Kategorien lernbar
          </Text>
        </Pressable>
        <Pressable
          onPress={() => setPremiumNoticeOpen((o) => !o)}
          style={[styles.premiumButton, { borderColor: theme.border, backgroundColor: theme.pathBoxBg }]}
        >
          <View style={styles.premiumRow}>
            <Text style={[styles.modeButtonText, { color: theme.sub }]}>Konversationsmodus / Sprachbooster</Text>
            <View style={styles.premiumBadge}>
              <Text style={styles.premiumBadgeText}>PREMIUM</Text>
            </View>
          </View>
          <Text style={[styles.modeSubtext, { color: theme.sub }]}>
            {purchasedCount}/{totalCategoryCount} Kategorien lernbar
          </Text>
        </Pressable>
        {premiumNoticeOpen && (
          <View style={[styles.notice, { backgroundColor: theme.pathBoxBg }]}>
            <Text style={{ color: theme.sub, fontSize: 13 }}>
              Premium-Feature — noch nicht freigeschaltet. Verursacht laufende KI-Kosten pro Nutzung.
            </Text>
          </View>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 18 },
  header: { flexDirection: 'row', alignItems: 'center', gap: 10, marginBottom: 24 },
  backBtn: { width: 32, height: 32, alignItems: 'center', justifyContent: 'center' },
  backGlyph: { fontSize: 26 },
  title: { fontWeight: '800', fontSize: 22 },
  modeList: { gap: 12 },
  modeButton: { padding: 16, paddingVertical: 18, borderRadius: 16, alignItems: 'center', gap: 4 },
  modeButtonText: { color: ACCENT_BLUE, fontWeight: '800', fontSize: 16, textAlign: 'center' },
  modeSubtext: { fontWeight: '600', fontSize: 11 },
  premiumButton: { padding: 16, paddingVertical: 18, borderRadius: 16, borderWidth: 1.5, alignItems: 'center', gap: 4 },
  premiumRow: { flexDirection: 'row', alignItems: 'center', gap: 8 },
  premiumBadge: { backgroundColor: ACCENT_PREMIUM, paddingVertical: 3, paddingHorizontal: 7, borderRadius: 100 },
  premiumBadgeText: { color: '#fff', fontWeight: '800', fontSize: 9 },
  notice: { padding: 12, borderRadius: 12 },
});
