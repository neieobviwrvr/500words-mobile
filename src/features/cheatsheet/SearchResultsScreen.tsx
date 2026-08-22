import { useEffect, useState } from 'react';
import { ActivityIndicator, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { router, useLocalSearchParams } from 'expo-router';
import { useAppState } from '../../state/AppState';
import { CATEGORIES } from '../../data/categories';
import { getLanguage } from '../../data/languages';
import { CheatsheetCategoryGroup, Phrase, loadCheatsheetGroups, phraseLanguageId, searchCheatsheetSentences, toPhrase } from '../../data/cheatsheetContent';
import { speakSentence } from '../tts/speak';
import { PhraseCard } from './PhraseCard';
import { getTheme, ACCENT_ORANGE } from '../../theme/tokens';

// Zwei Wege hierher (2026-08-07, echter Content statt Platzhalter):
// - Freitextsuche auf S6 -> "query"-Query-Parameter -> Token-Suche ueber
//   ALLE gekauften Kategorien (searchCheatsheetSentences)
// - Themen-Boxen ausgewaehlt -> selectedThemes aus AppState -> gruppiert
//   nach den gewaehlten Kategorie/Szenario-Kombinationen

export function SearchResultsScreen() {
  const { darkMode, selectedThemes, saved, toggleSaved, purchased, targetLanguageId } = useAppState();
  const theme = getTheme(darkMode);
  // Der native Header ist app-weit aus (app/_layout.tsx), jeder Screen
  // zeichnet seinen eigenen. Ohne diesen Einsatz liegt die Ueberschrift unter
  // der Statusleiste bzw. der Kamera-Insel und wird verdeckt.
  const insets = useSafeAreaInsets();
  const language = getLanguage(targetLanguageId);
  const { query } = useLocalSearchParams<{ query?: string }>();

  const [loading, setLoading] = useState(true);
  const [loadError, setLoadError] = useState<string | null>(null);
  const [groups, setGroups] = useState<CheatsheetCategoryGroup[]>([]);

  useEffect(() => {
    let cancelled = false;
    (async () => {
      setLoading(true);
      setLoadError(null);
      try {
        const purchasedIds = CATEGORIES.filter((c) => purchased[c.id]).map((c) => c.id);
        const result = await loadCheatsheetGroups(targetLanguageId, purchasedIds);
        if (cancelled) return;
        setGroups(result.groups);
      } catch (e) {
        if (!cancelled) setLoadError(e instanceof Error ? e.message : String(e));
      } finally {
        if (!cancelled) setLoading(false);
      }
    })();
    return () => {
      cancelled = true;
    };
  }, [targetLanguageId, purchased]);

  /**
   * Eine Ueberschrift je SITUATION, nicht je Kategorie (Nutzer-Wunsch
   * 2026-08-22).
   *
   * Vorher stand ueber dem Block nur "GRUNDWORTSCHATZ" - wer "Im
   * Krankenhaus" und "Sich verabreden" angetippt hatte, sah nicht mehr,
   * welche Saetze zu welcher Auswahl gehoerten, sobald beide aus derselben
   * Kategorie kamen. Jetzt: "Sich verabreden (Grundwortschatz)", die
   * Situation farbig, die Kategorie in Klammern und gedaempft.
   */
  type ResultSection = { situation: string; kategorie: string | null; phrases: Phrase[] };
  let sections: ResultSection[] = [];

  if (query) {
    const matches = searchCheatsheetSentences(groups, query);
    if (matches.length > 0 && language.table) {
      sections = [
        {
          situation: `„${query}"`,
          kategorie: `${matches.length} Treffer`,
          phrases: matches.map((s) => toPhrase(targetLanguageId, language.table!, groups.find((g) => g.categoryId === s.category)?.title ?? s.category, s)),
        },
      ];
    }
  } else {
    // Ueber die AUSWAHL laufen, nicht ueber die Kategorien - nur so bleibt
    // die Reihenfolge die des Antippens und jede Situation ihr eigener Block.
    for (const thema of Object.values(selectedThemes)) {
      const grp = groups.find((g) => g.categoryId === thema.groupId);
      if (!grp || !language.table) continue;
      // Kategorien ohne eigene Szenarien (heute keine mehr, frueher der
      // Normalfall) liefern ihren ganzen Bestand.
      const sentences =
        grp.scenarios.length === 0
          ? grp.allSentences
          : (grp.scenarios.find((sc) => `${grp.categoryId}_${sc.key}` === thema.key)?.sentences ?? []);
      if (sentences.length === 0) continue;
      sections.push({
        situation: thema.themeLabel,
        kategorie: grp.title,
        phrases: sentences.map((s) => toPhrase(targetLanguageId, language.table!, grp.title, s)),
      });
    }
  }

  // "Saetze - Vorstellen, Naeher kommen (aus 2 Kategorien)". Bei vielen
  // Situationen wuerde die Zeile unlesbar, deshalb ab vier nur noch die
  // Anzahl.
  const gewaehlteNamen = Object.values(selectedThemes).map((t) => t.themeLabel);
  // Verschiedene Kategorien zaehlen, nicht Abschnitte - seit ein Abschnitt je
  // Situation entsteht, sind das zwei verschiedene Zahlen.
  const anzahlKategorien = new Set(sections.map((s) => s.kategorie)).size;
  const untertitel = query
    ? `Sätze zu „${query}" (${sections.reduce((n, s) => n + s.phrases.length, 0)} Treffer)`
    : `Sätze – ${
        gewaehlteNamen.length > 3
          ? `${gewaehlteNamen.length} Situationen`
          : gewaehlteNamen.join(', ')
      } (aus ${anzahlKategorien} ${anzahlKategorien === 1 ? 'Kategorie' : 'Kategorien'})`;

  return (
    <View style={[styles.container, { backgroundColor: theme.pageBg, paddingTop: insets.top }]}>
      <View style={styles.header}>
        <Pressable
          onPress={() => router.back()}
          style={styles.backBtn}
          accessibilityRole="button"
          accessibilityLabel="Zurück"
        >
          <Text style={[styles.backGlyph, { color: theme.text }]}>‹</Text>
        </Pressable>
        <Text style={[styles.title, { color: theme.text }]}>Survival-Situationen</Text>
      </View>

      {/* Was gesucht wurde, in einer Zeile - nach Simons Vorlage
          "Saetze - Vorstellen (aus 2 Kategorien)". Ohne sie sieht man auf
          dem Ergebnis-Screen nicht mehr, wonach man gesucht hat, sobald
          mehrere Situationen im Spiel sind. */}
      {!loading && !loadError && sections.length > 0 ? (
        <Text style={[styles.untertitel, { color: theme.sub }]}>{untertitel}</Text>
      ) : null}

      {loading && (
        <View style={styles.centerBox}>
          <ActivityIndicator color={ACCENT_ORANGE} />
        </View>
      )}
      {!loading && loadError && (
        <View style={styles.centerBox}>
          <Text style={{ color: theme.sub, textAlign: 'center', paddingHorizontal: 20 }}>{loadError}</Text>
        </View>
      )}

      {!loading && !loadError && (
        <ScrollView contentContainerStyle={styles.scrollContent}>
          {sections.length === 0 && (
            <Text style={{ color: theme.sub, fontSize: 14, paddingVertical: 20 }}>
              {query ? 'Keine Treffer gefunden.' : 'Keine Themen ausgewählt. Geh zurück und wähle mindestens eine Box aus.'}
            </Text>
          )}
          {sections.map((sec, si) => (
            <View key={si}>
              <Text style={styles.sectionTitle}>
                {sec.situation}
                {sec.kategorie ? (
                  <Text style={[styles.sectionKategorie, { color: theme.sub }]}>{` (${sec.kategorie})`}</Text>
                ) : null}
              </Text>
              {sec.phrases.map((ph) => (
                <PhraseCard
                  key={ph.id}
                  phrase={ph}
                  dark={darkMode}
                  saved={!!saved[ph.id]}
                  onToggleSave={() => toggleSaved(ph.id, ph)}
                  onSpeak={() =>
                    speakSentence(
                      { text: ph.text, audioUrl: ph.audioUrl },
                      { languageId: phraseLanguageId(ph.id) },
                    )
                  }
                />
              ))}
            </View>
          ))}
        </ScrollView>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  header: { flexDirection: 'row', alignItems: 'center', gap: 10, padding: 16, paddingBottom: 4 },
  backBtn: { width: 32, height: 32, alignItems: 'center', justifyContent: 'center' },
  backGlyph: { fontSize: 26 },
  title: { fontWeight: '800', fontSize: 20 },
  untertitel: { fontSize: 13, fontWeight: '700', paddingHorizontal: 18, paddingBottom: 4 },
  centerBox: { alignItems: 'center', justifyContent: 'center', paddingVertical: 40 },
  scrollContent: { padding: 18, gap: 10 },
  sectionTitle: { color: ACCENT_ORANGE, fontWeight: '800', fontSize: 12, letterSpacing: 0.6, marginVertical: 10, textTransform: 'uppercase' },
  // Die Kategorie tritt zurueck: sie sagt, WO der Satz herkommt, waehrend die
  // Situation sagt, wonach gesucht wurde. Kein Grossbuchstabensatz, damit die
  // Klammer nicht mit der Ueberschrift um Aufmerksamkeit streitet.
  sectionKategorie: { fontWeight: '700', letterSpacing: 0, textTransform: 'none' },
});
