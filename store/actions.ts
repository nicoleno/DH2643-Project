export const ADD_INGREDIENT = 'ADD_INGREDIENT';
export const REMOVE_INGREDIENT = 'REMOVE_INGREDIENT';
export const MATCHED_ITEMS = 'MATCHED_ITEMS';
export const FETCH_DRINKS = 'FETCH_DRINKS';
import { useDispatch } from "react-redux";
import { ThunkAction } from "redux-thunk";
import { AnyAction } from "redux";
import { RootState } from "./reducers";
import { Ingredient } from "../models/types"

// const dispatch = useDispatch();


export function addIngredient(id: string, name: string) {
  return { type: ADD_INGREDIENT, id: id, name: name };
}

export function removeIngredient(id: string) {
    return { type: REMOVE_INGREDIENT, id: id};
  }

export function matchedItems(list) {
    return { type: MATCHED_ITEMS, list: list};
}

// export const fetchDrinks = (): ThunkAction<void, RootState, unknown, AnyAction> => {
//     return (dispatch) => {
//         fetch("http://192.168.1.69:3000/drinks", {
//             method: "get",
//             headers: {
//                 Accept: 'application/json',
//                 'Content-Type': 'application/json'
//             },
//         }).then(res => res.json()).then(data => dispatch({ type: 'FETCH_DRINKS', payload: data }));
// }
//         }

