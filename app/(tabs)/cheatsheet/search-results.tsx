import { SearchResultsScreen } from '../../../src/features/cheatsheet/SearchResultsScreen';
import { SwipeBackScreen } from '../../../src/components';

export default function SearchResults() {
  return (
    <SwipeBackScreen fallback="/survival">
      <SearchResultsScreen />
    </SwipeBackScreen>
  );
}
