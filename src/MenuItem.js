import { View, Text, Image, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { AntDesign } from "@expo/vector-icons";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeToCart, selectBasjetitem, selectBasjetitemwithid } from "../features/basketSlice";


const MenuItem = ({ image_url, dish_price, dish_desc, dish_name, id }) => {
  const [opentemadd, setopentemadd] = useState(false);
  const dispatch = useDispatch();
  const item = useSelector(state=>selectBasjetitemwithid(state,id))
  const addToCartItem = ()=>{
    dispatch(addToCart({id,dish_name,dish_price,dish_desc,image_url}))
  }
  const removeToCartItem = ()=>{
    if(item.length == 0)return;
   dispatch(removeToCart({id}))
  }

  return (
    <View className="px-2 py-1" style={{borderTopWidth:0.2,borderColor:"gray"}}>
      <TouchableOpacity
        onPress={() => {
          setopentemadd(!opentemadd);
        }}
        activeOpacity={0.6}
        className="flex-row items-center justify-between"
      >
        <View className="flex-1">
          <Text className="text-base font-medium">{dish_name}</Text>
          <Text className="text-gray-500">{dish_desc} and eating </Text>
          <Text className="font-medium text-green-500">₹{dish_price}</Text>
        </View>
        <View>
          <Image source={{ uri: image_url }} className="w-20 h-20 rounded-md" />
        </View>
      </TouchableOpacity>
      {opentemadd && (
        <View className="flex-row items-center my-2 space-x-4 transition-transform delay-75">
          <TouchableOpacity disabled={!item.length} onPress={removeToCartItem}>
            <AntDesign name="minuscircle" size={24} color={`${item.length == 0 ? "gray":"#00CCBB"}`} />
          </TouchableOpacity>
          <Text>{item.length}</Text>
          <TouchableOpacity onPress={addToCartItem}>
            <AntDesign name="pluscircle" size={24} color="#00CCBB" />
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

export default MenuItem;
