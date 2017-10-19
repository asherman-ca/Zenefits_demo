import React from 'react';

class PlacesDetail extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <nav className="navbar navbar=expand-lg navbar-dark bg-dark justify-content-between">
          <a className="navbar-brand zenefits">Zenefits UI Demo</a>
          <form className="form-inline">
            <input className="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search" />
            <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
          </form>
        </nav>
        {this.props.children}
      </div>
    );
  }
}

export default PlacesDetail;
