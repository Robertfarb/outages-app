import { RECEIVE_ALL_OUTAGES, RECEIVE_OUTAGE, UPDATE_OUTAGE} from "../actions/types";


const initialState = {};

const outageReducer = (state = initialState, action) => {
  Object.freeze(state);
  const newState = {};

  switch (action.type) {
    case RECEIVE_ALL_OUTAGES:
      return Object.assign(newState, action.payload)
    case RECEIVE_OUTAGE:
      return Object.assign(newState, {[action.payload[0].outageNum]: action.payload[0]})
    case UPDATE_OUTAGE:
      return Object.assign(newState, {[action.payload.outageNum]: action.payload})
    default:
      return state;
  }
};

export default outageReducer;
