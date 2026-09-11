import { Children, ComponentProps, Fragment, ReactNode, useRef, useState } from 'react';
import {
  Modal,
  Pressable,
  StyleSheet,
  Switch,
  Text,
  useWindowDimensions,
  View,
} from 'react-native';
import { Feather } from '@expo/vector-icons';
import { router } from 'expo-router';
import {
  ACCENT_ORANGE,
  FONT_SIZE,
  getTheme,
  LINE_HEIGHT,
  RADIUS,
  SPACING,
  karte,
  schrift,
} from '../../theme/tokens';

// Bausteine fuer Einstellungs-Listen im Stil der iOS-Einstellungen
// (2026-09-11, Simons Wunsch: das Profil "mehr wie ein Apple-Profil mit
// Dropdowns und anderen Ansichten").
//
// Das iOS-Muster hat vier Teile, und jeder hat hier genau einen Baustein:
//   Gruppe        gerundete Flaeche auf grauem Grund, Ueberschrift darueber,
//                 Erklaerung darunter
//   Zeile         Symbolkachel, Titel, Wert rechts, Chevron wenn sie
//                 weiterfuehrt - die Grundeinheit jeder Einstellungsseite
//   AuswahlZeile  Wert mit Doppelpfeil, oeffnet ein Pull-down-Menue direkt an
//                 der Zeile (so waehlt iOS seit Version 14 aus kurzen Listen;
//                 frueher war das eine eigene Seite)
//   DetailKopf    Zurueck-Pfeil mit dem Namen der vorigen Seite, Titel mittig
//
// Die Gruppen tragen den Karten-Look aus `karte()` statt Apples randloser
// Flaeche: Simon hatte die Profil-Karten am selben Tag ausdruecklich auf den
// "Du bist hier"-Kasten von S1 umgestellt. Wer die reine iOS-Optik will,
// nimmt `karte(dark)` in `Gruppe` heraus - dann bleibt die weisse Flaeche
// auf Grau.

// Die farbigen Symbolkacheln sind DAS Erkennungszeichen der iOS-
// Einstellungen. Es sind Apples Systemfarben, bewusst nicht unsere
// Markenfarben: eine orange Kachel neben orangem Akzenttext waere Laerm.
// Im Darkmode bleiben sie gleich - weisses Symbol auf satter Kachel traegt
// auf beiden Gruenden.
export const ICON_FARBEN = {
  blau: '#007AFF',
  indigo: '#5856D6',
  lila: '#AF52DE',
  orange: '#FF9500',
  pink: '#FF2D55',
  rot: '#FF3B30',
  grau: '#8E8E93',
  gruen: '#34C759',
} as const;
export type IconFarbe = keyof typeof ICON_FARBEN;
type IconName = ComponentProps<typeof Feather>['name'];

/** Apples Kachelmass in den Einstellungen. */
const KACHEL = 29;
/** Mindesthoehe einer Zeile: Apples 44 plus etwas Luft fuer die Kachel. */
const ZEILE_MIN = 48;
/** Trenner beginnen unter dem Titel, nicht am Rand - wie bei iOS. */
const TRENNER_EINZUG = SPACING.lg + KACHEL + SPACING.md;

/**
 * Grund einer Einstellungsseite. iOS legt helle Gruppen auf einen grauen
 * Grund; unser Seitengrund ist im Hellmodus weiss, darauf verschwaenden die
 * Gruppen. Im Darkmode passt der normale Seitengrund bereits (fast schwarz
 * unter dunkelgrauen Gruppen - genau Apples Verhaeltnis).
 */
export function gruppenGrund(dark: boolean) {
  const theme = getTheme(dark);
  return dark ? theme.pageBg : theme.subtleFill;
}

