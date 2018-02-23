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


class ScheduleIndexItem extends Component {
  constructor(){
    super();
    this.state = {
      modalIsOpen: false,
      date: ""
    };
    this.afterOpenModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.reschedule = this.reschedule.bind(this);
  }

  openModal() {
    // debugger
    this.setState({modalIsOpen: true});
  }

  afterOpenModal() {
    this.subtitle.style.color = '#f00';
  }

  closeModal() {
    // debugger
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

  reschedule(e){
    this.setState({date: e.target.value});
  }

  sendReschedule(e){
    e.preventDefault();
    this.props.reschedule(this.props.schedule._id, this.state.date);
    this.setState({modalIsOpen: false});
  }

  render () {
    const {schedule} = this.props;
    return (
      <div onClick={()=>this.openModal()} className='user-schedule-item'>
        {schedule._id ?
        <div>
          <div className='user-schedule-detail'>
            <div>{schedule.serviceType}</div>
            <div>{new Date(schedule.workDate).toDateString()}</div>
          </div>
          <Modal
            isOpen={this.state.modalIsOpen}
            onRequestClose={this.closeModal}
            style={customStyles}
            ariaHideApp={false}
          >
            <div className='modal-title'>
              <h2 ref={subtitle => this.subtitle = subtitle}>Reschedule Service</h2>
              <div onClick={this.closeModal} className='modal-close'>
                <span>&times;</span>
              </div>
            </div>
            <form className='reschedule'>
              <input value={this.state.date} onChange={(e)=>this.reschedule(e)} type='date' />
              <input onClick={(e)=>this.sendReschedule(e)} type='submit'/>
            </form>
          </Modal>
        </div>
        : ""}
      </div>
    )
  }
}

export default ScheduleIndexItem;
