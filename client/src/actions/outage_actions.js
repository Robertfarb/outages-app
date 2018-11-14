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
    .then(outages => dispatch(receiveAllOutages(outages.data)))
    .catch(err => 
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
}

// Get a single outage
export const requestSingleOutage = ( outageId ) => dispatch => {
  axios
    .get(`/api/outages/${outageId}`)
    .then(outage => dispatch(receiveOutage(outage.data)))
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
});

export const receiveOutage = (outage) => ({
  type: RECEIVE_OUTAGE,
  payload: outage
});

// Add update to an outage
export const updateOutage = (outage, outageId) => dispatch => {
  axios
    .post(`/api/outages/update/${outageId}`, outage)
    .then(outage => dispatch(receiveOutage(outage.data)))
    .catch(err => {
      dispatch({
        type: GET_ERRORS,
        payload: err.response
      })
    })
}
