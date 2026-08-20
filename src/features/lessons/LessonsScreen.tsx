import { useMemo } from 'react';
import { ActivityIndicator, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { router } from 'expo-router';
import { Feather } from '@expo/vector-icons';
import { useAppState } from '../../state/AppState';
import { CATEGORIES, CATEGORY_BY_ID, GRUNDWORTSCHATZ_ID } from '../../data/categories';
import { scenarioLabel } from '../../data/scenarios';
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
  const theme = getTheme(darkMode);
  const situations = useCategorySituations(targetLanguageId);

  const isUnlocked = (id: string) => id === GRUNDWORTSCHATZ_ID || !!purchased[id];

  // Grundwortschatz zuerst, dann freigeschaltet, dann gesperrt.
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
            const list = situations.byCategory[categoryId] ?? [];
            const locked = !isUnlocked(categoryId);

            return (
              <View key={categoryId} style={styles.group}>
                <View style={styles.groupHead}>
                  <Text style={[styles.groupTitle, { color: theme.text }]} numberOfLines={1}>
                    {name.toUpperCase()}
                  </Text>
                  {locked ? (
                    <Feather name="lock" size={13} color={NODE_LOCKED} accessibilityElementsHidden />
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
                        categoryName={name}
                        locked={locked}
                        dark={darkMode}
                        tintFill={darkMode ? tint.fillDark : tint.fill}
                        tintInk={darkMode ? tint.inkDark : tint.ink}
                        onPress={() =>
                          locked
                            ? router.push('/shop')
                            : router.push({ pathname: '/category/[id]', params: { id: categoryId } })
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
  categoryName,
  locked,
  dark,
  tintFill,
  tintInk,
  onPress,
}: {
  situation: Situation;
  categoryName: string;
  locked: boolean;
  dark: boolean;
  tintFill: string;
  tintInk: string;
  onPress: () => void;
}) {
  const label = scenarioLabel(situation.scenario);
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
    gap: SPACING.sm,
    paddingHorizontal: SPACING.lg,
  },
  groupTitle: {
    fontSize: FONT_SIZE.small,
    fontWeight: '800',
    letterSpacing: 0.8,
    flexShrink: 1,
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
