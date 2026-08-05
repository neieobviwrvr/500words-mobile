import { useState } from 'react';
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { router } from 'expo-router';
import { useAppState } from '../../state/AppState';
import { CATEGORIES, DEFAULT_THEMEN_PRO_KATEGORIE, GRUNDWORTSCHATZ_THEMEN } from '../../data/categories';
import { getTheme, ACCENT_BLUE, ACCENT_ORANGE, NODE_DONE, NODE_LOCKED } from '../../theme/tokens';

// S1 - Startscreen (Pfad). Ersetzt PathScreenMockup: echte Navigation statt
// simuliertem Zustand, Struktur/Verhalten aus dem Claude-Design-Prototyp +
// App-Overlay-Spec.md ("Homescreen Sprache"):
// - "Sprache"-Dropdown: nur auf/zu-klappbar, kein echter Sprachwechsel
// - Ueberlebens-/Maximalwortschatz: Platzhalter ohne Funktion
// - Pfad-Knoten (Grundwortschatz-Themen + Themen jeder gekauften Kategorie)
//   -> S2 Kategorie-Detail-Screen
// - gesperrte Vorschau-Knoten -> S3 Shop
// - "Wiederholen + Ueben" -> S5 SRS-Auswahl, "Cheat-Sheet-Survival" -> S6

type Node = { key: string; label: string; done?: boolean; current?: boolean; locked?: boolean; onPress: () => void };
type Section = { title: string; titleColor: string; nodes: Node[]; dashedAfter?: boolean };

function themenToNodes(themen: string[], prefix: string, onPress: (label: string) => void): Node[] {
  return themen.map((label, i) => ({
    key: prefix + i,
    label: prefix.startsWith('grund') ? `Grundlagen – Thema ${label}` : `${prefix.replace(/^cat_/, '')} – Thema ${label}`,
    done: i < themen.length - 1,
    current: i === themen.length - 1,
    onPress: () => onPress(label),
  }));
}

