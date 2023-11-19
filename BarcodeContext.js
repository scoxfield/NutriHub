import React, {createContext, useContext, useEffect, useState} from 'react';
import AsyncStorage from "@react-native-async-storage/async-storage";
import {storeData} from "./Storage";

const BarcodeContext = createContext();

export const BarcodeProvider = ({ children }) =>{
    const [firstTime,setFirstTime] = useState(null);
    const [barcodeData, setBarcodeData] = useState(null);
    const [caloriesData,setCaloriesData] = useState(null);
    const [proteinsData, setProteinsData] = useState(null);
    const [carbsData, setCarbsData] = useState(null);
    const [fatsData, setFatsData] = useState(null);
    const [sugarsData, setSugarsData] = useState(null);
    const [saltData, setSaltData] = useState(null);
    useEffect( () =>{
        // Everytime you run the app it runs this stuff:
        loadData();

        }, []);


    //Functions to update the data globally:
    const updateBarcodeData = (data) => {
        setBarcodeData(data);
    };
    const updateCaloriesData = (data) => {
        setCaloriesData(data);
    };
    const updateProteinsData = (data) => {
        setProteinsData(data);
    }
    const updateCarbsData = (data) => {
        setCarbsData(data);
    }
    const updateFatsData = (data) => {
        setFatsData(data);
    }
    const updateSugarsData = (data) => {
        setSugarsData(data);
    }

    const updateSaltData = (data) => {
        setSaltData(data);
    }
    //

    //Function for loading the Global data from the Async storage
    const loadData = async () =>{
        try {
            //Saved values of nutriments
            const savedCalories = await AsyncStorage.getItem('Calories')
            setCaloriesData(parseFloat(savedCalories));

            const savedProteins = await AsyncStorage.getItem('Proteins');
            setProteinsData(parseFloat(savedProteins));

            const savedCarbs = await AsyncStorage.getItem('Carbs');
            setCarbsData(parseFloat(savedCarbs));

            const savedFats = await AsyncStorage.getItem('Fats');
            setFatsData(parseFloat(savedFats));

            const savedSugars = await AsyncStorage.getItem('Sugars');
            setSugarsData(parseFloat(savedSugars));

            const savedSalt = await AsyncStorage.getItem('Salt');
            setSaltData(parseFloat(savedSalt));
        } catch (error){
            console.error('ERROR LOADING DATA:', error);
        }
    }

    return (
        <BarcodeContext.Provider value={{
            //Data to be exported through the provider
            barcodeData,
            caloriesData,
            proteinsData,
            carbsData,
            fatsData,
            sugarsData,
            saltData,
            updateBarcodeData,
            updateCaloriesData,
            updateProteinsData,
            updateCarbsData,
            updateFatsData,
            updateSugarsData,
            updateSaltData,
            loadData,
        }}>
            {children}
        </BarcodeContext.Provider>
    );
};

export const useBarcodeContext = () => {
    return useContext(BarcodeContext);
};
