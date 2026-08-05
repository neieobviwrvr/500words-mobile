import { useState } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { router } from 'expo-router';
import { useAppState } from '../../state/AppState';
import { CATEGORY_BY_ID } from '../../data/categories';
import { getTheme, ACCENT_BLUE, ACCENT_ORANGE, ACCENT_PREMIUM } from '../../theme/tokens';

// S2 - Kategorie-Detail-Screen. Existiert laut CLAUDE.md nur fuer bereits
// freigeschaltete Kategorien (Grundwortschatz zaehlt als immer freigeschaltet).
// Vier Modi -> S4 Uebungs-Screen mit passendem mode-Parameter.

export function CategoryDetailScreen({ categoryId }: { categoryId: string }) {
  const { darkMode } = useAppState();
  const theme = getTheme(darkMode);
  const [premiumNoticeOpen, setPremiumNoticeOpen] = useState(false);

  const isGrundwortschatz = categoryId === 'grundwortschatz';
  const category = isGrundwortschatz ? { name: 'Grundwortschatz' } : CATEGORY_BY_ID[categoryId];
  const name = category?.name ?? categoryId;
  // Platzhalter, bis echtes Fortschritts-Tracking existiert (siehe CLAUDE.md-Backlog).
  const progressPct = 40;

  const startMode = (mode: 'spam' | 'woerter' | 'saetze') => {
    router.push({ pathname: '/exercise', params: { mode, categoryId } });
  };

  return (
    <View style={[styles.container, { backgroundColor: theme.pageBg }]}>
      <View style={styles.header}>
        <Pressable onPress={() => router.back()} style={styles.backBtn}>
          <Text style={[styles.backGlyph, { color: theme.text }]}>‹</Text>
        </Pressable>
        <Text style={[styles.title, { color: theme.text }]}>{name}</Text>
      </View>
      <Text style={styles.progress}>Progression {progressPct}% vollständig gelernt</Text>

      <View style={styles.modeList}>
        <Pressable onPress={() => startMode('spam')} style={[styles.modeButton, { backgroundColor: theme.modeBg }]}>
          <Text style={styles.modeButtonText}>komplette Kategorie durchspammen</Text>
        </Pressable>
        <Pressable onPress={() => startMode('woerter')} style={[styles.modeButton, { backgroundColor: theme.modeBg }]}>
          <Text style={styles.modeButtonText}>Wörter lernen</Text>
        </Pressable>
        <Pressable onPress={() => startMode('saetze')} style={[styles.modeButton, { backgroundColor: theme.modeBg }]}>
          <Text style={styles.modeButtonText}>Sätze lernen</Text>
        </Pressable>
        <Pressable
          onPress={() => setPremiumNoticeOpen((o) => !o)}
          style={[styles.premiumButton, { borderColor: theme.border, backgroundColor: theme.pathBoxBg }]}
        >
          <Text style={[styles.premiumButtonText, { color: theme.sub }]}>Konversationsmodus / Sprachbooster</Text>
          <View style={styles.premiumBadge}>
            <Text style={styles.premiumBadgeText}>PREMIUM</Text>
          </View>
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
  header: { flexDirection: 'row', alignItems: 'center', gap: 10, marginBottom: 8 },
  backBtn: { width: 32, height: 32, alignItems: 'center', justifyContent: 'center' },
  backGlyph: { fontSize: 26 },
  title: { fontWeight: '800', fontSize: 21 },
  progress: { color: ACCENT_ORANGE, fontWeight: '700', fontSize: 14, marginBottom: 26 },
  modeList: { gap: 12 },
  modeButton: { padding: 18, borderRadius: 16, borderWidth: 1.5, borderColor: ACCENT_BLUE, alignItems: 'center' },
  modeButtonText: { color: ACCENT_BLUE, fontWeight: '800', fontSize: 15, textAlign: 'center' },
  premiumButton: {
    padding: 18, borderRadius: 16, borderWidth: 1.5, alignItems: 'center', justifyContent: 'center',
    flexDirection: 'row', gap: 8,
  },
  premiumButtonText: { fontWeight: '800', fontSize: 15, textAlign: 'center' },
  premiumBadge: { backgroundColor: ACCENT_PREMIUM, paddingVertical: 3, paddingHorizontal: 7, borderRadius: 100 },
  premiumBadgeText: { color: '#fff', fontWeight: '800', fontSize: 9 },
  notice: { padding: 12, borderRadius: 12 },
});
