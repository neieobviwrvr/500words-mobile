import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import {
  Animated,
  Easing,
  PanResponder,
  Platform,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  useWindowDimensions,
  View,
} from 'react-native';
import { router, useFocusEffect } from 'expo-router';
import { Feather } from '@expo/vector-icons';
import { LEARNING_MODE_LABEL, useAppState } from '../../state/AppState';
import { CATEGORIES, GRUNDWORTSCHATZ_ID } from '../../data/categories';
import { sichtbareSituationen } from '../../data/demo';
import { useAuthState } from '../../state/AuthState';
import { LANGUAGES, getLanguage } from '../../data/languages';
import {
  Card,
  Dropdown,
  HeaderMenu,
  ProgressBar,
  ProgressProzent,
  Screen,
  PRESS_DEPTH,
} from '../../components';
import type { DropdownOption } from '../../components';
import { useUnlockedProgress } from './useUnlockedProgress';
import { useCategorySituations } from '../lessons/useCategorySituations';
import { useGuidedCourse } from './useGuidedCourse';
import { PathBackdrop, PATH_BACKDROP_COLOR, PATH_BACKDROP_TRANSPARENT } from './PathBackdrop';
import { ChinaPfadHintergrund, CHINA_BG, wegAnteilBei } from './ChinaPfadHintergrund';
import { ladeBesuch, ZuletztBesucht } from './zuletztBesucht';
import { LinearGradient } from 'expo-linear-gradient';
import { scenarioLabel } from '../../data/scenarios';
import { leihName } from '../../data/geliehen';
import {
  getTheme,
  ACCENT_BLUE,
  ACCENT_ORANGE,
  ACCENT_GREEN,
  ACCENT_GREEN_BG,
  PILL_FILL_BLUE,
  PILL_FILL_ORANGE,
  KATEGORIE_FARBEN,
  PATH_LINE_NEUTRAL,
  PATH_LINE_NEUTRAL_DARK,
  VEIL_LIGHT,
  VEIL_DARK,
  RADIUS,
  SPACING,
  FONT_SIZE,
  LINE_HEIGHT,
  schrift,
  kachel,
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
// Themen-Knoten beim Auffaechern: kleiner als eine Kategorie-Pille, damit auf
// einen Blick klar ist, was Kategorie und was Thema ist (Zielbild:
// `Homescreen genaue Uebersicht.png`).
const THEME_W = 136;
const THEME_H = 36;
const THEME_ROW_H = 58;

// Bild-Knoten sind am 2026-09-01 restlos wieder raus (Simons Vorgabe): die
// zehn PNG-Icons aus `assets/lernpfad/` deckten ohnehin nur 10 der 14
// Kategorien ab (`finding_friends`, `dating_romance`, `drinking_dining` und
// `job_work` fielen mangels Bild schon vorher auf die Text-Pille zurueck -
// ein Bruch, der jetzt verschwindet, weil wieder ALLE Kategorien denselben
// Aufbau haben). An ihre Stelle tritt die Kategorie-Farbe selbst (siehe
// `KATEGORIE_FARBEN` in tokens.ts) - der Name der Kategorie steht wieder als
// Text auf der Kachel, wie vor dem Bild-Umbau.
//
// Auffaechern: die Themen materialisieren von OBEN (Nutzer-Wunsch
// 2026-08-20) - sie sinken aus ihrer Kategorie herab, statt seitlich
// einzufliegen. Das passt zur Leserichtung des Pfades und laesst sie wie
// einen Teil der Kategorie wirken statt wie etwas Hereingeschobenes.
const EXPAND_DURATION = 420;
const EXPAND_DROP = 14;
/** Grau der Themen-Pillen - dunkler als das Gesperrten-Grau, damit sie
 *  lesbar bleiben, aber farblich neutral gegenueber den Kategorien. */
const THEME_LINE = '#7D7A73';
const THEME_FILL = '#F4F2ED';

// Wischgeste nach rechts: der Inhalt folgt dem Finger, federt zurueck oder
// gleitet hinaus. Ohne dieses Mitgehen passiert optisch nichts und die Geste
// fuehlt sich an, als haette man danebengetippt.
//
// `DAMPING` unter 1 laesst den Inhalt LANGSAMER als den Finger laufen - das
// ist der Gummiband-Eindruck, den iOS ueberall verwendet. Bei 1:1 wirkt es,
// als wuerde man die Seite wegschieben, nicht ziehen.
const SWIPE_DAMPING = 0.4;
/** Weiter als das darf der Inhalt nicht mitwandern. */
const SWIPE_MAX_DRAG = 64;
/** Zurueckfedern: klein und weich, absichtlich ohne Zappeln. */
const SWIPE_SPRING = { friction: 6, tension: 28 };
/** Hinausgleiten vor dem Screenwechsel - bewusst gemaechlich. */
const SWIPE_EXIT_DURATION = 320;

// Schwellen der Wischgeste nach rechts.
// `CLAIM` ist die Strecke, ab der die Geste ueberhaupt als waagerecht gilt -
// klein genug, um sich natuerlich anzufuehlen, gross genug, dass ein
// Daumenzittern beim Scrollen sie nicht ausloest.
const SWIPE_CLAIM = 20;
/** Strecke, die allein schon reicht - auch bei langsamem Ziehen. */
const SWIPE_DISTANCE = 90;
/** Alternativ: kurzer, aber schneller Zug. */
const SWIPE_VELOCITY = 0.3;
/**
 * Anteil der Fensterhoehe, den die Pfad-Box hoechstens einnimmt.
 *
 * Herleitung des Werts (2026-08-20): bei 0.52 war die Box auf einem
 * 812 Punkte hohen Bildschirm 422 hoch, und zwischen ihrer Unterkante und
 * dem Lern-Knopf blieben 109 Punkte Luft. Die Box sollte unten um 40% dieser
 * Luft wachsen, also um rund 44 Punkte auf 466 - das sind 0.573 der
 * Fensterhoehe. Die restliche Luft betraegt danach etwa 65 Punkte.
 *
 * Nachgezogen (2026-08-25, Nutzer-Wunsch "Tab-Bar und Knopf Richtung
 * Pfad-Box schieben"): dieselbe Rechnung nochmal, diesmal die Luft um
 * weitere 40 Punkte verkleinert (von ~72 auf ~32 Punkte, gemessen bei
 * 812 Punkten Fensterhoehe). Box waechst dafuer um 40 Punkte auf 505,
 * das sind 0.622 der Fensterhoehe.
 *
 * Zurueckgenommen, noch am selben Tag (Nutzer-Wunsch: "ein bisschen zu nah,
 * um die Haelfte der geaenderten Groesse vergroessern"): die Haelfte der
 * eben gewonnenen 40 Punkte wieder abgegeben, also 20 Punkte. Box damit bei
 * 485 Punkten (0.598 der Fensterhoehe), die Luft liegt wieder bei ~52 Punkten
 * statt ~32.
 *
 * Weil es ein Anteil und keine feste Zahl ist, waechst die Box auf groesseren
 * Geraeten mit; die verbleibende Luft ist dort entsprechend etwas groesser,
 * nicht exakt gleich.
 *
 * NEU 2026-09-01 - die Rolle des Werts hat sich geaendert, die Rechnungen
 * oben sind damit Geschichte. Er war bis dahin die BINDENDE Groesse: die Box
 * traf auf jedem Telefon ihren Deckel, und was uebrig blieb, sammelte sich
 * als Luft zwischen Pfad und Knopf (gemessen 49 Punkte bei 812) - genau die
 * Luecke, die Simon stoerte. Verschaerft hat es der Wegfall des zweiten
 * Knopfes: die Zahlen oben wurden fuer ZWEI Knoepfe eingestellt, seitdem
 * steht dort nur noch einer und die Luft wuchs entsprechend.
 *
 * Jetzt ist der Wert nur noch eine Obergrenze fuer sehr hohe Bildschirme.
 * Die tatsaechliche Hoehe ergibt sich aus `flex: 1` - also aus dem, was
 * Kopfzeile und Knopfblock uebrig lassen. Dadurch gibt es keinen Rest mehr,
 * der sich irgendwo sammeln koennte, und der Abstand zum Knopf ist genau
 * `actions.marginTop` und sonst nichts.
 */
const PATH_BOX_HEIGHT_RATIO = 0.66;

type NodeState = 'done' | 'current' | 'open' | 'locked';

type RawNode = {
  id: string;
  label: string;
  state: NodeState;
  /** Groessere, zentrierte Pille - die Sprache an der Spitze des Pfades. */
  lead?: boolean;
  /** Aufgefaechertes Thema unter seiner Kategorie - kleiner, blendet ein. */
  theme?: boolean;
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
// Blau gehoert dem freien Grundwortschatz, Gruen steht nach dem Stil-Rezept
// ausschliesslich fuer Erfolg und schlaegt deshalb alles andere. Kategorien
// tragen seit 2026-09-01 ("Boom"-Vorgabe) ihre EIGENE Farbe statt eines
// einheitlichen Orange - siehe `KATEGORIE_FARBEN` in tokens.ts.
//
// `dark` waehlt zwischen Hell-/Dunkel-Variante der Kategorie-Farbe. Die
// anderen Faelle (done/theme/lead) waren schon vorher pro Modus flache
// Konstanten und brauchen dafuer keinen eigenen Zweig.
function nodeColors(node: { id: string; state: NodeState; lead?: boolean; theme?: boolean }, dark: boolean) {
  // Gruen schlaegt alles - nach dem Stil-Rezept ist es die einzige Farbe fuer
  // Erfolg, und das gilt auch fuer ein abgeschlossenes Thema.
  if (node.state === 'done') return { line: ACCENT_GREEN, fill: ACCENT_GREEN_BG };
  // Aufgefaecherte Themen sind grau (Nutzer-Wunsch 2026-08-20): sie sollen
  // sich nicht mit dem Blau des Grundwortschatzes und den Kategorie-Farben
  // beissen. Gesperrte Themen bleiben durch das Schloss und ihren Namen
  // unterscheidbar, nicht durch die Farbe. UNVERAENDERT vom "Boom"-Umbau -
  // der galt ausdruecklich nur den Kategorie-KACHELN, nicht den Situationen
  // darunter.
  if (node.theme) return { line: THEME_LINE, fill: THEME_FILL };
  if (node.lead) return { line: ACCENT_BLUE, fill: PILL_FILL_BLUE };
  // Kategorie-Kachel: eigene Farbe, AUCH gesperrt - der Schleier in
  // `PathNode` macht daraus "gesperrt", nicht eine ausgetauschte Graufarbe.
  const t = KATEGORIE_FARBEN[node.id];
  if (t) return dark ? { line: t.lineDark, fill: t.fillDark } : { line: t.line, fill: t.fill };
  // Sicherheitsnetz fuer eine Kategorie ohne Eintrag (sollte nicht
  // vorkommen - alle 14 aus `categories.ts` sind erfasst).
  return { line: ACCENT_ORANGE, fill: PILL_FILL_ORANGE };
}

export function PathScreen() {
  const { darkMode, purchased, targetLanguageId, setTargetLanguageId, coins, learningMode, toggleLearningMode } =
    useAppState();
  const { hatKonto } = useAuthState();
  const theme = getTheme(darkMode);
  const activeLanguage = getLanguage(targetLanguageId);

  // Hoehe der Pfad-Box deckeln (Nutzer-Wunsch 2026-08-18: vertikal kleiner).
  // Als Anteil der Fensterhoehe statt als feste Zahl - auf einem kleinen
  // iPhone SE waere eine feste Hoehe zu viel, auf einem Pro Max zu wenig.
  // Die Box scrollt ohnehin innen, sie muss also nicht alles zeigen.
  const { width: windowWidth, height: windowHeight } = useWindowDimensions();
  // Bebilderter Pfad: bisher nur Chinesisch (Simons Vorlage 2026-08-31).
  // Weitere Sprachen bekommen eigene Zeichnungen, sobald es welche gibt -
  // dann wird daraus eine Zuordnung statt eines Vergleichs.
  const bebilderterPfad = targetLanguageId === 'zh';
  const pathBoxMaxHeight = Math.round(windowHeight * PATH_BOX_HEIGHT_RATIO);
  // Ausblenden-Hoehe als Anteil der Box, nicht als feste Zahl (Nutzer-
  // Wunsch: "zu einem bestimmten Prozentsatz") - skaliert dadurch mit der
  // Box selbst statt auf kleinen Geraeten unverhaeltnismaessig viel wegzu-
  // nehmen.
  const pathFadeHoehe = Math.round(pathBoxMaxHeight * 0.1);

  // Nach rechts wischen oeffnet die Geschenk-/Belohnungsseite (Nutzer-Wunsch
  // 2026-08-20). Zusaetzlicher Weg, nicht der einzige: der Coins-Knopf im
  // Menue bleibt - eine Wischgeste ist unsichtbar und fuer VoiceOver-Nutzer
  // gar nicht bedienbar.
  //
  // `PanResponder` statt einer Gestenbibliothek: react-native-gesture-handler
  // waere ein weiteres natives Modul samt neuem Build, und fuer eine einzelne
  // Wischgeste ist der eingebaute Weg ausreichend.
  //
  // Die Bedingung ist bewusst streng - der Zug muss deutlich waagerecht sein
  // (doppelt so weit seitlich wie hoch) und nach RECHTS gehen. Sonst wuerde
  // die Geste das senkrechte Scrollen in der Pfad-Box abfangen.

  // Verschiebung des Inhalts waehrend der Geste. Bewusst OHNE nativen
  // Treiber: der Wert wird bei jeder Fingerbewegung aus JS gesetzt, und das
  // vertraegt sich mit dem nativen Treiber schlecht. Bei einer Geste von
  // wenigen hundert Millisekunden faellt das nicht ins Gewicht - anders als
  // beim Dauer-Schimmer im Fortschrittsbalken.
  const drag = useRef(new Animated.Value(0)).current;

  const swipe = useRef(
    PanResponder.create({
      onMoveShouldSetPanResponder: (_e, g) =>
        g.dx > SWIPE_CLAIM && Math.abs(g.dx) > Math.abs(g.dy) * 2,

      // Der Inhalt geht mit, gedaempft und gedeckelt.
      onPanResponderMove: (_e, g) => {
        drag.setValue(Math.min(Math.max(g.dx, 0) * SWIPE_DAMPING, SWIPE_MAX_DRAG));
      },

      onPanResponderRelease: (_e, g) => {
        const ausgeloest =
          g.dx > SWIPE_DISTANCE || (g.dx > SWIPE_CLAIM && g.vx > SWIPE_VELOCITY);

        if (ausgeloest) {
          // Erst ganz hinausgleiten, dann wechseln - sonst springt der Screen
          // um, waehrend der Inhalt noch mitten in der Bewegung steht.
          Animated.timing(drag, {
            toValue: SWIPE_MAX_DRAG,
            duration: SWIPE_EXIT_DURATION,
            easing: Easing.out(Easing.quad),
            useNativeDriver: false,
          }).start(() => {
            router.push('/rewards');
            // Zurueck auf 0, damit der Screen beim Zurueckkommen nicht
            // verschoben dasteht.
            drag.setValue(0);
          });
          return;
        }

        // Nicht weit genug: zurueckfedern. Der kleine Nachschwinger ist die
        // Rueckmeldung "erkannt, aber nicht genug".
        Animated.spring(drag, {
          toValue: 0,
          ...SWIPE_SPRING,
          useNativeDriver: false,
        }).start();
      },

      // Nimmt das System die Geste weg (Anruf, Mitteilung), darf der Inhalt
      // nicht verschoben liegenbleiben.
      onPanResponderTerminate: () => {
        Animated.spring(drag, { toValue: 0, ...SWIPE_SPRING, useNativeDriver: false }).start();
      },
    })
  ).current;

  const scrollRef = useRef<ScrollView>(null);
  // Fuer den bebilderten Pfad (2026-08-31): das Bild soll die GANZE Seite
  // fuellen, nicht nur die Pfad-Box - und trotzdem mit den Knoten wandern,
  // weil die auf dem gezeichneten Weg sitzen.
  //
  // In der Scroll-Flaeche ginge das erste nicht (sie schneidet an ihrem Rand
  // ab), hinter dem Screen das zweite nicht (dort steht es still). Deshalb
  // liegt es hinter dem Screen und bekommt den Scroll-Stand als Versatz -
  // es bewegt sich also mit, ohne beschnitten zu werden.
  const [besuch, setBesuch] = useState<ZuletztBesucht | null>(null);
  const [scrollY, setScrollY] = useState(0);
  const [scrollTop, setScrollTop] = useState(0);
  const didAutoScroll = useRef(false);

  // Auffaechern: ein Tipp auf eine Pille zeigt ihre Themen. `expandedIds`
  // haelt, welche gerade offen sind.
  const situations = useCategorySituations(targetLanguageId);
  const course = useGuidedCourse(targetLanguageId);
  const [expandedIds, setExpandedIds] = useState<string[]>([]);
  // Wie beim Menue getrennt vom Zustand: die Knoten sollen das Einfahren zu
  // Ende spielen, bevor sie aus der Liste verschwinden.
  const [themesMounted, setThemesMounted] = useState(false);
  const expand = useRef(new Animated.Value(0)).current;
  const hasExpanded = useRef(false);

  const istOffen = expandedIds.length > 0;

  // Ein Tipp auf eine Pille faechert nur ihre eigenen Themen auf
  // (Nutzer-Wunsch 2026-08-20). Damit ist die Pille kein Weg mehr nach S2 -
  // dorthin fuehren jetzt die Themen darunter.
  const toggleCategory = useCallback(
    (categoryId: string) => () =>
      setExpandedIds((cur) =>
        cur.includes(categoryId) ? cur.filter((id) => id !== categoryId) : [...cur, categoryId]
      ),
    []
  );

  // Der Knopf im Kopf der Pfad-Box wechselt den Lernweg (Nutzer-Wunsch
  // 2026-08-20). Vorher faecherte er alle Kategorien auf einmal auf - das
  // faellt weg, der Tipp auf eine einzelne Pille bleibt.
  const switchMode = useCallback(() => {
    toggleLearningMode();
    // Was danach aufgefaechert ist, setzt der Effekt weiter unten - im
    // gefuehrten Kurs stehen die Lektionen von sich aus offen.
    // Bewusst OHNE zusaetzliche Notice: der leere Pfad zeigt den Grund schon
    // als Ruhezeile an. Beides gleichzeitig hiesse denselben Satz doppelt
    // auf dem Schirm - im Browser gesehen und wieder entfernt.
  }, [toggleLearningMode]);

  // Im gefuehrten Kurs stehen alle Lektionen von Anfang an offen
  // (Nutzer-Wunsch 2026-08-20): der Kurs ist eine Strecke, die man
  // ueberblicken soll, keine Sammlung, in die man hineinsieht. Zuklappen
  // bleibt jederzeit moeglich, es ist nur nicht mehr der Ausgangszustand.
  //
  // Als Effekt und NICHT im Umschalt-Handler, damit es in allen drei Faellen
  // greift: Moduswechsel, Sprachwechsel und erster Aufbau des Screens.
  // Die Abhaengigkeiten sind bewusst eng - `expandedIds` steht NICHT darin,
  // sonst spraenge eine gerade zugeklappte Pille sofort wieder auf.
  useEffect(() => {
    setExpandedIds(learningMode === 'gefuehrt' ? course.lessons.map((l) => l.id) : []);
  }, [learningMode, course.lessons]);

  useEffect(() => {
    const useNative = Platform.OS !== 'web';
    if (istOffen) {
      hasExpanded.current = true;
      setThemesMounted(true);
      const anim = Animated.timing(expand, {
        toValue: 1,
        duration: EXPAND_DURATION,
        easing: Easing.out(Easing.quad),
        useNativeDriver: useNative,
      });
      anim.start();
      return () => anim.stop();
    }

    if (!hasExpanded.current) return;
    const anim = Animated.timing(expand, {
      toValue: 0,
      duration: EXPAND_DURATION,
      easing: Easing.out(Easing.quad),
      useNativeDriver: useNative,
    });
    anim.start();
    // Aushaengen an einer Uhr, nicht am Abschluss-Callback - laeuft die
    // Animation nicht durch, blieben die Knoten sonst unsichtbar haengen.
    const timer = setTimeout(() => setThemesMounted(false), EXPAND_DURATION);
    return () => {
      anim.stop();
      clearTimeout(timer);
    };
  }, [istOffen, expand]);
  const [notice, setNotice] = useState<string | null>(null);
  const hideNotice = useCallback(() => setNotice(null), []);

  const unlockedIds = useMemo(
    () => [GRUNDWORTSCHATZ_ID, ...CATEGORIES.filter((c) => purchased[c.id]).map((c) => c.id)],
    [purchased]
  );
  const progress = useUnlockedProgress(targetLanguageId, unlockedIds);

  const goCategory = (id: string) => () => router.push({ pathname: '/category/[id]', params: { id } });
  // Eine Situation oeffnet GENAU ihre Saetze (2026-08-21). Vorher landete
  // man auf der Kategorie und damit bei den vier Modus-Knoepfen - man hatte
  // "Naeher kommen" angetippt und bekam "Komplette Kategorie durchspammen".
  //
  // Seit 2026-08-31 fuehrt das auf `/training/saetze` statt `/exercise`:
  // dort liegen die verbindlichen Layout-Vorlagen der drei Satzstufen
  // (Simons Vorgabe). Der Lektionen-Screen ging schon dorthin, der Pfad
  // nicht - dieselbe Situation sah je nach Einstieg anders aus.
  const goSituation = (categoryId: string, scenario: string) => () =>
    router.push({ pathname: '/training/saetze', params: { categoryId, scenario } });
  const goShop = () => router.push('/shop');

  // ---------------------------------------------------------------------
  // Knotenliste
  // ---------------------------------------------------------------------
  const { nodes: raw, currentIndex, currentLabel, currentScenario } = useMemo(() => {
    // Geführtes Lernen: Lektionen statt Kategorien, Themen statt Situationen.
    // Solange der Kurs leer ist, bleibt auch die Liste leer - der Pfad zeigt
    // dann den Grund aus dem Hook (siehe useGuidedCourse.ts).
    if (learningMode === 'gefuehrt') {
      const list: RawNode[] = course.lessons.flatMap((lesson) => [
        {
          id: lesson.id,
          label: lesson.label,
          state: 'open' as NodeState,
          onPress: toggleCategory(lesson.id),
        },
        ...(themesMounted && expandedIds.includes(lesson.id)
          ? lesson.themes.map((t) => ({
              id: `${lesson.id}:${t.id}`,
              label: t.label,
              state: 'open' as NodeState,
              theme: true,
              onPress: () => router.push(`/lesson/${t.id}`),
            }))
          : []),
      ]);
      return {
        nodes: list,
        currentIndex: 0,
        currentLabel: list.length > 0 ? list[0].label : 'Noch kein Kurs',
        currentScenario: null,
      };
    }

    // Sprachen ohne Phrasebook-Tabelle (Chinesisch traegt bisher nur den
    // gefuehrten Kurs) haben im Speed-Run nichts zu zeigen. Ohne diese
    // Weiche stuenden die Kategorien trotzdem da - mit nichts dahinter.
    if (!activeLanguage.table) {
      return { nodes: [] as RawNode[], currentIndex: 0, currentLabel: 'Noch keine Sätze', currentScenario: null };
    }

    // ALLE Kategorien, auch ohne Konto (berichtigt 2026-08-23, siehe
    // data/demo.ts) - gesperrte Kategorien sollen werben, nicht verschwinden.
    // Die Demo-Grenze wirkt seit der Berichtigung nur noch auf Situationen
    // innerhalb einzelner Kategorien, siehe `sichtbareSituationen` unten.
    const purchasedCategories = CATEGORIES.filter((c) => purchased[c.id]);
    const lockedCategories = CATEGORIES.filter((c) => !purchased[c.id]);

    // "Fertig" heisst: jeder Satz der Kategorie wurde mindestens einmal
    // bewertet. "Aktuell" ist die erste freigeschaltete Kategorie, die das
    // noch nicht ist - sie bekommt den Ring und gibt dem Abschnitts-Kopf
    // seinen Namen.
    // Die Themen einer Kategorie, sobald sie aufgefaechert ist. Sie stehen
    // als eigene Knoten in derselben Liste - deshalb rutschen die folgenden
    // Kategorien von selbst nach unten, ohne Sonderfall im Layout.
    //
    // Gesperrte Kategorien fachern ebenfalls auf: der Pfad soll zeigen, was
    // es zu holen gibt. Ihre Themen fuehren dann in den Shop.
    const themenVon = (categoryId: string, locked: boolean): RawNode[] => {
      if (!themesMounted || !expandedIds.includes(categoryId)) return [];
      // Ohne Konto nur die ersten Situationen je Kategorie - siehe
      // data/demo.ts.
      return sichtbareSituationen(situations.byCategory[categoryId] ?? [], hatKonto, categoryId, purchased).map((sit) => ({
        id: `${categoryId}:${sit.scenario}`,
        label: leihName(categoryId, sit.scenario) ?? scenarioLabel(sit.scenario),
        state: (locked
          ? 'locked'
          : sit.total > 0 && sit.seen >= sit.total
            ? 'done'
            : 'open') as NodeState,
        theme: true,
        onPress: locked ? goShop : goSituation(categoryId, sit.scenario),
      }));
    };

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
        onPress: toggleCategory(GRUNDWORTSCHATZ_ID),
      },
      ...themenVon(GRUNDWORTSCHATZ_ID, false),
      ...purchasedCategories.flatMap((cat) => [
        {
          id: cat.id,
          label: cat.name,
          state: stateFor(cat.id),
          onPress: toggleCategory(cat.id),
        },
        ...themenVon(cat.id, false),
      ]),
      ...lockedCategories.flatMap((cat) => [
        {
          id: cat.id,
          label: cat.name,
          state: 'locked' as NodeState,
          onPress: toggleCategory(cat.id),
        },
        ...themenVon(cat.id, true),
      ]),
    ];

    // "Aktuell" ist die zuletzt GELERNTE Kategorie (Nutzer-Wunsch
    // 2026-08-20) - der Screen soll zeigen, wo man aufgehoert hat, nicht wo
    // man theoretisch weitermachen sollte. Erst wenn noch nie geuebt wurde,
    // gilt wieder die erste nicht fertige Kategorie.
    // Gesperrte Kategorien scheiden aus - dort laesst sich nicht
    // weiterlernen. Dann gilt die naechstjuengere freigeschaltete.
    //
    // Der Merker aus der Uebung geht VOR (2026-08-31): er wird nach jeder
    // beantworteten Karte geschrieben, die FSRS-Ableitung erst am
    // Sitzungsende und im Kategorie-Modus gar nicht. Nur wenn er fehlt oder
    // auf eine andere Sprache zeigt, gilt wieder die FSRS-Reihenfolge.
    let zuletzt = -1;
    const merkerKategorien =
      besuch && besuch.languageId === targetLanguageId
        ? [besuch.categoryId, ...situations.recentCategoryIds]
        : situations.recentCategoryIds;
    for (const categoryId of merkerKategorien) {
      zuletzt = list.findIndex((n) => n.id === categoryId && n.state !== 'locked');
      if (zuletzt >= 0) break;
    }
    const idx = zuletzt >= 0 ? zuletzt : list.findIndex((n) => n.state === 'open');
    if (idx >= 0 && list[idx].state !== 'done') list[idx].state = 'current';

    return {
      nodes: list,
      currentIndex: idx >= 0 ? idx : 0,
      // `list` ist im Speed-Run nie leer (die Sprach-Pille steht immer da),
      // der Zugriff auf list[0] wird trotzdem abgesichert - der geführte Weg
      // teilt sich diesen Rueckgabepfad nicht, aber die Annahme soll nicht
      // still im Code stehen.
      currentLabel: idx >= 0 ? list[idx].label : (list[0]?.label ?? ''),
      // Die Stelle IN der Kategorie (Simons Wunsch 2026-08-31): der Kasten
      // soll zeigen, woran man zuletzt war, nicht nur in welcher Kategorie.
      // Nur die juengste Situation zaehlt, und nur wenn sie zur angezeigten
      // Kategorie gehoert - sonst stuende dort eine Situation aus einer
      // anderen Kategorie als die darueber genannte.
      currentScenario: (() => {
        if (idx < 0) return null;
        const ausMerker =
          besuch && besuch.languageId === targetLanguageId && besuch.categoryId === list[idx].id && besuch.scenario
            ? { categoryId: besuch.categoryId, scenario: besuch.scenario }
            : null;
        const sit = ausMerker ?? situations.recentSituations.find((s) => s.categoryId === list[idx].id);
        if (!sit) return null;
        // Leih-Namen hier aufloesen, nicht im Render: die aufnehmende
        // Kategorie ist genau hier bekannt (siehe data/geliehen.ts).
        return leihName(sit.categoryId, sit.scenario) ?? scenarioLabel(sit.scenario);
      })(),
    };
    // `expandedIds` gehoert schon jetzt in die Abhaengigkeiten - sobald das
    // Auffaechern kommt, muss die Liste sich davon neu bauen.
  }, [learningMode, course.lessons, purchased, activeLanguage.label, activeLanguage.table, progress.byCategory, situations.recentCategoryIds, situations.recentSituations, besuch, targetLanguageId, expandedIds, themesMounted, situations.byCategory, toggleCategory, hatKonto]);

  // ---------------------------------------------------------------------
  // Zickzack-Layout: Pillen abwechselnd links/rechts, verbunden durch
  // rotierte Linien zwischen den Mittelpunkten.
  // ---------------------------------------------------------------------
  const { pathNodes, connectors, canvasHeight } = useMemo(() => {
    // Laufende Hoehe statt `index * ROW_H`: Themen-Zeilen sind niedriger als
    // Kategorie-Zeilen, sonst klaffte beim Auffaechern ueberall eine Luecke.
    let y = 0;
    // Hoehe einer Bildkachel in Pfad-Koordinaten - der Weg wiederholt sich
    // mit ihr.
    const kachelHoehe = Math.round(CHINA_BG.hoehe * (windowWidth / CHINA_BG.breite));
    const laid: LaidOutNode[] = raw.map((n, i) => {
      const w = n.theme ? THEME_W : n.lead ? LANG_PILL_W : PILL_W;
      const h = n.theme ? THEME_H : n.lead ? LANG_PILL_H : PILL_H;
      // Auf einem bebilderten Pfad folgen die Knoten dem gezeichneten Weg
      // (2026-08-31, Simons Wunsch) statt dem festen Zickzack. `wegAnteilBei`
      // liest den Verlauf aus dem Bild; der Wert ist die MITTE des Knotens,
      // deshalb die halbe Breite abziehen und in den Container klemmen.
      // Der Weg-Anteil bezieht sich auf die BILDbreite (Fensterbreite), die
      // Knoten liegen aber im schmaleren Canvas - deshalb den Versatz
      // zwischen beiden abziehen.
      const bildVersatz = (windowWidth - CONT_W) / 2;
      const left = bebilderterPfad
        ? Math.max(
            0,
            Math.min(
              CONT_W - w,
              wegAnteilBei(y + h / 2, kachelHoehe) * windowWidth - bildVersatz - w / 2
            )
          )
        : n.lead
          ? (CONT_W - w) / 2
          : i % 2 === 0
            ? 0
            : CONT_W - w;
      const top = y;
      y += n.theme ? THEME_ROW_H : ROW_H;
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
        // Neutral-grau fuer JEDE Linie (2026-09-01, Simons Vorgabe) - vorher
        // trug jede Linie die Farbe des Knotens, aus dem sie kam. Bei 14
        // verschiedenen Kategorie-Farben waere der Pfad damit ein
        // Flickenteppich geworden. Der Zustand (gesperrt/fertig/aktuell)
        // steht jetzt allein an den Knoten - Haken, Schloss, Farbe der
        // Kachel selbst.
        color: darkMode ? PATH_LINE_NEUTRAL_DARK : PATH_LINE_NEUTRAL,
      });
    }

    const last = laid[laid.length - 1];
    return {
      pathNodes: laid,
      connectors: conns,
      canvasHeight: last ? last.top + last.height + SPACING.xl : 0,
    };
    // `bebilderterPfad` gehoert dazu: davon haengt ab, ob die Knoten dem
    // gezeichneten Weg folgen oder im Zickzack stehen. `darkMode` seit
    // 2026-09-01 dazu - die Verbindungslinien-Farbe haengt jetzt vom Modus ab.
  }, [raw, bebilderterPfad, windowWidth, darkMode]);

  // Sprung zur zuletzt gelernten Stelle - bei JEDEM Betreten des Screens
  // (Nutzer-Wunsch 2026-08-20), also auch beim Zurueckkehren aus einer
  // Uebung, nicht nur beim ersten Aufbau.
  //
  // `didAutoScroll` wird beim Verlassen zurueckgesetzt, damit der naechste
  // Besuch wieder springt. Innerhalb eines Besuchs bleibt es bei einem
  // Sprung - wer selbst scrollt, soll nicht zurueckgerissen werden, wenn der
  // Fortschritt nachlaedt.
  useFocusEffect(
    useCallback(() => {
      didAutoScroll.current = false;
      // Bei JEDEM Betreten neu lesen (2026-08-31): der Merker wird in der
      // Uebung geschrieben, waehrend dieser Screen im Hintergrund liegt -
      // ein Laden beim ersten Aufbau bliebe fuer immer veraltet.
      let aktiv = true;
      void ladeBesuch().then((b) => {
        if (aktiv) setBesuch(b);
      });
      return () => {
        aktiv = false;
        didAutoScroll.current = false;
      };
    }, [])
  );

  useEffect(() => {
    if (didAutoScroll.current || progress.loading || pathNodes.length === 0) return;
    didAutoScroll.current = true;
    const target = Math.max(0, (pathNodes[currentIndex]?.top ?? 0) - ROW_H);
    // Ohne die Verzoegerung misst die ScrollView ihren Inhalt noch nicht.
    const timer = setTimeout(() => scrollRef.current?.scrollTo({ y: target, animated: true }), 0);
    return () => clearTimeout(timer);
  }, [progress.loading, pathNodes, currentIndex]);

  const languageOptions: DropdownOption[] = LANGUAGES.map((l) => ({
    id: l.id,
    label: l.label,
    disabled: !l.hasContent,
    note: l.hasContent ? undefined : 'bald',
  }));

  return (
    <View style={styles.root} {...swipe.panHandlers}>
      {/* Hintergrund in drei Ebenen; die Kartenecken wackeln gelegentlich.
          Zum Entfernen: diese Zeile loeschen, `styles.transparentPage` am
          <Screen> streichen und `pathBoxTestTransparent` aus dem Card-Stil
          nehmen. */}
      <PathBackdrop width={windowWidth} height={windowHeight} />
      {/* Bebilderte Seite nur fuer Chinesisch (2026-08-31, Simons Vorlage).
          Volle Fensterbreite und -hoehe, verschoben um den Scroll-Stand -
          siehe `scrollY` oben, warum weder "in der Scroll-Flaeche" noch
          "fest hinter dem Screen" allein reicht.
          `scrollTop` ist die Lage der Scroll-Flaeche im Screen: das Bild
          soll dort beginnen, wo der Pfad beginnt, nicht am oberen
          Bildschirmrand - sonst laege der Weg um die Kopfzeile versetzt. */}
      {bebilderterPfad ? (
        <View
          style={[styles.bebildert, { top: scrollTop - scrollY }]}
          pointerEvents="none"
        >
          <ChinaPfadHintergrund breite={windowWidth} hoehe={canvasHeight + windowHeight} />
        </View>
      ) : null}
    <Animated.View style={[styles.root, { transform: [{ translateX: drag }] }]}>
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
        <ProgressProzent dark={darkMode} ratio={progress.ratio} />
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
          <View style={[styles.sectionField, kachel(darkMode), { backgroundColor: theme.cardBg }]}>
            {/* Die kleine Zeile nennt den Lernweg (Nutzer-Wunsch
                2026-08-20), die grosse bleibt die Stelle im Pfad. Der Text
                kommt aus LEARNING_MODE_LABEL, damit Knopf-Ansage und Kasten
                nie auseinanderlaufen. `textTransform` im Stil macht die
                Grossschreibung, der Wortlaut bleibt hier lesbar. */}
            {/* Steht eine Situation fest, rutscht die Kategorie in die
                kleine Zeile und die Situation wird zur grossen - so nennt
                der Kasten beides, ohne eine dritte Zeile zu brauchen. Ohne
                Situation bleibt es beim bisherigen Aufbau. */}
            <Text style={[styles.sectionLabel, { color: theme.sub }]} numberOfLines={1}>
              {currentScenario
                ? `${LEARNING_MODE_LABEL[learningMode]} · ${currentLabel}`
                : LEARNING_MODE_LABEL[learningMode]}
            </Text>
            <Text style={[styles.sectionName, { color: theme.text }]} numberOfLines={1}>
              {currentScenario ?? currentLabel}
            </Text>
          </View>
          <Pressable
            onPress={switchMode}
            accessibilityRole="button"
            // Nennt das ZIEL, nicht den aktuellen Stand - sonst weiss man
            // beim Vorlesen nicht, was der Knopf bewirkt. Kein
            // `aria-expanded` mehr: der Knopf klappt nichts mehr auf.
            //
            // Doppelpunkt statt "Zu X wechseln": der Modusname stuende dort
            // im Dativ ("Zu Geführtem Lernen"), muesste also gebeugt werden.
            // So bleibt LEARNING_MODE_LABEL unveraendert einsetzbar, auch
            // fuer kuenftige Namen.
            accessibilityLabel={`Lernweg wechseln zu: ${
              LEARNING_MODE_LABEL[learningMode === 'speedrun' ? 'gefuehrt' : 'speedrun']
            }`}
            style={({ pressed }) => [
              styles.toggleButton,
              kachel(darkMode),
              {
                backgroundColor: theme.cardBg,
                opacity: pressed ? 0.7 : 1,
              },
            ]}
          >
            {/* Wechsel-Symbol (Nutzer-Wunsch 2026-08-20). Passt weiterhin:
                der Knopf schaltet zwischen den beiden Lernwegen hin und her,
                er fuehrt nicht woandershin. */}
            <Feather name="repeat" size={24} color={theme.text} />
          </Pressable>
        </View>

        <View style={styles.pathScrollWrap}>
          <ScrollView
            ref={scrollRef}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={styles.pathBoxContent}
            // Nur beim bebilderten Pfad noetig - sonst kostet das Melden
            // jedes Frames Rechenzeit ohne Gegenwert.
            scrollEventThrottle={bebilderterPfad ? 16 : 0}
            onScroll={bebilderterPfad ? (e) => setScrollY(e.nativeEvent.contentOffset.y) : undefined}
            onLayout={
              bebilderterPfad
                ? (e) => setScrollTop(e.nativeEvent.layout.y)
                : undefined
            }
          >
            {pathNodes.length === 0 ? (
              // Ehrlich statt leere Flaeche: sagt, woran es liegt. Bleibt
              // stehen, anders als die Notice, die sich wieder ausblendet.
              <View style={styles.pathEmpty}>
                <Feather name="map" size={28} color={theme.sub} />
                <Text style={[styles.pathEmptyText, { color: theme.sub }]}>
                  {learningMode === 'gefuehrt'
                    ? (course.unavailable ?? 'Hier ist noch nichts.')
                    : `Für ${activeLanguage.label} gibt es bisher keine Sätze — probier den geführten Kurs über den Knopf oben rechts.`}
                </Text>
              </View>
            ) : null}
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
              {pathNodes.map((n) =>
                n.theme ? (
                  <PathNode key={n.id} node={n} dark={darkMode} progress={expand} />
                ) : (
                  <PathNode key={n.id} node={n} dark={darkMode} />
                )
              )}
            </View>
          </ScrollView>

          {/* Ausblenden statt hartem Schnitt (Nutzer-Wunsch 2026-08-25):
              eine angeschnittene Pille direkt am Rand der Scroll-Box sah
              wie ein Rendering-Fehler aus. Zwei Farbverlaeufe liegen ÜBER
              der ScrollView (spaetere Geschwister malen in RN darueber),
              `pointerEvents="none"` laesst Scroll/Tipp-Gesten ungehindert
              durch. Faerben zu PATH_BACKDROP_COLOR statt einer festen
              Konstante - dieselbe Farbe wie der Hintergrund dahinter, sonst
              waere der Uebergang selbst wieder eine harte Kante. */}
          {/* Auf einem bebilderten Pfad entfallen die Verlaeufe: sie
              verblassen zur HINTERGRUNDFARBE, und die gibt es dort nicht -
              ueber der Zeichnung laegen sie als heller Schleier. Die Pillen
              werden dort vom Bild selbst gerahmt. */}
          {bebilderterPfad ? null : (
            <>
              <LinearGradient
                pointerEvents="none"
                colors={[PATH_BACKDROP_COLOR, PATH_BACKDROP_TRANSPARENT]}
                style={[styles.pathFade, styles.pathFadeTop, { height: pathFadeHoehe }]}
              />
              <LinearGradient
                pointerEvents="none"
                colors={[PATH_BACKDROP_TRANSPARENT, PATH_BACKDROP_COLOR]}
                style={[styles.pathFade, styles.pathFadeBottom, { height: pathFadeHoehe }]}
              />
            </>
          )}
        </View>
      </Card>

      {/* Fester Knopf ausserhalb der Scroll-Box. */}
      <View style={styles.actions}>
        <SoftButton
          dark={darkMode}
          label="Tägliches Wiederholen"
          hint={
            learningMode === 'gefuehrt'
              ? 'Wiederholt die Wörter und Satzmuster aus dem Kurs'
              : 'Wiederholt die fälligen Sätze aus dem Speed-Run'
          }
          // Direkt in EINE gemischte Sitzung, ohne Zwischenscreen
          // (Nutzer-Frage 2026-08-21). Das taegliche Wiederholen ist der
          // gemeinsame Pool - wer hier erst waehlen muss, uebt die Haelfte
          // nicht. Nach Kartenart filtern kann man weiterhin ueber S5, das
          // ist aber die Ausnahme.
          //
          // WOHIN, haengt am LERNWEG, nicht an der Sprache
          // (Nutzer-Wunsch 2026-08-21): wiederholt wird das, was man auch
          // lernt. Vorher entschied die Sprache - Chinesisch landete immer
          // beim Kurs, selbst wenn man gerade im Speed-Run stand. Das ging
          // durch, solange Chinesisch gar keine Speed-Run-Saetze hatte;
          // seit `chinesisch_phrasebook` existiert, waere es schlicht der
          // falsche Stoff.
          //
          // Im gefuehrten Modus einer Sprache OHNE Kurs kommt man auf einen
          // ehrlich leeren Screen - dieselbe Aussage, die der Pfad darueber
          // schon macht ("gibt es bisher nur fuer Chinesisch").
          onPress={() =>
            // `/training/saetze` OHNE Parameter ist die globale
            // Satz-Wiederholung ueber alle Kategorien - derselbe Screen wie
            // bei einer einzelnen Situation, nur ohne Filter, und damit mit
            // denselben Layout-Vorlagen (2026-08-31).
            router.push(learningMode === 'gefuehrt' ? '/wiederholen' : '/training/saetze')
          }
        />
      </View>

      <Notice text={notice} dark={darkMode} onHide={hideNotice} />
    </Screen>
    </Animated.View>
    </View>
  );
}

