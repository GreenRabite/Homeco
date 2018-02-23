import React, { Component } from 'react';
import ScheduleIndexItem from './schedule_index_item';

class ScheduleIndex extends Component {
  constructor(){
    super();
    this.state = {};
  }

  componentDidMount(){
    const userIdArr = this.props.currentUser._id.split(':');
    let userId;
    if (userIdArr.length > 1) {
      userId = userIdArr[userIdArr.length - 1].slice(1, userIdArr[userIdArr.length - 1].length - 1);
    } else {
      userId = this.props.currentUser._id;
    }
    this.props.fetchUserSchedules(userId);
  }


  render(){
    const schedules = Object.values(this.props.schedules);
    const sortSchedules = schedules.sort(function(a, b) {
      const c = new Date(a.workDate);
      const d = new Date(b.workDate);
      return c-d;
    });
    return(
      <div className='user-schedules'>
        <h2> Upcoming Services </h2>
          {schedules.length > 1 ?
            <div>
              {schedules.map(schedule=><ScheduleIndexItem key={schedule._id} schedule={schedule} />)}
            </div>
           : ""}
      </div>
    );
  };
}

export default ScheduleIndex;
