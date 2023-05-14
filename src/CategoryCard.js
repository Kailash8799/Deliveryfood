import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";

const CategoryCard = ({ image, cat_name,navigation,id }) => {
  return (
    <View>
      <TouchableOpacity activeOpacity={0.5} className="relative items-center mx-1 rounded-lg">
        <Image
          source={{ uri: image }}
          className="w-20 h-20 rounded-lg"
          resizeMode="cover"
        />
        <Text className="absolute z-50 font-bold text-white bottom-1">{cat_name}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default CategoryCard;
