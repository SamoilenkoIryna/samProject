import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import colors from '../../../styles/colors';

const LoginScreen = ({ navigation }) => {
  const handleSkip = () => {
    navigation.navigate('ProductList');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Login Screen</Text>
      <TextInput style={styles.input} placeholder="Username" />
      <TextInput style={styles.input} placeholder="Password" secureTextEntry />
      <View style={styles.buttonsPosition}>
      <TouchableOpacity style={styles.loginButton} onPress={handleSkip}>
        <Text style={styles.buttonText}>Log in</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.loginButton} onPress={handleSkip}>
        <Text style={styles.buttonText}>Skip</Text>
      </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  input: {
    height: 40,
    width: '100%',
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 12,
    paddingLeft: 8,
  },
  buttonsPosition: {
    flexDirection: "row",
  },
  loginButton: {
    backgroundColor: colors.mainColor,
    padding: 10,
    borderRadius: 5,
    marginRight: 10,
  },
  skipButton: {
    backgroundColor: colors.mainColor,
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: colors.backgroundColor,
    textAlign: 'center',
  },
});

export default LoginScreen;
