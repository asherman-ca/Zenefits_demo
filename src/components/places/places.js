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
      loading: true
    };

    autoBind(this);
  }  

  openModal() {
    this.setState({ modalIsOpen: true });
  }

  closeModal() {
    this.setState({ modalIsOpen: false });
  }

  drawWindow () {
    if (this.props.locations.length > 0) {
      return <div className="places-tron">
                <ul className="list-group">
                  {this.props.locations.map(location => (
                    <PlacesItem location={location} />
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
              <button type="button" onClick={this.closeModal} className="btn btn-secondary" data-dismiss="modal">Close</button>
              </div>
          </div>
        </Modal>
        {this.drawWindow()}
        <Map
          zoom={13}
          center={{ lat: 37.7849, lng: -122.4394 }}
          positions={this.props.locations}
        />
      </div>
    );
  }
}

Places.propTypes = {
  locations: React.PropTypes.array.isRequired
};

export default Places;