// ---------------------------------------------------------------------------
// Kleine Bausteine, die nur S1 braucht
// ---------------------------------------------------------------------------

// Ein Knoten im Pfad. Traegt die Druckkante von `PillButton`, damit sich
// Knoten und Knoepfe gleich anfuehlen - das ist der 30%-Duolingo-Anteil.
function PathNode({
  node,
  dark,
  progress,
}: {
  node: LaidOutNode;
  dark: boolean;
  progress?: Animated.Value;
}) {
  const colors = nodeColors(node, dark);
  const isLocked = node.state === 'locked';
  const isCurrent = node.state === 'current';
  // Nur echte Kategorie-Kacheln bekommen den Schleier - Situationen (theme)
  // und die Sprach-Pille (lead) bleiben bei ihrer bisherigen Darstellung
  // (siehe Kommentar bei `nodeColors`).
  const zeigeSchleier = isLocked && !node.theme && !node.lead;

  // Aufbau in zwei Schichten, und das ist wichtig:
  //
  // AUSSEN eine Animated.View, die nur positioniert und animiert. INNEN ein
  // ganz normales Pressable, das die Flaeche fuellt.
  //
  // Warum nicht ein animiertes Pressable mit allem drin: dessen `style` kann
  // dann keine FUNKTION mehr sein - und genau die brauchen wir fuer den
  // Gedrueckt-Zustand. Beim ersten Versuch fielen dadurch saemtliche Stile
  // aus, die Themen standen als nackter Text uebereinander.
  const anim = progress
    ? {
        opacity: progress,
        transform: [
          {
            // Von oben herabsinken statt seitlich hereinfliegen.
            translateY: progress.interpolate({
              inputRange: [0, 1],
              outputRange: [-EXPAND_DROP, 0],
            }),
          },
        ],
      }
    : null;

  return (
    <Animated.View
      style={[
        styles.nodeSlot,
        { left: node.left, top: node.top, width: node.width, height: node.height },
        anim,
      ]}
    >
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
          node.theme && styles.nodeTheme,
          {
            borderColor: colors.line,
            backgroundColor: colors.fill,
            // Kraeftigerer Rand statt eines Schattens fuer "hier bist du" -
            // ein Schatten traegt auf hellem Grund kaum und faellt im
            // Darkmode ganz weg.
            borderWidth: isCurrent ? 3 : node.theme ? 1.5 : 2,
            // PRESS_DEPTH ist seit 2026-09-01 6 (Simons "Boom"-Vorgabe,
            // dieselbe Konstante wie bei PillButton) - Kategorie-Kacheln
            // bekommen dadurch automatisch die dickere 3D-Unterkante mit.
            borderBottomWidth: pressed ? 2 : node.theme ? 2 : PRESS_DEPTH,
            marginTop: pressed ? PRESS_DEPTH : 0,
          },
        ]}
      >
        {/* Schleier fuer gesperrte Kategorie-Kacheln (2026-09-01): die
            Flaeche behaelt ihre Kategorie-Farbe, wird nur abgedunkelt/
            aufgehellt - dieselbe Technik wie bei den Lektionen-Kategorie-
            karten (`VEIL_LIGHT`/`VEIL_DARK`). Zuerst gezeichnet, damit Text
            und Schloss-Symbol DARUEBER liegen und scharf bleiben - ein
            flacher `opacity`-Wert haette beides mit ausgeblichen. */}
        {zeigeSchleier ? (
          <View
            accessibilityElementsHidden
            importantForAccessibility="no"
            style={[styles.nodeVeil, { backgroundColor: dark ? VEIL_DARK : VEIL_LIGHT }]}
          />
        ) : null}
        {node.state === 'done' && !node.theme ? (
          <Feather name="check" size={14} color={colors.line} accessibilityElementsHidden />
        ) : null}
        {isLocked ? (
          <Feather name="lock" size={13} color={colors.line} accessibilityElementsHidden />
        ) : null}
        <Text
          numberOfLines={2}
          style={[
            node.lead ? styles.nodeLabelLead : node.theme ? styles.nodeLabelTheme : styles.nodeLabel,
            { color: colors.line },
          ]}
        >
          {node.label}
        </Text>
      </Pressable>
    </Animated.View>
  );
}

