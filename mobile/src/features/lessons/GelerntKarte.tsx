import { memo } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { State } from 'ts-fsrs';
import { bilanzSumme, vorZaehlung, type GespeicherteKarte } from '../srs/bilanz';
import { gedaechtnisVon, SITZT_AB_TAGEN, type Gedaechtnis } from '../srs/gedaechtnis';
import { speakSentence } from '../tts/speak';
import { s, usePalette, useStil, type Palette } from '../entwurf/entwurfStil';
import type { Gelerntes, LeiterStand } from './useGelerntes';

// Eine Karte je Satz und je Wort (2026-09-27, Simons Vorgabe: "Sätze und
// Wörter sollen jeweils auf einer einzelnen Karte stehen").
//
// **Im Stil des neuen S1**, also E-Palette und Manrope aus
// features/entwurf/entwurfStil.ts - nicht die Tokens. Die beiden Tabs liegen
// nebeneinander; mit zwei Schriften und zwei Blautoenen saehe der Wechsel aus
// wie zwei Apps. Derselbe Preis wie auf S1: der Screen ist hell, auch im
// Darkmode (siehe Kommentar in entwurfStil.ts).
//
// Zugeklappt traegt die Karte, was man beim Durchblaettern sucht - Text,
// Bedeutung, Gedaechtnisstufe, Anzahl, Faelligkeit. Aufgeklappt kommt dazu,
// was man nur einzeln braucht. Nicht umgekehrt: eine Liste aus 300 Karten mit
// je acht Zeilen liest niemand.

export type StufenFarbe = { flaeche: string; text: string; farbe: string; label: string };

export function stufenFarben(E: Palette): Record<Gedaechtnis, StufenFarbe> {
  return {
  // `farbe` traegt Punkte und Balken, `text` die Beschriftung auf der
  // hellen Flaeche. Zwei Werte, weil das knallige Gruen als 11-Punkt-Schrift
  // auf #DCFCE7 nur noch 2,3:1 schafft (siehe entwurfStil.ts) - als
  // Farbflaeche ist genau diese Leuchtkraft dagegen erwuenscht.
    sitzt: { flaeche: E.gruenHell, text: E.gruenText, farbe: E.gruen, label: 'Sitzt' },
    aufbau: { flaeche: E.blauHell, text: E.blau, farbe: E.blau, label: 'Im Aufbau' },
    // Bernstein, kein Rot - dieselbe Wahl wie auf der Statistikseite:
    // "wackelt" ist kein Fehler, sondern eine Karte, die Uebung braucht.
    wackelt: { flaeche: E.goldHell, text: E.goldText, farbe: E.gold, label: 'Wackelt' },
  };
}

/** Die drei Stufen der Satz-Uebung, benannt wie ihre Aufgabe auf dem Schirm. */
const LEITER_NAME: Record<1 | 2 | 3, string> = {
  1: 'Nachsprechen',
  2: 'Zuordnen',
  3: 'Übersetzen',
};

function tageBis(ziel: Date, jetzt: Date): number {
  const tag = (d: Date) => new Date(d.getFullYear(), d.getMonth(), d.getDate()).getTime();
  return Math.round((tag(ziel) - tag(jetzt)) / 86_400_000);
}

/** "heute", "morgen", "in 12 Tagen", "überfällig" - fuer die Detailzeile. */
function faelligKurz(karte: GespeicherteKarte, jetzt: Date): string {
  const tage = tageBis(new Date(karte.due), jetzt);
  if (tage < 0) return 'überfällig';
  if (tage === 0) return 'heute';
  if (tage === 1) return 'morgen';
  return `in ${tage} Tagen`;
}

/** Dasselbe als ganze Aussage fuer die Fusszeile - "in 12 Tagen dran". */
function faelligLang(karte: GespeicherteKarte, jetzt: Date): string {
  const kurz = faelligKurz(karte, jetzt);
  return kurz === 'überfällig' ? kurz : `${kurz} dran`;
}

