import {
  View,
  Text,
  ScrollView,
  Image,
  ActivityIndicator,
  TouchableOpacity,
  Modal,
  Dimensions,
} from "react-native";
import React, { useEffect, useState } from "react";
import client, { urlFor } from "../sanity";
import {
  FontAwesome5,
  FontAwesome,
  Ionicons,
  AntDesign,
  Entypo,
} from "@expo/vector-icons";
import MenuItem from "./MenuItem";
import Basket from "./Basket";
import { selectBasjetitem } from "../features/basketSlice";
import { useDispatch, useSelector } from "react-redux";
import { setRestaurant } from "../features/restaurantSlice";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const Restaurant = ({ navigation, route }) => {
  const { id } = route.params;
  const [restaurantsdetails, setrestaurantsdetails] = useState();
  const [openmodal, setopenmodal] = useState(false);
  const item = useSelector(selectBasjetitem);
  const dispatch = useDispatch()
  const modalopensetfun = () => {
    setopenmodal(!openmodal);
  };
  useEffect(() => {
    client
      .fetch(
        `*[_type == "restaurant" && _id == $id] {
        ...,
        dishes[]->{
            ...
          }
     }`,
        { id }
      )
      .then((data) => {
        setrestaurantsdetails(data[0]);
        dispatch(setRestaurant({
          id:id,
          title:data[0]?.name,
          rating:data[0]?.rating,
          address:data[0]?.address,
          short_desc:data[0]?.desc,
          dishes:data[0]?.dishes,
          }))
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    
  }, [])
  

  return (
    <View className="min-h-screen">
      <Modal
        visible={openmodal}
        transparent={true}
        animationType="slide"
        style={{ borderTopStartRadius: 3 }}
        onRequestClose={modalopensetfun}
      >
        <TouchableOpacity
          style={{
            backgroundColor: "rgba(0,0,0,.1)",
            width: windowWidth,
            height: windowHeight,
            position: "absolute",
            borderRadius: 3,
            borderWidth: 0.1,
          }}
          activeOpacity={1}
          onPress={modalopensetfun}
        >
            <View style={{
            backgroundColor:"#fff",
            width:windowWidth,
            height:250,
            position:'absolute',
            bottom:0,
        }} className="justify-center p-3 space-y-2">
            
        </View>
        </TouchableOpacity>
      </Modal>
      {restaurantsdetails ?
       (<View className="min-h-screen">
       {item.length != 0 && <Basket resname={restaurantsdetails?.name} img={restaurantsdetails?.image?.asset?._ref
                  ? urlFor(restaurantsdetails?.image?.asset?._ref).url()
                  : "https://links.papareact.com/gn7"} navigation={navigation}/> }
          <TouchableOpacity
            activeOpacity={0.6}
            className="absolute z-50 left-5 top-11"
            onPress={() => {
              navigation.goBack();
            }}
          >
            <FontAwesome5 name="arrow-circle-left" size={28} color="white" />
          </TouchableOpacity>
        <ScrollView>
          <View>
            <Image
              source={{
                uri: restaurantsdetails?.image?.asset?._ref
                  ? urlFor(restaurantsdetails?.image?.asset?._ref).url()
                  : "https://links.papareact.com/gn7",
              }}
              className="w-screen h-52"
            />
          </View>
          <View className="py-1">
            <View className="px-3">
              <Text className="text-2xl font-bold">
                {restaurantsdetails?.name}
              </Text>
            </View>
            <View className="flex-row items-center flex-1 px-3 space-x-1">
              <FontAwesome name="star" size={18} color={"#48bb78"} />
              <Text className="text-green-500">
                {restaurantsdetails?.rating}
              </Text>
              <Text>&#x2022;</Text>
              <Text className="text-gray-500">{"Offers"}</Text>
              <Ionicons name="ios-location-outline" size={14} color="gray" />
              <Text className="text-sm text-gray-600">Nearby</Text>
              <Text className="text-sm text-gray-600">&#x2022;</Text>
              <Text className="flex-1 text-sm text-gray-600">
                {restaurantsdetails?.address}
              </Text>
            </View>
            <View className="px-3 my-1">
              <Text className="font-medium text-gray-400">
                {restaurantsdetails?.desc}
              </Text>
            </View>
            <TouchableOpacity
              activeOpacity={0.5}
              onPress={modalopensetfun}
              className="flex-row items-center justify-between px-3 mx-1 my-2"
            >
              <View className="flex-row items-center space-x-1">
                <AntDesign name="questioncircleo" size={14} color="black" />
                <Text> Have a food allergy?</Text>
              </View>
              <View>
                <Entypo name="chevron-right" size={20} color="#00CCBB" />
              </View>
            </TouchableOpacity>
            <View className="px-3 py-2 bg-gray-200">
              <Text className="text-2xl font-bold text-black">Menu</Text>
            </View>
            <View className="mb-24">
                {Object.keys(restaurantsdetails?.dishes).map((item)=>{
                return <MenuItem 
                key={item}
                id={restaurantsdetails?.dishes[item]?._id}
                dish_name={restaurantsdetails?.dishes[item]?.name}
                dish_desc={restaurantsdetails?.dishes[item]?.short_desc}
                dish_price={restaurantsdetails?.dishes[item]?.price}
                image_url={urlFor(restaurantsdetails?.dishes[item]?.image?.asset?._ref).url()}
                />
            })}
            </View>
          </View>
        </ScrollView>
     </View> ) : (
        <View className="items-center justify-center h-screen">
          <ActivityIndicator size="large" color="#00ff00" />
        </View>
      )}
    </View>
  );
};

export default Restaurant;
