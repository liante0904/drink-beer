import axios from 'axios';

/**
 * URL variable
 */

const URI = 'localhost';
const PORT = '4000';
const URL = 'http://' + URI + ':' + PORT + '/';
//const URL = '/';

//export const getBeerList = () => axios.get(`/api/beers/`);
export const getBeerList = () => axios.get(URL + `api/beers/`);
export const createBeer = ({title, body, tags}) => axios.post(URL + `/api/beers`, { title, body, tags });
export const getBeer = (id) => axios.get(URL + `/api/beers/${id}`);
export const editBeer = ({id, title, body, tags}) => axios.patch(URL + `/api/beers/${id}`, { title, body, tags});
export const removeBeer = (id) => axios.delete(URL + `/api/beers/${id}`);

/*
export const login = (password) => axios.post('/api/auth/login', { password });
export const checkLogin = () => axios.get('/api/auth/check');
export const logout = () => axios.post('/api/auth/logout');
*/