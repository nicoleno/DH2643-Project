import { useSelector } from "react-redux";
import { RootState } from "../rootReducer";
import { Drink } from "./model";

export const selectDrinks = (): Drink[] => useSelector((state: RootState) => state.drink.drinks);

export const selectCurrentDrink = (): Drink | undefined => useSelector((state: RootState) => state.drink.currentDrink);