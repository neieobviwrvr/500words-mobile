import { useEffect, useMemo, useState } from 'react';
import { ActivityIndicator, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { router } from 'expo-router';
import { Feather } from '@expo/vector-icons';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useAppState } from '../../state/AppState';
import { HeaderMenu } from '../../components';
import { CATEGORIES } from '../../data/categories';
import {
  CheatsheetCategoryGroup,
  Phrase,
  loadCheatsheetGroups,
  phraseLanguageId,
} from '../../data/cheatsheetContent';
import { speakSentence } from '../tts/speak';
import { PhraseCard } from './PhraseCard';
import { SuchFeld } from './SuchFeld';
import {
  getTheme,
  ACCENT_BLUE,
  RADIUS,
  SPACING,
  FONT_SIZE,
  FONT_FAMILY,
  LINE_HEIGHT,
} from '../../theme/tokens';

// S6 - Survival-Notizen (umgebaut 2026-08-22 nach Simons drei Vorlagen).
//
// **Was sich umgedreht hat:** vorher war die Themen-Auswahl der Screen und
// die gespeicherten Saetze lagen hinter einem Knopf. Jetzt SIND die
// gespeicherten Saetze der Screen, und die Suche klappt darueber auf.
//
// Das ist die richtige Richtung fuer ein Notfall-Nachschlagewerk: wer im
// Laden steht und schnell etwas braucht, hat es sich vorher gemerkt. Der
// haeufige Fall ist Nachsehen, der seltene ist Suchen - vorher war es
// andersherum verdrahtet.
//
// Aufgeklappt (Bild 2) erscheinen drei Dinge: das Suchfeld mit laufendem
// Beispieltext (siehe SuchFeld.tsx), der scrollbare Kasten mit allen
// gekauften Kategorien und ihren Situationen, und unten im Kasten ein
// zweiter Suchen-Knopf. Beide Knoepfe tun dasselbe - Simons Vorgabe: "wenn
// er auf suchen unten im Block oder oben neben dem Eingabefeld klickt".

