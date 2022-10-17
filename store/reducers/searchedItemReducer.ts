import { MATCHED_ITEMS } from '../actions';


function searchedItemReducer(matched = [], action: any) {
  switch (action.type) {
    case MATCHED_ITEMS:
      return matched.filter((item) => {
        const list = action.list.map(ing => ing.id === item.id)
        return list;
      });

    default:
      return matched;
  }
}

export default searchedItemReducer;