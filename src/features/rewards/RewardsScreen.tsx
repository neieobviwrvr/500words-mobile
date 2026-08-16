import { useState } from 'react';
import { Pressable, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
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

export function RewardsScreen() {
  const { darkMode } = useAppState();
  const theme = getTheme(darkMode);
  const [feedbackText, setFeedbackText] = useState('');

  return (
    <View style={[styles.container, { backgroundColor: theme.pageBg }]}>
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
            Das bekommst du: eine Zusatzkategorie deiner Wahl, kostenlos freigeschaltet.{'\n'}
            Wann die Belohnung greift: sobald 3 über deinen Link geworbene Nutzer ein Konto erstellt haben{' '}
            <Text style={{ fontStyle: 'italic' }}>und die App tatsächlich aktiv nutzen</Text> (genaue
            Aktivitäts-Schwelle noch nicht final festgelegt).
          </Text>
          <Pressable
            disabled
            accessibilityRole="button"
            accessibilityLabel="Link teilen"
            accessibilityHint="Noch nicht verfügbar"
            accessibilityState={{ disabled: true }}
            style={[styles.actionButton, { borderColor: ACCENT_BLUE, opacity: 0.5 }]}
          >
            <Text style={{ color: ACCENT_BLUE, fontWeight: '800', fontSize: 14 }}>Link teilen (bald)</Text>
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
  starsRow: { flexDirection: 'row', gap: 4 },
  star: { fontSize: 26 },
  feedbackInput: { borderWidth: 1.5, borderRadius: 12, padding: 12, minHeight: 70 },
  feedbackText: { fontSize: 14, flex: 1, textAlignVertical: 'top' },
});
