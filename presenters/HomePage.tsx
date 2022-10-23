import React, { useState, useEffect } from 'react';
import ShakeEventExpo from '../accelerometer';
import { useFonts } from '@expo-google-fonts/carter-one';
import * as Font from 'expo-font';
import { HomepageView } from '../views/HomepageView';

export const HomePage = ({ navigation }) => {
    const [loaded] = useFonts({
        Poppins: require('../assets/fonts/Poppins-Regular.ttf'),
        Carter: require('../assets/fonts/CarterOne-Regular.ttf')
    });

    // const dispatch = useDispatch();
    // dispatch(matchedItems(ingredients));

    // const ingredientsToShow = (itemList) => {
    //     const ingredientsInShaker = useSelector((state: RootState) => state.ingredients);
    //     const result = itemList.filter(ingr => ingredientsInShaker.some(item => item.id !== ingr.id));
    //     return result;
    // }

    ShakeEventExpo.addListener(() => {
        navigation.navigate('DrinkList');
    })

    const [showIngredient, setToggleValue] = useState(false);
    const childToParent = (showIngredient) => {
        setToggleValue(showIngredient)
    }

    return (
        <HomepageView navigation={navigation}></HomepageView>
    )
};