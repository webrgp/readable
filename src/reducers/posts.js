import { 
  LOAD_POSTS,
  LOAD_NEW_POST,
  DELETE_POST,
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
      };
    
    case DELETE_POST:
      const filteredOutPosts = state.posts.filter( p => p.id !== post.id );
      console.log(post, filteredOutPosts);      
      return {
        ...state,
        posts: filteredOutPosts
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
      };

    default:
      return state;
  }
}

export default posts;