/** "heute", "gestern", "vor 4 Tagen" - oder null, wenn nie beantwortet. */
function zuletztText(karte: GespeicherteKarte, jetzt: Date): string | null {
  if (!karte.last_review) return null;
  const tage = -tageBis(new Date(karte.last_review), jetzt);
  if (tage <= 0) return 'heute';
  if (tage === 1) return 'gestern';
  if (tage < 31) return `vor ${tage} Tagen`;
  return `vor ${Math.round(tage / 30)} Monaten`;
}

const MONATE = ['Januar', 'Februar', 'März', 'April', 'Mai', 'Juni', 'Juli', 'August', 'September', 'Oktober', 'November', 'Dezember'];

function kurzesDatum(ms: number): string {
  const d = new Date(ms);
  return `${d.getDate()}. ${MONATE[d.getMonth()]}`;
}

function leiterText(stand: LeiterStand): string {
  const name = LEITER_NAME[stand.stufe];
  if (stand.stufe === 3) return `${name} · letzte Stufe`;
  return `${name} · noch ${stand.bisZurNaechsten}× bis Stufe ${stand.stufe + 1}`;
}

/**
 * Der Balken unter dem Text: richtig, fast, daneben - und grau, was vor dem
 * Zaehler liegt.
 *
 * Der graue Teil ist der ehrliche Teil. Die Bilanz je Karte gibt es erst seit
 * dem 2026-09-27 (siehe bilanz.ts); fuer alles davor kennt die Karte nur ihre
 * Anzahl, nicht die Stufen. Ein Balken, der nur die gezaehlten Antworten
 * zeigt, wuerde bei einer alten Karte mit 20 Antworten drei Segmente anzeigen
 * und die anderen siebzehn verschweigen.
 */
function BilanzBalken({ karte }: { karte: GespeicherteKarte }) {
  const E = usePalette();
  const stil = useStil(stilFabrik);
  const b = karte.bilanz;
  const alt = vorZaehlung(karte);
  const teile = [
    { id: 'richtig', anzahl: b?.richtig ?? 0, farbe: E.gruen },
    { id: 'ueberlebt', anzahl: b?.ueberlebt ?? 0, farbe: E.gold },
    { id: 'daneben', anzahl: b?.nichtVerstanden ?? 0, farbe: E.rot },
    { id: 'alt', anzahl: alt, farbe: E.ringLeer },
  ].filter((t) => t.anzahl > 0);

  return (
    <View style={stil.spur} accessibilityElementsHidden importantForAccessibility="no-hide-descendants">
      {teile.length === 0 ? (
        <View style={[stil.stueck, { flex: 1, backgroundColor: E.ringLeer }]} />
      ) : (
        teile.map((t) => <View key={t.id} style={[stil.stueck, { flex: t.anzahl, backgroundColor: t.farbe }]} />)
      )}
    </View>
  );
}

function Zeile({ links, rechts }: { links: string; rechts: string }) {
  const stil = useStil(stilFabrik);
  return (
    <View style={stil.detailZeile}>
      <Text style={stil.detailLinks}>{links}</Text>
      <Text style={stil.detailRechts} numberOfLines={2}>
        {rechts}
      </Text>
    </View>
  );
}

