import React, { Component } from 'react';
import Calendar from 'react-calendar/dist/entry.nostyle';

class CalendarShow extends Component {
  constructor(props){
    super(props);
    this.state = {
        date: new Date()
      };
    this.processTime = this.processTime.bind(this);
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


    const schedules = {};
    allSchedules.forEach ( el => {
      schedules[el.date.slice(0,10)]=el.type;
    });

    const tileContent = ({ date }) => {
      const currentDate = new Date(date).toJSON().slice(0,10);
      return Object.keys(schedules).includes(currentDate) ?
        <p className="service-day">{schedules[currentDate]}</p> : null;
    };
    return(
      <div className='user-calendar'>
        <h2> Services Calendar</h2>
        <Calendar className="cal"
          onChange={(e) => this.onChange(e)}
          value={date}
          showNavigation={true}
          tileContent={tileContent}
          />
      </div>
    );
  }
}

export default CalendarShow;
