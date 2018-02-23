import React, { Component } from 'react';

class ScheduleIndexItem extends Component {
  constructor(){
    super();
    this.state = {};
  }

  render () {
    const {schedule} = this.props;
    return (
      <div>
        {schedule._id ?
          <div>
            <div>{schedule.serviceType}</div>
            <div>{schedule.workDate}</div>
          </div>
        : ""}
    </div>
    )
  }
}

export default ScheduleIndexItem;
