import * as UserAPIUtil from '../util/user_api_util';

export const RECEIVE_USER = 'RECEIVE_USER';

export const receiveUser = (res) => ({
  type: RECEIVE_USER,
  res
});

const START_SESSION = 'START_SESSION';
const startSession = (res, token) => ({
  type: START_SESSION,
  res,
  token
});

export const createUser = newUser => dispatch =>
  UserAPIUtil.createUser(newUser).then(
    res => {
      dispatch(receiveUser(res));
      dispatch(startSession(res));
    },
    err => dispatch(receiveErrors(Object.values(err.response.data)))
  );