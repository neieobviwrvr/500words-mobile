import { useEffect, useRef, useState } from 'react';
import { Animated, Easing, Platform, Pressable, StyleSheet, Text, View } from 'react-native';
import { router } from 'expo-router';
import { Feather } from '@expo/vector-icons';
import { useAppState } from '../state/AppState';
import {
  getTheme,
  RADIUS,
  SPACING,
  FONT_SIZE,
  schrift,
  kachel,
  FLOATING_SHADOW,
  FLOATING_BORDER,
} from '../theme/tokens';

// Das ausfahrbare Drei-Punkte-Menue der Kopfzeile.
//
// Enthaelt die Einstiege, die nicht in die Tab-Leiste passen: Geschenk
// (taegliche Kiste) und Coins. "Freunde" lag bis 2026-08-18 in der
// Tab-Leiste, ist kurz hierher gewandert und am 2026-08-20 auf Nutzer-Wunsch
// wieder zurueck. "Profil" lag vom 2026-08-18 bis zum 2026-08-22 ebenfalls
// hier - seitdem ist es der fuenfte Tab in der Leiste und aus dem Menue
// entfernt (Nutzer-Entscheidung: zwei Wege zum selben Screen, einer davon
// versteckt, ist einer zu viel).

/** Strecke, aus der die Knoepfe hervorfahren - ein Hervorkommen, kein Flug. */
const MENU_SLIDE = 28;
// 260 statt der urspruenglichen 200 (Nutzer-Wunsch 2026-08-18: "eine Spur
// langsamer"). Gilt bewusst fuer BEIDE Richtungen - waere nur das Ausfahren
// laenger, waere die Asymmetrie zurueck, die wir gerade erst beseitigt haben.
// Die Uhr, die die Knoepfe aushaengt, haengt an derselben Zahl und wandert
// automatisch mit.
const MENU_DURATION = 260;
/** Breite eines Kopfzeilen-Knopfes - Grundlage fuer den Versatz der Reihe. */
const BUTTON_MIN = 44;

type Props = {
  dark: boolean;
  /**
   * Zeigt die Knoepfe direkt nebeneinander, ohne Drei-Punkte-Knopf und ohne
   * Ausfahren (Nutzer-Wunsch 2026-08-20 fuer den Lektionen-Screen). Das
   * Geschenk faellt dabei weg - fuer eine Kopfzeile waere es einer zu viel.
   * Seit dem Umzug von "Profil" in die Tab-Leiste (2026-08-22) bleiben hier
   * nur noch die Coins.
   */
  inline?: boolean;
  /**
   * Legt das Menue absolut oben rechts auf den Screen. Fuer Screens ohne
   * eigene Kopfzeile; S1 setzt es stattdessen in seine Zeile.
   */
  overlay?: boolean;
  /**
   * "Floating Card" statt 3D-Kante (2026-09-02, nur fuer den Survival-
   * Screen angefordert) - duenner heller Rahmen plus weicher Schatten
   * statt `kachel()`. Bewusst eine Prop statt einer Aenderung an `kachel()`
   * selbst: S1 und Lektionen benutzen denselben Knopf und sollen ihre
   * bereits bestaetigte Tiefe behalten.
   */
  flach?: boolean;
};

