import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import {
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  useWindowDimensions,
  View,
} from 'react-native';
import { router } from 'expo-router';
import { Feather } from '@expo/vector-icons';
import { useAppState } from '../../state/AppState';
import { CATEGORIES, GRUNDWORTSCHATZ_ID } from '../../data/categories';
import { LANGUAGES, getLanguage } from '../../data/languages';
import { Card, Dropdown, HeaderMenu, ProgressBar, Screen, PRESS_DEPTH } from '../../components';
import type { DropdownOption } from '../../components';
import { useUnlockedProgress } from './useUnlockedProgress';
import {
  getTheme,
  ACCENT_BLUE,
  ACCENT_ORANGE,
  ACCENT_GREEN,
  ACCENT_GREEN_BG,
  NODE_LOCKED,
  PILL_FILL_BLUE,
  PILL_FILL_ORANGE,
  PILL_FILL_GRAY,
  RADIUS,
  SPACING,
  FONT_SIZE,
  FONT_FAMILY,
  LINE_HEIGHT,
} from '../../theme/tokens';

// S1 - Startscreen (Pfad).
//
// Aufbau nach Simons Vorlage
// (`Screenplanung/UI - Rest/Homepage/Homescreen grobe Themenuebersicht.png`),
// Duolingo als Referenz fuer den Abschnitts-Kopf und das Gefuehl der Knoten.
// Stil-Rezept unveraendert 70% Babbel / 30% Duolingo (siehe theme/tokens.ts).
//
// WICHTIGE STRUKTURENTSCHEIDUNG (2026-08-18): Die Pfad-Box zeigt nur noch
// KATEGORIEN, keine Themen-Knoten. Oben die Sprach-Pille (= Grundwortschatz),
// darunter die freigeschalteten Kategorien, unter einer gestrichelten Linie
// die gesperrten.
//
// Der naechste Schritt macht daraus ein Akkordeon: ein Tipp auf die
// Schatzkarte faechert ALLE Themen auf, ein Tipp auf eine Pille nur deren
// eigene; die Themen erscheinen als kleinere Kreise mit Linien an ihrer
// Pille, die folgenden Kategorien rutschen nach unten
// (`Homescreen genaue Uebersicht.png`). Deshalb entsteht die Knotenliste hier
// schon aus (Kategorien + `expandedIds`) statt fest zusammengeschrieben zu
// werden - das Auffaechern ist dann ein Einfuegen in diese Liste und kein
// Umbau. `expandedIds` ist bis dahin immer leer.
//
// Was hier bewusst NICHT mehr steht: die Wortschatz-Kaesten (Platzhalter ohne
// Funktion, in der Vorlage nicht mehr vorhanden) und die Knopfzeile unten -
// Cheat-Sheet-Survival ist jetzt der Tab "Survival", die Extras ziehen
// spaeter hinter den Coins-Knopf und sind dort schon jetzt erreichbar.

// Geometrie des Zickzacks. Layout-Mathematik, keine Abstands-Tokens - die
// Werte stehen zueinander in einem festen Verhaeltnis (eine Zeile muss hoeher
// sein als eine Pille, sonst ueberlappen sich zwei Reihen).
const PILL_W = 176;
const PILL_H = 48;
const LANG_PILL_W = 150;
const LANG_PILL_H = 56;
const ROW_H = 86;
const CONT_W = 300;
/** Anteil der Fensterhoehe, den die Pfad-Box hoechstens einnimmt. */
const PATH_BOX_HEIGHT_RATIO = 0.52;

type NodeState = 'done' | 'current' | 'open' | 'locked';

type RawNode = {
  id: string;
  label: string;
  state: NodeState;
  /** Groessere, zentrierte Pille - die Sprache an der Spitze des Pfades. */
  lead?: boolean;
  onPress: () => void;
};

type LaidOutNode = RawNode & {
  width: number;
  height: number;
  left: number;
  top: number;
  cx: number;
  cy: number;
};

type Connector = { left: number; top: number; length: number; angle: number; color: string };

