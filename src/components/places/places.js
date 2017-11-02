import React from 'react';
import Modal from 'react-modal';
import Map from '../core/map';
import autoBind from 'react-autobind';
import customStyles from './styles';
import PlacesItem from './places_item';

class Places extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      modalIsOpen: true,
      loading: true,
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

  openModal() {
    this.setState({ modalIsOpen: true });
  }

  closeModal() {
    this.setState({ modalIsOpen: false });
  }

  drawWindow () {
    if (this.props.locations.length > 0) {
      return  <div className="places-tron">
                <ul className="list-group">
                  {this.props.locations.map(location => (
                    <PlacesItem 
                      location={location} 
                      key={location.id}
                      />
                  ))}
                </ul>
            </div>;
    }
  }

  render(){

    return(
      <div id="main">
        <Modal 
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          style={customStyles}
        >
          <div className="modal-container">
              <div className="top">
                <div>
                  Zenefits UI Demo
                </div>
                <button onClick={this.closeModal} type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="bottom">produced by Alex Sherman</div>
              <div className="buttons">
              <form onSubmit={this.handleSubmit} className="form-inline">
                <input value={this.state.searchString} onChange={this.handleChange} className="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search" />
                <button className="btn btn-outline-secondary my-2 my-sm-0" type="submit">Search</button>
              </form>
              </div>
          </div>
        </Modal>
        {this.drawWindow()}
        {<Map
          zoom={13}
          center={{ lat: 37.7849, lng: -122.4394 }}
          positions={this.props.locations}
        />}
      </div>
    );
  }
}

Places.defaultProps = {
  locations: []
};

Places.propTypes = {
  locations: React.PropTypes.array,
  requestLocations: React.PropTypes.func
};

export default Places;
