import {
  View,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import {
  itemTotal,
  selectBasjetitem,
} from "../features/basketSlice";
import Top from "./Top";
import { AntDesign } from "@expo/vector-icons";
import Cartitem from "./Cartitem";

const Cart = ({ route, navigation }) => {
  const item = useSelector(selectBasjetitem);
  const total = useSelector(itemTotal);
  const img = route.params.img;
  const resname = route.params.resname;
  const [groupdeitem, setgroupeditem] = useState([]);

  useEffect(() => {
    const gropitem = item.reduce((results, itm) => {
      (results[itm.id] = results[itm.id] || []).push(itm);
      return results;
    }, {});
    setgroupeditem(gropitem);
    if(item.length == 0){
        navigation.goBack();
    }
  }, [item]);
  return (
    <SafeAreaView className="flex-1">
      <Top />
      <TouchableOpacity
        onPress={() => {
          navigation.goBack();
        }}
        className="absolute z-50 top-16 right-4"
      >
        <AntDesign name="closecircle" size={28} color="#00CCBB" />
      </TouchableOpacity>
      <View className="items-center py-1 bg-slate-100">
        <Text className="text-xl font-bold">Cart</Text>
        <Text className="text-base ">{resname}</Text>
      </View>
      <View className="flex-row items-center justify-between px-4 py-2 bg-gray-100 top-4">
        <View className="flex-row items-center space-x-2">
          <Image source={{ uri: img }} className="w-10 h-10 rounded-full" />
          <Text>Deliver in 50-70 min</Text>
        </View>
        <View>
          <TouchableOpacity>
            <Text className="text-[#00CCBB]">Change</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View className="h-3/5">
      <ScrollView className="mt-5">
        {groupdeitem.length != 0 &&
          Object.entries(groupdeitem).map(([key, item]) => {
            return (
              <Cartitem 
                key={key}
                id={key}
                item={item && item}
              />
            );
          })}
      </ScrollView>
      </View>
      <View className="px-4 pt-2 pb-4 space-y-2 bg-white">
        <View className="flex-row justify-between">
          <Text>Subtotal</Text>
          <Text>₹{total}</Text>
        </View>
        <View className="flex-row justify-between">
          <Text>Delivery fee</Text>
          <Text>₹40</Text>
        </View>
        <View className="flex-row justify-between">
          <Text>Order total</Text>
          <Text>₹{total + 40}</Text>
        </View>
        <TouchableOpacity
          activeOpacity={0.5}
          onPress={()=>{navigation.navigate("PrapareOrder")}}
          className=" top-2 items-center justify-center w-full bg-[#00CCBB] p-4 rounded-lg"
        >
          <Text>Place Order</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Cart;
