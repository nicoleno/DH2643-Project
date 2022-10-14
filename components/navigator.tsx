import React from "react";
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity, Image, Touchable } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { HomePage } from "../HomePage";
import { Cocktails } from "../cocktails";
import { CustomDrawer } from "./CustomDrawer";
import { Details } from "../details"
import DrinkList from "../drinkList";
import { Hamburger } from "./menuButton";

const Drawer = createDrawerNavigator();
// Nästa grej, addera details utan att den syns i listan 

const Sidebar = () => {
    return (
        <NavigationContainer>
            <Drawer.Navigator drawerContent={props => <CustomDrawer {...props} />} screenOptions={{
                headerShown: false,
                drawerActiveTintColor: 'white',
                drawerActiveBackgroundColor: '#aa18ea',
                drawerLabelStyle: { marginLeft: -25, fontSize: 15 }
            }}
                initialRouteName="Home">
                <Drawer.Screen name="Home" component={HomePage} options={{
                    drawerIcon: () => (
                        <Image source={require('../assets/images/home.png')} style={{ height: 15, width: 15, }} />
                    )
                }} />
                <Drawer.Screen name="Browse Cocktails" component={Cocktails} options={{
                    drawerIcon: () => (
                        <Image source={require('../assets/images/cocktail.png')} style={{ height: 15, width: 15, }} />
                    )
                }} />

                <Drawer.Screen name="DrinkList" component={DrinkList} options={{
                    drawerItemStyle: { height: 0 },


                }} />

                <Drawer.Screen name="Details" component={Details} options={{
                    drawerItemStyle: { height: 0 },
                }} />
                <Drawer.Screen name="Hamburger" component={Hamburger} options={{
                    drawerItemStyle: { height: 0 },
                }} />


            </Drawer.Navigator>
        </NavigationContainer>

    )
}
export default Sidebar

const styles = StyleSheet.create(
    {
        menuButton: {
            alignItems: 'flex-end',
            marginRight: 10,

        },
        menu: {
            height: 100,
            width: 100,

        }

    }
)
