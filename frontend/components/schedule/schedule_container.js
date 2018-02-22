import { connect } from 'react-redux';
import { receiveSchedule } from '../../actions/schedule_actions'
import ScheduleIndex from './schedule_index';
import { receiveSchedule, receiveSchedules } from '../../actions/schedule_actions'

const mapStateToPros = (state) => ({
  schedule: state.entities.schedules
});

const mapDispatchToProps = (dispatch) => ({
  receiveSchedule: (schedule) => dispatch(receiveSchedule(schedule)),
  receiveSchedules: (schedules) => dispatch(receiveSchedules(schedules))
});


export defult connect(
  mapStateToPros,
  mapDispatchToProps
)(ScheduleIndex);
