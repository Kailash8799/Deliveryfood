import { ScrollView } from 'react-native'
import React from 'react'
import Header from './Header';
import Category from './Category';
import OfferNearYou from './OfferNearYou';
import Features from './Features';
import TastyDiscount from './TastyDiscount';


const Home = ({navigation}) => {
  return (
    <>
        <Header navigation={navigation}/>
        <ScrollView contentContainerStyle={{paddingBottom:40}} showsVerticalScrollIndicator={false}>
          <Category navigation={navigation}/>
          <OfferNearYou navigation={navigation}/>
          <Features navigation={navigation}/>
          <TastyDiscount navigation={navigation}/>
        </ScrollView>
    </>
  )
}

export default Home