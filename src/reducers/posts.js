import { 
  LOAD_POSTS,
  VOTE
} from '../actions/actionTypes';

const posts = (state = {}, action) => {
  const { posts } = action;
  switch (action.type) {
    case LOAD_POSTS:
      return {
        ...state,
        posts
      };
    
    case VOTE:
      const { id, score } = action;
      const votedPosts = state.posts.map((p) => {
        if (p.id === id) { p.voteScore = score }
        return p;
      });
      return {
        ...state,
        posts: votedPosts
      }

    default:
      return state;
  }
}

export default posts;