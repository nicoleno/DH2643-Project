import ingredientsReducer from "./reducers/ingredientsReducer";
import alcoholReducer from "./reducers/alcoholReducer";
import searchedItemReducer from "./reducers/searchedItemReducer";
import { combineReducers } from "redux";

const reducers = combineReducers({
    ingredients: ingredientsReducer,
    alcohols: alcoholReducer,
    matched: searchedItemReducer,
    
  });
  
export default reducers;

export type RootState = ReturnType<typeof reducers>;