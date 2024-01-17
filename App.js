import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './src/screens/home/screens/HomeScreen';
import ProductCard from './src/screens/home/screens/ProductCard';
import ProductList from './src/screens/home/screens/ProductList';
import CustomButton from './src/helpers/CustomButton';
import SettingsScreen from './src/screens/home/screens/SettingsScreen';
import AppNavigator from './src/screens/home/screens/AppNavigator';
import PizzaScreen from './src/screens/home/screens/PizzaScreen';
import SwiperScreen from './src/screens/home/screens/SwiperScreen';
import BasketScreen from './src/screens/home/screens/BasketScreen';
import LoginScreen from './src/screens/home/screens/LoginScreen';



const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="LoginScreen" component={LoginScreen} options={{ title: 'Login', headerShown: false }} />
        <Stack.Screen name="ProductList" component={ProductList} options={{ title: 'Products List' }} />
        <Stack.Screen name="PizzaScreen" component={PizzaScreen} options={{ title: 'Pizza Screen' }} />
        <Stack.Screen name="SwiperScreen" component={SwiperScreen} options={{ presentation: 'modal' }} />
        <Stack.Screen name="BasketScreen" component={BasketScreen} options={{ title: 'Basket' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};