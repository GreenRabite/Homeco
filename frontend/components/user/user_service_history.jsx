import React from 'react';
import ServiceHistoryItem from './user_service_history_item';

class ServiceHistory extends React.Component {
  constructor(){
    super();
    this.state = {start: 0, end: 7, page: 1};
  }

  componentDidMount(){
    if (this.props.currentUser) {
      const userIdArr = this.props.currentUser._id.split(':');
      let userId;
      if (userIdArr.length > 1) {
        userId = userIdArr[userIdArr.length - 1].slice(1, userIdArr[userIdArr.length - 1].length - 1);
      } else {
        userId = this.props.currentUser._id;
      }
      this.props.fetchUserSchedules(userId, true);
    }
  }

  componentWillReceiveProps(nextProps){
    if (!this.props.currentUser && nextProps.currentUser) {
      const userIdArr = nextProps.currentUser._id.split(':');
      let userId;
      if (userIdArr.length > 1) {
        userId = userIdArr[userIdArr.length - 1].slice(1, userIdArr[userIdArr.length - 1].length - 1);
      } else {
        userId = nextProps.currentUser._id;
      }
      this.props.fetchUserSchedules(userId, true);
    }
  }

  handleMore(){
    if (this.state.start < Object.values(this.props.schedules).length - 7) {
      this.setState({start: this.state.start + 7, end: this.state.end + 7, page: this.state.page + 1})
    }
  }

  handleLess(){
    if (this.state.start >= 7) {
      this.setState({start: this.state.start - 7, end: this.state.end - 7, page: this.state.page - 1})
    }
  }

  render(){
    const schedules = Object.values(this.props.schedules);
    schedules.sort(function(a, b) {
      const c = new Date(a.workDate);
      const d = new Date(b.workDate);
      return d-c;
    });
    return(
    <div className='user-servicehistory'>
      <h1>Service History</h1>
      { schedules.length < 1 ?
        <div>You don't have Service History Yet</div>
         :
        <div>
          <button onClick={()=>this.handleLess()} className={this.state.start === 0 ? "button-disable more-button" : "more-button"}>
            <i className="fas fa-chevron-up"></i>
          </button>
          {schedules.slice(this.state.start, this.state.end).map(schedule=><ServiceHistoryItem key={schedule._id} schedule={schedule} reschedule={this.props.reschedule}/>)}
          <button onClick={()=>this.handleMore()} className={this.state.end >= schedules.length ? "button-disable more-button" : "more-button"}>
            <i className="fas fa-chevron-down"></i>
          </button>
        </div>
      }
    </div>
    );
  }

}

export default ServiceHistory;
