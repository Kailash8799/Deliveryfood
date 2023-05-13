import { View, Text, SafeAreaView, Image, TextInput, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { AntDesign, Ionicons, Fontisto } from "@expo/vector-icons";
import ModalTop from "./ModalTop";

const Header = ({ navigation }) => {
  const [search, setsearch] = useState("")
  const [modalopen,setmodalopen] = useState(false)
  
  const modalopenset = ()=>{
    setmodalopen(!modalopen)
  }

  return (
    <SafeAreaView className="bg-white dark:bg-black">
      <View className="flex flex-row justify-between px-2 py-1">
        <View className="flex flex-row items-center space-x-2">
          <Image
            source={require("../assets/img-1.jpg")}
            className="w-8 h-8 rounded-full"
          />
          <View>
            <Text className="text-xs text-gray-800 dark:text-white">
              Deliver now!
            </Text>
            <Text className="text-lg font-bold text-black dark:text-white">
              Current Location
              <AntDesign
                className="items-center justify-center p-0 m-0"
                color={"#00CCBB"}
                name="down"
                size={16}
              />
            </Text>
          </View>
        </View>
        <View className="items-center justify-center">
          <TouchableOpacity activeOpacity={0.8} onPress={modalopenset}>
          <Image
            source={require("../assets/img-3.png")}
            className="w-8 h-8 rounded-full"
          /></TouchableOpacity>
        </View>
      </View>
      <View className="flex-row items-center px-2 pb-2 space-x-2">
        <View className="flex-row items-center flex-1 px-3 py-1 bg-gray-200 rounded-md">
          <Fontisto name="search" size={20} color="#00CCBB" />
          <TextInput value={search} onChange={(e)=>{setsearch(e?.target?.value)}} placeholder="Restaurants and cuisines" className="px-3" keyboardType="default"/>
        </View>
        <Ionicons name="swap-vertical-outline" className="px-2" size={30} color="#00CCBB" />
      </View>
     {modalopen && <ModalTop navigation={navigation} modalopen={modalopen} modalopenset={modalopenset}/> }
    </SafeAreaView>
  );
};

export default Header;
