import { combineReducers } from 'redux';

import {
  LOAD_POSTS
} from '../actions/posts';

import {
  LOAD_CATEGORIES
} from '../actions/categories';

function categories (state = [], action) {
  const { categories } = action
  switch (action.type) {
    case LOAD_CATEGORIES:
      return categories;
    default:
      return state;
  }
}

function posts (state = [], action) {
  const { posts } = action
  switch (action.type) {
    case LOAD_POSTS:
      return posts;
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  posts,
  categories,
});

export default rootReducer;