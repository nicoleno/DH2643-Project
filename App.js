import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, Button, TextInput} from 'react-native';

const data = require("./data.json")
//console.log(data[0].name); 
const results = []

for (let i = 0; i < data.length; i++) {
  results.push(data[i].name)
}

export default function App() {
  const [search, setSearch] = useState("");
  const [matches, setMatches] = useState([]);

  function searchDrink (list, substring) {
    const newMatches = []
    for (let i = 0; i < list.length; i++) {
      list.find(element => {
        if (element.includes(substring) && (newMatches.includes(element)=== false) ){
          newMatches.push(element)}})
        }
        if (newMatches.length == 0){
          newMatches.push("No drinks were found...")
        }
        setMatches(newMatches)
    //TODO: skriv om med concat
    }
  
  return (
    <View style={styles.container}>   
      <TextInput style={styles.searchBar} placeholder="Search drink..." 
        onChangeText = {(search)=> setSearch(search)} editable={true}/>
      <Button title="Search" onPress={() => searchDrink (results, search)}></Button>
      {matches.map((match) => <Text key={match}>{match}</Text>)}
      <Image style={styles.image}source={require('./assets/images/shaker.jpg')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
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
    width:150,
    height: 150,
    margin: 20
  },
});
