import { useEffect, useRef, useState } from 'react';
import { AccessibilityInfo, Animated, Easing, Image, Pressable, StyleSheet, Text, View } from 'react-native';
import type { ImageSourcePropType } from 'react-native';
import { FONT_SIZE, LINE_HEIGHT, RADIUS, SPACING, getTheme, schrift } from '../../theme/tokens';
import { useAppState } from '../../state/AppState';

// Lag vorher in PathScreen.tsx. Seit der neue Startscreen dieselbe Karte
// zeigt, braeuchten es zwei Screens; eine Kopie waere die uebliche Falle,
// dass eine neue Sprache nur auf einem von beiden ankommt.

type Sprachfiguren = Record<
  string,
  {
    ruhe: ReturnType<typeof require>;
    blinzeln?: ReturnType<typeof require>;
    sagtOben?: string;
    sagtUnten?: string;
  }
>;

/**
 * Was die Figur sagt - fuer alle Sprachen dasselbe.
 *
 * Die Blasen sind OBERFLAECHE, kein Lernstoff: sie stehen auf Deutsch, so
 * wie die ganze App. Eine Zeile je Sprache waere achtmal derselbe Satz und
 * achtmal eine Stelle, an der beim naechsten Umformulieren eine vergessen
 * wird. Wer einer Sprache etwas Eigenes geben will, traegt es unten bei ihr
 * ein - die Vorgabe gilt nur, wo nichts steht.
 */
const SAGT_OBEN = 'Bereit für unsere nächste Unterhaltung?';
const SAGT_UNTEN = 'Lass uns gemeinsam üben!';

/**
 * Die Zeichnungen (2026-09-27: acht Sprachen statt einer).
 *
 * **Beide Fassungen stammen aus DERSELBEN Datei** - Simons Vorlage zeigt je
 * Sprache beide Posen nebeneinander. Die Blinzel-Fassung ist aber nicht die
 * rechte Haelfte, sondern die LINKE mit der Augenpartie der rechten darin:
 * die zwei Posen sind unabhaengig gezeichnet und unterscheiden sich in
 * Haltung und Groesse um ein paar Punkte, und beim Wechsel haette die ganze
 * Figur gezuckt. Ausserhalb der Augen sind die Dateien deshalb punktgleich,
 * der Umriss sogar Punkt fuer Punkt identisch. Erzeugt von
 * `Maskottchen neu/aufbereiten.py`, dort steht das Verfahren.
 *
 * **Es fehlen Spanisch, Polnisch und Vietnamesisch** - fuer die drei liegt
 * keine Zeichnung vor. Ihre Karte bleibt leer, bis eine kommt; das ist
 * sichtbar und deshalb besser als ein fremdes Land.
 */
const ZEICHNUNGEN: Sprachfiguren = {
  de: {
    ruhe: require('../../../assets/figur-de.png'),
    blinzeln: require('../../../assets/figur-de-blinzeln.png'),
  },
  en: {
    ruhe: require('../../../assets/figur-en.png'),
    blinzeln: require('../../../assets/figur-en-blinzeln.png'),
  },
  fr: {
    ruhe: require('../../../assets/figur-fr.png'),
    blinzeln: require('../../../assets/figur-fr-blinzeln.png'),
  },
  it: {
    ruhe: require('../../../assets/figur-it.png'),
    blinzeln: require('../../../assets/figur-it-blinzeln.png'),
  },
  no: {
    ruhe: require('../../../assets/figur-no.png'),
    blinzeln: require('../../../assets/figur-no-blinzeln.png'),
  },
  ru: {
    ruhe: require('../../../assets/figur-ru.png'),
    blinzeln: require('../../../assets/figur-ru-blinzeln.png'),
  },
  sv: {
    ruhe: require('../../../assets/figur-sv.png'),
    blinzeln: require('../../../assets/figur-sv-blinzeln.png'),
  },
  zh: {
    ruhe: require('../../../assets/figur-zh.png'),
    blinzeln: require('../../../assets/figur-zh-blinzeln.png'),
  },
};

/**
 * Welche Sprache welche Figur hat - EINE Stelle (2026-09-26 hierher gezogen).
 */
export const SPRACH_FIGUREN: Sprachfiguren = Object.fromEntries(
  Object.entries(ZEICHNUNGEN).map(([id, f]) => [
    id,
    { sagtOben: SAGT_OBEN, sagtUnten: SAGT_UNTEN, ...f },
  ])
);

