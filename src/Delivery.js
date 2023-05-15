import { View, Text, BackHandler, TouchableOpacity, Image } from "react-native";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { AntDesign } from "@expo/vector-icons";
import * as Progress from "react-native-progress";
import MapView, { Marker } from "react-native-maps";

const Delivery = ({ navigation }) => {
  const restaurant = useSelector((state) => state.restaurant);
  useEffect(() => {
    const backAction = () => {
      navigation.push("Home");
      return true;
    };

    const backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      backAction
    );
    return () => backHandler.remove();
  }, []);
  return (
    <View className="flex-1 bg-[#00CCBB]">
      <View className="h-10"></View>
      <View className="flex-row items-center justify-between px-5 mt-5">
        <TouchableOpacity
          activeOpacity={0.4}
          onPress={() => {
            navigation.navigate("Home");
          }}
        >
          <AntDesign name="close" size={32} color="white" />
        </TouchableOpacity>
        <TouchableOpacity>
          <Text className="text-lg font-bold text-white">Order Help</Text>
        </TouchableOpacity>
      </View>
      <View className="z-50 p-3 mx-8 mt-5 bg-white rounded-lg">
        <View className="flex-row items-center justify-between">
          <View>
            <Text className="text-base text-gray-500">Estimated Arrival</Text>
            <Text className="text-2xl font-bold text-black">45-55 Minutes</Text>
            <Progress.Bar
              size={30}
              color="#00CCBB"
              indeterminate={true}
              className="mt-2 mb-1"
            />
          </View>
          <View>
            <Image
              source={{ uri: "https://links.papareact.com/fls" }}
              className="w-20 h-20"
            />
          </View>
        </View>
        <View>
          <Text>
            Your order at {restaurant?.restaurant?.title} is being prepared
          </Text>
        </View>
      </View>
      <MapView
        initialRegion={{
          latitude: restaurant?.restaurant?.lat,
          longitude: restaurant?.restaurant?.long,
          latitudeDelta: 0.005,
          longitudeDelta: 0.005,
        }}
        toolbarEnabled={true}
        className="z-0 flex-1 -mt-10"
        mapType="standard"
      >
        <Marker
          coordinate={{
            latitude: restaurant?.restaurant?.lat,
            longitude: restaurant?.restaurant?.long,
          }}
          title={restaurant?.restaurant?.title}
          identifier="origin"
          pinColor="#00CCBB"
        />
      </MapView>
    </View>
  );
};

export default Delivery;
