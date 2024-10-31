import { View, Text, FlatList, TouchableOpacity, Image } from 'react-native'
import React from 'react'

const ArtistSection = ({ title, data }) => {
  return (
    <View style={{ marginVertical: 16 }}>
      <Text style={{ color: "white", marginHorizontal: 16, fontSize: 20 }}>{title}</Text>
      <FlatList
      data={data}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <TouchableOpacity style={{ marginHorizontal: 12 }}>
            <Image 
                source={item.imageUrl}
                style={{ height: 100, width: 100, borderRadius: 8, backgroundColor: "gray" }}
            />
            <Text style={{ color: "white", fontSize: 16 }}>{item.name}</Text>
        </TouchableOpacity>
        
      )} 
      showsHorizontalScrollIndicator={false}
      />
    </View>
  )
}

export default ArtistSection