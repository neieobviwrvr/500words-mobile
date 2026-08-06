import { useLocalSearchParams } from 'expo-router';
import { CategoryDetailScreen } from '../../src/features/categoryDetail/CategoryDetailScreen';

// S2 - Kategorie-Detail-Screen. Nur fuer bereits freigeschaltete Kategorien
// (bzw. "grundwortschatz", das immer freigeschaltet ist) - siehe CLAUDE.md.
export default function CategoryDetail() {
  const { id, theme } = useLocalSearchParams<{ id: string; theme?: string }>();
  return <CategoryDetailScreen categoryId={id} themeLabel={theme} />;
}
