import { ReactNode, useEffect, useMemo, useRef, useState } from 'react';
import {
  AccessibilityInfo,
  Animated,
  Easing,
  Image,
  ImageSourcePropType,
  PanResponder,
  Pressable,
  StyleSheet,
  Text,
  useWindowDimensions,
  View,
  ViewStyle,
} from 'react-native';
import { Feather } from '@expo/vector-icons';
import { FONT_SIZE, getTheme, karte, LINE_HEIGHT, RADIUS, SPACING, schrift } from '../../theme/tokens';

// ---------------------------------------------------------------------------
// Zwei Karten, die sich umdrehen lassen - das Geruest von S1 (2026-09-12).
// ---------------------------------------------------------------------------
//
// Entstanden als Testscreen auf /freunde ("a box like the lernpfad that is
// kind of a holographic image or playcard that flips 180 degrees",
// 2026-09-11). Simon wollte es danach auf dem Startscreen haben - seitdem
// liegt das Kartenwerk hier und nicht mehr im Testbereich, und beide Screens
// lesen dieselbe Definition.
//
//   OBEN  `BildKarte` - eine Illustration, die beim Ziehen kippt und beim
//         Tippen umschlaegt. Was hinten steht, gibt der Screen vor.
//   UNTEN `BlattKarte` - steigt vom unteren Bildschirmrand herauf, traegt auf
//         jeder Seite eigenen Inhalt (auf S1 die beiden Lernwege), kippt beim
//         QUEREN Ziehen und scrollt senkrecht.
//
// Beide drehen sich mit DERSELBEN Bewegung (`useUmdrehen`, gleiche Dauer,
// gleiche Kurve, im selben Tick gestartet) und tragen denselben Schatten -
// sonst sieht die gemeinsame Drehung aus wie zwei verschiedene
// (2026-09-12, Simons Beobachtung: "so much dissonance between the two
// cards when turning").
//
// KEIN `preserve-3d` in React Native: jede Karte hat ihre eigene Perspektive
// und dreht sich um ihre eigene Mitte. Eine wirklich gemeinsame Bewegung
// braeuchte beide Karten in EINEM drehenden Element - dann drehte alles
// dazwischen mit.

const KIPP_MAX = 14;
/** Dauer einer Umdrehung in ms. Hochkant (90 Grad) ist die Karte nach der Haelfte. */
const DREH_DAUER = 800;
/**
 * Hoehe der oberen Karte als Anteil der Fensterhoehe (Simon, 2026-09-11:
 * "the card itself should be 35% of the screen tall"). Sie beginnt unter
 * dem Fortschrittsbalken.
 */
const KARTE_HOEHE = 0.35;
/** Rundung der Ecken - wie bei den Karten der App (RADIUS.lg). */
const ECKE = RADIUS.lg;
/** Ab so viel Bewegung ist es ein Ziehen, darunter ein Tippen. */
const TIPP_TOLERANZ = 6;
/**
 * Ab so viel Vorsprung gilt ein Zug auf der unteren Karte als QUER und
 * kippt sie, statt zu scrollen (2026-09-12, Simon: "can we do it with the
 * lower card as well and still make it scrollable?").
 */
const QUER_SCHWELLE = 6;

// Die Farben der Karte stehen bewusst hier und nicht in tokens.ts: sie sind
// das Motiv dieses Tests, nicht Teil der App-Palette.
const PERLMUTT = ['#F4F3FA', '#D9DAEA', '#F7EFF7'] as const;
const TINTE = '#2A2644';

/**
 * EIN Schatten fuer BEIDE Karten (2026-09-12, Simon: "Schatten gleich").
 *
 * Vorher hatte jede ihren eigenen: die Bildkarte einen kraeftigen nach unten
 * (Versatz 14, Weichzeichnung 24, 30 %, Tinte), die untere einen schwachen
 * nach oben (6 / 16 / 22 %) in Schiefergrau. Beim gemeinsamen Drehen schwang
 * der eine deutlich mit und der andere kaum - zwei verschiedene
 * Tiefenhinweise auf derselben Bewegung, und genau das liess die Drehung
 * aussehen wie zwei verschiedene.
 *
 * Farbe, Weichzeichnung und Deckung gelten jetzt fuer beide; die Werte
 * liegen zwischen den zwei alten. NUR das VORZEICHEN des Versatzes
 * unterscheidet sich, und das ist keine Willkuer: die Bildkarte steht frei,
 * ihr Schatten faellt nach unten. Die untere Karte laeuft am unteren
 * Bildschirmrand aus - dort laege ein Schatten nach unten unter der Karte
 * selbst und waere unsichtbar, ihre einzige sichtbare Kante ist die obere.
 *
 * Nicht aus tokens.ts: die ELEVATION-Skala gilt fuer ruhende Flaechen und
 * schreibt den Versatz nach unten vor. Diese beiden Karten drehen sich, und
 * die untere haengt am unteren Bildschirmrand - ein Sonderfall dieses
 * Testscreens, kein neuer App-Schatten.
 */
