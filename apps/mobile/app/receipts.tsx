import React from "react"
import { View, Text, StyleSheet, TouchableOpacity } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import FontAwesome from "@expo/vector-icons/FontAwesome"

export default function ReceiptsScreen() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <FontAwesome
          name="camera"
          size={64}
          color="#9CA3AF"
        />
        <Text style={styles.title}>Receipts</Text>
        <Text style={styles.subtitle}>
          Upload and manage your receipts here.
        </Text>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Upload Receipt</Text>
        </TouchableOpacity>
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
    marginBottom: 32,
  },
  button: {
    backgroundColor: "#1D4ED8", // Tailwind blue-700
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "600",
  },
})
