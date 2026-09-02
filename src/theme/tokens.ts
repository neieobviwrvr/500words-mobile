// Design-Tokens der App.
//
// Herkunft (2026-08-17): Die Farben stammten urspruenglich 1:1 aus dem
// Claude-Design-Prototyp "Sprachlern-App.dc.html" und waren warm-beige
// (#EFEBE1 / #FAF9F4). Mit der Entscheidung fuer das Stil-Rezept
// "70% Babbel / 30% Duolingo" ist die Grundflaeche jetzt WEISS - beide
// Vorbilder sind weiss, und das Beige war der groesste sichtbare Bruch
// zwischen unserer App und dem angestrebten Bild.
//
// Neu dazugekommen sind Abstaende, Radien und Schriftgroessen. Vorher gab es
// nur Farben, alle Abstaende waren in den einzelnen Screens von Hand
// eingetippt und entsprechend auseinandergedriftet.


export type Theme = {
  dark: boolean;
  pageBg: string;
  bg: string;
  cardBg: string;
  border: string;
  text: string;
  sub: string;
  pathBoxBg: string;
  modeBg: string;
  buyBg: string;
  dividerColor: string;
  // Neu: dezente Fuellung fuer nicht ausgewaehlte Auswahlzeilen im
  // Onboarding (Babbel nutzt dort einen Hauch Grau statt reinem Weiss,
  // damit die Karte sich vom weissen Seitenhintergrund abhebt).
  subtleFill: string;
};

export function getTheme(dark: boolean): Theme {
  return {
    dark,
    pageBg: dark ? '#0F0F0E' : '#FFFFFF',
    bg: dark ? '#171715' : '#FAFAF9',
    cardBg: dark ? '#1D1D1B' : '#FFFFFF',
    border: dark ? '#33322E' : '#E6E4E0',
    text: dark ? '#F5F4F1' : '#1A1A18',
    sub: dark ? '#A3A099' : '#6B6862',
    pathBoxBg: dark ? '#1A1A18' : '#FFFFFF',
    modeBg: dark ? '#1F2A3E' : '#EDF2FC',
    buyBg: dark ? '#16261C' : '#EAF6EE',
    dividerColor: dark ? '#4A4842' : '#D8D5CF',
    subtleFill: dark ? '#232320' : '#F5F4F1',
  };
}

// ---------------------------------------------------------------------------
// Abstaende
// ---------------------------------------------------------------------------
// Eine Skala statt frei gewaehlter Zahlen. Wer einen Zwischenwert braucht,
// nimmt den naechstgelegenen Schritt - nicht eine neue Zahl erfinden.
export const SPACING = {
  xs: 4,
  sm: 8,
  md: 12,
  lg: 16,
  xl: 24,
  xxl: 32,
  xxxl: 48,
} as const;

// ---------------------------------------------------------------------------
// Radien
// ---------------------------------------------------------------------------
// Mittlere Rundungen nach Babbel-Vorbild - bewusst NICHT Duolingos sehr
// weiche, dicke Formen. `pill` ist fuer vollflaechige Knoepfe.
export const RADIUS = {
  sm: 8,
  md: 12,
  lg: 16,
  // Ergaenzt 2026-08-31 fuer die hervorgehobene Karte: bei einer grossen,
  // farbigen Flaeche wirken 16 kantig. Entspricht Tailwinds `rounded-3xl`.
  xl: 24,
  pill: 100,
} as const;

// ---------------------------------------------------------------------------
// Erhebung (Schatten)
// ---------------------------------------------------------------------------
// Bis 2026-08-30 definierte jede Stelle ihre eigenen Schattenwerte
// (UebungsMenu, PathScreen, Tab-Leiste) - drei Mal dasselbe Muster mit drei
// verschiedenen Zahlen. Hier die gemeinsame Skala. Bestehende Stellen sind
// bewusst NICHT umgestellt (das waere ein eigener Umbau), koennen aber nach
// und nach hierher wandern.
//
// EINE Regel dahinter: der Schatten waechst mit der Hoehe, in die ein Element
// zu schweben vorgibt. Ein Chip liegt knapp ueber dem Papier, ein Menue
// deutlich darueber, die Tab-Leiste am hoechsten. Wer einem kleinen Element
// einen grossen Schatten gibt, laesst es schmutzig aussehen statt erhaben.
//
// Der Versatz geht IMMER nach unten (`height` positiv, `width` 0): das Licht
// kommt von oben, wie in jeder anderen App auch. Ein seitlicher Versatz
// wirkt sofort wie ein Fehler.
//
// Android braucht `elevation` (eigenes System, kennt shadow* nicht), iOS und
// Web brauchen shadow*. Deshalb immer beides.
export const ELEVATION = {
  /**
   * Chips und kleine Pillen. Bewusst sehr flach - die Abhebung soll man
   * spueren, nicht sehen. Zusammen mit einer leicht getoenten Fuellung
   * ersetzt sie den Rahmen: Rahmen UND Schatten waeren eine doppelte
   * Abgrenzung, die den Knopf schwer und billig wirken laesst.
   */
  chip: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.1,
    elevation: 2,
  },
} as const;

