import axios from 'axios';

import {
  RECEIVE_ALL_OUTAGES,
  RECEIVE_OUTAGE,
  GET_ERRORS
} from './types';

// Get all Outages
export const requestAllOutages = () => dispatch => {
  axios
    .get('/api/outages/')
    .then(outages => console.log(outages.data))
    .catch(err => 
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
}

export const receiveAllOutages = (outages) => ({
  type: RECEIVE_ALL_OUTAGES,
  payload: outages
})