function GelerntKarteRoh({
  eintrag,
  languageId,
  offen,
  onToggle,
}: {
  eintrag: Gelerntes;
  languageId: string;
  offen: boolean;
  onToggle: () => void;
}) {
  const E = usePalette();
  const stil = useStil(stilFabrik);
  const jetzt = new Date();
  const karte = eintrag.karte;
  const stufe = stufenFarben(E)[gedaechtnisVon(karte)];
  const b = karte.bilanz;
  const gezaehlt = bilanzSumme(b);
  const faellig = faelligLang(karte, jetzt);
  const zuletzt = zuletztText(karte, jetzt);

  return (
    <View style={stil.karte}>
      <Pressable
        onPress={onToggle}
        accessibilityRole="button"
        accessibilityState={{ expanded: offen }}
        accessibilityLabel={[
          eintrag.lerntext,
          eintrag.bedeutung,
          stufe.label,
          `${karte.reps}× geübt`,
          faellig,
        ]
          .filter(Boolean)
          .join(', ')}
        accessibilityHint="Zeigt die Einzelheiten"
        style={({ pressed }) => [stil.kopfTreffer, pressed && stil.gedrueckt]}
      >
        <Text style={stil.herkunft} numberOfLines={1}>
          {eintrag.herkunft}
          {eintrag.sorte === 'rahmen' ? ' · Satzmuster' : ''}
        </Text>

        <View style={[stil.textBlock, eintrag.sprechText ? stil.textBlockSchmal : null]}>
          {/* Wo es eine eigene Schrift gibt, steht sie oben - dieselbe
              Reihenfolge wie in der Satzliste (PhraseCard): im Notfall haelt
              man jemandem den Schirm hin, gelernt wird ueber die Lautschrift
              darunter. */}
          {eintrag.schrift ? (
            <Text style={stil.schrift} numberOfLines={2}>
              {eintrag.schrift}
            </Text>
          ) : null}
          <Text style={eintrag.schrift ? stil.lerntextKlein : stil.lerntext} numberOfLines={3}>
            {eintrag.lerntext}
          </Text>
          {eintrag.bedeutung ? (
            <Text style={stil.bedeutung} numberOfLines={2}>
              {eintrag.bedeutung}
            </Text>
          ) : null}
        </View>

        <BilanzBalken karte={karte} />

        <View style={stil.fuss}>
          <View style={[stil.stufenPille, { backgroundColor: stufe.flaeche }]}>
            <Text style={[stil.stufenText, { color: stufe.text }]}>{stufe.label}</Text>
          </View>
          <Text style={stil.fussText} numberOfLines={1}>
            {karte.reps}× geübt · {faellig}
          </Text>
          <Feather name={offen ? 'chevron-up' : 'chevron-down'} size={16} color={E.grau} />
        </View>
      </Pressable>

      {/* Der Lautsprecher liegt NEBEN dem Aufklapp-Knopf, nicht darin
          (absolut ueber der rechten oberen Ecke). Verschachtelt hat er zwar
          funktioniert, aber ein Knopf im Knopf ist auf dem Web ungueltiges
          HTML (React meldet es als Fehler) und fuer Screenreader eine
          Tippflaeche mit zwei Bedeutungen. Der Textblock haelt sich dafuer
          rechts frei. */}
      {eintrag.sprechText ? (
        <Pressable
          onPress={() =>
            speakSentence({ text: eintrag.sprechText as string, audioUrl: eintrag.audioUrl }, { languageId })
          }
          accessibilityRole="button"
          accessibilityLabel="Vorlesen"
          hitSlop={8}
          style={({ pressed }) => [stil.lautsprecher, pressed && stil.gedrueckt]}
        >
          <Feather name="volume-2" size={17} color={E.blau} />
        </Pressable>
      ) : null}

      {offen ? (
        <View style={stil.detail}>
          {gezaehlt > 0 ? (
            <Zeile
              links="Bewertungen"
              rechts={`${b?.richtig ?? 0}× richtig · ${b?.ueberlebt ?? 0}× fast · ${b?.nichtVerstanden ?? 0}× daneben`}
            />
          ) : null}
          {vorZaehlung(karte) > 0 ? (
            <Zeile
              links="Ohne Aufschlüsselung"
              rechts={
                b
                  ? `${vorZaehlung(karte)}× vor dem ${kurzesDatum(b.seit)}`
                  : `${vorZaehlung(karte)}× — vor dieser App-Fassung`
              }
            />
          ) : null}
          {b ? <Zeile links="Letzte Antwort" rechts={LETZTE[b.letzte]} /> : null}
          {zuletzt ? <Zeile links="Zuletzt geübt" rechts={zuletzt} /> : null}
          <Zeile links="Wieder dran" rechts={faelligKurz(karte, jetzt)} />
          {/* Die Stabilitaet ist erst im Wiederholungs-Zustand eine Aussage -
              waehrend des Einpraegens rechnet FSRS noch in Minuten. */}
          {karte.state === State.Review ? (
            <Zeile
              links="Hält etwa"
              rechts={`${Math.max(1, Math.round(karte.stability))} Tage${
                karte.stability >= SITZT_AB_TAGEN ? '' : ` · sitzt ab ${SITZT_AB_TAGEN}`
              }`}
            />
          ) : null}
          {karte.lapses > 0 ? <Zeile links="Vergessen" rechts={`${karte.lapses}×`} /> : null}
          {eintrag.leiterSituation ? (
            <Zeile links="Stufe in der Situation" rechts={leiterText(eintrag.leiterSituation)} />
          ) : null}
          {eintrag.leiterWiederholung ? (
            <Zeile links="Stufe im Wiederholen" rechts={leiterText(eintrag.leiterWiederholung)} />
          ) : null}
          {b && gezaehlt > 0 ? (
            <Text style={stil.seit}>Aufgeschlüsselt seit {kurzesDatum(b.seit)}.</Text>
          ) : null}
        </View>
      ) : null}
    </View>
  );
}

