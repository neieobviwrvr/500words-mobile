import { useEffect, useRef, useState } from 'react';
import {
  AccessibilityInfo,
  Animated,
  Easing,
  LayoutChangeEvent,
  Platform,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import {
  getTheme,
  PROGRESS_FILL,
  PROGRESS_FILL_EDGE,
  RADIUS,
  FONT_SIZE,
  schrift,
} from '../theme/tokens';

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
// UMGEBAUT 2026-09-01 (Simons Vorgabe): der Balken sah nach nativem
// System-Slider aus und passte nicht zum haptischen 3D-Look der Karten. Er
// ist jetzt vollstaendig aus eigenen <View>s gebaut - hoeher, ganz rund, mit
// einer Lichtkante in der Fuellung und einer weichen Bewegung beim
// Wertwechsel. Kein Fremdbauteil, keine Plattform-Komponente.

/** Simons Mass. Bis dahin 10 - das war die Slider-Anmutung. */
const BAR_HEIGHT = 18;

// --- Der Koerper: Kante, Glanz, Rille (2026-09-01, Simons Vorgabe) ---------
//
// Der Balken war nach dem ersten Umbau richtig gemasst, aber flach. Drei
// Bauteile geben ihm Volumen, und zwar nach genau derselben Lichtregel wie
// die 3D-Karten: Licht von oben, Schatten unten.
//   1. Die Fuellung traegt unten eine dunklere Kante -> sie wird zum Zylinder.
//   2. Der Glanz oben wird kraeftiger und bekommt Luft zu den Raendern -> er
//      liest sich als Reflexion auf einer Woelbung, nicht als Streifen.
//   3. Die Spur wird dunkler und bekommt oben eine Schattenlinie -> sie wird
//      zur Rille, in der die Fuellung liegt.

/** Hoehe der dunklen Unterkante der Fuellung. */
const FILL_EDGE = 3;

/**
 * Hoehe der Lichtkante. Fest gerechnet statt als '30%': sobald die Fuellung
 * eine Unterkante traegt, bezoege sich ein Prozentwert auf den INNEREN Kasten
 * (18 minus Kante) und der Glanz wuerde stillschweigend schrumpfen. Die
 * Rechnung haengt trotzdem an `BAR_HEIGHT`, damit eine andere Balkenhoehe
 * nicht von Hand nachgezogen werden muss.
 */
const GLOSS_HEIGHT = Math.round(BAR_HEIGHT * 0.3);
/** Luft zwischen Glanz und Rand - laesst die Reflexion geschwungen wirken. */
const GLOSS_INSET_X = 3;
const GLOSS_INSET_Y = 2;

// Spur-Grau. Simons erste Vorgabe war slate-200 (#E2E8F0); das sah wie ein
// Aufkleber aus, weil es heller war als die Seite selbst. Jetzt slate-300 -
// eine Vertiefung ist dunkler als ihre Umgebung, nicht heller.
//
// Bewusst NICHT `theme.subtleFill`: das ist unser warmes Papierbeige und
// verschwindet auf dem Off-White-Hintergrund des Startscreens fast.
//
// Im Darkmode bleibt es bei der Themenfarbe - ein slate-300-Balken waere dort
// die hellste Flaeche des ganzen Screens und wuerde den Blick fangen, obwohl
// er meistens fast leer ist.
const TRACK_LIGHT = '#D1D5DB';

/**
 * Schattenlinie am OBEREN Innenrand der Spur.
 *
 * React Native kennt keinen `inset`-Schatten. Eine Rille laesst sich aber mit
 * einer einzigen Linie andeuten: bei Licht von oben liegt die obere Innenkante
 * im Schatten. Simon hatte alternativ eine weisse Linie UNTEN vorgeschlagen -
 * die faellt hier weg, weil sie auf dem Off-White-Hintergrund praktisch
 * unsichtbar waere und nur einen Punkt Hoehe kosten wuerde.
 */
const TRACK_EDGE_LIGHT = 'rgba(15,23,42,0.10)';
const TRACK_EDGE_DARK = 'rgba(0,0,0,0.35)';

// Anthrazit fuer die Prozentzahl (Simons Vorgabe, entspricht slate-700). Der
// Darkmode braucht das Gegenstueck, sonst steht Dunkelgrau auf Dunkelgrau.
const VALUE_LIGHT = '#334155';
const VALUE_DARK = '#CBD5E1';

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

// Dauer des Fuellwechsels (2026-09-01). Kurz genug, dass es wie eine Reaktion
// auf die eigene Antwort wirkt, lang genug, dass man die Bewegung sieht.
// `Easing.out` bremst am Ziel ab - ein linearer Stopp wirkt mechanisch.
const FILL_DURATION = 420;

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

  // Gemessen wird die SPUR, nicht die Fuellung (2026-09-01). Frueher hing der
  // Schimmer an einem `onLayout` der Fuellung - solange deren Breite fest war,
  // hat das genau einmal gefeuert. Jetzt bewegt sich die Fuellung, und ein
  // `onLayout` an ihr wuerde in JEDEM Frame der Animation einen setState
  // ausloesen. Die Spur dagegen aendert ihre Breite nur beim Drehen des
  // Geraets; die Fuellbreite rechnen wir daraus selbst aus.
  const [trackWidth, setTrackWidth] = useState(0);
  const onTrackLayout = (e: LayoutChangeEvent) => {
    const w = Math.round(e.nativeEvent.layout.width);
    setTrackWidth((cur) => (cur === w ? cur : w));
  };

  // Die Breite laeuft ueber einen Animated-Wert und wird als Prozentstring
  // interpoliert - so stimmt der Balken bei jeder Spurbreite, ohne dass die
  // Animation auf die Messung warten muesste.
  const fillAnim = useRef(new Animated.Value(clamped)).current;

  // "Bewegung reduzieren" in den Systemeinstellungen schaltet den Fluss ab.
  // Eine Dauerbewegung am Bildschirmrand ist genau das, was diese Einstellung
  // meint - und Apple prueft im Review darauf.
  const [reduceMotion, setReduceMotion] = useState(false);

  useEffect(() => {
    // Bei "Bewegung reduzieren" springt der Balken auf den Wert, statt
    // hinzulaufen. Das gilt seit 2026-09-01 auch fuer die Fuellung, nicht nur
    // fuer den Schimmer: eine Einstellung, die Bewegung abbestellt, meint
    // jede Bewegung. Nebeneffekt, der wichtiger ist als er klingt - der
    // Sprung kommt ohne Animationsframes aus. Wo die gedrosselt sind, zeigt
    // der Balken so trotzdem den richtigen Wert statt auf dem alten
    // stehenzubleiben.
    if (reduceMotion) {
      fillAnim.setValue(clamped);
      return;
    }
    const anim = Animated.timing(fillAnim, {
      toValue: clamped,
      duration: FILL_DURATION,
      easing: Easing.out(Easing.cubic),
      // Zwingend false: der native Treiber kann nur Transformationen und
      // Deckkraft, keine Layout-Eigenschaften wie `width`.
      useNativeDriver: false,
    });
    anim.start();
    return () => anim.stop();
  }, [clamped, fillAnim, reduceMotion]);

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

  const breite = fillAnim.interpolate({
    inputRange: [0, 1],
    outputRange: ['0%', '100%'],
  });

  // Bis die erste Layout-Messung da ist (und falls sie ausbleibt, etwa weil
  // das Fenster nicht sichtbar ist), gilt die Mindestbreite. Der Schimmer
  // laeuft dann eine kurze Strecke statt gar nicht - seine Existenz haengt
  // bewusst NICHT an einer Messung, die scheitern kann.
  const fillWidth = Math.max(MIN_FILL_WIDTH, Math.round(trackWidth * clamped));
  const shimmerWidth = Math.max(SHIMMER_MIN_WIDTH, fillWidth * SHIMMER_WIDTH_RATIO);
  // Startet vollstaendig links ausserhalb und laeuft vollstaendig rechts
  // hinaus, damit kein Aufblitzen an den Raendern entsteht.
  const translateX = flow.interpolate({
    inputRange: [0, 1],
    outputRange: [-shimmerWidth, fillWidth],
  });

  return (
    <View
      onLayout={onTrackLayout}
      style={[
        styles.track,
        {
          backgroundColor: dark ? theme.subtleFill : TRACK_LIGHT,
          borderTopColor: dark ? TRACK_EDGE_DARK : TRACK_EDGE_LIGHT,
        },
      ]}
      accessibilityRole="progressbar"
      accessibilityValue={{ min: 0, max: 100, now: percent }}
      accessibilityLabel={label ?? `${percent} Prozent`}
    >
      <Animated.View style={[styles.fill, { width: breite, minWidth: MIN_FILL_WIDTH }]}>
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

        {/* Lichtkante ZULETZT, also ueber dem Schimmer: sie ist die feste
            Woelbung des Koerpers, der Schimmer nur das, was darueber
            hinwegzieht. Laege sie darunter, wuerde die Kante bei jedem
            Durchgang kurz verwaschen. */}
        <View pointerEvents="none" style={styles.glanz} />
      </Animated.View>
    </View>
  );
}