// Die Figur auf der Sprachkarte (2026-09-26, Simons Vorgabe: "Für S1
// Chinesisch setze dieses Bild und mach Idle Animation").
//
// **Warum sie nicht das Kartenbild ERSETZT:** die Vorlage ist freigestellt
// (46 % der Flaeche durchsichtig) und fast quadratisch. Die Karte ist
// 1,85:1 und fuellt mit `cover` - Hut und Saum waeren abgeschnitten
// gewesen. Als eigene Ebene ueber der Szene bleibt die Figur ganz, und die
// Transparenz tut genau das, wofuer es sie gibt.
//
// **Nicht zu verwechseln mit den Begleitfiguren** aus `data/mascots.ts`:
// die waehlt der Nutzer im Onboarding, sie haengen an der PERSON. Diese
// hier haengt an der SPRACHE und wechselt mit ihr.

/**
 * Anteil der Kartenhoehe, den die Figur einnimmt.
 *
 * Etwas groesser, seit sie mittig steht und die Karte sonst leer ist
 * (2026-09-26, Simon: "Schieb das Maskottchen in die Mitte der Karte und
 * entferne den Hintergrund"). Nach oben begrenzt der Atemhub: bei mehr als
 * rund 0,85 stiesse der Hut beim Einatmen an die Kartenkante.
 */
const ANTEIL = 0.82;

/**
 * Anteil, wenn ueber und unter der Figur eine Sprechblase steht
 * (2026-09-26, Simons Vorlage). Die beiden Blasen brauchen zusammen rund
 * 45 % der Kartenhoehe - bliebe die Figur bei 0,82, staende sie hinter
 * ihnen statt zwischen ihnen.
 */
/**
 * Mit Sprechblasen wird die Figur NICHT mehr als Anteil der Karte
 * gerechnet, sondern von aussen nach innen (2026-09-27, Simon: "Figur
 * bleibt so gross und Karte wird einen Tick groesser").
 *
 * **Der Grund ist Arithmetik, keine Vorliebe:** als Anteil waechst die Figur
 * mit der Karte mit, und der Weissraum dazwischen bleibt fast gleich. Eine
 * groessere Karte haette dann nichts gebracht ausser einer groesseren Figur.
 * Umgekehrt herum bekommt jeder zusaetzliche Punkt Kartenhoehe die weisse
 * Flaeche - genau das war der Wunsch.
 *
 * Die Figur ergibt sich also aus: Kartenhoehe minus zweimal (Blase + Luft).
 */
const BLASEN_PLATZ = 40;
const LUFT = 28;

/** Damit eine sehr flache Karte die Figur nicht auf nichts zusammendrueckt. */
const FIGUR_MIN = 70;

/** Kantenlaenge des gedrehten Quadrats, das den Zipfel bildet. */
const ZIPFEL = 12;

/**
 * Seitenverhaeltnis - JE FIGUR aus der Datei gelesen, nicht fest verdrahtet.
 *
 * Stand hier bis zum 2026-09-27 als `618 / 560`, weil es nur die chinesische
 * Figur gab. Mit acht Sprachen stimmt keine einzige Zahl mehr fuer alle: die
 * russische ist fast quadratisch, die deutsche deutlich breiter. Eine feste
 * Zahl haette jede zweite Figur gestaucht.
 *
 * Aus dem Bild statt aus einer Tabelle: die Masse stehen ohnehin in der
 * Datei, und eine Tabelle daneben waere die naechste Stelle, die beim
 * Austauschen einer Zeichnung vergessen wird.
 */
const VERHAELTNIS_VORGABE = 618 / 560;

function verhaeltnisVon(quelle: ImageSourcePropType): number {
  try {
    const gelesen = Image.resolveAssetSource(quelle as never);
    if (gelesen?.width && gelesen?.height) return gelesen.width / gelesen.height;
  } catch {
    // Kein statisches Bild (z.B. eine URL) - dann bleibt die Vorgabe.
  }
  return VERHAELTNIS_VORGABE;
}

/** Wie weit sie beim Atmen steigt, in Punkten. */
const HUB = 7;

/** Wie weit sie dabei kippt, in Grad. */
const NEIGUNG = 1.6;

