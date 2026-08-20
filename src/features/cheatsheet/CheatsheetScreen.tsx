import { useEffect, useState } from 'react';
import {
  ActivityIndicator,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import { router } from 'expo-router';
import { Feather } from '@expo/vector-icons';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useAppState } from '../../state/AppState';
import { HeaderMenu } from '../../components';
import { CATEGORIES } from '../../data/categories';
import { CheatsheetCategoryGroup, loadCheatsheetGroups } from '../../data/cheatsheetContent';
import {
  getTheme,
  ACCENT_BLUE,
  RADIUS,
  SPACING,
  FONT_SIZE,
  FONT_FAMILY,
  LINE_HEIGHT,
} from '../../theme/tokens';

// S6 - Survival-Notizen (Aufbau nach Simons Vorlage vom 2026-08-20).
//
// Von oben nach unten: Kopfzeile, der grosse Knopf zu den gespeicherten
// Saetzen, eine Zeile mit Favoriten-Zaehler und Suche, der Kasten mit den
// Themen zum Auswaehlen, unten der Suchen-Knopf.
//
// Kein Lernmodus, sondern ein Nachschlagewerk: man waehlt Themen und laesst
// sich die passenden Saetze zeigen. Inhalt kommt aus denselben Supabase-
// Saetzen wie die Uebung und ist offline-cachefaehig (siehe
// data/phrasebookContent.ts).
//
// Das Suchfeld ist eingeklappt und faehrt erst auf Tippen aus - die Vorlage
// zeigt an seiner Stelle nur eine Pille. Die Freitextsuche selbst ist
// unveraendert (siehe searchCheatsheetSentences in cheatsheetContent.ts).

