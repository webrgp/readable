import { 
  LOAD_POSTS,
  LOAD_POST,
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
    
    case LOAD_POST:
      return state.posts !== undefined ? {
        ...state,
        posts: state.posts.map( p => p.id === post.id ? post : p)
      } : state;
    
    case DELETE_POST:
      return {
        ...state,
        posts: state.posts.filter( p => p.id !== post.id )
      };
    
    case VOTE:
      const { id, score } = action;
      if ( state.posts !== undefined ) {
        return {
          ...state,
          posts: state.posts.map((p) => {
            if (p.id === id) p.voteScore = score;
            return p;
          })
        };
      } else {
        return state;
      }
      

    default:
      return state;
  }
}

export default posts;