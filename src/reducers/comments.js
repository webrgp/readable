import { 
  LOAD_POST_COMMENTS,
  LOAD_NEW_COMMENT,
  DELETE_COMMENT
} from '../actions/actionTypes';

const comments = (state = {}, action) => {
  const { comment } = action;
  switch (action.type) {
    case LOAD_POST_COMMENTS:
      const { parentId, comments } = action;
      return parentId !== undefined ? {
        ...state,
        [parentId]: comments
      } : state;

    case LOAD_NEW_COMMENT:
      return comment.parentId !== undefined ? {
        ...state,
        [comment.parentId]: state[comment.parentId].concat(comment)
      } : state;
    
    case DELETE_COMMENT:
      return comment.parentId !== undefined ? {
        ...state,
        [comment.parentId]: state[comment.parentId].filter( c => c.id !== comment.id )
      } : state;

    default:
      return state;
  }
}

export default comments;