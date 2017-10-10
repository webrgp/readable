import { 
  SET_EDIT_MODE
} from '../actions/actionTypes';

const inEditMode = (state = {}, action) => {
  const { id } = action
  switch (action.type) {
    case SET_EDIT_MODE:
      return state[id] !== undefined ? {
        ...state,
        [id]: ! state[id]
      } : {
        ...state,
        [id]: true
      };

    default:
      return state;
  }
}

export default inEditMode;