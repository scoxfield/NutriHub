import React, {useEffect, useState} from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';
import { useBarcodeContext } from './BarcodeContext'; // Import the context
import AsyncStorage from '@react-native-async-storage/async-storage';
import {storeData} from "./Storage";

const Second = () => {
    const [savedProteins, saveSavedProteins] = useState(null)
    const fetchsavedProteins = async () => {
        const savedProteins = await AsyncStorage.getItem('Proteins');
        saveSavedProteins(savedProteins);
    };
    fetchsavedProteins();
    const { barcodeData, proteinData, loadData, updateProteinData} = useBarcodeContext(); // Use the context
    return (
        <View style={styles.container}>
            <Text style={styles.text}>protein Data(Context): {proteinData}{'\n'}
            proteinData(Async storage): {savedProteins}</Text>
            <Button title={"Reset Protein Data"} onPress={ () =>{
                storeData('Proteins', JSON.stringify(0));
                updateProteinData(parseInt(0));
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