/**
 * Im Darkmode traegt ein schwarzer Schatten auf dunklem Grund nichts bei -
 * sichtbar wird Hoehe dort ueber eine HELLERE Flaeche, nicht ueber einen
 * dunkleren Rand. Diese Funktion gibt deshalb im Darkmode keinen Schatten
 * zurueck; die Fuellfarbe uebernimmt die Aufgabe (siehe `chipFill`).
 */
export function elevation(dark: boolean, stufe: keyof typeof ELEVATION) {
  return dark ? null : ELEVATION[stufe];
}

// ---------------------------------------------------------------------------
// 3D-Kachel (2026-09-01, Simons Vorgabe fuer die weissen Flaechen auf S1)
// ---------------------------------------------------------------------------
//
// Weiss auf Off-White hebt sich nicht ab, und ein weicher Schatten loest das
// nicht: er verschwindet auf hellem Grund und wird auf Android ueber
// `elevation` grau und unsauber. Stattdessen dieselbe Bauweise wie bei den
// Grundwortschatz-Karten (2026-08-31): ein sichtbarer Rahmen ringsum, unten
// dicker - das liest sich als Kachel mit Dicke, nicht als schwebende Flaeche.
//
// EINE Funktion fuer alle Stellen, weil es hier schon zweimal auseinander
// gelaufen ist: Kopfzeile, Positionskasten, Wechsel-Knopf und das
// Wiederholen-Banner liegen in drei verschiedenen Dateien und muessen
// trotzdem gleich aussehen.
//
// **Nachgezogen 2026-09-01 ("Boom"-Vorgabe):** Simons Ruecklauf auf die
// erste Fassung ("zu unauffaellige Grau-Toene") war eine echte Kehrtwende -
// `#CBD5E1` (slate-300) war seine EIGENE Vorgabe vom selben Tag ein paar
// Nachrichten frueher ("gut sichtbares, aber neutrales Hellgrau"). Jetzt gilt
// slate-400: sichtbar kraeftiger, bleibt aber neutral-grau statt in eine
// Akzentfarbe zu kippen - die Kacheln sollen mehr Kontur haben, nicht mehr
// Bunt (das uebernehmen ab jetzt die Kategorie-Kacheln im Pfad, siehe
// `KATEGORIE_FARBEN`).
// Exportiert (2026-09-01): `PillButton.tsx` braucht denselben Ton fuer den
// Rahmen seiner Sekundaer-/Ghost-Variante - sonst staende ein Knopf mit
// `theme.border` (deutlich heller) direkt neben einer `kachel()`-Flaeche und
// die beiden passten sichtbar nicht zusammen.
export const KACHEL_RAND_LIGHT = '#94A3B8';

