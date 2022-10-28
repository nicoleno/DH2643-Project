import React from 'react';
import { View, Text, StyleSheet, ImageBackground, TouchableOpacity, ScrollView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Hamburger } from '../components/menuButton';

export const MyDrinksView = ({ navigation, data }) => {

    return (
        <LinearGradient start={{ x: 0.0, y: 0 }} end={{ x: 0.5, y: 1.0 }} colors={['#414141', '#171717']} style={styles.background}>
            <ImageBackground style={styles.image3} source={require('../assets/images/Group16.png')}>
                <Text style={styles.shakeit} >Shakeit</Text><Hamburger navigation={navigation} />
                <Text style={styles.poppins2} >Here are your own created drinks!</Text>
            </ImageBackground>
            <ScrollView>
                <View style={styles.container}>{data.map((match) =>
                    <TouchableOpacity key={match.name} onPress={() => { navigation.navigate("Details", { item: match, allDrinks: data, routeName: "My Drinks" }) }}>
                        <ImageBackground style={styles.image} imageStyle={{ borderRadius: 30 }} source={{ uri: "https://drive.google.com/uc?export=view&id=" + match.imageid }}>
                            <Text style={styles.subcontainer} >{match.name}</Text>
                        </ImageBackground>
                    </TouchableOpacity>
                )}</View>

            </ScrollView>
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
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        flexWrap: 'wrap',
        paddingLeft: 10,
        paddingRight: 10
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
    image: {
        marginTop: 10,
        height: 180,
        width: 120,
        borderRadius: 30
    },
    subcontainer: {
        height: 30,
        marginTop: 20,
        fontFamily: 'Poppins',
        justifyContent: 'center',
        textAlign: 'center',
        color: '#fff'
    },

});