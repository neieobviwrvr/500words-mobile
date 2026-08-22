import { useState } from 'react';
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { router } from 'expo-router';
import { useAppState } from '../../state/AppState';
import { useOnboardingState } from '../../state/OnboardingState';
import { kategorieBrauchtAnrede } from '../../data/anrede';
import { CATEGORIES } from '../../data/categories';
import { getTheme, ACCENT_BLUE, ACCENT_ORANGE, ACCENT_GREEN, NODE_LOCKED } from '../../theme/tokens';

// S3 - Shop-Screen ("Pakete + Shop"). Nutzer-Entscheidung (2026-08-05): fuers
// Erste als 2-spaltiges Grid wie im Claude-Design-Prototyp, langfristig soll
// das laut Nutzer wieder ein radialer Skilltree werden (siehe CLAUDE.md).
// Verhalten aus App-Overlay-Spec.md:
// - orange Karten (bereits gekauft): keine Funktion
// - graue/gesperrte Karten: Klick fuellt beide Infotexte unten aus einem
//   Datenbank-Eintrag (hier: aus categories.ts, bis es echt aus Supabase kommt)
// - Schloss-Icon selbst hat keine eigene Funktion, nur visuelle Kennzeichnung
// - "Kaufen": aktuell keine echte Zahlungsabwicklung, schaltet die Kategorie
//   aber wirklich frei (purchased=true) und geht zurueck zu S1

