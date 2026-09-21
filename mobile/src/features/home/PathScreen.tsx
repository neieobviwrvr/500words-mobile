import { memo, useCallback, useEffect, useLayoutEffect, useMemo, useRef, useState } from 'react';
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
import { router, useFocusEffect, useNavigation } from 'expo-router';
import type { BottomTabNavigationProp } from 'expo-router/tabs';
import { Feather } from '@expo/vector-icons';
import { LEARNING_MODE_LABEL, useAppState } from '../../state/AppState';
import { CATEGORIES, GRUNDWORTSCHATZ_ID } from '../../data/categories';
import { getLanguage } from '../../data/languages';
import { Screen } from '../../components';
import { useTabLeistenFreiraum } from '../../components/tabLeiste';
import { useUnlockedProgress } from './useUnlockedProgress';
import { useCategorySituations } from '../lessons/useCategorySituations';
import { useGuidedCourse } from './useGuidedCourse';
import { useGuidedProgress } from './useGuidedProgress';
import { PathBackdrop } from './PathBackdrop';
import { standortAus } from './Standort';
import { fortschrittsAnteil, LernKopf } from './LernKopf';
import {
  BildKarte,
  BlattKarte,
  KARTE_HOEHE,
  KARTE_SEITE,
  KartenKnopf,
  Knopfreihe,
  LektionsPille,
  SCHATTEN,
  SCHATTEN_TIEFE,
  useUmdrehen,
  WechselKnopf,
} from './Drehkarten';
import { ladeBesuch, ZuletztBesucht } from './zuletztBesucht';
import { scenarioLabel } from '../../data/scenarios';
import { leihName } from '../../data/geliehen';
import {
  getTheme,
  ACCENT_GREEN,
  ACCENT_GREEN_BG,
  PATH_LINE_NEUTRAL,
  PATH_LINE_NEUTRAL_DARK,
  KACHEL_RAND_LIGHT,
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
/**
 * Die Illustrationen der oberen Karte (2026-09-12). Simons Vorlagen aus
 * "Marketing und UI-Ideen/Background S1" - gemalt fuer genau diesen Screen.
 *
 * EINE ZUORDNUNG, kein Vergleich: jede Sprache bekommt ihr eigenes Bild,
 * sobald es eines gibt. Wer eine Zeichnung ergaenzt, legt sie als
 * `sprachkarte-<id>.png` in `assets/` und traegt hier eine Zeile ein.
 *
 * Sprachen OHNE Zeichnung bekommen eine ruhige helle Flaeche - ein fremdes
 * Land waere schlechter als kein Bild. Heute betrifft das neun der elf.
 *
 * Die gemalten Pillen auf den Bildern (Serie, Abzeichen) sind Teil der
 * Zeichnung und noch keine echten Anzeigen.
 */
const SPRACH_BILDER: Record<string, ReturnType<typeof require>> = {
  zh: require('../../../assets/sprachkarte-zh.png'),
  it: require('../../../assets/sprachkarte-it.png'),
  de: require('../../../assets/sprachkarte-de.jpg'),
  // Die "ohne Schnee"-Fassungen (2026-09-13, Simons Auswahl): dieselben
  // Szenen ohne fallende Flocken.
  sv: require('../../../assets/sprachkarte-sv.png'),
  no: require('../../../assets/sprachkarte-no.png'),
  ru: require('../../../assets/sprachkarte-ru.png'),
  es: require('../../../assets/sprachkarte-es.png'),
};

// ZUR AUFLOESUNG, weil die Dateien sehr unterschiedlich sind: die Karte ist
// 359 Punkte breit, auf einem dreifach aufloesenden iPhone also rund 1080
// Bildpunkte. Wer darunter liegt, wird dort weich gezeichnet - im Browser
// faellt das nicht auf, weil dort ein Punkt einem Pixel entspricht.
//
//   de 1448, it 1759, zh 1327   reichen
//   ru 793, sv 448, no 433, es 430   sind kleiner als noetig
//
// Die kleinen sind Simons ausdrueckliche Wahl (Motiv vor Schaerfe: die
// grossen Fassungen zeigen fallenden Schnee und einen anderen Ausschnitt).
// Kommt eine groessere Fassung, ersetzt sie einfach die Datei - am Code
// aendert sich nichts.

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
// Aufbau haben). Der Name der Kategorie steht wieder als Text auf der
// Kachel, wie vor dem Bild-Umbau. (Die Kategorie-Farbe, die zuerst an die
// Stelle der Bilder trat, ist seit dem 2026-09-14 ebenfalls raus - siehe
// `nodeColors`.)
//
// Auffaechern: die Themen materialisieren von OBEN (Nutzer-Wunsch
// 2026-08-20) - sie sinken aus ihrer Kategorie herab, statt seitlich
// einzufliegen. Das passt zur Leserichtung des Pfades und laesst sie wie
// einen Teil der Kategorie wirken statt wie etwas Hereingeschobenes.
const EXPAND_DURATION = 420;
const EXPAND_DROP = 14;

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
  /**
   * Gedrueckt halten (2026-09-21, Simons Fehlerbericht).
   *
   * Eine GESPERRTE Kategorie hatte gar keinen Weg in den Shop: ihr Tipp
   * faechert die Situationen auf, und das soll er auch weiter ("soll so
   * bleiben!"). Damit war der Shop von dort aus unerreichbar - man sah, was
   * es zu holen gibt, und konnte es nicht holen.
   *
   * Langes Druecken oeffnet ihn jetzt, ohne dem Tipp etwas wegzunehmen.
   * Gesperrte Situationen bekommen es ebenfalls, obwohl ihr Tipp schon in
   * den Shop fuehrt - wer die Geste einmal kennt, soll sie nicht auf halbem
   * Weg wieder verlieren.
   */
  onLongPress?: () => void;
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
// UNFARBIG seit dem 2026-09-14 (Simon: "Mach die Buttons in den beiden
// Pfaden wieder unfarbig"). Bis dahin trug die Sprach-Pille Blau und jede
// Kategorie ihre eigene Farbe (`KATEGORIE_FARBEN`, "Boom"-Vorgabe vom
// 2026-09-01), gesperrte mit einem Schleier darueber. Jetzt gilt fuer beide
// Pfade das Material der Knoepfe zwischen den Karten: weisse Flaeche, grauer
// Rand, Text in Textfarbe.
//
// Was die Zustaende ohne Farbe traegt:
// - erledigt: GRUEN mit Haken, die eine Farbe, die bleibt. Gruen steht nach
//   dem Stil-Rezept fuer Erfolg - ohne sie saehe man dem Pfad den
//   Fortschritt nicht mehr an.
// - hier bist du: dicker Rand in Textfarbe
// - gesperrt: graue Flaeche, grauer Text, Schloss
// - Situationen: graue Flaeche und kleiner, wie seit 2026-08-20
// Jeder Zustand steht zusaetzlich im `accessibilityLabel`.
//
// Die Grautoene kommen aus `getTheme`, damit sie im Darkmode mitgehen - die
// frueheren Themen-Konstanten waren in beiden Modi hell.
function nodeColors(node: { state: NodeState; theme?: boolean }, dark: boolean) {
  if (node.state === 'done') return { line: ACCENT_GREEN, fill: ACCENT_GREEN_BG, text: ACCENT_GREEN };
  const theme = getTheme(dark);
  // Vor Situation und Sperre: auch eine Lektion im Kurs kann "hier bist du"
  // sein, und die muss aus der grauen Reihe herausstechen.
  if (node.state === 'current') return { line: theme.text, fill: theme.cardBg, text: theme.text };
  if (node.state === 'locked' || node.theme) {
    return { line: theme.dividerColor, fill: theme.subtleFill, text: theme.sub };
  }
  return { line: theme.dividerColor, fill: theme.cardBg, text: theme.text };
}

/**
 * Der Lernpfad beider Kartenseiten - Knoten, Auffaechern, Fortschritt,
 * Merker und Auto-Scroll (2026-09-13 aus PathScreen herausgeloest).
 *
 * Anlass: Simon wollte denselben Pfad auch in der unteren Karte des
 * Freunde-Testscreens sehen ("Leg mir bitte auch mal den Pfad bei Freunde
 * in die untere Karte"). Kopiert waeren das rund 400 Zeilen gewesen, die
 * beim ersten Umbau auseinanderlaufen. S1 benutzt den Hook genauso wie
 * vorher den Code an Ort und Stelle - am Verhalten aendert sich nichts.
 *
 * Jeder Aufrufer hat eigenen Zustand (aufgefaecherte Pillen, Scroll-Stand)
 * und laedt seine Daten selbst. Sind beide Screens geladen, laeuft das
 * Laden also zweimal - fuer einen Testscreen hingenommen.
 */
export function useLernpfad() {
  const { darkMode, purchased, targetLanguageId, learningMode } = useAppState();
  const activeLanguage = getLanguage(targetLanguageId);
  const scrollRef = useRef<ScrollView>(null);
  const scrollHinten = useRef<ScrollView>(null);

  // Fuer den bebilderten Pfad (2026-08-31): das Bild soll die GANZE Seite
  // fuellen, nicht nur die Pfad-Box - und trotzdem mit den Knoten wandern,
  // weil die auf dem gezeichneten Weg sitzen.
  //
  // In der Scroll-Flaeche ginge das erste nicht (sie schneidet an ihrem Rand
  // ab), hinter dem Screen das zweite nicht (dort steht es still). Deshalb
  // liegt es hinter dem Screen und bekommt den Scroll-Stand als Versatz -
  // es bewegt sich also mit, ohne beschnitten zu werden.
  const [besuch, setBesuch] = useState<ZuletztBesucht | null>(null);
  const didAutoScroll = useRef(false);

  // Auffaechern: ein Tipp auf eine Pille zeigt ihre Themen. `expandedIds`
  // haelt, welche gerade offen sind.
  const situations = useCategorySituations(targetLanguageId);
  const course = useGuidedCourse(targetLanguageId);
  // Fortschritt im gefuehrten Pfad: erledigte Lektionen, die aktuelle,
  // und wohin gescrollt wird. Speist sich aus den FSRS-Karten, die die
  // Lektion ohnehin schreibt - siehe useGuidedProgress.ts.
  const guidedProgress = useGuidedProgress(activeLanguage.id);

  // ZWEI Listen, seit beide Lernwege gleichzeitig gebaut werden (2026-09-12):
  // vorne der Speed-Run, hinten der gefuehrte Kurs. Mit einer gemeinsamen
  // Liste wuerde der Effekt weiter unten, der im Kurs alle Lektionen
  // aufklappt, dem Speed-Run seine Kategorien zuklappen.
  const [expandedIds, setExpandedIds] = useState<string[]>([]);
  const [offenGefuehrt, setOffenGefuehrt] = useState<string[]>([]);
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

  /** Dasselbe fuer die Rueckseite - der gefuehrte Kurs hat eigene Pillen. */
  const toggleModul = useCallback(
    (modulId: string) => () =>
      setOffenGefuehrt((cur) =>
        cur.includes(modulId) ? cur.filter((id) => id !== modulId) : [...cur, modulId]
      ),
    []
  );

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
    setOffenGefuehrt(course.lessons.map((l) => l.id));
  }, [course.lessons]);

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

  const unlockedIds = useMemo(
    () => [GRUNDWORTSCHATZ_ID, ...CATEGORIES.filter((c) => purchased[c.id]).map((c) => c.id)],
    [purchased]
  );
  const progress = useUnlockedProgress(targetLanguageId, unlockedIds);
  // Welcher Anteil oben im Balken steht.
  const anteil = fortschrittsAnteil(learningMode, guidedProgress, progress.ratio);

  // Wo man gerade steht - die Zeile ueber dem Balken (2026-09-12, Simon:
  // erst auf Freunde gebaut, dann "setz die Standort-Zeile auch auf S1").
  //
  // `standortAus` statt des Hooks `useStandort`: der laedt die drei Quellen
  // selbst, und dieser Screen hat sie schon (`situations`, `course`,
  // `guidedProgress`). Ueber den Hook liefe `useCategorySituations` hier ein
  // zweites Mal - saemtliche Saetze und alle Lernkarten, fuer zwei Zeilen
  // Text.
  const standort = useMemo(
    () =>
      standortAus({
        learningMode,
        lektionen: course.lessons,
        aktuellesModul: guidedProgress.aktuellesModul,
        aktuelleLektion: guidedProgress.aktuelleLektion,
        recentCategoryIds: situations.recentCategoryIds,
        recentSituations: situations.recentSituations,
      }),
    [
      learningMode,
      course.lessons,
      guidedProgress.aktuellesModul,
      guidedProgress.aktuelleLektion,
      situations.recentCategoryIds,
      situations.recentSituations,
    ]
  );

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
  // Beide Lernwege auf einmal: der Speed-Run liegt auf der Vorderseite der
  // unteren Karte, der gefuehrte Kurs auf ihrer Rueckseite (2026-09-12,
  // Simons Vorgabe). Vorher baute dieser Block nur den GERADE aktiven Weg -
  // beim Umdrehen haette die halbe Drehung eine leere Karte gezeigt.
  const pfade = useMemo(() => {
    // Geführtes Lernen: Lektionen statt Kategorien, Themen statt Situationen.
    // Solange der Kurs leer ist, bleibt auch die Liste leer - der Pfad zeigt
    // dann den Grund aus dem Hook (siehe useGuidedCourse.ts).
    const gefuehrt = (() => {
      // Zustaende aus dem echten Fortschritt statt fest 'open' - erledigte
      // Lektionen bekommen den Haken, die naechste offene wird
      // hervorgehoben. Das ist die Duolingo-Mechanik, die dem Kurs bis
      // 2026-09-04 fehlte.
      const list: RawNode[] = course.lessons.flatMap((lesson) => [
        {
          id: lesson.id,
          label: lesson.label,
          state: (guidedProgress.module[lesson.id] ?? 'open') as NodeState,
          onPress: toggleModul(lesson.id),
        },
        ...(offenGefuehrt.includes(lesson.id)
          ? lesson.themes.map((t) => ({
              id: `${lesson.id}:${t.id}`,
              label: t.label,
              state: (guidedProgress.lektionen[t.id] ?? 'open') as NodeState,
              theme: true,
              onPress: () => router.push(`/lesson/${t.id}`),
            }))
          : []),
      ]);

      // Auto-Scroll und "Du bist hier" zeigen auf die aktuelle Lektion,
      // sonst auf ihr Modul (zugeklappt gibt es die Lektionszeile nicht).
      const zielId = guidedProgress.aktuelleLektion
        ? `${guidedProgress.aktuellesModul}:${guidedProgress.aktuelleLektion}`
        : null;
      let index = list.findIndex((n) => n.id === zielId);
      if (index < 0) index = list.findIndex((n) => n.id === guidedProgress.aktuellesModul);
      if (index < 0) index = 0;

      // Nur noch Liste und Stelle: Name, Situation und Niveau brauchte der
      // "Du bist hier"-Kasten, und den gibt es seit dem 2026-09-12 nicht
      // mehr (Simons Umbau). Die Stufe A2 stand dort im Kopf - sie hat auf
      // dem neuen Aufbau noch keinen Platz, siehe Notiz in CLAUDE.md.
      return { nodes: list, currentIndex: index };
    })();

    const speed = (() => {
    // Sprachen ohne Phrasebook-Tabelle (Chinesisch traegt bisher nur den
    // gefuehrten Kurs) haben im Speed-Run nichts zu zeigen. Ohne diese
    // Weiche stuenden die Kategorien trotzdem da - mit nichts dahinter.
    if (!activeLanguage.table) {
      return { nodes: [] as RawNode[], currentIndex: 0 };
    }

    // ALLE Kategorien und ALLE ihre Situationen, mit Konto wie ohne
    // (2026-08-23 / 2026-09-20, siehe data/demo.ts) - gesperrte Kategorien
    // sollen werben, nicht verschwinden und auch nicht halbiert werden. Sie
    // sind fuer einen Gast ohnehin nicht spielbar; wegzulassen schuetzt
    // nichts und kostet nur Schaufenster.
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
      return (situations.byCategory[categoryId] ?? []).map((sit) => ({
        id: `${categoryId}:${sit.scenario}`,
        label: leihName(categoryId, sit.scenario) ?? scenarioLabel(sit.scenario),
        state: (locked
          ? 'locked'
          : sit.total > 0 && sit.seen >= sit.total
            ? 'done'
            : 'open') as NodeState,
        theme: true,
        onPress: locked ? goShop : goSituation(categoryId, sit.scenario),
        onLongPress: locked ? goShop : undefined,
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
          // Tipp faechert auf (Simons Vorgabe), gedrueckt halten kauft.
          onPress: toggleCategory(cat.id),
          onLongPress: goShop,
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

    // Wie beim gefuehrten Weg: nur Liste und Stelle. Der Rest gehoerte zum
    // "Du bist hier"-Kasten.
    return { nodes: list, currentIndex: idx >= 0 ? idx : 0 };
    })();

    return { gefuehrt, speed };
  }, [course.lessons, guidedProgress.module, guidedProgress.lektionen,
      guidedProgress.aktuelleLektion, guidedProgress.aktuellesModul, purchased, activeLanguage.label, activeLanguage.table, progress.byCategory, situations.recentCategoryIds, situations.recentSituations, besuch, targetLanguageId, expandedIds, offenGefuehrt, themesMounted, situations.byCategory, toggleCategory, toggleModul]);

  // ---------------------------------------------------------------------
  // Zickzack-Layout: Pillen abwechselnd links/rechts, verbunden durch
  // rotierte Linien zwischen den Mittelpunkten.
  // ---------------------------------------------------------------------
  // Einmal geschrieben, zweimal gerechnet: fuer jede Kartenseite eine
  // Knotenliste. Frueher war das ein `useMemo` fuer den einen aktiven Weg.
  const legeAus = useCallback((raw: RawNode[]) => {
    // Laufende Hoehe statt `index * ROW_H`: Themen-Zeilen sind niedriger als
    // Kategorie-Zeilen, sonst klaffte beim Auffaechern ueberall eine Luecke.
    let y = 0;
    const laid: LaidOutNode[] = raw.map((n, i) => {
      const w = n.theme ? THEME_W : n.lead ? LANG_PILL_W : PILL_W;
      const h = n.theme ? THEME_H : n.lead ? LANG_PILL_H : PILL_H;
      // Zickzack: die Sprach-Pille mittig, alles andere abwechselnd links
      // und rechts. (Bis zum 2026-09-12 folgten die Knoten bei Chinesisch
      // einem gezeichneten Weg - der ist mit dem Bildhintergrund weg.)
      const left = n.lead
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
    // `darkMode` seit 2026-09-01 dabei - die Verbindungslinien-Farbe haengt
    // davon ab.
  }, [darkMode]);

  const pfadVorne = useMemo(() => legeAus(pfade.speed.nodes), [legeAus, pfade.speed.nodes]);
  const pfadHinten = useMemo(() => legeAus(pfade.gefuehrt.nodes), [legeAus, pfade.gefuehrt.nodes]);

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

  // Beide Seiten springen an ihre Stelle, nicht nur die sichtbare: die
  // abgewandte wird im selben Moment mitgebaut, und wer umdreht, soll dort
  // nicht am Anfang des Pfades landen.
  useEffect(() => {
    if (didAutoScroll.current || progress.loading) return;
    if (pfadVorne.pathNodes.length === 0 && pfadHinten.pathNodes.length === 0) return;
    didAutoScroll.current = true;
    const ziel = (knoten: LaidOutNode[], index: number) =>
      Math.max(0, (knoten[index]?.top ?? 0) - ROW_H);
    // Ohne die Verzoegerung misst die ScrollView ihren Inhalt noch nicht.
    const timer = setTimeout(() => {
      scrollRef.current?.scrollTo({ y: ziel(pfadVorne.pathNodes, pfade.speed.currentIndex), animated: true });
      scrollHinten.current?.scrollTo({ y: ziel(pfadHinten.pathNodes, pfade.gefuehrt.currentIndex), animated: true });
    }, 0);
    return () => clearTimeout(timer);
  }, [progress.loading, pfadVorne, pfadHinten, pfade.speed.currentIndex, pfade.gefuehrt.currentIndex]);

  return {
    scrollRef,
    scrollHinten,
    expand,
    pfadVorne,
    pfadHinten,
    anteil,
    standort,
    speedLeerText: `Für ${activeLanguage.label} gibt es bisher keine Sätze — dreh die Karte um, dort liegt der geführte Kurs.`,
    kursLeerText: course.unavailable ?? 'Hier ist noch nichts.',
  };
}

export function PathScreen() {
  // `purchased` liest seit 2026-09-13 `useLernpfad`, nicht mehr der Screen.
  const { darkMode, targetLanguageId, coins, learningMode, toggleLearningMode } =
    useAppState();
  const theme = getTheme(darkMode);

  const { width: windowWidth, height: windowHeight } = useWindowDimensions();

  // Masse der beiden Karten (2026-09-12, Simons Umbau: der Startscreen soll
  // aussehen wie der Testscreen auf /freunde). Die obere Karte nimmt 35 %
  // der Hoehe, die untere nimmt sich den Rest und laeuft unten aus dem
  // Bildschirm - beide mit demselben Seitenabstand.
  const kartenBreite = windowWidth - 2 * KARTE_SEITE;
  const kartenHoehe = Math.round(windowHeight * KARTE_HOEHE);

  // Der bebilderte Pfad ist am 2026-09-12 ersatzlos weggefallen (Simon:
  // "Vergiss den Bildpfad aus Chinesisch, wir brauchen keine Bilder als
  // Hintergrund"). Die Knoten stehen seitdem in ALLEN Sprachen im Zickzack,
  // und `ChinaPfadHintergrund.tsx` wird nirgends mehr eingebunden.

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

  // Pfad, Fortschritt und Standort - seit 2026-09-13 ein eigener Hook, weil
  // der Freunde-Testscreen denselben Pfad zeigt (siehe `useLernpfad`).
  const { scrollRef, scrollHinten, expand, pfadVorne, pfadHinten, anteil, standort, speedLeerText, kursLeerText } =
    useLernpfad();


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

  const [notice, setNotice] = useState<string | null>(null);
  const hideNotice = useCallback(() => setNotice(null), []);


  // Die Illustration der oberen Karte - zur Sprache passend, sonst keine.
  const heldBild = SPRACH_BILDER[targetLanguageId];

  const goCategory = (id: string) => () => router.push({ pathname: '/category/[id]', params: { id } });


  // -------------------------------------------------------------------
  // Die beiden Karten (2026-09-12, Simons Umbau: "was wir jetzt auf Freunde
  // haben auch so auf S1")
  // -------------------------------------------------------------------
  //
  // Das Umdrehen IST der Wechsel des Lernwegs: vorne der Speed-Run, hinten
  // der gefuehrte Kurs. Damit ersetzt die Drehung den Knopf im Kopf der
  // alten Pfad-Box - und der "Du bist hier"-Kasten faellt weg, weil die
  // sichtbare Seite selbst sagt, wo man ist.
  const kursSeite: 1 | 2 = learningMode === 'gefuehrt' ? 2 : 1;

  // Der Lernweg wechselt, wenn die Drehung STEHT - nicht, wenn sie beginnt
  // (2026-09-12, Simons Beobachtung: "du hast unterschiedliche
  // Geschwindigkeiten drin beim Flippen"). Die Dauer war nie verschieden,
  // beide Screens lesen dieselbe Drehung; verschieden war, was waehrenddessen
  // passiert. Der Moduswechsel aendert den App-Zustand, und der laesst auf S1
  // den halben Screen neu rechnen - im Browser mitten in der Bewegung
  // sichtbar, weil die Drehung dort mangels nativem Treiber in JS laeuft.
  //
  // Der Inhalt der Karten haengt NICHT am Lernweg (beide Wege sind ohnehin
  // gebaut, je einer je Seite) - nur Balken, Standort-Zeile und das Ziel von
  // "Tageslektion". Die duerfen mit der Karte landen.
  //
  // VERGLICHEN statt umgeschaltet: bei zweimal schnell hintereinander bricht
  // die erste Drehung ab (ihr Rueckruf laeuft dann gar nicht), und ein blindes
  // Umschalten haette Karte und Lernweg auseinanderlaufen lassen.
  const lernwegRef = useRef(learningMode);
  lernwegRef.current = learningMode;
  const seiteGelandet = useCallback(
    (seite: 1 | 2) => {
      const soll = seite === 2 ? 'gefuehrt' : 'speedrun';
      if (lernwegRef.current !== soll) toggleLearningMode();
    },
    [toggleLearningMode]
  );

  const oben = useUmdrehen({ start: kursSeite });
  const unten = useUmdrehen({ start: kursSeite, beiEnde: seiteGelandet });

  // Eine Handlung, zwei Karten - an EINER Stelle, damit sie nie
  // auseinanderlaufen. Auch ein Tipp auf die Bildkarte geht hier durch, nicht
  // an ihrer eigenen Drehung vorbei.
  const beideUmdrehen = useCallback(() => {
    oben.umdrehen();
    unten.umdrehen();
  }, [oben, unten]);

  // Der Lernweg kann sich auch OHNE diesen Knopf aendern: er liegt
  // persistiert im AppState und kommt beim Start erst nach dem Laden an (und
  // beim Geraeteabgleich ein zweites Mal). Ohne diesen Abgleich stuende die
  // Karte dann auf der Vorderseite, waehrend die App im Kurs ist. Ohne
  // Bewegung - es ist kein Umdrehen, sondern ein Nachziehen.
  //
  // Der Merker ist hier PFLICHT, nicht Feinschliff: seit der Moduswechsel
  // erst am Ende der Drehung kommt, steht die Karte waehrend der Bewegung
  // absichtlich anders als der Lernweg. Ohne die Abfrage "hat sich von aussen
  // ueberhaupt etwas geaendert?" saehe dieser Effekt genau das - und risse
  // die Karte mitten in der Drehung zurueck.
  const letzteKursSeite = useRef(kursSeite);
  useEffect(() => {
    if (letzteKursSeite.current === kursSeite) return;
    letzteKursSeite.current = kursSeite;
    // Kam der Wechsel von der Karte selbst, steht sie schon richtig.
    if (oben.seite === kursSeite) return;
    oben.setzeSeite(kursSeite);
    unten.setzeSeite(kursSeite);
  }, [kursSeite, oben, unten]);

  // Rahmen der unteren Karte: laeuft unten aus dem Bildschirm, also Rand und
  // Rundung nur OBEN, und der Schatten nach oben (siehe `SCHATTEN` im
  // Bauteil - die Begruendung steht dort).
  const blattKarte = {
    borderTopWidth: 1.5,
    borderLeftWidth: 1.5,
    borderRightWidth: 1.5,
    borderBottomWidth: 0,
    borderColor: darkMode ? theme.border : KACHEL_RAND_LIGHT,
    borderTopLeftRadius: RADIUS.lg,
    borderTopRightRadius: RADIUS.lg,
    ...(darkMode
      ? null
      : { ...SCHATTEN, shadowOffset: { width: 0, height: -SCHATTEN_TIEFE } }),
  };

  // Den unteren Innenabstand des Tab-Layouts nimmt sich dieser Screen selbst
  // ab: nur so reicht die untere Karte bis an den Bildschirmrand, und ihr
  // Stueck unter der Leiste bleibt beruehr- und scrollbar. Der Abstand geht
  // nicht verloren - er sitzt als `freiraum` in den Scroll-Flaechen.
  const freiraum = useTabLeistenFreiraum();
  const navigation = useNavigation<BottomTabNavigationProp<Record<string, object | undefined>>>();
  useLayoutEffect(() => {
    navigation.setOptions({ sceneStyle: { backgroundColor: theme.pageBg, paddingBottom: 0 } });
  }, [navigation, theme.pageBg]);


  return (
    <View style={styles.root} {...swipe.panHandlers}>
      {/* Hintergrund in drei Ebenen; die Kartenecken wackeln gelegentlich.
          Zum Entfernen: diese Zeile loeschen, `styles.transparentPage` am
          <Screen> streichen und `pathBoxTestTransparent` aus dem Card-Stil
          nehmen. */}
      <PathBackdrop width={windowWidth} height={windowHeight} />
    <Animated.View style={[styles.root, { transform: [{ translateX: drag }] }]}>
    <Screen dark={darkMode} style={styles.transparentPage}>
      {/* Kopf wie auf Freunde (2026-09-13, Simon: "auf Start und Lektionen
          die Top-Bar so machen wie bei Freunde"): keine Kopfleiste mehr -
          Sprach-Dropdown und Drei-Punkte-Menue sind weg, die Flagge am Balken
          ist die Sprachauswahl, das Geschenk sitzt auf der Sprachkarte. */}
      <LernKopf dark={darkMode} standort={standort} anteil={anteil} />

      {/* Obere Karte: die Illustration der Sprache - auf BEIDEN Seiten
          (2026-09-12, Simon: das Bild von Freunde gehoert auch auf S1s obere
          Karte). Vorher stand hinten der Name des Lernwegs; der war der
          Rest des alten "Du bist hier"-Kastens und ist mit der
          Standort-Zeile ueber dem Balken doppelt geworden. */}
      <View style={styles.bildReihe}>
        <BildKarte
          breite={kartenBreite}
          hoehe={kartenHoehe}
          dreh={oben.dreh}
          seite={oben.seite}
          umdrehen={beideUmdrehen}
          quelle={heldBild}
          rueckseitenBild={heldBild}
          name="Sprachkarte"
          // Das Geschenk auf der Karte (2026-09-13, Simons Wunsch). Dasselbe
          // Verhalten wie der Geschenk-Knopf im Drei-Punkte-Menue: ohne
          // Funktion, bis die taegliche Kiste existiert, und das sagt er beim
          // Antippen, statt still nichts zu tun.
          knopf={
            <KartenKnopf
              dark={darkMode}
              icon="gift"
              label="Geschenk"
              hinweis="Die tägliche Kiste gibt es noch nicht"
              onPress={() => setNotice('Die tägliche Kiste kommt später.')}
            />
          }
        />
      </View>

      {/* Die Knopfreihe zwischen den Karten. Der runde Knopf in der Mitte
          wechselt den Lernweg - dieselbe Handlung wie frueher der Knopf im
          Kopf der Pfad-Box, nur dreht sie jetzt sichtbar die Karte um. */}
      <Knopfreihe>
        {/* Noch ohne Handlung - was "Sprachlektion" oeffnen soll, ist offen.
            Als Attrappe gebaut (kein Tippziel, fuer die Sprachausgabe
            ausgeblendet), damit niemand auf einen Knopf tippt, der nichts
            tut. */}
        <LektionsPille dark={darkMode} label="Sprachlektion" />

        <WechselKnopf
          dark={darkMode}
          onPress={beideUmdrehen}
          // Nennt das ZIEL, nicht den Stand - sonst weiss man beim Vorlesen
          // nicht, was der Knopf bewirkt.
          label={`Lernweg wechseln zu: ${
            LEARNING_MODE_LABEL[learningMode === 'speedrun' ? 'gefuehrt' : 'speedrun']
          }`}
          hinweis="Dreht beide Karten um"
        />

        {/* Dasselbe Ziel wie frueher der Knopf unter dem Pfad: direkt in EINE
            gemischte Sitzung, ohne Zwischenscreen (Nutzer-Frage 2026-08-21).
            Das taegliche Wiederholen ist der gemeinsame Pool - wer hier erst
            waehlen muss, uebt die Haelfte nicht.
            WOHIN, haengt am LERNWEG und nicht an der Sprache: wiederholt
            wird das, was man auch lernt. Im gefuehrten Modus einer Sprache
            ohne Kurs kommt man auf einen ehrlich leeren Screen - dieselbe
            Aussage, die der Pfad daneben schon macht. */}
        <LektionsPille
          dark={darkMode}
          label="Tageslektion"
          hinweis={
            learningMode === 'gefuehrt'
              ? 'Wiederholt die Wörter und Satzmuster aus dem Kurs'
              : 'Wiederholt die fälligen Sätze aus dem Speed-Run'
          }
          onPress={() =>
            router.push(learningMode === 'gefuehrt' ? '/wiederholen' : '/training/saetze')
          }
        />
      </Knopfreihe>

      {/* Untere Karte: VORNE der Speed-Run, HINTEN der gefuehrte Kurs
          (2026-09-12, Simons Vorgabe). Sie laeuft unten aus dem Bildschirm
          und unter der Tab-Leiste durch; gescrollt wird in ihr. */}
      <View style={styles.blatt}>
        <BlattKarte
          rahmen={blattKarte}
          name="Lernpfad"
          dreh={unten.dreh}
          seite={unten.seite}
          umdrehen={beideUmdrehen}
          // Der Pfad darin besteht aus Knoepfen - siehe `tippenDreht`.
          tippenDreht={false}
          farbe={theme.subtleFill}
          linien={theme.border}
          vorne={
            <PfadFlaeche
              layout={pfadVorne}
              dark={darkMode}
              scrollRef={scrollRef}
              freiraum={freiraum}
              expand={expand}
              leerText={speedLeerText}
            />
          }
          hinten={
            <PfadFlaeche
              layout={pfadHinten}
              dark={darkMode}
              scrollRef={scrollHinten}
              freiraum={freiraum}
              leerText={kursLeerText}
            />
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
        onLongPress={node.onLongPress}
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
        // Der Hinweis nennt, was der TIPP tut - und bei gesperrten Knoten
        // zusaetzlich das lange Druecken. Bis 2026-09-21 stand hier fuer
        // jeden gesperrten Knoten "Öffnet den Shop", auch fuer die
        // Kategorie-Pille, die in Wahrheit auffaechert.
        accessibilityHint={
          node.onLongPress
            ? node.theme
              ? 'Öffnet den Shop zum Freischalten'
              : 'Zeigt die Situationen. Gedrückt halten öffnet den Shop zum Freischalten.'
            : node.theme
              ? 'Öffnet die Übung'
              : 'Zeigt die Situationen'
        }
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
            // KEINE 3D-Unterkante mehr (2026-09-03, Simons Wunsch, im Zuge
            // der Umstellung von S1 auf den flachen Karten-Look). Hier stand
            // `borderBottomWidth: PRESS_DEPTH` (6, Simons "Boom"-Vorgabe vom
            // 2026-09-01) - der Rand ist jetzt rundum gleich dick.
            //
            // Damit faellt auch die Druck-Verschiebung weg: `marginTop` auf
            // PRESS_DEPTH ergab nur Sinn, solange eine Kante zum
            // Zusammendruecken da war. Ohne sie waere es ein Sprung ohne
            // Grund. Stattdessen dieselbe Rueckmeldung wie bei den anderen
            // flachen Elementen auf S1 (Dropdown, Menue, Wechsel-Knopf):
            // kurz durchsichtiger.
            opacity: pressed ? 0.7 : 1,
          },
        ]}
      >
        {node.state === 'done' && !node.theme ? (
          <Feather name="check" size={14} color={colors.text} accessibilityElementsHidden />
        ) : null}
        {isLocked ? (
          <Feather name="lock" size={13} color={colors.text} accessibilityElementsHidden />
        ) : null}
        <Text
          numberOfLines={2}
          style={[
            node.lead ? styles.nodeLabelLead : node.theme ? styles.nodeLabelTheme : styles.nodeLabel,
            { color: colors.text },
          ]}
        >
          {node.label}
        </Text>
      </Pressable>
    </Animated.View>
  );
}

/**
 * Eine Seite der unteren Karte: der scrollende Pfad (2026-09-12).
 *
 * Seit 2026-09-13 exportiert: der Freunde-Testscreen zeigt denselben Pfad
 * in seiner unteren Karte (siehe `useLernpfad`).
 *
 * Beide Seiten sind IMMER gebaut, auch die abgewandte - sonst zeigte die
 * halbe Drehung eine leere Karte. Sie kostet nichts weiter: die Knotenliste
 * dahinter wird ohnehin fuer beide Lernwege gerechnet.
 */
export const PfadFlaeche = memo(function PfadFlaeche({
  layout,
  dark,
  scrollRef,
  freiraum,
  leerText,
  expand,
}: {
  layout: { pathNodes: LaidOutNode[]; connectors: Connector[]; canvasHeight: number };
  dark: boolean;
  scrollRef: React.RefObject<ScrollView | null>;
  /** Platz fuer die schwebende Tab-Leiste, unter der die Karte durchlaeuft. */
  freiraum: number;
  leerText: string;
  /**
   * Nur die Vorderseite bekommt die Einblend-Animation der Situationen: im
   * Kurs stehen die Lektionen von Anfang an offen, dort gibt es nichts
   * einzublenden.
   */
  expand?: Animated.Value;
}) {
  const theme = getTheme(dark);

  return (
    <ScrollView
      ref={scrollRef}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={[styles.pathBoxContent, { paddingBottom: freiraum }]}
    >
      {layout.pathNodes.length === 0 ? (
        // Ehrlich statt leere Flaeche: sagt, woran es liegt.
        <View style={styles.pathEmpty}>
          <Feather name="map" size={28} color={theme.sub} />
          <Text style={[styles.pathEmptyText, { color: theme.sub }]}>{leerText}</Text>
        </View>
      ) : null}
      <View style={[styles.pathCanvas, { height: layout.canvasHeight }]}>
        {layout.connectors.map((c, i) => (
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
        {layout.pathNodes.map((n) =>
          n.theme && expand ? (
            <PathNode key={n.id} node={n} dark={dark} progress={expand} />
          ) : (
            <PathNode key={n.id} node={n} dark={dark} />
          )
        )}
      </View>
    </ScrollView>
  );
});

// `memo`, weil der Pfad sonst bei JEDER Drehung zweimal komplett neu gebaut
// wird: das Umdrehen setzt in beiden Karten eine Seiten-Zustandsvariable, und
// die haengt am selben Screen wie die Pfade. Die Knotenlisten selbst sind
// gemerkt (`useMemo`), also sind die Props gleich - ohne `memo` liefe React
// trotzdem durch bis zu mehreren hundert Knoten, mitten in der Bewegung.

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
  // `progressValue` ist am 2026-09-01 weggefallen: die Prozentzahl liegt
  // jetzt als `ProgressProzent` beim Balken selbst, damit Schrift und Farbe
  // nicht an zwei Stellen gepflegt werden.
  // --- gehoert zum TEST-HINTERGRUND, siehe oben ---
  transparentPage: {
    backgroundColor: 'transparent',
  },
  root: {
    flex: 1,
  },
  bildReihe: {
    // Die Karte ist so breit wie der Bildschirm minus KARTE_SEITE; `Screen`
    // polstert seitlich um SPACING.lg, die Differenz holt sie wieder heraus.
    marginTop: SPACING.xl,
    marginHorizontal: KARTE_SEITE - SPACING.lg,
  },
  blatt: {
    flex: 1,
    marginHorizontal: KARTE_SEITE - SPACING.lg,
    // Vorn: nur so legt sich ihr Schatten auf die obere Karte, und genau das
    // macht "erhoben" sichtbar.
    zIndex: 1,
  },
  pathBoxContent: {
    // Oben und unten getrennt seit 2026-09-03 (Simon: der Abstand zwischen
    // dem "Du bist hier"-Kasten und dem Pfad soll um die Haelfte wachsen).
    // Nur OBEN angehoben - `paddingVertical` haette auch das untere Ende
    // des Scroll-Inhalts mitgenommen, und das ist eine andere Luecke: die
    // liegt INNERHALB der Box und wird gescrollt, waehrend der Abstand zum
    // Wiederholen-Knopf ausserhalb liegt (siehe `actions.marginTop`).
    //
    // Sichtbar ist die Summe aus dieser Zahl und `sectionBar.padding` (12),
    // weil der Kasten in derselben Box sitzt: 12 + 24 = 36.
    //
    // Der Weg dorthin in zwei Schritten am selben Tag: erst 28 -> 44
    // (xxl), dann auf Simons Wunsch die Haelfte davon zurueck -> 36 (xl).
    // 44 war einen Tick zu viel.
    paddingTop: SPACING.xl,
    paddingBottom: SPACING.lg,
    paddingHorizontal: SPACING.sm,
  },
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
