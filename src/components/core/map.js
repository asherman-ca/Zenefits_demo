/* global google:false */
import React from 'react';
import ReactDOM from 'react-dom';
import autoBind from 'react-autobind';
import { withRouter } from 'react-router';

class MapItem extends React.Component {
  constructor(props) {
    super(props);

    autoBind(this);
  }

  componentDidMount() {
    const map = ReactDOM.findDOMNode(this.refs.map);
    const options = {
      center: this.props.center,
      zoom: this.props.zoom
    };

    this.map = new google.maps.Map(map, options);
    if (this.props.positions.length > 0) {
      this.props.positions.locations.forEach(business => this.addBusiness(business));
    }
  }

  componentWillReceiveProps(nextProps) {
    const map = ReactDOM.findDOMNode(this.refs.map);
    const options = {
      center: nextProps.center,
      zoom: nextProps.zoom
    };

    this.map = new google.maps.Map(map, options);
    if (nextProps.positions.length > 0) {
      nextProps.positions.forEach(business => this.addBusiness(business));
    }
  }

  addBusiness(business) {
    const pos = { lat: business.geometry.viewport.f.f, lng: business.geometry.viewport.b.b };
    const marker = new google.maps.Marker({
      position: pos,
      map: this.map
    });
    marker.setAnimation(google.maps.Animation.DROP);
    this.addWindow(business, marker);
  }

  addWindow(business, marker) {
    const windowString = "<div class='map-window'>" +
      `<h1 class='map-name'>${business.name}</h1>` +
      `<h2>${business.vicinity}</h2>` +
      "</div>";
    const window = new google.maps.InfoWindow({
      content: windowString,
      maxWidth: 200
    });

    marker.addListener('mouseover', () => {
      window.open(this.map, marker);
    });

    marker.addListener('mouseout', () => {
      window.close(this.map, marker);
    });

    const htmlElement = document.getElementById(business.name);
    if (htmlElement) {
      htmlElement.onmouseover = () => {
        window.open(this.map, marker);
      };

      htmlElement.onmouseout = () => {
        window.close(this.map, marker);
      };
    }

  }

  render() {
    return (
      <div ref="map" id="google-map" />
    );
  }
}

export default withRouter(MapItem);
