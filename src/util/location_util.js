export const RECEIVE_LOCATIONS = 'RECEIVE_LOCATIONS';

export const receiveLocations = locations => ({
  type: RECEIVE_LOCATIONS,
  locations
});

export const fetchLocations = string => dispatch => {
  const map = document.getElementById('google-map');
  const latlng = { lat: 37.780120, lng: -122.480507 };
  const options = {
    center: latlng,
    zoom: 13
  };
  function callback(results, status) {
    if (status == google.maps.places.PlacesServiceStatus.OK) {
      dispatch(receiveLocations(results));
      new google.maps.Map(map, options);
    } else {
      new google.maps.Map(map, options);
    }
  }
  let request = { location: latlng, radius: '500', keyword: string };
  let service = new google.maps.places.PlacesService(map);
  service.nearbySearch(request, callback);
};