// ---------------------------------------------------------------------------
// Blinzeln (2026-09-26, Simons Vorgabe: "die Figur soll auf jeden Fall in
// regelmaessigen Abstaenden blinzeln")
// ---------------------------------------------------------------------------
//
// **Es braucht ZWEI Bilder.** Ein Blinzeln geht von offen nach zu und
// zurueck; mit nur einem Zustand gibt es nichts zu wechseln. Die Figur
// liegt deshalb als `quelle` (Ruhezustand) und optional `blinzeln`
// (geschlossene Augen) vor. Fehlt die zweite Datei, atmet die Figur
// einfach weiter - kein Fehler, nur kein Blinzeln.
//
// **Beide Bilder liegen uebereinander und werden ueber die Deckkraft
// getauscht**, statt eine Quelle umzuschalten. Ein Quellenwechsel muesste
// das zweite Bild beim ERSTEN Blinzeln erst dekodieren - sichtbar als
// Zucken. Uebereinander sind beide von Anfang an da.

/** Wie lange die Augen zu sind. Ein menschlicher Lidschlag dauert 100-150 ms. */
const BLINZEL_DAUER = 130;

/** Kuerzester und laengster Abstand zwischen zwei Lidschlaegen, in Millisekunden. */
const PAUSE_MIN = 3500;
const PAUSE_MAX = 7000;

/**
 * Wie oft ein Doppel-Lidschlag folgt.
 *
 * Ohne den wirkt das Blinzeln wie ein Metronom, auch mit zufaelliger
 * Pause - Menschen blinzeln gelegentlich zweimal kurz hintereinander.
 */
const DOPPEL_ANTEIL = 0.2;
const DOPPEL_PAUSE = 220;

