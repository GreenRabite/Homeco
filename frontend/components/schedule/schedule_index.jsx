import React, { Component } from 'react';
import ScheduleIndexItem from './schedule_index_item';

class ScheduleIndex extends Component {
  constructor(props){
    super(props);
    this.state = {start: 0, end: 7, page: 1};
  }

  componentDidMount(){
    if (this.props.currentUser && !Object.values(this.props.schedules).length) {
      debugger
      const userIdArr = this.props.currentUser._id.split(':');
      let userId;
      if (userIdArr.length > 1) {
        userId = userIdArr[userIdArr.length - 1].slice(1, userIdArr[userIdArr.length - 1].length - 1);
      } else {
        userId = this.props.currentUser._id;
      }
      this.props.fetchUserSchedules(userId, false);
    }
  }

  componentWillReceiveProps(nextProps){
    if (!this.props.currentUser && nextProps.currentUser && !Object.values(this.props.schedules).length) {
      debugger
      const userIdArr = nextProps.currentUser._id.split(':');
      let userId;
      if (userIdArr.length > 1) {
        userId = userIdArr[userIdArr.length - 1].slice(1, userIdArr[userIdArr.length - 1].length - 1);
      } else {
        userId = nextProps.currentUser._id;
      }
      this.props.fetchUserSchedules(userId, false);
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
      return c-d;
    });
    return(
      <div className='user-schedules'>
        <h2> Upcoming Services </h2>
          {schedules.length >= 1 ?
            <div className='user-schedules-index'>
              <button onClick={()=>this.handleLess()} className={this.state.start === 0 ? "button-disable more-button" : "more-button"}>
                <i className="fas fa-chevron-up"></i>
              </button>
              {schedules.slice(this.state.start, this.state.end).map(schedule=><ScheduleIndexItem key={schedule._id} schedule={schedule} reschedule={this.props.reschedule}/>)}
              <button onClick={()=>this.handleMore()} className={this.state.end >= schedules.length ? "button-disable more-button" : "more-button"}>
                <i className="fas fa-chevron-down"></i>
              </button>
            </div>
           : ""}
      </div>
    );
  };
}

export default ScheduleIndex;
