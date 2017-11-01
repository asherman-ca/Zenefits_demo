/* global google:false */

class MarkerManager {
  constructor(map) {
    this.map = map;
    this.markers = {};
  }

  updateMarkers(places) {
    const placesObj = {};
    places.forEach(place => placesObj[place.id] = place);

    places
      .filter(place => !this.markers[place.id])
      .forEach(newplace => this.createMarkerFromPlace(newplace, this.handleClick))

  }

  createMarkerFromPlace(place) {
    const position = new google.maps.LatLng(place.lat, place.lng);
    const marker = new google.maps.Marker({
      position,
      map: this.map,
      placeId: place.id
    });

    // marker.addListener('click', () => this.handleClick(place));
    this.markers[marker.placeId] = marker;
    console.log(place);
  }

  // removeMarker(marker) {
  //   this.markers[marker.benchId].setMap(null);
  //   delete this.markers[marker.benchId];
  // }
}

export default MarkerManager;
