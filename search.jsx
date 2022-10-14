import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput} from 'react-native';
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
    borderWidth : 2,
    borderColor: 'black',
    padding: 15,
    borderRadius: 10
  },

  image: {
    width:120,
    height: 100,
    margin: 20
  },
});

const SearchDrink = () => {{
  const data = require("./data.json")
  const results = []
  
  for (let i = 0; i < data.length; i++) {
  results.push(data[i].name)}

  const [search, setSearch] = useState("");
  const [matches, setMatches] = useState([]);

  const searchfun = (list, substring) => {
    const newMatches = []
    for (let i = 0; i < list.length; i++) {
      list.find(element => {
        if (element.includes(substring) && (newMatches.includes(element)=== false) ){
          newMatches.push(element)}})
        }
        if (newMatches.length == 0){
          newMatches.push("No drinks were found...")
        }
        setMatches(newMatches)};

    return (<View><TextInput style={styles.searchBar} placeholder="Search drink..." 
    onChangeText = {(search)=> setSearch(search)} editable={true}/>
    <Button title="Search" onPress={() => searchfun (results, search)}></Button>
    {matches.map((match) => <Text key={match}>{match}</Text>)}</View>)
    }};
  
  export default SearchDrink;