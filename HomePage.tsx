import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import DraggableCard from './components/dndCards';
import { StyleSheet, Text, View, Image, TouchableOpacity, FlatList } from 'react-native';
import ShakerModel from './models/shaker';
import ingredients from './ingredients.json';
import SearchDrink from './search';


export const HomePage = ({ navigation }) => {
  const shaker = new ShakerModel;

  // TO DO - Set state för att ändra färgen på knappen beroende på vilken knapp är intryckt. 
  // const shaker = {
  //   height: 0,
  //   width: 0,
  //   posX: 0,
  //   posY: 0,
  // }

  // function getShakerPos(height: number, width: number, x: number, y: number) {
  //   console.log("hej");

  //   shaker.height = height;
  //   console.log(shaker.height);
  //   shaker.width = width;
  //   shaker.posX = x;
  //   shaker.posY = y;
  // }

  const Item = ({ name }) => {
    return (
      <View style={styles.cardContainer}>
        <DraggableCard name={name} />
      </View>
    );
  }
  const renderItem = ({ item }) => (
    <Item name={item.name} />
  );

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <View style={styles.container}>
        <View style={styles.shakerArea}>
          <Image style={styles.image} source={require('./assets/images/shaker.png')} onLayout={(event) => {
            const layout = event.nativeEvent.layout;
            shaker.setHeight(layout.height);
            shaker.setWidth(layout.width);
            shaker.setPosX(layout.x);
            shaker.setPosY(layout.y);
          }}
          />
        </View>
        <View style={styles.bottomBar}>
          <View style={styles.header}>
            <View style={styles.toggle}>
              <TouchableOpacity onPress={() => { navigation.navigate('Browse Cocktails') }}>
                <Image style={styles.image2} source={require('./assets/images/lemon.png')} />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => { navigation.openDrawer() }}>
                <Image style={styles.image2} source={require('./assets/images/bottle.png')} />
              </TouchableOpacity>
            </View>
            <Text>här har vi vår search bar</Text>
          </View>
          <FlatList horizontal data={ingredients} renderItem={renderItem} keyExtractor={item => item.id} />
        </View>
      </View>
    </GestureHandlerRootView >
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    display: 'flex',
  },

  navbuttons: {
    margin: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  searchBar: {
    color: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: 'blue',
    padding: 15,
    borderRadius: 10
  },

  image: {
    width: 150,
    height: 150,
    margin: 20
  },
  shakerArea: {
    flex: 1,
    height: 300,
    marginTop: 100,

  },

  bottomBar: {
    flex: 2,
    alignSelf: 'stretch',
    backgroundColor: 'rgb(182,227,136)',
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
    marginTop: 200,
    justifyContent: 'space-between',
  },
  header: {
    margin: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  cardContainer: {
    backgroundColor: 'rgb(199, 242, 164)',
    flexDirection: 'row',
    height: 200,
  },
  toggle: {
    flexDirection: 'row',

  },
  image2: {
    height: 50,
    width: 50,
    borderRadius: 30,
    margin: 5,
    backgroundColor: 'rgb(199, 242, 164)',
  }
});