import { StatusBar } from "expo-status-bar";
import { ScrollView, StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import Section from "../components/Section";
import { data } from "../constants/data";

import { Stack } from "expo-router";

import AntDesign from "@expo/vector-icons/AntDesign";
import simiane_louer from "../assets/images/adoration/simiane_louer.jpg";
import ArtistSection from "../components/ArtistSection";


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
            <Text style={{ fontSize: 22, fontWeight: "bold", color: "#D9D9D9", marginLeft: 8 }}>Bonjour</Text>
          ),
          headerRight: () => (
            <View style={{ height: 30, width: 30, borderRadius: 20 , alignItems: "center", justifyContent: "center", backgroundColor: "#D9D9D9", marginRight: 16 }}>
              <AntDesign name="search1" size={24} color="black" />
            </View>
          ),
          headerTitle: "",
        }}
      />

      <ScrollView showsVerticalScrollIndicator={ false }>
        <View style={{ flex: 1 }}>
          <Section title="Gospel" data={data.gospel} />
          <Section title="Adoration" data={data.adoration} />
          <ArtistSection title="Artistes" data={data.artistes} />
          <Section title="Nouveauté" data={data.gospel} />

        </View>

        <TouchableOpacity style={{ marginHorizontal: 16 }}>
            <Image
              souce={simiane_louer }
              style={{ height: 100, width: 100, borderRadius: 8, backgroundColor: "gray" }}
              resizeMode="contain"
              
            />
            </TouchableOpacity>
      </ScrollView>


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
