import { connect } from 'react-redux';
import CalendarShow from './calendar_show.jsx';

const allScheduleDates = ({schedules}) => Object.keys(schedules)
  .map(id => schedules[id].workDate);

const mapStateToPros = state => ({
  allSchedules: allScheduleDates(state.entities),
});

const mapDispatchToProps = dispatch => ({

});

export default connect(
  mapStateToPros,
  mapDispatchToProps
)(CalendarShow);