export function Gruppe({
  dark,
  titel,
  fuss,
  ohneSymbole = false,
  children,
}: {
  dark: boolean;
  titel?: string;
  fuss?: string;
  /**
   * Gruppe ohne Symbolkacheln: dann beginnen die Trenner am Textanfang statt
   * hinter einer Kachel, die es nicht gibt. iOS rueckt die Linie immer bis
   * genau dorthin ein, wo der Text anfaengt.
   */
  ohneSymbole?: boolean;
  children: ReactNode;
}) {
  const theme = getTheme(dark);
  // `toArray` wirft null/false heraus - bedingte Zeilen hinterlassen so keinen
  // verwaisten Trenner.
  const zeilen = Children.toArray(children);
  return (
    <View style={styles.gruppeRahmen}>
      {titel ? (
        <Text style={[styles.gruppeTitel, { color: theme.sub }]} accessibilityRole="header">
          {titel}
        </Text>
      ) : null}
      <View style={[styles.gruppe, karte(dark), { backgroundColor: theme.cardBg }]}>
        {zeilen.map((zeile, i) => (
          <Fragment key={i}>
            {i > 0 ? <View
                style={[
                  styles.trenner,
                  { backgroundColor: theme.border, marginLeft: ohneSymbole ? SPACING.lg : TRENNER_EINZUG },
                ]}
              /> : null}
            {zeile}
          </Fragment>
        ))}
      </View>
      {fuss ? <Text style={[styles.gruppeFuss, { color: theme.sub }]}>{fuss}</Text> : null}
    </View>
  );
}

export function Zeile({
  dark,
  icon,
  farbe = 'blau',
  titel,
  untertitel,
  wert,
  onPress,
  chevron,
  rechts,
  abzeichen,
  tint = false,
  ausgewaehlt,
  hinweis,
}: {
  dark: boolean;
  icon?: IconName;
  farbe?: IconFarbe;
  titel: string;
  untertitel?: string;
  wert?: string;
  onPress?: () => void;
  /** Vorgabe: Chevron genau dann, wenn die Zeile weiterfuehrt. */
  chevron?: boolean;
  /** Eigenes Element rechts - Schalter, Haken, Doppelpfeil. */
  rechts?: ReactNode;
  /** Rote Zahl wie bei iOS-Hinweisen, z.B. abholbare Coins. */
  abzeichen?: number;
  /** Titel in Akzentfarbe - fuer Aktionszeilen wie "Alle zurückholen". */
  tint?: boolean;
  /** Fuer Auswahllisten mit Haken: traegt den Zustand fuer VoiceOver. */
  ausgewaehlt?: boolean;
  hinweis?: string;
}) {
  const theme = getTheme(dark);
  const zeigeChevron = chevron ?? !!onPress;

  const inhalt = (
    <>
      {icon ? (
        <View style={[styles.kachel, { backgroundColor: ICON_FARBEN[farbe] }]}>
          <Feather name={icon} size={17} color="#FFFFFF" />
        </View>
      ) : null}
      <View style={styles.zeileText}>
        <Text
          style={[styles.zeileTitel, { color: tint ? ACCENT_ORANGE : theme.text }]}
          numberOfLines={1}
        >
          {titel}
        </Text>
        {untertitel ? (
          <Text style={[styles.zeileUntertitel, { color: theme.sub }]}>{untertitel}</Text>
        ) : null}
      </View>
      {wert ? (
        <Text style={[styles.zeileWert, { color: theme.sub }]} numberOfLines={1}>
          {wert}
        </Text>
      ) : null}
      {abzeichen ? (
        <View style={styles.abzeichen}>
          <Text style={styles.abzeichenText}>{abzeichen}</Text>
        </View>
      ) : null}
      {rechts}
      {zeigeChevron ? <Feather name="chevron-right" size={18} color={theme.dividerColor} /> : null}
    </>
  );

  const ansage = [titel, wert, abzeichen ? `${abzeichen} neu` : null].filter(Boolean).join(', ');

  if (!onPress) {
    // Traegt die Zeile einen Schalter, darf sie NICHT als ein Element gelten -
    // sonst verschluckt sie ihn, und VoiceOver kommt nicht mehr an ihn heran.
    return (
      <View style={styles.zeile} accessible={!rechts} accessibilityLabel={rechts ? undefined : ansage}>
        {inhalt}
      </View>
    );
  }

  return (
    <Pressable
      onPress={onPress}
      accessibilityRole="button"
      accessibilityLabel={ansage}
      accessibilityHint={hinweis}
      accessibilityState={ausgewaehlt !== undefined ? { selected: ausgewaehlt } : undefined}
      // Wie beim Profil-Radio vorher: React Native Web reicht
      // `accessibilityState` an Pressable nicht weiter, `aria-selected` schon.
      aria-selected={ausgewaehlt}
      // Deckkraft statt grauer Unterlegung beim Druecken: eine Unterlegung
      // stuende an der ersten und letzten Zeile eckig ueber die gerundete
      // Gruppe hinaus.
      style={({ pressed }) => [styles.zeile, pressed && styles.gedrueckt]}
    >
      {inhalt}
    </Pressable>
  );
}

