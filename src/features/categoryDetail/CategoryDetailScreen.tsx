import { useState } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { router } from 'expo-router';
import { useAppState } from '../../state/AppState';
import { CATEGORY_BY_ID } from '../../data/categories';
import { getTheme, ACCENT_BLUE, ACCENT_ORANGE, ACCENT_PREMIUM, schrift } from '../../theme/tokens';

// S2 - Kategorie-Detail-Screen. Existiert laut CLAUDE.md nur fuer bereits
// freigeschaltete Kategorien (Grundwortschatz zaehlt als immer freigeschaltet).
// Vier Modi -> S4 Uebungs-Screen mit passendem mode-Parameter.

export function CategoryDetailScreen({ categoryId, themeLabel }: { categoryId: string; themeLabel?: string }) {
  const { darkMode } = useAppState();
  const theme = getTheme(darkMode);
  // Der native Header ist app-weit aus (app/_layout.tsx), jeder Screen
  // zeichnet seinen eigenen. Ohne diesen Einsatz liegt die Ueberschrift unter
  // der Statusleiste bzw. der Kamera-Insel und wird verdeckt.
  const insets = useSafeAreaInsets();
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
    <View style={[styles.container, { backgroundColor: theme.pageBg, paddingTop: insets.top + CONTAINER_PADDING }]}>
      <View style={styles.header}>
        <Pressable
          onPress={() => router.back()}
          style={styles.backBtn}
          accessibilityRole="button"
          accessibilityLabel="Zurück"
        >
          <Text style={[styles.backGlyph, { color: theme.text }]}>‹</Text>
        </Pressable>
        <Text style={[styles.title, { color: theme.text }]}>{name}</Text>
      </View>
      {/* Zeigt, von welchem Pfad-Knoten (Thema) aus S1 hierher gesprungen
          wurde - aus dem 2026-08-06-Design-Update uebernommen. Rein
          informativ, filtert aktuell noch nichts (echte Thema-Filterung
          braucht Content-Chunking, siehe CLAUDE.md-Backlog S1). */}
      {!!themeLabel && <Text style={[styles.themeSubtitle, { color: theme.sub }]}>{themeLabel}</Text>}
      <Text style={styles.progress}>Progression {progressPct}% vollständig gelernt</Text>

      <View style={styles.modeList}>
        <Pressable
          onPress={() => startMode('spam')}
          style={[styles.modeButton, { backgroundColor: theme.modeBg }]}
          accessibilityRole="button"
          accessibilityLabel="Komplette Kategorie durchspammen"
          accessibilityHint={`Übt alle Inhalte aus ${name} gemischt`}
        >
          <Text style={styles.modeButtonText}>komplette Kategorie durchspammen</Text>
        </Pressable>
        <Pressable
          onPress={() => startMode('woerter')}
          style={[styles.modeButton, { backgroundColor: theme.modeBg }]}
          accessibilityRole="button"
          accessibilityLabel="Wörter lernen"
          accessibilityHint={`Übt die Wörter aus ${name}`}
        >
          <Text style={styles.modeButtonText}>Wörter lernen</Text>
        </Pressable>
        <Pressable
          onPress={() => startMode('saetze')}
          style={[styles.modeButton, { backgroundColor: theme.modeBg }]}
          accessibilityRole="button"
          accessibilityLabel="Sätze lernen"
          accessibilityHint={`Übt die Sätze aus ${name}`}
        >
          <Text style={styles.modeButtonText}>Sätze lernen</Text>
        </Pressable>
        <Pressable
          onPress={() => setPremiumNoticeOpen((o) => !o)}
          style={[styles.premiumButton, { borderColor: theme.border, backgroundColor: theme.pathBoxBg }]}
          accessibilityRole="button"
          // Der PREMIUM-Status steckt sonst nur in einem farbigen Badge.
          accessibilityLabel="Konversationsmodus / Sprachbooster, Premium"
          accessibilityHint="Zeigt den Hinweis zum Premium-Feature"
          accessibilityState={{ expanded: premiumNoticeOpen }}
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

// Innenabstand des Wurzel-Elements. Steht als Konstante da, weil die
// Ueberschrift ihn zum Sicherheitsrand DAZUrechnen muss - die
// Einzelangabe `paddingTop` wuerde das `padding` unten sonst schlagen
// und der Kopf klebte oben ohne Luft an der Statusleiste.
const CONTAINER_PADDING = 18;

const styles = StyleSheet.create({
  container: { flex: 1, padding: CONTAINER_PADDING },
  header: { flexDirection: 'row', alignItems: 'center', gap: 10, marginBottom: 8 },
  backBtn: { width: 32, height: 32, alignItems: 'center', justifyContent: 'center' },
  backGlyph: { fontSize: 26 },
  title: { ...schrift('800'), fontSize: 21 },
  themeSubtitle: { ...schrift('600'), fontSize: 14, marginLeft: 42, marginTop: -4, marginBottom: 10 },
  progress: { color: ACCENT_ORANGE, ...schrift('700'), fontSize: 14, marginBottom: 26 },
  modeList: { gap: 12 },
  modeButton: { padding: 18, borderRadius: 16, borderWidth: 1.5, borderColor: ACCENT_BLUE, alignItems: 'center' },
  modeButtonText: { color: ACCENT_BLUE, ...schrift('800'), fontSize: 15, textAlign: 'center' },
  premiumButton: {
    padding: 18, borderRadius: 16, borderWidth: 1.5, alignItems: 'center', justifyContent: 'center',
    flexDirection: 'row', gap: 8,
  },
  premiumButtonText: { ...schrift('800'), fontSize: 15, textAlign: 'center' },
  premiumBadge: { backgroundColor: ACCENT_PREMIUM, paddingVertical: 3, paddingHorizontal: 7, borderRadius: 100 },
  premiumBadgeText: { color: '#fff', ...schrift('800'), fontSize: 9 },
  notice: { padding: 12, borderRadius: 12 },
});
