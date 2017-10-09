import { 
  LOAD_POST_COMMENTS,
  LOAD_NEW_COMMENT
} from '../actions/actionTypes';

const comments = (state = {}, action) => {
  switch (action.type) {
    case LOAD_POST_COMMENTS:
      const { parentId, comments } = action;
      return parentId !== undefined ? {
        ...state,
        [parentId]: comments
      } : { ...state };
    case LOAD_NEW_COMMENT:
      const { comment } = action;
      return comment.parentId !== undefined ? {
        ...state,
        [comment.parentId]: state[comment.parentId].concat(comment)
      } : { ...state };
    default:
      return state;
  }
}

export default comments;