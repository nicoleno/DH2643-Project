export const ADD_INGREDIENT = 'ADD_INGREDIENT';

export function addIngredient(id: string, name: string) {
  return { type: ADD_INGREDIENT, id: id, name: name };
}