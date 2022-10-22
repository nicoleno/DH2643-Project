import React, { useState } from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity, FlatList, Alert, Modal, Button, Pressable } from 'react-native';
import { useDispatch } from 'react-redux';
import { useSelector } from "react-redux";
import { removeIngredient } from '../store/actions';
import { RootState } from "../store/reducers";
import { RenderIngredients } from './renderIngredients';


const IngredientCountIcon = () => {
    const ingredients = useSelector((state: RootState) => state.ingredients);
    const [modalVisible, setModalVisible] = useState(false);

    const dispatch = useDispatch();
    const deleteIngredient = (index: string) => {
        console.log("ingredient removed: ", index);
        dispatch(removeIngredient(index));
    }
    const deleteIcon = require('../assets/x-mark.png')

    // const renderItem = (item) => {
    //     {ingredients.map(ing => <Text key={ing.id}> {ing.name} <Button title="X" onPress={() => deleteIngredient(ing.id)}></Button></Text>)}
    // }

    const Item = ({ ing }) => {
        return (
            <Text style={styles.listItem} key={ing.id}> {ing.name}
                <Pressable onPress={() => deleteIngredient(ing.id)}>
                    <Image style={{ width: 20, height: 20 }} source={require('../assets/x-mark.png')} />
                </Pressable>
            </Text>
        );
    }
    const renderItem = ({ item }) => (
        <Item ing={item} />
    );


    return (
        <View>
            <Modal visible={modalVisible} transparent={true}>
                <View style={styles.modalView}>
                    <Pressable
                        style={[styles.button, styles.buttonClose]}
                        onPress={() => setModalVisible(!modalVisible)}
                    >
                        <Text style={styles.textStyle}>x</Text>
                    </Pressable>
                    <FlatList data={ingredients} renderItem={renderItem} keyExtractor={item => item.id}></FlatList>
                </View>
            </Modal>
            <TouchableOpacity
                onPress={() => setModalVisible(true)}>
                <View style={styles.itemCountContainer}>
                    <Text style={styles.itemCountText}>{ingredients.length}</Text>
                </View>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    listItem: {
        flex: 1,
        justifyContent: 'space-between'
    },
    itemCountContainer: {
        alignContent: 'flex-start',
        height: 30,
        width: 30,
        borderRadius: 15,
        backgroundColor: '#FF7D7D',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 2000,

    },
    itemCountText: {
        color: 'white',
        fontWeight: 'bold'
    },
    modalView: {
        margin: 20,
        marginTop: 400,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
    },
    button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2
    },
    buttonOpen: {
        backgroundColor: "#F194FF",
    },
    buttonClose: {
        backgroundColor: "#2196F3",
    },
    textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
    },
    modalText: {
        marginBottom: 15,
        textAlign: "center"
    }
});

export default IngredientCountIcon;