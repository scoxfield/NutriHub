import React, { useRef, useEffect } from 'react';
import { Image, View, Text, TouchableOpacity, StyleSheet, Animated } from 'react-native';
import { getData } from './Storage';
import { storeData } from './Storage';
import { useBarcodeContext } from './BarcodeContext';


const CustomResetButton = ({ onPress }) => (
    <TouchableOpacity onPress={onPress} style={styles.resetButton}>
        <Text style={styles.buttonText}>Reset Values</Text>
    </TouchableOpacity>
);

const Home = () => {
    const {
        barcodeData,
        updateCaloriesData,
        updateProteinsData,
        updateCarbsData,
        updateFatsData,
        updateSugarsData,
        updateSaltData,
        saltData,
        caloriesData,
        proteinsData,
        fatsData,
        carbsData,
        sugarsData,
    } = useBarcodeContext();

    const handleResetPress = () => {
        storeData('Proteins', JSON.stringify(0));
        updateProteinsData(parseFloat(0));
        storeData('Calories', JSON.stringify(0));
        updateCaloriesData(parseFloat(0));
        storeData('Carbs', JSON.stringify(0));
        updateCarbsData(parseFloat(0));
        storeData('Fats', JSON.stringify(0));
        updateFatsData(parseFloat(0));
        storeData('Sugars', JSON.stringify(0));
        updateSugarsData(parseFloat(0));
        storeData('Salt', JSON.stringify(0));
        updateSaltData(parseFloat(0));
    };

    const animatedValueBlob1 = useRef(new Animated.Value(0)).current;
    const animatedValueBlob2 = useRef(new Animated.Value(0)).current;

    useEffect(() => {
        Animated.loop(
            Animated.sequence([
                Animated.timing(animatedValueBlob1, {
                    toValue: 1,
                    duration: 1000,
                    useNativeDriver: true,
                }),
                Animated.timing(animatedValueBlob1, {
                    toValue: 0,
                    duration: 1000,
                    useNativeDriver: true,
                }),
            ]),
        ).start();
    }, [animatedValueBlob1]);

    useEffect(() => {
        Animated.loop(
            Animated.sequence([
                Animated.timing(animatedValueBlob2, {
                    toValue: 1,
                    duration: 700, // Adjust the duration for different speed
                    useNativeDriver: true,
                }),
                Animated.timing(animatedValueBlob2, {
                    toValue: 0,
                    duration: 700,
                    useNativeDriver: true,
                }),
            ]),
        ).start();
    }, [animatedValueBlob2]);

    const translateYBlob1 = animatedValueBlob1.interpolate({
        inputRange: [0, 1],
        outputRange: [0, 30],
    });

    const translateYBlob2 = animatedValueBlob2.interpolate({
        inputRange: [0, 1],
        outputRange: [0, 30],
    });

    return (
        <View style={styles.container}>
            <Image source={require('./assets/CarrotLogo.png')} style={styles.image} />
            <Text style={styles.todayText}>Today</Text>

            <Animated.Image
                source={require('./assets/abstract-reddish-pink-blob-element-free-png.png')}
                style={[styles.blob_1, { transform: [{ translateY: translateYBlob1 }] }]}
            />

            <Animated.Image
                source={require('./assets/abstract-reddish-pink-blob-element-free-png.png')}
                style={[styles.blob_2, { transform: [{ translateY: translateYBlob2 }] }]}
            />



            <Text style={styles.nutritionalData}>
                Calories: {caloriesData}{'\n'}
                Proteins: {proteinsData} {'\n'}
                Fats: {fatsData} {'\n'}
                Carbs: {carbsData} {'\n'}
                Sugars: {sugarsData} {'\n'}
                Salts: {saltData}{'\n'}
            </Text>

            <CustomResetButton onPress={handleResetPress} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    resetButton: {
        backgroundColor: 'orange',
        borderRadius: 20,
        padding: 10,
        marginVertical: 10,
    },
    // Updated styles for the text and image
    image: {
        height: 150,
        width: 50,
    },
    blob_1: {
        position: 'absolute',
        top: 250,
        left: 200,
        height: 500,
        width: 500,
    },
    blob_2: {
        position: 'absolute',
        top: -140,
        right: 200,
        height: 500,
        width: 500,
    },
    buttonText: {
        color: 'white',
        textAlign: 'center',
    },

    todayText: {
        fontSize: 40,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    nutritionalData: {
        fontSize: 26,

        textAlign: 'center',
        lineHeight: 30,
    },
});


export default Home;
