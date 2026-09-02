import { useEffect, useMemo, useRef, useState } from 'react';
import { ActivityIndicator, Animated, Easing, Platform, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { router } from 'expo-router';
import { Feather } from '@expo/vector-icons';
import { useAppState } from '../../state/AppState';
import { CATEGORIES, CATEGORY_BY_ID, GRUNDWORTSCHATZ_ID } from '../../data/categories';
import { sichtbareSituationen } from '../../data/demo';
import { useAuthState } from '../../state/AuthState';
import { scenarioLabel } from '../../data/scenarios';
import { leihName } from '../../data/geliehen';
import { TRAINING_MODES } from '../../data/trainingModes';
import { HeaderMenu, Screen } from '../../components';
import { Situation, useCategorySituations } from './useCategorySituations';
import {
  getTheme,
  schrift,
  ACCENT_GREEN,
  ACCENT_ORANGE,
  ACCENT_ORANGE_EDGE_SOFT,
  NODE_LOCKED,
  WORLD_TINTS,
  RADIUS,
  SPACING,
  FONT_SIZE,
  LINE_HEIGHT,
} from '../../theme/tokens';

// Lektionen-Screen (Tab 2).
//
// Aufbau nach Simons Vorlage (Drops-Screenshot): **eine Kategorie pro
// Abschnitt**, darunter eine waagerecht scrollende Reihe mit ihren
// SITUATIONEN. Gesperrte Karten behalten ihre Farbe und bekommen einen
// Schleier plus Schloss; freigeschaltete zeigen ihren Fortschritt.
//
// Struktur aus der Vorlage, Farben aus unserem Rezept - Nutzer-Entscheidung
// 2026-08-18, damit der Screen zu S1, Onboarding und Tab-Leiste passt.
//
/**
 * Kartenstil des GRUNDWORTSCHATZES (2026-08-31, Simons Vorlage).
 *
 * War bis eben ein Entwurf an einer einzigen Karte ("Begrüßen und
 * Verabschieden") - jetzt gilt er fuer die ganze Kategorie. Andere
 * Kategorien behalten vorerst ihr bisheriges Aussehen; wenn der Stil
 * bleiben soll, wandert er in WORLD_TINTS und gilt ueberall.
 *
 * Der Rand war urspruenglich NUR eine Nuance dunkler als die Flaeche -
 * Simons Vorgabe war damals ausdruecklich "kein hartes Blau". Das
 * Verhaeltnis stammt aus seinem Beispiel (#D8F0FE -> #B4E2FC) und war auf
 * unsere Flaeche uebertragen.
 *
 * KEHRTWENDE 2026-09-01: Simons "3D-Haptik"-Vorgabe will jetzt ausdruecklich
 * "ein dunkles Blau" fuer genau diesen Rand - das Gegenteil der Vorgabe von
 * oben. `rand` ist deshalb kein Nuance-Ton mehr, sondern ein satter,
 * deutlich dunklerer Blauton in derselben Farbfamilie (gleicher Hue wie
 * `flaeche`, nur 32% statt 63% Helligkeit).
 */
const KARTE_GRUND = {
  // `text`/`fuss` waren bis 2026-09-01 ein neutrales Anthrazit/Schiefergrau
  // (`#242123`/`#475569`) - auf einer blauen Flaeche brach das mit dem Rest
  // der App, wo Kartentext und Rand seit dem "Boom"-Umbau immer dieselbe
  // Farbfamilie tragen (siehe `ink` bei den WORLD_TINTS-Kacheln). Jetzt
  // teilen sich Titel UND Rand denselben satten Blauton (`rand`); der kleine
  // Zaehltext bleibt zwar `fuss`, ist aber jetzt derselbe Blauton statt eines
  // eigenen Grautons - abgeschwaecht wird er ueber `cardCount`s bestehendes
  // `opacity: 0.8`, dieselbe Regel, die auch die WORLD_TINTS-Kacheln fuer
  // ihren Zaehltext benutzen (KEIN eigener, hellerer Hex-Wert - sonst waere
  // der Zaehltext auf Blau schwaecher als auf jeder anderen Kachelfarbe).
  // `rand` nachgeschaerft 2026-09-02 ("eine Nuance sanfter, harmonischer
  // zur Flaeche") - 30% Richtung `flaeche` gemischt (#1F6884 -> #5390A9).
  // `text`/`fuss` bleiben bei der kraeftigen Originalfarbe: das sind
  // EIGENE Felder, kein Alias auf `rand`, die Lesbarkeits-Entscheidung vom
  // Vortag ist davon nicht betroffen.
  hell: { flaeche: '#CDF1FF', rand: '#5390A9', text: '#1F6884', fuss: '#1F6884' },
  // Dunkler Modus bewusst UNVERAENDERT: der Rand ist dort ABSICHTLICH
  // dunkler als die Flaeche (Tiefe liegt unten, nicht das Licht - siehe
  // Kommentar unten), waere also als Textfarbe auf demselben dunklen Grund
  // unlesbar. `text`/`fuss` bleiben deshalb das helle, blaustichige Weiss/
  // Blaugrau, das im Dunkeln tatsaechlich Kontrast traegt.
  //
  // Nicht vorgegeben, abgeleitet: dieselbe Farbfamilie in dunkel. Simons
  // Hellblau waere auf schwarzem Grund eine Leuchtflaeche, sein Anthrazit
  // darauf unlesbar. Der Rand ist hier DUNKLER als die Flaeche - im Hellen
  // wie im Dunklen liegt die Tiefe unten, nicht das Licht.
  // `rand` ebenso nachgeschaerft (#0B1F2A -> #0E2530, 30% Richtung `flaeche`).
  dunkel: { flaeche: '#16323F', rand: '#0E2530', text: '#F2F6F8', fuss: '#9FB3C0' },
};

// Situation = `scenario` aus der Datenbank. **Wichtig fuer die Erwartung:**
// nur `travel_transportation` (2) und `grundwortschatz` (6) haben mehrere;
// acht Kategorien haben genau eine, vier haben gar keine Saetze. Die Reihen
// sind heute also kurz - der Screen zeigt damit ehrlich, wo Content fehlt,
// statt Karten zu erfinden. Sobald die Situationen pro Kategorie ausgearbeitet
// sind (siehe CLAUDE.md), fuellen sich die Reihen von selbst, ohne dass hier
// etwas geaendert werden muss.
//
// Reihenfolge der Abschnitte: Grundwortschatz zuerst, dann die
// freigeschalteten, dann die gesperrten - dieselbe Logik wie im Pfad.

const CARD_W = 150;
const CARD_H = 124;

// Farbfamilie pro Kategorie. Es gibt fuenf Toene und dreizehn Kategorien,
// also werden sie durchgereicht. Rein dekorativ, siehe WORLD_TINTS.
const TINT_ORDER = ['ankommen', 'essen', 'leute', 'alltag', 'grundlagen'] as const;

export function LessonsScreen() {
  const { darkMode, purchased, targetLanguageId } = useAppState();
  const { hatKonto } = useAuthState();
  const theme = getTheme(darkMode);
  const situations = useCategorySituations(targetLanguageId);
  // Welches Kategorie-Chevron-Dropdown gerade offen ist - EINE Stelle statt
  // je Kategorie ein eigener State (2026-08-26, Simons Wunsch: "alle
  // Drop-Downs sollen sich schliessen, sobald ich ein neues oeffne"). `null`
  // heisst "keins offen".
  const [offeneKategorieId, setOffeneKategorieId] = useState<string | null>(null);

  const isUnlocked = (id: string) => id === GRUNDWORTSCHATZ_ID || !!purchased[id];

  // Grundwortschatz zuerst, dann freigeschaltet, dann gesperrt.
  //
  // ALLE Kategorien, auch ohne Konto (berichtigt 2026-08-23, siehe
  // data/demo.ts) - der Katalog soll werben, nicht Kategorien verschwinden
  // lassen. Die Demo-Grenze wirkt seitdem nur noch auf Situationen innerhalb
  // einzelner Kategorien, siehe `sichtbareSituationen` weiter unten.
  const orderedIds = useMemo(() => {
    const paid = CATEGORIES.map((c) => c.id);
    return [
      GRUNDWORTSCHATZ_ID,
      ...paid.filter((id) => purchased[id]),
      ...paid.filter((id) => !purchased[id]),
    ];
  }, [purchased]);

  return (
    <Screen dark={darkMode} padHorizontal={false}>
      {/* Hier ohne Drei-Punkte-Knopf: Coins und Profil stehen direkt da
          (Nutzer-Wunsch 2026-08-20). Auf den uebrigen Screens bleibt das
          ausfahrbare Menue. */}
      <View style={styles.menuSlot}>
        <HeaderMenu dark={darkMode} overlay inline />
      </View>

      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.page}>
        <Text style={[styles.pageTitle, { color: theme.text }]}>Lektionen</Text>
        <Text style={[styles.pageIntro, { color: theme.sub }]}>
          Jede Kategorie mit ihren Situationen — freigeschaltet und noch verschlossen.
        </Text>
        {situations.offline ? (
          <Text style={[styles.offline, { color: theme.sub }]}>
            📴 Offline — letzter gespeicherter Stand
          </Text>
        ) : null}

        {/* Trainingsarten (Nutzer-Vorlage 2026-08-20). Waagerecht scrollend
            wie die Situationen darunter, aber deutlich anders eingefaerbt -
            das sind Uebungs-Modi, kein Inhalt.

            Farbe: die Vorlage zeigt sie gruen. Gruen ist bei uns aber fuer
            Erfolg reserviert (siehe theme/tokens.ts) und markiert unten auf
            den Situations-Karten "abgeschlossen" - zwei Bedeutungen fuer
            dieselbe Farbe auf einem Screen. Deshalb hier die Akzentfarbe der
            Marke, vollflaechig. */}
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.modeRow}
        >
          {TRAINING_MODES.map((m) => (
            <Pressable
              key={m.id}
              onPress={() => router.push(`/training/${m.id}`)}
              accessibilityRole="button"
              accessibilityLabel={`${m.title}. ${m.description}`}
              accessibilityHint="Noch nicht gebaut"
              style={({ pressed }) => [styles.modeCard, { opacity: pressed ? 0.8 : 1 }]}
            >
              <Text style={styles.modeTitle} numberOfLines={2}>
                {m.title}
              </Text>
              <Text style={styles.modeText} numberOfLines={3}>
                {m.description}
              </Text>
            </Pressable>
          ))}
        </ScrollView>

        {situations.loading ? (
          <View style={styles.loading}>
            <ActivityIndicator />
          </View>
        ) : (
          orderedIds.map((categoryId, i) => {
            const name =
              categoryId === GRUNDWORTSCHATZ_ID
                ? 'Grundwortschatz'
                : CATEGORY_BY_ID[categoryId]?.name ?? categoryId;
            const tintKey =
              categoryId === GRUNDWORTSCHATZ_ID ? 'grundlagen' : TINT_ORDER[i % TINT_ORDER.length];
            const tint = WORLD_TINTS[tintKey];
            // Ohne Konto nur die ersten Situationen je Kategorie
            // (data/demo.ts). Nicht in `useCategorySituations` gefiltert,
            // sondern hier: der Hook liefert die Wahrheit ueber den Content,
            // die Demo-Grenze ist eine Anzeige-Entscheidung.
            const list = sichtbareSituationen(situations.byCategory[categoryId] ?? [], hatKonto, categoryId, purchased);
            // Saetze der ganzen Kategorie, fuer die Beschriftung des
            // "Alle"-Knopfes.
            const gesamt = list.reduce((n, sit) => n + sit.total, 0);
            const locked = !isUnlocked(categoryId);
            // Nur wenn es ueberhaupt ein Chevron-Menue gibt, darf die
            // Ueberschrift es oeffnen (2026-08-26, Simons Wunsch: "auch die
            // Ueberschrift antippbar machen, nicht nur das Icon treffen
            // muessen"). Bei gesperrten/leeren Kategorien existiert kein
            // Menue - dieselbe Bedingung wie beim `<KategorieMenu>` unten.
            const kannOeffnen = !locked && gesamt > 0;
            const toggleMenu = () =>
              setOffeneKategorieId((cur) => (cur === categoryId ? null : categoryId));

            return (
              <View key={categoryId} style={styles.group}>
                <View style={styles.groupHead}>
                  <Pressable
                    onPress={kannOeffnen ? toggleMenu : undefined}
                    disabled={!kannOeffnen}
                    accessibilityRole={kannOeffnen ? 'button' : 'text'}
                    accessibilityLabel={kannOeffnen ? `${name}: weitere Optionen` : undefined}
                    accessibilityState={kannOeffnen ? { expanded: offeneKategorieId === categoryId } : undefined}
                    hitSlop={6}
                    style={({ pressed }) => [
                      styles.groupTitleTreffer,
                      { opacity: kannOeffnen && pressed ? 0.6 : 1 },
                    ]}
                  >
                    <Text style={[styles.groupTitle, { color: theme.text }]} numberOfLines={1}>
                      {name.toUpperCase()}
                    </Text>
                  </Pressable>
                  {locked ? (
                    // Das Schloss fuehrt in den Shop (Nutzer-Wunsch
                    // 2026-08-21). Vorher war es rein dekorativ und der
                    // einzige Weg zum Kauf ging ueber eine Situations-Karte
                    // darunter - das ist genau der Knopf, den man antippt,
                    // wenn man das Schloss sieht.
                    //
                    // Vergroesserte Tippflaeche: 13 Pixel Symbol sind fuer
                    // einen Finger zu klein (Apple nennt 44 als Minimum).
                    <Pressable
                      onPress={() => router.push('/shop')}
                      accessibilityRole="button"
                      accessibilityLabel={`${name} ist gesperrt — im Shop freischalten`}
                      hitSlop={16}
                      style={({ pressed }) => [styles.schloss, { opacity: pressed ? 0.5 : 1 }]}
                    >
                      <Feather name="lock" size={13} color={NODE_LOCKED} />
                    </Pressable>
                  ) : null}

                  {/* Chevron-Dropdown statt drei staendig sichtbarer Knoepfe
                      (2026-08-26, Simons Vorgabe) - siehe KategorieMenu
                      unten fuers Warum/Wie. Ersetzt die vorherige, immer
                      offene Knopfleiste ("Alle N · Wiederholen ·
                      Wortliste"). "Wiederholen" (faellige Karten dieser
                      Kategorie) faellt dabei weg - Simons neue Vorgabe nennt
                      nur drei Knoepfe, keinen vierten. */}
                  {!locked && gesamt > 0 ? (
                    <KategorieMenu
                      categoryId={categoryId}
                      categoryName={name}
                      gesamt={gesamt}
                      dark={darkMode}
                      offen={offeneKategorieId === categoryId}
                      onToggle={toggleMenu}
                    />
                  ) : null}
                </View>

                {list.length === 0 ? (
                  // Ehrlich statt erfunden: diese vier Kategorien haben laut
                  // Backlog noch keinen Content (Cross-Referenzierung ueber
                  // Reiseforen noch nicht begonnen).
                  <View style={styles.row}>
                    <View style={[styles.card, styles.cardEmpty, { borderColor: theme.border }]}>
                      <Text style={[styles.emptyText, { color: theme.sub }]}>
                        Noch keine Sätze in dieser Kategorie
                      </Text>
                    </View>
                  </View>
                ) : (
                  <ScrollView
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={styles.row}
                  >
                    {list.map((situation) => (
                      <SituationCard
                        key={`${categoryId}:${situation.scenario}`}
                        situation={situation}
                        categoryId={categoryId}
                        categoryName={name}
                        locked={locked}
                        dark={darkMode}
                        tintFill={darkMode ? tint.fillDark : tint.fill}
                        tintInk={darkMode ? tint.inkDark : tint.ink}
                        tintRand={darkMode ? tint.randDark : tint.rand}
                        grundstil={categoryId === GRUNDWORTSCHATZ_ID}
                        onPress={() =>
                          locked
                            ? router.push('/shop')
                            : // Genau diese Situation oeffnen, nicht die
                              // ganze Kategorie (2026-08-21). Seit 2026-08-27
                              // die 3-Stufen-Leiter aus SentenceReviewScreen.tsx
                              // statt fester Nachsprech-Reihenfolge ODER reiner
                              // FSRS-Faelligkeit (Simons Einwand: beides wirkte
                              // neben Satzliste [Nachschlagen] und Saetze-
                              // Wiederholen [gepoolter SRS-Review] nicht mehr
                              // sinnvoll) - `categoryId` + `scenario` filtern
                              // dort auf genau diese Situation, mit EIGENEM,
                              // von Saetze-Wiederholung unabhaengigem
                              // Fortschritt (siehe Kommentar dort). Die Karten
                              // rotieren dadurch immer, unabhaengig von FSRS-
                              // Faelligkeit - Simons ausdruecklicher Wunsch.
                              router.push({
                                pathname: '/training/saetze',
                                params: { categoryId, scenario: situation.scenario },
                              })
                        }
                      />
                    ))}
                  </ScrollView>
                )}
              </View>
            );
          })
        )}
      </ScrollView>

    </Screen>
  );
}

