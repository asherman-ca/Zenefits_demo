import React from 'react';
import autoBind from 'react-autobind';

class Header extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      searchString: ''
    };

    autoBind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.requestLocations(this.state.searchString);
  }

  handleChange(e) {
    this.setState({ searchString: e.target.value });
  }

  render() {
    return (
      <div>
      <nav className="navbar fixed-top navbar-expand-lg navbar-light bg-light justify-content-between">
        <a className="navbar-brand">
            <img className="zenefits-logo" src="https://cdn.worldvectorlogo.com/logos/zenefits.svg"/>
        </a>
        <form onSubmit={this.handleSubmit} className="form-inline">
          <input value={this.state.searchString} onChange={this.handleChange} className="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search"/>
            <button className="btn btn-outline-secondary my-2 my-sm-0" type="submit">Search</button>
        </form>
      </nav>
        {this.props.children}
      </div>
    );
  }
}

Header.propTypes = {
  children: React.PropTypes.object,
  requestLocations: React.PropTypes.func
};

export default Header;
