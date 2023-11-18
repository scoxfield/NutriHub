import React, {useState, useEffect} from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import {getData} from "./Storage";
import {storeData} from "./Storage";

const Home = () => {
    const [calories, setCalories] = useState(null);
/*    const [proteins, setProteins] = useState(null);*/
    useEffect(() => {
        const fetchCalories = async () => {
            const caloriesData = await getData('Calories');
            setCalories(caloriesData);
        };

        fetchCalories();
    }, []);
    return (
        <View style={styles.container}>
            <Text>Hi User!</Text>
            <Text>Calories : {calories}</Text>
            <Button title={'Reseteaza Caloriile'}
                    onPress={() =>
                    {
                        alert('Merge?');
                        storeData('Calories',JSON.stringify(0,null,2));
                        <Home/>
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
        padding: 20,
    },
});
export default Home;

