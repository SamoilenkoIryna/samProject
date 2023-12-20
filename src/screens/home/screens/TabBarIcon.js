import React from 'react';
import { View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const TabBarIcon = ({ name, color, size }) => {
  return <Icon name={name} size={size} color={color} />;
};

export default TabBarIcon;