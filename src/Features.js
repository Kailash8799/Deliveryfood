import { View, Text, ScrollView } from 'react-native'
import React, { useState,useEffect } from 'react'
import { AntDesign } from '@expo/vector-icons';
import RestaurantCard from './RestaurantCard';
import client, { urlFor } from '../sanity';

const Features = ({navigation,id,title,desc}) => {
    const [feature, setfeature] = useState([
  {title:"Offers",image:"https://links.papareact.com/gn7",rating:4.3,address:"Vasna Vatam",category:"food"},
 ])

  useEffect(() => {
    client.fetch(`*[_type == "featured" && _id == $id] {
      ...,
     restaurants[]->{
       ...,
       dishes[]->,
       type->{
         name
       }
     }
   }[0]`,{id}).then((data)=>{
      setfeature(data.restaurants)
    }).catch((error)=>{
      console.log(error);
    }) 
  }, [])
  
  return (
    <View className="mt-2">
        
        <View className="flex-row items-center justify-between mx-3">
            <Text className="text-lg font-bold">{title}</Text>
            <AntDesign name="arrowright" size={24} color="#00CCBB" />
        </View>
        <Text className="mx-3 text-xs">{desc}</Text>
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
            id={feature[item]?._id}
            navigation={navigation}
            imageUrl={feature[item]?.image?.asset?._ref ?urlFor(feature[item]?.image?.asset?._ref).url():"https://links.papareact.com/gn7"}
            title={feature[item]?.name}
            rating={feature[item]?.rating}
            address={feature[item]?.address}
            category={feature[item]?.type?.name}
        />  })}
      </ScrollView>
    </View>
  )
}

export default Features