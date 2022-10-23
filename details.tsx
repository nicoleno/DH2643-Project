import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, ImageBackground } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Hamburger } from './components/menuButton';
import { ScrollView } from "react-native-gesture-handler";

export const Details = ({ route, navigation }) => {
    const name = route.params.name;
    console.log(name);
    return (
        <View style={{ flex: 1 }}>
            <LinearGradient start={{ x: 0.0, y: 0.55 }} end={{ x: 0.5, y: 1.0 }} colors={['#414141', '#171717']} style={styles.background}>
                <ImageBackground style={styles.topimage} source={require('./assets/images/Tommys-margharita.png')}>
                    <Text style={styles.shakeit} >Shakeit</Text><Hamburger navigation={navigation} />
                </ImageBackground>
                <View style={styles.recipeContainer}>

                    <Text style={styles.name}>{name}</Text>
                    <ScrollView style={styles.textContainer}>
                        <Text style={styles.bold}>Ingredients </Text>
                        <Text style={styles.textList}>5cl Tequila {"\n"}{"\n"}{"\n"}</Text>

                        <Text style={styles.bold}>Type of Glass</Text>
                        <Text style={styles.textList}>Whiskey Glass </Text>
                        <Text style={styles.bold}>Garnish</Text>
                        <Text style={styles.textList}>Lime Wheel </Text>
                        <Text style={styles.bold}>Instructions</Text>
                        <Text style={styles.textList}>Add all ingredients in the shaker, shake it with ice and strain into desired glass.
                            Fill the glass with a big icecube if possible, otherwise regular icecubes </Text>
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
        height: 250,
    },
    recipeContainer: {
        height: 500,
        backgroundColor: '#fff',
        alignContent: 'center',
        justifyContent: 'flex-start',
    },

    textContainer: {
        padding: 20,
        height: 400,
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
