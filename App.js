import {  } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './src/Home';
import Login from './src/Login';
import 'react-native-url-polyfill/auto';
import Restaurant from './src/Restaurant';
import { Provider } from 'react-redux';
import store from './store';
import Cart from './src/Cart';
import PrapareOrder from './src/PrapareOrder';
import Delivery from './src/Delivery';


const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Provider store={store}>
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
          options={{headerShown:false,animation:'flip'}}
        />
        <Stack.Screen 
          name='Cart' 
          component={Cart}
          options={{headerShown:false,animation:'flip'}}
        />
        <Stack.Screen 
          name='PrapareOrder' 
          component={PrapareOrder}
          options={{headerShown:false,presentation:'fullScreenModal'}}
        />
        <Stack.Screen 
          name='Delivery' 
          component={Delivery}
          options={{headerShown:false,animation:'slide_from_bottom',presentation:'fullScreenModal'}}
        />
      </Stack.Navigator>
    </Provider>
    </NavigationContainer>
  );
}
