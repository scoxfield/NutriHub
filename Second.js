import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Second = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.txt}>
                Hi Alex!! {'\n'}
                {'\n'}
                {'\n'}
                {'\n'}
                {'\n'}
                {'\n'}
                {'\n'}
                Your total <Text style={{ color: 'green' }}>calories</Text> for today are {' '}
                <Text style={{ color: 'orange' }}>2538</Text>
            </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
    },

    txt: {
        fontSize: 20,
        color: '#39A7FF',
        textAlign: 'center', // Center text horizontally
        padding: 50,
    },
});

export default Second;
