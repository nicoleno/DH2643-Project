import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, Button, TextInput} from 'react-native';

export default function App() {
    const [drinks, setDrinks] = React.useState([]);

    const fetchDrinks = () => {
    fetch("http://192.168.1.69:3000/drinks", {
        method: "get",
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
          },
    }).then((res) => res.json()).then((data) => setDrinks(data.drinks)).catch((err) => err);
    }

    return (
      <View style={styles.container}>
        <Text>DrinkZ</Text>
        <StatusBar style="auto" />
        <Image style={styles.image}source={require('./assets/images/shaker.jpg')} />
        <Button title="Shake me" onPress={fetchDrinks}/>
        <TextInput style= {styles.searchBar} placeholder="Search for ingredients..." />
        {drinks.map((drink) => <Text key={drink?.Name}>{drink?.Name}</Text>)}
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
    color: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth : 2,
    borderColor: 'blue',
    padding: 15,
    borderRadius: 10
  },

  image: {
    width:150,
    height: 150,
    margin: 20
  },
});