// Farbe pro Knoten. Bewusst zentral und nicht am Knoten selbst: der Zustand
// ist die Information, die Farbe nur ihre Darstellung.
//
// Blau gehoert dem freien Grundwortschatz, Orange den Kaufkategorien, Grau
// dem Gesperrten - und Gruen steht nach dem Stil-Rezept ausschliesslich fuer
// Erfolg und schlaegt deshalb alles andere.
function nodeColors(node: { state: NodeState; lead?: boolean }) {
  if (node.state === 'done') return { line: ACCENT_GREEN, fill: ACCENT_GREEN_BG };
  if (node.state === 'locked') return { line: NODE_LOCKED, fill: PILL_FILL_GRAY };
  if (node.lead) return { line: ACCENT_BLUE, fill: PILL_FILL_BLUE };
  return { line: ACCENT_ORANGE, fill: PILL_FILL_ORANGE };
}

export function PathScreen() {
  const { darkMode, purchased, targetLanguageId, setTargetLanguageId, coins } = useAppState();
  const theme = getTheme(darkMode);
  const activeLanguage = getLanguage(targetLanguageId);

  // Hoehe der Pfad-Box deckeln (Nutzer-Wunsch 2026-08-18: vertikal kleiner).
  // Als Anteil der Fensterhoehe statt als feste Zahl - auf einem kleinen
  // iPhone SE waere eine feste Hoehe zu viel, auf einem Pro Max zu wenig.
  // Die Box scrollt ohnehin innen, sie muss also nicht alles zeigen.
  const { width: windowWidth, height: windowHeight } = useWindowDimensions();
  const pathBoxMaxHeight = Math.round(windowHeight * PATH_BOX_HEIGHT_RATIO);

  const scrollRef = useRef<ScrollView>(null);
  const didAutoScroll = useRef(false);

  // Platzhalter fuer das Auffaechern im naechsten Schritt - siehe Kopfnotiz.
  const [expandedIds] = useState<string[]>([]);
  const [notice, setNotice] = useState<string | null>(null);
  const hideNotice = useCallback(() => setNotice(null), []);

  const unlockedIds = useMemo(
    () => [GRUNDWORTSCHATZ_ID, ...CATEGORIES.filter((c) => purchased[c.id]).map((c) => c.id)],
    [purchased]
  );
  const progress = useUnlockedProgress(targetLanguageId, unlockedIds);

  const goCategory = (id: string) => () => router.push({ pathname: '/category/[id]', params: { id } });
  const goShop = () => router.push('/shop');

  // ---------------------------------------------------------------------
  // Knotenliste
  // ---------------------------------------------------------------------
  const { nodes: raw, currentIndex, currentLabel } = useMemo(() => {
    const purchasedCategories = CATEGORIES.filter((c) => purchased[c.id]);
    const lockedCategories = CATEGORIES.filter((c) => !purchased[c.id]);

    // "Fertig" heisst: jeder Satz der Kategorie wurde mindestens einmal
    // bewertet. "Aktuell" ist die erste freigeschaltete Kategorie, die das
    // noch nicht ist - sie bekommt den Ring und gibt dem Abschnitts-Kopf
    // seinen Namen.
    const stateFor = (categoryId: string): NodeState => {
      const p = progress.byCategory[categoryId];
      if (p && p.total > 0 && p.seen >= p.total) return 'done';
      return 'open';
    };

    const list: RawNode[] = [
      {
        id: GRUNDWORTSCHATZ_ID,
        label: activeLanguage.label,
        state: stateFor(GRUNDWORTSCHATZ_ID),
        lead: true,
        onPress: goCategory(GRUNDWORTSCHATZ_ID),
      },
      ...purchasedCategories.map((cat, i) => ({
        id: cat.id,
        label: cat.name,
        state: stateFor(cat.id),
        onPress: goCategory(cat.id),
      })),
      ...lockedCategories.map((cat, i) => ({
        id: cat.id,
        label: cat.name,
        state: 'locked' as NodeState,
        onPress: goShop,
      })),
    ];

    // Erster nicht fertiger, nicht gesperrter Knoten wird "aktuell".
    const idx = list.findIndex((n) => n.state === 'open');
    if (idx >= 0) list[idx].state = 'current';

    return {
      nodes: list,
      currentIndex: idx >= 0 ? idx : 0,
      currentLabel: idx >= 0 ? list[idx].label : list[0].label,
    };
    // `expandedIds` gehoert schon jetzt in die Abhaengigkeiten - sobald das
    // Auffaechern kommt, muss die Liste sich davon neu bauen.
  }, [purchased, activeLanguage.label, progress.byCategory, expandedIds]);

  // ---------------------------------------------------------------------
  // Zickzack-Layout: Pillen abwechselnd links/rechts, verbunden durch
  // rotierte Linien zwischen den Mittelpunkten.
  // ---------------------------------------------------------------------
  const { pathNodes, connectors, canvasHeight } = useMemo(() => {
    const laid: LaidOutNode[] = raw.map((n, i) => {
      const w = n.lead ? LANG_PILL_W : PILL_W;
      const h = n.lead ? LANG_PILL_H : PILL_H;
      const left = n.lead ? (CONT_W - w) / 2 : i % 2 === 0 ? 0 : CONT_W - w;
      const top = i * ROW_H;
      return { ...n, width: w, height: h, left, top, cx: left + w / 2, cy: top + h / 2 };
    });

    const conns: Connector[] = [];
    for (let i = 0; i < laid.length - 1; i++) {
      const a = laid[i];
      const b = laid[i + 1];
      const dx = b.cx - a.cx;
      const dy = b.cy - a.cy;
      conns.push({
        left: a.cx,
        top: a.cy,
        length: Math.sqrt(dx * dx + dy * dy),
        angle: (Math.atan2(dy, dx) * 180) / Math.PI,
        // Die Linie gehoert zum Abschnitt, aus dem sie kommt - beim Uebergang
        // ins Gesperrte wird sie damit von selbst grau.
        color: nodeColors(a).line,
      });
    }

    const last = laid[laid.length - 1];
    return {
      pathNodes: laid,
      connectors: conns,
      canvasHeight: last ? last.top + last.height + SPACING.xl : 0,
    };
  }, [raw]);

  // Beim Oeffnen zum aktuellen Knoten springen statt oben anzufangen. Nur
  // einmal pro Mount - wer selbst gescrollt hat, soll nicht zurueckgerissen
  // werden, wenn der Fortschritt nachlaedt.
  useEffect(() => {
    if (didAutoScroll.current || progress.loading || pathNodes.length === 0) return;
    didAutoScroll.current = true;
    const target = Math.max(0, (pathNodes[currentIndex]?.top ?? 0) - ROW_H);
    // Ohne die Verzoegerung misst die ScrollView ihren Inhalt noch nicht.
    const timer = setTimeout(() => scrollRef.current?.scrollTo({ y: target, animated: false }), 0);
    return () => clearTimeout(timer);
  }, [progress.loading, pathNodes, currentIndex]);

  const languageOptions: DropdownOption[] = LANGUAGES.map((l) => ({
    id: l.id,
    label: l.label,
    disabled: !l.hasContent,
    note: l.hasContent ? undefined : 'bald',
  }));

  return (
    // ===== TEST-HINTERGRUND (2026-08-20) =================================
    // Pergament-Textur testweise hinter S1. Zum Entfernen: dieses <View> und
    // das <Image> loeschen, `style={styles.transparentPage}` am <Screen>
    // streichen und `pathBoxTestTransparent` unten aus dem Card-Stil nehmen.
    // Die Datei liegt unter assets/hintergrund-pergament.png.
    // =====================================================================
    <View style={styles.root}>
      <Image
        source={require('../../../assets/hintergrund-pergament.png')}
        // Volle Fensterhoehe statt 100% des Elternteils: die Tab-Gruppe haelt
        // unten Platz fuer die schwebende Leiste frei, sonst endete die
        // Textur 90 Punkte ueber dem Rand und die Leiste schwebte auf
        // nacktem Untergrund.
        style={[styles.backdrop, { width: windowWidth, height: windowHeight }]}
        resizeMode="cover"
        accessibilityIgnoresInvertColors
      />
    <Screen dark={darkMode} style={styles.transparentPage}>
      {/* Kopfzeile: Sprache links, Geschenk und Coins rechts. */}
      <View style={styles.topBar}>
        <View style={styles.langSlot}>
          <Dropdown
            compact
            options={languageOptions}
            selectedId={targetLanguageId}
            onSelect={setTargetLanguageId}
            dark={darkMode}
            title="Welche Sprache lernst du?"
            accessibilityLabel="Sprache"
          />
        </View>

        <HeaderMenu dark={darkMode} />
      </View>

      {/* Fortschritt ueber die freigeschalteten Inhalte. */}
      <View style={styles.progressRow}>
        <ProgressBar
          dark={darkMode}
          ratio={progress.ratio}
          label={`${Math.round(progress.ratio * 100)} Prozent deiner freigeschalteten Inhalte geübt`}
        />
        <Text style={[styles.progressValue, { color: theme.sub }]}>
          {Math.round(progress.ratio * 100)}%
        </Text>
      </View>

      {/* Pfad-Box: NUR dieser Bereich scrollt. */}
      {/* Rahmen unsichtbar (Nutzer-Wunsch 2026-08-18): die Lern-Box soll nicht
          als Kasten lesbar sein, sondern nur der Pfad darin. `transparent`
          statt einer festen Farbe, damit es in beiden Erscheinungsbildern
          stimmt - im Darkmode hebt sich die Box weiterhin ueber ihre eigene
          Fuellung ab, im hellen verschwindet sie ganz. */}
      <Card
        dark={darkMode}
        padded={false}
        style={[
          styles.pathBox,
          styles.pathBoxFrameless,
          styles.pathBoxTestTransparent,
          { maxHeight: pathBoxMaxHeight },
        ]}
      >
        {/* Abschnitts-Kopf, bleibt beim Scrollen stehen. */}
        <View style={styles.sectionBar}>
          <View style={[styles.sectionField, { borderColor: theme.border, backgroundColor: theme.pageBg }]}>
            <Text style={[styles.sectionLabel, { color: theme.sub }]}>Du bist hier</Text>
            <Text style={[styles.sectionName, { color: theme.text }]} numberOfLines={1}>
              {currentLabel}
            </Text>
          </View>
          <Pressable
            onPress={() => setNotice('Das Auffächern der Themen kommt im nächsten Schritt.')}
            accessibilityRole="button"
            accessibilityLabel="Alle Themen auffächern"
            accessibilityHint="Noch ohne Funktion"
            style={({ pressed }) => [
              styles.mapButton,
              { borderColor: theme.border, opacity: pressed ? 0.7 : 1 },
            ]}
          >
            <Image
              source={require('../../../assets/icon-karte.png')}
              style={styles.mapImage}
              accessibilityIgnoresInvertColors
            />
          </Pressable>
        </View>

        <ScrollView
          ref={scrollRef}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.pathBoxContent}
        >
          <View style={[styles.pathCanvas, { height: canvasHeight }]}>
            {connectors.map((c, i) => (
              <View
                key={`conn-${i}`}
                style={[
                  styles.connector,
                  {
                    left: c.left,
                    top: c.top,
                    width: c.length,
                    backgroundColor: c.color,
                    transform: [{ rotate: `${c.angle}deg` }],
                    transformOrigin: '0% 50%',
                  },
                ]}
              />
            ))}
            {pathNodes.map((n) => (
              <PathNode key={n.id} node={n} />
            ))}
          </View>
        </ScrollView>
      </Card>

      {/* Fester Knopf ausserhalb der Scroll-Box. */}
      <View style={styles.actions}>
        <SplitButton
          dark={darkMode}
          left={{
            label: 'Tägliches Wiederholen',
            hint: 'Öffnet die Wiederholung mit fälligen Karten',
            onPress: () => router.push('/srs'),
          }}
          right={{
            label: 'Weiter durchstarten',
            hint: 'Öffnet die Kategorie, an der du gerade bist',
            onPress: pathNodes[currentIndex]?.onPress ?? goShop,
          }}
        />
      </View>

      <Notice text={notice} dark={darkMode} onHide={hideNotice} />
    </Screen>
    </View>
  );
}

