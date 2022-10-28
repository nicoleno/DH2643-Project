import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ImageBackground, Touchable } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Hamburger } from '../components/menuButton';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import { newDrink } from '../db/model';



export const AddDrink = ({ navigation }) => {


    const [name, setName] = React.useState("");
    const [instructions, setInstructions] = React.useState("");
    const [alcIng, setalcIng] = React.useState("");
    const [ing, setIng] = React.useState("");
    const [garnish, setGarnish] = React.useState("");
    const [glass, setGlass] = React.useState("");
    const [measurements, setmeasurements] = React.useState("");

    const [question, setQuestion] = React.useState(1);

    const setDrink = (name, alcIng, ing, garnish, glass, measurements, instructions) => {

        const alcList = alcIng.split(", ")
        const ingList = ing.split(", ")

        newDrink.name = name;
        newDrink.instructions = instructions;
        newDrink.alcoholIngredients = alcList;
        newDrink.nonAlcoholIngredients = ingList;
        newDrink.measurements = measurements;
        newDrink.garnish = garnish;
        newDrink.typeOfGlass = glass;
        newDrink.imageid = "1Q8kBp_SsX7Z98ZtoKdkSv7fh23eSShdg"

        //console.log(newDrink);
        postDrink(newDrink);
    }

    const postDrink = async (drink) => {
        await fetch("https://drinks-db-server.herokuapp.com/add_drink", {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(drink)
        }).then(res => res.json()).catch(e => console.log(e));
    }



    const InputQuestion = () => {


        if (question === 1) {
            return (
                <View style={styles.inputArea}>
                    <Text style={styles.poppins3}> Write the desired name for your drink</Text>
                    <TextInput style={styles.input} onEndEditing={e => { setName(e.nativeEvent.text); setQuestion(question + 1) }}>{name}</TextInput>
                </View>)
        }

        else if (question === 2) {
            return (
                <View style={styles.inputArea}>
                    <Text style={styles.poppins3}> Write down the alcoholic ingredients for your drink, please place a comma (,) between each ingredient.</Text>
                    <TextInput style={styles.input} placeholder={"e.g. Vodka, Cointreau"} onEndEditing={e => { setalcIng(e.nativeEvent.text); setQuestion(question + 1) }}>{alcIng}</TextInput>
                </View>)
        }

        else if (question === 3) {
            return (
                <View style={styles.inputArea}>
                    <Text style={styles.poppins3}> Write down the non-alcoholic ingredients for your drink, please place a comma (,) between each ingredient.</Text>
                    <TextInput style={styles.input} placeholder={"e.g. Lemon, Soda Water"} onEndEditing={e => { setIng(e.nativeEvent.text); setQuestion(question + 1) }}>{ing}</TextInput>
                </View>)
        }

        else if (question === 4) {
            return (
                <View style={styles.inputArea}>
                    <Text style={styles.poppins3}> Write down the measurements for the drink. Place a comma (,) after each ingredient</Text>
                    <TextInput style={styles.input} placeholder={"e.g. 5cl Vodka, 3cl Lime, Soda Water"}
                        onEndEditing={e => { setmeasurements(e.nativeEvent.text); setQuestion(question + 1) }}>{measurements}</TextInput>
                </View>)
        }

        else if (question === 5) {
            return (
                <View style={styles.inputArea}>
                    <Text style={styles.poppins3}> Write down the garnish for the drink</Text>
                    <TextInput style={styles.input} onEndEditing={e => { setGarnish(e.nativeEvent.text); setQuestion(question + 1) }}>{garnish}</TextInput>
                </View>)
        }
        else if (question === 6) {
            return (
                <View style={styles.inputArea}>
                    <Text style={styles.poppins3}> Write down the type of glass for the drink</Text>
                    <TextInput style={styles.input} onEndEditing={e => { setGlass(e.nativeEvent.text); setQuestion(question + 1) }}>{glass}</TextInput>
                </View>)
        }
        else if (question === 7) {
            return (
                <View style={styles.inputArea}>
                    <Text style={styles.poppins3}> Finally write down the instructions for the drink</Text>
                    <TextInput style={styles.input} onEndEditing={e => { setInstructions(e.nativeEvent.text); setQuestion(question + 1) }}>{instructions}</TextInput>
                </View>)
        }

        else if (question === 8) {
            return (
                <View style={styles.inputArea} >
                    <Text style={styles.poppins3}>Now you have everything needed! Go ahead and add the drink!</Text>
                    <TouchableOpacity style={styles.button} onPress={() => setDrink(name, alcIng, ing, garnish, glass, measurements, instructions)}>
                        <Text style={styles.poppins2}>Add Drink</Text>
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

                <View style={styles.inputContainer}>
                    <InputQuestion />



                </View>
                <View style={styles.buttonHolder}>
                    <TouchableOpacity style={styles.backbutton} disabled={question === 1 ? true : false} onPress={() => setQuestion(question - 1)}>
                        <ImageBackground style={{ height: 25, width: 25 }} source={require('../assets/images/back.png')}>
                        </ImageBackground>
                        <Text style={{ color: "rgba(255,255,255,1)", marginTop: 5, fontFamily: 'Poppins', fontSize: 10 }}>Previous Question</Text>
                    </TouchableOpacity>

                </View>
            </View>
        </LinearGradient >

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
        height: 200,
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

    button: {
        backgroundColor: '#798777',
        height: 50,
        width: 100,
        justifyContent: 'center',
        borderRadius: 30,
        alignItems: 'center',
        marginBottom: 10,
        borderWidth: 1,
        borderColor: '#fff'

    },

    buttonHolder: {
        justifyContent: 'flex-start',
        alignItems: 'center'
    },


    inputArea: {
        height: 100,
        width: 300,
        alignItems: 'center',

    },

    poppins3: {
        fontFamily: "Poppins",
        textAlign: "center",
        flexDirection: 'row',
        fontSize: 12,
        color: "rgba(255, 255, 255,1)",
        marginBottom: 30,
        marginTop: 30,
        height: 60

    },
    backbutton: {
        height: 50,
        width: 200,
        borderRadius: 30,
        justifyContent: 'center',
        marginBottom: 50,
        alignItems: 'center',
    },
});