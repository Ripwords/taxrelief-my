import React from "react"
import { View, Text, TouchableOpacity, StyleSheet } from "react-native"

type IncomeType = "recurring" | "one-off"

interface IncomeTypeToggleProps {
  selectedType: IncomeType
  onSelectType: (type: IncomeType) => void
}

export default function IncomeTypeToggle({
  selectedType,
  onSelectType,
}: IncomeTypeToggleProps) {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={[
          styles.button,
          selectedType === "recurring" && styles.selectedButton,
        ]}
        onPress={() => onSelectType("recurring")}
      >
        <Text
          style={[
            styles.buttonText,
            selectedType === "recurring" && styles.selectedButtonText,
          ]}
        >
          Recurring
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[
          styles.button,
          selectedType === "one-off" && styles.selectedButton,
        ]}
        onPress={() => onSelectType("one-off")}
      >
        <Text
          style={[
            styles.buttonText,
            selectedType === "one-off" && styles.selectedButtonText,
          ]}
        >
          One-Off
        </Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-around",
    backgroundColor: "#E5E7EB", // Tailwind gray-200
    borderRadius: 8,
    padding: 4,
    marginBottom: 20,
  },
  button: {
    flex: 1,
    paddingVertical: 10,
    alignItems: "center",
    borderRadius: 6,
  },
  selectedButton: {
    backgroundColor: "#FFFFFF", // White
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "600",
    color: "#4B5563", // Tailwind gray-600
  },
  selectedButtonText: {
    color: "#1D4ED8", // Tailwind blue-700
  },
})
