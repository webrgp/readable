import Moment from 'moment';

const api = process.env.REACT_APP_READABLE_API_URL || 'http://localhost:5001'

let token = localStorage.token

if (!token)
  token = localStorage.token = Math.random().toString(36).substr(-8)

const headers = {
  'Accept': 'application/json',
  'Authorization': token
}

export const fetchCategories = () =>
  fetch(`${api}/categories`, { headers })
    .then(res => res.json())
    .then(data => data.categories)

    
export const fetchPost = (id) => {
  return fetch(`${api}/posts/${id}`, { headers })
    .then(res => res.json())
    // format incoming data
    .then(data => ({
      ...data,
      timestamp: Moment(data.timestamp).format('LLL')
    }))
}

export const fetchComments = (id) => {
  return fetch(`${api}/posts/${id}/comments`, { headers })
    .then(res => res.json())
    // format incoming data
    .then(data => data.map(comment => ({
      ...comment, 
      timestamp: Moment(comment.timestamp).format('LLL')
    })))
}

export const fetchPosts = (filter) => {
  const url = filter ? `${api}/${filter}/posts` : `${api}/posts`
  return fetch(url, { headers })
    .then(res => res.json())
    .then(data => data)
}