// ---------------------------------------------------------------------------
// "Floating Card" - weicher Schatten statt 3D-Kante (2026-09-02, nur fuer
// den Survival-Screen)
// ---------------------------------------------------------------------------
//
// GEGENSTUECK zu `kachel()`, bewusst als eigener Baustein: Simon wollte fuer
// Survival ausdruecklich weg vom harten 3D-Kanten-Look, den der Rest der App
// traegt - ein sanfter Schwebe-Schatten statt einer dicken Unterkante.
//
// WICHTIGER VORBEHALT, nicht verschwiegen: genau diese Technik (`shadow*` /
// `elevation`) stand schon einmal im Code - bei den Lektionen-Kategoriekarten
// (`KARTE_GRUND` in `LessonsScreen.tsx`, siehe Kommentar dort) - und wurde
// wieder verworfen: auf iOS blieb der Schatten zu schwach, um wahrgenommen zu
// werden, und Android hat keine `shadow*`-Eigenschaften und rechnet
// `elevation` stattdessen in einen eigenen, deutlich haerteren, GRAUEN
// Schatten um. Beide Systeme sehen also nicht wie hier vorgesehen aus.
// Trotzdem umgesetzt, weil Simon es fuer DIESEN Screen ausdruecklich und mit
// exakten Werten angefordert hat - nicht uebersehen, sondern eine bewusste
// Kehrtwende von der zuvor etablierten Regel.
// `shadowOpacity` von 0.08 auf 0.16 (2026-09-02, noch am selben Tag):
// Simons eigene Werte waren im Browser nachgemessen technisch korrekt
// gesetzt, aber auf dem Screen praktisch unsichtbar - 0.08 verschwindet
// gegen den Off-White-Hintergrund. Simons Entscheidung, als der Beleg
// stand: kraeftiger statt zurueck zur 3D-Kante.
export const FLOATING_SHADOW = {
  shadowColor: '#64748B',
  shadowOffset: { width: 0, height: 4 },
  shadowOpacity: 0.16,
  shadowRadius: 12,
  elevation: 3,
} as const;

// Duenner, sehr heller Rahmen fuer den Floating-Look - anders als
// `KACHEL_RAND_LIGHT` (satt, traegt hier keine Tiefe mehr, das macht der
// Schatten) reicht ein blasser Ton, der die Kontur nur andeutet.
export const FLOATING_BORDER = '#E2E8F0';

/**
 * @param tiefe Dicke der unteren Kante - je schwerer das Element wirken soll,
 *   desto groesser.
 *
 *   Default seit 2026-09-02: 2 (Kehrtwende Nummer zwei am selben Tag - erst
 *   4, dann 5, jetzt 2). Grund: beim Umbau des Survival-Screens standen zu
 *   viele gleich schwer wirkende Kacheln nebeneinander ("kognitiv
 *   ueberladen", Simons Wort) - Kopfzeilen-Knoepfe, Dropdown, Tab-Leiste und
 *   Chips zogen alle gleich stark am Auge. Simons Entscheidung, als die
 *   Wahl anstand, DIESEN Wert (statt eine Sondervariante nur fuer Survival)
 *   zu senken: die kleinen, haeufigen Elemente (Kopfzeile, Tab-Leiste,
 *   Auswahl-Zeilen) sollen leise sein; grosse, seltene Flaechen (das
 *   Wiederholen-Banner, gespeicherte Saetze, der Survival-Kasten) rufen
 *   weiterhin laut, weil sie ihre Tiefe explizit ALS ZWEITEN PARAMETER
 *   anfordern (6 o.ae.), nicht ueber den Default.
 *
 * Im Darkmode gilt die Themenkontur: ein slate-400-Rahmen waere dort die
 * hellste Linie im Bild. Die Dicke unten bleibt, sie traegt die Form.
 */
export function kachel(dark: boolean, tiefe = 2) {
  return {
    borderWidth: 1.5,
    borderBottomWidth: tiefe,
    borderColor: dark ? getTheme(true).border : KACHEL_RAND_LIGHT,
  } as const;
}

// ---------------------------------------------------------------------------
// Schrift
// ---------------------------------------------------------------------------
// Bis 2026-09-01 stand hier Babbels Rezept: eine Serifen-Headline (Georgia
// auf iOS, "serif" auf Android) gegen einen serifenlosen Rest. Simons
// ausdruecklicher Schnitt an diesem Tag: die Serife ist komplett raus, JEDE
// Textstelle der App laeuft ueber Nunito. `FONT_FAMILY.serif` gibt es
// deshalb nicht mehr - wer sie sucht, findet sie nicht, das ist Absicht und
// kein Versehen.
//
// **Nunito ist seit 2026-08-31 die eine Markenschrift** (Simons
// Entscheidung). Rund und freundlich, passt zum verspielten Karten-Stil,
// ohne kindlich zu wirken - und deckt, anders als Georgia, auch die
// Hatschek-Vokale des Pinyin-DRITTEN Tons ab (ǎ U+01CE, ǒ U+01D2; geprueft
// per DOM-Breitenvergleich). Genau diese Luecke bei Georgia war der Grund,
// warum `LessonScreen.tsx` seine Pinyin-Zeile schon vorher nie in Serife
// gesetzt hatte - der Sonderfall ist mit dem Schnitt hinfaellig, weil jetzt
// ohnehin ueberall Nunito gilt.
//
// **WICHTIG - je Gewicht eine eigene Familie.** Anders als bei der
// Systemschrift wirkt `fontWeight` bei einer geladenen Schrift auf iOS und
// Android NICHT: dort muss die passende Schnittfamilie benannt werden.
// `fontWeight` allein waere im Web richtig und auf dem Geraet wirkungslos -
// genau die Art Fehler, die erst auf dem Testgeraet auffaellt. Deshalb
// `schrift(gewicht)` benutzen statt `fontWeight`.
export const FONT_FAMILY = {
  sans: 'Nunito_400Regular',
  sansMedium: 'Nunito_500Medium',
  sansSemiBold: 'Nunito_600SemiBold',
  sansBold: 'Nunito_700Bold',
  sansExtraBold: 'Nunito_800ExtraBold',
} as const;

