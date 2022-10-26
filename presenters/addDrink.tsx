import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ImageBackground, Touchable } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Hamburger } from '../components/menuButton';
import mongoose from 'mongoose';
import Drink from '../db/model';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import DrinkList from './drinkList';



export const AddDrink = ({ navigation, route }) => {

    //TODO se varför tangentbordet stängs efter varje tryck, se hur man kan disablea previous och next baserat på vilken fråga man är på => när man är på första frågan ska previous vara disabled
    // kolla även hur man då kan skicka in drinken senare till mongodb, har skapat en ny collection i den som man kan ladda upp dessa på. 
    // Kanske ha en annan view då där man kan se ens drinkar man gjort?

    const [name, setName] = React.useState("");
    const [instructions, setInstructions] = React.useState("");
    const [alcIng, setalcIng] = React.useState("");
    const [ing, setIng] = React.useState("");
    const [garnish, setGarnish] = React.useState("");
    const [glass, setGlass] = React.useState("");
    const [measurements, setmeasurements] = React.useState("");

    const DrinkSchema = new mongoose.Schema({
        _id: {
            type: String,
        },
        name: {
            type: String,
            required: true,
        },
        instructions: {
            type: String,
        },
        measurements: {
            type: String,
        },
        alcoholIngredients: {
            type: [String],
        },
        nonAlcoholIngredients: {
            type: [String],
        },
        garnish: {
            type: String,
        },
        typeOfGlass: {
            type: String,
        }

    });

    const DrinkModel = mongoose.model("DrinkModel", DrinkSchema);
    const newDrink = new DrinkModel()

    const [question, setQuestion] = React.useState(1);

    const setDrink = (name, alcIng, ing, garnish, glass, measurements, instructions) => {
        newDrink.name = name;
        newDrink.alcoholIngredients = alcIng;
        newDrink.nonAlcoholIngredients = ing;
        newDrink.garnish = garnish;
        newDrink.typeOfGlass = glass;
        newDrink.measurements = measurements;
        newDrink.instructions = instructions;
        console.log(newDrink);
    }
    const InputQuestion = () => {


        if (question === 1) {
            return (
                <View style={styles.inputArea}>
                    <Text style={styles.poppins3}> Write the desired name for your drink</Text>
                    <TextInput style={styles.input} onChangeText={na => setName(na)} ></TextInput>
                </View>)
        }

        else if (question === 2) {
            return (
                <View style={styles.inputArea}>
                    <Text style={styles.poppins3}> Write down the alcoholic ingredients for your drink, please place a comma (,) between each ingredient.</Text>
                    <TextInput multiline={true} style={styles.inputLarge} placeholder={"e.g. Vodka, Cointreau"} onChangeText={alcIng => setalcIng(alcIng)} value={alcIng}></TextInput>
                </View>)
        }

        else if (question === 3) {
            return (
                <View style={styles.inputArea}>
                    <Text style={styles.poppins3}> Write down the non-alcoholic ingredients for your drink, please place a comma (,) between each ingredient.</Text>
                    <TextInput multiline={true} style={styles.inputLarge} placeholder={"e.g. Lemon, Soda Water"} onChangeText={ing => setIng(ing)} value={ing}></TextInput>
                </View>)
        }

        else if (question === 4) {
            return (
                <View style={styles.inputArea}>
                    <Text style={styles.poppins3}> Write down the measurements for the drink. Place a comma (,) after each ingredient</Text>
                    <TextInput multiline={true} style={styles.inputLarge} placeholder={"e.g. 5cl Vodka, 3cl Lime, Soda Water"}
                        onChangeText={measurements => setmeasurements(measurements)} value={measurements}></TextInput>
                </View>)
        }

        else if (question === 5) {
            return (
                <View style={styles.inputArea}>
                    <Text style={styles.poppins3}> Write down the garnish for the drink</Text>
                    <TextInput multiline={true} style={styles.input} onChangeText={garnish => setGarnish(garnish)} value={garnish}></TextInput>
                </View>)
        }
        else if (question === 6) {
            return (
                <View style={styles.inputArea}>
                    <Text style={styles.poppins3}> Write down the type of glass for the drink</Text>
                    <TextInput multiline={true} style={styles.input} onChangeText={glass => setGlass(glass)} value={glass}></TextInput>
                </View>)
        }
        else if (question === 7) {
            return (
                <View style={styles.inputArea}>
                    <Text style={styles.poppins3}> Finally write down the instructions for the drink</Text>
                    <TextInput multiline={true} style={styles.inputLarge} onChangeText={instuctions => setInstructions(instuctions)} value={instructions}></TextInput>
                </View>)
        }

        else if (question === 8) {
            return (
                <View style={{ padding: 100 }}>
                    <TouchableOpacity style={styles.button} onPress={() => setDrink(name, alcIng, ing, garnish, glass, measurements, instructions)}>
                        <Text>Add Drink</Text>
                    </TouchableOpacity>
                </View>)
        }

    }


    return (
        <LinearGradient start={{ x: 0.0, y: 0 }} end={{ x: 0.5, y: 1.0 }} colors={['#414141', '#171717']} style={styles.background}>
            <ImageBackground style={styles.image3} source={require('../assets/images/Group16.png')}>
                <Text style={styles.shakeit} >Shakeit</Text><Hamburger navigation={navigation} />
                <Text style={styles.poppins2} >Want to add your own drinks? Add them here!</Text>
            </ImageBackground>
            <View>
                <View style={styles.buttonHolder}>
                    <TouchableOpacity style={styles.button} onPress={() =>
                        setQuestion(question - 1)}>
                        <Text>Previous</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button} onPress={() => setQuestion(question + 1)}>
                        <Text>Next</Text>
                    </TouchableOpacity>

                </View>
                <View style={styles.inputContainer}>
                    <InputQuestion />


                </View>
            </View>
        </LinearGradient>

    )
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
    },

    topsection: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column'
    },

    topsection2: {
        alignContent: 'flex-end',
    },

    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        display: 'flex',
    },

    searchBar: {
        color: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 2,
        borderColor: 'blue',
        borderRadius: 10
    },

    image3: {
        height: 150,
    },

    shakeit: {
        fontFamily: "Carter",
        textAlign: "center",
        flexDirection: 'row',
        top: 40,
        fontSize: 30,
        color: "rgba(255,255,255,1)",

    },

    poppins2: {
        fontFamily: "Poppins",
        textAlign: "center",
        flexDirection: 'row',
        fontSize: 10,
        color: "rgba(255, 255, 255,1)",

    },

    inputContainer: {
        height: 300,
        alignItems: 'center',
    },

    input: {
        backgroundColor: 'white',
        width: 300,
        borderColor: 'black',
        borderWidth: 1,
        height: 50,
        borderRadius: 30,
        padding: 10,
        textAlignVertical: 'top',


    },
    inputLarge: {
        backgroundColor: 'white',
        width: 300,
        borderColor: 'black',
        borderWidth: 1,
        height: 200,
        borderRadius: 30,
        padding: 10,
        textAlignVertical: 'top',


    },

    button: {
        backgroundColor: 'white',
        height: 50,
        width: 100,
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center'
    },



    buttonHolder: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        padding: 10
    },


    inputArea: {
        height: 100,
        width: 300,
    },

    poppins3: {
        fontFamily: "Poppins",
        textAlign: "center",
        flexDirection: 'row',
        fontSize: 12,
        color: "rgba(255, 255, 255,1)",
        marginBottom: 30,
        height: 60

    },
});