const SCHATTEN = {
  shadowColor: TINTE,
  shadowRadius: 20,
  shadowOpacity: 0.26,
  elevation: 8,
} as const;
/** Versatz zum Schatten; das Vorzeichen setzt jede Karte selbst. */
const SCHATTEN_TIEFE = 10;

function begrenze(wert: number) {
  return Math.max(-KIPP_MAX, Math.min(KIPP_MAX, wert));
}

/** "Bewegung reduzieren" aus den Systemeinstellungen. */
function useWenigBewegung() {
  const [an, setAn] = useState(false);
  useEffect(() => {
    let aktiv = true;
    AccessibilityInfo.isReduceMotionEnabled()
      .then((wert) => {
        if (aktiv) setAn(wert);
      })
      .catch(() => {});
    const abo = AccessibilityInfo.addEventListener('reduceMotionChanged', setAn);
    return () => {
      aktiv = false;
      abo?.remove();
    };
  }, []);
  return an;
}

/**
 * Die Drehung der unteren Karte. Liegt im Screen, weil sie von zwei Stellen
 * ausgeloest wird: vom Tipp auf die untere Karte und vom Tipp auf die obere.
 *
 * `umdrehen` entsteht genau einmal: der PanResponder der oberen Karte faengt
 * es beim ersten Aufbau ein und ruft sonst fuer immer diese erste Fassung.
 * Was es braucht, liest es deshalb ueber eine Ref.
 */
export function useUmdrehen({
  start = 1,
  beiEnde,
}: {
  /** Seite beim ersten Aufbau - S1 startet auf 2, wenn der Kurs laeuft. */
  start?: 1 | 2;
  /**
   * Laeuft, wenn die Drehung STEHT - nicht, wenn sie beginnt.
   *
   * Auf S1 haengt daran der Lernweg, und genau deshalb erst am Ende: der
   * Wechsel aendert den App-Zustand, und ein Zustandswechsel mitten in der
   * Bewegung laesst den halben Screen neu rechnen. Im Browser (wo die
   * Drehung mangels nativem Treiber in JS laeuft) sah man das als Stocken -
   * dieselbe Drehung wirkte langsamer als auf einem leeren Screen.
   *
   * Bei abgebrochener Drehung (schnell zweimal getippt) laeuft er NICHT -
   * `finished` ist dann false. Wer daran einen Zustand haengt, bekommt
   * deshalb die Seite mitgeliefert und vergleicht, statt blind umzuschalten.
   */
  beiEnde?: (seite: 1 | 2) => void;
} = {}) {
  const [seite, setSeite] = useState<1 | 2>(start);
  const wenigBewegung = useWenigBewegung();
  // 0 = Seite 1, 180 = Seite 2. Beim Aufbau ohne Bewegung auf die
  // Startseite gesetzt: wer S1 im gefuehrten Modus oeffnet, soll die Karte
  // dort vorfinden und nicht erst hindrehen sehen.
  const dreh = useRef(new Animated.Value(start === 2 ? 180 : 0)).current;
  const stand = useRef({ seite: start, wenigBewegung, beiEnde });
  stand.current.wenigBewegung = wenigBewegung;
  stand.current.beiEnde = beiEnde;

  const umdrehen = useRef(() => {
    const neu = stand.current.seite === 1 ? 2 : 1;
    stand.current.seite = neu;
    setSeite(neu);
    const ziel = neu === 2 ? 180 : 0;
    if (stand.current.wenigBewegung) {
      dreh.setValue(ziel);
      // Ohne Bewegung gibt es kein Ende zum Abwarten.
      stand.current.beiEnde?.(neu);
    } else {
      // Feste Dauer statt Feder (2026-09-11, Simon: "make the turn
      // slower"). Die Feder war das falsche Werkzeug dafuer: sie legt fast
      // die ganze Bewegung in den Anfang. Gemessen erreichte die Karte die
      // 90 Grad nach 0,17 s, auch nachdem die Feder schon auf halbes Tempo
      // gestellt war - langsamer wurde nur das kaum sichtbare Ausschwingen.
      // Mit Ein- und Ausbremsen steht sie jetzt nach der halben Dauer
      // hochkant, und die Drehung selbst ist das, was man sieht.
      Animated.timing(dreh, {
        toValue: ziel,
        duration: DREH_DAUER,
        easing: Easing.inOut(Easing.cubic),
        useNativeDriver: true,
      }).start(({ finished }) => {
        if (finished) stand.current.beiEnde?.(neu);
      });
    }
  }).current;

  /**
   * Seite setzen, OHNE zu drehen. Fuer den Fall, dass der Zustand von aussen
   * kommt - auf S1 liegt der Lernweg persistiert im AppState und trifft erst
   * nach dem Laden ein; die Karte zieht dann nach, statt sich zu drehen.
   */
  const setzeSeite = useRef((neueSeite: 1 | 2) => {
    if (stand.current.seite === neueSeite) return;
    stand.current.seite = neueSeite;
    setSeite(neueSeite);
    dreh.setValue(neueSeite === 2 ? 180 : 0);
  }).current;

  return { dreh, seite, umdrehen, setzeSeite };
}

