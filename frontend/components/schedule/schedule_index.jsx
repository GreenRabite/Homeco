import React, { Component } from 'react';
import ScheduleIndexItem from './schedule_index_item';

class ScheduleIndex extends Component {

  render(){
    const {schedules} = this.props;
    return(
      <div>
        <h2> My Schedule </h2>
        <ul>
          {schedules.map(schedule => <ScheduleIndexItem workDate={schedule.workDate} key={schedule.id}/> )}
        </ul>
      </div>
    );
  };
}
