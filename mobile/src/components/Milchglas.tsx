import { Platform, StyleProp, StyleSheet, View, ViewStyle } from 'react-native';
import { BlurView } from 'expo-blur';

// Das Milchglas der App (2026-09-11 aus der Tab-Leiste herausgezogen).
//
// Tab-Leiste unten und Navigationsleiste auf S1 oben liegen auf DEMSELBEN
// Material. Vorher stand es nur in `app/(tabs)/_layout.tsx`; eine zweite
// Kopie fuer S1 waere beim naechsten Feinschliff auseinandergelaufen, und
// oben und unten saehe das Glas ploetzlich verschieden aus.
//
// Die leichte Undurchsichtigkeit entsteht aus Apples Material UND einem
// duennen Farbschleier darueber, nicht aus einem flachen `opacity`-Wert -
// der haette Symbole und Beschriftungen mit ausgeblichen (CLAUDE.md, S7).
// Wer das Glas ein- und ausblenden will (wie die Leiste auf S1), legt die
// Deckkraft auf einen UMGEBENDEN View, nicht hier hinein.
//
// `overflow: 'hidden'` am Rahmen statt `borderRadius` direkt an der
// BlurView: laut Expo-Doku greift die Ecken-Rundung an der BlurView auf
// Android sonst nicht. Nebenbei rundet so derselbe Radius Material UND
// Schleier ab. (Stand vorher als Kommentar ueber `TabBarSurface` im
// Tab-Layout, dort steht jetzt ein Verweis hierher.)
export function Milchglas({
  dark,
  radius = 0,
  style,
}: {
  dark: boolean;
  radius?: number;
  style?: StyleProp<ViewStyle>;
}) {
  return (
    <View style={[styles.flaeche, { borderRadius: radius }, style]}>
      <BlurView
        intensity={60}
        tint={dark ? 'systemThinMaterialDark' : 'systemThinMaterialLight'}
        // Ohne diese Angabe zeichnet Android gar keinen Blur.
        blurMethod={Platform.OS === 'android' ? 'dimezisBlurViewSdk31Plus' : undefined}
        style={StyleSheet.absoluteFill}
      />
      <View
        style={[
          StyleSheet.absoluteFill,
          { backgroundColor: dark ? 'rgba(24,24,22,0.22)' : 'rgba(255,255,255,0.12)' },
        ]}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  flaeche: {
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    overflow: 'hidden',
    // Reine Unterlage: Beruehrungen gehen an das, was darueber liegt.
    pointerEvents: 'none',
  },
});