export function BildKarte({
  breite,
  hoehe,
  dreh,
  seite,
  umdrehen,
  quelle,
  name,
  rueckseite,
  rueckseitenBild,
}: {
  breite: number;
  hoehe: number;
  /** Die Drehung kommt vom Screen - der Wechsel-Knopf dreht beide Karten. */
  dreh: Animated.Value;
  seite: 1 | 2;
  umdrehen: () => void;
  /**
   * Das Bild, das die Vorderseite IST. Ohne Bild bleibt die Karte eine
   * ruhige helle Flaeche - besser als eine fremde Zeichnung (2026-09-12:
   * bisher gibt es nur eine, und die zeigt Chinesisch).
   */
  quelle?: ImageSourcePropType;
  /** Fuer die Sprachausgabe: "<name>, Seite 2". */
  name: string;
  /** Was hinten steht. Ohne Angabe bleibt die Rueckseite leer. */
  rueckseite?: ReactNode;
  /**
   * Bild fuer die RUECKSEITE - in der Regel dasselbe wie vorn (2026-09-12,
   * Simons Wunsch fuer S1: die Karte soll das Bild zeigen, egal welche Seite
   * oben liegt).
   *
   * Der Preis ist bekannt und gewollt: mit demselben Bild auf beiden Seiten
   * sieht man der oberen Karte die Drehung kaum noch an - sie bleibt das
   * Bild, nur Schatten und Verkuerzung wandern. Was sich wirklich aendert,
   * zeigt die untere Karte.
   */
  rueckseitenBild?: ImageSourcePropType;
}) {

  const kippX = useRef(new Animated.Value(0)).current;
  const kippY = useRef(new Animated.Value(0)).current;
  const halbeDrehung = useRef(new Animated.Value(180)).current;

  // Der PanResponder entsteht genau einmal. Was er braucht, liest er deshalb
  // ueber diese Ref - sonst saehe er fuer immer die Werte vom ersten Aufbau.
  const stand = useRef({ breite, hoehe });
  stand.current.breite = breite;
  stand.current.hoehe = hoehe;

  const gesten = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onMoveShouldSetPanResponder: () => true,
      onPanResponderMove: (_, g) => {
        kippY.setValue(begrenze((g.dx / (stand.current.breite / 2)) * KIPP_MAX));
        kippX.setValue(begrenze((-g.dy / (stand.current.hoehe / 2)) * KIPP_MAX));
      },
      onPanResponderRelease: (_, g) => {
        if (Math.abs(g.dx) < TIPP_TOLERANZ && Math.abs(g.dy) < TIPP_TOLERANZ) umdrehen();
        zurueckfedern();
      },
      onPanResponderTerminate: () => zurueckfedern(),
    }),
  ).current;

  function zurueckfedern() {
    Animated.parallel([
      Animated.spring(kippX, { toValue: 0, friction: 5, useNativeDriver: true }),
      Animated.spring(kippY, { toValue: 0, friction: 5, useNativeDriver: true }),
    ]).start();
  }

  const anim = useMemo(() => {
    // Umdrehen und Kippen um dieselbe Achse addieren sich - so kippt die
    // Karte auch auf der Rueckseite in die Richtung, in die man zieht.
    const summe = Animated.add(dreh, kippY);
    return {
      vorneY: summe.interpolate({ inputRange: [-360, 360], outputRange: ['-360deg', '360deg'] }),
      hintenY: Animated.add(summe, halbeDrehung).interpolate({
        inputRange: [-360, 720],
        outputRange: ['-360deg', '720deg'],
      }),
      neigung: kippX.interpolate({ inputRange: [-90, 90], outputRange: ['-90deg', '90deg'] }),
      // Zusaetzlich zu `backfaceVisibility`, das Android und Web nicht immer
      // beachten: umgeschaltet genau bei 90 Grad, wo die Karte hochkant
      // steht und keine Seite zu sehen ist.
      vorneDeckung: dreh.interpolate({ inputRange: [89, 91], outputRange: [1, 0], extrapolate: 'clamp' }),
      hintenDeckung: dreh.interpolate({ inputRange: [89, 91], outputRange: [0, 1], extrapolate: 'clamp' }),
    };
  }, [dreh, kippX, kippY, halbeDrehung]);

  return (
    <View
      {...gesten.panHandlers}
      style={{ width: breite, height: hoehe }}
      accessible
      accessibilityRole="button"
      accessibilityLabel={`${name}, Seite ${seite}`}
      accessibilityHint="Dreht die Karte um"
      onAccessibilityTap={umdrehen}
    >
      <Animated.View
        pointerEvents="none"
        style={[
          styles.flaeche,
          {
            width: breite,
            height: hoehe,
            // Ohne Bild derselbe helle Ton wie die Rueckseite - der mittlere
            // Perlmutt-Ton aus `flaeche` sieht als leere Karte aus wie ein
            // fehlendes Bild.
            ...(quelle ? null : { backgroundColor: PERLMUTT[0] }),
            opacity: anim.vorneDeckung,
            transform: [{ perspective: 1000 }, { rotateX: anim.neigung }, { rotateY: anim.vorneY }],
          },
        ]}
      >
        {/* Beschneidende Huelle: die Rundung MUSS hier sitzen und nicht an
            der Flaeche darueber. Die traegt den Schlagschatten, und
            `overflow: hidden` wuerde ihn auf iOS mit abschneiden (dieselbe
            Falle wie beim Pull-down-Menue im Profil).
            `cover`: das Bild fuellt die Karte und wird dabei beschnitten,
            statt verzerrt zu werden - die Kartenmasse kommen vom Screen,
            nicht vom Seitenverhaeltnis des Bildes. */}
        {quelle ? (
          <View style={[styles.bildRahmen, { width: breite, height: hoehe }]}>
            <Image
              source={quelle}
              style={{ width: breite, height: hoehe }}
              resizeMode="cover"
              accessibilityIgnoresInvertColors
            />
          </View>
        ) : null}
      </Animated.View>

      {/* Rueckseite MIT Flaeche (2026-09-12, Simons Wahl: "give the backs
          content").
          Vorher war sie leer - "simply show nothing on the back" von
          demselben Tag. Das machte die gemeinsame Drehung unleserlich: oben
          verschwand das Bild, unten schien nichts zu passieren, und beide
          Karten sahen aus, als taeten sie Verschiedenes. Jetzt zeigt jede
          Seite eine eigene Flaeche, die Drehung ist auf beiden Karten
          dasselbe Ereignis.
          `Rückseite` ist ein PLATZHALTER, kein Inhalt - er sagt nur, dass
          man die andere Seite sieht. */}
      <Animated.View
        pointerEvents="none"
        accessibilityElementsHidden={seite !== 2}
        importantForAccessibility={seite === 2 ? 'auto' : 'no-hide-descendants'}
        style={[
          styles.flaeche,
          {
            width: breite,
            height: hoehe,
            backgroundColor: PERLMUTT[0],
            opacity: anim.hintenDeckung,
            transform: [{ perspective: 1000 }, { rotateX: anim.neigung }, { rotateY: anim.hintenY }],
          },
        ]}
      >
        {/* Dasselbe Raster wie auf der unteren Karte (2026-09-12): ohne das
            war die Bildkarte in der ZWEITEN Haelfte der Drehung wieder eine
            leere Flaeche, an der nichts zu sehen ist - genau die Luecke, die
            die Struktur unten schliessen sollte. Linienfarbe aus dem
            Perlmutt der Karte, nicht aus der App-Palette: der Grund hier ist
            kuehles Violettweiss, ein warmer Grauton saesse daneben. */}
        {RASTER ? <Struktur farbe={PERLMUTT[1]} ecken="alle" /> : null}

        {rueckseitenBild ? (
          // Gleicher Beschnitt wie vorn: die Rundung sitzt an der Huelle,
          // nicht an der Flaeche darueber - die traegt den Schatten.
          <View style={[styles.bildRahmen, { width: breite, height: hoehe }]}>
            <Image
              source={rueckseitenBild}
              style={{ width: breite, height: hoehe }}
              resizeMode="cover"
              accessibilityIgnoresInvertColors
            />
          </View>
        ) : null}
        {rueckseite}
      </Animated.View>
    </View>
  );
}

