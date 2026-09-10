import { useEffect, useRef, useState } from 'react';
import { Animated, Easing, StyleSheet, Text, View } from 'react-native';
import * as SplashScreen from 'expo-splash-screen';
import { useAppState } from '../../state/AppState';
import { useAuthState } from '../../state/AuthState';
import { useOnboardingState } from '../../state/OnboardingState';
import { Mascot } from '../mascot';
import { getTheme, ACCENT_ORANGE, FONT_SIZE, SPACING, schrift } from '../../theme/tokens';

// Der Startbildschirm bei JEDEM Oeffnen (Nutzer-Wunsch 2026-08-22).
//
// ============================================================ Zwei Splashs
//
// Es sind ZWEI hintereinander, und das ist kein Versehen:
//
//   1. Der NATIVE Splash (app.json -> expo-splash-screen). Das erste Bild
//      ueberhaupt, noch bevor JavaScript laeuft. Ohne ihn sieht man beim
//      Start eine weisse Flaeche - im Darkmode ein Aufblitzen.
//   2. DIESER hier. Er uebernimmt, sobald React steht, und bleibt, bis
//      Sitzung, Onboarding-Stand und lokaler App-Zustand geladen sind.
//
// Der Uebergang faellt nicht auf, weil beide dieselbe Hintergrundfarbe
// haben und dasselbe Symbol an derselben Stelle zeigen.
//
// ============================================================ Zwei Fallen
//
// **AUFBLITZEN.** Wenn alles im Speicher liegt, ist das Laden nach 80 ms
// fertig - ein Bild, das so kurz erscheint, wirkt wie ein Fehler.
// `MINDESTDAUER` haelt es lange genug, dass es als Absicht lesbar ist.
//
// **WARTENLASSEN.** Umgekehrt darf der Splash NIE laenger stehen als
// noetig. Er wartet nicht auf eine feste Zeit, sondern auf `bereit` - die
// Mindestdauer laeuft PARALLEL, nicht davor. Wer eine Sekunde laedt, sieht
// keine Sekunde extra.
//
// Deshalb ersetzt er auch den nackten Ladekreis, der bis hierher im
// Tab-Layout stand: dieselbe Wartezeit, nur nicht mehr nichtssagend.

/** So lange bleibt der Splash mindestens stehen, damit er nicht aufblitzt. */
const MINDESTDAUER_MS = 900;
/** Ausblenden. Kurz genug, dass es nicht bremst, lang genug fuer einen Uebergang. */
const AUSBLENDEN_MS = 320;

// Den nativen Splash NICHT automatisch verstecken - sonst blitzt zwischen
// ihm und diesem hier der leere Bildschirm auf. Steht ausserhalb der
// Komponente, weil es genau einmal beim Laden des Moduls passieren muss.
// `catch`: der Aufruf schlaegt fehl, wenn der Splash schon weg ist (etwa
// beim Neuladen im Entwicklungsmodus) - kein Grund, die App anzuhalten.
SplashScreen.preventAutoHideAsync().catch(() => {});

export function SplashGate({ children }: { children: React.ReactNode }) {
  const { darkMode, hydrated } = useAppState();
  const { loading: authLaedt } = useAuthState();
  const { loading: onboardingLaedt } = useOnboardingState();
  const theme = getTheme(darkMode);

  const [zeitAbgelaufen, setZeitAbgelaufen] = useState(false);
  const [weg, setWeg] = useState(false);
  const deckkraft = useRef(new Animated.Value(1)).current;
  // Das Symbol kommt eine Spur entgegen - eine Bewegung, keine Show.
  const groesse = useRef(new Animated.Value(0.92)).current;

  const bereit = hydrated && !authLaedt && !onboardingLaedt && zeitAbgelaufen;

  useEffect(() => {
    const t = setTimeout(() => setZeitAbgelaufen(true), MINDESTDAUER_MS);
    Animated.timing(groesse, {
      toValue: 1,
      duration: MINDESTDAUER_MS,
      easing: Easing.out(Easing.cubic),
      useNativeDriver: true,
    }).start();
    return () => clearTimeout(t);
  }, [groesse]);

  useEffect(() => {
    if (!bereit || weg) return;

    // Erst den nativen Splash wegnehmen - darunter liegt bereits dieser
    // hier, es entsteht also keine Luecke.
    //
    // `try/catch` UM den Aufruf, nicht nur `.catch()` daran: im Web wirft
    // `hideAsync()` SYNCHRON, wenn es gar keinen nativen Splash gibt. Ein
    // angehaengtes `.catch()` faengt das nicht - der Fehler riss den ganzen
    // Effekt ab, die Animation startete nie, und der Splash blieb fuer
    // immer stehen. Genau so ist es beim ersten Test passiert.
    try {
      void SplashScreen.hideAsync();
    } catch {
      // Kein nativer Splash da (Web, oder schon versteckt) - egal.
    }

    Animated.timing(deckkraft, {
      toValue: 0,
      duration: AUSBLENDEN_MS,
      easing: Easing.in(Easing.quad),
      useNativeDriver: true,
    }).start(({ finished }) => {
      if (finished) setWeg(true);
    });

    // Rueckfallebene. Ein Splash, der haengenbleibt, macht die App
    // unbenutzbar - das ist der eine Fehler, den man sich hier nicht leisten
    // kann. Falls die Animation nicht durchlaeuft (abgebrochen, Geraet
    // pausiert, "Bewegung reduzieren"), raeumt dieser Zeitgeber trotzdem ab.
    const notaus = setTimeout(() => setWeg(true), AUSBLENDEN_MS + 200);
    return () => clearTimeout(notaus);
  }, [bereit, weg, deckkraft]);

  return (
    <View style={styles.wurzel}>
      {children}
      {!weg ? (
        <Animated.View
          accessibilityElementsHidden={bereit}
          importantForAccessibility={bereit ? 'no-hide-descendants' : 'auto'}
          style={[
            styles.decke,
            {
              backgroundColor: theme.pageBg,
              opacity: deckkraft,
              // Sobald ausgeblendet wird, keine Antippen mehr schlucken.
              // Im STYLE, nicht als Prop - als Prop ist es abgekuendigt.
              pointerEvents: bereit ? 'none' : 'auto',
            },
          ]}
        >
          <Animated.View style={{ transform: [{ scale: groesse }] }}>
            {/* Das Maskottchen, das der Nutzer im Onboarding gewaehlt hat.
                Hat er noch keins (erster Start, vor O-irgendwas), zeichnet
                die Komponente nichts - dann traegt der Schriftzug allein. */}
            <Mascot size="gross" state="freut_sich" />
          </Animated.View>
          <Text style={[styles.wortmarke, { color: theme.text }]}>500 Wörter</Text>
          <Text style={[styles.zeile, { color: ACCENT_ORANGE }]}>Sprich ab Tag eins.</Text>
        </Animated.View>
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  wurzel: { flex: 1 },
  decke: {
    // `position: absolute` plus alle vier Kanten - in dieser RN-Fassung gibt
    // es `absoluteFillObject` im Typ nicht, ausgeschrieben ist es ohnehin
    // eindeutiger.
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    alignItems: 'center',
    justifyContent: 'center',
    gap: SPACING.md,
  },
  wortmarke: {
    // ExtraBold statt Serife (2026-09-01): die App-Wortmarke auf dem
    // Splash-Screen.
    ...schrift('800'),
    fontSize: FONT_SIZE.title,
    marginTop: SPACING.sm,
  },
  zeile: { fontSize: FONT_SIZE.caption, ...schrift('700'), letterSpacing: 0.4 },
});
