import { RECEIVE_ALL_OUTAGES, RECEIVE_OUTAGE} from "../actions/types";


const initialState = {};

const outageReducer = (state = initialState, action) => {
  Object.freeze(state);
  const newState = {};

  switch (action.type) {
    case RECEIVE_ALL_OUTAGES:
      return Object.assign(newState, action.payload)
    case RECEIVE_OUTAGE:
      return Object.assign(newState, {[action.payload[0].outageNum]: action.payload[0]})
    default:
      return state;
  }
};

export default outageReducer;
