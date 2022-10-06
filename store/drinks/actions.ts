import { Drink } from "./model";

export enum DrinkActionTypes {
    LOAD_DRINKS = 'drinks/LOAD_DRINKS',
    SET_CURRENT_DRINK = 'drinks/SET_CURRENT_DRINK',
}

export const loadDrinks = (drinks: Drink[]) => ({
    type: DrinkActionTypes.LOAD_DRINKS,
    payload: drinks,
});

export const setCurrentDrink = (drink: Drink) => ({
    type: DrinkActionTypes.SET_CURRENT_DRINK,
    payload: drink,
})