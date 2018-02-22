import React, { Component } from 'react';

class ScheduleIndexItem extends Component {

  render () {
    return (
      <li>
        workDate: {this.props.workDate} | Package
      </li>
    )
  }
}
