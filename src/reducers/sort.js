import { 
  SET_SORT
} from '../actions/actionTypes';

const sort = (state = {}, action) => {
  const { orderby, sort } = action
  switch (action.type) {
    case SET_SORT:
      return {
        ...state,
        orderby,
        sort
      };

    default:
      return state;
  }
}

export default sort;