// ---------------------------------------------------------------------------
// Kleine Bausteine, die nur S1 braucht
// ---------------------------------------------------------------------------

// Ein Knoten im Pfad. Traegt die Druckkante von `PillButton`, damit sich
// Knoten und Knoepfe gleich anfuehlen - das ist der 30%-Duolingo-Anteil.
function PathNode({ node }: { node: LaidOutNode }) {
  const colors = nodeColors(node);
  const isLocked = node.state === 'locked';
  const isCurrent = node.state === 'current';

  return (
    <Pressable
      onPress={node.onPress}
      accessibilityRole="button"
      // Der Zustand darf nicht allein an Farbe und Symbol haengen - Gruen,
      // Haekchen und Schloss sind fuer VoiceOver unsichtbar, deshalb steht
      // jeder Zustand im Namen.
      accessibilityLabel={
        isLocked
          ? `${node.label}, gesperrt`
          : node.state === 'done'
            ? `${node.label}, abgeschlossen`
            : isCurrent
              ? `${node.label}, hier bist du`
              : node.label
      }
      accessibilityHint={isLocked ? 'Öffnet den Shop zum Freischalten' : 'Öffnet die Kategorie'}
      style={({ pressed }) => [
        styles.node,
        {
          left: node.left,
          top: node.top + (pressed ? PRESS_DEPTH : 0),
          width: node.width,
          height: node.height - PRESS_DEPTH,
          borderColor: colors.line,
          backgroundColor: colors.fill,
          // Kraeftigerer Rand statt eines Schattens fuer "hier bist du" -
          // ein Schatten traegt auf hellem Grund kaum und faellt im
          // Darkmode ganz weg.
          borderWidth: isCurrent ? 3 : 2,
          borderBottomWidth: pressed ? 2 : PRESS_DEPTH,
        },
      ]}
    >
      {node.state === 'done' && (
        <Feather name="check" size={14} color={colors.line} accessibilityElementsHidden />
      )}
      {isLocked && <Feather name="lock" size={13} color={colors.line} accessibilityElementsHidden />}
      <Text
        numberOfLines={2}
        style={[node.lead ? styles.nodeLabelLead : styles.nodeLabel, { color: colors.line }]}
      >
        {node.label}
      </Text>
    </Pressable>
  );
}

