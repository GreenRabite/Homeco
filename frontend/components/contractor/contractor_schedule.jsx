import React from 'react';
// import ScheduleContainer from './schedule_container';
import CalendarContainer from '../calendar/calendar_container';

const ContractorSchedule = () =>{
  return (
    <div className="contractor-schedules">
      <p>We know that tracking all your clients can be hard work.
        That's why we made it completely simple! Take a look at all
        your upcoming schedules with a snap of a button</p>
      <CalendarContainer />
    </div>
  );
};

export default ContractorSchedule;
