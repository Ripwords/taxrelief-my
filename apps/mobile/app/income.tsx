import React, { useState } from "react"
import { ScrollView, StyleSheet, View } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"

import IncomeGraphPlaceholder from "@/components/income/IncomeGraphPlaceholder"
import IncomeTypeToggle from "@/components/income/IncomeTypeToggle"
import OneOffIncomeForm from "@/components/income/OneOffIncomeForm"
import RecurringIncomeForm from "@/components/income/RecurringIncomeForm"

type IncomeType = "recurring" | "one-off"

export default function IncomeScreen() {
  const [selectedIncomeType, setSelectedIncomeType] =
    useState<IncomeType>("recurring")

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView style={styles.container}>
        <View style={styles.content}>
          {/* Graph Placeholder */}
          <IncomeGraphPlaceholder />

          {/* Income Type Toggle */}
          <IncomeTypeToggle
            selectedType={selectedIncomeType}
            onSelectType={setSelectedIncomeType}
          />

          {/* Conditional Forms */}
          {selectedIncomeType === "recurring" ? (
            <RecurringIncomeForm />
          ) : (
            <OneOffIncomeForm />
          )}
        </View>
        <View style={styles.spacer} />
      </ScrollView>
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
  },
  content: {
    paddingHorizontal: 20,
    paddingTop: 20, // Add some padding at the top
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#1F2937", // Tailwind gray-800
    marginTop: 24, // This was from old placeholder, adjusted by content padding
    marginBottom: 8,
    textAlign: "center",
  },
  subtitle: {
    fontSize: 16,
    color: "#4B5563", // Tailwind gray-600
    textAlign: "center",
    marginBottom: 20, // Added some bottom margin
  },
  spacer: {
    height: 40, // For some space at the bottom of the scroll view
  },
})
