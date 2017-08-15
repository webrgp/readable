import { combineReducers } from 'redux';

import { LOAD_CATEGORIES } from '../actions/categories';

import {
  LOAD_POST,
  LOAD_POSTS
} from '../actions/posts';

const categories = (state = [], action) => {
  const { categories } = action
  switch (action.type) {
    case LOAD_CATEGORIES:
      return categories;
    default:
      return state;
  }
}

const post = (state = [], action) => {
  const { post } = action
  switch (action.type) {
    case LOAD_POST:
      return post;
    default:
      return state;
  }
}

const posts = (state = [], action) => {
  const { posts } = action
  switch (action.type) {
    case LOAD_POSTS:
      return posts;
    default:
      return state;
  }
}

export default combineReducers({
  post,
  posts,
  categories,
});;