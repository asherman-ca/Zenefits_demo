import ReactDOM from 'react-dom';

export const fetchLocations = string => {
  const map = ReactDOM.findDOMNode(this.refs.map);

  function callback(results, status) {
    if (status == google.maps.places.PlacesServiceStatus.OK) {
      // for (var i = 0; i < results.length; i++) {
      //   console.log(results[i]);
      // }
      return results;
    }
  }

  let request = { query: string };
  let service = new google.maps.places.PlacesService(this.map);
  service.textSearch(request, callback);
};