/**
 * Die Prozentzahl neben dem Balken (2026-09-01, Simons Vorgabe zu Schrift und
 * Farbe).
 *
 * Bewusst ein eigener Baustein statt eines Teils von `ProgressBar`: die Spur
 * traegt `flexGrow` und muss deshalb DIREKT im Zeilencontainer des Aufrufers
 * liegen. Gaebe `ProgressBar` selbst eine Zeile aus Balken plus Zahl zurueck,
 * aenderte sich ihr Layout-Vertrag fuer alle sechs Verwendungen - und genau
 * daran ist der Balken in dieser Sitzung schon einmal auf Hoehe 0
 * zusammengefallen. So steht die Typografie trotzdem an EINER Stelle.
 */
export function ProgressProzent({ dark, ratio }: { dark: boolean; ratio: number }) {
  const percent = Math.round(Math.max(0, Math.min(1, ratio)) * 100);
  return (
    <Text
      // Der Balken daneben sagt den Wert schon an - zweimal "31 Prozent"
      // hintereinander ist fuer VoiceOver Laerm.
      accessibilityElementsHidden
      importantForAccessibility="no-hide-descendants"
      style={[styles.wert, { color: dark ? VALUE_DARK : VALUE_LIGHT }]}
    >
      {percent}%
    </Text>
  );
}

