import { 
  LOAD_POST_COMMENTS 
} from '../actions/actionTypes';

const comments = (state = {}, action) => {
  switch (action.type) {
    case LOAD_POST_COMMENTS:
      const { parentId, comments } = action;
      return parentId !== undefined ? {
        ...state,
        [parentId]: comments
      } : { ...state };

    default:
      return state;
  }
}

export default comments;