import { View, Text, FlatList, TouchableOpacity, Image } from "react-native";
import React from "react";

const Section = ({ title, data }) => {
  return (
    <View style={{ marginVertical: 16,  marginLeft: 22  }}>
      <Text style={{ color: "white", fontSize: 20, marginBottom: 8 }}>{title}</Text>
      <FlatList
        data={data}
        horizontal
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity style={{ marginHorizontal: 5 }}>
            <Image
              source={item.imageUrl}
              style={{ height: 140, width: 125, borderRadius: 12 }}
            />
            <Text style={{ color: "white", fontSize: 16 }}>{item.title}</Text>
            <Text style={{ color: "gray", fontSize: 14 }}>{item.author}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default Section;