export function CheatsheetScreen() {
  const { darkMode, selectedThemes, toggleThemeSelect, saved, purchased, targetLanguageId } =
    useAppState();
  const theme = getTheme(darkMode);
  // Der native Header ist app-weit aus - ohne diesen Einsatz liegt die
  // Ueberschrift unter der Statusleiste bzw. der Kamera-Insel.
  const insets = useSafeAreaInsets();

  const [query, setQuery] = useState('');
  const [searchOpen, setSearchOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const [loadError, setLoadError] = useState<string | null>(null);
  const [groups, setGroups] = useState<CheatsheetCategoryGroup[]>([]);
  const [offline, setOffline] = useState(false);

  const favoritesCount = Object.values(saved).filter(Boolean).length;
  const selectedCount = Object.keys(selectedThemes).length;

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
        setOffline(result.fromCache);
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

  const doTextSearch = () => {
    if (!query.trim()) return;
    router.push({ pathname: '/cheatsheet/search-results', params: { query: query.trim() } });
  };

  return (
    <View style={[styles.container, { backgroundColor: theme.pageBg, paddingTop: insets.top }]}>
      <View style={styles.header}>
        {/* Zurueck fuehrt hier zum Startscreen, NICHT in die Historie
            (Nutzer-Entscheidung 2026-08-20): Survival ist ein Tab, kein
            aufgerufener Unterscreen. Nur die Tab-Screens verhalten sich so -
            alle uebrigen (Kategorie, Shop, Uebung, Favoriten ...) gehen
            weiterhin dorthin zurueck, wo man hergekommen ist. */}
        <Pressable
          onPress={() => router.navigate('/')}
          hitSlop={10}
          accessibilityRole="button"
          accessibilityLabel="Zum Startscreen"
          style={styles.headerSide}
        >
          <Feather name="arrow-left" size={24} color={theme.text} />
        </Pressable>
        <Text style={[styles.title, { color: theme.text }]}>Survival-Notizen</Text>
        <View style={styles.headerSide}>
          <HeaderMenu dark={darkMode} />
        </View>
      </View>

      {offline ? (
        <Text style={[styles.offline, { color: theme.sub }]}>
          📴 Offline — letzter gespeicherter Stand
        </Text>
      ) : null}

      {/* Der grosse Weg zu den gespeicherten Saetzen. */}
      <Pressable
        onPress={() => router.push('/cheatsheet/favorites')}
        accessibilityRole="button"
        accessibilityLabel={`Gespeicherte Sätze, ${favoritesCount}`}
        style={({ pressed }) => [
          styles.savedButton,
          {
            borderColor: theme.text,
            backgroundColor: pressed ? theme.subtleFill : theme.cardBg,
          },
        ]}
      >
        <Feather name="bookmark" size={18} color={theme.text} />
        <Text style={[styles.savedButtonText, { color: theme.text }]}>Gespeicherte Sätze</Text>
      </Pressable>

      <View style={styles.pillRow}>
        <Pressable
          onPress={() => router.push('/cheatsheet/favorites')}
          accessibilityRole="button"
          accessibilityLabel={`Favoriten, ${favoritesCount}`}
          style={({ pressed }) => [
            styles.pill,
            { borderColor: theme.border, backgroundColor: theme.cardBg, opacity: pressed ? 0.7 : 1 },
          ]}
        >
          <Text style={[styles.pillText, { color: theme.text }]}>
            Favoriten (Anzahl {favoritesCount})
          </Text>
        </Pressable>

        <Pressable
          onPress={() => setSearchOpen((o) => !o)}
          accessibilityRole="button"
          accessibilityLabel="Suchen"
          accessibilityHint="Öffnet das Suchfeld"
          aria-expanded={searchOpen}
          accessibilityState={{ expanded: searchOpen }}
          style={({ pressed }) => [
            styles.pill,
            { borderColor: theme.border, backgroundColor: theme.cardBg, opacity: pressed ? 0.7 : 1 },
          ]}
        >
          <Feather name="search" size={15} color={theme.text} />
          <Text style={[styles.pillText, { color: theme.text }]}>Suchen</Text>
        </Pressable>
      </View>

      {searchOpen ? (
        <TextInput
          value={query}
          onChangeText={setQuery}
          onSubmitEditing={doTextSearch}
          autoFocus
          returnKeyType="search"
          placeholder={'Wo brauchst du gerade Hilfe? (z.B. „Arzt“)'}
          placeholderTextColor={theme.sub}
          accessibilityLabel="Suchbegriff"
          style={[
            styles.searchInput,
            { borderColor: theme.border, backgroundColor: theme.cardBg, color: theme.text },
          ]}
        />
      ) : null}

      {loading ? (
        <View style={styles.centerBox}>
          <ActivityIndicator color={ACCENT_BLUE} />
        </View>
      ) : loadError ? (
        <View style={styles.centerBox}>
          <Text style={{ color: theme.sub, textAlign: 'center', paddingHorizontal: SPACING.xl }}>
            {loadError}
          </Text>
        </View>
      ) : (
        // Der umrandete Kasten aus der Vorlage. Er scrollt innen, damit der
        // Suchen-Knopf unten stehen bleibt.
        <View style={[styles.themeBox, { borderColor: theme.border }]}>
          <ScrollView contentContainerStyle={styles.themeBoxContent}>
            {groups.map((grp) => (
              <View key={grp.categoryId} style={styles.group}>
                <Pressable
                  onPress={() => router.push(`/cheatsheet/${grp.categoryId}`)}
                  accessibilityRole="button"
                  accessibilityLabel={
                    grp.allSentences.length > 0
                      ? `${grp.title}, ${grp.allSentences.length} Sätze`
                      : `${grp.title}, noch keine Sätze`
                  }
                >
                  <Text style={[styles.groupTitle, { color: theme.text }]}>{grp.title}</Text>
                </Pressable>

                {grp.allSentences.length === 0 ? (
                  <Text style={[styles.placeholder, { color: theme.sub }]}>
                    Noch keine Sätze in dieser Kategorie
                  </Text>
                ) : null}

                <View style={styles.labelGrid}>
                  {grp.scenarios.map((sc) => {
                    const key = `${grp.categoryId}_${sc.key}`;
                    const selected = !!selectedThemes[key];
                    return (
                      <Pressable
                        key={key}
                        onPress={() =>
                          toggleThemeSelect(key, {
                            groupId: grp.categoryId,
                            groupTitle: grp.title,
                            themeLabel: sc.label,
                            key,
                          })
                        }
                        accessibilityRole="button"
                        accessibilityLabel={`${sc.label}, ${sc.sentences.length} Sätze`}
                        // Ausgewaehlt wird sonst nur ueber Rahmen- und
                        // Fuellfarbe gezeigt.
                        accessibilityState={{ selected }}
                        style={[
                          styles.label,
                          {
                            borderColor: selected ? ACCENT_BLUE : theme.border,
                            backgroundColor: selected ? theme.modeBg : theme.cardBg,
                          },
                        ]}
                      >
                        <Text
                          numberOfLines={1}
                          style={[styles.labelText, { color: selected ? ACCENT_BLUE : theme.text }]}
                        >
                          {sc.label}
                        </Text>
                      </Pressable>
                    );
                  })}
                </View>
              </View>
            ))}
          </ScrollView>
        </View>
      )}

      <View style={styles.bottom}>
        <Pressable
          disabled={selectedCount === 0}
          onPress={() => router.push('/cheatsheet/search-results')}
          accessibilityRole="button"
          accessibilityLabel={
            selectedCount === 0
              ? 'Suchen, erst ein Thema auswählen'
              : `Suchen, ${selectedCount} Themen ausgewählt`
          }
          accessibilityState={{ disabled: selectedCount === 0 }}
          style={({ pressed }) => [
            styles.searchButton,
            {
              borderColor: theme.text,
              backgroundColor: pressed ? theme.subtleFill : theme.cardBg,
              opacity: selectedCount === 0 ? 0.45 : 1,
            },
          ]}
        >
          <Text style={[styles.searchButtonText, { color: theme.text }]}>
            {selectedCount === 0 ? 'Suchen' : `Suchen (${selectedCount})`}
          </Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: SPACING.lg,
    paddingTop: SPACING.sm,
    paddingBottom: SPACING.md,
  },
  headerSide: { width: 44, alignItems: 'flex-start' },
  title: {
    flex: 1,
    fontFamily: FONT_FAMILY.serif,
    fontSize: FONT_SIZE.h2,
    lineHeight: LINE_HEIGHT.h2,
    textAlign: 'center',
  },
  offline: {
    fontSize: FONT_SIZE.caption,
    fontWeight: '700',
    textAlign: 'center',
    marginBottom: SPACING.sm,
  },
  savedButton: {
    alignSelf: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    gap: SPACING.sm,
    borderWidth: 2,
    borderRadius: RADIUS.pill,
    paddingVertical: SPACING.md,
    paddingHorizontal: SPACING.xl,
  },
  savedButtonText: { fontSize: FONT_SIZE.body, fontWeight: '800' },
  pillRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: SPACING.md,
    marginTop: SPACING.md,
  },
  pill: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: SPACING.xs,
    borderWidth: 1.5,
    borderRadius: RADIUS.pill,
    paddingVertical: SPACING.sm,
    paddingHorizontal: SPACING.md,
    minHeight: 36,
  },
  pillText: { fontSize: FONT_SIZE.caption, fontWeight: '700' },
  searchInput: {
    marginTop: SPACING.md,
    marginHorizontal: SPACING.lg,
    borderWidth: 1.5,
    borderRadius: RADIUS.pill,
    paddingVertical: SPACING.md,
    paddingHorizontal: SPACING.lg,
    fontSize: FONT_SIZE.body,
  },
  centerBox: { flex: 1, alignItems: 'center', justifyContent: 'center' },
  themeBox: {
    flex: 1,
    marginTop: SPACING.lg,
    marginHorizontal: SPACING.lg,
    borderWidth: 1.5,
    borderRadius: RADIUS.md,
    overflow: 'hidden',
  },
  themeBoxContent: { padding: SPACING.md, paddingBottom: SPACING.lg },
  group: { marginBottom: SPACING.lg },
  groupTitle: {
    fontSize: FONT_SIZE.body,
    lineHeight: LINE_HEIGHT.body,
    fontWeight: '800',
    marginBottom: SPACING.sm,
  },
  placeholder: { fontSize: FONT_SIZE.caption, fontStyle: 'italic', marginBottom: SPACING.sm },
  labelGrid: { flexDirection: 'row', flexWrap: 'wrap', gap: SPACING.sm },
  label: {
    borderWidth: 1.5,
    borderRadius: RADIUS.pill,
    paddingVertical: SPACING.sm,
    paddingHorizontal: SPACING.md,
    minHeight: 36,
    justifyContent: 'center',
  },
  labelText: { fontSize: FONT_SIZE.caption, fontWeight: '700' },
  bottom: { padding: SPACING.lg, alignItems: 'center' },
  searchButton: {
    borderWidth: 2,
    borderRadius: RADIUS.pill,
    paddingVertical: SPACING.md,
    paddingHorizontal: SPACING.xxl,
    minWidth: 140,
    alignItems: 'center',
  },
  searchButtonText: { fontSize: FONT_SIZE.body, fontWeight: '800' },
});
