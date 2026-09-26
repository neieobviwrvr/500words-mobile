import { SwipeBackScreen } from '../src/components';
import { EntwurfScreen } from '../src/features/entwurf/EntwurfScreen';

// Der Start-Entwurf (2026-09-26). Erreichbar allein ueber den Knopf oben auf
// Start (`features/entwurf/EntwurfKnopf.tsx`).
//
// **Liegt AUSSERHALB der Tab-Gruppe**, anders als beim ersten Anlauf gestern:
// die Vorlage bringt eine eigene Leiste mit (Plus-Knopf statt "Lektionen"),
// und die laesst sich nicht beurteilen, wenn die echte darunter steht. Die
// echte Leiste dafuer anzufassen hiesse, den Entwurf in den Bestand zu
// schieben - genau das soll er nicht.
//
// VOR DEM LAUNCH weg, zusammen mit `features/entwurf/`.
export default function Entwurf() {
  return (
    <SwipeBackScreen fallback="/">
      <EntwurfScreen />
    </SwipeBackScreen>
  );
}