const LETZTE: Record<string, string> = {
  richtig: 'richtig',
  ueberlebt: 'fast richtig',
  nicht_verstanden: 'daneben',
};

/**
 * `memo`, weil die Liste lang wird: ohne das zeichnet ein Tastendruck im
 * Suchfeld jede sichtbare Karte neu.
 */
export const GelerntKarte = memo(GelerntKarteRoh);

const stilFabrik = (E: Palette) =>
  StyleSheet.create({
  gedrueckt: { opacity: 0.6 },

  karte: {
    borderWidth: 1,
    borderColor: E.linie,
    borderRadius: 14,
    backgroundColor: E.grund,
    overflow: 'hidden',
  },
  kopfTreffer: { padding: 14, gap: 8 },

  herkunft: { ...s('700'), fontSize: 11, color: E.neben, letterSpacing: 0.4 },

  textBlock: { gap: 2 },
  /** Platz fuer den Lautsprecher, der darueber schwebt. */
  textBlockSchmal: { paddingRight: 42 },
  schrift: { ...s('700'), fontSize: 17, color: E.text },
  lerntext: { ...s('700'), fontSize: 16, color: E.text },
  lerntextKlein: { ...s('600'), fontSize: 14, color: E.text },
  bedeutung: { ...s('500'), fontSize: 13, color: E.neben },

  lautsprecher: {
    position: 'absolute',
    top: 30,
    right: 12,
    width: 34,
    height: 34,
    borderRadius: 17,
    backgroundColor: E.blauHell,
    alignItems: 'center',
    justifyContent: 'center',
  },

  spur: { flexDirection: 'row', height: 5, borderRadius: 3, overflow: 'hidden', backgroundColor: E.grauHell },
  stueck: { height: '100%' },

  fuss: { flexDirection: 'row', alignItems: 'center', gap: 8 },
  stufenPille: { borderRadius: 100, paddingHorizontal: 8, paddingVertical: 3 },
  stufenText: { ...s('800'), fontSize: 11 },
  fussText: { ...s('500'), fontSize: 12, color: E.neben, flex: 1 },

  detail: {
    borderTopWidth: 1,
    borderTopColor: E.linie,
    backgroundColor: E.grauHell,
    paddingHorizontal: 14,
    paddingVertical: 10,
    gap: 6,
  },
  detailZeile: { flexDirection: 'row', alignItems: 'flex-start', gap: 10 },
  detailLinks: { ...s('500'), fontSize: 12, color: E.neben, width: 148 },
  detailRechts: { ...s('700'), fontSize: 12, color: E.text, flex: 1 },
  seit: { ...s('500'), fontSize: 11, color: E.grau, paddingTop: 2 },
});
