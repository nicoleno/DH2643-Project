import ingredientsReducer from "./reducers/ingredientsReducer";
import { combineReducers } from "redux";

const reducers = combineReducers({
    ingredients: ingredientsReducer,
  });
  
export default reducers;

export type RootState = ReturnType<typeof reducers>;