import { ShopScreen } from '../../src/features/shop/ShopScreen';
import { SwipeBackScreen } from '../../src/components';

// S3 - Shop-Screen. Grid-Layout (Nutzer-Entscheidung 2026-08-05), radialer
// Skilltree ist fuer spaeter vorgemerkt (siehe CLAUDE.md).
export default function Shop() {
  return (
    <SwipeBackScreen>
      <ShopScreen />
    </SwipeBackScreen>
  );
}