export function HeaderMenu({ dark, overlay = false, inline = false, flach = false }: Props) {
  const { coins } = useAppState();
  const theme = getTheme(dark);

  const [open, setOpen] = useState(false);
  // Getrennt von `open`, damit die Knoepfe das Einfahren noch zu Ende spielen
  // koennen, bevor sie verschwinden. Wuerden sie mit `open` ausgehaengt,
  // waere das Schliessen ein Sprung und das Oeffnen eine Bewegung.
  const [mounted, setMounted] = useState(false);
  const hasOpened = useRef(false);
  const [notice, setNotice] = useState<string | null>(null);
  const reveal = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    const useNative = Platform.OS !== 'web';

    if (open) {
      hasOpened.current = true;
      setMounted(true);
      const anim = Animated.timing(reveal, {
        toValue: 1,
        duration: MENU_DURATION,
        easing: Easing.out(Easing.quad),
        useNativeDriver: useNative,
      });
      anim.start();
      return () => anim.stop();
    }

    // Beim allerersten Rendern ist nichts einzufahren.
    if (!hasOpened.current) return;

    // Gleiche Dauer UND gleiche Kurve wie beim Ausfahren.
    //
    // Hier stand zuerst `Easing.in` - mathematisch die Spiegelung von `out`,
    // gefuehlt aber deutlich langsamer: `out` legt den Weg gleich zu Beginn
    // zurueck, `in` kriecht los und wird erst spaet schnell. Bei identischer
    // Dauer wirkte das Einfahren dadurch traege. Wahrnehmung schlaegt
    // Symmetrie, deshalb beide Richtungen mit `out`.
    const anim = Animated.timing(reveal, {
      toValue: 0,
      duration: MENU_DURATION,
      easing: Easing.out(Easing.quad),
      useNativeDriver: useNative,
    });
    anim.start();

    // Das Aushaengen haengt bewusst an einer Uhr und NICHT am
    // Abschluss-Callback der Animation: laeuft die Animation nicht durch -
    // etwa weil die Ansicht gerade keine Frames bekommt -, kommt der Callback
    // nie, und das Menue bliebe unsichtbar, aber dauerhaft im Baum haengen.
    // Die Dauer ist bekannt, also ist die Uhr die verlaesslichere Quelle.
    const timer = setTimeout(() => setMounted(false), MENU_DURATION);

    return () => {
      anim.stop();
      clearTimeout(timer);
    };
  }, [open, reveal]);

  useEffect(() => {
    if (!notice) return;
    const timer = setTimeout(() => setNotice(null), 2600);
    return () => clearTimeout(timer);
  }, [notice]);

  if (inline) {
    return (
      <View style={[styles.inlineRow, overlay && styles.anchorOverlay]}>
        <HeaderButton
          dark={dark}
          icon="circle"
          label="Coins"
          value={String(coins)}
          hint="Öffnet Freunde werben, Bewertung und Feedback"
          onPress={() => router.push('/rewards')}
        />
      </View>
    );
  }

  return (
    <>
      <View style={[styles.anchor, overlay && styles.anchorOverlay]}>
        {mounted ? (
          <Animated.View
            // Waehrend des Einfahrens nicht mehr antippbar - ein Knopf, der
            // gerade verschwindet, soll nichts mehr ausloesen.
            pointerEvents={open ? 'auto' : 'none'}
            style={[
              styles.row,
              {
                opacity: reveal,
                transform: [
                  {
                    translateX: reveal.interpolate({
                      inputRange: [0, 1],
                      outputRange: [MENU_SLIDE, 0],
                    }),
                  },
                ],
              },
            ]}
          >
            <HeaderButton
              dark={dark}
              flach={flach}
              icon="gift"
              label="Geschenk"
              // Ohne Funktion bis die taegliche Kiste existiert - der Knopf
              // sagt das beim Antippen, statt still nichts zu tun.
              hint="Die tägliche Kiste gibt es noch nicht"
              onPress={() => {
                setOpen(false);
                setNotice('Die tägliche Kiste kommt später.');
              }}
            />
            <HeaderButton
              dark={dark}
              flach={flach}
              icon="circle"
              label="Coins"
              // Echter Kontostand. Der erste Coin kommt aus dem Onboarding,
              // direkt nach der bestandenen Beispiellektion.
              value={String(coins)}
              hint="Öffnet Freunde werben, Bewertung und Feedback"
              onPress={() => {
                setOpen(false);
                router.push('/rewards');
              }}
            />
          </Animated.View>
        ) : null}

        <HeaderButton
          dark={dark}
          flach={flach}
          icon="more-horizontal"
          label="Mehr"
          hint="Zeigt Geschenk und Coins"
          expanded={open}
          onPress={() => setOpen((o) => !o)}
        />
      </View>

      {notice ? (
        <View
          accessibilityLiveRegion="polite"
          style={[styles.notice, { backgroundColor: theme.cardBg, borderColor: theme.border }]}
        >
          <Text style={[styles.noticeText, { color: theme.text }]}>{notice}</Text>
        </View>
      ) : null}
    </>
  );
}

function HeaderButton({
  dark,
  flach = false,
  icon,
  label,
  value,
  hint,
  expanded,
  onPress,
}: {
  dark: boolean;
  /** Siehe `Props.flach` an `HeaderMenu` - "Floating Card" statt 3D-Kante. */
  flach?: boolean;
  icon: React.ComponentProps<typeof Feather>['name'];
  label: string;
  value?: string;
  hint?: string;
  /** Nur fuer den Menue-Ausloeser: sagt Screenreadern, ob es offen ist. */
  expanded?: boolean;
  onPress: () => void;
}) {
  const theme = getTheme(dark);
  return (
    <Pressable
      onPress={onPress}
      accessibilityRole="button"
      accessibilityLabel={value ? `${label}: ${value}` : label}
      accessibilityHint={hint}
      // Beides bewusst: `accessibilityState` ist der Weg auf iOS/Android,
      // `aria-expanded` der auf dem Web - react-native-web uebersetzt den
      // Zustand nicht von selbst.
      accessibilityState={expanded === undefined ? undefined : { expanded }}
      aria-expanded={expanded}
      style={({ pressed }) => [
        styles.button,
        flach
          ? { borderWidth: 1, borderColor: FLOATING_BORDER, ...FLOATING_SHADOW }
          : kachel(dark),
        { backgroundColor: theme.cardBg, opacity: pressed ? 0.7 : 1 },
      ]}
    >
      <Feather name={icon} size={15} color={theme.sub} />
      {value !== undefined ? (
        <Text style={[styles.buttonValue, { color: theme.text }]}>{value}</Text>
      ) : null}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  anchor: {
    position: 'relative',
  },
  inlineRow: {
    flexDirection: 'row',
    gap: SPACING.sm,
  },
  anchorOverlay: {
    position: 'absolute',
    top: 0,
    right: 0,
    zIndex: 10,
  },
  row: {
    position: 'absolute',
    right: BUTTON_MIN + SPACING.sm,
    top: 0,
    flexDirection: 'row',
    gap: SPACING.sm,
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: SPACING.xs,
    // 44 ist das kleinste sinnvolle Tippziel, darunter faengt das
    // Danebentippen an.
    minHeight: BUTTON_MIN,
    minWidth: BUTTON_MIN,
    justifyContent: 'center',
    paddingHorizontal: SPACING.md,
    // Rahmen und Tiefe kommen aus `kachel()`.
    borderRadius: RADIUS.md,
  },
  buttonValue: {
    fontSize: FONT_SIZE.small,
    ...schrift('800'),
  },
  notice: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: SPACING.lg,
    borderWidth: 1.5,
    borderRadius: RADIUS.md,
    paddingVertical: SPACING.md,
    paddingHorizontal: SPACING.lg,
  },
  noticeText: {
    fontSize: FONT_SIZE.small,
    ...schrift('700'),
    textAlign: 'center',
  },
});