/** Zeile mit iOS-Schalter. Der Schalter ist die Systemsteuerung, kein Nachbau. */
export function SchalterZeile({
  dark,
  icon,
  farbe,
  titel,
  wert,
  onWechsel,
}: {
  dark: boolean;
  icon?: IconName;
  farbe?: IconFarbe;
  titel: string;
  wert: boolean;
  onWechsel: (an: boolean) => void;
}) {
  const theme = getTheme(dark);
  return (
    <Zeile
      dark={dark}
      icon={icon}
      farbe={farbe}
      titel={titel}
      chevron={false}
      rechts={
        <Switch
          value={wert}
          onValueChange={onWechsel}
          trackColor={{ false: theme.dividerColor, true: ACCENT_ORANGE }}
          ios_backgroundColor={theme.dividerColor}
          thumbColor="#FFFFFF"
          accessibilityLabel={titel}
        />
      }
    />
  );
}

export type AuswahlOption<T extends string> = { id: T; label: string; hinweis?: string };
type Lage = { x: number; y: number; w: number; h: number };

/** Doppelpfeil wie Apples `chevron.up.chevron.down` - Feather hat ihn nicht. */
function Wahlpfeile({ farbe }: { farbe: string }) {
  return (
    <View
      style={styles.wahlpfeile}
      accessibilityElementsHidden
      importantForAccessibility="no-hide-descendants"
    >
      <Feather name="chevron-up" size={12} color={farbe} style={styles.pfeilOben} />
      <Feather name="chevron-down" size={12} color={farbe} style={styles.pfeilUnten} />
    </View>
  );
}

export function AuswahlZeile<T extends string>({
  dark,
  icon,
  farbe,
  titel,
  optionen,
  wert,
  onWahl,
}: {
  dark: boolean;
  icon?: IconName;
  farbe?: IconFarbe;
  titel: string;
  optionen: AuswahlOption<T>[];
  wert: T;
  onWahl: (id: T) => void;
}) {
  const theme = getTheme(dark);
  const anker = useRef<View>(null);
  const [lage, setLage] = useState<Lage | null>(null);
  const aktuell = optionen.find((o) => o.id === wert);

  // Gemessen wird erst beim Oeffnen, nicht beim Aufbau: die Liste scrollt,
  // eine frueh gemessene Lage waere nach dem ersten Wischen falsch.
  const oeffnen = () => {
    anker.current?.measureInWindow((x, y, w, h) => setLage({ x, y, w, h }));
  };

  return (
    <View ref={anker} collapsable={false}>
      <Zeile
        dark={dark}
        icon={icon}
        farbe={farbe}
        titel={titel}
        wert={aktuell?.label}
        chevron={false}
        onPress={oeffnen}
        hinweis="Öffnet eine Auswahl"
        rechts={<Wahlpfeile farbe={theme.sub} />}
      />
      <PullDownMenue
        dark={dark}
        lage={lage}
        optionen={optionen}
        wert={wert}
        onWahl={(id) => {
          setLage(null);
          onWahl(id);
        }}
        onSchliessen={() => setLage(null)}
      />
    </View>
  );
}

const MENUE_BREITE = 260;
const MENUE_ZEILE = 46;

