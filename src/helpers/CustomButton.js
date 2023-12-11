import React from 'react';
import { View, Text, TouchableOpacity, TouchableNativeFeedback, Platform, StyleSheet } from 'react-native';
import colors from '../styles/colors';

const CustomTouchable = ({ onPress, children }) => {
  if (Platform.OS === 'android') {
    return (
      <TouchableNativeFeedback onPress={onPress} background={TouchableNativeFeedback.Ripple(colors.buttonPressColor, false)}>
        <View style={styles.buttonContainer}>
          {children}
        </View>
      </TouchableNativeFeedback>
    );
  }

  return (
    <TouchableOpacity onPress={onPress} style={styles.buttonContainer}>
      {children}
    </TouchableOpacity>
  );
};

const CustomButton = ({ onPress }) => {
  return (
    <CustomTouchable onPress={onPress}>
      <View style={styles.button}>
        <Text style={styles.buttonText}>Custom button</Text>
      </View>
    </CustomTouchable>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    position: 1,
    top: 150,
    borderRadius: 5,
    overflow: 'hidden',
  },
  button: {
    backgroundColor: colors.buttonColor,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  buttonText: {
    color: colors.backgroundColor,
    fontSize: 16,
    textAlign: 'center',
  },
});

export default CustomButton;
