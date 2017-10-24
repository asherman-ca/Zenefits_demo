import { RECEIVE_LOCATIONS } from '../actions/location_actions';

const _defaultState = {
  locations: []
};

const locationReducer = (state = _defaultState, action) => {
  Object.freeze(state);
  switch (action.type) {
  case RECEIVE_LOCATIONS:
    return action.locations;
  default:
    return state;
  }
};

export default locationReducer;