type SplitAction = { label: string; hint: string; onPress: () => void };

// Die beiden Lern-Einstiege als EIN Knopf (Nutzer-Vorlage 2026-08-18).
//
// Optisch eine durchgehende Kapsel, funktional zwei Ziele - deshalb zwei
// echte Pressables nebeneinander und nicht ein Knopf mit zwei Beschriftungen:
// fuer VoiceOver muessen es zwei Bedienelemente mit eigenem Namen und
// eigenem Hinweis bleiben.
//
// Bewusst OHNE die Druckkante von `PillButton`: die Vorlage zeigt eine flache
// Kapsel mit weichem Aussenschatten. Die Rueckmeldung beim Druecken uebernimmt
// deshalb eine dezente Fuellung auf der gedrueckten Haelfte - ohne die waere
// nicht erkennbar, welche der beiden Seiten getroffen wurde.
//
// Keine Trennlinie in der Mitte, ebenfalls nach Vorlage. Die Haelften sind
// trotzdem eindeutig, weil beide Beschriftungen zentriert in ihrer Haelfte
// stehen.
function SplitButton({
  dark,
  left,
  right,
}: {
  dark: boolean;
  left: SplitAction;
  right: SplitAction;
}) {
  const theme = getTheme(dark);

  const half = (action: SplitAction, side: 'left' | 'right') => (
    <Pressable
      onPress={action.onPress}
      accessibilityRole="button"
      accessibilityLabel={action.label}
      accessibilityHint={action.hint}
      style={({ pressed }) => [
        styles.splitHalf,
        side === 'left' ? styles.splitHalfLeft : styles.splitHalfRight,
        pressed && { backgroundColor: theme.subtleFill },
      ]}
    >
      <Text numberOfLines={2} style={[styles.splitLabel, { color: theme.text }]}>
        {action.label}
      </Text>
    </Pressable>
  );

  return (
    <View
      style={[
        styles.splitButton,
        {
          backgroundColor: theme.cardBg,
          // Im Darkmode traegt ein Schatten nicht - dort uebernimmt eine
          // dezente Kontur die Abgrenzung vom Untergrund.
          borderColor: dark ? theme.border : 'transparent',
        },
      ]}
    >
      {half(left, 'left')}
      {/* Trennstrich zwischen den Haelften (Nutzer-Wunsch 2026-08-18).
          Bewusst ein eigenes Flex-Element und nicht absolut positioniert: so
          sitzt er exakt in der Mitte, ohne dass jemand die halbe Breite
          ausrechnen muss, und die beiden Haelften bleiben gleich breit.
          `marginVertical` haelt ihn von Ober- und Unterkante fern - er soll
          die Kapsel nicht durchschneiden, sondern nur die Seiten trennen.

          Farbe bewusst `border` und nicht `dividerColor` (Nutzer-Wunsch
          2026-08-18): der Strich soll nur angedeutet sein, nicht gelesen
          werden. `border` ist im Hellen heller und im Dunkeln dunkler als
          `dividerColor` - in beiden Faellen also kontrastaermer, ohne dass
          dafuer ein neuer Farbwert noetig waere. */}
      <View style={[styles.splitDivider, { backgroundColor: theme.border }]} />
      {half(right, 'right')}
    </View>
  );
}

