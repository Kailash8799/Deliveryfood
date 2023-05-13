import {  } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './src/Home';
import Top from './src/Top';
import Login from './src/Login';

const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Top />
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen 
          name='Home' 
          component={Home}
          options={{headerShown:false}}
        />
        <Stack.Screen 
          name='Login' 
          component={Login}
          options={{headerShown:false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
