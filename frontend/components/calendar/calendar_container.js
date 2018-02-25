import { connect } from 'react-redux';
import CalendarShow from './calendar_show.jsx';

// const allScheduleDates = ({schedules}) => Object.keys(schedules)
//   .map(id => schedules[id].workDate);
// const allScheduleTypes = ({schedules}) => Object.keys(schedules)
//   .map(id => schedules[id].serviceType);

const allSchedules = ({schedules}) => Object.keys(schedules)
  .map(id => (
    {
      date: schedules[id].workDate,
      type: schedules[id].serviceType,
      // completed: schedules[id].completed
    }
  )
);


const mapStateToPros = state => ({
  // allSchedules: allScheduleDates(state.entities),
  allSchedules: allSchedules(state.entities)
});

const mapDispatchToProps = dispatch => ({

});

export default connect(
  mapStateToPros,
  mapDispatchToProps
)(CalendarShow);
