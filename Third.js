import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import {all} from "axios";

const Third = () => {
    return (
        <View style={styles.container}>

            <Text>This is the Third Screen</Text>
            <Button title={'ADD'}
                    onPress={() =>
                    {
                        alert('Merge?');
                    }
            }/>
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

export default Third;