/**
 * Seitenabstand BEIDER Karten (2026-09-12, Simon in vier Schritten: "not
 * full-width", 10, 12, dann 8 - "do both cards 8px").
 *
 * Auf der Skala: 8 ist `SPACING.sm`. Beide Karten lesen diese eine Groesse -
 * der naechste Versuch ist eine Zeile.
 */
const KARTE_SEITE = SPACING.sm;

const KNOPF_HOEHE = 76;
const WECHSEL_BREITE = 56;
/**
 * Die beiden aeusseren Pillen sind flacher als der Knopf in der Mitte
 * (2026-09-12, Simon: "make the buttons left and right a bit smaller").
 *
 * 56 ist keine neue Zahl, sondern die ZWEITE Knopfhoehe der App: so hoch
 * sind der Wechsel-Knopf und die Kopfzeilen-Knoepfe auf S1. Damit hat die
 * Reihe zwei Groessen statt drei, und der runde Knopf in der Mitte bleibt
 * mit seinen 76 der groesste - wie auf Simons Vorlage.
 */
const PILLE_HOEHE = 56;

/**
 * Struktur auf der unteren Karte (2026-09-12, Simon: "Struktur rein").
 *
 * Der Grund steckt in der Perspektive: eine EINFARBIGE Flaeche zeigt beim
 * Drehen nichts, weil es nichts zu verzerren gibt - sichtbar wird nur, dass
 * die Silhouette schmaler wird. An Linien dagegen liest man die Drehung ab:
 * die waagerechten laufen auf den Fluchtpunkt zu, die senkrechten ruecken
 * auf der abgewandten Seite zusammen. Genau das hatte die obere Karte von
 * sich aus (ihr Foto) und die untere nicht.
 *
 * Haarlinien, Abstand SPACING.xxl, im hellen Rahmenton - zurueckhaltend
 * gemeint: ein strukturiertes Blatt, kein Rechenpapier. Der erste Versuch
 * (24 Abstand im satteren Teilerton) sah im Browser genau danach aus, nach
 * Rechenpapier; eine Stufe weiter und einen Ton heller ist es eine Textur,
 * die man erst beim Drehen richtig wahrnimmt. Was spaeter an Inhalt auf die
 * Karte kommt, liegt darueber.
 *
 * Gerastert statt gekachelt: ein Bild waere billiger, aber die vorhandene
 * Textur (`assets/bg-textur.png`) ist beiges Pergament und wuerde den Ton
 * der Karte umfaerben - #F5F4F1 hat Simon in sechs Schritten festgelegt.
 */
