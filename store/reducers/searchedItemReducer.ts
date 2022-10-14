import { MATCHED_ITEMS } from '../actions';


function searchedItemReducer(matched = [], action: any) {
  switch (action.type) {
    case MATCHED_ITEMS:
      return action.list;

    default:
      return matched;
  }
}

export default searchedItemReducer;