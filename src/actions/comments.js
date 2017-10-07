import * as ReadableAPI from '../utils/ReadableAPI';

import { 
  LOAD_POST_COMMENTS 
} from './actionTypes';

// LOAD_POST_COMMENTS
export const loadPostComments = (parentId, comments) => ({
  type: LOAD_POST_COMMENTS,
  parentId,
  comments
});

export const fetchPostComments = parentId => dispatch => (
  ReadableAPI
      .fetchPostComments(parentId)
      .then(comments => dispatch(loadPostComments(parentId, comments)))
);