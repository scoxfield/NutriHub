import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';
import axios from 'axios';

export default function BarCodeComponent() {
    const [hasPermission, setHasPermission] = useState(null);
    const [scanned, setScanned] = useState(false);

    useEffect(() => {
        const getBarCodeScannerPermissions = async () => {
            const { status } = await BarCodeScanner.requestPermissionsAsync();
            setHasPermission(status === 'granted');
        };

        getBarCodeScannerPermissions();
    }, []);

    const formatObjects = (value) =>{
        let object ={
            "name": value["data"]["product"]["jbjhkj"]
        };
    }

    const handleBarCodeScanned = async ({ type, data }) => {
        setScanned(true);
        try {
            const response = await axios.get(`https://world.openfoodfacts.net/api/v2/product/${data}`);
            const product = response.data.product;
            response.data["dsfd"]
            response.data["dsfdhfhf"]
            if (response.data.status === 1) {
                alert(`Product Name: ${response.data.product.product_name}`);
            } else {
                alert('Product not found');
            }
        } catch (error) {
            alert('Error fetching product information');
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
