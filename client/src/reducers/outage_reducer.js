import { RECEIVE_ALL_OUTAGES, RECEIVE_OUTAGE} from "../actions/types";
import merge from 'lodash/merge'


const initialState = {};

const outageReducer = (state = initialState, action) => {
  Object.freeze(state);
  const newState = {};

  switch (action.type) {
    case RECEIVE_ALL_OUTAGES:
      return Object.assign(newState, action.payload)
    case RECEIVE_OUTAGE:
      return {};
      // return merge(newState, state, {[action.payload.outage.id]: outage.id})
    default:
      return state;
  }
};

export default outageReducer;
