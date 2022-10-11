import { ADD_INGREDIENT } from './actions';

const initialState = {
  ingredients: [],
};

function rootReducer(state = initialState, action: any) {
  switch (action.type) {
    case ADD_INGREDIENT:
      return {
        ingredients: [
          ...state.ingredients,
          {
            id: action.id,
            name: action.name,
          },
        ],
      };

    default:
      return state;
  }
}

export default rootReducer;