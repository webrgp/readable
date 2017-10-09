import * as ReadableAPI from '../utils/ReadableAPI';

import { 
  LOAD_POST,
  LOAD_NEW_POST
} from './actionTypes'

// LOAD_POST
export const loadPost = post => ({
  type: LOAD_POST,
  post
});

export const fetchPost = (id) => dispatch => (
  ReadableAPI
      .fetchPost(id)
      .then(post => dispatch(loadPost(post)))
);

// LOAD_NEW_POST
export const loadNewPost = post => ({
  type: LOAD_NEW_POST,
  post
});

export const addNewPost = ( post ) => dispatch => (
  ReadableAPI
      .addPost( post )
      .then(post => dispatch(loadNewPost(post)))
);