function Struktur({
  farbe,
  ecken = 'oben',
}: {
  farbe: string;
  /**
   * Welche Ecken beschnitten werden. Die untere Karte ist nur oben gerundet
   * (sie laeuft unten aus dem Bildschirm), die freistehende Bildkarte
   * ringsum.
   */
  ecken?: 'oben' | 'alle';
}) {
  const { width, height } = useWindowDimensions();

  // Grosszuegig gerechnet und weggeschnitten: die Karte kennt ihre Hoehe
  // erst im Layout (`flex: 1`), und ein paar Linien zu viel kosten nichts.
  const senkrecht = Math.ceil(width / LINIEN_ABSTAND);
  const waagerecht = Math.ceil(height / LINIEN_ABSTAND);

  return (
    // Der Beschnitt gehoert HIERHIN und nicht an die Flaeche darueber: die
    // traegt den Schatten, und `overflow: hidden` wuerde ihn auf iOS
    // mitschneiden (dieselbe Falle wie beim Bild der oberen Karte).
    <View
      style={[styles.struktur, ecken === 'alle' ? styles.strukturRundum : null]}
      pointerEvents="none"
    >
      {Array.from({ length: senkrecht }, (_, i) => (
        <View
          key={`s${i}`}
          style={[styles.linieSenkrecht, { left: (i + 1) * LINIEN_ABSTAND, backgroundColor: farbe }]}
        />
      ))}
      {Array.from({ length: waagerecht }, (_, i) => (
        <View
          key={`w${i}`}
          style={[styles.linieWaagerecht, { top: (i + 1) * LINIEN_ABSTAND, backgroundColor: farbe }]}
        />
      ))}
    </View>
  );
}

/** Abstand der Strukturlinien - eine Stufe der Skala, keine eigene Zahl. */
const LINIEN_ABSTAND = SPACING.xxl;

/**
 * Raster an oder aus (2026-09-12, Simons Frage: "wie sieht das ganze ohne
 * Raster aus?").
 *
 * Ein Schalter statt Loeschen und Wiederherstellen: die Frage ist eine
 * Geschmacksfrage, und die geht selten in nur eine Richtung. `false` heisst,
 * beide Karten sind wieder glatte Flaechen - schoener im Ruhezustand, aber
 * an der unteren Karte ist die Drehung dann praktisch nicht zu sehen (siehe
 * `Struktur`). Nicht als Literal typisiert, sonst haelt TypeScript den
 * anderen Zweig fuer toten Code.
 */
const RASTER: boolean = false;

/**
 * Die untere Karte: farbig, scrollbar - und die EINZIGE, die sich dreht
 * (2026-09-12, Simon: "only the lower card can rotate").
 *
 * Umgedreht wird per Tippen, nicht per Ziehen: Ziehen gehoert dem Scrollen.
 * Das Pressable liegt um die Scroll-Flaeche - ein Tipp landet bei ihm,
 * sobald der Finger sich bewegt, uebernimmt die Scroll-Flaeche und der Tipp
 * verfaellt.
 *
 * Jede Seite hat ihre eigene Scroll-Flaeche. Nur die sichtbare nimmt
 * Beruehrungen an - die abgewandte liegt deckungsgleich dahinter.
 */
