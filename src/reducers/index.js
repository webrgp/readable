import { combineReducers } from 'redux';
import { LOAD_CATEGORIES } from '../actions/categories';

import {
  LOAD_POST,
  LOAD_COMMENTS,
  LOAD_POSTS
} from '../actions/posts';

const categories = (state = [], action) => {
  const { categories } = action
  switch (action.type) {
    case LOAD_CATEGORIES:
      const initArray = [ {name: "all", path: ""} ];
      return initArray.concat(categories);
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

const comments = (state = [], action) => {
  const { comments } = action
  switch (action.type) {
    case LOAD_COMMENTS:
      return comments;
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
  comments,
  posts,
  categories,
});;