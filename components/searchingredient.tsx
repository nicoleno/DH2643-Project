import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';
import { useDispatch } from 'react-redux';
import { matchedItems } from '../store/actions';
const styles = StyleSheet.create({
    container: {
        flex: 0.8,
        backgrondColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },

    searchBar: {
        color: '#666',
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 2,
        borderColor: 'black',
        padding: 15,
        height: 20,
        borderRadius: 10,
        marginTop: 30,
        marginRight: 10

    },

    image: {
        width: 120,
        height: 100,
        margin: 20
    },
});

const SearchIngredient = () => {
    const data = require("./assets/ingredients.json")
    const [matches, setMatches] = useState([]);

    const [search, setSearch] = useState("");
    // const [matches, setMatches] = useState([]);

    const searchIngr = (list, substring) => {
        const newMatches = []
        for (let i = 0; i < list.length; i++) {
            list.find(element => {
                if (element.name.includes(substring) && (newMatches.includes(element) === false)) {
                    newMatches.push(element)
                }
            })
        }
        if (newMatches.length == 0) {
            newMatches.push("No ingredients were found...")
        };
    }
    return (<View><TextInput style={styles.searchBar} placeholder="Search drink..."
        onChangeText={((search) => setSearch(search))} editable={true} />
        <Button title="Search" onPress={() => searchIngr(data, search)}></Button>
    </View>)
}

export default SearchIngredient;
