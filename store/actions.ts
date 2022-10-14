export const ADD_INGREDIENT = 'ADD_INGREDIENT';
export const REMOVE_INGREDIENT = 'REMOVE_INGREDIENT';

export function addIngredient(id: string, name: string) {
  return { type: ADD_INGREDIENT, id: id, name: name };
}

export function removeIngredient(id: string) {
    return { type: REMOVE_INGREDIENT, id: id};
  }