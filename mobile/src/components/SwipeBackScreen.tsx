import { Animated, View } from 'react-native';
import { useSwipeBack } from './useSwipeBack';

// Duenne Huelle um `useSwipeBack()` fuer die 13 Screens, die hinter
// `href: null` in der Tab-Gruppe liegen (Nutzer-Wunsch 2026-08-23).
//
// Bewusst auf ROUTEN-Ebene angewendet, nicht in den einzelnen Feature-
// Screens: die Screens unterscheiden sich in ihrem Wurzel-Element (View,
// ScrollView, <Screen>), und ihre Zurueck-Pfeile in ihrer Absicherung (die
// meisten rufen ungeprueft `router.back()`, ein paar pruefen `canGoBack()`
// mit eigenem Rueckfall - siehe useSwipeBack.ts). Eine Huelle AUSSERHALB
// aendert an keinem davon etwas: sie legt sich nur um das fertige Ergebnis,
// unabhaengig davon, was der Screen selbst zeichnet.
//
// Bewusst NICHT auf den fuenf Tab-Wurzeln (Start, Lektionen, Survival,
// Freunde, Profil): ein Rechts-Swipe dort haette keine eindeutige Bedeutung
// (welcher "vorherige Screen"? ein anderer Tab?), und der Startscreen nutzt
// dieselbe Geste bereits fuer etwas anderes (Belohnungsseite oeffnen, siehe
// PathScreen.tsx).
export function SwipeBackScreen({
  children,
  fallback = '/',
}: {
  children: React.ReactNode;
  /** Wohin, wenn es keine App-Historie gibt (Neustart direkt auf der Route). */
  fallback?: string;
}) {
  const { panHandlers, style } = useSwipeBack(fallback);
  return (
    <View style={{ flex: 1 }} {...panHandlers}>
      <Animated.View style={[{ flex: 1 }, style]}>{children}</Animated.View>
    </View>
  );
}