function SoftButton({
  dark,
  label,
  hint,
  onPress,
}: {
  dark: boolean;
  label: string;
  hint: string;
  onPress: () => void;
}) {
  const theme = getTheme(dark);

  return (
    <Pressable
      onPress={onPress}
      accessibilityRole="button"
      accessibilityLabel={label}
      accessibilityHint={hint}
      style={({ pressed }) => [
        styles.softButton,
        // Tiefe 6 statt 4 (Simons Vorgabe): das Banner ist die groesste
        // Flaeche auf dem Screen und die eine Handlung, die von hier aus
        // wirklich weiterfuehrt - es darf schwerer wirken als die kleinen
        // Kopfzeilen-Knoepfe.
        kachel(dark, 6),
        { backgroundColor: pressed ? theme.subtleFill : theme.cardBg },
      ]}
    >
      <Text numberOfLines={2} style={[styles.softLabel, { color: theme.text }]}>
        {label}
      </Text>
    </Pressable>
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
    // Luft nach oben (2026-09-01, Simons Wunsch). ACHTUNG beim Nachjustieren:
    // `Screen` setzt darueber schon `insets.top`, und der ist im Browser 0,
    // auf einem iPhone mit Notch aber rund 47-59. Was hier steht, kommt also
    // OBEN DRAUF - im Web wirkt es viel staerker als auf dem Geraet.
    marginTop: SPACING.md,
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
    // 2026-09-01: von SPACING.md auf lg - die drei Kopfzeilen-Elemente
    // standen mit 12 Punkten zu dicht beieinander.
    marginTop: SPACING.lg,
  },
  // `progressValue` ist am 2026-09-01 weggefallen: die Prozentzahl liegt
  // jetzt als `ProgressProzent` beim Balken selbst, damit Schrift und Farbe
  // nicht an zwei Stellen gepflegt werden.
  pathBox: {
    flex: 1,
    marginTop: SPACING.lg,
  },
  pathBoxFrameless: {
    borderColor: 'transparent',
  },
  // --- gehoert zum TEST-HINTERGRUND, siehe oben ---
  transparentPage: {
    backgroundColor: 'transparent',
  },
  pathBoxTestTransparent: {
    backgroundColor: 'transparent',
  },
  root: {
    flex: 1,
  },
  bebildert: { position: 'absolute', left: 0 },
  sectionBar: {
    flexDirection: 'row',
    alignItems: 'stretch',
    gap: SPACING.sm,
    padding: SPACING.md,
  },
  sectionField: {
    flex: 1,
    justifyContent: 'center',
    // Rahmen und Tiefe kommen aus `kachel()`.
    borderRadius: RADIUS.md,
    paddingHorizontal: SPACING.md,
    paddingVertical: SPACING.sm,
  },
  sectionLabel: {
    fontSize: FONT_SIZE.caption - 1,
    ...schrift('700'),
    textTransform: 'uppercase',
    letterSpacing: 0.6,
  },
  sectionName: {
    // ExtraBold statt Serife (2026-09-01): die grosse Zeile im
    // "Du bist hier"-Kasten ist ein Status, keine Ueberschrift zum Lesen.
    ...schrift('800'),
    fontSize: FONT_SIZE.bodyLg,
    lineHeight: LINE_HEIGHT.bodyLg,
  },
  toggleButton: {
    width: 56,
    height: 56,
    borderRadius: RADIUS.md,
    alignItems: 'center',
    justifyContent: 'center',
  },
  pathBoxContent: {
    paddingVertical: SPACING.lg,
    paddingHorizontal: SPACING.sm,
  },
  pathScrollWrap: { flex: 1, position: 'relative' },
  pathFade: { position: 'absolute', left: 0, right: 0 },
  pathFadeTop: { top: 0 },
  pathFadeBottom: { bottom: 0 },
  pathEmpty: {
    alignItems: 'center',
    justifyContent: 'center',
    gap: SPACING.md,
    paddingHorizontal: SPACING.xl,
    paddingVertical: SPACING.xxxl,
  },
  pathEmptyText: {
    fontSize: FONT_SIZE.body,
    lineHeight: LINE_HEIGHT.body,
    textAlign: 'center',
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
  nodeSlot: {
    position: 'absolute',
  },
  node: {
    width: '100%',
    height: '100%',
    borderRadius: RADIUS.pill,
    borderWidth: 2,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    gap: SPACING.xs,
    paddingHorizontal: SPACING.md,
  },
  // Schleier fuer gesperrte Kategorie-Kacheln (2026-09-01). Eigener
  // `borderRadius` statt `overflow: 'hidden'` auf `.node`: so bleibt die
  // Druckkante (die beim Antippen ihre Breite aendert) unbeschnitten, waehrend
  // der Schleier trotzdem der Pillenform folgt.
  nodeVeil: {
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    borderRadius: RADIUS.pill,
  },
  nodeTheme: {
    // Kleiner und leiser als eine Kategorie - ein Thema ist ein Teil von ihr,
    // keine gleichrangige Station.
    borderWidth: 1.5,
  },
  nodeLabelTheme: {
    ...schrift('700'),
    fontSize: FONT_SIZE.small,
    textAlign: 'center',
    flexShrink: 1,
  },
  nodeLabel: {
    ...schrift('800'),
    fontSize: FONT_SIZE.caption,
    textAlign: 'center',
    flexShrink: 1,
  },
  nodeLabelLead: {
    // ExtraBold statt Serife (2026-09-01): die Beschriftung der grossen
    // Pfad-Pille (Sprache/Kategorie) ist ein Status wie `sectionName` oben.
    ...schrift('800'),
    fontSize: FONT_SIZE.bodyLg,
    textAlign: 'center',
  },
  actions: {
    // `marginTop: 'auto'` ist am 2026-09-01 weggefallen. Es schob den Knopf
    // an die Unterkante und liess den ganzen Rest als Luecke zwischen Pfad
    // und Knopf stehen - dieselbe Luecke, die Simon als "riesig" beschrieb.
    // Jetzt folgt der Knopf direkt auf den Pfad, und weil die Box ueber
    // `flex: 1` waechst, bleibt kein Rest mehr uebrig, den man verschieben
    // muesste.
    marginTop: SPACING.lg,
    marginBottom: SPACING.md,
  },
  softButton: {
    // Schmiegt sich an den Text statt die volle Zeilenbreite zu nehmen
    // (Nutzer-Wunsch 2026-08-20). Zentriert, damit er nicht am linken Rand
    // klebt.
    alignSelf: 'center',
    maxWidth: '100%',
    borderRadius: RADIUS.pill,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: SPACING.lg,
    paddingHorizontal: SPACING.xl,
    minHeight: 76,
    // Rahmen und Tiefe kommen aus `kachel()`. Der weiche graue Schatten
    // (Y4/Blur18/12%) ist am 2026-09-01 ersatzlos weg: auf dem Off-White
    // war er kaum zu sehen, und auf Android machte `elevation: 5` daraus
    // einen grauen Saum.
  },
  softLabel: {
    fontSize: FONT_SIZE.bodyLg,
    lineHeight: LINE_HEIGHT.bodyLg,
    ...schrift('700'),
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
    ...schrift('700'),
    textAlign: 'center',
  },
});
