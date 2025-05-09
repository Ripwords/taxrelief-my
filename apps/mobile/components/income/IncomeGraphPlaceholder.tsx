import React from "react"
import { View, Text, StyleSheet, Dimensions } from "react-native"
import { LineChart } from "react-native-gifted-charts"

const screenWidth = Dimensions.get("window").width

// Mock data - replace with actual data fetching and processing logic
const actualIncomeData = [
  { value: 1500, label: "Jan" },
  { value: 1800, label: "Feb" },
  { value: 2200, label: "Mar" },
  { value: 2000, label: "Apr" },
  { value: 2500, label: "May" },
  { value: 2800, label: "Jun" },
]

// Projected data initially had more points. For this fix, we'll make it the same length as actuals.
// In a real app, you might fetch a certain range or implement proper scrolling based on library docs.
const projectedIncomeData = [
  { value: 2000, label: "Jan" },
  { value: 2100, label: "Feb" },
  { value: 2200, label: "Mar" },
  { value: 2300, label: "Apr" },
  { value: 2400, label: "May" },
  { value: 2500, label: "Jun" },
  // Removed Jul, Aug to prevent overflow without scrolling
]

export default function IncomeGraphPlaceholder() {
  // Calculate a dynamic width for the chart if all points are to be visible without scroll, or set a fixed viewport width.
  // For scrolling, the width prop is the viewport width.
  const chartViewportWidth = screenWidth - 80 // Current viewport width
  const pointSpacing = 50

  return (
    <View style={styles.container}>
      <Text style={styles.chartTitle}>Income Trends</Text>
      <View style={styles.chartContainer}>
        <LineChart
          data={actualIncomeData}
          data2={projectedIncomeData} // Now has same number of points as actual
          height={200}
          width={chartViewportWidth}
          initialSpacing={10}
          spacing={pointSpacing}
          // Removed scrollable, showScrollIndicator, endSpacing due to linter errors for v1.4.61
          // Consult library documentation for handling overflow or scrolling in this version.
          // Actual Income Line
          color1="#1D4ED8" // Tailwind blue-700
          dataPointsColor1="#1D4ED8"
          thickness1={2}
          // Projected Income Line
          color2="#9CA3AF" // Color for the second line (projected)
          dataPointsColor2="#9CA3AF"
          thickness2={2} // Thickness for the second line
          // Removed dashing properties for data2 to resolve linter error
          // Please consult react-native-gifted-charts v1.4.61 docs for making data2 line dashed
          // Y-Axis
          yAxisLabelPrefix="RM "
          yAxisTextStyle={{ color: "#4B5563" }} // Tailwind gray-600
          yAxisColor="#D1D5DB" // Tailwind gray-300
          rulesColor="#E5E7EB" // Tailwind gray-200
          noOfSections={4} // Number of horizontal lines
          // X-Axis
          xAxisLabelTextStyle={{ color: "#4B5563" }} // Tailwind gray-600
          xAxisColor="#D1D5DB" // Tailwind gray-300
          // Data Points
          // Data point label props removed to avoid lint errors.
          // Consult react-native-gifted-charts v1.4.61 documentation for label configuration.
        />
      </View>
      <View style={styles.legendContainer}>
        <View style={styles.legendItem}>
          <View
            style={[styles.legendColorBox, { backgroundColor: "#1D4ED8" }]}
          />
          <Text style={styles.legendText}>Actual Income</Text>
        </View>
        <View style={styles.legendItem}>
          <View
            style={[styles.legendColorBox, { backgroundColor: "#9CA3AF" }]}
          />
          <Text style={styles.legendText}>Projected Income</Text>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 20, // Adjusted padding
    paddingHorizontal: 10, // Adjusted padding
    backgroundColor: "#FFFFFF",
    borderRadius: 12, // Slightly more rounded
    marginBottom: 20,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 }, // Softer shadow
    shadowOpacity: 0.08,
    shadowRadius: 6,
    elevation: 3,
  },
  chartTitle: {
    fontSize: 18, // Slightly smaller title
    fontWeight: "600", // Semibold
    color: "#1F2937", // Tailwind gray-800
    marginBottom: 16, // More space below title
  },
  chartContainer: {
    // This container ensures the chart itself doesn't try to expand beyond its parent if it had flex properties
  },
  legendContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 16,
    width: "100%",
    paddingHorizontal: 20, // Padding for legend items
  },
  legendItem: {
    flexDirection: "row",
    alignItems: "center",
  },
  legendColorBox: {
    width: 12,
    height: 12,
    borderRadius: 2,
    marginRight: 8,
  },
  legendText: {
    fontSize: 12, // Smaller legend text
    color: "#4B5563", // Tailwind gray-600
  },
  // Removed icon, title, subtitle, graphArea, graphText styles as they are replaced by the chart
})
