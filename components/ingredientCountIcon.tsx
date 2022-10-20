import React from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity, FlatList, Alert } from 'react-native';
import { useSelector } from "react-redux";
import { RootState } from "../store/reducers";


const IngredientCountIcon = () => {
    const ingredients = useSelector((state: RootState) => state.ingredients);

    return (
        <TouchableOpacity
            onPress={() => alert("you clicked me")}>
            <View style={styles.itemCountContainer}>
                <Text style={styles.itemCountText}>{ingredients.length}</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    itemCountContainer: {
        alignContent: 'flex-start',
        height: 30,
        width: 30,
        borderRadius: 15,
        backgroundColor: '#FF7D7D',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 2000,
    
    },
    itemCountText: {
        color: 'white',
        fontWeight: 'bold'
    }
})

export default IngredientCountIcon;