import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';
import axios from 'axios';
import { useBarcodeContext } from './BarcodeContext';
import { storeData, getData } from './Storage';
import AsyncStorage from '@react-native-async-storage/async-storage';
import asyncStorage from "@react-native-async-storage/async-storage/src/AsyncStorage";

export default function BarCodeComponent() {
    const { updateBarcodeData, updateProteinData, proteinData } = useBarcodeContext();
    const [hasPermission, setHasPermission] = useState(null);
    const [scanned, setScanned] = useState(false);

    //Not like this
    const [calories, setCalories] = useState(null);
    //

    useEffect(() => {
        const getBarCodeScannerPermissions = async () => {
            const { status } = await BarCodeScanner.requestPermissionsAsync();
            setHasPermission(status === 'granted');
        };
        //Not like this
        const fetchCalories = async () => {
                const caloriesData = await getData('Calories');
            setCalories(caloriesData);
            //
        };

        fetchCalories();
        getBarCodeScannerPermissions();
    }, []);

    const handleBarCodeScanned = async ({ type, data }) => {
        setScanned(true);
        try {
            const response = await axios.get(`https://world.openfoodfacts.net/api/v2/product/${data}`);
            const scannedProduct = response.data;
            if (response.data.status === 1) {
                alert(`Product Name: ${scannedProduct.product.nutriments.energy}`);
                //Get the data from the barcode
                updateBarcodeData(response.data);

                //Get the protein data and adds it to the current protein.
                updateProteinData(parseInt(JSON.stringify(scannedProduct.product.nutriments.proteins))+proteinData);


                const energyString = JSON.stringify(scannedProduct.product.nutriments.energy, null, 2);
                const energyObject = JSON.parse(energyString);
                const energyInteger = parseInt(energyObject);
                const storedcaloriesInteger = parseInt(calories)
                storeData('Calories',JSON.stringify(energyInteger+storedcaloriesInteger));
                storeData('Proteins',JSON.stringify(parseInt(JSON.stringify(scannedProduct.product.nutriments.proteins))+proteinData))

            } else {
                alert('Product not found');
            }
        } catch (error) {
            alert(`Error fetching product information ${error}`);
        }
    };


    if (hasPermission === null) {
        return <Text>Requesting for camera permission</Text>;
    }
    if (hasPermission === false) {
        return <Text>No access to camera</Text>;
    }

    return (
        <View style={styles.container}>
            <BarCodeScanner
                onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
                style={StyleSheet.absoluteFillObject}
            />
            {scanned && <Button title={'Tap to Scan Again'} onPress={() => setScanned(false)} />}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
    },
});
