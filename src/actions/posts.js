import * as ReadableAPI from '../utils/ReadableAPI';

export const LOAD_POST = 'LOAD_POST';
export const LOAD_POSTS = 'LOAD_POSTS';

export const loadPost = post => ({
  type: LOAD_POST,
  post
});

export const loadPosts = posts => ({
  type: LOAD_POSTS,
  posts
});

export const fetchPost = (id) => dispatch => (
  ReadableAPI
      .fetchPost(id)
      .then(post => dispatch(loadPost(post)))
);

export const fetchPosts = (filter) => dispatch => (
  ReadableAPI
      .fetchPosts(filter)
      .then(posts => dispatch(loadPosts(posts)))
);