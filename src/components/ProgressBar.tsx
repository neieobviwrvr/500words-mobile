import { useEffect, useRef, useState } from 'react';
import {
  AccessibilityInfo,
  Animated,
  Easing,
  LayoutChangeEvent,
  Platform,
  StyleSheet,
  View,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { getTheme, PROGRESS_FILL, RADIUS } from '../theme/tokens';

// Fortschrittsbalken.
//
// Der einzige Baustein, den wir bewusst von Duolingo statt von Babbel
// uebernehmen: Babbel zeigt ihn nur auf manchen Screens, Duolingo
// durchgehend. Bei zwoelf Onboarding-Schritten ist "das hier hat ein Ende"
// die wichtigere Botschaft.
//
// Fuellfarbe war bis 2026-08-18 unser Orange (wie bei Babbel), ist jetzt
// `PROGRESS_FILL` - siehe tokens.ts fuer die Begruendung. Gilt fuer JEDEN
// Balken in der App, also auch fuer die Onboarding-Strecke.
//
// Zwei Verwendungen, ein Balken (2026-08-18): das Onboarding zaehlt Schritte
// (`step`/`total`), S1 zeigt einen Anteil (`ratio`). Beides ist derselbe
// Balken, unterscheidet sich aber in dem, was der Screenreader vorlesen soll -
// "Schritt 3 von 12" gegen "31 Prozent". Deshalb `label` als eigener Wert
// statt einer aus den Zahlen geratenen Formulierung.
//
// Mindestbreite der Fuellung (2026-08-18, Nutzer-Entscheidung): der Balken
// zeigt immer ein Stueck Farbe, auch bei 0%. Ein komplett leerer Balken am
// ersten Tag ist der falsche erste Eindruck - dieselbe Ueberlegung wie beim
// Ueberlebensmodus im SRS ("soll nicht schlecht gelaunt machen").
//
// WICHTIG: das ist reine Optik. Der vorgelesene Wert und die Prozentzahl
// daneben bleiben bei 0 - der Balken schmeichelt, die Zahl luegt nicht.
// Umgesetzt als `minWidth` statt als Aufschlag auf den Anteil, damit es
// keinen Sprung gibt: sobald der echte Fortschritt breiter waere als das
// Minimum, gilt wieder allein der echte Wert.
const MIN_FILL_WIDTH = 24;

// Fliessende Bewegung (2026-08-18, Nutzer-Wunsch; ersetzt das vorherige
// Pulsieren der Deckkraft).
//
// Ein heller Schimmer wandert dauerhaft von links nach rechts durch die
// Fuellung und laesst sie stroemen statt blinken. Weich wird er durch einen
// Verlauf mit durchsichtigen Enden - eine Kante waere ein wandernder Balken,
// kein Fluss.
//
// Die Bewegung laeuft ueber `translateX`, nicht ueber `left`: nur
// Transformationen kann der native Treiber uebernehmen. Bei einer
// Dauerschleife ist das der Unterschied zwischen "kostet nichts" und
// "rechnet in jedem Frame auf dem Hauptthread mit, waehrend der Nutzer
// spricht".
//
// Ausnahme Web: `react-native-web` hat kein natives Animationsmodul und warnt
// bei jedem Start. Dort laeuft es ueber den JS-Treiber.
const SHIMMER_DURATION = 2200;
/** Breite des Schimmers als Anteil der Fuellbreite. */
const SHIMMER_WIDTH_RATIO = 0.55;
const SHIMMER_MIN_WIDTH = 44;
const USE_NATIVE_DRIVER = Platform.OS !== 'web';

type Props = {
  dark: boolean;
  /** Anteil 0-1. Alternativ `step`/`total` benutzen. */
  ratio?: number;
  /** 1-basiert: Schritt 1 von total. */
  step?: number;
  total?: number;
  /** Was der Screenreader vorliest. Ohne Angabe "x Prozent". */
  label?: string;
};

export function ProgressBar({ dark, ratio, step, total, label }: Props) {
  const theme = getTheme(dark);
  const flow = useRef(new Animated.Value(0)).current;

  // Die Fuellung ist prozentual breit - fuer die Wanderstrecke des Schimmers
  // braucht es ihre echte Breite in Punkten, und die weiss erst das Layout.
  const [fillWidth, setFillWidth] = useState(0);
  const onFillLayout = (e: LayoutChangeEvent) => {
    const w = Math.round(e.nativeEvent.layout.width);
    setFillWidth((cur) => (cur === w ? cur : w));
  };

  // "Bewegung reduzieren" in den Systemeinstellungen schaltet den Fluss ab.
  // Eine Dauerbewegung am Bildschirmrand ist genau das, was diese Einstellung
  // meint - und Apple prueft im Review darauf.
  const [reduceMotion, setReduceMotion] = useState(false);
  useEffect(() => {
    let active = true;
    AccessibilityInfo.isReduceMotionEnabled().then((on) => {
      if (active) setReduceMotion(on);
    });
    const sub = AccessibilityInfo.addEventListener('reduceMotionChanged', setReduceMotion);
    return () => {
      active = false;
      sub.remove();
    };
  }, []);

  useEffect(() => {
    if (reduceMotion) return;
    flow.setValue(0);
    const loop = Animated.loop(
      Animated.timing(flow, {
        toValue: 1,
        duration: SHIMMER_DURATION,
        // Gleichfoermig: ein Fluss beschleunigt nicht und bremst nicht ab.
        // Jede Ein-/Ausblendung an den Enden wuerde ihn stocken lassen.
        easing: Easing.linear,
        useNativeDriver: USE_NATIVE_DRIVER,
      })
    );
    loop.start();
    // Ohne das Stoppen laeuft die Schleife weiter, nachdem der Screen
    // verlassen wurde - bei zwoelf Onboarding-Schritten waeren das zwoelf
    // Schleifen nebeneinander.
    return () => loop.stop();
  }, [reduceMotion, flow]);

  const raw =
    ratio !== undefined
      ? ratio
      : total !== undefined && total > 0 && step !== undefined
        ? step / total
        : 0;
  // Clamp, damit ein Rechenfehler beim Aufrufer nie einen Balken ueber die
  // Breite hinaus oder eine negative Breite erzeugt.
  const clamped = Math.max(0, Math.min(1, raw));
  const percent = Math.round(clamped * 100);

  // Bis die erste Layout-Messung da ist (und falls sie ausbleibt, etwa weil
  // das Fenster nicht sichtbar ist), gilt die Mindestbreite. Der Schimmer
  // laeuft dann eine kurze Strecke statt gar nicht - seine Existenz haengt
  // bewusst NICHT an einer Messung, die scheitern kann.
  const measuredWidth = fillWidth || MIN_FILL_WIDTH;
  const shimmerWidth = Math.max(SHIMMER_MIN_WIDTH, measuredWidth * SHIMMER_WIDTH_RATIO);
  // Startet vollstaendig links ausserhalb und laeuft vollstaendig rechts
  // hinaus, damit kein Aufblitzen an den Raendern entsteht.
  const translateX = flow.interpolate({
    inputRange: [0, 1],
    outputRange: [-shimmerWidth, measuredWidth],
  });

  return (
    <View
      style={[styles.track, { backgroundColor: theme.subtleFill }]}
      accessibilityRole="progressbar"
      accessibilityValue={{ min: 0, max: 100, now: percent }}
      accessibilityLabel={label ?? `${percent} Prozent`}
    >
      <View
        onLayout={onFillLayout}
        style={[styles.fill, { width: `${clamped * 100}%`, minWidth: MIN_FILL_WIDTH }]}
      >
        {!reduceMotion ? (
          <Animated.View
            accessibilityElementsHidden
            importantForAccessibility="no"
            style={[styles.shimmer, { width: shimmerWidth, transform: [{ translateX }] }]}
          >
            <LinearGradient
              // Durchsichtig an beiden Enden, hell in der Mitte - das ergibt
              // den weichen Kamm, der ueber die Fuellung laeuft.
              colors={['rgba(255,255,255,0)', 'rgba(255,255,255,0.45)', 'rgba(255,255,255,0)']}
              start={{ x: 0, y: 0.5 }}
              end={{ x: 1, y: 0.5 }}
              style={StyleSheet.absoluteFill}
            />
          </Animated.View>
        ) : null}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  track: {
    height: 10,
    borderRadius: RADIUS.pill,
    overflow: 'hidden',
    flex: 1,
  },
  fill: {
    height: '100%',
    borderRadius: RADIUS.pill,
    backgroundColor: PROGRESS_FILL,
    // Der Schimmer laeuft ueber die Kante hinaus - ohne das Beschneiden waere
    // er auch neben der Fuellung auf der Spur zu sehen.
    overflow: 'hidden',
  },
  shimmer: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
  },
});
