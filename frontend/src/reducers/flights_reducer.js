import { RECEIVE_FLIGHTS } from '../actions/flight_actions';

const flightsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_FLIGHTS:
      return action.flights;
    default:
      return state;
  }
};

export default flightsReducer;