export function BlattKarte({
  rahmen,
  vorne,
  hinten,
  name,
  dreh,
  seite,
  umdrehen,
  tippenDreht = true,
  linien,
  farbe,
}: {
  rahmen: ViewStyle;
  /** Inhalt der Vorderseite - der Screen bringt seine Scroll-Flaeche mit. */
  vorne: ReactNode;
  /** Inhalt der Rueckseite. */
  hinten: ReactNode;
  /** Fuer die Sprachausgabe: "<name>, Seite 2". */
  name: string;
  /**
   * Ob ein Tipp auf die Karte sie umdreht.
   *
   * Auf dem Testscreen ja - dort ist die Karte leer. Auf S1 NEIN: ihr Inhalt
   * ist der Pfad, und der besteht aus lauter Knoepfen. Ein Knopf im Knopf
   * ist im Web schlicht ungueltiges HTML (React meldet es als
   * "<button> cannot contain a nested <button>"), und auf dem Geraet waere
   * es eine Wette darauf, welcher von beiden die Beruehrung bekommt.
   * Umgedreht wird dort ueber den Knopf zwischen den Karten.
   */
  tippenDreht?: boolean;
  dreh: Animated.Value;
  seite: 1 | 2;
  umdrehen: () => void;
  /** Farbe der Strukturlinien (siehe `Struktur`). */
  linien: string;
  /**
   * Grundton der Karte, auf beiden Seiten gleich. Drei Stufen an zwei Tagen:
   * Markenorange (2026-09-11, "make it have a color"), kurz Grau, dann der
   * Pergament-Ton (2026-09-12, "some light beige ... like a map kinda
   * thing") - darueber liegt die Textur.
   */
  farbe: string;
}) {
  // Kippen wie bei der oberen Karte. Der Zug darf aber nur QUER greifen -
  // senkrecht gehoert er dem Scrollen.
  const kippX = useRef(new Animated.Value(0)).current;
  const kippY = useRef(new Animated.Value(0)).current;
  const halbeDrehung = useRef(new Animated.Value(180)).current;
  const mass = useRef({ breite: 0, hoehe: 0 });

  const gesten = useRef(
    PanResponder.create({
      // CAPTURE, nicht das gewoehnliche `onMoveShouldSetPanResponder`: die
      // Scroll-Flaeche darunter greift bei jeder Bewegung zu, und wer nach
      // ihr fragt, kommt zu spaet. Die Bedingung gibt ihr alles Senkrechte
      // zurueck - nur ein deutlich querer Zug wird zum Kippen.
      onMoveShouldSetPanResponderCapture: (_, g) =>
        Math.abs(g.dx) > Math.abs(g.dy) + QUER_SCHWELLE,
      onPanResponderMove: (_, g) => {
        const { breite, hoehe } = mass.current;
        if (!breite || !hoehe) return;
        kippY.setValue(begrenze((g.dx / (breite / 2)) * KIPP_MAX));
        kippX.setValue(begrenze((-g.dy / (hoehe / 2)) * KIPP_MAX));
      },
      onPanResponderRelease: () => zurueckfedern(),
      onPanResponderTerminate: () => zurueckfedern(),
    }),
  ).current;

  function zurueckfedern() {
    Animated.parallel([
      Animated.spring(kippX, { toValue: 0, friction: 5, useNativeDriver: true }),
      Animated.spring(kippY, { toValue: 0, friction: 5, useNativeDriver: true }),
    ]).start();
  }

  const anim = useMemo(() => {
    // Umdrehen und Kippen teilen sich die senkrechte Achse und addieren
    // sich deshalb - wie bei der oberen Karte.
    const summe = Animated.add(dreh, kippY);
    return {
      vorneY: summe.interpolate({ inputRange: [-360, 360], outputRange: ['-360deg', '360deg'] }),
      hintenY: Animated.add(summe, halbeDrehung).interpolate({
        inputRange: [-360, 720],
        outputRange: ['-360deg', '720deg'],
      }),
      neigung: kippX.interpolate({ inputRange: [-90, 90], outputRange: ['-90deg', '90deg'] }),
      // Zusaetzlich zu `backfaceVisibility`, das Android und Web nicht immer
      // beachten: umgeschaltet genau bei 90 Grad, wo die Karte hochkant
      // steht und keine Seite zu sehen ist.
      vorneDeckung: dreh.interpolate({ inputRange: [89, 91], outputRange: [1, 0], extrapolate: 'clamp' }),
      hintenDeckung: dreh.interpolate({ inputRange: [89, 91], outputRange: [0, 1], extrapolate: 'clamp' }),
    };
  }, [dreh, kippX, kippY, halbeDrehung]);

  const flaeche = (
    nr: 1 | 2,
    deckung: Animated.AnimatedInterpolation<number>,
    drehY: Animated.AnimatedInterpolation<string>,
  ) => (
    <Animated.View
      key={nr}
      pointerEvents={seite === nr ? 'auto' : 'none'}
      // Die abgewandte Seite ist auch fuer die Sprachausgabe weg. Ohne das
      // liest VoiceOver beide Seiten hintereinander vor - auf S1 also beide
      // Lernwege, von denen einer gar nicht zu sehen ist.
      accessibilityElementsHidden={seite !== nr}
      importantForAccessibility={seite === nr ? 'auto' : 'no-hide-descendants'}
      style={[
        styles.farbFlaeche,
        rahmen,
        {
          backgroundColor: farbe,
          opacity: deckung,
          transform: [{ perspective: 1000 }, { rotateX: anim.neigung }, { rotateY: drehY }],
        },
      ]}
    >
      {RASTER ? <Struktur farbe={linien} /> : null}

      {/* Der Inhalt kommt vom Screen - auf S1 die beiden Lernwege, je einer
          je Seite. BEIDE sind immer gebaut, auch die abgewandte: sie liegt
          deckungsgleich dahinter und nimmt keine Beruehrungen an
          (`pointerEvents` oben), sonst muesste sie beim Umdrehen erst
          aufgebaut werden und die halbe Drehung zeigte eine leere Karte. */}
      {nr === 1 ? vorne : hinten}
    </Animated.View>
  );

  return (
    // Aussen der Zug fuers Kippen, innen der Tipp fuers Umdrehen und die
    // Scroll-Flaeche. Die Masse kommen aus dem Layout, damit der Ausschlag
    // sich wie bei der oberen Karte an der Kartengroesse bemisst.
    <View
      {...gesten.panHandlers}
      style={styles.farbKarte}
      onLayout={(e) => {
        mass.current.breite = e.nativeEvent.layout.width;
        mass.current.hoehe = e.nativeEvent.layout.height;
      }}
    >
      {tippenDreht ? (
        <Pressable
          onPress={umdrehen}
          style={styles.farbKarte}
          accessibilityRole="button"
          accessibilityLabel={`${name}, Seite ${seite}`}
          accessibilityHint="Dreht die Karte um"
        >
          {flaeche(1, anim.vorneDeckung, anim.vorneY)}
          {flaeche(2, anim.hintenDeckung, anim.hintenY)}
        </Pressable>
      ) : (
        <>
          {flaeche(1, anim.vorneDeckung, anim.vorneY)}
          {flaeche(2, anim.hintenDeckung, anim.hintenY)}
        </>
      )}
    </View>
  );
}