function PullDownMenue<T extends string>({
  dark,
  lage,
  optionen,
  wert,
  onWahl,
  onSchliessen,
}: {
  dark: boolean;
  lage: Lage | null;
  optionen: AuswahlOption<T>[];
  wert: T;
  onWahl: (id: T) => void;
  onSchliessen: () => void;
}) {
  const theme = getTheme(dark);
  const { width: breiteFenster, height: hoeheFenster } = useWindowDimensions();
  if (!lage) return null;

  const mitHinweis = optionen.some((o) => o.hinweis);
  const hoehe = optionen.length * (mitHinweis ? MENUE_ZEILE + 20 : MENUE_ZEILE);
  const breite = Math.min(MENUE_BREITE, breiteFenster - 2 * SPACING.lg);
  // Rechtsbuendig an der Zeile, wie Apples Menues am Wert haengen.
  const abstandRechts = Math.max(SPACING.lg, breiteFenster - (lage.x + lage.w) + SPACING.lg);
  // Unter der Zeile; passt es dort nicht mehr hin (Zeile weit unten), klappt
  // es nach oben - sonst verschwaende es hinter der Tab-Leiste.
  let oben = lage.y + lage.h - SPACING.xs;
  if (oben + hoehe > hoeheFenster - SPACING.xxxl * 2) {
    oben = Math.max(SPACING.xxl, lage.y - hoehe + SPACING.xs);
  }

  return (
    <Modal transparent visible animationType="fade" onRequestClose={onSchliessen}>
      <Pressable
        style={StyleSheet.absoluteFill}
        onPress={onSchliessen}
        accessibilityRole="button"
        accessibilityLabel="Auswahl schließen"
      />
      {/* Schatten aussen, Beschnitt innen: `overflow: hidden` wuerde auf iOS
          den eigenen Schatten mit abschneiden (siehe ProfileScreen). */}
      <View style={[styles.menueSchatten, { top: oben, right: abstandRechts, width: breite }]}>
        <View
          style={[
            styles.menue,
            {
              backgroundColor: theme.cardBg,
              borderColor: dark ? 'rgba(255,255,255,0.12)' : 'rgba(0,0,0,0.08)',
            },
          ]}
          accessibilityRole="menu"
        >
          {optionen.map((o, i) => {
            const gewaehlt = o.id === wert;
            return (
              <Pressable
                key={o.id}
                onPress={() => onWahl(o.id)}
                accessibilityRole="menuitem"
                accessibilityState={{ selected: gewaehlt }}
                aria-selected={gewaehlt}
                accessibilityLabel={o.hinweis ? `${o.label}. ${o.hinweis}` : o.label}
                style={({ pressed }) => [
                  styles.menueZeile,
                  i > 0 && { borderTopWidth: StyleSheet.hairlineWidth, borderTopColor: theme.border },
                  pressed && { backgroundColor: theme.subtleFill },
                ]}
              >
                {/* Haken VORNE, wie in Apples Menues - hinten stuende er im
                    Weg der Hinweiszeile. */}
                <View style={styles.menueHaken}>
                  {gewaehlt ? <Feather name="check" size={16} color={theme.text} /> : null}
                </View>
                <View style={styles.menueTextSpalte}>
                  <Text style={[styles.menueText, { color: theme.text }]}>{o.label}</Text>
                  {o.hinweis ? (
                    <Text style={[styles.menueHinweis, { color: theme.sub }]}>{o.hinweis}</Text>
                  ) : null}
                </View>
              </Pressable>
            );
          })}
        </View>
      </View>
    </Modal>
  );
}

/**
 * Kopf einer Detailansicht: Zurueck-Pfeil mit dem NAMEN der vorigen Seite
 * (Apples Regel - "Profil", nicht "Zurück"), Titel in der Mitte. Die
 * Wischgeste zurueck liefert `SwipeBackScreen` an der Route dazu.
 */
