import { StyleSheet, Text, TextStyle } from 'react-native';
import { WORD_COLORS, WordType, schrift } from '../theme/tokens';

// Rendert einen Satz als Folge farbig hervorgehobener Woerter (Wortarten-
// Farbcodierung, siehe CLAUDE.md). Zwei Varianten:
// - <ColoredTokens tokens=.../> fuer bereits fertig aufgeloeste {t,color}-Paare
// - <TaggedTokens tokens=.../> fuer {t,c}-Paare (c = WordType|null), loest die
//   Farbe hier anhand von showColors/textColor auf.

export function ColoredTokens({ tokens, style }: { tokens: { t: string; color: string }[]; style?: TextStyle }) {
  return (
    <Text style={[styles.sentence, style]}>
      {tokens.map((tok, i) => (
        <Text key={i} style={{ color: tok.color }}>
          {tok.t}
          {i < tokens.length - 1 ? ' ' : ''}
        </Text>
      ))}
    </Text>
  );
}

export function TaggedTokens({
  tokens,
  textColor,
  showColors = true,
  style,
}: {
  tokens: { t: string; c: WordType | null }[];
  textColor: string;
  showColors?: boolean;
  style?: TextStyle;
}) {
  const resolved = tokens.map((t) => ({ t: t.t, color: showColors && t.c ? WORD_COLORS[t.c] : textColor }));
  return <ColoredTokens tokens={resolved} style={style} />;
}

const styles = StyleSheet.create({
  sentence: {
    fontSize: 17,
    ...schrift('700'),
  },
});
