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


export const fetchComments = (id) => 
  fetch(`${apiUrl}/posts/${id}/comments`, { headers })
    .then(res => res.json())
    .then(data => data)

export const fetchPosts = (filter) => {
  const url = filter ? `${apiUrl}/${filter}/posts` : `${apiUrl}/posts`
  return fetch(url, { headers })
    .then(res => res.json())
    .then(data => data)
}