import { Button, ScrollView, StyleSheet, Text, View } from 'react-native';

// Platzhalter fuer S3 (Shop-Screen) - wird ersetzt, sobald der konkrete
// JSON-Entwurf vom Nutzer da ist. Dient jetzt nur dazu, die Klick-Interaktion
// vom gesperrten S1-Knoten aus zu testen (simulierter Screen-Wechsel per
// Zustand in App.tsx, noch keine echte Navigation).
export function ShopScreenMockup({ onBack }: { onBack: () => void }) {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.heading}>Shop-Screen (Platzhalter)</Text>
      <Text>Hier kommt der echte Inhalt rein, sobald der JSON-Entwurf da ist.</Text>
      <View style={styles.spacer} />
      <Button title="← Zurück zum Pfad" onPress={onBack} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    gap: 12,
  },
  heading: {
    fontSize: 18,
    fontWeight: '600',
  },
  spacer: {
    height: 16,
  },
});
