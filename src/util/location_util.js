/* global google:false */

export const RECEIVE_LOCATIONS = 'RECEIVE_LOCATIONS';

export const receiveLocations = locations => ({
  type: RECEIVE_LOCATIONS,
  locations
});

export const fetchLocations = string => dispatch => {
  const map = document.getElementById('google-map');
  const latlng = { lat: 37.780120, lng: -122.480507 };
  function callback(results, status) {
    if (status == google.maps.places.PlacesServiceStatus.OK) {
      dispatch(receiveLocations(results));
    } else {
      dispatch(receiveLocations([]));
    }
  }
  let request = { location: latlng, radius: '5000', keyword: string };
  let service = new google.maps.places.PlacesService(map);
  service.nearbySearch(request, callback);
};