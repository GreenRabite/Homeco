import React, { Component } from 'react';
import Calendar from 'react-calendar/dist/entry.nostyle';

class CalendarShow extends Component {
  constructor(props){
    super(props);
    this.state = {
        date: new Date()
      };
  }

  onChange(date) {
    this.setState({date});
  }

  processTime(timeStr){
    const time = new Date(timeStr).getTime();
    const day = Math.ceil(time / (24 * 60 * 60 * 1000));
    return day;
  }

  render(){
    const {date} = this.state;
    const {allSchedules} = this.props;
    const scheduleTimes = allSchedules.map( el => this.processTime(el));

    const tileContent = ({ date }) => (
      scheduleTimes.includes(this.processTime(new Date(date).getTime())) ?
      <p>Service Day!</p> : null);
    return(
      <div className='user-calendar'>
        <h2> Services Calendar</h2>
        <Calendar
          onChange={(e) => this.onChange(e)}
          value={date}
          showNavigation={true}
          tileContent={tileContent}/>
      </div>
    );
  }
}

export default CalendarShow;
