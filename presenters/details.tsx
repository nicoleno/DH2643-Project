import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, ImageBackground } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Hamburger } from '../components/menuButton';
import { ScrollView } from "react-native-gesture-handler";
import { DrinkListItem } from "../models/model";
import { measure } from "react-native-reanimated";
import { DetailsView } from '../views/DetailsView';

export const Details = ({ route, navigation }) => {
    const drinkName = route.params.item.name;
    const allDrinks = route.params.allDrinks;

    const findDrink = (all, chosen) => {
        return all.filter(name => name.name === chosen)[0]
    }

    const chosenDrink = findDrink(allDrinks, drinkName);


    return (
        <DetailsView navigation={navigation} chosenDrink={chosenDrink} />
    )
}

const styles = StyleSheet.create({
    shakeit: {
        fontFamily: "Carter",
        textAlign: "center",
        flexDirection: 'row',
        top: 40,
        fontSize: 30,
        color: "rgba(255,255,255,1)",
    },
    background: {
        flex: 1,
        color: "rgba(255,255,1,1)"
    },
    topimage: {
        height: 300,
    },
    recipeContainer: {
        height: 450,
        backgroundColor: '#fff',
        alignContent: 'center',
        justifyContent: 'flex-start',
    },

    textContainer: {
        padding: 20,
        height: 350,
    },

    bold: {
        fontSize: 15,
        fontWeight: 'bold',
        fontFamily: 'Poppins'

    },

    textList: {
        fontSize: 12,
        marginBottom: 10
    },

    name: {
        fontSize: 25,
        marginTop: 10,
        padding: 10,
        fontFamily: 'Poppins'
    },

    backbutton: {
        backgroundColor: 'black',
        height: 40,
        width: 200,
        borderRadius: 30,
        justifyContent: 'center',
        margin: 20,
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#fff'
    },
})
