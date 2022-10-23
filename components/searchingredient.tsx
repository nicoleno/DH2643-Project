import React, { useState } from 'react';
<<<<<<< HEAD:components/searchingredient.tsx
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';
import { useDispatch } from 'react-redux';
import { matchedItems } from '../store/actions';
=======
import { StyleSheet, View, Button, TextInput } from 'react-native';

>>>>>>> 395ec87f52c56fa2c9d4eb89bb181dd22b1621c7:searchingredient.tsx
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
<<<<<<< HEAD:components/searchingredient.tsx
    const data = require("./assets/ingredients.json")
    const [matches, setMatches] = useState([]);

    const [search, setSearch] = useState("");
    // const [matches, setMatches] = useState([]);

    const searchIngr = (list, substring) => {
=======
  const data = require("./assets/ingredients.json")
  const [search, setSearch] = useState("");
    
  const searchIngr = (list, substring) => {
>>>>>>> 395ec87f52c56fa2c9d4eb89bb181dd22b1621c7:searchingredient.tsx
        const newMatches = []
        for (let i = 0; i < list.length; i++) {
            list.find(element => {
                if (element.name.includes(substring) && (newMatches.includes(element) === false)) {
                    newMatches.push(element)}})
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
