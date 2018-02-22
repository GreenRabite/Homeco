import React, { Component } from 'react';
import ScheduleIndexItem from './schedule_index_item';

class ScheduleIndex extends Component {

  render(){
    return(
      <div>
        <ul>
          <ScheduleIndexItem workDate={this.props.workDate} />
        </ul>
      </div>
    );
  };
}