function SituationCard({
  situation,
  categoryId,
  categoryName,
  locked,
  dark,
  tintFill,
  tintInk,
  tintRand,
  grundstil = false,
  onPress,
}: {
  situation: Situation;
  categoryId: string;
  categoryName: string;
  locked: boolean;
  dark: boolean;
  tintFill: string;
  tintInk: string;
  /**
   * NUR fuer die untere 3D-Kante (2026-09-02) - sanfter als `tintInk`, das
   * gleichzeitig den Kartentext traegt und deshalb kraeftig bleiben muss.
   * Siehe `WorldTint.rand` in tokens.ts.
   */
  tintRand: string;
  /** Neuer Kartenstil des Grundwortschatzes (siehe KARTE_GRUND). */
  grundstil?: boolean;
  onPress: () => void;
}) {
  // Geliehene Situationen tragen den Namen, der zur AUFNEHMENDEN Kategorie
  // passt (siehe data/geliehen.ts) - sonst begaenne jede Kategorie mit
  // derselben Karte "Sich verständigen".
  const label = leihName(categoryId, situation.scenario) ?? scenarioLabel(situation.scenario);
  const isDone = !locked && situation.total > 0 && situation.seen >= situation.total;
  const ink = locked ? NODE_LOCKED : isDone ? ACCENT_GREEN : tintInk;
  // Fuer die Kante gilt dieselbe Regel wie fuer `ink`, ausser im offenen
  // Normalzustand: da ist der Rand die sanfte `tintRand`-Variante statt der
  // kraeftigen Textfarbe. Gesperrt/fertig bleiben Grau/Gruen unveraendert -
  // das sind appweite Zustandsfarben, kein Feintuning-Ziel.
  const kante = locked ? NODE_LOCKED : isDone ? ACCENT_GREEN : tintRand;
  const stil = dark ? KARTE_GRUND.dunkel : KARTE_GRUND.hell;
  // Gilt fuer ALLEN Text in der Karte - Titel wie Fusszeile. Ausnahme:
  // abgeschlossene Karten bleiben gruen, das ist appweit die Farbe fuer
  // Erfolg und traegt hier Bedeutung, keine Gestaltung.
  const kartenText = grundstil && !isDone ? stil.text : ink;
  // Die Fusszeile ("0/8", "8 Sätze") traegt einen eigenen, etwas kuehleren
  // Ton: dieselbe Farbe wie der Titel liesse die Nebeninformation gleich
  // wichtig erscheinen, ein blasses Grau ginge auf dem Pastellgrund unter.
  const fussText = grundstil && !isDone ? stil.fuss : ink;

  // Gesperrte Karten behalten ihre Weltfarbe und werden nur ABGEDUNKELT - so
  // macht es die Vorlage, und so sieht man, was es zu holen gibt. Ein flacher
  // `opacity`-Wert waere falsch: der haette Text und Schloss mit ausgeblichen.
  const veil = dark ? 'rgba(15,15,14,0.6)' : 'rgba(255,255,255,0.62)';

  const karte = (
    <Pressable
      onPress={onPress}
      accessibilityRole="button"
      // Der Zustand haengt sonst allein an Farbe und Symbol - beides ist fuer
      // VoiceOver unsichtbar. Der Kategoriename gehoert mit hinein, weil die
      // Ueberschrift darueber beim Durchwischen nicht mitgelesen wird.
      accessibilityLabel={
        locked
          ? `${label}, ${categoryName}, gesperrt`
          : isDone
            ? `${label}, ${categoryName}, abgeschlossen`
            : `${label}, ${categoryName}, ${situation.seen} von ${situation.total} Sätzen geübt`
      }
      accessibilityHint={locked ? 'Öffnet den Shop zum Freischalten' : 'Öffnet die Kategorie'}
      style={({ pressed }) => [
        styles.card,
        grundstil && styles.cardGrund,
        {
          backgroundColor: grundstil ? stil.flaeche : tintFill,
          // Der Rand ist die eigene Flaechenfarbe, nur eine Nuance dunkler -
          // dadurch bleibt die Kante auch gegen den weissen
          // Seitenhintergrund definiert, ohne als Kontur aufzutreten.
          borderColor: grundstil ? stil.rand : kante,
          opacity: pressed ? 0.75 : 1,
        },
      ]}
    >
      {locked ? (
        <View
          accessibilityElementsHidden
          importantForAccessibility="no"
          style={[styles.veil, { backgroundColor: veil }]}
        />
      ) : null}

      <Text style={[styles.cardName, { color: kartenText }]} numberOfLines={3}>
        {label}
      </Text>

      <View style={styles.cardFoot}>
        {locked ? (
          <Feather name="lock" size={15} color={NODE_LOCKED} accessibilityElementsHidden />
        ) : isDone ? (
          <Feather name="check-circle" size={15} color={ACCENT_GREEN} accessibilityElementsHidden />
        ) : (
          <Text style={[styles.cardProgress, { color: fussText }]}>
            {situation.seen}/{situation.total}
          </Text>
        )}
        <Text style={[styles.cardCount, { color: fussText }]}>
          {situation.total} {situation.total === 1 ? 'Satz' : 'Sätze'}
        </Text>
      </View>
    </Pressable>
  );

  // Kein Schatten mehr (2026-08-31, Simons Vorgabe): die Karte grenzt sich
  // allein ueber ihren Rand ab. Der frueher noetige Schatten-Behaelter ist
  // damit ersatzlos entfallen.
  return karte;
}

