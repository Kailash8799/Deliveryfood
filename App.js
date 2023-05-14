import {  } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './src/Home';
import Login from './src/Login';
import 'react-native-url-polyfill/auto';
import Restaurant from './src/Restaurant';


const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
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
        <Stack.Screen 
          name='Restaurant' 
          component={Restaurant}
          options={{headerShown:false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
