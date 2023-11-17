

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

function ThirdScreen() {
    return (
        <View style={styles.container}>
            <Text>This is the Third Screen</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default ThirdScreen;
