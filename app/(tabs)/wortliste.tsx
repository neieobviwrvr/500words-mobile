import { useLocalSearchParams } from 'expo-router';
import { VocabListScreen } from '../../src/features/vocab/VocabListScreen';

// Wortliste einer Kategorie - zum Nachschlagen, nicht zum Durcharbeiten.
// Erreichbar ueber den kleinen Knopf in der Kategorie-Ueberschrift auf dem
// Lektionen-Screen.
export default function Wortliste() {
  const { categoryId } = useLocalSearchParams<{ categoryId?: string }>();
  return <VocabListScreen categoryId={categoryId ?? 'grundwortschatz'} />;
}
