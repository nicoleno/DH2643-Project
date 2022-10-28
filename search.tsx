import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, ImageBackground, TextInput, ScrollView } from 'react-native';
import { useFonts } from '@expo-google-fonts/carter-one';
import { TouchableOpacity } from 'react-native-gesture-handler';
import * as SplashScreen from 'expo-splash-screen';

const SearchDrink = ({ drinks, navigation }) => {
    // const [loaded] = useFonts({
    //     Poppins: require('./assets/fonts/Poppins-Regular.ttf')
    // });
    // const data = require("./assets/Drinks.json")
    // const bla = drinks;
    // //console.log("data", data);
    // const results = []

    // for (let i = 0; i < data.length; i++) {
    //   results.push(data[i])
    // }

    const [matches, setMatches] = useState([]);

    const searchfun = (drinkList, searchString) => {
        const newMatches = []
        //console.log(drinkList.length)
        for (let i = 0; i < drinkList.length; i++) {
            drinkList.find(drinkElement => {
                // console.log(drinkElement.name)
                if (drinkElement.name.includes(searchString)) {
                    newMatches.push(drinkElement)

                }
            })
        }
        if (newMatches.length == 0) {
            newMatches.push("No drinks were found...")
        }
        const ids = newMatches.map(o => o._id)
        const unique = newMatches.filter(({ _id }, index) => !ids.includes(_id, index + 1))
        setMatches(unique)
    };

    return (
        <View><TextInput style={styles.searchBar} placeholder="Search drink..."
            onChangeText={(search) => searchfun(drinks, search)} editable={true} />
            <ScrollView>
                <View style={styles.container}>{matches.map((match) =>
                    <TouchableOpacity key={match._id} onPress={() => { navigation.navigate("Details", { item: match, allDrinks: drinks, routeName: "Browse Cocktails" }) }}>
                        <ImageBackground style={styles.image} imageStyle={{ borderRadius: 30 }} source={{ uri: "https://drive.google.com/uc?export=view&id=" + match.imageid }}>
                            <Text style={styles.subcontainer} >{match.name}</Text>
                        </ImageBackground>
                    </TouchableOpacity>
                )}</View>

            </ScrollView></View>
    )
};

export default SearchDrink;


const styles = StyleSheet.create({

    container: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        flexWrap: 'wrap',
        paddingLeft: 10,
        paddingRight: 10
    },

    subcontainer: {
        height: 30,
        marginTop: 20,
        fontFamily: 'Poppins',
        justifyContent: 'center',
        textAlign: 'center',
        color: '#fff'
    },

    image: {
        marginTop: 10,
        height: 180,
        width: 120,
        borderRadius: 30
    },

    searchBar: {
        marginTop: 10,
        marginLeft: 30,
        width: 350,
        height: 40,
        backgroundColor: 'white',
        opacity: 0.95,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 15,
        borderRadius: 30,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2, },
        shadowOpacity: 0.3,

    },
});