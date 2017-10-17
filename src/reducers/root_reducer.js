import locationReducer from './location_reducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  location: locationReducer
});

export default rootReducer;
