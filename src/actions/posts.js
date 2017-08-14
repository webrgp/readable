//Post list
export const LOAD_POSTS = 'LOAD_POSTS';


export function loadPosts (posts) {
  return {
    type: LOAD_POSTS,
    posts
  }
}