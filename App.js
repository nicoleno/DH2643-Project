import React, { useState, useEffect, useRef } from 'react';
import { StyleSheet, Text, View, Image, Button, TextInput, Animated} from 'react-native';

const data = require("./data.json")
//console.log(data[0].name); 
const results = []

for (let i = 0; i < data.length; i++) {
  results.push(data[i].name)
}

export default function App() {
  const [search, setSearch] = useState("");
  const [matches, setMatches] = useState([]);
  const translation = useRef(new Animated.Value(0)).current; //useRef calls only get created once, 
  //when the component renders for the first time
  useEffect(() => {
    Animated.sequence([
      Animated.timing(translation, { toValue: 25, duration: 100, useNativeDriver: true }),
      Animated.timing(translation, { toValue: -25, duration: 100, useNativeDriver: true }),
      Animated.timing(translation, { toValue: 25, duration: 100, useNativeDriver: true }),
      Animated.timing(translation, { toValue: -25, duration: 100, useNativeDriver: true }),
      Animated.timing(translation, { toValue: 25, duration: 100, useNativeDriver: true }),
      Animated.timing(translation, { toValue: -25, duration: 100, useNativeDriver: true }),
      Animated.timing(translation, { toValue: 0, duration: 100, useNativeDriver: true })
    ]).start();
  }, []);

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
      <Animated.Image style={{width: 100, height: 100, backgroundColor: 'pink',
        transform: [{ translateX: translation }],}} source={require('./assets/images/shaker.jpg')} ></Animated.Image>
      <TextInput style={styles.searchBar} placeholder="Search drink..." 
        onChangeText = {(search)=> setSearch(search)} editable={true}/>
      <Button title="Search" onPress={() => searchDrink (results, search)}></Button>
      {matches.map((match) => <Text key={match}>{match}</Text>)}
    </View>
  );
}

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
