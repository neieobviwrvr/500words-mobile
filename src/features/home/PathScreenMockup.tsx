import { ScrollView, StyleSheet, Text, View } from 'react-native';

// Rein statischer optischer Mockup des S1-Startscreens (Pfad), auf Basis des
// Whiteboard-Entwurfs vom 2026-08-05 (JSON-Struktur vom Nutzer). Bewusst OHNE
// Interaktionen (kein onPress, keine echten Daten) - reiner Design-Check.
// Layout-Prinzip aus CLAUDE.md: Pfad-Box ist eigener scrollbarer Container
// mit fester Hoehe, "Wiederholen + Ueben"-Button liegt AUSSERHALB davon, fix.

type NodeState = 'done' | 'current' | 'locked';

type PathNode = {
  label?: string; // gesetzt = Kategorie-Bubble (blauer Rahmen), sonst reiner Punkt
  state: NodeState;
};

type PathSection = {
  nodes: PathNode[];
};

// 1:1 aus dem vom Nutzer gelieferten JSON-Pfad, nur um den Zustand (grün
// erledigt / orange aktuell / grau gesperrt) ergaenzt, wie im Whiteboard-Bild
// gezeigt.
const SECTIONS: PathSection[] = [
  {
    nodes: [
      { label: 'Grundlagen 1', state: 'done' },
      { label: 'Grundlagen 2', state: 'done' },
      { label: 'Grundlagen 3', state: 'done' },
    ],
  },
  {
    nodes: [
      { label: 'Club + Drinking', state: 'current' },
      { label: 'Praxis 1', state: 'current' },
      { label: 'Praxis 2', state: 'current' },
      { label: 'Praxis 3', state: 'current' },
      { label: 'Praxis 4', state: 'current' },
    ],
  },
  {
    nodes: [
      { label: 'Culture / Immersion', state: 'locked' },
      { label: 'Anwendung 1', state: 'locked' },
      { label: 'Anwendung 2', state: 'locked' },
    ],
  },
];

const STATE_COLORS: Record<NodeState, string> = {
  done: '#3fae4a',
  current: '#e2822c',
  locked: '#9aa0a6',
};

function PathNodeView({ node }: { node: PathNode }) {
  const color = STATE_COLORS[node.state];
  if (node.label) {
    return (
      <View style={[styles.bubble, { borderColor: color }]}>
        <Text style={{ color }}>{node.label}</Text>
        {node.state === 'locked' && <Text style={styles.lock}>🔒</Text>}
      </View>
    );
  }
  return <View style={[styles.dot, { backgroundColor: color }]} />;
}

export function PathScreenMockup() {
  return (
    <View style={styles.container}>
      <View style={styles.langHeader}>
        <Text style={styles.langHeaderText}>Sprache ▾</Text>
      </View>

      {/* Scrollbare Pfad-Box - eigener Container mit fester Hoehe */}
      <ScrollView style={styles.pathBox} contentContainerStyle={styles.pathBoxContent}>
        {SECTIONS.map((section, sectionIndex) => (
          <View key={sectionIndex}>
            {section.nodes.map((node, nodeIndex) => (
              <PathNodeView key={nodeIndex} node={node} />
            ))}
            {sectionIndex < SECTIONS.length - 1 && <View style={styles.dashedSeparator} />}
          </View>
        ))}
      </ScrollView>

      {/* Fix ausserhalb der Scroll-Box, wie in CLAUDE.md spezifiziert */}
      <View style={styles.stickyButton}>
        <Text style={styles.stickyButtonText}>Wiederholen + Üben</Text>
      </View>
      <View style={styles.cheatSheetButton}>
        <Text style={styles.cheatSheetButtonText}>Cheat-Sheet Survival</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    gap: 12,
  },
  langHeader: {
    borderWidth: 1,
    borderColor: '#333',
    borderRadius: 6,
    paddingVertical: 6,
    paddingHorizontal: 12,
    alignSelf: 'flex-start',
  },
  langHeaderText: {
    fontSize: 16,
  },
  pathBox: {
    height: 380,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    backgroundColor: '#fafafa',
  },
  pathBoxContent: {
    alignItems: 'center',
    paddingVertical: 20,
    gap: 10,
  },
  bubble: {
    borderWidth: 2,
    borderRadius: 20,
    paddingVertical: 8,
    paddingHorizontal: 14,
    backgroundColor: '#fff',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  lock: {
    fontSize: 12,
  },
  dot: {
    width: 18,
    height: 18,
    borderRadius: 9,
  },
  dashedSeparator: {
    borderBottomWidth: 1,
    borderStyle: 'dashed',
    borderColor: '#bbb',
    width: 200,
    marginVertical: 8,
  },
  stickyButton: {
    borderWidth: 2,
    borderColor: '#3a7bd5',
    borderRadius: 24,
    paddingVertical: 12,
    alignItems: 'center',
  },
  stickyButtonText: {
    color: '#3a7bd5',
    fontWeight: '600',
    fontSize: 16,
  },
  cheatSheetButton: {
    borderWidth: 1,
    borderColor: '#333',
    borderRadius: 8,
    paddingVertical: 10,
    alignItems: 'center',
  },
  cheatSheetButtonText: {
    fontSize: 15,
  },
});
