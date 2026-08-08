import { useState } from 'react';
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { router } from 'expo-router';
import { useAppState } from '../../state/AppState';
import { CATEGORIES, DEFAULT_THEMEN_PRO_KATEGORIE, GRUNDWORTSCHATZ_THEMEN } from '../../data/categories';
import { LANGUAGES, getLanguage } from '../../data/languages';
import { getTheme, ACCENT_BLUE, ACCENT_ORANGE, NODE_LOCKED, PILL_FILL_BLUE, PILL_FILL_ORANGE, PILL_FILL_GRAY } from '../../theme/tokens';

// S1 - Startscreen (Pfad). Ersetzt PathScreenMockup: echte Navigation statt
// simuliertem Zustand, Struktur/Verhalten aus dem Claude-Design-Prototyp +
// App-Overlay-Spec.md ("Homescreen Sprache").
//
// 2026-08-06: Zickzack-Pfad-Layout (Duolingo-Stil) aus aktualisiertem
// Design-Prototyp uebernommen, ersetzt die vorherige flache Listenansicht -
// Pillen-Knoten werden absolut positioniert (abwechselnd links/rechts,
// zentrierte Kategorie-/Sprach-Knoten dazwischen), verbunden durch
// rotierte Linien zwischen den Mittelpunkten. Algorithmus 1:1 aus der
// Design-JS-Logik (renderVals() -> pathNodes/pathConnectors) portiert.
//
// - "Sprache"-Dropdown: seit der echten Supabase-Anbindung (2026-08-05)
//   ist Deutsch/Schwedisch-Wechsel echt umgeschaltet (sonst waere
//   Schwedisch-Content nicht erreichbar). Spanisch/Franzoesisch "(bald)".
// - Ueberlebens-/Maximalwortschatz: Platzhalter ohne Funktion
// - Pfad-Knoten -> S2 Kategorie-Detail-Screen (mit optionalem Thema-Titel)
// - gesperrte Knoten -> S3 Shop
// - Scroll-Position nach Kauf bleibt erhalten, weil ShopScreen nach dem Kauf
//   router.back() statt router.replace() macht - S1 bleibt dabei im
//   Navigations-Stack gemountet, RN's ScrollView haelt ihre Scroll-Position
//   dadurch von selbst (kein manuelles Speichern/Wiederherstellen noetig
//   wie im Web-Prototyp, wo Screens nur bedingt gerenderte Divs sind).
// - "Wiederholen + Ueben" -> S5 SRS, "Cheat-Sheet-Survival" -> S6

const PILL_W = 176;
const PILL_H = 44;
const ROW_H = 82;
const CONT_W = 300;

type RawNode = {
  label: string;
  color: string;
  fill: string;
  big?: boolean;
  center?: boolean;
  locked?: boolean;
  badge?: string | null;
  newGroup?: boolean;
  onPress: () => void;
};

type LaidOutNode = RawNode & {
  width: number;
  height: number;
  fontSize: number;
  left: number;
  top: number;
  cx: number;
  cy: number;
  badgeLeft: number;
  badgeTop: number;
};

type Connector = { left: number; top: number; length: number; angle: number; color: string };

