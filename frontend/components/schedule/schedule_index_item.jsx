import React, { Component } from 'react';

class ScheduleIndexItem extends Component {
  constructor(){
    super();
    this.state = {};
  }

  render () {
    const {schedule} = this.props;
    return (
      <div className='user-schedule-item'>
        {schedule._id ?
          <div className='user-schedule-detail'>
            <div>{schedule.serviceType}</div>
            <div>{new Date(schedule.workDate).toDateString()}</div>
          </div>
        : ""}
      </div>
    )
  }
}

export default ScheduleIndexItem;
