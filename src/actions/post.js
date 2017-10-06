import * as ReadableAPI from '../utils/ReadableAPI';

import { 
  LOAD_POST
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