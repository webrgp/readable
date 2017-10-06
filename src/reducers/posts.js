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
      const updatedPosts = state.posts.map((p) => {
        if (p.id === id) { p.voteScore = score }
        return p;
      });
      return {
        ...state,
        posts: updatedPosts
      }

    default:
      return state;
  }
}

export default posts;