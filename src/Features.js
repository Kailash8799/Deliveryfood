import { View, Text, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { AntDesign } from '@expo/vector-icons';
import RestaurantCard from './RestaurantCard';

const Features = () => {
    const [feature, setfeature] = useState([
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
            <Text className="text-lg font-bold">Featured</Text>
            <AntDesign name="arrowright" size={24} color="#00CCBB" />
        </View>
        <Text className="mx-3 text-xs">Paid placements from our partners</Text>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
            paddingHorizontal:10,
            paddingTop:5,
        }}
      >
        {Object.keys(feature).map((item)=>{
        return <RestaurantCard 
            key={item}
            imageUrl={feature[item].image}
            title={feature[item].title}
            rating={feature[item].rating}
            address={feature[item].address}
            category={feature[item].category}
        />  })}
      </ScrollView>
    </View>
  )
}

export default Features