import React from 'react';

const PlacesItem = ({location}) => {
  return (
    <li className="list-group-item" key={location.id} data-toggle="collapse" href={`#${location.id}`} aria-expanded="false" aria-controls={`${location.id}`} id={location.name}>
      <p>
        <a className="location-item" >
          {location.name}
        </a>
      </p>
      <div className="collapse" id={`${location.id}`}>
        <div className="card card-body">
          {location.vicinity}
        </div>
      </div>
    </li>
  );
};

PlacesItem.defaultProps = {
  location: {}
};

PlacesItem.propTypes = {
  location: React.PropTypes.object
};

export default PlacesItem;