// ERZEUGT aus Sprachlisten/club_nightlife/kategoriewoerter.py - nicht von Hand aendern.
//
// Vokabeln, die eine KAUFKATEGORIE selbst mitbringt, ueber den gefuehrten
// Kurs hinaus. Der Kurs lehrt 350 Woerter (chineseCourse.ts); diese hier
// tauchen erst in den Kategorie-Saetzen auf und werden sonst nirgends
// erklaert.
//
// Gebraucht fuer die Wortliste je Kategorie: sie zeigt ALLE Woerter mit
// Pinyin, Ton und Uebersetzung - auch die aus dem Kurs, weil ein
// Speed-Run-Nutzer den Kurs vielleicht nie angefasst hat
// (Nutzer-Vorgabe 2026-08-21).

export type CategoryWord = { hanzi: string; pinyin: string; de: string };

export const CATEGORY_VOCAB: Record<string, CategoryWord[]> = {
  club_nightlife: [
    { hanzi: '干杯', pinyin: 'gānbēi', de: 'Prost (wörtlich: Glas leeren)' },
    { hanzi: '随意', pinyin: 'suíyì', de: 'wie du magst (Antwort auf 干杯)' },
    { hanzi: '酒', pinyin: 'jiǔ', de: 'Alkohol' },
    { hanzi: '吵', pinyin: 'chǎo', de: 'laut' },
    { hanzi: '用', pinyin: 'yòng', de: 'benutzen' },
    { hanzi: '要', pinyin: 'yào', de: 'wollen, brauchen' },
    { hanzi: '护照', pinyin: 'hùzhào', de: 'Pass' },
    { hanzi: '唱', pinyin: 'chàng', de: 'singen' },
    { hanzi: '歌', pinyin: 'gē', de: 'Lied' },
    { hanzi: '先', pinyin: 'xiān', de: 'zuerst' },
    { hanzi: '得', pinyin: 'de', de: 'Partikel nach dem Verb: „…und zwar wie' },
    { hanzi: '地方', pinyin: 'dìfang', de: 'Ort, Platz' },
    { hanzi: '还是', pinyin: 'háishi', de: 'oder (in Fragen)' },
    { hanzi: '就', pinyin: 'jiù', de: 'schon, gleich' },
    { hanzi: '酒店', pinyin: 'jiǔdiàn', de: 'Hotel' },
    { hanzi: '远', pinyin: 'yuǎn', de: 'weit' },
    { hanzi: '电', pinyin: 'diàn', de: 'Strom, Akku' },
    { hanzi: '充电', pinyin: 'chōngdiàn', de: 'aufladen' },
    { hanzi: '见', pinyin: 'jiàn', de: 'sich treffen, sehen' },
    { hanzi: '警察', pinyin: 'jǐngchá', de: 'Polizei' },
    { hanzi: '烦', pinyin: 'fán', de: 'nerven, stören' },
    { hanzi: '一直', pinyin: 'yìzhí', de: 'die ganze Zeit' },
    { hanzi: '假装', pinyin: 'jiǎzhuāng', de: 'so tun als ob' },
    { hanzi: '走开', pinyin: 'zǒukāi', de: 'weggehen' },
    { hanzi: '你们', pinyin: 'nǐmen', de: 'ihr' },
    { hanzi: '男女朋友', pinyin: 'nán nǚ péngyou', de: 'fester Freund oder feste Freundin' },
    { hanzi: '好看', pinyin: 'hǎokàn', de: 'schön anzusehen' },
    { hanzi: '头发', pinyin: 'tóufa', de: 'Haare' },
    { hanzi: '声音', pinyin: 'shēngyīn', de: 'Stimme' },
    { hanzi: '气质', pinyin: 'qìzhì', de: 'Klasse, Haltung, Ausstrahlung' },
  ],
};
