import { router } from 'expo-router';
import { ShopScreenMockup } from '../src/features/home/ShopScreenMockup';

// S3 - Shop-Screen. Platzhalter, wird durch den echten JSON-Entwurf ersetzt.
export default function ShopScreen() {
  return <ShopScreenMockup onBack={() => router.back()} />;
}
