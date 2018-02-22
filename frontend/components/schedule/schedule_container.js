import { connect } from 'react-redux';
import ScheduleIndex from './schedule_index';
import { receiveSchedule, receiveSchedules } from '../../actions/schedule_actions'

const mapStateToPros = (state) => ({
  schedules: state.entities.schedules,
  currentUser: state.session.currentUser
});

const mapDispatchToProps = (dispatch) => ({
  // receiveSchedule: (schedule) => dispatch(receiveSchedule(schedule)),
  fetchSchedules: (userId) => dispatch(fetchSchedules(userId))
});


export default connect(
  mapStateToPros,
  mapDispatchToProps
)(ScheduleIndex);
