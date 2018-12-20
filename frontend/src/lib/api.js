import axios from 'axios';
import queryString from 'query-string';

export const writeBeer = ({title, body, tags}) => axios.post('/api/beers', { title, body, tags });
export const getBeer = (id) => axios.get(`/api/beers/${id}`);
export const getBeerList = ({ tag, page }) => axios.get(`/api/beers/?${queryString.stringify({ tag, page })}`);
export const editBeer = ({id, title, body, tags}) => axios.patch(`/api/beers/${id}`, { title, body, tags});
export const removeBeer = (id) => axios.delete(`/api/beers/${id}`);

export const login = (password) => axios.post('/api/auth/login', { password });
export const checkLogin = () => axios.get('/api/auth/check');
export const logout = () => axios.post('/api/auth/logout');