/**
 * Eine der beiden aeusseren Pillen. Material und Masse wie `SoftButton` auf
 * S1 (`karte()`, RADIUS.pill) - nur der Innenabstand ist eine Stufe kleiner,
 * weil hier ZWEI Pillen die Breite teilen, die dort eine allein hatte, und
 * weil ein einzelnes Wort nicht umbrechen kann.
 *
 * MIT `onPress` ein echter Knopf (Rolle, Beschriftung, Hinweis, gedrueckte
 * Fuellung wie auf S1), OHNE eine Attrappe: `pointerEvents="none"` und fuer
 * Screenreader ausgeblendet, damit ein Tipp nicht an einem Knopf endet, der
 * nichts tut. Heute hat "Tageslektion" eine Handlung und "Sprachlektion"
 * nicht.
 */
export function LektionsPille({
  dark,
  label,
  hinweis,
  onPress,
}: {
  dark: boolean;
  label: string;
  /** Nur mit `onPress` sinnvoll - der Screenreader liest ihn nach dem Label. */
  hinweis?: string;
  onPress?: () => void;
}) {
  const theme = getTheme(dark);

  // Form und Material an EINER Stelle, damit Knopf und Attrappe nie
  // auseinanderlaufen.
  const form = (gedrueckt: boolean) => [
    styles.softKnopf,
    karte(dark),
    {
      backgroundColor: gedrueckt ? theme.subtleFill : theme.cardBg,
      // NACH `karte()`, sonst gewinnt dessen RADIUS.lg und aus dem Stadion
      // wird ein Rechteck. Genau dieselbe Stelle ist in `SoftButton` auf S1
      // dokumentiert - hier war sie bis zum 2026-09-12 falsch herum,
      // gemessen im Browser: 16 statt 100.
      //
      // Uebernommen wird das MATERIAL der Karte (Rand, Schatten), nicht ihre
      // Form: der runde Knopf daneben behaelt RADIUS.lg aus `karte()`, wie
      // `toggleButton` auf S1.
      borderRadius: RADIUS.pill,
    },
  ];

  const beschriftung = (
    <Text style={[styles.softLabel, { color: theme.text }]} numberOfLines={1}>
      {label}
    </Text>
  );

  if (!onPress) {
    return (
      <View
        style={form(false)}
        pointerEvents="none"
        accessibilityElementsHidden
        importantForAccessibility="no-hide-descendants"
      >
        {beschriftung}
      </View>
    );
  }

  return (
    <Pressable
      onPress={onPress}
      accessibilityRole="button"
      accessibilityLabel={label}
      accessibilityHint={hinweis}
      style={({ pressed }) => form(pressed)}
    >
      {beschriftung}
    </Pressable>
  );
}

/**
 * Der runde Knopf in der Mitte der Reihe. Dreht beide Karten; auf S1 haengt
 * daran zusaetzlich der Wechsel des Lernwegs.
 */
export function WechselKnopf({
  dark,
  onPress,
  label,
  hinweis,
}: {
  dark: boolean;
  onPress: () => void;
  label: string;
  hinweis?: string;
}) {
  const theme = getTheme(dark);

  return (
    <Pressable
      onPress={onPress}
      accessibilityRole="button"
      accessibilityLabel={label}
      accessibilityHint={hinweis}
      style={({ pressed }) => [
        styles.wechselKnopf,
        karte(dark),
        { backgroundColor: theme.cardBg, opacity: pressed ? 0.7 : 1 },
      ]}
    >
      {/* Schleife wie auf S1 (2026-09-12, Simon: "keep the loop icon from
          S1") - der Knopf schaltet hin und her, er fuehrt nicht woandershin. */}
      <Feather name="repeat" size={24} color={theme.text} />
    </Pressable>
  );
}

/** Die Reihe zwischen den Karten: Pille, runder Knopf, Pille. */
export function Knopfreihe({ children }: { children: ReactNode }) {
  return <View style={styles.knopfReihe}>{children}</View>;
}

export { KARTE_HOEHE, KARTE_SEITE, PERLMUTT, SCHATTEN, SCHATTEN_TIEFE, TINTE };

