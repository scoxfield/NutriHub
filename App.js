import React, {useEffect} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import BarCodeComponent from './BarCodeComponent';
import SecondScreen from './Second';

const Stack = createStackNavigator();

export default function App() {
  return (
      <BarcodeProvider>
          <NavigationContainer>
                <Stack.Navigator initialRouteName="ACASA">
                <Stack.Screen name="Second" options={{ headerShown: false}} component={Second} />
                <Stack.Screen name="BarcodeScanPage" options={{ headerShown: false}} component={BarCodeComponent} />
                <Stack.Screen name="Home" options={{ headerShown: false}} component={Home} />
                </Stack.Navigator>
              <AppButtons></AppButtons>
          </NavigationContainer>
      </BarcodeProvider>
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
    text: {
      fontSize:30,
        color:'#FF8A00',

    },
});
