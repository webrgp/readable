import { 
  LOAD_POST,
  DELETE_POST
} from '../actions/actionTypes';

const post = (state = {}, action) => {
  const { post } = action
  switch (action.type) {
    case LOAD_POST:
      return {
        ...state,
        post
      };

    case DELETE_POST:
      return {
        ...state,
        post: undefined
      };

    default:
      return state;
  }
}

export default post;