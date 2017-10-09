import { 
  LOAD_POSTS,
  LOAD_NEW_POST,
  VOTE
} from '../actions/actionTypes';

const posts = (state = {}, action) => {
  const { posts, post } = action;
  switch (action.type) {
    case LOAD_POSTS:
      return {
        ...state,
        posts
      };
    
    case LOAD_NEW_POST:
      return {
        ...state,
        posts: state.posts.concat(post)
      }
    
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