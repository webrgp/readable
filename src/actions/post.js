import * as ReadableAPI from '../utils/ReadableAPI';

export const LOAD_POST = 'LOAD_POST';

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