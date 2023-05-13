import { View, Text, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { AntDesign } from '@expo/vector-icons';
import RestaurantCard from './RestaurantCard';

const TastyDiscount = () => {
    const [tastydiscount, settastydiscount] = useState([
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
            <Text className="text-lg font-bold">Tasty Discounts</Text>
            <AntDesign name="arrowright" size={24} color="#00CCBB" />
        </View>
        <Text className="mx-3 text-xs">Everyone's been enjoying these juicy discount!</Text>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
            paddingHorizontal:10,
            paddingTop:5,
        }}
      >
        {Object.keys(tastydiscount).map((item)=>{
        return <RestaurantCard 
            key={item}
            imageUrl={tastydiscount[item].image}
            title={tastydiscount[item].title}
            rating={tastydiscount[item].rating}
            address={tastydiscount[item].address}
            category={tastydiscount[item].category}
        />  })}
      </ScrollView>
    </View>
  )
}

export default TastyDiscount