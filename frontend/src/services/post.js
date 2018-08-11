import axios from 'axios';

export function getPost(postId) {
    return axios.get('/beers');
}

export function getComments(postId) {
   // return axios.get(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`)
}