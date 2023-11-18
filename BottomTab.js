import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const BottomTab = () => {
    const navigation = useNavigation();

    const navigateToScreen = (screenName) => {
        navigation.navigate(screenName);
    };

    return (
        <View style={styles.tabContainer}>
            <TouchableOpacity style={styles.tabButton} onPress={() => navigateToScreen('Home')}>
                <Text style={styles.tabText}>Home</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.tabButton} onPress={() => navigateToScreen('Second')}>
                <Text style={styles.tabText}>Proteins</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.tabButton} onPress={() => navigateToScreen('BarcodeScanPage')}>
                <Text style={styles.tabText}>Scan</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.tabButton} onPress={() => navigateToScreen('Third')}>
                <Text style={styles.tabText}>Third</Text>
            </TouchableOpacity>
        </View>
    );
};

export default BottomTab;

const styles = StyleSheet.create({
    tabContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: 'lightgray',
        height: 60,
    },
    tabButton: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    tabText: {
        fontSize: 16,
        color: 'black',
    },
});
