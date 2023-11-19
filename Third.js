import React, { useState } from 'react';
import { Image, View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { useBarcodeContext } from "./BarcodeContext";
import { storeData } from "./Storage";

const Third = () => {
    const {
        barcodeData,
        updateCaloriesData,
        updateProteinsData,
        updateCarbsData,
        updateSugarsData,
        updateFatsData,
        updateSaltData,
        caloriesData,
        proteinsData,
        sugarsData,
        saltData,
        carbsData,
        fatsData
    } = useBarcodeContext();
    const [object, useObject, setObject] = useState({
        calories: JSON.stringify(barcodeData.product.nutriments["energy-kcal_100g"]) || '0',
        proteins: JSON.stringify(barcodeData.product.nutriments.proteins_100g) || '0',
        carbs: JSON.stringify(barcodeData.product.nutriments.carbohydrates_100g) || '0',
        fats: JSON.stringify(barcodeData.product.nutriments.fats_100) || '0',
        sugars: JSON.stringify(barcodeData.product.nutriments.sugars_100g) || '0',
        expiration: JSON.stringify(barcodeData.product.expiration_date),
        image: barcodeData.product.image_url,
        salt: JSON.stringify(barcodeData.product.nutriments.salt_100g) || '0',
        packaging: JSON.stringify(barcodeData.packaging),
        productQuantity: barcodeData.product.product_quantity,
        nutritionGrade: barcodeData.product.nutrition_grades_tags,
        productname: barcodeData.product.product_name || 'Unknown',
    });
    const saltFixed = Number(object.salt).toFixed(2);
    return (

        <View style={styles.container}>
            <ScrollView>
                <Image source={{ uri: object.image }} style={styles.image} />
                <Text style={styles.macronutrientsText}>
                    The product {object.productname} has the following Macronutrients:{'\n'}
                    Calories: {parseFloat(object.calories)}{'\n'}
                    Proteins: {parseFloat(object.proteins)} {'\n'}
                    Fats: {parseFloat(object.proteins)} {'\n'}
                    Carbs: {parseFloat(object.carbs)} {'\n'}
                    Sugars: {parseFloat(object.sugars)} {'\n'}
                    Salts: {saltFixed}{'\n'}
                    Nutrition Grade: {JSON.stringify(barcodeData.nutrition_grades_tags)}{'\n'}
                    Product Quantity: {object.productQuantity}{'\n'}
                    Packaging: { JSON.stringify(barcodeData.packaging)}{'\n'}
                    {barcodeData.product.nutrition_grades_tags}{typeof(barcodeData.product.nutrition_grades_tags)}{'\n'}
                    {JSON.stringify(barcodeData.product.nutrition_grades_tags)}{typeof(barcodeData.product.nutrition_grades_tags)}

                </Text>
            </ScrollView>
            <View style={styles.buttonContainer}>
                <View style={styles.buttonWrapper}>
                    <TouchableOpacity
                        style={styles.circularButton}
                        onPress={() => {
                            var updatedCaloriesData = caloriesData + parseFloat(object.calories);
                            updateCaloriesData(updatedCaloriesData);
                            storeData('Calories', JSON.stringify(updatedCaloriesData));

                            var updatedProteinsData = proteinsData + parseFloat(object.proteins);
                            updatedProteinsData = Math.round(updatedProteinsData*100)/100;
                            updateProteinsData(updatedProteinsData);
                            storeData('Proteins', JSON.stringify(updatedProteinsData));

                            var updatedCarbsData = carbsData + parseFloat(object.carbs);
                            updatedCarbsData = Math.round(updatedCarbsData*100)/100;
                            updateCarbsData(updatedCarbsData);
                            storeData('Carbs', JSON.stringify(updatedCarbsData));

                            var updatedSugarsData = sugarsData + parseFloat(object.sugars);
                            updatedSugarsData = Math.round(updatedSugarsData*100)/100;
                            updateSugarsData(updatedSugarsData);
                            storeData('Sugars', JSON.stringify(updatedSugarsData));

                            var updatedFatsData = fatsData + parseFloat(object.fats);
                            updatedFatsData = Math.round(updatedFatsData*100)/100;
                            updateFatsData(updatedFatsData);
                            storeData('Fats', JSON.stringify(updatedFatsData));

                            var updatedSaltData = saltData + parseFloat(object.salt);
                            updatedSaltData = Math.round(updatedSaltData*100)/100;
                            updateSaltData(updatedSaltData);
                            storeData('Salt', JSON.stringify(updatedSaltData));

                        }}
                    >
                        <Text style={styles.buttonText}>ADD</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.buttonWrapper}>
                    <TouchableOpacity
                        style={styles.circularButton}
                        onPress={() => {
                            alert('Nu merge?');
                        }}
                    >
                        <Text style={styles.buttonText}>CANCEL</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    content: {
        flex: 1,
        width: '100%',
        height: '100%',

        paddingTop: 50,
        paddingBottom: 50,
        alignItems: 'center',
        color: 'black',
    },
    image: {
        height: 280,
        width: '100%',
        resizeMode: 'contain',
        marginTop: 50,

    },
    macronutrientsText: {
        textAlign: 'center',
        fontSize: 18,
        color: 'black',
        marginBottom: 20,
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',

        paddingVertical: 20,
    },
    buttonWrapper: {
        flexDirection: 'row',
    },
    circularButton: {
        backgroundColor: 'orange',
        borderRadius: 50,
        width: 100,
        height: 100,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
    },
});

export default Third;
