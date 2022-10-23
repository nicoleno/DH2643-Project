import React from 'react';
import { Text, StyleSheet, ImageBackground } from 'react-native';
import SearchDrink from "./search.jsx";
import { LinearGradient } from 'expo-linear-gradient';
import { Hamburger } from './components/menuButton';

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

});

export const Cocktails = ({ navigation }) => {

    return (
        <LinearGradient start={{ x: 0.0, y: 0 }} end={{ x: 0.5, y: 1.0 }} colors={['#414141', '#171717']} style={styles.background}>
            <ImageBackground style={styles.image3} source={require('./assets/images/Group16.png')}>
                <Text style={styles.shakeit} >Shakeit</Text><Hamburger navigation={navigation} />
                <Text style={styles.poppins2} >Want some inspiration? Browse cocktails here!</Text>
            </ImageBackground>
            <SearchDrink />
        </LinearGradient>

    )
}
