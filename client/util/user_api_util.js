import axios from 'axios';
import HOST from './host';

export const createUser = ({ name, email, password }) =>
  axios.post(`${HOST}/api/users/register`, {
    name,
    email,
    password,
});