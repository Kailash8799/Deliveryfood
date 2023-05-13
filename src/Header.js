import { View, Text, SafeAreaView, Image } from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";

const Header = ({ navigation }) => {
  return (
    <SafeAreaView className="bg-white dark:bg-black">
      <View className="flex flex-row justify-between px-2 py-1">
        <View className="flex flex-row items-center space-x-2">
          <Image
            source={require("../assets/img-1.jpg")}
            className="h-8 w-8 rounded-full"
          />
          <View>
            <Text className="text-gray-800 dark:text-white text-xs">
              Deliver now!
            </Text>
              <Text className="text-black dark:text-white font-bold text-lg">
                Current Location<AntDesign
                className="justify-center items-center p-0 m-0" 
                color={"#00CCBB"}
                name="down"
                size={16}
              />
              </Text>
              
          </View>
        </View>
        <View className="items-center justify-center">
          <Image
            source={require("../assets/img-3.png")}
            className="h-8 w-8 rounded-full"
          />
        </View>
      </View>
      <View>
        <View></View>
        <View></View>
      </View>
    </SafeAreaView>
  );
};

export default Header;
