import React from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import DraggableCard from './components/dndCards';
import { StyleSheet, Text, View, Image, TouchableOpacity, Button } from 'react-native';
import ShakerModel from './models/shaker';
import SearchDrink from './search';
import { useNavigate } from "react-router-dom";
// let navigate = useNavigate(); 
// const routeChange = () =>{ 
//   let path = `newPath`; 
//   navigate(path);
// }

export const HomePage = () => {
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
    
    return (
        <GestureHandlerRootView style={{ flex: 1 }}>
            <View style={styles.container}>
                <View style={styles.navbuttons}>
                <TouchableOpacity onPress={() => { alert("you clicked me") }}>
                    <Image style={styles.image2} source={require('./assets/images/menu.png')} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => { alert("you clicked me") }}>
                    <Image style={styles.image2} source={require('./assets/images/settings.png')} />
                </TouchableOpacity>
                </View>
                <SearchDrink/>
                {/* <button onClick={routeChange}>
              Login
            </button> */}
                <View style={styles.shakerArea}>
                <StatusBar style="auto" />

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
                    <TouchableOpacity onPress={() => { alert("you clicked me") }}>
                        <Image style={styles.image2} source={require('./assets/images/lemon.png')} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => { alert("you clicked me") }}>
                        <Image style={styles.image2} source={require('./assets/images/bottle.png')} />
                    </TouchableOpacity>
                    </View>
                    <Text>här har vi vår search bar</Text>
                </View>
                <View style={styles.cardContainer}>
                    <DraggableCard />
                    <DraggableCard />
                </View>
                </View>
            </View>
        </GestureHandlerRootView >
)};

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