import { useLocalSearchParams } from 'expo-router';
import { KontoScreen } from '../../src/features/auth/KontoScreen';
import type { KontoGrund } from '../../src/data/demo';

// Konto anlegen oder anmelden. `grund` sagt, warum der Nutzer hier gelandet
// ist ('kaufen', 'freunde', 'gruppen', 'abgleich') - der Screen zeigt den
// passenden Satz, statt eine Huerde ohne Begruendung zu sein.
export default function Konto() {
  const { grund } = useLocalSearchParams<{ grund?: KontoGrund }>();
  return <KontoScreen grund={grund} />;
}
