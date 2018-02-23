import React, { Component } from 'react';
import Modal from 'react-modal';

const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)',
    width                 : '350px'
  }
};


class ServiceHistoryItem extends Component {
  constructor(){
    super();
    this.state = {
      modalIsOpen: false
    };
    this.afterOpenModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  openModal() {
    this.setState({modalIsOpen: true});
  }

  afterOpenModal() {
    this.subtitle.style.color = '#f00';
  }

  closeModal() {
    this.setState({modalIsOpen: false});
  }

  componentDidMount(){
    if (this.props.schedule) {
      this.setState({date: this.props.schedule.workDate.slice(0,10)})
    }
  }

  componentWillReceiveProps(nextProps){
    if (!this.props.schedule && nextProps.schedule) {
      this.setState({date: nextProps.schedule.workDate.slice(0, 10)})
    }
  }


  render () {
    const {schedule} = this.props;
    return (
      <div className='user-schedule-item'>
        {schedule._id ?
        <div>
          <div className='user-schedule-detail'>
            <div>{schedule.serviceType}</div>
            <div>{new Date(schedule.workDate).toDateString()}</div>
          </div>
        </div>
        : ""}
      </div>
    )
  }
}

export default ServiceHistoryItem;

// <Modal
//   isOpen={this.state.modalIsOpen}
//   onRequestClose={this.closeModal}
//   style={customStyles}
//   ariaHideApp={false}
// >
//   <div className='modal-title'>
//     <h2 ref={subtitle => this.subtitle = subtitle}>Reschedule Service</h2>
//     <div onClick={this.closeModal} className='modal-close'>
//       <span>&times;</span>
//     </div>
//   </div>
//   <form className='reschedule'>
//     <div className={`hint ${this.state.className}`}>Please choose the day after today</div>
//     <input value={this.state.date} onChange={(e)=>this.reschedule(e)} type='date' />
//     <input onClick={(e)=>this.sendReschedule(e)} type='submit'/>
//   </form>
// </Modal>
