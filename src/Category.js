import { View, Text, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import CategoryCard from './CategoryCard'
import client,{urlFor} from '../sanity'

const Category = ({navigation}) => {
  const [category, setcategory] = useState([{_id:"234sd4sxz4fd",name:"Offers",image:"https://links.papareact.com/gn7"}])

  useEffect(() => {
    client.fetch(`*[_type == "category"] {
      name,_id,image
    }`).then((data)=>{
      setcategory(data)
    }).catch((error)=>{console.log(error);})
  }, [])
  
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
        {Object.keys(category)?.map((item)=>{
            return <CategoryCard 
                      navigation={navigation} 
                      key={item} 
                      id={category[item]._id}
                      image={category[item]?.image?.asset?._ref ? urlFor(category[item]?.image?.asset?._ref).url() : "https://links.papareact.com/gn7"} 
                      cat_name={category[item].name}/>
    })}
      </ScrollView>
    </View>
  )
}

export default Category