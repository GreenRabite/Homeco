import React, { Component } from 'react';
import Calendar from 'react-calendar/dist/entry.nostyle';

class CalendarShow extends Component {
  constructor(){
    super();
    this.state = {
        date: new Date()
      };
  }

  handleOnChange (date){
    this.setState({date: date});
  }

  render(){
    console.log(this.props);
    // console.log('schedule: ',schedule);
    const {date} = this.state;
    return(
      <div className='user-calendar'>
        <h2> Services Calendar</h2>
        <Calendar onChange={this.handleOnChange} value={date} />
      </div>
    );
  }
}

export default CalendarShow;
