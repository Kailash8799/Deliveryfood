import { View, Text, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { AntDesign } from '@expo/vector-icons';
import RestaurantCard from './RestaurantCard';

const Offersnearyou = () => {
    const [offernear, setoffernearyou] = useState([
  {title:"Offers",image:"https://links.papareact.com/gn7",rating:4.3,address:"Vasna Vatam",category:"food"},
  {title:"Offers",image:"https://links.papareact.com/gn7",rating:4.3,address:"Vasna Vatam",category:"food"},
  {title:"Offers",image:"https://links.papareact.com/gn7",rating:4.3,address:"Vasna Vatam",category:"food"},
  {title:"Offers",image:"https://links.papareact.com/gn7",rating:4.3,address:"Vasna Vatam",category:"food"},
  {title:"Offers",image:"https://links.papareact.com/gn7",rating:4.3,address:"Vasna Vatam",category:"food"},
  {title:"Offers",image:"https://links.papareact.com/gn7",rating:4.3,address:"Vasna Vatam",category:"food"},
  {title:"Offers",image:"https://links.papareact.com/gn7",rating:4.3,address:"Vasna Vatam",category:"food"},
  {title:"Offers",image:"https://links.papareact.com/gn7",rating:4.3,address:"Vasna Vatam",category:"food"}, 
])
  return (
    <View className="mt-2">
        
        <View className="flex-row items-center justify-between mx-3">
            <Text className="text-lg font-bold">Offers near you!</Text>
            <AntDesign name="arrowright" size={24} color="#00CCBB" />
        </View>
        <Text className="mx-3 text-xs">Why not support your local restaurant tonight!</Text>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
            paddingHorizontal:10,
            paddingTop:5,
        }}
      >
        {Object.keys(offernear).map((item)=>{
        return <RestaurantCard 
            key={item}
            imageUrl={offernear[item].image}
            title={offernear[item].title}
            rating={offernear[item].rating}
            address={offernear[item].address}
            category={offernear[item].category}
        />  })}
      </ScrollView>
    </View>
  )
}

export default Offersnearyou