import * as ReadableAPI from '../utils/ReadableAPI';

import { 
  LOAD_POSTS
} from './actionTypes';


// LOAD_POSTS
export const loadPosts = posts => ({
  type: LOAD_POSTS,
  posts
});

export const fetchPosts = (filter) => dispatch => (
  ReadableAPI
      .fetchPosts(filter)
      .then(posts => dispatch(loadPosts(posts)))
);