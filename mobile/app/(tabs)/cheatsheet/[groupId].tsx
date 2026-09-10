import { useLocalSearchParams } from 'expo-router';
import { CheatsheetCategoryScreen } from '../../../src/features/cheatsheet/CheatsheetCategoryScreen';
import { SwipeBackScreen } from '../../../src/components';

// Rueckfall '/survival': man kommt immer von dort, direkt hinter der Geste
// gibt es also keinen anderen sinnvollen Punkt.
export default function CheatsheetCategory() {
  const { groupId } = useLocalSearchParams<{ groupId: string }>();
  return (
    <SwipeBackScreen fallback="/survival">
      <CheatsheetCategoryScreen groupId={groupId} />
    </SwipeBackScreen>
  );
}
