// import ReactDOM from 'react-dom';

export const RECEIVE_LOCATIONS = 'RECEIVE_LOCATIONS';

export const receiveLocations = locations => ({
  type: RECEIVE_LOCATIONS,
  locations
});

export const fetchLocations = string => dispatch => {
  // const map = ReactDOM.findDOMNode(this.refs.map);
  const map = document.getElementById('google-map');
  const latlng = new google.maps.LatLng(37.7749, -122.4194);

  function callback(results, status) {
    if (status == google.maps.places.PlacesServiceStatus.OK) {
      // for (var i = 0; i < results.length; i++) {
      //   console.log(results[i]);
      // }
      // console.log(results);
      // return results;
      dispatch(receiveLocations(results));
      const options = {
        center: latlng,
        zoom: 12
      };
      let map = document.getElementById('google-map');
      new google.maps.Map(map, options);
    } else {
      const options = {
        center: latlng,
        zoom: 12
      };
      let map = document.getElementById('google-map');
      new google.maps.Map(map, options);
    }
  }

  let request = { location: latlng, radius: '500', keyword: string };
  let service = new google.maps.places.PlacesService(map);
  service.nearbySearch(request, callback);
};