export function CheatsheetScreen() {
  const {
    darkMode,
    selectedThemes,
    toggleThemeSelect,
    saved,
    savedMeta,
    toggleSaved,
    purchased,
    targetLanguageId,
  } = useAppState();
  const theme = getTheme(darkMode);
  // Der native Header ist app-weit aus - ohne diesen Einsatz liegt die
  // Ueberschrift unter der Statusleiste bzw. der Kamera-Insel.
  const insets = useSafeAreaInsets();

  const [query, setQuery] = useState('');
  const [sucheOffen, setSucheOffen] = useState(false);
  const [loading, setLoading] = useState(true);
  const [loadError, setLoadError] = useState<string | null>(null);
  const [groups, setGroups] = useState<CheatsheetCategoryGroup[]>([]);
  const [offline, setOffline] = useState(false);

  const gewaehlt = Object.keys(selectedThemes).length;

  // Der Kasten wird erst gebraucht, wenn die Suche offen ist - vorher gar
  // nicht zu laden spart beim haeufigen Fall (nur nachsehen) einen
  // Netzaufruf und die Wartezeit davor.
  useEffect(() => {
    if (!sucheOffen) return;
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
  }, [targetLanguageId, purchased, sucheOffen]);

  /**
   * Die gespeicherten Saetze, nach Kategorie gebuendelt.
   *
   * Quelle ist allein `savedMeta` - der Satz wurde beim Merken vollstaendig
   * mitgeschrieben und wird NICHT neu geladen. Genau deshalb funktioniert
   * dieser Screen offline und auch dann noch, wenn eine Kategorie im Abo
   * abgewaehlt wurde: gemerkt ist gemerkt (CLAUDE.md, Cheat-Sheet als
   * Offline-Notfallhandbuch).
   *
   * **Nur die Sprache zeigen, in der man gerade lernt** (Fehlerbericht
   * 2026-08-23: ein auf Chinesisch gemerkter Satz stand nach dem Wechsel auf
   * Schwedisch weiter in der Liste). `saved`/`savedMeta` sind SPRACHUEBERGREIFEND
   * ein einziger Speicher - jede Phrase-ID traegt ihre Sprache als Praefix
   * (`phraseId()`: "sprache:tabelle:id"), gefiltert wird deshalb rein bei der
   * ANZEIGE. Der Satz bleibt dabei gespeichert: wer zurueck zu Chinesisch
   * wechselt, sieht ihn wieder - nichts geht verloren, es wird nur nicht
   * gleichzeitig mit einer anderen Sprache vermischt gezeigt.
   */
  const gemerkt = useMemo(() => {
    const nach = new Map<string, Phrase[]>();
    for (const id of Object.keys(saved)) {
      if (!saved[id]) continue;
      if (phraseLanguageId(id) !== targetLanguageId) continue;
      const p = savedMeta[id];
      if (!p) continue;
      // Aeltere Eintraege haben noch keine `category` - sie stammen aus der
      // Zeit vor dem 2026-08-21. Sie kommen unter ihren Anzeigenamen statt
      // unter einer leeren Ueberschrift.
      const schluessel = p.category ?? p.context ?? 'Gespeichert';
      const liste = nach.get(schluessel) ?? [];
      liste.push(p);
      nach.set(schluessel, liste);
    }
    return [...nach.entries()]
      .map(([id, phrases]) => ({
        id,
        titel:
          CATEGORIES.find((c) => c.id === id)?.name ??
          (id === 'grundwortschatz' ? 'Grundwortschatz' : id),
        phrases,
      }))
      // Grundwortschatz immer zuoberst, der Rest alphabetisch (Regel aus dem
      // Survival-Umbau vom 2026-08-21). Ohne das haengt die Reihenfolge
      // daran, was der Nutzer zufaellig zuerst gemerkt hat.
      .sort((a, b) =>
        a.id === 'grundwortschatz' ? -1 : b.id === 'grundwortschatz' ? 1 : a.titel.localeCompare(b.titel),
      );
  }, [saved, savedMeta, targetLanguageId]);

  const suchen = () => {
    // Freitext schlaegt Auswahl: wer etwas eingetippt hat, meint das.
    if (query.trim()) {
      router.push({ pathname: '/cheatsheet/search-results', params: { query: query.trim() } });
      return;
    }
    if (gewaehlt > 0) router.push('/cheatsheet/search-results');
  };

  const kannSuchen = query.trim().length > 0 || gewaehlt > 0;

  return (
    <View style={[styles.container, { backgroundColor: theme.pageBg, paddingTop: insets.top }]}>
      <View style={styles.header}>
        {/* Zurueck fuehrt hier zum Startscreen, NICHT in die Historie
            (Nutzer-Entscheidung 2026-08-20): Survival ist ein Tab, kein
            aufgerufener Unterscreen. */}
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

      <ScrollView contentContainerStyle={styles.scroll} keyboardShouldPersistTaps="handled">
        {/* Kopfzeile der Liste. Zugeklappt steht links die Ueberschrift und
            rechts die Lupe; aufgeklappt nimmt das Suchfeld den Platz der
            Ueberschrift ein - genau der Wechsel aus Bild 1 zu Bild 2. */}
        <View style={styles.suchZeile}>
          {sucheOffen ? (
            <SuchFeld wert={query} onChange={setQuery} onAbsenden={suchen} dark={darkMode} />
          ) : (
            <Text style={[styles.abschnitt, { color: theme.text }]}>Gespeicherte Sätze</Text>
          )}

          <Pressable
            onPress={() => (sucheOffen ? suchen() : setSucheOffen(true))}
            accessibilityRole="button"
            accessibilityLabel={sucheOffen ? 'Suche starten' : 'Suchen'}
            accessibilityHint={
              sucheOffen ? undefined : 'Öffnet das Suchfeld und die Auswahl der Situationen'
            }
            accessibilityState={{ expanded: sucheOffen, disabled: sucheOffen && !kannSuchen }}
            disabled={sucheOffen && !kannSuchen}
            style={({ pressed }) => [
              styles.lupe,
              {
                borderColor: theme.border,
                backgroundColor: theme.cardBg,
                opacity: pressed ? 0.7 : sucheOffen && !kannSuchen ? 0.45 : 1,
              },
            ]}
          >
            <Feather name="search" size={15} color={theme.text} />
            <Text style={[styles.lupeText, { color: theme.text }]}>Suchen</Text>
          </Pressable>
        </View>

        {sucheOffen ? (
          <>
            {offline ? (
              <Text style={[styles.offline, { color: theme.sub }]}>
                📴 Offline — letzter gespeicherter Stand
              </Text>
            ) : null}

            <View style={[styles.kasten, { borderColor: theme.border }]}>
              {loading ? (
                <View style={styles.mitte}>
                  <ActivityIndicator color={ACCENT_BLUE} />
                </View>
              ) : loadError ? (
                <View style={styles.mitte}>
                  <Text style={{ color: theme.sub, textAlign: 'center' }}>{loadError}</Text>
                </View>
              ) : (
                // Innen scrollbar mit fester Hoehe: der Suchen-Knopf soll am
                // Fuss des Kastens stehen bleiben, auch bei vielen
                // Kategorien. Zugleich bleibt die Satzliste darunter
                // erreichbar, statt vom Kasten aus dem Bild geschoben zu
                // werden.
                <ScrollView
                  style={styles.kastenScroll}
                  contentContainerStyle={styles.kastenInhalt}
                  nestedScrollEnabled
                  keyboardShouldPersistTaps="handled"
                >
                  {groups.map((grp) => (
                    <View key={grp.categoryId} style={styles.gruppe}>
                      <Text style={[styles.gruppenTitel, { color: theme.text }]}>{grp.title}</Text>

                      {grp.scenarios.length === 0 ? (
                        <Text style={[styles.leer, { color: theme.sub }]}>
                          Noch keine Sätze in dieser Kategorie
                        </Text>
                      ) : (
                        <View style={styles.marken}>
                          {grp.scenarios.map((sc) => {
                            const key = `${grp.categoryId}_${sc.key}`;
                            const an = !!selectedThemes[key];
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
                                // Ausgewaehlt wird sonst nur ueber Rahmen-
                                // und Fuellfarbe gezeigt.
                                accessibilityState={{ selected: an }}
                                style={[
                                  styles.marke,
                                  {
                                    borderColor: an ? ACCENT_BLUE : theme.border,
                                    backgroundColor: an ? theme.modeBg : theme.cardBg,
                                  },
                                ]}
                              >
                                <Text
                                  numberOfLines={1}
                                  style={[styles.markeText, { color: an ? ACCENT_BLUE : theme.text }]}
                                >
                                  {sc.label}
                                </Text>
                              </Pressable>
                            );
                          })}
                        </View>
                      )}
                    </View>
                  ))}
                </ScrollView>
              )}

              <View style={[styles.kastenFuss, { borderTopColor: theme.border }]}>
                <Pressable
                  onPress={suchen}
                  disabled={!kannSuchen}
                  accessibilityRole="button"
                  accessibilityLabel={
                    kannSuchen
                      ? `Suchen, ${gewaehlt} Situationen ausgewählt`
                      : 'Suchen, erst eine Situation auswählen'
                  }
                  accessibilityState={{ disabled: !kannSuchen }}
                  style={({ pressed }) => [
                    styles.suchKnopf,
                    {
                      borderColor: theme.text,
                      backgroundColor: theme.cardBg,
                      opacity: !kannSuchen ? 0.45 : pressed ? 0.7 : 1,
                    },
                  ]}
                >
                  <Text style={[styles.suchKnopfText, { color: theme.text }]}>
                    {gewaehlt > 0 ? `Suchen (${gewaehlt})` : 'Suchen'}
                  </Text>
                </Pressable>
              </View>
            </View>

            <Text style={[styles.abschnitt, { color: theme.text }]}>Gespeicherte Sätze</Text>
          </>
        ) : null}

        {gemerkt.length === 0 ? (
          <Text style={[styles.leerHinweis, { color: theme.sub }]}>
            Noch nichts gemerkt. Tippe beim Lernen oder in der Suche auf das Lesezeichen — der Satz
            landet hier und bleibt auch offline abrufbar.
          </Text>
        ) : (
          gemerkt.map((grp) => (
            <View key={grp.id} style={styles.gemerktGruppe}>
              <Text style={[styles.gemerktTitel, { color: theme.sub }]}>{grp.titel}</Text>
              {grp.phrases.map((p) => (
                <PhraseCard
                  key={p.id}
                  phrase={p}
                  dark={darkMode}
                  saved={!!saved[p.id]}
                  onToggleSave={() => toggleSaved(p.id, p)}
                  onSpeak={() =>
                    // Sprache aus der Satz-ID ableiten - ohne sie liest die
                    // Systemstimme alles auf Deutsch vor (Fehler vom
                    // 2026-08-21, siehe phraseLanguageId).
                    speakSentence(
                      { text: p.text, audioUrl: p.audioUrl },
                      { languageId: phraseLanguageId(p.id) },
                    )
                  }
                />
              ))}
            </View>
          ))
        )}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: SPACING.lg,
    paddingBottom: SPACING.sm,
  },
  headerSide: { width: 40, alignItems: 'flex-start' },
  title: {
    flex: 1,
    textAlign: 'center',
    fontFamily: FONT_FAMILY.serif,
    fontSize: FONT_SIZE.title,
    lineHeight: LINE_HEIGHT.title,
  },
  scroll: { paddingHorizontal: SPACING.lg, paddingBottom: SPACING.xl, gap: SPACING.sm },

  suchZeile: { flexDirection: 'row', alignItems: 'center', gap: SPACING.sm, minHeight: 40 },
  abschnitt: { flex: 1, fontSize: FONT_SIZE.body, fontWeight: '800' },
  lupe: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    borderWidth: 1.5,
    borderRadius: RADIUS.pill,
    paddingVertical: 8,
    paddingHorizontal: SPACING.md,
    flexShrink: 0,
  },
  lupeText: { fontSize: FONT_SIZE.caption, fontWeight: '700' },

  offline: { fontSize: FONT_SIZE.caption, fontWeight: '700' },
  kasten: { borderWidth: 1.5, borderRadius: RADIUS.md, overflow: 'hidden' },
  // Feste Hoehe, damit der Fuss sichtbar bleibt und die Liste darunter nicht
  // aus dem Bild rutscht.
  kastenScroll: { maxHeight: 260 },
  kastenInhalt: { padding: SPACING.md, gap: SPACING.md },
  mitte: { alignItems: 'center', justifyContent: 'center', paddingVertical: SPACING.xl },
  gruppe: { gap: SPACING.sm },
  gruppenTitel: { fontSize: FONT_SIZE.caption, fontWeight: '800' },
  leer: { fontSize: FONT_SIZE.caption, fontStyle: 'italic' },
  marken: { flexDirection: 'row', flexWrap: 'wrap', gap: SPACING.sm },
  marke: {
    borderWidth: 1.5,
    borderRadius: RADIUS.pill,
    paddingVertical: 6,
    paddingHorizontal: SPACING.md,
    // Drei je Zeile wie in der Vorlage, ohne feste Spaltenbreite: kurze
    // Namen duerfen schmaler sein, lange bekommen mehr.
    maxWidth: '100%',
  },
  markeText: { fontSize: FONT_SIZE.caption, fontWeight: '700' },
  kastenFuss: { borderTopWidth: 1, padding: SPACING.md, alignItems: 'center' },
  suchKnopf: {
    borderWidth: 1.5,
    borderRadius: RADIUS.pill,
    paddingVertical: 8,
    paddingHorizontal: SPACING.xl,
  },
  suchKnopfText: { fontSize: FONT_SIZE.caption, fontWeight: '800' },

  leerHinweis: { fontSize: FONT_SIZE.caption, lineHeight: LINE_HEIGHT.caption, paddingTop: SPACING.md },
  gemerktGruppe: { gap: SPACING.sm },
  gemerktTitel: { fontSize: FONT_SIZE.caption, fontWeight: '800', marginTop: SPACING.sm },
});
