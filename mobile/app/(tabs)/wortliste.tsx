import { useLocalSearchParams } from 'expo-router';
import { VocabListScreen } from '../../src/features/vocab/VocabListScreen';
import { SwipeBackScreen } from '../../src/components';

// Wortliste einer Kategorie - zum Nachschlagen, nicht zum Durcharbeiten.
// Erreichbar ueber den kleinen Knopf in der Kategorie-Ueberschrift auf dem
// Lektionen-Screen - Rueckfall geht deshalb dorthin, nicht zum Startscreen.
export default function Wortliste() {
  const { categoryId } = useLocalSearchParams<{ categoryId?: string }>();
  return (
    <SwipeBackScreen fallback="/lektionen">
      <VocabListScreen categoryId={categoryId ?? 'grundwortschatz'} />
    </SwipeBackScreen>
  );
}
