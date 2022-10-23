import React from "react";
import { View, Text, StyleSheet, ImageBackground } from 'react-native';
import { DrawerContentScrollView, DrawerItemList } from "@react-navigation/drawer";
import { useFonts } from '@expo-google-fonts/carter-one';

export const CustomDrawer = (props) => {
    const [loaded] = useFonts({
        Poppins: require('../assets/fonts/Poppins-Regular.ttf'),
        Carter: require('../assets/fonts/CarterOne-Regular.ttf')
    });
    return (
        <View style={{ flex: 1 }}>
            <DrawerContentScrollView {...props} contentContainerStyle={{ backgroundColor: '#262626' }}>
                <ImageBackground source={require('../assets/images/Group15.png')} style={{ height: 200 }}>
                    <View style={styles.container}><Text style={styles.shakeit} >Shakeit</Text>
                    <Text style={styles.poppins}>Be your own Bartender</Text></View>
                </ImageBackground>
                <View style={{ backgroundColor: 'white' }}>
                    <DrawerItemList {...props} />
                </View>
            </DrawerContentScrollView>
        </View >
    )
}
const styles = StyleSheet.create({

    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        display: 'flex',

    },

    shakeit : {
        fontFamily: "Carter",
        textAlign: "center",
        fontSize: 30,
        color: "rgba(255,255,255,1)",
      },

      poppins : {
        fontFamily: "Poppins",
        weight: "Light",
        textAlign: "center",
        fontSize: 15,
        color: "rgba(255, 255, 255,1)",
      },
});