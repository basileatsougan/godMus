import { View, Text, FlatList, TouchableOpacity, Image } from "react-native";
import React from "react";

const ArtistSection = ({ title, data }) => {
  return (
    <View style={{ marginVertical: 16, marginLeft: 22 }}>
      <Text style={{ color: "white", fontSize: 20, marginBottom: 8 }}>
        {title}
      </Text>
      <FlatList
        data={data}
        horizontal
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity style={{ marginHorizontal: 5 }}>
            <Image
              source={item.imageUrl}
              style={{
                height: 100,
                width: 100,
                borderRadius: 50,
                backgroundColor: "gray",
              }}
            />
            <Text style={{ color: "white", fontSize: 16, textAlign: "center" }}>{item.name}</Text>
          </TouchableOpacity>
        )}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

export default ArtistSection;
