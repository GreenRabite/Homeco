import { connect } from 'react-redux';
import ScheduleIndex from './schedule_index';
import {fetchUserSchedules} from '../../actions/schedule_actions';

const mapStateToPros = (state) => ({
  schedules: state.entities.schedules,
  currentUser: state.session.currentUser
});

const mapDispatchToProps = (dispatch) => ({
  fetchUserSchedules: (userId) => dispatch(fetchUserSchedules(userId))
});


export default connect(
  mapStateToPros,
  mapDispatchToProps
)(ScheduleIndex);
