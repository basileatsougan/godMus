import { ScrollView, Text, View, } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import Section from "../components/Section";
import { data } from "../constants/data";

import { Stack } from "expo-router";

import AntDesign from "@expo/vector-icons/AntDesign";
import ArtistSection from "../components/ArtistSection";


export default function App() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#040313",  }} edges={[]}>

      <Stack.Screen
        options={{
          headerStyle: { backgroundColor: "#040313" },

          headerShadowVisible: false,
          headerLeft: () => (
            <Text style={{ fontSize: 22, fontWeight: "bold", color: "#D9D9D9", marginLeft: -2 }}>Bonjour</Text>
          ),
          headerRight: () => (
            <View style={{ height: 30, width: 30, borderRadius: 20 , alignItems: "center", justifyContent: "center", backgroundColor: "#D9D9D9", marginRight: 0 }}>
              <AntDesign name="search1" size={24} color="black" />
            </View>
          ),
          headerTitle: "",
        }}
      />

      <ScrollView showsVerticalScrollIndicator={ false } >
        <View style={{ flex: 1 }}>
          <Section title="Gospel" data={data.gospel} />
          <Section title="Adoration" data={data.adoration} />
          <ArtistSection title="Artistes" data={data.artistes} />
          <Section title="Nouveauté" data={data.gospel} />

        </View>
      </ScrollView>


    </SafeAreaView>
  );
}


// "main": "expo/AppEntry.js",
