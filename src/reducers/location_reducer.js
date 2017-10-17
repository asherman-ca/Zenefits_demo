import { merge } from 'lodash';

const _defaultState = {
  locations: []
};

const locationReducer = (state = _defaultState, action) => {
  Object.freeze(state);
  switch (action.type) {
  default:
    return state;
  }
};

export default locationReducer;