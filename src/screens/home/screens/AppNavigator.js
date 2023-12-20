import React from 'react';
import { Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './HomeScreen';
import SettingsScreen from './SettingsScreen';
import TabBarIcon from './TabBarIcon';

const Tab = createBottomTabNavigator();

const AppNavigator = () => {
    return (
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;
  
              if (route.name === 'Home') {
                iconName = focused ? 'home' : 'home';
              } else if (route.name === 'Settings') {
                iconName = focused ? 'settings' : 'settings';
              }
  
              return <TabBarIcon name={iconName} size={size} color={color} />;
            },
            tabBarLabel: ({ focused, color }) => {
              return <Text style={{ color }}>{route.name}</Text>;
            },
          })}
          tabBarOptions={{
            activeTintColor: 'blue',
            inactiveTintColor: 'gray',
          }}
        >
          <Tab.Screen name="Home" component={HomeScreen} />
          <Tab.Screen name="Settings" component={SettingsScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    );
  };
  
export default AppNavigator;
