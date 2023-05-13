import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'

const Login = ({navigation}) => {
  return (
    <View>
    <TouchableOpacity onPress={()=>{navigation.navigate("Home")}}><Text className="p-4 bg-gray-400 ">Login</Text></TouchableOpacity>  
    </View>
  )
}

export default Login