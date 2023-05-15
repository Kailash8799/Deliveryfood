import { View, Text, Modal, TouchableOpacity, Dimensions, Animated } from 'react-native'
import React from 'react'

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const ModalTop = ({modalopen,modalopenset,navigation}) => {
  return (
    <Modal 
    visible={modalopen} 
    transparent={true} 
    style={{borderRadius:3,height:windowHeight}}
    onRequestClose={modalopenset}
    animationType='slide'
    >
    <Animated.View>
        <TouchableOpacity style={{
            backgroundColor:"rgba(0,0,0,.3)",
            width:windowWidth,
            height:windowHeight,
            position:'absolute',
            borderRadius:3,
            borderWidth:0.1
        }} activeOpacity={1} onPress={modalopenset}>
        
        <View style={{
            backgroundColor:"#fff",
            width:130,
            height:170,
            position:'absolute',
            top:46,
            right:30,
            borderRadius:3,
        }} className="justify-center p-3 space-y-2">
            <TouchableOpacity activeOpacity={0.5} onPress={()=>{navigation.navigate("Login")}}><Text className="text-lg font-medium">Profile</Text></TouchableOpacity> 
            <TouchableOpacity activeOpacity={0.5} onPress={()=>{}}><Text className="text-lg font-medium">Cart</Text></TouchableOpacity> 
            <TouchableOpacity activeOpacity={0.5} onPress={()=>{}}><Text className="text-lg font-medium">Orders</Text></TouchableOpacity> 
            <TouchableOpacity activeOpacity={0.5} onPress={()=>{}}><Text className="text-lg font-medium">Logout</Text></TouchableOpacity> 
        </View>
        </TouchableOpacity>
        </Animated.View>   
    </Modal>
  )
}

export default ModalTop