/**
 * Schrift-Schnitt zu einem Gewicht. Ersetzt `fontWeight` ueberall dort, wo
 * die Marken-Schrift greifen soll.
 *
 * `fontWeight` bleibt zusaetzlich gesetzt, weil react-native-web daraus die
 * richtige Variante waehlt und die Schrift sonst im Browser zu leicht
 * aussieht.
 */
export function schrift(gewicht: '400' | '500' | '600' | '700' | '800') {
  const familie = {
    '400': FONT_FAMILY.sans,
    '500': FONT_FAMILY.sansMedium,
    '600': FONT_FAMILY.sansSemiBold,
    '700': FONT_FAMILY.sansBold,
    '800': FONT_FAMILY.sansExtraBold,
  }[gewicht];
  return { fontFamily: familie, fontWeight: gewicht };
}

export const FONT_SIZE = {
  caption: 12,
  small: 13,
  body: 15,
  bodyLg: 17,
  title: 20,
  h2: 26,
  h1: 32,
} as const;

export const LINE_HEIGHT = {
  caption: 16,
  small: 18,
  body: 21,
  bodyLg: 24,
  title: 26,
  h2: 32,
  h1: 38,
} as const;

// ---------------------------------------------------------------------------
// Farben mit fester Bedeutung
// ---------------------------------------------------------------------------

// Wortarten-Farben (siehe CLAUDE.md "UI-Design-Entscheidung"):
// Nomen = blau, Verben = rot, Adjektive = gelb, Pronomen = violett,
// Verbindungswoerter/Konjunktion = petrol (2026-08-29, 5. Kategorie
// dazugekommen - Simons Entscheidung, durchgehend einzufaerben statt nur
// bei einzelnen Vokabeln).
//
// v/n/a teilen sich zufaellig dieselben Hex-Werte wie ACCENT_ERROR/
// ACCENT_BLUE/ACCENT_PREMIUM weiter unten - das ist Zufall, keine
// Verknuepfung. Bewusst NICHT zusammengelegt: "Fehler" an "Verb" zu
// koppeln waere ueberraschend, sobald sich eine der beiden Paletten
// unabhaengig aendert.
//
// Petrol fuer Konjunktion bewusst NICHT gruen (kollidiert mit ACCENT_GREEN,
// der einzigen Erfolgsfarbe der App - Simons Bestaetigung 2026-08-30, nachdem
// kurz Gruen erwogen wurde: Gruen bleibt "fertig/Erfolg" vorbehalten) und
// nicht orange (kollidiert mit der Zielwort-Hervorhebung ACCENT_ORANGE in
// LessonScreen.tsx).
export type WordType = 'v' | 'n' | 'a' | 'p' | 'k';
export const WORD_COLORS: Record<WordType, string> = {
  v: '#D9564F',
  n: '#3E6FD1',
  a: '#C99A2E',
  p: '#8B5FD6',
  k: '#2E8B84',
};

