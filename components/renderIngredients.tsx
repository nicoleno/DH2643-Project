import store from '../store/store';
import React from 'react'
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';
import { removeIngredient } from '../store/actions';
import { connect } from 'react-redux';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { RootState } from '../store/reducers';

export const RenderIngredients = () => {
    const dispatch = useDispatch();
    const deleteIngredient = (index: string) => {
        dispatch(removeIngredient(index));
    }

    const ingredients = useSelector((state: RootState) => state.ingredients);

    return (
        <View>
            {ingredients.map(ing => <Text key={ing.id}> {ing.name} <Button title="X" onPress={() => deleteIngredient(ing.id)}></Button></Text>)}
        </View>
    )
}