export function DetailKopf({
  dark,
  titel,
  zurueck = 'Profil',
  fallback = '/profil',
}: {
  dark: boolean;
  titel: string;
  zurueck?: string;
  /** Wohin, wenn es keine Historie gibt (Neustart direkt auf der Route). */
  fallback?: Parameters<typeof router.replace>[0];
}) {
  const theme = getTheme(dark);
  const geheZurueck = () => {
    if (router.canGoBack()) router.back();
    else router.replace(fallback);
  };
  return (
    <View style={styles.kopf}>
      {/* Titel zuerst und absolut, damit er unabhaengig von der Breite des
          Zurueck-Knopfs genau mittig steht; der Knopf liegt darueber. */}
      <Text
        style={[styles.kopfTitel, { color: theme.text }]}
        numberOfLines={1}
        accessibilityRole="header"
      >
        {titel}
      </Text>
      <Pressable
        onPress={geheZurueck}
        hitSlop={12}
        accessibilityRole="button"
        accessibilityLabel={`Zurück zu ${zurueck}`}
        style={({ pressed }) => [styles.kopfZurueck, pressed && styles.gedrueckt]}
      >
        <Feather name="chevron-left" size={26} color={ACCENT_ORANGE} />
        <Text style={styles.kopfZurueckText}>{zurueck}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  gruppeRahmen: {
    marginHorizontal: SPACING.lg,
    marginTop: SPACING.xl,
  },
  gruppeTitel: {
    fontSize: FONT_SIZE.caption,
    ...schrift('700'),
    letterSpacing: 0.4,
    textTransform: 'uppercase',
    marginLeft: SPACING.lg,
    marginBottom: SPACING.sm,
  },
  gruppe: {
    // Rand, Radius und Schatten kommen aus `karte()`.
    borderRadius: RADIUS.lg,
  },
  gruppeFuss: {
    fontSize: FONT_SIZE.caption,
    lineHeight: LINE_HEIGHT.caption,
    marginHorizontal: SPACING.lg,
    marginTop: SPACING.sm,
  },
  trenner: {
    // Der Einzug kommt an der Verwendung, je nachdem ob die Gruppe Kacheln traegt.
    height: StyleSheet.hairlineWidth,
  },
  zeile: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: SPACING.md,
    minHeight: ZEILE_MIN,
    paddingHorizontal: SPACING.lg,
    paddingVertical: SPACING.sm,
  },
  gedrueckt: {
    opacity: 0.55,
  },
  kachel: {
    width: KACHEL,
    height: KACHEL,
    borderRadius: 7,
    alignItems: 'center',
    justifyContent: 'center',
  },
  zeileText: {
    flex: 1,
    gap: 2,
  },
  zeileTitel: {
    fontSize: FONT_SIZE.body,
    lineHeight: LINE_HEIGHT.body,
    ...schrift('600'),
  },
  zeileUntertitel: {
    fontSize: FONT_SIZE.caption,
    lineHeight: LINE_HEIGHT.caption,
  },
  zeileWert: {
    fontSize: FONT_SIZE.body,
    maxWidth: '45%',
    textAlign: 'right',
  },
  abzeichen: {
    minWidth: 22,
    height: 22,
    borderRadius: 11,
    paddingHorizontal: 6,
    backgroundColor: ICON_FARBEN.rot,
    alignItems: 'center',
    justifyContent: 'center',
  },
  abzeichenText: {
    color: '#FFFFFF',
    fontSize: FONT_SIZE.caption,
    ...schrift('800'),
  },
  wahlpfeile: {
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: -SPACING.xs,
  },
  pfeilOben: { marginBottom: -5 },
  pfeilUnten: { marginTop: -5 },
  menueSchatten: {
    position: 'absolute',
    borderRadius: 14,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 8 },
    shadowRadius: 24,
    shadowOpacity: 0.18,
    elevation: 12,
  },
  menue: {
    borderRadius: 14,
    borderWidth: StyleSheet.hairlineWidth,
    overflow: 'hidden',
  },
  menueZeile: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: SPACING.sm,
    minHeight: MENUE_ZEILE,
    paddingHorizontal: SPACING.md,
    paddingVertical: SPACING.sm,
  },
  menueHaken: {
    width: 18,
    alignItems: 'center',
  },
  menueTextSpalte: {
    flex: 1,
    gap: 2,
  },
  menueText: {
    fontSize: FONT_SIZE.body,
    ...schrift('600'),
  },
  menueHinweis: {
    fontSize: FONT_SIZE.caption,
    lineHeight: LINE_HEIGHT.caption,
  },
  kopf: {
    height: 44,
    justifyContent: 'center',
    marginBottom: SPACING.xs,
  },
  kopfTitel: {
    position: 'absolute',
    left: 0,
    right: 0,
    textAlign: 'center',
    // Freihalten fuer den Zurueck-Knopf links und sein unsichtbares
    // Gegenstueck rechts, sonst liefe ein langer Titel darunter.
    paddingHorizontal: 96,
    fontSize: FONT_SIZE.bodyLg,
    ...schrift('800'),
  },
  kopfZurueck: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'flex-start',
    minHeight: 44,
    paddingLeft: SPACING.xs,
    paddingRight: SPACING.sm,
  },
  kopfZurueckText: {
    color: ACCENT_ORANGE,
    fontSize: FONT_SIZE.body,
    ...schrift('600'),
    marginLeft: -2,
  },
});
