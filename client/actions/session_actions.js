import * as SessionAPIUtil from '../util/session_api_util';
import { receiveUser } from './user_actions';

export const LOGIN_USER = 'START_SESSION';
export const LOGOUT_USER = 'LOGOUT_USER';

export const loginUser = (res, token) => ({
  type: LOGIN_USER,
  res,
  token
});

export const logoutUser = res => ({
  type: LOGOUT_USER,
  res
});

export const fetchCurrentSession = token => dispatch =>
  SessionAPIUtil.fetchCurrentSession(token).then(
    res => dispatch(loginUser(res, token)),
    // err => dispatch(receiveErrors(Object.values(err.response.data)))
  );

export const login = user => dispatch =>
  SessionAPIUtil.loginUser(user).then(
    res => {
      dispatch(receiveUser(res));
      dispatch(loginUser(res));
    },
    // err => dispatch(receiveErrors(Object.values(err.response.data)))
  );

export const logout = () => dispatch =>
  SessionAPIUtil.endSession()
    .then(res => dispatch(logoutUser(res)))
    .catch(err => console.log(err));