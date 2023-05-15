import { View, Text, BackHandler } from 'react-native'
import React, { useEffect } from 'react'

const Delivery = ({navigation}) => {
    useEffect(() => {
        const backAction = () => {
          navigation.push("Home")
          return true;
        };
    
        const backHandler = BackHandler.addEventListener(
          'hardwareBackPress',
          backAction,
        );
        return () => backHandler.remove();
      }, []);
  return (
    <View>
      <Text>Delivery</Text>
    </View>
  )
}

export default Delivery