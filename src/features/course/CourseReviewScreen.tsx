import { useMemo } from 'react';
import { ActivityIndicator, StyleSheet, Text, View } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { PillButton, Screen } from '../../components';
import { useAppState } from '../../state/AppState';
import { getLanguage } from '../../data/languages';
import { LessonScreen, UebungsSchritt } from './LessonScreen';
import { Kartenart, useFaelligeKarten } from './useFaelligeKarten';
import { FONT_FAMILY, FONT_SIZE, getTheme, LINE_HEIGHT, SPACING } from '../../theme/tokens';

// Wiederholungs-Sitzung des gefuehrten Kurses (2026-08-21).
//
// Bewusst eine duenne Huelle: sie baut nur die Schrittliste aus den faelligen
// Karten und laesst sie von `LessonScreen` abspielen. Dadurch ist eine
// Wiederholung inhaltlich EXAKT eine Lektion - gleiche Bewertung, gleiche
// Rueckmeldung, gleiches Kartenschreiben. Waere das nachgebaut, wuerden die
// beiden mit der Zeit auseinanderlaufen.
//
// Welche Karte von welchem Schritt kommt:
//   faelliges Wort   -> Schritt "abrufen"      Deutsch -> Chinesisch
//   faelliger Rahmen -> Schritt "satz"         Muster mit einem Wort fuellen
//
// Das sind genau die beiden Schritte, die in der Lektion auch die Karten
// schreiben - die Wiederholung frischt also dieselben Karten auf, die sie
// abfragt.

export function CourseReviewScreen({ modus }: { modus?: Kartenart }) {
  const { darkMode, targetLanguageId } = useAppState();
  const theme = getTheme(darkMode);
  const sprache = getLanguage(targetLanguageId);
  const faellig = useFaelligeKarten(targetLanguageId, modus);

  const schritte = useMemo<UebungsSchritt[]>(
    () =>
      faellig.faellig.map((k) =>
        k.art === 'wort'
          ? { art: 'abrufen' as const, wort: k.wort }
          : {
              art: 'satz' as const,
              wort: k.wort,
              hanzi: k.hanzi,
              pinyin: k.pinyin,
              lektionId: k.lektionId,
              rahmenPinyin: k.rahmenPinyin,
            }
      ),
    [faellig.faellig]
  );

  if (faellig.loading) {
    return (
      <Screen dark={darkMode} padBottom>
        <View style={styles.mitte}>
          <ActivityIndicator />
        </View>
      </Screen>
    );
  }

  if (schritte.length === 0) {
    return (
      <Screen dark={darkMode} padBottom>
        <View style={styles.mitte}>
          <Feather name="check-circle" size={40} color={theme.sub} />
          <Text style={[styles.titel, { color: theme.text }]}>Nichts zu wiederholen</Text>
          <Text style={[styles.text, { color: theme.sub }]}>
            {faellig.bekannt === 0
              ? modus === 'rahmen'
                ? `Für ${sprache.label} sind noch keine Sätze geübt — die entstehen im Satz-Schritt einer Lektion.`
                : `Für ${sprache.label} ist noch nichts gelernt — arbeite erst eine Lektion durch, dann sammelt sich hier etwas an.`
              : 'Alles frisch. Komm später wieder, oder mach eine neue Lektion.'}
          </Text>
        </View>
      </Screen>
    );
  }

  return (
    <>
      {/* Ehrlich benennen, wenn gar nichts wirklich faellig war und nur
          vorgezogen wurde - sonst haelt der Nutzer es fuer echten Bedarf. */}
      {faellig.vorgezogen ? (
        <View style={[styles.banner, { backgroundColor: theme.subtleFill }]}>
          <Text style={[styles.bannerText, { color: theme.sub }]}>
            Nichts war fällig — hier sind ein paar Karten vorgezogen.
          </Text>
        </View>
      ) : null}
      <LessonScreen
        schritteVon={schritte}
        titel={modus === 'wort' ? 'Wörter' : modus === 'rahmen' ? 'Sätze' : 'Wiederholen'}
        untertitel={`${schritte.length} ${schritte.length === 1 ? 'Karte' : 'Karten'}`}
      />
    </>
  );
}

const styles = StyleSheet.create({
  mitte: { flex: 1, alignItems: 'center', justifyContent: 'center', gap: SPACING.md, paddingHorizontal: SPACING.xl },
  titel: {
    fontFamily: FONT_FAMILY.serif,
    fontSize: FONT_SIZE.h2,
    lineHeight: LINE_HEIGHT.h2,
    textAlign: 'center',
  },
  text: { fontSize: FONT_SIZE.body, lineHeight: LINE_HEIGHT.body, textAlign: 'center' },
  banner: { paddingVertical: SPACING.sm, paddingHorizontal: SPACING.lg },
  bannerText: { fontSize: FONT_SIZE.caption, textAlign: 'center' },
});
