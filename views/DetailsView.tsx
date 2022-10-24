import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, ImageBackground } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Hamburger } from '../components/menuButton';
import { ScrollView } from "react-native-gesture-handler";

export const DetailsView = ({ navigation, chosenDrink }) => {

    const measurements = chosenDrink.measurements.split(", ");

    return (
        <View style={{ flex: 1 }}>
            <LinearGradient start={{ x: 0.0, y: 0.55 }} end={{ x: 0.5, y: 1.0 }} colors={['#414141', '#171717']} style={styles.background}>
                <ImageBackground style={styles.topimage} source={{ uri: "https://drive.google.com/uc?export=view&id=" + chosenDrink.imageid }}>
                    <Text style={styles.shakeit} >Shakeit</Text><Hamburger navigation={navigation} />
                </ImageBackground>
                <View style={styles.recipeContainer}>

                    <Text style={styles.name}>{chosenDrink.name}</Text>
                    <ScrollView style={styles.textContainer}>
                        <Text style={styles.bold}>Ingredients </Text>
                        {measurements.map((ing: String) => {
                            return (
                                <Text key={ing[0]} style={{ fontSize: 12 }}>{ing}</Text>
                            )
                        })}
                        <Text style={styles.bold}>Type of Glass</Text>
                        <Text style={styles.textList}>{chosenDrink.typeOfGlass}</Text>
                        <Text style={styles.bold}>Garnish</Text>
                        <Text style={styles.textList}>{chosenDrink.garnish}</Text>
                        <Text style={styles.bold}>Instructions</Text>
                        <Text style={styles.textList}>{chosenDrink.instructions}</Text>
                    </ScrollView>
                    <View style={{ alignItems: 'center', }}>
                        <TouchableOpacity style={styles.backbutton}
                            onPress={() => navigation.navigate('DrinkList')}>
                            <Text style={{ color: '#fff', fontSize: 12, fontFamily: 'Poppins' }}>Back to Drinks</Text>
                        </TouchableOpacity></View>
                </View>
            </LinearGradient>
        </View>
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
