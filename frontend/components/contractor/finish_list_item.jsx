import React from 'react';
import { Link } from 'react-router-dom';
import ReactModal from 'react-modal';
import ContractorFormContainer from './contractor_form_container';

class FinishListItem extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      showModal: false
    };
    this.formatDate = this.formatDate.bind(this);
    this.getDayOfWeek = this.getDayOfWeek.bind(this);
    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
  }

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
    return(
        <div className="contractor-schedule-information" key={this.props.schedule._id}>
          <div className="finish-task service-list-modal" onClick={this.handleOpenModal}>
            <div className="">
              <div><b>{this.getDayOfWeek(this.props.schedule.workDate)}</b></div>
              <div>{this.props.schedule._service.serviceType}</div>
              <div>{this.formatDate(this.props.schedule.workDate)}</div>
              <div className="city">{`${this.props.schedule._package._property.city}, ${this.props.schedule._package._property.state}`}</div>
              <br/>
            </div>
            <img className="icon-container2" src="http://res.cloudinary.com/greenrabite/image/upload/v1519633901/checkmark.svg"></img>
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

export default FinishListItem;
