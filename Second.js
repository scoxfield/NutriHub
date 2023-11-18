import React from 'react';
import { View, Text, Button } from 'react-native';
import BarCodeComponent from "./BarCodeComponent";

const SecondScreen = () => {
    return (
            <BarCodeComponent/>
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


export default SecondScreen;
