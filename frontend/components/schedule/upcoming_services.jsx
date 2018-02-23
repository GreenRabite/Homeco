import React from 'react';
import ScheduleContainer from './schedule_container';
import CalendarContainer from '../calendar/calendar_container';

const UpcomingServices = () => (
  <div className="upcoming-services">
    <ScheduleContainer />
    <CalendarContainer />
  </div>
);

export default UpcomingServices;
