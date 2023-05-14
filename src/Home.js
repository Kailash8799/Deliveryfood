import { ScrollView } from 'react-native'
import React from 'react'
import Header from './Header';
import Category from './Category';
import Featuredcol from './Featuredcol';
import Top from './Top';


const Home = ({navigation}) => {
  return (
    <>
        <Top/>
        <Header navigation={navigation}/>
        <ScrollView contentContainerStyle={{paddingBottom:40}} showsVerticalScrollIndicator={false}>
        <Category navigation={navigation}/>
        <Featuredcol navigation={navigation}/>
        </ScrollView>
    </>
  )
}

export default Home