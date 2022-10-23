import React, { useState } from 'react'
import { StyleSheet, Text, View, Image, Button, TouchableOpacity, FlatList, Modal, Pressable } from 'react-native';
import { useDispatch } from 'react-redux';
import { useSelector } from "react-redux";
import { removeIngredient } from '../store/actions';
import { RootState } from "../store/reducers";
import { useFonts } from '@expo-google-fonts/carter-one';

const IngredientCountIcon = () => {
    const [loaded] = useFonts({
        Poppins: require('../assets/fonts/Poppins-Black.ttf'),
    });
    const ingredients = useSelector((state: RootState) => state.ingredients);
    const [modalVisible, setModalVisible] = useState(false);

    const dispatch = useDispatch();
    const deleteIngredient = (index: string) => {
        console.log("ingredient removed: ", index);
        dispatch(removeIngredient(index));
    }

    const Item = ({ ing }) => {
        return (
            <View style={styles.listItem}>
            <Text style={{marginTop:2}} key={ing.id}> {ing.name}</Text>
                <Pressable onPress={() => deleteIngredient(ing.id)}>
                    <Image style={{ width: 20, height: 20, marginLeft: 15, marginBottom:2 }} source={require('../assets/images/delete.png')} />
                </Pressable>
            </View>
        );
    }
    const renderItem = ({ item }) => (
        <Item ing={item} />
    );

    return (
        <View>
            <Modal visible={modalVisible} transparent={true}>
                <View 
                style={{position: 'absolute', left:85, right: 0, bottom: 380, justifyContent: 'center', alignItems: 'center', backgroundColor: "white", opacity: 0.95,
                borderRadius: 10, paddingBottom: 20, width: 250,  shadowColor: "#000", shadowOffset: { width: 0, height: 3},
                shadowOpacity: 0.25,
                shadowRadius: 4,}}>
                    <Pressable
                        style={[styles.button, styles.buttonClose]}
                        onPress={() => setModalVisible(!modalVisible)}>
                    <Image style={{height: 20, width: 20, marginLeft: 75, marginTop: 6}} source={require('../assets/images/closeme.png')}></Image>
                    </Pressable>
                    <Text style={{fontFamily: "Poppins",fontSize: 18}}>Ingredients</Text>
                    <View style={{backgroundColor: '#A2A2A2', height: 0.5, width: 180, marginBottom: 5}}></View>
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
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
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
        marginTop: 300,
        backgroundColor: "white",
        opacity: 0.95,
        borderRadius: 15,
        padding: 25,
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
        paddingLeft: 150,
        paddingRight: 8,
    },
    buttonOpen: {

    },
    buttonClose: {
    
    },
    textStyle: {
        color: "black",
        fontWeight: "bold",
        fontFamily: "Poppins"
    },
    modalText: {
        marginBottom: 15,
        textAlign: "center"
    }
});

export default IngredientCountIcon;