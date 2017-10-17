import React from 'react';
import ReactDOM from 'react-dom';
import { withRouter } from 'react-router';

class MapItem extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const map = ReactDOM.findDOMNode(this.refs.map);
    const latlng = new google.maps.LatLng(39.305, -76.617);
    const options = {
      center: latlng,
      zoom: 12
    };

    this.map = new google.maps.Map(map, options);

    // this.props.businessPositions.forEach(business => this.addBusiness(business));
  }

  render() {
    return (
      <div ref="map" id="google-map" />
    );
  }
}

export default withRouter(MapItem);
