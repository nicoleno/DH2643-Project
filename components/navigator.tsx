import React from "react";
import { StyleSheet, Image } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { HomePage } from "../presenters/HomePage";
import { BrowseCocktails } from "../presenters/BrowseCocktails";
import { CustomDrawer } from "./CustomDrawer";
import { Details } from "../presenters/details"
import DrinkList from "../presenters/drinkList"
import { AddDrink } from "../presenters/addDrink";
import { Hamburger } from "./menuButton";
import { MyDrinks } from "../presenters/MyDrinks";

const Drawer = createDrawerNavigator();


const Sidebar = (props) => {
    //console.log('sidebar', props.drinks[0]);

    return (
        <NavigationContainer>
            <Drawer.Navigator drawerContent={props => <CustomDrawer {...props} />} screenOptions={{
                headerShown: false,
                drawerActiveTintColor: 'white',
                drawerActiveBackgroundColor: '#798777',
                drawerLabelStyle: { marginLeft: -15, fontSize: 15 },
            }}
                initialRouteName="Home">
                <Drawer.Screen name="Home" component={HomePage} options={{
                    drawerIcon: () => (
                        <Image source={require('../assets/images/home.png')} style={{ height: 15, width: 15, }} />
                    )
                }} />
                <Drawer.Screen name="Browse Cocktails" component={BrowseCocktails} initialParams={{ drinks: props.drinks }} options={{
                    drawerIcon: () => (
                        <Image source={require('../assets/images/cocktail.png')} style={{ height: 15, width: 15, }} />
                    )
                }} />

                <Drawer.Screen name="Add Drink" component={AddDrink} options={{
                    drawerIcon: () => (
                        <Image source={require('../assets/images/cocktail.png')} style={{ height: 15, width: 15, }} />
                    )
                }} />

                <Drawer.Screen name="My Drinks" component={MyDrinks} options={{
                    drawerIcon: () => (
                        <Image source={require('../assets/images/mydrinks.png')} style={{ height: 20, width: 20, }} />
                    )
                }} />

                <Drawer.Screen name="DrinkList" component={DrinkList} initialParams={{ props }} options={{
                    drawerItemStyle: { height: 0 },
                }} />

                <Drawer.Screen name="Details" component={Details} initialParams={{ props }} options={{
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