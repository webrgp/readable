import * as ReadableAPI from '../utils/ReadableAPI';

import { 
  LOAD_POST,
  LOAD_NEW_POST,
  DELETE_POST
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

export const updatePost = post => dispatch => (
  ReadableAPI
      .updatePost(post)
      .then(data => dispatch(loadPost(data)))
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

// DELETE_POST
export const deletePost = post => ({
  type: DELETE_POST,
  post
});

export const removePost = ( post ) => dispatch => (
  ReadableAPI
      .removePost( post.id )
      .then(dispatch(deletePost(post)))
);