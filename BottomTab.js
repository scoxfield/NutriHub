import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
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
            <TouchableOpacity style={styles.tabButton} onPress={() => navigateToScreen('BarcodeScanStack')}>
                <Text style={styles.tabText}>Scan</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.tabButton} onPress={() => navigateToScreen('Second')}>
                <Text style={styles.tabText}>Account</Text>
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
        backgroundColor: '#FF8A00',
        height: 60,
        borderRadius:5,
    },
    tabButton: {

        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    tabText: {
        fontSize: 16,
        color: 'black',
        /*fontFamily:'Montserrat-Bold'*/
    },
    Elipse: {
        width: 500,
        height: 500,
        alignItems:'center',
        justifyContent:'center'

    },
});
