import * as ReadableAPI from '../utils/ReadableAPI';

import { 
  LOAD_POST_COMMENTS,
  LOAD_COMMENT,
  DELETE_COMMENT
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

// LOAD_COMMENT
export const loadComment = (comment) => {
  return {
    type: LOAD_COMMENT,
    comment
  }
}

export const addNewComment = ( comment ) => dispatch => (
  ReadableAPI
      .addNewComment( comment )
      .then( data => dispatch(loadComment( data )))
);

// DELETE_COMMENT
export const deleteComment = comment => ({
  type: DELETE_COMMENT,
  comment
});

export const removeComment = ( comment ) => dispatch => (
  ReadableAPI
      .removeComment( comment.id )
      .then(dispatch(deleteComment(comment)))
);

// UPDATE_COMMENT
export const updateComment = ( comment ) => dispatch => (
  ReadableAPI
      .updateComment( comment )
      .then( data => dispatch(loadComment( data )))
);