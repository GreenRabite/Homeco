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
    width                 : '50%'
  }
};

class ServiceHistoryItem extends Component {
  constructor(){
    super();
    this.state = {
      modalIsOpen: false
    };
    this.handleCloseModal = this.handleCloseModal.bind(this);
  }

  handleOpenModal (e) {
    if (e.target.className == "user-schedule-item"
        || e.target.className == 'schedule-status'
        || e.target.className == 'user-schedule-detail'
      ) {
      this.setState({ modalIsOpen: true });
    }
  }

  handleCloseModal () {
    this.setState({ modalIsOpen: false });
  }

  // componentDidMount(){
  //   if (this.props.schedule) {
  //     this.setState({date: this.props.schedule.workDate.slice(0,10)})
  //   }
  // }
  //
  // componentWillReceiveProps(nextProps){
  //   if (!this.props.schedule && nextProps.schedule) {
  //     this.setState({date: nextProps.schedule.workDate.slice(0, 10)})
  //   }
  // }

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
          <div onClick={(e)=>this.handleOpenModal(e)} className='schedule-status'>Status: Completed</div>
          <ReactModal
            isOpen={this.state.modalIsOpen}
            onRequestClose={this.handleCloseModal}
            style={customStyles}
            ariaHideApp={false}
          >
            <div className='modal-title'>
              <h2 ref={subtitle => this.subtitle = subtitle}>{schedule.serviceType}</h2>
              <div onClick={this.handleCloseModal} className='modal-close'>
                <span>&times;</span>
              </div>
            </div>
            <p>Description</p>
            <span>{schedule.description}</span>
            <div>
              {schedule.img_url && schedule.img_url.length ?
                <div>{schedule.img_url.map((url, idx)=>
                    <div className='service-history-img-container' key={idx}>
                      <img src={url} />
                    </div>)}
                </div>
              : ""}
              <img src=""/>
              <img src=""/>
            </div>
          </ReactModal>
        </div>
        : ""}
      </div>
    )
  }
}

export default ServiceHistoryItem;
