import store from '../store/store';
import React from 'react'
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';
import { removeIngredient } from '../store/actions';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { RootState } from '../store/reducers';

export const RenderIngredients = () => {
    const dispatch = useDispatch();
    const deleteIngredient = (index: string) => {
        console.log('removing ingredient: ', index);
        dispatch(removeIngredient(index));
    }

    const ingredients = useSelector((state: RootState) => state.ingredients);

    return (
        <View style={styles.modalView}>
            {ingredients.map(ing => <Text key={ing.id}> {ing.name} <Button title="X" onPress={() => deleteIngredient(ing.id)}></Button></Text>)}
        </View>
    )
}

const styles = StyleSheet.create({
    modalView: {
        margin: 20,
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
});
