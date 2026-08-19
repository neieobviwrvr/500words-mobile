import { useLocalSearchParams } from 'expo-router';
import { CheatsheetCategoryScreen } from '../../../src/features/cheatsheet/CheatsheetCategoryScreen';

export default function CheatsheetCategory() {
  const { groupId } = useLocalSearchParams<{ groupId: string }>();
  return <CheatsheetCategoryScreen groupId={groupId} />;
}
