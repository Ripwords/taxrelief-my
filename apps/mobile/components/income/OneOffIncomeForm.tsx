import React, { useState } from "react"
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from "react-native"

export default function OneOffIncomeForm() {
  const [sourceName, setSourceName] = useState("")
  const [amount, setAmount] = useState("")
  const [dateReceived, setDateReceived] = useState("") // Should be a date picker

  const handleSubmit = () => {
    if (!sourceName.trim() || !amount.trim() || !dateReceived.trim()) {
      Alert.alert(
        "Validation Error",
        "Source Name, Amount, and Date Received are required."
      )
      return
    }
    console.log("One-Off Income Submitted:", {
      sourceName,
      amount,
      dateReceived,
    })
    Alert.alert("Success", "One-off income added (mock).")
    setSourceName("")
    setAmount("")
    setDateReceived("")
  }

  return (
    <View style={styles.formContainer}>
      <Text style={styles.formTitle}>Add One-Off Income</Text>

      <Text style={styles.label}>Income Source Name</Text>
      <TextInput
        style={styles.input}
        placeholder="e.g., Freelance Project, Bonus"
        value={sourceName}
        onChangeText={setSourceName}
      />

      <Text style={styles.label}>Amount (RM)</Text>
      <TextInput
        style={styles.input}
        placeholder="e.g., 1500"
        value={amount}
        onChangeText={setAmount}
        keyboardType="numeric"
      />

      <Text style={styles.label}>Date Received</Text>
      {/* Replace with a DatePicker component */}
      <TextInput
        style={styles.input}
        placeholder="YYYY-MM-DD"
        value={dateReceived}
        onChangeText={setDateReceived}
      />

      <TouchableOpacity
        style={styles.submitButton}
        onPress={handleSubmit}
      >
        <Text style={styles.submitButtonText}>Add One-Off Income</Text>
      </TouchableOpacity>
    </View>
  )
}

// Using similar styles as RecurringIncomeForm for consistency
const styles = StyleSheet.create({
  formContainer: {
    padding: 20,
    backgroundColor: "#FFFFFF",
    borderRadius: 8,
    marginBottom: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 1,
  },
  formTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#1F2937", // Tailwind gray-800
    marginBottom: 20,
    textAlign: "center",
  },
  label: {
    fontSize: 16,
    color: "#374151", // Tailwind gray-700
    marginBottom: 6,
    fontWeight: "500",
  },
  input: {
    backgroundColor: "#F9FAFB", // Tailwind gray-50
    borderWidth: 1,
    borderColor: "#D1D5DB", // Tailwind gray-300
    borderRadius: 6,
    paddingHorizontal: 12,
    paddingVertical: 10,
    fontSize: 16,
    marginBottom: 16,
    color: "#111827",
  },
  submitButton: {
    backgroundColor: "#1D4ED8", // Tailwind blue-700
    paddingVertical: 14,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 10,
  },
  submitButtonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "bold",
  },
})
