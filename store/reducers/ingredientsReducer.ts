import { ADD_INGREDIENT, REMOVE_INGREDIENT } from '../actions';


function ingredientsReducer(ingredients = [], action: any) {
  switch (action.type) {
    case ADD_INGREDIENT:
      return [
          ...ingredients,
          {
            id: action.id,
            name: action.name,
          },
        ];
      case REMOVE_INGREDIENT:
        return ingredients.filter((ingredient, index) => index != action.id);

    default:
      return ingredients;
  }
}

export default ingredientsReducer;