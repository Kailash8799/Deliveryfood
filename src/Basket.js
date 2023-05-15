import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux'
import { itemTotal, selectBasjetitem } from '../features/basketSlice'

const Basket = ({navigation,resname,img}) => {
    const item = useSelector(selectBasjetitem);
    const total = useSelector(itemTotal);
  return (
    <View className="absolute z-50 w-full p-4 bottom-2">

      <TouchableOpacity onPress={()=>{navigation.navigate("Cart",{resname,img})}} activeOpacity={0.6} className="p-3 px-5 items-center rounded-lg justify-between flex-row flex-1 bg-[#00CCBB]">
      <Text className="p-2 font-bold text-white bg-teal-500 rounded-lg">{item.length}</Text>
      <Text className="font-bold text-white">View Cart</Text>
      <Text className="font-bold text-white">₹{total}</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Basket