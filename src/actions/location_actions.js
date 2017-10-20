import * as LocationUtil from '../util/location_util';

export const RECEIVE_LOCATIONS = 'RECEIVE_LOCATIONS';

export const requestLocations = string => dispatch => (
  LocationUtil.fetchLocations(string).then(data => dispatch(receiveLocations(data)))
);

export const receiveLocations = locations => ({
  type: RECEIVE_LOCATIONS,
  locations
});

