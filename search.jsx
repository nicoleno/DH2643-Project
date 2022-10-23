import React, { useState } from 'react';
import { StyleSheet, Text, View, ImageBackground, TextInput} from 'react-native';
import { useFonts } from '@expo-google-fonts/carter-one';
const styles = StyleSheet.create({

  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    flexWrap: 'wrap',
    paddingLeft: 10,
    paddingRight: 10
  },

  subcontainer:{
    height: 30,
    marginTop: 20,
    backgroundColor: 'white',
    fontFamily: 'Poppins',
    justifyContent: 'center',
  },

  image: {
    marginTop:20,
    height: 150,
    width: 120,
    borderRadius: 40,
  },

  searchBar: {
    marginTop: 10,
    marginLeft: 15,
    width: 250,
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

const SearchDrink = () => {{
  const [loaded] = useFonts({
    Poppins: require('./assets/fonts/Poppins-Regular.ttf')
  });
  const data = require("./assets/Drinks.json")
  const results = []
  
  for (let i = 0; i < data.length; i++) {
  results.push(data[i])}
  const [matches, setMatches] = useState([]);

  const searchfun = (list, substring) => {
    const newMatches = []
    for (let i = 0; i < list.length; i++) {
      list.find(element => {
        if (element.name.includes(substring) && (newMatches.includes(element.name)=== false) ){
          newMatches.push(element)}})
        }
        if (newMatches.length == 0){
          newMatches.push("No drinks were found...")
        }
        setMatches(newMatches)};
    
    return (<View><TextInput style={styles.searchBar} placeholder="Search drink..." 
    onChangeText = {(search)=> searchfun (results, search)} editable={true}/>
    
    <View style={styles.container}>{matches.map((match) => <ImageBackground style={styles.image} source={{ uri: "https://drive.google.com/file/d/" + match.imageid + "/view" }}>
      <Text style={styles.subcontainer} key={match.name}>{match.name}</Text></ImageBackground>)}</View>

    </View>)
    }};
  
  export default SearchDrink;