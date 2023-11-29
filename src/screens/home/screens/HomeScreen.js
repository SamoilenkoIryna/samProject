import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
        <View style={{
            width: '50%',
            height: '50%',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'yellow',
        }}>
        <Text>Hello world!!!!</Text>
        </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'black',
  },
});
