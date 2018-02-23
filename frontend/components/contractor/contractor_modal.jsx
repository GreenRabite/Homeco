import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import ReactModal from 'react-modal';
import ContractorFormContainer from './contractor_form_container';


class ContractorModal extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      showModal: false
    };

    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
  }

  componentDidMount(){
    ReactModal.setAppElement('#root');
    this.setState({ showModal: false });
  }

  componentWillReceiveProps(){
    this.setState({ showModal: true });
  }

  handleOpenModal () {
    this.setState({ showModal: true });
  }

  handleCloseModal () {
    this.setState({ showModal: false });
  }

  render () {
    return (
      <div>
        <div className="modal-container">
          <ReactModal
            isOpen={this.state.showModal}
            contentLabel="onRequestClose Example"
            onRequestClose={this.handleCloseModal}
            overlayClassName="Overlay-photo-form"
            shouldCloseOnOverlayClick={true}
            >
            <ContractorFormContainer />
            <button onClick={this.handleCloseModal}>Close Modal</button>
          </ReactModal>
        </div>
      </div>
    );
  }
}


export default ContractorModal;
