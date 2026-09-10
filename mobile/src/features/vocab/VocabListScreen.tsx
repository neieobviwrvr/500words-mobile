import { Fragment } from 'react';
import { ActivityIndicator, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { router } from 'expo-router';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useAppState } from '../../state/AppState';
import { CATEGORY_BY_ID } from '../../data/categories';
import { speakSentence } from '../tts/speak';
import { GRUPPEN_TITEL, Gruppe, useCategoryVocab } from './useCategoryVocab';
import {
  ACCENT_BLUE, ACCENT_ORANGE, FONT_SIZE, getTheme, LINE_HEIGHT, RADIUS, SPACING, schrift } from '../../theme/tokens';

// Wortliste einer Kategorie (2026-08-21, Nutzer-Wunsch).
//
// ZUM ANSCHAUEN, nicht zum Durcharbeiten: keine Karten, keine Wiederholung,
// keine zusaetzliche Lernzeit. Wer wissen will, was 气质 heisst, schlaegt hier
// nach - genau das war die Luecke, denn die Kategorie bringt 23 Vokabeln mit,
// die sonst nirgends erklaert werden.
//
// Bewusst NICHT als zweiter Lernweg: das waeren 141 zusaetzliche Karten
// allein fuer Club, und es wuerde dasselbe nochmal tun, was die Saetze schon
// leisten. Simon zu einem frueheren Entwurf, der genau das war: "wie dieser
// Testaufbau dem User etwas beibringen soll wenn er alle Vokabeln auf einer
// Seite sieht und das wars".

export function VocabListScreen({ categoryId }: { categoryId: string }) {
  const { darkMode, targetLanguageId } = useAppState();
  const theme = getTheme(darkMode);
  const insets = useSafeAreaInsets();
  const liste = useCategoryVocab(targetLanguageId, categoryId);
  const kategorie = CATEGORY_BY_ID[categoryId]?.name ?? categoryId;

  const zurueck = () => (router.canGoBack() ? router.back() : router.replace('/lektionen'));

  return (
    <View style={[styles.seite, { backgroundColor: theme.pageBg, paddingTop: insets.top }]}>
      <View style={styles.kopf}>
        <Pressable
          onPress={zurueck}
          accessibilityRole="button"
          accessibilityLabel="Zurück"
          style={({ pressed }) => [styles.zurueck, { opacity: pressed ? 0.6 : 1 }]}
        >
          <Feather name="chevron-left" size={26} color={theme.text} />
        </Pressable>
        <View style={styles.kopfText}>
          <Text style={[styles.titel, { color: theme.text }]}>Wortliste</Text>
          <Text style={[styles.untertitel, { color: theme.sub }]}>{kategorie}</Text>
        </View>
      </View>

      {liste.loading ? (
        <View style={styles.mitte}>
          <ActivityIndicator color={ACCENT_BLUE} />
        </View>
      ) : liste.unavailable ? (
        <View style={styles.mitte}>
          <Text style={[styles.text, { color: theme.sub }]}>{liste.unavailable}</Text>
        </View>
      ) : (
        <ScrollView contentContainerStyle={[styles.inhalt, { paddingBottom: insets.bottom + SPACING.xxxl }]}>
          <Text style={[styles.hinweis, { color: theme.sub }]}>
            {`${liste.woerter.length} Wörter aus den Sätzen dieser Kategorie. Nur zum Nachschlagen — hier gibt es nichts zu wiederholen.`}
          </Text>
          {liste.woerter.map((w, i) => {
            const vorher = i > 0 ? liste.woerter[i - 1].gruppe : null;
            return (
              <Fragment key={w.hanzi}>
                {w.gruppe !== vorher ? (
                  <Text style={[styles.gruppe, { color: theme.sub }]}>
                    {GRUPPEN_TITEL[w.gruppe as Gruppe].toUpperCase()}
                  </Text>
                ) : null}
                <View style={[styles.zeile, { borderColor: theme.border, backgroundColor: theme.cardBg }]}>
                  <View style={styles.zeileText}>
                    <View style={styles.pinyinZeile}>
                      {/* Pinyin ist der Lerntext, die Zeichen laufen daneben
                          mit - siehe CLAUDE.md, "keine Zeichen zum Lernen". */}
                      <Text style={[styles.pinyin, { color: theme.text }]}>{w.pinyin}</Text>
                      <Text style={[styles.hanzi, { color: theme.sub }]}>{w.hanzi}</Text>
                      {w.neu ? (
                        <Text style={[styles.marke, { color: ACCENT_ORANGE, borderColor: ACCENT_ORANGE }]}>
                          neu
                        </Text>
                      ) : null}
                    </View>
                    <Text style={[styles.bedeutung, { color: theme.sub }]}>{w.de}</Text>
                  </View>
                  <Pressable
                    onPress={() => speakSentence({ text: w.hanzi }, { languageId: targetLanguageId })}
                    accessibilityRole="button"
                    accessibilityLabel={`${w.pinyin} anhören`}
                    style={({ pressed }) => [
                      styles.hoeren,
                      { borderColor: theme.border, opacity: pressed ? 0.6 : 1 },
                    ]}
                  >
                    <Feather name="volume-2" size={16} color={theme.sub} />
                  </Pressable>
                </View>
              </Fragment>
            );
          })}
        </ScrollView>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  seite: { flex: 1 },
  kopf: { flexDirection: 'row', alignItems: 'center', paddingHorizontal: SPACING.lg, paddingVertical: SPACING.md, gap: SPACING.sm },
  zurueck: { padding: SPACING.xs },
  kopfText: { flex: 1 },
  // ExtraBold statt Serife (2026-09-01).
  titel: { ...schrift('800'), fontSize: FONT_SIZE.h2, lineHeight: LINE_HEIGHT.h2 },
  untertitel: { fontSize: FONT_SIZE.caption },
  mitte: { flex: 1, alignItems: 'center', justifyContent: 'center', paddingHorizontal: SPACING.xl },
  text: { fontSize: FONT_SIZE.body, lineHeight: LINE_HEIGHT.body, textAlign: 'center' },
  inhalt: { paddingHorizontal: SPACING.lg, gap: SPACING.xs },
  hinweis: { fontSize: FONT_SIZE.caption, lineHeight: LINE_HEIGHT.caption, marginBottom: SPACING.sm },
  gruppe: { fontSize: FONT_SIZE.small, ...schrift('800'), letterSpacing: 1, marginTop: SPACING.lg, marginBottom: SPACING.xs },
  zeile: {
    flexDirection: 'row', alignItems: 'center', gap: SPACING.sm,
    borderWidth: 1, borderRadius: RADIUS.md, paddingVertical: SPACING.sm, paddingHorizontal: SPACING.md,
  },
  zeileText: { flex: 1, gap: 2 },
  pinyinZeile: { flexDirection: 'row', alignItems: 'center', gap: SPACING.sm, flexWrap: 'wrap' },
  pinyin: { fontSize: FONT_SIZE.body, ...schrift('700') },
  hanzi: { fontSize: FONT_SIZE.caption },
  marke: { fontSize: 10, ...schrift('800'), borderWidth: 1, borderRadius: RADIUS.pill, paddingHorizontal: 6, paddingVertical: 1 },
  bedeutung: { fontSize: FONT_SIZE.caption, lineHeight: LINE_HEIGHT.caption },
  hoeren: { borderWidth: 1, borderRadius: RADIUS.pill, padding: SPACING.sm },
});
