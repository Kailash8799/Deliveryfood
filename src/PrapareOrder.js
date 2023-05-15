import { SafeAreaView, ActivityIndicator, BackHandler } from 'react-native'
import React, { useEffect } from 'react'
import * as Animatable from 'react-native-animatable'

const PrapareOrder = ({navigation}) => {
    useEffect(() => {
        setTimeout(() => {
            navigation.navigate("Delivery")
        }, 4000);
        const backAction = () => {
          return true;
        };
    
        const backHandler = BackHandler.addEventListener(
          'hardwareBackPress',
          backAction,
        );
        return () => backHandler.remove();
      }, []);
    
  return (
    <SafeAreaView className="bg-[#00CCBB] flex-1 justify-center items-center">
        <Animatable.Image 
            source={require("../assets/process.gif")}
            animation="slideInUp"
            iterationCount={1}
            className="h-80 w-80"
        />
        
        <Animatable.Text
            animation={"slideInUp"}
            iterationCount={1}
            className="my-10 text-base font-bold text-center text-white"
        >
            Waiting for Restaurant to accept your order!
        </Animatable.Text>
        <ActivityIndicator animating={true} size={60} color="white" />
    </SafeAreaView>
  )
}

export default PrapareOrder