import * as ReadableAPI from '../utils/ReadableAPI';

export const LOAD_POST = 'LOAD_POST';
export const LOAD_POSTS = 'LOAD_POSTS';
export const LOAD_COMMENTS = 'LOAD_COMMENTS';

// POST
export const loadPost = post => ({
  type: LOAD_POST,
  post
});

export const fetchPost = (id) => dispatch => (
  ReadableAPI
      .fetchPost(id)
      .then(post => dispatch(loadPost(post)))
);

// COMMENTS
export const loadComments = comments => ({
  type: LOAD_COMMENTS,
  comments
});

export const fetchComments = (id) => dispatch => (
  ReadableAPI
      .fetchComments(id)
      .then(comments => dispatch(loadComments(comments)))
);

// POSTS
export const loadPosts = posts => ({
  type: LOAD_POSTS,
  posts
});

export const fetchPosts = (filter) => dispatch => (
  ReadableAPI
      .fetchPosts(filter)
      .then(posts => dispatch(loadPosts(posts)))
);