export function Sprachfigur({
  quelle,
  blinzeln,
  kartenHoehe,
  mitBlasen = false,
}: {
  /** Der Ruhezustand - das Bild, das fast immer zu sehen ist. */
  quelle: ImageSourcePropType;
  /**
   * Dieselbe Figur mit GESCHLOSSENEN Augen. Ohne sie blinzelt niemand.
   *
   * Die chinesische Vorlage vom 2026-09-26 zeigt bereits geschlossene
   * Lach-Augen - sie ist also die BLINZEL-Fassung, und was fehlt, ist die
   * mit offenen Augen. Bis die da ist, steht sie als `quelle` und die
   * Figur blinzelt nicht.
   */
  blinzeln?: ImageSourcePropType;
  /** Hoehe der Karte - die Figur richtet sich danach, nicht nach festen Punkten. */
  kartenHoehe: number;
  /**
   * Ob ueber und unter der Figur Sprechblasen stehen.
   *
   * Die Blasen selbst zeichnet `Sprechblasen` in der KNOPF-Ebene der Karte,
   * nicht hier - siehe dort, warum. Diese Angabe braucht die Figur nur, um
   * kleiner zu werden und ihnen Platz zu lassen.
   */
  mitBlasen?: boolean;
}) {
  const hoehe = mitBlasen
    ? Math.max(FIGUR_MIN, kartenHoehe - 2 * (BLASEN_PLATZ + LUFT))
    : Math.round(kartenHoehe * ANTEIL);
  const breite = Math.round(hoehe * verhaeltnisVon(quelle));

  const heben = useRef(new Animated.Value(0)).current;
  const kippen = useRef(new Animated.Value(0)).current;
  const [augenZu, setAugenZu] = useState(false);

  // Dieselbe Pruefung wie im Fortschrittsbalken: "Bewegung reduzieren"
  // meint jede Dauerbewegung, und eine endlos atmende Figur ist genau das.
  // Apple prueft im Review darauf.
  const [ruhig, setRuhig] = useState(false);
  useEffect(() => {
    let aktiv = true;
    AccessibilityInfo.isReduceMotionEnabled().then((an) => {
      if (aktiv) setRuhig(an);
    });
    const sub = AccessibilityInfo.addEventListener('reduceMotionChanged', setRuhig);
    return () => {
      aktiv = false;
      sub.remove();
    };
  }, []);

  useEffect(() => {
    if (ruhig) {
      heben.setValue(0);
      kippen.setValue(0);
      return;
    }

    // ZWEI Schleifen mit ungleicher Dauer, nicht eine gemeinsame: bei
    // gleichem Takt sieht die Bewegung mechanisch aus, weil Heben und
    // Kippen immer im selben Augenblick umkehren. Mit 2600 gegen 3400
    // laufen sie auseinander und wieder zusammen - das wirkt lebendig,
    // ohne dass ein Bewegungspfad entworfen werden musste.
    const pendel = (wert: Animated.Value, dauer: number) =>
      Animated.loop(
        Animated.sequence([
          Animated.timing(wert, {
            toValue: 1,
            duration: dauer,
            easing: Easing.inOut(Easing.sin),
            // Nur Transformationen - die laufen im nativen Treiber und
            // bleiben fluessig, waehrend JS gerade Saetze laedt.
            useNativeDriver: true,
          }),
          Animated.timing(wert, {
            toValue: 0,
            duration: dauer,
            easing: Easing.inOut(Easing.sin),
            useNativeDriver: true,
          }),
        ]),
      );

    // NICHT im Browser nachpruefbar: die Vorschau zeichnet nur, wenn ihr
    // Fenster vorn liegt - sonst laufen null Bilder je Sekunde und JEDE
    // Animation steht still. Wer dort eine eingefrorene Figur misst, hat
    // die Vorschau gemessen, nicht die Schleife. Der Beweis ist das Geraet.
    const a = pendel(heben, 2600);
    const b = pendel(kippen, 3400);
    a.start();
    b.start();
    return () => {
      a.stop();
      b.stop();
    };
  }, [ruhig, heben, kippen]);

  // Der Lidschlag laeuft ueber eine Kette aus Zeitgebern, nicht ueber ein
  // festes Intervall: jede Pause wuerfelt ihre eigene Laenge, und ein
  // `setInterval` koennte das nicht. Jeder Zeitgeber wird beim Aufraeumen
  // abgeraeumt - sonst blinzelt ein laengst verlassener Screen weiter.
  useEffect(() => {
    if (ruhig || !blinzeln) {
      setAugenZu(false);
      return;
    }

    let abgeraeumt = false;
    const uhren: ReturnType<typeof setTimeout>[] = [];
    const spaeter = (fn: () => void, ms: number) => {
      const u = setTimeout(() => {
        if (!abgeraeumt) fn();
      }, ms);
      uhren.push(u);
    };

    const einmal = (danach: () => void) => {
      setAugenZu(true);
      spaeter(() => {
        setAugenZu(false);
        danach();
      }, BLINZEL_DAUER);
    };

    const naechste = () => {
      const pause = PAUSE_MIN + Math.random() * (PAUSE_MAX - PAUSE_MIN);
      spaeter(() => {
        einmal(() => {
          if (Math.random() < DOPPEL_ANTEIL) {
            spaeter(() => einmal(naechste), DOPPEL_PAUSE);
          } else {
            naechste();
          }
        });
      }, pause);
    };

    naechste();
    return () => {
      abgeraeumt = true;
      uhren.forEach(clearTimeout);
    };
  }, [ruhig, blinzeln]);

  return (
    // `pointerEvents: none` ist Pflicht, nicht Feinschliff: die Karte dreht
    // sich beim Antippen, und eine Figur, die den Tipp abfaengt, macht
    // ausgerechnet die haelfte der Karte tot.
    <View style={styles.platz} pointerEvents="none">
      <Animated.View
        style={{
          width: breite,
          height: hoehe,
          transform: [
            { translateY: heben.interpolate({ inputRange: [0, 1], outputRange: [0, -HUB] }) },
            {
              rotate: kippen.interpolate({
                inputRange: [0, 1],
                outputRange: [`-${NEIGUNG}deg`, `${NEIGUNG}deg`],
              }),
            },
          ],
        }}
      >
        <Image
          source={quelle}
          style={{ width: breite, height: hoehe }}
          // `contain`, nicht `cover`: die Figur darf nie beschnitten werden,
          // sonst fehlt der Hut.
          resizeMode="contain"
          accessibilityIgnoresInvertColors
        />
        {blinzeln ? (
          <Image
            source={blinzeln}
            style={[
              StyleSheet.absoluteFill,
              { width: breite, height: hoehe, opacity: augenZu ? 1 : 0 },
            ]}
            resizeMode="contain"
            accessibilityIgnoresInvertColors
          />
        ) : null}
      </Animated.View>
    </View>
  );
}

/**
 * Eine Sprechblase mit Zipfel zur Figur (2026-09-26, nach Simons Vorlage).
 *
 * **Der Zipfel ist ein um 45 Grad gedrehtes Quadrat**, kein Dreieck aus
 * Rahmenbreiten. Der uebliche Dreiecks-Trick kann keinen Rand tragen - man
 * bekaeme eine weisse Spitze ohne Kontur an einer umrandeten Blase. Das
 * Quadrat traegt seinen Rand auf zwei Seiten, und der halbe Ueberlapp
 * versteckt die anderen beiden hinter der Blase.
 */
/**
 * Die beiden Blasen als eigene Ebene (2026-09-26).
 *
 * **Sie gehoeren in die KNOPF-Ebene der Karte, nicht zur Figur.** Die
 * Gestenflaeche der Karte greift mit `onStartShouldSetPanResponder: () =>
 * true` jeden Tipp ab - ein Knopf darin loeste nie aus, die Karte drehte
 * sich nur. Genau deshalb liegt auch der Geschenk-Knopf schon dort: eine
 * Ebene NEBEN der Geste, mit derselben Drehung, `box-none`, damit alles
 * ausser den Knoepfen weiterhin zur Karte durchfaellt.
 */