export function ShopScreen() {
  const { darkMode, purchased, cart, toggleCartItem, buyCart } = useAppState();
  const { gender, addressing } = useOnboardingState();
  const theme = getTheme(darkMode);
  // Der native Header ist app-weit aus (app/_layout.tsx), jeder Screen
  // zeichnet seinen eigenen. Ohne diesen Einsatz liegt die Ueberschrift unter
  // der Statusleiste bzw. der Kamera-Insel und wird verdeckt.
  const insets = useSafeAreaInsets();
  const [selectedId, setSelectedId] = useState<string | null>(null);

  const selected = selectedId ? CATEGORIES.find((c) => c.id === selectedId) : null;
  const cartTotal = (cart.length * 2.3).toFixed(2).replace('.', ',');

  const onCardPress = (id: string) => {
    if (purchased[id]) return;
    toggleCartItem(id);
    setSelectedId(id);
  };

  const onBuy = () => {
    if (cart.length === 0) return;
    buyCart();
    // router.back() statt router.replace('/'): S3 ist laut Navigations-
    // prinzipien nur von S1 aus erreichbar, also bringt back() genauso
    // zurueck zu S1 - haelt aber S1s Screen-Instanz im Stack gemountet,
    // wodurch die Scroll-Position im Pfad automatisch erhalten bleibt
    // (siehe PathScreen.tsx-Kommentar). Design-Backlog-Notiz vom
    // 2026-08-05/06 dazu: Nutzer soll nach Kauf an der Stelle landen, von
    // der aus er in den Shop gewechselt ist statt oben bei der Sprachwahl.
    router.back();

    // Erst JETZT nach Geschlecht und Ansprache fragen (2026-08-22) - beide
    // Fragen standen frueher als O5/O6 im Onboarding, wo sie ohne sichtbaren
    // Nutzen kamen. Wer gerade Club + Nightlife gekauft hat, sieht dagegen
    // sofort, wozu: dort lauten 13 Saetze je nach Gegenueber anders.
    //
    // Nach dem `back()` gestapelt, nicht davor: so liegt der Screen ueber S1
    // und gibt beim Schliessen den Pfad mitsamt Scroll-Position frei.
    const braucht = cart.find(kategorieBrauchtAnrede);
    if (braucht && (!gender || !addressing)) {
      router.push({ pathname: '/anrede', params: { categoryId: braucht } });
    }
  };

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
        <Text style={[styles.title, { color: theme.text }]}>Pakete + Shop</Text>
      </View>

      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.grid}>
          {CATEGORIES.map((cat) => {
            const owned = !!purchased[cat.id];
            const inCart = cart.includes(cat.id);
            const borderColor = owned ? ACCENT_ORANGE : inCart ? ACCENT_BLUE : theme.border;
            const avatarBg = owned ? ACCENT_ORANGE : inCart ? ACCENT_BLUE : NODE_LOCKED;
            return (
              <Pressable
                key={cat.id}
                onPress={() => onCardPress(cat.id)}
                accessibilityRole="button"
                // Der Zustand steckt sonst ausschliesslich in Rahmen- und
                // Avatarfarbe plus einem Badge - fuer VoiceOver unsichtbar.
                // Deshalb in den Namen ziehen, zusaetzlich selected fuer den
                // Warenkorb-Zustand (das ist der einzige, den der Tap
                // umschaltet).
                accessibilityLabel={`${cat.name}, ${owned ? 'freigeschaltet' : inCart ? 'im Warenkorb' : 'gesperrt'}`}
                accessibilityHint={owned ? undefined : inCart ? 'Aus dem Warenkorb entfernen' : 'In den Warenkorb legen'}
                accessibilityState={{ selected: inCart, disabled: owned }}
                style={[styles.card, { borderColor, backgroundColor: theme.cardBg }]}
              >
                <View style={styles.cardTop}>
                  <View style={[styles.avatar, { backgroundColor: avatarBg }]}>
                    <Text style={styles.avatarText}>{cat.initials}</Text>
                  </View>
                  {!owned && !inCart && (
                    <Text accessibilityElementsHidden importantForAccessibility="no" style={styles.lockGlyph}>
                      🔒
                    </Text>
                  )}
                  {owned && (
                    <View style={styles.badgeActive}>
                      <Text style={styles.badgeText}>AKTIV</Text>
                    </View>
                  )}
                  {inCart && (
                    <View style={styles.badgeCart}>
                      <Text style={styles.badgeText}>IM WARENKORB</Text>
                    </View>
                  )}
                </View>
                <Text style={[styles.cardName, { color: theme.text }]}>{cat.name}</Text>
              </Pressable>
            );
          })}
        </View>

        <View style={[styles.infoBlock, { borderColor: theme.border }]}>
          <Text style={[styles.infoLabel, { color: theme.text }]}>Pakete… beinhalten</Text>
          <Text style={[styles.infoText, { color: theme.sub }]}>
            {selected ? selected.includes : 'Wähle ein gesperrtes Paket aus, um Details zu sehen.'}
          </Text>
          <Text style={[styles.infoLabel, { color: theme.text }]}>…und befähigen dich zu…</Text>
          <Text style={[styles.infoText, { color: theme.sub }]}>{selected ? selected.enables : '—'}</Text>
        </View>

        {/* Ueberschneidung VOR dem Kauf sagen (Nutzer-Wunsch 2026-08-21).
            Grundlagen wie Begruessen oder Nachfragen liegen im
            Grundwortschatz und werden von vielen Kategorien mit angezeigt -
            unter einem Namen, der zur jeweiligen Lage passt (siehe
            data/geliehen.ts). Wer zwei Kategorien kauft, findet dort also
            dieselben Saetze. Das ist gewollt, weil es dieselbe Karte ist,
            die man nur einmal lernt - aber es muss vorher dastehen, sonst
            fuehlt es sich nach dem Kauf wie eine Doppelung an. */}
        <View style={[styles.hinweisBlock, { borderLeftColor: ACCENT_BLUE }]}>
          <Text style={[styles.hinweisText, { color: theme.sub }]}>
            Grundlagen wie Begrüßen, Zahlen oder Nachfragen gehören zum
            Grundwortschatz und erscheinen in mehreren Kategorien. Manche Sätze
            überschneiden sich deshalb — gelernt wird jeder trotzdem nur einmal.
          </Text>
        </View>

        <View style={[styles.cartSummary, { backgroundColor: theme.pathBoxBg, borderColor: theme.border }]}>
          <Text style={[styles.cartLabel, { color: theme.sub }]}>{cart.length} Paket(e) im Warenkorb</Text>
          <Text style={[styles.cartTotal, { color: theme.text }]}>{cartTotal} €</Text>
        </View>
        <Pressable
          style={styles.buyButton}
          onPress={onBuy}
          accessibilityRole="button"
          accessibilityLabel={`Kaufen, ${cart.length} Pakete für ${cartTotal} Euro`}
          accessibilityState={{ disabled: cart.length === 0 }}
        >
          <Text style={styles.buyButtonText}>Kaufen ▶</Text>
        </Pressable>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  header: { flexDirection: 'row', alignItems: 'center', gap: 10, padding: 16, paddingBottom: 10 },
  backBtn: { width: 32, height: 32, alignItems: 'center', justifyContent: 'center' },
  backGlyph: { fontSize: 26 },
  title: { fontWeight: '800', fontSize: 22 },
  scrollContent: { padding: 16, paddingTop: 4, gap: 16 },
  grid: { flexDirection: 'row', flexWrap: 'wrap', gap: 10 },
  card: { width: '47%', padding: 12, borderRadius: 14, borderWidth: 1.5, gap: 6 },
  cardTop: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' },
  avatar: { width: 30, height: 30, borderRadius: 9, alignItems: 'center', justifyContent: 'center' },
  avatarText: { color: '#fff', fontWeight: '800', fontSize: 11 },
  lockGlyph: { fontSize: 14 },
  badgeActive: { backgroundColor: ACCENT_ORANGE, paddingVertical: 3, paddingHorizontal: 7, borderRadius: 100 },
  badgeCart: { backgroundColor: ACCENT_BLUE, paddingVertical: 3, paddingHorizontal: 7, borderRadius: 100 },
  badgeText: { color: '#fff', fontWeight: '800', fontSize: 9 },
  cardName: { fontWeight: '700', fontSize: 13, lineHeight: 17 },
  infoBlock: { borderTopWidth: 1.5, paddingTop: 14, gap: 4 },
  infoLabel: { fontWeight: '700', fontSize: 14 },
  infoText: { fontSize: 13, lineHeight: 19, marginBottom: 10 },
  hinweisBlock: { borderLeftWidth: 2, paddingLeft: 10, marginBottom: 14 },
  hinweisText: { fontSize: 12, lineHeight: 17, fontStyle: 'italic' },
  cartSummary: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', padding: 14, borderRadius: 14, borderWidth: 1.5 },
  cartLabel: { fontWeight: '700', fontSize: 13 },
  cartTotal: { fontWeight: '800', fontSize: 16 },
  buyButton: { padding: 15, borderRadius: 14, borderWidth: 2, borderColor: ACCENT_GREEN, alignItems: 'center' },
  buyButtonText: { color: ACCENT_GREEN, fontWeight: '800', fontSize: 16 },
});
