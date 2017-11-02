import React from 'react';

const Header = ({location}) => {
  return (
    <li className="list-group-item" key={location.id}>
      <p>
        <a className="location-item" data-toggle="collapse" href={`#${location.id}`} aria-expanded="false" aria-controls={`${location.id}`} id={location.name}>
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

export default Header;