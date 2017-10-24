import React from 'react';
import ReactDOM from 'react-dom';
import { withRouter } from 'react-router';

class MapItem extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const map = ReactDOM.findDOMNode(this.refs.map);
    // const latlng = new google.maps.LatLng(37.7749, -122.4194);
    const options = {
      center: this.props.center,
      zoom: this.props.zoom
    };

    this.map = new google.maps.Map(map, options);

    // function callback(results, status) {
    //   if (status == google.maps.places.PlacesServiceStatus.OK) {
    //     for (var i = 0; i < results.length; i++) {
    //       console.log(results[i]);
    //     }
    //   }
    // }
   
    // let request = { location: latlng, radius: '500', keyword: 'dog' };
    // let service = new google.maps.places.PlacesService(this.map);
    // service.nearbySearch(request, callback);

    // this.props.businessPositions.forEach(business => this.addBusiness(business));
  }

  // componentWillReceiveProps() {
  //   const map = ReactDOM.findDOMNode(this.refs.map);
  //   const latlng = new google.maps.LatLng(37.7749, -122.4194);
  //   const options = {
  //     center: latlng,
  //     zoom: 12
  //   };

  //   this.map = new google.maps.Map(map, options);
  // }

  render() {
    return (
      <div ref="map" id="google-map" />
    );
  }
}

export default withRouter(MapItem);
