import React, { useState } from "react"
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from "react-native"

export default function RecurringIncomeForm() {
  const [sourceName, setSourceName] = useState("")
  const [amount, setAmount] = useState("")
  const [frequency, setFrequency] = useState("monthly") // Default, could be a picker
  const [startDate, setStartDate] = useState("") // Should be a date picker
  const [endDate, setEndDate] = useState("") // Optional, date picker

  const handleSubmit = () => {
    // Basic validation
    if (!sourceName.trim() || !amount.trim() || !startDate.trim()) {
      Alert.alert(
        "Validation Error",
        "Source Name, Amount, and Start Date are required."
      )
      return
    }
    // Mock submission
    console.log("Recurring Income Submitted:", {
      sourceName,
      amount,
      frequency,
      startDate,
      endDate,
    })
    Alert.alert("Success", "Recurring income added (mock).")
    // Clear form
    setSourceName("")
    setAmount("")
    setFrequency("monthly")
    setStartDate("")
    setEndDate("")
  }

  return (
    <View style={styles.formContainer}>
      <Text style={styles.formTitle}>Add Recurring Income</Text>

      <Text style={styles.label}>Income Source Name</Text>
      <TextInput
        style={styles.input}
        placeholder="e.g., Monthly Salary, Rental Income"
        value={sourceName}
        onChangeText={setSourceName}
      />

      <Text style={styles.label}>Amount (RM)</Text>
      <TextInput
        style={styles.input}
        placeholder="e.g., 5000"
        value={amount}
        onChangeText={setAmount}
        keyboardType="numeric"
      />

      <Text style={styles.label}>Frequency</Text>
      {/* Replace with a Picker or custom select component */}
      <TextInput
        style={styles.input}
        placeholder="e.g., daily, weekly, monthly, yearly"
        value={frequency}
        onChangeText={setFrequency}
      />

      <Text style={styles.label}>Start Date</Text>
      {/* Replace with a DatePicker component */}
      <TextInput
        style={styles.input}
        placeholder="YYYY-MM-DD"
        value={startDate}
        onChangeText={setStartDate}
      />

      <Text style={styles.label}>End Date (Optional)</Text>
      {/* Replace with a DatePicker component */}
      <TextInput
        style={styles.input}
        placeholder="YYYY-MM-DD"
        value={endDate}
        onChangeText={setEndDate}
      />

      <TouchableOpacity
        style={styles.submitButton}
        onPress={handleSubmit}
      >
        <Text style={styles.submitButtonText}>Add Recurring Income</Text>
      </TouchableOpacity>
    </View>
  )
}

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
