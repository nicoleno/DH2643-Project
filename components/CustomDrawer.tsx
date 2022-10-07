import React from "react";
import { View, Text, StyleSheet, Image, ImageBackground } from 'react-native';
import { DrawerContentScrollView, DrawerItem, DrawerItemList } from "@react-navigation/drawer";

export const CustomDrawer = (props) => {
    return (
        <View style={{ flex: 1 }}>
            <DrawerContentScrollView {...props} contentContainerStyle={{ backgroundColor: '#aa18ea' }}>
                <ImageBackground source={require('../assets/images/alcoholic-drink.png')} style={{ padding: 20 }}>
                    <Image source={require('../assets/images/shaker.png')} style={{ height: 100, width: 100, borderRadius: 40, marginBottom: 10 }} />
                </ImageBackground>
                <Text style={{ color: 'white', fontSize: 18, marginLeft: 10 }}>Thirsty</Text>
                <Text style={{ color: 'white', marginLeft: 10 }}>Be Your own Bartender</Text>
                <View style={{ backgroundColor: 'white' }}>
                    <DrawerItemList {...props} />
                </View>

            </DrawerContentScrollView>
        </View >
    )
}
