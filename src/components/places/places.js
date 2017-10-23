import React from 'react';
import Modal from 'react-modal';
import Map from '../core/map';
import autoBind from 'react-autobind';
import customStyles from './styles';

class Places extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      modalIsOpen: true
    };

    autoBind(this);
  }  

  openModal() {
    this.setState({ modalIsOpen: true });
  }

  closeModal() {
    this.setState({ modalIsOpen: false });
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
        <section id="main-section">
          <Map />
        </section>
      </div>
    );
  }
}

export default Places;