/** Strecke, um die die Knopfreihe hervorkommt - ein Hervorkommen, kein Flug. */
const MENU_SLIDE = 24;
// 260ms, dieselbe "eine Spur langsamer"-Dauer wie HeaderMenu.tsx (Simons
// Vorgabe dort 2026-08-18) - Simon wollte hier ausdruecklich dieselbe
// langsame Ausfahr-Animation, kein neues Tempo erfinden.
const MENU_DURATION = 260;

/**
 * Chevron-Dropdown pro Kategorie-Ueberschrift (2026-08-26, Simons Vorgabe).
 * Ersetzt die vorher staendig sichtbare Knopfleiste "Alle N · Wiederholen ·
 * Wortliste" durch ein eingeklapptes Chevron-Icon - erst bei Antippen fahren
 * "Satzliste"/"Wortliste"/"üben" (2026-08-26 umbenannt von "alles lernen")
 * auf DERSELBEN Zeile nach rechts aus
 * (NICHT als Aufklapp-Liste nach unten/oben, das war ausdruecklich NICHT
 * gewuenscht).
 *
 * Technik 1:1 aus HeaderMenu.tsx uebernommen (Animated translateX + opacity,
 * `mounted` getrennt von `offen` damit die Einfahr-Animation zu Ende
 * spielen kann, Zeitgeber statt Animations-Callback fuers Aushaengen - siehe
 * dortiger Kommentar fuers Warum) - nur die Richtung ist gespiegelt (dort
 * faehrt es nach LINKS aus dem Anker heraus, hier nach RECHTS, weil der
 * Chevron am linken statt rechten Rand seiner Reihe sitzt) und der Anker
 * ist hier eine Kategorie-Ueberschrift statt die App-Kopfzeile.
 *
 * Absolut positioniert statt echter Flex-Breiten-Animation (RN kann
 * "width: auto" nicht animieren) - ueberlagert bei Bedarf nachfolgenden
 * Platz in der Zeile, stoesst aber nichts um. Bei den kurzen
 * Kategorienamen und der ohnehin leeren Zeile daneben (siehe Bildvorlage)
 * ist das der Normalfall, kein Kompromiss.
 */
