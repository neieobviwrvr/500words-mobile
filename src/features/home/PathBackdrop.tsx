import { useEffect, useRef, useState } from 'react';
import { AccessibilityInfo, Animated, Easing, Image, Platform, StyleSheet } from 'react-native';

// Der Hintergrund von S1 in drei Ebenen (Nutzer-Vorlage 2026-08-20).
//
// Unten die reine Pergament-Textur, darueber die beiden Kartenecken als
// eigene Bilder. Getrennt statt als ein GIF, weil nur so steuerbar ist, WANN
// sich etwas bewegt: eine GIF-Schleife laeuft ohne Pausen durch, beide Ecken
// im Gleichtakt, und muss dauerhaft Frames dekodieren.
//
// Die Ecken wackeln gelegentlich - eine kleine Drehung, dann lange Ruhe. Die
// beiden bekommen unterschiedliche Wartezeiten, damit sie nie gleichzeitig
// zucken; gleichzeitig saehe mechanisch aus.

/** Groesster Ausschlag der Drehung. Klein halten - es soll ein Wackeln sein. */
const WOBBLE_DEGREES = 1.6;
/** Dauer eines einzelnen Wackelns (hin, zurueck, hin, zurueck). */
const WOBBLE_STEP = 130;
/** Kuerzeste und laengste Pause zwischen zwei Wackeln. */
const REST_MIN = 9000;
const REST_MAX = 18000;

const USE_NATIVE_DRIVER = Platform.OS !== 'web';

function zufaelligePause() {
  return REST_MIN + Math.random() * (REST_MAX - REST_MIN);
}

/**
 * Eine Ecke, die gelegentlich wackelt.
 *
 * `startDelay` versetzt die beiden Ecken gegeneinander - ohne den Versatz
 * wuerden sie beim ersten Mal synchron losgehen.
 */
function WobblingCorner({
  source,
  style,
  startDelay,
  enabled,
}: {
  source: number;
  style: object;
  startDelay: number;
  enabled: boolean;
}) {
  const tilt = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    if (!enabled) {
      tilt.setValue(0);
      return;
    }

    let timer: ReturnType<typeof setTimeout>;
    let laufend: Animated.CompositeAnimation | null = null;
    let abgebrochen = false;

    const wackeln = () => {
      if (abgebrochen) return;
      const schritt = (toValue: number) =>
        Animated.timing(tilt, {
          toValue,
          duration: WOBBLE_STEP,
          easing: Easing.inOut(Easing.quad),
          useNativeDriver: USE_NATIVE_DRIVER,
        });
      // Hin, ueber die Mitte hinaus zurueck, dann einpendeln - das liest sich
      // als Wackeln. Ein einzelnes Hin-und-Her waere ein Kippen.
      laufend = Animated.sequence([schritt(1), schritt(-1), schritt(0.4), schritt(0)]);
      laufend.start(() => {
        if (abgebrochen) return;
        timer = setTimeout(wackeln, zufaelligePause());
      });
    };

    timer = setTimeout(wackeln, startDelay);

    return () => {
      abgebrochen = true;
      clearTimeout(timer);
      laufend?.stop();
    };
  }, [enabled, startDelay, tilt]);

  const rotate = tilt.interpolate({
    inputRange: [-1, 1],
    outputRange: [`-${WOBBLE_DEGREES}deg`, `${WOBBLE_DEGREES}deg`],
  });

  return (
    <Animated.Image
      source={source}
      // Rein dekorativ - fuer VoiceOver gibt es hier nichts zu holen.
      accessibilityElementsHidden
      importantForAccessibility="no"
      accessibilityIgnoresInvertColors
      resizeMode="contain"
      style={[style, { transform: [{ rotate }] }]}
    />
  );
}

export function PathBackdrop({ width, height }: { width: number; height: number }) {
  // "Bewegung reduzieren" schaltet das Wackeln ab - eine Dauerbewegung im
  // Hintergrund ist genau das, was diese Einstellung meint.
  const [reduceMotion, setReduceMotion] = useState(false);
  useEffect(() => {
    let aktiv = true;
    AccessibilityInfo.isReduceMotionEnabled().then((an) => {
      if (aktiv) setReduceMotion(an);
    });
    const sub = AccessibilityInfo.addEventListener('reduceMotionChanged', setReduceMotion);
    return () => {
      aktiv = false;
      sub.remove();
    };
  }, []);

  // Die Ecken sind auf ihre eigenen Masse zugeschnitten, nicht auf den ganzen
  // Bildschirm - sie werden deshalb an ihrer Ecke verankert und relativ zur
  // Fensterbreite skaliert.
  const obenBreite = width * 0.62;
  const untenBreite = width * 0.52;

  return (
    <>
      <Image
        source={require('../../../assets/bg-textur.png')}
        style={[styles.layer, { width, height }]}
        resizeMode="cover"
        accessibilityIgnoresInvertColors
      />
      <WobblingCorner
        source={require('../../../assets/bg-ecke-oben.png')}
        style={{
          position: 'absolute',
          top: 0,
          right: 0,
          width: obenBreite,
          height: obenBreite * (664 / 656),
        }}
        startDelay={2200}
        enabled={!reduceMotion}
      />
      <WobblingCorner
        source={require('../../../assets/bg-ecke-unten.png')}
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          width: untenBreite,
          height: untenBreite * (277 / 342),
        }}
        // Deutlich spaeter als die obere - die beiden sollen sich nie
        // gleichzeitig bewegen.
        startDelay={7600}
        enabled={!reduceMotion}
      />
    </>
  );
}

const styles = StyleSheet.create({
  layer: {
    position: 'absolute',
    top: 0,
    left: 0,
  },
});
