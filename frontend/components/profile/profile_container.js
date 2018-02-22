import React from 'react';
import { connect } from 'react-redux';
import Profile from './profile';
import { receiveSchedule, receiveSchedules } from '../../actions/schedule_actions'

import Profile from './profile';

const mapStateToPros = (state) => ({
  schedule: state.entities.schedules
});

const mapDispatchToProps = (dispatch) => ({
  receiveSchedule: (schedule) => dispatch(receiveSchedule(schedule)),
  receiveSchedules: (schedules) => dispatch(receiveSchedules(schedules))
});

export default connect(
  mapStateToPros,
  mapDispatchToProps
)(Profile);