const styles = StyleSheet.create({
  track: {
    height: BAR_HEIGHT,
    borderRadius: RADIUS.pill,
    // Die Schattenlinie der Rille. `borderTopWidth` allein - eine Sammelangabe
    // `borderWidth` wuerde den Rahmen auch an den Seiten und unten zeichnen
    // und die Spur einrahmen statt zu vertiefen.
    borderTopWidth: 1,
    overflow: 'hidden',
    // Frueher `flex: 1`. Das heisst `flexBasis: 0`, und in einem
    // SPALTEN-Container ist die Hauptachse die Hoehe - der Balken fiel dort
    // auf 0 zusammen (in dieser Sitzung schon einmal passiert). Mit
    // `flexBasis: 'auto'` gilt in der Spalte die feste Hoehe, in der Zeile
    // wie bisher die Restbreite.
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 'auto',
    alignSelf: 'stretch',
  },
  fill: {
    height: '100%',
    borderRadius: RADIUS.pill,
    backgroundColor: PROGRESS_FILL,
    // Die dunkle Unterkante macht aus der Flaeche einen Koerper. In React
    // Native liegt der Rahmen INNEN, die Fuellung bleibt also insgesamt
    // `BAR_HEIGHT` hoch - blauer Bauch plus Kante, nicht Bauch plus Aufschlag.
    borderBottomWidth: FILL_EDGE,
    borderBottomColor: PROGRESS_FILL_EDGE,
    // Der Schimmer laeuft ueber die Kante hinaus - ohne das Beschneiden waere
    // er auch neben der Fuellung auf der Spur zu sehen. Beschneidet zugleich
    // die Lichtkante auf die runde Form.
    overflow: 'hidden',
  },
  glanz: {
    position: 'absolute',
    // Abstaende als `top`/`left`/`right` statt als Margins (Simons Vorschlag):
    // bei einem absolut gesetzten Element mit gegenueberliegenden Anschlaegen
    // ist die Wirkung von Margins in Yoga leicht misszuverstehen, die
    // Anschlaege selbst sind eindeutig. Optisch dasselbe - die Reflexion
    // klebt nicht mehr am Rand.
    top: GLOSS_INSET_Y,
    left: GLOSS_INSET_X,
    right: GLOSS_INSET_X,
    height: GLOSS_HEIGHT,
    backgroundColor: 'rgba(255,255,255,0.45)',
    // Rundum rund, nicht nur oben: die Reflexion schwebt jetzt frei in der
    // Fuellung, da waeren zwei eckige Enden unten ein sichtbarer Bruch.
    borderRadius: RADIUS.pill,
  },
  shimmer: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
  },
  wert: {
    fontSize: FONT_SIZE.caption,
    ...schrift('800'),
    minWidth: 34,
    textAlign: 'right',
  },
});
