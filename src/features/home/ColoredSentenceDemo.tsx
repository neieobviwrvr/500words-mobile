import { StyleSheet, Text, View } from 'react-native';

// Demo fuer die Wortarten-Farbcodierung (Design-Entscheidung siehe CLAUDE.md):
// Nomen = blau, Verben = rot, Adjektive = gelb, Pronomen = violett.
// Andere Wortarten (Artikel, Praeposition, Adverb, Konjunktion...) bleiben
// bewusst unfarbig. Hier noch mit HANDVERLESEN getaggten Beispielsaetzen -
// echte Saetze aus phrasebook_master/schwedisch_phrasebook haben aktuell
// noch keine Wortart-Tags pro Einzelwort (nur auf Satzebene), das ist ein
// separater, noch offener Content-Schritt (siehe Backlog in CLAUDE.md).

type WordType = 'nomen' | 'verb' | 'adjektiv' | 'pronomen';

type TaggedWord = {
  text: string;
  type?: WordType;
};

const WORD_TYPE_COLORS: Record<WordType, string> = {
  nomen: '#2f6fd6',
  verb: '#d6392f',
  adjektiv: '#c9a227',
  pronomen: '#7b3fbf',
};

const EXAMPLE_SENTENCES: TaggedWord[][] = [
  [
    { text: 'Ich', type: 'pronomen' },
    { text: 'möchte', type: 'verb' },
    { text: 'heute' },
    { text: 'nach' },
    { text: 'Berlin', type: 'nomen' },
    { text: 'fahren.', type: 'verb' },
  ],
  [
    { text: 'Du', type: 'pronomen' },
    { text: 'kaufst', type: 'verb' },
    { text: 'ein' },
    { text: 'blaues', type: 'adjektiv' },
    { text: 'Auto.', type: 'nomen' },
  ],
  [
    { text: 'Die' },
    { text: 'rote', type: 'adjektiv' },
    { text: 'Katze', type: 'nomen' },
    { text: 'schläft.', type: 'verb' },
  ],
];

function ColoredSentenceView({ words }: { words: TaggedWord[] }) {
  return (
    <Text style={styles.sentence}>
      {words.map((w, i) => (
        <Text key={i} style={w.type ? { color: WORD_TYPE_COLORS[w.type] } : undefined}>
          {w.text}
          {i < words.length - 1 ? ' ' : ''}
        </Text>
      ))}
    </Text>
  );
}

export function ColoredSentenceDemo() {
  return (
    <View style={styles.container}>
      <View style={styles.legend}>
        <Text style={{ color: WORD_TYPE_COLORS.nomen }}>■ Nomen</Text>
        <Text style={{ color: WORD_TYPE_COLORS.verb }}>■ Verb</Text>
        <Text style={{ color: WORD_TYPE_COLORS.adjektiv }}>■ Adjektiv</Text>
        <Text style={{ color: WORD_TYPE_COLORS.pronomen }}>■ Pronomen</Text>
      </View>
      {EXAMPLE_SENTENCES.map((words, i) => (
        <ColoredSentenceView key={i} words={words} />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: 10,
  },
  legend: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
  },
  sentence: {
    fontSize: 17,
  },
});
