import React, {useEffect} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import {NavigationContainer, useNavigation} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import BarCodeComponent from './BarCodeComponent';
import Second from './Second';
import ThirdScreen from "./Third";
import Third from "./Third";
import Home from "./Home";
import { BarcodeProvider } from './BarcodeContext';
import { storeData, getData } from './Storage';
import BottomTab from "./BottomTab";
import AsyncStorage from '@react-native-async-storage/async-storage';

const Stack = createStackNavigator();

export default function App() {
    return (
        <BarcodeProvider>
            <NavigationContainer>
                <Stack.Navigator initialRouteName="Home">
                    <Stack.Screen name="Second" options={{ headerShown: false }} component={Second} />
                    <Stack.Screen name="BarcodeScanPage" options={{ headerShown: false }} component={BarCodeComponent} />
                    <Stack.Screen name="Home" options={{ headerShown: false }} component={Home} />
                    <Stack.Screen name="Third" options={{ headerShown: false }} component={Third} />
                </Stack.Navigator>
                <AppButtons />
                <BottomTab />
            </NavigationContainer>
        </BarcodeProvider>
    );
}


const AppButtons = () => {
    const navigation = useNavigation();

    return (
        <View style={styles.buttonContainer}>
            <Button title={'Scan'} onPress={() => navigation.navigate('BarcodeScanPage')} />
            <Button title={'Proteins'} onPress={() => navigation.navigate('Second')} />
        </View>
    );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
      backgroundColor:'wheat',
  },
  buttonContainer: {
    marginTop: 20,
  },
    text: {
      fontSize:30,
        color:'#FF8A00',

    },
});
