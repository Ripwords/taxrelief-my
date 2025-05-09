import React from "react"
import { View, Text, StyleSheet } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import FontAwesome from "@expo/vector-icons/FontAwesome"

export default function TaxSummaryScreen() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <FontAwesome
          name="calculator"
          size={64}
          color="#9CA3AF"
        />
        <Text style={styles.title}>Yearly Tax Summary</Text>
        <Text style={styles.subtitle}>
          View your estimated tax summary here.
        </Text>
        {/* Placeholder for tax summary UI */}
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#F3F4F6", // Tailwind gray-100
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 24,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#1F2937", // Tailwind gray-800
    marginTop: 24,
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: "#4B5563", // Tailwind gray-600
    textAlign: "center",
  },
})