const styles = StyleSheet.create({
  knopfReihe: {
    // Im Fluss zwischen den Karten - der Abstand nach oben und unten ist
    // derselbe, damit die Reihe mittig zwischen ihnen sitzt.
    marginTop: SPACING.lg,
    marginBottom: SPACING.lg,
    marginHorizontal: KARTE_SEITE - SPACING.lg,
    flexDirection: 'row',
    // `center`, NICHT `stretch` wie auf S1 (2026-09-12): dort sollen Knopf
    // und Kasten gleich hoch sein, und `stretch` erledigt das ohne zwei
    // Zahlen. Hier sollen sie es gerade NICHT - die Pillen sind absichtlich
    // flacher, und `stretch` haette sie wieder auf die Zeilenhoehe gezogen.
    alignItems: 'center',
    justifyContent: 'center',
    gap: SPACING.sm,
  },
  wechselKnopf: {
    width: WECHSEL_BREITE,
    minHeight: KNOPF_HOEHE,
    alignItems: 'center',
    justifyContent: 'center',
  },
  softKnopf: {
    // Die Pillenform steht an der Verwendung, NACH `karte()` - hier haette
    // sie keine Wirkung, siehe die Begruendung dort.
    minHeight: PILLE_HOEHE,
    alignItems: 'center',
    justifyContent: 'center',
    // Eine Stufe flacher als auf S1 (dort SPACING.lg) - sonst traegt die
    // Beschriftung mit ihren 24 Punkten Zeilenhoehe die Pille ueber die 56
    // hinaus, und die Verkleinerung waere wieder weg.
    paddingVertical: SPACING.md,
    // Enger als auf S1 (dort SPACING.xl): zwei Pillen teilen die Breite,
    // die dort eine allein hatte, und "Sprachlektion" ist EIN Wort - es kann
    // nicht umbrechen, es wuerde abgeschnitten. Gemessen bei 375 Punkten
    // Bildschirmbreite: Pille 144, Beschriftung 109 - 11 Punkte Luft.
    paddingHorizontal: SPACING.md,
    // Gleich breit statt an den Text geschmiegt. Auf S1 schmiegt sich der
    // eine Knopf an seine Beschriftung; hier stehen zwei nebeneinander, und
    // zwei verschieden breite Pillen um einen mittigen Knopf saehen schief
    // aus. `flexShrink` gehoert dazu: auf einem schmaleren Geraet weicht die
    // Pille, statt den runden Knopf aus der Reihe zu druecken.
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
  },
  softLabel: {
    fontSize: FONT_SIZE.bodyLg,
    lineHeight: LINE_HEIGHT.bodyLg,
    ...schrift('700'),
    textAlign: 'center',
  },
  struktur: {
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    // Wie die Karte selbst: nur oben gerundet, unten laeuft sie aus dem
    // Bildschirm.
    borderTopLeftRadius: RADIUS.lg,
    borderTopRightRadius: RADIUS.lg,
    overflow: 'hidden',
  },
  strukturRundum: {
    // NUR die beiden unteren Ecken - die oberen stehen schon in `struktur`.
    // Bewusst als Einzelangaben und nicht als `borderRadius`: die
    // Sammelangabe schlaegt im Web spaetere Einzelangaben, und diese Falle
    // hat in diesem Screen schon einmal die Kopfleiste verbogen.
    borderBottomLeftRadius: ECKE,
    borderBottomRightRadius: ECKE,
  },
  linieSenkrecht: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    width: 1,
  },
  linieWaagerecht: {
    position: 'absolute',
    left: 0,
    right: 0,
    height: 1,
  },
  farbKarte: {
    flex: 1,
  },
  farbFlaeche: {
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    backfaceVisibility: 'hidden',
  },
  flaeche: {
    position: 'absolute',
    top: 0,
    left: 0,
    backfaceVisibility: 'hidden',
    // Seit die Unterkante wieder gerade ist, deckt sich die Kartenform mit
    // diesem Rechteck - der Schlagschatten passt also wieder und ist zurueck
    // (mit der Woelbung stand er als gerade Kante darunter). Sichtbar ist
    // die Flaeche selbst nicht, das SVG liegt darueber; der deckende Grund
    // laesst iOS den Schatten nur ohne Umweg zeichnen.
    borderRadius: ECKE,
    backgroundColor: PERLMUTT[1],
    // Derselbe Schatten wie bei der unteren Karte, nach UNTEN (siehe
    // `SCHATTEN`). Gilt fuer Vorder- und Rueckseite, beide nutzen diesen
    // Stil - beim Drehen schwingt also auf beiden Seiten dasselbe mit.
    ...SCHATTEN,
    shadowOffset: { width: 0, height: SCHATTEN_TIEFE },
  },
  bildRahmen: {
    borderRadius: ECKE,
    overflow: 'hidden',
  },
  rueckseiteInhalt: {
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    alignItems: 'center',
    justifyContent: 'center',
  },
  rueckseiteText: {
    color: TINTE,
    // Zurueckhaltend: es ist eine Markierung, kein Inhalt.
    opacity: 0.45,
    fontSize: FONT_SIZE.body,
    ...schrift('700'),
  },
});
