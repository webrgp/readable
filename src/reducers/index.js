import { combineReducers } from 'redux';

import categories from './categories';
import posts from './posts';

import {
  LOAD_POST,
  LOAD_COMMENTS
} from '../actions/posts';



const post = (state = {}, action) => {
  const { post } = action
  switch (action.type) {
    case LOAD_POST:
      return {
        ...state,
        post
      };
    default:
      return state;
  }
}

const comments = (state = {}, action) => {
  const { comments } = action
  switch (action.type) {
    case LOAD_COMMENTS:
      return{
        ...state,
        comments
      };
    default:
      return state;
  }
}



export default combineReducers({
  post,
  comments,
  posts,
  categories,
});;