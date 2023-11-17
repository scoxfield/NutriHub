import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import BarCodeComponent from './BarCodeComponent';
import SecondScreen from './Second';

const Stack = createStackNavigator();

export default function App() {
  return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" options={{ headerShown: false}} component={HomeScreen} />
          <Stack.Screen name="SecondScreen" options={{ headerShown: false}} component={SecondScreen} />
        </Stack.Navigator>
      </NavigationContainer>
  );
}

function HomeScreen({ navigation }) {
  return (
      <View style={styles.container}>
        <View style={styles.buttonContainer}>
          <Button
              title="Go to Second Screen"
              onPress={() => navigation.navigate('SecondScreen')}
          />
            <Button
                title="Go to Third Screen"
                onPress={() => navigation.navigate('ThirdScreen')}
            />
        </View>
        <StatusBar style="auto" />
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonContainer: {
    marginTop: 20,
  },
});
