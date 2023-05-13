import { StyleSheet, Text, View,Dimensions } from 'react-native'
import React from 'react'
import Header from './Header';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const Home = ({navigation}) => {
  return (
    <>
        <Header/>
    </>
  )
}

export default Home

const styles = StyleSheet.create({})