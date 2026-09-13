import { useEffect, useMemo, useRef, useState } from 'react';
import { AccessibilityInfo, Animated, Easing, Platform, StyleSheet, View } from 'react-native';
import { ACCENT_GREEN } from '../theme/tokens';

// Gruene Funken nach einer richtigen Antwort (2026-09-13, Simons Vorgabe:
// "eine Menge gruene Funken als Richtig-Beantwortung").
//
// Gruen ist in der App die EINE Farbe fuer Erfolg (siehe tokens.ts) - die
// Funken sind deshalb ausschliesslich Gruentoene, keine Konfetti-Bunt-
// Mischung. Heller und dunkler als ACCENT_GREEN, damit der Schwarm auf
// hellem wie dunklem Grund Tiefe hat.
//
// Laeuft genau einmal beim Einhaengen. Wer sie erneut zeigen will, gibt
// der Komponente einen neuen `key`.
//
// Mit "Bewegung reduzieren" (iOS/Android-Einstellung) gibt es keine Funken -
// die Rueckmeldung traegt dann allein das "Richtig!" darunter.

const FARBEN = [ACCENT_GREEN, '#5CC27D', '#8EDBA5', '#2E7A48', '#B5EBC4'];
const ANZAHL = 34;
const DAUER = 900;

type Funke = {
  winkel: number;
  weite: number;
  groesse: number;
  farbe: string;
  raute: boolean;
  verzoegerung: number;
  fall: number;
};

function erzeugeFunken(): Funke[] {
  return Array.from({ length: ANZAHL }, (_, i) => ({
    // Gleichmaessig ueber den Kreis verteilt, dann verwackelt - reiner Zufall
    // liesse Loecher, eine exakte Verteilung saehe aus wie ein Zahnrad.
    winkel: (i / ANZAHL) * Math.PI * 2 + (Math.random() - 0.5) * 0.5,
    weite: 60 + Math.random() * 75,
    groesse: 5 + Math.random() * 6,
    farbe: FARBEN[i % FARBEN.length],
    raute: i % 3 === 0,
    verzoegerung: Math.random() * 90,
    // Ein Hauch Schwerkraft: Funken sinken am Ende leicht nach unten.
    fall: 18 + Math.random() * 22,
  }));
}

export function RichtigFunken() {
  const [bewegungReduziert, setBewegungReduziert] = useState(false);
  const funken = useMemo(erzeugeFunken, []);
  const werte = useRef(funken.map(() => new Animated.Value(0))).current;

  useEffect(() => {
    let abgebrochen = false;
    AccessibilityInfo.isReduceMotionEnabled()
      .then((an) => {
        if (!abgebrochen && an) setBewegungReduziert(true);
      })
      .catch(() => {});
    const animation = Animated.parallel(
      werte.map((wert, i) =>
        Animated.timing(wert, {
          toValue: 1,
          duration: DAUER,
          delay: funken[i].verzoegerung,
          easing: Easing.out(Easing.cubic),
          useNativeDriver: Platform.OS !== 'web',
        })
      )
    );
    animation.start();
    return () => {
      abgebrochen = true;
      animation.stop();
    };
  }, [funken, werte]);

  if (bewegungReduziert) return null;

  return (
    <View pointerEvents="none" style={styles.mitte} accessibilityElementsHidden importantForAccessibility="no-hide-descendants">
      {funken.map((f, i) => {
        const wert = werte[i];
        const x = Math.cos(f.winkel) * f.weite;
        // Flacher als breit: nach oben ist bis zum Fortschrittsbalken wenig
        // Platz, und der Scrollbereich schneidet dort ab - ein runder Schwarm
        // verlor seine obere Haelfte an der Kante.
        const y = Math.sin(f.winkel) * f.weite * 0.6;
        return (
          <Animated.View
            key={i}
            style={[
              styles.funke,
              {
                width: f.groesse,
                height: f.groesse,
                marginLeft: -f.groesse / 2,
                marginTop: -f.groesse / 2,
                borderRadius: f.raute ? 1.5 : f.groesse / 2,
                backgroundColor: f.farbe,
                opacity: wert.interpolate({ inputRange: [0, 0.1, 0.65, 1], outputRange: [0, 1, 1, 0] }),
                transform: [
                  { translateX: wert.interpolate({ inputRange: [0, 1], outputRange: [0, x] }) },
                  {
                    translateY: wert.interpolate({
                      inputRange: [0, 0.7, 1],
                      outputRange: [0, y, y + f.fall],
                    }),
                  },
                  { scale: wert.interpolate({ inputRange: [0, 0.2, 1], outputRange: [0.3, 1.25, 0.5] }) },
                  { rotate: f.raute ? '45deg' : '0deg' },
                ],
              },
            ]}
          />
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  // Nullgrosser Punkt in der Mitte des Elternelements - von dort fliegen die
  // Funken aus. Das Elternelement braucht dafuer `position: 'relative'`
  // (in RN der Standard).
  mitte: {
    position: 'absolute',
    left: '50%',
    top: '50%',
    width: 0,
    height: 0,
  },
  funke: {
    position: 'absolute',
  },
});