export const ACCENT_BLUE = '#3E6FD1';
// Akzentfarbe der Marke. Liegt praktisch auf Babbels Orange - deshalb bei
// der Umstellung auf das neue Stil-Rezept bewusst unveraendert geblieben.
export const ACCENT_ORANGE = '#E0793E';
// Abgedunkeltes Orange fuer die 3D-Unterkante orangener Flaechen (bisher nur
// in `PillButton.tsx` lokal, seit 2026-09-01 auch fuer die Modus-Karten auf
// dem Lektionen-Screen gebraucht - deshalb hierher gezogen statt zweimal
// definiert).
export const ACCENT_ORANGE_EDGE = '#B75F2C';
// Sanftere Variante nur fuer die Modus-Karten auf dem Lektionen-Screen
// (2026-09-02, Simons "Feintuning"-Vorgabe) - 30% Richtung `ACCENT_ORANGE`
// gemischt. Bewusst NICHT `ACCENT_ORANGE_EDGE` selbst veraendert: der
// gehoert auch `PillButton.tsx`s primaerem Knopf (Weiter, Los geht's), der
// hier nicht gemeint war.
export const ACCENT_ORANGE_EDGE_SOFT = '#C36731';
// Gruen ist nach dem Stil-Rezept NUR fuer Erfolg/Fortschritt da, nicht als
// zweite Markenfarbe (das ist Duolingos Rolle, nicht unsere).
export const ACCENT_GREEN = '#3E9B5D';
export const ACCENT_GREEN_DARK = '#256B3F';
export const ACCENT_GREEN_BG = '#DFF1E4';
export const ACCENT_AMBER_BG = '#FBE9D8';
export const ACCENT_AMBER_TEXT = '#9A5A1E';
export const ACCENT_NEUTRAL_BG = '#F1EEE6';
export const ACCENT_NEUTRAL_TEXT = '#85807D';
export const ACCENT_PREMIUM = '#C99A2E';
// Fuellfarbe der Fortschrittsbalken (2026-08-18, Nutzer-Entscheidung).
// Bewusst ein eigener Ton und NICHT ACCENT_BLUE (#3E6FD1): Blau gehoert im
// Pfad dem Grundwortschatz, der Balken misst aber alle freigeschalteten
// Inhalte. Zwei verschiedene Blau nebeneinander waeren verwirrend, ein
// helleres unterscheidet die beiden Rollen.
export const PROGRESS_FILL = '#58AFDD';
// Untere Kante der Fuellung (2026-09-01, Simons Vorgabe "physisches
// 3D-Volumen"). Dieselbe Farbtonlage wie `PROGRESS_FILL`, nur dunkler - das
// ist die Regel, die auch die Karten-Knoepfe tragen: die Kante ist derselbe
// Koerper im Schatten, kein zweiter Farbton.
//
// Bewusst eine echte Farbe statt `rgba(0,0,0,0.15)`: schwarze Deckkraft ueber
// Blau ergibt ein graustichiges Dunkelblau. Ein sattes, gleich gesaettigtes
// Blau laesst die Fuellung wie einen Zylinder aussehen, ein grauer Rand wie
// eine schmutzige Kante.
export const PROGRESS_FILL_EDGE = '#3689B9';
export const NODE_LOCKED = '#B7B2A6';
// `NODE_DONE` (#4C9A6A) ist am 2026-08-18 weggefallen: eine zweite,
// leicht abweichende Gruenfassung neben ACCENT_GREEN, die nie irgendwo
// gerendert wurde. Der Pfad nutzt fuer fertige Knoten jetzt ACCENT_GREEN -
// nach dem Stil-Rezept ist das die eine Farbe fuer Erfolg.
export const ACCENT_ERROR = '#D9564F';

