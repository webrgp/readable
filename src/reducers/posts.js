import {
  LOAD_POSTS
} from '../actions/posts';

const posts = (state = {}, action) => {
  const { posts } = action
  switch (action.type) {
    case LOAD_POSTS:
      return {
        ...state,
        posts
      };
    default:
      return state;
  }
}

export default posts;