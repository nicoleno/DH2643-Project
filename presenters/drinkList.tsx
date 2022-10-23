import React, { useEffect } from 'react';
import { DrinkListItem } from '../models/model';
import DrinkListView from '../views/DrinkListView';
import { checkAllDrinks } from '../components/findingDrinks';
import { useSelector } from 'react-redux';
import { RootState } from '../store/reducers';

const DrinkList = ({ navigation, route }) => {
    const allDrinks = route.params.props.drinks;
    const shakerIngredients = useSelector((state: RootState) => state.ingredients);
    const matchedDrinks = checkAllDrinks(shakerIngredients, allDrinks);
    console.log('drinks', allDrinks[0])
    console.log('matched', matchedDrinks);

    const alcoholIngredientsNeeded = (drinkIngredients, shakerIngredients) => {
        if (drinkIngredients.alcoholIngredients !== null) {
            const alcoholNeeded = drinkIngredients.alcoholIngredients.filter((item) => !shakerIngredients.some((shaker) => item === shaker.name));
            return alcoholNeeded;
        } else {
            return [];
        }
    }
    const nonAlcoholngredientsNeeded = (drinkIngredients, shakerIngredients) => {
        if (drinkIngredients.nonAlcoholIngredients !== null) {
            const nonAlcoholNeeded = drinkIngredients.nonAlcoholIngredients.filter((item) => !shakerIngredients.some((shaker) => item === shaker.name));
            return nonAlcoholNeeded;
        } else {
            return [];
        }
    }

    const alcoholIngredientsHave = (drinkIngredients, shakerIngredients) => {
        if (drinkIngredients.alcoholIngredients !== null) {
            const alcoholHave = drinkIngredients.alcoholIngredients.filter((item) => shakerIngredients.some((shaker) => item === shaker.name));
            return alcoholHave;
        } else {
            return [];
        }
    }
    const nonAlcoholngredientsHave = (drinkIngredients, shakerIngredients) => {
        if (drinkIngredients.nonAlcoholIngredients !== null) {
            const nonAlcoholHave = drinkIngredients.nonAlcoholIngredients.filter((item) => shakerIngredients.some((shaker) => item === shaker.name));
            return nonAlcoholHave;
        } else {
            return [];
        }
    }

    const createDrinkList = (matchedDrinks) => {
        const drinkList: DrinkListItem[] = [];

        for (let i = 0; i < matchedDrinks.length; i++) {
            const need = alcoholIngredientsNeeded(matchedDrinks[i], shakerIngredients).concat(nonAlcoholngredientsNeeded(matchedDrinks[i], shakerIngredients));
            const have = alcoholIngredientsHave(matchedDrinks[i], shakerIngredients).concat(nonAlcoholngredientsHave(matchedDrinks[i], shakerIngredients));
            console.log(need);
            const drink: DrinkListItem = {
                label: `${i + 1}  of ${matchedDrinks.length}`,
                value: `${i + 1}`,
                have: have,
                need: need,
                name: matchedDrinks[i].name
            };
            console.log('drink', drink);
            drinkList.push(drink);
        }
        return drinkList;
    }

    const drinkList = createDrinkList(matchedDrinks);


    return (
        <DrinkListView navigation={navigation} dataList={drinkList} allDrinks={allDrinks} />
    )
}
export default DrinkList;