function KategorieMenu({
  categoryId,
  categoryName,
  gesamt,
  dark,
  offen,
  onToggle,
}: {
  categoryId: string;
  categoryName: string;
  gesamt: number;
  dark: boolean;
  /** Gesteuert vom Elternteil (2026-08-26, Simons Wunsch: "alle Drop-Downs
   *  sollen sich schliessen, sobald ich ein neues oeffne") - genau EIN
   *  Kategorie-Menue kann gleichzeitig offen sein, siehe
   *  `offeneKategorieId` in LessonsScreen. Kein eigener `offen`-State mehr
   *  hier, nur noch die Animations-Zustaende (`mounted`/`reveal`) bleiben
   *  lokal - die haengen rein an der Optik, nicht am "wer ist gerade offen". */
  offen: boolean;
  onToggle: () => void;
}) {
  const theme = getTheme(dark);
  const [mounted, setMounted] = useState(false);
  const hasOpened = useRef(false);
  const reveal = useRef(new Animated.Value(0)).current;
  // EIN stabiles Interpolations-Objekt statt bei jedem Render neu erzeugt
  // (2026-08-27, Fehlerbericht Simon: Chevron drehte sich nicht). Anders als
  // `kopfKnoepfe` unten, das bei JEDEM Aufklappen frisch GEMOUNTET wird
  // (`{mounted ? <Animated.View>...}`) und dadurch immer eine frische
  // Anbindung bekommt, bleibt dieses Animated.View die GANZE Zeit im Baum -
  // eine neu erzeugte Interpolation bei jedem Render haengte sich dort
  // unzuverlaessig an, `useRef` haelt sie ueber die Lebenszeit stabil.
  const rotateInterp = useRef(
    reveal.interpolate({ inputRange: [0, 1], outputRange: ['0deg', '180deg'] })
  ).current;

  useEffect(() => {
    const useNative = Platform.OS !== 'web';

    if (offen) {
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

    if (!hasOpened.current) return;

    const anim = Animated.timing(reveal, {
      toValue: 0,
      duration: MENU_DURATION,
      easing: Easing.out(Easing.quad),
      useNativeDriver: useNative,
    });
    anim.start();

    const timer = setTimeout(() => setMounted(false), MENU_DURATION);
    return () => {
      anim.stop();
      clearTimeout(timer);
    };
  }, [offen, reveal]);

  return (
    <View style={styles.chevronAnker}>
      <Pressable
        onPress={onToggle}
        accessibilityRole="button"
        accessibilityLabel={`${categoryName}: weitere Optionen`}
        accessibilityState={{ expanded: offen }}
        hitSlop={10}
        style={({ pressed }) => [styles.chevronKnopf, { opacity: pressed ? 0.6 : 1 }]}
      >
        {/* Dreht sich mit derselben `reveal`-Animation wie die Knopfreihe
            (2026-08-27, Fehlerbericht Simon: drehte sich nicht) - 0deg bei
            zu (">"), 180deg bei offen (chevron-right gespiegelt = "<"),
            statt ein zweites Icon auszutauschen. */}
        <Animated.View style={{ transform: [{ rotate: rotateInterp }] }}>
          <Feather name="chevron-right" size={16} color={offen ? theme.text : theme.sub} />
        </Animated.View>
      </Pressable>

      {mounted ? (
        <Animated.View
          pointerEvents={offen ? 'auto' : 'none'}
          style={[
            styles.kopfKnoepfe,
            {
              opacity: reveal,
              transform: [
                {
                  translateX: reveal.interpolate({
                    inputRange: [0, 1],
                    outputRange: [-MENU_SLIDE, 0],
                  }),
                },
              ],
            },
          ]}
        >
          <Pressable
            onPress={() => {
              onToggle();
              router.push({ pathname: '/cheatsheet/[groupId]', params: { groupId: categoryId } });
            }}
            accessibilityRole="button"
            accessibilityLabel={`Satzliste von ${categoryName} ansehen`}
            hitSlop={10}
            style={({ pressed }) => [styles.kopfKnopf, { opacity: pressed ? 0.5 : 1 }]}
          >
            <Text style={[styles.kopfKnopfText, { color: theme.sub }]}>Satzliste</Text>
          </Pressable>
          <Text style={[styles.kopfKnopfText, { color: theme.sub }]}>·</Text>
          <Pressable
            onPress={() => {
              onToggle();
              router.push({ pathname: '/wortliste', params: { categoryId } });
            }}
            accessibilityRole="button"
            accessibilityLabel={`Wortliste von ${categoryName} ansehen`}
            hitSlop={10}
            style={({ pressed }) => [styles.kopfKnopf, { opacity: pressed ? 0.5 : 1 }]}
          >
            <Text style={[styles.kopfKnopfText, { color: theme.sub }]}>Wortliste</Text>
          </Pressable>
          <Text style={[styles.kopfKnopfText, { color: theme.sub }]}>·</Text>
          <Pressable
            onPress={() => {
              onToggle();
              // Auch "ueben" laeuft seit 2026-08-27 ueber die 3-Stufen-Leiter
              // (Simons Antwort auf Rueckfrage: "alle drei Stufen, aber
              // haerter bewertet") - nur ohne `scenario`, deckt also die
              // GANZE Kategorie statt einer einzelnen Situation ab. Gesamt
              // trotzdem in der Kategorie/Situation-eigenen Zaehler-Spur
              // (`kat_stufe*`), unabhaengig von Saetze-Wiederholung.
              router.push({
                pathname: '/training/saetze',
                params: { categoryId },
              });
            }}
            accessibilityRole="button"
            accessibilityLabel={`Alle ${gesamt} Sätze von ${categoryName} üben`}
            hitSlop={10}
            style={({ pressed }) => [styles.kopfKnopf, { opacity: pressed ? 0.5 : 1 }]}
          >
            <Text style={[styles.kopfKnopfText, { color: theme.sub }]}>üben</Text>
          </Pressable>
        </Animated.View>
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    paddingBottom: SPACING.xl,
    // Platz fuer das Kopfzeilen-Menue, das rechts oben darueber liegt.
    paddingTop: SPACING.xxl,
  },
  menuSlot: {
    position: 'relative',
    paddingHorizontal: SPACING.lg,
    zIndex: 10,
  },
  pageTitle: {
    // ExtraBold statt Serife (2026-09-01).
    ...schrift('800'),
    fontSize: FONT_SIZE.h1,
    lineHeight: LINE_HEIGHT.h1,
    paddingHorizontal: SPACING.lg,
  },
  pageIntro: {
    // Fehlte bisher komplett - kein FONT_FAMILY.serif-Fall (die Zeile hatte
    // nie eine Serife), sondern hatte UEBERHAUPT keine Schriftfamilie
    // gesetzt und fiel deshalb auf die Systemschrift zurueck (San Francisco/
    // Roboto statt Nunito). Faellt im Browser kaum auf, weil die
    // Fallback-Schrift dort aehnlich aussieht - auf dem Geraet stand neben
    // der Nunito-Ueberschrift eine sichtbar andere Schriftfamilie.
    ...schrift('500'),
    fontSize: FONT_SIZE.body,
    lineHeight: LINE_HEIGHT.body,
    paddingHorizontal: SPACING.lg,
    marginTop: SPACING.xs,
  },
  offline: {
    fontSize: FONT_SIZE.caption,
    ...schrift('700'),
    paddingHorizontal: SPACING.lg,
    marginTop: SPACING.sm,
  },
  loading: {
    paddingTop: SPACING.xxl,
    alignItems: 'center',
  },
  modeRow: {
    paddingHorizontal: SPACING.lg,
    paddingTop: SPACING.lg,
    gap: SPACING.md,
  },
  modeCard: {
    // Feste Breite, damit alle drei Karten gleich gross sind. Der laengste
    // Titel ("Konversationstraining") passt nicht ganz hinein und wird
    // abgeschnitten - das ist so in Ordnung (Nutzer-Entscheidung
    // 2026-08-20): die Reihe scrollt waagerecht, die Karte ist also
    // erreichbar, und die Schrift dafuer kleiner zu machen haette alle drei
    // Karten wegen eines Wortes verkleinert.
    width: 168,
    // Von 132 auf 104 (2026-09-01, Simons Vorgabe): die Karten wirkten neben
    // den kurzen, einzeiligen Situations-Kacheln zu massiv und zogen den
    // Blick von den eigentlichen Lektionen ab. 104 reicht fuer den
    // zweizeiligen Titel plus die zwei Zeilen Beschreibung knapp bequem aus,
    // ohne dass darunter/darueber Leerraum steht, den `justifyContent:
    // 'space-between'" nur kuenstlich fuellen wuerde.
    minHeight: 104,
    borderRadius: RADIUS.lg,
    backgroundColor: ACCENT_ORANGE,
    padding: SPACING.md,
    justifyContent: 'space-between',
    gap: SPACING.sm,
    // 3D-Kante (2026-09-01, Simons Vorgabe): die Karten waren bis dahin eine
    // flache Farbflaeche ohne jede Tiefe - kein Schatten, kein Rahmen, kein
    // borderBottomWidth.
    //
    // Nachgeschaerft 2026-09-02 ("leichter und edler, ohne den haptischen
    // Charakter zu verlieren"): 6 -> 3, und `ACCENT_ORANGE_EDGE_SOFT` statt
    // `ACCENT_ORANGE_EDGE` - eine eigene, sanftere Variante nur fuer diese
    // Karten (siehe tokens.ts). `ACCENT_ORANGE_EDGE` bleibt unveraendert,
    // weil `PillButton`s primaerer Knopf ihn ebenfalls traegt und hier nicht
    // gemeint war.
    borderWidth: 1.5,
    borderColor: ACCENT_ORANGE_EDGE_SOFT,
    borderBottomWidth: 3,
  },
  modeTitle: {
    color: '#FFFFFF',
    fontSize: FONT_SIZE.body,
    lineHeight: LINE_HEIGHT.body,
    ...schrift('800'),
  },
  modeText: {
    // Gleiche Luecke wie bei `pageIntro` - nie eine Schriftfamilie gesetzt.
    ...schrift('500'),
    color: '#FFFFFF',
    fontSize: FONT_SIZE.caption,
    lineHeight: LINE_HEIGHT.caption,
    opacity: 0.92,
  },
  // Leer, aber bewusst nicht entfernt: `group` bleibt der React-Key-Traeger
  // fuer jede Kategorie-Sektion. Die Abstands-Verantwortung ist am
  // 2026-09-01 komplett zu `groupHead` gewandert (siehe dort) - vorher lag
  // sie hier UND in `row.paddingTop/-Bottom` verteilt, zwei Werte, die sich
  // erst in der Summe zum sichtbaren Abstand addierten. Das machte den
  // tatsaechlichen Pixelwert schwer nachvollziehbar (46 statt der gemeinten
  // "circa 40") und war beim letzten Feintuning genau das Problem.
  group: {},
  groupHead: {
    flexDirection: 'row',
    alignItems: 'center',
    // Umbrechen statt quetschen (2026-08-22). Mit drei Knoepfen rechts blieben
    // auf 375 Pixel nur 141 fuer den Namen - "SMALLTALK + SOCIALISING" braucht
    // 196 und wurde abgeschnitten. Der Name ist wichtiger als eine einzeilige
    // Knopfleiste, also rutschen die Knoepfe auf schmalen Geraeten unter ihn.
    // Auf breiteren bleibt alles in einer Zeile.
    flexWrap: 'wrap',
    rowGap: 2,
    gap: SPACING.sm,
    paddingHorizontal: SPACING.lg,
    // "Gesetz der Naehe" (2026-09-01, Simons Vorgabe): viel Luft NACH OBEN
    // zur vorherigen Scroll-Liste, wenig Luft NACH UNTEN zu den eigenen
    // Kacheln - die Ueberschrift soll sich klar vom Vorherigen abkoppeln und
    // sich klar dem Folgenden zuordnen. Bewusst LITERALE Pixelwerte statt
    // der SPACING-Skala (naechste Stufen waeren 32/48, keine trifft "40"):
    // Simon hat hier zwei konkrete Zahlen vorgegeben, keine Bandbreite.
    marginTop: 40,
    // 12 -> 8 -> 4 (2026-09-01, zwei Runden Feintuning): SPACING.xs, der
    // kleinste Wert der Skala noch vor 0.
    marginBottom: SPACING.xs,
  },
  schloss: { padding: SPACING.xs },
  // Traeger der Ueberschrift-Tippflaeche (2026-08-26) - `flexShrink: 0` liegt
  // hier statt auf dem Text selbst, damit der Pressable genauso wenig
  // schrumpft wie vorher der nackte Text (siehe Kommentar bei groupTitle).
  groupTitleTreffer: { flexShrink: 0 },
  // Anker fuers Chevron-Dropdown (2026-08-26) - `position: relative`, damit
  // die ausfahrende Knopfreihe absolut RELATIV ZU DIESER Stelle sitzt statt
  // zum ganzen Screen (1:1 dasselbe Prinzip wie `anchor` in HeaderMenu.tsx).
  chevronAnker: { position: 'relative', justifyContent: 'center' },
  chevronKnopf: { padding: SPACING.xs, minWidth: 32, minHeight: 32, alignItems: 'center', justifyContent: 'center' },
  // Faehrt aus dem Chevron nach RECHTS heraus (Simons Vorgabe: auf derselben
  // Zeile, nicht nach oben/unten) - absolut positioniert statt echter
  // Breiten-Animation (siehe Kommentar bei KategorieMenu).
  kopfKnoepfe: {
    position: 'absolute',
    left: '100%',
    top: 0,
    bottom: 0,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    paddingLeft: SPACING.sm,
  },
  kopfKnopf: { paddingVertical: 2 },
  kopfKnopfText: { fontSize: FONT_SIZE.caption, ...schrift('700') },
  groupTitle: {
    fontSize: FONT_SIZE.small,
    ...schrift('800'),
    letterSpacing: 0.8,
    // NICHT schrumpfen (2026-08-22): sonst gewinnt die Knopfleiste den Platz
    // und der Titel wird gekuerzt, statt dass die Knoepfe umbrechen. Der
    // laengste Name misst 209 Pixel und passt damit auch auf dem schmalsten
    // Geraet in eine eigene Zeile.
    flexShrink: 0,
  },
  row: {
    paddingHorizontal: SPACING.lg,
    // `paddingTop`/`paddingBottom` sind am 2026-09-01 raus: sie steuerten
    // vorher (zusammen mit `group.marginTop`) den Abstand zur Ueberschrift
    // mit, den jetzt allein `groupHead.marginBottom` traegt - siehe Kommentar
    // dort. Zwei Stellen fuer eine Zahl war genau das Problem.
    gap: SPACING.md,
  },
  card: {
    width: CARD_W,
    height: CARD_H,
    borderRadius: RADIUS.lg,
    borderWidth: 1.5,
    // 3D-Kante (2026-09-01, Simons Vorgabe): vorher rundum 1.5, also flach.
    // Von 6 auf 3 (2026-09-02, "leichter und edler"). Die Randfarbe ist seit
    // demselben Tag `tintRand` statt `ink` - eine EIGENE, sanftere Variante
    // je Farbwelt, damit der (unveraendert kraeftige) Kartentext nicht mit
    // abgeschwaecht wird. Siehe `WorldTint.rand` in tokens.ts.
    borderBottomWidth: 3,
    padding: SPACING.md,
    justifyContent: 'space-between',
    overflow: 'hidden',
  },
  // Hervorgehobene Glas-Karte (2026-08-31). Kein groesserer Zuschnitt - eine
  // breitere Karte wuerde die ganze Reihe verschieben; die Hervorhebung
  // entsteht allein aus Material, Lichtkante und Erhebung.
  // Kartenstil des Grundwortschatzes (2026-08-31, Simons Vorlage).
  cardGrund: {
    // "Playful 3D Card" (2026-08-31, Simons Vorgabe) - KEIN Schatten.
    //
    // Der Vorgaenger war ein weicher Drop Shadow. Der scheiterte an
    // React Native: auf iOS blieb er zu schwach, und Android kennt
    // `shadow*` gar nicht und rechnet `elevation` in einen eigenen,
    // deutlich haerteren Schatten um - grau und unsauber. Ein dicker
    // unterer Rand sieht dagegen auf BEIDEN Systemen identisch aus, weil
    // er ein ganz normaler Rand ist und keine Plattform-Eigenheit.
    //
    // Deshalb steht hier bewusst KEIN shadowColor/-Offset/-Opacity/
    // -Radius und KEINE elevation. Wer sie ergaenzt, holt sich genau das
    // Problem zurueck.
    // Von 2 auf 1.5 (2026-09-01): gleicht die Kachel jetzt an `kachel()`
    // an - 1.5 seitlich/oben, unten separat.
    borderWidth: 1.5,
    // Die Tiefe: der untere Rand ist die Kante, auf der die Karte steht.
    // Von 6 auf 3 (2026-09-02, Simons Vorgabe "leichter und edler, ohne den
    // haptischen Charakter zu verlieren").
    borderBottomWidth: 3,
    borderRadius: RADIUS.xl,
    // Luft um den Text. Unten etwas mehr, weil der 5 Punkt dicke Rand den
    // Innenraum dort optisch verkuerzt - sonst klebt die Fusszeile daran.
    padding: SPACING.lg,
    paddingBottom: SPACING.md,
  },
  cardEmpty: {
    width: CARD_W * 2 + SPACING.md,
    height: CARD_H * 0.6,
    borderStyle: 'dashed',
    alignItems: 'center',
    justifyContent: 'center',
  },
  emptyText: {
    fontSize: FONT_SIZE.caption,
    lineHeight: LINE_HEIGHT.caption,
    textAlign: 'center',
  },
  veil: {
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
  },
  cardName: {
    fontSize: FONT_SIZE.body,
    lineHeight: LINE_HEIGHT.body,
    ...schrift('800'),
  },
  cardFoot: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  cardProgress: {
    fontSize: FONT_SIZE.caption,
    ...schrift('800'),
  },
  cardCount: {
    // Fehlte bisher komplett - dieselbe Luecke wie bei `pageIntro`/
    // `modeText` weiter oben in dieser Datei: keine Schriftfamilie gesetzt,
    // fiel deshalb auf die Systemschrift zurueck statt auf Nunito.
    ...schrift('500'),
    fontSize: FONT_SIZE.caption,
    opacity: 0.8,
  },
});
