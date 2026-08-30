import { useState } from 'react';
import { Pressable, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Feather } from '@expo/vector-icons';
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
 * Belohnungsstufen des Referral-Programms - Schwellen UND Symbole 1:1 aus
 * Simons Vorlage (2026-08-30).
 *
 * Die Symbole stehen bewusst genau so da, wie sie in der Vorlage stehen,
 * auch wo sie noch nichts Festgelegtes bedeuten: `$` bei zwoelf Freunden
 * ist noch keiner Belohnung zugeordnet, `+5` vor `+3` ist keine steigende
 * Leiter. Wer das aufloest, ersetzt hier die Symbole - die Anordnung bleibt.
 *
 * Beschlossen ist bisher allein die erste Schwelle: drei geworbene Nutzer,
 * die ein Konto anlegen (CLAUDE.md, 2026-08-20).
 */
const REFERRAL_STUFEN = [
  { schwelle: 3, symbol: '+5' },
  { schwelle: 5, symbol: '+3' },
  { schwelle: 9, symbol: '🎁' },
  { schwelle: 12, symbol: '$' },
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
  // Aufgeklappt starten: die Leiste ist der eigentliche Inhalt der Karte,
  // eine zugeklappte Zeile waere beim ersten Besuch nur eine Ueberschrift.
  const [referralOffen, setReferralOffen] = useState(true);

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
        {/* Referral - Aufbau 1:1 nach Simons Vorlage (2026-08-30):
            aufklappbare Kopfzeile, darunter die Meilenstein-Leiste, das
            Code-Feld und ein gruener Knopf ueber die volle Breite. Ohne
            Erklaertext - die Leiste erklaert sich selbst. */}
        <View style={[styles.card, { borderColor: theme.border, backgroundColor: theme.cardBg }]}>
          <Pressable
            onPress={() => setReferralOffen((v) => !v)}
            accessibilityRole="button"
            accessibilityLabel="Lade deine Freunde ein"
            accessibilityState={{ expanded: referralOffen }}
            style={styles.klappKopf}
          >
            <Text style={[styles.cardTitle, { color: theme.text }]}>Lade deine Freunde ein</Text>
            <Feather name={referralOffen ? 'chevron-up' : 'chevron-down'} size={20} color={theme.sub} />
          </Pressable>

          {referralOffen ? (
            <View style={[styles.referralBox, { borderColor: theme.border }]}>
              <View
                accessibilityRole="progressbar"
                accessibilityLabel={`${geworben} von ${REFERRAL_STUFEN[REFERRAL_STUFEN.length - 1].schwelle} Freunden geworben`}
              >
                {/* Kreise */}
                <View style={styles.stufenReihe}>
                  {REFERRAL_STUFEN.map((s) => {
                    const erreicht = geworben >= s.schwelle;
                    return (
                      <View key={s.schwelle} style={styles.stufe}>
                        <View
                          style={[
                            styles.stufenKreis,
                            {
                              borderColor: erreicht ? ACCENT_GREEN : theme.border,
                              backgroundColor: erreicht ? ACCENT_GREEN : theme.cardBg,
                            },
                          ]}
                        >
                          <Text style={[styles.stufenSymbol, { color: erreicht ? '#FFFFFF' : theme.sub }]}>
                            {s.symbol}
                          </Text>
                        </View>
                      </View>
                    );
                  })}
                </View>

                {/* Fortschrittsleiste ZWISCHEN Kreisen und Zahlen, mit einem
                    Strich je Stufe. Der gefuellte Teil waechst mit den
                    geworbenen Freunden. */}
                <View style={styles.leisteZeile}>
                  <View style={[styles.leiste, { backgroundColor: theme.border }]}>
                    <View
                      style={[
                        styles.leisteFuellung,
                        {
                          backgroundColor: ACCENT_GREEN,
                          width: `${Math.min(100, (geworben / REFERRAL_STUFEN[REFERRAL_STUFEN.length - 1].schwelle) * 100)}%`,
                        },
                      ]}
                    />
                  </View>
                  <View style={styles.tickReihe}>
                    {REFERRAL_STUFEN.map((s) => (
                      <View key={s.schwelle} style={styles.stufe}>
                        <View
                          style={[
                            styles.tick,
                            { backgroundColor: geworben >= s.schwelle ? ACCENT_GREEN : theme.border },
                          ]}
                        />
                      </View>
                    ))}
                  </View>
                </View>

                {/* Zahlen */}
                <View style={styles.stufenReihe}>
                  {REFERRAL_STUFEN.map((s) => (
                    <View key={s.schwelle} style={styles.stufe}>
                      <Text style={[styles.stufenZahl, { color: geworben >= s.schwelle ? theme.text : theme.sub }]}>
                        {s.schwelle}
                      </Text>
                    </View>
                  ))}
                </View>
              </View>

              {/* Code-Feld mit Kopier-Symbol daneben. Einen echten Code gibt
                  es noch nicht - er braucht ein Konto, und `profil` hat dafuer
                  bisher keine Spalte (siehe Nutzerdaten-Migration). */}
              <View style={styles.codeZeile}>
                <View style={[styles.codeFeld, { borderColor: theme.border, backgroundColor: theme.pathBoxBg }]}>
                  <Text style={[styles.codeText, { color: theme.sub }]}>einzigartiger Referral-Code</Text>
                </View>
                <Feather name="copy" size={16} color={theme.sub} />
              </View>

              <Pressable
                disabled
                accessibilityRole="button"
                accessibilityLabel="Lade deine Freunde ein"
                accessibilityHint="Noch nicht verfügbar"
                accessibilityState={{ disabled: true }}
                style={[styles.gruenerButton, { backgroundColor: ACCENT_GREEN, opacity: 0.5 }]}
              >
                <Feather name="share" size={15} color="#FFFFFF" />
                <Text style={styles.gruenerButtonText}>Lade deine Freunde ein</Text>
              </Pressable>
            </View>
          ) : null}
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
  // --- Referral nach Simons Vorlage (2026-08-30) --------------------------
  klappKopf: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' },
  referralBox: { borderWidth: 1.5, borderRadius: 12, padding: 14, gap: 12, marginTop: 4 },
  // Drei gleich aufgebaute Zeilen (Kreise / Leiste / Zahlen) - jede Stufe
  // bekommt in allen dreien `flex: 1`, dadurch stehen Kreis, Strich und Zahl
  // exakt uebereinander.
  stufenReihe: { flexDirection: 'row', alignItems: 'center' },
  stufe: { flex: 1, alignItems: 'center' },
  stufenKreis: { width: 30, height: 30, borderRadius: 15, borderWidth: 1.5, alignItems: 'center', justifyContent: 'center' },
  stufenSymbol: { fontSize: 11, fontWeight: '800' },
  stufenZahl: { fontSize: 12, fontWeight: '700' },
  leisteZeile: { marginVertical: 6 },
  leiste: { height: 3, borderRadius: 2, overflow: 'hidden' },
  leisteFuellung: { height: '100%', borderRadius: 2 },
  // Die Striche haengen unter der Leiste und markieren die Stufen.
  tickReihe: { flexDirection: 'row', marginTop: -1 },
  tick: { width: 2, height: 7, borderRadius: 1 },
  codeZeile: { flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: 10 },
  codeFeld: { borderWidth: 1.5, borderRadius: 8, paddingVertical: 8, paddingHorizontal: 14 },
  codeText: { fontSize: 12, fontWeight: '600' },
  gruenerButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    borderRadius: 10,
    paddingVertical: 12,
  },
  gruenerButtonText: { color: '#FFFFFF', fontWeight: '800', fontSize: 14 },
  // ------------------------------------------------------------------------
  starsRow: { flexDirection: 'row', gap: 4 },
  star: { fontSize: 26 },
  feedbackInput: { borderWidth: 1.5, borderRadius: 12, padding: 12, minHeight: 70 },
  feedbackText: { fontSize: 14, flex: 1, textAlignVertical: 'top' },
});
