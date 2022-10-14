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
        height: 50,
        width: 50,
        borderRadius: 30,
        margin: 5,
        backgroundColor: 'rgb(199, 242, 164)',
        alignSelf: 'flex-end',
        flexDirection: 'row',
        marginLeft: 300,
        marginTop: 30,
    }
})