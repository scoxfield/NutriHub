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
import HiUser from "./HiUser";
import {useFonts} from "expo-font";

const Stack = createStackNavigator();


const StackForScan = createStackNavigator();

const ScanStack = () => <StackForScan.Navigator>
    <Stack.Screen name="BarcodeScanPage" options={{ headerShown: false }} component={BarCodeComponent} />
    <Stack.Screen name="Thirdx" options={{ headerShown: false }} component={Third} />
</StackForScan.Navigator>




export default function App() {
    return (
        <BarcodeProvider>
            <NavigationContainer>
                <Stack.Navigator initialRouteName="Home">
                    <Stack.Screen name="HiUser" options={{ headerShown: false }} component={HiUser} />
                    <Stack.Screen name="Second" options={{ headerShown: false }} component={Second} />
                    <Stack.Screen name="BarcodeScanStack" options={{ headerShown: false }} component={ScanStack} />
                    <Stack.Screen name="Home" options={{ headerShown: false }} component={Home} />
                    <Stack.Screen name="Third" options={{ headerShown: false }} component={Third} />
                </Stack.Navigator>
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
        flexDirection: 'column',
        justifyContent: 'space-between',
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