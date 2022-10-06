import { combineReducers } from "redux";
import { drinkReducer } from "./drinks/reducer";

export const rootReducer = combineReducers({
    drink: drinkReducer,

});

export type RootState = ReturnType<typeof rootReducer>;