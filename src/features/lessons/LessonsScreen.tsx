import { useMemo } from 'react';
import { ActivityIndicator, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { router } from 'expo-router';
import { Feather } from '@expo/vector-icons';
import { useAppState } from '../../state/AppState';
import { CATEGORIES, CATEGORY_BY_ID, GRUNDWORTSCHATZ_ID } from '../../data/categories';
import { sichtbareKategorien, sichtbareSituationen } from '../../data/demo';
import { useAuthState } from '../../state/AuthState';
import { scenarioLabel } from '../../data/scenarios';
import { leihName } from '../../data/geliehen';
import { TRAINING_MODES } from '../../data/trainingModes';
import { HeaderMenu, Screen } from '../../components';
import { Situation, useCategorySituations } from './useCategorySituations';
import {
  getTheme,
  ACCENT_GREEN,
  ACCENT_ORANGE,
  NODE_LOCKED,
  WORLD_TINTS,
  RADIUS,
  SPACING,
  FONT_SIZE,
  FONT_FAMILY,
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

  const isUnlocked = (id: string) => id === GRUNDWORTSCHATZ_ID || !!purchased[id];

  // Grundwortschatz zuerst, dann freigeschaltet, dann gesperrt.
  const orderedIds = useMemo(() => {
    // Ohne Konto nur der Demo-Umfang - siehe data/demo.ts.
    const paid = sichtbareKategorien(CATEGORIES, hatKonto).map((c) => c.id);
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
            const list = sichtbareSituationen(situations.byCategory[categoryId] ?? [], hatKonto);
            // Saetze der ganzen Kategorie, fuer die Beschriftung des
            // "Alle"-Knopfes.
            const gesamt = list.reduce((n, sit) => n + sit.total, 0);
            const locked = !isUnlocked(categoryId);

            return (
              <View key={categoryId} style={styles.group}>
                <View style={styles.groupHead}>
                  <Text style={[styles.groupTitle, { color: theme.text }]} numberOfLines={1}>
                    {name.toUpperCase()}
                  </Text>
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

                  {/* Drei kleine Knoepfe rechts in der Ueberschriftenzeile
                      (Nutzer-Entscheidung 2026-08-21). Bewusst NICHT als
                      Karten vor der Reihe: die Reihe IST der Inhalt, und was
                      dort vorne steht, wischt man bei jedem Besuch weg, um an
                      die Situationen zu kommen - eine Abgabe auf die haeufige
                      Handlung zugunsten einer seltenen. Hier kosten sie
                      weder Hoehe noch Wisch, weil der Platz neben der
                      Ueberschrift ohnehin leer war.

                      "Alle" ersetzt zugleich einen Weg, der beim Umbau auf
                      Situations-Ziele verlorenging: die ganze Kategorie am
                      Stueck zu ueben gab es vorher nur ueber S2, und S2 hat
                      seitdem keinen Eingang mehr.

                      "Wiederholen" (2026-08-22) ist der Unterschied, den
                      "Alle" nicht abdeckt: dieselbe Kategorie, aber nur die
                      faelligen Karten. Simons Frage war, was jemand tut, der
                      eine Kategorie gezielt festigen will - mit "Alle"
                      bekaeme er jedes Mal auch die sechzig Saetze mit, die
                      laengst sitzen. Genau dafuer war der Kategorie-Filter
                      auf S5 gedacht, den es seit dem 2026-08-06 nicht mehr
                      gibt. */}
                  {!locked && gesamt > 0 ? (
                    <View style={styles.kopfKnoepfe}>
                      <Pressable
                        onPress={() =>
                          router.push({
                            pathname: '/exercise',
                            params: { mode: 'spam', categoryId, source: 'category' },
                          })
                        }
                        accessibilityRole="button"
                        accessibilityLabel={`Alle ${gesamt} Sätze von ${name} üben`}
                        hitSlop={10}
                        style={({ pressed }) => [styles.kopfKnopf, { opacity: pressed ? 0.5 : 1 }]}
                      >
                        <Text style={[styles.kopfKnopfText, { color: theme.sub }]}>{`Alle ${gesamt}`}</Text>
                      </Pressable>
                      <Text style={[styles.kopfKnopfText, { color: theme.sub }]}>·</Text>
                      <Pressable
                        onPress={() =>
                          router.push({
                            pathname: '/exercise',
                            params: { mode: 'spam', categoryId, source: 'srs-kategorie' },
                          })
                        }
                        accessibilityRole="button"
                        accessibilityLabel={`Fällige Karten von ${name} wiederholen`}
                        hitSlop={10}
                        style={({ pressed }) => [styles.kopfKnopf, { opacity: pressed ? 0.5 : 1 }]}
                      >
                        <Text style={[styles.kopfKnopfText, { color: theme.sub }]}>Wiederholen</Text>
                      </Pressable>
                      <Text style={[styles.kopfKnopfText, { color: theme.sub }]}>·</Text>
                      <Pressable
                        onPress={() =>
                          router.push({ pathname: '/wortliste', params: { categoryId } })
                        }
                        accessibilityRole="button"
                        accessibilityLabel={`Wortliste von ${name} ansehen`}
                        hitSlop={10}
                        style={({ pressed }) => [styles.kopfKnopf, { opacity: pressed ? 0.5 : 1 }]}
                      >
                        <Text style={[styles.kopfKnopfText, { color: theme.sub }]}>Wortliste</Text>
                      </Pressable>
                    </View>
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
                        onPress={() =>
                          locked
                            ? router.push('/shop')
                            : // Genau diese Situation oeffnen, nicht die
                              // ganze Kategorie (2026-08-21).
                              router.push({
                                pathname: '/exercise',
                                params: {
                                  mode: 'spam',
                                  categoryId,
                                  scenario: situation.scenario,
                                  source: 'category',
                                },
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
  onPress,
}: {
  situation: Situation;
  categoryId: string;
  categoryName: string;
  locked: boolean;
  dark: boolean;
  tintFill: string;
  tintInk: string;
  onPress: () => void;
}) {
  // Geliehene Situationen tragen den Namen, der zur AUFNEHMENDEN Kategorie
  // passt (siehe data/geliehen.ts) - sonst begaenne jede Kategorie mit
  // derselben Karte "Sich verständigen".
  const label = leihName(categoryId, situation.scenario) ?? scenarioLabel(situation.scenario);
  const isDone = !locked && situation.total > 0 && situation.seen >= situation.total;
  const ink = locked ? NODE_LOCKED : isDone ? ACCENT_GREEN : tintInk;

  // Gesperrte Karten behalten ihre Weltfarbe und werden nur ABGEDUNKELT - so
  // macht es die Vorlage, und so sieht man, was es zu holen gibt. Ein flacher
  // `opacity`-Wert waere falsch: der haette Text und Schloss mit ausgeblichen.
  const veil = dark ? 'rgba(15,15,14,0.6)' : 'rgba(255,255,255,0.62)';

  return (
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
        { backgroundColor: tintFill, borderColor: ink, opacity: pressed ? 0.75 : 1 },
      ]}
    >
      {locked ? (
        <View
          accessibilityElementsHidden
          importantForAccessibility="no"
          style={[styles.veil, { backgroundColor: veil }]}
        />
      ) : null}

      <Text style={[styles.cardName, { color: ink }]} numberOfLines={3}>
        {label}
      </Text>

      <View style={styles.cardFoot}>
        {locked ? (
          <Feather name="lock" size={15} color={NODE_LOCKED} accessibilityElementsHidden />
        ) : isDone ? (
          <Feather name="check-circle" size={15} color={ACCENT_GREEN} accessibilityElementsHidden />
        ) : (
          <Text style={[styles.cardProgress, { color: ink }]}>
            {situation.seen}/{situation.total}
          </Text>
        )}
        <Text style={[styles.cardCount, { color: ink }]}>
          {situation.total} {situation.total === 1 ? 'Satz' : 'Sätze'}
        </Text>
      </View>
    </Pressable>
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
    fontFamily: FONT_FAMILY.serif,
    fontSize: FONT_SIZE.h1,
    lineHeight: LINE_HEIGHT.h1,
    paddingHorizontal: SPACING.lg,
  },
  pageIntro: {
    fontSize: FONT_SIZE.body,
    lineHeight: LINE_HEIGHT.body,
    paddingHorizontal: SPACING.lg,
    marginTop: SPACING.xs,
  },
  offline: {
    fontSize: FONT_SIZE.caption,
    fontWeight: '700',
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
    minHeight: 132,
    borderRadius: RADIUS.lg,
    backgroundColor: ACCENT_ORANGE,
    padding: SPACING.md,
    justifyContent: 'space-between',
    gap: SPACING.sm,
  },
  modeTitle: {
    color: '#FFFFFF',
    fontSize: FONT_SIZE.body,
    lineHeight: LINE_HEIGHT.body,
    fontWeight: '800',
  },
  modeText: {
    color: '#FFFFFF',
    fontSize: FONT_SIZE.caption,
    lineHeight: LINE_HEIGHT.caption,
    opacity: 0.92,
  },
  group: {
    marginTop: SPACING.xl,
  },
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
  },
  schloss: { padding: SPACING.xs },
  // Die Leiste bleibt in EINER Zeile und wandert als Ganzes unter den Titel,
  // wenn es eng wird - der Umbruch sitzt in `groupHead`. Bräche sie in sich
  // um, stuende "Wortliste" allein unter "Alle 62 · Wiederholen".
  kopfKnoepfe: { flexDirection: 'row', alignItems: 'center', gap: 6, marginLeft: 'auto' },
  kopfKnopf: { paddingVertical: 2 },
  kopfKnopfText: { fontSize: FONT_SIZE.caption, fontWeight: '700' },
  groupTitle: {
    fontSize: FONT_SIZE.small,
    fontWeight: '800',
    letterSpacing: 0.8,
    // NICHT schrumpfen (2026-08-22): sonst gewinnt die Knopfleiste den Platz
    // und der Titel wird gekuerzt, statt dass die Knoepfe umbrechen. Der
    // laengste Name misst 209 Pixel und passt damit auch auf dem schmalsten
    // Geraet in eine eigene Zeile.
    flexShrink: 0,
  },
  row: {
    paddingHorizontal: SPACING.lg,
    paddingTop: SPACING.md,
    gap: SPACING.md,
  },
  card: {
    width: CARD_W,
    height: CARD_H,
    borderRadius: RADIUS.lg,
    borderWidth: 1.5,
    padding: SPACING.md,
    justifyContent: 'space-between',
    overflow: 'hidden',
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
    fontWeight: '800',
  },
  cardFoot: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  cardProgress: {
    fontSize: FONT_SIZE.caption,
    fontWeight: '800',
  },
  cardCount: {
    fontSize: FONT_SIZE.caption,
    opacity: 0.8,
  },
});
