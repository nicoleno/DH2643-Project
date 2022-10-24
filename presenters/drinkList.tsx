import React from 'react';
import { DrinkListItem } from '../models/model';
import DrinkListView from '../views/DrinkListView';
import { checkAllDrinks } from '../components/findingDrinks';
import { useSelector } from 'react-redux';
import { RootState } from '../store/reducers';

const DrinkList = ({ navigation, route }) => {
    const allDrinks = route.params.props.drinks;
    const shakerIngredients = useSelector((state: RootState) => state.ingredients);
    const matchedDrinks = checkAllDrinks(shakerIngredients, allDrinks);

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

        const filteredDrinks = matchedDrinks.filter((drink) => {
            return (alcoholIngredientsHave(drink, shakerIngredients).length !== 0);

        })

        for (let i = 0; i < filteredDrinks.length; i++) {

            const need = alcoholIngredientsNeeded(filteredDrinks[i], shakerIngredients).concat(nonAlcoholngredientsNeeded(filteredDrinks[i], shakerIngredients));
            const have = alcoholIngredientsHave(filteredDrinks[i], shakerIngredients).concat(nonAlcoholngredientsHave(filteredDrinks[i], shakerIngredients));

            const drink: DrinkListItem = {
                label: `${i + 1}  of ${filteredDrinks.length}`,
                value: `${(i + 1)}`,
                have: have,
                need: need,
                name: filteredDrinks[i].name,
                imageid: filteredDrinks[i].imageid,

            };
            drinkList.push(drink);
        }

        // console.log('drink', drink);

        return drinkList;
    }

    const drinkList = createDrinkList(matchedDrinks);
    return (
        <DrinkListView navigation={navigation} dataList={drinkList} allDrinks={allDrinks} />
    )
}
export default DrinkList;