export function PathScreen() {
  const { darkMode, purchased, targetLanguage } = useAppState();
  const theme = getTheme(darkMode);
  const [langOpen, setLangOpen] = useState(false);

  const purchasedCategories = CATEGORIES.filter((c) => purchased[c.id]);
  const lockedCategories = CATEGORIES.filter((c) => !purchased[c.id]).slice(0, 2);

  const sections: Section[] = [
    {
      title: 'Grundwortschatz',
      titleColor: ACCENT_BLUE,
      nodes: themenToNodes(GRUNDWORTSCHATZ_THEMEN, 'grund', () => router.push('/category/grundwortschatz')),
    },
    ...purchasedCategories.map((cat) => ({
      title: cat.name,
      titleColor: ACCENT_ORANGE,
      nodes: themenToNodes(DEFAULT_THEMEN_PRO_KATEGORIE, `cat_${cat.name}`, () => router.push(`/category/${cat.id}`)),
    })),
  ];
  if (lockedCategories.length > 0) {
    sections[sections.length - 1] = { ...sections[sections.length - 1], dashedAfter: true };
    sections.push({
      title: 'Gesperrt',
      titleColor: theme.sub,
      nodes: lockedCategories.flatMap((cat) =>
        DEFAULT_THEMEN_PRO_KATEGORIE.slice(0, 2).map((label, i) => ({
          key: `locked_${cat.id}_${i}`,
          label: `${cat.name} – Thema ${label}`,
          locked: true,
          onPress: () => router.push('/shop'),
        }))
      ),
    });
  }

  return (
    <View style={[styles.container, { backgroundColor: theme.pageBg }]}>
      <View style={styles.langWrap}>
        <Pressable
          onPress={() => setLangOpen((o) => !o)}
          style={[styles.langButton, { backgroundColor: theme.cardBg, borderColor: theme.border }]}
        >
          <Text style={[styles.langLabel, { color: theme.text }]}>Sprache</Text>
          <View style={styles.langRight}>
            <Text style={[styles.langValue, { color: theme.sub }]}>{targetLanguage}</Text>
            <Text style={{ color: theme.sub, transform: [{ rotate: langOpen ? '180deg' : '0deg' }] }}>▾</Text>
          </View>
        </Pressable>
        {langOpen && (
          <View style={[styles.langDropdown, { backgroundColor: theme.cardBg, borderColor: theme.border }]}>
            <View style={[styles.langRow, { backgroundColor: theme.modeBg }]}>
              <Text style={{ color: theme.text, fontWeight: '700' }}>{targetLanguage}</Text>
              <Text style={{ color: theme.text }}>✓</Text>
            </View>
            <Text style={[styles.langRowMuted, { color: theme.sub }]}>Französisch (bald)</Text>
            <Text style={[styles.langRowMuted, { color: theme.sub }]}>Schwedisch (bald)</Text>
          </View>
        )}
      </View>

      <View style={styles.wortschatzRow}>
        <View style={[styles.wortschatzBox, { borderColor: theme.border }]}>
          <Text style={[styles.wortschatzText, { color: theme.sub }]}>Überlebens­wortschatz</Text>
        </View>
        <View style={[styles.wortschatzBox, { borderColor: theme.border }]}>
          <Text style={[styles.wortschatzText, { color: theme.sub }]}>Maximal­wortschatz</Text>
        </View>
      </View>

      <View style={[styles.pathBox, { borderColor: theme.border, backgroundColor: theme.pathBoxBg }]}>
        <ScrollView contentContainerStyle={styles.pathBoxContent}>
          {sections.map((section, si) => (
            <View key={section.title + si}>
              <Text style={[styles.sectionTitle, { color: section.titleColor }]}>{section.title.toUpperCase()}</Text>
              {section.nodes.map((node, ni) => (
                <View key={node.key} style={styles.nodeRow}>
                  <View style={styles.nodeCircleCol}>
                    <View
                      style={[
                        styles.nodeCircle,
                        { backgroundColor: node.locked ? NODE_LOCKED : node.done ? NODE_DONE : ACCENT_ORANGE },
                      ]}
                    >
                      {node.locked && <Text style={styles.nodeGlyph}>🔒</Text>}
                      {node.done && !node.locked && <Text style={styles.nodeGlyph}>✓</Text>}
                      {node.current && !node.locked && !node.done && <Text style={styles.nodeGlyph}>●</Text>}
                    </View>
                    {ni < section.nodes.length - 1 && <View style={[styles.nodeLine, { backgroundColor: theme.border }]} />}
                  </View>
                  <Pressable onPress={node.onPress} style={styles.nodeLabelWrap}>
                    <Text style={[styles.nodeLabel, { color: node.locked ? theme.sub : theme.text }]}>{node.label}</Text>
                  </Pressable>
                </View>
              ))}
              {section.dashedAfter && <View style={[styles.dashedSeparator, { borderColor: theme.border }]} />}
            </View>
          ))}
        </ScrollView>
        <Text style={[styles.scrollHint, { color: theme.sub }]}>▾</Text>
      </View>

      <Pressable style={styles.primaryButton} onPress={() => router.push('/srs')}>
        <Text style={styles.primaryButtonText}>Wiederholen + Üben</Text>
      </Pressable>
      <Pressable
        style={[styles.secondaryButton, { borderColor: theme.border, backgroundColor: theme.cardBg }]}
        onPress={() => router.push('/cheatsheet')}
      >
        <Text style={[styles.secondaryButtonText, { color: theme.text }]}>Cheat‑Sheet‑Survival</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, gap: 12 },
  langWrap: { position: 'relative', zIndex: 5 },
  langButton: {
    flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between',
    paddingVertical: 12, paddingHorizontal: 16, borderWidth: 1.5, borderRadius: 14,
  },
  langLabel: { fontWeight: '800', fontSize: 19 },
  langRight: { flexDirection: 'row', alignItems: 'center', gap: 8 },
  langValue: { fontWeight: '600', fontSize: 14 },
  langDropdown: { position: 'absolute', top: 56, left: 0, right: 0, borderWidth: 1.5, borderRadius: 12, padding: 6, gap: 2 },
  langRow: { padding: 10, borderRadius: 8, flexDirection: 'row', justifyContent: 'space-between' },
  langRowMuted: { padding: 10, fontWeight: '600', fontSize: 14 },
  wortschatzRow: { flexDirection: 'row', gap: 8 },
  wortschatzBox: { flex: 1, paddingVertical: 11, paddingHorizontal: 10, borderWidth: 1.5, borderRadius: 12, alignItems: 'center' },
  wortschatzText: { fontWeight: '700', fontSize: 13, textAlign: 'center' },
  pathBox: { flex: 1, minHeight: 320, borderWidth: 1.5, borderRadius: 16, position: 'relative' },
  pathBoxContent: { padding: 16, paddingBottom: 30 },
  sectionTitle: { fontWeight: '800', fontSize: 12, letterSpacing: 0.6, marginBottom: 10, marginTop: 4 },
  nodeRow: { flexDirection: 'row', gap: 12 },
  nodeCircleCol: { width: 34, alignItems: 'center' },
  nodeCircle: { width: 34, height: 34, borderRadius: 17, alignItems: 'center', justifyContent: 'center' },
  nodeGlyph: { color: '#fff', fontWeight: '800', fontSize: 13 },
  nodeLine: { width: 2, flex: 1, minHeight: 22, marginTop: 2 },
  nodeLabelWrap: { flex: 1, paddingVertical: 2, paddingBottom: 22 },
  nodeLabel: { fontWeight: '700', fontSize: 15 },
  dashedSeparator: { borderTopWidth: 2, borderStyle: 'dashed', marginVertical: 2, marginBottom: 18 },
  scrollHint: { position: 'absolute', bottom: 8, left: 0, right: 0, textAlign: 'center', fontSize: 16 },
  primaryButton: { marginTop: 2, paddingVertical: 16, borderRadius: 16, backgroundColor: ACCENT_BLUE, alignItems: 'center' },
  primaryButtonText: { color: '#fff', fontWeight: '800', fontSize: 17 },
  secondaryButton: { paddingVertical: 14, borderRadius: 16, borderWidth: 1.5, alignItems: 'center' },
  secondaryButtonText: { fontWeight: '700', fontSize: 15 },
});
