import React, {useEffect, useState} from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';
import { useBarcodeContext } from './BarcodeContext'; // Import the context
import AsyncStorage from '@react-native-async-storage/async-storage';
import {storeData} from "./Storage";

const Second = () => {
    //We need this just for the debugging to get the async value of savedProteins and display it
    const [savedProteins, saveSavedProteins] = useState(null)
    const fetchsavedProteins = async () => {
        const savedProteins = await AsyncStorage.getItem('Proteins');
        saveSavedProteins(savedProteins);
    };
    //ZZZZ
    fetchsavedProteins();
    const { barcodeData, proteinsData, loadData, updateProteinsData} = useBarcodeContext(); // Use the context
    return (
        <View style={styles.container}>
            <Text style={styles.text}>protein Data(Context): {proteinsData}{'\n'}
            proteinsData(Async storage): {savedProteins}{'\n'}
                {/*{JSON.stringify(barcodeData)}*/}</Text>
            <Button title={"Reset Protein Data"} onPress={ () =>{
                storeData('Proteins', JSON.stringify(0));
                updateProteinsData(parseFloat(0));
            }}/>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'orange',
        alignItems: 'center',
        justifyContent: 'center',
    },

    txt: {
        fontSize: 25,
        color: '#39A7FF',
        padding: 50,
    },

});


export default Second;