export function Sprechblasen({
  oben,
  unten,
  onOben,
  onUnten,
}: {
  oben?: string;
  unten?: string;
  onOben: () => void;
  onUnten: () => void;
}) {
  return (
    <>
      {oben ? (
        <View style={[styles.blasenEbene, styles.blasenEbeneOben]} pointerEvents="box-none">
          <Sprechblase text={oben} zipfel="unten" onPress={onOben} />
        </View>
      ) : null}
      {unten ? (
        <View style={[styles.blasenEbene, styles.blasenEbeneUnten]} pointerEvents="box-none">
          <Sprechblase text={unten} zipfel="oben" onPress={onUnten} />
        </View>
      ) : null}
    </>
  );
}

function Sprechblase({
  text,
  zipfel,
  onPress,
}: {
  text: string;
  zipfel: 'oben' | 'unten';
  onPress?: () => void;
}) {
  // Flaeche, Rand und Schrift aus dem App-Thema statt fest (2026-09-27):
  // eine weisse Blase auf dem dunklen Startscreen war der letzte helle
  // Fleck, der den Schalter nicht mitbekommen hat.
  const theme = getTheme(useAppState().darkMode);
  const haut = { backgroundColor: theme.cardBg, borderColor: theme.border };
  // Die OBERE Blase muss am Geschenk-Knopf vorbei (44 breit, 12 vom Rand -
  // er belegt die rechten 56 Punkte der Karte). Mittig gesetzt heisst das
  // hoechstens rund zwei Drittel der Breite, sonst laeuft sie darunter
  // durch. Die untere Blase hat den Platz.
  const spitze = (
    <View
      style={[
        styles.zipfel,
        haut,
        zipfel === 'unten' ? styles.zipfelUnten : styles.zipfelOben,
      ]}
    />
  );
  return (
    <Pressable
      onPress={onPress}
      accessibilityRole="button"
      accessibilityLabel={text}
      style={({ pressed }) => [styles.blasenPlatz, pressed && styles.gedrueckt]}
    >
      {zipfel === 'oben' ? spitze : null}
      <View style={[styles.blase, haut]}>
        <Text style={[styles.blasenText, { color: theme.text }]} numberOfLines={2}>
          {text}
        </Text>
      </View>
      {zipfel === 'unten' ? spitze : null}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  platz: {
    // Fuellt die Karte und zentriert die Figur darin. Vorher klebte sie mit
    // festem Abstand unten rechts - das war richtig, solange sie AUF einer
    // Szene stand; als einziger Inhalt der Karte gehoert sie in die Mitte.
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center',
  },

  gedrueckt: { opacity: 0.6 },
  blasenEbene: { position: 'absolute', left: 0, right: 0, alignItems: 'center' },
  blasenEbeneOben: { top: 2 },
  blasenEbeneUnten: { bottom: 2 },
  // 92 % statt der frueheren 68 % fuer die obere Blase: die Einschraenkung
  // gab es nur, damit sie am Geschenk-Knopf oben rechts vorbeikam. Der ist
  // seit dem 2026-09-27 weg, der lange Satz passt wieder in eine Zeile.
  // Kommt je wieder ein Knopf in die obere Ecke, braucht sie den Einzug
  // zurueck.
  blasenPlatz: { alignItems: 'center', maxWidth: '92%' },
  blase: {
    borderRadius: RADIUS.lg,
    borderWidth: 1,
    paddingVertical: SPACING.sm,
    paddingHorizontal: SPACING.md,
  },
  blasenText: {
    ...schrift('800'),
    fontSize: FONT_SIZE.caption,
    lineHeight: LINE_HEIGHT.caption,
    textAlign: 'center',
  },
  zipfel: {
    width: ZIPFEL,
    height: ZIPFEL,
    transform: [{ rotate: '45deg' }],
  },
  // Der halbe Ueberlapp schiebt die beiden rahmenlosen Seiten unter die
  // Blase - sichtbar bleibt nur die Spitze mit ihrer Kontur.
  zipfelUnten: {
    borderRightWidth: 1,
    borderBottomWidth: 1,
    marginTop: -ZIPFEL / 2,
  },
  zipfelOben: {
    borderLeftWidth: 1,
    borderTopWidth: 1,
    marginBottom: -ZIPFEL / 2,
  },
});
