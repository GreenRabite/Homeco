import React from 'react';
import ContractorModal from './contractor_modal';
import { Link } from 'react-router-dom';
import ReactModal from 'react-modal';
import ContractorFormContainer from './contractor_form_container';

class ServiceListItem extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      showModal: true
    };
    this.formatDate = this.formatDate.bind(this);
    this.getDayOfWeek = this.getDayOfWeek.bind(this);
    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
  }

  componentDidMount(){
    ReactModal.setAppElement('#root');
    this.setState({ showModal: false });
  }

  // componentWillReceiveProps(){
  //   this.setState({ showModal: false });
  // }

  formatDate(oldDate) {
    let monthNames = [
      "January", "February", "March",
      "April", "May", "June", "July",
      "August", "September", "October",
      "November", "December"
    ];
    // debugger;
    let date = new Date(oldDate);
    let day = date.getDate();
    let monthIndex = date.getMonth();
    let year = date.getFullYear();

    return `${monthNames[monthIndex]} ${day}, ${year}`;
  }

  getDayOfWeek(oldDate) {
    let dayOfWeek = new Date(oldDate).getDay();
    return isNaN(dayOfWeek) ? null : ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'][dayOfWeek];
  }

  handleOpenModal () {
    this.setState({ showModal: true });
  }

  handleCloseModal () {
    this.setState({ showModal: false });
  }

  render(){
    return (
      <div className="contractor-schedule-information" key={this.props.schedule._id}>
        <div>{this.getDayOfWeek(this.props.schedule.workDate)}</div>
        <div>{this.props.schedule._service.serviceType}</div>
        <div>{this.formatDate(this.props.schedule.workDate)}</div>
        <div className="city">{`${this.props.schedule._package._property.city}, ${this.props.schedule._package._property.state}`}</div>
        <br/>
        <div className="btn-container">
          <button onClick={this.handleOpenModal} className="button">Finished</button>
        </div>
          <div className="modal-container">
            <ReactModal
              isOpen={this.state.showModal}
              contentLabel="onRequestClose Example"
              onRequestClose={this.handleCloseModal}
              className="Modal-contractor-form"
              overlayClassName="Overlay-photo-form"
              shouldCloseOnOverlayClick={true}
              ariaHideApp={false}
              >
              <ContractorFormContainer schedule={this.props.schedule} handleCloseModal={this.handleCloseModal}/>

            </ReactModal>
          </div>
      </div>
    );
  }
}

export default ServiceListItem;
