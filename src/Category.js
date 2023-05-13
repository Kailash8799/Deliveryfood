import { View, Text, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import CategoryCard from './CategoryCard'

const Category = () => {
  const [category, setcategory] = useState([{name:"Offers",image:"https://links.papareact.com/gn7"},{name:"Offers",image:"https://links.papareact.com/gn7"},{name:"Offers",image:"https://links.papareact.com/gn7"},
  {name:"Offers",image:"https://links.papareact.com/gn7"},
  {name:"Offers",image:"https://links.papareact.com/gn7"},
  {name:"Offers",image:"https://links.papareact.com/gn7"},
  {name:"Offers",image:"https://links.papareact.com/gn7"},
  {name:"Offers",image:"https://links.papareact.com/gn7"}, 
])
  return (
    <View>
      <ScrollView 
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{
        paddingHorizontal:10,
        paddingTop:5,
      }}
      >
        {Object.keys(category).map((item)=>{
            return <CategoryCard key={item} image={category[item].image} cat_name={category[item].name}/>
    })}
      </ScrollView>
    </View>
  )
}

export default Category