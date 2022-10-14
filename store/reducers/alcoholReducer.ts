import { ADD_ALCOHOL, REMOVE_ALCOHOL } from '../actions';


function alcoholReducer(alcohols = [], action: any) {
  switch (action.type) {
    case ADD_ALCOHOL:
      return [
          ...alcohols,
          {
            id: action.id,
            name: action.name,
          },
        ];
      case REMOVE_ALCOHOL:
        return alcohols.filter((alcohol, index) => index != action.id);

    default:
      return alcohols;
  }
}

export default alcoholReducer;