// Import necessary React Native components
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

// Define the component
const HiUser = () => {
    return (
        <View style={styles.container}>
            {/* Display the text "Hi!" */}
            <Text style={styles.text}>Hi!</Text>
        </View>
    );
};

// Styles for the component
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        fontSize: 50,
        marginBottom: 10,
    },
});

export default HiUser;
