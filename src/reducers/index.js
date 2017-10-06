import { combineReducers } from 'redux';

import categories from './categories';
import posts from './posts';
import post from './post';
import vote from './vote';

export default combineReducers({
  categories,
  posts,
  post,
  vote
});