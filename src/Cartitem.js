import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { urlFor } from "../sanity";
import { useDispatch } from "react-redux";
import { removeToCart } from "../features/basketSlice";

const Cartitem = ({item,id}) => {
    const dispatch = useDispatch()
  return (
    <View
      className="flex-row items-center justify-between px-5 py-1 my-1 bg-white rounded-lg"
    >
      <View className="flex-row items-center space-x-2">
        <Text className="text-[#00CCBB]">{item.length} x</Text>
        <Image
          source={{ uri: urlFor(item[0]?.image_url).url() }}
          className="w-10 h-10 rounded-full"
        />
        <Text className="text-black dark:text-white">{item[0]?.dish_name}</Text>
      </View>
      <View className="flex-row items-start space-x-2">
        <Text className="text-black dark:text-white">
          ₹{item[0]?.dish_price}
        </Text>
        <TouchableOpacity
          onPress={() => {
            dispatch(removeToCart({ id: id }));
          }}
        >
          <Text className="text-[#00CCBB]">Remove</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Cartitem;
