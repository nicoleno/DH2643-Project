import React, { useState } from 'react'
import { StyleSheet, Text, View, Image, Button, TouchableOpacity, FlatList, Modal, Pressable } from 'react-native';
import { useDispatch } from 'react-redux';
import { useSelector } from "react-redux";
import { removeIngredient } from '../store/actions';
import { RootState } from "../store/reducers";
import { useFonts } from '@expo-google-fonts/carter-one';

const IngredientCountIcon = () => {
    const [loaded] = useFonts({
        Poppins: require('../assets/fonts/Poppins-Regular.ttf'),
        Carter: require('../assets/fonts/CarterOne-Regular.ttf')
    });
    const ingredients = useSelector((state: RootState) => state.ingredients);
    const [modalVisible, setModalVisible] = useState(false);

    const dispatch = useDispatch();
    const deleteIngredient = (index: string) => {
        console.log("ingredient removed: ", index);
        dispatch(removeIngredient(index));
    }
    const deleteIcon = require('../assets/x-mark.png')
    const Item = ({ ing }) => {
        return (
            <Text style={styles.listItem}>
            <Text  key={ing.id}> {ing.name}
                <Pressable onPress={() => deleteIngredient(ing.id)}>
                    <Image style={{ width: 15, height: 15, marginLeft: 10 }} source={require('../assets/x-mark.png')} />
                </Pressable>
            </Text>
            </Text>
        );
    }
    const renderItem = ({ item }) => (
        <Item ing={item} />
    );

    return (
        <View>
            <Modal visible={modalVisible} transparent={true}>
                <View 
                style={styles.modalView}>
                    <Pressable
                        style={[styles.button, styles.buttonClose]}
                        onPress={() => setModalVisible(!modalVisible)}>
                        <Text style={styles.textStyle}>x</Text>
                    </Pressable>
                    <FlatList data={ingredients} renderItem={renderItem} keyExtractor={item => item.id}></FlatList>
                </View>
            </Modal>

            { ingredients.length!=0?

            <TouchableOpacity
                onPress={() => setModalVisible(true)}>
                <View style={styles.itemCountContainer}>
                    <Text style={styles.itemCountText}>{ingredients.length}</Text>
                </View>
            </TouchableOpacity> : null
            }
        </View>
    )
}

const styles = StyleSheet.create({
    listItem: {
        flex:1,
        justifyContent: 'space-evenly',
        fontFamily: 'Poppins'
    },
    itemCountContainer: {
        position: 'absolute',
        alignContent: 'center',
        height: 50,
        width: 50,
        borderRadius: 30,
        backgroundColor: '#FFFFFF',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 3000,
    
    },
    itemCountText: {
        color: 'black',
        fontWeight: 'bold',
        fontFamily: 'Poppins',
        fontSize:20
    },
    modalView: {
        margin: 20,
        marginTop: 320,
        backgroundColor: "white",
        opacity: 0.95,
        borderRadius: 15,
        padding: 35,
        width: 250,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
       
    },
    button: {
        borderRadius: 45,
        paddingLeft: 8,
        paddingRight: 8,
        paddingTop: 2,
        paddingBottom: 3,
        elevation: 2,
        backgroundColor: '#798777',
        marginBottom: 4
    },
    buttonOpen: {
        backgroundColor: '#798777',
    },
    buttonClose: {
        backgroundColor: '#798777',
    },
    textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center",
        fontFamily: "Poppins"
    },
    modalText: {
        marginBottom: 15,
        textAlign: "center"
    }
});

export default IngredientCountIcon;