export const ADD_INGREDIENT = 'ADD_INGREDIENT';
export const REMOVE_INGREDIENT = 'REMOVE_INGREDIENT';
export const ADD_ALCOHOL = 'ADD_ ALCOHOL';
export const REMOVE_ALCOHOL = 'REMOVE_ALCOHOL';
export const MATCHED_ITEMS = 'MATCHED_ITEMS';
import { Ingredient } from "../models/model";

export function addIngredient(id: string, name: string) {
  return { type: ADD_INGREDIENT, id: id, name: name };
}

export function removeIngredient(id: string) {
    return { type: REMOVE_INGREDIENT, id: id};
  }

export function addAlcohol(id: string, name: string) {
return { type: ADD_INGREDIENT, id: id, name: name };
}

export function removeAlcohol(id: string) {
    return { type: REMOVE_INGREDIENT, id: id};
  }

export function matchedItems(list) {
return { type: MATCHED_ITEMS, list: list};
}
