import { Alert, BackHandler, ScrollView } from 'react-native'
import React, { useEffect } from 'react'
import Header from './Header';
import Category from './Category';
import Featuredcol from './Featuredcol';
import Top from './Top';


const Home = ({navigation}) => {

  useEffect(() => {
    const backAction = () => {
      BackHandler.exitApp()
      return true;
    };
    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      backAction,
    );

    return () => backHandler.remove();
  }, []);
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