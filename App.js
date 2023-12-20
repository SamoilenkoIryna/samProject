import React from 'react';
import HomeScreen from './src/screens/home/screens/HomeScreen';
import ProductCard from './src/screens/home/screens/ProductCard';
import ProductsList from './src/screens/home/screens/ProductList';
import CustomButton from './src/helpers/CustomButton';
import UseAppStateHook from './src/helpers/UseAppStateHook';

export default function App() {
  return (
    <UseAppStateHook />
  )
}