import React, { Component } from 'react';
import ScheduleIndexItem from './schedule_index_item';

class ScheduleIndex extends Component {

  componentDidMount(){
    const userIdArr = this.props.currentUser._id.split(':');
    let userId;
    console.log(userIdArr, userId);
    if (userIdArr.length > 1) {
      userId = userIdArr[userIdArr.length - 1].slice(1, userIdArr[userIdArr.length - 1].length - 1);
    } else {
      userId = this.props.currentUser._id;
    }
    console.log(userId);
    // this.props.fetchSchedules(userId)
  }
  render(){
    console.log(this.props);
    const {schedules} = this.props;
    const schedule = (schedules) => {
      if (schedules) {
        return "{schedules.map(schedule => <ScheduleIndexItem schedule={schedule} key={schedule.id}/> )}"
      } else {
        return ''
      }
    }

    console.log('schedule: ',schedule);
    return(
      <div>
        <h2> Upcoming Services </h2>
        <ul>

        </ul>
      </div>
    );
  };
}

export default ScheduleIndex;
