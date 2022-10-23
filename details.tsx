import React from "react";
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity, Image, Touchable, ImageBackground } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Hamburger } from './components/menuButton';

export const Details = ({ route, navigation }) => {
    const chosenDrink = route.params.item.name;
    const allDrinks = route.params.allDrinks;
    console.log(chosenDrink)
    console.log(allDrinks[0])
    return (
        <View style={{ flex: 1 }}>
            <LinearGradient start={{ x: 0.0, y: 0.55 }} end={{ x: 0.5, y: 1.0 }} colors={['#414141', '#171717']} style={styles.background}>
                <ImageBackground style={styles.topimage} source={require('./assets/images/Tommys-margharita.png')}>
                    <Text style={styles.shakeit} >Shakeit</Text><Hamburger navigation={navigation} />
                </ImageBackground>
                <View style={styles.recipeContainer}>
                    <Text style={{ fontSize: 30 }}></Text>
                    <Text>tjo</Text>
                    <Text>tjo</Text>

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
        height: 400,
        backgroundColor: '#fff',
        alignContent: 'center',
        justifyContent: 'space-between',
        padding: 10

    }
})
