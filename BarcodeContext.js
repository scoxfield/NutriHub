import React, {createContext, useContext, useEffect, useState} from 'react';
import AsyncStorage from "@react-native-async-storage/async-storage";
import {storeData} from "./Storage";

const BarcodeContext = createContext();

export const BarcodeProvider = ({ children }) => {

    const [proteinData, setProteinData] = useState(null);
    const [barcodeData, setBarcodeData] = useState(null);
    useEffect( () =>{
        //
        loadData();
    }, []);
    const updateProteinData = (data) => {
        setProteinData(data);
    }
    const updateBarcodeData = (data) => {
        setBarcodeData(data);

    };

    const loadData = async () =>{
        try {
            //Saved values of nutriments
            const savedProteins = await AsyncStorage.getItem('Proteins');
            alert(typeof (parseInt(savedProteins)));
            setProteinData(parseInt(savedProteins));
            alert(`protein data is: ${proteinData}, saved async is ${savedProteins}`);
        } catch (error){
            console.error('ERROR LOADING DATA:', error);
        }
    }

    return (
        <BarcodeContext.Provider value={{
            barcodeData,
            updateBarcodeData,
            proteinData,
            updateProteinData,
            loadData,
        }}>
            {children}
        </BarcodeContext.Provider>
    );
};

export const useBarcodeContext = () => {
    return useContext(BarcodeContext);
};
