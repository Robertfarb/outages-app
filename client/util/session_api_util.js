import axios from 'axios';
import HOST from './host';

export const fetchCurrentSession = token =>
  axios.get(`${HOST}/api/users/current`, { headers: token });

export const loginUser = user =>
  axios.post(`/api/users/login`, user);

export const endSession = () => axios.get(`${HOST}/api/session/logout`);