// Farbfamilien der Kategorie-Welten (2026-08-18, fuer den Lektionen-Screen).
//
// ACHTUNG - diese Toene sind AUSDRUECKLICH DEKORATIV und tragen KEINE
// Bedeutung. Sie ordnen die Kartenreihen optisch, damit der Katalog nicht als
// eine Wand gleicher Kacheln erscheint (Vorbild: Drops gruppiert nach Thema
// ueber die Farbe). Der Zustand einer Karte - freigeschaltet, fertig,
// gesperrt - laeuft weiterhin ausschliesslich ueber Rahmen, Symbol und
// Beschriftung, genau wie im Pfad. Wer hier eine Zustandsfarbe hineinliest,
// liest falsch.
//
// Bewusst gedeckt gehalten: das Vorbild ist gesättigt und dunkel, unser
// Rezept ist weiss und ruhig. Es sind Fuellungen fuer Karten, keine
// Markenfarben - ACCENT_BLUE, ACCENT_ORANGE und ACCENT_GREEN behalten ihre
// Rollen unangetastet.
export type WorldTint = {
  fill: string;
  fillDark: string;
  ink: string;
  inkDark: string;
  /**
   * NUR fuer die untere 3D-Kante der Situations-Kacheln (2026-09-02, Simons
   * "Feintuning"-Vorgabe: "eine Nuance sanfter und harmonischer zur
   * jeweiligen Hintergrundfarbe"). Bewusst ein EIGENES Feld statt `ink`
   * direkt abzuschwaechen - `ink` traegt gleichzeitig den KARTENTEXT, und
   * den wollte niemand schwaecher (im Gegenteil, siehe die Farbfix-Sitzung
   * vom Vortag). `rand` ist `ink`, 30% Richtung `fill` gemischt.
   */
  rand: string;
  randDark: string;
};
export const WORLD_TINTS: Record<string, WorldTint> = {
  grundlagen: {
    fill: '#E8F0FC', fillDark: '#1B2537', ink: '#2F5AAE', inkDark: '#9CBCF0',
    rand: '#6687C5', randDark: '#758FB8',
  },
  ankommen: {
    fill: '#FDEDE2', fillDark: '#33231A', ink: '#B75F2C', inkDark: '#E9A579',
    rand: '#CC8A63', randDark: '#B27E5C',
  },
  essen: {
    fill: '#FAF0DC', fillDark: '#332B18', ink: '#8A6415', inkDark: '#DCBC6A',
    rand: '#AC8E51', randDark: '#A99051',
  },
  leute: {
    fill: '#F2EAFB', fillDark: '#271E36', ink: '#6B45A8', inkDark: '#BFA0E8',
    rand: '#9476C1', randDark: '#9179B3',
  },
  alltag: {
    fill: '#E4F1EC', fillDark: '#172A24', ink: '#2E6B57', inkDark: '#8FCBB5',
    rand: '#659384', randDark: '#6B9B8A',
  },
};

// Fuellfarben fuer die Pfad-Pillen im Zickzack-Layout (S1).
export const PILL_FILL_BLUE = '#EAF1FC';
export const PILL_FILL_ORANGE = '#FDEEE3';
export const PILL_FILL_GRAY = '#F1EFE9';

