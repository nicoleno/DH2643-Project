import React from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import DraggableCard from './components/dndCards';
import { StyleSheet, Text, View, Image, TouchableOpacity, Button, Dimensions } from 'react-native';
import ShakerModel from './models/shaker';
import SearchDrink from './search';
import { useFonts } from '@expo-google-fonts/carter-one';


export const HomePage = () => {
    const shaker = new ShakerModel;
    const [loaded] = useFonts({
      //Poppins: require('./assets/fonts/Poppins-Black.ttf'),
      Carter: require('./assets/fonts/CarterOne-Regular.ttf')
    });
    
    return (
      
    <View style= {styles.HomePage}>
      <Image style={styles.background} source={require('./assets/images/background.png')} />
      <Image style={styles.shaker} source={require('./assets/images/shaker.png')} />
      <View style={styles.Rectangle_36}></View>
      <View style={styles.logo}></View>
      <View style={styles.ellipse}></View>
      <View><Text style={styles.shakeit} >ShakeIt</Text></View>
    </View>
    
)
}

const styles = StyleSheet.create({

    HomePage:{
      position: "relative",
      width: Dimensions.get("window").width,
      height: 847,
      overflow: "hidden",
      backgroundColor: "rgba(255, 255, 255, 1)",
      left: 0,
      top: 0,
    },

    background:{
      position: "absolute",
      width: 675,
      height: 539,
      opacity: 1,
      left: -131,
      right: "auto",
      top: -9,
      botton: "auto",
      backgroundColor: "rgba(0, 0, 0, 0)"
    },
    
    shaker:{
      position: "absolute",
 
      opacity: 1,
      left: 21,
      right: "auto",
      top: 127,
      bottom: "auto",
      shadowColor: "rgb(0,0,0)",
      textShadowOffset: {
        width: 0,
        height: 4
      },
      shadowOpacity: 0.25,
      shadowRadius:4,
      backgroundColor: "rgba(0,0,0,0)"

    },

    Rectangle_36: {
      position: "absolute",
      width: 392,
      heigh: 326,
      borderRadius: 0,
      opacity: 1,
      backgroundColor: "black"
    },

    logo:{
      position: "absolute",
      width: 136,
      height: 49,
      opacity: 1,
      left: 127,
      right: "auto",
      top: 77,
      bottom: "auto",
      backgroundColor: "rgba(0,0,0,0)"
    },

    ellipse:{
      position: "absolute",
      width: 58,
      heigh: 58,
      backgroundColor: "rgba(255, 255, 255, 0.9200000166893005",
      borderwidth: 1,
      borderstyle: "solid",
      left: 169,
      right: "auto",
      top: 293,
      bottom: "auto"
    },

    hamburger:{
      position: "absolute",
      width: 21,
      height: 21,
      left: 326,
      right: "auto",
      top: 81,
      bottom: "auto",
      backgroundColor: "rgba(0,0,0,0)"
    },

    shakeit : {
      fontFamily: "Carter",
      textAlign: "center",
      top: 40,
      fontSize: 30,
      color: "rgba(255,255,255,1)",
    
    },
  });

  