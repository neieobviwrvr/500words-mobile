import { useCallback, useMemo, useState, type ReactNode } from 'react';
import { ActivityIndicator, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { router, useFocusEffect } from 'expo-router';
import type { Card } from 'ts-fsrs';
import { ProgressBar, ProgressProzent, Screen } from '../../components';
import { CATEGORIES, GRUNDWORTSCHATZ_ID, GRUNDWORTSCHATZ_NAME } from '../../data/categories';
import type { CourseModuleData, CourseWord } from '../../data/courseTypes';
import { courseFor } from '../../data/courses';
import { getLanguage } from '../../data/languages';
import type { ExerciseSentence } from '../../data/phrasebookContent';
import { LEARNING_MODE_LABEL, useAppState, type LearningMode } from '../../state/AppState';
import {
  ACCENT_AMBER,
  ACCENT_GREEN,
  ACCENT_GREEN_BG,
  ACCENT_GREEN_DARK,
  ACCENT_ORANGE,
  ACCENT_ORANGE_EDGE,
  FONT_SIZE,
  getTheme,
  karte,
  LINE_HEIGHT,
  PATH_LINE_NEUTRAL,
  PATH_LINE_NEUTRAL_DARK,
  PROGRESS_FILL,
  PROGRESS_SEITE,
  RADIUS,
  SPACING,
  schrift,
} from '../../theme/tokens';
import { useGuidedProgress, type GuidedProgress } from '../home/useGuidedProgress';
import { useUnlockedProgress, type UnlockedProgress } from '../home/useUnlockedProgress';
import { aktionsFarbe, DetailKopf, gruppenGrund } from '../profile/ListenBausteine';
import { ladeTagebuch, type Tagebuch } from '../srs/lerntagebuch';
import { cardKey, KURS_RAHMEN, KURS_WORT } from '../srs/srsStorage';
import {
  datumLang,
  dauerText,
  faelligJeTag,
  gedaechtnisVon,
  kursWoerter,
  lektionenJeTag,
  lerntage,
  letzteTage,
  restweg,
  tagebuchBeginn,
  wackelndZuerst,
  wochentagKurz,
  zaehleGedaechtnis,
  zahlText,
  zeitraumText,
  type FaelligTag,
  type GedaechtnisZahlen,
  type VerlaufTag,
} from './kartenBilanz';

// ---------------------------------------------------------------------------
// Statistik (2026-09-14)
// ---------------------------------------------------------------------------
//
// Nach dem Konzept, das Simon abgenommen hat ("Mach es genau so"): eine Seite
// fuer beide Lernwege, umgeschaltet oben. Die Zahlen kommen aus zwei Quellen -
// den FSRS-Karten (Stand, was sitzt, was faellig ist) und dem Lern-Tagebuch
// (Verlauf, Tempo). Die Rechnungen stehen in kartenBilanz.ts.
//
// **Stand ist genau der Balken auf Start.** Beide Lernwege lesen dieselben
// Hooks wie der Pfad (`useUnlockedProgress`, `useGuidedProgress`), die
// Prozentzahl hier und dort kann also nicht auseinanderlaufen.
//
// **Der Umschalter aendert den Lernweg auf Start NICHT.** Er wechselt nur die
// Ansicht - sonst drehte ein Blick in die Statistik den Pfad um.
//
// **Ton:** keine Fehlerquote, kein Rot. Schwaches heisst "wackelt", steht in
// Bernstein und hat einen Knopf zum Ueben daneben.

type Von = 'start' | 'profil';

function useTagebuch(): Tagebuch | null {
  const [buch, setBuch] = useState<Tagebuch | null>(null);
  useFocusEffect(
    useCallback(() => {
      let aktiv = true;
      ladeTagebuch()
        .then((b) => aktiv && setBuch(b))
        .catch(() => aktiv && setBuch({}));
      return () => {
        aktiv = false;
      };
    }, [])
  );
  return buch;
}

export function StatistikScreen({ weg: startWeg, von = 'start' }: { weg?: LearningMode; von?: Von }) {
  const { darkMode, targetLanguageId, purchased, learningMode } = useAppState();
  const theme = getTheme(darkMode);
  const sprache = getLanguage(targetLanguageId);
  // Der Weg steht in der Adresse, nicht in einem eigenen Zustand: die Seite
  // bleibt in der Tab-Gruppe gemountet, und wer spaeter vom Start aus mit dem
  // anderen Lernweg hereinkommt, soll auch diesen sehen.
  const weg: LearningMode = startWeg ?? learningMode;

  const unlockedIds = useMemo(
    () => [GRUNDWORTSCHATZ_ID, ...CATEGORIES.filter((c) => purchased[c.id]).map((c) => c.id)],
    [purchased]
  );
  const speedrun = useUnlockedProgress(targetLanguageId, unlockedIds);
  const kurs = useGuidedProgress(targetLanguageId);
  const buch = useTagebuch();

  return (
    <Screen dark={darkMode} padHorizontal={false} style={{ backgroundColor: gruppenGrund(darkMode) }}>
      <DetailKopf
        dark={darkMode}
        titel="Statistik"
        zurueck={von === 'profil' ? 'Profil' : 'Start'}
        fallback={von === 'profil' ? '/profil' : '/'}
      />
      <ScrollView contentContainerStyle={styles.seite} showsVerticalScrollIndicator={false}>
        <Text style={[styles.sprache, { color: theme.sub }]}>{sprache.label}</Text>
        <Umschalter dark={darkMode} weg={weg} onWahl={(w) => router.setParams({ weg: w })} />
        <View style={styles.stapel}>
          {weg === 'speedrun' ? (
            <SpeedRunAnsicht
              dark={darkMode}
              sprachId={targetLanguageId}
              tabelle={sprache.table}
              spracheName={sprache.label}
              unlockedIds={unlockedIds}
              stand={speedrun}
              buch={buch}
            />
          ) : (
            <KursAnsicht
              dark={darkMode}
              sprachId={targetLanguageId}
              spracheName={sprache.label}
              stand={kurs}
              buch={buch}
            />
          )}
        </View>
      </ScrollView>
    </Screen>
  );
}

// ------------------------------------------------------------ Speed-Run

function SpeedRunAnsicht({
  dark,
  sprachId,
  tabelle,
  spracheName,
  unlockedIds,
  stand,
  buch,
}: {
  dark: boolean;
  sprachId: string;
  tabelle: string | null;
  spracheName: string;
  unlockedIds: string[];
  stand: UnlockedProgress;
  buch: Tagebuch | null;
}) {
  const theme = getTheme(dark);

  const bilanz = useMemo(() => {
    if (!tabelle) return null;
    const mitKarte: { satz: ExerciseSentence; karte: Card }[] = [];
    for (const satz of stand.saetze) {
      const k = stand.karten[cardKey(sprachId, tabelle, satz.id)];
      if (k) mitKarte.push({ satz, karte: k });
    }
    const karten = mitKarte.map((x) => x.karte);
    return {
      karten: karten.length,
      gedaechtnis: zaehleGedaechtnis(karten),
      faellig: faelligJeTag(karten),
      wackelt: mitKarte
        .filter((x) => gedaechtnisVon(x.karte) === 'wackelt')
        .sort((a, b) => wackelndZuerst(a.karte, b.karte)),
    };
  }, [stand.saetze, stand.karten, sprachId, tabelle]);

  if (!tabelle) {
    return <LeerKasten dark={dark} titel="Noch keine Sätze" text={`Für ${spracheName} gibt es noch keine Sätze.`} />;
  }
  if (stand.loading || !buch || !bilanz) return <Laden />;

  if (bilanz.karten === 0) {
    return (
      <LeerKasten
        dark={dark}
        titel="Noch nichts geübt"
        text="Nach deinen ersten Sätzen siehst du hier, was schon sitzt."
        knopf="Loslegen"
        onKnopf={() => router.push({ pathname: '/exercise', params: { categoryId: GRUNDWORTSCHATZ_ID, mode: 'saetze' } })}
      />
    );
  }

  const kaeufe = unlockedIds.filter((id) => id !== GRUNDWORTSCHATZ_ID);
  const umfang =
    kaeufe.length === 0
      ? GRUNDWORTSCHATZ_NAME
      : kaeufe.length === 1
        ? `${GRUNDWORTSCHATZ_NAME} und ${CATEGORIES.find((c) => c.id === kaeufe[0])?.name ?? '1 Kategorie'}`
        : `${GRUNDWORTSCHATZ_NAME} und ${kaeufe.length} Kategorien`;

  const zeilen = unlockedIds
    .map((id) => ({
      id,
      name: id === GRUNDWORTSCHATZ_ID ? GRUNDWORTSCHATZ_NAME : (CATEGORIES.find((c) => c.id === id)?.name ?? id),
      stand: stand.byCategory[id],
    }))
    .filter((z) => z.stand && z.stand.total > 0);
  const imShop = CATEGORIES.length - kaeufe.length;
  const prozent = Math.round(stand.ratio * 100);

  return (
    <>
      <Kasten dark={dark} titel="Stand" rechts="freigeschaltet">
        <GrosseZahl dark={dark} wert={String(stand.seen)} text={`von ${stand.total} Sätzen geübt`} />
        <StandBalken dark={dark} anteil={stand.ratio} ansage={`${prozent} Prozent deiner freigeschalteten Inhalte geübt`} />
        <Text style={[styles.klein, { color: theme.sub }]}>{umfang}</Text>
      </Kasten>

      <Kasten dark={dark} titel="Wie gut es sitzt" rechts={mengeText(bilanz.karten, 'Satz', 'Sätze')}>
        <GedaechtnisBalken dark={dark} zahlen={bilanz.gedaechtnis} />
      </Kasten>

      <FaelligKasten
        dark={dark}
        tage={bilanz.faellig}
        einzahl="Satz"
        mehrzahl="Sätze"
        onWiederholen={() => router.push('/training/saetze')}
      />

      <VerlaufKasten dark={dark} buch={buch} tage={letzteTage(buch, sprachId, 'speedrun')} weg="speedrun" />

      {zeilen.length > 0 ? (
        <Kasten dark={dark} titel="Kategorien">
          <View style={styles.zeilen}>
            {zeilen.map((z) => (
              <FortschrittsZeile
                key={z.id}
                dark={dark}
                titel={z.name}
                wert={`${z.stand.seen} / ${z.stand.total}`}
                anteil={z.stand.ratio}
              />
            ))}
          </View>
          {imShop > 0 ? (
            <TextKnopf
              dark={dark}
              label={imShop === 1 ? '1 weitere Kategorie im Shop' : `${imShop} weitere Kategorien im Shop`}
              onPress={() => router.push('/shop')}
            />
          ) : null}
        </Kasten>
      ) : null}

      <Kasten dark={dark} titel="Wackelt gerade" rechts={bilanz.wackelt.length > 0 ? mengeText(bilanz.wackelt.length, 'Satz', 'Sätze') : undefined}>
        {bilanz.wackelt.length === 0 ? (
          <Text style={[styles.text, { color: theme.sub }]}>Gerade wackelt kein Satz.</Text>
        ) : (
          <>
            <View style={styles.saetze}>
              {bilanz.wackelt.slice(0, 3).map(({ satz }) => (
                <View key={satz.id} style={[styles.satz, { backgroundColor: theme.subtleFill }]}>
                  <Text style={[styles.satzText, { color: theme.text }]}>{satz.pinyin ?? satz.text}</Text>
                  {satz.germanGloss ? (
                    <Text style={[styles.klein, { color: theme.sub }]}>{satz.germanGloss}</Text>
                  ) : null}
                </View>
              ))}
            </View>
            <KleinerKnopf
              dark={dark}
              art="rand"
              breit
              label={bilanz.wackelt.length === 1 ? 'Diesen Satz üben' : `Diese ${bilanz.wackelt.length} Sätze üben`}
              onPress={() => router.push({ pathname: '/exercise', params: { source: 'wackelt', mode: 'saetze' } })}
            />
          </>
        )}
      </Kasten>
    </>
  );
}

// ------------------------------------------------------------ Gefuehrtes Lernen

function KursAnsicht({
  dark,
  sprachId,
  spracheName,
  stand,
  buch,
}: {
  dark: boolean;
  sprachId: string;
  spracheName: string;
  stand: GuidedProgress;
  buch: Tagebuch | null;
}) {
  const theme = getTheme(dark);
  const kursDaten = courseFor(sprachId);

  const bilanz = useMemo(() => {
    if (!kursDaten) return null;
    const woerter = kursWoerter(kursDaten);
    const wortKarten: { wort: CourseWord; karte: Card }[] = [];
    for (const [schreibung, wort] of woerter) {
      const k = stand.karten[cardKey(sprachId, KURS_WORT, schreibung)];
      if (k) wortKarten.push({ wort, karte: k });
    }
    // Faellig ist, was "Tageslektion" im Kurs abfragt: Wort- UND Rahmenkarten.
    const praefixWort = cardKey(sprachId, KURS_WORT, '');
    const praefixRahmen = cardKey(sprachId, KURS_RAHMEN, '');
    const kursKarten = Object.entries(stand.karten)
      .filter(([key]) => key.startsWith(praefixWort) || key.startsWith(praefixRahmen))
      .map(([, k]) => k);
    return {
      woerterGesamt: woerter.size,
      woerter: wortKarten.length,
      gedaechtnis: zaehleGedaechtnis(wortKarten.map((x) => x.karte)),
      faellig: faelligJeTag(kursKarten),
      wackelt: wortKarten
        .filter((x) => gedaechtnisVon(x.karte) === 'wackelt')
        .sort((a, b) => wackelndZuerst(a.karte, b.karte)),
      rest: restweg(kursDaten, stand.lektionen),
    };
  }, [kursDaten, stand.karten, stand.lektionen, sprachId]);

  if (!kursDaten || !bilanz) {
    return (
      <LeerKasten
        dark={dark}
        titel="Kein Kurs"
        text={
          sprachId === 'de'
            ? 'Deutsch ist die Sprache, aus der du lernst — dafür gibt es keinen Kurs.'
            : `Für ${spracheName} gibt es den geführten Kurs noch nicht.`
        }
      />
    );
  }
  if (stand.loading || !buch) return <Laden />;

  if (stand.fertig === 0 && bilanz.woerter === 0) {
    const erste = stand.aktuelleLektion ?? kursDaten[0]?.lessons[0]?.id ?? '1.1';
    return (
      <LeerKasten
        dark={dark}
        titel="Noch keine Lektion"
        text="Nach deiner ersten Lektion siehst du hier, was schon sitzt."
        knopf={`Lektion ${erste} starten`}
        onKnopf={() => router.push(`/lesson/${erste}`)}
      />
    );
  }

  const modul = kursDaten.find((m) => `modul-${m.number}` === stand.aktuellesModul) ?? null;
  const anteil = stand.gesamt > 0 ? stand.fertig / stand.gesamt : 0;
  const tempo = lektionenJeTag(buch, sprachId);
  const rest = bilanz.rest;

  return (
    <>
      <Kasten dark={dark} titel="Stand" rechts={modul ? (modul.niveau === 'A2' ? 'A2' : 'A1') : undefined}>
        <GrosseZahl dark={dark} wert={String(stand.fertig)} text={`von ${stand.gesamt} Lektionen`} />
        <StandBalken dark={dark} anteil={anteil} ansage={`${Math.round(anteil * 100)} Prozent des Kurses geschafft`} />
        <Text style={[styles.klein, { color: theme.sub }]}>
          {modul ? `Du bist in Modul ${modul.number} · ${modul.title}` : 'Alle Lektionen geschafft'}
        </Text>
      </Kasten>

      <Kasten dark={dark} titel="Wörter" rechts={`von ${bilanz.woerterGesamt} im Kurs`}>
        <GrosseZahl dark={dark} wert={String(bilanz.woerter)} text={bilanz.woerter === 1 ? 'Wort eingeführt' : 'Wörter eingeführt'} />
        <GedaechtnisBalken dark={dark} zahlen={bilanz.gedaechtnis} />
      </Kasten>

      <FaelligKasten
        dark={dark}
        tage={bilanz.faellig}
        einzahl="Karte"
        mehrzahl="Karten"
        onWiederholen={() => router.push('/wiederholen')}
      />

      <VerlaufKasten dark={dark} buch={buch} tage={letzteTage(buch, sprachId, 'gefuehrt')} weg="gefuehrt" />

      {rest ? (
        <Kasten dark={dark} titel={rest.ziel === 'A2' ? 'Bis A2' : 'Bis zum Ende des Kurses'} rechts="Schätzung">
          {tempo ? (
            <GrosseZahl dark={dark} klein wert={`≈ ${zeitraumText(rest.lektionen, tempo)}`} text="bei deinem Tempo" />
          ) : (
            <GrosseZahl dark={dark} klein wert={`≈ ${dauerText(rest.minuten)}`} text="Lernzeit" />
          )}
          <View style={styles.stufenZeile}>
            <Text style={[styles.stufe, { color: theme.text }]}>{rest.ziel === 'A2' ? 'A1' : 'A2'}</Text>
            <View style={styles.flex}>
              <DuennerBalken dark={dark} anteil={rest.anteilStufe} />
            </View>
            <Text style={[styles.stufe, { color: theme.sub }]}>{rest.ziel === 'A2' ? 'A2' : 'Ende'}</Text>
          </View>
          <Text style={[styles.klein, { color: theme.sub }]}>
            {tempo
              ? `Noch ${mengeText(rest.lektionen, 'Lektion', 'Lektionen')}, zusammen etwa ${dauerText(rest.minuten)}. Zuletzt hast du ${zahlText(tempo)} am Tag geschafft.`
              : `Noch ${mengeText(rest.lektionen, 'Lektion', 'Lektionen')}.`}
          </Text>
        </Kasten>
      ) : null}

      <ModuleKasten dark={dark} kurs={kursDaten} stand={stand} />

      <Kasten dark={dark} titel="Wackelt gerade" rechts={bilanz.wackelt.length > 0 ? mengeText(bilanz.wackelt.length, 'Wort', 'Wörter') : undefined}>
        {bilanz.wackelt.length === 0 ? (
          <Text style={[styles.text, { color: theme.sub }]}>Gerade wackelt kein Wort.</Text>
        ) : (
          <>
            <View style={styles.chips}>
              {bilanz.wackelt.slice(0, 6).map(({ wort }) => (
                <View key={wort.schrift} style={[styles.chip, { backgroundColor: theme.subtleFill, borderColor: theme.border }]}>
                  <Text style={[styles.chipWort, { color: theme.text }]}>{wort.lerntext}</Text>
                  <Text style={[styles.chipBedeutung, { color: theme.sub }]}>{wort.de}</Text>
                </View>
              ))}
            </View>
            <KleinerKnopf
              dark={dark}
              art="rand"
              breit
              label={bilanz.wackelt.length === 1 ? 'Dieses Wort üben' : `Diese ${bilanz.wackelt.length} Wörter üben`}
              onPress={() => router.push({ pathname: '/wiederholen', params: { auswahl: 'wackelt' } })}
            />
          </>
        )}
      </Kasten>
    </>
  );
}

/** Module rund um die aktuelle Stelle; auf Wunsch alle. */
function ModuleKasten({ dark, kurs, stand }: { dark: boolean; kurs: CourseModuleData[]; stand: GuidedProgress }) {
  const theme = getTheme(dark);
  const [alle, setAlle] = useState(false);

  const module = kurs.map((m) => {
    const uebungen = m.lessons.filter((l) => l.kind !== 'finisher');
    const fertig = uebungen.filter((l) => stand.lektionen[l.id] === 'done').length;
    const zustand: 'fertig' | 'aktuell' | 'offen' =
      uebungen.length > 0 && fertig === uebungen.length
        ? 'fertig'
        : `modul-${m.number}` === stand.aktuellesModul
          ? 'aktuell'
          : 'offen';
    return { modul: m, fertig, gesamt: uebungen.length, zustand };
  });
  const fertigZahl = module.filter((m) => m.zustand === 'fertig').length;
  const aktuellIndex = Math.max(0, module.findIndex((m) => m.zustand === 'aktuell'));
  // Zwei davor, drei danach - so steht die aktuelle Stelle nicht am Rand.
  const von = Math.max(0, Math.min(aktuellIndex - 2, module.length - 6));
  const sichtbar = alle ? module : module.slice(von, von + 6);

  return (
    <Kasten dark={dark} titel="Module" rechts={`${fertigZahl} von ${module.length} fertig`}>
      <View>
        {sichtbar.map((m, i) => {
          // Vor dem ersten A2-Modul der Liste steht die Stufe - auch dann, wenn
          // die gekuerzte Liste schon in A2 beginnt.
          const vorher = i > 0 ? sichtbar[i - 1].modul.niveau : null;
          const stufenwechsel = m.modul.niveau === 'A2' && vorher !== 'A2';
          return (
            <View key={m.modul.number}>
              {stufenwechsel ? (
                <Text style={[styles.stufenTrenner, { color: theme.sub }]} accessibilityRole="header">
                  A2
                </Text>
              ) : null}
              <View
                style={[styles.modul, i > 0 && !stufenwechsel && { borderTopWidth: StyleSheet.hairlineWidth, borderTopColor: theme.border }]}
                accessible
                accessibilityLabel={`Modul ${m.modul.number}, ${m.modul.title}: ${m.fertig} von ${m.gesamt} Lektionen${m.zustand === 'fertig' ? ', fertig' : m.zustand === 'aktuell' ? ', hier bist du' : ''}`}
              >
                <View
                  style={[
                    styles.modulNummer,
                    m.zustand === 'fertig'
                      ? { backgroundColor: dark ? ACCENT_GREEN_DARK : ACCENT_GREEN_BG }
                      : m.zustand === 'aktuell'
                        ? { backgroundColor: theme.cardBg, borderWidth: 2, borderColor: theme.text }
                        : { backgroundColor: theme.subtleFill },
                  ]}
                >
                  <Text
                    style={[
                      styles.modulNummerText,
                      { color: m.zustand === 'fertig' ? (dark ? '#FFFFFF' : ACCENT_GREEN_DARK) : m.zustand === 'aktuell' ? theme.text : theme.sub },
                    ]}
                  >
                    {m.modul.number}
                  </Text>
                </View>
                <Text
                  style={[styles.modulTitel, { color: m.zustand === 'offen' ? theme.sub : theme.text }]}
                  numberOfLines={1}
                >
                  {m.modul.title}
                </Text>
                <Text
                  style={[
                    styles.modulZahl,
                    { color: m.zustand === 'fertig' ? (dark ? ACCENT_GREEN : ACCENT_GREEN_DARK) : m.zustand === 'aktuell' ? theme.text : theme.sub },
                  ]}
                >
                  {m.fertig} / {m.gesamt}
                </Text>
              </View>
            </View>
          );
        })}
      </View>
      {module.length > 6 ? (
        <TextKnopf
          dark={dark}
          label={alle ? 'Weniger anzeigen' : `Alle ${module.length} Module anzeigen`}
          onPress={() => setAlle((a) => !a)}
        />
      ) : null}
    </Kasten>
  );
}

// ------------------------------------------------------------ Bausteine

function Umschalter({ dark, weg, onWahl }: { dark: boolean; weg: LearningMode; onWahl: (w: LearningMode) => void }) {
  const theme = getTheme(dark);
  return (
    <View style={[styles.umschalter, { backgroundColor: dark ? theme.cardBg : theme.border }]} accessibilityRole="tablist">
      {(['speedrun', 'gefuehrt'] as const).map((w) => {
        const an = w === weg;
        return (
          <Pressable
            key={w}
            onPress={() => onWahl(w)}
            accessibilityRole="tab"
            accessibilityState={{ selected: an }}
            aria-selected={an}
            style={[
              styles.umschalterFeld,
              an && [styles.umschalterAn, { backgroundColor: dark ? theme.dividerColor : theme.cardBg }],
            ]}
          >
            <Text style={[styles.umschalterText, { color: an ? theme.text : theme.sub }]}>{LEARNING_MODE_LABEL[w]}</Text>
          </Pressable>
        );
      })}
    </View>
  );
}

function Kasten({ dark, titel, rechts, children }: { dark: boolean; titel?: string; rechts?: string; children: ReactNode }) {
  const theme = getTheme(dark);
  return (
    <View style={[styles.kasten, karte(dark), { backgroundColor: theme.cardBg }]}>
      {titel ? (
        <View style={styles.kastenKopf}>
          <Text style={[styles.kastenTitel, { color: theme.text }]} accessibilityRole="header">
            {titel}
          </Text>
          {rechts ? <Text style={[styles.kastenRechts, { color: theme.sub }]}>{rechts}</Text> : null}
        </View>
      ) : null}
      {children}
    </View>
  );
}

function GrosseZahl({ dark, wert, text, klein }: { dark: boolean; wert: string; text: string; klein?: boolean }) {
  const theme = getTheme(dark);
  return (
    <View style={styles.grosseZahl} accessible accessibilityLabel={`${wert} ${text}`}>
      <Text style={[klein ? styles.grosseZahlKlein : styles.grosseZahlWert, { color: theme.text }]}>{wert}</Text>
      <Text style={[styles.grosseZahlText, { color: theme.sub }]}>{text}</Text>
    </View>
  );
}

/** Derselbe Balken wie auf Start, mit Prozentzahl daneben. */
function StandBalken({ dark, anteil, ansage }: { dark: boolean; anteil: number; ansage: string }) {
  return (
    <View style={styles.balkenZeile}>
      <View style={styles.flex}>
        <ProgressBar dark={dark} ratio={anteil} label={ansage} />
      </View>
      <View style={styles.prozentPlatz}>
        <ProgressProzent dark={dark} ratio={anteil} />
      </View>
    </View>
  );
}

function DuennerBalken({ dark, anteil }: { dark: boolean; anteil: number }) {
  const theme = getTheme(dark);
  return (
    <View style={[styles.duennSpur, { backgroundColor: theme.border }]} accessibilityElementsHidden importantForAccessibility="no-hide-descendants">
      <View style={[styles.duennFuellung, { width: `${Math.round(Math.min(1, Math.max(0, anteil)) * 100)}%` }]} />
    </View>
  );
}

function FortschrittsZeile({ dark, titel, wert, anteil }: { dark: boolean; titel: string; wert: string; anteil: number }) {
  const theme = getTheme(dark);
  return (
    <View style={styles.fortschrittsZeile} accessible accessibilityLabel={`${titel}: ${wert.replace(' / ', ' von ')} geübt`}>
      <View style={styles.fortschrittsKopf}>
        <Text style={[styles.fortschrittsTitel, { color: theme.text }]} numberOfLines={1}>
          {titel}
        </Text>
        <Text style={[styles.fortschrittsWert, { color: theme.sub }]}>{wert}</Text>
      </View>
      <DuennerBalken dark={dark} anteil={anteil} />
    </View>
  );
}

function GedaechtnisBalken({ dark, zahlen }: { dark: boolean; zahlen: GedaechtnisZahlen }) {
  const theme = getTheme(dark);
  const teile = [
    { id: 'sitzt', label: 'Sitzt', zusatz: 'auch in drei Wochen noch da', farbe: ACCENT_GREEN, anzahl: zahlen.sitzt },
    { id: 'aufbau', label: 'Im Aufbau', zusatz: null, farbe: dark ? PATH_LINE_NEUTRAL_DARK : PATH_LINE_NEUTRAL, anzahl: zahlen.aufbau },
    { id: 'wackelt', label: 'Wackelt', zusatz: 'öfter vergessen', farbe: ACCENT_AMBER, anzahl: zahlen.wackelt },
  ];
  return (
    <>
      <View
        style={[styles.split, { backgroundColor: theme.border }]}
        accessibilityElementsHidden
        importantForAccessibility="no-hide-descendants"
      >
        {teile
          .filter((t) => t.anzahl > 0)
          .map((t) => (
            <View key={t.id} style={{ flex: t.anzahl, backgroundColor: t.farbe }} />
          ))}
      </View>
      <View style={styles.legende}>
        {teile.map((t) => (
          <View key={t.id} style={styles.legendeZeile} accessible accessibilityLabel={`${t.label}: ${t.anzahl}`}>
            <View style={[styles.punkt, { backgroundColor: t.farbe }]} />
            <Text style={[styles.legendeText, { color: theme.text }]}>
              {t.label}
              {t.zusatz ? <Text style={{ color: theme.sub }}>{` · ${t.zusatz}`}</Text> : null}
            </Text>
            <Text style={[styles.legendeZahl, { color: theme.text }]}>{t.anzahl}</Text>
          </View>
        ))}
      </View>
    </>
  );
}

function FaelligKasten({
  dark,
  tage,
  einzahl,
  mehrzahl,
  onWiederholen,
}: {
  dark: boolean;
  tage: FaelligTag[];
  einzahl: string;
  mehrzahl: string;
  onWiederholen: () => void;
}) {
  const theme = getTheme(dark);
  const heute = tage[0]?.anzahl ?? 0;
  const naechster = tage.slice(1).find((t) => t.anzahl > 0);
  return (
    <Kasten dark={dark}>
      <View style={styles.faelligKopf}>
        <View style={styles.flex}>
          <Text style={[styles.faelligTitel, { color: theme.text }]} accessibilityRole="header">
            {heute > 0 ? `${mengeText(heute, einzahl, mehrzahl)} fällig` : 'Heute ist nichts fällig'}
          </Text>
          <Text style={[styles.klein, { color: theme.sub }]}>
            {heute > 0
              ? 'heute'
              : naechster
                ? `als Nächstes am ${wochentagKurz(naechster.datum)}: ${naechster.anzahl}`
                : 'die ganze Woche nicht'}
          </Text>
        </View>
        {heute > 0 ? <KleinerKnopf dark={dark} label="Wiederholen" onPress={onWiederholen} /> : null}
      </View>
      <View
        style={[styles.tage, { borderTopColor: theme.border }]}
        accessible
        accessibilityLabel={`Fällig in den nächsten Tagen: ${tage
          .map((t, i) => `${i === 0 ? 'heute' : wochentagKurz(t.datum)} ${t.anzahl}`)
          .join(', ')}`}
      >
        {tage.map((t, i) => (
          <View key={t.datum.getTime()} style={styles.tagSpalte}>
            <Text style={[styles.tagName, { color: theme.sub }]}>{i === 0 ? 'Heute' : wochentagKurz(t.datum)}</Text>
            <Text style={[styles.tagZahl, { color: i === 0 ? aktionsFarbe(dark) : theme.text }]}>{t.anzahl}</Text>
          </View>
        ))}
      </View>
    </Kasten>
  );
}

const SAEULEN_HOEHE = 72;

function VerlaufKasten({ dark, buch, tage, weg }: { dark: boolean; buch: Tagebuch; tage: VerlaufTag[]; weg: LearningMode }) {
  const theme = getTheme(dark);
  const beginn = tagebuchBeginn(buch);
  const einheit = weg === 'speedrun' ? 'Antworten' : 'Lektionen';

  if (!beginn) {
    return (
      <Kasten dark={dark} titel="Letzte 7 Tage">
        <Text style={[styles.text, { color: theme.sub }]}>Ab deiner nächsten Übung siehst du hier jeden Lerntag.</Text>
      </Kasten>
    );
  }

  const wert = (t: VerlaufTag) => (weg === 'speedrun' ? t.antworten : t.lektionen);
  // Eine Skala fuer alle sieben Saeulen: die hoechste fuellt die Hoehe.
  const hoechster = Math.max(1, ...tage.filter((t) => !t.vorBeginn).map(wert));
  const tageGelernt = lerntage(tage);
  const antworten = tage.reduce((s, t) => s + t.antworten, 0);
  const verstanden = tage.reduce((s, t) => s + t.verstanden, 0);
  const lektionen = tage.reduce((s, t) => s + t.lektionen, 0);
  const teilweise = tage.some((t) => t.vorBeginn);
  const lerntageText = mengeText(tageGelernt, 'Lerntag', 'Lerntage');

  return (
    <Kasten dark={dark} titel="Letzte 7 Tage" rechts={einheit}>
      <View
        style={styles.saeulen}
        accessible
        accessibilityLabel={`${einheit} der letzten 7 Tage: ${tage
          .map((t) => `${wochentagKurz(t.datum)} ${t.vorBeginn ? 'nicht gezählt' : wert(t)}`)
          .join(', ')}`}
      >
        {tage.map((t, i) => {
          const heute = i === tage.length - 1;
          const v = wert(t);
          return (
            <View key={t.datum.getTime()} style={styles.saeule}>
              <Text style={[styles.saeulenWert, { color: theme.sub }]}>{t.vorBeginn ? ' ' : v}</Text>
              <View style={styles.saeulenPlatz}>
                {t.vorBeginn ? (
                  <View style={[styles.saeulenLeer, { borderColor: theme.dividerColor }]} />
                ) : (
                  <View
                    style={[
                      styles.saeulenBalken,
                      {
                        height: v > 0 ? Math.max(4, Math.round((v / hoechster) * SAEULEN_HOEHE)) : 3,
                        backgroundColor: v === 0 ? theme.dividerColor : heute ? ACCENT_ORANGE_EDGE : ACCENT_ORANGE,
                      },
                    ]}
                  />
                )}
              </View>
              <Text style={[styles.saeulenTag, { color: heute ? theme.text : theme.sub }, heute && styles.saeulenHeute]}>
                {wochentagKurz(t.datum)}
              </Text>
            </View>
          );
        })}
      </View>
      <View style={[styles.verlaufFuss, { borderTopColor: theme.border }]}>
        {weg === 'speedrun' ? (
          <>
            <Text style={[styles.klein, { color: theme.sub }]}>{lerntageText}</Text>
            {antworten > 0 ? (
              <Text style={[styles.klein, { color: theme.sub }]}>
                verstanden <Text style={[styles.fussZahl, { color: theme.text }]}>{Math.round((verstanden / antworten) * 100)} %</Text>
              </Text>
            ) : null}
          </>
        ) : (
          <>
            <Text style={[styles.klein, { color: theme.sub }]}>{mengeText(lektionen, 'Lektion', 'Lektionen')}</Text>
            <Text style={[styles.klein, { color: theme.sub }]}>{lerntageText}</Text>
          </>
        )}
      </View>
      {teilweise ? (
        <Text style={[styles.klein, { color: theme.sub }]}>Gezählt wird seit dem {datumLang(beginn)}.</Text>
      ) : null}
    </Kasten>
  );
}

function LeerKasten({
  dark,
  titel,
  text,
  knopf,
  onKnopf,
}: {
  dark: boolean;
  titel: string;
  text: string;
  knopf?: string;
  onKnopf?: () => void;
}) {
  const theme = getTheme(dark);
  return (
    <Kasten dark={dark} titel={titel}>
      <Text style={[styles.text, { color: theme.sub }]}>{text}</Text>
      {knopf && onKnopf ? <KleinerKnopf dark={dark} label={knopf} onPress={onKnopf} breit /> : null}
    </Kasten>
  );
}

function KleinerKnopf({
  dark,
  label,
  onPress,
  art = 'voll',
  breit,
}: {
  dark: boolean;
  label: string;
  onPress: () => void;
  art?: 'voll' | 'rand';
  breit?: boolean;
}) {
  const theme = getTheme(dark);
  return (
    <Pressable
      onPress={onPress}
      hitSlop={6}
      accessibilityRole="button"
      style={({ pressed }) => [
        styles.knopf,
        breit && styles.knopfBreit,
        art === 'voll'
          ? { backgroundColor: ACCENT_ORANGE }
          : { borderWidth: 1.5, borderColor: theme.dividerColor, backgroundColor: 'transparent' },
        pressed && styles.gedrueckt,
      ]}
    >
      <Text style={[styles.knopfText, { color: art === 'voll' ? '#FFFFFF' : aktionsFarbe(dark) }]}>{label}</Text>
    </Pressable>
  );
}

function TextKnopf({ dark, label, onPress }: { dark: boolean; label: string; onPress: () => void }) {
  return (
    <Pressable
      onPress={onPress}
      hitSlop={10}
      accessibilityRole="button"
      style={({ pressed }) => [styles.textKnopf, pressed && styles.gedrueckt]}
    >
      <Text style={[styles.textKnopfText, { color: aktionsFarbe(dark) }]}>{label}</Text>
    </Pressable>
  );
}

function Laden() {
  return (
    <View style={styles.laden}>
      <ActivityIndicator />
    </View>
  );
}

function mengeText(anzahl: number, einzahl: string, mehrzahl: string): string {
  return `${anzahl} ${anzahl === 1 ? einzahl : mehrzahl}`;
}

const ZIFFERN = { fontVariant: ['tabular-nums' as const] };

const styles = StyleSheet.create({
  seite: {
    paddingHorizontal: SPACING.lg,
    paddingBottom: SPACING.xxxl,
  },
  flex: { flex: 1 },
  sprache: {
    textAlign: 'center',
    fontSize: FONT_SIZE.small,
    lineHeight: LINE_HEIGHT.small,
  },
  stapel: {
    gap: SPACING.md,
    marginTop: SPACING.lg,
  },
  laden: {
    paddingVertical: SPACING.xxxl,
    alignItems: 'center',
  },

  umschalter: {
    flexDirection: 'row',
    borderRadius: RADIUS.pill,
    padding: 3,
    marginTop: SPACING.md,
  },
  umschalterFeld: {
    flex: 1,
    minHeight: 36,
    borderRadius: RADIUS.pill,
    alignItems: 'center',
    justifyContent: 'center',
  },
  umschalterAn: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.12,
    shadowRadius: 2,
    elevation: 1,
  },
  umschalterText: {
    fontSize: FONT_SIZE.small,
    ...schrift('700'),
  },

  kasten: {
    padding: SPACING.lg,
    gap: SPACING.md,
  },
  kastenKopf: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'baseline',
    gap: SPACING.sm,
  },
  kastenTitel: {
    fontSize: FONT_SIZE.body,
    lineHeight: LINE_HEIGHT.body,
    ...schrift('800'),
    flexShrink: 1,
  },
  kastenRechts: {
    fontSize: FONT_SIZE.caption,
    lineHeight: LINE_HEIGHT.caption,
    ...ZIFFERN,
  },
  text: {
    fontSize: FONT_SIZE.body,
    lineHeight: LINE_HEIGHT.body,
  },
  klein: {
    fontSize: FONT_SIZE.small,
    lineHeight: LINE_HEIGHT.small,
  },

  grosseZahl: {
    flexDirection: 'row',
    alignItems: 'baseline',
    flexWrap: 'wrap',
    columnGap: SPACING.sm,
  },
  grosseZahlWert: {
    fontSize: FONT_SIZE.h1,
    lineHeight: LINE_HEIGHT.h1,
    ...schrift('800'),
    ...ZIFFERN,
  },
  grosseZahlKlein: {
    fontSize: FONT_SIZE.h2,
    lineHeight: LINE_HEIGHT.h2,
    ...schrift('800'),
  },
  grosseZahlText: {
    fontSize: FONT_SIZE.body,
    lineHeight: LINE_HEIGHT.body,
  },

  balkenZeile: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: SPACING.md,
  },
  prozentPlatz: {
    minWidth: PROGRESS_SEITE,
    alignItems: 'flex-end',
  },
  duennSpur: {
    height: 6,
    borderRadius: RADIUS.pill,
    overflow: 'hidden',
  },
  duennFuellung: {
    height: '100%',
    borderRadius: RADIUS.pill,
    backgroundColor: PROGRESS_FILL,
  },

  split: {
    flexDirection: 'row',
    height: 12,
    borderRadius: RADIUS.pill,
    overflow: 'hidden',
    gap: 2,
  },
  legende: {
    gap: SPACING.sm,
  },
  legendeZeile: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: SPACING.sm,
  },
  punkt: {
    width: 10,
    height: 10,
    borderRadius: 3,
  },
  legendeText: {
    flex: 1,
    fontSize: FONT_SIZE.small,
    lineHeight: LINE_HEIGHT.small,
  },
  legendeZahl: {
    fontSize: FONT_SIZE.small,
    lineHeight: LINE_HEIGHT.small,
    ...schrift('800'),
    ...ZIFFERN,
  },

  faelligKopf: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: SPACING.md,
  },
  faelligTitel: {
    fontSize: FONT_SIZE.bodyLg,
    lineHeight: LINE_HEIGHT.bodyLg,
    ...schrift('800'),
  },
  tage: {
    flexDirection: 'row',
    borderTopWidth: StyleSheet.hairlineWidth,
    paddingTop: SPACING.sm,
  },
  tagSpalte: {
    flex: 1,
    alignItems: 'center',
  },
  tagName: {
    fontSize: FONT_SIZE.caption,
    lineHeight: LINE_HEIGHT.caption,
  },
  tagZahl: {
    fontSize: FONT_SIZE.body,
    lineHeight: LINE_HEIGHT.body,
    ...schrift('800'),
    ...ZIFFERN,
  },

  saeulen: {
    flexDirection: 'row',
    gap: SPACING.sm,
  },
  saeule: {
    flex: 1,
    alignItems: 'center',
  },
  saeulenWert: {
    fontSize: FONT_SIZE.caption,
    lineHeight: LINE_HEIGHT.caption,
    ...schrift('700'),
    ...ZIFFERN,
  },
  saeulenPlatz: {
    height: SAEULEN_HOEHE,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'flex-end',
    marginTop: 2,
  },
  saeulenBalken: {
    width: '72%',
    maxWidth: 26,
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
    borderBottomLeftRadius: 3,
    borderBottomRightRadius: 3,
  },
  saeulenLeer: {
    width: '72%',
    maxWidth: 26,
    height: 3,
    borderTopWidth: 1.5,
    borderStyle: 'dashed',
  },
  saeulenTag: {
    fontSize: FONT_SIZE.caption,
    lineHeight: LINE_HEIGHT.caption,
    marginTop: SPACING.xs,
  },
  saeulenHeute: {
    ...schrift('800'),
  },
  verlaufFuss: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderTopWidth: StyleSheet.hairlineWidth,
    paddingTop: SPACING.sm,
  },
  fussZahl: {
    ...schrift('800'),
    ...ZIFFERN,
  },

  zeilen: {
    gap: SPACING.md,
  },
  fortschrittsZeile: {
    gap: 6,
  },
  fortschrittsKopf: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: SPACING.sm,
  },
  fortschrittsTitel: {
    flex: 1,
    fontSize: FONT_SIZE.small,
    lineHeight: LINE_HEIGHT.small,
    ...schrift('700'),
  },
  fortschrittsWert: {
    fontSize: FONT_SIZE.small,
    lineHeight: LINE_HEIGHT.small,
    ...ZIFFERN,
  },

  stufenZeile: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: SPACING.sm,
  },
  stufe: {
    fontSize: FONT_SIZE.caption,
    lineHeight: LINE_HEIGHT.caption,
    ...schrift('800'),
  },

  modul: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: SPACING.sm,
    paddingVertical: SPACING.sm,
  },
  modulNummer: {
    width: 24,
    height: 24,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  modulNummerText: {
    fontSize: FONT_SIZE.caption,
    ...schrift('800'),
    ...ZIFFERN,
  },
  modulTitel: {
    flex: 1,
    fontSize: FONT_SIZE.small,
    lineHeight: LINE_HEIGHT.small,
    ...schrift('700'),
  },
  modulZahl: {
    fontSize: FONT_SIZE.small,
    lineHeight: LINE_HEIGHT.small,
    ...schrift('700'),
    ...ZIFFERN,
  },
  stufenTrenner: {
    fontSize: FONT_SIZE.caption,
    lineHeight: LINE_HEIGHT.caption,
    ...schrift('800'),
    marginTop: SPACING.md,
    marginBottom: SPACING.xs,
  },

  saetze: {
    gap: SPACING.sm,
  },
  satz: {
    borderRadius: RADIUS.md,
    paddingVertical: SPACING.sm,
    paddingHorizontal: SPACING.md,
  },
  satzText: {
    fontSize: FONT_SIZE.body,
    lineHeight: LINE_HEIGHT.body,
    ...schrift('700'),
  },
  chips: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: SPACING.sm,
  },
  chip: {
    flexDirection: 'row',
    alignItems: 'baseline',
    gap: 6,
    borderWidth: 1,
    borderRadius: RADIUS.pill,
    paddingVertical: 6,
    paddingHorizontal: SPACING.md,
  },
  chipWort: {
    fontSize: FONT_SIZE.small,
    ...schrift('800'),
  },
  chipBedeutung: {
    fontSize: FONT_SIZE.caption,
  },

  knopf: {
    minHeight: 40,
    borderRadius: RADIUS.pill,
    paddingHorizontal: SPACING.lg,
    alignItems: 'center',
    justifyContent: 'center',
  },
  knopfBreit: {
    alignSelf: 'stretch',
  },
  knopfText: {
    fontSize: FONT_SIZE.small,
    ...schrift('800'),
  },
  textKnopf: {
    alignSelf: 'flex-start',
    minHeight: 32,
    justifyContent: 'center',
  },
  textKnopfText: {
    fontSize: FONT_SIZE.small,
    ...schrift('700'),
  },
  gedrueckt: {
    opacity: 0.7,
  },
});
