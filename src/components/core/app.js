import React from 'react';
import Modal from 'react-modal';
import Map from './map';
import autoBind from 'react-autobind';
import customStyles from './styles';

class App extends React.Component {
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

  afterOpenModal() {
    this.subtitle.style.color = '#f00';
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
            <div className="container">
              <h1>Zenefits UI Demo</h1>
              <p>produced by Alex Sherman</p>
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

export default App;
