import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';
import axios from 'axios';
import { useBarcodeContext } from './BarcodeContext';
import { storeData, getData } from './Storage';
import AsyncStorage from '@react-native-async-storage/async-storage';
import asyncStorage from "@react-native-async-storage/async-storage/src/AsyncStorage";

export default function BarCodeComponent({ navigation }) {
    const { updateBarcodeData, updateProteinsData, proteinsData } = useBarcodeContext();
    const [hasPermission, setHasPermission] = useState(null);
    const [scanned, setScanned] = useState(false);


    useEffect(() => {
        const getBarCodeScannerPermissions = async () => {
            const { status } = await BarCodeScanner.requestPermissionsAsync();
            setHasPermission(status === 'granted');
        };

        getBarCodeScannerPermissions();
    }, []);

    const handleBarCodeScanned = async ({ type, data }) => {
        setScanned(true);
        try {
            //Uses the extracted data of the barcode to call the openfoodfacts api and get the product data
            //?fields=product_name,product_quantity,quantity,nutriment,nutriments,image_url,name_en,nutrition_grades_tags,packaging,agribalyse,previous_data,expiration_date
            const response = await axios.get(`https://world.openfoodfacts.net/api/v2/product/${data}?fields=product_name,product_quantity,quantity,nutriment,nutriments,image_url,name_en,nutrition_grades_tags,packaging,agribalyse,previous_data,expiration_date`);
            const scannedProduct = response.data;
            if (response.data.status === 1) {

                //Get the data from the barcode
                updateBarcodeData(scannedProduct);
                navigation.navigate('Thirdx')

            } else {


                navigation.navigate('Home');
                {scanned && setScanned(false)}
            }
        } catch (error) {
            alert("Product was not found");

            navigation.navigate('Home');
            {scanned && setScanned(false)}
        }
    };

    //Request camera permision
    if (hasPermission === null) {
        return <Text>Requesting for camera permission</Text>;
    }
    if (hasPermission === false) {
        return <Text>No access to camera</Text>;
    }

    //Button in order to scan again after each scan just for the Debugging
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
//Styling
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
    },
});