export function PathScreen() {
  const { darkMode, purchased, targetLanguageId, setTargetLanguageId } = useAppState();
  const theme = getTheme(darkMode);
  const [langOpen, setLangOpen] = useState(false);
  const activeLanguage = getLanguage(targetLanguageId);

  const goCategoryDetail = (id: string, themeLabel?: string) => () => {
    router.push({ pathname: '/category/[id]', params: themeLabel ? { id, theme: themeLabel } : { id } });
  };
  const goShop = () => router.push('/shop');

  const purchasedCategories = CATEGORIES.filter((c) => purchased[c.id]);
  const lockedCategories = CATEGORIES.filter((c) => !purchased[c.id]);

  const raw: RawNode[] = [
    { label: activeLanguage.label, color: ACCENT_BLUE, fill: PILL_FILL_BLUE, big: true, center: true, onPress: goCategoryDetail('grundwortschatz') },
    ...GRUNDWORTSCHATZ_THEMEN.map((t) => ({
      label: `Grundlagen – Thema ${t}`,
      color: ACCENT_BLUE,
      fill: PILL_FILL_BLUE,
      onPress: goCategoryDetail('grundwortschatz', `Thema ${t}`),
    })),
  ];
  purchasedCategories.forEach((cat, ci) => {
    raw.push({
      label: cat.name, color: ACCENT_ORANGE, fill: PILL_FILL_ORANGE, center: true, newGroup: true,
      badge: ci === 0 ? '"Sprung"' : null, onPress: goCategoryDetail(cat.id),
    });
    DEFAULT_THEMEN_PRO_KATEGORIE.forEach((t) =>
      raw.push({ label: `${cat.name} – Thema ${t}`, color: ACCENT_ORANGE, fill: PILL_FILL_ORANGE, onPress: goCategoryDetail(cat.id, `Thema ${t}`) })
    );
  });
  lockedCategories.forEach((cat, ci) => {
    raw.push({
      label: cat.name, color: NODE_LOCKED, fill: PILL_FILL_GRAY, center: true, newGroup: true, locked: true,
      badge: ci === 0 ? '„gesperrt“' : null, onPress: goShop,
    });
    DEFAULT_THEMEN_PRO_KATEGORIE.forEach((t) =>
      raw.push({ label: `${cat.name} – Thema ${t}`, color: NODE_LOCKED, fill: PILL_FILL_GRAY, locked: true, onPress: goShop })
    );
  });

  const dividers: number[] = [];
  const pathNodes: LaidOutNode[] = raw.map((n, i) => {
    const w = n.big ? 128 : PILL_W;
    const left = n.center ? (CONT_W - w) / 2 : i % 2 === 0 ? 0 : CONT_W - w;
    const top = i * ROW_H;
    if (n.newGroup && i > 0) dividers.push(top - ROW_H / 2 + PILL_H / 2);
    return {
      ...n,
      width: w,
      height: n.big ? 56 : PILL_H,
      fontSize: n.big ? 16 : 12.5,
      left,
      top,
      cx: left + w / 2,
      cy: top + (n.big ? 28 : PILL_H / 2),
      badgeLeft: left + w + 8,
      badgeTop: top + (n.big ? 18 : 12),
    };
  });
  const connectors: Connector[] = [];
  for (let i = 0; i < pathNodes.length - 1; i++) {
    const a = pathNodes[i];
    const b = pathNodes[i + 1];
    const dx = b.cx - a.cx;
    const dy = b.cy - a.cy;
    connectors.push({
      left: a.cx,
      top: a.cy,
      length: Math.sqrt(dx * dx + dy * dy),
      angle: (Math.atan2(dy, dx) * 180) / Math.PI,
      color: a.color,
    });
  }
  const containerHeight = pathNodes.length > 0 ? pathNodes[pathNodes.length - 1].top + PILL_H + 20 : 0;

  return (
    <View style={[styles.container, { backgroundColor: theme.pageBg }]}>
      <View style={styles.langWrap}>
        <Pressable
          onPress={() => setLangOpen((o) => !o)}
          style={[styles.langButton, { backgroundColor: theme.cardBg, borderColor: theme.border }]}
        >
          <Text style={[styles.langLabel, { color: theme.text }]}>Sprache</Text>
          <View style={styles.langRight}>
            <Text style={[styles.langValue, { color: theme.sub }]}>{activeLanguage.label}</Text>
            <Text style={{ color: theme.sub, transform: [{ rotate: langOpen ? '180deg' : '0deg' }] }}>▾</Text>
          </View>
        </Pressable>
        {langOpen && (
          <View style={[styles.langDropdown, { backgroundColor: theme.cardBg, borderColor: theme.border }]}>
            {LANGUAGES.map((lang) => {
              const active = lang.id === targetLanguageId;
              return (
                <Pressable
                  key={lang.id}
                  disabled={!lang.hasContent}
                  onPress={() => {
                    setTargetLanguageId(lang.id);
                    setLangOpen(false);
                  }}
                  style={[styles.langRow, { backgroundColor: active ? theme.modeBg : 'transparent' }]}
                >
                  <Text style={{ color: lang.hasContent ? theme.text : theme.sub, fontWeight: active ? '700' : '600' }}>
                    {lang.label}
                    {!lang.hasContent ? ' (bald)' : ''}
                  </Text>
                  {active && <Text style={{ color: theme.text }}>✓</Text>}
                </Pressable>
              );
            })}
          </View>
        )}
      </View>

      <View style={styles.wortschatzRow}>
        <View style={[styles.wortschatzBox, { borderColor: theme.border }]}>
          <Text style={[styles.wortschatzText, { color: theme.sub }]}>Überlebens­wortschatz</Text>
        </View>
        <View style={[styles.wortschatzBox, { borderColor: theme.border }]}>
          <Text style={[styles.wortschatzText, { color: theme.sub }]}>Maximal­wortschatz</Text>
        </View>
      </View>

      <View style={[styles.pathBox, { borderColor: theme.border, backgroundColor: theme.pathBoxBg }]}>
        <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.pathBoxContent}>
          <View style={[styles.pathCanvas, { height: containerHeight }]}>
            {dividers.map((d, i) => (
              <View key={`div-${i}`} style={[styles.divider, { top: d, borderColor: theme.dividerColor }]} />
            ))}
            {connectors.map((c, i) => (
              <View
                key={`conn-${i}`}
                style={[
                  styles.connector,
                  {
                    left: c.left,
                    top: c.top,
                    width: c.length,
                    backgroundColor: c.color,
                    transform: [{ rotate: `${c.angle}deg` }],
                    transformOrigin: '0% 50%',
                  },
                ]}
              />
            ))}
            {pathNodes.map((n, i) => (
              <View key={`node-${i}`}>
                <Pressable
                  onPress={n.onPress}
                  style={[
                    styles.pill,
                    {
                      left: n.left,
                      top: n.top,
                      width: n.width,
                      height: n.height,
                      borderColor: n.color,
                      backgroundColor: n.fill,
                    },
                  ]}
                >
                  <Text style={{ color: n.color, fontWeight: '800', fontSize: n.fontSize, textAlign: 'center' }}>{n.label}</Text>
                  {n.locked && <Text style={styles.lockGlyph}>🔒</Text>}
                </Pressable>
                {n.badge && (
                  <Pressable
                    disabled={!n.locked}
                    onPress={n.locked ? n.onPress : undefined}
                    style={[styles.badge, { left: n.badgeLeft, top: n.badgeTop, borderColor: theme.border, backgroundColor: theme.cardBg }]}
                  >
                    <Text style={{ color: theme.sub, fontWeight: '700', fontSize: 10 }}>{n.badge}</Text>
                  </Pressable>
                )}
              </View>
            ))}
          </View>
        </ScrollView>
        <Text style={[styles.scrollHint, { color: theme.sub }]}>▾</Text>
      </View>

      <Pressable style={styles.primaryButton} onPress={() => router.push('/srs')}>
        <Text style={styles.primaryButtonText}>Wiederholen + Üben</Text>
      </Pressable>

      {/* Nutzer-Korrektur 2026-08-08: der Referral-/Bewertungs-/Feedback-
          Button war vorher ein schwebendes Icon ueber dem Pfad - gehoert
          da laut Nutzer nicht hin. Jetzt als beschrifteter Button unten
          neben Cheat-Sheet-Survival, mit Text der klarmacht, worum es geht
          (Freunde einladen/Bewertung/Feedback), statt nur einem Icon. */}
      <View style={styles.bottomRow}>
        <Pressable
          style={[styles.secondaryButton, { borderColor: theme.border, backgroundColor: theme.cardBg }]}
          onPress={() => router.push('/cheatsheet')}
        >
          <Text style={[styles.secondaryButtonText, { color: theme.text }]}>Cheat‑Sheet‑Survival</Text>
        </Pressable>
        <Pressable
          style={[styles.secondaryButton, { borderColor: theme.border, backgroundColor: theme.cardBg }]}
          onPress={() => router.push('/rewards')}
        >
          <Text style={[styles.secondaryButtonText, { color: theme.text }]}>🎁 Extras</Text>
          <Text style={[styles.secondaryButtonSubtext, { color: theme.sub }]}>Freunde · Bewertung · Feedback</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, gap: 12, position: 'relative' },
  langWrap: { position: 'relative', zIndex: 5 },
  langButton: {
    flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between',
    paddingVertical: 12, paddingHorizontal: 16, borderWidth: 1.5, borderRadius: 14,
  },
  langLabel: { fontWeight: '800', fontSize: 19 },
  langRight: { flexDirection: 'row', alignItems: 'center', gap: 8 },
  langValue: { fontWeight: '600', fontSize: 14 },
  langDropdown: { position: 'absolute', top: 56, left: 0, right: 0, borderWidth: 1.5, borderRadius: 12, padding: 6, gap: 2 },
  langRow: { padding: 10, borderRadius: 8, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  wortschatzRow: { flexDirection: 'row', gap: 8 },
  wortschatzBox: { flex: 1, paddingVertical: 11, paddingHorizontal: 10, borderWidth: 1.5, borderRadius: 12, alignItems: 'center' },
  wortschatzText: { fontWeight: '700', fontSize: 13, textAlign: 'center' },
  pathBox: { flex: 1, minHeight: 320, borderWidth: 1.5, borderRadius: 16, position: 'relative' },
  pathBoxContent: { paddingVertical: 18, paddingHorizontal: 8 },
  pathCanvas: { width: CONT_W, alignSelf: 'center', position: 'relative' },
  divider: { position: 'absolute', left: 0, right: 0, borderTopWidth: 2.5, borderStyle: 'dashed' },
  connector: { position: 'absolute', height: 2, opacity: 0.5 },
  pill: {
    position: 'absolute', borderRadius: 100, borderWidth: 2, alignItems: 'center', justifyContent: 'center',
    flexDirection: 'row', gap: 6, paddingHorizontal: 10,
  },
  lockGlyph: { fontSize: 12 },
  badge: {
    position: 'absolute', paddingVertical: 5, paddingHorizontal: 10, borderRadius: 100, borderWidth: 1.5,
  },
  scrollHint: { position: 'absolute', bottom: 8, left: 0, right: 0, textAlign: 'center', fontSize: 16 },
  primaryButton: { marginTop: 2, paddingVertical: 16, borderRadius: 16, backgroundColor: ACCENT_BLUE, alignItems: 'center' },
  primaryButtonText: { color: '#fff', fontWeight: '800', fontSize: 17 },
  bottomRow: { flexDirection: 'row', gap: 8 },
  secondaryButton: { flex: 1, paddingVertical: 14, paddingHorizontal: 6, borderRadius: 16, borderWidth: 1.5, alignItems: 'center', gap: 2 },
  secondaryButtonText: { fontWeight: '700', fontSize: 14, textAlign: 'center' },
  secondaryButtonSubtext: { fontWeight: '600', fontSize: 10, textAlign: 'center' },
});
