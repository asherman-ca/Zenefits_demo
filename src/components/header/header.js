import React from 'react';
import autoBind from 'react-autobind';

class Header extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      searchString: 'chicken'
    };

    autoBind(this);
  }

  handleClick() {
    this.props.requestLocations(this.state.searchString);
  }

  render() {
    return (
      <div>
      <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark justify-content-between">
        <a className="navbar-brand">
            <img onClick={() => console.log(this.props.locations)} className="zenefits-logo" src="https://cdn.worldvectorlogo.com/logos/zenefits.svg"/>
        </a>
        <form className="form-inline">
          <input className="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search"/>
            <button onClick={this.handleClick} className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
        </form>
      </nav>
        {this.props.children}
      </div>
    );
  }
}

export default Header;
