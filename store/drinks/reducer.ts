import { DrinkActionTypes } from "./actions";
import { Drink } from "./model";

export interface DrinkState {
    drinks: Drink[];
    currentDrink?: Drink;
}

const initialState: DrinkState = {
    drinks: [],
};

export const drinkReducer = (state: DrinkState = initialState, action: any) => {
    const {type, payload} = action;

    switch (type) {
        case DrinkActionTypes.LOAD_DRINKS:
            return {...state, drinks: payload};

        case DrinkActionTypes.SET_CURRENT_DRINK:
            return {...state, currentDrink: payload};

        default:
            return state;
    }

}