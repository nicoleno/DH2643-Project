import ingredientsReducer from "./reducers/ingredientsReducer";
import searchedItemReducer from "./reducers/searchedItemReducer";
import { combineReducers } from "redux";
// import drinksReducer from "./reducers/drinksReducer";


const reducers = combineReducers({
    ingredients: ingredientsReducer,
    // drinks: drinksReducer,
    matched: searchedItemReducer,
    
  });
  
export default reducers;

export type RootState = ReturnType<typeof reducers>;