import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { FontAwesome, Ionicons } from "@expo/vector-icons";

const RestaurantCard = ({ imageUrl,id, title, rating, address, category,navigation }) => {
  return (
    <View className="shadow-sm w-50">
      <TouchableOpacity
        activeOpacity={0.5}
        className="mx-1 bg-white rounded-lg"
        onPress={()=>{navigation.navigate("Restaurant",{id})}}
      >
        <Image source={{ uri: imageUrl }} className="w-48 h-32 rounded-lg" resizeMode="contain"/>
        <View className="mx-2 my-1 mb-2 space-y-1">
          <Text className="text-base font-bold">{title}</Text>
          <View className="flex-row items-center space-x-1">
            <FontAwesome name="star" size={18} color={"#48bb78"} />
            <Text className="text-green-500">{rating}</Text>
            <Text>&#x2022;</Text>
            <Text className="text-gray-500">{category}</Text>
          </View>
          <View className="flex-row items-center space-x-1 ">
            <Ionicons name="ios-location-outline" size={18} color="gray" />
            <Text className="text-sm text-gray-600">Nearby</Text>
            <Text className="text-sm text-gray-600">&#x2022;</Text>
            <Text className="flex-wrap text-sm text-gray-600">{address.substring(0, 11).concat('...')}</Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default RestaurantCard;