// Kurze Rueckmeldung fuer Knoepfe, die es zwar gibt, die aber noch nichts
// tun. Lieber eine Zeile, die sagt woran man ist, als ein Tipp ins Leere.
function Notice({ text, dark, onHide }: { text: string | null; dark: boolean; onHide: () => void }) {
  const theme = getTheme(dark);

  useEffect(() => {
    if (!text) return;
    const timer = setTimeout(onHide, 2600);
    return () => clearTimeout(timer);
  }, [text, onHide]);

  if (!text) return null;
  return (
    <View
      accessibilityLiveRegion="polite"
      style={[styles.notice, { backgroundColor: theme.cardBg, borderColor: theme.border }]}
    >
      <Text style={[styles.noticeText, { color: theme.text }]}>{text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  topBar: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: SPACING.sm,
    // Sprache links, Menue rechts. Frueher schob `flex: 1` am Sprachfeld das
    // Menue nach aussen; jetzt uebernimmt das der Zwischenraum, und das Feld
    // darf so schmal sein, wie sein Inhalt es braucht.
    justifyContent: 'space-between',
  },
  langSlot: {
    // `flexShrink` statt `flex`: das Feld waechst nicht mehr auf die ganze
    // Zeile, kann aber schrumpfen, falls ein sehr langer Sprachname kommt -
    // dann greift die Kuerzung im Feld selbst, statt dass das Menue
    // hinausgeschoben wird.
    flexShrink: 1,
  },
  progressRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: SPACING.sm,
    marginTop: SPACING.md,
  },
  progressValue: {
    fontSize: FONT_SIZE.caption,
    fontWeight: '800',
    minWidth: 34,
    textAlign: 'right',
  },
  pathBox: {
    flex: 1,
    marginTop: SPACING.md,
  },
  pathBoxFrameless: {
    borderColor: 'transparent',
  },
  // --- gehoert zum TEST-HINTERGRUND, siehe oben ---
  root: {
    flex: 1,
  },
  backdrop: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    // Hoehe kommt aus dem Fenster (siehe oben). `width/height: 100%` hatte
    // react-native-web dazu gebracht, das Bild zu STRECKEN statt es
    // zuzuschneiden - die Textur war dadurch verzerrt.
  },
  transparentPage: {
    // Sonst liegt die Seitenfarbe aus dem Theme ueber der Textur.
    backgroundColor: 'transparent',
  },
  pathBoxTestTransparent: {
    // Die weisse Fuellung der Box wuerde die Textur in der Mitte zudecken -
    // dann saehe man nur die Raender.
    backgroundColor: 'transparent',
  },
  sectionBar: {
    flexDirection: 'row',
    alignItems: 'stretch',
    gap: SPACING.sm,
    padding: SPACING.md,
  },
  sectionField: {
    flex: 1,
    justifyContent: 'center',
    borderWidth: 1.5,
    borderRadius: RADIUS.md,
    paddingHorizontal: SPACING.md,
    paddingVertical: SPACING.sm,
  },
  sectionLabel: {
    fontSize: FONT_SIZE.caption - 1,
    fontWeight: '700',
    textTransform: 'uppercase',
    letterSpacing: 0.6,
  },
  sectionName: {
    fontFamily: FONT_FAMILY.serif,
    fontSize: FONT_SIZE.bodyLg,
    lineHeight: LINE_HEIGHT.bodyLg,
  },
  mapButton: {
    width: 56,
    height: 56,
    borderWidth: 1.5,
    borderRadius: RADIUS.md,
    overflow: 'hidden',
    alignItems: 'center',
    justifyContent: 'center',
  },
  mapImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  pathBoxContent: {
    paddingVertical: SPACING.lg,
    paddingHorizontal: SPACING.sm,
  },
  pathCanvas: {
    width: CONT_W,
    alignSelf: 'center',
    position: 'relative',
  },
  connector: {
    position: 'absolute',
    height: 2,
    opacity: 0.45,
  },
  node: {
    position: 'absolute',
    borderRadius: RADIUS.pill,
    borderWidth: 2,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    gap: SPACING.xs,
    paddingHorizontal: SPACING.md,
  },
  nodeLabel: {
    fontWeight: '800',
    fontSize: FONT_SIZE.caption,
    textAlign: 'center',
    flexShrink: 1,
  },
  nodeLabelLead: {
    fontFamily: FONT_FAMILY.serif,
    fontSize: FONT_SIZE.bodyLg,
    textAlign: 'center',
  },
  actions: {
    // Haelt die Knoepfe unten, seit die Box gedeckelt ist - der freiwerdende
    // Platz liegt dadurch zwischen Pfad und Knoepfen und nicht darunter.
    marginTop: 'auto',
    paddingTop: SPACING.md,
    marginBottom: SPACING.md,
  },
  splitButton: {
    flexDirection: 'row',
    borderRadius: RADIUS.pill,
    borderWidth: 1,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 18,
    shadowOpacity: 0.12,
    elevation: 5,
  },
  splitHalf: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: SPACING.lg,
    paddingHorizontal: SPACING.sm,
    // Zwei Zeilen Text plus Luft - beide Beschriftungen brechen um.
    minHeight: 76,
  },
  splitDivider: {
    // Feste 1 statt `hairlineWidth`: die faellt auf dichten Bildschirmen
    // unter einen Punkt und war bei der Tab-Leiste schon einmal unsichtbar.
    width: 1,
    marginVertical: SPACING.lg,
    alignSelf: 'stretch',
  },
  splitHalfLeft: {
    borderTopLeftRadius: RADIUS.pill,
    borderBottomLeftRadius: RADIUS.pill,
  },
  splitHalfRight: {
    borderTopRightRadius: RADIUS.pill,
    borderBottomRightRadius: RADIUS.pill,
  },
  splitLabel: {
    fontSize: FONT_SIZE.bodyLg,
    lineHeight: LINE_HEIGHT.bodyLg,
    fontWeight: '700',
    textAlign: 'center',
  },
  notice: {
    // Bezieht sich auf die Innenkante von `Screen`, das den seitlichen Rand
    // schon setzt - hier also 0 statt noch einmal derselbe Abstand.
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
    fontWeight: '700',
    textAlign: 'center',
  },
});
