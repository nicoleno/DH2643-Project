import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Button, TextInput} from 'react-native';

//för att köra: npm start

export default function App() {
  return (
      <View style={styles.container}>
        <Text>DrinkZ</Text>
        <StatusBar style="auto" />
        <Image style={styles.image}source={require('./assets/images/shaker.jpg')} />
        <Button title="Shake me" />
        <TextInput style= {styles.searchBar} placeholder="Search for ingredients..." />
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
