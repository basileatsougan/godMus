import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { Stack } from "expo-router";

import AntDesign from "@expo/vector-icons/AntDesign";

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#040313" }}>
      <StatusBar style="auto" />

      <View style={{ marginTop: 100 }}/>
      <Stack.Screen
        options={{
          headerStyle: { backgroundColor: "#040313", marginTop: 20 },

          headerShadowVisible: false,
          headerLeft: () => (
            <Text style={{ fontSize: 22, fontWeight: "bold", color: "#D9D9D9", marginLeft: 16 }}>Bonjour</Text>
          ),
          headerRight: () => (
            <View style={{ height: 30, width: 30, borderRadius: 20 , alignItems: "center", justifyContent: "center", backgroundColor: "#D9D9D9", marginRight: 16 }}>
              <AntDesign name="search1" size={24} color="black" />
            </View>
          ),
          headerTitle: "",
        }}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

// "main": "expo/AppEntry.js",
