import * as ReadableAPI from '../utils/ReadableAPI';

import { 
  VOTE 
} from './actionTypes';

// LOAD_POST
export const vote = (id, score) => ({
  type: VOTE,
  id, 
  score
});

export const postVote = (id, option, type) => dispatch => (
  ReadableAPI
      .vote(id, option, type)
      .then( data => dispatch(vote(id, data.voteScore)) )
);