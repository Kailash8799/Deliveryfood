import { View, Text, TouchableOpacity, SafeAreaView } from "react-native";
import React from "react";
import Top from "./Top";

const Login = ({ navigation }) => {
  return (
    <SafeAreaView>
      <Top/>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("Home");
        }}
      >
        <Text className="p-4 bg-gray-400 ">Login Button</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default Login;
