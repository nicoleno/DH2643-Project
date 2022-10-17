import React from "react";
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity, Image, Touchable } from 'react-native';

export const Hamburger = ({ navigation }) => {
    return (
        <View>
            <TouchableOpacity onPress={() => { navigation.openDrawer() }}>
                <Image style={styles.menu} source={require('../assets/images/menu.png')} />
            </TouchableOpacity>
        </View>
    )
}
const styles = StyleSheet.create({

    menu: {
        height: 25,
        width: 25,
        margin: 5,
        alignSelf: 'flex-end',
        flexDirection: 'row',
        marginLeft: 200,
        marginRight: 50,
        marginTop: 5,
    }
})