// ---------------------------------------------------------------------------
// Kategorie-Farbidentitaet auf dem Pfad (2026-09-01, Simons "Boom"-Vorgabe)
// ---------------------------------------------------------------------------
//
// Bis dahin waren alle Kategorie-Kacheln auf S1 entweder ein einheitliches
// Orange (freigeschaltet) oder ein einheitliches Grau (gesperrt) - "trist",
// Simons Wort. Jede der 14 Kategorien bekommt jetzt ihre eigene, kraeftige
// Farbe, UND ZWAR AUCH GESPERRT: der farbige Kern bleibt sichtbar, ein
// Schleier legt sich nur darueber (siehe `VEIL_LIGHT`/`VEIL_DARK` unten -
// dieselbe Technik wie bei den Lektionen-Kategoriekarten).
//
// Bewusst NICHT blau oder gruen: Blau bleibt dem Grundwortschatz vorbehalten
// (die Sprach-Pille an der Spitze des Pfades), Gruen ist nach dem
// Stil-Rezept appweit NUR fuer Erfolg reserviert und schluege sonst jede
// Kategorie-Identitaet. Die 14 Farbtoene liegen deshalb auf zwei Boegen: Rot
// bis Gelb (0-65 Grad) und Indigo bis Karmin (250-354 Grad) - der ganze
// Gruenbereich dazwischen (65-250 Grad, inklusive Blau) ist ausgespart.
//
// NACHGEBESSERT (2026-09-01, noch am selben Tag): die erste Fassung hatte
// `travel_transportation` und `university_studying` bei Hue 85/100
// (Limette/Gruengelb) - auf dem echten Geraet las sich das schlicht als
// GRUEN, nicht als eigene Farbe. Beide sind in den Violett-Bogen gewandert;
// der Fehler ist ein Beleg dafuer, dass ein Farbabstand auf dem Papier
// (40-55 Grad) nicht automatisch ein Farbabstand fuers Auge ist - erst der
// Render auf S1 hat es gezeigt, nicht die Rechnung.
//
// Gilt NUR fuer Kategorie-Kacheln, nicht fuer die aufgefaecherten Situationen
// darunter - die bleiben nach der Entscheidung vom 2026-08-20 bewusst grau
// (`THEME_LINE`/`THEME_FILL`), damit sie sich nicht mit Kategorie- oder
// Grundwortschatz-Farbe beissen. Die Verbindungslinien im Pfad tragen die
// Kategorie-Farbe seit 2026-09-01 ebenfalls nicht mehr (Simons Vorgabe:
// "Verbindungslinien ... komplett neutral grau") - siehe `PATH_LINE_NEUTRAL`.
export type CategoryTint = { fill: string; fillDark: string; line: string; lineDark: string };
export const KATEGORIE_FARBEN: Record<string, CategoryTint> = {
  // Diese fuenf sind am 2026-09-01 ein zweites Mal nachgezogen: schon die
  // erste Korrektur (job_work bei Hue 65) las sich auf dem Geraet noch
  // leicht oliv-gruenlich. Der ganze warme Block liegt jetzt bei 0-52 Grad
  // statt 5-65 - deutlich mehr Sicherheitsabstand zum Gruenbereich.
  health_emergency: { fill: '#F1C5C5', fillDark: '#462020', line: '#9E2E2E', lineDark: '#D87979' },
  hotel_accommodation: { fill: '#F1CFC5', fillDark: '#462820', line: '#9E462E', lineDark: '#D88D79' },
  smalltalk_socialising: { fill: '#F1D8C5', fillDark: '#463020', line: '#9E5F2E', lineDark: '#D8A279' },
  moving_settling: { fill: '#F1E2C5', fillDark: '#463920', line: '#9E772E', lineDark: '#D8B779' },
  job_work: { fill: '#F1ECC5', fillDark: '#464120', line: '#9E8F2E', lineDark: '#D8CB79' },
  travel_transportation: { fill: '#CDC5F1', fillDark: '#262046', line: '#412E9E', lineDark: '#8979D8' },
  culture_immersion: { fill: '#D6C5F1', fillDark: '#2E2046', line: '#592E9E', lineDark: '#9D79D8' },
  university_studying: { fill: '#E0C5F1', fillDark: '#372046', line: '#712E9E', lineDark: '#B279D8' },
  drinking_dining: { fill: '#E9C5F1', fillDark: '#3F2046', line: '#8A2E9E', lineDark: '#C779D8' },
  love_relationship: { fill: '#F1C5F0', fillDark: '#462045', line: '#9E2E9A', lineDark: '#D879D5' },
  finding_friends: { fill: '#F1C5E6', fillDark: '#46203D', line: '#9E2E82', lineDark: '#D879C0' },
  club_nightlife: { fill: '#F1C5DD', fillDark: '#462034', line: '#9E2E6A', lineDark: '#D879AB' },
  dating_romance: { fill: '#F1C5D3', fillDark: '#46202C', line: '#9E2E51', lineDark: '#D87997' },
  shopping_haggling: { fill: '#F1C5CA', fillDark: '#462023', line: '#9E2E39', lineDark: '#D87982' },
};

// Neutrale Verbindungslinien im Pfad (2026-09-01). Vorher trug jede Linie die
// Farbe des Knotens, aus dem sie kam - bei 14 verschiedenen Kategorie-Farben
// waere der Pfad damit ein Flickenteppich aus bunten Segmenten geworden.
// Simons Vorgabe: die Linien selbst bleiben clean und neutral, der Zustand
// (gesperrt/fertig/aktuell) steht an den Knoten, nicht an den Verbindungen.
export const PATH_LINE_NEUTRAL = '#C7C2B6';
export const PATH_LINE_NEUTRAL_DARK = '#4A4842';

// Schleier fuer gesperrte, farbige Flaechen (2026-09-01, aus der
// Lektionen-Kategoriekarte herausgezogen - jetzt zwei Verwendungen, siehe
// `SituationCard` in `LessonsScreen.tsx` und `PathNode` in `PathScreen.tsx`).
// Die Flaeche wird ABGEDUNKELT/AUFGEHELLT, nicht ausgegraut: ein flacher
// `opacity`-Wert wuerde auch Text und Schloss mit ausbleichen.
export const VEIL_LIGHT = 'rgba(255,255,255,0.62)';
export const VEIL_DARK = 'rgba(15,15,14,0.6)';
