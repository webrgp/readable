const apiUrl = process.env.REACT_APP_READABLE_API_URL || 'http://localhost:3001'

let token = localStorage.token

if (!token)
  token = localStorage.token = Math.random().toString(36).substr(-8)

const headers = {
  'Accept': 'application/json',
  'Content-Type': 'application/json',
  'Authorization': token
}

export const fetchCategories = () =>
  fetch(`${apiUrl}/categories`, { headers })
    .then(res => res.json())
    .then(data => data.categories)

    
export const fetchPost = (id) => 
  fetch(`${apiUrl}/posts/${id}`, { headers })
    .then(res => res.json())
    .then(data => data)

export const addPost = ( post ) => {
  const postData = {
    ...post,
    timestamp: new Date().getTime()
  };

  return fetch(`${apiUrl}/posts`, {
    method: "POST", 
    body: JSON.stringify(postData),
    headers
  }).then(res => res.json())
    .then(data => data)
}

export const removePost = (id) => 
  fetch(`${apiUrl}/posts/${id}`, { 
    method: 'DELETE',
    headers 
  }).then(res => res.json())
    .then(data => data)

export const fetchPostComments = (id) => 
  fetch(`${apiUrl}/posts/${id}/comments`, { headers })
    .then(res => res.json())
    .then(data => data)

export const fetchPosts = (filter) => {
  const url = filter ? `${apiUrl}/${filter}/posts` : `${apiUrl}/posts`
  return fetch(url, { headers })
    .then(res => res.json())
    .then(data => data)
}

/**
 * Voting function for both posts and comments
 * @param {String} id // Post's id
 * @param {String} vote // upVote or downVote
 * @param {String} type // posts or comments
 */
export const vote = (id, option, type) => {
  const postData = { id: id, option: option };
  const url = `${apiUrl}/${type}/${id}`;
  return fetch(url, { 
      method: "POST",
      body: JSON.stringify(postData),
      headers 
    })
    .then(res => res.json())
    .then(data => data);
}