import axios from 'axios';
import setAuthToken from '../util/set_auth_token';
import jwt_decode from 'jwt-decode';

import { 
  GET_ERRORS,
  SET_CURRENT_USER
} from './types';

// Register User
export const registerUser = (userData, history) => dispatch => {
  axios
    .post('/api/users/register', userData)
    .then(res => history.push('/login'))
    .catch(err => 
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
}

// Login Uer 
export const loginUser = userData => dispatch => {
  axios
    .post('/api/users/login', userData)
    .then(res => {
      // Set Token to localStorage to persist user
      const { token } = res.data;
      localStorage.setItem('jwtToken', token);
      // Set Token to Auth Header
      setAuthToken(token);
      const decoded = jwt_decode(token);
      dispatch(setCurrentUser(decoded))
    })
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
      )
}

// Set Current User
export const setCurrentUser = decoded => {
  return {
    type: SET_CURRENT_USER,
    payload: decoded
  }
}

// Logout User
export const logoutUser = (history) => dispatch => {
  localStorage.removeItem('jwtToken');
  setAuthToken(false);
  dispatch(setCurrentUser({}));
}