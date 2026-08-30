import { useState } from 'react';
import { Pressable, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { router } from 'expo-router';
import { useAppState } from '../../state/AppState';
import { getTheme, ACCENT_BLUE, ACCENT_GREEN } from '../../theme/tokens';

// Referral-/Bewertungs-/Feedback-Programm - reine Platzhalter-Seite
// (2026-08-06, Nutzer-Anforderung), noch ohne echte Backend-Logik. Ueber
// einen einzelnen Button in einer Seitenleiste erreichbar (siehe
// PathScreen.tsx). Jeder Bereich erklaert ZUERST, was man fuer die Aktion
// bekommt und wann die Belohnung greift, bevor die eigentliche
// (noch nicht funktionale) UI dafuer kommt.
//
// Wichtiger technischer Hinweis (siehe Memory payment-backlog-referral-rating):
// Ein selbstgebautes Sterne+Kommentar-Popup kann NICHT direkt eine echte
// oeffentliche App-Store-/Play-Store-Bewertung samt Text absenden - Apple/
// Google erlauben das technisch nicht (nur ein natives Sterne-only-Popup
// ueber die offizielle API). Deshalb hier zwei getrennte Aktionen:
// "Bewerten" (fuehrt spaeter zum echten Store-Prompt) und "Feedback geben"
// (Text geht an unseren eigenen Support-Kanal, nicht an den Store).

/**
 * Belohnungsstufen des Referral-Programms (2026-08-30, Simons Vorlage im
 * Duolingo-Stil: eine Leiste mit Meilensteinen statt einer Textzeile).
 *
 * **Nur die erste Stufe ist beschlossen.** Drei geworbene Nutzer, die ein
 * Konto anlegen - so steht es seit dem 2026-08-20 in CLAUDE.md, und die
 * Belohnung sind COINS (nicht mehr "eine Zusatzkategorie deiner Wahl", und
 * ohne die frueher geplante Aktivitaets-Schwelle).
 *
 * Die Stufen 5/9/12 und saemtliche Coin-Betraege sind ein VORSCHLAG nach
 * dem Muster der Vorlage - sie sind bewusst hier als Liste gebuendelt,
 * damit das Festlegen spaeter eine Zahlenaenderung bleibt und kein Umbau.
 *
 * Neun Freunde geben ein Geschenk statt Coins: die taegliche Zufallsbox
 * hinter dem Geschenk-Knopf ist ohnehin als Belohnungsform vorgesehen
 * (siehe Coins-Abschnitt in CLAUDE.md), und eine reine Zahlenleiter waere
 * langweiliger als eine mit einem Ausreisser.
 */
const REFERRAL_STUFEN = [
  { schwelle: 3, symbol: '+3', beschreibung: '3 Coins' },
  { schwelle: 5, symbol: '+5', beschreibung: '5 Coins' },
  { schwelle: 9, symbol: '🎁', beschreibung: 'eine Zufallsbox' },
  { schwelle: 12, symbol: '+15', beschreibung: '15 Coins' },
] as const;

export function RewardsScreen() {
  const { darkMode } = useAppState();
  const theme = getTheme(darkMode);
  // Es gibt noch KEINE geworbenen Nutzer und keinen Weg, welche zu haben:
  // Referral braucht Konten, und die brauchen den Google-OAuth-Client, den
  // nur Simon anlegen kann (siehe CLAUDE.md/Backlog). Der Wert steht
  // deshalb fest auf 0 - eine Leiste, die Fortschritt vortaeuscht, waere
  // schlimmer als eine leere.
  const geworben = 0;
  // Der native Header ist app-weit aus (app/_layout.tsx), jeder Screen
  // zeichnet seinen eigenen. Ohne diesen Einsatz liegt die Ueberschrift unter
  // der Statusleiste bzw. der Kamera-Insel und wird verdeckt.
  const insets = useSafeAreaInsets();
  const [feedbackText, setFeedbackText] = useState('');

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
        <Text style={[styles.title, { color: theme.text }]}>Freunde, Bewertung & Feedback</Text>
      </View>

      <ScrollView contentContainerStyle={styles.scrollContent}>
        {/* Referral */}
        <View style={[styles.card, { borderColor: theme.border, backgroundColor: theme.cardBg }]}>
          <Text style={[styles.cardTitle, { color: theme.text }]}>🔗 Freunde einladen</Text>
          <Text style={[styles.explain, { color: theme.sub }]}>
            Das bekommst du: Coins, mit denen du einzelne Themen freischaltest.{'\n'}
            Wann die Belohnung greift: sobald geworbene Freunde über deinen Link ein Konto anlegen.
          </Text>

          {/* Meilenstein-Leiste (2026-08-30, Simons Vorlage). Die Linie liegt
              HINTER den Kreisen und reicht bewusst nur von der Mitte des
              ersten bis zur Mitte des letzten - sonst liefe sie an beiden
              Enden ins Leere. */}
          <View style={styles.stufenReihe} accessibilityRole="progressbar" accessibilityLabel={`${geworben} von ${REFERRAL_STUFEN[REFERRAL_STUFEN.length - 1].schwelle} Freunden geworben`}>
            <View style={[styles.stufenLinie, { backgroundColor: theme.border }]} />
            {REFERRAL_STUFEN.map((s) => {
              const erreicht = geworben >= s.schwelle;
              return (
                <View key={s.schwelle} style={styles.stufe}>
                  {/* Erreicht = gruen. Gruen ist appweit die Farbe fuer
                      Erfolg und nirgends sonst - deshalb ist der grosse
                      Knopf unten NICHT gruen, anders als in der Vorlage. */}
                  <View
                    style={[
                      styles.stufenKreis,
                      {
                        borderColor: erreicht ? ACCENT_GREEN : theme.border,
                        backgroundColor: erreicht ? ACCENT_GREEN : theme.cardBg,
                      },
                    ]}
                  >
                    <Text style={[styles.stufenSymbol, { color: erreicht ? '#FFFFFF' : theme.sub }]}>{s.symbol}</Text>
                  </View>
                  <Text style={[styles.stufenZahl, { color: erreicht ? theme.text : theme.sub }]}>{s.schwelle}</Text>
                </View>
              );
            })}
          </View>
          <Text style={[styles.stufenLegende, { color: theme.sub }]}>
            {REFERRAL_STUFEN.map((s) => `${s.schwelle} Freunde → ${s.beschreibung}`).join(' · ')}
          </Text>

          {/* Referral-Code. Es gibt noch keinen - er haengt am Konto, das es
              nicht gibt. Statt einen Fantasie-Code zu zeigen, den niemand
              einloesen kann, steht hier ehrlich, woran es liegt. */}
          <View style={[styles.codeFeld, { borderColor: theme.border, backgroundColor: theme.pathBoxBg }]}>
            <Text style={[styles.codeText, { color: theme.sub }]}>Dein Code kommt mit deinem Konto</Text>
            <Text style={[styles.codeSymbol, { color: theme.sub }]}>⧉</Text>
          </View>

          <Pressable
            disabled
            accessibilityRole="button"
            accessibilityLabel="Lade deine Freunde ein"
            accessibilityHint="Noch nicht verfügbar"
            accessibilityState={{ disabled: true }}
            style={[styles.actionButton, { borderColor: ACCENT_BLUE, opacity: 0.5 }]}
          >
            <Text style={{ color: ACCENT_BLUE, fontWeight: '800', fontSize: 14 }}>Lade deine Freunde ein (bald)</Text>
          </Pressable>
        </View>

        {/* Bewertung */}
        <View style={[styles.card, { borderColor: theme.border, backgroundColor: theme.cardBg }]}>
          <Text style={[styles.cardTitle, { color: theme.text }]}>⭐ App bewerten</Text>
          <Text style={[styles.explain, { color: theme.sub }]}>
            Das bekommst du: aktuell keine Belohnung dafür vorgesehen - hilft uns aber sehr, damit mehr Leute die
            App finden.{'\n'}
            Wann: jederzeit möglich. Öffnet den echten Bewertungs-Dialog von Apple/Google (nur Sterne, kein
            Kommentar - das lässt die Store-API technisch nicht zu).
          </Text>
          <View style={styles.starsRow}>
            {[1, 2, 3, 4, 5].map((n) => (
              <Text key={n} style={[styles.star, { color: theme.sub }]}>
                ☆
              </Text>
            ))}
          </View>
          <Pressable
            disabled
            accessibilityRole="button"
            accessibilityLabel="Bewerten"
            accessibilityHint="Noch nicht verfügbar"
            accessibilityState={{ disabled: true }}
            style={[styles.actionButton, { borderColor: ACCENT_BLUE, opacity: 0.5 }]}
          >
            <Text style={{ color: ACCENT_BLUE, fontWeight: '800', fontSize: 14 }}>Bewerten (bald)</Text>
          </Pressable>
        </View>

        {/* Feedback */}
        <View style={[styles.card, { borderColor: theme.border, backgroundColor: theme.cardBg }]}>
          <Text style={[styles.cardTitle, { color: theme.text }]}>💬 Feedback geben</Text>
          <Text style={[styles.explain, { color: theme.sub }]}>
            Das bekommst du: aktuell keine Belohnung dafür vorgesehen.{'\n'}
            Wann: jederzeit möglich. Dein Text geht direkt an unser Team (nicht an den öffentlichen App Store/Play
            Store).
          </Text>
          <View style={[styles.feedbackInput, { borderColor: theme.border, backgroundColor: theme.pathBoxBg }]}>
            <TextInput
              value={feedbackText}
              onChangeText={setFeedbackText}
              placeholder="Was können wir besser machen?"
              placeholderTextColor={theme.sub}
              multiline
              style={[styles.feedbackText, { color: theme.text }]}
            />
          </View>
          <Pressable
            disabled
            accessibilityRole="button"
            accessibilityLabel="Absenden"
            accessibilityHint="Noch nicht verfügbar"
            accessibilityState={{ disabled: true }}
            style={[styles.actionButton, { borderColor: ACCENT_GREEN, opacity: 0.5 }]}
          >
            <Text style={{ color: ACCENT_GREEN, fontWeight: '800', fontSize: 14 }}>Absenden (bald)</Text>
          </Pressable>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  header: { flexDirection: 'row', alignItems: 'center', gap: 10, padding: 16, paddingBottom: 10 },
  backBtn: { width: 32, height: 32, alignItems: 'center', justifyContent: 'center' },
  backGlyph: { fontSize: 26 },
  title: { fontWeight: '800', fontSize: 19, flex: 1 },
  scrollContent: { padding: 16, gap: 14, paddingBottom: 32 },
  card: { borderWidth: 1.5, borderRadius: 16, padding: 16, gap: 10 },
  cardTitle: { fontWeight: '800', fontSize: 17 },
  explain: { fontSize: 13, lineHeight: 19 },
  actionButton: { alignSelf: 'flex-start', paddingVertical: 10, paddingHorizontal: 16, borderRadius: 100, borderWidth: 2 },
  // --- Meilenstein-Leiste (2026-08-30) ------------------------------------
  stufenReihe: { flexDirection: 'row', alignItems: 'center', marginTop: 4, marginBottom: 2 },
  // Halbe Kreisbreite Abstand an beiden Seiten, damit die Linie in den
  // Kreismitten beginnt und endet statt am Rand der Karte.
  stufenLinie: { position: 'absolute', left: '12.5%', right: '12.5%', top: 15, height: 2 },
  stufe: { flex: 1, alignItems: 'center', gap: 4 },
  stufenKreis: { width: 32, height: 32, borderRadius: 16, borderWidth: 2, alignItems: 'center', justifyContent: 'center' },
  stufenSymbol: { fontSize: 12, fontWeight: '800' },
  stufenZahl: { fontSize: 12, fontWeight: '700' },
  stufenLegende: { fontSize: 11, lineHeight: 16 },
  codeFeld: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderWidth: 1.5,
    borderRadius: 12,
    paddingVertical: 10,
    paddingHorizontal: 12,
  },
  codeText: { fontSize: 13, fontWeight: '600' },
  codeSymbol: { fontSize: 16 },
  // ------------------------------------------------------------------------
  starsRow: { flexDirection: 'row', gap: 4 },
  star: { fontSize: 26 },
  feedbackInput: { borderWidth: 1.5, borderRadius: 12, padding: 12, minHeight: 70 },
  feedbackText: { fontSize: 14, flex: 1, textAlignVertical: 'top' },
});
