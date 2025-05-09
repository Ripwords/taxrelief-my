import FontAwesome from "@expo/vector-icons/FontAwesome"
import { Tabs } from "expo-router"
import React from "react"

import "../global.css" // Import Tailwind CSS

// This is now the default export and will be used as the root layout.
export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "#1D4ED8", // A Tailwind blue color (blue-700)
        tabBarInactiveTintColor: "#9CA3AF", // A Tailwind gray color (coolGray-400)
        headerStyle: {
          backgroundColor: "#F9FAFB", // Tailwind gray-50
        },
        headerTitleStyle: {
          fontWeight: "bold",
        },
        tabBarStyle: {
          backgroundColor: "#FFFFFF", // White background for tab bar
          borderTopWidth: 0, // Remove top border
          elevation: 5, // Shadow for Android
          shadowOpacity: 0.1, // Shadow for iOS
          shadowRadius: 5,
          shadowOffset: { height: -2, width: 0 },
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Tax Reliefs",
          tabBarIcon: ({ color, size }) => (
            <FontAwesome
              name="home"
              color={color}
              size={size}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="receipts"
        options={{
          title: "Receipts",
          tabBarIcon: ({ color, size }) => (
            <FontAwesome
              name="file-text-o"
              color={color}
              size={size}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="income"
        options={{
          title: "Income",
          tabBarIcon: ({ color, size }) => (
            <FontAwesome
              name="money"
              color={color}
              size={size}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="summary"
        options={{
          title: "Summary",
          tabBarIcon: ({ color, size }) => (
            <FontAwesome
              name="bar-chart"
              color={color}
              size={size}
            />
          ),
        }}
      />
    </Tabs>
  )
}
