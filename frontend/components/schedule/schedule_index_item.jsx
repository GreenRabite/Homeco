import React, { Component } from 'react';
import ReactModal from 'react-modal';

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
      showModal: false,
      date: "",
      className: "hidden"
    };
    // this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
    this.reschedule = this.reschedule.bind(this);
  }

  handleOpenModal (e) {
    if (e.target.className == "user-schedule-item") {
      this.setState({ showModal: true });
    }
  }

  handleCloseModal () {
    this.setState({ showModal: false });
  }

  componentDidMount(){
    ReactModal.setAppElement('#root');
    this.setState({ modalIsOpen: false });
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
    const today = new Date(Date.now());
    const updateDate = new Date(e.target.value);
    if (this.state.className === '') {
      this.setState({className: 'hidden'});
    }
    if (updateDate < today) {
      this.setState({className: ""});
    } else {
      this.setState({date: e.target.value});
    }
  }

  sendReschedule(e){
    e.preventDefault();
    this.props.reschedule(this.props.schedule._id, this.state.date);
    // this.setState({modalIsOpen: false});
    this.handleCloseModal();
  }

  render () {
    const {schedule} = this.props;
    return (
      <div onClick={(e)=>this.handleOpenModal(e)} className='user-schedule-item'>
        {schedule._id ?
        <div>
          <div className='user-schedule-detail'>
            <div>{schedule.serviceType}</div>
            <div>{new Date(schedule.workDate).toDateString()}</div>
          </div>
          <ReactModal
            isOpen={this.state.showModal}
            onRequestClose={this.handleCloseModal}
            style={customStyles}
          >
            <div className='modal-title'>
              <h2>Reschedule Service</h2>
              <div onClick={this.handleCloseModal} className='modal-close'>
                <span>&times;</span>
              </div>
            </div>
            <form className='reschedule'>
              <div className={`hint ${this.state.className}`}>Please choose the day after today</div>
              <input value={this.state.date} onChange={(e)=>this.reschedule(e)} type='date' />
              <input onClick={(e)=>this.sendReschedule(e)} type='submit'/>
            </form>
          </ReactModal>
        </div>
        : ""}
      </div>
    )
  }
}

export default ScheduleIndexItem;
