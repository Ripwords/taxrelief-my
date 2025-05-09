import React, { useState } from "react"
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
} from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import "../global.css"

interface TaxReliefItem {
  id: string
  category: string
  title: string
  description: string
  amount: string
  details: string
}

const mockTaxReliefs: TaxReliefItem[] = [
  {
    id: "1",
    category: "Personal",
    title: "Individual and dependent relatives",
    description: "Relief for self and dependents.",
    amount: "RM 9,000",
    details:
      "This relief is automatically claimed for the individual taxpayer and can cover expenses for dependent relatives under specific conditions outlined by LHDN.",
  },
  {
    id: "2",
    category: "Parental Care",
    title: "Medical for parents",
    description:
      "Medical treatment, special needs, and carer expenses for parents.",
    amount: "RM 8,000 (Restricted)",
    details:
      "Covers medical expenses, including treatments, special needs equipment, and carer costs for parents. Medical conditions must be certified by a medical practitioner. Full medical examination for parents is restricted to RM1,000 within this relief.",
  },
  {
    id: "3",
    category: "Education",
    title: "Education fees (Self)",
    description: "Fees for self-improvement courses.",
    amount: "RM 7,000 (Restricted)",
    details:
      "For courses of study in law, accounting, Islamic financing, technical, vocational, industrial, scientific, or technology fields (other than Masters or Doctorate). For Masters or Doctorate, any course of study is eligible. Upskilling or self-enhancement courses are restricted to RM2,000 within this relief.",
  },
  {
    id: "4",
    category: "Lifestyle",
    title: "Lifestyle Expenses",
    description: "Books, internet, computer, smartphone.",
    amount: "RM 2,500 (Restricted)",
    details:
      "Includes purchase/subscription of non-banned reading materials, personal computers, smartphones, or tablets (not for business use), and monthly internet subscription bills under own name. Also covers skill improvement/personal development course fees.",
  },
  {
    id: "5",
    category: "Medical",
    title: "Medical Expenses (Self, Spouse, Child)",
    description: "Serious diseases, fertility, vaccination, dental.",
    amount: "RM 10,000 (Restricted)",
    details:
      "Covers medical expenses for serious diseases for self, spouse, or child; fertility treatment for self or spouse. Vaccination for self, spouse, and child is restricted to RM1,000. Dental examination and treatment are also restricted to RM1,000 within this relief.",
  },
]

const TaxReliefCard: React.FC<{
  item: TaxReliefItem
  onToggle: () => void
  expanded: boolean
}> = ({ item, onToggle, expanded }) => {
  return (
    <View style={styles.cardContainer}>
      <TouchableOpacity
        onPress={onToggle}
        style={styles.cardHeader}
      >
        <View style={styles.cardHeaderTextContainer}>
          <Text style={styles.cardTitle}>{item.title}</Text>
          <Text style={styles.cardCategory}>{item.category}</Text>
        </View>
        <Text style={styles.cardAmount}>{item.amount}</Text>
      </TouchableOpacity>
      {expanded && (
        <View style={styles.cardDetailsContainer}>
          <Text style={styles.cardDescription}>{item.description}</Text>
          <Text style={styles.cardDetailsText}>{item.details}</Text>
        </View>
      )}
    </View>
  )
}

export default function TaxReliefsScreen() {
  const [expandedId, setExpandedId] = useState<string | null>(null)

  const handleToggle = (id: string) => {
    setExpandedId(expandedId === id ? null : id)
  }

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView style={styles.container}>
        <View style={styles.headerContainer}>
          <Text style={styles.headerTitle}>Tax Reliefs 2024</Text>
          <Text style={styles.headerSubtitle}>
            Tap on a card to see more details.
          </Text>
        </View>
        {mockTaxReliefs.map((item) => (
          <TaxReliefCard
            key={item.id}
            item={item}
            expanded={expandedId === item.id}
            onToggle={() => handleToggle(item.id)}
          />
        ))}
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
    paddingHorizontal: 16,
  },
  headerContainer: {
    paddingVertical: 24,
    alignItems: "center",
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#1F2937", // Tailwind gray-800
    marginBottom: 4,
  },
  headerSubtitle: {
    fontSize: 16,
    color: "#4B5563", // Tailwind gray-600
  },
  cardContainer: {
    backgroundColor: "#FFFFFF",
    borderRadius: 12,
    marginBottom: 16,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  cardHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 16,
  },
  cardHeaderTextContainer: {
    flex: 1,
    marginRight: 8,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: "600",
    color: "#111827", // Tailwind gray-900
  },
  cardCategory: {
    fontSize: 14,
    color: "#6B7280", // Tailwind gray-500
    marginTop: 2,
  },
  cardAmount: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#1D4ED8", // Tailwind blue-700
  },
  cardDetailsContainer: {
    paddingHorizontal: 16,
    paddingBottom: 16,
    borderTopWidth: 1,
    borderTopColor: "#E5E7EB", // Tailwind gray-200
  },
  cardDescription: {
    fontSize: 15,
    color: "#374151", // Tailwind gray-700
    marginTop: 8,
    marginBottom: 4,
    lineHeight: 22,
  },
  cardDetailsText: {
    fontSize: 14,
    color: "#4B5563", // Tailwind gray-600
    lineHeight: 20,
    marginTop: 4,
  },
  spacer: {
    height: 20, // For some space at the bottom of the scroll view
  },
})
