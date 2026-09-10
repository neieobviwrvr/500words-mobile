import { useRef } from 'react';
import { Animated, Easing, PanResponder, ViewStyle } from 'react-native';
import { router } from 'expo-router';

// Rechts-Swipe = zurueck (Nutzer-Wunsch 2026-08-23). Ist man in einer
// Lektion, kommt man damit zum Punkt direkt davor - dieselbe Aktion wie der
// Zurueck-Pfeil, nur ohne ihn treffen zu muessen.
//
// Dieselbe Mechanik wie der Rechts-Swipe auf S1 (PathScreen.tsx), dort
// oeffnet er die Belohnungsseite. Bewusst NICHT zusammengelegt: die
// Zielaktion unterscheidet sich (push vs. zurueck), und PathScreens Geste
// ist bereits im Einsatz - ein gemeinsamer Umbau haette dort ein Risiko ohne
// Nutzen fuer diese Aenderung.
//
// PanResponder statt react-native-gesture-handler: dieselbe Begruendung wie
// bei PathScreen - fuer eine einzelne Wischgeste reicht der eingebaute Weg.
// gesture-handler/reanimated liegen zwar transitiv im Baum (Abhaengigkeit
// von expo-router), sind aber nicht projekteigen eingebunden; sie extra
// einzubinden waere ein weiteres natives Modul samt neuem Build fuer eine
// einzelne Geste.
//
// KEINE Randbeschraenkung (anders als iOS' eigene Kante-zu-Kante-Geste):
// keiner der Screens, die diesen Haken nutzen, hat eigenen horizontalen
// Scroll-Inhalt, der damit kollidieren koennte - geprueft ueber alle
// betroffenen Screens hinter `href: null`.
//
// IMMER MIT ABSICHERUNG, nicht nur bei den Screens, die es heute schon tun:
// `router.back()` ohne `canGoBack()`-Pruefung quittiert der Navigator mit
// "The action 'GO_BACK' was not handled", wenn der Screen ohne App-Historie
// geoeffnet wurde (Neustart direkt auf der Route, tiefer Link). Das ist ein
// bekannter, bisher nur nicht aufgefallener Fall - siehe der Kommentar zu
// `zurueckZumPfad()` in LessonScreen.tsx, der genau das fuer Shop, Kategorie,
// Uebung, Cheat-Sheet und Belohnungen als offen notiert. Eine Wischgeste
// macht das Zurueckgehen haeufiger als vorher, darum ist die Absicherung hier
// Pflicht und nicht optional.

const SWIPE_DAMPING = 0.4;
const SWIPE_MAX_DRAG = 64;
const SWIPE_SPRING = { friction: 6, tension: 28 };
const SWIPE_EXIT_DURATION = 220;
const SWIPE_CLAIM = 20;
const SWIPE_DISTANCE = 90;
const SWIPE_VELOCITY = 0.5;

export function useSwipeBack(fallback: string = '/') {
  // Der Wert wird bei jeder Fingerbewegung aus JS gesetzt (die Koordinaten
  // gibt es nur dort) - deshalb ueberall `useNativeDriver: false`, dieselbe
  // Begruendung wie in PathScreen.tsx: gemischt mit dem nativen Treiber
  // vertraegt sich direktes `setValue()` schlecht.
  const drag = useRef(new Animated.Value(0)).current;

  const zurueck = () => {
    if (router.canGoBack()) router.back();
    // `as never`: `fallback` ist bewusst ein einfacher String statt eines
    // getippten Href, damit dieser Haken nicht an expo-routers generiertem
    // Routentyp haengt. Aufrufer geben echte Routen ('/', '/lektionen',
    // '/survival'), genau wie es die bestehenden Bildschirme bereits ohne
    // Typisierung tun (z.B. VocabListScreen.tsx).
    else router.replace(fallback as never);
  };

  const swipe = useRef(
    PanResponder.create({
      onMoveShouldSetPanResponder: (_e, g) =>
        g.dx > SWIPE_CLAIM && Math.abs(g.dx) > Math.abs(g.dy) * 2,

      onPanResponderMove: (_e, g) => {
        drag.setValue(Math.min(Math.max(g.dx, 0) * SWIPE_DAMPING, SWIPE_MAX_DRAG));
      },

      onPanResponderRelease: (_e, g) => {
        const ausgeloest =
          g.dx > SWIPE_DISTANCE || (g.dx > SWIPE_CLAIM && g.vx > SWIPE_VELOCITY);

        if (ausgeloest) {
          // Erst ganz hinausgleiten, dann wechseln - sonst springt der
          // Screen um, waehrend der Inhalt noch mitten in der Bewegung steht.
          Animated.timing(drag, {
            toValue: SWIPE_MAX_DRAG,
            duration: SWIPE_EXIT_DURATION,
            easing: Easing.out(Easing.quad),
            useNativeDriver: false,
          }).start(() => {
            zurueck();
            drag.setValue(0);
          });
          return;
        }

        // Nicht weit genug: zurueckfedern.
        Animated.spring(drag, { toValue: 0, ...SWIPE_SPRING, useNativeDriver: false }).start();
      },

      // Nimmt das System die Geste weg (Anruf, Mitteilung), darf der Inhalt
      // nicht verschoben liegenbleiben.
      onPanResponderTerminate: () => {
        Animated.spring(drag, { toValue: 0, ...SWIPE_SPRING, useNativeDriver: false }).start();
      },
    })
  ).current;

  const style: ViewStyle = { transform: [{ translateX: drag as unknown as number }] };

  return { panHandlers: swipe.panHandlers, style };
}
